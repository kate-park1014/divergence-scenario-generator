export const scenario_modern_pandora_44_01 = {
	"scenario_id": "modern_pandora_44_01",
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
	"prologue": {
		"korean": [
			"끊이지 않는 비, 디지털 안개에 잠긴 도시.",
			"정보는 흐르고, 진실은 데이터의 층위 아래 숨겨져 있었다.",
			"익명의 스트리머, 그리고 기묘한 실종 사건들.",
			"망각의 그림자가 도시를 뒤덮기 시작했다."
		],
		"english": [
			"Endless rain, a city shrouded in digital fog.",
			"Information flowed, truth hidden beneath layers of data.",
			"An anonymous streamer, and strange disappearances.",
			"The shadow of oblivion began to envelop the city."
		],
		"japanese": [
			"止まない雨、デジタルな霧に包まれた都市。",
			"情報は流れ、真実はデータの層の下に隠されていた。",
			"匿名のストリーマー、そして奇妙な失踪事件。",
			"忘却の影が都市を覆い始めた。"
		],
		"chinese": [
			"细雨绵绵，城市笼罩在数字迷雾之中。",
			"信息流动不息，真相却隐藏在数据层之下。",
			"匿名主播，以及离奇的失踪事件。",
			"遗忘的阴影开始笼罩这座城市。"
		],
		"french": [
			"Pluie incessante, une ville plongée dans le brouillard numérique.",
			"L'information circulait, la vérité cachée sous des couches de données.",
			"Un streamer anonyme, et d'étranges disparitions.",
			"L'ombre de l'oubli commença à envelopper la ville."
		],
		"spanish": [
			"Lluvia incesante, una ciudad envuelta en neblina digital.",
			"La información fluía, la verdad oculta bajo capas de datos.",
			"Un streamer anónimo, y extrañas desapariciones.",
			"La sombra del olvido comenzó a envolver la ciudad."
		],
		"vietnamese": [
			"Mưa không ngớt, thành phố chìm trong sương mù kỹ thuật số.",
			"Thông tin trôi chảy, sự thật ẩn mình dưới lớp dữ liệu.",
			"Một streamer ẩn danh, và những vụ mất tích kỳ lạ.",
			"Bóng tối lãng quên bắt đầu bao trùm thành phố."
		],
		"thai": [
			"ฝนไม่หยุดหย่อน, เมืองที่ปกคลุมด้วยหมอกดิจิทัล.",
			"ข้อมูลไหลเวียน, ความจริงถูกซ่อนอยู่ใต้ชั้นข้อมูล.",
			"สตรีมเมอร์นิรนาม, และคดีคนหายแปลกประหลาด.",
			"เงาแห่งการหลงลืมเริ่มปกคลุมเมือง."
		],
		"hindi": [
			"अनवरत वर्षा, डिजिटल कोहरे में डूबा शहर।",
			"जानकारी बहती रही, सच्चाई डेटा की परतों के नीचे छिपी थी।",
			"एक गुमनाम स्ट्रीमर, और अजीबोगरीब गुमशुदगी के मामले।",
			"विस्मृति की छाया ने शहर को घेरना शुरू कर दिया।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "최첨단 기술과 낡은 아날로그 미학이 공존하는 도시. 그 심장부, 폐쇄된 아카이브 앞.",
						"english": "A city where cutting-edge tech coexists with old analog aesthetics. At its heart, before a closed archive.",
						"japanese": "最先端技術と古きアナログ美学が共存する都市。その心臓部、閉鎖されたアーカイブの前。",
						"chinese": "一个高科技与老式模拟美学并存的城市。在其核心，封闭的档案室前。",
						"french": "Une ville où la technologie de pointe côtoie l'esthétique analogique d'antan. Au cœur de celle-ci, devant des archives closes.",
						"spanish": "Una ciudad donde la tecnología punta coexiste con la estética analógica antigua. En su corazón, frente a un archivo cerrado.",
						"vietnamese": "Một thành phố nơi công nghệ tiên tiến và thẩm mỹ analog cũ cùng tồn tại. Tại trung tâm của nó, trước một kho lưu trữ đã đóng.",
						"thai": "เมืองที่เทคโนโลยีล้ำสมัยอยู่ร่วมกับสุนทรียภาพอนาล็อกเก่าแก่. ใจกลางเมือง, หน้าหอจดหมายเหตุที่ปิดสนิท.",
						"hindi": "एक शहर जहाँ अत्याधुनिक तकनीक पुरानी एनालॉग सौंदर्यशास्त्र के साथ सह-अस्तित्व में है। इसके केंद्र में, एक बंद अभिलेखागार के सामने।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "여기가… '잊혀진 기록'들을 보관한다는 아카이브?",
						"english": "Is this... the archive said to hold 'forgotten records'?",
						"japanese": "ここが…「忘れられた記録」を保管するというアーカイブか？",
						"chinese": "这里就是……据说存放着“被遗忘记录”的档案室？",
						"french": "C'est ici… l'archive censée abriter les 'dossiers oubliés' ?",
						"spanish": "¿Aquí es... el archivo que se dice que guarda los 'registros olvidados'?",
						"vietnamese": "Đây là... kho lưu trữ được cho là chứa 'những hồ sơ bị lãng quên'?",
						"thai": "นี่คือ... หอจดหมายเหตุที่ว่ากันว่าเก็บ 'บันทึกที่ถูกลืม' งั้นเหรอ?",
						"hindi": "क्या यह... वह अभिलेखागार है जहाँ 'भुलाए गए रिकॉर्ड' रखे जाते हैं?"
					},
					"emotion": "base"
				},
				{
					"speaker": "echo",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "echo",
					"content": {
						"korean": "오래된 데이터를 관리하는 에코. 올 줄 알았어.",
						"english": "Echo, manager of old data. Knew you'd come.",
						"japanese": "古いデータを管理するエコー。来ると思っていたよ。",
						"chinese": "旧数据管理员艾可。我就知道你会来。",
						"french": "Echo, la gestionnaire des vieilles données. Je savais que tu viendrais.",
						"spanish": "Echo, la administradora de datos antiguos. Sabía que vendrías.",
						"vietnamese": "Echo, người quản lý dữ liệu cũ. Tôi biết bạn sẽ đến.",
						"thai": "เอคโค่, ผู้ดูแลข้อมูลเก่า. ฉันรู้ว่าคุณจะมา.",
						"hindi": "इको, पुराने डेटा की प्रबंधक। मुझे पता था तुम आओगी।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "실종 사건의 단서를 쫓고 있어.",
						"english": "I'm chasing leads on the disappearance cases.",
						"japanese": "失踪事件の手がかりを追っているんだ。",
						"chinese": "我在追查失踪事件的线索。",
						"french": "Je suis sur la piste des disparitions.",
						"spanish": "Estoy siguiendo pistas sobre los casos de desaparición.",
						"vietnamese": "Tôi đang theo đuổi manh mối về các vụ mất tích.",
						"thai": "ฉันกำลังตามรอยเบาะแสคดีคนหาย.",
						"hindi": "मैं गुमशुदगी के मामलों के सुरागों का पीछा कर रहा हूँ।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "기록은 진실을 감추는 가장 좋은 수단이지. 때로는… 감추려는 의도 자체가 단서가 되고.",
						"english": "Records are the best way to hide the truth. Sometimes... the very act of hiding becomes a clue.",
						"japanese": "記録は真実を隠す最良の手段だ。時には…隠そうとする意図自体が手がかりとなる。",
						"chinese": "记录是隐藏真相最好的手段。有时……试图隐藏的意图本身就是线索。",
						"french": "Les archives sont le meilleur moyen de dissimuler la vérité. Parfois… l'intention même de dissimuler devient un indice.",
						"spanish": "Los registros son el mejor medio para ocultar la verdad. A veces… la intención misma de ocultar se convierte en una pista.",
						"vietnamese": "Ghi chép là cách tốt nhất để che giấu sự thật. Đôi khi... chính ý định che giấu lại trở thành manh mối.",
						"thai": "บันทึกเป็นวิธีที่ดีที่สุดในการซ่อนความจริง. บางครั้ง... เจตนาที่จะซ่อนนั่นแหละที่กลายเป็นเบาะแส.",
						"hindi": "रिकॉर्ड सच्चाई छिपाने का सबसे अच्छा साधन हैं। कभी-कभी... छिपाने का इरादा ही सुराग बन जाता है।"
					},
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "echo",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "최근, 이 아카이브의 오래된 데이터 부스러기에서 이상한 간섭 현상이 감지돼.",
						"english": "Recently, strange interference has been detected in the old data fragments of this archive.",
						"japanese": "最近、このアーカイブの古いデータ断片から奇妙な干渉現象が検出されている。",
						"chinese": "最近，这个档案室的旧数据碎片中检测到了奇怪的干扰现象。",
						"french": "Récemment, d'étranges interférences ont été détectées dans les vieux fragments de données de ces archives.",
						"spanish": "Recientemente, se han detectado extrañas interferencias en los fragmentos de datos antiguos de este archivo.",
						"vietnamese": "Gần đây, những hiện tượng nhiễu lạ đã được phát hiện trong các mảnh dữ liệu cũ của kho lưu trữ này.",
						"thai": "เมื่อเร็วๆ นี้, ตรวจพบปรากฏการณ์การรบกวนแปลกๆ ในเศษข้อมูลเก่าของหอจดหมายเหตุแห่งนี้.",
						"hindi": "हाल ही में, इस अभिलेखागार के पुराने डेटा टुकड़ों में अजीबोगरीब हस्तक्षेप का पता चला है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "간섭? 단순한 오류가 아니라고?",
						"english": "Interference? Not just a simple error?",
						"japanese": "干渉？単なるエラーではないと？",
						"chinese": "干扰？不仅仅是简单的错误？",
						"french": "Interférence ? Pas juste une simple erreur ?",
						"spanish": "¿Interferencia? ¿No es solo un simple error?",
						"vietnamese": "Can thiệp? Không phải lỗi đơn thuần sao?",
						"thai": "การรบกวน? ไม่ใช่แค่ข้อผิดพลาดธรรมดาเหรอ?",
						"hindi": "हस्तक्षेप? सिर्फ एक साधारण त्रुटि नहीं?"
					}
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "마치 누군가, 과거의 정보를 조작하려는 것처럼. 인위적인 흔적이 있어.",
						"english": "As if someone is trying to manipulate past information. There are artificial traces.",
						"japanese": "まるで誰かが過去の情報を操作しようとしているかのように。人為的な痕跡がある。",
						"chinese": "就像有人试图操纵过去的信息。有人为的痕迹。",
						"french": "Comme si quelqu'un essayait de manipuler des informations passées. Il y a des traces artificielles.",
						"spanish": "Como si alguien intentara manipular información del pasado. Hay rastros artificiales.",
						"vietnamese": "Cứ như ai đó đang cố thao túng thông tin trong quá khứ. Có dấu vết nhân tạo.",
						"thai": "ราวกับมีใครบางคนกำลังพยายามบิดเบือนข้อมูลในอดีต มีร่องรอยของการสร้างขึ้นมา",
						"hindi": "जैसे कोई अतीत की जानकारी में हेरफेर करने की कोशिश कर रहा हो। इसमें कृत्रिम निशान हैं।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "실종된 사람들의 기록도… 변형된 건가?",
						"english": "The records of the missing people… are they also altered?",
						"japanese": "行方不明者の記録も…変形させられたのか？",
						"chinese": "失踪者的记录…也被篡改了吗？",
						"french": "Les dossiers des personnes disparues… sont-ils aussi altérés ?",
						"spanish": "¿Los registros de las personas desaparecidas… también fueron alterados?",
						"vietnamese": "Hồ sơ của những người mất tích… cũng bị biến đổi sao?",
						"thai": "บันทึกของคนหาย… ก็ถูกเปลี่ยนแปลงด้วยเหรอ?",
						"hindi": "लापता लोगों के रिकॉर्ड भी… क्या वे भी बदल दिए गए हैं?"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "echo",
					"content": {
						"korean": "사라진 게 아니야. 변형되고, 재구성되고 있지.",
						"english": "They didn't disappear. They're being altered and reconstructed.",
						"japanese": "消えたわけじゃない。変形され、再構築されているんだ。",
						"chinese": "他们没有消失。他们正在被改变和重构。",
						"french": "Ils n'ont pas disparu. Ils sont altérés et reconstruits.",
						"spanish": "No desaparecieron. Están siendo alterados y reconstruidos.",
						"vietnamese": "Không phải biến mất. Chúng đang bị biến đổi và tái cấu trúc.",
						"thai": "พวกเขาไม่ได้หายไปไหน กำลังถูกเปลี่ยนแปลงและสร้างขึ้นใหม่",
						"hindi": "वे गायब नहीं हुए। उन्हें बदला और पुनर्गठित किया जा रहा है।"
					},
					"type": "speech"
				}
			]
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
					"duration_ms": 500,
					"speaker": "echo"
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "이 도시의 모든 디지털 기록은 거대한 신경망처럼 연결되어 있어.",
						"english": "All digital records in this city are connected like a vast neural network.",
						"japanese": "この都市のあらゆるデジタル記録は、巨大な神経網のように繋がっている。",
						"chinese": "这座城市的所有数字记录都像一个巨大的神经网络一样连接着。",
						"french": "Tous les enregistrements numériques de cette ville sont connectés comme un vaste réseau neuronal.",
						"spanish": "Todos los registros digitales de esta ciudad están conectados como una vasta red neuronal.",
						"vietnamese": "Tất cả hồ sơ kỹ thuật số trong thành phố này đều được kết nối như một mạng lưới thần kinh khổng lồ.",
						"thai": "ข้อมูลดิจิทัลทั้งหมดในเมืองนี้เชื่อมโยงกันเหมือนโครงข่ายประสาทขนาดใหญ่",
						"hindi": "इस शहर के सभी डिजिटल रिकॉर्ड एक विशाल तंत्रिका नेटवर्क की तरह जुड़े हुए हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "그럼, 이 왜곡이 도시 전체에 영향을 미친다고?",
						"english": "So, this distortion affects the entire city?",
						"japanese": "では、この歪みが都市全体に影響を与えるというのか？",
						"chinese": "那么，这种扭曲会影响整个城市吗？",
						"french": "Alors, cette distorsion affecte toute la ville ?",
						"spanish": "Entonces, ¿esta distorsión afecta a toda la ciudad?",
						"vietnamese": "Vậy, sự méo mó này ảnh hưởng đến toàn bộ thành phố ư?",
						"thai": "งั้น ความบิดเบือนนี้ส่งผลกระทบต่อทั้งเมืองเลยเหรอ?",
						"hindi": "तो, यह विकृति पूरे शहर को प्रभावित करती है?"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "echo",
					"content": {
						"korean": "숨겨진 진실이 강제로 수면 위로 떠오르려는 거야. 혹은… 억지로 덮으려는 시도거나.",
						"english": "A hidden truth is being forced to surface. Or… an attempt to forcibly cover it up.",
						"japanese": "隠された真実が無理やり表面化しようとしているんだ。あるいは…無理に隠蔽しようとしているか。",
						"chinese": "一个隐藏的真相正被迫浮出水面。或者…有人试图强行掩盖它。",
						"french": "Une vérité cachée est forcée de remonter à la surface. Ou… une tentative de la dissimuler de force.",
						"spanish": "Una verdad oculta está siendo forzada a salir a la luz. O… un intento de encubrirla a la fuerza.",
						"vietnamese": "Một sự thật bị che giấu đang bị buộc phải nổi lên. Hoặc… một nỗ lực để che đậy nó một cách cưỡng bức.",
						"thai": "ความจริงที่ซ่อนอยู่กำลังถูกบังคับให้ปรากฏขึ้น หรือไม่ก็… เป็นความพยายามที่จะปิดบังมัน",
						"hindi": "एक छिपा हुआ सच सामने आने को मजबूर है। या… इसे जबरन दबाने का प्रयास।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "어느 쪽이든 위험하겠군.",
						"english": "Either way, it'd be dangerous.",
						"japanese": "どちらにせよ、危険だな。",
						"chinese": "无论哪种情况，都会很危险。",
						"french": "Dans tous les cas, ce serait dangereux.",
						"spanish": "De cualquier manera, sería peligroso.",
						"vietnamese": "Dù thế nào thì cũng nguy hiểm thôi.",
						"thai": "ไม่ว่าจะทางไหน ก็อันตรายทั้งนั้นแหละ",
						"hindi": "किसी भी तरह, यह खतरनाक होगा।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "네가 쫓는 진실은… 단순한 실종 사건을 넘어선 무언가야.",
						"english": "The truth you're chasing… is something beyond a simple missing persons case.",
						"japanese": "君が追う真実は…単なる失踪事件を超えた何かだ。",
						"chinese": "你所追寻的真相…超越了简单的失踪案件。",
						"french": "La vérité que tu poursuis… est quelque chose qui dépasse un simple cas de disparition.",
						"spanish": "La verdad que persigues… es algo más allá de un simple caso de personas desaparecidas.",
						"vietnamese": "Sự thật mà anh đang theo đuổi… là thứ gì đó vượt ra ngoài một vụ án mất tích đơn thuần.",
						"thai": "ความจริงที่คุณกำลังตามหา… มันเหนือกว่าแค่คดีคนหายธรรมดา",
						"hindi": "जिस सच्चाई का तुम पीछा कर रहे हो… वह सिर्फ एक साधारण लापता व्यक्ति के मामले से बढ़कर है।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						4
					],
					"action": "enter",
					"type": "direction",
					"speaker": "echo",
					"duration_ms": 500
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "오래된 사건 파일을 뒤지다 느꼈어.",
						"english": "I realized it while digging through old case files.",
						"japanese": "古い事件ファイルを漁っていて気づいたんだ。",
						"chinese": "我在翻查旧案件档案时意识到的。",
						"french": "Je l'ai réalisé en fouillant de vieux dossiers d'affaires.",
						"spanish": "Me di cuenta mientras revisaba viejos archivos de casos.",
						"vietnamese": "Tôi nhận ra điều đó khi lục lọi các hồ sơ vụ án cũ.",
						"thai": "ฉันรู้ได้เมื่อค้นหาแฟ้มคดีเก่าๆ",
						"hindi": "मुझे पुराने केस फाइलों को खंगालते हुए एहसास हुआ।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "뭘?",
						"english": "What?",
						"japanese": "何を？",
						"chinese": "什么？",
						"french": "Quoi ?",
						"spanish": "¿Qué?",
						"vietnamese": "Gì vậy?",
						"thai": "อะไรนะ?",
						"hindi": "क्या?"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "echo",
					"content": {
						"korean": "특정 데이터만 사라진 게 아니었어. 마치 무언가 '흡수된' 것처럼.",
						"english": "It wasn't just specific data that vanished. It was as if something was 'absorbed'.",
						"japanese": "特定のデータだけが消えたわけじゃなかった。まるで何かが『吸収された』かのように。",
						"chinese": "并非只有特定数据消失了。就好像有什么东西被‘吸收’了一样。",
						"french": "Ce ne sont pas seulement des données spécifiques qui ont disparu. C'était comme si quelque chose avait été 'absorbé'.",
						"spanish": "No fue solo data específica lo que desapareció. Fue como si algo hubiera sido 'absorbido'.",
						"vietnamese": "Không chỉ dữ liệu cụ thể biến mất. Cứ như thể có thứ gì đó đã bị 'hút vào'.",
						"thai": "ไม่ใช่แค่ข้อมูลบางส่วนที่หายไป... มันเหมือนกับว่าบางสิ่งถูก 'ดูดกลืน' ไปต่างหาก",
						"hindi": "केवल विशेष डेटा ही गायब नहीं हुआ था। मानो कुछ 'अवशोषित' कर लिया गया हो।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "흡수… 도시의 기억이 통째로?",
						"english": "Absorbed... the city's entire memory?",
						"japanese": "吸収…都市の記憶が丸ごと？",
						"chinese": "吸收…整个城市的记忆？",
						"french": "Absorbé... la mémoire entière de la ville ?",
						"spanish": "¿Absorbido... toda la memoria de la ciudad?",
						"vietnamese": "Hút vào... toàn bộ ký ức của thành phố sao?",
						"thai": "ดูดกลืน... ความทรงจำของเมืองทั้งหมดงั้นรึ?",
						"hindi": "अवशोषित... शहर की पूरी यादें?"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "echo",
					"content": {
						"korean": "이 이상 파고드는 건 위험해. 넌 혼자가 아니야.",
						"english": "Digging deeper is dangerous. You're not alone.",
						"japanese": "これ以上深入りするのは危険だ。君は一人じゃない。",
						"chinese": "再深入下去就危险了。你不是一个人。",
						"french": "Approfondir est dangereux. Tu n'es pas seul.",
						"spanish": "Excavar más profundo es peligroso. No estás solo.",
						"vietnamese": "Đào sâu hơn nữa là nguy hiểm. Bạn không đơn độc.",
						"thai": "ขุดลึกไปกว่านี้อันตรายนะ นายไม่ได้อยู่คนเดียว",
						"hindi": "और गहराई में जाना खतरनाक है। तुम अकेले नहीं हो।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "멈출 수 없어. 이 그림자를 끝내야만 해.",
						"english": "I can't stop. I must end this shadow.",
						"japanese": "止められない。この影を終わらせなければ。",
						"chinese": "我不能停。必须终结这个影子。",
						"french": "Je ne peux pas m'arrêter. Je dois en finir avec cette ombre.",
						"spanish": "No puedo parar. Debo acabar con esta sombra.",
						"vietnamese": "Tôi không thể dừng lại. Tôi phải kết thúc cái bóng này.",
						"thai": "ฉันหยุดไม่ได้ ฉันต้องกำจัดเงามืดนี้ให้ได้",
						"hindi": "मैं रुक नहीं सकता। मुझे इस परछाई को खत्म करना ही होगा।"
					}
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "망각 속으로 사라져라… 아무도 널 기억하지 못할 것이다.",
						"english": "Vanish into oblivion... no one will remember you.",
						"japanese": "忘却の彼方へ消え去れ… 誰も貴様を覚えていないだろう。",
						"chinese": "消失在遗忘之中吧……没有人会记住你。",
						"french": "Disparais dans l'oubli… personne ne se souviendra de toi.",
						"spanish": "Desaparece en el olvido… nadie te recordará.",
						"vietnamese": "Biến mất vào quên lãng… không ai sẽ nhớ đến ngươi.",
						"thai": "จงเลือนหายไปในความหลงลืม... ไม่มีใครจะจดจำเจ้าได้.",
						"hindi": "विस्मृति में विलीन हो जाओ… कोई तुम्हें याद नहीं रखेगा।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "…아직 끝나지 않았어. 반드시 돌아올 거야.",
						"english": "...It's not over yet. I will definitely return.",
						"japanese": "…まだ終わってない。必ず戻ってくる。",
						"chinese": "……还没有结束。我一定会回来的。",
						"french": "…Ce n'est pas encore fini. Je reviendrai, c'est certain.",
						"spanish": "…Todavía no ha terminado. Regresaré, lo prometo.",
						"vietnamese": "…Chưa kết thúc. Ta nhất định sẽ trở lại.",
						"thai": "...ยังไม่จบ. ข้าจะกลับมาแน่นอน.",
						"hindi": "…अभी खत्म नहीं हुआ है। मैं निश्चित रूप से वापस आऊँगा।"
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "겨우 시작일 뿐… 망각은… 더 깊이 잠들어 있다….",
						"english": "This is just the beginning... oblivion... slumbers deeper.",
						"japanese": "まだ始まったばかりだ… 忘却は… もっと深く眠っている…",
						"chinese": "这仅仅是开始……遗忘……沉睡得更深……",
						"french": "Ce n'est que le début… l'oubli… sommeille plus profondément…",
						"spanish": "Esto es solo el principio… el olvido… yace más profundo…",
						"vietnamese": "Chỉ mới là khởi đầu… sự lãng quên… đang ngủ sâu hơn…",
						"thai": "นี่เป็นเพียงจุดเริ่มต้น... การหลงลืม... หลับใหลลึกกว่านั้น...",
						"hindi": "यह तो बस शुरुआत है… विस्मृति… और गहरी नींद में है…"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…끝난 게 아니었어.",
						"english": "...It wasn't over.",
						"japanese": "…終わってなかった。",
						"chinese": "……还没有结束。",
						"french": "…Ce n'était pas fini.",
						"spanish": "…No había terminado.",
						"vietnamese": "…Chưa kết thúc.",
						"thai": "...ยังไม่จบ.",
						"hindi": "…यह खत्म नहीं हुआ था।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "echo",
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "echo",
					"content": {
						"korean": "잘했어. 하지만… 그림자는 이제 시작이야. 더 깊은 곳으로 가야 해.",
						"english": "Well done. But... the shadows are just beginning. You must go deeper.",
						"japanese": "よくやった。だが… 影はこれからだ。もっと深部へ進まねばならない。",
						"chinese": "做得好。但是……阴影才刚刚开始。你必须去更深的地方。",
						"french": "Bien joué. Mais… les ombres ne font que commencer. Tu dois aller plus loin.",
						"spanish": "Bien hecho. Pero… las sombras apenas comienzan. Debes ir más profundo.",
						"vietnamese": "Làm tốt lắm. Nhưng… bóng tối chỉ mới bắt đầu. Ngươi phải đi sâu hơn nữa.",
						"thai": "ทำได้ดีมาก. แต่... เงาเพิ่งจะเริ่มต้นเท่านั้น. เจ้าต้องไปให้ลึกกว่านี้.",
						"hindi": "शाबाश। लेकिन… परछाई अब शुरू हुई है। तुम्हें और गहरा जाना होगा।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 적의 잔해가 디지털 먼지가 되어 사라졌다. 그러나 도시의 비는 그치지 않았다.",
						"english": "The remnants of the unknown enemy vanished into digital dust. Yet, the city's rain did not cease.",
						"japanese": "正体不明の敵の残骸はデジタルダストと化して消え去った。しかし、街の雨は止まなかった。",
						"chinese": "身份不明的敌人残骸化作数字尘埃消失了。然而，城市的雨并未停止。",
						"french": "Les vestiges de l'ennemi inconnu s'évaporèrent en poussière numérique. Pourtant, la pluie de la ville ne cessa pas.",
						"spanish": "Los restos del enemigo desconocido se desvanecieron en polvo digital. Sin embargo, la lluvia de la ciudad no cesó.",
						"vietnamese": "Tàn tích của kẻ thù không rõ danh tính tan biến thành bụi kỹ thuật số. Tuy nhiên, cơn mưa của thành phố vẫn không ngừng.",
						"thai": "ซากศพของศัตรูที่ไม่ระบุตัวตนได้สลายไปเป็นผงดิจิทัล. ทว่า, ฝนของเมืองก็ยังไม่หยุดตก.",
						"hindi": "अज्ञात शत्रु के अवशेष डिजिटल धूल बनकर गायब हो गए। फिर भी, शहर की बारिश नहीं रुकी।"
					}
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "아카이브의 가장 깊은 곳. 모든 데이터가 일그러지는 곳.",
						"english": "The deepest part of the archive. Where all data is distorted.",
						"japanese": "アーカイブの最も深い場所。全てのデータが歪む場所。",
						"chinese": "档案最深处。所有数据扭曲之处。",
						"french": "La partie la plus profonde des archives. Là où toutes les données sont déformées.",
						"spanish": "La parte más profunda del archivo. Donde todos los datos están distorsionados.",
						"vietnamese": "Nơi sâu nhất của kho lưu trữ. Nơi mọi dữ liệu bị bóp méo.",
						"thai": "ส่วนที่ลึกที่สุดของห้องเก็บข้อมูล ที่ที่ข้อมูลทุกอย่างบิดเบี้ยว",
						"hindi": "पुरालेख का सबसे गहरा हिस्सा। जहाँ सभी डेटा विकृत हो जाता है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "감히 이곳까지 오다니. 너도 망각될 운명인가.",
						"english": "How dare you come this far. Are you also destined for oblivion?",
						"japanese": "よくもここまで来たな。お前も忘却の運命か。",
						"chinese": "竟敢来到这里。你也要被遗忘吗？",
						"french": "Comment oses-tu venir jusqu'ici ? Toi aussi, es-tu destiné à l'oubli ?",
						"spanish": "¿Cómo te atreves a llegar tan lejos? ¿También estás destinado al olvido?",
						"vietnamese": "Dám đến tận đây sao. Ngươi cũng định bị lãng quên sao.",
						"thai": "กล้าดียังไงถึงมาที่นี่ได้? แกก็มีชะตาต้องถูกลืมเหมือนกันรึเปล่า?",
						"hindi": "तुम्हारी हिम्मत कैसे हुई यहाँ तक आने की। क्या तुम भी विस्मृति के भाग्य में हो?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 도시의 디지털 왜곡을 만들고 사람들을 실종시킨 주범이군.",
						"english": "So you're the one behind the city's digital distortion and the disappearance of people.",
						"japanese": "お前がこの街のデジタル歪曲を作り出し、人々を失踪させた首謀者だな。",
						"chinese": "你就是造成这座城市数字扭曲、导致人口失踪的幕后黑手。",
						"french": "C'est donc toi le responsable de la distorsion numérique de cette ville et de la disparition des gens.",
						"spanish": "Así que tú eres el cerebro detrás de la distorsión digital de la ciudad y la desaparición de las personas.",
						"vietnamese": "Vậy ra ngươi là kẻ chủ mưu gây ra sự méo mó kỹ thuật số của thành phố này và khiến mọi người biến mất.",
						"thai": "แกนี่เองที่เป็นตัวการทำให้เกิดความบิดเบี้ยวทางดิจิทัลของเมืองนี้ แถมยังทำให้ผู้คนหายตัวไปอีก",
						"hindi": "तो तुम ही इस शहर की डिजिटल विकृति और लोगों के लापता होने के पीछे के मास्टरमाइंड हो।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "나는 그저… 잊혀진 것들의 그림자일 뿐. 진실은 너희가 감당하기 힘들 것이다.",
						"english": "I am merely... a shadow of forgotten things. The truth would be too much for you to bear.",
						"japanese": "私はただ…忘れ去られたものの影に過ぎない。真実はお前たちには耐えられないだろう。",
						"chinese": "我不过是…被遗忘之物的影子。真相是你们无法承受的。",
						"french": "Je ne suis que... une ombre des choses oubliées. La vérité serait trop lourde à porter pour vous.",
						"spanish": "Soy meramente... una sombra de cosas olvidadas. La verdad sería demasiado para que la soportéis.",
						"vietnamese": "Tôi chỉ là... cái bóng của những thứ bị lãng quên. Sự thật sẽ quá sức để các ngươi chịu đựng.",
						"thai": "ฉันก็แค่... เงาของสิ่งที่ถูกหลงลืมไปเท่านั้นเอง ความจริงนั้น พวกแกรับมือไม่ไหวหรอก",
						"hindi": "मैं तो बस... भूली हुई चीज़ों की परछाई हूँ। सच्चाई तुम लोगों के लिए सहना मुश्किल होगा।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "그 진실, 내가 직접 파헤치겠어.",
						"english": "I'll uncover that truth myself.",
						"japanese": "その真実、私が直接暴いてやる。",
						"chinese": "那个真相，我会亲自揭露。",
						"french": "Cette vérité, je la déterrerai moi-même.",
						"spanish": "Esa verdad, la descubriré yo mismo.",
						"vietnamese": "Sự thật đó, tôi sẽ tự mình phơi bày.",
						"thai": "ความจริงนั้น ฉันจะขุดคุ้ยมันออกมาเอง",
						"hindi": "उस सच्चाई को मैं खुद उजागर करूँगा।"
					}
				}
			]
		}
	]
} as const;
