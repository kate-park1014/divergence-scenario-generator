export const scenario_snowy_skaldrage_4_03 = {
	"scenario_id": "snowy_skaldrage_4_03",
	"order": 3,
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
	"prologue": {
		"korean": [
			"얼어붙은 미궁, 시계는 멈추지 않는다.",
			"'거짓된 위협'이라는 표지판. 그러나 모든 것이 실제처럼 조여온다.",
			"이바르는 규칙을 찾으려 했다. 하지만 논리는 조롱당했다.",
			"시간은 비웃듯 빠르게 흘러갔다. 이 함정의 끝은 어디인가."
		],
		"english": [
			"Frozen labyrinth, the clock never stops.",
			"A sign reads 'False Threat'. Yet everything feels terrifyingly real.",
			"Ivar tried to find the rules. But logic was mocked.",
			"Time flew by, as if in mockery. Where does this trap end?"
		],
		"japanese": [
			"凍てついた迷宮、時計は止まらない。",
			"「偽りの脅威」という看板。しかし、すべてが本物のように迫ってくる。",
			"イヴァルは規則を見つけようとした。しかし、論理は嘲笑された。",
			"時間は嘲笑うかのように過ぎ去った。この罠の終わりはどこだ。"
		],
		"chinese": [
			"冰封的迷宫，时钟永不停歇。",
			"写着“虚假威胁”的牌子。然而，一切都如真实般逼近。",
			"伊瓦尔试图寻找规则。但逻辑却遭到了嘲弄。",
			"时间飞逝，仿佛在嘲笑。这个陷阱的尽头在哪里？"
		],
		"french": [
			"Labyrinthe gelé, l'horloge ne s'arrête jamais.",
			"Un panneau indique \"Fausse Menace\". Pourtant, tout semble terriblement réel.",
			"Ivar a essayé de trouver les règles. Mais la logique fut bafouée.",
			"Le temps s'écoula, comme pour se moquer. Où se termine ce piège ?"
		],
		"spanish": [
			"Laberinto helado, el reloj nunca se detiene.",
			"Un letrero dice \"Falsa amenaza\". Sin embargo, todo se siente aterradoramente real.",
			"Ivar intentó encontrar las reglas. Pero la lógica fue ridiculizada.",
			"El tiempo pasó volando, como en burla. ¿Dónde termina esta trampa?"
		],
		"vietnamese": [
			"Mê cung đóng băng, đồng hồ không ngừng lại.",
			"Biển hiệu ghi 'Mối đe dọa giả'. Thế nhưng mọi thứ đều chân thực đến đáng sợ.",
			"Ivar cố tìm quy luật. Nhưng logic bị chế giễu.",
			"Thời gian trôi nhanh như chế nhạo. Cái bẫy này kết thúc ở đâu?"
		],
		"thai": [
			"เขาวงกตเยือกแข็ง นาฬิกาไม่เคยหยุดเดิน",
			"ป้ายเขียนว่า 'ภัยคุกคามลวง' ทว่าทุกอย่างกลับเหมือนจริงอย่างน่ากลัว",
			"อิวาร์พยายามหากฎเกณฑ์ แต่ตรรกะกลับถูกเยาะเย้ย",
			"เวลายามเย้ยหยันผ่านไปรวดเร็วกับดักนี้จะสิ้นสุดลงที่ใด"
		],
		"hindi": [
			"जमी हुई भूलभुलैया, घड़ी कभी नहीं रुकती।",
			"'झूठी धमकी' का संकेत। फिर भी सब कुछ भयावह रूप से वास्तविक लगता है।",
			"इवार ने नियम खोजने की कोशिश की। लेकिन तर्क का मज़ाक उड़ाया गया।",
			"समय मज़ाक उड़ाते हुए तेज़ी से निकल गया। इस जाल का अंत कहाँ है?"
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
						"korean": "유적 깊숙이, 낡은 표지판이 보였다. '거짓된 위협'.",
						"english": "Deep within the ruins, an old sign appeared: 'False Threat'.",
						"japanese": "遺跡の奥深く、古い看板が見えた。「偽りの脅威」。",
						"chinese": "遗迹深处，一块旧牌子映入眼帘：“虚假威胁”。",
						"french": "Au fond des ruines, un vieux panneau apparut : \"Fausse Menace\".",
						"spanish": "En lo profundo de las ruinas, apareció un viejo letrero: \"Falsa amenaza\".",
						"vietnamese": "Sâu trong phế tích, một tấm biển cũ hiện ra: 'Mối đe dọa giả'.",
						"thai": "ลึกเข้าไปในซากปรักหักพัง ป้ายเก่าปรากฏขึ้น: 'ภัยคุกคามลวง'",
						"hindi": "खंडहरों के भीतर, एक पुराना संकेत दिखाई दिया: 'झूठी धमकी'।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "거짓된 위협? 이 표지판… 이상해.",
						"english": "False threat? This sign... it's strange.",
						"japanese": "偽りの脅威？この看板…おかしい。",
						"chinese": "虚假威胁？这牌子……真奇怪。",
						"french": "Fausse menace ? Ce panneau... c'est étrange.",
						"spanish": "¿Falsa amenaza? Este letrero... es extraño.",
						"vietnamese": "Mối đe dọa giả? Cái biển này... thật lạ.",
						"thai": "ภัยคุกคามลวงงั้นรึ ป้ายนี่...แปลกจริง",
						"hindi": "झूठी धमकी? यह संकेत... अजीब है।"
					},
					"type": "speech"
				},
				{
					"speaker": "ivar",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"emotion": "base",
					"content": {
						"korean": "허점이다. 이 미궁을 지배하는 규칙이 있을 거야. 찾아낸다.",
						"english": "A loophole. There must be rules governing this labyrinth. I'll find them.",
						"japanese": "抜け穴だ。この迷宮を支配する規則があるはずだ。見つけ出す。",
						"chinese": "这是个漏洞。这个迷宫肯定有其运行规则。我得找到它们。",
						"french": "Une faille. Il doit y avoir des règles qui régissent ce labyrinthe. Je les trouverai.",
						"spanish": "Una laguna. Debe haber reglas que gobiernen este laberinto. Las encontraré.",
						"vietnamese": "Một sơ hở. Chắc chắn có quy tắc chi phối mê cung này. Mình sẽ tìm ra chúng.",
						"thai": "ช่องโหว่ มีกฎบางอย่างควบคุมเขาวงกตนี้อยู่แน่ ฉันจะหามันให้เจอ",
						"hindi": "एक कमी। इस भूलभुलैया को नियंत्रित करने वाले नियम होने चाहिए। मैं उन्हें ढूँढूँगा।"
					}
				},
				{
					"speaker": "ivar",
					"emotion": "base",
					"content": {
						"korean": "카운트다운은… 계산된 위험이다. 논리적으로 풀 수 있어.",
						"english": "The countdown is... a calculated risk. It can be solved logically.",
						"japanese": "カウントダウンは…計算された危険だ。論理的に解けるはず。",
						"chinese": "倒计时是……一场计算好的风险。它可以用逻辑来解决。",
						"french": "Le compte à rebours est... un risque calculé. On peut le résoudre logiquement.",
						"spanish": "La cuenta regresiva es... un riesgo calculado. Se puede resolver lógicamente.",
						"vietnamese": "Đồng hồ đếm ngược là... một rủi ro đã được tính toán. Có thể giải quyết bằng logic.",
						"thai": "การนับถอยหลังคือ...ความเสี่ยงที่คำนวณไว้แล้ว สามารถแก้ไขได้ด้วยตรรกะ",
						"hindi": "उलटी गिनती... एक परिकलित जोखिम है। इसे तार्किक रूप से हल किया जा सकता है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"content": {
						"korean": "얼음 조각 사이로 번뜩이는 섬광. 찰나의 순간, 시야가 왜곡됐다.",
						"english": "A flash of light gleamed between ice shards. For a fleeting moment, my vision warped.",
						"japanese": "氷の破片の間を閃光が走る。一瞬のうちに、視界が歪んだ。",
						"chinese": "冰块之间闪过一道亮光。转瞬之间，我的视线扭曲了。",
						"french": "Un éclair a brillé entre les éclats de glace. Pendant un instant fugace, ma vision a été déformée.",
						"spanish": "Un destello de luz brilló entre los trozos de hielo. Por un instante fugaz, mi visión se distorsionó.",
						"vietnamese": "Một tia sáng lóe lên giữa những mảnh băng. Trong khoảnh khắc chớp nhoáng, tầm nhìn của tôi bị méo mó.",
						"thai": "แสงวาบส่องประกายผ่านเกล็ดน้ำแข็ง ชั่วพริบตาเดียว ภาพก็บิดเบี้ยว",
						"hindi": "बर्फ के टुकड़ों के बीच एक चमक कौंधी। क्षण भर के लिए, मेरी दृष्टि विकृत हो गई।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"content": {
						"korean": "말도 안 돼. 패턴이 붕괴됐다. 다시 1부터 시작인가?",
						"english": "Impossible. The pattern has collapsed. Do I start again from 1?",
						"japanese": "馬鹿な。パターンが崩壊した。また1からやり直すのか？",
						"chinese": "不可能。模式崩溃了。难道又要从1开始吗？",
						"french": "Impossible. Le motif s'est effondré. Dois-je recommencer à partir de 1 ?",
						"spanish": "Imposible. El patrón se ha derrumbado. ¿Tengo que empezar de nuevo desde 1?",
						"vietnamese": "Không thể nào. Mẫu hình đã sụp đổ. Lại phải bắt đầu từ 1 sao?",
						"thai": "เป็นไปไม่ได้ รูปแบบพังทลายลงแล้ว ฉันต้องเริ่มใหม่จาก 1 หรือนี่",
						"hindi": "असंभव। पैटर्न टूट गया है। क्या मुझे 1 से फिर से शुरू करना होगा?"
					},
					"speaker": "ivar",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "이바르, 시간이 더 빠르게 흘러!",
						"english": "Ivar, time speeds up!",
						"japanese": "イヴァル、時間が加速している！",
						"chinese": "伊瓦尔，时间加速了！",
						"french": "Ivar, le temps s'accélère !",
						"spanish": "Ivar, ¡el tiempo se acelera!",
						"vietnamese": "Ivar, thời gian trôi nhanh hơn rồi!",
						"thai": "อีวาร์, เวลาไหลเร็วกว่าเดิม!",
						"hindi": "ईवार, समय तेज़ी से बीत रहा है!"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 부조리함… 강함으로 돌파할 수 없는 곳인가.",
						"english": "This absurdity... Is this a place strength cannot overcome?",
						"japanese": "この不条理さ… 強さでは突破できない場所なのか。",
						"chinese": "这份荒谬… 难道是连力量都无法突破的地方吗？",
						"french": "Cette absurdité… Est-ce un endroit que la force ne peut pas briser ?",
						"spanish": "Esta absurdidad... ¿Es este un lugar que la fuerza no puede superar?",
						"vietnamese": "Sự phi lý này... Lẽ nào là nơi không thể vượt qua bằng sức mạnh?",
						"thai": "ความไร้เหตุผลนี้... เป็นที่ที่ไม่สามารถฝ่าฟันด้วยความแข็งแกร่งได้หรือ?",
						"hindi": "यह बेतुकापन... क्या यह ऐसी जगह है जहाँ ताकत भी काम नहीं आती?"
					},
					"speaker": "ivar",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"emotion": "angry",
					"content": {
						"korean": "인정할 수 없어.",
						"english": "Unacceptable.",
						"japanese": "認められない。",
						"chinese": "无法接受。",
						"french": "Inacceptable.",
						"spanish": "Inaceptable.",
						"vietnamese": "Không thể chấp nhận được.",
						"thai": "รับไม่ได้.",
						"hindi": "यह अस्वीकार्य है।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"content": {
						"korean": "벽화 속, 눈물 흘리는 샤먼이 멈춘 시간 속에서 우리를 응시했다.",
						"english": "In the mural, a weeping shaman stared at us from within the stopped time.",
						"japanese": "壁画の中で、涙を流すシャーマンが止まった時間の中で私たちを見つめていた。",
						"chinese": "壁画中，流泪的萨满在停滞的时间里凝视着我们。",
						"french": "Dans la fresque, un chaman en larmes nous fixait depuis le temps arrêté.",
						"spanish": "En el mural, una chamana llorosa nos miraba fijamente desde el tiempo detenido.",
						"vietnamese": "Trong bức bích họa, một pháp sư đang khóc nhìn chằm chằm vào chúng ta từ trong dòng thời gian ngừng lại.",
						"thai": "ในภาพจิตรกรรมฝาผนัง หมอผีที่กำลังร้องไห้จ้องมองเราจากห้วงเวลาที่หยุดนิ่ง.",
						"hindi": "भित्तिचित्र में, एक रोता हुआ शमन रुके हुए समय में हमें घूर रहा था।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "ivar",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이 환청… 주기가 제멋대로 변하고 있어. 계산이 불가능해.",
						"english": "These hallucinations... Their cycle is changing erratically. Impossible to calculate.",
						"japanese": "この幻聴… 周期が勝手に変わっている。計算できない。",
						"chinese": "这幻听… 周期变化无常。无法计算。",
						"french": "Ces hallucinations… Leur cycle change de manière erratique. Impossible à calculer.",
						"spanish": "Estas alucinaciones... Su ciclo cambia caprichosamente. Imposible de calcular.",
						"vietnamese": "Những ảo giác này... Chu kỳ thay đổi thất thường. Không thể tính toán được.",
						"thai": "ภาพหลอนนี้... วงจรของมันเปลี่ยนไปอย่างสุ่ม. คาดเดาไม่ได้.",
						"hindi": "यह मतिभ्रम... इसका चक्र मनमाने ढंग से बदल रहा है। गणना करना असंभव है।"
					},
					"speaker": "ivar",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "예언가는 우리를 함정으로 밀어 넣은 거야.",
						"english": "The prophet pushed us into a trap.",
						"japanese": "預言者は私たちを罠に陥れたんだ。",
						"chinese": "预言者把我们推入了陷阱。",
						"french": "Le prophète nous a poussés dans un piège.",
						"spanish": "El profeta nos empujó a una trampa.",
						"vietnamese": "Kẻ tiên tri đã đẩy chúng ta vào một cái bẫy.",
						"thai": "ผู้พยากรณ์ผลักเราเข้าไปในกับดัก.",
						"hindi": "भविष्यवक्ता ने हमें एक जाल में धकेल दिया।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "함정이라면… 파훼법이 있어야 한다. 이건 그냥… 궤변이다!",
						"english": "If it's a trap... there must be a way to break it. This is just... sophistry!",
						"japanese": "罠なら… 突破法があるはずだ。これはただの… 詭弁だ！",
						"chinese": "如果是陷阱… 就应该有破解之法。这根本就是… 诡辩！",
						"french": "Si c'est un piège… il doit y avoir un moyen de s'en sortir. Ce n'est que… de la sophisterie !",
						"spanish": "Si es una trampa... debe haber una forma de desmantelarla. Esto es simplemente... ¡sofistería!",
						"vietnamese": "Nếu là bẫy... thì phải có cách hóa giải. Đây chỉ là... ngụy biện!",
						"thai": "ถ้าเป็นกับดัก... มันต้องมีวิธีแก้สิ. นี่มันแค่... การโต้เถียงที่ผิดหลักเหตุผล!",
						"hindi": "अगर यह एक जाल है... तो इसे तोड़ने का कोई तरीका होना चाहिए। यह तो बस... बकवास है!"
					},
					"speaker": "ivar",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "내 자존심이… 꺾이는 기분이다.",
						"english": "My pride... is being shattered.",
						"japanese": "私のプライドが… 砕かれる気分だ。",
						"chinese": "我的自尊心… 好像要被摧毁了。",
						"french": "Je sens que mon orgueil… est en train de se briser.",
						"spanish": "Siento que mi orgullo... se está rompiendo.",
						"vietnamese": "Tôi cảm thấy lòng tự trọng của mình... đang bị vỡ nát.",
						"thai": "รู้สึกเหมือนศักดิ์ศรีของฉัน... กำลังจะแตกสลาย.",
						"hindi": "मेरा स्वाभिमान... टूट रहा है।"
					},
					"speaker": "ivar",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "환영 속 모래시계가 역류하다 멈췄다. 비웃듯이.",
						"english": "The hourglass in the illusion flowed backward then stopped. As if mocking us.",
						"japanese": "幻影の砂時計が逆流し、そして止まった。嘲笑うかのように。",
						"chinese": "幻象中的沙漏逆流而上，然后停了下来。仿佛在嘲笑一般。",
						"french": "Le sablier dans l'illusion a coulé à l'envers puis s'est arrêté. Comme pour nous narguer.",
						"spanish": "El reloj de arena en la ilusión fluyó hacia atrás y luego se detuvo. Como burlándose.",
						"vietnamese": "Đồng hồ cát trong ảo ảnh chảy ngược rồi dừng lại. Như thể đang chế nhạo.",
						"thai": "นาฬิกาทรายในภาพลวงตาไหลย้อนกลับแล้วหยุดนิ่ง. ราวกับเยาะเย้ย.",
						"hindi": "भ्रम में रेतघड़ी उल्टी चली और फिर रुक गई। जैसे मज़ाक उड़ा रही हो।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"speaker": "ivar",
					"action": "enter"
				},
				{
					"content": {
						"korean": "…젠장! 더는 못 하겠어! 모든 게 날 조롱하는군!",
						"english": "...Damn it! I can't do this anymore! Everything is mocking me!",
						"japanese": "…ちくしょう！もうできない！すべてが俺を嘲笑っている！",
						"chinese": "…该死！我受不了了！一切都在嘲弄我！",
						"french": "…Bon sang ! Je n'en peux plus ! Tout me nargue !",
						"spanish": "...¡Maldita sea! ¡No puedo más! ¡Todo se está burlando de mí!",
						"vietnamese": "...Chết tiệt! Tôi không thể chịu đựng thêm nữa! Mọi thứ đang chế nhạo tôi!",
						"thai": "...ให้ตายสิ! ฉันทำต่อไม่ไหวแล้ว! ทุกสิ่งกำลังเยาะเย้ยฉัน!",
						"hindi": "...धिक्कार है! मैं अब और नहीं कर सकता! सब कुछ मेरा मज़ाक उड़ा रहा है!"
					},
					"speaker": "ivar",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "이바르, 여기서 멈출 순 없어!",
						"english": "Ivar, we can't stop here!",
						"japanese": "イヴァー、ここで止まるわけにはいかない！",
						"chinese": "伊瓦尔，我们不能止步于此！",
						"french": "Ivar, on ne peut pas s'arrêter ici !",
						"spanish": "¡Ivar, no podemos detenernos aquí!",
						"vietnamese": "Ivar, chúng ta không thể dừng lại ở đây!",
						"thai": "ไอวาร์ เราหยุดตรงนี้ไม่ได้!",
						"hindi": "इवार, हम यहाँ रुक नहीं सकते!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "강함의 끝을 보러 왔다. 하지만… 여긴 끝이 아니라 심연이다.",
						"english": "I came to see the end of strength. But... this isn't the end, it's an abyss.",
						"japanese": "強さの果てを見に来た。だが…ここは終わりではなく深淵だ。",
						"chinese": "我来见证力量的尽头。但是……这里不是尽头，而是深渊。",
						"french": "Je suis venu voir la fin de la puissance. Mais... ce n'est pas la fin, c'est un abysse.",
						"spanish": "Vine a ver el fin de la fuerza. Pero... esto no es el fin, es un abismo.",
						"vietnamese": "Ta đến để chứng kiến tận cùng sức mạnh. Nhưng… đây không phải là tận cùng, mà là vực thẳm.",
						"thai": "ข้ามาเพื่อดูจุดสิ้นสุดของพละกำลัง แต่... ที่นี่ไม่ใช่จุดสิ้นสุด มันคือห้วงลึก",
						"hindi": "मैं शक्ति का अंत देखने आया था। पर... यह अंत नहीं, यह तो एक खाई है।"
					},
					"speaker": "ivar",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"emotion": "sad",
					"content": {
						"korean": "모든 노력이… 헛수고였나.",
						"english": "Was all my effort... in vain?",
						"japanese": "全ての努力が…無駄だったのか。",
						"chinese": "所有的努力……都白费了吗？",
						"french": "Tous mes efforts... ont-ils été vains ?",
						"spanish": "¿Todo mi esfuerzo... fue en vano?",
						"vietnamese": "Mọi nỗ lực… đều vô ích ư?",
						"thai": "ความพยายามทั้งหมด... ไร้ประโยชน์งั้นหรือ?",
						"hindi": "क्या मेरी सारी मेहनत... बेकार थी?"
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "어리석은 전사여. 네 강함은 이곳에서 무력하다.",
						"english": "Foolish warrior. Your strength is powerless here.",
						"japanese": "愚かな戦士よ。お前の強さはここでは無力だ。",
						"chinese": "愚蠢的战士。你的力量在这里毫无用处。",
						"french": "Guerrier insensé. Ta force est impuissante ici.",
						"spanish": "Guerrero insensato. Tu fuerza es inútil aquí.",
						"vietnamese": "Chiến binh ngu xuẩn. Sức mạnh của ngươi vô dụng ở đây.",
						"thai": "นักรบโง่เขลา ความแข็งแกร่งของเจ้าไร้ค่าที่นี่",
						"hindi": "मूर्ख योद्धा। तुम्हारी शक्ति यहाँ शक्तिहीन है।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아직… 포기 안 해!",
						"english": "I won't... give up yet!",
						"japanese": "まだ… 諦めない！",
						"chinese": "我还没… 放弃！",
						"french": "Je n'abandonnerai... pas encore !",
						"spanish": "¡Aún... no me rindo!",
						"vietnamese": "Ta vẫn... chưa bỏ cuộc!",
						"thai": "ฉันยัง... ไม่ยอมแพ้!",
						"hindi": "मैं अभी तक... हार नहीं मानूंगा!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"spot": [
						3,
						4
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ivar",
					"action": "enter"
				},
				{
					"speaker": "ivar",
					"emotion": "angry",
					"content": {
						"korean": "이 치욕을… 반드시 되갚아주마!",
						"english": "I'll definitely... repay this humiliation!",
						"japanese": "この屈辱… 必ず晴らしてやる！",
						"chinese": "这份耻辱… 我必将奉还！",
						"french": "J'aurai... ma revanche pour cette humiliation !",
						"spanish": "¡Definitivamente... me vengaré de esta humillación!",
						"vietnamese": "Sự sỉ nhục này... ta nhất định sẽ báo thù!",
						"thai": "ข้าจะ... ชำระแค้นความอัปยศนี้ให้ได้!",
						"hindi": "मैं इस अपमान का... बदला ज़रूर लूंगा!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "그래… 그 분노를 더 키워라. 더 깊은 절망이 너를 기다리니.",
						"english": "Yes... nurture that anger. A deeper despair awaits you.",
						"japanese": "そうだ… その怒りをさらに募らせろ。より深い絶望がお前を待っているぞ。",
						"chinese": "没错… 培养那份愤怒吧。更深的绝望在等着你。",
						"french": "Oui... cultive cette colère. Un désespoir plus profond t'attend.",
						"spanish": "Sí... alimenta esa ira. Una desesperación más profunda te espera.",
						"vietnamese": "Phải... hãy nuôi dưỡng cơn giận đó đi. Một nỗi tuyệt vọng sâu sắc hơn đang chờ đợi ngươi.",
						"thai": "ใช่แล้ว... จงบ่มเพาะความโกรธนั้นให้มากขึ้น เพราะความสิ้นหวังที่ลึกซึ้งกว่ารอเจ้าอยู่",
						"hindi": "हाँ... उस क्रोध को और बढ़ाओ। एक गहरी निराशा तुम्हारा इंतजार कर रही है।"
					}
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "유적의 가장 깊은 곳, 공허만이 심장을 잠식했다.",
						"english": "In the deepest part of the ruins, only the void devoured my heart.",
						"japanese": "遺跡の最深部、虚無だけが心を蝕んだ。",
						"chinese": "在遗迹最深处，唯有虚无吞噬了我的心。",
						"french": "Dans les profondeurs des ruines, seul le vide a dévoré mon cœur.",
						"spanish": "En lo más profundo de las ruinas, solo el vacío devoró mi corazón.",
						"vietnamese": "Ở nơi sâu thẳm nhất của di tích, chỉ có hư vô nuốt chửng trái tim.",
						"thai": "ณ ส่วนลึกที่สุดของซากปรักหักพัง มีเพียงความว่างเปล่าที่กัดกินหัวใจ",
						"hindi": "खंडहरों के सबसे गहरे स्थान पर, केवल शून्य ने मेरे हृदय को निगल लिया।"
					}
				},
				{
					"content": {
						"korean": "흐흐… 결국 여기까지 기어들어 왔는가.",
						"english": "Heh heh... so you finally crawled all the way here.",
						"japanese": "フフ…結局ここまで這い上がってきたか。",
						"chinese": "呵呵…最终还是爬到这里来了吗？",
						"french": "Huhu… tu as fini par ramper jusqu'ici.",
						"spanish": "Jeje... así que al final te arrastraste hasta aquí.",
						"vietnamese": "Hừm hừm… rốt cuộc ngươi cũng bò tới đây.",
						"thai": "ฮึๆ... ในที่สุดก็คลานมาถึงที่นี่จนได้สินะ",
						"hindi": "हाह... आखिर तुम यहाँ तक रेंगते हुए आ ही गए।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "네가… 이 미궁의 주인인가!",
						"english": "You... are you the master of this labyrinth!",
						"japanese": "貴様が…この迷宮の主か！",
						"chinese": "你就是……这座迷宫的主人吗！",
						"french": "Toi... tu es le maître de ce labyrinthe !",
						"spanish": "¡Tú... eres el dueño de este laberinto!",
						"vietnamese": "Ngươi… là chủ nhân của mê cung này sao!",
						"thai": "เจ้า...คือเจ้าของเขาวงกตนี้งั้นรึ!",
						"hindi": "तुम... क्या तुम इस भूलभुलैया के मालिक हो!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "논리를 좇는 어리석은 자여… 네 강함은 이곳에서 부서질 뿐.",
						"english": "Foolish one who chases logic... your strength will only shatter here.",
						"japanese": "論理を追う愚かな者よ…貴様の強さはここで砕け散るのみ。",
						"chinese": "追逐逻辑的愚蠢之人啊……你的强大只会在此破碎。",
						"french": "Ô stupide qui poursuis la logique... ta force ne fera que s'y briser.",
						"spanish": "Necio que persigues la lógica... tu fuerza solo se hará añicos aquí.",
						"vietnamese": "Kẻ ngu muội theo đuổi logic… sức mạnh của ngươi chỉ tan vỡ tại đây.",
						"thai": "ผู้โง่เขลาที่ไล่ตามตรรกะ... พละกำลังของเจ้าจะแตกสลายที่นี่เท่านั้น",
						"hindi": "ओ मूर्ख, जो तर्क का पीछा करता है... तेरी शक्ति बस यहीं बिखर जाएगी।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"action": "enter",
					"speaker": "ivar",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						2
					]
				},
				{
					"content": {
						"korean": "궤변은 집어치워라! 네놈을 쓰러뜨리면 모든 게 끝난다!",
						"english": "Enough with your sophistry! If I defeat you, everything ends!",
						"japanese": "詭弁はやめろ！貴様を倒せば全てが終わる！",
						"chinese": "少说诡辩！打倒你，一切就都结束了！",
						"french": "Assez de sophismes ! Si je te bats, tout prendra fin !",
						"spanish": "¡Deja tus falacias! ¡Si te derroto, todo terminará!",
						"vietnamese": "Dẹp bỏ ngụy biện đi! Hạ gục ngươi, mọi thứ sẽ kết thúc!",
						"thai": "หยุดวาจาโต้เถียงไร้สาระซะ! ถ้าข้าล้มเจ้าได้ ทุกอย่างก็จะจบ!",
						"hindi": "अपनी कुतर्क बंद करो! अगर मैं तुम्हें हरा दूँ, तो सब कुछ खत्म हो जाएगा!"
					},
					"speaker": "ivar",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "예언자의 속삭임이 들리지 않는가? 그 깊은 외로움과 갈망… 그것이 진실.",
						"english": "Can't you hear the prophet's whispers? That deep loneliness and yearning... that is the truth.",
						"japanese": "預言者の囁きが聞こえないか？あの深い孤独と渇望…それが真実。",
						"chinese": "你听不到先知的低语吗？那份深深的孤独与渴望……那才是真相。",
						"french": "N'entends-tu pas les murmures du prophète ? Cette profonde solitude et ce désir ardent… voilà la vérité.",
						"spanish": "¿No oyes los susurros del profeta? Esa profunda soledad y anhelo... esa es la verdad.",
						"vietnamese": "Ngươi không nghe thấy lời thì thầm của tiên tri sao? Nỗi cô đơn và khát khao sâu thẳm ấy… đó mới là sự thật.",
						"thai": "เจ้าไม่ได้ยินเสียงกระซิบของผู้พยากรณ์หรือ? ความโดดเดี่ยวและความปรารถนาอันล้ำลึกนั้น... นั่นคือความจริง",
						"hindi": "क्या तुम्हें पैगंबर की फुसफुसाहट सुनाई नहीं देती? वह गहरा अकेलापन और लालसा... वही सच है।"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "허나… 네놈은 이해할 수 없겠지.",
						"english": "But... you wouldn't understand.",
						"japanese": "しかし…貴様には理解できまい。",
						"chinese": "然而……你无法理解吧。",
						"french": "Mais... tu ne pourrais pas comprendre.",
						"spanish": "Pero... tú no podrías entenderlo.",
						"vietnamese": "Nhưng… ngươi sẽ không thể hiểu được đâu.",
						"thai": "แต่... เจ้าคงไม่เข้าใจหรอก",
						"hindi": "पर... तुम समझ नहीं पाओगे।"
					},
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 이럴 수가… 하지만… 파멸은 계속된다.",
						"english": "Ugh... No way... But... the destruction continues.",
						"japanese": "くっ… まさか… しかし… 破滅は続く。",
						"chinese": "呃… 怎么会这样… 但是… 毁灭仍在继续。",
						"french": "Ugh... C'est impossible... Mais... la destruction continue.",
						"spanish": "Ugh... No puede ser... Pero... la perdición continúa.",
						"vietnamese": "Khặc... Không thể nào... Nhưng... sự hủy diệt vẫn tiếp diễn.",
						"thai": "อึก... เป็นไปไม่ได้... แต่... หายนะยังคงดำเนินต่อไป",
						"hindi": "उफ़... यह नहीं हो सकता... लेकिन... विनाश जारी है।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "happy",
					"content": {
						"korean": "끝났어!",
						"english": "It's over!",
						"japanese": "終わった！",
						"chinese": "结束了！",
						"french": "C'est fini !",
						"spanish": "¡Se acabó!",
						"vietnamese": "Xong rồi!",
						"thai": "จบแล้ว!",
						"hindi": "यह खत्म हो गया!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 미궁은… 사라지지 않아. 너의 광기는… 이제 시작일 뿐.",
						"english": "This labyrinth... won't disappear. Your madness... has only just begun.",
						"japanese": "この迷宮は… 消えない。お前の狂気は… まだ始まったばかりだ。",
						"chinese": "这迷宫… 不会消失。你的疯狂… 才刚刚开始。",
						"french": "Ce labyrinthe... ne disparaîtra pas. Ta folie... ne fait que commencer.",
						"spanish": "Este laberinto... no desaparecerá. Tu locura... apenas comienza.",
						"vietnamese": "Mê cung này... sẽ không biến mất. Sự điên rồ của ngươi... chỉ mới bắt đầu thôi.",
						"thai": "เขาวงกตนี้... จะไม่หายไป ความบ้าคลั่งของเจ้า... เพิ่งจะเริ่มต้นเท่านั้น",
						"hindi": "यह भूलभुलैया... गायब नहीं होगी। तुम्हारा पागलपन... अभी तो बस शुरू हुआ है।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "ivar",
					"action": "enter"
				},
				{
					"content": {
						"korean": "혼돈의 근원을 처치했다… 허나, 이 찜찜함은…",
						"english": "The source of chaos has been dealt with... Yet, this lingering unease...",
						"japanese": "混沌の根源を討伐した… しかし、この拭えない違和感は…",
						"chinese": "混沌的根源已被消灭… 但这种不安感…",
						"french": "La source du chaos a été vaincue... Pourtant, ce malaise persistant...",
						"spanish": "La fuente del caos ha sido eliminada... Sin embargo, esta inquietud...",
						"vietnamese": "Nguồn gốc của hỗn loạn đã bị tiêu diệt... Nhưng, sự bất an này...",
						"thai": "แหล่งกำเนิดแห่งความโกลาหลถูกกำจัดแล้ว... ทว่า ความรู้สึกกังวลนี้...",
						"hindi": "अराजकता का स्रोत समाप्त कर दिया गया है... फिर भी, यह अनिश्चितता..."
					},
					"speaker": "ivar",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "마치… 아무것도 해결되지 않은 기분이다.",
						"english": "It feels like... nothing has been resolved.",
						"japanese": "まるで… 何も解決していない気分だ。",
						"chinese": "感觉… 好像什么都没解决。",
						"french": "On dirait que... rien n'a été résolu.",
						"spanish": "Es como si... nada se hubiera resuelto.",
						"vietnamese": "Cứ như thể... không có gì được giải quyết cả.",
						"thai": "รู้สึกเหมือน... ไม่มีอะไรได้รับการแก้ไขเลย",
						"hindi": "ऐसा लगता है... जैसे कुछ भी हल नहीं हुआ है।"
					},
					"speaker": "ivar",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "왜곡된 현실의 심장이 멈추자, 미궁은 잠시 침묵했다. 그러나, 끝나지 않는 예감.",
						"english": "As the heart of distorted reality ceased, the labyrinth fell silent for a moment. But, a premonition that it's not over.",
						"japanese": "歪んだ現実の心臓が止まると、迷宮は一時沈黙した。しかし、終わらない予感。",
						"chinese": "当扭曲现实的心脏停止跳动，迷宫暂时陷入了沉寂。然而，未尽的预感。",
						"french": "Lorsque le cœur de la réalité déformée cessa, le labyrinthe se tut un instant. Mais, la prémonition que ce n'est pas fini.",
						"spanish": "Cuando el corazón de la realidad distorsionada se detuvo, el laberinto calló por un momento. Pero, la premonición de que no ha terminado.",
						"vietnamese": "Khi trái tim của thực tại méo mó ngừng đập, mê cung chìm vào im lặng trong chốc lát. Nhưng, một linh cảm chưa kết thúc.",
						"thai": "เมื่อหัวใจแห่งความจริงที่บิดเบี้ยวหยุดเต้น เขาวงกตก็เงียบสงบลงชั่วขณะ ทว่า ความรู้สึกที่ว่ามันยังไม่จบสิ้น",
						"hindi": "जैसे ही विकृत वास्तविकता का दिल धड़कना बंद हुआ, भूलभुलैया क्षण भर के लिए शांत हो गई। लेकिन, यह एक ऐसी आशंका है जो खत्म नहीं होगी।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			]
		}
	]
} as const;
