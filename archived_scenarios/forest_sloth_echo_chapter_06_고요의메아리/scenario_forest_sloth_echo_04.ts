export const scenario_forest_sloth_echo_04 = {
	"scenario_id": "forest_sloth_echo_04",
	"order": 4,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"cedar": {
			"id": "mon_bd67c222-311e-4f31-b81f-931b14f6b5c6",
			"name": {
				"korean": "시더",
				"english": "Cedar",
				"japanese": "シダー",
				"chinese": "雪松",
				"french": "Cèdre",
				"spanish": "Cedro",
				"vietnamese": "Tuyết tùng",
				"thai": "ซีดาร์",
				"hindi": "देवदार"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f1057921-5fa2-4be2-767d-1a64c33e6e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9579f10e-eb78-40e5-d495-72f489322200/public"
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
					"emotion": "base",
					"content": {
						"korean": "세상은 고요함의 잔재에 잠식되어 있었다. 모든 것이 느려지고 있었다.",
						"english": "The world was consumed by the remnants of silence. Everything was slowing down.",
						"japanese": "世界は静寂の残滓に飲み込まれていた。すべてが減速していた。",
						"chinese": "世界被寂静的残余吞噬。一切都在变慢。",
						"french": "Le monde était consumé par les vestiges du silence. Tout ralentissait.",
						"spanish": "El mundo estaba consumido por los restos del silencio. Todo se ralentizaba.",
						"vietnamese": "Thế giới bị tàn dư của sự tĩnh lặng nuốt chửng. Mọi thứ đang chậm lại.",
						"thai": "โลกถูกกลืนกินด้วยเศษซากของความเงียบ ทุกอย่างกำลังช้าลง",
						"hindi": "दुनिया खामोशी के अवशेषों से घिर गई थी। सब कुछ धीमा हो रहा था।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이 무기력함… 끝이 없는 걸까.",
						"english": "This lethargy... is it endless?",
						"japanese": "この無気力さ…終わりがないのだろうか。",
						"chinese": "这种无力感……是无止境的吗？",
						"french": "Cette léthargie... est-elle sans fin ?",
						"spanish": "Este letargo... ¿es interminable?",
						"vietnamese": "Sự uể oải này... có phải là vô tận không?",
						"thai": "ความเฉื่อยชานี้... ไม่มีที่สิ้นสุดหรือ?",
						"hindi": "यह सुस्ती... क्या यह अंतहीन है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "사람들 그림자가… 더 느려지는 것 같아.",
						"english": "People's shadows... seem to be slowing down even more.",
						"japanese": "人々の影が…さらに遅くなっているようだ。",
						"chinese": "人们的影子……似乎变得更慢了。",
						"french": "Les ombres des gens... semblent ralentir encore plus.",
						"spanish": "Las sombras de la gente... parecen ralentizarse aún más.",
						"vietnamese": "Bóng của mọi người... dường như còn chậm hơn nữa.",
						"thai": "เงาของผู้คน... ดูเหมือนจะช้าลงไปอีก",
						"hindi": "लोगों की परछाइयाँ... और भी धीमी होती जा रही हैं।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "cedar"
				},
				{
					"content": {
						"korean": "그 그림자는 숲의 고요함이 세상을 따라다니는 흔적이지.",
						"english": "Those shadows are traces of the forest's silence haunting the world.",
						"japanese": "その影は森の静寂が世界に付き纏う痕跡だ。",
						"chinese": "那些影子是森林的寂静缠绕着世界的痕迹。",
						"french": "Ces ombres sont les traces du silence de la forêt qui hante le monde.",
						"spanish": "Esas sombras son rastros del silencio del bosque que acecha al mundo.",
						"vietnamese": "Những cái bóng đó là dấu vết của sự tĩnh lặng của khu rừng đang ám ảnh thế giới.",
						"thai": "เงาเหล่านั้นเป็นร่องรอยของความเงียบสงบของป่าที่หลอกหลอนโลก",
						"hindi": "वे परछाइयाँ जंगल की खामोशी के निशान हैं जो दुनिया को सता रही हैं।"
					},
					"emotion": "base",
					"speaker": "cedar",
					"type": "speech"
				},
				{
					"content": {
						"korean": "당신이 현자 시더인가요? 이 모든 것의 답을 아신다고.",
						"english": "Are you Sage Cidar? They say you know the answers to all of this.",
						"japanese": "あなたが賢者シダーですか？これらすべての答えを知っていると聞きましたが。",
						"chinese": "你是贤者西达吗？他们说你知道这一切的答案。",
						"french": "Êtes-vous le Sage Cidar ? On dit que vous connaissez les réponses à tout cela.",
						"spanish": "¿Es usted el Sabio Cidar? Dicen que sabe las respuestas a todo esto.",
						"vietnamese": "Ông là Hiền nhân Cidar phải không? Người ta nói ông biết câu trả lời cho tất cả những điều này.",
						"thai": "ท่านคือปราชญ์ซิดาร์หรือเปล่า? พวกเขาบอกว่าท่านรู้คำตอบของทั้งหมดนี้",
						"hindi": "क्या आप ऋषि सिदार हैं? वे कहते हैं कि आप इन सब के जवाब जानते हैं।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "cedar"
				},
				{
					"speaker": "cedar",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "세상을 잠식하는 무기력은 '고요함의 원천'에서 흘러나온 것.",
						"english": "The lethargy engulfing the world emanates from the 'Source of Serenity'.",
						"japanese": "世界を蝕む無気力は、「静寂の源」から流れ出たものだ。",
						"chinese": "吞噬世界的倦怠感源自“寂静之源”。",
						"french": "La léthargie qui envahit le monde émane de la « Source de Sérénité ».",
						"spanish": "La apatía que consume el mundo emana de la \"Fuente de Serenidad\".",
						"vietnamese": "Sự thờ ơ bao trùm thế giới bắt nguồn từ 'Suối Nguồn Tĩnh Lặng'.",
						"thai": "ความเฉื่อยชาที่กลืนกินโลกหลั่งไหลออกมาจาก 'แหล่งกำเนิดแห่งความสงบ'",
						"hindi": "दुनिया को निगलने वाली सुस्ती 'शांति के स्रोत' से निकली है।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "고요함의 원천?",
						"english": "Source of Serenity?",
						"japanese": "静寂の源、だと？",
						"chinese": "寂静之源？",
						"french": "La Source de Sérénité ?",
						"spanish": "¿La Fuente de Serenidad?",
						"vietnamese": "Suối Nguồn Tĩnh Lặng ư?",
						"thai": "แหล่งกำเนิดแห่งความสงบงั้นหรือ?",
						"hindi": "शांति का स्रोत?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "슬로우는 그것을 '안식'이라 불렀지. 영원한 안식.",
						"english": "Slow called it 'Rest'. Eternal Rest.",
						"japanese": "スロウはそれを「安息」と呼んだ。永遠の安息を。",
						"chinese": "斯洛称之为“安息”。永恒的安息。",
						"french": "Slow l'appelait « Repos ». Le repos éternel.",
						"spanish": "Slow lo llamó \"Descanso\". El descanso eterno.",
						"vietnamese": "Slow gọi nó là 'Nghỉ Ngơi'. Nghỉ ngơi vĩnh cửu.",
						"thai": "สโลว์เรียกมันว่า 'การพักผ่อน' การพักผ่อนชั่วนิรันดร์",
						"hindi": "स्लो ने इसे 'विश्राम' कहा था। चिरस्थायी विश्राम।"
					},
					"emotion": "base",
					"speaker": "cedar",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…안식? 하지만 사람들은 고통스러워하고 있어요.",
						"english": "...Rest? But people are suffering.",
						"japanese": "…安息？　だが、人々は苦しんでいる。",
						"chinese": "……安息？但人们正在受苦。",
						"french": "...Le repos ? Mais les gens souffrent.",
						"spanish": "¿...Descanso? Pero la gente está sufriendo.",
						"vietnamese": "...Nghỉ ngơi ư? Nhưng mọi người đang chịu đựng.",
						"thai": "...พักผ่อนงั้นหรือ? แต่ผู้คนกำลังทุกข์ทรมาน",
						"hindi": "…विश्राम? लेकिन लोग तो पीड़ित हैं।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "고통 속에서도 숲의 고요함을 그리워하는 자들이 많아. 중독처럼.",
						"english": "Even amidst the pain, many crave the forest's serenity. Like an addiction.",
						"japanese": "苦しみの中にあっても、森の静寂を求める者は多い。まるで中毒のように。",
						"chinese": "即使在痛苦中，许多人也渴望森林的宁静。如同上瘾一般。",
						"french": "Même dans la douleur, beaucoup aspirent à la sérénité de la forêt. Comme une addiction.",
						"spanish": "Incluso en el dolor, muchos anhelan la serenidad del bosque. Como una adicción.",
						"vietnamese": "Ngay cả trong đau khổ, nhiều người vẫn khao khát sự tĩnh lặng của rừng. Như một cơn nghiện.",
						"thai": "แม้จะอยู่ในความเจ็บปวด หลายคนก็ยังโหยหาความสงบของป่า เหมือนการเสพติด",
						"hindi": "पीड़ा में भी, कई लोग जंगल की शांति के लिए तरसते हैं। एक लत की तरह।"
					},
					"emotion": "sad",
					"speaker": "cedar",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "cedar"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "숲의 심연에는 모든 생명의 활력을 흡수하는 무언가가 잠들어 있었다.",
						"english": "In the forest's depths, something that absorbed the vitality of all life lay dormant.",
						"japanese": "森の深淵には、あらゆる生命の活力を吸収する何かが眠っていた。",
						"chinese": "在森林深处，沉睡着某种吸收所有生命活力的东西。",
						"french": "Dans les profondeurs de la forêt, quelque chose qui absorbait la vitalité de toute vie était endormi.",
						"spanish": "En las profundidades del bosque, algo que absorbía la vitalidad de toda vida yacía latente.",
						"vietnamese": "Trong vực sâu của rừng, có thứ gì đó đang ngủ yên, hấp thụ sinh lực của mọi sự sống.",
						"thai": "ในส่วนลึกของป่า มีบางสิ่งหลับใหลอยู่ ซึ่งดูดซับพลังชีวิตของสรรพสิ่ง",
						"hindi": "जंगल की गहराइयों में, कुछ ऐसा सोया हुआ था जो सभी जीवन की शक्ति को सोख लेता था।"
					},
					"speaker": "cedar",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그게 '고요함의 원천'인가요?",
						"english": "Is that the 'Source of Serenity'?",
						"japanese": "それが「静寂の源」なのか？",
						"chinese": "那就是“寂静之源”吗？",
						"french": "C'est ça la « Source de Sérénité » ?",
						"spanish": "¿Es esa la \"Fuente de Serenidad\"?",
						"vietnamese": "Đó có phải là 'Suối Nguồn Tĩnh Lặng' không?",
						"thai": "นั่นคือ 'แหล่งกำเนิดแห่งความสงบ' ใช่ไหม?",
						"hindi": "क्या वही 'शांति का स्रोत' है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그래. 숲이 문을 열었을 때, 그것도 함께 풀려난 것이지.",
						"english": "Yes. When the forest opened its gates, it was unleashed as well.",
						"japanese": "ああ。森が門を開いた時、それもまた解き放たれたのだ。",
						"chinese": "是的。当森林之门打开时，它也随之被释放了。",
						"french": "Oui. Quand la forêt a ouvert ses portes, elle fut également libérée.",
						"spanish": "Sí. Cuando el bosque abrió sus puertas, también fue liberado.",
						"vietnamese": "Đúng vậy. Khi rừng mở cửa, nó cũng được giải phóng.",
						"thai": "ใช่ เมื่อป่าเปิดประตู มันก็ถูกปลดปล่อยออกมาพร้อมกัน",
						"hindi": "हाँ। जब जंगल ने अपने द्वार खोले, तो यह भी मुक्त हो गया।"
					},
					"emotion": "sad",
					"speaker": "cedar",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "결국 숲의 고요함이 세상을 이렇게 만든 거군요.",
						"english": "So, the forest's serenity is what brought the world to this state.",
						"japanese": "結局、森の静寂が世界をこんな風にしたのですね。",
						"chinese": "最终，是森林的宁静造就了世界如今的模样。",
						"french": "C'est donc la sérénité de la forêt qui a mené le monde à cet état.",
						"spanish": "Así que la serenidad del bosque es lo que ha llevado al mundo a este estado.",
						"vietnamese": "Vậy ra, sự tĩnh lặng của rừng đã khiến thế giới thành ra thế này.",
						"thai": "สรุปแล้ว ความสงบของป่าคือสิ่งที่ทำให้โลกเป็นแบบนี้สินะ",
						"hindi": "तो, जंगल की शांति ही है जिसने दुनिया को इस स्थिति में पहुँचाया।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "슬로우의 의도는… 영원한 고요였다. 모든 것이 멈춘.",
						"english": "Slow's intention was... eternal serenity. Where everything ceased.",
						"japanese": "スロウの意図は…永遠の静寂だった。すべてが停止した。",
						"chinese": "斯洛的意图是……永恒的宁静。一切都停止了。",
						"french": "L'intention de Slow était... la sérénité éternelle. Où tout s'arrête.",
						"spanish": "La intención de Slow era... la serenidad eterna. Donde todo se detiene.",
						"vietnamese": "Ý định của Slow là... sự tĩnh lặng vĩnh cửu. Nơi mọi thứ ngừng lại.",
						"thai": "เจตนาของสโลว์คือ... ความสงบชั่วนิรันดร์ ที่ทุกสิ่งหยุดนิ่ง",
						"hindi": "स्लो का इरादा था... शाश्वत शांति। जहाँ सब कुछ थम गया।"
					},
					"speaker": "cedar",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "cedar"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이대로 두면 세상은 영원한 고요에 잠길 거야.",
						"english": "If left like this, the world will fall into eternal silence.",
						"japanese": "このままでは、世界は永遠の静寂に包まれるだろう。",
						"chinese": "若任其发展，世界将陷入永恒的寂静。",
						"french": "Si on le laisse faire, le monde tombera dans un silence éternel.",
						"spanish": "Si lo dejamos así, el mundo caerá en un silencio eterno.",
						"vietnamese": "Cứ để như vậy, thế giới sẽ chìm vào sự tĩnh lặng vĩnh viễn.",
						"thai": "หากปล่อยไว้เช่นนี้ โลกจะจมดิ่งสู่ความเงียบงันชั่วนิรันดร์",
						"hindi": "यदि इसे ऐसे ही छोड़ दिया गया, तो दुनिया शाश्वत सन्नाटे में डूब जाएगी。"
					},
					"speaker": "cedar",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "막아야 해요. 하지만 어떻게….",
						"english": "We must stop it. But how...?",
						"japanese": "止めなければなりません。しかし、どうやって…。",
						"chinese": "必须阻止。但该如何……",
						"french": "Nous devons l'arrêter. Mais comment...",
						"spanish": "Debemos detenerlo. Pero, ¿cómo...?",
						"vietnamese": "Phải ngăn chặn nó. Nhưng bằng cách nào...?",
						"thai": "เราต้องหยุดมัน แต่จะทำอย่างไร...",
						"hindi": "हमें इसे रोकना होगा। पर कैसे...?"
					}
				},
				{
					"speaker": "cedar",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "고요함의 주인이 다시 깨어날 것이라는 예언이 있어.",
						"english": "There is a prophecy that the Master of Silence will awaken again.",
						"japanese": "静寂の主が再び目覚めるという予言がある。",
						"chinese": "有预言说，寂静之主将再次苏醒。",
						"french": "Il existe une prophétie selon laquelle le Maître du Silence se réveillera.",
						"spanish": "Hay una profecía de que el Señor del Silencio despertará de nuevo.",
						"vietnamese": "Có một lời tiên tri rằng Chủ nhân của Sự Tĩnh Lặng sẽ thức tỉnh trở lại.",
						"thai": "มีคำทำนายว่าจ้าวแห่งความเงียบงันจะตื่นขึ้นอีกครั้ง",
						"hindi": "ऐसी भविष्यवाणी है कि सन्नाटे का स्वामी फिर से जागृत होगा।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "주인?",
						"english": "Master?",
						"japanese": "主？",
						"chinese": "主人？",
						"french": "Maître ?",
						"spanish": "¿Señor?",
						"vietnamese": "Chủ nhân?",
						"thai": "จ้าว?",
						"hindi": "स्वामी?"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "네 앞을 막는 저 존재도, 그 고요함의 일부일 뿐.",
						"english": "Even that being blocking your path is but a part of that silence.",
						"japanese": "君の道を阻むあの存在も、その静寂の一部に過ぎない。",
						"chinese": "阻挡你前方的那个存在，也只是那寂静的一部分。",
						"french": "Cette entité qui bloque ton chemin n'est qu'une partie de ce silence.",
						"spanish": "Esa entidad que bloquea tu camino es solo una parte de ese silencio.",
						"vietnamese": "Ngay cả thực thể đang chặn đường ngươi cũng chỉ là một phần của sự tĩnh lặng đó.",
						"thai": "แม้แต่สิ่งมีชีวิตที่ขวางทางเจ้า ก็เป็นเพียงส่วนหนึ่งของความเงียบงันนั้น",
						"hindi": "तुम्हारी राह रोकने वाला वह अस्तित्व भी, उस सन्नाटे का ही एक हिस्सा मात्र है।"
					},
					"speaker": "cedar",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 길을 막았다. 고요함 그 자체였다.",
						"english": "A colossal shadow blocked the way. It was silence itself.",
						"japanese": "巨大な影が道を塞いだ。それは静寂そのものだった。",
						"chinese": "巨大的阴影挡住了去路。那是寂静本身。",
						"french": "Une ombre colossale bloquait le chemin. C'était le silence même.",
						"spanish": "Una sombra colosal bloqueó el camino. Era el silencio mismo.",
						"vietnamese": "Một cái bóng khổng lồ đã chặn lối đi. Đó chính là sự tĩnh lặng.",
						"thai": "เงามหึมาขวางทางไว้ มันคือความเงียบงันนั่นเอง",
						"hindi": "एक विशाल छाया ने रास्ता रोक दिया। वह स्वयं सन्नाटा था।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "더 이상 나아갈 수 없다. 여기는 영원한 안식의 영역.",
						"english": "You can't go any further. This is the realm of eternal rest.",
						"japanese": "これ以上進むことはできない。ここは永遠の安息の領域だ。",
						"chinese": "无法再向前了。这里是永恒安息的领域。",
						"french": "Tu ne peux pas aller plus loin. C'est le royaume du repos éternel.",
						"spanish": "No puedes avanzar más. Este es el reino del descanso eterno.",
						"vietnamese": "Ngươi không thể tiến xa hơn nữa. Đây là lãnh địa của sự yên nghỉ vĩnh hằng.",
						"thai": "เจ้าไปต่อไม่ได้แล้ว นี่คืออาณาจักรแห่งการพักผ่อนชั่วนิรันดร์",
						"hindi": "तुम और आगे नहीं जा सकते। यह शाश्वत विश्राम का क्षेत्र है।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…방해하지 마.",
						"english": "...Don't disturb.",
						"japanese": "…邪魔をするな。",
						"chinese": "……别打扰。",
						"french": "...Ne dérange pas.",
						"spanish": "...No molestes.",
						"vietnamese": "...Đừng làm phiền.",
						"thai": "...อย่ารบกวน",
						"hindi": "...परेशान मत करो।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "너의 활력도… 결국 고요함 속으로 사라질 것이다.",
						"english": "Your vitality too... will eventually vanish into the silence.",
						"japanese": "君の活力も…結局、静寂の中に消え去るだろう。",
						"chinese": "你的活力……最终也将消逝于寂静之中。",
						"french": "Ta vitalité aussi... finira par disparaître dans le silence.",
						"spanish": "Tu vitalidad también... eventualmente desaparecerá en el silencio.",
						"vietnamese": "Ngay cả sức sống của ngươi cũng... cuối cùng sẽ tan biến vào sự tĩnh lặng.",
						"thai": "พลังชีวิตของเจ้า...ก็จะหายไปในความเงียบงันในที่สุด",
						"hindi": "तुम्हारी जीवंतता भी... अंततः सन्नाटे में विलीन हो जाएगी।"
					},
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "네 의지는… 고요함 속에서 꺾일 것이다.",
						"english": "Your will... shall break in the silence.",
						"japanese": "お前の意思は…静寂の中で折れるだろう。",
						"chinese": "你的意志……将在寂静中瓦解。",
						"french": "Ta volonté… sera brisée dans le silence.",
						"spanish": "Tu voluntad… se quebrará en la quietud.",
						"vietnamese": "Ý chí của ngươi... sẽ bị bẻ gãy trong sự tĩnh lặng.",
						"thai": "เจตจำนงของเจ้า... จะแตกหักท่ามกลางความเงียบงัน",
						"hindi": "तुम्हारी इच्छाशक्ति... खामोशी में टूट जाएगी।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아니… 난 포기하지 않아.",
						"english": "No... I won't give up.",
						"japanese": "いや…私は諦めない。",
						"chinese": "不……我不会放弃。",
						"french": "Non… je n'abandonnerai pas.",
						"spanish": "No… no me rendiré.",
						"vietnamese": "Không... Ta sẽ không bỏ cuộc.",
						"thai": "ไม่... ฉันไม่ยอมแพ้",
						"hindi": "नहीं... मैं हार नहीं मानूंगा।"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "하찮은 저항… 결국 고요함은… 돌아올 것이다. 진정한 주인과 함께.",
						"english": "Futile resistance... In the end, silence will... return. With its true master.",
						"japanese": "愚かな抵抗…結局、静寂は…戻ってくるだろう。真の主と共に。",
						"chinese": "微不足道的抵抗……最终，寂静将……回归。与真正的S主一同。",
						"french": "Résistance futile... Au final, le silence... reviendra. Avec son vrai maître.",
						"spanish": "Resistencia inútil... Al final, el silencio... regresará. Con su verdadero señor.",
						"vietnamese": "Sự kháng cự vô ích... Cuối cùng, sự tĩnh lặng sẽ... trở lại. Cùng với chủ nhân thực sự của nó.",
						"thai": "การต่อต้านที่ไร้ค่า... ในที่สุดความเงียบงัน...จะกลับมา พร้อมกับจ้าวที่แท้จริง",
						"hindi": "व्यर्थ का प्रतिरोध... अंततः सन्नाटा... वापस आ जाएगा। अपने सच्चे स्वामी के साथ।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "진정한 주인… 슬로우?",
						"english": "The true master... Slow?",
						"japanese": "真の主…スロウ？",
						"chinese": "真正的主人……斯洛？",
						"french": "Le vrai maître… Slow ?",
						"spanish": "¿El verdadero maestro… Slow?",
						"vietnamese": "Chủ nhân thật sự… Slow?",
						"thai": "นายท่านที่แท้จริง… สโลว์?",
						"hindi": "असली मालिक... स्लो?"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "알 수 없는 잔향만이 남았다. 고요함의 진정한 근원, 그리고 주인을 향한 길이 열렸다.",
						"english": "Only an unknown lingering scent remains. The true source of tranquility, and the path to its master, has opened.",
						"japanese": "未知の残響のみが残った。静寂の真の根源、そして主への道が開かれた。",
						"chinese": "只剩下未知的余韵。寂静的真正根源，以及通向主人之路已经开启。",
						"french": "Seul un parfum persistant inconnu demeure. La véritable source de tranquillité, et le chemin vers son maître, s'est ouvert.",
						"spanish": "Solo queda una estela desconocida. La verdadera fuente de la quietud, y el camino hacia su maestro, se ha abierto.",
						"vietnamese": "Chỉ còn lại dư vị không rõ. Nguồn gốc thật sự của sự tĩnh lặng, và con đường đến chủ nhân, đã mở ra.",
						"thai": "เหลือเพียงกลิ่นอายที่ไม่อาจทราบได้ ต้นกำเนิดที่แท้จริงของความเงียบสงบ และเส้นทางสู่เจ้านายได้เปิดออกแล้ว",
						"hindi": "केवल एक अज्ञात अवशेष बचा है। शांति का असली स्रोत, और मालिक तक का रास्ता खुल गया है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…슬로우를 막아야 해.",
						"english": "...Must stop Slow.",
						"japanese": "…スロウを止めなければ。",
						"chinese": "……必须阻止斯洛。",
						"french": "…Il faut arrêter Slow.",
						"spanish": "…Debo detener a Slow.",
						"vietnamese": "...Phải ngăn Slow lại.",
						"thai": "...ต้องหยุดสโลว์",
						"hindi": "...स्लो को रोकना होगा।"
					},
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"세상은 느려졌다. 숲이 남긴 그림자 때문이었다.",
			"사람들은 활력을 잃고, 시간마저 멈춘 듯했다.",
			"고요함 속에서 진실을 찾는 자, 현자 시더.",
			"그가 아는 것은 숲의 심연과, 슬로우의 진짜 안식.",
			"모든 답은 그에게 있었다."
		],
		"english": [
			"The world slowed. It was due to the shadows left by the forest.",
			"People lost vitality, and even time seemed to stop.",
			"The one who seeks truth amidst the silence, Sage Cidar.",
			"What he knows is the forest's abyss and Slow's true repose.",
			"All answers lay with him."
		],
		"japanese": [
			"世界は減速した。森が残した影のせいだった。",
			"人々は活力を失い、時間さえ止まったようだった。",
			"静寂の中で真実を求める者、賢者シダー。",
			"彼が知るのは森の深淵と、スロウの真の安息。",
			"すべての答えは彼にあった。"
		],
		"chinese": [
			"世界慢了下来。那是森林留下的阴影造成的。",
			"人们失去了活力，甚至时间也似乎停止了。",
			"在寂静中寻求真理之人，贤者西达。",
			"他所知晓的，是森林的深渊和慢的真正安息。",
			"所有的答案都在他那里。"
		],
		"french": [
			"Le monde a ralenti. C'était à cause des ombres laissées par la forêt.",
			"Les gens perdaient leur vitalité, et même le temps semblait s'être arrêté.",
			"Celui qui cherche la vérité au milieu du silence, le Sage Cidar.",
			"Ce qu'il sait, c'est l'abîme de la forêt et le véritable repos de Slow.",
			"Toutes les réponses étaient en lui."
		],
		"spanish": [
			"El mundo se ralentizó. Fue debido a las sombras que dejó el bosque.",
			"La gente perdió su vitalidad, e incluso el tiempo pareció detenerse.",
			"Aquel que busca la verdad en medio del silencio, el Sabio Cidar.",
			"Lo que él sabe es el abismo del bosque y el verdadero reposo de Slow.",
			"Todas las respuestas estaban en él."
		],
		"vietnamese": [
			"Thế giới chậm lại. Đó là do những bóng tối mà khu rừng để lại.",
			"Mọi người mất đi sức sống, và ngay cả thời gian cũng dường như ngừng lại.",
			"Người tìm kiếm sự thật giữa sự tĩnh lặng, Hiền nhân Cidar.",
			"Điều anh biết là vực thẳm của khu rừng và sự yên nghỉ thực sự của Slow.",
			"Mọi câu trả lời đều ở anh."
		],
		"thai": [
			"โลกช้าลง มันเป็นเพราะเงาที่ป่าทิ้งไว้",
			"ผู้คนหมดพลังงาน และแม้แต่เวลาก็ดูเหมือนจะหยุดนิ่ง",
			"ผู้ที่แสวงหาความจริงท่ามกลางความเงียบงัน ปราชญ์ซิดาร์",
			"สิ่งที่เขารู้คือห้วงลึกของป่าและการพักผ่อนที่แท้จริงของสโลว์",
			"คำตอบทั้งหมดอยู่ที่เขา"
		],
		"hindi": [
			"दुनिया धीमी हो गई। यह जंगल द्वारा छोड़ी गई छायाओं के कारण था।",
			"लोगों ने जीवन शक्ति खो दी, और समय भी थम-सा गया।",
			"खामोशी के बीच सच की तलाश करने वाला, ऋषि सिदार।",
			"वह जो जानता है वह जंगल की खाई और स्लो का सच्चा आराम है।",
			"सारे जवाब उसके पास थे।"
		]
	}
} as const;
