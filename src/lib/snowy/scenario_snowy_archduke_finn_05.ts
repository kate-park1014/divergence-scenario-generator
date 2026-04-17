export const scenario_snowy_archduke_finn_05 = {
	"scenario_id": "snowy_archduke_finn_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "snowy",
	"actors": {
		"Ice": {
			"id": "actor_09",
			"name": {
				"korean": "얼음",
				"english": "Ice",
				"japanese": "氷",
				"chinese": "冰",
				"french": "Glace",
				"spanish": "Hielo",
				"vietnamese": "Băng",
				"thai": "น้ำแข็ง",
				"hindi": "बर्फ़"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/c9fb8bdd-bb4b-4523-1746-3bb17c64f400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/6ce85e9f-fc14-452c-0806-69e2ba12e600/public"
		}
	},
	"boss": {
		"pool_id": "pool_033"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "설산의 입구. 차가운 바람이 현수막을 흔든다.",
						"english": "Entrance to the snowy mountains. Cold wind sways the banner.",
						"japanese": "雪山の入り口。冷たい風が垂れ幕を揺らす。",
						"chinese": "雪山入口。寒风吹拂着横幅。",
						"french": "Entrée des montagnes enneigées. Le vent froid fait onduler la bannière.",
						"spanish": "Entrada a las montañas nevadas. El viento frío mece la pancarta.",
						"vietnamese": "Lối vào núi tuyết. Gió lạnh lay động biểu ngữ.",
						"thai": "ทางเข้าภูเขาหิมะ ลมหนาวพัดแบนเนอร์ปลิวไสว",
						"hindi": "बर्फीले पहाड़ों का प्रवेश द्वार। ठंडी हवा बैनर को हिलाती है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "여기가 대공의 영역이군.",
						"english": "This must be the Grand Duke's domain.",
						"japanese": "ここが大公の領域か。",
						"chinese": "这里是大公的领地啊。",
						"french": "C'est donc le domaine du Grand Duc.",
						"spanish": "Este debe ser el dominio del Gran Duque.",
						"vietnamese": "Đây hẳn là lãnh địa của Đại Công tước.",
						"thai": "ที่นี่คงเป็นอาณาเขตของแกรนด์ดยุก",
						"hindi": "यह ग्रांड ड्यूक का क्षेत्र होना चाहिए।"
					},
					"emotion": "base"
				},
				{
					"spot": [
						3,
						2
					],
					"speaker": "Ice",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "담요 자국과 핫팩 포장지가 떨어져 있어요.",
						"english": "Blanket marks and hot pack wrappers are scattered.",
						"japanese": "毛布の跡とカイロの包み紙が散らばっている。",
						"chinese": "毯子痕迹和暖宝宝包装散落一地。",
						"french": "Des marques de couverture et des emballages de chauffe-mains sont éparpillés.",
						"spanish": "Hay marcas de manta y envoltorios de compresas calientes.",
						"vietnamese": "Có dấu vết chăn và vỏ gói túi sưởi bị rơi vãi.",
						"thai": "มีรอยผ้าห่มกับซองไคโระตกอยู่",
						"hindi": "कंबल के निशान और हॉट पैक के रैपर गिरे हुए हैं।"
					},
					"speaker": "Ice",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "대공이 여기서 몸을 녹였나?",
						"english": "Did the Grand Duke warm himself here?",
						"japanese": "大公はここで体を温めたのか？",
						"chinese": "大公是在这里取暖的吗？",
						"french": "Le Grand-Duc s'est-il réchauffé ici ?",
						"spanish": "¿Se habrá calentado el Gran Duque aquí?",
						"vietnamese": "Có phải Đại Công tước đã sưởi ấm ở đây không?",
						"thai": "แกรนด์ดยุกมาผิงไฟที่นี่งั้นรึ?",
						"hindi": "क्या ग्रैंड ड्यूक ने यहाँ खुद को गर्म किया था?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"speaker": "Ice",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "복도 구석에서 펭귄 신하 둘이 수군거린다.",
						"english": "Two penguin retainers are whispering in the corner of the hallway.",
						"japanese": "廊下の隅でペンギンの臣下二人がひそひそ話している。",
						"chinese": "走廊角落里，两个企鹅随从在窃窃私语。",
						"french": "Deux serviteurs pingouins chuchotent dans le coin du couloir.",
						"spanish": "Dos pingüinos sirvientes susurran en la esquina del pasillo.",
						"vietnamese": "Hai cận thần chim cánh cụt đang thì thầm ở góc hành lang.",
						"thai": "ข้ารับใช้เพนกวินสองตัวกำลังซุบซิบกันอยู่ตรงมุมโถงทางเดิน",
						"hindi": "गलियारे के कोने में दो पेंग्विन दरबारी फुसफुसा रहे हैं।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무슨 얘기 하는 걸까?",
						"english": "What are they talking about?",
						"japanese": "何を話しているんだろう？",
						"chinese": "他们在说什么呢？",
						"french": "De quoi parlent-ils ?",
						"spanish": "¿De qué estarán hablando?",
						"vietnamese": "Họ đang nói về chuyện gì vậy?",
						"thai": "พวกเขาคุยอะไรกันนะ?",
						"hindi": "वे क्या बात कर रहे हैं?"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "\"보스, 무서운 척 좀 제대로 해보라니까\" 라고 들린 것 같아요.",
						"english": "I think I heard, \"Boss, try to act scary properly.\"",
						"japanese": "「ボス、もっとちゃんと怖いふりしてみろよ」って聞こえた気がする。",
						"chinese": "我好像听到了：“老大，你假装一下吓人的样子吧。”",
						"french": "J'ai cru entendre : \"Patron, essaie de faire semblant d'être effrayant correctement.\"",
						"spanish": "Me pareció oír: \"Jefe, intenta parecer temible de verdad.\"",
						"vietnamese": "Tôi nghe loáng thoáng: \"Sếp, thử giả vờ đáng sợ một cách đàng hoàng đi.\"",
						"thai": "เหมือนได้ยินว่า \"บอสครับ ลองแกล้งทำเป็นน่ากลัวให้มันดีๆ หน่อยสิ\"",
						"hindi": "मुझे लगा मैंने सुना, \"बॉस, ज़रा ठीक से डरावना होने का नाटक करो।\""
					},
					"speaker": "Ice",
					"type": "speech"
				},
				{
					"content": {
						"korean": "응?",
						"english": "Huh?",
						"japanese": "え？",
						"chinese": "嗯？",
						"french": "Hein ?",
						"spanish": "¿Eh?",
						"vietnamese": "Hả?",
						"thai": "หือ?",
						"hindi": "हूँ?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "Ice"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "저 멀리 그림자가 보여.",
						"english": "I see a shadow in the distance.",
						"japanese": "遠くに影が見える。",
						"chinese": "远处有个影子。",
						"french": "Une ombre apparaît au loin.",
						"spanish": "Veo una sombra a lo lejos.",
						"vietnamese": "Tôi thấy một cái bóng ở đằng xa.",
						"thai": "เห็นเงาอยู่ไกลๆ",
						"hindi": "दूर एक परछाई दिख रही है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "대공인가 봐요. 왕관을 쓰고 있네요.",
						"english": "It must be the Grand Duke. He's wearing a crown.",
						"japanese": "大公のようです。王冠をかぶっている。",
						"chinese": "好像是大公。他戴着王冠。",
						"french": "Ce doit être le Grand-Duc. Il porte une couronne.",
						"spanish": "Debe ser el Gran Duque. Lleva una corona.",
						"vietnamese": "Chắc là Đại Công tước. Ngài ấy đang đội vương miện.",
						"thai": "คงจะเป็นแกรนด์ดยุก เขาใส่เครื่องราชอิสริยาภรณ์",
						"hindi": "यह ग्रैंड ड्यूक होना चाहिए। वह एक मुकुट पहने हुए है।"
					},
					"speaker": "Ice",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "근데 왕관이… 자꾸 눈을 가리네.",
						"english": "But the crown... keeps covering his eyes.",
						"japanese": "でも、王冠が…しきりに目を隠している。",
						"chinese": "但是王冠…总遮住眼睛。",
						"french": "Mais la couronne... lui cache constamment les yeux.",
						"spanish": "Pero la corona... no para de taparle los ojos.",
						"vietnamese": "Nhưng vương miện… cứ che mắt ngài ấy.",
						"thai": "แต่ว่ามงกุฎ... กลับมาบังตาเขาอยู่เรื่อยๆ",
						"hindi": "लेकिन मुकुट... बार-बार उसकी आँखों को ढक रहा है।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "휘청이는 모습이….",
						"english": "His staggering figure...",
						"japanese": "ふらつく様子が…。",
						"chinese": "他摇摇晃晃的样子…。",
						"french": "Sa silhouette chancelante...",
						"spanish": "Su figura tambaleante...",
						"vietnamese": "Dáng vẻ loạng choạng của ngài ấy…",
						"thai": "ท่าทางที่โซเซ...",
						"hindi": "उसकी लड़खड़ाती आकृति..."
					},
					"speaker": "Ice",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "Ice",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "대공이 얼어붙은 왕홀을 열심히 날개로 문지르고 있다.",
						"english": "The Grand Duke is diligently rubbing the frozen scepter with his wings.",
						"japanese": "大公が凍った王笏を一生懸命翼で擦っている。",
						"chinese": "大公正用翅膀努力摩擦着冰冻的权杖。",
						"french": "Le Grand-Duc frotte assidûment le sceptre gelé avec ses ailes.",
						"spanish": "El Gran Duque frota diligentemente el cetro congelado con sus alas.",
						"vietnamese": "Đại Công tước đang miệt mài chà xát vương trượng đóng băng bằng đôi cánh của mình.",
						"thai": "แกรนด์ดยุกกำลังถูคทาที่แข็งตัวอย่างขยันขันแข็งด้วยปีกของเขา",
						"hindi": "ग्रैंड ड्यूक अपने पंखों से जमे हुए राजदंड को लगन से रगड़ रहा है।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "뭐 하는 거지?",
						"english": "What's he doing?",
						"japanese": "何してるの？",
						"chinese": "他在干什么？",
						"french": "Qu'est-ce qu'il fait ?",
						"spanish": "¿Qué está haciendo?",
						"vietnamese": "Hắn đang làm gì vậy?",
						"thai": "เขากำลังทำอะไร?",
						"hindi": "वह क्या कर रहा है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "녹이려는 것 같아요. 혹시… 배고픈 걸까요?",
						"english": "Looks like he's trying to melt it. Is he... hungry?",
						"japanese": "溶かそうとしているみたい。もしかして…お腹空いてるのかな？",
						"chinese": "他好像想把它融化。难道是…饿了？",
						"french": "On dirait qu'il essaie de le faire fondre. Serait-il... affamé ?",
						"spanish": "Parece que intenta derretirlo. ¿Tendrá... hambre?",
						"vietnamese": "Có vẻ như hắn đang cố làm tan chảy nó. Hay là… hắn đói bụng?",
						"thai": "ดูเหมือนเขากำลังพยายามละลายมัน หรือว่า...เขาหิว?",
						"hindi": "लगता है वह इसे पिघलाने की कोशिश कर रहा है। कहीं... वह भूखा तो नहीं?"
					},
					"speaker": "Ice",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…왕홀을?",
						"english": "...The scepter?",
						"japanese": "…王笏を？",
						"chinese": "…权杖？",
						"french": "...Le sceptre ?",
						"spanish": "¿...El cetro?",
						"vietnamese": "…Vương trượng ư?",
						"thai": "...คทาเหรอ?",
						"hindi": "...राजदंड को?"
					}
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "드디어 마주한 얼음 옥좌. 대공 핀이 비장하게 서 있다.",
						"english": "Finally, the Ice Throne. Grand Duke Finn stands dramatically.",
						"japanese": "ついに氷の玉座と対峙。大公フィンが勇壮に立っている。",
						"chinese": "终于，冰之宝座就在眼前。大公芬恩悲壮地站立着。",
						"french": "Enfin, le Trône de Glace. Le Grand-Duc Finn se tient là, solennellement.",
						"spanish": "Finalmente, el Trono de Hielo. El Gran Duque Finn se yergue con dramatismo.",
						"vietnamese": "Cuối cùng, Ngai Băng đã ở trước mắt. Đại Công tước Finn đứng đó một cách bi tráng.",
						"thai": "ในที่สุดก็มาถึงบัลลังก์น้ำแข็ง แกรนด์ดยุกฟินน์ยืนอย่างองอาจ",
						"hindi": "अंततः, बर्फीला सिंहासन सामने है। ग्रैंड ड्यूक फिन नाटकीय ढंग से खड़ा है।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "자, 나의 필살기… 이름하여 [슈퍼 울트라 아이스 슬라이딩]이다!",
						"english": "Behold, my ultimate move... named [Super Ultra Ice Sliding]!",
						"japanese": "さあ、我が必殺技…その名も[スーパーウルトラアイススライディング]だ！",
						"chinese": "来吧，我的必杀技…名为【超级无敌冰上滑行】！",
						"french": "Voici, ma technique ultime... nommée [Super Ultra Glissade de Glace] !",
						"spanish": "¡Contemplad, mi movimiento definitivo... llamado [Super Ultra Deslizamiento de Hielo]!",
						"vietnamese": "Đây là chiêu tất sát của ta… tên là [Trượt Băng Siêu Cấp Cực Đại]!",
						"thai": "นี่คือท่าไม้ตายของข้า... ชื่อว่า [ซูเปอร์ อัลตร้า ไอซ์ สไลด์ดิ้ง]!",
						"hindi": "लो, मेरा अंतिम दांव... जिसका नाम है [सुपर अल्ट्रा आइस स्लाइडिंग]!"
					},
					"speaker": "boss",
					"type": "speech"
				},
				{
					"spot": [
						5,
						4
					],
					"speaker": "boss",
					"duration_ms": 500,
					"type": "direction",
					"action": "move"
				},
				{
					"emotion": "base",
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "이 몸의… 화려한 움직임을 봐라!",
						"english": "Behold my... magnificent moves!",
						"japanese": "この身の…華麗な動きを見よ！",
						"chinese": "看好了…我的华丽动作！",
						"french": "Contemplez mes... mouvements grandioses !",
						"spanish": "¡Contemplad mis... movimientos espléndidos!",
						"vietnamese": "Hãy nhìn… những động tác hoa mỹ của ta!",
						"thai": "จงดู...การเคลื่อนไหวอันงดงามของข้า!",
						"hindi": "देखो मेरी... शानदार चालें!"
					}
				},
				{
					"duration_ms": 300,
					"action": "shake",
					"speaker": "boss",
					"type": "direction"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "크… 크아악! (꽈당)",
						"english": "G-Gah! (Thud)",
						"japanese": "く…くあああ！ (ドスン)",
						"chinese": "呃…啊啊啊！ (咚)",
						"french": "A-Aaargh ! (Plaf !)",
						"spanish": "¡A-Aaaagh! (¡Plop!)",
						"vietnamese": "Á-Áááá! (Rầm)",
						"thai": "กรี๊ดดดด! (ตึง!)",
						"hindi": "क-ककक! (धड़ाम)"
					},
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "대공 핀은 자기 발에 걸려 넘어졌고, 배를 깔고 쭉 미끄러져 탐험대 발치까지 왔다.",
						"english": "Grand Duke Finn tripped over his own feet, slid on his belly, and came to a halt at the adventurers' feet.",
						"japanese": "大公フィンは自分の足に躓いて転び、腹ばいになって探検隊の足元まで滑ってきた。",
						"chinese": "大公芬恩被自己的脚绊倒，趴在地上一直滑到了探险队脚边。",
						"french": "Le Grand-Duc Finn trébucha sur ses propres pieds, glissa sur le ventre et atterrit aux pieds de l'équipe d'exploration.",
						"spanish": "El Gran Duque Finn tropezó con sus propios pies, se deslizó de bruces y llegó hasta los pies de la expedición.",
						"vietnamese": "Đại Công tước Finn vấp phải chân mình, trượt dài bằng bụng và dừng lại ngay dưới chân đoàn thám hiểm.",
						"thai": "แกรนด์ดยุกฟินน์สะดุดขาตัวเอง ล้มลงแล้วไถลมาถึงเท้าของทีมสำรวจ",
						"hindi": "ग्रैंड ड्यूक फिन अपने ही पैरों से उलझकर गिर पड़ा, और पेट के बल फिसलकर अन्वेषण दल के पैरों तक आ गया।"
					},
					"emotion": "base"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "…아얏… 너희, 봤지? 나의 이 화려한 바디 체크를…!",
						"english": "...Ouch... You all saw that, right? My magnificent body check...!",
						"japanese": "…いたたた…君たち、見たかい？この華麗なボディチェックを…！",
						"chinese": "…哎哟…你们，都看到了吧？我这华丽的身体检查…！",
						"french": "...Aïe... Vous avez vu, n'est-ce pas ? Ma magnifique charge corporelle... !",
						"spanish": "¡...Ay!... Vosotros lo visteis, ¿verdad? ¡Mi espectacular control corporal...!",
						"vietnamese": "…Ui da… Các ngươi thấy rồi chứ? Pha kiểm tra cơ thể hoa mỹ của ta…!",
						"thai": "...โอ๊ย... พวกนายเห็นใช่ไหม? การเช็คตัวอันงดงามของข้า...!",
						"hindi": "...आह... तुमने देखा ना? मेरा यह शानदार बॉडी चेक...!"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "…사실… 이길 생각은 없었는데….",
						"english": "...Actually... I didn't intend to win...",
						"japanese": "「…実は… 勝つつもりはなかったんだけど…。」",
						"chinese": "“……其实……我没想过要赢……”",
						"french": "...En fait... je n'avais pas l'intention de gagner...",
						"spanish": "...En realidad... no tenía intención de ganar...",
						"vietnamese": "...Thật ra... tôi không có ý định thắng...",
						"thai": "...จริงๆ แล้ว... ฉันไม่ได้ตั้งใจจะชนะ...",
						"hindi": "...सच कहूँ तो... मेरा जीतने का इरादा नहीं था..."
					}
				},
				{
					"content": {
						"korean": "혹시… 남는 전기장판 있니? 착불로 보내줘도 돼…",
						"english": "By any chance... do you have a spare electric blanket? You can send it C.O.D...",
						"japanese": "「もしかして… 余ってる電気毛布ある？ 着払いで送ってくれてもいいんだけど…」",
						"chinese": "“……你有没有多余的电热毯？到付寄给我也可以……”",
						"french": "Par hasard... tu aurais une couverture chauffante en trop ? Tu peux l'envoyer en port dû...",
						"spanish": "¿Por casualidad... tienes una manta eléctrica de sobra? Puedes enviármela contra reembolso...",
						"vietnamese": "Có khi nào... bạn có chăn điện thừa không? Gửi ship COD cho tôi cũng được...",
						"thai": "เผื่อว่า... คุณมีผ้าห่มไฟฟ้าเหลือไหม? ส่งแบบเก็บเงินปลายทางมาก็ได้นะ...",
						"hindi": "क्या तुम्हारे पास... कोई अतिरिक्त इलेक्ट्रिक कंबल है? तुम उसे COD भेज सकते हो..."
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…. हरिद्वार",
						"english": "... Haridwar",
						"japanese": "「…ハリドワール」",
						"chinese": "“……哈里瓦”",
						"french": "... Haridwar",
						"spanish": "... Haridwar",
						"vietnamese": "... Haridwar",
						"thai": "... หาริดวาร์",
						"hindi": "... हरिद्वार"
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "으으… 너무 추워… 담요….",
						"english": "Ugh... So cold... A blanket...",
						"japanese": "「うぅ… 寒すぎる… ブランケット…。」",
						"chinese": "“呃……太冷了……毯子……”",
						"french": "Ugh... Il fait si froid... Une couverture...",
						"spanish": "Ugh... Qué frío... Una manta...",
						"vietnamese": "Ư... Lạnh quá... Chăn...",
						"thai": "อึ๋ย... หนาวมาก... ผ้าห่ม...",
						"hindi": "उफ़... बहुत ठंड है... एक कंबल..."
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "Ice"
				},
				{
					"content": {
						"korean": "대공… 여기요.",
						"english": "Grand Duke... Here.",
						"japanese": "「大公… どうぞ。」",
						"chinese": "“大公……给您。”",
						"french": "Grand-Duc... Tenez.",
						"spanish": "Gran Duque... Aquí tiene.",
						"vietnamese": "Đại công... Đây ạ.",
						"thai": "ท่านดยุก... นี่ครับ/ค่ะ",
						"hindi": "महामहिम... ये लीजिये।"
					},
					"speaker": "Ice",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…대공이… 추워서 왕 노릇을 한 거라고?",
						"english": "...The Grand Duke... ruled as king because he was cold?",
						"japanese": "「…大公が… 寒くて王様になったって言うの？」",
						"chinese": "“……大公……是因为太冷才当上国王的？”",
						"french": "...Le Grand-Duc... aurait régné en roi parce qu'il avait froid ?",
						"spanish": "...¿El Gran Duque... reinó como rey porque tenía frío?",
						"vietnamese": "...Đại công... làm vua vì lạnh sao?",
						"thai": "...ท่านดยุก... เป็นกษัตริย์เพราะว่าหนาวอย่างนั้นหรือ?",
						"hindi": "...महामहिम... ठंड की वजह से राजा बन गए थे क्या?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "설산의 왕은 차가운 얼음 대신 따뜻한 담요를 끌어안았다.",
						"english": "The King of the Snow Mountain embraced a warm blanket instead of cold ice.",
						"japanese": "「雪山の王は、冷たい氷の代わりに温かいブランケットを抱きしめた。」",
						"chinese": "“雪山之王拥抱了温暖的毯子，而非冰冷的寒冰。”",
						"french": "Le Roi de la Montagne Enneigée serra une couverture chaude au lieu de la glace froide.",
						"spanish": "El Rey de la Montaña Nevada abrazó una manta cálida en lugar del frío hielo.",
						"vietnamese": "Vị vua của núi tuyết ôm lấy một chiếc chăn ấm thay vì băng giá lạnh lẽo.",
						"thai": "ราชาแห่งภูเขาหิมะกอดผ้าห่มอุ่นๆ แทนที่จะเป็นน้ำแข็งเย็นยะเยือก",
						"hindi": "बर्फ़ीले पहाड़ के राजा ने ठंडी बर्फ़ के बजाय एक गर्म कंबल को गले लगाया।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "어설픈 그의 왕국은 무너졌다. 하지만 그의 여정은 이제, 따뜻한 곳을 향해 시작되었다.",
						"english": "His clumsy kingdom crumbled. But his journey has now begun, towards a warm place.",
						"japanese": "「彼の未熟な王国は崩壊した。しかし、彼の旅は今、暖かい場所へと始まった。」",
						"chinese": "“他那笨拙的王国崩塌了。然而，他的旅程现在才刚开始，通往一个温暖的地方。”",
						"french": "Son royaume maladroit s'est effondré. Mais son voyage a maintenant commencé, vers un endroit chaud.",
						"spanish": "Su torpe reino se desmoronó. Pero su viaje ha comenzado ahora, hacia un lugar cálido.",
						"vietnamese": "Vương quốc vụng về của anh ta sụp đổ. Nhưng hành trình của anh ta giờ đây đã bắt đầu, hướng về một nơi ấm áp.",
						"thai": "อาณาจักรที่บกพร่องของเขาล่มสลายลง แต่การเดินทางของเขาเพิ่งจะเริ่มต้นขึ้น เพื่อมุ่งหน้าสู่สถานที่ที่อบอุ่น",
						"hindi": "उसका अनाड़ी राज्य ढह गया। लेकिन उसकी यात्रा अब एक गर्म स्थान की ओर शुरू हो गई है।"
					},
					"emotion": "base"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "sad",
					"content": {
						"korean": "끄으으… 난… 따뜻한 곳으로 가야 하는데….",
						"english": "Ugh... I... need to go to a warm place...",
						"japanese": "「くぅぅ… 私は… 暖かい場所へ行かなくちゃいけないのに…。」",
						"chinese": "“呃……我……我得去一个温暖的地方……”",
						"french": "Ugh... Je... dois aller dans un endroit chaud...",
						"spanish": "Ugh... Yo... necesito ir a un lugar cálido...",
						"vietnamese": "Ư ư... Tôi... phải đến một nơi ấm áp...",
						"thai": "อึก... ฉัน... ต้องไปที่ที่อบอุ่นแท้ๆ...",
						"hindi": "उफ़... मुझे... एक गर्म जगह पर जाना है..."
					},
					"speaker": "boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아직 끝나지 않았어!",
						"english": "It's not over yet!",
						"japanese": "「まだ終わってない！」",
						"chinese": "“还没结束！”",
						"french": "Ce n'est pas encore fini !",
						"spanish": "¡Aún no ha terminado!",
						"vietnamese": "Chưa kết thúc đâu!",
						"thai": "ยังไม่จบ!",
						"hindi": "अभी खत्म नहीं हुआ है!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "다음엔… 더 추울 거야….",
						"english": "Next time... it'll be colder...",
						"japanese": "次は… もっと寒くなるぞ…",
						"chinese": "下次… 会更冷…",
						"french": "La prochaine fois… il fera plus froid…",
						"spanish": "La próxima vez… hará más frío…",
						"vietnamese": "Lần tới… sẽ lạnh hơn nữa…",
						"thai": "คราวหน้า… มันจะหนาวกว่านี้…",
						"hindi": "अगली बार… और ठंड होगी…"
					}
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"얼음 왕관은 눈밭에 뒹굴었다. 누구도 찾지 않는 고물처럼.",
			"대공 핀의 필살기는 허무하게 끝났다.",
			"그에게 남은 건 차가운 설산과, 따뜻한 남쪽 나라의 꿈뿐.",
			"이 어설픈 왕이, 언젠가 집으로 돌아가길."
		],
		"english": [
			"The Ice Crown tumbled in the snow. Like forgotten junk, no one sought it.",
			"Grand Duke Finn's finishing move ended in futility.",
			"All that remained for him were cold snowy mountains and dreams of a warm southern land.",
			"May this clumsy king one day return home."
		],
		"japanese": [
			"氷の王冠は雪原に転がっていた。誰も探さないガラクタのように。",
			"大公フィンンの必殺技は虚しく終わった。",
			"彼に残されたのは、冷たい雪山と、暖かい南国の夢だけだった。",
			"この不器用な王が、いつか故郷へ帰れますように。"
		],
		"chinese": [
			"冰之王冠滚落在雪地里。如同无人问津的废品。",
			"大公芬恩的绝杀技徒劳无功地结束了。",
			"他只剩下寒冷的雪山，以及温暖南方之地的梦想。",
			"愿这位笨拙的国王，有朝一日能回家。"
		],
		"french": [
			"La Couronne de Glace roulait dans la neige. Comme un vieil objet oublié, que personne ne cherchait.",
			"Le coup fatal du Grand Duc Finn se termina en vain.",
			"Il ne lui restait que les froides montagnes enneigées et les rêves d'une terre chaude du sud.",
			"Puisse ce roi maladroit un jour retourner chez lui."
		],
		"spanish": [
			"La Corona de Hielo rodó por la nieve. Como un trasto olvidado, que nadie buscaba.",
			"El movimiento final del Gran Duque Finn terminó en vano.",
			"Para él solo quedaron las frías montañas nevadas y los sueños de una tierra cálida del sur.",
			"Que este torpe rey algún día regrese a casa."
		],
		"vietnamese": [
			"Vương miện băng giá lăn lóc trong tuyết. Như một món đồ phế thải không ai tìm.",
			"Chiêu thức tất sát của Đại Công tước Finn kết thúc một cách vô vọng.",
			"Tất cả những gì còn lại cho anh ta là núi tuyết lạnh lẽo và giấc mơ về một vùng đất ấm áp phía nam.",
			"Mong rằng vị vua vụng về này một ngày nào đó sẽ trở về nhà."
		],
		"thai": [
			"มงกุฎน้ำแข็งกลิ้งอยู่ในหิมะ ราวกับของเก่าที่ไม่มีใครสนใจ",
			"ท่าไม้ตายของแกรนด์ดยุกฟินน์จบลงอย่างไร้ประโยชน์",
			"สิ่งที่เหลืออยู่สำหรับเขาคือภูเขาหิมะที่หนาวเหน็บและฝันถึงดินแดนทางใต้ที่อบอุ่น",
			"ขอให้ราชาผู้ซุ่มซ่ามผู้นี้ ได้กลับบ้านสักวัน"
		],
		"hindi": [
			"बर्फ का ताज बर्फ में लुढ़का पड़ा था। जैसे कोई भूली हुई कबाड़, जिसे कोई नहीं खोजता।",
			"ग्रांड ड्यूक फिन का अंतिम प्रहार व्यर्थ ही समाप्त हो गया।",
			"उसके लिए केवल ठंडे बर्फीले पहाड़ और गर्म दक्षिणी भूमि के सपने बचे थे।",
			"काश यह अनाड़ी राजा एक दिन घर लौट आए।"
		]
	},
	"prologue": {
		"korean": [
			"끝없이 눈 내리는 설산, 그 끝에 대공이 있다.",
			"위풍당당한 척, 차가운 척하는 왕의 소문.",
			"그러나 얼음 왕좌가 감춘 건, 허술한 진실이었다.",
			"곧 밝혀질 허탈한 결말이, 이곳에서 기다린다."
		],
		"english": [
			"Endless snowy mountains. At their peak, the Grand Duke resides.",
			"Rumors of a king, feigning grandeur and coldness.",
			"But the Ice Throne concealed a flimsy truth.",
			"A hollow end, soon to be revealed, awaits here."
		],
		"japanese": [
			"果てしなく雪降る雪山、その先に大公がいる。",
			"威厳を装い、冷酷を装う王の噂。",
			"しかし、氷の玉座が隠したのは、お粗末な真実だった。",
			"間もなく明かされる虚しい結末が、ここで待っている。"
		],
		"chinese": [
			"白雪皑皑的山脉尽头，大公在此。",
			"关于国王的传闻，他假装威严，故作冷酷。",
			"然而，冰之王座所隐藏的，不过是草率的真相。",
			"一个即将揭示的虚无结局，正在此处等待。"
		],
		"french": [
			"Des montagnes enneigées sans fin. Au sommet, le Grand Duc demeure.",
			"Des rumeurs d'un roi, feignant la grandeur et la froideur.",
			"Mais le Trône de Glace dissimulait une vérité fragile.",
			"Une fin creuse, bientôt révélée, attend ici."
		],
		"spanish": [
			"Montañas nevadas interminables. Al final, reside el Gran Duque.",
			"Rumores de un rey que finge majestuosidad y frialdad.",
			"Pero el Trono de Hielo ocultaba una verdad endeble.",
			"Un final vacío, pronto a revelarse, aguarda aquí."
		],
		"vietnamese": [
			"Núi tuyết phủ trắng bất tận, Đại Công tước ngự trị ở cuối con đường.",
			"Tin đồn về một vị vua giả vờ uy nghi và lạnh lùng.",
			"Nhưng ngai vàng băng giá đã che giấu một sự thật yếu ớt.",
			"Một kết cục vô nghĩa, sắp được hé lộ, đang chờ đợi ở đây."
		],
		"thai": [
			"ภูเขาหิมะที่ปกคลุมด้วยหิมะไม่รู้จบ ณ ปลายสุดนั้นคือที่ประทับของแกรนด์ดยุก",
			"ข่าวลือเกี่ยวกับกษัตริย์ที่แสร้งทำเป็นยิ่งใหญ่และเย็นชา",
			"แต่บัลลังก์น้ำแข็งกลับซ่อนความจริงอันเปราะบางไว้",
			"จุดจบที่ว่างเปล่ากำลังจะถูกเปิดเผย รออยู่ที่นี่แล้ว"
		],
		"hindi": [
			"बर्फ से ढके अनगिनत पहाड़, और उनके अंत में ग्रांड ड्यूक हैं।",
			"एक राजा की अफवाहें, जो भव्यता और शीतलता का दिखावा करता है।",
			"लेकिन बर्फ के सिंहासन ने एक कमजोर सच्चाई छिपाई थी।",
			"एक खोखला अंत, जल्द ही प्रकट होने वाला, यहाँ प्रतीक्षा कर रहा है।"
		]
	}
} as const;
