export const scenario_forest_entwine_11_03 = {
	"scenario_id": "forest_entwine_11_03",
	"order": 3,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"cedar": {
			"id": "mon_bd67c222-311e-4f31-b81f-931b14f6b5c6",
			"name": {
				"korean": "시더",
				"english": "Cedar",
				"japanese": "シダー",
				"chinese": "雪松",
				"french": "Cèdre",
				"spanish": "Cedro",
				"vietnamese": "Tuyết tùng",
				"thai": "ซีดาร์",
				"hindi": "देवदार"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f1057921-5fa2-4be2-767d-1a64c33e6e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9579f10e-eb78-40e5-d495-72f489322200/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "숲은 이제 생명력을 잃고 썩어가는 거대한 심장 같았다.",
						"english": "The forest was like a giant, rotting heart, losing its life force.",
						"japanese": "森は今や、生命力を失い腐りゆく巨大な心臓のようだった。",
						"chinese": "森林现在就像一个失去生命力、正在腐烂的巨大心脏。",
						"french": "La forêt était comme un cœur gigantesque en putréfaction, perdant sa force vitale.",
						"spanish": "El bosque era como un corazón gigante y putrefacto, perdiendo su fuerza vital.",
						"vietnamese": "Rừng giờ đây giống như một trái tim khổng lồ đang thối rữa, mất đi sức sống.",
						"thai": "ป่าตอนนี้เหมือนหัวใจขนาดใหญ่ที่กำลังเน่าเปื่อยและสูญเสียพลังชีวิต",
						"hindi": "जंगल अब एक विशाल, सड़ते हुए दिल जैसा था, जो अपनी जीवन शक्ति खो रहा था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "숨쉬기가 힘들어. 공기 자체가 달라….",
						"english": "It's hard to breathe. The air itself feels... different.",
						"japanese": "息をするのが苦しい。空気そのものが違う…",
						"chinese": "呼吸困难。空气本身就不同了……",
						"french": "Difficile de respirer. L'air lui-même est... différent.",
						"spanish": "Es difícil respirar. El aire mismo es... diferente.",
						"vietnamese": "Khó thở quá. Không khí này... khác lạ.",
						"thai": "หายใจลำบากจัง อากาศมัน...แปลกไป",
						"hindi": "सांस लेना मुश्किल है। हवा ही... अलग है।"
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"speaker": "cedar",
					"action": "enter",
					"type": "direction",
					"spot": [
						5,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기서 더 이상한 것들이 발견될 거야. 사라진 이들이 남긴… 흔적들.",
						"english": "Stranger things will be found here. Traces... left by the lost.",
						"japanese": "ここではもっと奇妙なものが発見されるだろう。消え去った者たちが残した…痕跡が。",
						"chinese": "这里会发现更奇怪的东西。失踪者留下的……痕迹。",
						"french": "Des choses encore plus étranges seront découvertes ici. Des traces... laissées par les disparus.",
						"spanish": "Se encontrarán cosas más extrañas aquí. Rastros... dejados por los desaparecidos.",
						"vietnamese": "Những thứ kỳ lạ hơn sẽ được tìm thấy ở đây. Dấu vết... của những người đã biến mất.",
						"thai": "จะมีสิ่งแปลกประหลาดกว่านี้ถูกพบที่นี่ ร่องรอย...ที่ผู้หายสาบสูญทิ้งไว้",
						"hindi": "यहाँ और भी अजीब चीजें मिलेंगी। गुमशुदा लोगों द्वारा छोड़े गए... निशान।"
					},
					"emotion": "base",
					"speaker": "cedar"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "당신은 누군데 우릴 따라오는 거야?",
						"english": "Who are you, following us?",
						"japanese": "あなたは誰だ、我々についてくるのか？",
						"chinese": "你 ആരാണ്, ഞങ്ങളെ പിന്തുടരുന്നത്?",
						"french": "Qui êtes-vous, à nous suivre ?",
						"spanish": "¿Quién eres, siguiéndonos?",
						"vietnamese": "Ngươi là ai mà cứ đi theo bọn ta?",
						"thai": "แกเป็นใคร ทำไมถึงตามพวกเรามา?",
						"hindi": "तुम कौन हो, जो हमारा पीछा कर रहे हो?"
					},
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"content": {
						"korean": "난 세다르. 숲의 비밀을 파헤치는 고고학자지. 당신들도 비슷한 목적 같군.",
						"english": "I'm Cedar. An archaeologist uncovering the forest's secrets. You seem to have a similar goal.",
						"japanese": "私はセダル。森の秘密を解き明かす考古学者だ。君たちも似た目的のようだね。",
						"chinese": "我是赛达尔。一个揭示森林秘密的考古学家。你们似乎也有类似的目的。",
						"french": "Je suis Cedar. Une archéologue qui découvre les secrets de la forêt. Vous semblez avoir un but similaire.",
						"spanish": "Soy Cedar. Una arqueóloga que desentierra los secretos del bosque. Parece que ustedes tienen un objetivo similar.",
						"vietnamese": "Ta là Cedar. Một nhà khảo cổ học khám phá bí mật của khu rừng. Các ngươi cũng có mục đích tương tự thì phải.",
						"thai": "ฉันชื่อซีดาร์ นักโบราณคดีที่ไขความลับของป่า ดูเหมือนพวกคุณก็มีจุดประสงค์คล้ายกันนะ",
						"hindi": "मैं सेदार हूँ। जंगल के रहस्यों को उजागर करने वाली एक पुरातत्वविद्। लगता है तुम्हारा भी यही मकसद है।"
					},
					"emotion": "base",
					"speaker": "cedar",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…지금은 같이 움직이는 게 나을 것 같네.",
						"english": "...For now, moving together seems best.",
						"japanese": "…今は、一緒に動くのが得策だろう。",
						"chinese": "……现在，我们最好一起行动。",
						"french": "...Pour l'instant, il vaudrait mieux avancer ensemble.",
						"spanish": "...Por ahora, parece mejor movernos juntos.",
						"vietnamese": "...Hiện tại, cùng nhau hành động có vẻ tốt hơn.",
						"thai": "...ตอนนี้, ดูเหมือนว่าการเคลื่อนไหวร่วมกันจะดีที่สุด",
						"hindi": "...अभी के लिए, साथ चलना ही बेहतर होगा।"
					},
					"emotion": "base",
					"speaker": "character_any"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						4
					],
					"speaker": "cedar",
					"action": "enter"
				},
				{
					"speaker": "cedar",
					"emotion": "sad",
					"content": {
						"korean": "이런… 이건 비정상적이야.",
						"english": "This... this isn't normal.",
						"japanese": "これ…異常だ。",
						"chinese": "这…这不正常。",
						"french": "Ça… ce n'est pas normal.",
						"spanish": "Esto… esto no es normal.",
						"vietnamese": "Cái này… cái này không bình thường.",
						"thai": "นี่… นี่มันผิดปกติ.",
						"hindi": "यह… यह सामान्य नहीं है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "뭐가?",
						"english": "What?",
						"japanese": "何が？",
						"chinese": "什么？",
						"french": "Quoi ?",
						"spanish": "¿Qué?",
						"vietnamese": "Cái gì?",
						"thai": "อะไร?",
						"hindi": "क्या?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "지표면 아래로 거대한 뿌리들이 마치 살아있는 신경망처럼 얽혀 있었다.",
						"english": "Below the surface, massive roots intertwined like a living neural network.",
						"japanese": "地表の下では、巨大な根がまるで生きている神経網のように絡み合っていた。",
						"chinese": "在地表之下，巨大的根系像活生生的神经网络一样交织在一起。",
						"french": "Sous la surface, d'énormes racines s'entremêlaient comme un réseau neuronal vivant.",
						"spanish": "Debajo de la superficie, raíces masivas se entrelazaban como una red neuronal viviente.",
						"vietnamese": "Bên dưới bề mặt, những rễ khổng lồ đan xen vào nhau như một mạng lưới thần kinh sống.",
						"thai": "ใต้พื้นผิว รากขนาดใหญ่พันกันเหมือนเครือข่ายประสาทที่มีชีวิต",
						"hindi": "सतह के नीचे, विशाल जड़ें एक जीवित तंत्रिका तंत्र की तरह आपस में उलझी हुई थीं।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "cedar",
					"emotion": "base",
					"content": {
						"korean": "모든 식물이 하나의 존재에 연결된 것처럼 보여. 숲 전체가… 하나로 움직이는 거지.",
						"english": "Every plant seems connected to a single entity. The entire forest… moving as one.",
						"japanese": "すべての植物がただ一つの存在に繋がっているようだ。森全体が…一つとして動いている。",
						"chinese": "所有植物似乎都连接到一个单一的存在。整片森林…作为一个整体在移动。",
						"french": "Chaque plante semble connectée à une seule entité. La forêt entière… bougeant comme un seul être.",
						"spanish": "Cada planta parece conectada a una sola entidad. El bosque entero… moviéndose como uno solo.",
						"vietnamese": "Mọi thực vật dường như đều kết nối với một thực thể duy nhất. Cả khu rừng… di chuyển như một.",
						"thai": "พืชทุกต้นดูเหมือนจะเชื่อมต่อกับสิ่งมีชีวิตเดียว ป่าทั้งหมด… เคลื่อนไหวเป็นหนึ่งเดียว",
						"hindi": "हर पौधा एक ही इकाई से जुड़ा हुआ लगता है। पूरा जंगल… एक होकर चल रहा है।"
					}
				},
				{
					"speaker": "character_2",
					"emotion": "sad",
					"content": {
						"korean": "말도 안 돼… 거대한 기생 생명체라도 있다는 거야?",
						"english": "No way… Are you saying there's some giant parasitic organism?",
						"japanese": "まさか…巨大な寄生生物でもいるとでも言うのか？",
						"chinese": "不可能…你是说这里有某种巨大的寄生生物？",
						"french": "Impossible… Tu veux dire qu'il y a un organisme parasite géant ?",
						"spanish": "No puede ser… ¿Estás diciendo que hay algún organismo parásito gigante?",
						"vietnamese": "Không thể nào… Cậu đang nói có một sinh vật ký sinh khổng lồ ở đây sao?",
						"thai": "เป็นไปไม่ได้… นายกำลังจะบอกว่ามีสิ่งมีชีวิตปรสิตขนาดยักษ์อย่างนั้นเหรอ?",
						"hindi": "असंभव… क्या तुम कह रहे हो कि यहाँ कोई विशाल परजीवी जीव है?"
					},
					"type": "speech"
				},
				{
					"speaker": "cedar",
					"content": {
						"korean": "정확해. 이 숲은 더 이상 자연이 아니야. 거대한 유기체… 숙주.",
						"english": "Exactly. This forest is no longer natural. A massive organism… a host.",
						"japanese": "その通りだ。この森はもはや自然ではない。巨大な有機体…宿主だ。",
						"chinese": "没错。这片森林不再是自然的了。一个巨大的有机体…宿主。",
						"french": "Exactement. Cette forêt n'est plus naturelle. Un organisme massif… un hôte.",
						"spanish": "Exacto. Este bosque ya no es natural. Un organismo masivo… un huésped.",
						"vietnamese": "Chính xác. Rừng này không còn là tự nhiên nữa. Một sinh vật khổng lồ… một vật chủ.",
						"thai": "ถูกต้อง ป่านี้ไม่ใช่ธรรมชาติอีกต่อไปแล้ว เป็นสิ่งมีชีวิตขนาดใหญ่… เป็นพาหะ",
						"hindi": "बिल्कुल। यह जंगल अब प्राकृतिक नहीं रहा। एक विशाल जीव… एक मेज़बान।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						3
					],
					"speaker": "cedar",
					"action": "enter"
				},
				{
					"content": {
						"korean": "여기, 찾았어.",
						"english": "Here, I found it.",
						"japanese": "ここだ、見つけた。",
						"chinese": "这里，找到了。",
						"french": "Ici, je l'ai trouvé.",
						"spanish": "Aquí, lo encontré.",
						"vietnamese": "Đây, tìm thấy rồi.",
						"thai": "นี่ไง เจอแล้ว",
						"hindi": "यहाँ, मैंने इसे ढूँढ लिया।"
					},
					"emotion": "base",
					"speaker": "cedar",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "오래된 탐험 일지 조각과 부식된 유품들이 흩어져 있었다.",
						"english": "Scattered fragments of an old exploration log and corroded artifacts lay around.",
						"japanese": "古い探検日誌の断片と腐食した遺品が散らばっていた。",
						"chinese": "古老的探险日志碎片和腐蚀的遗物散落在周围。",
						"french": "Des fragments d'un ancien journal d'exploration et des artefacts corrodés étaient éparpillés.",
						"spanish": "Fragmentos dispersos de un antiguo diario de exploración y artefactos corroídos yacían esparcidos.",
						"vietnamese": "Những mảnh nhật ký thám hiểm cũ và các vật phẩm bị ăn mòn nằm rải rác.",
						"thai": "เศษชิ้นส่วนของบันทึกการสำรวจเก่าและวัตถุโบราณที่ผุกร่อนกระจัดกระจายอยู่",
						"hindi": "एक पुरानी अन्वेषण डायरी के टुकड़े और जंग लगे अवशेष बिखरे पड़े थे।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "사라진 탐험대… 이 사람들이 남긴 건가?",
						"english": "The vanished expedition… Was this left by them?",
						"japanese": "消えた探検隊…彼らが残したものなのか？",
						"chinese": "失踪的探险队…这是他们留下的吗？",
						"french": "L'expédition disparue… Est-ce que ce sont eux qui ont laissé ça ?",
						"spanish": "La expedición desaparecida… ¿Esto fue dejado por ellos?",
						"vietnamese": "Đoàn thám hiểm biến mất… Đây có phải là những gì họ để lại?",
						"thai": "คณะสำรวจที่หายไป… นี่พวกเขาเป็นคนทิ้งไว้หรือเปล่า?",
						"hindi": "गायब हुई अभियान टीम… क्या यह उनके द्वारा छोड़ा गया था?"
					},
					"emotion": "base"
				},
				{
					"speaker": "cedar",
					"emotion": "sad",
					"content": {
						"korean": "일지에 이렇게 쓰여 있어. '점점 더 연결되는 느낌… 모든 것이 나를 부른다.'",
						"english": "The log reads: 'A growing sense of connection… Everything calls to me.'",
						"japanese": "日誌にはこう書かれている。「ますます繋がっていく感覚…すべてが私を呼んでいる。」",
						"chinese": "日志上写着：「越来越强的连接感…一切都在呼唤我。」",
						"french": "Le journal dit : « Une sensation de connexion grandissante… Tout m'appelle. »",
						"spanish": "El diario dice: 'Una creciente sensación de conexión… Todo me llama.'",
						"vietnamese": "Nhật ký ghi: 'Cảm giác kết nối ngày càng tăng… Mọi thứ đang gọi tôi.'",
						"thai": "ในบันทึกเขียนไว้ว่า: 'ความรู้สึกเชื่อมโยงที่เพิ่มขึ้น… ทุกสิ่งกำลังเรียกหาข้า'",
						"hindi": "डायरी में लिखा है: 'जुड़ने का बढ़ता एहसास… सब कुछ मुझे पुकार रहा है।'"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "연결된다고…? 저 뿌리들이랑 같은 소린가?",
						"english": "Connected...? Like those roots?",
						"japanese": "繋がる…？あの根っこたちと同じってことか？",
						"chinese": "连接起来…？和那些根一样吗？",
						"french": "Connectés... ? Comme ces racines ?",
						"spanish": "¿Conectados...? ¿Como esas raíces?",
						"vietnamese": "Kết nối ư...? Giống mấy cái rễ cây đó sao?",
						"thai": "เชื่อมโยง...? เหมือนกับรากพวกนั้นเหรอ?",
						"hindi": "जुड़ा हुआ...? उन जड़ों की तरह?"
					},
					"emotion": "base",
					"speaker": "character_3"
				},
				{
					"type": "speech",
					"speaker": "cedar",
					"content": {
						"korean": "이 숲은… 살아있는 자들을 서서히 흡수해. 그들의 의식까지도.",
						"english": "This forest... slowly absorbs the living. Even their consciousness.",
						"japanese": "この森は… 生ける者たちを、ゆっくりと吸収する。その意識までも。",
						"chinese": "这片森林…会缓慢地吸收生者。连同他们的意识。",
						"french": "Cette forêt... absorbe lentement les êtres vivants. Même leur conscience.",
						"spanish": "Este bosque... absorbe lentamente a los seres vivos. Incluso su conciencia.",
						"vietnamese": "Khu rừng này... dần dần hấp thụ sự sống. Cả ý thức của họ nữa.",
						"thai": "ป่าแห่งนี้... ค่อยๆ ดูดกลืนสิ่งมีชีวิต แม้กระทั่งจิตสำนึกของพวกเขา",
						"hindi": "यह जंगल... धीरे-धीरे जीवित प्राणियों को सोख लेता है। उनकी चेतना को भी।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "말도 안 돼… 우리가 아는 숲이 아니야.",
						"english": "Impossible... This isn't the forest we know.",
						"japanese": "信じられない… 私たちが知っている森じゃない。",
						"chinese": "不可能… 这不是我们认识的森林。",
						"french": "C'est impossible... Ce n'est pas la forêt que nous connaissons.",
						"spanish": "Imposible... No es el bosque que conocemos.",
						"vietnamese": "Không thể nào... Đây không phải khu rừng chúng ta biết.",
						"thai": "ไม่จริงน่า... นี่ไม่ใช่ป่าที่เราเคยรู้จัก",
						"hindi": "नामुमकिन... यह वह जंगल नहीं जिसे हम जानते हैं।"
					},
					"emotion": "angry"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "cedar",
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "cedar",
					"content": {
						"korean": "경고했잖아. 더 깊이 가면, 돌이킬 수 없어.",
						"english": "I warned you. Go deeper, and there's no turning back.",
						"japanese": "警告したはずだ。これ以上深入りすれば、もう引き返せない。",
						"chinese": "我警告过你。再深入下去，就无法回头了。",
						"french": "Je t'ai prévenu. Va plus profond, et il n'y aura pas de retour possible.",
						"spanish": "Te lo advertí. Si vas más profundo, no habrá vuelta atrás.",
						"vietnamese": "Tôi đã cảnh báo rồi mà. Đi sâu hơn, sẽ không thể quay lại được đâu.",
						"thai": "ฉันเตือนแล้วไง ถ้าเข้าไปลึกกว่านี้ จะไม่มีทางหวนกลับ",
						"hindi": "मैंने तुम्हें चेतावनी दी थी। और गहरा जाओगे, तो वापस नहीं आ पाओगे।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "멈출 수 없어. 진실을 알아야 해.",
						"english": "Can't stop now. I need to know the truth.",
						"japanese": "もう止まれない。真実を知る必要がある。",
						"chinese": "无法停止。我必须知道真相。",
						"french": "Je ne peux pas m'arrêter. Je dois connaître la vérité.",
						"spanish": "No puedo parar. Necesito saber la verdad.",
						"vietnamese": "Không thể dừng lại. Tôi phải biết sự thật.",
						"thai": "หยุดไม่ได้แล้ว ฉันต้องรู้ความจริง",
						"hindi": "रुक नहीं सकता। मुझे सच जानना है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "cedar",
					"content": {
						"korean": "이 모든 끔찍한 현상의 중심이 곧 다가올 거야. 거대한… 숙주.",
						"english": "The heart of all these horrors is coming. A giant... Host.",
						"japanese": "この恐ろしい現象の中心が、もうすぐ現れる。巨大な…宿主だ。",
						"chinese": "所有这些可怕现象的核心即将到来。一个巨大的…宿主。",
						"french": "Le cœur de toutes ces horreurs approche. Un gigantesque... Hôte.",
						"spanish": "El centro de todos estos horrores está por llegar. Un gigantesco... Huésped.",
						"vietnamese": "Trung tâm của mọi hiện tượng kinh hoàng này sắp đến. Một... vật chủ khổng lồ.",
						"thai": "ศูนย์กลางของความสยองขวัญทั้งหมดกำลังจะมาถึง... ปรสิตยักษ์",
						"hindi": "इन सभी भयानक घटनाओं का केंद्र जल्द ही आएगा। एक विशाल... मेज़बान।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "설마… 우리도 저 일지 속 사람들처럼 되는 건가?",
						"english": "No way... Are we going to end up like those people in the journal?",
						"japanese": "まさか… 私たちも、あの日誌の人たちみたいになるのか？",
						"chinese": "难道…我们也会像日记里的人一样吗？",
						"french": "Non... On ne va pas finir comme les gens du journal, n'est-ce pas ?",
						"spanish": "¿No estaremos... acabando como la gente del diario?",
						"vietnamese": "Không lẽ... chúng ta cũng sẽ như những người trong cuốn nhật ký đó sao?",
						"thai": "ไม่นะ... เราจะกลายเป็นเหมือนคนในบันทึกนั่นเหรอ?",
						"hindi": "ऐसा नहीं... क्या हम भी उस डायरी में लिखे लोगों की तरह हो जाएँगे?"
					},
					"speaker": "character_4"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "그럴 순 없어. 여기서 끝내야 해.",
						"english": "No. It has to end here.",
						"japanese": "そんなことはさせない。ここで終わらせるんだ。",
						"chinese": "不能那样。必须在这里结束。",
						"french": "Non. Ça doit finir ici.",
						"spanish": "No puede ser. Debemos acabar con esto aquí.",
						"vietnamese": "Không thể như vậy được. Phải kết thúc ở đây thôi.",
						"thai": "ไม่นะ ต้องจบลงที่นี่",
						"hindi": "ऐसा नहीं हो सकता। इसे यहीं खत्म करना होगा।"
					}
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "기괴하게 뒤틀린 나무들이 빽빽한 공간, 그 중심에서 불길한 기운이 솟아올랐다.",
						"english": "In a dense space of grotesquely twisted trees, an ominous aura surged from its center.",
						"japanese": "おぞましく歪んだ木々が密集する空間、その中心から不吉な気が立ち昇っていた。",
						"chinese": "在怪异扭曲的树木密布的空间中，一股不祥的气息从其中心涌出。",
						"french": "Dans un espace dense d'arbres grotesquement tordus, une aura sinistre jaillissait de son centre.",
						"spanish": "En un espacio denso de árboles grotescamente retorcidos, un aura ominosa surgía de su centro.",
						"vietnamese": "Trong không gian dày đặc những cây cối méo mó kỳ dị, một luồng khí bất lành dâng lên từ trung tâm.",
						"thai": "ในพื้นที่ที่เต็มไปด้วยต้นไม้บิดเบี้ยวผิดรูป พลังงานลางร้ายพวยพุ่งขึ้นจากใจกลาง",
						"hindi": "अजीब तरह से मुड़े हुए पेड़ों से घिरी एक घनी जगह में, उसके केंद्र से एक अशुभ आभा निकली।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "너희도… 결국 이곳의 일부가 될 뿐이다.",
						"english": "You too... will merely become part of this place.",
						"japanese": "お前たちも… 結局は、この場所の一部となるだけだ。",
						"chinese": "你们也…终将成为这里的一部分。",
						"french": "Vous aussi... ne deviendrez qu'une partie de cet endroit.",
						"spanish": "Vosotros también... os convertiréis simplemente en parte de este lugar.",
						"vietnamese": "Các ngươi cũng... rốt cuộc cũng chỉ trở thành một phần của nơi đây thôi.",
						"thai": "พวกเจ้าเอง... ก็จะกลายเป็นส่วนหนึ่งของที่นี่เท่านั้น",
						"hindi": "तुम भी... अंततः इस जगह का एक हिस्सा मात्र बन जाओगे।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "저게… 이 숲의 숙주인가?",
						"english": "Is that... the host of this forest?",
						"japanese": "「あれが…この森の宿主なのか？」",
						"chinese": "“那…就是这森林的宿主吗？”",
						"french": "“C'est ça... l'hôte de cette forêt ?”",
						"spanish": "“¿Es eso... el anfitrión de este bosque?”",
						"vietnamese": "“Đó... là vật chủ của khu rừng này sao?”",
						"thai": "“นั่น... คือร่างต้นของป่านี้งั้นหรือ?”",
						"hindi": "“क्या वह... इस जंगल का मेज़बान है?”"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "두려워할 필요 없어. 곧 영원한 평화가 찾아올 테니.",
						"english": "No need to fear. Eternal peace will soon arrive.",
						"japanese": "「恐れることはない。じきに永遠の平和が訪れるから。」",
						"chinese": "“不必恐惧。永恒的和平很快就会降临。”",
						"french": "“Pas besoin de craindre. La paix éternelle viendra bientôt.”",
						"spanish": "“No hay que temer. La paz eterna llegará pronto.”",
						"vietnamese": "“Không cần sợ hãi. Bình yên vĩnh cửu sẽ sớm đến thôi.”",
						"thai": "“ไม่ต้องกลัว ความสงบสุขนิรันดร์จะมาถึงในไม่ช้า”",
						"hindi": "“डरने की ज़रूरत नहीं। शाश्वत शांति जल्द ही आएगी।”"
					}
				},
				{
					"duration_ms": 500,
					"spot": [
						1,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "cedar"
				},
				{
					"type": "speech",
					"speaker": "cedar",
					"emotion": "angry",
					"content": {
						"korean": "이게 바로… 숲의 진실이었어. 서둘러!",
						"english": "This was... the truth of the forest. Hurry!",
						"japanese": "「これが…森の真実だった。急いで！」",
						"chinese": "“这…就是森林的真相。快点！”",
						"french": "“C'était ça... la vérité de la forêt. Dépêchez-vous !”",
						"spanish": "“Esta era... la verdad del bosque. ¡Date prisa!”",
						"vietnamese": "“Đây chính là... sự thật của khu rừng. Nhanh lên!”",
						"thai": "“นี่คือ...ความจริงของป่า รีบหน่อย!”",
						"hindi": "“यह... जंगल का सच था। जल्दी करो!”"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "물러서! 우리가 저 괴물을 막을게!",
						"english": "Stand back! We'll stop that monster!",
						"japanese": "「下がれ！私たちが、あの怪物を食い止める！」",
						"chinese": "“退后！我们来阻止那个怪物！”",
						"french": "“Reculez ! Nous allons arrêter ce monstre !”",
						"spanish": "“¡Retroceded! ¡Nosotros detendremos a ese monstruo!”",
						"vietnamese": "“Lùi lại! Chúng ta sẽ ngăn con quái vật đó!”",
						"thai": "“ถอยไป! เราจะหยุดสัตว์ประหลาดนั่นเอง!”",
						"hindi": "“पीछे हट जाओ! हम उस राक्षस को रोकेंगे!”"
					},
					"emotion": "angry"
				},
				{
					"duration_ms": 400,
					"speaker": "cedar",
					"direction": "down",
					"action": "exit",
					"type": "direction"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "크아아…! 이깟… 상처로는… 날 멈출 수 없어…!",
						"english": "Grrr...! These... mere scratches... won't stop me...!",
						"japanese": "「グアアア…！この…程度の傷で…私を止められると…！？」",
						"chinese": "“吼啊啊…！这点…伤…休想阻止我…！”",
						"french": "“Grrr...! Ces... simples égratignures... ne m'arrêteront pas...!”",
						"spanish": "“¡Grrr...! ¡Estas... meras heridas... no me detendrán...!”",
						"vietnamese": "“Grừừừ...! Chỉ vài... vết thương thế này... không thể ngăn ta lại...!”",
						"thai": "“ครืนนน...! แค่...บาดแผลเล็กน้อย...หยุดข้าไม่ได้หรอก...!”",
						"hindi": "“गर्र्र...! ये... मामूली खरोंचें... मुझे रोक नहीं पाएंगी...!”"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "쓰러뜨렸어…! 하지만… 끝이 아닌 것 같아.",
						"english": "We defeated it...! But... it doesn't seem to be over.",
						"japanese": "「倒した…！でも…終わりじゃないみたいだ。」",
						"chinese": "“打败了…！但是…好像还没结束。”",
						"french": "“Nous l'avons vaincu...! Mais... ça ne semble pas être la fin.”",
						"spanish": "“¡Lo derrotamos...! Pero... no parece el final.”",
						"vietnamese": "“Đã đánh bại nó...! Nhưng... có vẻ đây chưa phải là kết thúc.”",
						"thai": "“เราโค่นมันลงได้แล้ว...! แต่...มันยังไม่จบแค่นี้แน่”",
						"hindi": "“हमने उसे हरा दिया...! लेकिन... लगता है यह अंत नहीं है।”"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "괴물이 쓰러지자, 숲의 뿌리가 잠시 주춤했다. 그러나 어딘가에서, 더 깊은 목소리가 들려오는 듯했다.",
						"english": "As the monster fell, the forest's roots faltered momentarily. But from somewhere, a deeper voice seemed to call.",
						"japanese": "「怪物が倒れると、森の根は一時的にひるんだ。しかし、どこからか、さらに深い声が聞こえてくるようだった。」",
						"chinese": "“怪物倒下后，森林的根系暂时停滞了。然而，似乎有更深沉的声音从某个地方传来。”",
						"french": "“Quand le monstre tomba, les racines de la forêt hésitèrent un instant. Mais de quelque part, une voix plus profonde sembla appeler.”",
						"spanish": "“Cuando el monstruo cayó, las raíces del bosque vacilaron momentáneamente. Pero de algún lugar, una voz más profunda pareció resonar.”",
						"vietnamese": "“Khi con quái vật gục ngã, rễ của khu rừng tạm thời chùn bước. Nhưng từ đâu đó, một giọng nói sâu thẳm hơn dường như vang vọng.”",
						"thai": "“เมื่อสัตว์ประหลาดล้มลง รากของป่าก็ชะงักไปชั่วขณะ แต่จากที่ใดที่หนึ่ง เสียงที่ลึกกว่านั้นก็ดังขึ้นมา”",
						"hindi": "“जैसे ही राक्षस गिरा, जंगल की जड़ें क्षण भर के लिए डगमगाईं। लेकिन कहीं से, एक गहरी आवाज़ आती हुई महसूस हुई।”"
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 것들… 결국 너희도 모두… 나의 일부가 될 뿐이다….",
						"english": "Insignificant beings... In the end, all of you too... will merely become a part of me....",
						"japanese": "「取るに足らぬ者たちよ…結局お前たちも皆…私の断片となるだけだ…。」",
						"chinese": "“渺小的东西…最终你们也都会…成为我的一部分…。”",
						"french": "“Êtres insignifiants... Au final, vous aussi... ne ferez que devenir une partie de moi...”",
						"spanish": "“Seres insignificantes... Al final, todos vosotros también... solo seréis parte de mí...”",
						"vietnamese": "“Những kẻ nhỏ bé... Cuối cùng các ngươi cũng... chỉ là một phần của ta mà thôi....”",
						"thai": "“สิ่งมีชีวิตไร้ค่า... ในที่สุดพวกเจ้าทุกคน... ก็จะกลายเป็นส่วนหนึ่งของข้าเท่านั้น...”",
						"hindi": "“तुच्छ प्राणी... अंत में, तुम सब भी... बस मेरा ही एक हिस्सा बन जाओगे...।”"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "젠장… 아직… 끝나지 않았어. 다시…!",
						"english": "Damn it...! It's not... over yet. Again...!",
						"japanese": "「くそ…！まだ…終わってない。もう一度…！」",
						"chinese": "“该死…！还没…结束。再来…！”",
						"french": "“Maudit...! Ce n'est pas... fini. Encore...!”",
						"spanish": "“¡Maldita sea...! Todavía no... ha terminado. ¡De nuevo...!”",
						"vietnamese": "“Chết tiệt...! Vẫn chưa... kết thúc. Lại một lần nữa...!”",
						"thai": "“ให้ตายสิ...! มันยัง...ไม่จบ! อีกครั้ง...!”",
						"hindi": "“धिक्कार है...! यह अभी... खत्म नहीं हुआ। फिर से...!”"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"숲은 점점 더 깊고 기괴해졌다.",
			"사라진 이들의 흔적 속에서, 고고학자는 섬뜩한 진실을 발견한다.",
			"얽히고설킨 뿌리들, 그리고 '연결되는' 숲.",
			"우리가 알던 숲은 이미 죽었다. 다른 무언가로 변했을 뿐."
		],
		"english": [
			"The forest grew deeper, more grotesque.",
			"Among the traces of the lost, the archaeologist unearths a chilling truth.",
			"Tangled roots, and a 'connecting' forest.",
			"The forest we knew is dead. It merely transformed into something else."
		],
		"japanese": [
			"森はますます深く、奇怪になっていった。",
			"消え去った者たちの痕跡の中で、考古学者は恐ろしい真実を発見する。",
			"絡み合う根、そして「繋がる」森。",
			"我々が知る森は、もう死んでいた。ただ、別の何かに変貌しただけだ。"
		],
		"chinese": [
			"森林变得越来越深，也越来越诡异。",
			"在失踪者的踪迹中，考古学家发现了一个令人毛骨悚然的真相。",
			"盘根错节的根系，以及“连接”的森林。",
			"我们所知的森林已经死了。它只是变成了别的东西。"
		],
		"french": [
			"La forêt devenait de plus en plus profonde et grotesque.",
			"Parmi les traces des disparus, l'archéologue découvre une vérité effrayante.",
			"Des racines entrelacées, et une forêt « connectée ».",
			"La forêt que nous connaissions est morte. Elle s'est simplement transformée en autre chose."
		],
		"spanish": [
			"El bosque se volvía más profundo y grotesco.",
			"Entre los rastros de los desaparecidos, el arqueólogo desentierra una verdad escalofriante.",
			"Raíces enredadas, y un bosque que 'conecta'.",
			"El bosque que conocíamos murió. Simplemente se transformó en otra cosa."
		],
		"vietnamese": [
			"Rừng ngày càng sâu thẳm và quái dị.",
			"Giữa dấu vết của những người đã biến mất, nhà khảo cổ phát hiện ra một sự thật rùng rợn.",
			"Rễ cây chằng chịt, và khu rừng 'kết nối'.",
			"Khu rừng chúng ta từng biết đã chết. Nó chỉ biến thành một thứ khác mà thôi."
		],
		"thai": [
			"ป่ายิ่งลึกเข้าไป ยิ่งแปลกประหลาดขึ้น",
			"ท่ามกลางร่องรอยของผู้ที่หายสาบสูญ นักโบราณคดีค้นพบความจริงอันน่าขนลุก",
			"รากไม้ที่พันกันยุ่งเหยิง และป่าที่ 'เชื่อมโยง'",
			"ป่าที่เรารู้จักได้ตายไปแล้ว มันแค่เปลี่ยนไปเป็นสิ่งอื่นเท่านั้น"
		],
		"hindi": [
			"जंगल गहरा और विकृत होता गया।",
			"गुमशुदा लोगों के निशानों के बीच, पुरातत्वविद् एक भयावह सच्चाई का पता लगाता है।",
			"उलझी हुई जड़ें, और एक 'जुड़ता हुआ' जंगल।",
			"जिस जंगल को हम जानते थे, वह मर चुका है। वह बस कुछ और में बदल गया है।"
		]
	}
} as const;
