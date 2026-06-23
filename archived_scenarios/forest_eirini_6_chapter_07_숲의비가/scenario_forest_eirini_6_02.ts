export const scenario_forest_eirini_6_02 = {
	"scenario_id": "forest_eirini_6_02",
	"order": 2,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"ivy": {
			"id": "mon_d1c759f3-74f8-42b7-ba16-c705649f006f",
			"name": {
				"korean": "아이비",
				"english": "Ivy",
				"japanese": "アイビー",
				"chinese": "艾薇",
				"french": "Ivy",
				"spanish": "Ivy",
				"vietnamese": "Ivy",
				"thai": "ไอวี่",
				"hindi": "आइवी"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/654fde54-6029-4601-b4a8-0578f00df900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/6ee8738d-0e14-4f8d-d04d-c934b0fff000/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "짙은 안개 속, 고요했던 숲이 요동쳤다.",
						"english": "In the thick fog, the silent forest stirred.",
						"japanese": "濃い霧の中、静寂だった森が揺れ動いた。",
						"chinese": "浓雾中，寂静的森林骚动起来。",
						"french": "Dans le brouillard épais, la forêt silencieuse s'agita.",
						"spanish": "En la densa niebla, el bosque silencioso se agitó.",
						"vietnamese": "Giữa màn sương dày đặc, khu rừng yên ắng bỗng xao động.",
						"thai": "ท่ามกลางหมอกหนาทึบ ป่าที่เงียบสงบก็สั่นสะเทือน",
						"hindi": "घने कोहरे में, शांत जंगल हिल उठा।"
					},
					"emotion": "base"
				},
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ivy"
				},
				{
					"speaker": "ivy",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "멈춰라.",
						"english": "Stop.",
						"japanese": "止まれ。",
						"chinese": "停下。",
						"french": "Arrête.",
						"spanish": "Detente.",
						"vietnamese": "Dừng lại.",
						"thai": "หยุด",
						"hindi": "रुको।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "누구지?",
						"english": "Who are you?",
						"japanese": "誰だ？",
						"chinese": "你是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ai đó?",
						"thai": "ใครน่ะ?",
						"hindi": "कौन हो तुम?"
					}
				},
				{
					"content": {
						"korean": "이 숲의 감시자, 아이비다. 더 이상 들어오지 마.",
						"english": "I am Ivy, guardian of this forest. Do not proceed further.",
						"japanese": "この森の監視者、アイビーだ。これ以上、中へ入るな。",
						"chinese": "我是艾维，这片森林的守护者。别再往前了。",
						"french": "Je suis Ivy, gardienne de cette forêt. N'avancez pas plus loin.",
						"spanish": "Soy Ivy, la guardiana de este bosque. No avances más.",
						"vietnamese": "Ta là Ivy, người giám hộ của khu rừng này. Đừng đi tiếp nữa.",
						"thai": "ฉันคือไอวี่ ผู้พิทักษ์ป่าแห่งนี้ อย่าเข้ามาอีก",
						"hindi": "मैं इस जंगल की संरक्षक, आइवी हूँ। आगे मत बढ़ो।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "ivy"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "나는… 진실을 찾으러 왔다.",
						"english": "I... have come to find the truth.",
						"japanese": "私は…真実を探しに来た。",
						"chinese": "我是来…寻找真相的。",
						"french": "Je suis venu… chercher la vérité.",
						"spanish": "Yo… he venido a buscar la verdad.",
						"vietnamese": "Ta… đến đây để tìm kiếm sự thật.",
						"thai": "ฉัน…มาเพื่อตามหาความจริง",
						"hindi": "मैं… सच खोजने आया हूँ।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "네 진실 때문에 이 숲이 더 병들게 둘 수는 없어!",
						"english": "I cannot let this forest sicken further because of your truth!",
						"japanese": "お前の真実のせいで、この森をこれ以上病ませるわけにはいかない！",
						"chinese": "我不能让这片森林因为你的真相而病得更重！",
						"french": "Je ne peux pas laisser cette forêt dépérir davantage à cause de ta vérité !",
						"spanish": "¡No puedo permitir que este bosque enferme más por tu verdad!",
						"vietnamese": "Ta không thể để khu rừng này suy yếu thêm vì sự thật của ngươi!",
						"thai": "ฉันจะปล่อยให้ป่านี้ป่วยหนักไปกว่านี้ไม่ได้เพราะความจริงของเจ้า!",
						"hindi": "मैं तुम्हारी सच्चाई के कारण इस जंगल को और बीमार नहीं पड़ने दे सकती!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "ivy"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "ivy",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "내 경고를 무시하고 여기까지 오다니.",
						"english": "You dared to defy my warning and come here.",
						"japanese": "私の警告を無視してここまで来たか。",
						"chinese": "竟敢无视我的警告来到这里。",
						"french": "Tu as ignoré mon avertissement et es venu jusqu'ici.",
						"spanish": "Ignoraste mi advertencia y llegaste hasta aquí.",
						"vietnamese": "Ngươi đã phớt lờ lời cảnh báo của ta và đến tận đây.",
						"thai": "เจ้ากล้าเพิกเฉยคำเตือนของข้าแล้วมาถึงที่นี่เลยรึ",
						"hindi": "तुमने मेरी चेतावनी को नज़रअंदाज़ किया और यहाँ तक आ गए।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "ivy"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "숲은 이미 병들어가고 있어.",
						"english": "The forest is already ailing.",
						"japanese": "森はすでに病んでいる。",
						"chinese": "森林已经病入膏肓。",
						"french": "La forêt est déjà en train de dépérir.",
						"spanish": "El bosque ya está enfermando.",
						"vietnamese": "Rừng đã và đang mục ruỗng.",
						"thai": "ป่ากำลังจะตายแล้ว",
						"hindi": "जंगल पहले से ही बीमार हो रहा है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그건 너희 외부인들 때문이야.",
						"english": "It's because of you outsiders.",
						"japanese": "それもお前たち部外者のせいだ。",
						"chinese": "这都是因为你们这些外来者。",
						"french": "C'est à cause de vous, les étrangers.",
						"spanish": "Es por culpa de ustedes, los forasteros.",
						"vietnamese": "Đó là vì lũ ngoại bang các ngươi.",
						"thai": "มันเป็นเพราะพวกเจ้าคนนอก",
						"hindi": "यह तुम बाहरी लोगों की वजह से है।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "ivy"
				},
				{
					"content": {
						"korean": "그게 정말 우리가 만든 일일까?",
						"english": "Is that truly our doing?",
						"japanese": "それは本当に私たちがやったことなのか？",
						"chinese": "这真的是我们造成的吗？",
						"french": "Est-ce vraiment notre faute ?",
						"spanish": "¿Es eso realmente obra nuestra?",
						"vietnamese": "Điều đó thực sự do chúng tôi gây ra sao?",
						"thai": "นั่นเป็นฝีมือของเราจริงๆ รึเปล่า?",
						"hindi": "क्या यह वाकई हमारा किया-धरा है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "닥쳐! 너희는 그저 파괴자일 뿐이야!",
						"english": "Silence! You are nothing but destroyers!",
						"japanese": "黙れ！お前たちはただの破壊者だ！",
						"chinese": "闭嘴！你们不过是破坏者！",
						"french": "Tais-toi ! Vous n'êtes que des destructeurs !",
						"spanish": "¡Cállate! ¡No sois más que destructores!",
						"vietnamese": "Im đi! Các ngươi chỉ là những kẻ phá hoại!",
						"thai": "หุบปาก! พวกเจ้าเป็นแค่พวกทำลายล้างเท่านั้น!",
						"hindi": "चुप रहो! तुम सिर्फ़ विनाशक हो!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "ivy"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "숲의 뿌리 깊은 곳, 푸른 곰팡이가 번져 있었다.",
						"english": "Deep within the forest's roots, a blue mold spread.",
						"japanese": "森の根深い場所で、青いカビが広がっていた。",
						"chinese": "森林根深之处，蓝色的霉菌正在蔓延。",
						"french": "Au plus profond des racines de la forêt, une moisissure bleue se propageait.",
						"spanish": "En lo más profundo de las raíces del bosque, un moho azul se extendía.",
						"vietnamese": "Sâu thẳm trong rễ cây rừng, một loại nấm mốc xanh đang lan rộng.",
						"thai": "ลึกเข้าไปในรากของป่า เชื้อราสีน้ำเงินได้แพร่กระจายไปทั่ว",
						"hindi": "जंगल की जड़ों में गहरे, एक नीली फफूँद फैल गई थी।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이게… 숲을 병들게 하는 원인인가?",
						"english": "Is this... what's sickening the forest?",
						"japanese": "これが…森を病ませる原因なのか？",
						"chinese": "这就是…让森林生病的原因吗？",
						"french": "Est-ce ceci... la cause de la maladie de la forêt ?",
						"spanish": "¿Es esto... lo que está enfermando al bosque?",
						"vietnamese": "Đây có phải là... nguyên nhân khiến khu rừng bệnh tật không?",
						"thai": "นี่คือ... สาเหตุที่ทำให้ป่าป่วยงั้นหรือ?",
						"hindi": "क्या यह... जंगल को बीमार करने का कारण है?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "ivy",
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "봐! 네가 들어온 후 더 심해졌어!",
						"english": "Look! It's gotten worse since you arrived!",
						"japanese": "見ろ！お前が入ってきてからさらに悪化した！",
						"chinese": "看！自从你进来后变得更糟了！",
						"french": "Regarde ! C'est pire depuis que tu es arrivé !",
						"spanish": "¡Mira! ¡Ha empeorado desde que llegaste!",
						"vietnamese": "Nhìn kìa! Nó đã tệ hơn kể từ khi ngươi đến!",
						"thai": "ดูสิ! มันแย่ลงตั้งแต่เจ้าเข้ามา!",
						"hindi": "देखो! तुम्हारे आने के बाद से यह और बिगड़ गया है!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "ivy"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "나는 숲을 구원하러 왔다.",
						"english": "I came to save the forest.",
						"japanese": "私は森を救いに来た。",
						"chinese": "我是来拯救森林的。",
						"french": "Je suis venu sauver la forêt.",
						"spanish": "Vine a salvar el bosque.",
						"vietnamese": "Ta đến để cứu rỗi khu rừng.",
						"thai": "ข้ามาเพื่อกอบกู้ป่า",
						"hindi": "मैं जंगल को बचाने आया हूँ।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "구원? 역겨운 소리. 네가 뭘 할 수 있는데?",
						"english": "Salvation? Disgusting. What can you do?",
						"japanese": "救いだと？吐き気がする。お前に何ができる？",
						"chinese": "拯救？恶心。你又能做什么？",
						"french": "Le salut ? Dégoutant. Que peux-tu faire ?",
						"spanish": "¿Salvación? Qué asco. ¿Qué puedes hacer tú?",
						"vietnamese": "Cứu rỗi? Thật kinh tởm. Ngươi có thể làm gì chứ?",
						"thai": "กอบกู้? น่ารังเกียจ เจ้าจะทำอะไรได้?",
						"hindi": "मुक्ति? घिनौनी बात। तुम क्या कर सकते हो?"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "ivy"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "무엇이든 할 거야.",
						"english": "I'll do anything.",
						"japanese": "何でもするわ。",
						"chinese": "我什么都会做。",
						"french": "Je ferai n'importe quoi.",
						"spanish": "Haré cualquier cosa.",
						"vietnamese": "Tôi sẽ làm bất cứ điều gì.",
						"thai": "ฉันจะทำทุกอย่าง",
						"hindi": "मैं कुछ भी करूँगा।"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "ivy",
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "base",
					"content": {
						"korean": "아직도 포기하지 않았군.",
						"english": "Still haven't given up, huh.",
						"japanese": "まだ諦めてないのか。",
						"chinese": "你还没放弃啊。",
						"french": "Tu n'as toujours pas abandonné, hein.",
						"spanish": "Todavía no te has rendido, ¿eh?",
						"vietnamese": "Vẫn chưa bỏ cuộc à.",
						"thai": "ยังไม่ยอมแพ้สินะ",
						"hindi": "अभी तक हार नहीं मानी, है ना।"
					},
					"speaker": "ivy",
					"type": "speech"
				},
				{
					"content": {
						"korean": "포기할 수 없어. 이 곰팡이… 대체 뭐야?",
						"english": "I can't give up. What exactly is this mold...?",
						"japanese": "諦められない。このカビ…一体何なの？",
						"chinese": "我不能放弃。这霉菌…到底是什么？",
						"french": "Je ne peux pas abandonner. Qu'est-ce que cette moisissure... au juste ?",
						"spanish": "No puedo rendirme. ¿Qué es este moho...?",
						"vietnamese": "Tôi không thể bỏ cuộc. Cái nấm mốc này... rốt cuộc là gì?",
						"thai": "ฉันยอมแพ้ไม่ได้ เชื้อรานี่… มันคืออะไรกันแน่?",
						"hindi": "मैं हार नहीं मान सकता। यह फंगस... आखिर क्या है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "ivy",
					"content": {
						"korean": "…오래된 저주다. 숲의 깊은 곳에 묶여있어.",
						"english": "...It's an ancient curse. Bound deep within the forest.",
						"japanese": "…古き呪いだ。森の奥深くに縛られている。",
						"chinese": "…是古老的诅咒。被束缚在森林深处。",
						"french": "...C'est une ancienne malédiction. Liée au plus profond de la forêt.",
						"spanish": "...Es una antigua maldición. Atada en lo profundo del bosque.",
						"vietnamese": "...Đó là một lời nguyền cổ xưa. Bị ràng buộc sâu trong rừng.",
						"thai": "...มันคือคำสาปโบราณ ผูกติดอยู่ลึกเข้าไปในป่า",
						"hindi": "...यह एक प्राचीन अभिशाप है। जंगल की गहराइयों में बंधा हुआ।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "저주…?",
						"english": "A curse...?",
						"japanese": "呪い…？",
						"chinese": "诅咒…？",
						"french": "Une malédiction...?",
						"spanish": "¿Una maldición...?",
						"vietnamese": "Lời nguyền...?",
						"thai": "คำสาป…?",
						"hindi": "एक अभिशाप...?"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "더 이상은 알려줄 수 없어. 그게 누구의 짓이든, 네가 상대할 수 있는 게 아니야.",
						"english": "I cannot tell you more. Whatever created it, it's beyond your power.",
						"japanese": "これ以上は教えられない。それが誰の仕業であろうと、お前が相手にできるものではない。",
						"chinese": "我不能再告诉你更多了。无论那是什么人做的，你都无法应对。",
						"french": "Je ne peux pas t'en dire plus. Peu importe qui est derrière ça, ce n'est pas de ton ressort.",
						"spanish": "No puedo decirte más. Quienquiera que lo haya hecho, no es algo con lo que puedas lidiar.",
						"vietnamese": "Tôi không thể nói cho bạn thêm nữa. Bất kể đó là việc của ai, bạn cũng không thể đối phó được đâu.",
						"thai": "ฉันบอกอะไรไปมากกว่านี้ไม่ได้ ไม่ว่าใครจะทำมันขึ้นมา มันไม่ใช่สิ่งที่นายจะรับมือได้",
						"hindi": "मैं तुम्हें और कुछ नहीं बता सकता। यह चाहे किसी का भी काम हो, तुम इससे निपट नहीं सकते।"
					},
					"speaker": "ivy",
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "sad",
					"content": {
						"korean": "크윽… 나는… 사라지지 않는다… 숲은… 기억할 것이다…",
						"english": "Ugh... I... will not vanish... The forest... will remember...",
						"japanese": "ぐっ… 私は… 消えぬ… 森は… 覚えているだろう…",
						"chinese": "呃啊……我……不会消失……森林……会记住的……",
						"french": "Arg... Je... ne disparaîtrai pas... La forêt... se souviendra...",
						"spanish": "Agh... Yo... no desapareceré... El bosque... recordará...",
						"vietnamese": "Khụ... Ta... sẽ không biến mất... Rừng... sẽ ghi nhớ...",
						"thai": "อึก... ข้า... จะไม่หายไป... ป่า... จะจดจำ...",
						"hindi": "उफ़... मैं... मिटूँगा नहीं... वन... याद रखेगा..."
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "숲의 고통… 당신은 대체 누구지?",
						"english": "The forest's torment... Who are you, really?",
						"japanese": "森の苦痛… あなたは一体誰なの？",
						"chinese": "森林的痛苦……你究竟是谁？",
						"french": "La souffrance de la forêt... Qui êtes-vous, au juste ?",
						"spanish": "El tormento del bosque... ¿Quién eres tú, en realidad?",
						"vietnamese": "Nỗi đau của rừng... Rốt cuộc ngươi là ai?",
						"thai": "ความเจ็บปวดของป่า... ท่านคือใครกันแน่?",
						"hindi": "वन का दर्द... तुम आख़िर कौन हो?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "정체 모를 그림자는 서서히 숲의 어둠 속으로 스며들었다.",
						"english": "The unknown shadow slowly seeped into the forest's darkness.",
						"japanese": "正体不明の影は、ゆっくりと森の闇の中へ溶け込んでいった。",
						"chinese": "不知名的黑影渐渐渗入了森林的黑暗之中。",
						"french": "L'ombre inconnue s'est lentement fondue dans l'obscurité de la forêt.",
						"spanish": "La sombra desconocida se deslizó lentamente en la oscuridad del bosque.",
						"vietnamese": "Bóng đen vô danh dần dần chìm sâu vào màn đêm của rừng.",
						"thai": "เงาลึกลับค่อยๆ จางหายไปในความมืดมิดของป่า.",
						"hindi": "अज्ञात छाया धीरे-धीरे वन के अंधकार में समा गई।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "끝난 걸까… 아니, 아직… 시작일 뿐이야.",
						"english": "Is it over...? No, this is just... the beginning.",
						"japanese": "終わったのか…？ いや、まだ…始まりに過ぎない。",
						"chinese": "结束了吗……不，这还……只是开始。",
						"french": "C'est fini...? Non, ce n'est que... le début.",
						"spanish": "¿Se acabó...? No, esto es solo... el principio.",
						"vietnamese": "Kết thúc rồi sao...? Không, đây chỉ mới... là bắt đầu.",
						"thai": "จบแล้วหรือ...? ไม่, นี่ยัง...เป็นแค่จุดเริ่มต้น.",
						"hindi": "क्या यह ख़त्म हो गया...? नहीं, यह तो... बस शुरुआत है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "숲의 심장에서 들려오는 또 다른 속삭임이 주인공을 불렀다.",
						"english": "Another whisper from the forest's heart called to the protagonist.",
						"japanese": "森の心臓から聞こえるもう一つの囁きが、主人公を呼んだ。",
						"chinese": "森林之心传来的另一声低语召唤着主人公。",
						"french": "Un autre murmure, venu du cœur de la forêt, appela le protagoniste.",
						"spanish": "Otro susurro del corazón del bosque llamó al protagonista.",
						"vietnamese": "Một tiếng thì thầm khác từ trái tim rừng sâu vang lên, gọi tên nhân vật chính.",
						"thai": "เสียงกระซิบอีกเสียงจากใจกลางป่าเรียกหาตัวเอก.",
						"hindi": "वन के हृदय से आई एक और फुसफुसाहट ने नायक को पुकारा।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 숲의 심장을 가렸다.",
						"english": "A colossal shadow cloaked the forest's heart.",
						"japanese": "巨大な影が森の心臓を覆った。",
						"chinese": "巨大的阴影笼罩了森林的心脏。",
						"french": "Une ombre colossale a voilé le cœur de la forêt.",
						"spanish": "Una sombra colosal cubrió el corazón del bosque.",
						"vietnamese": "Một bóng tối khổng lồ bao phủ trái tim của khu rừng.",
						"thai": "เงาขนาดยักษ์บดบังหัวใจของป่า",
						"hindi": "एक विशाल छाया ने जंगल के हृदय को ढक लिया।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "감히… 이 숲의 평화를 깨려는 자인가.",
						"english": "How dare you... seek to disturb this forest's peace.",
						"japanese": "よくも…この森の平和を乱そうとするか。",
						"chinese": "竟敢…企图打破这森林的宁静。",
						"french": "Comment oses-tu... tenter de briser la paix de cette forêt.",
						"spanish": "¿Cómo te atreves... a intentar romper la paz de este bosque?",
						"vietnamese": "Dám... phá vỡ sự bình yên của khu rừng này sao.",
						"thai": "กล้าดียังไง… คิดจะมาทำลายความสงบของป่าแห่งนี้",
						"hindi": "तुम्हारी हिम्मत कैसे हुई... इस जंगल की शांति भंग करने की।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "당신이 숲을 병들게 하는 원흉인가?",
						"english": "Are you the root cause of the forest's sickness?",
						"japanese": "あなたが森を病ませる元凶か？",
						"chinese": "你就是让森林生病的元凶吗？",
						"french": "Es-tu la cause de la maladie de la forêt ?",
						"spanish": "¿Eres tú la causa principal de la enfermedad del bosque?",
						"vietnamese": "Ngươi chính là kẻ gây ra bệnh tật cho khu rừng này sao?",
						"thai": "ท่านคือต้นเหตุที่ทำให้ป่าเจ็บป่วยอย่างนั้นหรือ?",
						"hindi": "क्या तुम जंगल की बीमारी की जड़ हो?"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "나는 이 숲의 의지. 그저 순리를 따를 뿐.",
						"english": "I am the will of this forest. I merely follow nature's course.",
						"japanese": "私はこの森の意思。ただ摂理に従うのみ。",
						"chinese": "我是这片森林的意志。我只是遵循着自然法则。",
						"french": "Je suis la volonté de cette forêt. Je ne fais que suivre le cours de la nature.",
						"spanish": "Soy la voluntad de este bosque. Simplemente sigo el curso de la naturaleza.",
						"vietnamese": "Tôi là ý chí của khu rừng này. Tôi chỉ tuân theo lẽ tự nhiên.",
						"thai": "ฉันคือเจตจำนงของป่าแห่งนี้ ฉันเพียงแค่ทำตามกฎของธรรมชาติ",
						"hindi": "मैं इस जंगल की इच्छा हूँ। मैं केवल प्रकृति के नियम का पालन करता हूँ।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 순리가 숲을 파괴하고 있어!",
						"english": "That 'order' is destroying the forest!",
						"japanese": "その摂理が森を破壊している！",
						"chinese": "那个法则正在摧毁森林！",
						"french": "Cet ordre détruit la forêt !",
						"spanish": "¡Ese orden está destruyendo el bosque!",
						"vietnamese": "Quy luật đó đang hủy hoại rừng!",
						"thai": "ระเบียบนั้นกำลังทำลายป่า!",
						"hindi": "वह व्यवस्था वन को नष्ट कर रही है!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "네가 감히… 내 앞에 설 자격이 없다.",
						"english": "You dare... You are not worthy to stand before me.",
						"japanese": "貴様が… 私の前に立つ資格はない。",
						"chinese": "你竟敢……你没有资格站在我面前。",
						"french": "Tu oses... Tu n'es pas digne de te tenir devant moi.",
						"spanish": "Te atreves... No eres digno de estar ante mí.",
						"vietnamese": "Ngươi dám... Ngươi không có tư cách đứng trước mặt ta.",
						"thai": "แกกล้า... แกไม่มีสิทธิ์ที่จะยืนอยู่ต่อหน้าข้า.",
						"hindi": "तुम्हारी हिम्मत कैसे हुई... तुम मेरे सामने खड़े होने के योग्य नहीं हो।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "숲의 어둠이 모든 것을 집어삼켰다.",
						"english": "The forest's darkness consumed all.",
						"japanese": "森の闇がすべてを飲み込んだ。",
						"chinese": "森林的黑暗吞噬了一切。",
						"french": "L'obscurité de la forêt a tout englouti.",
						"spanish": "La oscuridad del bosque lo devoró todo.",
						"vietnamese": "Bóng tối của rừng đã nuốt chửng mọi thứ.",
						"thai": "ความมืดมิดของป่ากลืนกินทุกสิ่ง.",
						"hindi": "वन के अंधकार ने सब कुछ निगल लिया।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "나약한 자. 네가 뭘 할 수 있단 말인가.",
						"english": "Weakling. What can you possibly achieve?",
						"japanese": "弱き者よ。貴様に何ができるというのか。",
						"chinese": "弱者。你又能做些什么呢？",
						"french": "Faible. Que peux-tu bien faire ?",
						"spanish": "Debilucho. ¿Qué puedes hacer tú?",
						"vietnamese": "Kẻ yếu đuối. Ngươi có thể làm gì chứ?",
						"thai": "ผู้โง่เขลา. เจ้าจะทำอะไรได้?",
						"hindi": "कमज़ोर। तुम क्या कर सकते हो?"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…다시 일어설 것이다. 숲을 위해.",
						"english": "...I will rise again. For the forest.",
						"japanese": "…再び立ち上がるだろう。森のために。",
						"chinese": "……我会再次站起来。为了森林。",
						"french": "...Je me relèverai. Pour la forêt.",
						"spanish": "...Me levantaré de nuevo. Por el bosque.",
						"vietnamese": "...Ta sẽ đứng dậy lần nữa. Vì rừng.",
						"thai": "...ข้าจะลุกขึ้นอีกครั้ง. เพื่อป่า.",
						"hindi": "...मैं फिर से उठूँगा। वन के लिए।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "흥… 부질없는 저항.",
						"english": "Hmph... Futile resistance.",
						"japanese": "ふん…無駄な抵抗。",
						"chinese": "哼…无谓的抵抗。",
						"french": "Hmph... Résistance futile.",
						"spanish": "Hmph... Resistencia inútil.",
						"vietnamese": "Hừ... Phản kháng vô ích.",
						"thai": "หึ... การต่อต้านที่ไร้ประโยชน์",
						"hindi": "हूँ... बेकार का प्रतिरोध।"
					},
					"speaker": "random_boss",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"숲은 침묵했다. 그 침묵은 고통이었다.",
			"새로운 발걸음이 깊은 숲을 흔들었다.",
			"감시자는 외부의 침입을 용납하지 않았다.",
			"그러나 그 그림자 아래, 숲은 병들어가고 있었다."
		],
		"english": [
			"The forest was silent. That silence was agony.",
			"New footsteps stirred the deep forest.",
			"The guardian tolerated no intrusion.",
			"Yet beneath its shadow, the forest was ailing."
		],
		"japanese": [
			"森は沈黙していた。その沈黙は苦痛だった。",
			"新しい足音が深い森を揺らした。",
			"監視者は外部からの侵入を許さなかった。",
			"しかし、その影の下で、森は病んでいた。"
		],
		"chinese": [
			"森林寂静无声。那寂静是一种痛苦。",
			"新的脚步声搅动了幽深的森林。",
			"守护者不容许任何外部入侵。",
			"然而在那阴影之下，森林正在病变。"
		],
		"french": [
			"La forêt était silencieuse. Ce silence était une agonie.",
			"De nouveaux pas agitèrent la forêt profonde.",
			"Le gardien ne tolérait aucune intrusion.",
			"Cependant, sous son ombre, la forêt dépérissait."
		],
		"spanish": [
			"El bosque estaba en silencio. Ese silencio era una agonía.",
			"Nuevos pasos perturbaron el bosque profundo.",
			"El guardián no toleraba ninguna intrusión externa.",
			"Sin embargo, bajo esa sombra, el bosque estaba enfermando."
		],
		"vietnamese": [
			"Rừng im lìm. Sự im lìm ấy là một nỗi đau.",
			"Những bước chân mới lay động khu rừng sâu thẳm.",
			"Người giám hộ không dung thứ sự xâm nhập từ bên ngoài.",
			"Tuy nhiên, dưới bóng tối đó, khu rừng đang suy yếu dần."
		],
		"thai": [
			"ป่าเงียบงัน ความเงียบงันนั้นคือความเจ็บปวด",
			"ฝีเท้าใหม่สั่นสะเทือนป่าลึก",
			"ผู้พิทักษ์ไม่อนุญาตให้มีการบุกรุกจากภายนอก",
			"ทว่าใต้เงาของมัน ป่ากำลังป่วยไข้"
		],
		"hindi": [
			"वन शांत था। वह शांति एक पीड़ा थी।",
			"नए कदमों ने घने जंगल को हिला दिया।",
			"संरक्षक ने बाहरी घुसपैठ बर्दाश्त नहीं की।",
			"फिर भी, उस छाया के नीचे, जंगल बीमार पड़ रहा था।"
		]
	}
} as const;
