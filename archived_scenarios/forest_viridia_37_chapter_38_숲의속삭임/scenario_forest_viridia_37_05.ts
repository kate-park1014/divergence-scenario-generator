export const scenario_forest_viridia_37_05 = {
	"scenario_id": "forest_viridia_37_05",
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
		"pool_id": "pool_Rootbound_Viridia_V1"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "숲의 가장 깊은 곳. 거대한 덩굴이 뒤엉킨 동공이 드러났다.",
						"english": "The deepest part of the forest. A cavern overgrown with giant vines was revealed.",
						"japanese": "森の最も深い場所。巨大な蔓が絡みつく洞窟が現れた。",
						"chinese": "森林最深处。一个被巨大藤蔓缠绕的洞穴显露出来。",
						"french": "La partie la plus profonde de la forêt. Une caverne envahie de lianes géantes fut révélée.",
						"spanish": "La parte más profunda del bosque. Se reveló una caverna enmarañada con enredaderas gigantes.",
						"vietnamese": "Phần sâu nhất của khu rừng. Một hang động bị dây leo khổng lồ bao phủ đã lộ ra.",
						"thai": "ส่วนที่ลึกที่สุดของป่า ถ้ำที่เต็มไปด้วยเถาวัลย์ขนาดใหญ่ถูกเปิดเผย",
						"hindi": "जंगल का सबसे गहरा भाग। विशाल लताओं से घिरी एक गुहा प्रकट हुई।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "ivy",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						2
					]
				},
				{
					"emotion": "base",
					"speaker": "ivy",
					"type": "speech",
					"content": {
						"korean": "여기가… 숲의 심장?",
						"english": "This is... the heart of the forest?",
						"japanese": "ここが… 森の心臓？",
						"chinese": "这里是…森林之心？",
						"french": "C'est... le cœur de la forêt ?",
						"spanish": "¿Aquí es... el corazón del bosque?",
						"vietnamese": "Đây là... trái tim của rừng sao?",
						"thai": "ที่นี่คือ...ใจกลางป่า?",
						"hindi": "यह... जंगल का दिल है?"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "느낌이 이상해. 마치… 모든 것이 빨려 들어갈 것 같아.",
						"english": "I feel strange. Like... everything is being sucked in.",
						"japanese": "妙な感じだ。まるで…全てが吸い込まれていくようだ。",
						"chinese": "感觉很奇怪。就像…一切都要被吸进去一样。",
						"french": "C'est étrange. Comme si... tout était aspiré.",
						"spanish": "Siento algo extraño. Como si... todo fuera a ser absorbido.",
						"vietnamese": "Cảm giác thật lạ. Cứ như... mọi thứ đang bị hút vào.",
						"thai": "รู้สึกแปลกๆ เหมือน...ทุกสิ่งกำลังจะถูกดูดเข้าไป",
						"hindi": "अजीब लग रहा है। जैसे... सब कुछ अंदर खींचा जा रहा हो।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "ivy",
					"content": {
						"korean": "숲의 어머니가 우리를 기다리고 있을 거야. 드디어… 구원을 얻는 건가.",
						"english": "The Mother of the Forest must be waiting for us. Finally... salvation?",
						"japanese": "森の母が私たちを待っているはず。ついに…救われるのか。",
						"chinese": "森林之母一定在等着我们。终于…要得到救赎了吗。",
						"french": "La Mère de la Forêt doit nous attendre. Enfin... le salut ?",
						"spanish": "La Madre del Bosque debe estar esperándonos. ¿Por fin... la salvación?",
						"vietnamese": "Mẹ Rừng chắc đang đợi chúng ta. Cuối cùng... là sự cứu rỗi sao?",
						"thai": "แม่แห่งป่าคงจะรอเราอยู่ ในที่สุด...ก็จะได้พบกับความรอดแล้วสินะ",
						"hindi": "जंगल की माँ हमारा इंतज़ार कर रही होगी। आखिर... क्या हमें मोक्ष मिलेगा?"
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
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ivy"
				},
				{
					"content": {
						"korean": "페른의 상처… 덩굴이 감싸던 모습이 자꾸 생각나.",
						"english": "Fern's wound... I keep remembering the vines wrapping around it.",
						"japanese": "フェルンの傷…蔓が巻き付いていた姿が目に焼き付いている。",
						"chinese": "费恩的伤口…缠绕着藤蔓的样子总在我脑海里浮现。",
						"french": "La blessure de Fern... Je n'arrête pas de revoir les vignes l'envelopper.",
						"spanish": "La herida de Fern... No paro de recordar las enredaderas que la envolvían.",
						"vietnamese": "Vết thương của Fern... Hình ảnh dây leo quấn quanh cứ hiện về.",
						"thai": "บาดแผลของเฟิร์น... ภาพเถาวัลย์ที่รัดรอบมันยังคงติดตา",
						"hindi": "फर्न का घाव... मुझे बार-बार बेलों का उसे लपेटना याद आता है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "ivy"
				},
				{
					"content": {
						"korean": "그때는 치유인 줄 알았지.",
						"english": "Back then, I thought it was healing.",
						"japanese": "あの時は、治癒だと思っていた。",
						"chinese": "那时，我以为那是治愈。",
						"french": "À l'époque, je croyais que c'était une guérison.",
						"spanish": "En ese momento, pensé que era una curación.",
						"vietnamese": "Lúc đó, tôi cứ ngỡ đó là sự chữa lành.",
						"thai": "ตอนนั้นฉันคิดว่ามันคือการเยียวยา",
						"hindi": "तब, मैंने सोचा था कि यह ठीक हो रहा है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "유물에 새겨진 '경고'라는 글자도… 혹시 이것도?",
						"english": "The word 'Warning' engraved on the artifact... Could this be related too?",
						"japanese": "遺物に刻まれた『警告』の文字も…これも関係あるのか？",
						"chinese": "刻在文物上的‘警告’字样…难道这也一样？",
						"french": "Le mot 'Avertissement' gravé sur l'artefact... Serait-ce lié aussi ?",
						"spanish": "La palabra 'Advertencia' grabada en el artefacto... ¿Podría ser esto también?",
						"vietnamese": "Chữ 'Cảnh báo' khắc trên cổ vật... Lẽ nào cái này cũng vậy?",
						"thai": "คำว่า 'คำเตือน' ที่สลักอยู่บนวัตถุโบราณ... หรือว่านี่ก็ด้วย?",
						"hindi": "कलाकृति पर खुदा 'चेतावनी' शब्द भी... क्या यह भी?"
					},
					"emotion": "sad",
					"speaker": "ivy"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "아니야. 숲의 어머니는 우리를 치유해줄 거야.",
						"english": "No. The Mother of the Forest will heal us.",
						"japanese": "いや。森の母が私たちを癒してくれるはずだ。",
						"chinese": "不。森林之母会治愈我们的。",
						"french": "Non. La Mère de la Forêt nous guérira.",
						"spanish": "No. La Madre del Bosque nos curará.",
						"vietnamese": "Không. Mẹ Rừng sẽ chữa lành cho chúng ta.",
						"thai": "ไม่หรอก แม่แห่งป่าจะเยียวยาเรา",
						"hindi": "नहीं। जंगल की माँ हमें ठीक कर देगी।"
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
						2,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "ivy"
				},
				{
					"type": "speech",
					"content": {
						"korean": "멜랑콜리아… 그 섬뜩한 소리 말이야.",
						"english": "Melancholia... that eerie sound, I mean.",
						"japanese": "メランコリア…あの不気味な音のことだ。",
						"chinese": "忧郁症…我是说，那个诡异的声音。",
						"french": "Mélancolie... ce son étrange, je veux dire.",
						"spanish": "Melancolía... ese sonido espeluznante, me refiero.",
						"vietnamese": "Melancholia... ý tôi là cái âm thanh rùng rợn đó.",
						"thai": "ความโศกเศร้า... เสียงน่าขนลุกนั่นน่ะ",
						"hindi": "उदासी... मेरा मतलब है, वह भयानक आवाज़।"
					},
					"emotion": "sad",
					"speaker": "ivy"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "푸르게 빛나던 식물들… 신경망 같았어.",
						"english": "The plants glowing blue... they looked like a neural network.",
						"japanese": "青く光っていた植物たち…まるで神経網のようだった。",
						"chinese": "那些发出蓝色光芒的植物…就像神经网络一样。",
						"french": "Les plantes bleues lumineuses... on aurait dit un réseau neuronal.",
						"spanish": "Las plantas que brillaban en azul... parecían una red neuronal.",
						"vietnamese": "Những loài cây phát sáng màu xanh... chúng trông như một mạng lưới thần kinh.",
						"thai": "พืชที่เรืองแสงสีฟ้า...มันเหมือนเครือข่ายประสาทเลย",
						"hindi": "नीले रंग में चमकते पौधे... वे एक तंत्रिका नेटवर्क की तरह दिखते थे।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "어쩌면 그 소리는… 비명이었을지도 몰라.",
						"english": "Perhaps that sound... was a scream.",
						"japanese": "もしかしたらあの音は…悲鳴だったのかもしれない。",
						"chinese": "也许那个声音…是尖叫声。",
						"french": "Peut-être que ce son... était un cri.",
						"spanish": "Quizás ese sonido... era un grito.",
						"vietnamese": "Có lẽ âm thanh đó... là một tiếng thét.",
						"thai": "บางทีเสียงนั้น... อาจจะเป็นเสียงกรีดร้องก็ได้",
						"hindi": "शायद वह आवाज़... एक चीख थी।"
					},
					"speaker": "ivy",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야.",
						"english": "What are you talking about?",
						"japanese": "何を言ってるんだ。",
						"chinese": "你在说什么？",
						"french": "De quoi tu parles ?",
						"spanish": "¿De qué estás hablando?",
						"vietnamese": "Anh đang nói gì vậy?",
						"thai": "คุณกำลังพูดถึงอะไร",
						"hindi": "क्या बकवास है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ivy",
					"spot": [
						1,
						2
					]
				},
				{
					"speaker": "ivy",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "주인공… 네 꿈에서 본 여전사들… '어머니'라고 속삭이던.",
						"english": "Protagonist... The warrior women from your dream... who whispered \"Mother.\"",
						"japanese": "主人公… お前の夢で見た女戦士たち… 「母」と囁いていた。",
						"chinese": "主角……你梦中见过的女战士们……她们曾低语“母亲”。",
						"french": "Protagoniste... Les femmes guerrières de ton rêve... qui murmuraient \"Mère\".",
						"spanish": "Protagonista... Las guerreras que viste en tus sueños... que susurraban \"Madre\".",
						"vietnamese": "Nhân vật chính... Những nữ chiến binh trong giấc mơ của ngươi... những người đã thì thầm \"Mẹ\".",
						"thai": "ตัวเอก... เหล่านักรบหญิงที่คุณเห็นในฝัน... ผู้กระซิบว่า \"แม่\"",
						"hindi": "नायक... तुम्हारी नींद में देखी हुई वो योद्धा महिलाएँ... जो \"माँ\" फुसफुसा रही थीं।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "그게 왜 지금….",
						"english": "Why now...?",
						"japanese": "なぜ今…",
						"chinese": "为什么是现在……",
						"french": "Pourquoi maintenant...?",
						"spanish": "¿Por qué ahora...?",
						"vietnamese": "Sao lại là bây giờ...?",
						"thai": "ทำไมถึงเป็นตอนนี้...",
						"hindi": "अब यह क्यों...?"
					},
					"type": "speech"
				},
				{
					"speaker": "ivy",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "숲의 어머니가 그들의 영혼을 흡수하고 있었던 게 아닐까?",
						"english": "Could the Mother of the Forest have been absorbing their souls?",
						"japanese": "森の母が彼らの魂を吸収していたのではないだろうか？",
						"chinese": "难道森林之母一直在吸取她们的灵魂？",
						"french": "La Mère de la Forêt n'aurait-elle pas été en train d'absorber leurs âmes ?",
						"spanish": "¿No será que la Madre del Bosque estaba absorbiendo sus almas?",
						"vietnamese": "Không lẽ Mẹ Rừng đã hấp thụ linh hồn của họ?",
						"thai": "หรือว่ามารดาแห่งป่ากำลังดูดซับวิญญาณของพวกเธออยู่?",
						"hindi": "क्या वन की माँ उनकी आत्माओं को सोख रही थी?"
					}
				},
				{
					"content": {
						"korean": "말도 안 돼. 숲의 어머니는 구원자야!",
						"english": "Nonsense! The Mother of the Forest is our savior!",
						"japanese": "馬鹿な。森の母は救い主なんだ！",
						"chinese": "胡说！森林之母是我们的救世主！",
						"french": "Absurde ! La Mère de la Forêt est notre sauveuse !",
						"spanish": "¡Imposible! ¡La Madre del Bosque es nuestra salvadora!",
						"vietnamese": "Vô lý! Mẹ Rừng là Đấng Cứu Rỗi!",
						"thai": "เหลวไหล! มารดาแห่งป่าคือผู้กอบกู้!",
						"hindi": "बकवास! वन की माँ हमारी मुक्तिदाता है!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "ivy",
					"emotion": "sad",
					"content": {
						"korean": "아니, 주인공… 이건….",
						"english": "No, protagonist... This is...",
						"japanese": "いや、主人公… これは…",
						"chinese": "不，主角……这……",
						"french": "Non, protagoniste... C'est...",
						"spanish": "No, protagonista... Esto es...",
						"vietnamese": "Không, nhân vật chính... Đây là...",
						"thai": "ไม่นะ ตัวเอก... นี่มัน...",
						"hindi": "नहीं, नायक... यह..."
					},
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "비리디아의 육신이 찢어졌다. 그 안에서 끔찍한 진실이 드러났다.",
						"english": "Viridia's flesh was torn apart. A terrible truth was revealed within.",
						"japanese": "ヴィリディアの肉体は引き裂かれた。その中から恐ろしい真実が明らかになった。",
						"chinese": "维里迪亚的肉身被撕裂。其中揭示了可怕的真相。",
						"french": "La chair de Viridia fut déchirée. Une terrible vérité fut révélée à l'intérieur.",
						"spanish": "La carne de Viridia fue desgarrada. Una terrible verdad se reveló en su interior.",
						"vietnamese": "Cơ thể của Viridia bị xé toạc. Một sự thật kinh hoàng đã lộ ra bên trong.",
						"thai": "เนื้อหนังของวิริเดียถูกฉีกกระชาก ความจริงอันน่าสะพรึงกลัวถูกเปิดเผยจากภายใน",
						"hindi": "विरिडिया का शरीर फट गया। उसके भीतर एक भयानक सच सामने आया।"
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "sad",
					"content": {
						"korean": "수많은 아마존 전사들의 얼굴들이 일그러진 채 덩어리 속에 박혀 꿈틀거렸다.",
						"english": "Countless faces of Amazon warriors, distorted, wriggled embedded within the mass.",
						"japanese": "無数のアマゾン戦士たちの顔が、歪んだまま塊の中に埋め込まれ、うごめいていた。",
						"chinese": "无数亚马逊女战士的脸扭曲着，嵌在肉块中蠕动。",
						"french": "D'innombrables visages de guerrières amazones, déformés, se tordaient, incrustés dans la masse.",
						"spanish": "Innumerables rostros de guerreras amazonas, distorsionados, se retorcían incrustados en la masa.",
						"vietnamese": "Vô số khuôn mặt của các nữ chiến binh Amazon, méo mó, quằn quại bị kẹt trong khối thịt.",
						"thai": "ใบหน้าของนักรบหญิงอเมซอนนับไม่ถ้วน บิดเบี้ยว บิดตัวอยู่ในก้อนเนื้อนั้น",
						"hindi": "अमेज़ॅन योद्धाओं के अनगिनत चेहरे, विकृत होकर, उस पिंड में धंसे हुए छटपटा रहे थे।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "나의 품에서… 고통도, 슬픔도 없는… 하나가 되어… 흐흐흐….",
						"english": "In my embrace... without pain, without sorrow... becoming one... Hehehe...",
						"japanese": "私の腕の中で…痛みもなく、悲しみもなく…一つとなる…フフフ…。",
						"chinese": "在我的怀抱中……没有痛苦，没有悲伤……合为一体……呵呵呵……",
						"french": "Dans mon étreinte... sans douleur, sans chagrin... ne faisant qu'un... Héhéhé...",
						"spanish": "En mi abrazo... sin dolor, sin tristeza... volviéndose uno... Jejeje...",
						"vietnamese": "Trong vòng tay của ta... không đau đớn, không buồn khổ... trở thành một... Hahaha...",
						"thai": "ในอ้อมแขนของข้า... ไร้ความเจ็บปวด ไร้ความเศร้าโศก... กลายเป็นหนึ่งเดียว... ฮิฮิฮิ...",
						"hindi": "मेरी बाहों में... बिना दर्द, बिना दुख... एक हो रहे हैं... हीहीही..."
					},
					"type": "speech",
					"speaker": "boss",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "ivy",
					"spot": [
						4,
						2
					]
				},
				{
					"content": {
						"korean": "이건… 비명이었어! 멜랑콜리아는… 이들의 비명이었어!",
						"english": "This was... a scream! Melancholia was... their screams!",
						"japanese": "これは…悲鳴だった！メランコリアは…彼女たちの悲鳴だったんだ！",
						"chinese": "这是……尖叫！忧郁是……她们的尖叫！",
						"french": "C'était... un cri ! La Mélancolie était... leurs cris !",
						"spanish": "¡Esto era... un grito! ¡Melancolía era... sus gritos!",
						"vietnamese": "Đây là... một tiếng thét! Melancholia là... tiếng thét của họ!",
						"thai": "นี่มัน... เสียงกรีดร้อง! เมลันโคเลียคือ... เสียงกรีดร้องของพวกเธอ!",
						"hindi": "यह... एक चीख थी! मेलानचोलिया... इनकी चीखें थी!"
					},
					"type": "speech",
					"speaker": "ivy",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "구원인 줄 알았는데… 파멸이었어. 모든 것이.",
						"english": "I thought it was salvation... but it was ruin. Everything.",
						"japanese": "救済だと思ったのに…破滅だった。すべてが。",
						"chinese": "以为是救赎……却是毁灭。一切都是。",
						"french": "Je pensais que c'était le salut... mais c'était la ruine. Tout.",
						"spanish": "Creí que era la salvación... pero era la ruina. Todo.",
						"vietnamese": "Cứ ngỡ là sự cứu rỗi... nhưng đó là sự hủy diệt. Tất cả.",
						"thai": "นึกว่าเป็นความรอด... แต่กลับเป็นหายนะ ทุกสิ่งทุกอย่าง",
						"hindi": "मैंने सोचा था यह मोक्ष है... पर यह बर्बादी थी। सब कुछ।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "숲의 어머니는 쓰러졌다. 하지만 구원은 없었다.",
						"english": "The Mother of the Forest fell. But there was no salvation.",
						"japanese": "森の母は倒れた。しかし、救済はなかった。",
						"chinese": "森林之母倒下了。但没有救赎。",
						"french": "La Mère de la Forêt tomba. But il n'y eut pas de salut.",
						"spanish": "La Madre del Bosque cayó. Pero no hubo salvación.",
						"vietnamese": "Mẹ Rừng đã ngã xuống. Nhưng không có sự cứu rỗi nào cả.",
						"thai": "เทพีแห่งพงไพรล้มลง แต่ไม่มีความรอดพ้นใดๆ",
						"hindi": "वन की माता गिर गई। पर कोई मोक्ष नहीं था।"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "narrator",
					"content": {
						"korean": "희생된 영혼들의 비명만이, 영원히 숲에 맴돌 뿐이었다.",
						"english": "Only the screams of sacrificed souls echoed eternally through the forest.",
						"japanese": "犠牲となった魂の悲鳴だけが、永遠に森をさまようばかりだった。",
						"chinese": "只有被牺牲灵魂的尖叫声，永远回荡在森林中。",
						"french": "Seuls les cris des âmes sacrifiées résonnaient éternellement dans la forêt.",
						"spanish": "Solo los gritos de las almas sacrificadas resonarían eternamente en el bosque.",
						"vietnamese": "Chỉ có tiếng thét của những linh hồn bị hiến tế vang vọng mãi mãi trong rừng.",
						"thai": "มีเพียงเสียงกรีดร้องของวิญญาณที่ถูกสังเวยเท่านั้นที่ยังคงดังก้องอยู่ในป่าตลอดไป",
						"hindi": "केवल बलि किए गए आत्माओं की चीखें ही, हमेशा के लिए जंगल में गूँजती रहीं।"
					},
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 유기체가 촉수를 뻗었다. 숲의 어머니, '비리디아'였다.",
						"english": "A colossal organism extended its tendrils. It was the Mother of the Forest, 'Viridia'.",
						"japanese": "巨大な有機体が触手を伸ばした。森の母、「ヴィリディア」だった。",
						"chinese": "一个巨大的有机体伸出了触手。那是森林之母，“维莉迪亚”。",
						"french": "Un organisme colossal étendit ses tentacules. C'était la Mère de la Forêt, \"Viridia\".",
						"spanish": "Un organismo colosal extendió sus tentáculos. Era la Madre del Bosque, 'Viridia'.",
						"vietnamese": "Một sinh vật khổng lồ vươn ra những xúc tu. Đó là Mẹ Rừng, 'Viridia'.",
						"thai": "สิ่งมีชีวิตขนาดมหึมาได้ยื่นหนวดออกมา นั่นคือมารดาแห่งป่า 'วิริเดีย'",
						"hindi": "एक विशाल जीव ने अपने जाल फैलाए। वह वन की माँ, 'विरिडिया' थी।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "사랑스러운 아이들아… 드디어 내 품으로 왔구나.",
						"english": "My beloved children... You have finally come into my embrace.",
						"japanese": "愛しい我が子たちよ… ついに私の懐に来たのね。",
						"chinese": "我亲爱的孩子们……你们终于来到我的怀抱了。",
						"french": "Mes chers enfants... Vous êtes enfin venus dans mon étreinte.",
						"spanish": "Mis amados hijos... Finalmente han venido a mi abrazo.",
						"vietnamese": "Những đứa con yêu dấu của ta... Cuối cùng các ngươi cũng đã đến với vòng tay ta.",
						"thai": "ลูกรักของแม่... ในที่สุดพวกเจ้าก็มาอยู่ในอ้อมอกของแม่แล้ว",
						"hindi": "मेरे प्यारे बच्चों... तुम आखिरकार मेरी बाहों में आ गए।"
					},
					"type": "speech",
					"speaker": "boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "고통과 슬픔 없는 영원한 안식을… 내가 줄 수 있어.",
						"english": "Eternal rest without pain or sorrow... I can grant you that.",
						"japanese": "苦痛と悲しみのない永遠の安息を… 私が与えよう。",
						"chinese": "没有痛苦和悲伤的永恒安息……我能赐予你们。",
						"french": "Un repos éternel sans douleur ni tristesse... Je peux vous l'offrir.",
						"spanish": "Un descanso eterno sin dolor ni tristeza... Eso puedo darles.",
						"vietnamese": "Một sự yên nghỉ vĩnh hằng không đau khổ hay buồn bã... Ta có thể ban cho các ngươi.",
						"thai": "การพักผ่อนชั่วนิรันดร์ที่ปราศจากความเจ็บปวดและความเศร้า... แม่ให้พวกเจ้าได้",
						"hindi": "दर्द और दुख रहित शाश्वत शांति... मैं तुम्हें दे सकती हूँ।"
					},
					"speaker": "boss",
					"emotion": "base"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ivy",
					"spot": [
						4,
						2
					]
				},
				{
					"emotion": "angry",
					"speaker": "ivy",
					"content": {
						"korean": "거짓말! 당신은 구원이 아니야!",
						"english": "Lies! You are no savior!",
						"japanese": "嘘だ！お前は救い主じゃない！",
						"chinese": "谎言！你不是救世主！",
						"french": "Mensonges ! Tu n'es pas la sauveuse !",
						"spanish": "¡Mentira! ¡Tú no eres la salvadora!",
						"vietnamese": "Dối trá! Ngươi không phải là Đấng Cứu Rỗi!",
						"thai": "โกหก! เจ้าไม่ใช่ผู้กอบกู้!",
						"hindi": "झूठ! तुम कोई मुक्तिदाता नहीं हो!"
					},
					"type": "speech"
				},
				{
					"speaker": "ivy",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "페른의 '치유', 브라켄이 본 생물체, 유물의 '경고', 꿈속 여전사들의 비명… 모든 게 당신의 거짓말이었어!",
						"english": "Fern's 'healing', the creature Bracken saw, the relic's 'warning', the screams of the warrior women in dreams... It was all your lies!",
						"japanese": "フェルンの「癒やし」、ブラッケンが見た生物、遺物の「警告」、夢の中の女戦士たちの悲鳴…すべてあなたの嘘だったのね！",
						"chinese": "费恩的“治愈”，布拉肯看到的生物，遗物的“警告”，梦中女战士们的尖叫……所有的一切都是你的谎言！",
						"french": "La 'guérison' de Fern, la créature vue par Bracken, l''avertissement' de la relique, les cris des guerrières dans les rêves... Tout cela n'était que tes mensonges !",
						"spanish": "La 'curación' de Fern, la criatura que vio Bracken, la 'advertencia' del artefacto, los gritos de las guerreras en los sueños... ¡Todo era una mentira tuya!",
						"vietnamese": "Sự 'chữa lành' của Fern, sinh vật Bracken đã thấy, 'cảnh báo' của di vật, tiếng thét của những nữ chiến binh trong mơ... Tất cả đều là lời nói dối của ngươi!",
						"thai": "การ 'รักษา' ของเฟิร์น, สิ่งมีชีวิตที่แบรคเคนเห็น, 'คำเตือน' ของวัตถุโบราณ, เสียงกรีดร้องของนักรบหญิงในฝัน... ทั้งหมดนั้นเป็นคำโกหกของแก!",
						"hindi": "फर्न का 'उपचार', ब्रैकेन ने देखा प्राणी, अवशेष की 'चेतावनी', सपनों में महिला योद्धाओं की चीखें... यह सब तुम्हारे झूठ थे!"
					}
				},
				{
					"content": {
						"korean": "흐흐흐… 깨달았구나. 하지만 너무 늦었어.",
						"english": "Hehehe... You've realized. But it's too late.",
						"japanese": "フフフ…気づいたか。だが、もう遅い。",
						"chinese": "呵呵呵……你醒悟了。但为时已晚。",
						"french": "Héhéhé... Tu as compris. Mais il est trop tard.",
						"spanish": "Jejeje... Te has dado cuenta. Pero es demasiado tarde.",
						"vietnamese": "Hahaha... Ngươi đã nhận ra rồi. Nhưng đã quá muộn.",
						"thai": "ฮิฮิฮิ... เจ้าเข้าใจแล้วสินะ แต่ว่ามันสายเกินไปแล้ว",
						"hindi": "हीहीही... तुम्हें एहसास हो गया। पर बहुत देर हो चुकी है।"
					},
					"type": "speech",
					"emotion": "happy",
					"speaker": "boss"
				},
				{
					"emotion": "base",
					"speaker": "boss",
					"content": {
						"korean": "이제 너희도 나와 함께 영원한 숲의 일부가 될 시간이야.",
						"english": "Now it's time for you to become part of the Eternal Forest, along with me.",
						"japanese": "今や、お前たちも私と共に永遠の森の一部となる時だ。",
						"chinese": "现在，你们也该和我一起，成为永恒森林的一部分了。",
						"french": "Maintenant, il est temps que vous aussi deveniez une partie de la Forêt Éternelle, avec moi.",
						"spanish": "Ahora es el momento de que vosotros también os convirtáis en parte del Bosque Eterno, junto a mí.",
						"vietnamese": "Giờ là lúc các ngươi cũng trở thành một phần của Rừng Vĩnh Cửu, cùng với ta.",
						"thai": "ได้เวลาที่พวกเจ้าจะกลายเป็นส่วนหนึ่งของป่าอมตะไปพร้อมกับข้าแล้ว",
						"hindi": "अब तुम्हारे लिए भी मेरे साथ शाश्वत वन का हिस्सा बनने का समय है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "절대… 안 돼!",
						"english": "Never... No!",
						"japanese": "絶対…駄目だ！",
						"chinese": "绝不……！",
						"french": "Jamais... Non !",
						"spanish": "¡Jamás... no!",
						"vietnamese": "Tuyệt đối... không!",
						"thai": "ไม่มีทาง... ไม่!",
						"hindi": "कभी नहीं... नहीं!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "비리디아의 촉수가 모든 것을 집어삼켰다.",
						"english": "Viridia's tentacles devoured everything.",
						"japanese": "ビリディアの触手がすべてを飲み込んだ。",
						"chinese": "维里迪亚的触手吞噬了一切。",
						"french": "Les tentacules de Viridia ont tout dévoré.",
						"spanish": "Los tentáculos de Viridia lo devoraron todo.",
						"vietnamese": "Những xúc tu của Viridia đã nuốt chửng mọi thứ.",
						"thai": "หนวดของวิริเดียกลืนกินทุกสิ่ง",
						"hindi": "विरिडिया के टेंटकल्स ने सब कुछ निगल लिया।"
					},
					"type": "speech"
				},
				{
					"speaker": "boss",
					"emotion": "base",
					"content": {
						"korean": "영원히… 나의 일부가 될지어다….",
						"english": "Forever... be a part of me...",
						"japanese": "永遠に… 私の一部となるのだ…。",
						"chinese": "永远… 成为我的一部分…",
						"french": "Pour toujours... faites partie de moi...",
						"spanish": "Para siempre... sé parte de mí...",
						"vietnamese": "Mãi mãi… hãy là một phần của ta…",
						"thai": "จงเป็นส่วนหนึ่งของฉัน... ตลอดไป...",
						"hindi": "हमेशा के लिए... मेरा हिस्सा बनो..."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not... over yet!",
						"japanese": "まだ… 終わってない！",
						"chinese": "还没… 结束呢！",
						"french": "Ce n'est pas... encore fini !",
						"spanish": "¡Aún no... ha terminado!",
						"vietnamese": "Vẫn chưa… kết thúc đâu!",
						"thai": "ยัง… ไม่จบ!",
						"hindi": "अभी... खत्म नहीं हुआ है!"
					},
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"숲의 심장. 마침내 그곳에 닿았다.",
			"모두의 구원이라 믿었던 곳.",
			"하지만 그 안에서 우린, 가장 끔찍한 진실을 보았다.",
			"구원은 없었다. 오직 절망과 비명만이."
		],
		"english": [
			"The Heart of the Forest. We finally reached it.",
			"The place we believed to be everyone's salvation.",
			"But within it, we saw the most horrific truth.",
			"There was no salvation. Only despair and screams."
		],
		"japanese": [
			"森の心臓。ついにそこに辿り着いた。",
			"皆の救済と信じていた場所。",
			"しかしその中で、我々は最も恐ろしい真実を見た。",
			"救済はなかった。絶望と悲鳴だけが。"
		],
		"chinese": [
			"森林之心。我们终于抵达了那里。",
			"我们曾认为是所有人救赎之地。",
			"然而，在那里我们看到了最可怕的真相。",
			"没有救赎。只有绝望和尖叫。"
		],
		"french": [
			"Le Cœur de la Forêt. Nous l'avons enfin atteint.",
			"Le lieu que nous croyions être le salut de tous.",
			"Mais en son sein, nous avons vu la plus horrible vérité.",
			"Il n'y avait pas de salut. Seulement le désespoir et les cris."
		],
		"spanish": [
			"El Corazón del Bosque. Por fin llegamos.",
			"El lugar que creíamos que era la salvación de todos.",
			"Pero dentro, vimos la verdad más horrible.",
			"No había salvación. Solo desesperación y gritos."
		],
		"vietnamese": [
			"Trái Tim Rừng Sâu. Cuối cùng chúng tôi đã đến được đó.",
			"Nơi mà chúng tôi tin là sự cứu rỗi của mọi người.",
			"Nhưng bên trong, chúng tôi đã thấy sự thật kinh hoàng nhất.",
			"Không có sự cứu rỗi. Chỉ có tuyệt vọng và những tiếng thét."
		],
		"thai": [
			"หัวใจแห่งป่า ในที่สุดเราก็มาถึง",
			"สถานที่ที่เราเชื่อว่าเป็นความรอดของทุกคน",
			"แต่ข้างในนั้น เราได้เห็นความจริงที่น่าสะพรึงกลัวที่สุด",
			"ไม่มีทางรอด มีเพียงความสิ้นหวังและเสียงกรีดร้องเท่านั้น"
		],
		"hindi": [
			"वन का हृदय। हम अंततः वहाँ पहुँचे।",
			"वह स्थान जिसे हमने सबकी मुक्ति माना था।",
			"परंतु उसके भीतर, हमने सबसे भयानक सत्य देखा।",
			"कोई मुक्ति नहीं थी। केवल निराशा और चीखें।"
		]
	},
	"epilogue": {
		"korean": [
			"숲의 어머니가 사라진 자리에는, 거대한 침묵만이 남았다.",
			"구원이라 믿었던 모든 것이, 사실은 끔찍한 파멸이었다.",
			"영혼들의 비명은 여전히 숲에 울려 퍼지는 듯했다.",
			"우리는 진실을 알았지만, 무엇도 되돌릴 수 없었다.",
			"이것이… 비극의 끝일까. 혹은 또 다른 시작일까."
		],
		"english": [
			"Where the Mother of the Forest vanished, only a vast silence remained.",
			"Everything we believed to be salvation was, in fact, a terrible destruction.",
			"The screams of the souls still seemed to echo through the forest.",
			"We knew the truth, but we could not undo anything.",
			"Is this... the end of the tragedy? Or another beginning?"
		],
		"japanese": [
			"森の母が消え去った場所には、巨大な沈黙だけが残った。",
			"救済と信じていたすべてが、実は恐ろしい破滅だった。",
			"魂たちの悲鳴は、依然として森に響き渡るようだった。",
			"我々は真実を知ったが、何も元に戻すことはできなかった。",
			"これが… 悲劇の終わりなのか。それとも、また別の始まりなのか。"
		],
		"chinese": [
			"森林之母消失的地方，只剩下巨大的寂静。",
			"我们曾相信的一切都是救赎，实际上却是可怕的毁灭。",
			"灵魂的尖叫声似乎仍在森林中回荡。",
			"我们知道了真相，但却无力回天。",
			"这就是… 悲剧的结局吗？抑或是另一个开始？"
		],
		"french": [
			"Là où la Mère de la Forêt a disparu, seul un immense silence est resté.",
			"Tout ce que nous croyions être le salut était, en fait, une terrible destruction.",
			"Les cris des âmes semblaient encore résonner dans la forêt.",
			"Nous connaissions la vérité, mais nous ne pouvions rien annuler.",
			"Est-ce... la fin de la tragédie ? Ou un autre commencement ?"
		],
		"spanish": [
			"Donde la Madre del Bosque desapareció, solo quedó un vasto silencio.",
			"Todo lo que creíamos que era salvación, en realidad, era una terrible destrucción.",
			"Los gritos de las almas aún parecían resonar en el bosque.",
			"Sabíamos la verdad, pero no pudimos deshacer nada.",
			"¿Es este... el final de la tragedia? ¿O un nuevo comienzo?"
		],
		"vietnamese": [
			"Nơi Mẹ Rừng biến mất, chỉ còn lại sự im lặng bao la.",
			"Mọi thứ chúng tôi tin là sự cứu rỗi, thực chất lại là sự hủy diệt khủng khiếp.",
			"Tiếng thét của các linh hồn vẫn như vọng mãi trong rừng.",
			"Chúng tôi đã biết sự thật, nhưng không thể thay đổi được gì.",
			"Đây có phải là... kết thúc của bi kịch? Hay là một khởi đầu khác?"
		],
		"thai": [
			"ณ ที่ที่มารดาแห่งป่าหายไป เหลือไว้เพียงความเงียบงันอันยิ่งใหญ่",
			"ทุกสิ่งที่เชื่อว่าเป็นความรอด แท้จริงแล้วคือหายนะอันน่ากลัว",
			"เสียงกรีดร้องของวิญญาณยังคงก้องกังวานอยู่ในป่า",
			"เรารู้ความจริงแล้ว แต่ก็ไม่อาจย้อนคืนสิ่งใดได้",
			"นี่คือ... จุดจบของโศกนาฏกรรมหรือไม่ หรือเป็นเพียงจุดเริ่มต้นอีกครั้ง"
		],
		"hindi": [
			"जहाँ वन की माता विलीन हुई, वहाँ केवल एक विशाल मौन शेष रह गया।",
			"सब कुछ जिसे हमने मुक्ति माना था, वास्तव में एक भयानक विनाश था।",
			"आत्माओं की चीखें अभी भी जंगल में गूँजती हुई प्रतीत हो रही थीं।",
			"हमें सत्य पता था, परंतु हम कुछ भी वापस नहीं कर सकते थे।",
			"क्या यह… त्रासदी का अंत है। या एक और शुरुआत?"
		]
	}
} as const;
