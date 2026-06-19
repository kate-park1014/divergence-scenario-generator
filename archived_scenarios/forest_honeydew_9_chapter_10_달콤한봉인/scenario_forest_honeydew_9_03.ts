export const scenario_forest_honeydew_9_03 = {
	"scenario_id": "forest_honeydew_9_03",
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
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "숲은 여전히 고요했고, 달콤한 꿀 냄새가 유혹했다.",
						"english": "The forest remained silent, and the sweet scent of honey beckoned.",
						"japanese": "森は相変わらず静かで、甘い蜜の香りが誘惑した。",
						"chinese": "森林依然寂静，甜美的蜂蜜香气诱惑着。",
						"french": "La forêt restait silencieuse, et le doux parfum de miel attirait.",
						"spanish": "El bosque seguía en silencio, y el dulce aroma a miel atraía.",
						"vietnamese": "Rừng vẫn tĩnh lặng, và mùi mật ong ngọt ngào quyến rũ.",
						"thai": "ป่ายังคงเงียบสงบ, และกลิ่นน้ำผึ้งหอมหวานเย้ายวน.",
						"hindi": "जंगल अभी भी शांत था, और शहद की मीठी गंध लुभा रही थी।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "사람들이 더 깊이 잠들고 있어.",
						"english": "People are falling into a deeper slumber.",
						"japanese": "人々がより深く眠りに落ちている。",
						"chinese": "人们睡得更深了。",
						"french": "Les gens s'endorment plus profondément.",
						"spanish": "La gente se está durmiendo más profundamente.",
						"vietnamese": "Mọi người đang chìm vào giấc ngủ sâu hơn.",
						"thai": "ผู้คนกำลังหลับใหลลึกซึ้งยิ่งขึ้น.",
						"hindi": "लोग और गहरी नींद में सो रहे हैं।"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"speaker": "briar",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "briar",
					"emotion": "base",
					"content": {
						"korean": "저 고목 줄기 안을 봐. 뭔가 보여.",
						"english": "Look inside that ancient tree trunk. I see something.",
						"japanese": "あの古木の幹の中を見て。何か見える。",
						"chinese": "看那个老树干里面。我看到什么了。",
						"french": "Regarde à l'intérieur de ce vieux tronc. Je vois quelque chose.",
						"spanish": "Mira dentro de ese tronco viejo. Veo algo.",
						"vietnamese": "Nhìn vào bên trong thân cây cổ thụ đó. Tôi thấy gì đó.",
						"thai": "ดูในลำต้นไม้เก่านั้นสิ. ฉันเห็นบางอย่าง.",
						"hindi": "उस पुराने पेड़ के तने के अंदर देखो। कुछ दिख रहा है।"
					},
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "briar",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "briar",
					"emotion": "sad",
					"content": {
						"korean": "자세히 보니까... 저거 사람이야?",
						"english": "Looking closer... Is that a person?",
						"japanese": "よく見ると…あれ、人かな？",
						"chinese": "仔细一看……那是人吗？",
						"french": "En regardant de plus près... Est-ce une personne ?",
						"spanish": "Mirando de cerca... ¿Es eso una persona?",
						"vietnamese": "Nhìn kỹ hơn... Đó có phải là người không?",
						"thai": "มองดูใกล้ๆ... นั่นคนเหรอ?",
						"hindi": "करीब से देखने पर... क्या वह कोई इंसान है?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "황금빛 꿀 안에 갇힌 형상들이 희미하게 보였다.",
						"english": "Faint figures trapped within golden honey were visible.",
						"japanese": "黄金の蜜の中に閉じ込められた姿がかすかに見えた。",
						"chinese": "金色蜂蜜中困住的模糊身影隐约可见。",
						"french": "Des formes indistinctes, piégées dans le miel doré, étaient visibles.",
						"spanish": "Figuras tenues atrapadas en miel dorada eran visibles.",
						"vietnamese": "Những hình dạng mờ nhạt bị mắc kẹt trong mật ong vàng óng đã hiện ra.",
						"thai": "ร่างเลือนรางที่ถูกขังอยู่ในน้ำผึ้งสีทองปรากฏขึ้นให้เห็นจางๆ.",
						"hindi": "सुनहरे शहद में फंसी हुई धुंधली आकृतियाँ दिखाई दीं।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "잠든 게 아니었어. 박제된 거야.",
						"english": "They weren't asleep. They were preserved.",
						"japanese": "眠っていたんじゃない。保存されていたんだ。",
						"chinese": "他们不是睡着了。他们是被保存了。",
						"french": "Ils n'étaient pas endormis. Ils étaient figés.",
						"spanish": "No estaban dormidos. Estaban conservados.",
						"vietnamese": "Họ không ngủ. Họ bị bảo quản.",
						"thai": "พวกเขาไม่ได้หลับ. พวกเขาถูกสตัฟฟ์ไว้.",
						"hindi": "वे सोए नहीं थे। उन्हें संरक्षित किया गया था।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "꿀이... 이들을 가두고 있었어.",
						"english": "Honey... it was trapping them.",
						"japanese": "蜜が… 彼らを閉じ込めていたんだ。",
						"chinese": "蜂蜜… 把他们困住了。",
						"french": "Le miel... les emprisonnait.",
						"spanish": "La miel... los estaba atrapando.",
						"vietnamese": "Mật ong... đã giam giữ họ.",
						"thai": "น้ำผึ้ง... มันขังพวกเขาไว้",
						"hindi": "शहद... उन्हें फँसा रहा था।"
					},
					"emotion": "sad",
					"speaker": "briar"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "briar",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "행복하게 잠든 것처럼 보였는데… 거짓말이었어.",
						"english": "They seemed to sleep peacefully... but it was a lie.",
						"japanese": "幸せそうに眠っているように見えたけど… 嘘だったんだ。",
						"chinese": "他们看起来睡得很安详… 却是谎言。",
						"french": "Ils semblaient dormir paisiblement... mais c'était un mensonge.",
						"spanish": "Parecían dormir felices... pero era una mentira.",
						"vietnamese": "Họ dường như ngủ say hạnh phúc... nhưng đó là một lời nói dối.",
						"thai": "พวกเขาดูเหมือนหลับอย่างมีความสุข... แต่มันเป็นเรื่องโกหก",
						"hindi": "वे खुशी से सो रहे थे... पर यह झूठ था।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 꿀은 독이야. 천천히 가두는.",
						"english": "This honey is poison. Slowly trapping them.",
						"japanese": "この蜜は毒だ。ゆっくりと閉じ込める。",
						"chinese": "这蜂蜜是毒。慢慢地困住他们。",
						"french": "Ce miel est un poison. Il les emprisonne lentement.",
						"spanish": "Esta miel es veneno. Atrapa lentamente.",
						"vietnamese": "Mật ong này là thuốc độc. Dần dần giam giữ.",
						"thai": "น้ำผึ้งนี่คือพิษ. ค่อยๆ ขัง",
						"hindi": "यह शहद ज़हर है। धीरे-धीरे फँसा रहा है।"
					},
					"speaker": "briar",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "sad",
					"content": {
						"korean": "정령이 준 꿀이… 이런 짓을?",
						"english": "The honey given by the spirit... did this?",
						"japanese": "精霊がくれた蜜が… こんなことを？",
						"chinese": "精灵给的蜂蜜… 做了这种事？",
						"french": "Le miel donné par l'esprit... a fait ça ?",
						"spanish": "La miel que dio el espíritu... ¿hizo esto?",
						"vietnamese": "Mật ong do tinh linh ban tặng... đã làm điều này?",
						"thai": "น้ำผึ้งที่วิญญาณให้มา... ทำแบบนี้?",
						"hindi": "आत्मा ने जो शहद दिया... उसने यह सब किया?"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "briar",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "점점 더 깊은 숲으로 들어섰다. 달콤한 냄새는 더욱 짙어졌다.",
						"english": "We ventured deeper into the forest. The sweet scent grew stronger.",
						"japanese": "ますます森の奥深くへ。甘い香りはさらに濃くなった。",
						"chinese": "我们进入了越来越深的森林。甜味越来越浓。",
						"french": "Nous nous aventurions plus profondément dans la forêt. L'odeur sucrée devenait plus forte.",
						"spanish": "Nos adentramos cada vez más en el bosque. El dulce aroma se hizo más intenso.",
						"vietnamese": "Chúng tôi tiến sâu hơn vào rừng. Mùi hương ngọt ngào càng trở nên nồng nặc.",
						"thai": "เราเดินลึกเข้าไปในป่ามากขึ้นเรื่อยๆ กลิ่นหอมหวานเข้มข้นขึ้น",
						"hindi": "हम जंगल में और गहरे उतरते गए। मीठी गंध और भी तेज हो गई।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "이 꿀에서 벗어나야 해. 하지만… 너무 달콤해서 유혹적이야.",
						"english": "I must break free from this honey. But... it's so sweet and tempting.",
						"japanese": "この蜜から逃れなければ。でも… あまりにも甘くて魅惑的だ。",
						"chinese": "我必须摆脱这蜂蜜。但是… 它太甜了，太诱人了。",
						"french": "Je dois me libérer de ce miel. Mais... c'est si doux et tentant.",
						"spanish": "Debo liberarme de esta miel. Pero... es tan dulce y tentadora.",
						"vietnamese": "Tôi phải thoát khỏi mật ong này. Nhưng... nó quá ngọt ngào và quyến rũ.",
						"thai": "ฉันต้องหลุดพ้นจากน้ำผึ้งนี้. แต่... มันหอมหวานและเย้ายวนเกินไป",
						"hindi": "मुझे इस शहद से मुक्त होना होगा। लेकिन... यह बहुत मीठा और मोहक है।"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "briar",
					"content": {
						"korean": "더 이상 속으면 안 돼. 모두를 깨워야 해.",
						"english": "I can't be deceived any longer. I must wake everyone.",
						"japanese": "もうこれ以上騙されてはいけない。みんなを起こさなければ。",
						"chinese": "不能再被骗了。我必须叫醒所有人。",
						"french": "Je ne dois plus être trompé. Je dois réveiller tout le monde.",
						"spanish": "No debo ser engañado más. Debo despertar a todos.",
						"vietnamese": "Tôi không thể bị lừa dối nữa. Tôi phải đánh thức mọi người.",
						"thai": "ฉันจะถูกหลอกอีกไม่ได้แล้ว. ฉันต้องปลุกทุกคน",
						"hindi": "मुझे अब और धोखा नहीं खाना चाहिए। मुझे सबको जगाना होगा।"
					}
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "크윽… 이 달콤한 잠을… 방해하다니….",
						"english": "Ugh... To disturb this sweet slumber...",
						"japanese": "くっ… この甘い眠りを… 邪魔するとは…。",
						"chinese": "呃… 竟敢打扰我这甜蜜的睡眠…。",
						"french": "Ugh... Interrompre ce doux sommeil...",
						"spanish": "Ugh... Interrumpir este dulce sueño...",
						"vietnamese": "Khụ... Dám phá rối giấc ngủ ngọt ngào này...",
						"thai": "อึก... บังอาจมารบกวนการหลับใหลอันแสนหวานนี้...",
						"hindi": "उफ़... इस मीठी नींद में खलल डालना..."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "이제 꿀의 저주를 풀 수 있을 거야.",
						"english": "Now we can break the curse of the honey.",
						"japanese": "これで、蜜の呪いを解くことができるだろう。",
						"chinese": "现在应该可以解除蜂蜜的诅咒了。",
						"french": "Nous allons pouvoir lever la malédiction du miel.",
						"spanish": "Ahora podremos romper la maldición de la miel.",
						"vietnamese": "Giờ thì có thể giải lời nguyền của mật ong rồi.",
						"thai": "ตอนนี้คงจะคลายคำสาปน้ำผึ้งได้แล้ว",
						"hindi": "अब हम शहद के श्राप को तोड़ पाएंगे।"
					},
					"emotion": "happy",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "황금빛 고목 줄기 속 형상들이 희미하게 떨렸다. 완전히 자유로워지려면 아직 멀었다.",
						"english": "The shapes within the golden ancient trunk faintly trembled. Full freedom is still a distant dream.",
						"japanese": "黄金色の古木の幹の中の形がかすかに震えた。完全に自由になるにはまだ遠かった。",
						"chinese": "金色古树躯干中的形体微微颤抖。离完全自由，还有很长的路。",
						"french": "Les formes au sein du tronc de l'arbre ancien doré tremblaient faiblement. La liberté complète était encore lointaine.",
						"spanish": "Las figuras dentro del tronco del árbol dorado temblaron débilmente. Aún estaban lejos de ser completamente libres.",
						"vietnamese": "Các hình thù trong thân cây cổ thụ vàng óng khẽ run rẩy. Vẫn còn lâu mới hoàn toàn tự do.",
						"thai": "รูปร่างภายในลำต้นของต้นไม้โบราณสีทองสั่นสะท้านจางๆ การปลดปล่อยเป็นอิสระโดยสมบูรณ์ยังอีกยาวไกล",
						"hindi": "सुनहरे पुराने पेड़ के तने के भीतर की आकृतियाँ हल्की सी कांप उठीं। पूरी तरह से आज़ाद होने में अभी बहुत समय था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "고목의 가장 깊은 곳, 거대한 그림자가 나타났다.",
						"english": "In the deepest part of the ancient tree, a gigantic shadow appeared.",
						"japanese": "古木の最深部、巨大な影が現れた。",
						"chinese": "在古树的最深处，一个巨大的影子出现了。",
						"french": "Dans la partie la plus profonde de l'arbre ancien, une ombre gigantesque apparut.",
						"spanish": "En lo más profundo del árbol ancestral, apareció una sombra gigantesca.",
						"vietnamese": "Ở nơi sâu nhất của cây cổ thụ, một cái bóng khổng lồ xuất hiện.",
						"thai": "ในส่วนที่ลึกที่สุดของต้นไม้โบราณ, เงาขนาดยักษ์ปรากฏขึ้น",
						"hindi": "प्राचीन वृक्ष के सबसे गहरे हिस्से में, एक विशाल छाया प्रकट हुई।"
					}
				},
				{
					"content": {
						"korean": "내 꿀은 평온이야. 너희도 맛보겠니?",
						"english": "My honey is tranquility. Would you like a taste?",
						"japanese": "私の蜜は平穏。君たちも味わってみるかい？",
						"chinese": "我的蜂蜜是平静。你们也想尝尝吗？",
						"french": "Mon miel est la tranquillité. Voulez-vous y goûter ?",
						"spanish": "Mi miel es la tranquilidad. ¿Queréis probarla?",
						"vietnamese": "Mật ong của ta là sự bình yên. Ngươi cũng muốn nếm thử không?",
						"thai": "น้ำผึ้งของฉันคือความสงบ. พวกเธออยากลองชิมไหม?",
						"hindi": "मेरा शहद शांति है। क्या तुम भी चखना चाहोगे?"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "평온이 아니라 감금이야!",
						"english": "It's not tranquility, it's imprisonment!",
						"japanese": "平穏じゃなくて監禁だ！",
						"chinese": "这不是平静，是囚禁！",
						"french": "Ce n'est pas la tranquillité, c'est l'emprisonnement !",
						"spanish": "¡No es tranquilidad, es encarcelamiento!",
						"vietnamese": "Đó không phải là sự bình yên, mà là sự giam cầm!",
						"thai": "นี่ไม่ใช่ความสงบ, แต่มันคือการถูกกักขัง!",
						"hindi": "यह शांति नहीं, कैद है!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "어리석은 것들… 잠들면 모든 고통이 사라질 텐데.",
						"english": "Fools... All pain would cease if you'd only sleep.",
						"japanese": "愚かな者たち… 眠れば、すべての苦痛が消えるというのに。",
						"chinese": "愚蠢的东西… 只要睡着，所有的痛苦都会消失。",
						"french": "Imbéciles... Toute douleur disparaîtrait si seulement vous dormiez.",
						"spanish": "Necios... Todo el dolor desaparecería si tan solo durmieran.",
						"vietnamese": "Lũ ngu ngốc... Mọi đau đớn sẽ tan biến nếu các ngươi chìm vào giấc ngủ.",
						"thai": "พวกโง่เง่า... ความเจ็บปวดทั้งหมดจะหายไปหากเพียงแค่หลับใหล",
						"hindi": "मूर्खों... सो जाओ तो सारा दर्द मिट जाएगा।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"speaker": "character_2",
					"content": {
						"korean": "그럴 순 없어.",
						"english": "That cannot be.",
						"japanese": "そんなことはできない。",
						"chinese": "不能那样。",
						"french": "C'est impossible.",
						"spanish": "Eso no puede ser.",
						"vietnamese": "Không thể như vậy được.",
						"thai": "ทำแบบนั้นไม่ได้หรอก",
						"hindi": "ऐसा नहीं हो सकता।"
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "영원히… 잠들거라….",
						"english": "Sleep... forever...",
						"japanese": "永遠に… 眠れ…。",
						"chinese": "永远… 沉睡吧…。",
						"french": "Dors... pour toujours...",
						"spanish": "Duerme... para siempre...",
						"vietnamese": "Ngủ... mãi mãi đi...",
						"thai": "จงหลับใหล... ตลอดกาล...",
						"hindi": "हमेशा के लिए… सो जाओ…"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "젠장… 다시 시도한다!",
						"english": "Damn it... I'll try again!",
						"japanese": "くそっ… もう一度試す！",
						"chinese": "该死… 再试一次！",
						"french": "Maudit... Je réessaierai !",
						"spanish": "¡Maldita sea... Lo intentaré de nuevo!",
						"vietnamese": "Chết tiệt... Thử lại!",
						"thai": "ให้ตายสิ... ลองใหม่อีกครั้ง!",
						"hindi": "धिक्कार है… मैं फिर कोशिश करूँगा!"
					}
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"꿀에 잠긴 채 영원히 미소 짓는 사람들.",
			"달콤한 평온 뒤에 숨겨진 진실은 무엇일까?",
			"고목의 줄기 속, 황금빛 그림자가 일렁인다.",
			"이제, 그 달콤한 잠의 비밀을 파헤칠 시간."
		],
		"english": [
			"People forever smiling, steeped in honey.",
			"What truth lies hidden behind the sweet serenity?",
			"Within the ancient tree's trunk, a golden shadow flickers.",
			"Now, it's time to uncover the secret of that sweet slumber."
		],
		"japanese": [
			"蜜に浸かり、永遠に微笑む人々。",
			"甘い平穏の裏に隠された真実とは？",
			"古木の幹の中で、黄金の影が揺らめく。",
			"さあ、あの甘い眠りの秘密を暴く時だ。"
		],
		"chinese": [
			"沉浸在蜂蜜中，永远微笑的人们。",
			"甜蜜宁静背后隐藏着什么真相？",
			"古树的树干中，金色影子在闪烁。",
			"现在，是揭开那甜蜜睡眠秘密的时候了。"
		],
		"french": [
			"Des gens souriant éternellement, plongés dans le miel.",
			"Quelle vérité se cache derrière cette douce sérénité ?",
			"Au cœur du vieux tronc, une ombre dorée vacille.",
			"Il est temps de percer le secret de ce doux sommeil."
		],
		"spanish": [
			"Personas sonriendo eternamente, sumergidas en miel.",
			"¿Qué verdad se oculta tras la dulce serenidad?",
			"En el tronco del árbol viejo, una sombra dorada parpadea.",
			"Ahora, es hora de desvelar el secreto de ese dulce sueño."
		],
		"vietnamese": [
			"Những người mãi mãi mỉm cười, chìm đắm trong mật ong.",
			"Sự thật nào ẩn giấu sau sự bình yên ngọt ngào đó?",
			"Bên trong thân cây cổ thụ, một bóng vàng lấp lánh.",
			"Bây giờ, là lúc khám phá bí mật của giấc ngủ ngọt ngào đó."
		],
		"thai": [
			"ผู้คนยิ้มแย้มตลอดไป, จมดิ่งในน้ำผึ้ง.",
			"ความจริงอะไรซ่อนอยู่เบื้องหลังความสงบอันหอมหวาน?",
			"ในลำต้นไม้เก่าแก่, เงาสีทองสั่นไหว.",
			"ตอนนี้, ถึงเวลาเปิดเผยความลับของการหลับใหลอันหอมหวานนั้นแล้ว."
		],
		"hindi": [
			"शहद में डूबे हुए, हमेशा मुस्कुराते लोग।",
			"इस मीठी शांति के पीछे क्या सच छिपा है?",
			"पुराने पेड़ के तने में, एक सुनहरी छाया झिलमिलाती है।",
			"अब, उस मीठी नींद के रहस्य को उजागर करने का समय है।"
		]
	}
} as const;
