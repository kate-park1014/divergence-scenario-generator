export const scenario_snowy_glimmerpebble_0_04 = {
	"scenario_id": "snowy_glimmerpebble_0_04",
	"order": 4,
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 결계에 금이 갔다. 희망의 빛 한 줄기.",
						"english": "A colossal barrier cracked. A glimmer of hope.",
						"japanese": "巨大な結界に亀裂が入った。希望の光、一筋。",
						"chinese": "巨大的结界裂开了。一线希望之光。",
						"french": "Une barrière colossale s'est fissurée. Une lueur d'espoir.",
						"spanish": "Una barrera colosal se agrietó. Un atisbo de esperanza.",
						"vietnamese": "Kết giới khổng lồ đã nứt. Một tia hy vọng.",
						"thai": "ม่านพลังมหึมาแตกร้าว. แสงแห่งความหวัง.",
						"hindi": "एक विशाल बैरियर में दरार पड़ गई। आशा की एक किरण।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "해냈어! 결계가 약해졌어!",
						"english": "We did it! The barrier is weakened!",
						"japanese": "やった！結界が弱まった！",
						"chinese": "我们做到了！结界被削弱了！",
						"french": "On l'a fait ! La barrière est affaiblie !",
						"spanish": "¡Lo logramos! ¡La barrera está debilitada!",
						"vietnamese": "Chúng ta làm được rồi! Kết giới đã yếu đi!",
						"thai": "ทำสำเร็จ! ม่านพลังอ่อนแอลงแล้ว!",
						"hindi": "हमने कर दिखाया! बैरियर कमजोर हो गया है!"
					},
					"emotion": "happy"
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "bran",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "bran",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "겨우 이 정도 가지고. 유난이네.",
						"english": "Just this much? Overreacting.",
						"japanese": "たったこれしきで。大げさだな。",
						"chinese": "就凭这点事。小题大做。",
						"french": "Juste ça ? Quel cinéma.",
						"spanish": "¿Solo esto? Qué exageración.",
						"vietnamese": "Chỉ có vậy thôi sao? Thật là làm quá.",
						"thai": "แค่แค่นี้เองเหรอ? เรื่องมากจริง.",
						"hindi": "बस इतना ही? ज़्यादा ही कर रहे हो।"
					}
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "…뭐야, 저 사람은.",
						"english": "...Who is that person?",
						"japanese": "…なんだ、あの人は。",
						"chinese": "……那个人是谁？",
						"french": "...Mais qui est cette personne ?",
						"spanish": "...¿Quién es esa persona?",
						"vietnamese": "...Người đó là ai vậy?",
						"thai": "...นั่นใครน่ะ?",
						"hindi": "...वह कौन है?"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "얼음 협곡을 더 깊이. 조약돌의 오만함은 여전했다.",
						"english": "Deeper into the Ice Canyon. The Pebble's arrogance remained.",
						"japanese": "氷の峡谷をさらに深く。小石の傲慢さは相変わらずだった。",
						"chinese": "深入冰之峡谷。那卵石的傲慢依旧。",
						"french": "Plus profondément dans les Gorges de Glace. L'arrogance du Caillou persistait.",
						"spanish": "Más profundo en el Cañón de Hielo. La arrogancia del Guijarro permanecía.",
						"vietnamese": "Sâu hơn vào Hẻm băng. Sự kiêu ngạo của Hòn Sỏi vẫn như cũ.",
						"thai": "ลึกลงไปในหุบเขาน้ำแข็ง. ความจองหองของกรวดหินยังคงอยู่.",
						"hindi": "बर्फ़ीली घाटी में और गहरा। बजरी का अहंकार वैसे का वैसा था।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "또 기만이야? 지겨워 죽겠어.",
						"english": "Deception again? I'm sick of it.",
						"japanese": "また欺瞞か？もううんざりだ。",
						"chinese": "又是欺骗？烦死了。",
						"french": "Encore une tromperie ? J'en ai marre.",
						"spanish": "¿Otra vez engaños? Estoy harto.",
						"vietnamese": "Lại lừa dối nữa sao? Chán chết đi được.",
						"thai": "หลอกลวงอีกแล้วเหรอ? เบื่อจะแย่แล้ว.",
						"hindi": "फिर से धोखा? मैं तंग आ चुका हूँ।"
					}
				},
				{
					"content": {
						"korean": "애써봐야 소용없어. 원래 그런 거지.",
						"english": "No use trying. It's just how it is.",
						"japanese": "頑張っても無駄だ。元々そういうものだよ。",
						"chinese": "努力也没用。本来就是这样。",
						"french": "C'est inutile d'essayer. C'est comme ça.",
						"spanish": "Es inútil intentarlo. Así son las cosas.",
						"vietnamese": "Cố gắng cũng vô ích. Vốn dĩ nó là như vậy.",
						"thai": "พยายามไปก็ไร้ประโยชน์ นั่นแหละคือสิ่งที่มันเป็น",
						"hindi": "कोशिश करने का कोई फायदा नहीं। यह ऐसा ही है।"
					},
					"emotion": "base",
					"speaker": "bran",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "그 입 다물어, 브란!",
						"english": "Shut up, Bran!",
						"japanese": "黙れ、ブラン！",
						"chinese": "闭嘴，布兰！",
						"french": "Tais-toi, Bran !",
						"spanish": "¡Cállate, Bran!",
						"vietnamese": "Câm mồm lại, Bran!",
						"thai": "หุบปากซะ แบรน!",
						"hindi": "अपना मुँह बंद रखो, ब्रैन!"
					},
					"speaker": "character_2",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "focus",
					"duration_ms": 400,
					"speaker": "bran",
					"type": "direction"
				},
				{
					"speaker": "bran",
					"type": "speech",
					"content": {
						"korean": "이게 뭐야? 굴러다니는 돌멩이잖아.",
						"english": "What's this? Just a common stone.",
						"japanese": "これは何だ？ただの転がる石じゃないか。",
						"chinese": "这是什么？不就是个滚动的石头吗。",
						"french": "Qu'est-ce que c'est ? Juste une pierre qui roule.",
						"spanish": "¿Qué es esto? Solo una piedra rodante.",
						"vietnamese": "Cái gì thế này? Chỉ là một cục đá lăn thôi mà.",
						"thai": "นี่มันอะไรกัน? ก็แค่ก้อนหินที่กลิ้งไปมาเองนี่นา",
						"hindi": "यह क्या है? बस एक लुढ़कता हुआ पत्थर है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "잠깐! 그 손에 든 거…!",
						"english": "Wait! What's in your hand...!",
						"japanese": "待て！その手に持っているもの…！",
						"chinese": "等等！你手里拿的那个…！",
						"french": "Attends ! Ce que tu as dans la main… !",
						"spanish": "¡Espera! ¡Lo que tienes en la mano...!",
						"vietnamese": "Khoan đã! Cái thứ trong tay ngươi...!",
						"thai": "เดี๋ยวก่อน! ที่อยู่ในมือนั่น...!",
						"hindi": "रुको! तुम्हारे हाथ में वो...!"
					}
				},
				{
					"speaker": "bran",
					"type": "speech",
					"content": {
						"korean": "뭐? 그냥 평범한 조약돌인데?",
						"english": "What? It's just an ordinary pebble.",
						"japanese": "何？ただの普通の小石だけど？",
						"chinese": "什么？不就是一块普通的鹅卵石吗？",
						"french": "Quoi ? C'est juste un galet ordinaire.",
						"spanish": "¿Qué? Es solo un guijarro común.",
						"vietnamese": "Gì cơ? Chỉ là một viên sỏi bình thường thôi mà?",
						"thai": "อะไรนะ? ก็แค่ก้อนกรวดธรรมดานี่นา?",
						"hindi": "क्या? यह तो बस एक साधारण कंकड़ है?"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "손에 쥔 조약돌 파편. 어린 시절, 너와 늘 함께했던 그 돌멩이와 똑같은 감촉.",
						"english": "The fragment of a pebble in your hand. The same touch as the stone that was always with you in childhood.",
						"japanese": "手に握られた小石の破片。幼い頃、いつも君と一緒だったあの石と同じ感触。",
						"chinese": "握在手中的鹅卵石碎片。和儿时与你形影不离的那块石头，触感一模一样。",
						"french": "Le fragment de galet dans ta main. Le même toucher que la pierre qui t'accompagnait toujours dans ton enfance.",
						"spanish": "El fragmento de guijarro en tu mano. El mismo tacto que la piedra que siempre te acompañó en tu infancia.",
						"vietnamese": "Mảnh sỏi trong tay. Cảm giác y hệt viên đá luôn bên cạnh ngươi thời thơ ấu.",
						"thai": "ชิ้นส่วนกรวดในมือ สัมผัสเดียวกับก้อนหินที่อยู่กับเธอมาตลอดในวัยเด็ก",
						"hindi": "हाथ में कंकड़ का टुकड़ा। बचपन में तुम्हारे साथ रहने वाले उस पत्थर जैसा ही अहसास।"
					}
				},
				{
					"action": "shake",
					"speaker": "character_3",
					"type": "direction",
					"duration_ms": 300
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "던지지 마! 그거…!",
						"english": "Don't throw it! That...!",
						"japanese": "投げるな！それは…！",
						"chinese": "别扔！那个…！",
						"french": "Ne le jette pas ! C'est… !",
						"spanish": "¡No lo tires! ¡Eso...!",
						"vietnamese": "Đừng ném! Đó là...!",
						"thai": "อย่าทิ้งนะ! นั่นมัน...!",
						"hindi": "फेको मत! वह...!"
					},
					"speaker": "character_3",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "쓸데없어.",
						"english": "Useless.",
						"japanese": "無駄だ。",
						"chinese": "没用。",
						"french": "Inutile.",
						"spanish": "Inútil.",
						"vietnamese": "Vô ích.",
						"thai": "ไร้ประโยชน์",
						"hindi": "बेकार।"
					},
					"speaker": "bran",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "브란! 네가 지금 뭘 버린 줄 알아!",
						"english": "Bran! Do you even know what you just threw away!",
						"japanese": "ブラン！今何を捨てたか分かってるのか！",
						"chinese": "布兰！你知道你刚才扔了什么吗！",
						"french": "Bran ! Sais-tu ce que tu viens de jeter ?!",
						"spanish": "¡Bran! ¡Sabes lo que acabas de tirar!",
						"vietnamese": "Bran! Ngươi có biết mình vừa vứt đi thứ gì không!",
						"thai": "แบรน! นายรู้ไหมว่านายทิ้งอะไรไป!",
						"hindi": "ब्रैन! तुम्हें पता है तुमने अभी क्या फेंका!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "저 무관심이… 진실을 짓밟고 있어!",
						"english": "That indifference... it's trampling on the truth!",
						"japanese": "あの無関心が…真実を押しつぶしている！",
						"chinese": "那种漠不关心…正在践踏着真相！",
						"french": "Cette indifférence… écrase la vérité !",
						"spanish": "¡Esa indiferencia... está pisoteando la verdad!",
						"vietnamese": "Sự thờ ơ đó... đang chà đạp lên sự thật!",
						"thai": "ความเฉยเมยนั้น... กำลังเหยียบย่ำความจริง!",
						"hindi": "वह उदासीनता... सच्चाई को कुचल रही है!"
					},
					"speaker": "character_4",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "내던져진 조약돌 파편. 그리고 분노가 폭발했다.",
						"english": "A shard of a thrown pebble. And then, rage exploded.",
						"japanese": "投げられた小石の破片。そして、怒りが爆発した。",
						"chinese": "飞溅的石子碎片。愤怒随即爆发。",
						"french": "Un éclat de galet lancé. Et puis, la rage a éclaté.",
						"spanish": "Un fragmento de guijarro lanzado. Y entonces, la ira estalló.",
						"vietnamese": "Mảnh vỡ của hòn sỏi bị ném. Rồi cơn thịnh nộ bùng nổ.",
						"thai": "เศษหินที่ถูกปาออกไป และความโกรธก็ระเบิดขึ้น",
						"hindi": "फेंके गए कंकड़ का एक टुकड़ा। और फिर, क्रोध फूट पड़ा।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "젠장! 브란 같은 놈들 때문에 우리가 뭘 놓친 건데!",
						"english": "Damn it! What have we missed because of bastards like Bran!",
						"japanese": "くそっ！ブランのような奴らのせいで、俺たちが何を逃したってんだ！",
						"chinese": "该死！就因为布兰那种家伙，我们错过了什么！",
						"french": "Maudits soient-ils ! Qu'avons-nous manqué à cause de types comme Bran !",
						"spanish": "¡Maldita sea! ¡Qué hemos perdido por culpa de tipos como Bran!",
						"vietnamese": "Chết tiệt! Chúng ta đã bỏ lỡ điều gì vì những tên khốn như Bran!",
						"thai": "ให้ตายสิ! เราพลาดอะไรไปบ้างเพราะพวกสารเลวอย่างแบรน!",
						"hindi": "लानत है! ब्रैन जैसे कमीनों की वजह से हमने क्या खोया!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "더 이상은 안 돼. 저 '위대한 존재'의 가식을 박살 내야 해.",
						"english": "No more. We must shatter the pretense of that 'Great Being'.",
						"japanese": "もうこれ以上は許さない。あの『偉大なる存在』の偽りを打ち砕かねばならない。",
						"chinese": "不能再这样了。我们必须粉碎那个“伟大存在”的伪装。",
						"french": "Plus jamais. Nous devons briser les prétentions de cette 'Grande Entité'.",
						"spanish": "Basta ya. Debemos destrozar la farsa de ese 'Gran Ser'.",
						"vietnamese": "Không thể chịu đựng thêm nữa. Chúng ta phải đập tan sự giả tạo của 'Thực Thể Vĩ Đại' đó.",
						"thai": "พอแล้ว เราต้องทำลายความเสแสร้งของ 'สิ่งมีชีวิตผู้ยิ่งใหญ่' นั่น",
						"hindi": "और नहीं। हमें उस 'महान सत्ता' के ढोंग को तोड़ना होगा।"
					}
				},
				{
					"speaker": "bran",
					"type": "speech",
					"content": {
						"korean": "어차피 결말은 정해져 있어. 뭘 그리 소란스럽게.",
						"english": "The ending is already set anyway. Why all the fuss?",
						"japanese": "どうせ結末は決まっている。何をそんなに騒ぐんだ。",
						"chinese": "反正结局已定。何必如此喧哗。",
						"french": "La fin est de toute façon déjà écrite. Pourquoi tant d'agitation ?",
						"spanish": "El final ya está escrito de todos modos. ¿Por qué tanto alboroto?",
						"vietnamese": "Dù sao thì kết cục cũng đã được định sẵn. Có gì mà ồn ào đến thế.",
						"thai": "สุดท้ายแล้วผลลัพธ์ก็ถูกกำหนดไว้แล้ว จะเอะอะไปทำไม",
						"hindi": "अंत तो पहले से तय है। इतना हंगामा क्यों?"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "닥쳐! 네 무관심이 우리를 더 강하게 만들었어!",
						"english": "Shut up! Your indifference has made us stronger!",
						"japanese": "黙れ！お前の無関心が俺たちを強くしたんだ！",
						"chinese": "闭嘴！你的漠不关心反而让我们更强大了！",
						"french": "Tais-toi ! Ton indifférence nous a rendus plus forts !",
						"spanish": "¡Cállate! ¡Tu indiferencia nos ha hecho más fuertes!",
						"vietnamese": "Im đi! Sự thờ ơ của ngươi đã khiến chúng ta mạnh mẽ hơn!",
						"thai": "หุบปากซะ! ความเฉยเมยของแกทำให้เราแข็งแกร่งขึ้น!",
						"hindi": "चुप रहो! तुम्हारी उदासीनता ने हमें और मजबूत बनाया है!"
					}
				},
				{
					"content": {
						"korean": "탐험대는 전면전을 결심했다. 무관심이 낳은 거대한 분노 속으로.",
						"english": "The expedition team decided on an all-out war. Into the immense rage born of indifference.",
						"japanese": "探検隊は全面戦争を決意した。無関心が産み落とした巨大な怒りの中へ。",
						"chinese": "探险队决定全面开战。投入那由漠不关心滋生的巨大愤怒之中。",
						"french": "L'équipe d'expédition décida d'une guerre totale. Plongée dans la rage immense née de l'indifférence.",
						"spanish": "El equipo de expedición decidió una guerra total. Hacia la inmensa ira nacida de la indiferencia.",
						"vietnamese": "Đội thám hiểm quyết định tiến hành một cuộc chiến tổng lực. Lao vào cơn thịnh nộ khổng lồ được sinh ra từ sự thờ ơ.",
						"thai": "ทีมสำรวจตัดสินใจทำสงครามเต็มรูปแบบ เข้าสู่ความโกรธเกรี้ยวอันมหาศาลที่เกิดจากความเฉยเมย",
						"hindi": "अभियान दल ने एक पूर्ण युद्ध का फैसला किया। उदासीनता से जन्मी विशाल क्रोध में।"
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
					"emotion": "base",
					"content": {
						"korean": "크… 크크크… 그래봤자 한 조각일 뿐. 넌 아무것도 바꾸지 못해.",
						"english": "Heh... Hehehe... It's just a fragment. You can't change anything.",
						"japanese": "く… ククク… せいぜい一片に過ぎん。貴様は何も変えられない。",
						"chinese": "呵… 呵呵呵… 也不过是一块碎片。你什么都改变不了。",
						"french": "Hé... Hahaha... Ce n'est qu'un fragment. Tu ne peux rien changer.",
						"spanish": "Je... Jejeje... Solo es un fragmento. No puedes cambiar nada.",
						"vietnamese": "Khụ... Khà khà khà... Dù sao cũng chỉ là một mảnh. Ngươi chẳng thể thay đổi bất cứ điều gì.",
						"thai": "ฮึ... ฮ่าๆๆ... มันก็แค่ชิ้นส่วนหนึ่งเท่านั้น. เจ้าเปลี่ยนอะไรไม่ได้หรอก.",
						"hindi": "हह... हीहीही... यह तो बस एक टुकड़ा है। तुम कुछ भी नहीं बदल सकते।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그래도 너의 거짓은 끝났어. 이제 진짜를 찾을 시간이야.",
						"english": "Nevertheless, your lies are over. Now it's time to find the truth.",
						"japanese": "それでも、貴様の嘘は終わった。今こそ真実を見つける時だ。",
						"chinese": "即便如此，你的谎言也结束了。现在是时候寻找真相了。",
						"french": "Néanmoins, tes mensonges sont terminés. Il est temps de trouver la vérité.",
						"spanish": "Sin embargo, tus mentiras han terminado. Ahora es el momento de encontrar la verdad.",
						"vietnamese": "Dù sao thì, những lời nói dối của ngươi đã kết thúc. Giờ là lúc tìm kiếm sự thật.",
						"thai": "อย่างไรก็ตาม คำโกหกของเจ้าก็จบลงแล้ว. ถึงเวลาที่จะค้นหาความจริง.",
						"hindi": "फिर भी, तुम्हारे झूठ खत्म हो गए। अब सच्चाई जानने का समय है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "거대한 얼음 군주의 허상이 산산이 부서졌다. 그 잔해 속에서 희미한 빛이 일렁였다.",
						"english": "The colossal illusion of the Ice Lord shattered. A faint light flickered within its debris.",
						"japanese": "巨大な氷の君主の虚像が粉々に砕け散った。その残骸の中で、かすかな光が揺らめいた。",
						"chinese": "冰之君主的巨大幻象支离破碎。在它的残骸中，微弱的光芒闪烁着。",
						"french": "La colossale illusion du Seigneur de Glace se brisa. Une faible lumière vacilla dans ses débris.",
						"spanish": "La colosal ilusión del Señor del Hielo se hizo añicos. Una luz tenue parpadeaba entre sus escombros.",
						"vietnamese": "Ảo ảnh khổng lồ của Chúa tể Băng đã vỡ tan tành. Một ánh sáng yếu ớt lấp lánh trong đống đổ nát của nó.",
						"thai": "ภาพลวงตาอันใหญ่โตของเจ้าแห่งน้ำแข็งได้แตกสลายไป. แสงริบหรี่สั่นไหวอยู่ท่ามกลางซากปรักหักพัง.",
						"hindi": "बर्फ के स्वामी का विशाल भ्रम टूट गया। उसके मलबे में एक मंद प्रकाश टिमटिमा रहा था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "그러나 아직 끝나지 않은 싸움. 그 조약돌의 진짜 주인은 누구인가?",
						"english": "But the fight isn't over yet. Who is the true owner of that pebble?",
						"japanese": "しかし、まだ戦いは終わっていない。あの小石の真の持ち主は誰なのか？",
						"chinese": "然而，战斗尚未结束。那块鹅卵石的真正主人是谁？",
						"french": "Mais le combat n'est pas encore terminé. Qui est le véritable propriétaire de ce galet ?",
						"spanish": "Pero la lucha aún no ha terminado. ¿Quién es el verdadero dueño de esa piedra?",
						"vietnamese": "Nhưng cuộc chiến vẫn chưa kết thúc. Ai là chủ nhân thực sự của viên sỏi đó?",
						"thai": "แต่การต่อสู้ยังไม่จบ. ใครคือเจ้าของที่แท้จริงของก้อนกรวดนั้น?",
						"hindi": "लेकिन लड़ाई अभी खत्म नहीं हुई है। उस कंकड़ का असली मालिक कौन है?"
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "얼음의 파편들이 시야를 가렸다. 거대한 그림자가 모든 것을 집어삼킨다.",
						"english": "Shards of ice obscured the view. A colossal shadow devoured everything.",
						"japanese": "氷の破片が視界を遮った。巨大な影がすべてを飲み込む。",
						"chinese": "冰冷的碎片遮蔽了视线。巨大的阴影吞噬了一切。",
						"french": "Des éclats de glace obscurcirent la vue. Une ombre colossale dévora tout.",
						"spanish": "Fragmentos de hielo oscurecieron la vista. Una sombra colosal lo devoró todo.",
						"vietnamese": "Những mảnh băng che khuất tầm nhìn. Một bóng tối khổng lồ nuốt chửng mọi thứ.",
						"thai": "เศษน้ำแข็งบดบังทัศนียภาพ. เงาขนาดมหึมากลืนกินทุกสิ่ง.",
						"hindi": "बर्फ के टुकड़े दृष्टि को ढक गए। एक विशाल छाया ने सब कुछ निगल लिया।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "하찮은 분노는 그저 허무할 뿐. 너희는 영원히 나를 이길 수 없다.",
						"english": "Petty rage is merely futile. You can never defeat me.",
						"japanese": "取るに足らない怒りはただ虚しいだけ。貴様らは永遠に私に勝てない。",
						"chinese": "渺小的愤怒不过是徒劳。你们永远无法战胜我。",
						"french": "La rage futile n'est que vaine. Vous ne pourrez jamais me vaincre.",
						"spanish": "La rabia insignificante es simplemente inútil. Nunca podréis vencerme.",
						"vietnamese": "Cơn thịnh nộ nhỏ bé chỉ là vô ích. Các ngươi sẽ không bao giờ đánh bại được ta.",
						"thai": "ความโกรธเล็กน้อยนั้นไร้ประโยชน์. พวกเจ้าไม่มีวันเอาชนะข้าได้.",
						"hindi": "तुच्छ क्रोध केवल व्यर्थ है। तुम मुझे कभी नहीं हरा सकते।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "젠장…! 아직 포기 안 해. 다시 돌아온다!",
						"english": "Damn it...! I won't give up yet. I'll be back!",
						"japanese": "ちくしょう…！まだ諦めない。また戻ってくる！",
						"chinese": "该死…！我还没放弃。我会再回来的！",
						"french": "Maudits... ! Je n'abandonne pas encore. Je reviendrai !",
						"spanish": "¡Maldita sea...! Todavía no me rindo. ¡Volveré!",
						"vietnamese": "Chết tiệt...! Ta vẫn chưa bỏ cuộc. Ta sẽ trở lại!",
						"thai": "ให้ตายสิ...! ข้ายังไม่ยอมแพ้. ข้าจะกลับมาอีกครั้ง!",
						"hindi": "धत् तेरे की...! मैंने अभी हार नहीं मानी। मैं वापस आऊंगा!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "기다리지. 어차피 같은 결과일 테니.",
						"english": "I'll wait. The result will be the same anyway.",
						"japanese": "待とう。どうせ結果は同じだろう。",
						"chinese": "我等着吧。反正结果都一样。",
						"french": "J'attendrai. Le résultat sera le même de toute façon.",
						"spanish": "Esperaré. El resultado será el mismo de todos modos.",
						"vietnamese": "Tôi sẽ đợi. Đằng nào kết quả cũng vậy thôi.",
						"thai": "ฉันจะรอ อย่างไรผลลัพธ์ก็คงเหมือนเดิม",
						"hindi": "मैं इंतज़ार करूँगा। वैसे भी नतीजा वही होगा।"
					},
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "얼음 군주의 심장부. 그곳에서 만난 '위대한 존재'의 그림자.",
						"english": "The heart of the Ice Lord. There, they met the shadow of the 'Great Being'.",
						"japanese": "氷の君主の心臓部。そこで出会った『偉大なる存在』の影。",
						"chinese": "冰之君主的心脏地带。在那里，他们遇到了“伟大存在”的阴影。",
						"french": "Le cœur du Seigneur de Glace. Là, ils rencontrèrent l'ombre de la 'Grande Entité'.",
						"spanish": "El corazón del Señor del Hielo. Allí, se encontraron con la sombra del 'Gran Ser'.",
						"vietnamese": "Trung tâm của Chúa Tể Băng Giá. Ở đó, họ gặp bóng hình của 'Thực Thể Vĩ Đại'.",
						"thai": "ใจกลางของจ้าวแห่งน้ำแข็ง ที่นั่นพวกเขาได้พบกับเงาของ 'สิ่งมีชีวิตผู้ยิ่งใหญ่'",
						"hindi": "हिम प्रभु का हृदय। वहाँ, उन्होंने 'महान सत्ता' की छाया से मुलाकात की।"
					}
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "random_boss",
					"spot": [
						5,
						4
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "결국 여기까지 온 건가. 어리석은 벌레들.",
						"english": "So you've finally made it this far. Foolish insects.",
						"japanese": "結局ここまで来たか。愚かな虫けらめ。",
						"chinese": "最终还是走到这一步了啊。愚蠢的虫子们。",
						"french": "Alors vous êtes enfin arrivés jusqu'ici. Stupides insectes.",
						"spanish": "Así que al final habéis llegado hasta aquí. ¡Insectos estúpidos!",
						"vietnamese": "Cuối cùng các ngươi cũng đã đến được đây. Những con sâu bọ ngu xuẩn.",
						"thai": "ในที่สุดก็มาถึงที่นี่แล้วสินะ พวกแมลงโง่เง่า",
						"hindi": "तो तुम अंततः यहाँ तक आ गए। मूर्ख कीड़े।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "네 오만한 허세에 더 이상 속지 않아.",
						"english": "We're no longer fooled by your arrogant pretense.",
						"japanese": "お前の傲慢な虚勢にはもう騙されない。",
						"chinese": "我们不再被你傲慢的虚张声势所蒙骗。",
						"french": "Nous ne sommes plus dupes de ton arrogance.",
						"spanish": "Ya no nos engaña tu arrogante fanfarronería.",
						"vietnamese": "Chúng ta sẽ không còn bị lừa bởi sự kiêu ngạo giả tạo của ngươi nữa.",
						"thai": "เราจะไม่ถูกหลอกโดยความโอหังของแกอีกต่อไป",
						"hindi": "हम तुम्हारी अहंकारी ढोंग से अब और मूर्ख नहीं बनेंगे।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "내 권능은 곧 진리. 감히 {random_boss}에게 맞서려 하는가?",
						"english": "My power is truth itself. Do you dare defy {random_boss}?",
						"japanese": "我が権能こそが真理。よくも{random_boss}に逆らおうとするか？",
						"chinese": "我的权能即是真理。你竟敢对抗{random_boss}？",
						"french": "Mon pouvoir est la vérité. Oserez-vous défier {random_boss} ?",
						"spanish": "Mi poder es la verdad. ¿Osas desafiar a {random_boss}?",
						"vietnamese": "Quyền năng của ta chính là chân lý. Ngươi dám chống lại {random_boss} sao?",
						"thai": "อำนาจของข้าคือความจริง เจ้ากล้าที่จะท้าทาย {random_boss} หรือไม่?",
						"hindi": "मेरी शक्ति ही सत्य है। क्या तुम {random_boss} का सामना करने की हिम्मत करते हो?"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "진실은 네 권능이 아니야! 이제 그 가면을 벗겨주지!",
						"english": "Truth isn't your power! Now I'll rip off that mask!",
						"japanese": "真実は貴様の権能ではない！その仮面を剥がしてやる！",
						"chinese": "真相不是你的权能！现在就揭开你的面具！",
						"french": "La vérité n'est pas ton pouvoir ! Je vais t'arracher ce masque !",
						"spanish": "¡La verdad no es tu poder! ¡Ahora te arrancaré esa máscara!",
						"vietnamese": "Sự thật không phải là quyền năng của ngươi! Giờ ta sẽ lột chiếc mặt nạ đó xuống!",
						"thai": "ความจริงไม่ใช่พลังของเจ้า! ข้าจะกระชากหน้ากากนั่นออกเดี๋ยวนี้!",
						"hindi": "सच तुम्हारी शक्ति नहीं है! अब मैं वह नकाब उतार दूंगा!"
					},
					"emotion": "angry",
					"speaker": "character_2",
					"type": "speech"
				},
				{
					"direction": "down",
					"duration_ms": 400,
					"action": "exit",
					"type": "direction",
					"speaker": "bran"
				},
				{
					"speaker": "bran",
					"type": "speech",
					"content": {
						"korean": "흥. 알아서 해라들. 난 관심 없어.",
						"english": "Hmph. Do as you please. I don't care.",
						"japanese": "フン。勝手にしろ。私には関係ない。",
						"chinese": "哼。随你们便。我没兴趣。",
						"french": "Hmph. Faites ce que vous voulez. Ça m'est égal.",
						"spanish": "Hmph. Haced lo que queráis. No me importa.",
						"vietnamese": "Hừm. Tùy các ngươi. Ta không quan tâm.",
						"thai": "ฮึ่ม. ทำตามใจพวกแกเถอะ. ข้าไม่สนใจ.",
						"hindi": "हम्म। जो चाहो करो। मुझे परवाह नहीं।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "도망쳐봐야 소용없어! 끝까지 쫓아갈 테니!",
						"english": "Fleeing is useless! I'll chase you to the very end!",
						"japanese": "逃げても無駄だ！最後まで追い詰めてやる！",
						"chinese": "逃跑是没用的！我会追你到天涯海角！",
						"french": "Fuir est inutile ! Je te poursuivrai jusqu'au bout !",
						"spanish": "¡Huir es inútil! ¡Te perseguiré hasta el final!",
						"vietnamese": "Trốn chạy cũng vô ích thôi! Ta sẽ đuổi theo đến cùng!",
						"thai": "หนีไปก็ไร้ประโยชน์! ข้าจะไล่ล่าเจ้าจนถึงที่สุด!",
						"hindi": "भागना बेकार है! मैं तुम्हें अंत तक पीछा करूंगा!"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"균열.",
			"희망은 보였지만, 진실은 발밑에.",
			"그리고 그 진실은 무시당했다.",
			"분노가, 모든 것을 태울 불꽃으로 변한다."
		],
		"english": [
			"Rift.",
			"Hope appeared, but truth lay beneath.",
			"And that truth was ignored.",
			"Rage turns into flames that will consume all."
		],
		"japanese": [
			"亀裂。",
			"希望は見えたが、真実は足元にあった。",
			"そして、その真実は無視された。",
			"怒りは、すべてを焼き尽くす炎と化す。"
		],
		"chinese": [
			"裂痕。",
			"希望乍现，真相却在脚下。",
			"而那个真相被忽视了。",
			"怒火，化作焚尽一切的火焰。"
		],
		"french": [
			"La Faille.",
			"L'espoir apparut, mais la vérité gisait sous nos pieds.",
			"Et cette vérité fut ignorée.",
			"La rage se transforme en flammes qui consumeront tout."
		],
		"spanish": [
			"La Grieta.",
			"La esperanza surgió, pero la verdad yacía bajo nuestros pies.",
			"Y esa verdad fue ignorada.",
			"La ira se convierte en llamas que lo consumirán todo."
		],
		"vietnamese": [
			"Rạn nứt.",
			"Hy vọng xuất hiện, nhưng sự thật ẩn dưới chân.",
			"Và sự thật đó đã bị phớt lờ.",
			"Cơn thịnh nộ hóa thành ngọn lửa thiêu rụi mọi thứ."
		],
		"thai": [
			"รอยแยก.",
			"ความหวังปรากฏ แต่ความจริงอยู่เบื้องล่าง.",
			"และความจริงนั้นถูกละเลย.",
			"ความโกรธกลายเป็นเปลวเพลิงที่จะเผาผลาญทุกสิ่ง."
		],
		"hindi": [
			"दरार।",
			"आशा तो दिखी, पर सच पैरों तले था।",
			"और उस सच को अनदेखा कर दिया गया।",
			"क्रोध, सब कुछ भस्म करने वाली ज्वाला में बदल जाता है।"
		]
	}
} as const;
