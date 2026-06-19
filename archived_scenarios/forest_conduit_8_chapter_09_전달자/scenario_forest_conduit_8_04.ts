export const scenario_forest_conduit_8_04 = {
	"scenario_id": "forest_conduit_8_04",
	"order": 4,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"fern": {
			"id": "mon_279a32a0-8ec1-4b5b-8179-32df46fdc664",
			"name": {
				"korean": "페른",
				"english": "Fern",
				"japanese": "フェルン",
				"chinese": "费恩",
				"french": "Fern",
				"spanish": "Fern",
				"vietnamese": "Fern",
				"thai": "เฟิร์น",
				"hindi": "फर्न"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/19f9763e-413a-485e-787a-9bbfd8208700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/563627d4-0b7c-4865-39d4-1d0a97363c00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"숲의 소식통, 그와 거래한 자들은 귀한 정보를 얻었다.",
			"그러나 댓가는 기억, 혹은 존재 그 자체였다.",
			"페른은 기이한 명단을 발견했다.",
			"그 안에는, 사라진 의뢰인들의 이름이 있었다.",
			"그들은… 데이터가 되어 있었다."
		],
		"english": [
			"The Forest Informant. Those who dealt with him gained valuable information.",
			"But the price was memory, or existence itself.",
			"Fern discovered a strange list.",
			"Within it were the names of missing clients.",
			"They had become... data."
		],
		"japanese": [
			"森の情報屋。彼と取引した者は貴重な情報を得た。",
			"しかし、代償は記憶、あるいは存在そのものだった。",
			"フェルンは奇妙な名簿を発見した。",
			"その中には、失踪した依頼人たちの名前があった。",
			"彼らは…データになっていた。"
		],
		"chinese": [
			"森林情报人。与他交易者获得了珍贵情报。",
			"但代价是记忆，或是存在本身。",
			"费恩发现了一份奇怪的名单。",
			"其中有失踪委托人的名字。",
			"他们…变成了数据。"
		],
		"french": [
			"L'Informateur de la Forêt. Ceux qui ont traité avec lui ont obtenu de précieuses informations.",
			"Mais le prix était la mémoire, ou l'existence même.",
			"Fern découvrit une étrange liste.",
			"Il y avait, à l'intérieur, les noms des clients disparus.",
			"Ils étaient devenus... des données."
		],
		"spanish": [
			"El Informante del Bosque. Quienes trataron con él obtuvieron información valiosa.",
			"Pero el precio era la memoria, o la existencia misma.",
			"Fern descubrió una extraña lista.",
			"Dentro de ella estaban los nombres de clientes desaparecidos.",
			"Ellos se habían convertido... en datos."
		],
		"vietnamese": [
			"Người cung cấp tin rừng. Kẻ giao dịch với hắn có được thông tin quý giá.",
			"Nhưng cái giá phải trả là ký ức, hoặc chính sự tồn tại.",
			"Fern phát hiện một danh sách kỳ lạ.",
			"Bên trong có tên của những khách hàng mất tích.",
			"Họ đã trở thành... dữ liệu."
		],
		"thai": [
			"ผู้บอกข่าวแห่งป่า ผู้ที่ทำการค้ากับเขาได้รับข้อมูลอันมีค่า",
			"แต่สิ่งแลกเปลี่ยนคือความทรงจำ หรือการมีอยู่ของตนเอง",
			"เฟิร์นพบรายชื่อประหลาด",
			"ภายในนั้นมีชื่อของลูกค้าที่หายไป",
			"พวกเขาได้กลายเป็น... ข้อมูลไปแล้ว"
		],
		"hindi": [
			"वन का मुखबिर। जिसने भी उससे सौदा किया, उसे बहुमूल्य जानकारी मिली।",
			"परंतु कीमत याददाश्त, या अस्तित्व ही था।",
			"फर्न को एक अजीब सूची मिली।",
			"उसमें गुमशुदा ग्राहकों के नाम थे।",
			"वे... डेटा बन चुके थे।"
		]
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
						"korean": "어둠 속 낡은 기록실. 눅눅한 종이 냄새가 가득했다.",
						"english": "An old archive in the dark. The damp scent of paper filled the air.",
						"japanese": "暗闇の古い記録室。湿った紙の匂いが充満していた。",
						"chinese": "黑暗中陈旧的档案室。潮湿的纸张气味弥漫着。",
						"french": "Une vieille salle d'archives dans l'obscurité. L'odeur humide du papier emplissait l'air.",
						"spanish": "Un antiguo archivo en la oscuridad. El olor húmedo a papel llenaba el aire.",
						"vietnamese": "Phòng lưu trữ cũ kỹ trong bóng tối. Mùi giấy ẩm mốc tràn ngập.",
						"thai": "ห้องเก็บเอกสารเก่าแก่ในความมืด กลิ่นกระดาษชื้นอบอวลไปทั่ว",
						"hindi": "अंधेरे में एक पुराना रिकॉर्ड रूम। नम कागज की गंध भरी हुई थी।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "페른, 뭔가 찾았어?",
						"english": "Fern, did you find something?",
						"japanese": "フェルン、何か見つけた？",
						"chinese": "费恩，你找到什么了吗？",
						"french": "Fern, tu as trouvé quelque chose ?",
						"spanish": "Fern, ¿encontraste algo?",
						"vietnamese": "Fern, cậu tìm thấy gì à?",
						"thai": "เฟิร์น เธอเจออะไรไหม?",
						"hindi": "फर्न, तुम्हें कुछ मिला?"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "fern",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…응. 이걸 봐.",
						"english": "...Yeah. Look at this.",
						"japanese": "…うん。これを見て。",
						"chinese": "…嗯。看这个。",
						"french": "...Oui. Regarde ça.",
						"spanish": "...Sí. Mira esto.",
						"vietnamese": "...Ừ. Nhìn cái này đi.",
						"thai": "...อื้อ ดูนี่สิ",
						"hindi": "...हाँ। इसे देखो।"
					},
					"speaker": "fern",
					"type": "speech"
				},
				{
					"speaker": "fern",
					"emotion": "base",
					"content": {
						"korean": "내가 추적하던 사라진 의뢰인들 명단이야.",
						"english": "It's the list of missing clients I've been tracking.",
						"japanese": "私が追っていた、失踪した依頼人たちの名簿よ。",
						"chinese": "这是我一直在追踪的失踪委托人名单。",
						"french": "C'est la liste des clients disparus que je traquais.",
						"spanish": "Es la lista de clientes desaparecidos que estaba rastreando.",
						"vietnamese": "Đây là danh sách những khách hàng mất tích mà tôi đang theo dõi.",
						"thai": "นี่คือรายชื่อลูกค้าที่หายไปที่ฉันกำลังติดตามอยู่",
						"hindi": "यह उन लापता ग्राहकों की सूची है जिनकी मैं तलाश कर रहा था।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "근데 왜 그래?",
						"english": "But what's wrong?",
						"japanese": "でも、どうしたの？",
						"chinese": "但你怎么了？",
						"french": "Mais qu'est-ce qui ne va pas ?",
						"spanish": "¿Pero qué pasa?",
						"vietnamese": "Nhưng sao vậy?",
						"thai": "แต่มีอะไรเหรอ?",
						"hindi": "पर क्या हुआ?"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "그들은 '거래 상대'가 아니야.",
						"english": "They aren't 'trade partners'.",
						"japanese": "彼らは「取引相手」ではない。",
						"chinese": "他们不是“交易对象”。",
						"french": "Ce ne sont pas des \"partenaires commerciaux\".",
						"spanish": "No son \"socios comerciales\".",
						"vietnamese": "Họ không phải là 'đối tác giao dịch'.",
						"thai": "พวกเขาไม่ใช่ 'คู่ค้า'",
						"hindi": "वे 'व्यापारिक साझेदार' नहीं हैं।"
					},
					"speaker": "fern",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "fern",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "봐봐. 이 명단 속 이름들이 이상해.",
						"english": "Look. The names on this list are strange.",
						"japanese": "見て。このリストの名前がおかしい。",
						"chinese": "瞧。这份名单上的名字很奇怪。",
						"french": "Regarde. Les noms sur cette liste sont étranges.",
						"spanish": "Mira. Los nombres de esta lista son extraños.",
						"vietnamese": "Nhìn xem. Tên trong danh sách này thật kỳ lạ.",
						"thai": "ดูสิ รายชื่อพวกนี้มันแปลกๆ",
						"hindi": "देखो। इस सूची में नाम अजीब हैं。"
					},
					"speaker": "fern",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "마치… 물품 목록 같아.",
						"english": "It's like... an item list.",
						"japanese": "まるで… 物資リストみたいだ。",
						"chinese": "就像……物品清单。",
						"french": "C'est comme... une liste d'articles.",
						"spanish": "Es como... una lista de artículos.",
						"vietnamese": "Giống như… một danh sách vật phẩm.",
						"thai": "เหมือน... รายการสิ่งของ",
						"hindi": "यह... एक वस्तु सूची की तरह है।"
					},
					"speaker": "fern",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "물품? 사람 이름이?",
						"english": "Items? People's names?",
						"japanese": "物資？人名が？",
						"chinese": "物品？人名？",
						"french": "Des articles ? Des noms de personnes ?",
						"spanish": "¿Artículos? ¿Nombres de personas?",
						"vietnamese": "Vật phẩm? Tên người sao?",
						"thai": "สิ่งของเหรอ? ชื่อคนเนี่ยนะ?",
						"hindi": "वस्तुएँ? लोगों के नाम?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "'의뢰인 A, 정보 획득, 데이터 변환 완료.' 이런 식이야.",
						"english": "It's like, 'Client A, information acquired, data conversion complete.'",
						"japanese": "「依頼人A、情報取得、データ変換完了。」こんな感じだ。",
						"chinese": "就像这样：“委托人A，信息获取，数据转换完成。”",
						"french": "C'est du genre : \"Client A, information acquise, conversion de données terminée.\"",
						"spanish": "Es algo así: \"Cliente A, información adquirida, conversión de datos completada.\"",
						"vietnamese": "Kiểu như: 'Khách hàng A, đã thu thập thông tin, chuyển đổi dữ liệu hoàn tất.'",
						"thai": "มันเหมือนกับ 'ลูกค้า A, ได้รับข้อมูล, แปลงข้อมูลเสร็จสมบูรณ์'",
						"hindi": "यह इस तरह है: 'ग्राहक ए, जानकारी प्राप्त, डेटा रूपांतरण पूर्ण।'"
					},
					"speaker": "fern"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "데이터… 변환?",
						"english": "Data... conversion?",
						"japanese": "データ…変換？",
						"chinese": "数据……转换？",
						"french": "Données... conversion ?",
						"spanish": "¿Datos... conversión?",
						"vietnamese": "Dữ liệu… chuyển đổi?",
						"thai": "ข้อมูล... แปลง?",
						"hindi": "डेटा... रूपांतरण?"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "fern",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "fern",
					"content": {
						"korean": "거래 상대가 아니야. 흡수된 항목이지.",
						"english": "Not trade partners. Absorbed entries.",
						"japanese": "取引相手じゃない。吸収された項目だ。",
						"chinese": "不是交易对象。是被吸收的条目。",
						"french": "Pas des partenaires commerciaux. Des éléments absorbés.",
						"spanish": "No son socios comerciales. Son elementos absorbidos.",
						"vietnamese": "Không phải đối tác giao dịch. Là các mục bị hấp thụ.",
						"thai": "ไม่ใช่คู่ค้า เป็นรายการที่ถูกดูดซับ",
						"hindi": "व्यापारिक साझेदार नहीं। अवशोषित प्रविष्टियाँ।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "fern",
					"content": {
						"korean": "이 명단은 그 소식통이 정보를 '수집'하고 '처리'한 기록이라고.",
						"english": "This list is a record of how that informant 'collected' and 'processed' information.",
						"japanese": "この名簿は、その情報源が情報を「収集」し「処理」した記録なんだ。",
						"chinese": "这份名单是那个消息来源“收集”和“处理”信息的记录。",
						"french": "Cette liste est un registre de la façon dont cette source a \"collecté\" et \"traité\" des informations.",
						"spanish": "Esta lista es un registro de cómo esa fuente \"recopiló\" y \"procesó\" información.",
						"vietnamese": "Danh sách này là ghi chép về cách nguồn tin đó 'thu thập' và 'xử lý' thông tin.",
						"thai": "รายชื่อนี้คือบันทึกว่าแหล่งข่าวได้ 'รวบรวม' และ 'ประมวลผล' ข้อมูลอย่างไร",
						"hindi": "यह सूची उस सूत्र द्वारा जानकारी 'एकत्र' और 'संसाधित' करने का रिकॉर्ड है।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그럼 사라진 사람들은…?",
						"english": "Then the disappeared people...?",
						"japanese": "じゃあ、消えた人たちは…？",
						"chinese": "那消失的人呢……？",
						"french": "Alors les personnes disparues...?",
						"spanish": "¿Entonces las personas desaparecidas...?",
						"vietnamese": "Vậy còn những người biến mất…?",
						"thai": "แล้วคนที่หายไปล่ะ...?",
						"hindi": "तो गायब हुए लोग...?"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그 자체로 정보가 되어 소식통에게 흡수된 거야.",
						"english": "They became information themselves and were absorbed by the informant.",
						"japanese": "彼ら自身が情報となり、情報源に吸収されたんだ。",
						"chinese": "他们本身就变成了信息，被消息来源吸收了。",
						"french": "Ils sont devenus de l'information eux-mêmes et ont été absorbés par la source.",
						"spanish": "Se convirtieron en información y fueron absorbidos por la fuente.",
						"vietnamese": "Họ tự biến thành thông tin và bị nguồn tin hấp thụ.",
						"thai": "พวกเขาได้กลายเป็นข้อมูลและถูกดูดซับโดยแหล่งข่าว",
						"hindi": "वे स्वयं जानकारी बन गए और स्रोत द्वारा अवशोषित हो गए।"
					},
					"speaker": "fern"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "말도 안 돼….",
						"english": "Unbelievable...",
						"japanese": "信じられない…",
						"chinese": "不可能...",
						"french": "Incroyable...",
						"spanish": "No puede ser...",
						"vietnamese": "Không thể tin được...",
						"thai": "ไม่จริงน่า...",
						"hindi": "यह नामुमकिन है..."
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "숲의 깊은 곳, 기괴한 에너지로 가득 찼다.",
						"english": "Deep within the forest, filled with eerie energy.",
						"japanese": "森の奥深く、奇妙なエネルギーに満ちている。",
						"chinese": "森林深处，充满了诡异的能量。",
						"french": "Au plus profond de la forêt, empli d'une énergie étrange.",
						"spanish": "En lo profundo del bosque, lleno de una energía extraña.",
						"vietnamese": "Sâu trong rừng, tràn ngập năng lượng kỳ lạ.",
						"thai": "ลึกเข้าไปในป่า เต็มไปด้วยพลังงานที่น่าขนลุก",
						"hindi": "जंगल की गहराई में, एक अजीब ऊर्जा से भरा हुआ।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "fern",
					"duration_ms": 500
				},
				{
					"speaker": "fern",
					"emotion": "angry",
					"content": {
						"korean": "이제 알겠지? 그는 정보를 파는 게 아니었어.",
						"english": "See? He wasn't selling information.",
						"japanese": "分かったか？彼は情報を売っていたんじゃない。",
						"chinese": "现在明白了吧？他不是在贩卖情报。",
						"french": "Tu vois ? Il ne vendait pas d'informations.",
						"spanish": "¿Lo entiendes ahora? Él no vendía información.",
						"vietnamese": "Bây giờ hiểu rồi chứ? Hắn không hề bán thông tin.",
						"thai": "เข้าใจแล้วใช่ไหม? เขาไม่ได้ขายข้อมูล",
						"hindi": "अब समझे? वह जानकारी नहीं बेच रहा था।"
					},
					"type": "speech"
				},
				{
					"speaker": "fern",
					"emotion": "angry",
					"content": {
						"korean": "전부 흡수하고, 잠식시키는 거야. 숲을… 그리고 존재를.",
						"english": "He's absorbing and devouring everything. The forest... and its very existence.",
						"japanese": "全てを吸収し、侵食しているんだ。森を…そして存在そのものを。",
						"chinese": "他正在吸收并吞噬一切。森林……以及所有的存在。",
						"french": "Il absorbe et dévore tout. La forêt... et son existence même.",
						"spanish": "Lo está absorbiendo y devorando todo. El bosque... y la existencia misma.",
						"vietnamese": "Hắn đang hấp thụ và nuốt chửng mọi thứ. Rừng... và cả sự tồn tại.",
						"thai": "เขากำลังดูดกลืนและกลืนกินทุกสิ่ง ป่า... และการมีอยู่ของมัน",
						"hindi": "वह सब कुछ सोख रहा है और निगल रहा है। जंगल को... और अस्तित्व को।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "멈춰야 해.",
						"english": "We have to stop him.",
						"japanese": "止めなければ。",
						"chinese": "必须阻止他。",
						"french": "Il faut l'arrêter.",
						"spanish": "Debemos detenerlo.",
						"vietnamese": "Phải ngăn hắn lại.",
						"thai": "ต้องหยุดเขา",
						"hindi": "हमें उसे रोकना होगा।"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "fern",
					"content": {
						"korean": "위험해. 그가 원하는 게 뭔지 아직 몰라.",
						"english": "It's dangerous. We don't know what he wants yet.",
						"japanese": "危険だ。彼が何を望んでいるのか、まだ分からない。",
						"chinese": "很危险。我们还不知道他想要什么。",
						"french": "C'est dangereux. Nous ne savons pas encore ce qu'il veut.",
						"spanish": "Es peligroso. Aún no sabemos qué quiere.",
						"vietnamese": "Nguy hiểm lắm. Chúng ta vẫn chưa biết hắn muốn gì.",
						"thai": "อันตราย เขาต้องการอะไร เรายังไม่รู้",
						"hindi": "यह खतरनाक है। हम अभी तक नहीं जानते कि वह क्या चाहता है।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "알게 될 거야. 직접 가서.",
						"english": "We'll find out. By going ourselves.",
						"japanese": "分かるさ。直接行けば。",
						"chinese": "我们会知道的。亲自去一趟就知道了。",
						"french": "On le saura. En y allant nous-mêmes.",
						"spanish": "Lo sabremos. Yendo nosotros mismos.",
						"vietnamese": "Chúng ta sẽ biết thôi. Tự mình đi tới đó.",
						"thai": "จะรู้เอง เมื่อไปถึงที่นั่น",
						"hindi": "हमें पता चल जाएगा। खुद जाकर।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 서서히 흩어졌다.",
						"english": "The massive shadow slowly dissipated.",
						"japanese": "巨大な影が徐々に消え去った。",
						"chinese": "巨大的影子缓缓散去。",
						"french": "L'ombre gigantesque se dissipa lentement.",
						"spanish": "La enorme sombra se disipó lentamente.",
						"vietnamese": "Cái bóng khổng lồ dần tan biến.",
						"thai": "เงาขนาดมหึมาค่อยๆ สลายไป",
						"hindi": "विशाल परछाई धीरे-धीरे बिखर गई।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "…어리석은… 분노.",
						"english": "...Foolish... rage.",
						"japanese": "…愚かな…怒り。",
						"chinese": "…愚蠢的…愤怒。",
						"french": "…Stupide… rage.",
						"spanish": "...Estúpida... ira.",
						"vietnamese": "...Cơn giận... ngu ngốc.",
						"thai": "...ความโกรธ...โง่เขลา.",
						"hindi": "...मूर्खतापूर्ण... क्रोध।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "하지만… 진정한 댓가는… 이제부터야.",
						"english": "But... the true price... begins now.",
						"japanese": "しかし…真の代償は…これからだ。",
						"chinese": "但是…真正的代价…才刚刚开始。",
						"french": "Mais… le vrai prix… c'est maintenant.",
						"spanish": "Pero… el verdadero precio… empieza ahora.",
						"vietnamese": "Nhưng... cái giá thật sự... bây giờ mới bắt đầu.",
						"thai": "แต่... ราคาที่แท้จริง... เพิ่งจะเริ่มต้นขึ้นเดี๋ยวนี้แหละ",
						"hindi": "लेकिन... असली कीमत... अब शुरू होगी।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야?",
						"english": "What do you mean?",
						"japanese": "どういうことだ？",
						"chinese": "你在说什么？",
						"french": "Qu'est-ce que tu racontes ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ý ngươi là gì?",
						"thai": "หมายความว่าอะไร?",
						"hindi": "तुम्हारा क्या मतलब है?"
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "fern",
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "fern",
					"content": {
						"korean": "멈췄어… 하지만 숲은 여전히 침묵해.",
						"english": "It stopped... But the forest remains silent.",
						"japanese": "止まった…しかし森は未だ沈黙している。",
						"chinese": "停下来了…但是森林依然寂静无声。",
						"french": "Ça s'est arrêté… Mais la forêt reste silencieuse.",
						"spanish": "Se detuvo… Pero el bosque sigue en silencio.",
						"vietnamese": "Nó đã dừng lại... Nhưng rừng vẫn im lặng.",
						"thai": "มันหยุดแล้ว... แต่ป่ายังคงเงียบงัน",
						"hindi": "यह रुक गया... लेकिन जंगल अभी भी शांत है।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "숲의 깊은 곳. 또 다른 비밀이 남아있었다.",
						"english": "Deep within the forest. Another secret lingered.",
						"japanese": "森の奥深く。別の秘密が残されていた。",
						"chinese": "森林深处。另一个秘密依然存在。",
						"french": "Au plus profond de la forêt. Un autre secret demeurait.",
						"spanish": "En lo profundo del bosque. Otro secreto permanecía.",
						"vietnamese": "Sâu trong rừng. Một bí mật khác vẫn còn đó.",
						"thai": "ลึกเข้าไปในป่า อีกความลับหนึ่งยังคงอยู่",
						"hindi": "जंगल के गहरे भीतर। एक और रहस्य शेष था।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 앞을 막았다. 소식통의 그림자.",
						"english": "A giant shadow blocked the way. The shadow of the informant.",
						"japanese": "巨大な影が道を阻んだ。情報屋の影が。",
						"chinese": "一个巨大的身影挡住了去路。线人的影子。",
						"french": "Une ombre gigantesque bloqua le chemin. L'ombre de l'informateur.",
						"spanish": "Una sombra gigantesca bloqueó el camino. La sombra del informante.",
						"vietnamese": "Một cái bóng khổng lồ chặn đường. Bóng của kẻ cung cấp tin tức.",
						"thai": "เงาขนาดใหญ่ขวางทาง เงาของผู้ให้ข้อมูล",
						"hindi": "एक विशाल परछाई ने रास्ता रोक दिया। सूचना देने वाले की परछाई।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "…이제 여기까지 온 건가.",
						"english": "...So you've come this far.",
						"japanese": "…ここまで来たか。",
						"chinese": "……你们竟然走到这里了。",
						"french": "...Vous êtes donc arrivés jusqu'ici.",
						"spanish": "...Así que habéis llegado hasta aquí.",
						"vietnamese": "...Vậy là các ngươi đã đến đây.",
						"thai": "…มาถึงที่นี่แล้วสินะ",
						"hindi": "...तो तुम यहाँ तक आ गए।"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "너희도… 나의 정보가 되고 싶어서?",
						"english": "Do you also... wish to become my information?",
						"japanese": "お前たちも…私の情報になりたいのか？",
						"chinese": "你们也……想成为我的情报吗？",
						"french": "Vous aussi... vous voulez devenir ma source d'information ?",
						"spanish": "¿Vosotros también... queréis convertiros en mi información?",
						"vietnamese": "Các ngươi cũng... muốn trở thành thông tin của ta sao?",
						"thai": "พวกเจ้าก็... อยากเป็นข้อมูลของข้าด้วยงั้นหรือ?",
						"hindi": "तुम भी... मेरी जानकारी बनना चाहते हो?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "사라진 사람들을 돌려줘!",
						"english": "Return the lost ones!",
						"japanese": "消えた人々を返せ！",
						"chinese": "把消失的人还回来！",
						"french": "Rendez les disparus !",
						"spanish": "¡Devuelve a los desaparecidos!",
						"vietnamese": "Trả lại những người đã mất!",
						"thai": "คืนคนหายไป!",
						"hindi": "लापता लोगों को वापस लाओ!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "돌려줄 정보는 없어. 그들은 이미 나 그 자체니까.",
						"english": "There's no information to return. They are me now.",
						"japanese": "返す情報などない。彼らは既に私そのものだからだ。",
						"chinese": "没有可归还的信息。他们已经是我的一部分了。",
						"french": "Il n'y a aucune information à rendre. Ils sont déjà moi.",
						"spanish": "No hay información que devolver. Ellos ya son yo.",
						"vietnamese": "Không có thông tin nào để trả lại. Họ đã là chính ta rồi.",
						"thai": "ไม่มีข้อมูลจะคืน พวกเขาคือตัวฉันแล้ว",
						"hindi": "लौटाने के लिए कोई जानकारी नहीं है। वे पहले से ही मैं खुद हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그게 무슨…!",
						"english": "What in...!",
						"japanese": "それは一体…！",
						"chinese": "那是什么…！",
						"french": "Qu'est-ce que… !",
						"spanish": "¡Qué es eso...!",
						"vietnamese": "Cái gì thế...!",
						"thai": "นั่นมันอะไร...!",
						"hindi": "यह क्या...!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자들. 진정한 정보는 이렇게 얻는 거야.",
						"english": "Fools. This is how true information is obtained.",
						"japanese": "愚か者どもめ。真の情報はこうして手に入れるのだ。",
						"chinese": "愚蠢之人。真正的情报是这样获得的。",
						"french": "Imbéciles. C'est ainsi que l'on obtient la vraie information.",
						"spanish": "Estúpidos. Así es como se obtiene la verdadera información.",
						"vietnamese": "Đồ ngốc. Thông tin thật sự được lấy như thế này.",
						"thai": "พวกโง่. ข้อมูลที่แท้จริงได้มาแบบนี้ต่างหาก",
						"hindi": "मूर्ख। सच्ची जानकारी ऐसे हासिल की जाती है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						3
					],
					"speaker": "fern",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그는 숲의 모든 것을 빨아들이고 있어!",
						"english": "He's absorbing everything in the forest!",
						"japanese": "彼は森の全てを吸い込んでいる！",
						"chinese": "他正在吸食森林里的一切！",
						"french": "Il absorbe tout dans la forêt !",
						"spanish": "¡Está absorbiendo todo en el bosque!",
						"vietnamese": "Hắn đang hút cạn mọi thứ trong rừng!",
						"thai": "เขากำลังดูดกลืนทุกสิ่งในป่า!",
						"hindi": "वह जंगल की हर चीज़ सोख रहा है!"
					},
					"emotion": "angry",
					"speaker": "fern"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "압도적인 정보의 흐름이 모든 것을 덮쳤다.",
						"english": "An overwhelming torrent of information engulfed everything.",
						"japanese": "圧倒的な情報の奔流が全てを飲み込んだ。",
						"chinese": "海量信息洪流席卷了一切。",
						"french": "Un flot d'informations écrasant a tout submergé.",
						"spanish": "Un abrumador torrente de información lo cubrió todo.",
						"vietnamese": "Dòng chảy thông tin áp đảo nhấn chìm mọi thứ.",
						"thai": "กระแสข้อมูลท่วมท้นเข้าปกคลุมทุกสิ่ง",
						"hindi": "सूचना का एक प्रचंड प्रवाह सब कुछ ढक गया।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "흐흐… 너희도… 나의 일부가 될 뿐.",
						"english": "Heh heh... you too... will simply become a part of me.",
						"japanese": "フフ…お前たちも…私の…一部となるだけだ。",
						"chinese": "呵呵…你们…也只会成为我的一部分。",
						"french": "Hé hé... vous aussi... ne ferez qu'une partie de moi.",
						"spanish": "Je je... vosotros también... solo seréis parte de mí.",
						"vietnamese": "Hì hì... các ngươi... cũng chỉ là một phần của ta thôi.",
						"thai": "ฮิฮิ…พวกเจ้าเองก็…เป็นแค่ส่วนหนึ่งของข้าเท่านั้น",
						"hindi": "ही ही… तुम भी… बस मेरा हिस्सा बन जाओगे।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아니… 아직 아니야!",
						"english": "No... not yet!",
						"japanese": "いや…まだだ！",
						"chinese": "不…还没到！",
						"french": "Non... pas encore !",
						"spanish": "¡No... todavía no!",
						"vietnamese": "Không... vẫn chưa!",
						"thai": "ไม่…ยังไม่ใช่ตอนนี้!",
						"hindi": "नहीं… अभी नहीं!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		}
	]
} as const;
