export const scenario_snowy_chitinblight_8_02 = {
	"scenario_id": "snowy_chitinblight_8_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"ivar": {
			"id": "mon_d8a80adc-9315-47b5-8c30-97ce33672bce",
			"name": {
				"korean": "이바르",
				"english": "Ivar",
				"japanese": "イヴァー",
				"chinese": "伊瓦尔",
				"french": "Ivar",
				"spanish": "Ivar",
				"vietnamese": "Ivar",
				"thai": "ไอวาร์",
				"hindi": "इवर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8dd7872b-d4df-44fd-b1a1-083a9156e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2622fb62-daf4-42d1-a83b-2b78869d3e00/public"
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
					"emotion": "base",
					"content": {
						"korean": "끝없이 이어지는 얼음 동굴. 차가운 공기가 폐부를 찔렀다.",
						"english": "An endless ice cave. The cold air pierced deep into the lungs.",
						"japanese": "果てしなく続く氷の洞窟。冷たい空気が肺を突き刺した。",
						"chinese": "无尽的冰洞。寒冷的空气刺入肺腑。",
						"french": "Une grotte de glace sans fin. L'air froid perçait les poumons.",
						"spanish": "Una cueva de hielo interminable. El aire frío perforaba los pulmones.",
						"vietnamese": "Hang băng vô tận. Không khí lạnh thấu xương.",
						"thai": "ถ้ำน้ำแข็งที่ไม่มีที่สิ้นสุด อากาศเย็นเฉียบแทงทะลุปอด",
						"hindi": "एक अंतहीन बर्फीली गुफा। ठंडी हवा फेफड़ों में चुभ रही थी।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "이런 곳에 대체 뭐가 있다는 거지?",
						"english": "What in the world could be in a place like this?",
						"japanese": "こんな場所に一体何があるっていうんだ？",
						"chinese": "这种地方到底有什么？",
						"french": "Qu'y a-t-il donc dans un tel endroit ?",
						"spanish": "¿Qué demonios puede haber en un lugar así?",
						"vietnamese": "Rốt cuộc thì có gì ở nơi như thế này chứ?",
						"thai": "ที่แบบนี้มันมีอะไรกันแน่?",
						"hindi": "भला ऐसी जगह में क्या हो सकता है?"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						5,
						2
					],
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "더 깊은 곳에 '강함의 끝'이 있다. 너희도 그것을 좇아온 건가?",
						"english": "Deeper within lies 'The End of Strength'. Have you come chasing it too?",
						"japanese": "もっと深い場所に「強さの果て」がある。お前たちもそれを追ってきたのか？",
						"chinese": "更深处有“力量的尽头”。你们也追寻它而来吗？",
						"french": "Plus profondément se trouve \"La Fin de la Force\". L'avez-vous aussi poursuivie ?",
						"spanish": "Más profundo se encuentra 'El Fin de la Fuerza'. ¿Vosotros también lo habéis venido a buscar?",
						"vietnamese": "Sâu hơn nữa là 'Giới hạn của sức mạnh'. Các ngươi cũng đuổi theo nó sao?",
						"thai": "ลึกลงไปมี 'จุดสิ้นสุดแห่งความแข็งแกร่ง' พวกเจ้าก็มาตามหาสิ่งนั้นด้วยหรือเปล่า?",
						"hindi": "और गहराई में 'शक्ति का अंत' है। क्या तुम भी उसे ही ढूंढने आए हो?"
					},
					"speaker": "ivar"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "강함의 끝? 설마 '설원 요정' 말이야?",
						"english": "The End of Strength? You don't mean the 'Snowfield Fairy', do you?",
						"japanese": "強さの果て？まさか「雪原の妖精」のことか？",
						"chinese": "力量的尽头？你该不会是指“雪原妖精”吧？",
						"french": "La Fin de la Force ? Tu ne parles pas de la \"Fée des Champs de Neige\", n'est-ce pas ?",
						"spanish": "¿El Fin de la Fuerza? ¿No te refieres acaso al 'Hada de la Nieve'?",
						"vietnamese": "Giới hạn của sức mạnh? Chẳng lẽ là 'Tiên nữ tuyết nguyên' sao?",
						"thai": "จุดสิ้นสุดแห่งความแข็งแกร่ง? อย่าบอกนะว่าหมายถึง 'นางฟ้าทุ่งหิมะ'?",
						"hindi": "शक्ति का अंत? कहीं तुम्हारा मतलब 'हिम क्षेत्र की परी' तो नहीं?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "설화? 단순한 이야기가 아니다. 그들은 존재한다.",
						"english": "Lore? It's not just a simple story. They exist.",
						"japanese": "説話？ただの物語ではない。彼らは存在する。",
						"chinese": "传说？那不是简单的故事。他们是存在的。",
						"french": "Une légende ? Ce n'est pas une simple histoire. Ils existent.",
						"spanish": "¿Leyenda? No es solo una simple historia. Ellos existen.",
						"vietnamese": "Truyền thuyết ư? Đó không chỉ là một câu chuyện đơn giản. Họ thực sự tồn tại.",
						"thai": "ตำนาน? ไม่ใช่แค่เรื่องเล่าธรรมดา พวกมันมีอยู่จริง",
						"hindi": "लोककथा? यह सिर्फ एक साधारण कहानी नहीं है। वे मौजूद हैं।"
					},
					"type": "speech",
					"speaker": "ivar"
				},
				{
					"speaker": "ivar",
					"emotion": "sad",
					"content": {
						"korean": "그들의 손길이 닿으면 모든 것이 사라지지. 영혼마저도.",
						"english": "When their touch reaches, everything vanishes. Even souls.",
						"japanese": "彼らの手が触れれば、すべてが消え去る。魂さえも。",
						"chinese": "他们的手所到之处，一切都会消失。甚至连灵魂。",
						"french": "Quand leur toucher atteint, tout disparaît. Même les âmes.",
						"spanish": "Cuando su toque alcanza, todo desaparece. Incluso las almas.",
						"vietnamese": "Khi bàn tay của họ chạm tới, mọi thứ sẽ biến mất. Ngay cả linh hồn.",
						"thai": "เมื่อมือของพวกมันสัมผัส ทุกสิ่งจะหายไป แม้กระทั่งวิญญาณ",
						"hindi": "जब उनका स्पर्श होता है, तो सब कुछ गायब हो जाता है। यहाँ तक कि आत्माएँ भी।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						4,
						2
					],
					"speaker": "ivar",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그들은 빛으로 유혹한다. 환상으로, 가장 간절한 소망으로.",
						"english": "They tempt with light. With illusions, with your deepest desires.",
						"japanese": "彼らは光で誘惑する。幻想で、最も切なる願いで。",
						"chinese": "它们以光诱惑。以幻象，以最深切的渴望。",
						"french": "Ils tentent avec la lumière. Avec des illusions, avec vos désirs les plus chers.",
						"spanish": "Tientan con la luz. Con ilusiones, con vuestros deseos más profundos.",
						"vietnamese": "Chúng cám dỗ bằng ánh sáng. Bằng ảo ảnh, bằng khát vọng sâu thẳm nhất.",
						"thai": "พวกมันล่อลวงด้วยแสงสว่าง ด้วยภาพลวงตา ด้วยความปรารถนาที่ลึกที่สุด",
						"hindi": "वे प्रकाश से लुभाते हैं। भ्रम से, तुम्हारी सबसे गहरी इच्छाओं से।"
					}
				},
				{
					"content": {
						"korean": "소망? 그럼 우리를 유혹한 빛도…?",
						"english": "Desires? So the light that tempted us...?",
						"japanese": "願い？では、我々を誘惑した光も…？",
						"chinese": "渴望？那么诱惑我们的光芒也是…？",
						"french": "Désirs ? Donc la lumière qui nous a tentés...?",
						"spanish": "¿Deseos? ¿Así que la luz que nos tentó...?",
						"vietnamese": "Khát vọng? Vậy ánh sáng đã cám dỗ chúng ta cũng...?",
						"thai": "ความปรารถนาหรือ? งั้นแสงที่ล่อลวงเราก็...?",
						"hindi": "इच्छाएँ? तो जिस प्रकाश ने हमें लुभाया था...?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "아마도. 그 빛은 곧 너희의 끝이 될 거다.",
						"english": "Perhaps. That light will soon be your end.",
						"japanese": "おそらく。その光はすぐに貴様たちの終わりとなるだろう。",
						"chinese": "也许吧。那光芒很快就会是你们的终结。",
						"french": "Peut-être. Cette lumière sera bientôt votre fin.",
						"spanish": "Quizás. Esa luz será pronto vuestro fin.",
						"vietnamese": "Có lẽ. Ánh sáng đó sẽ sớm là kết thúc của các ngươi.",
						"thai": "อาจจะ. แสงนั้นจะกลายเป็นจุดจบของเจ้าในไม่ช้า",
						"hindi": "शायद। वह प्रकाश शीघ्र ही तुम्हारा अंत होगा।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "ivar"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그 요정들이 이 동굴의 주인이란 말인가?",
						"english": "Are those fairies the masters of this cave?",
						"japanese": "あの妖精たちがこの洞窟の主なのか？",
						"chinese": "那些妖精是这个洞穴的主人吗？",
						"french": "Ces fées sont-elles les maîtresses de cette grotte ?",
						"spanish": "¿Son esas hadas las dueñas de esta cueva?",
						"vietnamese": "Những nàng tiên đó là chủ nhân của hang động này sao?",
						"thai": "เหล่านางฟ้าพวกนั้นเป็นเจ้าของถ้ำนี้หรือ?",
						"hindi": "क्या वे परियाँ इस गुफा की मालकिन हैं?"
					},
					"type": "speech",
					"speaker": "character_1"
				},
				{
					"speaker": "ivar",
					"emotion": "base",
					"content": {
						"korean": "주인? 아니다. 그들은 오직 힘을 탐할 뿐.",
						"english": "Masters? No. They only covet power.",
						"japanese": "主？違う。彼らはただ力を貪るだけだ。",
						"chinese": "主人？不。它们只贪恋力量。",
						"french": "Maîtres ? Non. Ils ne font que convoiter le pouvoir.",
						"spanish": "¿Dueñas? No. Solo codician el poder.",
						"vietnamese": "Chủ nhân? Không. Chúng chỉ khao khát sức mạnh.",
						"thai": "เจ้าของ? ไม่ใช่. พวกมันแค่โลภในอำนาจเท่านั้น",
						"hindi": "मालकिन? नहीं। वे केवल शक्ति का लालच करते हैं।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "ivar",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "ivar",
					"emotion": "base",
					"content": {
						"korean": "나는 '강함의 끝'을 찾았다. 너희도 시험받을 것이다.",
						"english": "I have found the 'End of Strength'. You too shall be tested.",
						"japanese": "私は「強さの果て」を見つけた。貴様たちも試されるだろう。",
						"chinese": "我找到了“力量的尽头”。你们也将受到考验。",
						"french": "J'ai trouvé la 'Fin de la Force'. Vous serez aussi mis à l'épreuve.",
						"spanish": "He encontrado el 'Fin de la Fuerza'. Vosotros también seréis puestos a prueba.",
						"vietnamese": "Ta đã tìm thấy 'Giới hạn của Sức mạnh'. Các ngươi cũng sẽ bị thử thách.",
						"thai": "ข้าได้พบ 'จุดสิ้นสุดของความแข็งแกร่ง' แล้ว. พวกเจ้าก็จะถูกทดสอบเช่นกัน",
						"hindi": "मैंने 'शक्ति का अंत' खोज लिया है। तुम भी परखे जाओगे।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "시험?",
						"english": "Tested?",
						"japanese": "試される？",
						"chinese": "考验？",
						"french": "Une épreuve ?",
						"spanish": "¿Una prueba?",
						"vietnamese": "Thử thách sao?",
						"thai": "ทดสอบ?",
						"hindi": "परीक्षा?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "설원 요정들은 강한 자의 영혼을 선호한다. 너희의 힘이 그들의 먹잇감이 될지니.",
						"english": "The Snow Fairies prefer the souls of the strong. Your power will become their prey.",
						"japanese": "雪原の妖精は強き者の魂を好む。貴様たちの力が彼らの餌食となるだろう。",
						"chinese": "雪原妖精偏爱强者的灵魂。你们的力量将成为它们的猎物。",
						"french": "Les Fées des Neiges préfèrent les âmes des forts. Votre pouvoir deviendra leur proie.",
						"spanish": "Las Hadas de la Nieve prefieren las almas de los fuertes. Vuestro poder se convertirá en su presa.",
						"vietnamese": "Các nàng tiên Tuyết ưa thích linh hồn của kẻ mạnh. Sức mạnh của các ngươi sẽ trở thành con mồi của chúng.",
						"thai": "เหล่านางฟ้าหิมะชื่นชอบวิญญาณของผู้แข็งแกร่ง. พลังของเจ้าจะกลายเป็นเหยื่อของพวกมัน",
						"hindi": "बर्फीली परियाँ शक्तिशाली आत्माओं को पसंद करती हैं। तुम्हारी शक्ति उनका शिकार बनेगी।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "우리가 약하다고 비웃는 건가?",
						"english": "Are you mocking us for being weak?",
						"japanese": "我々が弱いと嘲笑うのか？",
						"chinese": "你是在嘲笑我们弱小吗？",
						"french": "Vous moquez-vous de notre faiblesse ?",
						"spanish": "¿Te estás burlando de nosotros por ser débiles?",
						"vietnamese": "Ngươi đang chế nhạo chúng ta yếu ớt sao?",
						"thai": "เจ้ากำลังเยาะเย้ยว่าเราอ่อนแอหรือ?",
						"hindi": "क्या तुम हमें कमज़ोर कहकर मज़ाक उड़ा रहे हो?"
					},
					"type": "speech",
					"speaker": "character_2"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…끝없는 굶주림을 이길 수 있다면.",
						"english": "...if you can overcome their endless hunger.",
						"japanese": "……終わりのない飢えに打ち勝つことができればな。",
						"chinese": "……如果你们能战胜它们无尽的饥饿。",
						"french": "...si vous pouvez vaincre leur faim insatiable.",
						"spanish": "...si podéis superar su hambre insaciable.",
						"vietnamese": "...nếu các ngươi có thể vượt qua cơn đói khát vô tận của chúng.",
						"thai": "...ถ้าเจ้าสามารถเอาชนะความหิวโหยที่ไม่สิ้นสุดได้",
						"hindi": "...अगर तुम उनकी अंतहीन भूख को हरा सको।"
					},
					"speaker": "ivar"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"type": "direction",
					"speaker": "ivar",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이 길을 지나면 되돌릴 수 없다.",
						"english": "Beyond this point, there's no return.",
						"japanese": "この道を超えれば、後戻りはできない。",
						"chinese": "过了此路，便无法回头。",
						"french": "Passé ce point, impossible de revenir en arrière.",
						"spanish": "Una vez que cruces este camino, no habrá vuelta atrás.",
						"vietnamese": "Qua con đường này, không thể quay lại được nữa.",
						"thai": "เมื่อผ่านเส้นทางนี้ไปแล้ว จะไม่มีทางย้อนกลับได้",
						"hindi": "इस रास्ते से गुज़रने के बाद, वापसी नहीं है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "ivar"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "우리는 진실을 알아야 해.",
						"english": "We must know the truth.",
						"japanese": "我々は真実を知らなければならない。",
						"chinese": "我们必须知道真相。",
						"french": "Nous devons connaître la vérité.",
						"spanish": "Debemos saber la verdad.",
						"vietnamese": "Chúng ta phải biết sự thật.",
						"thai": "เราต้องรู้ความจริง",
						"hindi": "हमें सच जानना होगा।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "진실? 아니, 절망이다. 나처럼, 너희도 끝없는 굶주림을 마주할 것이다.",
						"english": "Truth? No, it's despair. Like me, you too will face endless hunger.",
						"japanese": "真実？いや、絶望だ。私のように、お前たちも終わりなき飢えに直面するだろう。",
						"chinese": "真相？不，是绝望。像我一样，你们也将面临无尽的饥饿。",
						"french": "La vérité ? Non, c'est le désespoir. Comme moi, vous ferez face à une faim sans fin.",
						"spanish": "¿Verdad? No, es desesperación. Como yo, vosotros también enfrentaréis un hambre eterna.",
						"vietnamese": "Sự thật? Không, đó là tuyệt vọng. Giống như ta, các ngươi cũng sẽ đối mặt với cơn đói khát vô tận.",
						"thai": "ความจริง? ไม่ใช่ มันคือความสิ้นหวัง เหมือนกับฉัน พวกแกก็จะเผชิญหน้ากับความหิวโหยไม่สิ้นสุด",
						"hindi": "सच? नहीं, यह निराशा है। मेरी तरह, तुम भी अंतहीन भूख का सामना करोगे।"
					},
					"emotion": "sad",
					"speaker": "ivar"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…무슨 말을 하는 거야.",
						"english": "...What are you saying?",
						"japanese": "…何を言っているんだ。",
						"chinese": "…你在说什么。",
						"french": "...De quoi parles-tu ?",
						"spanish": "...¿De qué estás hablando?",
						"vietnamese": "...Ngươi đang nói gì vậy?",
						"thai": "...พูดเรื่องอะไรน่ะ",
						"hindi": "...तुम क्या कह रहे हो।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "얼음 동굴의 가장 깊은 곳. 거대한 그림자가 모습을 드러냈다.",
						"english": "The deepest part of the ice cave. A colossal shadow revealed itself.",
						"japanese": "氷の洞窟の最深部。巨大な影が姿を現した。",
						"chinese": "冰窟最深处。一个巨大的身影显露出来。",
						"french": "Au plus profond de la grotte de glace. Une ombre colossale s'est révélée.",
						"spanish": "La parte más profunda de la cueva de hielo. Una sombra colosal se reveló.",
						"vietnamese": "Nơi sâu nhất của động băng. Một bóng hình khổng lồ hiện ra.",
						"thai": "ส่วนที่ลึกที่สุดของถ้ำน้ำแข็ง เงาขนาดมหึมาได้ปรากฏตัวขึ้น",
						"hindi": "बर्फ की गुफा का सबसे गहरा हिस्सा। एक विशाल छाया प्रकट हुई।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "왔구나. 나의 새로운 먹잇감들이.",
						"english": "You've come. My new prey.",
						"japanese": "来たな。私の新たな獲物たちよ。",
						"chinese": "你们来了。我的新猎物们。",
						"french": "Vous êtes venus. Mes nouvelles proies.",
						"spanish": "Habéis venido. Mis nuevas presas.",
						"vietnamese": "Các ngươi đã đến. Mồi ngon mới của ta.",
						"thai": "มาแล้วสินะ เหยื่อรายใหม่ของข้า",
						"hindi": "तुम आ गए। मेरे नए शिकार।"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "네가 그 '설원 요정'인가!",
						"english": "You're the 'Snowfield Fairy'!",
						"japanese": "お前がその『雪原の妖精』か！",
						"chinese": "你就是那个‘雪原妖精’吗！",
						"french": "C'est toi, la 'Fée des Neiges' !",
						"spanish": "¿Eres tú la 'Hada de la Nieve'?",
						"vietnamese": "Ngươi chính là 'Tiên Nữ Tuyết Nguyên' đó sao!",
						"thai": "แกคือ 'นางฟ้าทุ่งหิมะ' สินะ!",
						"hindi": "क्या तुम वही 'बर्फ़ीली परी' हो!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "요정? 아름다운 환상 뒤에 숨겨진 진실은 늘 추악하지.",
						"english": "Fairy? The truth hidden behind beautiful illusions is always hideous.",
						"japanese": "妖精？美しい幻想の裏に隠された真実は、いつも醜いものだ。",
						"chinese": "妖精？美丽幻想背后隐藏的真相，总是丑陋不堪。",
						"french": "Fée ? La vérité cachée derrière les belles illusions est toujours hideuse.",
						"spanish": "¿Hada? La verdad oculta tras las bellas ilusiones siempre es espantosa.",
						"vietnamese": "Tiên nữ? Sự thật ẩn giấu sau những ảo ảnh đẹp đẽ luôn xấu xí.",
						"thai": "นางฟ้า? ความจริงที่ซ่อนอยู่เบื้องหลังภาพลวงตาอันงดงามนั้นมักจะน่าเกลียดเสมอ",
						"hindi": "परी? खूबसूरत भ्रम के पीछे छिपा सच हमेशा बदसूरत होता है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "너희의 절망, 그게 나의 양식이다.",
						"english": "Your despair, that is my sustenance.",
						"japanese": "お前たちの絶望、それが私の糧だ。",
						"chinese": "你们的绝望，那就是我的养分。",
						"french": "Votre désespoir, voilà ma subsistance.",
						"spanish": "Vuestra desesperación, ese es mi alimento.",
						"vietnamese": "Sự tuyệt vọng của các ngươi, đó là thức ăn của ta.",
						"thai": "ความสิ้นหวังของพวกเจ้า นั่นคืออาหารของข้า",
						"hindi": "तुम्हारी निराशा, वही मेरा भोजन है।"
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "내가 끝이라고 생각했나? 나는 그저… 그림자일 뿐.",
						"english": "Did you think I was the end? I am merely... a shadow.",
						"japanese": "私が終わりだと思ったか？私はただの…影に過ぎない。",
						"chinese": "你以为我就是结局吗？我不过是…一个影子罢了。",
						"french": "Pensiez-vous que j'étais la fin ? Je ne suis qu'une... ombre.",
						"spanish": "¿Pensasteis que yo era el final? Yo solo soy... una sombra.",
						"vietnamese": "Các ngươi nghĩ ta là kết thúc sao? Ta chỉ là... một cái bóng mà thôi.",
						"thai": "คิดว่าฉันเป็นจุดจบงั้นหรือ? ฉันก็แค่... เงาเท่านั้นเอง",
						"hindi": "क्या तुम्हें लगा कि मैं अंत था? मैं बस… एक परछाई हूँ।"
					},
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그림자? 그럼 진짜는…?",
						"english": "A shadow? Then the real one...?",
						"japanese": "影？じゃあ、本物は…？",
						"chinese": "影子？那真正的呢…？",
						"french": "Une ombre ? Alors le vrai… ?",
						"spanish": "¿Una sombra? ¿Entonces el verdadero…?",
						"vietnamese": "Bóng à? Vậy cái thật là…?",
						"thai": "เงาเหรอ? แล้วของจริงล่ะ...?",
						"hindi": "एक परछाई? तो असली वाला…?"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "쓰러진 정체 모를 존재. 그러나 알 수 없는 의문만 남았다.",
						"english": "An unknown entity felled. Yet, only unanswered questions remain.",
						"japanese": "倒れた正体不明の存在。しかし、残ったのは解き明かせぬ疑問だけだった。",
						"chinese": "倒下的无名存在。然而，只留下了未解的疑问。",
						"french": "Une entité inconnue abattue. Pourtant, seules des questions sans réponse subsistent.",
						"spanish": "Una entidad desconocida derribada. Sin embargo, solo quedan preguntas sin respuesta.",
						"vietnamese": "Một thực thể vô danh đã ngã xuống. Thế nhưng, chỉ còn lại những câu hỏi chưa lời đáp.",
						"thai": "ร่างไร้นามล้มลง แต่เหลือไว้เพียงปริศนาที่ยังไม่คลี่คลาย",
						"hindi": "एक अज्ञात सत्ता गिर गई। फिर भी, केवल अनसुलझे सवाल ही बचे हैं।"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "고대의 유적, 그곳에 감춰진 파편화된 기록들이 진실을 속삭인다.",
						"english": "Ancient ruins. Fragmented records hidden within whisper the truth.",
						"japanese": "古の遺跡、そこに隠された断片的な記録が真実を囁く。",
						"chinese": "古老的遗迹，其中隐藏的碎片化记录低语着真相。",
						"french": "Les ruines antiques. Des fragments de récits, cachés à l'intérieur, murmurent la vérité.",
						"spanish": "Las ruinas antiguas. Los fragmentos de registros ocultos en su interior susurran la verdad.",
						"vietnamese": "Di tích cổ xưa, những ghi chép rời rạc ẩn giấu trong đó thì thầm sự thật.",
						"thai": "ซากปรักหักพังโบราณ เศษเสี้ยวบันทึกที่ซ่อนอยู่กระซิบความจริง",
						"hindi": "प्राचीन खंडहर। उसके भीतर छिपे खंडित अभिलेख सत्य फुसफुसाते हैं।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "절망해라. 너희의 영혼은 나의 굶주림을 채울 뿐.",
						"english": "Despair. Your souls shall merely sate my hunger.",
						"japanese": "絶望しろ。お前たちの魂は、ただ我が飢えを満たすだけだ。",
						"chinese": "绝望吧。你们的灵魂，不过是满足我的饥渴罢了。",
						"french": "Désespérez. Vos âmes ne feront qu'apaiser ma faim.",
						"spanish": "Desesperad. Vuestras almas solo saciarán mi hambre.",
						"vietnamese": "Hãy tuyệt vọng đi. Linh hồn của các ngươi chỉ để thỏa mãn cơn đói của ta thôi.",
						"thai": "จงสิ้นหวังเถิด วิญญาณของพวกเจ้าเป็นเพียงเครื่องสังเวยแก่ความหิวกระหายของข้า",
						"hindi": "निराश हो जाओ। तुम्हारी आत्माएँ मेरी भूख मिटाने के लिए मात्र हैं।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아직 끝나지 않았어. 포기하지 않아.",
						"english": "It's not over yet. I won't give up.",
						"japanese": "まだ終わってない。諦めない。",
						"chinese": "还没结束。我不会放弃。",
						"french": "Ce n'est pas encore fini. Je n'abandonnerai pas.",
						"spanish": "Aún no ha terminado. No me rendiré.",
						"vietnamese": "Chưa kết thúc đâu. Tôi sẽ không bỏ cuộc.",
						"thai": "ยังไม่จบแค่นี้ ฉันไม่ยอมแพ้หรอก",
						"hindi": "अभी खत्म नहीं हुआ है। मैं हार नहीं मानूँगा।"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"얼음 동굴. 희망마저 얼어붙은 미지의 공간.",
			"길을 잃은 자는 빛을 좇았고, 빛은 그들을 집어삼켰다.",
			"오랜 설화 속 존재가 현실이 되는 순간.",
			"절망은, 그렇게 시작되었다."
		],
		"english": [
			"Ice Cave. An unknown space where even hope freezes.",
			"Those who lost their way chased the light, and the light devoured them.",
			"The moment a being from ancient lore becomes reality.",
			"Despair, thus began."
		],
		"japanese": [
			"氷の洞窟。希望すら凍りつく未知の空間。",
			"道を失った者は光を追い求め、光は彼らを飲み込んだ。",
			"古き伝説の存在が現実となる瞬間。",
			"絶望は、そうして始まった。"
		],
		"chinese": [
			"冰洞。连希望都冻结的未知空间。",
			"迷失者追逐光明，光明却吞噬了他们。",
			"古老传说中的存在成为现实的瞬间。",
			"绝望，就这样开始了。"
		],
		"french": [
			"La grotte de glace. Un espace inconnu où même l'espoir gèle.",
			"Ceux qui s'étaient perdus ont poursuivi la lumière, et la lumière les a dévorés.",
			"Le moment où une créature des légendes anciennes devient réalité.",
			"Le désespoir, ainsi commença."
		],
		"spanish": [
			"La cueva de hielo. Un espacio desconocido donde incluso la esperanza se congela.",
			"Los que se perdieron persiguieron la luz, y la luz los devoró.",
			"El momento en que un ser de la antigua leyenda se hace realidad.",
			"La desesperación, así comenzó."
		],
		"vietnamese": [
			"Hang băng. Một không gian vô định, nơi cả hy vọng cũng đóng băng.",
			"Những kẻ lạc lối đuổi theo ánh sáng, và ánh sáng nuốt chửng họ.",
			"Khoảnh khắc một thực thể trong truyền thuyết cổ xưa trở thành hiện thực.",
			"Sự tuyệt vọng, đã bắt đầu như thế."
		],
		"thai": [
			"ถ้ำน้ำแข็ง พื้นที่ลึกลับที่แม้แต่ความหวังก็ยังแข็งตัว",
			"ผู้หลงทางไล่ตามแสง และแสงก็กลืนกินพวกเขา",
			"ช่วงเวลาที่สิ่งมีชีวิตจากตำนานเก่าแก่กลายเป็นความจริง",
			"ความสิ้นหวังได้เริ่มต้นขึ้นแล้ว"
		],
		"hindi": [
			"बर्फीली गुफा। एक अज्ञात स्थान जहाँ आशा भी जम जाती है।",
			"जो रास्ता भटक गए, उन्होंने रोशनी का पीछा किया, और रोशनी ने उन्हें निगल लिया।",
			"वो पल जब प्राचीन लोककथाओं का प्राणी वास्तविकता बन जाता है।",
			"निराशा, इस प्रकार शुरू हुई।"
		]
	}
} as const;
