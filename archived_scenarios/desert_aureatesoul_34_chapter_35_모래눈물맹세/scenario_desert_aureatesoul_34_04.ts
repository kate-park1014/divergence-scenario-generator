export const scenario_desert_aureatesoul_34_04 = {
	"scenario_id": "desert_aureatesoul_34_04",
	"order": 4,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"dune": {
			"id": "mon_fc976b75-f009-4bf2-b660-a3053c95d668",
			"name": {
				"korean": "듄",
				"english": "Dune",
				"japanese": "デューン",
				"chinese": "沙丘",
				"french": "Dune",
				"spanish": "Dune",
				"vietnamese": "Dune",
				"thai": "ดูน",
				"hindi": "ड्यून"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/7568ec11-0329-44b4-740a-71b25ef62400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/ba7095b5-0d99-40bd-1155-b57701c00f00/public"
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
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "모래폭풍이 잠시 걷히자, 낡은 오아시스가 모습을 드러냈다.",
						"english": "As the sandstorm briefly cleared, an old oasis revealed itself.",
						"japanese": "砂嵐が一時的に晴れると、古びたオアシスが現れた。",
						"chinese": "沙暴暂时平息，一座古老的绿洲显露出来。",
						"french": "Alors que la tempête de sable s'estompa un instant, une vieille oasis se révéla.",
						"spanish": "Cuando la tormenta de arena se disipó brevemente, un viejo oasis se reveló.",
						"vietnamese": "Khi bão cát tạm lắng, một ốc đảo cổ kính đã lộ diện.",
						"thai": "เมื่อพายุทรายสงบลงชั่วขณะ โอเอซิสเก่าแก่ก็ปรากฏตัวขึ้น",
						"hindi": "जब रेत का तूफान कुछ देर के लिए थम गया, तो एक पुराना नखलिस्तान सामने आया।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "시간이… 정말 얼마 안 남았어.",
						"english": "Time is... truly running out.",
						"japanese": "時間が… 本当に残り少ないわ。",
						"chinese": "时间… 真的所剩无几了。",
						"french": "Le temps... est vraiment compté.",
						"spanish": "El tiempo... realmente se está agotando.",
						"vietnamese": "Thời gian... thực sự không còn nhiều.",
						"thai": "เวลา... เหลืออีกไม่มากแล้วจริงๆ",
						"hindi": "समय... सच में बहुत कम बचा है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"speaker": "dune",
					"action": "enter"
				},
				{
					"speaker": "dune",
					"content": {
						"korean": "쉿. 서두르지 마. 서두를수록 덫에 걸리지.",
						"english": "Shh. Don't rush. The more you rush, the more you fall into traps.",
						"japanese": "シッ。急ぐな。急ぐほど罠にはまるぞ。",
						"chinese": "嘘。别急。越急越容易中陷阱。",
						"french": "Chut. Ne te précipite pas. Plus tu te précipites, plus tu tombes dans les pièges.",
						"spanish": "Shh. No te apresures. Cuanto más te apresures, más caerás en trampas.",
						"vietnamese": "Suỵt. Đừng vội vàng. Càng vội, càng dễ mắc bẫy.",
						"thai": "ชู่ว อย่ารีบร้อน ยิ่งรีบ ยิ่งติดกับดัก",
						"hindi": "श्श। जल्दी मत करो। जितनी जल्दी करोगे, उतने ही जाल में फँसोगे।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "당신은 누구죠?",
						"english": "Who are you?",
						"japanese": "あなたは誰？",
						"chinese": "你是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Anh là ai?",
						"thai": "ท่านคือใคร?",
						"hindi": "तुम कौन हो?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "사막의 이야기꾼 듄. 길 잃은 이들에게 진실을 속삭이지.",
						"english": "Dune, the storyteller of the desert. I whisper truths to the lost.",
						"japanese": "砂漠の語り部、デューン。道に迷える者たちに真実を囁く。",
						"chinese": "沙漠的讲述者，迪恩。向迷失者低语真相。",
						"french": "Dune, le conteur du désert. Je murmure des vérités aux égarés.",
						"spanish": "Dune, el cuentacuentos del desierto. Susurro verdades a los perdidos.",
						"vietnamese": "Dune, người kể chuyện của sa mạc. Tôi thì thầm sự thật cho những kẻ lạc lối.",
						"thai": "ดูน นักเล่าเรื่องแห่งทะเลทราย ฉันกระซิบความจริงแก่ผู้หลงทาง",
						"hindi": "रेगिस्तान का कहानीकार, ड्यून। मैं भटके हुए लोगों को सच बताता हूँ।"
					},
					"speaker": "dune"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "dune",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "모래시계의 저주는 단순한 시간이 아니야.",
						"english": "The hourglass's curse isn't merely about time.",
						"japanese": "砂時計の呪いは、単なる時間ではない。",
						"chinese": "沙漏的诅咒并非单纯的时间。",
						"french": "La malédiction du sablier n'est pas qu'une question de temps.",
						"spanish": "La maldición del reloj de arena no es solo tiempo.",
						"vietnamese": "Lời nguyền của đồng hồ cát không chỉ đơn thuần là thời gian.",
						"thai": "คำสาปของนาฬิกาทรายไม่ใช่แค่เรื่องของเวลา",
						"hindi": "रेतघड़ी का श्राप केवल समय के बारे में नहीं है।"
					},
					"speaker": "dune"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그럼 뭐죠?",
						"english": "Then what is it?",
						"japanese": "では、何なのですか？",
						"chinese": "那是什么？",
						"french": "Alors, qu'est-ce que c'est ?",
						"spanish": "¿Entonces qué es?",
						"vietnamese": "Vậy thì nó là gì?",
						"thai": "แล้วมันคืออะไรล่ะ?",
						"hindi": "तो यह क्या है?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "어떤 존재의… 고통과 연결되어 있지.",
						"english": "It's connected to... the suffering of some being.",
						"japanese": "ある存在の…苦痛と繋がっているんだ。",
						"chinese": "它与某个存在…的痛苦相连。",
						"french": "C'est lié... à la souffrance d'un être.",
						"spanish": "Está conectado... al sufrimiento de algún ser.",
						"vietnamese": "Nó được kết nối với... nỗi đau của một sinh vật nào đó.",
						"thai": "มันเชื่อมโยงกับ... ความทุกข์ทรมานของบางสิ่ง",
						"hindi": "यह किसी प्राणी के... दुख से जुड़ा है।"
					},
					"speaker": "dune"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "고통이요?",
						"english": "Suffering?",
						"japanese": "苦痛ですか？",
						"chinese": "痛苦？",
						"french": "La souffrance ?",
						"spanish": "¿Sufrimiento?",
						"vietnamese": "Nỗi đau ư?",
						"thai": "ความทุกข์ทรมานเหรอ?",
						"hindi": "दुख?"
					},
					"speaker": "character_1"
				},
				{
					"content": {
						"korean": "사막을 파괴하는 존재는… 사실 지키려던 이의 맹세 때문이야. 오래된 전설이 있지.",
						"english": "The entity destroying the desert... is actually due to the vow of one who tried to protect it. There's an ancient legend.",
						"japanese": "砂漠を破壊する存在は…実は守ろうとした者の誓いのせいなんだ。古い伝説がある。",
						"chinese": "毁灭沙漠的存在…实际上是因为试图守护它的人的誓言。有一个古老的传说。",
						"french": "L'entité qui détruit le désert... est en fait due au vœu de celui qui a essayé de le protéger. Il y a une ancienne légende.",
						"spanish": "La entidad que destruye el desierto... es en realidad por el juramento de quien intentó protegerlo. Hay una antigua leyenda.",
						"vietnamese": "Thực thể đang hủy diệt sa mạc... thực ra là do lời thề của người muốn bảo vệ nó. Có một truyền thuyết cổ xưa.",
						"thai": "สิ่งที่ทำลายทะเลทราย... แท้จริงแล้วเกิดจากคำสาบานของผู้ที่พยายามปกป้องมัน มีตำนานเก่าแก่เล่าขานกันมา",
						"hindi": "रेगिस्तान को नष्ट करने वाली इकाई... दरअसल उसे बचाने वाले की प्रतिज्ञा के कारण है। एक प्राचीन किंवदंती है।"
					},
					"speaker": "dune",
					"type": "speech",
					"emotion": "base"
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
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "dune"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "아주 먼 옛날, 사막을 사랑한 이가 있었어.",
						"english": "Long, long ago, there was someone who loved the desert.",
						"japanese": "はるか昔、砂漠を愛した者がいた。",
						"chinese": "很久很久以前，有一个爱着沙漠的人。",
						"french": "Il y a très longtemps, quelqu'un aimait le désert.",
						"spanish": "Hace mucho, mucho tiempo, hubo alguien que amaba el desierto.",
						"vietnamese": "Ngày xửa ngày xưa, có một người yêu sa mạc.",
						"thai": "กาลครั้งหนึ่งนานมาแล้ว มีผู้หนึ่งที่รักทะเลทราย",
						"hindi": "बहुत पहले, कोई था जो रेगिस्तान से प्यार करता था।"
					},
					"speaker": "dune"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "그게… 누구인데요?",
						"english": "Who... was that?",
						"japanese": "それは…誰なのですか？",
						"chinese": "那是…谁？",
						"french": "Qui... était-ce ?",
						"spanish": "¿Quién... era?",
						"vietnamese": "Đó là... ai?",
						"thai": "นั่น... คือใคร?",
						"hindi": "वह... कौन था?"
					}
				},
				{
					"content": {
						"korean": "그는 사막을 지키기 위해 모든 것을 걸었지. 하지만…",
						"english": "He risked everything to protect the desert. But...",
						"japanese": "彼は砂漠を守るためにすべてを賭けた。だが…",
						"chinese": "他为了保护沙漠倾尽所有。但是…",
						"french": "Il a tout risqué pour protéger le désert. Mais...",
						"spanish": "Lo arriesgó todo para proteger el desierto. Pero...",
						"vietnamese": "Anh ấy đã liều mọi thứ để bảo vệ sa mạc. Nhưng...",
						"thai": "เขาเสี่ยงทุกอย่างเพื่อปกป้องทะเลทราย แต่...",
						"hindi": "उसने रेगिस्तान को बचाने के लिए सब कुछ दांव पर लगा दिया। लेकिन..."
					},
					"speaker": "dune",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그의 맹세는 비극이 되어 사막을 집어삼켰어.",
						"english": "His vow became a tragedy and consumed the desert.",
						"japanese": "彼の誓いは悲劇となり、砂漠を飲み込んだ。",
						"chinese": "他的誓言变成了悲剧，吞噬了沙漠。",
						"french": "Son vœu est devenu une tragédie et a consumé le désert.",
						"spanish": "Su juramento se convirtió en una tragedia y consumió el desierto.",
						"vietnamese": "Lời thề của anh ấy đã trở thành một bi kịch và nuốt chửng sa mạc.",
						"thai": "คำสาบานของเขากลายเป็นโศกนาฏกรรมและกลืนกินทะเลทราย",
						"hindi": "उसकी प्रतिज्ञा एक त्रासदी बन गई और रेगिस्तान को निगल गई।"
					},
					"speaker": "dune"
				},
				{
					"content": {
						"korean": "지키려다… 파괴했다고요?",
						"english": "Tried to protect it... but destroyed it?",
						"japanese": "守ろうとして…破壊したと？",
						"chinese": "试图保护…却摧毁了它？",
						"french": "A essayé de le protéger... mais l'a détruit ?",
						"spanish": "¿Intentó protegerlo... pero lo destruyó?",
						"vietnamese": "Cố gắng bảo vệ... nhưng lại hủy diệt?",
						"thai": "พยายามปกป้อง... แต่กลับทำลายมันเหรอ?",
						"hindi": "बचाने की कोशिश की... लेकिन नष्ट कर दिया?"
					},
					"speaker": "character_2",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "dune",
					"content": {
						"korean": "그래. 가해자와 피해자는 때로 뒤바뀌는 법이지.",
						"english": "Indeed. Attacker and victim sometimes swap places.",
						"japanese": "そう。加害者と被害者は時として入れ替わるものだ。",
						"chinese": "是的。加害者和受害者有时会互换。",
						"french": "Oui. L'agresseur et la victime inversent parfois les rôles.",
						"spanish": "Sí. El agresor y la víctima a veces intercambian roles.",
						"vietnamese": "Phải. Kẻ gây hại và nạn nhân đôi khi hoán đổi vị trí cho nhau.",
						"thai": "ใช่แล้ว ผู้กระทำและเหยื่อบางครั้งก็สลับบทบาทกัน",
						"hindi": "हाँ। अपराधी और पीड़ित कभी-कभी भूमिकाएँ बदल लेते हैं।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "dune",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						2
					]
				},
				{
					"content": {
						"korean": "모래시계는… 그 비극적인 맹세의 증거야.",
						"english": "The hourglass... is proof of that tragic vow.",
						"japanese": "砂時計は…あの悲劇的な誓いの証拠だ。",
						"chinese": "沙漏……是那悲惨誓言的证据。",
						"french": "Le sablier... est la preuve de ce vœu tragique.",
						"spanish": "El reloj de arena... es la prueba de ese trágico juramento.",
						"vietnamese": "Đồng hồ cát... là bằng chứng của lời thề bi thảm đó.",
						"thai": "นาฬิกาทราย... คือหลักฐานของคำสาบานอันน่าเศร้าโศกนั้น",
						"hindi": "रेतघड़ी... उस दुखद प्रतिज्ञा का प्रमाण है।"
					},
					"speaker": "dune",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "그럼… 보스가?",
						"english": "Then... the boss?",
						"japanese": "じゃあ…ボスが？",
						"chinese": "那么……头目？",
						"french": "Alors... le boss ?",
						"spanish": "Entonces... ¿el jefe?",
						"vietnamese": "Vậy thì... Trùm sao?",
						"thai": "แล้ว... บอสล่ะ?",
						"hindi": "तो... बॉस?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "dune",
					"content": {
						"korean": "어쩌면 너희가 싸우는 대상은… 한때 사막의 수호자였을지도 몰라.",
						"english": "Perhaps the one you're fighting... was once a guardian of the desert.",
						"japanese": "もしかしたら、お前たちが戦っている相手は…かつて砂漠の守護者だったのかもしれない。",
						"chinese": "也许你们正在对抗的……曾经是沙漠的守护者。",
						"french": "Peut-être que celui que vous combattez... était autrefois un gardien du désert.",
						"spanish": "Quizás a quien luchan... fue una vez un guardián del desierto.",
						"vietnamese": "Có lẽ kẻ mà các ngươi đang chiến đấu... từng là người bảo vệ sa mạc.",
						"thai": "บางทีคนที่พวกเจ้ากำลังต่อสู้อยู่นั้น... อาจเคยเป็นผู้พิทักษ์ทะเลทรายมาก่อน",
						"hindi": "शायद जिससे तुम लड़ रहे हो... वह कभी रेगिस्तान का रखवाला रहा होगा।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "믿을 수 없어…",
						"english": "I can't believe it...",
						"japanese": "信じられない…",
						"chinese": "难以置信……",
						"french": "Je n'arrive pas à y croire...",
						"spanish": "No puedo creerlo...",
						"vietnamese": "Không thể tin được...",
						"thai": "ไม่อยากจะเชื่อเลย...",
						"hindi": "मुझे विश्वास नहीं हो रहा..."
					},
					"speaker": "character_3",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "dune",
					"content": {
						"korean": "시간이 없어. 진실은… 곧 모래와 함께 사라질 거야.",
						"english": "There's no time. The truth... will soon vanish with the sand.",
						"japanese": "時間がない。真実は…すぐに砂と共に消え去るだろう。",
						"chinese": "没时间了。真相……很快就会与沙子一起消失。",
						"french": "Il n'y a pas de temps. La vérité... disparaîtra bientôt avec le sable.",
						"spanish": "No hay tiempo. La verdad... pronto desaparecerá con la arena.",
						"vietnamese": "Không còn thời gian nữa. Sự thật... sẽ sớm biến mất cùng cát.",
						"thai": "ไม่มีเวลาแล้ว ความจริง... จะหายไปกับทรายในไม่ช้า",
						"hindi": "समय नहीं है। सच... जल्द ही रेत के साथ गायब हो जाएगा।"
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 모래시계가 섬광처럼 빛났다. 그 앞에, 정체 모를 그림자가 서 있었다.",
						"english": "A colossal hourglass glowed like a flash. Before it, an unknown shadow stood.",
						"japanese": "巨大な砂時計が閃光のように輝いた。その前には、正体不明の影が立っていた。",
						"chinese": "一个巨大的沙漏像闪光一样发光。在它面前，一个不明身份的影子站着。",
						"french": "Un sablier colossal brillait comme un éclair. Devant lui se tenait une ombre inconnue.",
						"spanish": "Un colosal reloj de arena brilló como un relámpago. Frente a él, una sombra desconocida se alzaba.",
						"vietnamese": "Một chiếc đồng hồ cát khổng lồ phát sáng như tia chớp. Trước nó, một bóng hình không rõ danh tính đang đứng.",
						"thai": "นาฬิกาทรายขนาดมหึมาเรืองแสงราวกับแสงวาบ เบื้องหน้ามีเงาปริศนายืนอยู่",
						"hindi": "एक विशाल रेतघड़ी एक चमक की तरह चमकी। उसके सामने, एक अज्ञात छाया खड़ी थी।"
					}
				},
				{
					"content": {
						"korean": "…결국 여기까지 왔구나.",
						"english": "...So you've finally come this far.",
						"japanese": "…結局ここまで来たか。",
						"chinese": "……你终于走到这里了。",
						"french": "...Vous êtes enfin arrivé jusqu'ici.",
						"spanish": "...Así que finalmente has llegado hasta aquí.",
						"vietnamese": "...Cuối cùng ngươi cũng đến được đây.",
						"thai": "...ในที่สุดเจ้าก็มาถึงที่นี่",
						"hindi": "...तो तुम आखिरकार यहाँ तक आ गए।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "당신이… 그 맹세의 존재입니까?",
						"english": "Are you... the being of that vow?",
						"japanese": "あなたが…あの誓いの存在ですか？",
						"chinese": "你就是……那个誓言的存在吗？",
						"french": "Êtes-vous... l'être de ce vœu ?",
						"spanish": "¿Eres tú... la entidad de ese juramento?",
						"vietnamese": "Ngươi... là thực thể của lời thề đó sao?",
						"thai": "ท่านคือ... ผู้มีตัวตนตามคำสาบานนั้นหรือ?",
						"hindi": "क्या आप... उस प्रतिज्ञा के प्राणी हैं?"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "맹세? 그래. 영원을 약속했지. 이 사막을 지키겠다고.",
						"english": "A vow? Yes. I promised eternity. To protect this desert.",
						"japanese": "誓い？そうだ。永遠を約束した。この砂漠を守ると。",
						"chinese": "誓言？是的。我承诺永恒。守护这片沙漠。",
						"french": "Un vœu ? Oui. J'ai promis l'éternité. De protéger ce désert.",
						"spanish": "¿Un juramento? Sí. Prometí la eternidad. Proteger este desierto.",
						"vietnamese": "Lời thề? Phải. Ta đã hứa vĩnh cửu. Để bảo vệ sa mạc này.",
						"thai": "คำสาบานหรือ? ใช่แล้ว ข้าให้คำมั่นว่าจะปกป้องทะเลทรายนี้ไปชั่วนิรันดร์",
						"hindi": "एक प्रतिज्ञा? हाँ। मैंने अनंत काल का वादा किया था। इस रेगिस्तान की रक्षा करने का।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "하지만 영원은… 고통으로 변했어. 너희가 알 필요 없는 진실이다.",
						"english": "But eternity... turned into pain. A truth you need not know.",
						"japanese": "しかし永遠は…苦痛に変わった。お前たちが知る必要のない真実だ。",
						"chinese": "但永恒…已化为痛苦。这是你们无需知晓的真相。",
						"french": "Mais l'éternité... est devenue douleur. Une vérité que vous n'avez pas besoin de connaître.",
						"spanish": "Pero la eternidad... se convirtió en dolor. Una verdad que no necesitan saber.",
						"vietnamese": "Nhưng vĩnh cửu… đã biến thành nỗi đau. Một sự thật các ngươi không cần biết.",
						"thai": "แต่ชั่วนิรันดร์… กลับกลายเป็นความเจ็บปวด ความจริงที่พวกเจ้าไม่จำเป็นต้องรู้",
						"hindi": "पर अनंत काल... पीड़ा में बदल गया। एक सच जो तुम्हें जानने की ज़रूरत नहीं।"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이제 멈춰! 이 사막을 더는 파괴하지 마!",
						"english": "Stop now! Do not destroy this desert any further!",
						"japanese": "もうやめろ！この砂漠をこれ以上破壊するな！",
						"chinese": "现在住手！别再破坏这片沙漠了！",
						"french": "Arrêtez maintenant ! Ne détruisez plus ce désert !",
						"spanish": "¡Deténganse ahora! ¡No destruyan más este desierto!",
						"vietnamese": "Dừng lại ngay! Đừng hủy hoại sa mạc này nữa!",
						"thai": "หยุดเดี๋ยวนี้! อย่าทำลายทะเลทรายนี้อีกต่อไป!",
						"hindi": "अब रुक जाओ! इस रेगिस्तान को और बर्बाद मत करो!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "파괴? 나는 지키는 중이다. 나에게 남은 유일한 맹세를…",
						"english": "Destruction? I am protecting. My only remaining vow...",
						"japanese": "破壊？私は守っている。私に残された唯一の誓いを…",
						"chinese": "破坏？我正在守护。我仅存的誓言…",
						"french": "Destruction ? Je protège. Mon seul serment restant...",
						"spanish": "¿Destrucción? Yo estoy protegiendo. Mi único juramento restante...",
						"vietnamese": "Hủy hoại? Ta đang bảo vệ. Lời thề duy nhất còn lại của ta…",
						"thai": "ทำลาย? ข้ากำลังปกป้อง คำสาบานเดียวที่ข้ายังเหลืออยู่…",
						"hindi": "विनाश? मैं रक्षा कर रहा हूँ। मेरी एकमात्र शेष प्रतिज्ञा को..."
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "비켜라. 그렇지 않으면… 너희도 이 고통에 동참할 것이다.",
						"english": "Stand aside. Otherwise... you too will share this pain.",
						"japanese": "退け。さもなくば…お前たちもこの苦痛に加わることになるだろう。",
						"chinese": "让开。否则…你们也将承受这份痛苦。",
						"french": "Écartez-vous. Sinon... vous partagerez aussi cette douleur.",
						"spanish": "Apártense. De lo contrario... ustedes también compartirán este dolor.",
						"vietnamese": "Tránh ra. Nếu không… các ngươi cũng sẽ cùng chịu nỗi đau này.",
						"thai": "หลีกไป ไม่อย่างนั้น… พวกเจ้าก็จะร่วมรับความเจ็บปวดนี้ด้วย",
						"hindi": "हट जाओ। वरना... तुम भी इस पीड़ा में शामिल हो जाओगे।"
					},
					"speaker": "random_boss"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "멍청한 것들… 감히 나의 고통을 멈추려 들다니.",
						"english": "Fools... How dare you try to end my suffering.",
						"japanese": "愚か者どもめ… 私の苦痛を止めようとするなどと。",
						"chinese": "蠢货们… 竟敢试图阻止我的痛苦。",
						"french": "Imbéciles… Comment osez-vous tenter d'arrêter ma souffrance.",
						"spanish": "Estúpidos… ¿Cómo osáis intentar detener mi sufrimiento?",
						"vietnamese": "Đồ ngốc… Dám cả gan dừng nỗi đau của ta.",
						"thai": "พวกโง่เง่า… กล้าดียังไงมาหยุดยั้งความทรมานของข้า.",
						"hindi": "मूर्खों… मेरी पीड़ा को रोकने की हिम्मत कैसे हुई तुम्हारी।"
					}
				},
				{
					"content": {
						"korean": "이 사막은… 영원히 나의 고통 속에 있을 것이다!",
						"english": "This desert... shall forever be consumed by my pain!",
						"japanese": "この砂漠は… 永遠に私の苦痛の中にあるだろう！",
						"chinese": "这片沙漠… 将永远在我的痛苦之中！",
						"french": "Ce désert… restera à jamais dans ma souffrance !",
						"spanish": "¡Este desierto… permanecerá para siempre en mi tormento!",
						"vietnamese": "Sa mạc này… sẽ mãi mãi nằm trong nỗi đau của ta!",
						"thai": "ทะเลทรายแห่งนี้… จะคงอยู่ชั่วนิรันดร์ในความทุกข์ทรมานของข้า!",
						"hindi": "यह रेगिस्तान… हमेशा मेरी पीड़ा में रहेगा!"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…젠장. 아직은 아니야. 다시… 반드시 막을 거야!",
						"english": "...Damn it. Not yet. I'll... definitely stop it again!",
						"japanese": "…くそ。まだだ。もう一度… 必ず止めてやる！",
						"chinese": "…该死。还没到时候。我还会… 再次阻止的！",
						"french": "...Maudits. Pas encore. Je vais... les arrêter, c'est certain !",
						"spanish": "...Maldita sea. Todavía no. Volveré... ¡y lo detendré!",
						"vietnamese": "...Chết tiệt. Vẫn chưa. Ta sẽ… chắc chắn ngăn chặn lại!",
						"thai": "…ให้ตายสิ. ยังไม่ถึงเวลา. ข้าจะ… ต้องหยุดมันให้ได้อีกครั้ง!",
						"hindi": "...धिक्कार है। अभी नहीं। मैं… निश्चित रूप से इसे फिर से रोकूँगा!"
					},
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "윽… 결국… 이리 되는구나.",
						"english": "Ugh... So... this is how it ends.",
						"japanese": "ぐっ…結局…こうなるのか。",
						"chinese": "呃…最终…还是这样了。",
						"french": "Ugh... Alors... c'est comme ça que ça se termine.",
						"spanish": "Ugh... Al final... así es como termina.",
						"vietnamese": "Ưgh… Cuối cùng… thì ra là thế này.",
						"thai": "อึก… ท้ายที่สุด… ก็เป็นแบบนี้สินะ",
						"hindi": "उफ़... आख़िरकार... ऐसा ही होना था।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "나의 맹세는… 파멸이 되었지만…",
						"english": "My vow... became ruin, but...",
						"japanese": "私の誓いは…破滅となったが…",
						"chinese": "我的誓言…虽已化为毁灭…",
						"french": "Mon serment... est devenu ruine, mais...",
						"spanish": "Mi juramento... se convirtió en ruina, pero...",
						"vietnamese": "Lời thề của ta… dù đã hóa thành hủy diệt…",
						"thai": "คำสาบานของข้า… กลายเป็นความพินาศแล้วก็จริง…",
						"hindi": "मेरी प्रतिज्ञा... भले ही बर्बादी बन गई, पर..."
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "아직… 진짜 맹세는… 사라지지 않았어. 찾아…야…",
						"english": "Still... the true vow... hasn't vanished. Must... find it...",
						"japanese": "まだ…本当の誓いは…消えていない。探さ…ないと…",
						"chinese": "但…真正的誓言…并未消失。必须…找到它…",
						"french": "Encore... le vrai serment... n'a pas disparu. Je dois... le trouver...",
						"spanish": "Aún... el verdadero juramento... no ha desaparecido. Debo... encontrarlo...",
						"vietnamese": "Vẫn còn… lời thề thật sự… chưa biến mất. Phải… tìm…",
						"thai": "ทว่า… คำสาบานที่แท้จริง… ยังไม่หายไป ต้อง… ค้น…",
						"hindi": "अभी भी... असली प्रतिज्ञा... गायब नहीं हुई। ढूँढ़ना... होगा..."
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…끝났나? 이 고통스러운 싸움이.",
						"english": "...Is it over? This painful struggle.",
						"japanese": "…終わったのか？この苦痛に満ちた戦いが。",
						"chinese": "…结束了吗？这场痛苦的战斗。",
						"french": "...Est-ce fini ? Cette lutte douloureuse.",
						"spanish": "...¿Terminó? Esta dolorosa lucha.",
						"vietnamese": "…Kết thúc rồi sao? Cuộc chiến đau đớn này.",
						"thai": "…จบแล้วหรือ? การต่อสู้ที่แสนเจ็บปวดนี้",
						"hindi": "...क्या यह ख़त्म हो गया? यह दर्दनाक संघर्ष।"
					}
				},
				{
					"speaker": "character_4",
					"content": {
						"korean": "맹세를 잃은 칼날… 영원의 조각… 그게 뭐지?",
						"english": "A blade that lost its vow... A fragment of eternity... What is that?",
						"japanese": "誓いを失った刃…永遠の欠片…それは何だ？",
						"chinese": "失去誓言的刀刃…永恒的碎片…那是什么？",
						"french": "Une lame qui a perdu son serment... Un fragment d'éternité... Qu'est-ce que c'est ?",
						"spanish": "Una hoja que perdió su juramento... Un fragmento de eternidad... ¿Qué es eso?",
						"vietnamese": "Lưỡi kiếm đã mất lời thề… Mảnh vỡ của vĩnh cửu… Đó là gì?",
						"thai": "คมดาบที่ไร้คำสาบาน… ชิ้นส่วนแห่งนิรันดร์… นั่นคืออะไร?",
						"hindi": "एक ऐसी तलवार जिसने अपनी प्रतिज्ञा खो दी... अनंत काल का एक टुकड़ा... वह क्या है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "모래시계의 모래는 멈췄다. 그러나 사막의 비극은… 아직 끝나지 않았다.",
						"english": "The sands of the hourglass have stopped. But the tragedy of the desert... is not yet over.",
						"japanese": "砂時計の砂は止まった。しかし砂漠の悲劇は…まだ終わっていない。",
						"chinese": "沙漏的沙已停止流淌。然而沙漠的悲剧…尚未结束。",
						"french": "Le sable du sablier s'est arrêté. Mais la tragédie du désert... n'est pas encore terminée.",
						"spanish": "La arena del reloj de arena se detuvo. Pero la tragedia del desierto... aún no ha terminado.",
						"vietnamese": "Cát trong đồng hồ cát đã ngừng chảy. Nhưng bi kịch của sa mạc… vẫn chưa kết thúc.",
						"thai": "ทรายในนาฬิกาทรายหยุดลงแล้ว แต่โศกนาฏกรรมของทะเลทราย… ยังไม่สิ้นสุด",
						"hindi": "रेतघड़ी की रेत रुक गई। लेकिन रेगिस्तान की त्रासदी... अभी ख़त्म नहीं हुई।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "진정한 맹세의 실마리는, 어둠 속에서 기다리고 있었다.",
						"english": "The clue to the true vow awaited in the darkness.",
						"japanese": "真の誓いの手がかりは、闇の中で待っていた。",
						"chinese": "真正誓言的线索，在黑暗中等候。",
						"french": "L'indice du véritable serment attendait dans l'obscurité.",
						"spanish": "La clave del verdadero juramento aguardaba en la oscuridad.",
						"vietnamese": "Manh mối của lời thề chân thật, đã chờ đợi trong bóng tối.",
						"thai": "เบาะแสของคำสาบานที่แท้จริง, รอคอยอยู่ในความมืดมิด.",
						"hindi": "सच्ची प्रतिज्ञा का सुराग, अंधेरे में इंतज़ार कर रहा था।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"시간의 모래가 흩날린다. 모든 것이 덧없이 사라지는 곳.",
			"끝없는 사막의 유일한 규칙은 '시간'이었다.",
			"그러나 그 시간 속에는 뒤바뀐 진실이 숨어 있었다.",
			"지키려던 자가 파괴자가 된 비극적인 맹세.",
			"우리는 그 모래시계의 고통과 마주해야 한다."
		],
		"english": [
			"The sands of time scatter. A place where all things fleetingly disappear.",
			"The only rule of the endless desert was 'time'.",
			"But within that time, a twisted truth was hidden.",
			"A tragic vow where the protector became the destroyer.",
			"We must confront the agony of that hourglass."
		],
		"japanese": [
			"時間の砂が舞い散る。全てが儚く消え去る場所。",
			"果てしない砂漠の唯一の掟は「時間」だった。",
			"しかし、その時間の中には捻じ曲げられた真実が隠されていた。",
			"守ろうとした者が破壊者となった、悲劇的な誓い。",
			"我々は、あの砂時計の苦痛と向き合わねばならない。"
		],
		"chinese": [
			"时间之沙飞舞。万物转瞬即逝之地。",
			"无尽沙漠唯一的法则便是“时间”。",
			"然而，在那时间之中，隐藏着被颠倒的真相。",
			"守护者沦为破坏者的悲剧誓言。",
			"我们必须面对那沙漏的痛苦。"
		],
		"french": [
			"Les sables du temps s'éparpillent. Un lieu où tout disparaît éphémèrement.",
			"La seule règle du désert infini était le « temps ».",
			"Cependant, une vérité inversée se cachait dans ce temps.",
			"Un vœu tragique où le protecteur devint le destructeur.",
			"Nous devons affronter l'agonie de ce sablier."
		],
		"spanish": [
			"Las arenas del tiempo se dispersan. Un lugar donde todo se desvanece fugazmente.",
			"La única regla del desierto sin fin era el 'tiempo'.",
			"Sin embargo, dentro de ese tiempo, una verdad retorcida se escondía.",
			"Un trágico juramento donde el protector se convirtió en el destructor.",
			"Debemos enfrentar la agonía de ese reloj de arena."
		],
		"vietnamese": [
			"Cát thời gian bay lượn. Nơi mọi thứ thoảng qua rồi biến mất.",
			"Quy tắc duy nhất của sa mạc vô tận là 'thời gian'.",
			"Nhưng trong dòng thời gian đó, một sự thật méo mó đã bị che giấu.",
			"Một lời thề bi thảm khi người bảo vệ trở thành kẻ hủy diệt.",
			"Chúng ta phải đối mặt với nỗi đau của chiếc đồng hồ cát đó."
		],
		"thai": [
			"ทรายแห่งเวลากระจายไปทุกหนแห่ง สถานที่ที่ทุกสิ่งจางหายไปในพริบตา",
			"กฎเพียงข้อเดียวของทะเลทรายอันไร้ที่สิ้นสุดคือ 'เวลา'",
			"แต่ภายในกาลเวลานั้น มีความจริงที่บิดเบือนซ่อนอยู่",
			"คำสาบานอันน่าเศร้าที่ผู้พิทักษ์กลายเป็นผู้ทำลาย",
			"เราต้องเผชิญกับความเจ็บปวดของนาฬิกาทรายนั้น"
		],
		"hindi": [
			"समय की रेत उड़ रही है। एक ऐसी जगह जहाँ सब कुछ क्षणभंगुर होकर गायब हो जाता है।",
			"अनंत रेगिस्तान का एकमात्र नियम 'समय' था।",
			"लेकिन उस समय के भीतर, एक उलटा हुआ सच छिपा था।",
			"एक दुखद प्रतिज्ञा जहाँ रक्षक ही विनाशक बन गया।",
			"हमें उस रेतघड़ी के कष्ट का सामना करना होगा।"
		]
	}
} as const;
