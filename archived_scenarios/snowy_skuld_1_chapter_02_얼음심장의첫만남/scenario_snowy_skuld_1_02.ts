export const scenario_snowy_skuld_1_02 = {
	"scenario_id": "snowy_skuld_1_02",
	"order": 2,
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
					"speaker": "narrator",
					"content": {
						"korean": "깊은 빙하 지대. 거대한 얼음벽이 탐험대를 둘러쌌다.",
						"english": "Deep glacier zone. Massive ice walls surrounded the expedition.",
						"japanese": "深い氷河地帯。巨大な氷壁が探検隊を取り囲んだ。",
						"chinese": "深层冰川区域。巨大的冰墙包围着探险队。",
						"french": "Zone glaciaire profonde. Des murs de glace massifs encerclaient l'expédition.",
						"spanish": "Zona glaciar profunda. Enormes paredes de hielo rodearon a la expedición.",
						"vietnamese": "Khu vực băng hà sâu thẳm. Những bức tường băng khổng lồ bao vây đoàn thám hiểm.",
						"thai": "พื้นที่ธารน้ำแข็งลึก กำแพงน้ำแข็งมหึมาล้อมรอบคณะสำรวจ",
						"hindi": "गहरा हिमनद क्षेत्र। विशाल बर्फ़ की दीवारें अभियान दल को घेरे हुए थीं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "여기가… 빙하의 심장부인가?",
						"english": "Is this... the heart of the glacier?",
						"japanese": "ここが…氷河の心臓部なのか？",
						"chinese": "这里是……冰川的心脏吗？",
						"french": "Est-ce ici... le cœur du glacier ?",
						"spanish": "¿Es esto... el corazón del glaciar?",
						"vietnamese": "Đây là... trái tim của băng hà sao?",
						"thai": "ที่นี่...คือใจกลางธารน้ำแข็งงั้นหรือ?",
						"hindi": "क्या यह... हिमनद का हृदय है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						5,
						2
					],
					"speaker": "eira"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "그래. 여기서부터는 모든 감각을 곤두세워야 해.",
						"english": "Yes. From here on, we must sharpen all our senses.",
						"japanese": "そうだ。ここからは、全ての感覚を研ぎ澄まさなければならない。",
						"chinese": "是的。从这里开始，我们必须提高所有感官的警觉。",
						"french": "Oui. À partir d'ici, nous devons aiguiser tous nos sens.",
						"spanish": "Sí. De aquí en adelante, debemos agudizar todos nuestros sentidos.",
						"vietnamese": "Đúng vậy. Từ đây trở đi, chúng ta phải tập trung mọi giác quan.",
						"thai": "ใช่แล้ว จากนี้ไป เราต้องลับคมทุกประสาทสัมผัส",
						"hindi": "हाँ। अब से, हमें अपनी सभी इंद्रियों को तेज़ करना होगा।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "빙하의 움직임을 계속 주시해야 한다.",
						"english": "We must constantly monitor the glacier's movements.",
						"japanese": "氷河の動きを常に監視しなければならない。",
						"chinese": "我们必须持续监视冰川的动向。",
						"french": "Nous devons constamment surveiller les mouvements du glacier.",
						"spanish": "Debemos vigilar constantemente los movimientos del glaciar.",
						"vietnamese": "Chúng ta phải liên tục theo dõi chuyển động của băng hà.",
						"thai": "เราต้องเฝ้าดูการเคลื่อนไหวของธารน้ำแข็งอย่างต่อเนื่อง",
						"hindi": "हमें हिमनद की गतिविधियों पर लगातार नज़र रखनी होगी।"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "그때, 거대한 빙하가 낮은 소리를 내며 흔들렸다.",
						"english": "Then, the massive glacier shook with a low rumble.",
						"japanese": "その時、巨大な氷河が低い音を立てて揺れた。",
						"chinese": "这时，巨大的冰川发出低沉的声音，颤抖起来。",
						"french": "Alors, l'énorme glacier a tremblé avec un grondement sourd.",
						"spanish": "Entonces, el enorme glaciar tembló con un rugido bajo.",
						"vietnamese": "Khi đó, khối băng khổng lồ rung chuyển với một tiếng ầm ì nhỏ.",
						"thai": "ทันใดนั้น ธารน้ำแข็งมหึมาก็สั่นสะเทือนด้วยเสียงคำรามต่ำ",
						"hindi": "तभी, विशाल हिमनद एक धीमी गड़गड़ाहट के साथ हिल उठा।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "뭐지? 지진인가?",
						"english": "What was that? An earthquake?",
						"japanese": "何だ？地震か？",
						"chinese": "那是什么？地震吗？",
						"french": "Qu'est-ce que c'était ? Un tremblement de terre ?",
						"spanish": "¿Qué fue eso? ¿Un terremoto?",
						"vietnamese": "Cái gì vậy? Động đất sao?",
						"thai": "อะไรนะ? แผ่นดินไหวเหรอ?",
						"hindi": "वह क्या था? भूकंप?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "…아니. 이건… 빙하가 살아있는 것 같아.",
						"english": "...No. This... the glacier seems alive.",
						"japanese": "…いや。これは…氷河が生きているみたいだ。",
						"chinese": "…不。这…这冰川仿佛活过来了。",
						"french": "...Non. Ceci... le glacier semble vivant.",
						"spanish": "...No. Esto... el glaciar parece estar vivo.",
						"vietnamese": "...Không. Cái này... sông băng dường như đang sống dậy.",
						"thai": "...ไม่สิ นี่มัน... ธารน้ำแข็งดูเหมือนมีชีวิต",
						"hindi": "...नहीं। यह... ग्लेशियर जीवित लग रहा है।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "갑작스러운 눈보라가 시야를 가렸다. 빙하는 더욱 격렬하게 움직였다.",
						"english": "A sudden blizzard obscured our view. The glacier moved even more violently.",
						"japanese": "突然の吹雪が視界を遮った。氷河はさらに激しく動いた。",
						"chinese": "突如其来的暴风雪遮蔽了视线。冰川的移动更加剧烈了。",
						"french": "Un blizzard soudain obscurcit notre vue. Le glacier bougea encore plus violemment.",
						"spanish": "Una ventisca repentina nubló nuestra vista. El glaciar se movió aún más violentamente.",
						"vietnamese": "Trận bão tuyết bất ngờ che khuất tầm nhìn. Sông băng chuyển động càng dữ dội hơn.",
						"thai": "พายุหิมะกะทันหันบดบังทัศนียภาพ ธารน้ำแข็งเคลื่อนไหวรุนแรงยิ่งขึ้น",
						"hindi": "अचानक आए बर्फीले तूफान ने हमारी नज़र धुंधली कर दी। ग्लेशियर और भी हिंसक रूप से हिलने लगा।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "eira",
					"action": "enter"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "젠장, 시야가 너무 안 좋아. 조심해!",
						"english": "Damn it, visibility's terrible. Watch out!",
						"japanese": "くそ、視界が悪すぎる。気をつけろ！",
						"chinese": "该死，能见度太差了。小心！",
						"french": "Mince, la visibilité est horrible. Attention !",
						"spanish": "Maldita sea, la visibilidad es terrible. ¡Cuidado!",
						"vietnamese": "Chết tiệt, tầm nhìn tệ quá. Cẩn thận!",
						"thai": "แย่จริง ทัศนวิสัยแย่มาก ระวัง!",
						"hindi": "धत्त तेरी, दिखना बहुत खराब है। सावधान!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "빙하가 우리를 덮치려는 것 같아!",
						"english": "It looks like the glacier's trying to swallow us!",
						"japanese": "氷河が俺たちを飲み込もうとしているみたいだ！",
						"chinese": "冰川好像要吞噬我们！",
						"french": "Le glacier semble vouloir nous engloutir !",
						"spanish": "¡Parece que el glaciar intenta tragarnos!",
						"vietnamese": "Sông băng hình như muốn nuốt chửng chúng ta!",
						"thai": "ธารน้ำแข็งเหมือนจะกลืนกินเรา!",
						"hindi": "लगता है ग्लेशियर हमें निगलने की कोशिश कर रहा है!"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "흔들리는 빙하 틈새로, 희미하고 알 수 없는 문양의 그림자가 스쳤다.",
						"english": "Through the swaying glacier's cracks, the shadow of a faint, unknown pattern flickered.",
						"japanese": "揺れる氷河の隙間から、ぼんやりとした未知の文様の影がよぎった。",
						"chinese": "在摇晃的冰川裂缝中，一道模糊不清、图案不明的影子一闪而过。",
						"french": "À travers les fissures du glacier chancelant, l'ombre d'un motif faible et inconnu passa.",
						"spanish": "A través de las grietas del glaciar tembloroso, la sombra de un patrón tenue y desconocido se deslizó.",
						"vietnamese": "Qua kẽ hở của sông băng đang rung chuyển, một bóng mờ với hoa văn khó hiểu lướt qua.",
						"thai": "ผ่านรอยแยกของธารน้ำแข็งที่สั่นคลอน เงาของลวดลายเลือนรางที่ไม่รู้จักปรากฏขึ้น",
						"hindi": "डगमगाते ग्लेशियर की दरारों से, एक धुंधली, अज्ञात पैटर्न की परछाई गुज़री।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "잠깐… 저건 뭐지? 얼음 속에 무언가… 새겨져 있는 것 같아.",
						"english": "Wait... what's that? Something seems... etched into the ice.",
						"japanese": "待て…あれは何だ？氷の中に何か…刻まれているみたいだ。",
						"chinese": "等等…那是什么？冰层里好像…刻着什么东西。",
						"french": "Attends... qu'est-ce que c'est ? Quelque chose semble... gravé dans la glace.",
						"spanish": "Espera... ¿qué es eso? Parece que hay algo... grabado en el hielo.",
						"vietnamese": "Khoan đã... đó là gì? Có vẻ như có thứ gì đó... được khắc vào băng.",
						"thai": "เดี๋ยวก่อน... นั่นอะไร? เหมือนมีบางอย่าง... สลักอยู่ในน้ำแข็ง",
						"hindi": "रुको... वो क्या है? कुछ... बर्फ में खुदा हुआ लग रहा है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "지금은 탈출이 먼저야!",
						"english": "Escape comes first now!",
						"japanese": "今は脱出が先だ！",
						"chinese": "现在，逃脱是首要任务！",
						"french": "L'évasion est la priorité maintenant !",
						"spanish": "¡Ahora, escapar es lo primero!",
						"vietnamese": "Bây giờ, thoát thân là ưu tiên hàng đầu!",
						"thai": "ตอนนี้หนีไปก่อน!",
						"hindi": "अभी तो भागना ज़रूरी है!"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "마치 보이지 않는 거인이 뒤쫓는 듯한 압박감이 느껴졌다.",
						"english": "A pressure was felt, as if an invisible giant was chasing us.",
						"japanese": "まるで、見えない巨人が追いかけてくるかのような圧迫感を感じた。",
						"chinese": "感到一股压迫感，仿佛有无形的巨人正在追赶着我们。",
						"french": "Une pression se fit sentir, comme si un géant invisible nous poursuivait.",
						"spanish": "Se sentía una presión, como si un gigante invisible nos persiguiera.",
						"vietnamese": "Cảm thấy một áp lực, như thể một gã khổng lồ vô hình đang đuổi theo chúng ta.",
						"thai": "รู้สึกถึงแรงกดดัน ราวกับว่ามียักษ์ที่มองไม่เห็นกำลังไล่ตามเราอยู่",
						"hindi": "एक दबाव महसूस हुआ, मानो कोई अदृश्य विशालकाय जीव हमारा पीछा कर रहा हो।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"spot": [
						4,
						2
					]
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "이상해… 이 공격은 너무나… 의도적이야.",
						"english": "Strange... this attack is too... deliberate.",
						"japanese": "おかしい…この攻撃はあまりにも…意図的だ。",
						"chinese": "奇怪…这次攻击太过…刻意了。",
						"french": "Étrange... cette attaque est trop... délibérée.",
						"spanish": "Extraño... este ataque es demasiado... intencional.",
						"vietnamese": "Lạ thật... cuộc tấn công này quá... có chủ đích.",
						"thai": "แปลกจัง... การโจมตีนี้มัน... จงใจเกินไป",
						"hindi": "अजीब है... यह हमला बहुत... जानबूझकर किया गया है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "정말 누가 우리를 노리고 있다는 거야?",
						"english": "Is someone really targeting us?",
						"japanese": "本当に誰かが俺たちを狙っているのか？",
						"chinese": "真的有人在针对我们吗？",
						"french": "Quelqu'un nous cible-t-il vraiment ?",
						"spanish": "¿Alguien nos está atacando de verdad?",
						"vietnamese": "Thật sự có ai đó đang nhắm vào chúng ta sao?",
						"thai": "มีใครกำลังจงใจเล่นงานเราอยู่เหรอ?",
						"hindi": "क्या वाकई कोई हमें निशाना बना रहा है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "…단순한 자연 현상이 아니야. 무언가가 우리를 이곳으로 유인하는 것 같아.",
						"english": "...This isn't just a natural phenomenon. Something is luring us here.",
						"japanese": "…ただの自然現象じゃない。何かが私たちをここへ誘い込んでいるようだ。",
						"chinese": "…这不是单纯的自然现象。似乎有什么东西在引诱我们来到这里。",
						"french": "...Ce n'est pas un simple phénomène naturel. Quelque chose semble nous attirer ici.",
						"spanish": "...Esto no es solo un fenómeno natural. Algo nos está atrayendo aquí.",
						"vietnamese": "...Đây không chỉ là hiện tượng tự nhiên. Có vẻ như có thứ gì đó đang dụ chúng ta đến đây.",
						"thai": "...นี่ไม่ใช่แค่ปรากฏการณ์ธรรมชาติธรรมดา มีบางอย่างกำลังล่อลวงเรามาที่นี่",
						"hindi": "...यह सिर्फ एक प्राकृतिक घटना नहीं है। कुछ हमें यहाँ खींच रहा है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "대장… 기시감이 들어요. 전에 겪었던….",
						"english": "Captain... I'm getting a sense of déjà vu. Like before...",
						"japanese": "隊長…デジャヴを感じます。以前にもあったような…。",
						"chinese": "队长…我有一种似曾相识的感觉。就像以前经历过一样…",
						"french": "Capitaine... J'ai un sentiment de déjà-vu. Comme avant...",
						"spanish": "Capitán... Tengo una sensación de déjà vu. Como antes...",
						"vietnamese": "Thủ lĩnh... Tôi có cảm giác như đã từng. Giống như trước đây...",
						"thai": "หัวหน้า... ผมรู้สึกเหมือนเคยเห็นมาก่อน เหมือนเมื่อก่อน...",
						"hindi": "कप्तान... मुझे déjà vu हो रहा है। पहले जैसा..."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "응. 마치 누군가 우리를 지켜보고 있는 듯한 느낌.",
						"english": "Yes. It feels like someone is watching us.",
						"japanese": "ああ。まるで誰かに見られているような感じだ。",
						"chinese": "嗯。感觉就像有人在盯着我们。",
						"french": "Oui. On dirait que quelqu'un nous observe.",
						"spanish": "Sí. Siento como si alguien nos estuviera observando.",
						"vietnamese": "Đúng vậy. Cảm giác như có ai đó đang dõi theo chúng ta.",
						"thai": "ใช่. รู้สึกเหมือนมีใครบางคนกำลังเฝ้าดูเราอยู่",
						"hindi": "हाँ। ऐसा लगता है जैसे कोई हमें देख रहा है।"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "빙하의 울림은 절규처럼 변했다. 돌아갈 길은 이미 사라진 듯했다.",
						"english": "The glacier's roar turned into a scream. The way back seemed to have vanished.",
						"japanese": "氷河の轟きは、断末魔の叫びへと変わった。戻る道は、すでに消え去ったようだった。",
						"chinese": "冰川的轰鸣声变成了尖叫。回去的路似乎已经消失了。",
						"french": "Le rugissement du glacier se transforma en un cri. Le chemin du retour semblait avoir disparu.",
						"spanish": "El rugido del glaciar se convirtió en un grito. El camino de regreso parecía haber desaparecido.",
						"vietnamese": "Tiếng vọng của sông băng biến thành tiếng thét. Con đường trở về dường như đã biến mất.",
						"thai": "เสียงกึกก้องของธารน้ำแข็งกลายเป็นเสียงกรีดร้อง ทางกลับดูเหมือนจะหายไปแล้ว",
						"hindi": "ग्लेशियर की गर्जना चीख में बदल गई। वापसी का रास्ता गायब हो गया था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "eira",
					"spot": [
						2,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "우리는 지금… 미지의 존재와 대치하고 있어.",
						"english": "We're currently... facing an unknown entity.",
						"japanese": "我々は今…未知の存在と対峙している。",
						"chinese": "我们现在…正在与未知的存在对峙。",
						"french": "Nous sommes actuellement... face à une entité inconnue.",
						"spanish": "Ahora mismo... nos enfrentamos a una entidad desconocida.",
						"vietnamese": "Chúng ta hiện đang... đối đầu với một thực thể không xác định.",
						"thai": "ตอนนี้เรากำลัง... เผชิญหน้ากับสิ่งลึกลับ",
						"hindi": "हम इस समय... एक अज्ञात सत्ता का सामना कर रहे हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "젠장! 빙하가 우리를 가두고 있어!",
						"english": "Damn it! The glacier is trapping us!",
						"japanese": "くそっ！氷河が俺たちを閉じ込めている！",
						"chinese": "该死！冰川正在困住我们！",
						"french": "Merde ! Le glacier nous emprisonne !",
						"spanish": "¡Maldita sea! ¡El glaciar nos está atrapando!",
						"vietnamese": "Chết tiệt! Sông băng đang giam cầm chúng ta!",
						"thai": "ให้ตายสิ! ธารน้ำแข็งกำลังขังเรา!",
						"hindi": "धिक्कार है! ग्लेशियर हमें फँसा रहा है!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "빙하의 움직임이… 패턴이 있어. 우연이 아니야.",
						"english": "The glacier's movement... it has a pattern. It's not random.",
						"japanese": "氷河の動きに…パターンがある。偶然じゃない。",
						"chinese": "冰川的移动…有规律。这不是巧合。",
						"french": "Le mouvement du glacier... il a un motif. Ce n'est pas un hasard.",
						"spanish": "El movimiento del glaciar... tiene un patrón. No es una coincidencia.",
						"vietnamese": "Chuyển động của sông băng... có một kiểu mẫu. Không phải ngẫu nhiên.",
						"thai": "การเคลื่อนไหวของธารน้ำแข็ง... มันมีรูปแบบ ไม่ใช่เรื่องบังเอิญ",
						"hindi": "ग्लेशियर की हलचल... इसमें एक पैटर्न है। यह संयोग नहीं है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_2",
					"content": {
						"korean": "대장, 설마… 이 빙하 자체가…",
						"english": "Captain, don't tell me... this glacier itself...",
						"japanese": "隊長、まさか…この氷河自体が…",
						"chinese": "队长，难道…这座冰川本身就是…",
						"french": "Capitaine, ne me dites pas... ce glacier lui-même...",
						"spanish": "Capitán, no me diga... que este glaciar en sí...",
						"vietnamese": "Thủ lĩnh, đừng nói là... chính con sông băng này...",
						"thai": "หัวหน้า อย่าบอกนะว่า... ธารน้ำแข็งนี้เอง...",
						"hindi": "कप्तान, कहीं... यह ग्लेशियर ही..."
					}
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "…아직은 모르겠어. 하지만 이 모든 것엔 이유가 있을 거야.",
						"english": "...I don't know yet. But there must be a reason for all of this.",
						"japanese": "…まだ分からない。だが、この全てには理由があるはずだ。",
						"chinese": "…我还不清楚。但这一切都应该有原因。",
						"french": "...Je ne sais pas encore. Mais tout cela doit avoir une raison.",
						"spanish": "...Todavía no lo sé. Pero todo esto debe tener una razón.",
						"vietnamese": "...Tôi vẫn chưa biết. Nhưng tất cả những điều này chắc chắn có lý do.",
						"thai": "...ฉันยังไม่รู้ แต่ทั้งหมดนี้ต้องมีเหตุผล",
						"hindi": "...मुझे अभी तक नहीं पता। लेकिन इन सबका कोई कारण तो होगा।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "가장 깊은 곳, 거대한 얼음 덩어리가 서서히 모습을 드러냈다.",
						"english": "In the deepest reaches, a colossal mass of ice slowly revealed itself.",
						"japanese": "最も深い場所で、巨大な氷の塊がゆっくりと姿を現した。",
						"chinese": "在最深处，一块巨大的冰块慢慢显露出来。",
						"french": "Dans les profondeurs les plus reculées, une masse colossale de glace se révéla lentement.",
						"spanish": "En lo más profundo, una masa colosal de hielo se reveló lentamente.",
						"vietnamese": "Tại nơi sâu nhất, một khối băng khổng lồ từ từ lộ diện.",
						"thai": "ในส่วนที่ลึกที่สุด มวลน้ำแข็งขนาดมหึมากำลังค่อยๆ เผยโฉมออกมา",
						"hindi": "सबसे गहरी जगहों में, बर्फ का एक विशाल पिंड धीरे-धीरे प्रकट हुआ।"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "침입자들… 감히 나의 영역을 더럽히는가.",
						"english": "Intruders... How dare you defile my domain.",
						"japanese": "侵入者め… よくも私の領域を汚したな。",
						"chinese": "入侵者……竟敢玷污我的领域。",
						"french": "Intrus... Comment osez-vous souiller mon domaine.",
						"spanish": "¿Intrusos...? ¿Cómo osáis profanar mi dominio?",
						"vietnamese": "Những kẻ xâm nhập... Dám cả gan làm ô uế lãnh địa của ta.",
						"thai": "ผู้บุกรุก... กล้าดียังไงมาแปดเปื้อนอาณาเขตของข้า.",
						"hindi": "घुसपैठिए... मेरे क्षेत्र को अपवित्र करने की तुम्हारी हिम्मत कैसे हुई।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "네가… 이 모든 것을 움직이는 존재인가?",
						"english": "Are you... the one who moves all this?",
						"japanese": "お前が… この全てを動かす存在なのか？",
						"chinese": "你是……驱动这一切的存在吗？",
						"french": "Es-tu... celui qui fait bouger tout cela ?",
						"spanish": "¿Eres tú... quien mueve todo esto?",
						"vietnamese": "Ngươi... là kẻ điều khiển tất cả những thứ này sao?",
						"thai": "เจ้า... คือผู้ที่ขับเคลื่อนสิ่งเหล่านี้ทั้งหมดหรือ?",
						"hindi": "क्या तुम... वह हो जो यह सब चलाता है?"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "죽음으로… 경고를 새겨주마.",
						"english": "By death... I shall carve this warning.",
						"japanese": "死をもって… 警告を刻んでやろう。",
						"chinese": "以死亡……铭刻警告。",
						"french": "Par la mort... je graverai cet avertissement.",
						"spanish": "Con la muerte... grabaré esta advertencia.",
						"vietnamese": "Bằng cái chết... ta sẽ khắc ghi lời cảnh báo này.",
						"thai": "ด้วยความตาย... ข้าจะสลักคำเตือนนี้ไว้.",
						"hindi": "मृत्यु से... मैं इस चेतावनी को गढ़ूँगा।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "피하지 않아! 상대해주마!",
						"english": "I won't avoid it! I'll face you!",
						"japanese": "逃げない！相手をしてやる！",
						"chinese": "我不会逃避！我会应战！",
						"french": "Je n'esquiverai pas ! Je t'affronterai !",
						"spanish": "¡No lo evitaré! ¡Te enfrentaré!",
						"vietnamese": "Ta sẽ không tránh! Ta sẽ đối mặt với ngươi!",
						"thai": "ข้าจะไม่หลบ! ข้าจะรับมือเจ้า!",
						"hindi": "मैं टलूंगा नहीं! मैं तुम्हारा सामना करूँगा!"
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "빙하가 모든 것을 집어삼켰다. 냉혹한 힘 앞에 무릎 꿇었다.",
						"english": "The glacier consumed everything. We knelt before its merciless power.",
						"japanese": "氷河が全てを飲み込んだ。冷酷な力の前にひざまずいた。",
						"chinese": "冰川吞噬了一切。我们在冷酷的力量面前屈服了。",
						"french": "Le glacier a tout englouti. Nous nous sommes agenouillés devant sa puissance impitoyable.",
						"spanish": "El glaciar lo consumió todo. Nos arrodillamos ante su poder implacable.",
						"vietnamese": "Sông băng nuốt chửng mọi thứ. Chúng ta đã quỳ gối trước sức mạnh tàn nhẫn của nó.",
						"thai": "ธารน้ำแข็งกลืนกินทุกสิ่ง เราคุกเข่าต่อหน้าพลังอันไร้ความปรานี.",
						"hindi": "ग्लेशियर ने सब कुछ निगल लिया। हम उसकी निर्दयी शक्ति के सामने घुटने टेक गए।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "미약한 존재들… 어둠 속으로… 사라져라.",
						"english": "Weaklings… vanish into darkness.",
						"japanese": "弱き者たち… 闇の中へ… 消え去れ。",
						"chinese": "弱小的存在… 消失于黑暗之中。",
						"french": "Faibles créatures… disparaissez dans les ténèbres.",
						"spanish": "Seres insignificantes… desaparezcan en la oscuridad.",
						"vietnamese": "Những kẻ yếu ớt… hãy biến mất vào bóng tối.",
						"thai": "สิ่งมีชีวิตอันอ่อนแอ… จงหายไปในความมืดมิด",
						"hindi": "कमजोर प्राणी… अंधेरे में… गायब हो जाओ।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 여기서 끝낼 순 없어!",
						"english": "Damn it… I can't end it here!",
						"japanese": "くそ… ここで終わらせるわけにはいかない！",
						"chinese": "该死… 不能就此结束！",
						"french": "Maudit… je ne peux pas en finir ici !",
						"spanish": "Maldita sea… ¡no puedo terminar aquí!",
						"vietnamese": "Chết tiệt… không thể kết thúc ở đây được!",
						"thai": "บ้าจริง… จะจบแค่นี้ไม่ได้!",
						"hindi": "धिक्कार है… मैं इसे यहाँ खत्म नहीं कर सकता!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "포기하지 마! 진실은… 반드시 밝혀낼 거야!",
						"english": "Don't give up! The truth… will surely be revealed!",
						"japanese": "諦めるな！真実は… 必ず明らかになる！",
						"chinese": "别放弃！真相… 终将大白！",
						"french": "N'abandonne pas ! La vérité… sera forcément révélée !",
						"spanish": "¡No te rindas! La verdad… ¡sin duda saldrá a la luz!",
						"vietnamese": "Đừng bỏ cuộc! Sự thật… nhất định sẽ được phơi bày!",
						"thai": "อย่ายอมแพ้! ความจริง… จะถูกเปิดเผยอย่างแน่นอน!",
						"hindi": "हार मत मानो! सच्चाई… निश्चित रूप से सामने आएगी!"
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 빙하의 움직임이 멎었다. 싸늘한 침묵이 다시 숲을 지배했다.",
						"english": "The movement of the colossal glacier ceased. Chilling silence once again dominated the forest.",
						"japanese": "巨大な氷河の動きが止まった。冷たい沈黙が再び森を支配した。",
						"chinese": "巨大的冰川停止了移动。冰冷的寂静再次笼罩森林。",
						"french": "Le mouvement du glacier colossal cessa. Un silence glacial domina de nouveau la forêt.",
						"spanish": "El movimiento del colosal glaciar cesó. Un silencio helado dominó de nuevo el bosque.",
						"vietnamese": "Chuyển động của sông băng khổng lồ đã dừng lại. Sự im lặng lạnh lẽo một lần nữa bao trùm khu rừng.",
						"thai": "การเคลื่อนไหวของธารน้ำแข็งขนาดยักษ์หยุดลง ความเงียบงันที่เย็นยะเยือกเข้าครอบงำป่าอีกครั้ง.",
						"hindi": "विशाल ग्लेशियर की गति थम गई। सर्द चुप्पी ने एक बार फिर जंगल पर राज किया।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…어리석은… 진실은… 얼음 속에… 잠들어 있을 뿐…",
						"english": "...Foolish... The truth... merely slumbers... within the ice...",
						"japanese": "…愚かな… 真実は… 氷の中に… 眠っているだけだ…",
						"chinese": "……愚蠢……真相……只是……沉睡在冰中……",
						"french": "...Stupide... La vérité... ne fait que sommeiller... dans la glace...",
						"spanish": "...Necios... La verdad... solo duerme... dentro del hielo...",
						"vietnamese": "...Thật ngu ngốc... Sự thật... chỉ là... đang ngủ yên... trong băng...",
						"thai": "...โง่เขลา... ความจริง... เพียงแค่... หลับใหล... อยู่ในน้ำแข็ง...",
						"hindi": "...मूर्ख... सत्य... केवल... बर्फ में... सो रहा है..."
					}
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "진실…? 얼음 속에… 무엇이 있다는 거지?",
						"english": "Truth...? What lies... within the ice?",
						"japanese": "真実…？氷の中に… 何があるというのだ？",
						"chinese": "真相……？冰中……有什么？",
						"french": "La vérité...? Qu'y a-t-il... dans la glace ?",
						"spanish": "¿Verdad...? ¿Qué hay... dentro del hielo?",
						"vietnamese": "Sự thật...? Có gì... trong băng chứ?",
						"thai": "ความจริง...? มีอะไร... อยู่ในน้ำแข็งกันแน่?",
						"hindi": "सत्य...? बर्फ में... क्या है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이겼어! 하지만… 왠지 찜찜해.",
						"english": "We won! But... I feel uneasy somehow.",
						"japanese": "勝った！でも… なんだか釈然としない。",
						"chinese": "赢了！但是……总觉得有些不对劲。",
						"french": "On a gagné ! Mais... je me sens mal à l'aise.",
						"spanish": "¡Ganamos! Pero... me siento incómodo de alguna manera.",
						"vietnamese": "Thắng rồi! Nhưng... sao ta lại cảm thấy bứt rứt thế này.",
						"thai": "เราชนะ! แต่... ข้ารู้สึกไม่สบายใจเลย.",
						"hindi": "हम जीत गए! लेकिन... मुझे किसी तरह अजीब लग रहा है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "빙하의 경고는 끝났지만, 더 깊은 미스터리가 탐험대를 기다리고 있었다.",
						"english": "The glacier's warning had ended, but a deeper mystery awaited the expedition.",
						"japanese": "氷河の警告は終わったが、さらに深い謎が探検隊を待ち受けていた。",
						"chinese": "冰川的警告结束了，但更深的谜团正等待着探险队。",
						"french": "L'avertissement du glacier était terminé, mais un mystère plus profond attendait l'expédition.",
						"spanish": "La advertencia del glaciar había terminado, pero un misterio más profundo esperaba a la expedición.",
						"vietnamese": "Lời cảnh báo của sông băng đã kết thúc, nhưng một bí ẩn sâu sắc hơn đang chờ đợi đoàn thám hiểm.",
						"thai": "คำเตือนของธารน้ำแข็งสิ้นสุดลงแล้ว แต่ความลึกลับที่ลึกซึ้งกว่ากำลังรอคอยคณะสำรวจอยู่.",
						"hindi": "ग्लेशियर की चेतावनी समाप्त हो गई थी, लेकिन एक गहरा रहस्य अभियान दल का इंतजार कर रहा था।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"북방의 얼어붙은 심장부. 빙하의 거대한 입이 탐험대를 삼켰다.",
			"고요한 침묵은 오래가지 않았다. 거대한 얼음이 살아 숨 쉬듯 꿈틀거렸다.",
			"에이라의 눈빛은 흔들림 없었다. 그러나 모두 직감했다. 이건 단순한 자연현상이 아니다.",
			"보이지 않는 그림자가, 발자국마다 따라붙는 듯했다."
		],
		"english": [
			"The frozen heart of the north. The glacier's massive maw swallowed the expedition.",
			"The calm silence didn't last. The massive ice writhed as if alive.",
			"Eira's gaze was unwavering. Yet, everyone instinctively knew. This was no mere natural phenomenon.",
			"An unseen shadow seemed to follow every footprint."
		],
		"japanese": [
			"北方の凍てつく心臓部。巨大な氷河の口が探検隊を飲み込んだ。",
			"静寂は長くは続かなかった。巨大な氷が生きているように蠢いた。",
			"エイラの瞳は揺るがなかった。しかし、誰もが直感した。これは単なる自然現象ではない。",
			"見えない影が、足跡一つ一つに付き纏うようだった。"
		],
		"chinese": [
			"北方冰封的心脏。巨大的冰川之口吞噬了探险队。",
			"寂静没有持续多久。巨大的冰块仿佛活物般蠕动着。",
			"艾拉的目光坚定不移。然而，所有人都本能地意识到。这绝非简单的自然现象。",
			"一个无形的影子，似乎紧随着每一个脚印。"
		],
		"french": [
			"Le cœur gelé du nord. La gueule béante du glacier a englouti l'expédition.",
			"Le silence calme ne dura pas. La glace massive se tordait comme si elle était vivante.",
			"Le regard d'Eira était inébranlable. Pourtant, tous savaient instinctivement. Ce n'était pas un simple phénomène naturel.",
			"Une ombre invisible semblait suivre chaque pas."
		],
		"spanish": [
			"El corazón helado del norte. La inmensa boca del glaciar se tragó a la expedición.",
			"El silencio apacible no duró. El hielo macizo se retorcía como si estuviera vivo.",
			"La mirada de Eira era inquebrantable. Sin embargo, todos intuyeron. Esto no era un simple fenómeno natural.",
			"Una sombra invisible parecía seguir cada huella."
		],
		"vietnamese": [
			"Trái tim băng giá của phương Bắc. Miệng băng hà khổng lồ nuốt chửng đoàn thám hiểm.",
			"Sự im lặng không kéo dài. Khối băng khổng lồ cựa quậy như thể còn sống.",
			"Ánh mắt của Eira kiên định. Tuy nhiên, mọi người đều linh cảm được. Đây không phải là hiện tượng tự nhiên đơn thuần.",
			"Một bóng tối vô hình dường như bám theo từng bước chân."
		],
		"thai": [
			"ใจกลางที่เยือกแข็งของทางเหนือ ปากธารน้ำแข็งมหึมากินคณะสำรวจเข้าไป",
			"ความเงียบสงบอยู่ไม่นาน น้ำแข็งมหึมากระดุกกระดิกราวกับมีชีวิต",
			"สายตาของเอราไม่หวั่นไหว แต่ทุกคนก็รู้โดยสัญชาตญาณ นี่ไม่ใช่แค่ปรากฏการณ์ธรรมชาติ",
			"เงาที่มองไม่เห็นดูเหมือนจะตามติดทุกย่างก้าว"
		],
		"hindi": [
			"उत्तर का जमा हुआ हृदय। विशालकाय हिमनद के मुँह ने अभियान दल को निगल लिया।",
			"शांत चुप्पी ज़्यादा देर नहीं रही। विशाल बर्फ़ ऐसे मरोड़ खा रही थी मानो जीवित हो।",
			"एरा की नज़र अडिग थी। फिर भी, हर कोई सहज रूप से जानता था। यह कोई साधारण प्राकृतिक घटना नहीं थी।",
			"एक अदृश्य परछाई, हर पदचिह्न का पीछा करती हुई लग रही थी।"
		]
	}
} as const;
