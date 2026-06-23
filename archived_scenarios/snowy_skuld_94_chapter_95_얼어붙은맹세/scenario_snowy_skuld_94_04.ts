export const scenario_snowy_skuld_94_04 = {
	"scenario_id": "snowy_skuld_94_04",
	"order": 4,
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
					"content": {
						"korean": "거대한 빙하가 갈라진 틈 사이로, 오래된 유적의 잔해가 드러났다.",
						"english": "Through the massive glacial rift, the remains of an ancient ruin were revealed.",
						"japanese": "巨大な氷河の裂け目から、古の遺跡の残骸が姿を現した。",
						"chinese": "透过巨大的冰川裂缝，古老遗迹的残骸显露出来。",
						"french": "À travers l'énorme faille glaciaire, les vestiges d'une ancienne ruine furent révélés.",
						"spanish": "A través de la enorme grieta glacial, los restos de una ruina antigua fueron revelados.",
						"vietnamese": "Qua vết nứt băng khổng lồ, tàn tích của một di tích cổ đại đã lộ ra.",
						"thai": "ผ่านรอยแยกธารน้ำแข็งขนาดใหญ่ เศษซากของซากปรักหักพังโบราณก็ถูกเปิดเผย",
						"hindi": "विशाल हिमनदी दरार के माध्यम से, एक प्राचीन खंडहर के अवशेष प्रकट हुए।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "이 안에… 도대체 뭐가 있는 거지?",
						"english": "What on earth... is inside here?",
						"japanese": "この中に…一体何があるんだ？",
						"chinese": "这里面……到底有什么？",
						"french": "Qu'est-ce qu'il y a... à l'intérieur ?",
						"spanish": "¿Qué demonios... hay aquí dentro?",
						"vietnamese": "Bên trong này... rốt cuộc có cái gì vậy?",
						"thai": "ข้างในนี้... มันมีอะไรกันแน่?",
						"hindi": "इसके अंदर... आखिर क्या है?"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"speaker": "hild",
					"action": "enter"
				},
				{
					"content": {
						"korean": "이곳에 갇힌 영혼들의 비명이 들려와요.",
						"english": "I hear the screams of the souls trapped here.",
						"japanese": "ここに閉じ込められた魂たちの悲鳴が聞こえます。",
						"chinese": "我听到了被困在这里的灵魂的尖叫声。",
						"french": "J'entends les cris des âmes piégées ici.",
						"spanish": "Escucho los gritos de las almas atrapadas aquí.",
						"vietnamese": "Tôi nghe thấy tiếng hét của những linh hồn bị mắc kẹt ở đây.",
						"thai": "ฉันได้ยินเสียงกรีดร้องของวิญญาณที่ถูกขังอยู่ที่นี่",
						"hindi": "मुझे यहां फंसे हुए आत्माओं की चीखें सुनाई दे रही हैं।"
					},
					"speaker": "hild",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "영혼?",
						"english": "Souls?",
						"japanese": "魂、だと？",
						"chinese": "灵魂？",
						"french": "Des âmes ?",
						"spanish": "¿Almas?",
						"vietnamese": "Linh hồn?",
						"thai": "วิญญาณ?",
						"hindi": "आत्माएँ?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 얼음은 단순한 것이 아니에요. 누군가의 깊은 슬픔으로 만들어졌어요.",
						"english": "This ice isn't simple. It was made from someone's deep sorrow.",
						"japanese": "この氷はただの物ではありません。誰かの深い悲しみから生まれたものです。",
						"chinese": "这冰块不简单。它是用某人深深的悲伤凝结而成的。",
						"french": "Cette glace n'est pas ordinaire. Elle est née de la profonde tristesse de quelqu'un.",
						"spanish": "Este hielo no es simple. Fue hecho de la profunda tristeza de alguien.",
						"vietnamese": "Tảng băng này không hề đơn giản. Nó được tạo ra từ nỗi buồn sâu sắc của một ai đó.",
						"thai": "น้ำแข็งนี้ไม่ธรรมดา มันถูกสร้างขึ้นจากความเศร้าโศกอย่างสุดซึ้งของใครบางคน",
						"hindi": "यह बर्फ साधारण नहीं है। यह किसी के गहरे दुख से बनी है।"
					},
					"speaker": "hild",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "hild",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "그들은 잊혀진 약속에 묶여… 반복되는 고통을 겪고 있어요.",
						"english": "They are bound by forgotten promises... enduring recurring pain.",
						"japanese": "彼らは忘れ去られた約束に縛られ…繰り返される苦痛を経験しています。",
						"chinese": "他们被遗忘的承诺束缚着……经历着循环的痛苦。",
						"french": "Ils sont liés par des promesses oubliées... endurant une douleur récurrente.",
						"spanish": "Están atados por promesas olvidadas... soportando un dolor recurrente.",
						"vietnamese": "Họ bị ràng buộc bởi những lời hứa bị lãng quên... chịu đựng nỗi đau lặp đi lặp lại.",
						"thai": "พวกเขาถูกผูกมัดด้วยคำสัญญาที่ถูกลืม... ทนทุกข์กับความเจ็บปวดที่เกิดขึ้นซ้ำๆ",
						"hindi": "वे भूले हुए वादों से बंधे हैं... बार-बार होने वाले दर्द को सहन कर रहे हैं।"
					},
					"speaker": "hild",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "base",
					"content": {
						"korean": "우리가 뭘 할 수 있는데?",
						"english": "What can we do?",
						"japanese": "私たちに何ができるの？",
						"chinese": "我们能做什么？",
						"french": "Que pouvons-nous faire ?",
						"spanish": "¿Qué podemos hacer?",
						"vietnamese": "Chúng ta có thể làm gì?",
						"thai": "เราทำอะไรได้บ้าง?",
						"hindi": "हम क्या कर सकते हैं?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 비명 속에서… 희미한 빛이 보여요. 인간의 흔적이에요.",
						"english": "Amidst these screams... I see a faint light. It's a trace of humans.",
						"japanese": "この悲鳴の中で… かすかな光が見えます。人間の痕跡です。",
						"chinese": "在这尖叫声中……我看到了一丝微弱的光。那是人类的痕迹。",
						"french": "Au milieu de ces cris... je vois une faible lumière. C'est une trace humaine.",
						"spanish": "Entre estos gritos... veo una luz tenue. Es un rastro humano.",
						"vietnamese": "Giữa những tiếng thét này… tôi thấy một ánh sáng mờ nhạt. Đó là dấu vết của con người.",
						"thai": "ท่ามกลางเสียงกรีดร้องเหล่านี้... ฉันเห็นแสงสลัวๆ มันคือร่องรอยของมนุษย์",
						"hindi": "इन चीखों के बीच... मुझे एक धुँधली रोशनी दिख रही है। यह इंसानियत का निशान है।"
					},
					"speaker": "hild",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "인간의 흔적? 얼음 속에서?",
						"english": "Traces of humans? In the ice?",
						"japanese": "人間の痕跡？氷の中で？",
						"chinese": "人类的痕迹？在冰里？",
						"french": "Des traces humaines ? Dans la glace ?",
						"spanish": "¿Rastros humanos? ¿En el hielo?",
						"vietnamese": "Dấu vết của con người? Trong băng ư?",
						"thai": "ร่องรอยของมนุษย์เหรอ? ในน้ำแข็งเนี่ยนะ?",
						"hindi": "इंसानियत का निशान? बर्फ में?"
					}
				},
				{
					"type": "speech",
					"speaker": "hild",
					"emotion": "base",
					"content": {
						"korean": "네. 자연의 것이 아닌… 인공적인 섬광이요.",
						"english": "Yes. An artificial gleam... not from nature.",
						"japanese": "ええ。自然のものではない…人工的な閃光です。",
						"chinese": "是的。那不是自然的……而是人造的光芒。",
						"french": "Oui. Une lueur artificielle... pas naturelle.",
						"spanish": "Sí. Un destello artificial... no natural.",
						"vietnamese": "Vâng. Một ánh sáng nhân tạo… không phải của tự nhiên.",
						"thai": "ใช่. แสงแวบวับที่เกิดจากฝีมือมนุษย์... ไม่ใช่ของธรรมชาติ",
						"hindi": "हाँ। एक कृत्रिम चमक... प्राकृतिक नहीं।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"action": "enter",
					"speaker": "hild"
				},
				{
					"type": "speech",
					"content": {
						"korean": "(무언가를 발견한 듯) 이것을 보세요.",
						"english": "(As if discovering something) Look at this.",
						"japanese": "(何かを発見したように) これを見てください。",
						"chinese": "(仿佛发现了什么) 看这里。",
						"french": "(Comme s'il découvrait quelque chose) Regardez ça.",
						"spanish": "(Como si descubriera algo) Miren esto.",
						"vietnamese": "(Như thể vừa phát hiện ra điều gì đó) Hãy nhìn cái này.",
						"thai": "(เหมือนกับว่าเจออะไรบางอย่าง) ดูนี่สิ.",
						"hindi": "(जैसे कुछ खोजा हो) इसे देखो।"
					},
					"speaker": "hild",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "얼어붙은 파편 사이로, 오래된 장신구 조각이 미약하게 빛나고 있었다.",
						"english": "Among the frozen fragments, a piece of an old ornament was faintly glowing.",
						"japanese": "凍りついた破片の間から、古い装飾品の一部が微かに輝いていた。",
						"chinese": "在冰冻的碎片中，一块古老的饰品碎片正微弱地闪烁着。",
						"french": "Parmi les fragments gelés, un morceau d'un ancien ornement brillait faiblement.",
						"spanish": "Entre los fragmentos congelados, un trozo de un viejo adorno brillaba débilmente.",
						"vietnamese": "Giữa những mảnh vỡ đóng băng, một mảnh trang sức cũ đang phát ra ánh sáng yếu ớt.",
						"thai": "ท่ามกลางเศษซากน้ำแข็ง, ชิ้นส่วนเครื่องประดับเก่าแก่ชิ้นหนึ่งกำลังเปล่งประกายจางๆ",
						"hindi": "जमे हुए टुकड़ों के बीच, एक पुराने आभूषण का टुकड़ा हल्का-हल्का चमक रहा था।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이건… 분명 인간의 물건이야.",
						"english": "This is... definitely a human artifact.",
						"japanese": "これは…間違いなく人間のものだ。",
						"chinese": "这…… 분명히是人类的东西。",
						"french": "C'est... clairement un objet humain.",
						"spanish": "Esto es... claramente un objeto humano.",
						"vietnamese": "Đây là… chắc chắn là vật của con người.",
						"thai": "นี่มัน... ของมนุษย์ชัดๆ",
						"hindi": "यह... निश्चित रूप से इंसानों की चीज़ है।"
					},
					"speaker": "character_2",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "hild",
					"emotion": "sad",
					"content": {
						"korean": "빙하에 갇힌 건… 괴물이 아니에요. 그들 역시 피해자였어요.",
						"english": "What's trapped in the glacier... isn't a monster. They were victims too.",
						"japanese": "氷河に閉じ込められたのは…怪物ではありません。彼らもまた、犠牲者だったのです。",
						"chinese": "被困在冰川里的……不是怪物。他们也曾是受害者。",
						"french": "Ce qui est piégé dans le glacier... n'est pas un monstre. Eux aussi étaient des victimes.",
						"spanish": "Lo que está atrapado en el glaciar... no es un monstruo. Ellos también fueron víctimas.",
						"vietnamese": "Thứ bị mắc kẹt trong sông băng… không phải là quái vật. Họ cũng là nạn nhân.",
						"thai": "สิ่งที่ถูกกักขังอยู่ในธารน้ำแข็ง... ไม่ใช่สัตว์ประหลาด. พวกเขาต่างหากที่เป็นเหยื่อ",
						"hindi": "ग्लेशियर में फंसा हुआ... कोई राक्षस नहीं है। वे भी पीड़ित थे।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "반복되는 비극…",
						"english": "A repeating tragedy...",
						"japanese": "繰り返される悲劇…",
						"chinese": "重复的悲剧……",
						"french": "Une tragédie répétée...",
						"spanish": "Una tragedia recurrente...",
						"vietnamese": "Một bi kịch lặp lại…",
						"thai": "โศกนาฏกรรมที่ซ้ำรอย...",
						"hindi": "एक दोहराई जाने वाली त्रासदी..."
					},
					"type": "speech"
				},
				{
					"speaker": "hild",
					"emotion": "base",
					"content": {
						"korean": "우린 그들의 목소리를 들어야만 해요.",
						"english": "We must hear their voices.",
						"japanese": "私たちは彼らの声を聞かなければなりません。",
						"chinese": "我们必须倾听他们的声音。",
						"french": "Nous devons entendre leurs voix.",
						"spanish": "Debemos escuchar sus voces.",
						"vietnamese": "Chúng ta phải lắng nghe tiếng nói của họ.",
						"thai": "เราต้องฟังเสียงของพวกเขา",
						"hindi": "हमें उनकी आवाज़ें सुननी होंगी।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"action": "enter",
					"speaker": "hild",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "hild",
					"emotion": "sad",
					"content": {
						"korean": "이제 더 깊은 곳으로… 이 비극의 심장으로 들어가는 거예요.",
						"english": "Now, deeper… into the heart of this tragedy.",
						"japanese": "さあ、もっと深くへ… この悲劇の核心へ。",
						"chinese": "现在，更深处……进入这场悲剧的心脏。",
						"french": "Maintenant, plus profond… au cœur de cette tragédie.",
						"spanish": "Ahora, más profundo… al corazón de esta tragedia.",
						"vietnamese": "Giờ đây, sâu hơn nữa… vào tận trái tim của bi kịch này.",
						"thai": "ตอนนี้ ลึกลงไปอีก… สู่ใจกลางของโศกนาฏกรรมนี้",
						"hindi": "अब, और गहराई में… इस त्रासदी के हृदय में।"
					}
				},
				{
					"content": {
						"korean": "멈출 수 없어.",
						"english": "Cannot stop.",
						"japanese": "止められない。",
						"chinese": "无法停止。",
						"french": "Je ne peux pas m'arrêter.",
						"spanish": "No puedo parar.",
						"vietnamese": "Không thể dừng lại.",
						"thai": "หยุดไม่ได้",
						"hindi": "रुक नहीं सकता।"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "hild",
					"emotion": "sad",
					"content": {
						"korean": "후회하지 않을 자신… 있나요?",
						"english": "Are you sure… you won't regret this?",
						"japanese": "後悔しない…自信はありますか？",
						"chinese": "你确定…不会后悔吗？",
						"french": "Êtes-vous sûr… de ne pas le regretter ?",
						"spanish": "¿Estás seguro… de que no te arrepentirás?",
						"vietnamese": "Bạn có chắc… sẽ không hối hận không?",
						"thai": "แน่ใจนะ… ว่าจะไม่เสียใจทีหลัง?",
						"hindi": "क्या तुम्हें… पछतावा नहीं होगा?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 고통의 고리를 끊는다면.",
						"english": "If you break this cycle of pain.",
						"japanese": "この苦痛の輪を断ち切るなら。",
						"chinese": "如果能斩断这痛苦的循环。",
						"french": "Si vous brisez ce cycle de douleur.",
						"spanish": "Si rompes este ciclo de dolor.",
						"vietnamese": "Nếu bạn phá vỡ vòng tròn đau khổ này.",
						"thai": "ถ้าเจ้าทำลายวงจรแห่งความเจ็บปวดนี้ได้",
						"hindi": "यदि तुम दर्द के इस चक्र को तोड़ दो।"
					},
					"speaker": "character_3",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "hild",
					"emotion": "sad",
					"content": {
						"korean": "그들의 절규가… 점점 더 강해지고 있어요.",
						"english": "Their screams… are growing stronger.",
						"japanese": "彼らの絶叫が… ますます強くなっている。",
						"chinese": "他们的尖叫… 越来越强烈了。",
						"french": "Leurs cris… deviennent de plus en plus forts.",
						"spanish": "Sus gritos… se hacen cada vez más fuertes.",
						"vietnamese": "Tiếng kêu gào của họ… đang ngày càng mạnh hơn.",
						"thai": "เสียงกรีดร้องของพวกเขา… เริ่มรุนแรงขึ้นเรื่อยๆ",
						"hindi": "उनकी चीखें… और तेज़ होती जा रही हैं।"
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "얼어붙은 유적 전체가 비명으로 가득 찼다.",
						"english": "The frozen ruins echoed with screams.",
						"japanese": "凍てついた遺跡全体が悲鳴で満たされた。",
						"chinese": "整个冰冻的遗迹充满了尖叫声。",
						"french": "Toute la ruine gelée fut remplie de cris.",
						"spanish": "Toda la ruina congelada se llenó de gritos.",
						"vietnamese": "Toàn bộ di tích đóng băng tràn ngập tiếng thét.",
						"thai": "ซากปรักหักพังที่แข็งเป็นน้ำแข็งทั้งหมดเต็มไปด้วยเสียงกรีดร้อง",
						"hindi": "जमी हुई पूरी खंडहर चीखों से भर गई।"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "어리석은 자들… 영원히 반복될 것이다.",
						"english": "Fools... This will repeat eternally.",
						"japanese": "愚か者たち…永遠に繰り返されるだろう。",
						"chinese": "愚蠢的人们……这一切将永远重复。",
						"french": "Imbéciles... Cela se répétera éternellement.",
						"spanish": "Tontos… Se repetirá por siempre.",
						"vietnamese": "Những kẻ ngốc… Điều này sẽ lặp lại mãi mãi.",
						"thai": "พวกคนโง่… มันจะวนซ้ำไปตลอดกาล",
						"hindi": "मूर्खों… यह हमेशा के लिए दोहराया जाएगा।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "아직… 끝나지 않았어. 이 고통을 멈출 거야.",
						"english": "It's not... over. I'll stop this suffering.",
						"japanese": "まだ…終わっていない。この苦痛を止めてみせる。",
						"chinese": "还没……结束。我将阻止这份痛苦。",
						"french": "Ce n'est pas... encore fini. J'arrêterai cette douleur.",
						"spanish": "Aún… no ha terminado. Detendré este dolor.",
						"vietnamese": "Vẫn chưa… kết thúc. Tôi sẽ chấm dứt nỗi đau này.",
						"thai": "ยังไม่… จบลง ฉันจะหยุดความเจ็บปวดนี้ให้ได้",
						"hindi": "अभी… खत्म नहीं हुआ है। मैं इस दर्द को रोकूंगा।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "크아악… 이 고통에서… 벗어날 수 있을까…",
						"english": "Ugh... Can I escape... this agony...?",
						"japanese": "くあああ…この苦痛から…逃れられるのか…",
						"chinese": "呃啊啊……我能摆脱……这份痛苦吗……",
						"french": "Argh... Puis-je... échapper à cette douleur...?",
						"spanish": "Arg... ¿Podré escapar... de este dolor...?",
						"vietnamese": "Ác... Liệu tôi có thể thoát khỏi... nỗi đau này không...?",
						"thai": "อ๊ากกก... ฉันจะหลุดพ้นจาก…ความเจ็บปวดนี้ได้ไหม…",
						"hindi": "आर्ग... क्या मैं इस दर्द से… कभी बच पाऊँगा…?"
					}
				},
				{
					"content": {
						"korean": "중간보스는 쓰러졌다. 그러나 얼음 속의 비명은 잦아들지 않았다.",
						"english": "The miniboss fell. But the screams from the ice did not quiet.",
						"japanese": "中ボスは倒れた。しかし、氷の中の悲鳴は鳴り止まなかった。",
						"chinese": "中间首领倒下了。然而，冰层中的尖叫声并未平息。",
						"french": "Le sous-boss est tombé. Pourtant, les cris dans la glace ne se sont pas tus.",
						"spanish": "El jefe intermedio cayó. Sin embargo, los gritos desde el hielo no cesaron.",
						"vietnamese": "Trùm phụ đã gục ngã. Nhưng tiếng thét trong băng vẫn không ngớt.",
						"thai": "บอสรองล้มลงแล้ว แต่เสียงกรีดร้องจากในน้ำแข็งก็ยังไม่จางหายไป",
						"hindi": "मिनी-बॉस गिर गया। लेकिन बर्फ से आती चीखें कम नहीं हुईं।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"speaker": "hild",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "hild",
					"emotion": "sad",
					"content": {
						"korean": "그들의 고통은… 끝나지 않았어요.",
						"english": "Their pain... is not over.",
						"japanese": "彼らの苦痛は…終わっていなかった。",
						"chinese": "他们的痛苦……还没有结束。",
						"french": "Leur souffrance... n'est pas terminée.",
						"spanish": "Su sufrimiento... no ha terminado.",
						"vietnamese": "Nỗi đau của họ… vẫn chưa kết thúc.",
						"thai": "ความเจ็บปวดของพวกเขา… ยังไม่จบลง",
						"hindi": "उनका दर्द… खत्म नहीं हुआ है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "대체 무엇이… 우리를 막는 거지?",
						"english": "What is it... that holds us back?",
						"japanese": "一体何が…我々を阻んでいるんだ？",
						"chinese": "到底是什么……在阻碍我们？",
						"french": "Qu'est-ce qui… nous arrête ?",
						"spanish": "¿Qué es exactamente… lo que nos detiene?",
						"vietnamese": "Rốt cuộc thì điều gì… đang cản trở chúng ta?",
						"thai": "แท้จริงแล้วอะไร… กำลังขัดขวางเราอยู่?",
						"hindi": "आखिर क्या है… जो हमें रोक रहा है?"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "빙하는 더 깊은 곳에서, 더 오래된 비극을 품고 있었다. 이제 그 진실을 마주할 때다.",
						"english": "The glacier harbored a deeper, older tragedy. Now is the time to face its truth.",
						"japanese": "氷河はさらに深い場所で、より古の悲劇を抱えていた。今こそその真実と向き合う時だ。",
						"chinese": "冰川深处，隐藏着更古老的悲剧。现在是时候面对那份真相了。",
						"french": "Le glacier recelait une tragédie plus profonde, plus ancienne. L'heure est venue d'affronter cette vérité.",
						"spanish": "El glaciar albergaba una tragedia más profunda y antigua. Ahora es el momento de enfrentar esa verdad.",
						"vietnamese": "Tảng băng chứa đựng một bi kịch sâu sắc, cổ xưa hơn. Đã đến lúc đối mặt với sự thật đó.",
						"thai": "ธารน้ำแข็งซ่อนโศกนาฏกรรมที่ลึกซึ้งและเก่าแก่กว่าไว้ ถึงเวลาที่จะเผชิญหน้ากับความจริงนั้นแล้ว",
						"hindi": "ग्लेशियर में एक गहरा, पुराना दुख छिपा था। अब उस सच्चाई का सामना करने का समय आ गया है।"
					},
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 얼음의 심장부에서 솟아올랐다.",
						"english": "A colossal shadow rose from the heart of the ice.",
						"japanese": "巨大な影が氷の心臓部から現れた。",
						"chinese": "一个巨大的身影从冰雪之心升起。",
						"french": "Une ombre colossale s'éleva du cœur de la glace.",
						"spanish": "Una sombra colosal surgió del corazón del hielo.",
						"vietnamese": "Một bóng tối khổng lồ trỗi dậy từ trái tim băng giá.",
						"thai": "เงาขนาดมหึมาผุดขึ้นจากใจกลางน้ำแข็ง",
						"hindi": "बर्फीले दिल से एक विशाल छाया उभरी।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "...누가 감히... 이 고통의 순환을 방해하는가!",
						"english": "...Who dares... disturb this cycle of pain!",
						"japanese": "...誰が… この苦痛の輪を邪魔するのか！",
						"chinese": "...谁敢… 打扰这痛苦的循环！",
						"french": "...Qui ose… perturber ce cycle de douleur !",
						"spanish": "...¡¿Quién se atreve… a perturbar este ciclo de dolor?!",
						"vietnamese": "...Kẻ nào… dám phá vỡ vòng tuần hoàn đau khổ này!",
						"thai": "...ใครบังอาจ… รบกวนวงจรแห่งความเจ็บปวดนี้!",
						"hindi": "...कौन हिम्मत करता है… दर्द के इस चक्र को तोड़ने की!"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "네가… 이 비명의 근원인가!",
						"english": "Are you… the source of these screams!",
						"japanese": "お前が… この悲鳴の根源か！",
						"chinese": "你就是… 这尖叫的根源吗！",
						"french": "Tu es… la source de ces cris !",
						"spanish": "¿Eres tú… la fuente de estos gritos?!",
						"vietnamese": "Ngươi… là nguồn gốc của những tiếng thét này sao!",
						"thai": "เจ้าคือ… ต้นกำเนิดของเสียงกรีดร้องเหล่านี้หรือ!",
						"hindi": "क्या तुम… इन चीखों का स्रोत हो!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 고통은… 영원히 반복될 운명. 너희도 마찬가지다!",
						"english": "This pain… is destined to repeat forever. And so are you!",
						"japanese": "この苦痛は… 永遠に繰り返される運命。お前たちもな！",
						"chinese": "这份痛苦… 注定会永远重复。你们也一样！",
						"french": "Cette douleur… est destinée à se répéter éternellement. Vous aussi !",
						"spanish": "Este dolor… está destinado a repetirse para siempre. ¡Y vosotros también!",
						"vietnamese": "Nỗi đau này… định mệnh sẽ lặp lại mãi mãi. Các ngươi cũng vậy!",
						"thai": "ความเจ็บปวดนี้… ถูกลิขิตให้วนเวียนไปตลอดกาล เจ้าก็เช่นกัน!",
						"hindi": "यह दर्द… हमेशा के लिए दोहराया जाएगा। और तुम भी!"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"spot": [
						2,
						2
					],
					"speaker": "hild",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "그를… 멈춰야 해요!",
						"english": "We must… stop him!",
						"japanese": "彼を… 止めなければ！",
						"chinese": "我们必须… 阻止他！",
						"french": "Il faut… l'arrêter !",
						"spanish": "¡Debemos… detenerlo!",
						"vietnamese": "Chúng ta phải… ngăn hắn lại!",
						"thai": "เราต้อง… หยุดเขา!",
						"hindi": "हमें उसे… रोकना होगा!"
					},
					"speaker": "hild",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "멈출 수 없다. 이 비극은… 끝나지 않는다.",
						"english": "Cannot be stopped. This tragedy… never ends.",
						"japanese": "止められない。この悲劇は…終わらない。",
						"chinese": "无法停止。这场悲剧……永无止境。",
						"french": "On ne peut pas l'arrêter. Cette tragédie... ne finira jamais.",
						"spanish": "No se puede detener. Esta tragedia… nunca terminará.",
						"vietnamese": "Không thể dừng lại. Bi kịch này… sẽ không bao giờ kết thúc.",
						"thai": "หยุดไม่ได้ ความโศกเศร้าครั้งนี้… จะไม่มีวันจบสิ้น",
						"hindi": "इसे रोका नहीं जा सकता। यह त्रासदी… कभी खत्म नहीं होगी।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"빙하의 균열이 벌어졌다. 그 너머에는 얼어붙은 고대 유적.",
			"차갑고 텅 빈 공간에, 잊혀진 영혼들의 비명이 울려 퍼졌다.",
			"예언자 힐드는 알았다. 이 얼음은 단순한 괴물이 아니라고.",
			"그 안에는 비극적인 인간의 흔적이, 끝나지 않는 고통과 함께 갇혀 있었다."
		],
		"english": [
			"A glacial rift opened. Beyond it, frozen ancient ruins.",
			"In the cold, empty space, the screams of forgotten souls echoed.",
			"Prophet Hilde knew. This ice was no mere monster.",
			"Within it, traces of tragic humanity were trapped, with unending suffering."
		],
		"japanese": [
			"氷河の亀裂が開いた。その奥には、凍てついた古代遺跡が。",
			"冷たく空虚な空間に、忘れ去られた魂たちの悲鳴が響き渡った。",
			"預言者ヒルデは知っていた。この氷は単なる怪物ではないと。",
			"その中には、悲劇的な人間の痕跡が、終わりのない苦痛と共に閉じ込められていた。"
		],
		"chinese": [
			"冰川裂开了。其深处，是冻结的古代遗迹。",
			"在冰冷空旷的空间里，被遗忘的灵魂的尖叫声回荡着。",
			"先知希尔德知道。这冰块绝非普通的怪物。",
			"其中，悲惨的人类痕迹被困，伴随着无尽的痛苦。"
		],
		"french": [
			"Une faille glaciaire s'est ouverte. Au-delà, d'anciennes ruines gelées.",
			"Dans l'espace froid et vide, les cris des âmes oubliées résonnaient.",
			"La prophétesse Hilde le savait. Cette glace n'était pas un simple monstre.",
			"À l'intérieur, des traces d'une humanité tragique étaient piégées, avec une souffrance sans fin."
		],
		"spanish": [
			"Una grieta glacial se abrió. Más allá, ruinas antiguas congeladas.",
			"En el espacio frío y vacío, los gritos de almas olvidadas resonaron.",
			"La profetisa Hilde lo sabía. Este hielo no era un simple monstruo.",
			"Dentro, vestigios de una humanidad trágica estaban atrapados, con un sufrimiento interminable."
		],
		"vietnamese": [
			"Một vết nứt băng hà mở ra. Phía sau đó, là tàn tích cổ đại đóng băng.",
			"Trong không gian lạnh lẽo, trống rỗng, tiếng hét của những linh hồn bị lãng quên vang vọng.",
			"Tiên tri Hilde đã biết. Tảng băng này không phải là một con quái vật đơn thuần.",
			"Bên trong nó, dấu vết của nhân loại bi thảm bị mắc kẹt, cùng với nỗi đau không ngừng."
		],
		"thai": [
			"รอยแยกธารน้ำแข็งเปิดออก พ้นไปจากนั้นคือซากปรักหักพังโบราณที่เยือกแข็ง",
			"ในพื้นที่อันหนาวเหน็บว่างเปล่า เสียงกรีดร้องของวิญญาณที่ถูกลืมเลือนดังก้อง",
			"นักพยากรณ์ฮิลเดอรู้ดี น้ำแข็งนี้ไม่ใช่อสุรกายธรรมดา",
			"ภายในนั้น ร่องรอยของมนุษยชาติอันน่าเศร้าถูกจองจำไว้ พร้อมกับความทุกข์ทรมานที่ไม่มีที่สิ้นสุด"
		],
		"hindi": [
			"एक हिमनदी दरार खुल गई। उसके पार, जमे हुए प्राचीन खंडहर।",
			"ठंडी, खाली जगह में, भूले हुए आत्माओं की चीखें गूँज उठीं।",
			"भविष्यवक्ता हिल्डे जानती थी। यह बर्फ केवल एक राक्षस नहीं था।",
			"उसके भीतर, दुखद मानवता के निशान अनंत पीड़ा के साथ फंसे हुए थे।"
		]
	}
} as const;
