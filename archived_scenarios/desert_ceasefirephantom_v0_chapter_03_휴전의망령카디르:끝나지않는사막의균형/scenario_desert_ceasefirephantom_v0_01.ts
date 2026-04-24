export const scenario_desert_ceasefirephantom_v0_01 = {
	"scenario_id": "desert_ceasefirephantom_v0_01",
	"order": 1,
	"act": "intro",
	"theme": "desert",
	"actors": {
		"Naira": {
			"name": {
				"korean": "나이라",
				"english": "Naira",
				"japanese": "ナイラ",
				"chinese": "奈拉",
				"french": "Naïra",
				"spanish": "Naira",
				"vietnamese": "Naira",
				"thai": "นาอิรา",
				"hindi": "नायरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/dc53e5f9-7cfb-462c-c9f5-49e3ac660400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/234a2f2e-f59f-4483-45dc-eff293829800/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"모래만이 아득히 펼쳐진 땅.",
			"끝없이 반복되는 갈등, 승리도 패배도 없는 사막.",
			"이곳에서 평화는 그저 값비싼 환상일 뿐이다."
		],
		"english": [
			"A land where only sand stretches endlessly.",
			"Endless recurring conflicts, a desert with no victors, no vanquished.",
			"Here, peace is merely an expensive illusion."
		],
		"japanese": [
			"砂漠が果てしなく広がる地。",
			"終わりのない争いが繰り返される、勝利も敗北もない砂漠。",
			"ここでは、平和はただの高価な幻想に過ぎない。"
		],
		"chinese": [
			"唯有沙尘无尽蔓延的土地。",
			"无尽的冲突循环往复，一个没有胜败的沙漠。",
			"在这里，和平不过是昂贵的幻想。"
		],
		"french": [
			"Une terre où seul le sable s'étend à l'infini.",
			"Des conflits récurrents sans fin, un désert sans vainqueurs ni vaincus.",
			"Ici, la paix n'est qu'une illusion coûteuse."
		],
		"spanish": [
			"Una tierra donde solo la arena se extiende sin fin.",
			"Conflictos interminables que se repiten, un desierto sin victorias ni derrotas.",
			"Aquí, la paz es solo una ilusión costosa."
		],
		"vietnamese": [
			"Miền đất chỉ có cát trải dài vô tận.",
			"Những xung đột lặp đi lặp lại không ngừng, một sa mạc không có kẻ thắng người thua.",
			"Ở đây, hòa bình chỉ là một ảo ảnh đắt giá."
		],
		"thai": [
			"ดินแดนที่มีแต่ทรายทอดยาวสุดลูกหูลูกตา",
			"ความขัดแย้งที่วนเวียนไม่รู้จบ ทะเลทรายที่ไม่มีทั้งชัยชนะและความพ่ายแพ้",
			"ที่นี่ ความสงบสุขเป็นเพียงภาพลวงตาที่มีราคาแพง"
		],
		"hindi": [
			"एक भूमि जहाँ केवल रेत ही अंतहीन फैली हुई है।",
			"अंतहीन दोहराए जाने वाले संघर्ष, एक रेगिस्तान जहाँ न कोई जीतता है न कोई हारता है।",
			"यहाँ, शांति केवल एक महँगा भ्रम है।"
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
						"korean": "뜨거운 모래 바람이 탐험대를 감쌌다. 끝없이 펼쳐진 황야의 시작이었다.",
						"english": "Hot sand winds enveloped the expedition. It was the beginning of an endless wilderness.",
						"japanese": "熱い砂嵐が探検隊を包み込んだ。それは果てしなく広がる荒野の始まりだった。",
						"chinese": "炽热的沙风包围了探险队。这是无尽荒野的开端。",
						"french": "De chauds vents de sable enveloppèrent l'expédition. C'était le début d'une immensité sauvage sans fin.",
						"spanish": "Fuertes vientos de arena envolvieron la expedición. Era el comienzo de un desierto sin fin.",
						"vietnamese": "Cơn gió cát nóng bỏng bao trùm đoàn thám hiểm. Đó là khởi đầu của một vùng hoang dã vô tận.",
						"thai": "ลมทรายร้อนระอุพัดโอบล้อมคณะสำรวจ นี่คือจุดเริ่มต้นของดินแดนรกร้างอันไร้ที่สิ้นสุด",
						"hindi": "गर्म रेत की हवा ने अभियान दल को घेर लिया। यह एक अंतहीन जंगल की शुरुआत थी।"
					}
				},
				{
					"content": {
						"korean": "벌써 지치네. 여긴 정말 끝이 없나 봐.",
						"english": "Already tired. This place really seems endless.",
						"japanese": "もう疲れた。ここは本当に終わりがないみたいだ。",
						"chinese": "已经累了。这里似乎真的没有尽头。",
						"french": "Déjà fatigué. Cet endroit semble vraiment sans fin.",
						"spanish": "Ya estoy cansado. Este lugar parece no tener fin.",
						"vietnamese": "Đã mệt rồi. Nơi này thật sự dường như không có hồi kết.",
						"thai": "เหนื่อยแล้วนะ ที่นี่ดูเหมือนจะไม่มีที่สิ้นสุดเลย",
						"hindi": "पहले ही थक गया। यह जगह सचमुच अंतहीन लगती है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "Naira"
				},
				{
					"content": {
						"korean": "…어이, 여기 지친 나그네들.",
						"english": "...Hey, you weary travelers.",
						"japanese": "…おい、そこの疲れた旅人たちよ。",
						"chinese": "…嘿，你们这些疲惫的旅人。",
						"french": "...Hé, vous, voyageurs épuisés.",
						"spanish": "...Oigan, viajeros cansados.",
						"vietnamese": "...Này, những lữ khách mệt mỏi.",
						"thai": "...เฮ้ พวกนักเดินทางผู้เหนื่อยล้า",
						"hindi": "...अरे, तुम थके हुए यात्री।"
					},
					"speaker": "Naira",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "Naira",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "평화의 부적이라도 하나 사겠어? 잠시나마 마음의 평화를 줄 거야.",
						"english": "Care to buy an amulet of peace? It'll give you peace of mind, if only for a moment.",
						"japanese": "平和のお守りでもいかがですか？束の間でも心の安らぎを与えてくれますよ。",
						"chinese": "要买个和平符吗？它会给你带来片刻的心灵平静。",
						"french": "Voudriez-vous acheter une amulette de paix ? Elle vous apportera un peu de sérénité, ne serait-ce que pour un instant.",
						"spanish": "¿Quieren comprar un amuleto de la paz? Les dará paz mental, aunque sea por un momento.",
						"vietnamese": "Có muốn mua một bùa bình an không? Nó sẽ mang lại cho bạn sự bình yên trong tâm hồn, dù chỉ trong chốc lát.",
						"thai": "สนใจซื้อเครื่องรางแห่งสันติภาพไหม? มันจะช่วยให้ใจคุณสงบลงได้ชั่วขณะหนึ่ง",
						"hindi": "क्या तुम शांति का तावीज़ खरीदोगे? यह तुम्हें कुछ पल के लिए मानसिक शांति देगा।"
					}
				},
				{
					"content": {
						"korean": "평화의 부적? 그런 게 효과가 있을까?",
						"english": "An amulet of peace? Would something like that even work?",
						"japanese": "平和のお守り？そんなものが効くのか？",
						"chinese": "和平符？那种东西会有效吗？",
						"french": "Une amulette de paix ? Cela pourrait-il fonctionner ?",
						"spanish": "¿Un amuleto de la paz? ¿Algo así funcionaría?",
						"vietnamese": "Bùa bình an? Liệu thứ đó có hiệu quả không?",
						"thai": "เครื่องรางแห่งสันติภาพเหรอ? ของแบบนั้นจะใช้ได้ผลเหรอ?",
						"hindi": "शांति का तावीज़? क्या ऐसी कोई चीज़ काम करेगी?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "글쎄. 이 사막에서 평화는 너무 비싸서, 아무도 감당 못할 테니.",
						"english": "Well. Peace is too expensive in this desert; no one could afford it anyway.",
						"japanese": "さあね。この砂漠で平和はあまりに高価すぎて、誰も手が出せないだろうからな。",
						"chinese": "嗯。在这个沙漠里，和平太昂贵了，没人能负担得起。",
						"french": "Eh bien. La paix est trop chère dans ce désert, personne ne pourrait se la permettre de toute façon.",
						"spanish": "Bueno. La paz es demasiado cara en este desierto; nadie podría permitírsela de todos modos.",
						"vietnamese": "À thì. Hòa bình quá đắt ở sa mạc này, không ai có thể mua nổi nó đâu.",
						"thai": "ก็นะ ความสงบสุขในทะเลทรายแห่งนี้มันแพงเกินไป ไม่มีใครจ่ายไหวหรอก",
						"hindi": "खैर। इस रेगिस्तान में शांति इतनी महंगी है कि कोई इसे खरीद नहीं सकता।"
					},
					"speaker": "Naira",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "…무슨 말이야?",
						"english": "...What do you mean?",
						"japanese": "…どういうことだ？",
						"chinese": "…你什么意思？",
						"french": "...Que veux-tu dire ?",
						"spanish": "¿...Qué quieres decir?",
						"vietnamese": "...Ý anh là gì?",
						"thai": "...หมายความว่าไง?",
						"hindi": "...तुम्हारा क्या मतलब है?"
					},
					"speaker": "character_1",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그냥 하는 말이야. 자, 얼른 가던 길 가. 여기서 시간 낭비하지 말고.",
						"english": "Just saying. Now, hurry along. Don't waste time here.",
						"japanese": "ただの忠告だ。さあ、早く行け。ここで時間を無駄にするな。",
						"chinese": "我只是说说而已。好了，快走吧。别在这里浪费时间了。",
						"french": "Je dis ça comme ça. Allez, va ton chemin. Ne perds pas de temps ici.",
						"spanish": "Solo digo. Venga, sigue tu camino. No pierdas el tiempo aquí.",
						"vietnamese": "Chỉ là nói vậy thôi. Thôi nào, đi nhanh đi. Đừng lãng phí thời gian ở đây.",
						"thai": "แค่พูดไปอย่างนั้นแหละ ไปเถอะ รีบไปตามทางของเจ้า อย่ามาเสียเวลาอยู่ที่นี่เลย",
						"hindi": "बस कह रहा हूँ। चलो, जल्दी से अपने रास्ते जाओ। यहाँ समय बर्बाद मत करो।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "Naira"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "Naira"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "Naira",
					"content": {
						"korean": "아직도 헤매고 있군. 내 말이 틀렸어?",
						"english": "Still lost, aren't you? Was I wrong?",
						"japanese": "まだ迷っているようだな。私の言ったことは間違っていたか？",
						"chinese": "你还在迷茫吗？我说错了吗？",
						"french": "Toujours perdu, n'est-ce pas ? Me suis-je trompé ?",
						"spanish": "Todavía andas perdido, ¿verdad? ¿Me equivoqué?",
						"vietnamese": "Vẫn còn lạc lối à? Tôi nói sai sao?",
						"thai": "ยังคงหลงทางอยู่สินะ ข้าพูดผิดไปหรือ?",
						"hindi": "अभी भी भटक रहे हो। क्या मैं गलत था?"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "당신이 판 부적은 아무 소용 없었어. 갈등은 계속되고 있어!",
						"english": "The charm you sold was useless. The conflict continues!",
						"japanese": "お前が売ったお守りは無意味だった。争いは続いている！",
						"chinese": "你卖的护身符根本没用。冲突还在继续！",
						"french": "L'amulette que tu as vendue n'a servi à rien. Le conflit continue !",
						"spanish": "El amuleto que vendiste no sirvió de nada. ¡El conflicto continúa!",
						"vietnamese": "Lá bùa ông bán chẳng có tác dụng gì cả. Xung đột vẫn tiếp diễn!",
						"thai": "เครื่องรางที่เจ้าขายมันไร้ประโยชน์ ความขัดแย้งยังคงดำเนินต่อไป!",
						"hindi": "तुमने बेचा हुआ ताबीज़ बेकार था। संघर्ष जारी है!"
					}
				},
				{
					"content": {
						"korean": "하. 당연한 거 아니겠나. 이 사막에서 싸움은 절대 끝나지 않아.",
						"english": "Ha. Isn't that obvious? In this desert, conflict never ends.",
						"japanese": "ハッ。当然だろう。この砂漠で争いが終わることは決してない。",
						"chinese": "哈。这不是很明显吗？在这片沙漠里，战争永无止境。",
						"french": "Ha. N'est-ce pas évident ? Dans ce désert, la lutte ne finit jamais.",
						"spanish": "Ja. ¿No es obvio? En este desierto, la lucha nunca termina.",
						"vietnamese": "Ha. Chẳng phải điều hiển nhiên sao? Trong sa mạc này, chiến tranh sẽ không bao giờ kết thúc.",
						"thai": "ฮ่า. ก็ต้องเป็นอย่างนั้นอยู่แล้ว ในทะเลทรายแห่งนี้ การต่อสู้ไม่มีวันสิ้นสุดหรอก",
						"hindi": "हा। क्या यह स्पष्ट नहीं है? इस रेगिस्तान में लड़ाई कभी खत्म नहीं होती।"
					},
					"speaker": "Naira",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "모든 승리는 새로운 싸움의 시작일 뿐. 영원한 균형이란 그런 거지.",
						"english": "Every victory is just the beginning of a new struggle. That's eternal balance.",
						"japanese": "全ての勝利は、新たな戦いの始まりに過ぎない。永遠の均衡とはそういうものだ。",
						"chinese": "每次胜利都只是新一场战斗的开始。这就是永恒的平衡。",
						"french": "Chaque victoire n'est que le début d'un nouveau combat. C'est ça, l'équilibre éternel.",
						"spanish": "Cada victoria es solo el comienzo de una nueva lucha. Eso es el equilibrio eterno.",
						"vietnamese": "Mọi chiến thắng chỉ là khởi đầu cho một cuộc chiến mới. Đó chính là sự cân bằng vĩnh cửu.",
						"thai": "ทุกชัยชนะเป็นเพียงจุดเริ่มต้นของการต่อสู้ครั้งใหม่ นั่นแหละคือสมดุลอันเป็นนิรันดร์",
						"hindi": "हर जीत एक नए संघर्ष की शुरुआत मात्र है। यही शाश्वत संतुलन है।"
					},
					"speaker": "Naira",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_2",
					"content": {
						"korean": "균형이라고? 그건 그냥 끝나지 않는 고통이잖아!",
						"english": "Balance? That's just endless suffering!",
						"japanese": "均衡だと？それはただの終わりのない苦痛じゃないか！",
						"chinese": "平衡？那只不过是无尽的痛苦！",
						"french": "L'équilibre ? C'est juste une souffrance sans fin !",
						"spanish": "¿Equilibrio? ¡Eso es solo un sufrimiento sin fin!",
						"vietnamese": "Cân bằng sao? Đó chỉ là nỗi đau không hồi kết!",
						"thai": "สมดุลอย่างนั้นหรือ? นั่นมันก็แค่ความทุกข์ทรมานที่ไม่มีวันสิ้นสุดไม่ใช่รึไง!",
						"hindi": "संतुलन? वह तो बस अंतहीन पीड़ा है!"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "Naira",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "그 부적, 이제 버렸겠지. 내 말이 맞다고 느꼈을 테니.",
						"english": "You've probably thrown away that charm by now. You must have realized I was right.",
						"japanese": "あの護符はもう捨てたろう。私の言ったことが正しかったと悟ったはずだ。",
						"chinese": "那个护身符你现在应该已经扔了吧。你肯定觉得我说得没错。",
						"french": "Tu as sûrement jeté cette amulette, maintenant. Tu as dû te rendre compte que j'avais raison.",
						"spanish": "Seguro que ya tiraste ese amuleto. Debiste darte cuenta de que tenía razón.",
						"vietnamese": "Chắc giờ ông đã vứt lá bùa đó rồi. Ông hẳn đã nhận ra tôi nói đúng.",
						"thai": "เครื่องรางนั่น เจ้าคงจะทิ้งไปแล้วสินะ เพราะเจ้าคงรู้สึกว่าสิ่งที่ข้าพูดนั้นถูกต้อง",
						"hindi": "तुमने वह ताबीज़ अब तक फेंक दिया होगा। तुम्हें एहसास हुआ होगा कि मैं सही था।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "Naira"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "당신은 이 모든 걸 알고 있었던 거야?",
						"english": "You knew all of this?",
						"japanese": "お前は全てを知っていたのか？",
						"chinese": "你竟然知道这一切？",
						"french": "Tu savais tout ça ?",
						"spanish": "¿Tú sabías todo esto?",
						"vietnamese": "Ông đã biết tất cả những điều này sao?",
						"thai": "เจ้าเป็นคนรู้เรื่องทั้งหมดนี้อย่างนั้นหรือ?",
						"hindi": "तुम्हें यह सब पता था?"
					}
				},
				{
					"content": {
						"korean": "난 그저 이 사막의 이치를 따를 뿐. 진정한 평화? 그건 사치야.",
						"english": "I merely follow the ways of this desert. True peace? That's a luxury.",
						"japanese": "私はただ、この砂漠の理に従うだけだ。真の平和？それは贅沢品だ。",
						"chinese": "我只是遵循这片沙漠的法则。真正的和平？那是奢侈品。",
						"french": "Je ne fais que suivre les lois de ce désert. La vraie paix ? C'est un luxe.",
						"spanish": "Yo solo sigo las leyes de este desierto. ¿La verdadera paz? Eso es un lujo.",
						"vietnamese": "Tôi chỉ tuân theo quy luật của sa mạc này thôi. Hòa bình thực sự? Đó là một thứ xa xỉ.",
						"thai": "ข้าเพียงแค่ทำตามกฎของทะเลทรายแห่งนี้ สันติสุขที่แท้จริงน่ะหรือ? มันเป็นของฟุ่มเฟือยต่างหาก",
						"hindi": "मैं तो बस इस रेगिस्तान के तरीकों का पालन करता हूँ। सच्ची शांति? वह एक विलासिता है।"
					},
					"speaker": "Naira",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "Naira",
					"content": {
						"korean": "여긴 모두가 약탈하고 약탈당하는 곳. 평화를 외치는 자만이 가장 먼저 쓰러질 뿐.",
						"english": "This is a place where everyone plunders and is plundered. Only those who cry for peace fall first.",
						"japanese": "ここは皆が略奪し、略奪される場所。平和を叫ぶ者だけが、最初に倒れるだろう。",
						"chinese": "这里是人人掠夺与被掠夺之地。只有那些呼喊和平的人，才会最先倒下。",
						"french": "C'est un endroit où chacun pille et est pillé. Seuls ceux qui appellent à la paix tombent les premiers.",
						"spanish": "Este es un lugar donde todos saquean y son saqueados. Solo aquellos que claman por la paz caen primero.",
						"vietnamese": "Đây là nơi mà mọi người đều cướp bóc và bị cướp bóc. Chỉ những kẻ kêu gọi hòa bình mới gục ngã đầu tiên.",
						"thai": "ที่นี่คือที่ที่ทุกคนปล้นสะดมและถูกปล้นสะดม มีแต่ผู้ที่ร้องหาความสงบสุขเท่านั้นที่จะล้มลงเป็นคนแรก",
						"hindi": "यह एक ऐसी जगह है जहाँ हर कोई लूटता है और लूटा जाता है। शांति के लिए चिल्लाने वाले ही सबसे पहले गिरते हैं।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_3",
					"content": {
						"korean": "그런 절망적인 말만 할 거라면…!",
						"english": "If you're only going to say such despairing words...!",
						"japanese": "そんな絶望的なことばかり言うなら…！",
						"chinese": "如果你只说这种绝望的话…！",
						"french": "Si tu ne dis que des mots si désespérés… !",
						"spanish": "Si solo vas a decir palabras tan desesperadas…!",
						"vietnamese": "Nếu ngươi chỉ nói những lời tuyệt vọng như vậy...!",
						"thai": "ถ้าจะพูดแต่คำที่สิ้นหวังแบบนั้น...!",
						"hindi": "अगर तुम सिर्फ़ ऐसी निराशाजनक बातें कहने वाले हो तो...!"
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "나이라의 말이 계속 귓가에 맴돌아. 정말 이 사막은 변하지 않는 걸까?",
						"english": "Naira's words keep echoing in my ears. Will this desert truly never change?",
						"japanese": "ナイラの言葉が耳に残る。本当にこの砂漠は変わらないのか？",
						"chinese": "娜伊拉的话语一直在耳边回荡。这片沙漠真的不会改变吗？",
						"french": "Les mots de Naira résonnent encore à mes oreilles. Ce désert ne changera-t-il vraiment jamais ?",
						"spanish": "Las palabras de Naira siguen resonando en mis oídos. ¿Realmente este desierto nunca cambiará?",
						"vietnamese": "Lời của Naira cứ văng vẳng bên tai. Sa mạc này thật sự sẽ không bao giờ thay đổi sao?",
						"thai": "คำพูดของไนร่ายังคงก้องอยู่ในหูฉัน ทะเลทรายแห่งนี้จะไม่มีวันเปลี่ยนแปลงจริงหรือ?",
						"hindi": "नायरा के शब्द अभी भी मेरे कानों में गूँज रहे हैं। क्या यह रेगिस्तान सच में कभी नहीं बदलेगा?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "아니. 우린 달라. 우리가 끝낼 수 있어.",
						"english": "No. We are different. We can end this.",
						"japanese": "いいえ。私たちは違う。私たちが終わらせられる。",
						"chinese": "不。我们不同。我们可以结束这一切。",
						"french": "Non. Nous sommes différents. Nous pouvons y mettre fin.",
						"spanish": "No. Somos diferentes. Podemos acabar con esto.",
						"vietnamese": "Không. Chúng ta khác. Chúng ta có thể kết thúc chuyện này.",
						"thai": "ไม่ เราต่างหาก เรายุติมันได้",
						"hindi": "नहीं। हम अलग हैं। हम इसे खत्म कर सकते हैं।"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "사막의 깊숙한 곳으로 발을 내디딜수록, 알 수 없는 불안감이 그림자처럼 따라붙었다.",
						"english": "The deeper I ventured into the desert, an unknown anxiety clung to me like a shadow.",
						"japanese": "砂漠の奥深くへ足を踏み入れるほど、得体の知れない不安が影のように付きまとった。",
						"chinese": "越是深入沙漠，一种莫名的不安感就如影随形。",
						"french": "Plus je m'enfonçais dans le désert, plus une anxiété inconnue s'accrochait à moi comme une ombre.",
						"spanish": "Cuanto más me adentraba en el desierto, una ansiedad desconocida me seguía como una sombra.",
						"vietnamese": "Càng tiến sâu vào sa mạc, một sự bất an không tên cứ bám theo như hình với bóng.",
						"thai": "ยิ่งก้าวลึกเข้าไปในทะเลทราย ความกังวลที่ไม่รู้จักก็เกาะติดมาเหมือนเงา",
						"hindi": "जितना गहरा मैं रेगिस्तान में जाता गया, एक अनजानी चिंता छाया की तरह मुझ पर हावी होती गई।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 모래 폭풍 속에서 정체 모를 그림자가 모습을 드러냈다. 사막의 모든 갈등을 응축한 듯한 기운이었다.",
						"english": "Within the colossal sandstorm, an unknown shadow emerged. It felt like an embodiment of all the desert's conflicts.",
						"japanese": "巨大な砂嵐の中、正体不明の影が現れた。それは砂漠のあらゆる葛藤を凝縮したかのような気配だった。",
						"chinese": "巨大的沙暴中，一个不明身份的影子显露身形。那股气息仿佛凝聚了沙漠所有的冲突。",
						"french": "Au cœur de la tempête de sable colossale, une ombre inconnue apparut. Elle semblait incarner tous les conflits du désert.",
						"spanish": "Dentro de la colosal tormenta de arena, una sombra desconocida emergió. Parecía la encarnación de todos los conflictos del desierto.",
						"vietnamese": "Giữa cơn bão cát khổng lồ, một bóng hình không rõ danh tính xuất hiện. Đó là một luồng khí như thể cô đọng mọi xung đột của sa mạc.",
						"thai": "ท่ามกลางพายุทรายมหึมา เงาปริศนาปรากฏกายขึ้น มันคือบรรยากาศที่ดูเหมือนจะรวมความขัดแย้งทั้งหมดของทะเลทรายไว้",
						"hindi": "विशाल रेत के तूफान के बीच, एक अज्ञात छाया प्रकट हुई। ऐसा लग रहा था मानो वह रेगिस्तान के सभी संघर्षों का प्रतीक हो।"
					}
				},
				{
					"content": {
						"korean": "하찮은 것들. 여기까지 기어왔군.",
						"english": "Insignificant pests. You crawled all the way here.",
						"japanese": "くだらん奴らめ。ここまで這い上がってきたか。",
						"chinese": "卑微之物。竟也爬到这里来了。",
						"french": "Pions insignifiants. Vous avez rampé jusqu'ici.",
						"spanish": "Criaturas insignificantes. Habéis llegado hasta aquí.",
						"vietnamese": "Lũ thấp hèn. Cũng bò được đến đây sao.",
						"thai": "พวกกระจอก เอ็งคลานมาถึงนี่เลยรึ",
						"hindi": "तुच्छ प्राणी। तुम यहाँ तक रेंगते हुए आ गए।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이 사막의 진정한 평화는 오직 파괴뿐. 너희는 그저 순환의 일부다.",
						"english": "The true peace of this desert is only destruction. You are merely a part of the cycle.",
						"japanese": "この砂漠の真の平和は破壊のみ。お前たちはただの循環の一部だ。",
						"chinese": "这片沙漠真正的和平唯有毁灭。你们不过是循环的一部分。",
						"french": "La véritable paix de ce désert n'est que destruction. Vous n'êtes qu'une partie du cycle.",
						"spanish": "La verdadera paz de este desierto es solo la destrucción. Vosotros sois meramente parte del ciclo.",
						"vietnamese": "Hòa bình thật sự của sa mạc này chỉ có hủy diệt. Các ngươi chỉ là một phần của vòng tuần hoàn.",
						"thai": "สันติสุขที่แท้จริงของทะเลทรายนี้มีแต่การทำลายล้าง พวกเจ้าเป็นเพียงส่วนหนึ่งของวัฏจักร",
						"hindi": "इस रेगिस्तान की सच्ची शांति केवल विनाश में है। तुम केवल चक्र का एक हिस्सा हो।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "우리는 다르다! 우리는 이 거짓된 평화를 끝낼 거야!",
						"english": "We are different! We will end this false peace!",
						"japanese": "私たちは違う！この偽りの平和を終わらせる！",
						"chinese": "我们不同！我们要结束这虚假的和平！",
						"french": "Nous sommes différents ! Nous mettrons fin à cette fausse paix !",
						"spanish": "¡Nosotros somos diferentes! ¡Acabaremos con esta falsa paz!",
						"vietnamese": "Chúng ta khác biệt! Chúng ta sẽ chấm dứt nền hòa bình giả dối này!",
						"thai": "เราไม่เหมือนกัน! เราจะยุติสันติสุขจอมปลอมนี้!",
						"hindi": "हम अलग हैं! हम इस झूठी शांति को खत्म करेंगे!"
					}
				},
				{
					"content": {
						"korean": "어리석은… 너희의 분노조차 이 순환을 위한 장작일 뿐.",
						"english": "Foolish… Even your rage is merely fuel for this cycle.",
						"japanese": "愚かな… お前たちの怒りさえも、この循環のための薪でしかない。",
						"chinese": "愚蠢… 你们的愤怒也不过是这个循环的柴薪。",
						"french": "Insensés… Même votre rage n'est que du combustible pour ce cycle.",
						"spanish": "Necios… Incluso vuestra ira es meramente leña para este ciclo.",
						"vietnamese": "Ngu xuẩn… Ngay cả sự phẫn nộ của các ngươi cũng chỉ là củi đốt cho vòng tuần hoàn này.",
						"thai": "ช่างโง่เขลา... แม้แต่ความโกรธของพวกเจ้าก็เป็นเพียงเชื้อเพลิงสำหรับวัฏจักรนี้",
						"hindi": "मूर्ख… तुम्हारा क्रोध भी इस चक्र के लिए केवल ईंधन है।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크으윽… 하지만 기억해라. 내가 사라져도… 또 다른 {random_boss}가… 나타날 것이다.",
						"english": "Ghhh… But remember. Even if I vanish… another {random_boss} will… appear.",
						"japanese": "ぐうう… しかし覚えておけ。私が消えても… また別の{random_boss}が… 現れるだろう。",
						"chinese": "呃啊… 但要记住。即使我消失… 另一个{random_boss}也… 将会出现。",
						"french": "Ugh… Mais souviens-toi. Même si je disparais… un autre {random_boss} apparaîtra…",
						"spanish": "Grrr… Pero recordad. Incluso si desaparezco… otro {random_boss}… aparecerá.",
						"vietnamese": "Khụ khụ… Nhưng hãy nhớ. Dù ta biến mất… một {random_boss} khác sẽ… xuất hiện.",
						"thai": "ฮึ่ก... แต่จำไว้เถอะ ถึงข้าจะหายไป... {random_boss} ตัวอื่นก็จะ... ปรากฏขึ้นมา",
						"hindi": "उफ़्फ़… पर याद रखना। अगर मैं गायब भी हो जाऊँ… कोई और {random_boss}… प्रकट होगा।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "…뭐라고? 또 다른 보스가 있다고?",
						"english": "...What? There's another boss?",
						"japanese": "...何だと？また別のボスがいるだと？",
						"chinese": "...什么？还有另一个 Boss？",
						"french": "...Quoi ? Il y a un autre boss ?",
						"spanish": "...¿Qué? ¿Hay otro jefe?",
						"vietnamese": "...Gì chứ? Lại có một con boss khác sao?",
						"thai": "...ว่าไงนะ? มีบอสอีกตัวเหรอ?",
						"hindi": "...क्या? एक और बॉस है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아니, 그보다 이 갈등이… 끝나지 않는다는 말인가…?",
						"english": "No, more importantly, this conflict... it never ends...?",
						"japanese": "いや、それよりもこの争いが…終わらないとでも言うのか…？",
						"chinese": "不，更重要的是，这场冲突...永无止境吗...？",
						"french": "Non, plus important encore, ce conflit... ne se termine jamais... ?",
						"spanish": "No, más importante, ¿este conflicto... nunca termina...?",
						"vietnamese": "Không, quan trọng hơn, cuộc xung đột này... không bao giờ kết thúc sao...?",
						"thai": "ไม่สิ ที่สำคัญกว่านั้น ความขัดแย้งนี้... ไม่มีวันสิ้นสุดงั้นเหรอ...?",
						"hindi": "नहीं, इससे भी महत्वपूर्ण बात, यह संघर्ष... कभी खत्म नहीं होगा...?"
					},
					"speaker": "character_4",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "쓰러진 {random_boss} 뒤로, 사막은 여전히 침묵했다. 끝나지 않는 갈등의 그림자가 더욱 짙게 드리워졌다.",
						"english": "Behind the fallen {random_boss}, the desert remained silent. The shadow of an endless conflict deepened.",
						"japanese": "倒れた{random_boss}の背後で、砂漠は依然として沈黙していた。終わりのない紛争の影がさらに色濃く差した。",
						"chinese": "倒下的{random_boss}身后，沙漠依旧寂静。无尽冲突的阴影愈发浓重。",
						"french": "Derrière le {random_boss} tombé, le désert resta silencieux. L'ombre d'un conflit sans fin s'épaissit.",
						"spanish": "Tras el {random_boss} caído, el desierto permaneció en silencio. La sombra de un conflicto interminable se hizo más densa.",
						"vietnamese": "Sau khi {random_boss} ngã xuống, sa mạc vẫn chìm trong im lặng. Bóng đêm của cuộc xung đột không hồi kết càng trở nên dày đặc.",
						"thai": "เบื้องหลัง {random_boss} ที่ล้มลง ทะเลยทรายยังคงเงียบงัน เงาของความขัดแย้งที่ไม่มีวันสิ้นสุดทอดตัวลึกยิ่งขึ้น",
						"hindi": "{random_boss} के गिरने के बाद, रेगिस्तान अभी भी शांत था। एक अंतहीन संघर्ष की छाया और गहरी हो गई।"
					}
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "하하하! 너희의 저항은 무의미하다. 이 사막의 섭리는 변하지 않아.",
						"english": "Hahaha! Your resistance is futile. The providence of this desert will not change.",
						"japanese": "ハハハ！お前たちの抵抗は無意味だ。この砂漠の摂理は変わらない。",
						"chinese": "哈哈哈！你们的抵抗毫无意义。这片沙漠的法则不会改变。",
						"french": "Hahaha ! Votre résistance est futile. La providence de ce désert ne changera pas.",
						"spanish": "¡Jajaja! Vuestra resistencia es inútil. La providencia de este desierto no cambiará.",
						"vietnamese": "Hahaha! Sự phản kháng của các ngươi vô nghĩa thôi. Quy luật của sa mạc này sẽ không thay đổi.",
						"thai": "ฮ่าฮ่าฮ่า! การต่อต้านของพวกเจ้าไร้ประโยชน์ ชะตาของทะเลทรายนี้ไม่มีวันเปลี่ยน",
						"hindi": "हाहाहा! तुम्हारा प्रतिरोध व्यर्थ है। इस रेगिस्तान का विधान नहीं बदलेगा।"
					},
					"type": "speech",
					"emotion": "happy",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "다시 와라. 그때도 내가 똑같이 비웃어 줄 테니.",
						"english": "Come again. I'll mock you just the same then.",
						"japanese": "また来るがいい。その時も同じように嘲笑ってやるからな。",
						"chinese": "再来吧。到时我还会一样嘲笑你们。",
						"french": "Revenez. Je me moquerai de vous de la même manière.",
						"spanish": "Volved. Entonces me burlaré de vosotros de la misma forma.",
						"vietnamese": "Cứ quay lại đi. Đến lúc đó ta vẫn sẽ cười nhạo các ngươi như vậy thôi.",
						"thai": "กลับมาอีกสิ แล้วตอนนั้นข้าก็จะเยาะเย้ยพวกเจ้าเหมือนเดิม",
						"hindi": "फिर आना। तब भी मैं तुम्हें वैसे ही ताना मारूंगा।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "젠장…! 아직 끝나지 않았다…!",
						"english": "Damn it...! It's not over yet...!",
						"japanese": "くそっ…！まだ終わってない…！",
						"chinese": "该死...！还没结束...！",
						"french": "Maudit soit...! Ce n'est pas encore fini...!",
						"spanish": "¡Maldita sea...! ¡Aún no ha terminado...!",
						"vietnamese": "Chết tiệt...! Vẫn chưa kết thúc...!",
						"thai": "ให้ตายสิ...! ยังไม่จบ...!",
						"hindi": "धत् तेरे की...! यह अभी खत्म नहीं हुआ है...!"
					}
				}
			],
			"id": 15
		}
	]
} as const;
