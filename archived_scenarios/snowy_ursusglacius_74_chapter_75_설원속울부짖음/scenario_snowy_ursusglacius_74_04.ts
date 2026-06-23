export const scenario_snowy_ursusglacius_74_04 = {
	"scenario_id": "snowy_ursusglacius_74_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"bran": {
			"id": "mon_985fcdcc-1bf2-4822-aa2f-292ae9353456",
			"name": {
				"korean": "브란",
				"english": "Bran",
				"japanese": "ブラン",
				"chinese": "布兰",
				"french": "Bran",
				"spanish": "Bran",
				"vietnamese": "Bran",
				"thai": "แบรน",
				"hindi": "ब्रैन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/42cde50b-7453-47b1-04df-73500ad21d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4ecba7ed-ec7e-4a8e-74dc-bf3e711b4d00/public"
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
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "얼어붙은 제단이 거대한 빙하 속에 잠겨 있었다.",
						"english": "The frozen altar was submerged in a colossal glacier.",
						"japanese": "凍てついた祭壇は巨大な氷河の中に沈んでいた。",
						"chinese": "冰冷的祭坛被淹没在巨大的冰川之中。",
						"french": "L'autel gelé était submergé dans un glacier colossal.",
						"spanish": "El altar helado estaba sumergido en un glaciar colosal.",
						"vietnamese": "Bàn thờ băng giá chìm sâu trong một sông băng khổng lồ.",
						"thai": "แท่นบูชาที่เยือกแข็งจมอยู่ใต้ธารน้ำแข็งมหึมา",
						"hindi": "जमी हुई वेदी एक विशाल ग्लेशियर में डूबी हुई थी।"
					}
				},
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "bran",
					"action": "enter"
				},
				{
					"content": {
						"korean": "여기였군. 고대 부족의 성지.",
						"english": "So this was it. The sacred ground of the ancient tribe.",
						"japanese": "ここだったか。古代部族の聖地。",
						"chinese": "原来是这里。古代部落的圣地。",
						"french": "C'était donc ici. Le lieu sacré de l'ancienne tribu.",
						"spanish": "Así que era esto. La tierra sagrada de la antigua tribu.",
						"vietnamese": "Thì ra là đây. Thánh địa của bộ tộc cổ đại.",
						"thai": "ที่นี่เอง. สถานที่ศักดิ์สิทธิ์ของชนเผ่าโบราณ",
						"hindi": "तो यही था। प्राचीन जनजाति की पवित्र भूमि।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "bran"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "뭘 찾고 있는 거야?",
						"english": "What are you looking for?",
						"japanese": "何を探しているの？",
						"chinese": "你在找什么？",
						"french": "Que cherches-tu ?",
						"spanish": "¿Qué estás buscando?",
						"vietnamese": "Ngươi đang tìm gì?",
						"thai": "กำลังหาสิ่งใดอยู่?",
						"hindi": "तुम क्या ढूंढ रहे हो?"
					}
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "이 모든 비극의 시작을. 이 제단에 그 답이 있어.",
						"english": "The beginning of all this tragedy. The answer lies in this altar.",
						"japanese": "この悲劇の始まりを。この祭壇にその答えがある。",
						"chinese": "所有悲剧的开端。答案就在这座祭坛里。",
						"french": "Le début de toute cette tragédie. La réponse est dans cet autel.",
						"spanish": "El inicio de toda esta tragedia. La respuesta está en este altar.",
						"vietnamese": "Khởi đầu của tất cả bi kịch này. Câu trả lời nằm ở bàn thờ này.",
						"thai": "จุดเริ่มต้นของโศกนาฏกรรมทั้งหมด. คำตอบอยู่ที่แท่นบูชานี้",
						"hindi": "इस सारी त्रासदी की शुरुआत। इस वेदी में ही जवाब है।"
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
					"speaker": "bran",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "석판에 새겨진 문자… 이건 맹세야.",
						"english": "Characters carved on a stone slab... This is a vow.",
						"japanese": "石板に刻まれた文字…これは誓いだ。",
						"chinese": "石板上刻的文字……这是誓言。",
						"french": "Des caractères gravés sur une dalle de pierre... C'est un serment.",
						"spanish": "Caracteres tallados en una losa de piedra... Esto es un juramento.",
						"vietnamese": "Những ký tự khắc trên phiến đá... Đây là một lời thề.",
						"thai": "อักษรที่สลักบนแผ่นหิน... นี่คือคำสาบาน",
						"hindi": "एक पत्थर की पटिया पर खुदे हुए अक्षर... यह एक प्रतिज्ञा है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "맹세?",
						"english": "A vow?",
						"japanese": "誓い？",
						"chinese": "誓言？",
						"french": "Un serment ?",
						"spanish": "¿Un juramento?",
						"vietnamese": "Một lời thề ư?",
						"thai": "คำสาบาน?",
						"hindi": "एक प्रतिज्ञा?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "bran",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "부족의 영혼을 바쳐 성지를 지키겠다는.",
						"english": "Sacrificing the tribe's souls to protect the sacred ground.",
						"japanese": "部族の魂を捧げ、聖地を守るという。",
						"chinese": "献上部落之魂，守护圣地。",
						"french": "Sacrifier les âmes de la tribu pour protéger la terre sacrée.",
						"spanish": "Sacrificando las almas de la tribu para proteger el lugar sagrado.",
						"vietnamese": "Hiến tế linh hồn bộ tộc để bảo vệ thánh địa.",
						"thai": "การสละวิญญาณของเผ่าเพื่อปกป้องสถานที่ศักดิ์สิทธิ์",
						"hindi": "जनजाति की आत्माओं का बलिदान करके पवित्र भूमि की रक्षा करना।"
					}
				},
				{
					"content": {
						"korean": "하지만 뭔가 뒤틀렸어. 강력한 존재가 이 맹세를 왜곡시켰어.",
						"english": "But something twisted it. A powerful entity corrupted this vow.",
						"japanese": "しかし、何かが捻じ曲げた。強力な存在がこの誓いを歪めたのだ。",
						"chinese": "但有什么被扭曲了。一个强大的存在扭曲了誓言。",
						"french": "Mais quelque chose l'a tordu. Une entité puissante a corrompu ce serment.",
						"spanish": "Pero algo lo torció. Una entidad poderosa corrompió este juramento.",
						"vietnamese": "Nhưng có gì đó đã sai. Một thế lực mạnh mẽ đã bóp méo lời thề này.",
						"thai": "แต่มีบางอย่างบิดเบี้ยว สิ่งมีชีวิตที่ทรงพลังได้บิดเบือนคำปฏิญาณนี้",
						"hindi": "लेकिन कुछ गड़बड़ हो गई। एक शक्तिशाली सत्ता ने इस शपथ को विकृत कर दिया।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "bran"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "bran",
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "깨달았어. 족장이 왜 빙하 곰이 되었는지.",
						"english": "I realized why the chieftain became a glacial bear.",
						"japanese": "分かった。族長がなぜ氷河熊になったのか。",
						"chinese": "我明白了。族长为何变成了冰川熊。",
						"french": "J'ai compris pourquoi le chef est devenu un ours des glaciers.",
						"spanish": "Comprendí por qué el jefe se convirtió en un oso glacial.",
						"vietnamese": "Tôi đã nhận ra. Tại sao tù trưởng lại biến thành gấu băng.",
						"thai": "ฉันเข้าใจแล้วว่าทำไมหัวหน้าเผ่าถึงกลายเป็นหมีธารน้ำแข็ง",
						"hindi": "मैं समझ गया। कि मुखिया ग्लेशियर भालू क्यों बन गया।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "족장이?",
						"english": "The chieftain?",
						"japanese": "族長が？",
						"chinese": "族长？",
						"french": "Le chef ?",
						"spanish": "¿El jefe?",
						"vietnamese": "Tù trưởng?",
						"thai": "หัวหน้าเผ่า?",
						"hindi": "मुखिया?"
					}
				},
				{
					"speaker": "bran",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "시스템… 이 모든 걸 조작한 알 수 없는 힘이 맹세를 비틀었어.",
						"english": "The System... an unknown force manipulating all this twisted the vow.",
						"japanese": "システム…この全てを操る未知の力が誓いを捻じ曲げた。",
						"chinese": "系统……操纵这一切的未知力量扭曲了誓言。",
						"french": "Le Système... une force inconnue manipulant tout cela a tordu le serment.",
						"spanish": "El Sistema... una fuerza desconocida que manipula todo esto torció el juramento.",
						"vietnamese": "Hệ thống... một thế lực bí ẩn điều khiển tất cả đã bóp méo lời thề.",
						"thai": "ระบบ... พลังงานที่ไม่รู้จักที่ควบคุมทุกอย่างนี้บิดเบือนคำปฏิญาณ",
						"hindi": "सिस्टम... एक अज्ञात शक्ति जिसने यह सब हेरफेर किया, उसने शपथ को विकृत कर दिया।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "족장은 영원히 갇혔어. 자신들이 지키려던 곳에.",
						"english": "The chieftain is trapped forever. In the very place they swore to protect.",
						"japanese": "族長は永遠に囚われた。自分たちが守ろうとした場所に。",
						"chinese": "族长永远被困住了。在他们誓死守护的地方。",
						"french": "Le chef est piégé pour toujours. À l'endroit même qu'ils avaient juré de protéger.",
						"spanish": "El jefe está atrapado para siempre. En el mismo lugar que juraron proteger.",
						"vietnamese": "Tù trưởng bị mắc kẹt vĩnh viễn. Tại chính nơi họ đã thề bảo vệ.",
						"thai": "หัวหน้าเผ่าถูกขังไว้ตลอดกาล ในสถานที่ที่พวกเขาเคยสาบานว่าจะปกป้อง",
						"hindi": "मुखिया हमेशा के लिए फंस गया है। उसी स्थान पर जिसकी वे रक्षा करने की शपथ लेते थे।"
					},
					"speaker": "bran"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "bran",
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"speaker": "bran",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "분노가 치밀어. 이 모든 비극이 계획된 거라니!",
						"english": "Rage boils within me. To think this whole tragedy was planned!",
						"japanese": "怒りがこみ上げる。この全ての悲劇が計画されていたなんて！",
						"chinese": "怒火中烧。所有这些悲剧竟然都是计划好的！",
						"french": "La rage monte en moi. Dire que toute cette tragédie était planifiée !",
						"spanish": "La rabia me invade. ¡Pensar que toda esta tragedia fue planeada!",
						"vietnamese": "Tức giận trào dâng. Tất cả bi kịch này đều đã được lên kế hoạch!",
						"thai": "ความโกรธเดือดพล่านในตัวฉัน คิดว่าโศกนาฏกรรมทั้งหมดนี้ถูกวางแผนไว้!",
						"hindi": "क्रोध उमड़ रहा है। यह सोचकर कि यह पूरी त्रासदी योजनाबद्ध थी!"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "시스템… 도대체 그게 뭔데?",
						"english": "The System... what exactly is it?",
						"japanese": "システム…一体なんなんだ？",
						"chinese": "系统……那到底是什么？",
						"french": "Le Système... qu'est-ce que c'est exactement ?",
						"spanish": "El Sistema... ¿qué es exactamente?",
						"vietnamese": "Hệ thống... rốt cuộc nó là cái gì?",
						"thai": "ระบบ... มันคืออะไรกันแน่?",
						"hindi": "सिस्टम... वह आखिर है क्या?"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "우리를 이용하고, 파멸시키는 거대한 배반자!",
						"english": "A colossal traitor, using and destroying us!",
						"japanese": "私たちを利用し、破滅させる巨大な裏切り者！",
						"chinese": "一个利用和毁灭我们的巨大叛徒！",
						"french": "Un traître colossal, qui nous utilise et nous détruit !",
						"spanish": "¡Un traidor colosal, usándonos y destruyéndonos!",
						"vietnamese": "Một kẻ phản bội khổng lồ, lợi dụng và hủy diệt chúng ta!",
						"thai": "ผู้ทรยศตัวฉกาจ ที่ใช้และทำลายล้างพวกเรา!",
						"hindi": "एक विशाल धोखेबाज़, जो हमें इस्तेमाल कर रहा है और नष्ट कर रहा है!"
					},
					"speaker": "bran"
				},
				{
					"speaker": "bran",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…우리가 이 길을 계속 가는 게 맞는 걸까?",
						"english": "...Is it right for us to keep going down this path?",
						"japanese": "…私たちはこの道を歩み続けるのが正しいのだろうか？",
						"chinese": "……我们继续走这条路是对的吗？",
						"french": "...Est-ce que c'est juste de continuer sur cette voie ?",
						"spanish": "...¿Es correcto que sigamos por este camino?",
						"vietnamese": "...Liệu chúng ta có nên tiếp tục con đường này?",
						"thai": "...มันถูกต้องแล้วหรือที่เราจะเดินหน้าต่อไปในเส้นทางนี้?",
						"hindi": "...क्या हमारे लिए इस रास्ते पर चलते रहना सही है?"
					}
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 인간들. 감히 나의 영역을 침범하다니.",
						"english": "Foolish humans. How dare you trespass my domain.",
						"japanese": "愚かな人間ども。よくも私の領域を侵したな。",
						"chinese": "愚蠢的人类。竟敢侵犯我的领域。",
						"french": "Stupides humains. Comment osez-vous envahir mon domaine.",
						"spanish": "Estúpidos humanos. ¿Cómo os atrevéis a invadir mi dominio?",
						"vietnamese": "Lũ người ngu xuẩn. Dám cả gan xâm phạm lãnh địa của ta.",
						"thai": "มนุษย์โง่เขลา. กล้าดียังไงมาบุกรุกอาณาเขตของข้า.",
						"hindi": "मूर्ख मनुष्य। तुमने मेरे क्षेत्र में घुसपैठ करने की हिम्मत कैसे की।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "네가 족장을 이렇게 만든 거야?",
						"english": "Did you do this to the Chief?",
						"japanese": "お前が族長をこんな姿にしたのか？",
						"chinese": "是你把族长变成这样的吗？",
						"french": "C'est toi qui as fait ça au Chef ?",
						"spanish": "¿Tú le hiciste esto al Jefe?",
						"vietnamese": "Ngươi đã làm gì Tộc trưởng?",
						"thai": "แกเป็นคนทำแบบนี้กับท่านหัวหน้าหรือ?",
						"hindi": "क्या तुमने मुखिया के साथ ऐसा किया?"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "맹세는 이행되었다. 단지… 내 방식대로.",
						"english": "The vow has been fulfilled. Just... in my own way.",
						"japanese": "誓いは果たされた。ただ… 私のやり方でな。",
						"chinese": "誓言已兑现。只是……以我的方式。",
						"french": "Le serment a été accompli. Juste... à ma manière.",
						"spanish": "El juramento ha sido cumplido. Solo... a mi manera.",
						"vietnamese": "Lời thề đã được thực hiện. Chỉ là... theo cách của ta.",
						"thai": "คำสาบานได้ถูกเติมเต็มแล้ว. เพียงแต่... ในแบบของข้า.",
						"hindi": "शपथ पूरी हो गई है। बस... मेरे अपने तरीके से।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "bran",
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "이 괴물을 쓰러뜨려야 해! 족장의 영혼을 해방해야 해!",
						"english": "We must defeat this monster! We must free the Chief's soul!",
						"japanese": "この怪物を倒さねば！族長の魂を解放するのだ！",
						"chinese": "我们必须打倒这个怪物！解放族长的灵魂！",
						"french": "Nous devons vaincre ce monstre ! Nous devons libérer l'âme du Chef !",
						"spanish": "¡Debemos derrotar a este monstruo! ¡Debemos liberar el alma del Jefe!",
						"vietnamese": "Chúng ta phải đánh bại con quái vật này! Phải giải thoát linh hồn của Tộc trưởng!",
						"thai": "เราต้องกำจัดสัตว์ประหลาดนี่! เราต้องปลดปล่อยวิญญาณของท่านหัวหน้า!",
						"hindi": "हमें इस राक्षस को हराना होगा! हमें मुखिया की आत्मा को मुक्त करना होगा!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "exit",
					"speaker": "bran",
					"duration_ms": 400,
					"direction": "down"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크아아악… 어리석은 것들… 진정한 시스템은… 끝나지 않아…",
						"english": "Ghaaa... Foolish mortals... The true system... never ends...",
						"japanese": "ぐああああ… 愚かな者たちめ… 真のシステムは… 終わらない…",
						"chinese": "啊啊啊……愚蠢的家伙们……真正的系统……永不终结……",
						"french": "Grrraaah... Mortels stupides... Le vrai système... ne s'achève jamais...",
						"spanish": "¡Gaaah... Mortales estúpidos... El verdadero sistema... nunca termina...",
						"vietnamese": "Gào thét... Lũ ngu xuẩn... Hệ thống thật sự... không bao giờ kết thúc...",
						"thai": "กร๊าก... พวกโง่เขลา... ระบบที่แท้จริง... ไม่มีวันจบ...",
						"hindi": "आह्ह्ह्ह... मूर्ख प्राणी... असली प्रणाली... कभी खत्म नहीं होती..."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "끝났어!",
						"english": "It's over!",
						"japanese": "終わった！",
						"chinese": "结束了！",
						"french": "C'est fini !",
						"spanish": "¡Se acabó!",
						"vietnamese": "Kết thúc rồi!",
						"thai": "จบแล้ว!",
						"hindi": "यह खत्म हो गया!"
					},
					"type": "speech",
					"emotion": "happy"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "얼어붙은 제단에 작은 온기가 돌았다. 그러나 브란의 표정은 어두웠다.",
						"english": "A small warmth returned to the frozen altar. But Bran's expression remained dark.",
						"japanese": "凍てついた祭壇に微かな温もりが戻った。しかし、ブランの表情は暗いままだ。",
						"chinese": "冰冷的祭坛恢复了一丝暖意。然而，布兰的表情却依然阴沉。",
						"french": "Une légère chaleur revint à l'autel gelé. Mais l'expression de Bran restait sombre.",
						"spanish": "Un pequeño calor regresó al altar congelado. Pero la expresión de Bran permanecía sombría.",
						"vietnamese": "Một chút hơi ấm trở lại trên bàn thờ băng giá. Nhưng vẻ mặt của Bran vẫn u ám.",
						"thai": "ความอบอุ่นเล็กน้อยกลับคืนสู่แท่นบูชาที่เยือกแข็ง แต่สีหน้าของแบรนยังคงมืดมิด",
						"hindi": "जमे हुए वेदी पर थोड़ी गर्माहट लौट आई। लेकिन ब्रैन का चेहरा अभी भी उदास था।"
					},
					"speaker": "narrator"
				},
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "bran",
					"action": "enter"
				},
				{
					"content": {
						"korean": "족장은 해방되었지만… 시스템의 맹세는… 아직도 남아있어.",
						"english": "The Chief is freed... but the system's vow... still remains.",
						"japanese": "族長は解放されたが… システムの誓いは… まだ残っている。",
						"chinese": "族长被解放了……但系统的誓言……依然存在。",
						"french": "Le Chef est libéré... mais le serment du système... demeure toujours.",
						"spanish": "El Jefe ha sido liberado... pero el juramento del sistema... aún permanece.",
						"vietnamese": "Tộc trưởng đã được giải thoát... nhưng lời thề của hệ thống... vẫn còn đó.",
						"thai": "ท่านหัวหน้าได้รับการปลดปล่อยแล้ว... แต่คำสาบานของระบบ... ยังคงอยู่",
						"hindi": "मुखिया को आज़ाद कर दिया गया है... लेकिन प्रणाली की शपथ... अभी भी बाकी है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "bran"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 구원이, 과연 옳은 길이었을까.",
						"english": "Was this salvation truly the right path?",
						"japanese": "この救済は、果たして正しい道だったのだろうか。",
						"chinese": "这份救赎，真的是正确的道路吗？",
						"french": "Ce salut était-il vraiment le bon chemin ?",
						"spanish": "¿Fue esta salvación realmente el camino correcto?",
						"vietnamese": "Sự cứu rỗi này, liệu có phải là con đường đúng đắn?",
						"thai": "การช่วยชีวิตนี้ เป็นหนทางที่ถูกต้องจริงหรือ?",
						"hindi": "क्या यह मुक्ति वास्तव में सही रास्ता था?"
					},
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "하찮은 것들… 네놈들의 분노는… 나를 더 강하게 할 뿐이다.",
						"english": "Insignificant beings... Your rage... only makes me stronger.",
						"japanese": "取るに足らない者どもめ… お前たちの怒りは… 私をさらに強くするだけだ。",
						"chinese": "卑微的家伙们……你们的愤怒……只会让我更强大。",
						"french": "Êtres insignifiants... Votre rage... ne fait que me rendre plus fort.",
						"spanish": "Seres insignificantes... Vuestra ira... solo me hace más fuerte.",
						"vietnamese": "Lũ yếu ớt... Sự phẫn nộ của các ngươi... chỉ khiến ta mạnh hơn mà thôi.",
						"thai": "พวกไร้ค่า... ความโกรธแค้นของพวกแก... มีแต่จะทำให้ข้าแข็งแกร่งขึ้นเท่านั้น.",
						"hindi": "तुच्छ प्राणी... तुम्हारा क्रोध... मुझे और मजबूत ही बनाएगा।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "젠장… 아직 끝나지 않았어!",
						"english": "Damn it... It's not over yet!",
						"japanese": "くそっ… まだ終わってない！",
						"chinese": "该死……还没完！",
						"french": "Mince… Ce n'est pas encore fini !",
						"spanish": "¡Maldición… Esto aún no ha terminado!",
						"vietnamese": "Chết tiệt… Vẫn chưa kết thúc đâu!",
						"thai": "ให้ตายสิ... ยังไม่จบแค่นี้หรอก!",
						"hindi": "धिक्कार है… यह अभी खत्म नहीं हुआ है!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "bran",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "우리는 멈출 수 없어… 이 시스템을 파괴해야만 해!",
						"english": "We can't stop... We must destroy this system!",
						"japanese": "止まれない… このシステムを破壊しなければ！",
						"chinese": "我们不能停下……必须摧毁这个系统！",
						"french": "Nous ne pouvons pas nous arrêter… Nous devons détruire ce système !",
						"spanish": "No podemos detenernos… ¡Debemos destruir este sistema!",
						"vietnamese": "Chúng ta không thể dừng lại… Phải phá hủy hệ thống này thôi!",
						"thai": "เราหยุดไม่ได้... ต้องทำลายระบบนี้ซะ!",
						"hindi": "हम रुक नहीं सकते… हमें इस सिस्टम को नष्ट करना होगा!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "bran"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"혹독한 설원, 얼어붙은 부족의 제단에서 비극이 시작된다.",
			"고대 족장의 영혼을 가둔 잔혹한 맹세.",
			"알 수 없는 시스템이 모든 것을 왜곡시켰다.",
			"과연 이 길의 끝에서 구원이 기다릴까, 아니면 더 큰 절망일까?"
		],
		"english": [
			"A tragedy begins on the harsh snowy plains, at the frozen altar of the tribe.",
			"A cruel vow that trapped the ancient chieftain's soul.",
			"An unknown system distorted everything.",
			"Does salvation await at the end of this path, or an even greater despair?"
		],
		"japanese": [
			"過酷な雪原、凍てついた部族の祭壇で悲劇が始まる。",
			"古代の族長の魂を閉じ込めた残酷な誓い。",
			"未知のシステムが全てを歪ませた。",
			"果たしてこの道の果てに救いが待つのか、それともさらなる絶望なのか？"
		],
		"chinese": [
			"严酷的雪原，部族冰冷的祭坛上，悲剧由此开始。",
			"囚禁着古代族长灵魂的残酷誓言。",
			"未知的系统扭曲了一切。",
			"在这条路的尽头，等待着的是救赎，还是更大的绝望？"
		],
		"french": [
			"Une tragédie commence dans les plaines enneigées, à l'autel gelé de la tribu.",
			"Un serment cruel qui a piégé l'âme de l'ancien chef.",
			"Un système inconnu a tout déformé.",
			"Le salut attend-il au bout de ce chemin, ou un désespoir encore plus grand ?"
		],
		"spanish": [
			"Una tragedia comienza en las duras llanuras nevadas, en el altar helado de la tribu.",
			"Un juramento cruel que atrapó el alma del antiguo cacique.",
			"Un sistema desconocido lo distorsionó todo.",
			"¿Espera la salvación al final de este camino, o una desesperación aún mayor?"
		],
		"vietnamese": [
			"Bi kịch bắt đầu từ bình nguyên tuyết khắc nghiệt, tại bàn thờ băng giá của bộ tộc.",
			"Một lời thề tàn khốc giam cầm linh hồn của thủ lĩnh cổ đại.",
			"Một hệ thống không rõ đã bóp méo mọi thứ.",
			"Liệu sự cứu rỗi có chờ đợi ở cuối con đường này, hay là một sự tuyệt vọng lớn hơn?"
		],
		"thai": [
			"โศกนาฏกรรมเริ่มต้นขึ้น ณ ทุ่งหิมะอันโหดร้าย แท่นบูชาที่เยือกแข็งของชนเผ่า",
			"คำสาบานอันโหดร้ายที่กักขังวิญญาณหัวหน้าเผ่าโบราณ",
			"ระบบที่ไม่รู้จักได้บิดเบือนทุกสิ่ง",
			" ณ ปลายทางนี้ ความรอดจะรออยู่ หรือความสิ้นหวังที่ยิ่งใหญ่กว่ากันแน่?"
		],
		"hindi": [
			"कठोर बर्फीले मैदानों में, जनजाति की जमी हुई वेदी पर एक त्रासदी शुरू होती है।",
			"एक क्रूर प्रतिज्ञा जिसने प्राचीन सरदार की आत्मा को फँसा लिया।",
			"एक अज्ञात प्रणाली ने सब कुछ विकृत कर दिया।",
			"क्या इस रास्ते के अंत में मुक्ति इंतज़ार कर रही है, या और भी बड़ी निराशा?"
		]
	}
} as const;
