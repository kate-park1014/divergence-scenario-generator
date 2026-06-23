export const scenario_forest_xylia_10_03 = {
	"scenario_id": "forest_xylia_10_03",
	"order": 3,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"briar": {
			"id": "mon_21f92820-190e-4d08-a75c-5d2c0b6d0a6b",
			"name": {
				"korean": "브라이어",
				"english": "Briar",
				"japanese": "ブライア",
				"chinese": "布莱尔",
				"french": "Briar",
				"spanish": "Briar",
				"vietnamese": "Briar",
				"thai": "ไบรอา",
				"hindi": "ब्रायर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/41fb431e-57e0-45e0-dde6-1a1f02c01200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/dd89dff7-88ed-4444-28d8-5aaa85bd4e00/public"
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
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "숲의 길은 더욱 좁아지고, 어둠이 짙어졌다.",
						"english": "The forest path narrowed further, and darkness deepened.",
						"japanese": "森の道はさらに狭くなり、闇が濃くなった。",
						"chinese": "森林小径变得更窄，黑暗也愈发深沉。",
						"french": "Le chemin forestier se rétrécissait davantage, et l'obscurité s'épaississait.",
						"spanish": "El sendero del bosque se estrechó aún más y la oscuridad se hizo más densa.",
						"vietnamese": "Lối rừng càng hẹp, bóng đêm càng dày đặc.",
						"thai": "เส้นทางในป่าแคบลงอีก และความมืดก็หนาขึ้น",
						"hindi": "जंगल का रास्ता और संकरा हो गया, और अंधेरा गहरा गया।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "숨 막히는 기분이야.",
						"english": "I feel suffocated.",
						"japanese": "息が詰まるような気分だ。",
						"chinese": "感觉要窒息了。",
						"french": "Je me sens étouffé(e).",
						"spanish": "Me siento asfixiado/a.",
						"vietnamese": "Cảm giác ngột ngạt quá.",
						"thai": "รู้สึกเหมือนหายใจไม่ออกเลย",
						"hindi": "मुझे घुटन महसूस हो रही है।"
					}
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "briar",
					"spot": [
						4,
						2
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "어서 와. 절망의 메아리가 울려 퍼지는 곳에.",
						"english": "Welcome. To where the echoes of despair resound.",
						"japanese": "ようこそ。絶望のこだまが響き渡る場所へ。",
						"chinese": "欢迎来到绝望回声萦绕之地。",
						"french": "Bienvenue. Là où résonnent les échos du désespoir.",
						"spanish": "Bienvenido/a. Al lugar donde resuenan los ecos de la desesperación.",
						"vietnamese": "Chào mừng. Đến nơi tiếng vọng tuyệt vọng vang vọng.",
						"thai": "ยินดีต้อนรับ สู่สถานที่ที่เสียงสะท้อนแห่งความสิ้นหวังก้องกังวาน",
						"hindi": "स्वागत है। जहाँ निराशा की प्रतिध्वनियाँ गूँजती हैं।"
					},
					"speaker": "briar",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…누구지?",
						"english": "...Who is it?",
						"japanese": "…誰だ？",
						"chinese": "……是谁？",
						"french": "...Qui est-ce ?",
						"spanish": "...¿Quién es?",
						"vietnamese": "...Ai đó?",
						"thai": "...ใครน่ะ?",
						"hindi": "...कौन है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "나는 브라이어. 숲의 모든 고통을 아는 자.",
						"english": "I am Briar. One who knows all the suffering of the forest.",
						"japanese": "私はブライア。森のあらゆる苦痛を知る者だ。",
						"chinese": "我是布莱尔。知晓森林所有苦痛之人。",
						"french": "Je suis Briar. Celui qui connaît toutes les souffrances de la forêt.",
						"spanish": "Soy Briar. El que conoce todo el sufrimiento del bosque.",
						"vietnamese": "Ta là Briar. Kẻ thấu hiểu mọi đau khổ của rừng.",
						"thai": "ข้าคือไบรอา ผู้ที่รู้ความทุกข์ทรมานทั้งหมดของป่า",
						"hindi": "मैं ब्रायर हूँ। वह जो जंगल के सभी दुखों को जानता है।"
					},
					"emotion": "base",
					"speaker": "briar",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이곳은 저주받았어. 더는 나아가지 마.",
						"english": "This place is cursed. Go no further.",
						"japanese": "ここは呪われている。これ以上進むな。",
						"chinese": "这里被诅咒了。别再往前走了。",
						"french": "Cet endroit est maudit. Ne va pas plus loin.",
						"spanish": "Este lugar está maldito. No sigas adelante.",
						"vietnamese": "Nơi đây bị nguyền rủa. Đừng đi tiếp nữa.",
						"thai": "ที่นี่ถูกสาป อย่าไปต่อเลย",
						"hindi": "यह जगह शापित है। आगे मत बढ़ना।"
					},
					"type": "speech",
					"speaker": "briar",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "briar",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "아직도 듣지 못했니? 숲의 비명을.",
						"english": "Haven't you heard it yet? The forest's scream.",
						"japanese": "まだ聞こえないのか？ 森の悲鳴が。",
						"chinese": "还没听到吗？森林的尖叫。",
						"french": "Tu n'as toujours pas entendu ? Le cri de la forêt.",
						"spanish": "¿Aún no lo has oído? El grito del bosque.",
						"vietnamese": "Vẫn chưa nghe thấy à? Tiếng thét của khu rừng.",
						"thai": "ยังไม่ได้ยินอีกเหรอ? เสียงกรีดร้องของป่า",
						"hindi": "क्या तुमने अभी तक नहीं सुना? जंगल की चीख।"
					},
					"type": "speech",
					"speaker": "briar",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "숲이 고통받는 건 느껴져.",
						"english": "I can feel the forest suffering.",
						"japanese": "森が苦しんでいるのがわかる。",
						"chinese": "我能感觉到森林在受苦。",
						"french": "Je sens la forêt souffrir.",
						"spanish": "Siento el bosque sufrir.",
						"vietnamese": "Ta cảm nhận được khu rừng đang đau khổ.",
						"thai": "ฉันรู้สึกได้ว่าป่ากำลังทรมาน",
						"hindi": "मैं जंगल को पीड़ा में महसूस कर सकता हूँ।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "모든 것이 왜곡된 환상일 뿐이야. 진실을 찾는 건 무의미해.",
						"english": "Everything is just a distorted illusion. Searching for the truth is pointless.",
						"japanese": "全ては歪んだ幻想に過ぎない。真実を探すのは無意味だ。",
						"chinese": "一切都只是扭曲的幻象。寻找真相毫无意义。",
						"french": "Tout n'est qu'une illusion déformée. Chercher la vérité est futile.",
						"spanish": "Todo es solo una ilusión distorsionada. Buscar la verdad es inútil.",
						"vietnamese": "Mọi thứ chỉ là ảo ảnh méo mó. Tìm kiếm sự thật là vô nghĩa.",
						"thai": "ทุกสิ่งเป็นเพียงภาพลวงตาที่บิดเบี้ยว การค้นหาความจริงไร้ความหมาย",
						"hindi": "सब कुछ बस एक विकृत भ्रम है। सच खोजना व्यर्थ है।"
					},
					"speaker": "briar",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아니. 여기서 멈출 수 없어.",
						"english": "No. I can't stop here.",
						"japanese": "いや。ここで止まるわけにはいかない。",
						"chinese": "不。我不能止步于此。",
						"french": "Non. Je ne peux pas m'arrêter ici.",
						"spanish": "No. No puedo detenerme aquí.",
						"vietnamese": "Không. Ta không thể dừng lại ở đây.",
						"thai": "ไม่ ฉันหยุดตรงนี้ไม่ได้",
						"hindi": "नहीं। मैं यहाँ रुक नहीं सकता।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "briar",
					"content": {
						"korean": "어리석어… 너도 결국 희망 없는 절망에 빠질 거야.",
						"english": "Foolish... You too will eventually fall into hopeless despair.",
						"japanese": "愚かだ… お前も結局、希望なき絶望に堕ちるだろう。",
						"chinese": "愚蠢… 你也终将陷入无望的绝望。",
						"french": "Insensé… Toi aussi, tu finiras par sombrer dans un désespoir sans espoir.",
						"spanish": "Estúpido… Tú también caerás finalmente en una desesperación sin esperanza.",
						"vietnamese": "Ngốc nghếch… Ngươi rồi cũng sẽ rơi vào tuyệt vọng không lối thoát thôi.",
						"thai": "โง่เขลา... เจ้าเองก็จะตกอยู่ในความสิ้นหวังที่ไร้ซึ่งความหวังในที่สุด",
						"hindi": "मूर्ख… तुम भी अंततः निराशाहीन हताशा में डूब जाओगे।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"speaker": "briar"
				},
				{
					"type": "speech",
					"speaker": "briar",
					"emotion": "angry",
					"content": {
						"korean": "이 숲의 저주는 영원해. 아무도 벗어날 수 없어.",
						"english": "This forest's curse is eternal. No one can escape.",
						"japanese": "この森の呪いは永遠だ。誰も逃れられない。",
						"chinese": "这片森林的诅咒是永恒的。无人能逃脱。",
						"french": "La malédiction de cette forêt est éternelle. Personne ne peut s'en échapper.",
						"spanish": "La maldición de este bosque es eterna. Nadie puede escapar.",
						"vietnamese": "Lời nguyền của khu rừng này là vĩnh cửu. Không ai có thể thoát khỏi.",
						"thai": "คำสาปของป่านี้เป็นนิรันดร์ ไม่มีใครหนีพ้นได้",
						"hindi": "इस जंगल का श्राप अनंत है। कोई नहीं बच सकता।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "그렇다면, 우리가 끝낼 거야.",
						"english": "If so, we will end it.",
						"japanese": "ならば、私たちが終わらせる。",
						"chinese": "既然如此，我们将终结它。",
						"french": "Alors, nous y mettrons fin.",
						"spanish": "Entonces, nosotros lo terminaremos.",
						"vietnamese": "Vậy thì, chúng ta sẽ chấm dứt nó.",
						"thai": "ถ้าอย่างนั้น เราจะยุติมันเอง",
						"hindi": "तो फिर, हम इसे खत्म करेंगे।"
					}
				},
				{
					"content": {
						"korean": "하… 부질없는 저항일 뿐. 봐, 숲이 널 거부하고 있잖아!",
						"english": "Ha... Just futile resistance. Look, the forest is rejecting you!",
						"japanese": "は… 無駄な抵抗だ。見ろ、森がお前を拒んでいる！",
						"chinese": "哈… 只是徒劳的反抗。看，森林正在拒绝你！",
						"french": "Ha… Ce n'est qu'une résistance futile. Regarde, la forêt te rejette !",
						"spanish": "Ja… Solo una resistencia inútil. ¡Mira, el bosque te está rechazando!",
						"vietnamese": "Ha… Chỉ là sự chống cự vô ích. Nhìn đi, khu rừng đang từ chối ngươi kìa!",
						"thai": "ฮ่า... เป็นแค่การต่อต้านที่ไร้ประโยชน์ ดูสิ ป่ากำลังปฏิเสธเจ้า!",
						"hindi": "हा… बस एक व्यर्थ प्रतिरोध। देखो, जंगल तुम्हें अस्वीकार कर रहा है!"
					},
					"type": "speech",
					"speaker": "briar",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "숲의 고통을… 감히 잊으려 하는가…",
						"english": "The forest's pain... Dare you try to forget it...?",
						"japanese": "森の苦痛を… 忘れるというのか…",
						"chinese": "森林的痛苦… 你竟敢试图忘记…",
						"french": "La douleur de la forêt… Oses-tu l'oublier…",
						"spanish": "El dolor del bosque… ¿Te atreves a olvidarlo…?",
						"vietnamese": "Nỗi đau của khu rừng… Ngươi dám quên đi sao…?",
						"thai": "ความเจ็บปวดของป่า... กล้าที่จะลืมมันหรือ...",
						"hindi": "जंगल का दर्द… क्या तुम इसे भूलने की हिम्मत करते हो…?"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "또 다른 방해꾼인가.",
						"english": "Another intruder, then.",
						"japanese": "また別の邪魔者か。",
						"chinese": "又是另一个碍事者吗。",
						"french": "Un autre trouble-fête, alors.",
						"spanish": "¿Otro estorbo más?",
						"vietnamese": "Lại là một kẻ phá hoại khác sao.",
						"thai": "ผู้ขัดขวางอีกคนงั้นเหรอ",
						"hindi": "क्या कोई और दखल देने वाला है?"
					}
				},
				{
					"content": {
						"korean": "숲의 저주를 짊어지고 죽어라.",
						"english": "Bear the forest's curse and die.",
						"japanese": "森の呪いを背負い、死ね。",
						"chinese": "承受森林的诅咒，然后死去吧。",
						"french": "Porte la malédiction de la forêt et meurs.",
						"spanish": "Carga con la maldición del bosque y muere.",
						"vietnamese": "Gánh chịu lời nguyền của rừng và chết đi.",
						"thai": "จงแบกรับคำสาปแห่งพงไพรและตายซะ",
						"hindi": "वन के अभिशाप को सहो और मर जाओ।"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "briar",
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "briar",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "더 깊이 들어가면 안 돼… 돌아가…",
						"english": "Don't go any deeper... Turn back...",
						"japanese": "これ以上奥へは行くな… 戻れ…",
						"chinese": "别再深入了……回去吧……",
						"french": "Ne va pas plus loin... Retourne-t'en...",
						"spanish": "No vayas más profundo... Regresa...",
						"vietnamese": "Đừng đi sâu hơn nữa... Quay lại đi...",
						"thai": "อย่าเข้าไปลึกกว่านี้... กลับไปซะ...",
						"hindi": "और गहरा मत जाओ… लौट जाओ…"
					}
				},
				{
					"content": {
						"korean": "너무 늦었어. 여기까지 왔는데.",
						"english": "It's too late. I've come this far.",
						"japanese": "遅すぎる。ここまで来てしまった。",
						"chinese": "太迟了。我都走到这里了。",
						"french": "Trop tard. Je suis arrivé jusque-là.",
						"spanish": "Es demasiado tarde. Ya he llegado hasta aquí.",
						"vietnamese": "Quá muộn rồi. Tôi đã đến tận đây.",
						"thai": "สายเกินไปแล้ว. ฉันมาไกลถึงเพียงนี้.",
						"hindi": "बहुत देर हो चुकी है। मैं यहाँ तक आ गया हूँ।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "순간, 눈앞에 번개처럼 스쳐 지나가는 찬란했던 고대 문명의 환영. 숲의 모습은 찰나에 변모했다.",
						"english": "In an instant, a brilliant vision of an ancient civilization flashed before my eyes like lightning. The forest's appearance transformed in a fleeting moment.",
						"japanese": "刹那、目の前を稲妻のように駆け抜ける、輝かしい古代文明の幻影。森の姿は一瞬にして変貌した。",
						"chinese": "瞬间，眼前闪过一道如闪电般辉煌的古文明幻影。森林的景象在刹那间变了模样。",
						"french": "Un instant, une vision éclatante d'une civilisation antique défila devant mes yeux comme un éclair. L'apparence de la forêt se transforma en un clin d'œil.",
						"spanish": "Por un instante, una brillante visión de una antigua civilización cruzó mis ojos como un relámpago. El aspecto del bosque se transformó en un abrir y cerrar de ojos.",
						"vietnamese": "Trong khoảnh khắc, ảo ảnh rực rỡ của một nền văn minh cổ đại lướt qua mắt tôi như một tia chớp. Cảnh quan của khu rừng biến đổi trong chớp mắt.",
						"thai": "ชั่วพริบตา ภาพหลอนแห่งอารยธรรมโบราณอันรุ่งโรจน์ก็แวบผ่านดวงตาเหมือนสายฟ้าฟาด รูปลักษณ์ของป่าเปลี่ยนไปในชั่วขณะ.",
						"hindi": "क्षण भर में, प्राचीन सभ्यता का एक शानदार भ्रम बिजली की तरह मेरी आँखों के सामने कौंध गया। जंगल का रूप पल भर में बदल गया।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "이내 다시 혼돈의 숲으로 돌아왔다.",
						"english": "Soon, it reverted to the Forest of Chaos.",
						"japanese": "やがて、再び混沌の森へと戻った。",
						"chinese": "很快，它又回到了混沌之森。",
						"french": "Bientôt, il redevint la Forêt du Chaos.",
						"spanish": "Pronto, regresó al Bosque del Caos.",
						"vietnamese": "Ngay sau đó, nó trở lại Rừng Hỗn Mang.",
						"thai": "ไม่นานนัก ก็กลับคืนสู่ป่าแห่งความสับสนวุ่นวาย.",
						"hindi": "शीघ्र ही, यह अराजकता के वन में लौट आया।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "…대체 이 숲은… 무엇을 감추고 있는 거지?",
						"english": "...What on earth is this forest hiding?",
						"japanese": "…一体、この森は…何を隠しているんだ？",
						"chinese": "……这片森林到底……隐藏着什么？",
						"french": "...Mais qu'est-ce que cette forêt cache donc ?",
						"spanish": "...¿Qué diablos esconde este bosque?",
						"vietnamese": "...Rốt cuộc, khu rừng này... đang che giấu điều gì?",
						"thai": "...ตกลงแล้ว ป่าแห่งนี้... ซ่อนอะไรอยู่กันแน่?",
						"hindi": "...आखिर यह जंगल... क्या छुपा रहा है?"
					}
				},
				{
					"content": {
						"korean": "어리석은 질문이야… 끝없는 고통만이 있을 뿐인데…",
						"english": "A foolish question... There is only endless suffering...",
						"japanese": "愚かな質問だ… 終わりなき苦痛があるばかりなのに…",
						"chinese": "愚蠢的问题……这里只有无尽的痛苦……",
						"french": "Question stupide... Il n'y a que d'interminables souffrances...",
						"spanish": "Una pregunta estúpida... Solo hay sufrimiento sin fin...",
						"vietnamese": "Một câu hỏi ngu ngốc... Chỉ có sự đau khổ vô tận mà thôi...",
						"thai": "เป็นคำถามที่โง่เง่า... มีแต่ความทรมานไม่สิ้นสุด...",
						"hindi": "मूर्खतापूर्ण प्रश्न है… यहाँ केवल अंतहीन पीड़ा ही है…"
					},
					"speaker": "briar",
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크윽… 이 고통은… 끝나지 않아…",
						"english": "Ugh... This pain... It never ends...",
						"japanese": "くっ…この苦痛は…終わらない…",
						"chinese": "呃啊…这痛苦…永无止境…",
						"french": "Ugh... Cette douleur... Elle ne finit jamais...",
						"spanish": "Ugh... Este dolor... No termina...",
						"vietnamese": "Khụ... Nỗi đau này... Không bao giờ kết thúc...",
						"thai": "อึก... ความเจ็บปวดนี้... ไม่มีวันสิ้นสุด...",
						"hindi": "उफ़... यह दर्द... कभी खत्म नहीं होता..."
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "진정한 저주는… 무엇이지?",
						"english": "What is... the true curse?",
						"japanese": "真の呪いは…何だ？",
						"chinese": "真正的诅咒…是什么？",
						"french": "Quelle est... la véritable malédiction ?",
						"spanish": "¿Cuál es... la verdadera maldición?",
						"vietnamese": "Lời nguyền thật sự... là gì?",
						"thai": "คำสาปที่แท้จริงคือ...อะไร?",
						"hindi": "असली अभिशाप... क्या है?"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "쓰러진 {random_boss} 뒤로, 숲의 깊은 곳에서 섬뜩한 기운이 솟아올랐다.",
						"english": "Behind the fallen {random_boss}, an eerie aura surged from the depths of the forest.",
						"japanese": "倒れた{random_boss}の背後で、森の奥深くから不気味な気配が湧き上がった。",
						"chinese": "倒下的{random_boss}身后，森林深处涌出了一股诡异的气息。",
						"french": "Derrière le {random_boss} abattu, une aura sinistre jaillit des profondeurs de la forêt.",
						"spanish": "Detrás del {random_boss} caído, un aura espeluznante surgió de las profundidades del bosque.",
						"vietnamese": "Phía sau {random_boss} đã ngã xuống, một luồng khí rùng rợn trỗi dậy từ sâu thẳm khu rừng.",
						"thai": "เบื้องหลัง {random_boss} ที่ล้มลง พลังงานน่าขนลุกพวยพุ่งขึ้นมาจากส่วนลึกของป่า",
						"hindi": "{random_boss} के गिरने के बाद, जंगल की गहराई से एक भयावह आभा निकली।"
					}
				},
				{
					"content": {
						"korean": "절망의 메아리는 더욱 강렬해지고 있었다.",
						"english": "The echo of despair grew stronger.",
						"japanese": "絶望の残響は、さらに強まっていた。",
						"chinese": "绝望的余音愈发强烈。",
						"french": "L'écho du désespoir devenait plus intense.",
						"spanish": "El eco de la desesperación se hacía más intenso.",
						"vietnamese": "Tiếng vọng của sự tuyệt vọng càng lúc càng mạnh mẽ.",
						"thai": "เสียงสะท้อนของความสิ้นหวังยิ่งทวีความรุนแรงขึ้น",
						"hindi": "निराशा की गूँज और तीव्र होती जा रही थी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "어리석은… 너희의 희망은 이곳에서 끝난다…",
						"english": "Foolish... Your hope ends here...",
						"japanese": "愚かな…お前たちの希望はここで終わる…",
						"chinese": "愚蠢的…你们的希望在此终结…",
						"french": "Stupides... Votre espoir s'achève ici...",
						"spanish": "Necios... Vuestra esperanza termina aquí...",
						"vietnamese": "Ngu ngốc... Hy vọng của các ngươi kết thúc tại đây...",
						"thai": "โง่เขลา... ความหวังของเจ้าจะจบลงที่นี่...",
						"hindi": "मूर्खों... तुम्हारी आशा यहीं खत्म होती है..."
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not... over yet!",
						"japanese": "まだ…終わってない！",
						"chinese": "还没…结束！",
						"french": "Ce n'est pas... encore fini !",
						"spanish": "¡Aún... no ha terminado!",
						"vietnamese": "Chưa... kết thúc đâu!",
						"thai": "ยัง...ไม่จบ!",
						"hindi": "अभी... खत्म नहीं हुआ!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "숲의 왜곡된 환상이 모든 것을 집어삼켰다.",
						"english": "The forest's distorted illusion swallowed everything.",
						"japanese": "森の歪んだ幻想が、全てを飲み込んだ。",
						"chinese": "森林扭曲的幻象吞噬了一切。",
						"french": "L'illusion déformée de la forêt engloutit tout.",
						"spanish": "La ilusión distorsionada del bosque lo devoró todo.",
						"vietnamese": "Ảo ảnh méo mó của khu rừng đã nuốt chửng mọi thứ.",
						"thai": "ภาพลวงตาที่บิดเบี้ยวของป่ากลืนกินทุกสิ่ง",
						"hindi": "जंगल के विकृत भ्रम ने सब कुछ निगल लिया।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "direction",
					"speaker": "briar",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "이제 정말 끝이야. 숲의 저주를 거스를 순 없어!",
						"english": "This is truly the end. You cannot defy the forest's curse!",
						"japanese": "もう本当におしまいだ。森の呪いには逆らえない！",
						"chinese": "真的结束了。你无法违抗森林的诅咒！",
						"french": "C'est vraiment la fin. Tu ne peux pas défier la malédiction de la forêt !",
						"spanish": "Esto es realmente el fin. ¡No puedes desafiar la maldición del bosque!",
						"vietnamese": "Thật sự là kết thúc rồi. Ngươi không thể chống lại lời nguyền của rừng!",
						"thai": "นี่คือจุดจบแล้วจริงๆ. เจ้าไม่อาจขัดขืนคำสาปแห่งพงไพรได้!",
						"hindi": "यह सच में अंत है। तुम वन के अभिशाप का उल्लंघन नहीं कर सकते!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "briar"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "감히 이곳에 도달하다니… 용서치 않겠다.",
						"english": "To dare reach this place... I will not forgive you.",
						"japanese": "敢えてここに到達するとは…許さん。",
						"chinese": "竟敢到达这里……我绝不饶恕。",
						"french": "Oser atteindre cet endroit... Je ne te pardonnerai pas.",
						"spanish": "¿Atreverte a llegar aquí...? No te perdonaré.",
						"vietnamese": "Dám đến được nơi này... Ta sẽ không tha thứ cho ngươi.",
						"thai": "กล้าดียังไงมาถึงที่นี่... ข้าจะไม่มีวันอภัยให้!",
						"hindi": "यहाँ तक पहुँचने की हिम्मत की तुमने… मैं तुम्हें माफ़ नहीं करूँगा।"
					}
				},
				{
					"content": {
						"korean": "네가 숲의 고통을 만들어낸 건가!",
						"english": "Did you create the forest's suffering?!",
						"japanese": "お前が森の苦痛を生み出したのか！",
						"chinese": "是你制造了森林的痛苦吗？！",
						"french": "C'est toi qui as créé la souffrance de la forêt ?!",
						"spanish": "¿Fuiste tú quien creó el sufrimiento del bosque?!",
						"vietnamese": "Ngươi đã tạo ra nỗi đau của khu rừng sao?!",
						"thai": "เจ้าเป็นคนสร้างความทรมานให้กับป่าอย่างนั้นรึ?!",
						"hindi": "क्या तुमने ही जंगल की पीड़ा उत्पन्न की है?!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "…침묵해라. 모든 것은 정해져 있다.",
						"english": "...Silence. All is set.",
						"japanese": "...黙れ。全ては定められている。",
						"chinese": "...住口。一切都已注定。",
						"french": "...Silence. Tout est écrit.",
						"spanish": "...Silencio. Todo está predestinado.",
						"vietnamese": "...Im đi. Mọi thứ đã được định sẵn.",
						"thai": "...เงียบซะ ทุกสิ่งถูกกำหนดไว้แล้ว",
						"hindi": "...चुप रहो। सब कुछ तय है।"
					}
				},
				{
					"type": "direction",
					"direction": "down",
					"action": "exit",
					"duration_ms": 400,
					"speaker": "briar"
				},
				{
					"content": {
						"korean": "결코 포기하지 않아!",
						"english": "I'll never give up!",
						"japanese": "決して諦めない！",
						"chinese": "绝不放弃！",
						"french": "Je n'abandonnerai jamais !",
						"spanish": "¡Nunca me rendiré!",
						"vietnamese": "Không bao giờ bỏ cuộc!",
						"thai": "ไม่มีวันยอมแพ้!",
						"hindi": "मैं कभी हार नहीं मानूँगा!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"숲은 깊어질수록 본색을 드러냈다.",
			"아름다운 환상은 고통의 비명으로 변하고,",
			"절망의 메아리가 심장을 파고들었다.",
			"이곳은 저주받은 곳인가, 아니면 왜곡된 진실인가."
		],
		"english": [
			"The deeper the forest, the more its true nature was revealed.",
			"Beautiful illusions turned into screams of agony,",
			"The echo of despair pierced the heart.",
			"Is this a cursed place, or a distorted truth?"
		],
		"japanese": [
			"森が深まるにつれて、その本性が現れた。",
			"美しい幻想は苦痛の悲鳴へと変わる。",
			"絶望のこだまが心臓をえぐった。",
			"ここは呪われた場所か、それとも歪んだ真実か。"
		],
		"chinese": [
			"森林越深，越显露出它的本色。",
			"美丽的幻想变成了痛苦的尖叫，",
			"绝望的回声刺穿了心脏。",
			"这里是被诅咒之地，还是扭曲的真相？"
		],
		"french": [
			"Plus la forêt s'enfonçait, plus sa vraie nature se révélait.",
			"De belles illusions se transformèrent en cris d'agonie,",
			"L'écho du désespoir transperça le cœur.",
			"Est-ce un lieu maudit, ou une vérité déformée ?"
		],
		"spanish": [
			"Cuanto más profundo se adentraba el bosque, más revelaba su verdadera naturaleza.",
			"Hermosas ilusiones se convirtieron en gritos de agonía,",
			"El eco de la desesperación traspasó el corazón.",
			"¿Es este un lugar maldito o una verdad distorsionada?"
		],
		"vietnamese": [
			"Rừng càng sâu, bản chất thật càng lộ rõ.",
			"Những ảo ảnh tuyệt đẹp biến thành tiếng thét đau đớn,",
			"Tiếng vọng của tuyệt vọng ghim sâu vào tim.",
			"Nơi đây là chốn bị nguyền rủa, hay là sự thật bị bóp méo?"
		],
		"thai": [
			"ยิ่งป่าลึกเท่าไหร่ ธาตุแท้ของมันก็ยิ่งเผยออกมา",
			"ภาพลวงตาที่สวยงามกลับกลายเป็นเสียงกรีดร้องแห่งความเจ็บปวด,",
			"เสียงสะท้อนแห่งความสิ้นหวังเจาะลึกเข้าไปในหัวใจ",
			"ที่นี่คือสถานที่ต้องสาป หรือความจริงที่บิดเบือนกันแน่"
		],
		"hindi": [
			"जैसे-जैसे जंगल गहराता गया, उसका असली रंग सामने आता गया।",
			"सुंदर भ्रम पीड़ा की चीखों में बदल गए,",
			"निराशा की प्रतिध्वनि ने हृदय को भेद दिया।",
			"क्या यह एक शापित जगह है, या एक विकृत सच्चाई है?"
		]
	}
} as const;
