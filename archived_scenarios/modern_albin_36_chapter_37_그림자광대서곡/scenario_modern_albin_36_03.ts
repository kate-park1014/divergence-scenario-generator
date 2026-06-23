export const scenario_modern_albin_36_03 = {
	"scenario_id": "modern_albin_36_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"tao": {
			"id": "mon_69a30a3b-a2ed-4cba-843c-564dfc0bf16b",
			"name": {
				"korean": "타오",
				"english": "Tao",
				"japanese": "タオ",
				"chinese": "陶",
				"french": "Tao",
				"spanish": "Tao",
				"vietnamese": "Tao",
				"thai": "เต๋า",
				"hindi": "ताओ"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/c6f08212-b074-44c7-3781-a430044f5600/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/1b449b97-e269-4246-b1f2-8bd0ca473800/public"
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
						"korean": "어둠이 스며든 뒷골목, 낡은 마술 도구 상자가 놓여 있었다.",
						"english": "In a dimly lit alley, an old magic toolkit lay abandoned.",
						"japanese": "闇が染み込んだ裏路地には、古びた魔法道具箱が置かれていた。",
						"chinese": "在黑暗渗透的后巷，一个破旧的魔法工具箱被放置在那里。",
						"french": "Dans une ruelle sombre, une vieille trousse de magie était posée là.",
						"spanish": "En un callejón oscuro, había una vieja caja de herramientas mágicas.",
						"vietnamese": "Trong con hẻm tối tăm, một hộp dụng cụ ma thuật cũ kỹ nằm đó.",
						"thai": "ในตรอกซอกซอยที่มืดมิด มีกล่องเครื่องมือวิเศษเก่าๆ วางอยู่",
						"hindi": "अंधेरे से भरी एक गली में, एक पुरानी जादुई उपकरण पेटी रखी थी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "알빈이 쓰던 거라더니… 낡아빠졌네.",
						"english": "They said Albin used this... It's so worn out.",
						"japanese": "アルビンが使ってたって言うけど… ボロボロじゃないか。",
						"chinese": "说是阿尔宾用过的… 这么旧了。",
						"french": "On disait qu'Albin l'utilisait… C'est tellement usé.",
						"spanish": "Dijeron que Albin lo usaba... Está muy gastado.",
						"vietnamese": "Họ nói Albin từng dùng cái này… Nó cũ nát quá.",
						"thai": "เขาบอกว่าอัลบินเคยใช้... มันเก่ามากเลยนะเนี่ย",
						"hindi": "कहते थे कि एल्बिन इसे इस्तेमाल करता था... यह तो बहुत पुराना हो गया है।"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "잠깐, 여기 이상한 문양이 있어. 금고 암호 같은데?",
						"english": "Wait, there's a strange symbol here. Looks like a safe code?",
						"japanese": "待て、ここに奇妙な模様がある。金庫の暗号みたいだが？",
						"chinese": "等一下，这里有个奇怪的图案。像是保险箱的密码？",
						"french": "Attends, il y a un symbole étrange ici. On dirait un code de coffre-fort ?",
						"spanish": "Espera, hay un patrón extraño aquí. ¿Parece un código de caja fuerte?",
						"vietnamese": "Khoan đã, có một hoa văn lạ ở đây. Trông giống mật mã két sắt?",
						"thai": "เดี๋ยวก่อน มีลวดลายแปลกๆ ตรงนี้ ดูเหมือนรหัสตู้เซฟเลย?",
						"hindi": "रुकिए, यहाँ एक अजीब चिन्ह है। क्या यह तिजोरी का कोड है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_1"
				},
				{
					"speaker": "character_2",
					"emotion": "base",
					"content": {
						"korean": "이런 정보는… 역시 그 녀석한테 물어봐야 하나.",
						"english": "For information like this... I guess I should ask *that guy*.",
						"japanese": "こんな情報は… やはりあいつに聞いてみるべきか。",
						"chinese": "这样的情报… 看来还是得问那家伙。",
						"french": "Pour ce genre d'information… Je devrais peut-être demander à *ce type*.",
						"spanish": "Para este tipo de información... supongo que debería preguntarle a *ese tipo*.",
						"vietnamese": "Thông tin như thế này… Chắc là phải hỏi *thằng đó* thôi.",
						"thai": "ข้อมูลแบบนี้... คงต้องไปถาม *หมอนั่น* สินะ",
						"hindi": "ऐसी जानकारी के लिए... मुझे लगता है कि मुझे *उस व्यक्ति* से पूछना चाहिए।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "tao",
					"action": "enter"
				},
				{
					"speaker": "tao",
					"emotion": "base",
					"content": {
						"korean": "찾아올 줄 알았어. 그 문양, 위험한 거거든.",
						"english": "I knew you'd come. That symbol, it's dangerous.",
						"japanese": "来ると思ってたよ。その模様、危険なものだからね。",
						"chinese": "我就知道你会来。那个图案，很危险的。",
						"french": "Je savais que tu viendrais. Ce symbole, c'est dangereux.",
						"spanish": "Sabía que vendrías. Ese patrón es peligroso.",
						"vietnamese": "Tôi biết bạn sẽ đến. Hoa văn đó, nó nguy hiểm lắm.",
						"thai": "ฉันรู้ว่าคุณจะมา ลวดลายนั่นมันอันตรายนะ",
						"hindi": "मुझे पता था कि तुम आओगे। वह चिन्ह खतरनाक है।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "알빈의 비밀 금고… 비자금. 어디에 숨겨져 있지?",
						"english": "Albin's secret safe... the slush fund. Where is it hidden?",
						"japanese": "アルビンの秘密金庫… 裏金。どこに隠されてる？",
						"chinese": "阿尔宾的秘密保险箱… 秘密资金。藏在哪里？",
						"french": "Le coffre secret d'Albin… les fonds secrets. Où est-il caché ?",
						"spanish": "La caja fuerte secreta de Albin... el fondo ilícito. ¿Dónde está escondido?",
						"vietnamese": "Két sắt bí mật của Albin… quỹ đen. Nó được giấu ở đâu?",
						"thai": "ตู้เซฟลับของอัลบิน... เงินกองทุนลับ มันซ่อนอยู่ที่ไหน?",
						"hindi": "एल्बिन की गुप्त तिजोरी... काला धन। यह कहाँ छिपा है?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "tao",
					"type": "speech",
					"content": {
						"korean": "여기, '빛바랜 영수증'. 여기에 숨겨진 숫자 배열이 단서야.",
						"english": "Here, the 'Faded Receipt'. The hidden number sequence here is the clue.",
						"japanese": "これだ、「色褪せたレシート」。ここに隠された数字の配列が手がかりだ。",
						"chinese": "喏，‘褪色的收据’。里面隐藏的数字序列就是线索。",
						"french": "Tiens, le 'Reçu Fané'. La séquence de chiffres cachée ici est l'indice.",
						"spanish": "Aquí, el 'Recibo Descolorido'. La secuencia de números oculta aquí es la pista.",
						"vietnamese": "Đây, 'Hóa đơn đã phai'. Dãy số ẩn chứa trong đây là manh mối.",
						"thai": "นี่ไง 'ใบเสร็จจาง ๆ' ลำดับตัวเลขที่ซ่อนอยู่ข้างในคือเบาะแส",
						"hindi": "यह लो, 'फीकी रसीद'। इसमें छिपा संख्या अनुक्रम ही सुराग है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "tao",
					"content": {
						"korean": "하지만 조심해. 놈들이 벌써 냄새를 맡은 것 같아.",
						"english": "But be careful. They seem to have caught wind of it already.",
						"japanese": "だが気をつけろ。奴らはもう嗅ぎつけたようだ。",
						"chinese": "但是小心。他们好像已经闻到味了。",
						"french": "Mais sois prudent. Ils semblent avoir déjà flairé l'affaire.",
						"spanish": "Pero ten cuidado. Parece que ya han olido algo.",
						"vietnamese": "Nhưng cẩn thận. Bọn chúng dường như đã đánh hơi thấy rồi.",
						"thai": "แต่ระวังให้ดี พวกมันคงได้กลิ่นแล้วลืมตาดู",
						"hindi": "पर सावधान रहो। लगता है उन्हें पहले ही भनक लग गई है।"
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "tao",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 400
				},
				{
					"speaker": "tao",
					"emotion": "angry",
					"content": {
						"korean": "젠장! 놈들이… 벌써 여기까지!",
						"english": "Damn it! They... already here!",
						"japanese": "くそっ！奴らが…もうここまで！",
						"chinese": "该死！他们……已经到这儿了！",
						"french": "Mince ! Ils... déjà là !",
						"spanish": "¡Maldita sea! ¡Ellos... ya aquí!",
						"vietnamese": "Chết tiệt! Bọn chúng... đã đến đây rồi!",
						"thai": "บ้าจริง! พวกมัน...มาถึงนี่แล้ว!",
						"hindi": "धत्त! वे... पहले ही यहाँ!"
					},
					"type": "speech"
				},
				{
					"action": "shake",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "random_boss"
				},
				{
					"speaker": "tao",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이걸 가져가… 꼭… 그…!",
						"english": "Take this... Please... that...!",
						"japanese": "これを持っていけ…必ず…その…！",
						"chinese": "拿去这个……一定要……那个……！",
						"french": "Prends ça... S'il te plaît... ce...!",
						"spanish": "Toma esto... Por favor... eso...!",
						"vietnamese": "Cầm lấy cái này... Nhất định... cái đó...!",
						"thai": "เอานี่ไป... ต้อง... นั่น...!",
						"hindi": "इसे ले लो... कृपया... वह...!"
					}
				},
				{
					"speaker": "tao",
					"action": "exit",
					"type": "direction",
					"duration_ms": 400,
					"direction": "down"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "타오! 이런…!",
						"english": "Tao! Damn it...!",
						"japanese": "タオ！なんてことだ…！",
						"chinese": "陶！该死……！",
						"french": "Tao ! Non... !",
						"spanish": "¡Tao! ¡Maldición...!",
						"vietnamese": "Tao! Chết tiệt...!",
						"thai": "เถา! ไม่นะ...!",
						"hindi": "ताओ! हे भगवान...!"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어둠 속으로 사라진 타오. 바닥에는 찢겨진 서류 조각이 흩어져 있었다.",
						"english": "Tao vanished into the darkness. Torn document fragments were scattered on the floor.",
						"japanese": "闇の中に消えたタオ。床には引き裂かれた書類の破片が散らばっていた。",
						"chinese": "陶消失在黑暗中。地上散落着撕碎的文件碎片。",
						"french": "Tao disparut dans l'obscurité. Des fragments de documents déchirés étaient éparpillés sur le sol.",
						"spanish": "Tao desapareció en la oscuridad. Fragmentos de documentos rasgados estaban esparcidos por el suelo.",
						"vietnamese": "Tao biến mất vào bóng tối. Những mảnh tài liệu bị xé rách nằm rải rác trên sàn.",
						"thai": "เถาหายไปในความมืด บนพื้นมีเศษเอกสารที่ฉีกขาดกระจัดกระจายอยู่",
						"hindi": "ताओ अँधेरे में गायब हो गया। फर्श पर फटे हुए दस्तावेज़ों के टुकड़े बिखरे पड़े थे।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "찢겨진 장부 조각… 그리고… 낡은 계산기의 일부?",
						"english": "Torn ledger fragments... and... part of an old calculator?",
						"japanese": "引き裂かれた帳簿の切れ端…そして…古い電卓の一部？",
						"chinese": "撕碎的账本碎片……还有……一个旧计算器的一部分？",
						"french": "Des fragments de registre déchirés... et... une partie d'une vieille calculatrice ?",
						"spanish": "Fragmentos de un libro de contabilidad rasgado... ¿y... parte de una calculadora vieja?",
						"vietnamese": "Những mảnh sổ cái bị xé rách... và... một phần của chiếc máy tính cũ?",
						"thai": "เศษสมุดบัญชีที่ฉีกขาด... และ... ชิ้นส่วนของเครื่องคิดเลขเก่า?",
						"hindi": "फटे हुए बहीखाते के टुकड़े... और... एक पुराने कैलकुलेटर का हिस्सा?"
					},
					"type": "speech",
					"speaker": "character_3"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "타오를 노린 거야. 우리가 얻은 정보 때문에.",
						"english": "They were after Tao. Because of the information we obtained.",
						"japanese": "奴らはタオを狙っていたんだ。我々が得た情報のために。",
						"chinese": "他们是冲着陶来的。因为我们获得的信息。",
						"french": "Ils en voulaient à Tao. À cause des informations que nous avons obtenues.",
						"spanish": "Iban tras Tao. Por la información que obtuvimos.",
						"vietnamese": "Bọn chúng nhắm vào Tao. Vì thông tin chúng ta đã có.",
						"thai": "พวกมันจ้องเล่นงานเถา เพราะข้อมูลที่เราได้มา",
						"hindi": "वे ताओ के पीछे पड़े थे। हमारी मिली जानकारी की वजह से।"
					},
					"speaker": "character_1"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "이건 단순한 비자금 문제가 아니야. 훨씬 더 거대한 그림자가 있어.",
						"english": "This isn't just about slush funds. There's a much bigger shadow at play.",
						"japanese": "これは単なる裏金の問題じゃない。もっと巨大な影がある。",
						"chinese": "这不只是简单的黑钱问题。背后有更大的阴影。",
						"french": "Ce n'est pas juste une affaire de fonds secrets. Il y a une ombre bien plus grande.",
						"spanish": "Esto no es solo un asunto de fondos ilícitos. Hay una sombra mucho más grande.",
						"vietnamese": "Đây không chỉ là vấn đề quỹ đen đơn thuần. Có một bóng đen lớn hơn nhiều.",
						"thai": "นี่ไม่ใช่แค่เรื่องเงินใต้โต๊ะ มีเงาที่ใหญ่กว่านั้นมาก",
						"hindi": "यह सिर्फ गुप्त निधि का मामला नहीं है। एक बहुत बड़ी छाया है।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "타오가 떨어뜨린 것 중에… 이 사진이 있었어. 알빈이랑 닮았는데?",
						"english": "Among the things Tao dropped... there was this photo. Looks like Alvin?",
						"japanese": "タオが落としたものの中に…この写真があった。アルビンに似ているけど？",
						"chinese": "陶掉的东西里……有这张照片。和阿尔文很像？",
						"french": "Parmi ce que Tao a laissé tomber... il y avait cette photo. Ça ressemble à Alvin ?",
						"spanish": "Entre lo que Tao dejó caer... estaba esta foto. ¿Se parece a Alvin?",
						"vietnamese": "Trong số những thứ Tao đánh rơi... có bức ảnh này. Giống Alvin nhỉ?",
						"thai": "ท่ามกลางของที่เถาทำตก... มีรูปนี้อยู่ ดูเหมือนอัลวิน?",
						"hindi": "ताओ ने जो चीजें गिराईं उनमें से... यह तस्वीर थी। एल्बिन जैसी दिखती है?"
					},
					"type": "speech",
					"speaker": "character_4"
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "마술 지팡이 대신 만년필을 들고 있네… 무슨 의미지?",
						"english": "Holding a fountain pen instead of a magic wand... What does it mean?",
						"japanese": "魔法の杖の代わりに万年筆を持っている…どういう意味だ？",
						"chinese": "手里拿着钢笔而不是魔杖……这是什么意思？",
						"french": "Il tient un stylo-plume au lieu d'une baguette magique… Qu'est-ce que ça signifie ?",
						"spanish": "Sostiene una pluma estilográfica en lugar de una varita mágica... ¿Qué significa?",
						"vietnamese": "Cầm bút máy thay vì đũa phép… Ý nghĩa là gì?",
						"thai": "ถือปากกาหมึกซึมแทนไม้กายสิทธิ์... หมายความว่าอะไร?",
						"hindi": "जादुई छड़ी की बजाय फाउंटेन पेन पकड़े हुए है... इसका क्या मतलब है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "알빈의 과거 조직 로고와 비슷한 문양이 곳곳에서 발견된다. 그림자는 점점 더 짙어졌다.",
						"english": "Patterns similar to Albin's former organization logo are found everywhere. The shadow deepened.",
						"japanese": "アルビンの旧組織のロゴに似た紋様が随所に見られる。影はますます濃くなった。",
						"chinese": "到处都发现了与阿尔宾过去组织标志相似的图案。阴影越来越深。",
						"french": "Des motifs similaires au logo de l'ancienne organisation d'Albin sont trouvés partout. L'ombre s'épaississait.",
						"spanish": "Se encuentran patrones similares al antiguo logo de la organización de Albin en todas partes. La sombra se hizo más profunda.",
						"vietnamese": "Các hoa văn tương tự logo tổ chức cũ của Albin được tìm thấy khắp nơi. Bóng tối ngày càng dày đặc.",
						"thai": "พบเห็นลวดลายคล้ายโลโก้ขององค์กรเก่าของอัลบินอยู่ทุกหนแห่ง เงาเริ่มมืดมิดลงเรื่อยๆ",
						"hindi": "एल्बिन के पिछले संगठन के लोगो से मिलते-जुलते पैटर्न हर जगह पाए जाते हैं। परछाई और गहरी हो गई।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 꼴 좋다… 하지만 이게 끝이 아니야… 알빈 님은…!",
						"english": "Urgh... Serves you right... But this isn't over... Lord Albin...!",
						"japanese": "ぐっ…いい気味だ…だが、これが終わりじゃない…アルビン様は…！",
						"chinese": "呃……活该……但这还没完……阿尔宾大人……！",
						"french": "Urgh... Bien fait pour toi... Mais ce n'est pas la fin... Seigneur Albin... !",
						"spanish": "Ugh... Te lo mereces... Pero esto no ha terminado... Lord Albin...!",
						"vietnamese": "Khụ… Đáng đời… Nhưng đây chưa phải là kết thúc… Lãnh chúa Albin…!",
						"thai": "อึก... สมน้ำหน้า... แต่นี่ไม่ใช่จุดจบ... ท่านอัลบิน...!",
						"hindi": "उफ़... तुम्हें क्या लगा... लेकिन यह ख़त्म नहीं हुआ है... लॉर्ड एल्बिन...!"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "알빈? 네놈 뒤에 누가 있다는 거냐? 말해!",
						"english": "Albin? Who's behind you? Speak!",
						"japanese": "アルビン？貴様の背後に誰がいる？言え！",
						"chinese": "阿尔宾？你背后是谁？说！",
						"french": "Albin ? Qui est derrière toi ? Parle !",
						"spanish": "¿Albin? ¿Quién está detrás de ti? ¡Habla!",
						"vietnamese": "Albin? Ai đứng sau ngươi? Nói mau!",
						"thai": "อัลบิน? ใครอยู่เบื้องหลังแก? บอกมา!",
						"hindi": "एल्बिन? तुम्हारे पीछे कौन है? बताओ!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "쓰러진 중간보스. 그러나 더 깊은 진실의 그림자가 드리웠다.",
						"english": "The mid-boss fell. But the shadow of a deeper truth loomed.",
						"japanese": "倒れた中ボス。しかし、より深い真実の影が差した。",
						"chinese": "中级首领倒下了。然而，更深层真相的阴影笼罩而来。",
						"french": "Le boss intermédiaire est tombé. Mais l'ombre d'une vérité plus profonde planait.",
						"spanish": "El jefe intermedio cayó. Pero la sombra de una verdad más profunda se cernía.",
						"vietnamese": "Kẻ thủ lĩnh trung gian đã gục ngã. Nhưng bóng tối của một sự thật sâu xa hơn đang bao trùm.",
						"thai": "บอสกลางล้มลง แต่เงาของความจริงที่ลึกซึ้งกว่าก็ปกคลุม",
						"hindi": "मध्य-बॉस गिर गया। लेकिन एक गहरे सत्य की परछाई मंडरा रही थी।"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 퍼즐의 조각이 맞춰지기 시작했다. 다음 단서를 찾아야 한다.",
						"english": "Pieces of a grand puzzle began to fall into place. We must find the next clue.",
						"japanese": "巨大なパズルのピースがはまり始めた。次の手がかりを見つけなければならない。",
						"chinese": "巨大拼图的碎片开始拼合。我们必须找到下一个线索。",
						"french": "Les pièces d'un grand puzzle commençaient à s'assembler. Nous devons trouver le prochain indice.",
						"spanish": "Las piezas de un gran rompecabezas comenzaron a encajar. Debemos encontrar la siguiente pista.",
						"vietnamese": "Các mảnh ghép của một câu đố lớn bắt đầu vào vị trí. Chúng ta phải tìm manh mối tiếp theo.",
						"thai": "ชิ้นส่วนของปริศนาอันยิ่งใหญ่เริ่มเข้าที่ เราต้องหาเบาะแสต่อไป",
						"hindi": "एक बड़ी पहेली के टुकड़े जुड़ने लगे। हमें अगला सुराग ढूंढना होगा।"
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "감히 여기까지 기어들어오다니… 쓸모없는 것들.",
						"english": "How dare you crawl all the way here... Useless scum.",
						"japanese": "よくもここまで這い上がってきたな…役立たずめ。",
						"chinese": "竟敢爬到这里来……没用的东西。",
						"french": "Comment osez-vous vous faufiler jusqu'ici... Bande d'inutiles.",
						"spanish": "Cómo te atreves a arrastrarte hasta aquí... Inútiles.",
						"vietnamese": "Dám bò đến tận đây… Đồ vô dụng.",
						"thai": "แกกล้าดียังไงถึงคลานมาถึงที่นี่... พวกไร้ประโยชน์!",
						"hindi": "तुम्हारी हिम्मत कैसे हुई यहाँ तक रेंगने की... बेकार के कीड़े।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네놈이 타오를 습격했어? 비자금 은닉처가 어디냐!",
						"english": "You attacked Tao? Where's the hidden slush fund?",
						"japanese": "貴様がタオを襲撃したのか？裏金の隠し場所はどこだ！",
						"chinese": "你袭击了陶？秘密资金藏在哪里？",
						"french": "Tu as attaqué Tao ? Où est la planque des fonds secrets ?",
						"spanish": "¿Tú atacaste a Tao? ¿Dónde está el fondo secreto oculto?",
						"vietnamese": "Ngươi đã tấn công Tao à? Chỗ giấu quỹ đen ở đâu!",
						"thai": "แกบุกโจมตีเทาเหรอ? ที่ซ่อนเงินทุนลับอยู่ที่ไหน!",
						"hindi": "तुमने ताओ पर हमला किया? छिपे हुए काले धन का ठिकाना कहाँ है?"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "쓸데없는 짓이다. 알빈 님의 계획은 막을 수 없어.",
						"english": "It's pointless. Lord Albin's plan cannot be stopped.",
						"japanese": "無駄なことだ。アルビン様の計画は止められない。",
						"chinese": "这是徒劳的。阿尔宾大人的计划无法阻止。",
						"french": "C'est inutile. Le plan de Seigneur Albin ne peut pas être arrêté.",
						"spanish": "Es inútil. El plan de Lord Albin no puede ser detenido.",
						"vietnamese": "Vô ích thôi. Kế hoạch của Lãnh chúa Albin không thể bị ngăn cản.",
						"thai": "มันไร้ประโยชน์ แผนของท่านอัลบินไม่มีใครหยุดได้หรอก",
						"hindi": "यह सब बेकार है। लॉर्ड एल्बिन की योजना को रोका नहीं जा सकता।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 것들. 감히 알빈 님을 거스르려 하다니.",
						"english": "Fools. How dare you defy Lord Albin.",
						"japanese": "愚か者ども。よくもアルビン様に逆らおうなどと。",
						"chinese": "愚蠢的东西。竟敢违抗阿尔宾大人。",
						"french": "Imbéciles. Comment osez-vous défier Seigneur Albin.",
						"spanish": "Necios. Cómo os atrevéis a desafiar a Lord Albin.",
						"vietnamese": "Đồ ngu ngốc. Dám cả gan chống lại Lãnh chúa Albin.",
						"thai": "พวกโง่เง่า! กล้าดียังไงมาขัดขืนท่านอัลบิน",
						"hindi": "मूर्खों। तुम्हारी हिम्मत कैसे हुई लॉर्ड एल्bin का विरोध करने की।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "크윽… 아직… 끝나지 않았어!",
						"english": "Ugh... It's not... over yet!",
						"japanese": "くっ… まだ… 終わってない！",
						"chinese": "咳… 还没… 结束！",
						"french": "Urgh... Ce n'est pas... encore fini !",
						"spanish": "¡Ugh... Esto... no ha terminado aún!",
						"vietnamese": "Khụ... Vẫn chưa... kết thúc đâu!",
						"thai": "อึก... ยัง... ไม่จบ!",
						"hindi": "उफ़... यह... अभी ख़त्म नहीं हुआ है!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어둠의 심장부에 갇힌 탐험대. 그러나 희망의 불씨는 꺼지지 않았다.",
						"english": "The expedition team trapped in the heart of darkness. Yet, the spark of hope has not died out.",
						"japanese": "闇の心臓部に囚われた探検隊。しかし、希望の炎は消えていない。",
						"chinese": "被困于黑暗之心深处的探险队。然而，希望的火花并未熄灭。",
						"french": "L'équipe d'expédition est piégée au cœur des ténèbres. Pourtant, l'étincelle d'espoir ne s'est pas éteinte.",
						"spanish": "El equipo de expedición, atrapado en el corazón de la oscuridad. Sin embargo, la chispa de la esperanza no se ha extinguido.",
						"vietnamese": "Đội thám hiểm bị mắc kẹt trong trung tâm bóng tối. Tuy nhiên, đốm lửa hy vọng vẫn chưa tắt.",
						"thai": "ทีมสำรวจติดอยู่ในใจกลางความมืดมิด แต่ประกายแห่งความหวังยังไม่ดับลง",
						"hindi": "अंधेरे के केंद्र में फँसी अभियान टीम। फिर भी, आशा की चिंगारी बुझी नहीं है।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"알빈의 마술 도구 상자. 그 속에 숨겨진 기묘한 문양은 진실의 문을 열 열쇠였다.",
			"위험한 정보상 타오. 그는 조직의 비자금 은닉처에 대한 단서를 쥐고 있었다.",
			"진실에 다가갈수록 드러나는 잔혹한 현실. 도시의 그림자가 점점 더 짙어진다.",
			"이제 누구도 믿을 수 없다. 압박감은 더욱 조여오고, 공포는 심화된다."
		],
		"english": [
			"Albin's magic toolkit. The strange symbol hidden within was the key to unlocking the truth.",
			"Tao, the dangerous informant. He held clues to the organization's secret slush fund.",
			"The cruel reality revealed as you approach the truth. The city's shadows grow ever deeper.",
			"No one can be trusted now. The pressure intensifies, and fear deepens."
		],
		"japanese": [
			"アルビンの魔法道具箱。その中に隠された奇妙な模様は、真実の扉を開く鍵だった。",
			"危険な情報屋タオ。彼は組織の裏金隠し場所の手がかりを握っていた。",
			"真実に近づくほど露わになる残酷な現実。都市の影はますます濃くなる。",
			"もう誰も信じられない。プレッシャーはさらに強まり、恐怖は深まる。"
		],
		"chinese": [
			"阿尔宾的魔法工具箱。其中隐藏的奇异图案是打开真相之门的钥匙。",
			"危险的情报贩子陶。他掌握着组织秘密资金藏匿地的线索。",
			"随着接近真相，残酷的现实逐渐显露。城市的阴影越来越深。",
			"现在谁都不能相信。压力越来越大，恐惧也越来越深。"
		],
		"french": [
			"La trousse de magie d'Albin. L'étrange symbole qui y était caché était la clé pour ouvrir la porte de la vérité.",
			"Tao, l'informateur dangereux. Il détenait des indices sur la planque des fonds secrets de l'organisation.",
			"La cruelle réalité se révèle à mesure que l'on approche de la vérité. L'ombre de la ville s'épaissit de plus en plus.",
			"On ne peut plus faire confiance à personne. La pression s'intensifie, et la peur s'accentue."
		],
		"spanish": [
			"La caja de herramientas mágicas de Albin. El extraño patrón oculto en su interior era la llave para abrir la puerta de la verdad.",
			"Tao, el peligroso informante. Tenía pistas sobre el escondite del fondo ilícito de la organización.",
			"La cruel realidad se revela a medida que te acercas a la verdad. La sombra de la ciudad se vuelve cada vez más densa.",
			"Ahora no se puede confiar en nadie. La presión se intensifica y el miedo se agudiza."
		],
		"vietnamese": [
			"Hộp dụng cụ ma thuật của Albin. Hoa văn kỳ lạ ẩn chứa bên trong là chìa khóa mở cánh cửa sự thật.",
			"Tao, kẻ cung cấp thông tin nguy hiểm. Hắn nắm giữ manh mối về nơi cất giấu quỹ đen của tổ chức.",
			"Thực tế tàn khốc hiện ra khi bạn đến gần sự thật. Bóng đêm thành phố ngày càng sâu thẳm.",
			"Giờ đây không thể tin tưởng ai. Áp lực ngày càng gia tăng, nỗi sợ hãi càng sâu sắc."
		],
		"thai": [
			"กล่องเครื่องมือวิเศษของอัลบิน ลวดลายแปลกประหลาดที่ซ่อนอยู่ภายในเป็นกุญแจไขประตูแห่งความจริง",
			"เถา ผู้แจ้งเบาะแสที่เป็นอันตราย เขากำลังถือเบาะแสเกี่ยวกับแหล่งซ่อนเงินกองทุนลับขององค์กร",
			"ความจริงอันโหดร้ายที่เผยออกมาเมื่อคุณเข้าใกล้ความจริง เงาของเมืองก็ยิ่งทวีความมืดมิด",
			"ตอนนี้ไม่สามารถเชื่อใจใครได้อีกแล้ว แรงกดดันยิ่งเพิ่มขึ้น และความกลัวก็ยิ่งลึกซึ้ง"
		],
		"hindi": [
			"एल्बिन का जादुई उपकरण बॉक्स। उसके अंदर छिपा अजीबोगरीब चिन्ह सत्य का द्वार खोलने की कुंजी था।",
			"ताओ, खतरनाक मुखबिर। उसके पास संगठन के गुप्त काले धन के ठिकाने के सुराग थे।",
			"जैसे-जैसे आप सत्य के करीब आते हैं, क्रूर वास्तविकता सामने आती है। शहर की परछाइयां और गहरी होती जाती हैं।",
			"अब किसी पर भरोसा नहीं किया जा सकता। दबाव बढ़ता जा रहा है, और डर गहरा होता जा रहा है।"
		]
	}
} as const;
