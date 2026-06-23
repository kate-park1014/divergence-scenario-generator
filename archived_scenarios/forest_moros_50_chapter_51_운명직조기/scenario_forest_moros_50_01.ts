export const scenario_forest_moros_50_01 = {
	"scenario_id": "forest_moros_50_01",
	"order": 1,
	"act": "intro",
	"theme": "forest",
	"actors": {
		"briar": {
			"id": "mon_21f92820-190e-4d08-a75c-5d2c0b6d0a6b",
			"name": {
				"korean": "브라이어",
				"english": "Briar",
				"japanese": "ブライア",
				"chinese": "布莱尔",
				"french": "Briar",
				"spanish": "Briar",
				"vietnamese": "Briar",
				"thai": "ไบรอา",
				"hindi": "ब्रायर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/41fb431e-57e0-45e0-dde6-1a1f02c01200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/dd89dff7-88ed-4444-28d8-5aaa85bd4e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "속삭이는 숲. 발걸음마다 오래된 이끼가 진실을 감췄다.",
						"english": "Whispering forest. Ancient moss concealed the truth with every step.",
						"japanese": "ささやく森。足を踏み出すたびに、古い苔が真実を隠した。",
						"chinese": "低语森林。每一步，古老的苔藓都隐藏着真相。",
						"french": "Forêt chuchotante. La mousse ancienne dissimulait la vérité à chaque pas.",
						"spanish": "Bosque susurrante. El musgo antiguo ocultaba la verdad con cada paso.",
						"vietnamese": "Rừng thì thầm. Rêu phong cổ xưa che giấu sự thật theo mỗi bước chân.",
						"thai": "ป่ากระซิบ ตะไคร่น้ำเก่าแก่ปกปิดความจริงทุกย่างก้าว",
						"hindi": "फुसफुसाता जंगल। हर कदम पर पुरानी काई ने सच छिपा रखा था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "여기가 소문 속의 숲…?",
						"english": "Is this the forest from the rumors...?",
						"japanese": "ここが噂の森…？",
						"chinese": "这里就是传闻中的森林吗……？",
						"french": "C'est la forêt des rumeurs...?",
						"spanish": "¿Es este el bosque de los rumores...?",
						"vietnamese": "Đây là khu rừng trong tin đồn...?",
						"thai": "นี่คือป่าในข่าวลือใช่ไหม...?",
						"hindi": "क्या यह अफवाहों वाला जंगल है...?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "briar",
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "어휴, 또 새로운 손님인가. 여기 모로스 이야기는 다 들어봤겠지?",
						"english": "Ugh, another new guest? You've heard all about Moros here, right?",
						"japanese": "やれやれ、また新しい客か。ここモロスの話は全部聞いたんだろう？",
						"chinese": "哎呀，又是新客人？你肯定已经听过关于莫罗斯的所有故事了吧？",
						"french": "Ugh, encore un nouveau visiteur ? Tu as déjà tout entendu sur Moros ici, n'est-ce pas ?",
						"spanish": "Uf, ¿otro invitado nuevo? Ya habrás oído todo sobre Moros aquí, ¿verdad?",
						"vietnamese": "Ôi, lại một vị khách mới à. Chắc hẳn đã nghe hết chuyện về Moros rồi chứ?",
						"thai": "เห้อ แขกใหม่มาอีกแล้วรึ คงได้ยินเรื่อง Moros มาหมดแล้วสินะ?",
						"hindi": "उफ़, एक और नया मेहमान? तुमने यहाँ मोरोस के बारे में सब सुना होगा, है ना?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "briar"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "모로스… 길을 안내한다고도, 환영을 보인다고도 하던데.",
						"english": "Moros... they say it guides you, or shows illusions.",
						"japanese": "モロス…道を案内するとも、幻影を見せるとも言われているが。",
						"chinese": "莫罗斯……据说它能指引道路，也能制造幻象。",
						"french": "Moros... on dit qu'il guide, ou qu'il montre des illusions.",
						"spanish": "Moros... dicen que te guía, o que muestra ilusiones.",
						"vietnamese": "Moros... người ta nói nó dẫn đường, hoặc cho thấy ảo ảnh.",
						"thai": "Moros... ว่ากันว่ามันนำทางหรือแสดงภาพลวงตา",
						"hindi": "मोरोस... कहते हैं कि यह रास्ता दिखाता है, या भ्रम दिखाता है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "다들 자기 듣고 싶은 대로 믿는 법이지. 진실은 없어.",
						"english": "Everyone believes what they want to hear. There's no truth.",
						"japanese": "みんな聞きたいことを信じるものさ。真実なんてない。",
						"chinese": "每个人都只相信自己想听的。没有真相。",
						"french": "Chacun croit ce qu'il veut entendre. Il n'y a pas de vérité.",
						"spanish": "Cada uno cree lo que quiere oír. No hay verdad.",
						"vietnamese": "Ai cũng tin vào điều mình muốn nghe. Không có sự thật nào cả.",
						"thai": "ทุกคนเชื่อในสิ่งที่อยากได้ยิน ไม่มีหรอกความจริง",
						"hindi": "हर कोई वही मानता है जो वे सुनना चाहते हैं। कोई सच नहीं है।"
					},
					"speaker": "briar"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "진실이 없다고?",
						"english": "No truth?",
						"japanese": "真実はないって？",
						"chinese": "没有真相？",
						"french": "Pas de vérité ?",
						"spanish": "¿No hay verdad?",
						"vietnamese": "Không có sự thật nào à?",
						"thai": "ไม่มีจริงเหรอ?",
						"hindi": "कोई सच नहीं?"
					},
					"speaker": "character_1"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "briar",
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "길을 잃으면 모로스가 나타나 길을 인도해준다는 소문… 달콤하지?",
						"english": "The rumor that Moros appears and guides the lost... Sweet, isn't it?",
						"japanese": "道に迷えばモロスが現れて道を案内してくれるという噂…甘い話だろ？",
						"chinese": "迷路时莫罗斯会出现并指引方向的传闻……很诱人吧？",
						"french": "La rumeur selon laquelle Moros apparaît et guide les égarés... C'est doux, non ?",
						"spanish": "El rumor de que Moros aparece y guía a los perdidos... Dulce, ¿verdad?",
						"vietnamese": "Tin đồn Moros xuất hiện và dẫn lối khi lạc đường... Ngọt ngào nhỉ?",
						"thai": "ข่าวลือที่ว่า Moros จะปรากฏตัวและนำทางผู้หลงทาง... หอมหวานใช่ไหมล่ะ?",
						"hindi": "अफवाह कि मोरोस प्रकट होता है और खोए हुए लोगों को राह दिखाता है... मीठा है, है ना?"
					},
					"type": "speech",
					"speaker": "briar"
				},
				{
					"speaker": "character_2",
					"emotion": "base",
					"content": {
						"korean": "하지만 누군가는 숲의 환영에 홀려 사라졌다고도 했어.",
						"english": "But some say they were lured by the forest's illusions and vanished.",
						"japanese": "しかし、森の幻影に惑わされて消えた者もいるという。",
						"chinese": "但也有人说，他们被森林的幻象所迷惑，消失了。",
						"french": "Mais certains disent qu'ils ont été attirés par les illusions de la forêt et ont disparu.",
						"spanish": "Pero algunos dicen que fueron seducidos por las ilusiones del bosque y desaparecieron.",
						"vietnamese": "Nhưng có người lại nói rằng họ bị ảo ảnh của rừng mê hoặc và biến mất.",
						"thai": "แต่บางคนก็บอกว่าพวกเขาถูกภาพลวงตาของป่าล่อลวงจนหายไป",
						"hindi": "लेकिन कुछ कहते हैं कि वे जंगल के भ्रम से बहक गए और गायब हो गए।"
					},
					"type": "speech"
				},
				{
					"speaker": "briar",
					"emotion": "base",
					"content": {
						"korean": "그것도 다 거짓은 아니야. 숲은 언제나 변덕스러우니까.",
						"english": "That's not entirely false. The forest is always whimsical.",
						"japanese": "それもすべて嘘ではない。森は常に気まぐれだから。",
						"chinese": "那也并非全是谎言。森林总是变幻莫测。",
						"french": "Ce n'est pas entièrement faux. La forêt est toujours capricieuse.",
						"spanish": "Eso no es del todo falso. El bosque es siempre caprichoso.",
						"vietnamese": "Điều đó cũng không hoàn toàn sai. Rừng luôn thất thường mà.",
						"thai": "นั่นก็ไม่ใช่เรื่องโกหกทั้งหมด ป่ามันเอาแต่ใจตัวเองเสมอแหละ",
						"hindi": "वह भी पूरी तरह से झूठ नहीं है। जंगल हमेशा मनमौजी होता है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "모든 소문이 진실이자 거짓이란 말인가…",
						"english": "So, all rumors are both true and false…",
						"japanese": "すべての噂が真実であり、嘘でもあるとでも言うのか…",
						"chinese": "所以，所有的传闻都是真假参半吗……",
						"french": "Alors, toutes les rumeurs sont à la fois vraies et fausses…",
						"spanish": "Así que, ¿todos los rumores son a la vez verdad y mentira…?",
						"vietnamese": "Vậy là, mọi lời đồn đều vừa là thật, vừa là giả sao…",
						"thai": "หรือว่าข่าวลือทั้งหมดเป็นทั้งเรื่องจริงและเรื่องโกหกกันนะ…",
						"hindi": "तो क्या सभी अफवाहें सच और झूठ दोनों हैं…"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "briar",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "어쩌면 소문 자체가 덫일지도 모르지.",
						"english": "Perhaps the rumors themselves are a trap.",
						"japanese": "もしかしたら、噂そのものが罠なのかもしれない。",
						"chinese": "或许，传闻本身就是陷阱。",
						"french": "Peut-être que les rumeurs elles-mêmes sont un piège.",
						"spanish": "Quizás los rumores mismos sean una trampa.",
						"vietnamese": "Biết đâu chính những lời đồn là một cái bẫy.",
						"thai": "บางทีข่าวลือนั่นแหละคือกับดัก",
						"hindi": "हो सकता है कि अफवाहें खुद एक जाल हों।"
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "briar"
				},
				{
					"speaker": "briar",
					"emotion": "happy",
					"content": {
						"korean": "어떤 여행자는 숲의 오팔빛 실타래를 따라가 구원을 얻었대.",
						"english": "Some travelers say they followed the forest's opalescent threads and found salvation.",
						"japanese": "ある旅人は森のオパール色の糸玉を辿って救済を得たという。",
						"chinese": "有位旅人说，他沿着森林中欧泊色的线团，获得了救赎。",
						"french": "Certains voyageurs racontent avoir suivi les fils opalescents de la forêt et trouvé le salut.",
						"spanish": "Algunos viajeros dicen que siguieron los hilos opalescentes del bosque y encontraron la salvación.",
						"vietnamese": "Một số lữ khách nói rằng họ đã đi theo sợi chỉ màu opal của rừng và tìm thấy sự cứu rỗi.",
						"thai": "นักเดินทางบางคนบอกว่าพวกเขาตามเส้นด้ายสีโอปอลในป่าไปแล้วได้พบกับความรอด",
						"hindi": "कुछ यात्रियों का कहना है कि उन्होंने जंगल के ओपल जैसे धागों का अनुसरण किया और मोक्ष प्राप्त किया।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "오팔빛 실타래… 아름답다고 들었어.",
						"english": "Opalescent threads… I heard they were beautiful.",
						"japanese": "オパール色の糸玉… 美しいと聞いたわ。",
						"chinese": "欧泊色的线团……听说是很美的。",
						"french": "Des fils opalescents… J'ai entendu dire qu'ils étaient magnifiques.",
						"spanish": "Hilos opalescentes… Oí que eran hermosos.",
						"vietnamese": "Sợi chỉ màu opal… Tôi nghe nói chúng rất đẹp.",
						"thai": "เส้นด้ายสีโอปอล… ได้ยินว่าสวยงามมากเลยนะ",
						"hindi": "ओपल जैसे धागे… मैंने सुना है कि वे सुंदर थे।"
					},
					"type": "speech",
					"speaker": "character_3"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "하지만 그 실이 생명력을 얽매는 덫이라는 이야기도 있어.",
						"english": "But there are also tales that those threads are a trap, binding one's life force.",
						"japanese": "しかし、その糸が生命力を縛る罠だという話もある。",
						"chinese": "但也有传闻说，那些线团是束缚生命力的陷阱。",
						"french": "Mais il y a aussi des récits selon lesquels ces fils sont un piège, entravant la force vitale.",
						"spanish": "Pero también hay historias de que esos hilos son una trampa que ata la fuerza vital.",
						"vietnamese": "Nhưng cũng có câu chuyện nói rằng sợi chỉ đó là một cái bẫy, trói buộc sinh lực.",
						"thai": "แต่ก็มีเรื่องเล่าว่าเส้นด้ายพวกนั้นเป็นกับดักที่พันธนาการพลังชีวิตเอาไว้",
						"hindi": "लेकिन यह भी कहानियाँ हैं कि वे धागे एक जाल हैं, जो किसी की जीवन शक्ति को बांधते हैं।"
					},
					"type": "speech",
					"speaker": "briar"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "아름다운 것이 덫이라니…",
						"english": "Something beautiful is a trap…",
						"japanese": "美しいものが罠だなんて…",
						"chinese": "美丽之物竟是陷阱……",
						"french": "Une belle chose serait un piège…",
						"spanish": "Que algo hermoso sea una trampa…",
						"vietnamese": "Thứ đẹp đẽ lại là một cái bẫy sao…",
						"thai": "สิ่งสวยงามกลับกลายเป็นกับดักไปได้…",
						"hindi": "एक सुंदर चीज़ एक जाल है…"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "숲은 너희에게 가장 원하는 것을 보여줄 거야. 그게 구원이든, 파멸이든.",
						"english": "The forest will show you what you desire most. Be it salvation, or ruin.",
						"japanese": "森は君たちが最も望むものを見せるだろう。それが救済であろうと、破滅であろうと。",
						"chinese": "森林会向你们展示你们最渴望的东西。无论是救赎，还是毁灭。",
						"french": "La forêt vous montrera ce que vous désirez le plus. Que ce soit le salut ou la ruine.",
						"spanish": "El bosque os mostrará lo que más deseáis. Ya sea la salvación o la ruina.",
						"vietnamese": "Rừng sẽ cho các ngươi thấy điều các ngươi khao khát nhất. Dù đó là sự cứu rỗi, hay sự diệt vong.",
						"thai": "ป่าจะแสดงสิ่งที่พวกเจ้าปรารถนาที่สุดให้เห็น ไม่ว่าจะเป็นความรอดหรือความพินาศ",
						"hindi": "जंगल तुम्हें वह दिखाएगा जो तुम सबसे ज़्यादा चाहते हो। चाहे वह मोक्ष हो, या विनाश।"
					},
					"speaker": "briar"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "briar",
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "briar",
					"emotion": "base",
					"content": {
						"korean": "이제 돌아갈 길은 보이지 않을걸? 숲은 진실을 숨긴 채 너희를 깊이 끌어들였어.",
						"english": "You won't see the way back now, will you? The forest has drawn you deep, hiding the truth.",
						"japanese": "もう帰り道は見えないだろう？ 森は真実を隠し、君たちを深く引き込んだ。",
						"chinese": "现在你不会看到回头的路了吧？森林隐藏了真相，将你们深深吸引进来。",
						"french": "Vous ne verrez plus le chemin du retour, n'est-ce pas ? La forêt vous a entraînés profondément, cachant la vérité.",
						"spanish": "Ya no veréis el camino de vuelta, ¿verdad? El bosque os ha arrastrado profundamente, ocultando la verdad.",
						"vietnamese": "Giờ đây các ngươi sẽ không thấy đường quay về đâu, phải không? Rừng đã giấu đi sự thật và kéo các ngươi vào sâu bên trong.",
						"thai": "ตอนนี้พวกเจ้าคงไม่เห็นทางกลับแล้วใช่ไหม? ป่าซ่อนความจริงไว้และดึงพวกเจ้าเข้ามาลึกแล้ว",
						"hindi": "अब तुम्हें वापसी का रास्ता नहीं दिखेगा, है ना? जंगल ने तुम्हें गहराई से खींच लिया है, सच्चाई छिपाते हुए।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "우린 멈추지 않아. 진실을 밝혀낼 거야.",
						"english": "We won't stop. We'll uncover the truth.",
						"japanese": "私たちは止まらない。真実を明らかにする。",
						"chinese": "我们不会停止。我们会揭露真相。",
						"french": "Nous n'arrêterons pas. Nous révélerons la vérité.",
						"spanish": "No nos detendremos. Descubriremos la verdad.",
						"vietnamese": "Chúng ta sẽ không dừng lại. Chúng ta sẽ làm sáng tỏ sự thật.",
						"thai": "เราจะไม่หยุด เราจะเปิดเผยความจริง",
						"hindi": "हम रुकेंगे नहीं। हम सच का खुलासा करेंगे।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "briar",
					"content": {
						"korean": "진실? 그걸 안다고 뭐가 달라질까? 여기서 나갈 수는 있을까?",
						"english": "Truth? What difference will knowing it make? Can we even get out of here?",
						"japanese": "真実？それを知って何が変わる？ここから出られるのか？",
						"chinese": "真相？知道了又能改变什么？我们能离开这里吗？",
						"french": "La vérité ? Qu'est-ce que ça changera de la savoir ? Pourrons-nous même sortir d'ici ?",
						"spanish": "¿La verdad? ¿Qué diferencia hará saberla? ¿Podremos salir de aquí?",
						"vietnamese": "Sự thật? Biết được nó thì có gì khác biệt? Liệu chúng ta có thể thoát ra khỏi đây không?",
						"thai": "ความจริง? รู้ไปแล้วจะต่างอะไร? เราจะออกไปจากที่นี่ได้ไหม?",
						"hindi": "सच? उसे जानकर क्या फर्क पड़ेगा? क्या हम यहां से निकल पाएंगे?"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_4",
					"content": {
						"korean": "협박하는 건가?",
						"english": "Are you threatening me?",
						"japanese": "脅しているのか？",
						"chinese": "你是在威胁我吗？",
						"french": "Est-ce une menace ?",
						"spanish": "¿Me estás amenazando?",
						"vietnamese": "Ngươi đang đe dọa ta sao?",
						"thai": "แกกำลังขู่ฉันเหรอ?",
						"hindi": "क्या तुम मुझे धमकी दे रहे हो?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아니. 그저… 숲의 진실은 잔혹할 뿐이라는 걸 알려주고 싶었어.",
						"english": "No. I just... wanted to let you know that the truth of the forest is simply cruel.",
						"japanese": "いや。ただ…森の真実はただ残酷なだけだと伝えたかっただけだ。",
						"chinese": "不。我只是…想让你知道，森林的真相只有残酷。",
						"french": "Non. Je voulais juste... te faire savoir que la vérité de la forêt est simplement cruelle.",
						"spanish": "No. Solo quería... hacerte saber que la verdad del bosque es simplemente cruel.",
						"vietnamese": "Không. Ta chỉ muốn… cho ngươi biết rằng sự thật về khu rừng này chỉ là sự tàn khốc mà thôi.",
						"thai": "ไม่หรอก แค่...อยากจะบอกว่าความจริงของป่ามันช่างโหดร้าย",
						"hindi": "नहीं। मैं बस... तुम्हें बताना चाहता था कि जंगल का सच बस क्रूर है।"
					},
					"speaker": "briar"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "흐읍… 고작 이 정도로… 진실은 아직… 저 너머에…",
						"english": "Ugh... just this much...? The truth is still... beyond...",
						"japanese": "くっ…これしきで…真実はまだ…その先に…",
						"chinese": "呃…就凭这点…真相还在…那更深处…",
						"french": "Ugh... juste ça...? La vérité est encore... au-delà...",
						"spanish": "Ugh... ¿solo con esto...? La verdad todavía está... más allá...",
						"vietnamese": "Ưgh… chỉ đến mức này thôi sao…? Sự thật vẫn còn… ở phía bên kia…",
						"thai": "อึก...แค่นี้เองงั้นรึ...ความจริงยังคง...อยู่ไกลออกไป...",
						"hindi": "उफ़... बस इतना ही...? सच अभी भी... उस पार है..."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "{random_boss}를 쓰러뜨렸어… 하지만 이 혼란은… 끝나지 않았어.",
						"english": "We defeated {random_boss}... but this chaos... it's not over.",
						"japanese": "{random_boss}を倒した…しかし、この混乱は…終わっていない。",
						"chinese": "我们击败了{random_boss}……但这场混乱……尚未结束。",
						"french": "Nous avons vaincu {random_boss}... mais ce chaos... ce n'est pas fini.",
						"spanish": "Derrotamos a {random_boss}... pero este caos... no ha terminado.",
						"vietnamese": "Chúng ta đã đánh bại {random_boss}... nhưng sự hỗn loạn này... vẫn chưa kết thúc.",
						"thai": "เราเอาชนะ {random_boss} ได้แล้ว... แต่ความวุ่นวายนี้... ยังไม่จบลง",
						"hindi": "हमने {random_boss} को हरा दिया... लेकिन यह उथल-पुथल... अभी खत्म नहीं हुई है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "쓰러진 그림자는 더 큰 어둠을 암시했다. 숲의 속삭임은 계속될 것이다.",
						"english": "The fallen shadow hinted at a greater darkness. The forest's whispers will continue.",
						"japanese": "倒れた影は、より大きな闇を示唆した。森のささやきは続くだろう。",
						"chinese": "倒下的阴影预示着更大的黑暗。森林的低语将继续。",
						"french": "L'ombre tombée laissait présager une obscurité plus grande. Les murmures de la forêt continueront.",
						"spanish": "La sombra caída insinuaba una oscuridad mayor. Los susurros del bosque continuarán.",
						"vietnamese": "Bóng tối đã gục ngã hé lộ một bóng tối lớn hơn. Những lời thì thầm của rừng sẽ tiếp tục.",
						"thai": "เงาที่ล้มลงบ่งบอกถึงความมืดมิดที่ยิ่งใหญ่กว่า เสียงกระซิบของป่าจะยังคงดำเนินต่อไป",
						"hindi": "गिरी हुई परछाई ने एक बड़े अंधेरे का संकेत दिया। जंगल की फुसफुसाहट जारी रहेगी।"
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "속삭임이 멈춘 자리에, 거대한 그림자가 나타났다.",
						"english": "Where the whispers ceased, a colossal shadow appeared.",
						"japanese": "囁きが止まった場所に、巨大な影が現れた。",
						"chinese": "低语停止之处，一个巨大的黑影出现了。",
						"french": "Là où les murmures cessèrent, une ombre colossale apparut.",
						"spanish": "Donde los susurros cesaron, una sombra colosal apareció.",
						"vietnamese": "Nơi những lời thì thầm dừng lại, một cái bóng khổng lồ xuất hiện.",
						"thai": "ที่ซึ่งเสียงกระซิบหยุดลง เงาขนาดมหึมาก็ปรากฏขึ้น",
						"hindi": "जहां फुसफुसाहट बंद हुई, एक विशाल परछाई प्रकट हुई।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "어리석은 자들. 진실을 찾는다고? 그저 혼돈만이 있을 뿐.",
						"english": "Fools. Seeking truth? There is only chaos.",
						"japanese": "愚か者ども。真実を探すだと？そこにあるのは混沌だけだ。",
						"chinese": "愚蠢的人们。寻找真相？那里只有混乱。",
						"french": "Imbéciles. Chercher la vérité ? Il n'y a que le chaos.",
						"spanish": "Necios. ¿Buscando la verdad? Solo hay caos.",
						"vietnamese": "Những kẻ ngu ngốc. Tìm kiếm sự thật sao? Chỉ có hỗn loạn mà thôi.",
						"thai": "พวกโง่เง่า ค้นหาความจริงงั้นรึ? มีแต่ความวุ่นวายเท่านั้นแหละ",
						"hindi": "मूर्खों। सच की तलाश? वहां केवल अराजकता है।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네가 이 모든 혼란의 근원인가?",
						"english": "Are you the source of all this chaos?",
						"japanese": "お前がこの全ての混乱の根源なのか？",
						"chinese": "你就是这一切混乱的根源吗？",
						"french": "Es-tu la source de tout ce chaos ?",
						"spanish": "¿Eres la fuente de todo este caos?",
						"vietnamese": "Ngươi là nguồn gốc của tất cả sự hỗn loạn này sao?",
						"thai": "แกคือต้นตอของความวุ่นวายทั้งหมดนี้ใช่ไหม?",
						"hindi": "क्या तुम इस सारी अराजकता का स्रोत हो?"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "내 이름은 {random_boss}. 숲의 혼돈 그 자체다.",
						"english": "My name is {random_boss}. I am the very chaos of the forest.",
						"japanese": "我が名は{random_boss}。森の混沌そのものだ。",
						"chinese": "我的名字是{random_boss}。我就是森林的混乱本身。",
						"french": "Mon nom est {random_boss}. Je suis le chaos même de la forêt.",
						"spanish": "Mi nombre es {random_boss}. Soy el caos mismo del bosque.",
						"vietnamese": "Tên ta là {random_boss}. Ta chính là sự hỗn loạn của khu rừng.",
						"thai": "นามของข้าคือ {random_boss} ข้าคือความวุ่นวายของป่าเอง",
						"hindi": "मेरा नाम {random_boss} है। मैं जंगल का साक्षात अराजकता हूं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "도망치지 못하게 해주지.",
						"english": "I won't let you escape.",
						"japanese": "逃がさない。",
						"chinese": "我不会让你逃走。",
						"french": "Je ne vous laisserai pas vous échapper.",
						"spanish": "No te dejaré escapar.",
						"vietnamese": "Ta sẽ không để ngươi trốn thoát.",
						"thai": "ข้าจะไม่ยอมให้เจ้าหนีไปได้",
						"hindi": "मैं तुम्हें भागने नहीं दूंगा।"
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 숲을 뒤덮었다. 압도적인 힘이었다.",
						"english": "A colossal shadow enveloped the forest. It was an overwhelming force.",
						"japanese": "巨大な影が森を覆った。圧倒的な力だった。",
						"chinese": "巨大的阴影笼罩了森林。那是一种压倒性的力量。",
						"french": "Une ombre colossale enveloppa la forêt. C'était une force écrasante.",
						"spanish": "Una sombra colosal envolvió el bosque. Era una fuerza abrumadora.",
						"vietnamese": "Một bóng tối khổng lồ bao trùm khu rừng. Đó là một sức mạnh áp đảo.",
						"thai": "เงาขนาดยักษ์ปกคลุมป่า มันเป็นพลังที่เหนือกว่า",
						"hindi": "एक विशाल छाया ने जंगल को घेर लिया। यह एक जबरदस्त शक्ति थी।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "진실을 찾는다고? 결국 너희는 숲의 일부가 될 뿐.",
						"english": "Seeking the truth? In the end, you will merely become part of the forest.",
						"japanese": "真実を探しているのか？結局、お前たちは森の一部となるだけだ。",
						"chinese": "寻找真相？最终，你们只会成为森林的一部分。",
						"french": "Vous cherchez la vérité ? Au final, vous ne ferez que devenir une partie de la forêt.",
						"spanish": "¿Buscando la verdad? Al final, solo te convertirás en parte del bosque.",
						"vietnamese": "Tìm kiếm sự thật? Cuối cùng, các ngươi sẽ chỉ trở thành một phần của khu rừng thôi.",
						"thai": "แสวงหาความจริงงั้นหรือ? สุดท้ายเจ้าก็จะกลายเป็นส่วนหนึ่งของป่าเท่านั้น",
						"hindi": "सच्चाई की तलाश है? अंत में, तुम बस जंगल का हिस्सा बन जाओगे।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아직… 끝나지 않았어. 포기하지 않아.",
						"english": "It's not... over yet. I won't give up.",
						"japanese": "まだ…終わっていない。諦めない。",
						"chinese": "尚未……结束。我不会放弃。",
						"french": "Ce n'est pas... encore fini. Je n'abandonnerai pas.",
						"spanish": "Todavía no... ha terminado. No me rendiré.",
						"vietnamese": "Vẫn chưa... kết thúc. Tôi sẽ không bỏ cuộc.",
						"thai": "ยัง...ไม่จบ ฉันจะไม่ยอมแพ้",
						"hindi": "अभी... खत्म नहीं हुआ है। मैं हार नहीं मानूँगा।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"무성한 숲, 모든 발걸음마다 오래된 이끼가 속삭였다.",
			"모로스에 대한 소문은 길을 잃은 자를 유혹하고, 때로는 파멸로 이끈다고 했다.",
			"진실이 왜곡되는 숲, 주인공은 혼란 속으로 발걸음을 옮긴다."
		],
		"english": [
			"Lush forest, ancient moss whispered with every step.",
			"Rumors of Moros lured the lost, sometimes leading to their ruin.",
			"A forest where truth distorts, the protagonist steps into the chaos."
		],
		"japanese": [
			"豊かな森、足を踏み出すたびに古い苔がささやいた。",
			"モロスに関する噂は、道に迷った者を誘惑し、時には破滅へと導くと言われていた。",
			"真実が歪む森、主人公は混乱の中へと足を踏み入れる。"
		],
		"chinese": [
			"茂密的森林，每一步都伴随着古老苔藓的低语。",
			"关于莫罗斯的谣言诱惑着迷失者，有时甚至将他们引向毁灭。",
			"真相扭曲的森林，主角步入混乱之中。"
		],
		"french": [
			"Forêt luxuriante, la mousse ancienne chuchotait à chaque pas.",
			"Les rumeurs de Moros attiraient les égarés, les menant parfois à leur perte.",
			"Une forêt où la vérité se déforme, le protagoniste s'avance dans le chaos."
		],
		"spanish": [
			"Bosque exuberante, el musgo antiguo susurraba a cada paso.",
			"Los rumores de Moros atraían a los perdidos, a veces llevándolos a su ruina.",
			"Un bosque donde la verdad se distorsiona, el protagonista avanza hacia el caos."
		],
		"vietnamese": [
			"Rừng rậm tươi tốt, rêu phong cổ xưa thì thầm theo mỗi bước chân.",
			"Tin đồn về Moros dụ dỗ những kẻ lạc lối, đôi khi dẫn họ đến diệt vong.",
			"Rừng nơi sự thật bị bóp méo, nhân vật chính bước vào sự hỗn loạn."
		],
		"thai": [
			"ป่าอันเขียวชอุ่ม ตะไคร่น้ำเก่าแก่กระซิบทุกย่างก้าว",
			"ข่าวลือของ Moros ล่อลวงผู้หลงทาง บางครั้งนำไปสู่ความหายนะ",
			"ป่าที่ความจริงบิดเบี้ยว ตัวเอกก้าวเข้าสู่ความวุ่นวาย"
		],
		"hindi": [
			"हरा-भरा जंगल, हर कदम पर पुरानी काई फुसफुसाती थी।",
			"मोरोस की अफवाहें खोए हुए लोगों को लुभाती थीं, कभी-कभी उन्हें बर्बाद कर देती थीं।",
			"एक जंगल जहाँ सच बिगड़ जाता है, नायक अराजकता में कदम रखता है।"
		]
	}
} as const;
