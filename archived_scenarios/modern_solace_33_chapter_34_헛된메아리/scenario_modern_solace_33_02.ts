export const scenario_modern_solace_33_02 = {
	"scenario_id": "modern_solace_33_02",
	"order": 2,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"dax": {
			"id": "mon_08d5b43e-f9ab-4469-9064-855e170b0cdc",
			"name": {
				"korean": "닥스",
				"english": "Dax",
				"japanese": "ダックス",
				"chinese": "达克斯",
				"french": "Dax",
				"spanish": "Dax",
				"vietnamese": "Dax",
				"thai": "แด็กซ์",
				"hindi": "डैक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/84bb11db-6eb4-4500-d274-222e8b100100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5d325a75-bd91-4758-7b3f-ad9a97e52700/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"도시를 뒤덮는 기이한 파동.",
			"모든 디지털 정보가 지워지기 시작했다.",
			"존재했던 것마저 망각에 휩싸이는 공포.",
			"거리의 정보상 닥스는, 혼란 속에서 필사적이었다."
		],
		"english": [
			"A bizarre wave engulfs the city.",
			"All digital information began to be erased.",
			"The terror of even existence being swallowed by oblivion.",
			"Dax, a street info broker, was desperate amidst the chaos."
		],
		"japanese": [
			"都市を覆う奇妙な波動。",
			"全てのデジタル情報が消去され始めた。",
			"存在したことさえ忘却に包まれる恐怖。",
			"街の情報屋ダックスは、混乱の中で必死だった。"
		],
		"chinese": [
			"奇异的波动笼罩着城市。",
			"所有数字信息开始被抹去。",
			"甚至连存在过的痕迹都被遗忘的恐惧。",
			"街头情报贩子达克斯，在混乱中拼命挣扎。"
		],
		"french": [
			"Une étrange pulsation recouvre la ville.",
			"Toutes les informations numériques ont commencé à être effacées.",
			"La terreur de l'existence même engloutie par l'oubli.",
			"Dax, informateur de rue, était désespéré au milieu du chaos."
		],
		"spanish": [
			"Una extraña pulsación envuelve la ciudad.",
			"Toda la información digital comenzó a ser borrada.",
			"El terror de que incluso la existencia sea engullida por el olvido.",
			"Dax, el informante callejero, estaba desesperado en medio del caos."
		],
		"vietnamese": [
			"Một làn sóng kỳ lạ bao trùm thành phố.",
			"Mọi thông tin kỹ thuật số bắt đầu bị xóa sổ.",
			"Nỗi kinh hoàng khi ngay cả sự tồn tại cũng bị lãng quên.",
			"Dax, một tay môi giới thông tin đường phố, đã tuyệt vọng giữa hỗn loạn."
		],
		"thai": [
			"คลื่นประหลาดแผ่ซ่านปกคลุมเมือง",
			"ข้อมูลดิจิทัลทั้งหมดเริ่มถูกลบ",
			"ความหวาดกลัวที่แม้แต่การดำรงอยู่ยังถูกกลืนหายไปในความว่างเปล่า",
			"แด็กซ์ พ่อค้าข้อมูลข้างถนน กำลังสิ้นหวังท่ามกลางความโกลาหล"
		],
		"hindi": [
			"शहर को ढकने वाली एक अजीबोगरीब तरंग।",
			"सभी डिजिटल जानकारी मिटना शुरू हो गई।",
			"अस्तित्व का भी विस्मृति में समा जाने का भय।",
			"सड़क का जानकारी दलाल डैक्स, अराजकता के बीच हताश था।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "도시의 디지털 전광판이 불안하게 일렁였다.",
						"english": "The city's digital billboards flickered erratically.",
						"japanese": "都市のデジタル電光掲示板が不安定に揺らめいた。",
						"chinese": "城市的数字广告牌不安地闪烁着。",
						"french": "Les panneaux d'affichage numériques de la ville scintillaient de manière instable.",
						"spanish": "Las vallas publicitarias digitales de la ciudad parpadeaban de forma errática.",
						"vietnamese": "Bảng quảng cáo kỹ thuật số của thành phố nhấp nháy không ổn định.",
						"thai": "ป้ายดิจิทัลของเมืองสั่นไหวอย่างผิดปกติ",
						"hindi": "शहर के डिजिटल बिलबोर्ड अस्थिर रूप से झिलमिला रहे थे।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "화면이 깨지네?",
						"english": "The screen's breaking?",
						"japanese": "画面が壊れてる？",
						"chinese": "屏幕坏了？",
						"french": "L'écran se casse ?",
						"spanish": "¿La pantalla se está rompiendo?",
						"vietnamese": "Màn hình bị hỏng rồi?",
						"thai": "หน้าจอแตกเหรอ?",
						"hindi": "स्क्रीन टूट रही है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"type": "direction",
					"speaker": "dax",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "젠장! 내 데이터가 증발하고 있어!",
						"english": "Damn it! My data's evaporating!",
						"japanese": "くそっ！俺のデータが蒸発してる！",
						"chinese": "该死！我的数据正在蒸发！",
						"french": "Merde ! Mes données s'évaporent !",
						"spanish": "¡Maldita sea! ¡Mis datos se están evaporando!",
						"vietnamese": "Chết tiệt! Dữ liệu của tôi đang bốc hơi!",
						"thai": "ให้ตายสิ! ข้อมูลของฉันกำลังหายไป!",
						"hindi": "धिक्कार है! मेरा डेटा वाष्पित हो रहा है!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "닥스? 무슨 일인데?",
						"english": "Dax? What's going on?",
						"japanese": "ダックス？どうしたんだ？",
						"chinese": "达克斯？发生什么事了？",
						"french": "Dax ? Que se passe-t-il ?",
						"spanish": "¿Dax? ¿Qué pasa?",
						"vietnamese": "Dax? Chuyện gì vậy?",
						"thai": "แด็กซ์? เกิดอะไรขึ้น?",
						"hindi": "डैक्स? क्या हुआ?"
					},
					"emotion": "base",
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"content": {
						"korean": "내 모든 정보가… 흔적도 없이 사라지고 있다고!",
						"english": "All my information... disappearing without a trace!",
						"japanese": "俺の全ての情報が…跡形もなく消えてるんだ！",
						"chinese": "我所有的信息……正在消失得无影无踪！",
						"french": "Toutes mes informations... disparaissent sans laisser de trace !",
						"spanish": "¡Toda mi información... desapareciendo sin dejar rastro!",
						"vietnamese": "Mọi thông tin của tôi... đang biến mất không dấu vết!",
						"thai": "ข้อมูลทั้งหมดของฉัน... กำลังหายไปอย่างไร้ร่องรอย!",
						"hindi": "मेरी सारी जानकारी... बिना किसी निशान के गायब हो रही है!"
					},
					"emotion": "angry",
					"speaker": "dax",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 550,
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "dax",
					"action": "enter"
				},
				{
					"content": {
						"korean": "찾을 수 없어. 흔적 자체가 지워졌어.",
						"english": "Can't find it. The trace itself has been erased.",
						"japanese": "見つからない。痕跡自体が消された。",
						"chinese": "找不到。痕迹本身就被抹去了。",
						"french": "Impossible de le trouver. La trace elle-même a été effacée.",
						"spanish": "No puedo encontrarlo. La huella misma ha sido borrada.",
						"vietnamese": "Không thể tìm thấy. Dấu vết đã bị xóa sổ.",
						"thai": "หาไม่เจอ. ร่องรอยเองก็ถูกลบไปแล้ว",
						"hindi": "मिल नहीं रहा। निशान ही मिटा दिया गया है।"
					},
					"emotion": "sad",
					"speaker": "dax",
					"type": "speech"
				},
				{
					"content": {
						"korean": "뭐가 그렇게 중요한데?",
						"english": "What's so important?",
						"japanese": "何がそんなに重要なんだ？",
						"chinese": "什么那么重要？",
						"french": "Qu'est-ce qui est si important ?",
						"spanish": "¿Qué es tan importante?",
						"vietnamese": "Cái gì quan trọng đến vậy?",
						"thai": "อะไรมันสำคัญขนาดนั้น?",
						"hindi": "क्या इतना ज़रूरी है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "내가 아는 모든 것! 심지어 내가 아는 사실마저도… 머릿속이 텅 비어가는 기분이야.",
						"english": "Everything I know! Even the facts I know... My mind feels like it's going blank.",
						"japanese": "私の知っているすべて！私が知っている事実でさえ…頭の中が空っぽになっていく感じだ。",
						"chinese": "我所知道的一切！甚至我所知道的事实……我的脑子感觉一片空白。",
						"french": "Tout ce que je sais ! Même les faits que je connais... J'ai l'impression que mon esprit se vide.",
						"spanish": "¡Todo lo que sé! Incluso los hechos que conozco... Siento que mi mente se está quedando en blanco.",
						"vietnamese": "Mọi thứ tôi biết! Ngay cả những sự thật tôi biết... Đầu tôi cứ trống rỗng dần đi.",
						"thai": "ทุกสิ่งที่ฉันรู้! แม้แต่ความจริงที่ฉันรู้... ฉันรู้สึกเหมือนสมองกำลังว่างเปล่า",
						"hindi": "जो कुछ भी मैं जानता हूँ! यहाँ तक कि जो तथ्य मैं जानता हूँ... ऐसा लग रहा है मेरा दिमाग खाली हो रहा है।"
					},
					"emotion": "angry",
					"speaker": "dax",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "도시 전광판에 낡은 흑백 사진 조각들이 섬광처럼 스쳐 지나갔다.",
						"english": "Fragments of old black-and-white photos flashed across the city's billboards like lightning.",
						"japanese": "都市の電光掲示板に、古い白黒写真の断片が閃光のように通り過ぎた。",
						"chinese": "城市广告牌上，老旧的黑白照片碎片像闪电般一闪而过。",
						"french": "Des fragments de vieilles photos en noir et blanc défilèrent comme des éclairs sur les panneaux d'affichage de la ville.",
						"spanish": "Fragmentos de viejas fotos en blanco y negro destellaron como relámpagos en las vallas publicitarias de la ciudad.",
						"vietnamese": "Những mảnh ghép ảnh đen trắng cũ kỹ lướt qua bảng quảng cáo thành phố như một tia chớp.",
						"thai": "เศษภาพขาวดำเก่าๆ แวบผ่านป้ายโฆษณาในเมืองเหมือนสายฟ้า",
						"hindi": "शहर के बिलबोर्ड पर पुरानी श्वेत-श्याम तस्वीरों के टुकड़े बिजली की तरह कौंध गए।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "저건 또 뭐야?",
						"english": "What's that now?",
						"japanese": "あれはまた何だ？",
						"chinese": "那又是什么？",
						"french": "Qu'est-ce que c'est encore ?",
						"spanish": "¿Qué es eso ahora?",
						"vietnamese": "Cái đó là gì nữa?",
						"thai": "นั่นอะไรอีกแล้ว?",
						"hindi": "वो क्या है अब?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_2"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"duration_ms": 480,
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter",
					"speaker": "dax"
				},
				{
					"content": {
						"korean": "내 친구 '라이라'… 중요한 정보였는데… 이름밖에 기억이 안 나.",
						"english": "My friend 'Lyra'... It was important information... I can only remember her name.",
						"japanese": "私の友人「ライラ」…重要な情報だったのに…名前しか思い出せない。",
						"chinese": "我的朋友“莱拉”……那是重要信息……我只记得名字了。",
						"french": "Mon amie 'Lyra'... C'était une information importante... Je ne me souviens que de son nom.",
						"spanish": "Mi amiga 'Lyra'... Era información importante... Solo recuerdo su nombre.",
						"vietnamese": "Bạn tôi 'Lyra'... Đó là thông tin quan trọng... nhưng tôi chỉ nhớ mỗi cái tên.",
						"thai": "เพื่อนของฉัน 'ไลรา'... มันเป็นข้อมูลสำคัญ... แต่ฉันจำได้แค่ชื่อ",
						"hindi": "मेरी दोस्त 'लाइरा'... यह महत्वपूर्ण जानकारी थी... मुझे सिर्फ उसका नाम याद है।"
					},
					"emotion": "sad",
					"speaker": "dax",
					"type": "speech"
				},
				{
					"content": {
						"korean": "닥스, 침착해.",
						"english": "Dax, calm down.",
						"japanese": "ダックス、落ち着いて。",
						"chinese": "达克斯，冷静点。",
						"french": "Dax, calme-toi.",
						"spanish": "Dax, cálmate.",
						"vietnamese": "Dax, bình tĩnh lại.",
						"thai": "แด็กซ์, ใจเย็นๆ",
						"hindi": "डैक्स, शांत हो जाओ।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "침착? 내 존재 자체가 지워지고 있어! 이 감정… 잃어버린 것에 대한 그리움 같아.",
						"english": "Calm? My very existence is being erased! This feeling... It's like longing for what's lost.",
						"japanese": "落ち着く？私の存在自体が消去されているんだ！この感情…失われたものへの懐かしさのようだ。",
						"chinese": "冷静？我的存在正在被抹去！这种感觉……就像是对失去之物的眷恋。",
						"french": "Calme ? Mon existence même est en train d'être effacée ! Ce sentiment... C'est comme la nostalgie de ce qui est perdu.",
						"spanish": "¿Calma? ¡Mi propia existencia está siendo borrada! Este sentimiento... Es como la añoranza por lo perdido.",
						"vietnamese": "Bình tĩnh ư? Sự tồn tại của tôi đang bị xóa sổ! Cảm giác này... Nó giống như nỗi nhớ về những gì đã mất.",
						"thai": "ใจเย็น? ตัวตนของฉันกำลังถูกลบเลือน! ความรู้สึกนี้... เหมือนความคิดถึงสิ่งที่หายไป",
						"hindi": "शांत? मेरा अस्तित्व ही मिटाया जा रहा है! यह भावना... खोई हुई चीज़ के लिए लालसा जैसी है।"
					},
					"emotion": "angry",
					"speaker": "dax",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "밤거리 사람들의 얼굴에 알 수 없는 멜랑콜리가 스쳤다.",
						"english": "An unknown melancholy brushed across the faces of people on the night street.",
						"japanese": "夜の街を行き交う人々の顔に、知られざるメランコリーがよぎった。",
						"chinese": "夜色街道上，人们的脸上掠过一丝莫名的忧郁。",
						"french": "Une mélancolie inconnue effleura les visages des passants dans la rue nocturne.",
						"spanish": "Una melancolía desconocida se reflejó en los rostros de la gente en la calle nocturna.",
						"vietnamese": "Một nỗi u sầu không tên lướt qua gương mặt những người trên phố đêm.",
						"thai": "ความเศร้าโศกที่ไม่รู้จักฉาบฉายบนใบหน้าของผู้คนบนถนนยามค่ำคืน",
						"hindi": "रात की सड़क पर लोगों के चेहरों पर एक अनजानी उदासी छा गई।"
					},
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "dax",
					"duration_ms": 520,
					"spot": [
						1,
						3
					]
				},
				{
					"content": {
						"korean": "이젠… 아무것도 찾을 수 없어. 모든 게 무의미해.",
						"english": "Now... I can't find anything. Everything is meaningless.",
						"japanese": "もう…何も見つけられない。すべてが無意味だ。",
						"chinese": "现在……我什么也找不到了。一切都毫无意义。",
						"french": "Maintenant... Je ne trouve plus rien. Tout est insignifiant.",
						"spanish": "Ahora... No puedo encontrar nada. Todo es insignificante.",
						"vietnamese": "Bây giờ... tôi không thể tìm thấy bất cứ điều gì nữa. Mọi thứ đều vô nghĩa.",
						"thai": "ตอนนี้... ฉันหาอะไรไม่เจอแล้ว ทุกสิ่งไร้ความหมาย",
						"hindi": "अब... मुझे कुछ नहीं मिल रहा। सब कुछ अर्थहीन है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "dax"
				},
				{
					"content": {
						"korean": "닥스! 포기하면 안 돼!",
						"english": "Dax! Don't give up!",
						"japanese": "ダックス！諦めるな！",
						"chinese": "达克斯！不要放弃！",
						"french": "Dax ! N'abandonne pas !",
						"spanish": "¡Dax! ¡No te rindas!",
						"vietnamese": "Dax! Đừng bỏ cuộc!",
						"thai": "แด็กซ์! อย่ายอมแพ้!",
						"hindi": "डैक्स! हार मत मानो!"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "dax",
					"type": "speech",
					"content": {
						"korean": "이미 늦었어. 도시 자체가… 기억을 잃고 있어.",
						"english": "It's too late. The city itself... is losing its memory.",
						"japanese": "もう遅い。街自体が…記憶を失っている。",
						"chinese": "已经太迟了。城市本身…正在失去记忆。",
						"french": "Il est déjà trop tard. La ville elle-même… perd ses souvenirs.",
						"spanish": "Ya es demasiado tarde. La ciudad misma… está perdiendo la memoria.",
						"vietnamese": "Đã quá muộn rồi. Bản thân thành phố... đang mất đi ký ức.",
						"thai": "สายเกินไปแล้ว ตัวเมืองเอง...กำลังสูญเสียความทรงจำ",
						"hindi": "बहुत देर हो चुकी है। शहर खुद… अपनी यादें खो रहा है。"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "주인공의 주변이 순간 흐릿해졌다. 낯선 기시감이 밀려왔다.",
						"english": "The protagonist's surroundings blurred for a moment. A strange déjà vu washed over them.",
						"japanese": "主人公の周囲が瞬間的にぼやけた。見慣れない既視感が押し寄せた。",
						"chinese": "主角的周围瞬间模糊起来。一股陌生的既视感袭来。",
						"french": "L'environnement du protagoniste s'est brouillé un instant. Une étrange sensation de déjà-vu l'envahit.",
						"spanish": "El entorno del protagonista se volvió borroso por un instante. Una extraña sensación de déjà vu lo invadió.",
						"vietnamese": "Xung quanh nhân vật chính mờ đi trong chốc lát. Một cảm giác quen thuộc lạ lẫm ập đến.",
						"thai": "รอบตัวตัวเอกพร่ามัวไปชั่วขณะ ความรู้สึก既視感ที่ไม่คุ้นเคยถาโถมเข้ามา",
						"hindi": "नायक के चारों ओर क्षण भर के लिए धुंधला गया। एक अजीब सी déjà vu की भावना उमड़ पड़ी।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이 느낌… 불안해.",
						"english": "This feeling... it's unsettling.",
						"japanese": "この感覚…不安だ。",
						"chinese": "这种感觉…不安。",
						"french": "Cette sensation… est inquiétante.",
						"spanish": "Esta sensación… es inquietante.",
						"vietnamese": "Cảm giác này... thật bất an.",
						"thai": "ความรู้สึกนี้...ไม่สบายใจเลย",
						"hindi": "यह भावना… बेचैन करने वाली है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_1"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "보잘것없는 존재들… 곧, 모든 것을 잊게 될 것이다.",
						"english": "Insignificant beings... Soon, you will forget everything.",
						"japanese": "取るに足らない存在どもめ…やがて、全てを忘れるだろう。",
						"chinese": "微不足道的存在… 很快，你们就会忘掉一切。",
						"french": "Êtres insignifiants... Bientôt, vous oublierez tout.",
						"spanish": "Seres insignificantes... Pronto lo olvidaréis todo.",
						"vietnamese": "Những sinh vật tầm thường... Sớm thôi, các ngươi sẽ quên hết mọi thứ.",
						"thai": "พวกเจ้าผู้ไร้ค่า… ในไม่ช้า ก็จะลืมทุกสิ่งไปจนหมดสิ้น",
						"hindi": "तुच्छ प्राणी... जल्द ही, तुम सब कुछ भूल जाओगे।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아니… 기억할 거야… 반드시…!",
						"english": "No... I will remember... Definitely...!",
						"japanese": "違う…覚えている…必ず…！",
						"chinese": "不…我会记住的…一定要…！",
						"french": "Non... je me souviendrai... absolument...!",
						"spanish": "No... recordaré... ¡debo...!",
						"vietnamese": "Không... tôi sẽ nhớ... nhất định...!",
						"thai": "ไม่… ฉันจะจำไว้… ให้ได้…!",
						"hindi": "नहीं... मैं याद रखूंगा... निश्चित रूप से...!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "도시의 가장 깊은 곳. 망각의 파동이 응축된 거대한 그림자가 기다리고 있었다.",
						"english": "The deepest part of the city. A colossal shadow, condensed with waves of oblivion, awaited.",
						"japanese": "街の最も深い場所。忘却の波動が凝縮された巨大な影が待っていた。",
						"chinese": "城市最深处。一道凝聚着遗忘波动的巨大阴影正在等待。",
						"french": "Au plus profond de la ville. Une ombre colossale, condensée par les ondes de l'oubli, attendait.",
						"spanish": "La parte más profunda de la ciudad. Una sombra colosal, condensada con ondas de olvido, esperaba.",
						"vietnamese": "Nơi sâu thẳm nhất của thành phố. Một cái bóng khổng lồ, ngưng tụ sóng lãng quên, đang chờ đợi.",
						"thai": "ส่วนที่ลึกที่สุดของเมือง เงาขนาดยักษ์ที่ควบแน่นด้วยคลื่นแห่งการหลงลืมกำลังรออยู่",
						"hindi": "शहर का सबसे गहरा हिस्सा। विस्मृति की तरंगों से घनीभूत एक विशाल छाया इंतजार कर रही थी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "사라져야 할 것들은, 사라져야 한다. 그것이 질서.",
						"english": "What must vanish, must vanish. That is order.",
						"japanese": "消え去るべきものは、消え去るべきだ。それが秩序。",
						"chinese": "该消失的，就该消失。那是秩序。",
						"french": "Ce qui doit disparaître, doit disparaître. C'est l'ordre.",
						"spanish": "Lo que debe desaparecer, debe desaparecer. Esa es la ley.",
						"vietnamese": "Những thứ phải biến mất, phải biến mất. Đó là trật tự.",
						"thai": "สิ่งที่ควรจะหายไป ก็ควรจะหายไป นั่นคือระเบียบ",
						"hindi": "जो मिटना चाहिए, वह मिटना चाहिए। यही व्यवस्था है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 모든 걸 꾸민 거야!",
						"english": "You orchestrated all of this!",
						"japanese": "お前がこの全てを企んだのか！",
						"chinese": "这一切都是你策划的！",
						"french": "C'est toi qui as tout orchestré !",
						"spanish": "¡Tú orquestaste todo esto!",
						"vietnamese": "Ngươi đã sắp đặt tất cả những chuyện này!",
						"thai": "แกเป็นคนจัดฉากทั้งหมดนี้!",
						"hindi": "यह सब तुमने रचा है!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "기억하지 못할 너희에게, 설명은 불필요하다.",
						"english": "For those who will not remember, explanation is unnecessary.",
						"japanese": "記憶できないお前たちに、説明は不要だ。",
						"chinese": "对于无法记住的你们，解释毫无必要。",
						"french": "Pour ceux qui ne se souviendront pas, toute explication est inutile.",
						"spanish": "Para aquellos que no recordarán, la explicación es innecesaria.",
						"vietnamese": "Với những kẻ không thể nhớ, lời giải thích là không cần thiết.",
						"thai": "สำหรับพวกเจ้าที่จะจำไม่ได้ คำอธิบายก็ไม่จำเป็น",
						"hindi": "जो याद नहीं रखेंगे, उनके लिए स्पष्टीकरण अनावश्यक है।"
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter",
					"speaker": "dax"
				},
				{
					"content": {
						"korean": "{random_boss}! 내 모든 것을 앗아간 너를 용서 못 해!",
						"english": "{random_boss}! I can't forgive you for taking everything from me!",
						"japanese": "{random_boss}！私の全てを奪ったお前を許さない！",
						"chinese": "{random_boss}！我不能原谅你夺走我的一切！",
						"french": "{random_boss} ! Je ne te pardonnerai jamais de m'avoir tout pris !",
						"spanish": "¡{random_boss}! ¡No puedo perdonarte por haberme quitado todo!",
						"vietnamese": "{random_boss}! Ta không thể tha thứ cho ngươi vì đã cướp đi mọi thứ của ta!",
						"thai": "{random_boss}! ฉันไม่ให้อภัยแกที่พรากทุกสิ่งทุกอย่างไปจากฉัน!",
						"hindi": "{random_boss}! तुम मुझे माफ नहीं कर सकते कि तुमने मुझसे सब कुछ छीन लिया!"
					},
					"emotion": "angry",
					"speaker": "dax",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "그저… 망각의 파동에 휩쓸린 것일 뿐.",
						"english": "It was merely... swept away by the waves of oblivion.",
						"japanese": "ただ…忘却の波動に巻き込まれただけだ。",
						"chinese": "那只是…被遗忘的波动所吞噬罢了。",
						"french": "Ce n'était que… emporté par les ondes de l'oubli.",
						"spanish": "Fue simplemente… arrastrado por las ondas del olvido.",
						"vietnamese": "Chỉ là... bị cuốn trôi bởi sóng lãng quên mà thôi.",
						"thai": "เป็นเพียง...ถูกคลื่นแห่งการหลงลืมพัดพาไปเท่านั้น",
						"hindi": "यह सिर्फ… विस्मृति की तरंगों में बह गया।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아… 안 돼… 내 기억이… 사라져…!",
						"english": "Ah... no... my memories... are fading...!",
						"japanese": "あ…だめだ…私の記憶が…消えていく…！",
						"chinese": "啊…不…我的记忆…正在消失…！",
						"french": "Ah… non… mes souvenirs… s'effacent… !",
						"spanish": "Ah… no… mis recuerdos… están desapareciendo…!",
						"vietnamese": "Ôi... không... ký ức của ta... đang biến mất...!",
						"thai": "อ...ไม่นะ...ความทรงจำของฉัน...กำลังหายไป...!",
						"hindi": "आह… नहीं… मेरी यादें… मिट रही हैं…!"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "dax"
				},
				{
					"duration_ms": 400,
					"direction": "down",
					"type": "direction",
					"speaker": "dax",
					"action": "exit"
				},
				{
					"content": {
						"korean": "닥스!",
						"english": "Dux!",
						"japanese": "ダックス！",
						"chinese": "达克斯！",
						"french": "Dux !",
						"spanish": "¡Dux!",
						"vietnamese": "Dux!",
						"thai": "ดั๊กซ์!",
						"hindi": "डक्स!"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "너희의 존재마저도, 곧 잊히리라.",
						"english": "Even your very existence will soon be forgotten.",
						"japanese": "お前たちの存在すら、いずれ忘れ去られるだろう。",
						"chinese": "甚至连你们的存在，也会很快被遗忘。",
						"french": "Votre existence même sera bientôt oubliée.",
						"spanish": "Hasta vuestra existencia pronto será olvidada.",
						"vietnamese": "Ngay cả sự tồn tại của các ngươi cũng sẽ sớm bị lãng quên.",
						"thai": "แม้แต่การมีอยู่ของพวกเจ้า ก็จะถูกลืมเลือนไปในไม่ช้า",
						"hindi": "तुम्हारा अस्तित्व भी जल्द ही भुला दिया जाएगा।"
					},
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "어리석은… 저항. 너희의 기억도… 결국… 파동에… 휩쓸릴… 것이다…",
						"english": "Foolish... resistance. Your memories, too... will ultimately... be swept away... by the wave...",
						"japanese": "愚かな…抵抗。お前たちの記憶も…結局は…波動に…飲み込まれるだろう…",
						"chinese": "愚蠢的…抵抗。你们的记忆…最终…也会被…波动…吞噬…",
						"french": "Stupide... résistance. Vos souvenirs aussi... seront finalement... emportés... par la vague...",
						"spanish": "Estúpida... resistencia. Vuestros recuerdos también... al final... serán arrastrados... por la ola...",
						"vietnamese": "Kháng cự... thật ngu xuẩn. Ký ức của các ngươi... cuối cùng cũng sẽ... bị sóng... cuốn trôi...",
						"thai": "การต่อต้าน…ที่โง่เขลา… ความทรงจำของพวกเจ้าก็…ในที่สุด…จะถูกคลื่น…กลืนกินไป…",
						"hindi": "मूर्खतापूर्ण... प्रतिरोध। तुम्हारी यादें भी... अंततः... लहरों में... बह जाएंगी..."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "아니! 우리는 기억할 거야! 절대 잊지 않아!",
						"english": "No! We will remember! We will never forget!",
						"japanese": "違う！私たちは覚えている！決して忘れない！",
						"chinese": "不！我们会记住的！绝不会忘记！",
						"french": "Non ! Nous nous souviendrons ! Nous n'oublierons jamais !",
						"spanish": "¡No! ¡Recordaremos! ¡Jamás olvidaremos!",
						"vietnamese": "Không! Chúng ta sẽ nhớ! Sẽ không bao giờ quên!",
						"thai": "ไม่! เราจะจำไว้! จะไม่มีวันลืม!",
						"hindi": "नहीं! हम याद रखेंगे! कभी नहीं भूलेंगे!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "망각의 파동은 잠시 잦아들었지만, 도시는 여전히 혼란스러웠다. 카운트다운은 멈추지 않았다.",
						"english": "The wave of oblivion subsided for a moment, but the city remained in chaos. The countdown did not stop.",
						"japanese": "忘却の波動は一時的に収まったが、都市は依然として混乱していた。カウントダウンは止まらなかった。",
						"chinese": "遗忘的波动暂时平息了，但城市依然混乱。倒计时并未停止。",
						"french": "La vague d'oubli s'est calmée un instant, mais la ville restait dans le chaos. Le compte à rebours ne s'est pas arrêté.",
						"spanish": "La ola del olvido amainó por un momento, pero la ciudad seguía sumida en el caos. La cuenta atrás no se detuvo.",
						"vietnamese": "Làn sóng lãng quên tạm thời lắng xuống, nhưng thành phố vẫn hỗn loạn. Đồng hồ đếm ngược không dừng lại.",
						"thai": "คลื่นแห่งการลืมเลือนสงบลงชั่วขณะ แต่เมืองยังคงสับสนอลหม่าน การนับถอยหลังไม่ได้หยุดลง",
						"hindi": "विस्मृति की लहर क्षण भर के लिए शांत हो गई, लेकिन शहर अभी भी अराजकता में था। उलटी गिनती नहीं रुकी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			]
		}
	]
} as const;
