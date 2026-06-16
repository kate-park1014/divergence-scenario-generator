export const scenario_snowy_skuld_72_02 = {
	"scenario_id": "snowy_skuld_72_02",
	"order": 2,
	"act": "rising",
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "빙하가 끝없이 맴도는 설원. 얼음 바닥에 거대한 원형의 자취가 겹겹이 패여 있다.",
						"english": "A snowfield of endlessly swirling glaciers. Gigantic circular traces are carved in layers into the ice floor.",
						"japanese": "氷河が絶え間なく渦巻く雪原。氷の床には巨大な円形の痕跡が幾重にも刻まれている。",
						"chinese": "冰川无尽盘旋的雪原。冰面上刻蚀着层层叠叠的巨大圆形轨迹。",
						"french": "Une étendue enneigée où les glaciers tourbillonnent sans fin. Des traces circulaires gigantesques et superposées sont gravées dans le sol de glace.",
						"spanish": "Un campo de nieve donde los glaciares giran sin fin. En el suelo de hielo hay gigantescas huellas circulares grabadas en capas.",
						"vietnamese": "Cánh đồng tuyết nơi sông băng xoáy không ngừng. Trên nền băng, những vết tích hình tròn khổng lồ được khắc chồng lớp.",
						"thai": "ทุ่งหิมะที่ธารน้ำแข็งหมุนวนไม่รู้จบ ร่องรอยวงกลมขนาดใหญ่สลักเป็นชั้นๆ บนพื้นน้ำแข็ง",
						"hindi": "एक बर्फीला मैदान जहाँ ग्लेशियर अनंत रूप से घूमते हैं। बर्फ़ की ज़मीन पर विशाल, गोलाकार निशान परत-दर-परत उकेरे हुए हैं।"
					}
				},
				{
					"content": {
						"korean": "이 자취는 대체 뭐야?",
						"english": "What exactly are these traces?",
						"japanese": "この痕跡は一体何だ？",
						"chinese": "这些痕迹到底是什么？",
						"french": "Que sont exactement ces traces ?",
						"spanish": "¿Qué son exactamente estas huellas?",
						"vietnamese": "Rốt cuộc những vết tích này là gì?",
						"thai": "ร่องรอยพวกนี้คืออะไรกันแน่?",
						"hindi": "आखिर ये निशान क्या हैं?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"spot": [
						3,
						2
					],
					"speaker": "eira",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "…룬이야. 오래된. 그리고… 끝나지 않는.",
						"english": "...A rune. Ancient. And... endless.",
						"japanese": "…ルーンだ。古い。そして…終わらない。",
						"chinese": "……是符文。古老的。而且……永无止境。",
						"french": "...Une rune. Ancienne. Et... sans fin.",
						"spanish": "...Una runa. Antigua. Y... sin fin.",
						"vietnamese": "...Là một rune. Cổ xưa. Và... không ngừng.",
						"thai": "...อักษรรูน เก่าแก่ และ...ไม่มีวันสิ้นสุด",
						"hindi": "...एक रुन। प्राचीन। और... अंतहीन।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "끝나지 않는다고?",
						"english": "Endless?",
						"japanese": "終わらないだと？",
						"chinese": "永无止境？",
						"french": "Sans fin ?",
						"spanish": "¿Sin fin?",
						"vietnamese": "Không ngừng sao?",
						"thai": "ไม่มีวันสิ้นสุดเหรอ?",
						"hindi": "अंतहीन?"
					},
					"speaker": "character_1",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "시작도, 끝도 없는 원. 계속 같은 곳을 맴돈 흔적.",
						"english": "A circle with no beginning, no end. A trace of endlessly circling the same place.",
						"japanese": "始まりも終わりもない円。同じ場所を回り続けた痕跡。",
						"chinese": "无始无终的圆。持续在原地盘旋的痕迹。",
						"french": "Un cercle sans début ni fin. La trace d'un mouvement perpétuel au même endroit.",
						"spanish": "Un círculo sin principio ni fin. Una huella de dar vueltas sin cesar en el mismo lugar.",
						"vietnamese": "Một vòng tròn không đầu không cuối. Vết tích của việc không ngừng xoay tròn cùng một chỗ.",
						"thai": "วงกลมที่ไม่มีจุดเริ่มต้น ไม่มีจุดสิ้นสุด ร่องรอยของการวนเวียนอยู่ในที่เดิมไม่รู้จบ",
						"hindi": "एक वृत्त जिसका न कोई आदि है, न अंत। एक ही स्थान पर अंतहीन घूमने का निशान।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "이 룬들은… 한 가지를 계속 말하고 있어.",
						"english": "These runes... keep telling one thing.",
						"japanese": "これらのルーンは…ずっと一つのことを語っている。",
						"chinese": "这些符文……一直在诉说着同一件事。",
						"french": "Ces runes... ne cessent de raconter une seule chose.",
						"spanish": "Estas runas... siguen diciendo una cosa.",
						"vietnamese": "Những rune này... không ngừng nói về một điều.",
						"thai": "อักษรรูนพวกนี้... ยังคงบอกเล่าสิ่งเดียว",
						"hindi": "ये रुन... एक ही बात बार-बार कह रहे हैं।"
					},
					"speaker": "eira",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "뭔데?",
						"english": "What is it?",
						"japanese": "「何？」",
						"chinese": "“什么？”",
						"french": "« Quoi ? »",
						"spanish": "¿Qué es?",
						"vietnamese": "Gì vậy?",
						"thai": "อะไรนะ?",
						"hindi": "क्या है?"
					}
				},
				{
					"content": {
						"korean": "\"어둠은 어디에도 없고.\" 그리고… \"검은 돌아갈 곳이 없다.\"",
						"english": "\"Darkness is nowhere.\" And... \"The sword has no place to return.\"",
						"japanese": "「闇はどこにもなく。」そして…「剣は戻る場所がない。」",
						"chinese": "“黑暗无处不在。”还有……“剑无归处。”",
						"french": "« Les ténèbres ne sont nulle part. » Et… « L'épée n'a nulle part où retourner. »",
						"spanish": "«La oscuridad no está en ninguna parte.» Y... «La espada no tiene adónde regresar.»",
						"vietnamese": "“Bóng tối không ở đâu cả.” Và… “Thanh kiếm không còn nơi nào để trở về.”",
						"thai": "“ความมืดมิดไม่มีอยู่จริง” และ… “ดาบไม่มีที่ให้กลับ”",
						"hindi": "“अंधेरा कहीं नहीं है।” और… “तलवार के लौटने की कोई जगह नहीं है।”"
					},
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "어둠이 없다고? 그럼 뭘 찾은 거지?",
						"english": "No darkness? Then what did we find?",
						"japanese": "「闇がない？じゃあ、何を見つけたんだ？」",
						"chinese": "没有黑暗？那我们找到了什么？",
						"french": "Pas de ténèbres ? Alors qu'avons-nous trouvé ?",
						"spanish": "¿No hay oscuridad? Entonces, ¿qué encontramos?",
						"vietnamese": "Không có bóng tối? Vậy chúng ta đã tìm thấy gì?",
						"thai": "ไม่มีความมืดมิด? แล้วเราเจออะไรกันแน่?",
						"hindi": "अंधेरा नहीं है? तो फिर हमने क्या पाया?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그게… 계속되는 질문이야.",
						"english": "That's... the ongoing question.",
						"japanese": "「それが…ずっと続く問いだ。」",
						"chinese": "那就是……持续的疑问。",
						"french": "C'est… la question persistante.",
						"spanish": "Esa es… la pregunta continua.",
						"vietnamese": "Đó… là câu hỏi vẫn tiếp diễn.",
						"thai": "นั่นแหละ… คือคำถามที่ยังคงอยู่",
						"hindi": "यही… निरंतर प्रश्न है।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "룬이 더 선명해졌어. \"어둠은 어디에도 없고, 검은 돌아갈 곳이 없다.\"",
						"english": "The rune became clearer. \"Darkness is nowhere, and the sword has no place to return.\"",
						"japanese": "「ルーンがさらに鮮明になった。「闇はどこにもなく、剣は戻る場所がない。」」",
						"chinese": "符文变得更清晰了。“黑暗无处不在，剑无归处。”",
						"french": "La rune est devenue plus claire. « Les ténèbres ne sont nulle part, et l'épée n'a nulle part où retourner. »",
						"spanish": "La runa se hizo más clara. «La oscuridad no está en ninguna parte, y la espada no tiene adónde regresar.»",
						"vietnamese": "Chữ rune trở nên rõ ràng hơn. “Bóng tối không ở đâu cả, và thanh kiếm không còn nơi nào để trở về.”",
						"thai": "รูนชัดเจนขึ้น “ความมืดมิดไม่มีอยู่จริง และดาบไม่มีที่ให้กลับ”",
						"hindi": "रूण और स्पष्ट हो गया। “अंधेरा कहीं नहीं है, और तलवार के लौटने की कोई जगह नहीं है।”"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_3",
					"content": {
						"korean": "이 무한한 맴돎이, 그 때문이었다는 거야?",
						"english": "This endless wandering, was it because of that?",
						"japanese": "「この無限の彷徨いが、それによるものだったと？」",
						"chinese": "这无尽的徘徊，就是因为那个吗？",
						"french": "Cette errance infinie, était-ce à cause de cela ?",
						"spanish": "Este deambular infinito, ¿fue por eso?",
						"vietnamese": "Sự lang thang vô tận này, là vì điều đó sao?",
						"thai": "การวนเวียนไม่รู้จบนี้ เป็นเพราะสิ่งนั้นงั้นหรือ?",
						"hindi": "यह अनंत भटकना, क्या उसी की वजह से था?"
					}
				},
				{
					"content": {
						"korean": "아마도. 맹목적인 유언이 그를 영원한 헤맴에 가둔 것 같아.",
						"english": "Perhaps. A blind will seems to have trapped him in eternal wandering.",
						"japanese": "「おそらく。盲目的な遺言が彼を永遠の彷徨いに閉じ込めたようだ。」",
						"chinese": "可能。一个盲目的遗言似乎将他困在了永恒的徘徊中。",
						"french": "Peut-être. Un testament aveugle semble l'avoir piégé dans une errance éternelle.",
						"spanish": "Quizás. Un testamento ciego parece haberlo atrapado en un deambular eterno.",
						"vietnamese": "Có lẽ. Một ý chí mù quáng dường như đã giam cầm anh ta trong sự lang thang vĩnh cửu.",
						"thai": "อาจจะ พินัยกรรมที่บอดใบ้ดูเหมือนจะขังเขาไว้ในการเดินทางที่ไม่สิ้นสุด",
						"hindi": "शायद। एक अंधी वसीयत ने उसे अनंत भटकने में फंसा दिया है।"
					},
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…끔찍한 벌이군.",
						"english": "...A terrible punishment.",
						"japanese": "「…恐ろしい罰だな。」",
						"chinese": "……真是可怕的惩罚。",
						"french": "… Une terrible punition.",
						"spanish": "… Un castigo terrible.",
						"vietnamese": "… Một hình phạt khủng khiếp.",
						"thai": "…เป็นการลงโทษที่น่ากลัว",
						"hindi": "…एक भयानक सज़ा है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "더 깊어진 자취의 한가운데, 거대한 그림자가 나타났다.",
						"english": "In the midst of the deepened traces, a colossal shadow appeared.",
						"japanese": "「さらに深まった痕跡の真ん中に、巨大な影が現れた。」",
						"chinese": "在更深的痕迹之中，一个巨大的影子出现了。",
						"french": "Au milieu des traces approfondies, une ombre colossale apparut.",
						"spanish": "En medio de las huellas más profundas, apareció una sombra colosal.",
						"vietnamese": "Giữa những dấu vết sâu hơn, một cái bóng khổng lồ xuất hiện.",
						"thai": "ท่ามกลางร่องรอยที่ลึกขึ้น เงายักษ์ปรากฏขึ้น",
						"hindi": "गहरे होते निशानों के बीच एक विशालकाय छाया प्रकट हुई।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "뭘 얻으려 여기까지 왔나. 길 잃은 자들이여.",
						"english": "What do you seek to gain, coming this far, lost ones?",
						"japanese": "「ここまで来て、何を求めるのか。道に迷いし者たちよ。」",
						"chinese": "你们这些迷失者，来到这里想得到什么？",
						"french": "Que cherchez-vous à obtenir, en venant si loin, âmes perdues ?",
						"spanish": "¿Qué buscáis obtener al llegar tan lejos, almas perdidas?",
						"vietnamese": "Các ngươi, những kẻ lạc lối, đến đây để tìm kiếm điều gì?",
						"thai": "พวกเจ้าหลงทาง มาที่นี่เพื่ออะไร?",
						"hindi": "यहाँ तक आकर क्या पाना चाहते हो, भटके हुए लोगों?"
					}
				},
				{
					"content": {
						"korean": "당신이 이 맴돎의 주인인가?",
						"english": "Are you the master of this loop?",
						"japanese": "あなたこそが、この巡りの主か？",
						"chinese": "你就是这循环的主人？",
						"french": "Êtes-vous le maître de cette boucle ?",
						"spanish": "¿Eres el amo de este ciclo?",
						"vietnamese": "Ngươi là chủ nhân của vòng lặp này sao?",
						"thai": "เจ้าคือเจ้าของวัฏจักรนี้รึ?",
						"hindi": "क्या तुम इस चक्र के स्वामी हो?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "나는 그저, 지켜야 할 것을 지킬 뿐. 영원히.",
						"english": "I merely protect what must be protected. Forever.",
						"japanese": "私はただ、守るべきものを守るだけ。永遠に。",
						"chinese": "我只是守护着必须守护之物。永恒地。",
						"french": "Je ne fais que protéger ce qui doit l'être. Éternellement.",
						"spanish": "Solo protejo lo que debe ser protegido. Para siempre.",
						"vietnamese": "Ta chỉ bảo vệ những gì cần được bảo vệ. Mãi mãi.",
						"thai": "ข้าเพียงแค่ปกป้องสิ่งที่ต้องปกป้อง ชั่วนิรันดร์",
						"hindi": "मैं तो बस वही बचाता हूँ, जिसे बचाना है। सदा के लिए।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"spot": [
						2,
						2
					],
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "\"돌아갈 곳 없는 검… 그대가 스스로를 가두었구나.\"",
						"english": "\"A sword with no home… You have imprisoned yourself.\"",
						"japanese": "「帰る場所なき剣… お前は自らを閉じ込めたのだな。」",
						"chinese": "“无处可归之剑… 你将自己囚禁了。”",
						"french": "« Épée sans foyer… Tu t'es emprisonné toi-même. »",
						"spanish": "«Espada sin hogar… Te has encerrado a ti mismo.»",
						"vietnamese": "“Lưỡi kiếm không nơi trở về… Ngươi đã tự giam cầm chính mình.”",
						"thai": "“ดาบไร้บ้าน… เจ้าได้จองจำตัวเอง”",
						"hindi": "“घरविहीन तलवार… तुमने खुद को कैद कर लिया है।”"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "…건방진 기록자 같으니. 네놈도 길을 잃을 것이다.",
						"english": "...Such an arrogant record-keeper. You, too, shall lose your way.",
						"japanese": "…生意気な記録者め。貴様も道を見失うだろう。",
						"chinese": "…傲慢的记录者。你也会迷失方向的。",
						"french": "...Quel archiviste insolent. Toi aussi, tu te perdras.",
						"spanish": "...Qué cronista tan insolente. Tú también perderás el rumbo.",
						"vietnamese": "…Kẻ ghi chép kiêu ngạo. Ngươi rồi cũng sẽ lạc lối thôi.",
						"thai": "…ผู้บันทึกที่อวดดี เจ้าเองก็จะหลงทาง",
						"hindi": "…कितने घमंडी लेखक हो। तुम भी भटक जाओगे।"
					}
				},
				{
					"content": {
						"korean": "우린 길을 잃지 않아.",
						"english": "We won't lose our way.",
						"japanese": "我々は道を見失わない。",
						"chinese": "我们不会迷失的。",
						"french": "Nous ne perdrons pas notre chemin.",
						"spanish": "No perderemos el rumbo.",
						"vietnamese": "Chúng ta sẽ không lạc lối.",
						"thai": "พวกเราจะไม่หลงทาง",
						"hindi": "हम रास्ता नहीं भटकेंगे।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_1"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "어리석은 자들. 이 헤맴은 끝나지 않는다.",
						"english": "Fools. This wandering never ends.",
						"japanese": "「愚か者たち。この迷いは終わらない。」",
						"chinese": "“愚蠢的人们。这场迷途永无止境。”",
						"french": "Insensés. Cette errance ne prendra jamais fin.",
						"spanish": "Necios. Este extravío no tiene fin.",
						"vietnamese": "Những kẻ ngốc. Sự lang thang này không bao giờ kết thúc.",
						"thai": "พวกโง่เขลา การหลงทางนี้ไม่มีวันสิ้นสุด",
						"hindi": "मूर्खों। यह भटकन कभी खत्म नहीं होगी।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "…아직… 끝나지 않았어.",
						"english": "...It's not... over yet.",
						"japanese": "「…まだ…終わってない。」",
						"chinese": "“……还没……结束。”",
						"french": "...Ce n'est pas... encore fini.",
						"spanish": "...Todavía... no ha terminado.",
						"vietnamese": "...Chưa... kết thúc đâu.",
						"thai": "...ยัง... ไม่จบลงเลย...",
						"hindi": "...अभी... खत्म नहीं हुआ है।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "얼음은 다시 길을 지웠다. 닿을 수 없는 길은 계속되었다.",
						"english": "The ice erased the path again. The unreachable path continued.",
						"japanese": "「氷は再び道を消した。辿り着けない道は続いた。」",
						"chinese": "“冰再次抹去了道路。那条无法抵达的路仍在延续。”",
						"french": "La glace a de nouveau effacé le chemin. La voie inaccessible perdura.",
						"spanish": "El hielo borró el camino de nuevo. El camino inalcanzable continuó.",
						"vietnamese": "Băng lại xóa đi con đường. Con đường không thể đến được vẫn tiếp diễn.",
						"thai": "น้ำแข็งได้ลบเส้นทางอีกครั้ง เส้นทางที่ไม่อาจเข้าถึงได้ยังคงดำเนินต่อไป",
						"hindi": "बर्फ ने रास्ता फिर से मिटा दिया। दुर्गम रास्ता जारी रहा।"
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…어둠은… 어디에도…",
						"english": "...Darkness... nowhere to be found...",
						"japanese": "「…闇は…どこにも…」",
						"chinese": "“……黑暗……无处可寻……”",
						"french": "...Les ténèbres... nulle part...",
						"spanish": "...La oscuridad... en ninguna parte...",
						"vietnamese": "...Bóng tối... không ở đâu cả...",
						"thai": "...ความมืด... ไม่มีที่ใดเลย...",
						"hindi": "...अंधेरा... कहीं नहीं..."
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…정말로 어둠은 없었던 건가.",
						"english": "...So, there was truly no darkness after all?",
						"japanese": "「…本当に闇はなかったのか。」",
						"chinese": "“……真的没有黑暗吗？”",
						"french": "...N'y avait-il vraiment aucune obscurité ?",
						"spanish": "¿...Realmente no había oscuridad?",
						"vietnamese": "...Thật sự không có bóng tối sao?",
						"thai": "...แท้จริงแล้วไม่มีความมืดเลยหรือไร?",
						"hindi": "...क्या सच में कोई अंधेरा नहीं था?"
					}
				},
				{
					"spot": [
						1,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그가 찾아 헤맨 것은, 이미 사라진 것이었을지도 몰라.",
						"english": "What he searched for, might have already disappeared.",
						"japanese": "「彼が探し求めていたものは、すでに消え去っていたのかもしれない。」",
						"chinese": "“他所寻找的，或许早已消失。”",
						"french": "Ce qu'il cherchait, a peut-être déjà disparu.",
						"spanish": "Lo que buscaba, tal vez ya había desaparecido.",
						"vietnamese": "Thứ anh ta tìm kiếm, có lẽ đã biến mất rồi.",
						"thai": "สิ่งที่เขาตามหา อาจได้หายไปแล้วก็เป็นได้",
						"hindi": "जो वह ढूंढ रहा था, शायद वह पहले ही गायब हो चुका था।"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "빙하의 맴돎이 옅어졌다. 허망한 유언에 묶였던 검은, 이제 비로소 멈췄다.",
						"english": "The glacial swirl faded. The sword, bound by a futile last will, has finally ceased.",
						"japanese": "「氷河の渦が薄れた。虚しい遺言に縛られていた剣は、ついに止まった。」",
						"chinese": "“冰川的盘旋减弱了。被虚妄遗言束缚的剑，终于停息了。”",
						"french": "Le tourbillon glacial s'est estompé. L'épée, liée par un vain testament, s'est enfin arrêtée.",
						"spanish": "El torbellino glacial se desvaneció. La espada, atada a un testamento inútil, finalmente se detuvo.",
						"vietnamese": "Cơn xoáy băng tan dần. Thanh kiếm, bị trói buộc bởi lời trăn trối vô vọng, cuối cùng cũng đã dừng lại.",
						"thai": "การหมุนวนของธารน้ำแข็งจางลง ดาบที่ถูกผูกมัดด้วยพินัยกรรมอันว่างเปล่า ในที่สุดก็หยุดลงแล้ว",
						"hindi": "ग्लेशियल भंवर हल्का हो गया। व्यर्थ वसीयत से बंधी तलवार, अब जाकर आखिरकार रुक गई।"
					}
				},
				{
					"content": {
						"korean": "…다음 자취는 어디로 이어질까.",
						"english": "...Where will the next path lead?",
						"japanese": "「…次の足跡はどこへ続くのだろうか。」",
						"chinese": "“……下一个足迹会通往何方？”",
						"french": "...Où mènera la prochaine trace ?",
						"spanish": "¿...Adónde llevará la siguiente huella?",
						"vietnamese": "...Dấu vết tiếp theo sẽ dẫn đến đâu?",
						"thai": "...ร่องรอยต่อไปจะนำไปสู่ที่ใด?",
						"hindi": "...अगला निशान कहाँ ले जाएगा?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "그러나 그 길은… 여전히 어디에도 닿지 못하고 있었다.",
						"english": "But that path... still led nowhere.",
						"japanese": "「しかしその道は…依然としてどこにも届いていなかった。」",
						"chinese": "“然而那条路……依旧无处可达。”",
						"french": "Mais ce chemin... ne menait toujours nulle part.",
						"spanish": "Pero ese camino... seguía sin llevar a ninguna parte.",
						"vietnamese": "Tuy nhiên con đường đó... vẫn không dẫn đến đâu cả.",
						"thai": "แต่เส้นทางนั้น... ก็ยังคงไม่ไปถึงที่ใดเลย",
						"hindi": "लेकिन वह रास्ता... अभी भी कहीं नहीं पहुंच रहा था।"
					}
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "더 깊이 들어왔군. 이 헤맴의 끝을 보려 하는가?",
						"english": "You've come deeper. Do you intend to see the end of this wandering?",
						"japanese": "さらに深く踏み込んだな。この彷徨の終わりを見届けようとするか？",
						"chinese": "你深入了。想看到这迷途的尽头吗？",
						"french": "Tu es entré plus profondément. Cherches-tu à voir la fin de cette errance ?",
						"spanish": "Has entrado más profundo. ¿Intentas ver el final de este deambular?",
						"vietnamese": "Ngươi đã tiến sâu hơn rồi. Ngươi muốn thấy kết thúc của sự lang thang này sao?",
						"thai": "เจ้าเข้ามาลึกกว่าเดิม คิดจะเห็นจุดจบของการหลงทางนี้หรือ?",
						"hindi": "तुम और गहरे आ गए हो। क्या इस भटकन का अंत देखना चाहते हो?"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "당신의 업보를 끝내주겠다.",
						"english": "I will end your karma.",
						"japanese": "貴様の業を終わらせてやる。",
						"chinese": "我将终结你的业障。",
						"french": "Je mettrai fin à ton karma.",
						"spanish": "Terminaré con tu karma.",
						"vietnamese": "Ta sẽ chấm dứt nghiệp chướng của ngươi.",
						"thai": "ข้าจะยุติกรรมของเจ้า",
						"hindi": "मैं तुम्हारे कर्मों का अंत कर दूँगा।"
					}
				},
				{
					"content": {
						"korean": "업보? 나는 그저… 내 임무를 이행할 뿐.",
						"english": "Karma? I merely… fulfill my duty.",
						"japanese": "業？私はただ…己の任務を果たすだけだ。",
						"chinese": "业障？我只是…履行我的职责罢了。",
						"french": "Karma ? Je ne fais que… remplir mon devoir.",
						"spanish": "¿Karma? Yo solo… cumplo con mi deber.",
						"vietnamese": "Nghiệp chướng? Ta chỉ… thực hiện nhiệm vụ của mình mà thôi.",
						"thai": "กรรมรึ? ข้าเพียงแค่… ทำตามหน้าที่ของข้าเท่านั้น",
						"hindi": "कर्म? मैं तो बस… अपना कर्तव्य निभा रहा हूँ।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "eira",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						1,
						2
					]
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "\"끝없는 유언에 묶인 영혼이여… 이제 놓아줄 때다.\"",
						"english": "\"Soul bound by an endless testament… It is time to let go now.\"",
						"japanese": "「終わりなき遺言に縛られし魂よ… 今こそ解き放たれる時だ。」",
						"chinese": "“被无尽遗言束缚的灵魂啊… 现在是时候放手了。”",
						"french": "« Âme liée à un testament sans fin… Il est temps de te libérer. »",
						"spanish": "«Alma atada a un testamento interminable… Es hora de dejar ir.»",
						"vietnamese": "“Linh hồn bị ràng buộc bởi di ngôn bất tận… Đã đến lúc buông bỏ rồi.”",
						"thai": "“วิญญาณที่ถูกผูกมัดด้วยพินัยกรรมอันไม่สิ้นสุด… ถึงเวลาปลดปล่อยแล้ว”",
						"hindi": "“अनंत वसीयत से बंधी आत्मा… अब मुक्त होने का समय है।”"
					}
				},
				{
					"content": {
						"korean": "건방진! 네놈에게서도 잊힌 흔적을 보았다.",
						"english": "Arrogant! I've seen forgotten traces even in you.",
						"japanese": "生意気な！貴様の中にも、忘れ去られた痕跡を見たぞ。",
						"chinese": "狂妄！我甚至在你身上看到了被遗忘的痕迹。",
						"french": "Insolent ! J'ai vu des traces oubliées même en toi.",
						"spanish": "¡Insolente! También he visto rastros olvidados en ti.",
						"vietnamese": "Kiêu ngạo! Ta đã thấy những dấu vết bị lãng quên ngay cả trong ngươi.",
						"thai": "อวดดี! ข้าเห็นร่องรอยที่ถูกลืมเลือนแม้กระทั่งในตัวเจ้า",
						"hindi": "घमंडी! मैंने तुम में भी भूले हुए निशान देखे हैं।"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"겹겹이 패인 얼음, 끝없이 맴도는 원형의 자취.",
			"검은 그림자는 수천 년을 이곳에 갇혔다.",
			"그가 찾던 어둠은 어디에도 없었고, 검은 돌아갈 곳을 잃었다.",
			"그 길을 따라가면, 닿지 못하는 진실이 드러난다."
		],
		"english": [
			"Layered ice, an endless swirling circular trace.",
			"The black shadow was trapped here for millennia.",
			"The darkness he sought was nowhere, and the sword lost its way back.",
			"Follow that path, and an unattainable truth will be revealed."
		],
		"japanese": [
			"幾重にも刻まれた氷、無限に渦巻く円形の痕跡。",
			"黒い影は数千年もここに閉じ込められていた。",
			"彼が求めた闇はどこにもなく、剣は帰り道を失った。",
			"その道をたどれば、届かぬ真実が明らかになる。"
		],
		"chinese": [
			"层层刻蚀的冰层，无尽盘旋的圆形轨迹。",
			"黑色身影在此被困了数千年。",
			"他所寻的黑暗无处可寻，而剑也失去了归途。",
			"沿着那条路走，无法触及的真相便会显现。"
		],
		"french": [
			"Glace stratifiée, trace circulaire tourbillonnante sans fin.",
			"L'ombre noire fut piégée ici pendant des millénaires.",
			"L'obscurité qu'il cherchait n'était nulle part, et l'épée perdit son chemin du retour.",
			"Suivez ce chemin, et une vérité inatteignable se révélera."
		],
		"spanish": [
			"Hielo en capas, una huella circular que gira sin fin.",
			"La sombra negra estuvo atrapada aquí por milenios.",
			"La oscuridad que buscaba no estaba en ninguna parte, y la espada perdió su camino de regreso.",
			"Sigue ese camino, y una verdad inalcanzable se revelará."
		],
		"vietnamese": [
			"Băng xếp lớp, vết tích hình tròn xoáy không ngừng.",
			"Bóng đen bị giam cầm ở đây hàng thiên niên kỷ.",
			"Bóng tối hắn tìm kiếm không ở đâu cả, và thanh kiếm mất đường về.",
			"Theo con đường đó, một sự thật không thể chạm tới sẽ được hé lộ."
		],
		"thai": [
			"น้ำแข็งที่ซ้อนทับกัน ร่องรอยวงกลมที่หมุนวนไม่รู้จบ",
			"เงาดำถูกขังอยู่ที่นี่มานานนับพันปี",
			"ความมืดที่เขาค้นหาไม่มีที่ใด และดาบก็สูญเสียทางกลับ",
			"ถ้าเดินตามทางนั้น ความจริงที่เอื้อมไม่ถึงจะถูกเปิดเผย"
		],
		"hindi": [
			"जमी हुई बर्फ की परतें, एक अंतहीन घूमती हुई वृत्ताकार निशानी।",
			"काली छाया हज़ारों सालों से यहीं फँसी हुई थी।",
			"वह जिस अंधेरे की तलाश में था, वह कहीं नहीं था, और तलवार अपना रास्ता भूल गई।",
			"उस रास्ते पर चलो, और एक अप्राप्य सत्य प्रकट होगा।"
		]
	}
} as const;
