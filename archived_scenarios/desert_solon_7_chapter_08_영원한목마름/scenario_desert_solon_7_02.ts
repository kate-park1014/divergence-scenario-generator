export const scenario_desert_solon_7_02 = {
	"scenario_id": "desert_solon_7_02",
	"order": 2,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"dune": {
			"id": "mon_fc976b75-f009-4bf2-b660-a3053c95d668",
			"name": {
				"korean": "듄",
				"english": "Dune",
				"japanese": "デューン",
				"chinese": "沙丘",
				"french": "Dune",
				"spanish": "Dune",
				"vietnamese": "Dune",
				"thai": "ดูน",
				"hindi": "ड्यून"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/7568ec11-0329-44b4-740a-71b25ef62400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/ba7095b5-0d99-40bd-1155-b57701c00f00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"끝없는 모래, 그 속 오아시스 깊은 곳.",
			"메마른 땅을 걷던 자, 마침내 고대 유물을 발견한다.",
			"그것은 영웅의 기록이자, 파멸의 시작이었다.",
			"사막의 망령이 속삭이는 진실, 끝나지 않는 회한."
		],
		"english": [
			"Endless sands, deep within the oasis.",
			"One who walked the barren land, finally discovers an ancient relic.",
			"It was the record of a hero, and the beginning of ruin.",
			"Truth whispered by the desert's specter, unending regret."
		],
		"japanese": [
			"終わりのない砂、そのオアシスの奥深く。",
			"荒れた地を歩いた者、ついに古代の遺物を発見する。",
			"それは英雄の記録であり、破滅の始まりであった。",
			"砂漠の亡霊が囁く真実、終わりのない後悔。"
		],
		"chinese": [
			"无尽的黄沙，绿洲深处。",
			"跋涉荒芜者，终得古老遗物。",
			"那是英雄的记录，也是毁灭的开端。",
			"沙漠亡灵低语的真相，无尽的悔恨。"
		],
		"french": [
			"Sables infinis, au plus profond de l'oasis.",
			"Celui qui marchait sur la terre aride, découvre enfin une relique antique.",
			"C'était le récit d'un héros, et le début de la ruine.",
			"La vérité murmurée par le spectre du désert, un regret sans fin."
		],
		"spanish": [
			"Arenas interminables, en lo profundo del oasis.",
			"Quien caminó la tierra estéril, finalmente descubre una reliquia antigua.",
			"Era el registro de un héroe, y el inicio de la ruina.",
			"La verdad susurrada por el espectro del desierto, un arrepentimiento interminable."
		],
		"vietnamese": [
			"Cát vô tận, sâu thẳm trong ốc đảo.",
			"Người bước trên đất cằn, cuối cùng tìm thấy cổ vật.",
			"Đó là ghi chép của một anh hùng, và khởi đầu của sự diệt vong.",
			"Sự thật thì thầm bởi hồn ma sa mạc, hối tiếc không ngừng."
		],
		"thai": [
			"ทรายอันไม่มีที่สิ้นสุด, ลึกเข้าไปในโอเอซิส.",
			"ผู้ที่เดินบนแผ่นดินอันแห้งแล้ง, ในที่สุดก็ค้นพบโบราณวัตถุ.",
			"มันคือบันทึกของวีรบุรุษ, และจุดเริ่มต้นแห่งหายนะ.",
			"ความจริงที่ภูตผีแห่งทะเลทรายกระซิบ, ความเสียใจที่ไม่สิ้นสุด."
		],
		"hindi": [
			"अंतहीन रेत, नखलिस्तान के भीतर गहराई में।",
			"निर्जल भूमि पर चलने वाले ने, अंततः एक प्राचीन अवशेष खोजा।",
			"यह एक नायक का वृत्तांत था, और विनाश का आरंभ।",
			"रेगिस्तान के भूत द्वारा फुसफुसाई गई सच्चाई, अंतहीन पछतावा।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "고대 오아시스 지하, 잊혀진 문이 열렸다.",
						"english": "Beneath the ancient oasis, a forgotten door opened.",
						"japanese": "古代のオアシスの地下、忘れ去られた扉が開かれた。",
						"chinese": "古老绿洲地下，被遗忘的门开启了。",
						"french": "Sous l'oasis antique, une porte oubliée s'est ouverte.",
						"spanish": "Bajo el antiguo oasis, una puerta olvidada se abrió.",
						"vietnamese": "Dưới ốc đảo cổ xưa, một cánh cửa bị lãng quên đã mở ra.",
						"thai": "ใต้โอเอซิสโบราณ, ประตูที่ถูกลืมได้เปิดออก.",
						"hindi": "प्राचीन नखलिस्तान के नीचे, एक भूला हुआ द्वार खुला।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "이런 곳에 유적이 숨겨져 있었다니…",
						"english": "To think ruins were hidden in a place like this...",
						"japanese": "こんな場所に遺跡が隠されていたとは…",
						"chinese": "没想到这种地方竟然藏着遗迹…",
						"french": "Dire que des ruines étaient cachées dans un tel endroit...",
						"spanish": "Pensar que había ruinas escondidas en un lugar así...",
						"vietnamese": "Không ngờ một nơi như thế này lại có di tích ẩn giấu...",
						"thai": "ไม่น่าเชื่อว่ามีซากปรักหักพังซ่อนอยู่ในที่แบบนี้...",
						"hindi": "यह सोचकर कि ऐसी जगह में खंडहर छिपे थे..."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "dune"
				},
				{
					"speaker": "dune",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…찾았다. 솔론의 기록이 여기 있었어.",
						"english": "...Found it. Solon's records were here.",
						"japanese": "…見つけた。ソロの記録がここにあった。",
						"chinese": "……找到了。索隆的记录就在这里。",
						"french": "...Trouvé. Les archives de Solon étaient ici.",
						"spanish": "...Lo encontré. Los registros de Solon estaban aquí.",
						"vietnamese": "…Tìm thấy rồi. Ghi chép của Solon ở đây.",
						"thai": "...เจอแล้ว. บันทึกของโซลอนอยู่ที่นี่.",
						"hindi": "...मिल गया। सोलन के अभिलेख यहीं थे।"
					}
				},
				{
					"content": {
						"korean": "솔론? 그 영웅 솔론?",
						"english": "Solon? The hero Solon?",
						"japanese": "ソロ？あの英雄ソロ？",
						"chinese": "索隆？是那个英雄索隆吗？",
						"french": "Solon ? Le héros Solon ?",
						"spanish": "¿Solon? ¿El héroe Solon?",
						"vietnamese": "Solon? Anh hùng Solon đó sao?",
						"thai": "โซลอน? วีรบุรุษโซลอนคนนั้นหรือ?",
						"hindi": "सोलन? वही नायक सोलन?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "영웅이라 불렸던… 한 남자의 비극적인 이야기.",
						"english": "The tragic tale of a man... once called a hero.",
						"japanese": "英雄と呼ばれた…一人の男の悲劇的な物語。",
						"chinese": "曾被称为英雄的……一个男人的悲剧故事。",
						"french": "Le récit tragique d'un homme... autrefois appelé un héros.",
						"spanish": "La trágica historia de un hombre... una vez llamado héroe.",
						"vietnamese": "Câu chuyện bi thảm của một người đàn ông... từng được gọi là anh hùng.",
						"thai": "เรื่องราวอันโศกนาฏกรรมของชายคนหนึ่ง... ที่เคยถูกเรียกว่าวีรบุรุษ.",
						"hindi": "एक ऐसे आदमी की दुखद कहानी... जिसे कभी नायक कहा जाता था।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "dune"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"speaker": "dune",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "기록은 파편적이야. 하지만 분명히…",
						"english": "The records are fragmented. But clearly...",
						"japanese": "記録は断片的だ。しかし、はっきりと…",
						"chinese": "记录是零碎的。但很明显…",
						"french": "Les archives sont fragmentées. Mais clairement...",
						"spanish": "Los registros están fragmentados. Pero claramente...",
						"vietnamese": "Các ghi chép rời rạc. Nhưng rõ ràng là...",
						"thai": "บันทึกเป็นชิ้นส่วน. แต่ชัดเจนว่า...",
						"hindi": "अभिलेख खंडित हैं। लेकिन स्पष्ट रूप से..."
					},
					"speaker": "dune",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "dune",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그는 금지된 검술을 익혔어. 조국을 지키기 위해서.",
						"english": "He mastered forbidden swordsmanship to protect his homeland.",
						"japanese": "彼は祖国を守るために禁じられた剣術を習得した。",
						"chinese": "他为了保卫祖国，掌握了禁忌剑术。",
						"french": "Il a maîtrisé l'escrime interdite pour protéger sa patrie.",
						"spanish": "Dominó la esgrima prohibida para proteger su patria.",
						"vietnamese": "Anh ta đã tinh thông kiếm thuật cấm để bảo vệ tổ quốc.",
						"thai": "เขาฝึกฝนวิชาดาบต้องห้ามเพื่อปกป้องมาตุภูมิ",
						"hindi": "उसने अपनी मातृभूमि की रक्षा के लिए निषिद्ध तलवारबाजी में महारत हासिल की।"
					}
				},
				{
					"content": {
						"korean": "금지된 검술이 조국을 파멸시켰다고?",
						"english": "The forbidden swordsmanship destroyed his homeland?",
						"japanese": "禁じられた剣術が祖国を破滅させたというのか？",
						"chinese": "禁忌剑术毁灭了他的祖国？",
						"french": "L'escrime interdite a détruit sa patrie ?",
						"spanish": "¿La esgrima prohibida destruyó su patria?",
						"vietnamese": "Kiếm thuật cấm đã hủy hoại tổ quốc anh ta sao?",
						"thai": "วิชาดาบต้องห้ามทำลายมาตุภูมิของเขาหรือ?",
						"hindi": "क्या निषिद्ध तलवारबाजी ने उसकी मातृभूमि को नष्ट कर दिया?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "dune",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…힘은 강했지만, 대가가 너무 컸어.",
						"english": "...The power was immense, but the cost was too great.",
						"japanese": "…力は強大だったが、代償が大きすぎた。",
						"chinese": "……力量强大，但代价太大了。",
						"french": "...La puissance était grande, mais le prix était trop élevé.",
						"spanish": "...El poder era inmenso, pero el precio fue demasiado alto.",
						"vietnamese": "...Sức mạnh rất lớn, nhưng cái giá phải trả quá đắt.",
						"thai": "...พลังนั้นยิ่งใหญ่ แต่ต้องแลกมาด้วยราคาที่สูงเกินไป",
						"hindi": "शक्ति तो बहुत थी, लेकिन कीमत बहुत भारी थी।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "dune",
					"spot": [
						4,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "dune",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "솔론은 조국을 구하려다 오히려 파괴했어.",
						"english": "Solon tried to save his homeland, but instead destroyed it.",
						"japanese": "ソロンは祖国を救おうとして、かえって破壊してしまった。",
						"chinese": "索隆试图拯救祖国，却反而将其摧毁。",
						"french": "Solon a tenté de sauver sa patrie, mais l'a plutôt détruite.",
						"spanish": "Solón intentó salvar su patria, pero en cambio la destruyó.",
						"vietnamese": "Solon đã cố gắng cứu tổ quốc, nhưng lại hủy hoại nó.",
						"thai": "โซลอนพยายามกอบกู้มาตุภูมิ แต่กลับทำลายมันเสียเอง",
						"hindi": "सोलोन ने अपनी मातृभूमि को बचाने की कोशिश की, लेकिन इसके बजाय उसे नष्ट कर दिया।"
					}
				},
				{
					"content": {
						"korean": "그의 검술은 생명을 빨아들였지. 모든 것을 멈추게 하는 평화…",
						"english": "His swordsmanship drained life. A peace that stopped everything...",
						"japanese": "彼の剣術は生命を吸い取った。すべてを止める平和…",
						"chinese": "他的剑术吸取了生命。一种让万物停滞的和平……",
						"french": "Son escrime drainait la vie. Une paix qui arrêtait tout...",
						"spanish": "Su esgrima drenaba la vida. Una paz que lo detenía todo...",
						"vietnamese": "Kiếm thuật của anh ta đã hút cạn sinh lực. Một sự bình yên làm mọi thứ ngừng lại...",
						"thai": "วิชาดาบของเขาดูดกลืนชีวิตไป ความสงบสุขที่ทำให้ทุกสิ่งหยุดนิ่ง...",
						"hindi": "उसकी तलवारबाजी ने जीवन सोख लिया। एक ऐसी शांति जिसने सब कुछ रोक दिया..."
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "dune"
				},
				{
					"content": {
						"korean": "멈춘 평화… 오아시스의 풍요가 수상하더니.",
						"english": "A stopped peace... The oasis's prosperity seemed suspicious.",
						"japanese": "止まった平和…オアシスの豊かさが怪しいと思ったが。",
						"chinese": "停滞的和平……绿洲的繁荣果然可疑。",
						"french": "Une paix arrêtée... La prospérité de l'oasis me semblait suspecte.",
						"spanish": "Una paz detenida... La prosperidad del oasis me resultaba sospechosa.",
						"vietnamese": "Một sự bình yên ngừng lại... Sự trù phú của ốc đảo thật đáng ngờ.",
						"thai": "ความสงบที่หยุดนิ่ง...ความอุดมสมบูรณ์ของโอเอซิสนั้นน่าสงสัย",
						"hindi": "रुकी हुई शांति... नखलिस्तान की समृद्धि संदिग्ध लग रही थी।"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그래, 지금 이 오아시스처럼 말이야.",
						"english": "Yes, just like this oasis now.",
						"japanese": "そう、まるで今のこのオアシスのように。",
						"chinese": "是的，就像现在的这个绿洲一样。",
						"french": "Oui, comme cette oasis maintenant.",
						"spanish": "Sí, justo como este oasis ahora.",
						"vietnamese": "Đúng vậy, giống như ốc đảo này bây giờ.",
						"thai": "ใช่ เหมือนโอเอซิสแห่งนี้ตอนนี้เลย",
						"hindi": "हाँ, बिल्कुल अभी इस नखलिस्तान की तरह।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "dune"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "dune",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "dune",
					"content": {
						"korean": "솔론은… 자기 손으로 모든 것을 끝낸 뒤, 사막으로 향했어.",
						"english": "Solon... after ending everything with his own hands, headed for the desert.",
						"japanese": "ソロンは…自らの手で全てを終わらせた後、砂漠へと向かった。",
						"chinese": "索隆……亲手结束一切后，前往了沙漠。",
						"french": "Solon... après avoir tout terminé de ses propres mains, s'est dirigé vers le désert.",
						"spanish": "Solón... después de acabar con todo con sus propias manos, se dirigió al desierto.",
						"vietnamese": "Solon... sau khi tự tay kết thúc mọi thứ, đã hướng về sa mạc.",
						"thai": "โซลอน...หลังจากจบทุกสิ่งด้วยมือของเขาเอง เขาก็มุ่งหน้าสู่ทะเลทราย",
						"hindi": "सोलोन... अपने हाथों से सब कुछ खत्म करने के बाद, रेगिस्तान की ओर चला गया।"
					}
				},
				{
					"content": {
						"korean": "영웅이라 불린 그가… 스스로 파멸을 가져왔구나.",
						"english": "He, who was called a hero... brought about his own destruction.",
						"japanese": "英雄と呼ばれた彼が…自ら破滅を招いたのだな。",
						"chinese": "被称为英雄的他……竟自取灭亡。",
						"french": "Lui, qui était appelé un héros... a provoqué sa propre destruction.",
						"spanish": "Él, a quien llamaban héroe... se trajo su propia destrucción.",
						"vietnamese": "Anh ta, người được gọi là anh hùng... đã tự mang đến sự hủy diệt cho chính mình.",
						"thai": "เขา ผู้ที่ถูกขนานนามว่าเป็นวีรบุรุษ...กลับนำพาความพินาศมาสู่ตนเอง",
						"hindi": "वह, जिसे नायक कहा जाता था... अपनी बर्बादी खुद लाया।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "dune",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "끝없는 회한… 그게 그의 저주였어.",
						"english": "Endless regret... That was his curse.",
						"japanese": "終わりのない後悔…それが彼の呪いだった。",
						"chinese": "无尽的悔恨……那就是他的诅咒。",
						"french": "Un regret sans fin... C'était sa malédiction.",
						"spanish": "Un arrepentimiento infinito... Esa fue su maldición.",
						"vietnamese": "Hối hận không ngừng... Đó là lời nguyền của anh ta.",
						"thai": "ความเสียใจไม่สิ้นสุด...นั่นคือคำสาปของเขา",
						"hindi": "अंतहीन पछतावा... वही उसका अभिशाप था।"
					}
				},
				{
					"content": {
						"korean": "사막의 바람이 멈춘 것 같아. 모든 게 정지된 듯…",
						"english": "The desert wind seems to have stopped. Everything feels frozen...",
						"japanese": "砂漠の風が止まったようだ。すべてが静止しているかのよう…",
						"chinese": "沙漠的风似乎停了。一切都静止了…",
						"french": "Le vent du désert semble s'être arrêté. Tout est comme figé…",
						"spanish": "El viento del desierto parece haberse detenido. Todo está como paralizado…",
						"vietnamese": "Gió sa mạc dường như đã ngừng. Mọi thứ cứ như đóng băng…",
						"thai": "ลมทะเลทรายเหมือนจะหยุดนิ่งไปแล้ว ทุกสิ่งราวกับหยุดนิ่ง…",
						"hindi": "रेगिस्तान की हवा थम गई लगती है। सब कुछ ठहर सा गया है…"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "모든 것이 멈춘 정적 속에서, 움직일 수 없었다.",
						"english": "In the stillness where everything ceased, I couldn't move.",
						"japanese": "すべてが止まった静寂の中で、動けなかった。",
						"chinese": "在一切静止的寂静中，我无法动弹。",
						"french": "Dans le silence où tout s'était arrêté, je ne pouvais pas bouger.",
						"spanish": "En la quietud donde todo se detuvo, no pude moverme.",
						"vietnamese": "Trong sự tĩnh lặng nơi mọi thứ ngừng lại, tôi không thể di chuyển.",
						"thai": "ในความเงียบสงบที่ทุกสิ่งหยุดนิ่ง ฉันไม่สามารถเคลื่อนไหวได้",
						"hindi": "सब कुछ रुक जाने की खामोशी में, मैं हिल नहीं पा रहा था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…결국, 너도 멈출 수밖에 없는 존재.",
						"english": "...Ultimately, you too are destined to halt.",
						"japanese": "…結局、お前も止まるしかない存在だ。",
						"chinese": "……终究，你也无法避免地会停下。",
						"french": "...Après tout, toi aussi, tu es destiné à t'arrêter.",
						"spanish": "...Al final, tú también eres un ser que no puede evitar detenerse.",
						"vietnamese": "...Rốt cuộc, ngươi cũng là một kẻ phải dừng lại.",
						"thai": "...ท้ายที่สุดแล้ว เจ้าก็เป็นสิ่งมีชีวิตที่ต้องหยุดลง",
						"hindi": "...आखिरकार, तुम्हें भी रुकना ही होगा।"
					}
				},
				{
					"content": {
						"korean": "아니… 솔론의 길을 따르지 않아. 난 달라.",
						"english": "No... I won't follow Solon's path. I am different.",
						"japanese": "いや…ソロンの道は辿らない。私は違う。",
						"chinese": "不……我不会走索隆的路。我与众不同。",
						"french": "Non... je ne suivrai pas la voie de Solon. Je suis différent.",
						"spanish": "No... no seguiré el camino de Solon. Soy diferente.",
						"vietnamese": "Không... tôi sẽ không đi theo con đường của Solon. Tôi khác.",
						"thai": "ไม่... ฉันจะไม่เดินตามทางของโซลอน ฉันแตกต่าง",
						"hindi": "नहीं... मैं सोलन के रास्ते पर नहीं चलूँगा। मैं अलग हूँ।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "정체 모를 자가 쓰러지자, 유적을 감싸던 정적이 깨졌다.",
						"english": "As the unknown figure fell, the silence enshrouding the ruins shattered.",
						"japanese": "正体不明の者が倒れると、遺跡を包んでいた静寂が破られた。",
						"chinese": "当那个不知名的身影倒下时，笼罩着遗迹的寂静被打破了。",
						"french": "Quand la figure inconnue est tombée, le silence qui enveloppait les ruines s'est brisé.",
						"spanish": "Cuando la figura desconocida cayó, el silencio que envolvía las ruinas se rompió.",
						"vietnamese": "Khi nhân vật không rõ danh tính gục xuống, sự tĩnh lặng bao trùm phế tích đã bị phá vỡ.",
						"thai": "เมื่อร่างนิรนามล้มลง ความเงียบงันที่ปกคลุมซากปรักหักพังก็แตกสลาย.",
						"hindi": "जैसे ही अज्ञात आकृति गिरी, खंडहरों को घेरे हुए सन्नाटा टूट गया।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…결국, 너도 솔론처럼… 고통을 택하는군.",
						"english": "...In the end, you, too, choose suffering, just like Solon.",
						"japanese": "…結局、お前もソロンのように…苦痛を選ぶのか。",
						"chinese": "...最终，你也像索隆一样...选择了痛苦。",
						"french": "...Finalement, toi aussi, tu choisis la souffrance, comme Solon.",
						"spanish": "...Al final, tú también eliges el sufrimiento, como Solon.",
						"vietnamese": "...Cuối cùng, ngươi cũng giống Solon... chọn sự đau khổ.",
						"thai": "...ในที่สุด เจ้าก็เลือกความทุกข์ทรมานเหมือนโซลอนสินะ.",
						"hindi": "...आखिरकार, तुम भी सोलन की तरह... दर्द चुनते हो।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "고통이 없다면, 진정한 평화도 없어.",
						"english": "Without suffering, there is no true peace.",
						"japanese": "苦痛がなければ、真の平和もない。",
						"chinese": "没有痛苦，就没有真正的和平。",
						"french": "Sans souffrance, il n'y a pas de véritable paix.",
						"spanish": "Sin sufrimiento, no hay verdadera paz.",
						"vietnamese": "Không có đau khổ, sẽ không có hòa bình đích thực.",
						"thai": "หากไร้ซึ่งความทุกข์ทรมาน ก็ไร้ซึ่งสันติภาพที่แท้จริง.",
						"hindi": "बिना दर्द के, कोई सच्ची शांति नहीं है。"
					}
				},
				{
					"speaker": "dune",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "dune",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "솔론의 회한… 이제 조금 알 것 같아.",
						"english": "Solon's remorse... I think I'm starting to grasp it.",
						"japanese": "ソロンの後悔…少しだけ分かる気がする。",
						"chinese": "索隆的悔恨……我好像有点明白了。",
						"french": "Les regrets de Solon... je commence un peu à les comprendre.",
						"spanish": "El arrepentimiento de Solon... creo que empiezo a entenderlo un poco.",
						"vietnamese": "Sự hối tiếc của Solon... giờ tôi mới hiểu một chút.",
						"thai": "ความเสียใจของโซลอน... ตอนนี้ฉันพอจะเข้าใจบ้างแล้ว",
						"hindi": "सोलन का पछतावा... अब मुझे थोड़ा-बहुत समझ आ रहा है।"
					}
				},
				{
					"content": {
						"korean": "솔론의 고통은… 생각보다 더 깊고 복잡했다.",
						"english": "Solon's pain... was deeper and more complex than I imagined.",
						"japanese": "ソロンの苦痛は…思ったより深く、複雑だった。",
						"chinese": "索隆的痛苦……比我想象的更深、更复杂。",
						"french": "La souffrance de Solon... était plus profonde et plus complexe que je ne l'imaginais.",
						"spanish": "El dolor de Solon... era más profundo y complejo de lo que pensé.",
						"vietnamese": "Nỗi đau của Solon... sâu sắc và phức tạp hơn tôi nghĩ.",
						"thai": "ความเจ็บปวดของโซลอน... ลึกซึ้งและซับซ้อนกว่าที่คิดไว้",
						"hindi": "सोलन का दर्द… मेरी सोच से भी गहरा और जटिल था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "유적 깊은 곳, 모든 것이 멈춘 듯한 정적이 흘렀다.",
						"english": "Deep within the ruins, a silence fell as if everything had stopped.",
						"japanese": "遺跡の奥深く、すべてが止まったかのような静寂が流れていた。",
						"chinese": "遗迹深处，一片寂静，仿佛万物都已停止。",
						"french": "Au plus profond des ruines, un silence s'est installé, comme si tout s'était arrêté.",
						"spanish": "En lo profundo de las ruinas, un silencio reinaba como si todo se hubiera detenido.",
						"vietnamese": "Sâu trong di tích, một sự tĩnh lặng bao trùm, như thể mọi thứ đã dừng lại.",
						"thai": "ลึกเข้าไปในซากปรักหักพัง ความเงียบงันปกคลุมราวกับทุกสิ่งหยุดนิ่ง.",
						"hindi": "खंडहरों की गहराई में, ऐसी खामोशी छा गई जैसे सब कुछ थम गया हो।"
					}
				},
				{
					"spot": [
						2,
						3
					],
					"speaker": "dune",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "dune",
					"content": {
						"korean": "이 이상은 위험해. 솔론의 그림자가 너무 깊어.",
						"english": "Any further is dangerous. Solon's shadow runs too deep.",
						"japanese": "これ以上は危険だ。ソロンの影が深すぎる。",
						"chinese": "再往前就危险了。索隆的阴影太深了。",
						"french": "Aller plus loin est dangereux. L'ombre de Solon est trop profonde.",
						"spanish": "Más allá es peligroso. La sombra de Solon es demasiado profunda.",
						"vietnamese": "Đi xa hơn nữa rất nguy hiểm. Bóng tối của Solon quá sâu.",
						"thai": "เลยจากนี้ไปอันตรายแล้ว เงาของโซลอนช่างลึกนัก.",
						"hindi": "इससे आगे खतरा है। सोलन की छाया बहुत गहरी है।"
					}
				},
				{
					"action": "exit",
					"duration_ms": 400,
					"type": "direction",
					"direction": "down",
					"speaker": "dune"
				},
				{
					"content": {
						"korean": "…멈춰라. 그 회한의 기록은 더 이상 필요 없다.",
						"english": "...Stop. Those records of regret are no longer needed.",
						"japanese": "…やめろ。その悔恨の記録はもう必要ない。",
						"chinese": "...住手。那些悔恨的记录不再需要了。",
						"french": "...Arrête. Ces registres de regret ne sont plus nécessaires.",
						"spanish": "...Detente. Esos registros de arrepentimiento ya no son necesarios.",
						"vietnamese": "...Dừng lại. Những ghi chép về hối tiếc đó không còn cần thiết nữa.",
						"thai": "...หยุดเถอะ บันทึกแห่งความเสียใจเหล่านั้นไม่จำเป็นอีกต่อไป.",
						"hindi": "...रुको। पश्चाताप के उन अभिलेखों की अब आवश्यकता नहीं है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "당신은… 사막의 망령인가?",
						"english": "Are you... a specter of the desert?",
						"japanese": "あなたは…砂漠の亡霊か？",
						"chinese": "你是…沙漠的幽灵吗？",
						"french": "Êtes-vous... un spectre du désert ?",
						"spanish": "¿Eres... un espectro del desierto?",
						"vietnamese": "Ngươi là... hồn ma của sa mạc sao?",
						"thai": "ท่านคือ...วิญญาณเร่ร่อนแห่งทะเลทรายหรือ?",
						"hindi": "क्या तुम... रेगिस्तान के प्रेत हो?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "망령? 나는 평화를 지킬 뿐. 영원한 정지, 그것이 진정한 구원이다.",
						"english": "Specter? I merely uphold peace. Eternal stillness, that is true salvation.",
						"japanese": "亡霊？私はただ平和を守るだけだ。永遠の停止、それこそが真の救済だ。",
						"chinese": "幽灵？我只是维护和平。永恒的静止，那才是真正的救赎。",
						"french": "Spectre ? Je ne fais que maintenir la paix. L'immobilité éternelle, voilà le véritable salut.",
						"spanish": "¿Espectro? Yo solo mantengo la paz. La quietud eterna, esa es la verdadera salvación.",
						"vietnamese": "Hồn ma? Ta chỉ bảo vệ hòa bình. Sự tĩnh lặng vĩnh cửu, đó mới là sự cứu rỗi thực sự.",
						"thai": "วิญญาณเร่ร่อน? ข้าเพียงแค่พิทักษ์สันติภาพ การหยุดนิ่งชั่วนิรันดร์ นั่นแหละคือการไถ่บาปที่แท้จริง.",
						"hindi": "प्रेत? मैं केवल शांति बनाए रखता हूँ। शाश्वत ठहराव, वही सच्चा मोक्ष है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "솔론도 같은 말을 했겠지. 파멸 속의 평화는 가짜야.",
						"english": "Solon must have said the same. Peace amidst destruction is false.",
						"japanese": "ソロンも同じことを言ったのだろう。破滅の中の平和は偽物だ。",
						"chinese": "索隆也一定说过同样的话。毁灭中的和平是虚假的。",
						"french": "Solon a dû dire la même chose. La paix au milieu de la destruction est fausse.",
						"spanish": "Solon debió decir lo mismo. La paz en medio de la destrucción es falsa.",
						"vietnamese": "Solon chắc cũng nói như vậy. Hòa bình giữa sự hủy diệt là giả dối.",
						"thai": "โซลอนก็คงพูดแบบเดียวกัน สันติภาพท่ามกลางความพินาศนั้นเป็นของปลอม.",
						"hindi": "सोलन ने भी यही कहा होगा। विनाश के बीच शांति झूठी होती है।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		}
	]
} as const;
