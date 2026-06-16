export const scenario_snowy_finn_80_01 = {
	"scenario_id": "snowy_finn_80_01",
	"order": 1,
	"act": "intro",
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
	"prologue": {
		"korean": [
			"설산 정상, 마지막 비탈.",
			"왕은 더 이상 숨지 않았다. 골방의 진실도.",
			"무거운 얼음 옥좌를 끌고, 그가 기다린다.",
			"드러난 진심. 혹은 서툰 마지막 위엄.",
			"이야기는 새로운 막을 올린다."
		],
		"english": [
			"Mountain summit, the final slope.",
			"The king no longer hid. Nor did the truth in his chambers.",
			"Dragging the heavy ice throne, he waits.",
			"The truth revealed. Or a clumsy final dignity.",
			"The story raises a new curtain."
		],
		"japanese": [
			"雪山の頂上、最後の坂。",
			"王はもう隠れていない。密室の真実もまた然り。",
			"重い氷の玉座を引きずり、彼が待つ。",
			"明かされた本心。あるいは不器用な最後の威厳。",
			"物語は新たな幕を開ける。"
		],
		"chinese": [
			"雪山之巅，最后的斜坡。",
			"国王不再隐藏。密室的真相亦然。",
			"拖着沉重的冰之王座，他正等待着。",
			"袒露的真心。亦或是笨拙的最后尊严。",
			"故事拉开新的帷幕。"
		],
		"french": [
			"Sommet enneigé, la dernière pente.",
			"Le roi ne se cachait plus. Ni la vérité de ses appartements.",
			"Traînant le lourd trône de glace, il attend.",
			"La vérité révélée. Ou une dernière dignité maladroite.",
			"L'histoire lève un nouveau rideau."
		],
		"spanish": [
			"Cima nevada, la última ladera.",
			"El rey ya no se escondía. Ni la verdad de sus aposentos.",
			"Arrastrando el pesado trono de hielo, él espera.",
			"La verdad revelada. O una torpe dignidad final.",
			"La historia alza un nuevo telón."
		],
		"vietnamese": [
			"Đỉnh núi tuyết, sườn dốc cuối cùng.",
			"Nhà vua không còn ẩn mình. Chân tướng trong mật thất cũng vậy.",
			"Kéo lê ngai vàng băng giá nặng nề, hắn đang chờ.",
			"Chân tướng phơi bày. Hay là phẩm giá cuối cùng vụng về.",
			"Câu chuyện mở ra một màn mới."
		],
		"thai": [
			"ยอดเขาหิมะ, ทางลาดสุดท้าย.",
			"กษัตริย์ไม่หลบซ่อนอีกต่อไป เช่นเดียวกับความจริงในห้องลับ",
			"ลากบัลลังก์น้ำแข็งอันหนักอึ้ง เขาเฝ้ารออยู่",
			"ความจริงถูกเปิดเผย หรือศักดิ์ศรีสุดท้ายที่เงอะงะ",
			"เรื่องราวเปิดฉากใหม่"
		],
		"hindi": [
			"बर्फीले पहाड़ की चोटी, आखिरी ढलान।",
			"राजा अब नहीं छिपा। न ही कक्षों में छिपा सच।",
			"भारी बर्फ़ीला सिंहासन खींचकर, वह इंतज़ार कर रहा है।",
			"सामने आया सच। या एक अनाड़ी अंतिम गरिमा।",
			"कहानी एक नया पर्दा उठाती है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "설산 정상의 마지막 비탈. 거대한 얼음 옥좌가 놓여 있었다.",
						"english": "The final slope of the snowy mountain's summit. A massive ice throne stood there.",
						"japanese": "雪山の頂上、最後の坂。巨大な氷の玉座が置かれていた。",
						"chinese": "雪山之巅的最后斜坡。一个巨大的冰之王座摆在那里。",
						"french": "La dernière pente du sommet enneigé. Un immense trône de glace s'y trouvait.",
						"spanish": "La última ladera de la cima nevada. Un enorme trono de hielo yacía allí.",
						"vietnamese": "Sườn dốc cuối cùng của đỉnh núi tuyết. Một ngai vàng băng giá khổng lồ đặt ở đó.",
						"thai": "ทางลาดสุดท้ายของยอดเขาหิมะ บัลลังก์น้ำแข็งขนาดใหญ่วางอยู่ที่นั่น",
						"hindi": "बर्फीले पहाड़ की चोटी का आखिरी ढलान। एक विशाल बर्फ़ीला सिंहासन वहाँ रखा था।"
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "…굳이, 여기까지. 왜일까. 왕의 진심이 궁금하다.",
						"english": "...To come all the way here. Why? I wonder about the king's true intentions.",
						"japanese": "…わざわざ、ここまで。なぜだろう。王の本心が気になる。",
						"chinese": "…特意来到这里。为什么呢？我好奇国王的真心。",
						"french": "...Venir jusqu'ici. Pourquoi ? Je m'interroge sur les véritables intentions du roi.",
						"spanish": "...Llegar hasta aquí. ¿Por qué? Me pregunto cuáles son las verdaderas intenciones del rey.",
						"vietnamese": "...Cất công đến tận đây. Tại sao vậy? Tôi tò mò về chân tâm của nhà vua.",
						"thai": "มาถึงที่นี่ ทำไมกันนะ ฉันสงสัยในความตั้งใจจริงของกษัตริย์",
						"hindi": "इतनी दूर तक आना। क्यों? मैं राजा के असली इरादों के बारे में सोच रहा हूँ।"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"content": {
						"korean": "저기— 왕이 기다리고 있어.",
						"english": "Over there— the king is waiting.",
						"japanese": "あそこに— 王が待っている。",
						"chinese": "在那边— 国王正在等待。",
						"french": "Là-bas— le roi attend.",
						"spanish": "Allí— el rey espera.",
						"vietnamese": "Đằng kia— nhà vua đang đợi.",
						"thai": "นั่นไง— กษัตริย์กำลังรออยู่",
						"hindi": "वहाँ— राजा इंतज़ार कर रहा है।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "왔군. 예상대로다.",
						"english": "You've come. As expected.",
						"japanese": "来たか。予想通りだ。",
						"chinese": "你来了。不出所料。",
						"french": "Vous êtes venu. Comme prévu.",
						"spanish": "Has venido. Como era de esperar.",
						"vietnamese": "Ngươi đã đến. Đúng như dự đoán.",
						"thai": "มาแล้วสินะ อย่างที่คาดไว้",
						"hindi": "तुम आ गए। जैसा कि अपेक्षित था।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "기록에 따르면, '왕'이라는 존재는 늘 숨어있었다. 자신의 진실을 감추기 위해.",
						"english": "According to records, the 'King' always hid. To conceal his truth.",
						"japanese": "記録によると、「王」という存在は常に隠れていた。自身の真実を隠すために。",
						"chinese": "根据记载，‘国王’一直隐藏着。为了掩盖自己的真相。",
						"french": "Selon les registres, le 'Roi' s'est toujours caché. Pour dissimuler sa vérité.",
						"spanish": "Según los registros, el 'Rey' siempre se ocultó. Para esconder su verdad.",
						"vietnamese": "Theo ghi chép, 'Nhà vua' luôn ẩn mình. Để che giấu sự thật của mình.",
						"thai": "ตามบันทึก 'กษัตริย์' มักจะซ่อนตัวอยู่เสมอ เพื่อปกปิดความจริงของพระองค์",
						"hindi": "रिकॉर्ड के अनुसार, 'राजा' हमेशा छिपा रहता था। अपनी सच्चाई छिपाने के लिए।"
					},
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그럼 지금은…?",
						"english": "Then, now...?",
						"japanese": "「では、今は…？」",
						"chinese": "“那么现在呢…？”",
						"french": "« Alors, maintenant… ? »",
						"spanish": "¿Entonces, ahora…?",
						"vietnamese": "“Vậy, bây giờ thì sao…?”",
						"thai": "“แล้วตอนนี้ล่ะ…?”",
						"hindi": "तो, अब क्या…?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "이 옥좌는 그 진심의 표출이다. 더 이상 숨길 수 없는.",
						"english": "This throne is the manifestation of that truth. No longer concealable.",
						"japanese": "「この玉座は、その真心の表れだ。もはや隠せない。」",
						"chinese": "“这个王座是那份真心的体现。再也无法隐藏。”",
						"french": "« Ce trône est la manifestation de cette vérité. Impossible à cacher plus longtemps. »",
						"spanish": "Este trono es la manifestación de esa verdad. Ya no se puede ocultar.",
						"vietnamese": "“Ngai vàng này là sự biểu hiện của sự thật đó. Không thể che giấu được nữa.”",
						"thai": "“บัลลังก์นี้คือการสำแดงถึงความจริงใจนั้น ไม่อาจซ่อนเร้นได้อีกต่อไป”",
						"hindi": "यह सिंहासन उस सच्चाई का प्रकटीकरण है। जिसे अब और छिपाया नहीं जा सकता।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…그만 떠들어라.",
						"english": "...Stop blabbering.",
						"japanese": "「…もう黙れ。」",
						"chinese": "“……别再废话了。”",
						"french": "« …Arrête de jacasser. »",
						"spanish": "…Deja de parlotear.",
						"vietnamese": "“…Thôi nói nhảm đi.”",
						"thai": "“…หยุดพล่ามได้แล้ว”",
						"hindi": "…बकवास बंद करो।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "오랜 전설에 따르면, {random_boss}는 잊힌 존재였다.",
						"english": "According to ancient legends, {random_boss} was a forgotten entity.",
						"japanese": "「古の伝説によれば、{random_boss}は忘れ去られた存在だった。」",
						"chinese": "“根据古老传说，{random_boss}曾是一个被遗忘的存在。”",
						"french": "« Selon d'anciennes légendes, {random_boss} était une entité oubliée. »",
						"spanish": "Según antiguas leyendas, {random_boss} era una entidad olvidada.",
						"vietnamese": "“Theo truyền thuyết cổ xưa, {random_boss} là một thực thể bị lãng quên.”",
						"thai": "“ตามตำนานเก่าแก่, {random_boss} เคยเป็นสิ่งมีชีวิตที่ถูกลืมเลือน”",
						"hindi": "प्राचीन किंवदंतियों के अनुसार, {random_boss} एक भूली हुई सत्ता थी।"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"content": {
						"korean": "잊힌 존재…?",
						"english": "A forgotten entity...?",
						"japanese": "「忘れ去られた存在…？」",
						"chinese": "“被遗忘的存在……？”",
						"french": "« Une entité oubliée… ? »",
						"spanish": "¿Una entidad olvidada…?",
						"vietnamese": "“Một thực thể bị lãng quên…?”",
						"thai": "“สิ่งมีชีวิตที่ถูกลืมเลือน…?”",
						"hindi": "एक भूली हुई सत्ता…?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그 서툰 자존심은 어쩌면… 기억되려는 발버둥일지도.",
						"english": "That clumsy pride might just be... a struggle to be remembered.",
						"japanese": "「その不器用なプライドは、もしかしたら…記憶されようとする足掻きなのかもしれない。」",
						"chinese": "“那笨拙的自尊心或许只是……一种想要被记住的挣扎。”",
						"french": "« Cette fierté maladroite n'est peut-être... qu'une lutte pour être mémorisé. »",
						"spanish": "Ese torpe orgullo quizás sea... una lucha por ser recordado.",
						"vietnamese": "“Niềm kiêu hãnh vụng về đó có lẽ chỉ là... một sự vật lộn để được nhớ đến.”",
						"thai": "“ความหยิ่งทะนงที่ไม่ประณีตนั่น อาจเป็น... การดิ้นรนเพื่อให้ถูกจดจำ”",
						"hindi": "वह अनाड़ी अभिमान शायद... याद रखे जाने की एक कोशिश हो।"
					},
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "헛된 기록은 그만.",
						"english": "Enough of these futile records.",
						"japanese": "「無駄な記録はもうやめろ。」",
						"chinese": "“停止这些徒劳的记录。”",
						"french": "« Assez de ces vains enregistrements. »",
						"spanish": "Basta de registros inútiles.",
						"vietnamese": "“Thôi những ghi chép vô ích này đi.”",
						"thai": "“พอทีกับบันทึกที่ไร้ประโยชน์”",
						"hindi": "इन व्यर्थ अभिलेखों को बंद करो।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "이제 돌아갈 수 없다. 이 비탈 끝에서 모든 것이 매듭지어질 것이다.",
						"english": "There's no turning back now. Everything will be settled at the end of this slope.",
						"japanese": "「もう後戻りはできない。この坂の終わりですべてが決着するだろう。」",
						"chinese": "“现在已无法回头。一切都将在这坡道的尽头画上句号。”",
						"french": "« Il n'y a plus de retour en arrière possible. Tout sera réglé au bout de cette pente. »",
						"spanish": "Ya no hay vuelta atrás. Todo se resolverá al final de esta pendiente.",
						"vietnamese": "“Giờ không thể quay lại được nữa. Mọi thứ sẽ được giải quyết ở cuối con dốc này.”",
						"thai": "“ตอนนี้ไม่อาจย้อนกลับได้อีกแล้ว ทุกสิ่งจะถูกสะสาง ณ สุดปลายเนินนี้”",
						"hindi": "अब वापस नहीं जा सकते। इस ढलान के अंत में सब कुछ तय हो जाएगा।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "우리가 역사의 한 페이지가 될 거야.",
						"english": "We will become a page in history.",
						"japanese": "「私たちは歴史の一ページになるだろう。」",
						"chinese": "“我们将成为历史的一页。”",
						"french": "« Nous deviendrons une page de l'histoire. »",
						"spanish": "Seremos una página en la historia.",
						"vietnamese": "“Chúng ta sẽ trở thành một trang sử.”",
						"thai": "“เราจะเป็นส่วนหนึ่งของหน้าประวัติศาสตร์”",
						"hindi": "हम इतिहास का एक पन्ना बनेंगे।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…자신만만하군.",
						"english": "...Quite confident, aren't we?",
						"japanese": "「…随分と自信満々だな。」",
						"chinese": "“……真是自信满满啊。”",
						"french": "« …Plutôt confiant, n'est-ce pas ? »",
						"spanish": "…Qué confianza.",
						"vietnamese": "“…Tự tin quá nhỉ.”",
						"thai": "“…ดูมั่นใจจริงๆ”",
						"hindi": "…काफी आत्मविश्वास है।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "…좋은 승부였다. 이제야… 편안하군.",
						"english": "...A good fight. Now... I can rest.",
						"japanese": "…良い勝負だった。ようやく…安らかになれる。",
						"chinese": "……这是一场好胜负。现在……我终于可以安息了。",
						"french": "...Un beau combat. Maintenant... je peux reposer en paix.",
						"spanish": "...Una buena lucha. Ahora... puedo descansar.",
						"vietnamese": "...Một trận chiến hay. Giờ đây... ta đã có thể yên nghỉ.",
						"thai": "...เป็นการต่อสู้ที่ดี. ในที่สุด... ข้าก็สบายใจแล้ว.",
						"hindi": "...एक अच्छी लड़ाई थी। अब... मुझे शांति मिल गई।"
					},
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "그는 기억되기를 바랐던 것일까. 잊힌 역사의 한 조각으로.",
						"english": "Did he wish to be remembered? As a fragment of forgotten history.",
						"japanese": "彼は記憶されることを望んだのだろうか。忘れ去られた歴史の一片として。",
						"chinese": "他是希望被铭记吗？作为一段被遗忘历史的碎片。",
						"french": "Voulait-il être rappelé ? Comme un fragment d'histoire oubliée.",
						"spanish": "¿Acaso deseaba ser recordado? Como un fragmento de una historia olvidada.",
						"vietnamese": "Hẳn là hắn muốn được nhớ đến? Như một mảnh ghép của lịch sử bị lãng quên.",
						"thai": "เขาปรารถนาที่จะถูกจดจำหรือเปล่า? ในฐานะเศษเสี้ยวของประวัติศาสตร์ที่ถูกลืม.",
						"hindi": "क्या वह याद किया जाना चाहता था? भूले हुए इतिहास के एक अंश के रूप में।"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…그를 이해할 것 같아.",
						"english": "...I think I understand him.",
						"japanese": "…彼を理解できる気がする。",
						"chinese": "……我好像能理解他了。",
						"french": "...Je crois que je le comprends.",
						"spanish": "...Creo que lo entiendo.",
						"vietnamese": "...Tôi nghĩ tôi hiểu hắn.",
						"thai": "...ฉันคิดว่าฉันเข้าใจเขาแล้ว.",
						"hindi": "...मुझे लगता है मैं उसे समझ गया।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "설산의 바람이 모든 것을 휩쓸고 지나갔다. 이야기는 아직 끝나지 않았다.",
						"english": "The mountain winds swept everything away. The story is not over yet.",
						"japanese": "雪山の風が全てを洗い流した。物語はまだ終わらない。",
						"chinese": "雪山之风席卷了一切。故事尚未结束。",
						"french": "Le vent des montagnes a tout balayé. L'histoire n'est pas encore terminée.",
						"spanish": "El viento de la montaña barrió con todo. La historia aún no ha terminado.",
						"vietnamese": "Gió núi cuốn đi mọi thứ. Câu chuyện vẫn chưa kết thúc.",
						"thai": "ลมภูเขาพัดพาเอาทุกสิ่งไป. เรื่องราวนี้ยังไม่จบ.",
						"hindi": "बर्फीले पहाड़ की हवा सब कुछ बहा ले गई। कहानी अभी खत्म नहीं हुई है।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "최정상. 얼음 옥좌 위, {random_boss}가 기다리고 있었다.",
						"english": "At the pinnacle. Upon the ice throne, {random_boss} awaited.",
						"japanese": "頂上。氷の玉座の上で、{random_boss}が待っていた。",
						"chinese": "顶峰。在冰之王座上，{random_boss}正在等候。",
						"french": "Au sommet. Sur le trône de glace, {random_boss} attendait.",
						"spanish": "En la cima. Sobre el trono de hielo, {random_boss} esperaba.",
						"vietnamese": "Trên đỉnh. Trên ngai băng, {random_boss} đang chờ đợi.",
						"thai": "ณ จุดสูงสุด. เหนือบัลลังก์น้ำแข็ง, {random_boss} กำลังรออยู่.",
						"hindi": "शिखर पर। बर्फीले सिंहासन पर, {random_boss} प्रतीक्षा कर रहा था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "마지막 한 판, 어떤가. 너희의… 진심을 보여라.",
						"english": "One final bout, then. Show me... your true selves.",
						"japanese": "最後の勝負だ。お前たちの…本心を見せてみろ。",
						"chinese": "最后一战，如何？展现出你们的…真心吧。",
						"french": "Un dernier combat, alors. Montrez-moi... votre vraie nature.",
						"spanish": "Un último asalto, ¿qué decís? Mostradme... vuestro verdadero yo.",
						"vietnamese": "Một trận cuối cùng, thế nào? Hãy thể hiện... con người thật của các ngươi.",
						"thai": "การต่อสู้ครั้งสุดท้ายเป็นอย่างไรบ้าง จงแสดง... ตัวตนที่แท้จริงของเจ้าออกมา.",
						"hindi": "एक अंतिम मुकाबला, कैसा रहेगा? मुझे दिखाओ... अपना असली स्वरूप।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "좋아. 그 진심, 우리가 받아주지.",
						"english": "Fine. We'll accept your truth.",
						"japanese": "よかろう。その本心、我らが受け止めよう。",
						"chinese": "好。那真心，我们接受了。",
						"french": "Bien. Nous accepterons votre vérité.",
						"spanish": "Bien. Aceptaremos vuestra verdad.",
						"vietnamese": "Được. Chúng ta sẽ chấp nhận sự thật đó.",
						"thai": "ดี. เราจะยอมรับความจริงนั้น.",
						"hindi": "ठीक है। हम तुम्हारी सच्चाई स्वीकार करते हैं।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "얼음 옥좌는 굳건히 그 자리를 지켰다.",
						"english": "The ice throne firmly held its ground.",
						"japanese": "氷の玉座は、その場を揺るぎなく守り続けた。",
						"chinese": "冰之王座岿然不动地矗立在那里。",
						"french": "Le trône de glace est resté fermement en place.",
						"spanish": "El trono de hielo se mantuvo firme en su lugar.",
						"vietnamese": "Ngai băng vẫn vững vàng tại chỗ.",
						"thai": "บัลลังก์น้ำแข็งยังคงตั้งตระหง่านอยู่ ณ ที่เดิม.",
						"hindi": "बर्फीला सिंहासन दृढ़ता से अपनी जगह पर बना रहा।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "겨우 이 정도인가. 아직 멀었다.",
						"english": "Is this all you have? Far from enough.",
						"japanese": "これだけか。まだまだだな。",
						"chinese": "仅此而已吗？还差得远呢。",
						"french": "N'est-ce que cela ? Ce n'est pas encore assez.",
						"spanish": "¿Solo esto? Aún queda mucho.",
						"vietnamese": "Chỉ có thế thôi sao? Vẫn còn xa lắm.",
						"thai": "มีแค่นี้เองหรือ? ยังห่างไกลนัก.",
						"hindi": "बस इतना ही? अभी बहुत दूर है।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "…다시 한번. 반드시.",
						"english": "...Once more. We must.",
						"japanese": "…もう一度。必ず。",
						"chinese": "……再一次。务必。",
						"french": "...Encore une fois. Nous le devons.",
						"spanish": "...Una vez más. Sin falta.",
						"vietnamese": "...Một lần nữa. Nhất định.",
						"thai": "...อีกครั้ง. อย่างแน่นอน.",
						"hindi": "...एक बार फिर। अवश्य।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		}
	]
} as const;
