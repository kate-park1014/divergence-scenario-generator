export const scenario_snowy_fenrir_37_02 = {
	"scenario_id": "snowy_fenrir_37_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"glace": {
			"id": "mon_d0b542b9-aea9-405d-8ee2-4936516a041a",
			"name": {
				"korean": "글라세",
				"english": "Glace",
				"japanese": "グラース",
				"chinese": "格拉斯",
				"french": "Glace",
				"spanish": "Glace",
				"vietnamese": "Gla-xê",
				"thai": "กลาซ",
				"hindi": "ग्लेस"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/81de374f-3422-482e-01ee-dc973da70500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/ef269701-044a-42c5-f7b7-760e9c92a500/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"늑대가 제 몸을 뜯어 먹었다.",
			"굶주림에 가릴 것이 없었다.",
			"그것은 끝없는 허기의 형상.",
			"우리는 그 본질을 쫓는다."
		],
		"english": [
			"The wolf devoured its own flesh.",
			"Hunger knew no bounds.",
			"It was the embodiment of endless hunger.",
			"We pursue its essence."
		],
		"japanese": [
			"狼は己の肉を食い破った。",
			"飢えは何も選ばなかった。",
			"それは終わらぬ飢餓の姿。",
			"我々は、その本質を追う。"
		],
		"chinese": [
			"狼撕咬着自己的身体。",
			"饥饿面前，无所顾忌。",
			"那是无尽饥饿的形态。",
			"我们追逐着它的本质。"
		],
		"french": [
			"Le loup dévorait sa propre chair.",
			"La faim ne connaissait aucune limite.",
			"C'était la forme d'une faim sans fin.",
			"Nous poursuivons son essence."
		],
		"spanish": [
			"El lobo devoró su propia carne.",
			"El hambre no tenía límites.",
			"Era la forma del hambre infinita.",
			"Perseguimos su esencia."
		],
		"vietnamese": [
			"Con sói xé xác chính nó.",
			"Cơn đói không kiêng nể gì.",
			"Đó là hiện thân của cơn đói vô tận.",
			"Chúng ta đuổi theo bản chất của nó."
		],
		"thai": [
			"หมาป่าฉีกทึ้งร่างของมันเอง",
			"ความหิวโหยไม่เลือกสิ่งใด",
			"นั่นคือร่างของความหิวโหยอันไม่สิ้นสุด",
			"เราไล่ล่าแก่นแท้ของมัน"
		],
		"hindi": [
			"भेड़िये ने अपना ही माँस खा लिया।",
			"भूख की कोई सीमा नहीं थी।",
			"वह अंतहीन भूख का रूप था।",
			"हम उसके सार का पीछा करते हैं।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 제 몸을 뜯어내고 있었다. 뼈와 살이 찢기는 소리.",
						"english": "The colossal shadow tore at its own body. The sound of tearing flesh and bone.",
						"japanese": "巨大な影が己の体を貪り食っていた。骨と肉が引き裂かれる音。",
						"chinese": "巨大的黑影撕扯着自己的身体。骨肉撕裂的声音。",
						"french": "L'ombre colossale déchirait son propre corps. Le son de la chair et des os qui se déchirent.",
						"spanish": "La sombra colosal se desgarraba a sí misma. El sonido de huesos y carne rompiéndose.",
						"vietnamese": "Bóng đen khổng lồ đang xé xác chính nó. Tiếng xương thịt bị xé toạc.",
						"thai": "เงาขนาดมหึมากำลังฉีกทึ้งร่างของมันเอง เสียงกระดูกและเนื้อฉีกขาด",
						"hindi": "विशाल परछाई अपने ही शरीर को फाड़ रही थी। हड्डियों और माँस के फटने की आवाज़।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "저게… 자기 몸을 먹는 건가?",
						"english": "Is that… eating its own body?",
						"japanese": "あれは… 己の体を食らっているのか？",
						"chinese": "那是… 在吃自己的身体吗？",
						"french": "Est-ce que ça… mange son propre corps ?",
						"spanish": "¿Está… comiéndose a sí mismo?",
						"vietnamese": "Đó… có phải nó đang ăn chính cơ thể mình không?",
						"thai": "นั่น… กำลังกินร่างของตัวเองอยู่เหรอ?",
						"hindi": "क्या वह… अपना ही शरीर खा रहा है?"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "glace"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…먹을 게 없으니 자기를 먹어.",
						"english": "…No food, so it eats itself.",
						"japanese": "…食らうものが無ければ、己を食らう。",
						"chinese": "…没有吃的，所以它吃自己。",
						"french": "…Rien à manger, alors il se mange lui-même.",
						"spanish": "…No hay comida, así que se come a sí mismo.",
						"vietnamese": "…Không có gì để ăn, nên nó ăn chính mình.",
						"thai": "…ไม่มีอะไรจะกิน เลยกินตัวเอง",
						"hindi": "…खाने को कुछ नहीं, तो वह खुद को खा रहा है।"
					},
					"speaker": "glace",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "가릴 게 없는 굶주림이야.",
						"english": "It's a hunger that knows no limits.",
						"japanese": "躊躇いのない飢えだ。",
						"chinese": "这是毫无顾忌的饥饿。",
						"french": "C'est une faim qui ne recule devant rien.",
						"spanish": "Es un hambre que no tiene límites.",
						"vietnamese": "Đó là cơn đói không kiêng nể gì.",
						"thai": "มันคือความหิวโหยที่ไม่เลือกสิ่งใด",
						"hindi": "यह ऐसी भूख है जिसकी कोई सीमा नहीं।"
					},
					"speaker": "glace",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "glace",
					"action": "enter"
				},
				{
					"speaker": "glace",
					"type": "speech",
					"content": {
						"korean": "옆구리의 뼈를 뜯어내는군.",
						"english": "It's tearing out the bones from its flank.",
						"japanese": "脇腹の骨を食い破っているな。",
						"chinese": "它在撕扯着自己肋骨的骨头。",
						"french": "Il arrache les os de son flanc.",
						"spanish": "Está arrancando los huesos de su costado.",
						"vietnamese": "Nó đang xé những chiếc xương sườn của mình.",
						"thai": "มันกำลังฉีกกระดูกซี่โครงของมัน",
						"hindi": "वह अपनी पसली की हड्डियाँ फाड़ रहा है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "고통은 없는 걸까?",
						"english": "Is there no pain?",
						"japanese": "痛みは無いのだろうか？",
						"chinese": "它没有痛苦吗？",
						"french": "N'y a-t-il pas de douleur ?",
						"spanish": "¿No siente dolor?",
						"vietnamese": "Nó không cảm thấy đau đớn sao?",
						"thai": "มันไม่รู้สึกเจ็บปวดเลยเหรอ?",
						"hindi": "क्या इसे दर्द नहीं हो रहा?"
					},
					"emotion": "sad"
				},
				{
					"speaker": "glace",
					"type": "speech",
					"content": {
						"korean": "굶주림은 고통조차 삼키지.",
						"english": "Hunger devours even pain.",
						"japanese": "空腹は痛みさえも飲み込む。",
						"chinese": "饥饿甚至吞噬痛苦。",
						"french": "La faim dévore même la douleur.",
						"spanish": "El hambre devora incluso el dolor.",
						"vietnamese": "Đói khát nuốt chửng cả nỗi đau.",
						"thai": "ความหิวโหยกลืนกินแม้กระทั่งความเจ็บปวด",
						"hindi": "भूख दर्द को भी निगल जाती है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그게 이 끝없는 허기의 본질이다.",
						"english": "That is the essence of this endless hunger.",
						"japanese": "それがこの終わりのない飢えの本質だ。",
						"chinese": "那就是这无尽饥饿的本质。",
						"french": "Telle est l'essence de cette faim insatiable.",
						"spanish": "Esa es la esencia de esta hambre interminable.",
						"vietnamese": "Đó là bản chất của cơn đói khát vô tận này.",
						"thai": "นั่นคือแก่นแท้ของความหิวโหยไม่สิ้นสุดนี้",
						"hindi": "वही इस अंतहीन भूख का सार है।"
					},
					"speaker": "glace",
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
					"speaker": "glace",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "base",
					"content": {
						"korean": "자신의 몸조차 먹이로 삼는 굶주림.",
						"english": "A hunger that consumes even one's own body.",
						"japanese": "自分の体すら餌とする飢え。",
						"chinese": "连自身身体都作为食粮的饥饿。",
						"french": "Une faim qui dévore même son propre corps.",
						"spanish": "Un hambre que devora incluso el propio cuerpo.",
						"vietnamese": "Cơn đói khát ăn thịt ngay cả cơ thể của chính mình.",
						"thai": "ความหิวโหยที่กินแม้กระทั่งร่างกายของตัวเอง",
						"hindi": "एक ऐसी भूख जो अपने शरीर को भी खा जाती है।"
					},
					"speaker": "glace",
					"type": "speech"
				},
				{
					"content": {
						"korean": "무서워… 끝없이 갈구하는 것 같아.",
						"english": "It's terrifying... it seems to crave endlessly.",
						"japanese": "恐ろしい…際限なく求めるようだ。",
						"chinese": "好可怕…它似乎在无休止地渴望着。",
						"french": "C'est terrifiant... ça semble désirer sans fin.",
						"spanish": "Es aterrador... parece anhelar sin fin.",
						"vietnamese": "Thật đáng sợ... dường như nó khao khát không ngừng.",
						"thai": "น่ากลัว... เหมือนจะอยากได้ไม่สิ้นสุด",
						"hindi": "यह डरावना है... यह अंतहीन लालसा प्रतीत होती है।"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "glace",
					"type": "speech",
					"content": {
						"korean": "채워지지 않는 공허는 모든 것을 집어삼키지.",
						"english": "The unfillable void devours everything.",
						"japanese": "満たされない虚無は全てを飲み込む。",
						"chinese": "无法填补的空虚吞噬一切。",
						"french": "Le vide insatiable dévore tout.",
						"spanish": "El vacío insaciable lo devora todo.",
						"vietnamese": "Sự trống rỗng không thể lấp đầy nuốt chửng mọi thứ.",
						"thai": "ความว่างเปล่าที่ไม่อาจเติมเต็มได้กลืนกินทุกสิ่ง",
						"hindi": "न भरने वाला शून्य सब कुछ निगल जाता है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "glace",
					"type": "speech",
					"content": {
						"korean": "회피한다고 사라지지 않아. 직시해야 한다.",
						"english": "It won't disappear if you avoid it. You must face it.",
						"japanese": "避けても消えない。直視しなければならない。",
						"chinese": "逃避不会让它消失。必须正视。",
						"french": "L'éviter ne le fera pas disparaître. Tu dois y faire face.",
						"spanish": "No desaparecerá si lo evitas. Debes enfrentarlo.",
						"vietnamese": "Trốn tránh sẽ không làm nó biến mất. Phải đối mặt.",
						"thai": "มันจะไม่หายไปถ้าคุณหลีกเลี่ยง คุณต้องเผชิญหน้า",
						"hindi": "टालने से यह गायब नहीं होगा। तुम्हें इसका सामना करना होगा।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "glace",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "glace",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "스스로를 먹어도 굶주림은 끝나지 않아.",
						"english": "Even if you eat yourself, the hunger won't end.",
						"japanese": "自分自身を食べても、飢えは終わらない。",
						"chinese": "即使吞噬自身，饥饿也不会终结。",
						"french": "Même si tu te dévores, la faim ne cessera pas.",
						"spanish": "Aunque te devores a ti mismo, el hambre no terminará.",
						"vietnamese": "Ngay cả khi tự ăn thịt mình, cơn đói khát vẫn không kết thúc.",
						"thai": "แม้จะกินตัวเอง ความหิวโหยก็ไม่สิ้นสุด",
						"hindi": "खुद को खाने पर भी भूख खत्म नहीं होगी।"
					}
				},
				{
					"content": {
						"korean": "그럼 우린… 뭘 해야 하는 거지?",
						"english": "Then what... what should we do?",
						"japanese": "ならば私達は…何をすべきだ？",
						"chinese": "那我们…该怎么办？",
						"french": "Alors nous... que devons-nous faire ?",
						"spanish": "Entonces, nosotros... ¿qué debemos hacer?",
						"vietnamese": "Vậy chúng ta... nên làm gì đây?",
						"thai": "ถ้าอย่างนั้นเรา... ควรทำอย่างไร?",
						"hindi": "तो हम... क्या करें?"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 허기의 본질을 알아야만 해.",
						"english": "We must understand the essence of this hunger.",
						"japanese": "この飢えの本質を知らねばならない。",
						"chinese": "我们必须了解这种饥饿的本质。",
						"french": "Nous devons connaître la nature de cette faim.",
						"spanish": "Debemos conocer la esencia de esta hambre.",
						"vietnamese": "Chúng ta phải hiểu rõ bản chất của cơn đói khát này.",
						"thai": "เราต้องรู้แก่นแท้ของความหิวโหยนี้",
						"hindi": "हमें इस भूख का सार जानना होगा।"
					},
					"emotion": "base",
					"speaker": "glace",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "다른 방법은 없어.",
						"english": "There is no other way.",
						"japanese": "他に方法はない。",
						"chinese": "别无他法。",
						"french": "Il n'y a pas d'autre moyen.",
						"spanish": "No hay otra forma.",
						"vietnamese": "Không còn cách nào khác.",
						"thai": "ไม่มีทางอื่น",
						"hindi": "कोई और रास्ता नहीं है।"
					},
					"speaker": "glace",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…나는 사라져도, 굶주림은… 사라지지 않는다.",
						"english": "...Even if I vanish, the hunger... will not.",
						"japanese": "…私は消え去っても、飢えは…消えない。",
						"chinese": "……即使我消失，饥饿也……不会消失。",
						"french": "...Même si je disparais, la faim... ne disparaîtra pas.",
						"spanish": "...Aunque yo desaparezca, el hambre... no lo hará.",
						"vietnamese": "...Dù ta biến mất, cơn đói... sẽ không biến mất.",
						"thai": "...แม้ตัวข้าจะหายไป แต่ความหิวโหย...จะยังคงอยู่",
						"hindi": "भले ही मैं मिट जाऊँ, भूख... नहीं मिटेगी।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "저건… 끝이 없는 거야?",
						"english": "Is that... endless?",
						"japanese": "あれは…終わりがないのか？",
						"chinese": "那个……是无止境的吗？",
						"french": "C'est... sans fin ?",
						"spanish": "¿Eso... es interminable?",
						"vietnamese": "Đó... là vô tận ư?",
						"thai": "นั่น...ไม่มีที่สิ้นสุดหรือ?",
						"hindi": "क्या वह... अंतहीन है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "glace"
				},
				{
					"content": {
						"korean": "육체가 사라져도 본질은 남아있지.",
						"english": "Even if the body vanishes, the essence remains.",
						"japanese": "肉体が消え去っても、本質は残る。",
						"chinese": "即使肉体消失，本质依然存在。",
						"french": "Même si le corps disparaît, l'essence demeure.",
						"spanish": "Aunque el cuerpo desaparezca, la esencia permanece.",
						"vietnamese": "Dù thể xác biến mất, bản chất vẫn còn đó.",
						"thai": "แม้กายจะสลายไป แก่นแท้ยังคงอยู่",
						"hindi": "भले ही शरीर मिट जाए, सार शेष रहता है।"
					},
					"emotion": "base",
					"speaker": "glace",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "가림 없는 굶주림의 한 겹이 벗겨졌다. 그러나 진정한 심연은 더 깊이 있었다.",
						"english": "A layer of unmasked hunger peeled away. But the true abyss lay deeper.",
						"japanese": "隠しなき飢えの一層が剥がれ落ちた。しかし真の深淵は、さらに奥にあった。",
						"chinese": "无所遮掩的饥饿被剥去一层。然而真正的深渊更加深邃。",
						"french": "Une couche de faim non dissimulée s'est évanouie. Mais le véritable abîme était plus profond.",
						"spanish": "Una capa de hambre sin disimulo se desprendió. Pero el verdadero abismo yacía más profundo.",
						"vietnamese": "Một lớp đói khát trần trụi đã được lột bỏ. Nhưng vực thẳm thật sự còn sâu hơn.",
						"thai": "ความหิวโหยที่เปิดเผยถูกปลดเปลื้องไปชั้นหนึ่ง แต่ขุมนรกที่แท้จริงยังอยู่ลึกกว่านั้น",
						"hindi": "नकाबपोश भूख की एक परत हट गई। लेकिन असली खाई और गहरी थी।"
					},
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "이형의 늑대가 거친 숨을 내쉬었다. 그 눈에는 끝없는 허기만이 맴돌았다.",
						"english": "The deformed wolf panted heavily. Its eyes swirled with endless hunger.",
						"japanese": "異形の狼が荒い息を吐いた。その目には尽きぬ飢えだけが渦巻いていた。",
						"chinese": "异形之狼喘着粗气。眼中只有无尽的饥饿。",
						"french": "Le loup difforme haletait lourdement. Ses yeux n'exprimaient qu'une faim insatiable.",
						"spanish": "El lobo deforme jadeó pesadamente. En sus ojos solo había un hambre infinita.",
						"vietnamese": "Con sói dị dạng thở dốc. Đôi mắt nó chỉ quẩn quanh sự đói khát vô tận.",
						"thai": "หมาป่ารูปร่างประหลาดหอบหายใจอย่างแรง ดวงตาของมันมีแต่ความหิวโหยไม่สิ้นสุด",
						"hindi": "विकृत भेड़िया हांफ रहा था। उसकी आँखों में केवल अंतहीन भूख थी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…배고프다. 무엇이든.",
						"english": "...Hungry. For anything.",
						"japanese": "…腹が減った。何でもいい。",
						"chinese": "……饿。什么都行。",
						"french": "...Faim. De tout.",
						"spanish": "...Hambre. De lo que sea.",
						"vietnamese": "...Đói. Bất cứ thứ gì.",
						"thai": "...หิว ไม่ว่าอะไรก็ตาม",
						"hindi": "...भूख लगी है। कुछ भी।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "더 이상은 안 돼!",
						"english": "No more!",
						"japanese": "もうこれ以上はダメだ！",
						"chinese": "不行了！",
						"french": "Plus jamais !",
						"spanish": "¡No más!",
						"vietnamese": "Không được nữa!",
						"thai": "ไม่ได้แล้ว!",
						"hindi": "और नहीं!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "끝없는 허기가 탐험대를 집어삼켰다.",
						"english": "Endless hunger devoured the expedition team.",
						"japanese": "尽きぬ飢えが探検隊を飲み込んだ。",
						"chinese": "无尽的饥饿吞噬了探险队。",
						"french": "Une faim insatiable a dévoré l'équipe d'expédition.",
						"spanish": "Un hambre infinita devoró al equipo de expedición.",
						"vietnamese": "Cơn đói khát vô tận nuốt chửng đội thám hiểm.",
						"thai": "ความหิวโหยไม่สิ้นสุดกลืนกินทีมสำรวจ",
						"hindi": "अंतहीन भूख ने अभियान दल को निगल लिया।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…아직, 채워지지 않는다.",
						"english": "...Still, not sated.",
						"japanese": "…まだ、満たされない。",
						"chinese": "……还是，无法满足。",
						"french": "...Toujours pas rassasié.",
						"spanish": "...Todavía, no saciado.",
						"vietnamese": "...Vẫn chưa, thỏa mãn.",
						"thai": "...ยังไม่, อิ่มหนำ",
						"hindi": "अभी भी, तृप्त नहीं।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "다시… 다시 도전하겠다!",
						"english": "Again... I will challenge again!",
						"japanese": "再び…再び挑戦する！",
						"chinese": "再来……再挑战一次！",
						"french": "Encore... Je retenterai !",
						"spanish": "¡De nuevo... lo intentaré de nuevo!",
						"vietnamese": "Lại... ta sẽ thử thách lại!",
						"thai": "อีกครั้ง... ข้าจะท้าทายอีกครั้ง!",
						"hindi": "फिर... मैं फिर चुनौती दूँगा!"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			]
		}
	]
} as const;
