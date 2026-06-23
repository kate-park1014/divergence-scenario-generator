export const scenario_modern_donquarters_66_01 = {
	"scenario_id": "modern_donquarters_66_01",
	"order": 1,
	"act": "intro",
	"theme": "modern",
	"actors": {
		"ren": {
			"id": "mon_ff398cb9-43e1-44ff-acbe-3d45a3bc6997",
			"name": {
				"korean": "렌",
				"english": "Ren",
				"japanese": "レン",
				"chinese": "仁",
				"french": "Ren",
				"spanish": "Ren",
				"vietnamese": "Ren",
				"thai": "เร็น",
				"hindi": "रेन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/147a5f29-8f8d-4531-cc9b-f86c9f45f000/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d1d88aa7-877f-43e6-919b-ee77e6c58e00/public"
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
						"korean": "어둡고 습한 도시 뒷골목, 과거의 영광을 잃은 채 낡은 기계들이 늘어선 곳.",
						"english": "A dark, damp city alley, where old machines lined up, having lost their past glory.",
						"japanese": "暗く湿った路地裏、かつての栄光を失い、古い機械が立ち並ぶ場所。",
						"chinese": "昏暗潮湿的城市后巷，破旧的机器排列着，失去了往日的荣光。",
						"french": "Une ruelle sombre et humide de la ville, où de vieilles machines s'alignaient, ayant perdu leur gloire passée.",
						"spanish": "Un callejón oscuro y húmedo de la ciudad, donde máquinas viejas se alineaban, habiendo perdido su gloria pasada.",
						"vietnamese": "Một con hẻm tối tăm, ẩm ướt của thành phố, nơi những cỗ máy cũ kỹ xếp hàng, đã mất đi vinh quang xưa.",
						"thai": "ตรอกมืดและชื้นในเมือง ที่ซึ่งเครื่องจักรเก่าๆ เรียงราย สูญสิ้นความรุ่งโรจน์ในอดีต.",
						"hindi": "शहर की एक अँधेरी और नम गली, जहाँ पुरानी मशीनें अपनी पिछली शान खोकर कतार में लगी थीं।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						1
					],
					"type": "direction",
					"action": "enter",
					"speaker": "ren"
				},
				{
					"speaker": "ren",
					"type": "speech",
					"content": {
						"korean": "젠장, 내 돈! 이 망할 자판기! 돈만 먹고 뱉지 않아!",
						"english": "Damn it, my money! This cursed vending machine! It just eats my coins and won't dispense anything!",
						"japanese": "くそっ、俺の金！このクソ自販機！金だけ食って何も出さないぞ！",
						"chinese": "该死，我的钱！这该死的自动贩卖机！只吞钱不吐东西！",
						"french": "Merde, mon argent ! Ce maudit distributeur ! Il ne fait qu'avaler mes pièces sans rien donner !",
						"spanish": "¡Maldita sea, mi dinero! ¡Esta maldita máquina expendedora! ¡Solo traga mi dinero y no me da nada!",
						"vietnamese": "Chết tiệt, tiền của tôi! Cái máy bán hàng khốn kiếp này! Nó chỉ nuốt tiền mà không nhả ra gì cả!",
						"thai": "ให้ตายสิ เงินฉัน! ไอ้ตู้เวรนี่! มันเอาแต่กินเหรียญฉันแล้วไม่จ่ายของ!",
						"hindi": "धिक्कार है, मेरा पैसा! यह कमीनी वेंडिंग मशीन! सिर्फ पैसे खाती है और कुछ नहीं देती!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무슨 일이야, 렌?",
						"english": "What's wrong, Ren?",
						"japanese": "どうしたんだ、レン？",
						"chinese": "怎么了，仁？",
						"french": "Qu'est-ce qui ne va pas, Ren ?",
						"spanish": "¿Qué pasa, Ren?",
						"vietnamese": "Có chuyện gì vậy, Ren?",
						"thai": "เกิดอะไรขึ้นเหรอ เร็น?",
						"hindi": "क्या हुआ, रेन?"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "내 팔 좀 봐... 이게 뭐야? 붉은 숫자들이 새겨지고 있어!",
						"english": "Look at my arm... What is this? Red numbers are being etched!",
						"japanese": "俺の腕を見てくれ… これは何だ？赤い数字が刻まれている！",
						"chinese": "看看我的手臂… 这是什么？红色的数字正在刻上去！",
						"french": "Regarde mon bras... Qu'est-ce que c'est ? Des chiffres rouges sont en train d'être gravés !",
						"spanish": "Mira mi brazo... ¿Qué es esto? ¡Números rojos están grabándose!",
						"vietnamese": "Nhìn cánh tay tôi này... Đây là gì vậy? Những con số màu đỏ đang được khắc lên!",
						"thai": "ดูแขนฉันสิ... นี่มันอะไร? ตัวเลขสีแดงกำลังถูกสลัก!",
						"hindi": "मेरे हाथ को देखो... यह क्या है? लाल संख्याएँ खुदी जा रही हैं!"
					},
					"type": "speech",
					"speaker": "ren"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "렌의 팔에 붉은 숫자들이 흐릿하게 떠올랐다. 알 수 없는 카운트다운이었다.",
						"english": "Red numbers faintly appeared on Ren's arm. It was an unknown countdown.",
						"japanese": "レン の腕に赤い数字がぼんやりと浮かび上がった。それは未知のカウントダウンだった。",
						"chinese": "仁的手臂上隐约浮现出红色的数字。那是一个未知的倒计时。",
						"french": "Des chiffres rouges apparurent faiblement sur le bras de Ren. C'était un compte à rebours inconnu.",
						"spanish": "Números rojos aparecieron débilmente en el brazo de Ren. Era una cuenta regresiva desconocida.",
						"vietnamese": "Những con số màu đỏ mờ ảo hiện lên trên cánh tay của Ren. Đó là một cuộc đếm ngược không rõ.",
						"thai": "ตัวเลขสีแดงปรากฏขึ้นจางๆ บนแขนของเร็น มันคือการนับถอยหลังที่ไม่รู้จัก.",
						"hindi": "रेन की बांह पर लाल संख्याएँ धुँधली सी उभर आईं। यह एक अज्ञात उलटी गिनती थी।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "저게 대체... 무슨 의미지?",
						"english": "What... does that even mean?",
						"japanese": "あれは一体…どういう意味だ？",
						"chinese": "那到底…是什么意思？",
						"french": "Qu'est-ce que ça veut dire, au juste ?",
						"spanish": "¿Qué... qué significa eso?",
						"vietnamese": "Rốt cuộc... cái đó nghĩa là gì?",
						"thai": "นั่นมัน...หมายความว่าอะไรกันแน่?",
						"hindi": "आखिर... उसका क्या मतलब है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "크흐흡... 꺽꺽...",
						"english": "Khhh... *choke*...",
						"japanese": "クフフフ…ゴホッゴホッ…",
						"chinese": "咳咳... 嗝嗝...",
						"french": "Hkhkh... *tousse*...",
						"spanish": "Khhh... *ahogo*...",
						"vietnamese": "Khừ khừ... *nghẹn*...",
						"thai": "คึคึ... แค่กๆ...",
						"hindi": "ख्ह्ह... *घुटने लगा*..."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "기분 나쁜 웃음소리 같아. 마치 비웃는 것 같아.",
						"english": "It sounds like an eerie laugh. Like it's mocking me.",
						"japanese": "気味の悪い笑い声だ。まるで嘲笑っているかのようだ。",
						"chinese": "像是不祥的笑声。仿佛在嘲笑我。",
						"french": "C'est comme un rire sinistre. On dirait qu'il se moque de moi.",
						"spanish": "Parece una risa desagradable. Como si se estuviera burlando.",
						"vietnamese": "Nghe như tiếng cười đáng sợ. Cứ như nó đang chế nhạo mình vậy.",
						"thai": "เหมือนเสียงหัวเราะที่น่าขนลุก ราวกับว่ามันกำลังเยาะเย้ยฉันอยู่",
						"hindi": "यह एक भयावह हंसी जैसी लगती है। जैसे कोई मेरा मजाक उड़ा रहा हो।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						1
					],
					"action": "enter",
					"speaker": "ren"
				},
				{
					"speaker": "ren",
					"type": "speech",
					"content": {
						"korean": "점점 숫자가 줄어들고 있어... 이게 대체 나한테 무슨 짓을 하려는 거지?",
						"english": "The numbers are shrinking... What is this thing trying to do to me?",
						"japanese": "どんどん数字が減っていく…一体、これは私に何をしようとしているんだ？",
						"chinese": "数字越来越少… 这到底想对我做什么？",
						"french": "Les chiffres diminuent... Qu'est-ce que cette chose essaie de me faire ?",
						"spanish": "Los números están disminuyendo... ¿Qué me está haciendo esto?",
						"vietnamese": "Các con số đang giảm dần... Rốt cuộc nó muốn làm gì mình đây?",
						"thai": "ตัวเลขกำลังลดลงเรื่อยๆ... นี่มันคิดจะทำอะไรกับฉันกันแน่?",
						"hindi": "संख्याएँ कम होती जा रही हैं... आखिर यह मेरे साथ क्या करने वाला है?"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "단순한 고장이나 해프닝이 아닌 것 같아.",
						"english": "This doesn't seem like a mere malfunction or an accident.",
						"japanese": "単なる故障やハプニングじゃないようだ。",
						"chinese": "这似乎不只是简单的故障或意外。",
						"french": "Ça ne ressemble pas à un simple dysfonctionnement ou à un incident.",
						"spanish": "Esto no parece un simple fallo o un accidente.",
						"vietnamese": "Có vẻ đây không phải là một sự cố hay tai nạn đơn thuần.",
						"thai": "นี่ดูไม่เหมือนแค่ความผิดปกติหรือเรื่องบังเอิญ",
						"hindi": "यह सिर्फ एक खराबी या हादसा नहीं लगता।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "낡은 자판기 발치에 녹슨 옛 동전이 떨어져 있었다. 희미한 문양이 새겨져 있었다.",
						"english": "A rusty old coin lay at the foot of the old vending machine. A faint pattern was etched into it.",
						"japanese": "古い自販機の足元に、錆びた古銭が落ちていた。かすかな文様が刻まれている。",
						"chinese": "一个生锈的旧硬币掉在旧自动售货机脚边。上面刻着模糊的图案。",
						"french": "Une vieille pièce rouillée gisait au pied du vieux distributeur automatique. Un motif indistinct y était gravé.",
						"spanish": "Una vieja moneda oxidada yacía a los pies de la máquina expendedora. Un tenue patrón estaba grabado en ella.",
						"vietnamese": "Một đồng xu cũ kỹ, gỉ sét nằm dưới chân máy bán hàng tự động cũ. Một hoa văn mờ nhạt được khắc trên đó.",
						"thai": "เหรียญเก่าขึ้นสนิมตกอยู่ที่เท้าของตู้หยอดเหรียญเก่า มีลวดลายเลือนลางสลักอยู่",
						"hindi": "एक पुरानी जंग लगी सिक्का पुरानी वेंडिंग मशीन के पैरों के पास पड़ा था। उस पर एक धुंधला पैटर्न खुदा हुआ था।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 문양... 왠지 섬뜩해.",
						"english": "This pattern... It's somehow eerie.",
						"japanese": "この文様…なんだか不気味だ。",
						"chinese": "这个图案… 总觉得有点阴森。",
						"french": "Ce motif... C'est étrangement sinistre.",
						"spanish": "Este patrón... es escalofriante de alguna manera.",
						"vietnamese": "Hoa văn này... sao mà ghê rợn.",
						"thai": "ลวดลายนี้...ทำไมมันน่าขนลุกจัง",
						"hindi": "यह पैटर्न... किसी तरह भयानक है।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "내 돈... 내 돈을 돌려줘!",
						"english": "My money... Give me my money back!",
						"japanese": "私の金…金を返せ！",
						"chinese": "我的钱… 把我的钱还给我！",
						"french": "Mon argent... Rendez-moi mon argent !",
						"spanish": "¡Mi dinero... Devuélveme mi dinero!",
						"vietnamese": "Tiền của tôi... Trả lại tiền cho tôi!",
						"thai": "เงินของฉัน... คืนเงินฉันมา!",
						"hindi": "मेरा पैसा... मेरा पैसा वापस करो!"
					},
					"emotion": "angry",
					"speaker": "ren",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "ren",
					"duration_ms": 500,
					"spot": [
						3,
						1
					],
					"type": "direction"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이제 며칠 남지 않았어! 이 숫자가 0이 되면 어떻게 되는 거야?",
						"english": "Only a few days left! What happens when this number hits zero?",
						"japanese": "もう残り数日しかない！この数字が0になったらどうなるんだ？",
						"chinese": "只剩下几天了！当这个数字变成0时会发生什么？",
						"french": "Il ne reste que quelques jours ! Que se passe-t-il quand ce nombre atteint zéro ?",
						"spanish": "¡Solo quedan unos días! ¿Qué pasará cuando este número llegue a cero?",
						"vietnamese": "Chỉ còn vài ngày nữa thôi! Chuyện gì sẽ xảy ra khi con số này về 0?",
						"thai": "เหลืออีกไม่กี่วันแล้ว! ถ้าตัวเลขนี้เป็นศูนย์จะเกิดอะไรขึ้น?",
						"hindi": "अब बस कुछ ही दिन बचे हैं! जब यह संख्या शून्य हो जाएगी तो क्या होगा?"
					},
					"type": "speech",
					"speaker": "ren"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "납부 기한... 설마, 이 문신이 돈을 갚으라는 건가?",
						"english": "Due date... No way, does this tattoo mean I have to pay money?",
						"japanese": "支払期限…まさか、このタトゥーは金を返せという意味なのか？",
						"chinese": "付款期限… 难道，这个纹身是让我还钱的意思吗？",
						"french": "Date limite de paiement... Non, ce tatouage ne signifie pas que je dois de l'argent, n'est-ce pas ?",
						"spanish": "¿Fecha de vencimiento... No me digas que este tatuaje significa que tengo que pagar dinero?",
						"vietnamese": "Hạn thanh toán... Chẳng lẽ, hình xăm này là bắt mình trả tiền sao?",
						"thai": "กำหนดชำระ... ไม่จริงน่า รอยสักนี้หมายถึงให้ฉันต้องจ่ายเงินเหรอ?",
						"hindi": "भुगतान की अंतिम तिथि... कहीं ऐसा तो नहीं कि यह टैटू पैसे चुकाने के लिए है?"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "납부? 내가 뭘 빚졌다고! 난 그저 음료수를 사려고 했을 뿐인데!",
						"english": "Pay? What do I owe?! I just wanted to buy a drink!",
						"japanese": "支払い？何の借金があるって言うんだ！ただ飲み物を買おうとしただけなのに！",
						"chinese": "付款？我欠了什么？！我只是想买杯饮料而已！",
						"french": "Payer ? Qu'est-ce que je dois ?! Je voulais juste acheter une boisson !",
						"spanish": "¿Pagar? ¡¿Qué debo?! ¡Solo quería comprar una bebida!",
						"vietnamese": "Trả tiền? Tôi nợ gì chứ?! Tôi chỉ muốn mua một thức uống thôi mà!",
						"thai": "จ่าย? ฉันเป็นหนี้อะไร?! ฉันแค่อยากซื้อเครื่องดื่ม!",
						"hindi": "भुगतान? मैं किसका कर्जदार हूँ?! मैं तो बस एक पेय खरीदना चाहता था!"
					},
					"type": "speech",
					"speaker": "ren"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 자판기는 단순한 고철이 아니야. 뭔가 꾸미고 있어.",
						"english": "This vending machine isn't just scrap metal. It's plotting something.",
						"japanese": "この自販機はただのガラクタじゃない。何か企んでいる。",
						"chinese": "这台自动贩卖机可不是废铁。它在密谋什么。",
						"french": "Ce distributeur n'est pas qu'un tas de ferraille. Il complote quelque chose.",
						"spanish": "Esta máquina expendedora no es solo chatarra. Está tramando algo.",
						"vietnamese": "Cái máy bán hàng tự động này không chỉ là đống sắt vụn. Nó đang âm mưu gì đó.",
						"thai": "ตู้ขายของอัตโนมัตินี่ไม่ใช่แค่เศษเหล็ก มันกำลังวางแผนอะไรบางอย่างอยู่",
						"hindi": "यह वेंडिंग मशीन सिर्फ कबाड़ नहीं है। यह कुछ रच रही है।"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						4,
						1
					],
					"duration_ms": 500,
					"speaker": "ren",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "ren",
					"emotion": "sad",
					"content": {
						"korean": "숨이 막혀! 시간이 나를 조여오고 있어!",
						"english": "I can't breathe! Time is closing in on me!",
						"japanese": "息が詰まる！時間が私を締め付けている！",
						"chinese": "我喘不过气来！时间正在逼近我！",
						"french": "Je suffoque ! Le temps me presse !",
						"spanish": "¡Me ahogo! ¡El tiempo me está acorralando!",
						"vietnamese": "Tôi ngạt thở rồi! Thời gian đang siết chặt tôi!",
						"thai": "ฉันหายใจไม่ออก! เวลากำลังคืบคลานเข้ามา!",
						"hindi": "मेरी साँसें घुट रही हैं! समय मुझे कस रहा है!"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "렌! 정신 차려! 아직 포기하지 마!",
						"english": "Ren! Snap out of it! Don't give up yet!",
						"japanese": "レン！しっかりしろ！まだ諦めるな！",
						"chinese": "莲！清醒过来！别放弃！",
						"french": "Ren ! Reprends-toi ! N'abandonne pas encore !",
						"spanish": "¡Ren! ¡Despierta! ¡No te rindas todavía!",
						"vietnamese": "Ren! Tỉnh lại đi! Đừng bỏ cuộc bây giờ!",
						"thai": "เรน! ตั้งสติหน่อย! อย่ายอมแพ้!",
						"hindi": "रेन! होश में आओ! अभी हार मत मानो!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "희미한 녹음과 함께, 자판기 안에서 낡은 기계음이 규칙적으로 울렸다. 모든 것이 이 끝을 향해 가고 있었다.",
						"english": "With a faint hum, an old mechanical whirring echoed regularly from inside the vending machine. Everything was leading to this end.",
						"japanese": "かすかな唸り声と共に、自販機の中から古びた機械音が定期的に響いた。すべてはこの終わりに向かっていた。",
						"chinese": "伴随着微弱的嗡嗡声，自动贩卖机内定期传来老旧的机械轰鸣声。一切都走向了这个结局。",
						"french": "Avec un léger bourdonnement, un vieux ronronnement mécanique résonnait régulièrement de l'intérieur du distributeur. Tout menait à cette fin.",
						"spanish": "Con un débil zumbido, un viejo zumbido mecánico resonaba regularmente desde el interior de la máquina expendedora. Todo conducía a este final.",
						"vietnamese": "Cùng với tiếng vo ve mờ nhạt, một tiếng rít cơ học cũ kỹ vang lên đều đặn từ bên trong máy bán hàng tự động. Mọi thứ đang dẫn đến kết thúc này.",
						"thai": "พร้อมกับเสียงหึ่งๆ แผ่วเบา เสียงกลไกเก่าแก่ดังขึ้นเป็นจังหวะจากภายในตู้ขายของอัตโนมัติ ทุกอย่างกำลังมุ่งหน้าสู่จุดจบนี้",
						"hindi": "एक हल्की गूँज के साथ, वेंडिंग मशीन के अंदर से एक पुरानी यांत्रिक घरघराहट नियमित रूप से गूँज रही थी। सब कुछ इसी अंत की ओर बढ़ रहा था।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "여긴 돌아갈 수 없어. 이 끔찍한 게임을 끝내야 해.",
						"english": "There's no turning back. I have to end this dreadful game.",
						"japanese": "もう後戻りはできない。この恐ろしいゲームを終わらせなければ。",
						"chinese": "没有回头路了。我必须结束这场可怕的游戏。",
						"french": "Il n'y a pas de retour en arrière. Je dois mettre fin à ce jeu effroyable.",
						"spanish": "No hay vuelta atrás. Tengo que terminar este espantoso juego.",
						"vietnamese": "Không thể quay lại được. Tôi phải kết thúc trò chơi kinh hoàng này.",
						"thai": "ไม่มีทางย้อนกลับไปได้แล้ว ฉันต้องจบเกมอันเลวร้ายนี้",
						"hindi": "कोई वापसी नहीं है। मुझे इस भयानक खेल को खत्म करना होगा।"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크크... 겨우 이 정도에 만족할 줄 아나? 진정한 빚은 이제부터 시작이다...",
						"english": "Heh heh... Do you think this is enough? The real debt begins now...",
						"japanese": "クク…たかがこれっぽっちで満足すると思うか？真の借金は今から始まるのだ…",
						"chinese": "呵呵……你以为这样就满足了吗？真正的债务现在才开始……",
						"french": "Heh heh... Penses-tu que c'est suffisant ? La vraie dette commence maintenant...",
						"spanish": "Je je... ¿Crees que esto es suficiente? La verdadera deuda comienza ahora...",
						"vietnamese": "Khà khà... Ngươi nghĩ như vậy là đủ sao? Món nợ thực sự giờ mới bắt đầu...",
						"thai": "ฮิฮิ... เจ้าคิดว่าแค่นี้ก็พอแล้วหรือ? หนี้ที่แท้จริงเพิ่งจะเริ่มต้นขึ้นต่างหาก...",
						"hindi": "हहह... क्या तुम्हें लगता है कि यह काफी है? असली कर्ज अब शुरू होता है..."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무슨 소리야? 모든 게 끝난 거 아니었어?",
						"english": "What's this? I thought it was over.",
						"japanese": "「何が起きてる？もう終わったんじゃなかったのか？」",
						"chinese": "“搞什么？不是都结束了吗？”",
						"french": "« Qu'est-ce qui se passe ? Tout n'était pas fini ? »",
						"spanish": "« ¿Qué está pasando? ¿No se había acabado ya todo? »",
						"vietnamese": "“Chuyện gì vậy? Chẳng phải mọi thứ đã kết thúc rồi sao?”",
						"thai": "“อะไรเนี่ย? ไม่ใช่ว่าทุกอย่างจบลงแล้วเหรอ?”",
						"hindi": "“यह क्या हो रहा है? क्या सब खत्म नहीं हो गया था?”"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "진짜 주인은 따로 있지. '빅 마우스 조'...",
						"english": "The real owner is someone else. 'Big Mouth Joe'...",
						"japanese": "「本当の持ち主は別にいる。『ビッグマウス・ジョー』…」",
						"chinese": "“真正的幕后主使另有其人。‘大嘴乔’…”",
						"french": "« Le vrai propriétaire est quelqu'un d'autre. 'Big Mouth Joe'... »",
						"spanish": "« El verdadero dueño es otro. 'Big Mouth Joe'... »",
						"vietnamese": "“Chủ nhân thật sự là một kẻ khác. 'Big Mouth Joe'...”",
						"thai": "“เจ้าของที่แท้จริงคือคนอื่น 'บิ๊กเมาธ์โจ'...”",
						"hindi": "“असली मालिक कोई और है। 'बिग माउथ जो'...”"
					}
				},
				{
					"content": {
						"korean": "빅 마우스 조...? 다음은 그건가.",
						"english": "Big Mouth Joe...? So that's next.",
						"japanese": "「ビッグマウス・ジョー…？次はそいつか。」",
						"chinese": "“大嘴乔…？下一个目标是他吗。”",
						"french": "« Big Mouth Joe... ? C'est le prochain ? »",
						"spanish": "« ¿Big Mouth Joe...? ¿Es el siguiente? »",
						"vietnamese": "“Big Mouth Joe...? Kẻ tiếp theo là hắn sao.”",
						"thai": "“บิ๊กเมาธ์โจ...? นั่นคือเป้าหมายต่อไปเหรอ?”",
						"hindi": "“बिग माउथ जो...? अब अगला वो है?”"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "쓰러진 자판기 너머, 낡은 카지노의 잔해가 어둠 속에서 거대한 입처럼 보였다.",
						"english": "Beyond the fallen vending machine, the remains of the old casino looked like a giant maw in the darkness.",
						"japanese": "「倒れた自動販売機の向こう、古いカジノの残骸が闇の中で巨大な口のように見えた。」",
						"chinese": "“倒塌的自动售货机后，旧赌场的残骸在黑暗中像一张巨口。”",
						"french": "« Au-delà du distributeur automatique renversé, les vestiges du vieux casino ressemblaient à une gueule béante dans l'obscurité. »",
						"spanish": "« Más allá de la máquina expendedora caída, los restos del viejo casino parecían una boca gigantesca en la oscuridad. »",
						"vietnamese": "“Phía sau máy bán hàng tự động bị đổ, tàn tích của sòng bạc cũ hiện ra như một cái miệng khổng lồ trong bóng tối.”",
						"thai": "“เลยตู้ขายของที่ล้มอยู่ ซากคาสิโนเก่าแก่ดูเหมือนปากขนาดมหึมาในความมืด”",
						"hindi": "“गिरी हुई वेंडिंग मशीन के परे, पुराने कैसीनो के अवशेष अंधेरे में एक विशाल मुँह की तरह दिख रहे थे।”"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이 모든 것의 시작은, 아직 끝나지 않았다.",
						"english": "The beginning of all this, it's not over yet.",
						"japanese": "「この全ての始まりは、まだ終わっていなかった。」",
						"chinese": "“这一切的开端，还远未结束。”",
						"french": "« Le début de tout cela n'est pas encore terminé. »",
						"spanish": "« El inicio de todo esto, aún no ha terminado. »",
						"vietnamese": "“Khởi đầu của tất cả những điều này, vẫn chưa kết thúc.”",
						"thai": "“จุดเริ่มต้นของทั้งหมดนี้ ยังไม่จบสิ้น”",
						"hindi": "“इन सबका आरंभ, अभी खत्म नहीं हुआ है।”"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "크흐흐... 어서 와라. 동전은 준비됐나?",
						"english": "Khehehe... Welcome. Got your coins ready?",
						"japanese": "クフフ…よく来たな。コインは用意できたか？",
						"chinese": "呵呵呵……欢迎。硬币准备好了吗？",
						"french": "Khehehe... Bienvenue. Vos pièces sont prêtes ?",
						"spanish": "Jejeje... Bienvenido. ¿Tienes tus monedas listas?",
						"vietnamese": "Khà khà... Chào mừng. Ngươi đã chuẩn bị xu chưa?",
						"thai": "คิกคิก... ยินดีต้อนรับ เหรียญพร้อมแล้วใช่ไหม?",
						"hindi": "खिहिहि... स्वागत है। सिक्के तैयार हैं?"
					}
				},
				{
					"content": {
						"korean": "네가 이 모든 지옥을 만든 주범이군!",
						"english": "You're the mastermind behind all this hell!",
						"japanese": "お前がこの全ての地獄を作り出した元凶か！",
						"chinese": "你就是制造这一切地狱的元凶！",
						"french": "Tu es le cerveau derrière tout cet enfer !",
						"spanish": "¡Eres el cerebro detrás de todo este infierno!",
						"vietnamese": "Ngươi chính là kẻ chủ mưu tạo ra tất cả địa ngục này!",
						"thai": "แกนี่เองที่เป็นต้นเหตุของนรกทั้งหมดนี้!",
						"hindi": "तुम ही इस सारे नरक के पीछे के मास्टरमाइंड हो!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "탐욕은 곧 빚. 그 빚은, 네 살을 뜯어 갚게 될 거다. 크흐흐...",
						"english": "Greed begets debt. And that debt, you'll repay with your flesh. Khehehe...",
						"japanese": "強欲は即ち借金。その借金は、お前の肉を削って返してもらうぞ。クフフ…",
						"chinese": "贪婪即是债务。那笔债，你将用你的血肉来偿还。呵呵呵……",
						"french": "La cupidité engendre la dette. Et cette dette, tu la paieras avec ta chair. Khehehe...",
						"spanish": "La avaricia engendra deudas. Y esa deuda, la pagarás con tu carne. Jejeje...",
						"vietnamese": "Lòng tham sẽ sinh ra nợ. Và món nợ đó, ngươi sẽ phải trả bằng chính da thịt của mình. Khà khà...",
						"thai": "ความโลภก่อให้เกิดหนี้ และหนี้นั้น เจ้าจะต้องชดใช้ด้วยเนื้อหนังของเจ้า คิกคิก...",
						"hindi": "लालच कर्ज को जन्म देता है। और वह कर्ज, तुम अपनी मांस से चुकाओगे। खिहिहि..."
					},
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "동전 한 푼 없는 네놈에게 남은 건 육신뿐이다. 크흐흐...",
						"english": "Penniless as you are, all that's left for you is your body. Heheheh...",
						"japanese": "「一銭も持たぬ貴様には、残されたのはこの体だけだ。クフフ…」",
						"chinese": "“身无分文的你，只剩下这具躯体了。呵呵呵…”",
						"french": "« Toi qui es sans le sou, il ne te reste plus que ton corps. Kheheheh... »",
						"spanish": "« Tú, que no tienes ni un céntimo, solo te queda tu cuerpo. Kjejeje... »",
						"vietnamese": "“Kẻ không một xu dính túi như ngươi, chỉ còn lại mỗi cái xác thôi. Khặc khặc...”",
						"thai": "“แกที่ไม่มีเงินเหลือแม้แต่แดงเดียว สิ่งที่เหลืออยู่คือแค่ร่างกายเท่านั้น คึคึคึ...”",
						"hindi": "“तेरे पास एक पैसा भी नहीं, अब बस तेरा शरीर ही बचा है। ख्ह्ह्ह्ह...”"
					}
				},
				{
					"content": {
						"korean": "망할... 아직 포기 안 해! 내 모든 걸 걸고 널 멈출 거야!",
						"english": "Damn it... I'm not giving up yet! I'll risk everything to stop you!",
						"japanese": "「くそ…まだ諦めない！全てを賭けてお前を止めてやる！」",
						"chinese": "“可恶…我还没放弃！我会赌上一切阻止你！”",
						"french": "« Maudite... Je n'abandonne pas encore ! Je risquerai tout pour t'arrêter ! »",
						"spanish": "« Maldita sea... ¡Todavía no me rindo! ¡Arriesgaré todo para detenerte! »",
						"vietnamese": "“Khốn kiếp... Tôi chưa bỏ cuộc! Tôi sẽ đánh cược tất cả để ngăn cản ngươi!”",
						"thai": "“ให้ตายสิ... ฉันยังไม่ยอมแพ้! ฉันจะเดิมพันทุกอย่างเพื่อหยุดแก!”",
						"hindi": "“धत् तेरे की... मैं अभी हार नहीं मानूँगा! मैं तुम्हें रोकने के लिए सब कुछ दांव पर लगा दूँगा!”"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "다음에 올 땐, 더 많은 걸 가져와라. 아니면, 네 영혼까지 바치게 될 테니.",
						"english": "Next time you come, bring more. Or you'll forfeit your very soul.",
						"japanese": "「次に訪れる時は、もっと多くのものを持ってこい。さもなくば、お前の魂まで捧げることになるだろうからな。」",
						"chinese": "“下次再来时，带上更多的东西。否则，你连灵魂都将献上。”",
						"french": "« La prochaine fois que tu viendras, apporte plus. Sinon, tu devras offrir même ton âme. »",
						"spanish": "« La próxima vez que vengas, trae más. De lo contrario, incluso tu alma será sacrificada. »",
						"vietnamese": "“Lần tới ngươi đến, hãy mang theo nhiều hơn. Bằng không, ngươi sẽ phải dâng hiến cả linh hồn mình.”",
						"thai": "“ครั้งหน้าที่จะมา จงนำอะไรมาให้มากกว่านี้ ไม่อย่างนั้น เจ้าจะต้องพลีแม้กระทั่งวิญญาณของเจ้า”",
						"hindi": "“अगली बार आओ तो और कुछ लेकर आना। वरना, तुम्हें अपनी आत्मा भी चढ़ानी पड़ेगी।”"
					},
					"type": "speech",
					"speaker": "random_boss"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"어둡고 습한 도시 뒷골목.",
			"동전만 삼키고 음료를 뱉지 않는 낡은 자판기가 나타났다.",
			"그것은 돈뿐만 아니라, 사람들의 운명까지 삼키기 시작했다.",
			"그리고 그 첫 번째 희생자의 팔에, 알 수 없는 숫자가 새겨졌다.",
			"잔혹한 게임의 서막이 올랐다."
		],
		"english": [
			"Dark, damp city alley.",
			"An old vending machine appeared, swallowing coins but never dispensing drinks.",
			"It began to swallow not just money, but people's destinies.",
			"And on the arm of its first victim, an unknown number was etched.",
			"The prelude to a cruel game had begun."
		],
		"japanese": [
			"暗く湿った路地裏。",
			"コインだけを飲み込み、飲み物を吐き出さない古い自動販売機が現れた。",
			"それは金だけでなく、人々の運命までも飲み込み始めた。",
			"そして、最初の犠牲者の腕に、未知の数字が刻まれた。",
			"残酷なゲームの序幕が上がった。"
		],
		"chinese": [
			"昏暗潮湿的城市后巷。",
			"一台只吞硬币不吐饮料的旧式自动贩卖机出现了。",
			"它开始吞噬的不仅仅是金钱，还有人们的命运。",
			"而在第一个受害者的手臂上，刻上了一个未知的数字。",
			"残酷游戏的序幕拉开了。"
		],
		"french": [
			"Une ruelle sombre et humide de la ville.",
			"Une vieille machine à distribuer apparut, avalant les pièces sans jamais rendre les boissons.",
			"Il commença à avaler non seulement l'argent, mais aussi le destin des gens.",
			"Et sur le bras de sa première victime, un nombre inconnu fut gravé.",
			"Le prélude d'un jeu cruel avait commencé."
		],
		"spanish": [
			"Un callejón oscuro y húmedo de la ciudad.",
			"Apareció una vieja máquina expendedora que solo tragaba monedas y nunca dispensaba bebidas.",
			"Comenzó a tragar no solo dinero, sino también el destino de las personas.",
			"Y en el brazo de su primera víctima, un número desconocido fue grabado.",
			"El preludio de un juego cruel había comenzado."
		],
		"vietnamese": [
			"Con hẻm tối tăm, ẩm ướt của thành phố.",
			"Một máy bán hàng tự động cũ kỹ xuất hiện, nuốt chửng đồng xu nhưng không nhả ra đồ uống.",
			"Nó bắt đầu nuốt chửng không chỉ tiền bạc, mà còn cả số phận con người.",
			"Và trên cánh tay của nạn nhân đầu tiên, một con số bí ẩn đã được khắc.",
			"Màn dạo đầu của một trò chơi tàn khốc đã bắt đầu."
		],
		"thai": [
			"ตรอกมืดและชื้นในเมือง.",
			"ตู้จำหน่ายสินค้าเก่าแก่ปรากฏขึ้น กลืนเหรียญแต่ไม่คายเครื่องดื่ม.",
			"มันเริ่มกลืนกินไม่เพียงแค่เงิน แต่ยังรวมถึงชะตากรรมของผู้คน.",
			"และบนแขนของเหยื่อรายแรก มีตัวเลขที่ไม่รู้จักสลักอยู่.",
			"บทนำของเกมอันโหดร้ายได้เริ่มต้นขึ้น."
		],
		"hindi": [
			"शहर की एक अँधेरी और नम गली।",
			"एक पुरानी वेंडिंग मशीन दिखाई दी, जो सिर्फ सिक्के निगलती थी और पेय नहीं देती थी।",
			"इसने न सिर्फ पैसे, बल्कि लोगों की किस्मत भी निगलना शुरू कर दिया।",
			"और उसके पहले शिकार की बांह पर, एक अज्ञात संख्या अंकित हो गई।",
			"एक क्रूर खेल का प्रस्तावना शुरू हो गया था।"
		]
	}
} as const;
