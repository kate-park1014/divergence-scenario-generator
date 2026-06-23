export const scenario_hell_crescendo_19_04 = {
	"scenario_id": "hell_crescendo_19_04",
	"order": 4,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"char": {
			"id": "mon_b67c6c4a-6263-4db5-8f14-59d0a906a3fc",
			"name": {
				"korean": "캐릭터",
				"english": "Char",
				"japanese": "キャラクター",
				"chinese": "角色",
				"french": "Personnage",
				"spanish": "Personaje",
				"vietnamese": "Nhân vật",
				"thai": "ตัวละคร",
				"hindi": "चरित्र"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/81f44415-b42f-499c-e22b-183f8663dd00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a1c5b19a-a5b5-40d2-e5b1-7a4f81abb700/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"세계의 끝, 텅 빈 지옥의 심장.",
			"그곳에서 모든 소리는 광기의 메아리가 된다.",
			"희미한 존재가 흐려지는 가운데, 잊힌 조화를 속삭인다.",
			"지휘자의 침묵. 뒤틀린 진실이 드러나기 시작한다."
		],
		"english": [
			"The world's end, the empty heart of hell.",
			"There, every sound becomes an echo of madness.",
			"As a faint presence fades, it whispers forgotten harmony.",
			"The conductor's silence. A twisted truth begins to reveal itself."
		],
		"japanese": [
			"世界の果て、虚ろな地獄の心臓。",
			"そこでは、全ての音が狂気の残響となる。",
			"薄れゆく存在の中、忘れ去られた調和を囁く。",
			"指揮者の沈黙。歪んだ真実が露わになり始める。"
		],
		"chinese": [
			"世界的尽头，空虚的地狱之心。",
			"在那里，所有声音都化作疯狂的回响。",
			"在模糊的存在中，低语着被遗忘的和谐。",
			"指挥者的沉默。扭曲的真相开始显露。"
		],
		"french": [
			"La fin du monde, le cœur vide de l'enfer.",
			"Là, chaque son devient un écho de folie.",
			"Une présence faible s'estompe, murmurant une harmonie oubliée.",
			"Le silence du chef d'orchestre. Une vérité tordue commence à se révéler."
		],
		"spanish": [
			"El fin del mundo, el corazón vacío del infierno.",
			"Allí, cada sonido se convierte en un eco de locura.",
			"Una tenue presencia se desvanece, susurrando una armonía olvidada.",
			"El silencio del director. Una verdad retorcida comienza a revelarse."
		],
		"vietnamese": [
			"Tận cùng thế giới, trái tim trống rỗng của địa ngục.",
			"Ở đó, mọi âm thanh hóa thành tiếng vọng của sự điên loạn.",
			"Một sự hiện hữu mờ nhạt dần phai, thì thầm khúc hòa âm bị lãng quên.",
			"Sự im lặng của người chỉ huy. Một sự thật méo mó bắt đầu hé lộ."
		],
		"thai": [
			"สุดปลายโลก, ใจกลางนรกที่ว่างเปล่า.",
			"ที่นั่น, ทุกเสียงล้วนเป็นเสียงสะท้อนของความบ้าคลั่ง.",
			"ในขณะที่ตัวตนเลือนรางจางหาย, มันกระซิบถึงความกลมกลืนที่ถูกลืม.",
			"ความเงียบงันของผู้ควบคุม. ความจริงที่บิดเบี้ยวเริ่มเปิดเผย."
		],
		"hindi": [
			"दुनिया का अंत, नरक का खाली हृदय।",
			"वहाँ, हर आवाज़ पागलपन की प्रतिध्वनि बन जाती है।",
			"एक धुंधली उपस्थिति के मिटने पर, यह भूली हुई सामंजस्य को फुसफुसाती है।",
			"कंडक्टर की खामोशी। एक मुड़ा हुआ सच सामने आने लगता है।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "지옥의 한가운데, 모든 소리가 사라진 텅 빈 공간이었다.",
						"english": "In the heart of hell, an empty space where all sound had vanished.",
						"japanese": "地獄の真ん中、全ての音が消え去った虚ろな空間だった。",
						"chinese": "在地狱深处，是一个所有声音都消失的空旷之地。",
						"french": "Au cœur de l'enfer, un espace vide où tout son avait disparu.",
						"spanish": "En el corazón del infierno, un espacio vacío donde todo sonido había desaparecido.",
						"vietnamese": "Giữa lòng địa ngục, một không gian trống rỗng nơi mọi âm thanh đều biến mất.",
						"thai": "ใจกลางนรก, เป็นพื้นที่ว่างเปล่าที่เสียงทั้งหมดหายไป.",
						"hindi": "नरक के बीच में, एक खाली जगह जहाँ सारी आवाज़ें गायब हो चुकी थीं।"
					}
				},
				{
					"spot": [
						5,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "char"
				},
				{
					"speaker": "char",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…침묵. 이 고통스러운 침묵.",
						"english": "...Silence. This agonizing silence.",
						"japanese": "…沈黙。この苦痛な沈黙。",
						"chinese": "……沉默。这痛苦的沉默。",
						"french": "...Silence. Ce silence torturant.",
						"spanish": "...Silencio. Este silencio agonizante.",
						"vietnamese": "...Im lặng. Sự im lặng đầy đau đớn này.",
						"thai": "...ความเงียบ. ความเงียบที่ทรมานนี้.",
						"hindi": "...खामोशी। यह दर्दनाक खामोशी।"
					}
				},
				{
					"content": {
						"korean": "누구냐.",
						"english": "Who are you?",
						"japanese": "誰だ。",
						"chinese": "你是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "เจ้าเป็นใคร.",
						"hindi": "कौन हो तुम?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "나는… 사라져가는 증인. 허무의 전달자.",
						"english": "I am... a fading witness. A messenger of nothingness.",
						"japanese": "私は…消えゆく証人。虚無の伝達者。",
						"chinese": "我是……一个正在消失的见证者。虚无的传达者。",
						"french": "Je suis... un témoin s'estompant. Un messager du néant.",
						"spanish": "Soy... un testigo que se desvanece. Un mensajero de la nada.",
						"vietnamese": "Ta là... một nhân chứng đang phai tàn. Người truyền tin của hư vô.",
						"thai": "ข้าคือ...พยานที่เลือนหาย. ผู้ส่งสารแห่งความว่างเปล่า.",
						"hindi": "मैं... एक मिटता हुआ गवाह हूँ। शून्यता का संदेशवाहक।"
					},
					"speaker": "char",
					"type": "speech",
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
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "char"
				},
				{
					"speaker": "char",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "기억해. '미스틱스'의 조화로운 소리를….",
						"english": "Remember. The harmonious sound of 'Mystics'...",
						"japanese": "覚えていろ。「ミスティックス」の調和の音を…。",
						"chinese": "记住。‘秘术’的和谐之声……",
						"french": "Souviens-toi. Le son harmonieux des 'Mystiques'...",
						"spanish": "Recuerda. El sonido armonioso de los 'Místicos'...",
						"vietnamese": "Hãy nhớ. Âm thanh hài hòa của 'Mystics'...",
						"thai": "จงจำไว้. เสียงอันกลมกลืนของ 'มิสติกส์'...",
						"hindi": "याद रखो। 'मिस्टिक्स' की सामंजस्यपूर्ण ध्वनि को..."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "미스틱스? 그게 뭔데.",
						"english": "Mystics? What's that?",
						"japanese": "ミスティックス？それ、何だ。",
						"chinese": "秘术？那是什么？",
						"french": "Mystiques ? Qu'est-ce que c'est ?",
						"spanish": "¿Místicos? ¿Qué es eso?",
						"vietnamese": "Mystics? Đó là gì?",
						"thai": "มิสติกส์? นั่นคืออะไร.",
						"hindi": "मिस्टिक्स? वह क्या है?"
					}
				},
				{
					"speaker": "char",
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "모든 것이 완벽한 화음이었어. 아름다웠지.",
						"english": "Everything was in perfect harmony. It was beautiful.",
						"japanese": "全てが完璧なハーモニーだった。美しかった。",
						"chinese": "一切都完美和谐。太美了。",
						"french": "Tout était en parfaite harmonie. C'était magnifique.",
						"spanish": "Todo estaba en perfecta armonía. Era hermoso.",
						"vietnamese": "Mọi thứ đều hòa hợp hoàn hảo. Thật đẹp.",
						"thai": "ทุกสิ่งอยู่ในความกลมกลืนที่สมบูรณ์แบบ มันช่างงดงาม",
						"hindi": "सब कुछ सही तालमेल में था। यह सुंदर था।"
					}
				},
				{
					"speaker": "char",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이 지옥과는… 너무나 달랐어.",
						"english": "It was... so different from this hell.",
						"japanese": "この地獄とは… あまりにも違った。",
						"chinese": "和这地狱… 截然不同。",
						"french": "C'était... si différent de cet enfer.",
						"spanish": "Era... tan diferente de este infierno.",
						"vietnamese": "Nó... quá khác biệt so với địa ngục này.",
						"thai": "มัน... ช่างแตกต่างจากนรกนี่เสียจริง",
						"hindi": "यह... इस नर्क से बहुत अलग था।"
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "char",
					"spot": [
						3,
						4
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "이 침묵이 나를 흐리게 해. 존재가… 사라져가.",
						"english": "This silence blurs me. My existence... fades away.",
						"japanese": "この沈黙が私を曖昧にする。存在が… 消えていく。",
						"chinese": "这寂静让我模糊。我的存在… 正在消逝。",
						"french": "Ce silence m'estompe. Mon existence... s'efface.",
						"spanish": "Este silencio me difumina. Mi existencia... se desvanece.",
						"vietnamese": "Sự im lặng này làm tôi mờ nhạt. Sự tồn tại... đang biến mất.",
						"thai": "ความเงียบนี้ทำให้ฉันเลือนลาง การดำรงอยู่... กำลังจางหายไป",
						"hindi": "यह चुप्पी मुझे धुंधला करती है। मेरा अस्तित्व... मिट रहा है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "char"
				},
				{
					"content": {
						"korean": "소리가 없어서… 사라진다고?",
						"english": "Because there's no sound... I disappear?",
						"japanese": "音がないから… 消えるのか？",
						"chinese": "因为没有声音… 就消失吗？",
						"french": "Parce qu'il n'y a pas de son... je disparais ?",
						"spanish": "¿Porque no hay sonido... desaparezco?",
						"vietnamese": "Vì không có âm thanh... tôi biến mất sao?",
						"thai": "เพราะไม่มีเสียง... ฉันถึงหายไปงั้นหรือ?",
						"hindi": "क्या आवाज़ न होने से... मैं गायब हो जाऊँगा?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "char",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "조화가 깨진 곳에선 모든 게 무너져. 나처럼.",
						"english": "Where harmony is broken, everything collapses. Like me.",
						"japanese": "調和が壊れた場所では、全てが崩れ落ちる。私のように。",
						"chinese": "在和谐被打破的地方，一切都会崩塌。就像我。",
						"french": "Là où l'harmonie est brisée, tout s'écroule. Comme moi.",
						"spanish": "Donde la armonía se rompe, todo se derrumba. Como yo.",
						"vietnamese": "Nơi hòa âm tan vỡ, mọi thứ sụp đổ. Giống như tôi.",
						"thai": "ที่ที่ความกลมกลืนแตกสลาย ทุกสิ่งจะพังทลายลง เช่นเดียวกับฉัน",
						"hindi": "जहाँ सामंजस्य टूटता है, सब कुछ बिखर जाता है। मुझ जैसा।"
					}
				},
				{
					"content": {
						"korean": "지휘자는 이 고통을 견디지 못했어.",
						"english": "The conductor couldn't bear this pain.",
						"japanese": "指揮者はこの苦痛に耐えられなかった。",
						"chinese": "指挥者无法忍受这种痛苦。",
						"french": "Le chef d'orchestre n'a pas pu supporter cette douleur.",
						"spanish": "El director no pudo soportar este dolor.",
						"vietnamese": "Người chỉ huy không thể chịu đựng nỗi đau này.",
						"thai": "วาทยากรทนความเจ็บปวดนี้ไม่ไหว",
						"hindi": "कंडक्टर यह दर्द सहन नहीं कर सका।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "char"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						2,
						5
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "char"
				},
				{
					"speaker": "char",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "지휘자는… 이 침묵을 견딜 수 없었어.",
						"english": "The conductor... couldn't endure this silence.",
						"japanese": "指揮者は… この沈黙に耐えられなかった。",
						"chinese": "指挥者… 无法忍受这种寂静。",
						"french": "Le chef d'orchestre... n'a pas pu supporter ce silence.",
						"spanish": "El director... no pudo soportar este silencio.",
						"vietnamese": "Người chỉ huy... không thể chịu đựng sự im lặng này.",
						"thai": "วาทยากร... ทนความเงียบนี้ไม่ได้",
						"hindi": "कंडक्टर... इस चुप्पी को सहन नहीं कर सका।"
					}
				},
				{
					"content": {
						"korean": "그래서… 소리를 만들었다고?",
						"english": "So... they created a sound?",
						"japanese": "だから… 音を作ったのか？",
						"chinese": "所以… 创造了声音？",
						"french": "Alors... ils ont créé un son ?",
						"spanish": "¿Entonces... crearon un sonido?",
						"vietnamese": "Vậy là... họ đã tạo ra âm thanh sao?",
						"thai": "ดังนั้น... พวกเขาสร้างเสียงขึ้นมางั้นหรือ?",
						"hindi": "तो... उन्होंने आवाज़ बनाई?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "char",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "자신만의… 뒤틀린 소리를. 새로운 조화를.",
						"english": "Their own... twisted sound. A new harmony.",
						"japanese": "自分だけの… 歪んだ音を。新しい調和を。",
						"chinese": "属于自己的… 扭曲之音。一种新的和谐。",
						"french": "Leur propre... son tordu. Une nouvelle harmonie.",
						"spanish": "Su propio... sonido distorsionado. Una nueva armonía.",
						"vietnamese": "Âm thanh méo mó của riêng họ. Một hòa âm mới.",
						"thai": "เสียงบิดเบี้ยว... ของพวกเขาเอง ความกลมกลืนครั้งใหม่",
						"hindi": "अपनी ही... मुड़ी हुई आवाज़। एक नया सामंजस्य।"
					}
				},
				{
					"content": {
						"korean": "하지만 그건… 파멸의 교향곡일 뿐이야.",
						"english": "But that's just... a symphony of destruction.",
						"japanese": "しかしそれは… 破滅の交響曲にすぎない。",
						"chinese": "但那只是… 毁灭的交响乐。",
						"french": "Mais ce n'est... qu'une symphonie de destruction.",
						"spanish": "Pero eso es... solo una sinfonía de destrucción.",
						"vietnamese": "Nhưng đó chỉ là... một bản giao hưởng của sự hủy diệt.",
						"thai": "แต่นั่นก็เป็นเพียง... ซิมโฟนีแห่งการทำลายล้างเท่านั้น",
						"hindi": "लेकिन वह बस... विनाश की एक सिम्फनी है।"
					},
					"speaker": "char",
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "침묵의 어둠이 모든 것을 집어삼켰다.",
						"english": "The darkness of silence devoured everything.",
						"japanese": "沈黙の闇が全てを飲み込んだ。",
						"chinese": "寂静的黑暗吞噬了一切。",
						"french": "L'obscurité du silence dévora tout.",
						"spanish": "La oscuridad del silencio lo devoró todo.",
						"vietnamese": "Bóng tối của sự im lặng đã nuốt chửng mọi thứ.",
						"thai": "ความมืดมิดแห่งความเงียบกลืนกินทุกสิ่ง",
						"hindi": "सन्नाटे के अंधकार ने सब कुछ निगल लिया।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "후후… 너희의 몸부림마저… 침묵 속에 잠길 것이다.",
						"english": "Hoo hoo... Even your struggles... will be engulfed by silence.",
						"japanese": "フフ…お前たちの足掻きさえ…沈黙に沈むだろう。",
						"chinese": "呵呵…就连你们的挣扎…也将归于沉寂。",
						"french": "Hé hé... Même vos luttes... seront englouties par le silence.",
						"spanish": "Je je... Incluso vuestros forcejeos... serán engullidos por el silencio.",
						"vietnamese": "Hừ hừ... Ngay cả sự giãy giụa của các ngươi... cũng sẽ chìm vào im lặng.",
						"thai": "ฮึๆ... แม้แต่การดิ้นรนของพวกเจ้า... ก็จะจมดิ่งสู่ความเงียบงัน",
						"hindi": "हु हु... तुम्हारी छटपटाहट भी... खामोशी में डूब जाएगी。"
					}
				},
				{
					"content": {
						"korean": "이대로 멈출 순 없어… 진실을 밝혀야 해.",
						"english": "I can't stop here... I must uncover the truth.",
						"japanese": "ここで止まるわけにはいかない…真実を明かさなければ。",
						"chinese": "不能就此停下…我必须揭露真相。",
						"french": "Je ne peux pas m'arrêter là... Je dois révéler la vérité.",
						"spanish": "No puedo parar así... Debo revelar la verdad.",
						"vietnamese": "Không thể dừng lại ở đây... Tôi phải làm sáng tỏ sự thật.",
						"thai": "จะหยุดอยู่แค่นี้ไม่ได้... ต้องเปิดเผยความจริง",
						"hindi": "मैं यहीं नहीं रुक सकता... मुझे सच्चाई का खुलासा करना होगा।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "텅 빈 공간, 거대한 그림자가 나타났다. 그 침묵을 깨부수듯.",
						"english": "In the empty space, a giant shadow appeared, as if shattering the silence.",
						"japanese": "空虚な空間に、巨大な影が現れた。その沈黙を打ち破るかのように。",
						"chinese": "空荡的空间中，巨大的影子出现了，仿佛要打破那份寂静。",
						"french": "Dans l'espace vide, une ombre gigantesque apparut, comme pour briser le silence.",
						"spanish": "En el espacio vacío, una sombra gigantesca apareció, como rompiendo el silencio.",
						"vietnamese": "Trong không gian trống rỗng, một cái bóng khổng lồ xuất hiện, như thể phá vỡ sự im lặng.",
						"thai": "ในพื้นที่ว่างเปล่า เงายักษ์ปรากฏขึ้น ราวกับกำลังทำลายความเงียบงัน",
						"hindi": "खाली जगह में, एक विशाल छाया प्रकट हुई, मानो सन्नाटे को तोड़ रही हो।"
					}
				},
				{
					"content": {
						"korean": "감히… 이 신성한 침묵을 방해하는가.",
						"english": "How dare you… disturb this sacred silence?",
						"japanese": "よくも…この神聖な沈黙を妨げるか。",
						"chinese": "竟敢…打扰这神圣的寂静。",
						"french": "Comment oses-tu… perturber ce silence sacré ?",
						"spanish": "¿Cómo osas… perturbar este silencio sagrado?",
						"vietnamese": "Ngươi dám… phá vỡ sự im lặng thiêng liêng này sao?",
						"thai": "บังอาจ… รบกวนความเงียบอันศักดิ์สิทธิ์นี้หรือ",
						"hindi": "तुम्हारी हिम्मत कैसे हुई… इस पवित्र सन्नाटे को भंग करने की।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가 만드는 건 침묵이 아니라… 허무다.",
						"english": "What you create isn't silence… but nothingness.",
						"japanese": "お前が創り出すのは沈黙ではない…虚無だ。",
						"chinese": "你所创造的不是寂静…而是虚无。",
						"french": "Ce que tu crées n'est pas le silence… mais le néant.",
						"spanish": "Lo que creas no es silencio… sino la nada.",
						"vietnamese": "Những gì ngươi tạo ra không phải là sự im lặng… mà là hư vô.",
						"thai": "สิ่งที่เจ้าสร้างไม่ใช่ความเงียบ… แต่คือความว่างเปล่า",
						"hindi": "जो तुम बनाते हो वो सन्नाटा नहीं… बल्कि शून्यता है।"
					}
				},
				{
					"speaker": "char",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						6,
						3
					]
				},
				{
					"content": {
						"korean": "저 자를 멈춰야 해… 더 늦기 전에….",
						"english": "We must stop him… before it's too late…",
						"japanese": "あの者を止めねば…手遅れになる前に…。",
						"chinese": "必须阻止他…在为时已晚之前…",
						"french": "Il faut l'arrêter… avant qu'il ne soit trop tard…",
						"spanish": "Debemos detenerlo… antes de que sea demasiado tarde…",
						"vietnamese": "Phải ngăn hắn lại… trước khi quá muộn…",
						"thai": "ต้องหยุดมัน… ก่อนที่จะสายเกินไป…",
						"hindi": "हमें उसे रोकना होगा… इससे पहले कि बहुत देर हो जाए…"
					},
					"speaker": "char",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 400,
					"speaker": "char",
					"action": "exit"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "건방진 것들. 내가 너희에게 진정한 침묵을 선사해주마.",
						"english": "Insolent beings. I shall bestow upon you true silence.",
						"japanese": "生意気な奴ら。私が貴様らに真の沈黙をくれてやろう。",
						"chinese": "狂妄之徒。我将赐予你们真正的寂静。",
						"french": "Créatures insolentes. Je vous offrirai le véritable silence.",
						"spanish": "Seres insolentes. Os concederé el verdadero silencio.",
						"vietnamese": "Những kẻ ngạo mạn. Ta sẽ ban cho các ngươi sự im lặng đích thực.",
						"thai": "พวกอวดดี ข้าจะมอบความเงียบงันที่แท้จริงให้แก่พวกเจ้า",
						"hindi": "गुस्ताख प्राणियों। मैं तुम्हें सच्चा सन्नाटा प्रदान करूंगा।"
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 서서히 흩어졌다. 잠시 찾아온 고요.",
						"english": "The giant shadow slowly dispersed. A fleeting calm descended.",
						"japanese": "巨大な影が徐々に霧散した。一時的な静寂が訪れた。",
						"chinese": "巨大的影子缓缓消散。短暂的宁静降临了。",
						"french": "L'ombre gigantesque se dispersa lentement. Un calme éphémère s'installa.",
						"spanish": "La sombra gigantesca se dispersó lentamente. Una calma fugaz se hizo presente.",
						"vietnamese": "Bóng tối khổng lồ dần tan biến. Một sự yên tĩnh thoáng qua ập đến.",
						"thai": "เงายักษ์ค่อยๆ สลายไป ความสงบชั่วครู่ได้เข้ามาเยือน",
						"hindi": "विशाल छाया धीरे-धीरे बिखर गई। एक क्षणिक शांति छा गई।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "…이 침묵은… 영원하지 않아. 지휘자의 소리는… 멈추지 않는다….",
						"english": "...This silence… isn't eternal. The Conductor's voice… will not cease…",
						"japanese": "…この沈黙は…永遠ではない。指揮者の声は…止まらない…。",
						"chinese": "…这份寂静…并非永恒。指挥者的声音…不会停止…",
						"french": "...Ce silence… n'est pas éternel. La voix du Chef… ne s'arrêtera pas…",
						"spanish": "...Este silencio… no es eterno. La voz del Conductor… no se detendrá…",
						"vietnamese": "...Sự im lặng này… không phải vĩnh cửu. Giọng nói của Người Chỉ Huy… sẽ không ngừng lại…",
						"thai": "…ความเงียบนี้… ไม่ใช่ชั่วนิรันดร์ เสียงของผู้นำ… จะไม่หยุดนิ่ง…",
						"hindi": "...यह सन्नाटा… शाश्वत नहीं है। कंडक्टर की आवाज़… नहीं रुकेगी…"
					}
				},
				{
					"content": {
						"korean": "지휘자… 그가 모든 것의 근원인가.",
						"english": "The Conductor… Is he the source of all?",
						"japanese": "指揮者…彼が全ての根源なのか。",
						"chinese": "指挥者…他是一切的根源吗？",
						"french": "Le Chef… Est-il la source de tout ?",
						"spanish": "El Conductor… ¿Es él la fuente de todo?",
						"vietnamese": "Người Chỉ Huy… Hắn là nguồn gốc của tất cả sao?",
						"thai": "ผู้นำ… เขาคือต้นกำเนิดของทุกสิ่งหรือ",
						"hindi": "कंडक्टर… क्या वही सबका स्रोत है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "승리했으나, 알 수 없는 허무감이 감돌았다. 다음 장으로….",
						"english": "Victory was ours, yet an unknown sense of futility lingered. To the next chapter…",
						"japanese": "勝利したが、得体の知れない虚無感が漂った。次の章へ…。",
						"chinese": "虽然胜利了，但一种莫名的虚无感萦绕不去。前往下一章…",
						"french": "La victoire était nôtre, pourtant un sentiment d'inanité inconnu persistait. Au chapitre suivant…",
						"spanish": "Se logró la victoria, pero una inexplicable sensación de futilidad persistía. Al siguiente capítulo…",
						"vietnamese": "Chiến thắng đã đến, nhưng một cảm giác hư vô khó tả vẫn còn đọng lại. Đến chương tiếp theo…",
						"thai": "แม้จะได้รับชัยชนะ แต่ความรู้สึกว่างเปล่าที่ไม่รู้จักยังคงค้างอยู่ สู่บทต่อไป…",
						"hindi": "जीत तो मिली, पर एक अज्ञात व्यर्थता की भावना बनी रही। अगले अध्याय की ओर…"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			]
		}
	]
} as const;
