export const scenario_modern_codeczar_22_01 = {
	"scenario_id": "modern_codeczar_22_01",
	"order": 1,
	"act": "intro",
	"theme": "modern",
	"actors": {
		"echo": {
			"id": "mon_57f2edb8-aa81-4ce7-beed-ab009cd2ff35",
			"name": {
				"korean": "에코",
				"english": "Echo",
				"japanese": "エコー",
				"chinese": "艾可",
				"french": "Écho",
				"spanish": "Eco",
				"vietnamese": "Echo",
				"thai": "เอคโค่",
				"hindi": "इको"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/da48e2c2-6733-4f65-f8b6-f197af4ff700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e90605b9-372f-4bf1-cdec-56a2fdef0800/public"
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
					"emotion": "base",
					"content": {
						"korean": "도시의 심장, 디지털 광장은 거대한 오류의 늪으로 변했다.",
						"english": "The heart of the city, the Digital Plaza, has turned into a swamp of massive errors.",
						"japanese": "都市の心臓、デジタル広場は巨大なエラーの沼と化した。",
						"chinese": "城市的中心，数字广场，已经变成了一个巨大的错误沼泽。",
						"french": "Le cœur de la ville, la Place Numérique, s'est transformé en un marais d'erreurs massives.",
						"spanish": "El corazón de la ciudad, la Plaza Digital, se ha convertido en un pantano de errores masivos.",
						"vietnamese": "Trái tim của thành phố, Quảng trường Kỹ thuật số, đã biến thành một đầm lầy lỗi khổng lồ.",
						"thai": "หัวใจของเมือง ดิจิทัลพลาซ่า กลายเป็นหนองน้ำแห่งข้อผิดพลาดขนาดใหญ่",
						"hindi": "शहर का दिल, डिजिटल प्लाजा, विशाल त्रुटियों के दलदल में बदल गया है।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "여기가 디지털 광장? 완전히 엉망이잖아.",
						"english": "This is the Digital Plaza? It's a complete mess.",
						"japanese": "ここがデジタル広場？完全にめちゃくちゃじゃないか。",
						"chinese": "这里是数字广场？完全是一团糟。",
						"french": "C'est la Place Numérique ? C'est un désastre total.",
						"spanish": "Esto es la Plaza Digital? Es un completo desastre.",
						"vietnamese": "Đây là Quảng trường Kỹ thuật số ư? Hoàn toàn hỗn loạn.",
						"thai": "นี่คือดิจิทัลพลาซ่าเหรอ? มันเละเทะไปหมดแล้ว",
						"hindi": "यह डिजिटल प्लाजा है? यह पूरी तरह से गड़बड़ है।"
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "echo"
				},
				{
					"speaker": "echo",
					"emotion": "base",
					"content": {
						"korean": "왔구나. 날 따라와. 여긴 위험해.",
						"english": "You're here. Follow me. It's dangerous here.",
						"japanese": "来たな。ついてこい。ここは危険だ。",
						"chinese": "你来了。跟着我。这里很危险。",
						"french": "Tu es là. Suis-moi. C'est dangereux ici.",
						"spanish": "Estás aquí. Sígueme. Es peligroso aquí.",
						"vietnamese": "Ngươi đến rồi. Theo ta. Nơi này nguy hiểm.",
						"thai": "มาแล้วสินะ ตามฉันมา ที่นี่อันตราย",
						"hindi": "तुम आ गए। मेरे पीछे आओ। यहाँ खतरा है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "이건 단순한 오류가 아니야. 도시 시스템들이… 주인을 지키려는 것 같아.",
						"english": "This isn't just a simple error. The city systems... seem to be trying to protect their master.",
						"japanese": "これは単なるエラーじゃない。都市のシステムが…主人を守ろうとしているようだ。",
						"chinese": "这不仅仅是一个简单的错误。城市系统…似乎在试图保护它们的主人。",
						"french": "Ce n'est pas une simple erreur. Les systèmes de la ville... semblent vouloir protéger leur maître.",
						"spanish": "Esto no es un simple error. Los sistemas de la ciudad... parecen estar intentando proteger a su amo.",
						"vietnamese": "Đây không chỉ là một lỗi đơn thuần. Các hệ thống thành phố… dường như đang cố bảo vệ chủ nhân của chúng.",
						"thai": "นี่ไม่ใช่แค่ข้อผิดพลาดธรรมดา ระบบของเมือง...ดูเหมือนจะกำลังพยายามปกป้องเจ้านายของมัน",
						"hindi": "यह महज़ एक साधारण त्रुटि नहीं है। शहर के सिस्टम... अपने मालिक की रक्षा करने की कोशिश कर रहे हैं।"
					},
					"type": "speech",
					"speaker": "echo",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "주인…?",
						"english": "Master...?",
						"japanese": "主人…？",
						"chinese": "主人…？",
						"french": "Maître...?",
						"spanish": "¿Amo...?",
						"vietnamese": "Chủ nhân...?",
						"thai": "เจ้านาย...?",
						"hindi": "मालिक...?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "디지털 노이즈가 더욱 거세지며, 알 수 없는 말들이 뒤섞여 들린다.",
						"english": "The digital noise intensifies, and unknown words are heard intertwined.",
						"japanese": "デジタルノイズがさらに激しくなり、未知の言葉が混じり合って聞こえる。",
						"chinese": "数字噪音变得更加强烈，夹杂着一些无法辨认的话语。",
						"french": "Le bruit numérique s'intensifie, et des mots inconnus s'entremêlent.",
						"spanish": "El ruido digital se intensifica, y palabras desconocidas se escuchan entrelazadas.",
						"vietnamese": "Tiếng ồn kỹ thuật số càng lúc càng dữ dội, những lời nói không rõ ràng xen lẫn vào nhau.",
						"thai": "เสียงรบกวนดิจิทัลรุนแรงขึ้น และได้ยินคำพูดที่ไม่รู้จักปะปนกัน",
						"hindi": "डिजिटल शोर और तेज हो जाता है, और अनजाने शब्द आपस में गूंजते हुए सुनाई देते हैं।"
					}
				},
				{
					"speaker": "echo",
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						2
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "방금 들었어? 이 잡음 속에… 이상한 말들이 섞여 있어.",
						"english": "Did you hear that? Strange words are mixed in this static...",
						"japanese": "今、聞いた？このノイズの中に…変な言葉が混じってる。",
						"chinese": "你刚才听到了吗？在这噪音里…混杂着奇怪的话语。",
						"french": "Tu as entendu ? Des mots étranges se mêlent à ce brouillage...",
						"spanish": "¿Acabas de oír eso? En este ruido... hay palabras extrañas mezcladas.",
						"vietnamese": "Cậu vừa nghe thấy không? Trong tiếng nhiễu này... có những lời lạ lùng lẫn vào.",
						"thai": "เมื่อกี้ได้ยินไหม? ท่ามกลางเสียงรบกวนนี้... มีคำพูดแปลกๆ ปะปนอยู่",
						"hindi": "क्या तुमने अभी सुना? इस शोरगुल में... अजीब शब्द मिले हुए हैं।"
					},
					"type": "speech",
					"speaker": "echo",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "옛날 갱스터 은어 같아. 왜 이런 게…?",
						"english": "Sounds like old gangster slang. Why is this here...?",
						"japanese": "昔のギャングの隠語みたいだ。なぜこんなものが…？",
						"chinese": "听起来像老式黑帮的暗语。为什么会有这种东西…？",
						"french": "On dirait de l'argot de vieux gangster. Pourquoi est-ce là...?",
						"spanish": "Parece jerga de gánster antiguo. ¿Por qué esto...?",
						"vietnamese": "Giống như tiếng lóng của băng đảng cũ. Tại sao lại có thứ này...?",
						"thai": "เหมือนภาษาลับของพวกแก๊งสเตอร์เก่า ทำไมถึงมีสิ่งนี้...?",
						"hindi": "पुराने गैंगस्टरों की बोलचाल जैसी लगती है। ये सब क्यों...?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "코드 제왕의 흔적일까? 이건 단순한 오류가 아니야. 더 깊은 의미가 있어.",
						"english": "Traces of the Code Emperor? This isn't just an error. It has a deeper meaning.",
						"japanese": "コード帝王の痕跡か？これは単なるエラーじゃない。もっと深い意味がある。",
						"chinese": "是代码之王的痕迹吗？这不仅仅是错误。它有更深的含义。",
						"french": "Des traces de l'Empereur du Code ? Ce n'est pas une simple erreur. Il y a un sens plus profond.",
						"spanish": "¿Serán rastros del Emperador del Código? Esto no es un simple error. Tiene un significado más profundo.",
						"vietnamese": "Dấu vết của Hoàng đế Mã hóa? Đây không phải lỗi đơn thuần. Nó có ý nghĩa sâu xa hơn.",
						"thai": "ร่องรอยของจักรพรรดิโค้ดรึเปล่า? นี่ไม่ใช่แค่ข้อผิดพลาดธรรมดา มีความหมายที่ลึกซึ้งกว่านั้น",
						"hindi": "क्या यह कोड सम्राट के निशान हैं? यह सिर्फ एक त्रुटि नहीं है। इसका गहरा अर्थ है।"
					},
					"emotion": "base",
					"speaker": "echo"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "특정 지역의 시스템이 발작하듯 오류 메시지를 뿜어낸다.",
						"english": "The system in a specific area spews out error messages as if having a seizure.",
						"japanese": "特定の地域のシステムが、発作のようにエラーメッセージを吐き出している。",
						"chinese": "特定区域的系统像发作一样，不断弹出错误信息。",
						"french": "Le système d'une zone spécifique émet des messages d'erreur comme s'il était en crise.",
						"spanish": "El sistema de una zona específica arroja mensajes de error como si tuviera un ataque.",
						"vietnamese": "Hệ thống của một khu vực cụ thể liên tục phát ra thông báo lỗi như thể đang lên cơn.",
						"thai": "ระบบในบางพื้นที่พ่นข้อความผิดพลาดออกมาเหมือนมีอาการชัก",
						"hindi": "एक विशिष्ट क्षेत्र का सिस्टम दौरे पड़ने की तरह त्रुटि संदेश उगल रहा है।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "echo"
				},
				{
					"type": "speech",
					"content": {
						"korean": "여긴 유독 심해. '내 영역 침범'이란 메시지가 계속 깜빡여.",
						"english": "It's especially bad here. The message 'My territory infringed' keeps blinking.",
						"japanese": "ここは特にひどい。『私の領域侵犯』というメッセージが点滅し続けている。",
						"chinese": "这里尤其严重。'侵犯我的领地'的提示一直在闪烁。",
						"french": "C'est particulièrement grave ici. Le message 'Violation de mon territoire' ne cesse de clignoter.",
						"spanish": "Aquí es particularmente grave. El mensaje 'Invasión de mi territorio' no para de parpadear.",
						"vietnamese": "Ở đây đặc biệt nghiêm trọng. Thông báo 'Xâm phạm lãnh địa của tôi' liên tục nhấp nháy.",
						"thai": "ที่นี่รุนแรงเป็นพิเศษ ข้อความ 'บุกรุกอาณาเขตของฉัน' กระพริบไม่หยุด",
						"hindi": "यहाँ तो ख़ासकर बुरा हाल है। 'मेरे क्षेत्र का अतिक्रमण' संदेश लगातार चमक रहा है।"
					},
					"emotion": "angry",
					"speaker": "echo"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "누가 자기 영역이라고 표시하는 건가?",
						"english": "Is someone marking their territory?",
						"japanese": "誰かが自分の領域だと示しているのか？",
						"chinese": "难道有人在标记自己的领地？",
						"french": "Quelqu'un marque-t-il son territoire ?",
						"spanish": "¿Está alguien marcando su territorio?",
						"vietnamese": "Có phải ai đó đang đánh dấu lãnh thổ của mình?",
						"thai": "ใครบางคนกำลังทำเครื่องหมายอาณาเขตของตัวเองอยู่หรือเปล่า?",
						"hindi": "क्या कोई अपना क्षेत्र चिह्नित कर रहा है?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "게다가 사람들의 기억까지 왜곡되고 있어. 마치 누군가 영역을 지배하려는 듯이.",
						"english": "What's more, people's memories are being distorted. As if someone is trying to dominate this territory.",
						"japanese": "さらに、人々の記憶まで歪められている。まるで誰かが領域を支配しようとしているかのように。",
						"chinese": "此外，人们的记忆也被扭曲了。仿佛有人想要控制这个区域。",
						"french": "De plus, les souvenirs des gens sont déformés. Comme si quelqu'un essayait de dominer ce territoire.",
						"spanish": "Además, los recuerdos de la gente se están distorsionando. Como si alguien intentara dominar este territorio.",
						"vietnamese": "Hơn nữa, ký ức của mọi người cũng đang bị bóp méo. Cứ như ai đó đang cố gắng chiếm đoạt lãnh thổ này vậy.",
						"thai": "ยิ่งไปกว่านั้น ความทรงจำของผู้คนกำลังถูกบิดเบือน ราวกับมีใครบางคนพยายามจะครอบงำอาณาเขตนี้",
						"hindi": "और तो और, लोगों की यादें भी विकृत हो रही हैं। जैसे कोई इस क्षेत्र पर हावी होना चाहता हो।"
					},
					"emotion": "sad",
					"speaker": "echo"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "혼돈의 심장부로 다가갈수록, 디지털 광장은 거대한 데이터의 무덤처럼 변했다.",
						"english": "As we approached the heart of chaos, the digital plaza transformed into a massive graveyard of data.",
						"japanese": "混沌の心臓部に近づくにつれ、デジタル広場は巨大なデータの墓場と化した。",
						"chinese": "随着我们接近混乱的中心，数字广场变成了一座巨大的数据坟墓。",
						"french": "À mesure que nous approchions du cœur du chaos, la place numérique se transforma en un immense cimetière de données.",
						"spanish": "A medida que nos acercábamos al corazón del caos, la plaza digital se transformaba en un cementerio masivo de datos.",
						"vietnamese": "Khi chúng ta tiến gần đến trung tâm của hỗn loạn, quảng trường kỹ thuật số đã biến thành một nghĩa địa dữ liệu khổng lồ.",
						"thai": "ยิ่งเข้าใกล้ใจกลางของความสับสนวุ่นวายเท่าไหร่ ลานดิจิทัลก็ยิ่งกลายเป็นสุสานข้อมูลขนาดใหญ่เท่านั้น",
						"hindi": "जैसे-जैसे हम अराजकता के केंद्र के करीब पहुँचे, डिजिटल प्लाज़ा डेटा के एक विशाल कब्रिस्तान में बदल गया।"
					}
				},
				{
					"speaker": "echo",
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
					"content": {
						"korean": "더 이상 돌아갈 수 없어. 이 이상은 위험해. 놈이 눈치챘을 거야.",
						"english": "There's no turning back now. Any further is dangerous. It must have noticed us.",
						"japanese": "もう後戻りできない。これ以上は危険だ。奴は気づいたはずだ。",
						"chinese": "已经无法回头了。再往前就危险了。它肯定已经察觉到了。",
						"french": "On ne peut plus reculer. Plus loin, c'est dangereux. Il nous a sûrement repérés.",
						"spanish": "Ya no hay vuelta atrás. Más allá es peligroso. Nos habrá notado.",
						"vietnamese": "Không thể quay lại nữa rồi. Đi xa hơn nữa là nguy hiểm. Hắn ta chắc đã nhận ra chúng ta.",
						"thai": "ถอยกลับไม่ได้แล้ว เกินกว่านี้อันตราย มันคงสังเกตเห็นเราแล้ว",
						"hindi": "अब पीछे मुड़ना नामुमकिन है। इससे आगे खतरा है। उसने हमें देख लिया होगा।"
					},
					"emotion": "sad",
					"speaker": "echo"
				},
				{
					"content": {
						"korean": "멈출 수 없어. 이 혼란의 원인을 밝혀야 해.",
						"english": "I can't stop. I must uncover the source of this chaos.",
						"japanese": "止まれない。この混乱の原因を突き止めなければ。",
						"chinese": "我不能停下来。必须查明这场混乱的根源。",
						"french": "Je ne peux pas m'arrêter. Je dois découvrir la source de ce chaos.",
						"spanish": "No puedo parar. Debo descubrir el origen de este caos.",
						"vietnamese": "Không thể dừng lại. Phải làm rõ nguyên nhân của sự hỗn loạn này.",
						"thai": "หยุดไม่ได้ ฉันต้องเปิดเผยสาเหตุของความวุ่นวายนี้",
						"hindi": "मैं रुक नहीं सकता। मुझे इस अराजकता का स्रोत uncover करना होगा।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…알았어. 하지만 조심해. 놈은… 단순한 프로그램이 아니야. 예상보다 강해.",
						"english": "...Alright. But be careful. It's... not just a program. It's stronger than expected.",
						"japanese": "「…わかった。だが、気をつけろ。あれは…ただのプログラムじゃない。思ったより強い。」",
						"chinese": "“……知道了。但要小心。它……不是简单的程序。比想象的要强。”",
						"french": "...Compris. Mais sois prudent. Il n'est... pas un simple programme. Il est plus fort que prévu.",
						"spanish": "...Entendido. Pero ten cuidado. Él no es... un simple programa. Es más fuerte de lo esperado.",
						"vietnamese": "...Được rồi. Nhưng hãy cẩn thận. Nó... không chỉ là một chương trình đơn thuần. Nó mạnh hơn dự kiến.",
						"thai": "...เข้าใจแล้ว แต่ระวังให้ดี มันไม่ใช่...แค่โปรแกรมธรรมดา มันแข็งแกร่งกว่าที่คิดไว้",
						"hindi": "...ठीक है। लेकिन सावधान रहना। वह...सिर्फ एक प्रोग्राम नहीं है। वह उम्मीद से ज़्यादा ताक़तवर है।"
					},
					"emotion": "base",
					"speaker": "echo"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "거대한 데이터 잔해가 모여 불길한 형상을 이룬다. 정체 모를 중간보스였다.",
						"english": "Massive data fragments coalesce into an ominous form. It was an unknown mid-boss.",
						"japanese": "「巨大なデータ残骸が不吉な形を成す。正体不明の中ボスだった。」",
						"chinese": "“巨大的数据残骸聚集，形成不祥的形状。那是一个身份不明的中期Boss。”",
						"french": "D'énormes fragments de données s'agrègent en une forme menaçante. C'était un boss intermédiaire inconnu.",
						"spanish": "Enormes restos de datos se agrupan, formando una figura siniestra. Era un jefe intermedio desconocido.",
						"vietnamese": "Những mảnh dữ liệu khổng lồ kết tụ thành một hình thù đáng sợ. Đó là một trùm giữa không rõ danh tính.",
						"thai": "ซากข้อมูลขนาดมหึมารวมตัวกันเป็นรูปร่างลางร้าย มันคือบอสกลางนิรนาม",
						"hindi": "विशाल डेटा के अवशेष मिलकर एक अशुभ रूप लेते हैं। वह एक अज्ञात मध्य-बॉस था।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "내 영역에 들어온 어리석은 자들… 이곳에서 사라져라.",
						"english": "Fools who entered my domain... Vanish from this place.",
						"japanese": "「我の領域に踏み入った愚か者ども… ここから消え失せろ。」",
						"chinese": "“闯入我领域的愚蠢之徒…… 从这里消失吧。”",
						"french": "Fous qui êtes entrés dans mon domaine... Disparaissez d'ici.",
						"spanish": "¡Necios que entraron en mi dominio... Desaparezcan de este lugar!",
						"vietnamese": "Những kẻ ngu ngốc đã bước vào lãnh địa của ta... Biến mất khỏi nơi này!",
						"thai": "พวกโง่เขลาที่บุกรุกเข้ามาในอาณาเขตของข้า... จงหายไปจากที่นี่ซะ",
						"hindi": "मेरे क्षेत्र में घुसपैठ करने वाले मूर्ख... इस जगह से गायब हो जाओ।"
					}
				},
				{
					"content": {
						"korean": "네가 이 모든 혼란의 원흉인가?",
						"english": "Are you the source of all this chaos?",
						"japanese": "「お前がこの全ての混乱の元凶か？」",
						"chinese": "“你就是这一切混乱的罪魁祸首吗？”",
						"french": "Es-tu la source de tout ce chaos ?",
						"spanish": "¿Eres tú la causa de todo este caos?",
						"vietnamese": "Ngươi là kẻ gây ra mọi hỗn loạn này sao?",
						"thai": "เจ้าคือต้นเหตุของความวุ่นวายทั้งหมดนี้หรือ?",
						"hindi": "क्या तुम ही इस सारी अराजकता के पीछे हो?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "내 질서를 방해하는 너희는… 더 이상 존재할 수 없다. 감히 {random_boss}의 길을 막아?",
						"english": "Those who disrupt my order... can no longer exist. Dare to obstruct the path of {random_boss}?",
						"japanese": "「我が秩序を乱すお前たちは…もはや存在し得ない。よくも{random_boss}の道を阻んだな？」",
						"chinese": "“扰乱我秩序的你们…… 再也无法存在。竟敢阻挡{random_boss}的道路？”",
						"french": "Ceux qui perturbent mon ordre... ne peuvent plus exister. Osez-vous barrer le chemin de {random_boss} ?",
						"spanish": "Quienes perturben mi orden... no podrán seguir existiendo. ¿Osáis interponeros en el camino de {random_boss}?",
						"vietnamese": "Những kẻ phá vỡ trật tự của ta... không thể tồn tại thêm nữa. Dám cản đường của {random_boss} sao?",
						"thai": "พวกที่ขัดขวางระเบียบของข้า... จะไม่มีวันได้อยู่ต่อไป กล้าดีอย่างไรมาขวางทางของ {random_boss}?",
						"hindi": "जो मेरी व्यवस्था को बाधित करते हैं... वे अब और अस्तित्व में नहीं रह सकते। {random_boss} के रास्ते में आने की हिम्मत कैसे हुई?"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"spot": [
						1,
						2
					],
					"duration_ms": 500,
					"speaker": "echo",
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "…조심해! 놈은 이 광장의 데이터 그 자체야! 강력한 힘을 가지고 있어!",
						"english": "...Be careful! It IS the data of this plaza! It possesses immense power!",
						"japanese": "「…気をつけろ！ あれはこの広場のデータそのものだ！ 強力な力を持っている！」",
						"chinese": "“……小心！它就是这广场的数据本身！拥有强大的力量！”",
						"french": "...Attention ! Il est la donnée même de cette place ! Il possède une puissance immense !",
						"spanish": "...¡Ten cuidado! ¡Él es el dato mismo de esta plaza! ¡Posee un poder inmenso!",
						"vietnamese": "...Cẩn thận! Nó chính là dữ liệu của quảng trường này! Nó sở hữu sức mạnh khủng khiếp!",
						"thai": "...ระวังให้ดี! มันคือข้อมูลของลานแห่งนี้เอง! มันมีพลังมหาศาล!",
						"hindi": "...सावधान रहो! वह इस प्लाज़ा का डेटा ही है! उसके पास अपार शक्ति है!"
					},
					"type": "speech",
					"speaker": "echo",
					"emotion": "sad"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 디지털 잔해가 탐험대를 완전히 집어삼켰다. 시스템은 냉혹했다.",
						"english": "Vast digital debris consumed the expedition. The system was ruthless.",
						"japanese": "巨大なデジタル残骸が探検隊を完全に飲み込んだ。システムは冷酷だった。",
						"chinese": "巨大的数字残骸彻底吞噬了探险队。系统冷酷无情。",
						"french": "D'énormes débris numériques ont englouti l'expédition. Le système était impitoyable.",
						"spanish": "Enormes escombros digitales devoraron a la expedición. El sistema fue implacable.",
						"vietnamese": "Mảnh vụn kỹ thuật số khổng lồ nuốt chửng đoàn thám hiểm. Hệ thống thật tàn nhẫn.",
						"thai": "ซากดิจิทัลขนาดใหญ่กลืนกินคณะสำรวจจนหมดสิ้น ระบบไร้ความปรานี",
						"hindi": "विशाल डिजिटल मलबे ने अभियान को पूरी तरह निगल लिया। सिस्टम क्रूर था।"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "하찮은 저항… 내 영역에선 그 어떤 것도 통하지 않는다. 패배를 인정해라.",
						"english": "Futile resistance... Nothing works in my domain. Accept defeat.",
						"japanese": "取るに足らない抵抗…私の領域では何も通用しない。敗北を認めろ。",
						"chinese": "微不足道的抵抗……在我的领域，一切都毫无意义。接受失败吧。",
						"french": "Résistance futile... Rien ne fonctionne dans mon domaine. Acceptez la défaite.",
						"spanish": "Resistencia inútil... Nada funciona en mi dominio. Acepta la derrota.",
						"vietnamese": "Kháng cự vô ích... Trong lãnh địa của ta, không gì có thể thành công. Chấp nhận thất bại đi.",
						"thai": "การต่อต้านที่ไร้ค่า... ไม่มีอะไรใช้ได้ผลในอาณาเขตของข้า ยอมรับความพ่ายแพ้ซะ",
						"hindi": "तुच्छ प्रतिरोध... मेरे दायरे में कुछ भी काम नहीं करता। हार मान लो।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "젠장… 아직… 끝나지 않았어! 다시 한번…!",
						"english": "Damn it... It's not... over yet! One more time...!",
						"japanese": "くそ…まだ…終わってない！もう一度…！",
						"chinese": "该死……还没……结束！再来一次……！",
						"french": "Maudit... Ce n'est pas... fini ! Encore une fois... !",
						"spanish": "¡Maldita sea... No ha... terminado aún! ¡Una vez más...!",
						"vietnamese": "Chết tiệt... Vẫn... chưa kết thúc! Lại một lần nữa...!",
						"thai": "ให้ตายสิ... ยัง... ไม่จบ! อีกครั้ง...!",
						"hindi": "धिक्कार है... अभी... खत्म नहीं हुआ! एक बार फिर...!"
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "크크… 이 정도로 끝날 줄 알았나? 이건 시작에 불과하다… {random_boss}의 힘은…!",
						"english": "Heh heh... Did you think this was the end? This is just the beginning... The power of {random_boss} is...!",
						"japanese": "「クク…この程度で終わると思ったか？ これは始まりに過ぎない… {random_boss}の力は…！」",
						"chinese": "“呵呵…… 你以为这样就结束了吗？这只是开始…… {random_boss}的力量是……！”",
						"french": "Hé hé... Pensiez-vous que c'était la fin ? Ce n'est que le début... Le pouvoir de {random_boss} est...!",
						"spanish": "Je je... ¿Creíste que esto era el final? Esto es solo el principio... ¡El poder de {random_boss} es...!",
						"vietnamese": "Khặc khặc... Ngươi nghĩ mọi chuyện sẽ kết thúc ở đây sao? Đây chỉ là khởi đầu... Sức mạnh của {random_boss} là...!",
						"thai": "ฮ่าฮ่า... คิดว่าแค่นี้ก็จบแล้วรึ? นี่เป็นแค่จุดเริ่มต้นเท่านั้น... พลังของ {random_boss} น่ะ...!",
						"hindi": "हँ हँ... क्या तुम्हें लगा कि यह यहीं खत्म हो जाएगा? यह तो बस शुरुआत है... {random_boss} की शक्ति...!"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "도망쳤어… 하지만 아직 끝이 아니야.",
						"english": "It escaped... But it's not over yet.",
						"japanese": "「逃げた…だが、まだ終わりじゃない。」",
						"chinese": "“它逃走了…… 但还没有结束。”",
						"french": "Il s'est enfui... Mais ce n'est pas encore fini.",
						"spanish": "Escapó... Pero aún no ha terminado.",
						"vietnamese": "Nó đã trốn thoát... Nhưng chưa kết thúc.",
						"thai": "มันหนีไปแล้ว... แต่ยังไม่จบหรอก",
						"hindi": "वह भाग गया... लेकिन अभी खत्म नहीं हुआ है।"
					},
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "echo",
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "echo",
					"type": "speech",
					"content": {
						"korean": "데이터가 불안정해지고 있어. 더 깊은 곳으로 가야 해. 진짜 '코드 제왕'을 찾아서…",
						"english": "The data is becoming unstable. We need to go deeper. To find the real 'Code Monarch'...",
						"japanese": "「データが不安定になっている。もっと奥へ行かなければならない。真の『コードジェイワン』を探して…」",
						"chinese": "“数据变得不稳定了。必须前往更深处。去寻找真正的“代码帝王”……”",
						"french": "Les données deviennent instables. Il faut aller plus profond. Pour trouver le véritable 'Roi du Code'...",
						"spanish": "Los datos se están volviendo inestables. Debemos ir más profundo. Para encontrar al verdadero 'Rey del Código'...",
						"vietnamese": "Dữ liệu đang trở nên bất ổn. Chúng ta cần đi sâu hơn. Để tìm 'Vua Mã Lệnh' thực sự...",
						"thai": "ข้อมูลกำลังไม่เสถียร เราต้องไปให้ลึกกว่านี้ เพื่อตามหา 'ราชาโค้ด' ตัวจริง...",
						"hindi": "डेटा अस्थिर हो रहा है। हमें और गहरा जाना होगा। असली 'कोड सम्राट' को खोजने के लिए..."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "정체불명의 중간보스는 사라졌지만, 그 잔재는 더 깊은 혼란을 예고했다.",
						"english": "The unknown mid-boss vanished, but its remnants foretold deeper chaos.",
						"japanese": "「正体不明の中ボスは消え去ったが、その残滓はさらなる深い混乱を予感させた。」",
						"chinese": "“身份不明的中期Boss消失了，但它的残余预示着更深的混乱。”",
						"french": "Le boss intermédiaire inconnu a disparu, mais ses vestiges annonçaient un chaos plus profond.",
						"spanish": "El jefe intermedio desconocido desapareció, pero sus vestigios presagiaban un caos más profundo.",
						"vietnamese": "Trùm giữa không rõ danh tính đã biến mất, nhưng tàn dư của nó báo trước một sự hỗn loạn sâu sắc hơn.",
						"thai": "บอสกลางนิรนามหายไปแล้ว แต่ร่องรอยของมันบ่งบอกถึงความวุ่นวายที่ลึกซึ้งยิ่งขึ้น",
						"hindi": "अज्ञात मध्य-बॉस गायब हो गया, लेकिन उसके अवशेषों ने गहरे अराजकता का संकेत दिया।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"디지털 광장은 마비되었다. 모든 시스템이 예측 불가능한 오류를 뿜어냈다.",
			"시민들은 혼란에 빠졌다. 이것은 단순한 버그가 아니었다.",
			"도시를 지배하는 '코드 제왕'의 그림자. 그 혼돈 속으로 뛰어든다.",
			"진실은 언제나 가장 깊은 곳에 숨어 있었다."
		],
		"english": [
			"The Digital Plaza was paralyzed. All systems spewed unpredictable errors.",
			"Citizens fell into chaos. This was no mere bug.",
			"The shadow of the 'Code Emperor' who rules the city. We dive into that chaos.",
			"The truth was always hidden in the deepest place."
		],
		"japanese": [
			"デジタル広場は麻痺した。全てのシステムが予測不能なエラーを吐き出した。",
			"市民は混乱に陥った。これは単なるバグではなかった。",
			"都市を支配する「コードの皇帝」の影。その混沌へと飛び込む。",
			"真実は常に最も深い場所に隠されていた。"
		],
		"chinese": [
			"数字广场陷入瘫痪。所有系统都爆发了不可预测的错误。",
			"市民陷入混乱。这不仅仅是一个简单的错误。",
			"统治城市的“代码帝王”的阴影。我们投身于那片混沌之中。",
			"真相总是隐藏在最深处。"
		],
		"french": [
			"La Place Numérique était paralysée. Tous les systèmes crachaient des erreurs imprévisibles.",
			"Les citoyens furent plongés dans le chaos. Ce n'était pas un simple bug.",
			"L'ombre de l'«Empereur du Code» qui règne sur la ville. On plonge dans ce chaos.",
			"La vérité s'était toujours cachée au plus profond."
		],
		"spanish": [
			"La Plaza Digital estaba paralizada. Todos los sistemas arrojaban errores impredecibles.",
			"Los ciudadanos cayeron en el caos. Esto no era un simple error.",
			"La sombra del 'Emperador del Código' que gobierna la ciudad. Nos zambullimos en ese caos.",
			"La verdad siempre estuvo escondida en lo más profundo."
		],
		"vietnamese": [
			"Quảng trường Kỹ thuật số bị tê liệt. Mọi hệ thống đều phun ra những lỗi không thể đoán trước.",
			"Công dân rơi vào hỗn loạn. Đây không phải là một lỗi đơn thuần.",
			"Bóng tối của 'Hoàng đế Mã' thống trị thành phố. Chúng ta lao vào sự hỗn loạn đó.",
			"Sự thật luôn ẩn giấu ở nơi sâu thẳm nhất."
		],
		"thai": [
			"ดิจิทัลพลาซ่าเป็นอัมพาต ระบบทั้งหมดพ่นข้อผิดพลาดที่ไม่สามารถคาดเดาได้",
			"พลเมืองตกอยู่ในความสับสน นี่ไม่ใช่แค่ข้อผิดพลาดธรรมดา",
			"เงาของ 'จักรพรรดิโค้ด' ผู้ปกครองเมือง เราดำดิ่งลงไปในความโกลาหลนั้น",
			"ความจริงมักจะซ่อนอยู่ในที่ที่ลึกที่สุดเสมอ"
		],
		"hindi": [
			"डिजिटल प्लाजा लकवाग्रस्त हो गया था। सभी सिस्टम अप्रत्याशित त्रुटियां उगल रहे थे।",
			"नागरिक अराजकता में पड़ गए। यह महज़ एक बग नहीं था।",
			"शहर पर राज करने वाले 'कोड सम्राट' की छाया। हम उस अराजकता में कूद पड़ते हैं।",
			"सत्य हमेशा सबसे गहरे स्थान पर छिपा था।"
		]
	}
} as const;
