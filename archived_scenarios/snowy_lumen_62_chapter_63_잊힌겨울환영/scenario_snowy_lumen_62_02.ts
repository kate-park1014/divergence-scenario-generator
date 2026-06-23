export const scenario_snowy_lumen_62_02 = {
	"scenario_id": "snowy_lumen_62_02",
	"order": 2,
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
						"korean": "뼈를 깎는 추위 속, 잊힌 유적의 깊은 곳.",
						"english": "In the bone-chilling cold, deep within the forgotten ruins.",
						"japanese": "骨を削るような寒さの中、忘れ去られた遺跡の奥深く。",
						"chinese": "刺骨的寒冷中，被遗忘的遗迹深处。",
						"french": "Dans le froid glacial, au plus profond des ruines oubliées.",
						"spanish": "En el frío que cala los huesos, en lo profundo de las ruinas olvidadas.",
						"vietnamese": "Trong cái lạnh cắt da cắt thịt, sâu thẳm trong di tích bị lãng quên.",
						"thai": "ท่ามกลางความหนาวเย็นยะเยือก ลึกเข้าไปในซากปรักหักพังที่ถูกลืม",
						"hindi": "हड्डियों को जमा देने वाली ठंड में, भूले हुए खंडहरों की गहराई में।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이 한기… 단순한 추위가 아닌데?",
						"english": "This chill... it's not just simple cold, is it?",
						"japanese": "この冷気…ただの寒さではないのか？",
						"chinese": "这寒气…不只是普通的冷吧？",
						"french": "Ce frisson... ce n'est pas un simple froid, n'est-ce pas ?",
						"spanish": "Este escalofrío... no es solo frío, ¿verdad?",
						"vietnamese": "Cái lạnh này… không phải chỉ là lạnh thông thường sao?",
						"thai": "ความเย็นยะเยือกนี้...มันไม่ใช่แค่ความหนาวธรรมดาใช่ไหม?",
						"hindi": "यह ठंडक... यह सिर्फ़ सामान्य ठंड नहीं है, है ना?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "direction",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "여기 새겨진 룬 문자가… 계속 반복되는 단어를 말하고 있어.",
						"english": "The runic script carved here... speaks of a continuously repeating word.",
						"japanese": "ここに刻まれたルーン文字が…繰り返し現れる言葉を語っている。",
						"chinese": "这里刻着的符文…正在诉说着一个不断重复的词。",
						"french": "Les runes gravées ici... parlent d'un mot qui se répète sans cesse.",
						"spanish": "Las runas grabadas aquí... hablan de una palabra que se repite sin cesar.",
						"vietnamese": "Chữ rune khắc ở đây… đang nói về một từ lặp đi lặp lại.",
						"thai": "อักษรรูนที่แกะสลักไว้ที่นี่...กำลังพูดถึงคำที่ซ้ำกันเรื่อยๆ",
						"hindi": "यहाँ उत्कीर्ण रुनिक लिपि... लगातार दोहराए जाने वाले शब्द की बात कर रही है।"
					},
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "'잃어버린 온기'… 이 땅에서 무언가를 간절히 찾는 듯해.",
						"english": "'Lost warmth'... it seems to be desperately searching for something in this land.",
						"japanese": "「失われた温もり」…この地で何かを切実に探しているようだ。",
						"chinese": "“失去的温暖”…似乎在这片土地上急切地寻找着什么。",
						"french": "'Chaleur perdue'... il semble chercher désespérément quelque chose dans cette terre.",
						"spanish": "'Calor perdido'... parece buscar desesperadamente algo en esta tierra.",
						"vietnamese": "'Hơi ấm đã mất'… dường như đang tìm kiếm một thứ gì đó tha thiết ở vùng đất này.",
						"thai": "‘ความอบอุ่นที่หายไป’...ดูเหมือนว่ากำลังค้นหาบางสิ่งบางอย่างอย่างสิ้นหวังในดินแดนแห่งนี้",
						"hindi": "'खोई हुई गर्माहट'... लगता है इस भूमि में कुछ बेसब्री से खोज रहा है।"
					},
					"emotion": "sad",
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "환각에 시달린다는 소문이… 정말이었나?",
						"english": "The rumors of being plagued by hallucinations... were they true?",
						"japanese": "幻覚に苦しむという噂は…本当だったのか？",
						"chinese": "饱受幻觉困扰的传闻…是真的吗？",
						"french": "Les rumeurs d'être tourmenté par des hallucinations... étaient-elles vraies ?",
						"spanish": "Los rumores de estar plagado de alucinaciones... ¿eran ciertos?",
						"vietnamese": "Tin đồn về việc bị ảo giác hành hạ… liệu có phải là sự thật?",
						"thai": "ข่าวลือเรื่องการถูกทรมานด้วยภาพหลอน...เป็นเรื่องจริงหรือเปล่า?",
						"hindi": "मतिभ्रम से पीड़ित होने की अफवाहें... क्या वे सच थीं?"
					},
					"speaker": "character_1"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "희미한 횃불 빛 아래, 벽화 속 그림자들이 일렁였다.",
						"english": "Under the faint torchlight, shadows in the murals flickered.",
						"japanese": "薄暗い松明の光の下、壁画の中の影が揺らめいた。",
						"chinese": "在微弱的火把光芒下，壁画中的影子晃动着。",
						"french": "Sous la faible lumière des torches, les ombres des fresques vacillaient.",
						"spanish": "Bajo la tenue luz de la antorcha, las sombras en los murales parpadeaban.",
						"vietnamese": "Dưới ánh sáng mờ ảo của ngọn đuốc, những cái bóng trong bức bích họa chập chờn.",
						"thai": "ภายใต้แสงไฟที่ริบหรี่ เงาในภาพจิตรกรรมฝาผนังก็ไหวระริก",
						"hindi": "मंद मशाल की रोशनी में, भित्तिचित्रों की परछाइयाँ झिलमिला उठीं。"
					},
					"emotion": "base"
				},
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "이 벽화… 어제와 달라. 형체가… 움직여.",
						"english": "This mural... it's different from yesterday. The figures... they're moving.",
						"japanese": "この壁画…昨日と違う。形が…動いてる。",
						"chinese": "这壁画……和昨天不一样。形状……在动。",
						"french": "Cette fresque... elle est différente d'hier. Les formes... bougent.",
						"spanish": "Este mural... es diferente al de ayer. Las figuras... se mueven.",
						"vietnamese": "Bức bích họa này... khác hôm qua. Các hình thể... đang di chuyển.",
						"thai": "ภาพจิตรกรรมฝาผนังนี่... ไม่เหมือนเมื่อวาน รูปทรง... กำลังเคลื่อนไหว",
						"hindi": "यह भित्तिचित्र... कल से अलग है। आकृतियाँ... हिल रही हैं।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "에이라, 피곤해서 그래. 오래된 그림일 뿐이야.",
						"english": "Aira, you're just tired. It's just an old painting.",
						"japanese": "アイラ、疲れてるんだ。ただの古い絵だよ。",
						"chinese": "艾拉，你只是太累了。那只是一幅旧画。",
						"french": "Aira, tu es juste fatiguée. C'est juste une vieille peinture.",
						"spanish": "Aira, solo estás cansada. Es solo una pintura antigua.",
						"vietnamese": "Aira, em chỉ mệt thôi. Nó chỉ là một bức tranh cũ thôi.",
						"thai": "ไอรา เธอแค่เหนื่อย มันก็แค่ภาพวาดเก่าๆ",
						"hindi": "ऐरा, तुम बस थकी हुई हो। यह सिर्फ एक पुरानी पेंटिंग है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "아니! 저 그림 속에서… 비명 소리가 들려! 흐느끼는 소리도…",
						"english": "No! From inside that painting... I hear screams! And whimpering...",
						"japanese": "違う！あの絵の中から…悲鳴が聞こえる！すすり泣く声も…",
						"chinese": "不！那幅画里……我听到了尖叫声！还有呜咽声……",
						"french": "Non ! De ce tableau... j'entends des cris ! Et des gémissements...",
						"spanish": "¡No! ¡De ese cuadro... oigo gritos! Y lamentos...",
						"vietnamese": "Không! Từ trong bức tranh đó... tôi nghe thấy tiếng hét! Cả tiếng nức nở nữa...",
						"thai": "ไม่! จากในภาพนั้น... ฉันได้ยินเสียงกรีดร้อง! และเสียงสะอื้น...",
						"hindi": "नहीं! उस पेंटिंग के अंदर से... मुझे चीखें सुनाई दे रही हैं! और सिसकियाँ भी..."
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…헛것이 들리나 봐.",
						"english": "...I must be hearing things.",
						"japanese": "…幻聴が聞こえてるみたいだ。",
						"chinese": "……我大概是幻听了。",
						"french": "...J'entends des choses.",
						"spanish": "...Debo estar oyendo cosas.",
						"vietnamese": "...Chắc tôi nghe nhầm rồi.",
						"thai": "...คงจะหูฝาดไปเอง",
						"hindi": "शायद मुझे भ्रम हो रहा है।"
					},
					"type": "speech",
					"speaker": "character_2"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "갑작스런 한기, 그리고 시야를 흐리는 잔상.",
						"english": "A sudden chill, and afterimages blurring my vision.",
						"japanese": "突然の悪寒、そして視界をぼやけさせる残像。",
						"chinese": "突如其来的寒意，以及模糊视线的残像。",
						"french": "Un froid soudain, et des rémanences brouillant ma vision.",
						"spanish": "Un frío repentino y posimágenes que nublan mi visión.",
						"vietnamese": "Một cơn ớn lạnh bất chợt, và những hình ảnh lưu mờ ảo.",
						"thai": "ความหนาวเย็นฉับพลัน และภาพติดตาที่พร่ามัว",
						"hindi": "अचानक ठंडक, और आँखों को धुंधला करने वाली परछाइयाँ।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "젠장, 또야. 어린아이의 장난감 같은 게… 스쳐 지나갔어.",
						"english": "Damn it, again. Something like a child's toy... just flashed past.",
						"japanese": "ちくしょう、またか。子供のおもちゃみたいなものが…通り過ぎた。",
						"chinese": "该死，又来了。像小孩子的玩具一样的东西……一闪而过。",
						"french": "Mince, encore. Quelque chose comme un jouet d'enfant... vient de passer.",
						"spanish": "Maldita sea, otra vez. Algo como un juguete de niño... pasó de largo.",
						"vietnamese": "Chết tiệt, lại nữa rồi. Một thứ gì đó như đồ chơi trẻ con... vừa vụt qua.",
						"thai": "แย่แล้ว อีกแล้วเหรอ ของเล่นเด็กอะไรบางอย่าง... ผ่านไปเมื่อกี้",
						"hindi": "लानत है, फिर से। बच्चों के खिलौने जैसा कुछ... अभी-अभी गुजरा।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "나도 봤어… 작은 옷 조각… 환각이 아냐.",
						"english": "I saw it too... a small piece of clothing... It's not a hallucination.",
						"japanese": "私も見た…小さな服の切れ端…幻覚じゃない。",
						"chinese": "我也看到了……一小块衣服……不是幻觉。",
						"french": "Je l'ai vu aussi... un petit morceau de tissu... Ce n'est pas une hallucination.",
						"spanish": "Yo también lo vi... un pequeño trozo de ropa... No es una alucinación.",
						"vietnamese": "Tôi cũng thấy rồi... một mảnh quần áo nhỏ... Không phải ảo giác.",
						"thai": "ฉันก็เห็นเหมือนกัน... เสื้อผ้าชิ้นเล็กๆ... ไม่ใช่ภาพหลอน",
						"hindi": "मैंने भी देखा... कपड़े का एक छोटा टुकड़ा... यह कोई मतिभ्रम नहीं है।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "eira",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "유적이… 우리를 가지고 놀고 있어. 보고 싶어 하지 않는 걸 보여주는 거야.",
						"english": "The ruins... are playing with us. Showing us what we don't want to see.",
						"japanese": "遺跡が…私たちを弄んでる。見たくないものを見せつけてくるんだ。",
						"chinese": "遗迹……正在玩弄我们。它在展示我们不想看到的东西。",
						"french": "Les ruines... se jouent de nous. Elles nous montrent ce que nous ne voulons pas voir.",
						"spanish": "Las ruinas... están jugando con nosotros. Nos muestran lo que no queremos ver.",
						"vietnamese": "Di tích... đang đùa giỡn với chúng ta. Cho chúng ta thấy những gì chúng ta không muốn thấy.",
						"thai": "ซากปรักหักพัง... กำลังเล่นตลกกับเรา กำลังแสดงให้เราเห็นสิ่งที่เราไม่อยากเห็น",
						"hindi": "खंडहर... हमारे साथ खेल रहे हैं। हमें वह दिखा रहे हैं जो हम देखना नहीं चाहते।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "점점 더 심해지고 있어… 정신이 혼미해.",
						"english": "It's getting worse... my mind is getting hazy.",
						"japanese": "だんだんひどくなってる…意識が朦朧としてくる。",
						"chinese": "越来越严重了……精神恍惚。",
						"french": "Ça empire... mon esprit devient confus.",
						"spanish": "Cada vez es peor... mi mente se está nublando.",
						"vietnamese": "Càng ngày càng tệ hơn... tinh thần tôi đang hỗn loạn.",
						"thai": "มันแย่ลงเรื่อยๆ... สติเริ่มเลือนลาง",
						"hindi": "यह और बदतर होता जा रहा है... मेरा दिमाग भ्रमित हो रहा है।"
					},
					"type": "speech",
					"speaker": "character_3"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "유적의 심장부로 향하는 길. 차가운 바람이 더욱 거세졌다.",
						"english": "The path to the heart of the ruins. The cold wind grew fiercer.",
						"japanese": "遺跡の心臓部へ向かう道。冷たい風がさらに激しくなった。",
						"chinese": "通往遗迹核心的道路。寒风愈发猛烈。",
						"french": "Le chemin vers le cœur des ruines. Le vent froid devint plus féroce.",
						"spanish": "El camino hacia el corazón de las ruinas. El viento frío se hizo más fuerte.",
						"vietnamese": "Con đường dẫn đến trung tâm di tích. Gió lạnh càng trở nên dữ dội hơn.",
						"thai": "เส้นทางสู่ใจกลางซากปรักหักพัง ลมหนาวทวีความรุนแรงขึ้น",
						"hindi": "खंडहरों के हृदय की ओर जाने वाला मार्ग। ठंडी हवा और भी तेज हो गई।"
					},
					"type": "speech"
				},
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "멈춰! 제발 여기서 멈춰!",
						"english": "Stop! Please, stop here!",
						"japanese": "止まれ！ここで止まってください！",
						"chinese": "停下！请在这里停下！",
						"french": "Arrêtez ! S'il vous plaît, arrêtez ici !",
						"spanish": "¡Detente! ¡Por favor, detente aquí!",
						"vietnamese": "Dừng lại! Làm ơn dừng lại ở đây!",
						"thai": "หยุดนะ! ได้โปรดหยุดตรงนี้เถอะ!",
						"hindi": "रुको! कृपया यहीं रुक जाओ!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야, 에이라. 다 왔어.",
						"english": "What are you talking about, Eira? We're almost there.",
						"japanese": "何を言ってるんだ、エイラ。もうすぐ着くぞ。",
						"chinese": "你在说什么，艾拉？我们快到了。",
						"french": "De quoi parles-tu, Eira ? On y est presque.",
						"spanish": "¿De qué hablas, Eira? Ya casi llegamos.",
						"vietnamese": "Em đang nói gì vậy, Eira? Chúng ta sắp đến rồi.",
						"thai": "เธอพูดอะไรน่ะ ไอรา? เราเกือบจะถึงแล้วนะ",
						"hindi": "तुम क्या कह रही हो, ऐरा? हम लगभग पहुँच गए हैं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "흐느낌이 들려… 애절한 자장가 소리가…!",
						"english": "I hear sobbing... a mournful lullaby...!",
						"japanese": "すすり泣きが聞こえる… 悲しい子守唄が…！",
						"chinese": "我听到了啜泣声……哀伤的摇篮曲……！",
						"french": "J'entends des sanglots… une berceuse lugubre… !",
						"spanish": "Oigo sollozos... una triste nana...!",
						"vietnamese": "Tôi nghe thấy tiếng nức nở… một bài hát ru buồn thảm…!",
						"thai": "ฉันได้ยินเสียงสะอื้น… เสียงเพลงกล่อมเด็กที่โศกเศร้า…!",
						"hindi": "मुझे सिसकियाँ सुनाई दे रही हैं... एक उदास लोरी...!"
					},
					"type": "speech"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "이곳은… 살아있는 무덤이야. 더 가면 안 돼! 우리는 모두… 죽을 거야!",
						"english": "This place is... a living tomb. We can't go further! We'll all... die!",
						"japanese": "ここは… 生ける屍の墓場だ。これ以上進んではいけない！私たちは皆… 死んでしまうぞ！",
						"chinese": "这里是……一座活生生的坟墓。我们不能再往前走了！我们都会……死的！",
						"french": "Cet endroit est… une tombe vivante. On ne peut pas aller plus loin ! Nous allons tous… mourir !",
						"spanish": "Este lugar es… una tumba viviente. ¡No podemos ir más lejos! ¡Todos vamos a… morir!",
						"vietnamese": "Nơi này là… một nấm mồ sống. Chúng ta không thể đi xa hơn nữa! Tất cả chúng ta sẽ… chết!",
						"thai": "ที่นี่คือ… สุสานที่มีชีวิต เราไปต่อไม่ได้แล้ว! เราทุกคนจะ… ตาย!",
						"hindi": "यह जगह... एक जीवित कब्र है। हम और आगे नहीं जा सकते! हम सब... मर जाएंगे!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "겁먹지 마. 여기까지 와서 포기할 순 없어.",
						"english": "Don't be scared. We can't give up after coming all this way.",
						"japanese": "怖がるな。ここまで来て諦めるわけにはいかない。",
						"chinese": "别害怕。我们不能走到这里就放弃。",
						"french": "N'aie pas peur. On ne peut pas abandonner après tout ce chemin.",
						"spanish": "No tengas miedo. No podemos rendirnos después de haber llegado tan lejos.",
						"vietnamese": "Đừng sợ. Chúng ta không thể bỏ cuộc sau khi đã đi xa đến vậy.",
						"thai": "อย่ากลัวเลยนะ เรามาถึงขนาดนี้แล้วจะยอมแพ้ไม่ได้หรอก",
						"hindi": "डरो मत। यहाँ तक आकर हम हार नहीं मान सकते।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_4"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 얼음 기둥 사이에서 서서히 형태를 갖췄다.",
						"english": "A colossal shadow slowly took shape amidst the ice pillars.",
						"japanese": "巨大な影が氷の柱の間でゆっくりと形を成した。",
						"chinese": "一个巨大的影子在冰柱之间慢慢地形成了。",
						"french": "Une ombre colossale prit lentement forme au milieu des piliers de glace.",
						"spanish": "Una sombra colosal tomó forma lentamente entre los pilares de hielo.",
						"vietnamese": "Một bóng tối khổng lồ dần dần thành hình giữa các cột băng.",
						"thai": "เงาขนาดมหึมาค่อยๆ ก่อตัวขึ้นท่ามกลางเสาน้ำแข็ง",
						"hindi": "एक विशालकाय परछाई धीरे-धीरे बर्फ के खंभों के बीच आकार लेने लगी।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "침입자들… 어리석게도… 나의 안식처까지 왔는가.",
						"english": "Intruders... Foolishly... have you come to my sanctuary?",
						"japanese": "侵入者たち… 愚かにも… 私の安息の地まで来たのか。",
						"chinese": "入侵者……愚蠢地……你们竟敢来到我的安息之地？",
						"french": "Intrus… Imprudemment… êtes-vous venus jusqu'à mon sanctuaire ?",
						"spanish": "Intrusos... Tontamente... ¿habéis llegado hasta mi santuario?",
						"vietnamese": "Những kẻ xâm nhập… Thật ngu ngốc… các ngươi đã đến tận nơi ẩn náu của ta sao?",
						"thai": "พวกผู้บุกรุก… ช่างโง่เขลา… ถึงกับมายังที่พำนักของข้าเชียวหรือ",
						"hindi": "घुसपैठिए... मूर्खता से... क्या तुम मेरे अभयारण्य तक आ गए हो?"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 모든 환각과 공포의 근원인가!",
						"english": "Are you the source of all these illusions and fears!",
						"japanese": "お前がこの全ての幻覚と恐怖の根源なのか！",
						"chinese": "你就是所有这些幻觉和恐惧的根源吗！",
						"french": "Es-tu la source de toutes ces illusions et de toutes ces peurs !",
						"spanish": "¡Eres la fuente de todas estas ilusiones y miedos!",
						"vietnamese": "Ngươi là nguồn gốc của tất cả những ảo ảnh và nỗi sợ hãi này sao!",
						"thai": "เจ้าคือต้นตอของภาพลวงตาและความกลัวทั้งหมดนี้งั้นหรือ!",
						"hindi": "क्या तुम इन सभी भ्रमों और भय का स्रोत हो!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "나는 너희의 공포가 빚어낸 그림자… 깨어난 비명일 뿐.",
						"english": "I am but a shadow forged from your fears... a waking scream.",
						"japanese": "私はお前たちの恐怖が生み出した影… 目覚めたる叫びに過ぎない。",
						"chinese": "我不过是你们恐惧所铸就的影子……一声被唤醒的尖叫。",
						"french": "Je ne suis qu'une ombre forgée par vos peurs… un hurlement éveillé.",
						"spanish": "No soy más que una sombra forjada por vuestros miedos... un grito despierto.",
						"vietnamese": "Ta chỉ là một bóng tối được tạo ra từ nỗi sợ hãi của các ngươi… một tiếng thét thức tỉnh.",
						"thai": "ข้าก็แค่เงาที่เกิดจากความกลัวของพวกเจ้า… เป็นเพียงเสียงกรีดร้องที่ตื่นขึ้น",
						"hindi": "मैं तो बस तुम्हारे डर से बनी एक परछाई हूँ... एक जागती हुई चीख।"
					},
					"speaker": "random_boss"
				},
				{
					"action": "enter",
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 룬 문자… '가족'… '아이'…",
						"english": "These runes... 'Family'... 'Child'...",
						"japanese": "このルーン文字… 「家族」… 「子供」…",
						"chinese": "这些符文……‘家人’……‘孩子’……",
						"french": "Ces runes… 'Famille'… 'Enfant'…",
						"spanish": "Estas runas... 'Familia'... 'Niño'...",
						"vietnamese": "Những ký tự rune này… 'Gia đình'… 'Đứa trẻ'…",
						"thai": "อักษรรูนเหล่านี้… 'ครอบครัว'… 'เด็ก'…",
						"hindi": "ये रुण अक्षर... 'परिवार'... 'बच्चा'..."
					},
					"emotion": "sad",
					"speaker": "eira"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "나의 안식을 방해하지 마라.",
						"english": "Do not disturb my slumber.",
						"japanese": "私の安息を邪魔するな。",
						"chinese": "别打扰我的安宁。",
						"french": "Ne troublez pas mon repos.",
						"spanish": "No perturbes mi descanso.",
						"vietnamese": "Đừng quấy rầy giấc ngủ của ta.",
						"thai": "อย่ามารบกวนการพักผ่อนของข้า.",
						"hindi": "मेरी शांति भंग मत करो।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "비켜, 에이라! 여기서 끝낸다!",
						"english": "Move, Aira! This ends here!",
						"japanese": "退け、エイラ！ここで終わらせる！",
						"chinese": "让开，艾拉！在此了结！",
						"french": "Écarte-toi, Aira ! Ça se termine ici !",
						"spanish": "¡Apártate, Aira! ¡Aquí termina todo!",
						"vietnamese": "Tránh ra, Aira! Kết thúc tại đây!",
						"thai": "หลีกไป, ไอรา! มันจะจบลงที่นี่!",
						"hindi": "हट जाओ, ऐरा! यहीं खत्म करते हैं!"
					},
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자는 찢어지고, 얼음 조각으로 흩어졌다.",
						"english": "The colossal shadow tore apart, scattering into shards of ice.",
						"japanese": "巨大な影は引き裂かれ、氷の破片となって散った。",
						"chinese": "巨大的阴影被撕裂，化作冰屑四散而去。",
						"french": "L'ombre colossale fut déchirée, se dispersant en éclats de glace.",
						"spanish": "La sombra colosal se desgarró, dispersándose en fragmentos de hielo.",
						"vietnamese": "Bóng đen khổng lồ xé toạc, vỡ tan thành những mảnh băng.",
						"thai": "เงาอันมหึมาฉีกขาด และแตกกระจายไปในเศษน้ำแข็ง.",
						"hindi": "विशाल छाया फट गई, बर्फ के टुकड़ों में बिखर गई।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…나의… 아이… 잃어버린 온기…",
						"english": "...My... child... lost warmth...",
						"japanese": "…私の…子…失われた温もり…",
						"chinese": "……我的……孩子……失去的温暖……",
						"french": "...Mon... enfant... la chaleur perdue...",
						"spanish": "...Mi... hijo/a... calidez perdida...",
						"vietnamese": "...Con của ta... hơi ấm đã mất...",
						"thai": "...ลูกของข้า... ความอบอุ่นที่หายไป...",
						"hindi": "...मेरा... बच्चा... खोई हुई गरमाहट..."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "뭐라고? 무슨 말이지?",
						"english": "What? What are you saying?",
						"japanese": "何だと？何を言っている？",
						"chinese": "什么？你说什么？",
						"french": "Quoi ? Que dis-tu ?",
						"spanish": "¿Qué? ¿Qué quieres decir?",
						"vietnamese": "Gì cơ? Ngươi nói gì?",
						"thai": "อะไรนะ? หมายความว่าไง?",
						"hindi": "क्या? क्या कह रहे हो?"
					}
				},
				{
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "이 룬 문자가… 더 선명해졌어. 슬픈 역사가…",
						"english": "These runes... they've become clearer. A tragic history...",
						"japanese": "このルーン文字が…より鮮明になった。悲しい歴史が…",
						"chinese": "这些符文……变得更清晰了。一段悲伤的历史……",
						"french": "Ces runes... sont devenues plus claires. Une triste histoire...",
						"spanish": "Estas runas... se han vuelto más claras. Una triste historia...",
						"vietnamese": "Những chữ rune này... đã rõ hơn. Một lịch sử buồn...",
						"thai": "อักษรรูนเหล่านี้... ชัดเจนขึ้นแล้ว. ประวัติศาสตร์อันน่าเศร้า...",
						"hindi": "ये रूण अक्षर... और स्पष्ट हो गए हैं। एक दुखद इतिहास..."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "이 존재는… 사랑하는 이를 잃은 슬픔 그 자체였어.",
						"english": "This being was... sorrow itself, born from losing a loved one.",
						"japanese": "この存在は…愛する者を失った悲しみそのものだった。",
						"chinese": "这个存在……是失去挚爱的悲伤本身。",
						"french": "Cette entité était... la tristesse même d'avoir perdu un être cher.",
						"spanish": "Esta entidad era... la tristeza misma por la pérdida de un ser querido.",
						"vietnamese": "Thực thể này... là nỗi buồn của việc mất đi người thân yêu.",
						"thai": "สิ่งมีชีวิตนี้... คือความโศกเศร้าจากการสูญเสียคนที่รัก.",
						"hindi": "यह अस्तित्व... किसी प्रियजन को खोने का दुख ही था।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "얼음 미궁은 잠시 침묵했다. 그러나 더 깊은 진실이 그들을 삼키려 하고 있었다.",
						"english": "The Ice Labyrinth fell silent for a moment. But a deeper truth was about to swallow them whole.",
						"japanese": "氷の迷宮は一時沈黙した。しかし、より深い真実が彼らを飲み込もうとしていた。",
						"chinese": "冰之迷宫暂时陷入了沉寂。然而，更深层的真相正欲将他们吞噬。",
						"french": "Le Labyrinthe de Glace se tut un instant. Mais une vérité plus profonde s'apprêtait à les engloutir.",
						"spanish": "El Laberinto de Hielo guardó silencio por un momento. Pero una verdad más profunda estaba a punto de devorarlos.",
						"vietnamese": "Mê cung Băng tạm thời im lặng. Nhưng một sự thật sâu xa hơn đang chực nuốt chửng họ.",
						"thai": "เขาวงกตน้ำแข็งเงียบงันชั่วขณะ. แต่ความจริงที่ลึกซึ้งกว่ากำลังจะกลืนกินพวกเขา.",
						"hindi": "बर्फ़ीली भूलभुलैया कुछ देर के लिए शांत हो गई। लेकिन एक गहरा सच उन्हें निगलने वाला था।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "얼음 뿌리가 모든 것을 집어삼키는 듯했다.",
						"english": "The ice roots seemed to devour everything.",
						"japanese": "氷の根が全てを飲み込むようだった。",
						"chinese": "冰之根似乎吞噬了一切。",
						"french": "Les racines de glace semblaient tout dévorer.",
						"spanish": "Las raíces de hielo parecían devorar todo.",
						"vietnamese": "Rễ băng dường như nuốt chửng mọi thứ.",
						"thai": "รากน้ำแข็งราวกับจะกลืนกินทุกสิ่ง.",
						"hindi": "बर्फ़ की जड़ें सब कुछ निगलती हुई लग रही थीं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "너희의 공포가… 나의 영원한 삶이 될 것이다.",
						"english": "Your fear... shall become my eternal life.",
						"japanese": "お前たちの恐怖が…私の永遠の命となるだろう。",
						"chinese": "你们的恐惧……将成为我永恒的生命。",
						"french": "Votre peur... deviendra ma vie éternelle.",
						"spanish": "Vuestro miedo... se convertirá en mi vida eterna.",
						"vietnamese": "Nỗi sợ hãi của các ngươi... sẽ trở thành cuộc đời vĩnh cửu của ta.",
						"thai": "ความหวาดกลัวของพวกเจ้า... จะกลายเป็นชีวิตนิรันดร์ของข้า.",
						"hindi": "तुम्हारा डर... मेरा शाश्वत जीवन बन जाएगा।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "빌어먹을… 아직 끝나지 않았어!",
						"english": "Damn it... It's not over yet!",
						"japanese": "ちくしょう… まだ終わってない！",
						"chinese": "该死……还没完！",
						"french": "Maudit... Ce n'est pas encore fini !",
						"spanish": "Maldita sea... ¡Todavía no ha terminado!",
						"vietnamese": "Chết tiệt... Vẫn chưa kết thúc đâu!",
						"thai": "ให้ตายสิ... ยังไม่จบ!",
						"hindi": "धिक्कार है... यह अभी खत्म नहीं हुआ है!"
					},
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"혹독한 추위가 뼈를 에는 잊힌 유적.",
			"환각은 현실이 되고, 섬뜩한 속삭임은 귓가를 맴돈다.",
			"미지의 존재가 우리를 조롱하는 듯.",
			"에이라는 떨고 있었다. 이 탐험은, 광기일까."
		],
		"english": [
			"Forgotten ruins, where bitter cold gnaws at the bone.",
			"Hallucinations become reality, sinister whispers linger in the ear.",
			"As if an unknown entity mocks us.",
			"Aira was trembling. Is this expedition, madness?"
		],
		"japanese": [
			"忘れ去られた遺跡、骨を削るような厳しい寒さ。",
			"幻覚は現実となり、不気味なささやきが耳元をさまよう。",
			"未知の存在が我々を嘲笑うかのように。",
			"アイラは震えていた。この探検は、狂気なのだろうか。"
		],
		"chinese": [
			"被遗忘的遗迹，严寒刺骨。",
			"幻觉化为现实，阴森的低语在耳边萦绕。",
			"仿佛未知的存在在嘲弄我们。",
			"艾拉在颤抖。这次探险，是疯狂吗？"
		],
		"french": [
			"Ruines oubliées, où le froid mordant ronge les os.",
			"Les hallucinations deviennent réalité, des murmures sinistres rôdent à l'oreille.",
			"Comme si une entité inconnue nous narguait.",
			"Aira tremblait. Cette expédition, est-ce de la folie ?"
		],
		"spanish": [
			"Ruinas olvidadas, donde el frío amargo cala hasta los huesos.",
			"Las alucinaciones se vuelven realidad, susurros siniestros rondan el oído.",
			"Como si una entidad desconocida se burlara de nosotros.",
			"Aira estaba temblando. ¿Es esta expedición, una locura?"
		],
		"vietnamese": [
			"Di tích bị lãng quên, nơi cái lạnh cắt da cắt thịt.",
			"Ảo giác thành hiện thực, những lời thì thầm ghê rợn vương vấn bên tai.",
			"Cứ như thể một thực thể vô danh đang chế nhạo chúng ta.",
			"Aira đang run rẩy. Cuộc thám hiểm này, liệu có phải là điên rồ?"
		],
		"thai": [
			"ซากปรักหักพังที่ถูกลืมเลือน ซึ่งความหนาวเย็นกัดกินกระดูก",
			"ภาพหลอนกลายเป็นจริง เสียงกระซิบที่น่าขนลุกยังคงวนเวียนในหู",
			"ราวกับว่ามีบางสิ่งที่ไม่รู้จักกำลังเย้ยหยันเรา",
			"ไอรากำลังสั่นสะท้าน การสำรวจครั้งนี้เป็นความบ้าคลั่งหรือเปล่า"
		],
		"hindi": [
			"भूले हुए खंडहर, जहाँ कड़वी ठंड हड्डियों तक चुभती है。",
			"भ्रम वास्तविकता बन जाते हैं, भयावह फुसफुसाहटें कान में गूँजती हैं।",
			"मानो कोई अज्ञात सत्ता हमारा उपहास कर रही हो।",
			"ऐरा काँप रही थी। क्या यह अभियान, पागलपन है?"
		]
	}
} as const;
