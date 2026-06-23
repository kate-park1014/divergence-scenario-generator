export const scenario_desert_dustbound_3_03 = {
	"scenario_id": "desert_dustbound_3_03",
	"order": 3,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"jasper": {
			"id": "mon_f3aa9577-2fd6-4d65-80cd-6b654778b7f4",
			"name": {
				"korean": "재스퍼",
				"english": "Jasper",
				"japanese": "ジャスパー",
				"chinese": "贾斯珀",
				"french": "Jasper",
				"spanish": "Jasper",
				"vietnamese": "Jasper",
				"thai": "แจสเปอร์",
				"hindi": "जैस्पर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a1ee5a95-a611-4b33-7264-582262b68800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/bc87b1ce-d1eb-40ea-ccc4-3c4434d35800/public"
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
					"emotion": "base",
					"content": {
						"korean": "고대 유적의 입구. 부서진 석상이 방문객을 응시한다.",
						"english": "Entrance to ancient ruins. A broken stone statue stares at visitors.",
						"japanese": "古代遺跡の入り口。壊れた石像が訪問者を見つめる。",
						"chinese": "古代遗迹的入口。破碎的石像凝视着访客。",
						"french": "Entrée des ruines antiques. Une statue de pierre brisée fixe les visiteurs.",
						"spanish": "Entrada a las ruinas antiguas. Una estatua de piedra rota mira fijamente a los visitantes.",
						"vietnamese": "Lối vào di tích cổ. Tượng đá vỡ nhìn chằm chằm khách viếng thăm.",
						"thai": "ทางเข้าซากปรักหักพังโบราณ รูปปั้นหินที่แตกหักจ้องมองผู้มาเยือน",
						"hindi": "प्राचीन खंडहरों का प्रवेश द्वार। एक टूटी हुई पत्थर की मूर्ति आगंतुकों को घूरती है।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "여기가 오아시스로 가는 길이라고? 너무 메마른데.",
						"english": "This is the way to the oasis? It's too dry.",
						"japanese": "ここがオアシスへの道だと？あまりに乾きすぎている。",
						"chinese": "这里是通往绿洲的路？也太干了吧。",
						"french": "C'est le chemin de l'oasis ? C'est trop sec.",
						"spanish": "¿Este es el camino al oasis? Está demasiado seco.",
						"vietnamese": "Đây là đường đến ốc đảo ư? Khô cằn quá.",
						"thai": "นี่คือทางไปโอเอซิสหรือ? แห้งแล้งเกินไป",
						"hindi": "यह नखलिस्तान का रास्ता है? यह बहुत सूखा है।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "jasper",
					"action": "enter",
					"spot": [
						5,
						2
					]
				},
				{
					"emotion": "base",
					"content": {
						"korean": "오아시스? 환영이나 보러 왔나 보군.",
						"english": "An oasis? You must have come to see illusions.",
						"japanese": "オアシス？幻影でも見に来たんだろう。",
						"chinese": "绿洲？你肯定是来看幻影的吧。",
						"french": "Une oasis ? Vous êtes sûrement venu voir des illusions.",
						"spanish": "¿Un oasis? Debes haber venido a ver ilusiones.",
						"vietnamese": "Ốc đảo? Chắc đến xem ảo ảnh rồi.",
						"thai": "โอเอซิส? คงมาดูภาพลวงตาละมั้ง",
						"hindi": "एक नखलिस्तान? तुम भ्रम देखने आए होगे।"
					},
					"type": "speech",
					"speaker": "jasper"
				},
				{
					"type": "speech",
					"speaker": "jasper",
					"emotion": "base",
					"content": {
						"korean": "여기선 그런 걸 너무 많이 봐서 이젠 지겹지도 않아.",
						"english": "I've seen too much of that here, I'm not even bored anymore.",
						"japanese": "ここではそんなものをたくさん見てきたから、もう飽きもしない。",
						"chinese": "在这里看得太多了，我已经不觉得厌烦了。",
						"french": "J'en ai tellement vu ici que je ne m'ennuie même plus.",
						"spanish": "He visto tanto de eso aquí que ya ni me aburre.",
						"vietnamese": "Ở đây tôi đã thấy quá nhiều thứ đó rồi, giờ không còn thấy chán nữa.",
						"thai": "ฉันเห็นสิ่งเหล่านั้นที่นี่มามากแล้ว จนไม่รู้สึกเบื่ออีกต่อไป",
						"hindi": "मैंने यहाँ ऐसा बहुत कुछ देखा है, अब तो ऊब भी नहीं होती।"
					}
				},
				{
					"content": {
						"korean": "무슨 소리야.",
						"english": "What are you talking about?",
						"japanese": "何を言ってるんだ。",
						"chinese": "你说什么呢。",
						"french": "De quoi parlez-vous ?",
						"spanish": "¿De qué estás hablando?",
						"vietnamese": "Anh đang nói gì vậy?",
						"thai": "คุณกำลังพูดถึงอะไร?",
						"hindi": "तुम क्या कह रहे हो।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "jasper",
					"content": {
						"korean": "진짜 물처럼 보이지만, 손에 닿으면 사라지는 것들.",
						"english": "Things that look like real water, but vanish when you touch them.",
						"japanese": "本物の水のように見えるが、触れると消えるものだ。",
						"chinese": "看起来像真水，但一碰就消失的东西。",
						"french": "Des choses qui ressemblent à de l'eau véritable, mais qui disparaissent au toucher.",
						"spanish": "Cosas que parecen agua de verdad, pero que desaparecen al tocarlas.",
						"vietnamese": "Những thứ trông như nước thật, nhưng chạm vào là biến mất.",
						"thai": "สิ่งที่ดูเหมือนน้ำจริง แต่หายไปเมื่อสัมผัส",
						"hindi": "ऐसी चीज़ें जो असली पानी जैसी दिखती हैं, लेकिन छूने पर गायब हो जाती हैं।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "눈앞의 물웅덩이가 한순간 모래바람과 함께 사라졌다.",
						"english": "The puddle before my eyes vanished in an instant with a gust of sandy wind.",
						"japanese": "目の前の水たまりが、一瞬で砂嵐と共に消え去った。",
						"chinese": "眼前的水坑瞬间随着沙尘暴消失了。",
						"french": "La flaque d'eau devant mes yeux disparut instantanément avec une bourrasque de sable.",
						"spanish": "El charco ante mis ojos desapareció en un instante con una ráfaga de viento arenoso.",
						"vietnamese": "Vũng nước trước mắt chợt biến mất cùng với cơn gió cát.",
						"thai": "แอ่งน้ำตรงหน้าหายไปในพริบตาพร้อมกับพายุทราย",
						"hindi": "आँखों के सामने का पानी का कुंड रेत के तूफान के साथ पल भर में गायब हो गया।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "...뭐지?",
						"english": "...What was that?",
						"japanese": "...何だ？",
						"chinese": "...什么？",
						"french": "...Qu'est-ce que c'était ?",
						"spanish": "...¿Qué fue eso?",
						"vietnamese": "...Gì vậy?",
						"thai": "...อะไรน่ะ?",
						"hindi": "...यह क्या था?"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "봤지? 신기루일 뿐이야.",
						"english": "See? Just a mirage.",
						"japanese": "見ただろ？蜃気楼に過ぎない。",
						"chinese": "看到了吧？那只是海市蜃楼。",
						"french": "Tu vois ? Juste un mirage.",
						"spanish": "¿Lo viste? Solo un espejismo.",
						"vietnamese": "Thấy chưa? Chỉ là ảo ảnh thôi.",
						"thai": "เห็นไหม? แค่ภาพลวงตาเอง",
						"hindi": "देखा? बस एक मृगतृष्णा।"
					},
					"speaker": "jasper",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "jasper"
				},
				{
					"content": {
						"korean": "이 유적, 뭔가 달라. 깊이 들어갈수록 기묘해져.",
						"english": "This ruin... it's different. The deeper we go, the stranger it gets.",
						"japanese": "この遺跡、何か違う。深く入るほど奇妙になる。",
						"chinese": "这遗迹，有点不对劲。越深入越诡异。",
						"french": "Cette ruine... elle est différente. Plus on s'enfonce, plus elle devient étrange.",
						"spanish": "Esta ruina... es diferente. Cuanto más nos adentramos, más extraña se vuelve.",
						"vietnamese": "Di tích này... có gì đó khác lạ. Càng vào sâu càng kỳ quái.",
						"thai": "ซากปรักหักพังนี่...มันแปลกไป ยิ่งลึกเข้าไปเท่าไหร่ก็ยิ่งประหลาดขึ้นเท่านั้น",
						"hindi": "यह खंडहर... कुछ अलग है। जितना गहरा जाते हैं, उतना ही अजीब होता जाता है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "jasper"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "뭔가 숨겨진 게 있나 봐.",
						"english": "It seems something's hidden here.",
						"japanese": "何か隠されているようだ。",
						"chinese": "看来这里藏着什么。",
						"french": "Il semble que quelque chose soit caché ici.",
						"spanish": "Parece que hay algo escondido.",
						"vietnamese": "Có vẻ như có gì đó đang bị giấu kín.",
						"thai": "ดูเหมือนจะมีบางอย่างซ่อนอยู่",
						"hindi": "लगता है कुछ छिपा हुआ है।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "jasper",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "오래된 기록엔… 이 유적이 '울부짖는 자'의 성역이었다고 했지.",
						"english": "Ancient records... said this ruin was the sanctuary of the 'Wailer.'",
						"japanese": "古い記録には…この遺跡が「叫びし者」の聖域だったとあったな。",
						"chinese": "古老的记载说……这遗迹曾是“哀嚎者”的圣所。",
						"french": "Les anciens écrits... disaient que cette ruine était le sanctuaire du « Pleureur ».",
						"spanish": "Los registros antiguos... decían que esta ruina era el santuario del 'Llorón'.",
						"vietnamese": "Ghi chép cổ xưa... nói rằng di tích này là thánh địa của 'Kẻ Rên Rỉ'.",
						"thai": "บันทึกโบราณ...กล่าวว่าซากปรักหักพังนี้เป็นสถานที่ศักดิ์สิทธิ์ของ 'ผู้ร่ำไห้'",
						"hindi": "पुराने अभिलेखों में... कहा गया था कि यह खंडहर 'विलाप करने वाले' का पवित्र स्थान था।"
					}
				},
				{
					"content": {
						"korean": "물이 없는 오아시스를 지키는 자들의 이야기. 믿기지 않지만.",
						"english": "The tale of those who guard a waterless oasis. Hard to believe, though.",
						"japanese": "水なきオアシスを守る者たちの物語。信じられないが。",
						"chinese": "守护无水绿洲者的故事。虽然难以置信。",
						"french": "L'histoire de ceux qui gardent une oasis sans eau. Difficile à croire, pourtant.",
						"spanish": "La historia de quienes custodian un oasis sin agua. Aunque es difícil de creer.",
						"vietnamese": "Câu chuyện về những người bảo vệ ốc đảo không nước. Thật khó tin.",
						"thai": "เรื่องเล่าของผู้ที่เฝ้าโอเอซิสที่ไร้น้ำ ยากที่จะเชื่อได้",
						"hindi": "जलविहीन नखलिस्तान की रक्षा करने वालों की कहानी। हालांकि, यह अविश्वसनीय है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "jasper"
				},
				{
					"content": {
						"korean": "물이 없는 오아시스?",
						"english": "A waterless oasis?",
						"japanese": "水なきオアシスだと？",
						"chinese": "无水绿洲？",
						"french": "Une oasis sans eau ?",
						"spanish": "¿Un oasis sin agua?",
						"vietnamese": "Ốc đảo không nước?",
						"thai": "โอเอซิสที่ไร้น้ำเหรอ?",
						"hindi": "एक जलविहीन नखलिस्तान?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "벽화 속의 그림자들이 일렁이더니, 모래로 된 형체가 나타났다.",
						"english": "The shadows in the murals flickered, and a sand-formed figure appeared.",
						"japanese": "壁画の中の影が揺らめくと、砂でできた姿が現れた。",
						"chinese": "壁画中的影子晃动了一下，沙子形成的形体出现了。",
						"french": "Les ombres des peintures murales vacillèrent, et une forme faite de sable apparut.",
						"spanish": "Las sombras de los murales parpadearon, y una figura hecha de arena apareció.",
						"vietnamese": "Những bóng đổ trên bích họa lay động, rồi một hình thù bằng cát hiện ra.",
						"thai": "เงาในภาพจิตรกรรมฝาผนังไหววูบ แล้วร่างที่ทำจากทรายก็ปรากฏขึ้น",
						"hindi": "भित्तिचित्रों में परछाइयां हिलने लगीं, और रेत से बनी एक आकृति प्रकट हुई।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "침입자들… 사라져라.",
						"english": "Intruders... vanish.",
						"japanese": "侵入者たち…消えろ。",
						"chinese": "入侵者……消失吧。",
						"french": "Intrus... disparaissez.",
						"spanish": "Invasores... desaparezcan.",
						"vietnamese": "Những kẻ xâm nhập... biến đi.",
						"thai": "ผู้บุกรุก...จงหายไป",
						"hindi": "घुसपैठियों... गायब हो जाओ।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "적이다!",
						"english": "Enemy!",
						"japanese": "「敵だ！」",
						"chinese": "敌人！",
						"french": "Ennemi !",
						"spanish": "¡Enemigo!",
						"vietnamese": "Kẻ địch!",
						"thai": "ศัตรู!",
						"hindi": "दुश्मन!"
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "jasper",
					"duration_ms": 500
				},
				{
					"speaker": "jasper",
					"type": "speech",
					"content": {
						"korean": "또 물이야. 이젠 환영조차 피곤해.",
						"english": "Water again. Even illusions are tiring now.",
						"japanese": "「また水だ。幻覚すらもう疲れる。」",
						"chinese": "又是水。连幻觉都让人疲惫了。",
						"french": "Encore de l'eau. Même les illusions sont épuisantes maintenant.",
						"spanish": "Agua otra vez. Incluso las ilusiones son agotadoras ahora.",
						"vietnamese": "Lại là nước. Ngay cả ảo ảnh cũng khiến ta mệt mỏi rồi.",
						"thai": "น้ำอีกแล้ว แม้แต่ภาพลวงตาก็ยังเหนื่อยเลยตอนนี้",
						"hindi": "फिर से पानी। अब तो भ्रम भी थका रहे हैं।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아니, 이건… 진짜 같아 보이는데?",
						"english": "No, wait... this looks real?",
						"japanese": "「いや、これは…本物に見える？」",
						"chinese": "不，等等……这看起来是真的？",
						"french": "Non, attends... ça a l'air réel ?",
						"spanish": "No, espera... ¿esto parece real?",
						"vietnamese": "Không, chờ đã... cái này trông có vẻ thật?",
						"thai": "ไม่สิ นี่มัน...ดูเหมือนของจริงเลยนะ?",
						"hindi": "नहीं, रुको... यह असली लग रहा है?"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "손을 뻗자, 차갑게 느껴졌던 물이 모래가 되어 흩어졌다.",
						"english": "As I reached out, the water, which had felt cold, turned into sand and scattered.",
						"japanese": "「手を伸ばすと、冷たく感じた水が砂となって散っていった。」",
						"chinese": "当我伸出手时，那感觉冰冷的水变成了沙子，然后消散了。",
						"french": "Quand j'ai tendu la main, l'eau, qui avait semblé froide, s'est transformée en sable et s'est dispersée.",
						"spanish": "Al extender la mano, el agua, que se había sentido fría, se convirtió en arena y se dispersó.",
						"vietnamese": "Khi tôi vươn tay ra, dòng nước lạnh lẽo bỗng hóa thành cát và tan biến.",
						"thai": "เมื่อฉันเอื้อมมือออกไป น้ำที่เคยรู้สึกเย็นกลับกลายเป็นทรายและสลายไป",
						"hindi": "जैसे ही मैंने हाथ बढ़ाया, जो पानी ठंडा महसूस हुआ था, वह रेत में बदल गया और बिखर गया।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "대체 왜 이러는 거야?!",
						"english": "What in the world is going on?!",
						"japanese": "「一体どうなってるんだ？！」",
						"chinese": "这到底是怎么回事？！",
						"french": "Mais qu'est-ce qui se passe ?!",
						"spanish": "¡¿Pero qué demonios está pasando?!",
						"vietnamese": "Chuyện quái gì đang xảy ra vậy?!",
						"thai": "นี่มันเกิดอะไรขึ้นเนี่ย?!",
						"hindi": "आखिर यह सब क्या हो रहा है?!"
					}
				},
				{
					"speaker": "jasper",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 유적은 고대 맹세에 묶여 있다고 했어.",
						"english": "They said these ruins are bound by an ancient oath.",
						"japanese": "「この遺跡は古代の誓いに縛られていると言っていた。」",
						"chinese": "他们说这些遗迹被古老的誓言束缚着。",
						"french": "Ils ont dit que ces ruines sont liées par un serment ancien.",
						"spanish": "Dijeron que estas ruinas están atadas por un juramento antiguo.",
						"vietnamese": "Họ nói rằng những tàn tích này bị ràng buộc bởi một lời thề cổ xưa.",
						"thai": "พวกเขาบอกว่าซากปรักหักพังเหล่านี้ถูกผูกมัดด้วยคำสาบานโบราณ",
						"hindi": "उन्होंने कहा था कि ये खंडहर एक प्राचीन शपथ से बंधे हैं।"
					}
				},
				{
					"speaker": "jasper",
					"type": "speech",
					"content": {
						"korean": "'한 방울의 슬픔'이 영원히 지켜지는 곳. 그게 오아시스의 진실일지도.",
						"english": "A place where 'a single drop of sorrow' is eternally preserved. That might be the oasis's truth.",
						"japanese": "「『一滴の悲しみ』が永遠に守られる場所。それがオアシスの真実なのかも。」",
						"chinese": "一个永恒守护着'一滴悲伤'的地方。那也许就是绿洲的真相。",
						"french": "Un lieu où 'une seule goutte de tristesse' est éternellement préservée. C'est peut-être ça la vérité de l'oasis.",
						"spanish": "Un lugar donde 'una sola gota de tristeza' se conserva eternamente. Esa podría ser la verdad del oasis.",
						"vietnamese": "Nơi 'một giọt buồn' được bảo tồn vĩnh viễn. Đó có thể là sự thật về ốc đảo.",
						"thai": "สถานที่ที่ 'น้ำตาเพียงหยดเดียว' ถูกเก็บรักษาไว้ชั่วนิรันดร์ นั่นอาจเป็นความจริงของโอเอซิส",
						"hindi": "एक ऐसी जगह जहाँ 'दुख की एक बूँद' शाश्वत रूप से संरक्षित है। शायद यही नखलिस्तान का सच है।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "더 이상… 다가서지 마라.",
						"english": "Don't... come any closer.",
						"japanese": "「これ以上…近づくな。」",
						"chinese": "别再……靠近了。",
						"french": "Ne... t'approche plus.",
						"spanish": "No... te acerques más.",
						"vietnamese": "Đừng... đến gần hơn nữa.",
						"thai": "อย่า... เข้ามาใกล้กว่านี้",
						"hindi": "और नहीं... करीब मत आओ।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "또 녀석들이야!",
						"english": "Them again!",
						"japanese": "「また奴らだ！」",
						"chinese": "又是他们！",
						"french": "Encore eux !",
						"spanish": "¡Ellos otra vez!",
						"vietnamese": "Lại là bọn chúng!",
						"thai": "พวกมันอีกแล้ว!",
						"hindi": "फिर से वे!"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "jasper"
				},
				{
					"content": {
						"korean": "더 이상은… 안 되겠어. 여긴 너무 위험해.",
						"english": "I can't... go on. It's too dangerous here.",
						"japanese": "「これ以上は…無理だ。ここは危険すぎる。」",
						"chinese": "我不能再……继续了。这里太危险了。",
						"french": "Je ne peux plus... continuer. C'est trop dangereux ici.",
						"spanish": "No puedo más... seguir. Es demasiado peligroso aquí.",
						"vietnamese": "Không thể tiếp tục nữa... ở đây quá nguy hiểm.",
						"thai": "ไม่ไหวแล้ว... ที่นี่อันตรายเกินไป",
						"hindi": "और नहीं... यह नहीं हो पाएगा। यहाँ बहुत खतरनाक है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "jasper"
				},
				{
					"content": {
						"korean": "이제 와서 멈출 순 없어.",
						"english": "There's no stopping now.",
						"japanese": "今更止まれない。",
						"chinese": "事已至此，无法回头。",
						"french": "Impossible de s'arrêter maintenant.",
						"spanish": "Ya no podemos detenernos.",
						"vietnamese": "Không thể dừng lại bây giờ.",
						"thai": "ตอนนี้หยุดไม่ได้แล้ว",
						"hindi": "अब रुक नहीं सकते।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "사방에서 모래로 된 환영들이 튀어나와 길을 막아섰다.",
						"english": "Sand phantoms surged from all sides, blocking the path.",
						"japanese": "四方から砂の幻影が現れ、道を塞いだ。",
						"chinese": "沙子幻影从四面八方涌出，挡住了去路。",
						"french": "Des illusions de sable ont jailli de toutes parts, bloquant le chemin.",
						"spanish": "Espejismos de arena surgieron por todas partes, bloqueando el camino.",
						"vietnamese": "Những ảo ảnh cát từ mọi phía ùa ra, chặn đường.",
						"thai": "ภาพลวงตาที่ทำจากทรายผุดขึ้นมาขวางทางจากทุกทิศทาง",
						"hindi": "हर तरफ से रेत के भ्रम निकलकर रास्ता रोक रहे थे।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "jasper",
					"emotion": "base",
					"content": {
						"korean": "저것들은 단순한 환영이 아니야. 의지를 가지고 있어.",
						"english": "Those aren't mere illusions. They have a will.",
						"japanese": "あれらは単なる幻影じゃない。意志を持っている。",
						"chinese": "那些不是单纯的幻影。它们有自己的意志。",
						"french": "Ce ne sont pas de simples illusions. Elles ont une volonté.",
						"spanish": "No son meros espejismos. Tienen voluntad propia.",
						"vietnamese": "Chúng không chỉ là ảo ảnh. Chúng có ý chí.",
						"thai": "พวกนั้นไม่ใช่แค่ภาพลวงตา พวกมันมีความตั้งใจ",
						"hindi": "वे सिर्फ़ भ्रम नहीं हैं। उनकी अपनी मर्ज़ी है।"
					}
				},
				{
					"content": {
						"korean": "우리가 여기까지 온 걸 막으려는 건가.",
						"english": "Are they trying to stop us from coming this far?",
						"japanese": "ここまで来た俺たちを止めようとしているのか。",
						"chinese": "它们是想阻止我们走到这里吗？",
						"french": "Est-ce qu'ils essaient de nous empêcher d'aller plus loin ?",
						"spanish": "¿Están intentando impedir que lleguemos hasta aquí?",
						"vietnamese": "Chúng muốn ngăn chúng ta đến đây sao?",
						"thai": "พวกมันต้องการจะหยุดเราที่มาได้ไกลขนาดนี้ใช่ไหม",
						"hindi": "क्या वे हमें इतनी दूर आने से रोकना चाहते हैं?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "진실은… 너희를 삼킬 것이다.",
						"english": "The truth... will swallow you whole.",
						"japanese": "真実が… お前たちを飲み込むだろう。",
						"chinese": "真相… 会吞噬你们。",
						"french": "La vérité... vous engloutira.",
						"spanish": "La verdad... os devorará.",
						"vietnamese": "Sự thật… sẽ nuốt chửng các ngươi.",
						"thai": "ความจริง...จะกลืนกินพวกเจ้า",
						"hindi": "सच... तुम्हें निगल जाएगा।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "비켜!",
						"english": "Get out of the way!",
						"japanese": "どけ！",
						"chinese": "让开！",
						"french": "Poussez-vous !",
						"spanish": "¡Quítate!",
						"vietnamese": "Tránh ra!",
						"thai": "หลีกไป!",
						"hindi": "हट जाओ!"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "모래 폭풍이 모든 것을 집어삼켰다.",
						"english": "The sandstorm swallowed everything.",
						"japanese": "砂嵐がすべてを飲み込んだ。",
						"chinese": "沙尘暴吞噬了一切。",
						"french": "La tempête de sable a tout englouti.",
						"spanish": "La tormenta de arena lo devoró todo.",
						"vietnamese": "Bão cát nuốt chửng mọi thứ.",
						"thai": "พายุทรายกลืนกินทุกสิ่ง",
						"hindi": "रेत के तूफान ने सब कुछ निगल लिया।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "어리석은 자들. 진실은 너희를 받아들이지 않는다.",
						"english": "Fools. The truth rejects you.",
						"japanese": "愚か者め。真実は貴様らを認めない。",
						"chinese": "愚蠢的家伙们。真相不会接纳你们。",
						"french": "Idiots. La vérité vous rejette.",
						"spanish": "Necios. La verdad os rechaza.",
						"vietnamese": "Lũ ngu. Sự thật không chấp nhận các ngươi.",
						"thai": "พวกโง่เขลา ความจริงไม่ต้อนรับเจ้าหรอก",
						"hindi": "मूर्खों। सत्य तुम्हें स्वीकार नहीं करता।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아직… 끝나지 않았어.",
						"english": "It's… not over yet.",
						"japanese": "まだ…終わっていない。",
						"chinese": "还没…结束。",
						"french": "Ce n'est… pas encore fini.",
						"spanish": "Aún… no ha terminado.",
						"vietnamese": "Vẫn… chưa kết thúc đâu.",
						"thai": "ยัง… ไม่จบหรอก",
						"hindi": "अभी… खत्म नहीं हुआ है।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "jasper",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "jasper",
					"emotion": "base",
					"content": {
						"korean": "포기하지 마. 다시 기회가 올 거야.",
						"english": "Don't give up. You'll get another chance.",
						"japanese": "諦めないで。またチャンスは来るよ。",
						"chinese": "别放弃，你会有机会的。",
						"french": "N'abandonne pas. Tu auras une autre chance.",
						"spanish": "No te rindas. Tendrás otra oportunidad.",
						"vietnamese": "Đừng bỏ cuộc. Cơ hội khác sẽ đến thôi.",
						"thai": "อย่ายอมแพ้ เดี๋ยวโอกาสก็มาใหม่",
						"hindi": "हार मत मानो। तुम्हें फिर मौका मिलेगा।"
					}
				},
				{
					"speaker": "jasper",
					"type": "direction",
					"duration_ms": 500,
					"direction": "down",
					"action": "exit"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "하찮은 발버둥.",
						"english": "Futile struggle.",
						"japanese": "無駄なあがき。",
						"chinese": "徒劳挣扎。",
						"french": "Lutte futile.",
						"spanish": "Lucha inútil.",
						"vietnamese": "Vùng vẫy vô ích.",
						"thai": "ดิ้นรนไร้ค่า",
						"hindi": "व्यर्थ का प्रयास।"
					},
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "모래 폭풍이 걷히자, 거대한 그림자가 사라졌다.",
						"english": "As the sandstorm cleared, the colossal shadow vanished.",
						"japanese": "砂嵐が晴れると、巨大な影は消え去った。",
						"chinese": "沙尘暴消散后，巨大的阴影消失了。",
						"french": "Alors que la tempête de sable se calmait, l'ombre colossale disparut.",
						"spanish": "Cuando la tormenta de arena amainó, la sombra colosal desapareció.",
						"vietnamese": "Khi bão cát tan đi, cái bóng khổng lồ biến mất.",
						"thai": "เมื่อพายุทรายสงบลง เงาขนาดมหึมาก็หายไป",
						"hindi": "जैसे ही रेत का तूफान थमा, विशाल छाया गायब हो गई।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "겨우… 이 정도로… 막을 수 있을 거라 생각하나?",
						"english": "Do you truly think... this meager effort... can stop me?",
						"japanese": "たかが…この程度で…止められるとでも？",
						"chinese": "仅仅…凭这点程度…就能阻止我吗？",
						"french": "Penses-tu… vraiment… que si peu puisse m'arrêter ?",
						"spanish": "¿De verdad… crees… que con esto me detendrás?",
						"vietnamese": "Ngươi nghĩ… chỉ ngần này… có thể ngăn cản ta sao?",
						"thai": "เจ้าคิดว่า… แค่นี้… จะหยุดข้าได้หรือ?",
						"hindi": "क्या तुम सच में सोचते हो… कि इतनी सी कोशिश… मुझे रोक सकती है?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "진짜 오아시스는… 다른 곳에 있다. 그곳은… 울부짖고 있지.",
						"english": "The true oasis… lies elsewhere. It… is howling.",
						"japanese": "真のオアシスは…別の場所にある。そこは…咆哮している。",
						"chinese": "真正的绿洲…在别处。那里…正在咆哮。",
						"french": "La véritable oasis… est ailleurs. Elle… hurle.",
						"spanish": "El verdadero oasis… está en otro lugar. Allí… ruge.",
						"vietnamese": "Ốc đảo thật sự… nằm ở nơi khác. Nơi đó… đang gào thét.",
						"thai": "โอเอซิสที่แท้จริง… อยู่ที่อื่น ที่นั่น… กำลังคำราม",
						"hindi": "असली नखलिस्तान… कहीं और है। वह… दहाड़ रहा है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "울부짖는다고?",
						"english": "Howling?",
						"japanese": "咆哮している、と？",
						"chinese": "咆哮？",
						"french": "Hurle ?",
						"spanish": "¿Ruge?",
						"vietnamese": "Gào thét ư?",
						"thai": "คำรามงั้นหรือ?",
						"hindi": "दहाड़ रहा है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "jasper",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "…저 자의 말대로라면… 진짜 오아시스는 아직 찾지 못했단 뜻인가.",
						"english": "...If what he says is true... then we haven't found the real oasis yet.",
						"japanese": "…あの者の言う通りなら…真のオアシスはまだ見つけていないということか。",
						"chinese": "……如果他说的是真的……那我们还没找到真正的绿洲。",
						"french": "...Si ses paroles sont vraies... alors nous n'avons pas encore trouvé la véritable oasis.",
						"spanish": "...Si lo que dice es cierto... entonces aún no hemos encontrado el verdadero oasis.",
						"vietnamese": "...Nếu lời hắn ta nói là thật... vậy là chúng ta vẫn chưa tìm thấy ốc đảo thật sự.",
						"thai": "...ถ้าคำพูดของเขานั่นเป็นจริง... งั้นเราก็ยังหาโอเอซิสที่แท้จริงไม่พบ",
						"hindi": "…अगर उसकी बात सच है… तो इसका मतलब है कि हमने अभी तक असली नखलिस्तान नहीं ढूंढा है।"
					},
					"emotion": "base",
					"speaker": "jasper",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "하지만 단서가 생겼다. 그들은 다시 메마른 사막을 헤쳐나가야 했다.",
						"english": "But a clue emerged. They had to brave the arid desert once more.",
						"japanese": "だが、手がかりはできた。彼らは再び、乾いた砂漠を進まなければならなかった。",
						"chinese": "但线索出现了。他们必须再次穿越这片干旱的沙漠。",
						"french": "Mais un indice était apparu. Ils durent affronter de nouveau le désert aride.",
						"spanish": "Pero surgió una pista. Tuvieron que atravesar el árido desierto una vez más.",
						"vietnamese": "Nhưng một manh mối đã xuất hiện. Họ lại phải vượt qua sa mạc khô cằn một lần nữa.",
						"thai": "แต่ก็มีเบาะแสเกิดขึ้น พวกเขาต้องฝ่าฟันทะเลทรายอันแห้งแล้งอีกครั้ง",
						"hindi": "लेकिन एक सुराग मिल गया। उन्हें एक बार फिर सूखे रेगिस्तान से होकर गुजरना पड़ा।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "다시 시작이야.",
						"english": "It begins anew.",
						"japanese": "また振り出しだ。",
						"chinese": "又要重新开始了。",
						"french": "C'est un nouveau départ.",
						"spanish": "Empezamos de nuevo.",
						"vietnamese": "Lại bắt đầu thôi.",
						"thai": "เริ่มต้นใหม่อีกครั้ง",
						"hindi": "यह फिर से शुरू हो रहा है।"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "유적의 가장 깊은 곳. 거대한 모래 폭풍이 회오리쳤다.",
						"english": "The deepest part of the ruins. A colossal sandstorm raged.",
						"japanese": "遺跡の最深部。巨大な砂嵐が渦巻いていた。",
						"chinese": "遗迹最深处。一场巨大的沙尘暴在狂舞。",
						"french": "La partie la plus profonde des ruines. Une tempête de sable colossale faisait rage.",
						"spanish": "La parte más profunda de las ruinas. Una tormenta de arena colosal se arremolinaba.",
						"vietnamese": "Nơi sâu nhất của phế tích. Một cơn bão cát khổng lồ đang hoành hành.",
						"thai": "ส่วนที่ลึกที่สุดของซากปรักหักพัง พายุทรายขนาดมหึมาโหมกระหน่ำ",
						"hindi": "खंडहर का सबसे गहरा हिस्सा। एक विशाल रेत का तूफान उठ रहा था।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "여기까지 온 것을… 후회하게 될 것이다.",
						"english": "You will regret... having come this far.",
						"japanese": "ここまで来たことを… 後悔するだろう。",
						"chinese": "你一定会… 后悔来到这里。",
						"french": "Vous regretterez... d'être venus jusqu'ici.",
						"spanish": "Lamentaréis... haber llegado hasta aquí.",
						"vietnamese": "Ngươi sẽ phải hối hận… vì đã đến đây.",
						"thai": "เจ้าจะต้องเสียใจ...ที่มาถึงที่นี่",
						"hindi": "तुम्हें यहाँ तक आने का... अफ़सोस होगा।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "넌 대체 뭐야! 이 환영들을 만든 게 너냐?",
						"english": "What exactly are you?! Did you create these illusions?",
						"japanese": "一体お前は何者だ！ この幻影を作り出したのはお前か？",
						"chinese": "你到底是什么？！这些幻影是你制造的吗？",
						"french": "Mais qu'est-ce que tu es ?! C'est toi qui as créé ces illusions ?",
						"spanish": "¡¿Qué eres tú?! ¿Fuiste tú quien creó estos espejismos?",
						"vietnamese": "Ngươi rốt cuộc là ai?! Ngươi đã tạo ra những ảo ảnh này sao?",
						"thai": "แกเป็นใครกันแน่! แกเป็นคนสร้างภาพลวงตาพวกนี้ใช่ไหม",
						"hindi": "तुम आख़िर हो क्या?! क्या तुमने ये भ्रम बनाए हैं?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "사라져라. 진실에 닿기 전에.",
						"english": "Vanish. Before you touch the truth.",
						"japanese": "消えろ。真実に触れる前に。",
						"chinese": "消失吧。在触及真相之前。",
						"french": "Disparaissez. Avant de toucher à la vérité.",
						"spanish": "Desapareced. Antes de que alcancéis la verdad.",
						"vietnamese": "Biến mất đi. Trước khi chạm đến sự thật.",
						"thai": "จงหายไปซะ ก่อนที่จะได้สัมผัสความจริง",
						"hindi": "गायब हो जाओ। सच तक पहुंचने से पहले।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"메마른 유적. 빛바랜 돌 틈으로 모래가 스며든다.",
			"'울부짖는 오아시스'를 향한 발걸음은 멈출 수 없었다.",
			"그러나 그곳엔— 물을 믿지 않는 자와, 사라지는 환영만이 존재했다.",
			"이 모든 것이, 거대한 속임수였다면?"
		],
		"english": [
			"Arid ruins. Sand seeps through faded stone cracks.",
			"My steps towards the 'Crying Oasis' could not be stopped.",
			"But there— only those who don't believe in water, and vanishing illusions existed.",
			"What if all of this was a grand deception?"
		],
		"japanese": [
			"乾いた遺跡。色褪せた石の隙間から砂が染み込む。",
			"「慟哭のオアシス」へ向かう足取りは止められなかった。",
			"しかしそこには— 水を信じぬ者と、消えゆく幻影だけが存在した。",
			"もしこの全てが、巨大な欺瞞だったとしたら？"
		],
		"chinese": [
			"干涸的遗迹。沙子从褪色的石缝中渗入。",
			"迈向“哭泣绿洲”的脚步无法停止。",
			"然而那里—只有不信水之人，以及消散的幻影存在。",
			"如果这一切，都是一场巨大的骗局呢？"
		],
		"french": [
			"Ruines arides. Le sable s'infiltre à travers les fissures de pierres pâlies.",
			"Mes pas vers l'«Oasis Pleurante» ne pouvaient être arrêtés.",
			"Mais là— seuls ceux qui ne croient pas en l'eau, et des illusions évanouissantes existaient.",
			"Et si tout cela n'était qu'une immense supercherie ?"
		],
		"spanish": [
			"Ruinas áridas. La arena se filtra por las grietas de piedras descoloridas.",
			"Mis pasos hacia el 'Oasis que Llora' no podían detenerse.",
			"Pero allí— solo existían aquellos que no creen en el agua, y visiones desvanecientes.",
			"¿Y si todo esto fuera un gran engaño?"
		],
		"vietnamese": [
			"Di tích khô cằn. Cát lọt qua kẽ đá phai màu.",
			"Bước chân hướng về 'Ốc đảo Rên rỉ' không thể dừng lại.",
			"Nhưng ở đó— chỉ có kẻ không tin vào nước và những ảo ảnh tan biến.",
			"Nếu tất cả điều này, chỉ là một trò lừa bịp lớn?"
		],
		"thai": [
			"ซากปรักหักพังแห้งแล้ง ทรายแทรกซึมผ่านรอยแตกของหินที่ซีดจาง",
			"ก้าวเท้าสู่ 'โอเอซิสร้องไห้' ไม่อาจหยุดได้",
			"แต่ที่นั่น— มีเพียงผู้ไม่เชื่อในน้ำ และภาพลวงตาที่จางหายไป",
			"จะเกิดอะไรขึ้นถ้าทั้งหมดนี้เป็นกลลวงครั้งใหญ่?"
		],
		"hindi": [
			"सूखे खंडहर। रेत फीके पत्थरों की दरारों से रिसती है।",
			"'विलाप करते नखलिस्तान' की ओर मेरे कदम रुक नहीं सके।",
			"लेकिन वहाँ— केवल वे थे जो पानी पर विश्वास नहीं करते, और गायब होते भ्रम।",
			"अगर यह सब, एक बड़ा धोखा था तो?"
		]
	}
} as const;
