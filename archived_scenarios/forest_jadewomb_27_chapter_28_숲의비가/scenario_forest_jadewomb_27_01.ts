export const scenario_forest_jadewomb_27_01 = {
	"scenario_id": "forest_jadewomb_27_01",
	"order": 1,
	"act": "intro",
	"theme": "forest",
	"actors": {
		"Ela": {
			"name": {
				"korean": "엘라",
				"english": "Ela",
				"japanese": "エラ",
				"chinese": "艾拉",
				"french": "Ela",
				"spanish": "Ela",
				"vietnamese": "Ela",
				"thai": "เอล่า",
				"hindi": "एला"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/55d3e9ee-c589-40ab-dfa4-a658bbddd400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/cfacc842-115e-4175-a7fa-3111a468ed00/public"
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
						"korean": "짙은 안개가 길을 삼켰다. 고요한 숲은 모든 소리를 흡수했다.",
						"english": "Dense fog swallowed the path. The silent forest absorbed all sounds.",
						"japanese": "濃い霧が道を飲み込んだ。静かな森はすべての音を吸い込んだ。",
						"chinese": "浓雾吞噬了道路。寂静的森林吞噬了所有声音。",
						"french": "Un brouillard épais a englouti le chemin. La forêt silencieuse a absorbé tous les sons.",
						"spanish": "La niebla densa se tragó el camino. El bosque silencioso absorbió todos los sonidos.",
						"vietnamese": "Sương mù dày đặc nuốt chửng con đường. Khu rừng yên tĩnh hút hết mọi âm thanh.",
						"thai": "หมอกหนาทึบกลืนกินเส้นทาง. ป่าอันเงียบสงบดูดซับทุกเสียง.",
						"hindi": "घने कोहरे ने रास्ता निगल लिया। शांत जंगल ने सभी आवाज़ें सोख लीं।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이 숲… 너무 조용해.",
						"english": "This forest... it's too quiet.",
						"japanese": "この森… 静かすぎる。",
						"chinese": "这片森林… 太安静了。",
						"french": "Cette forêt… est trop silencieuse.",
						"spanish": "Este bosque… está demasiado silencioso.",
						"vietnamese": "Khu rừng này… quá yên tĩnh.",
						"thai": "ป่านี้… เงียบเกินไป.",
						"hindi": "यह जंगल… बहुत शांत है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "Ela",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"emotion": "sad",
					"speaker": "Ela",
					"type": "speech",
					"content": {
						"korean": "돌아가요. 여긴 위험해.",
						"english": "Go back. It's dangerous here.",
						"japanese": "戻りなさい。ここは危険だ。",
						"chinese": "回去吧。这里很危险。",
						"french": "Retournez. C'est dangereux ici.",
						"spanish": "Regresa. Aquí es peligroso.",
						"vietnamese": "Trở về đi. Chỗ này nguy hiểm.",
						"thai": "กลับไปเถอะ. ที่นี่อันตราย.",
						"hindi": "वापस जाओ। यहाँ ख़तरा है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "당신은… 누구죠?",
						"english": "You are… who?",
						"japanese": "あなたは… 誰？",
						"chinese": "你是… 谁？",
						"french": "Vous êtes… qui ?",
						"spanish": "¿Tú eres… quién?",
						"vietnamese": "Anh là… ai?",
						"thai": "คุณคือ… ใคร?",
						"hindi": "तुम… कौन हो?"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "오래된 생존자. 이 숲의 저주를 아는 자.",
						"english": "An old survivor. One who knows this forest's curse.",
						"japanese": "古い生存者。この森の呪いを知る者。",
						"chinese": "一位老幸存者。知晓这片森林诅咒之人。",
						"french": "Un vieux survivant. Celui qui connaît la malédiction de cette forêt.",
						"spanish": "Un viejo superviviente. Quien conoce la maldición de este bosque.",
						"vietnamese": "Một người sống sót lâu năm. Người biết lời nguyền của khu rừng này.",
						"thai": "ผู้รอดชีวิตเก่าแก่. ผู้ที่รู้คำสาปของป่านี้.",
						"hindi": "एक पुराना जीवित व्यक्ति। जो इस जंगल के श्राप को जानता है।"
					},
					"type": "speech",
					"speaker": "Ela"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "Ela",
					"content": {
						"korean": "자정이 되면… 모든 게 시작될 거야.",
						"english": "At midnight… everything will begin.",
						"japanese": "真夜中になれば… 全てが始まる。",
						"chinese": "午夜时分… 一切都将开始。",
						"french": "À minuit… tout commencera.",
						"spanish": "A medianoche… todo comenzará.",
						"vietnamese": "Khi nửa đêm đến… mọi thứ sẽ bắt đầu.",
						"thai": "เมื่อเที่ยงคืนมาถึง… ทุกสิ่งจะเริ่มต้น.",
						"hindi": "आधी रात को… सब कुछ शुरू हो जाएगा।"
					}
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
					"action": "enter",
					"speaker": "Ela",
					"duration_ms": 550,
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "Ela",
					"content": {
						"korean": "매일 밤 자정, 숲의 생명력이 봉분으로 흡수돼.",
						"english": "Every midnight, the forest's life force is absorbed into the tumulus.",
						"japanese": "毎晩真夜中になると、森の生命力が墳墓に吸い込まれる。",
						"chinese": "每天午夜，森林的生命力都被吸入坟墓。",
						"french": "Chaque minuit, la force vitale de la forêt est absorbée par le tumulus.",
						"spanish": "Cada medianoche, la fuerza vital del bosque es absorbida por el túmulo.",
						"vietnamese": "Mỗi nửa đêm, sinh lực của rừng bị hút vào gò mộ.",
						"thai": "ทุกเที่ยงคืน พลังชีวิตของป่าจะถูกดูดเข้าไปในเนินดินฝังศพ",
						"hindi": "हर आधी रात को, जंगल की जीवन शक्ति टीले में समा जाती है।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "봉분?",
						"english": "Tumulus?",
						"japanese": "墳墓？",
						"chinese": "坟墓？",
						"french": "Tumulus ?",
						"spanish": "¿Túmulo?",
						"vietnamese": "Gò mộ?",
						"thai": "เนินดินฝังศพ?",
						"hindi": "टीला?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "숲의 무덤. 모든 걸 집어삼키는 곳.",
						"english": "The forest's tomb. Where everything is devoured.",
						"japanese": "森の墓。すべてを飲み込む場所。",
						"chinese": "森林的坟墓。吞噬一切的地方。",
						"french": "La tombe de la forêt. L'endroit où tout est dévoré.",
						"spanish": "La tumba del bosque. Donde todo es devorado.",
						"vietnamese": "Nấm mồ của rừng. Nơi mọi thứ bị nuốt chửng.",
						"thai": "หลุมฝังศพของป่า ที่ที่ทุกสิ่งถูกกลืนกิน",
						"hindi": "जंगल की कब्र। जहाँ सब कुछ निगल लिया जाता है।"
					},
					"speaker": "Ela",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "Ela",
					"content": {
						"korean": "시간이 없어. 곧 숲이 완전히 멈출 거야.",
						"english": "No time. The forest will soon stop completely.",
						"japanese": "時間がない。森はもうすぐ完全に止まる。",
						"chinese": "没时间了。森林很快就会完全停止。",
						"french": "Plus le temps. La forêt va bientôt s'arrêter complètement.",
						"spanish": "No hay tiempo. El bosque pronto se detendrá por completo.",
						"vietnamese": "Không còn thời gian. Rừng sẽ sớm ngừng hẳn.",
						"thai": "ไม่มีเวลาแล้ว ป่าจะหยุดทำงานโดยสมบูรณ์ในไม่ช้า",
						"hindi": "समय नहीं है। जंगल जल्द ही पूरी तरह से रुक जाएगा।"
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "Ela",
					"duration_ms": 450
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "봉분은 살아있는 모든 걸 흡수해.",
						"english": "The tumulus absorbs all living things.",
						"japanese": "墳墓はすべての生き物を吸収する。",
						"chinese": "坟墓吸收所有活物。",
						"french": "Le tumulus absorbe tout ce qui vit.",
						"spanish": "El túmulo absorbe todo lo viviente.",
						"vietnamese": "Gò mộ hút mọi sinh vật sống.",
						"thai": "เนินดินฝังศพดูดซับสิ่งมีชีวิตทั้งหมด",
						"hindi": "टीला सभी जीवित चीजों को सोख लेता है।"
					},
					"speaker": "Ela",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그걸… 막아야 해.",
						"english": "We… must stop it.",
						"japanese": "それを…止めなければならない。",
						"chinese": "我们…必须阻止它。",
						"french": "Nous… devons l'arrêter.",
						"spanish": "Debemos… detenerlo.",
						"vietnamese": "Chúng ta… phải ngăn chặn nó.",
						"thai": "เรา… ต้องหยุดมัน",
						"hindi": "हमें... इसे रोकना होगा।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "Ela",
					"type": "speech",
					"content": {
						"korean": "아직은 막을 수 있어. 하지만… 시간이 얼마 없어.",
						"english": "We can still stop it. But… there's not much time left.",
						"japanese": "まだ止められる。でも…時間はあまり残されていない。",
						"chinese": "我们 still 可以阻止它。但是…时间不多了。",
						"french": "Nous pouvons encore l'arrêter. Mais… il ne reste plus beaucoup de temps.",
						"spanish": "Todavía podemos detenerlo. Pero… no queda mucho tiempo.",
						"vietnamese": "Chúng ta vẫn có thể ngăn chặn nó. Nhưng… không còn nhiều thời gian.",
						"thai": "เรายังสามารถหยุดมันได้ แต่… เวลาเหลือไม่มากแล้ว",
						"hindi": "हम इसे अभी भी रोक सकते हैं। लेकिन... ज्यादा समय नहीं बचा है।"
					}
				},
				{
					"speaker": "Ela",
					"type": "speech",
					"content": {
						"korean": "매일 밤, 이 숲의 시계는 멈춰가고 있어.",
						"english": "Every night, the clock of this forest stops.",
						"japanese": "毎晩、この森の時計は止まっていく。",
						"chinese": "每天晚上，这片森林的时钟都在停止。",
						"french": "Chaque nuit, l'horloge de cette forêt s'arrête.",
						"spanish": "Cada noche, el reloj de este bosque se detiene.",
						"vietnamese": "Mỗi đêm, đồng hồ của khu rừng này đều ngừng chạy.",
						"thai": "ทุกคืน นาฬิกาของป่านี้จะหยุดลง",
						"hindi": "हर रात, इस जंगल की घड़ी रुक जाती है।"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "Ela",
					"duration_ms": 400,
					"type": "direction",
					"spot": [
						1,
						4
					],
					"action": "enter"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "Ela",
					"content": {
						"korean": "더 깊이 들어가면 되돌릴 수 없어. 모두… 흡수될 거야.",
						"english": "Go deeper and you can't turn back. Everything… will be absorbed.",
						"japanese": "さらに深く入れば、引き返せない。すべて…吸収されるだろう。",
						"chinese": "再深入就无法回头了。一切…都将被吸收。",
						"french": "Allez plus profondément et vous ne pourrez plus faire marche arrière. Tout… sera absorbé.",
						"spanish": "Adéntrate más y no podrás regresar. Todo… será absorbido.",
						"vietnamese": "Đi sâu hơn và bạn không thể quay lại. Mọi thứ… sẽ bị hút vào.",
						"thai": "ลงไปลึกกว่านี้แล้วจะย้อนกลับไม่ได้ ทุกสิ่ง… จะถูกดูดซับ",
						"hindi": "गहरे जाओ और तुम वापस नहीं आ सकते। सब कुछ... समा जाएगा।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이미 너무 늦었어. 멈출 순 없어.",
						"english": "It's already too late. We can't stop it.",
						"japanese": "もう手遅れだ。止められない。",
						"chinese": "已经太晚了。我们无法阻止它。",
						"french": "C'est déjà trop tard. On ne peut pas l'arrêter.",
						"spanish": "Ya es demasiado tarde. No podemos detenerlo.",
						"vietnamese": "Đã quá muộn rồi. Chúng ta không thể ngăn chặn nó.",
						"thai": "มันสายเกินไปแล้ว เราหยุดมันไม่ได้",
						"hindi": "बहुत देर हो चुकी है। हम इसे रोक नहीं सकते।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이 숲이 완전히 죽기 전에… 막아야 해.",
						"english": "We must stop this… before this forest completely dies.",
						"japanese": "この森が完全に死ぬ前に…止めなければ。",
						"chinese": "在这片森林彻底死去之前……我们必须阻止。",
						"french": "Nous devons l'arrêter… avant que cette forêt ne meure complètement.",
						"spanish": "Debemos detenerlo… antes de que este bosque muera por completo.",
						"vietnamese": "Phải ngăn chặn chuyện này… trước khi khu rừng này chết hoàn toàn.",
						"thai": "เราต้องหยุดมัน… ก่อนที่ป่านี้จะตายสนิท",
						"hindi": "इस जंगल के पूरी तरह मरने से पहले… हमें इसे रोकना होगा।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "Ela",
					"content": {
						"korean": "…후회할 거야.",
						"english": "…You'll regret this.",
						"japanese": "…後悔するぞ。",
						"chinese": "……你会后悔的。",
						"french": "…Tu le regretteras.",
						"spanish": "…Te arrepentirás.",
						"vietnamese": "…Ngươi sẽ hối hận thôi.",
						"thai": "…เจ้าจะต้องเสียใจ",
						"hindi": "…तुम्हें अफ़सोस होगा।"
					}
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "보잘것없는 것들. 숲의 시간은 너희를 기다리지 않는다.",
						"english": "Insignificant beings. The forest's time waits for no one.",
						"japanese": "取るに足らぬ者たち。森の時間は貴様らを待たない。",
						"chinese": "微不足道之物。森林的时间不会等待你们。",
						"french": "Créatures insignifiantes. Le temps de la forêt ne vous attend pas.",
						"spanish": "Criaturas insignificantes. El tiempo del bosque no os espera.",
						"vietnamese": "Những kẻ tầm thường. Thời gian của rừng xanh sẽ không chờ đợi các ngươi.",
						"thai": "พวกไร้ค่า. เวลาของป่าไม่รอเจ้าหรอก.",
						"hindi": "तुच्छ प्राणी। वन का समय तुम्हारी प्रतीक्षा नहीं करेगा。"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not over yet!",
						"japanese": "まだ…終わってない！",
						"chinese": "还没…结束！",
						"french": "Pas encore… ce n'est pas fini !",
						"spanish": "¡Todavía… no ha terminado!",
						"vietnamese": "Chưa… kết thúc đâu!",
						"thai": "ยัง… ไม่จบ!",
						"hindi": "अभी… खत्म नहीं हुआ है!"
					}
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…어리석은 시도였지만… 잠시… 멈출 뿐… 결국엔….",
						"english": "…A foolish attempt… but only a temporary halt… eventually…",
						"japanese": "…愚かな試みだったが…一時的に…止まるだけ…結局は…。",
						"chinese": "……真是愚蠢的尝试……只是暂时……停止而已……最终……",
						"french": "…Une tentative insensée… mais seulement une pause temporaire… finalement…",
						"spanish": "…Un intento tonto… pero solo una pausa temporal… al final…",
						"vietnamese": "…Một nỗ lực ngu ngốc… nhưng chỉ là tạm dừng… rồi cuối cùng…",
						"thai": "…เป็นการลองที่โง่เขลา… แต่เป็นเพียงการหยุดชั่วคราว… ในที่สุด…",
						"hindi": "…एक मूर्खतापूर्ण प्रयास… लेकिन सिर्फ़ एक अस्थायी विराम… अंततः…"
					}
				},
				{
					"content": {
						"korean": "…! (무언가 깨달은 듯 침묵한다)",
						"english": "…! (Falls silent, as if realizing something)",
						"japanese": "…！ (何かを悟ったように沈黙する)",
						"chinese": "……！（似乎领悟了什么，陷入沉默）",
						"french": "…! (Se tait, comme s'il avait réalisé quelque chose)",
						"spanish": "…! (Cae en silencio, como si hubiera comprendido algo)",
						"vietnamese": "…! (Im lặng, như thể đã nhận ra điều gì đó)",
						"thai": "…! (เงียบไปราวกับเข้าใจอะไรบางอย่าง)",
						"hindi": "…! (कुछ समझ आने पर खामोश हो जाता है)"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "어둠 속에서 들려오는 슬픈 여인의 노랫소리. 숲은 아직 고통받고 있었다.",
						"english": "The sad song of a woman echoed from the darkness. The forest was still suffering.",
						"japanese": "闇の中から聞こえる悲しい女の歌声。森はまだ苦しんでいた。",
						"chinese": "黑暗中传来悲伤的女声歌声。森林仍在遭受痛苦。",
						"french": "Le chant triste d'une femme résonnait dans l'obscurité. La forêt souffrait encore.",
						"spanish": "El triste canto de una mujer resonó desde la oscuridad. El bosque aún sufría.",
						"vietnamese": "Tiếng hát buồn của một người phụ nữ vang lên từ bóng tối. Khu rừng vẫn còn đau khổ.",
						"thai": "เสียงเพลงเศร้าของหญิงสาวดังมาจากความมืด ป่ายังคงทุกข์ทรมาน",
						"hindi": "अंधेरे से एक उदास महिला का गीत गूँज उठा। जंगल अभी भी कष्ट झेल रहा था।"
					},
					"emotion": "sad"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "거대한 봉분의 그림자가 탐험대를 집어삼켰다.",
						"english": "The shadow of the massive mound swallowed the expedition team.",
						"japanese": "巨大な墳丘の影が探検隊を飲み込んだ。",
						"chinese": "巨大的坟冢阴影吞噬了探险队。",
						"french": "L'ombre de l'immense tumulus a englouti l'équipe d'exploration.",
						"spanish": "La sombra del enorme túmulo se tragó al equipo de expedición.",
						"vietnamese": "Bóng tối của gò đất khổng lồ đã nuốt chửng đoàn thám hiểm.",
						"thai": "เงาของเนินดินขนาดมหึมาได้กลืนกินทีมสำรวจไปแล้ว",
						"hindi": "विशाल टीले की छाया ने अभियान दल को निगल लिया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "어리석은 것들. 이 숲의 운명은 정해졌다.",
						"english": "Fools. This forest's fate is sealed.",
						"japanese": "愚かな者たちめ。この森の運命は定められたのだ。",
						"chinese": "愚蠢的东西。这片森林的命运早已注定。",
						"french": "Imbéciles. Le destin de cette forêt est scellé.",
						"spanish": "Necios. El destino de este bosque está sellado.",
						"vietnamese": "Lũ ngu xuẩn. Số phận của khu rừng này đã được định đoạt.",
						"thai": "พวกโง่เขลา ชะตากรรมของป่านี้ถูกกำหนดไว้แล้ว",
						"hindi": "मूर्ख। इस जंगल का भाग्य तय हो चुका है।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "당신이 숲을 죽이고 있어!",
						"english": "You're killing the forest!",
						"japanese": "あなたが森を殺している！",
						"chinese": "你正在杀死这片森林！",
						"french": "Vous tuez la forêt !",
						"spanish": "¡Estás matando el bosque!",
						"vietnamese": "Ngươi đang giết khu rừng!",
						"thai": "คุณกำลังฆ่าป่า!",
						"hindi": "तुम जंगल को मार रहे हो!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "나는 섭리일 뿐. 거스를 수 없다.",
						"english": "I am merely providence. You cannot defy it.",
						"japanese": "私は摂理に過ぎない。逆らうことはできない。",
						"chinese": "我只是天意。不可违抗。",
						"french": "Je ne suis que la providence. On ne peut pas la défier.",
						"spanish": "Solo soy la providencia. No puedes desafiarla.",
						"vietnamese": "Ta chỉ là thiên ý. Không thể chống lại.",
						"thai": "ข้าเป็นเพียงโชคชะตา ไม่อาจฝืนได้",
						"hindi": "मैं सिर्फ़ नियति हूँ। इसे झुकाया नहीं जा सकता।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "우린… 멈추지 않아.",
						"english": "We… won't stop.",
						"japanese": "私たちは…止まらない。",
						"chinese": "我们……不会停下。",
						"french": "Nous… ne nous arrêterons pas.",
						"spanish": "Nosotros… no nos detendremos.",
						"vietnamese": "Chúng tôi… sẽ không dừng lại.",
						"thai": "เรา… จะไม่หยุด",
						"hindi": "हम… रुकेंगे नहीं।"
					},
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"짙은 안개, 잊혀진 고대 숲.",
			"매일 밤 자정, 기이한 소리와 함께 숲의 생명력이 흡수된다.",
			"고독한 생존자는 경고했지만, 이미 멈출 수 없는 시한이 시작되었다.",
			"절망적인 느와르의 서막이 열리고 있었다."
		],
		"english": [
			"Dense fog, forgotten ancient forest.",
			"Every midnight, a strange sound absorbs the forest's life force.",
			"The lonely survivor warned, but an unstoppable deadline had already begun.",
			"The desperate prelude to a noir was unfolding."
		],
		"japanese": [
			"濃い霧、忘れ去られた古代の森。",
			"毎夜、真夜中に奇妙な音と共に森の生命力が吸い取られる。",
			"孤独な生存者は警告したが、すでに止められない期限が始まっていた。",
			"絶望的なノワールの序幕が開かれつつあった。"
		],
		"chinese": [
			"浓雾，被遗忘的古老森林。",
			"每晚午夜，伴随着奇异的声音，森林的生命力被吸走。",
			"孤独的幸存者发出了警告，但无法阻止的期限已经开始。",
			"一场绝望的黑色序幕正在拉开。"
		],
		"french": [
			"Brouillard épais, forêt ancienne oubliée.",
			"Chaque nuit à minuit, un son étrange absorbe la force vitale de la forêt.",
			"Le survivant solitaire a prévenu, mais un compte à rebours inéluctable avait déjà commencé.",
			"Le prélude désespéré d'un film noir se déroulait."
		],
		"spanish": [
			"Niebla densa, bosque antiguo olvidado.",
			"Cada medianoche, un sonido extraño absorbe la fuerza vital del bosque.",
			"El superviviente solitario advirtió, pero un plazo imparable ya había comenzado.",
			"El desesperado preludio de un noir se estaba desarrollando."
		],
		"vietnamese": [
			"Sương mù dày đặc, khu rừng cổ đại bị lãng quên.",
			"Mỗi đêm nửa đêm, một âm thanh kỳ lạ hút cạn sinh lực của khu rừng.",
			"Người sống sót cô độc đã cảnh báo, nhưng thời hạn không thể dừng lại đã bắt đầu.",
			"Màn dạo đầu tuyệt vọng của một noir đang mở ra."
		],
		"thai": [
			"หมอกหนาทึบ, ป่าโบราณที่ถูกลืม.",
			"ทุกเที่ยงคืน, เสียงประหลาดจะดูดกลืนพลังชีวิตของป่า.",
			"ผู้รอดชีวิตโดดเดี่ยวได้เตือนแล้ว, แต่กำหนดเวลาที่หยุดไม่ได้ก็เริ่มขึ้นแล้ว.",
			"บทนำอันสิ้นหวังของนวนิยายสืบสวนกำลังเผยตัว."
		],
		"hindi": [
			"घना कोहरा, भूला हुआ प्राचीन वन।",
			"हर आधी रात को, एक अजीब आवाज़ जंगल की जीवन शक्ति को सोख लेती है।",
			"अकेले बचे व्यक्ति ने चेतावनी दी, लेकिन एक अजेय समय सीमा पहले ही शुरू हो चुकी थी।",
			"एक निराशाजनक नोयर की प्रस्तावना खुल रही थी।"
		]
	}
} as const;
