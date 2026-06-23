export const scenario_forest_pellia_1_02 = {
	"scenario_id": "forest_pellia_1_02",
	"order": 2,
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
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "숲의 공기가 무겁게 내려앉았다. 익숙했던 길이 낯설어졌다.",
						"english": "The forest air hung heavy. Familiar paths turned strange.",
						"japanese": "森の空気が重く垂れ込めた。見慣れた道が、見知らぬものになった。",
						"chinese": "森林的空气沉重地压下。熟悉的路变得陌生。",
						"french": "L'air de la forêt était lourd. Les chemins familiers étaient devenus étranges.",
						"spanish": "El aire del bosque era pesado. Los caminos conocidos se volvieron extraños.",
						"vietnamese": "Không khí rừng nặng nề. Lối quen bỗng lạ.",
						"thai": "อากาศในป่าหนักอึ้ง เส้นทางที่คุ้นเคยกลับแปลกตา",
						"hindi": "जंगल की हवा भारी हो गई। परिचित रास्ते अजनबी लगने लगे।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "펠리아님, 이 길이 맞아요? 길이 이상해요.",
						"english": "Phelia, is this the right way? The path feels strange.",
						"japanese": "フェリア様、この道で合っていますか？道がおかしいです。",
						"chinese": "菲利亚大人，这条路对吗？路很奇怪。",
						"french": "Phelia, c'est le bon chemin ? La route est étrange.",
						"spanish": "Phelia, ¿es este el camino correcto? El sendero es extraño.",
						"vietnamese": "Phelia, lối này đúng không? Con đường lạ quá.",
						"thai": "ท่านเฟเลีย ทางนี้ถูกเหรอ? ทางมันแปลกๆ",
						"hindi": "फेलिया जी, क्या यह सही रास्ता है? रास्ता अजीब लग रहा है।"
					}
				},
				{
					"content": {
						"korean": "뭔가… 잘못된 것 같은데.",
						"english": "Something... feels wrong.",
						"japanese": "何か…おかしいような気がします。",
						"chinese": "好像…有什么不对劲。",
						"french": "Quelque chose... ne va pas.",
						"spanish": "Algo... no está bien.",
						"vietnamese": "Có gì đó… không đúng.",
						"thai": "บางอย่าง… ดูเหมือนจะไม่ถูกต้อง",
						"hindi": "कुछ... गलत लग रहा है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "그림자 속에선 무언가가 끊임없이 일렁였다.",
						"english": "Something continuously stirred in the shadows.",
						"japanese": "影の中では何かが絶えず揺らめいていた。",
						"chinese": "影子中有什么东西在不断地晃动。",
						"french": "Quelque chose ondulait sans cesse dans les ombres.",
						"spanish": "Algo se agitaba incesantemente entre las sombras.",
						"vietnamese": "Có điều gì đó không ngừng lay động trong bóng tối.",
						"thai": "มีบางสิ่งบางอย่างเคลื่อนไหวอยู่ตลอดเวลาในเงามืด",
						"hindi": "परछाइयों में कुछ लगातार हिल रहा था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"speaker": "cedar",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "…길을 잃었군. 숲은 언제나 너희를 속이지.",
						"english": "...Lost, are we? The forest always deceives you.",
						"japanese": "…道に迷ったか。森はいつもお前たちを欺く。",
						"chinese": "……迷路了。森林总是会欺骗你们。",
						"french": "...Vous êtes perdus. La forêt vous trompe toujours.",
						"spanish": "...Os habéis perdido. El bosque siempre os engaña.",
						"vietnamese": "…Lạc lối rồi à? Rừng luôn lừa dối các ngươi.",
						"thai": "...หลงทางสินะ ป่าหลอกลวงพวกเจ้าเสมอ",
						"hindi": "खो गए हो? जंगल हमेशा तुम्हें धोखा देता है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "cedar"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "누구세요?",
						"english": "Who are you?",
						"japanese": "どちら様ですか？",
						"chinese": "你是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ông là ai?",
						"thai": "ท่านเป็นใคร?",
						"hindi": "आप कौन हैं?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "cedar",
					"content": {
						"korean": "시더. 숲의 시간을 지키는 자.",
						"english": "Cider. Guardian of the forest's time.",
						"japanese": "シダー。森の時間を守る者。",
						"chinese": "希德。森林时间的守护者。",
						"french": "Cider. Gardien du temps de la forêt.",
						"spanish": "Cider. Guardián del tiempo del bosque.",
						"vietnamese": "Cider. Người canh giữ thời gian của rừng.",
						"thai": "ไซเดอร์ ผู้พิทักษ์กาลเวลาแห่งป่า",
						"hindi": "साइडर। वन के समय का संरक्षक।"
					}
				},
				{
					"content": {
						"korean": "숲의 전설에 따르면, 과거의 영웅들도 종종 시간을 넘나들었다.",
						"english": "Forest legends say even past heroes often traversed time.",
						"japanese": "森の伝説によると、過去の英雄たちも時を超えて旅をしたという。",
						"chinese": "根据森林传说，过去的英雄也常穿梭于时间。",
						"french": "Selon les légendes de la forêt, même les héros d'antan traversaient souvent le temps.",
						"spanish": "Las leyendas del bosque dicen que incluso los héroes del pasado a menudo viajaban en el tiempo.",
						"vietnamese": "Truyền thuyết rừng kể rằng, cả những anh hùng xưa cũng thường xuyên vượt thời gian.",
						"thai": "ตำนานป่าเล่าว่า เหล่าวีรบุรุษในอดีตก็มักเดินทางข้ามเวลา",
						"hindi": "वन की किंवदंतियों के अनुसार, अतीत के नायक भी अक्सर समय को पार करते थे।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "cedar"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "cedar",
					"content": {
						"korean": "이국적 문양 파편? 그런 것이 숲의 뒤틀림을 증폭시키지.",
						"english": "Exotic patterned fragments? They amplify the forest's distortion.",
						"japanese": "異国の文様破片？それが森の歪みを増幅させるんだ。",
						"chinese": "异国纹样碎片？它们会加剧森林的扭曲。",
						"french": "Des fragments à motifs exotiques ? Ils amplifient la distorsion de la forêt.",
						"spanish": "¿Fragmentos con patrones exóticos? Eso amplifica la distorsión del bosque.",
						"vietnamese": "Mảnh vỡ hoa văn kỳ lạ? Chúng khuếch đại sự méo mó của rừng.",
						"thai": "ชิ้นส่วนลวดลายแปลกตา? พวกมันจะขยายความบิดเบี้ยวของป่า",
						"hindi": "विदेशी पैटर्न वाले टुकड़े? वे वन की विकृति को बढ़ाते हैं।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 550,
					"speaker": "cedar",
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "갑자기 시야가 일그러졌다. 멀리서 들려오는 환청이 귀를 찢을 듯했다.",
						"english": "Suddenly, my vision blurred. Distant hallucinations tore at my ears.",
						"japanese": "突然、視界が歪んだ。遠くから聞こえる幻聴が耳をつんざくようだった。",
						"chinese": "突然，视线扭曲了。远处传来的幻听似要撕裂耳膜。",
						"french": "Soudain, ma vision s'est brouillée. Des hallucinations lointaines me déchiraient les oreilles.",
						"spanish": "De repente, mi visión se distorsionó. Alucinaciones lejanas me desgarraban los oídos.",
						"vietnamese": "Đột nhiên, tầm nhìn méo mó. Ảo thanh từ xa như xé toạc tai.",
						"thai": "ทันใดนั้น สายตาพร่ามัว เสียงหลอนจากที่ไกล ๆ ราวกับจะฉีกหู",
						"hindi": "अचानक, मेरी दृष्टि धुंधली हो गई। दूर से आती आवाजें मेरे कानों को चीर रही थीं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "머리가 울려! 여기가 어디지?",
						"english": "My head's throbbing! Where am I?",
						"japanese": "頭が響く！ここはどこだ？",
						"chinese": "头好痛！这里是哪里？",
						"french": "Ma tête bourdonne ! Où suis-je ?",
						"spanish": "¡Me zumba la cabeza! ¿Dónde estoy?",
						"vietnamese": "Đầu tôi ong lên! Đây là đâu?",
						"thai": "หัวฉันปวด! นี่ที่ไหนกัน?",
						"hindi": "मेरा सिर धड़क रहा है! मैं कहाँ हूँ?"
					}
				},
				{
					"speaker": "character_1",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "저기… 저 건물, 분명 아까 없었는데?",
						"english": "That... that building, it wasn't there before, was it?",
						"japanese": "あれ…あの建物、さっきはなかったはずだよね？",
						"chinese": "那里…那栋建筑，刚才明明没有的吧？",
						"french": "Là... ce bâtiment, il n'était pas là avant, n'est-ce pas ?",
						"spanish": "Ese... ese edificio, antes no estaba, ¿verdad?",
						"vietnamese": "Kia... tòa nhà đó, rõ ràng lúc nãy không có mà?",
						"thai": "นั่น... ตึกนั้น ไม่ได้อยู่ที่นี่เมื่อกี้ใช่ไหม?",
						"hindi": "वह... वह इमारत, वह पहले नहीं थी, है ना?"
					}
				},
				{
					"content": {
						"korean": "이것이 '차원의 틈새'다. 숲은 너희의 시간과 공간을 찢어내고 있어.",
						"english": "This is the 'Rift of Dimensions.' The forest is tearing apart your time and space.",
						"japanese": "これが『次元の狭間』だ。森がお前たちの時間と空間を引き裂いている。",
						"chinese": "这就是“次元裂隙”。森林正在撕裂你们的时间与空间。",
						"french": "C'est la 'Fissure dimensionnelle'. La forêt déchire votre temps et votre espace.",
						"spanish": "Esta es la 'Grieta dimensional'. El bosque está desgarrando vuestro tiempo y espacio.",
						"vietnamese": "Đây là 'Khe nứt chiều không gian'. Rừng đang xé nát thời gian và không gian của các ngươi.",
						"thai": "นี่คือ 'รอยแยกแห่งมิติ' ป่ากำลังฉีกเวลาและพื้นที่ของพวกเจ้า",
						"hindi": "यह 'आयामों का दरार' है। वन तुम्हारे समय और स्थान को फाड़ रहा है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "cedar"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "cedar",
					"content": {
						"korean": "오래된 유물이 이 현상을 부추긴다 들었다. 조심해라.",
						"english": "I heard ancient relics fuel this phenomenon. Be careful.",
						"japanese": "古い遺物がこの現象を煽ると聞いた。気をつけろ。",
						"chinese": "我听说古老遗物会加剧这种现象。小心。",
						"french": "J'ai entendu dire que d'anciens artefacts attisent ce phénomène. Soyez prudents.",
						"spanish": "Oí que las reliquias antiguas avivan este fenómeno. Ten cuidado.",
						"vietnamese": "Nghe nói cổ vật cũ khuấy động hiện tượng này. Hãy cẩn thận.",
						"thai": "ฉันได้ยินมาว่าโบราณวัตถุเก่าแก่เป็นตัวกระตุ้นปรากฏการณ์นี้ ระวังตัวด้วย",
						"hindi": "मैंने सुना है कि प्राचीन अवशेष इस घटना को बढ़ावा देते हैं। सावधान रहना।"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "cedar",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 450
				},
				{
					"content": {
						"korean": "숲의 중심에 다다르자, 과거의 잔상이 스쳐 지나갔다.",
						"english": "Reaching the forest's heart, remnants of the past flashed by.",
						"japanese": "森の中心にたどり着くと、過去の残像が通り過ぎていった。",
						"chinese": "抵达森林中心时，过去的残影一闪而过。",
						"french": "En atteignant le cœur de la forêt, des rémanences du passé ont défilé.",
						"spanish": "Al llegar al corazón del bosque, los vestigios del pasado pasaron fugazmente.",
						"vietnamese": "Đến trung tâm rừng, tàn dư quá khứ thoáng qua.",
						"thai": "เมื่อถึงใจกลางป่า ภาพอดีตก็ฉายผ่านไปแวบหนึ่ง",
						"hindi": "वन के हृदय तक पहुँचने पर, अतीत के अवशेष तेज़ी से गुजरे।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "으윽! 뭐지? 방금… 내가 아닌 다른 누군가를 본 것 같아.",
						"english": "Ugh! What was that? Just now... I think I saw someone else, not me.",
						"japanese": "うぐっ！何だ？今…自分ではない誰かを見た気がする。",
						"chinese": "呃！那是什么？刚才…我好像看到了不是我的另一个人。",
						"french": "Ugh ! Qu'est-ce que c'était ? Tout à l'heure... j'ai l'impression d'avoir vu quelqu'un d'autre que moi.",
						"spanish": "¡Uf! ¿Qué fue eso? Justo ahora... creo que vi a alguien más, no a mí.",
						"vietnamese": "Ư! Gì vậy? Vừa nãy... tôi dường như thấy ai đó khác chứ không phải mình.",
						"thai": "อึก! อะไรน่ะ? เมื่อกี้... ฉันคิดว่าเห็นคนอื่นที่ไม่ใช่ฉัน",
						"hindi": "उफ़! वह क्या था? अभी... मुझे लगता है कि मैंने खुद को नहीं, बल्कि किसी और को देखा।"
					}
				},
				{
					"content": {
						"korean": "나도! 낯선 목소리가 들렸어… '돌아갈 수 없어.'",
						"english": "Me too! I heard a strange voice... 'No turning back.'",
						"japanese": "私も！見知らぬ声が聞こえた…「もう戻れない。」",
						"chinese": "我也是！我听到了一个陌生的声音……“无法回头了。”",
						"french": "Moi aussi ! J'ai entendu une voix étrange... « On ne peut plus revenir en arrière. »",
						"spanish": "¡Yo también! Escuché una voz extraña... \"No hay vuelta atrás.\"",
						"vietnamese": "Tôi cũng vậy! Tôi nghe thấy một giọng nói lạ... 'Không thể quay lại được nữa.'",
						"thai": "ฉันด้วย! ได้ยินเสียงแปลกๆ... 'กลับไปไม่ได้แล้ว'",
						"hindi": "मैं भी! एक अजीब सी आवाज़ सुनाई दी... 'वापस नहीं जा सकते।'"
					},
					"speaker": "character_2",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "cedar",
					"content": {
						"korean": "영웅들이 겪었던 비선형적인 시간의 흐름. 그들의 흔적이다.",
						"english": "The non-linear flow of time experienced by heroes. Their traces remain.",
						"japanese": "英雄たちが経験した非線形的な時間の流れ。彼らの痕跡だ。",
						"chinese": "英雄们经历过的非线性时间流逝。这是他们的痕迹。",
						"french": "Le flux temporel non linéaire qu'ont vécu les héros. Ce sont leurs traces.",
						"spanish": "El flujo de tiempo no lineal que experimentaron los héroes. Sus huellas.",
						"vietnamese": "Dòng chảy thời gian phi tuyến tính mà các anh hùng đã trải qua. Đó là dấu vết của họ.",
						"thai": "กระแสเวลาที่ไม่เป็นเชิงเส้นที่เหล่าฮีโร่เคยเผชิญ นี่คือร่องรอยของพวกเขา",
						"hindi": "नायकों द्वारा अनुभव किया गया समय का अरैखिक प्रवाह। यह उनके निशान हैं।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "펠리아의 예언은 대체…",
						"english": "Pelia's prophecy, what on earth...",
						"japanese": "ペリアの予言は一体…",
						"chinese": "佩利亚的预言到底……",
						"french": "La prophétie de Pelia, alors...",
						"spanish": "La profecía de Pelia, ¿qué será...?",
						"vietnamese": "Lời tiên tri của Pelia rốt cuộc là...",
						"thai": "คำทำนายของเพเลียมัน...",
						"hindi": "पेलिया की भविष्यवाणी, आखिर..."
					}
				},
				{
					"content": {
						"korean": "이제 돌이킬 수 없다. 너희는 숲의 심장부에 갇혔다.",
						"english": "There's no turning back now. You are trapped in the heart of the forest.",
						"japanese": "もう後戻りはできない。君たちは森の心臓部に閉じ込められた。",
						"chinese": "已经无法回头了。你们被困在了森林的中心。",
						"french": "On ne peut plus revenir en arrière. Vous êtes piégés au cœur de la forêt.",
						"spanish": "Ya no hay vuelta atrás. Estáis atrapados en el corazón del bosque.",
						"vietnamese": "Không thể quay lại được nữa. Các ngươi bị mắc kẹt ở trung tâm khu rừng.",
						"thai": "ตอนนี้ย้อนกลับไม่ได้แล้ว พวกเจ้าถูกขังอยู่ในใจกลางป่า",
						"hindi": "अब वापस नहीं जा सकते। तुम जंगल के हृदय में फँस गए हो।"
					},
					"speaker": "cedar",
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 찢어지며 사라졌다. 환영이 걷히는 듯했다.",
						"english": "The massive shadow ripped apart and vanished. The illusion seemed to dissipate.",
						"japanese": "巨大な影が引き裂かれ、消え去った。幻影が晴れていくようだった。",
						"chinese": "巨大的影子被撕裂并消失了。幻象似乎也随之消散。",
						"french": "L'ombre gigantesque se déchira et disparut. L'illusion semblait se dissiper.",
						"spanish": "La sombra gigantesca se desgarró y desapareció. La ilusión pareció disiparse.",
						"vietnamese": "Bóng đen khổng lồ bị xé toạc và biến mất. Ảo ảnh dường như tan biến.",
						"thai": "เงาร่างมหึมาฉีกขาดและสลายไป ภาพลวงตาดูเหมือนจะจางหายไป",
						"hindi": "विशाल छाया फटकर गायब हो गई। भ्रम दूर होता हुआ प्रतीत हुआ।"
					}
				},
				{
					"content": {
						"korean": "…아니, 아직 끝나지 않았다. 진정한 절망은… 이제부터 시작이다.",
						"english": "...No, it's not over yet. True despair... begins now.",
						"japanese": "...いや、まだ終わってない。本当の絶望は…これから始まるんだ。",
						"chinese": "...不，还没有结束。真正的绝望……才刚刚开始。",
						"french": "...Non, ce n'est pas encore fini. Le véritable désespoir... ne fait que commencer.",
						"spanish": "...No, aún no ha terminado. La verdadera desesperación... empieza ahora.",
						"vietnamese": "...Không, vẫn chưa kết thúc. Nỗi tuyệt vọng thực sự... chỉ mới bắt đầu.",
						"thai": "...ไม่สิ ยังไม่จบสิ้น ความสิ้นหวังที่แท้จริง... กำลังจะเริ่มต้นขึ้นเดี๋ยวนี้",
						"hindi": "...नहीं, अभी खत्म नहीं हुआ है। असली निराशा... अब शुरू होती है।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "뭐? 대체 무슨 말을…",
						"english": "What? What are you even...?",
						"japanese": "何？一体何を言ってるんだ…",
						"chinese": "什么？你到底在说什么……",
						"french": "Quoi ? Que diable...",
						"spanish": "¿Qué? ¿De qué estás hablando...?",
						"vietnamese": "Gì cơ? Rốt cuộc là ông đang nói cái gì...",
						"thai": "อะไรนะ? นี่มันเรื่องอะไรกัน...",
						"hindi": "क्या? तुम कहना क्या चाहते हो...?"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "숲은 잠시 침묵했다. 하지만 뒤틀린 환영의 여운은 쉽사리 가시지 않았다.",
						"english": "The forest fell silent for a moment. But the lingering echoes of the twisted illusion refused to fade.",
						"japanese": "森は一時沈黙した。しかし、歪んだ幻影の余韻は容易に消えなかった。",
						"chinese": "森林暂时陷入了沉默。然而，扭曲幻象的余波并未轻易消散。",
						"french": "La forêt se tut un instant. Mais l'écho persistant de l'illusion tordue refusait de s'estomper.",
						"spanish": "El bosque enmudeció un instante. Pero el eco persistente de la ilusión retorcida se negaba a desvanecerse.",
						"vietnamese": "Khu rừng im lặng trong chốc lát. Nhưng dư âm của ảo ảnh méo mó vẫn không dễ dàng biến mất.",
						"thai": "ป่าเงียบไปชั่วขณะ แต่ความทรงจำของภาพลวงตาอันบิดเบี้ยวก็ยังไม่เลือนหายไปง่ายๆ",
						"hindi": "जंगल पल भर के लिए शांत हो गया। लेकिन मुड़ी हुई माया का प्रभाव आसानी से नहीं मिटा।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "펠리아의 다음 예언은, 더 깊은 미궁으로 그들을 이끌 것이다.",
						"english": "Pellia's next prophecy will lead them deeper into the labyrinth.",
						"japanese": "フェリアの次の予言は、彼らをさらなる深淵の迷宮へと導くだろう。",
						"chinese": "佩利亚的下一个预言，将把他们引向更深的迷宫。",
						"french": "La prochaine prophétie de Pellia les mènera plus profondément dans le labyrinthe.",
						"spanish": "La próxima profecía de Pellia los conducirá a lo más profundo del laberinto.",
						"vietnamese": "Lời tiên tri tiếp theo của Pellia sẽ dẫn họ vào sâu hơn trong mê cung.",
						"thai": "คำทำนายต่อไปของเพลเลียจะนำพวกเขาเข้าสู่เขาวงกตที่ลึกยิ่งกว่าเดิม",
						"hindi": "फेलिया की अगली भविष्यवाणी उन्हें भूलभुलैया के और गहरे में ले जाएगी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "뒤틀린 환영이 모든 것을 집어삼켰다.",
						"english": "The twisted illusion swallowed everything.",
						"japanese": "歪んだ幻影がすべてを飲み込んだ。",
						"chinese": "扭曲的幻象吞噬了一切。",
						"french": "L'illusion tordue a tout englouti.",
						"spanish": "La ilusión retorcida lo engulló todo.",
						"vietnamese": "Ảo ảnh méo mó đã nuốt chửng tất cả.",
						"thai": "ภาพลวงตาอันบิดเบี้ยวได้กลืนกินทุกสิ่ง",
						"hindi": "मुड़ी हुई माया ने सब कुछ निगल लिया।"
					}
				},
				{
					"content": {
						"korean": "하찮은 자들이여. 너희는 이 숲의 먹이가 될 뿐.",
						"english": "You insignificant beings. You are nothing but food for this forest.",
						"japanese": "取るに足らぬ者たちよ。お前たちはこの森の餌食となるだけだ。",
						"chinese": "渺小的存在们。你们不过是这片森林的食粮。",
						"french": "Créatures insignifiantes. Vous ne serez que la proie de cette forêt.",
						"spanish": "Seres insignificantes. No sois más que alimento para este bosque.",
						"vietnamese": "Những kẻ tầm thường. Các ngươi chỉ là thức ăn cho khu rừng này mà thôi.",
						"thai": "เจ้าพวกไร้ค่า เจ้าจะเป็นได้แค่เหยื่อของป่าแห่งนี้",
						"hindi": "तुम तुच्छ प्राणी। तुम इस जंगल के लिए बस भोजन हो।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…젠장, 여기서 끝낼 순 없어!",
						"english": "...Damn it, it can't end here!",
						"japanese": "...くそ、ここで終わらせるわけにはいかない！",
						"chinese": "...该死，不能就这样结束！",
						"french": "...Mince, ça ne peut pas finir ici !",
						"spanish": "...¡Maldita sea, no puede terminar aquí!",
						"vietnamese": "...Chết tiệt, không thể kết thúc ở đây được!",
						"thai": "...ให้ตายสิ จะมาจบลงแค่นี้ไม่ได้!",
						"hindi": "...धिक्कार है, यह यहाँ खत्म नहीं हो सकता!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "다시, 다시 싸운다!",
						"english": "Fight again!",
						"japanese": "再び、再び戦う！",
						"chinese": "再来，再战一场！",
						"french": "Nous nous battrons à nouveau !",
						"spanish": "¡Lucharemos de nuevo!",
						"vietnamese": "Lại, lại chiến đấu!",
						"thai": "อีกครั้ง, เราจะสู้ใหม่อีกครั้ง!",
						"hindi": "फिर से, फिर से लड़ेंगे!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "뒤틀린 공간의 끝에서, 거대한 그림자가 일렁였다.",
						"english": "At the end of the twisted space, a massive shadow flickered.",
						"japanese": "歪んだ空間の果てで、巨大な影が揺らめいた。",
						"chinese": "在扭曲空间的尽头，一个巨大的影子晃动着。",
						"french": "Au bout de l'espace tordu, une ombre gigantesque vacillait.",
						"spanish": "Al final del espacio retorcido, una sombra gigantesca se cernía.",
						"vietnamese": "Ở cuối không gian méo mó, một bóng đen khổng lồ chập chờn.",
						"thai": "ณ ปลายสุดของมิติที่บิดเบี้ยว เงาร่างมหึมาปรากฏขึ้น",
						"hindi": "मुड़ी हुई जगह के अंत में, एक विशाल छाया लहराई।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "…환영에 사로잡힌 자들이여, 어서 와라.",
						"english": "...Those ensnared by illusion, welcome.",
						"japanese": "…幻影にとらわれし者たちよ、ようこそ。",
						"chinese": "……被幻象迷惑之人，欢迎你们。",
						"french": "...Vous qui êtes pris au piège de l'illusion, bienvenue.",
						"spanish": "...Aquellos atrapados por la ilusión, bienvenidos.",
						"vietnamese": "Kẻ bị ảo ảnh giam cầm, hãy đến đây.",
						"thai": "...ผู้ที่ติดกับภาพลวงตา จงมา",
						"hindi": "...मायाजाल में फँसे हुए लोगों, तुम्हारा स्वागत है।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "네가… 이 모든 환상의 근원인가?",
						"english": "Are you... the source of all these illusions?",
						"japanese": "お前が…この全ての幻影の根源なのか？",
						"chinese": "你是……所有这些幻象的源头吗？",
						"french": "C'est toi... la source de toutes ces illusions ?",
						"spanish": "¿Eres tú... la fuente de todas estas ilusiones?",
						"vietnamese": "Ngươi... là nguồn gốc của tất cả ảo ảnh này sao?",
						"thai": "เจ้า...คือต้นกำเนิดของภาพลวงตาทั้งหมดนี้รึ?",
						"hindi": "क्या तुम... इन सभी भ्रमों का स्रोत हो?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "환상? 진실은 오직 절망뿐. 너희의 시간은 끝났다.",
						"english": "Illusions? The only truth is despair. Your time is up.",
						"japanese": "幻影だと？真実は絶望のみ。お前たちの時間は終わった。",
						"chinese": "幻象？真相只有绝望。你们的时间已经结束了。",
						"french": "Illusions ? La seule vérité est le désespoir. Votre temps est écoulé.",
						"spanish": "¿Ilusiones? La única verdad es la desesperación. Vuestro tiempo ha terminado.",
						"vietnamese": "Ảo ảnh ư? Sự thật chỉ có tuyệt vọng. Thời gian của các ngươi đã hết rồi.",
						"thai": "ภาพลวงตาหรือ? ความจริงมีเพียงความสิ้นหวังเท่านั้น เวลาของพวกเจ้าหมดแล้ว",
						"hindi": "भ्रम? सच सिर्फ़ निराशा है। तुम्हारा समय समाप्त हो गया।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "웃기지 마!",
						"english": "Don't make me laugh!",
						"japanese": "ふざけるな！",
						"chinese": "别开玩笑了！",
						"french": "Ne me fais pas rire !",
						"spanish": "¡No me hagas reír!",
						"vietnamese": "Đừng có đùa!",
						"thai": "อย่ามาตลก!",
						"hindi": "मज़ाक मत करो!"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"펠리아는 앞장섰다. 그 길은 우리가 알던 숲과 달랐다.",
			"나뭇잎은 춤추고, 그림자는 속삭였다. 환상인가, 진실인가?",
			"숲은 길을 잃은 자들을 비웃는 듯, 계속해서 우리를 뒤흔들었다.",
			"모든 것이 뒤틀려가는 곳. 이곳에선 오직 혼돈만이 존재했다."
		],
		"english": [
			"Phelia led the way. The path was unlike the forest we knew.",
			"Leaves danced, shadows whispered. Illusion or truth?",
			"The forest mocked the lost, continuously shaking us.",
			"A place where everything twisted. Only chaos existed here."
		],
		"japanese": [
			"フェリアが先頭に立った。その道は、私たちが知る森とは違っていた。",
			"木の葉が舞い、影が囁いた。幻想か、真実か？",
			"森は道に迷った者を嘲笑うかのように、私たちを揺さぶり続けた。",
			"全てが歪む場所。ここには混沌だけが存在した。"
		],
		"chinese": [
			"菲利亚走在前面。那条路与我们所知的森林不同。",
			"树叶舞动，影子低语。是幻象，还是真实？",
			"森林嘲笑着迷途者，不断地动摇着我们。",
			"万物扭曲之地。这里只有混乱。"
		],
		"french": [
			"Phelia ouvrait la marche. Ce chemin ne ressemblait pas à la forêt que nous connaissions.",
			"Les feuilles dansaient, les ombres chuchotaient. Illusion ou vérité ?",
			"La forêt se moquait des perdus, nous secouant sans cesse.",
			"Un lieu où tout se tordait. Seul le chaos existait ici."
		],
		"spanish": [
			"Phelia tomó la delantera. El camino era diferente al bosque que conocíamos.",
			"¿Las hojas danzaban, las sombras susurraban. Ilusión o verdad?",
			"El bosque se burlaba de los perdidos, sacudiéndonos sin cesar.",
			"Un lugar donde todo se retorcía. Aquí solo existía el caos."
		],
		"vietnamese": [
			"Phelia dẫn lối. Con đường khác xa khu rừng chúng tôi từng biết.",
			"Lá nhảy múa, bóng đêm thì thầm. Ảo ảnh hay sự thật?",
			"Rừng như trêu ngươi kẻ lạc lối, liên tục lay động chúng tôi.",
			"Nơi mọi thứ méo mó. Chỉ có hỗn loạn tồn tại ở đây."
		],
		"thai": [
			"เฟเลียเดินนำ ทางนั้นไม่เหมือนป่าที่เราเคยรู้จัก",
			"ใบไม้เต้นรำ เงากระซิบกระซาบ ภาพลวงตาหรือความจริง?",
			"ป่าเย้ยหยันผู้หลงทาง เขย่าเราไม่หยุดหย่อน",
			"สถานที่ที่ทุกสิ่งบิดเบี้ยว ที่นี่มีแต่ความโกลาหล"
		],
		"hindi": [
			"फेलिया आगे चली। वह रास्ता उस जंगल से अलग था जिसे हम जानते थे।",
			"पत्तियां नाचतीं, परछाइयां फुसफुसातीं। भ्रम या सच?",
			"जंगल खोए हुए लोगों का मज़ाक उड़ा रहा था, हमें लगातार झकझोर रहा था।",
			"जहां सब कुछ बिगड़ रहा था। यहां केवल अराजकता थी।"
		]
	}
} as const;
