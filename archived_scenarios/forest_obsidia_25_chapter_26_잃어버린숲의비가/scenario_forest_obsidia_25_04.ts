export const scenario_forest_obsidia_25_04 = {
	"scenario_id": "forest_obsidia_25_04",
	"order": 4,
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
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "어둠의 제단. 숲의 모든 고통이 모인 듯했다.",
						"english": "The Altar of Darkness. It seemed all the forest's suffering gathered here.",
						"japanese": "闇の祭壇。森のすべての苦痛がここに集まっているようだった。",
						"chinese": "黑暗祭坛。森林所有的痛苦似乎都汇聚于此。",
						"french": "L'Autel des Ténèbres. Toute la souffrance de la forêt semblait s'y être rassemblée.",
						"spanish": "El Altar de la Oscuridad. Parecía que todo el sufrimiento del bosque se había reunido aquí.",
						"vietnamese": "Bàn thờ Bóng tối. Dường như mọi nỗi đau của rừng đều tụ hội về đây.",
						"thai": "แท่นบูชาแห่งความมืด ดูเหมือนความทุกข์ทรมานทั้งหมดของป่ามารวมกันอยู่ที่นี่",
						"hindi": "अंधकार की वेदी। ऐसा लगा जैसे जंगल का सारा दर्द यहीं इकट्ठा हो गया था।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이 비석… 숲의 힘을 흡수하고 있어.",
						"english": "This monolith... it's absorbing the forest's power.",
						"japanese": "この石碑…森の力を吸い取っている。",
						"chinese": "这块石碑……它正在吸收森林的力量。",
						"french": "Ce monolithe... il absorbe le pouvoir de la forêt.",
						"spanish": "Este monolito... está absorbiendo el poder del bosque.",
						"vietnamese": "Tấm bia đá này... nó đang hút sức mạnh của rừng.",
						"thai": "เสาหินนี่… มันกำลังดูดซับพลังของป่า",
						"hindi": "यह स्मारक... यह जंगल की शक्ति सोख रहा है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "cedar"
				},
				{
					"type": "speech",
					"speaker": "cedar",
					"content": {
						"korean": "으윽…! 머리가…!",
						"english": "Ugh...! My head...!",
						"japanese": "うぅっ…！頭が…！",
						"chinese": "呃啊……！我的头……！",
						"french": "Ugh...! Ma tête...!",
						"spanish": "¡Ugh...! ¡Mi cabeza...!",
						"vietnamese": "Ư... Đầu tôi...!",
						"thai": "อึก…! หัวฉัน…!",
						"hindi": "उफ़...! मेरा सिर...!"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "시더? 괜찮아?",
						"english": "Cidar? Are you okay?",
						"japanese": "シダー？大丈夫？",
						"chinese": "希达？你还好吗？",
						"french": "Cidar ? Ça va ?",
						"spanish": "¿Cidar? ¿Estás bien?",
						"vietnamese": "Cidar? Cậu ổn chứ?",
						"thai": "ซีดาร์? เธอโอเคไหม?",
						"hindi": "सिडार? क्या तुम ठीक हो?"
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "cedar",
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "안 돼… 날 두고 가지 마…!",
						"english": "No...! Don't leave me...!",
						"japanese": "やめて…私を置いていかないで…！",
						"chinese": "不要……别丢下我……！",
						"french": "Non...! Ne me quitte pas...!",
						"spanish": "¡No...! ¡No me dejes...!",
						"vietnamese": "Không...! Đừng bỏ tôi lại...!",
						"thai": "ไม่นะ… อย่าทิ้งฉันไป…!",
						"hindi": "नहीं...! मुझे छोड़कर मत जाओ...!"
					},
					"speaker": "cedar",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "시더, 무슨 일이야?",
						"english": "Cidar, what's wrong?",
						"japanese": "シダー、どうしたの？",
						"chinese": "希达，怎么了？",
						"french": "Cidar, qu'est-ce qui ne va pas ?",
						"spanish": "Cidar, ¿qué pasa?",
						"vietnamese": "Cidar, có chuyện gì vậy?",
						"thai": "ซีดาร์ มีอะไรเหรอ?",
						"hindi": "सिडार, क्या बात है?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "cedar",
					"content": {
						"korean": "기억이… 조작되고 있어. 소중한 모든 게 사라져가…",
						"english": "My memories… are being manipulated. Everything precious is fading…",
						"japanese": "記憶が…操作されている。大切なものが、全て消えていく…",
						"chinese": "记忆…正在被篡改。所有珍贵的一切都在消逝…",
						"french": "Mes souvenirs… sont manipulés. Tout ce qui m'est cher disparaît…",
						"spanish": "Mis recuerdos… están siendo manipulados. Todo lo valioso se desvanece…",
						"vietnamese": "Ký ức… đang bị thao túng. Mọi thứ quý giá đang biến mất…",
						"thai": "ความทรงจำ…กำลังถูกบิดเบือน ทุกสิ่งอันมีค่ากำลังเลือนหายไป…",
						"hindi": "मेरी यादें… हेरफेर की जा रही हैं। मेरी सारी कीमती चीजें गायब होती जा रही हैं…"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "숲이 널 속박하고 있어…",
						"english": "The forest is binding you…",
						"japanese": "森が、お前を束縛している…",
						"chinese": "森林正在束缚你…",
						"french": "La forêt te lie…",
						"spanish": "El bosque te está atando…",
						"vietnamese": "Khu rừng đang ràng buộc ngươi…",
						"thai": "ป่ากำลังผูกมัดเจ้า…",
						"hindi": "जंगल तुम्हें बांध रहा है…"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "cedar",
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"speaker": "cedar",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "우리가… 숲에 묶였어. 강제로…",
						"english": "We're… bound to the forest. Forcibly…",
						"japanese": "私達は…森に縛られた。強制的に…",
						"chinese": "我们…被困在森林里了。强制地…",
						"french": "Nous sommes… liés à la forêt. De force…",
						"spanish": "Estamos… atados al bosque. Por la fuerza…",
						"vietnamese": "Chúng ta… bị trói buộc vào khu rừng. Bị ép buộc…",
						"thai": "พวกเรา…ถูกผูกมัดกับป่า ถูกบังคับ…",
						"hindi": "हम… जंगल से बंध गए हैं। जबरदस्ती…"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "숲의 계약… 그게 진짜였어?",
						"english": "The forest's pact… Was it real?",
						"japanese": "森の契約…あれは本当だったのか？",
						"chinese": "森林的契约…那是真的吗？",
						"french": "Le pacte de la forêt… C'était réel ?",
						"spanish": "¿El pacto del bosque… era real?",
						"vietnamese": "Khế ước của rừng… Nó là thật sao?",
						"thai": "พันธสัญญาของป่า…มันเป็นเรื่องจริงหรือ?",
						"hindi": "जंगल का समझौता… क्या वह सच था?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 문양… (손에 쥔 조각을 보며) 분명…",
						"english": "This design… (Looking at the fragment in hand) Surely…",
						"japanese": "この模様… (手に握った破片を見つめながら) まさか…",
						"chinese": "这个图案… (看着手中握着的碎片) 这一定是…",
						"french": "Ce motif… (Regardant le fragment dans sa main) Assurément…",
						"spanish": "Este grabado… (Mirando el fragmento en su mano) Sin duda…",
						"vietnamese": "Hoa văn này… (Nhìn mảnh vỡ trong tay) Chắc chắn…",
						"thai": "ลวดลายนี้… (มองชิ้นส่วนในมือ) แน่นอนว่า…",
						"hindi": "यह निशान… (हाथ में पकड़े हुए टुकड़े को देखकर) ज़रूर…"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "cedar"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "저 조각은… 전에 봤던 거랑 똑같아.",
						"english": "That fragment… It's identical to one I saw before.",
						"japanese": "あの破片は…前に見たものと全く同じだ。",
						"chinese": "那块碎片…和我之前看到的一模一样。",
						"french": "Ce fragment… C'est le même que celui que j'ai vu avant.",
						"spanish": "Ese fragmento… Es idéntico al que vi antes.",
						"vietnamese": "Mảnh vỡ đó… Giống hệt cái tôi từng thấy trước đây.",
						"thai": "ชิ้นส่วนนั้น…เหมือนกับที่เคยเห็นมาก่อนเลย",
						"hindi": "वह टुकड़ा… बिल्कुल वैसा ही है जैसा मैंने पहले देखा था।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "cedar",
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"speaker": "cedar",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "내 자유는… 내 사랑은… 모두 숲이 가져갔어!",
						"english": "My freedom… my love… the forest took it all!",
						"japanese": "私の自由は…私の愛は…全て森が奪っていった！",
						"chinese": "我的自由…我的爱…全都被森林夺走了！",
						"french": "Ma liberté… mon amour… la forêt a tout pris !",
						"spanish": "Mi libertad… mi amor… ¡el bosque se llevó todo!",
						"vietnamese": "Tự do của tôi… tình yêu của tôi… tất cả đều bị khu rừng cướp đi!",
						"thai": "อิสรภาพของฉัน…ความรักของฉัน…ป่าเอาไปหมดแล้ว!",
						"hindi": "मेरी आज़ादी… मेरा प्यार… सब कुछ जंगल ने छीन लिया!"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이 숲은… 모든 걸 앗아가는구나.",
						"english": "This forest… it takes everything.",
						"japanese": "この森は…全てを奪い去るのか。",
						"chinese": "这片森林…它夺走了一切。",
						"french": "Cette forêt… elle prend tout.",
						"spanish": "Este bosque… lo arrebata todo.",
						"vietnamese": "Khu rừng này… nó cướp đi tất cả.",
						"thai": "ป่านี้…มันเอาทุกอย่างไปหมดเลย",
						"hindi": "यह जंगल… सब कुछ छीन लेता है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "비석의 고대 문자들이 짙은 어둠 속에서 빛났다. 숲의 계약이 희생을 요구하는 듯했다.",
						"english": "Ancient writings on the stele glowed in the deep darkness. The forest's pact seemed to demand sacrifice.",
						"japanese": "石碑の古代文字が深い闇の中で輝いた。森の契約が犠牲を要求しているようだった。",
						"chinese": "石碑上的古老文字在浓烈的黑暗中闪耀。森林的契约似乎在要求牺牲。",
						"french": "Les anciennes écritures sur la stèle brillaient dans l'obscurité profonde. Le pacte de la forêt semblait exiger un sacrifice.",
						"spanish": "Las antiguas escrituras en la estela brillaban en la profunda oscuridad. El pacto del bosque parecía exigir un sacrificio.",
						"vietnamese": "Các ký tự cổ trên bia đá phát sáng trong bóng tối dày đặc. Khế ước của rừng dường như đang đòi hỏi sự hy sinh.",
						"thai": "อักษรโบราณบนศิลาเรืองรองในความมืดมิด พันธสัญญาของป่าดูเหมือนจะเรียกร้องการเสียสละ",
						"hindi": "शिलालेख पर प्राचीन अक्षर घने अंधेरे में चमक उठे। जंगल का समझौता बलिदान की मांग कर रहा था।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "우리가 갇힌 것도… 이 계약 때문인가?",
						"english": "Are we trapped… because of this pact?",
						"japanese": "私達が閉じ込められたのも…この契約のせいなのか？",
						"chinese": "我们被困住…也是因为这个契约吗？",
						"french": "Sommes-nous piégés… à cause de ce pacte ?",
						"spanish": "¿Estamos atrapados… por este pacto?",
						"vietnamese": "Việc chúng ta bị mắc kẹt… cũng là do khế ước này sao?",
						"thai": "การที่เราถูกกักขัง…ก็เพราะพันธสัญญานี้หรือ?",
						"hindi": "क्या हम इसलिए फंसे हैं… क्योंकि इस समझौते के कारण?"
					},
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "숲의 어둠이 탐사대를 집어삼켰다.",
						"english": "The forest's darkness engulfed the expedition.",
						"japanese": "森の闇が探査隊を飲み込んだ。",
						"chinese": "森林的黑暗吞噬了探险队。",
						"french": "Les ténèbres de la forêt engloutirent l'expédition.",
						"spanish": "La oscuridad del bosque engulló a la expedición.",
						"vietnamese": "Bóng tối của rừng đã nuốt chửng đội thám hiểm.",
						"thai": "ความมืดมิดของป่ากลืนกินคณะสำรวจ",
						"hindi": "जंगल के अंधेरे ने अभियान को निगल लिया।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "보잘것없는 것들… 영원히 숲에 갇혀라.",
						"english": "Insignificant beings… be trapped in the forest forever.",
						"japanese": "取るに足らない者ども…永遠に森に囚われろ。",
						"chinese": "渺小的东西们…永远被困在森林里吧。",
						"french": "Êtres insignifiants… soyez piégés dans la forêt pour toujours.",
						"spanish": "Seres insignificantes… quedad atrapados en el bosque para siempre.",
						"vietnamese": "Những kẻ nhỏ bé… hãy bị giam cầm trong rừng mãi mãi.",
						"thai": "พวกสิ่งมีชีวิตต่ำต้อย... จงถูกกักขังอยู่ในป่าตลอดไป",
						"hindi": "तुच्छ प्राणी… जंगल में हमेशा के लिए फंस जाओ।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…젠장! 아직 포기할 수 없어!",
						"english": "...Damn! Can't give up yet!",
						"japanese": "…くそ！まだ諦められない！",
						"chinese": "…该死！还没法放弃！",
						"french": "...Bon sang ! Pas question d'abandonner !",
						"spanish": "...¡Maldición! ¡No puedo rendirme aún!",
						"vietnamese": "...Khốn kiếp! Chưa thể bỏ cuộc!",
						"thai": "...บ้าจริง! ยังยอมแพ้ไม่ได้!",
						"hindi": "...लानत है! अभी हार नहीं मान सकता!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "cedar"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "여기서… 끝낼 수 없어…",
						"english": "Can't end it here...",
						"japanese": "ここで…終わらせるわけにはいかない…",
						"chinese": "不能在这里…结束…",
						"french": "Pas question… de finir ici…",
						"spanish": "No puedo… terminar aquí…",
						"vietnamese": "Không thể… kết thúc ở đây…",
						"thai": "จะจบลงตรงนี้ไม่ได้…",
						"hindi": "यहाँ… खत्म नहीं कर सकता…"
					},
					"speaker": "cedar",
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "cedar"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…결국 너희도… 숲의 일부가 될 뿐…",
						"english": "…In the end, you too… will merely become part of the forest…",
						"japanese": "…結局お前たちも…森の一部になるだけ…",
						"chinese": "…最终你们也…只会成为森林的一部分…",
						"french": "…Au final, vous aussi… ne ferez que devenir une partie de la forêt…",
						"spanish": "…Al final, vosotros también… solo seréis parte del bosque…",
						"vietnamese": "…Cuối cùng, ngươi cũng… chỉ là một phần của rừng thôi…",
						"thai": "…ในที่สุด พวกเจ้าก็… เป็นแค่ส่วนหนึ่งของป่า…",
						"hindi": "…अंततः, तुम भी… केवल जंगल का हिस्सा बन जाओगे…"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "네 뜻대로 되지 않아!",
						"english": "It won't go your way!",
						"japanese": "思い通りにはさせない！",
						"chinese": "不会如你所愿！",
						"french": "Ça ne se passera pas comme tu veux !",
						"spanish": "¡No saldrá como quieres!",
						"vietnamese": "Sẽ không theo ý ngươi đâu!",
						"thai": "มันจะไม่ได้เป็นไปตามที่แกต้องการ!",
						"hindi": "यह तुम्हारी मर्ज़ी से नहीं होगा!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "cedar",
					"content": {
						"korean": "또 다른 희생자…",
						"english": "Another victim…",
						"japanese": "また新たな犠牲者…",
						"chinese": "又一个牺牲者…",
						"french": "Une autre victime…",
						"spanish": "Otra víctima…",
						"vietnamese": "Một nạn nhân nữa…",
						"thai": "เหยื่อรายต่อไป...",
						"hindi": "एक और शिकार…"
					},
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "숲의 속박은 끝나지 않았다. 더 깊은 곳, 진실이 기다린다.",
						"english": "The forest's shackles haven't ended. Deeper still, truth awaits.",
						"japanese": "森の束縛は終わっていない。さらに奥深く、真実が待っている。",
						"chinese": "森林的束缚并未结束。更深处，真相正等待着。",
						"french": "Les chaînes de la forêt n'ont pas pris fin. Plus profond encore, la vérité attend.",
						"spanish": "Las ataduras del bosque no han terminado. Más profundo aún, la verdad aguarda.",
						"vietnamese": "Sự ràng buộc của rừng chưa kết thúc. Sâu thẳm hơn, sự thật đang chờ đợi.",
						"thai": "พันธนาการของป่ายังไม่สิ้นสุด ลึกเข้าไปอีก ความจริงกำลังรออยู่",
						"hindi": "जंगल के बंधन खत्म नहीं हुए हैं। और गहरे में, सच्चाई इंतजार कर रही है।"
					}
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "제단 깊은 곳, 거대한 그림자가 움직였다.",
						"english": "Deep within the altar, a colossal shadow stirred.",
						"japanese": "祭壇の奥深く、巨大な影が動いた。",
						"chinese": "祭坛深处，一个巨大的影子动了。",
						"french": "Au plus profond de l'autel, une ombre colossale s'agita.",
						"spanish": "En lo profundo del altar, una sombra colosal se movió.",
						"vietnamese": "Sâu trong tế đàn, một bóng đen khổng lồ cựa quậy.",
						"thai": "ลึกเข้าไปในแท่นบูชา เงาขนาดมหึมาเคลื่อนไหว",
						"hindi": "वेदी के गहरे में, एक विशाल छाया हिली।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "감히… 숲의 질서를 거스르려는가.",
						"english": "How dare you… defy the forest's order?",
						"japanese": "よくも…森の秩序に逆らおうとするか。",
						"chinese": "你竟敢…违抗森林的秩序？",
						"french": "Comment oses-tu… défier l'ordre de la forêt ?",
						"spanish": "¿Cómo osas… desafiar el orden del bosque?",
						"vietnamese": "Ngươi dám… chống lại trật tự của rừng?",
						"thai": "แกกล้าดียังไง... ท้าทายระเบียบของป่า",
						"hindi": "तुम हिम्मत कैसे करते हो… जंगल के आदेश का उल्लंघन करने की।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "네가… 이 모든 비극의 원흉인가!",
						"english": "Are you… the root cause of all this tragedy!",
						"japanese": "貴様が…この全ての悲劇の元凶か！",
						"chinese": "你就是…这一切悲剧的元凶吗！",
						"french": "Es-tu… la cause profonde de toute cette tragédie ?",
						"spanish": "¿Eres tú… la raíz de toda esta tragedia?",
						"vietnamese": "Ngươi… là kẻ gây ra mọi bi kịch này!",
						"thai": "แกคือ... ต้นเหตุของโศกนาฏกรรมทั้งหมดนี้!",
						"hindi": "क्या तुम… इस सारी त्रासदी का मूल कारण हो!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "숲의 의지는… 거스를 수 없다. 너희도 곧 알게 될 것이다.",
						"english": "The will of the forest… cannot be defied. You too shall soon know.",
						"japanese": "森の意志は…逆らえない。お前たちもすぐに知ることになるだろう。",
						"chinese": "森林的意志…不可违抗。你们很快就会明白的。",
						"french": "La volonté de la forêt… ne peut être défiée. Vous aussi, vous le saurez bientôt.",
						"spanish": "La voluntad del bosque… no puede ser desafiada. Vosotros también lo sabréis pronto.",
						"vietnamese": "Ý chí của rừng… không thể chống lại. Ngươi rồi cũng sẽ sớm biết thôi.",
						"thai": "เจตจำนงของป่า... ไม่มีใครต้านได้ พวกเจ้าก็จะได้รับรู้ในไม่ช้า",
						"hindi": "जंगल की इच्छा… का उल्लंघन नहीं किया जा सकता। तुम्हें भी जल्द ही पता चल जाएगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"direction": "up",
					"speaker": "random_boss",
					"action": "exit",
					"type": "direction",
					"duration_ms": 300
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"숲은 더 깊은 곳으로 끌어들였다.",
			"어둠의 제단, 그곳에 숨겨진 잔혹한 진실.",
			"잃어버린 기억, 속박된 영혼들의 비명.",
			"이제, 마주할 시간이다. 비극의 심장을."
		],
		"english": [
			"The forest drew me deeper.",
			"The Altar of Darkness, and the cruel truth hidden within.",
			"Lost memories, screams of bound souls.",
			"Now, it's time to face the heart of tragedy."
		],
		"japanese": [
			"森は私をさらに深くへと引き込んだ。",
			"闇の祭壇、そこに隠された残酷な真実。",
			"失われた記憶、縛られた魂たちの悲鳴。",
			"いま、悲劇の核心と向き合う時だ。"
		],
		"chinese": [
			"森林将我引向更深处。",
			"黑暗祭坛，那里隐藏着残酷的真相。",
			"失去的记忆，被束缚灵魂的尖叫。",
			"现在，是时候面对悲剧的核心了。"
		],
		"french": [
			"La forêt m'attirait plus profondément.",
			"L'Autel des Ténèbres, et la cruelle vérité qui s'y cache.",
			"Des souvenirs perdus, les cris des âmes enchaînées.",
			"Maintenant, il est temps d'affronter le cœur de la tragédie."
		],
		"spanish": [
			"El bosque me arrastró más profundo.",
			"El Altar de la Oscuridad, y la cruel verdad oculta allí.",
			"Recuerdos perdidos, los gritos de almas encadenadas.",
			"Ahora, es tiempo de enfrentar el corazón de la tragedia."
		],
		"vietnamese": [
			"Rừng đã cuốn tôi vào sâu hơn.",
			"Bàn thờ Bóng tối, và sự thật tàn khốc ẩn giấu nơi đó.",
			"Ký ức đã mất, tiếng thét của những linh hồn bị trói buộc.",
			"Bây giờ, là lúc đối mặt với trái tim của bi kịch."
		],
		"thai": [
			"ป่าดึงดูดฉันให้ลึกเข้าไปอีก",
			"แท่นบูชาแห่งความมืด และความจริงอันโหดร้ายที่ซ่อนอยู่ภายใน",
			"ความทรงจำที่หายไป เสียงกรีดร้องของวิญญาณที่ถูกพันธนาการ",
			"บัดนี้ ได้เวลาเผชิญหน้ากับแก่นแท้ของโศกนาฏกรรม"
		],
		"hindi": [
			"जंगल मुझे और गहराई में खींचता गया।",
			"अंधकार की वेदी, और उसमें छिपा क्रूर सच।",
			"खोई हुई यादें, बंधे हुए आत्माओं की चीखें।",
			"अब, त्रासदी के दिल का सामना करने का समय है।"
		]
	}
} as const;
