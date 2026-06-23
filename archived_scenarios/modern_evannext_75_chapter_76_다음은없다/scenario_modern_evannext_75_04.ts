export const scenario_modern_evannext_75_04 = {
	"scenario_id": "modern_evannext_75_04",
	"order": 4,
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "모든 것이 제자리. 익숙한 풍경, 익숙한 절망.",
						"english": "Everything in its place. Familiar scenery, familiar despair.",
						"japanese": "すべてが定位置に。見慣れた風景、見慣れた絶望。",
						"chinese": "一切就绪。熟悉的风景，熟悉的绝望。",
						"french": "Tout est à sa place. Paysage familier, désespoir familier.",
						"spanish": "Todo en su sitio. Paisaje familiar, desesperación familiar.",
						"vietnamese": "Mọi thứ đâu vào đấy. Khung cảnh quen thuộc, nỗi tuyệt vọng quen thuộc.",
						"thai": "ทุกอย่างเข้าที่. ทิวทัศน์คุ้นเคย, ความสิ้นหวังคุ้นเคย.",
						"hindi": "सब कुछ अपनी जगह पर। परिचित दृश्य, परिचित निराशा।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "또 다음 기회? 지겨워 죽겠어.",
						"english": "Another next chance? I'm sick of it.",
						"japanese": "また次の機会？うんざりだ。",
						"chinese": "又是一个“下次机会”？我简直受够了。",
						"french": "Encore une prochaine chance ? J'en ai marre.",
						"spanish": "¿Otra próxima oportunidad? Estoy harto.",
						"vietnamese": "Lại cơ hội tiếp theo nữa à? Tôi phát ngán rồi.",
						"thai": "อีกโอกาสหน้าเหรอ? เบื่อจะตายอยู่แล้ว.",
						"hindi": "फिर से अगला मौका? मैं इससे तंग आ चुका हूँ।"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "direction",
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "lin"
				},
				{
					"speaker": "lin",
					"emotion": "happy",
					"content": {
						"korean": "왜 그렇게 좌절하세요? 진정한 기회는 항상 다음 라운드에 있습니다!",
						"english": "Why such frustration? True opportunities are always in the next round!",
						"japanese": "なぜそんなに落胆するのですか？本当の機会は常に次のラウンドにあります！",
						"chinese": "你为何如此沮丧？真正的机会总是在下一轮！",
						"french": "Pourquoi tant de frustration ? Les vraies opportunités sont toujours au prochain tour !",
						"spanish": "¿Por qué tanta frustración? ¡Las verdaderas oportunidades siempre están en la siguiente ronda!",
						"vietnamese": "Sao bạn lại thất vọng thế? Cơ hội thực sự luôn ở vòng tiếp theo mà!",
						"thai": "ทำไมถึงท้อแท้แบบนั้น? โอกาสที่แท้จริงมักจะอยู่ในรอบถัดไปเสมอ!",
						"hindi": "आप इतने निराश क्यों हैं? असली अवसर हमेशा अगले दौर में होते हैं!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…그 다음이 언제 오는 건데?",
						"english": "...And when does 'next' even come?",
						"japanese": "…その次って、いつ来るんだ？",
						"chinese": "…那“下一次”到底什么时候来？",
						"french": "...Et quand vient ce 'prochain' ?",
						"spanish": "...¿Y cuándo llega ese 'siguiente'?",
						"vietnamese": "...Vậy khi nào cái 'tiếp theo' đó mới đến?",
						"thai": "...แล้ว 'ครั้งหน้า' จะมาเมื่อไหร่ล่ะ?",
						"hindi": "...तो वह 'अगला' कब आएगा?"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "출구를 찾아 헤맸다. 하지만 모든 길은 '준비'로 통했다.",
						"english": "I searched for an exit. But every path led to 'Preparation'.",
						"japanese": "出口を探し回った。しかし、どの道も「準備」に通じていた。",
						"chinese": "我四处寻找出口。但所有的路都通向“准备”。",
						"french": "Je cherchais une sortie. Mais tous les chemins menaient à la 'Préparation'.",
						"spanish": "Busqué una salida. Pero todos los caminos conducían a la 'Preparación'.",
						"vietnamese": "Tôi lang thang tìm lối ra. Nhưng mọi con đường đều dẫn đến 'Chuẩn bị'.",
						"thai": "ฉันค้นหาทางออก แต่ทุกเส้นทางนำไปสู่ 'การเตรียมพร้อม'.",
						"hindi": "मैंने एक निकास की तलाश की। लेकिन हर रास्ता 'तैयारी' की ओर जाता था।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이건 끝이 없어. 분명 뭔가 잘못됐어.",
						"english": "This is endless. Something's definitely wrong.",
						"japanese": "これは終わりがない。きっと何かが間違っている。",
						"chinese": "这没完没了。肯定有什么不对劲。",
						"french": "C'est sans fin. Quelque chose ne va vraiment pas.",
						"spanish": "Esto no tiene fin. Algo está definitivamente mal.",
						"vietnamese": "Chuyện này không hồi kết. Chắc chắn có gì đó sai rồi.",
						"thai": "นี่มันไม่มีที่สิ้นสุดแน่ๆ ต้องมีอะไรผิดปกติแล้วล่ะ",
						"hindi": "यह कभी खत्म नहीं होगा। ज़रूर कुछ गलत है।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "direction",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "lin"
				},
				{
					"emotion": "happy",
					"speaker": "lin",
					"content": {
						"korean": "힘들 땐 잠시 쉬어가는 것도 방법이죠! 다음을 위한 충전이라고 생각하세요.",
						"english": "When it's tough, taking a break is also a way! Think of it as recharging for what's next.",
						"japanese": "辛い時は、少し休むのも手ですよ！次への充電だと思ってください。",
						"chinese": "感到困难时，稍作休息也是一种方法！就当是为了下一次的充电吧。",
						"french": "Quand c'est difficile, faire une pause est aussi une solution ! Voyez ça comme une recharge pour la suite.",
						"spanish": "Cuando sea difícil, tomar un descanso también es una opción. ¡Piensa en ello como una recarga para lo que viene!",
						"vietnamese": "Khi mệt mỏi, nghỉ ngơi một lát cũng là một cách! Hãy nghĩ đó là sạc năng lượng cho lần tiếp theo.",
						"thai": "ตอนที่ยากลำบาก การพักผ่อนชั่วคราวก็เป็นวิธีหนึ่งนะ! คิดซะว่าเป็นการชาร์จพลังสำหรับครั้งต่อไป",
						"hindi": "जब मुश्किल हो, तो थोड़ा आराम करना भी एक तरीका है! इसे अगले के लिए रिचार्ज समझो।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "충전… 그래 봤자 또 '다음'일 뿐이잖아.",
						"english": "Recharge... it's just 'next' again anyway.",
						"japanese": "充電…どうせまた「次」があるだけだろ。",
						"chinese": "充电……反正也只是又一个“下一次”罢了。",
						"french": "Recharger... De toute façon, ce n'est qu'un 'prochain' encore.",
						"spanish": "Recargar... de todos modos, es solo 'lo siguiente' otra vez.",
						"vietnamese": "Sạc lại... dù sao thì cũng chỉ là 'tiếp theo' thôi.",
						"thai": "ชาร์จ... สุดท้ายมันก็แค่ 'ครั้งหน้า' อีกนั่นแหละ",
						"hindi": "रिचार्ज... फिर भी यह बस 'अगला' ही तो है।"
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"content": {
						"korean": "데자뷔. 똑같은 질문, 똑같은 대답, 똑같은 준비.",
						"english": "Déjà vu. Same question, same answer, same preparation.",
						"japanese": "デジャヴ。同じ質問、同じ答え、同じ準備。",
						"chinese": "似曾相识。同样的问题，同样的回答，同样的准备。",
						"french": "Déjà vu. Même question, même réponse, même préparation.",
						"spanish": "Déjà vu. Misma pregunta, misma respuesta, misma preparación.",
						"vietnamese": "Déjà vu. Cùng một câu hỏi, cùng một câu trả lời, cùng một sự chuẩn bị.",
						"thai": "เดจาวู. คำถามเดิม คำตอบเดิม การเตรียมพร้อมเดิมๆ",
						"hindi": "देजा वू। वही सवाल, वही जवाब, वही तैयारी।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "나… 이 대사, 해본 적 있지 않아? 몇 번이나 반복하는 거야?",
						"english": "I... haven't I said this line before? How many times are we repeating this?",
						"japanese": "私…このセリフ、言ったことない？一体何度繰り返すんだ？",
						"chinese": "我……是不是说过这句台词？到底要重复多少次？",
						"french": "Moi... n'ai-je pas déjà dit cette réplique ? Combien de fois allons-nous répéter ça ?",
						"spanish": "Yo... ¿no he dicho esta frase antes? ¿Cuántas veces vamos a repetir esto?",
						"vietnamese": "Tôi... hình như đã nói câu này rồi phải không? Lặp lại bao nhiêu lần nữa đây?",
						"thai": "ฉัน... เคยพูดบทนี้มาก่อนไม่ใช่เหรอ? จะซ้ำไปอีกกี่ครั้งเนี่ย?",
						"hindi": "मैंने... क्या मैंने यह लाइन पहले नहीं कही है? कितनी बार दोहरा रहे हैं?"
					}
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "lin",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "happy",
					"content": {
						"korean": "성공의 비결은 완벽한 준비예요! 늘 새롭고 완벽한 '다음'을 만드는 거죠.",
						"english": "The secret to success is perfect preparation! Always creating a new and perfect 'next'.",
						"japanese": "成功の秘訣は完璧な準備です！いつも新しく完璧な「次」を作るんですよ。",
						"chinese": "成功的秘诀在于万全的准备！总是创造一个全新而完美的“下一次”。",
						"french": "Le secret du succès, c'est une préparation parfaite ! Toujours créer un 'prochain' nouveau et parfait.",
						"spanish": "¡El secreto del éxito es la preparación perfecta! Siempre creando un 'siguiente' nuevo y perfecto.",
						"vietnamese": "Bí quyết của thành công là sự chuẩn bị hoàn hảo! Luôn tạo ra một 'lần tiếp theo' mới mẻ và hoàn hảo.",
						"thai": "เคล็ดลับสู่ความสำเร็จคือการเตรียมพร้อมที่สมบูรณ์แบบ! สร้าง 'ครั้งหน้า' ที่ใหม่และสมบูรณ์แบบเสมอไป",
						"hindi": "सफलता का रहस्य है सही तैयारी! हमेशा एक नया और उत्तम 'अगला' बनाना।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "완벽한 다음… 그 다음은 진짜 오기는 하는 거야?",
						"english": "A perfect next... will that 'next' ever really come?",
						"japanese": "完璧な次…その次って本当に来るのか？",
						"chinese": "完美的下一次……那个下一次真的会来吗？",
						"french": "Un prochain parfait... ce 'prochain' viendra-t-il vraiment ?",
						"spanish": "Un siguiente perfecto... ¿ese 'siguiente' realmente llegará?",
						"vietnamese": "Một 'lần tiếp theo' hoàn hảo... 'lần tiếp theo' đó có thật sự đến không?",
						"thai": "ครั้งหน้าที่สมบูรณ์แบบ... แล้วครั้งหน้านั้นมันจะมาถึงจริงๆ เหรอ?",
						"hindi": "एक उत्तम अगला... क्या वह 'अगला' सच में कभी आएगा?"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "벽에 갇힌 기분. 끝없이 펼쳐진 통로. 하지만 모두 막다른 길이었다.",
						"english": "Feeling trapped by walls. Endless corridors. But all were dead ends.",
						"japanese": "壁に閉じ込められた気分。果てしなく広がる通路。しかし全て行き止まりだった。",
						"chinese": "感觉被困在墙里。无尽的通道。但都通向死胡同。",
						"french": "Sensation d'être piégé par les murs. Des couloirs sans fin. Mais tous étaient des impasses.",
						"spanish": "Sensación de estar atrapado por las paredes. Pasillos interminables. Pero todos eran callejones sin salida.",
						"vietnamese": "Cảm giác bị mắc kẹt trong tường. Những hành lang trải dài vô tận. Nhưng tất cả đều là ngõ cụt.",
						"thai": "รู้สึกเหมือนติดอยู่ในกำแพง. ทางเดินที่ทอดยาวไม่มีที่สิ้นสุด. แต่ทั้งหมดเป็นทางตัน",
						"hindi": "दीवारों में फँसा हुआ महसूस कर रहा हूँ। अंतहीन गलियारे। लेकिन सभी मृत अंत थे।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "여긴… 출구가 없어. 전부 함정이었어.",
						"english": "There's... no exit here. It was all a trap.",
						"japanese": "ここには…出口がない。全部罠だったんだ。",
						"chinese": "这里……没有出口。全都是陷阱。",
						"french": "Ici... il n'y a pas de sortie. Tout était un piège.",
						"spanish": "Aquí... no hay salida. Todo era una trampa.",
						"vietnamese": "Ở đây... không có lối ra. Tất cả đều là bẫy.",
						"thai": "ที่นี่... ไม่มีทางออก. มันเป็นกับดักทั้งหมดเลย",
						"hindi": "यहां... कोई निकास नहीं है। यह सब एक जाल था।"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "lin",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"type": "direction"
				},
				{
					"emotion": "happy",
					"speaker": "lin",
					"content": {
						"korean": "여기까지 오느라 정말 고생 많으셨어요! 마지막 관문이 기다리고 있습니다.",
						"english": "You've worked incredibly hard to get this far! The final gate awaits you.",
						"japanese": "ここまで来るのに本当にお疲れ様でした！最後の関門が待っています。",
						"chinese": "您能走到这里真是辛苦了！最后一关正在等着您。",
						"french": "Vous avez fait un travail incroyable pour arriver jusqu'ici ! La dernière épreuve vous attend.",
						"spanish": "¡Se ha esforzado muchísimo para llegar hasta aquí! La última puerta le espera.",
						"vietnamese": "Bạn đã vất vả rất nhiều để đến được đây! Cánh cổng cuối cùng đang chờ đợi.",
						"thai": "คุณลำบากมากจริงๆ ที่มาถึงตรงนี้! ประตูสุดท้ายกำลังรออยู่",
						"hindi": "यहां तक पहुंचने के लिए आपने बहुत मेहनत की है! अंतिम द्वार आपका इंतजार कर रहा है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…마지막? 진짜 마지막이라고?",
						"english": "...Last? The very last?",
						"japanese": "…最後？本当に最後なの？",
						"chinese": "…最后？真是最后一次了？",
						"french": "...Le dernier ? Vraiment le dernier ?",
						"spanish": "¿...El último? ¿De verdad el último?",
						"vietnamese": "...Cuối cùng? Thật sự là lần cuối cùng sao?",
						"thai": "...สุดท้าย? สุดท้ายจริงๆ เหรอ?",
						"hindi": "...आखिरी? सच में आखिरी?"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "거대한 그림자가 그들을 기다리고 있었다.",
						"english": "A colossal shadow awaited them.",
						"japanese": "巨大な影が彼らを待ち受けていた。",
						"chinese": "巨大的阴影正等待着他们。",
						"french": "Une ombre colossale les attendait.",
						"spanish": "Una sombra colosal los esperaba.",
						"vietnamese": "Một bóng tối khổng lồ đang chờ đợi họ.",
						"thai": "เงามหึมารอคอยพวกเขาอยู่",
						"hindi": "एक विशाल छाया उनका इंतज़ार कर रही थी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "흥… 다음이라. 너의 다음은… 더 잔인할 거야.",
						"english": "Hmph... 'Next,' you say. Your next will be... far more brutal.",
						"japanese": "フン…次だと。お前の次は…もっと残酷なものになるだろう。",
						"chinese": "哼…下一次吗。你的下一次…会更加残酷。",
						"french": "Hmph... 'La suite', dis-tu. Ta suite sera... bien plus cruelle.",
						"spanish": "Hmph... 'Siguiente', dices. Tu siguiente será... mucho más cruel.",
						"vietnamese": "Hừm... 'Tiếp theo' à. Lần tiếp theo của ngươi sẽ... tàn khốc hơn nhiều.",
						"thai": "หึ... 'ครั้งหน้า' งั้นหรือ ครั้งหน้าของแก... จะโหดร้ายยิ่งกว่าเดิม",
						"hindi": "हम्म... 'अगला' कहते हो। तुम्हारा अगला... और भी क्रूर होगा।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 말을 하는 거야? 우린 해냈어!",
						"english": "What are you talking about? We did it!",
						"japanese": "何を言ってるんだ？俺たちはやったぞ！",
						"chinese": "你在说什么？我们成功了！",
						"french": "De quoi tu parles ? On a réussi !",
						"spanish": "¿Qué dices? ¡Lo logramos!",
						"vietnamese": "Nói gì vậy? Chúng ta đã làm được!",
						"thai": "พูดอะไรน่ะ? เราทำได้แล้ว!",
						"hindi": "क्या कह रहे हो? हमने कर दिखाया!"
					},
					"speaker": "character_any",
					"emotion": "happy"
				},
				{
					"duration_ms": 500,
					"speaker": "lin",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"emotion": "happy",
					"speaker": "lin",
					"content": {
						"korean": "정말 대단해요! 보셨죠? 다음은 언제나 더 좋은 기회를 가져온답니다!",
						"english": "That was amazing! See? The next one always brings better opportunities!",
						"japanese": "本当に素晴らしいです！ね？次はいつもより良い機会をもたらしてくれるんです！",
						"chinese": "真是太棒了！看到了吗？下一次总是会带来更好的机会！",
						"french": "C'était incroyable ! Vous voyez ? La suite apporte toujours de meilleures opportunités !",
						"spanish": "¡Eso fue increíble! ¿Lo ven? ¡La siguiente siempre trae mejores oportunidades!",
						"vietnamese": "Thật tuyệt vời! Thấy chưa? Lần kế tiếp luôn mang đến những cơ hội tốt hơn!",
						"thai": "สุดยอดมาก! เห็นไหม? ครั้งหน้ามักจะนำโอกาสที่ดีกว่ามาให้เสมอ!",
						"hindi": "यह अद्भुत था! देखा? अगला हमेशा बेहतर अवसर लाता है!"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "알 수 없는 불안감 속에, 그들은 다음을 향해 발걸음을 옮겼다. 그러나 그들의 눈에는 이미 편집증의 그림자가 드리워져 있었다.",
						"english": "Amidst an unknown unease, they stepped towards the next. But the shadow of paranoia already loomed in their eyes.",
						"japanese": "未知の不安感を抱えながら、彼らは次へと足を踏み出した。しかし、彼らの目には既にパラノイアの影が宿っていた。",
						"chinese": "在莫名的不安中，他们迈向了下一个。然而，他们的眼中已然蒙上了偏执的阴影。",
						"french": "Dans une anxiété inconnue, ils s'avancèrent vers la suite. Mais l'ombre de la paranoïa planait déjà dans leurs yeux.",
						"spanish": "Con una inquietud desconocida, avanzaron hacia lo siguiente. Pero la sombra de la paranoia ya se cernía en sus ojos.",
						"vietnamese": "Trong một sự bất an khó tả, họ bước về phía tiếp theo. Nhưng trong mắt họ đã in hằn bóng dáng của sự hoang tưởng.",
						"thai": "ภายใต้ความไม่สบายใจที่ไม่รู้จัก พวกเขาก้าวไปข้างหน้าสู่สิ่งต่อไป แต่เงาของความหวาดระแวงได้ฉายอยู่ในดวงตาของพวกเขาแล้ว",
						"hindi": "एक अनजानी बेचैनी के बीच, उन्होंने अगले कदम की ओर बढ़े। लेकिन उनकी आँखों में पहले से ही पागलपन की छाया मंडरा रही थी।"
					},
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "아직 부족해. 다시 준비해. 영원한 다음을 위해.",
						"english": "Not enough yet. Prepare again. For the eternal next.",
						"japanese": "まだ力不足だ。再び備えよ。永遠の次のために。",
						"chinese": "还不够。再次准备。为了永恒的下一次。",
						"french": "Pas encore suffisant. Prépare-toi à nouveau. Pour l'éternel prochain.",
						"spanish": "Aún no es suficiente. Prepárate de nuevo. Para el eterno próximo intento.",
						"vietnamese": "Vẫn chưa đủ. Chuẩn bị lại. Cho lần kế tiếp vĩnh hằng.",
						"thai": "ยังไม่พอ เตรียมตัวใหม่ เพื่อครั้งหน้าอันเป็นนิรันดร์",
						"hindi": "अभी पर्याप्त नहीं है। फिर से तैयारी करो। अगले शाश्वत के लिए।"
					}
				},
				{
					"content": {
						"korean": "크윽… 아직… 끝나지 않았어. 다음엔 반드시…!",
						"english": "Ugh... It's not over yet. Next time, I will...!",
						"japanese": "くっ… まだ… 終わってない。次は必ず…！",
						"chinese": "咳… 还没… 结束。下次… 我一定…！",
						"french": "Grrr… Ce n'est pas… encore fini. La prochaine fois, je vais… !",
						"spanish": "Ugh... Aún no... ha terminado. ¡La próxima vez, seguro...!",
						"vietnamese": "Khặc... Vẫn chưa... kết thúc. Lần tới, nhất định sẽ...!",
						"thai": "อึก... ยัง... ไม่จบ ครั้งหน้าจะต้อง...!",
						"hindi": "उफ़... अभी... ख़त्म नहीं हुआ। अगली बार, मैं ज़रूर...!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "결국 여기까지 왔나. 다음은 없어. 여기에서 모든 게 끝날 테니.",
						"english": "So you've made it this far. There's no 'next'. Everything ends here.",
						"japanese": "ついにここまで来たか。次はない。ここで全てが終わるのだから。",
						"chinese": "终究还是到这里了。没有下一次了。一切都将在此终结。",
						"french": "Vous voilà enfin. Il n'y aura pas de 'suite'. Tout se termine ici.",
						"spanish": "Así que llegaste hasta aquí. No hay 'siguiente'. Todo termina aquí.",
						"vietnamese": "Cuối cùng cũng đến đây. Không có lần kế tiếp. Mọi thứ sẽ kết thúc tại đây.",
						"thai": "ในที่สุดก็มาถึงจุดนี้ ไม่มี 'ครั้งหน้า' ทุกสิ่งจะจบลงที่นี่",
						"hindi": "तो तुम यहाँ तक आ ही गए। अब 'अगला' नहीं है। सब कुछ यहीं खत्म होगा।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야! 우리는 다음으로 갈 거야!",
						"english": "What nonsense! We'll move on!",
						"japanese": "何を言ってるんだ！俺たちは次へ行く！",
						"chinese": "胡说八道！我们一定会进入下一阶段！",
						"french": "Qu'est-ce que tu racontes ! Nous allons passer à la suite !",
						"spanish": "¡¿Qué dices?! ¡Vamos al siguiente!",
						"vietnamese": "Nói gì vậy! Chúng ta sẽ đi tiếp!",
						"thai": "พูดอะไรน่ะ! เราจะไปต่อ!",
						"hindi": "क्या बकवास है! हम अगले पर जाएंगे!"
					},
					"type": "speech"
				},
				{
					"spot": [
						1,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "lin",
					"action": "enter"
				},
				{
					"content": {
						"korean": "포기하지 마세요! 진정한 기회는 항상 다음 라운드에 있습니다! 이 관문을 통과하면 돼요!",
						"english": "Don't give up! True opportunity is always in the next round! Just pass this gate!",
						"japanese": "諦めないでください！真のチャンスはいつも次のラウンドにあります！この関門を突破すればいいんです！",
						"chinese": "别放弃！真正的机会总在下一轮！只要通过这道关卡就行！",
						"french": "N'abandonnez pas ! La vraie chance est toujours au prochain round ! Il suffit de franchir cette porte !",
						"spanish": "¡No se rindan! ¡La verdadera oportunidad siempre está en la próxima ronda! ¡Solo hay que pasar esta puerta!",
						"vietnamese": "Đừng bỏ cuộc! Cơ hội thực sự luôn nằm ở vòng tiếp theo! Chỉ cần vượt qua cánh cổng này thôi!",
						"thai": "อย่ายอมแพ้! โอกาสที่แท้จริงจะอยู่ในรอบต่อไปเสมอ! แค่ผ่านด่านนี้ไปให้ได้!",
						"hindi": "हार मत मानो! सच्चा अवसर हमेशा अगले दौर में होता है! बस इस द्वार को पार कर लो!"
					},
					"emotion": "happy",
					"speaker": "lin",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "닥쳐! 너도 이 빌어먹을 순환의 일부였어!",
						"english": "Shut up! You were part of this damned cycle too!",
						"japanese": "黙れ！お前もこの忌々しい循環の一部だったんだ！",
						"chinese": "闭嘴！你也是这个该死的循环的一部分！",
						"french": "Tais-toi ! Tu faisais partie de ce maudit cycle toi aussi !",
						"spanish": "¡Cállate! ¡Tú también eras parte de este maldito ciclo!",
						"vietnamese": "Im đi! Ngươi cũng là một phần của vòng lặp chết tiệt này!",
						"thai": "หุบปาก! แกก็เป็นส่วนหนึ่งของวงจรบัดซบนี่เหมือนกัน!",
						"hindi": "चुप रहो! तुम भी इस शापित चक्र का हिस्सा थे!"
					},
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"또 다시, 익숙한 대기실.",
			"길은 늘 똑같은 '준비'로 돌아왔다.",
			"친절한 조언은 이제 섬뜩한 압박이 되고,",
			"'다음 기회'라는 말은 영원한 유예처럼 들렸다.",
			"어쩌면, 이 모든 것이 끝없는 순환이었다."
		],
		"english": [
			"Again, the familiar waiting room.",
			"The path always led back to 'Preparation'.",
			"Kind advice now felt like chilling pressure,",
			"The words 'next chance' sounded like an eternal postponement.",
			"Perhaps, all of this was an endless cycle."
		],
		"japanese": [
			"また、見慣れた控室。",
			"道はいつも同じ「準備」に戻っていた。",
			"親切な助言は今や不気味なプレッシャーとなり、",
			"「次の機会」という言葉は、永遠の猶予のように聞こえた。",
			"ひょっとすると、このすべては終わりのない循環だった。"
		],
		"chinese": [
			"又一次，熟悉的等候室。",
			"这条路总是回到同样的“准备”。",
			"友善的建议现在变成了令人毛骨悚然的压力，",
			"“下一次机会”听起来像是无尽的延期。",
			"也许，这一切都是一个无尽的循环。"
		],
		"french": [
			"De nouveau, la salle d'attente familière.",
			"Le chemin menait toujours à la 'Préparation'.",
			"Les conseils bienveillants étaient devenus une pression glaçante,",
			"Les mots 'prochaine chance' sonnaient comme un report éternel.",
			"Peut-être, tout cela n'était qu'un cycle sans fin."
		],
		"spanish": [
			"De nuevo, la sala de espera familiar.",
			"El camino siempre regresaba a la 'Preparación'.",
			"Los amables consejos ahora eran una presión inquietante,",
			"Las palabras 'próxima oportunidad' sonaban a un aplazamiento eterno.",
			"Quizás, todo esto era un ciclo sin fin."
		],
		"vietnamese": [
			"Lại một lần nữa, phòng chờ quen thuộc.",
			"Con đường luôn dẫn về 'Chuẩn bị' quen thuộc.",
			"Lời khuyên tử tế giờ đây hóa thành áp lực rợn người,",
			"Lời 'cơ hội tiếp theo' nghe như một sự trì hoãn vĩnh cửu.",
			"Có lẽ, tất cả những điều này là một vòng lặp vô tận."
		],
		"thai": [
			"อีกครั้ง, ห้องรอที่คุ้นเคย.",
			"เส้นทางกลับมาสู่ 'การเตรียมพร้อม' เสมอ.",
			"คำแนะนำที่เป็นมิตรกลายเป็นแรงกดดันที่น่าขนลุก,",
			"คำว่า 'โอกาสหน้า' ฟังดูเหมือนการเลื่อนออกไปตลอดกาล.",
			"บางที, ทั้งหมดนี้อาจเป็นวัฏจักรที่ไม่มีที่สิ้นสุด."
		],
		"hindi": [
			"फिर से, वही परिचित प्रतीक्षा कक्ष।",
			"रास्ता हमेशा उसी 'तैयारी' पर लौट आता था।",
			"दयालु सलाह अब एक भयानक दबाव बन गई थी,",
			"'अगला मौका' शब्द एक अनंत स्थगन की तरह सुनाई देते थे।",
			"शायद, यह सब एक अंतहीन चक्र था।"
		]
	}
} as const;
