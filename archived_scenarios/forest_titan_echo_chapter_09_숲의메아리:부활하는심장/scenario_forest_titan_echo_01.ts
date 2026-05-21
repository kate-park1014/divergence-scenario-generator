export const scenario_forest_titan_echo_01 = {
	"scenario_id": "forest_titan_echo_01",
	"order": 1,
	"act": "intro",
	"theme": "forest",
	"actors": {
		"briar": {
			"id": "mon_21f92820-190e-4d08-a75c-5d2c0b6d0a6b",
			"name": {
				"korean": "브라이어",
				"english": "Briar",
				"japanese": "ブライア",
				"chinese": "布莱尔",
				"french": "Briar",
				"spanish": "Briar",
				"vietnamese": "Briar",
				"thai": "ไบรอา",
				"hindi": "ब्रायर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/41fb431e-57e0-45e0-dde6-1a1f02c01200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/dd89dff7-88ed-4444-28d8-5aaa85bd4e00/public"
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
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "치킨-사우루스 사건 이후, 숲은 이전의 평화를 잃었다. 음산한 기운만이 감돌았다.",
						"english": "After the Chicken-saurus Incident, the forest lost its former peace. Only an ominous aura lingered.",
						"japanese": "チキンサウルス事件以降、森はかつての平和を失った。不気味な気配だけが漂っていた。",
						"chinese": "鸡龙事件后，森林失去了往日的宁静。只剩下阴森的气息弥漫。",
						"french": "Après l'incident du Poulet-saure, la forêt perdit sa paix d'antan. Seule une aura sinistre planait.",
						"spanish": "Tras el Incidente del Pollo-saurio, el bosque perdió su antigua paz. Solo una aura siniestra persistía.",
						"vietnamese": "Sau sự kiện Gà-khủng long, khu rừng mất đi sự bình yên trước đây. Chỉ còn lại không khí u ám bao trùm.",
						"thai": "หลังเหตุการณ์ไก่ซอรัส ป่าก็สูญเสียความสงบสุขเดิมไป มีเพียงรังสีอำมหิตเท่านั้นที่อบอวล",
						"hindi": "चिकन-सौरस घटना के बाद, जंगल ने अपनी पुरानी शांति खो दी। केवल एक अशुभ आभा ही छाई हुई थी।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기가 그 저주받은 숲이구나… 으스스해.",
						"english": "So this is the cursed forest... It's creepy.",
						"japanese": "ここが、あの呪われた森か… 気味が悪いな。",
						"chinese": "这里就是那片被诅咒的森林啊……真阴森。",
						"french": "C'est donc ça, la forêt maudite... C'est effrayant.",
						"spanish": "Así que este es el bosque maldito... Qué espeluznante.",
						"vietnamese": "Đây chính là khu rừng bị nguyền rủa đó à… Thật rợn người.",
						"thai": "นี่คือป่าต้องสาปสินะ... น่าขนลุก",
						"hindi": "तो यह वह शापित जंगल है... यह डरावना है।"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "briar",
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "흥미로워! 이 정도의 에너지 파동은 학계에 보고된 바 없어! 기록, 기록!",
						"english": "Fascinating! Such an energy fluctuation hasn't been reported in academia! Record, record!",
						"japanese": "興味深い！これほどのエネルギー波動は学界に報告されていないぞ！記録、記録！",
						"chinese": "有趣！如此程度的能量波动在学术界前所未闻！记录，记录！",
						"french": "Fascinant ! Une telle fluctuation d'énergie n'a jamais été signalée dans la sphère académique ! Noter, noter !",
						"spanish": "¡Interesante! ¡Una fluctuación de energía así no ha sido reportada en la academia! ¡Anotar, anotar!",
						"vietnamese": "Thật thú vị! Dao động năng lượng cỡ này chưa từng được báo cáo trong giới học thuật! Ghi lại, ghi lại!",
						"thai": "น่าสนใจ! การผันผวนของพลังงานระดับนี้ไม่เคยมีรายงานในวงการวิชาการมาก่อน! บันทึกไว้, บันทึกไว้!",
						"hindi": "दिलचस्प! इस तरह का ऊर्जा उतार-चढ़ाव शिक्षाविदों में रिपोर्ट नहीं किया गया है! दर्ज करो, दर्ज करो!"
					},
					"speaker": "briar",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "브라이어? 또 노트에 뭘 그렇게 그려?",
						"english": "Briar? What are you drawing in your notebook again?",
						"japanese": "ブライア？またノートに何を描いてるんだ？",
						"chinese": "布莱尔？你又在笔记本上画什么呢？",
						"french": "Briar ? Qu'est-ce que tu dessines encore dans ton carnet ?",
						"spanish": "¿Briar? ¿Qué estás dibujando otra vez en tu cuaderno?",
						"vietnamese": "Briar? Lại đang vẽ gì trong sổ tay vậy?",
						"thai": "ไบรเออร์? วาดอะไรในสมุดบันทึกอีกแล้ว?",
						"hindi": "ब्रायेर? तुम फिर से अपनी नोटबुक में क्या बना रहे हो?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "briar",
					"emotion": "happy",
					"content": {
						"korean": "오, 자네 왔군! 숲의 변이 현상을 탐구 중이네. 예술적인 그림… 아니, 과학적 기록이지!",
						"english": "Oh, you're here! I'm investigating the forest's mutations. Artistic drawings... no, scientific records!",
						"japanese": "おお、君か！森の変異現象を調査中だ。芸術的な絵…いや、科学的な記録だ！",
						"chinese": "哦，你来了！我正在探索森林的变异现象。艺术画作……不，是科学记录！",
						"french": "Oh, te voilà ! J'enquête sur les mutations de la forêt. Des dessins artistiques... non, des documents scientifiques !",
						"spanish": "¡Oh, has llegado! Estoy investigando las mutaciones del bosque. Dibujos artísticos... no, ¡registros científicos!",
						"vietnamese": "Ồ, cậu đến rồi à! Tớ đang nghiên cứu hiện tượng biến đổi của khu rừng. Những bức vẽ nghệ thuật… không, là những ghi chép khoa học!",
						"thai": "โอ้, มาแล้วเหรอ! กำลังสำรวจปรากฏการณ์การกลายพันธุ์ของป่าอยู่ ศิลปะ... ไม่สิ, บันทึกทางวิทยาศาสตร์!",
						"hindi": "ओह, तुम आ गए! मैं जंगल के परिवर्तनों की जांच कर रहा हूँ। कलात्मक चित्र... नहीं, वैज्ञानिक रिकॉर्ड!"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "briar",
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "땅속에서 기묘한 에너지 파동이 주기적으로 느껴졌다. 형광 분홍색 버섯들이 꿈틀거렸다.",
						"english": "Strange energy waves pulsed periodically from underground. Fluorescent pink mushrooms wriggled.",
						"japanese": "地下から奇妙なエネルギーの波動が周期的に感じられた。蛍光ピンクのキノコがうごめいていた。",
						"chinese": "地下周期性地传来奇妙的能量波动。荧光粉色的蘑菇蠕动着。",
						"french": "Des ondes d'énergie étranges se faisaient sentir périodiquement sous terre. Des champignons rose fluo frétillaient.",
						"spanish": "Ondas de energía extrañas se sentían periódicamente desde el subsuelo. Hongos rosados fluorescentes se retorcían.",
						"vietnamese": "Những đợt sóng năng lượng kỳ lạ định kỳ được cảm nhận từ dưới lòng đất. Những cây nấm màu hồng huỳnh quang đang ngọ nguậy.",
						"thai": "คลื่นพลังงานแปลกประหลาดสัมผัสได้เป็นระยะจากใต้ดิน เห็ดสีชมพูเรืองแสงกำลังกระดุกกระดิก",
						"hindi": "भूमिगत से समय-समय पर अजीब ऊर्जा तरंगें महसूस होती थीं। फ्लोरोसेंट गुलाबी मशरूम रेंग रहे थे।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "briar",
					"emotion": "base",
					"content": {
						"korean": "음… 이 버섯의 색상 변화는… 으읍… (갑자기 버섯이 트림한다) 푸하!",
						"english": "Hmm... the color change of this mushroom is... *urp*... (Suddenly the mushroom burps) *Puh-ha!*",
						"japanese": "うーん…このキノコの色変化は…うぅ…（突然キノコがげっぷをする）プハー！",
						"chinese": "嗯…这蘑菇的颜色变化是…呃…（蘑菇突然打了个嗝）噗哈！",
						"french": "Hmm... le changement de couleur de ce champignon est... *beurk*... (Soudain, le champignon rote) *Puh-ha !*",
						"spanish": "Mmm... el cambio de color de este hongo es... *eructo*... (De repente, el hongo eructa) ¡Puh-ha!",
						"vietnamese": "Ưm... sự thay đổi màu sắc của cây nấm này là... *ợ*... (Đột nhiên cây nấm ợ hơi) *Puh-ha!*",
						"thai": "อืม... การเปลี่ยนสีของเห็ดนี่มัน... *อึก*... (ทันใดนั้นเห็ดก็เรอ) *ปูฮ่า!*",
						"hindi": "हम्म... इस मशरूम का रंग बदलना... उह... (अचानक मशरूम डकार लेता है) पुह-हा!"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "shake",
					"duration_ms": 300,
					"speaker": "briar"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "버섯이 방금 트림했어?! 진짜?",
						"english": "The mushroom just burped?! Really?",
						"japanese": "キノコが今げっぷした？！本当に？",
						"chinese": "蘑菇刚才打嗝了？！真的吗？",
						"french": "Le champignon vient de roter ?! Vraiment ?",
						"spanish": "¿El hongo acaba de eructar?! ¿En serio?",
						"vietnamese": "Cây nấm vừa ợ hơi sao?! Thật ư?",
						"thai": "เห็ดเพิ่งเรอเหรอ?! จริงเหรอเนี่ย?",
						"hindi": "मशरूम ने अभी डकार ली?! सच में?"
					},
					"type": "speech"
				},
				{
					"speaker": "briar",
					"emotion": "base",
					"content": {
						"korean": "크흠! 놀라지 않았네. 이는 단순한 생물학적 변이가 아니야! 명백한 '무언가'의 각성 전조일세!",
						"english": "Ahem! Not surprised. This isn't a mere biological mutation! It's a clear precursor to 'something' awakening!",
						"japanese": "フム！驚かないな。これは単なる生物学的変異ではない！明白な『何か』の覚醒の前兆だ！",
						"chinese": "咳咳！我并不惊讶。这可不是简单的生物学变异！这是‘某种东西’即将觉醒的明显预兆！",
						"french": "Hum ! Pas surpris. Ce n'est pas une simple mutation biologique ! C'est un signe avant-coureur évident de l'éveil de 'quelque chose' !",
						"spanish": "¡Ejem! No me sorprende. ¡Esto no es una simple mutación biológica! ¡Es un claro precursor del despertar de 'algo'!",
						"vietnamese": "Khụm! Không bất ngờ. Đây không phải là một biến đổi sinh học đơn thuần! Đây là điềm báo rõ ràng của sự thức tỉnh của 'thứ gì đó'!",
						"thai": "ฮึ่ม! ไม่ประหลาดใจ นี่ไม่ใช่แค่การกลายพันธุ์ทางชีวภาพธรรมดา! นี่เป็นลางบอกเหตุชัดเจนของการตื่นขึ้นของ 'บางสิ่ง'!",
						"hindi": "खैर! मुझे आश्चर्य नहीं हुआ। यह कोई सामान्य जैविक परिवर्तन नहीं है! यह 'किसी चीज़' के जागरण का स्पष्ट संकेत है!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "내 과학적 육감이 경고하고 있어. 아주 불길한 징조야.",
						"english": "My scientific intuition is warning me. It's a very ominous sign.",
						"japanese": "私の科学的直感が警告している。とても不吉な兆候だ。",
						"chinese": "我的科学直觉正在警告我。这是一个非常不祥的预兆。",
						"french": "Mon sixième sens scientifique me met en garde. C'est un signe très inquiétant.",
						"spanish": "Mi instinto científico me está advirtiendo. Es un signo muy ominoso.",
						"vietnamese": "Trực giác khoa học của tôi đang cảnh báo. Đây là một điềm báo rất đáng ngại.",
						"thai": "สัญชาตญาณทางวิทยาศาสตร์ของฉันกำลังเตือน มันเป็นลางร้ายมาก",
						"hindi": "मेरी वैज्ञानिक अंतर्ज्ञान मुझे चेतावनी दे रही है। यह एक बहुत ही अशुभ संकेत है।"
					},
					"type": "speech",
					"speaker": "briar",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "briar"
				},
				{
					"type": "speech",
					"content": {
						"korean": "숲의 다람쥐들이 도토리를 쌓아두고 회의 중이었다. 한 마리는 안경까지 썼다.",
						"english": "The forest squirrels were holding a meeting, with acorns piled up. One even wore glasses.",
						"japanese": "森のリスたちがドングリを積み上げて会議中だった。一匹はメガネまでかけていた。",
						"chinese": "森林里的松鼠们堆着橡子开会。其中一只还戴着眼镜。",
						"french": "Les écureuils de la forêt tenaient une réunion, des glands empilés. L'un d'eux portait même des lunettes.",
						"spanish": "Las ardillas del bosque estaban en una reunión, con bellotas apiladas. Una de ellas incluso llevaba gafas.",
						"vietnamese": "Những chú sóc trong rừng đang tổ chức một cuộc họp, với những hạt sồi chất đống. Một con còn đeo kính.",
						"thai": "กระรอกในป่ากำลังประชุมกัน กองลูกโอ๊กอยู่เต็มไปหมด ตัวหนึ่งถึงกับสวมแว่นตา",
						"hindi": "जंगल की गिलहरियाँ शाहबलूत जमा करके एक बैठक कर रही थीं। एक ने तो चश्मा भी पहना हुआ था।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "briar",
					"emotion": "happy",
					"content": {
						"korean": "이런 지적 행동! 도토리 경제학에 대한 논의인가? 학회에 발표하면 난리가 나겠군!",
						"english": "Such intellectual behavior! A discussion on acorn economics? Present this at a conference and it'll cause a stir!",
						"japanese": "この知的な行動！ドングリ経済学についての議論か？学会で発表したら大騒ぎになるぞ！",
						"chinese": "这种智慧的行为！难道是在讨论橡子经济学？如果发表到学术会议上，肯定会引起轰动！",
						"french": "Un tel comportement intellectuel ! Une discussion sur l'économie des glands ? Si je présente ça à une conférence, ça va faire sensation !",
						"spanish": "¡Qué comportamiento intelectual! ¿Una discusión sobre la economía de las bellotas? ¡Si lo presento en una conferencia, causará un alboroto!",
						"vietnamese": "Hành vi trí tuệ như vậy! Một cuộc thảo luận về kinh tế học hạt sồi ư? Nếu công bố điều này tại một hội nghị, chắc chắn sẽ gây chấn động!",
						"thai": "พฤติกรรมทางปัญญาเช่นนี้! การอภิปรายเกี่ยวกับเศรษฐศาสตร์ลูกโอ๊กงั้นหรือ? ถ้าได้นำเสนอในการประชุมวิชาการจะต้องเป็นเรื่องใหญ่แน่!",
						"hindi": "यह बौद्धिक व्यवहार! क्या यह शाहबलूत अर्थशास्त्र पर चर्चा है? इसे किसी सम्मेलन में प्रस्तुत करो और यह हंगामा खड़ा कर देगा!"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "저 안경은 또 뭐야… 신기하다.",
						"english": "What's with those glasses...? Fascinating.",
						"japanese": "あのメガネは何だ…珍しいな。",
						"chinese": "那副眼镜又是什么…真稀奇。",
						"french": "C'est quoi ces lunettes... ? Étonnant.",
						"spanish": "¿Qué es eso de las gafas...? Curioso.",
						"vietnamese": "Cái kính đó là gì vậy...? Thật kỳ lạ.",
						"thai": "แว่นตานั่นมันอะไรอีกนะ... น่าทึ่งจริงๆ",
						"hindi": "वह चश्मा भी क्या है... अजीब है।"
					}
				},
				{
					"content": {
						"korean": "하지만… 일반적인 진화론으로는 설명 불가능해. '쿠'의 잔재가 생명체의 인지 기능을 왜곡하고 있어.",
						"english": "However... it's inexplicable by conventional evolutionary theory. The remnants of 'Koo' are distorting the cognitive functions of living beings.",
						"japanese": "しかし…一般的な進化論では説明不可能だ。『クー』の残滓が生命体の認知機能を歪めている。",
						"chinese": "但是…这无法用一般的进化论来解释。‘库’的残余正在扭曲生物的认知功能。",
						"french": "Cependant... c'est inexplicable par la théorie de l'évolution conventionnelle. Les vestiges de 'Koo' déforment les fonctions cognitives des êtres vivants.",
						"spanish": "Sin embargo... es inexplicable por la teoría evolutiva convencional. Los vestigios de 'Koo' están distorsionando las funciones cognitivas de los seres vivos.",
						"vietnamese": "Tuy nhiên... điều này không thể giải thích bằng lý thuyết tiến hóa thông thường. Tàn dư của 'Koo' đang bóp méo chức năng nhận thức của sinh vật.",
						"thai": "แต่... มันอธิบายไม่ได้ด้วยทฤษฎีวิวัฒนาการทั่วไป ซากของ 'คู' กำลังบิดเบือนการรับรู้ของสิ่งมีชีวิต",
						"hindi": "हालांकि... यह सामान्य विकासवादी सिद्धांत से स्पष्ट नहीं किया जा सकता। 'कू' के अवशेष जीवित प्राणियों के संज्ञानात्मक कार्यों को विकृत कर रहे हैं।"
					},
					"type": "speech",
					"speaker": "briar",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "내 과학적 가설이 흔들리고 있어! 이 미지의 힘은 도대체…!",
						"english": "My scientific hypothesis is shaking! What in the world is this unknown power...!",
						"japanese": "私の科学的仮説が揺らいでいる！この未知の力は一体…！",
						"chinese": "我的科学假设正在动摇！这未知的力量到底是什么…！",
						"french": "Mon hypothèse scientifique vacille ! Qu'est-ce que c'est que cette force inconnue... !",
						"spanish": "¡Mi hipótesis científica se tambalea! ¡Qué demonios es este poder desconocido...!",
						"vietnamese": "Giả thuyết khoa học của tôi đang lung lay! Sức mạnh bí ẩn này rốt cuộc là gì...!",
						"thai": "สมมติฐานทางวิทยาศาสตร์ของฉันกำลังสั่นคลอน! พลังลึกลับนี้มันอะไรกันแน่...!",
						"hindi": "मेरी वैज्ञानिक परिकल्पना हिल रही है! यह अज्ञात शक्ति आखिर क्या है...!"
					},
					"type": "speech",
					"speaker": "briar",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "briar",
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "briar",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "에너지 파동이 점점 더 강력해지고 있어. 위험 수준을 넘어서고 있네!",
						"english": "The energy surges are getting stronger. They're exceeding dangerous levels!",
						"japanese": "エネルギーの波動がどんどん強くなっている。危険なレベルを超えているわ！",
						"chinese": "能量波动越来越强了。已经超过危险水平了！",
						"french": "Les ondes énergétiques deviennent de plus en plus fortes. Elles dépassent les niveaux de danger !",
						"spanish": "Las ondas de energía son cada vez más fuertes. ¡Están superando los niveles de peligro!",
						"vietnamese": "Sóng năng lượng ngày càng mạnh. Chúng đang vượt quá mức nguy hiểm rồi!",
						"thai": "คลื่นพลังงานยิ่งแรงขึ้นเรื่อยๆ มันเกินระดับอันตรายไปแล้ว!",
						"hindi": "ऊर्जा की तरंगें और तेज़ होती जा रही हैं। वे ख़तरनाक स्तर को पार कर रही हैं!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이제 정말 돌아갈 때 아닐까? 너무 깊이 들어온 것 같아.",
						"english": "Shouldn't we turn back now? I think we've gone too deep.",
						"japanese": "もう引き返す頃じゃない？深入りしすぎたみたい。",
						"chinese": "我们是不是该回去了？我觉得我们已经深入太多了。",
						"french": "Ne devrions-nous pas faire demi-tour maintenant ? Je crois que nous sommes allés trop loin.",
						"spanish": "¿No deberíamos volver ahora? Creo que hemos ido demasiado lejos.",
						"vietnamese": "Đã đến lúc quay lại rồi phải không? Có vẻ chúng ta đã đi quá sâu.",
						"thai": "ได้เวลาถอยกลับแล้วไม่ใช่เหรอ? ดูเหมือนเราจะเข้ามาลึกเกินไปแล้วนะ",
						"hindi": "क्या अब हमें वापस नहीं जाना चाहिए? मुझे लगता है कि हम बहुत अंदर आ गए हैं।"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니! 나는 이 현상의 원인을 밝혀야 해! 인류의 미래가 걸린 문제라고! 학회에 발표해야…!",
						"english": "No! I must uncover the cause of this phenomenon! Humanity's future depends on it! I have to present this at the conference...!",
						"japanese": "いや！私はこの現象の原因を突き止めなければ！人類の未来がかかっているんだ！学会で発表しないと…！",
						"chinese": "不！我必须查明这种现象的原因！这关乎人类的未来！我必须在学会上发表…！",
						"french": "Non ! Je dois découvrir la cause de ce phénomène ! L'avenir de l'humanité en dépend ! Je dois présenter ça à la conférence... !",
						"spanish": "¡No! ¡Debo descubrir la causa de este fenómeno! ¡El futuro de la humanidad está en juego! ¡Tengo que presentarlo en la conferencia...!",
						"vietnamese": "Không! Tôi phải tìm ra nguyên nhân của hiện tượng này! Tương lai của nhân loại đang bị đe dọa! Tôi phải báo cáo tại hội nghị...!",
						"thai": "ไม่! ฉันต้องเปิดเผยสาเหตุของปรากฏการณ์นี้! อนาคตของมนุษยชาติขึ้นอยู่กับมันนะ! ฉันต้องนำเสนอในการประชุม...!",
						"hindi": "नहीं! मुझे इस घटना का कारण जानना होगा! यह मानवता के भविष्य का सवाल है! मुझे इसे सम्मेलन में प्रस्तुत करना होगा...!"
					},
					"speaker": "briar",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "학회보다 우리의 생존이 더 중요할 텐데….",
						"english": "Our survival is probably more important than a conference...",
						"japanese": "学会より私たちの生存の方が重要だと思うんだけど…。",
						"chinese": "我们的生存可能比学会更重要…",
						"french": "Notre survie est probablement plus importante qu'une conférence...",
						"spanish": "Nuestra supervivencia es probablemente más importante que una conferencia...",
						"vietnamese": "Sự sống còn của chúng ta có lẽ quan trọng hơn hội nghị đó...",
						"thai": "การรอดชีวิตของเราน่าจะสำคัญกว่าการประชุมนะ...",
						"hindi": "हमारी ज़िंदगी शायद किसी सम्मेलन से ज़्यादा ज़रूरी है..."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "불길한 예감은 현실이 되었다. 숲의 가장 깊은 곳, 거대한 그림자가 우리를 기다리고 있었다.",
						"english": "The ominous premonition became reality. In the deepest part of the forest, a colossal shadow awaited us.",
						"japanese": "不吉な予感は現実となった。森の最も深い場所で、巨大な影が私たちを待ち受けていた。",
						"chinese": "不祥的预感变成了现实。在森林最深处，一个巨大的影子正等着我们。",
						"french": "La prémonition sinistre est devenue réalité. Dans la partie la plus profonde de la forêt, une ombre colossale nous attendait.",
						"spanish": "La premonición ominosa se hizo realidad. En lo más profundo del bosque, una sombra colosal nos esperaba.",
						"vietnamese": "Linh cảm chẳng lành đã trở thành hiện thực. Nơi sâu nhất của khu rừng, một bóng đen khổng lồ đang đợi chúng tôi.",
						"thai": "ลางสังหรณ์ร้ายกลายเป็นความจริง ในส่วนที่ลึกที่สุดของป่า เงาขนาดมหึมารอคอยเราอยู่",
						"hindi": "अशुभ पूर्वाभास सच हो गया। जंगल के सबसे गहरे हिस्से में, एक विशाल छाया हमारा इंतजार कर रही थी।"
					}
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "약한 자들은 숲의 진정한 힘을 이해할 수 없다. 패배를 받아들여라.",
						"english": "The weak cannot comprehend the true power of the forest. Accept your defeat.",
						"japanese": "弱き者には森の真の力は理解できない。敗北を受け入れよ。",
						"chinese": "弱者无法理解森林的真正力量。接受你的失败吧。",
						"french": "Les faibles ne peuvent comprendre le vrai pouvoir de la forêt. Accepte ta défaite.",
						"spanish": "Los débiles no pueden comprender el verdadero poder del bosque. Acepta tu derrota.",
						"vietnamese": "Kẻ yếu không thể hiểu được sức mạnh thật sự của rừng. Hãy chấp nhận thất bại của ngươi.",
						"thai": "คนอ่อนแอไม่สามารถเข้าใจพลังที่แท้จริงของป่าได้ จงยอมรับความพ่ายแพ้ของเจ้าซะ",
						"hindi": "कमजोर लोग जंगल की सच्ची शक्ति को नहीं समझ सकते। अपनी हार स्वीकार करो।"
					}
				},
				{
					"content": {
						"korean": "젠장… 아직 끝나지 않았어! '쿠의 심장'이 뭔지 반드시 알아낼 거야!",
						"english": "Damn it... It's not over yet! I'll definitely find out what 'The Heart of Ku' is!",
						"japanese": "くそ…まだ終わってないわ！「クーの心臓」が何なのか、必ず突き止めてやる！",
						"chinese": "该死…还没结束！我一定要查清楚‘库之心’是什么！",
						"french": "Mince... Ce n'est pas encore fini ! Je découvrirai ce qu'est le 'Cœur de Ku' !",
						"spanish": "Maldita sea... ¡Esto no ha terminado todavía! ¡Definitivamente descubriré qué es 'El Corazón de Ku'!",
						"vietnamese": "Chết tiệt… Vẫn chưa kết thúc! Tôi nhất định sẽ tìm ra 'Trái tim của Ku' là gì!",
						"thai": "ให้ตายสิ… ยังไม่จบหรอก! ฉันจะหาให้เจอว่า 'หัวใจแห่งคู' คืออะไรกันแน่!",
						"hindi": "धिक्कार है... अभी खत्म नहीं हुआ! मैं निश्चित रूप से पता लगाऊँगा कि 'कू का हृदय' क्या है!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "briar"
				},
				{
					"speaker": "briar",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이런… 데이터가 부족해! 다시 분석해야 해! 어서 재도전하게!",
						"english": "Damn it... Insufficient data! I need to analyze it again! Come on, let's retry!",
						"japanese": "しまった…データが足りない！もう一度分析しないと！さあ、再挑戦するんだ！",
						"chinese": "糟糕…数据不足！我需要重新分析！快，再挑战一次！",
						"french": "Zut... Données insuffisantes ! Je dois les analyser à nouveau ! Allez, réessayons !",
						"spanish": "¡Maldición... Datos insuficientes! ¡Necesito analizarlos de nuevo! ¡Vamos, reintentémoslo!",
						"vietnamese": "Ôi không… Dữ liệu không đủ! Tôi cần phân tích lại! Mau, thử lại đi!",
						"thai": "แย่แล้ว... ข้อมูลไม่เพียงพอ! ต้องวิเคราะห์ใหม่! เร็วเข้า ลองอีกครั้ง!",
						"hindi": "ओह नहीं... डेटा अपर्याप्त है! मुझे इसे फिर से विश्लेषण करना होगा! चलो, फिर से कोशिश करो!"
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "크윽… 겨우 이 정도라니. 하지만 '쿠의 심장'은 깨어날 것이다. 그때 다시 보자.",
						"english": "Ugh... Is that all you've got? But the 'Heart of Ku' will awaken. We'll meet again then.",
						"japanese": "くっ…たかがこれしきか。しかし、「クーの心臓」は目覚めるだろう。その時、また会おう。",
						"chinese": "呃…就这点本事吗。但‘库之心’将会苏醒。到那时，我们再见。",
						"french": "Ugh... C'est tout ce que tu as ? Mais le 'Cœur de Ku' s'éveillera. Nous nous reverrons alors.",
						"spanish": "Ugh... ¿Eso es todo lo que tienes? Pero el 'Corazón de Ku' despertará. Nos veremos de nuevo entonces.",
						"vietnamese": "Khụ… Chỉ có thế này thôi sao. Nhưng 'Trái tim của Ku' sẽ thức tỉnh. Khi đó chúng ta sẽ gặp lại.",
						"thai": "อึก... แค่นี้เองเหรอ? แต่ 'หัวใจแห่งคู' จะตื่นขึ้น แล้วเราจะได้เจอกันอีกครั้ง",
						"hindi": "उफ़... बस इतना ही? लेकिन 'कू का हृदय' जागृत होगा। तब हम फिर मिलेंगे।"
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "도망쳤어! 하지만 '쿠의 심장'이라니… 대체 뭐야?",
						"english": "They ran away! But 'Heart of Ku'... What on earth is that?",
						"japanese": "逃げたわね！でも「クーの心臓」って…一体何なの？",
						"chinese": "他们逃跑了！但是‘库之心’…那到底是什么？",
						"french": "Ils se sont enfuis ! Mais le 'Cœur de Ku'... Qu'est-ce que c'est que ça ?",
						"spanish": "¡Huyeron! Pero el 'Corazón de Ku'... ¿Qué demonios es eso?",
						"vietnamese": "Họ đã trốn thoát! Nhưng 'Trái tim của Ku'... Rốt cuộc đó là gì?",
						"thai": "หนีไปแล้ว! แต่ 'หัวใจแห่งคู'… มันคืออะไรกันแน่?",
						"hindi": "वे भाग गए! लेकिन 'कू का हृदय'... वह आखिर क्या है?"
					}
				},
				{
					"action": "exit",
					"type": "direction",
					"direction": "up",
					"speaker": "random_boss",
					"duration_ms": 400
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "briar"
				},
				{
					"content": {
						"korean": "'쿠의 심장'이라! 역시 내 가설이 틀리지 않았어! 이건 엄청난 발견일세!",
						"english": "'The Heart of Ku'! My hypothesis wasn't wrong after all! This is an incredible discovery!",
						"japanese": "「クーの心臓」だと！やはり私の仮説は間違っていなかった！これはとてつもない発見だ！",
						"chinese": "‘库之心’！果然我的假设没有错！这是一个惊人的发现！",
						"french": "'Le Cœur de Ku' ! Mon hypothèse n'était donc pas fausse ! C'est une découverte incroyable !",
						"spanish": "¡'El Corazón de Ku'! ¡Mi hipótesis no estaba equivocada después de todo! ¡Esto es un descubrimiento increíble!",
						"vietnamese": "'Trái tim của Ku'! Quả nhiên giả thuyết của tôi không sai! Đây là một phát hiện phi thường!",
						"thai": "'หัวใจแห่งคู'! ในที่สุดสมมติฐานของฉันก็ไม่ผิด! นี่เป็นการค้นพบที่ยิ่งใหญ่!",
						"hindi": "'कू का हृदय'! आखिर मेरी परिकल्पना गलत नहीं थी! यह एक अविश्वसनीय खोज है!"
					},
					"type": "speech",
					"speaker": "briar",
					"emotion": "happy"
				},
				{
					"type": "speech",
					"content": {
						"korean": "브라이어, 지금 논문 쓸 때가 아니잖아! 더 큰 위협이 오고 있다고!",
						"english": "Briar, this isn't the time to write a paper! A greater threat is coming!",
						"japanese": "ブライアー、今は論文を書いている場合じゃないわ！もっと大きな脅威が迫っているのよ！",
						"chinese": "布莱尔，现在不是写论文的时候！更大的威胁正在逼近！",
						"french": "Briar, ce n'est pas le moment d'écrire un article ! Une menace plus grande approche !",
						"spanish": "¡Briar, no es momento de escribir un artículo! ¡Una amenaza mayor se acerca!",
						"vietnamese": "Briar, đây không phải lúc để viết luận văn! Một mối đe dọa lớn hơn đang đến!",
						"thai": "ไบรเออร์ นี่ไม่ใช่เวลามาเขียนวิทยานิพนธ์นะ! ภัยคุกคามที่ใหญ่กว่ากำลังมาถึงแล้ว!",
						"hindi": "ब्रायर, यह शोध-पत्र लिखने का समय नहीं है! एक बड़ा खतरा आ रहा है!"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "정체 모를 적은 물러났지만, '쿠의 심장'이라는 새로운 단서를 남겼다.",
						"english": "The unknown enemy retreated, but left behind a new clue: 'The Heart of Ku'.",
						"japanese": "正体不明の敵は退いたが、「クーの心臓」という新たな手がかりを残した。",
						"chinese": "身份不明的敌人撤退了，但留下了一个新线索：‘库之心’。",
						"french": "L'ennemi inconnu a battu en retraite, mais a laissé un nouvel indice : 'Le Cœur de Ku'.",
						"spanish": "El enemigo desconocido se retiró, pero dejó una nueva pista: 'El Corazón de Ku'.",
						"vietnamese": "Kẻ địch bí ẩn đã rút lui, nhưng để lại một manh mối mới: 'Trái tim của Ku'.",
						"thai": "ศัตรูที่ไม่ระบุตัวตนได้ล่าถอยไป แต่ได้ทิ้งเบาะแสใหม่ไว้: 'หัวใจแห่งคู'",
						"hindi": "अज्ञात शत्रु पीछे हट गया, लेकिन एक नया सुराग छोड़ गया: 'कू का हृदय'।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "숲은 여전히 고통받고 있었다. 이제 이 미스터리를 파헤칠 시간이다.",
						"english": "The forest was still suffering. Now it's time to uncover this mystery.",
						"japanese": "森は依然として苦しんでいた。今こそこの謎を解き明かす時だ。",
						"chinese": "森林仍在遭受苦难。现在是时候揭开这个谜团了。",
						"french": "La forêt souffrait toujours. Il est maintenant temps de percer ce mystère.",
						"spanish": "El bosque seguía sufriendo. Ahora es el momento de desentrañar este misterio.",
						"vietnamese": "Rừng vẫn đang phải chịu đựng. Bây giờ là lúc để khám phá bí ẩn này.",
						"thai": "ป่ายังคงเจ็บปวด ถึงเวลาแล้วที่จะต้องเปิดเผยความลึกลับนี้",
						"hindi": "जंगल अभी भी पीड़ित था। अब इस रहस्य को उजागर करने का समय है।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "드디어, 모든 이상 현상의 근원 앞에 섰다. 거대한 정체 모를 자가 우리를 노려보고 있었다.",
						"english": "Finally, we stood before the source of all anomalies. A colossal, unknown entity glared at us.",
						"japanese": "ついに、すべての異常現象の根源の前に立った。巨大な正体不明の存在が私たちを睨みつけていた。",
						"chinese": "终于，我们站在了所有异常现象的根源面前。一个巨大的、不明身份的生物正盯着我们。",
						"french": "Enfin, nous nous tenions devant la source de toutes les anomalies. Une entité colossale et inconnue nous fixait.",
						"spanish": "Finalmente, nos encontramos ante la fuente de todas las anomalías. Una entidad colosal y desconocida nos miraba fijamente.",
						"vietnamese": "Cuối cùng, chúng tôi đã đứng trước nguồn gốc của mọi hiện tượng bất thường. Một thực thể khổng lồ, không rõ danh tính đang nhìn chằm chằm vào chúng tôi.",
						"thai": "ในที่สุด เราก็ยืนอยู่หน้าต้นตอของปรากฏการณ์ผิดปกติทั้งหมด สิ่งมีชีวิตขนาดมหึมาที่ไม่รู้จักกำลังจ้องมองเราอยู่",
						"hindi": "आखिरकार, हम सभी असामान्य घटनाओं के स्रोत के सामने खड़े थे। एक विशाल, अज्ञात इकाई हमें घूर रही थी।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "감히 여기까지 기어들어오다니… 벌레만도 못한 것들.",
						"english": "How dare you crawl all the way here... Less than mere insects.",
						"japanese": "よくもここまで這い上がってきたな… 虫けら以下め。",
						"chinese": "你们竟敢爬到这里来… 连虫子都不如的东西。",
						"french": "Comment osez-vous vous traîner jusqu'ici... Moins que de simples insectes.",
						"spanish": "Cómo os atrevéis a arrastraros hasta aquí... Menos que simples insectos.",
						"vietnamese": "Dám bò đến tận đây sao... Đồ còn thua cả lũ sâu bọ.",
						"thai": "บังอาจคืบคลานมาถึงที่นี่... พวกที่ต่ำต้อยยิ่งกว่าแมลง",
						"hindi": "तुम्हारी हिम्मत कैसे हुई यहाँ तक रेंगकर आने की... कीड़े-मकोड़ों से भी बदतर।"
					}
				},
				{
					"content": {
						"korean": "네가 이 숲을 망치고 있는 주범이냐!",
						"english": "Are you the main culprit ruining this forest!",
						"japanese": "お前がこの森を荒らしている元凶か！",
						"chinese": "你就是破坏这片森林的罪魁祸首吗！",
						"french": "Es-tu le principal coupable qui détruit cette forêt !",
						"spanish": "¡¿Eres tú el principal culpable de arruinar este bosque?!",
						"vietnamese": "Ngươi là kẻ chủ mưu phá hoại khu rừng này sao!",
						"thai": "แกคือต้นเหตุที่ทำลายป่านี้ใช่ไหม!",
						"hindi": "क्या तुम ही इस जंगल को बर्बाद करने वाले मुख्य अपराधी हो!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "briar",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "briar",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이게 바로… '무언가'의 실체! 엄청난 에너지 측정치! 학회에서 기절하겠군!",
						"english": "This is it... the true form of 'something'! Incredible energy readings! They'll faint at the conference!",
						"japanese": "これこそが… '何か'の正体！驚異的なエネルギー測定値！学会で気絶するだろうな！",
						"chinese": "这就是… '某种东西'的真面目！惊人的能量读数！学会上的人一定会晕倒的！",
						"french": "C'est ça... la véritable forme de 'quelque chose' ! Des relevés d'énergie incroyables ! Ils vont s'évanouir à la conférence !",
						"spanish": "¡Esto es... la verdadera forma de 'algo'! ¡Mediciones de energía increíbles! ¡En la conferencia se desmayarán!",
						"vietnamese": "Đây chính là... thực thể của 'cái gì đó'! Chỉ số năng lượng khủng khiếp! Chắc hội nghị sẽ ngất xỉu mất!",
						"thai": "นี่แหละคือ... ตัวตนที่แท้จริงของ 'บางสิ่ง'! ค่าพลังงานมหาศาล! พวกเขาจะสลบไปในการประชุมแน่!",
						"hindi": "यही है... 'किसी चीज़' का असली रूप! अविश्वसनीय ऊर्जा मापन! वे सम्मेलन में बेहोश हो जाएँगे!"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "숲의 새로운 질서는 이미 시작되었다. 너희 따위가 막을 수 없다.",
						"english": "A new order for the forest has already begun. You pathetic beings cannot stop it.",
						"japanese": "森の新しい秩序はすでに始まった。お前たちごときが止められるものか。",
						"chinese": "森林的新秩序已经开始。你们这些家伙是无法阻止的。",
						"french": "Un nouvel ordre pour la forêt a déjà commencé. Vous autres, misérables, ne pouvez pas l'arrêter.",
						"spanish": "Un nuevo orden para el bosque ya ha comenzado. Seres insignificantes como vosotros no podréis detenerlo.",
						"vietnamese": "Trật tự mới của khu rừng đã bắt đầu rồi. Loại các ngươi không thể ngăn cản được.",
						"thai": "ระเบียบใหม่ของป่าได้เริ่มต้นขึ้นแล้ว พวกแกไม่มีทางหยุดมันได้หรอก",
						"hindi": "जंगल का एक नया विधान पहले ही शुरू हो चुका है। तुम जैसे तुच्छ प्राणी इसे रोक नहीं सकते।"
					},
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"세계수. 그 뿌리는 이미 썩어가고 있었다.",
			"치킨-사우루스 사건 이후, 숲은 기묘한 변이를 겪었다.",
			"형광 분홍색 버섯이 트림을 하고, 땅은 불안하게 울부짖었다.",
			"고대 생태학자 브라이어는 흥분한 얼굴로 노트만 끄적였다.",
			"이 모든 것이, 거대한 그림자의 전조였다."
		],
		"english": [
			"The World Tree. Its roots were already rotting.",
			"After the Chicken-saurus Incident, the forest underwent strange mutations.",
			"Fluorescent pink mushrooms burped, and the ground groaned uneasily.",
			"Briar, the ancient ecologist, excitedly scribbled in her notebook.",
			"All of this was a prelude to a colossal shadow."
		],
		"japanese": [
			"世界樹。その根はすでに腐り始めていた。",
			"チキンサウルス事件以降、森は奇妙な変異を遂げた。",
			"蛍光ピンクのキノコがゲップをし、大地は不安げに唸った。",
			"古代生態学者ブライアは、興奮した顔でノートに書きなぐっていた。",
			"これらすべてが、巨大な影の前触れだった。"
		],
		"chinese": [
			"世界树。它的根早已腐烂。",
			"鸡龙事件后，森林经历了奇特的变异。",
			"荧光粉色蘑菇打着嗝，大地不安地咆哮着。",
			"古代生态学家布莱尔兴奋地只顾在笔记本上涂写。",
			"这一切，都是巨大阴影的预兆。"
		],
		"french": [
			"L'Arbre Monde. Ses racines pourrissaient déjà.",
			"Après l'incident du Poulet-saure, la forêt subit d'étranges mutations.",
			"Des champignons roses fluo rotaient, et la terre gémissait avec inquiétude.",
			"Briar, l'écologiste antique, griffonnait fiévreusement dans son carnet.",
			"Tout cela était le prélude d'une ombre colossale."
		],
		"spanish": [
			"El Árbol del Mundo. Sus raíces ya se estaban pudriendo.",
			"Tras el Incidente del Pollo-saurio, el bosque sufrió extrañas mutaciones.",
			"Setas de color rosa fluorescente eructaban, y la tierra gemía con inquietud.",
			"Briar, la ecologista antigua, garabateaba emocionada en su cuaderno.",
			"Todo esto era el preludio de una sombra colosal."
		],
		"vietnamese": [
			"Cây Thế Giới. Rễ của nó đã thối rữa.",
			"Sau sự kiện Gà-khủng long, khu rừng trải qua những biến đổi kỳ lạ.",
			"Nấm hồng huỳnh quang ợ hơi, mặt đất rên rỉ bất an.",
			"Nhà sinh thái học cổ đại Briar, mặt đầy phấn khích, chỉ cặm cụi ghi chép.",
			"Tất cả những điều này, là điềm báo của một bóng tối khổng lồ."
		],
		"thai": [
			"ต้นไม้โลก. รากของมันเน่าเปื่อยไปแล้ว",
			"หลังเหตุการณ์ไก่ซอรัส ป่าก็กลายพันธุ์อย่างประหลาด",
			"เห็ดสีชมพูเรืองแสงเรอ และพื้นดินก็ครวญครางอย่างไม่สบายใจ",
			"นักนิเวศวิทยาโบราณ ไบรเออร์ ขีดเขียนในสมุดบันทึกด้วยใบหน้าที่ตื่นเต้น",
			"ทั้งหมดนี้คือลางบอกเหตุของเงามหึมา"
		],
		"hindi": [
			"विश्व वृक्ष। उसकी जड़ें पहले ही सड़ चुकी थीं।",
			"चिकन-सौरस घटना के बाद, जंगल में अजीबोगरीब परिवर्तन हुए।",
			"फ्लोरोसेंट गुलाबी मशरूम डकार रहे थे, और धरती बेचैनी से कराह रही थी।",
			"प्राचीन पारिस्थितिकीविद् ब्रायेर, उत्तेजित चेहरे के साथ केवल नोट्स लिख रहा था।",
			"यह सब, एक विशाल परछाई का अग्रदूत था।"
		]
	}
} as const;
