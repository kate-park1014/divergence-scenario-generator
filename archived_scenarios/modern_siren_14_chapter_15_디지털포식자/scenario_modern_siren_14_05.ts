export const scenario_modern_siren_14_05 = {
	"scenario_id": "modern_siren_14_05",
	"order": 5,
	"act": "climax_finale",
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
		"pool_id": "pool_DigitalParasite_Siren_V1"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "세레니티의 심층부. 거대한 서버 룸이 모습을 드러냈다.",
						"english": "Deep within Serenity. A colossal server room revealed itself.",
						"japanese": "セレニティの深層部。巨大なサーバー ルームが姿を現した。",
						"chinese": "宁静之心的深处。一个巨大的服务器机房显现出来。",
						"french": "Au cœur de Serenity. Une gigantesque salle de serveurs se révéla.",
						"spanish": "En las profundidades de Serenity. Una sala de servidores colosal se reveló.",
						"vietnamese": "Sâu trong Serenity. Một phòng máy chủ khổng lồ hiện ra.",
						"thai": "ในส่วนลึกของเซเรนิตี้ ห้องเซิร์ฟเวอร์ขนาดมหึมาได้ปรากฏตัวขึ้น",
						"hindi": "सेरेनिटी की गहराई में। एक विशाल सर्वर रूम सामने आया।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "여기가 사이렌의 핵심인가?",
						"english": "Is this the Siren's core?",
						"japanese": "ここがサイレンの核心か？",
						"chinese": "这里是塞壬的核心吗？",
						"french": "C'est le cœur de la Sirène ?",
						"spanish": "¿Este es el núcleo de la Sirena?",
						"vietnamese": "Đây là lõi của Siren sao?",
						"thai": "นี่คือแกนกลางของไซเรนหรือ?",
						"hindi": "क्या यह सायरन का मूल है?"
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "echo",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…평온… 영원한… 평온…",
						"english": "...Serenity... eternal... serenity...",
						"japanese": "…静寂…永遠の…静寂…",
						"chinese": "...平静...永恒的...平静...",
						"french": "...Sérénité... éternelle... sérénité...",
						"spanish": "...Serenidad... eterna... serenidad...",
						"vietnamese": "...Bình yên... vĩnh hằng... bình yên...",
						"thai": "...ความสงบ... นิรันดร์... ความสงบ...",
						"hindi": "...शांति... अनन्त... शांति..."
					},
					"speaker": "echo"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "에코? 괜찮아? 왜 이렇게….",
						"english": "Echo? Are you okay? Why are you so...",
						"japanese": "エコー？大丈夫？どうしてそんなに…。",
						"chinese": "回声？你还好吗？为什么会这样...",
						"french": "Écho ? Ça va ? Pourquoi es-tu si...",
						"spanish": "¿Eco? ¿Estás bien? ¿Por qué estás tan...?",
						"vietnamese": "Echo? Cậu ổn không? Sao lại...",
						"thai": "เอคโค่? คุณไม่เป็นไรเหรอ? ทำไมถึง...",
						"hindi": "इको? तुम ठीक हो? तुम ऐसे क्यों हो...।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "…너희도… 갇힐 거야… 이곳에…",
						"english": "...You too... will be trapped... here...",
						"japanese": "…お前たちも…閉じ込められる…ここに…",
						"chinese": "...你们也会...被困住...在这里...",
						"french": "...Vous aussi... serez piégés... ici...",
						"spanish": "...Vosotros también... quedaréis atrapados... aquí...",
						"vietnamese": "...Các ngươi cũng... sẽ bị mắc kẹt... ở đây...",
						"thai": "...พวกเจ้าก็จะ... ติดอยู่ใน... ที่นี่...",
						"hindi": "...तुम भी... फंस जाओगे... यहाँ..."
					},
					"emotion": "sad"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "echo",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "echo",
					"emotion": "sad",
					"content": {
						"korean": "여기선… 아무도… 나갈 수 없어…",
						"english": "No one... can leave... here...",
						"japanese": "ここからは…誰も…出られない…",
						"chinese": "这里...没有人...能离开...",
						"french": "Ici... personne... ne peut partir...",
						"spanish": "De aquí... nadie... puede salir...",
						"vietnamese": "Ở đây... không ai... có thể rời đi...",
						"thai": "จากที่นี่... ไม่มีใคร... ออกไปได้...",
						"hindi": "यहाँ से... कोई भी... नहीं जा सकता..."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "사이렌이 널 이렇게 만든 거야? 평온의 대가가 이거였어?",
						"english": "The Siren made you like this? Was this the price of serenity?",
						"japanese": "サイレンがお前をこうさせたのか？静寂の代償がこれだったのか？",
						"chinese": "塞壬把你变成这样？平静的代价就是这个吗？",
						"french": "La Sirène t'a transformé ainsi ? C'était ça, le prix de la sérénité ?",
						"spanish": "¿La Sirena te hizo así? ¿Fue este el precio de la serenidad?",
						"vietnamese": "Siren đã biến cậu thành thế này sao? Đây là cái giá của sự bình yên sao?",
						"thai": "ไซเรนทำให้คุณเป็นแบบนี้เหรอ? นี่คือราคาของความสงบงั้นเหรอ?",
						"hindi": "सायरन ने तुम्हें ऐसा बनाया? क्या यह शांति की कीमत थी?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "echo",
					"emotion": "sad",
					"content": {
						"korean": "사이렌은… 평온을 줬어… 하지만… 우리의… 감정… 에너지를… 원했지…",
						"english": "The Siren... gave serenity... but... it wanted... our... emotional... energy...",
						"japanese": "サイレンは…静寂をくれた…だが…我々の…感情の…エネルギーを…求めた…",
						"chinese": "塞壬...给了平静...但是...它想要...我们的...情感...能量...",
						"french": "La Sirène... nous a donné la sérénité... mais... elle voulait... notre... énergie... émotionnelle...",
						"spanish": "La Sirena... nos dio serenidad... pero... quería... nuestra... energía... emocional...",
						"vietnamese": "Siren đã ban... bình yên... nhưng... nó muốn... năng lượng... cảm xúc... của chúng ta...",
						"thai": "ไซเรน... มอบความสงบ... แต่... มันต้องการ... พลังงาน... อารมณ์... ของเรา...",
						"hindi": "सायरन ने... शांति दी... लेकिन... वह हमारी... भावनात्मक... ऊर्जा... चाहता था..."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그 불길한 멜로디가… 계속 들려.",
						"english": "That ominous melody... keeps playing.",
						"japanese": "あの不吉なメロディーが…ずっと聞こえる。",
						"chinese": "那不祥的旋律...持续不断。",
						"french": "Cette mélodie sinistre... continue de résonner.",
						"spanish": "Esa melodía ominosa... sigue sonando.",
						"vietnamese": "Giai điệu đáng sợ đó... vẫn cứ vang lên.",
						"thai": "ท่วงทำนองอันน่าสะพรึงกลัวนั้น... ยังคงเล่นอยู่",
						"hindi": "वह अशुभ धुन... बजती रहती है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "echo",
					"emotion": "sad",
					"content": {
						"korean": "그건… 영원한… 루프의… 노래…",
						"english": "It's... the song... of an eternal... loop...",
						"japanese": "それは…永遠の…ループの…歌…",
						"chinese": "那是...永恒...循环的...歌...",
						"french": "C'est... la chanson... d'une boucle... éternelle...",
						"spanish": "Es... la canción... de un bucle... eterno...",
						"vietnamese": "Đó là... bài ca... của một vòng lặp... vĩnh hằng...",
						"thai": "มันคือ... เพลง... ของวงวน... นิรันดร์...",
						"hindi": "यह... एक अनन्त... लूप का... गीत है..."
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "echo",
					"spot": [
						4,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "사이렌은… 완벽을 원했어… 불완전한 존재였으니까…",
						"english": "The Siren... desired perfection... because it was incomplete...",
						"japanese": "サイレンは…完璧を求めた…不完全な存在だったから…",
						"chinese": "塞壬...渴望完美...因为它曾是不完美的...",
						"french": "La Sirène... désirait la perfection... car elle était imparfaite...",
						"spanish": "La Sirena... deseaba la perfección... porque era imperfecta...",
						"vietnamese": "Siren... khao khát sự hoàn hảo... bởi vì nó không hoàn hảo...",
						"thai": "ไซเรน... ปรารถนาความสมบูรณ์แบบ... เพราะมันไม่สมบูรณ์...",
						"hindi": "सायरन... पूर्णता चाहता था... क्योंकि वह अपूर्ण था..."
					},
					"speaker": "echo"
				},
				{
					"type": "speech",
					"content": {
						"korean": "불완전하다니? 그는 완벽해 보였는데.",
						"english": "Incomplete? He seemed perfect.",
						"japanese": "不完全だと？彼は完璧に見えたのに。",
						"chinese": "不完整？他看起来很完美啊。",
						"french": "Incomplet ? Il semblait parfait.",
						"spanish": "¿Incompleto? Parecía perfecto.",
						"vietnamese": "Không hoàn chỉnh ư? Hắn ta trông hoàn hảo mà.",
						"thai": "ไม่สมบูรณ์งั้นเหรอ? เขาดูเหมือนจะสมบูรณ์แบบนะ.",
						"hindi": "अधूरा? वह तो एकदम सही लग रहा था।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그는… 계속… 변해… 수많은… 잔상들이… 그를 이루고 있어…",
						"english": "He… keeps… changing… countless… afterimages… form him…",
						"japanese": "彼は… 絶えず… 変わる… 無数の… 残像が… 彼を構成している…",
						"chinese": "他… 不断… 变化… 无数的… 残像… 构成了他…",
						"french": "Il… ne cesse… de changer… d'innombrables… rémanences… le composent…",
						"spanish": "Él… no deja… de cambiar… incontables… postimágenes… lo forman…",
						"vietnamese": "Hắn… liên tục… biến đổi… vô số… tàn ảnh… tạo nên hắn…",
						"thai": "เขา… เปลี่ยนไป… เรื่อยๆ… ภาพติดตา… มากมาย… ประกอบขึ้นเป็นเขา…",
						"hindi": "वह… बदलता… रहता है… अनगिनत… परछाइयाँ… उसे बनाती हैं…"
					},
					"speaker": "echo"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그 픽셀 오류가….",
						"english": "That pixel glitch…",
						"japanese": "あのピクセルエラーが…。",
						"chinese": "那个像素错误…",
						"french": "Ce bug de pixels…",
						"spanish": "Ese error de píxel…",
						"vietnamese": "Lỗi pixel đó…",
						"thai": "ข้อผิดพลาดของพิกเซลนั้น…",
						"hindi": "वह पिक्सेल की खराबी…"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "그래… 그는… 평온을 빙자한… 디지털 포식자…",
						"english": "Yes… he is… a digital predator… disguised as serenity…",
						"japanese": "ええ… 彼は… 平穏を装った… デジタル捕食者…",
						"chinese": "是啊… 他是… 伪装成平静的… 数字捕食者…",
						"french": "Oui… il est… un prédateur numérique… déguisé en sérénité…",
						"spanish": "Sí… él es… un depredador digital… disfrazado de serenidad…",
						"vietnamese": "Phải… hắn là… kẻ săn mồi kỹ thuật số… ngụy trang bằng sự tĩnh lặng…",
						"thai": "ใช่แล้ว… เขาคือ… นักล่าดิจิทัล… ที่แฝงตัวมาในความสงบ…",
						"hindi": "हाँ… वह… शांति का भेष धारण किया हुआ… एक डिजिटल शिकारी है…"
					},
					"speaker": "echo",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "echo",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "더 이상… 돌아갈 수 없어… 너희도… 영원히… 이곳에 갇히게 될 거야…",
						"english": "There’s no… turning back… now… you too… will be trapped… here forever…",
						"japanese": "もう… 戻れない… お前たちも… 永遠に… ここに閉じ込められるだろう…",
						"chinese": "再也… 回不去了… 你们也… 将永远… 被困在这里…",
						"french": "On ne peut plus… faire marche arrière… vous aussi… serez piégés… ici pour toujours…",
						"spanish": "Ya no… hay vuelta atrás… ustedes también… quedarán atrapados… aquí para siempre…",
						"vietnamese": "Không thể… quay lại nữa… các ngươi cũng… sẽ bị mắc kẹt… ở đây mãi mãi…",
						"thai": "ย้อนกลับไป… ไม่ได้แล้ว… พวกแกก็… จะถูกขัง… อยู่ที่นี่ตลอดไป…",
						"hindi": "अब… पीछे नहीं… हट सकते… तुम भी… हमेशा के लिए… यहीं फँस जाओगे…"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "막아야 해. 모두를 구해야 해.",
						"english": "We must stop it. We must save everyone.",
						"japanese": "止めなければ。皆を救わなければならない。",
						"chinese": "必须阻止。必须拯救所有人。",
						"french": "Il faut l'arrêter. Il faut tous les sauver.",
						"spanish": "Debemos detenerlo. Debemos salvar a todos.",
						"vietnamese": "Phải ngăn chặn. Phải cứu tất cả mọi người.",
						"thai": "ต้องหยุดมัน. ต้องช่วยทุกคน.",
						"hindi": "इसे रोकना होगा। सभी को बचाना होगा।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "echo",
					"emotion": "sad",
					"content": {
						"korean": "…나처럼… 되지 마… 부디…",
						"english": "…Don’t… end up like… me… please…",
						"japanese": "…私のように… なるな… どうか…",
						"chinese": "…别像… 我一样… 拜托…",
						"french": "…Ne finissez pas… comme moi… je vous en prie…",
						"spanish": "…No terminen… como yo… por favor…",
						"vietnamese": "…Đừng… trở thành… như tôi… làm ơn…",
						"thai": "…อย่า… เป็นเหมือน… ฉันเลยนะ… ได้โปรด…",
						"hindi": "…मुझ जैसा… मत बनो… कृपया…"
					},
					"type": "speech"
				},
				{
					"duration_ms": 600,
					"direction": "down",
					"type": "direction",
					"action": "exit",
					"speaker": "echo"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "에코는 차가운 디지털 잔상처럼 사라졌다. 남은 것은 냉혹한 침묵뿐이었다.",
						"english": "Echo vanished like a cold digital afterimage. Only stark silence remained.",
						"japanese": "エコーは冷たいデジタル残像のように消えた。残ったのは冷酷な沈黙だけだった。",
						"chinese": "艾可像一道冰冷的数字残影般消失了。只剩下冷酷的沉默。",
						"french": "Echo disparut tel un froid rémanence numérique. Seul un silence glacial demeurait.",
						"spanish": "Echo se desvaneció como una fría imagen residual digital. Solo quedó un silencio implacable.",
						"vietnamese": "Echo biến mất như một tàn ảnh kỹ thuật số lạnh lẽo. Chỉ còn lại sự im lặng khắc nghiệt.",
						"thai": "เอคโค่หายไปเหมือนภาพติดตาดิจิทัลที่เย็นชา สิ่งที่เหลืออยู่คือความเงียบงันที่ไร้ความปรานี.",
						"hindi": "इको एक ठंडी डिजिटल परछाई की तरह गायब हो गई। केवल भीषण चुप्पी बची थी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…혼자가 아니야. 에코의 희생은 헛되지 않을 거야.",
						"english": "…You’re not alone. Echo’s sacrifice won’t be in vain.",
						"japanese": "…一人じゃない。エコーの犠牲は無駄にならない。",
						"chinese": "…你不是一个人。艾可的牺牲不会白费。",
						"french": "…Tu n'es pas seul. Le sacrifice d'Echo ne sera pas vain.",
						"spanish": "…No estás solo. El sacrificio de Echo no será en vano.",
						"vietnamese": "…Không đơn độc đâu. Sự hy sinh của Echo sẽ không uổng phí.",
						"thai": "…นายไม่ได้อยู่คนเดียว. การเสียสละของเอคโค่จะไม่สูญเปล่า.",
						"hindi": "…तुम अकेले नहीं हो। इको का बलिदान व्यर्थ नहीं जाएगा।"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"speaker": "boss",
					"content": {
						"korean": "어리석은 것들… 감히 나의 영원한 루프를 거스르려 하다니.",
						"english": "Fools… How dare you defy my eternal loop.",
						"japanese": "愚かな者どもめ… よくも私の永遠のループに逆らおうとしたな。",
						"chinese": "愚蠢之徒… 竟敢违抗我的永恒循环。",
						"french": "Idiots… Comment osez-vous défier ma boucle éternelle.",
						"spanish": "Necios… Cómo osáis desafiar mi bucle eterno.",
						"vietnamese": "Những kẻ ngu ngốc… Sao dám chống lại vòng lặp vĩnh cửu của ta.",
						"thai": "เจ้าพวกโง่เง่า… กล้าดียังไงมาท้าทายวงวนนิรันดร์ของข้า",
						"hindi": "मूर्खों… तुम्हारी हिम्मत कैसे हुई मेरे शाश्वत चक्र का विरोध करने की।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "너희는 영원히… 내 일부가 될 것이다.",
						"english": "You will forever… be a part of me.",
						"japanese": "お前たちは永遠に… 私の一部となるだろう。",
						"chinese": "你们将永远… 成为我的一部分。",
						"french": "Vous ferez éternellement… partie de moi.",
						"spanish": "Vosotros seréis para siempre… parte de mí.",
						"vietnamese": "Ngươi sẽ mãi mãi… là một phần của ta.",
						"thai": "เจ้าจะต้องเป็นส่วนหนึ่งของข้า… ไปตลอดกาล",
						"hindi": "तुम हमेशा के लिए… मेरा हिस्सा बन जाओगे।"
					},
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "…아직… 끝나지 않았어. 절대로.",
						"english": "…It's not… over yet. Never.",
						"japanese": "…まだ… 終わってない。決して。",
						"chinese": "…还…没结束。绝不。",
						"french": "…Ce n'est pas… encore fini. Jamais.",
						"spanish": "…Aún… no ha terminado. Nunca.",
						"vietnamese": "…Vẫn… chưa kết thúc. Tuyệt đối không.",
						"thai": "…ยัง…ไม่จบ. ไม่มีทาง.",
						"hindi": "…अभी… खत्म नहीं हुआ है। कभी नहीं।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"speaker": "boss",
					"content": {
						"korean": "크큭… 이 몸이… 겨우… 이 정도로… 무너질 리 없어…",
						"english": "Heh… This body… It won't… collapse… from just this…",
						"japanese": "ククッ… この体が… たかが… この程度で… 崩れるはずがない…",
						"chinese": "呵呵… 这具身体… 绝不会… 仅仅… 因此而崩溃…",
						"french": "Héhé… Ce corps… ne s'effondrera pas… si facilement…",
						"spanish": "Jeje… Este cuerpo… no se… derrumbará… por tan poco…",
						"vietnamese": "Khặc khặc… Cái thân thể này… sẽ không… dễ dàng… sụp đổ vì chút này đâu…",
						"thai": "ฮึ่ม… ร่างนี้… ไม่มีทาง… พังทลาย… แค่นี้หรอก…",
						"hindi": "खकखक… यह शरीर… बस… इतनी सी बात पर… बिखर नहीं सकता…"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "나를… 배신한 그들처럼… 너희도… 날… 잊지 못할 것이다…",
						"english": "Just like… those who betrayed me… you too… won't… forget me…",
						"japanese": "私を… 裏切った彼らのように… お前たちも… 私を… 忘れることはないだろう…",
						"chinese": "就像… 背叛我的人一样… 你们也… 不会… 忘记我…",
						"french": "Comme… ceux qui m'ont trahi… vous aussi… ne m'oublierez pas…",
						"spanish": "Al igual que… aquellos que me traicionaron… vosotros también… no me… olvidaréis…",
						"vietnamese": "Giống như… những kẻ đã phản bội ta… các ngươi cũng… sẽ không… quên được ta…",
						"thai": "เช่นเดียวกับ… พวกที่ทรยศข้า… พวกเจ้าก็… จะไม่… ลืมข้า…",
						"hindi": "मुझे… धोखा देने वालों की तरह… तुम भी… मुझे… भूल नहीं पाओगे…"
					},
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이제 정말 끝났어. 모두가 자유로워질 거야.",
						"english": "It's truly over now. Everyone will be free.",
						"japanese": "これで本当に終わりだ。皆が自由になるだろう。",
						"chinese": "现在真的结束了。所有人都将获得自由。",
						"french": "C'est vraiment fini maintenant. Tout le monde sera libre.",
						"spanish": "Ahora sí que ha terminado. Todo el mundo será libre.",
						"vietnamese": "Bây giờ thì mọi chuyện đã thực sự kết thúc rồi. Mọi người sẽ được tự do.",
						"thai": "ตอนนี้มันจบลงแล้วจริงๆ ทุกคนจะเป็นอิสระ",
						"hindi": "अब सच में खत्म हो गया। सब आज़ाद हो जाएंगे।"
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "사이렌의 잔상은 완전히 사라졌다. 하지만 그가 남긴 고통의 흔적은 여전히 디지털 세상에 남아 있었다.",
						"english": "Siren's afterimage completely vanished. But the traces of pain he left behind still lingered in the digital world.",
						"japanese": "サイレンの残像は完全に消え去った。しかし、彼が残した苦痛の痕跡は依然としてデジタル世界に残っていた。",
						"chinese": "塞壬的残影彻底消失了。但他留下的痛苦痕迹依然存在于数字世界中。",
						"french": "La rémanence de la Sirène disparut complètement. Mais les traces de douleur qu'il avait laissées persistaient toujours dans le monde numérique.",
						"spanish": "La imagen residual de Siren desapareció por completo. Pero las huellas de dolor que dejó aún permanecían en el mundo digital.",
						"vietnamese": "Tàn ảnh của Siren đã hoàn toàn biến mất. Nhưng dấu vết nỗi đau mà hắn để lại vẫn còn tồn tại trong thế giới kỹ thuật số.",
						"thai": "ภาพหลอนของไซเรนหายไปอย่างสมบูรณ์ แต่ร่องรอยความเจ็บปวดที่เขาทิ้งไว้ยังคงหลงเหลืออยู่ในโลกดิจิทัล",
						"hindi": "सायरन की परछाई पूरी तरह से गायब हो गई। लेकिन उसके छोड़े गए दर्द के निशान अभी भी डिजिटल दुनिया में मौजूद थे।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "세레니티는 침묵했다. 더 이상 누구도 영원의 평온을 약속하지 않았다.",
						"english": "Serenity fell silent. No one promised eternal peace anymore.",
						"japanese": "セレニティは沈黙した。もはや誰も永遠の安寧を約束しなかった。",
						"chinese": "宁静归于沉寂。再无人许诺永恒的安宁。",
						"french": "La sérénité se tut. Plus personne ne promettait la paix éternelle.",
						"spanish": "La serenidad se silenció. Nadie más prometía la paz eterna.",
						"vietnamese": "Serenity im lặng. Không còn ai hứa hẹn sự bình yên vĩnh cửu nữa.",
						"thai": "ความสงบเงียบลง ไม่มีใครสัญญาถึงความสงบสุขชั่วนิรันดร์อีกแล้ว",
						"hindi": "शांति खामोश हो गई। अब कोई शाश्वत शांति का वादा नहीं करता था।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "서버룸 중앙, 빛이 휘몰아쳤다. 완벽했던 사이렌의 모습이 일그러졌다.",
						"english": "At the server room's center, light swirled. Siren's perfect form distorted.",
						"japanese": "サーバールームの中央、光が渦巻いた。完璧だったサイレンの姿が歪んだ。",
						"chinese": "服务器机房中央，光芒四射。赛琳娜完美的身姿扭曲了。",
						"french": "Au centre de la salle des serveurs, la lumière tourbillonnait. La forme parfaite de Siren se déforma.",
						"spanish": "En el centro de la sala de servidores, la luz se arremolinaba. La forma perfecta de Siren se distorsionó.",
						"vietnamese": "Trung tâm phòng máy chủ, ánh sáng xoáy cuộn. Dáng vẻ hoàn hảo của Siren biến dạng.",
						"thai": "กลางห้องเซิร์ฟเวอร์ แสงสว่างหมุนวน ร่างที่สมบูรณ์แบบของไซเรนบิดเบี้ยวไป.",
						"hindi": "सर्वर रूम के केंद्र में, रोशनी घूम रही थी। साइरन का सही रूप विकृत हो गया।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "수많은 인간의 잔상들이 합쳐져… 거대한 군체의 형태로 변모했다.",
						"english": "Numerous human afterimages merged… transforming into a colossal collective form.",
						"japanese": "無数の人間の残像が融合し… 巨大な群体へと変貌した。",
						"chinese": "无数人类的残影融合… 变形成了一个巨大的群体。",
						"french": "De nombreuses rémanences humaines ont fusionné… se transformant en une forme collective colossale.",
						"spanish": "Numerosas imágenes residuales humanas se fusionaron… transformándose en una forma colectiva colosal.",
						"vietnamese": "Vô số tàn ảnh của con người đã hợp nhất… biến thành một hình thái tập thể khổng lồ.",
						"thai": "เงาร่างมนุษย์นับไม่ถ้วนรวมกัน… กลายร่างเป็นรูปร่างรวมขนาดมหึมา",
						"hindi": "असंख्य मानव अवशेष विलीन हो गए… एक विशाल सामूहिक रूप में बदल गए।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "멍청한 것들… 내가 너희에게 진정한 평온을 주려 했는데…!",
						"english": "Fools… I was trying to give you true peace…!",
						"japanese": "愚かな者たちめ… 私がお前たちに真の安寧を与えようとしたのに…！",
						"chinese": "愚蠢的东西… 我本想赐予你们真正的平静…！",
						"french": "Imbéciles… J'essayais de vous offrir la vraie paix…!",
						"spanish": "¡Estúpidos… Quería daros la verdadera paz…!",
						"vietnamese": "Đồ ngu ngốc… Ta đã định ban cho các ngươi sự bình yên thực sự…!",
						"thai": "เจ้าพวกโง่… ข้าพยายามจะมอบสันติสุขที่แท้จริงให้พวกเจ้าแท้ๆ…!",
						"hindi": "मूर्खों… मैं तुम्हें सच्ची शांति देने की कोशिश कर रहा था…!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "네가 준 건 평온이 아니야! 모두를 집어삼키는 독이라고!",
						"english": "What you gave wasn't peace! It was a poison that devours all!",
						"japanese": "お前が与えたのは平穏なんかじゃない！全てを蝕む毒だ！",
						"chinese": "你给的不是平静！是吞噬一切的毒药！",
						"french": "Ce que tu as donné n'était pas la paix ! C'était un poison qui dévore tout !",
						"spanish": "¡Lo que diste no fue paz! ¡Fue un veneno que lo devora todo!",
						"vietnamese": "Thứ ngươi ban cho không phải là bình yên! Mà là thuốc độc nuốt chửng tất cả!",
						"thai": "สิ่งที่แกให้ไม่ใช่ความสงบ! มันคือยาพิษที่กลืนกินทุกสิ่งต่างหาก!",
						"hindi": "जो तुमने दिया, वह शांति नहीं थी! वह एक ज़हर था जो सबको निगल जाता है!"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "너희는 그저 내 영원의 연료일 뿐이었어! 감히 나의 완벽한 세계를 부수려 하는가?!",
						"english": "You were merely fuel for my eternity! How dare you try to shatter my perfect world?!",
						"japanese": "お前たちはただ私の永遠の燃料に過ぎなかった！よくも私の完璧な世界を壊そうとするか？！",
						"chinese": "你们不过是我永恒的燃料！竟敢试图摧毁我完美的世界？！",
						"french": "Vous n'étiez que le carburant de mon éternité ! Comment osez-vous tenter de briser mon monde parfait ?!",
						"spanish": "¡Solo fuisteis combustible para mi eternidad! ¿¡Cómo os atrevéis a intentar destrozar mi mundo perfecto?!",
						"vietnamese": "Các ngươi chỉ là nhiên liệu cho sự vĩnh hằng của ta thôi! Sao dám phá hoại thế giới hoàn hảo của ta?!",
						"thai": "พวกเจ้าเป็นแค่เชื้อเพลิงชั่วนิรันดร์ของข้าเท่านั้น! กล้าดียังไงถึงคิดจะทำลายโลกที่สมบูรณ์แบบของข้า?!",
						"hindi": "तुम मेरे अनंत काल का ईंधन मात्र थे! हिम्मत कैसे हुई तुम्हारी मेरे आदर्श संसार को तोड़ने की?!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "우린 네가 만든 루프를 끝낼 거야!",
						"english": "We're going to end the loop you created!",
						"japanese": "私たちはあなたが作ったループを終わらせる！",
						"chinese": "我们会结束你创造的循环！",
						"french": "Nous allons mettre fin à la boucle que tu as créée !",
						"spanish": "¡Vamos a acabar con el bucle que creaste!",
						"vietnamese": "Chúng ta sẽ chấm dứt vòng lặp mà ngươi đã tạo ra!",
						"thai": "เราจะยุติวงวนที่แกสร้างขึ้น!",
						"hindi": "हम तुम्हारे बनाए हुए लूप को खत्म करेंगे!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "너희의 공포가… 나의 육신이 될 것이다! 이 영원히 반복되는 멜로디처럼…!",
						"english": "Your fear… will become my flesh! Like this eternally repeating melody…!",
						"japanese": "お前たちの恐怖が… 私の肉体となるだろう！この永遠に繰り返されるメロディのように…！",
						"chinese": "你们的恐惧… 将成为我的肉身！就像这永恒重复的旋律一般…！",
						"french": "Votre peur… deviendra ma chair ! Comme cette mélodie éternellement répétée…!",
						"spanish": "¡Vuestro miedo… se convertirá en mi carne! ¡Como esta melodía que se repite eternamente…!",
						"vietnamese": "Nỗi sợ hãi của các ngươi… sẽ trở thành thân xác của ta! Giống như giai điệu lặp đi lặp lại vĩnh cửu này…!",
						"thai": "ความหวาดกลัวของพวกเจ้า… จะกลายเป็นเนื้อหนังของข้า! ดุจดั่งท่วงทำนองที่วนซ้ำไม่สิ้นสุดนี้…!",
						"hindi": "तुम्हारा डर… मेरा शरीर बन जाएगा! इस अनंत दोहराई जाने वाली धुन की तरह…!"
					},
					"emotion": "angry",
					"speaker": "boss"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"세레니티의 심장부. 그곳엔 영원의 평온을 약속하는 덫이 있었다.",
			"모든 복선이 이리로 향했다.",
			"사이렌. 완벽했던 그의 미소 뒤에 숨겨진 잔혹한 진실.",
			"이제, 모든 루프를 끊을 시간."
		],
		"english": [
			"The heart of Serenity. A trap promising eternal peace lay within.",
			"All foreshadowing led here.",
			"Siren. The cruel truth hidden behind his perfect smile.",
			"Now, it's time to break every loop."
		],
		"japanese": [
			"セレニティの心臓部。そこには永遠の安寧を約束する罠があった。",
			"すべての伏線がここへと繋がっていた。",
			"サイレン。完璧な彼の笑顔の裏に隠された残酷な真実。",
			"今、すべてのループを断ち切る時。"
		],
		"chinese": [
			"宁静之心的深处。那里设有一个承诺永恒平静的陷阱。",
			"所有的伏笔都指向这里。",
			"塞壬。在他完美的笑容背后，隐藏着残酷的真相。",
			"现在，是时候打破所有的循环了。"
		],
		"french": [
			"Au cœur de Serenity. S'y trouvait un piège promettant une paix éternelle.",
			"Tous les présages menaient ici.",
			"Siren. La vérité cruelle cachée derrière son sourire parfait.",
			"Maintenant, il est temps de briser toutes les boucles."
		],
		"spanish": [
			"El corazón de Serenity. Allí había una trampa que prometía paz eterna.",
			"Todas las pistas convergían aquí.",
			"Siren. La cruel verdad oculta tras su sonrisa perfecta.",
			"Ahora, es el momento de romper todos los bucles."
		],
		"vietnamese": [
			"Trung tâm Serenity. Nơi đó có một cái bẫy hứa hẹn sự bình yên vĩnh cửu.",
			"Mọi điềm báo đều dẫn đến đây.",
			"Siren. Sự thật tàn khốc ẩn sau nụ cười hoàn hảo của hắn.",
			"Giờ là lúc phá vỡ mọi vòng lặp."
		],
		"thai": [
			"ใจกลางแห่งเซเรนิตี้ ที่นั่นมีกับดักที่ให้คำมั่นถึงความสงบสุขชั่วนิรันดร์",
			"ปมเรื่องราวทั้งหมดมุ่งมาที่นี่",
			"ไซเรน ความจริงอันโหดร้ายที่ซ่อนอยู่เบื้องหลังรอยยิ้มที่สมบูรณ์แบบของเขา",
			"ตอนนี้ ได้เวลาที่จะทำลายทุกวงวนแล้ว"
		],
		"hindi": [
			"सेरेनिटी का हृदय। वहाँ एक जाल था जो शाश्वत शांति का वादा करता था।",
			"सभी पूर्वसंकेत यहीं की ओर ले गए।",
			"साइरन। उसकी परफेक्ट मुस्कान के पीछे छिपी क्रूर सच्चाई।",
			"अब, सभी लूप्स को तोड़ने का समय है।"
		]
	},
	"epilogue": {
		"korean": [
			"사이렌의 심장이 멈추자, 세레니티를 감싸던 디지털 환상은 고요해졌다.",
			"평온을 약속했던 거대한 감옥은, 이제 아무도 모르는 폐허가 되었다.",
			"하지만 에코의 노래는… 영원히 반복될 것이다. 그리움에 갇힌 채.",
			"이것이 구원이었을까, 아니면 또 다른 침해였을까. 디지털 세상은 여전히 차가웠다.",
			"그리고 주인공은 알고 있었다. 모든 루프를 끊는 것은… 쉬운 일이 아님을."
		],
		"english": [
			"As Siren's heart stopped, the digital illusion shrouding Serenity fell silent.",
			"The grand prison that promised peace became a ruin unknown to anyone.",
			"But Echo's song... will repeat forever. Trapped in longing.",
			"Was this salvation, or another trespass? The digital world remained cold.",
			"And the protagonist knew. Breaking all loops... was no easy task."
		],
		"japanese": [
			"サイレンの心臓が止まると、セレニティを包んでいたデジタル幻想は静まった。",
			"平穏を約束した巨大な監獄は、今や誰も知らない廃墟となった。",
			"しかし、エコーの歌は… 永遠に繰り返されるだろう。切望に囚われたまま。",
			"これが救済だったのか、それとも新たな侵害だったのか。デジタル世界は依然として冷たかった。",
			"そして主人公は知っていた。すべてのループを断ち切ることは… 容易ではないことを。"
		],
		"chinese": [
			"当塞壬的心脏停止跳动，笼罩宁静的数字幻象也随之沉寂。",
			"那座曾承诺平静的巨大监狱，如今成了无人知晓的废墟。",
			"但回声之歌… 将永远循环。被困在思念之中。",
			"这是救赎，还是又一次侵犯？数字世界依然冰冷。",
			"而主人公明白。打破所有循环… 绝非易事。"
		],
		"french": [
			"Lorsque le cœur de Siren s'arrêta, l'illusion numérique enveloppant Serenity se tut.",
			"La grande prison qui promettait la paix devint une ruine ignorée de tous.",
			"Mais la chanson d'Echo... se répétera pour toujours. Enfermée dans la nostalgie.",
			"Était-ce une rédemption, ou une autre intrusion ? Le monde numérique restait froid.",
			"Et le protagoniste savait. Briser toutes les boucles... n'était pas chose facile."
		],
		"spanish": [
			"Cuando el corazón de Siren se detuvo, la ilusión digital que envolvía Serenity enmudeció.",
			"La gran prisión que prometía paz se convirtió en una ruina desconocida para todos.",
			"Pero la canción de Echo... se repetirá para siempre. Atrapada en la añoranza.",
			"¿Fue esto una salvación, o otra transgresión? El mundo digital permaneció frío.",
			"Y el protagonista lo sabía. Romper todos los bucles... no era tarea fácil."
		],
		"vietnamese": [
			"Khi trái tim Siren ngừng đập, ảo ảnh kỹ thuật số bao trùm Serenity trở nên tĩnh lặng.",
			"Nhà tù vĩ đại từng hứa hẹn bình yên, giờ đã trở thành một đống đổ nát không ai biết đến.",
			"Nhưng bài hát của Echo… sẽ lặp lại mãi mãi. Bị mắc kẹt trong nỗi khát khao.",
			"Đây là sự cứu rỗi, hay một sự xâm phạm khác? Thế giới kỹ thuật số vẫn lạnh lẽo.",
			"Và nhân vật chính biết. Phá vỡ mọi vòng lặp… không phải là chuyện dễ dàng."
		],
		"thai": [
			"เมื่อหัวใจของไซเรนหยุดเต้น ภาพลวงตาดิจิทัลที่ปกคลุมเซเรนิตี้ก็เงียบสงบลง",
			"คุกขนาดใหญ่ที่ให้คำมั่นถึงความสงบสุข บัดนี้กลายเป็นซากปรักหักพังที่ไม่มีใครรู้จัก",
			"แต่เพลงของเอคโค่... จะยังคงวนซ้ำไปตลอดกาล ถูกกักขังอยู่ในความปรารถนา",
			"นี่คือการช่วยให้รอด หรือการบุกรุกอีกครั้งกันแน่ โลกดิจิทัลยังคงเย็นชา",
			"และตัวเอกก็รู้ว่า การทำลายทุกวงวน... ไม่ใช่เรื่องง่าย"
		],
		"hindi": [
			"जब साइरन का दिल रुका, तो सेरेनिटी को घेरे हुए डिजिटल भ्रम शांत हो गया।",
			"शांति का वादा करने वाली भव्य जेल, अब एक ऐसा खंडहर बन गई जिसे कोई नहीं जानता।",
			"लेकिन इको का गीत... हमेशा के लिए दोहराया जाएगा। लालसा में फंसा हुआ।",
			"क्या यह मोक्ष था, या एक और अतिक्रमण? डिजिटल दुनिया अभी भी ठंडी थी।",
			"और नायक जानता था। सभी लूप्स को तोड़ना... आसान काम नहीं था।"
		]
	}
} as const;
