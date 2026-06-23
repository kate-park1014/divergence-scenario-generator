export const scenario_modern_whisperweb_64_04 = {
	"scenario_id": "modern_whisperweb_64_04",
	"order": 4,
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
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "어둡고 습한 골목, 잊혀진 기억들이 떠도는 곳.",
						"english": "A dark, damp alley, where forgotten memories linger.",
						"japanese": "暗く湿った路地、忘れ去られた記憶が漂う場所。",
						"chinese": "一条阴暗潮湿的小巷，遗忘的记忆在此徘徊。",
						"french": "Une ruelle sombre et humide, où des souvenirs oubliés persistent.",
						"spanish": "Un callejón oscuro y húmedo, donde los recuerdos olvidados persisten.",
						"vietnamese": "Một con hẻm tối tăm, ẩm ướt, nơi những ký ức bị lãng quên vẫn còn vương vấn.",
						"thai": "ตรอกมืดและชื้น ที่ความทรงจำที่ถูกลืมยังคงอยู่",
						"hindi": "एक अंधेरी, नम गली, जहाँ भूली हुई यादें घूमती हैं।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "여기가… 그 조직의 흔적을 찾을 수 있다는 곳인가.",
						"english": "Is this... where I can find traces of that organization?",
						"japanese": "ここが…あの組織の痕跡を見つけられる場所か。",
						"chinese": "这里是……能找到那个组织线索的地方吗？",
						"french": "C'est ici... que je peux trouver des traces de cette organisation ?",
						"spanish": "¿Es aquí... donde puedo encontrar rastros de esa organización?",
						"vietnamese": "Đây là... nơi có thể tìm thấy dấu vết của tổ chức đó sao?",
						"thai": "ที่นี่...คือที่ที่ฉันจะพบร่องรอยขององค์กรนั้นได้หรือเปล่า",
						"hindi": "क्या यह... वह जगह है जहाँ मुझे उस संगठन के निशान मिल सकते हैं?"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "kai",
					"spot": [
						4,
						2
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "뭐 하는 놈들이야. 여기서 뭘 캐려는 거지?",
						"english": "Who are these guys? What are they digging for here?",
						"japanese": "何者だ、こいつらは。ここで何を調べているんだ？",
						"chinese": "这些家伙是谁？他们在这里挖什么？",
						"french": "Qui sont ces types ? Qu'est-ce qu'ils cherchent ici ?",
						"spanish": "¿Quiénes son estos tipos? ¿Qué están buscando aquí?",
						"vietnamese": "Bọn này là ai? Chúng đang đào bới gì ở đây vậy?",
						"thai": "พวกนี้เป็นใคร? พวกเขากำลังขุดคุ้ยอะไรที่นี่?",
						"hindi": "ये लोग कौन हैं? वे यहाँ क्या खोद रहे हैं?"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "도시의 그림자를 쫓고 있다.",
						"english": "Chasing the city's shadows.",
						"japanese": "都市の影を追っている。",
						"chinese": "追逐城市的阴影。",
						"french": "Je poursuis les ombres de la ville.",
						"spanish": "Persiguiendo las sombras de la ciudad.",
						"vietnamese": "Đuổi theo bóng tối của thành phố.",
						"thai": "กำลังตามล่าเงามืดของเมือง",
						"hindi": "शहर की परछाइयों का पीछा कर रहा हूँ।"
					}
				},
				{
					"emotion": "base",
					"speaker": "kai",
					"content": {
						"korean": "흐음… 건방진데. 조용히 해. 위험한 냄새가 나.",
						"english": "Hmm... Bold. Quiet. I smell danger.",
						"japanese": "ふむ…生意気だな。静かにしろ。危険な匂いがする。",
						"chinese": "嗯……狂妄。安静点。我闻到了危险的气息。",
						"french": "Hmm... Audacieux. Silence. Je sens le danger.",
						"spanish": "Hmm... Atrevido. Silencio. Huelo el peligro.",
						"vietnamese": "Hừm... Thật xấc xược. Im đi. Ta ngửi thấy mùi nguy hiểm.",
						"thai": "หืม...ปากดีนี่ เงียบซะ ฉันได้กลิ่นอันตราย",
						"hindi": "हम्म... ढीठ। शांत रहो। मुझे खतरे की बू आ रही है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "kai"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "위스퍼 웹… 요즘 떠도는 소문 말인가?",
						"english": "The Whisper Web... You mean the rumors going around lately?",
						"japanese": "ウィスパーウェブ…最近流れている噂のことか？",
						"chinese": "低语之网……是指最近流传的那些谣言吗？",
						"french": "Le Murmure du Web... Tu parles des rumeurs qui courent en ce moment ?",
						"spanish": "La Telaraña del Susurro... ¿Te refieres a los rumores que circulan últimamente?",
						"vietnamese": "Mạng Lưới Thầm Thì... Ý ông là những tin đồn gần đây sao?",
						"thai": "กระซิบเว็บ...หมายถึงข่าวลือที่กำลังแพร่สะพัดเมื่อเร็วๆ นี้หรือเปล่า?",
						"hindi": "फुसफुसाहट वेब... क्या तुम्हारा मतलब हाल ही में फैल रही अफवाहों से है?"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "그것이 도시의 과거를 뒤흔들고 있다.",
						"english": "It's shaking the city's past.",
						"japanese": "それが都市の過去を揺るがしている。",
						"chinese": "它正在动摇这座城市的过去。",
						"french": "Ça ébranle le passé de la ville.",
						"spanish": "Está sacudiendo el pasado de la ciudad.",
						"vietnamese": "Nó đang lay chuyển quá khứ của thành phố.",
						"thai": "มันกำลังสั่นคลอนอดีตของเมือง",
						"hindi": "यह शहर के अतीत को हिला रहा है।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "과거… 젠장. 내가 아는 '속삭이는 자'와 너무 닮았어.",
						"english": "Past... Damn it. It's too similar to the 'Whisperer' I knew.",
						"japanese": "過去… ちくしょう。俺が知ってる『囁く者』と酷似してる。",
						"chinese": "过去……该死。这和我知道的“低语者”太像了。",
						"french": "Le passé... Merde. C'est trop similaire au 'Murmureur' que je connaissais.",
						"spanish": "El pasado... Maldita sea. Es demasiado parecido al 'Susurrador' que conocía.",
						"vietnamese": "Quá khứ... Chết tiệt. Nó quá giống với 'Kẻ thì thầm' mà tôi biết.",
						"thai": "อดีต... ให้ตายสิ มันคล้ายกับ 'ผู้กระซิบ' ที่ฉันรู้จักมากเกินไป",
						"hindi": "यह उस 'व्हिस्परर' से बहुत मिलता-जुलता है जिसे मैं जानता था।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "'속삭이는 자'?",
						"english": "'Whisperer'?",
						"japanese": "『囁く者』？",
						"chinese": "“低语者”？",
						"french": "'Le Murmureur' ?",
						"spanish": "¿'El Susurrador'?",
						"vietnamese": "'Kẻ thì thầm'?",
						"thai": "'ผู้กระซิบ'?",
						"hindi": "'व्हिस्परर'?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "옛날에 정보들을 모으던 미친 놈이지. 지금은 다 죽었을 줄 알았는데…",
						"english": "A madman who used to gather information. I thought they were all dead by now...",
						"japanese": "昔、情報を集めていた狂人だ。もう全員死んだと思ってたんだが…",
						"chinese": "一个以前收集情报的疯子。我以为他们现在都死了……",
						"french": "Un fou qui collectait des informations. Je pensais qu'ils étaient tous morts maintenant...",
						"spanish": "Un loco que solía recolectar información. Creía que ya estaban todos muertos...",
						"vietnamese": "Một kẻ điên chuyên thu thập thông tin ngày xưa. Tôi cứ nghĩ chúng đã chết hết rồi chứ...",
						"thai": "คนบ้าที่เคยรวบรวมข้อมูล ฉันคิดว่าพวกเขาตายหมดแล้วเสียอีก...",
						"hindi": "एक पागल जो पहले जानकारी इकट्ठा करता था। मुझे लगा था कि वे सब अब तक मर चुके होंगे..."
					},
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"speaker": "kai",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "그 자식이 모은 게 있다면… 이 근처 어딘가에 있을 거야.",
						"english": "If that bastard collected anything... it'll be somewhere around here.",
						"japanese": "もしあいつが何か集めてたとしたら… この近くのどこかにあるはずだ。",
						"chinese": "如果那个混蛋收集了什么……那一定就在这附近。",
						"french": "Si ce bâtard a collectionné quelque chose... ce sera quelque part par ici.",
						"spanish": "Si ese bastardo coleccionó algo... estará por aquí.",
						"vietnamese": "Nếu tên khốn đó đã thu thập thứ gì... thì nó sẽ ở đâu đó quanh đây.",
						"thai": "ถ้าไอ้บ้านั่นรวบรวมอะไรไว้... มันต้องอยู่แถวนี้แน่ๆ",
						"hindi": "अगर उस कमीने ने कुछ इकट्ठा किया है... तो वह यहीं कहीं आस-पास होगा।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이 낡은 장부인가? 뭔가 그려져 있는데…",
						"english": "This old ledger? Something's drawn on it...",
						"japanese": "この古い帳簿か？何かが描かれているが…",
						"chinese": "这本旧账本吗？上面画了什么……",
						"french": "Ce vieux grand livre ? Il y a quelque chose de dessiné dessus...",
						"spanish": "¿Este viejo libro de contabilidad? Hay algo dibujado...",
						"vietnamese": "Cuốn sổ cũ này à? Có gì đó được vẽ trên đó...",
						"thai": "สมุดบัญชีเก่านี้เหรอ? มีบางอย่างวาดอยู่...",
						"hindi": "यह पुरानी बहीखाता? इस पर कुछ बना हुआ है..."
					}
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "이런! 이 문양… 설마 이걸 찾아낼 줄이야.",
						"english": "Damn! This emblem... I can't believe you found it.",
						"japanese": "くそっ！この紋章…まさかこれを見つけるとは。",
						"chinese": "糟了！这个图案……真没想到你们能找到这个。",
						"french": "Mince ! Cet emblème... Je n'arrive pas à croire que vous l'ayez trouvé.",
						"spanish": "¡Maldita sea! Este emblema... No puedo creer que lo hayas encontrado.",
						"vietnamese": "Chết tiệt! Biểu tượng này... Không thể tin được là cậu tìm thấy nó.",
						"thai": "ให้ตายสิ! ตราสัญลักษณ์นี้... ไม่น่าเชื่อว่าจะหามันเจอ",
						"hindi": "धत्! यह प्रतीक... मुझे विश्वास नहीं हो रहा कि तुम्हें यह मिल गया।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "이게 뭔데?",
						"english": "What is this?",
						"japanese": "これは何だ？",
						"chinese": "这是什么？",
						"french": "C'est quoi ?",
						"spanish": "¿Qué es esto?",
						"vietnamese": "Cái này là gì?",
						"thai": "นี่มันอะไร?",
						"hindi": "यह क्या है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "kai",
					"content": {
						"korean": "우리 조직의 표식이었어. 절대 드러내선 안 되는.",
						"english": "It was our organization's emblem. One that must never be revealed.",
						"japanese": "それは俺たちの組織の表式だった。絶対に表に出してはいけないものだ。",
						"chinese": "这是我们组织的标志。绝不能暴露出来。",
						"french": "C'était l'emblème de notre organisation. Un qu'on ne devait jamais révéler.",
						"spanish": "Era el emblema de nuestra organización. Uno que nunca debía ser revelado.",
						"vietnamese": "Đó là biểu tượng của tổ chức chúng ta. Một thứ tuyệt đối không được tiết lộ.",
						"thai": "มันเป็นสัญลักษณ์ขององค์กรเรา สิ่งที่ห้ามเปิดเผยเด็ดขาด",
						"hindi": "यह हमारे संगठन का प्रतीक था। एक ऐसा जिसे कभी उजागर नहीं किया जाना चाहिए।"
					},
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "kai",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "그 표식은… 도시의 가장 추악한 비밀을 지키는 맹세였어.",
						"english": "That emblem... was a vow to protect the city's ugliest secrets.",
						"japanese": "あの表式は… 都市の最も醜い秘密を守る誓いだった。",
						"chinese": "那个标志……是守护这座城市最丑陋秘密的誓言。",
						"french": "Cet emblème... était un serment pour protéger les secrets les plus sordides de la ville.",
						"spanish": "Ese emblema... era un juramento para proteger los secretos más feos de la ciudad.",
						"vietnamese": "Biểu tượng đó... là một lời thề bảo vệ những bí mật xấu xa nhất của thành phố.",
						"thai": "สัญลักษณ์นั้น... คือคำสาบานที่จะปกป้องความลับที่น่าเกลียดที่สุดของเมือง",
						"hindi": "वह प्रतीक... शहर के सबसे बदसूरत रहस्यों की रक्षा करने की शपथ थी।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "그 비밀이 위스퍼 웹과 관련이 있다는 건가?",
						"english": "Is that secret related to the Whisper Web?",
						"japanese": "その秘密はウィスパーウェブと関係があるのか？",
						"chinese": "那个秘密和低语之网有关吗？",
						"french": "Ce secret est-il lié au Web Chuchotant ?",
						"spanish": "¿Ese secreto está relacionado con la Red del Susurro?",
						"vietnamese": "Bí mật đó có liên quan đến Mạng Lưới Thì Thầm không?",
						"thai": "ความลับนั้นเกี่ยวข้องกับ Whisper Web หรือไม่?",
						"hindi": "क्या वह रहस्य व्हिस्पर वेब से संबंधित है?"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "kai",
					"content": {
						"korean": "젠장… 그 놈들이 이걸 파헤치면 도시 전체가 미쳐버릴 거야.",
						"english": "Damn it... If they dig this up, the whole city will go mad.",
						"japanese": "くそ…奴らがこれを暴けば、街全体が狂っちまう。",
						"chinese": "该死……如果他们挖出这个，整个城市都会发疯。",
						"french": "Bon sang... S'ils déterrent ça, toute la ville va devenir folle.",
						"spanish": "Maldita sea... Si lo desentierran, toda la ciudad se volverá loca.",
						"vietnamese": "Chết tiệt… Nếu chúng đào ra chuyện này, cả thành phố sẽ phát điên mất.",
						"thai": "บ้าจริง... ถ้าพวกมันขุดคุ้ยเรื่องนี้ เมืองทั้งเมืองจะบ้าคลั่งไปเลย",
						"hindi": "धिक्कार है... अगर वे इसे उजागर करते हैं, तो पूरा शहर पागल हो जाएगा।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "무슨 비밀인데?",
						"english": "What secret?",
						"japanese": "何の秘密だ？",
						"chinese": "什么秘密？",
						"french": "Quel secret ?",
						"spanish": "¿Qué secreto?",
						"vietnamese": "Bí mật gì?",
						"thai": "ความลับอะไร?",
						"hindi": "क्या रहस्य?"
					}
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "모든 정보가 조작되고, 진실이 상품이 되는… 도시의 근본적인 타락.",
						"english": "All information manipulated, truth becoming a commodity... The city's fundamental corruption.",
						"japanese": "全ての情報が操作され、真実が商品となる…街の根源的な堕落だ。",
						"chinese": "所有信息都被操纵，真相成为商品……这座城市的根本堕落。",
						"french": "Toutes les informations manipulées, la vérité devenant une marchandise... La corruption fondamentale de la ville.",
						"spanish": "Toda la información manipulada, la verdad convertida en mercancía... La corrupción fundamental de la ciudad.",
						"vietnamese": "Mọi thông tin bị thao túng, sự thật trở thành món hàng… Sự suy đồi căn bản của thành phố.",
						"thai": "ข้อมูลทั้งหมดถูกบิดเบือน ความจริงกลายเป็นสินค้า... การทุจริตขั้นพื้นฐานของเมือง",
						"hindi": "सभी जानकारी में हेरफेर किया गया, सत्य एक वस्तु बन गया... शहर का मौलिक भ्रष्टाचार।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "막아야 해.",
						"english": "We have to stop it.",
						"japanese": "止めなければ。",
						"chinese": "必须阻止。",
						"french": "Il faut l'arrêter.",
						"spanish": "Hay que detenerlo.",
						"vietnamese": "Phải ngăn chặn.",
						"thai": "ต้องหยุดมัน",
						"hindi": "इसे रोकना होगा।"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "압도적인 힘 앞에, 모든 것이 무너졌다.",
						"english": "Before overwhelming power, everything crumbled.",
						"japanese": "圧倒的な力の前に、すべてが崩れ落ちた。",
						"chinese": "在压倒性的力量面前，一切都崩塌了。",
						"french": "Devant une puissance écrasante, tout s'est effondré.",
						"spanish": "Ante un poder abrumador, todo se desmoronó.",
						"vietnamese": "Trước sức mạnh áp đảo, mọi thứ đều sụp đổ.",
						"thai": "ต่อหน้าพลังอันท่วมท้น, ทุกสิ่งพังทลายลง.",
						"hindi": "अदम्य शक्ति के सामने, सब कुछ ढह गया।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자들… 진실은 막을 수 없다. 저항은 무의미하다.",
						"english": "Fools… The truth cannot be stopped. Resistance is futile.",
						"japanese": "愚か者どもめ…真実は止められない。抵抗は無意味だ。",
						"chinese": "愚蠢的人们……真相是无法阻挡的。抵抗毫无意义。",
						"french": "Imbéciles… La vérité ne peut être arrêtée. Toute résistance est futile.",
						"spanish": "Necios… La verdad no puede ser detenida. La resistencia es inútil.",
						"vietnamese": "Lũ ngu ngốc… Sự thật không thể bị ngăn cản. Chống cự là vô nghĩa.",
						"thai": "พวกโง่เง่า… ความจริงไม่อาจหยุดยั้งได้. การต่อต้านไร้ความหมาย.",
						"hindi": "मूर्खों… सच को रोका नहीं जा सकता। प्रतिरोध व्यर्थ है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…아직 끝나지 않았어. 절대로 포기하지 않아.",
						"english": "...It's not over yet. I will never give up.",
						"japanese": "...まだ終わってない。決して諦めない。",
						"chinese": "...还没结束。我绝不放弃。",
						"french": "...Ce n'est pas encore fini. Je n'abandonnerai jamais.",
						"spanish": "...Todavía no ha terminado. Nunca me rendiré.",
						"vietnamese": "...Chưa kết thúc đâu. Tôi sẽ không bao giờ từ bỏ.",
						"thai": "...ยังไม่จบแค่นี้ ฉันจะไม่มีวันยอมแพ้",
						"hindi": "...अभी खत्म नहीं हुआ है। मैं कभी हार नहीं मानूँगा।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "다음에 만날 때는… 더 깊은 절망을 선물해주마.",
						"english": "Next time we meet... I'll bestow upon you deeper despair.",
						"japanese": "次に会う時… より深い絶望をくれてやろう。",
						"chinese": "下次见面时… 我会赐予你更深的绝望。",
						"french": "La prochaine fois que nous nous rencontrerons... je t'offrirai un désespoir plus profond.",
						"spanish": "La próxima vez que nos encontremos... te regalaré una desesperación más profunda.",
						"vietnamese": "Lần tới gặp mặt… ta sẽ ban cho ngươi sự tuyệt vọng sâu sắc hơn.",
						"thai": "ครั้งหน้าที่เราพบกัน... ข้าจะมอบความสิ้นหวังที่ลึกซึ้งยิ่งกว่าให้เจ้า",
						"hindi": "अगली बार जब हम मिलेंगे... मैं तुम्हें और गहरी निराशा का उपहार दूँगा।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "도시의 그림자는 더욱 짙어졌다. 그러나 희미한 빛은 꺼지지 않았다.",
						"english": "The city's shadows deepened. Yet, the faint light did not extinguish.",
						"japanese": "都市の影はさらに濃くなった。しかし、かすかな光は消えなかった。",
						"chinese": "城市的阴影更加深了。然而，微弱的光芒并未熄灭。",
						"french": "L'ombre de la ville s'épaissit. Pourtant, la faible lumière ne s'éteignit pas.",
						"spanish": "Las sombras de la ciudad se hicieron más densas. Pero la tenue luz no se extinguió.",
						"vietnamese": "Bóng tối thành phố càng lúc càng dày đặc. Tuy nhiên, ánh sáng yếu ớt vẫn không tắt.",
						"thai": "เงามืดของเมืองยิ่งทวีความเข้มข้นขึ้น ทว่าแสงริบหรี่นั้นก็ยังไม่ดับมอดลง",
						"hindi": "शहर की परछाइयाँ और गहरी हो गईं। फिर भी, मंद रोशनी बुझी नहीं।"
					}
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "어둠 속에서, 거대한 그림자가 모습을 드러냈다.",
						"english": "In the darkness, a colossal shadow emerged.",
						"japanese": "闇の中、巨大な影が姿を現した。",
						"chinese": "黑暗中，一个巨大的身影显现。",
						"french": "Dans l'obscurité, une ombre colossale a émergé.",
						"spanish": "En la oscuridad, una sombra colosal emergió.",
						"vietnamese": "Trong bóng tối, một bóng hình khổng lồ hiện ra.",
						"thai": "ในความมืดมิด เงาร่างมหึมาปรากฏขึ้น",
						"hindi": "अंधेरे में, एक विशालकाय परछाई उभरी।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "오랜만이다. 과거의 망령이여. 그리고 새로운 방랑자들.",
						"english": "Long time no see. Specter of the past. And new wanderers.",
						"japanese": "久しぶりだな。過去の亡霊よ。そして、新たな放浪者たち。",
						"chinese": "好久不见。过去的幽灵。以及新的流浪者们。",
						"french": "Ça fait longtemps. Spectre du passé. Et nouveaux vagabonds.",
						"spanish": "Mucho tiempo sin vernos. Espectro del pasado. Y nuevos vagabundos.",
						"vietnamese": "Lâu rồi không gặp. Bóng ma của quá khứ. Và những kẻ lang thang mới.",
						"thai": "ไม่ได้เจอกันนานเลยนะ วิญญาณจากอดีต และผู้พเนจรคนใหม่",
						"hindi": "बहुत समय हो गया। अतीत का प्रेत। और नए भटके हुए लोग।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 모든 것을 꾸민 건가?",
						"english": "Did you orchestrate all of this?",
						"japanese": "お前がこの全てを企てたのか？",
						"chinese": "这一切都是你策划的吗？",
						"french": "C'est toi qui as orchestré tout ça ?",
						"spanish": "¿Tú orquestaste todo esto?",
						"vietnamese": "Ngươi đã sắp đặt tất cả chuyện này sao?",
						"thai": "เจ้าเป็นคนบงการทั้งหมดนี้หรือ?",
						"hindi": "क्या तुमने यह सब रचा है?"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "나는 그저 잊혀진 진실을 세상에 드러낼 뿐. 새로운 질서를 위해서.",
						"english": "I merely reveal forgotten truths to the world. For a new order.",
						"japanese": "私はただ、忘れられた真実を世に晒すだけだ。新たな秩序のために。",
						"chinese": "我只是揭露被遗忘的真相。为了新的秩序。",
						"french": "Je ne fais que révéler des vérités oubliées au monde. Pour un nouvel ordre.",
						"spanish": "Simplemente revelo verdades olvidadas al mundo. Por un nuevo orden.",
						"vietnamese": "Ta chỉ đơn thuần là phơi bày những sự thật bị lãng quên ra thế giới. Vì một trật tự mới.",
						"thai": "ข้าเพียงแค่เปิดเผยความจริงที่ถูกลืมเลือนสู่โลกใบนี้ เพื่อระเบียบใหม่",
						"hindi": "मैं केवल भूली हुई सच्चाइयों को दुनिया के सामने उजागर करता हूँ। एक नई व्यवस्था के लिए।"
					},
					"type": "speech"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "헛소리 마! 너 때문에 도시가 혼란에 빠질 거야!",
						"english": "Don't spout nonsense! The city will fall into chaos because of you!",
						"japanese": "馬鹿なことを言うな！お前のせいで街が混乱に陥るぞ！",
						"chinese": "别胡说！因为你，城市会陷入混乱！",
						"french": "Ne dis pas n'importe quoi ! La ville va sombrer dans le chaos à cause de toi !",
						"spanish": "¡No digas tonterías! ¡La ciudad caerá en el caos por tu culpa!",
						"vietnamese": "Đừng nói xằng! Vì ngươi mà thành phố sẽ chìm vào hỗn loạn đấy!",
						"thai": "อย่าพูดไร้สาระ! เมืองจะตกอยู่ในความโกลาหลเพราะแก!",
						"hindi": "बकवास मत करो! तुम्हारी वजह से शहर अराजकता में डूब जाएगा!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "곧 알게 될 거다. 진실이 폭로될 때의 쾌락을.",
						"english": "You'll soon know the pleasure of truth revealed.",
						"japanese": "すぐにわかるだろう。真実が暴かれる快楽を。",
						"chinese": "你很快就会明白，真相被揭露时的快感。",
						"french": "Tu connaîtras bientôt le plaisir de la vérité révélée.",
						"spanish": "Pronto conocerás el placer de la verdad revelada.",
						"vietnamese": "Ngươi sẽ sớm biết được khoái cảm khi sự thật bị phơi bày.",
						"thai": "เจ้าจะได้รู้ในไม่ช้า ความสุขสมเมื่อความจริงถูกเปิดเผย.",
						"hindi": "तुम्हें जल्द ही सच उजागर होने का सुख पता चलेगा।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "닥쳐! 여기서 끝내주겠어!",
						"english": "Shut up! I'll end you here!",
						"japanese": "黙れ！ここで終わりにしてやる！",
						"chinese": "闭嘴！我在这里了结你！",
						"french": "Tais-toi ! Je vais en finir avec toi ici !",
						"spanish": "¡Cállate! ¡Te acabaré aquí mismo!",
						"vietnamese": "Câm mồm! Ta sẽ kết liễu ngươi tại đây!",
						"thai": "หุบปาก! ข้าจะจบเรื่องที่นี่แหละ!",
						"hindi": "चुप रहो! मैं तुम्हें यहीं खत्म कर दूंगा!"
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 서서히 사라졌다.",
						"english": "The colossal shadow slowly faded.",
						"japanese": "巨大な影がゆっくりと消えていった。",
						"chinese": "巨大的阴影渐渐消散。",
						"french": "L'ombre colossale s'est lentement dissipée.",
						"spanish": "La sombra colosal se desvaneció lentamente.",
						"vietnamese": "Bóng tối khổng lồ dần dần biến mất.",
						"thai": "เงาขนาดมหึมาค่อยๆ จางหายไป.",
						"hindi": "विशाल छाया धीरे-धीरे लुप्त हो गई।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…하지만 이건 시작일 뿐. 진실은… 이미 도시 곳곳에 퍼졌다…",
						"english": "…But this is just the beginning. The truth has already spread throughout the city…",
						"japanese": "…だが、これは始まりに過ぎない。真実は…すでに街中に広まっている…。",
						"chinese": "……但这只是开始。真相……早已传遍了城市……",
						"french": "…Mais ce n'est que le début. La vérité… s'est déjà répandue dans toute la ville…",
						"spanish": "…Pero esto es solo el principio. La verdad… ya se ha extendido por toda la ciudad…",
						"vietnamese": "…Nhưng đây chỉ là khởi đầu. Sự thật… đã lan truyền khắp thành phố rồi…",
						"thai": "…แต่นี่เป็นเพียงจุดเริ่มต้น ความจริง…ได้แพร่กระจายไปทั่วเมืองแล้ว…",
						"hindi": "…लेकिन यह तो बस शुरुआत है। सच… पहले ही पूरे शहर में फैल चुका है…"
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 결국 다 막지 못했어.",
						"english": "Damn it… I couldn't stop it all in the end.",
						"japanese": "くそ…結局、すべてを止められなかった。",
						"chinese": "该死……终究还是没能完全阻止。",
						"french": "Bon sang… Je n'ai finalement pas pu tout arrêter.",
						"spanish": "Maldita sea… Al final no pude detenerlo todo.",
						"vietnamese": "Chết tiệt… Cuối cùng vẫn không ngăn cản được tất cả.",
						"thai": "ให้ตายสิ… สุดท้ายก็ห้ามไม่ได้ทั้งหมด.",
						"hindi": "धिक्कार है… आखिरकार मैं सब कुछ रोक नहीं पाया।"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"spot": [
						2,
						2
					],
					"speaker": "kai",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "이게 끝이 아닐 줄 알았다. 저 놈은… 더 큰 그림자의 일부였어.",
						"english": "I knew this wasn't the end. That guy… was part of a larger shadow.",
						"japanese": "これで終わりじゃないとわかっていた。あの男は…もっと大きな影の一部だったんだ。",
						"chinese": "我就知道这不会是结束。那家伙……只是更大阴影的一部分。",
						"french": "Je savais que ce n'était pas la fin. Ce type… faisait partie d'une ombre plus grande.",
						"spanish": "Sabía que no era el final. Ese tipo… era parte de una sombra más grande.",
						"vietnamese": "Ta biết đây chưa phải là kết thúc. Hắn ta… chỉ là một phần của bóng tối lớn hơn.",
						"thai": "ข้ารู้ว่านี่ไม่ใช่จุดจบ. หมอนั่น… เป็นส่วนหนึ่งของเงามืดที่ใหญ่กว่า.",
						"hindi": "मुझे पता था कि यह अंत नहीं है। वह… एक बड़ी छाया का हिस्सा था।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_3",
					"content": {
						"korean": "그림자… 대체 끝이 어딘데?",
						"english": "Shadow… Where does it even end?",
						"japanese": "影…一体どこが終わりなんだ？",
						"chinese": "阴影……到底哪里才是尽头？",
						"french": "Ombre… Où cela s'arrête-t-il donc ?",
						"spanish": "¿Dónde termina esto?",
						"vietnamese": "Bóng tối… Rốt cuộc đâu là điểm cuối?",
						"thai": "เงา… แล้วมันจะไปสิ้นสุดที่ตรงไหนกันแน่?",
						"hindi": "छाया… आखिर इसका अंत कहाँ है?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "진실의 조각들은 여전히 어둠 속에 잠들어 있었다. 더 깊은 곳에서, 도시의 심장이 뛰고 있었다.",
						"english": "Fragments of truth still slumbered in the darkness. Deeper within, the city's heart pulsed.",
						"japanese": "真実の断片は、依然として闇の中に眠っていた。さらに深い場所で、都市の心臓が脈打っていた。",
						"chinese": "真相的碎片依然沉睡在黑暗中。在更深之处，城市的心脏正在跳动。",
						"french": "Des fragments de vérité sommeillaient encore dans les ténèbres. Plus profondément, le cœur de la ville battait.",
						"spanish": "Fragmentos de verdad aún dormían en la oscuridad. En lo más profundo, el corazón de la ciudad latía.",
						"vietnamese": "Những mảnh vỡ của sự thật vẫn còn ngủ vùi trong bóng tối. Sâu thẳm bên trong, trái tim của thành phố đang đập.",
						"thai": "ชิ้นส่วนแห่งความจริงยังคงหลับใหลอยู่ในความมืด. ลึกเข้าไป, หัวใจของเมืองยังคงเต้นรัว.",
						"hindi": "सच के टुकड़े अभी भी अँधेरे में सोए हुए थे। और गहराई में, शहर का दिल धड़क रहा था।"
					},
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"네온 아래, 도시의 숨겨진 과거가 다시 살아난다.",
			"위스퍼 웹은 단순한 소문이 아니었다. 그림자 속에서 모든 것을 파헤치는.",
			"오래된 장부, 잊혀진 조직. 진실은 조각나 흩어져 있다.",
			"이제 그 파편들을 맞춰야 할 시간. 하지만 그림자는 깊다."
		],
		"english": [
			"Beneath the neon, the city's hidden past reawakens.",
			"The Whisper Web wasn't just a rumor. It unearths everything in the shadows.",
			"Old ledgers, forgotten organizations. The truth is fragmented and scattered.",
			"Now it's time to piece together those fragments. But the shadows run deep."
		],
		"japanese": [
			"ネオンの下、都市の隠された過去が再び蘇る。",
			"ウィスパーウェブは単なる噂ではなかった。影の中で全てを暴く。",
			"古びた帳簿、忘れ去られた組織。真実は断片化して散らばっている。",
			"今こそ、その破片を繋ぎ合わせる時。だが、影は深い。"
		],
		"chinese": [
			"霓虹之下，城市隐藏的过去再次苏醒。",
			"低语之网不只是谣言。它在阴影中揭露一切。",
			"旧账本，被遗忘的组织。真相支离破碎，散落各处。",
			"现在是时候拼凑这些碎片了。但阴影很深。"
		],
		"french": [
			"Sous le néon, le passé caché de la ville se réveille.",
			"Le Murmure du Web n'était pas qu'une rumeur. Il déterre tout dans l'ombre.",
			"Vieux registres, organisations oubliées. La vérité est fragmentée et dispersée.",
			"Il est temps de reconstituer ces fragments. Mais les ombres sont profondes."
		],
		"spanish": [
			"Bajo el neón, el pasado oculto de la ciudad resurge.",
			"La Telaraña del Susurro no era solo un rumor. Desentierra todo en las sombras.",
			"Viejos libros, organizaciones olvidadas. La verdad está fragmentada y dispersa.",
			"Ahora es el momento de unir esos fragmentos. Pero las sombras son profundas."
		],
		"vietnamese": [
			"Dưới ánh đèn neon, quá khứ ẩn giấu của thành phố lại sống dậy.",
			"Mạng Lưới Thầm Thì không chỉ là tin đồn. Nó đào bới mọi thứ trong bóng tối.",
			"Sổ sách cũ, tổ chức bị lãng quên. Sự thật bị vỡ vụn và rải rác.",
			"Bây giờ là lúc ghép những mảnh vỡ đó lại. Nhưng bóng tối thì sâu thẳm."
		],
		"thai": [
			"ภายใต้แสงนีออน อดีตที่ซ่อนเร้นของเมืองตื่นขึ้นอีกครั้ง",
			"กระซิบเว็บไม่ใช่แค่ข่าวลือ มันขุดคุ้ยทุกสิ่งในเงามืด",
			"สมุดบัญชีเก่า องค์กรที่ถูกลืม ความจริงแตกเป็นเสี่ยงๆ และกระจัดกระจาย",
			"ถึงเวลาที่จะรวบรวมชิ้นส่วนเหล่านั้นแล้ว แต่เงามืดนั้นลึกมาก"
		],
		"hindi": [
			"नियॉन के नीचे, शहर का छिपा हुआ अतीत फिर से जाग उठता है।",
			"फुसफुसाहट वेब सिर्फ एक अफवाह नहीं थी। यह छाया में सब कुछ उजागर करता है।",
			"पुराने खाते, भूली हुई संस्थाएँ। सच्चाई खंडित और बिखरी हुई है।",
			"अब उन टुकड़ों को जोड़ने का समय है। लेकिन छायाएँ गहरी हैं।"
		]
	}
} as const;
