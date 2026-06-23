export const scenario_snowy_frostheart_56_03 = {
	"scenario_id": "snowy_frostheart_56_03",
	"order": 3,
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
	"prologue": {
		"korean": [
			"끝없는 얼음 동굴, 시간마저 얼어붙은 곳.",
			"한때 영광을 좇던 전사는 그 안에서 길을 잃었다.",
			"반복되는 절망 속, 그는 무엇을 발견했나.",
			"어쩌면, 탈출의 열쇠는 가장 익숙한 곳에."
		],
		"english": [
			"Endless ice cave, where even time is frozen.",
			"A warrior, once chasing glory, lost his way within.",
			"In recurring despair, what did he discover?",
			"Perhaps, the key to escape lies in the most familiar place."
		],
		"japanese": [
			"終わりのない氷の洞窟、時間さえ凍りついた場所。",
			"かつて栄光を追い求めた戦士は、その中で道を見失った。",
			"繰り返される絶望の中、彼が見つけたものは？",
			"もしかしたら、脱出の鍵は最も慣れ親しんだ場所に。"
		],
		"chinese": [
			"无尽的冰洞，连时间都被冻结。",
			"一位曾追逐荣耀的战士，在其中迷失了方向。",
			"在重复的绝望中，他发现了什么？",
			"也许，逃脱的关键就在最熟悉的地方。"
		],
		"french": [
			"Une grotte de glace infinie, où même le temps est figé.",
			"Un guerrier, jadis en quête de gloire, s'y égara.",
			"Dans un désespoir récurrent, qu'a-t-il découvert ?",
			"Peut-être que la clé de l'évasion se trouve à l'endroit le plus familier."
		],
		"spanish": [
			"Cueva de hielo interminable, donde hasta el tiempo está congelado.",
			"Un guerrero, que una vez persiguió la gloria, se perdió en ella.",
			"En la desesperación recurrente, ¿qué descubrió?",
			"Quizás, la clave para escapar reside en el lugar más familiar."
		],
		"vietnamese": [
			"Hang băng vô tận, nơi thời gian cũng đóng băng.",
			"Một chiến binh, từng theo đuổi vinh quang, đã lạc lối bên trong.",
			"Trong sự tuyệt vọng lặp đi lặp lại, anh ấy đã khám phá ra điều gì?",
			"Có lẽ, chìa khóa để thoát thân nằm ở nơi quen thuộc nhất."
		],
		"thai": [
			"ถ้ำน้ำแข็งอันไร้ที่สิ้นสุด ที่ซึ่งแม้แต่เวลาก็ถูกแช่แข็ง",
			"นักรบผู้เคยไล่ล่าความรุ่งโรจน์ ได้หลงทางอยู่ในนั้น",
			"ในความสิ้นหวังที่ซ้ำซาก เขาสามาค้นพบอะไร?",
			"บางที กุญแจสู่การหลบหนีอาจอยู่ในที่ที่คุ้นเคยที่สุด"
		],
		"hindi": [
			"अंतहीन बर्फीली गुफा, जहाँ समय भी जम गया है।",
			"एक योद्धा, जो कभी महिमा का पीछा करता था, उसमें रास्ता भटक गया।",
			"बार-बार की निराशा में, उसने क्या खोजा?",
			"शायद, भागने की कुंजी सबसे परिचित जगह में है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "얼음 동굴 입구, 차가운 공기가 폐부를 찔렀다.",
						"english": "Ice cave entrance, cold air pierced the lungs.",
						"japanese": "氷の洞窟の入り口、冷たい空気が肺を突き刺した。",
						"chinese": "冰洞入口，冰冷的空气刺入肺腑。",
						"french": "Entrée de la grotte de glace, l'air froid transperçait les poumons.",
						"spanish": "Entrada a la cueva de hielo, el aire frío perforó los pulmones.",
						"vietnamese": "Lối vào hang băng, không khí lạnh buốt đâm xuyên phổi.",
						"thai": "ทางเข้าถ้ำน้ำแข็ง อากาศหนาวเย็นเสียดแทงปอด",
						"hindi": "बर्फीली गुफा का प्रवेश द्वार, ठंडी हवा फेफड़ों को भेद गई।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "으스스해. 뭔가 잘못된 느낌이야.",
						"english": "It's eerie. Something feels wrong.",
						"japanese": "気味が悪い。何かがおかしい感じがする。",
						"chinese": "毛骨悚然。感觉有什么不对劲。",
						"french": "C'est sinistre. Quelque chose ne va pas.",
						"spanish": "Es espeluznante. Algo se siente mal.",
						"vietnamese": "Rợn người quá. Có gì đó không ổn.",
						"thai": "มันน่าขนลุก. รู้สึกเหมือนมีอะไรบางอย่างผิดปกติ",
						"hindi": "यह डरावना है। कुछ गलत लग रहा है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이바르의 흔적은? 분명 여기 어딘가에…",
						"english": "Traces of Ivar? He must be here somewhere...",
						"japanese": "イヴァールの痕跡は？きっとこの辺りのどこかに…",
						"chinese": "伊瓦尔的踪迹呢？他一定在这里的某个地方……",
						"french": "Des traces d'Ivar ? Il doit être quelque part par ici...",
						"spanish": "¿Rastros de Ivar? Debe estar aquí en algún lugar...",
						"vietnamese": "Dấu vết của Ivar? Chắc chắn anh ấy ở đâu đó quanh đây...",
						"thai": "ร่องรอยของอีวาร์? เขาต้องอยู่ที่ไหนสักแห่งแถวนี้...",
						"hindi": "इवर के निशान? वह यहीं कहीं होना चाहिए..."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_1"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "벽면에는 알 수 없는 문양들이 빼곡했다.",
						"english": "The walls were covered with unknown patterns.",
						"japanese": "壁面には、未知の模様がびっしりと描かれていた。",
						"chinese": "墙壁上密密麻麻地刻着未知的图案。",
						"french": "Les murs étaient couverts de motifs inconnus.",
						"spanish": "Las paredes estaban cubiertas de patrones desconocidos.",
						"vietnamese": "Các bức tường dày đặc những hoa văn không rõ.",
						"thai": "ผนังเต็มไปด้วยลวดลายที่ไม่รู้จัก",
						"hindi": "दीवारें अज्ञात पैटर्न से ढकी हुई थीं।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						5,
						2
					],
					"action": "enter",
					"speaker": "ivar",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "ivar",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…또 너희인가. 아니, 너희는 처음인가?",
						"english": "...You again? No, is this your first time?",
						"japanese": "…またお前たちか。いや、お前たちは初めてか？",
						"chinese": "……又是你们吗？不，你们是第一次来吗？",
						"french": "...Encore vous ? Non, est-ce votre première fois ?",
						"spanish": "¿Vosotros otra vez? No, ¿es vuestra primera vez?",
						"vietnamese": "...Lại là các ngươi à. Không, đây là lần đầu của các ngươi sao?",
						"thai": "...พวกเจ้าอีกแล้วรึ? ไม่สิ นี่เป็นครั้งแรกของพวกเจ้าเหรอ?",
						"hindi": "...फिर तुम लोग? नहीं, क्या तुम लोग पहली बार आए हो?"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "당신은… 이바르?",
						"english": "You are... Ivar?",
						"japanese": "あなたは…イヴァール？",
						"chinese": "你是……伊瓦尔？",
						"french": "Vous êtes... Ivar ?",
						"spanish": "¿Tú eres... Ivar?",
						"vietnamese": "Ngươi là... Ivar?",
						"thai": "ท่านคือ... อีวาร์?",
						"hindi": "तुम हो... इवर?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "난 수백 번을 여기서 헤매었어. 똑같은 얼음, 똑같은 길… 미치겠군.",
						"english": "I've wandered here hundreds of times. The same ice, the same path... It's driving me mad.",
						"japanese": "ここで何百回も迷った。同じ氷、同じ道…気が変になりそうだ。",
						"chinese": "我在这里迷失了数百次。同样的冰，同样的路……要疯了。",
						"french": "J'ai erré ici des centaines de fois. La même glace, le même chemin… Ça me rend fou.",
						"spanish": "He vagado por aquí cientos de veces. El mismo hielo, el mismo camino... Me está volviendo loco.",
						"vietnamese": "Tôi đã lang thang ở đây hàng trăm lần rồi. Cùng một tảng băng, cùng một con đường... Phát điên mất thôi.",
						"thai": "ฉันหลงทางที่นี่มาหลายร้อยครั้งแล้ว น้ำแข็งเดิมๆ ทางเดิมๆ... บ้าไปแล้ว",
						"hindi": "मैं यहाँ सैकड़ों बार भटक चुका हूँ। वही बर्फ, वही रास्ता... मैं पागल हो रहा हूँ।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "수백 번?",
						"english": "Hundreds of times?",
						"japanese": "何百回も？",
						"chinese": "数百次？",
						"french": "Des centaines de fois ?",
						"spanish": "¿Cientos de veces?",
						"vietnamese": "Hàng trăm lần?",
						"thai": "หลายร้อยครั้ง?",
						"hindi": "सैकड़ों बार?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "그래! 저 벽의 문양까지도 똑같아! 대체… 이게 무슨 의미지?",
						"english": "Yes! Even the patterns on that wall are the same! What... what does this mean?",
						"japanese": "そうだ！あの壁の模様まで同じだ！一体…どういう意味だ？",
						"chinese": "没错！连那墙上的图案都一样！这到底……是什么意思？",
						"french": "Oui ! Même les motifs sur ce mur sont les mêmes ! Mais… qu'est-ce que ça veut dire ?",
						"spanish": "¡Sí! ¡Incluso los patrones de esa pared son los mismos! ¿Qué… qué significa esto?",
						"vietnamese": "Đúng vậy! Ngay cả hoa văn trên tường đó cũng giống nhau! Rốt cuộc... điều này có nghĩa là gì?",
						"thai": "ใช่แล้ว! แม้แต่ลวดลายบนกำแพงนั่นก็ยังเหมือนเดิม! นี่มัน… หมายความว่าอะไรกัน?",
						"hindi": "हाँ! उस दीवार पर बने पैटर्न भी एक जैसे हैं! आखिर… इसका क्या मतलब है?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이바르는 동굴 벽면의 문양을 가리켰다.",
						"english": "Ivar pointed at the patterns on the cave wall.",
						"japanese": "イヴァルは洞窟の壁の模様を指差した。",
						"chinese": "伊瓦尔指了指洞穴墙壁上的图案。",
						"french": "Ivar désigna les motifs sur la paroi de la grotte.",
						"spanish": "Ivar señaló los patrones en la pared de la cueva.",
						"vietnamese": "Ivar chỉ vào hoa văn trên tường hang động.",
						"thai": "ไอวาร์ชี้ไปที่ลวดลายบนผนังถ้ำ",
						"hindi": "इवार ने गुफा की दीवार पर बने पैटर्न की ओर इशारा किया।"
					},
					"speaker": "narrator"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ivar",
					"spot": [
						4,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이바르, 진정해요. 뭔가 방법을 찾아야 해요.",
						"english": "Ivar, calm down. We need to find a way.",
						"japanese": "イヴァル、落ち着いて。何か方法を見つけないと。",
						"chinese": "伊瓦尔，冷静点。我们得想办法。",
						"french": "Ivar, calmez-vous. Nous devons trouver un moyen.",
						"spanish": "Ivar, cálmate. Necesitamos encontrar una solución.",
						"vietnamese": "Ivar, bình tĩnh đi. Chúng ta cần tìm cách.",
						"thai": "ไอวาร์ ใจเย็นๆ เราต้องหาวิธี",
						"hindi": "इवार, शांत हो जाओ। हमें कोई रास्ता खोजना होगा।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "방법? 방법은 없어! 이 지긋지긋한 루프! 나는 끝없이 강해졌지만, 끝은 없어!",
						"english": "A way? There's no way! This cursed loop! I've grown endlessly stronger, but there's no end!",
						"japanese": "方法？方法なんてない！この忌まわしいループ！俺は際限なく強くなったが、終わりがないんだ！",
						"chinese": "办法？没有办法！这个该死的循环！我变得越来越强大，但没有尽头！",
						"french": "Un moyen ? Il n'y a pas de moyen ! Cette boucle maudite ! Je suis devenu infiniment plus fort, mais il n'y a pas de fin !",
						"spanish": "Un camino? ¡No hay camino! ¡Este bucle maldito! Me he vuelto infinitamente más fuerte, pero no hay fin.",
						"vietnamese": "Cách? Không có cách nào cả! Cái vòng lặp chết tiệt này! Tôi đã mạnh hơn không ngừng, nhưng không có hồi kết!",
						"thai": "วิธีเหรอ? ไม่มีทาง! วงจรบ้าๆ นี่! ฉันแข็งแกร่งขึ้นไม่รู้จบ แต่ก็ไม่มีวันสิ้นสุด!",
						"hindi": "कोई रास्ता? कोई रास्ता नहीं है! यह शापित लूप! मैं अंतहीन रूप से मजबूत होता गया, लेकिन इसका कोई अंत नहीं है!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "루프… 당신도 우리가 겪는 일을…",
						"english": "A loop... you're experiencing what we are...",
						"japanese": "ループ…あなたも私たちが経験していることを…",
						"chinese": "循环……你也在经历我们所经历的……",
						"french": "Une boucle… vous vivez ce que nous vivons…",
						"spanish": "Un bucle… tú también estás experimentando lo que nosotros...",
						"vietnamese": "Vòng lặp... bạn cũng đang trải qua những gì chúng tôi đang trải qua...",
						"thai": "วงจร... คุณก็กำลังเจอแบบที่เราเจอ...",
						"hindi": "एक लूप… आप भी वही अनुभव कर रहे हैं जो हम कर रहे हैं…"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_3"
				},
				{
					"content": {
						"korean": "그래! 깨어나는 순간부터 이곳이고, 끝없이 헤매다 죽고, 다시 시작돼!",
						"english": "Yes! From the moment I wake up, I'm here, endlessly wandering until I die, and then it starts again!",
						"japanese": "そうだ！目覚めた瞬間からここだ、ひたすらさまよって死んで、また始まるんだ！",
						"chinese": "没错！从我醒来的那一刻起，我就在这里，无尽地徘徊直到死去，然后又重新开始！",
						"french": "Oui ! Dès l'instant où je me réveille, je suis ici, errant sans fin jusqu'à ma mort, puis ça recommence !",
						"spanish": "¡Sí! ¡Desde el momento en que me despierto, estoy aquí, vagando sin fin hasta que muero, y luego comienza de nuevo!",
						"vietnamese": "Đúng vậy! Từ khoảnh khắc tôi thức dậy, tôi đã ở đây, lang thang không ngừng cho đến khi chết, rồi lại bắt đầu lại!",
						"thai": "ใช่แล้ว! ตั้งแต่ตื่นขึ้นมาก็อยู่ที่นี่ เดินวนไปเรื่อยๆ จนตาย แล้วก็เริ่มใหม่!",
						"hindi": "हाँ! जिस पल मैं जागता हूँ, मैं यहीं होता हूँ, अंतहीन भटकता हूँ जब तक मर नहीं जाता, और फिर यह फिर से शुरू होता है!"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "저 문양들이? 처음엔 의미 없는 낙서인 줄 알았지. 하지만… 계속 보면 뭔가 달라 보여.",
						"english": "Those patterns? At first, I thought they were meaningless scribbles. But... if you keep looking, something seems different.",
						"japanese": "あの模様が？最初は意味のない落書きだと思った。でも…見続けてると、何かが違って見える。",
						"chinese": "那些图案？一开始我以为是毫无意义的涂鸦。但是……如果你一直看，似乎有什么不同。",
						"french": "Ces motifs ? Au début, je pensais que c'était des gribouillis sans signification. Mais… si tu continues à regarder, quelque chose semble différent.",
						"spanish": "Esos patrones? Al principio, pensé que eran garabatos sin sentido. Pero… si sigues mirando, algo parece diferente.",
						"vietnamese": "Những hoa văn đó? Ban đầu, tôi nghĩ chúng chỉ là những nét vẽ vô nghĩa. Nhưng... nếu bạn cứ nhìn, điều gì đó dường như khác biệt.",
						"thai": "ลวดลายเหล่านั้นเหรอ? ตอนแรกฉันคิดว่าเป็นแค่ขีดเขียนไร้ความหมายนะ แต่... ถ้ามองไปเรื่อยๆ มันดูแตกต่างออกไป",
						"hindi": "वो पैटर्न? पहले तो मैंने सोचा कि वे व्यर्थ के स्क्रिबल हैं। लेकिन… अगर आप देखते रहें, तो कुछ अलग लगता है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "달라 보인다니?",
						"english": "Different, how?",
						"japanese": "違って見えるって？",
						"chinese": "有什么不同？",
						"french": "Différent, comment ça ?",
						"spanish": "¿Diferente, cómo?",
						"vietnamese": "Khác biệt là sao?",
						"thai": "แตกต่างออกไปอย่างไร?",
						"hindi": "अलग दिखता है, कैसे?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "시간을 되돌리는… 주문의 파편 같기도 하고…",
						"english": "A fragment of a spell... one that turns back time, perhaps...",
						"japanese": "時間を巻き戻す…呪文の破片のようでもあり…",
						"chinese": "像是能让时间倒流的…咒语碎片…",
						"french": "Un fragment de sort... qui fait remonter le temps, peut-être...",
						"spanish": "Un fragmento de hechizo... que parece revertir el tiempo...",
						"vietnamese": "Có lẽ là một mảnh vỡ của phép thuật... giúp đảo ngược thời gian...",
						"thai": "เหมือนจะเป็นเศษเสี้ยวของเวทมนตร์...ที่ย้อนเวลาได้...",
						"hindi": "समय को पलटने वाला... किसी मंत्र का टुकड़ा लगता है..."
					},
					"speaker": "ivar"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "ivar",
					"action": "enter"
				},
				{
					"content": {
						"korean": "주문의 파편… 그럼 저 문양들이 루프를 깨뜨릴 열쇠일지도 몰라요!",
						"english": "A spell fragment... Then those symbols might be the key to breaking the loop!",
						"japanese": "呪文の破片…それならあの模様がループを破る鍵かもしれません！",
						"chinese": "咒语碎片…那么那些纹样或许就是打破循环的关键！",
						"french": "Un fragment de sort... Alors ces symboles pourraient être la clé pour briser la boucle !",
						"spanish": "Un fragmento de hechizo... ¡Entonces esos símbolos podrían ser la clave para romper el bucle!",
						"vietnamese": "Một mảnh vỡ của phép thuật... Vậy thì những hoa văn đó có thể là chìa khóa để phá vỡ vòng lặp!",
						"thai": "เศษเสี้ยวของเวทมนตร์...ถ้าอย่างนั้นลวดลายเหล่านั้นอาจเป็นกุญแจไขห่วงเวลา!",
						"hindi": "मंत्र का टुकड़ा... तो शायद वो निशान ही लूप तोड़ने की चाबी हों!"
					},
					"type": "speech",
					"emotion": "happy",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "그럴 리가! 나는 이 동굴을 수없이 뒤졌어! 그런 건 없었어!",
						"english": "Impossible! I've searched this cave countless times! There was nothing like that!",
						"japanese": "まさか！この洞窟は何百回も探したぞ！そんなものはなかった！",
						"chinese": "不可能！我把这洞穴翻了个底朝天！根本没有那种东西！",
						"french": "Impossible ! J'ai fouillé cette grotte d'innombrables fois ! Il n'y avait rien de tel !",
						"spanish": "¡Imposible! ¡He registrado esta cueva incontables veces! ¡No había nada de eso!",
						"vietnamese": "Không thể nào! Ta đã lục tung hang động này vô số lần! Chẳng có thứ gì như vậy!",
						"thai": "ไม่มีทาง! ข้าค้นถ้ำนี้มานับครั้งไม่ถ้วนแล้ว! ไม่มีอะไรแบบนั้นเลย!",
						"hindi": "हो ही नहीं सकता! मैंने इस गुफा को अनगिनत बार छान मारा है! ऐसा कुछ नहीं था!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "하지만 당신은 계속 반복된다고 했잖아요. 어쩌면 당신도 모르게 힌트를 놓쳤을 수도…",
						"english": "But you said it keeps repeating. Perhaps you missed a hint without realizing it...",
						"japanese": "ですがあなたは繰り返していると言いました。もしかしたら、気づかないうちにヒントを見落としたのかもしれません…",
						"chinese": "但您不是说会一直重复吗。也许您在不知不觉中错过了线索…",
						"french": "Mais vous avez dit que ça se répétait sans cesse. Peut-être avez-vous manqué un indice sans le savoir...",
						"spanish": "Pero dijiste que se repetía sin cesar. Quizás pasaste por alto una pista sin darte cuenta...",
						"vietnamese": "Nhưng ngài đã nói là nó cứ lặp đi lặp lại mà. Có lẽ ngài đã bỏ lỡ gợi ý mà không hay biết...",
						"thai": "แต่ท่านบอกว่ามันซ้ำไปซ้ำมานี่ครับ บางทีท่านอาจจะพลาดเบาะแสไปโดยไม่รู้ตัว...",
						"hindi": "पर आपने कहा था कि यह बार-बार दोहराया जाता है। शायद आपने अनजाने में कोई सुराग छोड़ दिया हो..."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_4"
				},
				{
					"content": {
						"korean": "…내가 뭘 놓쳤단 말인가! 영광을 좇던 내가… 이 시간의 감옥에 갇히다니!",
						"english": "...What could I have missed?! I, who sought glory... trapped in this prison of time!",
						"japanese": "…私が何を逃したというのだ！栄光を追い求めたこの私が…この時間の牢獄に囚われるとは！",
						"chinese": "…我到底错过了什么！追逐荣耀的我…竟被困在这时间的牢笼里！",
						"french": "...Qu'aurais-je pu manquer ?! Moi, qui cherchais la gloire... piégé dans cette prison du temps !",
						"spanish": "¡...Qué pude haber pasado por alto! ¡Yo, que buscaba la gloria... atrapado en esta prisión del tiempo!",
						"vietnamese": "...Ta có thể đã bỏ lỡ điều gì chứ?! Ta, kẻ từng theo đuổi vinh quang... lại bị mắc kẹt trong nhà tù thời gian này!",
						"thai": "...ข้าพลาดอะไรไปงั้นรึ?! ข้า ผู้ที่เคยแสวงหาเกียรติยศ...ต้องมาติดอยู่ในคุกเวลาแห่งนี้!",
						"hindi": "...मैं क्या चूक गया! मैं, जो यश की तलाश में था... इस समय की जेल में कैद हूँ!"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "이바르는 절망에 빠졌다. 동시에, 탐험대는 희미한 희망을 보았다.",
						"english": "Ivar fell into despair. Simultaneously, the expedition saw a faint glimmer of hope.",
						"japanese": "イーヴァルは絶望に陥った。同時に、探検隊はかすかな希望を見た。",
						"chinese": "伊瓦尔陷入了绝望。与此同时，探险队看到了一丝微弱的希望。",
						"french": "Ivar sombra dans le désespoir. Simultanément, l'expédition entrevit une faible lueur d'espoir.",
						"spanish": "Ivar cayó en la desesperación. Simultáneamente, la expedición vislumbró un débil rayo de esperanza.",
						"vietnamese": "Ivar rơi vào tuyệt vọng. Đồng thời, đoàn thám hiểm nhìn thấy một tia hy vọng mờ nhạt.",
						"thai": "อีวาร์ตกอยู่ในความสิ้นหวัง ขณะเดียวกัน คณะสำรวจก็เห็นแสงแห่งความหวังอันริบหรี่",
						"hindi": "इवार हताशा में डूब गया। उसी समय, अभियान दल ने आशा की एक धुंधली किरण देखी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "random_boss",
					"spot": [
						5,
						5
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…새로운 먹잇감이로군. 이 영원한 고통 속으로 환영한다.",
						"english": "...New prey. Welcome to this eternal suffering.",
						"japanese": "…新たな獲物か。この永遠の苦痛へようこそ。",
						"chinese": "…新的猎物。欢迎来到这永恒的痛苦之中。",
						"french": "...Nouvelle proie. Bienvenue dans cette souffrance éternelle.",
						"spanish": "...Nueva presa. Bienvenida a este sufrimiento eterno.",
						"vietnamese": "...Con mồi mới. Chào mừng đến với nỗi đau vĩnh cửu này.",
						"thai": "...เหยื่อรายใหม่สินะ ยินดีต้อนรับสู่ความทุกข์ทรมานชั่วนิรันดร์นี้",
						"hindi": "...नया शिकार। इस अनंत पीड़ा में तुम्हारा स्वागत है।"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "너는 누구냐!",
						"english": "Who are you!",
						"japanese": "貴様は何者だ！",
						"chinese": "你是什么人！",
						"french": "Qui es-tu !",
						"spanish": "¡¿Quién eres tú?!",
						"vietnamese": "Ngươi là ai!",
						"thai": "เจ้าเป็นใคร!",
						"hindi": "तुम कौन हो!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "나는 이 얼어붙은 시간의 수호자. 너희의 절망을 먹고 산다.",
						"english": "I am the guardian of this frozen time. I feed on your despair.",
						"japanese": "私はこの凍結した時間の守護者。お前たちの絶望を糧とする。",
						"chinese": "我是这冻结时间的守护者。以你们的绝望为食。",
						"french": "Je suis le gardien de ce temps figé. Je me nourris de votre désespoir.",
						"spanish": "Soy el guardián de este tiempo congelado. Me alimento de vuestra desesperación.",
						"vietnamese": "Ta là kẻ bảo hộ của thời gian đóng băng này. Ta sống nhờ nỗi tuyệt vọng của các ngươi.",
						"thai": "ข้าคือผู้พิทักษ์แห่งกาลเวลาที่หยุดนิ่งนี้ ข้ากินความสิ้นหวังของพวกเจ้าเป็นอาหาร",
						"hindi": "मैं इस जमे हुए समय का संरक्षक हूँ। मैं तुम्हारी निराशा से जीता हूँ।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이곳에서 끝없는 루프를 경험하게 될 것이다!",
						"english": "Here, you will experience an endless loop!",
						"japanese": "ここで終わりのないループを経験することになるだろう！",
						"chinese": "在这里，你们将体验无尽的循环！",
						"french": "Ici, vous ferez l'expérience d'une boucle sans fin !",
						"spanish": "¡Aquí experimentarás un bucle sin fin!",
						"vietnamese": "Tại đây, các ngươi sẽ trải nghiệm một vòng lặp bất tận!",
						"thai": "ที่นี่ เจ้าจะได้สัมผัสกับห่วงเวลาอันไม่รู้จบ!",
						"hindi": "यहाँ, तुम्हें एक अंतहीन लूप का अनुभव होगा!"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "그럴 순 없어! 우리는 여기서 나갈 거야!",
						"english": "No way! We're getting out of here!",
						"japanese": "そんなことさせない！私たちはここから出るんだ！",
						"chinese": "不可能！我们一定要离开这里！",
						"french": "Impossible ! Nous allons sortir d'ici !",
						"spanish": "¡De ninguna manera! ¡Vamos a salir de aquí!",
						"vietnamese": "Không thể nào! Chúng ta sẽ ra khỏi đây!",
						"thai": "ไม่มีทาง! เราจะต้องออกไปจากที่นี่!",
						"hindi": "ऐसा नहीं हो सकता! हम यहाँ से निकलेंगे!"
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "흐흐흐… 다시 시작될 뿐이다.",
						"english": "Hehehe... It will merely begin again.",
						"japanese": "ふふふ…また始まるだけだ。",
						"chinese": "呵呵呵……只不过是重新开始罢了。",
						"french": "Hahaha... Ça ne fera que recommencer.",
						"spanish": "Jejeje... Solo volverá a empezar.",
						"vietnamese": "Hì hì... Mọi thứ sẽ chỉ bắt đầu lại thôi.",
						"thai": "ฮึฮึฮึ... มันจะเริ่มต้นใหม่เท่านั้นเอง.",
						"hindi": "हँसते हुए... यह बस फिर से शुरू होगा।"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "너희는 영원히 여기서 헤맬 것이다!",
						"english": "You will wander here forever!",
						"japanese": "お前たちは永遠にここでさまようのだ！",
						"chinese": "你们将永远在这里徘徊！",
						"french": "Vous errerez ici pour l'éternité !",
						"spanish": "¡Vagaréis aquí para siempre!",
						"vietnamese": "Các ngươi sẽ mãi mãi lang thang ở đây!",
						"thai": "พวกเจ้าจะหลงทางอยู่ที่นี่ตลอดไป!",
						"hindi": "तुम यहाँ हमेशा भटकते रहोगे!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "크윽… 아직 끝나지 않았어!",
						"english": "Ugh... It's not over yet!",
						"japanese": "くっ…まだ終わってない！",
						"chinese": "呃……还没结束！",
						"french": "Argh... Ce n'est pas encore fini !",
						"spanish": "¡Ugh... Aún no ha terminado!",
						"vietnamese": "Khụ... Vẫn chưa kết thúc!",
						"thai": "อึก... ยังไม่จบ!",
						"hindi": "उफ़... यह अभी खत्म नहीं हुआ है!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_3",
					"content": {
						"korean": "다시… 다시 시작하는 거야!",
						"english": "Again... starting over!",
						"japanese": "また…また始まるんだ！",
						"chinese": "再次…再次开始！",
						"french": "Encore... je recommence !",
						"spanish": "Otra vez... ¡volver a empezar!",
						"vietnamese": "Lại... lại bắt đầu!",
						"thai": "อีกครั้ง... เริ่มใหม่อีกครั้ง!",
						"hindi": "फिर से... फिर से शुरू करना है!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…어리석은 것들. 시간은… 누구도 거스를 수 없어…",
						"english": "...Foolish mortals. Time... no one can defy it...",
						"japanese": "…愚かな者たちめ。時間は…誰にも逆らえない…",
						"chinese": "……愚蠢的家伙。时间……无人能逆转……",
						"french": "...Idiots. Le temps... personne ne peut le défier...",
						"spanish": "...Necios. El tiempo... nadie puede desafiarlo...",
						"vietnamese": "...Những kẻ ngu ngốc. Thời gian... không ai có thể chống lại...",
						"thai": "...พวกโง่เง่า. เวลา... ไม่มีใครต้านทานได้...",
						"hindi": "...मूर्खों। समय... कोई इसका उल्लंघन नहीं कर सकता..."
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그 파편들은… 완벽하지 않아…",
						"english": "Those fragments... they aren't perfect...",
						"japanese": "その破片は…完璧じゃない…",
						"chinese": "那些碎片……并不完美……",
						"french": "Ces fragments... ils ne sont pas parfaits...",
						"spanish": "Esos fragmentos... no son perfectos...",
						"vietnamese": "Những mảnh vỡ đó... chúng không hoàn hảo...",
						"thai": "ชิ้นส่วนเหล่านั้น... มันไม่สมบูรณ์แบบ...",
						"hindi": "वे टुकड़े... वे सही नहीं हैं..."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "파편이 완벽하지 않다고?",
						"english": "The fragments aren't perfect?",
						"japanese": "破片が完璧じゃないって？",
						"chinese": "碎片不完美？",
						"french": "Les fragments ne sont pas parfaits ?",
						"spanish": "¿Los fragmentos no son perfectos?",
						"vietnamese": "Các mảnh vỡ không hoàn hảo sao?",
						"thai": "ชิ้นส่วนไม่สมบูรณ์แบบเหรอ?",
						"hindi": "टुकड़े सही नहीं हैं?"
					}
				},
				{
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "그래도 희망은 있어! 이바르가 말한 그 파편들을 모으면…",
						"english": "But there's still hope! If we gather the fragments Ivar mentioned...",
						"japanese": "それでも希望はある！イヴァールが言ってたあの破片を集めれば…",
						"chinese": "但仍然有希望！如果能收集到伊瓦尔提到的那些碎片……",
						"french": "Mais il y a encore de l'espoir ! Si nous rassemblons les fragments mentionnés par Ivar...",
						"spanish": "¡Pero aún hay esperanza! Si reunimos esos fragmentos que mencionó Ivar...",
						"vietnamese": "Nhưng vẫn còn hy vọng! Nếu chúng ta thu thập những mảnh vỡ mà Ivar đã nói...",
						"thai": "แต่ก็ยังมีความหวัง! ถ้าเรารวบรวมชิ้นส่วนที่อีวาร์พูดถึงได้...",
						"hindi": "फिर भी आशा है! अगर हम इवार द्वारा बताए गए टुकड़ों को इकट्ठा कर लें तो..."
					},
					"speaker": "character_2"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "쓰러진 {random_boss}의 잔해 위로, 얼음 동굴 벽면의 문양이 희미하게 빛났다.",
						"english": "Above the remnants of the fallen {random_boss}, the pattern on the ice cave wall faintly glowed.",
						"japanese": "倒れた{random_boss}の残骸の上で、氷の洞窟の壁面の文様がかすかに輝いた。",
						"chinese": "在倒下的{random_boss}的残骸上方，冰洞墙壁上的图案发出微弱的光芒。",
						"french": "Au-dessus des vestiges du {random_boss} tombé, le motif sur la paroi de la grotte de glace brillait faiblement.",
						"spanish": "Sobre los restos del {random_boss} caído, el patrón en la pared de la cueva de hielo brilló débilmente.",
						"vietnamese": "Trên tàn tích của {random_boss} đã ngã xuống, hoa văn trên bức tường hang động băng phát sáng mờ ảo.",
						"thai": "เหนือซากปรักหักพังของ {random_boss} ที่ล้มลง ลวดลายบนผนังถ้ำน้ำแข็งเรืองแสงจางๆ",
						"hindi": "गिरे हुए {random_boss} के अवशेषों के ऊपर, बर्फ की गुफा की दीवार पर बना पैटर्न मंद-मंद चमक रहा था।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "루프의 비밀이 서서히 드러나고 있었다.",
						"english": "The secret of the Loop was slowly being revealed.",
						"japanese": "ループの秘密が徐々に明らかになりつつあった。",
						"chinese": "循环的秘密正 Húnpán de mìmì zhèng zài mànmàn jiēkāi.",
						"french": "Le secret de la Boucle se révélait lentement.",
						"spanish": "El secreto del Bucle se estaba revelando lentamente.",
						"vietnamese": "Bí mật của Vòng Lặp đang dần được hé lộ.",
						"thai": "ความลับของลูปกำลังค่อยๆ ถูกเปิดเผย",
						"hindi": "लूप का रहस्य धीरे-धीरे उजागर हो रहा था।"
					},
					"speaker": "narrator"
				}
			],
			"id": 15
		}
	]
} as const;
