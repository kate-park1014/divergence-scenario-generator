export const scenario_modern_opalshade_3_02 = {
	"scenario_id": "modern_opalshade_3_02",
	"order": 2,
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
	"prologue": {
		"korean": [
			"재개발이 멈춘 도시. 시간마저 멈춘 듯한 낡은 구획.",
			"곳곳에 과거의 흔적이 유령처럼 떠돈다.",
			"낡은 도서관, 희미한 기록들 속에서 —",
			"누군가, 혹은 무언가가 진실을 속삭이고 있었다."
		],
		"english": [
			"A city where redevelopment has stalled. An old district where even time seems to have stopped.",
			"Traces of the past linger everywhere, like ghosts.",
			"In an old library, amidst fading records —",
			"Someone, or something, was whispering the truth."
		],
		"japanese": [
			"再開発が止まった都市。時間までも止まったかのような古い区画。",
			"過去の痕跡が、幽霊のようにあちこちを彷徨っている。",
			"古い図書館、薄れた記録の中で—",
			"誰かが、あるいは何かが、真実を囁いていた。"
		],
		"chinese": [
			"停滞的城市改造。一个时间仿佛静止的老旧街区。",
			"过去的痕迹如幽灵般四处游荡。",
			"在旧图书馆里，在模糊的记录中 —",
			"有人，或有什么，正在低语着真相。"
		],
		"french": [
			"Une ville où le réaménagement a cessé. Un quartier ancien où le temps lui-même semble s'être arrêté.",
			"Les traces du passé hantent les lieux, comme des fantômes.",
			"Dans une vieille bibliothèque, parmi des documents fanés —",
			"Quelqu'un, ou quelque chose, murmurait la vérité."
		],
		"spanish": [
			"Una ciudad donde la reurbanización se detuvo. Un distrito antiguo donde incluso el tiempo parece haberse detenido.",
			"Las huellas del pasado persisten por todas partes, como fantasmas.",
			"En una vieja biblioteca, entre registros desvanecidos —",
			"Alguien, o algo, estaba susurrando la verdad."
		],
		"vietnamese": [
			"Một thành phố nơi tái phát triển đã dừng lại. Một khu phố cũ nơi thời gian dường như cũng ngừng trôi.",
			"Dấu vết của quá khứ lởn vởn khắp nơi, như những bóng ma.",
			"Trong một thư viện cũ, giữa những ghi chép mờ nhạt —",
			"Ai đó, hoặc thứ gì đó, đang thì thầm sự thật."
		],
		"thai": [
			"เมืองที่การพัฒนาหยุดนิ่ง เขตเก่าแก่ที่แม้แต่เวลาก็ดูเหมือนจะหยุดลง",
			"ร่องรอยของอดีตลอยวนอยู่ทุกหนทุกแห่ง ราวกับผี",
			"ในห้องสมุดเก่า ท่ามกลางบันทึกที่เลือนราง —",
			"มีบางคน หรือบางสิ่ง กำลังกระซิบความจริง"
		],
		"hindi": [
			"एक शहर जहां पुनर्विकास रुक गया है। एक पुराना इलाका जहां समय भी थम सा गया है।",
			"अतीत के निशान हर जगह भूतों की तरह मंडराते हैं।",
			"एक पुरानी लाइब्रेरी में, धुंधले रिकॉर्ड के बीच —",
			"कोई, या कुछ, सच फुसफुसा रहा था।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "시간이 멈춘 듯한 낡은 구획. 공기마저 오래된 먼지 냄새가 났다.",
						"english": "An old district where time seemed to stand still. Even the air smelled of old dust.",
						"japanese": "時間が止まったかのような古い区画。空気さえも古い埃の匂いがした。",
						"chinese": "时间仿佛静止的老旧街区。连空气中都弥漫着陈旧的灰尘味。",
						"french": "Un vieux quartier où le temps semblait s'être arrêté. L'air lui-même sentait la vieille poussière.",
						"spanish": "Un distrito antiguo donde el tiempo parecía haberse detenido. Incluso el aire olía a polvo viejo.",
						"vietnamese": "Một khu phố cũ nơi thời gian dường như ngừng trôi. Ngay cả không khí cũng có mùi bụi cũ.",
						"thai": "เขตเก่าแก่ที่เวลาดูเหมือนจะหยุดนิ่ง แม้แต่อากาศก็มีกลิ่นฝุ่นเก่า",
						"hindi": "एक पुराना इलाका जहां समय थम सा गया था। हवा में भी पुरानी धूल की गंध थी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "여기가… 그 낡은 도서관인가.",
						"english": "Is this... that old library?",
						"japanese": "ここが…あの古い図書館か。",
						"chinese": "这里是…那座旧图书馆吗？",
						"french": "C'est... cette vieille bibliothèque ?",
						"spanish": "¿Es esta... esa vieja biblioteca?",
						"vietnamese": "Đây là… thư viện cũ đó sao?",
						"thai": "นี่คือ... ห้องสมุดเก่าแห่งนั้นหรือ",
						"hindi": "क्या यह... वह पुरानी लाइब्रेरी है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "기록물은 여기서 찾아야 해.",
						"english": "I need to find the records here.",
						"japanese": "記録はここで見つけなければならない。",
						"chinese": "我必须在这里找到记录。",
						"french": "Je dois trouver les archives ici.",
						"spanish": "Necesito encontrar los registros aquí.",
						"vietnamese": "Tôi cần tìm các tài liệu ở đây.",
						"thai": "ฉันต้องหาบันทึกที่นี่",
						"hindi": "मुझे रिकॉर्ड यहीं खोजने होंगे।"
					},
					"emotion": "base",
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "책들은 무너져 내리고, 고요함 속에 불안이 스며들었다.",
						"english": "Books lay crumbling, and unease permeated the silence.",
						"japanese": "本は崩れ落ち、静寂の中に不安が忍び寄った。",
						"chinese": "书籍散落一地，不安弥漫在寂静之中。",
						"french": "Les livres s'effondraient, et une anxiété s'infiltrait dans le silence.",
						"spanish": "Los libros se desmoronaban y la inquietud se filtraba en el silencio.",
						"vietnamese": "Sách đổ nát, và sự bất an len lỏi vào sự tĩnh lặng.",
						"thai": "หนังสือพังทลายลง และความไม่สบายใจก็ซึมซาบเข้าไปในความเงียบ",
						"hindi": "किताबें बिखर रही थीं, और खामोशी में बेचैनी फैल गई थी।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "lin",
					"spot": [
						4,
						2
					]
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "…찾아왔군요. 예상대로.",
						"english": "...You've found your way here. As expected.",
						"japanese": "…よくぞ辿り着きました。予想通りだ。",
						"chinese": "……你来了。正如我所料。",
						"french": "...Vous êtes arrivé. Comme prévu.",
						"spanish": "...Has llegado. Como esperaba.",
						"vietnamese": "...Bạn đã tìm thấy đường đến đây. Đúng như dự đoán.",
						"thai": "...คุณมาถึงแล้ว สมกับที่คาดไว้",
						"hindi": "...तुम यहां आ गए। जैसा कि अपेक्षित था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "당신은 누구지?",
						"english": "Who are you?",
						"japanese": "あなたは誰だ？",
						"chinese": "你 U",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Bạn là ai?",
						"thai": "คุณคือใคร",
						"hindi": "तुम कौन हो?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "린. 이 곳의 파편들을 모으는 자.",
						"english": "Rin. The one who gathers fragments here.",
						"japanese": "リン。この地の破片を集める者。",
						"chinese": "琳。在此地收集碎片之人。",
						"french": "Rin. Celle qui rassemble les fragments ici.",
						"spanish": "Rin. Quien recolecta los fragmentos aquí.",
						"vietnamese": "Rin. Người thu thập mảnh vỡ ở đây.",
						"thai": "ริน ผู้รวบรวมชิ้นส่วนที่นี่",
						"hindi": "रिन। वह जो यहाँ के टुकड़े इकट्ठा करता है।"
					},
					"emotion": "base",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "당신들이 찾는 진실은… 쉽지 않을 거예요.",
						"english": "The truth you seek... won't be easy.",
						"japanese": "あなた方が探す真実は… 簡単ではないでしょう。",
						"chinese": "你们所寻求的真相… 不会那么容易。",
						"french": "La vérité que vous cherchez... ne sera pas facile.",
						"spanish": "La verdad que buscan... no será fácil.",
						"vietnamese": "Sự thật các bạn tìm kiếm… sẽ không dễ dàng đâu.",
						"thai": "ความจริงที่คุณกำลังตามหา... จะไม่ง่ายเลย",
						"hindi": "जिस सच्चाई को तुम ढूंढ रहे हो... वह आसान नहीं होगी।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 소리야? 뭘 알고 있는 거지?",
						"english": "What are you talking about? What do you know?",
						"japanese": "何の話だ？ 何を知っている？",
						"chinese": "你在说什么？你知道些什么？",
						"french": "De quoi parles-tu ? Que sais-tu ?",
						"spanish": "¿De qué hablas? ¿Qué sabes?",
						"vietnamese": "Ngươi đang nói gì vậy? Ngươi biết gì?",
						"thai": "คุณกำลังพูดถึงอะไร? คุณรู้อะไร?",
						"hindi": "क्या बकवास है? तुम क्या जानते हो?"
					},
					"emotion": "base",
					"speaker": "character_2"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "이 도시를 지배했던 거대 조직. 그들의 기록물은… 거짓말투성이니까.",
						"english": "The massive organization that ruled this city. Their records... are full of lies.",
						"japanese": "この都市を支配していた巨大組織。彼らの記録は… 嘘だらけだから。",
						"chinese": "曾统治这座城市的巨大组织。他们的记录… 都是谎言。",
						"french": "L'organisation gigantesque qui dominait cette ville. Leurs archives... ne sont que mensonges.",
						"spanish": "La enorme organización que gobernó esta ciudad. Sus registros... están llenos de mentiras.",
						"vietnamese": "Tổ chức khổng lồ đã thống trị thành phố này. Ghi chép của chúng… toàn là dối trá.",
						"thai": "องค์กรขนาดใหญ่ที่เคยปกครองเมืองนี้ บันทึกของพวกเขา... เต็มไปด้วยคำโกหก",
						"hindi": "इस शहर पर राज करने वाला विशाल संगठन। उनके दस्तावेज़... झूठ से भरे हैं।"
					},
					"emotion": "base",
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
					"speaker": "lin",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "그들은 '보이지 않는 온화한 힘'으로 특정 공간을 보호했어요.",
						"english": "They protected certain spaces with an 'invisible, gentle force.'",
						"japanese": "彼らは「見えない穏やかな力」で特定の空間を保護していました。",
						"chinese": "他们用“无形的温柔力量”保护着特定的空间。",
						"french": "Ils protégeaient certains lieux avec une « force invisible et douce ».",
						"spanish": "Protegían ciertos espacios con una \"fuerza invisible y suave\".",
						"vietnamese": "Họ bảo vệ những không gian nhất định bằng một 'lực lượng ôn hòa vô hình'.",
						"thai": "พวกเขาปกป้องพื้นที่บางแห่งด้วย 'พลังอันอ่อนโยนที่มองไม่เห็น'",
						"hindi": "उन्होंने कुछ स्थानों को 'अदृश्य, सौम्य शक्ति' से संरक्षित किया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "보이지 않는 힘?",
						"english": "Invisible force?",
						"japanese": "見えない力？",
						"chinese": "无形的力量？",
						"french": "Une force invisible ?",
						"spanish": "¿Fuerza invisible?",
						"vietnamese": "Lực lượng vô hình?",
						"thai": "พลังที่มองไม่เห็น?",
						"hindi": "अदृश्य शक्ति?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "마치… 누군가의 소중한 것을 지키려는 듯이.",
						"english": "As if... trying to protect someone's precious possession.",
						"japanese": "まるで… 誰かの大切なものを守ろうとするかのように。",
						"chinese": "就像… 要守护某个人的珍贵之物一样。",
						"french": "Comme si... quelqu'un tentait de protéger quelque chose de précieux.",
						"spanish": "Como si... intentaran proteger algo valioso de alguien.",
						"vietnamese": "Cứ như… đang cố bảo vệ thứ gì đó quý giá của ai đó vậy.",
						"thai": "ราวกับว่า... พยายามปกป้องบางสิ่งที่ล้ำค่าของใครบางคน",
						"hindi": "मानो... कोई किसी की क़ीमती चीज़ की रक्षा करने की कोशिश कर रहा हो।"
					},
					"emotion": "sad",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"speaker": "character_3",
					"content": {
						"korean": "이게… 그 힘인가?",
						"english": "Is this... that power?",
						"japanese": "これが… その力なのか？",
						"chinese": "这就是… 那股力量吗？",
						"french": "Est-ce... cette force ?",
						"spanish": "¿Es esto... ese poder?",
						"vietnamese": "Đây… là sức mạnh đó sao?",
						"thai": "นี่คือ... พลังนั้นเหรอ?",
						"hindi": "क्या यह... वही शक्ति है?"
					},
					"emotion": "base"
				},
				{
					"duration_ms": 700,
					"type": "direction",
					"speaker": "narrator",
					"action": "shake"
				},
				{
					"content": {
						"korean": "보이지 않는 장벽이 앞을 가로막았다. 나아갈 수 없었다.",
						"english": "An invisible barrier blocked the way. I couldn't proceed.",
						"japanese": "見えない障壁が道を塞いだ。進むことができなかった。",
						"chinese": "一道无形的屏障挡住了去路。无法前进。",
						"french": "Une barrière invisible bloquait le passage. Impossible d'avancer.",
						"spanish": "Una barrera invisible bloqueó el camino. No pude avanzar.",
						"vietnamese": "Một rào cản vô hình đã chặn đường. Không thể tiến lên được.",
						"thai": "กำแพงที่มองไม่เห็นขวางทางไว้ ไม่อาจก้าวต่อไปได้",
						"hindi": "एक अदृश्य बाधा ने रास्ता रोक दिया। आगे बढ़ना असंभव था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그리고… 특정 시간마다 들려오는 애처로운 멜로디…",
						"english": "And... a sorrowful melody that can be heard at specific times...",
						"japanese": "そして… 特定の時間ごとに聞こえてくる哀れなメロディ…",
						"chinese": "还有… 每隔特定时间就会响起的一段哀伤旋律…",
						"french": "Et... une mélodie plaintive qui résonne à intervalles réguliers...",
						"spanish": "Y... una melodía lamentable que se escucha a ciertas horas...",
						"vietnamese": "Và… một giai điệu não lòng vang lên vào những thời điểm nhất định…",
						"thai": "และ... ท่วงทำนองอันน่าเวทนาที่ได้ยินในแต่ละช่วงเวลาที่กำหนด...",
						"hindi": "और... एक दुखभरी धुन जो निश्चित समय पर सुनाई देती है..."
					},
					"emotion": "sad",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"content": {
						"korean": "혼란스러워. 뭘 말하고 싶은 거지?",
						"english": "I'm confused. What are you trying to say?",
						"japanese": "混乱している。何を言いたいんだ？",
						"chinese": "我很困惑。你想说什么？",
						"french": "Je suis confus. Que veux-tu dire ?",
						"spanish": "Estoy confundido. ¿Qué intentas decir?",
						"vietnamese": "Tôi bối rối quá. Bạn muốn nói gì?",
						"thai": "ฉันสับสน คุณต้องการจะพูดอะไร?",
						"hindi": "मैं भ्रमित हूँ। तुम क्या कहना चाहते हो?"
					},
					"emotion": "sad",
					"speaker": "character_any"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "lin",
					"spot": [
						2,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 이상은… 위험해요. 과거는 때로 집어삼키니까.",
						"english": "Any further… is dangerous. The past sometimes swallows you whole.",
						"japanese": "これ以上は…危険です。過去は時に人を飲み込むから。",
						"chinese": "再往前…很危险。过去有时会吞噬一切。",
						"french": "Plus loin… c'est dangereux. Le passé dévore parfois.",
						"spanish": "Más allá… es peligroso. El pasado a veces te consume.",
						"vietnamese": "Hơn nữa… sẽ nguy hiểm. Quá khứ đôi khi nuốt chửng chúng ta.",
						"thai": "มากกว่านี้…อันตราย อดีตบางครั้งกลืนกินทุกสิ่ง",
						"hindi": "इससे आगे… खतरनाक है। अतीत कभी-कभी निगल जाता है।"
					},
					"emotion": "sad",
					"speaker": "lin"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "하지만 멈출 순 없어.",
						"english": "But I can't stop.",
						"japanese": "しかし、止めることはできない。",
						"chinese": "但我不能停下。",
						"french": "Mais je ne peux pas m'arrêter.",
						"spanish": "Pero no puedo parar.",
						"vietnamese": "Nhưng không thể dừng lại.",
						"thai": "แต่ฉันหยุดไม่ได้",
						"hindi": "पर मैं रुक नहीं सकता।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "당신들이 찾는 진실은… 생각보다 더 비극적일 거예요.",
						"english": "The truth you seek… will be more tragic than you imagine.",
						"japanese": "あなたたちが探す真実は…想像よりも悲劇的だろう。",
						"chinese": "你们所寻求的真相…会比想象中更悲剧。",
						"french": "La vérité que vous cherchez… sera plus tragique que vous ne l'imaginez.",
						"spanish": "La verdad que buscan… será más trágica de lo que imaginan.",
						"vietnamese": "Sự thật mà các bạn tìm kiếm… sẽ bi thảm hơn bạn tưởng.",
						"thai": "ความจริงที่คุณกำลังตามหา…จะโศกเศร้ากว่าที่คุณคิด",
						"hindi": "तुम जिस सच की तलाश में हो… वह तुम्हारी सोच से भी ज़्यादा दुखद होगा।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "두렵지 않아. 진실을 마주할 거야.",
						"english": "I'm not afraid. I will face the truth.",
						"japanese": "恐れない。真実と向き合う。",
						"chinese": "我不害怕。我会面对真相。",
						"french": "Je n'ai pas peur. J'affronterai la vérité.",
						"spanish": "No tengo miedo. Enfrentaré la verdad.",
						"vietnamese": "Tôi không sợ hãi. Tôi sẽ đối mặt với sự thật.",
						"thai": "ฉันไม่กลัว ฉันจะเผชิญหน้ากับความจริง",
						"hindi": "मुझे डर नहीं है। मैं सच का सामना करूँगा।"
					},
					"emotion": "base",
					"speaker": "character_4",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "부서진 벽에서 희미한 조직의 문양이 드러났다. 이제 막 시작이었다.",
						"english": "A faint emblem of the organization appeared on the broken wall. It was just the beginning.",
						"japanese": "壊れた壁に、組織の薄い紋章が現れた。それはほんの始まりだった。",
						"chinese": "破碎的墙壁上，显现出模糊的组织纹样。这仅仅是个开始。",
						"french": "Un faible emblème de l'organisation apparut sur le mur brisé. Ce n'était que le début.",
						"spanish": "Un tenue emblema de la organización apareció en la pared rota. Era solo el comienzo.",
						"vietnamese": "Một biểu tượng mờ nhạt của tổ chức hiện ra trên bức tường đổ nát. Đây mới chỉ là khởi đầu.",
						"thai": "ตราสัญลักษณ์จาง ๆ ขององค์กรปรากฏบนกำแพงที่พังทลาย นี่เป็นเพียงจุดเริ่มต้น",
						"hindi": "टूटी हुई दीवार पर संगठन का एक धुंधला प्रतीक दिखाई दिया। यह तो बस शुरुआत थी।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "과거의 속삭임은 더욱 강렬해졌다. 불안은 확신으로 변해갔다.",
						"english": "The whispers of the past grew stronger. Unease turned into conviction.",
						"japanese": "過去のささやきはさらに強くなった。不安は確信へと変わっていった。",
						"chinese": "过去的低语变得更加强烈。不安变成了确信。",
						"french": "Les murmures du passé devinrent plus intenses. L'inquiétude se transforma en conviction.",
						"spanish": "Los susurros del pasado se hicieron más fuertes. La inquietud se convirtió en convicción.",
						"vietnamese": "Lời thì thầm của quá khứ trở nên mạnh mẽ hơn. Sự bất an biến thành niềm tin.",
						"thai": "เสียงกระซิบจากอดีตยิ่งรุนแรงขึ้น ความกังวลแปรเปลี่ยนเป็นความมั่นใจ",
						"hindi": "अतीत की फुसफुसाहट और तीव्र हो गई। बेचैनी विश्वास में बदल गई।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 결국… 막지 못했군…",
						"english": "Ugh... In the end... I couldn't stop them...",
						"japanese": "くっ… 結局… 止められなかったか…",
						"chinese": "咳... 终究... 没能阻止吗...",
						"french": "Ugh... Au final... Je n'ai pas pu les arrêter...",
						"spanish": "Ugh... Al final... No pude detenerlos...",
						"vietnamese": "Khụ... Cuối cùng... vẫn không thể ngăn cản...",
						"thai": "อึก... สุดท้าย... ก็หยุดไม่ได้สินะ...",
						"hindi": "उफ़... अंत में... मैं उन्हें रोक नहीं पाया..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그들은… 그 유산을… 지키려…",
						"english": "They were trying to... protect that legacy...",
						"japanese": "彼らは… あの遺産を… 守ろうと…",
						"chinese": "他们... 想要守护那份遗产...",
						"french": "Ils tentaient de... protéger cet héritage...",
						"spanish": "Ellos intentaban... proteger ese legado...",
						"vietnamese": "Họ... muốn bảo vệ di sản đó...",
						"thai": "พวกเขา... พยายามจะปกป้อง... มรดกนั้น...",
						"hindi": "वे... उस विरासत की... रक्षा करना चाहते थे..."
					},
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "{random_boss}… 대체 뭘 지키려 했던 거지?",
						"english": "{random_boss}... What exactly were you trying to protect?",
						"japanese": "{random_boss}… 一体何を護ろうとしていたんだ？",
						"chinese": "{random_boss}... 究竟想守护什么？",
						"french": "{random_boss}... Que tentais-tu de protéger, au juste ?",
						"spanish": "{random_boss}... ¿Qué intentabas proteger exactamente?",
						"vietnamese": "{random_boss}... Rốt cuộc là muốn bảo vệ cái gì?",
						"thai": "{random_boss}... ตกลงแล้ว เจ้าพยายามจะปกป้องอะไรกันแน่?",
						"hindi": "{random_boss}... तुम आख़िर क्या बचाने की कोशिश कर रहे थे?"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "정체 모를 보스는 사라졌다. 그러나 혼란은 더욱 깊어졌다.",
						"english": "The unknown boss vanished. But the chaos only deepened.",
						"japanese": "正体不明のボスは消え去った。しかし混乱はさらに深まった。",
						"chinese": "身份不明的头目消失了。然而混乱却愈发加剧。",
						"french": "Le boss inconnu a disparu. Mais le chaos ne fit que s'accentuer.",
						"spanish": "El jefe desconocido desapareció. Pero el caos solo se profundizó.",
						"vietnamese": "Trùm ẩn danh đã biến mất. Nhưng sự hỗn loạn càng thêm sâu sắc.",
						"thai": "บอสปริศนาหายไปแล้ว ทว่าความโกลาหลกลับทวีความรุนแรงขึ้น",
						"hindi": "अज्ञात बॉस गायब हो गया। लेकिन अराजकता और गहरी होती चली गई।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "과거의 속삭임은 멈추지 않았다. 진실은 더 깊은 곳에 있었다.",
						"english": "The whispers of the past did not cease. The truth lay deeper still.",
						"japanese": "過去の囁きは止まない。真実はもっと深い場所にあった。",
						"chinese": "过去的低语并未停止。真相隐藏在更深之处。",
						"french": "Les murmures du passé ne cessèrent pas. La vérité se trouvait encore plus profondément.",
						"spanish": "Los susurros del pasado no cesaron. La verdad yacía aún más profundo.",
						"vietnamese": "Lời thì thầm của quá khứ không ngừng lại. Sự thật nằm sâu hơn nữa.",
						"thai": "เสียงกระซิบจากอดีตไม่หยุดหย่อน ความจริงอยู่ลึกกว่านั้นอีก",
						"hindi": "अतीत की फुसफुसाहट बंद नहीं हुई। सच और भी गहरा था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "정체 모를 그림자는 압도적인 힘으로 탐험대를 제압했다.",
						"english": "An unknown shadow overpowered the expedition team with overwhelming force.",
						"japanese": "正体不明の影は圧倒的な力で探検隊を制圧した。",
						"chinese": "身份不明的阴影以压倒性的力量镇压了探险队。",
						"french": "Une ombre inconnue a maîtrisé l'équipe d'expédition avec une force écrasante.",
						"spanish": "Una sombra desconocida dominó al equipo de expedición con una fuerza abrumadora.",
						"vietnamese": "Bóng tối vô danh đã áp đảo đội thám hiểm bằng sức mạnh khủng khiếp.",
						"thai": "เงาปริศนาได้พิชิตทีมสำรวจด้วยพลังอันล้นเหลือ",
						"hindi": "एक अज्ञात छाया ने जबरदस्त शक्ति से अभियान दल को परास्त कर दिया।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "어리석은 자들. 진실은… 때로 독이 된다.",
						"english": "Fools. The truth... sometimes becomes poison.",
						"japanese": "愚かな者たち。真実は… 時として毒となる。",
						"chinese": "愚蠢之人。真相… 有时是毒药。",
						"french": "Imbéciles. La vérité... parfois, elle est un poison.",
						"spanish": "Necios. La verdad... a veces, es veneno.",
						"vietnamese": "Những kẻ ngu ngốc. Sự thật... đôi khi là thuốc độc.",
						"thai": "พวกโง่เขลา ความจริง... บางครั้งก็เป็นพิษ",
						"hindi": "मूर्खों। सच... कभी-कभी ज़हर बन जाता है।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "크윽… 여기서 멈출 순 없어!",
						"english": "Ugh... I can't stop here!",
						"japanese": "くっ… ここで止まるわけにはいかない！",
						"chinese": "咳... 不能就此止步！",
						"french": "Ugh... Je ne peux pas m'arrêter ici !",
						"spanish": "Ugh... ¡No puedo detenerme aquí!",
						"vietnamese": "Khụ... Không thể dừng lại ở đây!",
						"thai": "อึก... จะหยุดอยู่แค่นี้ไม่ได้!",
						"hindi": "उफ़... मैं यहाँ रुक नहीं सकता!"
					},
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "갑자기 나타난 거대한 그림자가 길을 가로막았다.",
						"english": "A colossal shadow suddenly appeared, blocking the way.",
						"japanese": "突然現れた巨大な影が道を塞いだ。",
						"chinese": "一个巨大的影子突然出现，挡住了去路。",
						"french": "Une ombre colossale apparut soudain, bloquant le chemin.",
						"spanish": "Una sombra colosal apareció de repente, bloqueando el camino.",
						"vietnamese": "Một bóng tối khổng lồ bất ngờ xuất hiện, chặn đường.",
						"thai": "เงาขนาดใหญ่ปรากฏขึ้นอย่างกะทันหัน ขวางทางไว้",
						"hindi": "अचानक एक विशाल परछाईं सामने आ गई, जिसने रास्ता रोक दिया।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "더 이상… 침범하지 마라.",
						"english": "Intrude no further…",
						"japanese": "これ以上…侵入するな。",
						"chinese": "不要再…侵犯了。",
						"french": "N'envahissez plus…",
						"spanish": "No invadas más…",
						"vietnamese": "Không được… xâm phạm nữa.",
						"thai": "อย่า…รุกล้ำอีกต่อไป",
						"hindi": "अब और… अतिक्रमण मत करो।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "누구냐! 왜 우릴 막는 거지?",
						"english": "Who are you! Why are you blocking us?",
						"japanese": "誰だ！なぜ我々を阻む？",
						"chinese": "你是谁！为什么阻拦我们？",
						"french": "Qui es-tu ! Pourquoi nous bloques-tu ?",
						"spanish": "¿Quién eres? ¿Por qué nos bloqueas?",
						"vietnamese": "Ngươi là ai! Tại sao lại chặn chúng ta?",
						"thai": "คุณเป็นใคร! ทำไมถึงขวางทางเรา?",
						"hindi": "कौन हो तुम! हमें क्यों रोक रहे हो?"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이곳은… 잠들어야 할 기억들이 있는 곳. 너희는 알 필요 없다.",
						"english": "This place... holds memories that should slumber. You don't need to know.",
						"japanese": "ここは… 眠るべき記憶がある場所だ。お前たちには知る必要はない。",
						"chinese": "这里是… 沉睡着记忆的地方。你们无需知晓。",
						"french": "Cet endroit... recèle des souvenirs qui devraient dormir. Vous n'avez pas besoin de savoir.",
						"spanish": "Este lugar... alberga recuerdos que deberían dormir. No necesitáis saberlo.",
						"vietnamese": "Nơi đây... chứa đựng những ký ức nên ngủ yên. Các ngươi không cần biết.",
						"thai": "ที่นี่... คือที่ที่ความทรงจำควรหลับใหล พวกเจ้าไม่จำเป็นต้องรู้",
						"hindi": "यह जगह... उन यादों को समेटे हुए है जिन्हें सो जाना चाहिए। तुम्हें जानने की ज़रूरत नहीं।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "진실을 숨기려는 자는… 물러나.",
						"english": "Those who hide the truth... retreat.",
						"japanese": "真実を隠そうとする者は… 退け。",
						"chinese": "试图隐藏真相者… 退下。",
						"french": "Ceux qui cachent la vérité... reculez.",
						"spanish": "Quienes ocultan la verdad... retroceded.",
						"vietnamese": "Kẻ nào muốn che giấu sự thật... hãy lùi lại.",
						"thai": "ผู้ที่ซ่อนเร้นความจริง... จงถอยไป",
						"hindi": "जो सच को छिपाने की कोशिश करते हैं... पीछे हट जाओ।"
					},
					"emotion": "angry"
				}
			]
		}
	]
} as const;
