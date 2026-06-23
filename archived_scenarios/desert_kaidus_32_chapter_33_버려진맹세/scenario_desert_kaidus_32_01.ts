export const scenario_desert_kaidus_32_01 = {
	"scenario_id": "desert_kaidus_32_01",
	"order": 1,
	"act": "intro",
	"theme": "desert",
	"actors": {
		"amir": {
			"id": "mon_0096d602-52ab-4a9c-9cc8-4ff18ed3b655",
			"name": {
				"korean": "아미르",
				"english": "Amir",
				"japanese": "アミール",
				"chinese": "阿米尔",
				"french": "Amir",
				"spanish": "Amir",
				"vietnamese": "Amir",
				"thai": "อาเมียร์",
				"hindi": "अमीर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8cd60fb0-3699-44c4-6425-a3e97eec1800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/b644dc95-9c27-442e-6dc6-73e5550a0200/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"끝없는 사막, 모래바람은 멈추지 않는다.",
			"이곳에서는 '명예'만이 유일한 법.",
			"그리고, 그 법을 비웃는 자들이 있었다.",
			"새로운 희생자를 기다리는, 뒤틀린 명예의 서막."
		],
		"english": [
			"Endless desert, the sandstorms never cease.",
			"Here, 'Honor' is the only law.",
			"And there were those who scoffed at that law.",
			"The prelude to twisted honor, awaiting new sacrifices."
		],
		"japanese": [
			"終わりなき砂漠、砂嵐は止まらない。",
			"ここでは「名誉」のみが唯一の法。",
			"そして、その法を嘲笑う者たちがいた。",
			"新たな犠牲者を待つ、歪んだ名誉の序幕。"
		],
		"chinese": [
			"无尽的沙漠，沙尘暴永不停歇。",
			"在这里，\"荣誉\"是唯一的法则。",
			"然而，有人嘲笑这条法则。",
			"扭曲的荣耀序幕，等待着新的牺牲品。"
		],
		"french": [
			"Désert sans fin, le vent de sable ne s'arrête jamais.",
			"Ici, seul l'« Honneur » est loi.",
			"Et il y eut ceux qui se moquèrent de cette loi.",
			"Le prélude d'un honneur tordu, attendant de nouvelles victimes."
		],
		"spanish": [
			"Desierto interminable, la tormenta de arena nunca cesa.",
			"Aquí, la \"Honra\" es la única ley.",
			"Y hubo quienes se burlaron de esa ley.",
			"El preludio de un honor retorcido, esperando nuevas víctimas."
		],
		"vietnamese": [
			"Sa mạc bất tận, bão cát không ngừng.",
			"Ở đây, 'Danh dự' là luật duy nhất.",
			"Và có những kẻ chế giễu luật lệ đó.",
			"Khúc dạo đầu của danh dự vặn vẹo, chờ đợi những nạn nhân mới."
		],
		"thai": [
			"ทะเลทรายไร้สิ้นสุด พายุทรายไม่เคยหยุด",
			"ที่นี่ \"เกียรติยศ\" คือกฎเดียว",
			"และมีผู้ที่เย้ยหยันกฎนั้น",
			"บทนำแห่งเกียรติยศบิดเบี้ยว รอคอยเหยื่อรายใหม่"
		],
		"hindi": [
			"अंतहीन रेगिस्तान, रेत का तूफान कभी नहीं रुकता।",
			"यहाँ, 'सम्मान' ही एकमात्र कानून है।",
			"और कुछ ऐसे भी थे, जिन्होंने उस कानून का मज़ाक उड़ाया।",
			"विकृत सम्मान का पूर्वाभास, नए बलिदानों की प्रतीक्षा।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "모래폭풍이 걷히자, 작고 황량한 오아시스 마을이 모습을 드러냈다.",
						"english": "As the sandstorm cleared, a small, desolate oasis village appeared.",
						"japanese": "砂嵐が去ると、小さく荒涼としたオアシス村が姿を現した。",
						"chinese": "沙尘暴消散后，一个渺小而荒凉的绿洲村庄显露出来。",
						"french": "Une fois la tempête de sable dissipée, un petit village-oasis désolé apparut.",
						"spanish": "Al disiparse la tormenta de arena, un pequeño y desolado pueblo-oasis apareció.",
						"vietnamese": "Khi bão cát tan, một ngôi làng ốc đảo nhỏ bé, hoang vắng hiện ra.",
						"thai": "เมื่อพายุทรายสงบลง หมู่บ้านโอเอซิสเล็กๆ ที่รกร้างก็ปรากฏขึ้น",
						"hindi": "जैसे ही रेत का तूफान हटा, एक छोटा, उजाड़ नखलिस्तान गाँव दिखाई दिया।"
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "이곳이… '명예의 성지'라 불리는 곳인가.",
						"english": "Is this... the 'Sanctuary of Honor'?",
						"japanese": "ここが…「名誉の聖地」と呼ばれる場所か。",
						"chinese": "这里就是……被称为“荣耀圣地”的地方吗？",
						"french": "Est-ce ici... le « Sanctuaire de l'Honneur » ?",
						"spanish": "¿Es este... el \"Santuario del Honor\"?",
						"vietnamese": "Đây là… nơi được gọi là 'Thánh địa Danh dự' sao?",
						"thai": "ที่นี่หรือ... ที่เรียกว่า \"สถานศักดิ์สิทธิ์แห่งเกียรติยศ\"?",
						"hindi": "क्या यह... 'सम्मान का पवित्र स्थल' है?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter",
					"speaker": "amir"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "환영한다, 방랑자여. 명예를 찾아 여기까지 왔군.",
						"english": "Welcome, wanderer. You've come this far seeking honor.",
						"japanese": "ようこそ、放浪者よ。名誉を求め、ここまで来たか。",
						"chinese": "欢迎你，流浪者。你为了荣耀来到这里。",
						"french": "Bienvenue, voyageur. Tu es venu jusqu'ici en quête d'honneur.",
						"spanish": "Bienvenido, vagabundo. Has llegado hasta aquí en busca de honor.",
						"vietnamese": "Chào mừng, lữ khách. Ngươi đã đến tận đây để tìm kiếm danh dự.",
						"thai": "ยินดีต้อนรับ ผู้พเนจร เจ้ามาถึงที่นี่เพื่อแสวงหาเกียรติยศ",
						"hindi": "स्वागत है, पथिक। तुम सम्मान की तलाश में यहाँ तक आए हो।"
					},
					"speaker": "amir"
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "네게 '명예의 시험'을 제안한다. 받아들이겠나?",
						"english": "I offer you the 'Trial of Honor'. Will you accept?",
						"japanese": "お前に「名誉の試練」を提案する。受けるか？",
						"chinese": "我向你提出“荣耀的试炼”。你接受吗？",
						"french": "Je te propose le « Procès d'Honneur ». L'accepteras-tu ?",
						"spanish": "Te ofrezco la \"Prueba de Honor\". ¿La aceptarás?",
						"vietnamese": "Ta đề nghị ngươi tham gia 'Thử thách Danh dự'. Ngươi sẽ chấp nhận chứ?",
						"thai": "ข้าขอเสนอ \"บททดสอบแห่งเกียรติยศ\" เจ้าจะยอมรับหรือไม่",
						"hindi": "मैं तुम्हें 'सम्मान की परीक्षा' का प्रस्ताव देता हूँ। क्या तुम इसे स्वीकार करोगे?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "명예의 시험? 그게 뭔데.",
						"english": "Trial of Honor? What is it?",
						"japanese": "名誉の試練？それは何だ？",
						"chinese": "荣耀的试炼？那是什么？",
						"french": "Le Procès d'Honneur ? Qu'est-ce que c'est ?",
						"spanish": "¿La Prueba de Honor? ¿Qué es?",
						"vietnamese": "Thử thách Danh dự? Nó là gì?",
						"thai": "บททดสอบแห่งเกียรติยศ? มันคืออะไร",
						"hindi": "सम्मान की परीक्षा? वह क्या है?"
					}
				},
				{
					"content": {
						"korean": "이 사막의 진정한 가치. 그건 명예지. 넌 그걸 증명할 기회를 얻었다.",
						"english": "The true value of this desert? It's honor. You've earned the chance to prove it.",
						"japanese": "この砂漠の真の価値。それは名誉だ。お前はそれを証明する機会を得たのだ。",
						"chinese": "这片沙漠的真正价值？那就是荣耀。你获得了证明它的机会。",
						"french": "La vraie valeur de ce désert ? C'est l'honneur. Tu as l'occasion de le prouver.",
						"spanish": "El verdadero valor de este desierto? Es el honor. Has ganado la oportunidad de demostrarlo.",
						"vietnamese": "Giá trị thực sự của sa mạc này? Đó là danh dự. Ngươi đã có cơ hội để chứng minh điều đó.",
						"thai": "คุณค่าที่แท้จริงของทะเลทรายแห่งนี้? คือเกียรติยศ เจ้าได้รับโอกาสที่จะพิสูจน์มัน",
						"hindi": "इस रेगिस्तान का असली मूल्य? वह सम्मान है। तुम्हें इसे साबित करने का अवसर मिला है।"
					},
					"speaker": "amir",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "amir",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "시험은 간단해. 저 '잊힌 심판자'를 쓰러뜨리면 돼.",
						"english": "The test is simple. You just need to defeat the 'Forgotten Judge'.",
						"japanese": "試験は簡単だ。あの「忘れられた審判者」を倒せばいい。",
						"chinese": "考验很简单。你只需要击败那个“被遗忘的审判者”就行。",
						"french": "L'épreuve est simple. Il te suffit de vaincre le 'Juge Oublié'.",
						"spanish": "La prueba es sencilla. Solo tienes que derrotar al \"Juez Olvidado\".",
						"vietnamese": "Bài kiểm tra rất đơn giản. Ngươi chỉ cần đánh bại 'Thẩm phán bị lãng quên' đó.",
						"thai": "การทดสอบง่ายมาก แค่เอาชนะ 'ผู้พิพากษาที่ถูกลืม' นั่นก็พอ",
						"hindi": "परीक्षा आसान है। तुम्हें बस उस 'भूले हुए न्यायाधीश' को हराना है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "잊힌 심판자?",
						"english": "The Forgotten Judge?",
						"japanese": "忘れられた審判者、だと？",
						"chinese": "被遗忘的审判者？",
						"french": "Le Juge Oublié ?",
						"spanish": "¿El Juez Olvidado?",
						"vietnamese": "Thẩm phán bị lãng quên?",
						"thai": "ผู้พิพากษาที่ถูกลืม?",
						"hindi": "भूला हुआ न्यायाधीश?"
					}
				},
				{
					"content": {
						"korean": "그래. 사막 깊은 곳에 나타난다는… 명예를 심판하는 자.",
						"english": "Yes. The one who appears deep in the desert... and judges honor.",
						"japanese": "ああ。砂漠の奥深くに現れるという… 名誉を裁く者。",
						"chinese": "对。据说是出现在沙漠深处……审判荣誉之人。",
						"french": "Oui. Celui qui apparaît au plus profond du désert... et juge l'honneur.",
						"spanish": "Sí. El que aparece en lo más profundo del desierto... y juzga el honor.",
						"vietnamese": "Phải. Kẻ xuất hiện sâu trong sa mạc... kẻ phán xét danh dự.",
						"thai": "ใช่ ผู้ที่ปรากฏตัวในส่วนลึกของทะเลทราย... ผู้พิพากษาเกียรติยศ",
						"hindi": "हाँ। वह जो रेगिस्तान की गहराइयों में प्रकट होता है... सम्मान का न्याय करने वाला।"
					},
					"speaker": "amir",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "모두가 두려워하지. 하지만 넌 다르잖아? 명예로운 도전자여.",
						"english": "Everyone fears him. But you're different, aren't you? Honorable challenger.",
						"japanese": "皆が恐れている。だが、お前は違うだろう？ 名誉ある挑戦者よ。",
						"chinese": "所有人都在恐惧。但你不是不同吗？光荣的挑战者啊。",
						"french": "Tout le monde le craint. Mais tu es différent, n'est-ce pas ? Honorable challenger.",
						"spanish": "Todos le temen. Pero tú eres diferente, ¿verdad? Honorable retador.",
						"vietnamese": "Mọi người đều sợ hãi. Nhưng ngươi khác, phải không? Kẻ thách đấu danh dự.",
						"thai": "ทุกคนต่างหวาดกลัว แต่เจ้าไม่เหมือนใครใช่ไหม? ผู้ท้าทายผู้ทรงเกียรติเอ๋ย",
						"hindi": "हर कोई उससे डरता है। लेकिन तुम अलग हो, है ना? सम्मानीय चुनौती देने वाले।"
					},
					"speaker": "amir"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "amir",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "대체 이곳의 '명예'라는 게 뭔데?",
						"english": "What exactly is 'honor' in this place?",
						"japanese": "一体、ここの「名誉」って何なんだ？",
						"chinese": "这里的“荣誉”到底是什么？",
						"french": "Mais c'est quoi, cet 'honneur' ici ?",
						"spanish": "¿Qué es exactamente el \"honor\" en este lugar?",
						"vietnamese": "Rốt cuộc, 'danh dự' ở nơi đây là gì?",
						"thai": "สรุปแล้ว 'เกียรติยศ' ของที่นี่คืออะไรกันแน่?",
						"hindi": "आखिर यहाँ का 'सम्मान' क्या है?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "명예? 그건 사막의 질서이자, 살아남는 자의 특권이지.",
						"english": "Honor? It's the order of the desert, and the privilege of those who survive.",
						"japanese": "名誉？ それは砂漠の秩序であり、生き残った者の特権だ。",
						"chinese": "荣誉？那是沙漠的秩序，也是幸存者的特权。",
						"french": "L'honneur ? C'est l'ordre du désert, et le privilège de ceux qui survivent.",
						"spanish": "¿Honor? Es el orden del desierto y el privilegio de los que sobreviven.",
						"vietnamese": "Danh dự? Đó là trật tự của sa mạc, và là đặc quyền của kẻ sống sót.",
						"thai": "เกียรติยศ? มันคือระเบียบของทะเลทราย และสิทธิพิเศษของผู้ที่รอดชีวิต",
						"hindi": "सम्मान? वह रेगिस्तान की व्यवस्था है, और जीवित बचे लोगों का विशेषाधिकार है।"
					},
					"speaker": "amir",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "어리석은 자들은 명예를 좇다 모래에 묻혔고, 현명한 자는 명예를 이용해 살아남았다.",
						"english": "The foolish chased honor and were buried in the sand, while the wise used honor to survive.",
						"japanese": "愚かな者たちは名誉を追って砂に埋もれ、賢い者たちは名誉を利用して生き残った。",
						"chinese": "愚蠢的人追逐荣誉，被埋葬在沙土中，而聪明的人则利用荣誉得以生存。",
						"french": "Les insensés ont couru après l'honneur et ont été ensevelis sous le sable, tandis que les sages ont utilisé l'honneur pour survivre.",
						"spanish": "Los necios persiguieron el honor y fueron sepultados en la arena, mientras que los sabios usaron el honor para sobrevivir.",
						"vietnamese": "Kẻ ngu xuẩn đuổi theo danh dự mà bị chôn vùi trong cát, còn kẻ khôn ngoan thì lợi dụng danh dự để sống sót.",
						"thai": "คนโง่เขลาไล่ตามเกียรติยศจนถูกฝังในทราย ส่วนคนฉลาดใช้เกียรติยศเพื่อเอาชีวิตรอด",
						"hindi": "मूर्खों ने सम्मान का पीछा किया और रेत में दब गए, जबकि बुद्धिमानों ने सम्मान का उपयोग करके जीवित बचे।"
					},
					"speaker": "amir",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "명예를… 이용했다고?",
						"english": "Used honor?",
						"japanese": "名誉を…利用した、と？",
						"chinese": "利用……荣誉？",
						"french": "Utilisé l'honneur ?",
						"spanish": "¿Usaron el honor?",
						"vietnamese": "Lợi dụng... danh dự ư?",
						"thai": "ใช้เกียรติยศ... เหรอ?",
						"hindi": "सम्मान का... उपयोग किया?"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "사막의 심장부로 향하는 길. 돌아갈 수 없는 길이었다.",
						"english": "The path to the heart of the desert. A path of no return.",
						"japanese": "砂漠の心臓部へと続く道。それは、もう戻れない道だった。",
						"chinese": "通往沙漠心脏的道路。那是一条无法回头的路。",
						"french": "Le chemin vers le cœur du désert. Un chemin sans retour.",
						"spanish": "El camino hacia el corazón del desierto. Un camino sin retorno.",
						"vietnamese": "Con đường dẫn đến trái tim sa mạc. Một con đường không thể quay lại.",
						"thai": "เส้นทางสู่ใจกลางทะเลทราย เส้นทางที่ไม่มีวันหวนกลับ",
						"hindi": "रेगिस्तान के हृदय की ओर जाने वाला रास्ता। एक ऐसा रास्ता जहाँ से वापस नहीं आया जा सकता।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "amir",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "많은 이들이 '진정한 명예'를 찾아 이 길을 걸었지.",
						"english": "Many walked this path, seeking 'true honor'.",
						"japanese": "多くの者が「真の名誉」を求めてこの道を歩んだ。",
						"chinese": "许多人为了寻找“真正的荣誉”而踏上这条路。",
						"french": "Beaucoup ont emprunté ce chemin, en quête du 'véritable honneur'.",
						"spanish": "Muchos recorrieron este camino, buscando el \"verdadero honor\".",
						"vietnamese": "Nhiều người đã đi trên con đường này, tìm kiếm 'danh dự chân chính'.",
						"thai": "หลายคนเดินบนเส้นทางนี้เพื่อแสวงหา 'เกียรติยศที่แท้จริง'",
						"hindi": "कई लोगों ने 'सच्चे सम्मान' की तलाश में इस रास्ते पर चले थे।"
					},
					"speaker": "amir"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "그들은 어떻게 됐는데?",
						"english": "What happened to them?",
						"japanese": "彼らはどうなった？",
						"chinese": "他们怎么样了？",
						"french": "Qu'est-il advenu d'eux ?",
						"spanish": "¿Qué les pasó?",
						"vietnamese": "Họ đã đi đâu rồi?",
						"thai": "พวกเขาเป็นอย่างไรบ้าง?",
						"hindi": "उनका क्या हुआ?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "모두 사라지거나… 광인이 되었지. 명예는 그런 거야. 모든 걸 걸어야 해.",
						"english": "All vanished... or went mad. That's honor for you. You have to risk everything.",
						"japanese": "皆消え去るか…狂人になった。名誉とはそういうものだ。全てを賭けねばならぬ。",
						"chinese": "要么都消失了……要么疯了。这就是荣誉。你必须赌上一切。",
						"french": "Tous ont disparu… ou sont devenus fous. C'est ça l'honneur. Il faut tout risquer.",
						"spanish": "Todos desaparecieron… o se volvieron locos. Así es el honor. Tienes que arriesgarlo todo.",
						"vietnamese": "Tất cả đều biến mất… hoặc phát điên. Danh dự là thế đấy. Phải đặt cược tất cả.",
						"thai": "ทุกคนหายสาบสูญ…หรือไม่ก็คลุ้มคลั่งไปแล้ว นั่นแหละคือเกียรติยศ คุณต้องเดิมพันทุกสิ่ง",
						"hindi": "या तो सब गायब हो गए... या पागल हो गए। यही सम्मान है। तुम्हें सब कुछ दांव पर लगाना होगा।"
					},
					"speaker": "amir"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…네가 뭘 얻을지는, 네게 달렸지. 허무하게 사라질지, 아니면…",
						"english": "...What you gain, that's up to you. To vanish meaninglessly, or...",
						"japanese": "…お前が何を得るかは、お前次第だ。虚しく消え去るか、それとも…",
						"chinese": "……你会得到什么，取决于你。是虚无地消失，还是……",
						"french": "…Ce que tu obtiendras, ça ne dépend que de toi. Disparaître vainement, ou…",
						"spanish": "…Lo que ganes, eso depende de ti. Desaparecer sin sentido, o…",
						"vietnamese": "…Ngươi sẽ đạt được gì, điều đó tùy thuộc vào ngươi. Biến mất vô nghĩa, hay…",
						"thai": "…สิ่งที่คุณจะได้รับนั้นขึ้นอยู่กับคุณ จะหายไปอย่างไร้ความหมาย หรือ…",
						"hindi": "...तुम्हें क्या मिलेगा, यह तुम पर निर्भर करता है। व्यर्थ में गायब हो जाओगे, या..."
					},
					"speaker": "amir"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 모래 폭풍 속에서 나타났다. 정체 모를 심판자.",
						"english": "A colossal shadow emerged from the sandstorm. An unknown arbiter.",
						"japanese": "砂嵐の中から巨大な影が現れた。正体不明の審判者。",
						"chinese": "一个巨大的身影从沙尘暴中出现。一位身份不明的审判者。",
						"french": "Une ombre colossale émergea de la tempête de sable. Un juge inconnu.",
						"spanish": "Una sombra colosal emergió de la tormenta de arena. Un árbitro desconocido.",
						"vietnamese": "Một bóng đen khổng lồ xuất hiện từ bão cát. Một thẩm phán vô danh.",
						"thai": "เงาขนาดมหึมาปรากฏขึ้นจากพายุทราย ผู้พิพากษาไร้นาม",
						"hindi": "रेत के तूफान से एक विशाल छाया निकली। एक अज्ञात न्यायाधीश।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "감히… 내 앞에서 명예를 논하는가?",
						"english": "How dare you… speak of honor before me?",
						"japanese": "貴様…私の前で名誉を語るか？",
						"chinese": "竟敢……在我面前谈论荣耀？",
						"french": "Comment oses-tu… parler d'honneur devant moi ?",
						"spanish": "¿Cómo te atreves… a hablar de honor ante mí?",
						"vietnamese": "Ngươi… dám nói về danh dự trước mặt ta sao?",
						"thai": "เจ้ากล้าดีอย่างไร… มาพูดเรื่องเกียรติยศต่อหน้าข้า?",
						"hindi": "हिम्मत कैसे हुई तुम्हारी... मेरे सामने सम्मान की बात करने की?"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "네가… 잊힌 심판자냐.",
						"english": "Are you… the forgotten arbiter?",
						"japanese": "貴様が…忘れられた審判者か。",
						"chinese": "你就是……被遗忘的审判者吗？",
						"french": "Es-tu… le juge oublié ?",
						"spanish": "¿Eres… el árbitro olvidado?",
						"vietnamese": "Ngươi… là thẩm phán bị lãng quên sao?",
						"thai": "เจ้าคือ… ผู้พิพากษาที่ถูกลืมงั้นหรือ?",
						"hindi": "क्या तुम... भूले हुए न्यायाधीश हो?"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "내 앞에서 그 말은… 허락되지 않는다. 네 명예를 보여라.",
						"english": "Such words… are not permitted before me. Show your honor.",
						"japanese": "私の前でその言葉は…許されぬ。貴様の栄誉を見せよ。",
						"chinese": "在我面前，这些话……是不允许的。展现你的荣耀。",
						"french": "De tels mots… ne sont pas permis devant moi. Montre ton honneur.",
						"spanish": "Esas palabras… no están permitidas ante mí. Demuestra tu honor.",
						"vietnamese": "Những lời đó… không được phép trước mặt ta. Hãy thể hiện danh dự của ngươi.",
						"thai": "คำพูดเช่นนั้น… ไม่ได้รับอนุญาตต่อหน้าข้า จงแสดงเกียรติยศของเจ้าออกมา",
						"hindi": "मेरे सामने ऐसे शब्द... स्वीकार्य नहीं हैं। अपना सम्मान दिखाओ।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "amir",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "자, 이제 네 명예를 증명할 시간이야. 모두가 지켜보고 있다.",
						"english": "Now, it's time to prove your honor. Everyone is watching.",
						"japanese": "さあ、今こそお前の栄誉を証明する時だ。皆が見ているぞ。",
						"chinese": "好了，现在是证明你荣耀的时候了。所有人都看着呢。",
						"french": "Maintenant, il est temps de prouver ton honneur. Tout le monde te regarde.",
						"spanish": "Ahora, es hora de probar tu honor. Todos están mirando.",
						"vietnamese": "Được rồi, bây giờ là lúc để chứng minh danh dự của ngươi. Mọi người đều đang theo dõi.",
						"thai": "เอาล่ะ ถึงเวลาพิสูจน์เกียรติยศของเจ้าแล้ว ทุกคนกำลังจับตามองอยู่",
						"hindi": "अब, यह तुम्हारा सम्मान साबित करने का समय है। सब देख रहे हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "amir",
					"action": "exit",
					"type": "direction",
					"direction": "left",
					"duration_ms": 400
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "쓰러뜨렸다… 이게 명예의 증명인가.",
						"english": "I've defeated them… Is this proof of honor?",
						"japanese": "倒した…これが名誉の証明なのか。",
						"chinese": "击败了……这就是荣耀的证明吗？",
						"french": "Je les ai vaincus… Est-ce la preuve de l'honneur ?",
						"spanish": "Los he derrotado… ¿Es esta la prueba de honor?",
						"vietnamese": "Đã đánh bại… Đây có phải là bằng chứng của danh dự không?",
						"thai": "ข้าโค่นล้มได้แล้ว… นี่คือเครื่องพิสูจน์เกียรติยศงั้นหรือ?",
						"hindi": "मैंने उन्हें हरा दिया... क्या यह सम्मान का प्रमाण है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "direction",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "amir"
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "오, 대단한데? 네 명예는 증명되었어. 일단은 말이야.",
						"english": "Oh, impressive, isn't it? Your honor has been proven. For now, at least.",
						"japanese": "おお、大したものだな？お前の栄誉は証明された。今のところは、だがな。",
						"chinese": "哦，真了不起？你的荣耀已经得到证明。至少目前是这样。",
						"french": "Oh, impressionnant, n'est-ce pas ? Ton honneur a été prouvé. Pour l'instant, du moins.",
						"spanish": "Oh, ¿impresionante, verdad? Tu honor ha sido probado. Por ahora, al menos.",
						"vietnamese": "Ồ, thật ấn tượng phải không? Danh dự của ngươi đã được chứng minh. Ít nhất là bây giờ.",
						"thai": "โอ้ น่าประทับใจไม่ใช่หรือ? เกียรติยศของเจ้าได้รับการพิสูจน์แล้ว อย่างน้อยก็ในตอนนี้",
						"hindi": "ओह, प्रभावशाली है ना? तुम्हारा सम्मान साबित हो गया है। फिलहाल के लिए, कम से कम।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "하지만… 진정한 시험은 이제부터 시작이지. 사막은 늘 새로운 도전을 원하거든.",
						"english": "But... the true test begins now. The desert always craves new challenges.",
						"japanese": "しかし…本当の試練は今からだ。砂漠は常に新たな挑戦を求めている。",
						"chinese": "但是…真正的考验现在才开始。沙漠总是渴望新的挑战。",
						"french": "Mais... le véritable défi ne fait que commencer. Le désert est toujours avide de nouveaux défis.",
						"spanish": "Pero... la verdadera prueba comienza ahora. El desierto siempre anhela nuevos desafíos.",
						"vietnamese": "Nhưng... thử thách thật sự chỉ mới bắt đầu. Sa mạc luôn khao khát những thử thách mới.",
						"thai": "แต่...บททดสอบที่แท้จริงเพิ่งจะเริ่มต้น ทะเลทรายมักจะต้องการความท้าทายใหม่ๆ เสมอ",
						"hindi": "लेकिन... असली परीक्षा अब शुरू होती है। रेगिस्तान हमेशा नई चुनौतियों की तलाश में रहता है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "사막의 명예는, 아직 끝나지 않았다. 그 허무한 서막이 열렸을 뿐.",
						"english": "The desert's honor has not ended. Only its fleeting prelude has begun.",
						"japanese": "砂漠の栄誉は、まだ終わらない。その虚しい序幕が開かれたに過ぎない。",
						"chinese": "沙漠的荣耀，尚未结束。那虚无的序幕才刚刚拉开。",
						"french": "L'honneur du désert n'est pas encore terminé. Seul son prélude éphémère a commencé.",
						"spanish": "El honor del desierto aún no ha terminado. Solo su fugaz preludio ha comenzado.",
						"vietnamese": "Danh dự của sa mạc, vẫn chưa kết thúc. Đó chỉ mới là màn dạo đầu hư vô.",
						"thai": "เกียรติยศแห่งทะเลทรายยังไม่สิ้นสุด เป็นเพียงแค่บทโหมโรงอันว่างเปล่าที่เพิ่งเริ่มต้นเท่านั้น",
						"hindi": "रेगिस्तान का सम्मान अभी समाप्त नहीं हुआ है। यह तो केवल उसकी क्षणभंगुर प्रस्तावना ही शुरू हुई है।"
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자여… 명예는 네 것이 아니다. 모래에 묻혀라.",
						"english": "Fool... honor is not yours. Be buried in the sand.",
						"japanese": "愚か者め…栄誉はお前のものにあらず。砂に埋もれよ。",
						"chinese": "愚蠢之人…荣耀不属于你。埋葬于沙中吧。",
						"french": "Imbécile... l'honneur ne t'appartient pas. Sois enseveli sous le sable.",
						"spanish": "Necio... el honor no es tuyo. Entiérrate en la arena.",
						"vietnamese": "Kẻ ngốc... danh dự không thuộc về ngươi. Hãy vùi mình xuống cát đi.",
						"thai": "เจ้าคนโง่...เกียรติยศไม่ใช่ของเจ้า จงถูกฝังอยู่ใต้ผืนทรายซะ",
						"hindi": "मूर्ख... सम्मान तुम्हारा नहीं है। रेत में दफ़न हो जाओ।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "젠장… 아직… 끝나지 않았어!",
						"english": "Damn it... it's not... over yet!",
						"japanese": "ちくしょう…まだ…終わってない！",
						"chinese": "该死…还没…结束！",
						"french": "Maudit... ce n'est pas... encore fini !",
						"spanish": "Maldita sea... ¡aún no... ha terminado!",
						"vietnamese": "Chết tiệt... vẫn... chưa kết thúc!",
						"thai": "บ้าเอ๊ย...ยัง...ไม่จบ!",
						"hindi": "धिक्कार है... अभी... खत्म नहीं हुआ है!"
					},
					"speaker": "character_any"
				},
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "amir",
					"action": "enter"
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "흥… 역시 안 되는군. 명예는 아무나 얻는 게 아니지.",
						"english": "Hmph... as expected, it's no good. Honor isn't for just anyone.",
						"japanese": "ふん…やはりダメか。名誉は誰もが得られるものではない。",
						"chinese": "哼…果然不行。荣耀不是谁都能得到的。",
						"french": "Hm... comme prévu, c'est inutile. L'honneur n'est pas pour n'importe qui.",
						"spanish": "Hm... como era de esperar, no sirve. El honor no es para cualquiera.",
						"vietnamese": "Hừm... quả nhiên là không được. Danh dự không phải ai cũng có thể có được.",
						"thai": "หึ...เป็นไปตามคาด ไม่ได้ผล เกียรติยศไม่ใช่สิ่งที่ใครก็ได้รับ",
						"hindi": "हम्म... जैसा कि उम्मीद थी, यह अच्छा नहीं है। सम्मान हर किसी के लिए नहीं होता।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"action": "exit",
					"speaker": "amir",
					"type": "direction",
					"direction": "right",
					"duration_ms": 400
				}
			],
			"id": 15
		}
	]
} as const;
