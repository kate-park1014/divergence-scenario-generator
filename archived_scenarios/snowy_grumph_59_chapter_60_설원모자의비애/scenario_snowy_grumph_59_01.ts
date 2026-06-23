export const scenario_snowy_grumph_59_01 = {
	"scenario_id": "snowy_grumph_59_01",
	"order": 1,
	"act": "intro",
	"theme": "snowy",
	"actors": {
		"finn": {
			"id": "mon_3e3930d2-c2d3-4ad0-9818-26d259edac77",
			"name": {
				"korean": "핀",
				"english": "Finn",
				"japanese": "フィン",
				"chinese": "芬恩",
				"french": "Finn",
				"spanish": "Finn",
				"vietnamese": "Finn",
				"thai": "ฟินน์",
				"hindi": "फिन"
			},
			"description": "",
			"face_image_url": "",
			"battle_sprite_url": ""
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
					"speaker": "narrator",
					"content": {
						"korean": "끝없이 펼쳐진 설원. 발자국조차 희미해지는 고독한 길이었다.",
						"english": "An endlessly vast snowfield. A solitary path where even footsteps faded.",
						"japanese": "果てしなく広がる雪原。足跡さえも薄れていく孤独な道だった。",
						"chinese": "一望无际的雪原。连足迹都模糊的孤寂之路。",
						"french": "Une étendue de neige infinie. Un chemin solitaire où même les empreintes de pas s'estompaient.",
						"spanish": "Una vasta extensión de nieve. Un camino solitario donde incluso las huellas se desvanecían.",
						"vietnamese": "Đồng tuyết trải dài vô tận. Một con đường cô độc nơi ngay cả dấu chân cũng mờ nhạt dần.",
						"thai": "ทุ่งหิมะกว้างใหญ่ไร้ที่สิ้นสุด ทางเดินเปลี่ยวเหงาที่แม้แต่รอยเท้าก็จางหายไป",
						"hindi": "एक अंतहीन विशाल बर्फीला मैदान। एक एकाकी रास्ता जहाँ कदमों के निशान भी मिट रहे थे।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "더는 못 가겠어….",
						"english": "I can't go on anymore….",
						"japanese": "もう、これ以上は無理だ…。",
						"chinese": "我走不动了……",
						"french": "Je n'en peux plus….",
						"spanish": "No puedo más….",
						"vietnamese": "Tôi không thể đi tiếp nữa….",
						"thai": "ฉันไปต่อไม่ไหวแล้ว...",
						"hindi": "मैं अब और नहीं चल सकता…।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "finn",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "finn",
					"content": {
						"korean": "겨우 이런 곳에서 포기할 셈인가?",
						"english": "Are you really giving up in a place like this?",
						"japanese": "こんな場所で諦めるつもりか？",
						"chinese": "你打算在这种地方放弃吗？",
						"french": "Vas-tu abandonner dans un endroit pareil ?",
						"spanish": "¿Vas a rendirte en un lugar como este?",
						"vietnamese": "Anh định bỏ cuộc ở một nơi như thế này sao?",
						"thai": "คิดจะยอมแพ้ในที่แบบนี้งั้นเหรอ?",
						"hindi": "क्या तुम बस यहीं हार मान लोगे?"
					},
					"emotion": "base"
				},
				{
					"speaker": "finn",
					"content": {
						"korean": "…저게 뭐지?",
						"english": "…What's that?",
						"japanese": "…あれはなんだ？",
						"chinese": "…那是什么？",
						"french": "…Qu'est-ce que c'est ?",
						"spanish": "¿…Qué es eso?",
						"vietnamese": "…Cái gì kia?",
						"thai": "...นั่นอะไรน่ะ?",
						"hindi": "…वह क्या है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "낡고 해진 모자 하나가 눈밭에 덩그러니 놓여 있었다.",
						"english": "An old, worn-out hat lay solitary in the snow.",
						"japanese": "古びて擦り切れた帽子が一つ、雪の上にぽつんと置かれていた。",
						"chinese": "一顶破旧的帽子孤零零地躺在雪地上。",
						"french": "Un vieux chapeau usé gisait solitaire dans la neige.",
						"spanish": "Un sombrero viejo y gastado yacía solitario en la nieve.",
						"vietnamese": "Một chiếc mũ cũ kỹ, sờn rách nằm đơn độc trên tuyết.",
						"thai": "หมวกเก่าๆ ขาดๆ วางอยู่โดดเดี่ยวกลางหิมะ",
						"hindi": "एक पुरानी, घिसी हुई टोपी बर्फ पर अकेली पड़ी थी।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "내 목소리가 들리나? 나는 이 땅의 주인이다!",
						"english": "Can you hear my voice? I am the master of this land!",
						"japanese": "私の声が聞こえるか？ 私はこの地の主だ！",
						"chinese": "你能听到我的声音吗？我是这片土地的主人！",
						"french": "Entends-tu ma voix ? Je suis le maître de cette terre !",
						"spanish": "¿Oyes mi voz? ¡Soy el dueño de esta tierra!",
						"vietnamese": "Ngươi có nghe thấy giọng nói của ta không? Ta là chủ nhân của vùng đất này!",
						"thai": "ได้ยินเสียงข้าไหม? ข้าคือเจ้าของดินแดนแห่งนี้!",
						"hindi": "क्या तुम्हें मेरी आवाज़ सुनाई दे रही है? मैं इस भूमि का स्वामी हूँ!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "finn",
					"content": {
						"korean": "미쳤군. 이런 황량한 곳에 너무 오래 있었어.",
						"english": "Insane. I've been in this desolate place too long.",
						"japanese": "気が狂いそうだ。こんな荒涼とした場所に長くいすぎた。",
						"chinese": "疯了。我在这片荒凉之地待得太久了。",
						"french": "C'est fou. Je suis resté trop longtemps dans cet endroit désolé.",
						"spanish": "Es una locura. He estado demasiado tiempo en este lugar desolado.",
						"vietnamese": "Điên rồ thật. Tôi đã ở nơi hoang vắng này quá lâu rồi.",
						"thai": "บ้าไปแล้ว ฉันอยู่ในที่รกร้างแห่งนี้นานเกินไปแล้ว",
						"hindi": "पागल हो गया हूँ। मैं इस वीरान जगह में बहुत देर तक रहा हूँ।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "모자가… 말하는 것 같아.",
						"english": "The hat... it seems to be talking.",
						"japanese": "帽子が…喋っているようだ。",
						"chinese": "帽子……好像在说话。",
						"french": "Le chapeau... il semble parler.",
						"spanish": "El sombrero... parece estar hablando.",
						"vietnamese": "Cái mũ... hình như nó đang nói chuyện.",
						"thai": "หมวก... เหมือนมันกำลังพูด",
						"hindi": "टोपी... वह बात कर रही है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "finn",
					"content": {
						"korean": "헛소리 마. 착각일 뿐이야.",
						"english": "Nonsense. It's just your imagination.",
						"japanese": "馬鹿なことを言うな。ただの錯覚だ。",
						"chinese": "胡说。那只是你的错觉。",
						"french": "N'importe quoi. C'est juste ton imagination.",
						"spanish": "Tonterías. Es solo tu imaginación.",
						"vietnamese": "Đừng nói nhảm. Chỉ là ảo giác thôi.",
						"thai": "ไร้สาระ แค่ภาพหลอนเท่านั้น",
						"hindi": "बकवास मत करो। यह सिर्फ तुम्हारा भ्रम है।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "finn",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "finn",
					"content": {
						"korean": "아직도 지껄이고 있군. 대체 뭘 원하는 거지?",
						"english": "Still babbling. What does it want, anyway?",
						"japanese": "まだ喋っているな。一体何を望んでいるんだ？",
						"chinese": "还在唠叨。它到底想要什么？",
						"french": "Il babille toujours. Qu'est-ce qu'il veut, au juste ?",
						"spanish": "Sigue parloteando. ¿Qué quiere, de todos modos?",
						"vietnamese": "Vẫn lảm nhảm. Rốt cuộc nó muốn gì?",
						"thai": "ยังคงพร่ำเพ้ออยู่ มันต้องการอะไรกันแน่?",
						"hindi": "अभी भी बड़बड़ा रहा है। आखिर यह क्या चाहता है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "나는 이 땅의 지배자! 너희는 내 위대한 이야기를 들어야 한다!",
						"english": "I am the ruler of this land! You must hear my great story!",
						"japanese": "我こそがこの地の支配者！貴様らは我が偉大な物語を聞くべきだ！",
						"chinese": "我才是这片土地的统治者！你们必须听我的伟大故事！",
						"french": "Je suis le souverain de cette terre ! Vous devez entendre ma grande histoire !",
						"spanish": "¡Soy el gobernante de esta tierra! ¡Debéis escuchar mi gran historia!",
						"vietnamese": "Ta là kẻ thống trị vùng đất này! Các ngươi phải lắng nghe câu chuyện vĩ đại của ta!",
						"thai": "ข้าคือผู้ปกครองดินแดนนี้! เจ้าต้องฟังเรื่องราวอันยิ่งใหญ่ของข้า!",
						"hindi": "मैं इस भूमि का शासक हूँ! तुम्हें मेरी महान कहानी सुननी होगी!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그냥 버릴까요?",
						"english": "Should we just throw it away?",
						"japanese": "いっそ捨てましょうか？",
						"chinese": "要不，就扔掉吧？",
						"french": "On le jette ?",
						"spanish": "¿Lo tiramos sin más?",
						"vietnamese": "Hay là chúng ta vứt nó đi?",
						"thai": "เราทิ้งมันไปเลยดีไหม?",
						"hindi": "क्या हम इसे फेंक दें?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "finn",
					"content": {
						"korean": "아니. 뭔가 단서가 있을지도 몰라. 이 황량한 곳에서 저런 게 있을 리 없어.",
						"english": "No. There might be a clue. There's no way something like that would be in this desolate place for no reason.",
						"japanese": "いや。何か手がかりがあるかもしれない。こんな荒涼とした場所に、あれがあるはずがない。",
						"chinese": "不。也许有什么线索。在这种荒凉的地方，不可能无缘无故出现那种东西。",
						"french": "Non. Il pourrait y avoir un indice. Il n'y a aucune raison que quelque chose comme ça soit dans cet endroit désolé.",
						"spanish": "No. Podría haber una pista. No es posible que algo así esté en este lugar desolado sin razón.",
						"vietnamese": "Không. Có thể có manh mối nào đó. Không thể nào có thứ như vậy ở nơi hoang vắng này mà không có lý do.",
						"thai": "ไม่ มันอาจจะมีเบาะแส ไม่มีทางที่ของแบบนั้นจะอยู่ในที่รกร้างแห่งนี้โดยไม่มีเหตุผล",
						"hindi": "नहीं। कोई सुराग हो सकता है। ऐसी उजाड़ जगह में ऐसी चीज़ बेवजह नहीं हो सकती।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "근데… 왠지 쓸쓸해 보여요.",
						"english": "But... it looks lonely somehow.",
						"japanese": "でも…なんだか寂しそうに見えます。",
						"chinese": "但是……总觉得它看起来很寂寞。",
						"french": "Mais... il a l'air seul d'une certaine manière.",
						"spanish": "Pero... de alguna manera, parece solitario.",
						"vietnamese": "Nhưng mà... không hiểu sao nó trông cô đơn quá.",
						"thai": "แต่ว่า... ดูเหมือนจะเหงาๆ นะคะ",
						"hindi": "लेकिन... यह किसी तरह अकेला लग रहा है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "finn",
					"content": {
						"korean": "쓸쓸? 정신 차려. 그냥 낡은 모자일 뿐이야.",
						"english": "Lonely? Get a grip. It's just an old hat.",
						"japanese": "寂しい？しっかりしろ。ただの古い帽子だ。",
						"chinese": "寂寞？清醒点。那只是一顶旧帽子。",
						"french": "Seul ? Reprends-toi. Ce n'est qu'un vieux chapeau.",
						"spanish": "¿Solitario? Reacciona. Es solo un sombrero viejo.",
						"vietnamese": "Cô đơn? Tỉnh táo lại đi. Nó chỉ là một cái mũ cũ thôi.",
						"thai": "เหงาเหรอ? ตั้งสติหน่อย มันก็แค่หมวกเก่าๆ ใบหนึ่ง",
						"hindi": "अकेला? होश में आओ। यह सिर्फ एक पुरानी टोपी है।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "finn",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "finn",
					"content": {
						"korean": "더 깊이 들어온 것 같군. 추위가 더 심해졌어.",
						"english": "We seem to have gone deeper. The cold has intensified.",
						"japanese": "もっと奥に入り込んだようだな。寒さが一層厳しくなった。",
						"chinese": "我们似乎走得更深了。寒意更甚了。",
						"french": "On dirait qu'on est allés plus loin. Le froid s'est intensifié.",
						"spanish": "Parece que hemos ido más profundo. El frío se ha intensificado.",
						"vietnamese": "Có vẻ như chúng ta đã đi sâu hơn. Cái lạnh càng trở nên gay gắt.",
						"thai": "ดูเหมือนเราจะเข้ามาลึกขึ้น ความหนาวเย็นรุนแรงขึ้นแล้ว",
						"hindi": "लगता है हम और गहरे आ गए हैं। ठंड और बढ़ गई है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "이 추위조차 내 힘의 일부! 나의 분노가 세상을 얼어붙게 한다!",
						"english": "Even this cold is part of my power! My rage freezes the world!",
						"japanese": "この寒ささえも私の力の一部！私の怒りが世界を凍らせる！",
						"chinese": "连这寒冷都是我力量的一部分！我的愤怒将冻结整个世界！",
						"french": "Même ce froid fait partie de mon pouvoir ! Ma rage gèle le monde !",
						"spanish": "¡Incluso este frío es parte de mi poder! ¡Mi furia congela el mundo!",
						"vietnamese": "Ngay cả cái lạnh này cũng là một phần sức mạnh của ta! Cơn thịnh nộ của ta đóng băng thế giới!",
						"thai": "แม้แต่ความหนาวเย็นนี้ก็เป็นส่วนหนึ่งของพลังข้า! ความพิโรธของข้าจะทำให้โลกเป็นน้ำแข็ง!",
						"hindi": "यह ठंड भी मेरी शक्ति का हिस्सा है! मेरा क्रोध संसार को जमा देता है!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "말이 점점 더 거창해지네요.",
						"english": "Your words are getting grander.",
						"japanese": "話がどんどん大げさになりますね。",
						"chinese": "你的话越来越夸张了。",
						"french": "Vos paroles deviennent de plus en plus grandioses.",
						"spanish": "Sus palabras son cada vez más grandilocuentes.",
						"vietnamese": "Lời nói của ngài càng ngày càng khoa trương.",
						"thai": "คำพูดของคุณดูยิ่งใหญ่ขึ้นเรื่อยๆ นะครับ/คะ",
						"hindi": "आपकी बातें और भी बड़ी होती जा रही हैं।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "finn",
					"content": {
						"korean": "시끄러워. 그냥 오래된 마법 장치겠지.",
						"english": "Quiet. It's just some old magical device.",
						"japanese": "うるさい。ただの古い魔法装置だろう。",
						"chinese": "闭嘴。那不过是某个古老的魔法装置罢了。",
						"french": "Silence. Ce n'est qu'un vieil appareil magique.",
						"spanish": "Cállate. Solo debe ser un viejo aparato mágico.",
						"vietnamese": "Im đi. Chỉ là một thiết bị ma thuật cũ thôi.",
						"thai": "หุบปากน่า ก็แค่อุปกรณ์เวทมนตร์เก่าๆ น่ะสิ",
						"hindi": "चुप रहो। यह बस कोई पुरानी जादुई चीज़ होगी।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "리더님, 아까부터 뭔가 중얼거리는 것 같던데요?",
						"english": "Leader, you've been muttering something for a while, haven't you?",
						"japanese": "リーダー、さっきから何かぶつぶつ言っているようですが？",
						"chinese": "队长，您刚才好像一直在嘀咕什么？",
						"french": "Chef, vous marmonnez quelque chose depuis tout à l'heure, n'est-ce pas ?",
						"spanish": "¿No ha estado murmurando algo desde hace un rato, líder?",
						"vietnamese": "Thưa thủ lĩnh, hình như ngài cứ lẩm bẩm gì đó từ nãy giờ?",
						"thai": "หัวหน้าครับ/คะ ตั้งแต่เมื่อกี้เหมือนคุณพึมพำอะไรบางอย่างเลยนะครับ/คะ",
						"hindi": "लीडर, आप थोड़ी देर से कुछ बड़बड़ा रहे हैं, है ना?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "finn",
					"content": {
						"korean": "…아무것도 아니다. 그저 피곤해서 착각하는 것뿐.",
						"english": "...It's nothing. Just tired and imagining things.",
						"japanese": "…何でもない。ただ疲れていて、錯覚しているだけだ。",
						"chinese": "……没什么。只是累了，产生了错觉而已。",
						"french": "...Ce n'est rien. Juste fatigué et j'imagine des choses.",
						"spanish": "...No es nada. Solo estoy cansado y me lo estoy imaginando.",
						"vietnamese": "...Không có gì. Chỉ là mệt mỏi nên ảo giác thôi.",
						"thai": "...ไม่มีอะไรหรอก แค่เหนื่อยแล้วก็คิดไปเองน่ะ",
						"hindi": "...कुछ नहीं। बस थका हुआ हूँ और भ्रम हो रहा है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "나의 고독을… 감히 너희가 이해할 수 있을까?",
						"english": "My solitude... could you possibly understand it?",
						"japanese": "私の孤独を… お前たちに理解できるだろうか？",
						"chinese": "我的孤独……你们这些凡人，怎能理解？",
						"french": "Ma solitude... pourriez-vous seulement la comprendre ?",
						"spanish": "Mi soledad... ¿acaso podréis entenderla?",
						"vietnamese": "Sự cô độc của ta... liệu các ngươi có thể hiểu được không?",
						"thai": "ความโดดเดี่ยวของข้า... พวกเจ้าจะเข้าใจได้หรือ?",
						"hindi": "मेरी तन्हाई को... क्या तुम कभी समझ पाओगे?"
					},
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "끝없이 이어지는 얼음 동굴. 희미한 빛마저 사라지는 길이었다.",
						"english": "An endlessly stretching ice cavern. It was a path where even faint light vanished.",
						"japanese": "どこまでも続く氷の洞窟。かすかな光さえも消える道だった。",
						"chinese": "无尽绵延的冰洞。这是一条连微弱光芒都会消失的路。",
						"french": "Une caverne de glace s'étendant à l'infini. C'était un chemin où même la lumière la plus faible disparaissait.",
						"spanish": "Una caverna de hielo que se extendía sin fin. Era un camino donde incluso la luz tenue desaparecía.",
						"vietnamese": "Hang băng kéo dài bất tận. Đó là con đường mà ngay cả ánh sáng yếu ớt cũng biến mất.",
						"thai": "ถ้ำน้ำแข็งที่ทอดยาวไม่มีที่สิ้นสุด มันเป็นเส้นทางที่แม้แต่แสงเลือนรางก็ยังเลือนหายไป",
						"hindi": "एक अनंत तक फैली हुई बर्फीली गुफा। यह ऐसा रास्ता था जहाँ हल्की रोशनी भी गायब हो जाती थी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "finn",
					"action": "enter"
				},
				{
					"speaker": "finn",
					"content": {
						"korean": "이제 정말 돌아갈 수 없는 곳까지 온 것 같군.",
						"english": "It seems we've truly reached a point of no return.",
						"japanese": "もう本当に、引き返せないところまで来てしまったようだな。",
						"chinese": "看来我们真的走到无法回头的地方了。",
						"french": "Il semble que nous ayons vraiment atteint un point de non-retour.",
						"spanish": "Parece que realmente hemos llegado a un punto sin retorno.",
						"vietnamese": "Có vẻ như chúng ta đã đến một nơi thực sự không thể quay lại được nữa.",
						"thai": "ดูเหมือนว่าเรามาถึงจุดที่ไม่อาจย้อนกลับได้แล้วจริงๆ",
						"hindi": "ऐसा लगता है कि हम सचमुच ऐसी जगह आ गए हैं जहाँ से वापस नहीं जा सकते।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "돌아갈 곳은 없다! 오직 나만이 이 모든 것을 끝낼 수 있다!",
						"english": "There's no turning back! Only I can end all of this!",
						"japanese": "戻る場所などない！この全てを終わらせられるのは私だけだ！",
						"chinese": "没有退路！只有我才能终结这一切！",
						"french": "Pas de retour en arrière possible ! Moi seul peux mettre fin à tout cela !",
						"spanish": "¡No hay vuelta atrás! ¡Solo yo puedo acabar con todo esto!",
						"vietnamese": "Không có đường quay lại! Chỉ có ta mới có thể kết thúc tất cả chuyện này!",
						"thai": "ไม่มีที่ให้หันหลังกลับ! มีเพียงข้าเท่านั้นที่จะยุติเรื่องทั้งหมดนี้ได้!",
						"hindi": "वापस जाने की कोई जगह नहीं! केवल मैं ही यह सब खत्म कर सकता हूँ!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "정말… 이 모자가 뭔가 가진 걸까요?",
						"english": "Seriously... does this hat really have something?",
						"japanese": "本当に…この帽子、何か持っているんでしょうか？",
						"chinese": "真的……这帽子有什么特别的吗？",
						"french": "Vraiment... ce chapeau aurait-il quelque chose de spécial ?",
						"spanish": "En serio... ¿este sombrero de verdad tiene algo?",
						"vietnamese": "Thật sự... cái mũ này có gì đặc biệt sao?",
						"thai": "จริงๆ แล้ว... หมวกใบนี้มีอะไรบางอย่างอยู่ข้างในรึเปล่า?",
						"hindi": "सच में... क्या इस टोपी में कुछ है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "finn",
					"content": {
						"korean": "…확실히 이상하긴 해.",
						"english": "...It's definitely strange.",
						"japanese": "...確かに奇妙だ。",
						"chinese": "……确实很奇怪。",
						"french": "...C'est étrange, en effet.",
						"spanish": "...Es definitivamente extraño.",
						"vietnamese": "...Chắc chắn là lạ thật.",
						"thai": "...มันแปลกจริง ๆ นั่นแหละ",
						"hindi": "...यह निश्चित रूप से अजीब है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "finn",
					"content": {
						"korean": "잊혀진 기억의 조각들이 떠오르는군. 차가운 얼음처럼 시린…",
						"english": "Fragments of forgotten memories surface. Cold, like chilling ice...",
						"japanese": "忘れられた記憶の断片が浮かび上がる。冷たい氷のように身を切るような…",
						"chinese": "遗忘的记忆碎片浮现。冰冷刺骨，如同寒冰……",
						"french": "Des fragments de souvenirs oubliés refont surface. Froids, comme la glace mordante...",
						"spanish": "Fragmentos de recuerdos olvidados afloran. Fríos, como el hielo cortante...",
						"vietnamese": "Những mảnh ký ức lãng quên ùa về. Lạnh buốt như băng giá...",
						"thai": "เศษเสี้ยวความทรงจำที่ถูกลืมเลือนผุดขึ้นมา หนาวเหน็บราวกับน้ำแข็ง...",
						"hindi": "भूली हुई यादों के टुकड़े उभर रहे हैं। ठंडे, बर्फीले जैसे..."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "감히 나의 과거를 넘보려 하지 마라! 너희는 그저 내 이야기의 일부일 뿐!",
						"english": "Dare not trespass on my past! You are merely a part of my story!",
						"japanese": "よくも私の過去を覗こうとしたな！お前たちは私の物語の一部に過ぎん！",
						"chinese": "竟敢窥探我的过去！你们不过是我故事的一部分！",
						"french": "N'osez pas fouiller mon passé ! Vous n'êtes qu'une partie de mon histoire !",
						"spanish": "¡No oses inmiscuirte en mi pasado! ¡Solo sois una parte de mi historia!",
						"vietnamese": "Đừng hòng xen vào quá khứ của ta! Các ngươi chỉ là một phần câu chuyện của ta mà thôi!",
						"thai": "อย่าบังอาจล่วงละเมิดอดีตของข้า! พวกเจ้าเป็นเพียงส่วนหนึ่งในเรื่องราวของข้าเท่านั้น!",
						"hindi": "मेरे अतीत में झाँकने की हिम्मत मत करो! तुम बस मेरी कहानी का एक हिस्सा हो!"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "마침내 마주한 거대한 그림자. 얼어붙은 동굴의 심장이었다.",
						"english": "Finally, the colossal shadow was revealed. It was the heart of the frozen cave.",
						"japanese": "ついに姿を現した巨大な影。それは凍てついた洞窟の心臓だった。",
						"chinese": "终于，那巨大的身影显现。它是冰冻洞穴的心脏。",
						"french": "Enfin, l'ombre colossale fut révélée. C'était le cœur de la caverne gelée.",
						"spanish": "Finalmente, la sombra colosal se reveló. Era el corazón de la cueva congelada.",
						"vietnamese": "Cuối cùng, bóng tối khổng lồ đã hiện ra. Đó là trái tim của hang động băng giá.",
						"thai": "ในที่สุด เงาขนาดมหึมาก็ปรากฏ มันคือหัวใจของถ้ำน้ำแข็ง",
						"hindi": "अंततः, विशालकाय छाया प्रकट हुई। यह जमी हुई गुफा का दिल था।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "감히 나의 영역을 침범하다니! 어리석은 인간들!",
						"english": "How dare you trespass on my domain! Foolish mortals!",
						"japanese": "よくも私の領域を侵したな！愚かな人間どもめ！",
						"chinese": "竟敢侵犯我的领地！愚蠢的人类！",
						"french": "Comment osez-vous envahir mon domaine ! Mortels insensés !",
						"spanish": "¡Cómo osas invadir mi dominio! ¡Mortales estúpidos!",
						"vietnamese": "Dám cả gan xâm phạm lãnh địa của ta! Loài người ngu ngốc!",
						"thai": "บังอาจบุกรุกอาณาเขตของข้า! มนุษย์โง่เขลา!",
						"hindi": "मेरे क्षेत्र में घुसने की तुम्हारी हिम्मत कैसे हुई! मूर्ख नश्वर प्राणी!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이게… 모자가 말한 그 '위대한 존재'인가?",
						"english": "Is this... the 'Great Being' the Hat spoke of?",
						"japanese": "これが…帽子が言っていた『偉大なる存在』なのか？",
						"chinese": "这……就是帽子所说的那个“伟大存在”吗？",
						"french": "C'est ça... l'«Être Suprême» dont parlait le Chapeau ?",
						"spanish": "¿Es esto... el 'Gran Ser' del que habló el Sombrero?",
						"vietnamese": "Đây... có phải là 'Thực Thể Vĩ Đại' mà Cái Mũ đã nhắc đến?",
						"thai": "นี่คือ... 'สิ่งมีชีวิตผู้ยิ่งใหญ่' ที่หมวกพูดถึงงั้นรึ?",
						"hindi": "क्या यह... वही 'महान अस्तित्व' है जिसकी टोपी ने बात की थी?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "finn",
					"content": {
						"korean": "모자… 네가 꾸민 짓이냐?",
						"english": "Hat... Was this your doing?",
						"japanese": "帽子…お前の仕業か？",
						"chinese": "帽子……这是你搞的鬼吗？",
						"french": "Chapeau... C'est ton œuvre ?",
						"spanish": "Sombrero... ¿Fue obra tuya?",
						"vietnamese": "Cái Mũ... là ngươi giật dây sao?",
						"thai": "หมวก... นี่เป็นฝีมือแกงั้นรึ?",
						"hindi": "टोपी... क्या यह तुम्हारा काम है?"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "나는 {random_boss}! 이 숲의 진정한 지배자! 너희는 내 분노의 제물이 될 것이다!",
						"english": "I am {random_boss}! The true ruler of this forest! You shall be sacrifices to my wrath!",
						"japanese": "我は{random_boss}！この森の真の支配者なり！お前たちは我が怒りの生贄となるのだ！",
						"chinese": "吾乃{random_boss}！这片森林的真正主宰！你们将成为我怒火的祭品！",
						"french": "Je suis {random_boss} ! Le véritable souverain de cette forêt ! Vous serez les sacrifices de ma colère !",
						"spanish": "¡Yo soy {random_boss}! ¡El verdadero señor de este bosque! ¡Seréis sacrificios de mi ira!",
						"vietnamese": "Ta là {random_boss}! Kẻ thống trị thực sự của khu rừng này! Các ngươi sẽ là vật tế cho cơn thịnh nộ của ta!",
						"thai": "ข้าคือ {random_boss}! ผู้ปกครองที่แท้จริงของป่าแห่งนี้! พวกเจ้าจะต้องเป็นเครื่องสังเวยแห่งความพิโรธของข้า!",
						"hindi": "मैं {random_boss} हूँ! इस जंगल का असली शासक! तुम मेरी क्रोध की बलि बनोगे!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "finn",
					"content": {
						"korean": "헛소리 마. 더 이상 속지 않아!",
						"english": "Enough nonsense. I won't be fooled again!",
						"japanese": "戯言はよせ。もう騙されない！",
						"chinese": "别胡说八道。我不会再上当了！",
						"french": "Assez de bêtises. Je ne me laisserai plus berner !",
						"spanish": "Basta de tonterías. ¡Ya no me engañarás!",
						"vietnamese": "Đừng nói nhảm. Ta sẽ không bị lừa nữa đâu!",
						"thai": "หยุดพูดเหลวไหล ข้าไม่หลงกลอีกแล้ว!",
						"hindi": "बकवास बंद करो। मैं अब और बेवकूफ नहीं बनूंगा!"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 서서히 흩어졌다. 싸움은 끝났지만, 모든 것이 끝난 것은 아니었다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 인간들… 하지만 나의 이야기는… 끝나지 않아…!"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이겼다…?"
					},
					"emotion": "base"
				},
				{
					"speaker": "finn",
					"content": {
						"korean": "아니. 이건 시작에 불과해. 잊혀진 비극은… 아직 끝나지 않았다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "차가운 설원은 여전히 침묵했지만, 핀의 가슴속에는 새로운 의지가 타올랐다."
					},
					"emotion": "base"
				}
			],
			"dialogue": [],
			"id": 15
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "절망적인 힘 앞에 모든 것이 얼어붙었다."
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "내 힘에 감히 맞서려 하다니. 재밌군. 다음엔 더 비참하게 쓰러질 것이다!"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 아직은 무리인가."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "finn",
					"content": {
						"korean": "포기하지 않아… 반드시 진실을 밝혀낼 것이다."
					},
					"emotion": "angry"
				}
			],
			"dialogue": [],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"매서운 눈보라가 몰아치는 북방 설원. 희망마저 얼어붙은 땅.",
			"탐험대 리더 핀은 그저 혹독한 추위가 끝이기를 바랐다.",
			"그러나 그가 발견한 것은 — 낡고 투덜거리는 모자였다.",
			"그리고 그 안에는, 잊혀진 비극의 메아리가 잠들어 있었다."
		],
		"english": [
			"A harsh blizzard rages across the northern snowfield. A land where even hope is frozen.",
			"Finn, leader of the expedition, only wished for the brutal cold to end.",
			"But what he found was — an old, grumbling hat.",
			"And within it, the echo of a forgotten tragedy lay dormant."
		],
		"japanese": [
			"猛烈な吹雪が吹き荒れる北方の雪原。希望さえ凍てついた地。",
			"探検隊リーダーのフィンは、ただただ厳しい寒さが終わることを願っていた。",
			"しかし彼が発見したのは — 古びてぶつぶつと文句を言う帽子だった。",
			"そしてその中には、忘れ去られた悲劇のこだまが眠っていた。"
		],
		"chinese": [
			"严酷的暴风雪席卷北方雪原。连希望都被冻结的土地。",
			"探险队领队芬，只盼望这严酷的寒冷能早日结束。",
			"然而他发现的 — 是一顶破旧又嘀嘀咕咕的帽子。",
			"而其中，沉睡着被遗忘悲剧的回声。"
		],
		"french": [
			"Une violente tempête de neige fait rage dans les étendues enneigées du nord. Une terre où même l'espoir est gelé.",
			"Finn, le chef de l'expédition, ne souhaitait que la fin de ce froid brutal.",
			"Mais ce qu'il découvrit fut — un vieux chapeau grognon.",
			"Et en son sein, l'écho d'une tragédie oubliée sommeillait."
		],
		"spanish": [
			"Una cruda tormenta de nieve azota los campos nevados del norte. Una tierra donde incluso la esperanza está congelada.",
			"Finn, el líder de la expedición, solo deseaba que el crudo frío terminara.",
			"Pero lo que encontró fue — un sombrero viejo y gruñón.",
			"Y dentro de él, el eco de una tragedia olvidada yacía latente."
		],
		"vietnamese": [
			"Bão tuyết khắc nghiệt hoành hành khắp vùng tuyết phía bắc. Một vùng đất nơi ngay cả hy vọng cũng đóng băng.",
			"Finn, thủ lĩnh đoàn thám hiểm, chỉ mong cái lạnh tàn khốc này mau kết thúc.",
			"Nhưng điều anh ấy tìm thấy là — một chiếc mũ cũ kỹ, lầm bầm.",
			"Và bên trong đó, tiếng vọng của một bi kịch bị lãng quên đang ngủ yên."
		],
		"thai": [
			"พายุหิมะที่รุนแรงพัดกระหน่ำทุ่งหิมะทางเหนือ ดินแดนที่แม้แต่ความหวังก็ถูกแช่แข็ง",
			"ฟินน์ ผู้นำคณะสำรวจ เพียงแค่หวังให้ความหนาวเหน็บอันโหดร้ายนี้สิ้นสุดลง",
			"แต่สิ่งที่เขาพบคือ — หมวกเก่าๆ ที่บ่นพึมพำ",
			"และภายในนั้น เสียงสะท้อนของโศกนาฏกรรมที่ถูกลืมเลือนได้หลับใหลอยู่"
		],
		"hindi": [
			"उत्तरी बर्फीले मैदान में भीषण बर्फीला तूफ़ान raging है। एक ऐसी भूमि जहाँ आशा भी जम गई है。",
			"अभियान दल के नेता फिन, बस इस भीषण ठंड के खत्म होने की कामना कर रहे थे।",
			"लेकिन जो उसने पाया वह थी — एक पुरानी, बड़बड़ाती हुई टोपी।",
			"और उसके भीतर, एक भूली हुई त्रासदी की गूँज सोई हुई थी।"
		]
	}
} as const;
