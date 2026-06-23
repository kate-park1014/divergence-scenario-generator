export const scenario_modern_codeczar_22_02 = {
	"scenario_id": "modern_codeczar_22_02",
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
	"prologue": {
		"korean": [
			"네트워크는 죽었다. 살아남은 건, 코드의 잔해뿐.",
			"정보상 카이가 말한 건 단순한 오류가 아니었다.",
			"비틀린 데이터 속에서 누군가의 '의지'가 느껴진다.",
			"이 추격의 끝에, 코드 제왕의 그림자가 기다린다."
		],
		"english": [
			"The network is dead. Only fragments of code remain.",
			"What Informant Kai spoke of wasn't a mere glitch.",
			"Within the distorted data, I sense someone's 'will'.",
			"At the end of this pursuit, the shadow of the Code Emperor awaits."
		],
		"japanese": [
			"ネットワークは死んだ。残されたのは、コードの残骸のみ。",
			"情報屋カイが語ったのは、単なるエラーではなかった。",
			"歪んだデータの中に、誰かの「意思」を感じる。",
			"この追跡の果てに、コード皇帝の影が待つ。"
		],
		"chinese": [
			"网络已死。只剩下代码的残骸。",
			"情报贩子凯说的不只是个简单的错误。",
			"在扭曲的数据中，我感受到了某人的“意志”。",
			"在这场追逐的尽头，代码之王的影子正等待着。"
		],
		"french": [
			"Le réseau est mort. Seuls subsistent les débris de code.",
			"Ce que l'informateur Kai a dit n'était pas une simple erreur.",
			"Au sein des données corrompues, je sens une « volonté ».",
			"Au bout de cette traque, l'ombre de l'Empereur du Code nous attend."
		],
		"spanish": [
			"La red está muerta. Solo quedan los restos del código.",
			"Lo que el informante Kai mencionó no fue un simple error.",
			"Entre los datos distorsionados, siento la \"voluntad\" de alguien.",
			"Al final de esta persecución, la sombra del Emperador del Código aguarda."
		],
		"vietnamese": [
			"Mạng lưới đã chết. Chỉ còn lại tàn dư của mã.",
			"Điều Kai, người cung cấp thông tin, nói không chỉ là một lỗi đơn thuần.",
			"Trong dữ liệu méo mó, tôi cảm nhận được 'ý chí' của ai đó.",
			"Cuối cuộc truy đuổi này, bóng của Hoàng đế Mã hóa đang chờ đợi."
		],
		"thai": [
			"เครือข่ายล่มสลาย เหลือเพียงเศษซากของโค้ด",
			"สิ่งที่ไค ผู้ให้ข้อมูลพูด ไม่ใช่แค่ความผิดพลาดธรรมดา",
			"ท่ามกลางข้อมูลที่บิดเบี้ยว สัมผัสได้ถึง 'เจตจำนง' ของใครบางคน",
			"ณ ปลายทางของการไล่ล่านี้ เงาของราชาโค้ดรออยู่"
		],
		"hindi": [
			"नेटवर्क मर चुका है। केवल कोड के अवशेष बचे हैं।",
			"मुखबिर काई ने जो कहा, वह महज़ एक गलती नहीं थी।",
			"विकृत डेटा के भीतर, किसी की 'इच्छा' महसूस होती है।",
			"इस पीछा के अंत में, कोड सम्राट की परछाई इंतजार कर रही है।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "오염된 도시의 데이터 흐름. 그 틈새를 쫓았다.",
						"english": "The contaminated city's data flow. I chased its crevices.",
						"japanese": "汚染された都市のデータフロー。その隙間を追った。",
						"chinese": "污染城市的数据流。我追逐着其中的缝隙。",
						"french": "Le flux de données de la ville corrompue. J'en ai traqué les failles.",
						"spanish": "El flujo de datos de la ciudad contaminada. Perseguí sus grietas.",
						"vietnamese": "Luồng dữ liệu của thành phố bị ô nhiễm. Tôi đã truy đuổi những kẽ hở đó.",
						"thai": "กระแสข้อมูลของเมืองที่ปนเปื้อน ฉันไล่ตามรอยแตกนั้น",
						"hindi": "दूषित शहर का डेटा प्रवाह। मैंने उसकी दरारों का पीछा किया।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "kai",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "찾았어. 코드 제왕의 첫 흔적.",
						"english": "Found it. The Code Emperor's first trace.",
						"japanese": "見つけた。コード皇帝の最初の痕跡。",
						"chinese": "找到了。代码之王的第一个线索。",
						"french": "Trouvé. La première trace de l'Empereur du Code.",
						"spanish": "Lo encontré. El primer rastro del Emperador del Código.",
						"vietnamese": "Tìm thấy rồi. Dấu vết đầu tiên của Hoàng đế Mã hóa.",
						"thai": "เจอแล้ว ร่องรอยแรกของราชาโค้ด",
						"hindi": "मिल गया। कोड सम्राट का पहला निशान।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "어디야?",
						"english": "Where?",
						"japanese": "どこだ？",
						"chinese": "哪里？",
						"french": "Où ça ?",
						"spanish": "¿Dónde?",
						"vietnamese": "Ở đâu?",
						"thai": "ที่ไหน?",
						"hindi": "कहाँ?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "디지털 범죄자들의 은신처. 근데… 단순한 해킹 패턴이 아니야.",
						"english": "A digital criminals' hideout. But... it's not a simple hacking pattern.",
						"japanese": "デジタル犯罪者たちの隠れ家だ。だが…単なるハッキングパターンじゃない。",
						"chinese": "数字罪犯的藏身之处。但是…这不是简单的黑客模式。",
						"french": "La cachette de criminels numériques. Mais... ce n'est pas un simple schéma de piratage.",
						"spanish": "El escondite de criminales digitales. Pero... no es un patrón de hacking simple.",
						"vietnamese": "Hang ổ của tội phạm mạng. Nhưng... đây không phải là một kiểu tấn công mạng đơn thuần.",
						"thai": "รังลับของอาชญากรดิจิทัล แต่...นี่ไม่ใช่แค่รูปแบบการแฮกธรรมดา",
						"hindi": "डिजिटल अपराधियों का ठिकाना। लेकिन... यह एक साधारण हैकिंग पैटर्न नहीं है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "마치… 데이터가 스스로 살아있는 것 같아.",
						"english": "It's like... the data itself is alive.",
						"japanese": "まるで…データが自ら生きているようだ。",
						"chinese": "好像…数据本身活过来了。",
						"french": "C'est comme si... les données prenaient vie d'elles-mêmes.",
						"spanish": "Es como si... los datos mismos estuvieran vivos.",
						"vietnamese": "Cứ như... dữ liệu tự có sự sống vậy.",
						"thai": "ราวกับว่า...ข้อมูลนั้นมีชีวิตเอง",
						"hindi": "जैसे... डेटा खुद ही जीवित हो।"
					},
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
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "심층 네트워크로 진입했다. 보안은 더욱 삼엄했다.",
						"english": "Entered the deep network. Security was even tighter.",
						"japanese": "深層ネットワークへ侵入した。セキュリティはさらに厳重だった。",
						"chinese": "已经进入了深层网络。安全措施更加森严。",
						"french": "Accès au réseau profond. La sécurité était encore plus stricte.",
						"spanish": "He accedido a la red profunda. La seguridad era aún más estricta.",
						"vietnamese": "Đã xâm nhập vào mạng lưới sâu. An ninh càng thêm chặt chẽ.",
						"thai": "เข้าสู่เครือข่ายลึก ระบบความปลอดภัยยิ่งเข้มงวด",
						"hindi": "गहरे नेटवर्क में प्रवेश किया। सुरक्षा और भी कड़ी थी।"
					}
				},
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "kai"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "여긴 일반적인 해커의 솜씨가 아니야. 뭔가… 더 오래된 방식이 섞여있어.",
						"english": "This isn't typical hacker work. Something... older is mixed in.",
						"japanese": "これは普通のハッカーの仕業じゃない。何か…もっと古いやり方が混じってる。",
						"chinese": "这可不是一般的黑客技术。某种……更古老的方式混杂在其中。",
						"french": "Ce n'est pas l'œuvre d'un hacker typique. Quelque chose... de plus ancien est mêlé à ça.",
						"spanish": "Esto no es obra de un hacker común. Algo... más antiguo está mezclado aquí.",
						"vietnamese": "Đây không phải là kỹ năng của một hacker thông thường. Có cái gì đó... cổ xưa hơn xen lẫn vào.",
						"thai": "นี่ไม่ใช่งานของแฮกเกอร์ทั่วไป มีบางอย่าง... ที่เก่าแก่กว่าปะปนอยู่",
						"hindi": "यह किसी आम हैकर का काम नहीं है। कुछ... पुराना तरीका इसमें मिला हुआ है।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "오래된 방식?",
						"english": "Older methods?",
						"japanese": "古いやり方？",
						"chinese": "更古老的方式？",
						"french": "Des méthodes plus anciennes ?",
						"spanish": "¿Métodos antiguos?",
						"vietnamese": "Cách thức cổ xưa?",
						"thai": "วิธีที่เก่ากว่า?",
						"hindi": "पुराने तरीके?"
					}
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "그래. 가끔 들리는 노이즈 속에서… 옛날 갱스터 은어가 들려.",
						"english": "Yeah. In the occasional noise... I hear old gangster slang.",
						"japanese": "ああ。たまに聞こえるノイズの中に…昔のギャングの隠語が混じってる。",
						"chinese": "没错。在偶尔的噪音中……我听到了老式帮派的俚语。",
						"french": "Oui. Dans le bruit occasionnel... j'entends de l'argot de gangster à l'ancienne.",
						"spanish": "Sí. En el ruido ocasional... escucho jerga de gánster antigua.",
						"vietnamese": "Đúng vậy. Trong tiếng nhiễu thỉnh thoảng nghe được... có tiếng lóng của xã hội đen ngày xưa.",
						"thai": "ใช่ ในเสียงรบกวนบางครั้ง...ฉันได้ยินคำแสลงของนักเลงเก่า",
						"hindi": "हाँ। कभी-कभी आने वाली आवाज़ में... मुझे पुरानी गैंगस्टर की गालियां सुनाई देती हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "코드 제왕… 대체 누구지.",
						"english": "Code King... Who exactly is that?",
						"japanese": "コードの帝王…一体誰なんだ。",
						"chinese": "代码之王……到底是谁？",
						"french": "Le Roi du Code... Qui est-ce exactement ?",
						"spanish": "Rey del Código... ¿Quién es exactamente?",
						"vietnamese": "Vua Mã Hoá... Rốt cuộc là ai?",
						"thai": "ราชาแห่งโค้ด...เขาคือใครกันแน่?",
						"hindi": "कोड किंग... आखिर वह कौन है।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "은신처의 심부. 데이터의 왜곡이 극에 달했다.",
						"english": "The heart of the hideout. Data distortion has reached its peak.",
						"japanese": "隠れ家の奥深く。データの歪みが極限に達した。",
						"chinese": "藏身之处的深处。数据扭曲已达到极致。",
						"french": "Au cœur de la cachette. La distorsion des données a atteint son paroxysme.",
						"spanish": "El corazón del escondite. La distorsión de datos ha alcanzado su punto máximo.",
						"vietnamese": "Sâu thẳm trong hang ổ. Sự méo mó dữ liệu đã đạt đến đỉnh điểm.",
						"thai": "ใจกลางของที่ซ่อน ความผิดเพี้ยนของข้อมูลถึงขีดสุดแล้ว",
						"hindi": "छिपाने की जगह का केंद्र। डेटा का विकृति चरम पर पहुँच गया है।"
					}
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "kai",
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "이봐, 조심해! 특정 구역에서 강한 반응이 와.",
						"english": "Hey, watch out! There's a strong reaction from a specific area.",
						"japanese": "おい、気をつけろ！特定の区域から強い反応がある。",
						"chinese": "嘿，小心！特定区域有强烈反应。",
						"french": "Hé, fais attention ! Il y a une forte réaction dans une zone spécifique.",
						"spanish": "¡Oye, ten cuidado! Hay una fuerte reacción en una zona específica.",
						"vietnamese": "Này, cẩn thận! Có phản ứng mạnh từ một khu vực cụ thể.",
						"thai": "เฮ้ ระวัง! มีปฏิกิริยาที่รุนแรงจากพื้นที่เฉพาะ",
						"hindi": "अरे, सावधान रहो! एक खास क्षेत्र से तेज़ प्रतिक्रिया आ रही है।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "'내 영역 침범'이라는 경고가 계속 깜빡여!",
						"english": "The warning 'Territory Intrusion' keeps flashing!",
						"japanese": "「縄張り侵入」という警告が点滅し続けてる！",
						"chinese": "'入侵我的领地'的警告一直在闪烁！",
						"french": "L'avertissement 'Intrusion dans mon territoire' ne cesse de clignoter !",
						"spanish": "¡La advertencia 'Intrusión en mi territorio' sigue parpadeando!",
						"vietnamese": "Cảnh báo 'Xâm phạm lãnh thổ của tôi' cứ nhấp nháy liên tục!",
						"thai": "คำเตือน 'การบุกรุกอาณาเขตของฉัน' ยังคงกะพริบอยู่!",
						"hindi": "'मेरे क्षेत्र में घुसपैठ' की चेतावनी लगातार चमक रही है!"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "영역 침범? 누가 자기 영역이라고 주장하는 거야?",
						"english": "Territory intrusion? Who's claiming this as their territory?",
						"japanese": "縄張り侵入？誰が自分の縄張りだと主張してるんだ？",
						"chinese": "领地入侵？谁在声称这是他们的领地？",
						"french": "Intrusion territoriale ? Qui prétend que c'est son territoire ?",
						"spanish": "¿Intrusión en el territorio? ¿Quién está reclamando esto como suyo?",
						"vietnamese": "Xâm phạm lãnh thổ? Ai đang tự xưng đây là lãnh thổ của mình vậy?",
						"thai": "การบุกรุกอาณาเขต? ใครกำลังอ้างว่านี่คืออาณาเขตของพวกเขา?",
						"hindi": "क्षेत्र में घुसपैठ? कौन इसे अपना क्षेत्र बता रहा है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "그 순간, 해킹된 전광판에 낡은 기사 하나가 섬광처럼 스쳐 지나갔다. '도시를 공포에 떨게 했던 악명 높은 카르텔의 왕, 실종!'",
						"english": "At that moment, an old article flashed across the hacked billboard: 'Infamous Cartel King Who Terrorized the City, Missing!'",
						"japanese": "その瞬間、ハッキングされた電光掲示板に、古い記事が閃光のように駆け抜けた。「街を恐怖に陥れた悪名高きカルテルの王、失踪！」",
						"chinese": "那一刻，一块被黑客入侵的电子广告牌上闪过一篇旧新闻：'曾让城市陷入恐惧的臭名昭著的卡特尔之王，失踪！'",
						"french": "À cet instant, un vieil article a traversé l'écran publicitaire piraté comme un éclair : 'Le roi de cartel tristement célèbre qui a terrorisé la ville, porté disparu !'",
						"spanish": "En ese momento, un viejo artículo apareció como un destello en la valla publicitaria hackeada: '¡El infame Rey del Cártel que aterrorizó la ciudad, desaparecido!'",
						"vietnamese": "Khoảnh khắc đó, một bài báo cũ vụt qua như tia chớp trên bảng điện tử bị hack: 'Vua trùm cartel khét tiếng từng gieo rắc kinh hoàng cho thành phố, mất tích!'",
						"thai": "ในขณะนั้น บทความเก่าๆ ชิ้นหนึ่งปรากฏขึ้นบนป้ายโฆษณาที่ถูกแฮกอย่างรวดเร็วราวกับแสงวาบ: 'ราชามาเฟียผู้เลื่องชื่อที่สร้างความหวาดกลัวให้กับเมือง, หายตัวไป!'",
						"hindi": "उसी पल, हैक किए गए बिलबोर्ड पर एक पुरानी खबर बिजली की तरह कौंधी: 'शहर को आतंकित करने वाला कुख्यात कार्टेल किंग, लापता!'"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "카르텔의 왕…? 코드 제왕과 무슨 관계지?",
						"english": "Cartel King...? What's the connection with the Code King?",
						"japanese": "カルテルの王…？コードの帝王と何の関係があるんだ？",
						"chinese": "卡特尔之王……？和代码之王有什么关系？",
						"french": "Le Roi du Cartel...? Quel est le lien avec le Roi du Code ?",
						"spanish": "¿Rey del Cártel...? ¿Qué relación tiene con el Rey del Código?",
						"vietnamese": "Vua trùm cartel...? Có liên hệ gì với Vua Mã Hoá?",
						"thai": "ราชามาเฟีย...? เกี่ยวอะไรกับราชาแห่งโค้ด?",
						"hindi": "कार्टेल किंग...? कोड किंग से इसका क्या संबंध है?"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "더 깊이 파고들었다. 돌아갈 수 없는 길이었다.",
						"english": "Delved deeper. No turning back now.",
						"japanese": "さらに深く潜った。もう引き返せない道だ。",
						"chinese": "深入了。这是一条无法回头的路。",
						"french": "Nous avons plongé plus profondément. Un chemin sans retour.",
						"spanish": "Nos adentramos más. Un camino sin retorno.",
						"vietnamese": "Lặn sâu hơn. Không còn đường quay lại.",
						"thai": "ดำดิ่งลงไปลึกกว่าเดิม เส้นทางที่ไม่อาจย้อนกลับ",
						"hindi": "और गहरा गोता लगाया। अब लौटने का कोई रास्ता नहीं था।"
					}
				},
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "kai"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "여기서부터는 진짜 위험해. 데이터 자체가 너희를 막으려고 해.",
						"english": "From here, it's truly dangerous. The data itself is trying to stop you.",
						"japanese": "ここからは本当に危険だ。データそのものがお前たちを阻もうとしている。",
						"chinese": "从这里开始，真的危险了。数据本身就在试图阻止你们。",
						"french": "À partir d'ici, c'est vraiment dangereux. Les données elles-mêmes essaient de vous arrêter.",
						"spanish": "De aquí en adelante, es realmente peligroso. Los propios datos intentarán deteneros.",
						"vietnamese": "Từ đây trở đi, thật sự nguy hiểm. Dữ liệu đang cố gắng ngăn c các ngươi lại.",
						"thai": "จากตรงนี้ไป อันตรายจริง ๆ ข้อมูลกำลังพยายามหยุดพวกเจ้า",
						"hindi": "यहाँ से, यह वास्तव में खतरनाक है। डेटा खुद तुम्हें रोकने की कोशिश कर रहा है।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "막을 수 없어.",
						"english": "Cannot be stopped.",
						"japanese": "止められない。",
						"chinese": "无法阻止。",
						"french": "Inarrêtable.",
						"spanish": "Imparable.",
						"vietnamese": "Không thể ngăn cản.",
						"thai": "หยุดไม่ได้",
						"hindi": "रोका नहीं जा सकता।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "kai",
					"content": {
						"korean": "이건 단순한 방어가 아니야. 엄청난… 집착이야.",
						"english": "This isn't just a defense. It's a tremendous... obsession.",
						"japanese": "これは単なる防御じゃない。途方もない…執着だ。",
						"chinese": "这不只是简单的防御。这是一种巨大的……执着。",
						"french": "Ce n'est pas une simple défense. C'est une immense... obsession.",
						"spanish": "Esto no es solo una defensa. Es una tremenda... obsesión.",
						"vietnamese": "Đây không chỉ là phòng thủ. Đây là một sự... ám ảnh khổng lồ.",
						"thai": "นี่ไม่ใช่แค่การป้องกัน แต่มันคือ…ความหมกมุ่นอันยิ่งใหญ่",
						"hindi": "यह सिर्फ एक बचाव नहीं है। यह एक जबरदस्त... जुनून है।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "코드 제왕의 의지가 느껴지는군.",
						"english": "I can feel the Code Sovereign's will.",
						"japanese": "コードの支配者の意思が感じられる。",
						"chinese": "我能感觉到代码霸主的意志。",
						"french": "Je ressens la volonté du Souverain du Code.",
						"spanish": "Siento la voluntad del Soberano del Código.",
						"vietnamese": "Ta cảm nhận được ý chí của Mã Hoàng.",
						"thai": "ข้ารู้สึกถึงเจตจำนงของ Code Sovereign",
						"hindi": "मुझे कोड सम्राट की इच्छा महसूस हो रही है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 400,
					"speaker": "kai",
					"type": "direction",
					"action": "exit"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "난 더 깊이 들어가 볼게. 너희는 저 너머로 가. 조심해.",
						"english": "I'll go deeper. You all go beyond. Be careful.",
						"japanese": "私はもっと深く潜ってみる。君たちはあの先へ行け。気をつけろ。",
						"chinese": "我会更深入。你们去那边。小心。",
						"french": "Je vais aller plus profond. Vous, allez au-delà. Soyez prudents.",
						"spanish": "Yo iré más profundo. Vosotros id más allá. Tened cuidado.",
						"vietnamese": "Ta sẽ đi sâu hơn. Các ngươi đi qua bên kia. Cẩn thận đấy.",
						"thai": "ข้าจะลงไปลึกกว่านี้ พวกเจ้าไปต่อ ระวังตัวด้วย",
						"hindi": "मैं और गहरा जाऊंगा। तुम सब उस पार जाओ। सावधान रहना।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 것들! 이 영역은 영원히 내 것이다!",
						"english": "Pathetic fools! This realm is mine forever!",
						"japanese": "取るに足らない奴らめ！この領域は永遠に俺のものだ！",
						"chinese": "卑微的家伙们！这个领域永远属于我！",
						"french": "Misérables ! Ce domaine est le mien pour toujours !",
						"spanish": "¡Insignificantes! ¡Este dominio es mío para siempre!",
						"vietnamese": "Những kẻ hèn mọn! Lãnh địa này mãi mãi là của ta!",
						"thai": "พวกไร้ค่า! ดินแดนนี้เป็นของข้าตลอดไป!",
						"hindi": "तुच्छ प्राणियों! यह क्षेत्र हमेशा मेरा रहेगा!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 아직은 아니야.",
						"english": "Damn it... Not yet.",
						"japanese": "くそ…まだだ。",
						"chinese": "该死…还没到时候。",
						"french": "Merde... Pas encore.",
						"spanish": "Maldita sea... Todavía no.",
						"vietnamese": "Chết tiệt... Vẫn chưa được.",
						"thai": "ให้ตายสิ... ยังไม่ถึงเวลา",
						"hindi": "लानत है… अभी नहीं।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "비틀린 데이터의 파도가 탐험대를 집어삼켰다.",
						"english": "A wave of corrupted data engulfed the expedition team.",
						"japanese": "歪んだデータの波が探検隊を飲み込んだ。",
						"chinese": "扭曲的数据洪流吞噬了探险队。",
						"french": "Une vague de données corrompues a englouti l'équipe d'expédition.",
						"spanish": "Una ola de datos corruptos engulló al equipo de expedición.",
						"vietnamese": "Một làn sóng dữ liệu méo mó đã nuốt chửng đội thám hiểm.",
						"thai": "คลื่นข้อมูลที่บิดเบี้ยวกลืนกินทีมสำรวจ",
						"hindi": "विकृत डेटा की एक लहर ने अभियान दल को निगल लिया।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크크… 겨우 이 정도라니. 진짜는… 아직 시작도 안 했어. {random_boss}의 주인이 곧 찾아올 거다…",
						"english": "Heh heh... Is that all you've got? The real fight hasn't even begun. The master of {random_boss} will come soon...",
						"japanese": "クク…これっぽっちか。本当の戦いは…まだ始まってもいない。{random_boss}の主がすぐそこまで来ている…",
						"chinese": "呵呵…就这点本事吗？真正的较量…还没开始呢。{random_boss}的主人很快就会来了…",
						"french": "Hé hé... Ce n'est que ça ? Le vrai combat... n'a même pas commencé. Le maître de {random_boss} arrivera bientôt...",
						"spanish": "Je je... ¿Eso es todo? La verdadera batalla... ni siquiera ha comenzado. El amo de {random_boss} vendrá pronto...",
						"vietnamese": "Khà khà... Chỉ có thế thôi sao? Trận chiến thực sự... còn chưa bắt đầu. Chủ nhân của {random_boss} sẽ sớm đến thôi...",
						"thai": "ฮ่าๆ... แค่นี้เองเหรอ? ของจริง... ยังไม่เริ่มด้วยซ้ำ เจ้าของ {random_boss} กำลังจะมาถึงแล้ว...",
						"hindi": "हाहा… बस इतना ही? असली खेल… अभी शुरू भी नहीं हुआ है। {random_boss} का मालिक जल्द ही आएगा…"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야?",
						"english": "What do you mean?",
						"japanese": "どういうことだ？",
						"chinese": "你在说什么？",
						"french": "Qu'est-ce que tu racontes ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Anh đang nói gì vậy?",
						"thai": "หมายความว่าอะไร?",
						"hindi": "तुम्हारा क्या मतलब है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "쓰러진 {random_boss}의 잔해 속에서, 한때 도시를 뒤흔들었던 카르텔의 상징들이 번쩍였다.",
						"english": "Among the debris of the fallen {random_boss}, symbols of the cartel that once shook the city gleamed.",
						"japanese": "倒れた{random_boss}の残骸の中で、かつて街を揺るがしたカルテルの象徴が輝いていた。",
						"chinese": "在倒下的{random_boss}残骸中，曾经震撼城市的卡特尔的象征闪烁着。",
						"french": "Parmi les débris du {random_boss} tombé, les symboles du cartel qui avait autrefois secoué la ville brillaient.",
						"spanish": "Entre los escombros del {random_boss} caído, brillaban los símbolos del cartel que una vez sacudió la ciudad.",
						"vietnamese": "Trong đống đổ nát của {random_boss} bị đánh bại, những biểu tượng của băng đảng từng làm rung chuyển thành phố lại lấp lánh.",
						"thai": "ท่ามกลางซากปรักหักพังของ {random_boss} ที่ล้มลง สัญลักษณ์ของกลุ่มค้ายาที่เคยเขย่าขวัญเมืองก็เปล่งประกาย",
						"hindi": "गिरे हुए {random_boss} के मलबे के बीच, उस कार्टेल के प्रतीक चमक रहे थे जिसने कभी शहर को हिला दिया था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "코드 제왕은 단순히 해커가 아니었다. 그는 과거의 망령을 디지털 세상에 부활시키려 하고 있었다.",
						"english": "The Code King was no mere hacker. He was trying to resurrect the specters of the past in the digital world.",
						"japanese": "コードの王は単なるハッカーではなかった。彼は過去の亡霊をデジタル世界に復活させようとしていた。",
						"chinese": "代码之王不仅仅是一名黑客。他正试图在数字世界中复活过去的亡灵。",
						"french": "Le Roi du Code n'était pas un simple hacker. Il tentait de ressusciter les spectres du passé dans le monde numérique.",
						"spanish": "El Rey del Código no era un simple hacker. Estaba intentando resucitar a los espectros del pasado en el mundo digital.",
						"vietnamese": "Vua Mã Lực không chỉ là một hacker đơn thuần. Hắn đang cố gắng hồi sinh những bóng ma của quá khứ trong thế giới kỹ thuật số.",
						"thai": "ราชาแห่งโค้ดไม่ใช่แค่แฮกเกอร์ธรรมดา เขากำลังพยายามชุบชีวิตวิญญาณของอดีตในโลกดิจิทัล",
						"hindi": "कोड किंग सिर्फ एक हैकर नहीं था। वह अतीत के भूतों को डिजिटल दुनिया में पुनर्जीवित करने की कोशिश कर रहा था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "다음 흔적을 쫓아야 해.",
						"english": "We must pursue the next clue.",
						"japanese": "次の痕跡を追わなければならない。",
						"chinese": "我们必须追寻下一个线索。",
						"french": "Nous devons suivre la prochaine piste.",
						"spanish": "Debemos seguir el siguiente rastro.",
						"vietnamese": "Chúng ta phải theo dõi dấu vết tiếp theo.",
						"thai": "เราต้องตามรอยต่อไป",
						"hindi": "हमें अगले सुराग का पीछा करना होगा।"
					}
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "마침내, 비틀린 데이터의 심장부에 도달했다.",
						"english": "Finally, we've reached the heart of the twisted data.",
						"japanese": "ついに、歪んだデータの心臓部に到達した。",
						"chinese": "终于，我们到达了扭曲数据的心脏。",
						"french": "Enfin, nous avons atteint le cœur des données corrompues.",
						"spanish": "Finalmente, hemos llegado al corazón de los datos retorcidos.",
						"vietnamese": "Cuối cùng, chúng ta đã đến trung tâm của dữ liệu méo mó.",
						"thai": "ในที่สุด เราก็มาถึงใจกลางของข้อมูลบิดเบี้ยว",
						"hindi": "आखिरकार, हम विकृत डेटा के दिल तक पहुँच गए।"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "침입자 주제에, 감히 내 영역을 더럽히는군.",
						"english": "Intruders, how dare you defile my domain.",
						"japanese": "侵入者のくせに、よくも私の領域を汚したな。",
						"chinese": "你们这些入侵者，竟敢玷污我的领域。",
						"french": "Intruses, comment osez-vous souiller mon domaine.",
						"spanish": "Invasores, ¿cómo os atrevéis a profanar mi dominio?",
						"vietnamese": "Những kẻ xâm nhập, dám làm ô uế lãnh địa của ta.",
						"thai": "พวกผู้บุกรุก บังอาจมาแปดเปื้อนอาณาเขตของข้า",
						"hindi": "घुसपैठियो, तुम्हारी हिम्मत कैसे हुई मेरे क्षेत्र को अपवित्र करने की।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네놈이 코드 제왕인가!",
						"english": "Are you the Code Sovereign?!",
						"japanese": "貴様がコードの支配者か！",
						"chinese": "你就是代码霸主吗？！",
						"french": "Es-tu le Souverain du Code ?!",
						"spanish": "¿¡Eres el Soberano del Código?!",
						"vietnamese": "Ngươi là Mã Hoàng ư?!",
						"thai": "แกคือ Code Sovereign รึไง!",
						"hindi": "क्या तुम कोड सम्राट हो?!"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "내 이름은 중요하지 않아. 중요한 건… 여긴 내 것이라는 사실.",
						"english": "My name isn't important. What matters is... this place is mine.",
						"japanese": "私の名は重要ではない。重要なのは…ここが私のものだということだ。",
						"chinese": "我的名字不重要。重要的是……这里是我的。",
						"french": "Mon nom n'a pas d'importance. Ce qui compte, c'est... que cet endroit m'appartient.",
						"spanish": "Mi nombre no es importante. Lo que importa es... que este lugar es mío.",
						"vietnamese": "Tên của ta không quan trọng. Điều quan trọng là... nơi này là của ta.",
						"thai": "ชื่อของข้าไม่สำคัญ สิ่งสำคัญคือ…ที่นี่เป็นของข้า",
						"hindi": "मेरा नाम महत्वपूर्ण नहीं है। महत्वपूर्ण यह है कि... यह जगह मेरी है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "헛소리 마라!",
						"english": "Cut the crap!",
						"japanese": "ふざけるな！",
						"chinese": "别胡说八道！",
						"french": "Arrête tes conneries !",
						"spanish": "¡Cállate!",
						"vietnamese": "Đừng có nói nhảm!",
						"thai": "อย่าพูดเหลวไหล!",
						"hindi": "बकवास मत करो!"
					}
				}
			]
		}
	]
} as const;
