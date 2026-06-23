export const scenario_modern_doninfluence_30_04 = {
	"scenario_id": "modern_doninfluence_30_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"lin": {
			"id": "mon_d036a884-3dde-472c-9fe7-c4807643860f",
			"name": {
				"korean": "린",
				"english": "Lin",
				"japanese": "リン",
				"chinese": "琳",
				"french": "Lin",
				"spanish": "Lin",
				"vietnamese": "Lin",
				"thai": "ลิน",
				"hindi": "लिन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a095dd66-1857-4f44-68b0-2ece83006d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/05b02694-f1ed-4e4c-b7ca-fb5b74a48900/public"
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
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "도시 외곽, 버려진 공장 지대. '패밀리'의 습격 흔적이 가득했다.",
						"english": "City outskirts, abandoned factory. 'Family's' attack left its mark.",
						"japanese": "都市郊外、廃工場。「ファミリー」の襲撃の痕跡が残されていた。",
						"chinese": "城市郊区，废弃的工厂。“家庭”的袭击留下了痕迹。",
						"french": "Périphérie de la ville, usine abandonnée. L'attaque de la 'Famille' a laissé sa marque.",
						"spanish": "Afueras de la ciudad, fábrica abandonada. El ataque de la 'Familia' dejó su huella.",
						"vietnamese": "Ngoại ô thành phố, nhà máy bỏ hoang. Cuộc tấn công của 'Gia đình' đã để lại dấu vết.",
						"thai": "ชานเมือง, โรงงานร้าง. การโจมตีของ 'ครอบครัว' ทิ้งร่องรอยไว้",
						"hindi": "शहर के बाहरी इलाके, सुनसान फैक्ट्री। 'परिवार' के हमले के निशान रह गए थे।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이게 팬심이라고?",
						"english": "This is 'fan love'?",
						"japanese": "これがファン心だって？",
						"chinese": "这就是粉丝之爱吗？",
						"french": "C'est ça l'amour des fans ?",
						"spanish": "¿Esto es 'amor de fans'?",
						"vietnamese": "Đây gọi là 'tình yêu của fan' à?",
						"thai": "นี่คือ 'ความรักของแฟนคลับ' เหรอ?",
						"hindi": "क्या यह 'फैन्स का प्यार' है?"
					},
					"emotion": "angry"
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "lin",
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "lin",
					"emotion": "sad",
					"content": {
						"korean": "아니. 이젠 조직이야. 물리적 폭력을 행사하고 있어.",
						"english": "No. It's a syndicate now. They're using physical violence.",
						"japanese": "違う。もう組織だ。物理的な暴力を振るっている。",
						"chinese": "不。现在是帮派了。他们在施加物理暴力。",
						"french": "Non. C'est une organisation maintenant. Ils utilisent la violence physique.",
						"spanish": "No. Ahora es una organización. Están usando violencia física.",
						"vietnamese": "Không. Giờ đây nó là một tổ chức. Chúng đang dùng bạo lực thể xác.",
						"thai": "ไม่. ตอนนี้มันคือองค์กรแล้ว. พวกเขากำลังใช้ความรุนแรงทางกายภาพ",
						"hindi": "नहीं। यह अब एक सिंडिकेट है। वे शारीरिक हिंसा का प्रयोग कर रहे हैं।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "내부에 있었다는 거야?",
						"english": "You were inside?",
						"japanese": "内部にいたってこと？",
						"chinese": "你在里面吗？",
						"french": "Tu étais à l'intérieur ?",
						"spanish": "¿Estabas dentro?",
						"vietnamese": "Cậu ở bên trong à?",
						"thai": "คุณอยู่ข้างในเหรอ?",
						"hindi": "तुम अंदर थे?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "위장 잠입. 내부 고발하려고.",
						"english": "Undercover. To expose them.",
						"japanese": "潜入捜査。内部告発するために。",
						"chinese": "伪装潜入。为了举报。",
						"french": "Infiltration. Pour les dénoncer.",
						"spanish": "Encubierto. Para denunciarlos.",
						"vietnamese": "Nằm vùng. Để tố cáo.",
						"thai": "ปลอมตัว. เพื่อเปิดโปงพวกเขา",
						"hindi": "गुप्त रूप से। उन्हें बेनकाब करने के लिए।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이제는 더 이상 디지털 게임이 아니야. 이건… 전쟁이야.",
						"english": "This isn't a digital game anymore. This is… war.",
						"japanese": "これはもはやデジタルゲームではない。これは…戦争だ。",
						"chinese": "这不再是数字游戏了。这是…战争。",
						"french": "Ce n'est plus un jeu numérique. C'est… la guerre.",
						"spanish": "Esto ya no es un juego digital. Esto es… la guerra.",
						"vietnamese": "Đây không còn là một trò chơi kỹ thuật số nữa. Đây là… chiến tranh.",
						"thai": "นี่ไม่ใช่เกมดิจิทัลอีกต่อไปแล้ว นี่คือ… สงคราม",
						"hindi": "यह अब कोई डिजिटल गेम नहीं है। यह… युद्ध है।"
					},
					"speaker": "lin"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "lin"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "이 모든 게 옛 마피아 조직의 '영토' 확장을 위한 재편 과정이야.",
						"english": "All of this is a restructuring to expand the 'territory' of the old mafia organization.",
						"japanese": "これらすべては、旧マフィア組織の「縄張り」拡大のための再編過程だ。",
						"chinese": "所有这一切都是为了旧黑手党组织扩张'领地'的重组过程。",
						"french": "Tout cela est une restructuration visant à étendre le 'territoire' de l'ancienne organisation mafieuse.",
						"spanish": "Todo esto es un proceso de reestructuración para expandir el 'territorio' de la antigua organización mafiosa.",
						"vietnamese": "Tất cả những điều này là quá trình tái cấu trúc để mở rộng 'lãnh thổ' của tổ chức mafia cũ.",
						"thai": "ทั้งหมดนี้คือกระบวนการปรับโครงสร้างเพื่อขยาย 'อาณาเขต' ขององค์กรมาเฟียเก่า",
						"hindi": "यह सब पुरानी माफिया संगठन के 'क्षेत्र' विस्तार के लिए एक पुनर्गठन प्रक्रिया है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그게 무슨 소리야?",
						"english": "What do you mean?",
						"japanese": "どういうことだ？",
						"chinese": "你什么意思？",
						"french": "Que voulez-vous dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ý anh là gì?",
						"thai": "คุณหมายความว่ายังไง?",
						"hindi": "आपका क्या मतलब है?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "돈 인플루언서가 옛 세력을 끌어들이고 있어. 이 도시 전체를…",
						"english": "The Money Influencer is bringing in old forces. This entire city…",
						"japanese": "マネーインフルエンサーが旧勢力を引き入れている。この都市全体を…",
						"chinese": "金钱网红正在招揽旧势力。整个城市…",
						"french": "L'influenceur de l'argent attire d'anciennes forces. Toute cette ville…",
						"spanish": "El Influencer del Dinero está atrayendo a las viejas fuerzas. Toda esta ciudad…",
						"vietnamese": "Influencer tiền bạc đang lôi kéo các thế lực cũ. Cả thành phố này…",
						"thai": "อินฟลูเอนเซอร์เงินกำลังดึงดูดกองกำลังเก่าๆ เข้ามา เมืองนี้ทั้งหมด…",
						"hindi": "मनी इन्फ्लुएंसर पुरानी ताकतों को खींच रहा है। इस पूरे शहर को…"
					},
					"emotion": "sad",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…다시 장악하려고 하고 있어!",
						"english": "…they're trying to take over again!",
						"japanese": "…再び掌握しようとしているんだ！",
						"chinese": "…他们正试图再次掌控！",
						"french": "…ils essaient de reprendre le contrôle !",
						"spanish": "…¡están intentando tomar el control de nuevo!",
						"vietnamese": "…họ đang cố gắng chiếm lại!",
						"thai": "…พวกเขากำลังพยายามยึดครองอีกครั้ง!",
						"hindi": "…वे फिर से कब्ज़ा करने की कोशिश कर रहे हैं!"
					},
					"speaker": "lin"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "너무 위험해. 당장 빠져나와야 해.",
						"english": "It's too dangerous. We need to get out now.",
						"japanese": "危険すぎる。今すぐここを離れるべきだ。",
						"chinese": "太危险了。我们必须马上离开。",
						"french": "C'est trop dangereux. Nous devons partir tout de suite.",
						"spanish": "Es demasiado peligroso. Tenemos que salir de aquí ahora mismo.",
						"vietnamese": "Quá nguy hiểm. Chúng ta phải rút lui ngay.",
						"thai": "มันอันตรายเกินไป เราต้องออกไปเดี๋ยวนี้",
						"hindi": "यह बहुत खतरनाक है। हमें तुरंत निकलना होगा।"
					},
					"speaker": "character_1"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "나도 알아. 하지만 결정적인 증거를 찾아야 해.",
						"english": "I know. But we need to find decisive evidence.",
						"japanese": "分かってる。でも決定的な証拠を見つけなきゃ。",
						"chinese": "我知道。但我们必须找到决定性的证据。",
						"french": "Je sais. Mais nous devons trouver des preuves décisives.",
						"spanish": "Lo sé. Pero necesitamos encontrar pruebas decisivas.",
						"vietnamese": "Tôi biết. Nhưng chúng ta phải tìm ra bằng chứng quyết định.",
						"thai": "ฉันรู้ แต่เราต้องหาหลักฐานที่ชัดเจนให้ได้",
						"hindi": "मुझे पता है। लेकिन हमें निर्णायक सबूत ढूंढना होगा।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"speaker": "lin",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그들은 구역을 나누고, 새로운 이름을 붙이고 있어.",
						"english": "They're dividing up areas and giving them new names.",
						"japanese": "彼らは区域を分け、新しい名前をつけている。",
						"chinese": "他们正在划分区域，并给它们起新名字。",
						"french": "Ils divisent les zones et leur donnent de nouveaux noms.",
						"spanish": "Están dividiendo las áreas y dándoles nuevos nombres.",
						"vietnamese": "Họ đang chia khu vực và đặt tên mới cho chúng.",
						"thai": "พวกเขากำลังแบ่งเขตและตั้งชื่อใหม่",
						"hindi": "वे क्षेत्रों को बांट रहे हैं और उन्हें नए नाम दे रहे हैं।"
					},
					"type": "speech",
					"speaker": "lin"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "디지털 영향력으로? 말도 안 돼.",
						"english": "With digital influence? That's absurd.",
						"japanese": "デジタルな影響力で？ありえない。",
						"chinese": "用数字影响力？这太荒谬了。",
						"french": "Avec une influence numérique ? C'est absurde.",
						"spanish": "¿Con influencia digital? Eso es absurdo.",
						"vietnamese": "Bằng ảnh hưởng kỹ thuật số? Thật vô lý.",
						"thai": "ด้วยอิทธิพลทางดิจิทัลเหรอ? ไร้สาระ",
						"hindi": "डिजिटल प्रभाव से? यह बेतुका है।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "좋아요 수치로 영역을 결정하고 있어. 가장 잔인한 방식으로.",
						"english": "They're determining territories by like counts. In the most brutal way.",
						"japanese": "いいね数で領域を決めている。最も残忍な方法で。",
						"chinese": "他们正在用点赞数来决定领地。以最残忍的方式。",
						"french": "Ils déterminent les territoires par le nombre de likes. De la manière la plus brutale.",
						"spanish": "Están determinando los territorios por el número de 'me gusta'. De la manera más brutal.",
						"vietnamese": "Họ đang xác định lãnh thổ bằng số lượt thích. Theo cách tàn bạo nhất.",
						"thai": "พวกเขากำลังกำหนดอาณาเขตด้วยจำนวนยอดไลค์ ด้วยวิธีที่โหดร้ายที่สุด",
						"hindi": "वे लाइक्स की संख्या से क्षेत्रों का निर्धारण कर रहे हैं। सबसे क्रूर तरीके से।"
					},
					"type": "speech",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그럼 우리가 막지 않으면… 이 도시가 다…",
						"english": "If we don't stop them... this whole city...",
						"japanese": "私たちが止めなければ…この街は全て…",
						"chinese": "如果我们不阻止…这座城市就会…",
						"french": "Si nous ne les arrêtons pas... toute cette ville...",
						"spanish": "Si no los detenemos... toda esta ciudad...",
						"vietnamese": "Nếu chúng ta không ngăn chặn... toàn bộ thành phố này sẽ...",
						"thai": "ถ้าเราไม่หยุดพวกเขา... เมืองนี้ทั้งเมืองก็จะ...",
						"hindi": "अगर हम उन्हें नहीं रोकते... तो यह पूरा शहर..."
					},
					"speaker": "character_2"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "그래. 완전히 그들의 손에 들어갈 거야. 시한이 얼마 없어!",
						"english": "Yes. It'll fall completely into their hands. Time is running out!",
						"japanese": "ええ。完全に彼らの手中に落ちるでしょう。時間がない！",
						"chinese": "是的。它将彻底落入他们手中。时间不多了！",
						"french": "Oui. Elle tombera complètement entre leurs mains. Le temps est compté !",
						"spanish": "Sí. Caerá completamente en sus manos. ¡Se nos acaba el tiempo!",
						"vietnamese": "Phải. Nó sẽ hoàn toàn rơi vào tay bọn chúng. Không còn nhiều thời gian nữa!",
						"thai": "ใช่ มันจะตกอยู่ในมือของพวกเขาอย่างสมบูรณ์ เวลาเหลือน้อยแล้ว!",
						"hindi": "हाँ। यह पूरी तरह से उनके हाथों में पड़ जाएगा। समय बहुत कम है!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "lin",
					"spot": [
						3,
						3
					]
				},
				{
					"content": {
						"korean": "이곳이야. 버려진 서버실.",
						"english": "This is it. The abandoned server room.",
						"japanese": "ここだ。廃墟と化したサーバールーム。",
						"chinese": "就是这里。废弃的服务器机房。",
						"french": "C'est ici. La salle des serveurs abandonnée.",
						"spanish": "Aquí es. La sala de servidores abandonada.",
						"vietnamese": "Đây rồi. Phòng máy chủ bỏ hoang.",
						"thai": "ที่นี่แหละ ห้องเซิร์ฟเวอร์ร้าง",
						"hindi": "यह रहा। परित्यक्त सर्वर रूम।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "lin"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "여기서 뭘 찾을 수 있는데?",
						"english": "What can we find here?",
						"japanese": "ここで何が見つかるの？",
						"chinese": "我们能在这里找到什么？",
						"french": "Que pouvons-nous trouver ici ?",
						"spanish": "¿Qué podemos encontrar aquí?",
						"vietnamese": "Chúng ta có thể tìm thấy gì ở đây?",
						"thai": "เราจะเจออะไรที่นี่?",
						"hindi": "हमें यहाँ क्या मिल सकता है?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "봐. 이 디지털 쓰레기 파일들…",
						"english": "Look. These digital junk files...",
						"japanese": "見て。このデジタルゴミファイル…",
						"chinese": "看。这些数字垃圾文件…",
						"french": "Regarde. Ces fichiers numériques inutiles...",
						"spanish": "Mira. Estos archivos basura digitales...",
						"vietnamese": "Nhìn này. Mấy tập tin rác kỹ thuật số này...",
						"thai": "ดูสิ ไฟล์ขยะดิจิทัลพวกนี้...",
						"hindi": "देखो। ये डिजिटल जंक फाइलें..."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "lin"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "낡은 서버 모니터에 깨진 암호문 조각이 번개처럼 스쳐 지나갔다.",
						"english": "Fragments of a broken cipher flashed across the old server monitor like lightning.",
						"japanese": "古いサーバーモニターに、壊れた暗号文の断片が稲妻のように走り去った。",
						"chinese": "破碎的密码碎片像闪电般划过老旧的服务器显示器。",
						"french": "Des fragments d'un chiffre brisé ont traversé l'ancien moniteur de serveur comme un éclair.",
						"spanish": "Fragmentos de un cifrado roto destellaron como un rayo en el viejo monitor del servidor.",
						"vietnamese": "Những mảnh mã hóa bị hỏng lướt qua màn hình máy chủ cũ như chớp.",
						"thai": "เศษเสี้ยวของรหัสที่เสียหายปรากฏขึ้นบนจอมอนิเตอร์เซิร์ฟเวอร์เก่าราวกับสายฟ้าแลบ",
						"hindi": "टूटे हुए सिफर के टुकड़े पुराने सर्वर मॉनिटर पर बिजली की तरह चमक उठे।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…'영토 분할'… '조공'… 이게 다 현실이 되고 있어! 구조를 요청할게!",
						"english": "...'Territory division'... 'Tribute'... This is all becoming reality! I'll call for help!",
						"japanese": "...'領土分割'...'貢物'...これらが全て現実になろうとしている！助けを呼ぶ！",
						"chinese": "……‘领土分割’……‘进贡’……这些都正在成为现实！我去请求支援！",
						"french": "...'Division territoriale'... 'Tribut'... Tout cela devient réalité ! Je vais demander de l'aide !",
						"spanish": "...'División territorial'... 'Tributo'... ¡Todo esto se está haciendo realidad! ¡Pediré ayuda!",
						"vietnamese": "...'Phân chia lãnh thổ'... 'Cống nạp'... Tất cả điều này đang trở thành hiện thực! Tôi sẽ kêu gọi cứu viện!",
						"thai": "...'การแบ่งแยกดินแดน'... 'เครื่องบรรณาการ'... ทั้งหมดนี้กำลังกลายเป็นความจริง! ฉันจะเรียกความช่วยเหลือ!",
						"hindi": "...'क्षेत्र विभाजन'... 'श्रद्धांजलि'... यह सब सच हो रहा है! मैं मदद के लिए बुलाऊंगा!"
					}
				},
				{
					"spot": [
						4,
						4
					],
					"speaker": "random_boss",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "내부 고발? 넌 여기가 어디라고 생각하나.",
						"english": "Whistleblowing? Where do you think you are?",
						"japanese": "内部告発？ここをどこだと思っているんだ。",
						"chinese": "举报？你以为这里是什么地方？",
						"french": "Dénonciation ? Où crois-tu être ?",
						"spanish": "¿Denunciar? ¿Dónde crees que estás?",
						"vietnamese": "Tố cáo? Mày nghĩ đây là đâu?",
						"thai": "แจ้งเบาะแสเหรอ? นายคิดว่าที่นี่คือที่ไหนกัน?",
						"hindi": "व्हिसल ब्लोइंग? तुम्हें क्या लगता है कि तुम कहाँ हो?"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "린!",
						"english": "Lynn!",
						"japanese": "リン！",
						"chinese": "琳！",
						"french": "Lynn !",
						"spanish": "¡Lynn!",
						"vietnamese": "Lyn!",
						"thai": "ลินน์!",
						"hindi": "लिन!"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"speaker": "lin",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "내부 고발자 따위가 뭘 할 수 있겠나. 넌 그저 죽을 뿐.",
						"english": "What can a whistleblower do? You'll just die.",
						"japanese": "内部告発者ごときが何ができる。お前はただ死ぬだけだ。",
						"chinese": "一个告密者又能做什么？你只会死。",
						"french": "Que peut faire un dénonciateur ? Tu ne feras que mourir.",
						"spanish": "¿Qué puede hacer un soplón? Solo morirás.",
						"vietnamese": "Một kẻ tố cáo thì làm được gì? Ngươi chỉ có thể chết mà thôi.",
						"thai": "คนแฉเรื่องพวกนั้นจะทำอะไรได้? แกก็แค่ตายเท่านั้นแหละ",
						"hindi": "एक व्हिसल ब्लोअर क्या कर सकता है? तुम बस मरोगे।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "린에게서 떨어져!",
						"english": "Get away from Rin!",
						"japanese": "リンから離れろ！",
						"chinese": "离琳远点！",
						"french": "Éloigne-toi de Rin !",
						"spanish": "¡Aléjate de Rin!",
						"vietnamese": "Tránh xa Rin ra!",
						"thai": "ออกไปให้ห่างจากริน!",
						"hindi": "रिन से दूर रहो!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "이곳은 '{random_boss}'의 새로운 영토다. 감히 침범하려 들다니.",
						"english": "This is '{random_boss}'s new territory. How dare you trespass.",
						"japanese": "ここは'{random_boss}'の新たな領土だ。よくも侵入しようとしたな。",
						"chinese": "这里是“{random_boss}”的新领地。竟敢入侵。",
						"french": "C'est le nouveau territoire de '{random_boss}'. Comment oses-tu t'y aventurer.",
						"spanish": "Este es el nuevo territorio de '{random_boss}'. ¿Cómo te atreves a invadirlo?",
						"vietnamese": "Đây là lãnh thổ mới của '{random_boss}'. Sao ngươi dám xâm phạm.",
						"thai": "นี่คืออาณาเขตใหม่ของ '{random_boss}' แกกล้าดียังไงถึงบุกรุกเข้ามา.",
						"hindi": "यह '{random_boss}' का नया इलाका है। तुम्हारी हिम्मत कैसे हुई इसमें घुसने की।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "우린 널 막을 거야. 이 폭력도, 너희 패밀리도.",
						"english": "We'll stop you. This violence, and your family.",
						"japanese": "お前を止める。この暴力も、お前たちのファミリーも。",
						"chinese": "我们会阻止你。阻止这场暴力，以及你们的家族。",
						"french": "On va t'arrêter. Cette violence, et ta famille.",
						"spanish": "Te detendremos. Esta violencia, y a tu familia.",
						"vietnamese": "Chúng ta sẽ ngăn chặn ngươi. Cả bạo lực này, và gia đình của ngươi nữa.",
						"thai": "พวกเราจะหยุดแก. ทั้งความรุนแรงนี้ และครอบครัวของแกด้วย.",
						"hindi": "हम तुम्हें रोकेंगे। इस हिंसा को भी, और तुम्हारे परिवार को भी।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "'좋아요' 하나에 모든 것이 움직이는 세상에서… 폭력이야말로 가장 확실한 '좋아요'지.",
						"english": "In a world where everything moves for a single 'like'... violence is the most certain 'like' of all.",
						"japanese": "「いいね」ひとつで全てが動く世界で…暴力こそが最も確実な「いいね」だ。",
						"chinese": "在一个“点赞”就能驱动一切的世界里……暴力才是最可靠的“点赞”。",
						"french": "Dans un monde où tout bouge pour un seul \"like\"... la violence est le \"like\" le plus certain.",
						"spanish": "En un mundo donde todo se mueve por un solo 'me gusta'... la violencia es el 'me gusta' más seguro.",
						"vietnamese": "Trong một thế giới mà mọi thứ đều xoay quanh một 'like'... bạo lực chính là 'like' chắc chắn nhất.",
						"thai": "ในโลกที่ทุกสิ่งขับเคลื่อนด้วย 'ไลก์' เดียว… ความรุนแรงนี่แหละคือ 'ไลก์' ที่แน่นอนที่สุด.",
						"hindi": "ऐसी दुनिया में जहाँ सब कुछ एक 'लाइक' के लिए होता है... हिंसा ही सबसे पक्का 'लाइक' है।"
					},
					"emotion": "base"
				},
				{
					"direction": "down",
					"speaker": "lin",
					"type": "direction",
					"action": "exit",
					"duration_ms": 400
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "넌 구하지 못한다.",
						"english": "You can't save them.",
						"japanese": "お前には救えない。",
						"chinese": "你救不了他们。",
						"french": "Tu ne peux pas les sauver.",
						"spanish": "No puedes salvarlos.",
						"vietnamese": "Ngươi không thể cứu được họ đâu.",
						"thai": "แกช่วยพวกเขาไม่ได้หรอก.",
						"hindi": "तुम बचा नहीं पाओगे।"
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "크윽… 하지만 이건 시작일 뿐이다. '돈 인플루언서'님의 진짜 쇼는… 이제부터지.",
						"english": "Ugh… But this is just the beginning. 'Don Influencer's' real show… starts now.",
						"japanese": "くっ…だが、これは始まりに過ぎない。「ドン・インフルエンサー」様の本当のショーは…これからだ。",
						"chinese": "呃啊…但这仅仅是开始。“唐·网红”大人的真正好戏…才刚刚上演。",
						"french": "Argh… Mais ce n'est que le début. Le vrai spectacle de 'Don Influenceur'… commence maintenant.",
						"spanish": "Ugh… Pero esto es solo el principio. El verdadero espectáculo de 'Don Influencer'… empieza ahora.",
						"vietnamese": "Khụ… Nhưng đây mới chỉ là khởi đầu thôi. Màn trình diễn thật sự của 'Don Influencer'… giờ mới bắt đầu.",
						"thai": "อึก… แต่นี่เป็นเพียงแค่จุดเริ่มต้นเท่านั้น. โชว์ที่แท้จริงของ 'ดอน อินฟลูเอนเซอร์'… เพิ่งจะเริ่มต่างหาก.",
						"hindi": "उफ़… लेकिन यह तो बस शुरुआत है। 'डॉन इन्फ्लुएंसर' का असली शो… अब शुरू होगा।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "무슨 소리야! 돈 인플루언서가 더 큰 계획이 있다고?",
						"english": "What do you mean?! Don Influencer has a bigger plan?",
						"japanese": "何を言ってるんだ！ドン・インフルエンサーがもっと大きな計画を立てているとでも言うのか？",
						"chinese": "你说什么？！“唐·网红”有更大的计划？",
						"french": "Qu'est-ce que tu racontes ?! Don Influenceur a un plan plus grand ?",
						"spanish": "¿Qué dices? ¡Don Influencer tiene un plan más grande!",
						"vietnamese": "Ngươi nói gì cơ! Don Influencer có kế hoạch lớn hơn sao?",
						"thai": "หมายความว่าไง! ดอน อินฟลูเอนเซอร์มีแผนที่ใหญ่กว่านี้งั้นเหรอ?",
						"hindi": "क्या मतलब! डॉन इन्फ्लुएंसर की कोई बड़ी योजना है?"
					},
					"type": "speech"
				},
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "lin"
				},
				{
					"speaker": "lin",
					"emotion": "sad",
					"content": {
						"korean": "고마워… 하지만… 아직 끝난 게 아니야. 더 깊은 곳으로 가야 해.",
						"english": "Thank you… But… it's not over yet. We have to go deeper.",
						"japanese": "ありがとう…でも…まだ終わってない。もっと奥深くへ行かないと。",
						"chinese": "谢谢…但是…还没结束。我们必须深入下去。",
						"french": "Merci… Mais… ce n'est pas encore fini. Il faut aller plus loin.",
						"spanish": "Gracias… Pero… aún no ha terminado. Debemos ir más profundo.",
						"vietnamese": "Cảm ơn… Nhưng… vẫn chưa kết thúc đâu. Chúng ta phải đi sâu hơn nữa.",
						"thai": "ขอบคุณนะ… แต่ว่า… มันยังไม่จบแค่นี้หรอก. เราต้องไปให้ลึกกว่านี้.",
						"hindi": "शुक्रिया… लेकिन… अभी खत्म नहीं हुआ है। हमें और अंदर जाना होगा।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "새로운 영토는 피로 물들었지만, 진짜 '왕'은 아직 모습을 드러내지 않았다.",
						"english": "The new territory is stained with blood, but the true 'king' has yet to show himself.",
						"japanese": "新しい領土は血で染まったが、真の「王」はまだ姿を現していない。",
						"chinese": "新领地已染上鲜血，但真正的“王”尚未现身。",
						"french": "Le nouveau territoire est taché de sang, mais le vrai \"roi\" ne s'est pas encore montré.",
						"spanish": "El nuevo territorio está teñido de sangre, pero el verdadero 'rey' aún no se ha mostrado.",
						"vietnamese": "Lãnh thổ mới đã nhuốm máu, nhưng 'vị vua' thật sự vẫn chưa lộ diện.",
						"thai": "ดินแดนใหม่เปื้อนเลือด แต่ 'ราชา' ที่แท้จริงยังไม่ปรากฏตัว.",
						"hindi": "नया इलाका खून से सना है, लेकिन असली 'राजा' अभी तक सामने नहीं आया है।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "카운트다운은 멈추지 않았다. 오히려, 더욱 빠르게 흘러갔다.",
						"english": "The countdown didn't stop. Rather, it sped up even more.",
						"japanese": "カウントダウンは止まらなかった。むしろ、さらに速く進んだ。",
						"chinese": "倒计时并未停止。相反，它流逝得更快了。",
						"french": "Le compte à rebours ne s'est pas arrêté. Au contraire, il s'est accéléré.",
						"spanish": "La cuenta atrás no se detuvo. Al contrario, se aceleró aún más.",
						"vietnamese": "Đồng hồ đếm ngược không dừng lại. Ngược lại, nó còn trôi nhanh hơn nữa.",
						"thai": "การนับถอยหลังไม่ได้หยุดลง. ตรงกันข้าม, มันกลับเร็วขึ้นไปอีก.",
						"hindi": "उलटी गिनती रुकी नहीं। बल्कि, वह और तेज़ी से बढ़ने लगी।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 것들. 내 영토는 그렇게 쉽게 무너지지 않아.",
						"english": "Insolent fools. My domain will not fall so easily.",
						"japanese": "取るに足らない奴らめ。私の領土はそう簡単には崩れない。",
						"chinese": "卑微的蝼蚁。我的领地不会如此轻易地陷落。",
						"french": "Créatures insignifiantes. Mon domaine ne s'effondrera pas si facilement.",
						"spanish": "Seres insignificantes. Mi territorio no caerá tan fácilmente.",
						"vietnamese": "Lũ hèn mọn. Lãnh thổ của ta sẽ không dễ dàng sụp đổ vậy đâu.",
						"thai": "พวกไร้ค่า ดินแดนของข้าไม่อาจล่มสลายง่ายๆ หรอก",
						"hindi": "तुच्छ प्राणी। मेरा साम्राज्य इतनी आसानी से नहीं गिरेगा。"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "젠장… 아직… 포기 안 해!",
						"english": "Damn it... Not yet... I won't give up!",
						"japanese": "ちくしょう… まだだ… 諦めない！",
						"chinese": "该死… 还没… 我不会放弃！",
						"french": "Maudits... Pas encore... Je n'abandonnerai pas !",
						"spanish": "Maldita sea... ¡Todavía no... No me rendiré!",
						"vietnamese": "Chết tiệt... Vẫn chưa... Ta sẽ không bỏ cuộc!",
						"thai": "ให้ตายสิ... ยัง... ข้าไม่ยอมแพ้!",
						"hindi": "धिक्कार है... अभी नहीं... मैं हार नहीं मानूंगा!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "lin",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "lin",
					"emotion": "sad",
					"content": {
						"korean": "안 돼… 이러다 모두… 끝이야…",
						"english": "No... This can't be... It's all over...",
						"japanese": "だめだ… このままじゃ全部… 終わりだ…",
						"chinese": "不行… 这样下去… 一切都… 完了…",
						"french": "Non... Si ça continue... Tout est fini...",
						"spanish": "No... Así... Todo... se acabó...",
						"vietnamese": "Không... Cứ thế này thì tất cả... sẽ kết thúc mất...",
						"thai": "ไม่นะ... ถ้าเป็นแบบนี้... ทุกอย่าง... จบสิ้นแล้ว...",
						"hindi": "नहीं... ऐसे तो सब कुछ... खत्म हो जाएगा..."
					},
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"좋아요와 구독이 피로 물들기 시작했다.",
			"디지털 제국 뒤에 숨겨진 잔혹한 본성.",
			"'패밀리'는 이제, 폭력이었다.",
			"옛 영토는, 새로운 이름으로 재편되고 있었다.",
			"숨 막히는 진실이, 버려진 서버실에서 절규한다."
		],
		"english": [
			"Likes and subs began to bleed.",
			"The cruel truth behind the digital empire.",
			"'Family' now meant violence.",
			"Old territories, reborn with new names.",
			"A suffocating truth screams in the abandoned server room."
		],
		"japanese": [
			"いいねとチャンネル登録が血に染まり始めた。",
			"デジタル帝国の裏に隠された残酷な真実。",
			"「ファミリー」は今や、暴力だった。",
			"旧領土は、新しい名前で再編されていた。",
			"息詰まる真実が、廃墟となったサーバー室で叫ぶ。"
		],
		"chinese": [
			"点赞和订阅开始被鲜血染红。",
			"隐藏在数字帝国背后的残酷真相。",
			"“家庭”现在意味着暴力。",
			"旧领土，正以新的名称重组。",
			"令人窒息的真相，在废弃的服务器机房里尖叫。"
		],
		"french": [
			"Les likes et les abonnements ont commencé à saigner.",
			"La cruelle vérité derrière l'empire numérique.",
			"La 'Famille' signifiait désormais violence.",
			"Les anciens territoires, renaissaient sous de nouveaux noms.",
			"Une vérité étouffante hurle dans la salle des serveurs abandonnée."
		],
		"spanish": [
			"Los 'me gusta' y las suscripciones empezaron a sangrar.",
			"La cruel verdad oculta tras el imperio digital.",
			"La 'Familia' ahora significaba violencia.",
			"Los antiguos territorios, renacían con nuevos nombres.",
			"Una verdad sofocante grita en la sala de servidores abandonada."
		],
		"vietnamese": [
			"Lượt thích và đăng ký bắt đầu nhuốm máu.",
			"Sự thật tàn khốc ẩn sau đế chế kỹ thuật số.",
			"'Gia đình' giờ đây là bạo lực.",
			"Lãnh thổ cũ, tái sinh với tên mới.",
			"Một sự thật nghẹt thở gào thét trong phòng máy chủ bị bỏ hoang."
		],
		"thai": [
			"ยอดไลค์และการติดตามเริ่มแปดเปื้อนเลือด",
			"ความจริงอันโหดร้ายที่ซ่อนอยู่เบื้องหลังอาณาจักรดิจิทัล",
			"'ครอบครัว' ตอนนี้หมายถึงความรุนแรง",
			"ดินแดนเก่าถูกเปลี่ยนชื่อใหม่",
			"ความจริงที่น่าอึดอัดกรีดร้องอยู่ในห้องเซิร์ฟเวอร์ร้าง"
		],
		"hindi": [
			"लाइक और सब्सक्रिप्शन खून से रंगने लगे थे।",
			"डिजिटल साम्राज्य के पीछे छिपा क्रूर सत्य।",
			"'परिवार' का मतलब अब हिंसा था।",
			"पुराने क्षेत्र, नए नामों से पुनर्जीवित हो रहे थे।",
			"एक दम घोंटने वाला सच, छोड़े गए सर्वर रूम में चीखता है।"
		]
	}
} as const;
