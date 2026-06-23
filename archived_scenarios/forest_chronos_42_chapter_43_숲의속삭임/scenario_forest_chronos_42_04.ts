export const scenario_forest_chronos_42_04 = {
	"scenario_id": "forest_chronos_42_04",
	"order": 4,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"ivy": {
			"id": "mon_d1c759f3-74f8-42b7-ba16-c705649f006f",
			"name": {
				"korean": "아이비",
				"english": "Ivy",
				"japanese": "アイビー",
				"chinese": "艾薇",
				"french": "Ivy",
				"spanish": "Ivy",
				"vietnamese": "Ivy",
				"thai": "ไอวี่",
				"hindi": "आइवी"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/654fde54-6029-4601-b4a8-0578f00df900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/6ee8738d-0e14-4f8d-d04d-c934b0fff000/public"
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
					"content": {
						"korean": "시간이 멈춘 폭포. 그 아래, 수많은 비극의 그림자가 일렁였다.",
						"english": "The waterfall where time stopped. Beneath it, countless shadows of tragedy flickered.",
						"japanese": "時が止まった滝。その下には、数多の悲劇の影が揺らめいていた。",
						"chinese": "时间静止的瀑布。其下，无数悲剧的阴影闪烁。",
						"french": "La cascade où le temps s'est arrêté. En dessous, d'innombrables ombres de tragédie vacillaient.",
						"spanish": "La cascada donde el tiempo se detuvo. Debajo, innumerables sombras de tragedia parpadeaban.",
						"vietnamese": "Thác nước nơi thời gian ngừng lại. Bên dưới, vô số bóng hình bi kịch chập chờn.",
						"thai": "น้ำตกที่เวลาหยุดนิ่ง ใต้ธารน้ำนั้น เงาแห่งโศกนาฏกรรมนับไม่ถ้วนกำลังสั่นไหว",
						"hindi": "वह झरना जहाँ समय थम गया था। उसके नीचे, त्रासदी की अनगिनत परछाइयाँ झिलमिला रही थीं।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 폭포... 시간이 멈춘 것 같아. 근데 뭔가 낯설지 않아.",
						"english": "This waterfall... time seems to have stopped. But it doesn't feel unfamiliar.",
						"japanese": "この滝…時が止まっているみたいだ。でも、何か見覚えがある気がする。",
						"chinese": "这个瀑布……时间似乎停止了。但感觉并不陌生。",
						"french": "Cette cascade... le temps semble s'être arrêté. Mais ça ne me semble pas étranger.",
						"spanish": "Esta cascada... el tiempo parece haberse detenido. Pero no me resulta desconocida.",
						"vietnamese": "Thác nước này... thời gian dường như đã dừng lại. Nhưng nó không hề xa lạ.",
						"thai": "น้ำตกแห่งนี้... ราวกับว่าเวลาหยุดนิ่ง แต่ก็รู้สึกไม่คุ้นเคย",
						"hindi": "यह झरना... समय थम गया लगता है। लेकिन यह कुछ अपरिचित सा नहीं लगता।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "ivy"
				},
				{
					"emotion": "sad",
					"speaker": "ivy",
					"type": "speech",
					"content": {
						"korean": "...이 느낌. 나도 알아.",
						"english": "...This feeling. I know it too.",
						"japanese": "…この感覚。私も知っている。",
						"chinese": "……这种感觉。我也知道。",
						"french": "...Ce sentiment. Je le connais aussi.",
						"spanish": "...Este sentimiento. Yo también lo conozco.",
						"vietnamese": "...Cảm giác này. Tôi cũng biết.",
						"thai": "...ความรู้สึกนี้ ฉันก็รู้จัก",
						"hindi": "...यह एहसास। मैं भी जानता हूँ।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "ivy",
					"content": {
						"korean": "오래 전, 나도 이곳에서... 너희와 비슷한 환영을 봤어.",
						"english": "Long ago, I too saw a similar illusion here... like yours.",
						"japanese": "ずっと昔、私もここで…あなたたちと同じような幻を見たんだ。",
						"chinese": "很久以前，我也在这里……看到了和你们相似的幻象。",
						"french": "Il y a longtemps, j'ai aussi vu une illusion similaire ici... comme la vôtre.",
						"spanish": "Hace mucho tiempo, yo también vi una ilusión similar aquí... como la vuestra.",
						"vietnamese": "Lâu rồi, tôi cũng từng thấy ảo ảnh tương tự ở đây... giống như của các bạn.",
						"thai": "นานมาแล้ว ฉันเองก็เคยเห็นภาพหลอนคล้ายกับพวกเธอที่นี่",
						"hindi": "बहुत पहले, मैंने भी यहीं... तुम्हारे जैसी ही एक माया देखी थी।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 550,
					"type": "direction",
					"speaker": "ivy",
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "sad",
					"speaker": "ivy",
					"type": "speech",
					"content": {
						"korean": "저 그림자들은... 과거에 갇힌 자들의 잔상이야.",
						"english": "Those shadows are... remnants of those trapped in the past.",
						"japanese": "あの影たちは…過去に囚われた者たちの残像だ。",
						"chinese": "那些影子是……被困在过去的人们的残像。",
						"french": "Ces ombres sont... les vestiges de ceux piégés dans le passé.",
						"spanish": "Esas sombras son... los vestigios de aquellos atrapados en el pasado.",
						"vietnamese": "Những bóng hình đó là... tàn dư của những người bị mắc kẹt trong quá khứ.",
						"thai": "เงาเหล่านั้นคือ... ภาพติดตาของผู้ที่ติดอยู่ในอดีต",
						"hindi": "वे परछाइयाँ... अतीत में फंसे हुए लोगों के अवशेष हैं।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "갇혔다고? 그럼 우리가 지금 겪는 일도...",
						"english": "Trapped? Then what we're experiencing now...",
						"japanese": "囚われているだと？ 그럼、私たちが今経験していることも…",
						"chinese": "被困住了？那么我们现在经历的事情……",
						"french": "Piégés ? Alors ce que nous vivons en ce moment...",
						"spanish": "¿Atrapados? Entonces, lo que estamos experimentando ahora...",
						"vietnamese": "Bị mắc kẹt ư? Vậy những gì chúng ta đang trải qua bây giờ...",
						"thai": "ติดอยู่เหรอ? ถ้าอย่างนั้นสิ่งที่พวกเรากำลังเผชิญอยู่ตอนนี้ก็...",
						"hindi": "फंसे हुए? तो जो हम अभी अनुभव कर रहे हैं..."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "그래. 이 모든 게... 끝나지 않는 비극의 반복일 뿐.",
						"english": "Yes. All of this... is merely the repetition of an endless tragedy.",
						"japanese": "そうね。このすべてが…終わらない悲劇の繰り返しに過ぎない。",
						"chinese": "是的。这一切…不过是无尽悲剧的反复上演。",
						"french": "Oui. Tout cela... n'est qu'une répétition d'une tragédie sans fin.",
						"spanish": "Sí. Todo esto... no es más que la repetición de una tragedia interminable.",
						"vietnamese": "Phải. Tất cả những điều này... chỉ là sự lặp lại của một bi kịch không hồi kết.",
						"thai": "ใช่ ทั้งหมดนี้... ก็แค่การซ้ำรอยของโศกนาฏกรรมที่ไม่รู้จบ",
						"hindi": "हाँ। यह सब... एक अंतहीन त्रासदी की पुनरावृत्ति मात्र है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "ivy"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "우리가... 이 루프의 일부란 말이야?",
						"english": "Are we... part of this loop?",
						"japanese": "私たちが…このループの一部だというの？",
						"chinese": "我们…是这个循环的一部分吗？",
						"french": "Sommes-nous... une partie de cette boucle ?",
						"spanish": "¿Nosotros... somos parte de este bucle?",
						"vietnamese": "Chúng ta... là một phần của vòng lặp này sao?",
						"thai": "พวกเรา... คือส่วนหนึ่งของวงวนนี้งั้นหรือ?",
						"hindi": "क्या हम... इस लूप का हिस्सा हैं?"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "ivy",
					"type": "direction",
					"duration_ms": 450,
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "sad",
					"speaker": "ivy",
					"content": {
						"korean": "예언자는 이 비극을 끊으려 했어. 하지만... 그 희생은 헛된 것이었지.",
						"english": "The prophet tried to break this tragedy. But... their sacrifice was in vain.",
						"japanese": "預言者はこの悲劇を断ち切ろうとした。だが…その犠牲は無駄だった。",
						"chinese": "预言者曾试图终结这场悲剧。然而…他们的牺牲却是徒劳。",
						"french": "Le prophète a tenté de briser cette tragédie. Mais... leur sacrifice fut vain.",
						"spanish": "El profeta intentó romper esta tragedia. Pero... su sacrificio fue en vano.",
						"vietnamese": "Tiên tri đã cố gắng chấm dứt bi kịch này. Nhưng... sự hy sinh đó đã vô ích.",
						"thai": "ผู้พยากรณ์พยายามที่จะยุติโศกนาฏกรรมนี้ แต่... การเสียสละนั้นไร้ประโยชน์",
						"hindi": "पैगंबर ने इस त्रासदी को तोड़ने की कोशिश की। लेकिन... उनका बलिदान व्यर्थ था।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그럼... 모든 게 소용 없었다는 거야?",
						"english": "So... it was all for nothing?",
						"japanese": "じゃあ…すべてが無駄だったってこと？",
						"chinese": "那么…一切都毫无意义吗？",
						"french": "Alors... tout était inutile ?",
						"spanish": "¿Entonces... todo fue inútil?",
						"vietnamese": "Vậy... mọi thứ đều vô ích sao?",
						"thai": "งั้น... ทั้งหมดก็ไร้ประโยชน์งั้นหรือ?",
						"hindi": "तो... सब कुछ बेकार था?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "결국 모든 것이 반복될 뿐이었어.",
						"english": "In the end, everything just repeated.",
						"japanese": "結局、すべてが繰り返されるだけだった。",
						"chinese": "最终，一切都只是重演。",
						"french": "Au final, tout s'est simplement répété.",
						"spanish": "Al final, todo simplemente se repitió.",
						"vietnamese": "Cuối cùng, mọi thứ chỉ lặp lại mà thôi.",
						"thai": "สุดท้ายแล้ว ทุกอย่างก็แค่ซ้ำรอยเดิม",
						"hindi": "अंत में, सब कुछ बस दोहराया गया।"
					},
					"speaker": "ivy",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "오래된 돌기둥에 눈물 모양의 상징... 봉인된 듯한 에너지가 느껴져.",
						"english": "A tear-shaped symbol on an old stone pillar... I feel a sealed energy.",
						"japanese": "古い石柱に涙の形の紋様…封じられたようなエネルギーを感じる。",
						"chinese": "古老的石柱上有着泪滴状的符号…我感觉到一股被封印的能量。",
						"french": "Un symbole en forme de larme sur un vieux pilier de pierre... Je ressens une énergie scellée.",
						"spanish": "Un símbolo en forma de lágrima en un viejo pilar de piedra... Siento una energía sellada.",
						"vietnamese": "Một biểu tượng hình giọt nước mắt trên cây cột đá cổ... Tôi cảm thấy một năng lượng bị phong ấn.",
						"thai": "สัญลักษณ์รูปหยดน้ำตาบนเสาหินโบราณ... รู้สึกได้ถึงพลังงานที่ถูกผนึก",
						"hindi": "एक पुराने पत्थर के खंभे पर आँसू के आकार का प्रतीक... मुझे एक सील की गई ऊर्जा महसूस होती है।"
					},
					"speaker": "character_1",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "어쩌면 그건... 예언자의 마지막 절규일지도 몰라.",
						"english": "Perhaps that's... the prophet's final scream.",
						"japanese": "それはもしかしたら…預言者の最後の叫びなのかもしれない。",
						"chinese": "或许那…是预言者最后的绝望呐喊。",
						"french": "Peut-être que c'est... le dernier cri du prophète.",
						"spanish": "Quizás eso sea... el último grito del profeta.",
						"vietnamese": "Có lẽ đó... là tiếng kêu cuối cùng của nhà tiên tri.",
						"thai": "บางทีนั่นอาจเป็น... เสียงกรีดร้องสุดท้ายของผู้พยากรณ์",
						"hindi": "शायद वह... पैगंबर की आखिरी चीख है।"
					},
					"type": "speech",
					"speaker": "ivy",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 600,
					"type": "direction",
					"speaker": "ivy",
					"spot": [
						4,
						2
					]
				},
				{
					"content": {
						"korean": "이제 돌이킬 수 없어. 이 비극의 그림자는... 우리를 놓아주지 않을 거야.",
						"english": "There's no turning back now. The shadow of this tragedy... won't let us go.",
						"japanese": "もう後戻りはできない。この悲劇の影は…私たちを放してはくれないだろう。",
						"chinese": "现在已无法回头。这场悲剧的阴影…不会放过我们。",
						"french": "Il n'y a plus de retour en arrière. L'ombre de cette tragédie... ne nous laissera pas partir.",
						"spanish": "Ya no hay vuelta atrás. La sombra de esta tragedia... no nos soltará.",
						"vietnamese": "Không thể quay lại nữa rồi. Bóng tối của bi kịch này... sẽ không buông tha chúng ta.",
						"thai": "ตอนนี้กลับตัวไม่ได้แล้ว เงาของโศกนาฏกรรมนี้... จะไม่ปล่อยเราไป",
						"hindi": "अब पीछे हटना संभव नहीं। इस त्रासदी की छाया... हमें नहीं छोड़ेगी।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "ivy"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아니. 여기서 멈출 수 없어.",
						"english": "No. We can't stop here.",
						"japanese": "いや。ここで止まるわけにはいかない。",
						"chinese": "不。我们不能止步于此。",
						"french": "Non. On ne peut pas s'arrêter ici.",
						"spanish": "No. No podemos detenernos aquí.",
						"vietnamese": "Không. Chúng ta không thể dừng lại ở đây.",
						"thai": "ไม่ เราหยุดอยู่ตรงนี้ไม่ได้",
						"hindi": "नहीं। हम यहाँ नहीं रुक सकते।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이 고통의 사슬을... 우리가 끊을 거야.",
						"english": "We will break... this chain of suffering.",
						"japanese": "この苦しみの鎖を…私たちが断ち切る。",
						"chinese": "这条痛苦的锁链…我们将亲手斩断。",
						"french": "Nous briserons... cette chaîne de souffrance.",
						"spanish": "Nosotros... romperemos esta cadena de sufrimiento.",
						"vietnamese": "Chúng ta sẽ phá vỡ... xiềng xích đau khổ này.",
						"thai": "เราจะตัด... โซ่แห่งความทรมานนี้",
						"hindi": "हम तोड़ेंगे... इस पीड़ा की श्रृंखला को।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "ivy",
					"type": "speech",
					"content": {
						"korean": "...너도 그렇게 믿는구나. 나도 한때는 그랬어.",
						"english": "...You believe that too, don't you? I once did.",
						"japanese": "...あなたもそう信じているのですね。私もかつてはそうでした。",
						"chinese": "...你也相信那个啊。我曾经也是。",
						"french": "...Toi aussi tu y crois. Moi aussi, autrefois.",
						"spanish": "...Tú también lo crees. Yo también lo hice una vez.",
						"vietnamese": "...Bạn cũng tin như vậy sao. Tôi cũng từng như thế.",
						"thai": "...เธอก็เชื่ออย่างนั้นสินะ ฉันเองก็เคยเป็นแบบนั้นเหมือนกัน",
						"hindi": "...तुम भी यही मानते हो, है ना? मैं भी कभी ऐसा ही मानता था।"
					}
				},
				{
					"content": {
						"korean": "이번엔 달라야 해. 반드시!",
						"english": "This time, it has to be different. It must!",
						"japanese": "今度こそ、違わなければ。必ず！",
						"chinese": "这次必须有所不同。一定要！",
						"french": "Cette fois, ça doit être différent. Absolument !",
						"spanish": "Esta vez, tiene que ser diferente. ¡Absolutamente!",
						"vietnamese": "Lần này, mọi chuyện phải khác. Nhất định phải thế!",
						"thai": "ครั้งนี้ต้องต่างออกไปให้ได้! ต้องต่างแน่!",
						"hindi": "इस बार, इसे अलग होना होगा। ज़रूर!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 것들. 너희도 과거의 일부일 뿐. 이 비극은 영원히 반복될 것이다.",
						"english": "Insignificant beings. You are but a part of the past. This tragedy will repeat forever.",
						"japanese": "取るに足らない者ども。お前たちも過去の一部に過ぎない。この悲劇は永遠に繰り返されるだろう。",
						"chinese": "微不足道的家伙。你们不过是过去的一部分。这场悲剧将永远重演。",
						"french": "Créatures insignifiantes. Vous n'êtes qu'une partie du passé. Cette tragédie se répétera éternellement.",
						"spanish": "Seres insignificantes. Sois solo una parte del pasado. Esta tragedia se repetirá para siempre.",
						"vietnamese": "Những kẻ hèn mọn. Các ngươi chỉ là một phần của quá khứ. Bi kịch này sẽ lặp lại mãi mãi.",
						"thai": "พวกไร้ค่า เจ้าเป็นเพียงส่วนหนึ่งของอดีต โศกนาฏกรรมนี้จะเกิดขึ้นซ้ำไปตลอดกาล",
						"hindi": "तुच्छ प्राणी। तुम बस अतीत का एक हिस्सा हो। यह त्रासदी हमेशा दोहराई जाएगी।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "크윽... 아직... 끝나지 않았어!",
						"english": "Ugh... It's not... over yet!",
						"japanese": "くっ…まだ…終わってない！",
						"chinese": "呃…还没…结束！",
						"french": "Argh... Ce n'est pas... encore fini !",
						"spanish": "¡Uf... aún... no ha terminado!",
						"vietnamese": "Khụ... Vẫn... chưa kết thúc!",
						"thai": "อึก... ยัง... ไม่จบ!",
						"hindi": "उफ़... अभी... खत्म नहीं हुआ!"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "다시... 돌아올 거야!",
						"english": "I'll... be back!",
						"japanese": "また…戻ってくる！",
						"chinese": "我还会……回来的！",
						"french": "Je... reviendrai !",
						"spanish": "¡Volveré...!",
						"vietnamese": "Ta... sẽ quay lại!",
						"thai": "จะ... กลับมาอีก!",
						"hindi": "मैं... वापस आऊंगा!"
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 폭포 위에서 나타났다. 과거의 비극이 형상화된 듯.",
						"english": "A colossal shadow emerged above the waterfall, as if embodying a past tragedy.",
						"japanese": "巨大な影が滝の上に現れた。過去の悲劇が具現化したかのように。",
						"chinese": "一道巨大的身影出现在瀑布上方，仿佛是过去的悲剧具象化。",
						"french": "Une ombre colossale apparut au-dessus de la cascade, comme l'incarnation d'une tragédie passée.",
						"spanish": "Una sombra colosal apareció sobre la cascada, como la personificación de una tragedia pasada.",
						"vietnamese": "Một bóng đen khổng lồ xuất hiện trên thác nước, như thể hiện thân cho một bi kịch trong quá khứ.",
						"thai": "เงาขนาดมหึมาปรากฏขึ้นเหนือม่านน้ำตก ราวกับเป็นร่างจำแลงของโศกนาฏกรรมในอดีต",
						"hindi": "झरने के ऊपर एक विशाल छाया प्रकट हुई, जैसे अतीत की त्रासदी साकार हो गई हो।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "또다시 이곳에 발을 들였군. 어리석은 인간들.",
						"english": "Once again, you set foot here. Foolish mortals.",
						"japanese": "またこの地に足を踏み入れたか。愚かな人間どもめ。",
						"chinese": "你们又踏足此地了。愚蠢的人类。",
						"french": "Vous avez de nouveau posé le pied ici. Humains insensés.",
						"spanish": "De nuevo han pisado este lugar. Estúpidos mortales.",
						"vietnamese": "Lại một lần nữa, các ngươi đặt chân đến đây. Loài người ngu xuẩn.",
						"thai": "พวกเจ้ากลับมาเหยียบที่นี่อีกครั้งหรือนี่ มนุษย์ผู้โง่เขลา",
						"hindi": "तुमने फिर से इस जगह पर कदम रखा। मूर्ख मनुष्यों।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "너희도 결국, 이 비극의 일부가 될 뿐. 영원히.",
						"english": "You too shall merely become part of this tragedy. Forever.",
						"japanese": "お前たちも結局、この悲劇の一部となるだけだ。永遠に。",
						"chinese": "你们最终也只会成为这场悲剧的一部分。永恒地。",
						"french": "Vous aussi, vous ne ferez que devenir une partie de cette tragédie. Pour toujours.",
						"spanish": "Vosotros también, al final, solo seréis parte de esta tragedia. Para siempre.",
						"vietnamese": "Các ngươi rồi cũng chỉ trở thành một phần của bi kịch này mà thôi. Vĩnh viễn.",
						"thai": "ในท้ายที่สุด พวกเจ้าก็จะเป็นเพียงส่วนหนึ่งของโศกนาฏกรรมนี้... ชั่วนิรันดร์",
						"hindi": "तुम भी, अंततः, इस त्रासदी का हिस्सा बन जाओगे। हमेशा के लिए।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "웃기지 마! 우리는 다르다!",
						"english": "Don't be ridiculous! We are different!",
						"japanese": "笑わせるな！私たちは違う！",
						"chinese": "别开玩笑了！我们不一样！",
						"french": "Ne me fais pas rire ! Nous sommes différents !",
						"spanish": "¡No me hagas reír! ¡Somos diferentes!",
						"vietnamese": "Đừng có đùa! Chúng ta khác biệt!",
						"thai": "อย่ามาตลก! พวกเราไม่เหมือนกัน!",
						"hindi": "हँसाओ मत! हम अलग हैं!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "이 모든 걸 끝낼 거야!",
						"english": "I will end all of this!",
						"japanese": "この全てを終わらせてやる！",
						"chinese": "我要结束这一切！",
						"french": "Je vais mettre fin à tout ça !",
						"spanish": "¡Voy a acabar con todo esto!",
						"vietnamese": "Tôi sẽ kết thúc tất cả chuyện này!",
						"thai": "ฉันจะหยุดทุกสิ่งนี้!",
						"hindi": "मैं यह सब खत्म कर दूंगा!"
					},
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "크윽... 결국... 나도... 이 루프의 일부였나...",
						"english": "Ugh... So... in the end... I was part of this loop too...",
						"japanese": "くっ...結局...私も...このループの一部だったのか...",
						"chinese": "呃... 最终... 我也... 是这个循环的一部分吗...",
						"french": "Ugh... Donc... finalement... moi aussi... faisais partie de cette boucle...",
						"spanish": "Ugh... Al final... ¿yo también... fui parte de este bucle...?",
						"vietnamese": "Ư... Cuối cùng... tôi cũng... là một phần của vòng lặp này sao...",
						"thai": "อึก... สุดท้าย... ฉันเอง... ก็เป็นส่วนหนึ่งของห้วงเวลานี้... อย่างนั้นหรือ...",
						"hindi": "उफ़... तो... अंततः... मैं भी... इस लूप का हिस्सा था..."
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "하지만... 이 비극은... 끝나지 않아... 또... 다시...",
						"english": "But... this tragedy... it doesn't end... Again... and again...",
						"japanese": "だが...この悲劇は...終わらない...また...再び...",
						"chinese": "但是... 这场悲剧... 不会结束... 又... 将再次...",
						"french": "Mais... cette tragédie... ne se terminera pas... Encore... et encore...",
						"spanish": "Pero... esta tragedia... no termina... Otra... vez...",
						"vietnamese": "Nhưng... bi kịch này... sẽ không kết thúc... Lại... một lần nữa...",
						"thai": "แต่... โศกนาฏกรรมนี้... จะไม่จบลง... อีกครั้ง... และอีกครั้ง...",
						"hindi": "लेकिन... यह त्रासदी... खत्म नहीं होगी... फिर... से..."
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "...끝난 건가?",
						"english": "...Is it over?",
						"japanese": "...終わったのか？",
						"chinese": "...结束了吗？",
						"french": "...C'est fini ?",
						"spanish": "¿...Ha terminado?",
						"vietnamese": "...Kết thúc rồi sao?",
						"thai": "...มันจบแล้วหรือ?",
						"hindi": "...क्या यह खत्म हो गया?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"spot": [
						2,
						4
					],
					"speaker": "ivy",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "ivy",
					"emotion": "sad",
					"content": {
						"korean": "아니. 이건 시작일 뿐이야. 또 다른 그림자가... 우리를 기다리고 있어.",
						"english": "No. This is just the beginning. Another shadow... awaits us.",
						"japanese": "いや、これは始まりにすぎない。また別の影が…私たちを待っている。",
						"chinese": "不，这只是开始。另一个阴影……正在等着我们。",
						"french": "Non. Ce n'est que le début. Une autre ombre... nous attend.",
						"spanish": "No. Esto es solo el principio. Otra sombra... nos espera.",
						"vietnamese": "Không. Đây chỉ là khởi đầu thôi. Một bóng đen khác... đang chờ đợi chúng ta.",
						"thai": "ไม่ นี่เป็นแค่จุดเริ่มต้นเท่านั้น เงาอีกตน... กำลังรอเราอยู่",
						"hindi": "नहीं। यह तो बस शुरुआत है। एक और परछाई... हमारा इंतज़ार कर रही है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "폭포는 여전히 흐르지 않았다. 그러나 희미하게, 미래의 불안이 숲을 감쌌다.",
						"english": "The waterfall still didn't flow. Yet faintly, a future unease enveloped the forest.",
						"japanese": "滝はまだ流れていなかった。しかし、かすかに、未来の不安が森を包み込んだ。",
						"chinese": "瀑布依然没有流动。然而，一丝未来的不安弥漫在森林中。",
						"french": "La cascade ne coulait toujours pas. Pourtant, un malaise futur enveloppait faiblement la forêt.",
						"spanish": "La cascada aún no fluía. Sin embargo, una tenue inquietud futura envolvía el bosque.",
						"vietnamese": "Thác nước vẫn chưa chảy. Tuy nhiên, một nỗi bất an mờ nhạt về tương lai bao trùm khu rừng.",
						"thai": "น้ำตกยังคงไม่ไหล ทว่า ความกังวลในอนาคตได้โอบล้อมป่าเอาไว้อย่างแผ่วเบา",
						"hindi": "झरना अभी भी नहीं बह रहा था। फिर भी, भविष्य की एक हल्की बेचैनी ने जंगल को घेर लिया।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"멈춰 선 폭포수, 그 안에 갇힌 비극의 메아리.",
			"우리가 겪는 혼란과 죄책감은... 어쩌면 처음이 아니었다.",
			"반복되는 그림자 속에서, 우리는 이 루프의 일부임을 깨닫는다.",
			"과거의 비극은 끝나지 않았다. 이제, 그 그림자와 마주할 시간이다."
		],
		"english": [
			"A frozen waterfall, within it, the echo of tragedy.",
			"The confusion and guilt we feel... perhaps it's not the first time.",
			"Amidst recurring shadows, we realize we are part of this loop.",
			"The tragedy of the past hasn't ended. Now, it's time to face its shadow."
		],
		"japanese": [
			"凍りついた滝、その中に閉じ込められた悲劇のこだま。",
			"私たちが感じる混乱と罪悪感は…もしかしたら初めてではなかったのかもしれない。",
			"繰り返される影の中で、私たちはこのループの一部であることを悟る。",
			"過去の悲劇は終わっていなかった。今、その影と向き合う時だ。"
		],
		"chinese": [
			"凝固的瀑布，其中困着悲剧的回响。",
			"我们所经历的混乱和罪恶感……也许并非第一次。",
			"在重复的阴影中，我们意识到自己是这个循环的一部分。",
			"过去的悲剧尚未结束。现在，是时候面对它的阴影了。"
		],
		"french": [
			"Une cascade figée, et en son sein, l'écho d'une tragédie.",
			"La confusion et la culpabilité que nous ressentons... n'est peut-être pas la première fois.",
			"Au milieu des ombres récurrentes, nous réalisons que nous faisons partie de cette boucle.",
			"La tragédie du passé n'est pas terminée. Maintenant, il est temps d'affronter son ombre."
		],
		"spanish": [
			"Una cascada detenida, y dentro de ella, el eco de una tragedia.",
			"La confusión y la culpa que sentimos... quizás no sea la primera vez.",
			"Entre las sombras recurrentes, nos damos cuenta de que somos parte de este bucle.",
			"La tragedia del pasado no ha terminado. Ahora, es hora de enfrentar su sombra."
		],
		"vietnamese": [
			"Thác nước dừng lại, âm vang bi kịch bị giam cầm bên trong.",
			"Sự hỗn loạn và tội lỗi mà chúng ta trải qua... có lẽ không phải là lần đầu tiên.",
			"Giữa những bóng hình lặp lại, chúng ta nhận ra mình là một phần của vòng lặp này.",
			"Bi kịch của quá khứ chưa kết thúc. Bây giờ, là lúc đối mặt với bóng tối đó."
		],
		"thai": [
			"น้ำตกที่หยุดนิ่ง ภายในนั้นคือเสียงสะท้อนของโศกนาฏกรรมที่ถูกจองจำ",
			"ความสับสนและรู้สึกผิดที่เรากำลังเผชิญ... อาจไม่ใช่ครั้งแรก",
			"ท่ามกลางเงาที่เกิดขึ้นซ้ำๆ เราตระหนักว่าเราเป็นส่วนหนึ่งของวงจรนี้",
			"โศกนาฏกรรมในอดีตยังไม่สิ้นสุด ตอนนี้ถึงเวลาเผชิญหน้ากับเงานั้น"
		],
		"hindi": [
			"रुका हुआ झरना, उसके भीतर त्रासदी की गूँज कैद है।",
			"जो भ्रम और अपराधबोध हम महसूस करते हैं... शायद यह पहली बार नहीं था।",
			"बार-बार आती परछाइयों के बीच, हम महसूस करते हैं कि हम इस पाश का हिस्सा हैं।",
			"अतीत की त्रासदी खत्म नहीं हुई है। अब, उस परछाई का सामना करने का समय है।"
		]
	}
} as const;
