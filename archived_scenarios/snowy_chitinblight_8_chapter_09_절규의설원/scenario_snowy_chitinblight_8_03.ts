export const scenario_snowy_chitinblight_8_03 = {
	"scenario_id": "snowy_chitinblight_8_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"hild": {
			"id": "mon_6f20c96a-bf07-4aae-b37c-da898a8336e8",
			"name": {
				"korean": "힐드",
				"english": "Hild",
				"japanese": "ヒルド",
				"chinese": "希尔德",
				"french": "Hild",
				"spanish": "Hild",
				"vietnamese": "Hild",
				"thai": "ฮิลด์",
				"hindi": "हिल्ड"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/722a86fd-2903-4688-3f04-db8241ed0e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/af3d96ba-e571-4132-fede-cd415bd15c00/public"
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
						"korean": "황량한 설원 위, 폐허가 된 바이킹 유적지 입구에 도착했다.",
						"english": "Arrived at the entrance of the ruined Viking site on a desolate snowy field.",
						"japanese": "荒涼とした雪原の、廃墟となったヴァイキング遺跡の入り口に到着した。",
						"chinese": "抵达荒凉雪原上，废弃的维京遗址入口。",
						"french": "Arrivés à l'entrée du site viking en ruines, sur une étendue enneigée désolée.",
						"spanish": "Llegamos a la entrada de las ruinas vikingas en un desolado campo nevado.",
						"vietnamese": "Đã đến lối vào của khu di tích Viking đổ nát trên cánh đồng tuyết hoang vắng.",
						"thai": "มาถึงทางเข้าของแหล่งโบราณคดีไวกิ้งที่พังทลายบนทุ่งหิมะอันรกร้าง",
						"hindi": "हम एक सुनसान बर्फीले मैदान पर स्थित खंडहर वाइकिंग स्थल के प्रवेश द्वार पर पहुँचे।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "hild",
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "hild",
					"content": {
						"korean": "…왔어요? 여기까지 오다니.",
						"english": "...You came? All the way here.",
						"japanese": "…来たの？ここまでよく来たわね。",
						"chinese": "……你来了？竟然到这里了。",
						"french": "...Vous êtes venu ? Jusqu'ici.",
						"spanish": "¿Viniste? Hasta aquí.",
						"vietnamese": "…Anh đến rồi sao? Đến tận đây.",
						"thai": "...มาแล้วเหรอ? มาถึงนี่เลยนะ",
						"hindi": "...तुम आ गए? इतनी दूर तक।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "여기서 뭘 찾고 있는 거야?",
						"english": "What are you looking for here?",
						"japanese": "ここで何を探しているの？",
						"chinese": "你在这里找什么？",
						"french": "Qu'est-ce que tu cherches ici ?",
						"spanish": "¿Qué estás buscando aquí?",
						"vietnamese": "Anh đang tìm gì ở đây?",
						"thai": "คุณกำลังมองหาอะไรที่นี่?",
						"hindi": "तुम यहाँ क्या ढूंढ रहे हो?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "hild",
					"content": {
						"korean": "잊힌 약속들을요. 이 땅에 스며든 비극을.",
						"english": "Forgotten promises. The tragedy that permeates this land.",
						"japanese": "忘れられた約束を。この地に染み込んだ悲劇を。",
						"chinese": "被遗忘的誓言。渗透在这片土地上的悲剧。",
						"french": "Des promesses oubliées. La tragédie qui imprègne cette terre.",
						"spanish": "Promesas olvidadas. La tragedia que impregna esta tierra.",
						"vietnamese": "Những lời hứa bị lãng quên. Bi kịch thấm đẫm vùng đất này.",
						"thai": "คำมั่นสัญญาที่ถูกลืมเลือน โศกนาฏกรรมที่ซึมซาบอยู่ในดินแดนนี้",
						"hindi": "भूले हुए वादे। इस भूमि में समाहित त्रासदी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "오래된 유적지에서 비극의 그림자가 드리웠다.",
						"english": "The shadow of tragedy loomed over the ancient ruins.",
						"japanese": "古い遺跡から悲劇の影が迫っていた。",
						"chinese": "悲剧的阴影笼罩在古老的遗迹上。",
						"french": "L'ombre de la tragédie planait sur les anciennes ruines.",
						"spanish": "La sombra de la tragedia se cernía sobre las antiguas ruinas.",
						"vietnamese": "Bóng tối bi kịch bao trùm khu di tích cổ.",
						"thai": "เงาแห่งโศกนาฏกรรมปกคลุมอยู่เหนือซากปรักหักพังโบราณ",
						"hindi": "प्राचीन खंडहरों पर त्रासदी की छाया मंडरा रही थी।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "hild",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "hild",
					"content": {
						"korean": "이 문헌들… 믿을 수 없어요.",
						"english": "These documents... unbelievable.",
						"japanese": "これらの文献…信じられない。",
						"chinese": "这些文献…令人难以置信。",
						"french": "Ces documents... Incroyable.",
						"spanish": "Estos documentos... increíble.",
						"vietnamese": "Những tài liệu này... khó tin thật.",
						"thai": "เอกสารพวกนี้... เหลือเชื่อเลย.",
						"hindi": "ये दस्तावेज़... अविश्वसनीय हैं।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "뭐가 문제인데?",
						"english": "What's wrong?",
						"japanese": "何か問題でも？",
						"chinese": "有什么问题？",
						"french": "Qu'y a-t-il ?",
						"spanish": "¿Qué pasa?",
						"vietnamese": "Có chuyện gì vậy?",
						"thai": "มีอะไรเหรอ?",
						"hindi": "क्या बात है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "hild",
					"content": {
						"korean": "바이킹들이 섬기던 '빛나는 곤충'에 대한 기록이에요.",
						"english": "Records of a 'Shining Insect' worshipped by Vikings.",
						"japanese": "バイキングが崇めていた「輝く昆虫」に関する記録です。",
						"chinese": "这是关于维京人崇拜的“发光昆虫”的记录。",
						"french": "C'est un rapport sur l'« Insecte Brillant » vénéré par les Vikings.",
						"spanish": "Es un registro sobre el \"Insecto Brillante\" adorado por los vikingos.",
						"vietnamese": "Đây là ghi chép về \"Côn trùng Phát sáng\" mà người Viking từng tôn thờ.",
						"thai": "นี่คือบันทึกเกี่ยวกับ 'แมลงเรืองแสง' ที่ชาวไวกิงบูชา.",
						"hindi": "यह वाइकिंग्स द्वारा पूजे जाने वाले 'चमकते कीड़े' का रिकॉर्ड है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "곤충? 그게 뭔데?",
						"english": "Insect? What's that?",
						"japanese": "昆虫？何それ？",
						"chinese": "昆虫？那是什么？",
						"french": "Un insecte ? C'est quoi ?",
						"spanish": "¿Un insecto? ¿Qué es eso?",
						"vietnamese": "Côn trùng? Đó là gì vậy?",
						"thai": "แมลง? มันคืออะไร?",
						"hindi": "कीड़ा? वो क्या है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "hild",
					"content": {
						"korean": "이곳의 비극이… 그 곤충과 관련 있을 거예요.",
						"english": "This tragedy... likely linked to that insect.",
						"japanese": "ここの悲劇は…その昆虫と関係があるはずです。",
						"chinese": "这里的悲剧…可能与那只昆虫有关。",
						"french": "La tragédie d'ici... est probablement liée à cet insecte.",
						"spanish": "La tragedia de este lugar... probablemente esté relacionada con ese insecto.",
						"vietnamese": "Bi kịch ở đây... chắc chắn có liên quan đến con côn trùng đó.",
						"thai": "โศกนาฏกรรมที่นี่... น่าจะเกี่ยวข้องกับแมลงตัวนั้น.",
						"hindi": "यहाँ की त्रासदी... शायद उस कीड़े से संबंधित है।"
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "hild",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "hild",
					"content": {
						"korean": "이 벽화… 보세요.",
						"english": "Look at this mural.",
						"japanese": "この壁画…見てください。",
						"chinese": "这壁画…看看。",
						"french": "Cette fresque... Regardez.",
						"spanish": "Este mural... mirad.",
						"vietnamese": "Bức bích họa này... nhìn xem.",
						"thai": "ภาพจิตรกรรมฝาผนังนี่... ดูสิ.",
						"hindi": "इस भित्ティचित्र को... देखो।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "오래된 벽면에는 곤충의 날개 무늬가 희미하게 새겨져 있었다.",
						"english": "Faint insect wing patterns were etched onto the old wall.",
						"japanese": "古い壁面には、昆虫の羽の模様が薄く刻まれていた。",
						"chinese": "古老的墙壁上，隐约刻着昆虫的翅膀图案。",
						"french": "De faibles motifs d'ailes d'insectes étaient gravés sur le vieux mur.",
						"spanish": "En la vieja pared estaban grabados débilmente los patrones de alas de insecto.",
						"vietnamese": "Trên bức tường cũ, những họa tiết cánh côn trùng mờ nhạt được khắc lên.",
						"thai": "ลวดลายปีกแมลงจางๆ สลักอยู่บนผนังเก่า.",
						"hindi": "पुरानी दीवार पर, कीड़े के पंखों के धुंधले निशान खुदे हुए थे।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이게 뭐야? 곤충 날개라고?",
						"english": "What is this? Insect wings?",
						"japanese": "これは何だ？昆虫の羽だと？",
						"chinese": "这是什么？昆虫翅膀？",
						"french": "C'est quoi ça ? Des ailes d'insecte ?",
						"spanish": "¿Qué es esto? ¿Alas de insecto?",
						"vietnamese": "Cái gì đây? Cánh côn trùng ư?",
						"thai": "นี่อะไร? ปีกแมลงเหรอ?",
						"hindi": "ये क्या है? कीड़े के पंख?"
					}
				},
				{
					"speaker": "hild",
					"content": {
						"korean": "그리고 이 문구… '진홍빛 환상'.",
						"english": "And this phrase... 'Crimson Illusion'.",
						"japanese": "そしてこの文言…「真紅の幻影」。",
						"chinese": "还有这句话…“绯红幻象”。",
						"french": "Et cette phrase... « Illusion Cramoisie ».",
						"spanish": "Y esta frase... \"Ilusión Carmesí\".",
						"vietnamese": "Và dòng chữ này... 'Ảo ảnh Đỏ thẫm'.",
						"thai": "และข้อความนี้... 'ภาพลวงตาสีเลือดหมู'.",
						"hindi": "और यह वाक्यांश... 'गहरा लाल भ्रम'।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "진홍빛 환상? 그게 뭔데?",
						"english": "Crimson Illusion? What's that?",
						"japanese": "真紅の幻影？何それ？",
						"chinese": "绯红幻象？那是什么？",
						"french": "Illusion Cramoisie ? C'est quoi ?",
						"spanish": "¿Ilusión Carmesí? ¿Qué es eso?",
						"vietnamese": "Ảo ảnh Đỏ thẫm? Đó là gì vậy?",
						"thai": "ภาพลวงตาสีเลือดหมู? มันคืออะไร?",
						"hindi": "गहरा लाल भ्रम? वो क्या है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "hild",
					"content": {
						"korean": "전장 속에서 죽어간 이들의 마지막… 비명과 같아요.",
						"english": "It's like the last scream of those who died on the battlefield.",
						"japanese": "戦場で命を落とした者たちの最期の…断末魔のようです。",
						"chinese": "这就像是战场上逝者的最后一声……尖叫。",
						"french": "C'est comme le dernier cri de ceux qui sont morts sur le champ de bataille.",
						"spanish": "Es como el último grito de aquellos que murieron en el campo de batalla.",
						"vietnamese": "Nó giống như tiếng thét cuối cùng của những người đã ngã xuống trên chiến trường.",
						"thai": "มันเหมือนเสียงกรีดร้องสุดท้ายของผู้ที่เสียชีวิตในสนามรบ",
						"hindi": "यह युद्धक्षेत्र में मरने वालों की आखिरी चीख की तरह है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 이 비극의 원인은 뭔데? 왜 아무도 모르는 거야?",
						"english": "Then what's the cause of this tragedy? Why does no one know?",
						"japanese": "じゃあ、この悲劇の原因は何なの？どうして誰も知らないの？",
						"chinese": "那这场悲剧的起因是什么？为什么没人知道？",
						"french": "Alors, quelle est la cause de cette tragédie ? Pourquoi personne ne sait ?",
						"spanish": "¿Entonces cuál es la causa de esta tragedia? ¿Por qué nadie lo sabe?",
						"vietnamese": "Vậy nguyên nhân của bi kịch này là gì? Tại sao không ai biết?",
						"thai": "แล้วอะไรคือสาเหตุของโศกนาฏกรรมนี้? ทำไมไม่มีใครรู้?",
						"hindi": "तो इस त्रासदी का कारण क्या है? कोई क्यों नहीं जानता?"
					}
				},
				{
					"speaker": "hild",
					"content": {
						"korean": "…그건 중요하지 않아요. 잊히지 않는 것이 중요하죠.",
						"english": "...That's not important. What's important is not being forgotten.",
						"japanese": "…それは重要ではありません。忘れ去られないことが重要です。",
						"chinese": "……那不重要。重要的是不被遗忘。",
						"french": "...Ce n'est pas important. Ce qui est important, c'est de ne pas être oublié.",
						"spanish": "...Eso no es importante. Lo importante es no ser olvidado.",
						"vietnamese": "...Điều đó không quan trọng. Quan trọng là không bị lãng quên.",
						"thai": "...นั่นไม่สำคัญ สิ่งสำคัญคือการไม่ถูกลืม",
						"hindi": "वह महत्वपूर्ण नहीं है। महत्वपूर्ण यह है कि भूला न जाए।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "힐드는 진실을 외면하는 듯했다.",
						"english": "Hilde seemed to avert the truth.",
						"japanese": "ヒルデは真実から目を背けるようだった。",
						"chinese": "希尔德似乎回避着真相。",
						"french": "Hilde semblait ignorer la vérité.",
						"spanish": "Hilde parecía evitar la verdad.",
						"vietnamese": "Hilde dường như đang né tránh sự thật.",
						"thai": "ฮิลเดดูเหมือนจะหลีกเลี่ยงความจริง",
						"hindi": "हिल्डे ने सच्चाई से मुंह मोड़ लिया था।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "hild",
					"content": {
						"korean": "이대로 나아가면… 당신들도 잊힐 거예요.",
						"english": "If you continue like this... you too will be forgotten.",
						"japanese": "このまま進めば…あなたたちも忘れ去られるでしょう。",
						"chinese": "如果继续这样下去……你们也会被遗忘的。",
						"french": "Si vous continuez ainsi... vous aussi serez oubliés.",
						"spanish": "Si continúan así... ustedes también serán olvidados.",
						"vietnamese": "Nếu cứ tiếp tục thế này... các bạn cũng sẽ bị lãng quên.",
						"thai": "ถ้าพวกคุณยังคงไปต่อแบบนี้... พวกคุณก็จะถูกลืมเลือนไปเช่นกัน",
						"hindi": "यदि आप ऐसे ही आगे बढ़ते रहे... तो आप भी भुला दिए जाएंगे।"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "잊혀질 존재들이군. 감히 이 영역을 침범하다니.",
						"english": "Beings destined to be forgotten. How dare you invade this domain.",
						"japanese": "忘れ去られる存在どもめ。よくもこの領域を侵したな。",
						"chinese": "注定被遗忘的存在。竟敢侵犯这个领域。",
						"french": "Des êtres destinés à être oubliés. Comment osez-vous envahir ce domaine.",
						"spanish": "Seres destinados a ser olvidados. ¿Cómo se atreven a invadir este dominio?",
						"vietnamese": "Những kẻ đáng bị lãng quên. Dám xâm phạm lãnh địa này.",
						"thai": "พวกแกมันเป็นพวกที่จะถูกลืมเลือน บังอาจบุกรุกอาณาเขตนี้ได้อย่างไร",
						"hindi": "भूले जाने वाले प्राणी। तुम्हारी हिम्मत कैसे हुई इस क्षेत्र पर आक्रमण करने की।"
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
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "이 비명 소리… 아름답지 않나? 잊힌 자들의 절규는 언제나 달콤해.",
						"english": "This scream... isn't it beautiful? The cries of the forgotten are always sweet.",
						"japanese": "この悲鳴…美しくないか？忘れ去られた者たちの絶叫は、いつだって甘美だ。",
						"chinese": "这尖叫声……不美吗？被遗忘者的哀嚎总是甜美的。",
						"french": "Ce cri... n'est-il pas magnifique ? Les lamentations des oubliés sont toujours douces.",
						"spanish": "Este grito... ¿no es hermoso? Los lamentos de los olvidados siempre son dulces.",
						"vietnamese": "Tiếng thét này... không đẹp sao? Tiếng kêu gào của những kẻ bị lãng quên luôn ngọt ngào.",
						"thai": "เสียงกรีดร้องนี้... ไม่สวยงามหรือไง? เสียงคร่ำครวญของผู้ที่ถูกลืมเลือนนั้นหอมหวานเสมอ",
						"hindi": "यह चीख... क्या यह सुंदर नहीं है? भूले हुए लोगों की चीखें हमेशा मीठी होती हैं।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 모든 비극의 원흉인가?",
						"english": "Are you the mastermind behind all this tragedy?",
						"japanese": "お前がこの全ての悲劇の元凶なのか？",
						"chinese": "你就是这所有悲剧的元凶吗？",
						"french": "Es-tu le cerveau derrière toute cette tragédie ?",
						"spanish": "¿Eres tú el autor intelectual de toda esta tragedia?",
						"vietnamese": "Ngươi là kẻ chủ mưu đằng sau tất cả bi kịch này sao?",
						"thai": "แกคือต้นตอของโศกนาฏกรรมทั้งหมดนี้ใช่ไหม?",
						"hindi": "क्या तुम इस सारी त्रासदी के मास्टरमाइंड हो?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "나는 그저… 잊힌 것을 수확할 뿐. 자연의 섭리지.",
						"english": "I merely... harvest what is forgotten. It's the natural order.",
						"japanese": "私はただ…忘れ去られたものを収穫するだけ。自然の摂理だ。",
						"chinese": "我只是……收割被遗忘之物。这是自然法则。",
						"french": "Je ne fais que... récolter ce qui est oublié. C'est l'ordre naturel des choses.",
						"spanish": "Yo simplemente... cosecho lo que se olvida. Es el orden natural.",
						"vietnamese": "Ta chỉ... thu hoạch những gì bị lãng quên. Đó là quy luật tự nhiên.",
						"thai": "ข้าแค่... เก็บเกี่ยวสิ่งที่ถูกลืม มันเป็นกฎแห่งธรรมชาติ",
						"hindi": "मैं बस... भूली हुई चीज़ों को इकट्ठा करता हूँ। यह प्रकृति का नियम है।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네 말장난에 놀아날 시간 없어. 길을 비켜!",
						"english": "I don't have time for your word games. Get out of the way!",
						"japanese": "お前の言葉遊びに付き合う時間はない。道を空けろ！",
						"chinese": "我没时间陪你玩文字游戏。让开！",
						"french": "Je n'ai pas le temps pour tes jeux de mots. Écarte-toi !",
						"spanish": "No tengo tiempo para tus juegos de palabras. ¡Apártate!",
						"vietnamese": "Ta không có thời gian cho trò chơi chữ của ngươi. Tránh ra!",
						"thai": "ฉันไม่มีเวลามาเล่นคำพูดกับแก หลีกไป!",
						"hindi": "मेरे पास तुम्हारे शब्दों के खेल के लिए समय नहीं है। रास्ते से हट जाओ!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 잊혀지진 않을 것이다… 언젠가… 다시…",
						"english": "Ugh… I will not be forgotten… Someday… again…",
						"japanese": "くっ…忘れられはしない…いつか…また…",
						"chinese": "呃啊…我不会被遗忘的…总有一天…再次…",
						"french": "Ugh… Je ne serai pas oublié… Un jour… à nouveau…",
						"spanish": "Ugh… No seré olvidado… Algún día… de nuevo…",
						"vietnamese": "Khặc… Ta sẽ không bị lãng quên… Một ngày nào đó… trở lại…",
						"thai": "อึก… ข้าจะไม่ถูกลืมเลือน… สักวัน… อีกครั้ง…",
						"hindi": "उफ़… मुझे भुलाया नहीं जाएगा… कभी… फिर से…"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "빌어먹을… 진짜 끈질기네. 끝난 게 아니라고?",
						"english": "Damn it… They're incredibly persistent. It's not over?",
						"japanese": "くそっ…本当にしぶといな。終わってないのか？",
						"chinese": "该死…真够顽强的。还没结束吗？",
						"french": "Maudit… Ils sont incroyablement tenaces. Ce n'est pas fini ?",
						"spanish": "Maldita sea… Son increíblemente persistentes. ¿No ha terminado?",
						"vietnamese": "Mẹ kiếp… Thật ngoan cường. Chưa kết thúc sao?",
						"thai": "ให้ตายสิ… พวกเขาอึดเหลือเกิน. ยังไม่จบอีกเหรอ?",
						"hindi": "धिक्कार है… वे अविश्वसनीय रूप से हठी हैं। यह खत्म नहीं हुआ?"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "쓰러진 '정체 모를 자'의 마지막 말은 새로운 불안을 남겼다.",
						"english": "The last words of the fallen 'Unknown Entity' left a new unease.",
						"japanese": "倒れた「正体不明の者」の最期の言葉は、新たな不安を残した。",
						"chinese": "倒下的“不明身份者”的遗言，留下了新的不安。",
						"french": "Les derniers mots de 'l'Entité Inconnue' tombée laissèrent un nouveau malaise.",
						"spanish": "Las últimas palabras de la 'Entidad Desconocida' caída dejaron una nueva inquietud.",
						"vietnamese": "Những lời cuối cùng của 'Thực thể vô danh' đã ngã xuống để lại một nỗi bất an mới.",
						"thai": "คำพูดสุดท้ายของ 'สิ่งมีชีวิตนิรนาม' ที่ล้มลงได้ทิ้งความไม่สบายใจใหม่ไว้.",
						"hindi": "गिरे हुए 'अज्ञात इकाई' के अंतिम शब्दों ने एक नई बेचैनी छोड़ दी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "hild",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "hild",
					"content": {
						"korean": "…겨우 이 정도로는… 진실을 바꿀 수 없어요.",
						"english": "…This alone… cannot change the truth.",
						"japanese": "…これだけでは…真実を変えることはできません。",
						"chinese": "…仅凭这些…无法改变真相。",
						"french": "…Rien qu'avec ça… la vérité ne peut être changée.",
						"spanish": "…Solo con esto… la verdad no puede ser cambiada.",
						"vietnamese": "…Chỉ chừng này… không thể thay đổi sự thật.",
						"thai": "…แค่นี้…ก็ไม่อาจเปลี่ยนความจริงได้.",
						"hindi": "…केवल इससे… सच्चाई नहीं बदल सकती।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "비극은 아직 끝나지 않았다. 망각된 진실은 더 깊이 숨어 있었다.",
						"english": "The tragedy is not over. The forgotten truth was hidden deeper.",
						"japanese": "悲劇はまだ終わっていなかった。忘れられた真実は、より深く隠されていた。",
						"chinese": "悲剧尚未结束。被遗忘的真相，隐藏得更深了。",
						"french": "La tragédie n'est pas terminée. La vérité oubliée était cachée plus profondément.",
						"spanish": "La tragedia no ha terminado. La verdad olvidada estaba escondida más profundamente.",
						"vietnamese": "Bi kịch chưa kết thúc. Sự thật bị lãng quên ẩn giấu sâu hơn.",
						"thai": "โศกนาฏกรรมยังไม่จบลง. ความจริงที่ถูกลืมซ่อนอยู่ลึกกว่าเดิม.",
						"hindi": "त्रासदी अभी खत्म नहीं हुई है। भूली हुई सच्चाई और गहराई में छिपी थी।"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "결국… 너희도 잊힐 뿐. 내 양분이 될지어다.",
						"english": "In the end… you too will only be forgotten. Become my sustenance.",
						"japanese": "結局…お前たちも忘れ去られるだけ。私の糧となるがいい。",
						"chinese": "最终…尔等亦将遗忘。成为吾之养分吧。",
						"french": "Au final… vous aussi ne serez qu'oubliés. Devenez ma subsistance.",
						"spanish": "Al final… vosotros también seréis solo olvidados. Convertíos en mi sustento.",
						"vietnamese": "Cuối cùng… các ngươi cũng sẽ chỉ bị lãng quên. Hãy trở thành chất dinh dưỡng của ta.",
						"thai": "ท้ายที่สุด… เจ้าก็จะถูกลืมเลือนไป. จงเป็นอาหารให้ข้าเถิด.",
						"hindi": "अंततः… तुम भी केवल भुला दिए जाओगे। मेरा पोषण बनो।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 아직 끝나지 않았어! 반드시…!",
						"english": "Damn it… It's not over yet! I will…!",
						"japanese": "くそっ…まだ終わってない！必ず…！",
						"chinese": "该死…还没结束！我一定要…！",
						"french": "Maudit… Ce n'est pas encore fini ! Je vais… !",
						"spanish": "Maldita sea… ¡Todavía no ha terminado! ¡Lo haré…!",
						"vietnamese": "Chết tiệt… Chưa kết thúc đâu! Nhất định phải…!",
						"thai": "ให้ตายสิ… ยังไม่จบ! ข้าจะต้อง…!",
						"hindi": "धिक्कार है… अभी खत्म नहीं हुआ! मैं अवश्य…!"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석군. 죽음으로 잊음을 맞이하라.",
						"english": "Foolish. Embrace oblivion with death.",
						"japanese": "愚か者め。死こそが忘却だ。",
						"chinese": "愚蠢。以死亡迎接遗忘。",
						"french": "Insensé. Embrasse l'oubli par la mort.",
						"spanish": "Necio. Abraza el olvido con la muerte.",
						"vietnamese": "Ngu ngốc. Hãy đón nhận sự lãng quên qua cái chết.",
						"thai": "โง่เขลา. จงโอบรับการหลงลืมด้วยความตาย.",
						"hindi": "मूर्ख। मृत्यु से विस्मृति को गले लगाओ।"
					}
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "무모한 자들이여. 잊힌 자들의 운명을 거스르려 하는가?",
						"english": "Reckless fools. Do you defy the fate of the forgotten?",
						"japanese": "無謀な者たちよ。忘れられた者たちの運命に抗うというのか？",
						"chinese": "鲁莽之徒。尔等欲逆被遗忘者的命运乎？",
						"french": "Fous imprudents. Osez-vous défier le destin des oubliés ?",
						"spanish": "Insensatos. ¿Os atrevéis a desafiar el destino de los olvidados?",
						"vietnamese": "Những kẻ ngông cuồng. Ngươi muốn chống lại số phận của những kẻ bị lãng quên sao?",
						"thai": "พวกบ้าระห่ำ. เจ้ากล้าที่จะท้าทายโชคชะตาของผู้ถูกลืมงั้นหรือ?",
						"hindi": "अनाड़ी मूर्खों। क्या तुम भूले हुए लोगों के भाग्य का विरोध करना चाहते हो?"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네놈이 우리를 잊게 만들 순 없어!",
						"english": "You won't make us forget!",
						"japanese": "貴様が我々を忘れさせることはできない！",
						"chinese": "你休想让我们遗忘！",
						"french": "Tu ne nous feras pas oublier !",
						"spanish": "¡No nos harás olvidar!",
						"vietnamese": "Ngươi không thể khiến chúng ta quên được!",
						"thai": "แกจะทำให้เราลืมไม่ได้หรอก!",
						"hindi": "तुम हमें भुला नहीं सकते!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "결국 모든 것은 망각될 뿐. 너희의 의지도, 이름도.",
						"english": "In the end, all will be forgotten. Your will, your name.",
						"japanese": "結局、全ては忘れ去られるだけ。お前たちの意思も、名前も。",
						"chinese": "终究一切都将遗忘。尔等的意志，尔等的名字。",
						"french": "Au final, tout sera oublié. Votre volonté, votre nom.",
						"spanish": "Al final, todo será olvidado. Vuestra voluntad, vuestro nombre.",
						"vietnamese": "Cuối cùng, tất cả sẽ bị lãng quên. Ý chí của ngươi, tên của ngươi.",
						"thai": "ท้ายที่สุด ทุกสิ่งจะถูกลืมเลือนไป. ทั้งเจตจำนงของเจ้าและชื่อของเจ้า.",
						"hindi": "अंततः, सब कुछ भुला दिया जाएगा। तुम्हारी इच्छा भी, तुम्हारा नाम भी।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"고대 바이킹의 유적. 얼어붙은 땅 위에 잊힌 약속들이 스며있다.",
			"고고학자 힐드. 그녀는 죽은 자들의 속삭임을 듣고 있었다.",
			"그러나 그 속삭임은 단순한 과거가 아니었다.",
			"끔찍한 진실은, 언제나 망각 속에 숨어들기 마련.",
			"우리는, 그 그림자를 쫓고 있었다."
		],
		"english": [
			"Ancient Viking ruins. Forgotten promises permeate the frozen land.",
			"Archaeologist Hild. She was listening to the whispers of the dead.",
			"But those whispers were not merely the past.",
			"A terrible truth always hides in oblivion.",
			"We were chasing that shadow."
		],
		"japanese": [
			"古代ヴァイキングの遺跡。凍てつく大地に忘れられた約束が染み込んでいる。",
			"考古学者ヒルダ。彼女は死者の囁きを聞いていた。",
			"しかし、その囁きは単なる過去ではなかった。",
			"恐ろしい真実は、常に忘却の中に隠れるものだ。",
			"私たちは、その影を追っていた。"
		],
		"chinese": [
			"古代维京遗迹。被遗忘的誓言渗透在这片冰冻的土地上。",
			"考古学家希尔德。她聆听着死者的低语。",
			"然而，那些低语并非仅仅是过去。",
			"可怕的真相，总是隐藏在遗忘之中。",
			"我们，正在追逐那个影子。"
		],
		"french": [
			"Ruines vikings ancestrales. Des promesses oubliées imprègnent cette terre gelée.",
			"L'archéologue Hild. Elle écoutait les murmures des morts.",
			"Mais ces murmures n'étaient pas seulement le passé.",
			"L'horrible vérité se cache toujours dans l'oubli.",
			"Nous poursuivions cette ombre."
		],
		"spanish": [
			"Antiguas ruinas vikingas. Promesas olvidadas impregnan la tierra helada.",
			"La arqueóloga Hild. Escuchaba los susurros de los muertos.",
			"Pero esos susurros no eran solo el pasado.",
			"La terrible verdad siempre se esconde en el olvido.",
			"Nosotros, estábamos persiguiendo esa sombra."
		],
		"vietnamese": [
			"Tàn tích Viking cổ đại. Những lời hứa bị lãng quên thấm đẫm vùng đất băng giá.",
			"Nhà khảo cổ học Hild. Cô ấy đang lắng nghe những lời thì thầm của người đã khuất.",
			"Nhưng những lời thì thầm đó không chỉ là quá khứ.",
			"Một sự thật kinh hoàng luôn ẩn mình trong quên lãng.",
			"Chúng tôi, đang đuổi theo cái bóng đó."
		],
		"thai": [
			"ซากปรักหักพังของไวกิ้งโบราณ คำมั่นสัญญาที่ถูกลืมเลือนซึมซาบอยู่บนผืนดินเยือกแข็ง",
			"นักโบราณคดีฮิลด์ เธอกำลังฟังเสียงกระซิบของผู้ตาย",
			"แต่เสียงกระซิบเหล่านั้นไม่ใช่แค่เรื่องในอดีต",
			"ความจริงอันน่าสะพรึงกลัวมักจะซ่อนอยู่ในความหลงลืมเสมอ",
			"เรากำลังไล่ตามเงานั้น"
		],
		"hindi": [
			"प्राचीन वाइकिंग खंडहर। जमी हुई भूमि में भूले हुए वादे समाहित हैं।",
			"पुरातत्वविद् हिल्ड। वह मृतकों की फुसफुसाहट सुन रही थी।",
			"लेकिन वे फुसफुसाहटें केवल अतीत नहीं थीं।",
			"एक भयानक सच हमेशा विस्मृति में छिपा रहता है।",
			"हम उस परछाई का पीछा कर रहे थे।"
		]
	}
} as const;
