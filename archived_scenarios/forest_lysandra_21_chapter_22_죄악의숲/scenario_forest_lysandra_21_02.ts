export const scenario_forest_lysandra_21_02 = {
	"scenario_id": "forest_lysandra_21_02",
	"order": 2,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"bracken": {
			"id": "mon_48cf29be-dbc0-44b1-bbb3-ecda1d14742d",
			"name": {
				"korean": "브라켄",
				"english": "Bracken",
				"japanese": "ブラッケン",
				"chinese": "布莱肯",
				"french": "Bracken",
				"spanish": "Bracken",
				"vietnamese": "Bracken",
				"thai": "แบรกเคน",
				"hindi": "ब्रैकेन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5b494da6-ffd7-43d3-7171-7ac84bdfe400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4a7a1b62-d7a7-4a21-ffd5-fa9b5de82100/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"숲은 깊어질수록 병들어갔다. 여왕의 치유라는 이름 아래.",
			"모두가 믿었던 구원이, 서서히 숲을 잠식하는 독이었다.",
			"미혹의 숲. 그 속삭임이 영혼을 좀먹는 곳.",
			"진실을 마주한 자의 죄책감, 그리고 배신감만이 가득했다."
		],
		"english": [
			"The forest sickened with its deepening, under the guise of the Queen's healing.",
			"The salvation everyone believed in was a slow poison consuming the forest.",
			"The Forest of Delusion. Where its whispers gnaw at souls.",
			"Only guilt and betrayal filled those who faced the truth."
		],
		"japanese": [
			"森は深まるほど病んでいった。女王の癒しという名のもとに。",
			"皆が信じた救済は、ゆっくりと森を蝕む毒だった。",
			"惑いの森。そのささやきが魂を蝕む場所。",
			"真実を直視した者の罪悪感と、裏切り感だけが満ちていた。"
		],
		"chinese": [
			"森林越深，病得越重。以女王治愈之名。",
			"众人所信的救赎，却是逐渐侵蚀森林的毒药。",
			"迷幻之森。其低语侵蚀灵魂之地。",
			"只有面对真相者的罪恶感和背叛感。"
		],
		"french": [
			"La forêt s'affaiblissait à mesure qu'elle s'épaississait, sous le nom de guérison de la Reine.",
			"Le salut que tous croyaient était un lent poison rongeant la forêt.",
			"La Forêt des Illusions. Où ses murmures rongent les âmes.",
			"Seuls la culpabilité et le sentiment de trahison emplissaient ceux qui faisaient face à la vérité."
		],
		"spanish": [
			"El bosque enfermó cuanto más se adentró, bajo el nombre de la sanación de la Reina.",
			"La salvación en la que todos creían era un veneno lento que consumía el bosque.",
			"El Bosque del Engaño. Donde sus susurros carcomen las almas.",
			"Solo la culpa y la traición llenaban a quienes enfrentaron la verdad."
		],
		"vietnamese": [
			"Rừng càng sâu càng bệnh nặng, dưới danh nghĩa chữa lành của Nữ hoàng.",
			"Cứu rỗi mà mọi người tin tưởng lại là chất độc từ từ ăn mòn khu rừng.",
			"Rừng Mê Hoặc. Nơi những lời thì thầm gặm nhấm linh hồn.",
			"Chỉ có cảm giác tội lỗi và sự phản bội tràn ngập những người đối mặt với sự thật."
		],
		"thai": [
			"ป่าลึกเข้าไปยิ่งเจ็บป่วย ภายใต้ชื่อการเยียวยาของราชินี",
			"ความรอดที่ทุกคนเชื่อคือยาพิษที่กัดกินป่าอย่างช้าๆ",
			"ป่าแห่งความหลงผิด ที่กระซิบกัดกินจิตวิญญาณ",
			"มีเพียงความรู้สึกผิดและการทรยศเท่านั้นที่เติมเต็มผู้ที่เผชิญหน้ากับความจริง"
		],
		"hindi": [
			"जंगल जितना गहरा होता गया, उतना ही बीमार होता गया। रानी के उपचार के नाम पर।",
			"जिस मुक्ति पर सबने विश्वास किया, वह धीरे-धीरे जंगल को निगलने वाला जहर था।",
			"भ्रम का जंगल। जहाँ इसकी फुसफुसाहटें आत्माओं को कुतरती हैं।",
			"सत्य का सामना करने वालों को केवल अपराधबोध और विश्वासघात ही मिला।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "숲은 깊어질수록 생기를 잃었다. 기이하게 뒤틀린 나무들이 그림자를 드리웠다.",
						"english": "The deeper the forest, the more it lost its vitality. Strangely twisted trees cast shadows.",
						"japanese": "森は深まるほど生気を失った。奇妙にねじれた木々が影を落とす。",
						"chinese": "森林越深，生机越少。奇形怪状的树木投下阴影。",
						"french": "Plus la forêt s'enfonçait, plus elle perdait sa vitalité. Des arbres étrangement tordus projetaient des ombres.",
						"spanish": "Cuanto más profundo era el bosque, más perdía su vitalidad. Árboles extrañamente retorcidos proyectaban sombras.",
						"vietnamese": "Rừng càng sâu càng mất đi sức sống. Những cái cây bị vặn vẹo kỳ lạ phủ bóng.",
						"thai": "ยิ่งป่าลึกเท่าไหร่ก็ยิ่งไร้ชีวิตชีวา ต้นไม้บิดเบี้ยวแปลกๆ ทอดเงา",
						"hindi": "जंगल जितना गहरा होता गया, उतनी ही उसकी जीवंतता कम होती गई। अजीब तरह से मुड़े हुए पेड़ों ने छाया डाली।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "여왕의 숲이… 이렇다고?",
						"english": "The Queen's Forest... like this?",
						"japanese": "女王の森が…こんなだと？",
						"chinese": "女王的森林…竟是这般？",
						"french": "La Forêt de la Reine... comme ça ?",
						"spanish": "¿El Bosque de la Reina... así?",
						"vietnamese": "Rừng của Nữ hoàng... như thế này sao?",
						"thai": "ป่าของราชินี... เป็นแบบนี้หรือ?",
						"hindi": "रानी का जंगल... ऐसा है?"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "bracken",
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"speaker": "bracken",
					"content": {
						"korean": "왔구나… 또 다른 이들이.",
						"english": "They've come... others too.",
						"japanese": "来たか…また別の者たちが。",
						"chinese": "来了啊…又是一些人。",
						"french": "Ils sont venus... d'autres aussi.",
						"spanish": "Han llegado... otros también.",
						"vietnamese": "Đến rồi... những người khác nữa.",
						"thai": "มาแล้ว... คนอื่นๆ ด้วย",
						"hindi": "वे आ गए... और भी लोग।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "당신은 누구지?",
						"english": "Who are you?",
						"japanese": "あなたは誰だ？",
						"chinese": "你是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "เจ้าคือใคร?",
						"hindi": "तुम कौन हो?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "bracken",
					"content": {
						"korean": "이 숲의 주민… 브라켄이라 부르시오.",
						"english": "A resident of this forest... Call me Braken.",
						"japanese": "この森の住民…ブラッケンと呼びなさい。",
						"chinese": "这片森林的居民…叫我布拉肯吧。",
						"french": "Un habitant de cette forêt... Appelez-moi Braken.",
						"spanish": "Un residente de este bosque... Llámame Braken.",
						"vietnamese": "Một cư dân của khu rừng này... Cứ gọi ta là Braken.",
						"thai": "ผู้อาศัยในป่านี้... เรียกข้าว่าบราเคน",
						"hindi": "इस जंगल का एक निवासी... मुझे ब्रेकेन कहो।"
					},
					"type": "speech"
				},
				{
					"speaker": "bracken",
					"content": {
						"korean": "여왕의 치유가… 숲을 더 아프게 하고 있소.",
						"english": "The Queen's healing... it's making the forest sicker.",
						"japanese": "女王の癒しが…森をさらに病ませているのだ。",
						"chinese": "女王的治愈…正在让森林更加痛苦。",
						"french": "La guérison de la Reine... rend la forêt plus malade.",
						"spanish": "La sanación de la Reina... está enfermando más al bosque.",
						"vietnamese": "Sự chữa lành của Nữ hoàng... đang làm khu rừng thêm đau đớn.",
						"thai": "การเยียวยาของราชินี... กำลังทำให้ป่าเจ็บป่วยมากขึ้น",
						"hindi": "रानी का उपचार... यह जंगल को और बीमार कर रहा है।"
					},
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "bracken",
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "보시오… 이 나무들을.",
						"english": "Behold... these trees.",
						"japanese": "見よ… この木々を。",
						"chinese": "看啊… 这些树。",
						"french": "Vois… ces arbres.",
						"spanish": "Mira... estos árboles.",
						"vietnamese": "Hãy nhìn... những cái cây này.",
						"thai": "ดูสิ... ต้นไม้เหล่านี้",
						"hindi": "देखो... इन पेड़ों को।"
					},
					"speaker": "bracken"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "뒤틀린 고목들이 섬세한 오팔 빛 이끼에 덮여 죽음과 아름다움이 공존했다. 미묘한 악취가 풍겼다.",
						"english": "Twisted ancient trees, veiled in delicate opal moss. Death and beauty coexisted. A subtle stench lingered.",
						"japanese": "ねじれた古木が繊細なオパール色の苔に覆われ、死と美が共存していた。微かな悪臭が漂っていた。",
						"chinese": "扭曲的古树被精致的蛋白石色苔藓覆盖，死亡与美丽并存。弥漫着一丝微妙的恶臭。",
						"french": "Des arbres anciens tordus, recouverts d'une délicate mousse opaline, où la mort et la beauté coexistaient. Une odeur subtile flottait.",
						"spanish": "Árboles antiguos retorcidos, cubiertos de delicado musgo iridiscente, donde la muerte y la belleza coexistían. Un hedor sutil se desprendía.",
						"vietnamese": "Những cây cổ thụ vặn vẹo, phủ rêu óng ánh như ngọc, nơi cái chết và vẻ đẹp cùng tồn tại. Một mùi hôi nhẹ phảng phất.",
						"thai": "ต้นไม้โบราณบิดเบี้ยว ปกคลุมด้วยมอสสีโอปอลละเอียดอ่อน ที่ซึ่งความตายและความงามอยู่ร่วมกัน กลิ่นเหม็นอ่อนๆ โชยมา",
						"hindi": "मुड़े हुए प्राचीन वृक्ष, नाजुक ओपल-रंगीन काई से ढके, जहाँ मृत्यु और सौंदर्य सह-अस्तित्व में थे। एक हल्की दुर्गंध फैली हुई थी।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "아름답지만… 뭔가 이상해.",
						"english": "Beautiful... yet something is amiss.",
						"japanese": "美しいが… 何かおかしい。",
						"chinese": "美丽… 但有些不对劲。",
						"french": "Magnifique… mais quelque chose cloche.",
						"spanish": "Hermoso... pero algo anda mal.",
						"vietnamese": "Đẹp... nhưng có gì đó lạ.",
						"thai": "สวยงาม... แต่มีบางอย่างผิดปกติ",
						"hindi": "सुंदर... पर कुछ अजीब है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "여왕의 은총을 받은 자들이오. 한때 치유받았으나… 지금은 고통받는.",
						"english": "These are the Queen's favored. Once healed... now suffering.",
						"japanese": "女王の恩寵を受けた者たち。かつては癒されたが… 今は苦しんでいる。",
						"chinese": "他们是蒙受女王恩宠之人。曾被治愈… 如今却在受苦。",
						"french": "Ce sont les favoris de la Reine. Autrefois guéris… maintenant souffrants.",
						"spanish": "Son los agraciados por la Reina. Una vez curados... ahora sufren.",
						"vietnamese": "Đây là những kẻ được Nữ hoàng ban ơn. Từng được chữa lành... nay lại chịu đau khổ.",
						"thai": "พวกเขาคือผู้ได้รับพระคุณจากราชินี ครั้งหนึ่งเคยได้รับการเยียวยา... ตอนนี้กลับทุกข์ทรมาน",
						"hindi": "ये रानी के कृपापात्र हैं। कभी चंगे हुए... अब पीड़ित।"
					},
					"speaker": "bracken",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "치유가 고통으로 변한다고?",
						"english": "Healing turned to suffering?",
						"japanese": "癒しが苦痛に変わるだと？",
						"chinese": "治愈变成了痛苦？",
						"french": "La guérison se transforme en souffrance ?",
						"spanish": "¿La curación se convierte en dolor?",
						"vietnamese": "Chữa lành biến thành đau khổ ư?",
						"thai": "การเยียวยากลายเป็นความทุกข์ทรมาน?",
						"hindi": "क्या उपचार पीड़ा में बदल गया?"
					},
					"speaker": "character_1",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "bracken"
				},
				{
					"speaker": "bracken",
					"content": {
						"korean": "…들리시오?",
						"english": "...Do you hear it?",
						"japanese": "…聞こえるか？",
						"chinese": "…你听到了吗？",
						"french": "…Entendez-vous ?",
						"spanish": "…¿Lo oyes?",
						"vietnamese": "...Ngươi có nghe thấy không?",
						"thai": "...ได้ยินไหม?",
						"hindi": "...क्या तुम सुनते हो?"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "뭐가?",
						"english": "What?",
						"japanese": "何を？",
						"chinese": "什么？",
						"french": "Quoi ?",
						"spanish": "¿Qué?",
						"vietnamese": "Cái gì?",
						"thai": "อะไร?",
						"hindi": "क्या?"
					}
				},
				{
					"content": {
						"korean": "저 자장가… 저게 우리를… 우리의 영혼을 갉아먹고 있소.",
						"english": "That lullaby... it's gnawing at us... at our souls.",
						"japanese": "あのLullaby… あれが我々を… 我々の魂を蝕んでいる。",
						"chinese": "那摇篮曲… 它正在侵蚀我们… 我们的灵魂。",
						"french": "Cette berceuse… elle nous ronge… nos âmes.",
						"spanish": "Esa nana... nos está carcomiendo... nuestras almas.",
						"vietnamese": "Bài hát ru đó... nó đang gặm nhấm chúng ta... gặm nhấm linh hồn chúng ta.",
						"thai": "เพลงกล่อมเด็กนั่น... มันกำลังกัดกินเรา... กัดกินวิญญาณของเรา",
						"hindi": "वह लोरी... वह हमें... हमारी आत्माओं को कुतर रही है।"
					},
					"speaker": "bracken",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "자장가가… 영혼을?",
						"english": "A lullaby... gnawing at souls?",
						"japanese": "Lullabyが… 魂を？",
						"chinese": "摇篮曲… 侵蚀灵魂？",
						"french": "Une berceuse… les âmes ?",
						"spanish": "¿Una nana... las almas?",
						"vietnamese": "Bài hát ru... linh hồn ư?",
						"thai": "เพลงกล่อมเด็ก... วิญญาณ?",
						"hindi": "लोरी... आत्माओं को?"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "bracken",
					"content": {
						"korean": "여왕의 노래… 그 구원이… 파멸이오.",
						"english": "The Queen's song... its salvation... is ruin.",
						"japanese": "女王の歌… その救いが… 破滅なのだ。",
						"chinese": "女王的歌声… 那救赎… 便是毁灭。",
						"french": "Le chant de la Reine… son salut… est la ruine.",
						"spanish": "El canto de la Reina... su salvación... es la ruina.",
						"vietnamese": "Bài hát của Nữ hoàng... sự cứu rỗi đó... chính là sự hủy diệt.",
						"thai": "บทเพลงของราชินี... การไถ่บาปนั้น... คือความหายนะ",
						"hindi": "रानी का गीत... उसकी मुक्ति... विनाश है।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "여왕이… 우리를 속인 건가?",
						"english": "Has the Queen... deceived us?",
						"japanese": "女王が… 我々を騙したのか？",
						"chinese": "女王…欺骗了我们吗？",
						"french": "La Reine… nous aurait-elle trahis ?",
						"spanish": "¿Acaso la Reina... nos engañó?",
						"vietnamese": "Nữ hoàng... đã lừa dối chúng ta sao?",
						"thai": "ราชินี... หลอกเราหรือ?",
						"hindi": "क्या रानी ने… हमें धोखा दिया है?"
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "bracken",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "bracken",
					"content": {
						"korean": "더 깊이 가지 마시오! 그분은… 모든 것을 집어삼킬 것이오.",
						"english": "Go no deeper! She will... devour everything.",
						"japanese": "これ以上深く進むな！あのお方は… 全てを飲み込むだろう。",
						"chinese": "不要再深入了！她会…吞噬一切。",
						"french": "N'allez pas plus loin ! Elle… dévorera tout.",
						"spanish": "¡No vayas más profundo! Ella... lo devorará todo.",
						"vietnamese": "Đừng đi sâu hơn nữa! Người đó sẽ... nuốt chửng mọi thứ.",
						"thai": "อย่าลงไปลึกกว่านี้! นางจะ... กลืนกินทุกสิ่ง",
						"hindi": "और गहरा मत जाओ! वह… सब कुछ निगल जाएगी।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이제 멈출 수 없어. 진실을 봐야겠어.",
						"english": "I can't stop now. I must see the truth.",
						"japanese": "もう止められない。真実を見届けねば。",
						"chinese": "现在我无法停止。我必须看到真相。",
						"french": "Je ne peux plus m'arrêter. Je dois voir la vérité.",
						"spanish": "Ya no puedo detenerme. Debo ver la verdad.",
						"vietnamese": "Giờ tôi không thể dừng lại. Tôi phải thấy sự thật.",
						"thai": "ตอนนี้ฉันหยุดไม่ได้แล้ว ฉันต้องเห็นความจริง",
						"hindi": "अब मैं रुक नहीं सकता। मुझे सच्चाई देखनी होगी।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…저주받을 테지만. 당신들의 선택이오.",
						"english": "...But you will be cursed. The choice is yours.",
						"japanese": "…呪われるだろうが。お前たちの選択だ。",
						"chinese": "……但你们会被诅咒。这是你们的选择。",
						"french": "…Mais vous serez maudits. C'est votre choix.",
						"spanish": "...Pero seréis maldecidos. Es vuestra elección.",
						"vietnamese": "...Nhưng các ngươi sẽ bị nguyền rủa. Đó là lựa chọn của các ngươi.",
						"thai": "...แต่พวกเจ้าจะถูกสาปแช่ง มันคือทางเลือกของพวกเจ้า",
						"hindi": "...लेकिन तुम शापित होगे। यह तुम्हारी पसंद है।"
					},
					"speaker": "bracken",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "숲의 가장 깊은 곳. 거대한 그림자가 일행을 기다리고 있었다.",
						"english": "In the deepest part of the forest, a colossal shadow awaited the party.",
						"japanese": "森の最も深い場所。巨大な影が一行を待ち受けていた。",
						"chinese": "森林最深处。一个巨大的影子在等待着队伍。",
						"french": "Dans les profondeurs de la forêt. Une ombre gigantesque attendait le groupe.",
						"spanish": "En lo más profundo del bosque. Una sombra colosal esperaba al grupo.",
						"vietnamese": "Sâu thẳm nhất trong rừng. Một bóng tối khổng lồ đang đợi đoàn người.",
						"thai": "ณ ส่วนลึกที่สุดของป่า เงาขนาดมหึมารอคอยคณะอยู่",
						"hindi": "जंगल के सबसे गहरे हिस्से में। एक विशाल छाया दल का इंतज़ार कर रही थी।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "감히 이곳까지 발을 들이다니.",
						"english": "How dare you set foot in this place.",
						"japanese": "よくもここまで足を踏み入れたな。",
						"chinese": "你们竟敢踏足此地。",
						"french": "Comment osez-vous fouler ce lieu.",
						"spanish": "¿Cómo osas poner un pie aquí?",
						"vietnamese": "Ngươi dám đặt chân đến nơi này sao.",
						"thai": "กล้าดียังไงมาเหยียบที่นี่",
						"hindi": "तुम्हारी हिम्मत कैसे हुई यहाँ कदम रखने की।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네가… 이 숲을 병들게 하는 자인가.",
						"english": "Are you… the one sickening this forest?",
						"japanese": "お前が… この森を病ませる者か。",
						"chinese": "你就是…让这片森林生病的人吗？",
						"french": "Es-tu… celui qui rend cette forêt malade ?",
						"spanish": "¿Eres tú… quien enferma este bosque?",
						"vietnamese": "Ngươi… là kẻ khiến khu rừng này bệnh ư?",
						"thai": "เจ้าคือ... ผู้ทำให้ป่านี้ป่วยไข้หรือ?",
						"hindi": "क्या तुम ही… हो जो इस जंगल को बीमार कर रहा है?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "나는 그저 여왕의 뜻을 따를 뿐.",
						"english": "I merely follow the Queen's will.",
						"japanese": "私はただ女王の意思に従うのみ。",
						"chinese": "我只是遵循女王的旨意。",
						"french": "Je ne fais que suivre la volonté de la Reine.",
						"spanish": "Yo solo sigo la voluntad de la Reina.",
						"vietnamese": "Ta chỉ làm theo ý muốn của Nữ hoàng.",
						"thai": "ข้าเพียงทำตามพระประสงค์ของราชินีเท่านั้น",
						"hindi": "मैं बस रानी की इच्छा का पालन करता हूँ।"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자들이여. 진실은… 감당 못할 고통이 될 것이다.",
						"english": "Fools. The truth... will be a pain you cannot bear.",
						"japanese": "愚か者たちめ。真実は… お前たちには耐え難い苦痛となるだろう。",
						"chinese": "愚蠢的人们。真相…将是你们无法承受的痛苦。",
						"french": "Fous. La vérité… sera une douleur insoutenable.",
						"spanish": "Necios. La verdad… será un dolor insoportable.",
						"vietnamese": "Những kẻ ngu xuẩn. Sự thật… sẽ là nỗi đau các ngươi không thể chịu đựng nổi.",
						"thai": "พวกเจ้าช่างโง่เขลา ความจริง... จะเป็นความเจ็บปวดที่พวกเจ้าไม่อาจทานทน",
						"hindi": "मूर्खों। सच… ऐसा दर्द होगा जिसे तुम सह नहीं पाओगे।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_1",
					"content": {
						"korean": "닥쳐! 너를 막고 진실을 밝히겠다!",
						"english": "Silence! I'll stop you and reveal the truth!",
						"japanese": "黙れ！お前を止め、真実を暴く！",
						"chinese": "住口！我会阻止你并揭示真相！",
						"french": "Tais-toi ! Je t'arrêterai et révélerai la vérité !",
						"spanish": "¡Cállate! ¡Te detendré y revelaré la verdad!",
						"vietnamese": "Im đi! Ta sẽ ngăn ngươi lại và phơi bày sự thật!",
						"thai": "หุบปาก! ข้าจะหยุดเจ้าและเปิดเผยความจริง!",
						"hindi": "चुप रहो! मैं तुम्हें रोकूंगा और सच्चाई उजागर करूंगा!"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 일행을 덮쳤다. 숲은 다시 침묵했다.",
						"english": "A colossal shadow engulfed the party. The forest fell silent once more.",
						"japanese": "巨大な影が一行を覆った。森は再び沈黙した。",
						"chinese": "巨大的阴影笼罩了一行人。森林再次归于沉寂。",
						"french": "Une ombre colossale submergea le groupe. La forêt retomba dans le silence.",
						"spanish": "Una sombra colosal envolvió al grupo. El bosque volvió a silenciarse.",
						"vietnamese": "Một bóng đen khổng lồ bao trùm lấy đoàn người. Khu rừng lại chìm vào im lặng.",
						"thai": "เงามืดมหึมาเข้าปกคลุมคณะเดินทาง ป่ากลับเข้าสู่ความเงียบอีกครั้ง",
						"hindi": "एक विशालकाय छाया ने दल को घेर लिया। जंगल फिर से खामोश हो गया।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "아직 여왕의 그림자에서 벗어나지 못하는군.",
						"english": "You still can't escape the queen's shadow.",
						"japanese": "まだ女王の影から逃れられないようだな。",
						"chinese": "你们还未能摆脱女王的阴影。",
						"french": "Vous n'arrivez toujours pas à échapper à l'ombre de la reine.",
						"spanish": "Aún no logran escapar de la sombra de la reina.",
						"vietnamese": "Vẫn chưa thoát khỏi bóng tối của nữ hoàng.",
						"thai": "ยังไม่พ้นจากเงาของราชินีสินะ",
						"hindi": "तुम अभी भी रानी की छाया से बच नहीं पा रहे हो।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "…절대 포기하지 않아. 진실은 반드시 밝혀진다.",
						"english": "...I will never give up. The truth will surely be revealed.",
						"japanese": "…決して諦めない。真実は必ず暴かれる。",
						"chinese": "…绝不放弃。真相终将大白。",
						"french": "...Je n'abandonnerai jamais. La vérité sera sûrement révélée.",
						"spanish": "...Nunca me rendiré. La verdad se revelará sin falta.",
						"vietnamese": "…Tuyệt đối không từ bỏ. Sự thật nhất định sẽ được phơi bày.",
						"thai": "...ไม่มีวันยอมแพ้ ความจริงจะต้องถูกเปิดเผย",
						"hindi": "...मैं कभी हार नहीं मानूंगा। सच्चाई निश्चित रूप से सामने आएगी।"
					},
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 어리석은… 아직… 아무것도… 모르는군…",
						"english": "Ugh... Foolish... You still... know nothing...",
						"japanese": "くぅ… 愚かな… まだ… 何も… 知らないようだな…",
						"chinese": "呃… 愚蠢的… 你们… 仍… 一无所知…",
						"french": "Ugh... Insensé... Vous... ne savez... encore rien...",
						"spanish": "Uf... Insensatos... Todavía... no saben... nada...",
						"vietnamese": "Khụ… Ngốc nghếch… Ngươi… vẫn… chưa biết gì cả…",
						"thai": "อึก... โง่เขลา... ยัง... ไม่รู้อะไรเลย...",
						"hindi": "उफ़... मूर्ख... तुम्हें... अभी भी... कुछ नहीं पता..."
					},
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "그 자장가… 숲의… 영혼을… 먹어치운다… 리산드라…",
						"english": "That lullaby... devours... the forest's... souls... Lissandra...",
						"japanese": "あの歌が… 森の… 魂を… 食い尽くす… リサンドラ…",
						"chinese": "那首摇篮曲… 吞噬着… 森林的… 灵魂… 丽桑卓…",
						"french": "Cette berceuse... dévore... les âmes... de la forêt... Lissandra...",
						"spanish": "Esa nana... devora... las almas... del bosque... Lissandra...",
						"vietnamese": "Bài hát ru đó… nuốt chửng… linh hồn… của khu rừng… Lissandra…",
						"thai": "เพลงกล่อมเด็กนั่น... กลืนกิน... วิญญาณ... ของป่า... ลิซานดรา...",
						"hindi": "वह लोरी... वन की... आत्माओं को... खा जाती है... लिसांद्रा..."
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "자장가… 리산드라… 대체 무슨 의미지?",
						"english": "Lullaby... Lissandra... What does it mean?",
						"japanese": "子守歌… リサンドラ… 一体どういう意味だ？",
						"chinese": "摇篮曲… 丽桑卓… 究竟是什么意思？",
						"french": "Berceuse... Lissandra... Qu'est-ce que ça signifie ?",
						"spanish": "Nana... Lissandra... ¿Qué significa?",
						"vietnamese": "Bài hát ru… Lissandra… Rốt cuộc là có ý gì?",
						"thai": "เพลงกล่อมเด็ก... ลิซานดรา... หมายความว่าอะไรกันแน่?",
						"hindi": "लोरी... लिसांद्रा... इसका क्या मतलब है?"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "정체 모를 적을 처치했다. 그러나 숲은 더욱 깊은 미궁으로 이들을 이끌었다.",
						"english": "An unknown foe was vanquished. Yet the forest led them deeper into its labyrinth.",
						"japanese": "正体不明の敵を倒した。しかし森は、一行をさらに深い迷宮へと誘った。",
						"chinese": "击败了不知名的敌人。然而，森林却将他们引向了更深的迷宫。",
						"french": "Un ennemi inconnu a été vaincu. Mais la forêt les entraîna plus profondément dans son labyrinthe.",
						"spanish": "Un enemigo desconocido fue derrotado. Sin embargo, el bosque los condujo a un laberinto aún más profundo.",
						"vietnamese": "Kẻ thù không rõ danh tính đã bị tiêu diệt. Thế nhưng, khu rừng lại dẫn họ vào một mê cung sâu thẳm hơn.",
						"thai": "ศัตรูนิรนามถูกกำจัดแล้ว แต่ป่ากลับนำพาพวกเขาเข้าสู่เขาวงกตที่ลึกล้ำยิ่งขึ้น",
						"hindi": "एक अज्ञात शत्रु को पराजित किया गया। फिर भी, जंगल ने उन्हें अपने गहरे भूलभुलैया में खींच लिया।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "여왕의 진정한 얼굴은, 아직 드러나지 않았다.",
						"english": "The queen's true face has not yet been revealed.",
						"japanese": "女王の真の顔は、まだ現れていない。",
						"chinese": "女王的真实面目，尚未揭露。",
						"french": "Le véritable visage de la reine n'a pas encore été révélé.",
						"spanish": "El verdadero rostro de la reina aún no se ha revelado.",
						"vietnamese": "Gương mặt thật của nữ hoàng, vẫn chưa lộ diện.",
						"thai": "ใบหน้าแท้จริงของราชินี ยังไม่ถูกเปิดเผย",
						"hindi": "रानी का असली चेहरा, अभी तक सामने नहीं आया है।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			]
		}
	]
} as const;
