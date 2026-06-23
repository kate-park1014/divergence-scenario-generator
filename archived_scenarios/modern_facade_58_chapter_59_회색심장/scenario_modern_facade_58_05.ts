export const scenario_modern_facade_58_05 = {
	"scenario_id": "modern_facade_58_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "modern",
	"actors": {
		"nia": {
			"id": "mon_872177dd-fcf0-40d8-b78c-fd795017c763",
			"name": {
				"korean": "니아",
				"english": "Nia",
				"japanese": "ニア",
				"chinese": "妮娅",
				"french": "Nia",
				"spanish": "Nia",
				"vietnamese": "Nia",
				"thai": "เนีย",
				"hindi": "निया"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/db690f96-d5b3-498a-f4ec-f269e6e95100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a8fe5d7a-56fe-4822-c272-5a04fd7f4c00/public"
		}
	},
	"boss": {
		"pool_id": "pool_GangsterArt_Facade_V1"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "거울의 미로, 파사드의 심장부. 왜곡된 아름다움이 길을 막는다.",
						"english": "Mirror's labyrinth, the heart of Facade. Distorted beauty blocks the way.",
						"japanese": "鏡の迷宮、ファサードの心臓部。歪んだ美しさが道を塞ぐ。",
						"chinese": "镜之迷宫，立面之心。扭曲的美丽阻碍了去路。",
						"french": "Labyrinthe du miroir, le cœur de la Façade. La beauté déformée obstrue le chemin.",
						"spanish": "El laberinto del espejo, el corazón de la Fachada. La belleza distorsionada bloquea el camino.",
						"vietnamese": "Mê cung gương, trung tâm của Mặt tiền. Vẻ đẹp méo mó cản đường.",
						"thai": "เขาวงกตกระจก ใจกลางของฟาซาด ความงามที่บิดเบือนขวางทาง",
						"hindi": "दर्पण का भूलभुलैया, मुखौटे का हृदय। विकृत सौंदर्य मार्ग अवरुद्ध करता है।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "니아! 어디로 가는 거야!",
						"english": "Nia! Where are you going!",
						"japanese": "ニア！どこへ行くんだ！",
						"chinese": "妮娅！你要去哪里！",
						"french": "Nia ! Où vas-tu !",
						"spanish": "¡Nia! ¿A dónde vas?",
						"vietnamese": "Nia! Cô đang đi đâu vậy!",
						"thai": "เนีย! เธอจะไปไหน!",
						"hindi": "निया! तुम कहाँ जा रही हो!"
					},
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"speaker": "nia",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						5,
						2
					]
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…안 돼… 이끌려… 저 안으로…",
						"english": "...No... I'm drawn... inside...",
						"japanese": "…だめだ…引き寄せられる…あの奥へ…",
						"chinese": "…不行…被吸引了…到里面去了…",
						"french": "...Non... je suis attiré... à l'intérieur...",
						"spanish": "...No... me arrastra... hacia adentro...",
						"vietnamese": "...Không... bị lôi kéo... vào trong đó...",
						"thai": "...ไม่นะ... ถูกดึงดูด... เข้าไปข้างใน...",
						"hindi": "...नहीं... मैं खिंचा जा रहा हूँ... उस ओर..."
					},
					"speaker": "nia"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "정신 차려, 니아! 붙잡아!",
						"english": "Snap out of it, Nia! Hold on!",
						"japanese": "しっかりしろ、ニア！捕まえろ！",
						"chinese": "清醒点，妮娅！抓住它！",
						"french": "Reprends-toi, Nia ! Accroche-toi !",
						"spanish": "¡Reacciona, Nia! ¡Sujétate!",
						"vietnamese": "Tỉnh táo lại đi, Nia! Giữ chặt lấy!",
						"thai": "ตั้งสติหน่อย, เนีย! จับไว้!",
						"hindi": "होश में आओ, निया! पकड़ो!"
					}
				},
				{
					"type": "direction",
					"direction": "up",
					"speaker": "nia",
					"action": "exit",
					"duration_ms": 500
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "젠장! 놓쳤어… 저 빌어먹을 파사드가!",
						"english": "Damn it! Lost it... that blasted Facade!",
						"japanese": "くそっ！逃した…あの忌々しいファサードめ！",
						"chinese": "该死！错过了…那个该死的立面！",
						"french": "Mince ! Je l'ai manqué... ce maudit Facade !",
						"spanish": "¡Maldita sea! ¡Lo perdí... esa fachada maldita!",
						"vietnamese": "Chết tiệt! Mất dấu rồi... cái Facade khốn kiếp đó!",
						"thai": "บ้าเอ๊ย! พลาดไปแล้ว... ไอ้ฟะซาดเวรนั่น!",
						"hindi": "धिक्कार है! चूक गया... वो शापित फ़ैकेड!"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "건물 전체가 불쾌한 진동과 함께 꿈틀거렸다.",
						"english": "The entire building writhed with an unsettling vibration.",
						"japanese": "建物全体が不快な振動と共に蠢いた。",
						"chinese": "整个建筑伴随着令人不快的震动而蠕动。",
						"french": "Le bâtiment entier frémissait d'une vibration désagréable.",
						"spanish": "Todo el edificio se retorció con una vibración desagradable.",
						"vietnamese": "Toàn bộ tòa nhà run rẩy với một chấn động khó chịu.",
						"thai": "ทั้งอาคารสั่นสะเทือนอย่างรุนแรงด้วยแรงสั่นสะเทือนที่ไม่พึงประสงค์",
						"hindi": "पूरी इमारत एक अप्रिय कंपन के साथ हिल उठी।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이 진동… 니아는 어디로 간 거지?",
						"english": "This vibration... Where did Nia go?",
						"japanese": "この振動…ニアはどこへ行ったんだ？",
						"chinese": "这震动…妮娅去哪了？",
						"french": "Cette vibration... où est passée Nia ?",
						"spanish": "Esta vibración... ¿adónde fue Nia?",
						"vietnamese": "Chấn động này... Nia đã đi đâu?",
						"thai": "แรงสั่นสะเทือนนี้... เนียหายไปไหน?",
						"hindi": "यह कंपन... निया कहाँ गई?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "저 소리… 단순한 기계음이 아니야.",
						"english": "That sound... it's not merely mechanical.",
						"japanese": "あの音…単なる機械音じゃない。",
						"chinese": "那个声音…不仅仅是机械声。",
						"french": "Ce son... ce n'est pas un simple bruit de machine.",
						"spanish": "Ese sonido... no es un simple zumbido mecánico.",
						"vietnamese": "Âm thanh đó... không phải chỉ là tiếng máy móc đơn thuần.",
						"thai": "เสียงนั้น... ไม่ใช่แค่เสียงเครื่องจักรธรรมดา",
						"hindi": "वह आवाज़... यह सिर्फ़ यांत्रिक शोर नहीं है।"
					},
					"speaker": "character_1"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "마치 비명과 섞인 합창 같아… 끔찍해.",
						"english": "It's like a chorus mixed with screams... Horrible.",
						"japanese": "まるで悲鳴と混じり合った合唱のようだ…恐ろしい。",
						"chinese": "就像是尖叫声和合唱声混在一起…太可怕了。",
						"french": "C'est comme un chœur mêlé de cris... horrible.",
						"spanish": "Es como un coro mezclado con gritos... horrible.",
						"vietnamese": "Cứ như một bản hợp xướng hòa lẫn tiếng la hét... kinh khủng.",
						"thai": "ราวกับเป็นเสียงประสานที่ผสมผสานกับเสียงกรีดร้อง... น่าสะพรึงกลัว",
						"hindi": "यह चीखों से मिला-जुला एक कोरस जैसा है... भयानक।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "사방의 거울 면이 일렁였다. 그 안에 갇힌 얼굴 없는 형상들이 비쳤다.",
						"english": "The surrounding mirrored surfaces shimmered. Faceless figures trapped within were reflected.",
						"japanese": "四方の鏡面が揺らめいた。その中に閉じ込められた顔のない形が映し出された。",
						"chinese": "四面的镜子表面泛着涟漪。被困在里面的无脸身影显现出来。",
						"french": "Les surfaces miroitantes tout autour ondulaient. Des formes sans visage, piégées à l'intérieur, s'y reflétaient.",
						"spanish": "Las superficies espejadas a mi alrededor se ondularon. En ellas se reflejaban figuras sin rostro, atrapadas.",
						"vietnamese": "Các bề mặt gương xung quanh lấp lánh. Những hình dạng không mặt bị mắc kẹt bên trong phản chiếu.",
						"thai": "พื้นผิวกระจกโดยรอบสั่นไหว ร่างไร้หน้าที่ถูกขังอยู่ภายในสะท้อนออกมา",
						"hindi": "चारों ओर की दर्पण सतहें झिलमिला उठीं। उनमें फँसी हुई, बिना चेहरे वाली आकृतियाँ परावर्तित हुईं।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "뭐야… 저건…?",
						"english": "What... is that...?",
						"japanese": "あれは…何だ…？",
						"chinese": "那…是什么…？",
						"french": "Qu'est-ce que... c'est... ?",
						"spanish": "¿Qué... es eso...?",
						"vietnamese": "Cái gì... đó là...?",
						"thai": "นั่น... อะไรน่ะ...?",
						"hindi": "वह... क्या है...?"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"type": "direction",
					"speaker": "nia",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "가지 마… 멈춰… 모든 게 거짓이야…",
						"english": "Don't go... Stop... Everything is a lie...",
						"japanese": "行くな…止まれ…すべてが嘘だ…",
						"chinese": "别走…停下…一切都是谎言…",
						"french": "Ne pars pas... Arrête... Tout est un mensonge...",
						"spanish": "No vayas... Detente... Todo es una mentira...",
						"vietnamese": "Đừng đi... Dừng lại... Mọi thứ đều là dối trá...",
						"thai": "อย่าไป... หยุดนะ... ทุกสิ่งเป็นเรื่องโกหก...",
						"hindi": "मत जाओ... रुको... सब कुछ झूठ है..."
					},
					"speaker": "nia",
					"emotion": "sad"
				},
				{
					"type": "direction",
					"direction": "up",
					"speaker": "nia",
					"action": "exit",
					"duration_ms": 400
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "니아! 잠깐만, 무슨 뜻이야!",
						"english": "Nia! Wait, what do you mean?!",
						"japanese": "ニア！待って、どういう意味！？",
						"chinese": "妮娅！等等，你什么意思？！",
						"french": "Nia ! Attends, qu'est-ce que tu veux dire ?!",
						"spanish": "¡Nia! Espera, ¿qué quieres decir?",
						"vietnamese": "Nia! Đợi đã, ý cậu là sao?!",
						"thai": "เนีย! เดี๋ยวสิ หมายความว่าอะไรน่ะ!",
						"hindi": "निया! रुको, तुम्हारा क्या मतलब है?!"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이 건물 자체가… 함정 같아.",
						"english": "This building itself... feels like a trap.",
						"japanese": "この建物自体が…罠みたいだ。",
						"chinese": "这栋建筑本身……就像个陷阱。",
						"french": "Ce bâtiment lui-même… est comme un piège.",
						"spanish": "Este edificio en sí… parece una trampa.",
						"vietnamese": "Bản thân tòa nhà này… cứ như một cái bẫy vậy.",
						"thai": "ตัวตึกนี่เอง… ดูเหมือนกับดักเลย.",
						"hindi": "यह इमारत खुद… एक जाल जैसी लगती है।"
					},
					"speaker": "character_3"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "공허한 멜로디가 귓가에 맴돌았다. 시간이 뒤틀리는 듯한 기분.",
						"english": "An empty melody lingered in my ears. Time felt distorted.",
						"japanese": "虚ろなメロディが耳にまとわりつく。時間が歪むような感覚。",
						"chinese": "空洞的旋律在耳边萦绕。时间仿佛扭曲了。",
						"french": "Une mélodie vide persistait à mes oreilles. Le temps semblait se tordre.",
						"spanish": "Una melodía hueca resonaba en mis oídos. El tiempo se sentía distorsionado.",
						"vietnamese": "Một giai điệu trống rỗng vương vấn bên tai. Cảm giác như thời gian đang bị bóp méo.",
						"thai": "ท่วงทำนองที่ว่างเปล่าวนเวียนอยู่ในหู. ราวกับว่าเวลากำลังบิดเบี้ยว.",
						"hindi": "एक खाली धुन कानों में गूंज रही थी। समय मुड़ा हुआ सा लग रहा था।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "점점 더 심해지고 있어… 정신을 붙잡아야 해.",
						"english": "It's getting worse... I need to hold onto my sanity.",
						"japanese": "だんだんひどくなってる…正気を保たなきゃ。",
						"chinese": "越来越糟糕了……我必须保持清醒。",
						"french": "Ça empire… je dois garder ma raison.",
						"spanish": "Se está poniendo peor… tengo que aferrarme a mi cordura.",
						"vietnamese": "Càng lúc càng tệ hơn… mình phải giữ lấy lí trí.",
						"thai": "มันแย่ลงเรื่อยๆ… ฉันต้องตั้งสติให้ได้.",
						"hindi": "यह और बुरा होता जा रहा है… मुझे अपनी समझदारी बनाए रखनी होगी।"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"speaker": "character_4",
					"type": "speech",
					"content": {
						"korean": "이건 우리만의 착각이 아니야. 뭔가… 우릴 조종하고 있어.",
						"english": "This isn't just our imagination. Something... is controlling us.",
						"japanese": "これは私たちだけの錯覚じゃない。何かが…私たちを操ってる。",
						"chinese": "这不只是我们的错觉。有什么东西……在操控我们。",
						"french": "Ce n'est pas seulement notre imagination. Quelque chose… nous manipule.",
						"spanish": "Esto no es solo nuestra imaginación. Algo… nos está controlando.",
						"vietnamese": "Đây không chỉ là ảo giác của chúng ta. Có thứ gì đó… đang điều khiển chúng ta.",
						"thai": "นี่ไม่ใช่แค่ภาพหลอนของเรา. บางสิ่ง… กำลังควบคุมเราอยู่.",
						"hindi": "यह सिर्फ हमारी कल्पना नहीं है। कुछ… हमें नियंत्रित कर रहा है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 건축물 자체가… 하나의 생명체 같아.",
						"english": "This architecture itself... feels like a living being.",
						"japanese": "この建築物自体が…まるで一つの生命体みたいだ。",
						"chinese": "这栋建筑本身……就像一个生命体。",
						"french": "Cette architecture elle-même… est comme un être vivant.",
						"spanish": "Esta arquitectura en sí… parece un ser vivo.",
						"vietnamese": "Kiến trúc này… cứ như một sinh vật sống vậy.",
						"thai": "สถาปัตยกรรมนี้เอง… ดูเหมือนสิ่งมีชีวิตหนึ่ง.",
						"hindi": "यह वास्तुकला खुद… एक जीवित प्राणी जैसी लगती है।"
					},
					"speaker": "character_1",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "니아가 경고했던 게… 이거였나.",
						"english": "Was this... what Nia warned us about?",
						"japanese": "ニアが警告してたの…これだったのか。",
						"chinese": "妮娅警告过的……就是这个吗？",
						"french": "C'était… ce dont Nia nous avait avertis ?",
						"spanish": "¿Era esto… de lo que nos advirtió Nia?",
						"vietnamese": "Cái Nia đã cảnh báo… là cái này sao?",
						"thai": "ที่เนียเตือนไว้… คือเรื่องนี้เองเหรอ.",
						"hindi": "निया ने जिस बारे में चेतावनी दी थी… क्या वह यही था?"
					}
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "파사드의 비명이 모든 것을 삼켜버렸다.",
						"english": "The Phasad's scream devoured everything.",
						"japanese": "ファサードの悲鳴がすべてを飲み込んだ。",
						"chinese": "法萨德的尖叫吞噬了一切。",
						"french": "Le cri du Phasad a tout dévoré.",
						"spanish": "El grito de la Fasada lo devoró todo.",
						"vietnamese": "Tiếng thét của Phasad nuốt chửng mọi thứ.",
						"thai": "เสียงกรีดร้องของฟาสาดกลืนกินทุกสิ่ง",
						"hindi": "फसाद की चीख ने सब कुछ निगल लिया।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "나의 교향곡은… 영원할 것이다.",
						"english": "My symphony will... last forever.",
						"japanese": "私の交響曲は…永遠だろう。",
						"chinese": "我的交响乐…将永恒不朽。",
						"french": "Ma symphonie… sera éternelle.",
						"spanish": "Mi sinfonía… será eterna.",
						"vietnamese": "Bản giao hưởng của ta… sẽ vĩnh cửu.",
						"thai": "ซิมโฟนีของข้า… จะคงอยู่ชั่วนิรันดร์",
						"hindi": "मेरी सिम्फनी… हमेशा रहेगी।"
					},
					"speaker": "boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않았어. 니아를… 반드시 되찾을 거야!",
						"english": "...It's not over yet. I will... definitely get Nia back!",
						"japanese": "…まだ終わってない。ニアを…必ず取り戻す！",
						"chinese": "…还没结束。我…一定要把妮娅夺回来！",
						"french": "...Ce n'est pas encore fini. Je… retrouverai Nia !",
						"spanish": "...Aún no ha terminado. ¡Recuperaré a Nia… cueste lo que cueste!",
						"vietnamese": "...Chưa kết thúc đâu. Ta sẽ... nhất định đưa Nia trở lại!",
						"thai": "...ยังไม่จบ ข้าจะ... ต้องพานีอาคืนมาให้ได้!",
						"hindi": "…अभी खत्म नहीं हुआ है। मैं… निया को ज़रूर वापस लाऊंगा!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "건물 전체가 격렬하게 꿈틀거렸다. 사방의 거울이 깨지며 비명이 울려 퍼졌다.",
						"english": "The entire building writhed violently. Mirrors all around shattered, and screams echoed.",
						"japanese": "建物全体が激しく蠢いた。四方の鏡が砕け散り、悲鳴が響き渡る。",
						"chinese": "整个建筑剧烈蠕动着。四周的镜子破碎，尖叫声此起彼伏。",
						"french": "Le bâtiment entier se tordit violemment. Les miroirs tout autour se brisèrent, et des cris résonnèrent.",
						"spanish": "Todo el edificio se retorció violentamente. Los espejos de todas partes se hicieron añicos, y los gritos resonaron.",
						"vietnamese": "Toàn bộ tòa nhà co giật dữ dội. Gương khắp nơi vỡ tan, tiếng thét vang vọng.",
						"thai": "ตึกทั้งหลังกระตุกอย่างรุนแรง. กระจกรอบด้านแตกกระจาย เสียงกรีดร้องดังก้อง.",
						"hindi": "पूरी इमारत हिंसक रूप से हिल उठी। चारों ओर के शीशे टूट गए, और चीखें गूंज उठीं।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "가장 거대한 중심 거울에서 금이 가더니, 붉고 축축한 촉수들이 튀어나와 휘감았다.",
						"english": "The largest central mirror cracked, and red, slimy tentacles burst out and coiled around.",
						"japanese": "最も巨大な中心の鏡にひびが入り、赤く湿った触手たちが飛び出し、絡みついた。",
						"chinese": "最大的中央镜子裂开了，红色湿滑的触手猛地伸出并缠绕起来。",
						"french": "Le plus grand miroir central se fissura, et des tentacules rouges et visqueux en jaillirent et s'enroulèrent.",
						"spanish": "El espejo central más grande se resquebrajó, y tentáculos rojos y húmedos brotaron y se enroscaron.",
						"vietnamese": "Tấm gương trung tâm lớn nhất nứt ra, những xúc tu đỏ lòm, nhớp nháp bật ra và quấn lấy.",
						"thai": "กระจกกลางที่ใหญ่ที่สุดร้าว และหนวดสีแดงชื้นแฉะก็พุ่งออกมาพันรอบ.",
						"hindi": "सबसे बड़े केंद्रीय दर्पण में दरार पड़ गई, और लाल, चिपचिपी सूंडें बाहर निकलीं और लिपट गईं।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "나의 걸작에 오신 것을 환영한다, 새로운 수집품들이여.",
						"english": "Welcome to my masterpiece, my new collection.",
						"japanese": "ようこそ、我が傑作へ、新たな収集品たちよ。",
						"chinese": "欢迎来到我的杰作，我的新收藏品们。",
						"french": "Bienvenue dans mon chef-d'œuvre, mes nouvelles pièces de collection.",
						"spanish": "Bienvenidos a mi obra maestra, mis nuevas colecciones.",
						"vietnamese": "Chào mừng đến với kiệt tác của ta, những bộ sưu tập mới của ta.",
						"thai": "ยินดีต้อนรับสู่ผลงานชิ้นเอกของข้า, เหล่าของสะสมชิ้นใหม่.",
						"hindi": "मेरी उत्कृष्ट कृति में आपका स्वागत है, मेरे नए संग्रह।"
					}
				},
				{
					"emotion": "base",
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "너희의 비명이 곧 나의 다음 교향곡이 될 것이다.",
						"english": "Your screams will be my next symphony.",
						"japanese": "お前たちの悲鳴が、すぐに私の次の交響曲となるだろう。",
						"chinese": "你们的尖叫将成为我的下一部交响曲。",
						"french": "Vos cris seront ma prochaine symphonie.",
						"spanish": "Vuestros gritos serán mi próxima sinfonía.",
						"vietnamese": "Tiếng hét của các ngươi sẽ sớm trở thành bản giao hưởng tiếp theo của ta.",
						"thai": "เสียงกรีดร้องของพวกเจ้าจะกลายเป็นซิมโฟนีบทต่อไปของข้า",
						"hindi": "तुम्हारी चीखें ही मेरी अगली सिम्फनी होंगी।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "마에스트로… 네가 이 모든 것을 꾸민 거였나!",
						"english": "Maestro... was it all your doing!?",
						"japanese": "マエストロ…お前がこの全てを仕組んだのか！",
						"chinese": "指挥家…这一切都是你策划的吗！",
						"french": "Maestro… C'était donc toi, l'instigateur de tout ça !",
						"spanish": "Maestro... ¡¿Fuiste tú quien orquestó todo esto?!",
						"vietnamese": "Maestro... tất cả là do ngươi sắp đặt sao!?",
						"thai": "มาเอสโตร... ทั้งหมดนี่เป็นฝีมือเจ้าเองหรือ!?",
						"hindi": "मेस्ट्रो... क्या यह सब तुम्हारी करतूत थी!?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이제 너희도 나의 영원한 멜로디의 일부가 될 뿐.",
						"english": "Now you too shall become part of my eternal melody.",
						"japanese": "お前たちもまた、私の永遠のメロディの一部となるだけだ。",
						"chinese": "现在你们也将成为我永恒旋律的一部分。",
						"french": "Maintenant, vous aussi ferez partie de ma mélodie éternelle.",
						"spanish": "Ahora vosotros también formaréis parte de mi melodía eterna.",
						"vietnamese": "Giờ đây các ngươi cũng sẽ trở thành một phần của giai điệu vĩnh cửu của ta.",
						"thai": "ตอนนี้พวกเจ้าก็จะกลายเป็นส่วนหนึ่งของท่วงทำนองอันเป็นนิรันดร์ของข้าเช่นกัน",
						"hindi": "अब तुम भी मेरी अनंत धun का हिस्सा बन जाओगे।"
					},
					"speaker": "boss",
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "파사드의 진동이 멈췄다. 시스템은 정지했다.",
						"english": "The vibrations of the Facade have ceased. The system is halted.",
						"japanese": "ファサードの振動が止まった。システムは停止した。",
						"chinese": "立面的振动停止了。系统已中止。",
						"french": "Les vibrations de la Façade ont cessé. Le système est à l'arrêt.",
						"spanish": "Las vibraciones de la Fachada han cesado. El sistema se ha detenido.",
						"vietnamese": "Rung động của Mặt tiền đã ngừng. Hệ thống đã dừng lại.",
						"thai": "แรงสั่นสะเทือนของฟาซาดหยุดลงแล้ว ระบบหยุดทำงาน",
						"hindi": "मुखौटे की कंपन रुक गई है। सिस्टम ठप हो गया है।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…고작 이런 걸로… 멈출 수 있을 것 같나…?",
						"english": "...Do you really think... such a thing can stop me...?",
						"japanese": "…たかだかこんなもので…止められるとでも…？",
						"chinese": "…就凭这种东西…你觉得能阻止我吗…？",
						"french": "…Crois-tu… qu'une chose pareille… puisse m'arrêter… ?",
						"spanish": "...¿Realmente crees... que algo así puede detenerme...?",
						"vietnamese": "...Ngươi nghĩ... thứ như vậy có thể ngăn cản ta sao...?",
						"thai": "...คิดว่าแค่นี้... จะหยุดข้าได้งั้นหรือ...?",
						"hindi": "...क्या तुम्हें सच में लगता है... कि ऐसी चीज़ मुझे रोक सकती है...?"
					},
					"speaker": "boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "너희는… 아무것도 되돌릴 수 없어… 니아도… 다른 영혼들도… 영원히 나의 것이니.",
						"english": "You... can't undo anything... Nia... or any other souls... they are mine forever.",
						"japanese": "お前たちは…何も元に戻せない…ニアも…他の魂たちも…永遠に私のものだ。",
						"chinese": "你们…什么也无法挽回…尼亚也罢…其他灵魂也罢…永远都是我的。",
						"french": "Vous… ne pouvez rien annuler… Nia… ni les autres âmes… elles sont miennes pour l'éternité.",
						"spanish": "Vosotros... no podéis deshacer nada... Nia... ni ninguna otra alma... son mías para siempre.",
						"vietnamese": "Các ngươi... không thể đảo ngược bất cứ điều gì... Nia... hay những linh hồn khác... mãi mãi là của ta.",
						"thai": "พวกเจ้า... จะย้อนคืนสิ่งใดไม่ได้เลย... ไม่ว่าจะเนีย... หรือวิญญาณอื่น ๆ... พวกมันเป็นของข้าตลอดไป",
						"hindi": "तुम... कुछ भी नहीं बदल सकते... निया भी... और कोई भी आत्मा... वे हमेशा के लिए मेरी हैं।"
					},
					"speaker": "boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "니아가… 파사드에 흡수되었다고? 거짓말이야!",
						"english": "Nia... absorbed into the Facade? That's a lie!",
						"japanese": "ニアが…ファサードに吸収されただと？嘘だ！",
						"chinese": "尼亚…被立面吸收了？骗人的！",
						"french": "Nia… absorbée par la Façade ? C'est un mensonge !",
						"spanish": "¿Nia... absorbida por la Fachada? ¡Es mentira!",
						"vietnamese": "Nia... bị Mặt tiền hấp thụ ư? Nói dối!",
						"thai": "เนีย... ถูกฟาซาดดูดกลืนไปแล้วงั้นหรือ? โกหก!",
						"hindi": "निया... मुखौटे में समा गई? यह झूठ है!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "direction",
					"speaker": "nia",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "…공허… 뿐이야… 이제… 나도… 영원히…",
						"english": "...Only... emptiness... now... I too... forever...",
						"japanese": "…虚無…だけだ…もう…私も…永遠に…",
						"chinese": "…只有…虚无…现在…我也…永远…",
						"french": "…Seul… le vide… maintenant… moi aussi… pour l'éternité…",
						"spanish": "...Solo... el vacío... ahora... yo también... para siempre...",
						"vietnamese": "...Chỉ có... hư vô... bây giờ... tôi cũng... mãi mãi...",
						"thai": "...มีแต่... ความว่างเปล่า... บัดนี้... ข้าก็... ตลอดไป...",
						"hindi": "...केवल... शून्य... अब... मैं भी... हमेशा के लिए..."
					},
					"speaker": "nia",
					"emotion": "sad"
				},
				{
					"type": "direction",
					"direction": "up",
					"speaker": "nia",
					"action": "exit",
					"duration_ms": 400
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이게… 승리라고? 이 모든 게… 허무한 교향곡일 뿐인가…",
						"english": "Is this... victory? Is all of this... just a futile symphony...?",
						"japanese": "これが…勝利だと？この全てが…虚しい交響曲にすぎないのか…",
						"chinese": "这就是…胜利？这一切…不过是场虚无的交响曲吗…",
						"french": "C'est ça… la victoire ? Tout ça… n'est qu'une symphonie vaine… ?",
						"spanish": "¿Esto es... la victoria? ¿Todo esto... es solo una sinfonía inútil...?",
						"vietnamese": "Đây là... chiến thắng sao? Tất cả những điều này... chỉ là một bản giao hưởng vô ích sao...?",
						"thai": "นี่หรือ... ชัยชนะ? ทั้งหมดนี้... เป็นเพียงซิมโฟนีอันไร้ค่าเท่านั้นหรือ...?",
						"hindi": "क्या यह... जीत है? क्या यह सब... बस एक निरर्थक सिम्फनी है...?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "도시의 비명은 멈췄지만, 사라진 것들은 돌아오지 않았다.",
						"english": "The city's screams have ceased, but what was lost has not returned.",
						"japanese": "都市の悲鳴は止んだが、失われたものは戻らなかった。",
						"chinese": "城市的尖叫声停止了，但逝去之物却再也回不来了。",
						"french": "Les cris de la ville ont cessé, mais ce qui a été perdu n'est pas revenu.",
						"spanish": "Los gritos de la ciudad han cesado, pero lo que se perdió no ha regresado.",
						"vietnamese": "Tiếng hét của thành phố đã ngừng, nhưng những gì đã mất thì không trở lại.",
						"thai": "เสียงกรีดร้องของเมืองสงบลงแล้ว แต่สิ่งที่สูญเสียไปก็ไม่กลับคืนมา",
						"hindi": "शहर की चीखें बंद हो गई हैं, लेकिन जो खो गया वह वापस नहीं आया।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "무의미한 승리만이 남았다. 이 허무 속에서, 다음 멜로디를 찾아야 했다.",
						"english": "Only a meaningless victory remains. In this void, I had to find the next melody.",
						"japanese": "無意味な勝利だけが残った。この虚無の中で、次のメロディを探さなければならなかった。",
						"chinese": "只剩下毫无意义的胜利。在这虚无中，我必须寻找下一个旋律。",
						"french": "Seule une victoire insignifiante demeure. Dans ce vide, je devais trouver la prochaine mélodie.",
						"spanish": "Solo queda una victoria sin sentido. En este vacío, tuve que encontrar la siguiente melodía.",
						"vietnamese": "Chỉ còn lại một chiến thắng vô nghĩa. Trong sự hư vô này, tôi phải tìm kiếm giai điệu tiếp theo.",
						"thai": "เหลือเพียงชัยชนะที่ไร้ความหมาย ในความว่างเปล่านี้ ข้าต้องค้นหาทำนองต่อไป",
						"hindi": "केवल एक अर्थहीन जीत शेष है। इस शून्य में, मुझे अगली धुन ढूंढनी थी।"
					}
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"도시는 거울이었다. 모든 진실을 왜곡하고, 아름다움 뒤에 고통을 숨긴 채.",
			"니아의 흔적을 쫓아 도착한 그곳. 이제 되돌릴 수 없다.",
			"심장이 울부짖는 소리와 함께, 허무의 교향곡이 시작된다."
		],
		"english": [
			"The city was a mirror, distorting every truth, hiding pain behind beauty.",
			"Following Nia's trail, I arrived. Now, there's no turning back.",
			"With a heart's roar, the symphony of emptiness begins."
		],
		"japanese": [
			"都市は鏡だった。全ての真実を歪め、美しさの裏に苦痛を隠しながら。",
			"ニアの足跡を追い、たどり着いた場所。もう引き返せない。",
			"心臓の叫びと共に、虚無の交響曲が始まる。"
		],
		"chinese": [
			"城市如镜，扭曲所有真相，将痛苦藏于美丽之下。",
			"循着妮娅的踪迹，我抵达了那里。现在，已无法回头。",
			"伴随着心脏的嘶吼，虚无的交响曲拉开序幕。"
		],
		"french": [
			"La ville était un miroir, déformant chaque vérité, cachant la douleur derrière la beauté.",
			"J'y suis arrivé en suivant la trace de Nia. Maintenant, impossible de faire demi-tour.",
			"Avec le rugissement du cœur, la symphonie du vide commence."
		],
		"spanish": [
			"La ciudad era un espejo, distorsionando cada verdad, ocultando el dolor tras la belleza.",
			"Siguiendo el rastro de Nia, llegué allí. Ahora, no hay vuelta atrás.",
			"Con el rugido del corazón, la sinfonía del vacío comienza."
		],
		"vietnamese": [
			"Thành phố là một tấm gương, bóp méo mọi sự thật, giấu nỗi đau sau vẻ đẹp.",
			"Theo dấu Nia, tôi đã đến đó. Giờ đây, không thể quay lại.",
			"Cùng tiếng gào thét của trái tim, bản giao hưởng của hư vô bắt đầu."
		],
		"thai": [
			"เมืองนี้เป็นเหมือนกระจก บิดเบือนทุกความจริง ซ่อนความเจ็บปวดไว้เบื้องหลังความงาม",
			"ตามรอยของเนีย ฉันมาถึงที่นี่แล้ว ตอนนี้ไม่มีทางย้อนกลับ",
			"พร้อมกับเสียงคำรามของหัวใจ ซิมโฟนีแห่งความว่างเปล่าก็เริ่มต้นขึ้น"
		],
		"hindi": [
			"शहर एक दर्पण था, हर सच्चाई को विकृत करता, सुंदरता के पीछे दर्द छिपाता।",
			"निया के निशान का पीछा करते हुए, मैं वहाँ पहुँच गया। अब कोई वापसी नहीं।",
			"दिल की दहाड़ के साथ, शून्य की सिम्फनी शुरू होती है।"
		]
	},
	"epilogue": {
		"korean": [
			"파사드는 침묵했다. 더 이상 비명은 들리지 않았다.",
			"그러나 희생된 영혼들은 돌아오지 않았다. 니아도… 영원히 멜로디의 일부가 되었다.",
			"도시는 여전히 아름다웠다. 그 이면에 숨겨진 고통만 사라졌을 뿐.",
			"이것이 승리인가, 아니면 더 깊은 절망의 시작인가.",
			"허무함만이 남았다. 다음 교향곡은 무엇일까."
		],
		"english": [
			"The Facade fell silent. No more screams were heard.",
			"But the sacrificed souls did not return. Nia too... became part of the melody forever.",
			"The city was still beautiful. Only the hidden pain behind it had vanished.",
			"Is this victory, or the beginning of a deeper despair?",
			"Only emptiness remained. What will the next symphony be?"
		],
		"japanese": [
			"ファサードは沈黙した。もう悲鳴は聞こえなかった。",
			"しかし、犠牲になった魂は戻らなかった。ニアも…永遠にメロディの一部となった。",
			"都市は依然として美しかった。その裏に隠された苦痛だけが消え去った。",
			"これは勝利なのか、それともより深い絶望の始まりなのか。",
			"虚無だけが残った。次の交響曲は何だろうか。"
		],
		"chinese": [
			"立面归于沉寂。尖叫声不再响起。",
			"然而，牺牲的灵魂未能归来。妮娅也……永远成为了旋律的一部分。",
			"城市依旧美丽。只是其背后隐藏的痛苦消失了。",
			"这是胜利，抑或是更深绝望的开端？",
			"只剩下虚无。下一首交响曲又会是什么？"
		],
		"french": [
			"La Façade se tut. Plus aucun cri ne se fit entendre.",
			"Mais les âmes sacrifiées ne sont pas revenues. Nia aussi... est devenue partie de la mélodie pour toujours.",
			"La ville était toujours belle. Seule la douleur cachée derrière elle avait disparu.",
			"Est-ce une victoire, ou le début d'un désespoir plus profond ?",
			"Seul le vide demeurait. Quelle sera la prochaine symphonie ?"
		],
		"spanish": [
			"La Fachada quedó en silencio. No se escucharon más gritos.",
			"Pero las almas sacrificadas no regresaron. Nia también... se convirtió en parte de la melodía para siempre.",
			"La ciudad seguía siendo hermosa. Solo el dolor oculto tras ella había desaparecido.",
			"¿Es esto una victoria, o el comienzo de una desesperación más profunda?",
			"Solo quedó el vacío. ¿Cuál será la próxima sinfonía?"
		],
		"vietnamese": [
			"Mặt tiền chìm vào im lặng. Không còn tiếng hét nào được nghe thấy.",
			"Nhưng những linh hồn hy sinh đã không trở lại. Nia cũng... trở thành một phần của giai điệu mãi mãi.",
			"Thành phố vẫn đẹp. Chỉ có nỗi đau ẩn giấu đằng sau đã biến mất.",
			"Đây là chiến thắng, hay là khởi đầu của một tuyệt vọng sâu sắc hơn?",
			"Chỉ còn lại sự trống rỗng. Bản giao hưởng tiếp theo sẽ là gì?"
		],
		"thai": [
			"ฟาซาดเงียบงัน ไม่มีเสียงกรีดร้องอีกต่อไป",
			"แต่ดวงวิญญาณที่เสียสละไม่ได้กลับมา เนียเองก็... กลายเป็นส่วนหนึ่งของท่วงทำนองตลอดไป",
			"เมืองยังคงสวยงาม มีเพียงความเจ็บปวดที่ซ่อนอยู่เบื้องหลังเท่านั้นที่หายไป",
			"นี่คือชัยชนะ หรือจุดเริ่มต้นของความสิ้นหวังที่ลึกซึ้งกว่ากันแน่",
			"เหลือเพียงความว่างเปล่า ซิมโฟนีบทต่อไปคืออะไรกันแน่"
		],
		"hindi": [
			"मुखौटा शांत हो गया। अब कोई चीखें नहीं सुनाई दीं।",
			"लेकिन बलिदान की गई आत्माएँ वापस नहीं आईं। निया भी... हमेशा के लिए धुन का हिस्सा बन गई।",
			"शहर अभी भी खूबसूरत था। बस उसके पीछे छिपा दर्द गायब हो गया था।",
			"क्या यह जीत है, या गहरी निराशा की शुरुआत?",
			"केवल खालीपन बचा था। अगली सिम्फनी क्या होगी?"
		]
	}
} as const;
