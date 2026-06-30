export const scenario_snowy_vyrda_0_02 = {
	"scenario_id": "snowy_vyrda_0_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"hild": {
			"id": "mon_6f20c96a-bf07-4aae-b37c-da898a8336e8",
			"name": {
				"korean": "힐드",
				"english": "Hild",
				"japanese": "ヒルド",
				"chinese": "希尔德",
				"french": "Hild",
				"spanish": "Hild",
				"vietnamese": "Hild",
				"thai": "ฮิลด์",
				"hindi": "हिल्ड"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/722a86fd-2903-4688-3f04-db8241ed0e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/af3d96ba-e571-4132-fede-cd415bd15c00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "hild",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "왔어요. 비석 내부로 들어왔군요.",
						"english": "You've arrived. Entered the stele's interior.",
						"japanese": "来ましたね。石碑の内部へ入りました。",
						"chinese": "来了。进入石碑内部了呢。",
						"french": "Vous êtes là. Vous êtes entré dans l'intérieur de la stèle.",
						"spanish": "Llegaste. Has entrado al interior de la estela.",
						"vietnamese": "Đến rồi. Đã vào bên trong bia đá.",
						"thai": "มาแล้วสินะ เข้ามาในศิลาจารึกแล้ว",
						"hindi": "आप आ गए। शिलालेख के अंदर आ गए हैं।"
					},
					"speaker": "hild"
				},
				{
					"content": {
						"korean": "이게 예언이라는 건가?",
						"english": "Is this the prophecy?",
						"japanese": "これが予言なのか？",
						"chinese": "这就是预言吗？",
						"french": "C'est ça la prophétie ?",
						"spanish": "¿Es esto la profecía?",
						"vietnamese": "Đây là lời tiên tri ư?",
						"thai": "นี่คือคำพยากรณ์หรือ?",
						"hindi": "क्या यह भविष्यवाणी है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "hild",
					"content": {
						"korean": "네. 하지만 파편적인 조각들 뿐이에요. 조심해야 합니다.",
						"english": "Yes. But they are only fragmented pieces. You must be careful.",
						"japanese": "はい。しかし断片的なものだけです。注意してください。",
						"chinese": "是的。但只有碎片。必须小心。",
						"french": "Oui. Mais ce ne sont que des fragments. Vous devez être prudent.",
						"spanish": "Sí. Pero son solo fragmentos. Debes tener cuidado.",
						"vietnamese": "Vâng. Nhưng chỉ là những mảnh vỡ. Phải cẩn thận.",
						"thai": "ครับ/ค่ะ แต่เป็นเพียงเศษเสี้ยวเท่านั้น คุณต้องระมัดระวัง",
						"hindi": "हाँ। लेकिन ये केवल खंडित टुकड़े हैं। आपको सावधान रहना होगा।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "뭘 조심하라는 거지?",
						"english": "What should I be careful about?",
						"japanese": "何を注意しろというんだ？",
						"chinese": "要小心什么？",
						"french": "De quoi dois-je me méfier ?",
						"spanish": "¿De qué debo tener cuidado?",
						"vietnamese": "Phải cẩn thận điều gì?",
						"thai": "ให้ระมัดระวังอะไร?",
						"hindi": "किस बात पर सावधान रहना है?"
					}
				},
				{
					"speaker": "hild",
					"content": {
						"korean": "진실은… 때로는 파멸을 부르니까요.",
						"english": "Truth... sometimes brings ruin.",
						"japanese": "真実は… 時として破滅を招きますから。",
						"chinese": "真相… 有时会带来毁灭。",
						"french": "La vérité... parfois elle mène à la ruine.",
						"spanish": "La verdad... a veces trae la ruina.",
						"vietnamese": "Sự thật... đôi khi mang đến sự hủy diệt.",
						"thai": "ความจริง... บางครั้งก็นำมาซึ่งหายนะ",
						"hindi": "सत्य... कभी-कभी विनाश लाता है।"
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "hild",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "여기 보세요. 부러진 지팡이 끝에 새겨진 룬입니다.",
						"english": "Look here. Runes carved on the tip of a broken staff.",
						"japanese": "ここを見てください。折れた杖の先に刻まれたルーンです。",
						"chinese": "看这里。这是刻在断裂法杖尖端的符文。",
						"french": "Regardez ici. Ce sont des runes gravées sur la pointe d'un bâton brisé.",
						"spanish": "Mira aquí. Son runas grabadas en la punta de un bastón roto.",
						"vietnamese": "Nhìn đây. Là những chữ rune khắc trên đầu cây gậy gãy.",
						"thai": "ดูนี่สิ นี่คือรูนที่สลักไว้บนปลายไม้เท้าที่หัก",
						"hindi": "यहाँ देखें। टूटी हुई छड़ी के सिरे पर खुदे हुए रून्स।"
					},
					"speaker": "hild"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이게 뭔데?",
						"english": "What is this?",
						"japanese": "これ、何？",
						"chinese": "这是什么？",
						"french": "C'est quoi ça ?",
						"spanish": "¿Qué es esto?",
						"vietnamese": "Cái gì đây?",
						"thai": "นี่มันอะไรกัน?",
						"hindi": "यह क्या है?"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "hild",
					"content": {
						"korean": "'봉인'을 뜻해요. 비르다가 뭔가를 강제로 가두고 있다는 결정적 증거죠.",
						"english": "It means 'Seal'. This is definitive proof that Virda is forcibly imprisoning something.",
						"japanese": "「封印」を意味します。ビルダが何かを強制的に閉じ込めている決定的な証拠です。",
						"chinese": "意思是“封印”。这是维尔达强行囚禁某物的决定性证据。",
						"french": "Cela signifie 'Sceau'. C'est la preuve irréfutable que Virda emprisonne quelque chose de force.",
						"spanish": "Significa 'Sello'. Es la prueba definitiva de que Virda está aprisionando algo a la fuerza.",
						"vietnamese": "Nó có nghĩa là 'Phong ấn'. Đây là bằng chứng quyết định rằng Virda đang cưỡng chế giam giữ thứ gì đó.",
						"thai": "มันหมายถึง 'ผนึก' นี่คือหลักฐานที่ชัดเจนว่าเวิร์ดากำลังกักขังบางสิ่งบางอย่างอย่างรุนแรง",
						"hindi": "इसका मतलब है 'सील'। यह निर्णायक प्रमाण है कि विरदा किसी चीज़ को जबरन कैद कर रहा है।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "비르다가… 우리를 속인 거야?",
						"english": "Virda... deceived us?",
						"japanese": "ビルダが… 私たちを欺いたの？",
						"chinese": "维尔达… 欺骗了我们？",
						"french": "Virda... nous a trompés ?",
						"spanish": "¿Virda... nos engañó?",
						"vietnamese": "Virda... đã lừa dối chúng ta?",
						"thai": "เวิร์ด้า... หลอกเรางั้นเหรอ?",
						"hindi": "विरदा... ने हमें धोखा दिया?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "hild",
					"content": {
						"korean": "속박자의 오만은 끝이 없어요.",
						"english": "The Binder's arrogance knows no bounds.",
						"japanese": "縛る者の傲慢は果てしありません。",
						"chinese": "束缚者的傲慢无止境。",
						"french": "L'arrogance du Lieur est sans limites.",
						"spanish": "La arrogancia del Atador no tiene límites.",
						"vietnamese": "Sự ngạo mạn của Kẻ Trói Buộc là vô tận.",
						"thai": "ความหยิ่งยโสของผู้พันธนาการไม่มีที่สิ้นสุด",
						"hindi": "बांधने वाले का अहंकार असीमित है।"
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "hild"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "hild",
					"content": {
						"korean": "이 문헌 조각들은 비르다를 '절망의 수호자'로 기록했어요.",
						"english": "These fragmented texts record Virda as the 'Guardian of Despair'.",
						"japanese": "これらの文書の断片は、ビルダを「絶望の守護者」と記しています。",
						"chinese": "这些文献碎片将维尔达记载为“绝望的守护者”。",
						"french": "Ces fragments de textes décrivent Virda comme le 'Gardien du Désespoir'.",
						"spanish": "Estos fragmentos de textos registran a Virda como el 'Guardián de la Desesperación'.",
						"vietnamese": "Những mảnh tài liệu này ghi chép Virda là 'Người Bảo Hộ của Tuyệt Vọng'.",
						"thai": "ชิ้นส่วนเอกสารเหล่านี้บันทึกว่าเวิร์ด้าคือ 'ผู้พิทักษ์แห่งความสิ้นหวัง'",
						"hindi": "ये खंडित ग्रंथ विरदा को 'निराशा का संरक्षक' बताते हैं।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "수호자… 위선이었군.",
						"english": "Guardian... it was hypocrisy.",
						"japanese": "守護者… 偽善だったか。",
						"chinese": "守护者… 原来是伪善。",
						"french": "Gardien... c'était de l'hypocrisie.",
						"spanish": "Guardián... fue hipocresía.",
						"vietnamese": "Người bảo hộ... thật là đạo đức giả.",
						"thai": "ผู้พิทักษ์... มันเป็นแค่หน้ากาก",
						"hindi": "संरक्षक... यह पाखंड था।"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "강한 에너지 파동이 탐험대를 밀쳐냈다. 명백한 적의였다.",
						"english": "A strong energy wave pushed back the expedition. It was clear hostility.",
						"japanese": "強いエネルギーの波動が探検隊を押し返した。明白な敵意だった。",
						"chinese": "强大的能量波动将探险队推开。这是明显的敌意。",
						"french": "Une forte onde d'énergie a repoussé l'expédition. C'était une hostilité manifeste.",
						"spanish": "Una fuerte onda de energía repelió a la expedición. Era una hostilidad manifiesta.",
						"vietnamese": "Một luồng năng lượng mạnh đã đẩy lùi đoàn thám hiểm. Đó là sự thù địch rõ ràng.",
						"thai": "คลื่นพลังงานที่รุนแรงผลักคณะสำรวจกลับไป นี่คือความเป็นศัตรูที่ชัดเจน",
						"hindi": "एक शक्तिशाली ऊर्जा तरंग ने अभियान दल को पीछे धकेल दिया। यह स्पष्ट शत्रुता थी।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "감히 우리를 막아? 이 비석의 방어 기제를 전부 부숴버려!",
						"english": "How dare it stop us? Destroy all defense mechanisms of this monument!",
						"japanese": "よくも我々を阻むな！この石碑の防御機構を全て破壊しろ！",
						"chinese": "竟敢阻止我们？摧毁这块石碑的所有防御机制！",
						"french": "Comment ose-t-il nous arrêter ? Détruisez tous les mécanismes de défense de ce monument !",
						"spanish": "¿Cómo se atreve a detenernos? ¡Destruid todos los mecanismos de defensa de este monumento!",
						"vietnamese": "Dám ngăn cản chúng ta sao? Phá hủy tất cả cơ chế phòng thủ của bia đá này!",
						"thai": "บังอาจมาขวางเราหรือ? ทำลายกลไกป้องกันทั้งหมดของอนุสาวรีย์นี้ซะ!",
						"hindi": "हमारी हिम्मत कैसे हुई रोकने की? इस स्मारक के सभी रक्षा तंत्रों को नष्ट कर दो!"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "그래야만, 진실을 마주할 수 있을 거예요.",
						"english": "Only then can we face the truth.",
						"japanese": "そうして初めて、真実と向き合えるでしょう。",
						"chinese": "只有这样，我们才能面对真相。",
						"french": "Ce n'est qu'ainsi que nous pourrons affronter la vérité.",
						"spanish": "Solo así podremos enfrentar la verdad.",
						"vietnamese": "Chỉ khi đó, chúng ta mới có thể đối mặt với sự thật.",
						"thai": "เพียงเท่านี้ เราจึงจะเผชิญหน้ากับความจริงได้",
						"hindi": "तभी हम सच्चाई का सामना कर पाएंगे।"
					},
					"speaker": "hild",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "hild"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "hild",
					"content": {
						"korean": "이제 되돌릴 수 없어요. 이 길의 끝은 오직 파괴 뿐.",
						"english": "There's no turning back now. The end of this path is only destruction.",
						"japanese": "もう後戻りはできません。この道の先には、ただ破壊あるのみ。",
						"chinese": "现在无法回头了。这条路的尽头只有毁灭。",
						"french": "On ne peut plus revenir en arrière. Le bout de ce chemin n'est que destruction.",
						"spanish": "Ya no hay vuelta atrás. El final de este camino es solo destrucción.",
						"vietnamese": "Giờ không thể quay lại được nữa. Cuối con đường này chỉ có sự hủy diệt.",
						"thai": "ตอนนี้ย้อนกลับไปไม่ได้แล้ว ปลายทางของเส้นทางนี้มีแต่การทำลายล้างเท่านั้น",
						"hindi": "अब पीछे नहीं हटा जा सकता। इस रास्ते का अंत केवल विनाश है।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "후회는 없어. 비르다의 오만을 끝장내자!",
						"english": "No regrets. Let's end Virda's arrogance!",
						"japanese": "後悔はない。ビルダの傲慢を終わらせよう！",
						"chinese": "毫无悔意。让我们终结维尔达的傲慢！",
						"french": "Aucun regret. Mettons fin à l'arrogance de Virda !",
						"spanish": "Sin arrepentimientos. ¡Acabemos con la arrogancia de Virda!",
						"vietnamese": "Không hối tiếc. Hãy kết thúc sự ngạo mạn của Virda!",
						"thai": "ไม่เสียใจ มายุติความโอหังของเวอร์ดาซะ!",
						"hindi": "कोई पछतावा नहीं। विरदा के अहंकार को खत्म करें!"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "우리의 발자취가, 진실을 밝힐 거야.",
						"english": "Our footsteps will reveal the truth.",
						"japanese": "我らの足跡が、真実を明らかにするだろう。",
						"chinese": "我们的足迹将揭示真相。",
						"french": "Nos pas révéleront la vérité.",
						"spanish": "Nuestras huellas revelarán la verdad.",
						"vietnamese": "Dấu chân của chúng ta sẽ hé lộ sự thật.",
						"thai": "รอยเท้าของเราจะเปิดเผยความจริง",
						"hindi": "हमारे पदचिह्न सच्चाई उजागर करेंगे।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "hild",
					"content": {
						"korean": "그 오만의 발자취가… 역사를 만들 겁니다.",
						"english": "The footsteps of that arrogance... will make history.",
						"japanese": "その傲慢の足跡が… 歴史を創るだろう。",
						"chinese": "那傲慢的足迹……将创造历史。",
						"french": "Les traces de cette arrogance... créeront l'histoire.",
						"spanish": "Las huellas de esa arrogancia... harán historia.",
						"vietnamese": "Dấu chân của sự ngạo mạn đó... sẽ làm nên lịch sử.",
						"thai": "รอยเท้าแห่งความโอหังนั้น... จะสร้างประวัติศาสตร์",
						"hindi": "उस अहंकार के पदचिह्न... इतिहास बनाएंगे।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 얼음 구조물. 그 안에서 어둠이 꿈틀거렸다.",
						"english": "A colossal ice structure. Darkness stirred within it.",
						"japanese": "巨大な氷の構造物。その中で闇が蠢いていた。",
						"chinese": "巨大的冰结构。黑暗在其内部蠢蠢欲动。",
						"french": "Une structure de glace colossale. L'obscurité s'y agitait.",
						"spanish": "Una colosal estructura de hielo. La oscuridad se agitaba en su interior.",
						"vietnamese": "Một cấu trúc băng khổng lồ. Bóng tối khuấy động bên trong nó.",
						"thai": "โครงสร้างน้ำแข็งมหึมา ความมืดกำลังขยับอยู่ภายใน",
						"hindi": "एक विशाल बर्फ की संरचना। उसके भीतर अंधेरा हिल रहा था।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "hild",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "저것이… 이 비석의 핵심이에요.",
						"english": "That is... the core of this monument.",
						"japanese": "あれが… この碑石の核心です。",
						"chinese": "那是……这块石碑的核心。",
						"french": "C'est... le cœur de ce monument.",
						"spanish": "Eso es... el núcleo de este monumento.",
						"vietnamese": "Đó là... cốt lõi của bia đá này.",
						"thai": "นั่นคือ... แกนกลางของอนุสาวรีย์นี้",
						"hindi": "वह... इस स्मारक का मूल है।"
					},
					"speaker": "hild",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "감히… 나의 안식처를 더럽히는가.",
						"english": "How dare you... defile my sanctuary.",
						"japanese": "貴様ら… よくも私の安息の地を汚したな。",
						"chinese": "竟敢……玷污我的安息之地。",
						"french": "Comment osez-vous... souiller mon sanctuaire.",
						"spanish": "¿Cómo osas... profanar mi santuario?",
						"vietnamese": "Dám... làm ô uế nơi an nghỉ của ta sao.",
						"thai": "กล้าดียังไง... มาแปดเปื้อนที่พักของข้า",
						"hindi": "तुम्हारी हिम्मत कैसे हुई... मेरे अभयारण्य को अपवित्र करने की।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네놈의 오만을 끝내러 왔다! 비르다의 꼭두각시!",
						"english": "I've come to end your arrogance! Virda's puppet!",
						"japanese": "貴様の傲慢を終わらせに来た！ビルダの操り人形め！",
						"chinese": "我来终结你的傲慢！维尔达的傀儡！",
						"french": "Je suis venu mettre fin à votre arrogance ! Marionnette de Virda !",
						"spanish": "¡He venido a acabar con tu arrogancia! ¡Títere de Virda!",
						"vietnamese": "Ta đến để kết thúc sự ngạo mạn của ngươi! Con rối của Virda!",
						"thai": "ข้ามาเพื่อยุติความโอหังของเจ้า! หุ่นเชิดของเวอร์ดา!",
						"hindi": "मैं तुम्हारे अहंकार को खत्म करने आया हूँ! विरदा की कठपुतली!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "오만은… 너희의 것이 될 것이다.",
						"english": "Arrogance... will be yours.",
						"japanese": "傲慢は… お前たちのものとなるだろう。",
						"chinese": "傲慢……将属于你们。",
						"french": "L'arrogance... sera vôtre.",
						"spanish": "La arrogancia... será vuestra.",
						"vietnamese": "Sự ngạo mạn... sẽ là của các ngươi.",
						"thai": "ความโอหัง... จะเป็นของพวกเจ้า",
						"hindi": "अहंकार... तुम्हारा होगा।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"direction": "down",
					"duration_ms": 400,
					"type": "direction",
					"action": "exit",
					"speaker": "hild"
				},
				{
					"speaker": "hild",
					"content": {
						"korean": "진실은… 결국….",
						"english": "The truth is... eventually...",
						"japanese": "真実は… 結局…。",
						"chinese": "真相……终究……。",
						"french": "La vérité est... finalement...",
						"spanish": "La verdad... al final...",
						"vietnamese": "Sự thật thì... cuối cùng...",
						"thai": "ความจริงคือ... ในที่สุด...",
						"hindi": "सच्चाई है... अंततः..."
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "오만에 눈먼 자들… 아무것도 바꾸지 못한다.",
						"english": "Blinded by arrogance... you can change nothing.",
						"japanese": "傲慢に目がくらんだ者たち… 何も変えられない。",
						"chinese": "被傲慢蒙蔽的人… 什么也改变不了。",
						"french": "Aveuglés par l'arrogance... vous ne pouvez rien changer.",
						"spanish": "Cegados por la arrogancia... nada podéis cambiar.",
						"vietnamese": "Những kẻ mù quáng bởi sự ngạo mạn... chẳng thể thay đổi bất cứ điều gì.",
						"thai": "ผู้ที่มืดบอดด้วยความหยิ่งผยอง... จะเปลี่ยนแปลงอะไรไม่ได้",
						"hindi": "अहंकार से अंधे लोग... कुछ भी नहीं बदल सकते।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "크윽… 아직 끝나지 않았어!",
						"english": "Ugh... it's not over yet!",
						"japanese": "くっ… まだ終わってない！",
						"chinese": "呃… 还没结束！",
						"french": "Argh... ce n'est pas encore fini !",
						"spanish": "¡Ugh... aún no ha terminado!",
						"vietnamese": "Khụ... chưa kết thúc đâu!",
						"thai": "อึก... ยังไม่จบ!",
						"hindi": "उफ़… अभी खत्म नहीं हुआ!"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "다시 와라. 그때도… 파멸뿐이다.",
						"english": "Come again. Even then... only ruin awaits.",
						"japanese": "また来るがいい。その時も… 破滅あるのみだ。",
						"chinese": "再来吧。届时… 唯有毁灭。",
						"french": "Revenez. Même alors... seule la ruine vous attend.",
						"spanish": "Vuelve. Incluso entonces... solo te espera la ruina.",
						"vietnamese": "Quay lại đi. Khi đó... cũng chỉ có sự hủy diệt.",
						"thai": "กลับมาอีกครั้งเถอะ ถึงตอนนั้น... ก็มีแต่หายนะเท่านั้น",
						"hindi": "फिर आना। तब भी... केवल विनाश ही मिलेगा।"
					},
					"speaker": "random_boss"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "이것이… 너희가 택한 진실인가.",
						"english": "Is this... the truth you've chosen?",
						"japanese": "これが… お前たちが選んだ真実なのか。",
						"chinese": "这就是……你们选择的真相吗？",
						"french": "Est-ce... la vérité que vous avez choisie ?",
						"spanish": "¿Es esta... la verdad que habéis elegido?",
						"vietnamese": "Đây là... sự thật mà các ngươi đã chọn sao.",
						"thai": "นี่คือ... ความจริงที่พวกเจ้าเลือกงั้นหรือ",
						"hindi": "क्या यह... वह सच्चाई है जो तुमने चुनी है?"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "진정한 파멸은… 너희 안에 있다.",
						"english": "True destruction... lies within you.",
						"japanese": "真の破滅は… お前たちの中にある。",
						"chinese": "真正的毁灭… 在你们心中。",
						"french": "La vraie destruction... est en vous.",
						"spanish": "La verdadera destrucción... reside en vosotros.",
						"vietnamese": "Sự hủy diệt thật sự... nằm trong các ngươi.",
						"thai": "การทำลายล้างที่แท้จริง... อยู่ในตัวพวกเจ้าเอง",
						"hindi": "असली विनाश... तुम्हारे अंदर है।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "시끄럽다! 네놈의 거짓말은 끝났다!",
						"english": "Silence! Your lies end now!",
						"japanese": "黙れ！貴様の嘘は終わりだ！",
						"chinese": "闭嘴！你的谎言结束了！",
						"french": "Silence ! Tes mensonges sont terminés !",
						"spanish": "¡Silencio! ¡Tus mentiras han terminado!",
						"vietnamese": "Im đi! Lời dối trá của ngươi kết thúc rồi!",
						"thai": "หุบปาก! คำโกหกของแกจบลงแล้ว!",
						"hindi": "चुप रहो! तुम्हारे झूठ अब खत्म हुए!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "또 하나의 방어 시스템이 무너졌다. 하지만, 찜찜한 승리였다.",
						"english": "Another defense system has fallen. A hollow victory, however.",
						"japanese": "また一つ防衛システムが崩壊した。だが、後味の悪い勝利だった。",
						"chinese": "又一个防御系统被摧毁了。然而，这是一场令人不快的胜利。",
						"french": "Un autre système de défense est tombé. Une victoire amère, cependant.",
						"spanish": "Otro sistema de defensa ha caído. Una victoria agridulce, sin embargo.",
						"vietnamese": "Một hệ thống phòng thủ khác đã sụp đổ. Tuy nhiên, đây là một chiến thắng không trọn vẹn.",
						"thai": "ระบบป้องกันอีกแห่งล่มสลายแล้ว ถึงกระนั้น ก็เป็นชัยชนะที่ไม่เต็มอิ่ม",
						"hindi": "एक और रक्षा प्रणाली गिर गई। हालांकि, यह एक कड़वी जीत थी।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "균열은 이미 시작되고 있었다. 누구는 멈추려 하고, 누구는 더 나아가려 했다.",
						"english": "The rift had already begun. Some sought to stop it, while others pushed further.",
						"japanese": "亀裂はすでに始まっていた。止める者もいれば、さらに進もうとする者もいた。",
						"chinese": "裂缝已经开始。有人试图阻止，有人则更进一步。",
						"french": "La faille avait déjà commencé. Certains cherchaient à l'arrêter, d'autres voulaient aller plus loin.",
						"spanish": "La grieta ya había comenzado. Algunos intentaban detenerla, mientras que otros buscaban ir más allá.",
						"vietnamese": "Vết nứt đã bắt đầu. Kẻ muốn dừng lại, kẻ lại muốn tiến xa hơn.",
						"thai": "รอยแยกได้เริ่มต้นขึ้นแล้ว บางคนพยายามจะหยุดมัน ในขณะที่บางคนกลับต้องการไปให้ไกลกว่าเดิม",
						"hindi": "दरार पहले ही शुरू हो चुकी थी। कुछ इसे रोकना चाहते थे, जबकि कुछ और आगे बढ़ना चाहते थे।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"고대 비석, 비르다의 심장으로 향하는 길.",
			"찢겨진 예언은 진실을 감췄고,",
			"그 오만은 탐험대를 나락으로 이끌었다.",
			"진실이라 믿었던 조각들이, 파멸을 부를 줄은."
		],
		"english": [
			"Ancient stele, the path to Virda's heart.",
			"The torn prophecy concealed the truth,",
			"And their arrogance led the expedition to ruin.",
			"The fragments believed to be truth, would bring about destruction."
		],
		"japanese": [
			"古代の石碑、ビルダの心臓へと続く道。",
			"引き裂かれた予言は真実を隠し、",
			"その傲慢は探検隊を奈落へと導いた。",
			"真実と信じた断片が、破滅を招くとは。"
		],
		"chinese": [
			"古代石碑，通往维尔达之心。",
			"破碎的预言隐藏了真相，",
			"那傲慢将探险队引向深渊。",
			"那些被信以为真的碎片，竟会带来毁灭。"
		],
		"french": [
			"Stèle ancienne, le chemin vers le cœur de Virda.",
			"La prophétie déchirée a caché la vérité,",
			"Et leur arrogance mena l'expédition à sa perte.",
			"Que les fragments crus être la vérité, causeraient la destruction."
		],
		"spanish": [
			"Estela antigua, el camino al corazón de Virda.",
			"La profecía desgarrada ocultó la verdad,",
			"Y su arrogancia llevó a la expedición a la ruina.",
			"Que los fragmentos que se creían verdad, traerían la perdición."
		],
		"vietnamese": [
			"Cổ bia, con đường đến trái tim Virda.",
			"Lời tiên tri rách nát đã che giấu sự thật,",
			"Và sự kiêu ngạo của họ đã dẫn đoàn thám hiểm đến vực thẳm.",
			"Những mảnh vỡ tưởng là sự thật, lại mang đến sự hủy diệt."
		],
		"thai": [
			"ศิลาจารึกโบราณ, เส้นทางสู่ใจกลางของวิรดา",
			"คำพยากรณ์ที่ฉีกขาดได้ปกปิดความจริงไว้",
			"และความโอหังของพวกเขาได้นำคณะสำรวจไปสู่หายนะ",
			"เศษเสี้ยวที่เชื่อว่าเป็นความจริง จะนำมาซึ่งการทำลายล้าง"
		],
		"hindi": [
			"प्राचीन शिलालेख, विरदा के हृदय का मार्ग।",
			"फटी हुई भविष्यवाणी ने सत्य को छिपाया,",
			"और उनके अहंकार ने अभियान को विनाश में धकेल दिया।",
			"जिन टुकड़ों को सत्य माना था, वे विनाश लाएंगे।"
		]
	}
} as const;
