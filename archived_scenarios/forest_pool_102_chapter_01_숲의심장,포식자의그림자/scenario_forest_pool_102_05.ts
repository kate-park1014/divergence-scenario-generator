export const scenario_forest_pool_102_05 = {
	"scenario_id": "forest_pool_102_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "forest",
	"actors": {
		"ela": {
			"id": "mon_24765cb2-6fc0-452e-8969-871a82349c70",
			"name": {
				"korean": "엘라",
				"english": "Ela",
				"japanese": "エラ",
				"chinese": "艾拉",
				"french": "Ela",
				"spanish": "Ela",
				"vietnamese": "Ela",
				"thai": "เอล่า",
				"hindi": "एला"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/55d3e9ee-c589-40ab-dfa4-a658bbddd400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/cfacc842-115e-4175-a7fa-3111a468ed00/public"
		}
	},
	"boss": {
		"pool_id": "pool_102"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "숲의 심장부에 다다랐다. 고동치는 생명의 근원.",
						"english": "Reached the forest's heart. The pulsating source of life.",
						"japanese": "森の心臓部にたどり着いた。鼓動する生命の源。",
						"chinese": "抵达了森林之心。跳动着的生命之源。",
						"french": "Atteint le cœur de la forêt. La source de vie palpitante.",
						"spanish": "Alcanzado el corazón del bosque. La fuente pulsante de vida.",
						"vietnamese": "Đã đến trái tim của rừng. Nguồn sống đang đập.",
						"thai": "ถึงใจกลางป่า ต้นกำเนิดชีวิตที่เต้นเป็นจังหวะ",
						"hindi": "जंगल के हृदय तक पहुँच गया। जीवन का स्पंदित स्रोत।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "이게… 숲의 핵?",
						"english": "This... the heart of the forest?",
						"japanese": "「これが…森の核？」",
						"chinese": "“这是…森林的核心？”",
						"french": "« C'est… le cœur de la forêt ? »",
						"spanish": "¿Esto... el núcleo del bosque?",
						"vietnamese": "Đây là... lõi của khu rừng?",
						"thai": "นี่คือ...แก่นกลางของป่า?",
						"hindi": "यह... जंगल का हृदय?"
					},
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"speaker": "ela",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "ela",
					"content": {
						"korean": "그래. 모든 것이 시작되고, 끝나는 곳.",
						"english": "Indeed. Where all begins and ends.",
						"japanese": "「そうだ。全てが始まり、終わる場所。」",
						"chinese": "“没错。一切开始，也一切终结之地。”",
						"french": "« En effet. Là où tout commence et finit. »",
						"spanish": "Así es. Donde todo empieza y termina.",
						"vietnamese": "Đúng vậy. Nơi mọi thứ bắt đầu và kết thúc.",
						"thai": "ใช่แล้ว. ที่ที่ทุกสิ่งเริ่มต้นและสิ้นสุด.",
						"hindi": "हाँ। जहाँ सब कुछ शुरू होता है और समाप्त होता है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "ela",
					"content": {
						"korean": "너희의 여정도, 여기서 종착역을 맞이할 거야.",
						"english": "Your journey too, will find its end here.",
						"japanese": "「お前たちの旅も、ここで終着駅を迎えるだろう。」",
						"chinese": "“你们的旅程，也将在此迎来终点。”",
						"french": "« Votre voyage aussi, trouvera son terminus ici. »",
						"spanish": "Vuestro viaje también, llegará a su fin aquí.",
						"vietnamese": "Hành trình của các ngươi cũng sẽ kết thúc tại đây.",
						"thai": "การเดินทางของพวกเจ้า ก็จะถึงจุดสิ้นสุดที่นี่.",
						"hindi": "तुम्हारी यात्रा भी, यहीं पर समाप्त होगी।"
					},
					"emotion": "base",
					"type": "speech"
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
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ela",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "숲이 비명을 질러. 무슨 짓을 하는 거야?",
						"english": "The forest is screaming. What are you doing?",
						"japanese": "「森が悲鳴を上げている。何をしているんだ？」",
						"chinese": "“森林在尖叫。你在做什么？”",
						"french": "« La forêt hurle. Qu'êtes-vous en train de faire ? »",
						"spanish": "El bosque está gritando. ¿Qué estás haciendo?",
						"vietnamese": "Khu rừng đang kêu gào. Ngươi đang làm gì vậy?",
						"thai": "ป่ากำลังกรีดร้อง. เจ้ากำลังทำอะไรอยู่?",
						"hindi": "जंगल चिल्ला रहा है। तुम क्या कर रहे हो?"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "비명? 아아, 이건 새로운 시작을 위한 진통.",
						"english": "Screaming? Ah, no, this is labor pains for a new beginning.",
						"japanese": "「悲鳴？ああ、これは新しい始まりのための陣痛だ。」",
						"chinese": "“尖叫？啊，不，这是新开始的阵痛。”",
						"french": "« Des hurlements ? Ah non, ce sont les douleurs de l'enfantement pour un nouveau départ. »",
						"spanish": "¿Gritos? Ah, no, esto es el dolor de parto para un nuevo comienzo.",
						"vietnamese": "Kêu gào? À, không, đây là cơn đau chuyển dạ cho một khởi đầu mới.",
						"thai": "กรีดร้อง? อ้อ, ไม่, นี่คือความเจ็บปวดของการเริ่มต้นใหม่.",
						"hindi": "चीखना? आह, नहीं, यह एक नई शुरुआत के लिए प्रसव पीड़ा है।"
					},
					"speaker": "ela",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "루드라 님은 이 숲을 통해 고향으로 돌아가실 거야.",
						"english": "Lord Rudra will return home through this forest.",
						"japanese": "「ルドラ様はこの森を通じて故郷へお帰りになる。」",
						"chinese": "“鲁德拉大人将通过这片森林回到故乡。”",
						"french": "« Le Seigneur Rudra retournera chez lui à travers cette forêt. »",
						"spanish": "Lord Rudra regresará a casa a través de este bosque.",
						"vietnamese": "Chúa tể Rudra sẽ trở về quê hương thông qua khu rừng này.",
						"thai": "ท่านรูดราจะกลับบ้านผ่านป่านี้.",
						"hindi": "भगवान रुद्र इस जंगल के माध्यम से घर लौटेंगे।"
					},
					"speaker": "ela",
					"emotion": "happy"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네가… 루드라의 조력자였다고?",
						"english": "You... were Rudra's accomplice?",
						"japanese": "「お前が…ルドラの協力者だったと？」",
						"chinese": "“你…是鲁德拉的帮凶？”",
						"french": "« Toi… tu étais l'aide de Rudra ? »",
						"spanish": "¿Tú... eras el cómplice de Rudra?",
						"vietnamese": "Ngươi... là đồng bọn của Rudra sao?",
						"thai": "เจ้า...เป็นผู้ช่วยของรูดรา?",
						"hindi": "तुम... रुद्र के साथी थे?"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ela",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "내 고향도 잃었어. 루드라 님만이 유일한 희망이지.",
						"english": "I lost my home too. Lord Rudra is my only hope.",
						"japanese": "「私も故郷を失った。ルドラ様だけが唯一の希望だ。」",
						"chinese": "“我也失去了故乡。鲁德拉大人是唯一的希望。”",
						"french": "« J'ai aussi perdu ma maison. Le Seigneur Rudra est mon seul espoir. »",
						"spanish": "Yo también perdí mi hogar. Lord Rudra es mi única esperanza.",
						"vietnamese": "Tôi cũng đã mất quê hương. Chúa tể Rudra là hy vọng duy nhất của tôi.",
						"thai": "ฉันก็สูญเสียบ้านเกิด. ท่านรูดราคือความหวังเดียวของฉัน.",
						"hindi": "मैंने भी अपना घर खो दिया। भगवान रुद्र ही मेरी एकमात्र आशा हैं।"
					},
					"speaker": "ela"
				},
				{
					"content": {
						"korean": "그게 이 숲을 파괴해도 괜찮다는 뜻이야?",
						"english": "Does that mean it's okay to destroy this forest?",
						"japanese": "「それがこの森を破壊してもいいという意味か？」",
						"chinese": "“这意味着可以破坏这片森林吗？”",
						"french": "« Est-ce que cela signifie qu'il est acceptable de détruire cette forêt ? »",
						"spanish": "¿Significa eso que está bien destruir este bosque?",
						"vietnamese": "Điều đó có nghĩa là ngươi được phép phá hủy khu rừng này sao?",
						"thai": "นั่นหมายความว่าเจ้าทำลายป่านี้ได้งั้นเหรอ?",
						"hindi": "क्या इसका मतलब है कि इस जंगल को नष्ट करना ठीक है?"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 숲은 그저 수단일 뿐. 너희 세계는 중요하지 않아.",
						"english": "This forest is merely a means. Your world doesn't matter.",
						"japanese": "「この森はただの手段に過ぎない。お前たちの世界は重要ではない。」",
						"chinese": "“这片森林只是一个手段。你们的世界不重要。”",
						"french": "« Cette forêt n'est qu'un moyen. Votre monde n'a pas d'importance. »",
						"spanish": "Este bosque es solo un medio. Vuestro mundo no importa.",
						"vietnamese": "Khu rừng này chỉ là một phương tiện. Thế giới của các ngươi không quan trọng.",
						"thai": "ป่านี้เป็นเพียงแค่เครื่องมือ. โลกของพวกเจ้าไม่สำคัญ.",
						"hindi": "यह जंगल केवल एक साधन है। तुम्हारी दुनिया मायने नहीं रखती।"
					},
					"speaker": "ela",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "숲의 핵에서 불길한 에너지가 뿜어져 나왔다.",
						"english": "Sinister energy erupted from the Forest's Core.",
						"japanese": "森の核から不吉なエネルギーが噴き出した。",
						"chinese": "不祥的能量从森林之核喷涌而出。",
						"french": "Une énergie sinistre a jailli du Cœur de la Forêt.",
						"spanish": "Una energía siniestra brotó del Núcleo del Bosque.",
						"vietnamese": "Năng lượng tà ác bùng phát từ Lõi Rừng.",
						"thai": "พลังงานลึกลับปะทุออกมาจากแก่นป่า.",
						"hindi": "वन के केंद्र से अशुभ ऊर्जा निकली।"
					},
					"speaker": "narrator",
					"type": "speech"
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
					"duration_ms": 500,
					"speaker": "ela",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "ela",
					"content": {
						"korean": "더 이상 방해하지 마. 돌이킬 수 없어.",
						"english": "No more interruptions. It's irreversible.",
						"japanese": "もう邪魔をするな。もう後戻りはできない。",
						"chinese": "别再打扰了。已无法挽回。",
						"french": "Plus d'interruptions. C'est irréversible.",
						"spanish": "No más interrupciones. Es irreversible.",
						"vietnamese": "Đừng cản nữa. Không thể đảo ngược được.",
						"thai": "อย่าขัดขวางอีกเลย มันแก้ไขไม่ได้แล้ว.",
						"hindi": "अब और दखलंदाज़ी मत करो। यह अटल है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "우리가 멈출 거야.",
						"english": "We'll stop you.",
						"japanese": "私たちが止める。",
						"chinese": "我们会阻止你。",
						"french": "Nous t'arrêterons.",
						"spanish": "Te detendremos.",
						"vietnamese": "Chúng ta sẽ ngăn ngươi.",
						"thai": "เราจะหยุดแกเอง.",
						"hindi": "हम तुम्हें रोकेंगे।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "ela",
					"content": {
						"korean": "어리석은 것들. 루드라 님의 계획은 막을 수 없어!",
						"english": "Fools. Lord Rudra's plan cannot be stopped!",
						"japanese": "愚かな者たちめ。ルドラ様の計画は止められぬ！",
						"chinese": "愚蠢的东西。鲁德拉大人的计划是无法阻止的！",
						"french": "Fous. Le plan de Seigneur Rudra est imparable !",
						"spanish": "Necios. ¡El plan de Lord Rudra es imparable!",
						"vietnamese": "Bọn ngu ngốc. Kế hoạch của Lãnh chúa Rudra không thể bị ngăn cản!",
						"thai": "พวกโง่เง่า แผนการของท่านรุทราไม่มีใครหยุดได้!",
						"hindi": "मूर्खों। भगवान रुद्र की योजना रोकी नहीं जा सकती!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "exit",
					"speaker": "ela",
					"direction": "up"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "숲의 심장이 광기 어린 속도로 고동치기 시작했다.",
						"english": "The Forest's Heart began to beat with maddening speed.",
						"japanese": "森の心臓が狂気じみた速さで鼓動し始めた。",
						"chinese": "森林之心开始以疯狂的速度跳动。",
						"french": "Le Cœur de la Forêt commença à battre à une vitesse folle.",
						"spanish": "El Corazón del Bosque comenzó a latir a una velocidad enloquecedora.",
						"vietnamese": "Trái tim Rừng bắt đầu đập với tốc độ điên cuồng.",
						"thai": "หัวใจของป่าเริ่มเต้นด้วยความเร็วที่บ้าคลั่ง.",
						"hindi": "वन का हृदय पागलपन भरी गति से धड़कने लगा।"
					},
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "boss",
					"content": {
						"korean": "크윽… 내 고향은… 결국…",
						"english": "Ugh... My homeland... In the end...",
						"japanese": "くっ…私の故郷は…結局…",
						"chinese": "呃…我的故乡…终究…",
						"french": "Ugh... Ma patrie... Finalement...",
						"spanish": "Ugh... Mi hogar... Al final...",
						"vietnamese": "Khụ... Quê hương ta... Cuối cùng...",
						"thai": "อึก... บ้านเกิดของข้า... สุดท้ายก็...",
						"hindi": "उफ़... मेरी मातृभूमि... अंत में..."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이것으로… 끝이 아니야… 다른 차원에도… 흔적이 남아있을 거다…",
						"english": "This isn't... the end... Traces will remain... in other dimensions...",
						"japanese": "これで…終わりじゃない…別の次元にも…痕跡が残っているはず…",
						"chinese": "这…不是结束…其他次元里…也会留下痕迹…",
						"french": "Ce n'est pas... la fin... Des traces subsisteront... dans d'autres dimensions...",
						"spanish": "Esto no es... el final... Habrá rastros... en otras dimensiones...",
						"vietnamese": "Đây… không phải là kết thúc… Dấu vết sẽ còn lại… ở các chiều không gian khác…",
						"thai": "นี่ไม่ใช่... จุดจบ... ร่องรอยจะยังคงอยู่... ในมิติอื่น...",
						"hindi": "यह... अंत नहीं है... दूसरे आयामों में भी... निशान बाकी रहेंगे..."
					},
					"speaker": "boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 숲은… 구원받은 걸까…?",
						"english": "Was this forest... truly saved...?",
						"japanese": "この森は…救われたのだろうか…？",
						"chinese": "这片森林…真的被拯救了吗…？",
						"french": "Cette forêt... a-t-elle été vraiment sauvée...?",
						"spanish": "¿Este bosque... fue realmente salvado...?",
						"vietnamese": "Khu rừng này… liệu có được cứu rỗi…?",
						"thai": "ป่านี้... ได้รับการช่วยให้รอดแล้วหรือ...?",
						"hindi": "क्या यह जंगल... वास्तव में बच गया...?"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "ela",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "ela",
					"content": {
						"korean": "…루드라 님… 나는… 무엇을 위해…",
						"english": "...Lord Rudra... For what... did I...?",
						"japanese": "…ルドラ様…私は…何のために…",
						"chinese": "…鲁德拉大人…我…是为了什么…",
						"french": "...Seigneur Rudra... Pour quoi... ai-je...?",
						"spanish": "...Señor Rudra... Yo... ¿para qué...?",
						"vietnamese": "...Thưa Rudra... Ta... vì điều gì...?",
						"thai": "...ท่านรุดรา... ข้า... เพื่ออะไรกันแน่...",
						"hindi": "...भगवान रुद्र... मैंने... किसके लिए...?"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "숲은 서서히 생기를 되찾았지만, 깊은 상처는 쉬이 아물지 않았다.",
						"english": "The forest slowly regained its vitality, but its deep wounds did not heal easily.",
						"japanese": "森は徐々に生気を取り戻したが、深い傷は容易には癒えなかった。",
						"chinese": "森林慢慢恢复了生机，但其深重的创伤并未轻易愈合。",
						"french": "La forêt retrouva lentement sa vitalité, mais ses profondes blessures ne guérirent pas facilement.",
						"spanish": "El bosque recuperó lentamente su vitalidad, pero sus profundas heridas no sanaron fácilmente.",
						"vietnamese": "Khu rừng từ từ lấy lại sức sống, nhưng những vết thương sâu sắc của nó không dễ lành.",
						"thai": "ป่าค่อยๆ ฟื้นคืนชีวิตชีวา แต่บาดแผลลึกยังคงรักษาได้ไม่ง่าย",
						"hindi": "जंगल ने धीरे-धीरे अपनी जान वापस पाई, लेकिन उसके गहरे घाव आसानी से नहीं भरे।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "다른 차원의 흔적… 또 다른 파멸의 씨앗이 남아있는가.",
						"english": "Traces from other dimensions... Are there still seeds of another destruction?",
						"japanese": "別の次元の痕跡…また別の破滅の種が残っているのか。",
						"chinese": "其他次元的痕迹…还有另一场毁灭的种子残留吗？",
						"french": "Des traces d'autres dimensions... Des graines d'une autre destruction subsistent-elles ?",
						"spanish": "Rastros de otras dimensiones... ¿Quedan semillas de otra destrucción?",
						"vietnamese": "Dấu vết từ các chiều không gian khác… liệu có còn hạt giống của một sự hủy diệt khác?",
						"thai": "ร่องรอยจากมิติอื่น... เมล็ดพันธุ์แห่งการทำลายล้างอีกครั้งยังคงอยู่หรือ?",
						"hindi": "अन्य आयामों के निशान... क्या विनाश के और बीज बाकी हैं?"
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "boss",
					"content": {
						"korean": "어리석은 것들. 너희는 그저 나의 고향을 위한 제물일 뿐.",
						"english": "Fools. You are merely sacrifices for my homeland.",
						"japanese": "愚かな者たち。お前たちは、ただ私の故郷のための生贄に過ぎない。",
						"chinese": "愚蠢的东西。你们不过是我故乡的祭品而已。",
						"french": "Fous. Vous n'êtes que des sacrifices pour ma patrie.",
						"spanish": "Tontos. Solo sois sacrificios para mi hogar.",
						"vietnamese": "Những kẻ ngu ngốc. Các ngươi chỉ là vật tế cho quê hương ta.",
						"thai": "พวกโง่เง่า! พวกเจ้าเป็นเพียงแค่เครื่องสังเวยสำหรับบ้านเกิดของข้าเท่านั้น",
						"hindi": "मूर्खों। तुम बस मेरी मातृभूमि के लिए बलिदान हो।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "이 숲은… 결국 나의 것이 된다.",
						"english": "This forest... will eventually be mine.",
						"japanese": "この森は…結局私のものになる。",
						"chinese": "这片森林……最终将属于我。",
						"french": "Cette forêt... finira par être mienne.",
						"spanish": "Este bosque... finalmente será mío.",
						"vietnamese": "Khu rừng này... cuối cùng sẽ thuộc về ta.",
						"thai": "ป่านี้... ในที่สุดก็จะกลายเป็นของฉัน",
						"hindi": "यह जंगल… अंततः मेरा ही होगा।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not... over yet!",
						"japanese": "まだ…終わってない！",
						"chinese": "还没……结束！",
						"french": "Ce n'est pas... encore fini !",
						"spanish": "¡Aún no... ha terminado!",
						"vietnamese": "Vẫn chưa... kết thúc!",
						"thai": "ยัง... ไม่จบ!",
						"hindi": "अभी… खत्म नहीं हुआ!"
					},
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "숲의 심장부, 거대한 생명의 핵이 눈앞에 드러났다.",
						"english": "The heart of the forest, a colossal core of life, was revealed.",
						"japanese": "森の心臓部、巨大な生命の核が目の前に現れた。",
						"chinese": "森林的中心，一个巨大的生命之核展现在眼前。",
						"french": "Le cœur de la forêt, un noyau de vie colossal, fut révélé.",
						"spanish": "El corazón del bosque, un colosal núcleo de vida, se reveló.",
						"vietnamese": "Trái tim của khu rừng, một lõi sự sống khổng lồ, đã hiện ra.",
						"thai": "แก่นกลางของป่า แก่นแท้แห่งชีวิตอันมหึมาปรากฏขึ้นตรงหน้า.",
						"hindi": "वन का हृदय, एक विशाल जीवन का केंद्र, आँखों के सामने प्रकट हुआ।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "왔구나, 어리석은 탐험가들.",
						"english": "So, you've arrived, foolish explorers.",
						"japanese": "来たな、愚かな探検家たちよ。",
						"chinese": "你们来了，愚蠢的探险者。",
						"french": "Vous êtes arrivés, explorateurs insensés.",
						"spanish": "Así que habéis llegado, exploradores necios.",
						"vietnamese": "Cuối cùng thì ngươi cũng đến, những kẻ thám hiểm ngu ngốc.",
						"thai": "ในที่สุดพวกเจ้าก็มาถึงแล้ว เหล่านักสำรวจโง่เขลา.",
						"hindi": "तो, तुम आ गए, मूर्ख खोजकर्ताओ।"
					},
					"speaker": "boss",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "루드라 비라가 손에 든 기묘한 유물을 숲의 핵에 박아 넣었다.",
						"english": "Rudra Vira plunged a strange artifact held in her hand into the Forest's Core.",
						"japanese": "ルドラ・ヴィラは手に持った奇妙な遺物を森の核に突き刺した。",
						"chinese": "鲁德拉·维拉将手中奇特的文物插入了森林之核。",
						"french": "Rudra Vira enfonça un étrange artefact qu'elle tenait dans la main dans le Cœur de la Forêt.",
						"spanish": "Rudra Vira clavó un extraño artefacto que sostenía en la mano en el Núcleo del Bosque.",
						"vietnamese": "Rudra Vira cắm một cổ vật kỳ lạ đang cầm trên tay vào Lõi Rừng.",
						"thai": "รุทรา วีร่า ปักวัตถุโบราณประหลาดในมือลงในแก่นป่า.",
						"hindi": "रुद्र वीरा ने अपने हाथ में पकड़ी एक अजीब कलाकृति को वन के केंद्र में डाल दिया।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "boss",
					"content": {
						"korean": "이 '성스러운 숲'은 나의 탈출을 위한 연료일 뿐이다.",
						"english": "This 'sacred forest' is merely fuel for my escape.",
						"japanese": "この『聖なる森』は、私の脱出のための燃料に過ぎない。",
						"chinese": "这‘神圣森林’不过是我逃脱的燃料罢了。",
						"french": "Cette 'forêt sacrée' n'est que le carburant de mon évasion.",
						"spanish": "Este 'bosque sagrado' es solo combustible para mi escape.",
						"vietnamese": "Cái 'khu rừng thiêng liêng' này chỉ là nhiên liệu cho sự thoát thân của ta thôi.",
						"thai": " 'ป่าศักดิ์สิทธิ์' นี้เป็นเพียงเชื้อเพลิงสำหรับการหลบหนีของข้า.",
						"hindi": "यह 'पवित्र वन' मेरे पलायन के लिए केवल ईंधन है।"
					}
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "너희 세계의 종말은 아마조니아의 생존에 비하면 작은 대가에 불과하다!",
						"english": "The end of your world is a small price for Amazonia's survival!",
						"japanese": "お前たちの世界の終焉は、アマゾニアの生存に比べれば些細な代償に過ぎない！",
						"chinese": "你们世界的终结，与亚马逊尼亚的生存相比，不过是微不足道的代价！",
						"french": "La fin de votre monde n'est qu'un prix minime pour la survie d'Amazonia !",
						"spanish": "¡El fin de vuestro mundo es un precio pequeño por la supervivencia de Amazonia!",
						"vietnamese": "Sự diệt vong của thế giới các ngươi chỉ là một cái giá nhỏ bé so với sự sống còn của Amazonia!",
						"thai": "จุดจบของโลกพวกเจ้าเป็นเพียงราคาเล็กน้อยเพื่อความอยู่รอดของอเมซอนเนีย!",
						"hindi": "तुम्हारी दुनिया का अंत अमेज़ोनिया के अस्तित्व के लिए एक छोटी सी कीमत है!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "말도 안 돼… 이 숲을 파괴할 셈이었어?",
						"english": "Unbelievable... You intended to destroy this forest?",
						"japanese": "信じられない…この森を破壊するつもりだったの？",
						"chinese": "简直胡闹…你竟想摧毁这片森林？",
						"french": "Incroyable... Vous comptiez détruire cette forêt ?",
						"spanish": "¿Increíble... Planeabas destruir este bosque?",
						"vietnamese": "Không thể tin được... Ngươi định hủy diệt khu rừng này sao?",
						"thai": "ไม่จริงน่า... แกตั้งใจจะทำลายป่านี้หรือ?",
						"hindi": "अविश्वसनीय... क्या तुम इस जंगल को नष्ट करने वाले थे?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "숲은 비명을 지르며 시들고 붕괴하기 시작했다.",
						"english": "The forest screamed, withered, and began to collapse.",
						"japanese": "森は悲鳴を上げ、枯れ果て、崩壊し始めた。",
						"chinese": "森林尖叫着，枯萎并开始崩塌。",
						"french": "La forêt hurla, se flétrit et commença à s'effondrer.",
						"spanish": "El bosque gritó, se marchitó y comenzó a colapsar.",
						"vietnamese": "Khu rừng gào thét, héo tàn và bắt đầu sụp đổ.",
						"thai": "ป่ากรีดร้อง เหี่ยวเฉา และเริ่มพังทลายลง",
						"hindi": "जंगल चीखने लगा, मुरझा गया और ढहना शुरू हो गया।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "절대 용납 못 해!",
						"english": "I won't allow it!",
						"japanese": "絶対に許さない！",
						"chinese": "绝不容忍！",
						"french": "Jamais je ne l'accepterai !",
						"spanish": "¡Jamás lo permitiré!",
						"vietnamese": "Tuyệt đối không thể chấp nhận!",
						"thai": "ไม่มีทางยอมรับ!",
						"hindi": "यह बर्दाश्त नहीं किया जाएगा!"
					},
					"type": "speech"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"숲의 비명은 멎었다. 그러나 고요함 속에 깊은 상처가 남았다.",
			"루드라 비라의 광기는 끝났지만, 그의 절박함은 또 다른 씨앗을 뿌렸다.",
			"엘라는 어디론가 사라졌다. 죄책감, 혹은 새로운 희망을 찾아.",
			"숲은 다시 숨 쉬기 시작했지만, 그 침묵은 영원한 상실을 암시했다.",
			"구원인가, 침해인가. 그 경계는 여전히 모호했다."
		],
		"english": [
			"The forest's screams ceased. Yet, deep wounds remained in the quiet.",
			"Ludra Vira's madness ended, but his desperation sowed other seeds.",
			"Ella vanished somewhere. Seeking guilt, or new hope.",
			"The forest began to breathe again, but its silence hinted at eternal loss.",
			"Salvation or transgression? The line remained blurred."
		],
		"japanese": [
			"森の悲鳴は止んだ。しかし、静寂の中に深い傷跡が残った。",
			"ルドラ・ヴィラの狂気は終わったが、彼の絶望は新たな種を蒔いた。",
			"エラはどこかへ消えた。罪悪感を、あるいは新たな希望を探して。",
			"森は再び息をし始めたが、その沈黙は永遠の喪失を暗示していた。",
			"救済か、それとも侵犯か。その境界は依然として曖昧だった。"
		],
		"chinese": [
			"森林的尖叫声平息了。然而，寂静中留下了深深的伤痕。",
			"鲁德拉·维拉的疯狂结束了，但他的绝望又播下了新的种子。",
			"埃拉不知所踪。是为寻求罪恶感，还是为了新的希望。",
			"森林再次开始呼吸，但它的沉默暗示着永恒的失落。",
			"救赎还是侵犯？界限依然模糊。"
		],
		"french": [
			"Les cris de la forêt se sont tus. Pourtant, de profondes cicatrices sont restées dans le silence.",
			"La folie de Ludra Vira a pris fin, mais son désespoir a semé d'autres graines.",
			"Ella a disparu quelque part. Cherchant la culpabilité, ou un nouvel espoir.",
			"La forêt a recommencé à respirer, mais son silence laissait présager une perte éternelle.",
			"Salut ou transgression ? La frontière restait floue."
		],
		"spanish": [
			"Los gritos del bosque cesaron. Sin embargo, profundas heridas quedaron en la quietud.",
			"La locura de Ludra Vira terminó, pero su desesperación sembró otras semillas.",
			"Ella desapareció en algún lugar. Buscando culpa, o una nueva esperanza.",
			"El bosque comenzó a respirar de nuevo, pero su silencio insinuaba una pérdida eterna.",
			"¿Salvación o transgresión? El límite seguía siendo difuso."
		],
		"vietnamese": [
			"Tiếng thét của rừng đã dừng. Nhưng trong sự yên tĩnh, vết thương sâu vẫn còn.",
			"Sự điên loạn của Ludra Vira đã kết thúc, nhưng sự tuyệt vọng của hắn đã gieo những hạt giống khác.",
			"Ella đã biến mất đâu đó. Tìm kiếm sự tội lỗi, hay một hy vọng mới.",
			"Rừng lại bắt đầu thở, nhưng sự im lặng của nó ám chỉ sự mất mát vĩnh viễn.",
			"Cứu rỗi hay xâm phạm? Ranh giới vẫn còn mơ hồ."
		],
		"thai": [
			"เสียงกรีดร้องของป่าเงียบลง แต่ความเงียบงันซ่อนแผลลึกไว้",
			"ความบ้าคลั่งของลุดรา วีราจบลง แต่ความสิ้นหวังของเขากลับหว่านเมล็ดพันธุ์ใหม่",
			"เอลล่าหายไปที่ใดสักแห่ง ด้วยความรู้สึกผิด หรือความหวังใหม่",
			"ป่าเริ่มหายใจอีกครั้ง แต่ความเงียบงันบอกเป็นนัยถึงการสูญเสียชั่วนิรันดร์",
			"การไถ่บาปหรือการละเมิด? เส้นแบ่งยังคงคลุมเครือ"
		],
		"hindi": [
			"जंगल की चीखें थम गईं। फिर भी, खामोशी में गहरे घाव रह गए।",
			"रुद्र वीरा का पागलपन समाप्त हो गया, लेकिन उसकी हताशा ने और बीज बो दिए।",
			"एला कहीं गायब हो गई। अपराधबोध की तलाश में, या नई उम्मीद की।",
			"जंगल ने फिर से सांस लेना शुरू कर दिया, लेकिन उसकी खामोशी ने शाश्वत नुकसान का संकेत दिया।",
			"मुक्ति या अतिक्रमण? वह सीमा अभी भी अस्पष्ट थी।"
		]
	},
	"prologue": {
		"korean": [
			"숲의 심장부, 그곳에 감춰진 비밀.",
			"믿었던 가이드는, 파멸의 문을 열었다.",
			"모든 차원의 운명이 걸린 마지막 결전.",
			"선택은 너의 몫, 이 숲을 구할 것인가, 아니면 파멸에 동참할 것인가."
		],
		"english": [
			"The forest's heart, a secret hidden within.",
			"The trusted guide, opened the gates of ruin.",
			"The final showdown, destiny of all dimensions at stake.",
			"The choice is yours: save this forest, or join its ruin."
		],
		"japanese": [
			"森の心臓部、そこに隠された秘密。",
			"信じた導き手は、破滅の扉を開いた。",
			"全ての次元の運命がかかった最後の決戦。",
			"選択は君次第、この森を救うか、それとも破滅に加担するか。"
		],
		"chinese": [
			"森林之心，隐藏其中的秘密。",
			"曾信任的向导，却打开了毁灭之门。",
			"关乎所有次元命运的最终决战。",
			"选择权在你：拯救这片森林，还是同归于尽。"
		],
		"french": [
			"Au cœur de la forêt, un secret enfoui.",
			"Le guide de confiance a ouvert les portes de la ruine.",
			"L'affrontement final, le destin de toutes les dimensions en jeu.",
			"Le choix t'appartient : sauver cette forêt, ou prendre part à sa destruction."
		],
		"spanish": [
			"El corazón del bosque, un secreto oculto allí.",
			"El guía de confianza abrió las puertas de la perdición.",
			"El enfrentamiento final, el destino de todas las dimensiones en juego.",
			"La elección es tuya: ¿salvarás este bosque o te unirás a su perdición?"
		],
		"vietnamese": [
			"Trái tim rừng sâu, bí mật ẩn giấu nơi đó.",
			"Người dẫn đường đáng tin, đã mở cánh cửa hủy diệt.",
			"Trận chiến cuối cùng, vận mệnh mọi chiều không gian đang bị đe dọa.",
			"Lựa chọn là của ngươi, cứu khu rừng này, hay tham gia vào sự hủy diệt."
		],
		"thai": [
			"ใจกลางป่า ลับแลที่ซ่อนอยู่",
			"ผู้นำทางที่เชื่อใจ เปิดประตูนรก",
			"ศึกสุดท้าย ชะตาของทุกมิติเป็นเดิมพัน",
			"ทางเลือกเป็นของเจ้า จะช่วยป่านี้ หรือเข้าร่วมความพินาศ"
		],
		"hindi": [
			"जंगल का हृदय, वहाँ छिपा एक रहस्य।",
			"जिस मार्गदर्शक पर विश्वास किया, उसने विनाश के द्वार खोल दिए।",
			"सभी आयामों की नियति का अंतिम निर्णायक युद्ध।",
			"चुनाव तुम्हारा है, क्या इस जंगल को बचाओगे, या विनाश में शामिल होगे?"
		]
	}
} as const;
