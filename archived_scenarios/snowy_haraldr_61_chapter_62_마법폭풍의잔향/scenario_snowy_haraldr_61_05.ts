export const scenario_snowy_haraldr_61_05 = {
	"scenario_id": "snowy_haraldr_61_05",
	"order": 5,
	"act": "climax_finale",
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
		"pool_id": "pool_106"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "폭풍의 심장부로 향하는 길. 과거와 현재가 뒤섞여 흐느꼈다.",
						"english": "The path to the heart of the storm. Past and present intertwined, weeping.",
						"japanese": "嵐の心臓部へと続く道。過去と現在が混じり合い、すすり泣いた。",
						"chinese": "通往风暴之心之路。过去与现在交织，呜咽着。",
						"french": "Le chemin vers le cœur de la tempête. Passé et présent entrelacés, pleurant.",
						"spanish": "El camino al corazón de la tormenta. Pasado y presente entrelazados, llorando.",
						"vietnamese": "Con đường đến trái tim bão tố. Quá khứ và hiện tại đan xen, thổn thức.",
						"thai": "เส้นทางสู่ใจกลางพายุ อดีตและปัจจุบันผสมผสานกัน ร้องไห้สะอึกสะอื้น",
						"hindi": "तूफान के दिल का रास्ता। अतीत और वर्तमान आपस में उलझकर रो रहे थे।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "정말… 멎지 않는 폭풍이군.",
						"english": "Truly... an unceasing storm.",
						"japanese": "本当に…止まない嵐だな。",
						"chinese": "真是……一场永不停歇的风暴啊。",
						"french": "Vraiment… une tempête incessante.",
						"spanish": "Realmente... una tormenta incesante.",
						"vietnamese": "Thật sự... một cơn bão không ngớt.",
						"thai": "จริงๆ แล้ว... เป็นพายุที่ไม่หยุดนิ่งเลย",
						"hindi": "वास्तव में... एक अथक तूफान।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "direction",
					"speaker": "ivar",
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
						"korean": "강함의 끝은 어디인가… 이 폭풍이 알려줄 것인가.",
						"english": "Where does strength end... Will this storm tell?",
						"japanese": "強さの果てはどこか…この嵐が教えてくれるのか。",
						"chinese": "力量的尽头在哪里……这场风暴会告诉我吗？",
						"french": "Où est la limite de la force... Cette tempête le révélera-t-elle ?",
						"spanish": "¿Dónde está el límite de la fuerza... Me lo dirá esta tormenta?",
						"vietnamese": "Giới hạn của sức mạnh ở đâu... Cơn bão này sẽ cho ta biết ư?",
						"thai": "จุดสิ้นสุดของความแข็งแกร่งอยู่ที่ใด… พายุลูกนี้จะบอกเราหรือไม่?",
						"hindi": "शक्ति का अंत कहाँ है... क्या यह तूफ़ान बताएगा?"
					},
					"speaker": "ivar",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "ivar",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "폭풍이… 마치 살아있는 것 같군.",
						"english": "The storm... it feels alive.",
						"japanese": "嵐が…まるで生きているようだ。",
						"chinese": "这暴风雨……仿佛有生命一般。",
						"french": "La tempête... elle semble vivante.",
						"spanish": "La tormenta... parece que tiene vida.",
						"vietnamese": "Cơn bão... cứ như thể nó đang sống vậy.",
						"thai": "พายุ… ดูเหมือนมีชีวิตเลย",
						"hindi": "तूफ़ान... जैसे जीवित हो।"
					},
					"speaker": "ivar"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "Haraldr가 격해질수록 폭풍도 거세지는 것 같아.",
						"english": "As Haraldr rages, the storm seems to grow fiercer.",
						"japanese": "Haraldrが激しくなるにつれて、嵐も荒れ狂うようだ。",
						"chinese": "Haraldr越是激愤，风暴也似乎越发狂暴。",
						"french": "Plus Haraldr s'enflamme, plus la tempête semble se déchaîner.",
						"spanish": "Cuanto más se exalta Haraldr, más violenta parece la tormenta.",
						"vietnamese": "Haraldr càng nổi giận, cơn bão càng dữ dội hơn.",
						"thai": "ยิ่ง Haraldr โกรธเกรี้ยวเท่าไร พายุก็ยิ่งบ้าคลั่งขึ้นเท่านั้น",
						"hindi": "जैसे-जैसे Haraldr उग्र होता है, तूफ़ान भी और तेज़ होता जाता है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그의 열망이 폭풍을 부르는 것인가?",
						"english": "Is his desire summoning the storm?",
						"japanese": "彼の熱望が嵐を呼んでいるのか？",
						"chinese": "是他的渴望在召唤风暴吗？",
						"french": "Est-ce son désir qui appelle la tempête ?",
						"spanish": "¿Es su anhelo lo que invoca la tormenta?",
						"vietnamese": "Có phải khát vọng của hắn đang gọi bão đến không?",
						"thai": "ความปรารถนาของเขาเรียกพายุมาหรือเปล่า?",
						"hindi": "क्या उसकी इच्छा तूफ़ान को बुला रही है?"
					},
					"speaker": "ivar"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "ivar",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 똑같은 장면… 계속 반복되는군. 무릎 꿇는 전사.",
						"english": "This same scene... it keeps repeating. The kneeling warrior.",
						"japanese": "この同じ光景…何度も繰り返される。跪く戦士。",
						"chinese": "同样的场景……不断重复。跪下的战士。",
						"french": "Cette même scène... elle se répète sans cesse. Le guerrier à genoux.",
						"spanish": "La misma escena... se repite una y otra vez. El guerrero arrodillado.",
						"vietnamese": "Cảnh tượng này... cứ lặp đi lặp lại. Chiến binh quỳ gối.",
						"thai": "ฉากเดิมๆ นี้… วนซ้ำไม่หยุด. นักรบที่คุกเข่า",
						"hindi": "यह वही दृश्य... बार-बार दोहराया जा रहा है। घुटनों के बल झुका योद्धा।"
					},
					"speaker": "ivar",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "마지막 순간의 기억인가… 왜 그는 인정하지 못하는 거지?",
						"english": "A memory of his final moment... Why can't he accept it?",
						"japanese": "最後の一瞬の記憶か…なぜ彼は認められないのか？",
						"chinese": "是临终的记忆吗……他为何无法接受？",
						"french": "Un souvenir de son dernier instant... Pourquoi ne peut-il l'accepter ?",
						"spanish": "¿Es un recuerdo de su último momento... Por qué no puede aceptarlo?",
						"vietnamese": "Hồi ức về khoảnh khắc cuối cùng... Sao hắn không thể chấp nhận?",
						"thai": "ความทรงจำของช่วงสุดท้ายหรือ… ทำไมเขาถึงยอมรับไม่ได้?",
						"hindi": "अंतिम क्षण की स्मृति... वह इसे क्यों नहीं स्वीकार कर पा रहा?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "인정하지 않으면, 영원히 싸울 수 있다고 믿는 것일지도.",
						"english": "Perhaps he believes if he doesn't accept it, he can fight forever.",
						"japanese": "認めなければ、永遠に戦い続けられると信じているのかもしれない。",
						"chinese": "也许他相信，只要不承认，就能永远战斗下去。",
						"french": "Peut-être croit-il que s'il n'accepte pas, il pourra combattre éternellement.",
						"spanish": "Quizás cree que si no lo acepta, podrá luchar para siempre.",
						"vietnamese": "Có lẽ hắn tin rằng nếu không chấp nhận, hắn có thể chiến đấu mãi mãi.",
						"thai": "บางทีเขาอาจเชื่อว่า ถ้าไม่ยอมรับ เขาก็จะสู้ต่อไปได้ตลอดไป",
						"hindi": "शायद वह मानता है कि अगर वह स्वीकार नहीं करेगा, तो हमेशा लड़ सकता है।"
					},
					"speaker": "ivar",
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ivar",
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
						"korean": "출구가 없어. 모든 길이 제자리로 돌아와.",
						"english": "There's no exit. Every path leads back.",
						"japanese": "出口はない。全ての道が元に戻る。",
						"chinese": "没有出口。所有道路都回到原点。",
						"french": "Il n'y a pas d'issue. Tous les chemins ramènent au point de départ.",
						"spanish": "No hay salida. Todos los caminos regresan al mismo lugar.",
						"vietnamese": "Không có lối thoát. Mọi con đường đều quay về điểm xuất phát.",
						"thai": "ไม่มีทางออก ทุกเส้นทางวนกลับมาที่เดิม",
						"hindi": "कोई रास्ता नहीं। हर राह वापस वहीं ले आती है।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "폭풍은 밖이 아니라… 그의 안에 있었다.",
						"english": "The storm was not outside... but within him.",
						"japanese": "嵐は外ではなく…彼の内にあった。",
						"chinese": "风暴不在外面……而是在他心中。",
						"french": "La tempête n'était pas à l'extérieur... mais en lui.",
						"spanish": "La tormenta no estaba fuera... sino dentro de él.",
						"vietnamese": "Cơn bão không ở bên ngoài... mà ở bên trong hắn.",
						"thai": "พายุไม่ได้อยู่ข้างนอก… แต่อยู่ในตัวเขา",
						"hindi": "तूफ़ान बाहर नहीं... बल्कि उसके अंदर था।"
					},
					"speaker": "ivar",
					"emotion": "base"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "내가 한때 그러했듯… 스스로를 가둔 것인가.",
						"english": "As I once did... has he imprisoned himself?",
						"japanese": "かつて私がそうだったように…彼は自らを閉じ込めたのか。",
						"chinese": "就像我曾经那样……他把自己困住了吗？",
						"french": "Comme je l'ai fait autrefois... s'est-il emprisonné lui-même ?",
						"spanish": "Como yo lo hice una vez... ¿se ha encerrado a sí mismo?",
						"vietnamese": "Giống như ta từng... hắn đã tự nhốt mình sao?",
						"thai": "เหมือนที่ฉันเคยทำ… เขาขังตัวเองไว้หรือเปล่า?",
						"hindi": "जैसा मैंने कभी किया था... क्या उसने ख़ुद को क़ैद कर लिया है?"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이 폭풍은… 내가 부른 게 아니야!",
						"english": "This storm… I didn't summon it!",
						"japanese": "「この嵐は…私が呼んだものじゃない！」",
						"chinese": "这场风暴…不是我召唤的！",
						"french": "Cette tempête… je ne l'ai pas invoquée !",
						"spanish": "Esta tormenta… ¡yo no la provoqué!",
						"vietnamese": "Cơn bão này… không phải do ta gọi đến!",
						"thai": "พายุนี้... ข้าไม่ได้เรียกมันมา!",
						"hindi": "यह तूफ़ान... मैंने नहीं बुलाया!"
					},
					"speaker": "boss"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "하지만 폭풍은 그의 열망에 맞춰 더욱 거세졌다. 얼어 죽던 순간의 잔향이 그를 휘감았다.",
						"english": "But the storm raged fiercer, mirroring his desires. The lingering chill of his dying moments engulfed him.",
						"japanese": "「しかし嵐は彼の熱望に合わせてさらに激しさを増した。凍え死んだ瞬間の残響が彼を包み込んだ。」",
						"chinese": "然而风暴却应和着他的渴望变得更加猛烈。他临死前冰冷的余韵缠绕着他。",
						"french": "Mais la tempête redoubla de rage, reflétant ses désirs. Le souvenir glacial de ses derniers instants l'enveloppa.",
						"spanish": "Pero la tormenta se hizo más feroz, reflejando sus deseos. El frío remanente de sus últimos momentos lo envolvió.",
						"vietnamese": "Nhưng cơn bão càng dữ dội hơn, phản chiếu khát vọng của hắn. Dư âm lạnh giá của khoảnh khắc hắn chết bao trùm lấy hắn.",
						"thai": "แต่พายุกลับโหมกระหน่ำรุนแรงขึ้นตามความปรารถนาของเขา กลิ่นอายสุดท้ายของช่วงเวลาที่เขาแข็งตายได้โอบล้อมเขาไว้",
						"hindi": "परंतु तूफ़ान उसकी इच्छाओं के अनुरूप और प्रचंड हो गया। उसके मृत्युकाल के शीतल अवशेष उसे घेर गए।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "…내가, 나를 가둔 거였나.",
						"english": "…Was it I, who imprisoned myself?",
						"japanese": "「…私が、私を閉じ込めていたのか。」",
						"chinese": "…是我，将自己困住了吗？",
						"french": "…C'est moi qui m'étais emprisonné ?",
						"spanish": "¿Fui yo quien me aprisionó?",
						"vietnamese": "…Là ta, đã tự nhốt mình sao.",
						"thai": "...ข้า, คือผู้ขังตัวเองไว้หรือ",
						"hindi": "...क्या मैंने ही ख़ुद को क़ैद किया था?"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "진실을 마주한 그가 폭풍과 하나 되어 폭주한다.",
						"english": "Facing the truth, he became one with the storm, running wild.",
						"japanese": "「真実と向き合った彼が、嵐と一つになって暴走する。」",
						"chinese": "直面真相的他与风暴融为一体，彻底失控。",
						"french": "Face à la vérité, il fusionne avec la tempête et se déchaîne.",
						"spanish": "Al enfrentarse a la verdad, él se une a la tormenta y enloquece.",
						"vietnamese": "Đối mặt với sự thật, hắn hòa làm một với cơn bão, cuồng loạn.",
						"thai": "เมื่อเผชิญหน้ากับความจริง เขาก็รวมเป็นหนึ่งเดียวกับพายุและบ้าคลั่ง",
						"hindi": "सत्य का सामना करते हुए, वह तूफ़ान से एक होकर उन्मत्त हो उठा।"
					}
				},
				{
					"type": "direction",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"speaker": "ivar",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그 감옥에서 끌어내주겠다, Haraldr!",
						"english": "I'll drag you out of that prison, Haraldr!",
						"japanese": "「その監獄から引きずり出してやる、Haraldr！」",
						"chinese": "我会把你从那个牢笼里拖出来，Haraldr！",
						"french": "Je vais te tirer de cette prison, Haraldr !",
						"spanish": "¡Te sacaré de esa prisión, Haraldr!",
						"vietnamese": "Ta sẽ kéo ngươi ra khỏi nhà tù đó, Haraldr!",
						"thai": "ข้าจะดึงเจ้าออกมาจากคุกนั่น, Haraldr!",
						"hindi": "मैं तुम्हें उस कारावास से बाहर निकालूँगा, Haraldr!"
					},
					"speaker": "ivar",
					"emotion": "angry"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…끝없는 싸움이 끝났군. 결국… 나를 이겼어.",
						"english": "…The endless struggle is over. In the end… you defeated me.",
						"japanese": "「…終わりなき戦いが終わったな。結局…私に勝ったか。」",
						"chinese": "…无尽的战斗结束了。最终…你战胜了我。",
						"french": "…La lutte sans fin est terminée. Finalement… tu m'as vaincu.",
						"spanish": "…La lucha sin fin ha terminado. Al final… me derrotaste.",
						"vietnamese": "…Cuộc chiến không hồi kết đã chấm dứt. Rốt cuộc… ngươi đã đánh bại ta.",
						"thai": "การต่อสู้ที่ไม่มีวันสิ้นสุด... จบลงแล้ว ในที่สุด... เจ้าก็เอาชนะข้าได้",
						"hindi": "...अनंत युद्ध समाप्त हुआ। अंततः... तुमने मुझे हराया।"
					},
					"speaker": "boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "폭풍이 멎어가고 있어.",
						"english": "The storm is subsiding.",
						"japanese": "「嵐が収まりつつある。」",
						"chinese": "风暴正在平息。",
						"french": "La tempête s'apaise.",
						"spanish": "La tormenta está amainando.",
						"vietnamese": "Cơn bão đang dần lặng đi.",
						"thai": "พายุกำลังสงบลงแล้ว",
						"hindi": "तूफ़ान थम रहा है।"
					},
					"speaker": "character_any",
					"emotion": "happy"
				},
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "ivar",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그는 결국 자신과의 싸움에서 졌어. 영광도, 강함도… 덧없군.",
						"english": "He ultimately lost the battle against himself. Glory, strength… all fleeting.",
						"japanese": "「彼は結局自分との戦いに敗れた。栄光も、強さも…儚いものだな。」",
						"chinese": "他最终在与自己的战斗中落败。荣耀也好，强大也罢…皆是虚无。",
						"french": "Il a finalement perdu la bataille contre lui-même. Gloire, puissance… tout est éphémère.",
						"spanish": "Finalmente perdió la batalla contra sí mismo. Gloria, fuerza… todo es efímero.",
						"vietnamese": "Hắn rốt cuộc đã thua trong cuộc chiến với chính mình. Vinh quang, sức mạnh… tất cả đều vô thường.",
						"thai": "ในที่สุดเขาก็พ่ายแพ้ในการต่อสู้กับตัวเอง ทั้งเกียรติยศและความแข็งแกร่ง... ล้วนไร้ความหมาย",
						"hindi": "वह अंततः अपने आप से युद्ध में हार गया। महिमा, शक्ति… सब क्षणभंगुर हैं।"
					},
					"speaker": "ivar"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "폭풍이 걷히고, 고대 빙원의 진실이 드러났다.",
						"english": "The storm cleared, revealing the truth of the ancient ice plain.",
						"japanese": "「嵐が晴れ、古代氷原の真実が明らかになった。」",
						"chinese": "风暴散去，古代冰原的真相显露无遗。",
						"french": "La tempête s'est levée, révélant la vérité de l'ancienne plaine de glace.",
						"spanish": "La tormenta se disipó, revelando la verdad de la antigua llanura de hielo.",
						"vietnamese": "Cơn bão tan đi, sự thật về cao nguyên băng cổ đại dần hé lộ.",
						"thai": "พายุได้คลี่คลายลง และความจริงของที่ราบน้ำแข็งโบราณก็ถูกเปิดเผย",
						"hindi": "तूफ़ान छँट गया, प्राचीन हिमभूमि की सच्चाई सामने आई।"
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "이것이 너의 끝인가? 나처럼, 영원히 이곳에 갇히는가?",
						"english": "Is this your end? Like me, will you be trapped here forever?",
						"japanese": "「これが貴様の終わりか？私のように、永遠にここに囚われるのか？」",
						"chinese": "这就是你的终结吗？像我一样，永远被困在这里吗？",
						"french": "Est-ce ta fin ? Comme moi, seras-tu piégé ici pour l'éternité ?",
						"spanish": "¿Es este tu fin? ¿Como yo, quedarás atrapado aquí para siempre?",
						"vietnamese": "Đây là kết cục của ngươi sao? Ngươi sẽ bị giam cầm ở đây mãi mãi, giống như ta?",
						"thai": "นี่คือจุดจบของเจ้าหรือ? เช่นเดียวกับข้า, เจ้าจะถูกจองจำอยู่ที่นี่ตลอดไปหรือ?",
						"hindi": "क्या यह तुम्हारा अंत है? क्या तुम भी मेरी तरह, यहाँ हमेशा के लिए क़ैद हो जाओगे?"
					},
					"speaker": "boss",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…아니, 아직 끝나지 않았어!",
						"english": "...No, it's not over yet!",
						"japanese": "...いや、まだ終わってない！",
						"chinese": "...不，还没结束！",
						"french": "...Non, ce n'est pas encore fini !",
						"spanish": "...¡No, todavía no ha terminado!",
						"vietnamese": "...Không, vẫn chưa kết thúc!",
						"thai": "...ไม่สิ ยังไม่จบ!",
						"hindi": "...नहीं, अभी खत्म नहीं हुआ है!"
					}
				},
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "ivar",
					"type": "direction"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "포기하지 마라! 스스로 만든 감옥에 갇히는 건 너답지 않아!",
						"english": "Don't give up! It's not like you to be trapped in a prison of your own making!",
						"japanese": "諦めるな！自分で作った監獄に閉じこもるのは、お前らしくないぞ！",
						"chinese": "不要放弃！被自己制造的牢笼困住可不是你的风格！",
						"french": "N'abandonne pas ! Ce n'est pas ton genre de t'enfermer dans une prison que tu as toi-même créée !",
						"spanish": "¡No te rindas! ¡No es propio de ti quedar atrapado en una prisión que tú mismo creaste!",
						"vietnamese": "Đừng bỏ cuộc! Bị mắc kẹt trong nhà tù do chính mình tạo ra không phải là phong cách của bạn!",
						"thai": "อย่ายอมแพ้! ไม่ใช่เธอเลยที่จะถูกขังอยู่ในคุกที่สร้างขึ้นเอง!",
						"hindi": "हार मत मानो! खुद बनाई हुई जेल में कैद होना तुम्हारी फितरत नहीं है!"
					},
					"speaker": "ivar"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"폭풍은 잠잠해졌다. 마치 거대한 존재가 숨을 거둔 것처럼.",
			"Haraldr는 사라졌다. 혹은, 드디어 자유로워졌을지도.",
			"이바르는 강함의 끝을 보았다. 그리고 그 끝에서, 자신을 돌아보았다.",
			"고요한 빙원 위에, 차가운 바람만이 속삭였다. 이것이 끝인가, 아니면 새로운 시작인가."
		],
		"english": [
			"The storm quieted. As if a colossal being had drawn its last breath.",
			"Haraldr vanished. Or perhaps, was finally free.",
			"Ivar saw the limits of strength. And at that end, looked back at himself.",
			"On the silent ice field, only a cold wind whispered. Is this the end, or a new beginning?"
		],
		"japanese": [
			"嵐は静まった。まるで巨大な存在が息絶えたかのように。",
			"ハラルドルは消えた。あるいは、ついに自由になったのかもしれない。",
			"イヴァルは強さの果てを見た。そしてその果てで、自分自身を振り返った。",
			"静かな氷原の上、冷たい風だけが囁いた。これは終わりか、それとも新たな始まりか。"
		],
		"chinese": [
			"风暴平息了。仿佛一个巨大的存在停止了呼吸。",
			"哈拉尔德消失了。或许，他终于自由了。",
			"伊瓦尔看到了力量的尽头。并在那尽头，审视了自己。",
			"在寂静的冰原上，只有寒风低语。这是结束，还是新的开始？"
		],
		"french": [
			"La tempête s'est calmée. Comme si un être colossal avait rendu son dernier souffle.",
			"Haraldr a disparu. Ou peut-être, fut-il enfin libre.",
			"Ivar vit les limites de la force. Et à cette fin, il se regarda en arrière.",
			"Sur la plaine de glace silencieuse, seul un vent froid murmurait. Est-ce la fin, ou un nouveau commencement ?"
		],
		"spanish": [
			"La tormenta se calmó. Como si un ser colosal hubiera exhalado su último aliento.",
			"Haraldr desapareció. O tal vez, finalmente fue libre.",
			"Ivar vio los límites de la fuerza. Y en ese final, se miró a sí mismo.",
			"Sobre el silencioso campo de hielo, solo un viento frío susurraba. ¿Es este el final, o un nuevo comienzo?"
		],
		"vietnamese": [
			"Cơn bão đã lắng xuống. Như thể một sinh vật khổng lồ đã trút hơi thở cuối cùng.",
			"Haraldr đã biến mất. Hoặc có lẽ, cuối cùng đã được tự do.",
			"Ivar đã nhìn thấy giới hạn của sức mạnh. Và ở cuối cùng đó, hắn đã nhìn lại chính mình.",
			"Trên cánh đồng băng tĩnh lặng, chỉ có gió lạnh thì thầm. Đây là kết thúc, hay một khởi đầu mới?"
		],
		"thai": [
			"พายุสงบลง ราวกับว่าสิ่งมีชีวิตขนาดมหึมาได้สิ้นใจ",
			"ฮาราลด์หายไป หรือบางที อาจจะเป็นอิสระในที่สุด",
			"อีวาร์ได้เห็นขีดจำกัดของความแข็งแกร่ง และในที่สุดเขาก็หันกลับมามองตัวเอง",
			"บนทุ่งน้ำแข็งที่เงียบงัน มีเพียงลมหนาวกระซิบ นี่คือจุดจบ หรือจุดเริ่มต้นใหม่กันแน่"
		],
		"hindi": [
			"तूफान शांत हो गया। मानो किसी विशालकाय प्राणी ने आखिरी सांस ली हो।",
			"हरलद्र गायब हो गया। या शायद, अंततः आज़ाद हो गया।",
			"इवार ने ताकत की सीमाएं देखीं। और उस अंत पर, खुद को पीछे मुड़कर देखा।",
			"शांत बर्फ के मैदान पर, केवल एक ठंडी हवा फुसफुसा रही थी। क्या यह अंत है, या एक नई शुरुआत?"
		]
	},
	"prologue": {
		"korean": [
			"폭풍의 심장부. 모든 것이 그의 기억으로 뒤틀렸다.",
			"그는 폭풍이 자신을 가뒀다고 믿었다.",
			"하지만 진실은, 그가 폭풍 그 자체였다는 것.",
			"강함의 끝을 시험하는 자, 이바르는 그 진실을 마주할 것이다."
		],
		"english": [
			"Heart of the storm. Everything twisted by his memory.",
			"He believed the storm had trapped him.",
			"But the truth was, he was the storm itself.",
			"Ivar, who tests the limits of strength, will face that truth."
		],
		"japanese": [
			"嵐の心臓部。全てが彼の記憶によって歪められた。",
			"彼は嵐が自分を閉じ込めたと信じていた。",
			"しかし真実は、彼こそが嵐そのものだったということ。",
			"強さの果てを試す者、イヴァルはその真実に向き合うだろう。"
		],
		"chinese": [
			"风暴之心。一切都因他的记忆而扭曲。",
			"他相信风暴困住了他。",
			"但真相是，他就是风暴本身。",
			"挑战力量极限者，伊瓦尔将面对那个真相。"
		],
		"french": [
			"Cœur de la tempête. Tout fut tordu par sa mémoire.",
			"Il croyait que la tempête l'avait piégé.",
			"Mais la vérité était qu'il était la tempête elle-même.",
			"Ivar, celui qui teste les limites de la force, fera face à cette vérité."
		],
		"spanish": [
			"Corazón de la tormenta. Todo distorsionado por su memoria.",
			"Él creía que la tormenta lo había atrapado.",
			"Pero la verdad era que él era la tormenta misma.",
			"Ivar, quien prueba los límites de la fuerza, enfrentará esa verdad."
		],
		"vietnamese": [
			"Trái tim bão tố. Mọi thứ bị bóp méo bởi ký ức của hắn.",
			"Hắn tin rằng cơn bão đã giam cầm mình.",
			"Nhưng sự thật là, hắn chính là cơn bão.",
			"Ivar, kẻ thử thách giới hạn của sức mạnh, sẽ đối mặt với sự thật đó."
		],
		"thai": [
			"ใจกลางพายุ ทุกสิ่งบิดเบี้ยวด้วยความทรงจำของเขา",
			"เขาเชื่อว่าพายุได้ขังเขาไว้",
			"แต่ความจริงคือ เขาคือพายุนั้นเอง",
			"อีวาร์ ผู้ทดสอบขีดจำกัดของความแข็งแกร่ง จะเผชิญหน้ากับความจริงนั้น"
		],
		"hindi": [
			"तूफान का दिल। सब कुछ उसकी याददाश्त से बिगड़ गया था।",
			"उसे विश्वास था कि तूफान ने उसे फंसा लिया है।",
			"लेकिन सच्चाई यह थी कि वह खुद तूफान था।",
			"इवार, जो ताकत की सीमाओं का परीक्षण करता है, उस सच्चाई का सामना करेगा।"
		]
	}
} as const;
