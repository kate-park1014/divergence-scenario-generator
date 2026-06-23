export const scenario_modern_cache_26_01 = {
	"scenario_id": "modern_cache_26_01",
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
					"content": {
						"korean": "버려진 도시 지하. 낡은 금고 문이 열리자 금속성 비린내가 코를 찔렀다.",
						"english": "Beneath the abandoned city. As the old vault door creaked open, a metallic, fishy smell assaulted my nose.",
						"japanese": "打ち捨てられた都市の地下。古い金庫の扉が開くと、金属の生臭い匂いが鼻を突いた。",
						"chinese": "废弃城市的地下。老旧的保险库门打开时，一股金属腥味扑鼻而来。",
						"french": "Sous la ville abandonnée. Lorsque la vieille porte du coffre s'ouvrit, une odeur métallique et âcre me frappa.",
						"spanish": "Bajo la ciudad abandonada. Al abrirse la vieja puerta de la bóveda, un olor metálico y rancio me golpeó la nariz.",
						"vietnamese": "Dưới thành phố hoang tàn. Khi cánh cửa hầm cũ mở ra, một mùi tanh kim loại xộc thẳng vào mũi.",
						"thai": "ใต้เมืองร้าง. ทันทีที่ประตูห้องนิรภัยเก่าเปิดออก กลิ่นคาวโลหะก็ฉุนกึกเข้าจมูก",
						"hindi": "परित्यक्त शहर के नीचे। जैसे ही पुरानी तिजोरी का दरवाज़ा खुला, एक धात्विक, मछली जैसी गंध ने नाक पर हमला कर दिया।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "여기가 Cache야? 으음… 생각보다 퀴퀴하네.",
						"english": "Is this the Cache? Hmm... it's smellier than I thought.",
						"japanese": "ここがキャッシュ？うーん…思ったより黴臭いな。",
						"chinese": "这里就是Cache？嗯……比我想象的要阴湿。",
						"french": "C'est ça le Cache ? Hmm... ça sent plus le moisi que je ne pensais.",
						"spanish": "¿Este es el Cache? Mmm... huele más a humedad de lo que pensé.",
						"vietnamese": "Đây là Cache à? Ưm... ẩm mốc hơn tôi nghĩ.",
						"thai": "นี่คือ Cache เหรอ? อืม... เหม็นอับกว่าที่คิดแฮะ",
						"hindi": "यह कैश है? उम्म... यह मेरी सोच से ज़्यादा दुर्गंधयुक्त है।"
					},
					"emotion": "base"
				},
				{
					"spot": [
						4,
						2
					],
					"speaker": "dax",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "안전합니다. 이곳은 과거의 모든 정보를 안전하게 보관하죠.",
						"english": "It's safe. This place securely preserves all information from the past.",
						"japanese": "安全です。ここは過去のあらゆる情報を安全に保管しています。",
						"chinese": "很安全。这里安全地保存着过去所有信息。",
						"french": "C'est sûr. Cet endroit préserve toutes les informations du passé en toute sécurité.",
						"spanish": "Es seguro. Este lugar guarda toda la información del pasado de forma segura.",
						"vietnamese": "An toàn. Nơi này bảo quản mọi thông tin trong quá khứ một cách an toàn.",
						"thai": "ปลอดภัยครับ/ค่ะ ที่นี่เก็บรักษาข้อมูลทั้งหมดในอดีตได้อย่างปลอดภัย",
						"hindi": "यह सुरक्षित है। यह जगह अतीत की सभी जानकारियों को सुरक्षित रखती है।"
					},
					"emotion": "base",
					"speaker": "dax"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "안전?",
						"english": "Safe?",
						"japanese": "安全？",
						"chinese": "安全？",
						"french": "Sûr ?",
						"spanish": "¿Seguro?",
						"vietnamese": "An toàn?",
						"thai": "ปลอดภัยเหรอ?",
						"hindi": "सुरक्षित?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네. 완벽하게요. 다만… 특정 구역의 데이터는 건드리지 마시길.",
						"english": "Yes. Perfectly. But... please don't touch the data in certain areas.",
						"japanese": "はい。完璧に。ただし…特定の区域のデータには触れないでください。",
						"chinese": "是的。绝对安全。只是……请不要触碰特定区域的数据。",
						"french": "Oui. Parfaitement. Mais... veuillez ne pas toucher les données de certaines zones.",
						"spanish": "Sí. Perfectamente. Pero... por favor, no toque los datos de ciertas áreas.",
						"vietnamese": "Vâng. Hoàn hảo. Nhưng... xin đừng động vào dữ liệu ở một số khu vực nhất định.",
						"thai": "ครับ/ค่ะ ปลอดภัยสมบูรณ์แบบครับ/ค่ะ เพียงแต่... กรุณาอย่าแตะต้องข้อมูลในบางพื้นที่",
						"hindi": "हाँ। पूरी तरह से। लेकिन... कृपया कुछ क्षेत्रों के डेटा को न छुएं।"
					},
					"emotion": "base",
					"speaker": "dax"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "왜?",
						"english": "Why?",
						"japanese": "なぜ？",
						"chinese": "为什么？",
						"french": "Pourquoi ?",
						"spanish": "¿Por qué?",
						"vietnamese": "Tại sao?",
						"thai": "ทำไม?",
						"hindi": "क्यों?"
					}
				},
				{
					"speaker": "dax",
					"type": "speech",
					"content": {
						"korean": "그냥… 오래돼서 좀 불안정합니다. 하하.",
						"english": "It's just... old, so it's a bit unstable. Haha.",
						"japanese": "ただ…古いので、少し不安定なんです。はは。",
						"chinese": "只是…有些旧了，所以不太稳定。哈哈。",
						"french": "C'est juste... vieux, alors c'est un peu instable. Haha.",
						"spanish": "Es que... es viejo, así que es un poco inestable. Jaja.",
						"vietnamese": "Chỉ là... nó cũ rồi nên hơi không ổn định. Haha.",
						"thai": "แค่...มันเก่าแล้ว ก็เลยไม่ค่อยเสถียรเท่าไหร่ครับ ฮ่าๆ",
						"hindi": "बस... यह पुराना है, इसलिए थोड़ा अस्थिर है। हाहा।"
					},
					"emotion": "happy"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "닥스의 얼굴에 스치는 불안감. 그리고 이상한 죄책감.",
						"english": "A flicker of unease crosses Dax's face. And a strange sense of guilt.",
						"japanese": "ダックスの顔に不安の影がよぎる。そして、奇妙な罪悪感。",
						"chinese": "一丝不安掠过达克斯的脸庞。以及一种奇怪的负罪感。",
						"french": "Une pointe d'inquiétude passe sur le visage de Dax. Et une étrange culpabilité.",
						"spanish": "Una punzada de inquietud cruza el rostro de Dax. Y una extraña culpa.",
						"vietnamese": "Một thoáng bất an lướt qua khuôn mặt Dax. Và một cảm giác tội lỗi kỳ lạ.",
						"thai": "ความรู้สึกไม่สบายใจฉายแววบนใบหน้าของแด็กซ์ และความรู้สึกผิดแปลกๆ",
						"hindi": "डैक्स के चेहरे पर बेचैनी की एक झलक। और एक अजीब-सा अपराधबोध।"
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "dax",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "닥스, 아까 그 '특정 구역' 말인데.",
						"english": "Dax, about that 'specific area' from earlier.",
						"japanese": "ダックス、さっきの『特定の区域』のことだけど。",
						"chinese": "达克斯，关于刚才那个'特定区域'...",
						"french": "Dax, à propos de cette 'zone spécifique' dont tu parlais tout à l'heure.",
						"spanish": "Dax, sobre esa 'zona específica' de antes.",
						"vietnamese": "Dax, về cái 'khu vực cụ thể' lúc nãy ấy.",
						"thai": "แด็กซ์ เรื่อง 'พื้นที่เฉพาะ' เมื่อกี้...",
						"hindi": "डैक्स, उस 'खास इलाके' के बारे में जो पहले कहा था।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "아… 네. 아무것도 아닙니다. 그냥… 오래된 데이터는 그래요.",
						"english": "Ah... yes. It's nothing. Old data is just like that.",
						"japanese": "あ…はい。何でもありません。ただ…古いデータはああなんです。",
						"chinese": "啊…是。没什么。只是…旧数据就是那样。",
						"french": "Ah... oui. Ce n'est rien. Les vieilles données sont juste comme ça.",
						"spanish": "Ah... sí. No es nada. Los datos antiguos son así.",
						"vietnamese": "À... vâng. Không có gì đâu. Chỉ là... dữ liệu cũ nó vậy đó.",
						"thai": "อ่า... ครับ ไม่มีอะไรครับ แค่...ข้อมูลเก่าๆ ก็เป็นแบบนั้นแหละครับ",
						"hindi": "आह... हाँ। कुछ नहीं है। बस... पुराना डेटा ऐसा ही होता है।"
					},
					"speaker": "dax"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "불안정하다고? 아님 뭔가 숨기는 거야?",
						"english": "Unstable? Or are you hiding something?",
						"japanese": "不安定だって？それとも何か隠してるの？",
						"chinese": "不稳定？还是你在隐瞒什么？",
						"french": "Instable ? Ou tu caches quelque chose ?",
						"spanish": "¿Inestable? ¿O me estás ocultando algo?",
						"vietnamese": "Không ổn định ư? Hay là anh đang giấu cái gì đó?",
						"thai": "ไม่เสถียรเหรอ? หรือว่านายกำลังซ่อนอะไรอยู่?",
						"hindi": "अस्थिर है? या तुम कुछ छिपा रहे हो?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "숨기다니요! 제가 뭘… 죄송합니다. 제가 요즘 좀 멍해서.",
						"english": "Hiding? What would I... I'm sorry. I've been a bit absent-minded lately.",
						"japanese": "隠すなんて！私が何を…すみません。最近、ちょっとぼーっとしていて。",
						"chinese": "隐瞒？我能有什么…抱歉。我最近有点心不在焉。",
						"french": "Cacher ? Mais qu'est-ce que je... Pardon. Je suis un peu dans la lune ces temps-ci.",
						"spanish": "¿Ocultar? ¿Qué podría yo... Lo siento. Últimamente estoy un poco aturdido.",
						"vietnamese": "Giấu gì ạ! Tôi có gì đâu mà... Xin lỗi. Dạo này tôi hơi ngơ ngẩn.",
						"thai": "ซ่อนอะไรครับ! ผมจะไปซ่อนอะไร... ขอโทษครับ ช่วงนี้ผมเหม่อลอยไปหน่อย",
						"hindi": "छिपाना? मैं क्या... माफ़ करना। मैं आजकल थोड़ा खोया-खोया रहता हूँ।"
					},
					"speaker": "dax"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "닥스의 미간에 깊어진 주름. 그의 눈은 알 수 없는 곳을 헤맸다.",
						"english": "Dax's brow furrowed deeply. His eyes wandered to an unknown place.",
						"japanese": "ダックスの眉間に深いしわが刻まれる。彼の目は、得体の知れない場所をさまよっていた。",
						"chinese": "达克斯的眉宇间皱纹更深了。他的目光游移到未知的地方。",
						"french": "Les sourcils de Dax se froncèrent profondément. Ses yeux erraient vers un lieu inconnu.",
						"spanish": "Las arrugas en el entrecejo de Dax se profundizaron. Sus ojos vagaban hacia un lugar desconocido.",
						"vietnamese": "Vết nhăn trên trán Dax sâu hơn. Đôi mắt anh ta lạc về một nơi không rõ.",
						"thai": "รอยย่นระหว่างคิ้วของแด็กซ์ลึกขึ้น ดวงตาของเขาเหม่อลอยไปยังที่ที่ไม่รู้จัก",
						"hindi": "डैक्स की भौंहों पर गहरी झुर्रियां पड़ गईं। उसकी आँखें कहीं अज्ञात जगह भटक रही थीं।"
					},
					"speaker": "narrator"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						2
					],
					"action": "enter",
					"speaker": "dax"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이 데이터들… 기록이 좀 이상해.",
						"english": "These data... the records are a bit strange.",
						"japanese": "このデータ…記録が少しおかしい。",
						"chinese": "这些数据…记录有点奇怪。",
						"french": "Ces données... les enregistrements sont un peu étranges.",
						"spanish": "Estos datos... los registros son un poco extraños.",
						"vietnamese": "Mấy dữ liệu này... ghi chép hơi lạ.",
						"thai": "ข้อมูลพวกนี้...บันทึกมันแปลกๆ นะ",
						"hindi": "यह डेटा... रिकॉर्ड कुछ अजीब हैं।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "'최적화' 됐다고? 살인 기록이?",
						"english": "'Optimized'? Murder records?",
						"japanese": "『最適化』されたって？殺人の記録が？",
						"chinese": "被'优化'了？杀人记录？",
						"french": "'Optimisé' ? Des registres de meurtres ?",
						"spanish": "¿'Optimizado'? ¿Registros de asesinatos?",
						"vietnamese": "'Tối ưu hóa' ư? Hồ sơ giết người?",
						"thai": "'ถูกปรับให้เหมาะสม' เหรอ? บันทึกการฆาตกรรม?",
						"hindi": "'ऑप्टिमाइज़' किया गया? हत्या के रिकॉर्ड?"
					},
					"speaker": "character_1"
				},
				{
					"speaker": "dax",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "아! 그건 시스템의… 그냥… 정리에요. 모든 게 효율적으로.",
						"english": "Ah! That's just the system's... simply... organization. Everything efficiently.",
						"japanese": "あ！それはシステムの…ただの…整理です。すべてが効率的に。",
						"chinese": "啊！那只是系统的…只是…整理。一切都高效地进行。",
						"french": "Ah ! C'est juste le système... simplement... une organisation. Tout est efficace.",
						"spanish": "¡Ah! Eso es solo el sistema... simplemente... una organización. Todo de manera eficiente.",
						"vietnamese": "À! Đó chỉ là... việc sắp xếp của hệ thống thôi. Mọi thứ đều hiệu quả.",
						"thai": "อ่า! นั่นมัน...แค่การจัดระเบียบของระบบครับ ทุกอย่างเป็นไปอย่างมีประสิทธิภาพ",
						"hindi": "आह! वह तो सिस्टम का... बस... एक तरह का संगठन है। सब कुछ कुशलता से।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "효율적으로 감춰졌다는 거겠지.",
						"english": "It's probably well-hidden.",
						"japanese": "効率的に隠されていたのでしょう。",
						"chinese": "应该藏得很好。",
						"french": "Ça devait être bien caché.",
						"spanish": "Debe haber estado bien escondido.",
						"vietnamese": "Chắc là đã bị giấu kỹ rồi.",
						"thai": "น่าจะถูกซ่อนไว้อย่างมีประสิทธิภาพ",
						"hindi": "इसे कुशलता से छिपाया गया होगा।"
					}
				},
				{
					"speaker": "dax",
					"type": "speech",
					"content": {
						"korean": "아닙니다! 오해에요! 저는… 아무것도…",
						"english": "No! It's a mistake! I... nothing...",
						"japanese": "違います！誤解です！私は…何も…",
						"chinese": "不是！这是误会！我…什么都没做…",
						"french": "Non ! C'est un malentendu ! Je… rien…",
						"spanish": "¡No! ¡Es un malentendido! Yo… nada…",
						"vietnamese": "Không phải! Là hiểu lầm thôi! Tôi… không làm gì cả…",
						"thai": "ไม่ใช่ครับ/ค่ะ! เป็นเรื่องเข้าใจผิด! ผม/ดิฉัน… ไม่ได้ทำอะไรเลย…",
						"hindi": "नहीं! यह गलतफहमी है! मैंने… कुछ नहीं…"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "닥스의 목소리가 떨렸다. 그의 불안이 실체가 되어갔다.",
						"english": "Dax's voice trembled. His fear took solid form.",
						"japanese": "ダクスの声が震えた。彼の不安が実体と化していった。",
						"chinese": "达克斯的声音颤抖着。他的不安变成了现实。",
						"french": "La voix de Dax tremblait. Son anxiété prenait corps.",
						"spanish": "La voz de Dax tembló. Su ansiedad se hizo palpable.",
						"vietnamese": "Giọng Dax run rẩy. Nỗi bất an của anh ta đang trở thành hiện thực.",
						"thai": "เสียงของแด็กซ์สั่นเครือ ความวิตกกังวลของเขากลายเป็นจริง",
						"hindi": "डैक्स की आवाज़ काँप रही थी। उसकी घबराहट हकीकत बन रही थी।"
					},
					"speaker": "narrator"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						1,
						2
					],
					"action": "enter",
					"speaker": "dax",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "더 깊이 들어가면 뭐가 나와?",
						"english": "What's further in?",
						"japanese": "もっと奥には何がある？",
						"chinese": "再往深处有什么？",
						"french": "Qu'y a-t-il plus profondément ?",
						"spanish": "¿Qué hay más adentro?",
						"vietnamese": "Vào sâu hơn thì có gì?",
						"thai": "ลึกเข้าไปอีกมีอะไร?",
						"hindi": "और गहरा जाने पर क्या मिलेगा?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "안됩니다! 가지 마세요! 더 이상은… 당신들이 감당 못 할 겁니다.",
						"english": "Don't! Stop! Any more... you can't bear it.",
						"japanese": "だめです！行かないでください！これ以上は…あなたたちには手に負えません。",
						"chinese": "不行！别去！再往前…你们承受不住的。",
						"french": "Non ! N'y allez pas ! Plus loin… vous ne pourrez pas le supporter.",
						"spanish": "¡No! ¡No vayan! Más allá… no podrán con ello.",
						"vietnamese": "Không được! Đừng đi! Hơn nữa… các người sẽ không chịu nổi đâu.",
						"thai": "ไม่ได้ครับ/ค่ะ! อย่าไปเลย! มากกว่านี้… พวกคุณจะรับมือไม่ไหวหรอก",
						"hindi": "नहीं! मत जाओ! इससे आगे… तुम संभाल नहीं पाओगे।"
					},
					"emotion": "sad",
					"speaker": "dax"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이미 여기까지 왔어.",
						"english": "We've already come this far.",
						"japanese": "もうここまで来たんだ。",
						"chinese": "我们已经到这里了。",
						"french": "Nous sommes déjà arrivés jusqu'ici.",
						"spanish": "Ya hemos llegado hasta aquí.",
						"vietnamese": "Đã đến đây rồi.",
						"thai": "เรามาถึงนี่แล้ว",
						"hindi": "हम पहले ही यहाँ तक आ चुके हैं।"
					},
					"emotion": "base",
					"speaker": "character_1"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "제발… 부탁입니다. 되돌아가요. 제발.",
						"english": "Please... I beg you. Turn back. Please.",
						"japanese": "お願いです… 戻ってください。お願い。",
						"chinese": "拜托了… 求你们。回去吧。拜托了。",
						"french": "S'il vous plaît… Je vous en supplie. Retournez en arrière. S'il vous plaît.",
						"spanish": "Por favor… se lo ruego. Regresen. Por favor.",
						"vietnamese": "Xin… làm ơn. Quay lại đi. Làm ơn.",
						"thai": "ได้โปรด… ขอร้องล่ะ กลับไปเถอะ ได้โปรด",
						"hindi": "कृपया… मेरी विनती है। वापस चले जाओ। कृपया।"
					},
					"speaker": "dax"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "닥스의 눈빛은 애원했다. 하지만 탐험대는 멈추지 않았다.",
						"english": "Dax's eyes pleaded. But the expedition team didn't stop.",
						"japanese": "ダクスの瞳は懇願していた。しかし、探検隊は止まらなかった。",
						"chinese": "达克斯的眼神在哀求。但探险队并未停下。",
						"french": "Les yeux de Dax suppliaient. Mais l'équipe d'exploration ne s'arrêta pas.",
						"spanish": "La mirada de Dax suplicaba. Pero el equipo de exploración no se detuvo.",
						"vietnamese": "Ánh mắt Dax van nài. Nhưng đoàn thám hiểm không dừng lại.",
						"thai": "แววตาของแด็กซ์อ้อนวอน แต่คณะสำรวจก็ไม่หยุด",
						"hindi": "डैक्स की आँखें मिन्नत कर रही थीं। लेकिन खोज दल नहीं रुका।"
					}
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "금고 가장 깊은 곳. 거대한 시스템이 빛나고 있었다. 그 앞에 정체 모를 그림자가 움직였다.",
						"english": "Deepest within the vault. A colossal system glowed. Before it, an unknown shadow stirred.",
						"japanese": "金庫の最も深い場所。巨大なシステムが輝いていた。その前で、正体不明の影が蠢いた。",
						"chinese": "金库最深处。一个巨大的系统闪耀着。其前方，一个不明身份的影子在移动。",
						"french": "Au plus profond du coffre. Un système colossal brillait. Devant lui, une ombre inconnue s'agitait.",
						"spanish": "En lo más profundo de la bóveda. Un sistema colosal brillaba. Delante, una sombra desconocida se movía.",
						"vietnamese": "Sâu nhất trong hầm. Một hệ thống khổng lồ đang phát sáng. Trước nó, một bóng đen không rõ danh tính đang di chuyển.",
						"thai": "ลึกที่สุดในห้องนิรภัย ระบบขนาดมหึมากำลังส่องแสงอยู่ เบื้องหน้าเงามืดปริศนากำลังเคลื่อนไหว",
						"hindi": "तिजोरी के सबसे गहरे कोने में। एक विशालकाय प्रणाली चमक रही थी। उसके सामने, एक अनजान परछाई हिल रही थी।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "감히 이곳까지. 너희 같은 하찮은 존재들이.",
						"english": "How dare you come this far. Insignificant beings like you.",
						"japanese": "よくもここまで。お前たちのような取るに足らない存在が。",
						"chinese": "竟敢到此。你们这些渺小的存在。",
						"french": "Comment osez-vous venir jusqu'ici. Des êtres insignifiants comme vous.",
						"spanish": "¿Cómo osáis llegar hasta aquí? Seres insignificantes como vosotros.",
						"vietnamese": "Dám đến tận đây sao. Những kẻ hèn mọn như các ngươi.",
						"thai": "กล้าดียังไงถึงมาถึงนี่ได้ พวกสิ่งมีชีวิตไร้ค่าอย่างพวกเจ้า",
						"hindi": "तुम्हारी हिम्मत कैसे हुई यहाँ तक आने की। तुम जैसे तुच्छ प्राणी।"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네가… 이 모든 걸 조작한 거야?",
						"english": "You... you orchestrated all of this?",
						"japanese": "お前が… この全てを操っていたのか？",
						"chinese": "你…你操纵了这一切？",
						"french": "C'est toi… qui a tout orchestré ?",
						"spanish": "¿Tú… tú orquestaste todo esto?",
						"vietnamese": "Ngươi… ngươi đã sắp đặt tất cả chuyện này?",
						"thai": "แก… แกบงการเรื่องทั้งหมดนี้เหรอ?",
						"hindi": "क्या तुम… तुम ही ने यह सब रचा है?"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"speaker": "dax",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "dax",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "아니요! 도망쳐요! 이 괴물은…!",
						"english": "No! Run! This monster is…!",
						"japanese": "やめて！逃げて！この怪物は…！",
						"chinese": "不！快跑！这个怪物是…！",
						"french": "Non ! Fuyez ! Ce monstre est… !",
						"spanish": "¡No! ¡Corran! ¡Este monstruo es…!",
						"vietnamese": "Không! Chạy đi! Quái vật này…!",
						"thai": "ไม่นะ! หนีไป! สัตว์ประหลาดตัวนี้…!",
						"hindi": "नहीं! भागो! यह राक्षस…!"
					}
				},
				{
					"direction": "down",
					"speaker": "dax",
					"action": "exit",
					"duration_ms": 400,
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "닥스, 네놈도 결국 시스템의 부속품일 뿐.",
						"english": "Dax, you too are merely a cog in the system.",
						"japanese": "ダックス、貴様も結局はシステムの一部に過ぎない。",
						"chinese": "达克斯，你也不过是系统的一个零件罢了。",
						"french": "Dax, toi aussi tu n'es qu'une pièce du système.",
						"spanish": "Dax, tú también eres solo un engranaje en el sistema.",
						"vietnamese": "Dax, ngươi cũng chỉ là một bộ phận của hệ thống mà thôi.",
						"thai": "แด็กซ์ แกก็เป็นแค่ส่วนหนึ่งของระบบเท่านั้นเอง",
						"hindi": "डैक्स, तुम भी आखिर में सिर्फ सिस्टम का एक पुर्जा हो।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이 금고의 '완벽한 정리'는 계속되어야 한다.",
						"english": "The 'perfect cleansing' of this vault must continue.",
						"japanese": "この金庫の『完璧な整理』は続けなければならない。",
						"chinese": "这个金库的“完美清理”必须继续。",
						"french": "Le 'nettoyage parfait' de ce coffre doit continuer.",
						"spanish": "La 'limpieza perfecta' de esta bóveda debe continuar.",
						"vietnamese": "Việc 'dọn dẹp hoàn hảo' kho tiền này phải tiếp tục.",
						"thai": "'การจัดระเบียบที่สมบูรณ์แบบ' ของห้องนิรภัยนี้ต้องดำเนินต่อไป",
						"hindi": "इस तिजोरी की 'उत्तम सफाई' जारी रहनी चाहिए।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "정리? 이건 학살이야!",
						"english": "Cleansing? This is a massacre!",
						"japanese": "整理？これは虐殺だ！",
						"chinese": "清理？这是屠杀！",
						"french": "Nettoyage ? C'est un massacre !",
						"spanish": "¿Limpieza? ¡Esto es una masacre!",
						"vietnamese": "Dọn dẹp? Đây là một cuộc thảm sát!",
						"thai": "จัดระเบียบ? นี่มันการสังหารหมู่ชัดๆ!",
						"hindi": "सफाई? यह तो नरसंहार है!"
					},
					"speaker": "character_any"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "크으윽… 단지… 효율적이었을 뿐… 시스템은… 완벽하다…",
						"english": "Ugh… merely… efficient… The system is… perfect…",
						"japanese": "うぐぅ…ただ…効率的だっただけだ…システムは…完璧だ…",
						"chinese": "呃…只是…效率更高而已…系统…是完美的…",
						"french": "Ugh… Juste… efficace… Le système est… parfait…",
						"spanish": "Ugh… Solo… eficiente… El sistema es… perfecto…",
						"vietnamese": "Ưgh… Chỉ là… hiệu quả thôi mà… Hệ thống… hoàn hảo…",
						"thai": "อึก… แค่… มีประสิทธิภาพเท่านั้นเอง… ระบบมัน… สมบูรณ์แบบ…",
						"hindi": "उफ़… बस… कुशल था… सिस्टम… एकदम सही है…"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "완벽하게 망가뜨렸겠지.",
						"english": "Perfectly broken, you mean.",
						"japanese": "完璧に壊れた、の間違いだろう。",
						"chinese": "完美地破坏了，才对吧。",
						"french": "Parfaitement brisé, oui.",
						"spanish": "Perfectamente roto, querrás decir.",
						"vietnamese": "Hoàn hảo bị phá hủy, thì đúng hơn.",
						"thai": "สมบูรณ์แบบในการทำลายล้างสินะ",
						"hindi": "पूरी तरह से टूट गया, तुम्हारा मतलब है।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…이건 시작에 불과하다… 너희는… 진실을… 감당 못 해…",
						"english": "…This is just the beginning… You won't… handle the truth…",
						"japanese": "…これは始まりに過ぎない…お前たちには…真実を…受け止められない…",
						"chinese": "…这只是个开始…你们…承受不住真相的…",
						"french": "…Ce n'est que le début… Vous ne… supporterez pas la vérité…",
						"spanish": "…Esto es solo el principio… No podréis… con la verdad…",
						"vietnamese": "…Đây chỉ là khởi đầu… Các ngươi… không thể chịu đựng được sự thật…",
						"thai": "…นี่เป็นเพียงจุดเริ่มต้น… พวกเจ้า… จะรับความจริงไม่ได้…",
						"hindi": "…यह तो बस शुरुआत है… तुम लोग… सच को… संभाल नहीं पाओगे…"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "괴물은 잔해가 되어 흩어졌다. 하지만 금고는 여전히 끈적한 기억의 냄새로 가득했다.",
						"english": "The monster scattered into remnants. But the vault still reeked of sticky memories.",
						"japanese": "怪物は残骸となって散った。だが、金庫は依然として粘つく記憶の匂いに満ちていた。",
						"chinese": "怪物化作残骸四散。但金库里依然弥漫着黏腻的记忆气息。",
						"french": "Le monstre s'est dispersé en lambeaux. Mais le coffre sentait encore les souvenirs poisseux.",
						"spanish": "El monstruo se dispersó en restos. Pero la bóveda aún apestaba a recuerdos pegajosos.",
						"vietnamese": "Quái vật tan thành tro bụi. Nhưng kho tiền vẫn nồng nặc mùi ký ức dai dẳng.",
						"thai": "สัตว์ประหลาดแตกสลายเป็นซากปรักหักพัง แต่ห้องนิรภัยยังคงอบอวลไปด้วยกลิ่นอายของความทรงจำอันเหนียวเหนอะหนะ",
						"hindi": "राक्षस अवशेषों में बिखर गया। लेकिन तिजोरी अभी भी चिपचिपी यादों की गंध से भरी थी।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "아직… 끝이 아니야. 더 파헤쳐야 할 진실이 있어.",
						"english": "It's not… over yet. There's more truth to uncover.",
						"japanese": "まだ…終わりじゃない。さらに掘り起こすべき真実がある。",
						"chinese": "还没…结束。还有更多真相需要挖掘。",
						"french": "Ce n'est pas… encore fini. Il y a plus de vérité à découvrir.",
						"spanish": "Aún no… ha terminado. Hay más verdad que desenterrar.",
						"vietnamese": "Vẫn chưa… kết thúc đâu. Còn nhiều sự thật cần phải khai quật.",
						"thai": "ยังไม่… จบแค่นี้ ยังมีอีกหลายความจริงที่ต้องเปิดเผย",
						"hindi": "अभी… खत्म नहीं हुआ है। और भी सच है जिसे उजागर करना है।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "진정한 '정리'는 지금부터였다.",
						"english": "The real challenge begins now.",
						"japanese": "本番はこれからだ。",
						"chinese": "真正的挑战现在才开始。",
						"french": "Le véritable défi commence maintenant.",
						"spanish": "El verdadero desafío comienza ahora.",
						"vietnamese": "Thử thách thực sự giờ mới bắt đầu.",
						"thai": "การท้าทายที่แท้จริงเพิ่งจะเริ่มต้นขึ้น",
						"hindi": "असली चुनौती अब शुरू होती है।"
					},
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "어리석은 것들… 이 금고는 너희의 무덤이 될 것이다.",
						"english": "Fools... this vault will be your tomb.",
						"japanese": "愚か者どもめ…この金庫がお前たちの墓場となるだろう。",
						"chinese": "愚蠢的东西……这个金库将成为你们的坟墓。",
						"french": "Imbéciles... Ce coffre sera votre tombeau.",
						"spanish": "Estúpidos... Esta bóveda será vuestra tumba.",
						"vietnamese": "Lũ ngu ngốc... Chiếc két sắt này sẽ là mồ chôn của các ngươi.",
						"thai": "พวกโง่เง่า... ห้องนิรภัยนี้จะเป็นสุสานของพวกเจ้า!",
						"hindi": "मूर्खों... यह तिजोरी तुम्हारी कब्र बनेगी।"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 탐험대를 집어삼켰다.",
						"english": "A colossal shadow engulfed the expedition.",
						"japanese": "巨大な影が探検隊を飲み込んだ。",
						"chinese": "巨大的阴影吞噬了探险队。",
						"french": "Une ombre gigantesque engloutit l'expédition.",
						"spanish": "Una sombra gigantesca devoró a la expedición.",
						"vietnamese": "Một bóng đen khổng lồ đã nuốt chửng đội thám hiểm.",
						"thai": "เงาขนาดมหึมากลืนกินคณะสำรวจ",
						"hindi": "एक विशालकाय परछाई ने अभियान दल को निगल लिया।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "젠장… 아직… 포기할 순 없어!",
						"english": "Damn it... I can't give up yet!",
						"japanese": "くそっ…まだ…諦められない！",
						"chinese": "该死……还没……不能放弃！",
						"french": "Bon sang... Pas encore... Je ne peux pas abandonner !",
						"spanish": "Maldita sea... Aún no... ¡No puedo rendirme!",
						"vietnamese": "Chết tiệt... Chưa... Tôi không thể bỏ cuộc!",
						"thai": "ให้ตายสิ... ยัง... ฉันยังยอมแพ้ไม่ได้!",
						"hindi": "धिक्कार है... अभी तक नहीं... मैं हार नहीं मान सकता!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"세계는 기억을 '정리'한다 했다.",
			"이 지하 금고는 그 완벽한 증거.",
			"하지만 썩은 금속 냄새는, 뭔가 숨겨진 진실을 속삭이는 듯했다.",
			"완벽한 보관? 아니, 완벽한 왜곡의 서막이었다."
		],
		"english": [
			"The world, they said, 'organizes' memories.",
			"This underground vault was the perfect proof.",
			"But the smell of decaying metal whispered a hidden truth.",
			"Perfect preservation? No, it was the prelude to perfect distortion."
		],
		"japanese": [
			"世界は記憶を「整理」すると言った。",
			"この地下金庫が、その完璧な証拠だ。",
			"しかし、朽ちた金属の匂いは、何か隠された真実を囁いているようだった。",
			"完璧な保管？いや、それは完璧な歪曲の序幕だった。"
		],
		"chinese": [
			"世界会“整理”记忆，他们说。",
			"这地下金库就是完美的证据。",
			"然而，腐朽金属的气味却仿佛在低语一个隐藏的真相。",
			"完美的保存？不，那只是完美扭曲的序幕。"
		],
		"french": [
			"On disait que le monde 'organisait' les souvenirs.",
			"Ce coffre souterrain en était la preuve parfaite.",
			"Mais l'odeur de métal pourri semblait chuchoter une vérité cachée.",
			"Une conservation parfaite ? Non, c'était le prélude d'une distorsion parfaite."
		],
		"spanish": [
			"Decían que el mundo 'organiza' los recuerdos.",
			"Esta bóveda subterránea era la prueba perfecta.",
			"Pero el olor a metal podrido parecía susurrar una verdad oculta.",
			"¿Conservación perfecta? No, era el preludio de una distorsión perfecta."
		],
		"vietnamese": [
			"Thế giới, họ nói, 'sắp xếp' ký ức.",
			"Hầm ngầm này là bằng chứng hoàn hảo.",
			"Nhưng mùi kim loại mục nát dường như thì thầm một sự thật bị giấu kín.",
			"Bảo quản hoàn hảo? Không, đó là khúc dạo đầu của một sự bóp méo hoàn hảo."
		],
		"thai": [
			"โลกบอกว่าจะ 'จัดระเบียบ' ความทรงจำ",
			"ห้องนิรภัยใต้ดินแห่งนี้คือหลักฐานที่สมบูรณ์แบบ",
			"แต่กลิ่นโลหะผุพังกลับกระซิบถึงความจริงที่ซ่อนอยู่",
			"การเก็บรักษาที่สมบูรณ์แบบ? ไม่สิ นั่นคือบทนำของการบิดเบือนที่สมบูรณ์แบบต่างหาก"
		],
		"hindi": [
			"दुनिया, उन्होंने कहा, यादों को 'व्यवस्थित' करती है।",
			"यह भूमिगत तिजोरी इसका सटीक प्रमाण थी।",
			"लेकिन सड़ी हुई धातु की गंध किसी छिपे हुए सत्य को फुसफुसा रही थी।",
			"उत्तम संरक्षण? नहीं, यह उत्तम विकृति की प्रस्तावना थी।"
		]
	}
} as const;
