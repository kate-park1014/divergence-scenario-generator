export const scenario_forest_conduit_8_05 = {
	"scenario_id": "forest_conduit_8_05",
	"order": 5,
	"act": "climax_finale",
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
		"pool_id": "pool_WhisperDealer_Conduit_V1"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "숲의 가장 깊은 곳. 모든 정보의 심장이 뛰는 곳이었다.",
						"english": "Deepest part of the forest. Where all information's heart beat.",
						"japanese": "森の最奥。すべての情報の心臓が鼓動する場所だった。",
						"chinese": "森林最深处。所有信息的心脏都在这里跳动。",
						"french": "Au plus profond de la forêt. Le cœur de toute information y battait.",
						"spanish": "La parte más profunda del bosque. Donde latía el corazón de toda la información.",
						"vietnamese": "Nơi sâu thẳm nhất khu rừng. Nơi trái tim mọi thông tin đập.",
						"thai": "ส่วนที่ลึกที่สุดของป่า ที่ซึ่งหัวใจของข้อมูลทั้งหมดเต้นอยู่",
						"hindi": "जंगल का सबसे गहरा हिस्सा। जहाँ हर जानकारी का दिल धड़कता था।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 안에… 모든 진실이 있다는 거지?",
						"english": "So… all truth is in here?",
						"japanese": "この中に…すべての真実があるのか？",
						"chinese": "所以…所有的真相都在这里吗？",
						"french": "Alors… toute la vérité est ici ?",
						"spanish": "¿Así que… toda la verdad está aquí?",
						"vietnamese": "Vậy… mọi sự thật đều ở đây sao?",
						"thai": "งั้น… ความจริงทั้งหมดอยู่ในนี้เหรอ?",
						"hindi": "तो… क्या सारा सच यहीं है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "ivy"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "기다렸어. 너희가 여기까지 올 줄 알았어.",
						"english": "I've been waiting. Knew you'd make it this far.",
						"japanese": "待っていたよ。ここまで来ると思っていた。",
						"chinese": "我一直在等。我知道你们会走到这里。",
						"french": "Je vous attendais. Je savais que vous iriez jusque-là.",
						"spanish": "He estado esperando. Sabía que llegarías tan lejos.",
						"vietnamese": "Ta đã đợi. Biết trước các ngươi sẽ đến được đây.",
						"thai": "ฉันรออยู่แล้ว รู้ว่าจะมาถึงที่นี่",
						"hindi": "मैं इंतज़ार कर रहा था। जानता था तुम यहाँ तक पहुँचोगे।"
					},
					"speaker": "ivy"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "아이비? 네가 왜 여기에…",
						"english": "Ivy? What are you doing here…?",
						"japanese": "アイビー？なぜここに…",
						"chinese": "艾维？你为什么在这里…",
						"french": "Ivy ? Que fais-tu ici… ?",
						"spanish": "¿Ivy? ¿Qué haces aquí…?",
						"vietnamese": "Ivy? Sao ngươi lại ở đây…?",
						"thai": "ไอวี่? เธอมาทำอะไรที่นี่…?",
						"hindi": "आइवी? तुम यहाँ क्यों हो…?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "나는 전달자. 그리고 마지막 조언을 하러 왔어.",
						"english": "I am the messenger. And I've come to give you a final piece of advice.",
						"japanese": "私は伝達者だ。そして最後の助言をしに来た。",
						"chinese": "我是传达者。来给你们最后的忠告。",
						"french": "Je suis la messagère. Et je suis venue vous donner un dernier conseil.",
						"spanish": "Soy la mensajera. Y he venido a darte un último consejo.",
						"vietnamese": "Ta là người truyền tin. Và đến để cho ngươi lời khuyên cuối cùng.",
						"thai": "ฉันคือผู้ส่งสาร และมาเพื่อให้คำแนะนำสุดท้าย",
						"hindi": "मैं संदेशवाहक हूँ। और आखिरी सलाह देने आया हूँ।"
					},
					"speaker": "ivy"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "ivy"
				},
				{
					"speaker": "ivy",
					"emotion": "sad",
					"content": {
						"korean": "소식통과 거래한 자들… 그들은 무엇을 잃었는지조차 몰라.",
						"english": "Those who dealt with the informant… they don't even know what they lost.",
						"japanese": "情報源と取引した者たち…彼らは何を失ったのかさえ知らない。",
						"chinese": "那些与线人交易的人…他们甚至不知道自己失去了什么。",
						"french": "Ceux qui ont traité avec l'informateur… ils ne savent même pas ce qu'ils ont perdu.",
						"spanish": "Aquellos que trataron con el informante… ni siquiera saben lo que perdieron.",
						"vietnamese": "Những kẻ giao dịch với kẻ chỉ điểm… chúng còn không biết mình đã mất gì.",
						"thai": "คนเหล่านั้นที่ติดต่อกับสายข่าว… พวกเขาไม่รู้ด้วยซ้ำว่าสูญเสียอะไรไป",
						"hindi": "जिन्होंने मुखबिर से सौदा किया… उन्हें पता भी नहीं उन्होंने क्या खोया।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "댓가가 기억이라고? 말도 안 돼.",
						"english": "The price is memories? That's absurd.",
						"japanese": "代償が記憶だと？ありえない。",
						"chinese": "代价是记忆？这太荒谬了。",
						"french": "Le prix, ce sont les souvenirs ? C'est absurde.",
						"spanish": "¿El precio son los recuerdos? Eso es absurdo.",
						"vietnamese": "Cái giá là ký ức ư? Vô lý!",
						"thai": "ค่าตอบแทนคือความทรงจำเหรอ? เป็นไปไม่ได้",
						"hindi": "कीमत यादें हैं? यह बेतुका है।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "그는 정보를 주는 게 아니야. 너희를 흡수하는 거야.",
						"english": "He's not giving information. He's absorbing you.",
						"japanese": "彼は情報を与えているのではなく、君たちを吸収しているんだ。",
						"chinese": "他不是在提供信息。他是在吸收你们。",
						"french": "Il ne donne pas d'informations. Il vous absorbe.",
						"spanish": "Él no está dando información. Te está absorbiendo.",
						"vietnamese": "Hắn không cho thông tin. Hắn đang hấp thụ các ngươi.",
						"thai": "เขาไม่ได้ให้ข้อมูล เขากำลังดูดกลืนพวกคุณ",
						"hindi": "वह जानकारी नहीं दे रहा है। वह तुम्हें सोख रहा है।"
					},
					"speaker": "ivy",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "ivy"
				},
				{
					"type": "speech",
					"speaker": "ivy",
					"emotion": "base",
					"content": {
						"korean": "이 숲의 소리… 들리지 않아? 모두 그에게 빨려 들어가고 있어.",
						"english": "The sound of this forest… don't you hear it? Everyone's being drawn into him.",
						"japanese": "この森の音…聞こえないのか？皆、彼に吸い込まれていく。",
						"chinese": "这森林的声音…你听不见吗？所有人都在被他吸走。",
						"french": "Le son de cette forêt… tu ne l'entends pas ? Tout le monde est aspiré par lui.",
						"spanish": "El sonido de este bosque… ¿no lo oyes? Todos están siendo atraídos por él.",
						"vietnamese": "Tiếng động của khu rừng này… ngươi không nghe thấy sao? Mọi thứ đang bị hắn hút vào.",
						"thai": "เสียงของป่านี้… ไม่ได้ยินเหรอ? ทุกอย่างกำลังถูกดูดกลืนเข้าไปในตัวเขา",
						"hindi": "इस जंगल की आवाज़… क्या तुम्हें सुनाई नहीं देती? सब उसके अंदर खींचे जा रहे हैं।"
					}
				},
				{
					"content": {
						"korean": "숲이 조용해… 너무 조용해.",
						"english": "The forest is quiet… too quiet.",
						"japanese": "森が静かだ…あまりにも静かだ。",
						"chinese": "森林很安静…太安静了。",
						"french": "La forêt est silencieuse… trop silencieuse.",
						"spanish": "El bosque está en silencio… demasiado silencio.",
						"vietnamese": "Rừng im lặng… quá im lặng.",
						"thai": "ป่าเงียบ… เงียบเกินไป",
						"hindi": "जंगल शांत है… बहुत शांत।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "ivy",
					"content": {
						"korean": "그가 곧 숲의 모든 소식 그 자체니까.",
						"english": "For he IS all the news of the forest.",
						"japanese": "彼こそが森の全ての知らせそのものだからな。",
						"chinese": "因为他就是森林里所有的消息本身。",
						"french": "Car il EST la nouvelle même de toute la forêt.",
						"spanish": "Porque él ES la noticia misma de todo el bosque.",
						"vietnamese": "Vì hắn chính là mọi tin tức của rừng.",
						"thai": "เพราะเขาคือข่าวสารทั้งหมดของป่าเอง",
						"hindi": "क्योंकि वह स्वयं ही वन का समस्त समाचार है।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "ivy"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "사라진 의뢰인들은… 그의 정보 목록에 데이터로 존재해.",
						"english": "The vanished clients... they exist as data in his intel log.",
						"japanese": "消えた依頼人たちは… 彼の情報リストにデータとして存在する。",
						"chinese": "那些消失的委托人… 以数据的形式存在于他的情报列表里。",
						"french": "Les clients disparus... n'existent que comme des données dans ses registres d'informations.",
						"spanish": "Los clientes desaparecidos… existen como datos en su registro de información.",
						"vietnamese": "Những khách hàng biến mất… tồn tại dưới dạng dữ liệu trong danh sách thông tin của hắn.",
						"thai": "ลูกค้าที่หายไป… มีอยู่เป็นข้อมูลในบันทึกข่าวสารของเขา",
						"hindi": "लापता ग्राहक... उसकी जानकारी के रजिस्टर में डेटा के रूप में मौजूद हैं।"
					},
					"speaker": "ivy",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "그럼 우리도… 데이터가 되는 건가?",
						"english": "Then will we too become… data?",
						"japanese": "なら私たちも… データになるのか？",
						"chinese": "那么我们也会… 变成数据吗？",
						"french": "Alors nous aussi… deviendrons-nous des données ?",
						"spanish": "Entonces, ¿nosotros también… nos convertiremos en datos?",
						"vietnamese": "Vậy chúng ta cũng… sẽ trở thành dữ liệu sao?",
						"thai": "งั้นเราก็จะ… กลายเป็นข้อมูลด้วยงั้นหรือ?",
						"hindi": "तो क्या हम भी… डेटा बन जाएँगे?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "ivy",
					"emotion": "sad",
					"content": {
						"korean": "네 발버둥마저도… 그에게는 정보다. 조심해.",
						"english": "Even your struggles… are mere intel to him. Be careful.",
						"japanese": "お前のあがきすらも… 彼にとっては情報だ。気をつけろ。",
						"chinese": "甚至你的挣扎… 对他来说也是情报。小心点。",
						"french": "Même tes efforts désespérés… sont des informations pour lui. Fais attention.",
						"spanish": "Incluso tus esfuerzos… son información para él. Ten cuidado.",
						"vietnamese": "Ngay cả sự vùng vẫy của ngươi… cũng là thông tin đối với hắn. Cẩn thận đấy.",
						"thai": "แม้แต่การดิ้นรนของเจ้า… ก็เป็นข้อมูลสำหรับเขา ระวังตัวไว้",
						"hindi": "तुम्हारे संघर्ष भी… उसके लिए जानकारी है। सावधान रहो।"
					},
					"type": "speech"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "보잘것없는 발버둥. 너희도 이제… 나의 데이터가 될 뿐.",
						"english": "Pathetic struggle. You too will now... merely become my data.",
						"japanese": "哀れな足掻き。お前たちも今や… 私のデータとなるだけだ。",
						"chinese": "徒劳的挣扎。你们也只是… 会成为我的数据。",
						"french": "Pitoyables efforts. Vous aussi, vous ne serez bientôt... que mes données.",
						"spanish": "Inútil pataleo. Vosotros también ahora... solo seréis mis datos.",
						"vietnamese": "Sự giãy giụa vô ích. Các ngươi rồi cũng sẽ... chỉ là dữ liệu của ta.",
						"thai": "การดิ้นรนที่ไร้ค่า. พวกแกก็แค่... จะกลายเป็นข้อมูลของฉัน.",
						"hindi": "तुच्छ प्रयास। तुम सब भी अब... मेरे डेटा मात्र बन जाओगे।"
					},
					"emotion": "base",
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "크윽… 아직… 끝나지 않았어…",
						"english": "Ugh... It's not... over yet...",
						"japanese": "くっ… まだ… 終わってない…",
						"chinese": "呃… 还没… 结束…",
						"french": "Argh... Ce n'est pas... encore fini...",
						"spanish": "¡Ugh... No ha... terminado todavía...!",
						"vietnamese": "Khụ... Vẫn chưa... kết thúc đâu...",
						"thai": "อึก... ยัง... ไม่จบ...",
						"hindi": "उह... अभी... खत्म नहीं हुआ है..."
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "망은… 결코… 끊어지지 않아. 나는… 모든… 곳에…",
						"english": "The net... can never... be severed. I am... everywhere...",
						"japanese": "網は… 決して… 途切れない。私は… 全ての… 場所に…",
						"chinese": "网… 绝不会… 断开。我… 无处不在…",
						"french": "Le réseau... ne peut... jamais être rompu. Je suis... partout...",
						"spanish": "La red... nunca... se romperá. Yo estoy... en todas... partes...",
						"vietnamese": "Mạng lưới... sẽ không... bao giờ đứt. Ta... ở khắp... mọi nơi...",
						"thai": "ตาข่าย... ไม่มีทาง... ขาด. ฉัน... อยู่ทุก... หนแห่ง...",
						"hindi": "जाल... कभी... नहीं टूटेगा। मैं... हर... जगह हूँ..."
					},
					"emotion": "base",
					"speaker": "boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니. 이 망을 끊을 거야. 반드시.",
						"english": "No. I will sever this net. Absolutely.",
						"japanese": "いいえ。この網を断ち切る。必ず。",
						"chinese": "不。我一定会切断这张网。",
						"french": "Non. Je briserai ce réseau. Coûte que coûte.",
						"spanish": "No. Romperé esta red. Cueste lo que cueste.",
						"vietnamese": "Không. Ta sẽ cắt đứt mạng lưới này. Bằng mọi giá.",
						"thai": "ไม่. ฉันจะตัดตาข่ายนี้. ให้ได้.",
						"hindi": "नहीं। मैं इस जाल को काट दूँगा। अवश्य।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "숲은 다시 침묵에 잠겼다. 그러나 정보의 망은, 그들의 발밑에서 여전히 숨 쉬고 있었다.",
						"english": "The forest fell silent once more. Yet, the net of information still breathed beneath their feet.",
						"japanese": "森は再び沈黙に包まれた。しかし、情報の網は、彼らの足元で未だ息づいていた。",
						"chinese": "森林再次陷入沉寂。然而，信息之网，仍在他们的脚下悄然呼吸着。",
						"french": "La forêt retomba dans le silence. Cependant, le réseau d'informations respirait toujours sous leurs pieds.",
						"spanish": "El bosque volvió a sumirse en el silencio. Sin embargo, la red de información seguía respirando bajo sus pies.",
						"vietnamese": "Rừng sâu lại chìm vào tĩnh lặng. Tuy nhiên, mạng lưới thông tin vẫn âm thầm thở dưới chân họ.",
						"thai": "ป่ากลับเข้าสู่ความเงียบงันอีกครั้ง ทว่า ตาข่ายข้อมูลยังคงหายใจอยู่ใต้เท้าของพวกเขา",
						"hindi": "वन फिर से शांत हो गया। फिर भी, सूचना का जाल उनके पैरों तले अभी भी साँस ले रहा था।"
					},
					"speaker": "narrator"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "숲의 모든 그림자가 꿈틀대며 수많은 눈동자로 변했다.",
						"english": "All shadows of the forest writhed, transforming into countless eyes.",
						"japanese": "森の全ての影が蠢き、無数の瞳へと変わった。",
						"chinese": "森林里所有的影子都蠕动着，变成了无数的眼睛。",
						"french": "Toutes les ombres de la forêt frémirent, se transformant en d'innombrables yeux.",
						"spanish": "Todas las sombras del bosque se retorcieron, transformándose en innumerables ojos.",
						"vietnamese": "Tất cả bóng tối trong rừng vặn vẹo, biến thành vô số con mắt.",
						"thai": "เงาทั้งหมดของป่าบิดเบี้ยว กลายเป็นดวงตามากมายนับไม่ถ้วน",
						"hindi": "वन की समस्त छायाएँ कुलबुला उठीं और असंख्य आँखों में बदल गईं।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "드디어, 나의 망에 온 걸 환영한다.",
						"english": "At last, welcome to my web.",
						"japanese": "ついに、私の網へようこそ。",
						"chinese": "终于，欢迎来到我的罗网。",
						"french": "Enfin, bienvenue dans ma toile.",
						"spanish": "¡Finalmente, bienvenido a mi red!",
						"vietnamese": "Cuối cùng, chào mừng đến với mạng lưới của ta.",
						"thai": "ในที่สุด ก็ยินดีต้อนรับสู่ใยแมงมุมของข้า",
						"hindi": "अंततः, मेरे जाल में तुम्हारा स्वागत है।"
					},
					"speaker": "boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "네가 감춰온 진실을 내놔!",
						"english": "Yield the truth you've concealed!",
						"japanese": "お前が隠してきた真実を吐け！",
						"chinese": "交出你一直隐藏的真相！",
						"french": "Révèle la vérité que tu as cachée !",
						"spanish": "¡Revela la verdad que has ocultado!",
						"vietnamese": "Hãy nói ra sự thật mà ngươi đã che giấu!",
						"thai": "จงเปิดเผยความจริงที่เจ้าซ่อนไว้!",
						"hindi": "उस सत्य को उजागर करो जिसे तुमने छिपाया है!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "진실? 전달자가 곧 소식 그 자체일 수도 있다는 생각은 안 해봤나?",
						"english": "Truth? Have you never considered the messenger *is* the news itself?",
						"japanese": "真実？伝達者こそが、その知らせそのものかもしれないとは考えなかったのか？",
						"chinese": "真相？你难道没想过，传达者本身就是消息吗？",
						"french": "La vérité ? N'as-tu jamais envisagé que le messager puisse être le message lui-même ?",
						"spanish": "¿Verdad? ¿Nunca has pensado que el mensajero podría ser la noticia misma?",
						"vietnamese": "Sự thật? Ngươi chưa từng nghĩ rằng người đưa tin có thể chính là tin tức đó sao?",
						"thai": "ความจริง? ไม่เคยคิดเลยหรือว่าผู้ส่งสารเองก็คือข่าวสารนั่นแหละ?",
						"hindi": "सत्य? क्या तुमने कभी नहीं सोचा कि संदेशवाहक ही स्वयं समाचार हो सकता है?"
					},
					"speaker": "boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아마존 부족의 배신, 동료들의 죄악이 눈앞에 섬광처럼 스쳐 지나갔다.",
						"english": "The Amazon tribe's betrayal, his comrades' sins, flashed before his eyes like a blinding light.",
						"japanese": "アマゾン部族の裏切り、仲間たちの罪悪が閃光のように目の前を過ぎ去った。",
						"chinese": "亚马逊部落的背叛，同伴们的罪恶，像闪电般在他眼前一闪而过。",
						"french": "La trahison de la tribu amazonienne, les péchés de ses compagnons, défilèrent devant ses yeux comme un éclair.",
						"spanish": "La traición de la tribu amazónica, los pecados de sus compañeros, pasaron ante sus ojos como un relámpago.",
						"vietnamese": "Sự phản bội của bộ lạc Amazon, tội lỗi của đồng đội, lướt qua mắt như một tia chớp.",
						"thai": "การทรยศของชนเผ่าอเมซอน บาปของเพื่อนร่วมทีม วูบผ่านหน้าไปเหมือนสายฟ้า",
						"hindi": "अमेज़न जनजाति का विश्वासघात, साथियों के पाप, बिजली की तरह उसकी आँखों के सामने कौंध गए।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "너희의 가장 깊은 비밀마저도… 나의 정보다.",
						"english": "Even your deepest secrets… are intel for me.",
						"japanese": "お前たちの最も深い秘密でさえも… 私の情報だ。",
						"chinese": "甚至你们最深层的秘密… 也是我的情报。",
						"french": "Même vos secrets les plus profonds… sont mes informations.",
						"spanish": "Incluso vuestros secretos más profundos… son mi información.",
						"vietnamese": "Ngay cả những bí mật sâu kín nhất của các ngươi… cũng là thông tin của ta.",
						"thai": "แม้แต่ความลับที่ลึกที่สุดของพวกเจ้า… ก็เป็นข้อมูลของข้า",
						"hindi": "तुम्हारे गहरे से गहरे रहस्य भी… मेरी जानकारी हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "크윽… 네 멋대로 될 순 없어!",
						"english": "Ugh... I won't let you have your way!",
						"japanese": "くっ… 勝手にはさせない！",
						"chinese": "呃… 我不会让你得逞的！",
						"french": "Argh... Je ne te laisserai pas faire !",
						"spanish": "¡Ugh... No te saldrás con la tuya!",
						"vietnamese": "Khụ... Ta sẽ không để ngươi toại nguyện!",
						"thai": "อึก... ฉันไม่ยอมให้เป็นไปตามใจแกหรอก!",
						"hindi": "उह... मैं तुम्हें अपनी मनमानी नहीं करने दूँगा!"
					},
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"숲의 어둠 속, 소식통의 그림자를 쫓았다.",
			"진실은 값비싼 대가를 요구했고, 우리는 기꺼이 지불했다.",
			"하지만 그 대가가 무엇이었는지, 누구도 알지 못했다.",
			"이제, 그 전달자가 모든 소식 그 자체임을 알게 되었다.",
			"우리는 진실의 가장 깊은 심장부로 걸어 들어간다."
		],
		"english": [
			"In the forest's darkness, we chased the informant's shadow.",
			"Truth demanded a steep price, and we willingly paid.",
			"Yet, what that price truly was, none could foresee.",
			"Now, we know the messenger himself was the message.",
			"We step into the deepest heart of truth."
		],
		"japanese": [
			"森の闇の中、情報屋の影を追った。",
			"真実は高価な代償を求め、我々は喜んで支払った。",
			"しかし、その代償が何であったか、誰も知らなかった。",
			"今、その伝達者こそが全ての情報そのものであると知った。",
			"我々は真実の最も深い核心へと足を踏み入れる。"
		],
		"chinese": [
			"在森林的黑暗中，我们追逐着线人的身影。",
			"真相索取了高昂的代价，我们欣然支付。",
			"然而，那代价究竟是什么，无人知晓。",
			"如今，我们才知，那传达者便是消息本身。",
			"我们步入真相最深处的核心。"
		],
		"french": [
			"Dans l'obscurité de la forêt, nous pourchassions l'ombre de l'informateur.",
			"La vérité exigeait un prix élevé, et nous l'avons payé volontiers.",
			"Mais ce que ce prix impliquait, personne ne le savait.",
			"À présent, nous savions que le messager était le message.",
			"Nous pénétrons au cœur le plus profond de la vérité."
		],
		"spanish": [
			"En la oscuridad del bosque, perseguimos la sombra del informante.",
			"La verdad exigía un precio alto, y lo pagamos de buena gana.",
			"Pero nadie sabía cuál era ese precio.",
			"Ahora, supimos que el mensajero era el mensaje en sí.",
			"Entramos en el corazón más profundo de la verdad."
		],
		"vietnamese": [
			"Trong bóng tối rừng sâu, chúng tôi đuổi theo bóng dáng kẻ cung cấp tin.",
			"Sự thật đòi hỏi một cái giá đắt, và chúng tôi sẵn lòng trả.",
			"Nhưng cái giá đó là gì, không ai hay biết.",
			"Giờ đây, chúng tôi biết người đưa tin chính là thông điệp.",
			"Chúng ta bước vào tận cùng trái tim của sự thật."
		],
		"thai": [
			"ในความมืดของป่า เราไล่ตามเงาของผู้ให้ข้อมูล",
			"ความจริงเรียกร้องราคาแพง และเรายินดีจ่าย",
			"แต่ไม่มีใครรู้ว่าราคาที่แท้จริงคืออะไร",
			"ตอนนี้ เรารู้แล้วว่าผู้ส่งสารคือข่าวสารทั้งหมด",
			"เราก้าวเข้าสู่ใจกลางที่ลึกที่สุดของความจริง"
		],
		"hindi": [
			"जंगल के अंधेरे में, हमने सूचना देने वाले की परछाई का पीछा किया。",
			"सच ने एक बड़ी कीमत मांगी, और हमने खुशी-खुशी चुकाई।",
			"परंतु वह कीमत क्या थी, कोई नहीं जानता था।",
			"अब, हमने जान लिया कि वह संदेशवाहक ही सारी खबर थी।",
			"हम सत्य के सबसे गहरे हृदय में प्रवेश करते हैं।"
		]
	},
	"epilogue": {
		"korean": [
			"숲은 다시 침묵에 잠겼다.",
			"정보의 망은 끊어진 듯 보였지만, 그 파편들은 숲 곳곳에 스며들어 있었다.",
			"우리는 진실을 알았으나, 그 대가는 우리 자신이었다.",
			"구원이었을까, 아니면 더 깊은 침해의 시작일까.",
			"숲은 여전히 수많은 비밀을 품고 있었다."
		],
		"english": [
			"The forest fell silent once more.",
			"The network of information seemed severed, yet its fragments permeated the entire forest.",
			"We knew the truth, but the price was ourselves.",
			"Was it salvation, or the beginning of a deeper transgression?",
			"The forest still held countless secrets."
		],
		"japanese": [
			"森は再び沈黙に包まれた。",
			"情報の網は断ち切られたように見えたが、その破片は森の至る所に染み渡っていた。",
			"我々は真実を知ったが、その代償は我々自身だった。",
			"それは救済だったのか、それともより深い侵害の始まりだったのか。",
			"森は依然として数多くの秘密を抱えていた。"
		],
		"chinese": [
			"森林再次陷入沉寂。",
			"情报网络看似断裂，但其碎片已渗入森林各处。",
			"我们知晓了真相，然而代价却是我们自己。",
			"这是救赎，还是更深层侵蚀的开端？",
			"森林仍旧怀揣着无数秘密。"
		],
		"french": [
			"La forêt retomba dans le silence.",
			"Le réseau d'informations semblait rompu, mais ses fragments imprégnaient toute la forêt.",
			"Nous connaissions la vérité, mais le prix était nous-mêmes.",
			"Était-ce le salut, ou le début d'une transgression plus profonde ?",
			"La forêt gardait encore d'innombrables secrets."
		],
		"spanish": [
			"El bosque volvió a sumirse en el silencio.",
			"La red de información parecía cortada, pero sus fragmentos se habían extendido por todo el bosque.",
			"Conocíamos la verdad, pero el precio fuimos nosotros mismos.",
			"¿Fue la salvación, o el comienzo de una transgresión más profunda?",
			"El bosque aún guardaba incontables secretos."
		],
		"vietnamese": [
			"Rừng lại chìm vào im lặng.",
			"Mạng lưới thông tin dường như đã đứt đoạn, nhưng những mảnh vỡ của nó vẫn thấm sâu khắp rừng.",
			"Chúng tôi đã biết sự thật, nhưng cái giá phải trả chính là bản thân chúng tôi.",
			"Đó là sự cứu rỗi, hay khởi đầu của một sự xâm phạm sâu sắc hơn?",
			"Rừng vẫn còn ẩn chứa vô số bí mật."
		],
		"thai": [
			"ป่ากลับสู่ความเงียบงันอีกครั้ง",
			"เครือข่ายข้อมูลดูเหมือนจะถูกตัดขาด แต่เศษเสี้ยวของมันซึมซาบไปทั่วป่า",
			"เรารู้ความจริง แต่ราคาคือตัวเราเอง",
			"มันคือการไถ่บาป หรือจุดเริ่มต้นของการล่วงละเมิดที่ลึกซึ้งยิ่งขึ้น?",
			"ป่ายังคงเก็บซ่อนความลับนับไม่ถ้วน"
		],
		"hindi": [
			"जंगल फिर से खामोश हो गया।",
			"सूचना का जाल कटा हुआ लग रहा था, पर उसके टुकड़े पूरे जंगल में समा चुके थे।",
			"हमने सच जान लिया, पर उसकी कीमत हम खुद थे।",
			"क्या यह मोक्ष था, या एक गहरे उल्लंघन की शुरुआत?",
			"जंगल में अब भी अनगिनत रहस्य छिपे थे।"
		]
	}
} as const;
