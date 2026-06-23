export const scenario_modern_discordia_54_02 = {
	"scenario_id": "modern_discordia_54_02",
	"order": 2,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"Lin": {
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
			"Discordia의 흔적 속에서 발견된 예상치 못한 단서.",
			"과거 사라진 연구원, 그리고 '정신 동기화 프로젝트'.",
			"해커 Lin의 손끝에서 진실의 조각이 맞춰지지만,",
			"그것은 왜곡된 기억 속의 비명이었다."
		],
		"english": [
			"An unexpected clue found amidst Discordia's traces.",
			"A missing researcher from the past, and the 'Mind Synchronization Project'.",
			"Pieces of truth come together at hacker Lin's fingertips, but...",
			"It was a scream from a distorted memory."
		],
		"japanese": [
			"Discordiaの痕跡から見つかった予期せぬ手がかり。",
			"過去に消えた研究者、そして「精神同期プロジェクト」。",
			"ハッカーLinの指先で真実の断片が繋がるが、",
			"それは歪んだ記憶の中の悲鳴だった。"
		],
		"chinese": [
			"在Discordia的痕迹中发现的意外线索。",
			"过去失踪的研究员，以及“精神同步项目”。",
			"真相的碎片在黑客Lin的指尖拼凑起来，但是，",
			"那是扭曲记忆中的一声尖叫。"
		],
		"french": [
			"Un indice inattendu découvert parmi les traces de Discordia.",
			"Un chercheur disparu du passé, et le 'Projet de Synchronisation Mentale'.",
			"Les fragments de vérité s'assemblent sous les doigts de la hackeuse Lin, mais...",
			"C'était un cri issu d'une mémoire déformée."
		],
		"spanish": [
			"Una pista inesperada hallada entre los rastros de Discordia.",
			"Un investigador desaparecido del pasado, y el 'Proyecto de Sincronización Mental'.",
			"Los fragmentos de la verdad se unen en las yemas de los dedos de la hacker Lin, pero...",
			"Era un grito de una memoria distorsionada."
		],
		"vietnamese": [
			"Một manh mối bất ngờ được tìm thấy giữa những dấu vết của Discordia.",
			"Một nhà nghiên cứu mất tích trong quá khứ, và 'Dự án Đồng bộ hóa Tâm trí'.",
			"Những mảnh ghép sự thật được ráp lại dưới đầu ngón tay của hacker Lin, nhưng...",
			"Đó là một tiếng hét từ ký ức bị bóp méo."
		],
		"thai": [
			"เบาะแสที่ไม่คาดคิดถูกพบในร่องรอยของ Discordia",
			"นักวิจัยที่หายไปในอดีต และ 'โครงการซิงโครไนซ์จิตใจ'",
			"ชิ้นส่วนของความจริงถูกประกอบเข้าด้วยกันที่ปลายนิ้วของแฮกเกอร์หลิน แต่...",
			"มันเป็นเสียงกรีดร้องจากความทรงจำที่บิดเบือน"
		],
		"hindi": [
			"डिस्कॉर्डिया के निशानों के बीच एक अप्रत्याशित सुराग मिला।",
			"अतीत का एक लापता शोधकर्ता, और 'मनो-समकालिकता परियोजना'।",
			"हैकर लिन की उंगलियों पर सच के टुकड़े जुड़ते हैं, लेकिन,",
			"वह एक विकृत स्मृति से निकली चीख थी।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "Discordia의 기묘한 작품에서 새로운 흔적을 찾았다.",
						"english": "Found new traces in Discordia's strange work.",
						"japanese": "Discordiaの奇妙な作品から新たな痕跡を見つけた。",
						"chinese": "在Discordia的奇异作品中发现了新的痕迹。",
						"french": "J'ai trouvé de nouvelles traces dans l'étrange œuvre de Discordia.",
						"spanish": "He encontrado nuevas pistas en la extraña obra de Discordia.",
						"vietnamese": "Đã tìm thấy dấu vết mới trong tác phẩm kỳ lạ của Discordia.",
						"thai": "พบร่องรอยใหม่ในงานแปลกๆ ของ Discordia",
						"hindi": "डिस्कॉर्डिया के विचित्र काम में नए निशान मिले।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "Lin",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "찾았어. Discordia의 작품에 숨겨진 데이터 조각.",
						"english": "Found it. A data fragment hidden in Discordia's work.",
						"japanese": "見つけた。Discordiaの作品に隠されたデータの一部。",
						"chinese": "找到了。隐藏在Discordia作品中的数据碎片。",
						"french": "Trouvé. Un fragment de données caché dans l'œuvre de Discordia.",
						"spanish": "Lo encontré. Un fragmento de datos oculto en la obra de Discordia.",
						"vietnamese": "Tìm thấy rồi. Một mảnh dữ liệu ẩn trong tác phẩm của Discordia.",
						"thai": "เจอแล้ว ชิ้นส่วนข้อมูลที่ซ่อนอยู่ในงานของ Discordia",
						"hindi": "मिल गया। डिस्कॉर्डिया के काम में छिपा एक डेटा टुकड़ा।"
					},
					"emotion": "base",
					"speaker": "Lin",
					"type": "speech"
				},
				{
					"content": {
						"korean": "거기 뭐가 있는데?",
						"english": "What's in there?",
						"japanese": "何があるの？",
						"chinese": "那里有什么？",
						"french": "Qu'y a-t-il là-dedans ?",
						"spanish": "¿Qué hay ahí?",
						"vietnamese": "Có gì trong đó?",
						"thai": "มีอะไรอยู่ในนั้น?",
						"hindi": "वहां क्या है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "Lin",
					"type": "speech",
					"content": {
						"korean": "과거 '정신 동기화 프로젝트'. 그리고… 사라진 연구원 기록이야.",
						"english": "The 'Mind Synchronization Project' from the past. And... records of a missing researcher.",
						"japanese": "過去の「精神同期プロジェクト」。そして…消えた研究員の記録だ。",
						"chinese": "过去的“精神同步项目”。还有…失踪研究员的记录。",
						"french": "Le 'Projet de Synchronisation Mentale' du passé. Et... les dossiers d'un chercheur disparu.",
						"spanish": "El 'Proyecto de Sincronización Mental' del pasado. Y... registros de un investigador desaparecido.",
						"vietnamese": "'Dự án Đồng bộ hóa Tâm trí' từ quá khứ. Và... hồ sơ của một nhà nghiên cứu mất tích.",
						"thai": "'โครงการซิงโครไนซ์จิตใจ' จากอดีต และ...บันทึกของนักวิจัยที่หายไป",
						"hindi": "अतीत की 'मनो-समकालिकता परियोजना'। और... एक लापता शोधकर्ता के रिकॉर्ड।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "실종이라고? 단순한 사고가 아냐?",
						"english": "Missing? Not just an accident?",
						"japanese": "失踪だって？単なる事故じゃないの？",
						"chinese": "失踪了？不是单纯的事故吗？",
						"french": "Disparu ? Pas un simple accident ?",
						"spanish": "¿Desaparecido? ¿No es solo un accidente?",
						"vietnamese": "Mất tích sao? Không phải tai nạn đơn thuần à?",
						"thai": "หายตัวไปเหรอ? ไม่ใช่แค่อุบัติเหตุเหรอ?",
						"hindi": "लापता? सिर्फ एक दुर्घटना नहीं?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "단순한 실종이 아냐. 데이터가 강제로 지워진 흔적이 보여.",
						"english": "Not just a simple disappearance. I see traces of data being forcibly erased.",
						"japanese": "単なる失踪じゃない。データが強制的に消去された痕跡がある。",
						"chinese": "不是简单的失踪。我看到了数据被强制删除的痕迹。",
						"french": "Pas une simple disparition. Je vois des traces de suppression forcée de données.",
						"spanish": "No es una simple desaparición. Veo rastros de datos borrados a la fuerza.",
						"vietnamese": "Không phải là mất tích đơn thuần. Tôi thấy dấu vết dữ liệu bị xóa một cách cưỡng bức.",
						"thai": "ไม่ใช่แค่การหายตัวไปธรรมดา ฉันเห็นร่องรอยของการลบข้อมูลโดยบังคับ",
						"hindi": "यह सिर्फ एक साधारण गुमशुदगी नहीं है। मुझे डेटा के जबरन मिटाए जाने के निशान दिख रहे हैं।"
					},
					"emotion": "angry",
					"speaker": "Lin",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "Lin"
				},
				{
					"content": {
						"korean": "분석해봤어. 이건 파편화된 연구 기록이야.",
						"english": "I've analyzed it. These are fragmented research records.",
						"japanese": "分析してみた。これは断片化された研究記録だ。",
						"chinese": "我分析过了。这是零散的研究记录。",
						"french": "J'ai analysé. Ce sont des fragments de dossiers de recherche.",
						"spanish": "Lo he analizado. Son registros de investigación fragmentados.",
						"vietnamese": "Tôi đã phân tích. Đây là những ghi chép nghiên cứu rời rạc.",
						"thai": "ฉันวิเคราะห์แล้ว นี่คือบันทึกการวิจัยที่กระจัดกระจาย",
						"hindi": "मैंने इसका विश्लेषण किया है। ये खंडित शोध रिकॉर्ड हैं।"
					},
					"emotion": "base",
					"speaker": "Lin",
					"type": "speech"
				},
				{
					"speaker": "Lin",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그리고… 데이터 속에 섞인 비명 소리도 발견했어.",
						"english": "And... I found screams mixed in the data.",
						"japanese": "そして…データの中に混じった悲鳴も発見した。",
						"chinese": "而且…我还发现了数据中混杂的尖叫声。",
						"french": "Et... j'ai aussi trouvé des cris mêlés aux données.",
						"spanish": "Y... también encontré gritos mezclados en los datos.",
						"vietnamese": "Và... tôi cũng tìm thấy tiếng hét lẫn trong dữ liệu.",
						"thai": "และ... ฉันยังพบเสียงกรีดร้องปะปนอยู่ในข้อมูลด้วย",
						"hindi": "और... मुझे डेटा में चीखें भी मिलीं।"
					}
				},
				{
					"content": {
						"korean": "비명? 대체 무슨 실험을 했길래….",
						"english": "Screams? What kind of experiment did they conduct to cause this...?",
						"japanese": "悲鳴？一体どんな実験を…。",
						"chinese": "尖叫声？到底做了什么实验才导致…。",
						"french": "Des cris ? Quel genre d'expérience ont-ils fait pour ça… ?",
						"spanish": "¿Gritos? ¿Qué clase de experimento hicieron para causar esto...?",
						"vietnamese": "Tiếng hét? Rốt cuộc họ đã làm thí nghiệm gì mà lại...?",
						"thai": "เสียงกรีดร้อง? พวกเขาทำการทดลองอะไรกันแน่...",
						"hindi": "चीखें? आखिर उन्होंने किस तरह का प्रयोग किया था...।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "기록엔 '프로젝트 실패, 모든 기록 말소'라고 나와.",
						"english": "The records state: 'Project failed, all records purged.'",
						"japanese": "記録には「プロジェクト失敗、全記録抹消」とある。",
						"chinese": "记录上写着：“项目失败，所有记录抹杀。”",
						"french": "Les registres indiquent : « Projet échoué, toutes les données effacées. »",
						"spanish": "Los registros dicen: 'Proyecto fallido, todos los registros borrados'.",
						"vietnamese": "Ghi chép có ghi: 'Dự án thất bại, xóa bỏ mọi ghi chép'.",
						"thai": "บันทึกระบุว่า: 'โครงการล้มเหลว ลบข้อมูลทั้งหมด'",
						"hindi": "रिकॉर्ड में लिखा है: 'परियोजना विफल, सभी रिकॉर्ड मिटा दिए गए'।"
					},
					"speaker": "Lin",
					"type": "speech"
				},
				{
					"speaker": "Lin",
					"type": "speech",
					"content": {
						"korean": "이게 특정 연구 시설이랑 연관되어 있는 것 같아.",
						"english": "It seems connected to a specific research facility.",
						"japanese": "これは特定の研究施設と関連があるようだ。",
						"chinese": "这似乎与某个特定的研究设施有关。",
						"french": "Cela semble lié à une installation de recherche spécifique.",
						"spanish": "Parece estar relacionado con una instalación de investigación específica.",
						"vietnamese": "Có vẻ nó có liên quan đến một cơ sở nghiên cứu cụ thể nào đó.",
						"thai": "ดูเหมือนจะเชื่อมโยงกับศูนย์วิจัยเฉพาะแห่งหนึ่ง",
						"hindi": "यह किसी विशिष्ट अनुसंधान सुविधा से जुड़ा हुआ लगता है।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "Lin",
					"spot": [
						3,
						3
					],
					"action": "enter"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "비명 소리 데이터를 복원해봤는데… 계속 신경 쓰여.",
						"english": "I tried to restore the scream data, but... it keeps bothering me.",
						"japanese": "悲鳴のデータを復元してみたけど…ずっと気になる。",
						"chinese": "我尝试恢复了尖叫声的数据…但它一直困扰着我。",
						"french": "J'ai essayé de restaurer les données des cris, mais… ça me dérange toujours.",
						"spanish": "Intenté restaurar los datos de los gritos, pero... me sigue preocupando.",
						"vietnamese": "Tôi đã thử khôi phục dữ liệu tiếng hét... nhưng nó cứ làm tôi bận tâm.",
						"thai": "ฉันลองกู้ข้อมูลเสียงกรีดร้องแล้ว แต่... มันยังคงรบกวนใจฉัน",
						"hindi": "मैंने चीखने के डेटा को बहाल करने की कोशिश की, लेकिन... यह मुझे परेशान करता रहता है।"
					},
					"speaker": "Lin",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그게 왜?",
						"english": "Why is that?",
						"japanese": "それがどうして？",
						"chinese": "为什么？",
						"french": "Pourquoi ça ?",
						"spanish": "¿Por qué?",
						"vietnamese": "Sao lại thế?",
						"thai": "ทำไมล่ะ?",
						"hindi": "ऐसा क्यों है?"
					}
				},
				{
					"speaker": "Lin",
					"type": "speech",
					"content": {
						"korean": "단순한 비명이 아냐. 마치… 기억이 찢기는 소리 같아.",
						"english": "It's not just a scream. It's like... the sound of memories being torn apart.",
						"japanese": "ただの悲鳴じゃない。まるで…記憶が引き裂かれる音のようだ。",
						"chinese": "那不是普通的尖叫。更像是…记忆被撕裂的声音。",
						"french": "Ce n'est pas un simple cri. C'est comme... le son de la mémoire déchirée.",
						"spanish": "No es solo un grito. Es como... el sonido de los recuerdos siendo desgarrados.",
						"vietnamese": "Đó không phải là tiếng hét đơn thuần. Nó giống như... âm thanh của ký ức bị xé nát.",
						"thai": "มันไม่ใช่แค่เสียงกรีดร้อง มันเหมือน... เสียงความทรงจำกำลังถูกฉีกขาด",
						"hindi": "यह सिर्फ एक चीख नहीं है। यह ऐसा है जैसे... यादें फट रही हों।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이 프로젝트… 생각보다 훨씬 잔인한 거야.",
						"english": "This project... it's much more brutal than I thought.",
						"japanese": "このプロジェクト…思ったよりずっと残忍だ。",
						"chinese": "这个项目…比我想象的要残忍得多。",
						"french": "Ce projet... c'est bien plus cruel que je ne le pensais.",
						"spanish": "Este proyecto... es mucho más brutal de lo que pensaba.",
						"vietnamese": "Dự án này... nó tàn nhẫn hơn tôi nghĩ rất nhiều.",
						"thai": "โครงการนี้... มันโหดร้ายกว่าที่ฉันคิดไว้มาก",
						"hindi": "यह परियोजना... यह मेरी सोच से कहीं ज़्यादा क्रूर है।"
					},
					"speaker": "Lin",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "진실을 반드시 알아내야 해.",
						"english": "We must uncover the truth.",
						"japanese": "真実を必ず突き止めなければならない。",
						"chinese": "我们必须查明真相。",
						"french": "Nous devons absolument découvrir la vérité.",
						"spanish": "Debemos descubrir la verdad.",
						"vietnamese": "Chúng ta nhất định phải tìm ra sự thật.",
						"thai": "เราต้องเปิดเผยความจริงให้ได้",
						"hindi": "हमें सच्चाई का पता लगाना होगा।"
					},
					"emotion": "angry"
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
						2
					],
					"type": "direction",
					"speaker": "Lin",
					"duration_ms": 500
				},
				{
					"speaker": "Lin",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "확실해. 그 연구 시설은 단순한 곳이 아니었어.",
						"english": "I'm sure. That research facility wasn't just any ordinary place.",
						"japanese": "間違いない。あの研究施設はただの場所じゃなかった。",
						"chinese": "确定。那个研究设施并非寻常之地。",
						"french": "C'est certain. Ce centre de recherche n'était pas un endroit ordinaire.",
						"spanish": "Estoy seguro. Esa instalación de investigación no era un lugar cualquiera.",
						"vietnamese": "Chắc chắn. Cơ sở nghiên cứu đó không phải là một nơi bình thường.",
						"thai": "แน่นอน สถานีวิจัยนั่นไม่ใช่แค่ที่ธรรมดาๆ",
						"hindi": "निश्चित रूप से। वह अनुसंधान सुविधा कोई साधारण जगह नहीं थी।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "무슨 소리야.",
						"english": "What do you mean?",
						"japanese": "どういうことだ？",
						"chinese": "你说什么？",
						"french": "Que veux-tu dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Anh nói gì cơ?",
						"thai": "หมายความว่าไง?",
						"hindi": "तुम्हारा क्या मतलब है?"
					}
				},
				{
					"content": {
						"korean": "정부 기록에서 이상한 걸 찾았어. '지하 갱도 보강 공사' 명목으로 막대한 예산이 나갔는데… 공사 흔적이 없어.",
						"english": "I found something strange in government records. A huge budget was allocated for 'underground tunnel reinforcement,' but there are no traces of construction.",
						"japanese": "政府の記録で奇妙なものを見つけた。『地下坑道補強工事』の名目で莫大な予算が使われたのに…工事の痕跡がない。",
						"chinese": "我在政府记录里发现了一些奇怪的东西。以‘地下坑道加固工程’的名义批了巨额预算，但…却没有施工痕迹。",
						"french": "J'ai trouvé quelque chose d'étrange dans les registres du gouvernement. Un budget énorme a été alloué pour le 'renforcement des galeries souterraines', mais il n'y a aucune trace de travaux.",
						"spanish": "Encontré algo extraño en los registros del gobierno. Se asignó un presupuesto enorme para la 'construcción de refuerzo de túneles subterráneos', pero no hay rastro de las obras.",
						"vietnamese": "Tôi đã tìm thấy điều kỳ lạ trong hồ sơ chính phủ. Một khoản ngân sách khổng lồ được cấp cho 'công trình gia cố hầm ngầm' nhưng... không có dấu vết thi công.",
						"thai": "ฉันเจออะไรแปลกๆ ในบันทึกของรัฐบาล มีงบประมาณมหาศาลถูกใช้ไปกับ 'การเสริมความแข็งแรงอุโมงค์ใต้ดิน' แต่... ไม่มีร่องรอยการก่อสร้างเลย",
						"hindi": "मुझे सरकारी अभिलेखों में कुछ अजीब मिला। 'भूमिगत सुरंग सुदृढ़ीकरण' के नाम पर भारी बजट आवंटित किया गया था... लेकिन निर्माण के कोई निशान नहीं हैं।"
					},
					"emotion": "base",
					"speaker": "Lin",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "지하 갱도… 그럼 그 실험실이 지하에 있다는 거야?",
						"english": "Underground tunnel... So, that lab is underground?",
						"japanese": "地下坑道…それじゃあ、あの実験室は地下にあるってことか？",
						"chinese": "地下坑道…那实验室是在地下吗？",
						"french": "Galerie souterraine... Alors ce laboratoire est sous terre ?",
						"spanish": "Túnel subterráneo... ¿Entonces ese laboratorio está bajo tierra?",
						"vietnamese": "Hầm ngầm... Vậy phòng thí nghiệm đó nằm dưới lòng đất sao?",
						"thai": "อุโมงค์ใต้ดิน... งั้นห้องทดลองนั้นอยู่ใต้ดินเหรอ?",
						"hindi": "भूमिगत सुरंग... तो, वह प्रयोगशाला भूमिगत है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "Lin",
					"type": "speech",
					"content": {
						"korean": "가능성이 높아. 모든 증거가 지하를 가리키고 있어.",
						"english": "Highly likely. All evidence points underground.",
						"japanese": "可能性が高い。全ての証拠が地下を指し示している。",
						"chinese": "可能性很大。所有证据都指向地下。",
						"french": "Très probable. Toutes les preuves mènent sous terre.",
						"spanish": "Muy probable. Todas las pruebas apuntan al subsuelo.",
						"vietnamese": "Rất có thể. Tất cả bằng chứng đều chỉ về dưới lòng đất.",
						"thai": "เป็นไปได้สูง หลักฐานทั้งหมดชี้ไปที่ใต้ดิน",
						"hindi": "बहुत संभावना है। सभी सबूत भूमिगत की ओर इशारा कर रहे हैं।"
					},
					"emotion": "base"
				},
				{
					"speaker": "Lin",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이건 단순한 프로젝트가 아니었어. 뭔가… 거대한 걸 숨기려는 거야.",
						"english": "This wasn't just a simple project. They're trying to hide something... enormous.",
						"japanese": "これは単なるプロジェクトじゃなかった。何か…とてつもないものを隠そうとしているんだ。",
						"chinese": "这不只是个简单的项目。他们在试图隐藏某种…巨大的东西。",
						"french": "Ce n'était pas un simple projet. Ils essaient de cacher quelque chose... d'énorme.",
						"spanish": "Esto no era un simple proyecto. Están intentando ocultar algo... enorme.",
						"vietnamese": "Đây không phải là một dự án đơn giản. Họ đang cố gắng che giấu điều gì đó... to lớn.",
						"thai": "นี่ไม่ใช่แค่โปรเจกต์ธรรมดา พวกเขากำลังซ่อนบางอย่าง... ที่ใหญ่โตมาก",
						"hindi": "यह कोई साधारण परियोजना नहीं थी। वे कुछ... बहुत बड़ा छिपाने की कोशिश कर रहे हैं।"
					}
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크윽… 겨우 이런… 하지만 진실은… 곧 다시… 너희를 집어삼킬 거다…",
						"english": "Ugh... Is this all... But the truth... will soon... devour you again...",
						"japanese": "くっ…たかがこれしき…だが真実は…やがて再び…お前たちを飲み込むだろう…",
						"chinese": "呃…仅仅如此…但真相…很快就会再次…吞噬你们…",
						"french": "Ugh... Ce n'est que ça... Mais la vérité... vous engloutira bientôt... à nouveau...",
						"spanish": "Ugh... ¿Solo esto?... Pero la verdad... pronto... os devorará de nuevo...",
						"vietnamese": "Khụ... Chỉ thế này thôi sao... Nhưng sự thật... sẽ sớm... nuốt chửng các ngươi lần nữa...",
						"thai": "อึก…แค่นี้เอง…แต่ความจริง…ไม่ช้า…จะกลืนกินพวกเจ้าอีกครั้ง…",
						"hindi": "उफ़… बस इतना ही… लेकिन सच… जल्द ही… तुम्हें फिर से निगल जाएगा…"
					},
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "절대… 진실은 왜곡되지 않아.",
						"english": "Never... The truth will not be distorted.",
						"japanese": "絶対に…真実は歪められない。",
						"chinese": "绝不…真相不会被扭曲。",
						"french": "Jamais... La vérité ne sera pas déformée.",
						"spanish": "Jamás... La verdad no será distorsionada.",
						"vietnamese": "Tuyệt đối... Sự thật sẽ không bị bóp méo.",
						"thai": "ไม่มีทาง…ความจริงจะไม่ถูกบิดเบือน",
						"hindi": "कभी नहीं… सच विकृत नहीं होगा।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "Lin",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "Lin",
					"type": "speech",
					"content": {
						"korean": "해냈어! 하지만… 이 보스가 말한 '진실'이… 계속 마음에 걸려.",
						"english": "We did it! But... this 'truth' the boss mentioned... keeps bothering me.",
						"japanese": "やった！でも…このボスが言った「真実」が…ずっと心に引っかかる。",
						"chinese": "我们做到了！但是…这个老大所说的“真相”…一直让我很在意。",
						"french": "On l'a fait ! Mais... cette 'vérité' dont le boss a parlé... me tracasse toujours.",
						"spanish": "¡Lo logramos! Pero... esta 'verdad' que mencionó el jefe... me sigue inquietando.",
						"vietnamese": "Chúng ta đã làm được! Nhưng... cái 'sự thật' mà tên trùm này nói... cứ khiến tôi bận tâm.",
						"thai": "ทำได้แล้ว! แต่ว่า… 'ความจริง' ที่บอสพูดถึง… ยังคงติดอยู่ในใจฉัน",
						"hindi": "हमने कर दिखाया! लेकिन… इस बॉस ने जो 'सच' कहा था… वह मुझे परेशान कर रहा है।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "쓰러진 존재가 남긴 마지막 조각. 그것은 또 다른 암흑가의 그림자를 가리키고 있었다.",
						"english": "The last piece left by the fallen entity. It pointed to another shadow in the underworld.",
						"japanese": "倒れた存在が残した最後の欠片。それは、また別の暗黒街の影を指し示していた。",
						"chinese": "倒下之物留下的最后碎片。它指向了另一个黑社会的阴影。",
						"french": "Le dernier fragment laissé par l'entité vaincue. Il pointait vers une autre ombre du monde souterrain.",
						"spanish": "El último fragmento dejado por la entidad caída. Apuntaba a otra sombra del submundo.",
						"vietnamese": "Mảnh ghép cuối cùng do kẻ bại trận để lại. Nó chỉ đến một bóng tối khác trong thế giới ngầm.",
						"thai": "ชิ้นส่วนสุดท้ายที่เหลืออยู่จากผู้ที่ล้มลง มันชี้ไปยังเงามืดอีกด้านของโลกใต้ดิน",
						"hindi": "गिरे हुए प्राणी द्वारा छोड़ा गया आखिरी टुकड़ा। यह अंडरवर्ल्ड की एक और छाया की ओर इशारा कर रहा था।"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "'이상한 실험'에 얽힌 옛 갱스터 조직의 비밀. 다음 단서는 그곳에 있었다.",
						"english": "The secret of an old gangster organization entangled in 'strange experiments'. The next clue was there.",
						"japanese": "「奇妙な実験」にまつわる、かつてのギャング組織の秘密。次の手がかりはそこにあった。",
						"chinese": "卷入“奇怪实验”的旧黑帮组织的秘密。下一个线索就在那里。",
						"french": "Le secret d'une ancienne organisation de gangsters impliquée dans des 'étranges expériences'. L'indice suivant se trouvait là.",
						"spanish": "El secreto de una antigua organización de gánsteres involucrada en 'experimentos extraños'. La siguiente pista estaba allí.",
						"vietnamese": "Bí mật của một tổ chức xã hội đen cũ liên quan đến 'thí nghiệm kỳ lạ'. Manh mối tiếp theo nằm ở đó.",
						"thai": "ความลับขององค์กรนักเลงเก่าที่พัวพันกับ 'การทดลองแปลกๆ' เบาะแสต่อไปอยู่ที่นั่น",
						"hindi": "'अजीबोगरीब प्रयोगों' में उलझे एक पुराने गैंगस्टर संगठन का रहस्य। अगला सुराग वहीं था।"
					},
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "정체 모를 그림자가 기괴한 웃음을 터뜨리며 나타났다.",
						"english": "An unknown shadow appeared with a grotesque laugh.",
						"japanese": "正体不明の影が、不気味な笑みを浮かべて現れた。",
						"chinese": "一个不知名的影子带着诡异的笑容出现了。",
						"french": "Une ombre inconnue apparut avec un rire grotesque.",
						"spanish": "Una sombra desconocida apareció con una risa grotesca.",
						"vietnamese": "Một cái bóng không rõ danh tính xuất hiện với tiếng cười quái dị.",
						"thai": "เงาลึกลับปรากฏขึ้นพร้อมกับเสียงหัวเราะที่แปลกประหลาด",
						"hindi": "एक अज्ञात छाया एक विकृत हंसी के साथ प्रकट हुई।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "여기까지 온 건가… 잊혀질 운명들을 찾아 헤매는군.",
						"english": "So you've come this far... searching for those destined to be forgotten.",
						"japanese": "ここまで来たか…忘れ去られる運命にある者たちを探し求めているようだな。",
						"chinese": "竟然到这里来了…寻找那些注定被遗忘的命运之人吗。",
						"french": "Vous êtes donc venu jusqu'ici... à la recherche de ceux destinés à être oubliés.",
						"spanish": "¿Así que has llegado hasta aquí... buscando a aquellos destinados a ser olvidados?",
						"vietnamese": "Ngươi đã đi xa đến đây ư... tìm kiếm những số phận bị lãng quên.",
						"thai": "มาถึงนี่แล้วสินะ... ตามหาพวกที่ถูกลิขิตให้ถูกลืมเลือน",
						"hindi": "तो तुम यहाँ तक आ गए हो... उन लोगों को खोज रहे हो जिनकी नियति भूल जाने की है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "너희가 연구원들을 사라지게 한 거야?",
						"english": "Did you make the researchers disappear?",
						"japanese": "お前たちが研究員たちを消したのか？",
						"chinese": "是你们让研究员们消失的吗？",
						"french": "C'est vous qui avez fait disparaître les chercheurs ?",
						"spanish": "¿Ustedes hicieron desaparecer a los investigadores?",
						"vietnamese": "Các ngươi đã làm cho các nhà nghiên cứu biến mất sao?",
						"thai": "พวกแกเป็นคนทำให้ทีมนักวิจัยหายไปใช่ไหม?",
						"hindi": "क्या तुमने शोधकर्ताओं को गायब कर दिया?"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "사라진 게 아니야. '완벽'하게 동기화된 것뿐.",
						"english": "They didn't disappear. They were merely 'perfectly' synchronized.",
						"japanese": "消えたんじゃない。ただ、『完璧』に同期されただけだ。",
						"chinese": "并非消失。只是‘完美’地同步了而已。",
						"french": "Ils n'ont pas disparu. Ils ont simplement été 'parfaitement' synchronisés.",
						"spanish": "No desaparecieron. Simplemente fueron 'perfectamente' sincronizados.",
						"vietnamese": "Họ không biến mất. Chỉ là đã 'hoàn hảo' đồng bộ hóa thôi.",
						"thai": "ไม่ได้หายไป แค่ 'ซิงค์' อย่างสมบูรณ์แบบเท่านั้น",
						"hindi": "वे गायब नहीं हुए। वे बस 'पूरी तरह से' सिंक्रनाइज़ किए गए थे।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "무슨 헛소리야! 진실을 말해!",
						"english": "What nonsense! Tell me the truth!",
						"japanese": "何を言ってるんだ！真実を話せ！",
						"chinese": "胡说八道什么！说出真相！",
						"french": "Qu'est-ce que c'est que ces bêtises ! Dis la vérité !",
						"spanish": "¡Qué tontería! ¡Dime la verdad!",
						"vietnamese": "Nói nhảm gì vậy! Hãy nói sự thật đi!",
						"thai": "พูดไร้สาระอะไร! บอกความจริงมา!",
						"hindi": "क्या बकवास है! सच बताओ!"
					}
				},
				{
					"content": {
						"korean": "진실은… 이미 너희의 기억 속에 왜곡되어 있다.",
						"english": "The truth... is already distorted in your memories.",
						"japanese": "真実は…すでにお前たちの記憶の中で歪められている。",
						"chinese": "真相…早已在你们的记忆中扭曲。",
						"french": "La vérité... est déjà déformée dans vos mémoires.",
						"spanish": "La verdad... ya está distorsionada en vuestras memorias.",
						"vietnamese": "Sự thật... đã bị bóp méo trong ký ức của các ngươi rồi.",
						"thai": "ความจริง...ถูกบิดเบือนไปแล้วในความทรงจำของพวกเจ้า",
						"hindi": "सच... पहले से ही तुम्हारी यादों में विकृत है।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어리석은 것들… 기억은 왜곡되고, 진실은 영원히 묻힐 것이다.",
						"english": "Foolish ones... Memories will be distorted, and the truth will be buried forever.",
						"japanese": "愚かな者たちよ…記憶は歪められ、真実は永遠に葬られるだろう。",
						"chinese": "愚蠢的东西…记忆将被扭曲，真相将永远被埋葬。",
						"french": "Insensés... Les souvenirs seront déformés, et la vérité sera enterrée à jamais.",
						"spanish": "Necios... Las memorias serán distorsionadas, y la verdad será enterrada para siempre.",
						"vietnamese": "Những kẻ ngu ngốc... Ký ức sẽ bị bóp méo, và sự thật sẽ bị chôn vùi mãi mãi.",
						"thai": "พวกโง่เขลา…ความทรงจำจะถูกบิดเบือน และความจริงจะถูกฝังกลบไปตลอดกาล",
						"hindi": "मूर्खों… यादें विकृत हो जाएंगी, और सच हमेशा के लिए दफन हो जाएगा।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "젠장… 아직 끝나지 않았어!",
						"english": "Damn it... It's not over yet!",
						"japanese": "くそ…まだ終わってない！",
						"chinese": "该死…还没结束！",
						"french": "Bon sang... Ce n'est pas encore fini !",
						"spanish": "¡Maldita sea! ¡Aún no ha terminado!",
						"vietnamese": "Chết tiệt... Vẫn chưa kết thúc đâu!",
						"thai": "ให้ตายสิ…ยังไม่จบแค่นี้หรอก!",
						"hindi": "धिक्कार है… अभी खत्म नहीं हुआ है!"
					},
					"emotion": "angry"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "Lin",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "괜찮아? 다시… 다시 해보자.",
						"english": "Are you okay? Let's try again...",
						"japanese": "大丈夫？また…もう一度やってみよう。",
						"chinese": "你没事吧？再…再试一次。",
						"french": "Ça va ? Encore... Essayons encore.",
						"spanish": "¿Estás bien? De nuevo... Intentémoslo de nuevo.",
						"vietnamese": "Cậu ổn chứ? Lại... lại thử lần nữa đi.",
						"thai": "เป็นไรไหม? อีกที…ลองอีกครั้ง",
						"hindi": "तुम ठीक हो? फिर से… फिर से कोशिश करते हैं।"
					},
					"emotion": "sad",
					"speaker": "Lin",
					"type": "speech"
				}
			]
		}
	]
} as const;
