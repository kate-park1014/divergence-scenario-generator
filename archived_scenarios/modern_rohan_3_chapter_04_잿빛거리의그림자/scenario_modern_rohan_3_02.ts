export const scenario_modern_rohan_3_02 = {
	"scenario_id": "modern_rohan_3_02",
	"order": 2,
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
			"도심 뒷골목, 사라진 이들을 찾는 그림자가 헤매고 있었다.",
			"거리는 너무나도 깨끗했다. 마치 누군가 모든 흔적을 지운 것처럼.",
			"그리고 그 침묵 속에서, 기묘한 소문들이 피어났다.",
			"그것은 단 한 명의, 반복되는 그림자에 대한 이야기였다."
		],
		"english": [
			"In the city's back alleys, a shadow wandered, searching for the lost.",
			"The streets were impeccably clean. As if someone had erased every trace.",
			"And in that silence, strange rumors began to surface.",
			"It was a story about a single, recurring shadow."
		],
		"japanese": [
			"都心の裏路地で、姿を消した人々を探す影がさまよっていた。",
			"道はあまりにも綺麗だった。まるで誰かが全ての痕跡を消したかのように。",
			"そしてその沈黙の中で、奇妙な噂が広まり始めた。",
			"それは、たった一人の、繰り返される影についての物語だった。"
		],
		"chinese": [
			"在都市的后巷，一个影子徘徊着，寻找那些消失的人。",
			"街道异常干净。仿佛有人抹去了一切痕迹。",
			"在那片寂静中，奇怪的谣言开始滋生。",
			"那是一个关于一个单一、反复出现的影子的故事。"
		],
		"french": [
			"Dans les ruelles sombres de la ville, une ombre errait, cherchant ceux qui avaient disparu.",
			"Les rues étaient impeccablement propres. Comme si quelqu'un avait effacé toutes les traces.",
			"Et dans ce silence, d'étranges rumeurs commencèrent à circuler.",
			"C'était l'histoire d'une ombre unique et récurrente."
		],
		"spanish": [
			"En los callejones de la ciudad, una sombra vagaba, buscando a los desaparecidos.",
			"Las calles estaban impecablemente limpias. Como si alguien hubiera borrado cada rastro.",
			"Y en ese silencio, extraños rumores comenzaron a surgir.",
			"Era la historia de una única sombra recurrente."
		],
		"vietnamese": [
			"Trong những con hẻm sau thành phố, một bóng hình lang thang tìm kiếm những người đã mất.",
			"Những con đường sạch bong. Như thể ai đó đã xóa sạch mọi dấu vết.",
			"Và trong sự im lặng đó, những tin đồn kỳ lạ bắt đầu lan truyền.",
			"Đó là câu chuyện về một bóng hình duy nhất, lặp đi lặp lại."
		],
		"thai": [
			"ในตรอกซอกซอยของเมือง เงาหนึ่งกำลังวนเวียนตามหาผู้ที่หายสาบสูญไป",
			"ถนนสะอาดไร้ที่ติ ราวกับมีใครบางคนลบร่องรอยทั้งหมดออกไป",
			"และในความเงียบงันนั้น ข่าวลือแปลกประหลาดก็เริ่มผุดขึ้น",
			"มันเป็นเรื่องราวของเงาเดียวที่ปรากฏซ้ำแล้วซ้ำเล่า"
		],
		"hindi": [
			"शहर की पिछली गलियों में, एक परछाई खोए हुए लोगों को ढूंढ रही थी।",
			"सड़कें बेदाग़ साफ थीं। जैसे किसी ने हर निशान मिटा दिया हो।",
			"और उस खामोशी में, अजीबोगरीब अफवाहें फैलने लगीं।",
			"यह एक अकेले, बार-बार दिखने वाले साए की कहानी थी।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "dax",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "사라진 사람들… 이 근처에서 마지막으로 목격됐다고 했지.",
						"english": "The missing people... they were last seen around here, right?",
						"japanese": "消えた人々…この近くで最後に目撃されたって言ってたな。",
						"chinese": "那些失踪的人……据说最后一次是在这附近被看到的。",
						"french": "Les personnes disparues... on a dit qu'elles avaient été vues pour la dernière fois par ici, n'est-ce pas ?",
						"spanish": "La gente desaparecida... se dijo que fueron vistos por última vez por aquí, ¿verdad?",
						"vietnamese": "Những người mất tích... được cho là lần cuối cùng xuất hiện ở gần đây, đúng không?",
						"thai": "ผู้คนที่หายไป... ถูกพบเห็นครั้งสุดท้ายแถวนี้ใช่ไหม",
						"hindi": "लापता लोग... उन्हें आखिरी बार यहीं कहीं देखा गया था, है ना?"
					},
					"emotion": "base",
					"speaker": "dax"
				},
				{
					"type": "speech",
					"content": {
						"korean": "여긴 왜 이렇게 조용해? 잿빛 먼지뿐이고.",
						"english": "Why is it so quiet here? Only gray dust.",
						"japanese": "ここはどうしてこんなに静かなんだ？灰色の埃ばかりで。",
						"chinese": "这里怎么这么安静？只有灰蒙蒙的尘土。",
						"french": "Pourquoi est-ce si silencieux ici ? Il n'y a que de la poussière grise.",
						"spanish": "¿Por qué está tan silencioso aquí? Solo polvo gris.",
						"vietnamese": "Sao ở đây im ắng thế này? Chỉ toàn bụi xám xịt.",
						"thai": "ทำไมที่นี่ถึงเงียบสงัดขนาดนี้? มีแต่ฝุ่นสีเทาเต็มไปหมด",
						"hindi": "यहाँ इतनी खामोशी क्यों है? बस भूरी धूल है।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "dax",
					"type": "speech",
					"content": {
						"korean": "상인들에게 몇 가지 들었어. 환경미화원 Ash No.7에 대한 이야기.",
						"english": "I heard a few things from the merchants. Stories about the street cleaner, Ash No.7.",
						"japanese": "商人たちからいくつか聞いたよ。環境美化員、アッシュNo.7についての話だ。",
						"chinese": "我从商人们那里听到了一些事。关于环卫工Ash No.7的故事。",
						"french": "J'ai entendu quelques trucs des marchands. Des histoires sur l'éboueur, Ash No.7.",
						"spanish": "Escuché algunas cosas de los comerciantes. Historias sobre el barrendero, Ash No.7.",
						"vietnamese": "Tôi đã nghe vài điều từ các thương nhân. Những câu chuyện về nhân viên vệ sinh, Ash No.7.",
						"thai": "ฉันได้ยินมาบ้างจากพ่อค้า เรื่องราวเกี่ยวกับพนักงานทำความสะอาด Ash No.7",
						"hindi": "मैंने व्यापारियों से कुछ बातें सुनी हैं। सफाई कर्मचारी ऐश नंबर 7 के बारे में कहानियाँ।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "환경미화원이?",
						"english": "A street cleaner?",
						"japanese": "環境美化員が？",
						"chinese": "环卫工？",
						"french": "Un éboueur ?",
						"spanish": "¿Un barrendero?",
						"vietnamese": "Nhân viên vệ sinh ư?",
						"thai": "พนักงานทำความสะอาดเหรอ?",
						"hindi": "एक सफाई कर्मचारी?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "매일 똑같은 시간에 똑같이 거리를 청소한다고 하더군.",
						"english": "They say he cleans the streets at the exact same time every day, in the exact same way.",
						"japanese": "毎日同じ時間に、同じように通りを清掃するらしい。",
						"chinese": "据说他每天都在相同的时间以相同的方式清扫街道。",
						"french": "On dit qu'il nettoie les rues à la même heure chaque jour, de la même manière.",
						"spanish": "Dicen que limpia las calles a la misma hora todos los días, de la misma manera.",
						"vietnamese": "Người ta nói anh ta dọn dẹp đường phố vào cùng một thời điểm mỗi ngày, y hệt nhau.",
						"thai": "พวกเขาบอกว่าเขาทำความสะอาดถนนในเวลาเดียวกันเป๊ะทุกวัน ด้วยวิธีเดียวกันเป๊ะ",
						"hindi": "वे कहते हैं कि वह हर दिन एक ही समय पर, एक ही तरीके से सड़कों की सफाई करता है।"
					},
					"emotion": "base",
					"speaker": "dax"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "dax",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "똑같은 시간에 똑같이? 그냥 규칙적인 거 아니야?",
						"english": "At the exact same time, in the exact same way? Isn't that just being methodical?",
						"japanese": "同じ時間に同じように？ただ規則正しいだけじゃないのか？",
						"chinese": "相同的时间，相同的方式？那不就是有规律吗？",
						"french": "À la même heure, de la même manière ? N'est-ce pas juste être méthodique ?",
						"spanish": "¿A la misma hora, de la misma manera? ¿No es eso solo ser metódico?",
						"vietnamese": "Cùng một thời điểm, y hệt nhau? Chẳng phải đó chỉ là sự đều đặn thôi sao?",
						"thai": "เวลาเดียวกันเป๊ะ วิธีเดียวกันเป๊ะ? นั่นมันก็แค่ทำตามปกติไม่ใช่เหรอ?",
						"hindi": "एक ही समय पर, एक ही तरीके से? क्या यह सिर्फ नियमितता नहीं है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "문제는 그 이상이야. 말을 걸어도 대답이 없다고 해.",
						"english": "It's more than that. They say it doesn't answer when spoken to.",
						"japanese": "問題はそれ以上だ。話しかけても返事がないらしい。",
						"chinese": "问题不止于此。据说它不回应任何搭话。",
						"french": "C'est plus que ça. On dit qu'il ne répond pas quand on lui parle.",
						"spanish": "Es más que eso. Dicen que no responde cuando le hablas.",
						"vietnamese": "Vấn đề còn hơn thế. Họ nói nó không trả lời khi được hỏi.",
						"thai": "มันมากกว่านั้น พวกเขาบอกว่ามันไม่ตอบสนองเมื่อถูกพูดด้วย",
						"hindi": "मामला उससे भी ज़्यादा गंभीर है। कहते हैं, बात करने पर वो जवाब नहीं देता।"
					},
					"emotion": "base",
					"speaker": "dax"
				},
				{
					"type": "speech",
					"content": {
						"korean": "대답이 없어? 로봇인가?",
						"english": "No answer? A robot?",
						"japanese": "返事がない？ロボットなのか？",
						"chinese": "没有回应？是个机器人吗？",
						"french": "Pas de réponse ? Un robot ?",
						"spanish": "¿Sin respuesta? ¿Es un robot?",
						"vietnamese": "Không trả lời? Là robot à?",
						"thai": "ไม่มีการตอบสนอง? หุ่นยนต์หรือ?",
						"hindi": "कोई जवाब नहीं? क्या वो रोबोट है?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "dax",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "마치 기계처럼 자기 할 일만 반복한다고. 항상 똑같은 동작으로.",
						"english": "Like a machine, it just repeats its tasks. Always the same movements.",
						"japanese": "まるで機械のように、自分のすべきことだけを繰り返す。いつも同じ動作で。",
						"chinese": "就像机器一样，只重复自己的工作。总是相同的动作。",
						"french": "Comme une machine, il ne fait que répéter ses tâches. Toujours les mêmes mouvements.",
						"spanish": "Como una máquina, solo repite sus tareas. Siempre los mismos movimientos.",
						"vietnamese": "Giống như một cỗ máy, nó chỉ lặp đi lặp lại công việc của mình. Luôn luôn với những động tác giống hệt nhau.",
						"thai": "เหมือนเครื่องจักร มันแค่ทำซ้ำๆ แต่งานของมัน การเคลื่อนไหวเดิมๆ เสมอ",
						"hindi": "जैसे कोई मशीन हो, वो बस अपने काम दोहराता रहता है। हमेशा एक जैसे हाव-भाव में।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "dax",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "아무도 대화해본 적이 없다는 Ash No.7...",
						"english": "Ash No.7, who no one has ever spoken to...",
						"japanese": "誰も話したことがないというアッシュNo.7…",
						"chinese": "Ash No.7，从未有人与它对话过…",
						"french": "Ash No.7, à qui personne n'a jamais parlé...",
						"spanish": "Ash No.7, con quien nadie ha hablado jamás...",
						"vietnamese": "Ash No.7, người mà chưa ai từng nói chuyện...",
						"thai": "แอชหมายเลข 7 ผู้ที่ไม่มีใครเคยได้สนทนาด้วยเลย...",
						"hindi": "ऐश नंबर 7, जिससे किसी ने कभी बात नहीं की..."
					},
					"emotion": "base",
					"speaker": "dax"
				},
				{
					"type": "speech",
					"content": {
						"korean": "섬뜩하네. 그런데 또 뭔가 들은 거라도 있어?",
						"english": "Creepy. But did you hear anything else?",
						"japanese": "不気味だね。でも他に何か聞いたことでもある？",
						"chinese": "真让人毛骨悚然。但你还听说了什么吗？",
						"french": "C'est effrayant. Mais tu as entendu autre chose ?",
						"spanish": "Espeluznante. ¿Pero has oído algo más?",
						"vietnamese": "Rợn người thật. Nhưng bạn có nghe thêm điều gì nữa không?",
						"thai": "น่าขนลุกนะ แต่มีอะไรอีกที่ได้ยินมา?",
						"hindi": "डरावना है। पर क्या तुम्हें कुछ और भी सुनने को मिला?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"speaker": "dax",
					"type": "speech",
					"content": {
						"korean": "몇몇 상인들이 밤에 이상한 소리를 들었다고 하더군.",
						"english": "Some merchants said they heard strange noises at night.",
						"japanese": "何人かの商人が夜に奇妙な音を聞いたと言っていたよ。",
						"chinese": "一些商人说他们在夜里听到了奇怪的声音。",
						"french": "Quelques marchands ont dit avoir entendu des bruits étranges la nuit.",
						"spanish": "Algunos mercaderes dijeron que escucharon ruidos extraños por la noche.",
						"vietnamese": "Một vài thương nhân nói rằng họ đã nghe thấy những âm thanh lạ vào ban đêm.",
						"thai": "พ่อค้าบางคนบอกว่าพวกเขาได้ยินเสียงแปลกๆ ในตอนกลางคืน",
						"hindi": "कुछ व्यापारियों ने बताया कि उन्होंने रात में अजीब आवाज़ें सुनीं।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이상한 소리?",
						"english": "Strange noises?",
						"japanese": "奇妙な音？",
						"chinese": "奇怪的声音？",
						"french": "Des bruits étranges ?",
						"spanish": "¿Ruidos extraños?",
						"vietnamese": "Âm thanh lạ ư?",
						"thai": "เสียงแปลกๆ?",
						"hindi": "अजीब आवाज़ें?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "쇠 긁는 소리, 뭔가가 부서지는 듯한 불규칙한 소리... Ash가 사라진 직후에.",
						"english": "Metal scraping, irregular sounds like something breaking... Right after Ash disappeared.",
						"japanese": "金属が擦れる音、何かが壊れるような不規則な音…アッシュが消えた直後に。",
						"chinese": "金属刮擦声，以及某种不规则的破碎声……就在Ash消失之后。",
						"french": "Des bruits de frottement de métal, des sons irréguliers comme quelque chose qui se brise... Juste après la disparition d'Ash.",
						"spanish": "Sonidos de metal raspándose, ruidos irregulares como algo rompiéndose... Justo después de que Ash desapareció.",
						"vietnamese": "Tiếng kim loại cọ xát, những âm thanh bất thường như có thứ gì đó đang vỡ vụn... Ngay sau khi Ash biến mất.",
						"thai": "เสียงโลหะขูดขีด เสียงผิดปกติเหมือนบางสิ่งแตกหัก... หลังจากแอชหายตัวไปไม่นาน",
						"hindi": "धातु के घिसने की आवाज़, कुछ टूटने जैसी अनियमित आवाज़ें... ऐश के गायब होने के तुरंत बाद।"
					},
					"emotion": "sad",
					"speaker": "dax"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "dax",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "Dax는 Ash No.7의 기계적인 패턴과 실종 사건의 연결고리를 직감했다.",
						"english": "Dax instinctively sensed a link between Ash No.7's mechanical patterns and the disappearance.",
						"japanese": "ダックスはアッシュNo.7の機械的なパターンと失踪事件のつながりを直感した。",
						"chinese": "Dax 直觉地感到 Ash No.7 的机械模式与失踪事件之间存在联系。",
						"french": "Dax a instinctivement pressenti un lien entre les schémas mécaniques d'Ash No.7 et sa disparition.",
						"spanish": "Dax intuyó una conexión entre los patrones mecánicos de Ash No.7 y su desaparición.",
						"vietnamese": "Dax trực giác nhận thấy mối liên hệ giữa các mô hình máy móc của Ash No.7 và vụ mất tích.",
						"thai": "แด็กซ์สัมผัสได้ถึงความเชื่อมโยงระหว่างรูปแบบการเคลื่อนไหวแบบเครื่องจักรของแอชหมายเลข 7 และการหายตัวไปของเขา",
						"hindi": "डेक्स ने ऐश नंबर 7 के यांत्रिक पैटर्न और उसके गायब होने की घटना के बीच एक सीधा संबंध महसूस किया।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 불길한 예감… 뭔가 찾을 수 있을 것 같아. 더 깊이 들어가야 해.",
						"english": "This ominous premonition... I think I can find something. I need to go deeper.",
						"japanese": "この不吉な予感…何か見つけられそうだ。もっと深く掘り下げる必要がある。",
						"chinese": "这种不祥的预感……我觉得我能找到些什么。我必须深入调查。",
						"french": "Cette sombre prémonition... Je crois que je peux trouver quelque chose. Je dois aller plus loin.",
						"spanish": "Este ominoso presentimiento... Creo que puedo encontrar algo. Necesito ir más a fondo.",
						"vietnamese": "Điềm báo đáng sợ này... Tôi nghĩ mình có thể tìm thấy điều gì đó. Tôi cần phải đào sâu hơn.",
						"thai": "ลางสังหรณ์อันน่ากลัวนี้... ฉันคิดว่าฉันจะเจออะไรบางอย่าง ฉันต้องเข้าไปลึกกว่านี้",
						"hindi": "ये अशुभ पूर्वाभास... मुझे लगता है कि मैं कुछ ढूँढ सकता हूँ। मुझे और गहराई में जाना होगा।"
					},
					"speaker": "dax",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 잿빛 거리 끝에 뭐가 기다리고 있을까...",
						"english": "What awaits at the end of this grey street...?",
						"japanese": "この灰色の道の先に何が待っているのか...",
						"chinese": "这条灰色街道的尽头，会有什么在等着呢...",
						"french": "Qu'est-ce qui nous attend au bout de cette rue grise...?",
						"spanish": "¿Qué nos esperará al final de esta calle gris...?",
						"vietnamese": "Điều gì đang chờ đợi ở cuối con phố xám xịt này...?",
						"thai": "มีอะไรรออยู่ที่ปลายถนนสีเทาแห่งนี้กันนะ...",
						"hindi": "इस भूरी गली के अंत में क्या इंतजार कर रहा होगा...?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그림자 속에서 거대한 형체가 모습을 드러냈다.",
						"english": "A colossal figure emerged from the shadows.",
						"japanese": "影の中から巨大な影が現れた。",
						"chinese": "一个巨大的身影从阴影中显现出来。",
						"french": "Une forme colossale émergea des ombres.",
						"spanish": "Una figura colosal emergió de las sombras.",
						"vietnamese": "Một hình thể khổng lồ xuất hiện từ trong bóng tối.",
						"thai": "รูปร่างมหึมาปรากฏขึ้นจากเงามืด",
						"hindi": "परछाई में से एक विशाल आकृति उभरी।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "큭… 뭐야 저건?",
						"english": "Ugh... What is that?",
						"japanese": "くっ…あれは何だ？",
						"chinese": "咳…那是什么？",
						"french": "Ugh... Qu'est-ce que c'est que ça ?",
						"spanish": "Uf... ¿Qué es eso?",
						"vietnamese": "Khụ... Cái quái gì thế kia?",
						"thai": "อึก... นั่นอะไรน่ะ?",
						"hindi": "उफ़... वो क्या है?"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "환영한다. 더러운 것을 밟고 온 손님들.",
						"english": "Welcome. Guests who've trod upon the defiled.",
						"japanese": "歓迎する。穢れたものを踏みしめて来た客たちよ。",
						"chinese": "欢迎。你们这些踏着污秽而来的客人。",
						"french": "Bienvenue. Invités qui avez foulé le souillé.",
						"spanish": "Bienvenidos. Huéspedes que han pisado lo impuro.",
						"vietnamese": "Chào mừng. Những vị khách đã giẫm lên thứ dơ bẩn.",
						"thai": "ยินดีต้อนรับ แขกผู้เหยียบย่ำความสกปรกมา",
						"hindi": "स्वागत है। अपवित्र चीज़ों पर चलकर आए मेहमानों।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "더러운 것...? 설마 우리를?",
						"english": "Defiled...? Surely not us?",
						"japanese": "穢れたもの…？まさか、俺たちを？",
						"chinese": "污秽之物…？难道是指我们？",
						"french": "Le souillé...? Sûrement pas nous ?",
						"spanish": "¿Lo impuro...? ¿No seremos nosotros?",
						"vietnamese": "Thứ dơ bẩn...? Không lẽ là chúng ta?",
						"thai": "สกปรก...? ไม่ใช่พวกเราหรอกนะ?",
						"hindi": "अपवित्र...? कहीं हमें तो नहीं?"
					},
					"emotion": "angry",
					"speaker": "character_1"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "정리되지 않은 모든 것이, 더러운 것.",
						"english": "Everything that is not ordered, is defiled.",
						"japanese": "整理されていないもの、全てが穢れている。",
						"chinese": "所有未被整理的，都是污秽之物。",
						"french": "Tout ce qui n'est pas ordonné est souillé.",
						"spanish": "Todo lo que no está ordenado, es impuro.",
						"vietnamese": "Mọi thứ không được sắp xếp đều là thứ dơ bẩn.",
						"thai": "ทุกสิ่งที่ยังไม่ถูกจัดระเบียบคือความสกปรก",
						"hindi": "जो कुछ भी व्यवस्थित नहीं है, वह अपवित्र है।"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 쓰러지자, 일시적인 정적이 찾아왔다.",
						"english": "As the giant shadow fell, a temporary silence descended.",
						"japanese": "巨大な影が倒れると、一時的な静寂が訪れた。",
						"chinese": "当巨大的身影倒下，短暂的寂静降临了。",
						"french": "Alors que l'ombre géante tombait, un silence temporaire s'installa.",
						"spanish": "Al caer la gigantesca sombra, un silencio temporal se apoderó de todo.",
						"vietnamese": "Khi bóng hình khổng lồ đổ xuống, một sự tĩnh lặng tạm thời bao trùm.",
						"thai": "เมื่อเงาขนาดมหึมาล้มลง ความเงียบชั่วขณะก็เข้ามาแทนที่",
						"hindi": "जैसे ही विशालकाय छाया गिरी, एक क्षणिक शांति छा गई।"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…그림자는… 사라지지 않아… 곧… 또 다른 정리가… 시작될 뿐…",
						"english": "...The shadow... it doesn't vanish... Soon... another 'purge'... will merely begin...",
						"japanese": "…影は…消えない…すぐに…また別の整理が…始まるだけ…",
						"chinese": "…影子…不会消失…很快…另一场整理…即将开始…",
						"french": "...L'ombre... ne disparaît pas... Bientôt... une autre 'purification'... commencera simplement...",
						"spanish": "...La sombra... no desaparece... Pronto... otra 'purga'... simplemente comenzará...",
						"vietnamese": "...Bóng tối... không biến mất... Chẳng mấy chốc... một 'sự thanh trừng' khác... sẽ bắt đầu...",
						"thai": "...เงา...ไม่หายไป...ในไม่ช้า...การจัดระเบียบอีกครั้ง...จะเริ่มต้นขึ้นเท่านั้น...",
						"hindi": "...छाया... गायब नहीं होती... जल्द ही... एक और 'सफाई'... बस शुरू होगी..."
					}
				},
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "dax",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "뭐라고? 또 다른 정리?",
						"english": "What? Another purge?",
						"japanese": "何だと？また別の整理だと？",
						"chinese": "什么？又一场整理？",
						"french": "Quoi ? Une autre purification ?",
						"spanish": "¿Qué? ¿Otra purga?",
						"vietnamese": "Gì cơ? Lại một 'sự thanh trừng' nữa sao?",
						"thai": "อะไรนะ? การจัดระเบียบอีกแล้วเหรอ?",
						"hindi": "क्या? एक और सफाई?"
					},
					"emotion": "base",
					"speaker": "dax"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "대체 뭘 의미하는 거야...",
						"english": "What in the world does that mean...",
						"japanese": "一体どういう意味なんだ…",
						"chinese": "到底是什么意思...",
						"french": "Mais qu'est-ce que ça veut dire...",
						"spanish": "¿Qué significa eso, por todos los cielos...?",
						"vietnamese": "Rốt cuộc là có ý gì...",
						"thai": "นั่นมันหมายความว่าอะไรกันแน่...",
						"hindi": "आखिर इसका क्या मतलब है..."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "단서가 흩뿌려진 미스터리는 더욱 깊은 어둠 속으로 빠져들었다.",
						"english": "The mystery, strewn with clues, sank deeper into darkness.",
						"japanese": "手がかりが散りばめられた謎は、さらに深い闇へと落ちていった。",
						"chinese": "线索散落的谜团，坠入了更深的黑暗。",
						"french": "Le mystère, parsemé d'indices, s'enfonça dans une obscurité encore plus profonde.",
						"spanish": "El misterio, salpicado de pistas, se hundió en una oscuridad aún más profunda.",
						"vietnamese": "Bí ẩn, với những manh mối rải rác, chìm sâu hơn vào bóng tối.",
						"thai": "ปริศนาที่เต็มไปด้วยเงื่อนงำ จมดิ่งลงสู่ความมืดมิดยิ่งขึ้น",
						"hindi": "सुरागों से भरा रहस्य, और गहरे अंधकार में डूब गया।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "Dax는 흩어진 단서들을 조합하며 Ash No.7의 그림자를 쫓았다. 그는 모든 것을 정리하고 있었다. 흔적도 없이.",
						"english": "Dax pieced together the scattered clues, chasing the shadow of Ash No.7. He was purging everything. Without a trace.",
						"japanese": "Daxは散らばった手がかりを組み合わせ、Ash No.7の影を追った。彼は全てを整理していた。痕跡も残さずに。",
						"chinese": "Dax组合着零散的线索，追逐着Ash No.7的影子。他正在整理一切。不留痕迹。",
						"french": "Dax rassembla les indices dispersés, traquant l'ombre d'Ash No.7. Il purifiait tout. Sans laisser de trace.",
						"spanish": "Dax unió las pistas dispersas, persiguiendo la sombra de Ash No.7. Él estaba 'purgando' todo. Sin dejar rastro.",
						"vietnamese": "Dax ghép nối các manh mối rải rác, truy đuổi bóng của Ash No.7. Hắn đang 'thanh trừng' mọi thứ. Không để lại dấu vết.",
						"thai": "Dax รวบรวมเบาะแสที่กระจัดกระจาย ไล่ตามเงาของ Ash No.7 เขากำลัง 'จัดระเบียบ' ทุกสิ่ง โดยไม่ทิ้งร่องรอยใดๆ",
						"hindi": "डैक्स ने बिखरे हुए सुरागों को जोड़ा, ऐश नंबर 7 की छाया का पीछा करते हुए। वह सब कुछ 'व्यवस्थित' कर रहा था। बिना किसी निशान के।"
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어둠의 그림자가 탐험대를 집어삼켰다.",
						"english": "The shadow of darkness devoured the expedition team.",
						"japanese": "闇の影が探検隊を飲み込んだ。",
						"chinese": "黑暗的阴影吞噬了探险队。",
						"french": "L'ombre de l'obscurité a englouti l'équipe d'expédition.",
						"spanish": "La sombra de la oscuridad devoró al equipo de expedición.",
						"vietnamese": "Bóng tối nuốt chửng đội thám hiểm.",
						"thai": "เงาแห่งความมืดมิดกลืนกินทีมสำรวจ",
						"hindi": "अंधेरे की छाया ने अभियान दल को निगल लिया।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…불결한 것들… 감히… 정리자의 앞을 막다니…",
						"english": "...Filthy beings... How dare you... obstruct the Purifier's path...",
						"japanese": "…不潔な者どもめ…よくも…整理者の前を阻んだな…",
						"chinese": "…肮脏之物…竟敢…阻挡整理者的去路…",
						"french": "...Créatures impures... Comment osez-vous... barrer le chemin du Purificateur...?",
						"spanish": "...Criaturas inmundas... ¿Cómo osáis... interponeros en el camino del Purificador...?",
						"vietnamese": "...Những thứ bẩn thỉu... Dám... cản đường kẻ 'thanh trừng'...",
						"thai": "...สิ่งสกปรก...บังอาจ...ขัดขวางทางของ 'ผู้จัดระเบียบ'...",
						"hindi": "...अपवित्र प्राणी... तुम्हारी हिम्मत कैसे हुई... 'व्यवस्थापक' का रास्ता रोकने की..."
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "dax",
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "크윽… 아직… 끝나지 않았어!",
						"english": "Ugh... It's not... over yet!",
						"japanese": "くっ…まだ…終わってない！",
						"chinese": "呃…还没…结束！",
						"french": "Argh... Ce n'est pas... encore fini !",
						"spanish": "¡Argh... Todavía... no ha terminado!",
						"vietnamese": "Khụ... Vẫn... chưa kết thúc!",
						"thai": "อึก...ยัง...ไม่จบ!",
						"hindi": "उफ़... यह अभी... खत्म नहीं हुआ है!"
					},
					"emotion": "angry",
					"speaker": "dax"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "다시… 돌아올 거야!",
						"english": "I'll be back!",
						"japanese": "また…戻ってきます！",
						"chinese": "我还会…回来的！",
						"french": "Je reviendrai… !",
						"spanish": "¡Volveré…!",
						"vietnamese": "Ta sẽ… trở lại!",
						"thai": "ฉันจะ… กลับมา!",
						"hindi": "मैं फिर… वापस आऊँगा!"
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "너희도 곧 정리될 것이다. 흔적도 없이.",
						"english": "You too shall soon be tidied up. Without a trace.",
						"japanese": "お前たちもすぐに整理されるだろう。痕跡もなく。",
						"chinese": "你们也很快会被清理干净。不留一丝痕迹。",
						"french": "Vous aussi serez bientôt 'rangés'. Sans laisser de trace.",
						"spanish": "Vosotros también seréis pronto 'ordenados'. Sin dejar rastro.",
						"vietnamese": "Các ngươi cũng sẽ sớm được 'sắp xếp' thôi. Không để lại dấu vết nào.",
						"thai": "พวกเจ้าก็จะถูกจัดระเบียบในไม่ช้า โดยไม่เหลือร่องรอย",
						"hindi": "तुम्हें भी जल्द ही व्यवस्थित कर दिया जाएगा। बिना किसी निशान के।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "dax"
				},
				{
					"type": "speech",
					"content": {
						"korean": "정리? 무슨 소리를 하는 거야!",
						"english": "Tidied up? What are you talking about!",
						"japanese": "整理？何を言ってるんだ！",
						"chinese": "清理？你在说什么鬼话！",
						"french": "'Rangés' ? De quoi parles-tu !",
						"spanish": "¿Ordenados? ¡De qué estás hablando!",
						"vietnamese": "Sắp xếp? Ngươi đang nói cái quái gì vậy!",
						"thai": "จัดระเบียบ? พูดอะไรน่ะ!",
						"hindi": "व्यवस्थित? क्या बकवास कर रहे हो!"
					},
					"speaker": "dax",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 도시에 필요한 건 깨끗함뿐. 너희 같은 오점은 필요 없다.",
						"english": "All this city needs is cleanliness. Stains like you are not needed.",
						"japanese": "この街に必要なのは清潔さだけだ。お前たちのような汚点は不要だ。",
						"chinese": "这座城市只需要整洁。不需要你们这样的污点。",
						"french": "Cette ville n'a besoin que de propreté. Des impuretés comme vous sont inutiles.",
						"spanish": "Esta ciudad solo necesita limpieza. Manchas como vosotros no son necesarias.",
						"vietnamese": "Thành phố này chỉ cần sự sạch sẽ. Những vết ố như các ngươi là không cần thiết.",
						"thai": "สิ่งที่เมืองนี้ต้องการคือความสะอาดเท่านั้น รอยเปื้อนอย่างพวกเจ้าไม่จำเป็น",
						"hindi": "इस शहर को केवल स्वच्छता चाहिए। तुम जैसे धब्बे अनावश्यक हैं।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "헛소리 하지 마! 우리 동료들을 어디로 보낸 거야?",
						"english": "Stop spouting nonsense! Where did you send our comrades?",
						"japanese": "ふざけたこと言うな！俺たちの仲間をどこへやったんだ？",
						"chinese": "别胡说八道！你把我们的同伴弄到哪里去了？",
						"french": "Arrête tes idioties ! Où as-tu envoyé nos compagnons ?",
						"spanish": "¡Deja de decir tonterías! ¿Adónde enviaste a nuestros compañeros?",
						"vietnamese": "Đừng nói nhảm nữa! Ngươi đã đưa đồng đội của chúng ta đi đâu rồi?",
						"thai": "อย่ามาพูดไร้สาระ! พวกพ้องของเราไปไหนแล้ว?",
						"hindi": "बकवास बंद करो! तुमने हमारे साथियों को कहाँ भेजा है?"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "쓸모없는 것은, 사라지는 것이 이치.",
						"english": "What is useless, by nature, vanishes.",
						"japanese": "無用なものは、消え去るのが道理。",
						"chinese": "无用之物，自当消逝。",
						"french": "Ce qui est inutile est destiné à disparaître.",
						"spanish": "Lo inútil, por ley natural, debe desaparecer.",
						"vietnamese": "Thứ vô dụng, lẽ tự nhiên phải biến mất.",
						"thai": "สิ่งไร้ค่า ย่อมต้องหายไปเป็นธรรมดา",
						"hindi": "जो बेकार है, उसका मिटना ही उचित है।"
					}
				}
			]
		}
	]
} as const;
