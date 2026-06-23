export const scenario_desert_cactoblade_6_02 = {
	"scenario_id": "desert_cactoblade_6_02",
	"order": 2,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"amir": {
			"id": "mon_0096d602-52ab-4a9c-9cc8-4ff18ed3b655",
			"name": {
				"korean": "아미르",
				"english": "Amir",
				"japanese": "アミール",
				"chinese": "阿米尔",
				"french": "Amir",
				"spanish": "Amir",
				"vietnamese": "Amir",
				"thai": "อาเมียร์",
				"hindi": "अमीर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8cd60fb0-3699-44c4-6425-a3e97eec1800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/b644dc95-9c27-442e-6dc6-73e5550a0200/public"
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
						"korean": "끝없이 펼쳐진 모래 언덕. 그 끝에 희미한 초록이 보였다.",
						"english": "Endless sand dunes stretched out. At their end, a faint green was visible.",
						"japanese": "どこまでも広がる砂丘。その果てに、かすかな緑が見えた。",
						"chinese": "一望无际的沙丘。尽头处，隐约可见一片绿色。",
						"french": "Des dunes de sable infinies. Au loin, une lueur verte.",
						"spanish": "Dunas de arena interminables. Al final, se vislumbraba un tenue verdor.",
						"vietnamese": "Những cồn cát trải dài vô tận. Cuối cùng, một màu xanh lờ mờ hiện ra.",
						"thai": "เนินทรายที่ทอดยาวสุดลูกหูลูกตา ณ สุดปลายนั้น มีสีเขียวจางๆ ปรากฏขึ้น",
						"hindi": "अंतहीन रेत के टीले फैले हुए थे। उनके अंत में, हल्की हरियाली दिख रही थी।"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "amir",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이곳이 바로 '환영의 오아시스'. 잠시 쉬어가시죠.",
						"english": "This is the 'Oasis of Illusions'. Please, rest a while.",
						"japanese": "ここがまさに「幻影のオアシス」。どうぞ、しばらくお休みください。",
						"chinese": "这里就是“幻影绿洲”。请您稍作休息。",
						"french": "Voici l'« Oasis des Illusions ». Reposez-vous un instant.",
						"spanish": "Este es el 'Oasis de las Ilusiones'. Por favor, descanse un momento.",
						"vietnamese": "Đây chính là 'Ốc đảo Ảo ảnh'. Xin mời, hãy nghỉ ngơi một lát.",
						"thai": "ที่นี่คือ 'โอเอซิสมายา' เชิญพักผ่อนสักครู่",
						"hindi": "यह है 'भ्रम का नखलिस्तान'। कृपया, थोड़ी देर आराम करें।"
					},
					"emotion": "happy",
					"speaker": "amir",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "happy",
					"content": {
						"korean": "정말 고마워요, 아미르.",
						"english": "Thank you very much, Amir.",
						"japanese": "本当にありがとう、アミール。",
						"chinese": "非常感谢，阿米尔。",
						"french": "Merci beaucoup, Amir.",
						"spanish": "Muchas gracias, Amir.",
						"vietnamese": "Cảm ơn anh rất nhiều, Amir.",
						"thai": "ขอบคุณมากค่ะ/ครับ อาเมียร์",
						"hindi": "आपका बहुत-बहुत धन्यवाद, अमीर।"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "달콤한 물이 목을 적셨다. 그러나 왠지 모르게, 기운이 빠지는 느낌이었다.",
						"english": "Sweet water quenched my thirst. But somehow, I felt my strength draining.",
						"japanese": "甘い水が喉を潤した。しかし、なぜか、力が抜けていくような感覚だった。",
						"chinese": "甘甜的水润泽了喉咙。但不知为何，却感到力气正在流失。",
						"french": "Une eau douce me désaltéra. Mais étrangement, je me sentais faiblir.",
						"spanish": "Agua dulce me sació la sed. Pero, por alguna razón, sentí que mis fuerzas se agotaban.",
						"vietnamese": "Nước ngọt làm dịu cơn khát. Nhưng không hiểu sao, tôi lại cảm thấy mất hết sức lực.",
						"thai": "น้ำหวานชโลมลำคอ ทว่าไม่รู้ทำไม กลับรู้สึกว่าเรี่ยวแรงกำลังจะหมดลง",
						"hindi": "मीठे पानी ने प्यास बुझाई। लेकिन किसी कारण से, मुझे लगा कि मेरी ताकत कम हो रही है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "…이상하다. 오히려 더 목마른 것 같아.",
						"english": "...Strange. I feel even thirstier.",
						"japanese": "…おかしい。むしろ、もっと喉が渇くような。",
						"chinese": "……奇怪。反而感觉更渴了。",
						"french": "...Bizarre. J'ai l'impression d'avoir encore plus soif.",
						"spanish": "...Extraño. Parece que tengo aún más sed.",
						"vietnamese": "...Kì lạ thật. Ngược lại, tôi cảm thấy khát hơn.",
						"thai": "...แปลกจัง กลับรู้สึกกระหายมากกว่าเดิมอีก",
						"hindi": "...अजीब है। मुझे तो और प्यास लग रही है।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "오랜 여정 탓이겠죠. 곧 괜찮아질 겁니다.",
						"english": "It must be due to the long journey. You'll be fine soon.",
						"japanese": "長旅のせいでしょう。すぐに大丈夫になりますよ。",
						"chinese": "应该是长途跋涉的缘故。很快就会好起来的。",
						"french": "C'est sûrement la faute du long voyage. Tout ira bien bientôt.",
						"spanish": "Debe ser por el largo viaje. Pronto se sentirá mejor.",
						"vietnamese": "Chắc là do chuyến đi dài. Anh/chị sẽ sớm ổn thôi.",
						"thai": "คงเป็นเพราะการเดินทางที่ยาวนาน เดี๋ยวก็จะดีขึ้นเอง",
						"hindi": "यह लंबी यात्रा की वजह से होगा। आप जल्द ही ठीक हो जाएंगे।"
					},
					"speaker": "amir",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "amir",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이 사막에는 저주받은 영혼들이 고통받고 있습니다.",
						"english": "Cursed souls suffer in this desert.",
						"japanese": "この砂漠には呪われた魂が苦しんでいます。",
						"chinese": "这片沙漠里，受诅咒的灵魂正在受苦。",
						"french": "Des âmes maudites souffrent dans ce désert.",
						"spanish": "Almas malditas sufren en este desierto.",
						"vietnamese": "Những linh hồn bị nguyền rủa đang đau khổ trong sa mạc này.",
						"thai": "วิญญาณต้องสาปกำลังทนทุกข์ทรมานอยู่ในทะเลทรายแห่งนี้",
						"hindi": "इस रेगिस्तान में शापित आत्माएं पीड़ा झेल रही हैं।"
					},
					"emotion": "sad",
					"speaker": "amir",
					"type": "speech"
				},
				{
					"content": {
						"korean": "저주받은 영혼들이요?",
						"english": "Cursed souls?",
						"japanese": "呪われた魂、ですか？",
						"chinese": "受诅咒的灵魂？",
						"french": "Des âmes maudites ?",
						"spanish": "¿Almas malditas?",
						"vietnamese": "Linh hồn bị nguyền rủa?",
						"thai": "วิญญาณต้องสาปหรือ?",
						"hindi": "शापित आत्माएं?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "amir",
					"emotion": "base",
					"content": {
						"korean": "네. 그들을 해방시키려면 특정 유물을 찾아야 합니다.",
						"english": "Yes. To free them, we must find a specific artifact.",
						"japanese": "はい。彼らを解放するには、特定の遺物を見つける必要があります。",
						"chinese": "是的。要解放它们，我们必须找到一件特定的遗物。",
						"french": "Oui. Pour les libérer, nous devons trouver un artefact spécifique.",
						"spanish": "Sí. Para liberarlas, debemos encontrar un artefacto específico.",
						"vietnamese": "Vâng. Để giải thoát họ, chúng ta phải tìm một di vật cụ thể.",
						"thai": "ใช่ เพื่อปลดปล่อยพวกเขา เราต้องค้นหาสิ่งประดิษฐ์บางอย่าง",
						"hindi": "हाँ। उन्हें मुक्त करने के लिए, हमें एक विशिष्ट कलाकृति ढूंढनी होगी।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "우리가 그걸 찾아야 한다는 말인가요?",
						"english": "You mean we have to find it?",
						"japanese": "私たちがそれを見つけなければならないのですか？",
						"chinese": "您是说，我们得找到它？",
						"french": "Vous voulez dire que nous devons le trouver ?",
						"spanish": "¿Quiere decir que tenemos que encontrarlo?",
						"vietnamese": "Ý ông là chúng ta phải tìm nó sao?",
						"thai": "หมายความว่าเราต้องหามันหรือ?",
						"hindi": "क्या हमें उसे ढूंढना होगा?"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "선택은 당신의 몫. 하지만, 이대로 둘 수는 없죠.",
						"english": "The choice is yours. But we can't leave them like this.",
						"japanese": "選択はあなた次第です。しかし、このまま放っておくことはできません。",
						"chinese": "选择权在你。但我们不能袖手旁观。",
						"french": "Le choix vous appartient. Mais nous ne pouvons pas les laisser ainsi.",
						"spanish": "La elección es tuya. Pero no podemos dejarlas así.",
						"vietnamese": "Quyết định là của bạn. Nhưng chúng ta không thể để mọi chuyện như thế này.",
						"thai": "การตัดสินใจขึ้นอยู่กับคุณ แต่เราปล่อยพวกเขาไว้แบบนี้ไม่ได้",
						"hindi": "चुनाव आपका है। लेकिन हम उन्हें ऐसे ही नहीं छोड़ सकते।"
					},
					"speaker": "amir",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "제가 안내하겠습니다. 저와 함께 가시죠.",
						"english": "I'll guide you. Come with me.",
						"japanese": "私が案内します。私と一緒に行きましょう。",
						"chinese": "我来带路吧。跟我来。",
						"french": "Je vous guiderai. Venez avec moi.",
						"spanish": "Yo te guiaré. Ven conmigo.",
						"vietnamese": "Tôi sẽ dẫn đường. Hãy đi cùng tôi.",
						"thai": "ฉันจะนำทางไป มากับฉันเถอะ",
						"hindi": "मैं आपका मार्गदर्शन करूँगा। मेरे साथ आओ।"
					},
					"emotion": "happy",
					"speaker": "amir"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "amir",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "길가에 기이한 모래 조각상들이 나타났다. 고통받는 사람들의 모습을 익살스럽게 재현한 듯했다.",
						"english": "Strange sand sculptures appeared by the roadside, comically mimicking the forms of suffering people.",
						"japanese": "道端に奇妙な砂の彫像が現れた。苦しむ人々の姿をコミカルに再現したようだった。",
						"chinese": "路边出现了奇异的沙雕。它们滑稽地再现了受苦之人的姿态。",
						"french": "D'étranges sculptures de sable sont apparues au bord de la route, reproduisant de manière grotesque les formes de personnes en souffrance.",
						"spanish": "Extrañas esculturas de arena aparecieron al borde del camino, imitando cómicamente las formas de personas sufriendo.",
						"vietnamese": "Những bức tượng cát kỳ lạ xuất hiện ven đường, dường như tái hiện một cách hài hước hình dáng của những người đang đau khổ.",
						"thai": "ประติมากรรมทรายประหลาดปรากฏขึ้นข้างทาง ดูเหมือนจะล้อเลียนรูปร่างของผู้คนที่กำลังทนทุกข์",
						"hindi": "रास्ते में अजीब रेत की मूर्तियाँ दिखाई दीं। वे दुख में डूबे लोगों की आकृतियों को हास्यास्पद रूप से दर्शा रही थीं।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "이건… 대체 뭐죠?",
						"english": "What in the world is this...?",
						"japanese": "これ…一体何でしょう？",
						"chinese": "这到底是什么…？",
						"french": "Qu'est-ce que c'est que ça... ?",
						"spanish": "¿Qué demonios es esto...?",
						"vietnamese": "Cái này... rốt cuộc là gì vậy?",
						"thai": "นี่มัน... อะไรกันแน่?",
						"hindi": "यह... आखिर क्या है?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "amir",
					"content": {
						"korean": "사막 정령의 장난이겠죠. 신경 쓰지 마십시오.",
						"english": "It's probably the desert spirits' prank. Don't mind them.",
						"japanese": "砂漠の精霊のいたずらでしょう。気になさらないでください。",
						"chinese": "这大概是沙漠精灵的恶作剧吧。别在意。",
						"french": "Ce sont probablement les farces des esprits du désert. N'y prêtez pas attention.",
						"spanish": "Probablemente sea una broma de los espíritus del desierto. No les prestes atención.",
						"vietnamese": "Chắc là trò đùa của linh hồn sa mạc thôi. Đừng bận tâm.",
						"thai": "คงเป็นเรื่องแกล้งของภูตทะเลทรายน่ะ อย่าไปสนใจเลย",
						"hindi": "यह शायद रेगिस्तानी आत्माओं की शरारत है। ध्यान मत दो।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "근데 이 근처 식물들도… 뭔가 뒤틀려 보이는군요.",
						"english": "But even the plants nearby... they look somehow distorted.",
						"japanese": "でも、この辺りの植物も…何だか歪んで見えますね。",
						"chinese": "不过，这附近的植物也…看起来有些扭曲。",
						"french": "Mais même les plantes aux alentours... elles semblent étrangement déformées.",
						"spanish": "Pero incluso las plantas cercanas... parecen algo distorsionadas.",
						"vietnamese": "Nhưng ngay cả thực vật gần đây... trông cũng có vẻ méo mó.",
						"thai": "แต่พืชแถวนี้ก็... ดูบิดเบี้ยวไปหมดเลยนะ",
						"hindi": "लेकिन आस-पास के पौधे भी... कुछ मुड़े हुए लग रहे हैं।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "사막의 환경은 가혹합니다. 연약한 것들은 버티지 못하죠.",
						"english": "The desert environment is harsh. The weak cannot endure.",
						"japanese": "砂漠の環境は過酷だ。か弱いものは耐えられない。",
						"chinese": "沙漠环境严酷。弱者无法承受。",
						"french": "L'environnement désertique est rude. Les faibles ne peuvent pas y survivre.",
						"spanish": "El entorno desértico es duro. Los débiles no pueden soportarlo.",
						"vietnamese": "Môi trường sa mạc khắc nghiệt. Kẻ yếu không thể chịu đựng được.",
						"thai": "สภาพแวดล้อมในทะเลทรายโหดร้าย สิ่งที่อ่อนแอไม่อาจทนอยู่ได้",
						"hindi": "रेगिस्तानी माहौल कठोर है। कमज़ोर लोग इसे बर्दाश्त नहीं कर सकते।"
					},
					"emotion": "base",
					"speaker": "amir",
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
					"speaker": "amir",
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "조각상들은 더욱 기괴해졌다. 아미르의 미소는 어딘가 섬뜩했다.",
						"english": "The statues grew more grotesque. Amir's smile was unsettling.",
						"japanese": "彫像はさらに奇怪になった。アミールの微笑みはどこか不気味だった。",
						"chinese": "雕像变得更加怪异。阿米尔的笑容有些令人毛骨悚然。",
						"french": "Les statues devinrent plus grotesques. Le sourire d'Amir était quelque peu sinistre.",
						"spanish": "Las estatuas se volvieron más grotescas. La sonrisa de Amir era inquietante.",
						"vietnamese": "Các bức tượng trở nên kỳ quái hơn. Nụ cười của Amir có gì đó rợn người.",
						"thai": "รูปปั้นยิ่งประหลาดพิสดารมากขึ้น รอยยิ้มของอามีร์ดูน่าขนลุกบางอย่าง",
						"hindi": "मूर्तियाँ और विकृत होती गईं। अमीर की मुस्कान कुछ अजीब थी।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아미르, 당신을 믿어도 될까요?",
						"english": "Amir, can I trust you?",
						"japanese": "アミール、あなたを信じてもいいの？",
						"chinese": "阿米尔，我能相信你吗？",
						"french": "Amir, puis-je vous faire confiance ?",
						"spanish": "¿Amir, puedo confiar en ti?",
						"vietnamese": "Amir, tôi có thể tin anh không?",
						"thai": "อามีร์ ฉันจะเชื่อใจคุณได้ไหม?",
						"hindi": "अमीर, क्या मैं तुम पर भरोसा कर सकता हूँ?"
					},
					"emotion": "sad"
				},
				{
					"speaker": "amir",
					"emotion": "base",
					"content": {
						"korean": "하하, 저를 의심하는군요. 하지만 진실은 곧 밝혀질 겁니다.",
						"english": "Haha, you doubt me. But the truth will soon be revealed.",
						"japanese": "ハハ、私を疑うのか。だが、真実はすぐに明らかになるだろう。",
						"chinese": "哈哈，你怀疑我。但真相很快就会大白。",
						"french": "Haha, vous doutez de moi. Mais la vérité sera bientôt révélée.",
						"spanish": "Jaja, dudas de mí. Pero la verdad pronto saldrá a la luz.",
						"vietnamese": "Haha, ngươi nghi ngờ ta. Nhưng sự thật sẽ sớm được tiết lộ thôi.",
						"thai": "ฮ่าฮ่า คุณสงสัยผม แต่ความจริงจะถูกเปิดเผยในไม่ช้า",
						"hindi": "हाहा, तुम मुझ पर शक कर रहे हो। लेकिन सच्चाई जल्द ही सामने आ जाएगी।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "진실…이요?",
						"english": "Truth...?",
						"japanese": "真実…ですか？",
						"chinese": "真相…？",
						"french": "La vérité... ?",
						"spanish": "¿La verdad...?",
						"vietnamese": "Sự thật…?",
						"thai": "ความจริง...เหรอ?",
						"hindi": "सच्चाई...?"
					}
				},
				{
					"speaker": "amir",
					"emotion": "happy",
					"content": {
						"korean": "네. 저 너머에, 당신이 찾는 답이 있습니다.",
						"english": "Yes. Beyond that, lies the answer you seek.",
						"japanese": "はい。その先に、あなたが探している答えがあります。",
						"chinese": "是的。在那边，有你正在寻找的答案。",
						"french": "Oui. Au-delà, se trouve la réponse que vous cherchez.",
						"spanish": "Sí. Más allá, está la respuesta que buscas.",
						"vietnamese": "Vâng. Phía bên kia, có câu trả lời mà bạn đang tìm kiếm.",
						"thai": "ใช่ค่ะ ที่นั่นมีคำตอบที่คุณกำลังมองหา",
						"hindi": "हाँ। उस पार, तुम्हें वह जवाब मिलेगा जो तुम ढूँढ रहे हो।"
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "점점 더 깊은 곳으로. 알 수 없는 불안감이 덮쳐왔다.",
						"english": "Deeper and deeper. An unknown unease washed over me.",
						"japanese": "ますます深い場所へ。得体の知れない不安感が押し寄せた。",
						"chinese": "越来越深。一种莫名的不安感袭来。",
						"french": "De plus en plus profond. Une inquiétude inconnue m'envahit.",
						"spanish": "Cada vez más profundo. Una inquietud desconocida me invadió.",
						"vietnamese": "Càng lúc càng sâu hơn. Một cảm giác bất an không tên ập đến.",
						"thai": "ลึกลงไปเรื่อยๆ ความรู้สึกไม่สบายใจที่ไม่รู้จักเข้าปกคลุม",
						"hindi": "और गहरा, और गहरा। एक अनजाना डर छा गया।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "amir",
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이제, 당신의 힘을 보여줄 때입니다.",
						"english": "Now, it's time to show your power.",
						"japanese": "さあ、あなたの力を見せる時だ。",
						"chinese": "现在，是时候展示你的力量了。",
						"french": "Maintenant, il est temps de montrer votre pouvoir.",
						"spanish": "Ahora, es el momento de mostrar tu poder.",
						"vietnamese": "Bây giờ, là lúc để thể hiện sức mạnh của bạn.",
						"thai": "ถึงเวลาที่จะแสดงพลังของคุณแล้ว",
						"hindi": "अब, अपनी शक्ति दिखाने का समय है।"
					},
					"speaker": "amir"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 모래 폭풍 속에서 모습을 드러냈다.",
						"english": "A colossal shadow emerged from the sandstorm.",
						"japanese": "巨大な影が砂嵐の中から姿を現した。",
						"chinese": "一个巨大的身影从沙尘暴中显现出来。",
						"french": "Une ombre colossale émergea de la tempête de sable.",
						"spanish": "Una sombra colosal emergió de la tormenta de arena.",
						"vietnamese": "Một bóng đen khổng lồ hiện ra từ trong bão cát.",
						"thai": "เงาขนาดมหึมาปรากฏขึ้นจากพายุทราย",
						"hindi": "एक विशाल छाया रेतीले तूफान से निकली।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…건방진 침입자들. 이 땅의 고통을 알지도 못하고.",
						"english": "...Arrogant intruders. Ignorant of this land's suffering.",
						"japanese": "…傲慢な侵入者たちめ。この地の苦痛を知りもせずに。",
						"chinese": "……傲慢的入侵者。对这片土地的痛苦一无所知。",
						"french": "...Intrus arrogants. Ignorants de la souffrance de cette terre.",
						"spanish": "...Intrusos arrogantes. Ignorantes del sufrimiento de esta tierra.",
						"vietnamese": "...Những kẻ xâm nhập kiêu ngạo. Không hề hay biết nỗi đau của vùng đất này.",
						"thai": "...ผู้บุกรุกที่โอหัง ไม่รู้จักความทุกข์ทรมานของดินแดนนี้",
						"hindi": "...घमंडी घुसपैठिए। इस ज़मीन के दुख को जानते भी नहीं।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "당신이 저주받은 영혼들을 가둔 건가!",
						"english": "Did you trap the cursed souls?!",
						"japanese": "あなたが呪われた魂を閉じ込めたのか！",
						"chinese": "是你囚禁了这些被诅咒的灵魂吗？！",
						"french": "C'est toi qui as emprisonné les âmes maudites？！",
						"spanish": "¿Fuiste tú quien atrapó las almas malditas?",
						"vietnamese": "Ngươi đã giam cầm những linh hồn bị nguyền rủa sao?!",
						"thai": "เจ้าเป็นผู้กักขังวิญญาณต้องสาปหรือ!",
						"hindi": "क्या तुमने ही शापित आत्माओं को कैद किया है?!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "고통? 그것이야말로 이 땅의 본질이다.",
						"english": "Pain? That is the very essence of this land.",
						"japanese": "苦痛？それこそがこの地の本質だ。",
						"chinese": "痛苦？那才是这片土地的本质。",
						"french": "La douleur？ C'est l'essence même de cette terre.",
						"spanish": "¿Dolor? Esa es la verdadera esencia de esta tierra.",
						"vietnamese": "Đau khổ? Đó chính là bản chất của vùng đất này.",
						"thai": "ความเจ็บปวดรึ? นั่นแหละคือแก่นแท้ของดินแดนนี้",
						"hindi": "दर्द? वही इस भूमि का सार है।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "자, 망설이지 마세요. 당신의 정의를 보여주십시오.",
						"english": "Come, do not hesitate. Show us your justice.",
						"japanese": "さあ、ためらわないで。あなたの正義を見せてください。",
						"chinese": "来吧，别再犹豫了。展现你的正义吧。",
						"french": "Allons, n'hésite pas. Montre-nous ta justice.",
						"spanish": "Vamos, no dudes. Muéstranos tu justicia.",
						"vietnamese": "Nào, đừng do dự. Hãy thể hiện công lý của ngươi đi.",
						"thai": "มาเถิด อย่าลังเลเลย แสดงความยุติธรรมของเจ้าให้ดู",
						"hindi": "आओ, संकोच मत करो। अपना न्याय दिखाओ।"
					},
					"speaker": "amir"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은… {random_boss}는… 사라지지 않는다….",
						"english": "Foolish… {random_boss}… will not vanish….",
						"japanese": "愚かな… {random_boss}は… 消えぬ…。",
						"chinese": "愚蠢… {random_boss}… 不会消失…。",
						"french": "Insensé… {random_boss}… ne disparaîtra pas….",
						"spanish": "Estúpido… {random_boss}… no desaparecerá….",
						"vietnamese": "Ngu xuẩn… {random_boss}… sẽ không biến mất đâu….",
						"thai": "โง่เขลา… {random_boss}… ไม่มีวันหายไป….",
						"hindi": "मूर्ख… {random_boss}… मिटेगा नहीं…।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "…끝난 건가?",
						"english": "…Is it over?",
						"japanese": "…終わったのか？",
						"chinese": "…结束了吗？",
						"french": "…C'est fini ?",
						"spanish": "…¿Se acabó?",
						"vietnamese": "…Kết thúc rồi sao?",
						"thai": "…จบแล้วหรือ?",
						"hindi": "…क्या यह खत्म हो गया?"
					}
				},
				{
					"duration_ms": 500,
					"speaker": "amir",
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "base",
					"content": {
						"korean": "아닙니다. 이건 시작에 불과하죠. 진정한 유물은, 아직 우리 손에 없습니다.",
						"english": "No. This is just the beginning. The true artifact is not yet in our hands.",
						"japanese": "いいえ。これは始まりに過ぎません。真の遺物は、まだ我々の手にはありません。",
						"chinese": "不。这只是个开始。真正的遗物，还没在我们手中。",
						"french": "Non. Ce n'est que le début. Le véritable artefact n'est pas encore entre nos mains.",
						"spanish": "No. Esto es solo el principio. El verdadero artefacto aún no está en nuestras manos.",
						"vietnamese": "Không. Đây chỉ là khởi đầu thôi. Bảo vật thực sự vẫn chưa nằm trong tay chúng ta.",
						"thai": "ไม่ใช่. นี่เป็นเพียงจุดเริ่มต้นเท่านั้น ของจริงยังไม่ได้อยู่ในมือเราเลย.",
						"hindi": "नहीं। यह तो बस शुरुआत है। असली कलाकृति अभी हमारे हाथ में नहीं है।"
					},
					"speaker": "amir",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "모래 폭풍은 잠시 잦아들었지만, 아미르의 미소는 더 깊어졌다. 끝나지 않은 여정.",
						"english": "The sandstorm briefly subsided, but Amir's smile deepened. The journey is not over.",
						"japanese": "砂嵐は一時的に収まったが、アミールの笑みはさらに深まった。終わらない旅。",
						"chinese": "沙尘暴暂时平息，但阿米尔的笑容却更深了。未完的旅程。",
						"french": "La tempête de sable s'est brièvement calmée, mais le sourire d'Amir s'est approfondi. Le voyage n'est pas terminé.",
						"spanish": "La tormenta de arena amainó brevemente, pero la sonrisa de Amir se hizo más profunda. El viaje no ha terminado.",
						"vietnamese": "Bão cát tạm lắng xuống, nhưng nụ cười của Amir lại sâu hơn. Cuộc hành trình chưa kết thúc.",
						"thai": "พายุทรายสงบลงชั่วคราว แต่รอยยิ้มของอามีร์กลับลึกซึ้งยิ่งขึ้น การเดินทางที่ยังไม่สิ้นสุด.",
						"hindi": "रेतीला तूफान कुछ देर के लिए थम गया, लेकिन अमीर की मुस्कान और गहरी हो गई। अधूरी यात्रा।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "후회할 것이다. 이곳에서 영원히 고통받으리라.",
						"english": "You will regret this. Suffer eternally in this place.",
						"japanese": "後悔するだろう。ここで永遠に苦しむがいい。",
						"chinese": "你会后悔的。你将永远在这里受苦。",
						"french": "Tu le regretteras. Tu souffriras éternellement ici.",
						"spanish": "Te arrepentirás. Sufrirás eternamente en este lugar.",
						"vietnamese": "Ngươi sẽ phải hối hận. Ngươi sẽ phải chịu đựng đau khổ vĩnh viễn ở nơi này.",
						"thai": "เจ้าจะต้องเสียใจ เจ้าจะทรมานชั่วนิรันดร์ที่นี่.",
						"hindi": "तुम्हें पछताना पड़ेगा। तुम यहाँ हमेशा के लिए पीड़ित रहोगे।"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…아직, 포기할 수 없어!",
						"english": "…Not yet, I can't give up!",
						"japanese": "…まだ、諦められない！",
						"chinese": "…还不能放弃！",
						"french": "…Pas encore, je ne peux pas abandonner !",
						"spanish": "…¡Todavía no, no puedo rendirme!",
						"vietnamese": "…Chưa, tôi không thể bỏ cuộc!",
						"thai": "…ยัง, ยอมแพ้ไม่ได้!",
						"hindi": "…अभी नहीं, मैं हार नहीं मान सकता!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "amir",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "아직 멀었군요. 다시 한번, 당신의 의지를 보여주십시오.",
						"english": "Not yet. Show your will once more.",
						"japanese": "まだまだですね。もう一度、あなたの意志を見せてください。",
						"chinese": "还差得远呢。请再一次展现你的意志。",
						"french": "Pas encore. Montrez votre volonté une fois de plus.",
						"spanish": "Aún no. Muestra tu voluntad una vez más.",
						"vietnamese": "Vẫn chưa đủ đâu. Hãy thể hiện ý chí của ngươi thêm lần nữa.",
						"thai": "ยังไม่ถึงเวลา แสดงเจตจำนงของเจ้าอีกครั้ง.",
						"hindi": "अभी बहुत दूर है। एक बार फिर अपनी इच्छाशक्ति दिखाओ।"
					},
					"emotion": "base",
					"speaker": "amir",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"황량한 사막, 닿을 수 없는 갈증만이 가득했다.",
			"그때, 그림자처럼 나타난 한 남자, '아미르'.",
			"그가 이끈 오아시스는 너무나 달콤했지만,",
			"갈증은 더욱 깊어지는 듯했다. 진실은 늘, 가장 아름다운 가면 뒤에."
		],
		"english": [
			"A barren desert, filled only with an unreachable thirst.",
			"Then, a man named 'Amir' appeared like a shadow.",
			"The oasis he led to was so sweet, but...",
			"The thirst seemed to deepen. Truth always hides behind the most beautiful mask."
		],
		"japanese": [
			"荒涼たる砂漠、届かぬ渇きだけが満ちていた。",
			"その時、影のように現れた一人の男、「アミール」。",
			"彼が導いたオアシスは、あまりにも甘美だったが、",
			"渇きはますます深まるようだった。真実はいつも、最も美しい仮面の後ろに。"
		],
		"chinese": [
			"荒凉的沙漠，只有无法触及的干渴。",
			"那时，一个名叫“阿米尔”的男人如影而现。",
			"他所带领的绿洲虽然甜美，但...",
			"饥渴似乎变得更深。真相，总在最美的面具之后。"
		],
		"french": [
			"Un désert aride, empli d'une soif inatteignable.",
			"Alors, un homme, 'Amir', apparut comme une ombre.",
			"L'oasis où il mena était si douce, pourtant...",
			"La soif semblait s'intensifier. La vérité se cache toujours derrière le plus beau des masques."
		],
		"spanish": [
			"Un desierto desolado, solo una sed inalcanzable lo llenaba.",
			"Entonces, un hombre, 'Amir', apareció como una sombra.",
			"El oasis al que condujo era tan dulce, pero...",
			"La sed parecía profundizarse. La verdad siempre está detrás de la máscara más hermosa."
		],
		"vietnamese": [
			"Sa mạc hoang vu, chỉ tràn ngập cơn khát không thể với tới.",
			"Lúc đó, một người đàn ông tên 'Amir' xuất hiện như một cái bóng.",
			"Ốc đảo anh ấy dẫn đến thật ngọt ngào, nhưng...",
			"Cơn khát dường như càng thêm sâu sắc. Sự thật luôn ẩn sau chiếc mặt nạ đẹp nhất."
		],
		"thai": [
			"ทะเลทรายอันเวิ้งว้าง มีแต่ความกระหายที่เอื้อมไม่ถึง",
			"ทันใดนั้น ชายผู้หนึ่งนามว่า 'อาเมียร์' ก็ปรากฏตัวราวกับเงา",
			"โอเอซิสที่เขาพาไปนั้นช่างหอมหวานเสียจริง ทว่า...",
			"ความกระหายดูเหมือนจะยิ่งลึกซึ้งขึ้น ความจริงมักจะอยู่เบื้องหลังหน้ากากที่สวยงามที่สุดเสมอ"
		],
		"hindi": [
			"एक बंजर रेगिस्तान, जहाँ केवल अतृप्त प्यास थी।",
			"तभी, एक छाया की तरह 'अमीर' नाम का एक आदमी प्रकट हुआ।",
			"जिस नखलिस्तान में वह ले गया, वह बहुत मीठा था, लेकिन...",
			"प्यास और गहरी होती जा रही थी। सत्य हमेशा सबसे खूबसूरत नकाब के पीछे होता है।"
		]
	}
} as const;
