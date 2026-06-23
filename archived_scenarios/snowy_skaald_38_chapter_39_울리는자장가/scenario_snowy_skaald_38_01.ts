export const scenario_snowy_skaald_38_01 = {
	"scenario_id": "snowy_skaald_38_01",
	"order": 1,
	"act": "intro",
	"theme": "snowy",
	"actors": {
		"bran": {
			"id": "mon_985fcdcc-1bf2-4822-aa2f-292ae9353456",
			"name": {
				"korean": "브란",
				"english": "Bran",
				"japanese": "ブラン",
				"chinese": "布兰",
				"french": "Bran",
				"spanish": "Bran",
				"vietnamese": "Bran",
				"thai": "แบรน",
				"hindi": "ब्रैन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/42cde50b-7453-47b1-04df-73500ad21d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4ecba7ed-ec7e-4a8e-74dc-bf3e711b4d00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"얼어붙은 대지, 속삭이는 눈보라.",
			"오랜 소문이 흐르는 곳. 길 잃은 영혼을 부르는 노래.",
			"탐험대는 알지 못했다. 그 노래가 슬픔의 시작이라는 것을.",
			"추위보다 깊은 상실감이, 그들을 기다리고 있었다."
		],
		"english": [
			"Frozen land, whispering blizzard.",
			"Where old rumors flow. A song calling lost souls.",
			"The expedition didn't know. That song was the start of sorrow.",
			"A sense of loss deeper than the cold awaited them."
		],
		"japanese": [
			"凍てつく大地、囁く吹雪。",
			"古い噂が流れる場所。迷える魂を呼ぶ歌。",
			"探検隊は知らなかった。その歌が悲しみの始まりだとは。",
			"寒さよりも深い喪失感が、彼らを待ち受けていた。"
		],
		"chinese": [
			"冰冻的大地，低语的暴风雪。",
			"古老谣言流传之地。一首呼唤迷失灵魂的歌。",
			"探险队不知道。那首歌是悲伤的开端。",
			"比寒冷更深的失落感，正在等待着他们。"
		],
		"french": [
			"Terre gelée, blizzard murmurant.",
			"Là où courent d'anciennes rumeurs. Une chanson appelant les âmes perdues.",
			"L'expédition ignorait. Que cette chanson était le début du chagrin.",
			"Un sentiment de perte plus profond que le froid, les attendait."
		],
		"spanish": [
			"Tierra helada, ventisca susurrante.",
			"Donde fluyen antiguos rumores. Una canción que llama a las almas perdidas.",
			"La expedición no sabía. Que esa canción era el comienzo de la tristeza.",
			"Un sentimiento de pérdida más profundo que el frío, los esperaba."
		],
		"vietnamese": [
			"Vùng đất băng giá, bão tuyết thì thầm.",
			"Nơi những tin đồn cũ chảy trôi. Bài ca gọi hồn lạc.",
			"Đoàn thám hiểm không hay biết. Rằng bài ca ấy là khởi đầu của bi thương.",
			"Nỗi mất mát sâu hơn cả giá lạnh, đang chờ đợi họ."
		],
		"thai": [
			"ดินแดนเยือกแข็ง, พายุหิมะกระซิบกระซาบ.",
			"ที่ซึ่งข่าวลือเก่าแก่พัดผ่าน. บทเพลงเรียกวิญญาณที่หลงทาง.",
			"คณะสำรวจไม่รู้เลย. ว่าบทเพลงนั้นคือจุดเริ่มต้นของความโศกเศร้า.",
			"ความรู้สึกสูญเสียที่ลึกซึ้งกว่าความหนาวเย็น, กำลังรอพวกเขาอยู่."
		],
		"hindi": [
			"जमी हुई भूमि, फुसफुसाता बर्फीला तूफान।",
			"जहाँ पुरानी अफवाहें बहती हैं। खोई हुई आत्माओं को बुलाने वाला गीत।",
			"अभियान दल नहीं जानता था। कि वह गीत दुख की शुरुआत थी।",
			"ठंड से भी गहरा नुकसान का अहसास, उनका इंतजार कर रहा था।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "거대한 빙원. 한기가 피부를 찢었다.",
						"english": "Vast ice field. The chill tore at their skin.",
						"japanese": "広大な氷原。寒気が肌を裂いた。",
						"chinese": "巨大的冰原。寒气刺骨。",
						"french": "Vaste champ de glace. Le froid déchirait leur peau.",
						"spanish": "Vasto campo de hielo. El frío les desgarraba la piel.",
						"vietnamese": "Đồng băng rộng lớn. Cái lạnh xé da xé thịt.",
						"thai": "ทุ่งน้ำแข็งกว้างใหญ่. ความหนาวเย็นกัดกินผิวหนัง.",
						"hindi": "विशाल बर्फीला मैदान। ठंड ने त्वचा को चीर दिया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "여기가 소문의 그곳인가?",
						"english": "Is this the place of rumors?",
						"japanese": "ここが噂の場所か？",
						"chinese": "这里就是传闻中的地方吗？",
						"french": "Est-ce le lieu des rumeurs ?",
						"spanish": "¿Es este el lugar de los rumores?",
						"vietnamese": "Đây có phải là nơi đồn đại không?",
						"thai": "ที่นี่คือที่ที่ลือกันหรือ?",
						"hindi": "क्या यह अफवाहों की जगह है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "bran",
					"action": "enter"
				},
				{
					"emotion": "base",
					"speaker": "bran",
					"type": "speech",
					"content": {
						"korean": "이곳은 오래된 설원이오. 헛것이 들릴 수도 있소.",
						"english": "This is an ancient snowfield. You might hear things.",
						"japanese": "ここは古き雪原だ。幻聴が聞こえることもある。",
						"chinese": "这里是古老的雪原。你可能会听到幻觉。",
						"french": "C'est un ancien champ de neige. Vous pourriez entendre des choses.",
						"spanish": "Esto es un antiguo campo de nieve. Podrías escuchar cosas.",
						"vietnamese": "Đây là một cánh đồng tuyết cổ xưa. Ngươi có thể nghe thấy những điều huyễn hoặc.",
						"thai": "ที่นี่คือทุ่งหิมะเก่าแก่. เจ้าอาจได้ยินสิ่งลวงตา.",
						"hindi": "यह एक प्राचीन हिमक्षेत्र है। आपको कुछ वहम हो सकता है।"
					}
				},
				{
					"speaker": "bran",
					"type": "speech",
					"content": {
						"korean": "밤에는 특히, 알 수 없는 노래가 들린다고들 하오.",
						"english": "Especially at night, they say unknown songs can be heard.",
						"japanese": "夜には特に、正体不明の歌が聞こえると言われている。",
						"chinese": "尤其是在晚上，据说能听到不知名的歌声。",
						"french": "Surtout la nuit, on dit que des chants inconnus peuvent être entendus.",
						"spanish": "Especialmente de noche, se dice que se escuchan canciones desconocidas.",
						"vietnamese": "Đặc biệt vào ban đêm, người ta nói rằng có thể nghe thấy những bài hát không rõ nguồn gốc.",
						"thai": "โดยเฉพาะตอนกลางคืน, มีคนบอกว่าได้ยินบทเพลงลึกลับ.",
						"hindi": "खासकर रात में, कहते हैं कि अज्ञात गाने सुनाई देते हैं।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "노래요? 바람 소리겠지.",
						"english": "Songs? It must be the wind.",
						"japanese": "歌？風の音だろう。",
						"chinese": "歌声？那一定是风声吧。",
						"french": "Des chants ? Ce doit être le vent.",
						"spanish": "¿Canciones? Debe ser el viento.",
						"vietnamese": "Bài ca ư? Chắc là tiếng gió thôi.",
						"thai": "บทเพลงหรือ? คงเป็นเสียงลมล่ะมั้ง.",
						"hindi": "गाने? वह हवा की आवाज होगी।"
					},
					"speaker": "character_1",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "bran",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "…점점 더 깊어지는군.",
						"english": "...It's getting deeper and deeper.",
						"japanese": "…だんだん深くなるな。",
						"chinese": "……越来越深了。",
						"french": "...Ça devient de plus en plus profond.",
						"spanish": "...Se está volviendo cada vez más profundo.",
						"vietnamese": "...Càng ngày càng sâu.",
						"thai": "...ยิ่งลึกเข้าไปเรื่อยๆ.",
						"hindi": "...यह और गहरा होता जा रहा है।"
					},
					"speaker": "bran",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "이상해… 춥지 않은데, 가슴이 시려.",
						"english": "Strange... not cold, but a chill in my heart.",
						"japanese": "変だ… 寒くないのに、胸がひんやりする。",
						"chinese": "奇怪… 身体不冷，心却冰凉。",
						"french": "Étrange… Je n'ai pas froid, mais mon cœur se serre.",
						"spanish": "Raro... No tengo frío, pero siento un escalofrío en el corazón.",
						"vietnamese": "Lạ thật… Không lạnh, mà tim cứ buốt nhói.",
						"thai": "แปลก... ไม่หนาวเลย แต่ใจมันยะเยือก",
						"hindi": "अजीब… ठंड नहीं, पर दिल में सिहरन है।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "환청인가? 흐느끼는 소리가 들리는 것 같아.",
						"english": "A phantom sound? I hear a whimper.",
						"japanese": "幻聴か？ 嗚咽が聞こえる気がする。",
						"chinese": "是幻听吗？好像听到了呜咽声。",
						"french": "Une illusion ? J'entends des sanglots.",
						"spanish": "¿Alucinaciones? Oigo sollozos.",
						"vietnamese": "Ảo thanh sao? Hình như tôi nghe thấy tiếng nức nở.",
						"thai": "เสียงหลอนรึ? ได้ยินเสียงสะอื้นไห้",
						"hindi": "क्या ये वहम है? जैसे कोई रो रहा हो।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이 노래에 마음을 빼앗기면, 길을 잃게 될 거요.",
						"english": "Yield to this song, and you'll lose your way.",
						"japanese": "この歌に心を奪われると、道を見失うだろう。",
						"chinese": "若心为此歌所惑，汝将迷失方向。",
						"french": "Si cette mélodie vous captive, vous vous égarerez.",
						"spanish": "Si te dejas cautivar por esta canción, perderás el rumbo.",
						"vietnamese": "Nếu để mất hồn vào bài hát này, ngươi sẽ lạc lối.",
						"thai": "หากใจเผลอไปกับเพลงนี้ เจ้าจะหลงทาง",
						"hindi": "जो इस धुन में खो गए, राह भटक जाएंगे।"
					},
					"speaker": "bran",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "오래된 탐험대의 흔적이 발견됐다. 낡은 일지 몇 페이지.",
						"english": "Old expedition traces found. A few worn journal pages.",
						"japanese": "古い探検隊の痕跡を発見。数枚の古びた日誌。",
						"chinese": "发现古老探险队踪迹。几页破旧日志。",
						"french": "Traces d'une ancienne expédition découvertes. Quelques pages d'un journal usé.",
						"spanish": "Rastros de una vieja expedición. Unas páginas de diario desgastado.",
						"vietnamese": "Dấu vết đoàn thám hiểm xưa được tìm thấy. Vài trang nhật ký cũ kỹ.",
						"thai": "พบร่องรอยคณะสำรวจเก่า. บันทึกเก่าไม่กี่หน้า.",
						"hindi": "पुरानी खोज-दल के निशान मिले। एक पुरानी डायरी के कुछ पन्ने।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "bran",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 일지에도… 그 단어가 계속 나오는군.",
						"english": "Even in this journal... that word persists.",
						"japanese": "この日誌にも… あの言葉がまた出てくるな。",
						"chinese": "这日志里… 那个词又出现了。",
						"french": "Dans ce journal aussi... ce mot revient sans cesse.",
						"spanish": "También en este diario... esa palabra se repite.",
						"vietnamese": "Cả nhật ký này cũng vậy... từ đó cứ lặp đi lặp lại.",
						"thai": "ในบันทึกนี้ก็... คำนั้นยังคงปรากฏ",
						"hindi": "इस डायरी में भी… वही शब्द फिर दिख रहा है।"
					},
					"speaker": "bran",
					"type": "speech"
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"content": {
						"korean": "'자장가'… '잊혀진 기억'… 이게 무슨 뜻이지?",
						"english": "'Lullaby'... 'Forgotten Memory'... What is its meaning?",
						"japanese": "「子守歌」…「忘れられた記憶」…これ、どういう意味だ？",
						"chinese": "‘摇篮曲’…‘被遗忘的记忆’…这究竟是何意？",
						"french": "« Berceuse »... « Mémoire oubliée »... Qu'est-ce que cela veut dire ?",
						"spanish": "'Nana'... 'Recuerdo olvidado'... ¿Qué quiere decir esto?",
						"vietnamese": "‘Bài hát ru’… ‘Ký ức bị lãng quên’… Nghĩa là sao?",
						"thai": "‘เพลงกล่อมเด็ก’... ‘ความทรงจำที่ถูกลืม’... นี่หมายความว่าไง?",
						"hindi": "‘लोरी’… ‘भुलाई यादें’… इसका क्या अर्थ है?"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "점점 더 또렷해져. 이 노랫소리.",
						"english": "It's growing clearer. This song.",
						"japanese": "だんだんはっきりしてくる。この歌声。",
						"chinese": "越来越清晰。这歌声。",
						"french": "De plus en plus clair. Ce chant.",
						"spanish": "Cada vez más nítida. Esta canción.",
						"vietnamese": "Càng lúc càng rõ. Tiếng hát này.",
						"thai": "ชัดขึ้นเรื่อยๆ. เสียงเพลงนี้.",
						"hindi": "ये और साफ़ होती जा रही है। ये गीत की आवाज़।"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "단순한 노랫소리가 아니오. 누군가의 마음이 담긴… 그리움의 노래일지도.",
						"english": "More than a mere song. Perhaps a melody of longing... holding someone's heart.",
						"japanese": "ただの歌声じゃない。誰かの想いが込められた… 郷愁の歌かもしれない。",
						"chinese": "这并非寻常歌声。也许是饱含思念的… 某人之心歌。",
						"french": "Ce n'est pas une simple mélodie. Peut-être un chant de nostalgie... imprégné du cœur de quelqu'un.",
						"spanish": "No es solo una canción. Podría ser un canto de anhelo... que guarda el corazón de alguien.",
						"vietnamese": "Đây không phải tiếng hát đơn thuần. Có thể là bài ca của nỗi nhớ… chứa đựng tấm lòng của ai đó.",
						"thai": "ไม่ใช่แค่เพลงธรรมดา. อาจเป็นบทเพลงแห่งความคิดถึง... ที่เก็บหัวใจใครบางคนไว้.",
						"hindi": "ये सिर्फ़ एक गाना नहीं। ये किसी के दिल से निकली… यादों की धुन हो सकती है।"
					},
					"speaker": "bran",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "bran",
					"action": "enter"
				},
				{
					"speaker": "bran",
					"type": "speech",
					"content": {
						"korean": "멈춰야 하오. 더 깊이 가면… 돌아올 수 없소.",
						"english": "Stop now. Go deeper... and there's no return.",
						"japanese": "止まれ。これ以上深く行けば… 戻れないぞ。",
						"chinese": "必须止步。再深入… 便无法回头。",
						"french": "Il faut s'arrêter. Plus loin... point de retour.",
						"spanish": "Detente. Si vas más profundo... no podrás volver.",
						"vietnamese": "Phải dừng lại. Đi sâu hơn nữa... sẽ không thể quay về.",
						"thai": "ต้องหยุด. หากลงไปลึกกว่านี้... จะกลับไม่ได้.",
						"hindi": "रुक जाओ। और गहरे गए तो… लौट नहीं पाओगे।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_4",
					"type": "speech",
					"content": {
						"korean": "가야 해. 사라진 대원들이… 이 안에 있을지도 몰라.",
						"english": "I have to go. The missing members... might be inside.",
						"japanese": "行かなきゃ。消えた隊員たちが… この中にいるかもしれない。",
						"chinese": "必须去。失踪队员们… 或许就在里面。",
						"french": "Il faut y aller. Les membres disparus... sont peut-être à l'intérieur.",
						"spanish": "Debo ir. Los compañeros desaparecidos... quizás estén aquí.",
						"vietnamese": "Phải đi. Các thành viên mất tích… có thể ở trong này.",
						"thai": "ต้องไป. สมาชิกที่หายไป... อาจจะอยู่ในนี้.",
						"hindi": "मुझे जाना है। लापता सदस्य… शायद अंदर ही हों।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "머리가 아파… 이 노래가 날 부르는 것 같아.",
						"english": "My head hurts... This song feels like it's calling me.",
						"japanese": "頭が痛い…この歌が私を呼んでいるようだ。",
						"chinese": "头好痛…这首歌好像在呼唤我。",
						"french": "Ma tête me fait mal... Cette chanson semble m'appeler.",
						"spanish": "Me duele la cabeza... Esta canción parece llamarme.",
						"vietnamese": "Đầu tôi đau quá... Bài hát này dường như đang gọi tôi.",
						"thai": "ปวดหัวจัง... เพลงนี้เหมือนกำลังเรียกฉันเลย",
						"hindi": "मेरा सिर दुख रहा है... यह गाना मुझे बुला रहा है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "그 노래는 당신을 집으로 돌려보내지 않을 거요. 영원히 얼어붙게 할 뿐.",
						"english": "That song won't send you home. It'll only freeze you forever.",
						"japanese": "その歌はあなたを故郷へ帰さない。永遠に凍りつかせるだけだ。",
						"chinese": "那首歌不会让你回家。只会让你永远冻结。",
						"french": "Cette chanson ne vous ramènera pas chez vous. Elle ne fera que vous geler pour l'éternité.",
						"spanish": "Esa canción no te llevará a casa. Solo te congelará para siempre.",
						"vietnamese": "Bài hát đó sẽ không đưa bạn về nhà đâu. Nó chỉ khiến bạn đóng băng mãi mãi thôi.",
						"thai": "เพลงนั้นจะไม่ส่งคุณกลับบ้าน มันจะแค่ทำให้คุณแข็งตายตลอดไป",
						"hindi": "वह गाना तुम्हें घर नहीं भेजेगा। वह तुम्हें हमेशा के लिए जमा देगा।"
					},
					"speaker": "bran",
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "정체 모를 그림자가 쓰러졌다. 노랫소리가 멎었다.",
						"english": "The unknown shadow fell. The song ceased.",
						"japanese": "正体不明の影が倒れた。歌声が止んだ。",
						"chinese": "未知的影子倒下了。歌声停止了。",
						"french": "L'ombre inconnue est tombée. Le chant s'est arrêté.",
						"spanish": "La sombra desconocida cayó. El canto cesó.",
						"vietnamese": "Cái bóng vô danh đổ gục. Tiếng hát ngừng lại.",
						"thai": "เงาลึกลับล้มลง เสียงเพลงหยุดนิ่ง",
						"hindi": "अनजान छाया गिर गई। गाना बंद हो गया।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…겨우… 멈추는구나… 그 오랜… 그리움…",
						"english": "...Finally... it stops... that long... longing...",
						"japanese": "…やっと…止まるんだな…あの長い…郷愁…",
						"chinese": "…终于…停下来了…那漫长的…思念…",
						"french": "...Enfin... ça s'arrête... cette longue... nostalgie...",
						"spanish": "...Por fin... se detiene... ese largo... anhelo...",
						"vietnamese": "...Cuối cùng... cũng dừng lại... nỗi nhớ... đã lâu...",
						"thai": "...ในที่สุด... ก็หยุดลง... ความโหยหา... ที่ยาวนานนั้น...",
						"hindi": "...आखिरकार... रुक गया... वह लंबा... लालसा..."
					},
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이 노랫소리는… 정말로 슬픔이었어.",
						"english": "This song… it truly was sadness.",
						"japanese": "この歌声は…本当に悲しみだった。",
						"chinese": "这歌声…真是悲伤啊。",
						"french": "Ce chant… c'était vraiment de la tristesse.",
						"spanish": "Este canto… realmente era tristeza.",
						"vietnamese": "Bài hát này… thực sự là nỗi buồn.",
						"thai": "เสียงเพลงนี้… ช่างเป็นความเศร้าจริง ๆ",
						"hindi": "यह गीत… वास्तव में उदासी थी।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "bran",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "그는 오랫동안… 누군가를 기다렸던 것이오.",
						"english": "He had waited… for someone, for so long.",
						"japanese": "彼は長い間…誰かを待っていたのだ。",
						"chinese": "他等了很久…在等一个人。",
						"french": "Il avait attendu… quelqu'un, pendant si longtemps.",
						"spanish": "Él había esperado… a alguien, por mucho tiempo.",
						"vietnamese": "Anh ấy đã đợi… ai đó, suốt một thời gian dài.",
						"thai": "เขาเฝ้ารอ… ใครบางคนมานานแล้ว",
						"hindi": "वह लंबे समय से… किसी का इंतजार कर रहा था।"
					},
					"speaker": "bran",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "잠시 후, 멈췄던 눈보라가 다시 몰아쳤다. 하지만 이제… 이전과는 다른 바람이었다.",
						"english": "Soon, the stopped blizzard raged once more. But now… the wind was different.",
						"japanese": "やがて、止まっていた吹雪が再び荒れ狂った。しかし今や…以前とは違う風だった。",
						"chinese": "片刻后，停歇的暴风雪再次肆虐。但现在…风已不同于往日。",
						"french": "Peu après, le blizzard, qui s'était arrêté, a de nouveau fait rage. Mais maintenant… c'était un vent différent d'avant.",
						"spanish": "Poco después, la ventisca, que se había detenido, arreció de nuevo. Pero ahora… era un viento diferente al de antes.",
						"vietnamese": "Một lát sau, trận bão tuyết đã dừng lại bỗng lại ập đến. Nhưng giờ đây… đó là một cơn gió khác so với trước.",
						"thai": "ไม่นานนัก พายุหิมะที่หยุดไปก็โหมกระหน่ำอีกครั้ง แต่ตอนนี้… เป็นลมที่แตกต่างจากเมื่อก่อน",
						"hindi": "कुछ देर बाद, रुका हुआ बर्फीला तूफान फिर से उमड़ पड़ा। लेकिन अब… हवा पहले जैसी नहीं थी।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "미지의 존재의 정체는 아직 밝혀지지 않았다. 다음 여정은, 망각의 서리 속으로…",
						"english": "The identity of the unknown entity remains unrevealed. The next journey leads into the frost of oblivion…",
						"japanese": "未知の存在の正体はまだ明かされていない。次の旅は、忘却の霜の中へ…",
						"chinese": "未知存在的身份尚未揭晓。下一次旅程，将深入遗忘之霜…",
						"french": "L'identité de l'entité inconnue n'a pas encore été révélée. Le prochain voyage mène dans le givre de l'oubli…",
						"spanish": "La identidad de la entidad desconocida aún no ha sido revelada. El próximo viaje es hacia la escarcha del olvido…",
						"vietnamese": "Danh tính của thực thể bí ẩn vẫn chưa được tiết lộ. Chuyến hành trình tiếp theo, tiến vào giá băng của sự lãng quên…",
						"thai": "ตัวตนของสิ่งมีชีวิตที่ไม่รู้จักยังไม่ถูกเปิดเผย การเดินทางครั้งต่อไป สู่ความเยือกแข็งแห่งการลืมเลือน…",
						"hindi": "अज्ञात सत्ता की पहचान अभी भी सामने नहीं आई है। अगली यात्रा, विस्मृति के पाले में…"
					},
					"emotion": "base"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "노랫소리가 온몸을 얼렸다. 움직일 수 없었다.",
						"english": "The song froze my entire body. I couldn't move.",
						"japanese": "歌声が全身を凍らせた。動けなかった。",
						"chinese": "歌声冻结了全身。无法动弹。",
						"french": "Le chant a gelé tout mon corps. Je ne pouvais pas bouger.",
						"spanish": "El canto congeló todo mi cuerpo. No pude moverme.",
						"vietnamese": "Tiếng hát đóng băng toàn thân. Không thể cử động.",
						"thai": "เสียงเพลงทำให้ร่างกายทั้งหมดแข็งทื่อ ขยับไม่ได้เลย",
						"hindi": "गीत ने पूरे शरीर को जमा दिया। मैं हिल नहीं पाया।"
					}
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…아직 부족하다. 너희의 그리움은… 더 깊이 가야 한다.",
						"english": "…It's not enough yet. Your longing… must go deeper.",
						"japanese": "…まだ足りない。お前たちの懐かしさは…もっと深くへ行かねばならない。",
						"chinese": "…还不够。你们的思念…必须更深入。",
						"french": "…Ce n'est pas encore assez. Votre nostalgie… doit aller plus profond.",
						"spanish": "…Aún no es suficiente. Vuestro anhelo… debe ir más profundo.",
						"vietnamese": "…Vẫn chưa đủ. Nỗi nhớ của các ngươi… phải sâu sắc hơn nữa.",
						"thai": "…ยังไม่พอ ความคิดถึงของพวกเจ้า… ต้องลึกซึ้งกว่านี้",
						"hindi": "…अभी भी काफी नहीं है। तुम्हारी लालसा… और गहरी होनी चाहिए।"
					}
				},
				{
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not… over yet!",
						"japanese": "まだ…終わってない！",
						"chinese": "还没…结束！",
						"french": "Ce n'est pas… encore fini !",
						"spanish": "¡Aún… no ha terminado!",
						"vietnamese": "Vẫn chưa… kết thúc!",
						"thai": "ยัง… ไม่จบ!",
						"hindi": "अभी… खत्म नहीं हुआ है!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "거대한 얼음 동굴. 노랫소리가 울려 퍼졌다.",
						"english": "A giant ice cave. A song echoed through it.",
						"japanese": "巨大な氷の洞窟。歌声が響き渡った。",
						"chinese": "巨大的冰洞。歌声回荡。",
						"french": "Une immense grotte de glace. Un chant y résonnait.",
						"spanish": "Una cueva de hielo gigantesca. Un canto resonaba.",
						"vietnamese": "Một hang băng khổng lồ. Tiếng hát vang vọng.",
						"thai": "ถ้ำน้ำแข็งขนาดยักษ์ เสียงเพลงก้องกังวาน",
						"hindi": "एक विशाल बर्फ की गुफा। एक गाना गूंज रहा था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "드디어 왔는가… 길 잃은 영혼들이여.",
						"english": "So you've finally come... lost souls.",
						"japanese": "やっと来たか…迷える魂たちよ。",
						"chinese": "终于来了吗…迷失的灵魂们。",
						"french": "Vous êtes enfin là... âmes perdues.",
						"spanish": "¿Así que finalmente han llegado... almas perdidas?",
						"vietnamese": "Cuối cùng cũng đến rồi sao... những linh hồn lạc lối.",
						"thai": "ในที่สุดก็มาถึงแล้วสินะ... วิญญาณที่หลงทาง",
						"hindi": "तो तुम आखिरकार आ गए... भटकी हुई आत्माएं।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네가… 이 모든 일의 원흉이냐.",
						"english": "Are you... the cause of all this?",
						"japanese": "お前が…この全ての元凶なのか。",
						"chinese": "你就是…这一切的元凶吗？",
						"french": "Est-ce toi... la cause de tout cela ?",
						"spanish": "¿Eres tú... la causa de todo esto?",
						"vietnamese": "Ngươi... là kẻ gây ra tất cả sao?",
						"thai": "แก... เป็นต้นเหตุของเรื่องทั้งหมดนี้หรือไง",
						"hindi": "क्या तुम... इस सब के पीछे हो?"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "내 노래는… 그저 고독할 뿐. 너희의 그리움을 듣고 싶었을 뿐이다.",
						"english": "My song is... merely loneliness. I just wanted to hear your longing.",
						"japanese": "私の歌は…ただ孤独なだけ。あなたたちの郷愁を聞きたかっただけだ。",
						"chinese": "我的歌…只是孤独罢了。我只是想听听你们的思念。",
						"french": "Ma chanson n'est... que solitude. Je voulais juste entendre votre nostalgie.",
						"spanish": "Mi canción es... simplemente soledad. Solo quería escuchar vuestro anhelo.",
						"vietnamese": "Bài hát của ta... chỉ là sự cô đơn thôi. Ta chỉ muốn nghe nỗi nhớ của các ngươi.",
						"thai": "บทเพลงของข้า... เป็นเพียงแค่ความเดียวดาย ข้าแค่อยากได้ยินความโหยหาของพวกเจ้าเท่านั้น",
						"hindi": "मेरा गाना... बस अकेलापन है। मैं बस तुम्हारी लालसा सुनना चाहता था।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "bran",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "저 노랫소리에 홀리지 마시오. 저건… 잊혀진 슬픔일 뿐.",
						"english": "Don't be enchanted by that song. It's just... forgotten sorrow.",
						"japanese": "あの歌声に惑わされるな。あれは…忘れ去られた悲しみだ。",
						"chinese": "不要被那歌声迷惑。那只是…被遗忘的悲伤。",
						"french": "Ne soyez pas enchanté par ce chant. Ce n'est que... de la tristesse oubliée.",
						"spanish": "No se dejen seducir por ese canto. Eso es... solo tristeza olvidada.",
						"vietnamese": "Đừng bị mê hoặc bởi tiếng hát đó. Đó chỉ là... nỗi buồn bị lãng quên.",
						"thai": "อย่าได้ลุ่มหลงไปกับบทเพลงนั้น มันเป็นเพียงแค่... ความเศร้าที่ถูกลืมเลือนเท่านั้น",
						"hindi": "उस गाने से मोहित मत हो। वह बस... भूला हुआ दुख है।"
					},
					"speaker": "bran",
					"type": "speech"
				},
				{
					"direction": "down",
					"action": "exit",
					"type": "direction",
					"speaker": "bran",
					"duration_ms": 400
				},
				{
					"emotion": "base",
					"content": {
						"korean": "나는 길을 찾을 때까지 기다릴 거요. 당신들이 길을 잃지 않도록.",
						"english": "I will wait until I find the way. So you don't lose your way.",
						"japanese": "私は道を見つけるまで待つよ。あなたたちが道に迷わないように。",
						"chinese": "我会一直等到找到路。这样你们就不会迷失方向。",
						"french": "J'attendrai de trouver le chemin. Pour que vous ne perdiez pas votre chemin.",
						"spanish": "Esperaré hasta encontrar el camino. Para que ustedes no se pierdan.",
						"vietnamese": "Ta sẽ đợi cho đến khi tìm thấy đường. Để các ngươi không lạc lối.",
						"thai": "ฉันจะรอจนกว่าจะพบทาง เพื่อไม่ให้พวกคุณหลงทาง",
						"hindi": "मैं तब तक इंतज़ार करूँगा जब तक मुझे रास्ता नहीं मिल जाता। ताकि तुम रास्ता न भटको।"
					},
					"speaker": "bran",
					"type": "speech"
				}
			]
		}
	]
} as const;
