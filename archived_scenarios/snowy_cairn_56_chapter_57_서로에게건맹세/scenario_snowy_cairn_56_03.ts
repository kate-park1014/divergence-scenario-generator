export const scenario_snowy_cairn_56_03 = {
	"scenario_id": "snowy_cairn_56_03",
	"order": 3,
	"act": "rising",
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
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "험난한 돌무덤을 벗어나, 골짜기에 잠시 정적이 흘렀다.",
						"english": "Emerging from the harsh stone tombs, a brief silence fell upon the valley.",
						"japanese": "険しい石塚を抜け、谷に束の間の静寂が訪れた。",
						"chinese": "摆脱了险峻的石冢，山谷中暂时陷入寂静。",
						"french": "Sortant des tombes de pierre ardues, un bref silence s'installa dans la vallée.",
						"spanish": "Saliendo de las duras tumbas de piedra, un breve silencio cayó sobre el valle.",
						"vietnamese": "Thoát khỏi những ngôi mộ đá hiểm trở, sự tĩnh lặng ngắn ngủi bao trùm thung lũng.",
						"thai": "หลังจากหลุดพ้นจากสุสานหินอันโหดร้าย ความเงียบงันก็ปกคลุมหุบเขาชั่วขณะ",
						"hindi": "कठोर पत्थर की कब्रों से निकलकर, घाटी में एक पल के लिए सन्नाटा छा गया।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…여기서 잠시 쉬어가자.",
						"english": "...Let's rest here for a bit.",
						"japanese": "…ここで少し休んでいこう。",
						"chinese": "……我们在这里稍作休息吧。",
						"french": "...Reposeons-nous ici un instant.",
						"spanish": "...Descansemos aquí un rato.",
						"vietnamese": "…Hãy nghỉ ngơi ở đây một lát.",
						"thai": "...พักตรงนี้สักครู่เถอะ",
						"hindi": "...चलो यहाँ थोड़ी देर आराम करें।"
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "eira",
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "왔군요. 당신들의 이야기를 들었습니다.",
						"english": "You've arrived. I've heard your stories.",
						"japanese": "来ましたね。あなたたちの話は聞いています。",
						"chinese": "你们来了。我听说了你们的故事。",
						"french": "Vous êtes arrivés. J'ai entendu vos histoires.",
						"spanish": "Han llegado. He oído sus historias.",
						"vietnamese": "Các bạn đã đến. Tôi đã nghe về câu chuyện của các bạn.",
						"thai": "ท่านมาแล้วสินะ ข้าได้ยินเรื่องราวของพวกท่านมาบ้าง",
						"hindi": "आप आ गए। मैंने आपकी कहानियाँ सुनी हैं।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "누구지?",
						"english": "Who are you?",
						"japanese": "誰だ？",
						"chinese": "你是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "ใครน่ะ?",
						"hindi": "कौन हो तुम?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "저는 에이라. 잊힌 서약을 기록하는 자입니다.",
						"english": "I am Eira. The one who records forgotten pacts.",
						"japanese": "私はエイラ。忘れられた誓約を記録する者です。",
						"chinese": "我是艾拉。记录被遗忘誓约之人。",
						"french": "Je suis Eira. Celle qui enregistre les pactes oubliés.",
						"spanish": "Soy Eira. La que registra los pactos olvidados.",
						"vietnamese": "Tôi là Eira. Người ghi chép những lời thề đã lãng quên.",
						"thai": "ข้าคือเอร่า ผู้บันทึกพันธสัญญาที่ถูกลืม",
						"hindi": "मैं एरा हूँ। भूली हुई प्रतिज्ञाओं को दर्ज करने वाली।"
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "당신들의 진심을 새기러 왔어요.",
						"english": "I've come to engrave your true intentions.",
						"japanese": "あなたたちの真心を刻みに来ました。",
						"chinese": "我来是为了刻下你们的真心。",
						"french": "Je suis venue pour graver votre sincérité.",
						"spanish": "He venido a grabar su verdadera intención.",
						"vietnamese": "Tôi đến để khắc ghi tấm lòng chân thật của các bạn.",
						"thai": "ข้ามาเพื่อจารึกความจริงใจของพวกท่าน",
						"hindi": "मैं आपकी सच्चाई को अंकित करने आया हूँ।"
					},
					"type": "speech",
					"speaker": "eira"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "eira",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "맹세는 입에 올리기 전에, 그 무게부터 재야 합니다.",
						"english": "Before uttering an oath, one must weigh its gravity.",
						"japanese": "誓いを口にする前に、その重さを量るべきです。",
						"chinese": "誓言出口前，需先衡量其分量。",
						"french": "Avant de prononcer un serment, il faut en peser le poids.",
						"spanish": "Antes de pronunciar un juramento, hay que sopesar su peso.",
						"vietnamese": "Trước khi thốt ra lời thề, phải cân nhắc trọng lượng của nó.",
						"thai": "ก่อนที่จะเอ่ยคำสาบาน ควรกะน้ำหนักของมันเสียก่อน",
						"hindi": "शपथ लेने से पहले, उसके महत्व को तौलना चाहिए।"
					}
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "난 끝까지 함께 갈 거야.",
						"english": "I'll be with you until the very end.",
						"japanese": "私は最後まで共に行くでしょう。",
						"chinese": "我会陪你走到最后。",
						"french": "Je resterai avec vous jusqu'au bout.",
						"spanish": "Iré contigo hasta el final.",
						"vietnamese": "Tôi sẽ đi cùng bạn đến cùng.",
						"thai": "ฉันจะอยู่กับคุณจนจบ",
						"hindi": "मैं अंत तक तुम्हारे साथ रहूँगा।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "나도 이 길의 끝을 봐야겠어.",
						"english": "I must see the end of this path too.",
						"japanese": "私もこの道の終わりを見届けなければなりません。",
						"chinese": "我也要看看这条路的尽头。",
						"french": "Je dois aussi voir la fin de ce chemin.",
						"spanish": "Yo también debo ver el final de este camino.",
						"vietnamese": "Tôi cũng phải thấy được kết thúc của con đường này.",
						"thai": "ฉันก็ต้องเห็นจุดสิ้นสุดของเส้นทางนี้เหมือนกัน",
						"hindi": "मुझे भी इस राह का अंत देखना है।"
					}
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "좋아요. 제가 당신들의 약속을 기록하겠습니다.",
						"english": "Very well. I shall record your promises.",
						"japanese": "承知いたしました。あなたたちの約束を記録します。",
						"chinese": "好的。我将记录下你们的承诺。",
						"french": "Très bien. Je vais enregistrer vos promesses.",
						"spanish": "De acuerdo. Registraré sus promesas.",
						"vietnamese": "Được thôi. Tôi sẽ ghi lại lời hứa của các bạn.",
						"thai": "ได้เลย ฉันจะบันทึกคำสัญญาของพวกคุณ",
						"hindi": "ठीक है। मैं आपकी प्रतिज्ञाओं को दर्ज करूँगा।"
					},
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "많은 맹세가 시간이 지나 깨어지곤 했죠.",
						"english": "Many vows have been broken over time.",
						"japanese": "多くの誓いは時と共に破られてきました。",
						"chinese": "许多誓言都随着时间而破碎。",
						"french": "De nombreux serments ont été rompus avec le temps.",
						"spanish": "Muchos juramentos se han roto con el tiempo.",
						"vietnamese": "Nhiều lời thề đã bị phá vỡ theo thời gian.",
						"thai": "คำสาบานมากมายถูกทำลายไปตามกาลเวลา",
						"hindi": "समय के साथ कई शपथें टूट गई हैं।"
					},
					"type": "speech",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "우리의 약속은 다를 거야.",
						"english": "Our promise will be different.",
						"japanese": "私たちの約束は違うでしょう。",
						"chinese": "我们的承诺会不同。",
						"french": "Notre promesse sera différente.",
						"spanish": "Nuestra promesa será diferente.",
						"vietnamese": "Lời hứa của chúng ta sẽ khác.",
						"thai": "คำสัญญาของเราจะไม่เหมือนกัน",
						"hindi": "हमारा वादा अलग होगा।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "이건 깨어진 약속과는 달라요. 진심이니까요.",
						"english": "This is different from a broken promise. It's sincere.",
						"japanese": "これは破られた約束とは違います。本心だからです。",
						"chinese": "这与破碎的承诺不同。因为这是真心。",
						"french": "Ce n'est pas une promesse rompue. C'est sincère.",
						"spanish": "Esto es diferente de una promesa rota. Es sincero.",
						"vietnamese": "Điều này khác với lời hứa bị phá vỡ. Vì nó là chân thành.",
						"thai": "นี่ไม่ใช่คำสัญญาที่แตกหัก เพราะมันมาจากใจจริง",
						"hindi": "यह टूटे हुए वादे से अलग है। यह सच्चा है।"
					}
				},
				{
					"content": {
						"korean": "기록하겠습니다. 당신들의 변치 않을 진심을.",
						"english": "I shall record your unwavering sincerity.",
						"japanese": "記録しましょう。あなたたちの変わらぬ真心を。",
						"chinese": "我将记录下你们永不改变的真心。",
						"french": "Je vais enregistrer votre sincérité inébranlable.",
						"spanish": "Registraré su sinceridad inquebrantable.",
						"vietnamese": "Tôi sẽ ghi lại tấm lòng chân thành không đổi của các bạn.",
						"thai": "ฉันจะบันทึกความจริงใจที่ไม่เปลี่ยนแปลงของพวกคุณ",
						"hindi": "मैं आपकी अटूट ईमानदारी को दर्ज करूँगा।"
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						4,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "이제 기록은 끝났습니다.",
						"english": "The recording is now complete.",
						"japanese": "記録はこれで終わりです。",
						"chinese": "记录已完成。",
						"french": "L'enregistrement est maintenant terminé.",
						"spanish": "El registro ha terminado.",
						"vietnamese": "Việc ghi chép đã hoàn tất.",
						"thai": "การบันทึกเสร็จสิ้นแล้ว",
						"hindi": "अब रिकॉर्डिंग पूरी हो चुकी है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…우리가 맹세한 대로.",
						"english": "...As we vowed.",
						"japanese": "…私たちが誓った通りに。",
						"chinese": "……如我们所誓。",
						"french": "...Comme nous l'avons juré.",
						"spanish": "...Como juramos.",
						"vietnamese": "...Như chúng ta đã thề.",
						"thai": "...ตามที่เราสาบานไว้",
						"hindi": "...जैसा हमने शपथ ली थी।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "멀리, 돌무덤의 푸른빛이 미세하게 깜빡였다.",
						"english": "In the distance, the stone cairn's blue light flickered faintly.",
						"japanese": "遠くで、石塚の青い光が微かに瞬いた。",
						"chinese": "远处，石冢的蓝光微弱地闪烁着。",
						"french": "Au loin, la lumière bleue du cairn vacillait faiblement.",
						"spanish": "En la distancia, la luz azul del túmulo parpadeó débilmente.",
						"vietnamese": "Xa xa, ánh sáng xanh từ mộ đá nhấp nháy yếu ớt.",
						"thai": "ไกลออกไป แสงสีน้ำเงินจากกองหินระยิบระยับจางๆ",
						"hindi": "दूर, पत्थरों के ढेर की नीली रोशनी हल्की-सी टिमटिमा रही थी।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 맹세가 당신들의 길을 밝혀줄 겁니다.",
						"english": "This oath will light your way.",
						"japanese": "この誓いが、あなたたちの道を照らすだろう。",
						"chinese": "这个誓言将照亮你们的道路。",
						"french": "Ce serment éclairera votre chemin.",
						"spanish": "Este juramento iluminará vuestro camino.",
						"vietnamese": "Lời thề này sẽ soi sáng con đường của các bạn.",
						"thai": "คำสาบานนี้จะนำทางพวกเจ้า",
						"hindi": "यह प्रतिज्ञा तुम्हारा मार्ग प्रशस्त करेगी।"
					},
					"speaker": "eira",
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 이 약속의 힘인가…!",
						"english": "Ugh... Is this the power of this promise...!",
						"japanese": "くっ…この約束の力か…！",
						"chinese": "呃…这是约定的力量吗…！",
						"french": "Ugh... Est-ce le pouvoir de cette promesse... !",
						"spanish": "Ugh... ¿Es este el poder de esta promesa...!",
						"vietnamese": "Khụ... Đây là sức mạnh của lời hứa này sao...!",
						"thai": "อึก...นี่คือพลังแห่งคำมั่นสัญญานั้นหรือ...!",
						"hindi": "उफ़… क्या यह इस वादे की शक्ति है…!"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "우리의 맹세는 깨지지 않아.",
						"english": "Our oath remains unbroken.",
						"japanese": "我らの誓いは、決して破られない。",
						"chinese": "我们的誓言不会被打破。",
						"french": "Notre serment ne sera pas brisé.",
						"spanish": "Nuestro juramento permanece intacto.",
						"vietnamese": "Lời thề của chúng ta sẽ không bị phá vỡ.",
						"thai": "คำสาบานของเราไม่มีวันแตกสลาย",
						"hindi": "हमारी प्रतिज्ञा अटूट है।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "거대한 그림자는 사라졌다. 그러나 길은 더욱 깊어졌다.",
						"english": "The colossal shadow vanished. Yet the path delved deeper.",
						"japanese": "巨大な影は消え去った。しかし道はさらに深くなった。",
						"chinese": "巨大的身影消失了。然而道路却更加深入。",
						"french": "L'ombre colossale disparut. Pourtant, le chemin s'enfonça davantage.",
						"spanish": "La sombra colosal se desvaneció. Pero el camino se hizo más profundo.",
						"vietnamese": "Bóng đen khổng lồ biến mất. Nhưng con đường lại càng sâu hơn.",
						"thai": "เงาขนาดมหึมาหายไปแล้ว แต่เส้นทางกลับลึกขึ้นกว่าเดิม",
						"hindi": "विशाल छाया गायब हो गई। लेकिन रास्ता और गहरा हो गया।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "새겨진 서약은, 다음 시험을 향해 나아갈 힘이 되었다.",
						"english": "The engraved vow became the strength to face the next trial.",
						"japanese": "刻まれた誓約は、次の試練へ進む力となった。",
						"chinese": "铭刻的誓约，成为了迈向下一个考验的力量。",
						"french": "Le serment gravé devint la force de progresser vers la prochaine épreuve.",
						"spanish": "El pacto grabado se convirtió en la fuerza para avanzar hacia la próxima prueba.",
						"vietnamese": "Lời thề khắc sâu trở thành sức mạnh để tiến tới thử thách tiếp theo.",
						"thai": "คำสาบานที่จารึกไว้ ได้กลายเป็นพลังเพื่อก้าวสู่บททดสอบต่อไป",
						"hindi": "उत्कीर्ण प्रतिज्ञा, अगले परीक्षण की ओर बढ़ने की शक्ति बन गई।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "깊은 곳, 거대한 그림자가 길을 막았다.",
						"english": "In the depths, a colossal shadow blocked the path.",
						"japanese": "深き場所、巨大な影が道を阻んだ。",
						"chinese": "深处，一道巨大的身影挡住了去路。",
						"french": "Dans les profondeurs, une ombre colossale barra le chemin.",
						"spanish": "En las profundidades, una sombra colosal bloqueó el camino.",
						"vietnamese": "Sâu thẳm bên trong, một bóng đen khổng lồ chặn lối.",
						"thai": "ในส่วนลึก เงาขนาดมหึมาขวางทางไว้",
						"hindi": "गहराई में, एक विशाल छाया ने मार्ग अवरुद्ध कर दिया।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…감히 여기까지 왔는가.",
						"english": "...You dare come this far?",
						"japanese": "…よくもここまで来たな。",
						"chinese": "……竟敢来到此处。",
						"french": "...Oserez-vous venir jusqu'ici ?",
						"spanish": "...¿Osáis llegar hasta aquí?",
						"vietnamese": "...Dám đến tận đây sao.",
						"thai": "...กล้าดียังไงถึงมาได้ไกลขนาดนี้",
						"hindi": "क्या तुम्हारी इतनी हिम्मत हुई कि तुम यहाँ तक आ गए?"
					}
				},
				{
					"content": {
						"korean": "물러서. 우린 멈추지 않아.",
						"english": "Stand aside. We won't stop.",
						"japanese": "退け。我らは止まらない。",
						"chinese": "退下。我们不会停下。",
						"french": "Reculez. Nous ne nous arrêterons pas.",
						"spanish": "Retroceded. No nos detendremos.",
						"vietnamese": "Tránh ra. Chúng ta sẽ không dừng lại.",
						"thai": "ถอยไป! เราจะไม่หยุด",
						"hindi": "पीछे हट जाओ। हम रुकेंगे नहीं।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "하찮은 맹세 따위, 부서질 뿐이다.",
						"english": "A trivial oath will merely shatter.",
						"japanese": "くだらぬ誓いなど、ただ砕け散るのみ。",
						"chinese": "卑微的誓言，只会破碎。",
						"french": "Un serment insignifiant ne fera que se briser.",
						"spanish": "Un juramento insignificante solo se hará añicos.",
						"vietnamese": "Lời thề hèn mọn đó, sẽ chỉ vỡ tan mà thôi.",
						"thai": "คำสาบานไร้ค่าเช่นนั้น มีแต่จะแหลกสลาย",
						"hindi": "एक तुच्छ प्रतिज्ञा, बस टूट जाएगी।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "약속은 허상일 뿐. 결국 부서질 것이다.",
						"english": "Promises are illusions. They will break eventually.",
						"japanese": "約束は幻想に過ぎない。結局は壊れるだろう。",
						"chinese": "承诺只是幻象。终将破碎。",
						"french": "Les promesses ne sont qu'illusions. Elles finiront par se briser.",
						"spanish": "Las promesas son solo ilusiones. Al final, se romperán.",
						"vietnamese": "Lời hứa chỉ là ảo ảnh. Cuối cùng rồi sẽ tan vỡ.",
						"thai": "คำสัญญาเป็นเพียงภาพลวงตา สุดท้ายมันจะแตกสลาย",
						"hindi": "वादे सिर्फ भ्रम हैं। वे अंततः टूट जाएँगे।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아니. 우린 다시 일어설 거야.",
						"english": "No. We will rise again.",
						"japanese": "いや。私たちはまた立ち上がる。",
						"chinese": "不。我们会再次崛起。",
						"french": "Non. Nous nous relèverons.",
						"spanish": "No. Nos levantaremos de nuevo.",
						"vietnamese": "Không. Chúng ta sẽ đứng dậy lần nữa.",
						"thai": "ไม่ เราจะลุกขึ้นอีกครั้ง",
						"hindi": "नहीं। हम फिर उठेंगे।"
					}
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"차가운 시험을 벗어나, 잠시 숨을 고르는 시간.",
			"동행은 굳건한 맹세로 이어진다.",
			"잊힌 기록자가 그 진심을 새긴다.",
			"깨지지 않을, 영원한 서약처럼."
		],
		"english": [
			"Escaping the cold trials, a moment to catch your breath.",
			"Companionship bound by steadfast vows.",
			"The forgotten chronicler engraves their true intentions.",
			"Like an unbreakable, eternal pact."
		],
		"japanese": [
			"冷たい試練を抜け、一息つく時間。",
			"同行は固い誓いで結ばれる。",
			"忘れられた記録者がその真心を刻む。",
			"破られることのない、永遠の誓いのように。"
		],
		"chinese": [
			"摆脱了冰冷的考验，是时候喘口气了。",
			"同行以坚定的誓言相连。",
			"被遗忘的记录者刻下那份真心。",
			"如同永不破碎的永恒誓约。"
		],
		"french": [
			"Échappant aux rudes épreuves, un instant pour reprendre son souffle.",
			"La compagnie est liée par de solides serments.",
			"Le chroniqueur oublié grave leur sincérité.",
			"Comme un serment éternel et incassable."
		],
		"spanish": [
			"Escapando de las frías pruebas, un momento para recuperar el aliento.",
			"La compañía unida por firmes promesas.",
			"El cronista olvidado graba su verdadera intención.",
			"Como un pacto eterno e inquebrantable."
		],
		"vietnamese": [
			"Thoát khỏi thử thách lạnh giá, thời gian để lấy lại hơi.",
			"Đồng hành gắn kết bởi lời thề kiên định.",
			"Người ghi chép lãng quên khắc ghi tấm lòng chân thật.",
			"Như một lời thề vĩnh cửu, không thể phá vỡ."
		],
		"thai": [
			"หลุดพ้นจากการทดสอบอันหนาวเหน็บ ได้พักหายใจชั่วครู่",
			"การเดินทางที่ผูกพันด้วยคำมั่นสัญญาอันแน่วแน่",
			"ผู้บันทึกที่ถูกลืมจะจารึกความจริงใจนั้น",
			"ดุจคำปฏิญาณนิรันดร์ที่ไม่มีวันแตกสลาย"
		],
		"hindi": [
			"कठोर परीक्षाओं से बचकर, एक पल सांस लेने का।",
			"साथ एक दृढ़ प्रतिज्ञा से जुड़ा है।",
			"भूला हुआ इतिहासकार उनकी सच्चाई को अंकित करता है।",
			"एक अटूट, शाश्वत प्रतिज्ञा की तरह।"
		]
	}
} as const;
