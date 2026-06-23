export const scenario_modern_phantom_35_01 = {
	"scenario_id": "modern_phantom_35_01",
	"order": 1,
	"act": "intro",
	"theme": "modern",
	"actors": {
		"echo": {
			"id": "mon_57f2edb8-aa81-4ce7-beed-ab009cd2ff35",
			"name": {
				"korean": "에코",
				"english": "Echo",
				"japanese": "エコー",
				"chinese": "艾可",
				"french": "Écho",
				"spanish": "Eco",
				"vietnamese": "Echo",
				"thai": "เอคโค่",
				"hindi": "इको"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/da48e2c2-6733-4f65-f8b6-f197af4ff700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e90605b9-372f-4bf1-cdec-56a2fdef0800/public"
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
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "도시의 심장부에 드리운 디지털 안개. 시스템은 불안정하게 흔들렸다.",
						"english": "Digital mist hung over the city's heart. The system swayed precariously.",
						"japanese": "都市の中心部に漂うデジタルな霧。システムは不安定に揺れた。",
						"chinese": "数字迷雾笼罩城市心脏。系统剧烈动荡不安。",
						"french": "Une brume numérique planait sur le cœur de la ville. Le système vacillait dangereusement.",
						"spanish": "Una niebla digital se cernía sobre el corazón de la ciudad. El sistema se tambaleaba precariamente.",
						"vietnamese": "Sương mù kỹ thuật số bao trùm trái tim thành phố. Hệ thống rung lắc bất ổn.",
						"thai": "หมอกดิจิทัลปกคลุมใจกลางเมือง ระบบสั่นคลอนอย่างไม่มั่นคง",
						"hindi": "शहर के दिल पर डिजिटल धुंध छाई हुई थी। सिस्टम अस्थिर रूप से डगमगा रहा था।"
					}
				},
				{
					"content": {
						"korean": "이상해… 곳곳에서 오류가 감지돼.",
						"english": "Strange... Errors are detected everywhere.",
						"japanese": "おかしい…至る所でエラーが検出される。",
						"chinese": "奇怪…到处都检测到错误。",
						"french": "Étrange... Des erreurs sont détectées partout.",
						"spanish": "Extraño... Se detectan errores por todas partes.",
						"vietnamese": "Lạ thật... Lỗi được phát hiện khắp nơi.",
						"thai": "แปลกจัง... ตรวจพบข้อผิดพลาดทุกที่เลย",
						"hindi": "अजीब... हर जगह त्रुटियां पाई गई हैं।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"spot": [
						5,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "echo",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "echo",
					"content": {
						"korean": "당신이 찾던 '팬텀'의 흔적일 거야.",
						"english": "This must be the trace of the 'Phantom' you've been looking for.",
						"japanese": "あなたが探していた『ファントム』の痕跡だろう。",
						"chinese": "这应该是你一直在寻找的“幻影”的踪迹。",
						"french": "Ce doit être la trace du 'Fantôme' que tu cherchais.",
						"spanish": "Esta debe ser la huella del 'Phantom' que buscabas.",
						"vietnamese": "Đây chắc hẳn là dấu vết của 'Phantom' mà bạn đang tìm kiếm.",
						"thai": "นี่คงเป็นร่องรอยของ 'แฟนธอม' ที่คุณตามหา",
						"hindi": "यह 'फैंटम' का निशान होगा जिसे तुम ढूंढ रहे थे।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "팬텀? 그게 뭔데?",
						"english": "Phantom? What's that?",
						"japanese": "ファントム？それ、何？",
						"chinese": "幻影？那是什么？",
						"french": "Fantôme ? C'est quoi ?",
						"spanish": "¿Phantom? ¿Qué es eso?",
						"vietnamese": "Phantom? Đó là gì?",
						"thai": "แฟนธอม? มันคืออะไร?",
						"hindi": "फैंटम? वह क्या है?"
					},
					"type": "speech"
				},
				{
					"speaker": "echo",
					"emotion": "sad",
					"content": {
						"korean": "알 수 없는 시스템 오류와 데이터 유출. 녀석의 짓이야.",
						"english": "Unknown system errors and data leaks. It's its doing.",
						"japanese": "未知のシステムエラーとデータ流出。奴の仕業だ。",
						"chinese": "未知系统错误和数据泄露。是它干的。",
						"french": "Erreurs système inconnues et fuites de données. C'est son œuvre.",
						"spanish": "Errores de sistema desconocidos y fugas de datos. Es obra suya.",
						"vietnamese": "Lỗi hệ thống không xác định và rò rỉ dữ liệu. Đó là do nó gây ra.",
						"thai": "ข้อผิดพลาดของระบบที่ไม่รู้จักและการรั่วไหลของข้อมูล มันเป็นฝีมือของมัน",
						"hindi": "अज्ञात सिस्टम त्रुटियां और डेटा लीक। यह उसका काम है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "조사를 부탁해. 이대로 가다간 도시 전체가 무너질 거야.",
						"english": "Please investigate. If this continues, the entire city will collapse.",
						"japanese": "調査を頼む。このままだと、都市全体が崩壊する。",
						"chinese": "拜托调查一下。这样下去，整个城市都会崩溃的。",
						"french": "Je t'en prie, enquête. Si ça continue, toute la ville s'effondrera.",
						"spanish": "Por favor, investiga. Si esto sigue así, la ciudad entera colapsará.",
						"vietnamese": "Xin hãy điều tra. Nếu cứ thế này, toàn bộ thành phố sẽ sụp đổ.",
						"thai": "โปรดตรวจสอบด้วย ถ้าเป็นแบบนี้ต่อไป ทั้งเมืองจะพังทลายลง",
						"hindi": "कृपया जांच करें। अगर ऐसा ही चलता रहा, तो पूरा शहर ढह जाएगा।"
					},
					"type": "speech",
					"speaker": "echo",
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "echo",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "이건 단순한 해킹이 아니야. 도시 전체의 시스템이 서서히 붕괴될 거야.",
						"english": "This isn't just a hack. The city's entire system will slowly collapse.",
						"japanese": "これは単なるハッキングじゃない。都市全体のシステムが徐々に崩壊するだろう。",
						"chinese": "这不仅仅是简单的黑客行为。整个城市的系统将逐渐崩溃。",
						"french": "Ce n'est pas un simple piratage. Le système entier de la ville va lentement s'effondrer.",
						"spanish": "Esto no es un simple hackeo. El sistema de toda la ciudad colapsará lentamente.",
						"vietnamese": "Đây không chỉ là một vụ hack. Hệ thống toàn thành phố sẽ dần sụp đổ.",
						"thai": "นี่ไม่ใช่แค่การแฮกธรรมดา ระบบทั้งหมดของเมืองจะค่อยๆ ล่มสลาย",
						"hindi": "यह सिर्फ एक हैकिंग नहीं है। शहर की पूरी व्यवस्था धीरे-धीरे चरमरा जाएगी।"
					},
					"type": "speech",
					"speaker": "echo",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "벌써부터 균열이 느껴져. 우리가 믿던 질서가….",
						"english": "I can already feel the cracks. The order we believed in...",
						"japanese": "もう亀裂を感じる。我々が信じていた秩序が…",
						"chinese": "我已经感觉到裂痕。我们所信任的秩序...",
						"french": "Je sens déjà les fissures. L'ordre auquel nous croyions...",
						"spanish": "Ya siento las grietas. El orden en el que creíamos...",
						"vietnamese": "Tôi đã cảm thấy những vết nứt. Trật tự mà chúng ta tin tưởng...",
						"thai": "ฉันสัมผัสได้ถึงรอยร้าวแล้ว ระเบียบที่เราเคยเชื่อ...",
						"hindi": "मुझे पहले से ही दरारें महसूस हो रही हैं। जिस व्यवस्था पर हम भरोसा करते थे..."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"speaker": "echo",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "새로운 경고 메시지가 발견됐어. '시한 카운트다운'이라고.",
						"english": "A new warning message has been found. It says 'Timed Countdown'.",
						"japanese": "新しい警告メッセージが見つかった。『時限カウントダウン』だって。",
						"chinese": "发现了一条新的警告信息。写着“时限倒计时”。",
						"french": "Un nouveau message d'avertissement a été découvert. Il dit 'Compte à rebours'.",
						"spanish": "Se ha encontrado un nuevo mensaje de advertencia. Dice 'Cuenta atrás'.",
						"vietnamese": "Một tin nhắn cảnh báo mới đã được tìm thấy. Ghi là 'Đếm ngược thời gian'.",
						"thai": "พบข้อความเตือนใหม่ เขียนว่า 'การนับถอยหลัง'",
						"hindi": "एक नया चेतावनी संदेश मिला है। इसमें 'समयबद्ध उलटी गिनती' लिखा है।"
					}
				},
				{
					"speaker": "echo",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "데이터 속에서 희미하게… 낡은 장부의 흔적이 감지돼.",
						"english": "Faintly within the data... traces of an old ledger are detected.",
						"japanese": "データの中に微かに… 古い帳簿の痕跡が検出された。",
						"chinese": "在数据中隐约... 检测到旧账本的痕迹。",
						"french": "Faiblement dans les données... des traces d'un ancien registre sont détectées.",
						"spanish": "Débilmente dentro de los datos... se detectan rastros de un viejo libro de contabilidad.",
						"vietnamese": "Mờ nhạt trong dữ liệu... dấu vết của một cuốn sổ cũ được phát hiện.",
						"thai": "ในข้อมูลที่เลือนลาง... ตรวจพบร่องรอยของสมุดบัญชีเก่า",
						"hindi": "डेटा में धुंधले से... एक पुराने बहीखाते के निशान मिले हैं।"
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "echo",
					"duration_ms": 500
				},
				{
					"emotion": "angry",
					"speaker": "echo",
					"content": {
						"korean": "경고 메시지는 녀석들이 보낸 거야. 도시를 조롱하듯이.",
						"english": "The warning messages were sent by them. As if mocking the city.",
						"japanese": "警告メッセージはやつらが送ったんだ。都市を嘲笑うかのように。",
						"chinese": "警告信息是他们发送的。仿佛在嘲笑这座城市。",
						"french": "Les messages d'avertissement ont été envoyés par eux. Comme pour se moquer de la ville.",
						"spanish": "Los mensajes de advertencia fueron enviados por ellos. Como si se burlaran de la ciudad.",
						"vietnamese": "Những tin nhắn cảnh báo là do chúng gửi. Cứ như đang chế nhạo thành phố vậy.",
						"thai": "ข้อความเตือนถูกส่งโดยพวกมัน ราวกับเย้ยหยันเมืองนี้",
						"hindi": "चेतावनी संदेश उन्होंने भेजे थे। मानो शहर का मज़ाक उड़ा रहे हों।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "도대체 누구지? 이 모든 걸 꾸미는 자들은.",
						"english": "Who are they, anyway? The ones orchestrating all of this.",
						"japanese": "一体誰なんだ？この全てを企む者たちは。",
						"chinese": "他们到底是谁？那些策划这一切的人。",
						"french": "Qui sont-ils, d'ailleurs ? Ceux qui orchestrent tout cela.",
						"spanish": "¿Quiénes son, de todos modos? Los que orquestan todo esto.",
						"vietnamese": "Rốt cuộc thì chúng là ai? Những kẻ đứng sau tất cả chuyện này.",
						"thai": "พวกมันเป็นใครกันแน่? ผู้ที่บงการเรื่องทั้งหมดนี้",
						"hindi": "आखिर वो कौन हैं? जो यह सब रच रहे हैं।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "정체불명의 해커 집단… '팬텀'의 사주를 받는 자들이겠지.",
						"english": "An unknown hacker group... likely those funded by 'Phantom'.",
						"japanese": "正体不明のハッカー集団…『ファントム』の指示を受けている者たちだろう。",
						"chinese": "不明身份的黑客组织……大概是受“幽灵”指使的吧。",
						"french": "Un groupe de hackers inconnu... probablement ceux commandités par 'Phantom'.",
						"spanish": "Un grupo de hackers desconocido... probablemente los financiados por 'Phantom'.",
						"vietnamese": "Một nhóm hacker không rõ danh tính... chắc hẳn là những kẻ được 'Phantom' sai khiến.",
						"thai": "กลุ่มแฮกเกอร์นิรนาม... คงเป็นพวกที่ถูก 'แฟนทอม' บงการ",
						"hindi": "एक अज्ञात हैकर समूह... शायद 'फैंटम' द्वारा समर्थित लोग।"
					},
					"speaker": "echo",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "더 이상 물러설 곳 없어. 녀석들의 정체를 밝혀야 해.",
						"english": "There's no turning back now. We have to reveal their true identities.",
						"japanese": "もう後には引けない。奴らの正体を暴かなければならない。",
						"chinese": "我们无路可退了。必须揭露他们的真实身份。",
						"french": "Plus question de reculer. Nous devons révéler leurs véritables identités.",
						"spanish": "Ya no hay vuelta atrás. Tenemos que revelar sus verdaderas identidades.",
						"vietnamese": "Không còn đường lùi nữa. Chúng ta phải vạch trần danh tính của chúng.",
						"thai": "ไม่มีทางถอยอีกแล้ว เราต้องเปิดเผยตัวตนที่แท้จริงของพวกมัน",
						"hindi": "अब पीछे हटने की कोई जगह नहीं है। हमें उनकी असली पहचान उजागर करनी होगी।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"speaker": "echo",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "카운트다운은 멈추지 않아. 시스템 붕괴가 임박했어.",
						"english": "The countdown won't stop. System collapse is imminent.",
						"japanese": "カウントダウンは止まらない。システム崩壊が差し迫っている。",
						"chinese": "倒计时不会停止。系统崩溃迫在眉睫。",
						"french": "Le compte à rebours ne s'arrête pas. L'effondrement du système est imminent.",
						"spanish": "La cuenta atrás no se detendrá. El colapso del sistema es inminente.",
						"vietnamese": "Đồng hồ đếm ngược sẽ không dừng lại. Hệ thống sắp sụp đổ.",
						"thai": "การนับถอยหลังไม่หยุด ระบบกำลังจะล่มสลาย",
						"hindi": "उलटी गिनती रुकेगी नहीं। सिस्टम का पतन निकट है।"
					},
					"emotion": "sad",
					"speaker": "echo"
				},
				{
					"content": {
						"korean": "이대로는… 도시가 버틸 수 없어.",
						"english": "At this rate... the city won't survive.",
						"japanese": "このままでは… 都市は持ちこたえられない。",
						"chinese": "这样下去……城市撑不住的。",
						"french": "À ce rythme... la ville ne pourra pas tenir.",
						"spanish": "A este paso... la ciudad no podrá resistir.",
						"vietnamese": "Cứ thế này... thành phố sẽ không thể trụ vững.",
						"thai": "ถ้าเป็นอย่างนี้... เมืองก็อยู่ไม่รอด",
						"hindi": "इस तरह... शहर टिक नहीं पाएगा।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"speaker": "echo",
					"type": "speech",
					"content": {
						"korean": "어쩌면… 이미 돌아올 수 없는 길일지도 몰라.",
						"english": "Perhaps... it's already a point of no return.",
						"japanese": "もしかしたら…もう引き返せない道なのかもしれない。",
						"chinese": "也许……已经是一条无法回头的路了。",
						"french": "Peut-être... est-ce déjà un point de non-retour.",
						"spanish": "Quizás... ya sea un camino sin retorno.",
						"vietnamese": "Có lẽ... đây đã là con đường không thể quay lại.",
						"thai": "บางที... อาจเป็นเส้นทางที่ไม่อาจย้อนกลับได้แล้ว",
						"hindi": "शायद... यह पहले से ही वापसी का कोई रास्ता नहीं है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니, 반드시 막을 거야. 이 비극을 끝낼 방법은 있을 거야.",
						"english": "No, I'll stop it. There must be a way to end this tragedy.",
						"japanese": "いや、必ず止める。この悲劇を終わらせる方法はあるはずだ。",
						"chinese": "不，我一定会阻止它。一定有办法结束这场悲剧的。",
						"french": "Non, je l'arrêterai. Il doit y avoir un moyen de mettre fin à cette tragédie.",
						"spanish": "No, lo detendré. Debe haber una forma de acabar con esta tragedia.",
						"vietnamese": "Không, tôi sẽ ngăn chặn nó. Phải có cách để kết thúc bi kịch này.",
						"thai": "ไม่ ฉันจะหยุดมันให้ได้ ต้องมีทางที่จะยุติโศกนาฏกรรมนี้",
						"hindi": "नहीं, मैं इसे रोकूंगा। इस त्रासदी को समाप्त करने का कोई रास्ता जरूर होगा।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "정체 모를 적이 쓰러졌다. 그러나 위협은 사라지지 않았다.",
						"english": "The unknown enemy fell. But the threat has not vanished.",
						"japanese": "正体不明の敵が倒れた。しかし、脅威は消えていない。",
						"chinese": "未知之敌倒下了。然而，威胁并未消失。",
						"french": "L'ennemi inconnu est tombé. Mais la menace n'a pas disparu.",
						"spanish": "El enemigo desconocido cayó. Pero la amenaza no ha desaparecido.",
						"vietnamese": "Kẻ thù không rõ danh tính đã ngã xuống. Nhưng mối đe dọa vẫn chưa biến mất.",
						"thai": "ศัตรูนิรนามล้มลงแล้ว แต่ภัยคุกคามยังไม่หายไป",
						"hindi": "अज्ञात शत्रु गिर गया। लेकिन खतरा गायब नहीं हुआ है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "크크… 겨우 이 정도론… 아무것도 변하지 않아.",
						"english": "Heh heh... This much... won't change anything.",
						"japanese": "クク…これしきでは…何も変わらない。",
						"chinese": "呵呵……就凭这点……什么也改变不了。",
						"french": "Hahaha... Avec si peu... rien ne changera.",
						"spanish": "Jeje... Con esto... nada cambiará.",
						"vietnamese": "Khà khà... Chừng này thôi... chẳng thay đổi được gì đâu.",
						"thai": "ฮ่าฮ่า... แค่นี้... ไม่มีอะไรเปลี่ยนแปลงหรอก",
						"hindi": "हँ हँ... बस इतना ही... कुछ भी नहीं बदलेगा।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "…끝난 게 아니었어.",
						"english": "...It wasn't over.",
						"japanese": "…終わっていなかった。",
						"chinese": "……还没有结束。",
						"french": "...Ce n'était pas fini.",
						"spanish": "...No había terminado.",
						"vietnamese": "...Vẫn chưa kết thúc.",
						"thai": "...ยังไม่จบ",
						"hindi": "...यह खत्म नहीं हुआ था।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "카운트다운은 계속되고 있었다. 도시는 여전히 어둠에 잠겨 있었다.",
						"english": "The countdown continued. The city remained shrouded in darkness.",
						"japanese": "カウントダウンは続いていた。街は依然として闇に包まれていた。",
						"chinese": "倒计时仍在继续。城市依旧笼罩在黑暗之中。",
						"french": "Le compte à rebours continuait. La ville restait plongée dans l'obscurité.",
						"spanish": "La cuenta atrás continuaba. La ciudad seguía sumida en la oscuridad.",
						"vietnamese": "Đồng hồ đếm ngược vẫn tiếp diễn. Thành phố vẫn chìm trong bóng tối.",
						"thai": "การนับถอยหลังยังคงดำเนินต่อไป เมืองยังคงถูกปกคลุมไปด้วยความมืดมิด",
						"hindi": "उलटी गिनती जारी थी। शहर अभी भी अंधेरे में डूबा हुआ था."
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "echo",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "이건 시작에 불과해. 진짜 팬텀은… 아직 모습을 드러내지 않았어.",
						"english": "This is just the beginning. The true Phantom... has yet to reveal itself.",
						"japanese": "これは始まりに過ぎない。真のファントムは…まだ姿を現していない。",
						"chinese": "这只是个开始。真正的幻影…尚未现身。",
						"french": "Ce n'est que le début. Le vrai Fantôme... ne s'est pas encore montré.",
						"spanish": "Esto es solo el principio. El verdadero Fantasma... aún no se ha revelado.",
						"vietnamese": "Đây chỉ là khởi đầu. Phantom thật sự... vẫn chưa lộ diện.",
						"thai": "นี่เป็นเพียงจุดเริ่มต้นเท่านั้น แฟนทอมตัวจริง... ยังไม่ปรากฏตัว",
						"hindi": "यह तो बस शुरुआत है। असली फैंटम... अभी तक सामने नहीं आया है."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "echo"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "도시의 심장부가 마비되었다. 모든 것이 멈춘 듯했다.",
						"english": "The city's heart was paralyzed. Everything seemed to stop.",
						"japanese": "都市の心臓部が麻痺した。すべてが停止したかのようだった。",
						"chinese": "城市的心脏麻痹了。一切仿佛都停止了。",
						"french": "Le cœur de la ville était paralysé. Tout semblait s'être arrêté.",
						"spanish": "El corazón de la ciudad estaba paralizado. Todo parecía haberse detenido.",
						"vietnamese": "Trái tim thành phố đã tê liệt. Mọi thứ dường như đã ngừng lại.",
						"thai": "ใจกลางเมืองเป็นอัมพาต ทุกอย่างดูเหมือนจะหยุดนิ่ง",
						"hindi": "शहर का दिल लकवाग्रस्त हो गया। सब कुछ रुक सा गया था."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어리석은… 결국 너희도 파국을 맞이할 운명이지.",
						"english": "Foolish... In the end, you too are destined for ruin.",
						"japanese": "愚かな…結局お前たちも破滅を迎える運命なのだ。",
						"chinese": "愚蠢…最终你们也注定会走向毁灭。",
						"french": "Stupides... Au final, vous aussi êtes destinés à la ruine.",
						"spanish": "Estúpidos... Al final, vosotros también estáis destinados a la ruina.",
						"vietnamese": "Ngốc nghếch... Cuối cùng, các ngươi cũng sẽ gặp phải diệt vong thôi.",
						"thai": "โง่เขลา... ในที่สุดพวกเจ้าก็จะต้องพบกับหายนะ",
						"hindi": "मूर्ख... अंत में, तुम भी विनाश के लिए ही बने हो."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…아직 포기할 수 없어. 반드시 막을 거야.",
						"english": "...I can't give up yet. I'll definitely stop it.",
						"japanese": "…まだ諦められない。必ず止めてみせる。",
						"chinese": "…我不能放弃。我一定会阻止它。",
						"french": "...Je ne peux pas encore abandonner. Je l'arrêterai, coûte que coûte.",
						"spanish": "...No puedo rendirme todavía. Lo detendré, cueste lo que cueste.",
						"vietnamese": "...Tôi chưa thể từ bỏ. Tôi nhất định sẽ ngăn chặn nó.",
						"thai": "...ฉันยังยอมแพ้ไม่ได้ ฉันจะหยุดมันให้ได้",
						"hindi": "...मैं अभी हार नहीं मान सकता। मैं इसे ज़रूर रोकूंगा."
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "마침내 마주한 거대한 그림자. 도시의 심장을 갉아먹는 존재.",
						"english": "Finally, a colossal shadow. A being gnawing at the city's heart.",
						"japanese": "ついに相対した巨大な影。都市の心臓を蝕む存在。",
						"chinese": "终于，巨大的阴影浮现。一个正在侵蚀城市核心的存在。",
						"french": "Enfin, une ombre colossale. Un être rongeant le cœur de la ville.",
						"spanish": "Finalmente, una sombra colosal. Un ser que roe el corazón de la ciudad.",
						"vietnamese": "Cuối cùng, một bóng đen khổng lồ hiện ra. Một sinh vật đang gặm nhấm trái tim thành phố.",
						"thai": "ในที่สุดก็เผชิญหน้ากับเงาอันมหึมา สิ่งมีชีวิตที่กัดกินหัวใจของเมือง",
						"hindi": "आखिरकार, एक विशालकाय छाया। शहर के दिल को कुतरने वाला एक अस्तित्व।"
					}
				},
				{
					"content": {
						"korean": "왔군. 예상대로. 헛된 저항은 그만두시지.",
						"english": "You've come. As expected. Cease your futile resistance.",
						"japanese": "来たか。やはりな。無駄な抵抗はやめろ。",
						"chinese": "你来了。不出所料。放弃你那徒劳的抵抗吧。",
						"french": "Vous êtes venu. Comme prévu. Cessez votre vaine résistance.",
						"spanish": "Has venido. Como era de esperar. Cesa tu resistencia inútil.",
						"vietnamese": "Ngươi đã đến. Đúng như dự đoán. Dừng cuộc kháng cự vô ích của ngươi lại.",
						"thai": "มาแล้วสินะ สมดังคาด เลิกต่อต้านที่ไร้ประโยชน์ได้แล้ว",
						"hindi": "तुम आ गए। जैसा कि अपेक्षित था। अपनी व्यर्थ प्रतिरोध बंद करो।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "네가… 팬텀의 부하인가.",
						"english": "You... are Phantom's subordinate?",
						"japanese": "お前が…ファントムの部下か。",
						"chinese": "你……是幻影的部下吗？",
						"french": "Toi... tu es le subordonné de Phantom ?",
						"spanish": "¿Tú... eres el subordinado de Phantom?",
						"vietnamese": "Ngươi... là thuộc hạ của Phantom?",
						"thai": "เจ้า... คือลูกน้องของแฟนท่อมรึ",
						"hindi": "तुम... फैंटम के अधीनस्थ हो?"
					}
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어차피 도시는 붕괴할 운명. 너희의 시간은 끝났다.",
						"english": "The city is destined to collapse anyway. Your time is over.",
						"japanese": "どうせ都市は崩壊する運命。お前たちの時間は終わった。",
						"chinese": "反正这座城市注定要崩塌。你们的时间已经结束了。",
						"french": "La ville est de toute façon destinée à s'effondrer. Votre temps est écoulé.",
						"spanish": "La ciudad está destinada a colapsar de todos modos. Vuestro tiempo ha terminado.",
						"vietnamese": "Dù sao thì thành phố cũng sẽ sụp đổ. Thời gian của các ngươi đã hết.",
						"thai": "อย่างไรเมืองนี้ก็ต้องล่มสลายอยู่ดี เวลาของพวกเจ้าจบลงแล้ว",
						"hindi": "वैसे भी शहर का पतन निश्चित है। तुम्हारा समय समाप्त हो गया है।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "아니, 지금부터 시작이야. 이 비극을 멈출 거야.",
						"english": "No, it starts now. I'll stop this tragedy.",
						"japanese": "いや、今からが始まりだ。この悲劇を止めてみせる。",
						"chinese": "不，现在才刚开始。我一定会阻止这场悲剧。",
						"french": "Non, ça commence maintenant. J'arrêterai cette tragédie.",
						"spanish": "No, esto empieza ahora. Detendré esta tragedia.",
						"vietnamese": "Không, bây giờ mới là bắt đầu. Tôi sẽ ngăn chặn bi kịch này.",
						"thai": "ไม่ ตอนนี้ต่างหากคือจุดเริ่มต้น ฉันจะหยุดยั้งโศกนาฏกรรมนี้",
						"hindi": "नहीं, अब शुरू होता है। मैं इस त्रासदी को रोकूंगा।"
					},
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"도시를 옥죄는 디지털 안개. 그 속에서 그림자가 움직인다.",
			"'팬텀', 미지의 존재가 시스템을 잠식하며 속삭였다.",
			"알 수 없는 오류, 흩어지는 데이터, 그리고 시작된 비극의 카운트다운.",
			"도시는 서서히 붕괴될 운명 앞에 놓였다. 누구도 막을 수 없는 예고처럼."
		],
		"english": [
			"Digital mist chokes the city. Shadows stir within it.",
			"'Phantom,' an unknown entity, whispered as it encroached upon the system.",
			"Unknown errors, scattered data, and the countdown to tragedy began.",
			"The city was destined for slow collapse. Like an unstoppable premonition."
		],
		"japanese": [
			"街を締め付けるデジタルな霧。その中で影が動く。",
			"『ファントム』、未知の存在がシステムを侵食しながら囁いた。",
			"未知のエラー、散逸するデータ、そして始まった悲劇へのカウントダウン。",
			"都市は緩やかな崩壊の運命に置かれた。誰も止められない予兆のように。"
		],
		"chinese": [
			"数字迷雾笼罩城市。阴影在其间蠢蠢欲动。",
			"“幻影”，未知存在侵蚀系统，低语着。",
			"未知错误，数据流失，悲剧倒计时已然开始。",
			"城市注定缓慢崩塌。如无法阻止的预兆。"
		],
		"french": [
			"Une brume numérique étouffe la ville. Des ombres s'y meuvent.",
			"'Fantôme', une entité inconnue, murmura en s'infiltrant dans le système.",
			"Erreurs inconnues, données éparpillées, et le compte à rebours de la tragédie commença.",
			"La ville était vouée à un effondrement lent. Comme une prémonition inarrêtable."
		],
		"spanish": [
			"Una niebla digital asfixia la ciudad. Sombras se agitan en ella.",
			"'Phantom', una entidad desconocida, susurró mientras invadía el sistema.",
			"Errores desconocidos, datos dispersos, y la cuenta atrás hacia la tragedia había comenzado.",
			"La ciudad estaba destinada a un lento colapso. Como una premonición imparable."
		],
		"vietnamese": [
			"Sương mù kỹ thuật số bủa vây thành phố. Bóng tối lẩn khuất bên trong.",
			"'Phantom', một thực thể bí ẩn, thì thầm khi xâm chiếm hệ thống.",
			"Lỗi không xác định, dữ liệu phân tán, và đếm ngược đến bi kịch đã bắt đầu.",
			"Thành phố dần dần sụp đổ. Như một điềm báo không thể ngăn cản."
		],
		"thai": [
			"หมอกดิจิทัลบีบรัดเมือง เงาเคลื่อนไหวอยู่ภายใน",
			" 'แฟนธอม' สิ่งมีชีวิตปริศนา กระซิบขณะกัดกินระบบ",
			"ข้อผิดพลาดที่ไม่รู้จัก ข้อมูลกระจัดกระจาย และการนับถอยหลังสู่โศกนาฏกรรมได้เริ่มต้นขึ้น",
			"เมืองถูกลิขิตให้ล่มสลายอย่างช้าๆ ราวกับลางบอกเหตุที่ไม่มีใครหยุดได้"
		],
		"hindi": [
			"शहर को घेरती डिजिटल धुंध। उसमें परछाइयाँ हिलती हैं।",
			"'फैंटम', एक अज्ञात इकाई, सिस्टम पर अतिक्रमण करते हुए फुसफुसाई।",
			"अज्ञात त्रुटियाँ, बिखरा हुआ डेटा, और त्रासदी की उलटी गिनती शुरू हो गई।",
			"शहर धीरे-धीरे ढहने के लिए नियत था। एक ऐसी पूर्वसूचना की तरह जिसे कोई रोक नहीं सकता।"
		]
	}
} as const;
