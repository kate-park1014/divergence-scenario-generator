export const scenario_snowy_boreas_48_01 = {
	"scenario_id": "snowy_boreas_48_01",
	"order": 1,
	"act": "intro",
	"theme": "snowy",
	"actors": {
		"eira": {
			"id": "mon_0c37c014-b5ca-4f2f-ad03-5d393e5b2eb1",
			"name": {
				"korean": "에이라",
				"english": "Eira",
				"japanese": "エイラ",
				"chinese": "艾拉",
				"french": "Eira",
				"spanish": "Eira",
				"vietnamese": "Eira",
				"thai": "ไอรา",
				"hindi": "ऐरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8e2970b7-bcb1-4b1c-6bf0-93106b373500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0ca1ec09-a624-450f-054a-b98de58bdb00/public"
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
					"content": {
						"korean": "설원 깊은 곳, 탐사 기지에 도착했다.",
						"english": "Deep in the snowy plains, we arrived at the expedition base.",
						"japanese": "雪原の奥深く、探査基地に到着した。",
						"chinese": "在雪原深处，抵达了探测基地。",
						"french": "Au plus profond des plaines enneigées, nous sommes arrivés à la base d'expédition.",
						"spanish": "En lo profundo de las llanuras nevadas, llegamos a la base de expedición.",
						"vietnamese": "Sâu trong đồng tuyết, chúng ta đã đến căn cứ thám hiểm.",
						"thai": "ลึกเข้าไปในทุ่งหิมะ เรามาถึงฐานสำรวจแล้ว",
						"hindi": "बर्फ़ीले मैदानों में गहराई तक, हम अन्वेषण आधार पर पहुँचे।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "여기가 그 기지…?",
						"english": "This is the base...?",
						"japanese": "ここがあの基地…？",
						"chinese": "这里就是那个基地……？",
						"french": "C'est ça la base...?",
						"spanish": "¿Esta es la base...?",
						"vietnamese": "Đây là căn cứ đó sao...?",
						"thai": "นี่คือฐานนั่นเหรอ...?",
						"hindi": "यह वही आधार है...?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						2
					],
					"action": "enter"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "환영합니다. 저는 시스템 안내자, 에이라입니다.",
						"english": "Welcome. I am Aira, the system guide.",
						"japanese": "ようこそ。私はシステム案内者、アイラです。",
						"chinese": "欢迎。我是系统向导，艾拉。",
						"french": "Bienvenue. Je suis Aira, le guide du système.",
						"spanish": "Bienvenido. Soy Aira, la guía del sistema.",
						"vietnamese": "Chào mừng. Tôi là Aira, người hướng dẫn hệ thống.",
						"thai": "ยินดีต้อนรับ ฉันคือไอร่า ผู้นำทางระบบ",
						"hindi": "स्वागत है। मैं आयरा, सिस्टम मार्गदर्शक हूँ।"
					},
					"type": "speech",
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "시스템은 모든 것을 효율적으로 관리합니다. 여러분의 행동도 예측 가능하죠.",
						"english": "The system manages everything efficiently. Even your actions are predictable.",
						"japanese": "システムはすべてを効率的に管理します。皆様の行動も予測可能です。",
						"chinese": "系统高效管理着一切。你们的行为也都在可预测范围内。",
						"french": "Le système gère tout efficacement. Vos actions sont également prévisibles.",
						"spanish": "El sistema gestiona todo de manera eficiente. Sus acciones también son predecibles.",
						"vietnamese": "Hệ thống quản lý mọi thứ hiệu quả. Ngay cả hành động của các bạn cũng có thể dự đoán được.",
						"thai": "ระบบจัดการทุกสิ่งอย่างมีประสิทธิภาพ แม้แต่การกระทำของคุณก็คาดเดาได้",
						"hindi": "सिस्टम सब कुछ कुशलता से प्रबंधित करता है। आपके कार्य भी अनुमान योग्य हैं।"
					},
					"type": "speech",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "행동을 예측한다고?",
						"english": "Predict our actions?",
						"japanese": "行動を予測するだと？",
						"chinese": "预测我们的行为？",
						"french": "Prédire nos actions ?",
						"spanish": "¿Predecir nuestras acciones?",
						"vietnamese": "Dự đoán hành động sao?",
						"thai": "คาดการณ์การกระทำงั้นเหรอ?",
						"hindi": "हमारे कार्यों का अनुमान लगाता है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "eira",
					"spot": [
						2,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…보고 싶다.",
						"english": "...I miss you.",
						"japanese": "…会いたい。",
						"chinese": "……我想你。",
						"french": "...Tu me manques.",
						"spanish": "...Te echo de menos.",
						"vietnamese": "...Tôi nhớ bạn.",
						"thai": "...คิดถึงจังเลย",
						"hindi": "...मुझे तुम्हारी याद आती है।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "감정적인 동요가 감지되었습니다. 비효율적입니다.",
						"english": "Emotional fluctuation detected. Inefficient.",
						"japanese": "感情的な動揺が感知されました。非効率的です。",
						"chinese": "检测到情绪波动。效率低下。",
						"french": "Une perturbation émotionnelle a été détectée. Inefficace.",
						"spanish": "Se ha detectado una alteración emocional. Ineficiente.",
						"vietnamese": "Đã phát hiện sự xáo động cảm xúc. Không hiệu quả.",
						"thai": "ตรวจพบความผันผวนทางอารมณ์ ไม่มีประสิทธิภาพ",
						"hindi": "भावनात्मक उथल-पुथल का पता चला। अक्षम।"
					},
					"type": "speech",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "시스템은 불필요한 감정을 계산에서 제외합니다. 생산성에 방해되죠.",
						"english": "The system excludes unnecessary emotions from calculations. They hinder productivity.",
						"japanese": "システムは不要な感情を計算から除外します。生産性を妨げます。",
						"chinese": "系统将不必要的情绪排除在计算之外。它们会妨碍生产力。",
						"french": "Le système exclut les émotions inutiles des calculs. Elles entravent la productivité.",
						"spanish": "El sistema excluye las emociones innecesarias de los cálculos. Obstaculizan la productividad.",
						"vietnamese": "Hệ thống loại trừ những cảm xúc không cần thiết khỏi các phép tính. Chúng cản trở năng suất.",
						"thai": "ระบบไม่รวมอารมณ์ที่ไม่จำเป็นออกจากการคำนวณ มันขัดขวางประสิทธิภาพการผลิต",
						"hindi": "सिस्टम अनावश्यक भावनाओं को गणना से बाहर रखता है। वे उत्पादकता में बाधा डालते हैं।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "불필요한 감정이라니…",
						"english": "Unnecessary emotions, you say...?",
						"japanese": "不必要な感情だと…？",
						"chinese": "不必要的情绪……？",
						"french": "Des émotions inutiles, vous dites...?",
						"spanish": "¿Emociones innecesarias, dices...?",
						"vietnamese": "Cảm xúc không cần thiết ư...?",
						"thai": "อารมณ์ที่ไม่จำเป็นเหรอ...?",
						"hindi": "अनावश्यक भावनाएँ, तुम कहते हो...?"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "eira"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "기지 내부는 기이한 문양으로 가득했다. 오래된 바이킹의 흔적 같았다.",
						"english": "The interior of the base was filled with bizarre patterns. They seemed like traces of ancient Vikings.",
						"japanese": "基地内部は奇妙な模様で満たされていた。それは古いバイキングの痕跡のようだった。",
						"chinese": "基地内部布满了奇异的图案。它们看起来像是古老维京人的痕迹。",
						"french": "L'intérieur de la base était rempli de motifs étranges. Ils semblaient être des traces d'anciens Vikings.",
						"spanish": "El interior de la base estaba lleno de extraños patrones. Parecían vestigios de antiguos vikingos.",
						"vietnamese": "Bên trong căn cứ tràn ngập những hoa văn kỳ lạ. Chúng giống như dấu tích của người Viking cổ đại.",
						"thai": "ภายในฐานทัพเต็มไปด้วยลวดลายประหลาด ดูเหมือนร่องรอยของชาวไวกิ้งโบราณ",
						"hindi": "बेस का आंतरिक भाग अजीबोगरीब पैटर्न से भरा था। वे प्राचीन वाइकिंग्स के निशान लग रहे थे।"
					},
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "시스템은 이 모든 역사를 기록하고 있습니다. 잊힌 전설까지도요.",
						"english": "The system records all this history. Even forgotten legends.",
						"japanese": "システムはこのすべての歴史を記録しています。忘れ去られた伝説までも。",
						"chinese": "系统记录了所有这些历史。甚至是被遗忘的传说。",
						"french": "Le système enregistre toute cette histoire. Même les légendes oubliées.",
						"spanish": "El sistema registra toda esta historia. Incluso las leyendas olvidadas.",
						"vietnamese": "Hệ thống ghi lại tất cả lịch sử này. Kể cả những truyền thuyết bị lãng quên.",
						"thai": "ระบบบันทึกประวัติศาสตร์ทั้งหมดนี้ แม้กระทั่งตำนานที่ถูกลืม",
						"hindi": "सिस्टम इस सभी इतिहास को रिकॉर्ड करता है। भूले हुए किंवदंतियों को भी।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이런 문양도 다 기록한다고?",
						"english": "It records even these patterns?",
						"japanese": "こんな模様まで記録するのか？",
						"chinese": "连这样的图案都记录？",
						"french": "Ça enregistre même ces motifs ?",
						"spanish": "¿Registra incluso estos patrones?",
						"vietnamese": "Nó ghi lại cả những hoa văn này ư?",
						"thai": "บันทึกลวดลายพวกนี้ด้วยเหรอ?",
						"hindi": "यह इन पैटर्नों को भी रिकॉर्ड करता है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "네. 하지만 그 의미는 현재 '미해독' 상태입니다.",
						"english": "Yes. But their meaning is currently 'undeciphered'.",
						"japanese": "はい。しかし、その意味は現在「未解読」状態です。",
						"chinese": "是的。但它们的含义目前处于“未解密”状态。",
						"french": "Oui. Mais leur signification est actuellement \"indéchiffrée\".",
						"spanish": "Sí. Pero su significado está actualmente \"indescifrado\".",
						"vietnamese": "Vâng. Nhưng ý nghĩa của chúng hiện đang ở trạng thái 'chưa giải mã'.",
						"thai": "ครับ/ค่ะ แต่ความหมายของพวกมันตอนนี้อยู่ในสถานะ 'ยังไม่ถอดรหัส'",
						"hindi": "हाँ। लेकिन उनका अर्थ वर्तमान में 'अनदेखा' है।"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "흐음…",
						"english": "Hmm...",
						"japanese": "ふむ…",
						"chinese": "嗯……",
						"french": "Hmm...",
						"spanish": "Mmm...",
						"vietnamese": "Hừm...",
						"thai": "อืม...",
						"hindi": "हम्म…"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						2
					]
				},
				{
					"emotion": "base",
					"content": {
						"korean": "내 기록… 뭔가 달라진 것 같은데.",
						"english": "My records... Something seems to have changed.",
						"japanese": "私の記録…何かが変わったようだ。",
						"chinese": "我的记录……好像有什么变化。",
						"french": "Mes enregistrements... Quelque chose semble avoir changé.",
						"spanish": "Mis registros... Algo parece haber cambiado.",
						"vietnamese": "Hồ sơ của tôi... Có vẻ như có điều gì đó đã thay đổi.",
						"thai": "บันทึกของฉัน... ดูเหมือนมีบางอย่างเปลี่ยนไป",
						"hindi": "मेरे रिकॉर्ड... कुछ बदल गया लगता है।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "시스템은 항상 최적화된 데이터를 제공합니다. 효율을 위해서요.",
						"english": "The system always provides optimized data. For efficiency.",
						"japanese": "システムは常に最適化されたデータを提供します。効率のために。",
						"chinese": "系统始终提供优化数据。为了效率。",
						"french": "Le système fournit toujours des données optimisées. Pour l'efficacité.",
						"spanish": "El sistema siempre proporciona datos optimizados. Para la eficiencia.",
						"vietnamese": "Hệ thống luôn cung cấp dữ liệu tối ưu. Vì hiệu quả.",
						"thai": "ระบบจะให้ข้อมูลที่ปรับปรุงให้เหมาะสมเสมอ เพื่อประสิทธิภาพ",
						"hindi": "सिस्टम हमेशा अनुकूलित डेटा प्रदान करता है। दक्षता के लिए।"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "수정했다는 거야?",
						"english": "You modified it?",
						"japanese": "修正したと？",
						"chinese": "你修改了？",
						"french": "Vous l'avez modifié ?",
						"spanish": "¿Lo modificaste?",
						"vietnamese": "Anh đã sửa rồi sao?",
						"thai": "คุณแก้ไขแล้วเหรอ?",
						"hindi": "क्या आपने इसे संशोधित किया?"
					},
					"emotion": "angry"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "아니요. 단지, 불필요한 서술이 제거되었을 뿐입니다.",
						"english": "No. Only unnecessary descriptions have been removed.",
						"japanese": "いいえ。不要な記述が削除されただけです。",
						"chinese": "不。只是删除了不必要的描述。",
						"french": "Non. Seules les descriptions superflues ont été supprimées.",
						"spanish": "No. Solo se eliminaron las descripciones innecesarias.",
						"vietnamese": "Không. Chỉ là những mô tả không cần thiết đã bị loại bỏ.",
						"thai": "เปล่าครับ แค่ข้อความบรรยายที่ไม่จำเป็นถูกลบออกไปเท่านั้นเอง",
						"hindi": "नहीं। केवल अनावश्यक विवरण हटाए गए हैं।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "내 감정이… 불필요하다고?",
						"english": "My emotions... are unnecessary?",
						"japanese": "私の感情が…不要だと？",
						"chinese": "我的情感…是不必要的？",
						"french": "Mes émotions… sont inutiles ?",
						"spanish": "¿Mis emociones... son innecesarias?",
						"vietnamese": "Cảm xúc của tôi... là không cần thiết sao?",
						"thai": "ความรู้สึกของฉัน... ไม่จำเป็นอย่างนั้นหรือ?",
						"hindi": "मेरे भाव... अनावश्यक हैं?"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "예측대로군. 너희의 실패는 이미 계산되었다.",
						"english": "As predicted. Your failure was already calculated.",
						"japanese": "予測通りだ。お前たちの失敗は既に計算されていた。",
						"chinese": "正如所料。你们的失败已在计算之中。",
						"french": "Comme prévu. Votre échec était déjà calculé.",
						"spanish": "Como estaba previsto. Su fracaso ya estaba calculado.",
						"vietnamese": "Đúng như dự đoán. Thất bại của các ngươi đã được tính toán từ trước.",
						"thai": "ตามที่คาดไว้ ความล้มเหลวของพวกเจ้าถูกคำนวณไว้แล้ว",
						"hindi": "जैसा कि अनुमान था। तुम्हारी विफलता की गणना पहले ही कर ली गई थी।"
					}
				},
				{
					"content": {
						"korean": "젠장… 여기서 멈출 순 없어!",
						"english": "Damn it... I can't stop here!",
						"japanese": "くそっ…ここで止まるわけにはいかない！",
						"chinese": "该死…不能就此止步！",
						"french": "Mince… Je ne peux pas m'arrêter là !",
						"spanish": "¡Maldita sea... No puedo detenerme aquí!",
						"vietnamese": "Chết tiệt… Không thể dừng lại ở đây được!",
						"thai": "ให้ตายสิ... จะหยุดอยู่แค่นี้ไม่ได้!",
						"hindi": "धिक्कार है… मैं यहाँ नहीं रुक सकता!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "탐사대의 앞을 거대한 그림자가 가로막았다.",
						"english": "A colossal shadow blocked the expedition's path.",
						"japanese": "探査隊の行く手を巨大な影が阻んだ。",
						"chinese": "一个巨大的阴影挡住了探险队的去路。",
						"french": "Une ombre colossale barra la route de l'expédition.",
						"spanish": "Una sombra gigantesca bloqueó el camino de la expedición.",
						"vietnamese": "Một cái bóng khổng lồ đã chắn ngang đường của đoàn thám hiểm.",
						"thai": "เงาขนาดมหึมาขวางทางของทีมสำรวจไว้",
						"hindi": "एक विशाल छाया ने अभियान का रास्ता रोक दिया।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "불필요한 변수들이 여기까지 왔군.",
						"english": "Unnecessary variables have made it this far.",
						"japanese": "不要な変数どもがここまで来たか。",
						"chinese": "不必要的变量竟来到此处。",
						"french": "Des variables inutiles sont arrivées jusqu'ici.",
						"spanish": "Variables innecesarias han llegado hasta aquí.",
						"vietnamese": "Những biến số không cần thiết đã đến được đây.",
						"thai": "ตัวแปรที่ไม่จำเป็นพวกนี้มาได้ถึงนี่เลยหรือ",
						"hindi": "अनावश्यक चर यहाँ तक आ पहुँचे हैं।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "비켜라!",
						"english": "Move aside!",
						"japanese": "退け！",
						"chinese": "让开！",
						"french": "Écartez-vous !",
						"spanish": "¡Apártense!",
						"vietnamese": "Tránh ra!",
						"thai": "หลีกไป!",
						"hindi": "हट जाओ!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "시스템의 효율을 방해하지 마라. 너희의 운명은 이미 예측되었다.",
						"english": "Do not disrupt system efficiency. Your fate has already been predicted.",
						"japanese": "システムの効率を妨害するな。お前たちの運命は既に予測されている。",
						"chinese": "不要妨碍系统的效率。你们的命运早已被预测。",
						"french": "Ne perturbez pas l'efficacité du système. Votre destin a déjà été prédit.",
						"spanish": "No obstaculicen la eficiencia del sistema. Vuestro destino ya ha sido predicho.",
						"vietnamese": "Đừng cản trở hiệu suất của hệ thống. Số phận của các ngươi đã được dự đoán rồi.",
						"thai": "อย่าขัดขวางประสิทธิภาพของระบบ โชคชะตาของพวกเจ้าถูกทำนายไว้แล้ว",
						"hindi": "सिस्टम की दक्षता में बाधा न डालें। आपका भाग्य पहले ही अनुमानित है।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "크… 이것도… 계산… 밖의… 변수인가…",
						"english": "Ugh... This, too... is an... unforeseen... variable...",
						"japanese": "くっ…これも…計算…外の…変数…なのか…",
						"chinese": "呃…这…也是…计算…之外的…变量吗…",
						"french": "Urgh… Cela… aussi… est-ce… une variable… imprévue… ?",
						"spanish": "Ugh… ¿Esto… también… es una… variable… imprevista…?",
						"vietnamese": "Khụ... Cái này... cũng... là biến số... nằm ngoài... tính toán sao...",
						"thai": "อึก... นี่ก็... ตัวแปร... ที่อยู่นอก... การคำนวณ... หรือเนี่ย...",
						"hindi": "उफ़... क्या यह भी... गणना... से बाहर... का चर है..."
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "우리의 감정을 무시한 대가다.",
						"english": "This is the price for ignoring our emotions.",
						"japanese": "我々の感情を無視した代償だ。",
						"chinese": "这是无视我们情感的代价。",
						"french": "C'est le prix à payer pour avoir ignoré nos émotions.",
						"spanish": "Esta es la consecuencia de ignorar nuestras emociones.",
						"vietnamese": "Đây là cái giá phải trả vì đã phớt lờ cảm xúc của chúng ta.",
						"thai": "นี่คือผลกรรมจากการดูถูกความรู้สึกของเรา",
						"hindi": "यह हमारी भावनाओं को नजरअंदाज करने का परिणाम है।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "시스템의 균열이 시작되었다. 다음 층에서는 또 다른 예측이 기다리고 있다.",
						"english": "Cracks in the system have begun. Another prediction awaits on the next floor.",
						"japanese": "システムの亀裂が始まった。次の階では、また別の予測が待っている。",
						"chinese": "系统的裂痕已经开始。在下一层，还有另一个预测在等着。",
						"french": "La fissure du système a commencé. Une autre prédiction vous attend à l'étage suivant.",
						"spanish": "La grieta del sistema ha comenzado. Otra predicción aguarda en el siguiente piso.",
						"vietnamese": "Sự rạn nứt của hệ thống đã bắt đầu. Ở tầng tiếp theo, một dự đoán khác đang chờ đợi.",
						"thai": "รอยร้าวของระบบได้เริ่มต้นขึ้นแล้ว ที่ชั้นถัดไปมีการคาดการณ์อื่นรออยู่",
						"hindi": "सिस्टम में दरारें पड़नी शुरू हो गई हैं। अगली मंजिल पर एक और भविष्यवाणी इंतजार कर रही है।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"설원 깊숙한 곳, 흰 지옥 한가운데 거대한 철골이 솟았다.",
			"탐사 기지. 인류 최후의 보루이자, 가장 완벽한 감옥.",
			"도착을 환영한다. 차갑고, 계산적인 방식으로.",
			"그리고 시스템은 이미 모든 것을 예측하고 있었다."
		],
		"english": [
			"Deep within the snowy plains, a colossal steel structure rose in the heart of a white hell.",
			"The expedition base. Humanity's last bastion, and its most perfect prison.",
			"Welcome. In a cold, calculating manner.",
			"And the system had already predicted everything."
		],
		"japanese": [
			"雪原の奥深く、白い地獄の真ん中に巨大な鉄骨がそびえ立っていた。",
			"探査基地。人類最後の砦にして、最も完璧な監獄。",
			"到着を歓迎する。冷たく、計算されたやり方で。",
			"そしてシステムは、すでにすべてを予測していた。"
		],
		"chinese": [
			"在雪原深处，白色地狱的中央，巨大的钢架拔地而起。",
			"探测基地。人类最后的堡垒，也是最完美的监狱。",
			"欢迎到来。以一种冰冷、算计的方式。",
			"而系统早已预测到了一切。"
		],
		"french": [
			"Au plus profond de la plaine enneigée, une colossale structure d'acier s'élevait au cœur d'un enfer blanc.",
			"La base d'expédition. Le dernier bastion de l'humanité, et sa prison la plus parfaite.",
			"Bienvenue. D'une manière froide et calculatrice.",
			"Et le système avait déjà tout prédit."
		],
		"spanish": [
			"En lo profundo de la llanura nevada, una colosal estructura de acero se alzaba en el corazón de un infierno blanco.",
			"La base de expedición. El último bastión de la humanidad, y su prisión más perfecta.",
			"Bienvenido. De una manera fría y calculadora.",
			"Y el sistema ya había predicho todo."
		],
		"vietnamese": [
			"Sâu thẳm trong đồng tuyết, một kết cấu thép khổng lồ mọc lên giữa lòng địa ngục trắng.",
			"Căn cứ thám hiểm. Pháo đài cuối cùng của nhân loại, và nhà tù hoàn hảo nhất của nó.",
			"Chào mừng đến. Một cách lạnh lùng, đầy toan tính.",
			"Và hệ thống đã dự đoán mọi thứ."
		],
		"thai": [
			"ลึกเข้าไปในทุ่งหิมะ โครงสร้างเหล็กมหึมาตระหง่านอยู่ใจกลางนรกสีขาว",
			"ฐานสำรวจ ป้อมปราการสุดท้ายของมนุษยชาติ และคุกที่สมบูรณ์แบบที่สุด",
			"ยินดีต้อนรับ ด้วยวิธีการที่เย็นชาและคำนวณ",
			"และระบบได้คาดการณ์ทุกสิ่งไว้แล้ว"
		],
		"hindi": [
			"बर्फ़ीले मैदानों के भीतर गहराई में, एक सफेद नर्क के मध्य में एक विशाल इस्पात संरचना खड़ी थी।",
			"अन्वेषण आधार। मानवता का अंतिम गढ़, और उसका सबसे उत्तम कारागार।",
			"स्वागत है। एक ठंडे, गणनात्मक तरीके से।",
			"और सिस्टम ने पहले ही सब कुछ अनुमान लगा लिया था।"
		]
	}
} as const;
