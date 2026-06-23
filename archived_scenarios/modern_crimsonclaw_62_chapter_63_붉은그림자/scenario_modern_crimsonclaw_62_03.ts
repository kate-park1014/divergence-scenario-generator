export const scenario_modern_crimsonclaw_62_03 = {
	"scenario_id": "modern_crimsonclaw_62_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"dax": {
			"id": "mon_08d5b43e-f9ab-4469-9064-855e170b0cdc",
			"name": {
				"korean": "닥스",
				"english": "Dax",
				"japanese": "ダックス",
				"chinese": "达克斯",
				"french": "Dax",
				"spanish": "Dax",
				"vietnamese": "Dax",
				"thai": "แด็กซ์",
				"hindi": "डैक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/84bb11db-6eb4-4500-d274-222e8b100100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5d325a75-bd91-4758-7b3f-ad9a97e52700/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"카이의 증언은 충격적이었다.",
			"피로 얼룩진 과거. 이제는 데이터만이 답을 줄 수 있었다.",
			"은둔한 분석가 닥스. 그가 추적해온 이상 징후는 무엇일까.",
			"도시가 숨긴 비극이 서서히 드러나기 시작한다."
		],
		"english": [
			"Kai's testimony was shocking.",
			"A past stained with blood. Only data could provide answers now.",
			"Dax, the reclusive analyst. What anomalies has he been tracking?",
			"The tragedy hidden by the city slowly begins to reveal itself."
		],
		"japanese": [
			"カイの証言は衝撃的だった。",
			"血塗られた過去。今やデータだけが答えを与えられた。",
			"隠遁した分析官ダックス。彼が追跡してきた異常な兆候とは何だろうか。",
			"都市が隠した悲劇が徐々に姿を現し始める。"
		],
		"chinese": [
			"凯的证词令人震惊。",
			"血腥的过去。现在只有数据才能给出答案。",
			"隐居的分析师达克斯。他一直在追踪的异常迹象是什么？",
			"这座城市隐藏的悲剧正逐渐显露。"
		],
		"french": [
			"Le témoignage de Kai était choquant.",
			"Un passé teinté de sang. Seules les données pouvaient apporter des réponses maintenant.",
			"Dax, l'analyste reclus. Quelles anomalies a-t-il traquées ?",
			"La tragédie cachée par la ville commence lentement à se révéler."
		],
		"spanish": [
			"El testimonio de Kai fue impactante.",
			"Un pasado manchado de sangre. Ahora solo los datos podían dar respuestas.",
			"Dax, el analista solitario. ¿Qué anomalías ha estado rastreando?",
			"La tragedia que la ciudad ocultaba comienza a revelarse lentamente."
		],
		"vietnamese": [
			"Lời khai của Kai thật chấn động.",
			"Một quá khứ nhuốm máu. Giờ đây, chỉ dữ liệu mới có thể đưa ra câu trả lời.",
			"Dax, nhà phân tích ẩn dật. Những dấu hiệu bất thường nào anh ta đã theo dõi?",
			"Bi kịch mà thành phố che giấu dần dần hé lộ."
		],
		"thai": [
			"คำให้การของไคเป็นเรื่องน่าตกใจ",
			"อดีตที่เปื้อนเลือด. ตอนนี้มีเพียงข้อมูลเท่านั้นที่ให้คำตอบได้.",
			"แดกซ์ นักวิเคราะห์ผู้สันโดษ. เขาติดตามความผิดปกติอะไรมาตลอด?",
			"โศกนาฏกรรมที่เมืองซ่อนไว้เริ่มเผยตัวออกมาอย่างช้าๆ."
		],
		"hindi": [
			"काई की गवाही चौंकाने वाली थी।",
			"खून से सना अतीत। अब केवल डेटा ही जवाब दे सकता था।",
			"एकांतवादी विश्लेषक डैक्स। वह किन असामान्य संकेतों पर नज़र रख रहा था?",
			"शहर द्वारा छिपाई गई त्रासदी धीरे-धीरे सामने आने लगती है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "도시의 지하. 낡은 서버실에 어둠이 깔려 있었다.",
						"english": "Beneath the city. Darkness enveloped the old server room.",
						"japanese": "都市の地下。古いサーバー室には闇が広がっていた。",
						"chinese": "城市的地下。旧服务器室里一片漆黑。",
						"french": "Sous la ville. L'obscurité enveloppait l'ancienne salle des serveurs.",
						"spanish": "Bajo la ciudad. La oscuridad cubría la vieja sala de servidores.",
						"vietnamese": "Dưới lòng thành phố. Bóng tối bao trùm căn phòng máy chủ cũ kỹ.",
						"thai": "ใต้เมือง. ความมืดปกคลุมห้องเซิร์ฟเวอร์เก่า.",
						"hindi": "शहर के नीचे। पुराने सर्वर रूम में अंधेरा छाया हुआ था।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "카이의 증언… 이 도시의 피 묻은 과거를 믿을 수 없어.",
						"english": "Kai's testimony... I can't believe this city's blood-stained past.",
						"japanese": "カイの証言…この都市の血塗られた過去なんて信じられない。",
						"chinese": "凯的证词……我无法相信这座城市血腥的过去。",
						"french": "Le témoignage de Kai... Je n'arrive pas à croire au passé sanglant de cette ville.",
						"spanish": "El testimonio de Kai... No puedo creer el pasado sangriento de esta ciudad.",
						"vietnamese": "Lời khai của Kai... Tôi không thể tin vào quá khứ nhuốm máu của thành phố này.",
						"thai": "คำให้การของไค... ฉันไม่เชื่อเรื่องอดีตที่เปื้อนเลือดของเมืองนี้.",
						"hindi": "काई की गवाही... मैं इस शहर के खून से सने अतीत पर विश्वास नहीं कर सकता।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "닥스라면 뭔가 알 거야. 데이터가 진실을 말해줄 거야.",
						"english": "Dax would know something. Data will tell the truth.",
						"japanese": "ダックスなら何か知ってるはずだ。データが真実を語ってくれる。",
						"chinese": "达克斯肯定知道些什么。数据会揭示真相。",
						"french": "Dax saurait quelque chose. Les données diront la vérité.",
						"spanish": "Dax sabría algo. Los datos dirán la verdad.",
						"vietnamese": "Dax chắc chắn biết gì đó. Dữ liệu sẽ nói lên sự thật.",
						"thai": "แดกซ์น่าจะรู้อะไรบางอย่าง. ข้อมูลจะบอกความจริง.",
						"hindi": "डैक्स को कुछ पता होगा। डेटा सच बताएगा।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "dax",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						5,
						2
					]
				},
				{
					"speaker": "dax",
					"type": "speech",
					"content": {
						"korean": "왔군. 예상대로 이쪽으로 올 줄 알았어.",
						"english": "You're here. I knew you'd come this way, as expected.",
						"japanese": "来たか。やはりこちらへ来るとは思っていたよ。",
						"chinese": "你来了。我料到你会来这边。",
						"french": "Vous êtes là. Je savais que vous viendriez par ici, comme prévu.",
						"spanish": "Estás aquí. Sabía que vendrías por aquí, como esperaba.",
						"vietnamese": "Ngươi đến rồi. Đúng như dự đoán, ta biết ngươi sẽ đến đây.",
						"thai": "มาแล้วสินะ. ฉันรู้ว่านายจะต้องมาทางนี้จริงๆ ด้วย.",
						"hindi": "तुम आ गए। मुझे पता था कि तुम इधर ही आओगे, जैसा कि अपेक्षित था।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "닥스! 카이의 말대로 이 도시의 에너지 패턴에 이상이 있어?",
						"english": "Dax! Is there an anomaly in this city's energy pattern, just as Kai said?",
						"japanese": "ダックス！カイの言う通り、この都市のエネルギーパターンに異常があるのか？",
						"chinese": "达克斯！正如凯所说，这座城市的能量模式有异常吗？",
						"french": "Dax ! Y a-t-il une anomalie dans le modèle énergétique de cette ville, comme l'a dit Kai ?",
						"spanish": "¡Dax! ¿Hay una anomalía en el patrón energético de esta ciudad, como dijo Kai?",
						"vietnamese": "Dax! Có phải mẫu hình năng lượng của thành phố này có bất thường, đúng như lời Kai nói không?",
						"thai": "แดกซ์! ตามที่ไคบอก รูปแบบพลังงานของเมืองนี้มีอะไรผิดปกติหรือเปล่า?",
						"hindi": "डैक्स! क्या इस शहर के ऊर्जा पैटर्न में कोई असामान्यता है, जैसा कि काई ने कहा था?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "정확해. '미술 설치물' 쪽에서 기이한 에너지 파형이 잡혀.",
						"english": "Exactly. Strange energy waveforms are being detected from the 'Art Installation'.",
						"japanese": "その通りだ。「美術設置物」の方から奇妙なエネルギー波形が検出されている。",
						"chinese": "没错。‘艺术装置’那边检测到了奇怪的能量波形。",
						"french": "Exactement. Des formes d'ondes énergétiques étranges sont détectées du côté de l'« Installation Artistique ».",
						"spanish": "Exacto. Se están detectando extrañas formas de onda de energía desde la \"Instalación de Arte\".",
						"vietnamese": "Chính xác. Sóng năng lượng kỳ lạ đang được phát hiện từ phía 'Công trình nghệ thuật'.",
						"thai": "ถูกต้อง. ตรวจพบคลื่นพลังงานแปลกๆ จากฝั่ง 'งานศิลปะจัดวาง'.",
						"hindi": "बिल्कुल। 'कला प्रतिष्ठान' की तरफ से अजीब ऊर्जा तरंगें पकड़ी जा रही हैं।"
					},
					"emotion": "base",
					"speaker": "dax",
					"type": "speech"
				},
				{
					"content": {
						"korean": "미술 설치물… 그게 뭐지?",
						"english": "Art installation... What is that?",
						"japanese": "美術インスタレーション… それは何だ？",
						"chinese": "艺术装置… 那是什么？",
						"french": "Installation artistique... Qu'est-ce que c'est ?",
						"spanish": "Instalación de arte... ¿Qué es eso?",
						"vietnamese": "Tác phẩm sắp đặt nghệ thuật... Cái gì vậy?",
						"thai": "งานจัดวางศิลปะ... นั่นคืออะไร?",
						"hindi": "कला स्थापना... वह क्या है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그리고 흥미로운 과거 기록이 있어. '블러드핸드' 갱단과의 대규모 충돌 기록이지.",
						"english": "And there's an interesting past record. A large-scale clash with the 'Bloodhand' gang.",
						"japanese": "そして興味深い過去の記録がある。「ブラッドハンド」ギャングとの大規模な衝突記録だ。",
						"chinese": "还有一段有趣的旧记录。与‘血手’帮的大规模冲突记录。",
						"french": "Et il y a un dossier intéressant du passé. Un affrontement majeur avec le gang 'Bloodhand'.",
						"spanish": "Y hay un registro interesante del pasado. Un choque a gran escala con la pandilla 'Bloodhand'.",
						"vietnamese": "Và có một ghi chép thú vị trong quá khứ. Một cuộc đụng độ lớn với băng 'Bloodhand'.",
						"thai": "และมีบันทึกในอดีตที่น่าสนใจ บันทึกการปะทะครั้งใหญ่กับแก๊ง 'บลัดแฮนด์'",
						"hindi": "और एक दिलचस्प पुराना रिकॉर्ड है। 'ब्लडहैंड' गिरोह के साथ एक बड़े टकराव का रिकॉर्ड।"
					},
					"emotion": "base",
					"speaker": "dax",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						5,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "dax",
					"type": "direction"
				},
				{
					"speaker": "dax",
					"type": "speech",
					"content": {
						"korean": "충돌 기록을 더 깊게 파봤어.",
						"english": "I delved deeper into the clash records.",
						"japanese": "衝突記録をさらに深く掘り下げてみた。",
						"chinese": "我深入查阅了冲突记录。",
						"french": "J'ai approfondi les dossiers de l'affrontement.",
						"spanish": "Investigué más a fondo los registros del choque.",
						"vietnamese": "Tôi đã đào sâu hơn vào các ghi chép về cuộc đụng độ.",
						"thai": "ฉันเจาะลึกเข้าไปในบันทึกการปะทะ",
						"hindi": "मैंने टकराव के रिकॉर्ड में और गहराई से छानबीन की।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "뭔가 나온 게 있어?",
						"english": "Did anything come up?",
						"japanese": "何か分かったか？",
						"chinese": "有什么发现吗？",
						"french": "Y a-t-il quelque chose qui est ressorti ?",
						"spanish": "¿Salió algo?",
						"vietnamese": "Có gì mới không?",
						"thai": "มีอะไรเจอไหม?",
						"hindi": "कुछ मिला क्या?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "dax",
					"type": "speech",
					"content": {
						"korean": "두목의 잘린 손에 대한 기록… 단순한 괴담이 아니더군.",
						"english": "Records of the boss's severed hand... It wasn't just an urban legend.",
						"japanese": "ボスの切断された手の記録… 単なる怪談ではなかった。",
						"chinese": "关于帮主断手的记录… 看来并非只是个都市传说。",
						"french": "Les dossiers de la main coupée du chef... Ce n'était pas qu'une simple légende urbaine.",
						"spanish": "Registros de la mano amputada del jefe... No era solo una leyenda urbana.",
						"vietnamese": "Ghi chép về bàn tay bị chặt của thủ lĩnh... Nó không chỉ là một truyền thuyết đô thị.",
						"thai": "บันทึกเกี่ยวกับมือที่ถูกตัดของหัวหน้า... มันไม่ใช่แค่เรื่องเล่าปรัมปรา",
						"hindi": "बॉस के कटे हुए हाथ के रिकॉर्ड... यह सिर्फ एक शहरी किंवदंती नहीं थी।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "잘린 손… 설마 진짜였다고?",
						"english": "Severed hand... Could it really have been true?",
						"japanese": "切断された手… まさか本当だったのか？",
						"chinese": "断手… 难道是真的？",
						"french": "Une main coupée... Vraiment ?",
						"spanish": "Una mano amputada... ¿En serio fue verdad?",
						"vietnamese": "Bàn tay bị chặt... Không lẽ là thật?",
						"thai": "มือที่ถูกตัด... ไม่จริงน่า?",
						"hindi": "कटा हुआ हाथ... क्या यह वाकई सच था?"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그리고 도시의 특정 구역에서 비정상적인 핏빛 응집 현상이 보고돼. 데이터상으로는 액체로 보여.",
						"english": "And abnormal crimson coagulation phenomena have been reported in certain areas of the city. Data shows it as a liquid.",
						"japanese": "そして、都市の特定の区域で異常な血のような凝集現象が報告されている。データ上は液体と見られる。",
						"chinese": "而且，城市特定区域报告了异常的血红色凝结现象。数据显示它呈液态。",
						"french": "Et des phénomènes anormaux de coagulation cramoisie ont été signalés dans certaines zones de la ville. Les données le montrent comme un liquide.",
						"spanish": "Y se han reportado fenómenos anormales de coagulación carmesí en ciertas áreas de la ciudad. Los datos lo muestran como un líquido.",
						"vietnamese": "Và các hiện tượng đông máu đỏ tươi bất thường đã được báo cáo ở một số khu vực trong thành phố. Dữ liệu cho thấy nó là chất lỏng.",
						"thai": "และมีการรายงานปรากฏการณ์การจับตัวเป็นก้อนสีแดงผิดปกติในบางพื้นที่ของเมือง ข้อมูลแสดงว่าเป็นของเหลว",
						"hindi": "और शहर के कुछ इलाकों में असामान्य लाल रंग के जमावट की घटनाएं सामने आई हैं। डेटा के अनुसार यह तरल पदार्थ के रूप में दिखाई देता है।"
					},
					"type": "speech",
					"speaker": "dax"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						5,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "dax",
					"type": "direction"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 모든 데이터가 하나의 그림을 완성하고 있어.",
						"english": "All this data is completing a single picture.",
						"japanese": "このすべてのデータが、一つの絵を完成させつつある。",
						"chinese": "所有这些数据正在拼凑成一幅完整的画面。",
						"french": "Toutes ces données complètent un seul tableau.",
						"spanish": "Todos estos datos están completando una sola imagen.",
						"vietnamese": "Tất cả dữ liệu này đang hoàn thiện một bức tranh duy nhất.",
						"thai": "ข้อมูลทั้งหมดนี้กำลังประกอบกันเป็นภาพเดียว",
						"hindi": "यह सारा डेटा एक ही तस्वीर को पूरा कर रहा है।"
					},
					"type": "speech",
					"speaker": "dax"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "블러드핸드, 미술 설치물, 잘린 손… 대체 뭐지?",
						"english": "Bloodhand, art installation, severed hand... What on earth is it?",
						"japanese": "ブラッドハンド、美術インスタレーション、切断された手… 一体何なんだ？",
						"chinese": "血手、艺术装置、断手… 到底是什么？",
						"french": "Bloodhand, installation artistique, main coupée... Qu'est-ce que c'est que ça ?",
						"spanish": "Bloodhand, instalación de arte, mano amputada... ¿Qué demonios es esto?",
						"vietnamese": "Bloodhand, tác phẩm sắp đặt nghệ thuật, bàn tay bị chặt... Rốt cuộc là gì?",
						"thai": "บลัดแฮนด์, งานจัดวางศิลปะ, มือที่ถูกตัด... มันคืออะไรกันแน่?",
						"hindi": "ब्लडहैंड, कला स्थापना, कटा हुआ हाथ... यह सब क्या है?"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "잊혀진 기록 보관소에서 갱단의 잔혹한 최후에 대한 기사를 찾았어. 이건… 복수극이야.",
						"english": "I found an article about the gang's brutal end in a forgotten archive. This is... a revenge story.",
						"japanese": "忘れ去られた記録保管庫で、ギャングの残酷な最期に関する記事を見つけた。これは… 復讐劇だ。",
						"chinese": "我在一个被遗忘的档案库里找到了一篇关于这个帮派残酷结局的文章。这… 是一场复仇。",
						"french": "J'ai trouvé un article sur la fin brutale du gang dans une archive oubliée. C'est... une histoire de vengeance.",
						"spanish": "Encontré un artículo sobre el brutal final de la pandilla en un archivo olvidado. Esto es... una historia de venganza.",
						"vietnamese": "Tôi tìm thấy một bài báo về kết cục tàn khốc của băng đảng trong một kho lưu trữ bị lãng quên. Đây là... một câu chuyện trả thù.",
						"thai": "ฉันพบบทความเกี่ยวกับการสิ้นสุดอันโหดร้ายของแก๊งในห้องเก็บเอกสารที่ถูกลืม นี่คือ... เรื่องราวการแก้แค้น",
						"hindi": "मुझे एक भूले हुए अभिलेखागार में गिरोह के क्रूर अंत के बारे में एक लेख मिला। यह... एक बदला लेने की कहानी है।"
					},
					"type": "speech",
					"speaker": "dax"
				},
				{
					"content": {
						"korean": "누가, 누구에게 복수하는 거지?",
						"english": "Who is avenging whom?",
						"japanese": "誰が、誰に復讐しているんだ？",
						"chinese": "谁在向谁复仇？",
						"french": "Qui se venge de qui ?",
						"spanish": "¿Quién se venga de quién?",
						"vietnamese": "Ai đang trả thù ai?",
						"thai": "ใครกำลังแก้แค้นใครกันแน่?",
						"hindi": "कौन, किससे बदला ले रहा है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "누군가… 아니, 무엇인가가 복수를 위해 깨어나고 있어. 이 도시의 비극은… 시작이었을지도 몰라.",
						"english": "Someone... no, something is awakening for revenge. This city's tragedy... might have just been the beginning.",
						"japanese": "誰かが…いや、何かが復讐のために目覚めている。この街の悲劇は…始まりに過ぎなかったのかもしれない。",
						"chinese": "某个存在……不，某种东西正为复仇而苏醒。这座城市的悲剧……或许才刚刚开始。",
						"french": "Quelqu'un... non, quelque chose s'éveille pour la vengeance. La tragédie de cette ville... n'était peut-être que le début.",
						"spanish": "Alguien... no, algo está despertando para vengarse. La tragedia de esta ciudad... podría haber sido solo el principio.",
						"vietnamese": "Ai đó... không, thứ gì đó đang thức tỉnh để trả thù. Bi kịch của thành phố này... có lẽ chỉ là khởi đầu.",
						"thai": "บางคน... ไม่สิ บางสิ่งกำลังตื่นขึ้นมาเพื่อแก้แค้น โศกนาฏกรรมของเมืองนี้... อาจเป็นแค่จุดเริ่มต้นเท่านั้น",
						"hindi": "कोई… नहीं, कुछ बदला लेने के लिए जाग रहा है। इस शहर की त्रासदी… शायद सिर्फ़ शुरुआत थी।"
					},
					"emotion": "angry",
					"speaker": "dax",
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "크으윽… 날 막아봤자… 진실은 변치 않아…",
						"english": "Ugh... Even if you stop me... the truth won't change...",
						"japanese": "くぅっ…私を止めようと…真実は変わらない…",
						"chinese": "呃啊……就算你阻止了我……真相也不会改变……",
						"french": "Ugh... Même si tu m'arrêtes... la vérité ne changera pas...",
						"spanish": "Ugh... Aunque me detengas... la verdad no cambiará...",
						"vietnamese": "Khụ... Dù ngươi có ngăn được ta... sự thật cũng không thay đổi...",
						"thai": "อึก... ต่อให้เจ้าหยุดข้าได้... ความจริงก็ไม่เปลี่ยน...",
						"hindi": "उफ़… मुझे रोकने से भी… सच्चाई नहीं बदलेगी…"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "결국 모든 것이 피로 물들 것이다… 멈출 수 없어…",
						"english": "In the end, everything will be stained with blood... You can't stop it...",
						"japanese": "結局、全てが血に染まるだろう…止められはしない…",
						"chinese": "最终，一切都将被鲜血染红……无法阻止……",
						"french": "Au final, tout sera souillé de sang... Vous ne pouvez pas l'arrêter...",
						"spanish": "Al final, todo se teñirá de sangre... No podéis detenerlo...",
						"vietnamese": "Cuối cùng, mọi thứ sẽ nhuốm máu... Không thể ngăn cản...",
						"thai": "ในที่สุด ทุกสิ่งจะแปดเปื้อนด้วยเลือด... หยุดมันไม่ได้หรอก...",
						"hindi": "अंत में, सब कुछ ख़ून से रंग जाएगा… इसे रोक नहीं सकते…"
					},
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "닥쳐! 더 이상 그 힘으로 누구도 상처 입힐 수 없어!",
						"english": "Shut up! You can't hurt anyone with that power anymore!",
						"japanese": "黙れ！もうその力で誰も傷つけさせない！",
						"chinese": "住口！你再也不能用那股力量伤害任何人了！",
						"french": "Tais-toi ! Tu ne blesseras plus personne avec ce pouvoir !",
						"spanish": "¡Cállate! ¡No podrás herir a nadie más con ese poder!",
						"vietnamese": "Câm miệng! Ngươi không thể làm tổn thương ai bằng sức mạnh đó nữa!",
						"thai": "หุบปาก! แกจะทำร้ายใครด้วยพลังนั้นไม่ได้อีกแล้ว!",
						"hindi": "चुप रहो! तुम उस शक्ति से अब किसी को चोट नहीं पहुँचा सकते!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 서서히 흩어졌다. 잠시의 평화가 찾아왔다.",
						"english": "The colossal shadow slowly dissipated. A moment of peace descended.",
						"japanese": "巨大な影がゆっくりと消え去った。束の間の平和が訪れた。",
						"chinese": "巨大的阴影渐渐散去。短暂的和平降临了。",
						"french": "L'ombre colossale se dissipa lentement. Un moment de paix s'installa.",
						"spanish": "La colosal sombra se disipó lentamente. Un momento de paz descendió.",
						"vietnamese": "Bóng tối khổng lồ dần tan biến. Một khoảnh khắc bình yên đã đến.",
						"thai": "เงาขนาดมหึมาค่อยๆ สลายไป ช่วงเวลาแห่งสันติสุขได้มาเยือน",
						"hindi": "विशाल छाया धीरे-धीरे बिखर गई। शांति का एक क्षण छा गया।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "하지만 잘린 손의 저주… 어쩌면 이제 시작일지도 모른다. 도시는 아직 피 냄새로 가득했다.",
						"english": "But the curse of the severed hand... perhaps it has only just begun. The city still reeked of blood.",
						"japanese": "しかし、斬り落とされた手の呪い…それはまだ始まったばかりなのかもしれない。街はまだ血の匂いで満ちていた。",
						"chinese": "然而，断手的诅咒……也许才刚刚开始。城市仍然弥漫着血腥味。",
						"french": "Mais la malédiction de la main coupée… peut-être que tout ne fait que commencer. La ville était encore imprégnée de l'odeur du sang.",
						"spanish": "Pero la maldición de la mano cercenada... quizás solo ha comenzado. La ciudad aún apestaba a sangre.",
						"vietnamese": "Nhưng lời nguyền của bàn tay bị chặt... có lẽ nó chỉ mới bắt đầu. Thành phố vẫn còn nồng nặc mùi máu.",
						"thai": "แต่คำสาปของมือที่ถูกตัด... บางทีมันอาจจะเพิ่งเริ่มต้นขึ้นก็ได้ เมืองยังคงอบอวลไปด้วยกลิ่นคาวเลือด",
						"hindi": "लेकिन कटे हुए हाथ का श्राप... शायद यह अभी शुरू ही हुआ है। शहर में अभी भी खून की गंध भरी हुई थी।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "데이터의 틈새를 뚫고, 거대한 그림자가 모습을 드러냈다.",
						"english": "Piercing through the data rift, a colossal shadow revealed itself.",
						"japanese": "データの隙間を突き破り、巨大な影がその姿を現した。",
						"chinese": "穿透数据裂隙，一个巨大的黑影显现出来。",
						"french": "Perçant la faille des données, une ombre colossale est apparue.",
						"spanish": "Atravesando la brecha de datos, una sombra colosal se reveló.",
						"vietnamese": "Xuyên qua khe hở dữ liệu, một bóng đen khổng lồ hiện hình.",
						"thai": "ทะลุผ่านรอยแยกของข้อมูล เงาร่างมหึมาปรากฏกาย",
						"hindi": "डेटा के अंतराल को चीरते हुए, एक विशाल छाया प्रकट हुई।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "어리석은 것들… 감히 이 진실에 다가가려 하는가.",
						"english": "Foolish mortals... Dare you approach this truth?",
						"japanese": "愚かな者たち…よくもこの真実に近づこうとするか。",
						"chinese": "愚蠢之徒……竟敢触及这真相。",
						"french": "Insensés... Osez-vous approcher de cette vérité ?",
						"spanish": "Necios... ¿Os atrevéis a acercaros a esta verdad?",
						"vietnamese": "Những kẻ ngu xuẩn... Dám bén mảng đến sự thật này sao?",
						"thai": "พวกโง่เขลา... กล้าดียังไงถึงคิดจะเข้าใกล้ความจริงนี้?",
						"hindi": "मूर्खों… क्या तुम इस सच्चाई के करीब आने की हिम्मत करते हो?"
					}
				},
				{
					"content": {
						"korean": "네가… {random_boss}였군! 이 도시의 비극을 만든 자가!",
						"english": "So you... are {random_boss}! The one who created this city's tragedy!",
						"japanese": "お前が…{random_boss}だったのか！この街の悲劇を招いた張本人が！",
						"chinese": "你就是……{random_boss}！这座城市悲剧的始作俑者！",
						"french": "C'est toi... {random_boss} ! Celui qui a créé la tragédie de cette ville !",
						"spanish": "¡Así que tú... eres {random_boss}! ¡El que causó la tragedia de esta ciudad!",
						"vietnamese": "Ngươi chính là... {random_boss}! Kẻ đã tạo ra bi kịch của thành phố này!",
						"thai": "แกคือ... {random_boss} นี่เอง! ผู้ที่สร้างโศกนาฏกรรมของเมืองนี้!",
						"hindi": "तो तुम… {random_boss} थे! इस शहर की त्रासदी के निर्माता!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "내 고통을 알지 못하면서… 감히 단정하지 마라.",
						"english": "You know nothing of my pain... Dare not judge.",
						"japanese": "私の苦痛を知りもせずに…勝手に決めつけるな。",
						"chinese": "你们不了解我的痛苦……竟敢妄下定论。",
						"french": "Vous ne savez rien de ma douleur... N'osez pas juger.",
						"spanish": "No conocéis mi dolor... No os atreváis a juzgar.",
						"vietnamese": "Ngươi không hề biết nỗi đau của ta... Dám cả gan phán xét.",
						"thai": "ไม่รู้ความเจ็บปวดของข้า... อย่าบังอาจตัดสิน!",
						"hindi": "तुम मेरे दर्द को नहीं जानते… हिम्मत मत करो फैसला सुनाने की।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "더 이상 누구도 다치게 할 수 없어. 여기서 끝낼 거야!",
						"english": "You won't hurt anyone else. I'll end this here!",
						"japanese": "もう誰も傷つけさせない。ここで終わらせる！",
						"chinese": "你不能再伤害任何人了。我会在这里结束这一切！",
						"french": "Tu ne feras plus de mal à personne. Je vais en finir ici !",
						"spanish": "No harás daño a nadie más. ¡Acabaré con esto aquí!",
						"vietnamese": "Ngươi sẽ không làm tổn thương ai nữa. Ta sẽ kết thúc chuyện này tại đây!",
						"thai": "แกจะทำร้ายใครไม่ได้อีกแล้ว ข้าจะยุติมันที่นี่!",
						"hindi": "तुम अब किसी को चोट नहीं पहुँचा सकते। मैं इसे यहीं ख़त्म करूँगा!"
					},
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "압도적인 힘. 탐험대는 무너졌다. 어둠이 모든 것을 삼켰다.",
						"english": "Overwhelming power. The expedition collapsed. Darkness swallowed everything.",
						"japanese": "圧倒的な力。探検隊は崩壊した。闇がすべてを飲み込んだ。",
						"chinese": "压倒性的力量。探险队崩溃了。黑暗吞噬了一切。",
						"french": "Une puissance écrasante. L'expédition s'est effondrée. L'obscurité a tout englouti.",
						"spanish": "Un poder abrumador. La expedición colapsó. La oscuridad lo devoró todo.",
						"vietnamese": "Sức mạnh áp đảo. Đoàn thám hiểm đã sụp đổ. Bóng tối nuốt chửng mọi thứ.",
						"thai": "พลังอันล้นหลาม คณะสำรวจล่มสลาย ความมืดกลืนกินทุกสิ่ง",
						"hindi": "भारी शक्ति। अभियान दल बिखर गया। अंधेरे ने सब कुछ निगल लिया।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "아직도 모르는군. 너희의 운명을…",
						"english": "You still don't know. Your fate...",
						"japanese": "まだ分かっていないようだな。お前たちの運命を…",
						"chinese": "你们还不知道。你们的命运…",
						"french": "Vous ne savez toujours pas. Votre destin…",
						"spanish": "Todavía no lo sabéis. Vuestro destino...",
						"vietnamese": "Ngươi vẫn chưa biết. Số phận của ngươi...",
						"thai": "เจ้ายังไม่รู้สินะ ชะตากรรมของพวกเจ้า...",
						"hindi": "तुम अब भी नहीं जानते। अपना भाग्य..."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "크윽… 아직 끝나지 않았어… 우린 포기 안 해!",
						"english": "Ugh... It's not over yet... We won't give up!",
						"japanese": "くっ…まだ終わってない…私たちは諦めない！",
						"chinese": "呃……还没结束……我们不会放弃！",
						"french": "Argh… Ce n'est pas encore fini… Nous n'abandonnerons pas !",
						"spanish": "Ugh... Todavía no ha terminado... ¡No nos rendiremos!",
						"vietnamese": "Khụ... Vẫn chưa kết thúc... Chúng tôi sẽ không bỏ cuộc!",
						"thai": "อึก... ยังไม่จบ... เราไม่ยอมแพ้!",
						"hindi": "उह... यह अभी खत्म नहीं हुआ है... हम हार नहीं मानेंगे!"
					}
				}
			]
		}
	]
} as const;
