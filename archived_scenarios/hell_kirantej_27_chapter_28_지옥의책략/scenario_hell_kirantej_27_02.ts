export const scenario_hell_kirantej_27_02 = {
	"scenario_id": "hell_kirantej_27_02",
	"order": 2,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"brim": {
			"id": "mon_d7f57824-190d-40b9-93d1-66c658f0441f",
			"name": {
				"korean": "브림",
				"english": "Brim",
				"japanese": "ブリム",
				"chinese": "布里姆",
				"french": "Brim",
				"spanish": "Brim",
				"vietnamese": "Brim",
				"thai": "บริม",
				"hindi": "ब्रिम"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/08ad0e4d-214d-43b3-dc3e-ddfba9049300/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/16f1def2-7c33-4558-4b21-9c3e87fa3e00/public"
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
						"korean": "지옥 서고의 깊은 곳. 낡은 책 냄새가 코를 찔렀다.",
						"english": "Deep within Hell's Library. The scent of old books stung my nose.",
						"japanese": "地獄の書庫の奥深く。古書の匂いが鼻を突いた。",
						"chinese": "地狱书库深处。旧书的味道刺鼻。",
						"french": "Au plus profond de la Bibliothèque Infernale. L'odeur des vieux livres piquait le nez.",
						"spanish": "En lo profundo de la Biblioteca del Infierno. El olor a libros viejos me picaba la nariz.",
						"vietnamese": "Sâu trong Thư viện Địa ngục. Mùi sách cũ xộc vào mũi.",
						"thai": "ลึกเข้าไปในหอสมุดนรก กลิ่นหนังสือเก่าฉุนกึก",
						"hindi": "नर्क की लाइब्रेरी की गहराई में। पुरानी किताबों की गंध नाक में चुभ रही थी।"
					}
				},
				{
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "brim"
				},
				{
					"type": "speech",
					"speaker": "brim",
					"content": {
						"korean": "오랜만이야. 아니, 처음인가? 영혼들은 다 거기서 거기라.",
						"english": "Long time no see. Or is it the first time? All souls are pretty much the same.",
						"japanese": "久しぶりだね。いや、初めてかな？魂なんてどれも似たようなものさ。",
						"chinese": "好久不见。不对，是第一次吗？反正灵魂都差不多。",
						"french": "Ça fait longtemps. Ou est-ce la première fois ? Toutes les âmes se ressemblent.",
						"spanish": "Cuánto tiempo. ¿O es la primera vez? Todas las almas son bastante parecidas.",
						"vietnamese": "Lâu rồi không gặp. Hay là lần đầu nhỉ? Linh hồn thì cũng đều như nhau cả thôi.",
						"thai": "ไม่ได้เจอกันนานเลยนะ หรือว่านี่คือครั้งแรก? วิญญาณทั้งหลายก็เหมือนๆ กันนั่นแหละ",
						"hindi": "बहुत समय हो गया। या पहली बार है? सभी आत्माएं कमोबेश एक जैसी ही होती हैं।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "당신이 브림인가요?",
						"english": "Are you Brim?",
						"japanese": "あなたがブリムですか？",
						"chinese": "你是布瑞姆吗？",
						"french": "Êtes-vous Brim ?",
						"spanish": "¿Eres Brim?",
						"vietnamese": "Ông là Brim phải không?",
						"thai": "คุณคือบริมใช่ไหม?",
						"hindi": "क्या आप ब्रिम हैं?"
					}
				},
				{
					"emotion": "base",
					"speaker": "brim",
					"type": "speech",
					"content": {
						"korean": "기록은 말해주지. 키란 테즈가 뭘 파고 있는지.",
						"english": "The records tell us what Kīran Tezz is digging into.",
						"japanese": "記録が語っている。キーラン・テズが何を調べているのかを。",
						"chinese": "记录会告诉我们。基兰·泰兹在挖掘什么。",
						"french": "Les archives révèlent ce que Kīran Tezz est en train de déterrer.",
						"spanish": "Los registros nos dicen qué está investigando Kīran Tezz.",
						"vietnamese": "Hồ sơ cho biết Kīran Tezz đang đào bới điều gì.",
						"thai": "บันทึกบอกว่า คีรัน เทซ กำลังสืบหาอะไรอยู่",
						"hindi": "रिकॉर्ड बताते हैं कि कीरन तेज़ क्या खोज रहे हैं।"
					}
				},
				{
					"type": "speech",
					"speaker": "brim",
					"content": {
						"korean": "그 양반, 꽤나 특이한 \"연구\"에 집착하거든.",
						"english": "That fellow, he's obsessed with a rather peculiar \"research.\"",
						"japanese": "あの御仁、かなり特異な「研究」に執着しているからね。",
						"chinese": "那家伙，对一项相当特殊的“研究”很执着。",
						"french": "Ce type est obsédé par une \"recherche\" assez particulière.",
						"spanish": "Ese tipo, está obsesionado con una \"investigación\" bastante peculiar.",
						"vietnamese": "Gã đó, hắn ta bị ám ảnh bởi một \"nghiên cứu\" khá đặc biệt.",
						"thai": "หมอนั่นน่ะ หมกมุ่นอยู่กับ \"งานวิจัย\" ที่ค่อนข้างแปลกพิลึก",
						"hindi": "वह शख्स, वह एक अजीबोगरीब \"शोध\" के प्रति जुनूनी है।"
					},
					"emotion": "base"
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
					"duration_ms": 500,
					"type": "direction",
					"speaker": "brim",
					"action": "enter"
				},
				{
					"content": {
						"korean": "그 연구라는 거, 겉으론 영혼들을 위한 거라더군.",
						"english": "That research, on the surface, they say it's for the souls.",
						"japanese": "その研究とやら、表向きは魂のためだとか。",
						"chinese": "那个研究，表面上说是为了灵魂。",
						"french": "Cette recherche, en apparence, serait pour le bien des âmes.",
						"spanish": "Esa investigación, en la superficie, dicen que es para las almas.",
						"vietnamese": "Cái nghiên cứu đó, bề ngoài thì bảo là vì linh hồn.",
						"thai": "ไอ้การวิจัยนั่นน่ะ ดูภายนอกแล้วก็บอกว่าเพื่อเหล่าวิญญาณ",
						"hindi": "वह शोध, ऊपरी तौर पर, वे कहते हैं कि यह आत्माओं के लिए है।"
					},
					"type": "speech",
					"speaker": "brim",
					"emotion": "base"
				},
				{
					"speaker": "brim",
					"type": "speech",
					"content": {
						"korean": "하지만 비공식 기록엔 좀 다른 이야기가 적혀있지.",
						"english": "But unofficial records tell a different story.",
						"japanese": "しかし、非公式の記録には少し違う話が書かれている。",
						"chinese": "然而，非官方记录中却记载着一个不同的故事。",
						"french": "Pourtant, les registres non officiels racontent une tout autre histoire.",
						"spanish": "Pero los registros extraoficiales cuentan una historia diferente.",
						"vietnamese": "Nhưng trong các ghi chép không chính thức lại có một câu chuyện khác.",
						"thai": "แต่บันทึกที่ไม่เป็นทางการกลับเล่าเรื่องราวที่แตกต่างออกไป",
						"hindi": "पर अनौपचारिक अभिलेखों में कुछ और ही कहानी लिखी है。"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "다른 이야기?",
						"english": "A different story?",
						"japanese": "違う話？",
						"chinese": "不同的故事？",
						"french": "Une autre histoire ?",
						"spanish": "¿Una historia diferente?",
						"vietnamese": "Câu chuyện khác?",
						"thai": "เรื่องราวที่แตกต่าง?",
						"hindi": "कोई और कहानी?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "아주 오래전, 여기로 온 \"추방자\"들의 기록이 말이야.",
						"english": "The records of the 'Exiles' who came here long ago.",
						"japanese": "ずっと昔、ここにやって来た『追放者』たちの記録だ。",
						"chinese": "很久以前，来到这里的“被放逐者”们的记录。",
						"french": "Les registres des 'Exilés' qui sont venus ici il y a bien longtemps.",
						"spanish": "Me refiero a los registros de los 'Exiliados' que llegaron aquí hace mucho tiempo.",
						"vietnamese": "Là những ghi chép về 'Người bị trục xuất' đã đến đây từ rất lâu rồi.",
						"thai": "บันทึกของ 'ผู้ถูกขับไล่' ที่มาที่นี่เมื่อนานมาแล้ว",
						"hindi": "बहुत पहले, यहाँ आए 'निर्vasितों' के अभिलेख।"
					},
					"type": "speech",
					"speaker": "brim"
				},
				{
					"emotion": "base",
					"speaker": "brim",
					"type": "speech",
					"content": {
						"korean": "깔끔하게 사라졌어. 흔적도 없이. 누가 시킨 걸까?",
						"english": "They vanished without a trace. Who ordered it?",
						"japanese": "きれいに消え去った。痕跡もなく。誰が命じたんだろう？",
						"chinese": "他们彻底消失了。毫无痕迹。是谁下的命令？",
						"french": "Ils ont disparu sans laisser de trace. Qui a ordonné ça ?",
						"spanish": "Desaparecieron sin dejar rastro. ¿Quién lo ordenó?",
						"vietnamese": "Chúng biến mất sạch sẽ, không một dấu vết. Ai đã ra lệnh?",
						"thai": "พวกมันหายไปอย่างไร้ร่องรอย ใครเป็นคนสั่งกันนะ?",
						"hindi": "साफ़-साफ़ गायब हो गए। बिना किसी निशान के। किसने करवाया होगा?"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "brim",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "base",
					"speaker": "brim",
					"type": "speech",
					"content": {
						"korean": "기록이 지워졌다는 건— 뭔가 숨길 게 있다는 소리겠지.",
						"english": "Records erased mean— there's something to hide, right?",
						"japanese": "記録が消されたということは――何か隠しているということだろう。",
						"chinese": "记录被抹去——这意味着有什么东西要隐藏，对吧。",
						"french": "Des registres effacés, ça veut dire... qu'il y a quelque chose à cacher, non ?",
						"spanish": "Que los registros se borren significa... que hay algo que ocultar, ¿verdad?",
						"vietnamese": "Ghi chép bị xóa nghĩa là— có điều gì đó cần phải che giấu, đúng không?",
						"thai": "บันทึกที่ถูกลบหมายความว่า— มีบางอย่างต้องซ่อนไว้สินะ",
						"hindi": "अभिलेख मिटा दिए गए मतलब— कुछ छुपाने जैसा है, है ना?"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "키란 테즈가 숨기고 있는 건가요?",
						"english": "Is Kiran Tez hiding something?",
						"japanese": "キラン・テズが隠しているのですか？",
						"chinese": "是基兰·泰兹在隐藏什么吗？",
						"french": "Est-ce Kiran Tez qui cache quelque chose ?",
						"spanish": "¿Está Kiran Tez ocultando algo?",
						"vietnamese": "Có phải Kiran Tez đang che giấu điều gì không?",
						"thai": "คิรัน เทซกำลังซ่อนอะไรอยู่หรือเปล่า?",
						"hindi": "क्या किरण तेज़ कुछ छुपा रहा है?"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "brim",
					"content": {
						"korean": "여기저기 낡은 문양들을 봐. \"질서\", \"재구성\".",
						"english": "Look at the old symbols everywhere. 'Order', 'Reconstruction'.",
						"japanese": "あちこちの古い紋様を見てみろ。「秩序」、「再構築」。",
						"chinese": "看看这些随处可见的旧纹样。“秩序”，“重构”。",
						"french": "Regarde les vieux symboles partout. 'Ordre', 'Reconstruction'.",
						"spanish": "Mira los viejos símbolos por todas partes. 'Orden', 'Reconstrucción'.",
						"vietnamese": "Hãy nhìn những hoa văn cũ kỹ khắp nơi. 'Trật tự', 'Tái cấu trúc'.",
						"thai": "ดูสัญลักษณ์เก่าๆ ที่อยู่ทั่วทุกที่สิ 'ระเบียบ' 'การสร้างใหม่'",
						"hindi": "चारों ओर पुराने चिह्न देखो। 'व्यवस्था', 'पुनर्गठन'।"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "서고 벽에 새겨진 낡은 문양들이 눈에 띄었다. 질서, 재구성.",
						"english": "Old symbols carved into the archive walls caught my eye. Order, Reconstruction.",
						"japanese": "書庫の壁に刻まれた古い紋様が目についた。秩序、再構築。",
						"chinese": "档案室墙壁上刻着的旧纹样引起了我的注意。秩序，重构。",
						"french": "De vieux symboles gravés sur les murs de l'archive attirèrent mon regard. Ordre, Reconstruction.",
						"spanish": "Viejos símbolos grabados en las paredes del archivo llamaron mi atención. Orden, Reconstrucción.",
						"vietnamese": "Những hoa văn cũ kỹ khắc trên tường thư viện đập vào mắt tôi. Trật tự, Tái cấu trúc.",
						"thai": "สัญลักษณ์เก่าๆ ที่แกะสลักอยู่บนผนังห้องเก็บเอกสารดึงดูดสายตาของฉัน ระเบียบ, การสร้างใหม่",
						"hindi": "पुस्तकालय की दीवारों पर खुदे पुराने चिह्न नज़र आए। व्यवस्था, पुनर्गठन।"
					}
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "여기가 진짜 지옥이 아니라고 생각하는 영혼도 있었지. 웃기지?",
						"english": "Some souls even thought this wasn't real hell. Funny, right?",
						"japanese": "ここが本当の地獄じゃないと考えていた魂もあった。面白いだろ？",
						"chinese": "有些灵魂甚至认为这里不是真正的地狱。好笑吧？",
						"french": "Certaines âmes pensaient même que ce n'était pas l'enfer. Amusant, non ?",
						"spanish": "Incluso hubo almas que pensaron que esto no era el infierno real. Gracioso, ¿verdad?",
						"vietnamese": "Cũng có những linh hồn nghĩ rằng đây không phải là địa ngục thật sự. Buồn cười đúng không?",
						"thai": "บางดวงวิญญาณคิดว่านี่ไม่ใช่ขุมนรกจริงๆ ตลกดีใช่ไหม?",
						"hindi": "कुछ आत्माएँ तो यह भी मानती थीं कि यह असली नरक नहीं है। अजीब है ना?"
					},
					"speaker": "brim",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…웃기네요.",
						"english": "...Funny.",
						"japanese": "…面白いですね。",
						"chinese": "…好笑。",
						"french": "...Amusant.",
						"spanish": "...Gracioso.",
						"vietnamese": "...Buồn cười thật.",
						"thai": "...ตลกดีครับ",
						"hindi": "...अजीब है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"type": "direction",
					"speaker": "brim",
					"action": "enter"
				},
				{
					"content": {
						"korean": "키란 테즈는 네가 이런 걸 파고들 줄 알았을 거야.",
						"english": "Kiran Tez would have known you'd dig into this.",
						"japanese": "キラン・テズは、お前がこんなものを掘り下げると分かっていたはずだ。",
						"chinese": "基兰·泰兹应该知道你会深究此事。",
						"french": "Kiran Tez aurait su que tu te pencherais là-dessus.",
						"spanish": "Kiran Tez habría sabido que indagarías en esto.",
						"vietnamese": "Kiran Tez hẳn đã biết ngươi sẽ đào sâu vào chuyện này.",
						"thai": "คิรัน เทซน่าจะรู้ว่าเจ้าจะขุดคุ้ยเรื่องนี้",
						"hindi": "किरण तेज़ को पता होगा कि तुम इसमें पड़ोगे।"
					},
					"type": "speech",
					"speaker": "brim",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "왜요?",
						"english": "Why?",
						"japanese": "なぜ？",
						"chinese": "为什么？",
						"french": "Pourquoi ?",
						"spanish": "¿Por qué?",
						"vietnamese": "Tại sao?",
						"thai": "ทำไม?",
						"hindi": "क्यों?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "영혼들의 \"분노\"는 꽤나 유용한 자원이거든.",
						"english": "The 'wrath' of souls is a quite useful resource.",
						"japanese": "魂の「怒り」は、なかなか便利な資源だからな。",
						"chinese": "因为灵魂的“愤怒”是一种相当有用的资源。",
						"french": "La « colère » des âmes est une ressource plutôt utile.",
						"spanish": "La «ira» de las almas es un recurso bastante útil.",
						"vietnamese": "Vì 'cơn thịnh nộ' của linh hồn là một tài nguyên khá hữu ích.",
						"thai": "เพราะ 'โทสะ' ของวิญญาณเป็นทรัพยากรที่มีประโยชน์มาก",
						"hindi": "आत्माओं का 'क्रोध' काफी उपयोगी संसाधन है।"
					},
					"type": "speech",
					"speaker": "brim",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "곧 알게 될 거야. 이 지옥의 진짜 웃긴 점을.",
						"english": "You'll soon learn. The truly amusing part of this hell.",
						"japanese": "じきにわかるだろう。この地獄の本当の面白さをな。",
						"chinese": "你很快就会知道。这个地狱真正有趣的地方。",
						"french": "Tu sauras bientôt. Le vrai côté amusant de cet enfer.",
						"spanish": "Pronto lo sabrás. La parte verdaderamente divertida de este infierno.",
						"vietnamese": "Ngươi sẽ sớm biết thôi. Cái điều thực sự buồn cười của địa ngục này.",
						"thai": "เจ้าจะได้รู้ในไม่ช้า สิ่งที่น่าขันจริงๆ ของนรกแห่งนี้",
						"hindi": "तुम्हें जल्द ही पता चलेगा। इस नरक का असली मज़ाक।"
					},
					"speaker": "brim",
					"type": "speech"
				},
				{
					"content": {
						"korean": "어두운 복도 끝에서 으르렁거리는 소리가 들렸다.",
						"english": "A growling sound was heard at the end of the dark corridor.",
						"japanese": "暗い廊下の奥から唸り声が聞こえた。",
						"chinese": "黑暗走廊的尽头传来了一阵咆哮声。",
						"french": "Un grognement fut entendu au bout du sombre couloir.",
						"spanish": "Se escuchó un gruñido al final del oscuro pasillo.",
						"vietnamese": "Một tiếng gầm gừ vang lên ở cuối hành lang tối tăm.",
						"thai": "เสียงคำรามดังขึ้นที่ปลายสุดของทางเดินมืด",
						"hindi": "अंधेरे गलियारे के अंत से एक गुर्राने की आवाज़ सुनाई दी।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크으으윽… 고작 {random_boss}의 부하를 쓰러뜨린다고…",
						"english": "Ugh... just defeating a minion of {random_boss}...",
						"japanese": "くぅぅ… たかが{random_boss}の部下を倒したにすぎない…",
						"chinese": "呃啊……不过是打败了{random_boss}的手下罢了……",
						"french": "Uuugh... tu n'as vaincu qu'un sbire de {random_boss}...",
						"spanish": "Uuugh... Solo has derrotado a un subordinado de {random_boss}...",
						"vietnamese": "Khụ khụ... Chỉ là hạ gục một tên tay sai của {random_boss} thôi mà...",
						"thai": "อึก... แค่โค่นลูกน้องของ {random_boss} เท่านั้นเอง...",
						"hindi": "ऊह... सिर्फ़ {random_boss} के एक चेले को हराकर..."
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "키란 테즈의 \"재구성\"은 막을 수 없어….",
						"english": "Kiran Tez's \"Reconstruction\" cannot be stopped...",
						"japanese": "キラン・テズの「再構成」は止められない…",
						"chinese": "基兰·泰兹的“重构”无法阻止……",
						"french": "La \"Reconstruction\" de Kiran Tez ne peut être arrêtée...",
						"spanish": "La \"Reconstrucción\" de Kiran Tez no puede ser detenida...",
						"vietnamese": "\"Tái Cấu Trúc\" của Kiran Tez không thể bị ngăn cản...",
						"thai": "\"การจัดระเบียบใหม่\" ของคิรัน เทซ หยุดไม่ได้หรอก...",
						"hindi": "किरण तेज़ के \"पुनर्गठन\" को रोका नहीं जा सकता..."
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…재구성?",
						"english": "...Reconstruction?",
						"japanese": "…再構成？",
						"chinese": "……重构？",
						"french": "...Reconstruction ?",
						"spanish": "...¿Reconstrucción?",
						"vietnamese": "...Tái Cấu Trúc?",
						"thai": "...การจัดระเบียบใหม่?",
						"hindi": "...पुनर्गठन?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "괴물은 사라졌지만, 키란 테즈의 이름은 더욱 선명해졌다.",
						"english": "The monster is gone, but Kiran Tez's name became clearer.",
						"japanese": "怪物は消えたが、キラン・テズの名はさらに鮮明になった。",
						"chinese": "怪物消失了，但基兰·泰兹的名字却更加清晰了。",
						"french": "Le monstre a disparu, mais le nom de Kiran Tez est devenu plus clair.",
						"spanish": "El monstruo desapareció, pero el nombre de Kiran Tez se hizo más claro.",
						"vietnamese": "Quái vật đã biến mất, nhưng tên của Kiran Tez lại trở nên rõ ràng hơn.",
						"thai": "สัตว์ประหลาดหายไปแล้ว แต่ชื่อของคิรัน เทซ กลับชัดเจนยิ่งขึ้น",
						"hindi": "राक्षस चला गया, लेकिन किरण तेज़ का नाम और स्पष्ट हो गया।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "지워진 기록 속 \"추방자\"들의 흔적을 쫓아 더 깊이 들어가야 한다.",
						"english": "We must delve deeper, following the traces of the \"Exiles\" in the erased records.",
						"japanese": "消された記録に記された「追放者」たちの痕跡を追い、さらに深く進まねばならない。",
						"chinese": "必须追寻被抹去的记录中“放逐者”的踪迹，深入其中。",
						"french": "Nous devons nous enfoncer plus profondément, à la recherche des traces des \"Exilés\" dans les registres effacés.",
						"spanish": "Debemos adentrarnos más, siguiendo las huellas de los \"Exiliados\" en los registros borrados.",
						"vietnamese": "Chúng ta phải đi sâu hơn, theo dấu vết của \"Những Kẻ Bị Trục Xuất\" trong các ghi chép đã bị xóa.",
						"thai": "เราต้องลงลึกกว่านี้ ตามรอยของ \"ผู้ถูกเนรเทศ\" ในบันทึกที่ถูกลบ",
						"hindi": "हमें मिटे हुए अभिलेखों में \"निर्वासितों\" के निशानों का पीछा करते हुए और गहराई तक जाना होगा।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 서고 깊은 곳에서 모습을 드러냈다.",
						"english": "A giant shadow stood and emerged from the depths.",
						"japanese": "巨大な影が立ち上がり、深淵から姿を現した。",
						"chinese": "一个巨大的影子站了起来，从深处显现出来。",
						"french": "Une ombre gigantesque se leva et émergea des profondeurs.",
						"spanish": "Una sombra gigantesca se alzó y emergió de las profundidades.",
						"vietnamese": "Một bóng tối khổng lồ hiện ra từ sâu thẳm.",
						"thai": "เงาขนาดมหึมาปรากฏขึ้นจากความลึก",
						"hindi": "एक विशाल छाया खड़ी हुई और गहराई से उभरी।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "오지 말라고 했을 텐데.",
						"english": "I told you not to come.",
						"japanese": "来るなと言ったはずだ。",
						"chinese": "我应该说过不让你来。",
						"french": "Je t'avais dit de ne pas venir.",
						"spanish": "Te dije que no vinieras.",
						"vietnamese": "Ta đã bảo ngươi đừng đến rồi mà.",
						"thai": "ข้าบอกเจ้าแล้วว่าอย่ามา",
						"hindi": "मैंने तुम्हें आने से मना किया था।"
					}
				},
				{
					"content": {
						"korean": "{random_boss}의 영역을 침범하다니. 어리석군.",
						"english": "To trespass into {random_boss}'s domain. Foolish.",
						"japanese": "{random_boss}の領域を侵犯するとは。愚か者め。",
						"chinese": "竟敢侵犯{random_boss}的领域。真是愚蠢。",
						"french": "Viens empiéter sur le domaine de {random_boss}. Insensé.",
						"spanish": "Invadir el dominio de {random_boss}. Qué insensato.",
						"vietnamese": "Xâm phạm lãnh địa của {random_boss}. Thật ngu xuẩn.",
						"thai": "บุกรุกอาณาเขตของ {random_boss} ช่างโง่เขลา",
						"hindi": "{random_boss} के क्षेत्र में घुसपैठ करना। मूर्खता।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "키란 테즈의 지시인가.",
						"english": "Is this Kiran Tez's order?",
						"japanese": "キラン・テズの指示か。",
						"chinese": "是基兰·泰兹的指示吗？",
						"french": "Est-ce un ordre de Kiran Tez ?",
						"spanish": "¿Es una orden de Kiran Tez?",
						"vietnamese": "Đây là lệnh của Kiran Tez sao?",
						"thai": "นี่คือคำสั่งของคิรัน เทซหรือ",
						"hindi": "क्या यह किरण तेज़ का आदेश है?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"action": "enter",
					"speaker": "brim",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "brim",
					"content": {
						"korean": "아, 싸움은 내 전문이 아니라서 말이야.",
						"english": "Ah, fighting isn't exactly my specialty.",
						"japanese": "ああ、戦いは私の専門ではないからな。",
						"chinese": "啊，战斗可不是我的专长。",
						"french": "Ah, le combat n'est pas vraiment ma spécialité.",
						"spanish": "Ah, la lucha no es exactamente mi especialidad.",
						"vietnamese": "À, chiến đấu không phải là sở trường của ta.",
						"thai": "อ่า การต่อสู้ไม่ใช่ความถนัดของข้า",
						"hindi": "अह, लड़ाई मेरी खासियत नहीं है।"
					}
				},
				{
					"duration_ms": 400,
					"direction": "down",
					"action": "exit",
					"speaker": "brim",
					"type": "direction"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 괴물이 주인공을 집어삼켰다.",
						"english": "An unknown monster devoured the protagonist.",
						"japanese": "正体不明の怪物が主人公を飲み込んだ。",
						"chinese": "不知名的怪物吞噬了主角。",
						"french": "Un monstre inconnu a dévoré le protagoniste.",
						"spanish": "Un monstruo desconocido devoró al protagonista.",
						"vietnamese": "Một con quái vật không rõ danh tính đã nuốt chửng nhân vật chính.",
						"thai": "สัตว์ประหลาดนิรนามกลืนกินตัวเอก",
						"hindi": "एक अज्ञात राक्षस ने नायक को निगल लिया।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 영혼은… 그저 재료일 뿐.",
						"english": "A paltry soul... merely a component.",
						"japanese": "取るに足らない魂は…ただの材料にすぎない。",
						"chinese": "卑微的灵魂……不过是材料罢了。",
						"french": "Une âme insignifiante... juste un ingrédient.",
						"spanish": "Un alma insignificante... solo un ingrediente.",
						"vietnamese": "Một linh hồn tầm thường... chỉ là nguyên liệu mà thôi.",
						"thai": "วิญญาณอันไร้ค่า... ก็แค่ส่วนประกอบเท่านั้นเอง",
						"hindi": "एक तुच्छ आत्मा... मात्र एक सामग्री।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…아직 끝나지 않았어.",
						"english": "...It's not over yet.",
						"japanese": "…まだ終わっていない。",
						"chinese": "……还没结束。",
						"french": "...Ce n'est pas encore fini.",
						"spanish": "...Aún no ha terminado.",
						"vietnamese": "...Vẫn chưa kết thúc đâu.",
						"thai": "...ยังไม่จบแค่นี้หรอก",
						"hindi": "...अभी ख़त्म नहीं हुआ है।"
					}
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"지옥 서고. 영혼들의 기록이 모이는 곳.",
			"모든 것이 질서정연하다고 했지만 —",
			"어떤 진실은 사라지고, 어떤 기억은 조작된다.",
			"그곳에서, 불완전한 진실이 주인공을 기다린다."
		],
		"english": [
			"Hell's Library. Where the records of souls gather.",
			"Though everything was said to be in perfect order —",
			"Some truths vanish, some memories are manipulated.",
			"There, an incomplete truth awaits the protagonist."
		],
		"japanese": [
			"地獄の書庫。魂の記録が集まる場所。",
			"全てが秩序立っていると言われたが —",
			"ある真実は消え、ある記憶は操作される。",
			"そこで、不完全な真実が主人公を待つ。"
		],
		"chinese": [
			"地狱书库。灵魂记录汇集之地。",
			"尽管一切都井然有序 —",
			"有些真相消失，有些记忆被篡改。",
			"在那里，不完整的真相等待着主人公。"
		],
		"french": [
			"La Bibliothèque Infernale. Là où les archives des âmes sont rassemblées.",
			"Bien que tout ait été dit en parfait ordre —",
			"Certaines vérités disparaissent, certaines mémoires sont manipulées.",
			"Là, une vérité incomplète attend le protagoniste."
		],
		"spanish": [
			"La Biblioteca del Infierno. Donde se reúnen los registros de las almas.",
			"Aunque se dijo que todo estaba en perfecto orden —",
			"Algunas verdades se desvanecen, algunas memorias son manipuladas.",
			"Allí, una verdad incompleta espera al protagonista."
		],
		"vietnamese": [
			"Thư viện Địa ngục. Nơi lưu giữ hồ sơ của các linh hồn.",
			"Dù mọi thứ được cho là trong trật tự hoàn hảo —",
			"Một số sự thật biến mất, một số ký ức bị thao túng.",
			"Ở đó, một sự thật không hoàn chỉnh đang chờ đợi nhân vật chính."
		],
		"thai": [
			"หอสมุดนรก สถานที่รวบรวมบันทึกวิญญาณ",
			"แม้จะบอกว่าทุกสิ่งเป็นระเบียบเรียบร้อย แต่ว่า —",
			"ความจริงบางอย่างเลือนหาย ความทรงจำบางอย่างถูกบิดเบือน",
			"ณ ที่แห่งนั้น ความจริงที่ไม่สมบูรณ์กำลังรอคอยตัวเอกอยู่"
		],
		"hindi": [
			"नर्क की लाइब्रेरी। जहाँ आत्माओं के अभिलेख एकत्रित होते हैं।",
			"हालाँकि सब कुछ व्यवस्थित कहा गया था —",
			"कुछ सच गायब हो जाते हैं, कुछ यादें हेरफेर की जाती हैं।",
			"वहाँ, एक अधूरी सच्चाई नायक का इंतजार कर रही है।"
		]
	}
} as const;
