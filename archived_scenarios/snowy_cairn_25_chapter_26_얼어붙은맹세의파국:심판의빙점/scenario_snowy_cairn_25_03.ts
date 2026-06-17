export const scenario_snowy_cairn_25_03 = {
	"scenario_id": "snowy_cairn_25_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"eira": {
			"id": "mon_0c37c014-b5ca-4f2f-ad03-5d393e5b2eb1",
			"name": {
				"korean": "에이라",
				"english": "Eira",
				"japanese": "エイラ",
				"chinese": "艾拉",
				"french": "Eira",
				"spanish": "Eira",
				"vietnamese": "Eira",
				"thai": "ไอรา",
				"hindi": "ऐरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8e2970b7-bcb1-4b1c-6bf0-93106b373500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0ca1ec09-a624-450f-054a-b98de58bdb00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "설원 위, 균열은 이미 시작되었다.",
						"english": "On the snowfield, the rift has already begun.",
						"japanese": "雪原の上で、亀裂はすでに始まった。",
						"chinese": "雪原之上，裂痕已现。",
						"french": "Sur le champ de neige, la fissure a déjà commencé.",
						"spanish": "Sobre el campo nevado, la grieta ya ha comenzado.",
						"vietnamese": "Trên cánh đồng tuyết, vết nứt đã bắt đầu.",
						"thai": "บนทุ่งหิมะ รอยร้าวได้เริ่มขึ้นแล้ว",
						"hindi": "बर्फीले मैदान पर, दरार पहले ही शुरू हो चुकी है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "이게… 브란이 꾸민 짓이라고?",
						"english": "This… Bran's doing?",
						"japanese": "これが…ブランの仕業だというのか？",
						"chinese": "这…是布兰的把戏？",
						"french": "C'est... l'œuvre de Bran ?",
						"spanish": "¿Esto… obra de Bran?",
						"vietnamese": "Đây… là việc Bran làm sao?",
						"thai": "นี่… คือฝีมือของแบรนหรือ?",
						"hindi": "यह... ब्रैन का काम है?"
					}
				},
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "멈춰, 브란! 그 약속은 깨뜨려선 안 돼!",
						"english": "Stop, Bran! You mustn't break that promise!",
						"japanese": "止まれ、ブラン！その約束を破ってはならない！",
						"chinese": "住手，布兰！你不能违背那个承诺！",
						"french": "Arrête, Bran ! Tu ne dois pas briser cette promesse !",
						"spanish": "¡Detente, Bran! ¡No debes romper esa promesa!",
						"vietnamese": "Dừng lại, Bran! Ngươi không được phá vỡ lời hứa đó!",
						"thai": "หยุดนะ แบรน! เจ้าต้องไม่ผิดคำสัญญา!",
						"hindi": "रुक जाओ, ब्रैन! तुम्हें वह वादा नहीं तोड़ना चाहिए!"
					},
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "무슨 소리야, 에이라?",
						"english": "What are you talking about, Eira?",
						"japanese": "何を言っているんだ、エイラ？",
						"chinese": "你在说什么，艾拉？",
						"french": "De quoi parles-tu, Eira ?",
						"spanish": "¿De qué hablas, Eira?",
						"vietnamese": "Ngươi đang nói gì vậy, Eira?",
						"thai": "คุณกำลังพูดอะไรอยู่ ไอร่า?",
						"hindi": "तुम क्या कह रही हो, एरा?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "Cairn은 약속을 깬 자에게, 혹독한 대가를 치르게 해.",
						"english": "Cairn makes those who break promises pay a harsh price.",
						"japanese": "Cairnは約束を破った者に、過酷な代償を支払わせる。",
						"chinese": "Cairn会让违背承诺者付出惨重代价。",
						"french": "Cairn fait payer un prix cruel à ceux qui rompent leurs promesses.",
						"spanish": "Cairn hace que los que rompen promesas paguen un precio muy alto.",
						"vietnamese": "Cairn khiến kẻ phá vỡ lời hứa phải trả giá đắt.",
						"thai": "Cairn ทำให้ผู้ที่ผิดคำสัญญาต้องชดใช้ด้วยราคาอันแสนสาหัส",
						"hindi": "केर्न वादे तोड़ने वालों को कठोर कीमत चुकाने पर मजबूर करता है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "이 룬 문자는… 약속이 깨지면, 심장이 얼어붙는다고 경고하고 있어.",
						"english": "These runes… warn that if a promise is broken, the heart will freeze.",
						"japanese": "このルーン文字は…約束が破られれば、心が凍りつくと警告している。",
						"chinese": "这些符文…警告说，如果誓言被打破，心脏就会冻结。",
						"french": "Ces runes… avertissent que si une promesse est brisée, le cœur gèlera.",
						"spanish": "Estas runas… advierten que si se rompe una promesa, el corazón se congelará.",
						"vietnamese": "Những chữ rune này… cảnh báo rằng nếu một lời hứa bị phá vỡ, trái tim sẽ đóng băng.",
						"thai": "รูนเหล่านี้… เตือนว่าหากคำสัญญาถูกทำลาย หัวใจจะแข็งเป็นน้ำแข็ง",
						"hindi": "ये रुनी अक्षर... चेतावनी दे रहे हैं कि अगर वादा टूटता है, तो दिल जम जाएगा।"
					}
				},
				{
					"content": {
						"korean": "설마… 그런 일이 실제로 일어난다고?",
						"english": "Can it be... Is that truly happening?",
						"japanese": "まさか…そんなことが現実に起こるのか？",
						"chinese": "难道……那种事真的会发生吗？",
						"french": "Impossible… Est-ce que ça arrive vraiment ?",
						"spanish": "No puede ser... ¿Eso realmente pasa?",
						"vietnamese": "Không thể nào… Chuyện đó thật sự xảy ra sao?",
						"thai": "เป็นไปไม่ได้... เรื่องแบบนั้นเกิดขึ้นจริงเหรอ?",
						"hindi": "ऐसा कैसे... क्या वाकई ऐसा होता है?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "Cairn의 심판은 냉혹해. 브란의 배신으로, 대가를 치러야 해.",
						"english": "Cairn's judgment is harsh. Bran's treachery must be paid for.",
						"japanese": "ケアンの審判は冷酷だ。ブランの裏切りには、代償を払わせる。",
						"chinese": "凯恩的审判是残酷的。布兰的背叛，必须付出代价。",
						"french": "Le jugement de Cairn est impitoyable. La trahison de Bran exige un prix.",
						"spanish": "El juicio de Cairn es despiadado. La traición de Bran debe ser pagada.",
						"vietnamese": "Phán quyết của Cairn thật tàn nhẫn. Sự phản bội của Bran phải trả giá.",
						"thai": "คำพิพากษาของคาร์นนั้นโหดร้าย การทรยศของแบรนต้องชดใช้",
						"hindi": "केर्न का न्याय निर्दयी है। ब्रान के धोखे की कीमत चुकानी होगी।"
					},
					"emotion": "angry",
					"speaker": "eira",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "안 돼… 문자가…!",
						"english": "No... the writing...!",
						"japanese": "だめだ…文字が…！",
						"chinese": "不…文字…！",
						"french": "Non… les symboles… !",
						"spanish": "No... ¡Las letras...!",
						"vietnamese": "Không… chữ viết…!",
						"thai": "ไม่นะ... ตัวอักษร...!",
						"hindi": "नहीं... अक्षर...!"
					}
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "sad",
					"content": {
						"korean": "쿨럭… 몸이… 차가워져….",
						"english": "*cough* My body... is growing cold...",
						"japanese": "ゴホッ…体が…冷たくなっていく…。",
						"chinese": "咳咳…身体…变得冰冷…。",
						"french": "*tousse* Mon corps… se glace…",
						"spanish": "*tos* Mi cuerpo... se está enfriando...",
						"vietnamese": "Khụ khụ… cơ thể… lạnh dần…",
						"thai": "แค่กๆ... ร่างกาย... กำลังเย็นลง...",
						"hindi": "*खाँसी* मेरा शरीर... ठंडा होता जा रहा है..."
					}
				},
				{
					"content": {
						"korean": "브란! 이 모든 게 네 탐욕 때문이야!",
						"english": "Bran! This is all because of your greed!",
						"japanese": "ブラン！この全てがお前の貪欲のせいだ！",
						"chinese": "布兰！这一切都是因为你的贪婪！",
						"french": "Bran ! Tout ça, c'est à cause de ton avarice !",
						"spanish": "¡Bran! ¡Todo esto es por tu codicia!",
						"vietnamese": "Bran! Tất cả là vì lòng tham của ngươi!",
						"thai": "แบรน! ทั้งหมดนี้เป็นเพราะความโลภของแก!",
						"hindi": "ब्रान! यह सब तुम्हारी लालच की वजह से है!"
					},
					"speaker": "eira",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "한 탐험대원의 몸이 서서히 얼어붙기 시작했다.",
						"english": "An explorer's body slowly began to freeze.",
						"japanese": "一人の探検隊員の体が徐々に凍りつき始めた。",
						"chinese": "一名探险队员的身体开始慢慢冻结。",
						"french": "Le corps d'un explorateur commença à geler lentement.",
						"spanish": "El cuerpo de un explorador comenzó a congelarse lentamente.",
						"vietnamese": "Cơ thể một thành viên đội thám hiểm dần dần đóng băng.",
						"thai": "ร่างกายของนักสำรวจคนหนึ่งเริ่มแข็งตัวช้าๆ",
						"hindi": "एक खोजकर्ता का शरीर धीरे-धीरे जमना शुरू हो गया।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter",
					"speaker": "eira"
				},
				{
					"speaker": "character_1",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "으윽… 더 이상… 움직일 수 없어….",
						"english": "Ugh... I can't move... anymore...",
						"japanese": "うぅ…もう…動けない…。",
						"chinese": "呃…再也…动不了了…。",
						"french": "Ugh… Je ne peux plus… bouger…",
						"spanish": "Ugh... Ya no... puedo moverme...",
						"vietnamese": "Ư… không thể… nhúc nhích nữa…",
						"thai": "อึก... ขยับไม่ได้แล้ว...",
						"hindi": "उफ़... अब और... हिल नहीं सकता..."
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이대로… 죽는 거야?",
						"english": "Am I... going to die like this?",
						"japanese": "このまま…死ぬのか？",
						"chinese": "难道…就这样…死了吗？",
						"french": "Est-ce que je… vais mourir comme ça ?",
						"spanish": "¿Así... voy a morir?",
						"vietnamese": "Cứ thế này… sẽ chết sao?",
						"thai": "ฉัน... จะต้องตายแบบนี้เหรอ?",
						"hindi": "क्या मैं... ऐसे ही मर जाऊँगा?"
					}
				},
				{
					"content": {
						"korean": "막아야 해… 이 심판을 막아야 한다고…!",
						"english": "I have to stop it... I have to stop this judgment...!",
						"japanese": "止めなければ…この審判を止めなければ…！",
						"chinese": "必须阻止…必须阻止这场审判…！",
						"french": "Il faut l'arrêter… Il faut arrêter ce jugement… !",
						"spanish": "Tengo que detenerlo... ¡Tengo que detener este juicio...!",
						"vietnamese": "Phải ngăn chặn… phải ngăn chặn phán quyết này…!",
						"thai": "ต้องหยุดมัน... ต้องหยุดคำพิพากษานี้...!",
						"hindi": "इसे रोकना होगा... इस न्याय को रोकना होगा...!"
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "얼어붙은 비명, 그 앞에서 아무것도 할 수 없었다.",
						"english": "Frozen screams, and I could do nothing before them.",
						"japanese": "凍てつく悲鳴、その前では何もできなかった。",
						"chinese": "冰冷的尖叫，在那面前我无能为力。",
						"french": "Des cris gelés, je ne pouvais rien faire face à eux.",
						"spanish": "Gritos helados, no pude hacer nada ante ellos.",
						"vietnamese": "Những tiếng thét đóng băng, tôi không thể làm gì trước chúng.",
						"thai": "เสียงกรีดร้องที่เยือกแข็ง, ไม่มีอะไรที่ทำได้ต่อหน้ามัน.",
						"hindi": "जमी हुई चीखें, उनके सामने कुछ भी नहीं किया जा सका।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "너희의 승리가… 진정한 끝은 아니다. 더 큰 겨울이 올 것이다.",
						"english": "Your victory… is not the true end. A greater winter will come.",
						"japanese": "お前たちの勝利は…真の終わりではない。さらなる冬が訪れるだろう。",
						"chinese": "你们的胜利…并非真正的终结。更漫长的冬季即将到来。",
						"french": "Votre victoire… n'est pas la vraie fin. Un hiver plus grand viendra.",
						"spanish": "Vuestra victoria… no es el verdadero fin. Un invierno más crudo llegará.",
						"vietnamese": "Chiến thắng của các ngươi… không phải là kết thúc thực sự. Một mùa đông lớn hơn sẽ đến.",
						"thai": "ชัยชนะของเจ้า… ไม่ใช่จุดจบที่แท้จริง ฤดูหนาวที่ยิ่งใหญ่กว่าจะมาถึง",
						"hindi": "तुम्हारी जीत… असली अंत नहीं है। एक बड़ी सर्दी आएगी।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "우리가… 해낸 건가?",
						"english": "Did… we do it?",
						"japanese": "我々は…やったのか？",
						"chinese": "我们…做到了吗？",
						"french": "Nous… avons réussi ?",
						"spanish": "¿Lo… logramos?",
						"vietnamese": "Chúng ta… đã làm được sao?",
						"thai": "เรา… ทำสำเร็จแล้วหรือ?",
						"hindi": "क्या… हमने कर दिखाया?"
					}
				},
				{
					"speaker": "eira",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira",
					"content": {
						"korean": "아직… 끝이 아니야. 더 깊은 곳에… 진실이 있어.",
						"english": "It's… not over yet. Deeper within… lies the truth.",
						"japanese": "まだ…終わりじゃない。もっと深いところに…真実がある。",
						"chinese": "还没…结束。更深处…隐藏着真相。",
						"french": "Ce n'est… pas encore fini. Plus profondément… se trouve la vérité.",
						"spanish": "Todavía… no ha terminado. Más profundo… reside la verdad.",
						"vietnamese": "Vẫn… chưa kết thúc. Sâu hơn nữa… có một sự thật.",
						"thai": "ยัง… ไม่จบ ความจริงอยู่ที่… ลึกกว่านั้น",
						"hindi": "अभी… खत्म नहीं हुआ है। और गहराई में… सच छिपा है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "차가운 승리. 그러나 심판은 계속될 터였다.",
						"english": "A cold victory. But the judgment would continue.",
						"japanese": "冷たい勝利。しかし、審判は続くだろう。",
						"chinese": "一场冰冷的胜利。然而审判仍在继续。",
						"french": "Une victoire froide. Mais le jugement allait continuer.",
						"spanish": "Una victoria fría. Pero el juicio continuaría.",
						"vietnamese": "Một chiến thắng lạnh lẽo. Nhưng sự phán xét sẽ tiếp tục.",
						"thai": "ชัยชนะอันเยือกเย็น แต่การพิพากษาจะยังคงดำเนินต่อไป",
						"hindi": "एक ठंडी जीत। लेकिन न्याय जारी रहेगा।"
					}
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 나타났다. 혹한의 심장, 그 자체가 이곳에 있었다.",
						"english": "A colossal shadow appeared. The very Heart of Frost, it stood here.",
						"japanese": "巨大な影が現れた。酷寒の心臓、それがここにあった。",
						"chinese": "一个巨大的身影出现了。极寒之心，它就在这里。",
						"french": "Une ombre colossale est apparue. Le Cœur Givreux lui-même était ici.",
						"spanish": "Una sombra colosal apareció. El Corazón Gélido, en sí mismo, estaba aquí.",
						"vietnamese": "Một bóng đen khổng lồ xuất hiện. Trái Tim Băng Giá, tự nó, đã ở đây.",
						"thai": "เงาขนาดยักษ์ปรากฏขึ้น หัวใจแห่งความหนาวเหน็บ สถิตอยู่ ณ ที่นี้",
						"hindi": "एक विशाल परछाई प्रकट हुई। शीतलन का हृदय, वह स्वयं यहाँ था।"
					}
				},
				{
					"content": {
						"korean": "깨진 약속의 대가는 혹독하다. 너희의 탐욕은 눈보라보다 빠르게 녹아내릴 것이다.",
						"english": "The price of broken promises is harsh. Your greed will melt faster than a blizzard.",
						"japanese": "破られた約束の代償は厳しい。お前たちの貪欲さは吹雪よりも早く溶け去るだろう。",
						"chinese": "违背承诺的代价是惨痛的你们的贪婪将比暴风雪融化得更快。",
						"french": "Le prix des promesses brisées est sévère. Votre cupidité fondra plus vite qu'un blizzard.",
						"spanish": "El precio de las promesas rotas es cruel. Vuestra codicia se derretirá más rápido que una ventisca.",
						"vietnamese": "Cái giá của những lời hứa tan vỡ thật nghiệt ngã. Lòng tham của các ngươi sẽ tan chảy nhanh hơn bão tuyết.",
						"thai": "ค่าตอบแทนของคำสัญญาที่แตกสลายนั้นโหดร้าย ความโลภของเจ้าจะละลายเร็วกว่าพายุหิมะ",
						"hindi": "टूटे वादों की कीमत कठोर होती है। तुम्हारा लालच बर्फीले तूफान से भी तेज़ी से पिघल जाएगा।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이게… Cairn의 심판자?",
						"english": "This is… Cairn's Arbiter?",
						"japanese": "これが…ケアンの審判者？",
						"chinese": "这就是…凯恩的裁决者？",
						"french": "C'est… l'Arbitre de Cairn ?",
						"spanish": "¿Este es… el Árbitro de Cairn?",
						"vietnamese": "Đây là… Kẻ Phán Xét của Cairn?",
						"thai": "นี่คือ… ผู้พิพากษาแห่งแคร์น?",
						"hindi": "यह है… केर्न का मध्यस्थ?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"speaker": "eira",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "그를 멈춰야 해… 더 큰 비극이 오기 전에…!",
						"english": "We must stop him… before a greater tragedy unfolds…!",
						"japanese": "彼を止めなければ…さらなる悲劇が訪れる前に…！",
						"chinese": "我们必须阻止他…在更大的悲剧发生之前…！",
						"french": "Il faut l'arrêter… avant qu'une plus grande tragédie ne survienne… !",
						"spanish": "Debemos detenerlo… ¡antes de que ocurra una tragedia mayor…!",
						"vietnamese": "Chúng ta phải ngăn hắn lại… trước khi một bi kịch lớn hơn ập đến…!",
						"thai": "เราต้องหยุดเขา… ก่อนที่โศกนาฏกรรมครั้งใหญ่กว่าจะเกิดขึ้น…!",
						"hindi": "हमें उसे रोकना होगा… इससे पहले कि कोई बड़ी त्रासदी आ जाए…!"
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "나약한 것들. 약속을 깬 자들처럼, 너희도 얼어붙어라.",
						"english": "Weaklings. Like those who broke their promises, freeze yourselves.",
						"japanese": "弱き者どもめ。約束を破った者たちのように、お前たちも凍りつけ。",
						"chinese": "弱者们。像那些违背承诺的人一样，你们也冻结吧。",
						"french": "Faibles. Comme ceux qui ont brisé leurs promesses, gelez.",
						"spanish": "Débiles. Como aquellos que rompieron sus promesas, congeláos.",
						"vietnamese": "Những kẻ yếu ớt. Như những kẻ đã phá vỡ lời hứa, hãy đóng băng đi.",
						"thai": "พวกอ่อนแอ เหมือนกับพวกที่ผิดสัญญา พวกเจ้าก็จงแข็งตายซะ",
						"hindi": "कमज़ोरों। जिन्होंने अपने वादे तोड़े, उनकी तरह तुम भी जम जाओ।"
					}
				},
				{
					"content": {
						"korean": "포기할 수 없어…!",
						"english": "Cannot give up…!",
						"japanese": "諦めるわけにはいかない…！",
						"chinese": "不能放弃…！",
						"french": "Je ne peux pas abandonner… !",
						"spanish": "¡No puedo rendirme…!",
						"vietnamese": "Không thể bỏ cuộc…!",
						"thai": "ยอมแพ้ไม่ได้…!",
						"hindi": "हार नहीं मान सकता…!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "아직… 희망은 있어….",
						"english": "There's still... hope...",
						"japanese": "まだ…希望は、ある…。",
						"chinese": "还有…希望…。",
						"french": "Il y a encore... de l'espoir...",
						"spanish": "Todavía... hay esperanza...",
						"vietnamese": "Vẫn còn… hy vọng…",
						"thai": "ยังคงมี…ความหวัง…",
						"hindi": "अभी भी... उम्मीद है..."
					},
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"배신은 가장 추운 곳에서 시작되었다.",
			"믿음은 조각나고, 약속은 얼어붙었다.",
			"대가는 혹독했고, 심판은 냉정했다.",
			"이 혹독한 설원에서, 비명은 누구의 것이 될까."
		],
		"english": [
			"Treachery began in the coldest place.",
			"Faith shattered, promises froze.",
			"The price was harsh, judgment was cold.",
			"In this harsh snowfield, whose scream will it be?"
		],
		"japanese": [
			"裏切りは最も寒い場所で始まった。",
			"信頼は砕け、約束は凍りついた。",
			"代償は厳しく、裁きは冷酷だった。",
			"この過酷な雪原で、悲鳴は誰のものになるのか。"
		],
		"chinese": [
			"背叛始于最寒冷之地。",
			"信任破碎，誓言冰封。",
			"代价残酷，审判冷酷。",
			"在这严酷的雪原上，谁将发出尖叫？"
		],
		"french": [
			"La trahison a commencé dans l'endroit le plus froid.",
			"La foi s'est brisée, les promesses ont gelé.",
			"Le prix fut cruel, le jugement fut froid.",
			"Dans ce champ de neige impitoyable, à qui appartiendra le cri ?"
		],
		"spanish": [
			"La traición comenzó en el lugar más frío.",
			"La fe se hizo añicos, las promesas se congelaron.",
			"El precio fue duro, el juicio fue frío.",
			"En este crudo campo nevado, ¿de quién será el grito?"
		],
		"vietnamese": [
			"Sự phản bội bắt đầu từ nơi lạnh giá nhất.",
			"Niềm tin tan vỡ, lời hứa đóng băng.",
			"Cái giá thật nghiệt ngã, sự phán xét thật lạnh lùng.",
			"Trong cánh đồng tuyết khắc nghiệt này, tiếng thét sẽ là của ai?"
		],
		"thai": [
			"การทรยศเริ่มต้นขึ้นในสถานที่ที่หนาวเหน็บที่สุด",
			"ศรัทธาแตกสลาย, คำมั่นสัญญาเยือกแข็ง",
			"ราคาแสนสาหัส, คำตัดสินไร้ความปรานี",
			"ในทุ่งหิมะอันโหดร้ายนี้ เสียงกรีดร้องจะเป็นของใคร?"
		],
		"hindi": [
			"विश्वासघात सबसे ठंडी जगह पर शुरू हुआ।",
			"विश्वास बिखर गया, वादे जम गए।",
			"कीमत कठोर थी, न्याय ठंडा था।",
			"इस कठोर बर्फीले मैदान में, चीख किसकी होगी?"
		]
	}
} as const;
