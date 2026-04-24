export const scenario_desert_ceasefirephantom_v0_03 = {
	"scenario_id": "desert_ceasefirephantom_v0_03",
	"order": 3,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"Zahra_Pyra": {
			"name": {
				"korean": "자흐라 피라",
				"english": "Zahra Pyra",
				"japanese": "ザフラ・ピラ",
				"chinese": "扎赫拉·派拉",
				"french": "Zahra Pyra",
				"spanish": "Zahra Pyra",
				"vietnamese": "Zahra Pyra",
				"thai": "ซาห์รา ไพรา",
				"hindi": "ज़हरा पायरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/32ed56fd-da77-42c2-2146-5701dc8b2800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/98796e2b-0d8d-4f65-771e-ddc31a204500/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"모래는 모든 것을 감추고, 모든 것을 드러낸다.",
			"갈등의 그림자 아래, 그녀는 미소 지었다.",
			"가장 빠른 길이 가장 위험하다는 것을, 아무도 몰랐다."
		],
		"english": [
			"Sand hides all, and reveals all.",
			"Under the shadow of conflict, she smiled.",
			"No one knew the fastest path was the most perilous."
		],
		"japanese": [
			"砂は全てを隠し、全てを暴く。",
			"争いの影の下、彼女は微笑んだ。",
			"最速の道が最も危険であることを、誰も知らなかった。"
		],
		"chinese": [
			"沙尘掩盖一切，也揭示一切。",
			"冲突的阴影下，她微笑了。",
			"没人知道最快的路，也最危险。"
		],
		"french": [
			"Le sable cache tout et révèle tout.",
			"Sous l'ombre du conflit, elle sourit.",
			"Personne ne savait que le chemin le plus rapide était le plus dangereux."
		],
		"spanish": [
			"La arena lo esconde todo y lo revela todo.",
			"Bajo la sombra del conflicto, ella sonrió.",
			"Nadie sabía que el camino más rápido era el más peligroso."
		],
		"vietnamese": [
			"Cát che giấu mọi thứ, và cũng tiết lộ mọi thứ.",
			"Dưới bóng tối của xung đột, cô ấy mỉm cười.",
			"Không ai biết con đường nhanh nhất cũng là con đường nguy hiểm nhất."
		],
		"thai": [
			"ทรายซ่อนทุกสิ่ง และเปิดเผยทุกสิ่ง",
			"ใต้เงาแห่งความขัดแย้ง เธอยิ้ม",
			"ไม่มีใครรู้ว่าทางที่เร็วที่สุด คือทางที่อันตรายที่สุด"
		],
		"hindi": [
			"रेत सब कुछ छुपाती है, और सब कुछ उजागर करती है।",
			"संघर्ष की छाया में, वह मुस्कुराई।",
			"किसी को नहीं पता था कि सबसे तेज़ रास्ता सबसे खतरनाक है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "모래 언덕 너머, 수상한 장막이 보였다. 그곳에서 모든 것이 거래된다.",
						"english": "Beyond the dunes, a suspicious veil. There, all is traded.",
						"japanese": "砂丘の向こうに、怪しい幕が見えた。そこでは、すべてが取引される。",
						"chinese": "沙丘之外，一道可疑的帷幕。那里，一切皆可交易。",
						"french": "Au-delà des dunes, un voile suspect. Là, tout s'échange.",
						"spanish": "Más allá de las dunas, un velo sospechoso. Allí, todo se negocia.",
						"vietnamese": "Vượt qua cồn cát, một màn che đáng ngờ hiện ra. Ở đó, mọi thứ đều được giao dịch.",
						"thai": "เลยเนินทรายไป มีม่านที่น่าสงสัยปรากฏขึ้น ที่นั่นทุกสิ่งถูกแลกเปลี่ยน",
						"hindi": "टीलों के पार, एक रहस्यमय पर्दा। वहाँ, सब कुछ का सौदा होता है।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "Zahra_Pyra",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "손님인가? 뭘 찾으시나.",
						"english": "A guest? What do you seek?",
						"japanese": "客か？ 何を探している？",
						"chinese": "客人？ 你在找什么？",
						"french": "Un invité ? Que cherchez-vous ?",
						"spanish": "¿Un invitado? ¿Qué buscas?",
						"vietnamese": "Khách sao? Ngươi tìm gì?",
						"thai": "แขกหรือ? เจ้ามองหาอะไร?",
						"hindi": "मेहमान? क्या ढूंढ रहे हो?"
					},
					"speaker": "Zahra_Pyra",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "이 끝없는 갈등을 끝낼 방법.",
						"english": "A way to end this endless conflict.",
						"japanese": "この終わりのない争いを終わらせる方法。",
						"chinese": "结束这场无尽冲突的方法。",
						"french": "Un moyen de mettre fin à ce conflit sans fin.",
						"spanish": "Una forma de acabar con este conflicto sin fin.",
						"vietnamese": "Một cách để chấm dứt cuộc xung đột không hồi kết này.",
						"thai": "หนทางที่จะยุติความขัดแย้งที่ไม่มีที่สิ้นสุดนี้",
						"hindi": "इस अंतहीन संघर्ष को खत्म करने का तरीका।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "Zahra_Pyra",
					"content": {
						"korean": "흐음… 빠른 길이 있지.",
						"english": "Hmm... There's a quick way.",
						"japanese": "ふむ… 早道があるぞ。",
						"chinese": "嗯… 有条捷径。",
						"french": "Hmm… Il y a un chemin rapide.",
						"spanish": "Mmm… Hay un atajo.",
						"vietnamese": "Hừm... Có một con đường nhanh hơn.",
						"thai": "หืม... มีทางลัดอยู่",
						"hindi": "हूँ... एक तेज़ रास्ता है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "Zahra_Pyra"
				},
				{
					"speaker": "Zahra_Pyra",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 지도는 갈등의 심장부로 향하는 가장 빠른 길이야.",
						"english": "This map shows the fastest path to the heart of the conflict.",
						"japanese": "この地図は、争いの核心へ向かう最速の道だ。",
						"chinese": "这张地图是通往冲突核心最快的路。",
						"french": "Cette carte indique le chemin le plus rapide vers le cœur du conflit.",
						"spanish": "Este mapa muestra el camino más rápido al corazón del conflicto.",
						"vietnamese": "Bản đồ này là con đường nhanh nhất dẫn đến trung tâm của cuộc xung đột.",
						"thai": "แผนที่นี้คือทางที่เร็วที่สุดสู่ใจกลางของความขัดแย้ง",
						"hindi": "यह नक्शा संघर्ष के केंद्र तक पहुँचने का सबसे तेज़ रास्ता है।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "진짜? 이렇게 쉽게?",
						"english": "Really? That easy?",
						"japanese": "本当か？ そんなに簡単に？",
						"chinese": "真的？ 这么容易？",
						"french": "Vraiment ? Si facilement ?",
						"spanish": "¿De verdad? ¿Tan fácil?",
						"vietnamese": "Thật sao? Dễ dàng vậy à?",
						"thai": "จริงหรือ? ง่ายขนาดนั้นเลยเหรอ?",
						"hindi": "सच में? इतनी आसानी से?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "하지만 명심해. 가장 빠른 길은… 가장 위험한 법.",
						"english": "But remember. The fastest path is... the most perilous.",
						"japanese": "だが、心に留めておけ。最速の道は… 最も危険なのだ。",
						"chinese": "但请记住。最快的路… 也最危险。",
						"french": "Mais souviens-toi. Le chemin le plus rapide est… le plus dangereux.",
						"spanish": "Pero recuerda. El camino más rápido es… el más peligroso.",
						"vietnamese": "Nhưng hãy nhớ. Con đường nhanh nhất… là con đường nguy hiểm nhất.",
						"thai": "แต่จำไว้ให้ดี ทางที่เร็วที่สุดนั้น... คือทางที่อันตรายที่สุด",
						"hindi": "लेकिन याद रखना। सबसे तेज़ रास्ता… सबसे खतरनाक होता है।"
					},
					"speaker": "Zahra_Pyra",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_1",
					"content": {
						"korean": "…함정인가?",
						"english": "...A trap?",
						"japanese": "「…罠か？」",
						"chinese": "“……是陷阱吗？”",
						"french": "...Un piège ?",
						"spanish": "¿...Una trampa?",
						"vietnamese": "...Là bẫy sao?",
						"thai": "...กับดักหรือ?",
						"hindi": "...क्या यह जाल है?"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "Zahra_Pyra",
					"content": {
						"korean": "선택은 너희의 몫.",
						"english": "The choice is yours.",
						"japanese": "「選択はお前たち次第だ。」",
						"chinese": "“选择权在你们。”",
						"french": "Le choix vous appartient.",
						"spanish": "La elección es vuestra.",
						"vietnamese": "Sự lựa chọn là của các ngươi.",
						"thai": "การตัดสินใจเป็นของพวกเจ้า",
						"hindi": "चुनाव तुम्हारा है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "Zahra_Pyra"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "이게 가장 빠른 길이라고? 더 복잡해졌잖아!",
						"english": "This is the fastest way? It just got more complicated!",
						"japanese": "「これが一番の近道だと？余計に複雑になったじゃないか！」",
						"chinese": "“这是最快的路？更复杂了！”",
						"french": "C'est le chemin le plus rapide ? C'est devenu encore plus compliqué !",
						"spanish": "¿Esta es la forma más rápida? ¡Ahora es más complicado!",
						"vietnamese": "Đây là con đường nhanh nhất ư? Nó còn phức tạp hơn nhiều!",
						"thai": "นี่คือทางที่เร็วที่สุดเหรอ? มันกลับซับซ้อนขึ้นไปอีก!",
						"hindi": "यह सबसे तेज़ रास्ता है? यह तो और जटिल हो गया है!"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "Zahra_Pyra",
					"content": {
						"korean": "갈등의 '핵심'으로 가는 길은 원래 복잡한 법이지.",
						"english": "The path to the 'core' of conflict is always complex.",
						"japanese": "「争いの『核心』へ至る道は、元より複雑なものさ。」",
						"chinese": "“通往冲突‘核心’的道路，本就复杂。”",
						"french": "Le chemin vers le 'cœur' du conflit est toujours complexe.",
						"spanish": "El camino hacia el 'núcleo' del conflicto siempre es complejo.",
						"vietnamese": "Con đường đến 'cốt lõi' của xung đột vốn dĩ luôn phức tạp.",
						"thai": "หนทางสู่ 'แก่นแท้' ของความขัดแย้งนั้นซับซ้อนเสมอ",
						"hindi": "संघर्ष के 'मूल' तक का रास्ता हमेशा जटिल होता है।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "대체 뭘 노리는 거야?",
						"english": "What exactly are you after?",
						"japanese": "「一体何を企んでいるんだ？」",
						"chinese": "“你到底想做什么？”",
						"french": "Qu'est-ce que tu cherches exactement ?",
						"spanish": "¿Qué pretendes exactamente?",
						"vietnamese": "Ngươi rốt cuộc đang nhắm vào điều gì?",
						"thai": "เจ้าต้องการอะไรกันแน่?",
						"hindi": "तुम आख़िर क्या चाहते हो?"
					}
				},
				{
					"speaker": "Zahra_Pyra",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "난 그저… 갈등의 흐름을 따를 뿐.",
						"english": "I merely... follow the flow of conflict.",
						"japanese": "「私はただ…争いの流れに従うだけだ。」",
						"chinese": "“我只是……顺应冲突的潮流。”",
						"french": "Je ne fais que... suivre le courant du conflit.",
						"spanish": "Yo solo... sigo el flujo del conflicto.",
						"vietnamese": "Ta chỉ là... thuận theo dòng chảy của xung đột.",
						"thai": "ข้าแค่...ติดตามกระแสของความขัดแย้งเท่านั้น",
						"hindi": "मैं बस... संघर्ष के प्रवाह का अनुसरण करता हूँ।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "Zahra_Pyra"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "길은 끝나지 않는 소용돌이 같았다. 사방이 적이었다.",
						"english": "The path was like an endless vortex. Enemies were everywhere.",
						"japanese": "「道は終わりなき渦のようだった。四方八方敵だらけだ。」",
						"chinese": "“道路如无尽的漩涡，四面八方都是敌人。”",
						"french": "Le chemin était comme un tourbillon sans fin. Des ennemis étaient partout.",
						"spanish": "El camino era como un torbellino sin fin. Había enemigos por todas partes.",
						"vietnamese": "Con đường như một vòng xoáy vô tận. Khắp nơi đều là kẻ thù.",
						"thai": "เส้นทางราวกับกระแสน้ำวนไม่มีที่สิ้นสุด ศัตรูอยู่ทุกทิศทาง",
						"hindi": "रास्ता एक अंतहीन भंवर जैसा था। चारों ओर दुश्मन थे।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "우릴 여기에 가두려는 거였어!",
						"english": "They meant to trap us here!",
						"japanese": "「私たちをここに閉じ込めるつもりだったんだ！」",
						"chinese": "“他们想把我们困在这里！”",
						"french": "Ils voulaient nous piéger ici !",
						"spanish": "¡Querían atraparnos aquí!",
						"vietnamese": "Chúng muốn nhốt chúng ta ở đây!",
						"thai": "พวกมันต้องการขังเราไว้ที่นี่!",
						"hindi": "वे हमें यहाँ फंसाना चाहते थे!"
					}
				},
				{
					"speaker": "Zahra_Pyra",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "교착 상태. 이것 또한 갈등의 일부 아니겠어?",
						"english": "A stalemate. Isn't this also part of the conflict?",
						"japanese": "「膠着状態。これもまた争いの一部ではないか？」",
						"chinese": "“僵局。这不也是冲突的一部分吗？”",
						"french": "Une impasse. N'est-ce pas aussi une partie du conflit ?",
						"spanish": "Un punto muerto. ¿No es esto también parte del conflicto?",
						"vietnamese": "Bế tắc. Đây chẳng phải cũng là một phần của xung đột sao?",
						"thai": "ทางตัน นี่ก็เป็นส่วนหนึ่งของความขัดแย้งไม่ใช่หรือ?",
						"hindi": "एक गतिरोध। क्या यह भी संघर्ष का हिस्सा नहीं है?"
					}
				},
				{
					"content": {
						"korean": "이 모든 게 네 계획이군!",
						"english": "This was all your plan!",
						"japanese": "「この全てがお前の計画だったのか！」",
						"chinese": "“这一切都是你的计划！”",
						"french": "Tout cela faisait partie de ton plan !",
						"spanish": "¡Todo esto era tu plan!",
						"vietnamese": "Tất cả những điều này đều là kế hoạch của ngươi!",
						"thai": "ทั้งหมดนี่คือแผนของเจ้าเอง!",
						"hindi": "यह सब तुम्हारी योजना थी!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_3"
				},
				{
					"emotion": "happy",
					"speaker": "Zahra_Pyra",
					"content": {
						"korean": "흐흐… 난 조언만 했을 뿐.",
						"english": "Heh heh... I only gave advice.",
						"japanese": "ふふ… 私は助言しただけだ。",
						"chinese": "呵呵……我只是提了个建议而已。",
						"french": "Huhu… Je n'ai fait que donner un conseil.",
						"spanish": "Jeje… Yo solo di un consejo.",
						"vietnamese": "Hì hì… Ta chỉ đưa ra lời khuyên thôi mà.",
						"thai": "ฮึๆ... ข้าแค่ให้คำแนะนำเท่านั้นเอง",
						"hindi": "हँ हँ… मैंने तो बस सलाह दी थी।"
					},
					"type": "speech"
				},
				{
					"speaker": "Zahra_Pyra",
					"duration_ms": 400,
					"action": "exit",
					"type": "direction",
					"direction": "up"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "길 끝, 거대한 그림자가 기다리고 있었다.",
						"english": "At the end of the path, a giant shadow awaited.",
						"japanese": "道の終わりに、巨大な影が待ち受けていた。",
						"chinese": "小路的尽头，一道巨大的黑影正在等待。",
						"french": "Au bout du chemin, une ombre gigantesque attendait.",
						"spanish": "Al final del camino, una sombra gigantesca esperaba.",
						"vietnamese": "Cuối con đường, một bóng đen khổng lồ đang đợi.",
						"thai": "สุดทางเดิน เงาขนาดมหึมารออยู่",
						"hindi": "रास्ते के अंत में, एक विशालकाय परछाई प्रतीक्षा कर रही थी。"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "멍청한 것들. 이곳은 너희가 올 곳이 아니다.",
						"english": "Fools. This is not a place for you.",
						"japanese": "愚か者め。ここはお前たちが来る場所ではない。",
						"chinese": "愚蠢的东西。这里不是你们该来的地方。",
						"french": "Imbéciles. Ce n'est pas un endroit pour vous.",
						"spanish": "Tontos. Este no es vuestro lugar.",
						"vietnamese": "Lũ ngu. Nơi này không phải dành cho các ngươi.",
						"thai": "พวกโง่เอ๊ย! ที่นี่ไม่ใช่ที่ของพวกแก",
						"hindi": "मूर्खों। यह तुम्हारे आने की जगह नहीं है।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "네가 이 갈등을 부추기는 자냐?",
						"english": "Are you the one inciting this conflict?",
						"japanese": "お前がこの争いを煽っているのか？",
						"chinese": "是你煽动了这场冲突吗？",
						"french": "Est-ce toi qui attises ce conflit ?",
						"spanish": "¿Eres tú quien incita este conflicto?",
						"vietnamese": "Ngươi là kẻ xúi giục cuộc xung đột này sao?",
						"thai": "แกเป็นคนปลุกปั่นความขัดแย้งนี้งั้นเหรอ?",
						"hindi": "क्या तुम ही इस संघर्ष को भड़काने वाले हो?"
					}
				},
				{
					"speaker": "Zahra_Pyra",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "happy",
					"speaker": "Zahra_Pyra",
					"content": {
						"korean": "잘 됐네. 이 싸움도 흥미로울 거야.",
						"english": "Good. This fight will be interesting.",
						"japanese": "結構だ。この戦いも興味深いだろう。",
						"chinese": "那正好。这场战斗也会很有趣。",
						"french": "Bien. Ce combat sera intéressant.",
						"spanish": "Bien. Esta lucha también será interesante.",
						"vietnamese": "Tốt thôi. Trận chiến này cũng sẽ thú vị đây.",
						"thai": "ดีเลย การต่อสู้ครั้งนี้คงน่าสนใจ",
						"hindi": "अच्छा है। यह लड़ाई भी दिलचस्प होगी।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네 조언은 함정이었어!",
						"english": "Your advice was a trap!",
						"japanese": "お前の助言は罠だった！",
						"chinese": "你的建议是个陷阱！",
						"french": "Ton conseil était un piège !",
						"spanish": "¡Tu consejo fue una trampa!",
						"vietnamese": "Lời khuyên của ngươi là một cái bẫy!",
						"thai": "คำแนะนำของแกคือกับดัก!",
						"hindi": "तुम्हारी सलाह एक जाल थी!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "위험하다고 분명히 경고했는데?",
						"english": "But I clearly warned you it was dangerous, didn't I?",
						"japanese": "危険だと、はっきり警告したはずだが？",
						"chinese": "我不是已经明确警告过有危险了吗？",
						"french": "Pourtant, je vous ai clairement averti du danger, non ?",
						"spanish": "¿No os advertí claramente del peligro?",
						"vietnamese": "Nhưng ta đã cảnh báo rõ ràng là nguy hiểm rồi mà?",
						"thai": "ข้าเตือนแล้วนี่ว่ามันอันตราย?",
						"hindi": "मैंने स्पष्ट रूप से चेतावनी दी थी कि यह खतरनाक है, है ना?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "Zahra_Pyra"
				},
				{
					"speaker": "Zahra_Pyra",
					"duration_ms": 400,
					"action": "exit",
					"direction": "down",
					"type": "direction"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "…이것으로 끝이 아니다. 갈등은… 영원하다.",
						"english": "...This is not the end. Conflict is... eternal.",
						"japanese": "…これで終わりではない。争いは…永遠だ。",
						"chinese": "……这还没有结束。冲突是……永恒的。",
						"french": "...Ce n'est pas la fin. Le conflit est... éternel.",
						"spanish": "...Esto no es el final. El conflicto es... eterno.",
						"vietnamese": "...Đây chưa phải là kết thúc. Xung đột là... vĩnh cửu.",
						"thai": "...นี่ไม่ใช่จุดจบ ความขัดแย้ง...นิรันดร์",
						"hindi": "...यह अंत नहीं है। संघर्ष... शाश्वत है।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "또 다른 시작일 뿐인가.",
						"english": "Is it merely another beginning?",
						"japanese": "また別の始まりに過ぎないのか。",
						"chinese": "这只是另一个开始吗？",
						"french": "N'est-ce qu'un autre commencement ?",
						"spanish": "¿Es solo otro comienzo?",
						"vietnamese": "Hay đây chỉ là một khởi đầu khác?",
						"thai": "หรือนี่เป็นเพียงอีกจุดเริ่มต้นหนึ่งเท่านั้น",
						"hindi": "क्या यह केवल एक और शुरुआत है?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그래도 한 발짝 나아갔어.",
						"english": "Still, we've taken a step forward.",
						"japanese": "それでも、一歩前進した。",
						"chinese": "尽管如此，我们还是向前迈进了一步。",
						"french": "Malgré tout, nous avons fait un pas en avant.",
						"spanish": "Aun así, hemos dado un paso adelante.",
						"vietnamese": "Dù sao thì, chúng ta cũng đã tiến thêm một bước.",
						"thai": "ถึงอย่างนั้น เราก็ก้าวไปข้างหน้าหนึ่งก้าว",
						"hindi": "फिर भी, हमने एक कदम आगे बढ़ाया है।"
					},
					"speaker": "character_4",
					"emotion": "happy"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "쓰러진 적 뒤로, 새로운 혼돈의 전조가 피어났다. 사막은… 쉬지 않는다.",
						"english": "Behind the fallen foe, a new omen of chaos emerged. The desert… never rests.",
						"japanese": "倒れた敵の背後に、新たな混沌の予兆が現れた。砂漠は…休まない。",
						"chinese": "倒下的敌人身后，新的混乱预兆显现。沙漠……永不停歇。",
						"french": "Derrière l'ennemi abattu, un nouvel présage de chaos est apparu. Le désert… ne se repose jamais.",
						"spanish": "Detrás del enemigo caído, un nuevo presagio de caos surgió. El desierto… nunca descansa.",
						"vietnamese": "Phía sau kẻ thù ngã xuống, một điềm báo hỗn loạn mới xuất hiện. Sa mạc… không bao giờ nghỉ ngơi.",
						"thai": "เบื้องหลังศัตรูที่ล้มลง ลางร้ายแห่งความโกลาหลครั้งใหม่ได้ปรากฏขึ้น ทะเลทราย…ไม่เคยหยุดนิ่ง",
						"hindi": "गिरे हुए दुश्मन के पीछे, अराजकता का एक नया शगुन उभरा। रेगिस्तान… कभी नहीं रुकता।"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "가장 빠른 길은… 죽음으로 향하는 길이지.",
						"english": "The fastest path… is the one to death.",
						"japanese": "最も速い道は…死へと向かう道だ。",
						"chinese": "最快的路……是通向死亡的路。",
						"french": "Le chemin le plus rapide… est celui vers la mort.",
						"spanish": "El camino más rápido… es el que lleva a la muerte.",
						"vietnamese": "Con đường nhanh nhất… là con đường dẫn đến cái chết.",
						"thai": "เส้นทางที่เร็วที่สุด…คือเส้นทางสู่ความตาย",
						"hindi": "सबसे तेज़ रास्ता… मौत की ओर जाता है।"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "젠장… 다시 간다!",
						"english": "Damn it… I'm going again!",
						"japanese": "くそ…もう一度だ！",
						"chinese": "该死……再去一次！",
						"french": "Zut… j'y retourne !",
						"spanish": "Maldita sea… ¡Voy de nuevo!",
						"vietnamese": "Chết tiệt… Ta đi lần nữa!",
						"thai": "ให้ตายสิ…ไปอีกครั้ง!",
						"hindi": "धिक्कार है… मैं फिर जा रहा हूँ!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "Zahra_Pyra",
					"type": "direction",
					"spot": [
						3,
						3
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "경고했잖아. 뭐, 덕분에 볼거리는 좋았지.",
						"english": "I warned you. Well, it was a good show, though.",
						"japanese": "警告したはずだ。まあ、おかげでいい見世物にはなったがな。",
						"chinese": "我警告过你。好吧，多亏了你，我看到了好戏。",
						"french": "Je t'avais prévenu. Enfin, au moins, c'était un beau spectacle.",
						"spanish": "Te lo advertí. Bueno, al menos fue un buen espectáculo.",
						"vietnamese": "Ta đã cảnh báo ngươi rồi. Dù sao thì, đó cũng là một màn trình diễn đáng xem.",
						"thai": "ฉันเตือนนายแล้วนะ อืม…แต่ก็เป็นฉากที่น่าดู",
						"hindi": "मैंने तुम्हें चेतावनी दी थी। खैर, यह एक अच्छा नजारा था।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "Zahra_Pyra"
				},
				{
					"direction": "up",
					"type": "direction",
					"duration_ms": 400,
					"action": "exit",
					"speaker": "Zahra_Pyra"
				}
			]
		}
	]
} as const;
