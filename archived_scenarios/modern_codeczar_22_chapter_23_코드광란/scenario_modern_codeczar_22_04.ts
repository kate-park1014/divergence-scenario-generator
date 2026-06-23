export const scenario_modern_codeczar_22_04 = {
	"scenario_id": "modern_codeczar_22_04",
	"order": 4,
	"act": "rising",
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
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "코드 제왕의 시스템 깊숙한 곳. 미지의 디지털 공간이 눈앞에 펼쳐졌다.",
						"english": "Deep within the Code Emperor's system. An unknown digital space unfolds before our eyes.",
						"japanese": "コード帝王のシステム深部。未知のデジタル空間が目の前に広がった。",
						"chinese": "深入代码帝王系统。未知的数字空间呈现在眼前。",
						"french": "Au plus profond du système de l'Empereur du Code. Un espace numérique inconnu s'étend devant nous.",
						"spanish": "En lo más profundo del sistema del Emperador del Código. Un espacio digital desconocido se despliega ante nuestros ojos.",
						"vietnamese": "Sâu thẳm trong hệ thống của Code Hoàng đế. Một không gian kỹ thuật số bí ẩn mở ra trước mắt.",
						"thai": "ลึกเข้าไปในระบบของ Code Emperor มิติทางดิจิทัลที่ไม่รู้จักได้เปิดออกตรงหน้า",
						"hindi": "कोड सम्राट की प्रणाली के गहरे भीतर। एक अज्ञात डिजिटल स्थान हमारी आँखों के सामने खुल गया है।"
					},
					"speaker": "narrator"
				},
				{
					"duration_ms": 500,
					"speaker": "ren",
					"action": "enter",
					"spot": [
						5,
						2
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "…왔네. 코드 제왕의 코어에 침투 중이었어.",
						"english": "...You're here. I was infiltrating the Code Emperor's core.",
						"japanese": "…来たか。コード帝王のコアに侵入中だった。",
						"chinese": "…你来了。我正在渗透代码帝王的核心。",
						"french": "...Vous êtes là. J'étais en train d'infiltrer le cœur de l'Empereur du Code.",
						"spanish": "...Has llegado. Estaba infiltrándome en el núcleo del Emperador del Código.",
						"vietnamese": "...Ngươi đến rồi. Ta đang xâm nhập vào lõi của Code Hoàng đế.",
						"thai": "...มาแล้วเหรอ ฉันกำลังแทรกซึมเข้าไปในแกนกลางของ Code Emperor",
						"hindi": "...तुम आ गए। मैं कोड सम्राट के कोर में घुसपैठ कर रहा था।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "ren"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이게 다 렌의 짓이었군.",
						"english": "So this was all Ren's doing.",
						"japanese": "これもすべてレンの仕業か。",
						"chinese": "原来这一切都是伦干的。",
						"french": "C'était donc l'œuvre de Ren.",
						"spanish": "Así que todo esto era obra de Ren.",
						"vietnamese": "Vậy ra đây đều là việc làm của Ren.",
						"thai": "นี่มันฝีมือเรนทั้งหมดเลยนี่นา",
						"hindi": "तो यह सब रेन का काम था।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "조용히 해. 곧 터질 거야.",
						"english": "Quiet. It's about to explode.",
						"japanese": "静かに。すぐに爆発するだろう。",
						"chinese": "安静。它很快就要爆炸了。",
						"french": "Silence. Ça va exploser.",
						"spanish": "Silencio. Va a explotar.",
						"vietnamese": "Yên lặng. Nó sắp nổ rồi.",
						"thai": "เงียบหน่อย มันกำลังจะระเบิดแล้ว",
						"hindi": "शांत हो जाओ। यह जल्द ही फटने वाला है।"
					},
					"speaker": "ren"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "시스템이 불안정하게 흔들렸다.",
						"english": "The system shook unstably.",
						"japanese": "システムが不安定に揺れた。",
						"chinese": "系统不稳定地颤抖着。",
						"french": "Le système vacilla de manière instable.",
						"spanish": "El sistema se sacudió inestablemente.",
						"vietnamese": "Hệ thống rung lắc bất ổn.",
						"thai": "ระบบสั่นสะเทือนอย่างไม่เสถียร",
						"hindi": "सिस्टम अस्थिर रूप से हिल गया।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "ren",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						5,
						2
					],
					"action": "enter"
				},
				{
					"speaker": "ren",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이런… 예상 밖의 방해야.",
						"english": "Damn... unexpected interference.",
						"japanese": "くそ…予期せぬ邪魔が入った。",
						"chinese": "糟了……意想不到的干扰。",
						"french": "Mince... une interférence inattendue.",
						"spanish": "Maldición... una interferencia inesperada.",
						"vietnamese": "Chết tiệt... sự cản trở ngoài dự kiến.",
						"thai": "แย่แล้ว... การขัดขวางที่ไม่คาดคิด",
						"hindi": "धिक्कार है... अप्रत्याशित हस्तक्षेप।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "중간 보스인가.",
						"english": "A mid-boss, then.",
						"japanese": "中ボスか。",
						"chinese": "是中级Boss吗？",
						"french": "Un boss intermédiaire, alors.",
						"spanish": "¿Un jefe intermedio?",
						"vietnamese": "Là boss giữa màn sao.",
						"thai": "บอสกลางทางหรือนี่",
						"hindi": "क्या यह एक मिड-बॉस है।"
					}
				},
				{
					"speaker": "ren",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "코드 제왕의 시스템이 내 침투를 막으려 해. 저 녀석은 그걸 강화하는 중이야.",
						"english": "The Code King's system is blocking my intrusion, and it's fortifying its defenses.",
						"japanese": "コードキングのシステムが侵入を阻止している。やつは強化中だ。",
						"chinese": "代码之王的系统正阻止我的入侵。它正在加强防卫。",
						"french": "Le système du Roi du Code bloque mon intrusion. Il renforce ses défenses.",
						"spanish": "El sistema del Rey del Código bloquea mi intrusión. Lo está reforzando.",
						"vietnamese": "Hệ thống của Code King đang chặn tôi đột nhập. Hắn đang tăng cường phòng thủ.",
						"thai": "ระบบของ Code King ขัดขวางการแทรกซึมของฉัน มันกำลังเสริมกำลังอยู่",
						"hindi": "कोड किंग का सिस्टम मेरी घुसपैठ को रोक रहा है। वह अपनी सुरक्षा मजबूत कर रहा है।"
					}
				},
				{
					"content": {
						"korean": "여기 데이터… 뭔가 강하게 집착하는 흔적이 있어.",
						"english": "This data… shows traces of strong obsession.",
						"japanese": "このデータ…何か強い執着の痕跡がある。",
						"chinese": "这些数据…有强烈执着的痕迹。",
						"french": "Ces données… portent les traces d'une forte obsession.",
						"spanish": "Estos datos… muestran rastros de una fuerte obsesión.",
						"vietnamese": "Dữ liệu ở đây… có dấu vết của sự ám ảnh mạnh mẽ.",
						"thai": "ข้อมูลนี้… มีร่องรอยของการยึดติดอย่างแรง",
						"hindi": "यह डेटा… किसी चीज़ के प्रति तीव्र आसक्ति के निशान दिखाता है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "ren"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "소유욕?",
						"english": "Possessiveness?",
						"japanese": "所有欲？",
						"chinese": "占有欲？",
						"french": "Possessivité ?",
						"spanish": "¿Posesividad?",
						"vietnamese": "Sự chiếm hữu?",
						"thai": "ความรู้สึกเป็นเจ้าของ?",
						"hindi": "अधिकार?"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "ren",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						5,
						2
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "휴… 고마워. 저 녀석… 정말 끈질기네.",
						"english": "Whew… Thanks. That guy… he's really persistent.",
						"japanese": "ふう…ありがとう。あいつ…本当にしつこいな。",
						"chinese": "呼…谢谢。那家伙…真够执着的。",
						"french": "Ouf… Merci. Ce type… il est vraiment tenace.",
						"spanish": "Uf… Gracias. Ese tipo… es realmente tenaz.",
						"vietnamese": "Phù… Cảm ơn. Hắn ta… thật sự dai dẳng.",
						"thai": "เฮ้อ… ขอบคุณนะ หมอนั่น… ดื้อด้านจริงๆ",
						"hindi": "उफ़… शुक्रिया। वह आदमी… सचमुच बहुत जिद्दी है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "ren"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그래서, 뭘 발견했어?",
						"english": "So, what did you find?",
						"japanese": "それで、何を発見した？",
						"chinese": "那么，你发现了什么？",
						"french": "Alors, qu'as-tu trouvé ?",
						"spanish": "Entonces, ¿qué encontraste?",
						"vietnamese": "Vậy, anh đã phát hiện ra điều gì?",
						"thai": "แล้วนายเจออะไรบ้าง?",
						"hindi": "तो, तुमने क्या पाया?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "코드 제왕의 핵심 흔적을 찾으려 했어. 근데 저 중간 보스 때문에 놓쳤어.",
						"english": "I was trying to find the Code King's core trace, but that mid-boss made me lose it.",
						"japanese": "コードキングの核心の痕跡を探そうとしたんだ。でも、あの中ボスに邪魔されて見失った。",
						"chinese": "我试图寻找代码之王的核心踪迹。但被那个中级首领干扰，错过了。",
						"french": "J'essayais de trouver la trace principale du Roi du Code, mais ce boss intermédiaire me l'a fait manquer.",
						"spanish": "Intenté encontrar el rastro central del Rey del Código. Pero ese jefe intermedio me lo hizo perder.",
						"vietnamese": "Tôi đã cố gắng tìm dấu vết cốt lõi của Code King. Nhưng tôi đã bỏ lỡ vì tên trùm giữa chừng đó.",
						"thai": "ฉันพยายามตามหาร่องรอยหลักของ Code King แต่ดันพลาดเพราะมิดบอสตัวนั้น",
						"hindi": "मैं कोड किंग के मुख्य निशान को खोजने की कोशिश कर रहा था। लेकिन उस मिड-बॉस की वजह से मैं चूक गया।"
					},
					"speaker": "ren"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이건… '내 영역 침범 금지' 메시지?",
						"english": "This is… a 'Do Not Trespass' message?",
						"japanese": "これは…『私の領域侵入禁止』メッセージ？",
						"chinese": "这是…'禁止侵犯我的领地'的消息？",
						"french": "C'est… un message 'Interdiction de pénétrer dans mon domaine' ?",
						"spanish": "Esto es… ¿un mensaje de 'Prohibido invadir mi territorio'?",
						"vietnamese": "Đây là… thông điệp 'Cấm xâm phạm lãnh thổ của tôi'?",
						"thai": "นี่มัน… ข้อความ 'ห้ามบุกรุกพื้นที่ของฉัน' งั้นเหรอ?",
						"hindi": "यह… 'मेरे क्षेत्र में घुसपैठ मना है' का संदेश है?"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "그게 핵심이야. 뭔가 강박적으로 소유하려는 흔적. 광기 어린 메시지가 섞여 있어.",
						"english": "That's the core. Traces of obsessive possessiveness. Mixed with insane messages.",
						"japanese": "それが核心だ。何かを強迫的に所有しようとする痕跡。狂気じみたメッセージが混じっている。",
						"chinese": "那才是核心。强迫性占有的痕迹。混杂着疯狂的信息。",
						"french": "C'est le cœur du problème. Des traces de possessivité obsessionnelle. Mêlées à des messages de folie.",
						"spanish": "Esa es la clave. Rastros de posesividad obsesiva. Mezclados con mensajes de locura.",
						"vietnamese": "Đó là cốt lõi. Dấu vết của sự chiếm hữu ám ảnh. Pha trộn với những thông điệp điên rồ.",
						"thai": "นั่นแหละคือแก่น ร่องรอยของความครอบครองอย่างบ้าคลั่ง ปนเปื้อนด้วยข้อความวิปลาส",
						"hindi": "यही मुख्य बात है। जुनूनी कब्जे के निशान। पागलपन भरे संदेशों के साथ मिले हुए।"
					},
					"speaker": "ren"
				},
				{
					"speaker": "ren",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이게 바로 과거의 잔혹한 명령과 현재의 혼란을 잇는 단서야.",
						"english": "This is the clue connecting the cruel commands of the past with the current chaos.",
						"japanese": "これが過去の残酷な命令と現在の混乱をつなぐ手がかりだ。",
						"chinese": "这就是连接过去残酷命令与当前混乱的线索。",
						"french": "C'est l'indice qui relie les ordres cruels du passé au chaos actuel.",
						"spanish": "Esta es la pista que conecta las crueles órdenes del pasado con el caos actual.",
						"vietnamese": "Đây chính là manh mối nối liền những mệnh lệnh tàn bạo của quá khứ với sự hỗn loạn hiện tại.",
						"thai": "นี่คือเบาะแสที่เชื่อมโยงคำสั่งอันโหดร้ายในอดีตกับความวุ่นวายในปัจจุบัน",
						"hindi": "यह वही सुराग है जो अतीत के क्रूर आदेशों को वर्तमान की अराजकता से जोड़ता है।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						5,
						2
					],
					"speaker": "ren",
					"duration_ms": 500
				},
				{
					"speaker": "ren",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 흔적… 단순한 오류가 아니야. 코드 제왕의 의지가 담겨 있어.",
						"english": "These traces… not just a simple error. They contain the Code King's will.",
						"japanese": "この痕跡…単純なエラーじゃない。コードキングの意志が込められている。",
						"chinese": "这些痕迹…不是简单的错误。它们包含着代码之王的意志。",
						"french": "Ces traces… ce n'est pas une simple erreur. Elles contiennent la volonté du Roi du Code.",
						"spanish": "Estos rastros… no son un simple error. Contienen la voluntad del Rey del Código.",
						"vietnamese": "Dấu vết này… không phải là một lỗi đơn thuần. Nó chứa đựng ý chí của Code King.",
						"thai": "ร่องรอยนี้… ไม่ใช่แค่ข้อผิดพลาดธรรมดา มันแฝงไว้ด้วยเจตจำนงของ Code King",
						"hindi": "ये निशान… सिर्फ एक साधारण त्रुटि नहीं हैं। इनमें कोड किंग की इच्छा समाहित है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그의 광기가 도시를 이렇게 만든 건가.",
						"english": "Did his madness do this to the city?",
						"japanese": "彼の狂気がこの街をこうさせたのか。",
						"chinese": "他的疯狂让这座城市变成了这样吗？",
						"french": "Est-ce sa folie qui a transformé la ville ainsi ?",
						"spanish": "¿Fue su locura lo que hizo esto a la ciudad?",
						"vietnamese": "Sự điên rồ của hắn đã biến thành phố thành ra thế này sao?",
						"thai": "ความบ้าคลั่งของเขาสร้างเมืองนี้ขึ้นมาหรือ?",
						"hindi": "क्या उसके पागलपन ने शहर को ऐसा बना दिया है?"
					}
				},
				{
					"speaker": "ren",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이제 되돌릴 수 없어. 더 깊이 들어가야만 해.",
						"english": "No turning back now. We must go deeper.",
						"japanese": "もう後戻りはできない。もっと深く進むしかない。",
						"chinese": "无法回头了。我们必须深入。",
						"french": "Impossible de revenir en arrière. Nous devons aller plus loin.",
						"spanish": "Ya no hay vuelta atrás. Debemos ir más profundo.",
						"vietnamese": "Không thể quay lại được nữa. Chúng ta phải đi sâu hơn.",
						"thai": "ย้อนกลับไม่ได้แล้ว เราต้องเข้าไปให้ลึกกว่านี้",
						"hindi": "अब वापस नहीं जा सकते। हमें और गहराई में जाना होगा।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "도시의 디지털 노이즈가 더욱 거세졌다. 출구가 보이지 않았다.",
						"english": "The city's digital noise grew louder. No exit in sight.",
						"japanese": "都市のデジタルノイズはさらに激しくなった。出口は見えなかった。",
						"chinese": "城市的数字噪音愈发响亮。出口杳无踪影。",
						"french": "Le bruit numérique de la ville s'intensifia. Aucune sortie en vue.",
						"spanish": "El ruido digital de la ciudad se hizo más fuerte. No había salida a la vista.",
						"vietnamese": "Tiếng ồn kỹ thuật số của thành phố càng dữ dội. Không thấy lối ra.",
						"thai": "เสียงรบกวนดิจิทัลของเมืองยิ่งรุนแรงขึ้น ไม่เห็นทางออก",
						"hindi": "शहर का डिजिटल शोर और तेज हो गया। कोई निकास नहीं दिख रहा था।"
					},
					"speaker": "narrator"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "어리석은 침입자… 코드 제왕의 지배는 영원하다….",
						"english": "Foolish intruders... The Code Emperor's reign is eternal....",
						"japanese": "愚かな侵入者よ…コード帝王の支配は永遠なり…。",
						"chinese": "愚蠢的入侵者……代码帝王的统治是永恒的……",
						"french": "Stupides intrus... Le règne de l'Empereur du Code est éternel....",
						"spanish": "Intrusos necios... El dominio del Emperador del Código es eterno....",
						"vietnamese": "Những kẻ xâm nhập ngu ngốc... Sự thống trị của Code Emperor là vĩnh cửu....",
						"thai": "ผู้บุกรุกโง่เขลา... การปกครองของ Code Emperor เป็นนิรันดร์...",
						"hindi": "मूर्ख घुसपैठियों... कोड सम्राट का शासन शाश्वत है...."
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 아직… 끝나지 않았어.",
						"english": "Damn it... It's not... over yet.",
						"japanese": "くそ…まだ…終わってない…。",
						"chinese": "该死……还没……结束。",
						"french": "Mince... Ce n'est pas... encore fini.",
						"spanish": "Maldita sea... Aún... no ha terminado.",
						"vietnamese": "Chết tiệt... Vẫn... chưa kết thúc.",
						"thai": "ให้ตายสิ... ยัง... ไม่จบ",
						"hindi": "धिक्कार है... अभी... खत्म नहीं हुआ।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"duration_ms": 500,
					"speaker": "ren",
					"action": "enter",
					"spot": [
						5,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "ren",
					"content": {
						"korean": "포기하지 마! 저 녀석을 뚫어야 해!",
						"english": "Don't give up! We have to break through that thing!",
						"japanese": "諦めるな！あいつを突破しなければ！",
						"chinese": "别放弃！我们必须突破那个家伙！",
						"french": "N'abandonne pas ! Nous devons percer à travers ça !",
						"spanish": "¡No te rindas! ¡Tenemos que atravesar a esa cosa!",
						"vietnamese": "Đừng bỏ cuộc! Chúng ta phải xuyên qua nó!",
						"thai": "อย่ายอมแพ้! เราต้องฝ่ามันไปให้ได้!",
						"hindi": "हार मत मानो! हमें उसे भेदना होगा!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 내 역할은… 여기까지인가… 하지만… 코드는… 사라지지 않아….",
						"english": "Urgh… Is this… my end…? But… the code… won't disappear…",
						"japanese": "くっ…私の役割は…ここまでか…しかし…コードは…消えない…。",
						"chinese": "呃…我的使命…到此为止了吗…但是…代码…不会消失…。",
						"french": "Argh… Mon rôle… s'arrête-t-il ici…? Mais… le code… ne disparaîtra pas…",
						"spanish": "Uf… ¿Es este… mi fin…? Pero… el código… no desaparecerá…",
						"vietnamese": "Khụ… Vai trò của ta… đến đây là hết sao… Nhưng… mã lệnh… sẽ không biến mất…",
						"thai": "อึก... บทบาทของข้า... สิ้นสุดที่ตรงนี้แล้วหรือ... แต่... โค้ด... จะไม่หายไป...",
						"hindi": "उह… क्या यह… मेरा अंत है…? लेकिन… कोड… गायब नहीं होगा…।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "쓰러뜨렸다!",
						"english": "Defeated!",
						"japanese": "倒した！",
						"chinese": "击败了！",
						"french": "Vaincu !",
						"spanish": "¡Derrotado!",
						"vietnamese": "Đã đánh bại!",
						"thai": "จัดการได้แล้ว!",
						"hindi": "हरा दिया!"
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						5,
						2
					],
					"speaker": "ren",
					"duration_ms": 500
				},
				{
					"speaker": "ren",
					"content": {
						"korean": "이 중간 보스… 코드 제왕의 '흔적'에 완전히 잠식되어 있었어.",
						"english": "This mid-boss... was completely consumed by the 'trace' of the Code Emperor.",
						"japanese": "この中ボス…コード帝王の「痕跡」に完全に蝕まれていた。",
						"chinese": "这个中级头目……被代码帝王的“痕迹”完全侵蚀了。",
						"french": "Ce boss intermédiaire... était complètement dévoré par la \"trace\" de l'Empereur du Code.",
						"spanish": "Este subjefe... estaba completamente consumido por la \"huella\" del Emperador del Código.",
						"vietnamese": "Con trùm giữa này... đã hoàn toàn bị xâm chiếm bởi \"dấu vết\" của Code Emperor.",
						"thai": "มิดบอสตัวนี้... ถูก 'ร่องรอย' ของ Code Emperor กลืนกินไปอย่างสมบูรณ์แล้ว",
						"hindi": "यह मिड-बॉस... कोड सम्राट के 'निशान' में पूरी तरह से समाहित हो गया था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "ren",
					"content": {
						"korean": "우리가 찾던 '핵심 흔적'은… 바로 저 녀석의 코어에 있었어!",
						"english": "The 'core trace' we were looking for... was right in its core!",
						"japanese": "我々が探していた「核心の痕跡」は…まさにこいつのコアの中にあったんだ！",
						"chinese": "我们一直在寻找的“核心痕迹”……就在那家伙的核心里！",
						"french": "La \"trace essentielle\" que nous cherchions... était dans son cœur !",
						"spanish": "¡La \"huella central\" que buscábamos... estaba justo en su núcleo!",
						"vietnamese": "\"Dấu vết cốt lõi\" mà chúng ta tìm kiếm... chính là ở trong lõi của nó!",
						"thai": "'ร่องรอยหลัก' ที่เรากำลังตามหา... อยู่ในแกนกลางของมันนี่เอง!",
						"hindi": "जिस 'मुख्य निशान' को हम ढूंढ रहे थे... वह ठीक उसके कोर में था!"
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "코드 제왕의 광기와 소유욕을 담은 디지털 흔적을 찾아냈다. 진실이 드러날 순간이 다가오고 있었다.",
						"english": "We found the digital trace containing the Code Emperor's madness and possessiveness. The moment of truth was approaching.",
						"japanese": "コード帝王の狂気と所有欲を宿したデジタルな痕跡を発見した。真実が明らかになる瞬間が迫っていた。",
						"chinese": "我们找到了蕴含着代码帝王疯狂与占有欲的数字痕迹。真相揭露的时刻即将到来。",
						"french": "Nous avons trouvé la trace numérique contenant la folie et la possessivité de l'Empereur du Code. Le moment de la vérité approchait.",
						"spanish": "Encontramos la huella digital que contenía la locura y la posesividad del Emperador del Código. El momento de la verdad se acercaba.",
						"vietnamese": "Chúng ta đã tìm thấy dấu vết kỹ thuật số chứa đựng sự điên loạn và lòng chiếm hữu của Code Emperor. Khoảnh khắc sự thật được phơi bày đang đến gần.",
						"thai": "เราค้นพบร่องรอยดิจิทัลที่บรรจุความบ้าคลั่งและความเป็นเจ้าของของ Code Emperor ช่วงเวลาที่ความจริงจะเปิดเผยกำลังใกล้เข้ามา",
						"hindi": "हमने कोड सम्राट के पागलपन और स्वामित्व को समाहित करने वाला डिजिटल निशान ढूंढ लिया। सच्चाई सामने आने का क्षण करीब आ रहा था।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "침입자… 더 이상 들어올 수 없다. 이곳은… 나의 영역이다.",
						"english": "Intruder... You cannot enter further. This is... my domain.",
						"japanese": "侵入者…これ以上は入れない。ここは…私の領域だ。",
						"chinese": "入侵者…不得寸进。这里是…我的领域。",
						"french": "Intrus… Tu ne peux pas aller plus loin. Ceci est… mon domaine.",
						"spanish": "Intruso... No puedes pasar. Esto es... mi dominio.",
						"vietnamese": "Kẻ xâm nhập… không thể vào sâu hơn được nữa. Đây là… lãnh địa của ta.",
						"thai": "ผู้บุกรุก... เจ้าเข้ามาไม่ได้อีกแล้ว ที่นี่คือ... อาณาเขตของข้า",
						"hindi": "घुसपैठिया... तुम और अंदर नहीं आ सकते। यह... मेरा क्षेत्र है।"
					},
					"speaker": "random_boss"
				},
				{
					"duration_ms": 500,
					"speaker": "ren",
					"spot": [
						5,
						2
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "저 녀석이 코드 제왕의 가장 깊은 곳을 지키는 중간 보스야.",
						"english": "That's the mid-boss guarding the deepest part of the Code King.",
						"japanese": "あいつがコードの王の最も深い場所を守る中ボスだ。",
						"chinese": "那家伙是守护代码之王最深处的中间Boss。",
						"french": "C'est le boss intermédiaire qui garde la partie la plus profonde du Roi du Code.",
						"spanish": "Ese es el jefe intermedio que guarda la parte más profunda del Rey del Código.",
						"vietnamese": "Hắn là trùm phụ bảo vệ nơi sâu nhất của Vua Mã Lệnh.",
						"thai": "นั่นคือบอสกึ่งกลางที่เฝ้าส่วนที่ลึกที่สุดของราชาโค้ด",
						"hindi": "वह कोड किंग के सबसे गहरे हिस्से की रक्षा करने वाला मिड-बॉस है।"
					},
					"speaker": "ren"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "광기에 찬 소유욕이 느껴져.",
						"english": "I sense a mad possessiveness.",
						"japanese": "狂気に満ちた所有欲を感じる。",
						"chinese": "我能感觉到一股疯狂的占有欲。",
						"french": "Je ressens une possessivité folle.",
						"spanish": "Siento una posesividad demente.",
						"vietnamese": "Ta cảm thấy một sự chiếm hữu điên cuồng.",
						"thai": "ข้ารู้สึกถึงความครอบงำที่บ้าคลั่ง",
						"hindi": "मुझे एक पागलपन भरा स्वामित्व महसूस हो रहा है।"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "나의 주인을… 방해하지 마라!",
						"english": "Do not... disturb my master!",
						"japanese": "私の主を…邪魔するな！",
						"chinese": "不要…打扰我的主人！",
						"french": "Ne… dérange pas mon maître !",
						"spanish": "¡No… molestes a mi amo!",
						"vietnamese": "Đừng… làm phiền chủ nhân của ta!",
						"thai": "อย่า... รบกวนเจ้านายของข้า!",
						"hindi": "मेरे मालिक को... परेशान मत करो!"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "여기서 끝낸다.",
						"english": "This ends here.",
						"japanese": "ここで終わらせる。",
						"chinese": "到此为止。",
						"french": "Ça se termine ici.",
						"spanish": "Esto termina aquí.",
						"vietnamese": "Kết thúc tại đây.",
						"thai": "จบลงที่นี่",
						"hindi": "यहीं खत्म करते हैं।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"코드 제왕의 심장부. 그곳에 숨겨진 시스템의 흔적을 추적한다.",
			"내부에서 혼란을 일으키려던 렌은 예상치 못한 방해로 위기에 처하고—",
			"광기와 소유욕으로 뒤틀린 코드가 지금, 그 모습을 드러낸다."
		],
		"english": [
			"The heart of the Code Emperor. Tracking the hidden system's traces within.",
			"Ren, attempting to sow chaos from within, faces a crisis due to an unexpected interference—",
			"The code, twisted by madness and possessiveness, now reveals itself."
		],
		"japanese": [
			"コード帝王の心臓部。そこに隠されたシステムの手がかりを追跡する。",
			"内部で混乱を引き起こそうとしたレンは、予期せぬ妨害により危機に陥り—",
			"狂気と所有欲に歪んだコードが今、その姿を現す。"
		],
		"chinese": [
			"代码帝王的心脏。追踪隐藏系统的痕迹。",
			"试图在内部制造混乱的伦，因意想不到的干扰而陷入危机——",
			"被疯狂和占有欲扭曲的代码，现在显露真身。"
		],
		"french": [
			"Au cœur de l'Empereur du Code. Nous traquons les traces d'un système caché.",
			"Ren, cherchant à semer le chaos de l'intérieur, est mis en péril par une interférence inattendue—",
			"Le code, tordu par la folie et la possessivité, se révèle à présent."
		],
		"spanish": [
			"El corazón del Emperador del Código. Rastreamos las huellas del sistema oculto.",
			"Ren, que intentaba sembrar el caos desde dentro, se enfrenta a una crisis por una interferencia inesperada—",
			"El código, retorcido por la locura y la posesividad, se revela ahora."
		],
		"vietnamese": [
			"Trái tim của Code Hoàng đế. Truy dấu vết của hệ thống ẩn giấu bên trong.",
			"Ren, kẻ định gây hỗn loạn từ bên trong, lâm vào nguy hiểm vì sự can thiệp bất ngờ—",
			"Mã code bị bóp méo bởi điên loạn và dục vọng chiếm hữu, giờ đây lộ diện."
		],
		"thai": [
			"ใจกลางของ Code Emperor ตามรอยระบบที่ซ่อนอยู่ภายใน",
			"เรน ผู้พยายามสร้างความปั่นป่วนจากภายใน ต้องเผชิญวิกฤตจากการแทรกแซงที่ไม่คาดคิด—",
			"รหัสที่บิดเบี้ยวด้วยความคลุ้มคลั่งและการครอบงำ กำลังเผยโฉม"
		],
		"hindi": [
			"कोड सम्राट का हृदय। छिपे हुए सिस्टम के निशानों का पता लगा रहा है।",
			"अंदर से अराजकता फैलाने की कोशिश कर रहा रेन, एक अप्रत्याशित हस्तक्षेप के कारण संकट में पड़ जाता है—",
			"पागलपन और अधिकार के लालच से विकृत कोड, अब खुद को प्रकट करता है।"
		]
	}
} as const;
