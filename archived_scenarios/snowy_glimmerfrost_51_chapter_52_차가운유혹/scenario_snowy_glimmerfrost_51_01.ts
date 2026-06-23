export const scenario_snowy_glimmerfrost_51_01 = {
	"scenario_id": "snowy_glimmerfrost_51_01",
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
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "매서운 눈보라가 살을 찢는 듯 몰아쳤다.",
						"english": "A fierce blizzard raged, tearing at the flesh.",
						"japanese": "激しい吹雪が、肌を裂くように吹き荒れた。",
						"chinese": "凛冽的暴风雪呼啸而至，仿佛要撕裂皮肤。",
						"french": "Un blizzard féroce faisait rage, déchirant la chair.",
						"spanish": "Una feroz tormenta de nieve rugía, desgarrando la piel.",
						"vietnamese": "Cơn bão tuyết dữ dội gào thét, như xé nát da thịt.",
						"thai": "พายุหิมะที่รุนแรงพัดกระหน่ำราวกับฉีกทึ้งเนื้อหนัง",
						"hindi": "एक भयंकर बर्फीला तूफान आया, जैसे मांस को फाड़ रहा हो।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "더는 못 가겠어….",
						"english": "I can't go on any longer...",
						"japanese": "もうこれ以上は行けない…。",
						"chinese": "我再也走不动了……",
						"french": "Je n'en peux plus...",
						"spanish": "No puedo más...",
						"vietnamese": "Tôi không thể đi tiếp được nữa…",
						"thai": "ฉันไปต่อไม่ไหวแล้ว...",
						"hindi": "मैं अब और नहीं चल सकता…"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "저기… 저게 뭐야?",
						"english": "Look... what's that?",
						"japanese": "あれ…あれは何だ？",
						"chinese": "那边…那是什么？",
						"french": "Là-bas... qu'est-ce que c'est ?",
						"spanish": "Mira... ¿qué es eso?",
						"vietnamese": "Kia… kia là cái gì vậy?",
						"thai": "นั่น... นั่นอะไรน่ะ?",
						"hindi": "देखो… वो क्या है?"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"action": "enter",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "조난자분들, 이리로 오세요. 제가 길을 안내할게요.",
						"english": "Survivors, come this way. I will guide you.",
						"japanese": "遭難者の皆さん、こちらへ。私が道案内をします。",
						"chinese": "遇难者们，请到这边来。我会为你们指路。",
						"french": "Naufragés, venez par ici. Je vais vous guider.",
						"spanish": "Sobrevivientes, vengan por aquí. Yo los guiaré.",
						"vietnamese": "Những người sống sót, hãy đi lối này. Tôi sẽ dẫn đường cho các bạn.",
						"thai": "ผู้รอดชีวิตทั้งหลาย มาทางนี้สิคะ ฉันจะนำทางให้",
						"hindi": "फंसे हुए लोगों, इधर आओ। मैं तुम्हें रास्ता दिखाऊंगा।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "당신은…?",
						"english": "You are...?",
						"japanese": "あなたは…？",
						"chinese": "你是……？",
						"french": "Vous êtes...?",
						"spanish": "¿Tú eres...?",
						"vietnamese": "Bạn là…?",
						"thai": "คุณคือ...?",
						"hindi": "तुम कौन हो…?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "저는 에이라. 이 얼음 성의 수호자예요. 안에 따뜻한 피난처가 있어요.",
						"english": "I am Eira. Guardian of this ice castle. There's a warm refuge inside.",
						"japanese": "私はエイラ。この氷の城の守護者です。中に暖かい避難所がありますよ。",
						"chinese": "我是艾拉。这座冰之城的守护者。里面有温暖的避难所。",
						"french": "Je suis Eira. Gardienne de ce château de glace. Il y a un refuge chaud à l'intérieur.",
						"spanish": "Soy Eira. La guardiana de este castillo de hielo. Hay un refugio cálido dentro.",
						"vietnamese": "Tôi là Eira. Người bảo hộ của lâu đài băng này. Bên trong có một nơi trú ẩn ấm áp.",
						"thai": "ฉันชื่อเอร่า ผู้พิทักษ์ปราสาทน้ำแข็งแห่งนี้ค่ะ ข้างในมีที่พักพิงที่อบอุ่น",
						"hindi": "मैं ऐरा हूँ। इस बर्फ़ीले महल की संरक्षक। अंदर एक गर्म आश्रय है।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "따뜻하다고…?",
						"english": "Warm...?",
						"japanese": "「暖かい…？」",
						"chinese": "暖和…？",
						"french": "Chaud... ?",
						"spanish": "¿Cálido...?",
						"vietnamese": "Ấm áp sao...?",
						"thai": "อบอุ่นเหรอ...?",
						"hindi": "गर्म...?"
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
					"action": "enter",
					"spot": [
						5,
						2
					],
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "이곳의 온기가 마음에 드시나요?",
						"english": "Do you like the warmth here?",
						"japanese": "「ここの温かさはお気に召しましたか？」",
						"chinese": "您喜欢这里的温暖吗？",
						"french": "Appréciez-vous la chaleur d'ici ?",
						"spanish": "¿Le gusta la calidez de este lugar?",
						"vietnamese": "Bạn có thích sự ấm áp ở đây không?",
						"thai": "คุณชอบความอบอุ่นที่นี่ไหม?",
						"hindi": "क्या आपको यहाँ की गर्माहट पसंद है?"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "너무 따뜻해서… 몸이 노곤해지는 것 같아요.",
						"english": "It's so warm... I feel my body getting heavy.",
						"japanese": "「あまりに暖かくて…体がだるくなるようです。」",
						"chinese": "太暖和了…身体好像都变得懒散了。",
						"french": "C'est si chaud... Mon corps semble s'engourdir.",
						"spanish": "Es tan cálido... Siento que mi cuerpo se relaja.",
						"vietnamese": "Ấm quá... Cơ thể tôi dường như đang chùng xuống.",
						"thai": "มันอบอุ่นมาก... รู้สึกเหมือนร่างกายกำลังจะอ่อนล้าลงเลย",
						"hindi": "इतना गर्म है... मुझे लगता है मेरा शरीर सुस्त हो रहा है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "깊어지는 온기는 탐험대의 감각을 무디게 했다.",
						"english": "The intensifying warmth dulled the expedition team's senses.",
						"japanese": "「深まる温かさは探検隊の感覚を鈍らせた。」",
						"chinese": "不断深化的温暖使探险队的感官变得迟钝。",
						"french": "La chaleur grandissante a engourdi les sens de l'équipe d'exploration.",
						"spanish": "La calidez que se intensificaba embotó los sentidos del equipo de expedición.",
						"vietnamese": "Sự ấm áp ngày càng tăng đã làm mờ đi giác quan của đoàn thám hiểm.",
						"thai": "ความอบอุ่นที่เพิ่มขึ้นทำให้ประสาทสัมผัสของทีมสำรวจทื่อลง",
						"hindi": "गहराती गर्माहट ने अभियान दल की इंद्रियों को सुस्त कर दिया।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "긴장을 풀고 쉬세요. 이곳은 안전해요.",
						"english": "Relax and rest. This place is safe.",
						"japanese": "「リラックスして休んでください。ここは安全です。」",
						"chinese": "放松休息吧。这里很安全。",
						"french": "Détendez-vous et reposez-vous. Cet endroit est sûr.",
						"spanish": "Relájese y descanse. Este lugar es seguro.",
						"vietnamese": "Hãy thư giãn và nghỉ ngơi. Nơi này an toàn.",
						"thai": "ผ่อนคลายและพักผ่อนเถอะ ที่นี่ปลอดภัย",
						"hindi": "आराम करो और विश्राम करो। यह जगह सुरक्षित है।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "...왠지 모르게 불안한데.",
						"english": "...For some reason, I feel uneasy.",
						"japanese": "「…なぜか、不安だな。」",
						"chinese": "…不知为何，我感到不安。",
						"french": "...Pour une raison ou une autre, je me sens mal à l'aise.",
						"spanish": "...Por alguna razón, me siento inquieto.",
						"vietnamese": "...Không hiểu sao, tôi cảm thấy bất an.",
						"thai": "...ไม่รู้ทำไม แต่รู้สึกไม่สบายใจเลย",
						"hindi": "...किसी कारण से, मुझे बेचैनी महसूस हो रही है।"
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						5,
						2
					],
					"action": "enter",
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "저기… 벽에 저 무늬는 뭐지?",
						"english": "Hey... What's that pattern on the wall?",
						"japanese": "「あの…壁のあの模様は何？」",
						"chinese": "那个…墙上那个图案是什么？",
						"french": "Dis... C'est quoi ce motif sur le mur ?",
						"spanish": "Oye... ¿Qué es ese patrón en la pared?",
						"vietnamese": "Này... Hoa văn trên tường kia là gì vậy?",
						"thai": "เดี๋ยวนะ... ลวดลายบนกำแพงนั่นคืออะไรน่ะ?",
						"hindi": "देखो... दीवार पर वो पैटर्न क्या है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "벽과 바닥의 얼음 사이에 희미하게 얼굴 형상들이 보였다.",
						"english": "Faint face-like shapes were visible between the ice on the walls and floor.",
						"japanese": "「壁と床の氷の間に、かすかに顔のような形が見えた。」",
						"chinese": "墙壁和地板的冰层之间隐约可见人脸般的形状。",
						"french": "De vagues formes de visages étaient visibles entre la glace des murs et du sol.",
						"spanish": "Débiles formas de rostros eran visibles entre el hielo de las paredes y el suelo.",
						"vietnamese": "Những hình dạng giống khuôn mặt mờ nhạt hiện ra giữa lớp băng trên tường và sàn nhà.",
						"thai": "รูปร่างคล้ายใบหน้าจางๆ ปรากฏให้เห็นระหว่างน้ำแข็งบนผนังและพื้น",
						"hindi": "दीवारों और फर्श की बर्फ के बीच हल्के चेहरे जैसी आकृतियाँ दिखाई दे रही थीं।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "아, 오래된 문양이에요. 잊혀진 자들의 흔적이라고 할까요.",
						"english": "Ah, those are ancient patterns. Traces of the forgotten, you could say.",
						"japanese": "「ああ、それは古い文様ですよ。忘れ去られた者たちの痕跡とでも言いましょうか。」",
						"chinese": "啊，那是古老的图腾。可以说是被遗忘者的痕迹吧。",
						"french": "Ah, ce sont d'anciens motifs. Des traces des oubliés, pourrait-on dire.",
						"spanish": "Ah, son patrones antiguos. Huellas de los olvidados, se podría decir.",
						"vietnamese": "À, đó là những hoa văn cổ xưa. Dấu vết của những kẻ bị lãng quên, có thể nói vậy.",
						"thai": "อ่า นั่นคือลวดลายโบราณครับ ร่องรอยของผู้ที่ถูกลืมเลือนนั่นเอง",
						"hindi": "आह, वे प्राचीन पैटर्न हैं। भूली हुई आत्माओं के निशान, आप कह सकते हैं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "왠지… 섬뜩한데.",
						"english": "Somehow... it's chilling.",
						"japanese": "「なんだか…ぞっとするな。」",
						"chinese": "不知为何…感觉毛骨悚然。",
						"french": "D'une certaine manière... c'est glaçant.",
						"spanish": "De alguna manera... es espeluznante.",
						"vietnamese": "Không hiểu sao... lại thấy rợn người.",
						"thai": "ไม่รู้ทำไม... แต่มันน่าขนลุกนะ",
						"hindi": "किसी तरह... यह डरावना है।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "그럴 리가요. 단순한 얼음일 뿐이에요.",
						"english": "No way. It's just ice.",
						"japanese": "まさか。ただの氷ですよ。",
						"chinese": "不可能。那只是冰而已。",
						"french": "Impossible. Ce n'est que de la glace.",
						"spanish": "Imposible. Es solo hielo.",
						"vietnamese": "Không thể nào. Đó chỉ là băng thôi.",
						"thai": "ไม่มีทาง. มันก็แค่ก้อนน้ำแข็ง.",
						"hindi": "असंभव। यह बस बर्फ है।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						5,
						2
					],
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이상해… 이 이야기, 전에 들은 적 있는 것 같아.",
						"english": "Strange... I feel like I've heard this story before.",
						"japanese": "おかしいな…この話、前にも聞いたことがあるような。",
						"chinese": "奇怪… 我好像以前听过这个故事。",
						"french": "Étrange... J'ai l'impression d'avoir déjà entendu cette histoire.",
						"spanish": "Extraño... Siento que ya he escuchado esta historia antes.",
						"vietnamese": "Kỳ lạ thật... Tôi cảm thấy như đã từng nghe câu chuyện này rồi.",
						"thai": "แปลกจัง... เหมือนฉันเคยได้ยินเรื่องนี้มาก่อน.",
						"hindi": "अजीब... मुझे लगता है मैंने यह कहानी पहले सुनी है।"
					}
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "…아마 꿈이겠죠. 혹은 착각일 수도 있어요.",
						"english": "...It's probably a dream. Or perhaps a delusion.",
						"japanese": "…たぶん夢でしょう。あるいは錯覚かもしれません。",
						"chinese": "… शायद是梦吧。或者也可能是错觉。",
						"french": "...C'est probablement un rêve. Ou peut-être une illusion.",
						"spanish": "...Probablemente sea un sueño. O quizás una ilusión.",
						"vietnamese": "Không sao đâu. Tôi sẽ dẫn lối cho bạn. Đến nơi sâu hơn.",
						"thai": "...อาจจะเป็นแค่ความฝัน. หรืออาจจะแค่คิดไปเองก็ได้.",
						"hindi": "...शायद यह एक सपना है। या हो सकता है एक भ्रम।"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "온기가 너무 강해서 그런가. 정신이 흐릿해지는 것 같아.",
						"english": "Is the warmth too strong? My mind feels hazy.",
						"japanese": "温もりが強すぎるせいか。意識が朦朧としてくるようだ。",
						"chinese": "是不是因为温暖太强烈了？感觉精神都模糊了。",
						"french": "Est-ce que la chaleur est trop forte ? Mon esprit s'embrouille.",
						"spanish": "¿Será que el calor es demasiado intenso? Siento que mi mente se nubla.",
						"vietnamese": "Có lẽ hơi ấm quá mạnh. Đầu óc tôi trở nên mơ hồ.",
						"thai": "เพราะความอบอุ่นมันแรงเกินไปงั้นเหรอ? จิตใจของฉันรู้สึกมัวหมอง.",
						"hindi": "क्या गरमाहट बहुत तेज़ है? मेरा दिमाग़ धुँधला सा हो रहा है।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "괜찮아요. 제가 인도해 드릴게요. 더 깊숙한 곳으로.",
						"english": "It's alright. I will guide you. To a deeper place.",
						"japanese": "大丈夫です。私が案内します。もっと奥深くへ。",
						"chinese": "没关系。我来引导你。到更深处去。",
						"french": "C'est bon. Je vais vous guider. Vers un endroit plus profond.",
						"spanish": "Está bien. Yo te guiaré. A un lugar más profundo.",
						"vietnamese": "Không sao đâu. Tôi sẽ dẫn lối cho bạn. Đến nơi sâu hơn.",
						"thai": "ไม่เป็นไรหรอก. ฉันจะนำทางคุณเอง. ไปยังที่ที่ลึกซึ้งกว่านี้.",
						"hindi": "ठीक है। मैं तुम्हें रास्ता दिखाऊँगा। और भी गहरे स्थान पर।"
					},
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"spot": [
						5,
						2
					],
					"action": "enter",
					"speaker": "eira",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "드디어 오셨군요.",
						"english": "You've finally arrived.",
						"japanese": "ついに来ましたね。",
						"chinese": "你终于来了。",
						"french": "Vous êtes enfin arrivé.",
						"spanish": "Finalmente has llegado.",
						"vietnamese": "Cuối cùng thì ngài cũng đến rồi.",
						"thai": "ในที่สุดคุณก็มาถึงแล้วสินะ.",
						"hindi": "आप आख़िरकार आ गए।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "에이라… 당신은 대체.",
						"english": "Aira... What are you, really?",
						"japanese": "アイラ…あなたはいったい。",
						"chinese": "艾拉…你究竟是何方神圣。",
						"french": "Aira... Qui êtes-vous, au juste ?",
						"spanish": "Aira... ¿Qué eres, en realidad?",
						"vietnamese": "Aira... Rốt cuộc thì cô là ai?",
						"thai": "ไอรา... เธอเป็นใครกันแน่.",
						"hindi": "ऐरा... तुम आख़िर कौन हो।"
					},
					"type": "speech"
				},
				{
					"action": "exit",
					"direction": "up",
					"speaker": "eira",
					"duration_ms": 400,
					"type": "direction"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 인간들. 온기를 탐하는 자들은 결국 나의 노예가 될 뿐.",
						"english": "Foolish humans. Those who crave warmth will only become my slaves.",
						"japanese": "愚かな人間ども。温もりを貪る者たちは、結局私の奴隷となるだけだ。",
						"chinese": "愚蠢的人类。那些贪恋温暖的人，终将成为我的奴隶。",
						"french": "Humains insensés. Ceux qui convoitent la chaleur ne feront que devenir mes esclaves.",
						"spanish": "Humanos estúpidos. Aquellos que ansían el calor solo se convertirán en mis esclavos.",
						"vietnamese": "Loài người ngu ngốc. Những kẻ tham lam sự ấm áp cuối cùng chỉ trở thành nô lệ của ta mà thôi.",
						"thai": "มนุษย์ที่โง่เขลา. ผู้ที่แสวงหาความอบอุ่นจะกลายเป็นทาสของข้าเท่านั้น.",
						"hindi": "मूर्ख इंसान। जो गर्मी की लालसा रखते हैं, वे अंततः मेरे दास बन जाएंगे।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 모든 걸 꾸민 거였군!",
						"english": "So you were behind all of this!",
						"japanese": "お前がこの全てを仕組んだのか！",
						"chinese": "原来这一切都是你策划的！",
						"french": "C'était donc toi qui avais orchestré tout ça !",
						"spanish": "¡Así que tú orquestaste todo esto!",
						"vietnamese": "Thì ra là ngươi đã dàn dựng tất cả những chuyện này!",
						"thai": "งั้นก็เป็นเธอเองสินะที่เป็นคนบงการทั้งหมดนี้!",
						"hindi": "तो तुम ही इस सब के पीछे थे!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "이제 너희도 얼어붙은 영혼의 일부가 될 시간이다.",
						"english": "Now it's time for you to become part of the frozen souls.",
						"japanese": "さあ、お前たちも凍りついた魂の一部となる時だ。",
						"chinese": "现在，你们也该成为冰封灵魂的一部分了。",
						"french": "Il est maintenant temps pour vous de devenir une partie des âmes gelées.",
						"spanish": "Ahora es el momento de que también se conviertan en parte de las almas congeladas.",
						"vietnamese": "Bây giờ, đến lượt các ngươi trở thành một phần của những linh hồn đóng băng.",
						"thai": "ถึงเวลาที่พวกเจ้าจะต้องกลายเป็นส่วนหนึ่งของเหล่าวิญญาณเยือกแข็งแล้ว.",
						"hindi": "अब तुम्हारा भी जमी हुई आत्माओं का हिस्सा बनने का समय है।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "크크… 겨우 이 정도론… 이 얼음의 저주를… 끊을 수 없어….",
						"english": "Hmph... This much... won't break... this curse of ice...",
						"japanese": "クク…これしきでは…この氷の呪いを…断ち切ることはできぬ…",
						"chinese": "呵呵…就凭这点…还不足以…斩断这冰霜的诅咒…",
						"french": "Heh heh... Juste ça... ne brisera pas... cette malédiction de glace...",
						"spanish": "Jeje... Con esto... no podrás... romper esta maldición de hielo...",
						"vietnamese": "Khà khà… Chỉ chừng này… không thể phá vỡ… lời nguyền băng giá này đâu…",
						"thai": "คิกคิก… แค่นี้… ไม่อาจ… ทำลายคำสาปน้ำแข็งนี้ได้หรอก…",
						"hindi": "हम्फ... बस इतना सा... इस बर्फ के अभिशाप को... तोड़ नहीं पाएगा..."
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "정말 끝난 건가…?",
						"english": "Is it... truly over...?",
						"japanese": "本当に終わったのか…？",
						"chinese": "真的结束了吗…？",
						"french": "Est-ce vraiment terminé… ?",
						"spanish": "¿Realmente ha terminado…?",
						"vietnamese": "Thật sự kết thúc rồi sao…?",
						"thai": "มันจบลงแล้วจริง ๆ เหรอ…?",
						"hindi": "क्या यह वाकई खत्म हो गया है...?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "보스를 쓰러뜨렸지만, 피난처의 기묘한 온기는 여전했다.",
						"english": "The boss was defeated, yet the shelter's strange warmth lingered.",
						"japanese": "ボスは倒されたが、避難所の奇妙な温もりは依然として残っていた。",
						"chinese": "虽然击败了首领，但避难所中奇特的暖意依然存在。",
						"french": "Le boss était vaincu, mais l'étrange chaleur du refuge persistait.",
						"spanish": "El jefe fue derrotado, pero la extraña calidez del refugio persistía.",
						"vietnamese": "Trùm đã bị đánh bại, nhưng sự ấm áp kỳ lạ của nơi trú ẩn vẫn còn đó.",
						"thai": "หัวหน้าถูกโค่นลงแล้ว แต่ความอบอุ่นแปลกประหลาดของที่หลบภัยยังคงอยู่",
						"hindi": "बॉस को हरा दिया गया था, फिर भी आश्रय की अजीब गर्मी बनी हुई थी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "에이라의 모습은 보이지 않았다. 다음 희생자를 찾아 떠난 것일까.",
						"english": "Ayla was nowhere to be seen. Had she left to find her next victim?",
						"japanese": "エイラの姿は見えなかった。次の犠牲者を探しに行ったのだろうか。",
						"chinese": "艾拉不见踪影。她是去寻找下一个牺牲者了吗？",
						"french": "Ayla était introuvable. Était-elle partie chercher sa prochaine victime ?",
						"spanish": "Ayla no estaba a la vista. ¿Se había ido a buscar a su próxima víctima?",
						"vietnamese": "Ayla không thấy đâu. Cô ta đã đi tìm nạn nhân tiếp theo rồi sao?",
						"thai": "ไม่เห็นเงาของไอล่า เธอคงไปหาเหยื่อรายต่อไปแล้วกระมัง",
						"hindi": "आयला कहीं दिखाई नहीं दे रही थी। क्या वह अपने अगले शिकार की तलाश में निकल गई थी?"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "구원이라고 하기엔, 너무나 차가운 결말이었다.",
						"english": "To call it salvation was to ignore its chilling conclusion.",
						"japanese": "救済と呼ぶには、あまりにも冷たい結末だった。",
						"chinese": "说是救赎，却是一个过于冰冷的结局。",
						"french": "Pour de la salvation, c'était une fin bien trop glaciale.",
						"spanish": "Para ser una salvación, era un final demasiado frío.",
						"vietnamese": "Gọi đó là sự cứu rỗi, nhưng đó lại là một kết cục quá lạnh lẽo.",
						"thai": "หากจะเรียกว่าความรอด ก็เป็นจุดจบที่หนาวเหน็บเกินไป",
						"hindi": "इसे मुक्ति कहना, एक बहुत ही ठंडा अंत था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "차가운 얼음이 모든 것을 집어삼켰다.",
						"english": "The cold ice devoured everything.",
						"japanese": "冷たい氷がすべてを飲み込んだ。",
						"chinese": "冰冷的寒意吞噬了一切。",
						"french": "La glace froide a tout englouti.",
						"spanish": "El hielo frío lo devoró todo.",
						"vietnamese": "Băng giá lạnh lẽo nuốt chửng mọi thứ.",
						"thai": "น้ำแข็งอันเยียบเย็นกลืนกินทุกสิ่ง",
						"hindi": "ठंडी बर्फ ने सब कुछ निगल लिया।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "겨우 여기까지 와서… 어리석군.",
						"english": "To come all this way... only to be foolish.",
						"japanese": "ようやくここまで来て…愚かな。",
						"chinese": "好不容易来到这里…真是愚蠢。",
						"french": "Arriver jusqu'ici... quelle folie.",
						"spanish": "Llegar hasta aquí... qué insensatez.",
						"vietnamese": "Mãi mới đến được đây... thật ngu ngốc.",
						"thai": "มาถึงแค่นี้… ช่างโง่เขลาเสียจริง",
						"hindi": "बस यहीं तक आकर... मूर्खतापूर्ण।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 다시… 반드시…!",
						"english": "Damn it... Again... I must...!",
						"japanese": "くそっ…もう一度…必ず…！",
						"chinese": "该死…再来…一定要…！",
						"french": "Maudite soit... Encore... Je dois... !",
						"spanish": "Maldita sea... Otra vez... ¡Debo...!",
						"vietnamese": "Khỉ thật... Lần nữa... Nhất định phải...!",
						"thai": "บ้าเอ๊ย… อีกครั้ง… ต้องให้ได้…!",
						"hindi": "धिक्कार है... फिर से... मुझे अवश्य...!"
					},
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"영원한 혹한. 모든 것을 집어삼키는 냉기.",
			"탐험대는 길을 잃었다. 희망 없는 발걸음만이 이어졌다.",
			"그때, 저 멀리서 희미한 빛이 보였다. 거대한 얼음 구조물.",
			"구원일까. 아니면, 더 깊은 함정일까."
		],
		"english": [
			"Eternal frost. A chilling cold that devours all.",
			"The expedition lost its way. Only hopeless steps followed.",
			"Then, a faint light appeared in the distance. A colossal ice structure.",
			"Is it salvation? Or a deeper trap?"
		],
		"japanese": [
			"永遠の極寒。全てを飲み込む冷気。",
			"探検隊は道に迷った。希望なき足取りだけが続いた。",
			"その時、遠くにかすかな光が見えた。巨大な氷の建造物。",
			"救いか。それとも、より深い罠か。"
		],
		"chinese": [
			"永恒的极寒。吞噬一切的冷气。",
			"探险队迷失了方向。只有绝望的脚步在继续。",
			"就在那时，远处出现了一丝微弱的光。一座巨大的冰结构。",
			"是救赎吗？还是更深的陷阱？"
		],
		"french": [
			"Un froid éternel. Un gel dévorant tout.",
			"L'expédition s'est égarée. Seuls des pas désespérés se succédaient.",
			"Alors, une faible lumière apparut au loin. Une structure de glace colossale.",
			"Est-ce le salut ? Ou un piège plus profond ?"
		],
		"spanish": [
			"Frío eterno. Un frío que lo devora todo.",
			"La expedición se perdió. Solo pasos sin esperanza continuaron.",
			"Entonces, una luz tenue apareció en la distancia. Una colosal estructura de hielo.",
			"¿Es la salvación? ¿O una trampa más profunda?"
		],
		"vietnamese": [
			"Giá lạnh vĩnh cửu. Cái lạnh nuốt chửng mọi thứ.",
			"Đoàn thám hiểm đã lạc lối. Chỉ còn những bước chân vô vọng nối tiếp.",
			"Bỗng nhiên, một ánh sáng yếu ớt hiện ra từ xa. Một cấu trúc băng khổng lồ.",
			"Là sự cứu rỗi chăng? Hay là một cái bẫy sâu hơn?"
		],
		"thai": [
			"ความหนาวเหน็บนิรันดร์ ความเย็นเยือกที่กลืนกินทุกสิ่ง",
			"คณะสำรวจหลงทาง มีแต่ก้าวเดินที่ไร้ความหวัง",
			"ขณะนั้น แสงริบหรี่ปรากฏขึ้นในระยะไกล โครงสร้างน้ำแข็งมหึมา",
			"นั่นคือความรอดหรือกับดักที่ลึกกว่ากันแน่?"
		],
		"hindi": [
			"अनंत ठंढ। सब कुछ निगलने वाली शीतलता।",
			"अभियान दल रास्ता भटक गया। केवल निराशाजनक कदम ही बढ़ते रहे।",
			"तभी, दूर कहीं एक हल्की रोशनी दिखी। एक विशाल बर्फ की संरचना।",
			"क्या यह मुक्ति है? या एक गहरा जाल?"
		]
	}
} as const;
