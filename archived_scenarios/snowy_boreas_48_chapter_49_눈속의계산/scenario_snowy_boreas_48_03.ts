export const scenario_snowy_boreas_48_03 = {
	"scenario_id": "snowy_boreas_48_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"glace": {
			"id": "mon_d0b542b9-aea9-405d-8ee2-4936516a041a",
			"name": {
				"korean": "글라세",
				"english": "Glace",
				"japanese": "グラース",
				"chinese": "格拉斯",
				"french": "Glace",
				"spanish": "Glace",
				"vietnamese": "Gla-xê",
				"thai": "กลาซ",
				"hindi": "ग्लेस"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/81de374f-3422-482e-01ee-dc973da70500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/ef269701-044a-42c5-f7b7-760e9c92a500/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"설원은 모든 것을 얼렸다. 희망마저도.",
			"시스템은 '최적의 경로'를 속삭였다.",
			"하지만 그 길은 언제나 위험으로 향했다.",
			"차가운 계산 속, 균열이 시작된다."
		],
		"english": [
			"The snowfield froze everything. Even hope itself.",
			"The system whispered 'the optimal path'.",
			"But that path always led to danger.",
			"Within cold calculations, a crack begins."
		],
		"japanese": [
			"雪原は全てを凍らせた。希望さえも。",
			"システムは「最適な経路」を囁いた。",
			"しかし、その道は常に危険へと向かった。",
			"冷たい計算の中、亀裂が始まる。"
		],
		"chinese": [
			"雪原冻结了一切。甚至希望。",
			"系统低语着“最优路径”。",
			"然而那条路总是通向危险。",
			"在冰冷的计算中，裂痕开始出现。"
		],
		"french": [
			"L'étendue de neige a tout gelé. Même l'espoir.",
			"Le système a murmuré « le chemin optimal ».",
			"Mais ce chemin menait toujours au danger.",
			"Au milieu des calculs froids, une fissure apparaît."
		],
		"spanish": [
			"El campo de nieve lo congeló todo. Incluso la esperanza.",
			"El sistema susurró 'la ruta óptima'.",
			"Pero ese camino siempre llevaba al peligro.",
			"En medio de fríos cálculos, una grieta comienza."
		],
		"vietnamese": [
			"Cánh đồng tuyết đóng băng mọi thứ. Ngay cả hy vọng.",
			"Hệ thống thì thầm 'lộ trình tối ưu'.",
			"Nhưng con đường đó luôn dẫn đến nguy hiểm.",
			"Giữa những tính toán lạnh lùng, một vết nứt bắt đầu."
		],
		"thai": [
			"ทุ่งหิมะเยือกแข็งทุกสิ่ง แม้กระทั่งความหวัง",
			"ระบบกระซิบ 'เส้นทางที่เหมาะสมที่สุด'",
			"แต่เส้นทางนั้นนำไปสู่อันตรายเสมอ",
			"ท่ามกลางการคำนวณอันเยือกเย็น รอยร้าวเริ่มขึ้น"
		],
		"hindi": [
			"बर्फीले मैदान ने सब कुछ जमा दिया। यहाँ तक कि उम्मीद भी।",
			"सिस्टम ने 'सर्वोत्तम मार्ग' फुसफुसाया।",
			"लेकिन वह रास्ता हमेशा खतरे की ओर ले जाता था।",
			"ठंडी गणनाओं के भीतर, एक दरार शुरू होती है।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "탐사대는 새로운 구역에 진입했다. 매서운 바람이 모든 소리를 삼켰다.",
						"english": "The expedition entered a new zone. The biting wind swallowed all sound.",
						"japanese": "探査隊は新しい区域に進入した。激しい風が全ての音を飲み込んだ。",
						"chinese": "探险队进入了新区域。凛冽的寒风吞噬了所有声音。",
						"french": "L'équipe d'exploration est entrée dans une nouvelle zone. Le vent mordant a englouti tout son.",
						"spanish": "La expedición entró en una nueva zona. El viento cortante se tragó todo sonido.",
						"vietnamese": "Đoàn thám hiểm đã tiến vào một khu vực mới. Gió lạnh buốt nuốt chửng mọi âm thanh.",
						"thai": "คณะสำรวจเข้าสู่พื้นที่ใหม่ ลมที่พัดแรงกลืนกินทุกเสียง",
						"hindi": "अभियान दल ने एक नए क्षेत्र में प्रवेश किया। तेज़ हवा ने सारी आवाज़ें निगल लीं।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "너무 추워. 시스템이 알려준 길 맞아?",
						"english": "It's too cold. Is this the path the system told us about?",
						"japanese": "寒すぎる。システムが教えてくれた道なのか？",
						"chinese": "太冷了。这是系统指引的路吗？",
						"french": "Il fait trop froid. C'est bien le chemin que le système nous a indiqué ?",
						"spanish": "Hace demasiado frío. ¿Es este el camino que nos dijo el sistema?",
						"vietnamese": "Lạnh quá. Đây có phải là con đường hệ thống đã chỉ không?",
						"thai": "หนาวเกินไป นี่คือเส้นทางที่ระบบบอกใช่ไหม?",
						"hindi": "बहुत ठंड है। क्या यह वही रास्ता है जो सिस्टम ने बताया था?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "glace",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "glace",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "시스템은 언제나 최적의 경로를 제시합니다.",
						"english": "The system always suggests the optimal path.",
						"japanese": "システムは常に最適な経路を提示します。",
						"chinese": "系统总是提供最优路径。",
						"french": "Le système suggère toujours le chemin optimal.",
						"spanish": "El sistema siempre sugiere la ruta óptima.",
						"vietnamese": "Hệ thống luôn đề xuất lộ trình tối ưu.",
						"thai": "ระบบจะเสนอเส้นทางที่ดีที่สุดเสมอ",
						"hindi": "सिस्टम हमेशा सर्वोत्तम मार्ग सुझाता है।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "근데 자꾸 위험한 곳으로만 가잖아.",
						"english": "But it keeps leading us to dangerous places.",
						"japanese": "でも、いつも危険な場所にばかり行くじゃないか。",
						"chinese": "可它总是把我们引向危险的地方。",
						"french": "Mais ça nous mène toujours vers des endroits dangereux.",
						"spanish": "Pero siempre nos lleva a lugares peligrosos.",
						"vietnamese": "Nhưng nó cứ dẫn chúng ta đến những nơi nguy hiểm.",
						"thai": "แต่มันมักจะนำเราไปยังที่อันตรายเสมอ",
						"hindi": "लेकिन यह हमें हमेशा खतरनाक जगहों पर ले जाता है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "glace",
					"type": "speech",
					"content": {
						"korean": "감정은 불필요한 오류를 만듭니다.",
						"english": "Emotions create unnecessary errors.",
						"japanese": "感情は不必要なエラーを生み出します。",
						"chinese": "情感会产生不必要的错误。",
						"french": "Les émotions créent des erreurs inutiles.",
						"spanish": "Las emociones crean errores innecesarios.",
						"vietnamese": "Cảm xúc tạo ra những lỗi không cần thiết.",
						"thai": "อารมณ์สร้างข้อผิดพลาดที่ไม่จำเป็น",
						"hindi": "भावनाएं अनावश्यक त्रुटियां पैदा करती हैं।"
					},
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "시스템의 안내는 탐사대를 미궁으로 이끌었다. 한계에 다다랐다.",
						"english": "The system's guidance led the expedition into a labyrinth. They reached their limit.",
						"japanese": "システムの案内は探査隊を迷宮へと導いた。限界に達した。",
						"chinese": "系统的指引将探险队引入了迷宫。他们已达极限。",
						"french": "Les indications du système ont mené l'expédition dans un labyrinthe. Ils ont atteint leurs limites.",
						"spanish": "La guía del sistema llevó a la expedición a un laberinto. Alcanzaron su límite.",
						"vietnamese": "Sự hướng dẫn của hệ thống đã đưa đoàn thám hiểm vào mê cung. Họ đã chạm đến giới hạn.",
						"thai": "คำแนะนำของระบบนำคณะสำรวจเข้าสู่เขาวงกต พวกเขาถึงขีดจำกัดแล้ว",
						"hindi": "सिस्टम के मार्गदर्शन ने अभियान दल को एक भूलभुलैया में धकेल दिया। वे अपनी सीमा तक पहुँच गए थे।"
					}
				},
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "glace",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "시스템! 왜 자꾸 이런 곳으로 보내는 거야? 비효율적이라고!",
						"english": "System! Why do you keep sending me to places like this? It's inefficient!",
						"japanese": "システム！なぜいつもこんな場所に送るんだ？非効率的だろう！",
						"chinese": "系统！你为什么老是把我送到这种地方？太没效率了！",
						"french": "Système ! Pourquoi m'envoies-tu toujours dans des endroits pareils ? C'est inefficace !",
						"spanish": "¡Sistema! ¿Por qué me sigues enviando a lugares como este? ¡Es ineficiente!",
						"vietnamese": "Hệ thống! Sao cứ gửi tôi đến những nơi thế này? Thật là thiếu hiệu quả!",
						"thai": "ระบบ! ทำไมถึงส่งฉันมาที่แบบนี้เรื่อยๆ? มันไม่มีประสิทธิภาพ!",
						"hindi": "सिस्टम! तुम मुझे बार-बार ऐसी जगहों पर क्यों भेजते हो? यह अक्षम है!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "glace",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "단기적 위험은 전체 효율에 기여합니다. 모든 변수는 계산됩니다.",
						"english": "Short-term risks contribute to overall efficiency. All variables are calculated.",
						"japanese": "短期的なリスクは全体効率に貢献します。全ての変数は計算済みです。",
						"chinese": "短期风险有助于整体效率。所有变量均已计算。",
						"french": "Les risques à court terme contribuent à l'efficacité globale. Toutes les variables sont calculées.",
						"spanish": "Los riesgos a corto plazo contribuyen a la eficiencia general. Todas las variables son calculadas.",
						"vietnamese": "Rủi ro ngắn hạn góp phần vào hiệu quả tổng thể. Mọi biến số đều được tính toán.",
						"thai": "ความเสี่ยงระยะสั้นมีส่วนช่วยต่อประสิทธิภาพโดยรวม ตัวแปรทั้งหมดถูกคำนวณแล้ว",
						"hindi": "अल्पकालिक जोखिम समग्र दक्षता में योगदान करते हैं। सभी चर परिकलित हैं।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "말도 안 돼. 이건 그냥 길을 잃은 거나 다름없어.",
						"english": "That's nonsense. This is practically just getting lost.",
						"japanese": "とんでもない。これは道に迷ったのと変わらない。",
						"chinese": "胡说八道。这简直和迷路没什么两样。",
						"french": "C'est absurde. C'est comme si on était juste perdu.",
						"spanish": "Eso es absurdo. Esto es prácticamente como estar perdido.",
						"vietnamese": "Vô lý. Cái này chẳng khác gì bị lạc đường.",
						"thai": "เหลวไหลน่า. นี่มันก็แค่หลงทางเท่านั้นเอง",
						"hindi": "बकवास है। यह बस रास्ता भटकने जैसा है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "glace",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…때로는 저도 이해하기 어려운 계산입니다.",
						"english": "...Sometimes, even I find these calculations difficult to understand.",
						"japanese": "…時には、私にも理解し難い計算です。",
						"chinese": "……有时候，连我也难以理解这些计算。",
						"french": "...Parfois, même moi, je trouve ces calculs difficiles à comprendre.",
						"spanish": "...A veces, incluso a mí me resulta difícil entender estos cálculos.",
						"vietnamese": "...Đôi khi, ngay cả tôi cũng thấy những phép tính này khó hiểu.",
						"thai": "...บางครั้ง แม้แต่ฉันก็ยังพบว่าการคำนวณเหล่านี้เข้าใจยาก",
						"hindi": "...कभी-कभी, मुझे भी ये गणनाएं समझना मुश्किल लगता है।"
					}
				},
				{
					"content": {
						"korean": "오래된 기록에서 발견된 문구입니다. '불필요한 감정은 제거될지니'.",
						"english": "A phrase found in ancient records: 'Unnecessary emotions shall be purged.'",
						"japanese": "古い記録から見つかった文言です。「不必要な感情は排除されるべし」",
						"chinese": "在旧记录中发现的一句话：‘不必要的情感将被清除。’",
						"french": "Une phrase trouvée dans d'anciens registres : 'Les émotions inutiles seront purgées.'",
						"spanish": "Una frase encontrada en registros antiguos: 'Las emociones innecesarias serán purgadas'.",
						"vietnamese": "Một cụm từ được tìm thấy trong các ghi chép cổ: 'Cảm xúc không cần thiết sẽ bị loại bỏ.'",
						"thai": "วลีที่พบในบันทึกเก่าแก่: 'อารมณ์ที่ไม่จำเป็นจะถูกกำจัด'",
						"hindi": "पुराने अभिलेखों में मिला एक वाक्यांश: 'अनावश्यक भावनाएं समाप्त कर दी जाएंगी।'"
					},
					"emotion": "base",
					"speaker": "glace",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그게 대체 무슨 소리야?",
						"english": "What on earth does that mean?",
						"japanese": "それ、一体どういう意味だ？",
						"chinese": "那到底是什么意思？",
						"french": "Qu'est-ce que ça veut dire, au juste ?",
						"spanish": "¡¿Qué demonios significa eso?!",
						"vietnamese": "Thế rốt cuộc là có ý gì?",
						"thai": "นั่นมันหมายความว่าอะไรกันแน่?",
						"hindi": "उसका मतलब क्या है?"
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "끝없는 설원. 시스템의 조언은 점차 기이한 방향으로 흘러갔다.",
						"english": "Endless snowfield. The system's advice gradually drifted into strange directions.",
						"japanese": "果てしない雪原。システムの助言は次第に奇妙な方向へと流れていった。",
						"chinese": "无尽的雪原。系统的建议逐渐走向了奇怪的方向。",
						"french": "Champ de neige infini. Les conseils du système ont progressivement pris des directions étranges.",
						"spanish": "Un campo de nieve interminable. Los consejos del sistema se desviaron gradualmente hacia rumbos extraños.",
						"vietnamese": "Cánh đồng tuyết vô tận. Lời khuyên của hệ thống dần chuyển sang những hướng kỳ lạ.",
						"thai": "ทุ่งหิมะอันไร้ที่สิ้นสุด คำแนะนำของระบบค่อยๆ เปลี่ยนไปในทิศทางที่แปลกประหลาด",
						"hindi": "अंतहीन बर्फीला मैदान। सिस्टम की सलाह धीरे-धीरे अजीब दिशाओं में भटक गई।"
					}
				},
				{
					"type": "direction",
					"speaker": "glace",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "또 막다른 길이야! 시스템의 '최적 경로'는 항상 엉망이잖아!",
						"english": "Another dead end! The system's 'optimal path' is always a mess!",
						"japanese": "また行き止まりか！システムの「最適経路」はいつもめちゃくちゃじゃないか！",
						"chinese": "又是死胡同！系统的‘最佳路径’总是一团糟！",
						"french": "Encore une impasse ! Le 'chemin optimal' du système est toujours un désastre !",
						"spanish": "¡Otro callejón sin salida! ¡El 'camino óptimo' del sistema siempre es un desastre!",
						"vietnamese": "Lại một ngõ cụt nữa! 'Đường đi tối ưu' của hệ thống lúc nào cũng tệ hại!",
						"thai": "ทางตันอีกแล้ว! 'เส้นทางที่ดีที่สุด' ของระบบมันแย่ตลอดเลยนี่นา!",
						"hindi": "फिर से एक बंद गली! सिस्टम का 'इष्टतम मार्ग' हमेशा गड़बड़ होता है!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "데이터에 따르면 이곳이 최단거리입니다. 예측 불가능한 변수 발생이… 계산됩니다.",
						"english": "According to the data, this is the shortest distance. The occurrence of unpredictable variables... is calculated.",
						"japanese": "データによると、ここが最短距離です。予測不可能な変数発生は…計算されます。",
						"chinese": "根据数据显示，这里是最近的距离。不可预测的变量发生……已被计算。",
						"french": "Selon les données, c'est la distance la plus courte. La survenue de variables imprévisibles... est calculée.",
						"spanish": "Según los datos, esta es la distancia más corta. La ocurrencia de variables impredecibles... es calculada.",
						"vietnamese": "Theo dữ liệu, đây là khoảng cách ngắn nhất. Sự xuất hiện của các biến số không thể đoán trước... được tính toán.",
						"thai": "ตามข้อมูลแล้ว ที่นี่คือระยะทางที่สั้นที่สุด การเกิดตัวแปรที่ไม่สามารถคาดเดาได้... ได้รับการคำนวณแล้ว",
						"hindi": "डेटा के अनुसार, यह सबसे कम दूरी है। अप्रत्याशित चर की घटना... की गणना की जाती है।"
					},
					"emotion": "base",
					"speaker": "glace",
					"type": "speech"
				},
				{
					"content": {
						"korean": "예측 불가능하다면서 왜 계산된다고 해? 앞뒤가 안 맞잖아!",
						"english": "If it's unpredictable, why do you say it's calculated? That doesn't make sense!",
						"japanese": "予測不可能だと言いながら、なぜ計算されると言うんだ？話が合わないじゃないか！",
						"chinese": "既然是不可预测的，为什么又说能计算？这不自相矛盾吗！",
						"french": "Si c'est imprévisible, pourquoi dis-tu que c'est calculé ? Ça ne tient pas debout !",
						"spanish": "Si es impredecible, ¿por qué dices que se calcula? ¡No tiene sentido!",
						"vietnamese": "Nếu không thể đoán trước thì sao lại nói là đã tính toán? Chẳng ăn khớp gì cả!",
						"thai": "ถ้ามันคาดเดาไม่ได้ แล้วทำไมถึงบอกว่าคำนวณได้ล่ะ? มันไม่สมเหตุสมผลเลย!",
						"hindi": "अगर यह अप्रत्याशित है, तो तुम क्यों कहते हो कि इसकी गणना की जाती है? यह बेतुका है!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "glace",
					"type": "speech",
					"content": {
						"korean": "…시스템의 계산은 때로 모순되어 보입니다. 저도 그렇게 느낍니다.",
						"english": "...The system's calculations sometimes seem contradictory. I feel it too.",
						"japanese": "...システムの計算は時に矛盾しているように見えます。私もそう感じます。",
						"chinese": "...系统的计算有时看起来是矛盾的。我也这么觉得。",
						"french": "...Les calculs du système semblent parfois contradictoires. Je le ressens aussi.",
						"spanish": "...Los cálculos del sistema a veces parecen contradictorios. Yo también lo siento.",
						"vietnamese": "...Các phép tính của hệ thống đôi khi có vẻ mâu thuẫn. Tôi cũng cảm thấy vậy.",
						"thai": "...การคำนวณของระบบบางครั้งก็ดูขัดแย้ง ผมก็รู้สึกอย่างนั้น",
						"hindi": "...सिस्टम की गणनाएँ कभी-कभी विरोधाभासी लगती हैं। मुझे भी ऐसा ही लगता है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "glace",
					"type": "speech",
					"content": {
						"korean": "저는 모든 모순된 데이터를 기록합니다. 언젠가 필요할 때가 오겠죠.",
						"english": "I record all contradictory data. It will be needed someday.",
						"japanese": "私はすべての矛盾するデータを記録します。いつか必要になるでしょう。",
						"chinese": "我记录下所有矛盾的数据。总有一天会派上用场。",
						"french": "J'enregistre toutes les données contradictoires. Elles seront utiles un jour.",
						"spanish": "Registro todos los datos contradictorios. Algún día serán necesarios.",
						"vietnamese": "Tôi ghi lại tất cả dữ liệu mâu thuẫn. Sẽ có lúc cần đến.",
						"thai": "ผมบันทึกข้อมูลที่ขัดแย้งทั้งหมดไว้ วันหนึ่งมันคงจำเป็น",
						"hindi": "मैं सभी विरोधाभासी डेटा रिकॉर्ड करता हूँ। किसी दिन इसकी आवश्यकता होगी।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "비합리적인 경로 끝, 거대한 그림자가 탐사대를 기다렸다. 시스템의 마지막 계산.",
						"english": "At the end of an irrational path, a colossal shadow awaited the expedition. The system's final calculation.",
						"japanese": "非合理的な道の果て、巨大な影が探査隊を待ち構えていた。システムの最後の計算。",
						"chinese": "在非理性的路径尽头，一个巨大的阴影等待着探险队。系统最后的计算。",
						"french": "Au bout d'un chemin irrationnel, une ombre colossale attendait l'expédition. Le dernier calcul du système.",
						"spanish": "Al final de una ruta irracional, una sombra colosal esperaba a la expedición. El último cálculo del sistema.",
						"vietnamese": "Cuối con đường phi lý, một cái bóng khổng lồ đang chờ đợi đội thám hiểm. Phép tính cuối cùng của hệ thống.",
						"thai": "สุดเส้นทางที่ไม่สมเหตุสมผล เงาขนาดมหึมารอคอยคณะสำรวจ การคำนวณสุดท้ายของระบบ",
						"hindi": "एक अतार्किक मार्ग के अंत में, एक विशाल छाया अभियान का इंतजार कर रही थी। सिस्टम की अंतिम गणना।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "glace",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이런 위험한 함정을 '최적의 경로'라고 보냈다고?",
						"english": "You sent us into this dangerous trap, calling it the 'optimal path'?",
						"japanese": "こんな危険な罠を「最適な経路」だと言って送ったのか？",
						"chinese": "你们竟然把这种危险的陷阱称为“最佳路径”送过来？",
						"french": "Vous nous avez envoyés dans ce piège dangereux, en l'appelant 'le chemin optimal' ?",
						"spanish": "¿Nos enviaste a esta trampa peligrosa, llamándola 'la ruta óptima'?",
						"vietnamese": "Ngươi gửi chúng ta vào cái bẫy nguy hiểm này, gọi nó là 'lộ trình tối ưu'?",
						"thai": "ส่งพวกเรามาติดกับดักอันตรายแบบนี้ แล้วเรียกว่า 'เส้นทางที่ดีที่สุด' เหรอ?",
						"hindi": "तुमने हमें इस खतरनाक जाल में भेजा, इसे 'इष्टतम मार्ग' कहकर?"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "시스템은 이 만남 역시… 계산에 넣었을 것입니다.",
						"english": "The system must have included this encounter in its calculations too.",
						"japanese": "システムはこの遭遇も…計算に入れているはずです。",
						"chinese": "系统肯定也把这次遭遇…计算在内了。",
						"french": "Le système a dû inclure cette rencontre dans ses calculs également.",
						"spanish": "El sistema debe haber incluido este encuentro en sus cálculos también.",
						"vietnamese": "Hệ thống chắc hẳn cũng đã tính toán đến cuộc gặp gỡ này...",
						"thai": "ระบบคงจะคำนวณการเผชิญหน้าครั้งนี้... ไว้แล้วเช่นกัน",
						"hindi": "सिस्टम ने इस मुठभेड़ को भी... अपनी गणना में शामिल किया होगा।"
					},
					"speaker": "glace",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…크르르르…",
						"english": "...Grrrrr...",
						"japanese": "…グルルルル…",
						"chinese": "……嘶吼……",
						"french": "...Grrr...",
						"spanish": "...Grrr...",
						"vietnamese": "...Gừừừ...",
						"thai": "...ครืนนน...",
						"hindi": "...गर्रर्रर्र..."
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "닥쳐! 더 이상 시스템의 꼭두각시 노릇은 안 해!",
						"english": "Shut up! I won't be the system's puppet anymore!",
						"japanese": "黙れ！もうシステムの操り人形にはならない！",
						"chinese": "闭嘴！我再也不会当系统的傀儡了！",
						"french": "Tais-toi ! Je ne serai plus la marionnette du système !",
						"spanish": "¡Cállate! ¡Ya no seré la marioneta del sistema!",
						"vietnamese": "Im đi! Tôi sẽ không làm con rối của hệ thống nữa!",
						"thai": "หุบปาก! ฉันจะไม่เป็นหุ่นเชิดของระบบอีกต่อไปแล้ว!",
						"hindi": "चुप रहो! मैं अब सिस्टम की कठपुतली नहीं बनूँगा!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "저도… 이 데이터는 도저히 납득이 가지 않습니다.",
						"english": "Even I... cannot possibly accept this data.",
						"japanese": "私も…このデータは到底納得できません。",
						"chinese": "就连我…也实在无法接受这份数据。",
						"french": "Même moi... je ne peux absolument pas accepter ces données.",
						"spanish": "Incluso yo... no puedo aceptar estos datos de ninguna manera.",
						"vietnamese": "Ngay cả tôi... cũng không thể chấp nhận dữ liệu này.",
						"thai": "แม้แต่ผม... ก็ไม่สามารถยอมรับข้อมูลนี้ได้เลย",
						"hindi": "मुझे भी... यह डेटा बिल्कुल समझ नहीं आता।"
					},
					"speaker": "glace",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "탐사대는 쓰러졌다. 시스템의 '최적의 경로'는 잔혹한 종착점에 이르렀다.",
						"english": "The expedition fell. The system's 'optimal path' led to a cruel end.",
						"japanese": "探査隊は倒れた。システムの「最適経路」は残酷な終着点に至った。",
						"chinese": "探险队倒下了。系统的“最优路径”通向了残酷的终点。",
						"french": "L'expédition est tombée. La 'voie optimale' du système a mené à une fin cruelle.",
						"spanish": "La expedición cayó. La \"ruta óptima\" del sistema llegó a un cruel final.",
						"vietnamese": "Đoàn thám hiểm đã gục ngã. 'Lộ trình tối ưu' của hệ thống đã dẫn đến một điểm kết thúc tàn khốc.",
						"thai": "ทีมสำรวจล้มลงแล้ว 'เส้นทางที่เหมาะสมที่สุด' ของระบบนำไปสู่จุดจบที่โหดร้าย",
						"hindi": "अभियान दल गिर गया। सिस्टम का 'इष्टतम मार्ग' एक क्रूर अंत तक पहुँच गया।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "너희의… 감정은… 오류였다…",
						"english": "Your... emotions... were an error...",
						"japanese": "君たちの…感情は…エラーだった…",
						"chinese": "你们的……感情……是错误……",
						"french": "Vos… émotions… étaient une erreur…",
						"spanish": "Vuestras… emociones… fueron un error…",
						"vietnamese": "Cảm xúc… của các ngươi… là lỗi…",
						"thai": "อารมณ์… ของพวกเจ้า… คือความผิดพลาด…",
						"hindi": "तुम्हारी… भावनाएँ… एक त्रुटि थीं…"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…아직… 끝나지 않았어.",
						"english": "...It's... not over yet.",
						"japanese": "…まだ…終わってない。",
						"chinese": "……还没……结束。",
						"french": "…Ce n'est… pas encore fini.",
						"spanish": "…Aún… no ha terminado.",
						"vietnamese": "…Chưa… kết thúc đâu.",
						"thai": "…ยัง…ไม่จบ",
						"hindi": "…यह… अभी खत्म नहीं हुआ है।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"speaker": "glace",
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						1
					]
				},
				{
					"content": {
						"korean": "데이터는… 예측대로 흘러갑니다.",
						"english": "The data… flows as predicted.",
						"japanese": "データは…予測通りに流れていく。",
						"chinese": "数据……正如预测般流动。",
						"french": "Les données… se déroulent comme prévu.",
						"spanish": "Los datos… fluyen como se predijo.",
						"vietnamese": "Dữ liệu… chảy theo dự đoán.",
						"thai": "ข้อมูล… เป็นไปตามที่คาดการณ์ไว้",
						"hindi": "डेटा… अनुमान के अनुसार प्रवाहित हो रहा है।"
					},
					"emotion": "base",
					"speaker": "glace",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "다시… 일어설 거야.",
						"english": "I'll… rise again.",
						"japanese": "また…立ち上がるさ。",
						"chinese": "我会……再次站起来。",
						"french": "Je me… relèverai.",
						"spanish": "Me… levantaré de nuevo.",
						"vietnamese": "Ta sẽ… đứng dậy lần nữa.",
						"thai": "จะ… ลุกขึ้นอีกครั้ง",
						"hindi": "मैं… फिर उठूँगा।"
					}
				},
				{
					"speaker": "glace",
					"type": "speech",
					"content": {
						"korean": "다음 계산에서… 어떤 변수를 만들어낼지… 관찰하겠습니다.",
						"english": "I will observe… what variables… you create in the next calculation.",
						"japanese": "次の計算で…どのような変数を生み出すか…観察しましょう。",
						"chinese": "我将观察……你们在下次计算中……会制造出怎样的变数。",
						"french": "J'observerai… quelles variables… vous créerez lors du prochain calcul.",
						"spanish": "Observaré… qué variables… crearéis en el próximo cálculo.",
						"vietnamese": "Ta sẽ quan sát… các ngươi sẽ tạo ra biến số nào… trong lần tính toán tiếp theo.",
						"thai": "จะ… สังเกต… ว่าจะสร้างตัวแปรอะไร… ในการคำนวณครั้งต่อไป",
						"hindi": "मैं देखूँगा… कि अगली गणना में… तुम कौन से चर बनाओगे।"
					},
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 탐사대를 가로막았다. 시스템이 계획한 마지막 시험.",
						"english": "A colossal shadow blocked the expedition's path. The system's final test.",
						"japanese": "巨大な影が探査隊を阻んだ。システムが計画した最後の試験。",
						"chinese": "一个巨大的阴影挡住了探险队的去路。系统计划的最后一次考验。",
						"french": "Une ombre colossale barra la route de l'expédition. Le test final du système.",
						"spanish": "Una sombra colosal bloqueó el camino de la expedición. La prueba final del sistema.",
						"vietnamese": "Một cái bóng khổng lồ chặn đường đội thám hiểm. Thử thách cuối cùng của hệ thống.",
						"thai": "เงาขนาดมหึมาขวางทางคณะสำรวจ การทดสอบสุดท้ายที่ระบบวางแผนไว้",
						"hindi": "एक विशाल छाया ने अभियान का रास्ता रोक दिया। सिस्टम की अंतिम परीक्षा।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "너희의… 데이터는… 오류다…",
						"english": "Your... data... is... an error...",
						"japanese": "お前たちの…データは…エラーだ…",
						"chinese": "你们的……数据……是……错误……",
						"french": "Vos... données... sont... une erreur...",
						"spanish": "Vuestros... datos... son... un error...",
						"vietnamese": "Dữ liệu... của các ngươi... là... lỗi...",
						"thai": "ข้อมูล... ของพวกเจ้า... คือ... ความผิดพลาด...",
						"hindi": "तुम्हारा... डेटा... त्रुटिपूर्ण... है..."
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "더 이상 속지 않아! 네놈의 '계산'은 틀렸어!",
						"english": "I won't be fooled again! Your 'calculations' were flawed!",
						"japanese": "もう騙されない！貴様の『計算』は間違っていた！",
						"chinese": "我不会再上当了！你的‘计算’是错的！",
						"french": "Je ne me laisserai plus berner ! Tes 'calculs' étaient faux !",
						"spanish": "¡Ya no me engañarás! ¡Tus 'cálculos' estaban equivocados!",
						"vietnamese": "Ta sẽ không bị lừa nữa! 'Tính toán' của ngươi đã sai rồi!",
						"thai": "ไม่หลงกลอีกแล้ว! 'การคำนวณ' ของแกมันผิด!",
						"hindi": "अब और नहीं बहकूँगा! तुम्हारी 'गणना' गलत थी!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "glace"
				},
				{
					"content": {
						"korean": "이 데이터는… 시스템조차 통제할 수 없는 오류입니다.",
						"english": "This data... is an error even the system cannot control.",
						"japanese": "このデータは… システムさえ制御できないエラーです。",
						"chinese": "这份数据……是连系统都无法控制的错误。",
						"french": "Ces données... sont une erreur que même le système ne peut contrôler.",
						"spanish": "Estos datos... son un error que ni siquiera el sistema puede controlar.",
						"vietnamese": "Dữ liệu này... là một lỗi mà ngay cả hệ thống cũng không thể kiểm soát.",
						"thai": "ข้อมูลนี้... คือข้อผิดพลาดที่แม้แต่ระบบก็ควบคุมไม่ได้",
						"hindi": "यह डेटा... एक त्रुटि है जिसे सिस्टम भी नियंत्रित नहीं कर सकता।"
					},
					"emotion": "base",
					"speaker": "glace",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "오류든 뭐든, 부숴버릴 거야!",
						"english": "Error or not, I'll smash it!",
						"japanese": "エラーだろうが何だろうが、ぶっ壊してやる！",
						"chinese": "无论是错误还是什么，我都会将其摧毁！",
						"french": "Erreur ou pas, je vais le détruire !",
						"spanish": "¡Error o lo que sea, lo destruiré!",
						"vietnamese": "Lỗi hay gì đi nữa, ta cũng sẽ phá hủy nó!",
						"thai": "จะผิดพลาดหรือไม่ก็ตาม ข้าจะทำลายมันทิ้ง!",
						"hindi": "गलती हो या कुछ भी, मैं इसे तोड़ दूँगा!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "glace",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "저는 이곳의 모든 데이터를 기록하겠습니다.",
						"english": "I will record all data here.",
						"japanese": "私はここにある全てのデータを記録します。",
						"chinese": "我将记录这里的所有数据。",
						"french": "J'enregistrerai toutes les données ici.",
						"spanish": "Registraré todos los datos de aquí.",
						"vietnamese": "Tôi sẽ ghi lại tất cả dữ liệu ở đây.",
						"thai": "ฉันจะบันทึกข้อมูลทั้งหมดที่นี่",
						"hindi": "मैं यहाँ के सभी डेटा रिकॉर्ड करूँगा।"
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 쓰러졌다. 시스템의 '계산'이 어긋나는 순간이었다.",
						"english": "The colossal shadow fell. It was the moment the system's 'calculations' went awry.",
						"japanese": "巨大な影が倒れた。システムの『計算』が狂った瞬間だった。",
						"chinese": "巨大的阴影倒下了。那是系统‘计算’出错的瞬间。",
						"french": "L'ombre colossale s'est effondrée. Ce fut le moment où les 'calculs' du système déraillèrent.",
						"spanish": "La sombra colosal cayó. Fue el momento en que los 'cálculos' del sistema se desviaron.",
						"vietnamese": "Bóng đen khổng lồ đã đổ gục. Đó là khoảnh khắc 'tính toán' của hệ thống đã sai lệch.",
						"thai": "เงายักษ์ล้มลง นั่นเป็นช่วงเวลาที่ 'การคำนวณ' ของระบบผิดพลาด",
						"hindi": "विशाल छाया गिर गई। यह वह क्षण था जब सिस्टम की 'गणना' गलत हो गई।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "겨우 이것으로… 시스템을… 이겼다고 생각하나… 착각이다…",
						"english": "With just this... you think you've beaten the system...? A delusion...",
						"japanese": "たかがこれしきで… システムに… 勝ったとでも… 思うか… 錯覚だ…",
						"chinese": "仅仅凭此……就以为战胜了系统……这是错觉……",
						"french": "Avec juste ça... tu crois avoir vaincu le système...? Une illusion...",
						"spanish": "Con solo esto... ¿crees haber vencido al sistema...? Es una ilusión...",
						"vietnamese": "Chỉ với cái này... ngươi nghĩ đã thắng hệ thống sao...? Sai lầm rồi...",
						"thai": "แค่เท่านี้... เจ้าคิดว่าเอาชนะระบบได้แล้วงั้นรึ... เป็นแค่ภาพลวงตา...",
						"hindi": "बस इसी से... तुम्हें लगता है कि तुमने सिस्टम को हरा दिया है...? यह एक भ्रम है..."
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "끝이야. 네놈도, 시스템도.",
						"english": "It's over. Both you and the system.",
						"japanese": "終わりだ。貴様も、システムも。",
						"chinese": "结束了。你和系统，都一样。",
						"french": "C'est fini. Toi et le système.",
						"spanish": "Se acabó. Tú y el sistema.",
						"vietnamese": "Kết thúc rồi. Cả ngươi và hệ thống.",
						"thai": "จบแล้ว ทั้งแกและระบบ",
						"hindi": "यह खत्म हो गया। तुम भी, और सिस्टम भी।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"spot": [
						3,
						4
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "glace",
					"type": "direction"
				},
				{
					"speaker": "glace",
					"type": "speech",
					"content": {
						"korean": "이 승리는… 시스템의 예측을 벗어났습니다. 중요한 데이터입니다.",
						"english": "This victory... exceeded the system's predictions. This is crucial data.",
						"japanese": "この勝利は… システムの予測を超えました。重要なデータです。",
						"chinese": "这次胜利……超出了系统的预测。这是重要数据。",
						"french": "Cette victoire... a dépassé les prédictions du système. Ce sont des données cruciales.",
						"spanish": "Esta victoria... superó las predicciones del sistema. Son datos importantes.",
						"vietnamese": "Chiến thắng này... đã vượt quá dự đoán của hệ thống. Đây là dữ liệu quan trọng.",
						"thai": "ชัยชนะครั้งนี้... เกินกว่าที่ระบบคาดการณ์ไว้ นี่คือข้อมูลสำคัญ",
						"hindi": "यह जीत... सिस्टम की भविष्यवाणियों से परे थी। यह महत्वपूर्ण डेटा है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "글라세는 모든 것을 기록했다. 비합리적인 승리, 그러나 명백한 진실.",
						"english": "Glace recorded everything. An irrational victory, yet an undeniable truth.",
						"japanese": "グラッセは全てを記録した。非合理的な勝利、しかし明白な真実。",
						"chinese": "格拉斯记录了一切。一场不合理的胜利，却是明确的真相。",
						"french": "Glace a tout enregistré. Une victoire irrationnelle, mais une vérité indéniable.",
						"spanish": "Glace lo registró todo. Una victoria irracional, pero una verdad innegable.",
						"vietnamese": "Glace đã ghi lại mọi thứ. Một chiến thắng phi lý, nhưng là một sự thật hiển nhiên.",
						"thai": "กราเซ่บันทึกทุกสิ่ง ชัยชนะที่ไม่สมเหตุสมผล แต่เป็นความจริงที่ชัดเจน",
						"hindi": "ग्लैस ने सब कुछ रिकॉर्ड किया। एक तर्कहीन जीत, फिर भी एक निर्विवाद सत्य।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "다음 계산은 무엇일까. 탐사대의 희망은 시스템의 예상 밖으로 흘러가기 시작했다.",
						"english": "What will be the next calculation? The expedition's hope began to flow beyond the system's expectations.",
						"japanese": "次の計算は何だろうか。探査隊の希望はシステムの予想外へと流れ始めた。",
						"chinese": "下一次计算会是什么呢？探测队的希望开始流向系统意料之外的地方。",
						"french": "Quel sera le prochain calcul ? L'espoir de l'équipe d'exploration commença à dépasser les attentes du système.",
						"spanish": "¿Cuál será el próximo cálculo? La esperanza del equipo de exploración comenzó a fluir más allá de las expectativas del sistema.",
						"vietnamese": "Phép tính tiếp theo sẽ là gì? Hy vọng của đội thám hiểm bắt đầu vượt ra ngoài dự đoán của hệ thống.",
						"thai": "การคำนวณครั้งต่อไปคืออะไร? ความหวังของทีมสำรวจเริ่มไหลไปนอกเหนือความคาดหมายของระบบ",
						"hindi": "अगली गणना क्या होगी? अन्वेषण दल की आशा सिस्टम की अपेक्षाओं से परे बहने लगी।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 15
		}
	]
} as const;
