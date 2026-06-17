export const scenario_snowy_bellus_27_02 = {
	"scenario_id": "snowy_bellus_27_02",
	"order": 2,
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
	"prologue": {
		"korean": [
			"시간은 멈췄지만, 불안은 멈추지 않았다.",
			"벨루스가 본 미래는… 너무나 끔찍했다.",
			"그는 구원을 흉터로 만들고 있었다.",
			"우리는 그 환상을 깨야만 했다."
		],
		"english": [
			"Time stood still, but anxiety did not.",
			"The future Bellus saw... was too horrific.",
			"He was turning salvation into scars.",
			"We had to break that illusion."
		],
		"japanese": [
			"時は止まったが、不安は止まらなかった。",
			"ベルスが見た未来は… あまりにも恐ろしかった。",
			"彼は救済を傷跡に変えようとしていた。",
			"我々はその幻想を打ち破らねばならなかった。"
		],
		"chinese": [
			"时间静止了，但不安并未停止。",
			"贝尔斯所见的未来… 过于可怕了。",
			"他正在将救赎变为伤痕。",
			"我们必须打破那个幻象。"
		],
		"french": [
			"Le temps s'est arrêté, mais l'anxiété, non.",
			"L'avenir que Bellus a vu... était trop horrible.",
			"Il transformait le salut en cicatrices.",
			"Nous devions briser cette illusion."
		],
		"spanish": [
			"El tiempo se detuvo, mas la ansiedad no.",
			"El futuro que Bellus vio... era demasiado horrible.",
			"Él estaba convirtiendo la salvación en cicatrices.",
			"Debíamos romper esa ilusión."
		],
		"vietnamese": [
			"Thời gian ngừng lại, nhưng nỗi bất an thì không.",
			"Tương lai mà Bellus đã thấy... quá kinh hoàng.",
			"Hắn biến sự cứu rỗi thành những vết sẹo.",
			"Chúng ta phải phá vỡ ảo ảnh đó."
		],
		"thai": [
			"เวลาหยุดนิ่ง แต่ความกังวลไม่เคยหยุด",
			"อนาคตที่เบลลัสเห็น... มันช่างน่าสะพรึงกลัว",
			"เขากำลังเปลี่ยนความรอดให้กลายเป็นบาดแผล",
			"เราต้องทำลายภาพลวงตานั้น"
		],
		"hindi": [
			"समय थम गया, पर बेचैनी नहीं थमी।",
			"जो भविष्य बेलस ने देखा... वह बहुत भयानक था।",
			"वह मोक्ष को दाग में बदल रहा था।",
			"हमें उस भ्रम को तोड़ना था।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "얼어붙은 시간의 파편들이 공간을 채웠다.",
						"english": "Fragments of frozen time filled the space.",
						"japanese": "凍てついた時間の破片が空間を満たしていた。",
						"chinese": "冻结的时间碎片充斥着空间。",
						"french": "Des fragments de temps gelé emplissaient l'espace.",
						"spanish": "Fragmentos de tiempo congelado llenaban el espacio.",
						"vietnamese": "Những mảnh vụn thời gian đóng băng tràn ngập không gian.",
						"thai": "เศษเสี้ยวของเวลาที่หยุดนิ่งเติมเต็มพื้นที่",
						"hindi": "जमे हुए समय के टुकड़े अंतरिक्ष में भर गए।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "멈춰버린 시계탑이 보인다.",
						"english": "I see a stopped clock tower.",
						"japanese": "止まった時計塔が見える。",
						"chinese": "我看到一座停滞的钟楼。",
						"french": "Je vois une tour de l'horloge arrêtée.",
						"spanish": "Veo un campanario detenido.",
						"vietnamese": "Tôi thấy một tháp đồng hồ đã dừng.",
						"thai": "ฉันเห็นหอนาฬิกาที่หยุดเดิน",
						"hindi": "मुझे एक रुकी हुई घड़ी मीनार दिखती है।"
					}
				},
				{
					"speaker": "bran",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "bran",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "너희도 그 환상을 보러 왔구나.",
						"english": "So, you've come to see that illusion too.",
						"japanese": "君たちもその幻想を見に来たのか。",
						"chinese": "你们也来看那个幻象了啊。",
						"french": "Vous aussi, vous êtes venus voir cette illusion.",
						"spanish": "Así que, vosotros también habéis venido a ver esa ilusión.",
						"vietnamese": "Vậy ra, các ngươi cũng đến để xem ảo ảnh đó.",
						"thai": "พวกเจ้าก็มาดูภาพลวงตานั้นด้วยสินะ",
						"hindi": "तो, तुम भी उस भ्रम को देखने आए हो।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "누구세요?",
						"english": "Who are you?",
						"japanese": "あなたは誰ですか？",
						"chinese": "您是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "ท่านเป็นใคร?",
						"hindi": "आप कौन हैं?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "bran",
					"type": "speech",
					"content": {
						"korean": "나는 브란. 길 잃은 영혼을 인도하는 자.",
						"english": "I am Bran. The guide of lost souls.",
						"japanese": "私はブラン。道に迷った魂を導く者だ。",
						"chinese": "我是布兰。迷失灵魂的引导者。",
						"french": "Je suis Bran. Le guide des âmes perdues.",
						"spanish": "Soy Bran. El guía de las almas perdidas.",
						"vietnamese": "Ta là Bran. Kẻ dẫn dắt những linh hồn lạc lối.",
						"thai": "ข้าคือแบรน ผู้ชี้นำวิญญาณที่หลงทาง",
						"hindi": "मैं ब्रैन हूँ। भटकी हुई आत्माओं का मार्गदर्शक।"
					},
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
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
					"speaker": "bran",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "벨루스는 모든 것이 흉해지는 미래를 봤어.",
						"english": "Bellus saw a future where everything turned ugly.",
						"japanese": "ベルスはすべてが醜くなる未来を見た。",
						"chinese": "贝尔斯看到了一个万物皆丑的未来。",
						"french": "Bellus a vu un avenir où tout devenait laid.",
						"spanish": "Bellus vio un futuro donde todo se volvía horrible.",
						"vietnamese": "Bellus đã thấy một tương lai nơi mọi thứ trở nên xấu xí.",
						"thai": "เบลลัสเห็นอนาคตที่ทุกสิ่งกลายเป็นน่าเกลียด",
						"hindi": "बेलस ने एक ऐसा भविष्य देखा जहाँ सब कुछ बदसूरत हो गया।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "흉해진다고요?",
						"english": "It turns ugly?",
						"japanese": "醜くなるって？",
						"chinese": "会变丑吗？",
						"french": "Ça deviendrait hideux ?",
						"spanish": "¿Se volvería feo?",
						"vietnamese": "Sẽ trở nên xấu xí ư?",
						"thai": "มันจะน่าเกลียดเหรอคะ?",
						"hindi": "बदसूरत हो जाएगा?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "시간이 흐르면… 모든 아름다움이 부서진대.",
						"english": "As time passes... all beauty shatters.",
						"japanese": "時が流れれば…全ての美しさは砕け散るそうだ。",
						"chinese": "时间流逝…所有的美丽都会破碎。",
						"french": "Avec le temps... toute beauté se brise.",
						"spanish": "Con el tiempo... toda belleza se rompe.",
						"vietnamese": "Khi thời gian trôi qua… mọi vẻ đẹp đều sẽ tan vỡ.",
						"thai": "เมื่อเวลาผ่านไป... ความงามทั้งหมดจะแตกสลาย",
						"hindi": "समय के साथ... हर सुंदरता बिखर जाती है।"
					},
					"speaker": "bran"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그래서 시간을 멈춘 건가?",
						"english": "Is that why he stopped time?",
						"japanese": "それで時間を止めたのか？",
						"chinese": "所以他才停止了时间吗？",
						"french": "C'est pour ça qu'il a arrêté le temps ?",
						"spanish": "¿Por eso detuvo el tiempo?",
						"vietnamese": "Vì vậy anh ta đã ngừng thời gian ư?",
						"thai": "นั่นคือเหตุผลที่เขาหยุดเวลาใช่ไหม?",
						"hindi": "क्या इसीलिए उसने समय रोक दिया?"
					},
					"speaker": "character_1"
				},
				{
					"speaker": "bran",
					"type": "speech",
					"content": {
						"korean": "…그는 그걸 구원이라고 믿어.",
						"english": "...He believes that's salvation.",
						"japanese": "…彼はそれを救済だと信じている。",
						"chinese": "…他相信那是救赎。",
						"french": "...Il croit que c'est le salut.",
						"spanish": "...Él cree que eso es la salvación.",
						"vietnamese": "...Hắn tin đó là sự cứu rỗi.",
						"thai": "...เขาเชื่อว่านั่นคือความรอด",
						"hindi": "...वह इसे मोक्ष मानता है।"
					},
					"emotion": "sad"
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
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "bran"
				},
				{
					"speaker": "bran",
					"type": "speech",
					"content": {
						"korean": "고대 기록을 해독했어. 벨루스가 본 미래는…",
						"english": "I've deciphered ancient records. The future Bellus saw was...",
						"japanese": "古代の記録を解読した。ベルスが見た未来は…",
						"chinese": "我解密了古代记录。贝鲁斯所见的未来是…",
						"french": "J'ai déchiffré les archives anciennes. L'avenir que Bellus a vu était...",
						"spanish": "He descifrado los registros antiguos. El futuro que Bellus vio fue...",
						"vietnamese": "Tôi đã giải mã các ghi chép cổ đại. Tương lai Bellus thấy là…",
						"thai": "ฉันถอดรหัสบันทึกโบราณได้แล้ว อนาคตที่เบลลัสเห็นคือ...",
						"hindi": "मैंने प्राचीन अभिलेखों को समझा है। बेलस ने जो भविष्य देखा, वह था..."
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "브란의 목소리가 낮아졌다.",
						"english": "Bran's voice lowered.",
						"japanese": "ブランの声が低くなった。",
						"chinese": "布兰的声音低沉了下来。",
						"french": "La voix de Bran s'adoucit.",
						"spanish": "La voz de Bran se atenuó.",
						"vietnamese": "Giọng Bran trầm xuống.",
						"thai": "เสียงของแบรนต่ำลง",
						"hindi": "ब्रैन की आवाज़ धीमी हो गई।"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "사랑하는 모든 것이 사라지고, 추악한 형상으로 뒤틀리는 모습.",
						"english": "Everything beloved vanishing, twisting into hideous forms.",
						"japanese": "愛するものが全て消え去り、醜悪な姿に歪む光景。",
						"chinese": "所有挚爱之物都消失，扭曲成丑陋的形态。",
						"french": "Tout ce qu'il aime disparaissant, se tordant en formes hideuses.",
						"spanish": "Todo lo amado desapareciendo, retorciéndose en formas espantosas.",
						"vietnamese": "Mọi thứ yêu quý biến mất, méo mó thành những hình dạng ghê tởm.",
						"thai": "ทุกสิ่งอันเป็นที่รักเลือนหายไป บิดเบี้ยวเป็นรูปลักษณ์ที่น่าเกลียดชัง",
						"hindi": "हर प्रिय वस्तु का गायब होना, कुरूप आकृतियों में विकृत होना।"
					},
					"speaker": "bran"
				},
				{
					"speaker": "character_2",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그게 진짜라고?",
						"english": "Is that real?",
						"japanese": "それが本当だと？",
						"chinese": "那是真的吗？",
						"french": "C'est la vérité ?",
						"spanish": "¿Eso es real?",
						"vietnamese": "Đó là sự thật ư?",
						"thai": "นั่นคือเรื่องจริงเหรอ?",
						"hindi": "क्या वह सच है?"
					}
				},
				{
					"speaker": "bran",
					"type": "speech",
					"content": {
						"korean": "그는 진실로 믿었어. 그리고, 공포에 사로잡혔지.",
						"english": "He truly believed it. And he was gripped by terror.",
						"japanese": "彼はそれを真実だと信じ、恐怖に囚われたのだ。",
						"chinese": "他深信不疑。而且，他被恐惧所俘获。",
						"french": "Il y croyait sincèrement. Et il fut saisi par la terreur.",
						"spanish": "Él lo creyó de verdad. Y fue presa del terror.",
						"vietnamese": "Hắn thực sự tin điều đó. Và bị nỗi sợ hãi chiếm lấy.",
						"thai": "เขาเชื่ออย่างแท้จริง และเขาก็ถูกความหวาดกลัวเข้าครอบงำ",
						"hindi": "उसने सच में विश्वास किया। और वह डर से घिर गया।"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "bran"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이 봉인된 시간은, 벨루스의 거대한 환상이야.",
						"english": "This sealed time is Bellus's grand illusion.",
						"japanese": "この封印された時間は、ベルスの巨大な幻想だ。",
						"chinese": "这个被封印的时间，是贝鲁斯的巨大幻象。",
						"french": "Ce temps scellé est la grande illusion de Bellus.",
						"spanish": "Este tiempo sellado es la gran ilusión de Bellus.",
						"vietnamese": "Thời gian bị phong ấn này là một ảo ảnh khổng lồ của Bellus.",
						"thai": "เวลานี้ที่ถูกผนึกไว้ คือภาพลวงตาอันยิ่งใหญ่ของเบลลัส",
						"hindi": "यह सील किया गया समय, बेलस का एक विशाल भ्रम है।"
					},
					"speaker": "bran"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "환상이라고요?",
						"english": "An illusion?",
						"japanese": "幻想だと？",
						"chinese": "幻象？",
						"french": "Une illusion ?",
						"spanish": "¿Una ilusión?",
						"vietnamese": "Một ảo ảnh ư?",
						"thai": "ภาพลวงตาหรือ?",
						"hindi": "एक भ्रम?"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "파괴될 미래를 막으려다, 그는 스스로를 파괴하고 있어.",
						"english": "Trying to stop a future of destruction, he's destroying himself.",
						"japanese": "破滅の未来を止めようとして、彼は自らを破壊している。",
						"chinese": "他想阻止被摧毁的未来，却在自我毁灭。",
						"french": "En essayant d'arrêter un futur de destruction, il se détruit lui-même.",
						"spanish": "Intentando detener un futuro de destrucción, él se está destruyendo a sí mismo.",
						"vietnamese": "Cố gắng ngăn chặn tương lai bị hủy diệt, anh ta lại đang tự hủy hoại chính mình.",
						"thai": "พยายามจะหยุดยั้งอนาคตแห่งการทำลายล้าง เขากลับกำลังทำลายตัวเอง",
						"hindi": "विनाश के भविष्य को रोकने की कोशिश में, वह खुद को नष्ट कर रहा है।"
					},
					"speaker": "bran"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그럼 우리는 뭘 해야 하죠?",
						"english": "Then what should we do?",
						"japanese": "では、我々は何をすべきか？",
						"chinese": "那我们该怎么办？",
						"french": "Alors, que devrions-nous faire ?",
						"spanish": "Entonces, ¿qué debemos hacer?",
						"vietnamese": "Vậy chúng ta phải làm gì?",
						"thai": "แล้วเราควรทำอะไร?",
						"hindi": "तो हमें क्या करना चाहिए?"
					},
					"speaker": "character_3"
				},
				{
					"speaker": "bran",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "멈춰진 시간을… 다시 흐르게 해야 해. 그게 그의 약점이야.",
						"english": "We must make the stopped time flow again... That is his weakness.",
						"japanese": "止まった時間を…再び流さねばならない。それが彼の弱点だ。",
						"chinese": "我们必须让停止的时间…再次流动。那是他的弱点。",
						"french": "Nous devons faire couler le temps arrêté… C'est sa faiblesse.",
						"spanish": "Debemos hacer que el tiempo detenido… fluya de nuevo. Esa es su debilidad.",
						"vietnamese": "Chúng ta phải làm cho thời gian đã dừng… chảy lại. Đó là điểm yếu của hắn.",
						"thai": "เราต้องทำให้เวลาที่หยุดนิ่ง… ไหลไปอีกครั้ง นั่นคือจุดอ่อนของเขา",
						"hindi": "हमें रुके हुए समय को… फिर से बहाना होगा। वही उसकी कमजोरी है।"
					}
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "중간 보스의 환상이 부서지고, 시간의 파편들이 흩어졌다.",
						"english": "The mid-boss's illusion shattered, and fragments of time scattered.",
						"japanese": "中ボスが作り出した幻想は打ち砕かれ、時間の破片が飛び散った。",
						"chinese": "中级首领的幻象破碎，时间的碎片散落开来。",
						"french": "L'illusion du boss intermédiaire s'est brisée, et des fragments de temps se sont dispersés.",
						"spanish": "La ilusión del jefe intermedio se hizo añicos, y fragmentos de tiempo se dispersaron.",
						"vietnamese": "Ảo ảnh của trùm giữa vỡ tan, và các mảnh thời gian vương vãi.",
						"thai": "ภาพลวงตาของบอสกลางแตกสลาย และเศษเสี้ยวแห่งเวลาก็กระจัดกระจายไป",
						"hindi": "मध्य-बॉस का भ्रम टूट गया, और समय के टुकड़े बिखर गए।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "큭… 이 시간은… 결국… 파괴될…",
						"english": "Gah... This time... will ultimately... be destroyed...",
						"japanese": "「くっ…この時間は…結局…破壊される…」",
						"chinese": "“咳…这段时间…终究…会被摧毁…”",
						"french": "Ugh... Ce temps... finira... par être détruit...",
						"spanish": "Argh... Este tiempo... finalmente... será destruido...",
						"vietnamese": "Khụ... Thời gian này... rốt cuộc... sẽ bị hủy diệt...",
						"thai": "อึก... เวลานี้... ในที่สุด... ก็จะถูกทำลาย...",
						"hindi": "उफ़... यह समय... अंततः... नष्ट हो जाएगा..."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그 미래는 환상일 뿐이야!",
						"english": "That future is nothing but an illusion!",
						"japanese": "「その未来は幻想に過ぎない！」",
						"chinese": "“那个未来不过是幻象！”",
						"french": "Cet avenir n'est qu'une illusion !",
						"spanish": "¡Ese futuro no es más que una ilusión!",
						"vietnamese": "Tương lai đó chỉ là ảo ảnh thôi!",
						"thai": "อนาคตนั้นเป็นแค่ภาพลวงตาเท่านั้น!",
						"hindi": "वह भविष्य केवल एक भ्रम है!"
					},
					"emotion": "happy",
					"speaker": "character_any"
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
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "벨루스는 스스로 가장 찬란한 순간에 시간을 꿰매었지.",
						"english": "Bellus sewed time at its most brilliant moment himself.",
						"japanese": "「ベルスは自ら最も輝かしい瞬間に時間を縫い合わせた。」",
						"chinese": "“贝鲁斯在最辉煌的时刻亲手缝合了时间。”",
						"french": "Bellus a cousu le temps à son moment le plus éclatant.",
						"spanish": "Bellus cosió el tiempo en su momento más brillante.",
						"vietnamese": "Bellus đã tự mình khâu vá thời gian vào khoảnh khắc rực rỡ nhất.",
						"thai": "เบลลัสเย็บเวลาในช่วงเวลาที่รุ่งโรจน์ที่สุดด้วยตัวเอง",
						"hindi": "बेलस ने स्वयं अपने सबसे शानदार पल में समय को सिलाई कर दिया।"
					},
					"speaker": "bran"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "찬란한 순간…?",
						"english": "Brilliant moment...?",
						"japanese": "「輝かしい瞬間…？」",
						"chinese": "“辉煌的时刻…？”",
						"french": "Moment éclatant... ?",
						"spanish": "¿Momento brillante...?",
						"vietnamese": "Khoảnh khắc rực rỡ...?",
						"thai": "ช่วงเวลาที่รุ่งโรจน์...?",
						"hindi": "शानदार पल...?"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "벨루스의 뒤틀린 구원이 점점 더 명확해지고 있었다.",
						"english": "Bellus's twisted salvation was becoming clearer and clearer.",
						"japanese": "「ベルスの歪んだ救済はますます明確になっていった。」",
						"chinese": "“贝鲁斯扭曲的救赎变得越来越清晰。”",
						"french": "La rédemption tordue de Bellus devenait de plus en plus claire.",
						"spanish": "La retorcida salvación de Bellus se estaba volviendo cada vez más clara.",
						"vietnamese": "Sự cứu rỗi méo mó của Bellus ngày càng trở nên rõ ràng.",
						"thai": "การช่วยให้รอดที่บิดเบี้ยวของเบลลัสกำลังชัดเจนขึ้นเรื่อยๆ",
						"hindi": "बेलस की विकृत मुक्ति increasingly स्पष्ट होती जा रही थी।"
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "시간의 환상이 탐험대를 집어삼켰다.",
						"english": "The illusion of time swallowed the expedition team.",
						"japanese": "「時間の幻想が探検隊を飲み込んだ。」",
						"chinese": "“时间的幻象吞噬了探险队。”",
						"french": "L'illusion du temps a englouti l'équipe d'expédition.",
						"spanish": "La ilusión del tiempo devoró al equipo de expedición.",
						"vietnamese": "Ảo ảnh thời gian đã nuốt chửng đội thám hiểm.",
						"thai": "ภาพลวงตาของเวลาได้กลืนกินทีมสำรวจ",
						"hindi": "समय के भ्रम ने अभियान दल को निगल लिया।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "너희도 결국… 파괴될 운명이다!",
						"english": "You too... are ultimately destined for destruction!",
						"japanese": "「お前たちも結局…破壊される運命だ！」",
						"chinese": "“你们也终将…注定被摧毁！”",
						"french": "Vous aussi... êtes finalement destinés à la destruction !",
						"spanish": "¡Vosotros también... estáis finalmente destinados a la destrucción!",
						"vietnamese": "Các ngươi cũng... rốt cuộc sẽ bị hủy diệt!",
						"thai": "พวกเจ้าเองก็... มีชะตากรรมที่จะถูกทำลายในที่สุด!",
						"hindi": "तुम भी... अंततः विनाश के लिए नियत हो!"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "포기할 수 없어!",
						"english": "I can't give up!",
						"japanese": "「諦められない！」",
						"chinese": "“不能放弃！”",
						"french": "Je ne peux pas abandonner !",
						"spanish": "¡No puedo rendirme!",
						"vietnamese": "Không thể từ bỏ!",
						"thai": "ยอมแพ้ไม่ได้!",
						"hindi": "मैं हार नहीं मान सकता!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "멈춰진 시간을 다시 흐르게 할 거야!",
						"english": "I will make the stopped time flow again!",
						"japanese": "「止まった時間を再び流す！」",
						"chinese": "“我会让停滞的时间再次流动！”",
						"french": "Je ferai couler à nouveau le temps arrêté !",
						"spanish": "¡Haré que el tiempo detenido fluya de nuevo!",
						"vietnamese": "Tôi sẽ làm cho thời gian đã dừng lại chảy trở lại!",
						"thai": "ฉันจะทำให้เวลาที่หยุดนิ่งไหลเวียนอีกครั้ง!",
						"hindi": "मैं रुके हुए समय को फिर से प्रवाहित करूँगा!"
					},
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "감히 나의 영원을 방해하려는 어리석은 것들!",
						"english": "Fools who dare to disturb my eternity!",
						"japanese": "よくも私の永遠を邪魔しようなどと、愚かなる者たちめ！",
						"chinese": "竟敢打扰我的永恒，愚蠢的东西！",
						"french": "Imbéciles qui osent troubler mon éternité !",
						"spanish": "¡Necios que osan perturbar mi eternidad!",
						"vietnamese": "Đồ ngốc dám quấy rầy vĩnh hằng của ta!",
						"thai": "พวกโง่เขลาที่กล้ามาขัดขวางนิรันดร์ของข้า!",
						"hindi": "मूर्ख जो मेरे शाश्वत को बाधित करने का साहस करते हैं!"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네 환상을 깨주마!",
						"english": "I'll shatter your illusion!",
						"japanese": "貴様の幻想を打ち砕いてやろう！",
						"chinese": "我会打破你的幻象！",
						"french": "Je briserai ton illusion !",
						"spanish": "¡Destruiré tu ilusión!",
						"vietnamese": "Ta sẽ phá tan ảo ảnh của ngươi!",
						"thai": "ข้าจะทำลายภาพลวงตาของเจ้า!",
						"hindi": "मैं तुम्हारे भ्रम को तोड़ दूंगा!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "파괴될 미래를 보고도 그런 말을 할 수 있나?",
						"english": "Can you still say such things, even after seeing a future of destruction?",
						"japanese": "破壊される未来を見て、まだそんなことが言えるのか？",
						"chinese": "看到将被摧毁的未来，你还能说出这种话吗？",
						"french": "Peux-tu encore dire de telles choses, même après avoir vu un futur de destruction ?",
						"spanish": "¿Todavía puedes decir tales cosas, incluso después de ver un futuro de destrucción?",
						"vietnamese": "Ngươi còn có thể nói những lời đó sao, ngay cả khi đã nhìn thấy một tương lai hủy diệt?",
						"thai": "เจ้ายังพูดเช่นนั้นได้อีกหรือ ทั้งที่ได้เห็นอนาคตแห่งการทำลายล้างแล้ว?",
						"hindi": "विनाश का भविष्य देखने के बाद भी क्या तुम ऐसी बातें कह सकते हो?"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "bran"
				},
				{
					"speaker": "bran",
					"type": "speech",
					"content": {
						"korean": "그는 진실을 보지 못하고 있어!",
						"english": "He cannot see the truth!",
						"japanese": "彼は真実が見えていない！",
						"chinese": "他看不到真相！",
						"french": "Il ne peut pas voir la vérité !",
						"spanish": "¡Él no puede ver la verdad!",
						"vietnamese": "Hắn không thể nhìn thấy sự thật!",
						"thai": "เขาไม่เห็นความจริง!",
						"hindi": "वह सच नहीं देख पा रहा है!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "bran",
					"type": "direction",
					"duration_ms": 400,
					"action": "exit",
					"direction": "down"
				},
				{
					"type": "speech",
					"content": {
						"korean": "시간을 흐르게 하려는 너희야말로 파괴자다!",
						"english": "You who try to make time flow are the true destroyers!",
						"japanese": "時間を流そうとするお前たちこそ、破壊者だ！",
						"chinese": "想让时间流动的你们，才是真正的破坏者！",
						"french": "Ceux d'entre vous qui essayez de faire couler le temps êtes les véritables destructeurs !",
						"spanish": "¡Vosotros, que intentáis que el tiempo fluya, sois los verdaderos destructores!",
						"vietnamese": "Chính các ngươi, những kẻ muốn thời gian trôi chảy, mới là kẻ hủy diệt!",
						"thai": "พวกเจ้าที่พยายามจะทำให้เวลากลับมาเดินนั่นแหละคือผู้ทำลาย!",
						"hindi": "जो तुम समय को बहाने की कोशिश कर रहे हो, वही असली विनाशक हो!"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				}
			]
		}
	]
} as const;
