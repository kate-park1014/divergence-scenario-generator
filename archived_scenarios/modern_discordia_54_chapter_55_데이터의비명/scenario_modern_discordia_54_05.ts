export const scenario_modern_discordia_54_05 = {
	"scenario_id": "modern_discordia_54_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "modern",
	"actors": {
		"Echo": {
			"name": {
				"korean": "에코",
				"english": "Echo",
				"japanese": "エコー",
				"chinese": "艾可",
				"french": "Écho",
				"spanish": "Eco",
				"vietnamese": "Echo",
				"thai": "เอคโค่",
				"hindi": "इको"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/da48e2c2-6733-4f65-f8b6-f197af4ff700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e90605b9-372f-4bf1-cdec-56a2fdef0800/public"
		}
	},
	"boss": {
		"pool_id": "pool_DataChaos_Discordia_V1"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "폐쇄된 시설의 가장 깊은 곳. 데이터 폭풍이 모든 것을 집어삼킬 듯 포효했다.",
						"english": "Deepest within the sealed facility. A data storm roared, threatening to engulf everything.",
						"japanese": "閉鎖された施設の一番奥。データストームがあらゆるものを飲み込むかのように咆哮した。",
						"chinese": "封闭设施的最深处。数据风暴咆哮着，仿佛要吞噬一切。",
						"french": "Au plus profond de l'installation scellée. Une tempête de données rugissait, menaçant de tout engloutir.",
						"spanish": "En lo más profundo de la instalación sellada. Una tormenta de datos rugía, amenazando con engullirlo todo.",
						"vietnamese": "Sâu nhất bên trong cơ sở bị niêm phong. Một cơn bão dữ liệu gầm thét, đe dọa nuốt chửng mọi thứ.",
						"thai": "ลึกที่สุดภายในสิ่งอำนวยความสะดวกที่ปิดผนึก พายุข้อมูลคำราม ราวกับจะกลืนกินทุกสิ่ง",
						"hindi": "सील बंद सुविधा के सबसे गहरे में। एक डेटा तूफान गरज रहा था, सब कुछ निगलने की धमकी दे रहा था।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이게… Discordia의 흔적?",
						"english": "This is... Discordia's trace?",
						"japanese": "これは… Discordiaの痕跡か？",
						"chinese": "这是……迪斯科迪亚的痕迹？",
						"french": "C'est... la trace de Discordia ?",
						"spanish": "¿Esto es... el rastro de Discordia?",
						"vietnamese": "Đây là... dấu vết của Discordia?",
						"thai": "นี่คือ... ร่องรอยของ Discordia?",
						"hindi": "यह... डिस्कोर्डिया का निशान है?"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"speaker": "Echo",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "그 이상이야. 여기… 과거의 모든 정보가 비명을 지르고 있어.",
						"english": "It's more than that. Here... all information from the past is screaming.",
						"japanese": "それ以上だ。ここ…過去のすべての情報が悲鳴を上げている。",
						"chinese": "不止如此。这里……过去的所有信息都在尖叫。",
						"french": "C'est plus que ça. Ici… toutes les informations du passé hurlent.",
						"spanish": "Es más que eso. Aquí... toda la información del pasado está gritando.",
						"vietnamese": "Hơn cả thế. Ở đây… mọi thông tin từ quá khứ đều đang gào thét.",
						"thai": "มันมากกว่านั้น ที่นี่... ข้อมูลทั้งหมดจากอดีตกำลังกรีดร้อง",
						"hindi": "यह उससे कहीं ज़्यादा है। यहाँ… अतीत की सारी जानकारी चीख़ रही है।"
					},
					"type": "speech",
					"speaker": "Echo"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "Echo",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "base",
					"content": {
						"korean": "전광판이 깨지고 스마트폰 화면들이 비명을 지르듯 일그러졌다.",
						"english": "The billboards shattered and smartphone screens warped, screaming.",
						"japanese": "電光掲示板が割れ、スマートフォンの画面が悲鳴を上げるように歪んだ。",
						"chinese": "广告牌破碎，智能手机屏幕像尖叫般扭曲。",
						"french": "Les panneaux d'affichage se brisèrent et les écrans de smartphone se déformèrent en hurlant.",
						"spanish": "Las vallas publicitarias se hicieron añicos y las pantallas de los smartphones se distorsionaron, gritando.",
						"vietnamese": "Các bảng hiệu vỡ tan và màn hình điện thoại méo mó, như đang gào thét.",
						"thai": "ป้ายโฆษณาแตกกระจาย หน้าจอสมาร์ทโฟนบิดเบี้ยวราวกับกรีดร้อง",
						"hindi": "होर्डिंग टूट गए और स्मार्टफोन की स्क्रीन चीख़ते हुए विकृत हो गईं।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "…이해할 수 없는 너희를 위해 예술을 보여주려 했는데, 역겨운 것들!",
						"english": "...I tried to show art to you, who cannot understand, you disgusting things!",
						"japanese": "…理解できないお前たちのために芸術を見せようとしたのに、吐き気がする！",
						"chinese": "……我本想为你们这些无法理解的家伙展示艺术，真恶心！",
						"french": "...J'ai essayé de vous montrer de l'art, à vous qui ne pouvez pas comprendre, créatures dégoûtantes !",
						"spanish": "...Intenté mostrarles arte a ustedes, que no pueden entender, ¡seres asquerosos!",
						"vietnamese": "…Ta đã cố gắng cho các ngươi, những kẻ không thể hiểu, thấy nghệ thuật, đồ ghê tởm!",
						"thai": "...ข้าพยายามแสดงศิลปะให้พวกเจ้าผู้ไม่เข้าใจได้เห็น ไอ้พวกน่ารังเกียจ!",
						"hindi": "…मैं तुम नासमझों को कला दिखाना चाहता था, तुम घिनौनी चीज़ें!"
					},
					"type": "speech",
					"speaker": "boss",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "비명… 저건 고통이야.",
						"english": "Screams... that's pain.",
						"japanese": "悲鳴…あれは苦痛だ。",
						"chinese": "尖叫……那是痛苦。",
						"french": "Des cris... c'est de la douleur.",
						"spanish": "Gritos... eso es dolor.",
						"vietnamese": "Tiếng hét… đó là sự đau đớn.",
						"thai": "เสียงกรีดร้อง... นั่นคือความเจ็บปวด",
						"hindi": "चीखें… वह दर्द है।"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"speaker": "Echo",
					"content": {
						"korean": "데이터의 흐름이 불규칙해. 무언가 강력하게 억압된 의식이 폭주하는 것 같아.",
						"english": "The data flow is irregular. It seems like a powerfully suppressed consciousness is running wild.",
						"japanese": "データの流れが不規則だ。何か強く抑圧された意識が暴走しているようだ。",
						"chinese": "数据流不规则。似乎有什么被强烈压抑的意识正在暴走。",
						"french": "Le flux de données est irrégulier. On dirait qu'une conscience puissamment réprimée est en train de se déchaîner.",
						"spanish": "El flujo de datos es irregular. Parece que una conciencia fuertemente reprimida está descontrolada.",
						"vietnamese": "Luồng dữ liệu không đều. Dường như một ý thức bị kiềm nén mạnh mẽ đang bùng phát.",
						"thai": "การไหลของข้อมูลผิดปกติ ดูเหมือนว่าจิตสำนึกที่ถูกกดขี่อย่างรุนแรงกำลังอาละวาด",
						"hindi": "डेटा का प्रवाह अनियमित है। ऐसा लगता है कि कोई बहुत दबी हुई चेतना बेकाबू हो रही है।"
					},
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "Echo",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "Discordia의 형상이 수많은 얼굴과 목소리로 뒤섞였다. 혼돈 그 자체였다.",
						"english": "Discordia's form was a jumble of countless faces and voices. It was chaos itself.",
						"japanese": "Discordiaの姿は無数の顔と声が入り混じっていた。それ自体が混沌だった。",
						"chinese": "Discordia的形象混杂着无数的脸和声音。那是混沌本身。",
						"french": "La forme de Discordia était un mélange d'innombrables visages et voix. C'était le chaos lui-même.",
						"spanish": "La forma de Discordia era una mezcolanza de innumerables rostros y voces. Era el caos mismo.",
						"vietnamese": "Hình dạng của Discordia hòa lẫn vô số khuôn mặt và giọng nói. Nó chính là sự hỗn loạn.",
						"thai": "ร่างของ Discordia ปะปนไปด้วยใบหน้าและเสียงนับไม่ถ้วน มันคือความโกลาหลโดยแท้",
						"hindi": "डिस्कॉर्डिया का रूप अनगिनत चेहरों और आवाज़ों का एक मिश्रण था। यह स्वयं अराजकता थी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "젠장, 난 아직도 여기가… 그 빌어먹을 지하실이야? 아냐, 아냐! 저 년이 날 가두려 해!",
						"english": "Damn it, am I still here... in that cursed basement? No, no! That bitch is trying to trap me!",
						"japanese": "くそ、俺はまだここが…あの忌まわしい地下室なのか？いや、違う！あの女が俺を閉じ込めようとしている！",
						"chinese": "该死，我还在……那个该死的地下室吗？不，不是！那个女人想困住我！",
						"french": "Merde, je suis toujours ici... dans ce foutu sous-sol ? Non, non ! Cette salope essaie de m'emprisonner !",
						"spanish": "¡Maldita sea, ¿todavía estoy aquí... en ese maldito sótano? No, no! ¡Esa perra está tratando de atraparme!",
						"vietnamese": "Chết tiệt, tôi vẫn còn ở đây… trong cái tầng hầm đáng nguyền rủa đó à? Không, không! Con khốn đó đang cố nhốt tôi!",
						"thai": "บัดซบ! นี่ฉันยังอยู่ที่...ห้องใต้ดินบ้า ๆ นั่นเหรอ? ไม่, ไม่! นังนั่นพยายามจะขังฉัน!",
						"hindi": "धिक्कार है, क्या मैं अभी भी यहीं हूँ… उस शापित तहखाने में? नहीं, नहीं! वह चुड़ैल मुझे फँसाना चाहती है!"
					},
					"type": "speech",
					"speaker": "boss",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "누가 그를 가둔 거야?",
						"english": "Who trapped him?",
						"japanese": "誰が彼を閉じ込めたんだ？",
						"chinese": "谁困住了他？",
						"french": "Qui l'a piégé ?",
						"spanish": "¿Quién lo atrapó?",
						"vietnamese": "Ai đã giam giữ anh ta?",
						"thai": "ใครขังเขาไว้?",
						"hindi": "उसे किसने फँसाया?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "기록이 더 명확해지고 있어. 시작은… 단 한 명이었어.",
						"english": "The records are becoming clearer. It started with... just one person.",
						"japanese": "記録がより明確になっている。始まりは…たった一人だった。",
						"chinese": "记录变得更清晰了。开始时……只有一个人。",
						"french": "Les registres deviennent plus clairs. Tout a commencé avec... une seule personne.",
						"spanish": "Los registros están volviéndose más claros. Empezó con... solo una persona.",
						"vietnamese": "Các ghi chép đang trở nên rõ ràng hơn. Khởi đầu là… chỉ một người thôi.",
						"thai": "บันทึกชัดเจนขึ้นแล้ว จุดเริ่มต้นคือ...แค่คนเดียว",
						"hindi": "रिकॉर्ड ज़्यादा स्पष्ट हो रहे हैं। इसकी शुरुआत… सिर्फ़ एक व्यक्ति से हुई थी।"
					},
					"speaker": "Echo",
					"emotion": "sad"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "Echo"
				},
				{
					"type": "speech",
					"content": {
						"korean": "모든 걸 부숴야 해! 전부, 전부 내 빛나는 조각이 될 거야! 흐하하하…",
						"english": "I have to smash everything! Everything, everything will become my shining fragments! Hahaha...",
						"japanese": "全てを壊さなきゃ！全て、全て俺の輝く破片になるんだ！フハハハ…",
						"chinese": "我必须粉碎一切！全部，全部都会成为我闪耀的碎片！哈哈哈……",
						"french": "Je dois tout détruire ! Tout, tout deviendra mes fragments brillants ! Hahahaha...",
						"spanish": "¡Tengo que destrozarlo todo! ¡Todo, todo se convertirá en mis fragmentos brillantes! Jajajaja...",
						"vietnamese": "Ta phải phá hủy tất cả! Tất cả, tất cả sẽ trở thành những mảnh vỡ lấp lánh của ta! Hahaha…",
						"thai": "ฉันต้องทำลายทุกสิ่ง! ทุกสิ่ง ทุกอย่างจะกลายเป็นเศษเสี้ยวที่ส่องประกายของฉัน! ฮ่าฮ่าฮ่า...",
						"hindi": "मुझे सब कुछ तोड़ना है! सब कुछ, सब कुछ मेरे चमकदार टुकड़े बन जाएँगे! हाहाहा…"
					},
					"speaker": "boss",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "더 이상 못 참고 있어. 이 도시를 전부 부수려고 해.",
						"english": "I can't take it anymore. I'll destroy this entire city.",
						"japanese": "もう我慢できない。この街を全部壊してやる。",
						"chinese": "我再也无法忍受了。我要摧毁这座城市。",
						"french": "Je n'en peux plus. Je vais détruire toute cette ville.",
						"spanish": "No puedo más. Voy a destruir toda esta ciudad.",
						"vietnamese": "Tôi không thể chịu đựng được nữa. Tôi sẽ phá hủy toàn bộ thành phố này.",
						"thai": "ฉันทนไม่ไหวแล้ว ฉันจะทำลายเมืองนี้ทั้งเมือง",
						"hindi": "मैं अब और बर्दाश्त नहीं कर सकता। मैं इस पूरे शहर को तबाह कर दूंगा।"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…아니, 저건 파괴가 아니야. 그저… 멈춰달라는 비명일 뿐.",
						"english": "...No, that's not destruction. It's just... a scream to make it stop.",
						"japanese": "…いや、あれは破壊じゃない。ただ…止めてほしいという叫びだ。",
						"chinese": "…不，那不是破坏。那只是…一声请求停止的尖叫。",
						"french": "...Non, ce n'est pas de la destruction. C'est juste... un cri pour que ça s'arrête.",
						"spanish": "...No, eso no es destrucción. Es solo... un grito para que se detenga.",
						"vietnamese": "...Không, đó không phải sự phá hủy. Đó chỉ là... một tiếng kêu xin dừng lại.",
						"thai": "…ไม่ นั่นไม่ใช่การทำลาย มันเป็นแค่… เสียงกรีดร้องขอให้หยุด",
						"hindi": "...नहीं, वह विनाश नहीं है। वह बस... रुकने की चीख़ है।"
					},
					"speaker": "Echo"
				},
				{
					"speaker": "Echo",
					"type": "speech",
					"content": {
						"korean": "이제 모든 조각이 맞춰졌어.",
						"english": "Now all the pieces have fallen into place.",
						"japanese": "これで全てのピースが揃った。",
						"chinese": "现在，所有的碎片都已就位。",
						"french": "Maintenant, toutes les pièces sont en place.",
						"spanish": "Ahora todas las piezas encajan.",
						"vietnamese": "Bây giờ, tất cả các mảnh ghép đã vào đúng vị trí.",
						"thai": "ตอนนี้ทุกชิ้นส่วนเข้าที่แล้ว",
						"hindi": "अब सभी टुकड़े अपनी जगह पर आ गए हैं।"
					},
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "Discordia의 중심에서 억눌린듯한 아이의 목소리가 들리다가, 잔혹한 남성의 목소리로 변해 비웃었다.",
						"english": "From the heart of Discordia, a child's suppressed voice was heard, then twisted into a cruel man's laugh.",
						"japanese": "Discordiaの中心から、抑圧された子供の声が聞こえ、やがて残忍な男の嘲笑へと変わった。",
						"chinese": "在Discordia的中心，一个被压抑的孩子的声音传来，随后变成了一个残酷男人的嘲笑声。",
						"french": "Du cœur de Discordia, une voix d'enfant étouffée se fit entendre, puis se transforma en un rire cruel d'homme.",
						"spanish": "Desde el corazón de Discordia, se oyó la voz oprimida de un niño, que luego se transformó en la risa cruel de un hombre.",
						"vietnamese": "Từ trung tâm Discordia, một giọng nói bị kìm nén của một đứa trẻ vang lên, rồi biến thành tiếng cười nhạo báng của một người đàn ông tàn nhẫn.",
						"thai": "จากใจกลาง Discordia ได้ยินเสียงเด็กที่ถูกกดขี่ แล้วเสียงนั้นก็กลายเป็นเสียงหัวเราะเยาะเย้ยของผู้ชายที่โหดเหี้ยม",
						"hindi": "डिस्कोर्डिया के केंद्र से, एक दबी हुई बच्चे की आवाज़ सुनाई दी, फिर वह एक क्रूर आदमी की हंसी में बदल गई।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "boss",
					"content": {
						"korean": "아니, 나도… 나도 아파… 제발… 제발… 멈춰줘…!",
						"english": "No, I... I hurt too... Please... please... stop...!",
						"japanese": "いや、私も…私も痛い…お願い…お願い…止めて…！",
						"chinese": "不，我…我也很痛苦…求求你…求求你…停下来…！",
						"french": "Non, moi aussi... moi aussi j'ai mal... S'il te plaît... s'il te plaît... arrête... !",
						"spanish": "No, yo también... yo también sufro... Por favor... por favor... detente... !",
						"vietnamese": "Không, tôi... tôi cũng đau... Làm ơn... làm ơn... dừng lại đi...!",
						"thai": "ไม่นะ ฉันก็… ฉันก็เจ็บปวด… ได้โปรด… ได้โปรด… หยุดที…!",
						"hindi": "नहीं, मुझे भी... मुझे भी दर्द हो रहा है... कृपया... कृपया... रोक दो...!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…괴물이 아니었어. 그는 그저… 고통받는 존재였을 뿐.",
						"english": "...It wasn't a monster. He was just... a suffering being.",
						"japanese": "…怪物じゃなかった。彼はただ…苦しんでいる存在だっただけだ。",
						"chinese": "…那不是怪物。他只是…一个正在受苦的生命。",
						"french": "...Ce n'était pas un monstre. Il n'était qu'une... créature souffrante.",
						"spanish": "...No era un monstruo. Él era solo... un ser sufriente.",
						"vietnamese": "...Đó không phải là một con quái vật. Anh ta chỉ là... một sinh vật đang đau khổ.",
						"thai": "…มันไม่ใช่สัตว์ประหลาด เขาเป็นแค่… สิ่งมีชีวิตที่กำลังทนทุกข์",
						"hindi": "...वह एक राक्षस नहीं था। वह बस... एक पीड़ित प्राणी था।"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "Echo"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "프로젝트는 단 한 명의 아이로부터 시작되었어. 그 아이의 공포가 다른 모든 의식을 흡수하여 괴물이 된 거야.",
						"english": "The project began with a single child. That child's fear absorbed all other consciousness, becoming a monster.",
						"japanese": "プロジェクトはたった一人の子供から始まった。その子供の恐怖が他の全ての意識を吸収し、怪物になったのだ。",
						"chinese": "这个项目始于一个孩子。那个孩子的恐惧吸收了所有其他意识，从而变成了怪物。",
						"french": "Le projet a commencé avec un seul enfant. La peur de cet enfant a absorbé toutes les autres consciences, le transformant en monstre.",
						"spanish": "El proyecto comenzó con un solo niño. El miedo de ese niño absorbió todas las demás conciencias, convirtiéndolo en un monstruo.",
						"vietnamese": "Dự án bắt đầu từ một đứa trẻ duy nhất. Nỗi sợ hãi của đứa trẻ đó đã hấp thụ tất cả các ý thức khác, biến nó thành một con quái vật.",
						"thai": "โครงการนี้เริ่มต้นจากเด็กเพียงคนเดียว ความกลัวของเด็กคนนั้นได้ดูดซับจิตสำนึกอื่น ๆ ทั้งหมด กลายเป็นสัตว์ประหลาด",
						"hindi": "यह परियोजना एक बच्चे से शुरू हुई थी। उस बच्चे के डर ने सभी अन्य चेतनाओं को अवशोषित कर लिया, जिससे वह एक राक्षस बन गया।"
					},
					"type": "speech",
					"speaker": "Echo"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "그를 해방시켜야 해. 이 고통을 끝내줘야 해.",
						"english": "We must free him. We must end this suffering.",
						"japanese": "彼を解放しなければならない。この苦しみを終わらせてやらなければならない。",
						"chinese": "我们必须解放他。我们必须结束这份痛苦。",
						"french": "Nous devons le libérer. Nous devons mettre fin à cette souffrance.",
						"spanish": "Debemos liberarlo. Debemos poner fin a este sufrimiento.",
						"vietnamese": "Chúng ta phải giải thoát anh ấy. Chúng ta phải chấm dứt nỗi đau này.",
						"thai": "เราต้องปลดปล่อยเขา เราต้องยุติความเจ็บปวดนี้",
						"hindi": "हमें उसे आज़ाद करना होगा। हमें इस पीड़ा को समाप्त करना होगा।"
					},
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "데이터 폭풍이 잦아들고, Discordia의 형상이 원래의 키네틱 아트로 돌아왔다.",
						"english": "The data storm subsided, and Discordia's form returned to its original kinetic art.",
						"japanese": "データストームが収まり、Discordiaの姿は元のキネティックアートに戻った。",
						"chinese": "数据风暴平息了，Discordia的形态变回了原来的动能艺术。",
						"french": "La tempête de données s'est calmée, et la forme de Discordia est revenue à son art cinétique original.",
						"spanish": "La tormenta de datos amainó, y la forma de Discordia volvió a su arte cinético original.",
						"vietnamese": "Cơn bão dữ liệu lắng xuống, và hình dạng của Discordia trở lại hình thức nghệ thuật động học ban đầu.",
						"thai": "พายุข้อมูลสงบลง และรูปร่างของ Discordia ก็กลับคืนสู่ศิลปะจลน์ดั้งเดิม",
						"hindi": "डेटा तूफान शांत हो गया, और डिस्कॉर्डिया का आकार अपने मूल काइनेटिक आर्ट में वापस आ गया।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "고마워… 이제… 쉴 수 있어…",
						"english": "Thank you... Now... I can rest...",
						"japanese": "ありがとう…もう…休める…",
						"chinese": "谢谢你…现在…我可以休息了…",
						"french": "Merci... Maintenant... je peux me reposer...",
						"spanish": "Gracias... Ahora... puedo descansar...",
						"vietnamese": "Cảm ơn... Bây giờ... tôi có thể nghỉ ngơi...",
						"thai": "ขอบคุณนะ… ตอนนี้… ฉันได้พักผ่อนแล้ว…",
						"hindi": "धन्यवाद... अब... मैं आराम कर सकता हूँ..."
					},
					"speaker": "boss"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "그는 자유로워졌어…",
						"english": "He is free...",
						"japanese": "彼は自由になった…",
						"chinese": "他自由了…",
						"french": "Il est libre…",
						"spanish": "Es libre…",
						"vietnamese": "Anh ấy đã tự do…",
						"thai": "เขาเป็นอิสระแล้ว...",
						"hindi": "वह आज़ाद है..."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "Echo",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "모든 기억이… 데이터의 바다로 돌아갔어. 하지만… 프로젝트의 흔적은 여전히 남아있을 거야.",
						"english": "All memories... returned to the sea of data. But... traces of the project will still remain.",
						"japanese": "全ての記憶が…データの海へと戻っていった。だが…プロジェクトの痕跡はまだ残っているだろう。",
						"chinese": "所有记忆…都回归了数据的海洋。但是…项目的痕迹仍会残留。",
						"french": "Toutes les mémoires... sont retournées à la mer de données. Mais... les traces du projet subsisteront toujours.",
						"spanish": "Todos los recuerdos... regresaron al mar de datos. Pero... los rastros del proyecto aún permanecerán.",
						"vietnamese": "Mọi ký ức... đã trở về biển dữ liệu. Nhưng... dấu vết của dự án vẫn sẽ còn lại.",
						"thai": "ความทรงจำทั้งหมด... กลับคืนสู่ทะเลแห่งข้อมูลแล้ว แต่... ร่องรอยของโครงการจะยังคงอยู่",
						"hindi": "सभी यादें... डेटा के सागर में लौट गईं। लेकिन... परियोजना के निशान अभी भी रहेंगे।"
					},
					"speaker": "Echo"
				},
				{
					"content": {
						"korean": "과거의 그림자는 완전히 사라지지 않았다. 도시의 구원은 이제 시작이었다.",
						"english": "The shadow of the past has not completely vanished. The city's salvation was just beginning.",
						"japanese": "過去の影は完全には消え去っていなかった。都市の救済は今始まったばかりだ。",
						"chinese": "过去的阴影并未完全消散。城市的救赎才刚刚开始。",
						"french": "L'ombre du passé n'a pas complètement disparu. Le salut de la ville ne faisait que commencer.",
						"spanish": "La sombra del pasado no ha desaparecido por completo. La salvación de la ciudad acababa de empezar.",
						"vietnamese": "Bóng tối của quá khứ vẫn chưa tan biến hoàn toàn. Sự cứu rỗi của thành phố chỉ mới bắt đầu.",
						"thai": "เงาของอดีตยังไม่จางหายไปทั้งหมด การกอบกู้เมืองเพิ่งจะเริ่มต้นขึ้น",
						"hindi": "अतीत की परछाई पूरी तरह से मिट नहीं पाई थी। शहर का उद्धार अभी शुरू ही हुआ था।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "Discordia의 혼돈이 모든 것을 집어삼켰다. 데이터의 비명은 멈추지 않았다.",
						"english": "The chaos of Discordia devoured everything. The screams of data never stopped.",
						"japanese": "Discordiaの混沌が全てを飲み込んだ。データの悲鳴は止まらなかった。",
						"chinese": "Discordia的混沌吞噬了一切。数据的尖叫声从未停止。",
						"french": "Le chaos de Discordia a tout dévoré. Les cris des données ne cessaient jamais.",
						"spanish": "El caos de Discordia lo devoró todo. Los gritos de los datos nunca cesaron.",
						"vietnamese": "Sự hỗn loạn của Discordia đã nuốt chửng mọi thứ. Tiếng la hét của dữ liệu không ngừng lại.",
						"thai": "ความโกลาหลของ Discordia กลืนกินทุกสิ่ง เสียงกรีดร้องของข้อมูลไม่เคยหยุดนิ่ง",
						"hindi": "डिस्कॉर्डिया के अराजकता ने सब कुछ निगल लिया। डेटा की चीखें कभी नहीं रुकीं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "boss",
					"content": {
						"korean": "너희도… 똑같아… 이 고통에서 벗어날 수 없어…",
						"english": "You too... are the same... You can't escape this pain...",
						"japanese": "お前たちも…同じだ…この苦しみから逃れられない…",
						"chinese": "你们也…一样…无法摆脱这痛苦…",
						"french": "Vous aussi... êtes les mêmes... Vous ne pouvez pas échapper à cette douleur...",
						"spanish": "Vosotros también... sois iguales... No podéis escapar de este dolor...",
						"vietnamese": "Các ngươi cũng… giống vậy… không thể thoát khỏi nỗi đau này…",
						"thai": "พวกเจ้าก็… เหมือนกัน… หนีความเจ็บปวดนี้ไม่พ้น…",
						"hindi": "तुम भी... वैसे ही हो... इस दर्द से बच नहीं सकते..."
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아직 끝나지 않았어… 반드시 널 해방시킬 거야.",
						"english": "It's not over yet... I will definitely set you free.",
						"japanese": "まだ終わっていない…必ずお前を解放する。",
						"chinese": "还没结束…我一定会解放你。",
						"french": "Ce n'est pas encore fini... Je te libérerai à coup sûr.",
						"spanish": "Aún no ha terminado... Definitivamente te liberaré.",
						"vietnamese": "Vẫn chưa kết thúc… Ta nhất định sẽ giải thoát cho ngươi.",
						"thai": "ยังไม่จบ... ฉันจะปลดปล่อยเธออย่างแน่นอน",
						"hindi": "अभी खत्म नहीं हुआ है... मैं तुम्हें ज़रूर आज़ाद करूँगा।"
					},
					"type": "speech"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"데이터의 폭풍은 멈췄지만, 그 비명은 귓가에 남아있었다.",
			"그를 괴물이라 불렀던 우리는, 결국 그의 고통을 마주했다.",
			"구원이었을까, 또 다른 침해였을까.",
			"도시의 밤은 깊어지고, 우리는 답을 찾지 못한 채 걷고 있었다."
		],
		"english": [
			"The data storm ceased, yet its screams lingered in our ears.",
			"We, who called him a monster, ultimately faced his pain.",
			"Was it salvation, or another trespass?",
			"The city night deepened, and we walked on, without finding answers."
		],
		"japanese": [
			"データストームは止んだが、その悲鳴は耳に残っていた。",
			"彼を怪物と呼んだ私たちは、結局彼の苦痛に直面した。",
			"それは救済だったのか、それとも新たな侵害だったのか。",
			"都市の夜は深まり、私たちは答えを見つけられないまま歩いていた。"
		],
		"chinese": [
			"数据风暴平息了，但那些尖叫声仍回荡耳边。",
			"我们称他为怪物，最终却直面了他的痛苦。",
			"这是救赎，还是又一次侵犯？",
			"城市夜色渐深，我们继续前行，却未找到答案。"
		],
		"french": [
			"La tempête de données s'est calmée, mais ses cris résonnaient encore à nos oreilles.",
			"Nous, qui l'avions appelé monstre, avons finalement affronté sa douleur.",
			"Était-ce une rédemption, ou une autre intrusion ?",
			"La nuit de la ville s'épaississait, et nous marchions, sans trouver de réponses."
		],
		"spanish": [
			"La tormenta de datos cesó, pero sus gritos persistían en nuestros oídos.",
			"Nosotros, quienes lo llamamos monstruo, finalmente enfrentamos su dolor.",
			"¿Fue salvación, o otra transgresión?",
			"La noche de la ciudad se profundizó, y seguimos caminando, sin encontrar respuestas."
		],
		"vietnamese": [
			"Cơn bão dữ liệu đã ngừng, nhưng những tiếng hét của nó vẫn văng vẳng bên tai.",
			"Chúng tôi, những người đã gọi anh ta là quái vật, cuối cùng đã đối mặt với nỗi đau của anh ta.",
			"Đó là sự cứu rỗi, hay một sự xâm phạm khác?",
			"Đêm thành phố chìm sâu, và chúng tôi bước đi, không tìm thấy câu trả lời."
		],
		"thai": [
			"พายุข้อมูลสงบลง แต่เสียงกรีดร้องยังคงติดหูเรา",
			"เรา ผู้ที่เรียกเขาว่าสัตว์ประหลาด ในที่สุดก็เผชิญหน้ากับความเจ็บปวดของเขา",
			"เป็นการไถ่บาป หรือการล่วงละเมิดอีกครั้ง?",
			"ราตรีของเมืองลึกขึ้น และเรายังคงเดินต่อไป โดยไม่พบคำตอบ"
		],
		"hindi": [
			"डेटा का तूफान थम गया, फिर भी उसकी चीखें हमारे कानों में गूंज रही थीं।",
			"हमने, जिसने उसे राक्षस कहा था, अंततः उसके दर्द का सामना किया।",
			"क्या यह मुक्ति थी, या एक और अतिक्रमण?",
			"शहर की रात गहरी हो गई, और हम बिना जवाब पाए चलते रहे।"
		]
	},
	"prologue": {
		"korean": [
			"도시 지하, 강제 정신 동기화 프로젝트의 심장부.",
			"그곳에서 우리는 한 괴물을 만났다.",
			"수백의 비명과 하나의 슬픔이 뒤섞인 혼돈.",
			"과연 그를 괴물이라 부를 수 있을까?"
		],
		"english": [
			"Deep beneath the city, at the heart of the forced mind-sync project.",
			"There, we encountered a monster.",
			"A chaos of hundreds of screams and a single sorrow.",
			"Could we truly call him a monster?"
		],
		"japanese": [
			"都市の地下、強制精神同期プロジェクトの心臓部。",
			"そこで、私たちはある怪物を目撃した。",
			"数百の悲鳴と一つの悲しみが混じり合う混沌。",
			"果たして彼を怪物と呼べるのか？"
		],
		"chinese": [
			"城市地下，强制精神同步项目的核心。",
			"在那里，我们遇到了一只怪物。",
			"数百声尖叫与一份悲伤交织的混沌。",
			"我们真的能称他为怪物吗？"
		],
		"french": [
			"Sous la ville, au cœur du projet de synchronisation mentale forcée.",
			"Là, nous avons rencontré un monstre.",
			"Un chaos mêlant des centaines de cris et une seule tristesse.",
			"Pouvions-nous vraiment l'appeler un monstre ?"
		],
		"spanish": [
			"Bajo la ciudad, en el corazón del proyecto de sincronización mental forzada.",
			"Allí, nos encontramos con un monstro.",
			"Un caos de cientos de gritos y una única tristeza.",
			"¿Podríamos realmente llamarlo un monstruo?"
		],
		"vietnamese": [
			"Sâu dưới lòng thành phố, tại trung tâm dự án đồng bộ hóa tâm trí cưỡng bức.",
			"Tại đó, chúng tôi đã gặp một con quái vật.",
			"Một sự hỗn loạn của hàng trăm tiếng hét và một nỗi buồn duy nhất.",
			"Liệu chúng ta có thể thực sự gọi anh ta là quái vật không?"
		],
		"thai": [
			"ใต้เมืองลึก ที่ใจกลางของโครงการซิงโครไนซ์จิตใจแบบบังคับ",
			"ที่นั่น เราได้พบกับสัตว์ประหลาดตนหนึ่ง",
			"ความโกลาหลที่ผสมผสานระหว่างเสียงกรีดร้องนับร้อยและความเศร้าเพียงหนึ่งเดียว",
			"เราจะเรียกเขาว่าสัตว์ประหลาดได้จริงหรือ?"
		],
		"hindi": [
			"शहर के नीचे, जबरन मन-समन्वयन परियोजना के केंद्र में。",
			"वहाँ, हमें एक राक्षस मिला।",
			"सैकड़ों चीखों और एक अकेले दुख का मिश्रण।",
			"क्या हम उसे सच में एक राक्षस कह सकते थे?"
		]
	}
} as const;
