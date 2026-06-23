export const scenario_snowy_galdrgrim_47_03 = {
	"scenario_id": "snowy_galdrgrim_47_03",
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "거대한 얼음 동굴 입구. 냉기가 폐부를 찔렀다.",
						"english": "The entrance to a massive ice cave. The chilling air pierced through me.",
						"japanese": "巨大な氷の洞窟の入り口。冷気が肺腑を刺した。",
						"chinese": "巨大的冰洞入口。寒气刺骨。",
						"french": "L'entrée d'une immense grotte de glace. L'air glacial me transperça.",
						"spanish": "La entrada a una enorme cueva de hielo. El aire helado me atravesó.",
						"vietnamese": "Lối vào một hang động băng khổng lồ. Không khí lạnh thấu xương.",
						"thai": "ทางเข้าถ้ำน้ำแข็งขนาดใหญ่ อากาศหนาวเหน็บแทงทะลุร่าง",
						"hindi": "एक विशाल बर्फ की गुफा का प्रवेश द्वार। सर्द हवा ने मुझे भेद दिया।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이게 그… 얼음 동굴인가? 으스스하네.",
						"english": "Is this... the ice cave? It's eerie.",
						"japanese": "これが…その氷の洞窟か？不気味だな。",
						"chinese": "这就是……冰洞吗？真阴森。",
						"french": "C'est ça... la grotte de glace ? C'est lugubre.",
						"spanish": "¿Es esta... la cueva de hielo? Es espeluznante.",
						"vietnamese": "Đây là... hang động băng sao? Rợn người thật.",
						"thai": "นี่คือ... ถ้ำน้ำแข็งนั่นเหรอ? มันน่าขนลุกนะ.",
						"hindi": "क्या यह... बर्फ की गुफा है? यह भयानक है।"
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "finn"
				},
				{
					"speaker": "finn",
					"content": {
						"korean": "탐사 기록엔 없던 곳이야. 함부로 들어가지 마.",
						"english": "This place isn't in the expedition logs. Don't go in carelessly.",
						"japanese": "ここは探査記録にない場所だ。むやみに入らないでくれ。",
						"chinese": "这里不在探险记录中。不要贸然进去。",
						"french": "Cet endroit ne figure pas dans les journaux d'expédition. N'y entrez pas imprudemment.",
						"spanish": "Este lugar no está en los registros de la expedición. No entres sin precaución.",
						"vietnamese": "Nơi này không có trong nhật ký thám hiểm. Đừng vào liều lĩnh.",
						"thai": "ที่นี่ไม่มีในบันทึกการสำรวจ อย่าเข้าไปโดยไม่ระมัดระวัง",
						"hindi": "यह जगह अभियान के लॉग में नहीं है। लापरवाही से अंदर मत जाओ।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이런 미지의 공간은 위험 요소가 너무 많아.",
						"english": "Unknown spaces like this have too many dangers.",
						"japanese": "このような未知の空間には危険要素が多すぎる。",
						"chinese": "这种未知空间危险因素太多了。",
						"french": "Des espaces inconnus comme celui-ci recèlent trop de dangers.",
						"spanish": "Espacios desconocidos como este tienen demasiados peligros.",
						"vietnamese": "Những không gian chưa biết như thế này tiềm ẩn quá nhiều nguy hiểm.",
						"thai": "พื้นที่ที่ไม่รู้จักแบบนี้มีอันตรายมากเกินไป",
						"hindi": "इस तरह के अज्ञात स्थानों में बहुत अधिक खतरे होते हैं।"
					},
					"type": "speech",
					"speaker": "finn"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "finn"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이건… 사람 시신이잖아? 전부 얼어붙어 있어.",
						"english": "These are... human remains, aren't they? All frozen solid.",
						"japanese": "これは…人の遺体じゃないか？すべて凍りついている。",
						"chinese": "这是……人类的尸体？全都冻住了。",
						"french": "Ce sont... des corps humains, n'est-ce pas ? Tous gelés.",
						"spanish": "Estos son... ¿restos humanos, verdad? Todos congelados.",
						"vietnamese": "Đây là... xác người sao? Tất cả đều đóng băng rồi.",
						"thai": "นี่มัน... ศพคนไม่ใช่เหรอ? แข็งเป็นน้ำแข็งไปหมดแล้ว.",
						"hindi": "ये... इंसानी अवशेष हैं, है ना? सब जम गए हैं।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "말도 안 돼. 탐사대가 이렇게 많이… 단순한 사고가 아니야.",
						"english": "Unbelievable. So many of the expedition team... This isn't just an accident.",
						"japanese": "信じられない。こんなに多くの探査隊が…ただの事故じゃない。",
						"chinese": "开什么玩笑。探险队这么多人……这不是简单的事故。",
						"french": "Incroyable. Tant de membres de l'équipe d'expédition... Ce n'est pas un simple accident.",
						"spanish": "Inaudito. Tantos del equipo de expedición... Esto no es solo un accidente.",
						"vietnamese": "Không thể tin được. Rất nhiều thành viên đội thám hiểm... Đây không chỉ là một tai nạn đơn thuần.",
						"thai": "ไม่น่าเชื่อเลย ทีมสำรวจมากมายขนาดนี้... นี่ไม่ใช่แค่อุบัติเหตุธรรมดา",
						"hindi": "अविश्वसनीय। अभियान दल के इतने सारे लोग... यह सिर्फ एक दुर्घटना नहीं है।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "유품이… 우리가 들었던 전설 속 그림이랑 똑같아.",
						"english": "This relic... it's identical to the drawing from the legend we heard.",
						"japanese": "この遺物… 私たちが聞いた伝説の絵とそっくりだ。",
						"chinese": "这遗物……和我们听说的传说中的画一模一样。",
						"french": "Cet artefact... il est identique au dessin de la légende que nous avons entendue.",
						"spanish": "Esta reliquia... es idéntica al dibujo de la leyenda que escuchamos.",
						"vietnamese": "Di vật này... giống hệt bức tranh trong truyền thuyết chúng ta từng nghe.",
						"thai": "วัตถุโบราณนี้... เหมือนกับภาพวาดในตำนานที่เราเคยได้ยินมา",
						"hindi": "यह अवशेष... बिल्कुल वैसी ही तस्वीर है जैसी हमने किंवदंती में सुनी थी。"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "패턴이 같아. 이건 우연이 아니야. 뭔가 반복되고 있어.",
						"english": "The pattern's the same. This isn't a coincidence. Something is repeating.",
						"japanese": "パターンが同じだ。これは偶然じゃない。何かが繰り返されている。",
						"chinese": "图案一样。这不是巧合。有什么东西在重复着。",
						"french": "Le motif est le même. Ce n'est pas une coïncidence. Quelque chose se répète.",
						"spanish": "El patrón es el mismo. Esto no es una coincidencia. Algo se está repitiendo.",
						"vietnamese": "Hoa văn giống nhau. Đây không phải ngẫu nhiên. Có gì đó đang lặp lại.",
						"thai": "รูปแบบเหมือนกัน นี่ไม่ใช่เรื่องบังเอิญ มีบางอย่างกำลังซ้ำรอย",
						"hindi": "पैटर्न वही है। यह कोई संयोग नहीं है। कुछ दोहराया जा रहा है।"
					},
					"type": "speech",
					"speaker": "finn"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이 기분… 내가 전에 겪었던 악몽 같아.",
						"english": "This feeling... it's like a nightmare I've had before.",
						"japanese": "この感覚… 以前に経験した悪夢のようだ。",
						"chinese": "这种感觉……就像我以前做过的噩梦。",
						"french": "Cette sensation... c'est comme un cauchemar que j'ai déjà vécu.",
						"spanish": "Esta sensación... es como una pesadilla que ya tuve antes.",
						"vietnamese": "Cảm giác này... giống như một cơn ác mộng tôi từng trải qua.",
						"thai": "ความรู้สึกนี้... เหมือนฝันร้ายที่ฉันเคยเจอมาก่อน",
						"hindi": "यह एहसास... मेरे पहले देखे गए बुरे सपने जैसा है।"
					},
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"speaker": "finn"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "얼어붙은 채 고통스러운 표정의 시신들. 주변은 이상할 정도로 평화로웠다.",
						"english": "Frozen corpses with agonizing expressions. The surroundings were eerily peaceful.",
						"japanese": "凍りつき、苦悶の表情を浮かべた死体。周囲は異様なほど平和だった。",
						"chinese": "冰冻的尸体，面部表情痛苦。周围异常平静。",
						"french": "Des corps gelés aux expressions agonisantes. Les environs étaient étrangement paisibles.",
						"spanish": "Cadáveres congelados con expresiones de agonía. Los alrededores estaban extrañamente en paz.",
						"vietnamese": "Những xác chết đóng băng với vẻ mặt đau đớn. Xung quanh lại bình yên đến lạ.",
						"thai": "ศพที่แข็งตัวพร้อมสีหน้าทรมาน บริเวณรอบๆ กลับสงบอย่างประหลาด",
						"hindi": "जमे हुए शव, दर्दनाक भावों के साथ। आसपास अजीब तरह से शांति थी।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이 사람들은 왜 이렇게 고통스러워 보이지? 얼어 죽은 것 같지 않아.",
						"english": "Why do these people look so pained? It doesn't seem like they froze to death.",
						"japanese": "なぜこの人たちはこんなに苦しそうなんだ？凍死したようには見えない。",
						"chinese": "这些人为什么看起来如此痛苦？他们似乎不是冻死的。",
						"french": "Pourquoi ces gens ont-ils l'air si souffrant ? On dirait pas qu'ils sont morts de froid.",
						"spanish": "¿Por qué estas personas parecen tan afligidas? No parece que murieran congeladas.",
						"vietnamese": "Tại sao những người này lại trông đau đớn đến vậy? Dường như họ không chết cóng.",
						"thai": "ทำไมคนเหล่านี้ถึงดูทรมานขนาดนี้? ไม่เหมือนกับว่าพวกเขาแข็งตาย",
						"hindi": "ये लोग इतने दर्द में क्यों दिख रहे हैं? ऐसा नहीं लगता कि वे ठंड से मरे हैं।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "저 봐. 저 기록. 미완성 문장이야. '지키려… 했지만….'",
						"english": "Look there. That record. An unfinished sentence. 'Tried to protect... but...'",
						"japanese": "あれを見て。あの記録。未完成の文章だ。「守ろうと…したが…。」",
						"chinese": "看那里。那份记录。未完成的句子。“试图保护……但是……”",
						"french": "Regarde là. Ce document. Une phrase inachevée. 'J'ai essayé de protéger... mais...'",
						"spanish": "Mira ahí. Ese registro. Una frase incompleta. 'Intenté proteger... pero...'",
						"vietnamese": "Nhìn kia. Tấm ghi chép đó. Một câu chưa hoàn chỉnh. 'Đã cố gắng bảo vệ... nhưng...'",
						"thai": "ดูนั่นสิ บันทึกนั้น ประโยคที่ยังไม่สมบูรณ์ 'พยายามจะปกป้อง...แต่...'",
						"hindi": "वहां देखो। वह रिकॉर्ड। एक अधूरा वाक्य। 'बचाने की कोशिश की... लेकिन...'"
					},
					"type": "speech",
					"speaker": "finn"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "보존된 게 아니야. 갇힌 거야. 영원히 이 고통 속에.",
						"english": "They weren't preserved. They're trapped. Forever in this agony.",
						"japanese": "保存されたのではない。閉じ込められたのだ。永遠にこの苦痛の中に。",
						"chinese": "他们不是被保存的。他们被困住了。永远在这痛苦之中。",
						"french": "Ils n'ont pas été préservés. Ils sont piégés. Pour toujours dans cette agonie.",
						"spanish": "No fueron conservados. Están atrapados. Para siempre en esta agonía.",
						"vietnamese": "Không phải được bảo tồn. Họ bị mắc kẹt. Vĩnh viễn trong nỗi đau này.",
						"thai": "พวกเขาไม่ได้ถูกรักษาไว้ พวกเขาถูกขังไว้ ตลอดกาลในความทุกข์ทรมานนี้",
						"hindi": "उन्हें संरक्षित नहीं किया गया था। वे फंसे हुए हैं। हमेशा के लिए इस पीड़ा में।"
					},
					"type": "speech",
					"speaker": "finn"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "마치 누군가 의도적으로….",
						"english": "As if someone intentionally...",
						"japanese": "まるで誰かが意図的に…。",
						"chinese": "就好像有人故意……",
						"french": "Comme si quelqu'un, intentionnellement...",
						"spanish": "Como si alguien intencionalmente...",
						"vietnamese": "Cứ như thể ai đó cố ý...",
						"thai": "ราวกับว่ามีใครบางคนจงใจ...",
						"hindi": "जैसे किसी ने जानबूझकर..."
					},
					"type": "speech"
				},
				{
					"speaker": "finn",
					"content": {
						"korean": "더 이상 직감에만 의존할 수 없어. 합리적인 분석이 필요해.",
						"english": "We can no longer rely solely on intuition. Rational analysis is needed.",
						"japanese": "もはや直感だけに頼ることはできない。合理的な分析が必要だ。",
						"chinese": "我们不能再仅仅依靠直觉了。需要进行理性分析。",
						"french": "Nous ne pouvons plus nous fier uniquement à l'intuition. Une analyse rationnelle est nécessaire.",
						"spanish": "Ya no podemos depender solo de la intuición. Se necesita un análisis racional.",
						"vietnamese": "Không thể chỉ dựa vào trực giác nữa. Cần một phân tích hợp lý.",
						"thai": "เราไม่สามารถพึ่งพาสัญชาตญาณเพียงอย่างเดียวได้อีกต่อไป จำเป็นต้องมีการวิเคราะห์อย่างมีเหตุผล",
						"hindi": "हम अब केवल अंतर्ज्ञान पर निर्भर नहीं रह सकते। तार्किक विश्लेषण की आवश्यकता है।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "finn",
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "동굴 깊숙한 곳에서, 거대한 그림자가 나타났다.",
						"english": "Deep within the cave, a colossal shadow appeared.",
						"japanese": "洞窟の奥深くで、巨大な影が現れた。",
						"chinese": "在洞穴深处，一个巨大的影子出现了。",
						"french": "Au plus profond de la caverne, une ombre colossale apparut.",
						"spanish": "En lo más profundo de la cueva, una sombra colosal apareció.",
						"vietnamese": "Sâu trong hang động, một cái bóng khổng lồ xuất hiện.",
						"thai": "ลึกเข้าไปในถ้ำ เงาขนาดมหึมาปรากฏขึ้น",
						"hindi": "गुफा की गहराई में, एक विशाल छाया प्रकट हुई।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "뭐야 저건?!",
						"english": "What is that?!",
						"japanese": "「あれは何だ？！」",
						"chinese": "那是什么？！",
						"french": "Qu'est-ce que c'est que ça ?!",
						"spanish": "¡¿Qué es eso?!",
						"vietnamese": "Cái gì thế kia?!",
						"thai": "นั่นมันอะไร?!",
						"hindi": "वो क्या है?!"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "경고했잖아. 저것이… 이곳을 얼어붙게 만든 장본인이야.",
						"english": "I warned you. That... is what froze this place.",
						"japanese": "「警告したはずだ。あれが…ここを凍らせた元凶だ。」",
						"chinese": "我警告过你。那就是…让这里冰冻的罪魁祸首。",
						"french": "Je vous avais prévenus. C'est ça... qui a gelé cet endroit.",
						"spanish": "Te lo advertí. Eso... es lo que congeló este lugar.",
						"vietnamese": "Ta đã cảnh báo ngươi rồi. Đó... chính là kẻ đã đóng băng nơi này.",
						"thai": "ฉันเตือนนายแล้ว นั่นแหละ...คือสิ่งที่ทำให้ที่นี่กลายเป็นน้ำแข็ง",
						"hindi": "मैंने तुम्हें चेतावनी दी थी। वही... है जिसने इस जगह को जमा दिया।"
					},
					"speaker": "finn"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "침입자들. 이곳의 평화를 방해하는 자들.",
						"english": "Intruders. Those who disturb the peace of this place.",
						"japanese": "「侵入者たちめ。この地の平和を乱す者たちだ。」",
						"chinese": "入侵者。那些打扰这里和平的人。",
						"french": "Intrus. Ceux qui perturbent la paix de ce lieu.",
						"spanish": "Intrusos. Los que perturban la paz de este lugar.",
						"vietnamese": "Những kẻ xâm nhập. Những kẻ phá hoại sự bình yên của nơi này.",
						"thai": "ผู้บุกรุก ผู้ที่รบกวนความสงบของที่นี่",
						"hindi": "घुसपैठिए। वे जो इस जगह की शांति भंग करते हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "평화라고? 이 모든 비극이 네놈 짓인가!",
						"english": "Peace? Is all this tragedy your doing?!",
						"japanese": "「平和だと？このすべての悲劇がお前の仕業か！」",
						"chinese": "和平？所有这些悲剧都是你造成的吗？！",
						"french": "La paix ? Toute cette tragédie est de ton fait ?!",
						"spanish": "¿Paz? ¡¿Toda esta tragedia es obra tuya?!",
						"vietnamese": "Bình yên ư? Tất cả bi kịch này là do ngươi gây ra sao?!",
						"thai": "ความสงบ? โศกนาฏกรรมทั้งหมดนี้เป็นฝีมือแกงั้นเหรอ?!",
						"hindi": "शांति? क्या यह सारी त्रासदी तुम्हारी करतूत है?!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "얼어붙은 냉기가 모든 것을 집어삼켰다.",
						"english": "The frozen chill engulfed everything.",
						"japanese": "凍てつく冷気がすべてを飲み込んだ。",
						"chinese": "冰冷的寒气吞噬了一切。",
						"french": "Le froid glacial a tout englouti.",
						"spanish": "El frío helado lo envolvió todo.",
						"vietnamese": "Hơi lạnh băng giá nuốt chửng mọi thứ.",
						"thai": "ความหนาวเหน็บเยือกแข็งกลืนกินทุกสิ่ง",
						"hindi": "जमी हुई ठंडक ने सब कुछ निगल लिया।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "나약한 것들. 너희는 영원히 이곳에 갇힐 것이다.",
						"english": "Weaklings. You will be trapped here forever.",
						"japanese": "弱き者たちよ。お前たちは永遠にここに閉じ込められるだろう。",
						"chinese": "弱者们。你们将永远被困在这里。",
						"french": "Faibles. Vous serez piégés ici pour toujours.",
						"spanish": "Débiles. Estaréis atrapados aquí para siempre.",
						"vietnamese": "Những kẻ yếu ớt. Ngươi sẽ bị mắc kẹt ở đây mãi mãi.",
						"thai": "พวกอ่อนแอ เจ้าจะถูกขังอยู่ที่นี่ตลอดไป",
						"hindi": "कमजोरों। तुम हमेशा के लिए यहाँ फँसे रहोगे।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아니야… 아직 끝나지 않았어. 이 고리를… 반드시 끊어낼 거야.",
						"english": "No... it's not over yet. I will break this loop... no matter what.",
						"japanese": "違う… まだ終わってない。この輪を… 必ず断ち切る。",
						"chinese": "不……还没结束。我一定要斩断这个循环。",
						"french": "Non… ce n'est pas encore fini. Je briserai ce cycle… quoi qu'il arrive.",
						"spanish": "No... aún no ha terminado. Romperé este ciclo... cueste lo que cueste.",
						"vietnamese": "Không… vẫn chưa kết thúc. Ta nhất định sẽ phá vỡ vòng lặp này.",
						"thai": "ไม่...ยังไม่จบ ฉันจะทำลายวงจรนี้ให้ได้",
						"hindi": "नहीं... यह अभी खत्म नहीं हुआ है। मैं इस बंधन को... निश्चित रूप से तोड़ दूँगा।"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "{random_boss}의 얼음 심장이 산산조각 났다.",
						"english": "{random_boss}'s icy heart shattered.",
						"japanese": "「{random_boss}の氷の心臓が粉々に砕け散った。」",
						"chinese": "{random_boss}的冰冷心脏碎裂了。",
						"french": "Le cœur de glace de {random_boss} s'est brisé.",
						"spanish": "El corazón helado de {random_boss} se hizo pedazos.",
						"vietnamese": "Trái tim băng giá của {random_boss} đã vỡ tan tành.",
						"thai": "หัวใจน้ำแข็งของ {random_boss} แตกเป็นเสี่ยงๆ",
						"hindi": "{random_boss} का बर्फीला दिल टूट गया।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "고리를… 끊을 수 없을 것이다… 너희도… 언젠가….",
						"english": "You won't... be able to break the chain... you too... someday...",
						"japanese": "「鎖を…断ち切ることはできないだろう…お前たちも…いつか…。」",
						"chinese": "你们…无法打破循环…你们也…终有一天…。",
						"french": "Vous ne pourrez pas... briser la chaîne... vous aussi... un jour...",
						"spanish": "No podréis... romper la cadena... vosotros también... algún día...",
						"vietnamese": "Các ngươi sẽ... không thể phá vỡ sợi dây... các ngươi cũng vậy... một ngày nào đó...",
						"thai": "แกจะ...ไม่มีทางทำลายโซ่ได้...แกเองก็...สักวันหนึ่ง...",
						"hindi": "तुम... श्रृंखला को तोड़ नहीं पाओगे... तुम भी... किसी दिन...।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "무슨 소리야? 고리라니.",
						"english": "What are you talking about? What chain?",
						"japanese": "「何を言っているんだ？鎖って。」",
						"chinese": "你在说什么？什么循环？",
						"french": "De quoi parles-tu ? Quelle chaîne ?",
						"spanish": "¿De qué hablas? ¿Qué cadena?",
						"vietnamese": "Ngươi đang nói gì vậy? Sợi dây gì cơ?",
						"thai": "แกพูดถึงอะไร? โซ่อะไร?",
						"hindi": "तुम क्या कह रहे हो? कौन सी श्रृंखला?"
					},
					"type": "speech"
				},
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "finn"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "놈의 말은… 이 비극이 또다시 반복될 거란 뜻인가?",
						"english": "His words... do they mean this tragedy will repeat?",
						"japanese": "奴の言葉は… この悲劇が繰り返されるという意味か？",
						"chinese": "他的话……难道意味着这场悲剧会再次重演吗？",
						"french": "Ses mots… signifient-ils que cette tragédie se répétera ?",
						"spanish": "¿Sus palabras... significan que esta tragedia se repetirá?",
						"vietnamese": "Lời hắn nói… có nghĩa là bi kịch này sẽ lặp lại sao?",
						"thai": "คำพูดของเขา...หมายความว่าโศกนาฏกรรมนี้จะเกิดขึ้นซ้ำอีกงั้นหรือ?",
						"hindi": "उसके शब्द... क्या उनका मतलब है कि यह त्रासदी फिर से दोहराई जाएगी?"
					},
					"speaker": "finn"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "비극은 반복된다. 끊어낼 수 없는 얼어붙은 맹세처럼.",
						"english": "Tragedy repeats. Like an unbreakable, frozen vow.",
						"japanese": "悲劇は繰り返される。断ち切ることのできない、凍てついた誓いのように。",
						"chinese": "悲剧重演。如同无法斩断的冰冷誓言。",
						"french": "La tragédie se répète. Comme un vœu gelé, incassable.",
						"spanish": "La tragedia se repite. Como un voto congelado e irrompible.",
						"vietnamese": "Bi kịch lặp lại. Như một lời thề băng giá không thể phá vỡ.",
						"thai": "โศกนาฏกรรมซ้ำรอย ราวกับคำสาบานอันเยือกแข็งที่ไม่อาจแตกหักได้",
						"hindi": "त्रासदी दोहराई जाती है। एक अटूट, जमी हुई प्रतिज्ञा की तरह।"
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "이곳은 영원히 보존될 것이다. 모든 고통으로부터.",
						"english": "This place will be preserved forever. From all suffering.",
						"japanese": "「この場所は永遠に保全されるだろう。すべての苦痛から。」",
						"chinese": "这个地方将被永远保存。免受所有痛苦。",
						"french": "Cet endroit sera préservé pour toujours. De toute souffrance.",
						"spanish": "Este lugar será preservado para siempre. De todo sufrimiento.",
						"vietnamese": "Nơi này sẽ được bảo tồn mãi mãi. Khỏi mọi đau khổ.",
						"thai": "สถานที่แห่งนี้จะได้รับการรักษาไว้ตลอดไป จากความทุกข์ทรมานทั้งปวง",
						"hindi": "यह जगह हमेशा के लिए सुरक्षित रहेगी। सभी पीड़ाओं से।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그게 네 방식의 구원인가? 희생시키는 게?",
						"english": "Is that your way of salvation? Sacrificing?",
						"japanese": "「それがお前の救済の方法か？犠牲にすることが？」",
						"chinese": "这就是你拯救的方式吗？牺牲？",
						"french": "C'est ça ta façon de sauver ? Sacrifier ?",
						"spanish": "¿Esa es tu forma de salvación? ¿Sacrificar?",
						"vietnamese": "Đó là cách cứu rỗi của ngươi sao? Hy sinh ư?",
						"thai": "นั่นคือหนทางแห่งความรอดของแกหรือเปล่า? การเสียสละ?",
						"hindi": "क्या यही तुम्हारी मोक्ष की राह है? बलिदान करना?"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "너희도 곧 깨닫게 될 것이다. 영원한 안식을.",
						"english": "You too will soon realize. Eternal rest.",
						"japanese": "「お前たちもすぐに気づくだろう。永遠の安息を。」",
						"chinese": "你们也很快就会明白。永恒的安息。",
						"french": "Vous aussi, vous comprendrez bientôt. Le repos éternel.",
						"spanish": "Vosotros también lo comprenderéis pronto. El descanso eterno.",
						"vietnamese": "Các ngươi cũng sẽ sớm nhận ra. Sự an nghỉ vĩnh hằng.",
						"thai": "พวกแกก็จะตระหนักได้ในไม่ช้า การพักผ่อนชั่วนิรันดร์",
						"hindi": "तुम भी जल्द ही समझ जाओगे। शाश्वत शांति को।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"혹독한 설원, 얼어붙은 시간 속에 묻힌 진실.",
			"동굴 깊숙이, 스산한 그림자가 드리운다.",
			"과거의 비극이, 다시 우리를 덮치려 한다.",
			"모든 것이 멈춘 이곳, 반복되는 절규가 들려온다."
		],
		"english": [
			"A harsh snowfield, a truth buried in frozen time.",
			"Deep within the cave, an eerie shadow looms.",
			"The tragedy of the past threatens to engulf us once more.",
			"Here, where everything stands still, the echoes of repeated screams can be heard."
		],
		"japanese": [
			"過酷な雪原、凍結した時間の中に埋もれた真実。",
			"洞窟の奥深く、不気味な影が迫る。",
			"過去の悲劇が、再び我々を襲おうとしている。",
			"すべてが停止したこの場所で、繰り返される絶叫が聞こえる。"
		],
		"chinese": [
			"严酷的雪原，冰封时间中掩埋的真相。",
			"洞穴深处，阴森的影子笼罩着。",
			"过去的悲剧，再次向我们袭来。",
			"在这个一切都停滞的地方，重复的尖叫声回荡着。"
		],
		"french": [
			"Une vérité enfouie dans le temps gelé, au cœur d'un champ de neige impitoyable.",
			"Au plus profond de la grotte, une ombre sinistre plane.",
			"La tragédie du passé menace de nous engloutir à nouveau.",
			"Ici, où tout est immobile, les échos de cris répétés peuvent être entendus."
		],
		"spanish": [
			"Una verdad enterrada en el tiempo congelado, en un campo de nieve implacable.",
			"En lo profundo de la cueva, una sombra espeluznante se cierne.",
			"La tragedia del pasado amenaza con devorarnos una vez más.",
			"Aquí, donde todo está inmóvil, se escuchan los ecos de gritos repetidos."
		],
		"vietnamese": [
			"Một sự thật chôn vùi trong thời gian đóng băng, giữa cánh đồng tuyết khắc nghiệt.",
			"Sâu trong hang động, một bóng tối kỳ lạ bao trùm.",
			"Bi kịch của quá khứ lại đe dọa nhấn chìm chúng ta.",
			"Tại nơi mọi thứ dừng lại, những tiếng kêu lặp đi lặp lại vang vọng."
		],
		"thai": [
			"ทุ่งหิมะอันโหดร้าย ความจริงที่ถูกฝังไว้ในกาลเวลาที่เยือกแข็ง",
			"ลึกเข้าไปในถ้ำ เงาอันน่าขนลุกคืบคลานเข้ามา",
			"โศกนาฏกรรมในอดีตกำลังจะกลืนกินเราอีกครั้ง",
			"ที่นี่ ทุกสิ่งหยุดนิ่ง เสียงกรีดร้องที่ซ้ำซากยังคงได้ยิน"
		],
		"hindi": [
			"एक कठोर बर्फीला मैदान, जमे हुए समय में दबी एक सच्चाई।",
			"गुफा की गहराई में, एक भयानक छाया मंडराती है।",
			"अतीत की त्रासदी हमें एक बार फिर से घेरने की धमकी दे रही है।",
			"यहां, जहां सब कुछ रुका हुआ है, बार-बार की चीखों की गूँज सुनाई देती है।"
		]
	}
} as const;
