export const scenario_modern_aether_39_01 = {
	"scenario_id": "modern_aether_39_01",
	"order": 1,
	"act": "intro",
	"theme": "modern",
	"actors": {
		"bex": {
			"id": "mon_74e24324-3f9a-4d44-9611-1da33b654ca1",
			"name": {
				"korean": "벡스",
				"english": "Bex",
				"japanese": "ベックス",
				"chinese": "贝克斯",
				"french": "Bex",
				"spanish": "Bex",
				"vietnamese": "Bex",
				"thai": "เบ็กซ์",
				"hindi": "बेक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/09dae190-ff6b-4a9d-b656-e1a2b896aa00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5cc3c77f-72e1-416e-b346-31889b3b9300/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "새로운 도시에 도착했다. 번잡함 속 낯선 기시감이 피어났다.",
						"english": "Arrived in a new city. Amidst the bustle, a strange déjà vu bloomed.",
						"japanese": "新しい都市に到着した。喧騒の中、見慣れないデジャヴが芽生えた。",
						"chinese": "抵达新城。喧嚣中，陌生的既视感悄然浮现。",
						"french": "Arrivé dans une nouvelle ville. Au milieu de l'agitation, un étrange déjà-vu a fleuri.",
						"spanish": "Llegué a una ciudad nueva. Entre el ajetreo, un extraño déjà vu floreció.",
						"vietnamese": "Đã đến một thành phố mới. Giữa sự ồn ào, một cảm giác quen thuộc lạ lẫm trỗi dậy.",
						"thai": "มาถึงเมืองใหม่ ท่ามกลางความวุ่นวาย ความรู้สึกคุ้นเคยที่ไม่รู้จักก็ผลิบานขึ้น",
						"hindi": "एक नए शहर में पहुँचा। भीड़भाड़ के बीच, एक अजीब सा देजा वू खिल उठा।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…왠지 익숙해.",
						"english": "...Somehow, it feels familiar.",
						"japanese": "…なぜか、見覚えがある。",
						"chinese": "……总觉得很熟悉。",
						"french": "...D'une certaine manière, c'est familier.",
						"spanish": "...De alguna manera, me resulta familiar.",
						"vietnamese": "...Sao mà quen thuộc quá.",
						"thai": "...ทำไมรู้สึกคุ้นเคย",
						"hindi": "...किसी तरह, यह जाना-पहचाना लगता है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"speaker": "bex",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "bex",
					"content": {
						"korean": "새로운 얼굴이군. 또 다른 방문자.",
						"english": "A new face. Another visitor.",
						"japanese": "新しい顔だな。また別の訪問者か。",
						"chinese": "一张新面孔。又一位访客。",
						"french": "Un nouveau visage. Un autre visiteur.",
						"spanish": "Una cara nueva. Otro visitante.",
						"vietnamese": "Một gương mặt mới. Một vị khách khác.",
						"thai": "ใบหน้าใหม่นี่ อีกหนึ่งผู้มาเยือน",
						"hindi": "एक नया चेहरा। एक और आगंतुक।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "무슨 소리야?",
						"english": "What are you talking about?",
						"japanese": "何の話だ？",
						"chinese": "你在说什么？",
						"french": "De quoi parlez-vous ?",
						"spanish": "¿De qué hablas?",
						"vietnamese": "Ngươi nói gì vậy?",
						"thai": "คุณกำลังพูดถึงอะไร",
						"hindi": "तुम क्या कह रहे हो?"
					}
				},
				{
					"content": {
						"korean": "여긴 늘 그랬어. 사라진 사람들은 돌아오지 않고, 사건은 반복되지.",
						"english": "It's always been like this here. Those who vanish never return, and events repeat.",
						"japanese": "ここはいつもそうだ。消えた者たちは戻らず、事件は繰り返される。",
						"chinese": "这里一直如此。消失的人再未回来，事件也总在重演。",
						"french": "C'est toujours comme ça ici. Ceux qui disparaissent ne reviennent jamais, et les événements se répètent.",
						"spanish": "Siempre ha sido así aquí. Los que desaparecen nunca regresan, y los eventos se repiten.",
						"vietnamese": "Nơi đây vẫn luôn như vậy. Những người biến mất không bao giờ trở lại, và các sự kiện cứ lặp đi lặp lại.",
						"thai": "ที่นี่ก็เป็นแบบนี้เสมอ คนที่หายไปไม่เคยกลับมา และเหตุการณ์ก็ซ้ำรอย",
						"hindi": "यहाँ हमेशा ऐसा ही रहा है। जो लोग गायब हो जाते हैं, वे कभी वापस नहीं आते, और घटनाएँ दोहराई जाती हैं।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "bex"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "bex"
				},
				{
					"type": "speech",
					"speaker": "bex",
					"content": {
						"korean": "뭘 찾고 있는지 알아. 하지만 헛수고야.",
						"english": "I know what you're looking for. But it's futile.",
						"japanese": "何を探しているのか知っている。だが、無駄骨だ。",
						"chinese": "我知道你在找什么。但那只是徒劳。",
						"french": "Je sais ce que vous cherchez. Mais c'est inutile.",
						"spanish": "Sé lo que buscas. Pero es inútil.",
						"vietnamese": "Tôi biết ngươi đang tìm gì. Nhưng vô ích thôi.",
						"thai": "ฉันรู้ว่าเธอกำลังหาอะไร แต่เปล่าประโยชน์",
						"hindi": "मुझे पता है तुम क्या ढूँढ रहे हो। लेकिन यह व्यर्थ है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "사라진 사람들에 대해 아는 게 있어?",
						"english": "Do you know anything about the vanished people?",
						"japanese": "消えた人々について何か知っている？",
						"chinese": "你知道那些失踪的人吗？",
						"french": "Sais-tu quelque chose sur les disparus ?",
						"spanish": "¿Sabes algo sobre las personas desaparecidas?",
						"vietnamese": "Ngươi có biết gì về những người đã biến mất không?",
						"thai": "เจ้ารู้อะไรเกี่ยวกับผู้คนที่หายไปบ้างหรือไม่?",
						"hindi": "क्या तुम गायब हुए लोगों के बारे में कुछ जानते हो?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "bex",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…모든 것은 이미 일어났다. 네가 오기도 전에.",
						"english": "...Everything has already happened. Before you even arrived.",
						"japanese": "…すべてはすでに起こった。君が来るよりも前に。",
						"chinese": "…一切都已发生。在你来之前。",
						"french": "...Tout est déjà arrivé. Avant même que tu n'arrives.",
						"spanish": "...Todo ya ha sucedido. Antes de que tú llegaras.",
						"vietnamese": "...Mọi thứ đã xảy ra rồi. Ngay cả trước khi ngươi đến.",
						"thai": "...ทุกสิ่งได้เกิดขึ้นแล้ว ก่อนที่เจ้าจะมาถึงด้วยซ้ำ",
						"hindi": "...सब कुछ पहले ही हो चुका है। तुम्हारे आने से भी पहले।"
					}
				},
				{
					"content": {
						"korean": "그게 무슨 말인데?",
						"english": "What do you mean by that?",
						"japanese": "それはどういう意味だ？",
						"chinese": "这是什么意思？",
						"french": "Qu'est-ce que tu veux dire par là ?",
						"spanish": "¿Qué quieres decir con eso?",
						"vietnamese": "Ngươi muốn nói gì?",
						"thai": "นั่นหมายความว่าอะไร?",
						"hindi": "तुम्हारा क्या मतलब है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "발밑에 낡은 표식이 희미하게 보였다. 잊혀진 듯한 문양이었다.",
						"english": "A faded, old symbol was faintly visible beneath my feet. It looked like a forgotten emblem.",
						"japanese": "足元に古い印が薄く見えた。忘れ去られたような紋様だった。",
						"chinese": "脚下隐约可见一个褪色的旧标记。那像是一个被遗忘的图腾。",
						"french": "Un vieux symbole est apparu faiblement sous mes pieds. C'était un emblème oublié.",
						"spanish": "Una vieja marca apenas visible apareció bajo mis pies. Parecía un emblema olvidado.",
						"vietnamese": "Dưới chân mờ ảo hiện lên một dấu hiệu cũ kỹ. Đó là một biểu tượng dường như đã bị lãng quên.",
						"thai": "ใต้เท้าปรากฏเครื่องหมายเก่าแก่จางๆ มันเป็นลวดลายที่ดูเหมือนถูกลืม",
						"hindi": "मेरे पैरों के नीचे एक धुंधला, पुराना निशान मुश्किल से दिखाई दे रहा था। वह एक भूला हुआ प्रतीक लग रहा था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "bex",
					"spot": [
						3,
						3
					]
				},
				{
					"content": {
						"korean": "이 도시의 밤은 끝없이 이어진 루프 같아.",
						"english": "The nights in this city are like an endless loop.",
						"japanese": "この街の夜は、終わりなく続くループのようだ。",
						"chinese": "这个城市的夜晚就像一个无尽的循环。",
						"french": "Les nuits de cette ville sont comme une boucle sans fin.",
						"spanish": "Las noches en esta ciudad son como un bucle sin fin.",
						"vietnamese": "Đêm ở thành phố này giống như một vòng lặp vô tận.",
						"thai": "ค่ำคืนในเมืองนี้เหมือนวงวนที่ไม่มีที่สิ้นสุด",
						"hindi": "इस शहर की रातें एक अंतहीन लूप जैसी हैं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "bex"
				},
				{
					"content": {
						"korean": "벗어날 방법은 없어?",
						"english": "Is there no way out?",
						"japanese": "抜け出す方法はないのか？",
						"chinese": "没有办法摆脱吗？",
						"french": "Il n'y a pas d'issue ?",
						"spanish": "¿No hay salida?",
						"vietnamese": "Không có cách nào thoát khỏi sao?",
						"thai": "ไม่มีทางออกเลยหรือ?",
						"hindi": "कोई रास्ता नहीं है बाहर निकलने का?"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "벗어나려 할수록 더 깊이 빠져들 뿐. 넌 이미 시작점에 서 있어.",
						"english": "The more you try to escape, the deeper you fall. You're already at the starting point.",
						"japanese": "抜け出そうとすればするほど、さらに深くはまるだけだ。君はすでに開始地点に立っている。",
						"chinese": "你越是想逃离，就陷得越深。你已经站在了起点上。",
						"french": "Plus tu tentes de t'échapper, plus tu t'enfonces. Tu es déjà au point de départ.",
						"spanish": "Cuanto más intentas escapar, más te hundes. Ya estás en el punto de partida.",
						"vietnamese": "Càng cố thoát, ngươi càng lún sâu hơn. Ngươi đã đứng ở vạch xuất phát rồi.",
						"thai": "ยิ่งพยายามหนีเท่าไหร่ ก็ยิ่งจมดิ่งลงไปเท่านั้น เจ้ามายืนอยู่ ณ จุดเริ่มต้นแล้ว",
						"hindi": "तुम जितना बचने की कोशिश करोगे, उतना ही गहरे धँसते जाओगे। तुम पहले से ही शुरुआती बिंदु पर हो।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "bex"
				},
				{
					"content": {
						"korean": "거짓말 마! 난 끝낼 거야!",
						"english": "Don't lie! I'll end this!",
						"japanese": "嘘をつくな！私が終わらせる！",
						"chinese": "别骗我！我会结束这一切！",
						"french": "Ne mens pas ! Je vais y mettre fin !",
						"spanish": "¡No mientas! ¡Lo acabaré!",
						"vietnamese": "Đừng nói dối! Ta sẽ kết thúc chuyện này!",
						"thai": "อย่าโกหก! ข้าจะจบเรื่องนี้เอง!",
						"hindi": "झूठ मत बोलो! मैं इसे खत्म करूँगा!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_1"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "bex",
					"spot": [
						2,
						4
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "경고했어. 하지만 듣지 않는군.",
						"english": "I warned you. But you didn't listen.",
						"japanese": "警告したぞ。だが、聞く耳を持たないようだな。",
						"chinese": "我警告过你。但你没听。",
						"french": "Je t'ai prévenu. Mais tu n'as pas écouté.",
						"spanish": "Te lo advertí. Pero no escuchaste.",
						"vietnamese": "Ta đã cảnh báo rồi. Nhưng ngươi không nghe.",
						"thai": "ข้าเตือนแล้ว แต่เจ้าไม่ฟัง",
						"hindi": "मैंने तुम्हें चेतावनी दी थी। लेकिन तुमने नहीं सुना।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "bex"
				},
				{
					"content": {
						"korean": "포기할 순 없어.",
						"english": "I can't give up.",
						"japanese": "諦めるわけにはいかない。",
						"chinese": "我不能放弃。",
						"french": "Je ne peux pas abandonner.",
						"spanish": "No puedo rendirme.",
						"vietnamese": "Ta không thể từ bỏ.",
						"thai": "ข้าจะยอมแพ้ไม่ได้",
						"hindi": "मैं हार नहीं मान सकता।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "bex",
					"content": {
						"korean": "이 길의 끝은 파멸뿐. 이미 본 미래야.",
						"english": "This path only leads to ruin. I've seen this future.",
						"japanese": "この道の先には破滅しかない。すでに見た未来だ。",
						"chinese": "这条路的尽头只有毁灭。这是我早已预见的未来。",
						"french": "Cette voie ne mène qu'à la ruine. C'est un avenir que j'ai déjà vu.",
						"spanish": "El final de este camino es solo la ruina. Ya he visto este futuro.",
						"vietnamese": "Con đường này chỉ dẫn đến sự diệt vong. Tôi đã thấy tương lai này rồi.",
						"thai": "ปลายทางของเส้นทางนี้มีแต่ความพินาศ ฉันเห็นอนาคตนี้แล้ว",
						"hindi": "इस राह का अंत सिर्फ़ विनाश है। यह भविष्य मैं देख चुका हूँ।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "난 달라. 내가 바꿀 거야.",
						"english": "I'm different. I'll change it.",
						"japanese": "私は違う。私が変える。",
						"chinese": "我不同。我会改变它。",
						"french": "Je suis différent. Je vais le changer.",
						"spanish": "Soy diferente. Yo lo cambiaré.",
						"vietnamese": "Ta khác. Ta sẽ thay đổi nó.",
						"thai": "ฉันไม่เหมือนใคร ฉันจะเปลี่ยนมัน",
						"hindi": "मैं अलग हूँ। मैं इसे बदलूँगा।"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "{random_boss}가 쓰러졌다. 그러나 공간의 왜곡은 멈추지 않았다.",
						"english": "{random_boss} has fallen. But the spatial distortion did not cease.",
						"japanese": "{random_boss}は倒れた。しかし空間の歪みは止まらなかった。",
						"chinese": "{random_boss}倒下了。然而空间扭曲并未停止。",
						"french": "{random_boss} est tombé. Mais la distorsion spatiale n'a pas cessé.",
						"spanish": "{random_boss} ha caído. Pero la distorsión espacial no cesó.",
						"vietnamese": "{random_boss} đã gục ngã. Nhưng sự méo mó của không gian vẫn không dừng lại.",
						"thai": "{random_boss} พ่ายแพ้แล้ว แต่การบิดเบือนของอวกาศยังไม่หยุดลง",
						"hindi": "{random_boss} गिर गया। लेकिन स्थानिक विकृति नहीं रुकी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…겨우 시작일 뿐. 넌 이 굴레를 벗어날 수 없어.",
						"english": "...It's only the beginning. You can't escape this cycle.",
						"japanese": "…ほんの始まりに過ぎない。お前はこの輪から逃れられない。",
						"chinese": "……这仅仅是开始。你无法摆脱这个束缚。",
						"french": "...Ce n'est que le début. Tu ne peux pas échapper à ce cycle.",
						"spanish": "...Es solo el principio. No puedes escapar de este ciclo.",
						"vietnamese": "...Đây chỉ mới là khởi đầu. Ngươi không thể thoát khỏi vòng luẩn quẩn này.",
						"thai": "...นี่เป็นเพียงจุดเริ่มต้นเท่านั้น คุณไม่สามารถหนีพ้นวงจรนี้ได้",
						"hindi": "...यह तो बस शुरुआत है। तुम इस बंधन से बच नहीं सकते।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "무슨 소리야! 끝났어!",
						"english": "What was that?! It's over!",
						"japanese": "なんだって！？終わったんだ！",
						"chinese": "什么？！结束了！",
						"french": "Quoi ?! C'est fini !",
						"spanish": "¡¿Qué fue eso?! ¡Se acabó!",
						"vietnamese": "Cái gì thế?! Xong rồi!",
						"thai": "อะไรนะ! จบแล้ว!",
						"hindi": "क्या था वो?! खत्म हो गया!"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "도시의 그림자는 더욱 깊어졌다. 진실은 아직 멀리 있었다.",
						"english": "The city's shadows deepened. The truth was still distant.",
						"japanese": "都市の影はさらに深まった。真実はまだ遠かった。",
						"chinese": "城市的阴影更深了。真相仍遥不可及。",
						"french": "Les ombres de la ville s'épaissirent. La vérité était encore lointaine.",
						"spanish": "Las sombras de la ciudad se hicieron más profundas. La verdad aún estaba lejos.",
						"vietnamese": "Bóng tối thành phố ngày càng dày đặc. Sự thật vẫn còn xa vời.",
						"thai": "เงาของเมืองลึกขึ้น ความจริงยังคงห่างไกล",
						"hindi": "शहर की परछाइयां और गहरी हो गईं। सच्चाई अभी भी दूर थी।"
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "시간이 뒤틀리고, 도시는 다시 시작점으로 돌아갔다.",
						"english": "Time twisted, and the city returned to its starting point.",
						"japanese": "時間が歪み、都市は再び出発点に戻った。",
						"chinese": "时间扭曲，城市回到了起点。",
						"french": "Le temps se tordit, et la ville retourna à son point de départ.",
						"spanish": "El tiempo se distorsionó, y la ciudad regresó a su punto de partida.",
						"vietnamese": "Thời gian bị bóp méo, thành phố quay trở lại điểm xuất phát.",
						"thai": "เวลากลับตาลปัตร และเมืองก็กลับสู่จุดเริ่มต้น",
						"hindi": "समय मुड़ गया, और शहर अपने शुरुआती बिंदु पर लौट आया।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "어리석은 시도. 너는 영원히 반복될 거야.",
						"english": "A foolish attempt. You will repeat eternally.",
						"japanese": "愚かな試み。お前は永遠に繰り返されるだろう。",
						"chinese": "愚蠢的尝试。你将永远重复。",
						"french": "Une tentative insensée. Tu te répéteras éternellement.",
						"spanish": "Un intento estúpido. Te repetirás eternamente.",
						"vietnamese": "Một nỗ lực ngu ngốc. Ngươi sẽ lặp lại vĩnh viễn.",
						"thai": "ความพยายามที่โง่เขลา เจ้าจะวนเวียนไปตลอดกาล",
						"hindi": "एक मूर्खतापूर्ण प्रयास। तुम हमेशा दोहराओगे।"
					}
				},
				{
					"content": {
						"korean": "…아직 끝나지 않았어. 다시 한번!",
						"english": "...It's not over yet. One more time!",
						"japanese": "…まだ終わってない。もう一度！",
						"chinese": "……还没结束。再来一次！",
						"french": "...Ce n'est pas encore fini. Encore une fois !",
						"spanish": "...Aún no ha terminado. ¡Una vez más!",
						"vietnamese": "...Chưa kết thúc đâu. Một lần nữa!",
						"thai": "...ยังไม่จบ. อีกครั้ง!",
						"hindi": "...अभी खत्म नहीं हुआ। एक और बार!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"speaker": "bex",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "봐. 그가 나타났어. 이 루프의 수호자.",
						"english": "Look. He's appeared. The guardian of this loop.",
						"japanese": "見ろ。彼が現れた。このループの守護者だ。",
						"chinese": "看。他出现了。这个循环的守护者。",
						"french": "Regarde. Il est apparu. Le gardien de cette boucle.",
						"spanish": "Mira. Él ha aparecido. El guardián de este bucle.",
						"vietnamese": "Nhìn kìa. Hắn đã xuất hiện. Kẻ bảo hộ vòng lặp này.",
						"thai": "ดูสิ เขาปรากฏตัวแล้ว ผู้พิทักษ์ของวงวนนี้",
						"hindi": "देखो। वह आ गया। इस लूप का संरक्षक।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "bex"
				},
				{
					"content": {
						"korean": "수호자라고?",
						"english": "A guardian?",
						"japanese": "守護者だと？",
						"chinese": "守护者？",
						"french": "Un gardien ?",
						"spanish": "¿Un guardián?",
						"vietnamese": "Kẻ bảo hộ ư?",
						"thai": "ผู้พิทักษ์เหรอ?",
						"hindi": "एक संरक्षक?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "그는 네가 여기 올 걸 알고 있었어. 모든 것이 계획대로야.",
						"english": "He knew you'd come here. Everything is going as planned.",
						"japanese": "彼は君がここに来ることを知っていた。すべて計画通りだ。",
						"chinese": "他知道你会来这里。一切都在计划之中。",
						"french": "Il savait que tu viendrais ici. Tout se déroule comme prévu.",
						"spanish": "Él sabía que vendrías aquí. Todo está saliendo según lo planeado.",
						"vietnamese": "Hắn biết ngươi sẽ đến đây. Mọi thứ đều theo kế hoạch.",
						"thai": "เขารู้ว่าคุณจะมาที่นี่ ทุกอย่างเป็นไปตามแผน",
						"hindi": "उसे पता था कि तुम यहाँ आओगे। सब कुछ योजना के अनुसार है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "bex"
				},
				{
					"type": "direction",
					"action": "exit",
					"direction": "down",
					"speaker": "bex",
					"duration_ms": 400
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 도시의 가장 깊은 곳에서 모습을 드러냈다.",
						"english": "A colossal shadow emerged from the deepest part of the city.",
						"japanese": "巨大な影が都市の最も深い場所から姿を現した。",
						"chinese": "一个巨大的影子从城市的深处浮现。",
						"french": "Une ombre colossale a émergé des profondeurs de la ville.",
						"spanish": "Una sombra colosal emergió de lo más profundo de la ciudad.",
						"vietnamese": "Một cái bóng khổng lồ xuất hiện từ nơi sâu thẳm nhất của thành phố.",
						"thai": "เงาขนาดมหึมาปรากฏขึ้นจากส่วนที่ลึกที่สุดของเมือง",
						"hindi": "शहर के सबसे गहरे हिस्से से एक विशाल परछाई उभरी।"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "환영한다, 새로운 손님. 너의 도착도 예정된 일.",
						"english": "Welcome, new guest. Your arrival was also predetermined.",
						"japanese": "ようこそ、新たな客よ。お前の到着も予定されたことだ。",
						"chinese": "欢迎，新客人。你的到来也是注定的。",
						"french": "Bienvenue, nouvel invité. Ton arrivée était également prédestinée.",
						"spanish": "Bienvenido, nuevo huésped. Tu llegada también estaba predestinada.",
						"vietnamese": "Chào mừng, vị khách mới. Sự xuất hiện của ngươi cũng đã được định trước.",
						"thai": "ยินดีต้อนรับ แขกคนใหม่ การมาถึงของคุณก็เป็นสิ่งที่ถูกกำหนดไว้แล้ว",
						"hindi": "स्वागत है, नए मेहमान। तुम्हारा आगमन भी तय था।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "너였구나. 이 모든 걸 꾸민 게!",
						"english": "It was you. You orchestrated all of this!",
						"japanese": "お前だったのか。この全てを企んだのは！",
						"chinese": "原来是你。这一切都是你策划的！",
						"french": "C'était toi. Tu as orchestré tout cela !",
						"spanish": "Eras tú. ¡Tú orquestaste todo esto!",
						"vietnamese": "Là ngươi. Ngươi đã sắp đặt tất cả chuyện này!",
						"thai": "เป็นคุณเองสินะ ที่จัดฉากเรื่องทั้งหมดนี้!",
						"hindi": "तुम थे। तुमने यह सब रचा!"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"네온이 춤추는 도시. 밤은 길고 그림자는 짙었다.",
			"알 수 없는 기시감. 모든 것이 익숙한 낯선 풍경.",
			"이곳에 발을 들인 순간, 끝나지 않는 악몽이 시작되었다.",
			"반복되는 비극 속에서, 그는 잊혀진 진실을 찾아야만 했다."
		],
		"english": [
			"A city where neon dances. The night was long, shadows deep.",
			"An unknown déjà vu. Everything familiar, yet a strange landscape.",
			"The moment I stepped in, an endless nightmare began.",
			"Amidst repeating tragedies, he had to find the forgotten truth."
		],
		"japanese": [
			"ネオンが踊る都市。夜は長く、影は濃かった。",
			"未知のデジャヴ。すべてが見慣れた、見知らぬ風景。",
			"ここに足を踏み入れた瞬間、終わりのない悪夢が始まった。",
			"繰り返される悲劇の中で、彼は忘れ去られた真実を見つけなければならなかった。"
		],
		"chinese": [
			"霓虹舞动的都市。夜色漫长，阴影浓重。",
			"莫名的既视感。一切都熟悉，却是陌生的风景。",
			"踏入此地的那一刻，无尽的噩梦便已开始。",
			"在重复的悲剧中，他必须找到被遗忘的真相。"
		],
		"french": [
			"Une ville où le néon danse. La nuit était longue, les ombres profondes.",
			"Un déjà-vu inconnu. Tout était familier, mais un paysage étrange.",
			"L'instant où j'ai mis les pieds ici, un cauchemar sans fin a commencé.",
			"Au milieu des tragédies répétées, il devait trouver la vérité oubliée."
		],
		"spanish": [
			"Una ciudad donde el neón baila. La noche era larga, las sombras profundas.",
			"Un déjà vu desconocido. Todo familiar, pero un paisaje extraño.",
			"En el instante en que puse un pie aquí, una pesadilla interminable comenzó.",
			"En medio de tragedias repetidas, él debía encontrar la verdad olvidada."
		],
		"vietnamese": [
			"Thành phố neon nhảy múa. Đêm dài và bóng tối dày đặc.",
			"Một cảm giác quen thuộc khó tả. Mọi thứ quen thuộc nhưng lại là một khung cảnh xa lạ.",
			"Khoảnh khắc đặt chân đến đây, một cơn ác mộng không hồi kết đã bắt đầu.",
			"Giữa những bi kịch lặp đi lặp lại, anh ta phải tìm ra sự thật bị lãng quên."
		],
		"thai": [
			"เมืองที่นีออนเต้นรำ ราตรีนั้นยาวนาน เงาก็ลึกซึ้ง",
			"ภาพซ้ำที่ไม่รู้จัก ทุกสิ่งคุ้นเคย ทว่ากลับเป็นทิวทัศน์ที่แปลกตา",
			"ทันทีที่ย่างกรายเข้ามา ฝันร้ายที่ไม่มีวันสิ้นสุดก็เริ่มต้นขึ้น",
			"ท่ามกลางโศกนาฏกรรมที่ซ้ำรอย เขาต้องค้นหาความจริงที่ถูกลืม"
		],
		"hindi": [
			"नियॉन नृत्य करता शहर। रात लंबी थी, परछाइयाँ गहरी थीं।",
			"एक अज्ञात देजा वू। सब कुछ जाना-पहचाना, फिर भी एक अजीब सा दृश्य।",
			"जिस पल मैंने यहाँ कदम रखा, एक अंतहीन दुःस्वप्न शुरू हो गया।",
			"बार-बार दोहराई जा रही त्रासदियों के बीच, उसे भूली हुई सच्चाई को खोजना था।"
		]
	}
} as const;
