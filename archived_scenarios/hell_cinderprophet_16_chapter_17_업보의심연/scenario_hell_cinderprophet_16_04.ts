export const scenario_hell_cinderprophet_16_04 = {
	"scenario_id": "hell_cinderprophet_16_04",
	"order": 4,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"char": {
			"id": "mon_b67c6c4a-6263-4db5-8f14-59d0a906a3fc",
			"name": {
				"korean": "캐릭터",
				"english": "Char",
				"japanese": "キャラクター",
				"chinese": "角色",
				"french": "Personnage",
				"spanish": "Personaje",
				"vietnamese": "Nhân vật",
				"thai": "ตัวละคร",
				"hindi": "चरित्र"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/81f44415-b42f-499c-e22b-183f8663dd00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a1c5b19a-a5b5-40d2-e5b1-7a4f81abb700/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"지옥은 끝없이 과거를 토해냈다.",
			"낡은 기록들, 미친 예언자의 속삭임.",
			"진실은 파편이 되어 환영 속에 숨어들었다.",
			"믿을 수 없는 조각들. 무엇이 진짜고, 무엇이 거짓인가?"
		],
		"english": [
			"Hell ceaselessly spewed forth the past.",
			"Old records, a mad prophet's whispers.",
			"Truth became fragments, hiding within illusions.",
			"Unbelievable fragments. What is real, what is false?"
		],
		"japanese": [
			"「地獄は絶えず過去を吐き出した。」",
			"「古き記録、狂気の預言者の囁き。」",
			"「真実は破片となり、幻影の中に隠れた。」",
			"「信じがたい断片。何が真実で、何が偽りなのか？」"
		],
		"chinese": [
			"地狱无休止地吐出过去。",
			"古老的记录，疯狂预言者的低语。",
			"真相化作碎片，潜藏于幻象之中。",
			"难以置信的碎片。什么是真，什么是假？"
		],
		"french": [
			"L'Enfer crachait sans cesse le passé.",
			"De vieux registres, les murmures d'un prophète fou.",
			"La vérité se fragmenta, se cachant dans les illusions.",
			"Des fragments incroyables. Qu'est-ce qui est vrai, qu'est-ce qui est faux ?"
		],
		"spanish": [
			"El Infierno vomitaba sin cesar el pasado.",
			"Registros antiguos, susurros de un profeta loco.",
			"La verdad se hizo fragmentos, escondiéndose en las ilusiones.",
			"Fragmentos increíbles. ¿Qué es real y qué es falso?"
		],
		"vietnamese": [
			"Địa ngục không ngừng nôn ra quá khứ.",
			"Những ghi chép cũ, lời thì thầm của một nhà tiên tri điên.",
			"Sự thật tan thành mảnh vụn, ẩn mình trong ảo ảnh.",
			"Những mảnh ghép không thể tin được. Cái gì là thật, cái gì là giả?"
		],
		"thai": [
			"นรกพ่นอดีตออกมาไม่หยุดหย่อน",
			"บันทึกเก่าแก่ เสียงกระซิบของศาสดาผู้บ้าคลั่ง",
			"ความจริงกลายเป็นเสี่ยง ซ่อนตัวอยู่ในภาพลวงตา",
			"ชิ้นส่วนเหลือเชื่อ อะไรคือจริง อะไรคือเท็จ?"
		],
		"hindi": [
			"नरक ने अंतहीन रूप से अतीत को उगला।",
			"पुराने अभिलेख, एक पागल पैगंबर की फुसफुसाहट।",
			"सत्य टुकड़े बन गया, भ्रमों में छिप गया।",
			"अविश्वसनीय टुकड़े। क्या सच है, क्या झूठ?"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "char"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이건… 오래된 기록들이야. 당신들이 찾는 답이 있을지도 모르지.",
						"english": "These are... ancient records. The answers you seek might be here.",
						"japanese": "「これらは…古き記録だ。お前たちが探す答えがあるやもしれない。」",
						"chinese": "这些是…古老的记录。你们要找的答案或许就在其中。",
						"french": "Ce sont... d'anciens registres. Les réponses que vous cherchez s'y trouvent peut-être.",
						"spanish": "Estos son... registros antiguos. Las respuestas que buscáis podrían estar aquí.",
						"vietnamese": "Đây là... những ghi chép cổ xưa. Câu trả lời bạn tìm kiếm có thể ở đây.",
						"thai": "นี่คือ... บันทึกโบราณ คำตอบที่คุณตามหาอาจอยู่ที่นี่",
						"hindi": "ये... प्राचीन अभिलेख हैं। तुम्हें जो जवाब चाहिए, वो शायद यहीं हो।"
					},
					"speaker": "char",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "기록? 이게 다 뭐야?",
						"english": "Records? What is all this?",
						"japanese": "「記録？これ、一体何？」",
						"chinese": "记录？这都是些什么？",
						"french": "Des registres ? Qu'est-ce que tout ça ?",
						"spanish": "¿Registros? ¿Qué es todo esto?",
						"vietnamese": "Ghi chép? Tất cả những thứ này là gì?",
						"thai": "บันทึก? นี่มันอะไรกัน?",
						"hindi": "अभिलेख? ये सब क्या है?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "char",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "고대 예언자의 파편들. 대부분은 소실됐어.",
						"english": "Fragments of an ancient prophet. Most have been lost.",
						"japanese": "「古代の預言者の破片だ。ほとんどは失われている。」",
						"chinese": "古代预言者的碎片。大部分都已遗失。",
						"french": "Des fragments d'un prophète ancien. La plupart ont été perdus.",
						"spanish": "Fragmentos de un profeta antiguo. La mayoría se han perdido.",
						"vietnamese": "Những mảnh vỡ của một nhà tiên tri cổ đại. Hầu hết đã bị mất.",
						"thai": "ชิ้นส่วนของศาสดาโบราณ ส่วนใหญ่สูญหายไปแล้ว",
						"hindi": "एक प्राचीन पैगंबर के टुकड़े। अधिकांश खो गए हैं।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "char"
				},
				{
					"speaker": "char",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 부분은… 예언자가 지옥을 막으려 했다는 기록이야.",
						"english": "This part... records the prophet's attempt to stop hell.",
						"japanese": "「この部分は…預言者が地獄を止めようとした記録だ。」",
						"chinese": "这部分…记录了预言者试图阻止地狱的尝试。",
						"french": "Cette partie... relate la tentative du prophète d'arrêter l'Enfer.",
						"spanish": "Esta parte... registra el intento del profeta de detener el infierno.",
						"vietnamese": "Phần này... ghi lại nỗ lực của nhà tiên tri nhằm ngăn chặn địa ngục.",
						"thai": "ส่วนนี้... บันทึกความพยายามของศาสดาที่จะหยุดยั้งนรก",
						"hindi": "यह हिस्सा... पैगंबर के नरक को रोकने के प्रयास को दर्ज करता है।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "지옥을 막아? 그럼 왜 이렇게 된 건데?",
						"english": "Stop hell? Then why did this happen?",
						"japanese": "「地獄を止める？じゃあ、なんでこうなったの？」",
						"chinese": "阻止地狱？那为什么会变成这样？",
						"french": "Arrêter l'Enfer ? Alors pourquoi cela s'est-il passé ainsi ?",
						"spanish": "¿Detener el infierno? Entonces, ¿por qué sucedió esto?",
						"vietnamese": "Ngăn chặn địa ngục? Vậy tại sao lại thành ra thế này?",
						"thai": "หยุดนรก? แล้วทำไมถึงเป็นแบบนี้ล่ะ?",
						"hindi": "नरक को रोको? तो फिर ऐसा क्यों हुआ?"
					}
				},
				{
					"speaker": "char",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "기록은 거기까지야. 비극적인 시도였다는 암시만 남았어.",
						"english": "The records end there. Only an implication of a tragic attempt remains.",
						"japanese": "「記録はそこまでだ。悲劇的な試みだったという暗示だけが残っている。」",
						"chinese": "记录就到此为止了。只剩下悲剧性尝试的暗示。",
						"french": "Les registres s'arrêtent là. Seule subsiste l'implication d'une tentative tragique.",
						"spanish": "Los registros terminan ahí. Solo queda la implicación de un intento trágico.",
						"vietnamese": "Ghi chép chỉ đến đó. Chỉ còn lại gợi ý về một nỗ lực bi thảm.",
						"thai": "บันทึกสิ้นสุดลงแค่นั้น เหลือเพียงนัยยะของการพยายามอันน่าเศร้า",
						"hindi": "अभिलेख वहीं खत्म हो जाते हैं। केवल एक दुखद प्रयास का संकेत बचा है।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "모호하잖아.",
						"english": "That's vague.",
						"japanese": "曖昧だね。",
						"chinese": "太模糊了。",
						"french": "C'est ambigu.",
						"spanish": "Es ambiguo.",
						"vietnamese": "Mơ hồ quá.",
						"thai": "มันคลุมเครือนะ",
						"hindi": "यह अस्पष्ट है।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "char"
				},
				{
					"speaker": "char",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어떤 기록은 예언자가 구원자라고 해. 다른 기록은… 파멸을 불러왔다고.",
						"english": "Some records say the Prophet is a savior. Others… say they brought ruin.",
						"japanese": "ある記録は預言者が救世主だと言う。別の記録は…破滅を招いたと。",
						"chinese": "有些记载说预言者是救世主。另一些则说……他们带来了毁灭。",
						"french": "Certains récits disent que le Prophète est un sauveur. D'autres… qu'il a apporté la ruine.",
						"spanish": "Algunos registros dicen que el Profeta es un salvador. Otros… que trajo la ruina.",
						"vietnamese": "Vài ghi chép nói Tiên Tri là đấng cứu thế. Vài ghi chép khác thì… họ đã mang đến tai họa.",
						"thai": "บันทึกบางฉบับกล่าวว่าผู้พยากรณ์คือผู้กอบกู้ ส่วนฉบับอื่น… กลับกล่าวว่าพวกเขาได้นำมาซึ่งหายนะ",
						"hindi": "कुछ अभिलेख कहते हैं कि पैगंबर एक उद्धारकर्ता हैं। अन्य… कहते हैं कि वे विनाश लेकर आए।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "진짜 진실은 뭔데? 대체 뭘 믿으라는 거야?",
						"english": "What's the real truth? What am I supposed to believe?",
						"japanese": "本当の真実は何だ？一体何を信じろというんだ？",
						"chinese": "真正的真相是什么？我到底该相信什么？",
						"french": "Quelle est la vraie vérité ? Que suis-je censé croire ?",
						"spanish": "Cuál es la verdad? ¿Qué se supone que debo creer?",
						"vietnamese": "Sự thật là gì? Rốt cuộc tôi nên tin vào điều gì?",
						"thai": "ความจริงแท้คืออะไร? แล้วฉันควรจะเชื่ออะไรกันแน่?",
						"hindi": "असली सच्चाई क्या है? मैं आखिर किस पर विश्वास करूं?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "기록은 그저 기록일 뿐. 판단은 당신들의 몫이야.",
						"english": "Records are just records. The judgment is yours.",
						"japanese": "記録はただの記録だ。判断は君たち次第だ。",
						"chinese": "记载终归只是记载。判断是你们自己的事。",
						"french": "Les récits ne sont que des récits. Le jugement vous appartient.",
						"spanish": "Los registros son solo registros. El juicio es vuestro.",
						"vietnamese": "Ghi chép chỉ là ghi chép. Phán xét là của các người.",
						"thai": "บันทึกก็เป็นแค่บันทึก การตัดสินใจเป็นเรื่องของพวกเจ้า",
						"hindi": "अभिलेख तो बस अभिलेख हैं। फैसला आपका है।"
					},
					"speaker": "char",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "뒤섞인 진실과 거짓. 혼돈만이 가득했다.",
						"english": "Truth and lies intertwined. Only chaos reigned.",
						"japanese": "真実と虚偽が入り乱れ、混沌だけが満ちていた。",
						"chinese": "真相与谎言交织。只有混沌充斥其中。",
						"french": "Vérité et mensonges entremêlés. Seul le chaos régnait.",
						"spanish": "Verdad y mentiras mezcladas. Solo el caos reinaba.",
						"vietnamese": "Thật giả lẫn lộn. Chỉ có hỗn loạn ngập tràn.",
						"thai": "ความจริงและคำลวงปะปนกัน มีเพียงความโกลาหลเท่านั้นที่เต็มไปหมด",
						"hindi": "सत्य और असत्य आपस में उलझ गए। केवल अराजकता ही थी।"
					},
					"speaker": "narrator",
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
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "char"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "점점 더 미궁에 빠지는 것 같아. 우린 뭘 쫓고 있는 거지?",
						"english": "It feels like we're getting deeper into the labyrinth. What are we chasing?",
						"japanese": "ますます迷宮入りしているようだ。我々は何を追っているんだ？",
						"chinese": "感觉我们正越陷越深。我们到底在追寻什么？",
						"french": "On dirait qu'on s'enfonce de plus en plus dans le labyrinthe. Que poursuivons-nous ?",
						"spanish": "Parece que nos adentramos más y más en el laberinto. ¿Qué estamos persiguiendo?",
						"vietnamese": "Hình như chúng ta đang ngày càng lún sâu vào mê cung. Chúng ta đang đuổi theo thứ gì vậy?",
						"thai": "ดูเหมือนเราจะยิ่งหลงลึกเข้าไปในเขาวงกตแล้ว เรากำลังตามหาอะไรกันแน่?",
						"hindi": "मुझे लग रहा है कि हम और गहरे दलदल में फंसते जा रहे हैं। हम क्या पीछा कर रहे हैं?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 기록들은… 스스로를 지키려고 해. 진실을 파고들수록 더 깊은 혼돈을 마주하게 될 거야.",
						"english": "These records… they try to protect themselves. The deeper you dig for the truth, the deeper chaos you'll face.",
						"japanese": "この記録は…自らを守ろうとしている。真実を深く掘り下げるほど、より深い混沌に直面するだろう。",
						"chinese": "这些记载……它们试图保护自己。你越是深挖真相，就越会面临更深的混沌。",
						"french": "Ces récits… ils essaient de se protéger. Plus vous creuserez la vérité, plus vous ferez face à un chaos profond.",
						"spanish": "Estos registros… intentan protegerse. Cuanto más profundices en la verdad, más caos profundo enfrentarás.",
						"vietnamese": "Những ghi chép này… chúng cố bảo vệ bản thân. Càng đào sâu vào sự thật, ngươi sẽ càng đối mặt với sự hỗn loạn sâu sắc hơn.",
						"thai": "บันทึกเหล่านี้… พยายามปกป้องตัวเอง ยิ่งเจ้าขุดคุ้ยความจริงลึกเท่าไหร่ เจ้าก็จะยิ่งเผชิญกับความโกลาหลที่ลึกซึ้งเท่านั้น",
						"hindi": "ये अभिलेख… खुद को बचाने की कोशिश कर रहे हैं। जितना गहरा आप सच्चाई की खुदाई करेंगे, उतना ही गहरा अराजकता का सामना करेंगे।"
					},
					"speaker": "char",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "건방진 것들… 파편화된 진실 속에서 길을 잃어라!",
						"english": "Insolent fools… Get lost in the fragmented truth!",
						"japanese": "図々しい奴らめ… 断片化した真実の中で迷え！",
						"chinese": "傲慢的家伙们……在支离破碎的真相中迷失吧！",
						"french": "Insolents… Perdez-vous dans la vérité fragmentée !",
						"spanish": "¡Insolentes… Perdeos en la verdad fragmentada!",
						"vietnamese": "Đồ ngạo mạn… Hãy lạc lối trong sự thật vụn vỡ đi!",
						"thai": "พวกอวดดี… จงหลงทางอยู่ในความจริงที่แตกสลายไปซะ!",
						"hindi": "ढीठो… खंडित सत्य में खो जाओ!"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이게… 기록이 말하는 혼돈인가?",
						"english": "Is this… the chaos the records speak of?",
						"japanese": "これが…記録が語る混沌なのか？",
						"chinese": "这就是……记载中说的混沌吗？",
						"french": "Est-ce… le chaos dont parlent les récits ?",
						"spanish": "¿Es esto… el caos del que hablan los registros?",
						"vietnamese": "Đây có phải… là sự hỗn loạn mà ghi chép nói đến không?",
						"thai": "นี่หรือคือ… ความโกลาหลที่บันทึกกล่าวถึง?",
						"hindi": "क्या यह… वही अराजकता है जिसकी अभिलेख बात करते हैं?"
					},
					"speaker": "character_any",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 길을 막았다. 뒤틀린 진실의 파수꾼이었다.",
						"english": "A colossal shadow blocked the path. It was the guardian of twisted truth.",
						"japanese": "巨大な影が道を塞いだ。歪んだ真実の番人だった。",
						"chinese": "巨大的黑影挡住了去路。那是扭曲真相的守卫者。",
						"french": "Une ombre colossale bloquait le chemin. C'était le gardien de la vérité déformée.",
						"spanish": "Una sombra colosal bloqueaba el camino. Era el guardián de la verdad retorcida.",
						"vietnamese": "Một cái bóng khổng lồ chắn lối. Đó là người canh giữ sự thật méo mó.",
						"thai": "เงาขนาดมหึมาขวางทางอยู่ มันคือผู้พิทักษ์แห่งความจริงที่บิดเบือน",
						"hindi": "एक विशालकाय छाया ने रास्ता रोक लिया। वह विकृत सत्य का संरक्षक था।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "어리석은 것들. 파편을 모아봤자 아무것도 바뀌지 않아.",
						"english": "Fools. Collecting fragments changes nothing.",
						"japanese": "愚かな者たち。破片を集めても何も変わらぬ。",
						"chinese": "愚蠢的东西。收集碎片也改变不了任何事。",
						"french": "Imbéciles. Rassembler les fragments ne changera rien.",
						"spanish": "Tontos. Recoger los fragmentos no cambiará nada.",
						"vietnamese": "Đồ ngốc. Thu thập mảnh vỡ chẳng thay đổi được gì.",
						"thai": "พวกโง่เง่า การเก็บเศษเสี้ยวไม่เปลี่ยนแปลงอะไรหรอก",
						"hindi": "मूर्खों। टुकड़े जमा करने से कुछ नहीं बदलेगा।"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "진실을 밝혀낼 거야. 네가 지키는 게 뭐든.",
						"english": "I'll uncover the truth. No matter what you're protecting.",
						"japanese": "真実を暴く。お前が何を護ろうとも。",
						"chinese": "我会揭露真相。无论你守护着什么。",
						"french": "Je découvrirai la vérité. Quoi que tu protèges.",
						"spanish": "Revelaré la verdad. No importa lo que protejas.",
						"vietnamese": "Ta sẽ phơi bày sự thật. Dù ngươi đang bảo vệ thứ gì.",
						"thai": "ข้าจะเปิดเผยความจริง ไม่ว่าเจ้าจะปกป้องอะไรอยู่ก็ตาม",
						"hindi": "मैं सच्चाई का पता लगाऊंगा। तुम जो भी छिपा रहे हो।"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "겨우 이 정도인가? 파편에 휘둘릴 뿐인 어리석은 영혼들.",
						"english": "Is this all? Foolish souls swayed by fragments.",
						"japanese": "これだけか？破片に振り回されるだけの愚かな魂よ。",
						"chinese": "就这点能耐吗？被碎片摆布的愚蠢灵魂。",
						"french": "Ce n'est que ça ? Âmes insensées, manipulées par les fragments.",
						"spanish": "¿Es todo lo que tienes? Almas tontas, manipuladas por fragmentos.",
						"vietnamese": "Chỉ có thế thôi sao? Những linh hồn ngu ngốc chỉ biết bị mảnh vỡ thao túng.",
						"thai": "แค่นี้เองรึ? วิญญาณโง่เง่าที่ถูกชักนำโดยเศษเสี้ยว",
						"hindi": "बस इतना ही? मूर्ख आत्माएं जो टुकड़ों से प्रभावित होती हैं।"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "아직 끝나지 않았어… 진실을 찾을 때까지!",
						"english": "It's not over yet… until I find the truth!",
						"japanese": "まだ終わらぬ… 真実を見つけ出すまで！",
						"chinese": "还没结束… 直到我找到真相！",
						"french": "Ce n'est pas encore fini… jusqu'à ce que je trouve la vérité !",
						"spanish": "¡Aún no ha terminado… hasta que encuentre la verdad!",
						"vietnamese": "Chưa kết thúc đâu… cho đến khi ta tìm thấy sự thật!",
						"thai": "ยังไม่จบ… จนกว่าจะพบความจริง!",
						"hindi": "अभी खत्म नहीं हुआ है… जब तक मैं सच्चाई नहीं ढूंढ लेता!"
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "크아아… 네가 알아낸 건… 더 큰 절망의 시작일 뿐이다….",
						"english": "Krrraagh… What you've discovered… is merely the beginning of greater despair….",
						"japanese": "グアアア… お前が知ったのは… 更なる絶望の始まりに過ぎぬ…。",
						"chinese": "呜啊啊… 你所发现的… 只是更大绝望的开始…。",
						"french": "Krrraagh… Ce que tu as découvert… n'est que le début d'un désespoir plus grand….",
						"spanish": "Krrraagh… Lo que has descubierto… es solo el inicio de una desesperación aún mayor….",
						"vietnamese": "Grừ… Những gì ngươi tìm ra… chỉ là khởi đầu của một sự tuyệt vọng lớn hơn mà thôi….",
						"thai": "คร่อก… สิ่งที่เจ้าค้นพบ… เป็นเพียงจุดเริ่มต้นของความสิ้นหวังที่ยิ่งใหญ่กว่า….",
						"hindi": "क्राह… तुमने जो खोजा है… वह और भी बड़ी निराशा की शुरुआत मात्र है…।"
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "끝이 아닐 거라고? 그럼 대체 뭐가 더 남은 거야?",
						"english": "Not the end? Then what else is left?",
						"japanese": "終わりではないだと？ ならば一体何が残っているというのだ？",
						"chinese": "还没结束？那到底还剩下什么？",
						"french": "Pas la fin ? Alors qu'est-ce qu'il reste ?",
						"spanish": "¿No es el final? Entonces, ¿qué más queda?",
						"vietnamese": "Chưa phải kết thúc sao? Vậy thì còn gì nữa?",
						"thai": "ยังไม่จบงั้นเหรอ? แล้วอะไรอีกที่ยังเหลืออยู่?",
						"hindi": "अंत नहीं है? तो फिर और क्या बाकी है?"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "파편화된 진실은 더 깊은 곳으로 이끌었다. 모든 것이 시작되는 그곳으로.",
						"english": "The fragmented truth led deeper. To the place where everything began.",
						"japanese": "断片化された真実は、より深い場所へと導いた。全ての始まりの地へ。",
						"chinese": "碎片化的真相引向了更深处。万物起源之地。",
						"french": "La vérité fragmentée mena plus profond. Vers l'endroit où tout commença.",
						"spanish": "La verdad fragmentada llevó más profundo. Al lugar donde todo comenzó.",
						"vietnamese": "Sự thật bị phân mảnh đã dẫn lối sâu hơn. Đến nơi mọi thứ bắt đầu.",
						"thai": "ความจริงที่กระจัดกระจายนำพาไปสู่ที่ลึกยิ่งกว่า ณ ที่ที่ทุกสิ่งเริ่มต้น",
						"hindi": "विखंडित सत्य ने और गहराई तक पहुंचाया। उस स्थान पर जहाँ सब कुछ शुरू हुआ।"
					}
				}
			]
		}
	]
} as const;
