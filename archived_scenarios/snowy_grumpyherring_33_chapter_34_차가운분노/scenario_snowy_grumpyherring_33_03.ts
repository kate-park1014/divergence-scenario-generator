export const scenario_snowy_grumpyherring_33_03 = {
	"scenario_id": "snowy_grumpyherring_33_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"finn": {
			"id": "mon_3e3930d2-c2d3-4ad0-9818-26d259edac77",
			"name": {
				"korean": "핀",
				"english": "Finn",
				"japanese": "フィン",
				"chinese": "芬恩",
				"french": "Finn",
				"spanish": "Finn",
				"vietnamese": "Finn",
				"thai": "ฟินน์",
				"hindi": "फिन"
			},
			"description": "",
			"face_image_url": "",
			"battle_sprite_url": ""
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"얼어붙은 황무지. 끝없는 눈보라 속에서, 희미한 등불 하나가 빛난다.",
			"누군가는 이 저주를 '자연재해'라 속삭였다.",
			"하지만 그 진실은… 얼음보다 차갑고, 칼날보다 날카로웠다.",
			"누군가 이 모든 것을 꾸미고 있다."
		],
		"english": [
			"Frozen wasteland. Amidst an endless blizzard, a faint lantern glows.",
			"Some whispered this curse was a 'natural disaster.'",
			"But the truth... was colder than ice, sharper than a blade.",
			"Someone is orchestrating all of this."
		],
		"japanese": [
			"凍てつく荒野。終わりのない吹雪の中、一条の灯火がかすかに光る。",
			"誰かは、この呪いを「天災」だと囁いた。",
			"しかし、その真実は…氷よりも冷たく、刃よりも鋭かった。",
			"誰かがこの全てを企んでいる。"
		],
		"chinese": [
			"冰冻的荒原。在无尽的暴风雪中，一盏微弱的灯火闪烁着。",
			"有人低语，这诅咒是“自然灾害”。",
			"但真相……比冰更冷，比刀锋更锐利。",
			"有人在幕后操控这一切。"
		],
		"french": [
			"Terre désolée et glacée. Au cœur d'un blizzard éternel, une faible lanterne luit.",
			"Certains chuchotaient que cette malédiction était une « catastrophe naturelle ».",
			"Mais la vérité… était plus froide que la glace, plus tranchante qu'une lame.",
			"Quelqu'un est derrière tout cela."
		],
		"spanish": [
			"Páramo helado. En medio de una tormenta de nieve interminable, una tenue linterna brilla.",
			"Algunos susurraban que esta maldición era un 'desastre natural'.",
			"Pero la verdad... era más fría que el hielo, más afilada que una hoja.",
			"Alguien está orquestando todo esto."
		],
		"vietnamese": [
			"Vùng đất hoang lạnh giá. Giữa bão tuyết vô tận, một ngọn đèn lờ mờ chiếu sáng.",
			"Có kẻ thì thầm rằng lời nguyền này là 'thảm họa tự nhiên'.",
			"Nhưng sự thật… lạnh hơn băng, sắc hơn lưỡi kiếm.",
			"Ai đó đang dàn dựng tất cả những điều này."
		],
		"thai": [
			"ดินแดนรกร้างเยือกแข็ง ท่ามกลางพายุหิมะที่ไม่มีที่สิ้นสุด แสงตะเกียงริบหรี่ดวงหนึ่งส่องประกาย",
			"บางคนกระซิบว่าคำสาปนี้คือ 'ภัยธรรมชาติ'",
			"แต่ความจริง... เย็นชากว่าน้ำแข็ง คมกว่าคมมีด",
			"มีคนกำลังบงการเรื่องทั้งหมดนี้"
		],
		"hindi": [
			"जमी हुई बंजर भूमि। अंतहीन बर्फीले तूफान के बीच, एक धुंधली लालटेन चमकती है।",
			"किसी ने फुसफुसाया कि यह अभिशाप 'प्राकृतिक आपदा' था।",
			"लेकिन सच्चाई… बर्फ से भी ठंडी और तलवार से भी तेज़ थी।",
			"कोई यह सब orchestrate कर रहा है।"
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
						"korean": "차가운 바람이 모든 것을 멈추게 하는 곳. 정보만이 유일한 온기였다.",
						"english": "A place where cold winds halt all. Information was the only warmth.",
						"japanese": "冷たい風が全てを止める場所。情報だけが唯一の温もりだった。",
						"chinese": "寒风扼杀一切之地。唯有信息，才是唯一的温暖。",
						"french": "Un lieu où les vents froids arrêtent tout. L'information était la seule chaleur.",
						"spanish": "Un lugar donde los vientos fríos detienen todo. La información era el único calor.",
						"vietnamese": "Nơi gió lạnh ngừng mọi thứ. Thông tin là hơi ấm duy nhất.",
						"thai": "สถานที่ที่ลมหนาวหยุดทุกสิ่ง ข้อมูลคือความอบอุ่นเดียวที่มี",
						"hindi": "एक ऐसी जगह जहाँ ठंडी हवाएँ सब कुछ रोक देती हैं। जानकारी ही एकमात्र गरमाहट थी।"
					},
					"speaker": "narrator"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "finn",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "왔군. '훈제 청어' 시스템에 대해 궁금하다며?",
						"english": "You're here. Curious about the 'Red Herring' system, are we?",
						"japanese": "来たか。「スモークド・ヘリング」システムについて興味があると？",
						"chinese": "你来了。对“烟幕弹”系统感兴趣？",
						"french": "Te voilà. Tu es curieux à propos du système 'Hareng Rouge', n'est-ce pas ?",
						"spanish": "Has venido. ¿Tienes curiosidad por el sistema 'Pista falsa'?",
						"vietnamese": "Ngươi đến rồi à. Tò mò về hệ thống 'Cá Trích Hun Khói' phải không?",
						"thai": "มาแล้วสินะ อยากรู้เรื่องระบบ 'ปลาเฮอร์ริ่งรมควัน' หรือ?",
						"hindi": "तुम आ गए। 'रेड हेरिंग' सिस्टम के बारे में उत्सुक हो, क्या हम?"
					},
					"speaker": "finn"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "누가 이 모든 걸 만들었는지 알고 싶어.",
						"english": "I want to know who created all this.",
						"japanese": "誰がこれら全てを作ったのか知りたい。",
						"chinese": "我想知道是谁制造了这一切。",
						"french": "Je veux savoir qui a créé tout cela.",
						"spanish": "Quiero saber quién creó todo esto.",
						"vietnamese": "Tôi muốn biết ai đã tạo ra tất cả những thứ này.",
						"thai": "ฉันอยากรู้ว่าใครสร้างทั้งหมดนี้",
						"hindi": "मैं जानना चाहता हूँ कि यह सब किसने बनाया।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "자연재해? 하. 그건 순진한 소리야.",
						"english": "Natural disaster? Ha. That's naive talk.",
						"japanese": "天災だと？ハッ、それは世間知らずな話だ。",
						"chinese": "自然灾害？哈。那只是天真的说辞。",
						"french": "Catastrophe naturelle ? Ha. Quelle naïveté.",
						"spanish": "¿Desastre natural? Ja. Eso es ingenuo.",
						"vietnamese": "Thảm họa tự nhiên ư? Ha. Đó là lời nói ngây thơ.",
						"thai": "ภัยธรรมชาติ? ฮ่า มันเป็นการพูดที่ไร้เดียงสา",
						"hindi": "प्राकृतिक आपदा? हा। यह भोली बात है।"
					},
					"speaker": "finn"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "누군가의 의지가, 이 모든 것을 조종하고 있어.",
						"english": "Someone's will is controlling all of this.",
						"japanese": "誰かの意志が、この全てを操っている。",
						"chinese": "某个人的意志，正在操控这一切。",
						"french": "La volonté de quelqu'un contrôle tout cela.",
						"spanish": "La voluntad de alguien está controlando todo esto.",
						"vietnamese": "Ý chí của ai đó đang điều khiển tất cả những điều này.",
						"thai": "เจตจำนงของใครบางคนกำลังควบคุมทั้งหมดนี้",
						"hindi": "किसी की इच्छा यह सब नियंत्रित कर रही है।"
					},
					"speaker": "finn"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "finn",
					"spot": [
						4,
						2
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이 거대한 장치, 그 배후는 인간이야.",
						"english": "This colossal device, behind it lies humanity.",
						"japanese": "この巨大な装置、その背後にいるのは人間だ。",
						"chinese": "这个巨大的装置，其幕后是人类。",
						"french": "Cet appareil colossal, derrière lui se trouve l'humanité.",
						"spanish": "Este colosal dispositivo, detrás de él yace la humanidad.",
						"vietnamese": "Cỗ máy khổng lồ này, đằng sau nó là con người.",
						"thai": "อุปกรณ์ขนาดยักษ์นี้ เบื้องหลังคือมนุษย์",
						"hindi": "यह विशाल उपकरण, इसके पीछे मानवता है।"
					},
					"speaker": "finn",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…인간이라고?",
						"english": "...A human?",
						"japanese": "...人間だと？",
						"chinese": "...是人类吗？",
						"french": "...Un humain ?",
						"spanish": "...¿Un humano?",
						"vietnamese": "...Là con người sao?",
						"thai": "...มนุษย์เหรอ?",
						"hindi": "...एक इंसान?"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "finn",
					"content": {
						"korean": "그래. 아주 오래전부터 말이지.",
						"english": "Yes. For a very long time.",
						"japanese": "ええ。ずっと昔からね。",
						"chinese": "没错。很久很久以前就是了。",
						"french": "Oui. Depuis très longtemps.",
						"spanish": "Sí. Desde hace mucho tiempo.",
						"vietnamese": "Đúng vậy. Từ rất lâu rồi.",
						"thai": "ใช่ ตั้งแต่เมื่อนานมาแล้ว",
						"hindi": "हाँ। बहुत पहले से।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "finn",
					"content": {
						"korean": "가끔 차가운 바람 속에서 푸른 아우라가 느껴질 때가 있어.",
						"english": "Sometimes, I feel a blue aura in the cold wind.",
						"japanese": "時々、冷たい風の中に青いオーラを感じるの。",
						"chinese": "有时，我会在寒风中感受到一股蓝色的气场。",
						"french": "Parfois, je ressens une aura bleue dans le vent froid.",
						"spanish": "A veces, siento un aura azul en el viento frío.",
						"vietnamese": "Đôi khi, tôi cảm nhận được một luồng khí xanh trong làn gió lạnh.",
						"thai": "บางครั้ง ฉันก็รู้สึกถึงออร่าสีน้ำเงินในสายลมหนาว",
						"hindi": "कभी-कभी, ठंडी हवा में मुझे एक नीली आभा महसूस होती है।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그때마다 사람들이 공포에 떨지. 마치… 누군가 엿보는 것처럼.",
						"english": "Each time, people tremble in fear. As if... someone is watching.",
						"japanese": "そのたびに人々は恐怖に震える。まるで…誰かに覗かれているかのように。",
						"chinese": "每次，人们都会因恐惧而颤抖。仿佛...有人在窥视着。",
						"french": "À chaque fois, les gens tremblent de peur. Comme si... quelqu'un les observait.",
						"spanish": "Cada vez, la gente tiembla de miedo. Como si... alguien estuviera observando.",
						"vietnamese": "Mỗi lần như vậy, mọi người đều run rẩy trong sợ hãi. Cứ như là... có ai đó đang rình rập.",
						"thai": "ทุกครั้ง ผู้คนต่างตัวสั่นด้วยความกลัว ราวกับ... มีใครบางคนกำลังเฝ้าดูอยู่",
						"hindi": "हर बार, लोग डर से कांपते हैं। जैसे... कोई देख रहा हो।"
					},
					"speaker": "finn"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"speaker": "finn",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "그 아우라가 시스템의 핵심이야. 모든 것을 얼어붙게 하는 힘.",
						"english": "That aura is the core of the system. A power that freezes everything.",
						"japanese": "そのオーラこそがシステムの核心だ。すべてを凍てつかせる力。",
						"chinese": "那股气场是系统的核心。一种能冻结一切的力量。",
						"french": "Cette aura est le cœur du système. Un pouvoir qui gèle tout.",
						"spanish": "Esa aura es el núcleo del sistema. Un poder que lo congela todo.",
						"vietnamese": "Luồng khí đó là cốt lõi của hệ thống. Một sức mạnh đóng băng mọi thứ.",
						"thai": "ออร่านั้นคือแกนหลักของระบบ พลังที่ทำให้ทุกสิ่งแข็งตัว",
						"hindi": "वह आभा सिस्टम का मूल है। एक शक्ति जो सब कुछ जमा देती है।"
					},
					"speaker": "finn",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "누구 짓인지 알아야 해.",
						"english": "We need to find out who's behind this.",
						"japanese": "誰の仕業か突き止めなければならない。",
						"chinese": "我们必须查明是谁干的。",
						"french": "Nous devons savoir qui est derrière tout ça.",
						"spanish": "Necesitamos saber quién está detrás de esto.",
						"vietnamese": "Chúng ta phải tìm ra kẻ đứng sau.",
						"thai": "เราต้องรู้ว่าใครเป็นคนทำ",
						"hindi": "हमें यह पता लगाना होगा कि यह किसका काम है।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그자는… 이 얼어붙은 세상의 심장부에서 군림하고 있어.",
						"english": "That person... reigns in the heart of this frozen world.",
						"japanese": "そいつは…この凍てついた世界の心臓部で君臨している。",
						"chinese": "那个人...在这冰冻世界的中心地带称霸着。",
						"french": "Cette personne... règne au cœur de ce monde gelé.",
						"spanish": "Esa persona... reina en el corazón de este mundo congelado.",
						"vietnamese": "Kẻ đó... đang thống trị tại trung tâm của thế giới đóng băng này.",
						"thai": "คนผู้นั้น... ปกครองอยู่ใจกลางของโลกที่เยือกแข็งนี้",
						"hindi": "वह व्यक्ति... इस जमे हुए संसार के दिल में राज करता है।"
					},
					"speaker": "finn"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "아마도… '훈제 청어'가 만들어지는 그곳.",
						"english": "Perhaps... where the 'red herring' is made.",
						"japanese": "おそらく…「燻製ニシン」が作られるその場所だ。",
						"chinese": "也许...就在那制造“烟幕弹”的地方。",
						"french": "Peut-être... là où le 'hareng rouge' est fabriqué.",
						"spanish": "Quizás... donde se hace el 'arenque ahumado'.",
						"vietnamese": "Có lẽ... là nơi 'cá trích hun khói' được tạo ra.",
						"thai": "บางที... ที่ที่ 'ปลาเฮอร์ริ่งรมควัน' ถูกสร้างขึ้น",
						"hindi": "शायद... जहाँ 'लाल हेरिंग' बनता है।"
					},
					"speaker": "finn"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "finn",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "finn",
					"content": {
						"korean": "더 이상은… 위험해.",
						"english": "Any further... it's too dangerous.",
						"japanese": "これ以上は…危険だ。",
						"chinese": "再往前...就危险了。",
						"french": "Plus loin... c'est dangereux.",
						"spanish": "Más allá... es peligroso.",
						"vietnamese": "Đi thêm nữa... sẽ nguy hiểm.",
						"thai": "ต่อไปอีก... อันตรายนะ",
						"hindi": "इससे आगे... खतरनाक है।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "멈출 수 없어. 여기까지 왔는데.",
						"english": "I can't stop. Not after coming all this way.",
						"japanese": "止められない。ここまで来たんだから。",
						"chinese": "我不能停下来。我都走到这里了。",
						"french": "Je ne peux pas m'arrêter. Pas après être venu si loin.",
						"spanish": "No puedo parar. No después de haber llegado hasta aquí.",
						"vietnamese": "Không thể dừng lại. Đã đến đây rồi mà.",
						"thai": "ฉันหยุดไม่ได้ มาไกลถึงขนาดนี้แล้ว",
						"hindi": "मैं रुक नहीं सकता। इतना आगे आने के बाद।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "finn",
					"content": {
						"korean": "그자는 모든 것을 얼음으로 만들려고 해. 진정한 겨울을….",
						"english": "He wants to turn everything into ice. A true winter...",
						"japanese": "あいつは全てを氷にしようとしている。真の冬を…。",
						"chinese": "他想把一切都变成冰。一个真正的冬天……",
						"french": "Il veut tout transformer en glace. Un véritable hiver...",
						"spanish": "Él quiere convertirlo todo en hielo. Un verdadero invierno...",
						"vietnamese": "Hắn muốn biến mọi thứ thành băng giá. Một mùa đông thực sự...",
						"thai": "มันต้องการเปลี่ยนทุกสิ่งให้เป็นน้ำแข็ง ฤดูหนาวที่แท้จริง...",
						"hindi": "वह सब कुछ बर्फ में बदलना चाहता है। एक सच्ची सर्दी..."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "더 이상 아무도 얼어붙게 두지 않을 거야.",
						"english": "I won't let anyone freeze anymore.",
						"japanese": "もう誰も凍らせたりしない。",
						"chinese": "我不会再让任何人冻结。",
						"french": "Je ne laisserai plus personne geler.",
						"spanish": "No dejaré que nadie más se congele.",
						"vietnamese": "Tôi sẽ không để bất cứ ai đóng băng nữa.",
						"thai": "ฉันจะไม่ยอมให้ใครต้องแข็งตายอีกต่อไป",
						"hindi": "मैं अब किसी को जमने नहीं दूँगा।"
					}
				},
				{
					"action": "exit",
					"type": "direction",
					"direction": "down",
					"speaker": "finn",
					"duration_ms": 400
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "차가운 기운이 감돌았다. 거대한 그림자가 앞을 가로막았다.",
						"english": "A cold aura lingered. A colossal shadow blocked the way.",
						"japanese": "冷たい気が漂った。巨大な影が道を阻んだ。",
						"chinese": "一股寒意弥漫。一道巨大的阴影挡住了去路。",
						"french": "Une aura glaciale planait. Une ombre colossale barra le chemin.",
						"spanish": "Una aura fría se cernía. Una sombra gigantesca bloqueaba el paso.",
						"vietnamese": "Một luồng khí lạnh bao trùm. Một cái bóng khổng lồ chặn đường.",
						"thai": "สัมผัสเย็นยะเยือกแผ่ซ่าน เงาร่างมหึมาบดบังเส้นทาง",
						"hindi": "एक ठंडी आभा छाई हुई थी। एक विशाल छाया ने रास्ता रोक दिया।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…여기까지 온 건가.",
						"english": "...So you've come this far.",
						"japanese": "…ここまで来たのか。",
						"chinese": "……你竟然走到这里了。",
						"french": "...Tu es donc venu jusqu'ici.",
						"spanish": "...Así que has llegado hasta aquí.",
						"vietnamese": "...Ngươi đã đến đây sao.",
						"thai": "...เจ้ามาถึงที่นี่แล้วหรือ",
						"hindi": "...तो तुम यहाँ तक आ गए।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "네가… 이 모든 걸 꾸민 자냐!",
						"english": "You... are you the one behind all of this?!",
						"japanese": "貴様が…この全ての首謀者か！",
						"chinese": "你……你就是这一切的幕后主使？！",
						"french": "Toi... C'est toi qui as orchestré tout ça ?!",
						"spanish": "Tú... ¿eres quien ha tramado todo esto?",
						"vietnamese": "Ngươi... ngươi là kẻ chủ mưu tất cả chuyện này sao!",
						"thai": "เจ้า... เจ้าคือผู้อยู่เบื้องหลังทั้งหมดนี้หรือ!",
						"hindi": "तुम... क्या तुम ही हो इन सब के पीछे?!"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "감히… 나의 완벽한 추위를 방해하려는 어리석은 자여.",
						"english": "How dare you... foolish one, trying to disrupt my perfect cold.",
						"japanese": "よくも…我が完璧なる寒気を妨げようとする愚か者め。",
						"chinese": "竟敢……愚蠢的家伙，妄想打扰我完美的严寒。",
						"french": "Comment oses-tu... stupide créature, tenter de perturber mon froid parfait.",
						"spanish": "Cómo te atreves... tonto, a intentar perturbar mi frío perfecto.",
						"vietnamese": "Ngươi dám... kẻ ngu ngốc, dám phá hoại sự lạnh lẽo hoàn hảo của ta.",
						"thai": "บังอาจ... เจ้าคนโง่เง่า ที่คิดจะมาขัดขวางความเย็นยะเยือกอันสมบูรณ์แบบของข้า",
						"hindi": "तुम्हारी हिम्मत कैसे हुई... मूर्ख, मेरी पूर्ण ठंडक को बाधित करने की कोशिश करने की।"
					},
					"speaker": "random_boss"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "나의 겨울은… 영원할 것이다.",
						"english": "My winter... will be eternal.",
						"japanese": "「私の冬は…永遠になるだろう。」",
						"chinese": "我的冬天…将是永恒的。",
						"french": "Mon hiver... sera éternel.",
						"spanish": "Mi invierno... será eterno.",
						"vietnamese": "Mùa đông của ta... sẽ là vĩnh cửu.",
						"thai": "ฤดูหนาวของข้า... จะคงอยู่ชั่วนิรันดร์",
						"hindi": "मेरी सर्दी... शाश्वत होगी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…아직, 끝나지 않았어.",
						"english": "...It's not over yet.",
						"japanese": "「…まだ、終わっていない。」",
						"chinese": "…还没，结束。",
						"french": "...Ce n'est pas encore fini.",
						"spanish": "...Aún no ha terminado.",
						"vietnamese": "...Chưa, kết thúc đâu.",
						"thai": "...ยังไม่จบ",
						"hindi": "...अभी तक खत्म नहीं हुआ है।"
					},
					"speaker": "character_any"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이것은… 시작에 불과해….",
						"english": "This is... merely the beginning...",
						"japanese": "これは…始まりに過ぎない…。",
						"chinese": "这……仅仅是个开始……",
						"french": "Ce n'est... que le début...",
						"spanish": "Esto es... meramente el principio...",
						"vietnamese": "Đây... chỉ là khởi đầu thôi...",
						"thai": "นี่เป็น... แค่จุดเริ่มต้นเท่านั้น...",
						"hindi": "यह... केवल शुरुआत है..."
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "끝은… 내가 정한다.",
						"english": "The end... I decide it.",
						"japanese": "終わりは…私が決める。",
						"chinese": "结局……由我来决定。",
						"french": "La fin... c'est moi qui la décide.",
						"spanish": "El final... yo lo decido.",
						"vietnamese": "Kết cục... là do ta định đoạt.",
						"thai": "จุดจบ... ข้าจะเป็นผู้กำหนด",
						"hindi": "अंत... मैं तय करता हूँ।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "finn",
					"spot": [
						2,
						2
					],
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "잘했어. 하지만… 아직 끝나지 않았어.",
						"english": "Well done. But... it's not over yet.",
						"japanese": "よくやった。だが…まだ終わっていない。",
						"chinese": "做得好。但是……还没结束。",
						"french": "Bien joué. Mais... ce n'est pas encore fini.",
						"spanish": "Bien hecho. Pero... aún no ha terminado.",
						"vietnamese": "Làm tốt lắm. Nhưng... vẫn chưa kết thúc đâu.",
						"thai": "ทำได้ดีมาก แต่... ยังไม่จบแค่นี้หรอก",
						"hindi": "शाबाश। लेकिन... अभी खत्म नहीं हुआ।"
					},
					"speaker": "finn"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "차가운 바람 속 푸른 아우라는 사라졌지만, 더 깊은 한기가 느껴졌다.",
						"english": "The blue aura in the cold wind vanished, but a deeper chill was felt.",
						"japanese": "冷たい風の中の青いオーラは消えたが、より深い寒気が感じられた。",
						"chinese": "寒风中的蓝色光环消失了，但更深的寒意袭来。",
						"french": "L'aura bleue dans le vent froid disparut, mais une froideur plus profonde fut ressentie.",
						"spanish": "El aura azul en el viento frío desapareció, pero se sintió un frío más profundo.",
						"vietnamese": "Ánh sáng xanh lam trong gió lạnh biến mất, nhưng một luồng khí lạnh sâu hơn lại ùa đến.",
						"thai": "ออร่าสีน้ำเงินในสายลมหนาวหายไป แต่สัมผัสเย็นยะเยือกที่ลึกซึ้งกว่ากลับปรากฏขึ้น",
						"hindi": "ठंडी हवा में नीली आभा गायब हो गई, लेकिन एक गहरी ठंड महसूस हुई।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "진정한 얼음 심장은… 아직도 뛰고 있었다.",
						"english": "The true ice heart... was still beating.",
						"japanese": "「真の氷の心臓は…まだ鼓動していた。」",
						"chinese": "真正的冰之心…仍在跳动。",
						"french": "Le véritable cœur de glace... battait toujours.",
						"spanish": "El verdadero corazón de hielo... todavía latía.",
						"vietnamese": "Trái tim băng giá thật sự... vẫn còn đập.",
						"thai": "หัวใจน้ำแข็งที่แท้จริง... ยังคงเต้นอยู่",
						"hindi": "असली बर्फीला दिल... अभी भी धड़क रहा था।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	]
} as const;
