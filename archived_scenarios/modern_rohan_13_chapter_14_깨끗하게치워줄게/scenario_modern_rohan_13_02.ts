export const scenario_modern_rohan_13_02 = {
	"scenario_id": "modern_rohan_13_02",
	"order": 2,
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
	"prologue": {
		"korean": [
			"도심 뒷골목, 매캐한 잿빛 공기.",
			"환경미화원 Ash No.7, 그의 '청소'는 단순한 작업이 아니었다.",
			"린은 감지했다. 반복되는 말 속에 숨겨진 광기를.",
			"그것은 인간의 것이 아니었다. 불안한 추격이 시작된다."
		],
		"english": [
			"Downtown back alley, acrid gray air.",
			"Sanitation worker Ash No.7. His 'cleaning' was no mere task.",
			"Lynn sensed it. The madness hidden within the repetitive words.",
			"It was not human. A disturbing chase begins."
		],
		"japanese": [
			"都心の裏路地、刺すような灰色の空気。",
			"環境作業員アッシュ7号、彼の「清掃」は単なる作業ではなかった。",
			"リンは感知した。繰り返される言葉の中に隠された狂気を。",
			"それは人間のものじゃなかった。不穏な追跡が始まる。"
		],
		"chinese": [
			"都市后巷，刺鼻的灰色空气。",
			"环卫工人Ash No.7，他的“清洁”并非简单的任务。",
			"琳察觉到了。重复话语中隐藏的疯狂。",
			"那不是人类。一场令人不安的追逐开始了。"
		],
		"french": [
			"Ruelle du centre-ville, air âcre et grisâtre.",
			"L'éboueur Ash No.7. Son « nettoyage » n'était pas une simple tâche.",
			"Lynn l'a senti. La folie cachée dans ces mots répétés.",
			"Ce n'était pas humain. Une poursuite inquiétante commence."
		],
		"spanish": [
			"Callejón urbano, aire acre y gris.",
			"El barrendero Ash No.7. Su \"limpieza\" no era una tarea cualquiera.",
			"Lynn lo percibió. La locura oculta en esas palabras repetitivas.",
			"No era humano. Una inquietante persecución comienza."
		],
		"vietnamese": [
			"Hẻm sau khu trung tâm, không khí xám xịt, nồng nặc.",
			"Nhân viên vệ sinh Ash số 7, việc \"dọn dẹp\" của hắn không phải là một công việc đơn thuần.",
			"Lynn cảm nhận được. Sự điên rồ ẩn giấu trong những lời nói lặp đi lặp lại.",
			"Nó không phải của con người. Một cuộc truy đuổi đáng ngại bắt đầu."
		],
		"thai": [
			"ตรอกหลังเมือง อากาศสีเทาฉุนเฉียว",
			"เจ้าหน้าที่สุขาภิบาล Ash No.7 การ \"ทำความสะอาด\" ของเขาไม่ใช่แค่เรื่องธรรมดา",
			"ลินน์สัมผัสได้ถึงความบ้าคลั่งที่ซ่อนอยู่ในคำพูดที่ย้ำซ้ำ",
			"นั่นไม่ใช่ของมนุษย์ การไล่ล่าที่น่ากังวลเริ่มต้นขึ้น"
		],
		"hindi": [
			"शहर की गली, तीखी धूसर हवा।",
			"सफ़ाई कर्मचारी ऐश नंबर 7, उसकी 'सफ़ाई' महज़ एक काम नहीं थी।",
			"लिन ने महसूस किया। बार-बार दोहराए गए शब्दों में छिपा पागलपन।",
			"वह इंसानी नहीं था। एक परेशान करने वाली पीछा शुरू होता है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "잿빛 도심 뒷골목. 퀴퀴한 냄새가 코를 찔렀다.",
						"english": "A gray city alley. A musty smell stung her nose.",
						"japanese": "灰色の都心裏路地。カビ臭い匂いが鼻を刺した。",
						"chinese": "灰蒙蒙的都市后巷。一股霉味刺鼻。",
						"french": "Une ruelle grise de la ville. Une odeur de moisi lui piqua le nez.",
						"spanish": "Un callejón gris de la ciudad. Un olor a humedad le picó la nariz.",
						"vietnamese": "Hẻm sau thành phố xám xịt. Mùi ẩm mốc xộc thẳng vào mũi.",
						"thai": "ตรอกเมืองสีเทา กลิ่นอับชื้นแทงจมูก",
						"hindi": "एक धूसर शहर की गली। एक बदबूदार गंध ने उसकी नाक में चुभन पैदा की।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "lin",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "base",
					"content": {
						"korean": "…여기였어. Ash No.7이 일하는 곳.",
						"english": "...This was it. Where Ash No.7 worked.",
						"japanese": "…ここだった。アッシュ7号が働く場所。",
						"chinese": "……就是这里。Ash No.7工作的地方。",
						"french": "...C'était ici. L'endroit où travaillait Ash No.7.",
						"spanish": "...Aquí era. Donde trabajaba Ash No.7.",
						"vietnamese": "...Đây rồi. Nơi Ash số 7 làm việc.",
						"thai": "...ที่นี่เอง ที่ Ash No.7 ทำงาน",
						"hindi": "...यहीं था। ऐश नंबर 7 की काम करने की जगह।"
					}
				},
				{
					"content": {
						"korean": "저 노인이 설마….",
						"english": "That old man, surely not...",
						"japanese": "あの老人がまさか…。",
						"chinese": "那个老人，难道……。",
						"french": "Ce vieil homme, sûrement pas...",
						"spanish": "Ese anciano, ¿seguro que no...?",
						"vietnamese": "Lẽ nào ông lão đó...",
						"thai": "ชายชราคนนั้น ไม่น่าจะ...",
						"hindi": "वह बूढ़ा आदमी, कहीं ऐसा तो नहीं कि..."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "계속 '청소'라고 중얼거리네. 기계 같아.",
						"english": "He keeps muttering 'clean.' Like a machine.",
						"japanese": "ずっと「清掃」って呟いてる。まるで機械みたいだ。",
						"chinese": "他一直在喃喃自语“清洁”。像个机器。",
						"french": "Il ne cesse de marmonner « nettoyer ». Comme une machine.",
						"spanish": "Sigue murmurando \"limpiar\". Como una máquina.",
						"vietnamese": "Hắn cứ lẩm bẩm \"dọn dẹp\" mãi. Giống như một cái máy.",
						"thai": "เขายังคงพึมพำว่า \"ทำความสะอาด\" เหมือนหุ่นยนต์",
						"hindi": "वह लगातार 'सफ़ाई' बुदबुदाता रहता है। मशीन जैसा।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "청소… 저 반복, 뭔가 부자연스러워.",
						"english": "Cleaning... That repetition, something's unnatural.",
						"japanese": "清掃…あの繰り返し、何か不自然だ。",
						"chinese": "清洁……那种重复，有点不自然。",
						"french": "Nettoyage... Cette répétition, quelque chose n'est pas naturel.",
						"spanish": "Limpieza... Esa repetición, algo es antinatural.",
						"vietnamese": "Dọn dẹp... Cái sự lặp lại đó, có gì đó không tự nhiên.",
						"thai": "ทำความสะอาด... การทำซ้ำแบบนั้น มีบางอย่างผิดธรรมชาติ",
						"hindi": "सफ़ाई... वह दोहराव, कुछ अप्राकृतिक है।"
					},
					"emotion": "base",
					"speaker": "lin",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "lin",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 압축기 안에서 굉음이 울렸다. 불규칙적이고 섬뜩한 소리.",
						"english": "A thunderous roar echoed inside the gigantic compactor. Irregular, eerie sounds.",
						"japanese": "巨大な圧縮機の中で轟音が鳴り響いた。不規則で不気味な音。",
						"chinese": "巨大的压缩机内响起轰鸣声。不规则而诡异的声音。",
						"french": "Un rugissement assourdissant retentit à l'intérieur du gigantesque compacteur. Des sons irréguliers et sinistres.",
						"spanish": "Un estruendo resonó dentro del gigantesco compactador. Sonidos irregulares y espeluznantes.",
						"vietnamese": "Một tiếng gầm lớn vang vọng bên trong máy nén khổng lồ. Những âm thanh bất thường, rợn người.",
						"thai": "เสียงคำรามกึกก้องดังขึ้นภายในเครื่องอัดขนาดใหญ่ เสียงที่ไม่สม่ำเสมอและน่าขนลุก",
						"hindi": "विशाल कंपैक्टर के अंदर एक गर्जना गूंजी। अनियमित, भयानक आवाज़ें।"
					}
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "sad",
					"content": {
						"korean": "저 소리… 단순한 기계음이 아니야. 뭔가 다른 게 있어.",
						"english": "That sound... It's not just a machine noise. There's something else.",
						"japanese": "あの音…ただの機械音じゃない。何か違うものがいる。",
						"chinese": "那个声音……不是单纯的机械音。有其他的东西。",
						"french": "Ce son... Ce n'est pas qu'un simple bruit de machine. Il y a quelque chose d'autre.",
						"spanish": "Ese sonido... No es solo un ruido de máquina. Hay algo más.",
						"vietnamese": "Âm thanh đó... Không chỉ là tiếng máy móc đơn thuần. Có điều gì đó khác.",
						"thai": "เสียงนั่น...ไม่ใช่แค่เสียงเครื่องจักรธรรมดา มีอะไรบางอย่างที่แตกต่างออกไป",
						"hindi": "वह आवाज़... सिर्फ मशीन की नहीं है। कुछ और है।"
					}
				},
				{
					"content": {
						"korean": "사람들을 처리하는 도구라는 건가?",
						"english": "Is this a tool for... processing people?",
						"japanese": "人間を処理するための道具だというのか？",
						"chinese": "这是处理人的工具吗？",
						"french": "C'est un outil pour... 'traiter' des gens ?",
						"spanish": "¿Es esto una herramienta para... procesar personas?",
						"vietnamese": "Đây là công cụ để... xử lý con người sao?",
						"thai": "นี่คือเครื่องมือสำหรับ... จัดการผู้คนงั้นหรือ?",
						"hindi": "क्या यह लोगों को... निपटाने का उपकरण है?"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "Ash No.7… 그의 '청소'는 사람을 지우는 일이었어.",
						"english": "Ash No.7... His 'cleaning' was erasing people.",
						"japanese": "アッシュNo.7…彼の「掃除」は、人々を消し去る事だった。",
						"chinese": "灰烬7号……他的“清理”就是抹杀人类。",
						"french": "Ash N°7... Son 'nettoyage' consistait à effacer des gens.",
						"spanish": "Ash N°7... Su 'limpieza' era borrar personas.",
						"vietnamese": "Ash Số 7... 'Dọn dẹp' của hắn là xóa sổ con người.",
						"thai": "แอชหมายเลข 7... 'การทำความสะอาด' ของเขาคือการลบผู้คนให้หายไป",
						"hindi": "ऐश नंबर 7... उसकी 'सफाई' लोगों को मिटाना था।"
					},
					"type": "speech",
					"speaker": "lin"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						2
					],
					"speaker": "lin",
					"type": "direction"
				},
				{
					"content": {
						"korean": "점점 더 깊숙이 들어가는 느낌이야.",
						"english": "I feel like we're going deeper and deeper.",
						"japanese": "どんどん奥深くに入っていく感じだ。",
						"chinese": "感觉我们越来越深入了。",
						"french": "J'ai l'impression qu'on s'enfonce de plus en plus profondément.",
						"spanish": "Siento que nos adentramos cada vez más.",
						"vietnamese": "Cảm giác như chúng ta đang đi sâu hơn và sâu hơn nữa.",
						"thai": "รู้สึกเหมือนกำลังดำดิ่งลึกลงไปเรื่อยๆ",
						"hindi": "ऐसा लग रहा है कि हम और गहरे जा रहे हैं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "Ash의 눈… 인간적인 감정이 없어. 그냥 '지워야 할 것'으로 보는 것 같아.",
						"english": "Ash's eyes... no human emotion. He seems to see them as just 'things to be erased'.",
						"japanese": "アッシュの目…人間的な感情がない。ただ「消すべきもの」と見ているようだ。",
						"chinese": "灰烬的眼睛……没有人性情感。他似乎把他们当作“应该被抹杀的东西”。",
						"french": "Les yeux d'Ash... aucune émotion humaine. Il semble les voir comme de simples 'choses à effacer'.",
						"spanish": "Los ojos de Ash... sin emoción humana. Parece verlos como 'cosas a ser borradas'.",
						"vietnamese": "Đôi mắt của Ash... không có cảm xúc của con người. Hắn dường như chỉ xem họ là 'thứ cần phải xóa sổ'.",
						"thai": "ดวงตาของแอช...ไร้ซึ่งอารมณ์ของมนุษย์ ดูเหมือนเขาจะมองพวกเขาเป็นแค่ 'สิ่งที่ต้องถูกลบออกไป'",
						"hindi": "ऐश की आँखें... कोई मानवीय भावना नहीं। वह उन्हें केवल 'मिटाने वाली चीज़ें' समझता है।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…소름 돋네.",
						"english": "...Chilling.",
						"japanese": "…ぞっとする。",
						"chinese": "……毛骨悚然。",
						"french": "...Ça donne la chair de poule.",
						"spanish": "...Espeluznante.",
						"vietnamese": "...Thật rợn người.",
						"thai": "...ขนลุกเลย",
						"hindi": "...डर लग रहा है।"
					},
					"type": "speech",
					"speaker": "character_1"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그에게 '청소'는 일상이 아니라… 의식이었어.",
						"english": "For him, 'cleaning' wasn't a routine... it was a ritual.",
						"japanese": "彼にとって「掃除」は日常ではなく…儀式だった。",
						"chinese": "对他而言，“清理”并非日常……而是一种仪式。",
						"french": "Pour lui, le 'nettoyage' n'était pas une routine... c'était un rituel.",
						"spanish": "Para él, la 'limpieza' no era una rutina... era un ritual.",
						"vietnamese": "Đối với hắn, 'dọn dẹp' không phải là công việc thường ngày... mà là một nghi lễ.",
						"thai": "สำหรับเขาแล้ว 'การทำความสะอาด' ไม่ใช่กิจวัตรประจำวัน...แต่มันคือพิธีกรรม",
						"hindi": "उसके लिए, 'सफाई' एक दिनचर्या नहीं थी... यह एक अनुष्ठान था।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "lin",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "어둠 속에서 강렬한 시선이 느껴졌다.",
						"english": "A powerful gaze was felt in the darkness.",
						"japanese": "闇の中で強烈な視線を感じた。",
						"chinese": "在黑暗中感受到强烈的视线。",
						"french": "Un regard intense fut ressenti dans l'obscurité.",
						"spanish": "Se sintió una mirada intensa en la oscuridad.",
						"vietnamese": "Một ánh nhìn mãnh liệt được cảm nhận trong bóng tối.",
						"thai": "รู้สึกถึงสายตาที่รุนแรงในความมืด",
						"hindi": "अंधेरे में एक तीव्र दृष्टि महसूस हुई।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "더 이상 돌아갈 수 없어. Ash의 광기는… 이미 이 도시를 잠식했어.",
						"english": "There's no turning back now. Ash's madness... has already consumed this city.",
						"japanese": "もう後戻りはできない。アッシュの狂気は…すでにこの街を蝕んでいる。",
						"chinese": "无法回头了。灰烬的疯狂……已经侵蚀了这座城市。",
						"french": "Il n'y a plus de retour en arrière. La folie d'Ash... a déjà consumé cette ville.",
						"spanish": "Ya no hay vuelta atrás. La locura de Ash... ya ha consumido esta ciudad.",
						"vietnamese": "Không thể quay lại được nữa. Sự điên rồ của Ash... đã nuốt chửng thành phố này rồi.",
						"thai": "ไม่มีทางหวนกลับแล้ว ความบ้าคลั่งของแอช...ได้กลืนกินเมืองนี้ไปแล้ว",
						"hindi": "अब पीछे नहीं हट सकते। ऐश का पागलपन... इस शहर को पहले ही निगल चुका है।"
					},
					"speaker": "lin",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "우리가 막아야 해.",
						"english": "We have to stop him.",
						"japanese": "私たちが止めなければならない。",
						"chinese": "我们必须阻止他。",
						"french": "Nous devons l'arrêter.",
						"spanish": "Tenemos que detenerlo.",
						"vietnamese": "Chúng ta phải ngăn chặn hắn.",
						"thai": "เราต้องหยุดเขาให้ได้",
						"hindi": "हमें उसे रोकना होगा।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "그의 '청소'는… 멈춰야 해. 더 많은 희생자가 생기기 전에.",
						"english": "His 'cleansing'… must be stopped. Before more victims appear.",
						"japanese": "彼の「清掃」は…止めなければ。これ以上犠牲者が出る前に。",
						"chinese": "他的“清理”…必须停止。在更多受害者出现之前。",
						"french": "Son \"nettoyage\"... doit être arrêté. Avant qu'il n'y ait plus de victimes.",
						"spanish": "Su \"limpieza\"... debe ser detenida. Antes de que haya más víctimas.",
						"vietnamese": "Cuộc \"dọn dẹp\" của hắn... phải dừng lại. Trước khi có thêm nhiều nạn nhân.",
						"thai": "'การชำระล้าง' ของเขา... ต้องหยุด ก่อนที่จะมีเหยื่อเพิ่มขึ้น",
						"hindi": "उसकी 'सफाई'… रोकनी होगी। इससे पहले कि और पीड़ित हों।"
					},
					"emotion": "angry",
					"speaker": "lin",
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 압축기 앞에서, 정체 모를 존재가 기다리고 있었다.",
						"english": "In front of the massive compressor, an unknown entity waited.",
						"japanese": "巨大な圧縮機の前で、正体不明の存在が待ち受けていた。",
						"chinese": "巨大的压缩机前，一个不明身份的存在正在等待。",
						"french": "Devant l'énorme compresseur, une entité inconnue attendait.",
						"spanish": "Frente al enorme compresor, una entidad desconocida esperaba.",
						"vietnamese": "Trước chiếc máy nén khổng lồ, một thực thể không rõ danh tính đang chờ đợi.",
						"thai": "หน้าเครื่องอัดขนาดใหญ่ มีสิ่งมีชีวิตลึกลับรออยู่",
						"hindi": "विशाल कंप्रेसर के सामने, एक अज्ञात इकाई इंतज़ार कर रही थी।"
					}
				},
				{
					"content": {
						"korean": "불청객들… 감히 나의 '구역'을 더럽히는가.",
						"english": "Intruders… How dare you defile my 'domain'.",
						"japanese": "招かれざる客よ…よくも私の「領域」を汚したな。",
						"chinese": "不速之客…竟敢玷污我的“领地”。",
						"french": "Intrus… Comment osez-vous souiller mon \"domaine\" ?",
						"spanish": "Intrusos… ¿Cómo osáis profanar mi \"dominio\"?",
						"vietnamese": "Những kẻ không mời… Sao dám làm ô uế \"lãnh địa\" của ta.",
						"thai": "พวกบุกรุก... กล้าดียังไงมาแปดเปื้อน 'อาณาเขต' ของข้า",
						"hindi": "घुसपैठिए… तुम्हारी हिम्मत कैसे हुई मेरे 'इलाके' को अपवित्र करने की।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "lin",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "이게 Ash의 진정한 '청소'의 결과물인가? 광기가 만들어낸 괴물!",
						"english": "Is this the result of Ash's true 'cleansing'? A monster born of madness!",
						"japanese": "これがAshの真の「清掃」の成果なのか？狂気が生み出した怪物め！",
						"chinese": "这就是Ash真正“清理”的结果吗？由疯狂制造出的怪物！",
						"french": "C'est le résultat du véritable \"nettoyage\" d'Ash ? Un monstre né de la folie !",
						"spanish": "Es este el resultado de la verdadera \"limpieza\" de Ash? ¡Un monstruo nacido de la locura!",
						"vietnamese": "Đây là kết quả của cuộc \"dọn dẹp\" thực sự của Ash sao? Một con quái vật sinh ra từ sự điên loạn!",
						"thai": "นี่คือผลลัพธ์ของ 'การชำระล้าง' ที่แท้จริงของ Ash หรือไม่? สัตว์ประหลาดที่เกิดจากความบ้าคลั่ง!",
						"hindi": "क्या यह ऐश की असली 'सफाई' का नतीजा है? पागलपन से पैदा हुआ एक राक्षस!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "{random_boss}! 네가 Ash의 하수인인가!",
						"english": "{random_boss}! Are you Ash's minion!",
						"japanese": "{random_boss}！お前はAshの手下なのか！",
						"chinese": "{random_boss}！你是Ash的爪牙吗！",
						"french": "{random_boss} ! Es-tu le serviteur d'Ash !",
						"spanish": "¡{random_boss}! ¿Eres el secuaz de Ash?",
						"vietnamese": "{random_boss}! Ngươi là tay sai của Ash sao!",
						"thai": "{random_boss}! เจ้าเป็นลูกน้องของ Ash หรือไม่!",
						"hindi": "{random_boss}! क्या तुम ऐश के सेवक हो!"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "Ash? 그는 나의 위대한 '청소'를 도울 뿐. 너희도 곧 '깨끗하게' 사라질 것이다.",
						"english": "Ash? He merely assists my grand 'cleansing'. You too shall soon 'cleanly' disappear.",
						"japanese": "Ash？奴は私の偉大な「清掃」を手伝うだけだ。お前たちもじきに「綺麗に」消え失せるだろう。",
						"chinese": "Ash？他只是协助我的伟大“清理”罢了。你们也很快就会“干净地”消失。",
						"french": "Ash ? Il ne fait qu'assister mon grand \"nettoyage\". Vous aussi, vous disparaîtrez bientôt \"proprement\".",
						"spanish": "¿Ash? Él solo asiste a mi gran \"limpieza\". Vosotros también desapareceréis \"limpiamente\" pronto.",
						"vietnamese": "Ash? Hắn chỉ đơn thuần hỗ trợ cuộc \"dọn dẹp\" vĩ đại của ta thôi. Các ngươi cũng sẽ sớm \"sạch sẽ\" biến mất thôi.",
						"thai": "Ash? เขาแค่ช่วย 'การชำระล้าง' อันยิ่งใหญ่ของข้าเท่านั้น พวกเจ้าก็จะ 'สะอาด' หายไปในไม่ช้า",
						"hindi": "ऐश? वह तो बस मेरी महान 'सफाई' में मदद करता है। तुम भी जल्द ही 'साफ़' हो जाओगे।"
					},
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "괴물은 굉음을 내며 쓰러졌다. 하지만 광기의 흔적은 지워지지 않았다.",
						"english": "The monster fell with a roar. But the traces of madness were not erased.",
						"japanese": "怪物は轟音を立てて倒れた。しかし、狂気の痕跡は消えなかった。",
						"chinese": "怪物轰鸣着倒下了。但疯狂的痕迹并未抹去。",
						"french": "Le monstre est tombé avec un rugissement. Mais les traces de la folie n'ont pas été effacées.",
						"spanish": "El monstruo cayó con un rugido. Pero las huellas de la locura no fueron borradas.",
						"vietnamese": "Quái vật gầm rú rồi ngã xuống. Nhưng dấu vết của sự điên loạn vẫn không thể xóa nhòa.",
						"thai": "สัตว์ประหลาดล้มลงพร้อมเสียงคำราม แต่ร่องรอยของความบ้าคลั่งยังคงอยู่",
						"hindi": "राक्षस गर्जना करते हुए गिर पड़ा। लेकिन पागलपन के निशान मिटे नहीं।"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "크크… 겨우 이 정도라니. Ash의… '진정한 청소'는 아직 시작되지 않았다….",
						"english": "Heh heh… Is this all? Ash's… 'true cleansing' has not yet begun…",
						"japanese": "クク…これしきか。Ashの…「真の清掃」はまだ始まっていない…。",
						"chinese": "呵呵…就这点程度吗。Ash的…“真正清理”尚未开始…。",
						"french": "Haha… Ce n'est que ça ? Le \"véritable nettoyage\" d'Ash n'a pas encore commencé…",
						"spanish": "Je je… ¿Es esto todo? La \"verdadera limpieza\" de Ash aún no ha comenzado…",
						"vietnamese": "Khà khà… Chỉ có thế này thôi sao. \"Dọn dẹp thực sự\" của Ash… vẫn chưa bắt đầu…",
						"thai": "ฮ่าฮ่า… แค่นี้เองเหรอ 'การชำระล้างที่แท้จริง' ของ Ash… ยังไม่เริ่มต้น…",
						"hindi": "हँ हँ… बस इतना ही? ऐश की… 'असली सफाई' अभी शुरू नहीं हुई है…।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "Ash… 대체 얼마나 더러운 진실을 숨기고 있는 거야?",
						"english": "Ash… What kind of dirty truth are you hiding?",
						"japanese": "Ash…一体どれほどの汚い真実を隠しているんだ？",
						"chinese": "Ash…你到底隐藏了多少肮脏的真相？",
						"french": "Ash… Quelle sale vérité caches-tu ?",
						"spanish": "Ash… ¿Qué verdad tan sucia estás escondiendo?",
						"vietnamese": "Ash… Rốt cuộc ngươi đang che giấu bao nhiêu sự thật dơ bẩn vậy?",
						"thai": "Ash… เจ้ากำลังซ่อนความจริงที่สกปรกอะไรไว้มากแค่ไหนกันแน่?",
						"hindi": "ऐश… तुम कितनी गंदी सच्चाई छुपा रहे हो?"
					},
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "다음은 Ash No.7이다. 그의 '청소'를 끝장낼 거야.",
						"english": "Next is Ash No. 7. I'll put an end to his 'cleansing'.",
						"japanese": "次はAsh No.7だ。奴の「清掃」を終わらせてやる。",
						"chinese": "接下来是Ash No.7。我要彻底终结他的“清理”。",
						"french": "Le prochain est Ash N°7. Je vais mettre fin à son \"nettoyage\".",
						"spanish": "El siguiente es Ash Nº 7. Acabaré con su \"limpieza\".",
						"vietnamese": "Tiếp theo là Ash No.7. Tôi sẽ chấm dứt cuộc \"dọn dẹp\" của hắn.",
						"thai": "ต่อไปคือ Ash No.7 ข้าจะยุติ 'การชำระล้าง' ของเขา",
						"hindi": "अगला ऐश नंबर 7 है। मैं उसकी 'सफाई' को खत्म कर दूंगा।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "도시의 그림자는 더욱 깊어졌다. 진실은, 아직 멀리 있었다.",
						"english": "The city's shadows deepened. The truth remained distant.",
						"japanese": "街の影はさらに深まった。真実はまだ遠かった。",
						"chinese": "城市的阴影愈发深邃。真相，仍遥不可及。",
						"french": "Les ombres de la ville s'épaississaient. La vérité restait lointaine.",
						"spanish": "Las sombras de la ciudad se hicieron más profundas. La verdad aún estaba lejos.",
						"vietnamese": "Bóng tối thành phố càng thêm sâu. Sự thật vẫn còn xa vời.",
						"thai": "เงามืดของเมืองยิ่งลึกขึ้น ความจริงยังคงอยู่ห่างไกล",
						"hindi": "शहर की परछाइयां और गहरी हो गईं। सच्चाई अभी भी बहुत दूर थी।"
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "압축기의 강철 이빨이 모든 것을 찢어발겼다.",
						"english": "The compressor's steel teeth tore everything apart.",
						"japanese": "圧縮機の鋼鉄の歯が、すべてを粉砕した。",
						"chinese": "压缩机的钢齿将一切撕碎。",
						"french": "Les dents d'acier du compresseur mirent tout en pièces.",
						"spanish": "Los dientes de acero del compresor lo desgarraron todo.",
						"vietnamese": "Răng thép của máy nén đã xé nát mọi thứ.",
						"thai": "ฟันเหล็กของเครื่องอัดบดขยี้ทุกสิ่ง",
						"hindi": "कंप्रेसर के स्टील के दांतों ने सब कुछ फाड़ दिया।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "하찮은 오물들… 너희도 '청소'될 운명이다.",
						"english": "Worthless scum... You too are destined for 'cleanup.'",
						"japanese": "くだらないゴミども… お前たちも「掃除」される運命だ。",
						"chinese": "卑贱的垃圾… 你们也注定被“清理”。",
						"french": "Ordure insignifiante... Vous aussi êtes destinés au \"nettoyage\".",
						"spanish": "Escoria inútil... Vosotros también estáis destinados a ser 'limpiados'.",
						"vietnamese": "Đồ cặn bã vô giá trị... Các ngươi cũng định mệnh bị 'dọn dẹp'.",
						"thai": "พวกเศษสวะไร้ค่า... พวกแกก็มีชะตากรรมต้องถูก 'ทำความสะอาด' เช่นกัน",
						"hindi": "तुच्छ कचरा… तुम भी 'साफ' होने वाले हो।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "Ash… 이 광기를… 내가 멈출 거야!",
						"english": "Ash... I'll stop this madness!",
						"japanese": "アッシュ… この狂気を… 俺が止める！",
						"chinese": "艾什… 这份疯狂… 我会阻止的！",
						"french": "Ash... J'arrêterai cette folie !",
						"spanish": "Ash... ¡Detendré esta locura!",
						"vietnamese": "Ash... Ta sẽ ngăn chặn sự điên rồ này!",
						"thai": "แอช... ฉันจะหยุดความบ้าคลั่งนี้!",
						"hindi": "ऐश… इस पागलपन को… मैं रोकूंगा!"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…다시 한번. 반드시.",
						"english": "...One more time. Definitely.",
						"japanese": "…もう一度。必ず。",
						"chinese": "……再一次。一定。",
						"french": "...Encore une fois. Absolument.",
						"spanish": "...Una vez más. Sin falta.",
						"vietnamese": "...Thêm một lần nữa. Nhất định.",
						"thai": "...อีกครั้งหนึ่ง. อย่างแน่นอน.",
						"hindi": "…एक और बार। निश्चित रूप से।"
					}
				}
			]
		}
	]
} as const;
