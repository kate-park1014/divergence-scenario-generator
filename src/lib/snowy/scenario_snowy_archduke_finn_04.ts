export const scenario_snowy_archduke_finn_04 = {
	"scenario_id": "snowy_archduke_finn_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"Eiric": {
			"id": "actor_07",
			"name": {
				"korean": "에이릭",
				"english": "Eiric",
				"japanese": "エイリック",
				"chinese": "埃里克",
				"french": "Eiric",
				"spanish": "Eiric",
				"vietnamese": "Eiric",
				"thai": "เอริค",
				"hindi": "एरिक"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5d0a3fe4-8501-4bff-cadd-902ca5aa0300/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/33871376-3974-4e66-b4ff-5915e8b99a00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"설산의 지배자, '대공'.",
			"소문은 웅장했지만, 실체는 좀 달랐다.",
			"너무 큰 왕관 아래, 휘청이는 그림자.",
			"어쩐지, 웃음이 터져 나올 것 같았다."
		],
		"english": [
			"The ruler of the snowy mountains, 'Grand Duke'.",
			"The rumors were grand, but the reality was a bit different.",
			"Under a crown too large, a tottering shadow.",
			"Somehow, I felt like laughing."
		],
		"japanese": [
			"雪山の支配者、「大公」。",
			"噂は壮大だったが、実体は少し違った。",
			"あまりに大きな王冠の下、よろめく影。",
			"なぜだか、笑いがこみ上げてきそうだった。"
		],
		"chinese": [
			"雪山的主宰，“大公”。",
			"传闻气势磅礴，但实际情况却有所不同。",
			"巨大的王冠下，摇摇晃晃的影子。",
			"不知为何，我差点笑出声。"
		],
		"french": [
			"Le souverain des montagnes enneigées, le « Grand-Duc ».",
			"Les rumeurs étaient grandioses, mais la réalité était un peu différente.",
			"Sous une couronne trop grande, une ombre chancelante.",
			"D'une certaine manière, j'avais l'impression que le rire allait éclater."
		],
		"spanish": [
			"El gobernante de las montañas nevadas, el \"Gran Duque\".",
			"Los rumores eran grandiosos, pero la realidad era un poco diferente.",
			"Bajo una corona demasiado grande, una sombra tambaleante.",
			"De alguna manera, sentí que la risa iba a estallar."
		],
		"vietnamese": [
			"Kẻ thống trị núi tuyết, 'Đại Công'.",
			"Tin đồn thì hoành tráng, nhưng thực tế thì hơi khác một chút.",
			"Dưới chiếc vương miện quá khổ, một bóng hình lảo đảo.",
			"Không hiểu sao, tôi cảm thấy muốn bật cười."
		],
		"thai": [
			"ผู้ปกครองภูเขาหิมะ 'แกรนด์ดยุก'",
			"ข่าวลือยิ่งใหญ่ แต่ความจริงกลับแตกต่างออกไปเล็กน้อย",
			"ใต้พระมงกุฎที่ใหญ่เกินไป เงาที่โซซัดโซเซ",
			"ไม่รู้ทำไม รู้สึกเหมือนจะหลุดหัวเราะออกมา"
		],
		"hindi": [
			"बर्फ़ीले पहाड़ों का शासक, 'ग्रांड ड्यूक'।",
			"अफ़वाहें तो शानदार थीं, पर हक़ीक़त कुछ और ही निकली।",
			"बहुत बड़े ताज के नीचे, एक डगमगाती परछाई।",
			"किसी तरह, मुझे हँसी आ रही थी।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 얼음 궁전. 그러나 어딘가 엉성한 분위기.",
						"english": "A massive ice palace. Yet, a somewhat clumsy atmosphere.",
						"japanese": "巨大な氷の宮殿。しかし、どこかちぐはぐな雰囲気。",
						"chinese": "巨大的冰宫。然而，气氛却有些笨拙。",
						"french": "Un palais de glace immense. Pourtant, une ambiance quelque peu maladroite.",
						"spanish": "Un palacio de hielo masivo. Sin embargo, un ambiente algo torpe.",
						"vietnamese": "Cung điện băng khổng lồ. Tuy nhiên, một không khí có phần vụng về.",
						"thai": "ปราสาทน้ำแข็งมหึมา แต่บรรยากาศกลับดูซุ่มซ่าม",
						"hindi": "एक विशाल बर्फ़ीला महल। फिर भी, कुछ अजीब सा माहौल।"
					}
				},
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "Eiric",
					"action": "enter"
				},
				{
					"speaker": "Eiric",
					"emotion": "base",
					"content": {
						"korean": "저게… 대공의 그림자인가?",
						"english": "Is that... the Grand Duke's shadow?",
						"japanese": "あれが…大公の影か？",
						"chinese": "那是……大公的影子吗？",
						"french": "Est-ce que c'est... l'ombre du Grand-Duc ?",
						"spanish": "Es eso... la sombra del Gran Duque?",
						"vietnamese": "Đó là… bóng của Đại Công à?",
						"thai": "นั่น…คือเงาของแกรนด์ดยุกงั้นหรือ?",
						"hindi": "क्या वह... ग्रांड ड्यूक की परछाई है?"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "근데 왜 이렇게… 휘청거려?",
						"english": "But why is it... tottering so much?",
						"japanese": "しかし、なぜこんなに…よろめいているんだ？",
						"chinese": "但为什么它…摇摇晃晃的？",
						"french": "Mais pourquoi est-ce que ça... chancelle autant ?",
						"spanish": "Pero por qué... se tambalea tanto?",
						"vietnamese": "Nhưng sao nó lại… lảo đảo thế?",
						"thai": "แต่ทำไมถึงได้…โซซัดโซเซขนาดนี้?",
						"hindi": "पर यह इतनी… डगमगा क्यों रही है?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "Eiric",
					"emotion": "base",
					"content": {
						"korean": "왕관이 너무 큰 것 같기도 하고. 잘 안 보이는 모양이야.",
						"english": "The crown might be too big, too. Seems like he can't see well.",
						"japanese": "王冠が大きすぎるのかもしれない。よく見えないようだ。",
						"chinese": "好像王冠也太大了。看来他看不清。",
						"french": "La couronne est peut-être trop grande aussi. On dirait qu'il ne voit pas bien.",
						"spanish": "La corona podría ser demasiado grande también. Parece que no puede ver bien.",
						"vietnamese": "Có lẽ vương miện quá lớn. Có vẻ như anh ta không nhìn rõ.",
						"thai": "ดูเหมือนมงกุฎจะใหญ่เกินไปด้วย ดูเหมือนเขาจะมองไม่เห็น",
						"hindi": "शायद ताज भी बहुत बड़ा है। लगता है उसे ठीक से दिख नहीं रहा।"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "저 멀리, 펭귄 신하 둘이 작게 수군거린다. '보스, 무서운 척 좀…'.",
						"english": "In the distance, two penguin retainers whisper, 'Boss, try to act scary...'.",
						"japanese": "遠くで、ペンギンの家臣が二人、小声でささやく。「ボス、もう少し怖いフリを…」。",
						"chinese": "在远处，两只企鹅侍从小声嘀咕着：“老大，装得吓人一点吧……”。",
						"french": "Au loin, deux pingouins serviteurs chuchotent : « Patron, fais semblant d'être effrayant... ».",
						"spanish": "A lo lejos, dos pingüinos sirvientes susurran: \"Jefe, intenta actuar de forma más aterradora...\".",
						"vietnamese": "Đằng xa, hai cận thần chim cánh cụt thì thầm nhỏ nhẹ. 'Sếp ơi, cố gắng giả vờ đáng sợ một chút đi…'.",
						"thai": "ไกลออกไป ข้าราชบริพารเพนกวินสองตัวกระซิบกระซาบว่า 'หัวหน้าครับ แกล้งทำเป็นน่ากลัวหน่อยสิครับ...'",
						"hindi": "दूर से, दो पेंग्विन दरबारी धीरे से फुसफुसाते हैं, 'बॉस, थोड़ा डरावना होने का नाटक करो...।'"
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
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "Eiric"
				},
				{
					"speaker": "Eiric",
					"emotion": "base",
					"content": {
						"korean": "흐음… 아까보다 더 이상해진 것 같군.",
						"english": "Hmm... It seems even stranger than before.",
						"japanese": "ふむ…さっきよりもっとおかしくなったようだな。",
						"chinese": "嗯…好像比刚才更奇怪了。",
						"french": "Hmm... Ça semble encore plus étrange qu'avant.",
						"spanish": "Mmm... Parece aún más extraño que antes.",
						"vietnamese": "Hừm… Có vẻ còn lạ hơn lúc nãy.",
						"thai": "หืม… ดูเหมือนจะแปลกไปกว่าเมื่อกี้อีกนะ",
						"hindi": "हम्म... यह पहले से भी ज़्यादा अजीब लग रहा है।"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "감히, 나의 영역에 발을 들이는 자들이 누구냐!",
						"english": "Who dares to trespass upon my domain!",
						"japanese": "我が領域に足を踏み入れる不届き者どもは誰だ！",
						"chinese": "谁敢擅闯我的领地！",
						"french": "Qui ose fouler mon domaine !",
						"spanish": "¿Quién se atreve a pisar mi dominio?",
						"vietnamese": "Kẻ nào dám đặt chân vào lãnh địa của ta!",
						"thai": "ใครบังอาจย่างกรายเข้ามาในอาณาเขตของข้า!",
						"hindi": "कौन मेरे क्षेत्र में पैर रखने की हिम्मत कर रहा है!"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"duration_ms": 300,
					"action": "shake",
					"type": "direction"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "…방금 휘청거렸지?",
						"english": "...Did you just stumble?",
						"japanese": "…今、よろめいた？",
						"chinese": "……你刚才是不是踉跄了一下？",
						"french": "...Tu viens de trébucher, n'est-ce pas ?",
						"spanish": "...¿Acabas de tropezar?",
						"vietnamese": "...Vừa rồi ngươi có loạng choạng không?",
						"thai": "...เมื่อกี้เจ้าเซถลาเหรอ?",
						"hindi": "...क्या तुम अभी ठोकर खाए?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "무엄하다! 얼음 처형에 처할 것이다!",
						"english": "Insolent! You shall face ice execution!",
						"japanese": "無礼者め！氷の処刑に処してやる！",
						"chinese": "放肆！你将被处以冰刑！",
						"french": "Impertinent ! Tu subiras l'exécution par la glace !",
						"spanish": "¡Insolente! ¡Serás ejecutado por el hielo!",
						"vietnamese": "Vô lễ! Ngươi sẽ bị xử tử bằng băng!",
						"thai": "บังอาจ! เจ้าจะต้องถูกประหารด้วยน้ำแข็ง!",
						"hindi": "गुस्ताख! तुम्हें बर्फीली मौत मिलेगी!"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "왕관을 너무 깊게 쓴 것 같아. 한쪽 눈을 완전히 가렸는데.",
						"english": "It seems the crown is worn too low. It completely covers one eye.",
						"japanese": "冠、深すぎない？片目、完全に隠れてるよ。",
						"chinese": "王冠好像戴得太低了。完全遮住了一只眼睛。",
						"french": "On dirait que la couronne est trop basse. Elle couvre complètement un œil.",
						"spanish": "Parece que la corona está demasiado baja. Cubre completamente un ojo.",
						"vietnamese": "Hình như vương miện đội hơi sâu. Che mất hoàn toàn một bên mắt rồi.",
						"thai": "ดูเหมือนมงกุฎจะสวมลึกไปหน่อย มันปิดตาข้างหนึ่งมิดเลยนะ",
						"hindi": "लगता है मुकुต बहुत नीचा पहन रखा है। इसने एक आँख पूरी तरह ढक ली है।"
					},
					"speaker": "Eiric",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "Eiric",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "Eiric",
					"emotion": "base",
					"content": {
						"korean": "저 왕관, 계속 왼쪽 눈을 가리네.",
						"english": "That crown keeps covering the left eye.",
						"japanese": "あの冠、ずっと左目を隠してるな。",
						"chinese": "那顶王冠，一直遮着左眼。",
						"french": "Cette couronne cache sans cesse l'œil gauche.",
						"spanish": "Esa corona sigue cubriendo el ojo izquierdo.",
						"vietnamese": "Vương miện đó cứ che mắt trái mãi.",
						"thai": "มงกุฎนั่นยังคงปิดตาซ้ายอยู่เลย",
						"hindi": "वह मुकुट बाईं आँख को ढकता रहता है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "그때마다 {random_boss}는 작게 한숨을 쉬었다.",
						"english": "Each time, {random_boss} let out a small sigh.",
						"japanese": "そのたびに、{random_boss}は小さくため息をついた。",
						"chinese": "每当这时，{random_boss}都会轻轻叹一口气。",
						"french": "À chaque fois, {random_boss} laissait échapper un petit soupir.",
						"spanish": "Cada vez, {random_boss} suspiraba levemente.",
						"vietnamese": "Mỗi lần như vậy, {random_boss} lại khẽ thở dài.",
						"thai": "ทุกครั้ง, {random_boss} ก็จะถอนหายใจเบาๆ",
						"hindi": "हर बार, {random_boss} ने एक छोटी सी आह भरी।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "happy",
					"content": {
						"korean": "푸흡… 진짜 왕 맞지?",
						"english": "Pfft... You're a real king, right?",
						"japanese": "ぷっ…本物の王様だよね？",
						"chinese": "噗……你真是个国王吗？",
						"french": "Pfff... Vous êtes un vrai roi, n'est-ce pas ?",
						"spanish": "Pff... ¿Eres un rey de verdad, no?",
						"vietnamese": "Khụ khụ... Ngươi thật sự là vua phải không?",
						"thai": "หึๆ... ท่านเป็นราชาจริงๆ ใช่ไหม?",
						"hindi": "फुफ... तुम सच में राजा हो ना?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "감히 나를 의심하는가! 이 거대한 왕관은 나의 위엄을 상징한다!",
						"english": "How dare you doubt me! This magnificent crown symbolizes my majesty!",
						"japanese": "よくも私を疑ったな！この巨大な冠こそ、私の威厳の象徴なのだ！",
						"chinese": "你竟敢怀疑我！这巨大的王冠象征着我的威严！",
						"french": "Comment oses-tu me douter ! Cette magnifique couronne symbolise ma majesté !",
						"spanish": "¡¿Cómo osas dudar de mí?! ¡Esta majestuosa corona simboliza mi autoridad!",
						"vietnamese": "Ngươi dám nghi ngờ ta! Vương miện khổng lồ này tượng trưng cho sự uy nghiêm của ta!",
						"thai": "เจ้าบังอาจสงสัยข้าหรือ! มงกุฎอันยิ่งใหญ่นี้คือสัญลักษณ์แห่งความสง่างามของข้า!",
						"hindi": "तुम मेरी क्षमता पर संदेह करने की हिम्मत कैसे करते हो! यह विशाल मुकुट मेरी गरिमा का प्रतीक है!"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "Eiric",
					"emotion": "sad",
					"content": {
						"korean": "…조금만 위로 쓰면 시야가 확보될 것 같은데.",
						"english": "...If you just wore it a little higher, your vision would be clear.",
						"japanese": "…もう少し上に被れば、視界が確保できると思うんだけど。",
						"chinese": "……如果戴高一点，视野应该就能清楚了。",
						"french": "...Si vous la portiez juste un peu plus haut, votre vision serait dégagée.",
						"spanish": "...Si la llevaras un poco más arriba, tendrías buena vista.",
						"vietnamese": "...Chỉ cần đội cao lên một chút là có thể nhìn rõ rồi.",
						"thai": "...ถ้าสวมให้สูงขึ้นอีกนิด ก็จะมองเห็นได้ชัดขึ้นนะ",
						"hindi": "...अगर इसे थोड़ा ऊपर पहनते, तो तुम्हारी दृष्टि साफ हो जाती।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "Eiric",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "다음은 또 뭘까.",
						"english": "What's next, I wonder.",
						"japanese": "次はまた何が来るかな。",
						"chinese": "接下来又会是什么呢。",
						"french": "Que nous réserve la suite, je me demande.",
						"spanish": "¿Qué será lo siguiente, me pregunto?",
						"vietnamese": "Tiếp theo sẽ là gì đây nhỉ.",
						"thai": "ต่อไปจะเป็นอะไรอีกนะ",
						"hindi": "अब अगला क्या होगा, मुझे आश्चर्य है।"
					},
					"speaker": "Eiric",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "더 이상은 한 발짝도 나아갈 수 없을 것이다!",
						"english": "You shall not take another step!",
						"japanese": "もう一歩も進ませない！",
						"chinese": "你休想再向前迈出一步！",
						"french": "Vous ne ferez pas un pas de plus !",
						"spanish": "¡No darás un paso más!",
						"vietnamese": "Ngươi sẽ không thể tiến thêm một bước nào nữa!",
						"thai": "เจ้าจะไปไหนไม่ได้อีกแล้ว!",
						"hindi": "तुम एक और कदम आगे नहीं बढ़ा सकते!"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "{random_boss}는 얼어붙은 사르딘 왕홀을 날개로 문지르고 있었다.",
						"english": "{random_boss} was rubbing the frozen Sardi Scepter with its wings.",
						"japanese": "{random_boss}は凍てついたサルディン王笏を翼でこすっていた。",
						"chinese": "{random_boss}正用翅膀摩擦着冰冻的萨丁权杖。",
						"french": "{random_boss} frottait le Sceptre de Sardi gelé avec ses ailes.",
						"spanish": "{random_boss} estaba frotando el Cetro de Sardi congelado con sus alas.",
						"vietnamese": "{random_boss} đang dùng cánh chà xát Vương trượng Sardi đóng băng.",
						"thai": "{random_boss} กำลังใช้ปีกถูคทาราชวงศ์ซาร์ดีนที่แข็งเป็นน้ำแข็ง",
						"hindi": "{random_boss} अपनी पंखों से जमी हुई सार्डीन राजदंड को रगड़ रहा था।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…녹이려는 건가?",
						"english": "...Is it trying to melt it?",
						"japanese": "…溶かそうとしてるのか？",
						"chinese": "……想把它融化吗？",
						"french": "...Essaie-t-il de le faire fondre ?",
						"spanish": "...¿Está intentando derretirlo?",
						"vietnamese": "...Đang cố làm tan chảy nó à?",
						"thai": "...กำลังพยายามละลายมันเหรอ?",
						"hindi": "...क्या यह इसे पिघलाने की कोशिश कर रहा है?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아마도. 손 시려울 것 같긴 해.",
						"english": "Probably. Must be freezing.",
						"japanese": "多分ね。手が冷たいだろうけど。",
						"chinese": "也许吧。手应该很冷。",
						"french": "Probablement. Ça doit être glacial.",
						"spanish": "Probablemente. Debe de estar helado.",
						"vietnamese": "Có lẽ vậy. Chắc lạnh lắm.",
						"thai": "อาจจะนะ คงจะเย็นน่าดู",
						"hindi": "शायद। हाथ ठंडे हो रहे होंगे।"
					},
					"speaker": "Eiric",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이… 이 왕홀은! 나의 권위를 상징하는 신성한 물건이다!",
						"english": "This... this scepter! It is a sacred object symbolizing my authority!",
						"japanese": "こ…この王笏は！私の権威を象徴する神聖な物だ！",
						"chinese": "这…这权杖！它是象征我权威的神圣之物！",
						"french": "Ce... ce sceptre ! C'est un objet sacré symbolisant mon autorité !",
						"spanish": "¡Este... este cetro! ¡Es un objeto sagrado que simboliza mi autoridad!",
						"vietnamese": "Cái... cái vương trượng này! Nó là vật linh thiêng tượng trưng cho quyền uy của ta!",
						"thai": "นี่... นี่คือคทาราชวงศ์! มันคือของศักดิ์สิทธิ์ที่แสดงถึงอำนาจของข้า!",
						"hindi": "यह... यह राजदंड! यह मेरे अधिकार का प्रतीक एक पवित्र वस्तु है!"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "결국 여기까지 왔군. 하지만, 이곳은 나의 궁전!",
						"english": "So you've finally made it this far. But this is my palace!",
						"japanese": "ついにここまで来たか。だが、ここは私の宮殿だ！",
						"chinese": "没想到你竟然能走到这里。但，这里是我的宫殿！",
						"french": "Vous êtes enfin arrivé jusqu'ici. Mais c'est mon palais !",
						"spanish": "Así que al final llegaste hasta aquí. ¡Pero este es mi palacio!",
						"vietnamese": "Cuối cùng ngươi cũng đến được đây. Nhưng, đây là cung điện của ta!",
						"thai": "ในที่สุดเจ้าก็มาถึงที่นี่ แต่ที่นี่คือวังของข้า!",
						"hindi": "आखिरकार तुम यहाँ तक पहुँच गए। लेकिन, यह मेरा महल है!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "…대공이라는 게 진짜 너야?",
						"english": "...Are you really the Grand Duke?",
						"japanese": "…大公って、本当にお前なのか？",
						"chinese": "……你就是大公本人？",
						"french": "...C'est vraiment toi, le Grand-Duc ?",
						"spanish": "...¿De verdad eres tú el Gran Duque?",
						"vietnamese": "...Ngươi thật sự là Đại Công tước ư?",
						"thai": "...เจ้าคือนายพลจริง ๆ เหรอ?",
						"hindi": "...क्या तुम वाकई ग्रैंड ड्यूक हो?"
					}
				},
				{
					"speaker": "random_boss",
					"duration_ms": 300,
					"action": "shake",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "당연하다! 이 거대한 왕관을 보라! 이것이야말로 왕의 증표!",
						"english": "Of course! Behold this magnificent crown! This is truly the mark of a king!",
						"japanese": "当然だ！この巨大な王冠を見よ！これこそが王の証し！",
						"chinese": "当然！看这巨大的王冠！这才是王的象征！",
						"french": "Bien sûr ! Contemplez cette magnifique couronne ! C'est la véritable marque d'un roi !",
						"spanish": "¡Por supuesto! ¡Contempla esta gigantesca corona! ¡Esto es la verdadera prueba de un rey!",
						"vietnamese": "Đương nhiên! Hãy nhìn chiếc vương miện khổng lồ này! Đây chính là bằng chứng của một vị vua!",
						"thai": "แน่นอน! ดูมงกุฎอันยิ่งใหญ่นี้สิ! นี่แหละคือสัญลักษณ์ของกษัตริย์!",
						"hindi": "बेशक! इस विशाल मुकुट को देखो! यही तो राजा का प्रमाण है!"
					}
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "Eiric",
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "…그 왕관 때문에 계속 휘청거리는 것 같은데.",
						"english": "...But it looks like you keep stumbling because of that crown.",
						"japanese": "…その王冠のせいで、ずっとふらついてるみたいだけど。",
						"chinese": "……但你好像因为那顶王冠一直在摇晃。",
						"french": "...Mais on dirait que tu ne cesses de trébucher à cause de cette couronne.",
						"spanish": "...Pero parece que sigues tambaleándote por esa corona.",
						"vietnamese": "...Nhưng có vẻ như ngươi cứ loạng choạng vì cái vương miện đó.",
						"thai": "...แต่ดูเหมือนว่าเจ้าจะโซเซเพราะมงกุฎนั่นนะ",
						"hindi": "...लेकिन ऐसा लगता है कि तुम उस मुकुट की वजह से लड़खड़ा रहे हो।"
					},
					"speaker": "Eiric",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "크윽! 감히… 감히 나의 위엄을…!",
						"english": "Ugh! How dare you... How dare you question my dignity...!",
						"japanese": "ぐぬっ！よくも…よくも私の威厳を…！",
						"chinese": "呃啊！你竟敢……竟敢质疑我的威严……！",
						"french": "Ugh ! Comment oses-tu... Comment oses-tu ma dignité...!",
						"spanish": "¡Ugh! ¡Cómo te atreves... Cómo te atreves a mi dignidad...!",
						"vietnamese": "Khụ! Dám... dám xúc phạm uy nghiêm của ta...!",
						"thai": "อึก! บังอาจ... บังอาจมาดูหมิ่นศักดิ์ศรีของข้า...!",
						"hindi": "ग्र्र! हिम्मत कैसे हुई... हिम्मत कैसे हुई मेरी गरिमा को...!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "웃으면 안 돼… 웃으면 안 돼…",
						"english": "Must not laugh... Must not laugh...",
						"japanese": "笑ってはいけない… 笑ってはいけない…",
						"chinese": "不能笑… 不能笑…",
						"french": "Il ne faut pas rire... Il ne faut pas rire...",
						"spanish": "No debo reír... No debo reír...",
						"vietnamese": "Không được cười… Không được cười…",
						"thai": "ห้ามหัวเราะ... ห้ามหัวเราะ...",
						"hindi": "हँसना नहीं है… हँसना नहीं है…"
					},
					"speaker": "character_any",
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "크윽… 내 왕관이… 너무 무거웠나…",
						"english": "Ugh... Was my crown... too heavy...?",
						"japanese": "くっ… 私の王冠が… 重すぎたのか…",
						"chinese": "呃… 我的王冠… 是不是太重了…",
						"french": "Ugh... Ma couronne... était-elle trop lourde...?",
						"spanish": "Ugh... ¿Mi corona... era demasiado pesada...?",
						"vietnamese": "Khụ… Vương miện của ta… quá nặng ư…?",
						"thai": "อึก... มงกุฎของข้า... หนักเกินไปหรือเปล่า...",
						"hindi": "उफ़… मेरा मुकुट… क्या बहुत भारी था…?"
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "…대공이라는 게 겨우 이거였어?",
						"english": "...Is that all there is to being a Grand Duke?",
						"japanese": "…大公なんて、結局これだけだったのか？",
						"chinese": "…大公就只有这点本事吗？",
						"french": "...Est-ce tout ce qu'il y a à être un Grand Duc ?",
						"spanish": "...¿Eso es todo lo que significa ser un Gran Duque?",
						"vietnamese": "…Đại công tước chỉ có thế thôi sao?",
						"thai": "...เจ้าชายผู้ยิ่งใหญ่ก็แค่นี้เองงั้นหรือ?",
						"hindi": "…क्या ग्रैंड ड्यूक बस इतना ही था?"
					},
					"type": "speech"
				},
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "Eiric",
					"action": "enter"
				},
				{
					"speaker": "Eiric",
					"emotion": "base",
					"content": {
						"korean": "저건 그냥… 가짜 왕이었군.",
						"english": "He was just... a fake king.",
						"japanese": "あれはただの… 偽の王だったな。",
						"chinese": "那不过是… 一个假国王。",
						"french": "C'était juste... un faux roi.",
						"spanish": "Él era solo... un rey falso.",
						"vietnamese": "Hắn chỉ là… một vị vua giả.",
						"thai": "นั่นมันก็แค่... ราชาจอมปลอมสินะ",
						"hindi": "वह बस… एक नकली राजा था।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "하지만 진짜 왕이 아니라면, 누가 이곳을 지배하는가.",
						"english": "But if not the real king, then who rules this place?",
						"japanese": "しかし、もし本物の王でないのなら、誰がここを支配しているのか。",
						"chinese": "但如果不是真正的国王，那谁来统治这里？",
						"french": "Mais si ce n'est pas le vrai roi, qui donc gouverne cet endroit ?",
						"spanish": "Pero si no es el rey verdadero, ¿quién gobierna este lugar?",
						"vietnamese": "Nhưng nếu không phải vua thật, vậy ai thống trị nơi này?",
						"thai": "แต่ถ้าไม่ใช่ราชาที่แท้จริง แล้วใครกันเล่าที่ปกครองที่นี่",
						"hindi": "लेकिन अगर वह असली राजा नहीं है, तो इस जगह पर कौन राज करता है?"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "탐험대는 더 깊은 곳으로 향한다.",
						"english": "The expedition team heads deeper.",
						"japanese": "探検隊はさらに深い場所へと向かう。",
						"chinese": "探险队向更深处进发。",
						"french": "L'équipe d'expédition s'enfonce plus profondément.",
						"spanish": "El equipo de expedición se dirige más profundo.",
						"vietnamese": "Đoàn thám hiểm tiến sâu hơn.",
						"thai": "ทีมสำรวจมุ่งหน้าสู่ส่วนที่ลึกกว่า",
						"hindi": "अभियान दल और गहराई में जाता है।"
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "happy",
					"content": {
						"korean": "크하하! 나의 위대한 왕관 아래 무릎 꿇어라!",
						"english": "Hahaha! Kneel before my magnificent crown!",
						"japanese": "クハハハ！我が偉大な王冠の下にひざまずけ！",
						"chinese": "哈哈！跪倒在我伟大的王冠之下吧！",
						"french": "Hahaha ! Agenouillez-vous devant ma magnifique couronne !",
						"spanish": "¡Jajaja! ¡Arrodíllense ante mi magnífica corona!",
						"vietnamese": "Khà khà! Hãy quỳ gối dưới vương miện vĩ đại của ta!",
						"thai": "คิกคิก! จงคุกเข่าต่อหน้ามงกุฎอันยิ่งใหญ่ของข้า!",
						"hindi": "हाहाहा! मेरे शानदार मुकुट के सामने घुटने टेको!"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "젠장… 다시 도전한다.",
						"english": "Damn it... I'll challenge again.",
						"japanese": "ちくしょう… もう一度挑戦する。",
						"chinese": "该死… 再挑战一次。",
						"french": "Zut... Je vais réessayer.",
						"spanish": "Maldita sea... Lo intentaré de nuevo.",
						"vietnamese": "Chết tiệt… Ta sẽ thử lại.",
						"thai": "ให้ตายสิ... ข้าจะลองใหม่อีกครั้ง",
						"hindi": "धिक्कार है… मैं फिर से कोशिश करूँगा।"
					}
				}
			]
		}
	]
} as const;
