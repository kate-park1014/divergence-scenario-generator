export const scenario_modern_ledger_29_01 = {
	"scenario_id": "modern_ledger_29_01",
	"order": 1,
	"act": "intro",
	"theme": "modern",
	"actors": {
		"echo": {
			"id": "mon_57f2edb8-aa81-4ce7-beed-ab009cd2ff35",
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
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "도시의 완벽한 표면 아래, 첫 균열이 보고됐다. 대규모 데이터 유출 사건.",
						"english": "Beneath the city's perfect surface, the first crack appeared. A massive data breach.",
						"japanese": "都市の完璧な表面の下で、最初の亀裂が報告された。大規模なデータ流出事件だ。",
						"chinese": "在城市完美的表象之下，第一道裂痕被报告。一场大规模数据泄露事件。",
						"french": "Sous la surface parfaite de la ville, la première fissure a été signalée. Une fuite de données massive.",
						"spanish": "Bajo la superficie perfecta de la ciudad, se informó de la primera grieta. Un incidente masivo de filtración de datos.",
						"vietnamese": "Bên dưới vẻ ngoài hoàn hảo của thành phố, vết nứt đầu tiên đã được báo cáo. Một vụ rò rỉ dữ liệu lớn.",
						"thai": "ภายใต้พื้นผิวที่สมบูรณ์แบบของเมือง รอยร้าวแรกได้ถูกรายงาน เหตุการณ์ข้อมูลรั่วไหลครั้งใหญ่",
						"hindi": "शहर की त्रुटिहीन सतह के नीचे, पहली दरार की सूचना मिली। एक बड़ा डेटा उल्लंघन।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이게 대체 무슨… 일이야?",
						"english": "What in the… world is this?",
						"japanese": "これ、一体何の… ことだ？",
						"chinese": "这到底… 是怎么回事？",
						"french": "Qu'est-ce que… c'est que ça ?",
						"spanish": "¿Qué… demonios es esto?",
						"vietnamese": "Chuyện quái quỷ gì… thế này?",
						"thai": "นี่มันเรื่องอะไรกัน… เนี่ย?",
						"hindi": "यह आखिर… क्या है?"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "echo",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "안녕. 난 에코. 네가 찾는 걸 조금은 알아.",
						"english": "Hey. I'm Echo. I know a little about what you're looking for.",
						"japanese": "やあ。私はエコー。君が探しているものを少しは知っているよ。",
						"chinese": "你好。我是艾可。你找的东西，我略知一二。",
						"french": "Salut. Je suis Echo. Je sais un peu ce que tu cherches.",
						"spanish": "Hola. Soy Echo. Sé un poco sobre lo que buscas.",
						"vietnamese": "Chào. Tôi là Echo. Tôi biết một chút về những gì bạn đang tìm.",
						"thai": "สวัสดี ฉันคือเอคโค่ ฉันรู้บางอย่างเกี่ยวกับสิ่งที่คุณกำลังมองหา",
						"hindi": "नमस्ते। मैं इको हूँ। तुम जो ढूंढ रहे हो, उसके बारे में मुझे थोड़ी जानकारी है।"
					},
					"emotion": "base",
					"speaker": "echo"
				},
				{
					"speaker": "echo",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이 도시, 겉보기엔 완벽해 보이지? 근데 가끔… 모든 게 반복되는 기시감이 들어.",
						"english": "This city, it seems perfect, right? But sometimes… I get a sense of déjà vu, like everything's repeating.",
						"japanese": "この都市、完璧に見えるだろ？でも時々…全てが繰り返されるようなデジャヴを感じるんだ。",
						"chinese": "这座城市，表面上看起来很完美，对吧？但有时… 我会有一种似曾相识的感觉，仿佛一切都在重复。",
						"french": "Cette ville, elle a l'air parfaite, non ? Mais parfois… j'ai une impression de déjà-vu, comme si tout se répétait.",
						"spanish": "Esta ciudad, parece perfecta, ¿verdad? Pero a veces… tengo una sensación de déjà vu, como si todo se repitiera.",
						"vietnamese": "Thành phố này, trông có vẻ hoàn hảo, đúng không? Nhưng đôi khi… tôi có cảm giác deja vu, như thể mọi thứ đang lặp lại.",
						"thai": "เมืองนี้ ดูเหมือนจะสมบูรณ์แบบใช่ไหม? แต่บางครั้ง... ฉันรู้สึกเหมือนเดจาวู ราวกับว่าทุกอย่างกำลังวนซ้ำ",
						"hindi": "यह शहर, एकदम सही लगता है, है ना? लेकिन कभी-कभी… मुझे deja vu का एहसास होता है, जैसे सब कुछ दोहराया जा रहा है।"
					}
				},
				{
					"content": {
						"korean": "이걸로 해킹 흔적을 추적해봐. 어딘가 부조리한 냄새가 날 거야.",
						"english": "Use this to track the hacking traces. You'll sniff out something absurd somewhere.",
						"japanese": "これを使ってハッキングの痕跡を追ってみて。どこかに不条理な臭いがするはずだ。",
						"chinese": "用这个追踪黑客的痕迹。你会发现某个地方有荒谬的气味。",
						"french": "Utilise ça pour traquer les traces de piratage. Tu sentiras quelque chose d'absurde quelque part.",
						"spanish": "Usa esto para rastrear las huellas del hackeo. Olfatearás algo absurdo en algún lugar.",
						"vietnamese": "Dùng cái này để theo dõi dấu vết hack. Bạn sẽ ngửi thấy mùi gì đó vô lý ở đâu đó.",
						"thai": "ใช้สิ่งนี้เพื่อติดตามร่องรอยการแฮ็ก คุณจะเจอสิ่งที่ไม่สมเหตุสมผลบางอย่างที่ไหนสักแห่ง",
						"hindi": "इसका उपयोग हैकिंग के निशानों को ट्रैक करने के लिए करो। तुम्हें कहीं न कहीं कुछ बेतुका मिलेगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "echo"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "유출 흔적을 따라가던 중, 이상한 디지털 계약서 하나를 발견했다.",
						"english": "While following the breach traces, I found a strange digital contract.",
						"japanese": "流出の痕跡を追っていたところ、奇妙なデジタル契約書を一つ見つけた。",
						"chinese": "在追寻泄露痕迹时，我发现了一份奇怪的数字合同。",
						"french": "En suivant les traces de la fuite, j'ai découvert un étrange contrat numérique.",
						"spanish": "Mientras seguía las huellas de la filtración, encontré un extraño contrato digital.",
						"vietnamese": "Trong lúc theo dõi dấu vết rò rỉ, tôi đã tìm thấy một hợp đồng kỹ thuật số kỳ lạ.",
						"thai": "ขณะกำลังตามรอยการรั่วไหล ฉันพบสัญญาดิจิทัลแปลกๆ ฉบับหนึ่ง",
						"hindi": "लीक के निशानों का पीछा करते हुए, मुझे एक अजीब डिजिटल अनुबंध मिला।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이거 뭐야? 오류 코드가… 잠깐, 사라졌어?",
						"english": "What's this? An error code... Wait, it vanished?",
						"japanese": "これは何だ？エラーコードが…あれ、消えた？",
						"chinese": "这是什么？错误代码……等等，消失了？",
						"french": "Qu'est-ce que c'est ? Un code d'erreur... Attends, ça a disparu ?",
						"spanish": "¿Qué es esto? ¿Un código de error...? Espera, ¿desapareció?",
						"vietnamese": "Cái gì đây? Một mã lỗi... Khoan đã, nó biến mất rồi à?",
						"thai": "นี่อะไรน่ะ? รหัสข้อผิดพลาด... เดี๋ยวสิ หายไปแล้วเหรอ?",
						"hindi": "यह क्या है? एक एरर कोड... रुको, यह गायब हो गया?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "echo",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "또야? 나도 가끔 그런 순간을 봐. 없던 일처럼 사라지는 것들.",
						"english": "Again? I see moments like that sometimes too. Things that vanish as if they never were.",
						"japanese": "またか？私も時々そういう瞬間を見るよ。なかったことのように消えるものたちを。",
						"chinese": "又来了？我偶尔也会看到那种时刻。那些仿佛从未存在过般消失的东西。",
						"french": "Encore ? Moi aussi, je vois parfois de tels instants. Des choses qui disparaissent comme si elles n'avaient jamais existé.",
						"spanish": "¿Otra vez? Yo también veo esos momentos a veces. Cosas que desaparecen como si nunca hubieran existido.",
						"vietnamese": "Lại nữa à? Tôi cũng thỉnh thoảng thấy những khoảnh khắc như vậy. Những thứ biến mất như thể chúng chưa từng tồn tại.",
						"thai": "อีกแล้วเหรอ? ฉันก็เคยเห็นช่วงเวลาแบบนั้นเหมือนกันนะ สิ่งที่หายไปราวกับไม่เคยมีอยู่จริง",
						"hindi": "फिर से? मैं भी कभी-कभी ऐसे पल देखता हूँ। ऐसी चीजें जो ऐसे गायब हो जाती हैं जैसे वे कभी थीं ही नहीं।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그게 진실이라면… 뭐가 진짜인 걸까?",
						"english": "If that's the truth... what's real then?",
						"japanese": "それが真実なら…何が本当なんだろう？",
						"chinese": "如果那是真相……那什么才是真实的呢？",
						"french": "Si c'est la vérité… alors qu'est-ce qui est réel ?",
						"spanish": "Si esa es la verdad... ¿qué es lo real entonces?",
						"vietnamese": "Nếu đó là sự thật... vậy cái gì là thật?",
						"thai": "ถ้านั่นคือความจริง... แล้วอะไรคือของจริงล่ะ?",
						"hindi": "अगर वही सच है... तो फिर असली क्या है?"
					},
					"type": "speech",
					"speaker": "echo"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…모르겠어. 그냥 계속 찾아봐야지.",
						"english": "...I don't know. I guess I'll just keep looking.",
						"japanese": "…わからない。ただ、探し続けるしかない。",
						"chinese": "……我不知道。只能继续寻找了。",
						"french": "...Je ne sais pas. Je suppose que je dois juste continuer à chercher.",
						"spanish": "...No lo sé. Supongo que tendré que seguir buscando.",
						"vietnamese": "...Tôi không biết. Chắc là cứ phải tiếp tục tìm thôi.",
						"thai": "...ไม่รู้สิ. คงต้องหาต่อไปเรื่อยๆ",
						"hindi": "...मुझे नहीं पता। बस मुझे ढूँढ़ते रहना होगा।"
					},
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "폐쇄된 서버실, 데이터 잔해 속에서 낡은 흑백 사진 조각을 발견했다.",
						"english": "In the closed server room, amidst data remnants, I found a piece of an old black-and-white photo.",
						"japanese": "閉鎖されたサーバー室、データ残骸の中から、古びた白黒写真の破片を見つけた。",
						"chinese": "在封闭的服务器室里，数据残骸中，我发现了一张旧的黑白照片碎片。",
						"french": "Dans la salle des serveurs fermée, parmi les débris de données, j'ai trouvé un fragment d'une vieille photo en noir et blanc.",
						"spanish": "En la sala de servidores clausurada, entre los restos de datos, encontré un trozo de una vieja foto en blanco y negro.",
						"vietnamese": "Trong phòng máy chủ bị phong tỏa, giữa đống tàn dư dữ liệu, tôi tìm thấy một mảnh ảnh đen trắng cũ.",
						"thai": "ในห้องเซิร์ฟเวอร์ที่ถูกปิดตาย ท่ามกลางซากข้อมูล ฉันพบชิ้นส่วนภาพถ่ายขาวดำเก่าๆ",
						"hindi": "बंद सर्वर रूम में, डेटा के अवशेषों के बीच, मुझे एक पुरानी काली-सफेद तस्वीर का टुकड़ा मिला।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "이건… 흑백 사진? 여기서 왜 이런 게?",
						"english": "This is... a black-and-white photo? Why is something like this here?",
						"japanese": "これが…白黒写真？なぜこんなものがここに？",
						"chinese": "这是……黑白照片？为什么这里会有这种东西？",
						"french": "C'est... une photo en noir et blanc ? Pourquoi y a-t-il quelque chose comme ça ici ?",
						"spanish": "¿Esto es... una foto en blanco y negro? ¿Por qué hay algo así aquí?",
						"vietnamese": "Đây là... một bức ảnh đen trắng? Sao lại có thứ này ở đây?",
						"thai": "นี่มัน... ภาพขาวดำเหรอ? ทำไมถึงมีของแบบนี้อยู่ที่นี่?",
						"hindi": "यह... एक काली-सफेd तस्वीर है? ऐसी चीज़ यहाँ क्यों है?"
					},
					"type": "speech"
				},
				{
					"speaker": "echo",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "echo",
					"emotion": "sad",
					"content": {
						"korean": "낯설지만 익숙한 느낌… 과거의 그림자 같아.",
						"english": "It feels strange yet familiar... like a shadow from the past.",
						"japanese": "見慣れないが、懐かしい感じ…過去の影のようだ。",
						"chinese": "陌生却又熟悉的感觉……就像过去的影子。",
						"french": "Une sensation étrange mais familière... comme une ombre du passé.",
						"spanish": "Una sensación extraña pero familiar... como una sombra del pasado.",
						"vietnamese": "Cảm giác lạ lẫm mà quen thuộc... giống như cái bóng của quá khứ.",
						"thai": "รู้สึกแปลกแต่คุ้นเคย... เหมือนเงาจากอดีต",
						"hindi": "अजीब लेकिन जानी-पहचानी भावना... जैसे अतीत की परछाई।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이 도시엔 사라진 기록들이 너무 많아. 어쩌면… 우리도 그중 하나일지도.",
						"english": "This city has too many vanished records. Maybe... we're one of them too.",
						"japanese": "この街には消えた記録が多すぎる。もしかしたら…私たちもその一つなのかも。",
						"chinese": "这座城市有太多消失的记录了。也许……我们也是其中之一。",
						"french": "Cette ville a trop de dossiers disparus. Peut-être... que nous en faisons partie aussi.",
						"spanish": "Esta ciudad tiene demasiados registros desaparecidos. Quizás... nosotros también somos uno de ellos.",
						"vietnamese": "Thành phố này có quá nhiều hồ sơ biến mất. Có lẽ... chúng ta cũng là một trong số đó.",
						"thai": "เมืองนี้มีบันทึกที่หายไปเยอะเกินไป บางที... เราก็อาจจะเป็นหนึ่งในนั้นด้วย",
						"hindi": "इस शहर में बहुत सारे गायब हुए रिकॉर्ड हैं। शायद... हम भी उनमें से एक हैं।"
					},
					"speaker": "echo"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "무슨 소리야.",
						"english": "What are you talking about?",
						"japanese": "何を言ってるんだ。",
						"chinese": "你在说什么？",
						"french": "Qu'est-ce que tu racontes ?",
						"spanish": "¿De qué hablas?",
						"vietnamese": "Cậu nói gì vậy.",
						"thai": "พูดอะไรน่ะ",
						"hindi": "तुम क्या कह रहे हो।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "개인 단말기에 알 수 없는 암호화 메시지 조각들이 전송되기 시작했다. 불안감이 커졌다.",
						"english": "Fragments of unknown encrypted messages began to be sent to the personal terminal. Unease grew.",
						"japanese": "個人端末に未知の暗号化されたメッセージの断片が送られ始めた。不安感が増した。",
						"chinese": "未知的加密信息片段开始传输到个人终端。不安感加剧了。",
						"french": "Des fragments de messages cryptés inconnus ont commencé à être envoyés au terminal personnel. L'inquiétude grandissait.",
						"spanish": "Fragmentos de mensajes cifrados desconocidos comenzaron a transmitirse al terminal personal. La inquietud aumentó.",
						"vietnamese": "Các mảnh tin nhắn được mã hóa không xác định bắt đầu được gửi đến thiết bị cá nhân. Cảm giác bất an tăng lên.",
						"thai": "ชิ้นส่วนข้อความเข้ารหัสที่ไม่รู้จักเริ่มถูกส่งมายังอุปกรณ์ส่วนตัว ความรู้สึกไม่สบายใจเพิ่มขึ้น",
						"hindi": "अज्ञात एन्क्रिप्टेड संदेशों के टुकड़े व्यक्तिगत टर्मिनल पर भेजे जाने लगे। बेचैनी बढ़ गई।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "또 이상한 메시지… 대체 누가 보내는 거야?",
						"english": "Another strange message... Who's sending these?",
						"japanese": "また変なメッセージ…一体誰が送ってるんだ？",
						"chinese": "又是奇怪的信息…到底是谁发的？",
						"french": "Encore un message étrange... Qui envoie ça ?",
						"spanish": "Otro mensaje extraño... ¿Quién los envía?",
						"vietnamese": "Lại một tin nhắn lạ... Rốt cuộc là ai gửi vậy?",
						"thai": "ข้อความแปลกๆ อีกแล้ว... ใครเป็นคนส่งกันแน่?",
						"hindi": "फिर से अजीब संदेश... आखिर कौन भेज रहा है ये?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "echo",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"speaker": "echo",
					"emotion": "base",
					"content": {
						"korean": "저건… 시스템의 속삭임일까? 아니면… 잊혀진 자들의 외침일까?",
						"english": "Is that... the system's whisper? Or... the forgotten's cry?",
						"japanese": "あれは…システムの囁きか？それとも…忘れ去られた者たちの叫びか？",
						"chinese": "那是…系统的低语吗？还是…被遗忘者的呐喊？",
						"french": "Est-ce... le murmure du système ? Ou... le cri des oubliés ?",
						"spanish": "¿Es eso... el susurro del sistema? ¿O... el lamento de los olvidados?",
						"vietnamese": "Đó là... tiếng thì thầm của hệ thống? Hay... tiếng gào thét của những kẻ bị lãng quên?",
						"thai": "นั่นมัน... เสียงกระซิบของระบบเหรอ? หรือ... เสียงกรีดร้องของผู้ถูกลืมกันแน่?",
						"hindi": "क्या वो... सिस्टम की फुसफुसाहट है? या... भुला दिए गए लोगों की पुकार?"
					},
					"type": "speech"
				},
				{
					"speaker": "echo",
					"type": "speech",
					"content": {
						"korean": "이 길의 끝은… 아무것도 없을지도 몰라. 그저, 계속될 뿐.",
						"english": "The end of this path... might lead to nothing. It might just go on.",
						"japanese": "この道の果ては…何もないのかもしれない。ただ、続くだけだ。",
						"chinese": "这条路的尽头…可能什么都没有。只是，会一直持续下去。",
						"french": "Le bout de ce chemin... pourrait n'être rien. Juste continuer.",
						"spanish": "El final de este camino... podría no llevar a nada. Solo continuar.",
						"vietnamese": "Cuối con đường này... có thể chẳng có gì cả. Chỉ là, nó cứ tiếp diễn thôi.",
						"thai": "ปลายทางของถนนสายนี้... อาจจะไม่มีอะไรเลย แค่ดำเนินต่อไปเท่านั้น",
						"hindi": "इस रास्ते का अंत... शायद कुछ भी न हो। बस, ये चलता ही रहे।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그래도 가봐야 해. 진실을 알고 싶어.",
						"english": "Even so, I have to go. I want to know the truth.",
						"japanese": "それでも、行かなきゃ。真実を知りたい。",
						"chinese": "即便如此，我也必须去。我想知道真相。",
						"french": "Quand même, je dois y aller. Je veux savoir la vérité.",
						"spanish": "Aun así, tengo que ir. Quiero saber la verdad.",
						"vietnamese": "Dù vậy, tôi vẫn phải đi. Tôi muốn biết sự thật.",
						"thai": "ถึงอย่างนั้นก็ต้องไป ฉันอยากรู้ความจริง",
						"hindi": "फिर भी, मुझे जाना होगा। मैं सच जानना चाहता हूँ।"
					},
					"emotion": "base",
					"speaker": "character_any"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "하찮은 발버둥. 모든 노력은… 무의미하다.",
						"english": "Futile struggle. All efforts are... meaningless.",
						"japanese": "取るに足らないもがき。全ての努力は…無意味だ。",
						"chinese": "渺小的挣扎。所有的努力都……毫无意义。",
						"french": "Lutte futile. Tous les efforts sont… vains.",
						"spanish": "Lucha inútil. Todos los esfuerzos son... insignificantes.",
						"vietnamese": "Sự vùng vẫy vô ích. Mọi nỗ lực đều… vô nghĩa.",
						"thai": "การดิ้นรนที่ไร้ประโยชน์ ความพยายามทั้งหมดนั้น… ไร้ความหมาย",
						"hindi": "तुच्छ संघर्ष। सभी प्रयास... व्यर्थ हैं।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "아직… 끝나지 않았어! 다시 시작할 거야.",
						"english": "It's not... over yet! I'll start again.",
						"japanese": "まだ…終わってない！もう一度始める。",
						"chinese": "还没……结束！我会重新开始。",
						"french": "Ce n'est pas… encore fini ! Je recommencerai.",
						"spanish": "¡Aún no... ha terminado! Volveré a empezar.",
						"vietnamese": "Vẫn chưa… kết thúc! Tôi sẽ bắt đầu lại.",
						"thai": "ยัง…ไม่จบ! ฉันจะเริ่มใหม่อีกครั้ง",
						"hindi": "अभी... खत्म नहीं हुआ है! मैं फिर से शुरू करूंगा।"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "다시 와라. 어차피… 결과는 같다.",
						"english": "Come again. The outcome will be the same... anyway.",
						"japanese": "また来い。どうせ…結果は同じだ。",
						"chinese": "再来。反正……结果都一样。",
						"french": "Reviens. De toute façon… le résultat sera le même.",
						"spanish": "Vuelve. De todos modos... el resultado será el mismo.",
						"vietnamese": "Hãy trở lại đi. Dù sao thì… kết quả cũng vậy thôi.",
						"thai": "กลับมาอีกสิ ยังไง…ผลลัพธ์ก็เหมือนเดิมอยู่ดี",
						"hindi": "फिर से आओ। वैसे भी... परिणाम वही रहेगा।"
					},
					"emotion": "base"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "고작… 이런 것으로… 아무것도… 바뀌지 않아…",
						"english": "Just... with this... nothing... will change...",
						"japanese": "たかが…こんなもので…何も…変わらない…",
						"chinese": "就凭…这点东西…什么都…不会改变…",
						"french": "Juste... avec ça... rien... ne changera...",
						"spanish": "Solo... con esto... nada... cambiará...",
						"vietnamese": "Chỉ là... với thứ này... chẳng có gì... thay đổi được đâu...",
						"thai": "แค่... แค่นี้... ไม่มีอะไร... เปลี่ยนแปลงหรอก...",
						"hindi": "बस... इससे... कुछ भी... नहीं बदलेगा..."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "겨우 이거였나? 너무… 허무해.",
						"english": "Is this all? So... anticlimactic.",
						"japanese": "これだけだったの？あまりにも…虚しい。",
						"chinese": "就这？太……空虚了。",
						"french": "C'était tout ? Si… décevant.",
						"spanish": "¿Eso era todo? Qué... decepcionante.",
						"vietnamese": "Chỉ có vậy thôi sao? Thật… vô nghĩa.",
						"thai": "แค่นี้เองเหรอ? มันช่าง… ว่างเปล่า",
						"hindi": "बस इतना ही था? कितना... निरर्थक।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "거대한 시스템의 첫 번째 부속품이 파괴됐다. 하지만 진실은, 더욱 복잡하고 냉소적인 미로 속에서 기다리고 있었다.",
						"english": "The first component of the massive system has been destroyed. But the truth awaited, within a more complex and cynical labyrinth.",
						"japanese": "巨大なシステムの最初の部品が破壊された。しかし真実は、より複雑で冷笑的な迷宮の中で待っていた。",
						"chinese": "庞大系统的第一个组件被摧毁了。但真相，在一个更加复杂和冷酷的迷宫中等待着。",
						"french": "Le premier composant du système colossal a été détruit. Mais la vérité attendait, au cœur d'un labyrinthe encore plus complexe et cynique.",
						"spanish": "El primer componente del sistema masivo ha sido destruido. Pero la verdad esperaba, dentro de un laberinto más complejo y cínico.",
						"vietnamese": "Bộ phận đầu tiên của hệ thống khổng lồ đã bị phá hủy. Nhưng sự thật đang chờ đợi, trong một mê cung phức tạp và tàn nhẫn hơn.",
						"thai": "ส่วนประกอบแรกของระบบอันยิ่งใหญ่ถูกทำลายลงแล้ว แต่ความจริงกำลังรอคอยอยู่ในเขาวงกตที่ซับซ้อนและเย้ยหยันยิ่งกว่า",
						"hindi": "विशाल प्रणाली का पहला घटक नष्ट हो गया है। लेकिन सच्चाई एक अधिक जटिल और सनकी भूलभुलैया में इंतजार कर रही थी।"
					},
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "마침내, 데이터 유출의 근원지. 그곳에 정체 모를 존재가 기다리고 있었다.",
						"english": "Finally, the source of the data leak. An unknown entity awaited there.",
						"japanese": "ついに、データ流出の根源地。そこに正体不明の存在が待ち受けていた。",
						"chinese": "终于，数据泄露的源头。一个不明身份的存在在那里等待着。",
						"french": "Enfin, la source de la fuite de données. Une entité inconnue y attendait.",
						"spanish": "Finalmente, el origen de la fuga de datos. Una entidad desconocida esperaba allí.",
						"vietnamese": "Cuối cùng, nguồn gốc của rò rỉ dữ liệu. Một thực thể không rõ danh tính đang chờ đợi ở đó.",
						"thai": "ในที่สุด ก็มาถึงแหล่งที่มาของการรั่วไหลของข้อมูล มีสิ่งมีชีวิตที่ไม่รู้จักรออยู่ที่นั่น",
						"hindi": "आखिरकार, डेटा लीक का स्रोत। वहाँ एक अज्ञात इकाई इंतज़ार कर रही थी।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "여기까지 온 건가. 어리석은 인간.",
						"english": "You've come this far. Foolish human.",
						"japanese": "ここまで来たか。愚かな人間よ。",
						"chinese": "你竟然走到这里。愚蠢的人类。",
						"french": "Tu es venu jusqu'ici. Humain insensé.",
						"spanish": "Has llegado hasta aquí. Humano estúpido.",
						"vietnamese": "Ngươi đã đến được đây rồi sao. Con người ngu ngốc.",
						"thai": "มาได้ถึงนี่แล้วสินะ มนุษย์ผู้โง่เขลา",
						"hindi": "तुम यहाँ तक आ गए। मूर्ख इंसान।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "너 때문에 다 시작된 거야!",
						"english": "It all started because of you!",
						"japanese": "全部お前のせいだ！",
						"chinese": "都是因为你才开始的！",
						"french": "Tout a commencé à cause de toi !",
						"spanish": "¡Todo empezó por tu culpa!",
						"vietnamese": "Tất cả là do ngươi mà ra!",
						"thai": "ทุกอย่างเริ่มต้นขึ้นเพราะแก!",
						"hindi": "ये सब तुम्हारी वजह से शुरू हुआ!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "시작과 끝은… 이미 정해져 있다. 넌 그저, 연극의 일부일 뿐.",
						"english": "The beginning and the end... are already decided. You are merely a part of the play.",
						"japanese": "始まりと終わりは…既に決まっている。お前はただの、劇の一部に過ぎない。",
						"chinese": "开始和结束…早已注定。你不过是，戏剧的一部分。",
						"french": "Le début et la fin... sont déjà décidés. Tu n'es qu'une partie de la pièce.",
						"spanish": "El principio y el fin... ya están decididos. Tú eres solo una parte de la obra.",
						"vietnamese": "Khởi đầu và kết thúc... đã được định sẵn rồi. Ngươi chỉ là một phần của vở kịch mà thôi.",
						"thai": "จุดเริ่มต้นและจุดจบ... ถูกกำหนดไว้แล้ว แกเป็นแค่ส่วนหนึ่งของการแสดงเท่านั้น",
						"hindi": "शुरुआत और अंत... पहले से तय हैं। तुम बस, इस नाटक का एक हिस्सा हो।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "시끄러워! 네 멋대로 두지 않을 거야!",
						"english": "Shut up! I won't let you have your way!",
						"japanese": "黙れ！お前の好きにはさせない！",
						"chinese": "闭嘴！我不会让你得逞的！",
						"french": "Tais-toi ! Je ne te laisserai pas faire !",
						"spanish": "¡Cállate! ¡No te saldrás con la tuya!",
						"vietnamese": "Im đi! Ta sẽ không để ngươi làm theo ý mình đâu!",
						"thai": "หุบปาก! ฉันไม่ยอมให้แกทำตามใจชอบหรอก!",
						"hindi": "चुप रहो! मैं तुम्हें अपनी मनमानी नहीं करने दूँगा!"
					},
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"화려한 디지털 도시, 모든 것이 완벽했다.",
			"어느 날, 첫 번째 데이터 유출 사건이 터졌다.",
			"진실을 쫓는 자의 어리석은 연극이 시작된다.",
			"이 모든 것이 결국 아무것도 바꾸지 못할지라도."
		],
		"english": [
			"A vibrant digital city, everything was perfect.",
			"One day, the first data breach occurred.",
			"The foolish play of truth-seekers begins.",
			"Even if all this changes nothing in the end."
		],
		"japanese": [
			"華やかなデジタル都市、全てが完璧だった。",
			"ある日、最初のデータ流出事件が勃発した。",
			"真実を追う者の愚かな演劇が始まる。",
			"この全てが、結局何も変えられないとしても。"
		],
		"chinese": [
			"繁华的数字都市，一切都完美无瑕。",
			"某天，第一起数据泄露事件爆发了。",
			"追寻真相者的愚蠢戏码开始了。",
			"即使这一切最终什么都改变不了。"
		],
		"french": [
			"Une ville numérique éclatante, tout était parfait.",
			"Un jour, la première fuite de données a éclaté.",
			"Le jeu insensé de ceux qui cherchent la vérité commence.",
			"Même si tout cela ne change rien au final."
		],
		"spanish": [
			"Una ciudad digital deslumbrante, todo era perfecto.",
			"Un día, se produjo la primera filtración de datos.",
			"Comienza la insensata obra de los que buscan la verdad.",
			"Aunque todo esto no cambie nada al final."
		],
		"vietnamese": [
			"Thành phố kỹ thuật số lộng lẫy, mọi thứ đều hoàn hảo.",
			"Một ngày nọ, vụ rò rỉ dữ liệu đầu tiên đã xảy ra.",
			"Vở kịch ngớ ngẩn của những kẻ tìm kiếm sự thật bắt đầu.",
			"Ngay cả khi tất cả những điều này cuối cùng không thay đổi được gì."
		],
		"thai": [
			"เมืองดิจิทัลที่เจิดจรัส ทุกสิ่งสมบูรณ์แบบ",
			"อยู่มาวันหนึ่ง เหตุการณ์ข้อมูลรั่วไหลครั้งแรกก็เกิดขึ้น",
			"การแสดงอันโง่เขลาของผู้แสวงหาความจริงเริ่มต้นขึ้น",
			"แม้ว่าทั้งหมดนี้สุดท้ายแล้วจะไม่เปลี่ยนแปลงอะไรเลยก็ตาม"
		],
		"hindi": [
			"एक शानदार डिजिटल शहर, सब कुछ एकदम सही था।",
			"एक दिन, पहला डेटा उल्लंघन हुआ।",
			"सत्य की तलाश करने वालों का मूर्खतापूर्ण नाटक शुरू होता है।",
			"भले ही यह सब अंत में कुछ भी न बदले।"
		]
	}
} as const;
