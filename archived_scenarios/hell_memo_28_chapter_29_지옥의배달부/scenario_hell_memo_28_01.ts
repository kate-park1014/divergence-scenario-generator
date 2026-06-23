export const scenario_hell_memo_28_01 = {
	"scenario_id": "hell_memo_28_01",
	"order": 1,
	"act": "intro",
	"theme": "hell",
	"actors": {
		"ash": {
			"id": "mon_b225f5fa-59a1-47bb-b4c5-e73bf9e7192a",
			"name": {
				"korean": "애쉬",
				"english": "Ash",
				"japanese": "アッシュ",
				"chinese": "艾什",
				"french": "Ash",
				"spanish": "Ash",
				"vietnamese": "Ash",
				"thai": "แอช",
				"hindi": "ऐश"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d84413a8-9d6f-4a40-5d36-75e431fb9900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/78281fca-e4b8-45cc-68ef-7df3fef74200/public"
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
					"content": {
						"korean": "지옥의 입구. 용암 강변에 낡은 서류들이 끝없이 떠다녔다.",
						"english": "Entrance to Hell. Old documents floated endlessly along the lava river.",
						"japanese": "地獄の入り口。溶岩の川辺には古い書類が果てしなく漂っていた。",
						"chinese": "地狱入口。岩浆河畔，无数旧文件漂浮不定。",
						"french": "Entrée de l'Enfer. De vieux documents flottaient sans fin le long de la rivière de lave.",
						"spanish": "Entrada al Infierno. Viejos documentos flotaban sin cesar a lo largo del río de lava.",
						"vietnamese": "Lối vào Địa ngục. Dọc bờ sông dung nham, những tài liệu cũ kỹ trôi nổi không ngừng.",
						"thai": "ทางเข้านรก. เอกสารเก่าๆ ลอยวนอยู่ไม่รู้จบตามริมแม่น้ำลาวา",
						"hindi": "नरक का प्रवेश द्वार। लावा नदी के किनारे पुराने दस्तावेज़ अनन्त रूप से तैर रहे थे।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "여기가 지옥…? 서류 더미가 왜 이렇게 많아?",
						"english": "Is this Hell...? Why are there so many stacks of documents?",
						"japanese": "ここが地獄…？なんでこんなに書類の山があるんだ？",
						"chinese": "这里是地狱……？为什么有这么多文件堆？",
						"french": "C'est l'Enfer... ? Pourquoi y a-t-il autant de piles de documents ?",
						"spanish": "¿Esto es el Infierno...? ¿Por qué hay tantas pilas de documentos?",
						"vietnamese": "Đây là Địa ngục sao…? Sao lại có nhiều chồng tài liệu thế này?",
						"thai": "นี่คือนรก...? ทำไมเอกสารถึงเยอะขนาดนี้?",
						"hindi": "क्या यह नरक है...? कागज़ों के इतने ढेर क्यों हैं?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "불길 대신 종이 태우는 냄새가 나네.",
						"english": "Instead of flames, I smell burning paper.",
						"japanese": "炎の代わりに、紙が燃える匂いがする。",
						"chinese": "没有火焰，只有烧纸的味道。",
						"french": "Au lieu des flammes, je sens une odeur de papier brûlé.",
						"spanish": "En lugar de llamas, huelo a papel quemado.",
						"vietnamese": "Thay vì mùi lửa, tôi ngửi thấy mùi giấy cháy.",
						"thai": "แทนที่จะเป็นเปลวไฟ ฉันได้กลิ่นกระดาษไหม้",
						"hindi": "आग की लपटों की बजाय, मुझे कागज़ जलने की गंध आ रही है।"
					}
				},
				{
					"duration_ms": 500,
					"speaker": "ash",
					"spot": [
						3,
						1
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "내 서류… 내 존재 증명서…! 사라졌어!",
						"english": "My documents... my proof of existence...! They're gone!",
						"japanese": "俺の書類…俺の存在証明書…！消えた！",
						"chinese": "我的文件……我的存在证明……！消失了！",
						"french": "Mes documents... ma preuve d'existence...! Ils ont disparu !",
						"spanish": "¡Mis documentos... mi prueba de existencia...! ¡Han desaparecido!",
						"vietnamese": "Tài liệu của tôi… giấy chứng nhận sự tồn tại của tôi…! Biến mất rồi!",
						"thai": "เอกสารของฉัน... หลักฐานการมีตัวตนของฉัน...! หายไปแล้ว!",
						"hindi": "मेरे दस्तावेज़... मेरे अस्तित्व का प्रमाण...! वे गायब हो गए हैं!"
					},
					"speaker": "ash"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "저건… 영혼인가? 왜 저렇게 고통스러워해?",
						"english": "Is that... a soul? Why is it suffering so much?",
						"japanese": "あれは…魂か？なぜあんなに苦しんでいるんだ？",
						"chinese": "那是……灵魂吗？为什么会如此痛苦？",
						"french": "Est-ce... une âme ? Pourquoi souffre-t-elle autant ?",
						"spanish": "¿Es eso... un alma? ¿Por qué sufre tanto?",
						"vietnamese": "Đó là… một linh hồn sao? Tại sao nó lại đau khổ đến vậy?",
						"thai": "นั่น...วิญญาณหรือเปล่า? ทำไมถึงทรมานขนาดนั้น?",
						"hindi": "क्या वह... एक आत्मा है? वह इतनी पीड़ा में क्यों है?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "그들이… 그들이 내 기록을 지워버렸어!",
						"english": "They... they erased my records!",
						"japanese": "彼らが…彼らが俺の記録を消しやがった！",
						"chinese": "他们……他们删除了我的记录！",
						"french": "Ils... ils ont effacé mes dossiers !",
						"spanish": "¡Ellos... ellos borraron mis registros!",
						"vietnamese": "Bọn chúng… bọn chúng đã xóa hồ sơ của tôi!",
						"thai": "พวกเขา...พวกเขาลบประวัติของฉัน!",
						"hindi": "उन्होंने... उन्होंने मेरे रिकॉर्ड मिटा दिए!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "누가?",
						"english": "Who?",
						"japanese": "誰が？",
						"chinese": "谁？",
						"french": "Qui ?",
						"spanish": "¿Quién?",
						"vietnamese": "Ai?",
						"thai": "ใคร?",
						"hindi": "कौन?"
					},
					"speaker": "character_2"
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "대우주… 기록 보관국…! 내 존재를 부정해!",
						"english": "The Grand Cosmos… Archives…! They deny my existence!",
						"japanese": "大宇宙… 記録保管局…！私の存在を否定する！",
						"chinese": "大宇宙……记录保管局……！否定我的存在！",
						"french": "Le Grand Cosmos… Les Archives… ! Ils nient mon existence !",
						"spanish": "El Gran Cosmos… Los Archivos… ¡Niegan mi existencia!",
						"vietnamese": "Đại Vũ Trụ… Cơ quan Lưu trữ…! Họ phủ nhận sự tồn tại của tôi!",
						"thai": "แกรนด์คอสมอส… หอจดหมายเหตุ…! พวกมันปฏิเสธการมีอยู่ของฉัน!",
						"hindi": "महा ब्रह्मांड… अभिलेखागार…! वे मेरे अस्तित्व को नकारते हैं!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "ash",
					"action": "enter",
					"spot": [
						3,
						1
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "다들 여기 갇혀 있어… 끝없는 심사…",
						"english": "Everyone's trapped here… endless review…",
						"japanese": "みんなここに閉じ込められてる… 終わりのない審査…",
						"chinese": "大家都困在这里……无尽的审查……",
						"french": "Tout le monde est piégé ici… une revue sans fin…",
						"spanish": "Todos estamos atrapados aquí… un examen interminable…",
						"vietnamese": "Mọi người đều bị mắc kẹt ở đây… đánh giá bất tận…",
						"thai": "ทุกคนติดอยู่ที่นี่… การตรวจสอบที่ไม่มีที่สิ้นสุด…",
						"hindi": "सब यहीं फंसे हैं… अंतहीन जाँच…"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "ash"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "왜 이러는 거야?",
						"english": "Why is this happening?",
						"japanese": "なぜこんなことに？",
						"chinese": "为什么会这样？",
						"french": "Pourquoi ça arrive ?",
						"spanish": "¿Por qué está pasando esto?",
						"vietnamese": "Tại sao lại thế này?",
						"thai": "ทำไมถึงเป็นแบบนี้?",
						"hindi": "ऐसा क्यों हो रहा है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "ash",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "서류가 없으니까… 다음 차원으로 갈 수 없어… 영원한 지연이야.",
						"english": "No papers… can't go to the next dimension… eternal delay.",
						"japanese": "書類がないから… 次の次元に行けない… 永遠の遅延だ。",
						"chinese": "没有文件……去不了下一个维度……永远的拖延。",
						"french": "Pas de papiers… impossible d'aller à la dimension suivante… un retard éternel.",
						"spanish": "Sin papeles… no puedo ir a la siguiente dimensión… un retraso eterno.",
						"vietnamese": "Không có giấy tờ… không thể đi đến chiều không gian tiếp theo… trì hoãn vĩnh viễn.",
						"thai": "ไม่มีเอกสาร… ไปมิติถัดไปไม่ได้… ความล่าช้าชั่วนิรันดร์",
						"hindi": "कागज़ नहीं हैं… अगले आयाम में नहीं जा सकता… अनंत देरी है।"
					}
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "이건 너무 비인간적이야.",
						"english": "This is inhuman.",
						"japanese": "これはあまりにも非人道的だ。",
						"chinese": "这太不人道了。",
						"french": "C'est inhumain.",
						"spanish": "Esto es inhumano.",
						"vietnamese": "Điều này thật vô nhân đạo.",
						"thai": "นี่มันไร้มนุษยธรรมเกินไป",
						"hindi": "यह अमानवीय है।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "ash",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "어떤 날은 시간이 이상하게 흘러… 어제였는데 벌써 한 달 전 같고…",
						"english": "Some days time flows strangely… felt like yesterday, but it's already a month ago…",
						"japanese": "ある日は時間が奇妙に流れる… 昨日だと思ったのに、もう一ヶ月前みたいで…",
						"chinese": "有些日子时间过得很奇怪……感觉是昨天，但其实已经是一个月前了……",
						"french": "Certains jours, le temps s'écoule étrangement… on dirait hier, mais c'est déjà il y a un mois…",
						"spanish": "Algunos días el tiempo fluye extrañamente… parecía ayer, pero ya fue hace un mes…",
						"vietnamese": "Có những ngày thời gian trôi thật lạ… cứ ngỡ là hôm qua, nhưng đã là một tháng trước rồi…",
						"thai": "บางวันเวลาก็ไหลแปลกๆ… เหมือนเมื่อวาน แต่ก็ผ่านไปแล้วเดือนหนึ่ง…",
						"hindi": "कुछ दिनों में समय अजीब तरह से बहता है… कल जैसा लग रहा था, पर एक महीना हो गया…"
					}
				},
				{
					"content": {
						"korean": "시간이 뒤틀려?",
						"english": "Is time distorted?",
						"japanese": "時間が歪んでる？",
						"chinese": "时间扭曲了？",
						"french": "Le temps est-il distordu ?",
						"spanish": "¿El tiempo está distorsionado?",
						"vietnamese": "Thời gian bị bóp méo sao?",
						"thai": "เวลามันบิดเบือนเหรอ?",
						"hindi": "क्या समय विकृत है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "ash",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "모든 게 뒤죽박죽이야… 여기서는… 모든 게…",
						"english": "Everything's a mess… in here… everything…",
						"japanese": "全てがめちゃくちゃだ… ここでは… 全てが…",
						"chinese": "一切都乱七八糟的……在这里……一切都……",
						"french": "Tout est sens dessus dessous… ici… tout…",
						"spanish": "Todo es un desorden… aquí… todo…",
						"vietnamese": "Mọi thứ đều lộn xộn… ở đây… mọi thứ…",
						"thai": "ทุกอย่างมั่วไปหมด… ที่นี่… ทุกอย่าง…",
						"hindi": "सब कुछ गड़बड़ है… यहाँ… सब कुछ…"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "ash",
					"action": "enter",
					"spot": [
						3,
						1
					],
					"type": "direction"
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "이 지옥은 서류라는 감옥이야! 영혼을 가둬!",
						"english": "This hell is a prison of paperwork! It traps souls!",
						"japanese": "この地獄は書類という名の監獄だ！魂を閉じ込める！",
						"chinese": "这地狱是文书的牢笼！囚禁灵魂！",
						"french": "Cet enfer est une prison de paperasse ! Ça emprisonne les âmes !",
						"spanish": "¡Este infierno es una prisión de papeleo! ¡Atrapa almas!",
						"vietnamese": "Địa ngục này là một nhà tù giấy tờ! Nó giam cầm linh hồn!",
						"thai": "นรกนี่คือคุกเอกสาร! มันกักขังวิญญาณ!",
						"hindi": "यह नर्क कागज़ का कारागार है! आत्माओं को कैद करता है!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "누가 이런 시스템을 만든 건데?",
						"english": "Who created this system?",
						"japanese": "「こんなシステム、誰が作ったんだ？」",
						"chinese": "是谁创造了这套系统？",
						"french": "Qui a créé ce système ?",
						"spanish": "¿Quién creó este sistema?",
						"vietnamese": "Ai đã tạo ra hệ thống này?",
						"thai": "ใครสร้างระบบนี้ขึ้นมา?",
						"hindi": "यह सिस्टम किसने बनाया?"
					}
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "위에서… 알 수 없는 명령들이 내려와… 아무도 이해 못 해. 그저 따라야 해.",
						"english": "From above... unknown commands descend... no one understands. We just have to obey.",
						"japanese": "「上から…理解不能な命令が下りてくる…誰も理解できない。ただ従うしかない。」",
						"chinese": "上头…会下达一些莫名其妙的命令…没人能理解。我们只能服从。",
						"french": "D'en haut... des ordres inconnus descendent... personne ne comprend. Nous devons juste obéir.",
						"spanish": "De arriba... llegan órdenes incomprensibles... nadie entiende. Solo debemos obedecer.",
						"vietnamese": "Từ trên... những mệnh lệnh không rõ ràng giáng xuống... không ai hiểu. Chỉ có thể tuân theo.",
						"thai": "จากเบื้องบน... คำสั่งที่ไม่รู้เรื่องก็ลงมา... ไม่มีใครเข้าใจ. แค่ต้องทำตาม.",
						"hindi": "ऊपर से... अज्ञात आदेश आते हैं... कोई नहीं समझता। हमें बस मानना पड़ता है।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "비합리적인 명령을?",
						"english": "Irrational commands?",
						"japanese": "「不合理な命令を？」",
						"chinese": "不合理的命令？",
						"french": "Des ordres irrationnels ?",
						"spanish": "¿Órdenes irracionales?",
						"vietnamese": "Mệnh lệnh phi lý?",
						"thai": "คำสั่งที่ไร้เหตุผล?",
						"hindi": "अतार्किक आदेश?"
					}
				},
				{
					"content": {
						"korean": "비합리적이야! 그들은 영혼을 숫자와 서류로만 봐!",
						"english": "It's irrational! They see souls only as numbers and documents!",
						"japanese": "「不合理だ！彼らは魂を数字と書類でしか見ていない！」",
						"chinese": "太不合理了！他们只把灵魂当成数字和文件！",
						"french": "C'est irrationnel ! Ils ne voient les âmes que comme des chiffres et des dossiers !",
						"spanish": "¡Es irracional! ¡Solo ven las almas como números y papeleo!",
						"vietnamese": "Thật phi lý! Họ chỉ xem linh hồn như những con số và giấy tờ thôi!",
						"thai": "มันไร้เหตุผลสิ้นดี! พวกเขาเห็นวิญญาณเป็นแค่ตัวเลขกับเอกสาร!",
						"hindi": "यह अतार्किक है! वे आत्माओं को केवल संख्याओं और कागजों के रूप में देखते हैं!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "ash"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "ash",
					"spot": [
						3,
						1
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "메모… 그 배달부… 그도 이 지옥의 희생양이야!",
						"english": "Note... that deliveryman... he's also a victim of this hell!",
						"japanese": "「メモ…あの配達人…彼もこの地獄の犠牲者だ！」",
						"chinese": "备忘…那个送货员…他也是这地狱的牺牲品！",
						"french": "Note... ce livreur... lui aussi est une victime de cet enfer !",
						"spanish": "Nota... ese repartidor... ¡él también es una víctima de este infierno!",
						"vietnamese": "Ghi chú... người giao hàng đó... anh ta cũng là nạn nhân của địa ngục này!",
						"thai": "บันทึก... พนักงานส่งของคนนั้น... เขาก็เป็นเหยื่อของนรกนี้เหมือนกัน!",
						"hindi": "नोट... वह डिलीवरी वाला... वह भी इस नर्क का शिकार है!"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "ash"
				},
				{
					"content": {
						"korean": "메모? 사라진 배달부?",
						"english": "Note? The missing deliveryman?",
						"japanese": "「メモ？消えた配達人？」",
						"chinese": "备忘？失踪的送货员？",
						"french": "Note ? Le livreur disparu ?",
						"spanish": "¿Nota? ¿El repartidor desaparecido?",
						"vietnamese": "Ghi chú? Người giao hàng biến mất?",
						"thai": "บันทึก? พนักงานส่งของที่หายไป?",
						"hindi": "नोट? लापता डिलीवरी वाला?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "소포를 배달하다가… 사라졌어… 뭔가 중요한 걸 봤을 거야.",
						"english": "While delivering a package... he disappeared... he must have seen something important.",
						"japanese": "「小包を配達中に…消えたんだ…何か重要なものを見たに違いない。」",
						"chinese": "在派送包裹时…他失踪了…他一定看到了什么重要的东西。",
						"french": "En livrant un colis... il a disparu... Il a dû voir quelque chose d'important.",
						"spanish": "Mientras entregaba un paquete... desapareció... Debió ver algo importante.",
						"vietnamese": "Khi đang giao một gói hàng... anh ta biến mất... Chắc hẳn đã thấy điều gì đó quan trọng.",
						"thai": "ตอนกำลังส่งพัสดุ... เขาก็หายไป... ต้องเห็นอะไรสำคัญเข้าแน่ๆ",
						"hindi": "एक पार्सल पहुँचाते समय... वह गायब हो गया... उसने कुछ महत्वपूर्ण देखा होगा।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "ash"
				},
				{
					"content": {
						"korean": "중요한 소포?",
						"english": "An important package?",
						"japanese": "「重要な小包？」",
						"chinese": "重要的包裹？",
						"french": "Un colis important ?",
						"spanish": "¿Un paquete importante?",
						"vietnamese": "Gói hàng quan trọng?",
						"thai": "พัสดุสำคัญ?",
						"hindi": "महत्वपूर्ण पार्सल?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_1"
				},
				{
					"content": {
						"korean": "몰라… 하지만 모두가 그걸 노리고 있어… 지옥 깊은 곳까지…",
						"english": "I don't know... but everyone is after it... even deep into hell...",
						"japanese": "「分からない…でもみんながそれを狙っている…地獄の底まで…」",
						"chinese": "不知道…但所有人都盯着它…甚至在地狱深处…",
						"french": "Je ne sais pas... mais tout le monde le convoite... même au plus profond de l'enfer...",
						"spanish": "No lo sé... pero todos lo buscan... incluso en lo más profundo del infierno...",
						"vietnamese": "Không biết... nhưng tất cả mọi người đều muốn nó... ngay cả sâu trong địa ngục...",
						"thai": "ไม่รู้... แต่ทุกคนตามหามัน... แม้แต่ก้นบึ้งของนรก...",
						"hindi": "मुझे नहीं पता... लेकिन हर कोई उसे ढूंढ रहा है... नर्क की गहराइयों तक..."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "ash"
				},
				{
					"content": {
						"korean": "우리가 찾아야 해.",
						"english": "We have to find it.",
						"japanese": "「私たちが探さなきゃ。」",
						"chinese": "我们必须找到它。",
						"french": "Nous devons le trouver.",
						"spanish": "Tenemos que encontrarlo.",
						"vietnamese": "Chúng ta phải tìm nó.",
						"thai": "เราต้องหามันให้เจอ.",
						"hindi": "हमें उसे ढूंढना होगा।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "감히 여기까지 기어들어 왔군. 어리석은 영혼들.",
						"english": "So you dared to crawl in here, foolish souls.",
						"japanese": "よくもここまで這い上がってきたな、愚かな魂め。",
						"chinese": "竟敢爬到这里来，愚蠢的灵魂们。",
						"french": "Vous avez osé vous traîner jusqu'ici, âmes insensées.",
						"spanish": "Así que osasteis arrastraros hasta aquí, almas necias.",
						"vietnamese": "Dám bò đến tận đây, những linh hồn ngu xuẩn.",
						"thai": "กล้าดียังไงถึงคลานมาถึงที่นี่ได้นะ พวกวิญญาณโง่เขลา.",
						"hindi": "हिम्मत हुई यहाँ तक रेंग आने की, मूर्ख आत्माओं।"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "네가 '메모'를 없앤 배후인가?",
						"english": "Are you behind 'Memo's' disappearance?",
						"japanese": "お前が「メモ」を消した張本人か？",
						"chinese": "你就是让‘备忘录’消失的幕后黑手吗？",
						"french": "C'est toi qui es derrière la disparition de 'Memo' ?",
						"spanish": "¿Eres tú el que está detrás de la desaparición de 'Memo'?",
						"vietnamese": "Ngươi là kẻ đứng sau việc 'Memo' biến mất sao?",
						"thai": "แกคือเบื้องหลังที่ทำให้ 'เมโม' หายไปงั้นรึ?",
						"hindi": "क्या तुम ही 'मेमो' को मिटाने के पीछे हो?"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "사라진 배달부? 그런 하찮은 것에 신경 쓸 여유는 없다. 네놈들이나 신경 써라.",
						"english": "A missing messenger? I have no time for such trivialities. Mind your own business.",
						"japanese": "消えた配達人？そんな取るに足らないものに構っている暇はない。てめえらの心配でもしてろ。",
						"chinese": "消失的信使？我没空管那种鸡毛蒜皮的事。管好你们自己吧。",
						"french": "Un messager disparu ? Je n'ai pas de temps pour de telles futilités. Occupez-vous de vos affaires.",
						"spanish": "¿Un mensajero desaparecido? No tengo tiempo para tales nimiedades. Ocupaos de lo vuestro.",
						"vietnamese": "Người đưa tin biến mất? Ta không có thời gian bận tâm đến những chuyện vặt vãnh đó. Tự lo cho bản thân mình đi.",
						"thai": "คนส่งสารหายตัวไป? ข้าไม่มีเวลามาสนใจเรื่องเล็กน้อยพวกนั้นหรอก ไปสนใจเรื่องของพวกเจ้าเองเถอะ.",
						"hindi": "एक गायब दूत? मेरे पास ऐसी तुच्छ बातों के लिए समय नहीं है। अपनी चिंता करो।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "비켜!",
						"english": "Get out of my way!",
						"japanese": "どけ！",
						"chinese": "让开！",
						"french": "Pousse-toi !",
						"spanish": "¡Quítate de en medio!",
						"vietnamese": "Tránh ra!",
						"thai": "หลีกไป!",
						"hindi": "हटो!"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "고작 이 정도인가? 아직 지옥의 맛도 보지 못했군.",
						"english": "Is this all you've got? You haven't even tasted hell yet.",
						"japanese": "せいぜいこの程度か？まだ地獄の味も知らぬようだな。",
						"chinese": "就这点本事吗？你们还没尝过地狱的滋味呢。",
						"french": "C'est tout ce que vous avez ? Vous n'avez même pas encore goûté à l'enfer.",
						"spanish": "¿Es solo esto? Aún no habéis probado el sabor del infierno.",
						"vietnamese": "Chỉ có thế thôi sao? Các ngươi còn chưa nếm mùi địa ngục đâu.",
						"thai": "ได้แค่นี้เองรึ? พวกแกยังไม่เคยลิ้มรสของนรกเลยด้วยซ้ำ.",
						"hindi": "बस इतना ही? तुमने अभी तक नरक का स्वाद चखा भी नहीं है।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…다시 돌아온다. 반드시.",
						"english": "...I'll be back. Definitely.",
						"japanese": "…また戻ってくる。必ず。",
						"chinese": "…我会再回来。一定。",
						"french": "...Je reviendrai. Sûrement.",
						"spanish": "...Volveré. Sin falta.",
						"vietnamese": "...Ta sẽ quay lại. Nhất định.",
						"thai": "...ข้าจะกลับมา. อย่างแน่นอน.",
						"hindi": "...मैं वापस आऊंगा। निश्चित रूप से।"
					},
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "네놈들이 뭘 안다고… 고작 하찮은 시스템의 일부일 뿐… 진실은… 더 깊이 잠들어 있다…",
						"english": "What do you fools know… You're just a part of a trivial system… The truth… lies buried deeper…",
						"japanese": "お前たちに何がわかる… 所詮、取るに足らないシステムの一部に過ぎぬ… 真実は… もっと深く眠っている…",
						"chinese": "你们这些家伙知道什么… 不过是微不足道的系统的一部分罢了… 真相… 沉睡得更深…",
						"french": "Que savez-vous, imbéciles… Vous n'êtes qu'une partie d'un système insignifiant… La vérité… dort bien plus profondément…",
						"spanish": "¿Qué sabéis vosotros, necios…? Sois solo una parte de un sistema trivial… La verdad… yace dormida más profundamente…",
						"vietnamese": "Các ngươi biết gì chứ… Chỉ là một phần của hệ thống nhỏ bé thôi… Sự thật… vẫn còn ngủ sâu hơn nhiều…",
						"thai": "พวกแกจะรู้อะไร… ก็แค่ส่วนหนึ่งของระบบเล็ก ๆ เท่านั้น… ความจริง… มันหลับใหลอยู่ลึกกว่านั้น…",
						"hindi": "तुम लोग क्या जानते हो… सिर्फ एक तुच्छ प्रणाली का हिस्सा भर हो… सच… और गहरा सोया हुआ है…"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "고작 일부라고…?",
						"english": "Just a part…?",
						"japanese": "たかが一部だと…？",
						"chinese": "仅仅是一部分…？",
						"french": "Juste une partie…?",
						"spanish": "¿Solo una parte…?",
						"vietnamese": "Chỉ là một phần thôi sao…?",
						"thai": "แค่ส่วนหนึ่งงั้นรึ…?",
						"hindi": "सिर्फ एक हिस्सा…?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "중간 보스의 쓰러짐. 그러나 그의 마지막 말은 더 큰 그림자를 드리웠다. '메모'의 흔적은 더 깊은 곳에 있었다.",
						"english": "The mid-boss falls. But his last words cast a larger shadow. Traces of 'Memo' lay deeper still.",
						"japanese": "中ボスは倒れた。しかし、彼の最期の言葉は、より大きな影を落とした。「メモ」の痕跡は、さらに深い場所に隠されていたのだ。",
						"chinese": "中级头目倒下了。然而他最后的遗言投下了更大的阴影。‘备忘录’的痕迹存在于更深之处。",
						"french": "Le boss intermédiaire tombe. Mais ses derniers mots jettent une ombre plus grande. Les traces de 'Memo' se trouvaient encore plus profondément.",
						"spanish": "El jefe intermedio cae. Pero sus últimas palabras arrojaron una sombra mayor. Los rastros de 'Memo' se encontraban aún más profundos.",
						"vietnamese": "Trùm phụ ngã xuống. Nhưng những lời cuối cùng của hắn lại gieo một cái bóng lớn hơn. Dấu vết của 'Memo' nằm ở nơi sâu hơn nữa.",
						"thai": "หัวหน้ากลางพ่ายแพ้. แต่คำพูดสุดท้ายของเขาได้ทิ้งเงาที่ใหญ่กว่าไว้. ร่องรอยของ 'เมโม' อยู่ลึกกว่านั้น.",
						"hindi": "मध्य-बॉस गिरता है। लेकिन उसके आखिरी शब्दों ने एक बड़ी छाया डाली। 'मेमो' के निशान और गहराई में थे।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"지옥의 문. 이곳은 불길이 아닌, 서류 지옥이었다.",
			"영원히 처리되지 않는 영혼들, 끝없는 지연의 절규.",
			"사라진 배달부 '메모'. 그가 짊어진 소포의 진실은?",
			"거대한 관료주의의 말단, 모든 것이 뒤틀리기 시작한다."
		],
		"english": [
			"The Gates of Hell. This wasn't a hell of fire, but a hell of paperwork.",
			"Souls eternally unprocessed, screams of endless delay.",
			"The vanished deliveryman 'Memo'. What truth lay within the package he carried?",
			"At the lowest rung of a colossal bureaucracy, everything begins to twist."
		],
		"japanese": [
			"地獄の門。ここは炎ではなく、書類の地獄だった。",
			"永遠に処理されない魂たち、終わりのない遅延の叫び。",
			"消えた配達員「メモ」。彼が背負った小包の真実とは？",
			"巨大な官僚主義の末端で、すべてが歪み始める。"
		],
		"chinese": [
			"地狱之门。这里不是烈火地狱，而是文书地狱。",
			"永远无法处理的灵魂，无尽拖延的哀嚎。",
			"消失的快递员“备忘”。他肩负的包裹中藏着什么真相？",
			"庞大官僚体系的末端，一切开始扭曲。"
		],
		"french": [
			"Les Portes de l'Enfer. Ce n'était pas un enfer de flammes, mais un enfer de paperasse.",
			"Des âmes éternellement non traitées, des cris de retard sans fin.",
			"Le livreur disparu, 'Memo'. Quelle vérité cachait le colis qu'il portait ?",
			"Au plus bas échelon d'une bureaucratie colossale, tout commence à se tordre."
		],
		"spanish": [
			"Las Puertas del Infierno. Esto no era un infierno de fuego, sino un infierno de papeleo.",
			"Almas eternamente sin procesar, gritos de retraso interminable.",
			"El repartidor desaparecido, 'Memo'. ¿Qué verdad contenía el paquete que llevaba?",
			"En el escalón más bajo de una burocracia colosal, todo comienza a distorsionarse."
		],
		"vietnamese": [
			"Cánh cổng Địa ngục. Đây không phải địa ngục lửa, mà là địa ngục giấy tờ.",
			"Những linh hồn mãi mãi chưa được xử lý, những tiếng kêu than của sự trì hoãn vô tận.",
			"Người đưa thư biến mất 'Memo'. Sự thật nào nằm trong gói bưu kiện anh ta mang theo?",
			"Ở tận cùng của bộ máy quan liêu khổng lồ, mọi thứ bắt đầu biến dạng."
		],
		"thai": [
			"ประตูสู่นรก ที่นี่ไม่ใช่นรกแห่งไฟ แต่เป็นนรกแห่งเอกสาร",
			"วิญญาณที่รอการดำเนินการตลอดกาล เสียงกรีดร้องแห่งความล่าช้าอันไม่มีที่สิ้นสุด",
			"บุรุษไปรษณีย์ผู้หายสาบสูญ 'เมโม' ความจริงในพัสดุที่เขาแบกรับคืออะไร?",
			"ณ ปลายสุดของระบบราชการอันใหญ่โต ทุกสิ่งเริ่มบิดเบี้ยว"
		],
		"hindi": [
			"नरक का द्वार। यह आग का नहीं, बल्कि कागजी कार्यवाही का नरक था।",
			"अनन्त काल तक अप्रसंस्कृत आत्माएँ, अंतहीन देरी की चीखें।",
			"गायब हुआ डिलीवरीमैन 'मेमो'। उसके द्वारा ले जाए गए पार्सल में क्या सच्चाई थी?",
			"एक विशाल नौकरशाही के सबसे निचले पायदान पर, सब कुछ विकृत होने लगता है।"
		]
	}
} as const;
