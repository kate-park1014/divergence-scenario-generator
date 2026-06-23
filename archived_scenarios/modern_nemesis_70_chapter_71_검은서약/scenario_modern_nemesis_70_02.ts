export const scenario_modern_nemesis_70_02 = {
	"scenario_id": "modern_nemesis_70_02",
	"order": 2,
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
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "낡은 금융 빌딩, 잔해 속에서 묘한 정적이 흘렀다.",
						"english": "An old financial building, a strange silence flowed through the debris.",
						"japanese": "古い金融ビル、瓦礫の中から奇妙な静寂が漂っていた。",
						"chinese": "旧金融大楼，废墟中弥漫着诡异的寂静。",
						"french": "Un ancien immeuble financier, un étrange silence régnait parmi les débris.",
						"spanish": "Un antiguo edificio financiero, un extraño silencio se cernía entre los escombros.",
						"vietnamese": "Một tòa nhà tài chính cũ, sự tĩnh lặng kỳ lạ len lỏi trong đống đổ nát.",
						"thai": "อาคารการเงินเก่าแก่, ความเงียบงันแปลกประหลาดไหลผ่านซากปรักหักพัง.",
						"hindi": "एक पुरानी वित्तीय इमारत, मलबे के बीच एक अजीब सी खामोशी छाई हुई थी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 폭발, 단순한 사고가 아닐 것 같은데.",
						"english": "This explosion, it doesn't seem like a simple accident.",
						"japanese": "この爆発、ただの事故ではなさそうだ。",
						"chinese": "这次爆炸，看来不是简单的事故。",
						"french": "Cette explosion, ça ne semble pas être un simple accident.",
						"spanish": "Esta explosión, no parece un simple accidente.",
						"vietnamese": "Vụ nổ này, có vẻ không phải là một tai nạn đơn giản.",
						"thai": "การระเบิดครั้งนี้, ดูเหมือนจะไม่ใช่อุบัติเหตุธรรมดา.",
						"hindi": "यह विस्फोट, एक साधारण दुर्घटना नहीं लगता।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "kai"
				},
				{
					"speaker": "kai",
					"type": "speech",
					"content": {
						"korean": "단순한 가스 폭발입니다. 제가 담당하고 있으니, 걱정 마시죠.",
						"english": "It's a simple gas explosion. I'm handling it, so don't worry.",
						"japanese": "単なるガス爆発です。私が担当していますので、ご心配なく。",
						"chinese": "这只是简单的瓦斯爆炸。我正在处理，请不用担心。",
						"french": "C'est une simple explosion de gaz. Je m'en occupe, ne vous inquiétez pas.",
						"spanish": "Es una simple explosión de gas. Me estoy encargando, así que no se preocupen.",
						"vietnamese": "Đó chỉ là một vụ nổ khí ga đơn giản. Tôi đang xử lý, đừng lo lắng.",
						"thai": "เป็นการระเบิดของแก๊สธรรมดาครับ ผมดูแลอยู่ ไม่ต้องกังวลนะครับ.",
						"hindi": "यह एक साधारण गैस विस्फोट है। मैं इसे संभाल रहा हूँ, इसलिए चिंता न करें।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "(의심하는 눈초리)",
						"english": "(Suspicious gaze)",
						"japanese": "（疑いの眼差し）",
						"chinese": "（怀疑的眼神）",
						"french": "(Regard suspicieux)",
						"spanish": "(Mirada sospechosa)",
						"vietnamese": "(Ánh mắt nghi ngờ)",
						"thai": "(สายตาเคลือบแคลง)",
						"hindi": "(संदेहास्पद नज़र)"
					},
					"emotion": "base",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "kai",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "더 이상 조사할 필요 없습니다. 명백한 사고니까요.",
						"english": "No need for further investigation. It's clearly an accident.",
						"japanese": "これ以上調査する必要はありません。明白な事故ですから。",
						"chinese": "没必要再调查了。这显然是个事故。",
						"french": "Plus besoin d'enquêter. C'est clairement un accident.",
						"spanish": "No es necesario investigar más. Es claramente un accidente.",
						"vietnamese": "Không cần điều tra thêm. Rõ ràng đó là một tai nạn.",
						"thai": "ไม่จำเป็นต้องสืบสวนเพิ่มเติม มันเป็นอุบัติเหตุที่ชัดเจน",
						"hindi": "आगे जांच की कोई जरूरत नहीं है। यह स्पष्ट रूप से एक दुर्घटना है।"
					},
					"emotion": "base",
					"speaker": "kai"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "하지만… 이 흔적들은?",
						"english": "But... these traces?",
						"japanese": "しかし…この痕跡は？",
						"chinese": "但是……这些痕迹是？",
						"french": "Mais... ces traces ?",
						"spanish": "¿Pero... estas huellas?",
						"vietnamese": "Nhưng... những dấu vết này là gì?",
						"thai": "แต่... ร่องรอยเหล่านี้คือ?",
						"hindi": "पर... ये निशान?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "kai",
					"type": "speech",
					"content": {
						"korean": "조잡한 낙서일 뿐입니다. 현장을 더 헤집지 마세요.",
						"english": "Just crude scribbles. Don't disturb the scene further.",
						"japanese": "ただの粗悪な落書きです。現場をこれ以上荒らさないでください。",
						"chinese": "只是一些粗糙的涂鸦。请不要再破坏现场了。",
						"french": "Ce ne sont que des gribouillis grossiers. Ne fouillez pas davantage la scène.",
						"spanish": "Solo son garabatos toscos. No altere más la escena.",
						"vietnamese": "Chỉ là những nét vẽ nguệch ngoạc thôi. Đừng động vào hiện trường nữa.",
						"thai": "แค่รอยขีดเขียนหยาบๆ เท่านั้น อย่ารบกวนที่เกิดเหตุอีกเลย",
						"hindi": "ये बस भद्दे निशान हैं। घटनास्थल को और मत खंगालिए।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "뭔가 숨기는 것 같아.",
						"english": "You're hiding something.",
						"japanese": "何か隠しているようね。",
						"chinese": "你好像在隐瞒什么。",
						"french": "On dirait que vous cachez quelque chose.",
						"spanish": "Parece que escondes algo.",
						"vietnamese": "Anh đang giấu giếm điều gì đó.",
						"thai": "ดูเหมือนคุณกำลังซ่อนอะไรบางอย่าง",
						"hindi": "लगता है तुम कुछ छुपा रहे हो।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "kai",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "저 문양, 여기저기서 본 것 같은데?",
						"english": "That symbol... I think I've seen it everywhere.",
						"japanese": "あの模様、あちこちで見たような？",
						"chinese": "那个图案，我好像到处都见过？",
						"french": "Ce symbole... il me semble l'avoir vu partout ?",
						"spanish": "Ese símbolo... ¿creo haberlo visto por todas partes?",
						"vietnamese": "Cái hoa văn đó, hình như tôi đã thấy nó ở khắp nơi?",
						"thai": "สัญลักษณ์นั้น... ฉันเหมือนเคยเห็นมันมาแล้วทั่วทุกที่เลยนะ?",
						"hindi": "वह निशान... मुझे लगता है मैंने उसे हर जगह देखा है?"
					},
					"emotion": "base",
					"speaker": "character_1"
				},
				{
					"content": {
						"korean": "전에 봤던 그 기묘한 도형과 똑같아.",
						"english": "It's identical to that strange shape I saw before.",
						"japanese": "前に見たあの奇妙な図形と全く同じだ。",
						"chinese": "和之前看到的那个奇特图形一模一样。",
						"french": "C'est identique à cette forme étrange que j'ai vue auparavant.",
						"spanish": "Es idéntico a esa forma extraña que vi antes.",
						"vietnamese": "Nó giống hệt cái hình thù kỳ lạ mà tôi đã thấy trước đây.",
						"thai": "มันเหมือนกับรูปร่างแปลกๆ ที่ฉันเคยเห็นมาก่อนเลย",
						"hindi": "यह वही अजीबोगरीब आकृति है जो मैंने पहले देखी थी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_2"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "착각입니다. 어디에나 있는 디자인일 뿐. 의미 없어요.",
						"english": "You're mistaken. It's just a common design, meaningless.",
						"japanese": "錯覚です。どこにでもあるデザインに過ぎません。意味などありません。",
						"chinese": "那是错觉。这只是一种随处可见的设计，毫无意义。",
						"french": "C'est une illusion. Ce n'est qu'un design commun, sans signification.",
						"spanish": "Es un error. Es solo un diseño común, sin significado.",
						"vietnamese": "Anh nhầm rồi. Đó chỉ là một thiết kế phổ biến, không có ý nghĩa gì cả.",
						"thai": "คุณคิดไปเอง มันเป็นแค่ดีไซน์ธรรมดา ไม่มีอะไรพิเศษหรอก",
						"hindi": "यह आपकी गलतफहमी है। यह बस एक सामान्य डिज़ाइन है, इसका कोई मतलब नहीं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아니, 이건… 우연이 아니야.",
						"english": "No, this isn't... a coincidence.",
						"japanese": "いや、これは…偶然じゃない。",
						"chinese": "不，这……这不是巧合。",
						"french": "Non, ce n'est pas... une coïncidence.",
						"spanish": "No, esto no es... una coincidencia.",
						"vietnamese": "Không, cái này... không phải là trùng hợp.",
						"thai": "ไม่ นี่ไม่ใช่... เรื่องบังเอิญ",
						"hindi": "नहीं, यह... कोई इत्तेफाक नहीं है।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "(초조한 기색) 쓸데없는 것에 신경 쓰지 마십시오.",
						"english": "(Nervously) Don't concern yourself with trivialities.",
						"japanese": "（焦燥した様子）つまらないことに気を取られないでください。",
						"chinese": "(显得焦躁) 别去管那些没用的东西。",
						"french": "(Nerveusement) Ne vous souciez pas de choses inutiles.",
						"spanish": "(Nerviosamente) No se preocupe por cosas inútiles.",
						"vietnamese": "(Có vẻ bồn chồn) Đừng bận tâm đến những thứ vô bổ.",
						"thai": "(ท่าทางกระวนกระวาย) อย่าไปใส่ใจกับเรื่องไร้สาระเลย",
						"hindi": "(घबराए हुए) बेकार की बातों पर ध्यान मत दीजिए।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "kai"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "kai",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "당신, 뭘 숨기는 거야? 저 문양, 사고와 관련 있지?",
						"english": "What are you hiding? That symbol, it's connected to the accident, isn't it?",
						"japanese": "あなた、何を隠しているの？あの模様、事故と関係あるでしょ？",
						"chinese": "你到底在隐瞒什么？那个图案，和事故有关，对吧？",
						"french": "Que cachez-vous ? Ce symbole est lié à l'accident, n'est-ce pas ?",
						"spanish": "¿Qué escondes? Ese símbolo está relacionado con el accidente, ¿verdad?",
						"vietnamese": "Anh đang giấu điều gì vậy? Cái hoa văn đó có liên quan đến vụ tai nạn, đúng không?",
						"thai": "คุณกำลังซ่อนอะไรอยู่? สัญลักษณ์นั้นเกี่ยวข้องกับอุบัติเหตุใช่ไหม?",
						"hindi": "तुम क्या छुपा रहे हो? वह निशान, उसका दुर्घटना से संबंध है, है ना?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "경고합니다. 과도한 추측은 불필요한 혼란을 야기할 뿐.",
						"english": "I warn you. Excessive speculation only causes unnecessary confusion.",
						"japanese": "警告します。過度な憶測は不必要な混乱を招くだけです。",
						"chinese": "我警告你。过度的猜测只会引起不必要的混乱。",
						"french": "Je vous préviens. Des spéculations excessives ne feront que créer une confusion inutile.",
						"spanish": "Le advierto. La especulación excesiva solo causará confusión innecesaria.",
						"vietnamese": "Tôi cảnh cáo anh. Suy đoán quá mức chỉ gây ra sự hỗn loạn không cần thiết.",
						"thai": "ผมเตือนคุณแล้วนะ การคาดเดาเกินจริงจะนำมาซึ่งความสับสนโดยไม่จำเป็นเท่านั้น",
						"hindi": "मैं आपको चेतावनी देता हूँ। अत्यधिक अटकलें केवल अनावश्यक भ्रम पैदा करेंगी।"
					},
					"emotion": "angry",
					"speaker": "kai"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "당신의 경고 자체가 진실을 말해주는 것 같아.",
						"english": "Your warning rings true.",
						"japanese": "あなたの警告そのものが真実を語っているようだ。",
						"chinese": "你的警告本身似乎就说明了真相。",
						"french": "Ton avertissement lui-même semble dire la vérité.",
						"spanish": "Tu propia advertencia parece decir la verdad.",
						"vietnamese": "Chính lời cảnh báo của ngươi dường như đã nói lên sự thật.",
						"thai": "คำเตือนของเจ้าเองดูเหมือนจะบอกความจริง",
						"hindi": "आपकी चेतावनी ही सच बता रही है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "(분노) 비켜서세요! 더 이상 방해한다면…!",
						"english": "(Enraged) Get out of my way! If you interfere again...!",
						"japanese": "(怒り) 退きなさい！これ以上邪魔をするなら…！",
						"chinese": "(愤怒) 让开！如果再妨碍我…！",
						"french": "(Fureur) Écartez-vous ! Si vous m'interrompez encore… !",
						"spanish": "(Furia) ¡Apártate! Si me estorbas más…!",
						"vietnamese": "(Giận dữ) Tránh ra! Nếu ngươi còn cản đường…!",
						"thai": "(โกรธจัด) ถอยไปซะ! ถ้ายังขัดขวางอีก…!",
						"hindi": "(क्रोधित) हट जाओ! अगर तुमने और बाधा डाली तो…!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "kai"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "(이 도시에 숨겨진 뭔가가 있어.)",
						"english": "(There's something hidden in this city.)",
						"japanese": "(この街には何かが隠されている。)",
						"chinese": "(这座城市里隐藏着什么。)",
						"french": "(Quelque chose est caché dans cette ville.)",
						"spanish": "(Algo está escondido en esta ciudad.)",
						"vietnamese": "(Có điều gì đó được giấu kín trong thành phố này.)",
						"thai": "(มีบางสิ่งซ่อนอยู่ในเมืองนี้)",
						"hindi": "(इस शहर में कुछ छिपा हुआ है。)"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "카이의 경고를 무시하고 더 깊숙이 들어섰을 때, 거대한 존재가 나타났다.",
						"english": "Disregarding Kai's warning, we ventured deeper, and a colossal presence emerged.",
						"japanese": "カイの警告を無視して奥深くへと進むと、巨大な存在が現れた。",
						"chinese": "忽略了凯的警告，当我们深入时，一个巨大的存在出现了。",
						"french": "Ignorant l'avertissement de Kai, alors que nous nous enfoncions, une présence colossale apparut.",
						"spanish": "Ignorando la advertencia de Kai, al adentrarnos, una presencia colosal apareció.",
						"vietnamese": "Bất chấp lời cảnh báo của Kai, khi tôi bước sâu hơn, một thực thể khổng lồ xuất hiện.",
						"thai": "เมื่อเราเมินเฉยต่อคำเตือนของไคและก้าวลึกเข้าไป สิ่งมีชีวิตขนาดยักษ์ก็ปรากฏตัวขึ้น",
						"hindi": "काई की चेतावनी को नज़रअंदाज़ करते हुए, जैसे ही मैं और गहरा गया, एक विशाल उपस्थिति प्रकट हुई।"
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"speaker": "kai",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "여기까지 오다니… 어리석군.",
						"english": "You came all this way... foolish.",
						"japanese": "ここまで来たか…愚かな。",
						"chinese": "竟然来到这里…真是愚蠢。",
						"french": "Venir jusqu'ici… insensé.",
						"spanish": "Llegar hasta aquí… qué necio.",
						"vietnamese": "Đến được đây… thật ngu xuẩn.",
						"thai": "มาถึงนี่ได้… ช่างโง่เขลา",
						"hindi": "यहाँ तक आ गए… मूर्खतापूर्ण।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "kai"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "(낮고 으르렁거리는 소리)",
						"english": "(Low growl)",
						"japanese": "(低く唸るような音)",
						"chinese": "(低沉的咆哮声)",
						"french": "(Grogne sourde)",
						"spanish": "(Gruñido bajo)",
						"vietnamese": "(Tiếng gầm gừ thấp)",
						"thai": "(เสียงคำรามต่ำ)",
						"hindi": "(धीमी गुर्राहट)"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "저게… 당신이 숨기려던 진실이야?",
						"english": "Is that... the truth you were trying to hide?",
						"japanese": "あれが…あなたが隠そうとしていた真実か？",
						"chinese": "那就是…你试图隐藏的真相吗？",
						"french": "C'est ça… la vérité que tu essayais de cacher ?",
						"spanish": "¿Es eso… la verdad que intentabas esconder?",
						"vietnamese": "Đó… là sự thật ngươi đang cố giấu giếm ư?",
						"thai": "นั่นคือ… ความจริงที่เจ้าพยายามจะซ่อนเร้นหรือ?",
						"hindi": "क्या वही… सच है जिसे तुम छिपाने की कोशिश कर रहे थे?"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "이건… 어쩔 수 없는 일이었다! {random_boss}, 저들을 막아라!",
						"english": "This was... inevitable! {random_boss}, hold them back!",
						"japanese": "これは…避けられなかったことだ！{random_boss}、奴らを止めろ！",
						"chinese": "这件事…是无法避免的！{random_boss}，阻止他们！",
						"french": "C'était… inévitable ! {random_boss}, arrête-les !",
						"spanish": "¡Esto era… inevitable! ¡{random_boss}, deténlos!",
						"vietnamese": "Chuyện này… là không thể tránh khỏi! {random_boss}, ngăn chúng lại!",
						"thai": "นี่มัน… เป็นเรื่องที่หลีกเลี่ยงไม่ได้! {random_boss}, หยุดพวกมันซะ!",
						"hindi": "यह… टाला नहीं जा सकता था! {random_boss}, उन्हें रोको!"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "kai"
				},
				{
					"duration_ms": 400,
					"speaker": "kai",
					"direction": "up",
					"type": "direction",
					"action": "exit"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "누구도 이 서약을 어길 수 없어.",
						"english": "None can break this pact.",
						"japanese": "誰もこの誓いを破ることはできない。",
						"chinese": "谁也无法违背这个誓约。",
						"french": "Nul ne peut briser ce serment.",
						"spanish": "Nadie puede romper este juramento.",
						"vietnamese": "Không ai có thể phá vỡ lời thề này.",
						"thai": "ไม่มีใครสามารถละเมิดคำสาบานนี้ได้",
						"hindi": "कोई इस शपथ को तोड़ नहीं सकता।"
					},
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "하찮은 것들. 너희는 이 서약 앞에서 무력할 뿐.",
						"english": "Insignificant beings. You are powerless before this covenant.",
						"japanese": "取るに足らぬ者ども。貴様らはこの誓約の前では無力に過ぎない。",
						"chinese": "渺小的东西。在这誓约面前，你们不过是无能为力罢了。",
						"french": "Êtres insignifiants. Vous êtes impuissants face à ce pacte.",
						"spanish": "Seres insignificantes. Sois impotentes ante este pacto.",
						"vietnamese": "Lũ yếu ớt. Các ngươi chỉ là vô dụng trước lời thề này.",
						"thai": "พวกไร้ค่า พวกแกไร้พลังต่อหน้าพันธสัญญานี้",
						"hindi": "तुच्छ प्राणी। तुम इस वाचा के सामने शक्तिहीन हो।"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "...젠장. 아직 포기 안 해.",
						"english": "...Damn it. I'm not giving up yet.",
						"japanese": "...くそ。まだ諦めない。",
						"chinese": "...该死。我还没放弃。",
						"french": "...Mince. Je n'abandonne pas encore.",
						"spanish": "...Maldita sea. Todavía no me rindo.",
						"vietnamese": "Chết tiệt. Tôi chưa bỏ cuộc đâu.",
						"thai": "...ให้ตายสิ ฉันยังไม่ยอมแพ้",
						"hindi": "...धिक्कार है। मैंने अभी हार नहीं मानी है।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "압도적인 힘에 굴복했지만, 의심은 더욱 깊어졌다.",
						"english": "Though I succumbed to overwhelming power, my doubts only deepened.",
						"japanese": "圧倒的な力に屈したが、疑念はさらに深まった。",
						"chinese": "虽然屈服于压倒性的力量，但疑虑却更加深了。",
						"french": "Bien que j'aie succombé à une puissance écrasante, mes doutes n'ont fait que s'accentuer.",
						"spanish": "Aunque sucumbí al poder abrumador, mis dudas solo se profundizaron.",
						"vietnamese": "Mặc dù đã khuất phục trước sức mạnh áp đảo, nhưng sự nghi ngờ trong tôi càng sâu sắc hơn.",
						"thai": "แม้จะยอมจำนนต่อพลังอันท่วมท้น แต่ความสงสัยก็ยิ่งเพิ่มพูนขึ้น",
						"hindi": "हालांकि मैं भारी शक्ति के आगे झुक गया, मेरे संदेह और गहरे हो गए।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "서약은… 절대… 끝나지 않아…!",
						"english": "The pact... will never... be broken...!",
						"japanese": "誓いは…決して…終わらない…！",
						"chinese": "誓约…绝不会…结束…！",
						"french": "Le serment… ne prendra… jamais fin… !",
						"spanish": "¡El juramento… nunca… termina…!",
						"vietnamese": "Lời thề… sẽ không… bao giờ… kết thúc…!",
						"thai": "คำสาบาน… จะไม่มีวัน… สิ้นสุด…!",
						"hindi": "शपथ… कभी… खत्म… नहीं होगी…!"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "아직 끝나지 않았어… 다음은 너희 차례야.",
						"english": "It's not over yet... You're next.",
						"japanese": "まだ終わらない…次は貴様らの番だ。",
						"chinese": "还没完...下一个就是你们。",
						"french": "Ce n'est pas encore fini... Votre tour viendra.",
						"spanish": "Aún no ha terminado... Vosotros sois los siguientes.",
						"vietnamese": "Chưa kết thúc đâu... Tiếp theo là lượt của các ngươi.",
						"thai": "ยังไม่จบ... พวกแกคิวต่อไป",
						"hindi": "यह अभी खत्म नहीं हुआ... अब तुम्हारी बारी है।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "쓰러진 {random_boss} 뒤로, 또 다른 미지의 그림자가 드리웠다.",
						"english": "Behind the fallen {random_boss}, another unknown shadow loomed.",
						"japanese": "倒れた{random_boss}の背後には、また別の未知の影が迫っていた。",
						"chinese": "在倒下的{random_boss}身后，又一个未知的阴影笼罩而来。",
						"french": "Derrière le {random_boss} vaincu, une autre ombre inconnue planait.",
						"spanish": "Tras el {random_boss} caído, otra sombra desconocida se cernía.",
						"vietnamese": "Đằng sau {random_boss} đã ngã xuống, một bóng đen bí ẩn khác lại hiện ra.",
						"thai": "เบื้องหลัง {random_boss} ที่ล้มลง เงาลึกลับอีกเงาหนึ่งก็ปรากฏขึ้น",
						"hindi": "{random_boss} के गिरने के बाद, एक और अज्ञात परछाई मंडरा रही थी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "이 도시는 끝없는 약속의 굴레에 갇혀 있었다.",
						"english": "This city was trapped in an endless cycle of promises.",
						"japanese": "この都市は、終わりのない約束の輪に囚われていた。",
						"chinese": "这座城市被困在无尽的承诺循环中。",
						"french": "Cette ville était piégée dans un cycle de promesses sans fin.",
						"spanish": "Esta ciudad estaba atrapada en un ciclo interminable de promesas.",
						"vietnamese": "Thành phố này bị mắc kẹt trong vòng xoáy lời hứa không hồi kết.",
						"thai": "เมืองนี้ถูกขังอยู่ในวงจรแห่งคำสัญญาที่ไม่มีที่สิ้นสุด",
						"hindi": "यह शहर वादों के एक अंतहीन चक्र में फंसा हुआ था।"
					},
					"emotion": "base"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"오래된 금융 빌딩, 알 수 없는 폭발.",
			"현장 책임자 카이는 단순 사고라고 했다.",
			"그러나 곳곳에 새겨진 기이한 문양은 —",
			"모든 것이 거짓말이라고 속삭였다.",
			"진실은 언제나 보이지 않는 곳에 있었다."
		],
		"english": [
			"An old financial building, an unknown explosion.",
			"Field supervisor Kai called it a simple accident.",
			"But the strange symbols carved everywhere —",
			"Whispered that everything was a lie.",
			"The truth was always in the unseen."
		],
		"japanese": [
			"古い金融ビル、未知の爆発。",
			"現場責任者カイはそれを単なる事故だと言った。",
			"しかし、至る所に刻まれた奇妙な模様は—",
			"すべてが嘘だと囁いた。",
			"真実はいつも見えない場所に存在した。"
		],
		"chinese": [
			"一栋旧金融大楼，一场未知爆炸。",
			"现场负责人凯说那只是个简单的事故。",
			"然而，四处刻着的奇异图案——",
			"低语着一切都是谎言。",
			"真相总是在看不见的地方。"
		],
		"french": [
			"Un ancien immeuble financier, une explosion inconnue.",
			"Le responsable de chantier Kai a qualifié cela de simple accident.",
			"Mais les étranges symboles gravés partout —",
			"Murmurait que tout était un mensonge.",
			"La vérité était toujours là où on ne la voyait pas."
		],
		"spanish": [
			"Un antiguo edificio financiero, una explosión desconocida.",
			"El supervisor de campo Kai lo llamó un simple accidente.",
			"Pero los extraños símbolos grabados por todas partes —",
			"Susurraban que todo era una mentira.",
			"La verdad siempre estuvo en lo invisible."
		],
		"vietnamese": [
			"Một tòa nhà tài chính cũ, một vụ nổ không rõ nguyên nhân.",
			"Giám sát viên hiện trường Kai nói đó chỉ là một tai nạn đơn giản.",
			"Nhưng những biểu tượng kỳ lạ được khắc khắp nơi —",
			"Thì thầm rằng mọi thứ đều là dối trá.",
			"Sự thật luôn ở nơi không thể nhìn thấy."
		],
		"thai": [
			"อาคารการเงินเก่าแก่, ระเบิดปริศนา.",
			"หัวหน้างานภาคสนามไคกล่าวว่าเป็นอุบัติเหตุธรรมดา",
			"แต่สัญลักษณ์ประหลาดที่แกะสลักอยู่ทุกหนแห่ง —",
			"กระซิบว่าทุกอย่างเป็นเรื่องโกหก",
			"ความจริงซ่อนอยู่ในที่ที่มองไม่เห็นเสมอ"
		],
		"hindi": [
			"एक पुरानी वित्तीय इमारत, एक अज्ञात विस्फोट।",
			"फील्ड सुपरवाइजर काई ने इसे एक साधारण दुर्घटना कहा।",
			"लेकिन हर जगह खुदे हुए अजीबोगरीब प्रतीक —",
			"फुसफुसाया कि सब कुछ झूठ था।",
			"सच हमेशा अनदेखी जगह में था।"
		]
	}
} as const;
