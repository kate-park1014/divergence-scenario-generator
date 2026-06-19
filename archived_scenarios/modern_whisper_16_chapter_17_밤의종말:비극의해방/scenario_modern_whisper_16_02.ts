export const scenario_modern_whisper_16_02 = {
	"scenario_id": "modern_whisper_16_02",
	"order": 2,
	"act": "rising",
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
	"prologue": {
		"korean": [
			"폐허가 된 갱단의 아지트. 핏빛 잔해가 과거를 부른다.",
			"'검은 새벽'의 비명은 악몽이 되어 현재를 잠식한다.",
			"벡스는 팀원들을 지키려 애썼지만, 공포는 점점 더 깊어진다.",
			"이곳에서 진실은 피로 쓰여졌다. 지워지지 않는 절규 속에서."
		],
		"english": [
			"A ruined gang hideout. Bloody remnants beckon the past.",
			"The screams of 'Black Dawn' became a nightmare, devouring the present.",
			"Vex struggled to protect his teammates, but the fear only deepened.",
			"Here, truth was written in blood. Amidst indelible screams."
		],
		"japanese": [
			"廃墟となったギャングのアジト。血塗られた残骸が過去を呼び起こす。",
			"「黒い夜明け」の叫びは悪夢となり、現在を蝕む。",
			"ベックスは仲間を守ろうと奮闘したが、恐怖はますます深まるばかりだった。",
			"ここで真実は血で書かれた。消えることのない絶叫の中で。"
		],
		"chinese": [
			"废弃的帮派巢穴。血腥残骸唤醒过去。",
			"“黑夜黎明”的尖叫化为噩梦，吞噬现在。",
			"维克斯竭力保护队友，但恐惧却愈发深重。",
			"在此地，真相以鲜血书写。在无法磨灭的尖叫声中。"
		],
		"french": [
			"Un repaire de gang en ruine. Les vestiges sanglants rappellent le passé.",
			"Les cris de « l'Aube Noire » sont devenus un cauchemar, dévorant le présent.",
			"Vex luttait pour protéger ses coéquipiers, mais la peur ne faisait que s'intensifier.",
			"Ici, la vérité fut écrite dans le sang. Au milieu de hurlements indélébiles."
		],
		"spanish": [
			"Una guarida de pandilleros en ruinas. Restos sangrientos evocan el pasado.",
			"Los gritos de 'Black Dawn' se convirtieron en una pesadilla, devorando el presente.",
			"Vex luchó por proteger a sus compañeros, pero el miedo solo se profundizó.",
			"Aquí, la verdad fue escrita con sangre. En medio de gritos imborrables."
		],
		"vietnamese": [
			"Một hang ổ băng đảng đổ nát. Tàn tích đẫm máu gọi về quá khứ.",
			"Tiếng thét của 'Bình Minh Đen' hóa thành ác mộng, gặm nhấm hiện tại.",
			"Vex cố gắng bảo vệ đồng đội, nhưng nỗi sợ ngày càng sâu sắc.",
			"Ở đây, sự thật được viết bằng máu. Giữa những tiếng thét không thể xóa nhòa."
		],
		"thai": [
			"รังแก๊งที่พังทลาย ซากศพที่นองเลือดเรียกหาอดีต",
			"เสียงกรีดร้องของ 'รุ่งอรุณทมิฬ' กลายเป็นฝันร้าย กลืนกินปัจจุบัน",
			"เว็กซ์พยายามปกป้องเพื่อนร่วมทีม แต่ความกลัวกลับทวีความรุนแรงขึ้น",
			"ที่นี่ ความจริงถูกจารึกด้วยเลือด ท่ามกลางเสียงกรีดร้องที่ไม่มีวันลืมเลือน"
		],
		"hindi": [
			"गैंग का एक खंडहर अड्डा। खूनी अवशेष अतीत को बुलाते हैं।",
			"'ब्लैक डॉन' की चीखें एक दुःस्वप्न बन गईं, जो वर्तमान को निगल रही हैं।",
			"वेक्स ने अपने साथियों को बचाने की कोशिश की, लेकिन डर और गहरा होता गया।",
			"यहां, सच खून से लिखा गया था। अमिट चीखों के बीच।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "핏자국과 총탄 자국이 난무하는 폐허. '검은 새벽' 갱단의 아지트였다.",
						"english": "A ruin riddled with bloodstains and bullet holes. It was the hideout of the 'Black Dawn' gang.",
						"japanese": "血痕と銃弾の跡が飛び散る廃墟。ここは「黒い夜明け」ギャングのアジトだった。",
						"chinese": "遍布血迹和弹孔的废墟。曾是“黑夜黎明”帮派的巢穴。",
						"french": "Une ruine criblée de taches de sang et d'impacts de balles. C'était le repaire du gang de « l'Aube Noire ».",
						"spanish": "Una ruina plagada de manchas de sangre y agujeros de bala. Era la guarida de la pandilla 'Black Dawn'.",
						"vietnamese": "Một tàn tích đầy vết máu và lỗ đạn. Đó là hang ổ của băng 'Bình Minh Đen'.",
						"thai": "ซากปรักหักพังที่เต็มไปด้วยคราบเลือดและรอยกระสุน นี่คือรังของแก๊ง 'รุ่งอรุณทมิฬ'",
						"hindi": "खून के धब्बों और गोली के निशानों से भरा एक खंडहर। यह 'ब्लैक डॉन' गिरोह का ठिकाना था।"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "으윽… 토할 것 같아.",
						"english": "Ugh... I feel like I'm going to puke.",
						"japanese": "うぅ…吐きそうだ。",
						"chinese": "呃…我想吐。",
						"french": "Beurk... J'ai envie de vomir.",
						"spanish": "Ugh... creo que voy a vomitar.",
						"vietnamese": "Ư... Muốn nôn quá.",
						"thai": "อึ๋ย... ฉันจะอ้วก",
						"hindi": "उफ़... मुझे उल्टी आने वाली है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "bex",
					"spot": [
						4,
						2
					],
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "bex",
					"content": {
						"korean": "진정해. 여기 오래 머물면 안 돼.",
						"english": "Calm down. We can't stay here long.",
						"japanese": "落ち着け。ここに長くはいられない。",
						"chinese": "冷静。我们不能久留这里。",
						"french": "Calme-toi. On ne peut pas rester ici longtemps.",
						"spanish": "Cálmate. No podemos quedarnos aquí mucho tiempo.",
						"vietnamese": "Bình tĩnh đi. Chúng ta không thể ở đây lâu.",
						"thai": "ใจเย็นไว้ เราอยู่ตรงนี้นานไม่ได้",
						"hindi": "शांत हो जाओ। हम यहां ज्यादा देर नहीं रुक सकते।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "어서 단서를 찾아야 해. 팀원들을 지킬 방법을.",
						"english": "We need to find clues quickly. A way to protect our teammates.",
						"japanese": "早く手がかりを見つけないと。仲間を守る方法を。",
						"chinese": "我们必须尽快找到线索。一个保护队友的方法。",
						"french": "Il faut trouver des indices rapidement. Un moyen de protéger nos coéquipiers.",
						"spanish": "Tenemos que encontrar pistas rápidamente. Una forma de proteger a nuestros compañeros.",
						"vietnamese": "Chúng ta phải nhanh chóng tìm ra manh mối. Một cách để bảo vệ đồng đội.",
						"thai": "เราต้องรีบหาเบาะแส วิธีที่จะปกป้องเพื่อนร่วมทีมของเรา",
						"hindi": "हमें जल्दी सुराग ढूंढने होंगे। अपने साथियों को बचाने का कोई तरीका।"
					},
					"speaker": "bex",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "bex",
					"spot": [
						3,
						2
					],
					"duration_ms": 450
				},
				{
					"emotion": "base",
					"speaker": "bex",
					"content": {
						"korean": "여기가 가장 오래된 구역이야.",
						"english": "This is the oldest section.",
						"japanese": "ここが一番古い区域だ。",
						"chinese": "这里是最古老的区域。",
						"french": "C'est la section la plus ancienne.",
						"spanish": "Esta es la sección más antigua.",
						"vietnamese": "Đây là khu vực cổ nhất.",
						"thai": "นี่คือส่วนที่เก่าแก่ที่สุด",
						"hindi": "यह सबसे पुराना खंड है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "저기 벽에 뭐라고 쓰여있어.",
						"english": "Something's written on that wall over there.",
						"japanese": "あそこの壁に何か書いてある。",
						"chinese": "那面墙上写着什么。",
						"french": "Quelque chose est écrit sur ce mur là-bas.",
						"spanish": "Hay algo escrito en esa pared de allí.",
						"vietnamese": "Có gì đó viết trên bức tường kia.",
						"thai": "มีอะไรบางอย่างเขียนอยู่บนกำแพงนั่น",
						"hindi": "वहां उस दीवार पर कुछ लिखा है।"
					},
					"speaker": "character_1",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "낡은 낙서가 핏빛으로 변하며 일그러졌다. '검은 새벽의 재림'.",
						"english": "The old graffiti twisted, turning blood-red. \"The Advent of the Black Dawn.\"",
						"japanese": "古い落書きが血のように赤く歪んだ。「黒き夜明けの再臨」。",
						"chinese": "陈旧的涂鸦扭曲着，变成了血红色。“黑色黎明的再临”。",
						"french": "L'ancien graffiti se tordait, virant au rouge sang. « L'Avènement de l'Aube Noire ».",
						"spanish": "El viejo grafiti se retorció, volviéndose rojo sangre. \"El Adviento del Amanecer Negro\".",
						"vietnamese": "Hình vẽ nguệch ngoạc cũ kỹ biến dạng, nhuốm màu đỏ máu. \"Sự Tái Lâm của Bình Minh Đen Tối\".",
						"thai": "กราฟฟิตีเก่าบิดเบี้ยว กลายเป็นสีแดงเลือด \"การมาเยือนของรุ่งอรุณทมิฬ\"",
						"hindi": "पुराना भित्तिचित्र खून जैसे लाल रंग में बदलता हुआ विकृत हो गया। 'काले भोर का पुनरागमन'।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "조심해. 과거의 환상이… 우리를 덮치고 있어.",
						"english": "Be careful. Illusions from the past are... overwhelming us.",
						"japanese": "気をつけて。過去の幻影が…私たちを襲っている。",
						"chinese": "小心。过去的幻象…正在侵袭我们。",
						"french": "Fais attention. Des illusions du passé… nous submergent.",
						"spanish": "Ten cuidado. Las ilusiones del pasado… nos están abrumando.",
						"vietnamese": "Cẩn thận. Những ảo ảnh từ quá khứ… đang bao trùm chúng ta.",
						"thai": "ระวังให้ดี ภาพหลอนจากอดีตกำลัง... กลืนกินเรา",
						"hindi": "सावधान रहना। अतीत के भ्रम… हमें घेर रहे हैं।"
					},
					"speaker": "bex",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 550,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "bex",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"speaker": "bex",
					"content": {
						"korean": "이 이상은… 위험해.",
						"english": "Any further… is dangerous.",
						"japanese": "これ以上は…危険だ。",
						"chinese": "再往前…就危险了。",
						"french": "Plus loin… c'est dangereux.",
						"spanish": "Más allá… es peligroso.",
						"vietnamese": "Xa hơn nữa… là nguy hiểm.",
						"thai": "ไปมากกว่านี้... อันตราย",
						"hindi": "इससे आगे… खतरा है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "폐허 한구석, 부서진 녹음기에서 희미한 비명과 으르렁거리는 소리가 흘러나오는 듯했다.",
						"english": "In a corner of the ruins, faint screams and growls seemed to emanate from a broken recorder.",
						"japanese": "廃墟の片隅、壊れた録音機からかすかな悲鳴とうなり声が聞こえてくるようだった。",
						"chinese": "废墟一角，破损的录音机里似乎传出微弱的尖叫和低吼声。",
						"french": "Dans un coin des ruines, de faibles cris et grognements semblaient émaner d'un enregistreur cassé.",
						"spanish": "En un rincón de las ruinas, débiles gritos y gruñidos parecían emanar de una grabadora rota.",
						"vietnamese": "Trong một góc hoang tàn, những tiếng hét yếu ớt và tiếng gầm gừ dường như phát ra từ một chiếc máy ghi âm bị hỏng.",
						"thai": "ที่มุมหนึ่งของซากปรักหักพัง เสียงกรีดร้องแผ่วเบาและเสียงคำรามดูเหมือนจะเล็ดลอดออกมาจากเครื่องบันทึกเสียงที่พังแล้ว",
						"hindi": "खंडहर के एक कोने में, एक टूटे हुए रिकॉर्डर से हल्की चीखें और गुर्राहटें निकलती हुई लग रही थीं।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이게 대체 무슨 소리야…?",
						"english": "What in the world is that sound…?",
						"japanese": "これはいったい何の音だ…？",
						"chinese": "这到底是什么声音…？",
						"french": "C'est quoi ce bruit, bon sang… ?",
						"spanish": "¿Qué demonios es ese sonido…?",
						"vietnamese": "Cái âm thanh gì thế này…?",
						"thai": "นี่มันเสียงอะไรกันแน่...?",
						"hindi": "यह आखिर कैसी आवाज़ है…?"
					},
					"speaker": "character_2",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "함부로 만지지 마. 어떤 악몽이 나올지 몰라. 내가 먼저 확인할게.",
						"english": "Don't touch it carelessly. Who knows what nightmare might emerge. I'll check it first.",
						"japanese": "迂闊に触るな。どんな悪夢が現れるか分からない。私が先に確認する。",
						"chinese": "别随便碰。谁知道会跑出什么噩梦来。我先去确认一下。",
						"french": "Ne le touche pas imprudemment. Qui sait quel cauchemar pourrait en sortir. Je vais vérifier d'abord.",
						"spanish": "No lo toques descuidadamente. Quién sabe qué pesadilla podría surgir. Yo lo revisaré primero.",
						"vietnamese": "Đừng chạm vào lung tung. Ai biết ác mộng gì sẽ xuất hiện. Để tôi kiểm tra trước.",
						"thai": "อย่าแตะต้องมันสุ่มสี่สุ่มห้า ไม่รู้ว่าฝันร้ายอะไรจะปรากฏออกมา ฉันจะตรวจสอบก่อน",
						"hindi": "इसे लापरवाही से मत छूना। कौन जानता है कि कौन सा दुःस्वप्न निकल सकता है। मैं पहले जाँच करूँगा।"
					},
					"speaker": "bex"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "bex",
					"type": "direction",
					"duration_ms": 400,
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "점점 더 차가워지고 있어. 이 아지트 전체가…",
						"english": "It's getting colder and colder. This entire hideout…",
						"japanese": "どんどん冷たくなっている。このアジト全体が…。",
						"chinese": "越来越冷了。整个据点都…",
						"french": "Il fait de plus en plus froid. Tout ce repaire…",
						"spanish": "Cada vez hace más frío. Todo este escondite…",
						"vietnamese": "Càng lúc càng lạnh. Toàn bộ căn cứ này…",
						"thai": "มันเย็นลงเรื่อยๆ รังลับแห่งนี้ทั้งหมด...",
						"hindi": "यह और ठंडा होता जा रहा है। यह पूरा ठिकाना…"
					},
					"speaker": "bex",
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "마치 살아있는 것 같아. 우리를 조여오는…",
						"english": "It's like it's alive. Squeezing us…",
						"japanese": "まるで生きているようだ。私たちを締め付けてくる…。",
						"chinese": "仿佛活过来了一样。正勒紧我们…",
						"french": "C'est comme si c'était vivant. Nous étouffant…",
						"spanish": "Es como si estuviera vivo. Apretándonos…",
						"vietnamese": "Cứ như thể nó đang sống. Siết chặt chúng ta…",
						"thai": "เหมือนมันมีชีวิต กำลังบีบรัดเรา...",
						"hindi": "यह ऐसे है जैसे जीवित हो। हमें कस रहा है…"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "bex",
					"content": {
						"korean": "여기서 돌아갈 수 없어. 우리는 이 악몽을 끝내야만 해.",
						"english": "We can't go back from here. We must end this nightmare.",
						"japanese": "ここから引き返せない。私たちはこの悪夢を終わらせなければならない。",
						"chinese": "我们不能回头。必须终结这场噩梦。",
						"french": "On ne peut pas revenir en arrière d'ici. Nous devons mettre fin à ce cauchemar.",
						"spanish": "No podemos volver de aquí. Debemos poner fin a esta pesadilla.",
						"vietnamese": "Chúng ta không thể quay lại từ đây. Chúng ta phải chấm dứt cơn ác mộng này.",
						"thai": "เรากลับไปไม่ได้แล้วจากที่นี่ เราต้องจบฝันร้ายนี้ให้ได้",
						"hindi": "हम यहाँ से वापस नहीं जा सकते। हमें इस दुःस्वप्न को खत्म करना ही होगा।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "팀원들을… 내가 지킬게.",
						"english": "I'll… protect my teammates.",
						"japanese": "チームメイトを…私が守る。",
						"chinese": "我会…保护好我的队友。",
						"french": "Je… protégerai mes coéquipiers.",
						"spanish": "Yo… protegeré a mis compañeros de equipo.",
						"vietnamese": "Tôi sẽ… bảo vệ đồng đội của mình.",
						"thai": "ฉันจะ... ปกป้องเพื่อนร่วมทีมของฉัน",
						"hindi": "मैं… अपनी टीम के साथियों की रक्षा करूँगा।"
					},
					"speaker": "bex",
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "아지트의 가장 깊은 곳. 거대한 그림자가 나타났다.",
						"english": "The deepest part of the hideout. A colossal shadow appeared.",
						"japanese": "アジトの最も深い場所。巨大な影が現れた。",
						"chinese": "巢穴最深处。一个巨大的身影出现了。",
						"french": "La partie la plus profonde du repaire. Une ombre colossale est apparue.",
						"spanish": "La parte más profunda del escondite. Una sombra colosal apareció.",
						"vietnamese": "Nơi sâu nhất của hang ổ. Một bóng đen khổng lồ xuất hiện.",
						"thai": "ส่วนที่ลึกที่สุดของฐานทัพลับ เงาขนาดมหึมาปรากฏขึ้น",
						"hindi": "अड्डे का सबसे गहरा हिस्सा। एक विशाल छाया प्रकट हुई।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "감히 나의 영역을 침범하다니… 어리석은 인간들.",
						"english": "How dare you invade my domain... Foolish humans.",
						"japanese": "よくも私の領域を侵したな… 愚かな人間どもめ。",
						"chinese": "竟敢侵犯我的领域……愚蠢的人类。",
						"french": "Comment osez-vous envahir mon domaine... Humains stupides.",
						"spanish": "Cómo osas invadir mi dominio... Humanos necios.",
						"vietnamese": "Dám xâm phạm lãnh địa của ta… Loài người ngu xuẩn.",
						"thai": "บังอาจบุกรุกอาณาเขตของข้า... มนุษย์โง่เขลาเอ๋ย",
						"hindi": "हिम्मत कैसे हुई मेरे क्षेत्र में घुसने की... मूर्ख इंसान।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "네가 'Whisper'의 부하인가!",
						"english": "Are you 'Whisper's' subordinate?!",
						"japanese": "お前が『Whisper』の手下か！",
						"chinese": "你就是‘低语者’的部下吗？！",
						"french": "Es-tu le subordonné de 'Whisper' ?",
						"spanish": "¡¿Eres un subordinado de 'Whisper'?!",
						"vietnamese": "Ngươi là thuộc hạ của 'Whisper' sao?!",
						"thai": "แกเป็นลูกน้องของ 'Whisper' งั้นหรือ!",
						"hindi": "क्या तुम 'फुसफुसाहट' के अधीनस्थ हो?!"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "나는 공포 그 자체. 너희의 악몽을 먹고 자란다.",
						"english": "I am fear itself. I feed on your nightmares.",
						"japanese": "私は恐怖そのもの。お前たちの悪夢を糧に成長する。",
						"chinese": "我就是恐惧本身。靠吞噬你们的噩梦而成长。",
						"french": "Je suis la peur incarnée. Je me nourris de vos cauchemars.",
						"spanish": "Soy el miedo mismo. Me alimento de vuestras pesadillas.",
						"vietnamese": "Ta là nỗi sợ hãi. Ta lớn lên nhờ những cơn ác mộng của các ngươi.",
						"thai": "ข้าคือความหวาดกลัว ข้าเติบโตขึ้นจากการกินฝันร้ายของพวกเจ้า",
						"hindi": "मैं स्वयं भय हूँ। मैं तुम्हारे बुरे सपनों को खाकर बड़ा होता हूँ।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "bex",
					"content": {
						"korean": "팀원들, 물러서! 내가 막을게!",
						"english": "Team, fall back! I'll hold them off!",
						"japanese": "みんな、下がって！私が食い止める！",
						"chinese": "队员们，后退！我来挡住！",
						"french": "Équipe, reculez ! Je m'en occupe !",
						"spanish": "¡Equipo, retroceded! ¡Yo los detendré!",
						"vietnamese": "Đồng đội, lùi lại! Để tôi ngăn chặn!",
						"thai": "ทีม ถอยไป! ฉันจะรับมือเอง!",
						"hindi": "टीम, पीछे हटो! मैं उन्हें रोकूँगा!"
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "하찮은 발버둥… 너희의 공포가 나를 더 강하게 만든다.",
						"english": "Futile struggles... Your fear only makes me stronger.",
						"japanese": "無駄な足掻き…お前たちの恐怖が私をより強くする。",
						"chinese": "无谓的挣扎……你们的恐惧只会让我更强大。",
						"french": "Luttes futiles... Votre peur ne fait que me rendre plus fort.",
						"spanish": "Esfuerzos inútiles... Vuestro miedo solo me hace más fuerte.",
						"vietnamese": "Những nỗ lực vô ích… Nỗi sợ hãi của các ngươi chỉ khiến ta mạnh hơn.",
						"thai": "การดิ้นรนที่ไร้ค่า... ความหวาดกลัวของพวกเจ้ามีแต่จะทำให้ข้าแข็งแกร่งขึ้น",
						"hindi": "व्यर्थ का संघर्ष... तुम्हारा डर मुझे और मजबूत बनाता है।"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "bex",
					"content": {
						"korean": "우리가… 여기서 쓰러질 순 없어! 다시 싸울 거야!",
						"english": "We... we can't fall here! We'll fight again!",
						"japanese": "我々が…ここで倒れるわけにはいかない！もう一度戦うぞ！",
						"chinese": "我们...不能在这里倒下！我们会再次战斗！",
						"french": "Nous... nous ne pouvons pas tomber ici ! Nous allons nous battre à nouveau !",
						"spanish": "¡Nosotros... no podemos caer aquí! ¡Lucharemos de nuevo!",
						"vietnamese": "Chúng ta... không thể gục ngã ở đây! Chúng ta sẽ chiến đấu lần nữa!",
						"thai": "เรา... จะล้มที่นี่ไม่ได้! เราจะสู้ใหม่!",
						"hindi": "हम... यहां नहीं गिर सकते! हम फिर से लड़ेंगे!"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "다시… 다시 시도한다!",
						"english": "Again... we'll try again!",
						"japanese": "もう一度…もう一度試す！",
						"chinese": "再次...再次尝试！",
						"french": "Encore... nous allons réessayer !",
						"spanish": "¡De nuevo... lo intentaremos de nuevo!",
						"vietnamese": "Lại... lại thử lần nữa!",
						"thai": "อีกครั้ง... เราจะลองอีกครั้ง!",
						"hindi": "फिर से... फिर से कोशिश करेंगे!"
					},
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "크윽… 겨우 이 정도라니… 'Whisper'님께선… 더 강한 악몽을 원하실 텐데…",
						"english": "Ugh... Is this all you've got...? Lord 'Whisper' will... want stronger nightmares...",
						"japanese": "くっ…これしきとは…『Whisper』様は…もっと強い悪夢をお望みだろうに…",
						"chinese": "呃……就这点程度吗……‘低语者’大人会……想要更强大的噩梦吧……",
						"french": "Ugh... C'est tout ce que vous avez...? Seigneur 'Whisper' voudra... des cauchemars plus intenses...",
						"spanish": "Ugh... ¿Es todo lo que tenéis...? Lord 'Whisper' querrá... pesadillas más fuertes...",
						"vietnamese": "Ư… Chỉ có thế này thôi sao…? Ngài 'Whisper' sẽ… muốn những cơn ác mộng mạnh hơn…",
						"thai": "อึก... แค่นี้เองเหรอ... ท่าน 'Whisper' คงจะ... ต้องการฝันร้ายที่แข็งแกร่งกว่านี้...",
						"hindi": "उफ़... बस इतना ही...? 'फुसफुसाहट' महाराज... और भी भयानक बुरे सपने चाहेंगे..."
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "'Whisper'… 대체 정체가 뭐야?",
						"english": "'Whisper'... What exactly are you?",
						"japanese": "『Whisper』…一体、正体は何なんだ？",
						"chinese": "‘低语者’……到底是什么来头？",
						"french": "'Whisper'... Qui es-tu vraiment ?",
						"spanish": "«Whisper»... ¿Quién eres exactamente?",
						"vietnamese": "'Whisper'… Rốt cuộc ngươi là ai?",
						"thai": "'Whisper'... แท้จริงแล้วแกคืออะไร?",
						"hindi": "'फुसफुसाहट'... आखिर तुम हो क्या?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "bex",
					"content": {
						"korean": "아직 끝나지 않았어. 더 깊은 곳으로… 가야 해.",
						"english": "It's not over yet. We... have to go deeper.",
						"japanese": "まだ終わってない。もっと深い場所へ…行かなければ。",
						"chinese": "还没结束。我们……必须去更深的地方。",
						"french": "Ce n'est pas encore fini. Nous... devons aller plus profond.",
						"spanish": "Aún no ha terminado. Tenemos que... ir más profundo.",
						"vietnamese": "Vẫn chưa kết thúc. Chúng ta… phải đi sâu hơn nữa.",
						"thai": "ยังไม่จบ เรา... ต้องไปให้ลึกกว่านี้",
						"hindi": "यह अभी खत्म नहीं हुआ है। हमें... और गहराई में जाना होगा।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "핏빛 환상은 잠시 걷혔지만, 'Whisper'의 존재는 더욱 선명해졌다. 탐험대는 도시의 심장을 향해 나아갔다.",
						"english": "The bloody illusion briefly faded, but 'Whisper's' presence grew clearer. The expedition pushed towards the city's heart.",
						"japanese": "血塗られた幻影は一時的に晴れたが、『Whisper』の存在はより鮮明になった。探索隊は都市の心臓部へと進んだ。",
						"chinese": "血色幻象暂时消散，但‘低语者’的存在却愈发清晰。探险队向着城市的核心区域前进。",
						"french": "L'illusion sanglante s'est estompée un instant, mais la présence de 'Whisper' est devenue plus distincte. L'expédition s'est dirigée vers le cœur de la ville.",
						"spanish": "La ilusión sangrienta se desvaneció brevemente, pero la presencia de 'Whisper' se hizo más clara. La expedición avanzó hacia el corazón de la ciudad.",
						"vietnamese": "Ảo ảnh máu lửa tạm thời tan biến, nhưng sự hiện diện của 'Whisper' trở nên rõ ràng hơn. Đoàn thám hiểm tiến về phía trái tim của thành phố.",
						"thai": "ภาพลวงตาที่เต็มไปด้วยเลือดจางหายไปชั่วขณะ แต่การปรากฏตัวของ 'Whisper' ชัดเจนขึ้น คณะสำรวจมุ่งหน้าสู่ใจกลางเมือง",
						"hindi": "खूनी भ्रम क्षण भर के लिए मिट गया, लेकिन 'फुसफुसाहट' की उपस्थिति और स्पष्ट हो गई। अभियान दल शहर के दिल की ओर बढ़ा।"
					},
					"emotion": "base"
				}
			]
		}
	]
} as const;
