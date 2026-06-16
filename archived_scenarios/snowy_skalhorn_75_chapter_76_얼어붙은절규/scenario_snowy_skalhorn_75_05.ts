export const scenario_snowy_skalhorn_75_05 = {
	"scenario_id": "snowy_skalhorn_75_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "snowy",
	"actors": {
		"boris": {
			"id": "mon_8f41e00a-9c1b-4e66-9d7a-584cc2a9af84",
			"name": {
				"korean": "보리스",
				"english": "Boris",
				"japanese": "ボリス",
				"chinese": "鲍里斯",
				"french": "Boris",
				"spanish": "Boris",
				"vietnamese": "Boris",
				"thai": "บอริส",
				"hindi": "बोरिस"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8db2ee50-a24d-43cf-a3ec-fad83142f500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/961dfd96-9db1-42aa-a15b-82ba7d1ae700/public"
		}
	},
	"boss": {
		"pool_id": "pool_110"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "뿔잔의 가장 깊은 곳. 수정들이 빽빽이 박혀 있었다.",
						"english": "The deepest part of the Horned Chalice. Crystals were densely embedded.",
						"japanese": "角杯の最も深い場所。水晶がぎっしりと埋め込まれていた。",
						"chinese": "号角圣杯的最深处。水晶密密麻麻地镶嵌着。",
						"french": "La partie la plus profonde du Calice Cornu. Des cristaux y étaient densément incrustés.",
						"spanish": "La parte más profunda del Cáliz Astado. Cristales densamente incrustados.",
						"vietnamese": "Nơi sâu thẳm nhất của Chiếc Ly Sừng. Các tinh thể được gắn dày đặc.",
						"thai": "ส่วนที่ลึกที่สุดของจอกศักดิ์สิทธิ์ มีคริสตัลฝังแน่นอยู่เต็มไปหมด",
						"hindi": "सींग वाले प्याले का सबसे गहरा भाग। क्रिस्टल घनीभूत रूप से जड़े थे।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "저 안에… 얼굴이?",
						"english": "Inside there... a face?",
						"japanese": "その中に…顔が？",
						"chinese": "里面…有张脸？",
						"french": "À l'intérieur… un visage?",
						"spanish": "¿Ahí dentro… una cara?",
						"vietnamese": "Bên trong đó… một khuôn mặt?",
						"thai": "ข้างในนั้น… ใบหน้า?",
						"hindi": "उसके अंदर... एक चेहरा?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "수정 속 일그러진 얼굴들에서 낮은 웅얼거림이 새어 나왔다.",
						"english": "Low murmurs emanated from the distorted faces within the crystal.",
						"japanese": "水晶の中の歪んだ顔から低いささやきが漏れてきた。",
						"chinese": "水晶中扭曲的脸庞发出低沉的咕哝声。",
						"french": "De faibles murmures émanaient des visages déformés à l'intérieur du cristal.",
						"spanish": "Bajos murmullos emanaban de los rostros distorsionados dentro del cristal.",
						"vietnamese": "Những tiếng thì thầm khẽ khàng thoát ra từ những khuôn mặt méo mó trong pha lê.",
						"thai": "เสียงพึมพำแผ่วเบาเล็ดลอดออกมาจากใบหน้าบิดเบี้ยวในคริสตัล",
						"hindi": "क्रिस्टल के अंदर विकृत चेहरों से धीमी फुसफुसाहटें निकलीं।"
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "boris",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "쳇, 여기까지 와서 또 저 요란한 소리라니.",
						"english": "Ugh, that noisy sound again, even all the way out here.",
						"japanese": "ちっ、こんな所まで来て、またあの騒がしい音か。",
						"chinese": "嘁，都到这儿了，又是那种吵闹的声音。",
						"french": "Pff, encore ce bruit assourdissant, même jusqu'ici.",
						"spanish": "Tsk, otra vez ese ruido molesto, incluso aquí.",
						"vietnamese": "Chậc, đến tận đây rồi mà vẫn còn cái tiếng ồn ào đó.",
						"thai": "เฮ้อ! มาถึงที่นี่แล้วก็ยังเจอเสียงเอะอะน่ารำคาญอีกแล้วเหรอเนี่ย",
						"hindi": "उफ़, यहाँ तक आकर भी वही शोरगुल।"
					},
					"emotion": "base",
					"speaker": "boris",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "저게 뭐야? 노래 같은데…",
						"english": "What's that? Sounds like a song...",
						"japanese": "あれは何だ？歌のように聞こえるけど…",
						"chinese": "那是什么？听起来像是歌…",
						"french": "C'est quoi ça ? On dirait une chanson…",
						"spanish": "¿Qué es eso? Parece una canción...",
						"vietnamese": "Cái gì vậy? Nghe như một bài hát…",
						"thai": "นั่นอะไรน่ะ? เหมือนเพลงเลย...",
						"hindi": "यह क्या है? किसी गाने जैसा लगता है..."
					},
					"emotion": "base"
				},
				{
					"speaker": "boris",
					"type": "speech",
					"content": {
						"korean": "노래? 잘 들어봐. 어딘가 비명이 섞여 있어.",
						"english": "A song? Listen closely. There's a scream mixed in somewhere.",
						"japanese": "歌？よく聞いてみろ。どこかに悲鳴が混じっている。",
						"chinese": "歌？仔细听听。里面混杂着尖叫声。",
						"french": "Une chanson ? Écoute bien. Il y a un cri mêlé quelque part.",
						"spanish": "¿Una canción? Escucha con atención. Hay un grito mezclado en algún lugar.",
						"vietnamese": "Hát à? Nghe kỹ xem. Hình như có tiếng la hét lẫn vào đó.",
						"thai": "เพลงเหรอ? ลองฟังดีๆ สิ มีเสียงกรีดร้องปะปนอยู่ด้วย",
						"hindi": "गाना? ध्यान से सुनो। कहीं-न-कहीं चीखें भी मिली हुई हैं।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "boris",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "이 소리, 전에 들었던 것보다 더 심해졌군.",
						"english": "This sound, it's gotten worse than before.",
						"japanese": "この音、前に聞いた時よりひどくなってるな。",
						"chinese": "这声音，比之前听到的更糟了。",
						"french": "Ce son, c'est pire que la dernière fois.",
						"spanish": "Este sonido, está peor que antes.",
						"vietnamese": "Tiếng động này, nó tệ hơn trước nhiều rồi.",
						"thai": "เสียงนี้ มันแย่กว่าที่เคยได้ยินมาอีก",
						"hindi": "यह आवाज़, पहले से ज़्यादा ख़राब हो गई है।"
					},
					"emotion": "base",
					"speaker": "boris",
					"type": "speech"
				},
				{
					"content": {
						"korean": "머리가 울려… 황홀한 것 같기도 하고…",
						"english": "My head is throbbing... it almost feels enchanting...",
						"japanese": "頭が響く…うっとりするような気もする…",
						"chinese": "头好疼…又好像有些陶醉…",
						"french": "Ma tête résonne... ça a presque l'air envoûtant...",
						"spanish": "Mi cabeza resuena... casi se siente extasiante...",
						"vietnamese": "Đầu tôi đang rung lên… cứ như thể đang đắm chìm vào cõi mê…",
						"thai": "หัวฉันมันสะท้อน... เหมือนจะเคลิบเคลิ้มไปด้วย...",
						"hindi": "मेरा सिर बज रहा है… मानो मंत्रमुग्ध कर रहा हो…"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "boris",
					"content": {
						"korean": "착각하지 마. 이건 찬가가 아니야. 그저… 강요된 비명일 뿐.",
						"english": "Don't be mistaken. This isn't a hymn. It's just... forced screams.",
						"japanese": "錯覚するな。これは賛歌じゃない。ただ…強要された悲鳴に過ぎない。",
						"chinese": "别搞错了。这不是赞歌。这只是…被迫的尖叫。",
						"french": "Ne te méprends pas. Ce n'est pas un hymne. Ce ne sont que... des cris forcés.",
						"spanish": "No te equivoques. Esto no es un himno. Son solo... gritos forzados.",
						"vietnamese": "Đừng nhầm lẫn. Đây không phải là thánh ca. Đây chỉ là… những tiếng la hét bị ép buộc.",
						"thai": "อย่าเข้าใจผิด นี่ไม่ใช่เพลงสรรเสริญ แต่มันเป็นแค่... เสียงกรีดร้องที่ถูกบังคับ",
						"hindi": "ग़लती मत करो। यह कोई भजन नहीं है। यह सिर्फ़… ज़बरदस्ती की चीख़ें हैं।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "누군가 비명을 노래로 둔갑시킨 거다.",
						"english": "Someone has disguised screams as a song.",
						"japanese": "誰かが悲鳴を歌に偽装したんだ。",
						"chinese": "有人把尖叫伪装成了歌。",
						"french": "Quelqu'un a déguisé des cris en chanson.",
						"spanish": "Alguien ha disfrazado los gritos de canción.",
						"vietnamese": "Ai đó đã biến tiếng la hét thành bài hát.",
						"thai": "มีคนปลอมแปลงเสียงกรีดร้องให้เป็นเพลง",
						"hindi": "किसी ने चीखों को गाने का रूप दे दिया है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "boris"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"speaker": "boris",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "boris",
					"content": {
						"korean": "수정 하나하나에 갇힌 영혼들의 절규. 그게 저 찬가의 실체야.",
						"english": "The wails of souls trapped in each crystal. That's the true nature of that hymn.",
						"japanese": "水晶一つ一つに囚われた魂たちの絶叫。それが、あの賛歌の正体だ。",
						"chinese": "困在每个水晶里的灵魂的哀嚎。那才是那赞歌的真实面目。",
						"french": "Les hurlements des âmes piégées dans chaque cristal. C'est la véritable nature de cet hymne.",
						"spanish": "Los lamentos de las almas atrapadas en cada cristal. Esa es la verdadera naturaleza de ese himno.",
						"vietnamese": "Tiếng gào thét của những linh hồn bị giam cầm trong từng viên pha lê. Đó chính là bản chất thực sự của bài thánh ca đó.",
						"thai": "เสียงคร่ำครวญของวิญญาณที่ถูกขังอยู่ในคริสตัลแต่ละก้อน นั่นคือตัวตนที่แท้จริงของเพลงสรรเสริญนั้น",
						"hindi": "हर क्रिस्टल में फँसी आत्माओं की चीखें। वही उस भजन की असली सच्चाई है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아름다운… 노래…",
						"english": "A beautiful... song...",
						"japanese": "美しい…歌…",
						"chinese": "美丽的…歌…",
						"french": "Une belle… chanson…",
						"spanish": "Una hermosa... canción...",
						"vietnamese": "Một bài hát… tuyệt đẹp…",
						"thai": "เพลง...ที่ไพเราะ...",
						"hindi": "एक सुंदर… गीत…"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "boris",
					"type": "speech",
					"content": {
						"korean": "정신 차려! 저건 아름다운 게 아니야. 네 이성을 좀먹는 광기일 뿐!",
						"english": "Snap out of it! That's not beautiful. It's madness gnawing at your sanity!",
						"japanese": "しっかりしろ！あれは美しいものじゃない。君の理性を蝕む狂気にすぎない！",
						"chinese": "清醒一点！那不是美。那只是吞噬你理智的疯狂！",
						"french": "Reprends tes esprits ! Ce n'est pas beau. C'est juste la folie qui ronge ta raison !",
						"spanish": "¡Espabila! Eso no es hermoso. ¡Es la locura carcomiendo tu cordura!",
						"vietnamese": "Tỉnh táo lại! Đó không phải là cái đẹp. Đó chỉ là sự điên rồ đang gặm nhấm lý trí của ngươi!",
						"thai": "ได้สติหน่อย! นั่นไม่ใช่ความงาม มันเป็นเพียงความบ้าคลั่งที่กัดกินสติของเจ้า!",
						"hindi": "होश में आओ! वह सुंदर नहीं है। वह केवल पागलपन है जो तुम्हारी समझ को खा रहा है!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "윽… 뭐지? 갑자기 머리가 맑아졌어.",
						"english": "Ugh... What was that? My head suddenly cleared.",
						"japanese": "うぅ…何だ？急に頭がすっきりした。",
						"chinese": "呃…什么？我的头脑突然清醒了。",
						"french": "Ugh... Qu'est-ce que c'était ? Ma tête s'est soudainement éclaircie.",
						"spanish": "Ugh... ¿Qué fue eso? De repente mi cabeza se aclaró.",
						"vietnamese": "Ưm... Gì vậy? Tự nhiên đầu óc tôi tỉnh táo hẳn ra.",
						"thai": "อึก... อะไรนะ? จู่ๆ หัวของฉันก็โล่งขึ้นมาเลย.",
						"hindi": "उह... वह क्या था? मेरा सिर अचानक साफ हो गया।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "boris",
					"content": {
						"korean": "저 소리는 듣는 이를 축제에 동참시키려 해. 영원히 멈추지 않는 광기의 축제에.",
						"english": "That sound tries to draw listeners into a festival. A mad festival that never ends.",
						"japanese": "あの音は、聞く者を祭りに誘い込もうとしている。永遠に終わらない狂気の祭りに。",
						"chinese": "那声音试图将听者卷入一场盛宴。一场永无止境的疯狂盛宴。",
						"french": "Ce son tente d'entraîner ceux qui l'entendent dans une fête. Une fête de folie qui ne s'arrête jamais.",
						"spanish": "Ese sonido intenta arrastrar a los oyentes a una fiesta. Una fiesta de locura que nunca termina.",
						"vietnamese": "Âm thanh đó cố lôi kéo người nghe vào một lễ hội. Một lễ hội điên loạn không bao giờ dứt.",
						"thai": "เสียงนั้นพยายามดึงดูดผู้ฟังให้เข้าร่วมงานเทศกาล งานเทศกาลแห่งความบ้าคลั่งที่ไม่สิ้นสุด.",
						"hindi": "वह आवाज़ सुनने वालों को एक उत्सव में शामिल करने की कोशिश कर रही है। एक पागल उत्सव जो कभी समाप्त नहीं होता।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "boris",
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "저것들을 봐. 모든 얼굴이 똑같은 표정으로, 똑같은 입 모양으로…",
						"english": "Look at them. Every face with the same expression, the same mouth shape...",
						"japanese": "あれらを見て。どの顔も同じ表情、同じ口の形で…",
						"chinese": "看它们。每张脸都带着相同的表情，相同的嘴型…",
						"french": "Regardez-les. Tous les visages avec la même expression, la même forme de bouche...",
						"spanish": "Míralos. Cada cara con la misma expresión, la misma forma de boca...",
						"vietnamese": "Nhìn chúng kìa. Mọi khuôn mặt đều cùng một biểu cảm, cùng một khẩu hình...",
						"thai": "ดูพวกมันสิ. ทุกใบหน้ามีสีหน้าเดียวกัน, รูปปากเดียวกัน...",
						"hindi": "उन्हें देखो। हर चेहरा एक ही भाव, एक ही मुंह के आकार के साथ..."
					},
					"emotion": "base",
					"speaker": "boris",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "마치… 같은 노래를 부르는 것 같아.",
						"english": "It's like... they're singing the same song.",
						"japanese": "まるで…同じ歌を歌っているようだ。",
						"chinese": "就像…它们在唱同一首歌。",
						"french": "C'est comme si... ils chantaient la même chanson.",
						"spanish": "Es como si... estuvieran cantando la misma canción.",
						"vietnamese": "Cứ như thể... chúng đang hát cùng một bài ca.",
						"thai": "เหมือนกับว่า... พวกเขากำลังร้องเพลงเดียวกัน.",
						"hindi": "यह ऐसा है... मानो वे एक ही गाना गा रहे हों।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "강요된 합창이야. 비명을 영원한 노래로 박제해 버린 거지.",
						"english": "It's a forced chorus. They've preserved screams as eternal songs.",
						"japanese": "強制された合唱だ。悲鳴を永遠の歌として剥製にしてしまったんだ。",
						"chinese": "这是一场合唱。他们把尖叫变成了永恒的歌曲。",
						"french": "C'est un chœur forcé. Ils ont figé des cris en chants éternels.",
						"spanish": "Es un coro forzado. Han convertido los gritos en canciones eternas.",
						"vietnamese": "Đây là một hợp xướng bị cưỡng ép. Họ đã biến những tiếng hét thành những bài ca vĩnh cửu.",
						"thai": "มันคือการขับร้องหมู่ที่ถูกบังคับ. พวกเขาเปลี่ยนเสียงกรีดร้องให้เป็นบทเพลงนิรันดร์.",
						"hindi": "यह एक मजबूर कोरस है। उन्होंने चीखों को शाश्वत गीतों में बदल दिया है।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "boris"
				},
				{
					"content": {
						"korean": "저 끔찍한 거짓된 찬가를 영원히 멈춰야 해.",
						"english": "That horrible, false anthem must be stopped forever.",
						"japanese": "あの恐ろしい偽りの賛歌を永遠に止めなければならない。",
						"chinese": "那可怕的虚假赞歌必须永远停止。",
						"french": "Cet horrible et faux hymne doit être arrêté pour toujours.",
						"spanish": "Ese horrible y falso himno debe ser detenido para siempre.",
						"vietnamese": "Bài thánh ca giả dối đáng sợ đó phải bị chấm dứt vĩnh viễn.",
						"thai": "เพลงสดุดีจอมปลอมที่น่ากลัวนั้นจะต้องถูกหยุดยั้งตลอดไป.",
						"hindi": "उस भयानक, झूठे भजन को हमेशा के लिए रोकना होगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "boris"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "광기의 찬가가 다시 울려 퍼졌다. 수정들이 다시 빛났다.",
						"english": "The hymn of madness echoed once more. The crystals glowed again.",
						"japanese": "狂気の賛歌が再び響き渡った。水晶が再び輝き出した。",
						"chinese": "疯狂的赞歌再次回荡。水晶再次闪耀。",
						"french": "L'hymne de la folie résonna de nouveau. Les cristaux brillèrent encore.",
						"spanish": "El himno de la locura resonó una vez más. Los cristales volvieron a brillar.",
						"vietnamese": "Khúc ca điên cuồng lại vang lên. Các tinh thể lại phát sáng.",
						"thai": "เพลงสวดแห่งความบ้าคลั่งดังก้องอีกครั้ง ผลึกกลับมาส่องแสงอีกครา",
						"hindi": "पागलपन का भजन फिर से गूंज उठा। क्रिस्टल फिर से चमक उठे।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "너희도 영원한 합창의 일부가 될 뿐. 저들과 함께.",
						"english": "You too shall merely become part of the eternal chorus. Along with them.",
						"japanese": "お前たちも永遠の合唱の一部となるだけだ。彼らと共に。",
						"chinese": "你们也将成为永恒合唱的一部分。与他们一起。",
						"french": "Vous aussi, vous ne ferez que devenir une partie du chœur éternel. Avec eux.",
						"spanish": "Vosotros también os convertiréis en parte del coro eterno. Junto con ellos.",
						"vietnamese": "Ngươi cũng sẽ chỉ trở thành một phần của bản hợp xướng vĩnh cửu. Cùng với bọn họ.",
						"thai": "พวกเจ้าก็จะกลายเป็นส่วนหนึ่งของเพลงประสานเสียงนิรันดร์เช่นกัน พร้อมกับพวกมัน",
						"hindi": "तुम भी शाश्वत कोरस का हिस्सा बन जाओगे। उनके साथ।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "멈출 수 없어… 아직… 끝나지 않았어!",
						"english": "Cannot stop… Not… over yet!",
						"japanese": "止められない… まだ… 終わってない！",
						"chinese": "无法阻止… 还没… 结束！",
						"french": "Impossible d'arrêter… Ce n'est pas… encore fini !",
						"spanish": "No puedo parar… Todavía… no ha terminado!",
						"vietnamese": "Không thể dừng lại… Vẫn… chưa kết thúc!",
						"thai": "หยุดไม่ได้… ยัง… ไม่จบ!",
						"hindi": "रुक नहीं सकता… अभी… खत्म नहीं हुआ!"
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "거대한 수정이 산산조각 났다. 광기의 합창이 멎었다.",
						"english": "The giant crystal shattered. The chorus of madness ceased.",
						"japanese": "巨大な水晶は粉々に砕けた。狂気の合唱は止んだ。",
						"chinese": "巨大的水晶碎裂了。疯狂的合唱停止了。",
						"french": "L'immense cristal s'est brisé. Le chœur de la folie s'est tu.",
						"spanish": "El cristal gigante se hizo añicos. El coro de locura cesó.",
						"vietnamese": "Pha lê khổng lồ vỡ tan tành. Hợp xướng điên cuồng đã im bặt.",
						"thai": "ผลึกยักษ์แตกละเอียด บทเพลงแห่งความคลั่งเงียบงันลง",
						"hindi": "विशाल क्रिस्टल टूट गया। पागलपन का कोरस थम गया।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "우리는… 구원받지 못했다… 우리는 그저… 영원히 노래하게 되었을 뿐…",
						"english": "We were... not saved... We were merely... doomed to sing forever...",
						"japanese": "我々は…救済されなかった…ただ…永遠に歌わされるだけだった…",
						"chinese": "我们……没有被救赎……我们只是……永远地歌唱着……",
						"french": "Nous n'avons... pas été sauvés... Nous avons juste... été condamnés à chanter éternellement...",
						"spanish": "No fuimos... salvados... Simplemente... fuimos condenados a cantar para siempre...",
						"vietnamese": "Chúng ta... không được cứu rỗi... Chúng ta chỉ... phải hát mãi mãi...",
						"thai": "พวกเรา...ไม่ได้รับการไถ่บาป...พวกเราแค่...ถูกบังคับให้ขับขานนิรันดร์...",
						"hindi": "हम... बच नहीं पाए... हम बस... हमेशा के लिए गाने के लिए मजबूर थे..."
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그게… 진실이었어.",
						"english": "That... was the truth.",
						"japanese": "それが…真実だった。",
						"chinese": "那……才是真相。",
						"french": "C'était... la vérité.",
						"spanish": "Esa... era la verdad.",
						"vietnamese": "Đó... là sự thật.",
						"thai": "นั่นคือ...ความจริง",
						"hindi": "वह... सच था।"
					},
					"emotion": "sad"
				},
				{
					"duration_ms": 500,
					"speaker": "boris",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "boris",
					"type": "speech",
					"content": {
						"korean": "끔찍한 진실이지. 하지만 이제라도 멈출 수 있었으니 다행이야.",
						"english": "A terrible truth. But it's a relief we could stop it now.",
						"japanese": "恐ろしい真実だ。しかし、今止められただけでも幸いだった。",
						"chinese": "可怕的真相。但很高兴我们现在能够阻止它。",
						"french": "Une terrible vérité. Mais c'est un soulagement que nous ayons pu l'arrêter maintenant.",
						"spanish": "Una verdad terrible. Pero es un alivio que hayamos podido detenerlo ahora.",
						"vietnamese": "Một sự thật khủng khiếp. Nhưng may mắn là chúng ta đã có thể ngăn chặn nó ngay bây giờ.",
						"thai": "ความจริงที่น่าสะพรึงกลัว แต่ก็ยังดีที่เราหยุดมันได้ในตอนนี้",
						"hindi": "एक भयानक सच। लेकिन शुक्र है कि हम इसे अब रोक पाए।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "침묵이 찾아왔다. 축제의 광기가 걷히자 숲은 본래의 소리를 되찾았다.",
						"english": "Silence fell. As the festive madness receded, the forest regained its natural sounds.",
						"japanese": "沈黙が訪れた。祭りの狂気が去り、森は本来の音を取り戻した。",
						"chinese": "寂静降临。随着庆典的疯狂消退，森林恢复了它原本的声音。",
						"french": "Le silence est tombé. La folie de la fête s'est dissipée et la forêt a retrouvé ses sons originels.",
						"spanish": "El silencio se apoderó del lugar. A medida que la locura festiva retrocedía, el bosque recuperó sus sonidos naturales.",
						"vietnamese": "Sự im lặng bao trùm. Khi cơn điên loạn của lễ hội tan biến, khu rừng lấy lại âm thanh vốn có của nó.",
						"thai": "ความเงียบสงัดเข้าปกคลุม เมื่อความคลั่งไคล้ในงานเลี้ยงจางหายไป ป่าก็กลับคืนสู่เสียงธรรมชาติ",
						"hindi": "सन्नाटा छा गया। जैसे ही उत्सव का पागलपन कम हुआ, जंगल ने अपनी प्राकृतिक आवाज़ें फिर से हासिल कर लीं।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그러나 뿔잔의 어둠은 완전히 사라지지 않았다. 아직, 끝나지 않은 이야기가 남아 있었다.",
						"english": "However, the darkness of the Horned Chalice had not completely vanished. An unfinished story still remained.",
						"japanese": "しかし、角杯の闇は完全には消え去っていなかった。まだ、終わらない物語が残っていた。",
						"chinese": "然而，号角杯的黑暗并未完全消失。一个未完待续的故事仍在继续。",
						"french": "Cependant, l'obscurité du Calice Cornu n'avait pas complètement disparu. Une histoire inachevée persistait.",
						"spanish": "Sin embargo, la oscuridad del Cáliz Cornudo no había desaparecido por completo. Aún quedaba una historia sin terminar.",
						"vietnamese": "Tuy nhiên, bóng tối của Chiếc Sừng không hoàn toàn biến mất. Một câu chuyện chưa kết thúc vẫn còn đó.",
						"thai": "อย่างไรก็ตาม ความมืดมิดของจอกเขายังไม่จางหายไปโดยสิ้นเชิง เรื่องราวที่ยังไม่จบยังคงเหลืออยู่",
						"hindi": "हालाँकि, हॉर्नड चालिस का अँधेरा पूरी तरह से गायब नहीं हुआ था। एक अधूरी कहानी अभी भी बाकी थी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "거대한 수정이 모습을 드러냈다. 그 안에서 기이한 형상이 춤추고 있었다.",
						"english": "A gigantic crystal appeared. Strange figures were dancing within it.",
						"japanese": "巨大な水晶が現れた。その中で奇妙な形が踊っていた。",
						"chinese": "一个巨大的水晶显现了。奇异的形状在其中舞动。",
						"french": "Un cristal gigantesque apparut. Des formes étranges dansaient à l'intérieur.",
						"spanish": "Un cristal gigantesco apareció. Extrañas figuras bailaban en su interior.",
						"vietnamese": "Một khối pha lê khổng lồ hiện ra. Những hình thù kỳ dị đang nhảy múa bên trong.",
						"thai": "คริสตัลขนาดมหึมาปรากฏขึ้น. รูปร่างแปลกประหลาดกำลังเต้นรำอยู่ภายในนั้น.",
						"hindi": "एक विशाल क्रिस्टल प्रकट हुआ। उसके भीतर अजीबोगरीब आकृतियाँ नाच रही थीं।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "드디어 여기까지 왔군. 나의 영원한 축제에 동참할 자들이여.",
						"english": "You've finally made it this far. Those who will join my eternal festival.",
						"japanese": "ついにここまで来たか。我が永遠の祭りに参加する者たちよ。",
						"chinese": "你们终于走到这里了。那些将加入我永恒盛宴的人们。",
						"french": "Vous êtes enfin arrivés jusqu'ici. Ceux qui rejoindront ma fête éternelle.",
						"spanish": "Finalmente han llegado hasta aquí. Aquellos que se unirán a mi festival eterno.",
						"vietnamese": "Cuối cùng các ngươi cũng đã đến đây. Những kẻ sẽ tham gia vào lễ hội vĩnh cửu của ta.",
						"thai": "ในที่สุดพวกเจ้าก็มาถึงที่นี่. ผู้ที่จะเข้าร่วมงานเทศกาลนิรันดร์ของข้า.",
						"hindi": "तुम आखिर यहाँ तक पहुँच गए। वे जो मेरे शाश्वत उत्सव में शामिल होंगे।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "네가 이 모든 것을 꾸민 건가? 이 비명들을… 노래로 만든 게?",
						"english": "Did you orchestrate all of this? Turning these screams... into songs?",
						"japanese": "お前がこの全てを企んだのか？この悲鳴を…歌に変えたのか？",
						"chinese": "这一切都是你策划的吗？把这些尖叫…变成歌曲？",
						"french": "C'est toi qui as orchestré tout ça ? Transformer ces cris... en chansons ?",
						"spanish": "¿Fuiste tú quien orquestó todo esto? ¿Convertir estos gritos... en canciones?",
						"vietnamese": "Ngươi đã dàn dựng tất cả chuyện này sao? Biến những tiếng hét này... thành những bài ca ư?",
						"thai": "เจ้าเป็นคนบงการทั้งหมดนี้หรือ? เปลี่ยนเสียงกรีดร้องเหล่านี้... ให้กลายเป็นเพลง?",
						"hindi": "क्या तुमने यह सब रचा है? इन चीखों को... गानों में बदल दिया?"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "구원이라고 불러주렴. 이들은 영원히 노래할 거야. 나의 권능 아래에서.",
						"english": "Call it salvation. They will sing forever. Under my dominion.",
						"japanese": "救済と呼べ。彼らは永遠に歌い続けるだろう。私の権能の下で。",
						"chinese": "称之为救赎吧。他们将永远歌唱。在我的权能之下。",
						"french": "Appelez cela le salut. Ils chanteront éternellement. Sous mon autorité.",
						"spanish": "Llámalo salvación. Cantarán para siempre. Bajo mi poder.",
						"vietnamese": "Hãy gọi đó là sự cứu rỗi. Chúng sẽ hát mãi mãi. Dưới quyền năng của ta.",
						"thai": "จงเรียกว่าการไถ่บาป พวกเขาจะขับขานชั่วนิรันดร์ ภายใต้อำนาจของข้า",
						"hindi": "इसे मोक्ष कहो। वे हमेशा गाते रहेंगे। मेरी शक्ति के अधीन।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "boris",
					"content": {
						"korean": "그게 구원이라고? 이 절규가?",
						"english": "That's salvation? These screams?",
						"japanese": "それが救済だと？この絶叫が？",
						"chinese": "那是救赎？这些尖叫声？",
						"french": "C'est ça le salut ? Ces hurlements ?",
						"spanish": "¿Eso es salvación? ¿Estos gritos?",
						"vietnamese": "Đó là sự cứu rỗi sao? Những tiếng la hét này?",
						"thai": "นั่นคือการไถ่บาปหรือ? เสียงกรีดร้องพวกนี้?",
						"hindi": "वह मोक्ष है? ये चीखें?"
					},
					"emotion": "angry"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "너희도 곧 알게 될 거야. 영원히 노래하는 축복을.",
						"english": "You'll soon find out. The blessing of eternal song.",
						"japanese": "お前たちもすぐに知ることになるだろう。永遠に歌う祝福を。",
						"chinese": "你们很快也会明白的。永远歌唱的祝福。",
						"french": "Vous le saurez bientôt. La bénédiction du chant éternel.",
						"spanish": "Pronto lo descubriréis. La bendición del canto eterno.",
						"vietnamese": "Các ngươi cũng sẽ sớm biết thôi. Phước lành của khúc ca vĩnh hằng.",
						"thai": "พวกเจ้าจะได้รู้ในไม่ช้า พรแห่งการขับขานนิรันดร์",
						"hindi": "तुम्हें भी जल्द पता चलेगा। अनंत गीत का आशीर्वाद।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "거짓된 축제는 끝이다!",
						"english": "The false festival ends now!",
						"japanese": "偽りの祭りは終わりだ！",
						"chinese": "虚假的庆典该结束了！",
						"french": "Cette fausse célébration prend fin !",
						"spanish": "¡La falsa festividad termina ahora!",
						"vietnamese": "Lễ hội giả dối kết thúc rồi!",
						"thai": "งานเลี้ยงจอมปลอมสิ้นสุดลงแล้ว!",
						"hindi": "झूठा त्योहार अब समाप्त होता है!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"뿔잔의 찬가는 멎었다. 숲은 그제야 비로소 침묵을 되찾았다.",
			"광기의 주술사는 사라졌다. 그러나 갇혔던 영혼들은 돌아오지 않았다.",
			"구원이었을까. 혹은, 또 다른 침해였을까.",
			"숲은 그저 그렇게, 새로운 침묵 속에 잠겨 있었다."
		],
		"english": [
			"The hymn of the Horned Chalice ceased. Only then did the forest reclaim its silence.",
			"The mad sorcerer vanished. But the trapped souls never returned.",
			"Was it salvation? Or another transgression?",
			"The forest simply remained, steeped in a new silence."
		],
		"japanese": [
			"角杯の賛歌は止んだ。森はついに沈黙を取り戻した。",
			"狂気の呪術師は消えた。しかし、囚われていた魂は戻らなかった。",
			"救済だったのか。あるいは、別の侵害だったのか。",
			"森はただそうして、新たな沈黙の中に沈んでいた。"
		],
		"chinese": [
			"号角圣杯的赞歌止息了。森林才终于恢复了寂静。",
			"疯狂的巫师消失了。然而，被困的灵魂并未归来。",
			"是救赎吗？亦或是，又一次侵犯？",
			"森林就那样，沉浸在新的寂静中。"
		],
		"french": [
			"L'hymne du Calice Cornu s'est tu. Ce n'est qu'alors que la forêt retrouva son silence.",
			"Le sorcier fou disparut. Mais les âmes piégées ne revinrent jamais.",
			"Était-ce le salut? Ou une autre transgression?",
			"La forêt demeurait simplement, plongée dans un nouveau silence."
		],
		"spanish": [
			"El himno del Cáliz Astado cesó. Solo entonces el bosque recuperó su silencio.",
			"El hechicero loco desapareció. Pero las almas atrapadas no regresaron.",
			"¿Fue salvación? ¿O otra transgresión?",
			"El bosque simplemente permaneció, sumergido en un nuevo silencio."
		],
		"vietnamese": [
			"Thánh ca của Chiếc Ly Sừng đã ngừng. Rừng chỉ khi đó mới tìm lại được sự im lặng.",
			"Phù thủy điên rồ đã biến mất. Nhưng những linh hồn bị giam cầm không trở lại.",
			"Đó là sự cứu rỗi ư? Hay là một sự xâm phạm khác?",
			"Rừng vẫn chỉ như vậy, chìm đắm trong sự im lặng mới."
		],
		"thai": [
			"บทเพลงสรรเสริญของจอกศักดิ์สิทธิ์ได้หยุดลง ในที่สุดป่าก็กลับคืนสู่ความเงียบสงบ",
			"พ่อมดผู้บ้าคลั่งได้หายไป แต่ดวงวิญญาณที่ถูกขังไว้ก็ไม่กลับมา",
			"นี่คือการช่วยให้รอดพ้น? หรือเป็นอีกหนึ่งการละเมิด?",
			"ป่ายังคงจมดิ่งอยู่ในความเงียบงันครั้งใหม่"
		],
		"hindi": [
			"सींग वाले प्याले का भजन थम गया। तभी वन ने अपनी शांति वापस पाई।",
			"पागल जादूगर गायब हो गया। लेकिन कैद आत्माएं वापस नहीं लौटीं।",
			"क्या यह मोक्ष था? या एक और अतिक्रमण?",
			"वन बस ऐसे ही, एक नई चुप्पी में डूबा रहा।"
		]
	},
	"prologue": {
		"korean": [
			"뿔잔의 심장부. 그곳엔 무수한 수정이 박혀 있었다.",
			"수정마다 갇힌 얼굴들. 그리고 찬가처럼 들리는 비명.",
			"진실은 축제가 아니라, 영원히 멈출 수 없는 절규였다.",
			"이제 그 거짓된 합창을 멈출 때."
		],
		"english": [
			"The heart of the Horned Chalice. Countless crystals studded its core.",
			"Faces trapped within each crystal. And screams that echoed like hymns.",
			"The truth was not a celebration, but an unceasing scream.",
			"It's time to silence that false chorus."
		],
		"japanese": [
			"角杯の心臓部。そこには無数の水晶が埋め込まれていた。",
			"水晶に囚われた顔。そして、賛歌のように聞こえる悲鳴。",
			"真実は祭典ではなく、永遠に止まらない絶叫だった。",
			"今こそ、その偽りの合唱を止める時。"
		],
		"chinese": [
			"号角圣杯的深处，无数水晶镶嵌其中。",
			"每个水晶中都困着面孔。以及，如赞歌般回荡的尖叫。",
			"真相并非庆典，而是永无止境的哀嚎。",
			"现在是时候阻止那虚假的合唱了。"
		],
		"french": [
			"Au cœur du Calice Cornu, d'innombrables cristaux étaient incrustés.",
			"Des visages piégés dans chaque cristal. Et des cris résonnant comme des hymnes.",
			"La vérité n'était pas une fête, mais un cri incessant.",
			"Il est temps de faire taire ce faux chœur."
		],
		"spanish": [
			"En el corazón del Cáliz Astado, innumerables cristales incrustados.",
			"Rostros atrapados en cada cristal. Y gritos que resonaban como himnos.",
			"La verdad no era una fiesta, sino un grito imparable.",
			"Es hora de detener ese coro falso."
		],
		"vietnamese": [
			"Tận sâu trái tim của Chiếc Ly Sừng, vô số tinh thể được gắn.",
			"Những gương mặt bị giam cầm trong mỗi tinh thể. Và những tiếng thét vang vọng như thánh ca.",
			"Sự thật không phải là lễ hội, mà là một tiếng kêu gào không ngừng.",
			"Đã đến lúc chấm dứt bản hợp xướng giả dối đó."
		],
		"thai": [
			"ณ ใจกลางของจอกศักดิ์สิทธิ์ มีคริสตัลนับไม่ถ้วนประดับอยู่",
			"ใบหน้าที่ถูกขังในทุกคริสตัล และเสียงกรีดร้องที่เหมือนบทเพลงสรรเสริญ",
			"ความจริงไม่ใช่เทศกาล แต่เป็นการกรีดร้องที่ไม่หยุดหย่อน",
			"ถึงเวลาหยุดบทเพลงประสานเสียงอันหลอกลวงนั้นแล้ว"
		],
		"hindi": [
			"सिंग वाले प्याले के दिल में। वहां अनगिनत क्रिस्टल जड़े थे।",
			"प्रत्येक क्रिस्टल में कैद चेहरे। और स्तुतिगान जैसी चीखें।",
			"सच कोई त्योहार नहीं, बल्कि एक अंतहीन चीख थी।",
			"अब उस झूठे कोरस को रोकने का समय है।"
		]
	}
} as const;
