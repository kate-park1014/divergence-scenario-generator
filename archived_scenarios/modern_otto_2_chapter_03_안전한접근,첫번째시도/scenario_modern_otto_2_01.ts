export const scenario_modern_otto_2_01 = {
	"scenario_id": "modern_otto_2_01",
	"order": 1,
	"act": "intro",
	"theme": "modern",
	"actors": {
		"dax": {
			"id": "mon_08d5b43e-f9ab-4469-9064-855e170b0cdc",
			"name": {
				"korean": "닥스",
				"english": "Dax",
				"japanese": "ダックス",
				"chinese": "达克斯",
				"french": "Dax",
				"spanish": "Dax",
				"vietnamese": "Dax",
				"thai": "แด็กซ์",
				"hindi": "डैक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/84bb11db-6eb4-4500-d274-222e8b100100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5d325a75-bd91-4758-7b3f-ad9a97e52700/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 디지털 문이 열리고, 눈앞에 끝없이 펼쳐진 보안 시스템이 나타났다.",
						"english": "A colossal digital gate opened, revealing an endlessly sprawling security system.",
						"japanese": "巨大なデジタルゲートが開き、目の前に無限に広がるセキュリティシステムが現れた。",
						"chinese": "一扇巨大的数字大门打开，眼前浮现出无尽的安全系统。",
						"french": "Une porte numérique colossale s'ouvrit, révélant un système de sécurité s'étendant à l'infini.",
						"spanish": "Una gigantesca puerta digital se abrió, revelando un sistema de seguridad que se extendía sin fin.",
						"vietnamese": "Một cánh cửa kỹ thuật số khổng lồ mở ra, lộ ra hệ thống an ninh trải dài bất tận.",
						"thai": "ประตูดิจิทัลมหึมาเปิดออก, เผยให้เห็นระบบรักษาความปลอดภัยที่แผ่ขยายไม่รู้จบ.",
						"hindi": "एक विशाल डिजिटल द्वार खुला, और सामने एक अंतहीन सुरक्षा प्रणाली प्रकट हुई।"
					},
					"emotion": "base"
				},
				{
					"spot": [
						5,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "random_boss",
					"type": "direction"
				},
				{
					"speaker": "random_boss",
					"emotion": "happy",
					"content": {
						"korean": "환영합니다! 안전한 접근을 위해 제가 안내해 드리겠습니다.",
						"english": "Welcome! I'll guide you for secure access.",
						"japanese": "ようこそ！安全なアクセスのため、私がご案内いたします。",
						"chinese": "欢迎！为了您的安全访问，我将为您提供指导。",
						"french": "Bienvenue ! Je vous guiderai pour un accès sécurisé.",
						"spanish": "¡Bienvenido! Le guiaré para un acceso seguro.",
						"vietnamese": "Chào mừng! Tôi sẽ hướng dẫn bạn để truy cập an toàn.",
						"thai": "ยินดีต้อนรับ! ฉันจะนำทางคุณเพื่อให้เข้าถึงได้อย่างปลอดภัย.",
						"hindi": "स्वागत है! मैं आपको सुरक्षित पहुंच के लिए मार्गदर्शन करूंगा।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이게 첫 관문인가요?",
						"english": "Is this the first gate?",
						"japanese": "これが最初の関門ですか？",
						"chinese": "这是第一道关卡吗？",
						"french": "Est-ce la première étape ?",
						"spanish": "¿Es esta la primera puerta?",
						"vietnamese": "Đây là cửa ải đầu tiên sao?",
						"thai": "นี่คือด่านแรกใช่ไหม?",
						"hindi": "क्या यह पहली बाधा है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"emotion": "happy",
					"content": {
						"korean": "네. 간단한 본인 인증 절차입니다. 전혀 어렵지 않아요.",
						"english": "Yes. It's a simple identity verification. Not difficult at all.",
						"japanese": "はい。簡単な本人認証手続きです。全く難しくありませんよ。",
						"chinese": "是的。这是一个简单的身份验证程序。一点也不难。",
						"french": "Oui. C'est une simple procédure de vérification d'identité. Pas difficile du tout.",
						"spanish": "Sí. Es un procedimiento de verificación de identidad sencillo. Nada difícil.",
						"vietnamese": "Vâng. Đây là thủ tục xác minh danh tính đơn giản thôi. Không khó chút nào đâu.",
						"thai": "ใช่ครับ. เป็นขั้นตอนการยืนยันตัวตนง่ายๆ ครับ. ไม่ยากเลย.",
						"hindi": "हाँ। यह एक साधारण पहचान सत्यापन प्रक्रिया है। बिलकुल भी मुश्किल नहीं है।"
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "dax",
					"spot": [
						1,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "너무 친절한데요? 보통 이런 시스템은 불친절하던데.",
						"english": "You're too kind, aren't you? Usually, such systems are unfriendly.",
						"japanese": "とても親切ですね？普通、こんなシステムは不親切なのに。",
						"chinese": "你也太友善了吧？通常这种系统都很不友好。",
						"french": "Vous êtes trop aimable, n'est-ce pas ? D'habitude, de tels systèmes sont hostiles.",
						"spanish": "¿Demasiado amable, no? Normalmente, estos sistemas son poco amigables.",
						"vietnamese": "Sao lại tử tế vậy? Thường thì mấy hệ thống này toàn khó chịu thôi.",
						"thai": "ใจดีจังเลยนะครับ? ปกติระบบแบบนี้จะไม่ค่อยเป็นมิตรเลย.",
						"hindi": "आप बहुत दयालु हैं, है ना? आमतौर पर, ऐसे सिस्टम अमित्र होते हैं।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "하하, 저희는 사용자 편의를 최우선으로 생각하니까요!",
						"english": "Haha, we prioritize user convenience above all else!",
						"japanese": "ハハ、私たちはユーザーの利便性を最優先に考えていますからね！",
						"chinese": "哈哈，我们把用户便利性放在首位！",
						"french": "Haha, nous accordons la priorité absolue à la commodité de l'utilisateur !",
						"spanish": "Jajaja, ¡priorizamos la comodidad del usuario por encima de todo!",
						"vietnamese": "Haha, chúng tôi đặt sự tiện lợi của người dùng lên hàng đầu mà!",
						"thai": "ฮ่าฮ่า, พวกเราให้ความสำคัญกับความสะดวกสบายของผู้ใช้เป็นอันดับแรกครับ!",
						"hindi": "हाहा, हम उपयोगकर्ता की सुविधा को सबसे ऊपर रखते हैं!"
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "왠지 모르게 불안한 건 저뿐인가요?",
						"english": "Am I the only one who feels uneasy for some reason?",
						"japanese": "何となく不安なのは私だけでしょうか？",
						"chinese": "不知为何感到不安的只有我一个吗？",
						"french": "Suis-je le seul à ressentir cette inquiétude sans raison ?",
						"spanish": "¿Soy el único que se siente inquieto sin razón?",
						"vietnamese": "Không hiểu sao chỉ mình tôi cảm thấy bất an?",
						"thai": "ทำไมรู้สึกไม่สบายใจอยู่คนเดียว?",
						"hindi": "क्या किसी वजह से बेचैन महसूस करने वाला मैं अकेला हूँ?"
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "random_boss",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						5,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "자, 다음 단계입니다! 이번엔 약간 더 복잡한 패턴 인식입니다.",
						"english": "Alright, next step! This time, it's slightly more complex pattern recognition.",
						"japanese": "さあ、次の段階です！今回はもう少し複雑なパターン認識ですよ。",
						"chinese": "好了，下一阶段！这次是稍微复杂一点的图案识别。",
						"french": "Bien, prochaine étape ! Cette fois, c'est une reconnaissance de motifs légèrement plus complexe.",
						"spanish": "¡Bien, siguiente fase! Esta vez, es un reconocimiento de patrones un poco más complejo.",
						"vietnamese": "Được rồi, bước tiếp theo! Lần này, là nhận dạng mẫu phức tạp hơn một chút.",
						"thai": "เอาล่ะ ขั้นตอนต่อไป! คราวนี้เป็นการจดจำรูปแบบที่ซับซ้อนขึ้นเล็กน้อยครับ",
						"hindi": "ठीक है, अगला चरण! इस बार, यह थोड़ा और जटिल पैटर्न पहचान है।"
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아까는 간단하다고 하지 않았나요?",
						"english": "Didn't you say it was simple earlier?",
						"japanese": "さっきは簡単だって言いませんでしたか？",
						"chinese": "你刚才不是说很简单吗？",
						"french": "Vous n'avez pas dit que c'était simple tout à l'heure ?",
						"spanish": "¿No dijiste que era sencillo antes?",
						"vietnamese": "Lúc nãy không phải anh nói là đơn giản sao?",
						"thai": "เมื่อกี้บอกว่าง่ายไม่ใช่เหรอ?",
						"hindi": "क्या तुमने पहले नहीं कहा था कि यह सरल है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "보안 강화를 위한 필수 절차니까요! 걱정 마세요, 제가 도와드리겠습니다.",
						"english": "It's an essential procedure for enhanced security! Don't worry, I'll help you.",
						"japanese": "セキュリティ強化のための必須手順ですからね！ご心配なく、私が手伝います。",
						"chinese": "这是加强安全的必要程序！别担心，我会帮你的。",
						"french": "C'est une procédure essentielle pour renforcer la sécurité ! Ne vous inquiétez pas, je vais vous aider.",
						"spanish": "¡Es un procedimiento esencial para mejorar la seguridad! No te preocupes, yo te ayudaré.",
						"vietnamese": "Đây là thủ tục cần thiết để tăng cường bảo mật mà! Đừng lo, tôi sẽ giúp bạn.",
						"thai": "มันเป็นขั้นตอนสำคัญเพื่อเสริมความปลอดภัยไง! ไม่ต้องห่วงนะ เดี๋ยวผมช่วยเอง",
						"hindi": "यह सुरक्षा बढ़ाने के लिए एक आवश्यक प्रक्रिया है! चिंता न करें, मैं आपकी मदद करूँगा।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "dax",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						1,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "도와주는 게 아니라 더 복잡하게 만드는 것 같은데.",
						"english": "It feels less like helping and more like making it more complicated.",
						"japanese": "手伝うどころか、もっと複雑にしているような気がしますけど。",
						"chinese": "感觉不是在帮忙，而是在让事情更复杂。",
						"french": "On dirait que vous compliquez les choses au lieu d'aider.",
						"spanish": "Parece que en lugar de ayudar, lo estás complicando más.",
						"vietnamese": "Có vẻ không phải là giúp đỡ mà là làm cho nó phức tạp hơn thì đúng hơn.",
						"thai": "เหมือนไม่ใช่ช่วย แต่กลับทำให้ยุ่งยากขึ้นนะ",
						"hindi": "ऐसा लगता है कि यह मदद करने के बजाय इसे और जटिल बना रहा है।"
					},
					"speaker": "dax"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "점점 헷갈려요…",
						"english": "I'm getting more and more confused...",
						"japanese": "だんだん混乱してきました…",
						"chinese": "越来越糊涂了……",
						"french": "Je suis de plus en plus confus...",
						"spanish": "Me estoy confundiendo cada vez más...",
						"vietnamese": "Tôi càng ngày càng bối rối...",
						"thai": "เริ่มงงขึ้นเรื่อยๆ แล้ว...",
						"hindi": "मैं और ज़्यादा भ्रमित होता जा रहा हूँ..."
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "random_boss",
					"spot": [
						5,
						2
					]
				},
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "아이고! 이럴 수가, 새로운 유형의 캡차 이미지가 등장했네요!",
						"english": "Oh no! Unbelievable, a new type of CAPTCHA image has appeared!",
						"japanese": "ああ！なんてことだ、新しい種類のキャプチャ画像が登場しましたね！",
						"chinese": "哎呀！天哪，出现了一种新型验证码图片！",
						"french": "Oh là là ! Incroyable, un nouveau type d'image CAPTCHA est apparu !",
						"spanish": "¡Ay! ¡Increíble, ha aparecido un nuevo tipo de imagen CAPTCHA!",
						"vietnamese": "Ôi không! Không thể tin được, một loại hình ảnh CAPTCHA mới đã xuất hiện!",
						"thai": "แย่แล้ว! ไม่น่าเชื่อเลย รูปภาพแคปช่าแบบใหม่ปรากฏขึ้นแล้ว!",
						"hindi": "अरे नहीं! अविश्वसनीय, एक नए प्रकार की CAPTCHA छवि सामने आ गई है!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "당황하지 마시고, 침착하게 시도하면 됩니다.",
						"english": "Don't panic, just try it calmly.",
						"japanese": "慌てずに、落ち着いて試せば大丈夫です。",
						"chinese": "别慌，冷静地尝试就可以了。",
						"french": "Ne paniquez pas, essayez simplement calmement.",
						"spanish": "No te asustes, solo inténtalo con calma.",
						"vietnamese": "Đừng hoảng, cứ bình tĩnh thử là được.",
						"thai": "ไม่ต้องตกใจนะ ลองอย่างใจเย็นก็ทำได้แล้ว",
						"hindi": "घबराओ मत, बस शांति से कोशिश करो।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "dax",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						1,
						2
					],
					"type": "direction"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "새로운 유형이 계속 등장한다면, 영원히 못 가는 거 아닌가요?",
						"english": "If new types keep appearing, won't we be stuck here forever?",
						"japanese": "新しい種類が次々と出てきたら、永遠に進めないんじゃないですか？",
						"chinese": "如果新类型 계속出现，那不是永远都过不去了吗？",
						"french": "Si de nouveaux types continuent d'apparaître, ne serons-nous pas bloqués ici pour toujours ?",
						"spanish": "Si siguen apareciendo nuevos tipos, ¿no estaremos atrapados aquí para siempre?",
						"vietnamese": "Nếu loại mới cứ tiếp tục xuất hiện, chẳng phải chúng ta sẽ không thể đi tiếp mãi sao?",
						"thai": "ถ้าประเภทใหม่ๆ ออกมาเรื่อยๆ แบบนี้ เราจะไปไม่ได้ตลอดไปเลยหรือเปล่า?",
						"hindi": "अगर नए प्रकार आते रहेंगे, तो क्या हम हमेशा के लिए यहाँ फँस नहीं जाएँगे?"
					},
					"speaker": "dax",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "절대 그렇지 않습니다! 안전이 최우선이니까요!",
						"english": "Absolutely not! Safety is our top priority!",
						"japanese": "そんなことは決してありません！安全が最優先ですからね！",
						"chinese": "绝不会那样！安全是首要任务！",
						"french": "Absolument pas ! La sécurité est notre priorité absolue !",
						"spanish": "¡Absolutamente no! ¡La seguridad es nuestra máxima prioridad!",
						"vietnamese": "Tuyệt đối không phải vậy! An toàn là ưu tiên hàng đầu mà! ",
						"thai": "ไม่มีทาง! เพราะความปลอดภัยคือสิ่งสำคัญที่สุดไงล่ะ!",
						"hindi": "बिल्कुल नहीं! सुरक्षा हमारी सर्वोच्च प्राथमिकता है!"
					},
					"speaker": "random_boss"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "훌륭합니다! 거의 다 왔어요! 이제 마지막 단계입니다.",
						"english": "Excellent! Almost there! This is the final step.",
						"japanese": "素晴らしい！もうすぐですよ！これが最後の段階です。",
						"chinese": "太棒了！我们快到了！这是最后一步了。",
						"french": "Excellent ! On y est presque ! C'est la dernière étape.",
						"spanish": "¡Excelente! ¡Ya casi llegamos! Esta es la última etapa.",
						"vietnamese": "Tuyệt vời! Gần xong rồi! Đây là bước cuối cùng.",
						"thai": "ยอดเยี่ยม! ใกล้จะถึงแล้ว! นี่คือขั้นตอนสุดท้าย",
						"hindi": "शानदार! हम लगभग वहाँ पहुँच गए हैं! यह अंतिम चरण है।"
					},
					"emotion": "happy",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "또 마지막 단계라고요? 벌써 몇 번째인데…",
						"english": "\"The final step\" again? How many times have we heard that...?",
						"japanese": "また「最後の段階」ですか？もう何度目だよ…",
						"chinese": "又来“最后一步”？这都多少次了……",
						"french": "Encore la \"dernière étape\" ? Mais combien de fois déjà...",
						"spanish": "¿Otra vez \"la última etapa\"? ¿Cuántas veces van ya...?",
						"vietnamese": "Lại là \"bước cuối cùng\" à? Đã bao nhiêu lần rồi chứ...",
						"thai": "\"ขั้นตอนสุดท้าย\" อีกแล้วเหรอ? นี่มันครั้งที่เท่าไหร่แล้วเนี่ย...",
						"hindi": "फिर से \"अंतिम चरण\"? यह कितनी बार हो चुका है...?"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"spot": [
						1,
						2
					],
					"speaker": "dax",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이거 뭔가 이상해. 우리가 진짜로 다음 단계로 가는 게 맞나?",
						"english": "Something's not right. Are we really moving to the next stage?",
						"japanese": "何かおかしい。本当に次の段階へ進んでるのか？",
						"chinese": "这不对劲。我们真的在进入下一个阶段吗？",
						"french": "Il y a quelque chose d'étrange. Est-ce qu'on passe vraiment à l'étape suivante ?",
						"spanish": "Algo no está bien. ¿De verdad estamos yendo a la siguiente fase?",
						"vietnamese": "Có gì đó không ổn. Chúng ta thực sự đang chuyển sang giai đoạn tiếp theo ư?",
						"thai": "มีบางอย่างแปลกๆ เรากำลังจะไปสู่ขั้นต่อไปจริงๆ เหรอ?",
						"hindi": "कुछ तो गड़बड़ है। क्या हम वाकई अगले चरण में जा रहे हैं?"
					},
					"emotion": "sad",
					"speaker": "dax"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "물론이죠! 저를 믿고 따라오세요!",
						"english": "Of course! Trust me and follow!",
						"japanese": "もちろんです！私を信じてついてきてください！",
						"chinese": "当然了！相信我，跟着来！",
						"french": "Bien sûr ! Faites-moi confiance et suivez-moi !",
						"spanish": "¡Por supuesto! ¡Confía en mí y sígueme!",
						"vietnamese": "Đương nhiên rồi! Tin tôi và đi theo tôi!",
						"thai": "แน่นอน! เชื่อใจฉันแล้วตามมาเลย!",
						"hindi": "बिलकुल! मुझ पर भरोसा रखो और आओ!"
					},
					"emotion": "happy"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이건… 시작에 불과해. {random_boss}는… 더 깊은 곳에 있다.",
						"english": "This is... just the beginning. {random_boss} is... in a deeper place.",
						"japanese": "これは…始まりに過ぎない。{random_boss}は…もっと深い場所にいる。",
						"chinese": "这…仅仅是个开始。{random_boss}在…更深的地方。",
						"french": "Ce n'est... que le début. {random_boss} est... plus profondément.",
						"spanish": "Esto es... solo el principio. {random_boss} está... en un lugar más profundo.",
						"vietnamese": "Đây... chỉ là khởi đầu. {random_boss} đang ở... nơi sâu hơn.",
						"thai": "นี่มัน... แค่เริ่มต้นเท่านั้น {random_boss} อยู่... ลึกกว่านี้",
						"hindi": "यह... बस शुरुआत है। {random_boss}... और गहराई में है।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이게 끝이 아니라고?",
						"english": "This isn't the end?",
						"japanese": "これが終わりじゃないのか？",
						"chinese": "这还没完？",
						"french": "Ce n'est pas la fin ?",
						"spanish": "¿Esto no es el final?",
						"vietnamese": "Đây không phải là kết thúc sao?",
						"thai": "นี่ไม่ใช่จุดจบเหรอ?",
						"hindi": "यह अंत नहीं है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "dax",
					"emotion": "base",
					"content": {
						"korean": "내가 말했지? 너무 쉬운 건 없어.",
						"english": "Told you, nothing's ever easy.",
						"japanese": "言ったろ？楽なことなんてないんだよ。",
						"chinese": "我告诉过你，没有什么是容易的。",
						"french": "Je te l'ai dit, rien n'est jamais facile.",
						"spanish": "Te lo dije, nada es demasiado fácil.",
						"vietnamese": "Tôi đã nói rồi mà, không có gì là dễ dàng cả.",
						"thai": "ฉันบอกแล้วไง ไม่มีอะไรง่ายเกินไปหรอก",
						"hindi": "मैंने कहा था न? कुछ भी इतना आसान नहीं होता।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "쓰러진 존재 너머, 또 다른 미로가 모습을 드러냈다.",
						"english": "Beyond the fallen entity, another labyrinth revealed itself.",
						"japanese": "倒れた存在の向こうに、別の迷宮が姿を現した。",
						"chinese": "倒下的存在之外，另一个迷宫显露了身姿。",
						"french": "Au-delà de l'entité vaincue, un autre labyrinthe se dévoila.",
						"spanish": "Más allá de la entidad caída, otro laberinto se reveló.",
						"vietnamese": "Vượt qua thực thể đã ngã xuống, một mê cung khác lại hiện ra.",
						"thai": "เบื้องหลังสิ่งมีชีวิตที่ล้มลง เขาวงกตอีกแห่งก็ปรากฏกาย",
						"hindi": "गिरे हुए प्राणी के पार, एक और भूलभुलैया सामने आ गई।"
					}
				},
				{
					"content": {
						"korean": "Otto의 친절 뒤에 숨겨진 진실은 아직 멀리 있었다.",
						"english": "The truth hidden behind Otto's kindness was still far off.",
						"japanese": "オットーの親切の裏に隠された真実は、まだ遠かった。",
						"chinese": "奥托的善良背后隐藏的真相，仍然遥远。",
						"french": "La vérité cachée derrière la gentillesse d'Otto était encore loin.",
						"spanish": "La verdad oculta tras la amabilidad de Otto aún estaba lejos.",
						"vietnamese": "Sự thật ẩn giấu sau lòng tốt của Otto vẫn còn xa vời.",
						"thai": "ความจริงที่ซ่อนอยู่เบื้องหลังความเมตตาของอ็อตโต้ยังคงห่างไกล",
						"hindi": "ऑटो की दयालुता के पीछे छिपा सच अभी भी बहुत दूर था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "감히 {random_boss}의 영역을 넘보려 하다니.",
						"english": "How dare you trespass on {random_boss}'s domain.",
						"japanese": "よくも{random_boss}の領域を侵そうとしたな。",
						"chinese": "竟敢觊觎{random_boss}的领域。",
						"french": "Comment oses-tu empiéter sur le domaine de {random_boss}.",
						"spanish": "Cómo te atreves a invadir el dominio de {random_boss}.",
						"vietnamese": "Dám xâm phạm lãnh địa của {random_boss} sao.",
						"thai": "บังอาจนักที่บุกรุกอาณาเขตของ {random_boss}",
						"hindi": "तुमने {random_boss} के क्षेत्र पर अतिक्रमण करने की हिम्मत कैसे की।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아직 포기 안 해!",
						"english": "Not giving up yet!",
						"japanese": "まだ諦めない！",
						"chinese": "我还没放弃！",
						"french": "Je n'abandonne pas encore !",
						"spanish": "¡Todavía no me rindo!",
						"vietnamese": "Tôi vẫn chưa bỏ cuộc!",
						"thai": "ฉันยังไม่ยอมแพ้!",
						"hindi": "अभी तक हार नहीं मानी है!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"emotion": "angry",
					"content": {
						"korean": "젠장, 이대로 끝낼 순 없어!",
						"english": "Damn, can't end like this!",
						"japanese": "くそ、こんなところで終われない！",
						"chinese": "该死，不能就这样结束！",
						"french": "Mince, je ne peux pas finir comme ça !",
						"spanish": "¡Maldita sea, no puedo terminar así!",
						"vietnamese": "Chết tiệt, không thể kết thúc như thế này được!",
						"thai": "บ้าจริง ฉันจะจบแค่นี้ไม่ได้!",
						"hindi": "धिक्कार है, मैं ऐसे खत्म नहीं कर सकता!"
					}
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "갑자기 모든 로그인 창이 깨지고, 거대한 존재가 나타났다.",
						"english": "Suddenly, all login windows shattered, and a colossal entity appeared.",
						"japanese": "突然、すべてのログインウィンドウが砕け散り、巨大な存在が現れた。",
						"chinese": "突然，所有登录窗口都破碎了，一个巨大的存在出现了。",
						"french": "Soudain, toutes les fenêtres de connexion se brisèrent, et une entité colossale apparut.",
						"spanish": "De repente, todas las ventanas de inicio de sesión se hicieron añicos, y una entidad colosal apareció.",
						"vietnamese": "Đột nhiên, tất cả cửa sổ đăng nhập vỡ vụn, và một thực thể khổng lồ xuất hiện.",
						"thai": "ทันใดนั้น หน้าต่างล็อกอินทั้งหมดก็แตกออก และสิ่งมีชีวิตขนาดมหึมาปรากฏขึ้น",
						"hindi": "अचानक, सभी लॉगिन विंडो टूट गईं, और एक विशाल सत्ता प्रकट हुई।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "환영한다, 침입자들.",
						"english": "Welcome, intruders.",
						"japanese": "ようこそ、侵入者たちよ。",
						"chinese": "欢迎，入侵者们。",
						"french": "Bienvenue, intrus.",
						"spanish": "Bienvenidos, intrusos.",
						"vietnamese": "Chào mừng, những kẻ xâm nhập.",
						"thai": "ยินดีต้อนรับ ผู้บุกรุกทั้งหลาย",
						"hindi": "स्वागत है, घुसपैठियों।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "드디어 나타났군!",
						"english": "Finally! You've appeared!",
						"japanese": "やっと現れたな！",
						"chinese": "终于出现了！",
						"french": "Enfin ! Tu es apparu !",
						"spanish": "¡Por fin! ¡Has aparecido!",
						"vietnamese": "Cuối cùng thì ngươi cũng xuất hiện!",
						"thai": "ในที่สุดก็ปรากฏตัว!",
						"hindi": "आखिरकार! तुम प्रकट हो गए!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "{random_boss}의 영역에 발을 들여놓다니… 어리석군.",
						"english": "To set foot in {random_boss}'s domain... foolish.",
						"japanese": "{random_boss}の領域に足を踏み入れるとは…愚か者め。",
						"chinese": "竟敢踏入{random_boss}的领域……愚蠢。",
						"french": "Mettre les pieds dans le domaine de {random_boss}... quelle folie.",
						"spanish": "Poner un pie en el dominio de {random_boss}... qué insensatez.",
						"vietnamese": "Dám đặt chân vào lãnh địa của {random_boss}... thật ngu xuẩn.",
						"thai": "บังอาจก้าวเข้ามาในอาณาเขตของ {random_boss}... ช่างโง่เขลา",
						"hindi": "{random_boss} के क्षेत्र में कदम रखना... मूर्खतापूर्ण।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"디지털 장막 너머, 미지의 공간.",
			"끝없이 펼쳐진 로그인 창과 캡차 이미지.",
			"안전한 접근을 약속하는 안내자, Otto Reset.",
			"그러나, 모든 친절함 뒤엔 의심의 그림자가 드리운다."
		],
		"english": [
			"Beyond the digital veil, an unknown space.",
			"Endless login screens and CAPTCHA images.",
			"Otto Reset, a guide promising secure access.",
			"Yet, behind all kindness, a shadow of doubt looms."
		],
		"japanese": [
			"デジタルな帳の向こう、未知の空間。",
			"果てしなく広がるログイン画面とCAPTCHA画像。",
			"安全なアクセスを約束する案内人、Otto Reset。",
			"しかし、その親切の裏には疑念の影が潜む。"
		],
		"chinese": [
			"数字帷幕之外，未知空间。",
			"无尽的登录窗口和验证码图像。",
			"承诺安全访问的引导者，Otto Reset。",
			"然而，所有友善背后都笼罩着疑影。"
		],
		"french": [
			"Au-delà du voile numérique, un espace inconnu.",
			"Des écrans de connexion et des images CAPTCHA à l'infini.",
			"Otto Reset, un guide promettant un accès sécurisé.",
			"Pourtant, derrière toute cette gentillesse, plane une ombre de doute."
		],
		"spanish": [
			"Más allá del velo digital, un espacio desconocido.",
			"Ventanas de inicio de sesión e imágenes CAPTCHA infinitas.",
			"Otto Reset, un guía que promete acceso seguro.",
			"Sin embargo, detrás de toda amabilidad, se cierne una sombra de duda."
		],
		"vietnamese": [
			"Vượt qua bức màn kỹ thuật số, một không gian vô định.",
			"Hàng loạt màn hình đăng nhập và ảnh CAPTCHA.",
			"Otto Reset, người hướng dẫn hứa hẹn truy cập an toàn.",
			"Tuy nhiên, đằng sau mọi sự tử tế, một bóng ma nghi ngờ bao trùm."
		],
		"thai": [
			"เหนือม่านดิจิทัล, พื้นที่ที่ไม่รู้จัก.",
			"หน้าจอเข้าสู่ระบบและรูปภาพแคปต์ชาที่ไม่มีที่สิ้นสุด.",
			"Otto Reset ผู้นำทางที่ให้คำมั่นถึงการเข้าถึงที่ปลอดภัย.",
			"ทว่า, เบื้องหลังความเมตตาทั้งหมด, เงาของความสงสัยกลับคืบคลาน."
		],
		"hindi": [
			"डिजिटल पर्दे के पार, एक अज्ञात स्थान।",
			"अंतहीन लॉगिन स्क्रीन और कैप्चा चित्र।",
			"Otto Reset, सुरक्षित पहुंच का वादा करने वाला मार्गदर्शक।",
			"हालांकि, हर दयालुता के पीछे संदेह की छाया मंडराती है।"
		]
	}
} as const;
