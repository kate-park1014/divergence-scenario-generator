export const scenario_modern_nexus_45_03 = {
	"scenario_id": "modern_nexus_45_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"lin": {
			"id": "mon_d036a884-3dde-472c-9fe7-c4807643860f",
			"name": {
				"korean": "린",
				"english": "Lin",
				"japanese": "リン",
				"chinese": "琳",
				"french": "Lin",
				"spanish": "Lin",
				"vietnamese": "Lin",
				"thai": "ลิน",
				"hindi": "लिन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a095dd66-1857-4f44-68b0-2ece83006d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/05b02694-f1ed-4e4c-b7ca-fb5b74a48900/public"
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
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "도시의 풍경이 흐릿하게 왜곡되었다. 모든 것이 불확실했다.",
						"english": "The city's scenery was vaguely distorted. Everything was uncertain.",
						"japanese": "街の風景はぼんやりと歪んでいた。すべてが不確かだった。",
						"chinese": "城市景象模糊扭曲。一切都充满了不确定性。",
						"french": "Le paysage urbain était vaguement déformé. Tout était incertain.",
						"spanish": "El paisaje de la ciudad estaba vagamente distorsionado. Todo era incierto.",
						"vietnamese": "Phong cảnh thành phố bị biến dạng mờ ảo. Mọi thứ đều không chắc chắn.",
						"thai": "ทิวทัศน์ของเมืองบิดเบี้ยวไม่ชัดเจน ทุกสิ่งไม่แน่นอน",
						"hindi": "शहर का नज़ारा धुंधला और विकृत था। सब कुछ अनिश्चित था।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "왠지… 모든 게 꿈같아.",
						"english": "Somehow... everything feels like a dream.",
						"japanese": "なぜか…すべてが夢みたいだ。",
						"chinese": "总觉得…一切都像一场梦。",
						"french": "D'une certaine manière... tout semble être un rêve.",
						"spanish": "De alguna manera... todo parece un sueño.",
						"vietnamese": "Không hiểu sao… mọi thứ cứ như một giấc mơ.",
						"thai": "ไม่รู้ทำไม... ทุกอย่างเหมือนความฝัน",
						"hindi": "पता नहीं क्यों... सब कुछ एक सपने जैसा लग रहा है।"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "lin",
					"spot": [
						5,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "오래된 기억, 잊혀진 속삭임…",
						"english": "Old memories, forgotten whispers...",
						"japanese": "古い記憶、忘れられた囁き…",
						"chinese": "古老的记忆，遗忘的低语…",
						"french": "Vieux souvenirs, murmures oubliés…",
						"spanish": "Viejos recuerdos, susurros olvidados…",
						"vietnamese": "Ký ức cũ, những lời thì thầm bị lãng quên…",
						"thai": "ความทรงจำเก่าแก่ เสียงกระซิบที่ถูกลืมเลือน",
						"hindi": "पुरानी यादें, भूली हुई फुसफुसाहट..."
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "저 사람은 누구지?",
						"english": "Who is that person?",
						"japanese": "あの人は誰？",
						"chinese": "那个人是谁？",
						"french": "Qui est cette personne ?",
						"spanish": "¿Quién es esa persona?",
						"vietnamese": "Người kia là ai?",
						"thai": "คนนั้นคือใคร",
						"hindi": "वह व्यक्ति कौन है?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "base",
					"content": {
						"korean": "때로는 가장 익숙한 것이, 가장 낯설지…",
						"english": "Sometimes the most familiar things are the most unfamiliar...",
						"japanese": "時には一番慣れたものが、一番見慣れないものになる…",
						"chinese": "有时候最熟悉的东西，反而最陌生…",
						"french": "Parfois, ce qui est le plus familier est le plus étrange...",
						"spanish": "A veces, lo más familiar es lo más extraño...",
						"vietnamese": "Đôi khi điều quen thuộc nhất lại là điều xa lạ nhất…",
						"thai": "บางครั้งสิ่งที่คุ้นเคยที่สุดกลับกลายเป็นสิ่งที่ไม่คุ้นเคยที่สุด...",
						"hindi": "कभी-कभी सबसे परिचित चीज़ें ही सबसे अपरिचित होती हैं..."
					}
				},
				{
					"content": {
						"korean": "왠지 모르게 끌려.",
						"english": "I'm drawn to it somehow.",
						"japanese": "なぜか惹かれる。",
						"chinese": "不知为何，被吸引了。",
						"french": "Je suis attiré, sans savoir pourquoi.",
						"spanish": "Me siento atraído de alguna manera.",
						"vietnamese": "Không hiểu sao lại bị cuốn hút.",
						"thai": "ไม่รู้ทำไมถึงถูกดึงดูด",
						"hindi": "किसी तरह खिंचा चला जा रहा हूँ।"
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
					"speaker": "lin",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "base",
					"content": {
						"korean": "오래된 종이 냄새, 익숙한 거리의 소음…",
						"english": "The smell of old paper, the familiar sound of the street...",
						"japanese": "古い紙の匂い、聞き慣れた街の喧騒…",
						"chinese": "旧纸的味道，熟悉的街道喧嚣……",
						"french": "L'odeur du vieux papier, le bruit familier de la rue...",
						"spanish": "El olor a papel viejo, el familiar ruido de la calle...",
						"vietnamese": "Mùi giấy cũ, tiếng ồn quen thuộc của phố xá...",
						"thai": "กลิ่นกระดาษเก่า เสียงจอแจคุ้นเคยของถนน...",
						"hindi": "पुरानी कागज़ की गंध, गली का जाना-पहचाना शोर..."
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "(코를 킁킁거린다) 이 오래된 냄새… 왠지 모르게…",
						"english": "(Sniffs) This old scent... somehow...",
						"japanese": "（鼻をクンクンさせる）この古びた匂い…なんだか…",
						"chinese": "（嗅了嗅）这股旧味道……不知为何……",
						"french": "(Renifle) Cette vieille odeur... je ne sais pas pourquoi...",
						"spanish": "(Husmea) Este viejo aroma... de alguna manera...",
						"vietnamese": "(Hít hà) Mùi hương cũ này... không hiểu sao lại...",
						"thai": "(สูดจมูก) กลิ่นเก่าๆ นี้... ทำไมก็ไม่รู้...",
						"hindi": "(सूंघता है) यह पुरानी गंध... पता नहीं क्यों..."
					},
					"type": "speech",
					"speaker": "character_1"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "뭔가 익숙한데… 기억나지 않아.",
						"english": "It feels familiar... but I can't remember.",
						"japanese": "何か覚えがあるのに…思い出せない。",
						"chinese": "感觉很熟悉……却想不起来。",
						"french": "C'est familier... mais je ne peux pas me souvenir.",
						"spanish": "Me resulta familiar... pero no puedo recordarlo.",
						"vietnamese": "Thật quen thuộc... nhưng không thể nhớ ra.",
						"thai": "คุ้นเคยจัง... แต่นึกไม่ออก",
						"hindi": "कुछ जाना-पहचाना लग रहा है... पर याद नहीं आ रहा।"
					},
					"type": "speech",
					"speaker": "character_2"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "잊혀진 기억의 조각들이, 너의 안에서 노래하고 있어.",
						"english": "Fragments of forgotten memories are singing within you.",
						"japanese": "忘れられた記憶の断片が、君の中で歌っている。",
						"chinese": "遗忘的记忆碎片，正在你心中歌唱。",
						"french": "Des fragments de souvenirs oubliés chantent en toi.",
						"spanish": "Fragmentos de recuerdos olvidados cantan dentro de ti.",
						"vietnamese": "Những mảnh ký ức đã lãng quên, đang hát vang trong bạn.",
						"thai": "ชิ้นส่วนความทรงจำที่ถูกลืมกำลังร้องเพลงอยู่ข้างในตัวเธอ",
						"hindi": "भूली हुई यादों के टुकड़े, तुम्हारे अंदर गा रहे हैं।"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이 노래… 누구를 떠올리게 해. 강하게…",
						"english": "This song... it reminds me of someone. Strongly...",
						"japanese": "この歌…誰かを思い出させる。強く…",
						"chinese": "这首歌……让我想起某人。强烈地……",
						"french": "Cette chanson... elle me rappelle quelqu'un. Fortement...",
						"spanish": "Esta canción... me recuerda a alguien. Fuertemente...",
						"vietnamese": "Bài hát này... khiến tôi nhớ về ai đó. Rất mãnh liệt...",
						"thai": "เพลงนี้... ทำให้ฉันนึกถึงใครบางคน แรงกล้า...",
						"hindi": "यह गाना... किसी की याद दिलाता है। ज़ोर से..."
					},
					"type": "speech",
					"speaker": "character_1"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "내가… 누군가를 갈망하고 있어. 이 환영 속에서.",
						"english": "I... yearn for someone. In this illusion.",
						"japanese": "私は…誰かを渇望している。この幻影の中で。",
						"chinese": "我……渴望着某人。在这幻象之中。",
						"french": "Je... désire ardemment quelqu'un. Dans cette illusion.",
						"spanish": "Yo... anhelo a alguien. En esta ilusión.",
						"vietnamese": "Tôi... khao khát ai đó. Trong ảo ảnh này.",
						"thai": "ฉัน... โหยหาใครบางคน ในภาพลวงตานี้",
						"hindi": "मैं... किसी को तरस रहा हूँ। इस भ्रम में।"
					}
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "너의 심장이, 진실을 부르고 있지.",
						"english": "Your heart is calling out for the truth.",
						"japanese": "君の心が、真実を呼んでいる。",
						"chinese": "你的心，正在呼唤着真相。",
						"french": "Ton cœur appelle la vérité.",
						"spanish": "Tu corazón está llamando a la verdad.",
						"vietnamese": "Trái tim bạn đang kêu gọi sự thật.",
						"thai": "หัวใจของเธอกำลังเรียกร้องหาความจริง",
						"hindi": "तुम्हारा दिल, सच्चाई को पुकार रहा है।"
					},
					"emotion": "happy"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "lin"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "환영은 깊어지고, 진실은 희미해져…",
						"english": "The illusion deepens, and the truth fades...",
						"japanese": "幻影は深まり、真実は薄れる…",
						"chinese": "幻象加深，真相模糊……",
						"french": "L'illusion s'approfondit, et la vérité s'estompe...",
						"spanish": "La ilusión se profundiza y la verdad se desvanece...",
						"vietnamese": "Ảo ảnh càng sâu, sự thật càng mờ nhạt...",
						"thai": "ภาพลวงตายิ่งลึกซึ้ง ความจริงยิ่งจางหาย...",
						"hindi": "भ्रम गहरा होता जा रहा है, और सच्चाई धुंधली पड़ रही है..."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이제 뭐가 진짜고 뭐가 가짜인지 모르겠어.",
						"english": "Now I don't know what's real and what's fake.",
						"japanese": "もう何が本物で何が偽物なのか分からない。",
						"chinese": "现在我分不清什么是真什么是假了。",
						"french": "Maintenant je ne sais plus ce qui est réel et ce qui est faux.",
						"spanish": "Ahora no sé qué es real y qué es falso.",
						"vietnamese": "Bây giờ tôi không biết đâu là thật và đâu là giả nữa.",
						"thai": "ตอนนี้ฉันไม่รู้แล้วว่าอะไรจริงอะไรปลอม",
						"hindi": "अब मुझे नहीं पता क्या सच है और क्या झूठ।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "어쩌면 진실은 이미 너의 안에 있었을지도 몰라.",
						"english": "Perhaps the truth was already within you.",
						"japanese": "もしかしたら、真実はすでに君の中にあったのかもしれない。",
						"chinese": "也许真相早已在你心中。",
						"french": "Peut-être que la vérité était déjà en toi.",
						"spanish": "Quizás la verdad ya estaba dentro de ti.",
						"vietnamese": "Có lẽ sự thật đã ở trong bạn rồi.",
						"thai": "บางทีความจริงอาจจะอยู่ในตัวเธอแล้วก็ได้",
						"hindi": "हो सकता है सच्चाई पहले से ही तुम्हारे अंदर थी।"
					},
					"type": "speech",
					"speaker": "lin"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "너무 혼란스러워… 이 모든 게 조작된 걸까?",
						"english": "So confused... Is all of this manipulated?",
						"japanese": "混乱している…全て仕組まれたことなの？",
						"chinese": "太混乱了……这一切都是被操纵的吗？",
						"french": "Tellement confus... Tout cela est-il manipulé ?",
						"spanish": "Tan confuso... ¿Es todo esto una manipulación?",
						"vietnamese": "Thật bối rối... Tất cả những điều này có phải là bị thao túng?",
						"thai": "สับสนจัง... ทั้งหมดนี่ถูกบงการไว้หรือเปล่า?",
						"hindi": "बहुत भ्रमित हूँ... क्या यह सब हेरफेर किया गया है?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "네가 보고 싶은 것을 보게 되는 법. 하지만…",
						"english": "You see what you want to see. But...",
						"japanese": "見たいものを見るのが常だ。だが…",
						"chinese": "你只看到你想看的。但是……",
						"french": "Tu vois ce que tu veux voir. Mais...",
						"spanish": "Ves lo que quieres ver. Pero...",
						"vietnamese": "Bạn chỉ thấy những gì bạn muốn thấy. Nhưng...",
						"thai": "เธอเห็นในสิ่งที่อยากเห็น ทว่า...",
						"hindi": "तुम वही देखते हो जो तुम देखना चाहते हो। लेकिन..."
					},
					"type": "speech",
					"speaker": "lin"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "노래는 거짓말하지 않아.",
						"english": "The song doesn't lie.",
						"japanese": "歌は嘘をつかない。",
						"chinese": "歌声不会说谎。",
						"french": "Le chant ne ment pas.",
						"spanish": "La canción no miente.",
						"vietnamese": "Bài hát không lừa dối.",
						"thai": "บทเพลงไม่โกหก",
						"hindi": "गीत झूठ नहीं बोलता।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "lin",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "더 깊이 갈수록, 돌아갈 길은 사라져.",
						"english": "The deeper you go, the path back fades.",
						"japanese": "深く進むほど、戻る道は消える。",
						"chinese": "你走得越深，回头路就越少。",
						"french": "Plus tu t'enfonces, moins il y a de chemin pour revenir.",
						"spanish": "Cuanto más te adentras, el camino de vuelta desaparece.",
						"vietnamese": "Càng đi sâu, đường về càng biến mất.",
						"thai": "ยิ่งลึกเท่าไหร่ หนทางกลับก็ยิ่งเลือนหาย",
						"hindi": "जितना गहरा तुम जाओगे, वापस जाने का रास्ता उतना ही कम होता जाएगा।"
					},
					"emotion": "base",
					"speaker": "lin",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "되돌아갈 생각 없어. 진실을 알아야만 해.",
						"english": "No thoughts of turning back. I must know the truth.",
						"japanese": "引き返す気はない。真実を知る必要がある。",
						"chinese": "没想过回头。我必须知道真相。",
						"french": "Pas question de revenir en arrière. Je dois connaître la vérité.",
						"spanish": "No pienso volver. Debo saber la verdad.",
						"vietnamese": "Không có ý định quay lại. Tôi phải biết sự thật.",
						"thai": "ไม่คิดจะย้อนกลับ ต้องรู้ความจริงให้ให้ได้",
						"hindi": "वापस जाने का कोई विचार नहीं। मुझे सच जानना ही होगा।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "sad",
					"content": {
						"korean": "네가 찾던 기억이, 너를 집어삼킬 수도 있어.",
						"english": "The memories you seek might devour you.",
						"japanese": "お前が求めた記憶が、お前を飲み込むかもしれない。",
						"chinese": "你所寻找的记忆，可能会吞噬你。",
						"french": "Les souvenirs que tu cherches pourraient te dévorer.",
						"spanish": "Los recuerdos que buscas podrían devorarte.",
						"vietnamese": "Những ký ức bạn tìm kiếm có thể nuốt chửng bạn.",
						"thai": "ความทรงจำที่เธอไขว่คว้า อาจจะกลืนกินเธอ",
						"hindi": "जिन यादों को तुम ढूंढ रहे हो, वे तुम्हें निगल सकती हैं।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "상관없어. 이 기분, 이 갈망… 절대 멈출 수 없어.",
						"english": "Doesn't matter. This feeling, this longing... I can never stop.",
						"japanese": "構わない。この感情、この渇望…決して止められない。",
						"chinese": "无所谓。这种感觉，这种渴望……绝不能停止。",
						"french": "Peu importe. Ce sentiment, ce désir... Je ne peux jamais m'arrêter.",
						"spanish": "No importa. Esta sensación, este anhelo... No puedo parar.",
						"vietnamese": "Không quan trọng. Cảm giác này, khát khao này... không thể dừng lại.",
						"thai": "ไม่เป็นไร ความรู้สึกนี้ ความปรารถนานี้... ไม่มีวันหยุดได้",
						"hindi": "कोई बात नहीं। यह भावना, यह लालसा... मैं कभी नहीं रुक सकता।"
					}
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "…그렇다면, 너의 노래는… 어떤 결말을 향할까?",
						"english": "...Then, what ending will your song lead to?",
						"japanese": "…ならば、お前の歌は…どんな結末に向かうのだろう？",
						"chinese": "……那么，你的歌会走向怎样的结局呢？",
						"french": "...Alors, vers quelle fin ta chanson mènera-t-elle ?",
						"spanish": "...Entonces, ¿hacia qué final se dirigirá tu canción?",
						"vietnamese": "...Vậy thì, bài hát của bạn sẽ dẫn đến kết cục nào?",
						"thai": "...ถ้าอย่างนั้น บทเพลงของเธอจะมุ่งหน้าไปสู่จุดจบแบบไหน?",
						"hindi": "...तो फिर, तुम्हारा गीत... किस अंत की ओर बढ़ेगा?"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "뒤틀린 환영의 심장부. 거대한 그림자가 기다리고 있었다.",
						"english": "At the heart of the twisted illusion. A colossal shadow awaited.",
						"japanese": "歪んだ幻影の心臓部。巨大な影が待ち構えていた。",
						"chinese": "扭曲幻象的心脏地带。一道巨大的身影正在等待着。",
						"french": "Au cœur de l'illusion tordue. Une ombre colossale attendait.",
						"spanish": "En el corazón de la ilusión retorcida. Una sombra colosal esperaba.",
						"vietnamese": "Tại trung tâm của ảo ảnh méo mó. Một cái bóng khổng lồ đang chờ đợi.",
						"thai": "ใจกลางภาพลวงตาที่บิดเบี้ยว เงาร่างมหึมากำลังรออยู่",
						"hindi": "विकृत भ्रम के हृदय में। एक विशाल छाया प्रतीक्षा कर रही थी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "감히 여기까지 왔느냐. 잊혀진 것들을 갈망하는 어리석은 자여.",
						"english": "Dare you come this far, foolish one, craving the forgotten.",
						"japanese": "よくぞここまで来たな。忘れられたものを求める愚か者め。",
						"chinese": "竟敢来到这里。渴求被遗忘之物的愚蠢之人。",
						"french": "Oses-tu venir jusqu'ici, fou, convoitant ce qui est oublié.",
						"spanish": "¿Te atreves a llegar tan lejos, necio, anhelando lo olvidado?",
						"vietnamese": "Ngươi dám đến tận đây sao, kẻ ngốc nghếch khao khát những điều bị lãng quên.",
						"thai": "กล้าดียังไงถึงมาถึงที่นี่ เจ้าคนโง่ผู้โหยหาสิ่งที่ถูกลืม",
						"hindi": "क्या तुम्हारी हिम्मत हुई यहां तक आने की, मूर्ख, भूली हुई चीजों की लालसा रखने वाले?"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "네가 이 모든 환영을 만든 건가!",
						"english": "Did you create all these illusions?!",
						"japanese": "お前がこの幻影を全て作ったのか！",
						"chinese": "这些幻象都是你创造的吗？！",
						"french": "C'est toi qui as créé toutes ces illusions, n'est-ce pas ?!",
						"spanish": "¿Creaste todas estas ilusiones?!",
						"vietnamese": "Ngươi đã tạo ra tất cả những ảo ảnh này sao?!",
						"thai": "แกเป็นคนสร้างภาพลวงตาทั้งหมดนี้เหรอ!?",
						"hindi": "क्या तुमने ही ये सब भ्रम बनाए हैं?!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "진실은 너에게 너무 가혹할 것이다. 차라리 영원히 꿈꿔라.",
						"english": "The truth would be too harsh for you. Better to dream forever.",
						"japanese": "真実は君にはあまりに過酷だろう。いっそ永遠に夢を見ろ。",
						"chinese": "真相对你来说太过残酷。不如永远沉浸在梦中吧。",
						"french": "La vérité serait trop dure pour toi. Mieux vaut rêver pour toujours.",
						"spanish": "La verdad sería demasiado dura para ti. Mejor sueña para siempre.",
						"vietnamese": "Sự thật sẽ quá tàn khốc với ngươi. Tốt hơn hết hãy mơ mộng mãi mãi đi.",
						"thai": "ความจริงมันโหดร้ายเกินไปสำหรับแก ฝันไปตลอดกาลจะดีกว่า",
						"hindi": "सच्चाई तुम्हारे लिए बहुत कठोर होगी। बेहतर है हमेशा के लिए सपने देखते रहो।"
					}
				},
				{
					"content": {
						"korean": "웃기지 마! 내 기억은 내가 되찾을 거야!",
						"english": "Don't make me laugh! I'll get my memories back myself!",
						"japanese": "笑わせるな！俺の記憶は俺が取り戻す！",
						"chinese": "别开玩笑了！我会自己找回我的记忆！",
						"french": "Ne me fais pas rire ! Je retrouverai mes souvenirs moi-même !",
						"spanish": "¡No me hagas reír! ¡Recuperaré mis recuerdos yo mismo!",
						"vietnamese": "Đừng làm ta buồn cười! Ta sẽ tự mình lấy lại ký ức!",
						"thai": "อย่ามาตลก! ฉันจะเอาความทรงจำของฉันกลับคืนมาเอง!",
						"hindi": "मुझे हँसाओ मत! मैं अपनी यादें खुद वापस पा लूँगा!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "크크… 네가 이겼다고 생각하나? 너의 기억은… 이미 우리 안에 있다…",
						"english": "Heh heh... Do you think you've won? Your memories... are already within us...",
						"japanese": "クク…勝ったとでも思っているのか？お前の記憶は…既に我々の中に…",
						"chinese": "呵呵……你以为你赢了吗？你的记忆……已经在我们之中了……",
						"french": "Hé hé... Tu crois avoir gagné ? Tes souvenirs... sont déjà en nous...",
						"spanish": "Je je... ¿Crees que has ganado? Tus recuerdos... ya están dentro de nosotros...",
						"vietnamese": "Khụ khụ... Ngươi nghĩ mình đã thắng sao? Ký ức của ngươi... đã ở trong chúng ta rồi...",
						"thai": "หึหึ... แกคิดว่าชนะแล้วเหรอ? ความทรงจำของแก... อยู่ในพวกเราแล้ว...",
						"hindi": "हँ हँ... क्या तुम्हें लगता है कि तुम जीत गए हो? तुम्हारी यादें... पहले से ही हमारे अंदर हैं..."
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "기억을 되찾았다고…?",
						"english": "Did I... get my memories back?",
						"japanese": "記憶を取り戻したのか…？",
						"chinese": "我……找回记忆了吗？",
						"french": "J'ai... retrouvé mes souvenirs ?",
						"spanish": "¿Recuperé... mis recuerdos?",
						"vietnamese": "Ta đã... lấy lại ký ức sao?",
						"thai": "ฉัน... ได้ความทรงจำกลับคืนมาแล้วเหรอ?",
						"hindi": "क्या मैंने... अपनी यादें वापस पा लीं?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "환영이 걷히자, 낯선 거리가 모습을 드러냈다. 그러나 기억의 조각들은 여전히 혼란스러웠다.",
						"english": "As the illusion lifted, an unfamiliar street appeared. But the fragments of memory were still chaotic.",
						"japanese": "幻影が晴れると、見知らぬ街が現れた。しかし、記憶の断片はまだ混沌としていた。",
						"chinese": "幻象消散后，一条陌生的街道映入眼帘。然而，记忆的碎片依然混乱不堪。",
						"french": "Lorsque l'illusion se dissipa, une rue inconnue apparut. Mais les fragments de mémoire étaient toujours chaotiques.",
						"spanish": "Cuando la ilusión se disipó, una calle desconocida apareció. Pero los fragmentos de memoria seguían siendo caóticos.",
						"vietnamese": "Khi ảo ảnh tan biến, một con phố xa lạ hiện ra. Nhưng những mảnh ký ức vẫn còn hỗn loạn.",
						"thai": "เมื่อภาพลวงตาจางหายไป ถนนที่ไม่คุ้นเคยก็ปรากฏขึ้น แต่เศษเสี้ยวความทรงจำยังคงสับสนวุ่นวาย",
						"hindi": "जैसे ही भ्रम हटा, एक अनजान गली दिखाई दी। लेकिन यादों के टुकड़े अभी भी अराजक थे।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "lin",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "base",
					"content": {
						"korean": "새로운 시작의 노래, 혹은 또 다른 환영의 서곡…",
						"english": "A song of new beginnings, or an overture to another illusion...",
						"japanese": "新たな始まりの歌、あるいはまた別の幻影の序曲…",
						"chinese": "一首新开始的歌，抑或是另一场幻象的序曲……",
						"french": "Un chant de nouveaux départs, ou une ouverture à une autre illusion...",
						"spanish": "Una canción de nuevos comienzos, o una obertura a otra ilusión...",
						"vietnamese": "Một khúc ca của khởi đầu mới, hay một khúc dạo đầu cho một ảo ảnh khác...",
						"thai": "บทเพลงแห่งการเริ่มต้นใหม่ หรือโหมโรงสู่ภาพลวงตาอีกครั้ง...",
						"hindi": "एक नई शुरुआत का गीत, या किसी और भ्रम का प्रस्तावना..."
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "린… 이 노래는…",
						"english": "Rin... This song is...",
						"japanese": "リン…この歌は…",
						"chinese": "凛……这首歌是……",
						"french": "Rin... Cette chanson est...",
						"spanish": "Rin... Esta canción es...",
						"vietnamese": "Rin... Bài hát này là...",
						"thai": "ริน... เพลงนี้มัน...",
						"hindi": "रिन... यह गाना है..."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "이제 시작일 뿐이야. 너의 진짜 노래는…",
						"english": "It's just the beginning. Your true song is...",
						"japanese": "まだ始まりに過ぎない。君の本当の歌は…",
						"chinese": "这只是个开始。你真正的歌是……",
						"french": "Ce n'est que le début. Ta vraie chanson est...",
						"spanish": "Es solo el comienzo. Tu verdadera canción es...",
						"vietnamese": "Đây chỉ là khởi đầu thôi. Bài hát thật sự của ngươi là...",
						"thai": "นี่เป็นแค่จุดเริ่มต้นเท่านั้น เพลงที่แท้จริงของเธอคือ...",
						"hindi": "यह तो बस शुरुआत है। तुम्हारा असली गाना है..."
					},
					"emotion": "happy",
					"speaker": "lin",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "진실은 아직 멀었다. 하지만 한 걸음 더 나아갔다.",
						"english": "The truth is still far away. But I've taken one step further.",
						"japanese": "真実はまだ遠い。だが、一歩前進した。",
						"chinese": "真相还很遥远。但我又向前迈进了一步。",
						"french": "La vérité est encore loin. Mais j'ai fait un pas de plus.",
						"spanish": "La verdad aún está lejos. Pero he dado un paso más.",
						"vietnamese": "Sự thật vẫn còn xa vời. Nhưng ta đã tiến thêm một bước.",
						"thai": "ความจริงยังอีกยาวไกล แต่ฉันก็ได้ก้าวไปข้างหน้าอีกหนึ่งก้าว",
						"hindi": "सच्चाई अभी भी बहुत दूर है। लेकिन मैंने एक कदम और आगे बढ़ाया है।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "뒤틀린 환영에 갇혀, 모든 것이 암흑으로 변했다.",
						"english": "Trapped in a twisted illusion, all turned to darkness.",
						"japanese": "歪んだ幻影に囚われ、全てが闇へと変わった。",
						"chinese": "困于扭曲的幻象，一切都化为黑暗。",
						"french": "Piégé dans une illusion tordue, tout est devenu ténèbres.",
						"spanish": "Atrapado en una ilusión retorcida, todo se volvió oscuridad.",
						"vietnamese": "Mắc kẹt trong ảo ảnh méo mó, mọi thứ chìm vào bóng tối.",
						"thai": "ติดกับอยู่ในภาพลวงตาที่บิดเบี้ยว ทุกสิ่งกลับกลายเป็นความมืดมิด",
						"hindi": "विकृत मायाजाल में फँसकर, सब कुछ अंधकार में बदल गया।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어리석은 선택이다. 넌 영원히 이 환영 속에서 갇힐 것이다.",
						"english": "A foolish choice. You'll be forever trapped in this illusion.",
						"japanese": "愚かな選択だ。お前は永遠にこの幻影に囚われるだろう。",
						"chinese": "愚蠢的选择。你将永远被困在这幻象中。",
						"french": "Un choix insensé. Tu seras piégé à jamais dans cette illusion.",
						"spanish": "Una elección estúpida. Estarás atrapado para siempre en esta ilusión.",
						"vietnamese": "Một lựa chọn ngu ngốc. Ngươi sẽ mãi mãi bị mắc kẹt trong ảo ảnh này.",
						"thai": "เป็นการเลือกที่โง่เขลา เจ้าจะถูกขังอยู่ในภาพลวงตานี้ตลอดไป",
						"hindi": "मूर्खतापूर्ण चुनाव। तुम हमेशा के लिए इस मायाजाल में फँस जाओगे।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "크윽… 아직 끝나지 않았어…!",
						"english": "Ugh... It's not over yet...!",
						"japanese": "くっ…まだ終わってない…！",
						"chinese": "呃…还没结束…！",
						"french": "Argh... Ce n'est pas encore fini...!",
						"spanish": "Ugh... ¡Todavía no ha terminado...!",
						"vietnamese": "Khụ... Vẫn chưa kết thúc đâu...!",
						"thai": "อึก... ยังไม่จบแค่นี้...!",
						"hindi": "उफ़... अभी ख़त्म नहीं हुआ है...!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "다시 도전할 힘이 남아 있을까? 네 기억은 영원히 봉인될 것이다.",
						"english": "Any strength left to challenge again? Your memories will be sealed forever.",
						"japanese": "再び挑む力が残っているか？お前の記憶は永遠に封印されるだろう。",
						"chinese": "还有再次挑战的力量吗？你的记忆将永远被封印。",
						"french": "Reste-t-il la force de défier à nouveau ? Tes souvenirs seront scellés à jamais.",
						"spanish": "¿Queda alguna fuerza para desafiar de nuevo? Tus recuerdos serán sellados para siempre.",
						"vietnamese": "Liệu còn sức để thử thách lần nữa không? Ký ức của ngươi sẽ bị phong ấn vĩnh viễn.",
						"thai": "ยังเหลือแรงที่จะท้าทายอีกหรือไม่? ความทรงจำของเจ้าจะถูกผนึกไว้ตลอดไป",
						"hindi": "क्या फिर से चुनौती देने की ताक़त बची है? तुम्हारी यादें हमेशा के लिए सील कर दी जाएँगी।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"현실은 뒤틀리고, 시간마저 노래가 되었다.",
			"잊혀진 기억들이 환영처럼 떠오른다.",
			"익숙한 거리, 낯선 노래, 그리고 깊은 갈망.",
			"과연 이 모든 것이 진실일까."
		],
		"english": [
			"Reality twists, and even time becomes a song.",
			"Forgotten memories surface like illusions.",
			"Familiar streets, an unfamiliar song, and deep yearning.",
			"Could all of this truly be real?"
		],
		"japanese": [
			"現実が歪み、時間さえ歌となった。",
			"忘れられた記憶が幻のように蘇る。",
			"見慣れた通り、知らない歌、そして深い渇望。",
			"果たしてこのすべてが真実なのだろうか。"
		],
		"chinese": [
			"现实扭曲，时间也化作了歌。",
			"遗忘的记忆如幻影般浮现。",
			"熟悉的街道，陌生的歌声，以及深深的渴望。",
			"这一切究竟是真实的吗？"
		],
		"french": [
			"La réalité se tord, et même le temps devient un chant.",
			"Des souvenirs oubliés ressurgissent comme des illusions.",
			"Des rues familières, une chanson étrange, et un profond désir.",
			"Tout cela est-il vraiment réel ?"
		],
		"spanish": [
			"La realidad se retuerce, y hasta el tiempo se ha vuelto una canción.",
			"Recuerdos olvidados resurgen como visiones.",
			"Calles familiares, una canción desconocida y un anhelo profundo.",
			"¿Será todo esto verdad?"
		],
		"vietnamese": [
			"Hiện thực vặn vẹo, ngay cả thời gian cũng trở thành bài ca.",
			"Ký ức bị lãng quên hiện lên như ảo ảnh.",
			"Con phố quen thuộc, bài hát lạ lẫm, và khao khát sâu sắc.",
			"Liệu tất cả những điều này có phải là sự thật?"
		],
		"thai": [
			"ความจริงบิดเบี้ยว แม้กระทั่งเวลากลายเป็นบทเพลง",
			"ความทรงจำที่เลือนหายปรากฏขึ้นราวกับภาพลวงตา",
			"ถนนที่คุ้นเคย เพลงที่ไม่รู้จัก และความปรารถนาอันลึกซึ้ง",
			"ทั้งหมดนี้เป็นความจริงหรือเปล่า"
		],
		"hindi": [
			"वास्तविकता मुड़ जाती है, और समय भी एक गीत बन गया है।",
			"भूली हुई यादें भ्रम की तरह उभर आती हैं।",
			"परिचित गलियाँ, एक अज्ञात गीत, और गहरी लालसा।",
			"क्या यह सब सच होगा?"
		]
	}
} as const;
