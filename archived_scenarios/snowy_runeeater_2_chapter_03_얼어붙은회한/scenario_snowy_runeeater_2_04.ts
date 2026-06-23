export const scenario_snowy_runeeater_2_04 = {
	"scenario_id": "snowy_runeeater_2_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"hild": {
			"id": "mon_6f20c96a-bf07-4aae-b37c-da898a8336e8",
			"name": {
				"korean": "힐드",
				"english": "Hild",
				"japanese": "ヒルド",
				"chinese": "希尔德",
				"french": "Hild",
				"spanish": "Hild",
				"vietnamese": "Hild",
				"thai": "ฮิลด์",
				"hindi": "हिल्ड"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/722a86fd-2903-4688-3f04-db8241ed0e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/af3d96ba-e571-4132-fede-cd415bd15c00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "고대 유적의 차가운 공기가 탐험대를 맞이했다.",
						"english": "The cold air of the ancient ruins greeted the expedition team.",
						"japanese": "古代遺跡の冷たい空気が探検隊を迎えた。",
						"chinese": "古代遗迹的冰冷空气迎接了探险队。",
						"french": "L'air froid des ruines antiques accueillit l'équipe d'expédition.",
						"spanish": "El aire frío de las ruinas antiguas recibió al equipo de expedición.",
						"vietnamese": "Không khí lạnh lẽo của di tích cổ đại chào đón đoàn thám hiểm.",
						"thai": "อากาศอันหนาวเย็นของซากปรักหักพังโบราณต้อนรับคณะสำรวจ",
						"hindi": "प्राचीन खंडहरों की ठंडी हवा ने अभियान दल का स्वागत किया।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "벽화가 보이네. 바이킹 전사들의 이야기인가?",
						"english": "I see murals. Is it a story of Viking warriors?",
						"japanese": "壁画が見えるな。ヴァイキング戦士たちの物語か？",
						"chinese": "我看到壁画了。这是维京战士们的故事吗？",
						"french": "Je vois des peintures murales. Est-ce l'histoire des guerriers vikings ?",
						"spanish": "Veo murales. ¿Es una historia de guerreros vikingos?",
						"vietnamese": "Tôi thấy tranh tường. Đây có phải là câu chuyện về các chiến binh Viking không?",
						"thai": "เห็นภาพจิตรกรรมฝาผนัง มันเป็นเรื่องราวของนักรบไวกิ้งหรือเปล่า?",
						"hindi": "मुझे भित्तिचित्र दिख रहे हैं। क्या यह वाइकिंग योद्धाओं की कहानी है?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "정말 위대한 전설들이야.",
						"english": "Truly great legends.",
						"japanese": "本当に偉大な伝説だ。",
						"chinese": "真是伟大的传说。",
						"french": "De véritables légendes.",
						"spanish": "Verdaderas leyendas.",
						"vietnamese": "Thật sự là những truyền thuyết vĩ đại.",
						"thai": "ตำนานที่ยิ่งใหญ่จริงๆ",
						"hindi": "सचमुच महान किंवदंतियाँ।"
					},
					"emotion": "happy"
				},
				{
					"duration_ms": 500,
					"speaker": "hild",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "hild",
					"content": {
						"korean": "…아니요. 뭔가 빠져있어요.",
						"english": "...No. Something is missing.",
						"japanese": "…いいえ。何かが欠けている。",
						"chinese": "……不。少了点什么。",
						"french": "...Non. Il manque quelque chose.",
						"spanish": "...No. Algo falta.",
						"vietnamese": "...Không. Có điều gì đó còn thiếu.",
						"thai": "...ไม่สิ มีบางอย่างหายไป",
						"hindi": "...नहीं। कुछ गायब है।"
					},
					"emotion": "sad"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "hild",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이 기록들… 영웅들의 서사가 너무 완벽해요.",
						"english": "These records... the heroes' saga is too perfect.",
						"japanese": "これらの記録…英雄たちの物語はあまりにも完璧すぎる。",
						"chinese": "这些记录……英雄们的史诗太过完美了。",
						"french": "Ces récits... la saga des héros est trop parfaite.",
						"spanish": "Estos registros... la saga de los héroes es demasiado perfecta.",
						"vietnamese": "Những ghi chép này... thiên anh hùng ca quá hoàn hảo.",
						"thai": "บันทึกเหล่านี้... มหากาพย์ของเหล่าฮีโร่นั้นสมบูรณ์แบบเกินไป",
						"hindi": "ये अभिलेख... नायकों की गाथा बहुत परिपूर्ण है।"
					},
					"emotion": "base",
					"speaker": "hild",
					"type": "speech"
				},
				{
					"content": {
						"korean": "완벽하면 좋은 거 아니야?",
						"english": "Isn't perfect a good thing?",
						"japanese": "完璧なら良いことじゃないか？",
						"chinese": "完美不是好事吗？",
						"french": "La perfection n'est-elle pas une bonne chose ?",
						"spanish": "¿No es bueno que sea perfecto?",
						"vietnamese": "Hoàn hảo thì không phải là tốt sao?",
						"thai": "ถ้าสมบูรณ์แบบแล้วไม่ดีหรือไง?",
						"hindi": "क्या परिपूर्ण होना अच्छी बात नहीं है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "너무 완벽해서 부자연스러워요. 중요한 부분이 지워진 것 같아요.",
						"english": "It's too perfect, unnatural. As if important parts were erased.",
						"japanese": "完璧すぎて不自然です。重要な部分が消されたようです。",
						"chinese": "完美得不自然。好像重要的部分被抹去了。",
						"french": "C'est trop parfait, anormal. Comme si des parties importantes avaient été effacées.",
						"spanish": "Es demasiado perfecto, antinatural. Parece que partes importantes fueron borradas.",
						"vietnamese": "Nó quá hoàn hảo, không tự nhiên. Như thể những phần quan trọng đã bị xóa sổ.",
						"thai": "มันสมบูรณ์แบบเกินไป ไม่เป็นธรรมชาติ เหมือนส่วนสำคัญบางอย่างถูกลบไป",
						"hindi": "यह बहुत सही है, अप्राकृतिक। जैसे महत्वपूर्ण हिस्सों को मिटा दिया गया हो।"
					},
					"emotion": "sad",
					"speaker": "hild",
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "누가 이런 짓을?",
						"english": "Who did this?",
						"japanese": "誰がこんなことを？",
						"chinese": "谁做的这一切？",
						"french": "Qui a fait ça ?",
						"spanish": "¿Quién hizo esto?",
						"vietnamese": "Ai đã làm điều này?",
						"thai": "ใครทำเรื่องแบบนี้?",
						"hindi": "यह किसने किया?"
					},
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "hild"
				},
				{
					"type": "speech",
					"speaker": "hild",
					"content": {
						"korean": "자세히 보세요. 몇몇 그림은 덧칠된 흔적이 있어요.",
						"english": "Look closely. Some paintings show signs of being painted over.",
						"japanese": "よく見てください。いくつかの絵には上塗りされた跡があります。",
						"chinese": "仔细看。有些画有被涂改过的痕迹。",
						"french": "Regardez attentivement. Certaines peintures montrent des traces de repeinture.",
						"spanish": "Mira de cerca. Algunas pinturas muestran signos de haber sido repintadas.",
						"vietnamese": "Hãy nhìn kỹ. Một số bức tranh có dấu hiệu bị vẽ đè lên.",
						"thai": "ดูให้ดี ภาพบางภาพมีร่องรอยของการถูกวาดทับ",
						"hindi": "ध्यान से देखें। कुछ चित्रों पर पेंट किए जाने के निशान हैं।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "hild",
					"content": {
						"korean": "이건 단순한 파괴가 아니라, 의도적인 조작이에요.",
						"english": "This isn't mere destruction, but deliberate manipulation.",
						"japanese": "これは単なる破壊ではなく、意図的な操作です。",
						"chinese": "这不是简单的破坏，而是蓄意的篡改。",
						"french": "Ce n'est pas une simple destruction, mais une manipulation délibérée.",
						"spanish": "Esto no es mera destrucción, sino manipulación deliberada.",
						"vietnamese": "Đây không phải là sự phá hủy đơn thuần, mà là sự thao túng có chủ đích.",
						"thai": "นี่ไม่ใช่แค่การทำลาย แต่เป็นการบิดเบือนอย่างจงใจ",
						"hindi": "यह सिर्फ विनाश नहीं है, बल्कि जानबूझकर की गई हेरफेर है।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "왜? 대체 누가 역사를 바꿔?",
						"english": "Why? Who would change history?",
						"japanese": "なぜ？一体誰が歴史を変えるんだ？",
						"chinese": "为什么？到底是谁在改写历史？",
						"french": "Pourquoi ? Qui changerait l'histoire ?",
						"spanish": "¿Por qué? ¿Quién cambiaría la historia?",
						"vietnamese": "Tại sao? Ai lại thay đổi lịch sử?",
						"thai": "ทำไม? ใครกันที่เปลี่ยนประวัติศาสตร์?",
						"hindi": "क्यों? आखिर कौन इतिहास बदलेगा?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "hild",
					"content": {
						"korean": "…설원 정령이 아닐까요? 처음부터 이상했어요.",
						"english": "...Could it be the Snow Spirit? Something felt off from the start.",
						"japanese": "…もしかして、雪原の精霊でしょうか？最初からおかしいと思っていました。",
						"chinese": "...会不会是雪原精灵？从一开始我就觉得不对劲。",
						"french": "...Serait-ce l'Esprit des Neiges ? Quelque chose clochait dès le début.",
						"spanish": "¿...Será el Espíritu de Nieve? Algo me pareció extraño desde el principio.",
						"vietnamese": "...Có lẽ là Tinh linh Tuyết? Ngay từ đầu tôi đã thấy lạ rồi.",
						"thai": "...หรือจะเป็นวิญญาณแห่งหิมะ? มันแปลกตั้งแต่แรกแล้ว",
						"hindi": "क्या यह हिम आत्मा हो सकती है? शुरुआत से ही कुछ अजीब लग रहा था।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "설원 정령이 우릴 도왔잖아!",
						"english": "But the Snow Spirit helped us!",
						"japanese": "雪原の精霊は私たちを助けてくれたじゃないか！",
						"chinese": "但是雪原精灵帮过我们啊！",
						"french": "Mais l'Esprit des Neiges nous a aidés !",
						"spanish": "¡Pero el Espíritu de Nieve nos ayudó!",
						"vietnamese": "Tinh linh Tuyết đã giúp chúng ta mà!",
						"thai": "วิญญาณแห่งหิมะช่วยพวกเราไม่ใช่เหรอ!",
						"hindi": "लेकिन हिम आत्मा ने हमारी मदद की थी!"
					},
					"emotion": "angry",
					"speaker": "character_3",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "hild",
					"duration_ms": 500
				},
				{
					"speaker": "hild",
					"type": "speech",
					"content": {
						"korean": "우리가 알고 있는 설원 정령은… 전부 거짓이었어요.",
						"english": "The Snow Spirit we knew... it was all a lie.",
						"japanese": "私たちが知っていた雪原の精霊は…すべて嘘でした。",
						"chinese": "我们所认识的雪原精灵……一切都是谎言。",
						"french": "L'Esprit des Neiges que nous connaissions... c'était un mensonge.",
						"spanish": "El Espíritu de Nieve que conocíamos... todo fue una mentira.",
						"vietnamese": "Tinh linh Tuyết mà chúng ta biết... tất cả đều là giả dối.",
						"thai": "วิญญาณแห่งหิมะที่เรารู้จัก...เป็นเรื่องโกหกทั้งหมด",
						"hindi": "जिस हिम आत्मा को हम जानते थे... वह सब झूठ था।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "hild",
					"content": {
						"korean": "망자의 약속을 기린다고 했지만, 그 약속을 왜곡한 건 정령 자신이었어요.",
						"english": "It claimed to honor the promise of the dead, but the spirit itself distorted that promise.",
						"japanese": "死者の約束を称えると語っていたが、その約束を歪めたのは精霊自身だった。",
						"chinese": "它声称要纪念逝者的承诺，但歪曲那个承诺的却是精灵自己。",
						"french": "Il prétendait honorer la promesse des morts, mais c'est l'esprit lui-même qui a déformé cette promesse.",
						"spanish": "Afirmaba honrar la promesa de los muertos, pero fue el espíritu mismo quien distorsionó esa promesa.",
						"vietnamese": "Nó nói rằng sẽ tôn vinh lời hứa của người chết, nhưng chính Tinh linh đã bóp méo lời hứa đó.",
						"thai": "มันอ้างว่าจะให้เกียรติคำสัญญาของผู้ตาย แต่กลับเป็นวิญญาณตนนั้นเองที่บิดเบือนคำสัญญานั้น",
						"hindi": "इसने मृतकों के वादे का सम्मान करने का दावा किया, लेकिन आत्मा ने खुद उस वादे को विकृत कर दिया।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그럼 우린 속은 거야?",
						"english": "So... we were deceived?",
						"japanese": "じゃあ、私たちは騙されていたと？",
						"chinese": "那么，我们被骗了？",
						"french": "Alors... nous avons été trompés ?",
						"spanish": "¿Entonces... fuimos engañados?",
						"vietnamese": "Vậy... chúng ta đã bị lừa sao?",
						"thai": "งั้นพวกเราก็ถูกหลอกมาตลอด?",
						"hindi": "तो... हमें धोखा दिया गया था?"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "hild",
					"content": {
						"korean": "아마도요. 이 유적에 숨겨진 진실을 찾아야 해요. 그게 {random_boss}의 정체를 밝힐 실마리가 될 거예요.",
						"english": "Perhaps. We need to find the truth hidden in these ruins. That will be the clue to {random_boss}'s identity.",
						"japanese": "おそらく。この遺跡に隠された真実を見つける必要があります。それが{random_boss}の正体を明らかにする手がかりになるでしょう。",
						"chinese": "也许吧。我们必须找出隐藏在这座遗迹中的真相。那将是揭示{random_boss}身份的线索。",
						"french": "Peut-être. Nous devons trouver la vérité cachée dans ces ruines. Ce sera l'indice de l'identité de {random_boss}.",
						"spanish": "Quizás. Necesitamos encontrar la verdad oculta en estas ruinas. Esa será la clave para la identidad de {random_boss}.",
						"vietnamese": "Có lẽ vậy. Chúng ta cần tìm ra sự thật ẩn giấu trong di tích này. Đó sẽ là manh mối để làm sáng tỏ danh tính của {random_boss}.",
						"thai": "อาจจะ เราต้องค้นหาความจริงที่ซ่อนอยู่ในซากปรักหักพังเหล่านี้ นั่นจะเป็นเบาะแสสู่ตัวตนของ {random_boss}",
						"hindi": "शायद। हमें इन खंडहरों में छिपी सच्चाई का पता लगाना होगा। वही {random_boss} की पहचान का सुराग होगा。"
					},
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "유적의 가장 깊은 곳, 거대한 그림자가 움직였다.",
						"english": "In the deepest part of the ruins, a giant shadow stirred.",
						"japanese": "遺跡の最も深い場所で、巨大な影が動いた。",
						"chinese": "在遗迹最深处，一个巨大的影子动了。",
						"french": "Dans la partie la plus profonde des ruines, une ombre géante s'est agitée.",
						"spanish": "En lo más profundo de las ruinas, una sombra gigante se agitó.",
						"vietnamese": "Ở nơi sâu nhất của di tích, một cái bóng khổng lồ đã chuyển động.",
						"thai": "ในส่วนที่ลึกที่สุดของซากปรักหักพัง เงาขนาดมหึมาได้เคลื่อนไหว",
						"hindi": "खंडहरों के सबसे गहरे हिस्से में, एक विशाल छाया हिल उठी।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…기어이 여기까지 오는구나. 쓸모없는 인간들.",
						"english": "...So you've come all the way here. Useless humans.",
						"japanese": "…ついにここまで来たか。役立たずの人間どもめ。",
						"chinese": "……你们竟然走到这里。没用的凡人。",
						"french": "...Vous êtes finalement venus jusqu'ici. Inutiles humains.",
						"spanish": "...Así que habéis llegado hasta aquí. Humanos inútiles.",
						"vietnamese": "...Cuối cùng cũng đến được đây. Những kẻ vô dụng.",
						"thai": "...ในที่สุดก็มาถึงที่นี่จนได้ พวกมนุษย์ไร้ประโยชน์",
						"hindi": "...तो तुम यहीं तक आ गए। बेकार के इंसान।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "네가 모든 걸 조작했어!",
						"english": "You manipulated everything!",
						"japanese": "お前が全てを操っていたのか！",
						"chinese": "你操纵了一切！",
						"french": "Tu as tout manipulé !",
						"spanish": "¡Lo manipulaste todo!",
						"vietnamese": "Ngươi đã thao túng mọi thứ!",
						"thai": "แกบงการทุกอย่าง!",
						"hindi": "तुमने सब कुछ हेरफेर किया!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "조작? 아니. 단지… 잊혀진 것을 제자리에 돌려놓았을 뿐.",
						"english": "Manipulated? No. I merely... returned what was forgotten to its rightful place.",
						"japanese": "操る？いや。ただ…忘れ去られたものをあるべき場所に戻しただけだ。",
						"chinese": "操纵？不。我只是……让被遗忘的一切物归原位罢了。",
						"french": "Manipulé ? Non. J'ai simplement... remis ce qui était oublié à sa juste place.",
						"spanish": "¿Manipular? No. Simplemente... devolví lo olvidado a su lugar.",
						"vietnamese": "Thao túng? Không. Ta chỉ... trả lại những gì đã bị lãng quên về đúng vị trí của nó thôi.",
						"thai": "บงการ? ไม่ใช่ แค่...นำสิ่งที่ถูกลืมเลือนกลับคืนสู่ที่ที่ควรจะเป็นเท่านั้น",
						"hindi": "हेरफेर? नहीं। मैंने बस... भूली हुई चीजों को उनकी सही जगह पर लौटा दिया।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "주제를 알아라. 어리석은 자들.",
						"english": "Know your place. Fools.",
						"japanese": "身の程を知れ。愚か者どもめ。",
						"chinese": "认清你的地位。愚蠢之徒。",
						"french": "Connaissez votre place. Imbéciles.",
						"spanish": "Conoced vuestro lugar. ¡Necios!",
						"vietnamese": "Biết thân biết phận đi. Những kẻ ngu ngốc.",
						"thai": "รู้หัวนอนปลายเท้าซะบ้างนะ เจ้าพวกโง่เง่า!",
						"hindi": "अपनी औकात जानो। मूर्खों!"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…젠장, 아직 끝나지 않았어!",
						"english": "...Damn it, it's not over yet!",
						"japanese": "…くそ、まだ終わってない！",
						"chinese": "……该死，还没完呢！",
						"french": "...Mince, ce n'est pas encore fini !",
						"spanish": "...¡Maldita sea, esto aún no ha terminado!",
						"vietnamese": "…Chết tiệt, vẫn chưa kết thúc đâu!",
						"thai": "...ให้ตายสิ, มันยังไม่จบ!",
						"hindi": "...धिक्कार है, अभी खत्म नहीं हुआ है!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "너희의 기억도, 역사도… 모두 내가 재정의한다.",
						"english": "Your memories, your history... I shall redefine them all.",
						"japanese": "お前たちの記憶も、歴史も…すべて私が再定義する。",
						"chinese": "你们的记忆，你们的历史……都将由我来重新定义。",
						"french": "Vos souvenirs, votre histoire… je les redéfinirai tous.",
						"spanish": "Vuestras memorias, vuestra historia… yo lo redefiniré todo.",
						"vietnamese": "Ký ức của các ngươi, lịch sử của các ngươi… tất cả sẽ do ta định nghĩa lại.",
						"thai": "ความทรงจำของพวกเจ้า, ประวัติศาสตร์ของพวกเจ้า... ข้าจะกำหนดใหม่ทั้งหมด",
						"hindi": "तुम्हारी यादें, तुम्हारा इतिहास... सब कुछ मैं फिर से परिभाषित करूँगा।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 겨우 이런 존재들에게… 내가…",
						"english": "Ugh... To mere beings like these... I...",
						"japanese": "ぐっ…こんな輩に…私が…",
						"chinese": "呃……竟然被这种存在……我……",
						"french": "Urgh... À de simples êtres comme ceux-ci... Moi...",
						"spanish": "Ugh... Ante meros seres como estos... Yo...",
						"vietnamese": "Khặc... Để những kẻ như thế này... ta...",
						"thai": "อึก... ให้กับสิ่งมีชีวิตแค่นี้... ข้า...",
						"hindi": "उफ़... ऐसे मामूली प्राणियों से... मैं..."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…잊혀진 역사는… 다시… 반복될 것이다…",
						"english": "...The forgotten history... will... repeat itself... again...",
						"japanese": "…忘れ去られた歴史は…再び…繰り返されるだろう…",
						"chinese": "……被遗忘的历史……将……再次……重演……",
						"french": "...L'histoire oubliée... se... répétera... encore...",
						"spanish": "...La historia olvidada... se... repetirá... de nuevo...",
						"vietnamese": "...Lịch sử bị lãng quên... sẽ... lặp lại... một lần nữa...",
						"thai": "...ประวัติศาสตร์ที่ถูกลืมเลือน... จะ... ซ้ำรอย... อีกครั้ง...",
						"hindi": "...भूला हुआ इतिहास... फिर से... दोहराया जाएगा..."
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "사라져버려!",
						"english": "Vanish!",
						"japanese": "消え失せろ！",
						"chinese": "消失吧！",
						"french": "Disparais !",
						"spanish": "¡Desaparece!",
						"vietnamese": "Biến đi!",
						"thai": "หายไปซะ!",
						"hindi": "गायब हो जाओ!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "그림자는 사라졌지만, 유적은 더 깊은 미스터리를 품고 있었다.",
						"english": "The shadow vanished, but the ruins held a deeper mystery.",
						"japanese": "影は消え去ったが、遺跡はより深い謎を秘めていた。",
						"chinese": "影子消失了，但遗迹却蕴含着更深的谜团。",
						"french": "L'ombre disparut, mais les ruines recelaient un mystère plus profond.",
						"spanish": "La sombra desapareció, pero las ruinas guardaban un misterio más profundo.",
						"vietnamese": "Bóng tối biến mất, nhưng di tích vẫn chứa đựng một bí ẩn sâu sắc hơn.",
						"thai": "เงาหายไปแล้ว แต่ซากปรักหักพังกลับซ่อนเร้นความลึกลับที่ลึกซึ้งยิ่งกว่า",
						"hindi": "छाया गायब हो गई, लेकिन खंडहरों में एक गहरा रहस्य छिपा हुआ था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "진실은 아직 멀리 있었다.",
						"english": "The truth was still far off.",
						"japanese": "真実はまだ遠かった。",
						"chinese": "真相仍遥遥无期。",
						"french": "La vérité était encore loin.",
						"spanish": "La verdad aún estaba lejos.",
						"vietnamese": "Sự thật vẫn còn xa vời.",
						"thai": "ความจริงยังคงห่างไกล",
						"hindi": "सच्चाई अभी भी दूर थी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"얼어붙은 고대 유적, 바이킹 영웅들의 땅.",
			"위대한 서사는 완벽했으나, 힐드는 비어있음을 보았다.",
			"기록은 조작되었다. 설원 정령의 진짜 얼굴이 드러나려 한다.",
			"진실은 언제나 불편한 법."
		],
		"english": [
			"Frozen ancient ruins, land of Viking heroes.",
			"The grand saga was perfect, yet Hilde saw emptiness.",
			"Records were manipulated. The true face of the Snow Spirit is about to be revealed.",
			"The truth is always inconvenient."
		],
		"japanese": [
			"凍てついた古代遺跡、ヴァイキング英雄たちの地。",
			"偉大な物語は完璧だったが、ヒルデは空虚を見た。",
			"記録は改ざんされた。雪原の精霊の本当の顔が明らかになろうとしている。",
			"真実は常に不都合なものだ。"
		],
		"chinese": [
			"冰封的古代遗迹，维京英雄之地。",
			"伟大的史诗完美无缺，但希尔德却看到了空虚。",
			"记录被篡改了。雪原精灵的真面目即将揭示。",
			"真相总是令人不适。"
		],
		"french": [
			"Ruines antiques gelées, terre des héros vikings.",
			"La grande saga était parfaite, mais Hilde y vit le vide.",
			"Les archives ont été manipulées. Le vrai visage de l'Esprit des Neiges est sur le point d'être révélé.",
			"La vérité est toujours dérangeante."
		],
		"spanish": [
			"Antiguas ruinas congeladas, tierra de héroes vikingos.",
			"La gran saga era perfecta, pero Hilde vio un vacío.",
			"Los registros fueron manipulados. El verdadero rostro del Espíritu de la Nieve está a punto de revelarse.",
			"La verdad siempre es incómoda."
		],
		"vietnamese": [
			"Tàn tích cổ đại đóng băng, vùng đất của các anh hùng Viking.",
			"Biên niên sử vĩ đại thật hoàn hảo, nhưng Hilde lại thấy trống rỗng.",
			"Các ghi chép đã bị thao túng. Bộ mặt thật của Tinh linh Tuyết sắp được hé lộ.",
			"Sự thật luôn khó chịu."
		],
		"thai": [
			"ซากปรักหักพังโบราณที่เยือกแข็ง ดินแดนแห่งวีรบุรุษไวกิ้ง",
			"มหากาพย์อันยิ่งใหญ่สมบูรณ์แบบ ทว่าฮิลเดกลับเห็นความว่างเปล่า",
			"บันทึกถูกบิดเบือน โฉมหน้าที่แท้จริงของวิญญาณแห่งทุ่งหิมะกำลังจะถูกเปิดเผย",
			"ความจริงมักไม่สะดวกเสมอ"
		],
		"hindi": [
			"जमी हुई प्राचीन खंडहर, वाइकिंग नायकों की भूमि।",
			"महान गाथा परिपूर्ण थी, फिर भी हिल्डे ने खालीपन देखा।",
			"अभिलेखों में हेरफेर किया गया था। हिम आत्मा का असली चेहरा सामने आने वाला है।",
			"सत्य हमेशा असुविधाजनक होता है।"
		]
	}
} as const;
