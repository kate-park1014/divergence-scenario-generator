export const scenario_snowy_mimiria_81_02 = {
	"scenario_id": "snowy_mimiria_81_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"inka": {
			"id": "mon_583e945a-1e2f-428b-a251-b428f25b4052",
			"name": {
				"korean": "인카",
				"english": "Inka",
				"japanese": "インカ",
				"chinese": "因卡",
				"french": "Inka",
				"spanish": "Inka",
				"vietnamese": "Inka",
				"thai": "อินคา",
				"hindi": "इंंका"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/97f4545b-2e8a-4688-3e4e-b34bb246dd00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f27763ba-2358-4fd3-c813-0f0b59dcac00/public"
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
					"type": "speech",
					"content": {
						"korean": "얼어붙은 협곡, 눈보라가 길을 지웠다.",
						"english": "Frozen canyon, the blizzard erased the path.",
						"japanese": "凍てついた峡谷、吹雪が道を消した。",
						"chinese": "冰冻的峡谷，暴风雪抹去了道路。",
						"french": "Gorge gelée, le blizzard a effacé le chemin.",
						"spanish": "Cañón congelado, la tormenta de nieve borró el camino.",
						"vietnamese": "Hẻm núi đóng băng, bão tuyết xóa sạch lối đi.",
						"thai": "หุบเขาเยือกแข็ง พายุหิมะลบเลือนเส้นทาง",
						"hindi": "जमी हुई घाटी, बर्फीले तूफान ने रास्ता मिटा दिया।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "젠장, 미로 같잖아.",
						"english": "Damn it, it's like a maze.",
						"japanese": "くそ、迷路みたいじゃないか。",
						"chinese": "该死，这简直是个迷宫。",
						"french": "Merde, c'est comme un labyrinthe.",
						"spanish": "Maldita sea, es como un laberinto.",
						"vietnamese": "Chết tiệt, như một mê cung vậy.",
						"thai": "ให้ตายสิ เหมือนเขาวงกตเลย",
						"hindi": "धिक्कार है, यह एक भूलभुलैया जैसा है।"
					},
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"spot": [
						5,
						3
					],
					"action": "enter",
					"speaker": "inka",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "길을 잃었나요? 이 길의 끝을 아는 자는 나뿐이에요.",
						"english": "Lost your way? Only I know the end of this path.",
						"japanese": "道に迷いましたか？この道の終わりを知っているのは私だけです。",
						"chinese": "迷路了吗？只有我才知道这条路的尽头。",
						"french": "Perdu votre chemin ? Seule moi connais la fin de ce sentier.",
						"spanish": "¿Perdido el camino? Solo yo conozco el final de este sendero.",
						"vietnamese": "Lạc đường à? Chỉ mình tôi biết điểm cuối con đường này thôi.",
						"thai": "หลงทางหรือเปล่า? มีแค่ฉันเท่านั้นที่รู้จุดสิ้นสุดของเส้นทางนี้",
						"hindi": "रास्ता भटक गए? इस रास्ते का अंत केवल मैं ही जानती हूँ।"
					},
					"speaker": "inka"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "누구지?",
						"english": "Who is it?",
						"japanese": "誰だ？",
						"chinese": "是谁？",
						"french": "Qui est-ce ?",
						"spanish": "¿Quién es?",
						"vietnamese": "Ai đó?",
						"thai": "ใครน่ะ?",
						"hindi": "कौन है?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "inka",
					"content": {
						"korean": "인카. 잃어버린 고대 유물을 찾고 있어요. 그게 모든 길을 열어줄 거예요.",
						"english": "Inka. I'm searching for a lost ancient relic. That will open all paths.",
						"japanese": "インカ。失われた古代の遺物を探しています。それがすべての道を開くでしょう。",
						"chinese": "因卡。我在寻找一件失落的古代遗物。它将打开所有的道路。",
						"french": "Inka. Je cherche une relique ancienne perdue. Elle ouvrira tous les chemins.",
						"spanish": "Inka. Estoy buscando una antigua reliquia perdida. Eso abrirá todos los caminos.",
						"vietnamese": "Inka. Tôi đang tìm kiếm một di vật cổ đại bị mất. Nó sẽ mở ra tất cả các con đường.",
						"thai": "อินคา ฉันกำลังตามหาสิ่งประดิษฐ์โบราณที่หายไป นั่นจะเปิดทางทุกเส้นทาง",
						"hindi": "इंका। मैं एक खोई हुई प्राचीन अवशेष खोज रही हूँ। वही सभी रास्ते खोलेगा।"
					},
					"emotion": "happy",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						5,
						3
					],
					"action": "enter",
					"speaker": "inka",
					"type": "direction"
				},
				{
					"speaker": "inka",
					"type": "speech",
					"content": {
						"korean": "여기예요. 유물이 우리를 부르고 있어요.",
						"english": "Here we are. The artifact is calling to us.",
						"japanese": "ここだ。遺物が私たちを呼んでいる。",
						"chinese": "我们到了。圣物在召唤我们。",
						"french": "Nous y sommes. L'artefact nous appelle.",
						"spanish": "Aquí estamos. El artefacto nos está llamando.",
						"vietnamese": "Chúng ta ở đây rồi. Cổ vật đang gọi chúng ta.",
						"thai": "ถึงแล้วครับ วัตถุโบราณกำลังเรียกเราอยู่",
						"hindi": "हम यहां हैं। कलाकृति हमें बुला रही है।"
					},
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "부른다고? 난 오한밖에 못 느끼겠는데.",
						"english": "Calling? All I feel is a chill.",
						"japanese": "呼んでいる？私には悪寒しか感じられないが。",
						"chinese": "召唤？我只感觉到一阵寒意。",
						"french": "Appelle ? Tout ce que je ressens, c'est un frisson.",
						"spanish": "¿Llamando? Todo lo que siento es un escalofrío.",
						"vietnamese": "Gọi sao? Tôi chỉ cảm thấy ớn lạnh thôi.",
						"thai": "เรียกเหรอ? ฉันรู้สึกแค่หนาวสะท้านเองนะ",
						"hindi": "बुला रहा है? मुझे तो सिर्फ ठंड लग रही है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "inka",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "조금만 더 가면... 분명 따뜻한 온기가 느껴질 거예요. 희망이요.",
						"english": "Just a little further... you'll surely feel a warm presence. Hope.",
						"japanese": "もう少し進めば…きっと温かい気配を感じるでしょう。希望をね。",
						"chinese": "再往前一点...你一定会感觉到一股温暖。那是希望。",
						"french": "Encore un peu plus loin... vous ressentirez sûrement une présence chaleureuse. L'espoir.",
						"spanish": "Un poco más lejos... seguramente sentirás una presencia cálida. Esperanza.",
						"vietnamese": "Chỉ một chút nữa thôi... bạn chắc chắn sẽ cảm nhận được sự ấm áp. Hy vọng.",
						"thai": "อีกนิดเดียว... คุณจะต้องรู้สึกถึงความอบอุ่นแน่นอน ความหวังไงล่ะ",
						"hindi": "बस थोड़ी और दूर... आपको निश्चित रूप से एक गर्मजोशी महसूस होगी। आशा।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "inka",
					"spot": [
						5,
						3
					],
					"duration_ms": 500
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "눈보라가 걷히고, 이상하리만치 따뜻한 동굴이 나타났다.",
						"english": "The blizzard cleared, revealing a strangely warm cave.",
						"japanese": "吹雪が晴れ、奇妙なほど暖かい洞窟が現れた。",
						"chinese": "暴风雪停了，一个异常温暖的洞穴出现了。",
						"french": "Le blizzard s'est dissipé, révélant une grotte étrangement chaude.",
						"spanish": "La ventisca cesó, revelando una cueva extrañamente cálida.",
						"vietnamese": "Bão tuyết tan đi, một hang động ấm áp kỳ lạ hiện ra.",
						"thai": "พายุหิมะสงบลง เผยให้เห็นถ้ำที่อบอุ่นแปลกประหลาด",
						"hindi": "बर्फ़ीला तूफ़ान छंट गया, एक अजीब तरह से गर्म गुफा सामने आई।"
					}
				},
				{
					"speaker": "inka",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "봐요. 여기예요. 안식처... 유물이 가까워요.",
						"english": "Look. Here it is. Sanctuary... The artifact is near.",
						"japanese": "見て。ここだ。安息の地…遺物が近い。",
						"chinese": "看。就是这里。避难所...圣物很近了。",
						"french": "Regardez. C'est ici. Sanctuaire... L'artefact est proche.",
						"spanish": "Mira. Aquí está. Santuario... El artefacto está cerca.",
						"vietnamese": "Nhìn kìa. Ở đây rồi. Nơi ẩn náu... Cổ vật ở gần đây.",
						"thai": "ดูสิ ที่นี่ไงล่ะ ที่หลบภัย... วัตถุโบราณอยู่ใกล้แล้ว",
						"hindi": "देखो। यह रहा। अभयारण्य... कलाकृति पास है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이상해. 너무 고요하고, 따뜻해.",
						"english": "Strange. So quiet, and warm.",
						"japanese": "奇妙だ。とても静かで、暖かい。",
						"chinese": "奇怪。太安静了，而且很温暖。",
						"french": "Étrange. Si calme, et chaud.",
						"spanish": "Extraño. Tan tranquilo y cálido.",
						"vietnamese": "Kỳ lạ thật. Thật yên tĩnh và ấm áp.",
						"thai": "แปลกจัง เงียบสงบและอบอุ่นมาก",
						"hindi": "अजीब है। बहुत शांत और गर्म।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그 온기 속에서 알 수 없는 소름끼치는 환영이 속삭이는 듯하다.",
						"english": "Within that warmth, an unknown, chilling phantom seems to whisper.",
						"japanese": "その温もりの中、未知の、身の毛もよだつ幻影が囁くようだ。",
						"chinese": "在那股温暖中，一个未知的、令人毛骨悚然的幻影似乎在低语。",
						"french": "Au sein de cette chaleur, un fantôme inconnu et effrayant semble murmurer.",
						"spanish": "Dentro de esa calidez, un fantasma desconocido y escalofriante parece susurrar.",
						"vietnamese": "Trong sự ấm áp đó, một bóng ma không xác định, rợn người dường như đang thì thầm.",
						"thai": "ท่ามกลางความอบอุ่นนั้น มีภาพหลอนที่ไม่รู้จักและน่าขนลุกกระซิบอยู่",
						"hindi": "उस गर्माहट के भीतर, एक अज्ञात, डरावना प्रेत फुसफुसाता हुआ प्रतीत होता है।"
					},
					"speaker": "narrator"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						5,
						3
					],
					"action": "enter",
					"speaker": "inka",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "잠깐, 저거 봤어? 얼음 속에... 뭐가 스쳐 지나갔는데.",
						"english": "Wait, did you see that? Something... flashed past in the ice.",
						"japanese": "待って、今見た？氷の中に…何かが通り過ぎたぞ。",
						"chinese": "等等，你看到了吗？冰里面...有什么东西闪过去了。",
						"french": "Attends, tu as vu ça ? Quelque chose... a filé dans la glace.",
						"spanish": "Espera, ¿viste eso? Algo... pasó fugazmente en el hielo.",
						"vietnamese": "Khoan đã, bạn có thấy cái đó không? Có gì đó... lướt qua trong băng.",
						"thai": "เดี๋ยว คุณเห็นนั่นไหม? มีบางอย่าง... แวบผ่านไปในน้ำแข็ง",
						"hindi": "रुको, तुमने वह देखा? बर्फ में... कुछ गुज़र गया।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "강한 눈보라 속에서 희미한 과거 기억 조각들이 스쳐 지나갔다.",
						"english": "Faint fragments of past memories flickered by in the fierce blizzard.",
						"japanese": "激しい吹雪の中、過去の記憶の断片がかすかに通り過ぎた。",
						"chinese": "在猛烈的暴风雪中，过去的模糊记忆碎片一闪而过。",
						"french": "De faibles fragments de souvenirs passés ont défilé dans la violente tempête de neige.",
						"spanish": "Débiles fragmentos de recuerdos pasados destellaron en la feroz ventisca.",
						"vietnamese": "Những mảnh ký ức mờ nhạt từ quá khứ lướt qua trong trận bão tuyết dữ dội.",
						"thai": "ท่ามกลางพายุหิมะที่รุนแรง ชิ้นส่วนความทรงจำในอดีตที่เลือนรางได้แวบผ่านไป",
						"hindi": "तेज बर्फीले तूफान में अतीत की धुंधली यादों के टुकड़े चमक उठे।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "환영일 뿐이에요. 유물이 모든 걸 정리해줄 거예요.",
						"english": "It's just a hallucination. The artifact will make everything clear.",
						"japanese": "それは幻影に過ぎません。遺物がすべてを解決してくれるでしょう。",
						"chinese": "那只是幻觉。圣物会理清一切的。",
						"french": "Ce n'est qu'une hallucination. L'artefact clarifiera tout.",
						"spanish": "Es solo una alucinación. El artefacto lo aclarará todo.",
						"vietnamese": "Đó chỉ là ảo ảnh thôi. Cổ vật sẽ làm rõ mọi thứ.",
						"thai": "มันเป็นแค่ภาพหลอนเท่านั้นแหละ วัตถุโบราณจะแก้ไขทุกอย่างเอง",
						"hindi": "यह सिर्फ एक मतिभ्रम है। कलाकृति सब कुछ स्पष्ट कर देगी।"
					},
					"type": "speech",
					"speaker": "inka"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "정리? 우리는 계속 같은 곳을 맴도는 것 같은데.",
						"english": "Sorting? It feels like we're just going in circles.",
						"japanese": "整理？まるで同じ場所をぐるぐる回っているみたいだ。",
						"chinese": "整理？我们好像一直在原地打转。",
						"french": "Ranger ? On dirait qu'on tourne en rond.",
						"spanish": "¿Ordenar? Parece que seguimos dando vueltas en el mismo lugar.",
						"vietnamese": "Sắp xếp? Cứ như chúng ta đang luẩn quẩn ở cùng một chỗ vậy.",
						"thai": "จัดระเบียบเหรอ? ดูเหมือนเราจะวนเวียนอยู่แต่ที่เดิมนะ",
						"hindi": "व्यवस्था? ऐसा लगता है जैसे हम एक ही जगह घूम रहे हैं।"
					},
					"emotion": "angry"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "너희의 승리? 그저 한숨 돌린 것뿐. 길은 끝없이 이어진다.",
						"english": "Your victory? Merely a brief respite. The path stretches on endlessly.",
						"japanese": "お前たちの勝利？ただの一時しのぎに過ぎない。道は果てしなく続く。",
						"chinese": "你们的胜利？不过是暂时喘口气而已。这条路会无休止地延续下去。",
						"french": "Votre victoire ? Juste un bref répit. Le chemin s'étend à l'infini.",
						"spanish": "¿Vuestra victoria? Solo un breve respiro. El camino se extiende sin fin.",
						"vietnamese": "Chiến thắng của các ngươi? Chỉ là một khoảnh khắc nghỉ ngơi ngắn ngủi thôi. Con đường vẫn kéo dài vô tận.",
						"thai": "ชัยชนะของพวกเจ้าเหรอ? แค่การหยุดพักชั่วคราวเท่านั้น เส้นทางยังคงดำเนินต่อไปไม่สิ้นสุด",
						"hindi": "तुम्हारी जीत? बस एक छोटी सी राहत। रास्ता अंतहीन रूप से फैला हुआ है।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "망할... 끝이 없어. 대체 언제까지...",
						"english": "Damn it... There's no end. How much longer...",
						"japanese": "くそっ…終わりがない。一体いつまで…",
						"chinese": "该死……没完没了。到底还要多久……",
						"french": "Maudit... Ça n'en finit jamais. Jusqu'à quand...",
						"spanish": "Maldita sea... No tiene fin. ¿Hasta cuándo...?",
						"vietnamese": "Chết tiệt... Không có hồi kết. Rốt cuộc là đến bao giờ...",
						"thai": "บ้าเอ๊ย... ไม่มีที่สิ้นสุด แล้วเมื่อไหร่จะจบเนี่ย...",
						"hindi": "धिक्कार है... इसका कोई अंत नहीं। आखिर कब तक..."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"spot": [
						5,
						3
					],
					"action": "enter",
					"speaker": "inka",
					"type": "direction"
				},
				{
					"speaker": "inka",
					"type": "speech",
					"content": {
						"korean": "미안해요... 내가... 내가 잘못 봤어...",
						"english": "I'm sorry... I... I saw it wrong...",
						"japanese": "ごめんなさい…私が…私が見間違えたのね…",
						"chinese": "对不起……我……我搞错了……",
						"french": "Je suis désolé... J'ai... je me suis trompé...",
						"spanish": "Lo siento... Yo... me equivoqué...",
						"vietnamese": "Tôi xin lỗi... Tôi... tôi đã nhìn nhầm...",
						"thai": "ขอโทษนะ... ฉัน... ฉันเข้าใจผิดไปเอง...",
						"hindi": "मुझे माफ़ करना... मैंने... मैंने गलत देखा..."
					},
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "얼음 심연은 또 다른 환영을 준비하고 있었다. 분노는 더욱 깊어졌다.",
						"english": "The icy abyss was preparing yet another illusion. The fury deepened.",
						"japanese": "氷の深淵はまた別の幻影を準備していた。怒りはさらに深まった。",
						"chinese": "冰冷的深渊正准备着另一个幻象。怒火更加炽烈了。",
						"french": "L'abîme glacial préparait une autre illusion. La colère s'intensifia.",
						"spanish": "El abismo helado preparaba otra ilusión. La furia se profundizó.",
						"vietnamese": "Vực sâu băng giá lại đang chuẩn bị một ảo ảnh khác. Cơn thịnh nộ càng thêm sâu sắc.",
						"thai": "ห้วงเหวเยือกแข็งกำลังเตรียมภาพลวงตาอีกชุดหนึ่ง ความโกรธแค้นยิ่งทวีคูณ",
						"hindi": "बर्फीला रसातल एक और भ्रम तैयार कर रहा था। क्रोध और गहरा गया।"
					},
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "길을 잃은 자들에게 희망은 독이다.",
						"english": "Hope is poison to the lost.",
						"japanese": "道に迷った者にとって、希望は毒だ。",
						"chinese": "对迷失者而言，希望是毒药。",
						"french": "L'espoir est un poison pour ceux qui sont perdus.",
						"spanish": "La esperanza es veneno para los perdidos.",
						"vietnamese": "Hy vọng là chất độc đối với những kẻ lạc lối.",
						"thai": "ความหวังคือยาพิษสำหรับผู้หลงทาง",
						"hindi": "भटके हुए लोगों के लिए आशा ज़हर है।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아직... 끝나지 않았어. 이 고통... 끝낼 때까지.",
						"english": "It's not over yet... Not until this suffering ends.",
						"japanese": "まだ... 終わってない。この苦痛... 終わらせるまで。",
						"chinese": "还没... 结束。直到... 结束这份痛苦。",
						"french": "Ce n'est pas encore... fini. Pas avant d'en finir avec cette souffrance.",
						"spanish": "Todavía no... ha terminado. No hasta que este sufrimiento acabe.",
						"vietnamese": "Chưa... kết thúc đâu. Cho đến khi... chấm dứt nỗi đau này.",
						"thai": "ยัง... ไม่จบ. จนกว่า... ความทรมานนี้จะสิ้นสุดลง.",
						"hindi": "अभी... खत्म नहीं हुआ है। जब तक... यह दर्द खत्म नहीं होता।"
					}
				}
			],
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "inka",
					"spot": [
						5,
						3
					],
					"duration_ms": 500
				},
				{
					"speaker": "inka",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "여기가... 그 유물이 있는 곳이에요. 이제... 모든 길이 열릴 거예요.",
						"english": "This is... where the relic is. Now... all paths will open.",
						"japanese": "ここが…あの遺物がある場所です。もう…全ての道が開かれるでしょう。",
						"chinese": "这里就是……那个遗物所在的地方。现在……所有的路都会打开。",
						"french": "C'est ici... l'emplacement de la relique. Maintenant... toutes les voies s'ouvriront.",
						"spanish": "Aquí es... donde está la reliquia. Ahora... todos los caminos se abrirán.",
						"vietnamese": "Đây là... nơi có di vật. Giờ đây... mọi con đường sẽ mở ra.",
						"thai": "นี่คือ...ที่ที่วัตถุโบราณอยู่ ตอนนี้...ทุกเส้นทางจะเปิดออก",
						"hindi": "यह... वह जगह है जहाँ अवशेष है। अब... सभी रास्ते खुलेंगे।"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "인카의 환상이 산산조각 났다. 그 안에는… 절망이 있었다.",
						"english": "Inka's illusion shattered. Inside… was despair.",
						"japanese": "インカの幻想は打ち砕かれた。その中には…絶望があった。",
						"chinese": "因卡（Inka）的幻象破碎了。其中……尽是绝望。",
						"french": "L'illusion d'Inka s'est brisée. À l'intérieur… il n'y avait que désespoir.",
						"spanish": "La ilusión de Inka se hizo añicos. Dentro… solo había desesperación.",
						"vietnamese": "Ảo ảnh của Inka tan vỡ. Bên trong… là sự tuyệt vọng.",
						"thai": "ภาพลวงตาของอินคาแตกสลาย ภายในนั้น...คือความสิ้นหวัง",
						"hindi": "इंंका का भ्रम टूट गया। अंदर… निराशा थी।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "환영에 취한 가엾은 영혼들. 너희도 결국 나와 같은 길을 걷겠지.",
						"english": "Poor souls, drunk on illusion. You too will eventually walk the same path as I.",
						"japanese": "幻影に酔いしれた哀れな魂たちよ。お前たちも結局、私と同じ道を歩むだろう。",
						"chinese": "沉迷于幻象的可怜灵魂们。你们最终也会走上和我一样的道路。",
						"french": "Pauvres âmes, enivrées par l'illusion. Vous finirez aussi par suivre le même chemin que moi.",
						"spanish": "Pobres almas, ebrias de ilusión. Vosotros también acabaréis siguiendo el mismo camino que yo.",
						"vietnamese": "Những linh hồn đáng thương say mê ảo ảnh. Cuối cùng các ngươi cũng sẽ đi trên con đường giống ta thôi.",
						"thai": "วิญญาณผู้น่าสงสารที่มัวเมาในภาพลวงตา พวกเจ้าก็จะเดินตามทางเดียวกับข้าในที่สุด",
						"hindi": "भ्रम में डूबी बेचारी आत्माएँ। तुम भी अंततः मेरे ही रास्ते पर चलोगे।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "인카, 이게 무슨... 우리를 속인 거야?!",
						"english": "Inka, what is this... Did you trick us?!",
						"japanese": "インカ、これは一体…私たちを騙したのか？！",
						"chinese": "因卡（Inka），这到底是怎么回事……你欺骗了我们？！",
						"french": "Inka, qu'est-ce que... Tu nous as trompés ?!",
						"spanish": "Inka, ¿qué es esto...? ¡¿Nos engañaste?!",
						"vietnamese": "Inka, cái này là... Cô đã lừa chúng tôi sao?!",
						"thai": "อินคา นี่มันอะไรกัน... เธอหลอกเราเหรอ?!",
						"hindi": "इंंका, यह क्या है... क्या तुमने हमें धोखा दिया?!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "inka",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "아니야... 이럴 리 없어. 유물은... 희망을 줄 텐데...",
						"english": "No... This can't be. The relic... it should give us hope...",
						"japanese": "違う…こんなはずはない。遺物は…希望を与えてくれるはずなのに…",
						"chinese": "不……这不可能。遗物……它应该带来希望才对……",
						"french": "Non... Ce n'est pas possible. La relique... elle devrait donner de l'espoir...",
						"spanish": "No... Esto no puede ser. La reliquia... debería darnos esperanza...",
						"vietnamese": "Không... Không thể nào. Di vật... nó phải mang lại hy vọng chứ...",
						"thai": "ไม่จริง... ไม่น่าเป็นไปได้ วัตถุโบราณ...มันควรจะให้ความหวัง...",
						"hindi": "नहीं... ऐसा नहीं हो सकता। अवशेष... उसे आशा देनी चाहिए थी..."
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"얼음 심연, 그 끝없는 미로에 발을 들였다.",
			"희망을 노래하는 인카, 그녀는 잃어버린 유물을 찾는다 했다.",
			"따뜻한 안식처는 속삭였다, 차가운 환영 속에서.",
			"모든 길은 절망으로 이끌 뿐이었다.",
			"분노만이 남은 곳, 얼음은 기억을 삼킨다."
		],
		"english": [
			"Stepped into the Ice Abyss, an endless maze.",
			"Inka, who sings of hope, said she sought a lost relic.",
			"The warm sanctuary whispered within the cold illusion.",
			"All paths led only to despair.",
			"Where only fury remained, ice swallowed memories."
		],
		"japanese": [
			"氷の深淵、その終わりなき迷宮に足を踏み入れた。",
			"希望を歌うインカ、彼女は失われた遺物を探していると言った。",
			"温かい安息所は、冷たい幻影の中で囁いた。",
			"すべての道は絶望へと続くだけだった。",
			"怒りだけが残る場所で、氷は記憶を飲み込む。"
		],
		"chinese": [
			"踏入了冰之深渊，那无尽的迷宫。",
			"歌颂希望的因卡说，她在寻找一件失落的遗物。",
			"温暖的庇护所，在冰冷的幻影中低语。",
			"所有的路都只通向绝望。",
			"只剩下愤怒的地方，冰吞噬了记忆。"
		],
		"french": [
			"J'ai pénétré dans l'Abysse de Glace, ce labyrinthe sans fin.",
			"Inka, qui chante l'espoir, disait chercher une relique perdue.",
			"Le sanctuaire chaleureux murmura au sein de l'illusion froide.",
			"Tous les chemins ne menaient qu'au désespoir.",
			"Là où seule la fureur demeurait, la glace engloutissait les souvenirs."
		],
		"spanish": [
			"Entré en el Abismo de Hielo, ese laberinto sin fin.",
			"Inka, quien canta la esperanza, dijo que buscaba una reliquia perdida.",
			"El cálido santuario susurró en la fría ilusión.",
			"Todos los caminos solo conducían a la desesperación.",
			"Donde solo quedaba la furia, el hielo se tragó los recuerdos."
		],
		"vietnamese": [
			"Bước vào Vực Sâu Băng Giá, mê cung bất tận đó.",
			"Inka, người ca ngợi hy vọng, nói rằng cô ấy đang tìm một di vật bị mất.",
			"Nơi trú ẩn ấm áp thì thầm trong ảo ảnh lạnh lẽo.",
			"Mọi con đường chỉ dẫn đến tuyệt vọng.",
			"Nơi chỉ còn lại sự phẫn nộ, băng giá nuốt chửng ký ức."
		],
		"thai": [
			"ก้าวเข้าสู่ห้วงน้ำแข็ง อรันต์อันไร้ที่สิ้นสุด",
			"อินคา ผู้ขับขานความหวัง กล่าวว่าเธอกำลังตามหาสิ่งประดิษฐ์ที่หายไป",
			"ที่พักพิงอันอบอุ่นกระซิบแผ่วเบาในภาพลวงตาอันหนาวเย็น",
			"ทุกเส้นทางล้วนนำไปสู่ความสิ้นหวังเท่านั้น",
			"ที่ซึ่งเหลือเพียงความโกรธเกรี้ยว น้ำแข็งกลืนกินความทรงจำ"
		],
		"hindi": [
			"बर्फीले पाताल में कदम रखा, उस अंतहीन भूलभुलैया में。",
			"आशा का गान करने वाली इंका ने कहा कि वह एक खोई हुई अवशेष खोज रही है।",
			"गर्म आश्रय ने ठंडे भ्रम के भीतर फुसफुसाया।",
			"सभी रास्ते केवल निराशा की ओर ले गए।",
			"जहाँ केवल क्रोध बचा था, बर्फ ने यादों को निगल लिया।"
		]
	}
} as const;
