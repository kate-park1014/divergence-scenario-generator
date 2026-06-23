export const scenario_snowy_guzzler_79_03 = {
	"scenario_id": "snowy_guzzler_79_03",
	"order": 3,
	"act": "rising",
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
	"prologue": {
		"korean": [
			"뿔잔의 축제는 끝없이 이어졌다.",
			"모두 슬픔을 잊고, 기쁨만을 노래하라.",
			"가면 뒤에 감춰진 진실은 무엇인가.",
			"광대의 노래는 거짓을 속삭였다."
		],
		"english": [
			"The Feast of the Horns continued endlessly.",
			"Forget all sorrow, sing only of joy.",
			"What truth is hidden behind the mask?",
			"The jester's song whispered lies."
		],
		"japanese": [
			"角杯の祭りは果てしなく続いた。",
			"悲しみを忘れ、喜びだけを歌え。",
			"仮面の裏に隠された真実とは何か。",
			"道化師の歌は偽りを囁いた。"
		],
		"chinese": [
			"角杯的庆典无休止地进行着。",
			"忘却所有悲伤，只歌唱喜悦。",
			"假面背后隐藏着什么真相？",
			"小丑的歌声低语着谎言。"
		],
		"french": [
			"La Fête des Cornes se poursuivait sans fin.",
			"Oubliez toute tristesse, chantez seulement la joie.",
			"Quelle vérité est cachée derrière le masque ?",
			"Le chant du bouffon murmurait des mensonges."
		],
		"spanish": [
			"La Fiesta de los Cuernos continuó sin cesar.",
			"Olvidad toda pena, cantad solo la alegría.",
			"¿Qué verdad se esconde tras la máscara?",
			"La canción del bufón susurraba mentiras."
		],
		"vietnamese": [
			"Lễ hội Sừng tiếp diễn không ngừng.",
			"Hãy quên đi mọi buồn đau, chỉ ca ngợi niềm vui.",
			"Sự thật nào ẩn giấu sau chiếc mặt nạ?",
			"Bài hát của tên hề thì thầm những lời dối trá."
		],
		"thai": [
			"เทศกาลแห่งเขาสัตว์ดำเนินต่อไปไม่สิ้นสุด",
			"จงลืมความเศร้าทั้งปวง และขับขานแต่ความสุข",
			"ความจริงใดซ่อนอยู่ภายใต้หน้ากาก?",
			"เพลงของตัวตลกกระซิบคำโกหก"
		],
		"hindi": [
			"सींगों का त्योहार अंतहीन चलता रहा।",
			"सभी दुख भूलो, केवल खुशी के गीत गाओ।",
			"नकाब के पीछे कौन-सी सच्चाई छिपी है?",
			"मसखरे के गीत ने झूठ फुसफुसाए।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "차가운 공기에 이상한 열기가 섞여들었다.",
						"english": "A strange heat mingled with the cold air.",
						"japanese": "冷たい空気に奇妙な熱が混じり合った。",
						"chinese": "冰冷的空气中混杂着奇怪的热度。",
						"french": "Une étrange chaleur se mêlait à l'air froid.",
						"spanish": "Un calor extraño se mezclaba con el aire frío.",
						"vietnamese": "Một luồng nhiệt kỳ lạ hòa vào không khí lạnh.",
						"thai": "ความร้อนประหลาดปะปนอยู่ในอากาศที่เย็นยะเยือก",
						"hindi": "ठंडी हवा में एक अजीब सी गर्मी घुल गई।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "뿔잔의 영향인가? 점점 기묘해지네.",
						"english": "Is it the Horn's influence? It's getting stranger.",
						"japanese": "角杯の影響か？ますます奇妙になる。",
						"chinese": "是角杯的影响吗？越来越诡异了。",
						"french": "Est-ce l'influence de la Corne ? Ça devient de plus en plus étrange.",
						"spanish": "¿Es la influencia del Cuerno? Se está volviendo más extraño.",
						"vietnamese": "Có phải do ảnh hưởng của Chiếc Sừng? Nó càng ngày càng kỳ lạ.",
						"thai": "เป็นอิทธิพลของเขาสัตว์หรือเปล่า? มันแปลกขึ้นเรื่อยๆ",
						"hindi": "क्या यह सींग का प्रभाव है? यह और अजीब होता जा रहा है।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"spot": [
						3,
						3
					],
					"speaker": "finn",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "finn",
					"content": {
						"korean": "어서 와! 축제는 시작되었어!",
						"english": "Welcome! The feast has begun!",
						"japanese": "ようこそ！祭りは始まったよ！",
						"chinese": "欢迎！庆典已经开始了！",
						"french": "Bienvenue ! La fête a commencé !",
						"spanish": "¡Bienvenidos! ¡La fiesta ha comenzado!",
						"vietnamese": "Chào mừng! Lễ hội đã bắt đầu rồi!",
						"thai": "ยินดีต้อนรับ! เทศกาลได้เริ่มต้นขึ้นแล้ว!",
						"hindi": "स्वागत है! उत्सव शुरू हो गया है!"
					},
					"type": "speech",
					"emotion": "happy"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "모두 슬픔을 잊고, 영원히 행복해지는 곳!",
						"english": "A place where all forget sorrow and become eternally happy!",
						"japanese": "皆が悲しみを忘れ、永遠に幸せになる場所！",
						"chinese": "所有人都能忘却悲伤，永远幸福的地方！",
						"french": "Un endroit où tous oublient la tristesse et deviennent éternellement heureux !",
						"spanish": "¡Un lugar donde todos olvidan la tristeza y son eternamente felices!",
						"vietnamese": "Nơi mọi người quên đi nỗi buồn và hạnh phúc mãi mãi!",
						"thai": "สถานที่ที่ทุกคนลืมความเศร้าและมีความสุขชั่วนิรันดร์!",
						"hindi": "वह जगह जहाँ सब दुख भूलकर हमेशा के लिए खुश हो जाते हैं!"
					},
					"speaker": "finn"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "finn",
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "몽환적인 얼음 꽃이 피어났다. 그 향기는 묘한 불안감을 조성했다.",
						"english": "Ethereal ice flowers bloomed. Their fragrance created a strange unease.",
						"japanese": "夢幻的な氷の花が咲き乱れた。その香りは奇妙な不安感を醸し出した。",
						"chinese": "梦幻般的冰花绽放了。其芬芳营造出一种奇特的焦虑感。",
						"french": "Des fleurs de glace éthérées fleurissaient. Leur parfum créait une étrange inquiétude.",
						"spanish": "Flores de hielo etéreas florecieron. Su fragancia creó una extraña inquietud.",
						"vietnamese": "Những bông hoa băng mộng mơ nở rộ. Hương thơm của chúng tạo ra một cảm giác bất an kỳ lạ.",
						"thai": "ดอกไม้น้ำแข็งชวนฝันบานสะพรั่ง กลิ่นหอมของมันสร้างความไม่สบายใจแปลกๆ",
						"hindi": "अलौकिक बर्फीले फूल खिले। उनकी सुगंध ने एक अजीब बेचैनी पैदा की।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "봐, 이 꽃들처럼 아름답잖아? 슬픔 따윈 필요 없어!",
						"english": "Look, aren't they beautiful like these flowers? No need for sadness!",
						"japanese": "見て、この花々のように美しいでしょう？悲しみなんていらない！",
						"chinese": "看，它们像这些花一样美丽，不是吗？不需要悲伤！",
						"french": "Regarde, ne sont-elles pas belles comme ces fleurs ? Pas besoin de tristesse !",
						"spanish": "¡Mira, ¿no son hermosas como estas flores? ¡No hay necesidad de tristeza!",
						"vietnamese": "Nhìn xem, chúng chẳng đẹp như những bông hoa này sao? Không cần buồn đau đâu!",
						"thai": "ดูสิ ไม่สวยเหมือนดอกไม้พวกนี้เหรอ? ไม่จำเป็นต้องเศร้า!",
						"hindi": "देखो, ये फूलों की तरह सुंदर नहीं हैं क्या? दुख की कोई जरूरत नहीं!"
					},
					"speaker": "finn",
					"emotion": "happy"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "넌... 정말 행복해 보여?",
						"english": "You... truly look happy?",
						"japanese": "君は…本当に幸せそうに見える？",
						"chinese": "你…真的看起来很幸福吗？",
						"french": "Tu... as vraiment l'air heureux ?",
						"spanish": "¿Tú... pareces realmente feliz?",
						"vietnamese": "Bạn... thực sự trông hạnh phúc ư?",
						"thai": "เธอ... ดูมีความสุขจริงๆ เหรอ?",
						"hindi": "तुम... सच में खुश दिख रहे हो?"
					}
				},
				{
					"content": {
						"korean": "물론이지! 뿔잔이 주는 기쁨은 영원하니까!",
						"english": "Of course! The joy the Horned Goblet brings is eternal!",
						"japanese": "もちろん！角杯がもたらす喜びは永遠だからね！",
						"chinese": "当然！号角杯带来的喜悦是永恒的！",
						"french": "Bien sûr ! La joie que la Coupe Cornue apporte est éternelle !",
						"spanish": "¡Claro! ¡La alegría que el Cáliz Cornudo trae es eterna!",
						"vietnamese": "Dĩ nhiên rồi! Niềm vui mà Chiếc Cốc Sừng mang lại là vĩnh cửu mà!",
						"thai": "แน่นอนสิ! ความสุขที่ถ้วยเขาให้มามันเป็นนิรันดร์!",
						"hindi": "बेशक! सींग वाला प्याला जो खुशी देता है, वो शाश्वत है!"
					},
					"type": "speech",
					"speaker": "finn",
					"emotion": "happy"
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
					"speaker": "finn",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "가면 뒤에 숨겨진 건... 고통이잖아.",
						"english": "Hidden behind the mask... is pain.",
						"japanese": "仮面の裏に隠されているのは…苦痛じゃないか。",
						"chinese": "面具之下隐藏的…是痛苦吧。",
						"french": "Ce qui est caché derrière le masque... c'est la douleur.",
						"spanish": "Lo que se esconde tras la máscara... es dolor.",
						"vietnamese": "Ẩn sau chiếc mặt nạ... là nỗi đau.",
						"thai": "ที่ซ่อนอยู่หลังหน้ากาก... คือความเจ็บปวดต่างหาก.",
						"hindi": "नकाब के पीछे छिपा हुआ... दर्द है।"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "고통? 그게 뭔데? 다 잊어버려!",
						"english": "Pain? What's that? Forget it all!",
						"japanese": "苦痛？それって何？全部忘れてしまえ！",
						"chinese": "痛苦？那是什么？都忘了吧！",
						"french": "La douleur ? Qu'est-ce que c'est ? Oublie tout ça !",
						"spanish": "¿Dolor? ¿Qué es eso? ¡Olvídalo todo!",
						"vietnamese": "Đau khổ? Đó là gì? Quên hết đi!",
						"thai": "ความเจ็บปวด? มันคืออะไร? ลืมมันไปให้หมด!",
						"hindi": "दर्द? वो क्या होता है? सब भूल जाओ!"
					},
					"type": "speech",
					"speaker": "finn"
				},
				{
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "뿔잔이 주는 이 행복에 취해. 영원한 축제만이 있을 뿐!",
						"english": "Indulge in this happiness the Horned Goblet brings. There is only an eternal festival!",
						"japanese": "角杯がもたらすこの幸福に酔いしれろ。永遠の祝祭あるのみ！",
						"chinese": "沉浸在号角杯带来的这份幸福中吧。只有永恒的庆典！",
						"french": "Enivre-toi de ce bonheur que la Coupe Cornue apporte. Il n'y a qu'un festival éternel !",
						"spanish": "Embriágate de esta felicidad que el Cáliz Cornudo trae. ¡Solo existe un festival eterno!",
						"vietnamese": "Hãy say đắm trong hạnh phúc mà Chiếc Cốc Sừng mang lại. Chỉ có một lễ hội vĩnh cửu mà thôi!",
						"thai": "จงดื่มด่ำกับความสุขที่ถ้วยเขาให้มานี้ มีเพียงเทศกาลนิรันดร์เท่านั้น!",
						"hindi": "सींग वाले प्याले की इस खुशी में डूब जाओ। केवल एक शाश्वत उत्सव है!"
					},
					"emotion": "happy"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "넌 속고 있어.",
						"english": "You are being deceived.",
						"japanese": "君は騙されている。",
						"chinese": "你被骗了。",
						"french": "Tu es trompé.",
						"spanish": "Estás siendo engañado.",
						"vietnamese": "Ngươi đang bị lừa.",
						"thai": "เธอถูกหลอกอยู่.",
						"hindi": "तुम्हें धोखा दिया जा रहा है।"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "finn",
					"spot": [
						3,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "angry",
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "영원한 축제를 멈추지 마! 감히 방해하려 하지 마!",
						"english": "Don't stop the eternal festival! Don't you dare interfere!",
						"japanese": "永遠の祝祭を止めるな！邪魔などするな！",
						"chinese": "别停止这永恒的庆典！不许你来打扰！",
						"french": "N'arrêtez pas le festival éternel ! N'osez pas interférer !",
						"spanish": "¡No detengas el festival eterno! ¡No te atrevas a interferir!",
						"vietnamese": "Đừng dừng lễ hội vĩnh cửu! Đừng dám can thiệp!",
						"thai": "อย่าหยุดเทศกาลนิรันดร์! อย่าแม้แต่จะรบกวน!",
						"hindi": "शाश्वत उत्सव को मत रोको! दखल देने की हिम्मत मत करो!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "비켜, 핀!",
						"english": "Get out of the way, Finn!",
						"japanese": "どけ、フィン！",
						"chinese": "让开，芬！",
						"french": "Écarte-toi, Finn !",
						"spanish": "¡Aparta, Finn!",
						"vietnamese": "Tránh ra, Finn!",
						"thai": "หลีกไป, ฟินน์!",
						"hindi": "हट जाओ, फिन!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "어리석은 자여. 진정한 기쁨을 모르는군.",
						"english": "Fool. You know not true joy.",
						"japanese": "愚か者め。真の喜びを知らぬとは。",
						"chinese": "愚蠢的人。你不懂真正的喜悦。",
						"french": "Imbécile. Tu ne connais pas la vraie joie.",
						"spanish": "Necio. No conoces la verdadera alegría.",
						"vietnamese": "Kẻ ngốc. Ngươi không biết niềm vui thật sự.",
						"thai": "คนโง่เง่า. เจ้าไม่รู้จักความสุขที่แท้จริง.",
						"hindi": "मूर्ख। तुम सच्ची खुशी नहीं जानते।"
					},
					"type": "speech",
					"speaker": "finn"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "핀의 눈은 광기로 빛나고 있었다. 그의 가면이 왜곡된 미소를 지었다.",
						"english": "Finn's eyes gleamed with madness. His mask bore a twisted smile.",
						"japanese": "フィンの目は狂気に輝いていた。彼の仮面は歪んだ笑みを浮かべた。",
						"chinese": "芬的眼睛闪烁着疯狂。他的面具露出了扭曲的笑容。",
						"french": "Les yeux de Finn brillaient de folie. Son masque affichait un sourire tordu.",
						"spanish": "Los ojos de Finn brillaban con locura. Su máscara dibujaba una sonrisa retorcida.",
						"vietnamese": "Mắt Finn sáng lên vì điên cuồng. Chiếc mặt nạ của hắn nở một nụ cười méo mó.",
						"thai": "ดวงตาของฟินน์เปล่งประกายด้วยความบ้าคลั่ง หน้ากากของเขามีรอยยิ้มที่บิดเบี้ยว.",
						"hindi": "फिन की आँखें पागलपन से चमक रही थीं। उसके नकाब पर एक विकृत मुस्कान थी।"
					},
					"speaker": "narrator"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "축제의 환락은 더욱 깊어졌다. 탐험대는 무릎을 꿇었다.",
						"english": "The revelry of the festival deepened further. The expedition team knelt.",
						"japanese": "祭りの歓楽はさらに深まった。探検隊はひざまずいた。",
						"chinese": "节日的狂欢更加深沉。探险队跪下了。",
						"french": "L'allégresse du festival s'intensifia. L'équipe d'expédition s'agenouilla.",
						"spanish": "La juerga del festival se hizo más profunda. El equipo de expedición se arrodilló.",
						"vietnamese": "Niềm vui của lễ hội càng thêm sâu sắc. Đoàn thám hiểm quỳ xuống.",
						"thai": "ความสนุกสนานของเทศกาลลึกซึ้งยิ่งขึ้น ทีมสำรวจคุกเข่าลง",
						"hindi": "उत्सव का उल्लास और गहरा हो गया। अभियान दल घुटनों के बल बैठ गया।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 것들. 영원히 이 축제에 갇혀라.",
						"english": "Foolish mortals. Be trapped in this festival forever.",
						"japanese": "愚かな者たちめ。永遠にこの祭りに囚われるがいい。",
						"chinese": "愚蠢的东西。永远困在这个庆典中吧。",
						"french": "Stupides créatures. Restez piégés à jamais dans cette fête.",
						"spanish": "Estúpidos. Permaneced atrapados para siempre en este festival.",
						"vietnamese": "Lũ ngu ngốc. Hãy bị kẹt trong lễ hội này mãi mãi đi.",
						"thai": "พวกโง่เง่า จงถูกขังอยู่ในเทศกาลนี้ตลอดไป",
						"hindi": "मूर्खों। हमेशा के लिए इस उत्सव में फँसे रहो。"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "...절대 포기하지 않아.",
						"english": "...I will never give up.",
						"japanese": "…決して諦めない。",
						"chinese": "...绝不放弃。",
						"french": "...Je n'abandonnerai jamais.",
						"spanish": "...Nunca me rendiré.",
						"vietnamese": "...Tuyệt đối không bỏ cuộc.",
						"thai": "...ไม่ยอมแพ้เด็ดขาด.",
						"hindi": "...कभी हार नहीं मानूँगा।"
					},
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"speaker": "finn",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "finn",
					"content": {
						"korean": "감히 뿔잔의 축제를 망치려 하다니!",
						"english": "How dare you try to ruin the Horned Chalice Festival!",
						"japanese": "角杯の祭りを台無しにするつもりか！",
						"chinese": "胆敢破坏角杯节！",
						"french": "Comment osez-vous gâcher le Festival du Calice Cornu !",
						"spanish": "¡Cómo osas arruinar el Festival del Cáliz Astado!",
						"vietnamese": "Dám phá hỏng Lễ hội Sừng!",
						"thai": "กล้าดียังไงมาทำลายเทศกาลแห่งเขาสัตว์!",
						"hindi": "तुम्हारी हिम्मत कैसे हुई सींग वाले प्याले के उत्सव को बर्बाद करने की!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "여기서 끝내주겠어! {random_boss}여! 저들을 막아라!",
						"english": "This ends here! O, {random_boss}! Stop them!",
						"japanese": "ここで終わりだ！ {random_boss}よ！ 彼らを止めろ！",
						"chinese": "到此为止！ {random_boss}！ 阻止他们！",
						"french": "Ça se termine ici ! Ô, {random_boss} ! Arrête-les !",
						"spanish": "¡Esto termina aquí! ¡Oh, {random_boss}! ¡Detenedlos!",
						"vietnamese": "Kết thúc tại đây thôi! Hỡi {random_boss}! Ngăn chúng lại!",
						"thai": "มันจบที่นี่แหละ! โอ้ย {random_boss}! หยุดพวกมันซะ!",
						"hindi": "यह यहीं खत्म होगा! हे {random_boss}! उन्हें रोको!"
					},
					"emotion": "angry"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"direction": "down",
					"action": "exit",
					"speaker": "finn"
				},
				{
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 핀의 뒤에서 나타났다. 정체 모를 어둠이 공간을 집어삼켰다.",
						"english": "A colossal shadow appeared behind Finn. An unknown darkness swallowed the space.",
						"japanese": "巨大な影がフィンの背後に現れた。正体不明の闇が空間を飲み込んだ。",
						"chinese": "巨大的影子出现在芬恩身后。未知的黑暗吞噬了空间。",
						"french": "Une ombre colossale apparut derrière Finn. Une obscurité inconnue engloutit l'espace.",
						"spanish": "Una sombra colosal apareció detrás de Finn. Una oscuridad desconocida engulló el espacio.",
						"vietnamese": "Một bóng đen khổng lồ hiện ra sau lưng Finn. Bóng tối vô danh nuốt chửng không gian.",
						"thai": "เงาขนาดมหึมาปรากฏขึ้นหลังฟินน์ ความมืดมิดที่ไม่รู้จักกลืนกินพื้นที่",
						"hindi": "फिन के पीछे एक विशाल छाया प्रकट हुई। एक अज्ञात अंधकार ने अंतरिक्ष को निगल लिया।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "감히 나의 축제를... 방해할 셈이냐?",
						"english": "How dare you... interrupt my festival?",
						"japanese": "我が祭りを... 邪魔するつもりか？",
						"chinese": "胆敢... 妨碍我的节日？",
						"french": "Comment osez-vous... interrompre mon festival ?",
						"spanish": "¿Cómo osas... interrumpir mi festival?",
						"vietnamese": "Dám... phá đám lễ hội của ta sao?",
						"thai": "กล้าดียังไง... มาขัดขวางเทศกาลของข้า?",
						"hindi": "तुम्हारी हिम्मत कैसे हुई... मेरे उत्सव में बाधा डालने की?"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "우리가 멈출 거야.",
						"english": "We will stop you.",
						"japanese": "私たちが止める。",
						"chinese": "我们会阻止你。",
						"french": "Nous t'arrêterons.",
						"spanish": "Te detendremos.",
						"vietnamese": "Chúng tôi sẽ ngăn ngươi lại.",
						"thai": "เราจะหยุดมันเอง",
						"hindi": "हम तुम्हें रोकेंगे।"
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "정체 모를 존재가 서서히 스러졌다. 축제의 환상이 깨지기 시작했다.",
						"english": "The unknown entity slowly withered away. The festival's illusion began to shatter.",
						"japanese": "正体不明の存在が徐々に消え去った。祭りの幻想が崩れ始めた。",
						"chinese": "未知存在渐渐消散。节日的幻象开始破碎。",
						"french": "L'entité inconnue s'évanouit lentement. L'illusion du festival commença à se briser.",
						"spanish": "La entidad desconocida se desvaneció lentamente. La ilusión del festival comenzó a romperse.",
						"vietnamese": "Thực thể vô danh dần tan biến. Ảo ảnh lễ hội bắt đầu vỡ vụn.",
						"thai": "สิ่งมีชีวิตที่ไม่รู้จักค่อยๆ สลายไป ภาพลวงตาของเทศกาลเริ่มแตกสลาย",
						"hindi": "अज्ञात सत्ता धीरे-धीरे गायब हो गई। उत्सव का भ्रम टूटना शुरू हो गया।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "...이건... 시작일 뿐...",
						"english": "...This is... just the beginning...",
						"japanese": "...これは...始まりに過ぎない...",
						"chinese": "...这...只是开始...",
						"french": "...Ce n'est... que le début...",
						"spanish": "...Esto es... solo el principio...",
						"vietnamese": "...Đây... chỉ là khởi đầu...",
						"thai": "...นี่มัน...แค่จุดเริ่มต้นเท่านั้น...",
						"hindi": "...यह... बस शुरुआत है..."
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "아직 끝나지 않았어.",
						"english": "It's not over yet.",
						"japanese": "まだ終わっていない。",
						"chinese": "还没结束。",
						"french": "Ce n'est pas encore fini.",
						"spanish": "Aún no ha terminado.",
						"vietnamese": "Vẫn chưa kết thúc.",
						"thai": "ยังไม่จบ",
						"hindi": "अभी खत्म नहीं हुआ है।"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "얼음 꽃의 향기는 더욱 짙어졌다. 다음 환각이 시작될 조짐이었다.",
						"english": "The scent of the ice flower grew thicker. It was a sign the next hallucination was about to begin.",
						"japanese": "氷の花の香りはさらに濃くなった。次の幻覚が始まる兆候だった。",
						"chinese": "冰花的香气愈发浓郁。预示着下一次幻觉即将开始。",
						"french": "Le parfum de la fleur de glace s'épaissit. C'était le signe que la prochaine hallucination était sur le point de commencer.",
						"spanish": "El aroma de la flor de hielo se hizo más intenso. Era una señal de que la próxima alucinación estaba a punto de comenzar.",
						"vietnamese": "Hương hoa băng càng lúc càng nồng nặc. Đó là dấu hiệu cho ảo giác tiếp theo sắp bắt đầu.",
						"thai": "กลิ่นหอมของดอกไม้น้ำแข็งเข้มข้นขึ้น นั่นเป็นสัญญาณว่าภาพหลอนครั้งต่อไปกำลังจะเริ่มขึ้น",
						"hindi": "बर्फ के फूल की सुगंध और भी गहरी हो गई। यह इस बात का संकेत था कि अगला मतिभ्रम शुरू होने वाला था।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			]
		}
	]
} as const;
