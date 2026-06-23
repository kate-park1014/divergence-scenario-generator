export const scenario_modern_reverberation_51_05 = {
	"scenario_id": "modern_reverberation_51_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "modern",
	"actors": {
		"max": {
			"id": "mon_6e8c1577-89e2-49f6-a9f3-a6521b9e7f59",
			"name": {
				"korean": "맥스",
				"english": "Max",
				"japanese": "マックス",
				"chinese": "麦克斯",
				"french": "Max",
				"spanish": "Max",
				"vietnamese": "Max",
				"thai": "แม็กซ์",
				"hindi": "मैक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8bd7f351-400b-46f9-828f-aa2542734900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/62971060-c904-4d96-afcd-d11f831b3e00/public"
		}
	},
	"boss": {
		"pool_id": "pool_Legacy_Reverberation_V1"
	},
	"epilogue": {
		"korean": [
			"피의 서약은 끊겼다. 그러나 도시는 침묵하지 않았다.",
			"그의 희생은 구원이었을까, 아니면 또 다른 비극의 시작이었을까.",
			"정산된 업보의 자리엔, 씁쓸한 해방감만이 남았다.",
			"과거의 그림자는 사라졌지만, 새로운 운명이 탐험대를 기다리고 있었다."
		],
		"english": [
			"The blood pact was broken. Yet, the city did not fall silent.",
			"Was his sacrifice salvation, or the beginning of another tragedy?",
			"In the wake of karma settled, only bitter liberation remained.",
			"The shadows of the past vanished, but a new destiny awaited the expedition."
		],
		"japanese": [
			"血の誓約は断たれた。しかし、都市は沈黙しなかった。",
			"彼の犠牲は救済だったのか、それとも新たな悲劇の始まりだったのか。",
			"精算された業報の場には、苦い解放感だけが残った。",
			"過去の影は消え去ったが、新たな運命が探検隊を待っていた。"
		],
		"chinese": [
			"血之契约已断。然而，城市并未沉寂。",
			"他的牺牲是救赎，还是另一场悲剧的开端？",
			"清算业报之后，只剩下苦涩的解脱感。",
			"过去的阴影消散了，但新的命运正等待着探险队。"
		],
		"french": [
			"Le pacte de sang est rompu. Pourtant, la ville ne s'est pas tue.",
			"Son sacrifice fut-il un salut, ou le début d'une autre tragédie ?",
			"À la place du karma réglé, seule une amère sensation de libération demeurait.",
			"Les ombres du passé avaient disparu, mais un nouveau destin attendait l'expédition."
		],
		"spanish": [
			"El pacto de sangre se rompió. Sin embargo, la ciudad no guardó silencio.",
			"¿Fue su sacrificio una salvación, o el comienzo de otra tragedia?",
			"En el lugar del karma saldado, solo quedó una amarga sensación de liberación.",
			"Las sombras del pasado desaparecieron, pero un nuevo destino esperaba a la expedición."
		],
		"vietnamese": [
			"Lời thề huyết đã bị phá vỡ. Nhưng thành phố vẫn không im lặng.",
			"Sự hy sinh của anh ấy là sự cứu rỗi, hay khởi đầu cho một bi kịch khác?",
			"Nơi nghiệp chướng được giải quyết, chỉ còn lại cảm giác giải thoát cay đắng.",
			"Bóng tối quá khứ đã tan biến, nhưng một vận mệnh mới đang chờ đợi đoàn thám hiểm."
		],
		"thai": [
			"พันธสัญญาโลหิตถูกทำลาย ทว่าเมืองกลับไม่เงียบงัน",
			"การเสียสละของเขาคือความรอด หรือจุดเริ่มต้นของโศกนาฏกรรมครั้งใหม่?",
			"ณ ที่ซึ่งกรรมชั่วได้รับการชดใช้ มีเพียงความรู้สึกปลดปล่อยอันขมขื่นเท่านั้นที่เหลืออยู่",
			"เงาของอดีตได้หายไปแล้ว แต่ชะตากรรมใหม่กำลังรอคณะสำรวจอยู่"
		],
		"hindi": [
			"रक्त संधि टूट गई। फिर भी, शहर शांत नहीं हुआ।",
			"क्या उसका बलिदान मुक्ति था, या एक और त्रासदी की शुरुआत?",
			"कर्म के भुगतान के बाद, केवल कड़वी मुक्ति की भावना शेष थी।",
			"अतीत की छायाएँ मिट गईं, लेकिन एक नई नियति अभियान का इंतजार कर रही थी।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "max"
				},
				{
					"type": "speech",
					"speaker": "max",
					"emotion": "angry",
					"content": {
						"korean": "안 돼! 유물을 넘겨주면 안 돼!",
						"english": "No! Don't hand over the relic!",
						"japanese": "だめだ！遺物を渡すな！",
						"chinese": "不行！不能交出遗物！",
						"french": "Non ! Ne remettez pas la relique !",
						"spanish": "¡No! ¡No entregues la reliquia!",
						"vietnamese": "Không được! Đừng giao nộp di vật!",
						"thai": "ไม่นะ! อย่ามอบวัตถุโบราณให้พวกเขา!",
						"hindi": "नहीं! अवशेष मत देना!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "맥스? 무슨 소리야?",
						"english": "Max? What are you talking about?",
						"japanese": "マックス？どういうことだ？",
						"chinese": "麦克斯？你在说什么？",
						"french": "Max ? De quoi parles-tu ?",
						"spanish": "¿Max? ¿De qué estás hablando?",
						"vietnamese": "Max? Anh đang nói cái gì vậy?",
						"thai": "แม็กซ์? นี่มันอะไรกัน?",
						"hindi": "मैक्स? तुम क्या कह रहे हो?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "max",
					"content": {
						"korean": "이 유물들은… 그의 봉인을 깨는 열쇠야. 그의 육신과 연결되어 있어!",
						"english": "These artifacts... they are the keys to breaking his seal. They are linked to his very being!",
						"japanese": "これらの遺物は… 彼の封印を破る鍵だ。彼の肉体と繋がっている！",
						"chinese": "这些文物……是解开他封印的钥匙。它们与他的肉身相连！",
						"french": "Ces artefacts... sont les clés pour briser son sceau. Ils sont liés à son être même !",
						"spanish": "Estos artefactos... son las llaves para romper su sello. ¡Están conectados a su propia carne!",
						"vietnamese": "Những cổ vật này... là chìa khóa để phá vỡ phong ấn của hắn. Chúng gắn liền với thân xác hắn!",
						"thai": "วัตถุโบราณเหล่านี้... คือกุญแจที่จะทำลายผนึกของเขา พวกมันเชื่อมโยงกับร่างกายของเขา!",
						"hindi": "ये कलाकृतियाँ... उसकी मुहर तोड़ने की चाबियाँ हैं। वे उसके शरीर से जुड़ी हुई हैं!"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…때는 이미 늦었다. 어리석은 자들.",
						"english": "...It's too late. Fools.",
						"japanese": "…時は既に遅し。愚か者どもめ。",
						"chinese": "……为时已晚。愚蠢的人们。",
						"french": "...Il est déjà trop tard. Imbéciles.",
						"spanish": "...Es demasiado tarde. Necios.",
						"vietnamese": "...Đã quá muộn rồi. Những kẻ ngu ngốc.",
						"thai": "...สายเกินไปแล้ว พวกโง่เง่า.",
						"hindi": "...बहुत देर हो चुकी है। मूर्खों।"
					},
					"speaker": "boss"
				},
				{
					"speaker": "boss",
					"duration_ms": 800,
					"action": "shake",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "마지막 유물이 맞춰지자, 레버버레이션의 창백한 육신이 산산이 부서졌다. 진정한 정체가 드러났다.",
						"english": "As the last artifact fell into place, Reverberation's pale body shattered. Its true form was revealed.",
						"japanese": "最後の遺物が嵌め込まれると、リバーブレーションの蒼白い肉体が粉々に砕け散った。真の正体が現れた。",
						"chinese": "当最后一个文物归位时，回响的苍白肉身碎裂了。真正的身份被揭示了。",
						"french": "Dès que le dernier artefact fut en place, le corps pâle de Réverbération se brisa en mille morceaux. Sa véritable identité fut révélée.",
						"spanish": "Al encajarse el último artefacto, el pálido cuerpo de Reverberación se hizo añicos. Su verdadera identidad fue revelada.",
						"vietnamese": "Khi cổ vật cuối cùng được đặt vào, thân xác nhợt nhạt của Reverberation vỡ tan tành. Thân phận thật sự của nó đã lộ diện.",
						"thai": "เมื่อวัตถุโบราณชิ้นสุดท้ายเข้าที่ ร่างกายซีดเซียวของ Reverberation ก็แตกสลาย ตัวตนที่แท้จริงของมันถูกเปิดเผยออกมา.",
						"hindi": "जैसे ही अंतिम कलाकृति अपनी जगह पर गिरी, रेवरबेरेशन का पीला शरीर बिखर गया। उसका असली रूप सामने आ गया।"
					},
					"speaker": "narrator"
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
					"duration_ms": 500,
					"speaker": "max",
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "나는 가문의 모든 죄와 업보를 정산하기 위해 태어난 숙명의 화신.",
						"english": "I am the incarnate destiny, born to settle all the sins and karma of this family.",
						"japanese": "私は、一族の全ての罪と業を清算するために生まれた宿命の化身。",
						"chinese": "我乃宿命的化身，为清算家族所有罪孽与业报而生。",
						"french": "Je suis l'incarnation du destin, né(e) pour régler tous les péchés et le karma de cette famille.",
						"spanish": "Soy la encarnación del destino, nacida para saldar todos los pecados y el karma de esta familia.",
						"vietnamese": "Ta là hóa thân của định mệnh, được sinh ra để thanh toán tất cả tội lỗi và nghiệp chướng của gia tộc.",
						"thai": "ข้าคือร่างจุติแห่งโชคชะตา เกิดมาเพื่อชำระล้างบาปและกรรมทั้งหมดของตระกูลนี้.",
						"hindi": "मैं नियति का अवतार हूँ, इस परिवार के सभी पापों और कर्मों का हिसाब चुकाने के लिए जन्मी हूँ।"
					},
					"emotion": "base",
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "숙명…의 화신?",
						"english": "The incarnate... destiny?",
						"japanese": "宿命…の化身、だと？",
						"chinese": "宿命……的化身？",
						"french": "L'incarnation... du destin ?",
						"spanish": "¿La encarnación... del destino?",
						"vietnamese": "Hóa thân... của định mệnh?",
						"thai": "ร่างจุติ... แห่งโชคชะตา?",
						"hindi": "नियति... का अवतार?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"emotion": "base",
					"content": {
						"korean": "너희가 찾던 '피의 서약'? 그것은 나의 존재를 묶는 원본이다.",
						"english": "The 'Blood Pact' you sought? That is the original binding my very existence.",
						"japanese": "お前たちが探していた「血の誓約」？それは私の存在を縛る原典だ。",
						"chinese": "你们寻找的“血之契约”？那是束缚我存在的原典。",
						"french": "Le 'Pacte de Sang' que vous cherchiez ? C'est l'original qui lie mon existence même.",
						"spanish": "¿El 'Pacto de Sangre' que buscabais? Ese es el original que ata mi propia existencia.",
						"vietnamese": "Cái 'Khế Ước Máu' mà các ngươi tìm kiếm? Đó chính là bản gốc ràng buộc sự tồn tại của ta.",
						"thai": "'พันธสัญญาโลหิต' ที่พวกเจ้าตามหา? นั่นคือกำเนิดที่ผูกมัดตัวตนของข้า.",
						"hindi": "जिस 'रक्त अनुबंध' को तुम खोज रहे थे? वह मेरे अस्तित्व को बांधने वाला मूल है।"
					}
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "사라진 이름은… 너희 가문의 시조. 비극의 시작이지.",
						"english": "The vanished name is... the progenitor of your family. The beginning of tragedy.",
						"japanese": "消え去った名は… お前たちの家系の始祖。悲劇の始まりだ。",
						"chinese": "消失的名字是……你们家族的始祖。悲剧的开端。",
						"french": "Le nom disparu est... le fondateur de votre famille. Le début de la tragédie.",
						"spanish": "El nombre desaparecido es... el progenitor de vuestra familia. El comienzo de la tragedia.",
						"vietnamese": "Cái tên đã biến mất là... thủy tổ của gia tộc các ngươi. Khởi nguồn của bi kịch.",
						"thai": "ชื่อที่หายไปคือ... บรรพบุรุษของตระกูลพวกเจ้า จุดเริ่มต้นของโศกนาฏกรรม.",
						"hindi": "लुप्त नाम है... तुम्हारे परिवार का आदिपुरुष। त्रासदी की शुरुआत।"
					},
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "max"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "오래된 멜로디가 들리는가? 그것은 가문의 진혼곡이자 나의 탄생을 알리는 비명이었다.",
						"english": "Do you hear an ancient melody? It was the requiem of this family, and a scream announcing my birth.",
						"japanese": "古き調べが聞こえるか？それは一族の鎮魂歌であり、私の誕生を告げる叫びであった。",
						"chinese": "可曾听闻那古老的旋律？那是家族的镇魂曲，亦是我诞生的尖啸。",
						"french": "Entendez-vous une ancienne mélodie ? C'était le requiem de cette famille, et un cri annonçant ma naissance.",
						"spanish": "¿Escucháis una antigua melodía? Fue el réquiem de esta familia, y un grito que anunciaba mi nacimiento.",
						"vietnamese": "Ngươi có nghe thấy giai điệu cổ xưa không? Đó là khúc cầu hồn của gia tộc, và là tiếng thét báo hiệu sự ra đời của ta.",
						"thai": "เจ้าได้ยินท่วงทำนองโบราณหรือไม่? มันคือเพลงสวดส่งวิญญาณของตระกูลนี้ และเสียงกรีดร้องที่ประกาศการกำเนิดของข้า.",
						"hindi": "क्या तुम्हें एक पुरानी धुन सुनाई देती है? वह इस परिवार का स्तोत्र था, और मेरे जन्म की घोषणा करने वाली एक चीख।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그 멜로디가… 당신을 위한 것이었어?",
						"english": "That melody... was for you?",
						"japanese": "その調べが…あなたのために？",
						"chinese": "那旋律……是为你而奏？",
						"french": "Cette mélodie... était pour vous ?",
						"spanish": "¿Esa melodía... era para ti?",
						"vietnamese": "Giai điệu đó... là dành cho người ư?",
						"thai": "ท่วงทำนองนั้น... มีไว้เพื่อท่านหรือ?",
						"hindi": "वह धुन... तुम्हारे लिए थी?"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "나는 모든 시간의 피로 쓰인 계약이자, 너희 조상들이 남긴 업보의 거울이니.",
						"english": "I am a contract written in the blood of all time, and a mirror of the karma left by your ancestors.",
						"japanese": "私は、全ての時間の血で書かれた契約であり、お前たちの祖先が残した業の鏡なのだから。",
						"chinese": "我是以时间之血书写的契约，亦是你们祖先所遗业报之镜。",
						"french": "Je suis un contrat écrit avec le sang de tous les temps, et un miroir du karma laissé par vos ancêtres.",
						"spanish": "Soy un contrato escrito con la sangre de todos los tiempos, y un espejo del karma dejado por vuestros ancestros.",
						"vietnamese": "Ta là khế ước được viết bằng máu của mọi thời đại, và là tấm gương phản chiếu nghiệp chướng mà tổ tiên các ngươi để lại.",
						"thai": "ข้าคือพันธสัญญาที่เขียนด้วยโลหิตแห่งกาลเวลา และเป็นกระจกเงาแห่งกรรมที่บรรพบุรุษของเจ้าทิ้งไว้.",
						"hindi": "मैं सभी समय के रक्त से लिखा गया एक अनुबंध हूँ, और तुम्हारे पूर्वजों द्वारा छोड़े गए कर्म का दर्पण।"
					},
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "max",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "흐릿한 사진 속 인물들? 그들은 내게 흡수된 영혼들. 나는 가문의 '기억의 그릇'이다.",
						"english": "Figures in faded photos? They're souls I've absorbed. I am the family's 'Vessel of Memories'.",
						"japanese": "色褪せた写真の中の人物？ 彼らは私に吸収された魂だ。私は一族の「記憶の器」だからな。",
						"chinese": "模糊照片里的人？他们是被我吸收的灵魂。我是家族的“记忆之器”。",
						"french": "Les figures sur les photos floues ? Ce sont les âmes que j'ai absorbées. Je suis le 'Vaisseau des souvenirs' de la famille.",
						"spanish": "¿Las figuras en las fotos borrosas? Son almas que he absorbido. Soy el 'Recipiente de los recuerdos' de la familia.",
						"vietnamese": "Những hình ảnh mờ nhạt trong bức ảnh? Họ là những linh hồn tôi đã hấp thụ. Tôi là 'Vật chứa Ký ức' của gia tộc.",
						"thai": "คนในรูปที่พร่ามัว? พวกเขาคือวิญญาณที่ข้าดูดซับไว้ ข้าคือ 'ภาชนะแห่งความทรงจำ' ของตระกูล",
						"hindi": "धुंधली तस्वीरों में लोग? वे वो आत्माएं हैं जिन्हें मैंने सोख लिया है। मैं परिवार का 'स्मृति का पात्र' हूँ।"
					},
					"emotion": "base",
					"speaker": "boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "모든 기억을… 당신이 짊어졌단 말인가?",
						"english": "All these memories... you bore them?",
						"japanese": "全ての記憶を…あなたが背負っていたのか？",
						"chinese": "所有的记忆…都由你承担了吗？",
						"french": "Tous ces souvenirs… vous les avez portés ?",
						"spanish": "¿Todas estas memorias… las cargaste tú?",
						"vietnamese": "Tất cả ký ức… người đã gánh vác sao?",
						"thai": "ความทรงจำทั้งหมด... เจ้าแบกรับมันไว้ทั้งหมดเลยหรือ?",
						"hindi": "सारी यादें... क्या तुमने उन्हें ढोया?"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "그 비극적인 운명… 내가 끝낼게.",
						"english": "That tragic fate... I'll end it.",
						"japanese": "その悲劇的な運命…私が終わらせる。",
						"chinese": "那悲剧性的命运…我来终结。",
						"french": "Ce destin tragique… je vais y mettre fin.",
						"spanish": "Ese destino trágico… yo lo acabaré.",
						"vietnamese": "Số phận bi thảm đó… ta sẽ kết thúc.",
						"thai": "ชะตากรรมอันน่าเศร้ารั้น... ข้าจะยุติมันเอง",
						"hindi": "वह दुखद भाग्य... मैं इसे समाप्त करूँगा।"
					},
					"emotion": "angry",
					"speaker": "max",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "max",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "boss",
					"emotion": "base",
					"content": {
						"korean": "무릎 꿇어라. 너희의 의지는 고작 이 정도인가.",
						"english": "Kneel. Is this all your will amounts to?",
						"japanese": "跪け。お前たちの意志はこれしきか。",
						"chinese": "跪下吧。你们的意志就仅止于此吗？",
						"french": "Agenouillez-vous. Votre volonté n'est que ça ?",
						"spanish": "Arrodíllense. ¿Es esto todo lo que vuestra voluntad representa?",
						"vietnamese": "Quỳ xuống đi. Ý chí của các ngươi chỉ đến thế thôi sao?",
						"thai": "คุกเข่าซะ! เจตจำนงของพวกเจ้ามีแค่นี้เองรึไง?",
						"hindi": "घुटने टेक दो। क्या तुम्हारी इच्छाशक्ति बस इतनी ही है?"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "…아직 끝나지 않았어. 다시 일어설 거야.",
						"english": "...It's not over yet. I'll rise again.",
						"japanese": "…まだ終わってない。また立ち上がるさ。",
						"chinese": "……还没结束。我会再站起来的。",
						"french": "Ce n'est pas encore fini. Je me relèverai.",
						"spanish": "Aún no ha terminado. Me levantaré de nuevo.",
						"vietnamese": "Chưa kết thúc đâu. Ta sẽ đứng dậy lần nữa.",
						"thai": "ยังไม่จบ! ฉันจะลุกขึ้นสู้อีกครั้ง",
						"hindi": "अभी खत्म नहीं हुआ। मैं फिर उठूँगा।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "max",
					"emotion": "happy",
					"content": {
						"korean": "포기하지 마! 아직 기회는 있어.",
						"english": "Don't give up! There's still a chance.",
						"japanese": "諦めるな！まだチャンスはある。",
						"chinese": "别放弃！还有机会。",
						"french": "N'abandonnez pas ! Il y a encore une chance.",
						"spanish": "¡No te rindas! Todavía hay una oportunidad.",
						"vietnamese": "Đừng bỏ cuộc! Vẫn còn cơ hội.",
						"thai": "อย่ายอมแพ้! ยังมีโอกาส",
						"hindi": "हार मत मानो! अभी भी मौका है।"
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "max",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…결국, 해방인가. 이 비극적인 운명에서.",
						"english": "...So, liberation, after all. From this tragic fate.",
						"japanese": "…結局、解放か。この悲劇的な運命から。",
						"chinese": "…最终，是解放吗？从这悲剧性的命运中。",
						"french": "...Donc, la libération, après tout. De ce destin tragique.",
						"spanish": "...Así que, al final, liberación. De este destino trágico.",
						"vietnamese": "...Cuối cùng, là giải thoát sao. Khỏi số phận bi thảm này.",
						"thai": "...ในที่สุดก็คือการปลดปล่อยงั้นหรือ จากชะตากรรมอันน่าเศร้ารี้",
						"hindi": "...तो, अंततः मुक्ति। इस दुखद भाग्य से।"
					},
					"speaker": "boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "당신도… 피해자였던 건가.",
						"english": "You too... were a victim?",
						"japanese": "あなたも…被害者だったのか。",
						"chinese": "你也是…受害者吗？",
						"french": "Vous aussi… étiez une victime ?",
						"spanish": "¿Tú también… eras una víctima?",
						"vietnamese": "Người cũng… là nạn nhân sao.",
						"thai": "ท่านเองก็... เป็นเหยื่อด้วยงั้นหรือ",
						"hindi": "तुम भी... एक शिकार थे?"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"speaker": "max",
					"content": {
						"korean": "고통은 끝났어. 이제 편히 쉬어.",
						"english": "The suffering is over. Rest in peace now.",
						"japanese": "苦しみは終わった。もう安らかに休んで。",
						"chinese": "痛苦结束了。现在安息吧。",
						"french": "La souffrance est terminée. Repose en paix maintenant.",
						"spanish": "El sufrimiento ha terminado. Descansa en paz ahora.",
						"vietnamese": "Đau khổ đã kết thúc. Giờ hãy yên nghỉ.",
						"thai": "ความเจ็บปวดสิ้นสุดลงแล้ว ตอนนี้จงพักผ่อนอย่างสงบ",
						"hindi": "पीड़ा समाप्त हो गई। अब शांति से आराम करो।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "비극적인 계약은 끝났지만, 도시의 그림자는 여전히 어두웠다. 새로운 이야기가 시작될 참이었다.",
						"english": "The tragic pact is broken, but the city's shadows linger. A new story is about to begin.",
						"japanese": "悲劇的な契約は終わったが、都市の影は依然として暗い。新たな物語が始まろうとしていた。",
						"chinese": "悲剧性的契约已结束，但城市的阴影依然笼罩。新的故事即将开始。",
						"french": "Le pacte tragique est rompu, mais les ombres de la ville persistent. Une nouvelle histoire est sur le point de commencer.",
						"spanish": "El trágico pacto ha terminado, pero las sombras de la ciudad aún perduran. Una nueva historia está a punto de comenzar.",
						"vietnamese": "Giao ước bi thảm đã kết thúc, nhưng bóng đêm thành phố vẫn còn bao trùm. Một câu chuyện mới sắp bắt đầu.",
						"thai": "สัญญาสุดโศกสิ้นสุดลงแล้ว แต่เงาแห่งเมืองยังคงมืดมิด เรื่องราวใหม่กำลังจะเริ่มต้นขึ้น",
						"hindi": "दुखद समझौता समाप्त हो गया है, लेकिन शहर की परछाइयाँ अब भी गहरी हैं। एक नई कहानी शुरू होने वाली थी।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "어리석은 자들이여. 너희가 짊어진 것은 고작 현대의 피 한 방울이다.",
						"english": "Fools. What you bear is but a drop of modern blood.",
						"japanese": "愚かな者たちよ。お前たちが背負うものは、たかだか現代の血の一滴に過ぎない。",
						"chinese": "愚蠢之人。你们所承担的不过是现代的一滴血。",
						"french": "Fous. Ce que vous portez n'est qu'une goutte de sang moderne.",
						"spanish": "Necios. Lo que cargáis es solo una gota de sangre moderna.",
						"vietnamese": "Những kẻ ngu ngốc. Cái mà các ngươi gánh vác chỉ là một giọt máu của thời hiện đại.",
						"thai": "คนโง่เอ๋ย สิ่งที่เจ้าแบกรับก็เป็นเพียงแค่หยดเลือดแห่งยุคปัจจุบันเท่านั้น",
						"hindi": "मूर्खों। तुम जो ढोते हो वह आधुनिक रक्त की एक बूंद मात्र है।"
					},
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "너희의 시대 또한 과거의 그림자에서 벗어날 수 없음을 깨달아라.",
						"english": "Realize that your era, too, cannot escape the shadows of the past.",
						"japanese": "お前たちの時代もまた、過去の影から逃れられないことを悟れ。",
						"chinese": "觉悟吧，你们的时代也无法摆脱过去的阴影。",
						"french": "Comprenez que votre ère, elle aussi, ne peut échapper aux ombres du passé.",
						"spanish": "Comprended que vuestra era, también, no puede escapar de las sombras del pasado.",
						"vietnamese": "Hãy nhận ra rằng thời đại của các ngươi cũng không thể thoát khỏi bóng tối của quá khứ.",
						"thai": "จงตระหนักว่ายุคสมัยของเจ้าก็ไม่อาจหลุดพ้นจากเงาของอดีตได้เช่นกัน",
						"hindi": "समझो कि तुम्हारा युग भी अतीत की छाया से बच नहीं सकता।"
					},
					"emotion": "base",
					"speaker": "boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…굴레를 끊겠어.",
						"english": "...I'll break the chains.",
						"japanese": "…この因縁を断ち切る。",
						"chinese": "…我将斩断枷锁。",
						"french": "...Je briserai les chaînes.",
						"spanish": "...Romperé las cadenas.",
						"vietnamese": "...Ta sẽ phá vỡ xiềng xích.",
						"thai": "...ข้าจะทำลายพันธนาการนี้",
						"hindi": "...मैं बेड़ियाँ तोड़ दूँगा।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"spot": [
						3,
						2
					],
					"speaker": "max",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "max",
					"emotion": "angry",
					"content": {
						"korean": "이 모든 업보를… 여기서 끝내자.",
						"english": "All this karma... let's end it here.",
						"japanese": "この全ての業を…ここで終わらせよう。",
						"chinese": "所有这些业报…就在此终结吧。",
						"french": "Tout ce karma… finissons-en ici.",
						"spanish": "Todo este karma… terminémoslo aquí.",
						"vietnamese": "Tất cả nghiệp chướng này… hãy kết thúc ở đây.",
						"thai": "กรรมทั้งหมดนี้... มาจบมันที่นี่เถอะ",
						"hindi": "यह सारा कर्म... यहीं समाप्त करते हैं।"
					},
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"오래된 피의 서약, 그 그림자가 도시를 덮쳤다.",
			"모든 유물이 모이는 순간, 감춰진 진실이 깨어난다.",
			"숙명의 화신, 레버버레이션. 그 비극의 끝은 어디인가.",
			"해방인가, 또 다른 속박인가. 선택의 시간이 다가온다."
		],
		"english": [
			"The ancient blood pact. Its shadow engulfs the city.",
			"When all relics gather, the hidden truth awakens.",
			"Reverberation, the avatar of destiny. Where does this tragedy end?",
			"Liberation, or another bondage? The time of choice approaches."
		],
		"japanese": [
			"古き血の誓約、その影が都市を覆った。",
			"全ての遺物が集う時、隠された真実が目覚める。",
			"宿命の化身、リバーブレーション。その悲劇の果てはどこにあるのか。",
			"解放か、それとも新たな束縛か。選択の時が迫る。"
		],
		"chinese": [
			"古老的血之契约，其阴影笼罩了城市。",
			"所有遗物汇聚之时，隐藏的真相便会觉醒。",
			"命运的化身，回响。这场悲剧的终点何在？",
			"是解放，还是另一重束缚？选择的时刻即将来临。"
		],
		"french": [
			"L'ancien pacte de sang. Son ombre recouvre la ville.",
			"Quand toutes les reliques se rejoignent, la vérité cachée s'éveille.",
			"Réverbération, l'avatar du destin. Où se termine cette tragédie ?",
			"Libération, ou une autre servitude ? Le temps du choix approche."
		],
		"spanish": [
			"El antiguo pacto de sangre. Su sombra cubre la ciudad.",
			"Cuando todas las reliquias se reúnan, la verdad oculta despertará.",
			"Reverberación, el avatar del destino. ¿Dónde terminará esta tragedia?",
			"¿Liberación, o otra atadura? El momento de elegir se acerca."
		],
		"vietnamese": [
			"Lời thề huyết cổ xưa, bóng tối của nó bao trùm thành phố.",
			"Khoảnh khắc tất cả di vật hội tụ, sự thật ẩn giấu sẽ thức tỉnh.",
			"Reverberation, hóa thân của định mệnh. Bi kịch này sẽ kết thúc ở đâu?",
			"Giải thoát, hay một xiềng xích khác? Thời khắc lựa chọn đang đến gần."
		],
		"thai": [
			"พันธสัญญาโลหิตโบราณ เงาของมันปกคลุมเมือง",
			"เมื่อวัตถุโบราณทั้งหมดรวมตัวกัน ความจริงที่ซ่อนอยู่จะตื่นขึ้น",
			"เสียงสะท้อน อวตารแห่งโชคชะตา จุดจบของโศกนาฏกรรมนี้อยู่ที่ใด",
			"อิสรภาพ หรือพันธนาการอื่น? เวลาแห่งการเลือกใกล้เข้ามาแล้ว"
		],
		"hindi": [
			"प्राचीन रक्त संधि, उसकी छाया ने शहर को घेर लिया।",
			"जब सभी अवशेष एकत्रित होंगे, तो छिपा हुआ सत्य जागृत होगा।",
			"नियति का अवतार, प्रतिध्वनि। इस त्रासदी का अंत कहाँ है?",
			"मुक्ति, या एक और बंधन? चुनाव का समय निकट आ रहा है।"
		]
	}
} as const;
