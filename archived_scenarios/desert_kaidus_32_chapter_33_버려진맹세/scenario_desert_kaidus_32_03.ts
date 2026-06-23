export const scenario_desert_kaidus_32_03 = {
	"scenario_id": "desert_kaidus_32_03",
	"order": 3,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"kemet": {
			"id": "mon_2f8a1701-571b-40b5-92d9-69aa973cef18",
			"name": {
				"korean": "케메트",
				"english": "Kemet",
				"japanese": "ケメト",
				"chinese": "凯麦特",
				"french": "Kemet",
				"spanish": "Kemet",
				"vietnamese": "Kemet",
				"thai": "เคเมต",
				"hindi": "केमेट"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/fd9e93e0-2874-4647-0076-839718949500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8c3f2690-e8a9-44f5-4527-d8f8d4ea2800/public"
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
					"content": {
						"korean": "모래바람이 휘몰아치는 폐허. 한때 명예를 노래하던 성지가 초라하게 남아있었다.",
						"english": "A ruin ravaged by sandstorms. The sanctuary that once sang of honor remained desolate.",
						"japanese": "砂嵐が吹き荒れる廃墟。かつて名誉を歌った聖地が、無残な姿で残されていた。",
						"chinese": "风沙肆虐的废墟。昔日歌颂荣誉的圣地，如今只剩残破。",
						"french": "Une ruine ravagée par les tempêtes de sable. Le sanctuaire qui chantait autrefois l'honneur demeurait désolé.",
						"spanish": "Una ruina asolada por las tormentas de arena. El santuario que una vez cantó al honor permanecía desolado.",
						"vietnamese": "Đống đổ nát bị bão cát càn quét. Thánh địa từng ca tụng vinh quang, giờ chỉ còn trơ trọi.",
						"thai": "ซากปรักหักพังที่พายุทรายพัดกระหน่ำ แดนศักดิ์สิทธิ์ที่เคยขับขานบทเพลงแห่งเกียรติยศ บัดนี้เหลือเพียงความอนาถ",
						"hindi": "रेत के तूफानों से तबाह हुआ एक खंडहर। वह अभयारण्य जो कभी सम्मान का गीत गाता था, अब वीरान पड़ा है।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "direction",
					"speaker": "kemet",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "kemet",
					"emotion": "base",
					"content": {
						"korean": "이곳이 바로 명예의 성지. 내가 관리하고 있지.",
						"english": "This is the Sanctuary of Honor. I manage it.",
						"japanese": "ここが名誉の聖地。私が管理しているのだ。",
						"chinese": "这便是荣誉圣地。由我负责管理。",
						"french": "C'est le Sanctuaire de l'Honneur. C'est moi qui le gère.",
						"spanish": "Este es el Santuario del Honor. Yo lo administro.",
						"vietnamese": "Đây chính là Thánh địa Danh dự. Ta đang quản lý nó.",
						"thai": "นี่คือแดนศักดิ์สิทธิ์แห่งเกียรติยศ ข้าเป็นผู้ดูแลเอง",
						"hindi": "यह सम्मान का अभयारण्य है। मैं इसे संभालता हूँ।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…관리요?",
						"english": "...Manage?",
						"japanese": "…管理、ですか？",
						"chinese": "……管理？",
						"french": "...Gérer ?",
						"spanish": "¿...Administrar?",
						"vietnamese": "...Quản lý?",
						"thai": "...ดูแลหรือ?",
						"hindi": "…संभालना?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "kemet",
					"emotion": "base",
					"content": {
						"korean": "그래. 이 신성한 곳을… 아무나 드나들게 둘 순 없지.",
						"english": "Indeed. This sacred place... I can't let just anyone wander in.",
						"japanese": "そうだ。この神聖な場所を…誰でも自由に出入りさせるわけにはいかないからな。",
						"chinese": "没错。这神圣之地……岂能任人随意进出。",
						"french": "En effet. Ce lieu sacré... Je ne peux pas laisser n'importe qui y entrer.",
						"spanish": "Así es. Este lugar sagrado... no puedo dejar que cualquiera entre y salga.",
						"vietnamese": "Đúng vậy. Nơi linh thiêng này... không thể để ai tùy tiện ra vào.",
						"thai": "ใช่แล้ว สถานที่ศักดิ์สิทธิ์แห่งนี้... จะปล่อยให้ใครก็ได้เข้ามาได้อย่างไร",
						"hindi": "हाँ। इस पवित्र स्थान में... मैं किसी को भी ऐसे ही नहीं आने दे सकता।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "그의 손에 묻은 먼지는… 어딘가 기름졌다.",
						"english": "The dust on his hands... felt somewhat greasy.",
						"japanese": "彼の手についた埃は…どこか脂っこかった。",
						"chinese": "他手上的灰尘……有些油腻。",
						"french": "La poussière sur ses mains... était étrangement grasse.",
						"spanish": "El polvo en sus manos... se sentía algo grasiento.",
						"vietnamese": "Lớp bụi trên tay hắn... có vẻ gì đó nhờn nhợt.",
						"thai": "ฝุ่นที่ติดอยู่ในมือของเขา... ดูเหมือนจะมีคราบมันๆ",
						"hindi": "उसके हाथों पर लगी धूल… कहीं चिकनी सी थी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "kemet",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "요즘 유적 깊은 곳에서… 정체 모를 존재가 나타나 소란을 피우더군.",
						"english": "Lately, a mysterious entity has appeared deep within the ruins... causing a disturbance.",
						"japanese": "最近、遺跡の奥深くで…正体不明の存在が現れて騒ぎを起こしているようだ。",
						"chinese": "最近，遗迹深处……有不明之物现身，制造骚乱。",
						"french": "Récemment, une entité inconnue est apparue au plus profond des ruines... causant des troubles.",
						"spanish": "Últimamente, una entidad misteriosa ha aparecido en lo profundo de las ruinas... causando disturbios.",
						"vietnamese": "Gần đây, sâu trong di tích... một thực thể không rõ danh tính đã xuất hiện, gây ra náo loạn.",
						"thai": "ช่วงนี้มีสิ่งลึกลับปรากฏตัวอยู่ในส่วนลึกของซากปรักหักพัง... และก่อความวุ่นวายอยู่",
						"hindi": "हाल ही में, खंडहरों की गहराई में… एक अज्ञात इकाई प्रकट हुई है, जो उपद्रव मचा रही है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "kemet"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "정체 모를 존재요?",
						"english": "An unknown entity?",
						"japanese": "正体不明の存在ですか？",
						"chinese": "不明身份的存在？",
						"french": "Une entité inconnue ?",
						"spanish": "¿Una entidad desconocida?",
						"vietnamese": "Một thực thể không rõ danh tính?",
						"thai": "สิ่งมีชีวิตปริศนา?",
						"hindi": "एक अज्ञात सत्ता?"
					}
				},
				{
					"speaker": "kemet",
					"emotion": "angry",
					"content": {
						"korean": "그래. 흉측한 괴물이지. 이 성지의 신성함을 더럽히고 있어.",
						"english": "Yes. A hideous monster. It defiles the sanctity of this holy place.",
						"japanese": "そうだ。醜悪な怪物だ。この聖地の神聖さを汚している。",
						"chinese": "是的。一个丑陋的怪物。它正在玷污这片圣地的神圣。",
						"french": "Oui. Un monstre hideux. Il souille la sainteté de ce lieu sacré.",
						"spanish": "Sí. Un monstruo horrendo. Está profanando la santidad de este lugar sagrado.",
						"vietnamese": "Đúng vậy. Một con quái vật gớm ghiếc. Nó đang làm ô uế sự linh thiêng của thánh địa này.",
						"thai": "ใช่แล้ว อสุรกายที่น่าเกลียด มันกำลังทำลายความศักดิ์สิทธิ์ของสถานที่ศักดิ์สิทธิ์แห่งนี้",
						"hindi": "हाँ। एक घिनौना राक्षस। यह इस पवित्र स्थान की पवित्रता को दूषित कर रहा है।"
					},
					"type": "speech"
				},
				{
					"speaker": "kemet",
					"emotion": "base",
					"content": {
						"korean": "당신이 진정한 명예를 아는 자라면… 그자를 처단해 주게.",
						"english": "If you truly know honor... eliminate it.",
						"japanese": "もし真の誉れを知る者ならば…やつを処断してくれ。",
						"chinese": "如果你是真正知晓荣誉之人……就去铲除它。",
						"french": "Si tu connais le véritable honneur... élimine-le.",
						"spanish": "Si de verdad conoces el honor... elimínalo.",
						"vietnamese": "Nếu ngươi là kẻ biết rõ danh dự... hãy tiêu diệt nó.",
						"thai": "หากท่านรู้ซึ่งเกียรติยศที่แท้จริง... จงกำจัดมันเสีย",
						"hindi": "यदि तुम सच में सम्मान जानते हो... तो उसे खत्म कर दो।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "명예를 위해서요…?",
						"english": "For honor...?",
						"japanese": "誉れのために…？",
						"chinese": "为了荣誉……？",
						"french": "Pour l'honneur... ?",
						"spanish": "¿Por honor...?",
						"vietnamese": "Vì danh dự sao...?",
						"thai": "เพื่อเกียรติยศ...?",
						"hindi": "सम्मान के लिए...?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "물론이지! 이 성지를 지키는 것은 모두의 의무이자 영광!",
						"english": "Of course! Protecting this holy place is everyone's duty and glory!",
						"japanese": "もちろん！この聖地を守るのは、皆の義務であり栄光だ！",
						"chinese": "当然！守护这片圣地是每个人的职责和荣耀！",
						"french": "Bien sûr ! Protéger ce lieu sacré est le devoir et la gloire de tous !",
						"spanish": "¡Claro! ¡Proteger este lugar sagrado es el deber y la gloria de todos!",
						"vietnamese": "Đương nhiên rồi! Bảo vệ thánh địa này là nghĩa vụ và vinh quang của mọi người!",
						"thai": "แน่นอน! การปกป้องสถานที่ศักดิ์สิทธิ์แห่งนี้คือหน้าที่และเกียรติยศของทุกคน!",
						"hindi": "निश्चित रूप से! इस पवित्र स्थान की रक्षा करना सबका कर्तव्य और गौरव है!"
					},
					"speaker": "kemet",
					"emotion": "happy"
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
						"korean": "성지 깊은 곳, 부서진 유물들이 즐비했다. 누군가 훼손한 흔적이었다.",
						"english": "Deep within the holy place, broken relics lay scattered. Signs of vandalism.",
						"japanese": "聖地の奥深く、壊れた遺物が散乱していた。誰かが破壊した痕跡だ。",
						"chinese": "圣地深处，破碎的遗物随处可见。那是被毁坏的痕迹。",
						"french": "Au plus profond du lieu sacré, des reliques brisées jonchaient le sol. Des signes de vandalisme.",
						"spanish": "En lo más profundo del lugar sagrado, yacían reliquias rotas. Había signos de vandalismo.",
						"vietnamese": "Sâu trong thánh địa, những di vật vỡ nát nằm la liệt. Dấu vết của sự phá hoại.",
						"thai": "ลึกเข้าไปในสถานที่ศักดิ์สิทธิ์ มีโบราณวัตถุที่แตกหักเกลื่อนกลาด ร่องรอยของการทำลายล้าง",
						"hindi": "पवित्र स्थान के गहरे में, टूटे हुए अवशेष बिखरे पड़े थे। बर्बरता के निशान थे।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "kemet",
					"type": "direction"
				},
				{
					"speaker": "kemet",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "오, 여기까지 왔군. 유물들은… 안전한가?",
						"english": "Oh, you've made it this far. Are the relics... safe?",
						"japanese": "おお、ここまで来たか。遺物は…無事か？",
						"chinese": "哦，你竟然来到了这里。遗物……安全吗？",
						"french": "Oh, tu es venu jusqu'ici. Les reliques sont-elles... en sécurité ?",
						"spanish": "Oh, has llegado hasta aquí. ¿Las reliquias están... a salvo?",
						"vietnamese": "Ồ, ngươi đã đến được đây. Các di vật... có an toàn không?",
						"thai": "โอ้ ท่านมาถึงที่นี่แล้ว โบราณวัตถุ... ปลอดภัยดีหรือ?",
						"hindi": "ओह, तुम यहाँ तक पहुँच गए। क्या अवशेष... सुरक्षित हैं?"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "유물 말씀이세요?",
						"english": "The relics, you mean?",
						"japanese": "遺物でございますか？",
						"chinese": "您是说遗物吗？",
						"french": "Les reliques, vous voulez dire ?",
						"spanish": "¿Las reliquias, dices?",
						"vietnamese": "Ý ngài là các di vật?",
						"thai": "โบราณวัตถุหรือครับ/คะ?",
						"hindi": "अवशेषों की बात कर रहे हैं?"
					}
				},
				{
					"speaker": "kemet",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "물론이지! 신성한 유물들은 잘 지켜져야 하니까.",
						"english": "Of course! Sacred relics must be well-protected.",
						"japanese": "もちろん！神聖な遺物は厳重に守られねばならんからな。",
						"chinese": "当然！神圣的遗物必须好好守护。",
						"french": "Bien sûr ! Les reliques sacrées doivent être bien protégées.",
						"spanish": "¡Claro! Las reliquias sagradas deben ser bien protegidas.",
						"vietnamese": "Đương nhiên rồi! Những di vật linh thiêng phải được bảo vệ cẩn thận.",
						"thai": "แน่นอน! โบราณวัตถุศักดิ์สิทธิ์ต้องได้รับการปกป้องอย่างดี",
						"hindi": "निश्चित रूप से! पवित्र अवशेषों की अच्छी तरह से रक्षा की जानी चाहिए।"
					}
				},
				{
					"content": {
						"korean": "그때, 거대한 그림자가 나타났다. 유물을 움켜쥔 채.",
						"english": "Then, a colossal shadow appeared, clutching the relic.",
						"japanese": "その時、巨大な影が現れた。遺物を掴んだまま。",
						"chinese": "这时，一个巨大的黑影出现了。它紧握着遗物。",
						"french": "Alors, une ombre colossale apparut, serrant la relique.",
						"spanish": "Entonces, una sombra colosal apareció, aferrándose a la reliquia.",
						"vietnamese": "Lúc đó, một bóng đen khổng lồ xuất hiện, ôm chặt lấy di vật.",
						"thai": "ขณะนั้น เงาขนาดมหึมาปรากฏขึ้น กอบกุมโบราณวัตถุไว้",
						"hindi": "तभी, एक विशालकाय छाया प्रकट हुई, अवशेष को पकड़े हुए।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "내 것이야… 전부…!",
						"english": "It's mine... all of it...!",
						"japanese": "私のものだ…すべて…！",
						"chinese": "这是我的……全部……！",
						"french": "C'est à moi... tout...!",
						"spanish": "Es mío... ¡todo...!",
						"vietnamese": "Là của ta... tất cả...!",
						"thai": "ของฉัน... ทั้งหมด...!",
						"hindi": "यह मेरा है... सब कुछ...!"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "저게… 그 괴물?",
						"english": "Is that... the monster?",
						"japanese": "あれが…あの怪物か？",
						"chinese": "那是……那个怪物吗？",
						"french": "C'est ça... le monstre ?",
						"spanish": "¿Eso es... el monstruo?",
						"vietnamese": "Đó là... quái vật?",
						"thai": "นั่น... สัตว์ประหลาดรึ?",
						"hindi": "क्या वह... वह राक्षस है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"action": "exit",
					"duration_ms": 400,
					"direction": "down",
					"type": "direction",
					"speaker": "kemet"
				},
				{
					"speaker": "kemet",
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "아무튼 처치해 주게! 명예를 위해서!",
						"english": "Defeat it, no matter what! For honor!",
						"japanese": "とにかく、始末してくれ！名誉のために！",
						"chinese": "无论如何，解决掉它！为了荣耀！",
						"french": "Débarrassez-vous en, coûte que coûte ! Pour l'honneur !",
						"spanish": "¡Acaba con él, cueste lo que cueste! ¡Por el honor!",
						"vietnamese": "Dù sao cũng phải tiêu diệt nó! Vì danh dự!",
						"thai": "กำจัดมันซะ ไม่ว่าจะยังไง! เพื่อเกียรติยศ!",
						"hindi": "किसी भी कीमत पर, उसे हराओ! सम्मान के लिए!"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "유적은 더욱 깊어지고 어두워졌다. 모래에는 희미한 혈흔이 묻어 있었다.",
						"english": "The ruins grew deeper and darker. Faint bloodstains marred the sand.",
						"japanese": "遺跡はさらに深く暗くなった。砂にはかすかな血痕が残っていた。",
						"chinese": "遗迹变得更深更暗。沙子上沾染着淡淡的血迹。",
						"french": "Les ruines s'enfonçaient, plus profondes et plus sombres. De légères taches de sang maculaient le sable.",
						"spanish": "Las ruinas se hacían más profundas y oscuras. Débiles manchas de sangre manchaban la arena.",
						"vietnamese": "Di tích càng sâu và tối hơn. Cát vương vãi những vệt máu mờ nhạt.",
						"thai": "ซากปรักหักพังลึกและมืดมิดลงไปอีก รอยเลือดจางๆ เปื้อนอยู่บนผืนทราย",
						"hindi": "खंडहर और भी गहरे और अंधेरे होते गए। रेत पर हल्के खून के धब्बे लगे थे।"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "명예… 과연 누구를 위한 명예일까.",
						"english": "Honor... for whom, truly?",
						"japanese": "名誉…一体誰のための名誉なのか。",
						"chinese": "荣耀……究竟是为了谁的荣耀呢。",
						"french": "L'honneur... pour qui, au juste ?",
						"spanish": "Honor... ¿para quién, en verdad?",
						"vietnamese": "Danh dự... Rốt cuộc là vì ai?",
						"thai": "เกียรติยศ... แท้จริงแล้วเพื่อใครกัน?",
						"hindi": "सम्मान... आखिर किसके लिए सम्मान?"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "저 괴물도… 어쩌면 유물을 지키려 했던 건 아닐까?",
						"english": "Perhaps even that monster... was trying to protect the artifact?",
						"japanese": "あの怪物も…もしかしたら遺物を守ろうとしていたのでは？",
						"chinese": "也许那个怪物……也只是想守护遗物吧？",
						"french": "Peut-être même que ce monstre... essayait de protéger l'artefact ?",
						"spanish": "¿Quizás incluso ese monstruo... intentaba proteger el artefacto?",
						"vietnamese": "Liệu con quái vật đó... có lẽ cũng chỉ đang cố bảo vệ di vật?",
						"thai": "สัตว์ประหลาดตัวนั้น... อาจจะกำลังพยายามปกป้องวัตถุโบราณอยู่กระมัง?",
						"hindi": "शायद वह राक्षस भी... कलाकृति की रक्षा करने की कोशिश कर रहा था?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "폐허는 진실을 삼키는 듯, 침묵했다.",
						"english": "The ruins fell silent, as if swallowing the truth.",
						"japanese": "廃墟は真実を飲み込むように、沈黙した。",
						"chinese": "废墟仿佛吞噬了真相，陷入了沉默。",
						"french": "Les ruines se turent, comme si elles dévoraient la vérité.",
						"spanish": "Las ruinas enmudecieron, como si se tragaran la verdad.",
						"vietnamese": "Phế tích chìm vào im lặng, như thể nuốt chửng sự thật.",
						"thai": "ซากปรักหักพังเงียบงัน ราวกับกลืนกินความจริงลงไป",
						"hindi": "खंडहर खामोश हो गए, मानो सच निगल गए हों।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "kemet",
					"type": "direction"
				},
				{
					"content": {
						"korean": "드디어 이 성지의 오점을 제거하는군! 명예로운 일이야!",
						"english": "Finally, we cleanse this sacred place of its stain! An honorable deed!",
						"japanese": "ついにこの聖地の汚点を排除するのだな！名誉あることだ！",
						"chinese": "终于，我们能清除这圣地的污点！这是光荣的使命！",
						"french": "Enfin, nous purifions ce lieu sacré de sa souillure ! Un acte honorable !",
						"spanish": "¡Por fin, eliminamos esta mancha de este lugar sagrado! ¡Un acto honorable!",
						"vietnamese": "Cuối cùng, chúng ta cũng loại bỏ được vết nhơ khỏi thánh địa này! Một việc đáng vinh danh!",
						"thai": "ในที่สุด เราก็ได้กำจัดมลทินของสถานที่ศักดิ์สิทธิ์นี้! เป็นการกระทำที่น่ายกย่อง!",
						"hindi": "आखिरकार, हम इस पवित्र स्थान से इस दाग को हटा रहे हैं! एक सम्मानजनक कार्य!"
					},
					"type": "speech",
					"emotion": "happy",
					"speaker": "kemet"
				},
				{
					"content": {
						"korean": "명예…? 전부 거짓말…!",
						"english": "Honor...? All lies...!",
						"japanese": "名誉…？全部嘘だ…！",
						"chinese": "荣耀……？全是谎言……！",
						"french": "L'honneur... ? Tout est mensonge... !",
						"spanish": "¿Honor...? ¡Todo es mentira...!",
						"vietnamese": "Danh dự...? Toàn là dối trá...!",
						"thai": "เกียรติยศ...? โกหกทั้งเพ...!",
						"hindi": "सम्मान...? सब झूठ...!"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "너도 아는구나. 이 관리인의 위선을.",
						"english": "You know it too. This custodian's hypocrisy.",
						"japanese": "お前も知っているのだな。この管理人の偽善を。",
						"chinese": "你也知道啊。这个守卫的伪善。",
						"french": "Toi aussi, tu le sais. L'hypocrisie de ce gardien.",
						"spanish": "Tú también lo sabes. La hipocresía de este guardián.",
						"vietnamese": "Ngươi cũng biết. Sự đạo đức giả của tên quản lý này.",
						"thai": "แกก็รู้สินะ ความหน้าซื่อใจคดของผู้ดูแลคนนี้",
						"hindi": "तुम भी जानते हो। इस रखवाले का पाखंड।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "이 유물들… 다 내 것이었어…! {random_boss}의…!",
						"english": "These artifacts... they were all mine...! {random_boss}'s...!",
						"japanese": "これらの遺物…全て私のものだった…！{random_boss}の…！",
						"chinese": "这些文物……都是我的……！{random_boss}的……！",
						"french": "Ces artefacts… ils étaient tous à moi…! De {random_boss}…!",
						"spanish": "Estos artefactos... ¡todos eran míos...! ¡De {random_boss}...!",
						"vietnamese": "Những cổ vật này... tất cả là của ta...! Của {random_boss}...!",
						"thai": "วัตถุโบราณพวกนี้... ทั้งหมดเป็นของข้า...! ของ {random_boss}...!",
						"hindi": "ये कलाकृतियाँ... सब मेरी थीं...! {random_boss} की...!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…헛소리! 어서 저 더러운 괴물을 처리해!",
						"english": "...Nonsense! Quickly, deal with that filthy monster!",
						"japanese": "…馬鹿な！早くあの忌まわしい怪物を片付けろ！",
						"chinese": "……胡说八道！快去对付那个肮脏的怪物！",
						"french": "...N'importe quoi ! Débarrassez-vous vite de ce monstre immonde !",
						"spanish": "¡...Tonterías! ¡Rápido, encárgate de ese asqueroso monstruo!",
						"vietnamese": "...Vô lý! Mau xử lý con quái vật bẩn thỉu đó đi!",
						"thai": "...เหลวไหล! รีบจัดการเจ้าสัตว์ประหลาดสกปรกนั่นซะ!",
						"hindi": "...बकवास! जल्दी करो, उस गंदे राक्षस से निपटो!"
					},
					"speaker": "kemet",
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 포효했다. 주인공은 쓰러졌다.",
						"english": "The giant shadow roared. The protagonist fell.",
						"japanese": "巨大な影が咆哮した。主人公は倒れた。",
						"chinese": "巨大的影子咆哮着。主角倒下了。",
						"french": "L'ombre gigantesque rugit. Le protagoniste tomba.",
						"spanish": "La sombra gigante rugió. El protagonista cayó.",
						"vietnamese": "Bóng đen khổng lồ gầm thét. Nhân vật chính gục ngã.",
						"thai": "เงายักษ์คำราม ตัวเอกล้มลง",
						"hindi": "विशाल छाया गरजी। नायक गिर गया।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "네가… 명예를 안다고…? 웃기는군…!",
						"english": "You... you know honor...? Ludicrous...!",
						"japanese": "貴様が…名誉を知るだと…？笑わせるな…！",
						"chinese": "你……懂荣誉……？可笑……！",
						"french": "Toi… tu connais l'honneur…? Ridicule…!",
						"spanish": "¿Tú... tú conoces el honor...? ¡Ridículo...!",
						"vietnamese": "Ngươi... ngươi biết danh dự ư...? Nực cười...!",
						"thai": "เจ้า... เจ้ารู้จักเกียรติยศหรือ...? น่าหัวเราะสิ้นดี...!",
						"hindi": "तुम... तुम सम्मान जानते हो...? हास्यास्पद...!"
					},
					"type": "speech"
				},
				{
					"speaker": "kemet",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "쯧쯧… 겨우 이 정도라니. 명예를 더럽히는군!",
						"english": "Tsk tsk... Is this all you've got? You disgrace honor!",
						"japanese": "ちっ…たったこれっぽっちか。名誉を汚すな！",
						"chinese": "啧啧……就这点本事吗。玷污荣誉！",
						"french": "Tsk tsk… Juste ça ? Tu déshonores l'honneur !",
						"spanish": "Tsk tsk... ¿Solo esto? ¡Deshonras el honor!",
						"vietnamese": "Chậc chậc... Chỉ có thế này thôi sao. Làm ô nhục danh dự!",
						"thai": "ชิชิ... แค่นี้เองหรือ? เจ้ากำลังทำลายเกียรติยศ!",
						"hindi": "छी छी... बस इतना ही? तुम सम्मान को कलंकित करते हो!"
					},
					"emotion": "angry",
					"speaker": "kemet"
				},
				{
					"content": {
						"korean": "…아직 끝나지 않았어. 이 위선을 밝힐 때까지.",
						"english": "...It's not over. Not until I expose this hypocrisy.",
						"japanese": "…まだ終わってない。この偽善を暴くまで。",
						"chinese": "…还没完。直到我揭露这虚伪。",
						"french": "...Ce n'est pas fini. Jusqu'à ce que je révèle cette hypocrisie.",
						"spanish": "...Esto no ha terminado. Hasta que revele esta hipocresía.",
						"vietnamese": "...Chưa kết thúc đâu. Cho đến khi ta vạch trần sự đạo đức giả này.",
						"thai": "...ยังไม่จบ จนกว่าจะเปิดโปงความเสแสร้งนี้.",
						"hindi": "...अभी खत्म नहीं हुआ है। जब तक मैं इस पाखंड का पर्दाफाश नहीं करता।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 쓰러졌다. 유물을 움켜쥔 손이 힘없이 풀렸다.",
						"english": "The giant shadow fell. The hand clutching the artifact weakly loosened.",
						"japanese": "巨大な影が倒れた。遺物を掴んでいた手が力なく開いた。",
						"chinese": "巨大的影子倒下了。紧握文物的双手无力地松开。",
						"french": "L'ombre gigantesque tomba. La main serrant l'artefact se relâcha faiblement.",
						"spanish": "La sombra gigante cayó. La mano que aferraba el artefacto se aflojó débilmente.",
						"vietnamese": "Bóng đen khổng lồ gục ngã. Bàn tay nắm chặt cổ vật buông lỏng vô lực.",
						"thai": "เงายักษ์ล้มลง มือที่กำวัตถุโบราณคลายออกอย่างอ่อนแรง",
						"hindi": "विशाल छाया गिर गई। कलाकृति पकड़े हाथ बेजान होकर ढीले पड़ गए।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "그는… 날 이용한 거야… 유물을… 팔아넘기려고….",
						"english": "He... he used me... to sell off the artifacts....",
						"japanese": "彼は…私を利用したんだ…遺物を…売り払うために…。",
						"chinese": "他……利用了我……为了……卖掉文物……。",
						"french": "Il… il m'a utilisé… pour vendre les artefacts….",
						"spanish": "Él... me usó... para vender los artefactos....",
						"vietnamese": "Hắn... hắn đã lợi dụng ta... để bán đi những cổ vật...",
						"thai": "เขา... เขาใช้ข้า... เพื่อขายวัตถุโบราณ....",
						"hindi": "उसने... उसने मेरा इस्तेमाल किया... कलाकृतियाँ... बेचने के लिए..."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "결국 모두가 서로를 이용하는구나.",
						"english": "In the end, everyone uses each other.",
						"japanese": "結局、皆がお互いを利用するのだな。",
						"chinese": "到头来，所有人都在互相利用啊。",
						"french": "Au final, tout le monde se sert les uns des autres.",
						"spanish": "Al final, todos se utilizan unos a otros.",
						"vietnamese": "Rốt cuộc, ai cũng lợi dụng lẫn nhau.",
						"thai": "สุดท้ายแล้ว ทุกคนก็ต่างใช้ประโยชน์จากกันและกัน",
						"hindi": "आखिरकार, सब एक-दूसरे का इस्तेमाल करते हैं।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "kemet"
				},
				{
					"type": "speech",
					"content": {
						"korean": "하하! 잘했다! 자네는 이 성지의 영웅이야!",
						"english": "Haha! Well done! You are the hero of this sacred land!",
						"japanese": "ハハ！よくやった！お前はこの聖地の英雄だ！",
						"chinese": "哈哈！干得好！你是这圣地的英雄！",
						"french": "Haha ! Bien joué ! Tu es le héros de cette terre sacrée !",
						"spanish": "¡Jaja! ¡Bien hecho! ¡Eres el héroe de esta tierra sagrada!",
						"vietnamese": "Haha! Làm tốt lắm! Ngươi là anh hùng của thánh địa này!",
						"thai": "ฮ่าฮ่า! ทำได้ดีมาก! เจ้าคือวีรบุรุษแห่งดินแดนศักดิ์สิทธิ์นี้!",
						"hindi": "हाहा! शाबाश! तुम इस पवित्र भूमि के नायक हो!"
					},
					"emotion": "happy",
					"speaker": "kemet"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "케메트의 환호성 속에서, 주인공은 다음 폐허를 향해 발걸음을 옮겼다. 명예의 그림자는 더욱 길어지고 있었다.",
						"english": "Amidst Kemet's cheers, the protagonist moved towards the next ruins. The shadow of honor grew longer.",
						"japanese": "ケメトの歓声の中、主人公は次の廃墟へと足を進めた。名誉の影は、さらに長くなっていた。",
						"chinese": "在凯麦特的欢呼声中，主角迈向了下一个废墟。荣誉的影子变得更长了。",
						"french": "Au milieu des acclamations de Kemet, le protagoniste se dirigea vers les prochaines ruines. L'ombre de l'honneur s'allongeait davantage.",
						"spanish": "Entre los vítores de Kemet, el protagonista avanzó hacia las siguientes ruinas. La sombra del honor se hacía más larga.",
						"vietnamese": "Giữa tiếng reo hò của Kemet, nhân vật chính bước về phía phế tích tiếp theo. Bóng dáng của vinh quang càng lúc càng kéo dài.",
						"thai": "ท่ามกลางเสียงโห่ร้องของเคเมต ตัวเอกก้าวเดินไปยังซากปรักหักพังถัดไป เงาแห่งเกียรติยศทอดยาวขึ้นเรื่อยๆ",
						"hindi": "केमेट की जय-जयकार के बीच, नायक अगले खंडहर की ओर बढ़ा। सम्मान की छाया और लंबी होती जा रही थी।"
					}
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"명예의 성지. 한때 숭고함이 깃들었던 곳.",
			"이제는 폐허가 되어, 속삭이는 모래바람만이 감돈다.",
			"성소 관리인은 신성함을 외치지만, 그의 손에는 더러운 돈 냄새가 났다.",
			"이곳의 명예는, 이미 오래전에 죽었다."
		],
		"english": [
			"Sanctuary of Honor. A place once imbued with nobility.",
			"Now a ruin, only whispering sandstorms linger.",
			"The sanctuary keeper proclaims holiness, but his hands reeked of dirty money.",
			"The honor of this place died long ago."
		],
		"japanese": [
			"名誉の聖地。かつて崇高さを宿した場所。",
			"今や廃墟となり、ささやく砂嵐だけが渦巻く。",
			"聖所管理人は神聖さを叫ぶが、その手からは汚れた金の匂いがした。",
			"この地の名誉は、とうの昔に死んでいた。"
		],
		"chinese": [
			"荣誉圣地。曾是崇高之所。",
			"如今已成废墟，唯有风沙低语。",
			"圣殿管理员高喊神圣，但他的手却沾满铜臭。",
			"此地的荣誉，早已消逝。"
		],
		"french": [
			"Le Sanctuaire de l'Honneur. Un lieu autrefois empreint de noblesse.",
			"Désormais une ruine, seuls les murmures des tempêtes de sable persistent.",
			"Le gardien du sanctuaire proclame la sainteté, mais ses mains puaient l'argent sale.",
			"L'honneur de ce lieu est mort il y a bien longtemps."
		],
		"spanish": [
			"El Santuario del Honor. Un lugar antaño imbuido de nobleza.",
			"Ahora una ruina, solo las tormentas de arena susurrantes perduran.",
			"El guardián del santuario proclama santidad, pero sus manos olían a dinero sucio.",
			"El honor de este lugar murió hace mucho tiempo."
		],
		"vietnamese": [
			"Thánh địa Danh dự. Nơi từng ngập tràn sự cao quý.",
			"Giờ đây hoang phế, chỉ còn cơn bão cát thì thầm bao trùm.",
			"Người quản lý thánh địa rao giảng sự linh thiêng, nhưng tay hắn nồng nặc mùi tiền bẩn.",
			"Danh dự của nơi này, đã chết từ lâu lắm rồi."
		],
		"thai": [
			"แดนศักดิ์สิทธิ์แห่งเกียรติยศ สถานที่ซึ่งครั้งหนึ่งเคยเปี่ยมด้วยความสูงส่ง",
			"บัดนี้เหลือเพียงซากปรักหักพัง มีแต่พายุทรายกระซิบกระซาบอยู่รอบๆ",
			"ผู้ดูแลสถานที่ศักดิ์สิทธิ์ประกาศความศักดิ์สิทธิ์ แต่ในมือของเขากลับมีกลิ่นเงินสกปรก",
			"เกียรติยศของสถานที่แห่งนี้ ได้ตายไปนานแล้ว"
		],
		"hindi": [
			"सम्मान का अभयारण्य। एक ऐसी जगह जो कभी कुलीनता से ओत-प्रोत थी।",
			"अब खंडहर बन चुका है, केवल फुसफुसाती रेत की आँधियाँ ही मंडराती हैं।",
			"अभयारण्य का रक्षक पवित्रता का दावा करता है, पर उसके हाथों से गंदे पैसे की बू आती थी।",
			"इस जगह का सम्मान बहुत पहले मर चुका था।"
		]
	}
} as const;
