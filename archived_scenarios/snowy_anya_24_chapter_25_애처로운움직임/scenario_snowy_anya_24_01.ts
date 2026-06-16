export const scenario_snowy_anya_24_01 = {
	"scenario_id": "snowy_anya_24_01",
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "눈보라가 한층 거세진 골짜기. 빛은 여전히 길을 비추고 있었다.",
						"english": "The blizzard-swept valley intensified. The light still illuminated the path.",
						"japanese": "吹雪がさらに激しくなった谷。光は依然として道を照らしていた。",
						"chinese": "暴雪加剧的山谷。光芒依然照亮着道路。",
						"french": "La vallée balayée par le blizzard s'intensifiait. La lumière éclairait toujours le chemin.",
						"spanish": "El valle azotado por la tormenta se intensificaba. La luz seguía iluminando el camino.",
						"vietnamese": "Thung lũng bão tuyết ngày càng dữ dội. Ánh sáng vẫn soi đường.",
						"thai": "หุบเขาที่พายุหิมะโหมกระหน่ำรุนแรงขึ้น แสงยังคงส่องสว่างเส้นทาง",
						"hindi": "बर्फीले तूफान से घिरी घाटी और तेज हो गई। प्रकाश अभी भी रास्ता रोशन कर रहा था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "빛이… 평소와 달라. 멈칫거리는 것 같아.",
						"english": "The light... it's different than usual. It seems to hesitate.",
						"japanese": "光が…いつもと違う。ためらっているようだ。",
						"chinese": "光芒……和平时不一样。它似乎在犹豫。",
						"french": "La lumière... elle est différente d'habitude. Elle semble hésiter.",
						"spanish": "La luz... es diferente de lo habitual. Parece dudar.",
						"vietnamese": "Ánh sáng... khác thường. Có vẻ như nó đang do dự.",
						"thai": "แสง... มันไม่เหมือนปกติ ดูเหมือนจะลังเล",
						"hindi": "प्रकाश... यह सामान्य से अलग है। यह हिचकिचा रहा है।"
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "eira",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "기록에 없는 움직임이야. 뒤를… 돌아보고 있어.",
						"english": "An unrecorded movement. It's... looking back.",
						"japanese": "記録にない動きだ。後ろを…振り返っている。",
						"chinese": "这是记录中没有的举动。它在……回望。",
						"french": "Un mouvement inédit. Il... regarde en arrière.",
						"spanish": "Un movimiento no registrado. Está... mirando hacia atrás.",
						"vietnamese": "Một chuyển động chưa từng được ghi nhận. Nó đang... nhìn lại.",
						"thai": "การเคลื่อนไหวที่ไม่เคยบันทึกไว้ มันกำลัง... หันกลับไปมอง",
						"hindi": "यह एक अनियंत्रित हरकत है। यह... पीछे मुड़कर देख रहा है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "뒤를? 뭘 돌아본다는 거지?",
						"english": "Back? What is it looking back at?",
						"japanese": "後ろを？何を振り返っているんだ？",
						"chinese": "后面？它在回望什么？",
						"french": "En arrière ? Qu'est-ce qu'elle regarde en arrière ?",
						"spanish": "¿Atrás? ¿Qué está mirando hacia atrás?",
						"vietnamese": "Phía sau? Nó đang nhìn lại cái gì?",
						"thai": "ข้างหลัง? มันกำลังมองอะไรกลับไป?",
						"hindi": "पीछे? यह क्या देख रहा है?"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "eira",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 550
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "빛은 그저 인도하는 줄 알았어. 흔들림 하나 없이.",
						"english": "I thought the light simply guided us. Without a single waver.",
						"japanese": "光はただ導くものだと思っていた。微塵も揺らぐことなく。",
						"chinese": "我以为光只是指引，毫不动摇。",
						"french": "Je pensais que la lumière nous guidait simplement. Sans la moindre hésitation.",
						"spanish": "Pensé que la luz simplemente nos guiaba. Sin una sola vacilación.",
						"vietnamese": "Tôi cứ nghĩ ánh sáng chỉ đơn thuần dẫn lối. Không hề dao động.",
						"thai": "ฉันคิดว่าแสงเป็นเพียงผู้นำทางเท่านั้น โดยไม่มีการสั่นไหวแม้แต่น้อย",
						"hindi": "मुझे लगा कि प्रकाश बस हमें रास्ता दिखाता है। बिना किसी हिचकिचाहट के।"
					},
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "하지만 지금은… 망설이고 있어. 마치 길을 잃은 자처럼.",
						"english": "But now... it hesitates. Like one who has lost their way.",
						"japanese": "しかし今は… 躊躇っている。まるで道に迷った者のように。",
						"chinese": "但现在… 它在犹豫。就像迷失方向的人一样。",
						"french": "Mais maintenant... il hésite. Comme quelqu'un qui a perdu son chemin.",
						"spanish": "Pero ahora... duda. Como quien ha perdido el rumbo.",
						"vietnamese": "Nhưng giờ đây... nó đang do dự. Như kẻ lạc lối.",
						"thai": "แต่ตอนนี้... มันลังเล เหมือนคนที่หลงทาง",
						"hindi": "पर अब... वो हिचक रहा है। जैसे कोई राह भटका हुआ।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "빛이 길을 잃는다고?",
						"english": "Light losing its way?",
						"japanese": "光が道を失う、だと？",
						"chinese": "光会迷路？",
						"french": "La lumière perd son chemin ?",
						"spanish": "¿La luz se pierde?",
						"vietnamese": "Ánh sáng lạc lối ư?",
						"thai": "แสงจะหลงทางเหรอ?",
						"hindi": "प्रकाश रास्ता भटकता है?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "아니. 두고 온 것을 찾는 듯한 움직임이야.",
						"english": "No. It moves as if searching for something left behind.",
						"japanese": "いや。何か置き去りにしたものを探しているような動きだ。",
						"chinese": "不。它的动作，像是在寻找遗落之物。",
						"french": "Non. Il bouge comme s'il cherchait quelque chose qu'il a laissé derrière lui.",
						"spanish": "No. Se mueve como si buscara algo olvidado.",
						"vietnamese": "Không. Nó di chuyển như đang tìm kiếm thứ gì đó đã bỏ lại.",
						"thai": "ไม่ มันเคลื่อนไหวราวกับกำลังตามหาสิ่งที่ทิ้งไว้เบื้องหลัง",
						"hindi": "नहीं। ये ऐसे घूम रहा है जैसे कुछ भूला हुआ ढूंढ रहा हो।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 450,
					"speaker": "eira",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "이 움직임… 잊힌 룬 문자에서 본 적이 있어.",
						"english": "This movement... I've seen it in forgotten runes.",
						"japanese": "この動き… 忘れ去られたルーン文字で見たことがある。",
						"chinese": "这个动作… 我在被遗忘的符文中见过。",
						"french": "Ce mouvement... je l'ai vu dans des runes oubliées.",
						"spanish": "Este movimiento... lo he visto en runas olvidadas.",
						"vietnamese": "Chuyển động này... ta đã thấy nó trong các chữ rune bị lãng quên.",
						"thai": "การเคลื่อนไหวนี้... ฉันเคยเห็นมันในอักษรรูนที่ถูกลืม",
						"hindi": "ये हरकत... मैंने इसे भूली हुई रुन्स में देखा है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "잊힌 룬? 그게 뭔데?",
						"english": "Forgotten runes? What are those?",
						"japanese": "忘れ去られたルーン？それは何だ？",
						"chinese": "被遗忘的符文？那是什么？",
						"french": "Des runes oubliées ? Qu'est-ce que c'est ?",
						"spanish": "¿Runas olvidadas? ¿Qué son?",
						"vietnamese": "Chữ rune bị lãng quên? Đó là gì?",
						"thai": "อักษรรูนที่ถูกลืม? มันคืออะไร?",
						"hindi": "भूली हुई रुन्स? वो क्या हैं?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "'되찾으려는 자의 춤'… 그렇게 불렸어.",
						"english": "'The Dance of the One Who Seeks to Reclaim'... that's what it was called.",
						"japanese": "「取り戻そうとする者の舞」…そう呼ばれていた。",
						"chinese": "‘寻回者的舞蹈’……它是这么被称呼的。",
						"french": "'La danse de celui qui cherche à récupérer'... c'est ainsi qu'elle était nommée.",
						"spanish": "'La Danza de Quien Busca Recuperar'... así se llamaba.",
						"vietnamese": "'Điệu nhảy của kẻ muốn đòi lại'... nó được gọi như vậy.",
						"thai": "'ระบำของผู้ที่พยายามทวงคืน'... มันถูกเรียกเช่นนั้น",
						"hindi": "‘लौटाने वाले का नृत्य’... ऐसा ही उसे पुकारा जाता था।"
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "춤? 지금 이걸 춤이라고 하는 거야?",
						"english": "Dance? You're calling this a dance?",
						"japanese": "舞？今これを舞だと言うのか？",
						"chinese": "舞？你管这个叫舞？",
						"french": "Une danse ? Tu appelles ça une danse ?",
						"spanish": "¿Danza? ¿Estás llamando a esto una danza?",
						"vietnamese": "Điệu nhảy? Ngươi gọi đây là điệu nhảy sao?",
						"thai": "ระบำ? นี่คุณเรียกว่าระบำเหรอ?",
						"hindi": "नृत्य? तुम इसे नृत्य कह रहे हो?"
					}
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "뜻은… 아직 확실하지 않아. 하지만 단순한 인도는 아니야.",
						"english": "Its meaning... isn't clear yet. But it's no mere guidance.",
						"japanese": "意味は…まだはっきりしない。だが、単なる導きではない。",
						"chinese": "它的意思… 还不确定。但绝非简单的指引。",
						"french": "Son sens... n'est pas encore clair. Mais ce n'est pas un simple guide.",
						"spanish": "Su significado... aún no está claro. Pero no es una simple guía.",
						"vietnamese": "Ý nghĩa của nó... vẫn chưa rõ ràng. Nhưng đây không phải là sự chỉ dẫn đơn thuần.",
						"thai": "ความหมายของมัน... ยังไม่ชัดเจน แต่ไม่ใช่แค่การนำทางธรรมดา",
						"hindi": "इसका अर्थ... अभी साफ नहीं है। पर ये सिर्फ एक मार्गदर्शन नहीं है।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "빛의 흔들림이 더욱 거칠어졌다. 차가운 한기가 온몸을 감쌌다.",
						"english": "The light's flicker grew wilder. A cold chill enveloped my body.",
						"japanese": "光の揺らぎがさらに荒々しくなった。冷たい寒気が全身を包み込んだ。",
						"chinese": "光的颤动更加剧烈。一股寒意笼罩全身。",
						"french": "Le scintillement de la lumière devint plus violent. Un froid glacial enveloppa tout mon corps.",
						"spanish": "El temblor de la luz se hizo más salvaje. Un frío gélido me envolvió por completo.",
						"vietnamese": "Ánh sáng chập chờn càng dữ dội hơn. Một luồng khí lạnh bao trùm toàn thân.",
						"thai": "การสั่นไหวของแสงรุนแรงขึ้น ความหนาวเย็นเข้าปกคลุมร่างกาย",
						"hindi": "प्रकाश का कंपन और तेज़ हो गया। एक ठंडी सिहरन पूरे शरीर में फैल गई।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"spot": [
						2,
						4
					],
					"speaker": "eira",
					"type": "direction",
					"action": "enter",
					"duration_ms": 600
				},
				{
					"content": {
						"korean": "빛이… 두려워하는 건가?",
						"english": "Is the light... afraid?",
						"japanese": "光が…恐れているのか？",
						"chinese": "光… 感到恐惧？",
						"french": "La lumière... a-t-elle peur ?",
						"spanish": "¿La luz... tiene miedo?",
						"vietnamese": "Ánh sáng... đang sợ hãi sao?",
						"thai": "แสง... กำลังกลัวเหรอ?",
						"hindi": "प्रकाश... डर रहा है?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "두려워한다고? 우리가 따라가는 희망의 빛이?",
						"english": "Afraid? The light of hope we follow?",
						"japanese": "恐れているのか？ 我々が追う希望の光が？",
						"chinese": "害怕？我们所追随的希望之光？",
						"french": "Peur ? La lumière d'espoir que nous suivons ?",
						"spanish": "¿Miedo? ¿La luz de esperanza que seguimos?",
						"vietnamese": "Sợ hãi ư? Ánh sáng hy vọng chúng ta đang theo đuổi?",
						"thai": "หวาดกลัวหรือ? แสงแห่งความหวังที่เราติดตาม?",
						"hindi": "डर रहे हो? वह आशा की किरण जिसे हम अनुसरण कर रहे हैं?"
					}
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이곳을… 벗어나지 못하게 하려는 듯해.",
						"english": "It feels like... it wants to stop us from leaving this place.",
						"japanese": "ここから… 抜け出せないようにしようとしているようだ。",
						"chinese": "感觉… 它想阻止我们离开这里。",
						"french": "On dirait... qu'il veut nous empêcher de quitter cet endroit.",
						"spanish": "Parece que... quiere impedirnos salir de aquí.",
						"vietnamese": "Có vẻ như... nó muốn ngăn chúng ta rời khỏi nơi này.",
						"thai": "ดูเหมือนว่า... มันต้องการหยุดเราไม่ให้ออกจากที่นี่",
						"hindi": "लगता है... यह हमें इस जगह से बाहर निकलने से रोकना चाहता है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "무슨 수를 써도 우린 계속 간다.",
						"english": "No matter what, we keep going.",
						"japanese": "どんな手を使っても、我々は進み続ける。",
						"chinese": "无论如何，我们都会继续前进。",
						"french": "Quoi qu'il arrive, nous continuons.",
						"spanish": "Hagamos lo que hagamos, seguiremos adelante.",
						"vietnamese": "Bất kể thế nào, chúng ta vẫn sẽ tiếp tục.",
						"thai": "ไม่ว่าจะเกิดอะไรขึ้น เราก็ยังคงเดินหน้าต่อไป",
						"hindi": "कुछ भी हो, हम चलते रहेंगे।"
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 자들… 이곳에서 영원히 얼어붙어라.",
						"english": "Insignificant beings... Freeze here eternally.",
						"japanese": "取るに足らぬ者たち… ここで永遠に凍てつけ。",
						"chinese": "渺小的存在… 在此地永远冻结吧。",
						"french": "Êtres insignifiants... Gèlent ici pour l'éternité.",
						"spanish": "Seres insignificantes... Congelaos aquí para siempre.",
						"vietnamese": "Những kẻ hèn mọn... Hãy đóng băng vĩnh viễn tại đây.",
						"thai": "พวกไร้ค่า... จงแข็งตายอยู่ที่นี่ตลอดไปเถอะ",
						"hindi": "तुच्छ प्राणी... यहीं हमेशा के लिए जम जाओ।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…아직 끝나지 않았어. 포기할 순 없어.",
						"english": "...It's not over yet. I can't give up.",
						"japanese": "…まだ終わってない。諦めるわけにはいかない。",
						"chinese": "…还没结束。我不能放弃。",
						"french": "...Ce n'est pas encore fini. Je ne peux pas abandonner.",
						"spanish": "...Aún no ha terminado. No puedo rendirme.",
						"vietnamese": "...Vẫn chưa kết thúc. Tôi không thể từ bỏ.",
						"thai": "...ยังไม่จบ ฉันยอมแพ้ไม่ได้",
						"hindi": "...अभी खत्म नहीं हुआ है। मैं हार नहीं मान सकता।"
					}
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 빛을 삼켰다. 차가운 기운이 골짜기를 뒤덮었다.",
						"english": "A giant shadow swallowed the light. A cold aura engulfed the valley.",
						"japanese": "巨大な影が光を飲み込んだ。冷たい気が谷を覆った。",
						"chinese": "巨大的阴影吞噬了光芒。寒冷的气息笼罩了山谷。",
						"french": "Une ombre géante a englouti la lumière. Une aura froide a enveloppé la vallée.",
						"spanish": "Una sombra gigante se tragó la luz. Un aura fría envolvió el valle.",
						"vietnamese": "Một bóng tối khổng lồ nuốt chửng ánh sáng. Khí lạnh bao trùm thung lũng.",
						"thai": "เงามหึมากลืนกินแสงสว่าง พลังงานอันเยือกเย็นปกคลุมหุบเขา",
						"hindi": "एक विशाल छाया ने प्रकाश को निगल लिया। एक ठंडी आभा ने घाटी को घेर लिया।"
					}
				},
				{
					"content": {
						"korean": "길을 잃은 자들이여. 이곳에서 멈춰라.",
						"english": "Lost souls. Stop here.",
						"japanese": "道に迷いし者たちよ。ここで止まれ。",
						"chinese": "迷失的灵魂们。止步于此。",
						"french": "Âmes perdues. Arrêtez-vous ici.",
						"spanish": "Almas perdidas. Deteneos aquí.",
						"vietnamese": "Những linh hồn lạc lối. Dừng lại ở đây.",
						"thai": "ผู้หลงทางเอ๋ย จงหยุดอยู่แค่นี้",
						"hindi": "भटकी हुई आत्माओं। यहीं रुक जाओ।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "네가 빛을 막는 거야?",
						"english": "Are you blocking the light?",
						"japanese": "お前が光を遮っているのか？",
						"chinese": "是你阻挡了光芒吗？",
						"french": "C'est toi qui bloques la lumière ?",
						"spanish": "¿Eres tú quien bloquea la luz?",
						"vietnamese": "Ngươi đang cản ánh sáng ư?",
						"thai": "เจ้ากำลังขวางแสงสว่างอยู่หรือ?",
						"hindi": "क्या तुम प्रकाश को रोक रहे हो?"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "진실은… 너희가 감당할 수 없다. 돌아가라.",
						"english": "The truth... you cannot bear it. Go back.",
						"japanese": "真実は… お前たちには耐えられない。戻れ。",
						"chinese": "真相… 你们无法承受。回去吧。",
						"french": "La vérité... vous ne pouvez pas la supporter. Retournez.",
						"spanish": "La verdad... no podéis soportarla. Volved.",
						"vietnamese": "Sự thật... các ngươi không thể chịu đựng được. Hãy quay về.",
						"thai": "ความจริง... พวกเจ้าทนไม่ได้หรอก กลับไปซะ",
						"hindi": "सच... तुम इसे बर्दाश्त नहीं कर सकते। वापस जाओ।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "결국… 여기까지 오는구나. 하지만… 빛은… 널 원하지 않아.",
						"english": "So... you've made it this far. But... the light... it doesn't want you.",
						"japanese": "結局… ここまで来たか。だが… 光は… お前を望んでいない。",
						"chinese": "最终… 你还是走到这里了。但是… 光芒… 并不想要你。",
						"french": "Alors... tu es arrivé jusqu'ici. Mais... la lumière... ne te veut pas.",
						"spanish": "Así que... has llegado hasta aquí. Pero... la luz... no te quiere.",
						"vietnamese": "Cuối cùng... ngươi cũng đến được đây. Nhưng... ánh sáng... không muốn ngươi.",
						"thai": "ในที่สุด... เจ้าก็มาถึงที่นี่ แต่... แสงสว่าง... ไม่ต้องการเจ้าหรอก",
						"hindi": "तो... तुम यहाँ तक पहुँच गए। लेकिन... प्रकाश... तुम्हें नहीं चाहता।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "무슨 소리야? 저 빛이 우리를 이끌어줬어.",
						"english": "What are you talking about? That light led us here.",
						"japanese": "何を言っている？ あの光が我々を導いてくれたんだ。",
						"chinese": "你在说什么？那道光指引我们来到这里。",
						"french": "De quoi parles-tu ? Cette lumière nous a guidés.",
						"spanish": "¿De qué hablas? Esa luz nos guio.",
						"vietnamese": "Ngươi đang nói gì vậy? Ánh sáng đó đã dẫn dắt chúng ta.",
						"thai": "เจ้ากำลังพูดอะไร? แสงนั้นนำทางพวกเรามาที่นี่",
						"hindi": "तुम क्या कह रहे हो? उस प्रकाश ने हमें यहाँ तक पहुँचाया।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "쓰러진 그림자 아래, 빛은 여전히 불안하게 떨렸다. 그 의미를 알 수 없었다.",
						"english": "Beneath the fallen shadow, the light still trembled uneasily. Its meaning remained unknown.",
						"japanese": "倒れた影の下、光は依然として不安げに揺らめいていた。その意味を知ることはできなかった。",
						"chinese": "在倒下的阴影下，光芒依然不安地颤抖着。其含义无人知晓。",
						"french": "Sous l'ombre tombée, la lumière tremblait encore, agitée. Sa signification restait inconnue.",
						"spanish": "Bajo la sombra caída, la luz seguía temblando con inquietud. Su significado era desconocido.",
						"vietnamese": "Bên dưới bóng tối đổ gục, ánh sáng vẫn còn run rẩy bất an. Ý nghĩa của nó vẫn chưa được biết.",
						"thai": "ภายใต้เงาที่ล้มลง แสงสว่างยังคงสั่นไหวอย่างไม่มั่นคง ไม่สามารถเข้าใจความหมายได้",
						"hindi": "गिरी हुई छाया के नीचे, प्रकाश अभी भी बेचैनी से काँप रहा था। उसका अर्थ अज्ञात रहा।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"눈보라 골짜기, 바람이 칼날처럼 휘몰아쳤다.",
			"익숙했던 빛은 여전히 길을 비췄지만, 어딘가 불안하게 흔들렸다.",
			"망설이는 듯, 뒤를 돌아보는 듯.",
			"에이라는 그 미세한 변화를 놓치지 않았다.",
			"단순한 인도가 아니었다."
		],
		"english": [
			"Blizzard Valley. Winds howled like blades.",
			"The familiar light still illuminated the path, yet wavered with an unsettling unease.",
			"Hesitating, as if glancing back.",
			"Aira didn't miss that subtle change.",
			"It wasn't merely guidance."
		],
		"japanese": [
			"吹雪の谷、風が刃のように吹き荒れた。",
			"見慣れた光は依然として道を照らしていたが、どこか不安げに揺らいでいた。",
			"ためらっているように、あるいは後ろを振り返っているように。",
			"アイラはその微細な変化を見逃さなかった。",
			"それは単なる導きではなかった。"
		],
		"chinese": [
			"暴雪山谷，风如刀般呼啸。",
			"熟悉的光芒依然照亮着道路，却在不安中摇曳。",
			"仿佛在犹豫，又仿佛在回望。",
			"艾拉没有错过那微小的变化。",
			"那不仅仅是引导。"
		],
		"french": [
			"Vallée de la Tempête, le vent hurlait comme des lames.",
			"La lumière familière éclairait toujours le chemin, mais vacillait étrangement.",
			"Hésitant, comme si elle regardait en arrière.",
			"Aira ne manqua pas ce subtil changement.",
			"Ce n'était pas un simple guide."
		],
		"spanish": [
			"Valle de la Tormenta, el viento aullaba como cuchillas.",
			"La luz familiar seguía iluminando el camino, pero vacilaba con una inquietud.",
			"Dudando, como si mirara hacia atrás.",
			"Aira no pasó por alto ese sutil cambio.",
			"No era una simple guía."
		],
		"vietnamese": [
			"Thung lũng Bão tuyết, gió rít như lưỡi dao.",
			"Ánh sáng quen thuộc vẫn soi đường, nhưng lay động một cách bất an.",
			"Do dự, như thể đang nhìn lại phía sau.",
			"Aira không bỏ lỡ sự thay đổi tinh tế đó.",
			"Đó không chỉ là sự dẫn lối đơn thuần."
		],
		"thai": [
			"หุบเขาพายุหิมะ ลมพัดแรงราวกับใบมีด",
			"แสงที่คุ้นเคยยังคงส่องสว่างเส้นทาง แต่สั่นไหวอย่างไม่สบายใจ",
			"ลังเล ราวกับหันกลับไปมอง",
			"ไอราไม่พลาดการเปลี่ยนแปลงเล็กน้อยนั้น",
			"มันไม่ใช่แค่การนำทางธรรมดา"
		],
		"hindi": [
			"बर्फ़ीले तूफ़ान की घाटी, हवाएँ चाकुओं सी चल रही थीं।",
			"परिचित प्रकाश अब भी रास्ता रोशन कर रहा था, पर कहीं-कहीं अनिश्चितता से झिलमिला रहा था।",
			"जैसे हिचकिचा रहा हो, जैसे पीछे मुड़कर देख रहा हो।",
			"ऐरा ने उस सूक्ष्म परिवर्तन को नहीं छोड़ा।",
			"यह महज़ एक मार्गदर्शन नहीं था।"
		]
	}
} as const;
