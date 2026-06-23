export const scenario_desert_tempest_1_03 = {
	"scenario_id": "desert_tempest_1_03",
	"order": 3,
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
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "고대 도시의 유적. 모래 폭풍이 더욱 거세게 몰아쳤다.",
						"english": "Ruins of the ancient city. The sandstorm raged even more fiercely.",
						"japanese": "古代都市の遺跡。砂嵐はさらに激しく吹き荒れた。",
						"chinese": "古城遗迹。沙尘暴愈发猛烈。",
						"french": "Ruines de la cité antique. La tempête de sable faisait rage plus violemment.",
						"spanish": "Ruinas de la ciudad antigua. La tormenta de arena arreciaba con más fuerza.",
						"vietnamese": "Tàn tích của thành phố cổ đại. Bão cát càng dữ dội hơn.",
						"thai": "ซากปรักหักพังของนครโบราณ. พายุทรายโหมกระหน่ำรุนแรงยิ่งขึ้น.",
						"hindi": "प्राचीन शहर के खंडहर। रेत का तूफान और भी भयंकर हो गया।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "...여기가 그 유적? 분위기가 달라.",
						"english": "...Is this the ruin? The atmosphere is different.",
						"japanese": "…ここがその遺跡？雰囲気が違うな。",
						"chinese": "...这里就是遗迹？气氛不对劲。",
						"french": "...C'est ça, les ruines ? L'ambiance est différente.",
						"spanish": "¿...Estas son las ruinas? La atmósfera es diferente.",
						"vietnamese": "...Đây là tàn tích đó sao? Không khí thật khác lạ.",
						"thai": "...นี่คือซากปรักหักพังนั่นเหรอ? บรรยากาศแตกต่างออกไป.",
						"hindi": "...क्या यह वही खंडहर है? माहौल अलग है।"
					}
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "amir"
				},
				{
					"emotion": "base",
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "드디어 도착했군. 이곳은 과거의 오만함이 묻힌 곳이지.",
						"english": "Finally arrived. This is where the arrogance of the past is buried.",
						"japanese": "ついに着いたな。ここは過去の傲慢さが埋められた場所だ。",
						"chinese": "终于到了。这里是埋葬过去傲慢之地。",
						"french": "Enfin arrivé. C'est ici que l'arrogance du passé est enterrée.",
						"spanish": "Finalmente llegamos. Aquí es donde yace la arrogancia del pasado.",
						"vietnamese": "Cuối cùng cũng đến rồi. Nơi đây chôn vùi sự kiêu ngạo của quá khứ.",
						"thai": "ในที่สุดก็มาถึง. ที่นี่คือที่ที่ความโอหังในอดีตถูกฝังไว้.",
						"hindi": "आखिरकार पहुँच गए। यह वह जगह है जहाँ अतीत का अहंकार दफन है।"
					}
				},
				{
					"content": {
						"korean": "당신은 왜 여기 있죠?",
						"english": "Why are you here?",
						"japanese": "あなたは何故ここに？",
						"chinese": "你为什么在这里？",
						"french": "Pourquoi êtes-vous ici ?",
						"spanish": "¿Por qué estás aquí?",
						"vietnamese": "Tại sao bạn lại ở đây?",
						"thai": "คุณมาที่นี่ทำไม?",
						"hindi": "आप यहाँ क्यों हैं?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "amir",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "amir",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "황금 제국… 그들은 영원히 고통받는 저주를 불렀어.",
						"english": "The Golden Empire... they invoked a curse of eternal suffering.",
						"japanese": "黄金帝国… 彼らは永遠の苦痛の呪いを招いた。",
						"chinese": "黄金帝国… 他们招来了永恒苦难的诅咒。",
						"french": "L'Empire d'Or… ils ont invoqué une malédiction de souffrance éternelle.",
						"spanish": "El Imperio Dorado… invocaron una maldición de sufrimiento eterno.",
						"vietnamese": "Đế chế Vàng… họ đã triệu hồi một lời nguyền đau khổ vĩnh cửu.",
						"thai": "อาณาจักรทองคำ... พวกเขาได้เรียกคำสาปแห่งความทุกข์ทรมานชั่วนิรันดร์.",
						"hindi": "स्वर्ण साम्राज्य... उन्होंने अनंत पीड़ा का श्राप बुलाया।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "끝없는 고통? 그게 뭔데.",
						"english": "Endless suffering? What is that?",
						"japanese": "終わりのない苦痛？それは何だ。",
						"chinese": "无尽的痛苦？那是什么。",
						"french": "Une souffrance sans fin ? Qu'est-ce que c'est ?",
						"spanish": "¿Sufrimiento interminable? ¿Qué es eso?",
						"vietnamese": "Nỗi đau vô tận? Đó là gì?",
						"thai": "ความทุกข์ทรมานไม่สิ้นสุด? นั่นคืออะไร.",
						"hindi": "अंतहीन पीड़ा? वह क्या है।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "amir",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "바람이 속삭이는 소리를 들어본 적 있나? 그게 그들의 흐느낌이지.",
						"english": "Ever heard the wind whisper? That's their lament.",
						"japanese": "風のささやきを聞いたことはあるか？それが彼らの嘆きだ。",
						"chinese": "你听过风的低语吗？那是他们的哀叹。",
						"french": "As-tu déjà entendu le vent murmurer ? C'est leur lamentation.",
						"spanish": "¿Alguna vez has oído el susurro del viento? Ese es su lamento.",
						"vietnamese": "Ngươi có từng nghe gió thì thầm chưa? Đó là tiếng than khóc của họ.",
						"thai": "เคยได้ยินเสียงลมกระซิบไหม? นั่นคือเสียงคร่ำครวญของพวกเขา",
						"hindi": "क्या तुमने कभी हवा की सरगोशी सुनी है? वही उनकी विलाप है。"
					}
				},
				{
					"content": {
						"korean": "그리고… 사라진 고대 검의 소문도 이 비극에서 시작됐지.",
						"english": "And... the rumors of the lost ancient sword also began with this tragedy.",
						"japanese": "そして…失われた古代の剣の噂も、この悲劇から始まったのだ。",
						"chinese": "而且…关于失落古剑的传闻，也始于这场悲剧。",
						"french": "Et... les rumeurs de l'ancienne épée perdue ont aussi commencé avec cette tragédie.",
						"spanish": "Y... los rumores de la espada antigua perdida también comenzaron con esta tragedia.",
						"vietnamese": "Và… tin đồn về thanh kiếm cổ xưa thất lạc cũng bắt nguồn từ bi kịch này.",
						"thai": "และ...ข่าวลือเรื่องดาบโบราณที่หายไปก็เริ่มต้นจากโศกนาฏกรรมนี้เช่นกัน",
						"hindi": "और... खोई हुई प्राचीन तलवार की अफवाहें भी इसी त्रासदी से शुरू हुईं।"
					},
					"type": "speech",
					"speaker": "amir",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "검?",
						"english": "A sword?",
						"japanese": "剣？",
						"chinese": "剑？",
						"french": "Une épée ?",
						"spanish": "¿Una espada?",
						"vietnamese": "Kiếm sao?",
						"thai": "ดาบ?",
						"hindi": "तलवार?"
					},
					"speaker": "character_any",
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "amir",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "황금 제국은 스스로 오만해서 무너졌다 하지만… 그 뒤엔 검은 그림자가 있었어.",
						"english": "They say the Golden Empire fell due to its own arrogance, but... there was a dark shadow behind it.",
						"japanese": "黄金帝国は自らの傲慢さゆえに滅んだと言われるが…その裏には黒い影があった。",
						"chinese": "黄金帝国因其自身的傲慢而覆灭，但…其背后有道黑影。",
						"french": "On dit que l'Empire d'Or est tombé par son arrogance, mais... une ombre noire se cachait derrière.",
						"spanish": "Dicen que el Imperio Dorado cayó por su propia arrogancia, pero... había una sombra oscura detrás.",
						"vietnamese": "Đế chế Hoàng Kim tự hủy diệt vì sự kiêu ngạo của mình, nhưng… đằng sau đó là một bóng đen.",
						"thai": "ว่ากันว่าจักรวรรดิทองคำล่มสลายเพราะความโอหังของตัวเอง แต่...เบื้องหลังนั้นมีเงามืดอยู่",
						"hindi": "कहते हैं कि स्वर्णिम साम्राज्य अपने अभिमान के कारण गिर गया, लेकिन... उसके पीछे एक काली छाया थी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "amir"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "검은 그림자? 그게 대체 뭔데.",
						"english": "Dark shadow? What exactly is that?",
						"japanese": "黒い影？一体それが何だ。",
						"chinese": "黑影？那到底是什么？",
						"french": "Une ombre noire ? Qu'est-ce que c'est exactement ?",
						"spanish": "¿Sombra oscura? ¿Qué es eso exactamente?",
						"vietnamese": "Bóng đen ư? Rốt cuộc đó là cái gì?",
						"thai": "เงามืด? มันคืออะไรกันแน่",
						"hindi": "काली छाया? आखिर वो क्या है?"
					},
					"type": "speech"
				},
				{
					"speaker": "amir",
					"emotion": "sad",
					"content": {
						"korean": "제국을 유혹하고… 파멸로 이끈 존재. 그들의 어리석음은 끝없는 고통을 낳았지.",
						"english": "An entity that tempted the Empire... leading it to ruin. Their folly birthed endless suffering.",
						"japanese": "帝国を誘惑し…破滅へと導いた存在。彼らの愚かさは終わりのない苦痛を生んだのだ。",
						"chinese": "引诱帝国…并将其引向毁灭的存在。他们的愚蠢带来了无尽的痛苦。",
						"french": "Une entité qui a tenté l'Empire... le menant à sa ruine. Leur folie a engendré des souffrances sans fin.",
						"spanish": "Una entidad que tentó al Imperio... llevándolo a la ruina. Su necedad engendró un sufrimiento sin fin.",
						"vietnamese": "Một thực thể đã cám dỗ Đế chế… và dẫn nó đến diệt vong. Sự ngu dốt của họ đã gây ra nỗi đau vô tận.",
						"thai": "สิ่งมีชีวิตที่ล่อลวงจักรวรรดิ...นำมันไปสู่ความพินาศ ความโง่เขลาของพวกเขาก่อให้เกิดความทุกข์ทรมานไม่สิ้นสุด",
						"hindi": "एक सत्ता जिसने साम्राज्य को प्रलोभित किया... और उसे विनाश की ओर ले गई। उनकी मूर्खता ने अंतहीन पीड़ा को जन्म दिया।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 우리 마을의 재앙도…",
						"english": "Then the disaster in our village too...",
						"japanese": "では、我々の村の災厄も…",
						"chinese": "那么我们村庄的灾难也…",
						"french": "Alors la catastrophe de notre village aussi...",
						"spanish": "Entonces el desastre de nuestro pueblo también...",
						"vietnamese": "Vậy thì tai ương của làng chúng ta cũng…",
						"thai": "ถ้างั้นหายนะในหมู่บ้านของเราก็...",
						"hindi": "तो हमारे गांव की आपदा भी..."
					},
					"type": "speech"
				},
				{
					"speaker": "amir",
					"emotion": "base",
					"content": {
						"korean": "...모든 것은 연결되어 있지.",
						"english": "...Everything is connected.",
						"japanese": "…全ては繋がっているのだ。",
						"chinese": "…一切都是相连的。",
						"french": "...Tout est lié.",
						"spanish": "...Todo está conectado.",
						"vietnamese": "...Mọi thứ đều kết nối với nhau.",
						"thai": "...ทุกสิ่งล้วนเชื่อมโยงกัน",
						"hindi": "...सब कुछ जुड़ा हुआ है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "amir",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "여기까지 왔다는 건… 돌아갈 수 없다는 뜻이야.",
						"english": "The fact that you've come this far... means there's no turning back.",
						"japanese": "ここまで来たということは…もう後戻りはできないということだ。",
						"chinese": "你既然来到这里…就意味着没有回头路了。",
						"french": "Être venu jusqu'ici... signifie qu'il n'y a pas de retour possible.",
						"spanish": "El haber llegado hasta aquí... significa que no hay vuelta atrás.",
						"vietnamese": "Việc ngươi đã đến đây… có nghĩa là không thể quay lại được nữa rồi.",
						"thai": "การที่มาถึงตรงนี้ได้...หมายความว่าไม่มีทางหวนกลับแล้ว",
						"hindi": "यहां तक आना... इसका मतलब है कि अब वापसी नहीं है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "amir"
				},
				{
					"type": "speech",
					"content": {
						"korean": "상관 없어. 진실을 알아야만 해.",
						"english": "It doesn't matter. I must know the truth.",
						"japanese": "構わない。真実を知らなければならない。",
						"chinese": "没关系。我必须知道真相。",
						"french": "Ça n'a pas d'importance. Je dois connaître la verdad.",
						"spanish": "No importa. Debo saber la verdad.",
						"vietnamese": "Không sao cả. Ta phải biết sự thật.",
						"thai": "ไม่เป็นไร ฉันต้องรู้ความจริง",
						"hindi": "कोई फर्क नहीं पड़ता। मुझे सच जानना ही होगा।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그래, 하지만 진실은… 때로 더 큰 고통을 가져다주기도 하지. 각오 단단히 해.",
						"english": "Yes, but the truth... sometimes brings greater pain. Brace yourself.",
						"japanese": "ああ、だが真実は…時に、より大きな苦痛をもたらす。覚悟しておけ。",
						"chinese": "是啊，但真相……有时会带来更大的痛苦。做好准备吧。",
						"french": "Oui, mais la vérité... apporte parfois une plus grande souffrance. Prépare-toi.",
						"spanish": "Sí, pero la verdad... a veces trae consigo un dolor aún mayor. Prepárate.",
						"vietnamese": "Đúng vậy, nhưng sự thật... đôi khi mang lại nỗi đau lớn hơn. Hãy chuẩn bị tinh thần đi.",
						"thai": "ใช่ แต่ความจริง... บางครั้งก็นำมาซึ่งความเจ็บปวดที่ยิ่งใหญ่กว่า เตรียมตัวไว้ให้ดี",
						"hindi": "हाँ, लेकिन सच... कभी-कभी और भी ज़्यादा दर्द लाता है। तैयार रहना।"
					},
					"emotion": "sad",
					"speaker": "amir"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "당신은 누구 편이야?",
						"english": "Whose side are you on?",
						"japanese": "お前は誰の味方だ？",
						"chinese": "你站在哪一边？",
						"french": "De quel côté es-tu ?",
						"spanish": "¿De qué lado estás?",
						"vietnamese": "Ngươi đứng về phía ai?",
						"thai": "เจ้าอยู่ข้างใคร?",
						"hindi": "तुम किसके पक्ष में हो?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "나는 그저… 이야기의 흐름을 지켜볼 뿐.",
						"english": "I merely... observe the flow of the story.",
						"japanese": "私はただ…物語の流れを見守るだけだ。",
						"chinese": "我只是……旁观着故事的走向。",
						"french": "Je ne fais qu'observer... le cours de l'histoire.",
						"spanish": "Yo solo... observo el flujo de la historia.",
						"vietnamese": "Ta chỉ... quan sát dòng chảy của câu chuyện.",
						"thai": "ข้าแค่... เฝ้าดูการดำเนินไปของเรื่องราวเท่านั้น",
						"hindi": "मैं बस... कहानी के प्रवाह को देखता हूँ।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "amir"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "크윽… 어리석은… 인간… 고통은… 끝나지 않아…",
						"english": "Ugh... foolish... mortals... the suffering... will never end...",
						"japanese": "ぐぅ…愚かな…人間め…苦痛は…終わらぬ…",
						"chinese": "呃……愚蠢的……人类……痛苦……永无止境……",
						"french": "Urgh... stupides... mortels... la souffrance... ne finira jamais...",
						"spanish": "Ugh... necios... mortales... el sufrimiento... nunca terminará...",
						"vietnamese": "Khặc... lũ người... ngu ngốc... nỗi đau... sẽ không kết thúc...",
						"thai": "อึก... มนุษย์... ผู้โง่เขลา... ความเจ็บปวด... จะไม่มีวันสิ้นสุด...",
						"hindi": "उफ़... मूर्ख... इंसान... दर्द... कभी खत्म नहीं होगा..."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "끝나지 않겠다고? 지껄여봐!",
						"english": "You say it won't end? Talk all you want!",
						"japanese": "終わらないだと？ 勝手に吠えてろ！",
						"chinese": "说不会结束？尽管去说吧！",
						"french": "Tu dis que ça ne finira pas ? Parle tant que tu veux !",
						"spanish": "¿Que no terminará? ¡Habla todo lo que quieras!",
						"vietnamese": "Sẽ không kết thúc ư? Cứ sủa đi!",
						"thai": "จะไม่จบงั้นเหรอ? เพ้อเจ้อไปเถอะ!",
						"hindi": "खत्म नहीं होगा? बकवास करते रहो!"
					}
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "amir"
				},
				{
					"speaker": "amir",
					"emotion": "base",
					"content": {
						"korean": "해냈군. 하지만… 저자가 말한 고통은… 진짜일지도 모르겠어.",
						"english": "We did it. But... the suffering he spoke of... it might be real.",
						"japanese": "やったな。だが… あいつが言っていた苦痛は… 本当かもしれない。",
						"chinese": "成功了。但是… 那家伙说的痛苦… 也许是真的。",
						"french": "On a réussi. Mais... la souffrance dont il parlait... pourrait être réelle.",
						"spanish": "Lo logramos. Pero... el sufrimiento del que habló... quizás sea real.",
						"vietnamese": "Chúng ta đã làm được. Nhưng... nỗi đau hắn nói... có lẽ là thật.",
						"thai": "ทำสำเร็จแล้ว. แต่... ความเจ็บปวดที่เขาพูดถึง... อาจเป็นเรื่องจริงก็ได้.",
						"hindi": "हमने कर दिखाया। पर... उसने जिस पीड़ा की बात की थी... शायद वह सच हो।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자는 스러졌으나, 그 자리에 또 다른 혼돈이 피어났다.",
						"english": "The colossal shadow fell, but in its place, another chaos bloomed.",
						"japanese": "巨大な影は消え去ったが、その場に新たな混沌が生まれた。",
						"chinese": "巨大的阴影消失了，但在其位，新的混沌却已萌芽。",
						"french": "L'ombre colossale s'est évanouie, mais un autre chaos a éclos à sa place.",
						"spanish": "La sombra colosal cayó, pero en su lugar, otro caos floreció.",
						"vietnamese": "Bóng tối khổng lồ đã tan biến, nhưng một sự hỗn loạn khác lại trỗi dậy ở đó.",
						"thai": "เงาขนาดมหึมาล่มสลายลง, แต่ในที่แห่งนั้น ความโกลาหลครั้งใหม่ได้ผลิบานขึ้น.",
						"hindi": "विशाल छाया मिट गई, परंतु उसके स्थान पर एक और अराजकता का जन्म हुआ।"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "끝없는 고통의 속삭임은… 아직 끝나지 않았다.",
						"english": "The whispers of endless torment... have not yet ended.",
						"japanese": "終わりなき苦痛の囁きは… まだ終わっていない。",
						"chinese": "无尽痛苦的低语… 尚未结束。",
						"french": "Les murmures de la souffrance éternelle... n'ont pas encore cessé.",
						"spanish": "Los susurros del tormento sin fin... aún no han terminado.",
						"vietnamese": "Những lời thì thầm của nỗi đau vô tận... vẫn chưa kết thúc.",
						"thai": "เสียงกระซิบแห่งความทรมานอันไม่สิ้นสุด... ยังไม่จบลง.",
						"hindi": "अंतहीन पीड़ा की फुसफुसाहट... अभी खत्म नहीं हुई है।"
					}
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "거대한 모래 폭풍의 핵. 그곳에 정체 모를 그림자가 있었다.",
						"english": "The core of a colossal sandstorm. Within it, an enigmatic shadow resided.",
						"japanese": "巨大な砂嵐の核。そこに、正体不明の影があった。",
						"chinese": "巨大沙尘暴的核心。那里，有一个不明身份的影子。",
						"french": "Au cœur d'une colossale tempête de sable. Là, résidait une ombre énigmatique.",
						"spanish": "El núcleo de una colosal tormenta de arena. Allí, una sombra enigmática residía.",
						"vietnamese": "Tại tâm bão cát khổng lồ. Một bóng đen vô danh ẩn hiện.",
						"thai": "ใจกลางพายุทรายมหึมา ณ ที่นั่น มีเงาลึกลับบางอย่างสถิตอยู่",
						"hindi": "एक विशाल रेत के तूफान का केंद्र। वहाँ, एक रहस्यमय छाया मौजूद थी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "여기까지 오다니… 어리석은 인간들.",
						"english": "To come this far... foolish mortals.",
						"japanese": "ここまで来たか…愚かな人間どもめ。",
						"chinese": "竟敢走到这里……愚蠢的人类。",
						"french": "Être venus jusqu'ici... stupides mortels.",
						"spanish": "Haber llegado tan lejos... necios mortales.",
						"vietnamese": "Dám đến tận đây... những kẻ phàm trần ngu ngốc.",
						"thai": "มาได้ถึงเพียงนี้... มนุษย์ผู้โง่เขลา",
						"hindi": "इतनी दूर आ गए... मूर्ख इंसान।"
					}
				},
				{
					"content": {
						"korean": "네가… 이 모든 고통의 원흉이냐.",
						"english": "Are you... the source of all this suffering?",
						"japanese": "貴様が…この全ての苦痛の元凶か。",
						"chinese": "你就是……这一切痛苦的元凶吗？",
						"french": "Es-tu... la source de toute cette souffrance ?",
						"spanish": "¿Eres tú... el origen de todo este sufrimiento?",
						"vietnamese": "Ngươi... là kẻ gây ra mọi nỗi đau này sao?",
						"thai": "เจ้าคือ... ต้นตอของความเจ็บปวดทั้งหมดนี้หรือ?",
						"hindi": "क्या तुम... इन सब दर्द का कारण हो?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "고통? 내가 부여한 건 오직… 영원한 침묵뿐.",
						"english": "Suffering? All I bestowed was... eternal silence.",
						"japanese": "苦痛だと？私が与えたのは…永遠の沈黙だけだ。",
						"chinese": "痛苦？我所赐予的只有……永恒的寂静。",
						"french": "La souffrance ? Tout ce que j'ai accordé n'est que... le silence éternel.",
						"spanish": "¿Sufrimiento? Todo lo que concedí fue... el silencio eterno.",
						"vietnamese": "Nỗi đau? Ta chỉ ban tặng... sự im lặng vĩnh cửu.",
						"thai": "ความเจ็บปวด? สิ่งที่ข้ามอบให้มีเพียง... ความเงียบงันชั่วนิรันดร์",
						"hindi": "दर्द? मैंने तो बस... शाश्वत चुप्पी दी है।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"spot": [
						3,
						3
					],
					"type": "direction",
					"speaker": "amir",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "조심해! 저자는 단순한 괴물이 아니야. 고통 그 자체를 먹고 자란 존재다!",
						"english": "Be careful! That one is no mere monster. It is a being that feeds on suffering itself!",
						"japanese": "気をつけろ！あれは単なる怪物ではない。苦痛そのものを糧に育った存在だ！",
						"chinese": "小心！那家伙不是普通的怪物。它是以痛苦为食而生的存在！",
						"french": "Attention ! Ce n'est pas un simple monstre. C'est une entité qui se nourrit de la souffrance elle-même !",
						"spanish": "¡Cuidado! Ese no es un simple monstruo. ¡Es un ser que se alimenta del sufrimiento mismo!",
						"vietnamese": "Cẩn thận! Kẻ đó không phải là quái vật bình thường. Nó là một thực thể lớn lên nhờ chính nỗi đau!",
						"thai": "ระวัง! มันไม่ใช่แค่สัตว์ประหลาดธรรมดา แต่มันคือสิ่งมีชีวิตที่เติบโตขึ้นด้วยความเจ็บปวด!",
						"hindi": "सावधान! वह सिर्फ एक राक्षस नहीं है। वह तो स्वयं दर्द पर पला-बढ़ा है!"
					},
					"speaker": "amir",
					"emotion": "sad"
				},
				{
					"speaker": "amir",
					"duration_ms": 400,
					"type": "direction",
					"action": "exit"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "각오는 됐어!",
						"english": "I'm ready!",
						"japanese": "覚悟はできている！",
						"chinese": "我准备好了！",
						"french": "Je suis prêt !",
						"spanish": "¡Estoy listo!",
						"vietnamese": "Ta đã sẵn sàng!",
						"thai": "ข้าเตรียมพร้อมแล้ว!",
						"hindi": "मैं तैयार हूँ!"
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "하찮은 것… 영원히 고통받아라!",
						"english": "Insignificant wretch... Suffer eternally!",
						"japanese": "くだらん奴… 永遠に苦しめ！",
						"chinese": "卑微之物… 永受折磨吧！",
						"french": "Misérable créature... Souffre éternellement !",
						"spanish": "¡Insignificante... Sufre eternamente!",
						"vietnamese": "Đồ hèn mọn... Hãy chịu đựng nỗi đau vĩnh viễn!",
						"thai": "เจ้าสิ่งต่ำต้อย... จงทรมานชั่วนิรันดร์!",
						"hindi": "तुच्छ प्राणी... अनंत काल तक पीड़ा भोगो!"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "크윽… 아직… 끝나지 않았어!",
						"english": "Ugh... It's not... over yet!",
						"japanese": "くっ… まだ… 終わってない！",
						"chinese": "呃… 还没… 结束！",
						"french": "Argh... Ce n'est pas... encore fini !",
						"spanish": "Argh... ¡Aún no... ha terminado!",
						"vietnamese": "Khụ... Vẫn chưa... kết thúc!",
						"thai": "อึก... ยัง... ไม่จบ!",
						"hindi": "उफ़्फ़... यह... अभी खत्म नहीं हुआ!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "모래 폭풍이 모든 것을 집어삼켰다.",
						"english": "The sandstorm devoured everything.",
						"japanese": "砂嵐が全てを飲み込んだ。",
						"chinese": "沙尘暴吞噬了一切。",
						"french": "La tempête de sable a tout englouti.",
						"spanish": "La tormenta de arena lo devoró todo.",
						"vietnamese": "Cơn bão cát đã nuốt chửng mọi thứ.",
						"thai": "พายุทรายกลืนกินทุกสิ่ง.",
						"hindi": "रेतीले तूफान ने सब कुछ निगल लिया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"잃어버린 고대 도시. 모래 폭풍이 모든 것을 집어삼킨 곳.",
			"그곳에서 진실은 속삭임처럼 찾아왔다.",
			"떠돌이 상인 아미르. 그는 너무 많은 것을 알고 있었다.",
			"과거의 비극은… 끝없는 고통의 시작이었다."
		],
		"english": [
			"The lost ancient city. Where sandstorms devoured everything.",
			"There, the truth came like a whisper.",
			"Amir, the wandering merchant. He knew too much.",
			"The tragedy of the past... was the beginning of endless suffering."
		],
		"japanese": [
			"失われた古代都市。砂嵐がすべてを飲み込んだ場所。",
			"そこで、真実はささやきのように訪れた。",
			"流浪の商人アミール。彼は知りすぎていた。",
			"過去の悲劇は… 終わりのない苦痛の始まりだった。"
		],
		"chinese": [
			"失落的古城。沙尘暴吞噬一切之地。",
			"在那里，真相如低语般降临。",
			"流浪商人阿米尔。他知道得太多了。",
			"过去的悲剧… 是无尽痛苦的开始。"
		],
		"french": [
			"La cité antique perdue. Là où les tempêtes de sable dévoraient tout.",
			"Là, la vérité est venue comme un murmure.",
			"Amir, le marchand nomade. Il en savait trop.",
			"La tragédie du passé… était le début d'une souffrance sans fin."
		],
		"spanish": [
			"La ciudad antigua perdida. Donde las tormentas de arena lo devoraron todo.",
			"Allí, la verdad llegó como un susurro.",
			"Amir, el mercader errante. Sabía demasiado.",
			"La tragedia del pasado… fue el comienzo de un sufrimiento interminable."
		],
		"vietnamese": [
			"Thành phố cổ đại đã mất. Nơi bão cát nuốt chửng mọi thứ.",
			"Ở đó, sự thật đến như một lời thì thầm.",
			"Amir, thương nhân lang thang. Hắn biết quá nhiều.",
			"Bi kịch của quá khứ… là khởi đầu của nỗi đau vô tận."
		],
		"thai": [
			"นครโบราณที่สาบสูญ. ที่ซึ่งพายุทรายกลืนกินทุกสิ่ง.",
			"ที่นั่น ความจริงมาเยือนดุจเสียงกระซิบ.",
			"อามีร์ พ่อค้าเร่ร่อน. เขารู้มากเกินไป.",
			"โศกนาฏกรรมในอดีต… คือจุดเริ่มต้นของความทุกข์ทรมานไม่สิ้นสุด."
		],
		"hindi": [
			"खोया हुआ प्राचीन शहर। जहाँ रेत के तूफानों ने सब कुछ निगल लिया था。",
			"वहाँ, सच एक फुसफुसाहट की तरह आया।",
			"घुमंतू व्यापारी अमीर। वह बहुत कुछ जानता था।",
			"अतीत की त्रासदी… अंतहीन पीड़ा की शुरुआत थी।"
		]
	}
} as const;
