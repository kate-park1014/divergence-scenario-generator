export const scenario_snowy_fenrir_77_01 = {
	"scenario_id": "snowy_fenrir_77_01",
	"order": 1,
	"act": "intro",
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
	"prologue": {
		"korean": [
			"늑대의 그림자가 설원을 뒤덮었다.",
			"모든 생명은 그곳을 향해 끌려갔다.",
			"온기는 사라지고, 땅은 잿빛으로 메말랐다.",
			"기록자는 이 비극을 쫓았다."
		],
		"english": [
			"The wolf's shadow enveloped the snowfield.",
			"All life was drawn towards it.",
			"Warmth vanished, and the land withered to ash.",
			"The chronicler pursued this tragedy."
		],
		"japanese": [
			"狼の影が雪原を覆った。",
			"すべての生命がそこへ引き寄せられた。",
			"温もりは消え、大地は灰色の荒野と化した。",
			"記録者はこの悲劇を追った。"
		],
		"chinese": [
			"狼的阴影笼罩着雪原。",
			"所有生命都被吸引到那里。",
			"温暖消散，大地枯萎成灰。",
			"记录者追溯着这场悲剧。"
		],
		"french": [
			"L'ombre du loup a enveloppé la toundra.",
			"Toute vie y fut attirée.",
			"La chaleur disparut, et la terre s'assécha en cendres.",
			"Le chroniqueur poursuivit cette tragédie."
		],
		"spanish": [
			"La sombra del lobo cubrió el campo de nieve.",
			"Toda la vida fue arrastrada hacia allí.",
			"La calidez desapareció, y la tierra se marchitó hasta volverse ceniza.",
			"El cronista persiguió esta tragedia."
		],
		"vietnamese": [
			"Bóng sói bao trùm tuyết nguyên.",
			"Mọi sự sống đều bị kéo về phía đó.",
			"Hơi ấm biến mất, đất đai khô cằn thành màu tro.",
			"Người ghi chép đã theo đuổi bi kịch này."
		],
		"thai": [
			"เงาหมาป่าปกคลุมทุ่งหิมะ",
			"ทุกชีวิตถูกดึงดูดเข้าหามัน",
			"ความอบอุ่นหายไป, พื้นดินเหี่ยวเฉาเป็นสีเทา",
			"ผู้บันทึกไล่ตามโศกนาฏกรรมนี้"
		],
		"hindi": [
			"भेड़िये की परछाई ने बर्फीले मैदान को ढक लिया।",
			"हर जीवन उसकी ओर खिंचा चला गया।",
			"गरमाहट गायब हो गई, और ज़मीन राख में सूख गई।",
			"लेखक ने इस त्रासदी का पीछा किया।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "잿빛으로 물든 설원. 발아래조차 생기를 잃었다.",
						"english": "An ash-stained snowfield. Even underfoot, life had faded.",
						"japanese": "灰色の雪原。足元さえ生気を失った。",
						"chinese": "灰色的雪原。脚下也失去了生机。",
						"french": "Une toundra teintée de cendres. Même sous nos pieds, la vie s'est éteinte.",
						"spanish": "Un campo de nieve teñido de ceniza. Incluso bajo los pies, la vida se había desvanecido.",
						"vietnamese": "Tuyết nguyên nhuốm màu tro. Ngay cả dưới chân cũng mất đi sức sống.",
						"thai": "ทุ่งหิมะสีเทา. แม้แต่ใต้เท้าก็ไร้ชีวิตชีวา",
						"hindi": "राख से सना बर्फीला मैदान। यहाँ तक कि पैरों के नीचे भी जीवन फीका पड़ गया था।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이 추위… 보통이 아니야.",
						"english": "This cold... it's unnatural.",
						"japanese": "この寒さ…尋常じゃない。",
						"chinese": "这股寒冷…不寻常。",
						"french": "Ce froid... Ce n'est pas normal.",
						"spanish": "Este frío... no es normal.",
						"vietnamese": "Cái lạnh này… không bình thường.",
						"thai": "ความหนาวนี้… ไม่ปกติ",
						"hindi": "यह ठंड... सामान्य नहीं है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"spot": [
						4,
						3
					],
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…이 눈의 색을 봐.",
						"english": "...Look at the color of this snow.",
						"japanese": "…この雪の色を見て。",
						"chinese": "…看这雪的颜色。",
						"french": "...Regarde la couleur de cette neige.",
						"spanish": "...Mira el color de esta nieve.",
						"vietnamese": "…Nhìn màu tuyết này đi.",
						"thai": "…ดูสีของหิมะนี่สิ",
						"hindi": "...इस बर्फ का रंग देखो।"
					},
					"speaker": "eira"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "생기가 사라지고 있어. 늑대를 향해.",
						"english": "Life is fading. Towards the wolf.",
						"japanese": "生気が失われていく。狼の方へ。",
						"chinese": "生机正在消失。朝着狼的方向。",
						"french": "La vie s'estompe. Vers le loup.",
						"spanish": "La vida está desapareciendo. Hacia el lobo.",
						"vietnamese": "Sức sống đang biến mất. Hướng về phía sói.",
						"thai": "ชีวิตกำลังจางหายไป. ไปทางหมาป่า",
						"hindi": "जीवन मिट रहा है। भेड़िये की ओर।"
					},
					"speaker": "eira"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "eira",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "기록… 시작한다.",
						"english": "Recording... begins.",
						"japanese": "記録…始める。",
						"chinese": "记录…开始。",
						"french": "L'enregistrement... commence.",
						"spanish": "Grabación... comienza.",
						"vietnamese": "Ghi chép… bắt đầu.",
						"thai": "บันทึก… เริ่มต้น",
						"hindi": "रिकॉर्डिंग... शुरू होती है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "뭘 기록하는 거야?",
						"english": "What are you recording?",
						"japanese": "何を記録してるの？",
						"chinese": "你在记录什么？",
						"french": "Qu'est-ce que tu enregistres ?",
						"spanish": "¿Qué estás grabando?",
						"vietnamese": "Bạn đang ghi chép gì vậy?",
						"thai": "คุณกำลังบันทึกอะไร?",
						"hindi": "तुम क्या रिकॉर्ड कर रहे हो?"
					}
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이 메마른 땅의 비명.",
						"english": "The scream of this barren land.",
						"japanese": "この枯れた大地の悲鳴。",
						"chinese": "这片贫瘠之地的尖啸。",
						"french": "Le cri de cette terre aride.",
						"spanish": "El grito de esta tierra árida.",
						"vietnamese": "Tiếng thét của vùng đất khô cằn này.",
						"thai": "เสียงกรีดร้องของดินแดนอันแห้งแล้งนี้",
						"hindi": "इस बंजर भूमि की चीख।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "모든 것이 늑대에게… 흡수되고 있어.",
						"english": "Everything is being… absorbed by the wolf.",
						"japanese": "全てが狼に… 吸収されている。",
						"chinese": "一切都被… 狼吞噬了。",
						"french": "Tout est… absorbé par le loup.",
						"spanish": "Todo está siendo… absorbido por el lobo.",
						"vietnamese": "Mọi thứ đang bị… con sói hấp thụ.",
						"thai": "ทุกสิ่งกำลังถูก… หมาป่ากลืนกิน",
						"hindi": "सब कुछ भेड़िये द्वारा… सोखा जा रहा है।"
					},
					"speaker": "eira"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "더 깊이 갈수록… 심해져.",
						"english": "The deeper we go… the worse it gets.",
						"japanese": "深く進むほど… 悪化する。",
						"chinese": "越深入… 越糟糕。",
						"french": "Plus on s'enfonce… plus ça empire.",
						"spanish": "Cuanto más profundo vamos… peor se pone.",
						"vietnamese": "Càng đi sâu… càng tệ hơn.",
						"thai": "ยิ่งลึกเข้าไป… ยิ่งแย่ลง",
						"hindi": "जितना गहरा जाएंगे… उतना बुरा होता जाएगा।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…점점 추워지는 것 같아.",
						"english": "…It seems to be getting colder.",
						"japanese": "…だんだん寒くなっているようだ。",
						"chinese": "…好像越来越冷了。",
						"french": "…Il semble faire de plus en plus froid.",
						"spanish": "…Parece que hace cada vez más frío.",
						"vietnamese": "…Dường như trời càng lúc càng lạnh.",
						"thai": "…ดูเหมือนว่าจะหนาวขึ้นเรื่อยๆ",
						"hindi": "…शायद ठंड बढ़ती जा रही है।"
					}
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "단순한 추위가 아니야. 온기가… 사라지고 있어.",
						"english": "It's not just cold. The warmth is… fading.",
						"japanese": "ただの寒さじゃない。温もりが… 消えている。",
						"chinese": "这不只是寒冷。温暖正在… 消失。",
						"french": "Ce n'est pas juste le froid. La chaleur est… en train de disparaître.",
						"spanish": "No es solo frío. El calor está… desvaneciéndose.",
						"vietnamese": "Không chỉ là lạnh. Hơi ấm đang… biến mất.",
						"thai": "นี่ไม่ใช่แค่ความหนาวเย็น ความอบอุ่นกำลัง… หายไป",
						"hindi": "यह सिर्फ ठंड नहीं है। गर्माहट… गायब हो रही है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "이 굶주림은… 끝이 없어.",
						"english": "This hunger is… endless.",
						"japanese": "この飢えは… 終わりがない。",
						"chinese": "这种饥饿… 永无止境。",
						"french": "Cette faim est… sans fin.",
						"spanish": "Esta hambruna es… interminable.",
						"vietnamese": "Cơn đói này… không có điểm dừng.",
						"thai": "ความหิวโหยนี้… ไม่มีที่สิ้นสุด",
						"hindi": "यह भूख… अनंत है।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "eira"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"speaker": "eira",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이제 돌아갈 수 없어.",
						"english": "There's no turning back now.",
						"japanese": "もう引き返せない。",
						"chinese": "现在已无法回头。",
						"french": "Impossible de faire demi-tour maintenant.",
						"spanish": "Ya no hay vuelta atrás.",
						"vietnamese": "Không thể quay lại nữa rồi.",
						"thai": "ตอนนี้กลับไม่ได้แล้ว",
						"hindi": "अब वापसी नहीं हो सकती।"
					}
				},
				{
					"content": {
						"korean": "여기서부터는… 기록도 의미 없을지 몰라.",
						"english": "From here… even records might be meaningless.",
						"japanese": "ここからは… 記録も意味がないかもしれない。",
						"chinese": "从这里开始… 连记录都可能毫无意义。",
						"french": "D'ici… même les archives pourraient être insignifiantes.",
						"spanish": "De aquí en adelante… incluso los registros podrían ser inútiles.",
						"vietnamese": "Từ đây… ngay cả ghi chép cũng có thể vô nghĩa.",
						"thai": "จากตรงนี้ไป… แม้แต่บันทึกก็อาจจะไร้ความหมาย",
						"hindi": "यहां से… शायद रिकॉर्ड भी बेमानी हो।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "하지만… 멈출 수 없어. 이 진실을 밝혀야 해.",
						"english": "But… I can't stop. I must uncover this truth.",
						"japanese": "だけど… 止まれない。この真実を明かさなければ。",
						"chinese": "但是… 我不能停下。我必须揭露这个真相。",
						"french": "Mais… je ne peux pas m'arrêter. Je dois révéler cette vérité.",
						"spanish": "Pero… no puedo detenerme. Debo desvelar esta verdad.",
						"vietnamese": "Nhưng… tôi không thể dừng lại. Tôi phải làm sáng tỏ sự thật này.",
						"thai": "แต่… ฉันหยุดไม่ได้ ฉันต้องเปิดเผยความจริงนี้",
						"hindi": "लेकिन… मैं रुक नहीं सकता। मुझे इस सच्चाई को उजागर करना होगा।"
					},
					"speaker": "eira"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "결국… 너희도… 나의 일부가 될 뿐.",
						"english": "Ultimately... you too... will merely become a part of me.",
						"japanese": "結局…お前たちも…私の…一部となるだけだ。",
						"chinese": "终究…你们也…只会成为我的一部分。",
						"french": "Au final... vous aussi... ne deviendrez qu'une partie de moi.",
						"spanish": "Al final... vosotros también... solo seréis parte de mí.",
						"vietnamese": "Cuối cùng... các ngươi cũng... chỉ trở thành một phần của ta.",
						"thai": "ท้ายที่สุด... พวกเจ้าก็... จะเป็นเพียงส่วนหนึ่งของข้า.",
						"hindi": "अंततः... तुम भी... मेरे ही हिस्से बनोगे।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 다시…!",
						"english": "Damn... Again!",
						"japanese": "くそっ… またか！",
						"chinese": "该死……再来！",
						"french": "Mince... Encore !",
						"spanish": "Maldición... ¡Otra vez!",
						"vietnamese": "Chết tiệt... Lại nữa!",
						"thai": "บ้าจริง... อีกแล้ว!",
						"hindi": "धिक्कार है... फिर से!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "도망쳐 봐야… 아무 소용없어.",
						"english": "Running away... it's useless.",
						"japanese": "逃げても… 無駄だ。",
						"chinese": "逃跑也……没用。",
						"french": "Fuir... c'est inutile.",
						"spanish": "Huir... es inútil.",
						"vietnamese": "Chạy trốn cũng... vô ích thôi.",
						"thai": "หนีไปก็... ไม่มีประโยชน์หรอก",
						"hindi": "भागने से भी... कोई फायदा नहीं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 설원을 집어삼켰다. 그 중심에 늑대가 있었다.",
						"english": "A colossal shadow swallowed the snowfield. At its heart was the wolf.",
						"japanese": "巨大な影が雪原を飲み込んだ。その中心に狼がいた。",
						"chinese": "巨大的阴影吞噬了雪原。其中心是一匹狼。",
						"french": "Une ombre colossale a englouti la plaine enneigée. Au centre se trouvait le loup.",
						"spanish": "Una sombra colosal engulló el campo de nieve. En su centro estaba el lobo.",
						"vietnamese": "Một bóng đen khổng lồ nuốt chửng cánh đồng tuyết. Trung tâm của nó là con sói.",
						"thai": "เงามหึมากลืนกินทุ่งหิมะ ณ ใจกลางนั้นคือหมาป่า",
						"hindi": "एक विशालकाय छाया ने बर्फ के मैदान को निगल लिया। उसके केंद्र में भेड़िया था।"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…왔군. 나의 굶주림을 채워줄 제물들이.",
						"english": "...They've come. Sacrifices to sate my hunger.",
						"japanese": "…来たか。我が飢えを満たす贄どもが。",
						"chinese": "…来了。满足我饥饿的祭品们。",
						"french": "...Ils sont là. Des sacrifices pour apaiser ma faim.",
						"spanish": "...Han llegado. Sacrificios para saciar mi hambre.",
						"vietnamese": "...Đến rồi. Những vật tế để lấp đầy cơn đói của ta.",
						"thai": "...มาแล้ว. เครื่องสังเวยที่จะเติมเต็มความหิวโหยของข้า.",
						"hindi": "...वे आ गए। मेरी भूख मिटाने वाले बलिदान।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "네가 이 모든 것을 망친 괴물인가!",
						"english": "Are you the monster who ruined everything?!",
						"japanese": "お前がこの全てを滅ぼした怪物か！",
						"chinese": "你就是毁掉这一切的怪物吗？！",
						"french": "Es-tu le monstre qui a tout ruiné ?!",
						"spanish": "¡¿Eres el monstruo que lo arruinó todo?!",
						"vietnamese": "Ngươi là con quái vật đã phá hủy tất cả sao?!",
						"thai": "เจ้าคืออสูรกายที่ทำลายทุกสิ่งงั้นรึ?!",
						"hindi": "क्या तुम वही राक्षस हो जिसने सब बर्बाद कर दिया?!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "괴물? 나는… 존재할 뿐.",
						"english": "Monster? I merely... exist.",
						"japanese": "怪物だと？私は…ただ存在するだけだ。",
						"chinese": "怪物？我只是…存在着而已。",
						"french": "Monstre ? Je ne fais... qu'exister.",
						"spanish": "¿Monstruo? Yo solo... existo.",
						"vietnamese": "Quái vật? Ta chỉ là... tồn tại thôi.",
						"thai": "อสูรกายงั้นรึ? ข้าก็แค่... ดำรงอยู่เท่านั้น.",
						"hindi": "राक्षस? मैं बस... मौजूद हूँ।"
					}
				},
				{
					"content": {
						"korean": "…싸우자.",
						"english": "...Let's fight.",
						"japanese": "…戦おう。",
						"chinese": "…战吧。",
						"french": "...Combattons.",
						"spanish": "...Luchemos.",
						"vietnamese": "...Chiến đi.",
						"thai": "...มาสู้กัน.",
						"hindi": "...लड़ते हैं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "결국… 채워지지 않는… 굶주림…",
						"english": "Ultimately... an insatiable... hunger...",
						"japanese": "結局…満たされぬ…飢えか…",
						"chinese": "终究…无法满足的…饥饿…",
						"french": "Au final... une faim... insatiable...",
						"spanish": "Al final... un hambre... insaciable...",
						"vietnamese": "Cuối cùng... một cơn đói... không thể lấp đầy...",
						"thai": "ท้ายที่สุด... ความหิวโหย... ที่ไม่มีวันอิ่ม...",
						"hindi": "अंततः... एक अतृप्त... भूख..."
					}
				},
				{
					"content": {
						"korean": "끝났어…?",
						"english": "It's over...?",
						"japanese": "終わったのか…？",
						"chinese": "结束了…？",
						"french": "C'est fini...?",
						"spanish": "¿Se acabó...?",
						"vietnamese": "Kết thúc rồi sao...?",
						"thai": "จบแล้ว...?",
						"hindi": "खत्म हो गया...?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아니. 이건… 시작일 뿐이야.",
						"english": "No. This is... just the beginning.",
						"japanese": "いや。これは…始まりに過ぎない。",
						"chinese": "不。这…只是开始。",
						"french": "Non. Ce n'est... que le début.",
						"spanish": "No. Esto es... solo el principio.",
						"vietnamese": "Không. Đây chỉ là... khởi đầu thôi.",
						"thai": "ไม่. นี่เป็น... แค่จุดเริ่มต้นเท่านั้น.",
						"hindi": "नहीं। यह बस... शुरुआत है।"
					}
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "기록은… 계속되어야 한다.",
						"english": "The record... must continue.",
						"japanese": "記録は…続けなければならない。",
						"chinese": "记录…必须继续。",
						"french": "Le récit... doit continuer.",
						"spanish": "El registro... debe continuar.",
						"vietnamese": "Kỷ lục... phải tiếp tục.",
						"thai": "บันทึก... จะต้องดำเนินต่อไป.",
						"hindi": "रिकॉर्ड... जारी रहना चाहिए।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "늑대의 굶주림은 멈췄지만, 설원의 잿빛은 더 깊어졌다. 공허는, 계속 번지고 있었다.",
						"english": "The wolf's hunger ceased, but the snowfield's grey deepened. The void, continued to spread.",
						"japanese": "狼の飢えは止まったが、雪原の灰色はより深くなった。虚無は、広がり続けていた。",
						"chinese": "狼的饥饿停止了，但雪原的灰色更深了。虚空，仍在蔓延。",
						"french": "La faim du loup cessa, mais le gris du champ de neige s'intensifia. Le vide, continuait de se propager.",
						"spanish": "El hambre del lobo cesó, pero el gris del campo nevado se hizo más profundo. El vacío, seguía extendiéndose.",
						"vietnamese": "Cơn đói của sói đã dừng lại, nhưng màu xám của cánh đồng tuyết càng sâu hơn. Hư vô, vẫn tiếp tục lan rộng.",
						"thai": "ความหิวโหยของหมาป่าหยุดลงแล้ว แต่สีเทาของทุ่งหิมะกลับลึกล้ำยิ่งขึ้น ความว่างเปล่า ยังคงแผ่ขยาย.",
						"hindi": "भेड़िये की भूख मिट गई, लेकिन बर्फ के मैदान का धूसरपन गहरा हो गया। शून्य, फैलता रहा।"
					}
				}
			]
		}
	]
} as const;
