export const scenario_snowy_skalhorn_5_02 = {
	"scenario_id": "snowy_skalhorn_5_02",
	"order": 2,
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
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 뿔잔이 눈밭에 웅장하게 솟아 있었다. 시공을 초월한 존재감.",
						"english": "A colossal horn-cup rose majestically from the snowfield. A presence transcending time and space.",
						"japanese": "巨大な角杯が雪原に堂々とそびえ立っていた。時空を超越した存在感。",
						"chinese": "一个巨大的角杯雄伟地矗立在雪地里。一个超越时空的存在。",
						"french": "Une coupe en forme de corne colossale s'élevait majestueusement du champ de neige. Une présence transcendant le temps et l'espace.",
						"spanish": "Un cáliz de cuerno colosal se erguía majestuosamente en el campo nevado. Una presencia que trascendía el tiempo y el espacio.",
						"vietnamese": "Một chiếc sừng khổng lồ sừng sững trên cánh đồng tuyết. Một sự hiện diện vượt thời gian và không gian.",
						"thai": "ถ้วยเขาขนาดมหึมาตั้งตระหง่านบนลานหิมะ เป็นการมีอยู่เหนือห้วงเวลาและอวกาศ",
						"hindi": "बर्फ के मैदान में एक विशाल सींग का प्याला शानदार ढंग से खड़ा था। एक ऐसी उपस्थिति जो समय और स्थान से परे थी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이게 그 유물인가… 경외롭군.",
						"english": "Is this the artifact...? Awe-inspiring.",
						"japanese": "これがその遺物か…畏敬の念を抱かせる。",
						"chinese": "这就是那件文物吗……令人敬畏。",
						"french": "Est-ce là l'artefact...? Majestueux.",
						"spanish": "¿Es este el artefacto...? Impresionante.",
						"vietnamese": "Đây có phải là cổ vật đó không... Thật đáng kinh ngạc.",
						"thai": "นี่คือวัตถุโบราณชิ้นนั้นหรือ... น่าเกรงขามยิ่งนัก",
						"hindi": "क्या यह वह कलाकृति है...? विस्मयकारी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "ivar",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						5,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "감히… 함부로 손댈 물건이 아니다.",
						"english": "Dare not... touch it carelessly.",
						"japanese": "むやみに…手を出すべきものではない。",
						"chinese": "岂敢……轻易触碰。",
						"french": "N'ose pas... le toucher à la légère.",
						"spanish": "No te atrevas... a tocarlo descuidadamente.",
						"vietnamese": "Không dám... tùy tiện động vào.",
						"thai": "ไม่กล้า... แตะต้องอย่างไม่ระมัดระวัง",
						"hindi": "हिम्मत मत करो... इसे लापरवाही से छूने की।"
					},
					"speaker": "ivar",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "경외와 함께 묘한 한기가 등골을 스쳤다.",
						"english": "Along with awe, a strange chill ran down my spine.",
						"japanese": "畏敬の念とともに、妙な冷気が背筋を走った。",
						"chinese": "伴随着敬畏，一股奇异的寒意掠过脊背。",
						"french": "Avec la crainte, un étrange frisson me parcourut l'échine.",
						"spanish": "Junto con el asombro, un escalofrío extraño recorrió mi columna vertebral.",
						"vietnamese": "Cùng với sự kính sợ, một luồng khí lạnh kỳ lạ chạy dọc sống lưng.",
						"thai": "พร้อมกับความเกรงขาม ความเยือกเย็นประหลาดก็แล่นไปทั่วกระดูกสันหลัง",
						"hindi": "विस्मय के साथ, एक अजीब सी ठंडक रीढ़ की हड्डी से गुज़र गई।"
					},
					"speaker": "narrator"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ivar",
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "전사의 본능이 속삭인다… 신성하면서도, 위험하다.",
						"english": "A warrior's instinct whispers... sacred, yet dangerous.",
						"japanese": "戦士の本能が囁く…神聖でありながら、危険だ。",
						"chinese": "战士的本能低语……神圣而又危险。",
						"french": "L'instinct du guerrier murmure... sacré, mais dangereux.",
						"spanish": "El instinto del guerrero susurra... sagrado, pero peligroso.",
						"vietnamese": "Bản năng của chiến binh thì thầm... linh thiêng, nhưng nguy hiểm.",
						"thai": "สัญชาตญาณของนักรบกระซิบ... ศักดิ์สิทธิ์ ทว่าอันตราย",
						"hindi": "एक योद्धा का सहज ज्ञान फुसफुसाता है... पवित्र, फिर भी खतरनाक।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "점점 더 추워지는 것 같아.",
						"english": "It feels like it's getting colder and colder.",
						"japanese": "だんだん寒くなってきたようだ。",
						"chinese": "感觉越来越冷了。",
						"french": "Il semble qu'il fasse de plus en plus froid.",
						"spanish": "Parece que hace cada vez más frío.",
						"vietnamese": "Hình như càng ngày càng lạnh.",
						"thai": "ดูเหมือนอากาศจะหนาวขึ้นเรื่อยๆ",
						"hindi": "ऐसा लग रहा है कि ठंड बढ़ती जा रही है।"
					}
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "강함은 경외를 부르지. 하지만… 굶주림은 모든 것을 삼킨다.",
						"english": "Strength commands awe. But... hunger devours all.",
						"japanese": "強さは畏敬を呼ぶ。だが…飢えは全てを飲み込む。",
						"chinese": "强大引人敬畏。然而……饥饿吞噬一切。",
						"french": "La force inspire la crainte. Mais... la faim dévore tout.",
						"spanish": "La fuerza inspira asombro. Pero... el hambre lo devora todo.",
						"vietnamese": "Sức mạnh tạo nên sự kính sợ. Nhưng... cơn đói nuốt chửng mọi thứ.",
						"thai": "ความแข็งแกร่งนำมาซึ่งความเกรงขาม แต่... ความหิวโหยกลืนกินทุกสิ่ง",
						"hindi": "शक्ति विस्मय पैदा करती है। लेकिन... भूख सब कुछ निगल जाती है।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"type": "direction",
					"speaker": "ivar",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "ivar",
					"content": {
						"korean": "이 한기… 단순한 추위가 아니다.",
						"english": "This chill... it's more than just cold.",
						"japanese": "この寒気…ただの冷気ではない。",
						"chinese": "这股寒意……不仅仅是寒冷。",
						"french": "Ce froid… ce n'est pas une simple morsure.",
						"spanish": "Este frío… no es una simple escarcha.",
						"vietnamese": "Cái lạnh này… không phải là cái rét thông thường.",
						"thai": "ความหนาวนี้… ไม่ใช่แค่ความเย็นธรรมดา.",
						"hindi": "यह ठंडक... महज़ सर्दी नहीं है।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "피부가 얼어붙는 것 같아.",
						"english": "My skin feels like it's freezing.",
						"japanese": "肌が凍りつくようだ。",
						"chinese": "感觉皮肤都要冻结了。",
						"french": "Ma peau semble geler.",
						"spanish": "Mi piel parece congelarse.",
						"vietnamese": "Cứ như da thịt đang đóng băng vậy.",
						"thai": "รู้สึกเหมือนผิวหนังจะแข็งเป็นน้ำแข็ง.",
						"hindi": "मेरी त्वचा जम रही है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "ivar",
					"content": {
						"korean": "생명을 거부하는 힘… 뿔잔이 가진 진짜 힘인가?",
						"english": "A power that rejects life... Is this the horn cup's true strength?",
						"japanese": "生命を拒む力…角杯が持つ真の力なのか？",
						"chinese": "拒绝生命的力量……这是圣杯真正的力量吗？",
						"french": "Un pouvoir qui rejette la vie… Est-ce le vrai pouvoir de la Corne ?",
						"spanish": "Un poder que rechaza la vida… ¿Es este el verdadero poder del cuerno?",
						"vietnamese": "Sức mạnh chối bỏ sự sống… Đây có phải là sức mạnh thật sự của Sừng Thiêng?",
						"thai": "พลังที่ปฏิเสธชีวิต… นี่คือพลังที่แท้จริงของเขาเหรอ?",
						"hindi": "जीवन को नकारने वाली शक्ति… क्या यही है सींग वाले प्याले की असली शक्ति?"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "ivar",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "이 유물… 그 속을 알 수 없다.",
						"english": "This artifact... its depths are unfathomable.",
						"japanese": "この遺物…その深淵は測り知れない。",
						"chinese": "这件遗物……深不可测。",
						"french": "Cet artefact… insondable.",
						"spanish": "Este artefacto… es inescrutable.",
						"vietnamese": "Di vật này… không thể lường trước được.",
						"thai": "วัตถุโบราณชิ้นนี้… ยากจะหยั่งถึง.",
						"hindi": "यह कलाकृति… इसकी गहराइयां अथाह हैं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "왠지 더 섬뜩해진 것 같아.",
						"english": "Somehow, it feels even more sinister now.",
						"japanese": "何だか、もっと不気味になったようだ。",
						"chinese": "感觉变得更加诡异了。",
						"french": "D'une certaine manière, c'est encore plus sinistre.",
						"spanish": "De alguna forma, se ha vuelto aún más espeluznante.",
						"vietnamese": "Không hiểu sao, nó càng trở nên rùng rợn hơn.",
						"thai": "ไม่รู้ทำไม มันน่าขนลุกยิ่งขึ้น.",
						"hindi": "किसी तरह, यह और भी भयावह लग रहा है。"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "허나, 전사는 정면으로 마주한다. 그것이 강함의 끝을 보는 길!",
						"english": "Yet, a warrior faces it head-on. That is the path to seeing the limits of strength!",
						"japanese": "しかし、戦士は真正面から向き合う。それが強さの果てを見る道！",
						"chinese": "然而，战士选择正面迎击。这才是见证力量极限的道路！",
						"french": "Pourtant, un guerrier l'affronte de front. C'est la voie pour atteindre les limites de la force !",
						"spanish": "Sin embargo, un guerrero lo enfrenta de frente. ¡Ese es el camino para ver el límite de la fuerza!",
						"vietnamese": "Nhưng chiến binh phải đối mặt trực diện. Đó là con đường để thấy giới hạn của sức mạnh!",
						"thai": "อย่างไรก็ตาม นักรบจะเผชิญหน้ากับมันโดยตรง. นั่นคือหนทางที่จะได้เห็นขีดสุดของความแข็งแกร่ง!",
						"hindi": "फिर भी, एक योद्धा इसका सीधे सामना करता है। वही है शक्ति की पराकाष्ठा देखने का मार्ग!"
					},
					"speaker": "ivar",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "고귀함과 위화감이 뒤섞인 공간. 전율이 흐른다.",
						"english": "A space where nobility and unease intertwine. A shiver runs down my spine.",
						"japanese": "高貴さと違和感が混じり合う空間。戦慄が走る。",
						"chinese": "高贵与违和感交织的空间。令人不寒而栗。",
						"french": "Un espace où noblesse et malaise s'entremêlent. Un frisson me parcourt.",
						"spanish": "Un espacio donde la nobleza y la inquietud se entrelazan. Un escalofrío me recorre.",
						"vietnamese": "Một không gian pha trộn giữa sự cao quý và cảm giác bất an. Một luồng rùng mình chạy dọc sống lưng.",
						"thai": "สถานที่ที่ความสูงส่งและความไม่สบายใจปะปนกัน. ความสยองขวัญแผ่ซ่าน.",
						"hindi": "एक ऐसी जगह जहां कुलीनता और बेचैनी आपस में गुंथी हुई हैं। एक सिहरन दौड़ जाती है।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "후후… 강함을 좇는 자여… 네 굶주림은 여기서 끝이다.",
						"english": "Heh heh... Seeker of strength... Your hunger ends here.",
						"japanese": "フフ… 強さを追う者よ… お前の飢えはここで終わりだ。",
						"chinese": "呵呵……追求强大者啊……你的饥渴到此为止。",
						"french": "Huhu... Chercheur de puissance... Ta faim s'arrête ici.",
						"spanish": "Jeje... Buscador de fuerza... Tu hambre termina aquí.",
						"vietnamese": "Khà khà... Kẻ truy cầu sức mạnh... Cơn khát của ngươi kết thúc tại đây.",
						"thai": "ฮึๆ... ผู้แสวงหาความแข็งแกร่งเอ๋ย... ความหิวโหยของเจ้าจะจบลงที่นี่.",
						"hindi": "हँ हँ... शक्ति के उपासक... तेरी भूख यहीं खत्म होती है।"
					}
				},
				{
					"spot": [
						1,
						3
					],
					"type": "direction",
					"speaker": "ivar",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "크윽… 아직… 끝나지 않았다….",
						"english": "Urgh... It's not... over yet...",
						"japanese": "クッ… まだ… 終わってない…。",
						"chinese": "呃……还没……结束……",
						"french": "Argh... Ce n'est pas... encore fini...",
						"spanish": "Ugh... Todavía... no ha terminado...",
						"vietnamese": "Khụ... Vẫn... chưa kết thúc...",
						"thai": "อึก... ยัง... ไม่จบ...",
						"hindi": "उफ़... अभी... खत्म नहीं हुआ है..."
					},
					"speaker": "ivar",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "크크… 이건… 시작에 불과하다….",
						"english": "Heh heh... This... is just the beginning...",
						"japanese": "クク… これは… 始まりに過ぎない…。",
						"chinese": "呵呵……这……不过是开始……",
						"french": "Huhu... Ce n'est... que le début...",
						"spanish": "Jeje... Esto... es solo el principio...",
						"vietnamese": "Khà khà... Đây... chỉ là khởi đầu...",
						"thai": "ฮึๆ... นี่มัน... แค่จุดเริ่มต้นเท่านั้น...",
						"hindi": "हँ हँ... यह... तो बस शुरुआत है..."
					}
				},
				{
					"spot": [
						1,
						3
					],
					"type": "direction",
					"speaker": "ivar",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "쓰러뜨렸지만… 이 뿔잔의 정체는… 여전히 미궁이군.",
						"english": "I defeated it... but the true nature of this horn... remains a mystery.",
						"japanese": "倒したが… この角杯の正体は… 未だ謎のままだな。",
						"chinese": "击败了它……但这号角的真面目……仍是个谜。",
						"french": "Je l'ai vaincu... mais la vraie nature de cette corne... reste un mystère.",
						"spanish": "Lo derroté... pero la verdadera naturaleza de este cuerno... sigue siendo un misterio.",
						"vietnamese": "Ta đã đánh bại nó... nhưng thân phận của chiếc sừng này... vẫn còn là một bí ẩn.",
						"thai": "ข้าโค่นมันได้... แต่ตัวตนของเขาสัตว์นี้... ก็ยังคงเป็นปริศนาอยู่ดี.",
						"hindi": "मैंने इसे हरा दिया... लेकिन इस सींग की असलियत... अभी भी रहस्य है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "뿔잔은 여전히 침묵한다. 허나 그 속에서 희미한 가락이… 더 선명해진 듯하다.",
						"english": "The horn remains silent. Yet, a faint melody within it... seems to have grown clearer.",
						"japanese": "角杯は依然沈黙している。しかしその奥底で微かな調べが… より鮮明になったようだ。",
						"chinese": "号角依旧沉默。然而其中微弱的旋律……似乎变得更加清晰了。",
						"french": "La corne reste silencieuse. Pourtant, une mélodie ténue en son sein... semble s'être éclaircie.",
						"spanish": "El cuerno sigue en silencio. Sin embargo, una tenue melodía en su interior... parece haberse vuelto más clara.",
						"vietnamese": "Chiếc sừng vẫn im lặng. Thế nhưng, một giai điệu mờ nhạt từ bên trong... dường như đã trở nên rõ ràng hơn.",
						"thai": "เขาสัตว์ยังคงเงียบงัน แต่ท่วงทำนองแผ่วเบาที่อยู่ภายใน... กลับดูเหมือนจะชัดเจนขึ้น.",
						"hindi": "सींग अभी भी खामोश है। फिर भी, उसके अंदर एक धीमी धुन... और भी साफ हो गई लगती है।"
					},
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "어리석은 자들. 감히 이곳을 더럽히려는가?",
						"english": "Foolish mortals. Dare you defile this place?",
						"japanese": "愚かな者たち。あえてこの地を汚そうとするか？",
						"chinese": "愚蠢的家伙们。竟敢玷污此地？",
						"french": "Mortels insensés. Osez-vous souiller ce lieu ?",
						"spanish": "¡Necios! ¿Os atrevéis a profanar este lugar?",
						"vietnamese": "Những kẻ ngu muội. Dám cả gan làm ô uế nơi này sao?",
						"thai": "พวกโง่เขลา. กล้าดียังไงมาแปดเปื้อนที่นี่?",
						"hindi": "मूर्ख प्राणी। क्या तुम इस जगह को अपवित्र करने की हिम्मत करते हो?"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "ivar",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						1,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "ivar",
					"content": {
						"korean": "네놈 따위가 이 유물의 신성함을 더럽힐 순 없다!",
						"english": "Wretches like you cannot defile the sanctity of this artifact!",
						"japanese": "貴様らごときが、この遺物の神聖さを汚すことは許さない！",
						"chinese": "尔等鼠辈，岂能玷污这件遗物的神圣！",
						"french": "Des misérables comme vous ne peuvent souiller la sainteté de cet artefact !",
						"spanish": "¡Ruines como vosotros no podéis profanar la santidad de este artefacto!",
						"vietnamese": "Bọn mi không thể làm ô uế sự thiêng liêng của di vật này được!",
						"thai": "พวกแกไม่มีทางทำลายความศักดิ์สิทธิ์ของวัตถุโบราณชิ้นนี้ได้!",
						"hindi": "तुम जैसे नीच प्राणी इस कलाकृति की पवित्रता को अपवित्र नहीं कर सकते!"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "경외? 너희에겐 그저… 죽음뿐.",
						"english": "Awe? For you... only death awaits.",
						"japanese": "畏敬だと？貴様らには…ただ死あるのみ。",
						"chinese": "敬畏？对你们而言……只有死亡。",
						"french": "La crainte ? Pour vous… seule la mort.",
						"spanish": "¿Asombro? Para vosotros… solo la muerte.",
						"vietnamese": "Kính sợ ư? Đối với các ngươi… chỉ có cái chết mà thôi.",
						"thai": "ความเกรงขาม? สำหรับพวกเจ้า… มีแต่ความตายเท่านั้น.",
						"hindi": "श्रद्धा? तुम्हारे लिए… केवल मृत्यु।"
					},
					"speaker": "random_boss"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"눈보라 몰아치는 설원, 얼어붙은 시간 속 유물이 잠들어 있었다.",
			"잊힌 신의 뿔잔이라 불리는 것. 고귀하고 거룩한 기운이 감돈다.",
			"그러나, 잔 속에서 스며 나오는 한기는… 그 모든 것을 의심케 했다."
		],
		"english": [
			"On a blizzard-swept snowfield, an artifact lay dormant in frozen time.",
			"It was called the Horn of the Forgotten God. An aura, noble and sacred, emanated from it.",
			"Yet, the chill seeping from within the cup... made one question everything."
		],
		"japanese": [
			"吹雪が吹き荒れる雪原、凍りついた時間の中に遺物が眠っていた。",
			"忘れられた神の角笛と呼ばれたもの。高貴で神聖な気が漂う。",
			"しかし、杯から染み出る冷気は…その全てを疑わせた。"
		],
		"chinese": [
			"在暴风雪肆虐的雪原，一件文物在冻结的时间中沉睡。",
			"它被称为被遗忘之神的号角。一股高贵而神圣的气息弥漫开来。",
			"然而，从杯中渗出的寒意……让人怀疑一切。"
		],
		"french": [
			"Sur un champ de neige balayé par le blizzard, un artefact gisait endormi dans le temps figé.",
			"On l'appelait la Corne du Dieu Oublié. Une aura noble et sacrée s'en dégageait.",
			"Cependant, le froid s'infiltrant de la coupe... faisait douter de tout."
		],
		"spanish": [
			"En un campo nevado azotado por la ventisca, un artefacto yacía dormido en el tiempo congelado.",
			"Se le llamaba el Cuerno del Dios Olvidado. Un aura noble y sagrada emanaba de él.",
			"Sin embargo, el frío que emanaba de la copa... hacía dudar de todo."
		],
		"vietnamese": [
			"Trên cánh đồng tuyết bị bão tuyết càn quét, một cổ vật nằm im lìm trong dòng thời gian đóng băng.",
			"Nó được gọi là Sừng của Vị Thần Bị Lãng Quên. Một luồng khí chất cao quý và linh thiêng tỏa ra.",
			"Tuy nhiên, cái lạnh toát ra từ bên trong chiếc cốc... khiến người ta nghi ngờ mọi thứ."
		],
		"thai": [
			"บนทุ่งหิมะที่พายุหิมะพัดโหมกระหน่ำ วัตถุโบราณชิ้นหนึ่งหลับใหลอยู่ในกาลเวลาที่หยุดนิ่ง",
			"มันถูกเรียกว่าเขาของเทพเจ้าที่ถูกลืม มีรัศมีอันสูงส่งและศักดิ์สิทธิ์แผ่ออกมา",
			"ทว่า ความเยือกเย็นที่เล็ดลอดออกมาจากถ้วย… ทำให้ต้องสงสัยทุกสิ่ง"
		],
		"hindi": [
			"बर्फीले तूफान से ढके बर्फीले मैदान में, एक कलाकृति जमे हुए समय में निष्क्रिय पड़ी थी।",
			"इसे भूले हुए देवता का सींग कहा जाता था। इससे एक महान और पवित्र आभा निकल रही थी।",
			"फिर भी, प्याले के भीतर से रिसती हुई ठंडक... हर चीज़ पर संदेह पैदा करती थी।"
		]
	}
} as const;
