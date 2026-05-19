export const scenario_snowy_chronostitcher_legacy_04 = {
	"scenario_id": "snowy_chronostitcher_legacy_04",
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
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "벨루스의 비밀 연구실. 시간의 흐름이 깨진 흔적이 도처에 있었다.",
						"english": "Bellus's secret laboratory. Traces of fractured time were everywhere.",
						"japanese": "ベルスの秘密研究室。時間の流れが壊れた痕跡があちこちにあった。",
						"chinese": "贝鲁斯的秘密实验室。时间流逝破碎的痕迹随处可见。",
						"french": "Le laboratoire secret de Bellus. Des traces de temps fracturé étaient partout.",
						"spanish": "El laboratorio secreto de Bellus. Había rastros de tiempo fracturado por todas partes.",
						"vietnamese": "Phòng thí nghiệm bí mật của Bellus. Dấu vết của thời gian bị phá vỡ ở khắp mọi nơi.",
						"thai": "ห้องทดลองลับของเบลลัส ร่องรอยของเวลาที่แตกสลายมีอยู่ทุกหนทุกแห่ง",
						"hindi": "बेलुस की गुप्त प्रयोगशाला। खंडित समय के निशान हर जगह थे।"
					}
				},
				{
					"content": {
						"korean": "여기도 시간이 뒤틀렸어. 저 벽에 새겨진 글자가 계속 바뀌어.",
						"english": "Time is distorted here too. The letters carved on that wall keep changing.",
						"japanese": "ここも時間が歪んでいる。あの壁に刻まれた文字が常に変わる。",
						"chinese": "这里的时间也被扭曲了。那堵墙上刻的字一直在变。",
						"french": "Le temps est également déformé ici. Les lettres gravées sur ce mur ne cessent de changer.",
						"spanish": "Aquí también el tiempo está distorsionado. Las letras grabadas en esa pared no dejan de cambiar.",
						"vietnamese": "Thời gian ở đây cũng bị bóp méo. Những chữ cái khắc trên bức tường đó liên tục thay đổi.",
						"thai": "ที่นี่เวลาก็ถูกบิดเบือนเช่นกัน ตัวอักษรที่แกะสลักบนกำแพงนั้นเปลี่ยนไปเรื่อยๆ",
						"hindi": "यहां भी समय विकृत है। उस दीवार पर खुदे हुए अक्षर बदलते रहते हैं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "bran",
					"action": "enter"
				},
				{
					"content": {
						"korean": "…예상했던 것보다 심각하군. 당신들이 벨루스를 쫓는 자들인가?",
						"english": "...More serious than expected. Are you the ones pursuing Bellus?",
						"japanese": "…予想より深刻だ。あなたたちがベルスを追う者たちなのか？",
						"chinese": "……比预想的还要严重。你们是追捕贝鲁斯的人吗？",
						"french": "...Plus grave que prévu. Êtes-vous ceux qui poursuivent Bellus ?",
						"spanish": "Más grave de lo esperado. ¿Sois vosotros los que perseguís a Bellus?",
						"vietnamese": "...Nghiêm trọng hơn dự kiến. Các ngươi là những kẻ truy đuổi Bellus sao?",
						"thai": "...แย่กว่าที่คาดไว้ พวกคุณคือผู้ที่ตามล่าเบลลัสหรือเปล่า?",
						"hindi": "...उम्मीद से ज़्यादा गंभीर। क्या तुम बेलुस का पीछा करने वाले हो?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "bran"
				},
				{
					"content": {
						"korean": "벨루스가 남긴 '뒤틀린 시간의 흔적'을 막으러 왔어.",
						"english": "We came to stop the 'Traces of Distorted Time' left by Bellus.",
						"japanese": "ベルスが残した「歪んだ時間の痕跡」を止めに来た。",
						"chinese": "我们来阻止贝鲁斯留下的“扭曲时间痕迹”。",
						"french": "Nous sommes venus arrêter les « traces de temps distordu » laissées par Bellus.",
						"spanish": "Hemos venido a detener las 'Huellas del Tiempo Distorsionado' que dejó Bellus.",
						"vietnamese": "Chúng tôi đến để ngăn chặn 'Dấu vết thời gian bị bóp méo' mà Bellus đã để lại.",
						"thai": "เรามาเพื่อหยุดยั้ง 'ร่องรอยแห่งเวลาที่บิดเบือน' ที่เบลลัสทิ้งไว้",
						"hindi": "हम बेलुस द्वारा छोड़े गए 'विकृत समय के निशान' को रोकने आए हैं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "나는 브란이다. 시간의 붕괴를 추적하는 비밀 조직의 일원.",
						"english": "I am Bran. A member of a secret organization tracking the collapse of time.",
						"japanese": "私はブランだ。時間の崩壊を追跡する秘密組織の一員だ。",
						"chinese": "我是布兰。一个追查时间崩溃的秘密组织成员。",
						"french": "Je suis Bran. Un membre d'une organisation secrète qui traque l'effondrement du temps.",
						"spanish": "Soy Bran. Un miembro de una organización secreta que rastrea el colapso del tiempo.",
						"vietnamese": "Tôi là Bran. Một thành viên của tổ chức bí mật theo dõi sự sụp đổ của thời gian.",
						"thai": "ฉันคือแบรน สมาชิกขององค์กรลับที่ติดตามการล่มสลายของเวลา",
						"hindi": "मैं ब्रान हूँ। समय के पतन का पता लगाने वाले एक गुप्त संगठन का सदस्य।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "이곳에 '크로노스 리버서'에 대한 중요한 단서가 숨겨져 있을 거다.",
						"english": "Important clues about 'Chronos Reverser' must be hidden here.",
						"japanese": "ここに『クロノス・リバーサー』に関する重要な手がかりが隠されているはずだ。",
						"chinese": "关于‘克罗诺斯逆转器’的重要线索一定藏在这里。",
						"french": "Des indices importants sur le 'Chronos Reverser' doivent être cachés ici.",
						"spanish": "Importantes pistas sobre el 'Chronos Reverser' deben estar escondidas aquí.",
						"vietnamese": "Những manh mối quan trọng về 'Chronos Reverser' chắc hẳn được giấu ở đây.",
						"thai": "เบาะแสสำคัญเกี่ยวกับ 'Chronos Reverser' ต้องถูกซ่อนอยู่ที่นี่",
						"hindi": "यहां 'क्रोनोस रिवर्सर' के बारे में महत्वपूर्ण सुराग छिपे होंगे।"
					},
					"emotion": "base",
					"type": "speech"
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
					"duration_ms": 550,
					"speaker": "bran",
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "크로노스 리버서는 시간을 되돌리는 장치지만, 그 대가는 잔혹해.",
						"english": "The Chronos Reverser can turn back time, but its cost is cruel.",
						"japanese": "クロノス・リバーサーは時間を巻き戻す装置だが、その代償は残酷だ。",
						"chinese": "克罗诺斯逆转器能够倒转时间，但代价是残酷的。",
						"french": "Le Chronos Reverser peut remonter le temps, mais son coût est cruel.",
						"spanish": "El Cronos Reverser puede hacer retroceder el tiempo, pero su costo es cruel.",
						"vietnamese": "Chronos Reverser có thể đảo ngược thời gian, nhưng cái giá phải trả thì tàn khốc.",
						"thai": "Chronos Reverser ย้อนเวลาได้ แต่ค่าตอบแทนนั้นโหดร้าย",
						"hindi": "क्रोनोस रिवर्सर समय को पीछे कर सकता है, लेकिन इसकी कीमत क्रूर है।"
					},
					"speaker": "bran"
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "사용자의 시간을 흡수하여 과거를 되감는다. 벨루스는 대체 무엇을 원했을까?",
						"english": "It absorbs the user's time to rewind the past. What exactly did Bellus want?",
						"japanese": "使用者の時間を吸収して過去を巻き戻す。ベルースは一体何を望んでいたんだ？",
						"chinese": "它吸收使用者的时间来倒转过去。贝鲁斯到底想要什么？",
						"french": "Il absorbe le temps de l'utilisateur pour rembobiner le passé. Qu'est-ce que Bellus voulait exactement ?",
						"spanish": "Absorbe el tiempo del usuario para rebobinar el pasado. ¿Qué quería exactamente Bellus?",
						"vietnamese": "Nó hấp thụ thời gian của người dùng để tua lại quá khứ. Bellus rốt cuộc muốn gì?",
						"thai": "มันดูดซับเวลาของผู้ใช้เพื่อย้อนอดีต เบลลัสต้องการอะไรกันแน่?",
						"hindi": "यह अतीत को पीछे करने के लिए उपयोगकर्ता का समय अवशोषित करता है। बेलुस आखिर क्या चाहता था?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "시간을 흡수한다고? 그럼 벨루스는…",
						"english": "Absorbs time? Then Bellus...",
						"japanese": "時間を吸収するだと？じゃあベルースは…",
						"chinese": "吸收时间？那贝鲁斯…",
						"french": "Absorbe le temps ? Alors Bellus...",
						"spanish": "¿Absorbe el tiempo? Entonces Bellus...",
						"vietnamese": "Hấp thụ thời gian? Vậy Bellus...",
						"thai": "ดูดซับเวลาเหรอ? งั้นเบลลัส...",
						"hindi": "समय अवशोषित करता है? तो बेलुस..."
					},
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "그 순간, 주인공의 손목에 옅은 서리 결정이 맺혔다. 싸늘한 한기였다.",
						"english": "At that moment, faint frost crystals formed on the protagonist's wrist. It was a chilling cold.",
						"japanese": "その瞬間、主人公の手首に薄い霜の結晶が宿った。冷たい冷気だった。",
						"chinese": "那一刻，主角的手腕上结出了淡淡的霜晶。那是一种彻骨的寒冷。",
						"french": "À cet instant, de faibles cristaux de givre se formèrent sur le poignet du protagoniste. C'était un froid glacial.",
						"spanish": "En ese momento, débiles cristales de escarcha se formaron en la muñeca del protagonista. Era un frío escalofriante.",
						"vietnamese": "Khoảnh khắc đó, những tinh thể băng mờ nhạt hình thành trên cổ tay của nhân vật chính. Đó là một cơn lạnh buốt.",
						"thai": "ในตอนนั้น ผลึกน้ำแข็งจางๆ ก่อตัวขึ้นบนข้อมือของตัวเอก มันคือความเย็นยะเยือก",
						"hindi": "उसी क्षण, नायक की कलाई पर हल्की बर्फ के क्रिस्टल बन गए। यह एक कंपा देने वाली ठंड थी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…이건, 또 뭐야?",
						"english": "...What is this now?",
						"japanese": "…これ、また何だ？",
						"chinese": "……这又是什么？",
						"french": "...Qu'est-ce que c'est encore ?",
						"spanish": "¿Qué es esto ahora?",
						"vietnamese": "...Cái này, lại là gì đây?",
						"thai": "...นี่มันอะไรอีก?",
						"hindi": "...यह क्या है अब?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "시간의 파편에 노출된 흔적이다. 붕괴가 진행되고 있다는 증거지.",
						"english": "Traces of exposure to fragments of time. Proof that collapse is progressing.",
						"japanese": "時間の破片に晒された痕跡だ。崩壊が進行している証拠だよ。",
						"chinese": "这是暴露在时间碎片中的痕迹。是崩坏正在进行的证据。",
						"french": "Traces d'exposition à des fragments de temps. Preuve que l'effondrement progresse.",
						"spanish": "Rastros de exposición a fragmentos de tiempo. Prueba de que el colapso está progresando.",
						"vietnamese": "Dấu vết bị phơi nhiễm với những mảnh vỡ thời gian. Bằng chứng cho thấy sự sụp đổ đang diễn ra.",
						"thai": "ร่องรอยของการสัมผัสเศษเสี้ยวแห่งกาลเวลา เป็นหลักฐานว่าการล่มสลายกำลังดำเนินไป",
						"hindi": "समय के टुकड़ों के संपर्क में आने के निशान। सबूत है कि पतन हो रहा है।"
					},
					"speaker": "bran"
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "더 늦기 전에 벨루스의 계획을 막아야 해.",
						"english": "We must stop Bellus's plan before it's too late.",
						"japanese": "手遅れになる前に、ベルースの計画を阻止しなくては。",
						"chinese": "我们必须在为时已晚之前阻止贝鲁斯的计划。",
						"french": "Nous devons arrêter le plan de Bellus avant qu'il ne soit trop tard.",
						"spanish": "Debemos detener el plan de Bellus antes de que sea demasiado tarde.",
						"vietnamese": "Chúng ta phải ngăn chặn kế hoạch của Bellus trước khi quá muộn.",
						"thai": "เราต้องหยุดแผนของเบลลัสก่อนที่จะสายเกินไป",
						"hindi": "इससे पहले कि बहुत देर हो जाए, हमें बेलुस की योजना को रोकना होगा।"
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 450,
					"type": "direction",
					"speaker": "bran",
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "벨루스의 연구 기록에서 의미심장한 예언을 발견했다.",
						"english": "I found a significant prophecy in Bellus's research records.",
						"japanese": "ベルースの研究記録から意味深な予言を発見した。",
						"chinese": "我在贝鲁斯的研究记录中发现了一个意义深长的预言。",
						"french": "J'ai découvert une prophétie significative dans les registres de recherche de Bellus.",
						"spanish": "Encontré una profecía significativa en los registros de investigación de Bellus.",
						"vietnamese": "Tôi đã tìm thấy một lời tiên tri đầy ý nghĩa trong hồ sơ nghiên cứu của Bellus.",
						"thai": "ฉันพบคำทำนายที่สำคัญในบันทึกการวิจัยของเบลลัส",
						"hindi": "मुझे बेलुस के शोध अभिलेखों में एक महत्वपूर्ण भविष्यवाणी मिली।"
					},
					"speaker": "bran"
				},
				{
					"content": {
						"korean": "예언이라니?",
						"english": "A prophecy?",
						"japanese": "予言だと？",
						"chinese": "预言？",
						"french": "Une prophétie ?",
						"spanish": "¿Una profecía?",
						"vietnamese": "Một lời tiên tri sao?",
						"thai": "คำทำนายเหรอ?",
						"hindi": "एक भविष्यवाणी?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "'시간의 역류가 시작되면 모든 시작은 끝이 되고 끝은 시작이 된다.' 늙지 않는 소녀 인카가 읊조렸다고 한다.",
						"english": "'When the time's current reverses, every beginning becomes an end, and every end a beginning.' So whispered Inka, the ageless maiden.",
						"japanese": "「時間の逆流が始まるとき、すべての始まりは終わりになり、すべての終わりは始まりになる。」不老の少女インカがそう囁いたという。",
						"chinese": "“当时间逆流时，所有的开始都将成为结束，所有的结束都将成为开始。”据说不老少女因卡曾低语道。",
						"french": "« Quand le courant du temps s'inverse, chaque début devient une fin, et chaque fin un début. » Ainsi murmura Inka, la demoiselle intemporelle.",
						"spanish": "'Cuando la corriente del tiempo se invierta, cada principio se convertirá en un final, y cada final en un principio.' Así susurró Inka, la doncella sin edad.",
						"vietnamese": "'Khi dòng chảy thời gian đảo ngược, mọi khởi đầu sẽ là kết thúc, và mọi kết thúc sẽ là khởi đầu.' Nghe nói Inka, thiếu nữ không tuổi, đã thì thầm như vậy.",
						"thai": "'เมื่อกระแสแห่งเวลาไหลย้อนกลับ ทุกการเริ่มต้นจะกลายเป็นจุดจบ และทุกจุดจบจะกลายเป็นการเริ่มต้น' อินกะ สาวน้อยผู้ไม่แก่ชรา กระซิบเช่นนั้น",
						"hindi": "'जब समय की धारा उलट जाएगी, तो हर शुरुआत अंत बन जाएगी, और हर अंत शुरुआत बन जाएगा।' ऐसा इंका, अमर युवती ने फुसफुसाया था."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그게 벨루스의 진짜 계획과 관련 있다는 거야?",
						"english": "You think that's related to Velus's true plan?",
						"japanese": "それがベルースの本当の計画と関係があるってこと？",
						"chinese": "这和维鲁斯的真正计划有关吗？",
						"french": "Tu penses que c'est lié au vrai plan de Velus ?",
						"spanish": "¿Crees que eso está relacionado con el verdadero plan de Velus?",
						"vietnamese": "Cậu nghĩ điều đó liên quan đến kế hoạch thật sự của Velus à?",
						"thai": "เธอคิดว่านั่นเกี่ยวข้องกับแผนการที่แท้จริงของเวลัสเหรอ?",
						"hindi": "तुम्हें लगता है कि इसका संबंध वेलस की असली योजना से है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "bran",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아직 확실하진 않지만, 벨루스가 이 예언에 집착했던 건 분명해 보여.",
						"english": "It's not certain yet, but Velus was clearly obsessed with this prophecy.",
						"japanese": "まだ確実じゃないけど、ベルースがこの予言に執着していたのは間違いないみたいね。",
						"chinese": "还不确定，但维鲁斯显然对这个预言很着迷。",
						"french": "Ce n'est pas encore certain, mais Velus était clairement obsédé par cette prophétie.",
						"spanish": "Todavía no es seguro, pero Velus estaba claramente obsesionado con esta profecía.",
						"vietnamese": "Vẫn chưa chắc chắn, nhưng rõ ràng Velus đã bị ám ảnh bởi lời tiên tri này.",
						"thai": "ยังไม่แน่ใจนัก แต่ชัดเจนว่าเวลัสหมกมุ่นกับคำทำนายนี้",
						"hindi": "अभी तक निश्चित नहीं है, लेकिन वेलस स्पष्ट रूप से इस भविष्यवाणी से ग्रस्त था।"
					}
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "이 예언이 '크로노스 리버서'의 진짜 목적을 암시할 수도 있다.",
						"english": "This prophecy might hint at the true purpose of the 'Chronos Reverser'.",
						"japanese": "この予言が「クロノスリバーサー」の本当の目的を暗示しているのかも。",
						"chinese": "这个预言可能暗示着“克罗诺斯反转器”的真正目的。",
						"french": "Cette prophétie pourrait bien insinuer le véritable but du « Chronos Reverser ».",
						"spanish": "Esta profecía podría insinuar el verdadero propósito del 'Reversor de Cronos'.",
						"vietnamese": "Lời tiên tri này có thể ám chỉ mục đích thực sự của 'Chronos Reverser'.",
						"thai": "คำทำนายนี้อาจบอกใบ้ถึงจุดประสงค์ที่แท้จริงของ 'Chronos Reverser'",
						"hindi": "यह भविष्यवाणी 'क्रोनोस रिवर्सर' के असली उद्देश्य का संकेत दे सकती है।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "bran",
					"action": "enter",
					"type": "direction",
					"duration_ms": 600,
					"spot": [
						4,
						2
					]
				},
				{
					"speaker": "bran",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "여기, 낡은 일지에서 충격적인 경고문을 발견했다.",
						"english": "Here, I found a shocking warning in an old journal.",
						"japanese": "ここで、古い日誌から衝撃的な警告文を見つけた。",
						"chinese": "在这里，我发现了一本旧日记里的惊人警告。",
						"french": "Ici, j'ai trouvé un avertissement choquant dans un vieux journal.",
						"spanish": "Aquí, encontré una advertencia impactante en un diario antiguo.",
						"vietnamese": "Ở đây, tôi đã tìm thấy một cảnh báo gây sốc trong một cuốn nhật ký cũ.",
						"thai": "ที่นี่ ฉันเจอคำเตือนที่น่าตกใจในบันทึกเก่าเล่มหนึ่ง",
						"hindi": "यहाँ, मुझे एक पुरानी डायरी में एक चौंकाने वाली चेतावनी मिली।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "무슨 내용인데?",
						"english": "What does it say?",
						"japanese": "何て書いてある？",
						"chinese": "写了什么？",
						"french": "Qu'est-ce qu'il dit ?",
						"spanish": "¿Qué dice?",
						"vietnamese": "Nó nói gì vậy?",
						"thai": "มันว่ายังไง?",
						"hindi": "उसमें क्या लिखा है?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "'리버서는 과거를 돌리나, 그 대가는 미래를 지운다.'",
						"english": "'The Reverser turns back the past, but the cost is erasing the future.'",
						"japanese": "「リバーサーは過去を巻き戻すが、その代償は未来を消し去ることだ。」",
						"chinese": "“反转器回溯过去，但代价是抹去未来。”",
						"french": "« Le Reverser ramène le passé, mais le prix à payer est l'effacement du futur. »",
						"spanish": "'El Reversor invierte el pasado, pero el precio es borrar el futuro.'",
						"vietnamese": "'Bộ đảo ngược quay ngược quá khứ, nhưng cái giá phải trả là xóa sổ tương lai.'",
						"thai": "'Reverser ย้อนอดีตกลับ แต่ราคาที่ต้องจ่ายคือการลบอนาคต'",
						"hindi": "'रिवर्सर अतीत को पलट देता है, लेकिन इसकी कीमत भविष्य को मिटाना है।'"
					},
					"speaker": "bran"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "미래를 지운다고? 벨루스가 노린 게 단순히 과거가 아니었던 거야?",
						"english": "Erasing the future? So Velus wasn't just after the past?",
						"japanese": "未来を消すって？ベルースが狙っていたのは単に過去だけじゃなかったってこと？",
						"chinese": "抹去未来？难道维鲁斯的目标不仅仅是过去？",
						"french": "Effacer le futur ? Donc Velus ne visait pas seulement le passé ?",
						"spanish": "¿Borrar el futuro? ¿Entonces Velus no solo buscaba el pasado?",
						"vietnamese": "Xóa sổ tương lai ư? Vậy ra Velus không chỉ nhắm vào quá khứ thôi sao?",
						"thai": "ลบอนาคตงั้นเหรอ? แสดงว่าเวลัสไม่ได้ต้องการแค่อดีตอย่างเดียวสินะ?",
						"hindi": "भविष्य को मिटाना? तो वेलस का लक्ष्य सिर्फ अतीत नहीं था?"
					}
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "이 경고가 사실이라면, 세상의 시간 붕괴는 벨루스의 의도였을 수도 있어.",
						"english": "If this warning is true, the world's time distortion might have been Velus's intention.",
						"japanese": "この警告が事実なら、世界の時間崩壊はベルースの意図だったのかもしれない。",
						"chinese": "如果这个警告是真的，那么世界的时间崩溃可能就是维鲁斯的意图。",
						"french": "Si cet avertissement est vrai, la distorsion temporelle du monde pourrait bien avoir été l'intention de Velus.",
						"spanish": "Si esta advertencia es cierta, la distorsión del tiempo en el mundo podría haber sido la intención de Velus.",
						"vietnamese": "Nếu cảnh báo này là thật, sự sụp đổ thời gian của thế giới có thể là ý đồ của Velus.",
						"thai": "ถ้าคำเตือนนี้เป็นจริง การบิดเบือนเวลาของโลกอาจเป็นความตั้งใจของเวลัส",
						"hindi": "अगर यह चेतावनी सच है, तो दुनिया का समय-विघटन वेलस का इरादा हो सकता है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "bran",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "더 지체할 시간이 없다. 시간의 흐름은 이제 임계점을 넘어서고 있다!",
						"english": "No more time to delay. The flow of time is now past its critical point!",
						"japanese": "もうためらっている時間はない。時間の流れはもう臨界点を超えている！",
						"chinese": "没有时间再耽搁了。时间的流逝已经超过了临界点！",
						"french": "Plus de temps à perdre. Le flux du temps a dépassé son point critique !",
						"spanish": "No hay más tiempo que perder. ¡El flujo del tiempo ya ha superado su punto crítico!",
						"vietnamese": "Không còn thời gian để chần chừ nữa. Dòng chảy thời gian đã vượt qua điểm tới hạn rồi!",
						"thai": "ไม่มีเวลาจะรีรออีกแล้ว การไหลของเวลากำลังผ่านจุดวิกฤต!",
						"hindi": "और देर करने का समय नहीं है। समय का प्रवाह अब अपने महत्वपूर्ण बिंदु को पार कर गया है!"
					}
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "연구실 가장 깊은 곳, 거대한 크로노스 리버서 앞에 정체 모를 그림자가 서 있었다.",
						"english": "In the deepest part of the lab, an unknown shadow stood before the massive Chronos Reverser.",
						"japanese": "研究室の最も深い場所、巨大なクロノスリバーサーの前に、正体不明の影が立っていた。",
						"chinese": "在实验室最深处，一个不明身影站在巨大的克罗诺斯逆转器前。",
						"french": "Au plus profond du laboratoire, une ombre inconnue se tenait devant l'énorme Chronos Reverser.",
						"spanish": "En lo más profundo del laboratorio, una sombra desconocida se alzaba frente al enorme Reversor de Cronos.",
						"vietnamese": "Sâu thẳm trong phòng thí nghiệm, một bóng đen không rõ danh tính đứng trước cỗ máy Chronos Reverser khổng lồ.",
						"thai": "ณ ส่วนที่ลึกที่สุดของห้องทดลอง เงาปริศนาปรากฏกายยืนอยู่เบื้องหน้า Chronos Reverser อันมหึมา",
						"hindi": "प्रयोगशाला के सबसे गहरे हिस्से में, एक अज्ञात छाया विशाल क्रोनोस रिवर्सर के सामने खड़ी थी।"
					},
					"speaker": "narrator"
				},
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "bran"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…찾아왔군. 벨루스의 사냥개가 될 자격이 있는지 시험해 주마.",
						"english": "...You've come. I'll test if you're worthy to be Velus's hound.",
						"japanese": "…来たな。ベルースの猟犬となる資格があるか、試してやろう。",
						"chinese": "……你来了。我会考验你是否有资格成为贝卢斯的猎犬。",
						"french": "...Tu es venu. Je vais tester si tu es digne d'être le limier de Velus.",
						"spanish": "...Has llegado. Pondré a prueba si eres digno de ser el sabueso de Velus.",
						"vietnamese": "...Ngươi đã đến. Ta sẽ thử xem ngươi có xứng đáng trở thành chó săn của Velus không.",
						"thai": "...เจ้ามาแล้ว. ข้าจะทดสอบว่าเจ้าคู่ควรจะเป็นสุนัขล่าเนื้อของเวลลัสหรือไม่",
						"hindi": "तुम आ गए। मैं परीक्षा लूँगा कि क्या तुम वेलस के शिकारी कुत्ते बनने के योग्य हो।"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "네가 벨루스의 명령을 따르는 자인가?",
						"english": "Are you one who follows Velus's commands?",
						"japanese": "お前はベルースの命令に従う者か？",
						"chinese": "你是听从贝卢斯命令的人吗？",
						"french": "Es-tu celui qui obéit aux ordres de Velus ?",
						"spanish": "¿Eres de los que siguen las órdenes de Velus?",
						"vietnamese": "Ngươi là kẻ tuân theo mệnh lệnh của Velus à?",
						"thai": "เจ้าเป็นผู้ปฏิบัติตามคำสั่งของเวลลัสหรือ?",
						"hindi": "क्या तुम वेलस के आदेशों का पालन करने वाले हो?"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "나는 그저… 벨루스의 위대한 '흐름'을 따를 뿐. 거역하는 모든 것을 제거한다.",
						"english": "I merely... follow Velus's great 'Flow.' I eliminate all who defy it.",
						"japanese": "私はただ…ベルースの偉大な「流れ」に従うだけ。逆らうものは全て排除する。",
						"chinese": "我只是……追随贝卢斯伟大的“洪流”。清除所有反抗者。",
						"french": "Je ne fais que... suivre le grand 'Flux' de Velus. J'élimine tous ceux qui le défient.",
						"spanish": "Yo solo... sigo el gran 'Flujo' de Velus. Elimino a todos los que lo desafían.",
						"vietnamese": "Ta chỉ... tuân theo 'Dòng chảy' vĩ đại của Velus. Ta loại bỏ tất cả những kẻ chống đối.",
						"thai": "ข้าเพียงแค่... ติดตาม 'กระแส' อันยิ่งใหญ่ของเวลลัส ข้าจะกำจัดทุกสิ่งที่ต่อต้าน",
						"hindi": "मैं बस... वेलस के महान 'प्रवाह' का पालन करता हूँ। मैं उन सभी को खत्म कर देता हूँ जो इसका विरोध करते हैं।"
					}
				},
				{
					"speaker": "bran",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "그는 '크로노스 리버서'를 보호하며 벨루스의 계획을 돕고 있어.",
						"english": "He's protecting the 'Chronos Reverser' and aiding Velus's plan.",
						"japanese": "彼は「クロノスリバーサー」を保護し、ベルースの計画を助けている。",
						"chinese": "他正在保护“克罗诺斯逆转器”，并协助贝卢斯的计划。",
						"french": "Il protège le 'Chronos Reverser' et aide au plan de Velus.",
						"spanish": "Él está protegiendo el 'Reversor de Cronos' y ayudando al plan de Velus.",
						"vietnamese": "Hắn đang bảo vệ 'Chronos Reverser' và hỗ trợ kế hoạch của Velus.",
						"thai": "เขาปกป้อง 'Chronos Reverser' และช่วยเหลือแผนการของเวลลัส",
						"hindi": "वह 'क्रोनोस रिवर्सर' की रक्षा कर रहा है और वेलस की योजना में सहायता कर रहा है।"
					}
				},
				{
					"content": {
						"korean": "비켜. 벨루스의 계획을 막을 거야.",
						"english": "Move. I'll stop Velus's plan.",
						"japanese": "退け。ベルースの計画を阻止する。",
						"chinese": "让开。我会阻止贝卢斯的计划。",
						"french": "Écarte-toi. Je vais arrêter le plan de Velus.",
						"spanish": "Apártate. Detendré el plan de Velus.",
						"vietnamese": "Tránh ra. Ta sẽ ngăn chặn kế hoạch của Velus.",
						"thai": "หลีกไป ข้าจะหยุดแผนการของเวลลัส",
						"hindi": "हटो। मैं वेलस की योजना रोकूँगा।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 시도다. 감히 운명을 거스르려 하는가?",
						"english": "A foolish attempt. Do you dare defy fate?",
						"japanese": "愚かな試みだ。よくも運命に逆らおうとするか？",
						"chinese": "愚蠢的尝试。你竟敢违抗命运？",
						"french": "Tentative insensée. Oserez-vous défier le destin ?",
						"spanish": "Un intento estúpido. ¿Te atreves a desafiar al destino?",
						"vietnamese": "Một nỗ lực ngu xuẩn. Ngươi dám chống lại số phận sao?",
						"thai": "ช่างเป็นความพยายามที่โง่เขลา เจ้ากล้าที่จะฝืนโชคชะตาหรือ?",
						"hindi": "एक मूर्खतापूर्ण प्रयास। क्या तुम भाग्य को चुनौती देने की हिम्मत करते हो?"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "정체 모를 그림자의 압도적인 힘에 모든 것이 흐트러졌다."
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "어리석은 것들… 벨루스의 위대한 계획을 막을 순 없어!"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "여기서… 포기할 순 없어…!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "bran",
					"duration_ms": 400,
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "아직 기회는 있다! 다시 일어서야 해! 붕괴는 막아야만 한다!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "bran"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "크윽…! 이럴… 리가…! 하지만… 흐름은… 멈추지 않아…!"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "흐름? 벨루스는 대체 무엇을 꾸미고 있었던 거지?"
					}
				},
				{
					"duration_ms": 400,
					"spot": [
						2,
						3
					],
					"speaker": "bran",
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "'흐름'이라… 어쩌면 벨루스는 단순한 시간 되감기가 아닌, 세상의 시간을 재구성하려는 것일 수도 있어."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "bran"
				},
				{
					"content": {
						"korean": "무너진 'random_boss'와 달리, 크로노스 리버서는 여전히 섬뜩하게 빛나고 있었다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "시간의 붕괴는 멈추지 않았다. 벨루스의 진정한 목적에 대한 실마리가 잡혔다."
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "…벨루스에게 가야 해."
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"dialogue": []
		}
	],
	"prologue": {
		"korean": [
			"벨루스의 시계탑이 무너진 후, 시간의 파편은 세상을 뒤틀었다.",
			"급격한 노화, 영원한 반복… 시간의 붕괴는 이제 현실이 되었다.",
			"오래된 연구실, 그곳에서 시간의 흐름을 되감을 장치에 대한 단서를 찾았다.",
			"그리고, 예언을 쫓는 자가 기다리고 있었다. 모든 것을 바로잡기 위해.",
			"멈출 수 없는 시간의 역류, 그 진실이 드러나기 시작한다."
		],
		"english": [
			"After the collapse of Bellus's Clock Tower, fragments of time distorted the world.",
			"Rapid aging, eternal repetition… The collapse of time is now a reality.",
			"In an old laboratory, clues were found for a device that could rewind the flow of time.",
			"And the one who pursued the prophecy was waiting. To set everything right.",
			"The unstoppable reversal of time, its truth begins to unfold."
		],
		"japanese": [
			"ベルスの時計塔が崩壊した後、時間の破片は世界を歪ませた。",
			"急速な老化、永遠の繰り返し…時間の崩壊は今や現実となった。",
			"古い研究所で、時間の流れを巻き戻す装置の手がかりが見つかった。",
			"そして、予言を追う者が待っていた。すべてを正すために。",
			"止められない時間の逆流、その真実が明らかになり始める。"
		],
		"chinese": [
			"贝鲁斯的钟楼倒塌后，时间碎片扭曲了世界。",
			"急速衰老，永恒重复……时间崩溃已成现实。",
			"在一间古老的实验室里，找到了能回溯时间流逝的装置线索。",
			"而且，追寻预言之人正在等待。为了纠正一切。",
			"不可阻挡的时间逆流，其真相开始浮现。"
		],
		"french": [
			"Après l'effondrement de la Tour de l'Horloge de Bellus, les fragments du temps ont déformé le monde.",
			"Vieillissement rapide, répétition éternelle… L'effondrement du temps est maintenant une réalité.",
			"Dans un ancien laboratoire, des indices ont été trouvés pour un appareil capable de remonter le cours du temps.",
			"Et celui qui poursuivait la prophétie attendait. Pour tout remettre en ordre.",
			"Le reflux du temps inarrêtable, sa vérité commence à se révéler."
		],
		"spanish": [
			"Tras el colapso de la Torre del Reloj de Bellus, los fragmentos del tiempo distorsionaron el mundo.",
			"Envejecimiento rápido, repetición eterna… El colapso del tiempo es ahora una realidad.",
			"En un antiguo laboratorio, se encontraron pistas sobre un dispositivo capaz de rebobinar el flujo del tiempo.",
			"Y el que perseguía la profecía estaba esperando. Para arreglarlo todo.",
			"El imparable reflujo del tiempo, su verdad comienza a revelarse."
		],
		"vietnamese": [
			"Sau khi Tháp Đồng Hồ của Bellus sụp đổ, các mảnh vỡ thời gian đã làm biến dạng thế giới.",
			"Lão hóa nhanh chóng, lặp lại vĩnh cửu… Sự sụp đổ của thời gian giờ đã là hiện thực.",
			"Trong một phòng thí nghiệm cũ, đã tìm thấy manh mối về một thiết bị có thể tua ngược dòng thời gian.",
			"Và người theo đuổi lời tiên tri đã chờ đợi. Để sửa chữa mọi thứ.",
			"Dòng thời gian đảo ngược không thể ngăn cản, sự thật của nó bắt đầu hé lộ."
		],
		"thai": [
			"หลังจากหอนาฬิกาของเบลลัสพังทลายลง ชิ้นส่วนแห่งเวลาก็ได้บิดเบือนโลก",
			"ความชราอย่างรวดเร็ว การเกิดซ้ำนิรันดร์… การล่มสลายของเวลากลายเป็นความจริงแล้ว",
			"ในห้องทดลองเก่าแก่ พบเบาะแสของอุปกรณ์ที่สามารถย้อนเวลากลับไปได้",
			"และผู้ที่ตามหาคำทำนายก็กำลังรออยู่ เพื่อแก้ไขทุกสิ่งให้ถูกต้อง",
			"การไหลย้อนกลับของเวลาที่ไม่อาจหยุดยั้งได้ ความจริงของมันกำลังจะถูกเปิดเผย"
		],
		"hindi": [
			"बेलुस के क्लॉक टॉवर के ढहने के बाद, समय के टुकड़ों ने दुनिया को विकृत कर दिया।",
			"तेजी से बुढ़ापा, शाश्वत पुनरावृति... समय का पतन अब एक वास्तविकता बन गया है।",
			"एक पुरानी प्रयोगशाला में, समय के प्रवाह को उलटने वाले उपकरण के लिए सुराग मिले।",
			"और भविष्यवाणी का पीछा करने वाला इंतजार कर रहा था। सब कुछ ठीक करने के लिए।",
			"समय का अटूट प्रतिगमन, उसकी सच्चाई सामने आने लगी है।"
		]
	}
} as const;
