export const scenario_modern_molder_2_04 = {
	"scenario_id": "modern_molder_2_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"tao": {
			"id": "mon_69a30a3b-a2ed-4cba-843c-564dfc0bf16b",
			"name": {
				"korean": "타오",
				"english": "Tao",
				"japanese": "タオ",
				"chinese": "陶",
				"french": "Tao",
				"spanish": "Tao",
				"vietnamese": "Tao",
				"thai": "เต๋า",
				"hindi": "ताओ"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/c6f08212-b074-44c7-3781-a430044f5600/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/1b449b97-e269-4246-b1f2-8bd0ca473800/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"도시의 그림자가 더 짙어졌다.",
			"정보는 왜곡되고, 진실은 감춰졌다.",
			"누군가 우리를 지켜보고 있다.",
			"모든 것이 의심스러워졌다."
		],
		"english": [
			"The city's shadows deepened.",
			"Information was distorted, truth concealed.",
			"Someone is watching us.",
			"Everything became suspicious."
		],
		"japanese": [
			"都市の影がさらに濃くなった。",
			"情報は歪められ、真実は隠された。",
			"誰かが私たちを見張っている。",
			"全てが疑わしくなった。"
		],
		"chinese": [
			"城市的阴影变得更深了。",
			"信息被扭曲，真相被掩盖。",
			"有人在监视我们。",
			"一切都变得可疑了。"
		],
		"french": [
			"Les ombres de la ville s'épaissirent.",
			"L'information fut déformée, la vérité dissimulée.",
			"Quelqu'un nous observe.",
			"Tout devint suspect."
		],
		"spanish": [
			"Las sombras de la ciudad se hicieron más densas.",
			"La información fue distorsionada, la verdad oculta.",
			"Alguien nos está observando.",
			"Todo se volvió sospechoso."
		],
		"vietnamese": [
			"Bóng tối thành phố càng lúc càng dày đặc.",
			"Thông tin bị bóp méo, sự thật bị che giấu.",
			"Ai đó đang theo dõi chúng ta.",
			"Mọi thứ trở nên đáng ngờ."
		],
		"thai": [
			"เงามืดของเมืองทวีความมืดมิดยิ่งขึ้น",
			"ข้อมูลบิดเบือน ความจริงถูกปิดบัง",
			"มีใครบางคนกำลังจับตาดูเราอยู่",
			"ทุกสิ่งกลายเป็นที่น่าสงสัย"
		],
		"hindi": [
			"शहर की परछाइयां और गहरी हो गईं।",
			"जानकारी विकृत कर दी गई, सच छिपाया गया।",
			"कोई हमें देख रहा है।",
			"सब कुछ संदिग्ध हो गया।"
		]
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
						"korean": "도시의 폐허가 기괴한 현상으로 뒤틀려갔다.",
						"english": "The city's ruins were warped by bizarre phenomena.",
						"japanese": "都市の廃墟は奇妙な現象で歪んでいった。",
						"chinese": "城市的废墟被奇异的现象扭曲了。",
						"french": "Les ruines de la ville étaient déformées par d'étranges phénomènes.",
						"spanish": "Las ruinas de la ciudad fueron distorsionadas por fenómenos extraños.",
						"vietnamese": "Những tàn tích của thành phố bị biến dạng bởi những hiện tượng kỳ lạ.",
						"thai": "ซากปรักหักพังของเมืองบิดเบี้ยวด้วยปรากฏการณ์ประหลาด",
						"hindi": "शहर के खंडहर अजीबोगरीब घटनाओं से विकृत हो गए।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "젠장, 대체 무슨 일이야?",
						"english": "Damn it, what the hell is going on?",
						"japanese": "くそっ、一体何が起きてるんだ？",
						"chinese": "该死，到底发生什么事了？",
						"french": "Bon sang, qu'est-ce qui se passe ?",
						"spanish": "¡Maldita sea, qué está pasando?",
						"vietnamese": "Chết tiệt, chuyện quái gì đang xảy ra vậy?",
						"thai": "ให้ตายสิ เกิดอะไรขึ้นกันแน่?",
						"hindi": "धत्तेरे की, ये सब क्या हो रहा है?"
					}
				},
				{
					"speaker": "tao",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "tao",
					"type": "speech",
					"content": {
						"korean": "제가 분석한 자료가 이상합니다. 의도적으로 파괴된 흔적이 있어요.",
						"english": "The data I analyzed is strange. There are traces of deliberate destruction.",
						"japanese": "私が分析したデータがおかしいです。意図的に破壊された痕跡があります。",
						"chinese": "我分析的数据很奇怪。有故意破坏的痕迹。",
						"french": "Les données que j'ai analysées sont étranges. Il y a des traces de destruction délibérée.",
						"spanish": "Los datos que analicé son extraños. Hay rastros de destrucción intencionada.",
						"vietnamese": "Dữ liệu tôi phân tích có vẻ lạ. Có dấu vết bị phá hủy có chủ đích.",
						"thai": "ข้อมูลที่ฉันวิเคราะห์แปลกไป มีร่องรอยของการทำลายโดยเจตนา",
						"hindi": "मैंने जो डेटा विश्लेषण किया, वह अजीब है। जानबूझकर नष्ट करने के निशान हैं।"
					}
				},
				{
					"content": {
						"korean": "데이터가?",
						"english": "The data?",
						"japanese": "データが？",
						"chinese": "数据？",
						"french": "Les données ?",
						"spanish": "¿Los datos?",
						"vietnamese": "Dữ liệu ư?",
						"thai": "ข้อมูลเหรอ?",
						"hindi": "डेटा?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"content": {
						"korean": "현상은 더욱 심해졌고, 혼란은 가중되었다.",
						"english": "The phenomena intensified, and confusion grew.",
						"japanese": "現象はさらに悪化し、混乱は増大した。",
						"chinese": "现象更加严重，混乱加剧了。",
						"french": "Les phénomènes s'intensifièrent et la confusion s'accrut.",
						"spanish": "Los fenómenos se intensificaron y la confusión aumentó.",
						"vietnamese": "Hiện tượng ngày càng nghiêm trọng, sự hỗn loạn gia tăng.",
						"thai": "ปรากฏการณ์รุนแรงขึ้น และความสับสนก็เพิ่มมากขึ้น",
						"hindi": "घटनाएँ और तीव्र हो गईं, और भ्रम बढ़ गया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "tao",
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "이 정보들… 조작된 것이 확실합니다.",
						"english": "This information... it's definitely manipulated.",
						"japanese": "この情報…間違いなく操作されています。",
						"chinese": "这些信息…肯定是被人篡改了。",
						"french": "Ces informations... elles sont clairement manipulées.",
						"spanish": "Esta información... definitivamente está manipulada.",
						"vietnamese": "Thông tin này... chắc chắn đã bị thao túng.",
						"thai": "ข้อมูลนี้... ถูกบิดเบือนอย่างแน่นอน",
						"hindi": "यह जानकारी... निश्चित रूप से हेरफेर की गई है।"
					},
					"speaker": "tao",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "누가 이런 짓을?",
						"english": "Who did this?",
						"japanese": "誰がこんなことを？",
						"chinese": "谁干的？",
						"french": "Qui a fait ça ?",
						"spanish": "¿Quién hizo esto?",
						"vietnamese": "Ai đã làm điều này?",
						"thai": "ใครทำเรื่องนี้?",
						"hindi": "यह किसने किया?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "내부 조력자가 있을 가능성이 높습니다.",
						"english": "Likely an inside accomplice.",
						"japanese": "内部の協力者がいる可能性が高いです。",
						"chinese": "很可能有人在内部协助。",
						"french": "Un complice interne est probable.",
						"spanish": "Es probable que haya un cómplice interno.",
						"vietnamese": "Rất có thể có nội gián.",
						"thai": "น่าจะมีคนวงในช่วย",
						"hindi": "अंदरूनी मददगार की संभावना अधिक है।"
					},
					"speaker": "tao",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "배신자가 있다고?",
						"english": "A traitor, you say?",
						"japanese": "裏切り者がいると？",
						"chinese": "你说有叛徒？",
						"french": "Un traître, vous dites ?",
						"spanish": "¿Hay un traidor?",
						"vietnamese": "Có kẻ phản bội sao?",
						"thai": "มีคนทรยศงั้นเหรอ?",
						"hindi": "कोई गद्दार है क्या?"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "모든 정보가 꼬여버렸다. 누구도 믿을 수 없었다.",
						"english": "All info twisted. Trust no one.",
						"japanese": "情報が錯綜し、誰も信じられなかった。",
						"chinese": "所有情报都混淆了。谁都不可信。",
						"french": "Toutes les infos tordues. On ne pouvait faire confiance à personne.",
						"spanish": "Toda la información retorcida. Nadie era de fiar.",
						"vietnamese": "Mọi thông tin đều rối ren. Không thể tin ai được.",
						"thai": "ข้อมูลทั้งหมดบิดเบือนไปหมด ไม่มีใครน่าเชื่อถือเลย",
						"hindi": "सारी जानकारी उलझ गई थी। किसी पर भरोसा नहीं किया जा सकता था।"
					}
				},
				{
					"spot": [
						4,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "tao"
				},
				{
					"content": {
						"korean": "우리의 움직임을 너무 잘 알고 있습니다.",
						"english": "They know our moves too well.",
						"japanese": "我々の動きをよく知りすぎている。",
						"chinese": "他们对我们的行动了如指掌。",
						"french": "Ils connaissent trop bien nos mouvements.",
						"spanish": "Conocen demasiado bien nuestros movimientos.",
						"vietnamese": "Họ biết rõ mọi động thái của chúng ta.",
						"thai": "พวกเขารู้ความเคลื่อนไหวของเราดีเกินไป",
						"hindi": "वे हमारी चालों को बहुत अच्छी तरह जानते हैं।"
					},
					"emotion": "base",
					"speaker": "tao",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그럼… 우리 사이에 스파이가 있다는 거야?",
						"english": "So... there's a spy among us?",
						"japanese": "じゃあ…我々の中にスパイがいると？",
						"chinese": "那么……我们中间有间谍？",
						"french": "Alors... il y a un espion parmi nous ?",
						"spanish": "Entonces... ¿hay un espía entre nosotros?",
						"vietnamese": "Vậy... có gián điệp trong chúng ta sao?",
						"thai": "งั้น... มีสายลับในหมู่พวกเราเหรอ?",
						"hindi": "तो... हमारे बीच कोई जासूस है?"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "가능성이 높습니다. 이 자료들이 증거입니다.",
						"english": "Highly likely. These data are proof.",
						"japanese": "可能性が高いです。この資料が証拠です。",
						"chinese": "可能性很高。这些资料就是证据。",
						"french": "Très probable. Ces données en sont la preuve.",
						"spanish": "Es muy probable. Estos datos son la prueba.",
						"vietnamese": "Rất có khả năng. Những tài liệu này là bằng chứng.",
						"thai": "เป็นไปได้สูง ข้อมูลเหล่านี้คือหลักฐาน",
						"hindi": "बहुत संभावना है। ये सामग्री सबूत हैं।"
					},
					"emotion": "sad",
					"speaker": "tao",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…젠장.",
						"english": "...Damn it.",
						"japanese": "…ちくしょう。",
						"chinese": "……该死。",
						"french": "...Mince.",
						"spanish": "...Maldita sea.",
						"vietnamese": "...Chết tiệt.",
						"thai": "...ให้ตายสิ",
						"hindi": "...धिक्कार है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "의심은 현실이 되어 탐험대를 옥죄었다.",
						"english": "Doubt became reality, choking the expedition.",
						"japanese": "疑念は現実となり、探検隊を締め付けた。",
						"chinese": "疑虑变成现实，束缚着探险队。",
						"french": "Le doute devint réalité, étranglant l'expédition.",
						"spanish": "La duda se hizo realidad, asfixiando a la expedición.",
						"vietnamese": "Nghi ngờ trở thành hiện thực, bóp nghẹt đoàn thám hiểm.",
						"thai": "ความสงสัยกลายเป็นความจริง บีบรัดคณะสำรวจ",
						"hindi": "संदेह वास्तविकता बन गया और अभियान दल को जकड़ लिया।"
					}
				},
				{
					"speaker": "tao",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "이제 되돌아갈 수 없습니다.",
						"english": "No turning back now.",
						"japanese": "もう後戻りはできません。",
						"chinese": "现在无法回头了。",
						"french": "Impossible de faire marche arrière maintenant.",
						"spanish": "Ya no hay vuelta atrás.",
						"vietnamese": "Không thể quay lại được nữa.",
						"thai": "ตอนนี้กลับไปไม่ได้แล้ว",
						"hindi": "अब पीछे नहीं हटा जा सकता।"
					},
					"speaker": "tao",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "누가 됐든, 끝장을 봐야겠어.",
						"english": "Whoever it is, I'll finish this.",
						"japanese": "誰であろうと、決着をつけねばならない。",
						"chinese": "无论它是谁，我都必须了结它。",
						"french": "Qui que ce soit, je dois en finir.",
						"spanish": "Quien sea, tengo que acabar con esto.",
						"vietnamese": "Dù là ai, ta cũng phải kết thúc chuyện này.",
						"thai": "ไม่ว่าจะเป็นใคร ฉันจะต้องจัดการให้จบสิ้น",
						"hindi": "जो कोई भी हो, मुझे इसे ख़त्म करना होगा।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "tao",
					"type": "speech",
					"content": {
						"korean": "조심하십시오. 그들은 당신보다 한 수 앞서고 있습니다.",
						"english": "Be careful. They're one step ahead of you.",
						"japanese": "ご注意ください。彼らはあなたより一枚上手です。",
						"chinese": "请小心。他们领先你一步。",
						"french": "Soyez prudent. Ils ont une longueur d'avance sur vous.",
						"spanish": "Tenga cuidado. Llevan un paso por delante de usted.",
						"vietnamese": "Hãy cẩn thận. Bọn chúng đã đi trước ngươi một bước.",
						"thai": "ระวังให้ดี พวกเขาเหนือกว่าคุณหนึ่งก้าว",
						"hindi": "सावधान रहें। वे आपसे एक कदम आगे हैं।"
					}
				},
				{
					"content": {
						"korean": "…!",
						"english": "…!",
						"japanese": "…！",
						"chinese": "…！",
						"french": "…!",
						"spanish": "…!",
						"vietnamese": "…!",
						"thai": "…!",
						"hindi": "…!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "기괴한 그림자가 탐험대를 막아섰다. 알 수 없는 위압감이었다.",
						"english": "A grotesque shadow blocked the expedition. An unknown oppressive aura.",
						"japanese": "奇怪な影が探検隊を阻んだ。それは未知の威圧感だった。",
						"chinese": "一个怪异的影子挡住了探险队。那是一种莫名的压迫感。",
						"french": "Une ombre grotesque barra la route à l'expédition. Une aura oppressante inconnue.",
						"spanish": "Una sombra grotesca bloqueó a la expedición. Una aura opresiva desconocida.",
						"vietnamese": "Một cái bóng kỳ dị chặn đường đoàn thám hiểm. Một uy áp không thể lý giải.",
						"thai": "เงาประหลาดหยุดยั้งคณะสำรวจไว้ มันคือความรู้สึกกดดันที่ไม่อาจทราบได้",
						"hindi": "एक विकृत छाया ने अभियान दल को रोक दिया। यह एक अज्ञात भयावहता थी।"
					}
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "여기까지 온 것을 환영한다. 하지만… 아무것도 바꿀 순 없어.",
						"english": "Welcome this far. But… nothing can be changed.",
						"japanese": "ここまで来たことを歓迎する。だが…何も変えることはできない。",
						"chinese": "欢迎来到这里。但是…你什么也改变不了。",
						"french": "Bienvenue jusqu'ici. Mais… rien ne peut être changé.",
						"spanish": "Bienvenidos hasta aquí. Pero… nada puede cambiarse.",
						"vietnamese": "Hoan nghênh đã đến đây. Nhưng… ngươi không thể thay đổi bất cứ điều gì.",
						"thai": "ยินดีต้อนรับที่มาถึงที่นี่ แต่… ไม่มีอะไรเปลี่ยนแปลงได้",
						"hindi": "यहां तक ​​आने का स्वागत है। लेकिन… कुछ भी नहीं बदला जा सकता।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네가 모든 걸 조작한 배후냐?",
						"english": "Are you behind all this?",
						"japanese": "お前が全てを操っていた黒幕か？",
						"chinese": "你是幕后操纵一切的人吗？",
						"french": "C'est toi le cerveau derrière tout ça ?",
						"spanish": "¿Eres tú quien manipula todo?",
						"vietnamese": "Ngươi là kẻ đứng sau giật dây mọi chuyện à?",
						"thai": "แกคือเบื้องหลังของเรื่องทั้งหมดนี้เหรอ?",
						"hindi": "क्या तुम ही इन सब के पीछे का मास्टरमाइंड हो?"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그래. 그리고 너희는 실패할 것이다.",
						"english": "Yes. And you will fail.",
						"japanese": "そうだ。そしてお前たちは失敗するだろう。",
						"chinese": "是的。而你们将会失败。",
						"french": "Oui. Et vous échouerez.",
						"spanish": "Sí. Y fracasaréis.",
						"vietnamese": "Đúng vậy. Và các ngươi sẽ thất bại.",
						"thai": "ใช่ และพวกแกจะล้มเหลว",
						"hindi": "हाँ। और तुम सब असफल हो जाओगे।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "망할…!",
						"english": "Damn it…!",
						"japanese": "くそっ…！",
						"chinese": "该死…！",
						"french": "Bon sang…!",
						"spanish": "¡Maldita sea…!",
						"vietnamese": "Chết tiệt…!",
						"thai": "ให้ตายสิ…!",
						"hindi": "धिक्कार है…!"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 탐험대를 집어삼켰다.",
						"english": "The massive shadow devoured the expedition team.",
						"japanese": "巨大な影が探検隊を飲み込んだ。",
						"chinese": "巨大的影子吞噬了探险队。",
						"french": "L'ombre gigantesque dévora l'équipe d'expédition.",
						"spanish": "La sombra gigantesca devoró al equipo de expedición.",
						"vietnamese": "Bóng đen khổng lồ nuốt chửng đội thám hiểm.",
						"thai": "เงาขนาดมหึมากลืนกินทีมสำรวจ",
						"hindi": "विशाल छाया ने अभियान दल को निगल लिया।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "하찮은 것들. 너희는 그저 도구였을 뿐.",
						"english": "Insignificant beings. You were merely tools.",
						"japanese": "取るに足らない者たちよ。お前たちはただの道具に過ぎなかった。",
						"chinese": "渺小的存在。你们不过是工具罢了。",
						"french": "Êtres insignifiants. Vous n'étiez que des outils.",
						"spanish": "Seres insignificantes. No fuisteis más que herramientas.",
						"vietnamese": "Những kẻ tầm thường. Các ngươi chỉ là công cụ mà thôi.",
						"thai": "สิ่งมีชีวิตไร้ค่า พวกเจ้าเป็นเพียงเครื่องมือเท่านั้น",
						"hindi": "तुच्छ प्राणी। तुम तो बस उपकरण थे।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…아직 끝나지 않았어. 절대로!",
						"english": "...It's not over yet. Never!",
						"japanese": "…まだ終わってない。絶対に！",
						"chinese": "…还没结束。绝不！",
						"french": "...Ce n'est pas encore fini. Jamais !",
						"spanish": "...Todavía no ha terminado. ¡Jamás!",
						"vietnamese": "...Chưa kết thúc đâu. Tuyệt đối không!",
						"thai": "...ยังไม่จบหรอก ไม่มีทาง!",
						"hindi": "...अभी खत्म नहीं हुआ है। कभी नहीं!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "훗… 재밌군. 다시 도전해 봐라.",
						"english": "Hmph... Amusing. Try again.",
						"japanese": "フッ… 面白い。もう一度挑んでみろ。",
						"chinese": "哼…有意思。再来挑战吧。",
						"french": "Hmph... Amusant. Réessaie.",
						"spanish": "Hmph... Divertido. Inténtalo de nuevo.",
						"vietnamese": "Hừm… Thú vị đấy. Thử thách lại đi.",
						"thai": "ฮึ่ม... น่าสนใจดี ลองท้าทายอีกครั้งสิ",
						"hindi": "हम्म... दिलचस्प। फिर से कोशिश करो।"
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "크윽… 아직 끝나지 않았다. 이 도시는… 나 없이는 무너질 것이다.",
						"english": "Ugh… It's not over yet. This city… will fall without me.",
						"japanese": "くっ…まだ終わっていない。この都市は…私なしでは崩壊するだろう。",
						"chinese": "呃…还没结束。这座城市…没有我将会崩塌。",
						"french": "Ugh… Ce n'est pas encore fini. Cette ville… s'effondrera sans moi.",
						"spanish": "Ugh… Todavía no ha terminado. Esta ciudad… se desmoronará sin mí.",
						"vietnamese": "Khụ… Vẫn chưa kết thúc đâu. Thành phố này… sẽ sụp đổ nếu không có ta.",
						"thai": "อึก… ยังไม่จบหรอก เมืองนี้… จะพังทลายลงโดยไม่มีฉัน",
						"hindi": "उफ़… यह अभी ख़त्म नहीं हुआ है। यह शहर… मेरे बिना ढह जाएगा।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "무슨 소리야?",
						"english": "What do you mean?",
						"japanese": "どういう意味だ？",
						"chinese": "你说什么？",
						"french": "Que veux-tu dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ngươi nói gì vậy?",
						"thai": "คุณหมายความว่าอะไร?",
						"hindi": "तुम्हारा क्या मतलब है?"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "너희는… 진실의 극히 일부만을 본 것이다. {random_boss}는… 진짜가 아니야.",
						"english": "You've only seen a fraction of the truth. {random_boss} isn't real.",
						"japanese": "お前たちは… 真実のほんの一部を見たに過ぎない。{random_boss}は… 本物ではない。",
						"chinese": "你们只看到了真相的极小一部分。{random_boss}…不是真的。",
						"french": "Vous n'avez vu qu'une infime partie de la vérité. {random_boss} n'est pas réel.",
						"spanish": "Solo habéis visto una ínfima parte de la verdad. {random_boss} no es real.",
						"vietnamese": "Các ngươi… chỉ thấy một phần rất nhỏ của sự thật. {random_boss}… không phải là thật.",
						"thai": "พวกเจ้า… เห็นแค่เสี้ยวหนึ่งของความจริงเท่านั้น {random_boss}… ไม่ใช่ของจริง",
						"hindi": "तुमने… सच का एक छोटा सा हिस्सा ही देखा है। {random_boss}… असली नहीं है।"
					}
				},
				{
					"content": {
						"korean": "진짜가 아니라고?",
						"english": "Not real?",
						"japanese": "本物ではないだと？",
						"chinese": "不是真的？",
						"french": "Pas réel ?",
						"spanish": "¿No es real?",
						"vietnamese": "Không phải là thật sao?",
						"thai": "ไม่ใช่ของจริง?",
						"hindi": "असली नहीं?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자의 육체가 흩어졌다. 그러나 의심은 더욱 깊어졌다. 이 모든 것은 거대한 계획의 일부인가.",
						"english": "The massive shadow's form scattered. Yet, suspicion deepened. Is all this part of a grand scheme?",
						"japanese": "巨大な影の肉体が霧散した。しかし、疑念はさらに深まった。これらすべては壮大な計画の一部なのだろうか。",
						"chinese": "巨大的影子消散了。然而，疑虑却更深了。这一切都是宏伟计划的一部分吗？",
						"french": "Le corps de l'ombre gigantesque se dispersa. Pourtant, le doute s'intensifia. Tout cela fait-il partie d'un vaste plan ?",
						"spanish": "El cuerpo de la sombra gigantesca se dispersó. Sin embargo, la sospecha se profundizó. ¿Es todo esto parte de un gran plan?",
						"vietnamese": "Thân thể của bóng đen khổng lồ tan biến. Tuy nhiên, sự nghi ngờ càng sâu sắc hơn. Tất cả những điều này có phải là một phần của kế hoạch lớn?",
						"thai": "ร่างเงาขนาดมหึมาสลายไป ทว่า ความสงสัยกลับยิ่งเพิ่มขึ้น นี่ทั้งหมดเป็นส่วนหนึ่งของแผนการอันยิ่งใหญ่หรือไม่",
						"hindi": "विशाल छाया का शरीर बिखर गया। फिर भी, संदेह और गहरा हो गया। क्या यह सब एक बड़ी योजना का हिस्सा है?"
					}
				}
			]
		}
	]
} as const;
