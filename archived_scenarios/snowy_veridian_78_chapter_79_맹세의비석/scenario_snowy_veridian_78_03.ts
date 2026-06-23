export const scenario_snowy_veridian_78_03 = {
	"scenario_id": "snowy_veridian_78_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"boris": {
			"id": "mon_8f41e00a-9c1b-4e66-9d7a-584cc2a9af84",
			"name": {
				"korean": "보리스",
				"english": "Boris",
				"japanese": "ボリス",
				"chinese": "鲍里斯",
				"french": "Boris",
				"spanish": "Boris",
				"vietnamese": "Boris",
				"thai": "บอริส",
				"hindi": "बोरिस"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8db2ee50-a24d-43cf-a3ec-fad83142f500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/961dfd96-9db1-42aa-a15b-82ba7d1ae700/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"차가운 설원, 비석은 구원이 아닌 굴레였다.",
			"탐욕은 그 굴레를 조여왔고, 절규는 메아리쳤다.",
			"진정한 자유는, 더 깊은 절망 끝에 있을 뿐."
		],
		"english": [
			"In the cold snowfield, the monument was not salvation, but a shackles.",
			"Greed tightened its grip, and screams echoed.",
			"True freedom lies only at the end of deeper despair."
		],
		"japanese": [
			"冷たい雪原、碑石は救いではなく足枷だった。",
			"貪欲はその足枷を締め付け、絶叫はこだました。",
			"真の自由は、より深い絶望の果てにあるのみ。"
		],
		"chinese": [
			"冰冷的雪原，石碑并非救赎，而是桎梏。",
			"贪婪收紧了桎梏，绝望的尖叫声回荡。",
			"真正的自由，只存在于更深绝望的尽头。"
		],
		"french": [
			"Dans la froide étendue de neige, le monolithe n'était pas un salut, mais une entrave.",
			"La cupidité a resserré son étreinte, et les cris ont résonné.",
			"La véritable liberté ne se trouve qu'au bout d'un désespoir plus profond."
		],
		"spanish": [
			"En el frío campo nevado, el monolito no era una salvación, sino una atadura.",
			"La codicia apretó ese grillete, y los gritos resonaron.",
			"La verdadera libertad solo se encuentra al final de una desesperación más profunda."
		],
		"vietnamese": [
			"Trên cánh đồng tuyết lạnh giá, bia đá không phải cứu rỗi, mà là xiềng xích.",
			"Lòng tham siết chặt xiềng xích, tiếng thét vang vọng.",
			"Tự do đích thực chỉ nằm ở tận cùng của sự tuyệt vọng sâu hơn."
		],
		"thai": [
			"ในทุ่งหิมะอันหนาวเหน็บ ศิลาจารึกมิใช่ความรอด แต่เป็นพันธนาการ",
			"ความโลภรัดตรึงพันธนาการ เสียงกรีดร้องก้องกังวาน",
			"อิสรภาพที่แท้จริง อยู่ที่ปลายทางของความสิ้นหวังที่ลึกกว่า"
		],
		"hindi": [
			"ठंडे बर्फीले मैदान में, स्मारक मुक्ति नहीं, बल्कि एक बंधन था।",
			"लालच ने उस बंधन को कस दिया, और चीखें गूँज उठीं।",
			"सच्ची स्वतंत्रता केवल गहरे निराशा के अंत में है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "설원 한가운데, 거대한 비석이 솟아 있었다. 절박한 소원들을 집어삼킬 듯이.",
						"english": "In the middle of the snowfield, a giant monument stood tall, as if to swallow desperate wishes.",
						"japanese": "雪原の真ん中に、巨大な碑石がそびえ立っていた。絶望的な願いを飲み込むかのように。",
						"chinese": "雪原中央，矗立着一座巨大的石碑，仿佛要吞噬绝望的愿望。",
						"french": "Au milieu de l'étendue de neige, un gigantesque monolithe se dressait, comme pour engloutir les vœux désespérés.",
						"spanish": "En medio del campo nevado, un monolito gigante se alzaba, como si fuera a tragarse deseos desesperados.",
						"vietnamese": "Giữa cánh đồng tuyết, một bia đá khổng lồ sừng sững, như muốn nuốt chửng những ước nguyện tuyệt vọng.",
						"thai": "กลางทุ่งหิมะ ศิลาจารึกขนาดยักษ์ตั้งตระหง่าน ราวกับจะกลืนกินความปรารถนาอันสิ้นหวัง",
						"hindi": "बर्फीले मैदान के बीच में, एक विशाल स्मारक खड़ा था, मानो बेताब इच्छाओं को निगलने वाला हो।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "boris",
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "boris",
					"content": {
						"korean": "이 비석… 분명 뭔가 대단한 힘이 있어.",
						"english": "This monument... surely holds some great power.",
						"japanese": "この碑石…きっと何かすごい力がある。",
						"chinese": "这块石碑…一定蕴含着某种强大的力量。",
						"french": "Ce monolithe… il doit contenir une grande puissance.",
						"spanish": "Este monolito… sin duda tiene un gran poder.",
						"vietnamese": "Bia đá này... chắc chắn có một sức mạnh to lớn.",
						"thai": "ศิลาจารึกนี้... ต้องมีพลังอันยิ่งใหญ่บางอย่าง",
						"hindi": "यह स्मारक... निश्चित रूप से कुछ महान शक्ति रखता है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "조심해. 불길한 기운이야.",
						"english": "Be careful. It's an ominous aura.",
						"japanese": "気をつけろ。不吉な気配だ。",
						"chinese": "小心。有不祥的气息。",
						"french": "Fais attention. C'est une aura sinistre.",
						"spanish": "Ten cuidado. Es una energía ominosa.",
						"vietnamese": "Hãy cẩn thận. Có một luồng khí bất an.",
						"thai": "ระวังนะ มันเป็นลางร้าย",
						"hindi": "सावधान रहना। यह एक अशुभ आभा है।"
					}
				},
				{
					"speaker": "boris",
					"content": {
						"korean": "흥. 기회는 잡아야지. 내 이득은 내가 챙겨.",
						"english": "Hmph. Gotta seize the opportunity. I'll take care of my own gains.",
						"japanese": "フン。機会は掴まないと。自分の利益は自分で確保する。",
						"chinese": "哼。机会要抓住。我的利益我来争取。",
						"french": "Hm. Il faut saisir l'occasion. Je m'occupe de mes propres intérêts.",
						"spanish": "Hum. Hay que aprovechar la oportunidad. Mis beneficios los gestiono yo.",
						"vietnamese": "Hừm. Phải nắm lấy cơ hội chứ. Lợi ích của mình tự mình giành lấy.",
						"thai": "หึ โอกาสต้องคว้าไว้สิ ผลประโยชน์ของฉัน ฉันจะจัดการเอง",
						"hindi": "हम्म। मौका तो पकड़ना ही पड़ेगा। मैं अपना लाभ खुद ही सुनिश्चित करूँगा।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "boris",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "boris",
					"content": {
						"korean": "비석이 속삭였어. 원하는 것을 줄 테니, 대가를 치르라고.",
						"english": "The monument whispered. It will give you what you want, but you must pay the price.",
						"japanese": "碑石がささやいた。望むものを与えるが、代償を払えと。",
						"chinese": "石碑低语。它会给你想要的，但你必须付出代价。",
						"french": "Le monolithe a murmuré. Il te donnera ce que tu veux, but tu devras en payer le prix.",
						"spanish": "El monolito susurró. Te dará lo que quieres, pero debes pagar el precio.",
						"vietnamese": "Bia đá thì thầm. Nó sẽ cho ngươi điều ngươi muốn, nhưng ngươi phải trả giá.",
						"thai": "ศิลาจารึกกระซิบ มันจะให้สิ่งที่เจ้าต้องการ แต่เจ้าต้องจ่ายราคา",
						"hindi": "स्मारक ने फुसफुसाया। तुम्हें जो चाहिए वह मिलेगा, लेकिन तुम्हें कीमत चुकानी होगी।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "무슨 대가?",
						"english": "What price?",
						"japanese": "何の代償？",
						"chinese": "什么代价？",
						"french": "Quel prix ?",
						"spanish": "¿Qué precio?",
						"vietnamese": "Giá nào?",
						"thai": "ราคาอะไร?",
						"hindi": "क्या कीमत?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "boris",
					"content": {
						"korean": "더… 더 많은 걸 원해! 계약은 이미 시작됐어!",
						"english": "More... I want more! The contract has already begun!",
						"japanese": "もっと…もっと多くを望む！契約はもう始まっている！",
						"chinese": "更多…我想要更多！契约已经开始了！",
						"french": "Plus… je veux plus ! Le contrat a déjà commencé !",
						"spanish": "Más… ¡quiero más! ¡El contrato ya ha comenzado!",
						"vietnamese": "Nữa… ta muốn nhiều hơn nữa! Giao kèo đã bắt đầu rồi!",
						"thai": "อีก... ฉันต้องการมากกว่านี้! สัญญาได้เริ่มต้นแล้ว!",
						"hindi": "और... मुझे और चाहिए! अनुबंध पहले ही शुरू हो चुका है!"
					}
				},
				{
					"speaker": "boris",
					"content": {
						"korean": "으아악! 끝없는 고통! 이건 루프… 벗어날 수 없어!",
						"english": "Aaaargh! Endless pain! It's a loop... I can't escape!",
						"japanese": "うわあああ！終わりのない苦痛！これはループだ…逃れられない！",
						"chinese": "啊啊啊！无尽的痛苦！这是一个循环……无法摆脱！",
						"french": "Aaaargh ! Douleur sans fin ! C'est une boucle… Je ne peux pas m'échapper !",
						"spanish": "¡Aaaargh! ¡Dolor eterno! Es un bucle... ¡no puedo escapar!",
						"vietnamese": "Áaaaa! Nỗi đau vô tận! Đây là một vòng lặp... không thể thoát ra!",
						"thai": "อ๊ากกก! ความเจ็บปวดไร้ที่สิ้นสุด! นี่มันวงวน...หนีไม่พ้น!",
						"hindi": "आहहह! अंतहीन दर्द! यह एक लूप है… मैं बच नहीं सकता!"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "보리스의 절규 속에서, 부서진 유물 조각들이 반짝였다. 희미한 룬 문자 흔적과 함께.",
						"english": "Amidst Boris's screams, fragmented artifact pieces gleamed, bearing faint traces of runic script.",
						"japanese": "ボリスの絶叫の中、砕かれた遺物の破片が微かに輝き、かすかなルーン文字の痕跡を帯びていた。",
						"chinese": "在鲍里斯的尖叫声中，破碎的文物碎片闪烁着，带着微弱的符文印记。",
						"french": "Au milieu des cris de Boris, des fragments d'artefacts brisés scintillaient, portant de faibles traces de runes.",
						"spanish": "Entre los gritos de Boris, fragmentos de artefactos rotos brillaban, con débiles rastros de escritura rúnica.",
						"vietnamese": "Giữa tiếng thét của Boris, những mảnh cổ vật vỡ vụn lấp lánh, mang theo dấu vết mờ nhạt của chữ rune.",
						"thai": "ท่ามกลางเสียงกรีดร้องของบอริส เศษวัตถุโบราณที่แตกสลายส่องประกาย พร้อมด้วยร่องรอยจารึกรูนที่เลือนลาง",
						"hindi": "बोरिस की चीखों के बीच, टूटे हुए कलाकृति के टुकड़े चमक उठे, जिन पर धुंधले रूण अक्षरों के निशान थे।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						7
					],
					"duration_ms": 500
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "탐욕이 부른 대가… 영원히 묶일지어다.",
						"english": "The price of greed... Be bound forever.",
						"japanese": "強欲が招いた代償…永遠に縛られよ。",
						"chinese": "贪婪的代价……永世被束缚吧。",
						"french": "Le prix de la cupidité… Sois lié pour l'éternité.",
						"spanish": "El precio de la codicia... Que quedes atado para siempre.",
						"vietnamese": "Cái giá của lòng tham... Hãy bị trói buộc vĩnh viễn.",
						"thai": "ค่าตอบแทนของความโลภ...จงถูกผูกมัดชั่วนิรันดร์",
						"hindi": "लालच की कीमत… हमेशा के लिए बंधे रहो।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "보리스가… 저렇게 돼버리다니.",
						"english": "Boris... to end up like that.",
						"japanese": "ボリスが…あんな風になってしまうなんて。",
						"chinese": "鲍里斯……竟然变成了那样。",
						"french": "Boris… finir comme ça.",
						"spanish": "Boris... terminar así.",
						"vietnamese": "Boris... lại thành ra như vậy.",
						"thai": "บอริส...ต้องมาลงเอยแบบนั้น",
						"hindi": "बोरिस… ऐसा हो गया।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_1",
					"content": {
						"korean": "계약은… 벗어날 수 없는 거였어.",
						"english": "The contract... it was inescapable.",
						"japanese": "契約は…逃れられないものだった。",
						"chinese": "契约……是无法逃脱的。",
						"french": "Le contrat… il était inévitable.",
						"spanish": "El contrato... era ineludible.",
						"vietnamese": "Giao ước... là không thể thoát khỏi.",
						"thai": "สัญญา...มันไม่อาจหลีกเลี่ยงได้",
						"hindi": "अनुबंध… इससे बचा नहीं जा सकता था।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "direction",
					"spot": [
						5,
						2
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "네놈들의 절망도, 곧 나의 양식이 되리라.",
						"english": "Your despair, too, shall soon become my sustenance.",
						"japanese": "お前たちの絶望も、すぐに私の糧となるだろう。",
						"chinese": "你们的绝望，很快也将成为我的养料。",
						"french": "Votre désespoir, lui aussi, deviendra bientôt ma subsistance.",
						"spanish": "Vuestra desesperación, también, pronto se convertirá en mi alimento.",
						"vietnamese": "Sự tuyệt vọng của các ngươi rồi cũng sẽ trở thành lương thực của ta.",
						"thai": "ความสิ้นหวังของพวกเจ้า ก็จะกลายเป็นอาหารของข้าในไม่ช้า",
						"hindi": "तुम्हारी निराशा भी, जल्द ही मेरा पोषण बनेगी।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "설원의 고통은 끝없이 반복되었다. 굴레는 더욱 깊어졌다.",
						"english": "The agony of the snowy plains repeated endlessly. The shackles grew deeper.",
						"japanese": "雪原の苦痛は無限に繰り返された。束縛はさらに深まった。",
						"chinese": "雪原的痛苦无休止地重复着。桎梏变得更深了。",
						"french": "L'agonie des plaines enneigées se répétait sans fin. Les chaînes s'enfonçaient davantage.",
						"spanish": "La agonía de las llanuras nevadas se repetía sin cesar. El yugo se hizo más profundo.",
						"vietnamese": "Nỗi đau của bình nguyên tuyết trắng lặp đi lặp lại không ngừng. Gông cùm ngày càng sâu.",
						"thai": "ความเจ็บปวดในทุ่งหิมะซ้ำรอยไม่รู้จบ พันธนาการยิ่งหยั่งรากลึก",
						"hindi": "बर्फीले मैदानों का दर्द अंतहीन रूप से दोहराया गया। बंधन और गहरा होता गया।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "우리도… 벗어날 수 있을까?",
						"english": "Can we... escape too?",
						"japanese": "私たちも…逃れられるのだろうか？",
						"chinese": "我们也……能摆脱吗？",
						"french": "Nous aussi… pourrons-nous nous échapper ?",
						"spanish": "¿Nosotros también... podremos escapar?",
						"vietnamese": "Chúng ta... có thoát được không?",
						"thai": "เราเอง...จะหลุดพ้นได้ไหมนะ?",
						"hindi": "क्या हम भी… बच पाएंगे?"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_2",
					"content": {
						"korean": "포기할 순 없어. 보리스처럼 될 수는.",
						"english": "I can't give up. I can't end up like Boris.",
						"japanese": "諦めるわけにはいかない。ボリスのようにはなれない。",
						"chinese": "不能放弃。不能变成鲍里斯那样。",
						"french": "Je ne peux pas abandonner. Pas finir comme Boris.",
						"spanish": "No puedo rendirme. No puedo terminar como Boris.",
						"vietnamese": "Không thể từ bỏ. Không thể thành ra như Boris.",
						"thai": "ยอมแพ้ไม่ได้ จะเป็นเหมือนบอริสไม่ได้เด็ดขาด",
						"hindi": "मैं हार नहीं मान सकता। बोरिस जैसा नहीं बन सकता।"
					}
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "모두 똑같지. 결국은 이 고통에 묶일 운명.",
						"english": "Everyone's the same. Ultimately destined to be bound by this pain.",
						"japanese": "みんな同じだ。結局はこの苦痛に縛られる運命。",
						"chinese": "都一样。最终都注定要被这痛苦束缚。",
						"french": "Tout le monde est pareil. Au final, destiné à être lié à cette douleur.",
						"spanish": "Todos son iguales. Finalmente destinados a ser atados por este dolor.",
						"vietnamese": "Ai rồi cũng vậy. Cuối cùng cũng bị trói buộc bởi nỗi đau này.",
						"thai": "ทุกคนก็เหมือนกัน สุดท้ายก็ต้องถูกผูกมัดด้วยความเจ็บปวดนี้",
						"hindi": "सब एक जैसे हैं। आखिरकार इस दर्द से बंधे रहने की नियति है।"
					}
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 이 계약의 고리는… 쉽게 끊어지지 않아….",
						"english": "Ugh... This contract's bond... it won't break easily...",
						"japanese": "くっ… この契約の鎖は… 容易には断ち切れない…。",
						"chinese": "呃… 这个契约的枷锁… 不会轻易断裂…",
						"french": "Ugh... Ce lien de contrat... il ne se brisera pas si facilement...",
						"spanish": "Ugh... Este lazo del contrato... no se romperá fácilmente...",
						"vietnamese": "Khụ... Vòng ràng buộc của khế ước này... không dễ bị phá vỡ đâu...",
						"thai": "อึก... พันธะแห่งสัญญานี้... มันไม่ง่ายที่จะขาดสะบั้น...",
						"hindi": "ऊह... इस अनुबंध का बंधन... आसानी से नहीं टूटेगा..."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "끝났나? 아니… 아직 뭔가 남아있어.",
						"english": "Is it over? No... something still remains.",
						"japanese": "終わったのか？いや… まだ何かが残っている。",
						"chinese": "结束了吗？不… 还有什么东西残留着。",
						"french": "Est-ce fini ? Non... quelque chose subsiste encore.",
						"spanish": "¿Ha terminado? No... aún queda algo.",
						"vietnamese": "Kết thúc rồi sao? Không... vẫn còn gì đó.",
						"thai": "จบแล้วหรือยัง? ไม่... ยังมีอะไรบางอย่างหลงเหลืออยู่",
						"hindi": "क्या यह खत्म हो गया? नहीं... कुछ तो अभी भी बाकी है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "비석의 그림자는 여전히 설원을 뒤덮고 있었다. 굴레는 쉽게 끊어지지 않았다.",
						"english": "The shadow of the gravestone still covered the snowfield. The shackles were not easily broken.",
						"japanese": "墓石の影は未だ雪原を覆っていた。束縛は容易には断ち切れない。",
						"chinese": "墓碑的阴影依然笼罩着雪原。束缚并未轻易断裂。",
						"french": "L'ombre de la pierre tombale couvrait toujours l'étendue enneigée. Les chaînes ne se brisaient pas facilement.",
						"spanish": "La sombra de la lápida aún cubría el campo nevado. Las cadenas no se rompieron fácilmente.",
						"vietnamese": "Bóng của bia mộ vẫn bao trùm tuyết nguyên. Gông cùm không dễ bị phá vỡ.",
						"thai": "เงาของศิลาจารึกยังคงปกคลุมทุ่งหิมะ พันธนาการไม่ได้ถูกทำลายลงอย่างง่ายดาย",
						"hindi": "शिलालेख की छाया अभी भी बर्फीले मैदान को घेरे हुए थी। बंधन आसानी से नहीं टूटे थे।"
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 저항… 영원히 반복될 뿐이다.",
						"english": "Futile resistance... it will only repeat eternally.",
						"japanese": "取るに足らない抵抗… 永遠に繰り返されるだけだ。",
						"chinese": "无谓的抵抗… 只会永远重复。",
						"french": "Résistance futile... elle ne fera que se répéter éternellement.",
						"spanish": "Resistencia inútil... solo se repetirá eternamente.",
						"vietnamese": "Sự kháng cự vô ích... nó sẽ chỉ lặp lại mãi mãi.",
						"thai": "การต่อต้านที่ไร้ค่า... มันจะวนเวียนซ้ำไปชั่วนิรันดร์",
						"hindi": "तुच्छ प्रतिरोध... यह केवल अनंत काल तक दोहराया जाएगा।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 아직… 포기 안 해!",
						"english": "Damn it... not... yet... I won't give up!",
						"japanese": "ちくしょう… まだ… 諦めない！",
						"chinese": "该死… 我还… 不会放弃！",
						"french": "Maudits... je n'abandonnerai pas... pas encore !",
						"spanish": "¡Maldita sea... aún... no me rindo!",
						"vietnamese": "Chết tiệt... vẫn... chưa từ bỏ!",
						"thai": "บ้าจริง... ยัง... ไม่ยอมแพ้!",
						"hindi": "धत् तेरे की... अभी... हार नहीं मानूंगा!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"spot": [
						5,
						4
					],
					"action": "enter",
					"type": "direction",
					"speaker": "random_boss",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "드디어 여기까지 왔군. 너희의 영혼은 가장 달콤한 계약이 될 것이다.",
						"english": "You've finally made it. Your souls will be the sweetest contract.",
						"japanese": "ついにここまで来たか。お前たちの魂は、最も甘美な契約となるだろう。",
						"chinese": "终于走到这里了。你们的灵魂将成为最甜蜜的契约。",
						"french": "Vous voilà enfin. Vos âmes seront le plus doux des contrats.",
						"spanish": "Finalmente habéis llegado. Vuestras almas serán el contrato más dulce.",
						"vietnamese": "Cuối cùng các ngươi cũng đến đây. Linh hồn của các ngươi sẽ là khế ước ngọt ngào nhất.",
						"thai": "ในที่สุดเจ้าก็มาถึงที่นี่ วิญญาณของพวกเจ้าจะเป็นสัญญาที่หอมหวานที่สุด",
						"hindi": "आखिरकार तुम यहां तक आ गए। तुम्हारी आत्माएं सबसे मधुर अनुबंध होंगी。"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "헛소리 마! 우린 너희에게 묶이지 않아!",
						"english": "Nonsense! We won't be bound by you!",
						"japanese": "たわけたことを！我々はお前たちに縛られはしない！",
						"chinese": "胡说八道！我们才不会被你们束缚！",
						"french": "Absurdité ! Nous ne serons pas liés par vous !",
						"spanish": "¡Tonterías! ¡No nos ataréis!",
						"vietnamese": "Vớ vẩn! Chúng ta sẽ không bị các ngươi trói buộc!",
						"thai": "ไร้สาระ! เราจะไม่ถูกพวกเจ้าผูกมัด!",
						"hindi": "बकवास! हम तुमसे बंधे नहीं होंगे!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		}
	]
} as const;
