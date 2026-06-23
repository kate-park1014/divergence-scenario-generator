export const scenario_snowy_chrysalis_55_05 = {
	"scenario_id": "snowy_chrysalis_55_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "snowy",
	"actors": {
		"anuk": {
			"id": "mon_8736797d-779a-4748-8633-d15c1eaf9be7",
			"name": {
				"korean": "아눅",
				"english": "Anuk",
				"japanese": "アヌーク",
				"chinese": "阿努克",
				"french": "Anuk",
				"spanish": "Anuk",
				"vietnamese": "Anuk",
				"thai": "อนุก",
				"hindi": "अनुक"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/19485274-e873-45c8-5043-f4ff65aa2a00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9a79ecfd-8cc6-4461-3790-763822522500/public"
		}
	},
	"boss": {
		"pool_id": "pool_IcyMirage_Chrysalis_V1"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "거대한 오로라 결정체가 눈앞에 펼쳐졌다. 장엄하고, 동시에 끔찍했다.",
						"english": "A colossal aurora crystal unfolded before my eyes. Majestic, yet terrifying.",
						"japanese": "巨大なオーロラの結晶が目の前に広がった。荘厳で、同時に恐ろしかった。",
						"chinese": "巨大的极光结晶体在我眼前展开。庄严而又恐怖。",
						"french": "Un gigantesque cristal d'aurore s'est déployé devant mes yeux. Majestueux et, à la fois, terrifiant.",
						"spanish": "Un cristal colosal de aurora se desplegó ante mis ojos. Majestuoso y, a la vez, aterrador.",
						"vietnamese": "Một tinh thể cực quang khổng lồ hiện ra trước mắt. Hùng vĩ, nhưng đồng thời cũng kinh hoàng.",
						"thai": "ผลึกแสงเหนือขนาดยักษ์ปรากฏขึ้นตรงหน้า งดงามและน่าสะพรึงกลัวไปพร้อมกัน",
						"hindi": "एक विशाल अरोरा क्रिस्टल मेरी आँखों के सामने फैल गया। राजसी, फिर भी भयावह।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "이것이… 안식처인가?",
						"english": "Is this... a sanctuary?",
						"japanese": "これが…安息の地か？",
						"chinese": "这里是…避难所吗？",
						"french": "Est-ce... un refuge ?",
						"spanish": "¿Es esto... un santuario?",
						"vietnamese": "Đây có phải là... nơi trú ẩn?",
						"thai": "นี่คือ... ที่หลบภัยหรือ?",
						"hindi": "क्या यह... कोई आश्रय है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"speaker": "anuk"
				},
				{
					"content": {
						"korean": "그래. 이곳이 바로 너희가 찾던 안식처.",
						"english": "Yes. This is the sanctuary you sought.",
						"japanese": "そうだ。ここがお前たちが探していた安息の地だ。",
						"chinese": "是的。这里就是你们寻找的避难所。",
						"french": "Oui. C'est le refuge que vous cherchiez.",
						"spanish": "Sí. Este es el santuario que buscabais.",
						"vietnamese": "Phải. Đây chính là nơi trú ẩn các ngươi tìm kiếm.",
						"thai": "ใช่ ที่นี่คือที่หลบภัยที่พวกเจ้าตามหา",
						"hindi": "हाँ। यही वह आश्रय है जिसे तुम ढूँढ़ रहे थे।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "anuk"
				},
				{
					"content": {
						"korean": "두려워 말고, 다가서라.",
						"english": "Fear not, approach.",
						"japanese": "恐れるな、近づけ。",
						"chinese": "别害怕，走过来。",
						"french": "N'ayez crainte, approchez.",
						"spanish": "No temáis, acercaos.",
						"vietnamese": "Đừng sợ, hãy đến gần.",
						"thai": "อย่ากลัว จงเข้ามาใกล้",
						"hindi": "डरो मत, पास आओ।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "anuk"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "anuk",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "느껴지는가? 영혼의 평화가.",
						"english": "Do you feel it? The peace of the soul.",
						"japanese": "感じるか？魂の安らぎを。",
						"chinese": "感受到了吗？灵魂的平静。",
						"french": "Le sentez-vous ? La paix de l'âme.",
						"spanish": "¿Lo sentís? La paz del alma.",
						"vietnamese": "Ngươi có cảm nhận được không? Sự bình yên của tâm hồn.",
						"thai": "เจ้าสัมผัสได้ไหม? ความสงบของวิญญาณ",
						"hindi": "क्या तुम महसूस करते हो? आत्मा की शांति।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "결정체에… 금이 간 것 같아.",
						"english": "The crystal... it seems to be cracked.",
						"japanese": "結晶に…ヒビが入っているみたいだ。",
						"chinese": "结晶上…好像有裂痕。",
						"french": "Le cristal... semble fissuré.",
						"spanish": "El cristal... parece agrietado.",
						"vietnamese": "Tinh thể... dường như có vết nứt.",
						"thai": "ผลึก... ดูเหมือนจะมีรอยร้าว",
						"hindi": "क्रिस्टल में… दरार दिख रही है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "오랜 시간 응축된 힘이다. 때로는 균열처럼 보이기도 하지.",
						"english": "It is power condensed over a long time. Sometimes it appears as cracks.",
						"japanese": "長い時間凝縮された力だ。時には亀裂のように見えることもある。",
						"chinese": "这是长时间凝聚的力量。有时会看起来像裂缝。",
						"french": "C'est une puissance condensée sur une longue période. Parfois, cela ressemble à des fissures.",
						"spanish": "Es un poder condensado durante mucho tiempo. A veces parece una grieta.",
						"vietnamese": "Đó là sức mạnh được cô đọng qua thời gian dài. Đôi khi nó trông giống như vết nứt.",
						"thai": "นี่คือพลังที่ถูกอัดแน่นมาเป็นเวลานาน บางครั้งมันก็ดูเหมือนรอยร้าว",
						"hindi": "यह लंबे समय से संचित शक्ति है। कभी-कभी यह दरार जैसा दिखता है।"
					},
					"speaker": "anuk",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아니… 이건 뭔가 달라.",
						"english": "No... this is different somehow.",
						"japanese": "いや…これは何か違う。",
						"chinese": "不…这有些不同。",
						"french": "Non... c'est différent.",
						"spanish": "No... esto es diferente.",
						"vietnamese": "Không... cái này có gì đó khác.",
						"thai": "ไม่สิ... นี่มันแปลกออกไป",
						"hindi": "नहीं… यह कुछ अलग है।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "anuk",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						2
					]
				},
				{
					"emotion": "base",
					"content": {
						"korean": "왜 망설이는가? 너희의 안식처가 저기 있는데.",
						"english": "Why do you hesitate? Your sanctuary is right there.",
						"japanese": "なぜためらう？お前たちの安息の地はそこにあるのに。",
						"chinese": "为什么犹豫？你们的避难所就在那里。",
						"french": "Pourquoi hésitez-vous ? Votre refuge est juste là.",
						"spanish": "¿Por qué dudáis? Vuestro santuario está ahí.",
						"vietnamese": "Sao các ngươi còn chần chừ? Nơi trú ẩn của các ngươi ở ngay đó mà.",
						"thai": "ทำไมถึงลังเล? ที่หลบภัยของพวกเจ้าก็อยู่ตรงนั้นแล้ว",
						"hindi": "तुम क्यों हिचकिचा रहे हो? तुम्हारा आश्रय वहीं तो है।"
					},
					"speaker": "anuk",
					"type": "speech"
				},
				{
					"content": {
						"korean": "안에서… 뭔가 보여. 바이킹들의 형상 같아.",
						"english": "Inside... I see something. Shapes like Vikings.",
						"japanese": "中に…何か見える。ヴァイキングたちの姿のようだ。",
						"chinese": "里面…好像有什么东西。像是维京人的身影。",
						"french": "À l'intérieur... je vois quelque chose. Des formes comme des Vikings.",
						"spanish": "Dentro... veo algo. Formas como de vikingos.",
						"vietnamese": "Bên trong... ta thấy gì đó. Giống như hình dáng của các Viking.",
						"thai": "ข้างใน... มีบางอย่างให้เห็น รูปร่างเหมือนพวกไวกิ้ง",
						"hindi": "अंदर… कुछ दिख रहा है। वाइकिंग्स जैसी आकृतियाँ।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "결정체 표면에 균열이 가며, 고통스러운 형상들이 섬광처럼 스쳐 지나갔다.",
						"english": "Cracks appeared on the crystal surface, and agonizing figures flashed by like lightning.",
						"japanese": "結晶の表面に亀裂が入り、苦悶の表情を浮かべた姿が閃光のように通り過ぎた。",
						"chinese": "晶体表面出现了裂缝，痛苦的身影如闪电般一闪而过。",
						"french": "Des fissures sont apparues à la surface du cristal, et des formes agonisantes ont défilé comme des éclairs.",
						"spanish": "Aparecieron grietas en la superficie del cristal, y figuras agonizantes pasaron como un relámpago.",
						"vietnamese": "Các vết nứt xuất hiện trên bề mặt tinh thể, và những hình thù đau đớn lướt qua như tia chớp.",
						"thai": "รอยร้าวปรากฏขึ้นบนพื้นผิวของผลึก และร่างที่ทรมานก็แวบผ่านไปราวกับสายฟ้า",
						"hindi": "क्रिस्टल की सतह पर दरारें पड़ गईं, और पीड़ादायक आकृतियाँ बिजली की तरह कौंध गईं।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이 비명 소리… 오로라가 생명력을 빨아들이고 있어.",
						"english": "That scream... the aurora is draining their life force.",
						"japanese": "この悲鳴…オーロラが生命力を吸い取っている。",
						"chinese": "这尖叫声……极光正在吸取生命力。",
						"french": "Ce cri... l'aurore draine leur force vitale.",
						"spanish": "Ese grito... la aurora está drenando su fuerza vital.",
						"vietnamese": "Tiếng thét này… cực quang đang hút sinh lực.",
						"thai": "เสียงกรีดร้องนั่น... แสงเหนือกำลังดูดกลืนพลังชีวิต.",
						"hindi": "यह चीख... औरोरा जीवन शक्ति को सोख रही है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…그것은 영원한 안식을 위한 과정이다.",
						"english": "...It is a process for eternal rest.",
						"japanese": "…それは永遠の安息のための過程だ。",
						"chinese": "……那是为了永恒安息的过程。",
						"french": "...C'est un processus pour le repos éternel.",
						"spanish": "...Es un proceso para el descanso eterno.",
						"vietnamese": "...Đó là một quá trình để nghỉ ngơi vĩnh hằng.",
						"thai": "...มันคือกระบวนการสู่การพักผ่อนชั่วนิรันดร์.",
						"hindi": "...वह शाश्वत विश्राम की प्रक्रिया है।"
					},
					"speaker": "anuk",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						1,
						2
					],
					"speaker": "anuk"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이건 안식처가 아니야. 바이킹들이 포식자를 불러들인 금단의 의식!",
						"english": "This is no sanctuary. It's a forbidden ritual where Vikings summoned the predator!",
						"japanese": "ここは安息の地ではない。ヴァイキングが捕食者を呼び出した禁断の儀式だ！",
						"chinese": "这不是安息之地。这是维京人召唤捕食者的禁忌仪式！",
						"french": "Ce n'est pas un sanctuaire. C'est un rituel interdit où les Vikings ont invoqué le prédateur !",
						"spanish": "Esto no es un santuario. ¡Es un ritual prohibido donde los vikingos invocaron al depredador!",
						"vietnamese": "Đây không phải nơi trú ẩn. Đây là nghi lễ cấm kỵ nơi các Viking triệu hồi kẻ săn mồi!",
						"thai": "นี่ไม่ใช่ที่หลบภัย. มันคืองานพิธีต้องห้ามที่พวกไวกิ้งอัญเชิญนักล่ามา!",
						"hindi": "यह कोई अभयारण्य नहीं है। यह एक वर्जित अनुष्ठान है जहाँ वाइकिंग्स ने शिकारी को बुलाया था!"
					}
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그래. 율법은 지켜졌지. 계약은 이행되었다.",
						"english": "Yes. The law was upheld. The pact was fulfilled.",
						"japanese": "ああ。律法は守られた。契約は果たされた。",
						"chinese": "是的。律法已遵守。契约已履行。",
						"french": "Oui. La loi fut respectée. Le pacte fut honoré.",
						"spanish": "Sí. La ley fue cumplida. El pacto fue sellado.",
						"vietnamese": "Phải. Luật pháp đã được giữ. Giao ước đã được thực hiện.",
						"thai": "ใช่ กฎหมายถูกรักษาไว้ สัญญาก็ถูกทำให้สำเร็จ.",
						"hindi": "हाँ। नियम का पालन किया गया। अनुबंध पूरा हुआ।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "당신… 당신도 알고 있었어?",
						"english": "You... you knew too?",
						"japanese": "お前…お前も知っていたのか？",
						"chinese": "你……你也知道？",
						"french": "Toi... tu savais aussi ?",
						"spanish": "¿Tú... tú también lo sabías?",
						"vietnamese": "Ngươi… ngươi cũng biết sao?",
						"thai": "เจ้า... เจ้าก็รู้ด้วยหรือ?",
						"hindi": "तुम... तुम भी जानते थे?"
					}
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "나는 그저, 이 겨울이 영원하길 바랄 뿐이다.",
						"english": "I merely wish for this winter to last forever.",
						"japanese": "私はただ、この冬が永遠に続くことを願うだけだ。",
						"chinese": "我只是希望，这个冬天能永远持续下去。",
						"french": "Je ne fais que souhaiter que cet hiver dure éternellement.",
						"spanish": "Solo deseo que este invierno dure para siempre.",
						"vietnamese": "Ta chỉ mong mùa đông này kéo dài mãi mãi.",
						"thai": "ข้าเพียงแค่หวังให้ฤดูหนาวนี้คงอยู่ตลอดไป.",
						"hindi": "मैं बस चाहता हूँ कि यह सर्दी हमेशा के लिए रहे।"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아눅의 차가운 미소. 그 뒤로 결정체의 빛이 더욱 강렬해졌다.",
						"english": "Anuk's cold smile. Behind it, the crystal's light grew even more intense.",
						"japanese": "アヌークの冷たい微笑み。その背後で、結晶の光はさらに強烈になった。",
						"chinese": "阿努克的冰冷微笑。在她身后，结晶体的光芒变得更加强烈。",
						"french": "Le sourire froid d'Anuk. Derrière elle, la lumière du cristal devint encore plus intense.",
						"spanish": "La fría sonrisa de Anuk. Detrás de ella, la luz del cristal se hizo aún más intensa.",
						"vietnamese": "Nụ cười lạnh lùng của Anuk. Đằng sau đó, ánh sáng của tinh thể càng trở nên mạnh mẽ hơn.",
						"thai": "รอยยิ้มเยือกเย็นของอนุก. เบื้องหลังรอยยิ้มนั้น แสงของผลึกยิ่งทวีความเข้มข้นขึ้น.",
						"hindi": "अनुक की ठंडी मुस्कान। उसके पीछे, क्रिस्टल की रोशनी और भी तीव्र हो गई।"
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "어리석은 것들. 너희의 온기는… 나의 영원한 겨울을 위한 것이다.",
						"english": "Foolish beings. Your warmth... is for my eternal winter.",
						"japanese": "「愚かな者たちめ。お前たちの温もりは…我が永遠の冬のためにあるのだ。」",
						"chinese": "愚蠢的东西。你们的温暖……是为了我的永恒之冬。",
						"french": "Êtres insensés. Votre chaleur... est pour mon hiver éternel.",
						"spanish": "Seres necios. Vuestro calor... es para mi invierno eterno.",
						"vietnamese": "Những kẻ ngốc. Hơi ấm của các ngươi... là dành cho mùa đông vĩnh cửu của ta.",
						"thai": "เจ้าพวกโง่เขลา ความอบอุ่นของเจ้า... มีไว้สำหรับฤดูหนาวอันเป็นนิรันดร์ของข้า",
						"hindi": "मूर्ख प्राणी। तुम्हारी गर्माहट... मेरी अनंत सर्दी के लिए है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "boss"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아직… 끝나지 않았어. 포기하지 않아.",
						"english": "It's not... over yet. I won't give up.",
						"japanese": "「まだ…終わってない。諦めない。」",
						"chinese": "还没……结束。我不会放弃。",
						"french": "Ce n'est pas... encore fini. Je n'abandonnerai pas.",
						"spanish": "Todavía no... ha terminado. No me rendiré.",
						"vietnamese": "Chưa... kết thúc. Ta sẽ không từ bỏ.",
						"thai": "ยัง... ไม่จบ. จะไม่ยอมแพ้.",
						"hindi": "अभी... खत्म नहीं हुआ है। मैं हार नहीं मानूँगा।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "차가운 얼음 촉수들이 탐험대를 휘감았다. 그러나 그들의 의지는 꺾이지 않았다.",
						"english": "Cold ice tentacles wrapped around the expedition team. But their will remained unbroken.",
						"japanese": "「冷たい氷の触手が探検隊を締め付けた。しかし、彼らの意思は折れなかった。」",
						"chinese": "冰冷的冰触手缠绕着探险队。然而，他们的意志并未被击垮。",
						"french": "De froids tentacules de glace enveloppèrent l'équipe d'expédition. Mais leur volonté resta inébranlable.",
						"spanish": "Fríos tentáculos de hielo envolvieron al equipo de expedición. Pero su voluntad permaneció inquebrantable.",
						"vietnamese": "Những xúc tu băng giá lạnh lẽo quấn quanh đội thám hiểm. Nhưng ý chí của họ vẫn không bị bẻ gãy.",
						"thai": "หนวดน้ำแข็งเย็นเยียบรัดพันรอบทีมสำรวจ แต่เจตจำนงของพวกเขาไม่หักโค่น",
						"hindi": "बर्फ के ठंडे तंबूओं ने अभियान दल को घेर लिया। लेकिन उनकी इच्छाशक्ति अटूट रही।"
					},
					"emotion": "base"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "anuk"
				},
				{
					"content": {
						"korean": "이곳이 바로 너희들의 안식처다… 영원히 얼어붙을 지옥!",
						"english": "This is your sanctuary... a hell frozen forever!",
						"japanese": "ここがお前たちの安息の地だ…永遠に凍りつく地獄！",
						"chinese": "这里就是你们的安息之地……一个永远冻结的地狱！",
						"french": "Voici votre sanctuaire... un enfer gelé pour l'éternité !",
						"spanish": "Este es vuestro santuario... ¡un infierno congelado para siempre!",
						"vietnamese": "Đây chính là nơi trú ẩn của các ngươi… một địa ngục đóng băng vĩnh viễn!",
						"thai": "ที่นี่คือที่หลบภัยของพวกเจ้า... นรกที่เยือกแข็งชั่วนิรันดร์!",
						"hindi": "यह तुम्हारा अभयारण्य है... हमेशा के लिए जमा हुआ नरक!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "anuk"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "결정체에 균열이 가며 내부에 갇혔던 바이킹들의 형상들이 스쳐 지나갔다. 그 순간, 끔찍한 비명과 함께 본체가 튀어나왔다.",
						"english": "Cracks appeared in the crystal, and the forms of trapped Vikings flashed by. At that moment, with a horrifying scream, the main body burst forth.",
						"japanese": "結晶体に亀裂が入り、中に閉じ込められていたヴァイキングたちの姿がかすめた。その瞬間、恐ろしい悲鳴と共に本体が飛び出した。",
						"chinese": "结晶体上出现裂缝，被困维京人的身影一闪而过。那一刻，伴随着可怕的尖叫声，本体猛地冲了出来。",
						"french": "Des fissures apparurent dans le cristal, et les formes des Vikings piégés défilèrent. À cet instant, avec un hurlement terrifiant, le corps principal jaillit.",
						"spanish": "Aparecieron grietas en el cristal, y las formas de los vikingos atrapados pasaron fugazmente. En ese momento, con un grito horrible, el cuerpo principal irrumpió.",
						"vietnamese": "Các vết nứt xuất hiện trên tinh thể, và những hình dạng của các Viking bị mắc kẹt lướt qua. Ngay lúc đó, với một tiếng thét kinh hoàng, bản thể chính vọt ra.",
						"thai": "รอยร้าวปรากฏขึ้นบนผลึก ร่างของพวกไวกิ้งที่ถูกขังอยู่ภายในปรากฏแวบขึ้นมา. ในวินาทีนั้น ร่างหลักก็พุ่งออกมาพร้อมกับเสียงกรีดร้องอันน่าสะพรึงกลัว.",
						"hindi": "क्रिस्टल में दरारें पड़ गईं, और फंसे हुए वाइकिंग्स के रूप चमक उठे। उसी क्षण, एक भयानक चीख के साथ, मुख्य शरीर बाहर निकल आया।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그대들의 온기, 그대들의 기억, 그 모든 것이 나의 영원한 겨울을 위한 양분이 될지니!",
						"english": "Your warmth, your memories, all of it shall be nourishment for my eternal winter!",
						"japanese": "お前たちの温もり、お前たちの記憶、その全てが我が永遠の冬のための糧となるだろう！",
						"chinese": "你们的温暖，你们的记忆，所有的一切都将成为我永恒冬天的养分！",
						"french": "Votre chaleur, vos souvenirs, tout cela servira de nourriture à mon hiver éternel !",
						"spanish": "¡Vuestro calor, vuestros recuerdos, todo ello será alimento para mi invierno eterno!",
						"vietnamese": "Hơi ấm của các ngươi, ký ức của các ngươi, tất cả sẽ là dưỡng chất cho mùa đông vĩnh cửu của ta!",
						"thai": "ความอบอุ่นของพวกเจ้า ความทรงจำของพวกเจ้า ทั้งหมดนี้จะเป็นอาหารหล่อเลี้ยงฤดูหนาวชั่วนิรันดร์ของข้า!",
						"hindi": "तुम्हारी गर्माहट, तुम्हारी यादें, वह सब मेरी शाश्वत सर्दी के लिए पोषण बनेगा!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이 괴물…!",
						"english": "This monster...!",
						"japanese": "この怪物め…！",
						"chinese": "这怪物…！",
						"french": "Ce monstre… !",
						"spanish": "¡Este monstruo...!",
						"vietnamese": "Quái vật này...!",
						"thai": "สัตว์ประหลาดนี่...!",
						"hindi": "यह राक्षस...!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "anuk",
					"action": "exit",
					"duration_ms": 400,
					"type": "direction",
					"direction": "down"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "…겨울은 영원할 것이다. 너희의 온기는… 나의 양분이 될지니.",
						"english": "...Winter will be eternal. Your warmth... shall be my sustenance.",
						"japanese": "「…冬は永遠なり。お前たちの温もりは…我が糧となるだろう。」",
						"chinese": "“……冬天将是永恒的。你们的温暖……将成为我的养分。”",
						"french": "...L'hiver sera éternel. Votre chaleur... sera ma subsistance.",
						"spanish": "...El invierno será eterno. Vuestro calor... será mi sustento.",
						"vietnamese": "...Mùa đông sẽ vĩnh cửu. Hơi ấm của các ngươi... sẽ là chất dinh dưỡng của ta.",
						"thai": "...ฤดูหนาวจะคงอยู่ชั่วนิรันดร์ ความอบอุ่นของเจ้า... จะเป็นอาหารของข้า",
						"hindi": "...सर्दी अनंत होगी। तुम्हारी गर्माहट... मेरा पोषण बनेगी।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "끝났나? 아니… 아직 차가워.",
						"english": "Is it over? No... it's still cold.",
						"japanese": "「終わったのか？いや…まだ冷たい。」",
						"chinese": "结束了吗？不…… still cold。",
						"french": "C'est fini ? Non... il fait encore froid.",
						"spanish": "¿Se acabó? No... todavía hace frío.",
						"vietnamese": "Kết thúc rồi sao? Không... vẫn còn lạnh.",
						"thai": "จบแล้วหรือ? ไม่... ยังหนาวอยู่เลย",
						"hindi": "क्या यह खत्म हो गया? नहीं... अभी भी ठंडा है।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "결정체는 부서졌으나, 싸늘한 기운은 사라지지 않았다.",
						"english": "The crystal shattered, but the chilling aura remained.",
						"japanese": "「結晶は砕けたが、冷気は消えなかった。」",
						"chinese": "结晶碎裂了，但冰冷的寒意并未消散。",
						"french": "Le cristal se brisa, mais l'aura glaciale persista.",
						"spanish": "El cristal se hizo añicos, pero el aura escalofriante permaneció.",
						"vietnamese": "Kết tinh đã vỡ, nhưng khí lạnh vẫn không tan biến.",
						"thai": "ผลึกแตกสลาย แต่ไอเย็นยังไม่จางหาย",
						"hindi": "क्रিস্টल टूट गया, लेकिन ठंडी आभा बनी रही।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "영원한 겨울의 서막이… 이제 막 시작된 것 같았다.",
						"english": "The prelude to an eternal winter... seemed to have just begun.",
						"japanese": "「永遠の冬の序幕が…今、始まったかのようだった。」",
						"chinese": "永恒之冬的序幕……似乎才刚刚拉开。",
						"french": "Le prélude d'un hiver éternel... semblait n'avoir fait que commencer.",
						"spanish": "El preludio de un invierno eterno... parecía haber comenzado.",
						"vietnamese": "Khúc dạo đầu của một mùa đông vĩnh cửu... dường như vừa mới bắt đầu.",
						"thai": "ปฐมบทแห่งฤดูหนาวอันเป็นนิรันดร์... เพิ่งจะเริ่มต้นขึ้น",
						"hindi": "एक अनंत सर्दी की प्रस्तावना... अभी शुरू हुई लग रही थी।"
					},
					"emotion": "base"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"차가운 정적이 모든 것을 덮었다.",
			"무엇이 구원이고 무엇이 침해였을까.",
			"얼어붙은 기억 속, 희미한 온기가 느껴졌다.",
			"그러나 이 겨울은 끝나지 않았다."
		],
		"english": [
			"A cold silence enveloped everything.",
			"What was salvation, and what was transgression?",
			"In frozen memories, a faint warmth was felt.",
			"But this winter has not ended."
		],
		"japanese": [
			"冷たい静寂がすべてを覆った。",
			"何が救済で、何が侵害だったのだろうか。",
			"凍てついた記憶の中、微かな温もりが感じられた。",
			"しかし、この冬は終わらなかった。"
		],
		"chinese": [
			"冰冷的寂静笼罩了一切。",
			"何为救赎，何为侵犯？",
			"在冰封的记忆中，一丝微弱的暖意被感受到。",
			"然而，这个冬天尚未结束。"
		],
		"french": [
			"Un silence froid a tout enveloppé.",
			"Qu'était le salut, et qu'était la transgression ?",
			"Au cœur des souvenirs gelés, une faible chaleur se fit sentir.",
			"Mais cet hiver n'est pas terminé."
		],
		"spanish": [
			"Un frío silencio lo envolvió todo.",
			"¿Qué fue salvación y qué fue transgresión?",
			"En los recuerdos congelados, se sintió un leve calor.",
			"Pero este invierno no ha terminado."
		],
		"vietnamese": [
			"Một sự tĩnh lặng lạnh lẽo bao trùm mọi thứ.",
			"Điều gì là cứu rỗi, điều gì là xâm phạm?",
			"Trong ký ức đóng băng, một chút hơi ấm mờ nhạt được cảm nhận.",
			"Nhưng mùa đông này vẫn chưa kết thúc."
		],
		"thai": [
			"ความเงียบสงบที่เยือกเย็นปกคลุมทุกสิ่ง",
			"อะไรคือความรอด และอะไรคือการละเมิด",
			"ในความทรงจำที่เยือกแข็ง สัมผัสได้ถึงความอบอุ่นที่เลือนลาง",
			"แต่ฤดูหนาวนี้ยังไม่สิ้นสุด"
		],
		"hindi": [
			"एक ठंडी खामोशी ने सब कुछ ढक लिया।",
			"क्या मोक्ष था और क्या अतिक्रमण?",
			"जमी हुई यादों में, एक हल्की गर्माहट महसूस हुई।",
			"लेकिन यह सर्दी खत्म नहीं हुई है।"
		]
	},
	"prologue": {
		"korean": [
			"안식처는 없었다. 그저 거대한 환영.",
			"영원한 겨울은 모든 것을 집어삼키려 한다.",
			"희망이라 믿었던 오로라는… 가장 잔혹한 함정이었다.",
			"이제, 그 차가운 진실과 마주할 시간.",
			"생존을 위한 최후의 발버둥이 시작된다."
		],
		"english": [
			"No sanctuary. Only a grand illusion.",
			"The eternal winter threatens to swallow all.",
			"The aurora, once believed to be hope… was the cruellest trap.",
			"Now, it's time to face that cold truth.",
			"The final struggle for survival begins."
		],
		"japanese": [
			"安息の地はなかった。ただ、巨大な幻影がそこにあるだけだった。",
			"永遠の冬が、すべてを飲み込もうとしている。",
			"希望と信じたオーロラは… 最も残酷な罠だった。",
			"今、その冷たい真実と向き合う時。",
			"生存のための最後の足掻きが始まる。"
		],
		"chinese": [
			"没有安息之地。只有巨大的幻象。",
			"永恒的冬季即将吞噬一切。",
			"曾被认为是希望的极光……却是最残酷的陷阱。",
			"如今，是时候面对那冰冷的真相了。",
			"为生存而战的最后挣扎开始了。"
		],
		"french": [
			"Pas de sanctuaire. Juste une immense illusion.",
			"L'hiver éternel menace d'engloutir tout.",
			"L'aurore, que nous croyions être l'espoir… était le piège le plus cruel.",
			"Maintenant, il est temps d'affronter cette froide vérité.",
			"La dernière lutte pour la survie commence."
		],
		"spanish": [
			"No había santuario. Solo una gran ilusión.",
			"El invierno eterno amenaza con tragarse todo.",
			"La aurora, que creíamos era la esperanza… fue la trampa más cruel.",
			"Ahora, es hora de enfrentar esa fría verdad.",
			"La lucha final por la supervivencia comienza."
		],
		"vietnamese": [
			"Không có nơi trú ẩn. Chỉ là một ảo ảnh khổng lồ.",
			"Mùa đông vĩnh cửu đang nuốt chửng mọi thứ.",
			"Cực quang, thứ từng được tin là hy vọng… lại là cái bẫy tàn khốc nhất.",
			"Giờ là lúc đối mặt với sự thật lạnh giá ấy.",
			"Cuộc giãy giụa cuối cùng để sinh tồn bắt đầu."
		],
		"thai": [
			"ไม่มีที่หลบภัย มีแต่ภาพลวงตาอันยิ่งใหญ่",
			"ฤดูหนาวนิรันดร์กำลังจะกลืนกินทุกสิ่ง",
			"แสงเหนือที่เคยเชื่อว่าเป็นความหวัง...กลับกลายเป็นกับดักที่โหดร้ายที่สุด",
			"บัดนี้ ได้เวลาเผชิญหน้ากับความจริงอันเยือกเย็นนั้นแล้ว",
			"การดิ้นรนครั้งสุดท้ายเพื่อความอยู่รอดเริ่มต้นขึ้นแล้ว"
		],
		"hindi": [
			"कोई अभयारण्य नहीं था। बस एक विशाल भ्रम।",
			"शाश्वत सर्दी सब कुछ निगलने वाली है।",
			"आशा समझी जाने वाली अरोरा… सबसे क्रूर जाल थी।",
			"अब, उस ठंडी सच्चाई का सामना करने का समय है।",
			"अस्तित्व के लिए अंतिम संघर्ष शुरू होता है।"
		]
	}
} as const;
