export const scenario_modern_swift_50_02 = {
	"scenario_id": "modern_swift_50_02",
	"order": 2,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"kai": {
			"id": "mon_d7f29313-b8fb-49da-9a1a-01df5d13866e",
			"name": {
				"korean": "카이",
				"english": "Kai",
				"japanese": "カイ",
				"chinese": "凯",
				"french": "Kai",
				"spanish": "Kai",
				"vietnamese": "Kai",
				"thai": "ไค",
				"hindi": "काई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f10d9184-4155-4bb9-de2d-db61463f7c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e41f8e03-08c9-4a4f-6f72-fa9342876f00/public"
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
						"korean": "어두운 지하, 폐쇄된 물류창고. 퀵 실버의 수상한 배달 경로를 쫓아 도착한 곳.",
						"english": "Dark underground, an abandoned warehouse. This is where Quick Silver's suspicious delivery route led me.",
						"japanese": "暗い地下、閉鎖された物流倉庫。クイックシルバーの怪しい配送経路を追って辿り着いた場所。",
						"chinese": "黑暗的地下，废弃的仓库。追踪奎克银可疑的运送路线，我来到了这里。",
						"french": "Un sous-sol sombre, un entrepôt abandonné. L'endroit où la route de livraison suspecte de Quick Silver m'a mené.",
						"spanish": "Un sótano oscuro, un almacén abandonado. Aquí llegué siguiendo la sospechosa ruta de entrega de Quick Silver.",
						"vietnamese": "Hầm tối, một nhà kho bị bỏ hoang. Đây là nơi tôi đến, theo dõi lộ trình giao hàng đáng ngờ của Quick Silver.",
						"thai": "ใต้ดินที่มืดมิด คลังสินค้าที่ถูกปิดตาย ที่นี่คือที่ที่ฉันตามรอยเส้นทางการจัดส่งที่น่าสงสัยของควิกซิลเวอร์มาถึง",
						"hindi": "अंधेरा तहखाना, एक बंद गोदाम। क्विक सिल्वर के संदिग्ध वितरण मार्ग का पीछा करते हुए यहां पहुंचा।"
					}
				},
				{
					"content": {
						"korean": "여기가… 퀵 실버가 말한 '비밀 창고'인가?",
						"english": "Is this... Quick Silver's \"secret warehouse\"?",
						"japanese": "ここが…クイックシルバーが言っていた「秘密の倉庫」なのか？",
						"chinese": "这里是……奎克银所说的“秘密仓库”吗？",
						"french": "Est-ce... l'\"entrepôt secret\" de Quick Silver ?",
						"spanish": "¿Es este... el \"almacén secreto\" de Quick Silver?",
						"vietnamese": "Đây có phải... \"nhà kho bí mật\" mà Quick Silver nói đến không?",
						"thai": "ที่นี่... คือ \"คลังสินค้าลับ\" ที่ควิกซิลเวอร์พูดถึงเหรอ?",
						"hindi": "क्या यह... क्विक सिल्वर का 'गुप्त गोदाम' है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"spot": [
						3,
						2
					],
					"speaker": "kai",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "여기까지 찾아오다니. 제법인데.",
						"english": "To find your way here. Impressive.",
						"japanese": "ここまで辿り着くとはな。なかなかやるじゃないか。",
						"chinese": "竟然能找到这里。干得不错嘛。",
						"french": "Parvenir jusqu'ici. Impressionnant.",
						"spanish": "Llegar hasta aquí. Impresionante.",
						"vietnamese": "Tìm được đến đây. Cũng không tệ.",
						"thai": "อุตส่าห์ตามหามาถึงนี่ได้ เก่งไม่เบา",
						"hindi": "यहां तक पहुंच गए। काफी अच्छा है।"
					},
					"speaker": "kai",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "누구야?",
						"english": "Who are you?",
						"japanese": "誰だ？",
						"chinese": "你是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "ใครน่ะ?",
						"hindi": "तुम कौन हो?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "정보상 카이. 너희가 찾는 진실을 아는 자.",
						"english": "Kai, the informant. The one who knows the truth you seek.",
						"japanese": "情報屋カイだ。お前たちが探している真実を知る者。",
						"chinese": "情报贩子凯。知道你们所寻求的真相之人。",
						"french": "Kai, l'informateur. Celui qui connaît la vérité que vous cherchez.",
						"spanish": "Kai, el informante. Quien conoce la verdad que buscáis.",
						"vietnamese": "Kai, kẻ cung cấp thông tin. Kẻ biết sự thật mà các ngươi tìm kiếm.",
						"thai": "ไค พ่อค้าข้อมูล ผู้ที่รู้ความจริงที่พวกเจ้าตามหา",
						"hindi": "जानकारी देने वाला काई। वह जो तुम जिस सच्चाई को खोज रहे हो, जानता है।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "kai"
				},
				{
					"content": {
						"korean": "'블러드 드라이버즈'… 들어봤나?",
						"english": "'Blood Drivers'... Heard of them?",
						"japanese": "「ブラッドドライバーズ」…聞いたことあるか？",
						"chinese": "“血腥车手”…听说过吗？",
						"french": "'Blood Drivers'... Tu en as entendu parler ?",
						"spanish": "'Blood Drivers'... ¿Has oído hablar de ellos?",
						"vietnamese": "'Blood Drivers'... Nghe nói rồi chứ?",
						"thai": "'บลัด ไดรเวอร์ส'... เคยได้ยินไหม?",
						"hindi": "'ब्लड ड्राइवर्स'... सुना है इनके बारे में?"
					},
					"speaker": "kai",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그게 뭔데?",
						"english": "What's that?",
						"japanese": "それって何？",
						"chinese": "那是什么？",
						"french": "C'est quoi ?",
						"spanish": "¿Qué es eso?",
						"vietnamese": "Cái đó là gì?",
						"thai": "นั่นมันอะไร?",
						"hindi": "वह क्या है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "오래 전, 도시를 쥐락펴락했던 마피아 조직이지. 퀵 실버도 거기 연루되어 있었어.",
						"english": "A mafia that once ruled the city. Quick Silver was involved.",
						"japanese": "昔、この街を牛耳っていたマフィア組織だ。クイックシルバーも関わっていた。",
						"chinese": "很久以前，一个掌控着这座城市的黑手党组织。快银也与他们有所牵连。",
						"french": "Il y a longtemps, une organisation mafieuse qui tenait la ville. Quick Silver y était aussi impliqué.",
						"spanish": "Hace mucho tiempo, una organización mafiosa que controlaba la ciudad. Quick Silver también estuvo involucrado.",
						"vietnamese": "Một tổ chức mafia đã thao túng thành phố từ lâu. Quick Silver cũng dính líu đến bọn chúng.",
						"thai": "นานมาแล้ว องค์กรมาเฟียที่ควบคุมเมือง ควิดซิลเวอร์ก็พัวพันกับพวกนั้นด้วย",
						"hindi": "बहुत पहले, एक माफिया संगठन जिसने शहर को नियंत्रित किया था। क्विक सिल्वर भी उनमें शामिल था।"
					},
					"speaker": "kai",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "말도 안 돼! 퀵 실버는… 영웅이야!",
						"english": "No way! Quick Silver is... a hero!",
						"japanese": "馬鹿な！クイックシルバーは…英雄だ！",
						"chinese": "不可能！快银是…英雄！",
						"french": "Impossible ! Quick Silver est... un héros !",
						"spanish": "¡No puede ser! Quick Silver es... ¡un héroe!",
						"vietnamese": "Không thể nào! Quick Silver là… một anh hùng!",
						"thai": "ไม่จริง! ควิดซิลเวอร์คือ... ฮีโร่!",
						"hindi": "नामुमकिन! क्विक सिल्वर... एक हीरो है!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "영웅? 피 묻은 손으로 만든 영웅이라면 모를까.",
						"english": "A hero? Only if he's a hero with blood on his hands.",
						"japanese": "英雄？血塗られた手で作り上げられた英雄ならな。",
						"chinese": "英雄？除非是双手沾满鲜血的英雄。",
						"french": "Un héros ? À moins que ce ne soit un héros fait de mains ensanglantées.",
						"spanish": "¿Un héroe? A menos que sea un héroe con las manos manchadas de sangre.",
						"vietnamese": "Anh hùng? Trừ khi là anh hùng tạo ra bằng đôi tay nhuốm máu.",
						"thai": "ฮีโร่? ถ้าเป็นฮีโร่ที่สร้างขึ้นจากมือที่เปื้อนเลือดก็ว่าไปอย่าง",
						"hindi": "हीरो? केवल तभी जब वह खून से सने हाथों से बना हीरो हो।"
					},
					"speaker": "kai"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "거짓말 마!",
						"english": "Don't lie!",
						"japanese": "嘘つくな！",
						"chinese": "别撒谎！",
						"french": "Ne mens pas !",
						"spanish": "¡No mientas!",
						"vietnamese": "Đừng có nói dối!",
						"thai": "อย่าโกหก!",
						"hindi": "झूठ मत बोलो!"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "kai",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "퀵 실버가 도시를 장악하려는 진짜 이유를 몰라서 하는 소리야.",
						"english": "You say that because you don't know why Quick Silver really wants the city.",
						"japanese": "クイックシルバーが街を掌握しようとする本当の理由を知らないから、そんなことが言えるんだ。",
						"chinese": "你之所以这么说，是因为你不知道快银想要掌控这座城市的真正原因。",
						"french": "Tu dis ça parce que tu ne connais pas la vraie raison pour laquelle Quick Silver veut prendre le contrôle de la ville.",
						"spanish": "Dices eso porque no conoces la verdadera razón por la que Quick Silver quiere apoderarse de la ciudad.",
						"vietnamese": "Ngươi nói vậy là vì ngươi không biết lý do thật sự Quick Silver muốn chiếm giữ thành phố này.",
						"thai": "นายพูดอย่างนั้นเพราะนายไม่รู้เหตุผลที่แท้จริงที่ควิดซิลเวอร์ต้องการยึดครองเมือง",
						"hindi": "तुम यह इसलिए कह रहे हो क्योंकि तुम्हें नहीं पता कि क्विक सिल्वर शहर पर कब्ज़ा करने की असली वजह क्या है।"
					},
					"speaker": "kai",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…닥쳐.",
						"english": "...Shut up.",
						"japanese": "…黙れ。",
						"chinese": "……闭嘴。",
						"french": "...Tais-toi.",
						"spanish": "...Cállate.",
						"vietnamese": "…Im đi.",
						"thai": "...หุบปาก",
						"hindi": "...चुप रहो।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "그때였다. 배달 앱에서 기계적인 '배달 완료' 음성이 울렸다.",
						"english": "Then, the delivery app blared 'Delivery Complete'.",
						"japanese": "その時だった。配達アプリから機械的な「配達完了」の音声が響いた。",
						"chinese": "就在那时，外卖应用传来了机械的“配送完成”提示音。",
						"french": "C'est alors que l'application de livraison émit une voix mécanique disant : « Livraison terminée ».",
						"spanish": "Fue entonces. La aplicación de entrega emitió un sonido mecánico de 'Entrega completada'.",
						"vietnamese": "Lúc đó, một giọng nói máy móc \"Đã giao hàng\" vang lên từ ứng dụng giao hàng.",
						"thai": "ตอนนั้นเอง เสียง \"ส่งของเรียบร้อย\" แบบเครื่องจักรก็ดังขึ้นจากแอปส่งของ",
						"hindi": "तभी, डिलीवरी ऐप से एक यांत्रिक 'डिलीवरी पूरी' की आवाज़ आई।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "주변 배달원들의 눈빛이 순간, 공허하게 변했다. 마치 영혼이 빠져나간 듯.",
						"english": "The delivery drivers' eyes instantly went blank, as if their souls had been drained.",
						"japanese": "周囲の配達員たちの目が、一瞬で虚ろに変わった。まるで魂が抜け落ちたかのように。",
						"chinese": "周围的配送员们的眼神瞬间变得空洞。仿佛灵魂被抽离了一般。",
						"french": "Les yeux des livreurs autour d'eux devinrent instantanément vides. Comme si leurs âmes s'étaient échappées.",
						"spanish": "Los ojos de los repartidores cercanos se volvieron instantáneamente vacíos. Como si sus almas hubieran sido succionadas.",
						"vietnamese": "Ánh mắt của những người giao hàng xung quanh bỗng chốc trở nên trống rỗng. Cứ như thể linh hồn đã bị hút cạn.",
						"thai": "สายตาของพนักงานส่งของรอบข้างพลันว่างเปล่าในพริบตา ราวกับวิญญาณหลุดลอยไป",
						"hindi": "आस-पास के डिलीवरी ड्राइवरों की आँखें पल भर में खाली हो गईं। मानो उनकी आत्मा निकल गई हो।"
					}
				},
				{
					"content": {
						"korean": "…이건… 대체 뭐야?",
						"english": "...What... what is this?",
						"japanese": "…これ…一体何？",
						"chinese": "……这……到底是什么？",
						"french": "...Qu'est-ce que... c'est que ça ?",
						"spanish": "...Qué... qué demonios es esto?",
						"vietnamese": "...Cái... cái quái gì thế này?",
						"thai": "...นี่มัน... อะไรกันแน่?",
						"hindi": "...यह... आख़िर क्या है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "봤지? 퀵 실버의 또 다른 얼굴.",
						"english": "See? Quick Silver's other face.",
						"japanese": "見たか？ クイックシルバーのもう一つの顔だ。",
						"chinese": "看到了吧？快银的另一面。",
						"french": "Tu vois ? L'autre visage de Quick Silver.",
						"spanish": "¿Lo ves? La otra cara de Quick Silver.",
						"vietnamese": "Thấy chưa? Bộ mặt khác của Quick Silver.",
						"thai": "เห็นไหม? อีกด้านหนึ่งของควิกซิลเวอร์.",
						"hindi": "देखा? क्विक सिल्वर का दूसरा चेहरा।"
					},
					"speaker": "kai"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "내가… 뭘 잘못 알고 있는 거지…?",
						"english": "What... what have I misunderstood...?",
						"japanese": "私…何を誤解していたんだ…？",
						"chinese": "我……到底误解了什么……？",
						"french": "Qu'est-ce que... qu'est-ce que j'ai mal compris... ?",
						"spanish": "¿Qué... qué he entendido mal...?",
						"vietnamese": "Mình... đã hiểu lầm điều gì sao...?",
						"thai": "ฉัน... เข้าใจอะไรผิดไปงั้นเหรอ...?",
						"hindi": "मैंने... क्या ग़लत समझा है...?"
					},
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "kai",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "이제 믿겠어? 네가 따르던 영웅의 실체를.",
						"english": "Now do you believe? The true nature of the hero you followed.",
						"japanese": "今なら信じるか？ お前が従っていた英雄の正体を。",
						"chinese": "现在相信了吧？你所追随的英雄的真面目。",
						"french": "Alors, tu crois maintenant ? La vraie nature du héros que tu suivais.",
						"spanish": "¿Ahora lo crees? La verdadera naturaleza del héroe al que seguías.",
						"vietnamese": "Giờ thì tin chưa? Bộ mặt thật của người anh hùng mà ngươi đã theo.",
						"thai": "ตอนนี้เชื่อหรือยัง? ตัวตนที่แท้จริงของวีรบุรุษที่เจ้าติดตาม.",
						"hindi": "अब मानोगे? उस नायक का असली चेहरा, जिसका तुम अनुसरण करते थे।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "시끄러워! 난… 아무것도 모르겠어…!",
						"english": "Quiet! I... I don't know anything...!",
						"japanese": "うるさい！ 私には…何もわからない…！",
						"chinese": "闭嘴！我……什么都不知道……！",
						"french": "Tais-toi ! Je... je ne comprends rien... !",
						"spanish": "¡Cállate! Yo... ¡no sé nada...!",
						"vietnamese": "Im đi! Tôi... tôi không hiểu gì hết...!",
						"thai": "หุบปาก! ฉัน... ฉันไม่รู้อะไรเลย...!",
						"hindi": "चुप रहो! मैं... मुझे कुछ समझ नहीं आ रहा...!"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그의 미소를 믿었는데… 내가 죄책감에 미쳐가는 건가.",
						"english": "I trusted his smile... Am I going mad with guilt?",
						"japanese": "彼の笑顔を信じていたのに…私が罪悪感で狂っていくのか。",
						"chinese": "我曾相信他的笑容……难道我正因罪恶感而发疯吗？",
						"french": "J'ai cru en son sourire... Est-ce que je deviens fou de culpabilité ?",
						"spanish": "Confiaba en su sonrisa... ¿Me estoy volviendo loco de culpa?",
						"vietnamese": "Tôi đã tin nụ cười của hắn... Hay tôi đang phát điên vì tội lỗi?",
						"thai": "ฉันเชื่อในรอยยิ้มของเขา... ฉันกำลังบ้าคลั่งด้วยความรู้สึกผิดงั้นหรือ?",
						"hindi": "मैंने उसकी मुस्कान पर भरोसा किया था... क्या मैं अपराधबोध से पागल हो रहा हूँ?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "진실은 언제나 불편한 법. 선택은 네 몫이야.",
						"english": "The truth is always inconvenient. The choice is yours.",
						"japanese": "真実は常に不都合なもの。選択はお前に委ねられている。",
						"chinese": "真相总是令人不适。选择权在你。",
						"french": "La vérité est toujours dérangeante. Le choix t'appartient.",
						"spanish": "La verdad siempre es incómoda. La elección es tuya.",
						"vietnamese": "Sự thật luôn khó chịu. Lựa chọn là của ngươi.",
						"thai": "ความจริงมักจะอึดอัดเสมอ ทางเลือกเป็นของเจ้า.",
						"hindi": "सच हमेशा असुविधाजनक होता है। चुनाव तुम्हारा है।"
					},
					"speaker": "kai",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "난… 어쩌면 처음부터… 길을 잃었는지도.",
						"english": "Perhaps... I was lost... from the very beginning.",
						"japanese": "私…もしかしたら最初から…道に迷っていたのかもしれない。",
						"chinese": "我……或许从一开始……就迷失了方向。",
						"french": "Peut-être... que je m'étais égaré... dès le début.",
						"spanish": "Yo... quizás desde el principio... me había perdido.",
						"vietnamese": "Tôi... có lẽ ngay từ đầu... đã lạc lối rồi.",
						"thai": "ฉัน... อาจจะหลงทาง... ตั้งแต่แรกแล้วก็ได้.",
						"hindi": "मैं... शायद शुरू से ही... भटक गया था।"
					},
					"speaker": "character_any"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "어둠 속에서 거대한 그림자가 일렁였다. 퀵 실버의 배후에 도사린 어둠이 형체를 드러냈다.",
						"english": "A giant shadow flickered in the darkness. The darkness lurking behind Quick Silver revealed its form.",
						"japanese": "闇の中で巨大な影が揺らめいた。クイックシルバーの背後に潜む闇がその姿を現した。",
						"chinese": "黑暗中，巨大的身影晃动着。潜伏在快银背后的黑暗显露了形体。",
						"french": "Une ombre gigantesque vacillait dans l'obscurité. L'obscurité tapis derrière Quick Silver révéla sa forme.",
						"spanish": "Una sombra gigantesca se agitó en la oscuridad. La oscuridad que acechaba detrás de Quick Silver reveló su forma.",
						"vietnamese": "Trong bóng tối, một cái bóng khổng lồ chập chờn. Bóng tối ẩn nấp phía sau Quick Silver đã hiện nguyên hình.",
						"thai": "เงาขนาดมหึมาพลิ้วไหวในความมืด ความมืดที่ซ่อนอยู่เบื้องหลังควิกซิลเวอร์ได้ปรากฏกายขึ้น.",
						"hindi": "अंधेरे में एक विशाल छाया लहराई। क्विक सिल्वर के पीछे छिपी अंधकार ने अपना रूप दिखाया।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "여기까지 오다니… 제법이군.",
						"english": "To come this far... Impressive.",
						"japanese": "ここまで来るとは…なかなかやるな。",
						"chinese": "竟然能到这里……真不赖。",
						"french": "Être arrivé jusqu'ici... Pas mal.",
						"spanish": "Llegar hasta aquí... Nada mal.",
						"vietnamese": "Đến được đây... Cũng khá đấy.",
						"thai": "มาได้ถึงขนาดนี้... ไม่เลวเลย.",
						"hindi": "यहाँ तक आ पहुँचे... प्रभावशाली।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "네가… 블러드 드라이버즈의 잔당인가?",
						"english": "You... are a remnant of the Blood Drivers?",
						"japanese": "「お前が… ブラッドドライバーズの残党か？」",
						"chinese": "「你…是血之驱策者组织的残党？」",
						"french": "« Vous… êtes un vestige des Blood Drivers ? »",
						"spanish": "« ¿Tú… eres un remanente de los Blood Drivers? »",
						"vietnamese": "« Ngươi… là tàn dư của Blood Drivers sao? »",
						"thai": "「แก… คือเศษซากของ Blood Drivers สินะ?」",
						"hindi": "« तुम… ब्लड ड्राइवर्स के अवशेष हो? »"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "감히 그 이름을 입에 올리다니. 대가를 치러야 할 거다.",
						"english": "How dare you speak that name. You'll pay dearly.",
						"japanese": "「よくもその名を口にしたな。代償を払ってもらうぞ。」",
						"chinese": "「竟敢说出那个名字。你将付出代价。」",
						"french": "« Comment oses-tu prononcer ce nom. Tu vas le regretter. »",
						"spanish": "« ¡Cómo te atreves a mencionar ese nombre! Pagarás por ello. »",
						"vietnamese": "« Dám nhắc đến cái tên đó. Ngươi sẽ phải trả giá. »",
						"thai": "「บังอาจเอ่ยชื่อนั้นรึ แกต้องชดใช้!」",
						"hindi": "« हिम्मत कैसे हुई तुम्हारी उसका नाम लेने की। तुम्हें कीमत चुकानी होगी। »"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "퀵 실버의 추악한 진실을 덮으려는 건 용납 못 해!",
						"english": "I won't let you cover up Quick Silver's ugly truth!",
						"japanese": "「クイックシルバーの忌まわしい真実を隠蔽するなんて、許さない！」",
						"chinese": "「我绝不允许你掩盖急速白银的丑陋真相！」",
						"french": "« Je ne tolérerai pas que vous dissimuliez l'immonde vérité de Quick Silver ! »",
						"spanish": "« ¡No permitiré que encubras la horrible verdad de Quick Silver! »",
						"vietnamese": "« Tôi không thể dung thứ cho việc che đậy sự thật ghê tởm của Quick Silver! »",
						"thai": "「ฉันไม่ยอมให้พวกแกปิดบังความจริงอันน่ารังเกียจของควิกซิลเวอร์หรอก!」",
						"hindi": "« मैं क्विक सिल्वर की बदसूरत सच्चाई को छिपाने की तुम्हारी कोशिश बर्दाश्त नहीं करूंगा! »"
					},
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "kai"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "저 자를 쓰러뜨려야 해. 퀵 실버의 어둠을 완전히 끊어내려면.",
						"english": "I must defeat them. To sever Quick Silver's darkness completely.",
						"japanese": "「あやつを倒さねば。クイックシルバーの闇を完全に断ち切るために。」",
						"chinese": "「我必须打倒他。才能彻底斩断急速白银的黑暗。」",
						"french": "« Je dois l'abattre. Pour couper court à l'ombre de Quick Silver. »",
						"spanish": "« Debo derribarlo. Para cortar por completo la oscuridad de Quick Silver. »",
						"vietnamese": "« Phải hạ gục hắn. Để cắt đứt hoàn toàn bóng tối của Quick Silver. »",
						"thai": "「ต้องโค่นหมอนั่นให้ได้ เพื่อตัดขาดความมืดมิดของควิกซิลเวอร์ให้สิ้นซาก」",
						"hindi": "« मुझे उसे हराना होगा। क्विक सिल्वर के अंधेरे को पूरी तरह खत्म करने के लिए। »"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"direction": "down",
					"action": "exit",
					"speaker": "kai",
					"duration_ms": 400
				},
				{
					"content": {
						"korean": "잔소리가 많군. 곧 죽을 자가.",
						"english": "So much talk for a dying man.",
						"japanese": "「よく喋るな。すぐ死ぬくせに。」",
						"chinese": "「一个将死之人，废话真多。」",
						"french": "« Tu jacasses beaucoup. Pour quelqu'un qui va mourir. »",
						"spanish": "« Demasiadas palabras para un moribundo. »",
						"vietnamese": "« Nói nhiều quá. Kẻ sắp chết. »",
						"thai": "「ช่างพูดมากนัก สำหรับคนใกล้ตาย」",
						"hindi": "« बहुत बकवास कर रहे हो। एक मरने वाले के लिए। »"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "죽을 사람은… 너야!",
						"english": "The one who dies... is you!",
						"japanese": "「死ぬのは… お前の方だ！」",
						"chinese": "「该死的人…是你！」",
						"french": "« Celui qui mourra… c'est toi ! »",
						"spanish": "« ¡El que morirá… eres tú! »",
						"vietnamese": "« Kẻ sẽ chết… là ngươi! »",
						"thai": "「คนที่จะตาย… คือแกต่างหาก!」",
						"hindi": "« मरने वाला… तुम हो! »"
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 어리석은… {random_boss}는… 하나의 수단일 뿐…!",
						"english": "Urgh... Foolish... {random_boss} is... merely a means...!",
						"japanese": "「くっ… 愚かな… {random_boss}は… ただの手段にすぎん…！」",
						"chinese": "「呃…愚蠢…{random_boss}只是…一个手段而已…！」",
						"french": "« Ugh… Imbécile… {random_boss} n'est… qu'un moyen… ! »",
						"spanish": "« Ugh… Tonto… ¡{random_boss} es… solo un medio…! »",
						"vietnamese": "« Khặc… Ngốc nghếch… {random_boss} chỉ là… một phương tiện…! »",
						"thai": "「อึก… โง่เขลา… {random_boss} เป็นแค่… เครื่องมือเท่านั้น…!」",
						"hindi": "« उफ़… मूर्ख… {random_boss} तो… बस एक साधन है…! »"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "퀵 실버의 계획은… 막을 수 없어…!",
						"english": "Quick Silver's plan... cannot be stopped...!",
						"japanese": "「クイックシルバーの計画は… 止められん…！」",
						"chinese": "「急速白银的计划…无法阻止…！」",
						"french": "« Le plan de Quick Silver… est inarrêtable… ! »",
						"spanish": "« ¡El plan de Quick Silver… no puede ser detenido…! »",
						"vietnamese": "« Kế hoạch của Quick Silver… không thể ngăn cản…! »",
						"thai": "「แผนของควิกซิลเวอร์… ไม่อาจหยุดยั้งได้…!」",
						"hindi": "« क्विक सिल्वर की योजना… रोकी नहीं जा सकती…! »"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "닥쳐! 네가 뭘 아는데!",
						"english": "Shut up! What do you know?!",
						"japanese": "「黙れ！お前に何がわかる！」",
						"chinese": "「闭嘴！你懂什么！」",
						"french": "« Tais-toi ! Qu'en sais-tu ?! »",
						"spanish": "« ¡Cállate! ¡¿Qué sabes tú?! »",
						"vietnamese": "« Im đi! Ngươi biết gì mà nói! »",
						"thai": "「หุบปาก! แกรู้อะไร!」",
						"hindi": "« चुप रहो! तुम क्या जानते हो! »"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "괴물은 쓰러졌지만, 승리의 기쁨은 찾아오지 않았다.",
						"english": "The monster fell, but no joy of victory came.",
						"japanese": "「怪物は倒れたが、勝利の喜びは訪れなかった。」",
						"chinese": "「怪物倒下了，但胜利的喜悦并未降临。」",
						"french": "« Le monstre est tombé, mais la joie de la victoire ne s'est pas manifestée. »",
						"spanish": "« El monstruo cayó, pero la alegría de la victoria no llegó. »",
						"vietnamese": "« Quái vật đã gục ngã, nhưng niềm vui chiến thắng không đến. »",
						"thai": "「สัตว์ประหลาดล้มลงแล้ว แต่ความปิติแห่งชัยชนะยังไม่มาเยือน」",
						"hindi": "« राक्षस गिर गया, लेकिन जीत की खुशी नहीं आई। »"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "퀵 실버의 진짜 음모는, 이제부터 시작이었다.",
						"english": "Quick Silver's true plot was just beginning.",
						"japanese": "クイックシルバーの真の陰謀は、ここから始まったのだ。",
						"chinese": "快银的真正阴谋，现在才刚刚开始。",
						"french": "La véritable machination de Quick Silver ne faisait que commencer.",
						"spanish": "La verdadera conspiración de Quick Silver apenas comenzaba.",
						"vietnamese": "Âm mưu thực sự của Quick Silver, bây giờ mới bắt đầu.",
						"thai": "แผนการที่แท้จริงของควิกซิลเวอร์ เพิ่งจะเริ่มต้นขึ้นตอนนี้",
						"hindi": "क्विक सिल्वर की असली साज़िश तो अब शुरू हुई थी।"
					}
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "하찮은 것… 퀵 실버의 그림자는… 네 상상 이상이다…",
						"english": "Insignificant being... Quick Silver's shadow... is beyond your imagination...",
						"japanese": "取るに足らぬ者め… クイックシルバーの影は… お前の想像をはるかに超える…",
						"chinese": "渺小的东西… 快银的阴影… 远超你的想象…",
						"french": "Misérable… L'ombre de Quick Silver… dépasse ton imagination…",
						"spanish": "Criatura insignificante... La sombra de Quick Silver... está más allá de tu imaginación...",
						"vietnamese": "Thứ thấp hèn… Cái bóng của Quick Silver… vượt xa sức tưởng tượng của ngươi…",
						"thai": "สิ่งไร้ค่า... เงาของควิกซิลเวอร์... เหนือกว่าจินตนาการของเจ้า...",
						"hindi": "तुच्छ प्राणी... क्विक सिल्वर की परछाई... तुम्हारी कल्पना से परे है..."
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not... over yet!",
						"japanese": "まだ… 終わってない！",
						"chinese": "还没… 结束！",
						"french": "Ce n'est pas… encore fini !",
						"spanish": "¡Aún… no ha terminado!",
						"vietnamese": "Vẫn… chưa kết thúc!",
						"thai": "ยัง... ไม่จบ!",
						"hindi": "अभी… खत्म नहीं हुआ है!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "다시 와라… 그때는… 네 영혼마저 찢어주마.",
						"english": "Come back... Next time... I'll tear your very soul apart.",
						"japanese": "また来い… その時は… 貴様の魂さえも引き裂いてやろう。",
						"chinese": "再来吧… 到那时… 我会连你的灵魂都撕碎。",
						"french": "Reviens… La prochaine fois… je déchirerai ton âme même.",
						"spanish": "Vuelve... Esa vez... te destrozaré hasta el alma.",
						"vietnamese": "Hãy trở lại… Đến lúc đó… ta sẽ xé nát cả linh hồn ngươi.",
						"thai": "กลับมาอีกครั้ง... คราวหน้า... ข้าจะฉีกวิญญาณของเจ้าให้เป็นชิ้นๆ",
						"hindi": "वापस आओ... उस समय... मैं तुम्हारी आत्मा को भी चीर डालूँगा।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "절대 포기 안 해!",
						"english": "I'll never give up!",
						"japanese": "絶対にあきらめない！",
						"chinese": "绝不放弃！",
						"french": "Je n'abandonnerai jamais !",
						"spanish": "¡Nunca me rendiré!",
						"vietnamese": "Tuyệt đối không bỏ cuộc!",
						"thai": "ไม่มีทางยอมแพ้!",
						"hindi": "मैं कभी हार नहीं मानूँगा!"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"퀵 실버의 그림자가 도시를 덮친다.",
			"숨겨진 물류창고. 그곳에서 진실은 왜곡되기 시작한다.",
			"정보상 카이, 그의 목소리는 달콤한 독이었다.",
			"완벽한 영웅의 가면, 그리고 흔들리는 나의 믿음.",
			"죄책감은, 언제나 가장 날카로운 칼날이었다."
		],
		"english": [
			"Quick Silver's shadow engulfs the city.",
			"A hidden warehouse. There, truth begins to distort.",
			"Kai, the informant. His voice was sweet poison.",
			"The mask of a perfect hero, and my wavering faith.",
			"Guilt was always the sharpest blade."
		],
		"japanese": [
			"クイックシルバーの影が街を覆う。",
			"隠された物流倉庫。そこで真実は歪み始める。",
			"情報屋カイ。彼の声は甘い毒だった。",
			"完璧な英雄の仮面、そして揺らぐ私の信念。",
			"罪悪感は、いつだって最も鋭い刃だった。"
		],
		"chinese": [
			"奎克银的阴影笼罩着城市。",
			"隐藏的物流仓库。在那里，真相开始扭曲。",
			"情报贩子凯。他的声音是甜蜜的毒药。",
			"完美英雄的面具，以及我动摇的信念。",
			"罪恶感，永远是最锋利的刀刃。"
		],
		"french": [
			"L'ombre de Quick Silver s'abat sur la ville.",
			"Un entrepôt caché. C'est là que la vérité commence à se déformer.",
			"Kai, l'informateur. Sa voix était un doux poison.",
			"Le masque d'un héros parfait, et ma foi vacillante.",
			"La culpabilité était toujours la lame la plus aiguisée."
		],
		"spanish": [
			"La sombra de Quick Silver se cierne sobre la ciudad.",
			"Un almacén oculto. Allí, la verdad comienza a distorsionarse.",
			"Kai, el informante. Su voz era un dulce veneno.",
			"La máscara de un héroe perfecto, y mi fe vacilante.",
			"La culpa siempre fue la hoja más afilada."
		],
		"vietnamese": [
			"Bóng của Quick Silver bao trùm thành phố.",
			"Một nhà kho ẩn. Nơi đó, sự thật bắt đầu bị bóp méo.",
			"Kai, kẻ cung cấp thông tin. Giọng hắn là thuốc độc ngọt ngào.",
			"Mặt nạ của một anh hùng hoàn hảo, và niềm tin lung lay của tôi.",
			"Tội lỗi, luôn là lưỡi dao sắc bén nhất."
		],
		"thai": [
			"เงาของควิกซิลเวอร์ปกคลุมเมือง",
			"คลังสินค้าลับ ที่นั่น ความจริงเริ่มบิดเบือน",
			"ไค พ่อค้าข้อมูล เสียงของเขาคือยาพิษอันหอมหวาน",
			"หน้ากากของฮีโร่ผู้สมบูรณ์แบบ และศรัทธาที่สั่นคลอนของฉัน",
			"ความรู้สึกผิด มักจะเป็นคมดาบที่คมที่สุดเสมอ"
		],
		"hindi": [
			"क्विक सिल्वर की परछाई शहर को घेर लेती है।",
			"एक छिपा हुआ गोदाम। वहीं, सच बिगड़ने लगता है।",
			"जानकारी देने वाला काई। उसकी आवाज़ मीठा ज़हर थी।",
			"एक आदर्श नायक का मुखौटा, और मेरा डगमगाता विश्वास।",
			"अपराधबोध, हमेशा सबसे तेज़ तलवार था।"
		]
	}
} as const;
