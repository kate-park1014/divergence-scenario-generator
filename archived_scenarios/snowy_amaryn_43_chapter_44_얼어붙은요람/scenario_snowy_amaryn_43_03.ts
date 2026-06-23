export const scenario_snowy_amaryn_43_03 = {
	"scenario_id": "snowy_amaryn_43_03",
	"order": 3,
	"act": "rising",
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
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "안식처의 깊은 곳으로 향했다. 여전히 따뜻한 온기가 감쌌다.",
						"english": "Ventured deeper into the sanctuary. A warm embrace still surrounded me.",
						"japanese": "安息所の奥深くへと進んだ。相変わらず温かい温もりに包まれていた。",
						"chinese": "我深入安息之所。温暖依旧环绕着我。",
						"french": "Je m'aventurai plus profondément dans le sanctuaire. Une chaleur douce m'enveloppait toujours.",
						"spanish": "Me adentré más en el santuario. Un cálido abrazo aún me envolvía.",
						"vietnamese": "Đi sâu hơn vào nơi ẩn náu. Hơi ấm vẫn bao trùm lấy tôi.",
						"thai": "เข้าไปลึกขึ้นในที่หลบภัย ความอบอุ่นยังคงโอบล้อมอยู่",
						"hindi": "मैंने अभयारण्य में गहराई तक प्रवेश किया। एक गर्म आलिंगन अभी भी मुझे घेरे हुए था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"spot": [
						4,
						3
					],
					"speaker": "anuk",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "이바르가 수상하다고 했지만... 이렇게 평화로운데.",
						"english": "Ivar said it was suspicious... but it's so peaceful here.",
						"japanese": "イヴァルは怪しいと言ったけど…こんなに平和なのに。",
						"chinese": "伊瓦尔说这很可疑…但这里如此平静。",
						"french": "Ivar a dit que c'était suspect... mais c'est si paisible ici.",
						"spanish": "Ivar dijo que era sospechoso... pero es tan pacífico aquí.",
						"vietnamese": "Ivar bảo nó đáng ngờ... nhưng ở đây thật yên bình.",
						"thai": "อีวาร์บอกว่ามันน่าสงสัย...แต่ที่นี่ช่างสงบเงียบ",
						"hindi": "इवार ने इसे संदिग्ध बताया था... लेकिन यहाँ इतनी शांति है।"
					},
					"emotion": "base",
					"speaker": "anuk",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "그래도 방심하면 안 돼.",
						"english": "Still, I can't let my guard down.",
						"japanese": "それでも、油断はできない。",
						"chinese": "即使如此，也不能放松警惕。",
						"french": "Malgré tout, je ne peux pas baisser ma garde.",
						"spanish": "Aun así, no puedo bajar la guardia.",
						"vietnamese": "Dù vậy, không thể lơ là.",
						"thai": "ถึงอย่างนั้นก็ยังประมาทไม่ได้",
						"hindi": "फिर भी, मुझे अपनी सतर्कता कम नहीं करनी चाहिए।"
					}
				},
				{
					"content": {
						"korean": "궁금한 게 너무 많아. 이 모든 게 어떻게 만들어진 걸까?",
						"english": "So many questions. How was all of this created?",
						"japanese": "知りたいことが多すぎる。これらすべては一体どうやって作られたのだろう？",
						"chinese": "太多疑问了。这一切究竟是如何被创造的？",
						"french": "Tant de questions. Comment tout cela a-t-il été créé ?",
						"spanish": "¿Demasiadas preguntas. Cómo se creó todo esto?",
						"vietnamese": "Có quá nhiều điều tò mò. Tất cả những thứ này được tạo ra như thế nào?",
						"thai": "มีเรื่องสงสัยมากมาย ทั้งหมดนี้สร้างขึ้นมาได้อย่างไรกันนะ?",
						"hindi": "बहुत सारे प्रश्न हैं। यह सब कैसे बनाया गया होगा?"
					},
					"type": "speech",
					"speaker": "anuk",
					"emotion": "happy"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "anuk",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "저건 뭐지? 얼음 요람이야!",
						"english": "What's that? An ice cradle!",
						"japanese": "あれは何だ？氷のゆりかごだ！",
						"chinese": "那是什么？是冰之摇篮！",
						"french": "Qu'est-ce que c'est ? Un berceau de glace !",
						"spanish": "¿Qué es eso? ¡Una cuna de hielo!",
						"vietnamese": "Cái gì kia? Một chiếc nôi băng!",
						"thai": "นั่นอะไรน่ะ? เปลน้ำแข็งนี่!",
						"hindi": "वह क्या है? एक बर्फ का झूला!"
					},
					"type": "speech",
					"speaker": "anuk",
					"emotion": "happy"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "작은 얼음 아기 인형들이 놓인 요람. 희미하게 자장가 소리가 들려왔다.",
						"english": "A cradle holding small ice baby dolls. A faint lullaby could be heard.",
						"japanese": "小さな氷の赤ちゃん人形が置かれたゆりかご。かすかに子守唄が聞こえてきた。",
						"chinese": "摇篮里放着小小的冰婴儿玩偶。隐约能听到摇篮曲的声音。",
						"french": "Un berceau contenant de petites poupées de glace. Une faible berceuse se fit entendre.",
						"spanish": "Una cuna con pequeñas muñecas de hielo. Se escuchaba una tenue canción de cuna.",
						"vietnamese": "Một chiếc nôi đặt những búp bê em bé bằng băng nhỏ. Một tiếng hát ru mơ hồ vọng đến.",
						"thai": "เปลที่วางตุ๊กตาน้ำแข็งรูปเด็กเล็กๆ อยู่ มีเสียงเพลงกล่อมเด็กแผ่วๆ ลอยมา",
						"hindi": "छोटे बर्फ के शिशु गुड़िया से भरा एक झूला। हल्की सी लोरी की आवाज़ सुनाई दी।"
					}
				},
				{
					"emotion": "happy",
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "너무 예뻐... 만져봐도 될까?",
						"english": "So pretty... Can I touch it?",
						"japanese": "すごくきれい… 触ってもいい？",
						"chinese": "真漂亮……可以摸一下吗？",
						"french": "C'est si beau... Je peux toucher ?",
						"spanish": "Qué bonito... ¿Puedo tocarlo?",
						"vietnamese": "Đẹp quá... Mình chạm vào được không?",
						"thai": "สวยจัง... แตะได้ไหม?",
						"hindi": "कितना सुंदर... क्या मैं छू सकता हूँ?"
					}
				},
				{
					"content": {
						"korean": "아눅, 안 돼!",
						"english": "Anuk, no!",
						"japanese": "アヌク、だめ！",
						"chinese": "阿努克，不行！",
						"french": "Anuk, non !",
						"spanish": "¡Anuk, no!",
						"vietnamese": "Anuk, không được!",
						"thai": "อนุก, ไม่นะ!",
						"hindi": "अनुक, नहीं!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "쨍그랑! 얼음 역장이 폭발했다. 아눅의 팔이 순식간에 얼어붙기 시작했다.",
						"english": "Crash! The ice field exploded. Anuk's arm instantly began to freeze.",
						"japanese": "ガチャン！氷の力場が爆発した。アヌクの腕は瞬く間に凍り始めた。",
						"chinese": "砰！冰场爆炸了。阿努克的手臂瞬间开始结冰。",
						"french": "Clang ! Le champ de glace explosa. Le bras d'Anuk commença à geler instantanément.",
						"spanish": "¡Crash! El campo de hielo explotó. El brazo de Anuk empezó a congelarse al instante.",
						"vietnamese": "Rầm! Trường lực băng phát nổ. Cánh tay của Anuk bắt đầu đóng băng ngay lập tức.",
						"thai": "แคร้ง! สนามพลังน้ำแข็งระเบิด แขนของอนุกเริ่มกลายเป็นน้ำแข็งทันที",
						"hindi": "धमाका! बर्फीला क्षेत्र फट गया। अनूक का हाथ तुरंत जमने लगा।"
					}
				},
				{
					"content": {
						"korean": "흐윽... 아파!",
						"english": "Ugh... It hurts!",
						"japanese": "うっ…痛い！",
						"chinese": "呃……好痛！",
						"french": "Aïe... Ça fait mal !",
						"spanish": "Ay... ¡Me duele!",
						"vietnamese": "Ư... Đau quá!",
						"thai": "อึก... เจ็บ!",
						"hindi": "उह... दर्द हो रहा है!"
					},
					"type": "speech",
					"speaker": "anuk",
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "이런... 규칙을 어기면 안 돼.",
						"english": "Oh dear... You mustn't break the rules.",
						"japanese": "ああ…規則を破ってはいけない。",
						"chinese": "哎呀……不能违反规则。",
						"french": "Oh là là... Tu ne dois pas enfreindre les règles.",
						"spanish": "Ay... No debes romper las reglas.",
						"vietnamese": "Ôi... Không được phá luật.",
						"thai": "โอ... ต้องไม่ทำผิดกฎ",
						"hindi": "हे भगवान... तुम्हें नियम नहीं तोड़ने चाहिए।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아눅의 팔이 얼고 있어! 이게 무슨 따뜻한 안식처야?",
						"english": "Anuk's arm is freezing! What kind of warm sanctuary is this?",
						"japanese": "アヌクの腕が凍ってる！これが一体、どんな暖かい安息所だというんだ？",
						"chinese": "阿努克的手臂正在结冰！这算什么温暖的避难所？",
						"french": "Le bras d'Anuk gèle ! Quel genre de sanctuaire chaleureux est-ce ?",
						"spanish": "¡El brazo de Anuk se está congelando! ¿Qué clase de santuario cálido es este?",
						"vietnamese": "Tay của Anuk đang đóng băng! Đây là loại nơi trú ẩn ấm áp gì vậy?",
						"thai": "แขนของอนุกกำลังกลายเป็นน้ำแข็ง! นี่มันที่หลบภัยอันอบอุ่นแบบไหนกัน?",
						"hindi": "अनूक का हाथ जम रहा है! यह किस तरह का गर्म आश्रय है?"
					}
				},
				{
					"content": {
						"korean": "이것은... 고통을 흡수하는 과정. 영원한 안식을 위한 필수적인 대가.",
						"english": "This is... the process of absorbing pain. An essential price for eternal rest.",
						"japanese": "これは…苦痛を吸収する過程。永遠の安息のための不可欠な代償。",
						"chinese": "这是……吸收痛苦的过程。是为了永恒安息的必要代价。",
						"french": "C'est... le processus d'absorption de la douleur. Un prix essentiel pour le repos éternel.",
						"spanish": "Esto es... el proceso de absorción del dolor. Un precio esencial para el descanso eterno.",
						"vietnamese": "Đây là... quá trình hấp thụ nỗi đau. Một cái giá thiết yếu cho sự an nghỉ vĩnh hằng.",
						"thai": "นี่คือ... กระบวนการดูดซับความเจ็บปวด สิ่งจำเป็นสำหรับการพักผ่อนนิรันดร์",
						"hindi": "यह... दर्द को सोखने की प्रक्रिया है। शाश्वत शांति के लिए एक अनिवार्य कीमत।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "얼어붙은 아눅의 팔. 그러나 주변의 온기는 여전히 따뜻했다. 모순된 장면이었다.",
						"english": "Anuk's frozen arm. Yet, the surrounding warmth remained. A contradictory scene.",
						"japanese": "凍りついたアヌクの腕。しかし、周囲の温もりは依然として暖かかった。矛盾した光景だった。",
						"chinese": "阿努克冰冷的手臂。然而，周围的温暖依然存在。这是一个矛盾的场景。",
						"french": "Le bras gelé d'Anuk. Pourtant, la chaleur ambiante demeurait. Une scène contradictoire.",
						"spanish": "El brazo congelado de Anuk. Sin embargo, el calor circundante seguía siendo cálido. Una escena contradictoria.",
						"vietnamese": "Cánh tay của Anuk đông cứng. Nhưng sự ấm áp xung quanh vẫn còn. Một cảnh tượng mâu thuẫn.",
						"thai": "แขนของอนุกที่กลายเป็นน้ำแข็ง แต่ความอบอุ่นรอบข้างยังคงอยู่ เป็นภาพที่ขัดแย้งกัน",
						"hindi": "अनूक का जमा हुआ हाथ। फिर भी, आस-पास की गर्माहट बरकरार थी। एक विरोधाभासी दृश्य।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "어딘가에서 희미하게, 잊혀진 아이들의 울음소리 같은 환청이 들려왔다.",
						"english": "Faintly, from somewhere, auditory hallucinations like the cries of forgotten children could be heard.",
						"japanese": "どこからか、かすかに、忘れ去られた子供たちの泣き声のような幻聴が聞こえてきた。",
						"chinese": "某个地方，隐约传来被遗忘的孩子们的哭声般的幻听。",
						"french": "Faiblement, de quelque part, des hallucinations auditives comme les pleurs d'enfants oubliés se faisaient entendre.",
						"spanish": "Lejanamente, de algún lugar, se escuchaban alucinaciones auditivas como los llantos de niños olvidados.",
						"vietnamese": "Từ đâu đó, loáng thoáng nghe thấy ảo giác như tiếng khóc của những đứa trẻ bị lãng quên.",
						"thai": "จากที่ไหนสักแห่ง แว่วเสียงหลอนคล้ายเสียงร้องไห้ของเด็กที่ถูกลืม",
						"hindi": "कहीं से, धुंधले रूप से, भूले हुए बच्चों के रोने जैसी श्रवण मतिभ्रम सुनाई दे रही थी।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "anuk"
				},
				{
					"content": {
						"korean": "이 따뜻함이... 나를 얼리고 있어.",
						"english": "This warmth... is freezing me.",
						"japanese": "この温かさが…私を凍らせている。",
						"chinese": "这份温暖……正在将我冰封。",
						"french": "Cette chaleur... me glace.",
						"spanish": "Este calor... me está congelando.",
						"vietnamese": "Sự ấm áp này... đang đóng băng tôi.",
						"thai": "ความอบอุ่นนี้... กำลังทำให้ฉันแข็ง",
						"hindi": "यह गर्माहट... मुझे जमा रही है।"
					},
					"emotion": "sad",
					"speaker": "anuk",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 안식처는 전부 거짓말이야.",
						"english": "This sanctuary is all a lie.",
						"japanese": "この安息所はすべて嘘だ。",
						"chinese": "这个避难所全是谎言。",
						"french": "Ce sanctuaire n'est qu'un mensonge.",
						"spanish": "Este santuario es todo una mentira.",
						"vietnamese": "Nơi trú ẩn này là một lời nói dối.",
						"thai": "สถานที่ศักดิ์สิทธิ์แห่งนี้เป็นเรื่องโกหกทั้งเพ",
						"hindi": "यह अभयारण्य सब एक झूठ है।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "random_boss",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "{random_boss}는 너희의 평화를 지키려는 것뿐.",
						"english": "{random_boss} merely seeks to protect your peace.",
						"japanese": "{random_boss}はただ、お前たちの平和を守ろうとしているだけだ。",
						"chinese": "{random_boss}只是想守护你们的和平。",
						"french": "{random_boss} cherche seulement à protéger votre paix.",
						"spanish": "{random_boss} solo busca proteger vuestra paz.",
						"vietnamese": "{random_boss} chỉ muốn bảo vệ hòa bình của các ngươi.",
						"thai": "{random_boss} แค่ต้องการปกป้องความสงบสุขของพวกเจ้าเท่านั้น",
						"hindi": "{random_boss} बस तुम्हारी शांति की रक्षा करना चाहता है।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "평화가 아니라, 고통을 강요하는 거잖아!",
						"english": "It's not peace, you're forcing pain upon us!",
						"japanese": "平和じゃない、苦痛を押し付けているだけだ！",
						"chinese": "这不是和平，而是强加痛苦！",
						"french": "Ce n'est pas la paix, vous nous imposez la douleur !",
						"spanish": "¡No es paz, nos estás imponiendo dolor!",
						"vietnamese": "Không phải hòa bình, mà là ép buộc nỗi đau!",
						"thai": "นี่ไม่ใช่ความสงบสุข แต่เป็นการบังคับความเจ็บปวด!",
						"hindi": "यह शांति नहीं, तुम दर्द थोप रहे हो!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "안식처의 가장 깊은 곳. 거대한 얼음 결정이 빛났다.",
						"english": "The deepest part of the sanctuary. A colossal ice crystal glowed.",
						"japanese": "安息所の最も深い場所。巨大な氷の結晶が輝いていた。",
						"chinese": "避难所最深处。巨大的冰晶闪耀着。",
						"french": "Au plus profond du sanctuaire. Un gigantesque cristal de glace brillait.",
						"spanish": "La parte más profunda del santuario. Un colosal cristal de hielo brillaba.",
						"vietnamese": "Nơi sâu nhất của thánh địa. Một tinh thể băng khổng lồ phát sáng.",
						"thai": "ส่วนที่ลึกที่สุดของสถานที่ศักดิ์สิทธิ์ ผลึกน้ำแข็งขนาดมหึมาเปล่งประกาย",
						"hindi": "अभयारण्य का सबसे गहरा हिस्सा। एक विशाल बर्फ का क्रिस्टल चमक रहा था।"
					}
				},
				{
					"speaker": "random_boss",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "이곳은 영원한 안식처. {random_boss}는 모두를 고통에서 해방시키려는 것뿐.",
						"english": "This is an eternal sanctuary. {random_boss} merely seeks to free everyone from pain.",
						"japanese": "ここは永遠の安息所。{random_boss}はただ、皆を苦痛から解放しようとしているだけだ。",
						"chinese": "这里是永恒的避难所。{random_boss}只是想把所有人从痛苦中解放出来。",
						"french": "C'est un sanctuaire éternel. {random_boss} cherche seulement à libérer tout le monde de la douleur.",
						"spanish": "Este es un santuario eterno. {random_boss} solo busca liberar a todos del dolor.",
						"vietnamese": "Đây là nơi trú ẩn vĩnh cửu. {random_boss} chỉ muốn giải thoát mọi người khỏi nỗi đau.",
						"thai": "ที่นี่คือสถานที่ศักดิ์สิทธิ์นิรันดร์ {random_boss} แค่ต้องการปลดปล่อยทุกคนจากความเจ็บปวดเท่านั้น",
						"hindi": "यह एक शाश्वत अभयारण्य है। {random_boss} बस सभी को दर्द से मुक्त करना चाहता है।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "고통을 얼리고 생명을 앗아가는 게 무슨 해방이야!",
						"english": "How is freezing pain and taking lives a liberation?!",
						"japanese": "苦痛を凍らせ、命を奪うのがどうして解放だというんだ！",
						"chinese": "冻结痛苦，剥夺生命，这算什么解放！",
						"french": "Comment figer la douleur et ôter des vies peut-être une libération ?!",
						"spanish": "¡¿Cómo es que congelar el dolor y quitar vidas es una liberación?!",
						"vietnamese": "Đóng băng nỗi đau và cướp đi sinh mạng, đó là giải thoát kiểu gì!",
						"thai": "การแช่แข็งความเจ็บปวดและพรากชีวิตไปจะเรียกว่าการปลดปล่อยได้อย่างไร!",
						"hindi": "दर्द को जमाना और जान लेना कैसी मुक्ति है!"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 따뜻함만이... 너희를 구원할 수 있어.",
						"english": "Only this warmth... can save you.",
						"japanese": "この温かさだけが... お前たちを救うことができる。",
						"chinese": "只有这份温暖... 才能拯救你们。",
						"french": "Seule cette chaleur... peut vous sauver.",
						"spanish": "Solo este calor... puede salvaros.",
						"vietnamese": "Chỉ có sự ấm áp này... mới có thể cứu rỗi các ngươi.",
						"thai": "มีเพียงความอบอุ่นนี้เท่านั้น... ที่จะช่วยพวกเจ้าได้",
						"hindi": "केवल यह गर्माहट... तुम्हें बचा सकती है।"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "결국... 너희도 이 안식에 녹아들 것이다.",
						"english": "Eventually... you too will melt into this rest.",
						"japanese": "結局…お前たちもこの安息に溶け込むだろう。",
						"chinese": "最终……你们也将融入这份安宁。",
						"french": "Finalement... vous aussi fondrez dans ce repos.",
						"spanish": "Finalmente... vosotros también os disolveréis en este reposo.",
						"vietnamese": "Cuối cùng... các ngươi cũng sẽ tan vào sự an nghỉ này.",
						"thai": "ในที่สุด... พวกเจ้าก็จะละลายหายไปในการพักผ่อนนี้เช่นกัน",
						"hindi": "अंततः... तुम भी इस विश्राम में विलीन हो जाओगे।"
					}
				},
				{
					"content": {
						"korean": "아직 끝나지 않았어. 우린 포기하지 않아!",
						"english": "It's not over yet. We won't give up!",
						"japanese": "まだ終わってない。私たちは諦めない！",
						"chinese": "还没结束。我们不会放弃！",
						"french": "Ce n'est pas encore fini. Nous n'abandonnerons pas !",
						"spanish": "Todavía no ha terminado. ¡No nos rendiremos!",
						"vietnamese": "Chưa kết thúc đâu. Chúng ta sẽ không từ bỏ!",
						"thai": "ยังไม่จบ เราจะไม่ยอมแพ้!",
						"hindi": "अभी खत्म नहीं हुआ है। हम हार नहीं मानेंगे!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽... 어리석은 자들... 이 따뜻함의 의미를... 모르는군.",
						"english": "Ugh... Fools... You don't understand the meaning... of this warmth.",
						"japanese": "くぅっ... 愚か者たちめ... この温かさの意味を... 知らぬのだな。",
						"chinese": "呃... 愚蠢的家伙... 你们不懂... 这份温暖的意义。",
						"french": "Ugh... Imbéciles... Vous ne comprenez pas le sens... de cette chaleur.",
						"spanish": "Ugh... Necios... No comprendéis el significado... de este calor.",
						"vietnamese": "Khụ... lũ ngu ngốc... Các ngươi không hiểu ý nghĩa... của sự ấm áp này.",
						"thai": "อึก... พวกโง่เขลา... ไม่เข้าใจความหมาย... ของความอบอุ่นนี้เลยสินะ",
						"hindi": "उफ़... मूर्खों... तुम इस गर्माहट का मतलब... नहीं समझते।"
					},
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이런 안식 따위는 필요 없어!",
						"english": "We don't need this kind of peace!",
						"japanese": "こんな安息などいらない！",
						"chinese": "我们不需要这种安宁！",
						"french": "Nous n'avons pas besoin de ce genre de paix !",
						"spanish": "¡No necesitamos este tipo de paz!",
						"vietnamese": "Chúng ta không cần loại an nghỉ này!",
						"thai": "เราไม่ต้องการความสงบสุขแบบนี้!",
						"hindi": "हमें ऐसी शांति की ज़रूरत नहीं है!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "정체 모를 보스가 쓰러졌다. 그러나 안식처의 차가운 온기는 여전했다.",
						"english": "The unknown boss fell. Yet, the sanctuary's cold warmth lingered.",
						"japanese": "正体不明のボスが倒れた。しかし、安息所の冷たい温もりは依然として残っていた。",
						"chinese": "身份不明的 Boss 倒下了。然而，避难所的冰冷暖意依旧。",
						"french": "Le boss inconnu est tombé. Pourtant, la chaleur froide du sanctuaire persistait.",
						"spanish": "El jefe desconocido cayó. Sin embargo, la fría calidez del santuario permaneció.",
						"vietnamese": "Con boss vô danh đã ngã xuống. Tuy nhiên, sự ấm áp lạnh lẽo của thánh địa vẫn còn đó.",
						"thai": "บอสลึกลับล้มลง แต่ความอบอุ่นอันเย็นยะเยือกของสถานที่ศักดิ์สิทธิ์ยังคงอยู่",
						"hindi": "अज्ञात बॉस गिर गया। फिर भी, अभयारण्य की ठंडी गर्माहट बनी रही।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "진정한 지배자는 아직 모습을 드러내지 않았다.",
						"english": "The true ruler has not yet revealed themselves.",
						"japanese": "真の支配者はまだ姿を現していない。",
						"chinese": "真正的统治者尚未现身。",
						"french": "Le véritable souverain ne s'est pas encore montré.",
						"spanish": "El verdadero dominador aún no se ha revelado.",
						"vietnamese": "Kẻ thống trị thực sự vẫn chưa lộ diện.",
						"thai": "ผู้ปกครองที่แท้จริงยังไม่ปรากฏตัว",
						"hindi": "सच्चा शासक अभी तक प्रकट नहीं हुआ है।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"따뜻한 안식처.",
			"그 속에서 낯선 호기심이 깨어났다.",
			"그러나 손대지 말아야 할 진실이 있다.",
			"이 온기는 정말 우리를 위한 것일까?"
		],
		"english": [
			"A warm sanctuary.",
			"Within it, an unfamiliar curiosity awoke.",
			"But there are truths not meant to be touched.",
			"Is this warmth truly for us?"
		],
		"japanese": [
			"暖かい安息所。",
			"その中で、見知らぬ好奇心が目覚めた。",
			"しかし、触れてはならない真実がある。",
			"この温もりは本当に私たちのためのものなのだろうか？"
		],
		"chinese": [
			"温暖的安息之所。",
			"在其中，陌生的好奇心苏醒了。",
			"然而，有些真相不应触碰。",
			"这份温暖真的属于我们吗？"
		],
		"french": [
			"Un havre chaleureux.",
			"En son sein, une curiosité inconnue s'éveilla.",
			"Mais il y a des vérités qu'il ne faut pas toucher.",
			"Cette chaleur est-elle vraiment pour nous ?"
		],
		"spanish": [
			"Un santuario cálido.",
			"Dentro de él, una curiosidad desconocida despertó.",
			"Pero hay verdades que no deben ser tocadas.",
			"¿Es este calor realmente para nosotros?"
		],
		"vietnamese": [
			"Một nơi ẩn náu ấm áp.",
			"Trong đó, một sự tò mò xa lạ thức tỉnh.",
			"Nhưng có những sự thật không nên chạm vào.",
			"Sự ấm áp này thật sự dành cho chúng ta ư?"
		],
		"thai": [
			"ที่หลบภัยอันอบอุ่น",
			"ภายในนั้น ความอยากรู้อยากเห็นที่ไม่คุ้นเคยก็ตื่นขึ้น",
			"แต่มีบางความจริงที่ไม่ควรแตะต้อง",
			"ความอบอุ่นนี้เป็นของเราจริงหรือเปล่า?"
		],
		"hindi": [
			"एक गर्म अभयारण्य।",
			"उसके भीतर, एक अपरिचित जिज्ञासा जागृत हुई।",
			"परन्तु कुछ ऐसे सत्य हैं जिन्हें छूना नहीं चाहिए।",
			"क्या यह गर्माहट सचमुच हमारे लिए है?"
		]
	}
} as const;
