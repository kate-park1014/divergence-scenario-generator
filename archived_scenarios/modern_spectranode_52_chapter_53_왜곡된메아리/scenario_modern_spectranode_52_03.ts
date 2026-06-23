export const scenario_modern_spectranode_52_03 = {
	"scenario_id": "modern_spectranode_52_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"lin": {
			"id": "mon_d036a884-3dde-472c-9fe7-c4807643860f",
			"name": {
				"korean": "린",
				"english": "Lin",
				"japanese": "リン",
				"chinese": "琳",
				"french": "Lin",
				"spanish": "Lin",
				"vietnamese": "Lin",
				"thai": "ลิน",
				"hindi": "लिन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a095dd66-1857-4f44-68b0-2ece83006d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/05b02694-f1ed-4e4c-b7ca-fb5b74a48900/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"도시의 번영 아래, 과거의 그림자가 꿈틀댄다.",
			"완벽해 보였던 디지털 세상은, 처음부터 거짓이었다.",
			"잊혀진 기술자 '린'. 그녀는 모든 진실을 알까?",
			"혹은, 무심코 모든 것을 폭로할까?"
		],
		"english": [
			"Beneath the city's prosperity, shadows of the past stir.",
			"The seemingly perfect digital world was a lie from the start.",
			"Lyn, the forgotten engineer. Does she know the whole truth?",
			"Or will she inadvertently expose everything?"
		],
		"japanese": [
			"都市の繁栄の下、過去の影が蠢く。",
			"完璧に見えたデジタル世界は、最初から偽りだった。",
			"忘れ去られた技術者「リン」。彼女はすべての真実を知っているのだろうか？",
			"あるいは、無意識のうちにすべてを暴露してしまうのか？"
		],
		"chinese": [
			"在城市的繁荣之下，过去的阴影蠢蠢欲动。",
			"看似完美的数字世界，从一开始就是个谎言。",
			"被遗忘的工程师“琳”。她是否知道所有真相？",
			"抑或是，她会不经意间揭露一切？"
		],
		"french": [
			"Sous la prospérité de la ville, les ombres du passé s'agitent.",
			"Le monde numérique, en apparence parfait, n'était qu'un mensonge dès le début.",
			"Lyn, l'ingénieure oubliée. Connaît-elle toute la vérité ?",
			"Ou révélera-t-elle tout par inadvertance ?"
		],
		"spanish": [
			"Bajo la prosperidad de la ciudad, las sombras del pasado se agitan.",
			"El mundo digital, que parecía perfecto, fue una mentira desde el principio.",
			"Lyn, la ingeniera olvidada. ¿Conocerá toda la verdad?",
			"¿O revelará todo sin quererlo?"
		],
		"vietnamese": [
			"Dưới sự phồn vinh của thành phố, bóng tối quá khứ đang cựa quậy.",
			"Thế giới số tưởng chừng hoàn hảo, hóa ra là dối trá từ ban đầu.",
			"Lyn, kỹ sư bị lãng quên. Liệu cô ấy có biết tất cả sự thật không?",
			"Hay cô ấy sẽ vô tình tiết lộ mọi thứ?"
		],
		"thai": [
			"ใต้ความเจริญรุ่งเรืองของเมือง เงาอดีตกำลังคืบคลาน.",
			"โลกดิจิทัลที่ดูเหมือนสมบูรณ์แบบ แท้จริงแล้วเป็นเรื่องโกหกตั้งแต่ต้น.",
			"ลิน วิศวกรผู้ถูกลืม เธอจะรู้ความจริงทั้งหมดไหม?",
			"หรือเธอจะเปิดเผยทุกสิ่งโดยไม่ตั้งใจ?"
		],
		"hindi": [
			"शहर की समृद्धि के नीचे, अतीत की परछाइयाँ हिलती हैं।",
			"जो डिजिटल दुनिया इतनी सही लगती थी, वह शुरू से ही झूठ थी।",
			"भूली हुई इंजीनियर 'लिन'। क्या वह सारी सच्चाई जानती है?",
			"या वह अनजाने में सब कुछ उजागर कर देगी?"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "도시의 오래된 기록 보관소. 먼지 쌓인 데이터 서버들이 늘어서 있다.",
						"english": "The city's old archives. Dusty data servers line the room.",
						"japanese": "都市の古い記録保管庫。埃をかぶったデータサーバーが並んでいる。",
						"chinese": "城市的老旧档案室。布满灰尘的数据服务器排列着。",
						"french": "Les vieilles archives de la ville. Des serveurs de données poussiéreux s'alignent.",
						"spanish": "Los viejos archivos de la ciudad. Servidores de datos polvorientos se alinean.",
						"vietnamese": "Kho lưu trữ cũ của thành phố. Những máy chủ dữ liệu phủ đầy bụi xếp thành hàng.",
						"thai": "ห้องเก็บเอกสารเก่าแก่ของเมือง เซิร์ฟเวอร์ข้อมูลที่เต็มไปด้วยฝุ่นเรียงรายอยู่.",
						"hindi": "शहर का पुराना अभिलेखागार। धूल भरे डेटा सर्वर कatar में लगे हैं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "린? 여기서 일하셨다고 들었어요.",
						"english": "Lyn? I heard you worked here.",
						"japanese": "リンさん？ここで働いていらっしゃったと聞きました。",
						"chinese": "琳？我听说你在这里工作过。",
						"french": "Lyn ? J'ai entendu dire que vous aviez travaillé ici.",
						"spanish": "¿Lyn? Oí que trabajaste aquí.",
						"vietnamese": "Lyn? Tôi nghe nói cô đã từng làm việc ở đây.",
						"thai": "ลิน? ได้ยินมาว่าคุณเคยทำงานที่นี่.",
						"hindi": "लिन? मैंने सुना है कि आपने यहाँ काम किया था।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"spot": [
						3,
						2
					],
					"speaker": "lin",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "흐음… 맞아요. 옛날에 잠깐.",
						"english": "Hmm... That's right. A long time ago, for a bit.",
						"japanese": "ふむ…そうですね。昔、少しだけ。",
						"chinese": "嗯……没错。以前，只是短暂地。",
						"french": "Hmm... C'est exact. Il y a longtemps, juste un peu.",
						"spanish": "Mmm... Así es. Hace mucho tiempo, por un tiempo.",
						"vietnamese": "Ừm... đúng vậy. Hồi xưa, chỉ một thời gian ngắn thôi.",
						"thai": "อืม... ใช่ค่ะ สมัยก่อน แค่ชั่วครู่.",
						"hindi": "ह्म्म्म... हाँ, सही है। बहुत पहले, थोड़ी देर के लिए।"
					},
					"speaker": "lin"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "도시 초기 네트워크에 대해 여쭤볼 게 있어서요.",
						"english": "I have some questions about the city's early network.",
						"japanese": "都市の初期ネットワークについてお伺いしたいことがあって。",
						"chinese": "我有些关于城市早期网络的问题想请教。",
						"french": "J'ai quelques questions sur le réseau initial de la ville.",
						"spanish": "Tengo algunas preguntas sobre la red inicial de la ciudad.",
						"vietnamese": "Tôi có vài câu hỏi về mạng lưới ban đầu của thành phố.",
						"thai": "ฉันมีคำถามเกี่ยวกับเครือข่ายยุคแรกของเมือง.",
						"hindi": "मुझे शहर के शुरुआती नेटवर्क के बारे में कुछ पूछना है।"
					}
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "아, 그때 그거요? 웃기지도 않았지. 어떤 미친 갱스터들이 자기들 감시망 만들려고 시작한 거였거든.",
						"english": "Oh, that? It was a joke. Some crazy gangsters started it to build their surveillance network.",
						"japanese": "ああ、あれね？笑えない話だったよ。ある狂ったギャングたちが、自分たちの監視網を作るために始めたんだ。",
						"chinese": "哦，那个啊？根本不好笑。那帮疯子黑帮为了建立自己的监控网才开始的。",
						"french": "Oh, ça ? C'était une blague. Des gangsters fous ont commencé ça pour construire leur réseau de surveillance.",
						"spanish": "Ah, ¿eso? Fue una broma. Unos gánsteres locos lo empezaron para construir su red de vigilancia.",
						"vietnamese": "À, cái đó hả? Buồn cười chết đi được. Mấy tên gangster điên rồ bắt đầu nó để xây dựng mạng lưới giám sát của bọn chúng.",
						"thai": "อ้อ, เรื่องนั้นเหรอ? มันไม่ตลกเลยนะ พวกแก๊งสเตอร์บ้าๆ เริ่มทำมันเพื่อสร้างเครือข่ายเฝ้าระวังของพวกมันเอง.",
						"hindi": "ओहो, वो? वो तो मज़ाक था। कुछ पागल गैंगस्टरों ने इसे अपनी निगरानी प्रणाली बनाने के लिए शुरू किया था।"
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"speaker": "lin",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "갱스터 감시망이요? 그게 어떻게 도시 시스템이랑 연결되죠?",
						"english": "A gangster surveillance network? How does that connect to the city's system?",
						"japanese": "ギャングの監視網？それがどうやって都市システムと繋がるんですか？",
						"chinese": "黑帮的监控网？那怎么会和城市系统连接起来呢？",
						"french": "Un réseau de surveillance de gangsters ? Comment cela se connecte-t-il au système de la ville ?",
						"spanish": "¿Una red de vigilancia de gánsteres? ¿Cómo se conecta eso con el sistema de la ciudad?",
						"vietnamese": "Mạng lưới giám sát của gangster ư? Cái đó làm sao kết nối với hệ thống của thành phố được?",
						"thai": "เครือข่ายเฝ้าระวังของแก๊งสเตอร์เหรอ? มันเชื่อมต่อกับระบบเมืองได้อย่างไร?",
						"hindi": "गैंगस्टरों की निगरानी प्रणाली? वह शहर के सिस्टम से कैसे जुड़ती है?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "뭐, 돈이 되면 다 하는 거지. 시스템이 워낙 탄탄해서 그대로 썼다더라고.",
						"english": "Well, anything for money, right? Heard they used it as is because the system was so robust.",
						"japanese": "まあ、金になるなら何でもやるさ。システムが元々頑丈だったから、そのまま使ったらしいよ。",
						"chinese": "哎，有钱能使鬼推磨嘛。据说那系统太完善了，所以直接就拿来用了。",
						"french": "Bof, on fait tout pour l'argent, non ? On m'a dit qu'ils l'avaient utilisé tel quel parce que le système était si robuste.",
						"spanish": "Bueno, por dinero se hace cualquier cosa, ¿no? Dicen que lo usaron tal cual porque el sistema era muy sólido.",
						"vietnamese": "Chà, có tiền thì làm gì cũng được thôi. Nghe nói hệ thống chắc chắn quá nên họ cứ thế mà dùng.",
						"thai": "ก็แหงล่ะ ถ้าได้เงินก็ทำได้ทุกอย่าง. ได้ยินว่าระบบมันแน่นมาก เลยเอามาใช้เลย.",
						"hindi": "खैर, पैसे के लिए तो सब कुछ करते हैं। सुना है सिस्टम इतना मजबूत था कि उन्होंने इसे वैसे ही इस्तेमाल किया।"
					},
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "이름도 거창했어요. 스펙트라 노드? 뭐 그런 거였을걸.",
						"english": "The name was pretty grand too. \"Spectra Node\"? Something like that, I think.",
						"japanese": "名前も大層なもんだったよ。「スペクトラ・ノード」とか？そんな感じだったはず。",
						"chinese": "名字也挺夸张的。斯佩克特拉节点？好像是这么个名字。",
						"french": "Le nom était plutôt grandiose aussi. \"Spectra Node\" ? Quelque chose comme ça, je crois.",
						"spanish": "El nombre también era grandioso. ¿\"Spectra Node\"? Algo así, me parece.",
						"vietnamese": "Cái tên cũng hoành tráng lắm. \"Spectra Node\" gì đó? Chắc là vậy.",
						"thai": "ชื่อก็หรูหรานะ \"สเปกตรา โหนด\" อะไรทำนองนั้นมั้ง.",
						"hindi": "नाम भी बड़ा भव्य था। \"स्पेक्ट्रा नोड\"? कुछ ऐसा ही था, मुझे लगता है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "lin"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "스펙트라 노드?",
						"english": "Spectra Node?",
						"japanese": "スペクトラ・ノード？",
						"chinese": "斯佩克特拉节点？",
						"french": "Spectra Node ?",
						"spanish": "¿Spectra Node?",
						"vietnamese": "Spectra Node?",
						"thai": "สเปกตรา โหนด?",
						"hindi": "स्पेक्ट्रा नोड?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "응. 그림자처럼 모든 걸 감시한다고. 그때는 다들 미쳤었지.",
						"english": "Yeah. They said it monitored everything like a shadow. Everyone was crazy back then.",
						"japanese": "うん。影のように全てを監視するって。当時はみんな夢中だったよ。",
						"chinese": "对。说是像影子一样监视一切。那时大家可都疯了。",
						"french": "Oui. Ils disaient que ça surveillait tout comme une ombre. Tout le monde était fou à l'époque.",
						"spanish": "Sí. Decían que vigilaba todo como una sombra. En aquel entonces, todos estaban locos.",
						"vietnamese": "Ừ. Họ bảo nó giám sát mọi thứ như một cái bóng. Hồi đó ai cũng điên cuồng cả.",
						"thai": "อืม ใช่ มันคอยเฝ้าระวังทุกอย่างเหมือนเงา ตอนนั้นทุกคนก็บ้ากันไปหมดแล้ว.",
						"hindi": "हाँ। वे कहते थे कि यह हर चीज़ पर एक परछाई की तरह नज़र रखता है। उस समय सब पागल थे।"
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "lin",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그 시스템, 지금 AI 비서랑도 관련이 있나요?",
						"english": "Is that system related to the current AI assistant?",
						"japanese": "そのシステムって、今のAIアシスタントとも関係があるんですか？",
						"chinese": "那个系统，和现在的AI助手有关系吗？",
						"french": "Ce système, est-il lié à l'assistant IA actuel ?",
						"spanish": "Ese sistema, ¿está relacionado con el asistente de IA actual?",
						"vietnamese": "Hệ thống đó, có liên quan gì đến trợ lý AI hiện giờ không?",
						"thai": "ระบบนั้น เกี่ยวข้องกับ AI ผู้ช่วยในปัจจุบันด้วยเหรอครับ/คะ?",
						"hindi": "क्या वह सिस्टम अभी के AI असिस्टेंट से जुड़ा है?"
					}
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "흐음… 글쎄요. 예전 AI는 좀 바보 같았어요.",
						"english": "Hmm... I don't know. The old AI was a bit foolish.",
						"japanese": "うーん…どうでしょうね。昔のAIはちょっとおバカでしたよ。",
						"chinese": "嗯…这个嘛。以前的AI有点傻。",
						"french": "Hmm… Je ne sais pas. L'ancienne IA était un peu stupide.",
						"spanish": "Mmm… No sé. La IA antigua era un poco tonta.",
						"vietnamese": "Ưm... Cái đó thì tôi không chắc. AI cũ hơi ngốc nghếch.",
						"thai": "หืม… ไม่รู้นะ AI สมัยก่อนน่ะออกจะงี่เง่าหน่อย.",
						"hindi": "हम्म... मुझे नहीं पता। पुराना AI थोड़ा बेवकूफ था।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "가끔 엉뚱한 답을 주거나, 똑같은 질문에 다른 말을 하거나.",
						"english": "Sometimes it would give strange answers, or say different things to the same question.",
						"japanese": "時々的外れな答えをしたり、同じ質問に違うことを言ったり。",
						"chinese": "有时会给出奇怪的答案，或者对同一个问题给出不同的回答。",
						"french": "Parfois, il donnait des réponses étranges, ou disait des choses différentes à la même question.",
						"spanish": "A veces daba respuestas extrañas, o decía cosas diferentes a la misma pregunta.",
						"vietnamese": "Thỉnh thoảng nó lại đưa ra câu trả lời ngớ ngẩn, hoặc nói những điều khác nhau cho cùng một câu hỏi.",
						"thai": "บางทีก็ตอบอะไรแปลกๆ หรือไม่ก็พูดไม่เหมือนกันกับคำถามเดิม.",
						"hindi": "कभी-कभी यह अजीब जवाब देता था, या एक ही सवाल पर अलग-अलग बातें कहता था।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "다른 말을 했다고요?",
						"english": "Said different things?",
						"japanese": "違うことを言ったんですか？",
						"chinese": "说了不一样的话？",
						"french": "Dit des choses différentes ?",
						"spanish": "¿Dijo cosas diferentes?",
						"vietnamese": "Nói những điều khác nhau á?",
						"thai": "พูดไม่เหมือนกันเหรอครับ/คะ?",
						"hindi": "अलग बातें कही?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "네. 근데 업데이트되면서… 점점 완벽해졌지. 너무 완벽하게.",
						"english": "Yes. But with updates… it became more and more perfect. Too perfect.",
						"japanese": "ええ。でもアップデートされて…どんどん完璧になっていったんです。あまりにも完璧に。",
						"chinese": "是的。但是随着更新…它变得越来越完美。太完美了。",
						"french": "Oui. Mais avec les mises à jour… il est devenu de plus en plus parfait. Trop parfait.",
						"spanish": "Sí. Pero con las actualizaciones… se volvió cada vez más perfecto. Demasiado perfecto.",
						"vietnamese": "Vâng. Nhưng cùng với các bản cập nhật… nó ngày càng trở nên hoàn hảo. Hoàn hảo đến mức đáng sợ.",
						"thai": "ครับ/ค่ะ แต่พออัปเดตไปเรื่อยๆ… มันก็สมบูรณ์แบบขึ้นเรื่อยๆ สมบูรณ์แบบเกินไป.",
						"hindi": "हाँ। लेकिन अपडेट के साथ… यह धीरे-धीरे और भी परफेक्ट होता गया। बहुत ज्यादा परफेक्ट।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…(AI가 주는 정보가… 너무 깔끔하다고 느꼈는데.)",
						"english": "…(I felt the information the AI provided… was too clean.)",
						"japanese": "…（AIがくれる情報が…あまりにも綺麗すぎると感じていたが。）",
						"chinese": "…（我总觉得AI提供的信息…太过于完美无瑕了。）",
						"french": "…(J'ai trouvé que les informations fournies par l'IA… étaient trop parfaites.)",
						"spanish": "…(Sentí que la información que daba la IA… era demasiado pulcra.)",
						"vietnamese": "…(Tôi thấy thông tin mà AI cung cấp… quá sạch sẽ.)",
						"thai": "…(รู้สึกว่าข้อมูลที่ AI ให้น่ะ… มันสะอาดเกินไปนะ.)",
						"hindi": "…(मुझे लगा कि AI द्वारा दी गई जानकारी… बहुत साफ-सुथरी थी।)"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"speaker": "lin",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "가끔 생각해요. 그 시스템이 정말 사라진 걸까?",
						"english": "Sometimes I wonder. Did that system truly disappear?",
						"japanese": "「時々考えるんです。あのシステムは本当に消えたのでしょうか？」",
						"chinese": "我有时会想。那个系统真的消失了吗？",
						"french": "Parfois, je me demande. Ce système a-t-il vraiment disparu ?",
						"spanish": "A veces me pregunto. ¿Realmente desapareció ese sistema?",
						"vietnamese": "Đôi khi tôi tự hỏi. Hệ thống đó có thực sự biến mất không?",
						"thai": "บางครั้งฉันก็คิด สงสัยว่าระบบนั้นหายไปแล้วจริงๆ เหรอ?",
						"hindi": "कभी-कभी मैं सोचता हूँ। क्या वह सिस्टम सचमुच गायब हो गया?"
					}
				},
				{
					"content": {
						"korean": "사라지지 않았다면요?",
						"english": "What if it didn't?",
						"japanese": "「もし、消えていないとしたら？」",
						"chinese": "如果它没有消失呢？",
						"french": "Et si ce n'était pas le cas ?",
						"spanish": "¿Y si no desapareció?",
						"vietnamese": "Nếu nó không biến mất thì sao?",
						"thai": "ถ้ามันยังอยู่ล่ะ?",
						"hindi": "अगर वह गायब नहीं हुआ तो?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "그럼… 이 도시는 시작부터 거짓말 위에 세워진 거죠.",
						"english": "Then... this city was built on a lie from the very beginning.",
						"japanese": "「じゃあ…この都市は最初から嘘の上に築かれていたことに…」",
						"chinese": "那么…这座城市从一开始就建立在谎言之上。",
						"french": "Alors... cette ville a été bâtie sur un mensonge depuis le début.",
						"spanish": "Entonces... esta ciudad fue construida sobre una mentira desde el principio.",
						"vietnamese": "Vậy thì... thành phố này đã được xây dựng trên một lời nói dối ngay từ đầu.",
						"thai": "ถ้าอย่างนั้น... เมืองนี้ก็ถูกสร้างขึ้นบนคำโกหกตั้งแต่แรกเริ่มสินะ",
						"hindi": "तो... यह शहर शुरुआत से ही एक झूठ पर बना है।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "모든 디지털이, 모든 정보가… 다 그들의 눈이었던 거야.",
						"english": "All digital, all information... it was all their eyes.",
						"japanese": "「全てのデジタルが、全ての情報が…全て彼らの目だったんだ。」",
						"chinese": "所有的数字，所有的信息……都曾是他们的眼睛。",
						"french": "Tout le numérique, toutes les informations... tout était leurs yeux.",
						"spanish": "Todo lo digital, toda la información... eran sus ojos.",
						"vietnamese": "Mọi thứ kỹ thuật số, mọi thông tin... đều là mắt của họ.",
						"thai": "ทุกดิจิทัล, ทุกข้อมูล... มันคือดวงตาของพวกมัน",
						"hindi": "हर डिजिटल चीज़, हर जानकारी... वो सब उनकी आँखें थीं।"
					},
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "…(온몸에 소름이 돋았다. 나는 어디에 서 있는 거지?)",
						"english": "...(Goosebumps covered my body. Where am I standing?)",
						"japanese": "「…（全身に鳥肌が立った。私はどこに立っているんだ？）」",
						"chinese": "……（我全身起了鸡皮疙瘩。我究竟站在哪里？）",
						"french": "...(Des frissons me parcourent. Où suis-je ?)",
						"spanish": "...(Se me puso la piel de gallina. ¿Dónde estoy parado?)",
						"vietnamese": "...(Nổi da gà khắp người. Mình đang đứng ở đâu vậy?)",
						"thai": "...(ขนลุกไปทั้งตัว ฉันยืนอยู่ตรงไหนกันแน่?)",
						"hindi": "...(मेरे पूरे शरीर पर रोंगटे खड़े हो गए। मैं कहाँ खड़ा हूँ?)"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "흥… 겨우 이 정도라니. 너희는 아직… 아무것도 몰라.",
						"english": "Hmph... Is this all you've got? You still... know nothing.",
						"japanese": "ふん…これっぽっちか。お前たちはまだ…何も知らない。",
						"chinese": "哼……就这点本事吗？你们还……一无所知。",
						"french": "Hmph... C'est tout ce que vous avez ? Vous ne... savez encore rien.",
						"spanish": "Hmph... ¿Esto es todo lo que tenéis? Aún no... sabéis nada.",
						"vietnamese": "Hừm... Chỉ có thế thôi sao? Các ngươi vẫn... chưa biết gì cả.",
						"thai": "หึ... แค่นี้เองเหรอ? พวกเจ้ายัง... ไม่รู้อะไรเลย.",
						"hindi": "ह्म्फ... बस इतना ही? तुम लोग अभी भी... कुछ नहीं जानते।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "진짜 감시자는… 네 옆에 있다.",
						"english": "The true Watcher... is right beside you.",
						"japanese": "本当の監視者は…お前の隣にいる。",
						"chinese": "真正的监视者……就在你身边。",
						"french": "Le véritable Observateur... est juste à côté de toi.",
						"spanish": "El verdadero Vigilante... está a tu lado.",
						"vietnamese": "Kẻ giám sát thực sự... đang ở ngay bên cạnh ngươi.",
						"thai": "ผู้เฝ้ามองที่แท้จริง... อยู่ข้างๆ เจ้า.",
						"hindi": "असली रखवाला... तुम्हारे बगल में है।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "무슨 소리야?",
						"english": "What are you talking about?",
						"japanese": "何を言ってるんだ？",
						"chinese": "你在说什么？",
						"french": "Qu'est-ce que tu racontes ?",
						"spanish": "¿De qué hablas?",
						"vietnamese": "Ngươi đang nói gì vậy?",
						"thai": "เจ้ากำลังพูดอะไร?",
						"hindi": "तुम क्या कह रहे हो?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "정체 모를 자는 소멸했다. 그러나 그의 마지막 말은 새로운 혼란을 남겼다.",
						"english": "The unknown entity has vanished. But its last words left behind new confusion.",
						"japanese": "正体不明の者は消滅した。しかし、彼の最期の言葉は新たな混乱を残した。",
						"chinese": "身份不明者已消灭。然而，他的遗言却留下了新的混乱。",
						"french": "L'entité inconnue a disparu. Mais ses derniers mots ont semé une nouvelle confusion.",
						"spanish": "El ser desconocido ha desaparecido. Pero sus últimas palabras dejaron una nueva confusión.",
						"vietnamese": "Kẻ không rõ danh tính đã biến mất. Nhưng những lời cuối cùng của hắn đã để lại một sự hỗn loạn mới.",
						"thai": "สิ่งมีชีวิตที่ไม่รู้จักได้หายไปแล้ว แต่คำพูดสุดท้ายของมันได้ทิ้งความสับสนใหม่ไว้.",
						"hindi": "अज्ञात सत्ता लुप्त हो गई। लेकिन उसके अंतिम शब्द नई उलझन छोड़ गए।"
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "깨져가는 현실. 다음 단서는 오직 혼란 속에 있을 뿐.",
						"english": "Reality shatters. The next clue lies only within the chaos.",
						"japanese": "崩れゆく現実。次の手がかりは、ただ混乱の中にあるのみ。",
						"chinese": "现实正在破碎。下一个线索，只存在于混乱之中。",
						"french": "La réalité se brise. Le prochain indice ne se trouve que dans le chaos.",
						"spanish": "La realidad se desmorona. La próxima pista solo se encuentra en el caos.",
						"vietnamese": "Thực tại đang vỡ vụn. Manh mối tiếp theo chỉ nằm trong sự hỗn loạn.",
						"thai": "ความจริงกำลังแตกสลาย เบาะแสต่อไปมีเพียงอยู่ในความสับสนเท่านั้น.",
						"hindi": "टूटती वास्तविकता। अगला सुराग केवल अराजकता में ही मिलेगा।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "공간을 가득 채운 거대한 그림자가 일렁였다. 정체 모를 자의 압도적인 존재감.",
						"english": "A colossal shadow filled the space, rippling. The overwhelming presence of an unknown entity.",
						"japanese": "「空間を満たす巨大な影が揺らめいた。正体不明の者の圧倒的な存在感。」",
						"chinese": "巨大的阴影充满空间，波澜起伏。一个不知名的存在感压倒一切。",
						"french": "Une ombre colossale emplissait l'espace, ondulant. La présence écrasante d'une entité inconnue.",
						"spanish": "Una sombra colosal llenó el espacio, ondeando. La abrumadora presencia de un ser desconocido.",
						"vietnamese": "Một cái bóng khổng lồ tràn ngập không gian, rung động. Sự hiện diện áp đảo của một thực thể không rõ.",
						"thai": "เงาขนาดมหึมาเต็มพื้นที่ มันพลิ้วไหว สัมผัสถึงการมีอยู่ของบางสิ่งที่ไม่รู้จักที่ทรงพลัง",
						"hindi": "एक विशाल छाया ने अंतरिक्ष को भर दिया, लहराते हुए। एक अज्ञात सत्ता की जबरदस्त उपस्थिति।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "네가 진실을 찾는 자인가. 그 탐욕이 널 이곳까지 이끌었군.",
						"english": "Are you the one who seeks the truth? Your greed has led you here.",
						"japanese": "「お前が真実を求める者か。その貪欲がお前をここまで導いたな。」",
						"chinese": "你就是寻找真相之人吗？你的贪婪将你引到了这里。",
						"french": "Es-tu celui qui cherche la vérité ? Ta cupidité t'a mené ici.",
						"spanish": "¿Eres tú quien busca la verdad? Tu codicia te ha traído hasta aquí.",
						"vietnamese": "Ngươi là kẻ tìm kiếm sự thật sao? Lòng tham của ngươi đã dẫn ngươi đến đây.",
						"thai": "เจ้าคือผู้แสวงหาความจริงงั้นหรือ? ความโลภของเจ้าได้นำพาเจ้ามาถึงที่นี่",
						"hindi": "क्या तुम वही हो जो सच की तलाश में है? तुम्हारे लालच ने तुम्हें यहाँ तक खींच लाया है।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "너 같은 괴물들이 이 도시를 만들었어.",
						"english": "Monsters like you created this city.",
						"japanese": "「お前のような怪物たちがこの都市を創ったんだ。」",
						"chinese": "像你这样的怪物创造了这座城市。",
						"french": "Des monstres comme toi ont créé cette ville.",
						"spanish": "Monstruos como tú crearon esta ciudad.",
						"vietnamese": "Những con quái vật như ngươi đã tạo ra thành phố này.",
						"thai": "พวกสัตว์ประหลาดอย่างแกน่ะ สร้างเมืองนี้ขึ้นมา",
						"hindi": "तुम जैसे राक्षसों ने इस शहर को बनाया।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "괴물? 질서와 통제는 필수다. 혼돈보다는 나은 선택이지.",
						"english": "Monsters? Order and control are essential. A better choice than chaos.",
						"japanese": "「怪物？秩序と統制は必須だ。混沌よりは良い選択だろう。」",
						"chinese": "怪物？秩序和控制是必需的。总比混乱要好。",
						"french": "Des monstres ? L'ordre et le contrôle sont essentiels. Un meilleur choix que le chaos.",
						"spanish": "¿Monstruos? El orden y el control son esenciales. Una mejor opción que el caos.",
						"vietnamese": "Quái vật? Trật tự và kiểm soát là cần thiết. Một lựa chọn tốt hơn sự hỗn loạn.",
						"thai": "สัตว์ประหลาดรึ? ระเบียบและการควบคุมเป็นสิ่งจำเป็น ทางเลือกที่ดีกว่าความโกลาหลนะ",
						"hindi": "राक्षस? व्यवस्था और नियंत्रण आवश्यक हैं। अराजकता से बेहतर विकल्प है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "그 질서가 누군가의 감시라면?",
						"english": "What if that order is someone's surveillance?",
						"japanese": "「もしその秩序が誰かの監視だとしたら？」",
						"chinese": "如果那种秩序是某个人的监视呢？",
						"french": "Et si cet ordre était la surveillance de quelqu'un ?",
						"spanish": "¿Y si ese orden es la vigilancia de alguien?",
						"vietnamese": "Nếu trật tự đó là sự giám sát của ai đó thì sao?",
						"thai": "ถ้าความสงบนั้นคือการเฝ้าระวังของใครบางคนล่ะ?",
						"hindi": "अगर वह व्यवस्था किसी की निगरानी हो तो?"
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 힘 앞에 무력하게 쓰러졌다. 도시의 그림자가 점점 짙어진다.",
						"english": "Powerlessly fallen before a colossal force. The city's shadow deepens.",
						"japanese": "巨大な力の前に無力に倒れた。街の影が次第に濃くなる。",
						"chinese": "在巨大的力量面前无力地倒下。城市的阴影渐渐变深。",
						"french": "Tomber impuissant face à une force colossale. L'ombre de la ville s'épaissit.",
						"spanish": "Caído sin poder ante una fuerza colosal. La sombra de la ciudad se vuelve cada vez más oscura.",
						"vietnamese": "Vô lực ngã xuống trước một sức mạnh khổng lồ. Bóng đêm của thành phố ngày càng dày đặc.",
						"thai": "ล้มลงอย่างไร้เรี่ยวแรงต่อหน้าพลังอันยิ่งใหญ่ เงาของเมืองเริ่มมืดมิดลงเรื่อยๆ.",
						"hindi": "विशाल शक्ति के सामने बेबसी से गिर पड़ा। शहर की छाया गहरी होती जा रही है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "어리석은 자. 껍데기만 깨봤자… 알맹이는 변치 않는다.",
						"english": "Fool. Breaking only the shell... won't change the core.",
						"japanese": "愚か者め。殻を破ったところで…中身は変わらない。",
						"chinese": "愚蠢的人。即使打破了外壳……内核也不会改变。",
						"french": "Idiot. Briser seulement la coquille... ne changera pas le cœur.",
						"spanish": "Tonto. Romper solo la cáscara... no cambiará el núcleo.",
						"vietnamese": "Kẻ ngốc. Phá vỡ vỏ bọc thôi... ruột bên trong vẫn không đổi.",
						"thai": "เจ้าโง่. แค่ทุบเปลือก... แก่นแท้ก็ไม่เปลี่ยน.",
						"hindi": "मूर्ख। केवल खोल तोड़ने से... मूल नहीं बदलता।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…다시 돌아온다. 반드시.",
						"english": "...I will return. I must.",
						"japanese": "…また戻ってくる。必ず。",
						"chinese": "……我还会回来。一定会。",
						"french": "...Je reviendrai. Absolument.",
						"spanish": "...Volveré. Sin falta.",
						"vietnamese": "...Ta sẽ trở lại. Nhất định.",
						"thai": "...จะกลับมาอีกครั้ง อย่างแน่นอน.",
						"hindi": "...मैं वापस आऊंगा। निश्चित रूप से।"
					}
				}
			]
		}
	]
} as const;
