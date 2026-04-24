export const scenario_desert_dunewitness_v0_04 = {
	"scenario_id": "desert_dunewitness_v0_04",
	"order": 4,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"Zahra_Pyra": {
			"name": {
				"korean": "자흐라 피라",
				"english": "Zahra Pyra",
				"japanese": "ザフラ・ピラ",
				"chinese": "扎赫拉·派拉",
				"french": "Zahra Pyra",
				"spanish": "Zahra Pyra",
				"vietnamese": "Zahra Pyra",
				"thai": "ซาห์รา ไพรา",
				"hindi": "ज़हरा पायरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/32ed56fd-da77-42c2-2146-5701dc8b2800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/98796e2b-0d8d-4f65-771e-ddc31a204500/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"사막은 모든 것을 삼켰다. 문명도, 희망도.",
			"변화하려는 자, 섭리를 거스르는 자는.",
			"오르벨의 시선 아래, 결국 모래가 될 뿐.",
			"끝없는 모래 속에서, 또 다른 진실이 기다린다."
		],
		"english": [
			"The desert swallowed everything. Civilization, hope.",
			"Those who seek change, those who defy providence.",
			"Under Orvel's gaze, will ultimately turn to sand.",
			"Amidst endless sands, another truth awaits."
		],
		"japanese": [
			"砂漠はすべてを飲み込んだ。文明も、希望も。",
			"変革を求める者、摂理に逆らう者は。",
			"オルベルの視線の下、結局は砂と化すのみ。",
			"終わりなき砂の中、もう一つの真実が待つ。"
		],
		"chinese": [
			"沙漠吞噬了一切。文明，希望。",
			"那些寻求改变，那些违抗天意的人。",
			"在奥尔维的凝视下，最终只会化为沙尘。",
			"在无尽的沙海中，另一个真相等待着。"
		],
		"french": [
			"Le désert a tout englouti. La civilisation, l'espoir.",
			"Ceux qui cherchent le changement, ceux qui défient la providence.",
			"Sous le regard d'Orvel, ne deviendra finalement que du sable.",
			"Au milieu des sables infinis, une autre vérité attend."
		],
		"spanish": [
			"El desierto lo engulló todo. La civilización, la esperanza.",
			"Aquellos que buscan el cambio, aquellos que desafían la providencia.",
			"Bajo la mirada de Orvel, finalmente se convertirá en arena.",
			"Entre arenas infinitas, otra verdad espera."
		],
		"vietnamese": [
			"Sa mạc nuốt chửng mọi thứ. Nền văn minh, hy vọng.",
			"Kẻ nào muốn thay đổi, kẻ nào chống lại ý trời.",
			"Dưới ánh mắt của Orvel, cuối cùng cũng chỉ hóa thành cát bụi.",
			"Giữa sa mạc vô tận, một sự thật khác đang chờ đợi."
		],
		"thai": [
			"ทะเลทรายกลืนกินทุกสิ่ง อารยธรรม ความหวัง",
			"ผู้ที่แสวงหาการเปลี่ยนแปลง ผู้ที่ฝ่าฝืนโชคชะตา",
			"ภายใต้สายตาของออร์เวล ในที่สุดก็กลายเป็นเพียงทราย",
			"ท่ามกลางทะเลทรายอันไร้ขอบเขต ความจริงอีกอย่างหนึ่งรออยู่"
		],
		"hindi": [
			"रेगिस्तान ने सब कुछ निगल लिया। सभ्यता, आशा।",
			"जो परिवर्तन चाहते हैं, जो नियति का उल्लंघन करते हैं।",
			"ओरवेल की नज़र के नीचे, अंततः रेत बन जाएगा।",
			"अंतहीन रेत के बीच, एक और सच इंतज़ार कर रहा है।"
		]
	},
	"rooms": [
		{
			"id": 9,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "고대 유적의 심장부. 시간마저 멈춘 듯한 고요함만 가득했다.",
						"english": "The heart of ancient ruins. Only a silence as if time itself had stopped filled the air.",
						"japanese": "古代遺跡の心臓部。時間さえ止まったかのような静寂だけが満ちていた。",
						"chinese": "古代遗迹的深处。只有时间仿佛也停止的寂静弥漫着。",
						"french": "Le cœur des ruines antiques. Seul un silence comme si le temps s'était arrêté emplissait l'air.",
						"spanish": "El corazón de las ruinas antiguas. Solo un silencio como si el tiempo mismo se hubiera detenido llenaba el aire.",
						"vietnamese": "Trái tim của tàn tích cổ đại. Chỉ có sự tĩnh lặng như thể thời gian đã ngừng trôi bao trùm.",
						"thai": "ใจกลางซากปรักหักพังโบราณ มีเพียงความเงียบงันราวกับเวลาหยุดนิ่ง",
						"hindi": "प्राचीन खंडहरों का हृदय। केवल एक खामोशी, मानो समय ही रुक गया हो, हवा में भर गई थी।"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "Zahra_Pyra",
					"action": "enter"
				},
				{
					"content": {
						"korean": "멈춰라, 어리석은 자여.",
						"english": "Stop, foolish one.",
						"japanese": "止まれ、愚か者よ。",
						"chinese": "住手，愚蠢之人。",
						"french": "Arrête, imbécile.",
						"spanish": "Detente, necio.",
						"vietnamese": "Dừng lại, kẻ ngốc.",
						"thai": "หยุดนะ เจ้าคนโง่",
						"hindi": "रुको, मूर्ख।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "Zahra_Pyra"
				},
				{
					"content": {
						"korean": "누구지? 길을 막는 건가.",
						"english": "Who are you? Are you blocking my path?",
						"japanese": "誰だ？道を塞ぐのか？",
						"chinese": "你是谁？是来挡路的吗？",
						"french": "Qui es-tu ? Me barres-tu la route ?",
						"spanish": "¿Quién eres? ¿Me estás bloqueando el camino?",
						"vietnamese": "Ngươi là ai? Có phải đang chặn đường ta không?",
						"thai": "ใครน่ะ? มาขวางทางรึไง?",
						"hindi": "तुम कौन हो? क्या तुम मेरा रास्ता रोक रहे हो?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "Zahra_Pyra",
					"content": {
						"korean": "나는 '사구의 증인'을 숭배하는 자흐라 피라. 감히 오르벨 님의 섭리에 도전하는가?",
						"english": "I am Zahra Fira, worshipper of the 'Witness of the Dunes'. Do you dare challenge Lord Orvel's providence?",
						"japanese": "私は「砂丘の証人」を崇拝するザハラ・フィラ。オルベル様の摂理に挑戦する気か？",
						"chinese": "我是扎赫拉·菲拉，‘沙丘见证者’的崇拜者。你竟敢挑战奥尔维大人的天意？",
						"french": "Je suis Zahra Fira, adoratrice du 'Témoin des Dunes'. Oses-tu défier la providence de Seigneur Orvel ?",
						"spanish": "Soy Zahra Fira, adoradora del 'Testigo de las Dunas'. ¿Te atreves a desafiar la providencia de Lord Orvel?",
						"vietnamese": "Ta là Zahra Fira, kẻ thờ phụng 'Nhân chứng của Cồn cát'. Ngươi dám thách thức ý trời của Đức ngài Orvel sao?",
						"thai": "ข้าคือซาห์รา ฟิรา ผู้บูชา 'พยานแห่งเนินทราย' เจ้ากล้าท้าทายโชคชะตาของท่านออร์เวลรึ?",
						"hindi": "मैं ज़ाहरा फ़िरा हूँ, 'टीलों के गवाह' की उपासक। क्या तुम लॉर्ड ओरवेल की नियति को चुनौती देने की हिम्मत करते हो?"
					}
				},
				{
					"content": {
						"korean": "사막에 새로운 생명을 불어넣으려 할 뿐이다.",
						"english": "I merely seek to breathe new life into the desert.",
						"japanese": "砂漠に新たな命を吹き込もうとしているだけだ。",
						"chinese": "我只是想为沙漠注入新的生命。",
						"french": "Je cherche simplement à insuffler une nouvelle vie au désert.",
						"spanish": "Simplemente busco insuflar nueva vida al desierto.",
						"vietnamese": "Ta chỉ muốn thổi luồng sinh khí mới vào sa mạc mà thôi.",
						"thai": "ข้าเพียงต้องการนำชีวิตใหม่มาสู่ทะเลทราย",
						"hindi": "मैं सिर्फ रेगिस्तान में नया जीवन फूंकना चाहता हूँ।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "Zahra_Pyra",
					"content": {
						"korean": "변화는 곧 오염. 오르벨 님은 모든 변화를 지켜보지만, 개입은 그 자체를 더럽힌다.",
						"english": "Change is contamination. Lord Orvel observes all change, but intervention defiles it.",
						"japanese": "変化は即ち汚染。オルベル様はすべての変化を見守るが、介入はそれ自体を汚す。",
						"chinese": "变化即是污染。奥尔维大人注视着所有变化，但干预本身就是玷污。",
						"french": "Le changement est une contamination. Seigneur Orvel observe tout changement, mais l'intervention le souille.",
						"spanish": "El cambio es contaminación. Lord Orvel observa todo cambio, pero la intervención lo profana.",
						"vietnamese": "Thay đổi là ô nhiễm. Đức ngài Orvel quan sát mọi sự thay đổi, nhưng sự can thiệp làm vấy bẩn chính nó.",
						"thai": "การเปลี่ยนแปลงคือการแปดเปื้อน ท่านออร์เวลเฝ้าดูทุกการเปลี่ยนแปลง แต่การแทรกแซงทำให้สิ่งนั้นแปดเปื้อน",
						"hindi": "परिवर्तन ही प्रदूषण है। लॉर्ड ओरवेल सभी परिवर्तनों का अवलोकन करते हैं, लेकिन हस्तक्षेप उसे दूषित करता है।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "Zahra_Pyra",
					"content": {
						"korean": "너의 시도는 이 위대한 사막을 모독할 뿐이다!",
						"english": "Your attempts only desecrate this great desert!",
						"japanese": "お前の試みは、この偉大な砂漠を冒涜するだけだ！",
						"chinese": "你的尝试只会亵渎这片伟大的沙漠！",
						"french": "Tes tentatives ne font que profaner ce grand désert !",
						"spanish": "¡Tus intentos solo profanan este gran desierto!",
						"vietnamese": "Những nỗ lực của ngươi chỉ làm ô uế sa mạc vĩ đại này!",
						"thai": "ความพยายามของเจ้ามีแต่จะดูหมิ่นทะเลทรายอันยิ่งใหญ่นี้เท่านั้น!",
						"hindi": "तुम्हारे प्रयास इस महान रेगिस्तान को अपवित्र ही करेंगे!"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "모래바람이 환영처럼 스쳐 지나갔다. 사라진 문명들의 비명, 잊힌 선택의 흔적들.",
						"english": "Sandstorms swept by like phantoms. Screams of lost civilizations, traces of forgotten choices.",
						"japanese": "砂嵐が幻影のように過ぎ去った。失われた文明の叫び、忘れられた選択の痕跡。",
						"chinese": "沙尘暴如幻影般掠过。消逝文明的尖叫，遗忘选择的痕迹。",
						"french": "Des tempêtes de sable passèrent comme des fantômes. Cris de civilisations perdues, traces de choix oubliés.",
						"spanish": "Las tormentas de arena pasaron como fantasmas. Gritos de civilizaciones perdidas, huellas de decisiones olvidadas.",
						"vietnamese": "Bão cát lướt qua như ảo ảnh. Tiếng thét của những nền văn minh đã mất, dấu vết của những lựa chọn bị lãng quên.",
						"thai": "พายุทรายพัดผ่านไปราวกับภาพลวงตา เสียงกรีดร้องของอารยธรรมที่สาบสูญ ร่องรอยของทางเลือกที่ถูกลืมเลือน",
						"hindi": "रेत के तूफान प्रेत की तरह गुजरे। खोई हुई सभ्यताओं की चीखें, भूले हुए विकल्पों के निशान।"
					}
				},
				{
					"content": {
						"korean": "…이게 다 뭐지?",
						"english": "…What is all this?",
						"japanese": "…これはいったい？",
						"chinese": "……这都是什么？",
						"french": "…Qu'est-ce que tout ça ?",
						"spanish": "…¿Qué es todo esto?",
						"vietnamese": "…Tất cả những thứ này là gì?",
						"thai": "…นี่มันอะไรกัน?",
						"hindi": "…यह सब क्या है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "동시에, 어딘가에서 느껴지는 거대한 시선. 움직이지 않는 존재감이 모든 것을 짓눌렀다.",
						"english": "At the same time, a colossal gaze from somewhere. An unmoving presence crushed everything.",
						"japanese": "同時に、どこかから感じる巨大な視線。動かぬ存在感が全てを押し潰した。",
						"chinese": "同时，一股巨大的凝视从某处传来。一股不动的存在感压垮了一切。",
						"french": "Simultanément, un regard colossal venu de quelque part. Une présence immobile écrasait tout.",
						"spanish": "Al mismo tiempo, una mirada colosal desde algún lugar. Una presencia inmóvil lo aplastaba todo.",
						"vietnamese": "Đồng thời, một ánh mắt khổng lồ từ đâu đó. Một sự hiện diện bất động đè bẹp tất cả.",
						"thai": "ในขณะเดียวกัน มีสายตาอันใหญ่หลวงจากที่ใดที่หนึ่ง ความรู้สึกของการมีอยู่ที่ไม่เคลื่อนไหวได้บดขยี้ทุกสิ่ง",
						"hindi": "उसी समय, कहीं से एक विशाल दृष्टि महसूस हुई। एक स्थिर उपस्थिति ने सब कुछ कुचल दिया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "…숨이 막혀오는군.",
						"english": "…It's suffocating.",
						"japanese": "…息が詰まる。",
						"chinese": "……我快喘不过气了。",
						"french": "…Je suffoque.",
						"spanish": "…Me estoy asfixiando.",
						"vietnamese": "…Thật ngột ngạt.",
						"thai": "…มันหายใจไม่ออกเลย",
						"hindi": "…दम घुट रहा है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				}
			]
		}
	]
} as const;
