export const scenario_forest_echoes_of_desire_02 = {
	scenario_id: 'forest_echoes_of_desire_02',
	order: 2,
	act: 'rising',
	theme: 'forest',
	actors: {
		briar: {
			id: 'mon_21f92820-190e-4d08-a75c-5d2c0b6d0a6b',
			name: {
				korean: '브라이어',
				english: 'Briar',
				japanese: 'ブライア',
				chinese: '布莱尔',
				french: 'Briar',
				spanish: 'Briar',
				vietnamese: 'Briar',
				thai: 'ไบรอา',
				hindi: 'ब्रायर'
			},
			description: '',
			face_image_url:
				'https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/41fb431e-57e0-45e0-dde6-1a1f02c01200/public',
			battle_sprite_url:
				'https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/dd89dff7-88ed-4444-28d8-5aaa85bd4e00/public'
		}
	},
	boss: {
		pool_id: 'random_boss'
	},
	prologue: {
		korean: [
			'숲은 선택의 거울이 되었다.',
			'돌아온 자들의 병, 남은 자들의 불안.',
			'그 이면에 질투의 그림자가 드리운다.',
			'환영 속에서 진실은 더욱 깊어진다.'
		],
		english: [
			'The forest became a mirror of choices.',
			'The sickness of the returned, the unease of those who remained.',
			'Behind it, the shadow of jealousy looms.',
			'Within illusions, truth deepens further.'
		],
		japanese: [
			'森は選択の鏡となった。',
			'戻りし者の病、残りし者の不安。',
			'その裏に、嫉妬の影が潜む。',
			'幻影の中で、真実はさらに深まる。'
		],
		chinese: [
			'森林成为了选择的镜子。',
			'归来者的疾病，留下者的不安。',
			'其背后，嫉妒的阴影笼罩。',
			'在幻象中，真相愈发深入。'
		],
		french: [
			'La forêt est devenue un miroir de choix.',
			"La maladie des revenants, l'inquiétude de ceux qui sont restés.",
			"Derrière cela, l'ombre de la jalousie plane.",
			"Dans les illusions, la vérité s'approfondit."
		],
		spanish: [
			'El bosque se convirtió en un espejo de elecciones.',
			'La enfermedad de los que regresaron, la inquietud de los que se quedaron.',
			'Detrás de ello, la sombra de la envidia se cierne.',
			'Dentro de las ilusiones, la verdad se profundiza.'
		],
		vietnamese: [
			'Rừng đã trở thành tấm gương của những lựa chọn.',
			'Bệnh tật của những người trở về, sự bất an của những người ở lại.',
			'Đằng sau đó, bóng tối của sự đố kỵ bao trùm.',
			'Trong ảo ảnh, sự thật càng thêm sâu sắc.'
		],
		thai: [
			'ป่าได้กลายเป็นกระจกสะท้อนทางเลือก',
			'โรคภัยของผู้กลับมา ความกังวลของผู้ที่เหลืออยู่',
			'เบื้องหลังนั้น เงาแห่งความริษยาปกคลุม',
			'ภายในภาพลวงตา ความจริงยิ่งลึกซึ้งขึ้น'
		],
		hindi: [
			'वन विकल्पों का दर्पण बन गया।',
			'लौट आए लोगों का रोग, बचे हुए लोगों की बेचैनी।',
			'इसके पीछे, ईर्ष्या की छाया मंडराती है।',
			'भ्रमों में, सत्य और गहरा होता जाता है।'
		]
	},
	rooms: [
		{
			id: 1,
			dialogue: [
				{
					speaker: 'narrator',
					emotion: 'base',
					content: {
						korean: '숲은 조용했지만, 불안이 감돌았다.',
						english: 'The forest was quiet, yet unease lingered.',
						japanese: '森は静かだったが、不安が漂っていた。',
						chinese: '森林很安静，但不安的气氛弥漫。',
						french: 'La forêt était calme, mais une inquiétude persistait.',
						spanish: 'El bosque estaba tranquilo, pero la inquietud persistía.',
						vietnamese: 'Rừng yên tĩnh, nhưng sự bất an vẫn còn đó.',
						thai: 'ป่าเงียบสงบ แต่ความกังวลยังคงอยู่',
						hindi: 'जंगल शांत था, फिर भी बेचैनी छाई हुई थी।'
					},
					type: 'speech'
				},
				{
					content: {
						korean: '숲의 병이… 더 심해지는 것 같아.',
						english: "The forest's sickness... seems to be worsening.",
						japanese: '森の病が…さらに悪化しているようだ。',
						chinese: '森林的疾病…似乎更严重了。',
						french: "La maladie de la forêt... semble s'aggraver.",
						spanish: 'La enfermedad del bosque... parece empeorar.',
						vietnamese: 'Bệnh của rừng... dường như đang trở nên tồi tệ hơn.',
						thai: 'อาการป่วยของป่า... ดูเหมือนจะแย่ลง',
						hindi: 'जंगल का रोग… और बिगड़ता जा रहा है।'
					},
					type: 'speech',
					emotion: 'base',
					speaker: 'character_any'
				},
				{
					duration_ms: 500,
					type: 'direction',
					spot: [3, 2],
					speaker: 'briar',
					action: 'enter'
				},
				{
					content: {
						korean: '돌아온 자들의 병이 숲을 해치고 있어.',
						english: 'The sickness of the returned is harming the forest.',
						japanese: '戻りし者たちの病が森を蝕んでいる。',
						chinese: '归来者的疾病正在伤害森林。',
						french: 'La maladie des revenants nuit à la forêt.',
						spanish: 'La enfermedad de los que regresaron está dañando el bosque.',
						vietnamese: 'Bệnh của những người trở về đang làm hại rừng.',
						thai: 'โรคภัยของผู้กลับมาทำร้ายป่า',
						hindi: 'लौट आए लोगों का रोग जंगल को नुकसान पहुँचा रहा है।'
					},
					type: 'speech',
					emotion: 'sad',
					speaker: 'briar'
				},
				{
					speaker: 'character_any',
					type: 'speech',
					content: {
						korean: '우리가 원한 건 평화였는데…',
						english: 'All we wanted was peace...',
						japanese: '私たちが望んだのは平和だったのに…',
						chinese: '我们想要的只是和平…',
						french: "Tout ce que nous voulions, c'était la paix...",
						spanish: 'Todo lo que queríamos era paz...',
						vietnamese: 'Tất cả những gì chúng ta muốn là hòa bình...',
						thai: 'สิ่งที่เราต้องการคือสันติภาพ...',
						hindi: 'हम बस शांति चाहते थे…'
					},
					emotion: 'base'
				},
				{
					speaker: 'briar',
					emotion: 'angry',
					type: 'speech',
					content: {
						korean: '그 욕심이… 숲에 독이 되는 거야.',
						english: 'That greed... is poisoning the forest.',
						japanese: 'その欲が…森に毒となるのだ。',
						chinese: '那个贪婪…正在毒害森林。',
						french: 'Cette avidité... empoisonne la forêt.',
						spanish: 'Esa codicia... está envenenando el bosque.',
						vietnamese: 'Sự tham lam đó... đang đầu độc khu rừng.',
						thai: 'ความโลภนั้น... กำลังเป็นพิษต่อป่า',
						hindi: 'वह लालच… जंगल को ज़हर दे रहा है।'
					}
				}
			]
		},
		{
			id: 3,
			dialogue: [
				{
					action: 'enter',
					speaker: 'briar',
					spot: [2, 2],
					type: 'direction',
					duration_ms: 450
				},
				{
					speaker: 'briar',
					emotion: 'base',
					type: 'speech',
					content: {
						korean: '들어봐. 숲 깊은 곳에서 이상한 소리가 들려.',
						english: 'Listen. I hear strange sounds from deep within the forest.',
						japanese: '聞いて。森の奥深くから奇妙な音が聞こえる。',
						chinese: '听。森林深处传来奇怪的声音。',
						french: "Écoutez. J'entends des sons étranges venant du plus profond de la forêt.",
						spanish: 'Escucha. Oigo sonidos extraños desde lo profundo del bosque.',
						vietnamese: 'Nghe này. Tôi nghe thấy những âm thanh kỳ lạ từ sâu trong rừng.',
						thai: 'ฟังนะ ฉันได้ยินเสียงแปลกๆ จากส่วนลึกของป่า',
						hindi: 'सुनो। मुझे जंगल की गहराई से अजीब आवाजें सुनाई दे रही हैं।'
					}
				},
				{
					speaker: 'character_any',
					emotion: 'base',
					content: {
						korean: '수많은 목소리가 섞인 듯 웅얼거리는…',
						english: 'A muffled murmur, as if countless voices intertwine...',
						japanese: '多くの声が混じり合ったような、もやもやとした囁きが…',
						chinese: '仿佛无数声音混杂在一起，低语着…',
						french: "Un murmure étouffé, comme si d'innombrables voix s'entremêlaient…",
						spanish: 'Un murmullo ahogado, como si incontables voces se mezclaran…',
						vietnamese: 'Một tiếng thì thầm nghẹt thở, như thể vô số giọng nói đan xen vào nhau…',
						thai: 'เสียงพึมพำอู้อี้ ราวกับเสียงนับไม่ถ้วนปะปนกัน…',
						hindi: 'असंख्य आवाज़ें आपस में घुलमिलकर बुदबुदा रही हैं...'
					},
					type: 'speech'
				},
				{
					type: 'speech',
					content: {
						korean: '숲이 병든 자들의 마음을… 비틀고 있는 것 같아.',
						english: 'The forest seems to twist the hearts of the afflicted...',
						japanese: '森が病んだ者たちの心を… 歪めているようだ。',
						chinese: '森林似乎正在扭曲病患者的心…',
						french: 'La forêt semble tordre les cœurs des affligés…',
						spanish: 'El bosque parece retorcer los los corazones de los afligidos…',
						vietnamese: 'Rừng dường như đang vặn vẹo trái tim của những kẻ bệnh tật…',
						thai: 'ป่าดูเหมือนจะบิดเบือนหัวใจของผู้ป่วย…',
						hindi: 'ऐसा लगता है कि जंगल बीमारों के दिलों को मरोड़ रहा है...'
					},
					emotion: 'sad',
					speaker: 'briar'
				},
				{
					speaker: 'character_any',
					emotion: 'base',
					type: 'speech',
					content: {
						korean: '마음이라니…?',
						english: 'Hearts...?',
						japanese: '心、だと…？',
						chinese: '心…？',
						french: 'Des cœurs… ?',
						spanish: '¿Corazones…?',
						vietnamese: 'Trái tim ư…?',
						thai: 'หัวใจ…รึ?',
						hindi: 'दिल...?'
					}
				},
				{
					type: 'speech',
					content: {
						korean: '숲에 남은 자들을 향한… 질투가 느껴져.',
						english: 'I sense jealousy towards those who remain in the forest...',
						japanese: '森に残された者たちへの… 嫉妬が感じられる。',
						chinese: '我感受到了对留在森林里的人的嫉妒…',
						french: 'Je ressens de la jalousie envers ceux qui restent dans la forêt…',
						spanish: 'Percibo celos hacia aquellos que permanecen en el bosque…',
						vietnamese: 'Tôi cảm thấy sự ghen tỵ hướng về những người còn lại trong rừng…',
						thai: 'ฉันรู้สึกถึงความริษยาต่อผู้ที่ยังคงอยู่ในป่า…',
						hindi: 'मुझे जंगल में बचे हुए लोगों के प्रति ईर्ष्या महसूस हो रही है...'
					},
					emotion: 'angry',
					speaker: 'briar'
				}
			]
		},
		{
			id: 5,
			dialogue: [
				{
					spot: [4, 2],
					action: 'enter',
					speaker: 'briar',
					type: 'direction',
					duration_ms: 550
				},
				{
					speaker: 'narrator',
					emotion: 'base',
					content: {
						korean: '병든 자들 주변에, 환영 꽃이 스산하게 피었다 사라졌다.',
						english: 'Around the afflicted, phantom flowers eerily bloomed and vanished.',
						japanese: '病んだ者たちの周りに、幻影の花が不気味に咲いては消えた。',
						chinese: '病患者周围，幻影之花诡异地绽放又消逝。',
						french:
							"Autour des affligés, des fleurs fantômes s'épanouissaient et disparaissaient étrangement.",
						spanish:
							'Alrededor de los afligidos, flores fantasma florecían y desaparecían misteriosamente.',
						vietnamese: 'Xung quanh những kẻ bệnh tật, hoa ảo ảnh u ám nở rồi biến mất.',
						thai: 'รอบๆ ผู้ป่วย ดอกไม้มายาผลิบานแล้วเลือนหายไปอย่างน่าขนลุก',
						hindi: 'बीमारों के इर्द-गिर्द, मायावी फूल अजीब तरह से खिलते और गायब होते रहे।'
					},
					type: 'speech'
				},
				{
					speaker: 'character_any',
					emotion: 'sad',
					content: {
						korean: '저 꽃… 아름답지만, 섬뜩해.',
						english: 'Those flowers... beautiful, yet chilling.',
						japanese: 'あの花… 美しいけれど、不気味だ。',
						chinese: '那些花…美丽，却又令人毛骨悚然。',
						french: 'Ces fleurs… belles, mais effrayantes.',
						spanish: 'Esas flores… hermosas, pero espeluznantes.',
						vietnamese: 'Những bông hoa đó… đẹp, nhưng ghê rợn.',
						thai: 'ดอกไม้พวกนั้น… สวยงาม แต่ก็น่ากลัว',
						hindi: 'वो फूल... सुंदर हैं, फिर भी भयावह।'
					},
					type: 'speech'
				},
				{
					content: {
						korean: '환영이… 질투를 키우고 있어. 숲은 그걸 먹고 자라.',
						english: 'Illusions… are nurturing jealousy. The forest feeds on it and grows.',
						japanese: '幻影が… 嫉妬を育んでいる。森はそれを糧に育つ。',
						chinese: '幻影…正在滋养嫉妒。森林以此为食，不断成长。',
						french: "Les illusions… nourrissent la jalousie. La forêt s'en nourrit et grandit.",
						spanish:
							'Las ilusiones… están alimentando la envidia. El bosque se nutre de ello y crece.',
						vietnamese: 'Ảo ảnh… đang nuôi dưỡng sự ghen tỵ. Rừng lấy đó làm thức ăn mà lớn lên.',
						thai: 'ภาพลวงตา… กำลังบ่มเพาะความริษยา ป่ากินมันเป็นอาหารและเติบโต',
						hindi: 'भ्रम… ईर्ष्या को पोषित कर रहे हैं। जंगल इसे खाकर बढ़ता है।'
					},
					type: 'speech',
					emotion: 'angry',
					speaker: 'briar'
				},
				{
					speaker: 'character_any',
					emotion: 'sad',
					content: {
						korean: '결국… 내면의 문제였나.',
						english: 'So it was… an inner conflict after all.',
						japanese: '結局… 内面の争いだったのか。',
						chinese: '归根结底… 是内心的问题吗。',
						french: "Finalement… ce n'était qu'un problème intérieur.",
						spanish: 'Al final… ¿era un problema interno?',
						vietnamese: 'Rốt cuộc… đó là vấn đề nội tâm sao.',
						thai: 'สุดท้ายแล้ว… มันคือปัญหาส่วนลึกภายในสินะ',
						hindi: 'तो अंततः… यह आंतरिक समस्या थी।'
					},
					type: 'speech'
				},
				{
					content: {
						korean: '오래된 나무의 뿌리들이 속삭이듯 움직여. 숲도 아파하고 있어.',
						english:
							'The roots of ancient trees move as if whispering. The forest is suffering too.',
						japanese: '古い木の根が囁くように蠢く。森も苦しんでいる。',
						chinese: '古老树木的根部像在低语般蠕动着。森林也在痛苦。',
						french:
							'Les racines des arbres anciens bougent comme des murmures. La forêt souffre aussi.',
						spanish:
							'Las raíces de los árboles antiguos se mueven como susurrando. El bosque también está sufriendo.',
						vietnamese: 'Rễ cây cổ thụ khẽ động như đang thì thầm. Rừng cũng đang đau khổ.',
						thai: 'รากของต้นไม้โบราณเคลื่อนไหวราวกับกระซิบ ป่าก็กำลังเจ็บปวดเช่นกัน',
						hindi: 'पुराने पेड़ों की जड़ें फुसफुसाते हुए हिल रही हैं। जंगल भी दर्द में है।'
					},
					type: 'speech',
					emotion: 'sad',
					speaker: 'briar'
				}
			]
		},
		{
			dialogue: [
				{
					type: 'direction',
					duration_ms: 600,
					action: 'enter',
					speaker: 'briar',
					spot: [3, 1]
				},
				{
					speaker: 'briar',
					type: 'speech',
					content: {
						korean: '숲의 심장이… 격렬하게 흔들려.',
						english: 'The heart of the forest… beats violently.',
						japanese: '森の心臓が… 激しく揺れている。',
						chinese: '森林的心脏… 剧烈地颤抖着。',
						french: 'Le cœur de la forêt… bat violemment.',
						spanish: 'El corazón del bosque… late violentamente.',
						vietnamese: 'Trái tim của rừng… đang rung động dữ dội.',
						thai: 'หัวใจของป่า… สั่นสะเทือนอย่างรุนแรง',
						hindi: 'जंगल का हृदय… तीव्रता से हिल रहा है।'
					},
					emotion: 'angry'
				},
				{
					emotion: 'base',
					content: {
						korean: '돌아갈 수 없어. 진실을 마주해야 해.',
						english: 'No turning back. Must face the truth.',
						japanese: '戻れない。真実と向き合わねば。',
						chinese: '无法回头。必须面对真相。',
						french: 'Pas de retour. Il faut affronter la vérité.',
						spanish: 'No hay vuelta atrás. Debemos enfrentar la verdad.',
						vietnamese: 'Không thể quay lại. Phải đối mặt với sự thật.',
						thai: 'กลับไม่ได้แล้ว ต้องเผชิญหน้ากับความจริง',
						hindi: 'वापस नहीं जा सकते। सच का सामना करना होगा।'
					},
					type: 'speech',
					speaker: 'character_any'
				},
				{
					emotion: 'base',
					content: {
						korean: '질투의 환영은… 너희의 그림자다. 마주할 용기가 있나?',
						english: "The phantom of envy... it's your shadow. Do you have the courage to face it?",
						japanese: '嫉妬の幻影は…お前たちの影だ。向き合う勇気はあるか？',
						chinese: '嫉妒的幻影…是你们的影子。有勇气面对吗？',
						french:
							"Le fantôme de l'envie... c'est votre ombre. Avez-vous le courage de l'affronter ?",
						spanish:
							'El fantasma de la envidia... es vuestra sombra. ¿Tenéis el valor de enfrentarlo?',
						vietnamese: 'Ảo ảnh ghen tị… là bóng tối của các ngươi. Có dám đối mặt không?',
						thai: 'ภาพลวงตาแห่งความอิจฉา… คือเงาของพวกเจ้า. มีความกล้าพอที่จะเผชิญหน้าหรือไม่?',
						hindi: 'ईर्ष्या का भ्रम… तुम्हारी परछाई है। क्या सामना करने की हिम्मत है?'
					},
					type: 'speech',
					speaker: 'briar'
				},
				{
					content: {
						korean: '그래. 끝낼 거야. 이 환영을.',
						english: "Yes. I'll end it. This phantom.",
						japanese: 'ああ。終わらせる。この幻影を。',
						chinese: '是的。我会结束它。这个幻影。',
						french: "Oui. J'y mettrai fin. À ce fantôme.",
						spanish: 'Sí. Le pondré fin. A este fantasma.',
						vietnamese: 'Phải. Ta sẽ kết thúc nó. Ảo ảnh này.',
						thai: 'ใช่. ข้าจะยุติมัน. ภาพลวงตานี้.',
						hindi: 'हाँ। मैं इसे खत्म करूँगा। इस भ्रम को।'
					},
					type: 'speech',
					emotion: 'angry',
					speaker: 'character_any'
				}
			],
			id: 9
		},
		{
			win_dialogue: [
				{
					emotion: 'sad',
					type: 'speech',
					content: {
						korean: '크크… 사라지지 않아… 질투는… 또 다른 환영으로… 다시 태어날… 거야…',
						english:
							"Heh heh... I won't disappear... Envy... will be reborn... as another phantom...",
						japanese: 'クク…消えはしない…嫉妬は…別の幻影として…再び生まれる…だろう…',
						chinese: '呵呵…不会消失的…嫉妒会…以另一个幻影…再次重生…',
						french:
							"Huhu... Je ne disparaîtrai pas... L'envie... renaîtra... sous une autre forme...",
						spanish: 'Jeje... No desapareceré... La envidia... renacerá... como otro fantasma...',
						vietnamese:
							'Khà khà… Ta sẽ không biến mất… Lòng ghen tị… sẽ tái sinh… thành một ảo ảnh khác…',
						thai: 'ฮ่าฮ่า… ข้าไม่หายไปหรอก… ความอิจฉา… จะถือกำเนิดใหม่… เป็นภาพลวงตาอื่น…',
						hindi: 'ही ही… मैं गायब नहीं होऊंगा… ईर्ष्या… एक और भ्रम के रूप में… फिर से जन्म लेगी…'
					},
					speaker: 'random_boss'
				},
				{
					speaker: 'character_any',
					type: 'speech',
					content: {
						korean: '젠장… 정말 끝난 게 아니라고…?',
						english: "Damn... It's really not over...?",
						japanese: 'くそっ…本当に終わったわけじゃないのか…？',
						chinese: '该死……真的还没结束吗……？',
						french: "Merde… Ce n'est pas vraiment fini, n'est-ce pas…?",
						spanish: 'Maldita sea... ¿Realmente no ha terminado...?',
						vietnamese: 'Chết tiệt… Nó thực sự vẫn chưa kết thúc sao…?',
						thai: 'ให้ตายสิ… มันยังไม่จบจริงๆ เหรอเนี่ย…?',
						hindi: 'धिक्कार है… क्या यह सचमुच खत्म नहीं हुआ…?'
					},
					emotion: 'sad'
				},
				{
					emotion: 'base',
					content: {
						korean:
							'질투의 환영은 사라졌지만, 숲은 여전히 깊은 상처를 품고 있었다. 거울은 깨졌으나, 그 조각들은 더욱 날카로웠다.',
						english:
							'The illusion of envy vanished, yet the forest still bore deep wounds. The mirror shattered, but its fragments grew sharper.',
						japanese:
							'嫉妬の幻影は消え去ったが、森は深い傷を抱えたままだった。鏡は砕け散ったが、その破片はさらに鋭利になった。',
						chinese: '嫉妒的幻影消失了，但森林仍怀揣着深深的伤痕。镜子碎裂，但其碎片却更加锋利。',
						french:
							"L'illusion de l'envie s'était évanouie, mais la forêt portait toujours de profondes blessures. Le miroir était brisé, mais ses fragments étaient devenus plus tranchants.",
						spanish:
							'La ilusión de la envidia se desvaneció, pero el bosque aún albergaba heridas profundas. El espejo se rompió, pero sus pedazos se volvieron más afilados.',
						vietnamese:
							'Ảo ảnh ghen tỵ đã biến mất, nhưng khu rừng vẫn mang những vết sẹo sâu sắc. Gương đã vỡ, nhưng những mảnh vỡ của nó lại càng sắc bén hơn.',
						thai: 'ภาพลวงตาแห่งความอิจฉาเลือนหายไป แต่ป่ายังคงแบกรับบาดแผลลึก กระจกแตกสลาย ทว่าเศษเสี้ยวของมันกลับคมกริบยิ่งขึ้น',
						hindi:
							'ईर्ष्या का भ्रम मिट गया, फिर भी जंगल में गहरे घाव थे। दर्पण टूट गया था, लेकिन उसके टुकड़े और भी तीखे हो गए थे।'
					},
					type: 'speech',
					speaker: 'narrator'
				}
			],
			dialogue: [
				{
					emotion: 'base',
					type: 'speech',
					content: {
						korean: '너희의 질투가… 나를 만들었다.',
						english: 'Your envy... created me.',
						japanese: 'お前たちの嫉妬が…私を創り出した。',
						chinese: '你们的嫉妒…创造了我。',
						french: "Votre envie... m'a créé.",
						spanish: 'Vuestra envidia... me creó.',
						vietnamese: 'Lòng ghen tị của các ngươi… đã tạo ra ta.',
						thai: 'ความอิจฉาของพวกเจ้า… ได้สร้างข้าขึ้นมา.',
						hindi: 'तुम्हारी ईर्ष्या ने… मुझे बनाया।'
					},
					speaker: 'random_boss'
				},
				{
					emotion: 'base',
					content: {
						korean: '우리의 질투…?',
						english: 'Our envy...?',
						japanese: '私たちの嫉妬…？',
						chinese: '我们的嫉妒…？',
						french: 'Notre envie...?',
						spanish: '¿Nuestra envidia...?',
						vietnamese: 'Lòng ghen tị của chúng ta…?',
						thai: 'ความอิจฉาของเรา…?',
						hindi: 'हमारी ईर्ष्या…?'
					},
					type: 'speech',
					speaker: 'character_any'
				},
				{
					content: {
						korean: '그래. 숲에 남은 자들의 평화를 탐내는 너희의 욕망.',
						english: 'Yes. Your desire to covet the peace of those who remained in the forest.',
						japanese: 'そうだ。森に残った者たちの平和を貪るお前たちの欲望だ。',
						chinese: '是的。你们渴望森林中幸存者的和平。',
						french: 'Oui. Votre désir de convoiter la paix de ceux qui sont restés dans la forêt.',
						spanish: 'Sí. Vuestro deseo de codiciar la paz de los que quedaron en el bosque.',
						vietnamese:
							'Phải. Khát vọng của các ngươi thèm muốn sự bình yên của những kẻ ở lại rừng.',
						thai: 'ใช่. ความปรารถนาของพวกเจ้าที่โลภในความสงบสุขของผู้ที่ยังคงอยู่ในป่า.',
						hindi: 'हाँ। जंगल में बचे हुए लोगों की शांति को ललचाने की तुम्हारी इच्छा।'
					},
					type: 'speech',
					emotion: 'base',
					speaker: 'random_boss'
				},
				{
					content: {
						korean: '헛소리 마! 우린 그저 평화를 원했어!',
						english: 'Nonsense! We just wanted peace!',
						japanese: '馬鹿なことを言うな！私たちはただ平和を望んだだけだ！',
						chinese: '胡说八道！我们只是想要和平！',
						french: 'Absurdités ! Nous voulions juste la paix !',
						spanish: '¡Tonterías! ¡Nosotros solo queríamos paz!',
						vietnamese: 'Đừng nói vớ vẩn! Chúng ta chỉ muốn hòa bình!',
						thai: 'เพ้อเจ้อ! พวกเราแค่อยากได้ความสงบสุข!',
						hindi: 'बकवास बंद करो! हम बस शांति चाहते थे!'
					},
					type: 'speech',
					emotion: 'angry',
					speaker: 'character_any'
				},
				{
					content: {
						korean: '평화? 아니, 탐욕. 그들의 자리를 탐낸 죄.',
						english: 'Peace? No, greed. The sin of coveting their place.',
						japanese: '平和だと？違う、それは強欲だ。彼らの場所を貪った罪だ。',
						chinese: '和平？不，是贪婪。觊觎他们位置的罪过。',
						french: 'La paix ? Non, la cupidité. Le péché de convoiter leur place.',
						spanish: 'Paz? No, avaricia. El pecado de codiciar su lugar.',
						vietnamese: 'Hòa bình ư? Không, là lòng tham. Tội lỗi thèm muốn vị trí của họ.',
						thai: 'สันติภาพ? ไม่, ความโลภต่างหาก. บาปที่โลภในที่ทางของพวกเขา.',
						hindi: 'शांति? नहीं, लालच। उनकी जगह हड़पने का पाप।'
					},
					type: 'speech',
					emotion: 'angry',
					speaker: 'random_boss'
				},
				{
					type: 'speech',
					content: {
						korean: '닥쳐! 네가 뭔데 우리 마음을 멋대로 지껄여!',
						english: 'Shut up! Who are you to speak of our hearts so presumptuously!',
						japanese: '黙れ！お前が何様のつもりで私たちの心を勝手に語るんだ！',
						chinese: '闭嘴！你算什么东西，竟敢妄自揣测我们的心！',
						french: 'Tais-toi ! Qui es-tu pour parler de nos cœurs de la sorte !',
						spanish: '¡Cállate! ¡Quién eres tú para hablar de nuestros corazones a tu antojo!',
						vietnamese: 'Im đi! Ngươi là ai mà dám tự tiện nói về lòng chúng ta!',
						thai: 'หุบปาก! แกเป็นใครถึงได้มาพล่ามถึงจิตใจของเราตามอำเภอใจ!',
						hindi: 'चुप रहो! तुम कौन होते हो हमारे मन की बात बकवास करने वाले!'
					},
					emotion: 'angry',
					speaker: 'character_any'
				}
			],
			lose_dialogue: [
				{
					emotion: 'base',
					type: 'speech',
					content: {
						korean: '봐라… 너희의 질투가… 너희를 삼켰다.',
						english: 'See... Your envy... devoured you.',
						japanese: '見ろ… お前たちの嫉妬が… お前たちを飲み込んだ。',
						chinese: '看着吧……你们的嫉妒……将你们吞噬了。',
						french: 'Regardez… Votre jalousie… vous a dévorés.',
						spanish: 'Mirad… Vuestra envidia… os ha devorado.',
						vietnamese: 'Hãy xem… Lòng ghen tỵ của các ngươi… đã nuốt chửng các ngươi.',
						thai: 'ดูสิ… ความอิจฉาของพวกเจ้า… กลืนกินพวกเจ้าเองแล้ว',
						hindi: 'देखो… तुम्हारी ईर्ष्या ने… तुम्हें निगल लिया।'
					},
					speaker: 'random_boss'
				},
				{
					type: 'speech',
					content: {
						korean: '젠장… 포기할 수 없어…!',
						english: "Damn it... I can't give up...!",
						japanese: 'くそっ…諦められるか…！',
						chinese: '该死……我不能放弃……！',
						french: 'Zut… Je ne peux pas abandonner… !',
						spanish: 'Maldita sea… ¡No puedo rendirme…!',
						vietnamese: 'Chết tiệt… Tôi không thể bỏ cuộc…!',
						thai: 'ให้ตายสิ… ฉันยอมแพ้ไม่ได้…!',
						hindi: 'धिक्कार है… मैं हार नहीं मान सकता…!'
					},
					emotion: 'angry',
					speaker: 'character_any'
				},
				{
					speaker: 'random_boss',
					emotion: 'base',
					content: {
						korean: '다시 와라… 더 깊은 절망을 가져오면… 숲은 더 강해질 테니… 크크…',
						english:
							'Come again... Bring deeper despair... and the forest will grow stronger... Heh heh...',
						japanese:
							'また来るがいい… もっと深い絶望をもたらすなら… 森はさらに強くなるだろう… クク…',
						chinese: '再来吧……带来更深的绝望……森林就会更强大……呵呵……',
						french:
							'Reviens… Apporte un désespoir plus profond… et la forêt deviendra plus forte… Huhu…',
						spanish:
							'Vuelve… Trae una desesperación más profunda… y el bosque se hará más fuerte… Jejeje…',
						vietnamese:
							'Hãy quay lại… Mang đến sự tuyệt vọng sâu sắc hơn… khu rừng sẽ trở nên mạnh mẽ hơn… Khà khà…',
						thai: 'กลับมาอีกครั้งเถอะ… ถ้าเจ้านำความสิ้นหวังที่ลึกซึ้งกว่ามา… ป่าก็จะแข็งแกร่งขึ้น… คิกคิก…',
						hindi: 'फिर आना… और गहरी निराशा लाओगे तो… जंगल और मज़बूत होगा… ही ही…'
					},
					type: 'speech'
				}
			],
			id: 15
		}
	]
} as const;
