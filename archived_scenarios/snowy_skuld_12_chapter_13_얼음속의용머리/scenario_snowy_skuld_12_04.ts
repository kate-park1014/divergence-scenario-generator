export const scenario_snowy_skuld_12_04 = {
	"scenario_id": "snowy_skuld_12_04",
	"order": 4,
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
					"type": "speech",
					"content": {
						"korean": "빙하의 그림자 아래, 거대한 선박의 윤곽이 어렴풋이 드러났다.",
						"english": "Beneath the glacier's shadow, the outline of a colossal ship vaguely appeared.",
						"japanese": "氷河の影の下、巨大な船の輪郭がおぼろげに現れた。",
						"chinese": "在冰川的阴影下，一艘巨型船只的轮廓若隐若现。",
						"french": "Sous l'ombre du glacier, la silhouette d'un navire colossal apparut vaguement.",
						"spanish": "Bajo la sombra del glaciar, la silueta de una nave colosal apareció vagamente.",
						"vietnamese": "Dưới bóng băng hà, hình dáng một con tàu khổng lồ lờ mờ hiện ra.",
						"thai": "ใต้เงาของธารน้ำแข็ง โครงร่างของเรือขนาดมหึมาปรากฏขึ้นอย่างเลือนลาง",
						"hindi": "ग्लेशियर की छाया के नीचे, एक विशाल जहाज का खाका धुंधला सा दिखाई दिया।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이 거대한 배는 대체… 어떻게 여기에?",
						"english": "This colossal ship… how did it get here?",
						"japanese": "この巨大な船は一体… どうしてここに？",
						"chinese": "这艘巨型船只… 究竟是如何来到这里的？",
						"french": "Ce navire colossal… comment est-il arrivé ici ?",
						"spanish": "Esta nave colosal… ¿cómo llegó aquí?",
						"vietnamese": "Con tàu khổng lồ này… làm thế nào mà nó lại ở đây?",
						"thai": "เรือขนาดมหึมาลำนี้… มาอยู่ที่นี่ได้อย่างไร?",
						"hindi": "यह विशाल जहाज... यहाँ कैसे आया?"
					},
					"emotion": "base"
				},
				{
					"spot": [
						3,
						2
					],
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "선체에 새겨진 룬… 익숙한 형태군.",
						"english": "The runes carved on the hull… they look familiar.",
						"japanese": "船体に刻まれたルーン… 見慣れた形だ。",
						"chinese": "船体上刻着的符文… 看起来很熟悉。",
						"french": "Les runes gravées sur la coque… une forme familière.",
						"spanish": "Las runas grabadas en el casco… una forma familiar.",
						"vietnamese": "Những ký tự chạm khắc trên thân tàu… trông quen thuộc thật.",
						"thai": "อักษรรูนที่แกะสลักอยู่บนตัวเรือ… ช่างคุ้นเคยเหลือเกิน",
						"hindi": "पतवार पर खुदे हुए रून्स... वे परिचित लगते हैं।"
					},
					"emotion": "base"
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
					"duration_ms": 500,
					"speaker": "eira",
					"spot": [
						2,
						2
					]
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "이 룬… 빙하 정령의 표면 문양과 겹쳐 보여.",
						"english": "These runes… they overlap with the surface patterns of the Glacier Spirit.",
						"japanese": "このルーン… 氷河の精霊の表面模様と重なって見える。",
						"chinese": "这些符文… 看起来与冰川精灵的表面图案重叠。",
						"french": "Ces runes… elles se superposent aux motifs de surface de l'Esprit du Glacier.",
						"spanish": "Estas runas… se superponen con los patrones de la superficie del Espíritu Glaciar.",
						"vietnamese": "Những ký tự này… chúng trùng khớp với hoa văn bề mặt của Tinh Linh Băng Hà.",
						"thai": "อักษรรูนเหล่านี้… ดูเหมือนจะทับซ้อนกับลวดลายบนพื้นผิวของวิญญาณธารน้ำแข็ง",
						"hindi": "ये रून्स... ग्लेशियर स्पिरिट के सतह के पैटर्न से मेल खाते हैं।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "겹쳐 보인다고?",
						"english": "They overlap?",
						"japanese": "重なって見えるって？",
						"chinese": "重叠？",
						"french": "Ils se superposent ?",
						"spanish": "¿Se superponen?",
						"vietnamese": "Trùng khớp sao?",
						"thai": "ทับซ้อนกันเหรอ?",
						"hindi": "वे ओवरलैप करते हैं?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "묘하게 닮았어. 우연일까?",
						"english": "Strangely similar. A coincidence?",
						"japanese": "妙に似ている。偶然だろうか？",
						"chinese": "出奇地相似。是巧合吗？",
						"french": "Étrangement similaire. Une coïncidence ?",
						"spanish": "Extrañamente similar. ¿Una coincidencia?",
						"vietnamese": "Giống nhau một cách kỳ lạ. Có phải là trùng hợp không?",
						"thai": "คล้ายกันอย่างประหลาด นี่บังเอิญหรือเปล่า?",
						"hindi": "अजीब तरह से समान। एक संयोग?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "eira",
					"spot": [
						4,
						2
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "아니. 이건 우연이 아니야.",
						"english": "No. This is no coincidence.",
						"japanese": "いや、これは偶然じゃない。",
						"chinese": "不，这不是巧合。",
						"french": "Non. Ce n'est pas une coïncidence.",
						"spanish": "No. Esto no es una coincidencia.",
						"vietnamese": "Không. Đây không phải là ngẫu nhiên.",
						"thai": "ไม่ นี่ไม่ใช่เรื่องบังเอิญ",
						"hindi": "नहीं। यह कोई संयोग नहीं है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "무슨 소리야, 에이라?",
						"english": "What do you mean, Eira?",
						"japanese": "どういうことだ、エイラ？",
						"chinese": "你什么意思，艾拉？",
						"french": "Que veux-tu dire, Eira ?",
						"spanish": "¿Qué quieres decir, Eira?",
						"vietnamese": "Ý cô là sao, Eira?",
						"thai": "คุณหมายความว่ายังไง ไอรา?",
						"hindi": "क्या मतलब है तुम्हारा, ऐरा?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "선체에 새겨진 룬과 빙하의 문양… 정확히 일치해.",
						"english": "The runes on the hull and the glacial patterns... they match perfectly.",
						"japanese": "船体に刻まれたルーンと氷河の模様…正確に一致する。",
						"chinese": "船体上的符文和冰川的图案……完全一致。",
						"french": "Les runes gravées sur la coque et les motifs glaciaires... ils correspondent parfaitement.",
						"spanish": "Las runas grabadas en el casco y los patrones glaciares... coinciden exactamente.",
						"vietnamese": "Các ký tự rune trên thân tàu và hoa văn của sông băng... chúng hoàn toàn khớp nhau.",
						"thai": "รูนที่สลักบนตัวเรือและลวดลายของธารน้ำแข็ง... มันตรงกันเป๊ะเลย",
						"hindi": "पतवार पर उकेरे गए चिह्न और ग्लेशियर के पैटर्न... पूरी तरह मेल खाते हैं।"
					},
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "eira",
					"spot": [
						2,
						2
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "결론은 하나야. 이 빙하와 선체는… 원래 하나였던 거야.",
						"english": "There's only one conclusion. This glacier and the hull... they were originally one.",
						"japanese": "結論は一つだ。この氷河と船体は…元々一つだったんだ。",
						"chinese": "只有一个结论。这冰川和船体……原来是一体的。",
						"french": "Il n'y a qu'une seule conclusion. Ce glacier et la coque... n'étaient à l'origine qu'un.",
						"spanish": "Solo hay una conclusión. Este glaciar y el casco... originalmente eran uno.",
						"vietnamese": "Chỉ có một kết luận. Sông băng này và thân tàu... ban đầu là một.",
						"thai": "มีข้อสรุปเดียว ธารน้ำแข็งนี้และตัวเรือ... เดิมทีเป็นสิ่งเดียวกัน",
						"hindi": "निष्कर्ष एक ही है। यह ग्लेशियर और पतवार... मूल रूप से एक ही थे।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "하나라고? 그게 무슨 말도 안 되는 소리야!",
						"english": "One? What nonsense are you spouting!",
						"japanese": "一つだと？何を馬鹿なことを言ってるんだ！",
						"chinese": "一体的？你在胡说些什么！",
						"french": "Un ? Quelle absurdité !",
						"spanish": "¿Uno? ¡Qué tontería estás diciendo!",
						"vietnamese": "Một sao? Thật là chuyện vô lý!",
						"thai": "สิ่งเดียวกันเหรอ? ไร้สาระอะไรกัน!",
						"hindi": "एक? यह क्या बकवास है!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "기록해야 해. 잊힌 진실을… 이제야 찾았군.",
						"english": "I must record this. The forgotten truth... I've found it at last.",
						"japanese": "記録しなければ。忘れられた真実を…ついに見つけた。",
						"chinese": "我必须记录下来。被遗忘的真相……终于被我找到了。",
						"french": "Je dois le consigner. La vérité oubliée... je l'ai enfin trouvée.",
						"spanish": "Debo registrar esto. La verdad olvidada... por fin la he encontrado.",
						"vietnamese": "Phải ghi lại. Chân lý bị lãng quên... cuối cùng đã tìm thấy.",
						"thai": "ต้องบันทึกไว้ ความจริงที่ถูกลืม... ในที่สุดก็พบแล้ว",
						"hindi": "मुझे इसे दर्ज करना होगा। भूला हुआ सच... आखिरकार मैंने इसे ढूंढ लिया है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "선체의 심장부, 거대한 그림자가 길을 막아섰다.",
						"english": "At the heart of the hull, a colossal shadow blocked the way.",
						"japanese": "船体の心臓部、巨大な影が道を阻んだ。",
						"chinese": "在船体的心脏地带，一个巨大的影子挡住了去路。",
						"french": "Au cœur de la coque, une ombre colossale barra le chemin.",
						"spanish": "En el corazón del casco, una sombra colosal bloqueó el camino.",
						"vietnamese": "Tại trung tâm của thân tàu, một bóng đen khổng lồ đã chặn đường.",
						"thai": "ที่ใจกลางของตัวเรือ เงาขนาดมหึมาขวางทางอยู่",
						"hindi": "पतवार के केंद्र में, एक विशाल छाया ने रास्ता रोक दिया।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "이곳에 발을 들인 침범자여. 더 이상 나아갈 수 없다.",
						"english": "Intruder who has set foot here. You may not advance further.",
						"japanese": "ここに足を踏み入れた侵入者よ。これ以上進むことは許されない。",
						"chinese": "踏足此地的入侵者啊。你不能再向前了。",
						"french": "Intrus qui a mis le pied ici. Tu ne peux pas avancer plus loin.",
						"spanish": "Intruso que ha puesto un pie aquí. No puedes avanzar más.",
						"vietnamese": "Kẻ xâm nhập đã đặt chân đến đây. Ngươi không thể tiến thêm nữa.",
						"thai": "ผู้บุกรุกที่เหยียบย่างมาที่นี่ เจ้าไม่อาจไปต่อได้อีกแล้ว",
						"hindi": "यहां कदम रखने वाले घुसपैठिए। तुम आगे नहीं बढ़ सकते।"
					},
					"emotion": "angry"
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "eira",
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "저 존재에게도… 같은 룬이 새겨져 있어. 빙하의… 수호자인가.",
						"english": "That being also... bears the same runes. Is it the glacier's... guardian?",
						"japanese": "あの存在にも…同じルーンが刻まれている。氷河の…守護者か。",
						"chinese": "那个存在身上……也刻着同样的符文。是冰川的……守护者吗？",
						"french": "Cette entité aussi... porte les mêmes runes. Est-ce le... gardien du glacier ?",
						"spanish": "Esa entidad también... lleva las mismas runas. ¿Es el... guardián del glaciar?",
						"vietnamese": "Thực thể đó cũng... có những ký tự rune tương tự. Là... người bảo vệ của sông băng ư?",
						"thai": "สิ่งนั้นก็... มีรูนเดียวกันสลักอยู่ เป็น... ผู้พิทักษ์ของธารน้ำแข็งงั้นหรือ",
						"hindi": "उस प्राणी पर भी... वही चिह्न खुदे हुए हैं। क्या यह ग्लेशियर का... संरक्षक है?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "길을 비켜라. 우리는 진실을 찾아 여기까지 왔다!",
						"english": "Clear the way! We've come this far for the truth!",
						"japanese": "道をあけろ！我々は真実を求めてここまで来たのだ！",
						"chinese": "让开！我们为了寻找真相才来到这里！",
						"french": "Écarte-toi ! Nous sommes venus jusqu'ici pour la vérité !",
						"spanish": "¡Abre paso! ¡Hemos llegado hasta aquí por la verdad!",
						"vietnamese": "Tránh đường! Chúng ta đã đến đây để tìm kiếm sự thật!",
						"thai": "หลีกทางไป! เรามาถึงที่นี่เพื่อตามหาความจริง!",
						"hindi": "रास्ता खाली करो! हम सच की तलाश में यहां तक आए हैं!"
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "…겨우 여기까지… 도달했구나. 허나… 진실은… 얼음보다 차갑다.",
						"english": "...You've finally... reached this far. But... the truth... is colder than ice.",
						"japanese": "「…ようやくここまで… たどり着いたか。だが… 真実は… 氷よりも冷たい。」",
						"chinese": "「…终于…走到这里了。然而…真相…比冰更冷。」",
						"french": "...Vous avez enfin... atteint ce point. Mais... la vérité... est plus froide que la glace.",
						"spanish": "...Finalmente... has llegado hasta aquí. Pero... la verdad... es más fría que el hielo.",
						"vietnamese": "...Cuối cùng... cũng đã đến được đây. Nhưng... sự thật... lạnh hơn băng.",
						"thai": "...ในที่สุด... ก็มาถึงตรงนี้... แต่... ความจริง... เย็นชากว่าน้ำแข็ง.",
						"hindi": "...आख़िरकार... तुम यहाँ तक पहुँच गए। पर… सच… बर्फ़ से भी ज़्यादा ठंडा है।"
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "쓰러졌지만, 그 룬은… 잊힌 비극을 말해주고 있어.",
						"english": "Though fallen, that rune... speaks of a forgotten tragedy.",
						"japanese": "「倒れたが、そのルーンは… 忘れられた悲劇を語っている。」",
						"chinese": "「虽然倒下了，但那个符文…诉说着被遗忘的悲剧。」",
						"french": "Bien que tombée, cette rune... raconte une tragédie oubliée.",
						"spanish": "Aunque caído, esa runa... habla de una tragedia olvidada.",
						"vietnamese": "Dù đã gục ngã, nhưng những ký tự đó... kể về một bi kịch bị lãng quên.",
						"thai": "แม้จะล้มลงไป แต่รูนนั้น... กำลังบอกเล่าถึงโศกนาฏกรรมที่ถูกลืม.",
						"hindi": "गिरने के बावजूद, वह रून… एक भूली हुई त्रासदी की कहानी कहता है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "진실이 뭐든… 우리는 밝혀낼 거야.",
						"english": "Whatever the truth... we will uncover it.",
						"japanese": "「真実が何であれ… 我々はそれを暴くだろう。」",
						"chinese": "「无论真相是什么…我们都会揭露它。」",
						"french": "Quelle que soit la vérité... nous la découvrirons.",
						"spanish": "Sea cual sea la verdad... la descubriremos.",
						"vietnamese": "Dù sự thật là gì... chúng ta sẽ phơi bày nó.",
						"thai": "ไม่ว่าความจริงจะเป็นอะไร... เราก็จะเปิดเผยมัน.",
						"hindi": "सच कुछ भी हो… हम उसका पता लगा लेंगे।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "선체는 더욱 깊은 비밀을 품고 있었다. 그 끝은 용의 머리였다.",
						"english": "The hull held even deeper secrets. Its end was the dragon's head.",
						"japanese": "「船体はさらに深い秘密を抱えていた。その終着点は竜の頭だった。」",
						"chinese": "「船体藏着更深的秘密。它的尽头是龙的头部。」",
						"french": "La coque recelait des secrets encore plus profonds. Sa fin était la tête du dragon.",
						"spanish": "El casco guardaba secretos aún más profundos. Su final era la cabeza del dragón.",
						"vietnamese": "Thân tàu chứa đựng những bí mật sâu sắc hơn nữa. Điểm cuối của nó là đầu rồng.",
						"thai": "ตัวเรือซ่อนความลับที่ลึกยิ่งกว่านั้น ปลายทางของมันคือหัวมังกร.",
						"hindi": "जहाज़ के ढांचे में और भी गहरे राज़ थे। उसका अंत एक ड्रैगन का सिर था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "어리석은 자들. 진실은 너희가 감당할 수 없을 것이다.",
						"english": "Fools. The truth is more than you can bear.",
						"japanese": "「愚か者め。真実はお前たちには耐えられないだろう。」",
						"chinese": "「愚蠢的人们。真相是你们无法承受的。」",
						"french": "Imbéciles. La vérité est plus que vous ne pouvez supporter.",
						"spanish": "Tontos. La verdad es más de lo que podéis soportar.",
						"vietnamese": "Những kẻ ngốc. Sự thật là thứ các ngươi không thể gánh vác nổi.",
						"thai": "คนโง่เอ๊ย ความจริงนั้นเกินกว่าที่พวกเจ้าจะรับไหว.",
						"hindi": "मूर्खों। सच तुम झेल नहीं पाओगे।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않았어. 포기하지 않아.",
						"english": "...It's not over yet. I won't give up.",
						"japanese": "「…まだ終わってない。諦めない。」",
						"chinese": "「…还没结束。我不会放弃。」",
						"french": "...Ce n'est pas encore fini. Je n'abandonnerai pas.",
						"spanish": "...Aún no ha terminado. No me rendiré.",
						"vietnamese": "...Chưa kết thúc đâu. Tôi sẽ không bỏ cuộc.",
						"thai": "...ยังไม่จบหรอก. ฉันจะไม่ยอมแพ้.",
						"hindi": "...अभी ख़त्म नहीं हुआ। मैं हार नहीं मानूँगा।"
					},
					"emotion": "angry"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"길었던 설원의 그림자, 더욱 깊숙한 곳으로.",
			"얼음은 더 이상 자연이 아니었다.",
			"부서진 노, 닳아버린 방패. 거대한 무덤의 잔해만이.",
			"차가운 기록 속에서, 잊힌 역사가 고개를 든다."
		],
		"english": [
			"The long shadow of the snowy fields, stretching deeper.",
			"Ice was no longer natural.",
			"Broken oars, worn shields. Only the remnants of a colossal tomb.",
			"Within the cold records, a forgotten history stirs."
		],
		"japanese": [
			"長き雪原の影、さらに奥深くへ。",
			"氷はもはや自然ではなかった。",
			"砕けた櫂、擦り切れた盾。残るのは巨大な墓の残骸のみ。",
			"冷たい記録の中で、忘れられた歴史が頭をもたげる。"
		],
		"chinese": [
			"漫长雪原的阴影，延伸至更深处。",
			"冰不再是自然之物。",
			"破碎的桨，磨损的盾。只剩下巨型墓穴的残骸。",
			"在冰冷的记录中，一段被遗忘的历史浮现。"
		],
		"french": [
			"L'ombre étendue des champs de neige, s'étirant plus profondément.",
			"La glace n'était plus naturelle.",
			"Rames brisées, boucliers usés. Seuls les vestiges d'un tombeau colossal.",
			"Dans les annales glaciales, une histoire oubliée émerge."
		],
		"spanish": [
			"La larga sombra de los campos nevados, adentrándose más.",
			"El hielo ya no era natural.",
			"Remedios rotos, escudos gastados. Solo los restos de una tumba colosal.",
			"En los fríos registros, una historia olvidada se alza."
		],
		"vietnamese": [
			"Bóng tối dài của cánh đồng tuyết, kéo dài sâu hơn.",
			"Băng không còn tự nhiên nữa.",
			"Mái chèo gãy, khiên mòn. Chỉ còn lại tàn tích của một ngôi mộ khổng lồ.",
			"Trong những ghi chép lạnh lẽo, một lịch sử bị lãng quên trỗi dậy."
		],
		"thai": [
			"เงายาวของทุ่งหิมะ ลึกเข้าไปอีก",
			"น้ำแข็งไม่ใช่ธรรมชาติอีกต่อไป",
			"ไม้พายหัก โล่สึกหรอ เหลือเพียงซากปรักหักพังของสุสานขนาดมหึมา",
			"ในบันทึกอันหนาวเหน็บ ประวัติศาสตร์ที่ถูกลืมกลับปรากฏขึ้น"
		],
		"hindi": [
			"बर्फ़ीले मैदानों की लंबी छाया, और भी गहराई तक।",
			"बर्फ अब प्राकृतिक नहीं थी।",
			"टूटे हुए चप्पू, घिसी हुई ढालें। केवल एक विशाल कब्र के अवशेष।",
			"ठंडे अभिलेखों में, एक भूला हुआ इतिहास उभरता है।"
		]
	}
} as const;
