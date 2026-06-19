export const scenario_modern_rohan_3_02 = {
	"scenario_id": "modern_rohan_3_02",
	"order": 2,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"lin": {
			"id": "mon_d036a884-3dde-472c-9fe7-c4807643860f",
			"name": {
				"korean": "린",
				"english": "Lin",
				"japanese": "リン",
				"chinese": "琳",
				"french": "Lin",
				"spanish": "Lin",
				"vietnamese": "Lin",
				"thai": "ลิน",
				"hindi": "लिन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a095dd66-1857-4f44-68b0-2ece83006d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/05b02694-f1ed-4e4c-b7ca-fb5b74a48900/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"최첨단 도시, 데이터가 모든 것을 지배한다.",
			"로한의 완벽한 시스템. 그 안에 숨겨진 작은 불일치.",
			"린은 진실의 조각을 쥐었지만, 아직 깨닫지 못했다.",
			"의심의 씨앗은 그렇게 심어졌다."
		],
		"english": [
			"A city of the future, where data rules all.",
			"Rohan's flawless system. A small inconsistency hidden within.",
			"Lynn held a piece of the truth, yet didn't realize it.",
			"Thus, the seed of doubt was sown."
		],
		"japanese": [
			"最先端都市、データが全てを支配する。",
			"ロハンという完璧なシステム。その中に隠された小さな不一致。",
			"リンは真実の欠片を掴んだが、まだ気づいていなかった。",
			"疑念の種はそうして蒔かれた。"
		],
		"chinese": [
			"尖端都市，数据掌控一切。",
			"罗汉的完美系统。隐藏其中的细微不符。",
			"琳握住了真相的碎片，却未曾察觉。",
			"怀疑的种子就这样埋下。"
		],
		"french": [
			"Une ville de pointe, où les données règnent en maître.",
			"Le système parfait de Rohan. Une petite divergence cachée à l'intérieur.",
			"Lynn tenait un morceau de la vérité, mais ne l'avait pas encore réalisé.",
			"Ainsi, la graine du doute fut semée."
		],
		"spanish": [
			"Una ciudad de vanguardia, donde los datos lo dominan todo.",
			"El sistema perfecto de Rohan. Una pequeña inconsistencia oculta.",
			"Lynn tenía un pedazo de la verdad, pero aún no lo sabía.",
			"Así fue sembrada la semilla de la duda."
		],
		"vietnamese": [
			"Thành phố tối tân, nơi dữ liệu thống trị vạn vật.",
			"Hệ thống hoàn hảo của Rohan. Một sự không nhất quán nhỏ ẩn giấu bên trong.",
			"Lynn nắm giữ một mảnh sự thật, nhưng chưa nhận ra.",
			"Hạt giống của sự nghi ngờ đã được gieo như vậy."
		],
		"thai": [
			"เมืองล้ำยุค ที่ข้อมูลควบคุมทุกสิ่ง",
			"ระบบที่ไร้ที่ติของโรฮัน ความไม่สอดคล้องเล็กน้อยที่ซ่อนอยู่ภายใน",
			"ลินน์กำชิ้นส่วนแห่งความจริงไว้ แต่ยังไม่รู้ตัว",
			"เมล็ดพันธุ์แห่งความสงสัยได้ถูกหว่านลงแล้ว"
		],
		"hindi": [
			"एक अत्याधुनिक शहर, जहाँ डेटा सब कुछ नियंत्रित करता है।",
			"रोहन की त्रुटिहीन प्रणाली। उसके भीतर छिपा एक छोटा-सा असंगति।",
			"लिन ने सच का एक टुकड़ा पकड़ा था, फिर भी उसे एहसास नहीं हुआ।",
			"इस प्रकार, संदेह का बीज बोया गया।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "로한의 회사. 완벽한 데이터의 흐름 속.",
						"english": "Rohan's company. Amidst a perfect data flow.",
						"japanese": "ロハンの会社。完璧なデータの流れの中で。",
						"chinese": "罗汉的公司。在完美的数据流中。",
						"french": "La compagnie de Rohan. Au cœur d'un flux de données parfait.",
						"spanish": "La compañía de Rohan. En medio de un flujo de datos perfecto.",
						"vietnamese": "Công ty của Rohan. Giữa dòng dữ liệu hoàn hảo.",
						"thai": "บริษัทของโรฮัน ท่ามกลางกระแสข้อมูลที่สมบูรณ์แบบ",
						"hindi": "रोहन की कंपनी। एक पूर्ण डेटा प्रवाह के बीच।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						5,
						2
					],
					"speaker": "lin"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이런… 작은 불일치인가?",
						"english": "Oh... A small inconsistency?",
						"japanese": "これは…小さな不一致か？",
						"chinese": "哦... 一个小小的异常？",
						"french": "Oh... Une petite divergence ?",
						"spanish": "Vaya... ¿Una pequeña inconsistencia?",
						"vietnamese": "Ôi... Một sự không nhất quán nhỏ sao?",
						"thai": "โอ้... ความไม่สอดคล้องเล็กน้อยงั้นหรือ?",
						"hindi": "ओह... एक छोटी-सी असंगति?"
					},
					"emotion": "base",
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "무슨 일이야?",
						"english": "What's going on?",
						"japanese": "どうしたの？",
						"chinese": "怎么回事？",
						"french": "Que se passe-t-il ?",
						"spanish": "¿Qué pasa?",
						"vietnamese": "Chuyện gì vậy?",
						"thai": "เกิดอะไรขึ้น?",
						"hindi": "क्या चल रहा है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "사소한 데이터 오류예요. 로한님께 보고해야겠네요.",
						"english": "It's a minor data error. I'll have to report it to Sir Rohan.",
						"japanese": "些細なデータエラーです。ロハン様に報告しないと。",
						"chinese": "只是个小数据错误。我得向罗汉大人报告。",
						"french": "C'est une erreur de données mineure. Je dois la signaler à Maître Rohan.",
						"spanish": "Es un error de datos menor. Tendré que informarle a Sir Rohan.",
						"vietnamese": "Đó là một lỗi dữ liệu nhỏ. Tôi sẽ phải báo cáo cho Rohan.",
						"thai": "เป็นข้อผิดพลาดของข้อมูลเล็กน้อย ฉันต้องรายงานให้ท่านโรฮันทราบ",
						"hindi": "यह एक छोटी-सी डेटा त्रुटि है। मुझे इसे सर रोहन को रिपोर्ट करना होगा।"
					},
					"emotion": "base",
					"speaker": "lin"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"speaker": "lin",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "린은 로한에게 데이터 불일치를 보고했다.",
						"english": "Lynn reported the data inconsistency to Rohan.",
						"japanese": "リンはロハンにデータ不一致を報告した。",
						"chinese": "琳向罗汉报告了数据不符。",
						"french": "Lynn a signalé l'incohérence des données à Rohan.",
						"spanish": "Lynn informó a Rohan sobre la inconsistencia de los datos.",
						"vietnamese": "Lynn đã báo cáo sự không nhất quán dữ liệu cho Rohan.",
						"thai": "ลินน์รายงานความไม่สอดคล้องของข้อมูลให้โรฮันทราบ",
						"hindi": "लिन ने रोहन को डेटा असंगति की सूचना दी।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "로한님. 이 부분 데이터가 조금 이상합니다.",
						"english": "Sir Rohan. The data here seems a bit off.",
						"japanese": "ロハン様。この部分のデータが少しおかしいです。",
						"chinese": "罗汉大人。这部分数据有点奇怪。",
						"french": "Maître Rohan. Les données ici semblent un peu étranges.",
						"spanish": "Sir Rohan. Los datos aquí parecen un poco extraños.",
						"vietnamese": "Rohan. Dữ liệu phần này có vẻ hơi lạ.",
						"thai": "ท่านโรฮัน ข้อมูลส่วนนี้ดูเหมือนจะผิดปกติเล็กน้อย",
						"hindi": "सर रोहन। यहाँ का डेटा थोड़ा अजीब लग रहा है।"
					},
					"emotion": "base",
					"speaker": "lin",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "그 정도는 흔한 오류야, 린. 문제없어.",
						"english": "That's a common error, Lynn. No problem.",
						"japanese": "それくらいよくあるエラーだよ、リン。問題ない。",
						"chinese": "那只是一般的错误，琳。没问题。",
						"french": "C'est une erreur courante, Lynn. Pas de problème.",
						"spanish": "Ese es un error común, Lynn. No hay problema.",
						"vietnamese": "Đó là một lỗi phổ biến thôi, Lynn. Không sao đâu.",
						"thai": "นั่นเป็นข้อผิดพลาดทั่วไปนะ ลิน ไม่มีปัญหาหรอก",
						"hindi": "यह एक आम त्रुटि है, लिन। कोई बात नहीं。"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "너무 쉽게 넘기는 거 아니야?",
						"english": "Aren't you dismissing it too easily?",
						"japanese": "安易に流しすぎじゃない？",
						"chinese": "你是不是太轻易放过了？",
						"french": "Tu ne prends pas ça un peu trop à la légère ?",
						"spanish": "¿No lo estás dejando pasar demasiado fácilmente?",
						"vietnamese": "Anh không nghĩ là anh đang bỏ qua nó quá dễ dàng sao?",
						"thai": "คุณปล่อยผ่านมันง่ายเกินไปหรือเปล่า?",
						"hindi": "क्या तुम इसे बहुत आसानी से जाने नहीं दे रहे हो?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "lin",
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "린, 정말 로한 말대로 아무것도 아닌 거야?",
						"english": "Lynn, is it really nothing, just like Rohan said?",
						"japanese": "リン、本当にロハンさんの言う通り、何でもないの？",
						"chinese": "琳，真的像罗汉说的那样，没什么吗？",
						"french": "Lynn, est-ce vraiment rien, comme l'a dit Rohan ?",
						"spanish": "Lynn, ¿de verdad no es nada, tal como dijo Rohan?",
						"vietnamese": "Lynn, nó thực sự không có gì sao, như Rohan đã nói?",
						"thai": "ลิน, มันไม่มีอะไรจริงๆ อย่างที่โรฮันบอกใช่ไหม?",
						"hindi": "लिन, क्या यह वास्तव में कुछ भी नहीं है, जैसा कि रोहन ने कहा था?"
					},
					"emotion": "base",
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"content": {
						"korean": "네… 그럴 거예요. 로한님은 모든 데이터를 알고 계세요.",
						"english": "Yes... I suppose so. Lord Rohan knows all the data.",
						"japanese": "はい…そうだと思います。ロハン様は全てのデータをご存知ですから。",
						"chinese": "是的…我想是这样。罗汉大人知道所有数据。",
						"french": "Oui... je suppose. Seigneur Rohan connaît toutes les données.",
						"spanish": "Sí... supongo. Lord Rohan conoce todos los datos.",
						"vietnamese": "Vâng… tôi nghĩ vậy. Lãnh chúa Rohan biết tất cả dữ liệu.",
						"thai": "ค่ะ... ฉันคิดว่าอย่างนั้น ท่านโรฮันรู้ข้อมูลทั้งหมด",
						"hindi": "हाँ... मुझे लगता है। भगवान रोहन सभी डेटा जानते हैं।"
					},
					"speaker": "lin",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "완벽함 뒤에 뭔가 숨기고 있는 것 같아.",
						"english": "It feels like something is hidden behind its perfection.",
						"japanese": "完璧さの裏に何かを隠しているようだ。",
						"chinese": "感觉在完美背后隐藏着什么。",
						"french": "On dirait que quelque chose se cache derrière sa perfection.",
						"spanish": "Parece que hay algo escondido detrás de su perfección.",
						"vietnamese": "Cảm giác như có điều gì đó đang ẩn giấu sau sự hoàn hảo của nó.",
						"thai": "รู้สึกเหมือนมีบางอย่างซ่อนอยู่เบื้องหลังความสมบูรณ์แบบนั้น",
						"hindi": "लगता है इसकी पूर्णता के पीछे कुछ छिपा है।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "작은 데이터 패킷. 그 안에서 이상 징후가 감지되고 있었다.",
						"english": "A small data packet. An anomaly was being detected within it.",
						"japanese": "小さなデータパケット。その内部で異常な兆候が検出されていた。",
						"chinese": "一个小的数据包。其中检测到异常迹象。",
						"french": "Un petit paquet de données. Une anomalie était détectée à l'intérieur.",
						"spanish": "Un pequeño paquete de datos. Se estaba detectando una anomalía en su interior.",
						"vietnamese": "Một gói dữ liệu nhỏ. Một dấu hiệu bất thường đã được phát hiện bên trong nó.",
						"thai": "แพ็กเก็ตข้อมูลขนาดเล็ก ตรวจพบความผิดปกติภายในนั้น",
						"hindi": "एक छोटा डेटा पैकेट। उसके भीतर एक असामान्य संकेत का पता चल रहा था।"
					},
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"speaker": "lin",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "character_2",
					"emotion": "base",
					"content": {
						"korean": "린, 계속 그 데이터가 마음에 걸리는 것 같던데.",
						"english": "Lynn, that data still seems to be bothering you.",
						"japanese": "リン、ずっとそのデータが気になっているようだけど。",
						"chinese": "琳，你似乎一直在为那个数据心烦。",
						"french": "Lynn, ces données semblent toujours te préoccuper.",
						"spanish": "Lynn, parece que esos datos todavía te preocupan.",
						"vietnamese": "Lynn, dường như dữ liệu đó vẫn làm bạn bận tâm.",
						"thai": "ลิน, ข้อมูลนั้นยังคงติดค้างอยู่ในใจคุณใช่ไหม",
						"hindi": "लिन, वह डेटा तुम्हें अभी भी परेशान कर रहा है, ऐसा लगता है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "base",
					"content": {
						"korean": "…아니에요.",
						"english": "...No, it's not.",
						"japanese": "…いいえ。",
						"chinese": "…不，不是的。",
						"french": "...Non.",
						"spanish": "...No.",
						"vietnamese": "...Không phải vậy.",
						"thai": "...ไม่ค่ะ",
						"hindi": "...नहीं।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "진실은 언젠가 드러나게 돼 있어.",
						"english": "The truth will eventually come out.",
						"japanese": "真実はいつか明らかになるものだ。",
						"chinese": "真相总有一天会大白。",
						"french": "La vérité finira par éclater.",
						"spanish": "La verdad saldrá a la luz tarde o temprano.",
						"vietnamese": "Sự thật rồi sẽ được phơi bày.",
						"thai": "ความจริงจะถูกเปิดเผยในที่สุด",
						"hindi": "सच कभी न कभी सामने आ ही जाता है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "lin",
					"content": {
						"korean": "….",
						"english": "...",
						"japanese": "…",
						"chinese": "...",
						"french": "...",
						"spanish": "...",
						"vietnamese": "...",
						"thai": "...",
						"hindi": "..."
					},
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "lin",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "조심하세요! 데이터에… 강한 에너지가 감지됩니다!",
						"english": "Caution! Strong energy detected in the data!",
						"japanese": "注意してください！データに… 強力なエネルギーが感知されます！",
						"chinese": "小心！数据中…检测到强能量！",
						"french": "Attention ! Une forte énergie est détectée dans les données !",
						"spanish": "¡Cuidado! ¡Se detecta una energía poderosa en los datos!",
						"vietnamese": "Cẩn thận! Phát hiện năng lượng mạnh trong dữ liệu!",
						"thai": "ระวัง! ตรวจพบพลังงานรุนแรงในข้อมูล!",
						"hindi": "सावधान! डेटा में… तीव्र ऊर्जा का पता चला है!"
					},
					"emotion": "sad",
					"speaker": "lin",
					"type": "speech"
				},
				{
					"content": {
						"korean": "거대한 그림자가 그들 앞에 모습을 드러냈다.",
						"english": "A colossal shadow emerged before them.",
						"japanese": "巨大な影が彼らの前に姿を現した。",
						"chinese": "一个巨大的身影出现在他们面前。",
						"french": "Une ombre colossale apparut devant eux.",
						"spanish": "Una sombra colosal apareció ante ellos.",
						"vietnamese": "Một bóng đen khổng lồ hiện ra trước mặt họ.",
						"thai": "เงาขนาดมหึมาปรากฏขึ้นเบื้องหน้าพวกเขา",
						"hindi": "एक विशाल छाया उनके सामने प्रकट हुई।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이게 로한이 말한 '오류'의 결과인가?",
						"english": "Is this the result of the 'error' Rohan spoke of?",
						"japanese": "これがロハンが言っていた「エラー」の結果なのか？",
						"chinese": "这就是罗汉所说的“错误”的结果吗？",
						"french": "Est-ce le résultat de l'« erreur » dont Rohan a parlé ?",
						"spanish": "¿Esto es el resultado del 'error' del que habló Rohan?",
						"vietnamese": "Đây có phải là kết quả của 'lỗi' mà Rohan đã nói không?",
						"thai": "นี่คือผลลัพธ์ของ 'ข้อผิดพลาด' ที่โรฮันพูดถึงงั้นหรือ?",
						"hindi": "क्या यह 'त्रुटि' का परिणाम है जिसके बारे में रोहन ने बात की थी?"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "나약한 자들이여. 진실은 데이터에 없다.",
						"english": "Weaklings. The truth is not in data.",
						"japanese": "弱き者たちよ。真実はデータにはない。",
						"chinese": "弱者。真相不在数据中。",
						"french": "Faibles. La vérité n'est pas dans les données.",
						"spanish": "Débiles. La verdad no está en los datos.",
						"vietnamese": "Kẻ yếu. Sự thật không nằm trong dữ liệu.",
						"thai": "พวกอ่อนแอ ความจริงไม่ได้อยู่ในข้อมูล",
						"hindi": "कमजोरों। सच्चाई डेटा में नहीं है।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "오직 힘만이 현실을 만든다.",
						"english": "Only power creates reality.",
						"japanese": "力だけが現実を創る。",
						"chinese": "唯有力量才能创造现实。",
						"french": "Seule la puissance crée la réalité.",
						"spanish": "Solo el poder crea la realidad.",
						"vietnamese": "Chỉ có sức mạnh mới tạo ra hiện thực.",
						"thai": "มีเพียงพลังเท่านั้นที่สร้างความจริง",
						"hindi": "केवल शक्ति ही वास्तविकता बनाती है।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "크아아악… 기억해라. {random_boss}는… 시작에 불과하다.",
						"english": "Kuaaak… Remember. {random_boss} is… just the beginning.",
						"japanese": "くあああ… 覚えておけ。{random_boss}は… 始まりに過ぎない。",
						"chinese": "呃啊啊啊… 记住。{random_boss}… 仅仅只是开始。",
						"french": "Graaah… Souviens-toi. {random_boss} n'est… que le début.",
						"spanish": "Kuaaak… Recuerda. {random_boss} es… solo el principio.",
						"vietnamese": "Kuaaak… Hãy nhớ. {random_boss}… chỉ là khởi đầu.",
						"thai": "คราก… จำไว้ {random_boss} เป็น… เพียงแค่จุดเริ่มต้นเท่านั้น",
						"hindi": "क्वाआक… याद रखना। {random_boss} तो… बस शुरुआत है।"
					},
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "시작에 불과해? 대체 무슨 소리야?",
						"english": "Just the beginning? What does that even mean?",
						"japanese": "始まりに過ぎない？一体どういうことだ？",
						"chinese": "仅仅只是开始？到底是什么意思？",
						"french": "Juste le début ? Qu'est-ce que ça veut dire ?",
						"spanish": "¿Solo el principio? ¿Qué demonios significa eso?",
						"vietnamese": "Chỉ là khởi đầu? Rốt cuộc là ý gì?",
						"thai": "แค่จุดเริ่มต้น? หมายความว่าไงกันแน่?",
						"hindi": "बस शुरुआत? इसका क्या मतलब है?"
					}
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"speaker": "lin",
					"type": "direction"
				},
				{
					"content": {
						"korean": "방금… 데이터 패턴이 급변했어요. 로한님의 서버와… 연결되어 있어요.",
						"english": "Just now… the data pattern rapidly changed. It's connected to Rohan's server…",
						"japanese": "たった今… データパターンが急変しました。ロハン様のサーバーと… 繋がっています。",
						"chinese": "刚才… 数据模式急剧变化。与罗汉的服务器… 连接着。",
						"french": "À l'instant… le modèle de données a rapidement changé. C'est connecté au serveur de Rohan…",
						"spanish": "Justo ahora… el patrón de datos cambió rápidamente. Está conectado al servidor de Rohan…",
						"vietnamese": "Vừa nãy… mẫu dữ liệu thay đổi đột ngột. Nó được kết nối với máy chủ của Rohan…",
						"thai": "เมื่อกี้… รูปแบบข้อมูลเปลี่ยนไปอย่างรวดเร็ว มันเชื่อมต่อกับเซิร์ฟเวอร์ของโรฮัน…",
						"hindi": "अभी… डेटा पैटर्न तेजी से बदल गया। यह रोहन के सर्वर से… जुड़ा हुआ है।"
					},
					"emotion": "sad",
					"speaker": "lin",
					"type": "speech"
				},
				{
					"content": {
						"korean": "로한… 너였구나.",
						"english": "Rohan… It was you.",
						"japanese": "ロハン… お前だったのか。",
						"chinese": "罗汉… 原来是你。",
						"french": "Rohan… C'était toi.",
						"spanish": "Rohan… Fuiste tú.",
						"vietnamese": "Rohan… là ngươi sao.",
						"thai": "โรฮัน… เป็นนายเองสินะ",
						"hindi": "रोहन… तुम थे।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "사소한 불일치. 이제는 거대한 의심으로 변모했다.",
						"english": "A minor discrepancy. Now it has transformed into a colossal doubt.",
						"japanese": "些細な不一致。今や巨大な疑念へと変貌した。",
						"chinese": "一个小小的差异。现在已经变成了巨大的怀疑。",
						"french": "Une légère divergence. Elle s'est maintenant transformée en un doute colossal.",
						"spanish": "Una discrepancia menor. Ahora se ha transformado en una duda colosal.",
						"vietnamese": "Một sự không nhất quán nhỏ. Giờ đã biến thành một nghi ngờ khổng lồ.",
						"thai": "ความคลาดเคลื่อนเล็กน้อย ตอนนี้ได้กลายเป็นความสงสัยอันยิ่งใหญ่แล้ว",
						"hindi": "एक छोटी सी विसंगति। अब यह एक विशाल संदेह में बदल गई है।"
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "데이터의 노예들이여. 진실을 보지 못하는군.",
						"english": "Slaves of data. You fail to see the truth.",
						"japanese": "データの奴隷たちよ。真実が見えていないようだな。",
						"chinese": "数据的奴隶们。你们看不到真相。",
						"french": "Esclaves des données. Vous ne voyez pas la vérité.",
						"spanish": "Esclavos de los datos. No podéis ver la verdad.",
						"vietnamese": "Nô lệ của dữ liệu. Các ngươi không thấy được sự thật.",
						"thai": "เหล่าทาสแห่งข้อมูล เจ้ามองไม่เห็นความจริง",
						"hindi": "डेटा के गुलामों। तुम सच नहीं देख पाते।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…젠장. 아직 끝나지 않았어!",
						"english": "...Damn it. It's not over yet!",
						"japanese": "…ちくしょう。まだ終わってないぞ！",
						"chinese": "……该死。还没完呢！",
						"french": "...Bon sang. Ce n'est pas encore fini !",
						"spanish": "...Maldita sea. ¡Todavía no ha terminado!",
						"vietnamese": "...Khốn kiếp. Vẫn chưa kết thúc đâu!",
						"thai": "...ให้ตายสิ. มันยังไม่จบ!",
						"hindi": "...धिक्कार है। अभी खत्म नहीं हुआ है!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"spot": [
						2,
						2
					],
					"speaker": "lin",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "후퇴해야 합니다! 이 데이터는… 너무 강력해요.",
						"english": "We must retreat! This data is... too powerful.",
						"japanese": "後退せねばなりません！このデータは… 強すぎます。",
						"chinese": "我们必须撤退！这份数据……太强大了。",
						"french": "Nous devons battre en retraite ! Ces données sont… trop puissantes.",
						"spanish": "¡Debemos retirarnos! Estos datos son... demasiado poderosos.",
						"vietnamese": "Chúng ta phải rút lui! Dữ liệu này... quá mạnh.",
						"thai": "เราต้องล่าถอย! ข้อมูลนี้... ทรงพลังเกินไป",
						"hindi": "हमें पीछे हटना होगा! यह डेटा... बहुत शक्तिशाली है।"
					},
					"emotion": "sad",
					"speaker": "lin",
					"type": "speech"
				}
			],
			"id": 15
		}
	]
} as const;
