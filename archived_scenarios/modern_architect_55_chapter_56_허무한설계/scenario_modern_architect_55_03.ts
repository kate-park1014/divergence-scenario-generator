export const scenario_modern_architect_55_03 = {
	"scenario_id": "modern_architect_55_03",
	"order": 3,
	"act": "rising",
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
			"도시의 심장은 시스템이었다.",
			"완벽하다고 믿었던 질서가 흔들리기 시작했다.",
			"사소한 오류들, 예측 불가능한 혼돈. 그 뒤엔 무엇이 있을까?",
			"고장 난 통제, 혹은 더 완벽한 설계."
		],
		"english": [
			"The city's heart was the system.",
			"The order believed to be perfect began to waver.",
			"Minor errors, unpredictable chaos. What lies behind them?",
			"Broken control, or a more perfect design."
		],
		"japanese": [
			"都市の心臓はシステムだった。",
			"完璧だと信じられていた秩序が揺らぎ始めた。",
			"ささいなエラー、予測不能な混沌。その裏には何があるのか？",
			"制御の故障か、あるいはより完璧な設計か。"
		],
		"chinese": [
			"城市的心脏是系统。",
			"被认为是完美的秩序开始动摇。",
			"细微的错误，不可预测的混乱。其背后是什么？",
			"失控的系统，抑或更完美的S设计。"
		],
		"french": [
			"Le cœur de la ville était le système.",
			"L'ordre, que l'on croyait parfait, commença à vaciller.",
			"Des erreurs mineures, un chaos imprévisible. Qu'y a-t-il derrière tout ça ?",
			"Un contrôle défaillant, ou une conception plus parfaite."
		],
		"spanish": [
			"El corazón de la ciudad era el sistema.",
			"El orden, que se creía perfecto, comenzó a tambalearse.",
			"Errores menores, caos impredecible. ¿Qué hay detrás?",
			"Un control averiado, o un diseño más perfecto."
		],
		"vietnamese": [
			"Trái tim của thành phố là hệ thống.",
			"Trật tự tưởng chừng hoàn hảo bắt đầu lung lay.",
			"Những lỗi nhỏ nhặt, hỗn loạn không thể đoán trước. Đằng sau đó là gì?",
			"Kiểm soát hỏng hóc, hoặc một thiết kế hoàn hảo hơn."
		],
		"thai": [
			"หัวใจของเมืองคือระบบ",
			"ความสงบสุขที่เชื่อว่าสมบูรณ์แบบเริ่มสั่นคลอน",
			"ข้อผิดพลาดเล็กน้อย ความวุ่นวายที่คาดเดาไม่ได้ มีอะไรอยู่เบื้องหลัง?",
			"การควบคุมที่ผิดพลาด หรือการออกแบบที่สมบูรณ์แบบยิ่งกว่า"
		],
		"hindi": [
			"शहर का दिल सिस्टम था।",
			"जिस व्यवस्था को परिपूर्ण माना जाता था, वह हिलने लगी।",
			"छोटी-छोटी त्रुटियाँ, अप्रत्याशित अराजकता। इनके पीछे क्या है?",
			"टूटा हुआ नियंत्रण, या एक अधिक परिपूर्ण डिज़ाइन।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "도심 한복판. 전광판에 알 수 없는 노이즈가 스쳤다.",
						"english": "Downtown. Unknown noise flashed across the billboard.",
						"japanese": "都心。電光掲示板に未知のノイズが走った。",
						"chinese": "市中心。广告牌上闪过未知噪音。",
						"french": "En plein centre-ville. Un bruit inconnu traversa le panneau d'affichage.",
						"spanish": "En el corazón de la ciudad. Un ruido desconocido apareció en la valla publicitaria.",
						"vietnamese": "Giữa trung tâm thành phố. Một tiếng ồn không rõ lướt qua bảng điện tử.",
						"thai": "กลางเมือง มีสัญญาณรบกวนที่ไม่รู้จักปรากฏขึ้นบนป้ายโฆษณา",
						"hindi": "शहर के बीचों-बीच। बिलबोर्ड पर एक अज्ञात शोर दिखाई दिया।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "버그인가?",
						"english": "A bug?",
						"japanese": "バグか？",
						"chinese": "是bug吗？",
						"french": "Un bug ?",
						"spanish": "¿Un error?",
						"vietnamese": "Một lỗi ư?",
						"thai": "บั๊กเหรอ?",
						"hindi": "एक बग?"
					}
				},
				{
					"duration_ms": 500,
					"speaker": "echo",
					"spot": [
						5,
						2
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "버그라기엔… 너무 완벽해요.",
						"english": "Too perfect to be a bug...",
						"japanese": "バグにしては…あまりにも完璧すぎます。",
						"chinese": "说它是bug…又太完美了。",
						"french": "Trop parfait pour être un bug...",
						"spanish": "Demasiado perfecto para ser un error...",
						"vietnamese": "Nói là lỗi… nhưng quá hoàn hảo.",
						"thai": "จะว่าเป็นบั๊กก็… สมบูรณ์แบบเกินไป",
						"hindi": "एक बग होने के लिए... बहुत सही है।"
					},
					"emotion": "base",
					"speaker": "echo",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이건 단순한 고장이 아니에요.",
						"english": "This isn't a simple malfunction.",
						"japanese": "これは単なる故障ではありません。",
						"chinese": "这不是简单的故障。",
						"french": "Ce n'est pas une simple défaillance.",
						"spanish": "Esto no es una simple avería.",
						"vietnamese": "Đây không phải là một sự cố đơn giản.",
						"thai": "นี่ไม่ใช่ความผิดปกติธรรมดา",
						"hindi": "यह कोई साधारण खराबी नहीं है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "echo"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "base",
					"content": {
						"korean": "그럼 뭔데?",
						"english": "Then what is it?",
						"japanese": "じゃあ何なの？",
						"chinese": "那是什么？",
						"french": "Alors, qu'est-ce que c'est ?",
						"spanish": "¿Entonces qué es?",
						"vietnamese": "Vậy thì là gì?",
						"thai": "แล้วมันคืออะไรล่ะ?",
						"hindi": "तो क्या है?"
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "신호등이 동시에 빨간불로 바뀌고, 차량들이 엉켰다.",
						"english": "Traffic lights all turned red simultaneously, tangling up vehicles.",
						"japanese": "信号が同時に赤に変わり、車が絡み合った。",
						"chinese": "信号灯同时变红，车辆堵塞。",
						"french": "Les feux de signalisation sont passés au rouge simultanément, et les véhicules se sont emmêlés.",
						"spanish": "Los semáforos se pusieron rojos a la vez, y los vehículos se enredaron.",
						"vietnamese": "Đèn tín hiệu giao thông đồng loạt chuyển sang màu đỏ, các phương tiện kẹt cứng.",
						"thai": "ไฟจราจรเปลี่ยนเป็นสีแดงพร้อมกัน ทำให้รถติดขัด",
						"hindi": "ट्रैफिक लाइटें एक साथ लाल हो गईं, और वाहन उलझ गए।"
					},
					"emotion": "base"
				},
				{
					"speaker": "echo",
					"spot": [
						4,
						2
					],
					"duration_ms": 550,
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "또 시작이네요.",
						"english": "Here we go again.",
						"japanese": "また始まりましたね。",
						"chinese": "又开始了。",
						"french": "Ça recommence.",
						"spanish": "Aquí vamos de nuevo.",
						"vietnamese": "Lại bắt đầu rồi.",
						"thai": "เริ่มอีกแล้วสินะ",
						"hindi": "फिर से शुरू हो गया।"
					},
					"speaker": "echo",
					"type": "speech"
				},
				{
					"content": {
						"korean": "시스템 오류가 심해졌군.",
						"english": "The system errors are getting worse.",
						"japanese": "システムエラーがひどくなってきたな。",
						"chinese": "系统错误更严重了。",
						"french": "Les erreurs système s'aggravent.",
						"spanish": "Los errores del sistema están empeorando.",
						"vietnamese": "Lỗi hệ thống càng lúc càng nghiêm trọng.",
						"thai": "ข้อผิดพลาดของระบบแย่ลงแล้ว",
						"hindi": "सिस्टम की त्रुटियाँ बदतर हो गई हैं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "아니요, 오류가 아니라… '의도된 오작동' 같아요.",
						"english": "No, not errors... more like 'intentional malfunctions'.",
						"japanese": "いいえ、エラーではなく…『意図的な誤作動』のようです。",
						"chinese": "不，不是错误……更像是‘故意的故障’。",
						"french": "Non, pas des erreurs... plutôt des 'dysfonctionnements intentionnels'.",
						"spanish": "No, no son errores... más bien 'fallos intencionados'.",
						"vietnamese": "Không, không phải lỗi... mà giống như 'trục trặc có chủ ý' thì đúng hơn.",
						"thai": "ไม่ครับ ไม่ใช่ข้อผิดพลาด... เหมือนกับ 'การทำงานผิดพลาดโดยเจตนา' มากกว่า",
						"hindi": "नहीं, त्रुटियाँ नहीं... बल्कि 'जानबूझकर की गई खराबी' जैसा कुछ।"
					},
					"type": "speech",
					"speaker": "echo"
				},
				{
					"content": {
						"korean": "의도된 오작동?",
						"english": "Intentional malfunctions?",
						"japanese": "意図的な誤作動？",
						"chinese": "故意的故障？",
						"french": "Dysfonctionnements intentionnels ?",
						"spanish": "¿Fallos intencionados?",
						"vietnamese": "Trục trặc có chủ ý?",
						"thai": "การทำงานผิดพลาดโดยเจตนา?",
						"hindi": "जानबूझकर की गई खराबी?"
					},
					"emotion": "base",
					"speaker": "character_2",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "마치 누군가, 모든 혼란을… 계산하고 있는 것처럼.",
						"english": "As if someone is... calculating all this chaos.",
						"japanese": "まるで誰かが、この混乱すべてを…計算しているかのように。",
						"chinese": "就好像有人……正在计算着所有的混乱。",
						"french": "Comme si quelqu'un... calculait tout ce chaos.",
						"spanish": "Como si alguien estuviera... calculando todo este caos.",
						"vietnamese": "Cứ như thể ai đó đang... tính toán tất cả sự hỗn loạn này.",
						"thai": "ราวกับว่ามีใครบางคน... กำลังคำนวณความสับสนวุ่นวายทั้งหมดนี้อยู่",
						"hindi": "जैसे कोई... इस सारी अराजकता की गणना कर रहा हो।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "음식점 메뉴판의 가격이 무작위로 바뀌고, 사람들은 혼란에 빠졌다.",
						"english": "Restaurant menu prices changed randomly, and people fell into confusion.",
						"japanese": "レストランのメニュー価格がランダムに変わり、人々は混乱に陥った。",
						"chinese": "餐厅菜单上的价格随机变化，人们陷入了混乱。",
						"french": "Les prix des menus de restaurant ont changé aléatoirement, plongeant les gens dans la confusion.",
						"spanish": "Los precios del menú del restaurante cambiaron aleatoriamente y la gente entró en confusión.",
						"vietnamese": "Giá trên thực đơn nhà hàng thay đổi ngẫu nhiên, khiến mọi người rơi vào hỗn loạn.",
						"thai": "ราคาบนเมนูอาหารในร้านอาหารเปลี่ยนไปอย่างสุ่ม ทำให้ผู้คนตกอยู่ในความสับสน",
						"hindi": "रेस्तरां के मेन्यू के दाम बेतरतीब ढंग से बदल गए, और लोग भ्रम में पड़ गए।"
					},
					"emotion": "base"
				},
				{
					"speaker": "echo",
					"spot": [
						3,
						2
					],
					"duration_ms": 450,
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "점점 심해져요.",
						"english": "It's getting worse and worse.",
						"japanese": "どんどんひどくなっています。",
						"chinese": "越来越严重了。",
						"french": "Ça empire de plus en plus.",
						"spanish": "Está empeorando.",
						"vietnamese": "Càng lúc càng tệ hơn.",
						"thai": "แย่ลงเรื่อย ๆ เลยค่ะ",
						"hindi": "यह बदतर होता जा रहा है।"
					},
					"type": "speech",
					"speaker": "echo"
				},
				{
					"content": {
						"korean": "혼란만 부추길 뿐인데, 왜 이런 짓을?",
						"english": "It only incites chaos, why do this?",
						"japanese": "混乱を煽るだけなのに、なぜこんなことを？",
						"chinese": "这只会加剧混乱，为什么要这样做？",
						"french": "Ça ne fait qu'attiser le chaos, pourquoi faire ça ?",
						"spanish": "Esto solo incita al caos, ¿por qué hacer esto?",
						"vietnamese": "Chỉ càng gây thêm hỗn loạn thôi, tại sao lại làm vậy?",
						"thai": "มันแค่ยิ่งทำให้เกิดความวุ่นวายเท่านั้น ทำไมถึงทำแบบนี้?",
						"hindi": "यह केवल अराजकता को बढ़ावा देता है, ऐसा क्यों करते हैं?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "Dax도 최근 이상했죠? 데이터 분석 중에 혼란스러워하면서도, 결과는 늘 완벽하다고….",
						"english": "Dax has been strange lately too, hasn't he? Confused during data analysis, yet always saying the results were perfect...",
						"japanese": "Daxも最近おかしかったですよね？データ分析中に混乱しながらも、結果はいつも完璧だと言って…。",
						"chinese": "Dax最近也很奇怪，不是吗？数据分析时他很困惑，但结果却总是说完美……",
						"french": "Dax aussi était étrange récemment, n'est-ce pas ? Confus pendant l'analyse des données, mais disant toujours que les résultats étaient parfaits...",
						"spanish": "Dax también ha estado raro últimamente, ¿verdad? Confundido durante el análisis de datos, pero siempre diciendo que los resultados eran perfectos...",
						"vietnamese": "Dax gần đây cũng lạ phải không? Anh ấy bối rối trong lúc phân tích dữ liệu, nhưng lại luôn nói kết quả là hoàn hảo...",
						"thai": "Dax ก็แปลก ๆ ช่วงนี้ใช่ไหมครับ? เขาสับสนระหว่างการวิเคราะห์ข้อมูล แต่ก็ยังบอกว่าผลลัพธ์สมบูรณ์แบบเสมอ...",
						"hindi": "Dax भी हाल ही में अजीब था, है ना? डेटा विश्लेषण के दौरान भ्रमित था, फिर भी हमेशा कहता था कि परिणाम हमेशा सही थे।"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "어쩌면 이 모든 게… 누군가의 큰 그림일지도 몰라요.",
						"english": "Perhaps all of this... is part of someone's grand plan.",
						"japanese": "もしかしたら、この全てが…誰かの壮大な計画なのかもしれません。",
						"chinese": "也许这一切……是某人的一个大计划。",
						"french": "Peut-être que tout cela... fait partie du grand plan de quelqu'un.",
						"spanish": "Quizás todo esto... sea parte del gran plan de alguien.",
						"vietnamese": "Có lẽ tất cả những điều này... là một phần trong kế hoạch lớn của ai đó.",
						"thai": "บางทีทั้งหมดนี้... อาจจะเป็นแผนการใหญ่ของใครบางคนก็ได้",
						"hindi": "हो सकता है यह सब... किसी की बड़ी योजना का हिस्सा हो।"
					},
					"type": "speech",
					"speaker": "echo"
				},
				{
					"type": "speech",
					"speaker": "character_3",
					"emotion": "base",
					"content": {
						"korean": "큰 그림?",
						"english": "The big picture?",
						"japanese": "大局観？",
						"chinese": "大局？",
						"french": "La vue d'ensemble ?",
						"spanish": "¿El panorama general?",
						"vietnamese": "Bức tranh lớn?",
						"thai": "ภาพรวมเหรอ?",
						"hindi": "बड़ी तस्वीर?"
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "도시 외곽. 공중을 떠다니는 드론들이 갑자기 방향을 잃고 추락했다.",
						"english": "Outskirts of the city. Drones hovering in the air suddenly lost control and crashed.",
						"japanese": "都市郊外。空中を漂っていたドローンが突然制御を失い墜落した。",
						"chinese": "城市郊区。空中盘旋的无人机突然失去方向并坠落。",
						"french": "Périphérie de la ville. Des drones flottant dans les airs ont soudainement perdu leur direction et se sont écrasés.",
						"spanish": "Las afueras de la ciudad. Los drones que flotaban en el aire de repente perdieron el rumbo y se estrellaron.",
						"vietnamese": "Ngoại ô thành phố. Các máy bay không người lái đang lơ lửng trên không bỗng mất phương hướng và lao xuống.",
						"thai": "ชานเมือง โดรนที่ลอยอยู่กลางอากาศก็เสียการควบคุมและตกลงมาอย่างกะทันหัน",
						"hindi": "शहर के बाहरी इलाके। हवा में तैरते ड्रोन अचानक दिशाहीन होकर दुर्घटनाग्रस्त हो गए।"
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 400,
					"speaker": "echo",
					"spot": [
						2,
						2
					]
				},
				{
					"content": {
						"korean": "이 이상은 위험해요!",
						"english": "Any further is dangerous!",
						"japanese": "これ以上は危険です！",
						"chinese": "再往前就危险了！",
						"french": "C'est dangereux d'aller plus loin !",
						"spanish": "¡Más allá es peligroso!",
						"vietnamese": "Đi thêm nữa sẽ rất nguy hiểm!",
						"thai": "เลยจากนี้ไปอันตราย!",
						"hindi": "इससे आगे खतरा है!"
					},
					"emotion": "angry",
					"speaker": "echo",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이제 정말 통제가 안 되는군.",
						"english": "It's truly out of control now.",
						"japanese": "もう本当に制御不能だ。",
						"chinese": "现在真的失控了。",
						"french": "C'est vraiment hors de contrôle maintenant.",
						"spanish": "Ahora está realmente fuera de control.",
						"vietnamese": "Giờ thì mọi thứ đã thực sự mất kiểm soát rồi.",
						"thai": "ตอนนี้มันควบคุมไม่ได้แล้วจริง ๆ",
						"hindi": "अब यह सच में बेकाबू हो गया है।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "아니요. 통제는 완벽해요. 그 통제가 '고장'을 만들고 있을 뿐.",
						"english": "No. The control is perfect. It's just that the control is creating the 'malfunction'.",
						"japanese": "いいえ。制御は完璧です。その制御が「故障」を生み出しているだけです。",
						"chinese": "不。控制是完美的。只是这种控制正在制造‘故障’而已。",
						"french": "Non. Le contrôle est parfait. C'est juste que ce contrôle est en train de créer la 'panne'.",
						"spanish": "No. El control es perfecto. Solo que ese control está creando el 'fallo'.",
						"vietnamese": "Không. Sự kiểm soát là hoàn hảo. Chỉ là sự kiểm soát đó đang tạo ra 'lỗi' mà thôi.",
						"thai": "ไม่ใช่ การควบคุมสมบูรณ์แบบ เพียงแต่การควบคุมนั้นกำลังสร้าง 'ความผิดปกติ' ขึ้นมาเท่านั้น",
						"hindi": "नहीं। नियंत्रण तो सही है। बस वह नियंत्रण ही 'खराबी' पैदा कर रहा है।"
					},
					"type": "speech",
					"speaker": "echo"
				},
				{
					"content": {
						"korean": "우리의 모든 움직임조차… 그들의 계획 안에 있을지도 몰라요.",
						"english": "Even our every move... might be part of their plan.",
						"japanese": "我々のあらゆる動きすら… 彼らの計画の内なのかもしれません。",
						"chinese": "甚至我们的一举一动… 都可能在他们的计划之中。",
						"french": "Même chacun de nos mouvements… pourrait faire partie de leur plan.",
						"spanish": "Incluso cada uno de nuestros movimientos… podría estar dentro de su plan.",
						"vietnamese": "Ngay cả mọi hành động của chúng ta… cũng có thể nằm trong kế hoạch của chúng.",
						"thai": "แม้แต่การเคลื่อนไหวทุกย่างก้าวของเรา… ก็อาจจะอยู่ในแผนการของพวกมันด้วย",
						"hindi": "हमारी हर हरकत भी... शायद उनकी योजना का हिस्सा हो सकती है।"
					},
					"emotion": "sad",
					"speaker": "echo",
					"type": "speech"
				},
				{
					"content": {
						"korean": "말도 안 돼!",
						"english": "Impossible!",
						"japanese": "ありえない！",
						"chinese": "这不可能！",
						"french": "C'est impossible !",
						"spanish": "¡Imposible!",
						"vietnamese": "Không thể nào!",
						"thai": "เป็นไปไม่ได้!",
						"hindi": "यह नामुमकिन है!"
					},
					"emotion": "angry",
					"speaker": "character_4",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "시스템의 핵심으로 가는 길. 거대한 그림자가 앞을 가로막았다.",
						"english": "On the way to the system's core. A colossal shadow blocked the path.",
						"japanese": "システムの核へ向かう道。巨大な影が道を塞いだ。",
						"chinese": "通往系统核心的路上。一个巨大的影子挡住了去路。",
						"french": "Sur le chemin du cœur du système. Une ombre colossale barra la route.",
						"spanish": "De camino al núcleo del sistema. Una sombra colosal bloqueó el paso.",
						"vietnamese": "Trên đường đến lõi hệ thống. Một bóng đen khổng lồ chặn đường.",
						"thai": "ระหว่างทางไปยังแกนกลางของระบบ เงาขนาดมหึมาขวางกั้นอยู่เบื้องหน้า",
						"hindi": "सिस्टम के मूल की ओर जाने वाली राह। एक विशाल छाया ने रास्ता रोक लिया।"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "불완전한 존재들이여. 나의 완벽한 오류를 방해하지 마라.",
						"english": "Imperfect beings. Do not interfere with my perfect error.",
						"japanese": "不完全なる者たちよ。我が完璧なるエラーを妨げるな。",
						"chinese": "不完美的生灵们。不要妨碍我完美的错误。",
						"french": "Êtres imparfaits. N'interférez pas avec mon erreur parfaite.",
						"spanish": "Seres imperfectos. No interfieran con mi error perfecto.",
						"vietnamese": "Những kẻ không hoàn hảo. Đừng cản trở lỗi lầm hoàn hảo của ta.",
						"thai": "พวกสิ่งมีชีวิตที่ไม่สมบูรณ์แบบ อย่าขัดขวางความผิดพลาดอันสมบูรณ์แบบของข้า",
						"hindi": "अधूरे प्राणियों। मेरी पूर्ण त्रुटि में हस्तक्षेप मत करो।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "네가 이 모든 걸 꾸민 거야?",
						"english": "You orchestrated all of this?",
						"japanese": "お前がこの全てを企てたのか？",
						"chinese": "这一切都是你策划的？",
						"french": "C'est toi qui as orchestré tout ça ?",
						"spanish": "¿Fuiste tú quien orquestó todo esto?",
						"vietnamese": "Tất cả những chuyện này là do ngươi dàn dựng sao?",
						"thai": "แกเป็นคนบงการเรื่องทั้งหมดนี่เหรอ?",
						"hindi": "क्या यह सब तुम्हारी साज़िश थी?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "혼란 속에서 질서가 피어난다. 너희는 그저, 설계된 변수일 뿐.",
						"english": "From chaos, order blossoms. You are merely designed variables.",
						"japanese": "混沌の中から秩序が生まれる。君たちはただ、設計された変数に過ぎない。",
						"chinese": "混乱之中，秩序萌生。你们不过是设计好的变量。",
						"french": "Du chaos naît l'ordre. Vous n'êtes que des variables prédéfinies.",
						"spanish": "Del caos florece el orden. Solo sois variables diseñadas.",
						"vietnamese": "Từ hỗn loạn, trật tự nảy nở. Các ngươi chỉ là những biến số đã được thiết kế.",
						"thai": "จากความวุ่นวาย ความสงบเรียบร้อยจะผลิบาน พวกเจ้าเป็นเพียงตัวแปรที่ถูกออกแบบไว้เท่านั้น",
						"hindi": "अराजकता में व्यवस्था खिलती है। तुम केवल डिज़ाइन किए गए चर हो।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "그럴 리가….",
						"english": "That can't be...",
						"japanese": "そんなはずは…",
						"chinese": "不可能吧……",
						"french": "Impossible...",
						"spanish": "Imposible...",
						"vietnamese": "Không thể nào...",
						"thai": "เป็นไปไม่ได้...",
						"hindi": "ऐसा नहीं हो सकता..."
					},
					"speaker": "echo",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "닥쳐! 네 의지대로 될 리 없어!",
						"english": "Silence! It won't go your way!",
						"japanese": "黙れ！お前の思い通りにはさせない！",
						"chinese": "闭嘴！你休想如愿！",
						"french": "Tais-toi ! Ça ne se passera pas comme tu veux !",
						"spanish": "¡Cállate! ¡No será como tú quieres!",
						"vietnamese": "Im đi! Sẽ không theo ý ngươi đâu!",
						"thai": "เงียบไปซะ! มันจะไม่มีทางเป็นไปตามที่แกต้องการ!",
						"hindi": "चुप रहो! यह तुम्हारी मर्ज़ी से नहीं होगा!"
					},
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "압도적인 시스템의 힘에 모든 것이 정지했다.",
						"english": "Overwhelmed by the system's power, everything ceased.",
						"japanese": "圧倒的なシステムの力に、すべてが停止した。",
						"chinese": "在系统压倒性的力量下，一切都停止了。",
						"french": "Face à la puissance écrasante du système, tout s'est arrêté.",
						"spanish": "Ante el poder abrumador del sistema, todo se detuvo.",
						"vietnamese": "Trước sức mạnh áp đảo của hệ thống, mọi thứ đều ngừng lại.",
						"thai": "ทุกสิ่งหยุดนิ่งลงด้วยพลังอันมหาศาลของระบบ",
						"hindi": "सिस्टम की overwhelming शक्ति से, सब कुछ रुक गया।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "미약한 저항이여. 너희의 모든 시도는 예측 범위 내였다.",
						"english": "Feeble resistance. All your attempts were well within my predictions.",
						"japanese": "弱き抵抗よ。お前たちの全ての試みは予測の範囲内だった。",
						"chinese": "微弱的抵抗。你们所有的尝试都在预料之中。",
						"french": "Faible résistance. Toutes vos tentatives étaient dans les limites de mes prédictions.",
						"spanish": "Débil resistencia. Todos vuestros intentos estaban dentro de mis predicciones.",
						"vietnamese": "Sự phản kháng yếu ớt. Mọi nỗ lực của ngươi đều nằm trong dự đoán.",
						"thai": "การต่อต้านที่อ่อนแอ. ความพยายามทั้งหมดของพวกเจ้าอยู่ในขอบเขตที่คาดการณ์ไว้แล้ว.",
						"hindi": "कमज़ोर प्रतिरोध। तुम्हारे सभी प्रयास मेरी भविष्यवाणी के दायरे में थे।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "크윽… 포기하지 않아….",
						"english": "Urgh... I won't give up...",
						"japanese": "くっ… 諦めない…。",
						"chinese": "呃… 我不会放弃的…。",
						"french": "Ugh... Je n'abandonnerai pas...",
						"spanish": "Ugh... No me rendiré...",
						"vietnamese": "Khụ... Ta sẽ không bỏ cuộc...",
						"thai": "อึก... ข้าไม่ยอมแพ้...",
						"hindi": "उफ़... मैं हार नहीं मानूँगा..."
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "이건… 우리의 데이터에 없던 패배예요.",
						"english": "This is... a defeat not in our data.",
						"japanese": "これは… 私たちのデータにはない敗北です。",
						"chinese": "这… 这是我们数据中没有的失败。",
						"french": "C'est... une défaite qui n'était pas dans nos données.",
						"spanish": "Esto es... una derrota que no estaba en nuestros datos.",
						"vietnamese": "Đây là... một thất bại không có trong dữ liệu của chúng ta.",
						"thai": "นี่คือ... ความพ่ายแพ้ที่ไม่อยู่ในข้อมูลของเรา.",
						"hindi": "यह... हमारी डेटा में नहीं थी ऐसी हार।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "echo"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "…겨우 이 정도인가. 다음 단계로 넘어갈 때군.",
						"english": "...Is this all? Time to move to the next phase.",
						"japanese": "…たったこれだけか。次の段階へ進む時だな。",
						"chinese": "……就这点程度吗。是时候进入下一个阶段了。",
						"french": "...C'est tout ce que vous avez ? Il est temps de passer à l'étape suivante.",
						"spanish": "Es solo esto? Es hora de pasar a la siguiente fase.",
						"vietnamese": "...Chỉ đến mức này thôi sao. Đã đến lúc chuyển sang giai đoạn tiếp theo rồi.",
						"thai": "...แค่นี้เองงั้นหรือ? ได้เวลาไปสู่ขั้นต่อไปแล้วสินะ",
						"hindi": "बस इतना ही? अब अगले चरण पर बढ़ने का समय है।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "무슨 소리야! 네 통제는 끝났어!",
						"english": "What are you talking about! Your control is over!",
						"japanese": "何を言ってるんだ！お前の支配は終わったんだ！",
						"chinese": "你说什么！你的控制结束了！",
						"french": "De quoi parles-tu ! Ton contrôle est terminé !",
						"spanish": "¡Qué dices! ¡Tu control ha terminado!",
						"vietnamese": "Ngươi nói gì vậy! Sự kiểm soát của ngươi đã kết thúc rồi!",
						"thai": "พูดอะไรน่ะ! การควบคุมของแกมันจบลงแล้ว!",
						"hindi": "तुम क्या कह रहे हो! तुम्हारा नियंत्रण खत्म हो गया है!"
					}
				},
				{
					"content": {
						"korean": "진정한 통제는… 실패 속에서 완성된다.",
						"english": "True control... is perfected in failure.",
						"japanese": "真の支配は…失敗の中で完成される。",
						"chinese": "真正的控制……是在失败中得以完善的。",
						"french": "Le véritable contrôle... s'accomplit dans l'échec.",
						"spanish": "El verdadero control... se perfecciona en el fracaso.",
						"vietnamese": "Sự kiểm soát thực sự... được hoàn thiện trong thất bại.",
						"thai": "การควบคุมที่แท้จริง... จะสมบูรณ์แบบในความล้มเหลว",
						"hindi": "वास्तविक नियंत्रण... असफलता में पूर्ण होता है।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "echo",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이겼지만… 왠지 찜찜해요.",
						"english": "We won... but something feels off.",
						"japanese": "勝ったけど…なんだか後味が悪い。",
						"chinese": "虽然赢了……但总觉得有些不对劲。",
						"french": "Nous avons gagné... mais j'ai un mauvais pressentiment.",
						"spanish": "Ganamos... pero algo no cuadra.",
						"vietnamese": "Chúng ta thắng rồi... nhưng sao cứ thấy khó chịu.",
						"thai": "ชนะแล้ว... แต่ทำไมรู้สึกไม่สบายใจเลย",
						"hindi": "हम जीत गए... पर कुछ अजीब सा लग रहा है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "echo"
				},
				{
					"content": {
						"korean": "시스템은 잠시 안정을 찾았다. 하지만 에코의 불안감은 가시지 않았다.",
						"english": "The system found temporary stability. But Echo's unease lingered.",
						"japanese": "システムは一時的に安定を取り戻した。しかし、エコーの不安は消えなかった。",
						"chinese": "系统暂时恢复了稳定。但艾蔻的不安并未消散。",
						"french": "Le système a retrouvé une stabilité temporaire. Mais l'inquiétude d'Echo persistait.",
						"spanish": "El sistema encontró estabilidad temporal. Pero la inquietud de Echo persistía.",
						"vietnamese": "Hệ thống tạm thời ổn định trở lại. Nhưng sự bất an của Echo vẫn chưa tan biến.",
						"thai": "ระบบกลับมามีเสถียรภาพชั่วคราว แต่อาการไม่สบายใจของเอคโค่ก็ยังไม่หายไป",
						"hindi": "सिस्टम को अस्थायी स्थिरता मिली। लेकिन इको की बेचैनी बनी रही।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "고장 난 통제는, 아직 끝나지 않았다.",
						"english": "The broken control is not over yet.",
						"japanese": "壊れた支配は、まだ終わっていない。",
						"chinese": "失控尚未结束。",
						"french": "Le contrôle défaillant n'est pas encore terminé.",
						"spanish": "El control averiado, aún no ha terminado.",
						"vietnamese": "Sự kiểm soát bị lỗi, vẫn chưa kết thúc.",
						"thai": "การควบคุมที่บกพร่อง ยังไม่สิ้นสุดลง",
						"hindi": "टूटा हुआ नियंत्रण, अभी खत्म नहीं हुआ है।"
					},
					"emotion": "base"
				}
			]
		}
	]
} as const;
