export const scenario_modern_ashno7_78_03 = {
	"scenario_id": "modern_ashno7_78_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"echo": {
			"id": "mon_57f2edb8-aa81-4ce7-beed-ab009cd2ff35",
			"name": {
				"korean": "에코",
				"english": "Echo",
				"japanese": "エコー",
				"chinese": "艾可",
				"french": "Écho",
				"spanish": "Eco",
				"vietnamese": "Echo",
				"thai": "เอคโค่",
				"hindi": "इको"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/da48e2c2-6733-4f65-f8b6-f197af4ff700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e90605b9-372f-4bf1-cdec-56a2fdef0800/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"사라지는 도시. 아무도 묻지 않았다.",
			"메트로폴리스의 심장부, 에코는 기록 속에서 패턴을 찾았다.",
			"완벽하게 지워진 증거들. 그리고 이제, 그녀 자신이 지워질 위기에 놓였다.",
			"그녀는 죄책감을 느꼈다. 모두를 위협하는 침묵 속에서."
		],
		"english": [
			"The vanishing city. No one questioned it.",
			"In the heart of the metropolis, Echo found patterns in the records.",
			"Evidence erased perfectly. And now, she herself was on the verge of being erased.",
			"She felt guilty. In the silence that threatened everyone."
		],
		"japanese": [
			"消えゆく都市。誰も問わなかった。",
			"大都市の中心で、エコーは記録の中からパターンを見つけた。",
			"完璧に消された証拠。そして今、彼女自身が消される危機に瀕していた。",
			"彼女は罪悪感を覚えた。皆を脅かす沈黙の中で。"
		],
		"chinese": [
			"正在消失的城市。无人过问。",
			"在大都市的心脏，埃科在记录中发现了规律。",
			"证据被完美抹去。而现在，她自己也面临被抹去的危险。",
			"她感到内疚。在那威胁所有人的沉默中。"
		],
		"french": [
			"La ville disparaît. Personne n'a posé de questions.",
			"Au cœur de la métropole, Echo a trouvé des schémas dans les archives.",
			"Des preuves parfaitement effacées. Et maintenant, elle-même était sur le point d'être effacée.",
			"Elle se sentait coupable. Dans le silence qui menaçait tout le monde."
		],
		"spanish": [
			"La ciudad que desaparece. Nadie preguntó.",
			"En el corazón de la metrópolis, Echo encontró patrones en los registros.",
			"Evidencia borrada perfectamente. Y ahora, ella misma estaba a punto de ser borrada.",
			"Se sentía culpable. En el silencio que amenazaba a todos."
		],
		"vietnamese": [
			"Thành phố đang biến mất. Không ai đặt câu hỏi.",
			"Trong lòng đô thị, Echo tìm thấy các mô hình trong hồ sơ.",
			"Bằng chứng bị xóa hoàn hảo. Và giờ đây, chính cô cũng đang đứng trước nguy cơ bị xóa sổ.",
			"Cô cảm thấy tội lỗi. Trong sự im lặng đe dọa tất cả mọi người."
		],
		"thai": [
			"เมืองที่กำลังหายไป ไม่มีใครตั้งคำถาม",
			"ในใจกลางมหานคร เอคโค่พบรูปแบบในบันทึก",
			"หลักฐานถูกลบอย่างสมบูรณ์ และตอนนี้เธอก็กำลังจะถูกลบเอง",
			"เธอรู้สึกผิด ในความเงียบที่คุกคามทุกคน"
		],
		"hindi": [
			"लुप्त होता शहर। किसी ने नहीं पूछा。",
			"महानगर के दिल में, इको को रिकॉर्ड में पैटर्न मिले।",
			"सबूत पूरी तरह मिटा दिए गए। और अब, वह खुद मिटाए जाने के कगार पर थी।",
			"उसे दोषी महसूस हुआ। उस चुप्पी में जो सबको धमका रही थी।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 도시의 구석, 에코의 개인 연구실은 종이로 가득했다.",
						"english": "In a corner of the vast city, Echo's private lab was filled with papers.",
						"japanese": "巨大な都市の一角、エコーの個人研究室は書類で溢れていた。",
						"chinese": "在巨大城市的一角，埃科的私人实验室堆满了文件。",
						"french": "Dans un coin de la vaste ville, le laboratoire privé d'Echo était rempli de papiers.",
						"spanish": "En un rincón de la vasta ciudad, el laboratorio privado de Echo estaba lleno de papeles.",
						"vietnamese": "Trong một góc của thành phố rộng lớn, phòng thí nghiệm riêng của Echo đầy ắp giấy tờ.",
						"thai": "ในมุมหนึ่งของเมืองใหญ่ ห้องวิจัยส่วนตัวของเอคโค่เต็มไปด้วยกระดาษ",
						"hindi": "विशाल शहर के एक कोने में, इको की निजी प्रयोगशाला कागजों से भरी थी।"
					},
					"type": "speech"
				},
				{
					"speaker": "echo",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						5,
						3
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "...이게 무슨...",
						"english": "...What is this...",
						"japanese": "...これは一体...",
						"chinese": "...这到底是什么...",
						"french": "...Qu'est-ce que c'est que ça...",
						"spanish": "...Qué es esto...",
						"vietnamese": "...Đây là gì...",
						"thai": "...นี่มันอะไรกัน...",
						"hindi": "...यह क्या है..."
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "에코? 뭘 그렇게 뒤지고 있어?",
						"english": "Echo? What are you rummaging through?",
						"japanese": "エコー？何をそんなに探しているの？",
						"chinese": "埃科？你在翻找什么？",
						"french": "Echo ? Qu'est-ce que tu cherches ?",
						"spanish": "¿Echo? ¿Qué estás revolviendo?",
						"vietnamese": "Echo? Bạn đang lục lọi gì vậy?",
						"thai": "เอคโค่? กำลังค้นหาอะไรอยู่?",
						"hindi": "इको? तुम क्या खंगाल रही हो?"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "echo",
					"content": {
						"korean": "사라진 사람들. 기록, 블로그, 흔적... 모두 Ash No.7의 청소 구역과 겹쳐.",
						"english": "Missing people. Records, blogs, traces... all overlap with Ash No.7's cleanup zone.",
						"japanese": "行方不明者。記録、ブログ、痕跡...全てがアッシュNo.7の清掃区域と重なる。",
						"chinese": "失踪的人们。记录、博客、痕迹……都与Ash No.7的清理区域重叠。",
						"french": "Des personnes disparues. Des dossiers, des blogs, des traces... tout se superpose à la zone de nettoyage d'Ash n°7.",
						"spanish": "Personas desaparecidas. Registros, blogs, rastros... todo se superpone con la zona de limpieza de Ash N°7.",
						"vietnamese": "Những người mất tích. Hồ sơ, blog, dấu vết... tất cả đều trùng lặp với khu vực dọn dẹp của Ash No.7.",
						"thai": "ผู้คนที่หายไป บันทึก บล็อก ร่องรอย... ทั้งหมดทับซ้อนกับเขตทำความสะอาดของ Ash No.7",
						"hindi": "लापता लोग। रिकॉर्ड, ब्लॉग, निशान... सभी ऐश नंबर 7 के सफाई क्षेत्र से मेल खाते हैं।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "너무나도 깨끗하게. 마치, 처음부터 없었던 것처럼.",
						"english": "Too perfectly clean. As if they never existed in the first place.",
						"japanese": "あまりにも完璧に。まるで最初からいなかったかのように。",
						"chinese": "太干净了。仿佛，从一开始就不存在。",
						"french": "Trop parfaitement propre. Comme s'ils n'avaient jamais existé.",
						"spanish": "Demasiado limpio. Como si nunca hubieran existido.",
						"vietnamese": "Quá sạch sẽ. Cứ như thể, chúng chưa từng tồn tại ngay từ đầu.",
						"thai": "สะอาดเกินไป เหมือนกับว่าไม่เคยมีอยู่ตั้งแต่แรก",
						"hindi": "बहुत ही साफ-सुथरा। मानो, वे कभी थे ही नहीं।"
					},
					"emotion": "sad"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "echo",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "안 돼... 내 기록들이...",
						"english": "No... my records...",
						"japanese": "だめだ...私の記録が...",
						"chinese": "不...我的记录...",
						"french": "Non... mes dossiers...",
						"spanish": "No... mis registros...",
						"vietnamese": "Không... hồ sơ của tôi...",
						"thai": "ไม่นะ... บันทึกของฉัน...",
						"hindi": "नहीं... मेरे रिकॉर्ड्स..."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "왜 그래?",
						"english": "What's wrong?",
						"japanese": "どうしたの？",
						"chinese": "怎么了？",
						"french": "Qu'est-ce qui ne va pas ?",
						"spanish": "¿Qué pasa?",
						"vietnamese": "Sao vậy?",
						"thai": "เกิดอะไรขึ้น?",
						"hindi": "क्या हुआ?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "echo",
					"content": {
						"korean": "온라인 기록들이 전부 사라졌어. 백업도... 아무것도 없어. 누군가... 완벽하게 지웠어.",
						"english": "All online records are gone. No backups... nothing. Someone... erased them perfectly.",
						"japanese": "オンライン記録が全部消えた。バックアップも…何もない。誰かが…完璧に消したんだ。",
						"chinese": "所有线上记录都消失了。没有备份...什么都没有。有人...完美地抹去了它们。",
						"french": "Tous les registres en ligne ont disparu. Pas de sauvegardes... rien. Quelqu'un... les a parfaitement effacés.",
						"spanish": "Todos los registros en línea han desaparecido. Sin copias de seguridad... nada. Alguien... los borró perfectamente.",
						"vietnamese": "Mọi hồ sơ trực tuyến đã biến mất. Không có bản sao lưu... không có gì cả. Ai đó... đã xóa chúng hoàn hảo.",
						"thai": "บันทึกออนไลน์ทั้งหมดหายไปแล้ว ไม่มีข้อมูลสำรอง... ไม่มีอะไรเลย มีคน... ลบมันออกไปอย่างสมบูรณ์แบบ",
						"hindi": "सभी ऑनलाइन रिकॉर्ड गायब हो गए हैं। कोई बैकअप नहीं... कुछ भी नहीं। किसी ने... उन्हें पूरी तरह से मिटा दिया है।"
					}
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "내가 너무 깊이 파고들었나 봐. 내가 실수했어...",
						"english": "I think I dug too deep. I made a mistake...",
						"japanese": "深く掘りすぎたみたいだ。私が間違ってた…",
						"chinese": "我可能挖得太深了。我犯了个错误...",
						"french": "Je crois que j'ai creusé trop profond. J'ai fait une erreur...",
						"spanish": "Creo que cavé demasiado profundo. Cometí un error...",
						"vietnamese": "Có lẽ tôi đã đào quá sâu. Tôi đã mắc lỗi...",
						"thai": "ฉันคงจะขุดลึกเกินไปแล้ว ฉันทำพลาดไปแล้ว...",
						"hindi": "मुझे लगता है मैंने बहुत गहराई तक खोदा। मैंने गलती कर दी..."
					},
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "echo",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "기억해내야 해. 내가 뭘 찾았는지.",
						"english": "I need to remember. What I found.",
						"japanese": "思い出さなきゃ。何を見つけたのか。",
						"chinese": "我必须回忆起来。我找到了什么。",
						"french": "Je dois me souvenir. Ce que j'ai trouvé.",
						"spanish": "Necesito recordar. Lo que encontré.",
						"vietnamese": "Tôi cần phải nhớ lại. Tôi đã tìm thấy gì.",
						"thai": "ฉันต้องจำให้ได้ ว่าฉันเจออะไร",
						"hindi": "मुझे याद करना होगा। मैंने क्या पाया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "정신 차려, 에코. 우리가 도와줄게.",
						"english": "Snap out of it, Echo. We'll help you.",
						"japanese": "しっかりして、エコー。私たちが助けてあげる。",
						"chinese": "振作起来，艾珂。我们会帮你的。",
						"french": "Reprends-toi, Echo. Nous allons t'aider.",
						"spanish": "Reacciona, Eco. Te ayudaremos.",
						"vietnamese": "Tỉnh táo lại đi, Echo. Chúng tôi sẽ giúp bạn.",
						"thai": "ตั้งสติหน่อย, เอคโค่ พวกเราจะช่วยเธอเอง",
						"hindi": "होश में आओ, एको। हम तुम्हारी मदद करेंगे।"
					},
					"emotion": "base"
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "실종자들... 전부 청소 구역에서 사라졌어. 그리고... 특정 요일에만.",
						"english": "The missing people... all disappeared from the cleaning zone. And... only on specific days.",
						"japanese": "行方不明者たち…全員、清掃区域で消えたんだ。しかも…特定の曜日だけ。",
						"chinese": "失踪者们...都从清洁区消失了。而且...只在特定的日子。",
						"french": "Les disparus... tous ont disparu de la zone de nettoyage. Et... seulement certains jours.",
						"spanish": "Los desaparecidos... todos desaparecieron de la zona de limpieza. Y... solo en días específicos.",
						"vietnamese": "Những người mất tích... tất cả đều biến mất khỏi khu vực dọn dẹp. Và... chỉ vào những ngày cụ thể.",
						"thai": "ผู้ที่หายตัวไป... ทั้งหมดหายไปจากเขตทำความสะอาด และ... เฉพาะในบางวันเท่านั้น",
						"hindi": "लापता लोग... सभी सफाई क्षेत्र से गायब हो गए। और... केवल खास दिनों में।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "echo",
					"content": {
						"korean": "마치... 청소 스케줄처럼.",
						"english": "Like... a cleaning schedule.",
						"japanese": "まるで…清掃スケジュールみたいに。",
						"chinese": "就像...清洁计划一样。",
						"french": "Comme... un programme de nettoyage.",
						"spanish": "Como... un horario de limpieza.",
						"vietnamese": "Giống như... một lịch trình dọn dẹp.",
						"thai": "เหมือน... ตารางทำความสะอาดเลย",
						"hindi": "जैसे... एक सफाई अनुसूची।"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "그 순간, 기계 소음 섞인 달콤하고 금속성 냄새가 희미하게 풍겼다.",
						"english": "In that moment, a faint, sweet, metallic scent mixed with machine noise wafted through the air.",
						"japanese": "その瞬間、機械音と混じり合った、甘く金属的な香りがかすかに漂った。",
						"chinese": "就在那一刻，一股混杂着机械噪音的甜美金属气味若隐若现。",
						"french": "À cet instant, une odeur douce et métallique, mêlée au bruit des machines, flottait faiblement dans l'air.",
						"spanish": "En ese momento, un débil y dulce olor metálico mezclado con el ruido de las máquinas flotó en el aire.",
						"vietnamese": "Ngay lúc đó, một mùi ngọt ngào, kim loại thoang thoảng lẫn với tiếng ồn máy móc lan tỏa.",
						"thai": "ในช่วงเวลานั้น กลิ่นหอมหวานปนโลหะจางๆ ที่ผสมกับเสียงเครื่องจักรก็ลอยมา",
						"hindi": "उसी क्षण, मशीन के शोर के साथ मिली एक हल्की, मीठी, धातुई गंध हवा में फैल गई।"
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
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "echo"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "너희도 위험해질 거야. 이 모든 게... 연결되어 있어.",
						"english": "You'll be in danger too. All of this... is connected.",
						"japanese": "君たちも危険になる。この全てが…繋がっているんだ。",
						"chinese": "你们也会有危险。这一切...都 Dōu 是相互关联的。",
						"french": "Vous serez en danger aussi. Tout cela... est lié.",
						"spanish": "Ustedes también estarán en peligro. Todo esto... está conectado.",
						"vietnamese": "Các bạn cũng sẽ gặp nguy hiểm. Tất cả những điều này... đều được kết nối.",
						"thai": "พวกเธอเองก็จะตกอยู่ในอันตราย ทุกสิ่งทุกอย่างนี้... เชื่อมโยงกันอยู่",
						"hindi": "तुम भी खतरे में पड़ोगे। यह सब... जुड़ा हुआ है।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "멈출 순 없어.",
						"english": "Can't stop it.",
						"japanese": "止められない。",
						"chinese": "无法阻止。",
						"french": "On ne peut pas l'arrêter.",
						"spanish": "No puedo detenerlo.",
						"vietnamese": "Không thể ngăn cản.",
						"thai": "หยุดไม่ได้",
						"hindi": "रोक नहीं सकते।"
					},
					"type": "speech"
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "이건 단순한 실종이 아니야. 도시 자체가... 무언가를 숨기고 있어.",
						"english": "This isn't just a disappearance. The city itself... is hiding something.",
						"japanese": "これは単なる失踪じゃない。この都市自体が…何かを隠してる。",
						"chinese": "这不只是单纯的失踪。这座城市本身…就隐藏着什么。",
						"french": "Ce n'est pas une simple disparition. La ville elle-même... cache quelque chose.",
						"spanish": "Esto no es una simple desaparición. La ciudad misma... esconde algo.",
						"vietnamese": "Đây không chỉ là một vụ mất tích đơn thuần. Chính thành phố này... đang che giấu điều gì đó.",
						"thai": "นี่ไม่ใช่แค่การหายตัวไปธรรมดา เมืองนี้เอง...กำลังซ่อนอะไรบางอย่างอยู่",
						"hindi": "यह सिर्फ एक साधारण गुमशुदगी नहीं है। यह शहर खुद... कुछ छिपा रहा है।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "절대... 돌아올 수 없을 거야.",
						"english": "You'll never... be able to return.",
						"japanese": "決して…戻ることはできないだろう。",
						"chinese": "你绝不可能…再回来了。",
						"french": "Tu ne pourras jamais... revenir.",
						"spanish": "Nunca... podrás regresar.",
						"vietnamese": "Tuyệt đối... sẽ không thể quay về được.",
						"thai": "จะไม่มีทาง...กลับมาได้อีกเลย",
						"hindi": "तुम कभी... वापस नहीं आ पाओगे।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "쓸모없는 것들은... 치워야지.",
						"english": "Useless things... must be disposed of.",
						"japanese": "役立たずなものは…片付けないと。",
						"chinese": "没用的东西…必须清除掉。",
						"french": "Les choses inutiles... doivent être éliminées.",
						"spanish": "Las cosas inútiles... deben ser eliminadas.",
						"vietnamese": "Những thứ vô dụng... phải bị loại bỏ thôi.",
						"thai": "ของไร้ประโยชน์...ต้องกำจัดทิ้ง",
						"hindi": "बेकार की चीजें... हटानी होंगी।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "이 목소리는...!",
						"english": "This voice...!",
						"japanese": "この声は…！",
						"chinese": "这个声音是…！",
						"french": "Cette voix... !",
						"spanish": "¡Esta voz...!",
						"vietnamese": "Giọng nói này...!",
						"thai": "เสียงนี่มัน...!",
						"hindi": "यह आवाज़...!"
					}
				},
				{
					"speaker": "random_boss",
					"action": "shake",
					"duration_ms": 500,
					"type": "direction"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 무너져 내렸다.",
						"english": "The colossal shadow collapsed.",
						"japanese": "巨大な影が崩れ落ちた。",
						"chinese": "巨大的影子轰然倒塌。",
						"french": "L'ombre colossale s'est effondrée.",
						"spanish": "La sombra colosal se derrumbó.",
						"vietnamese": "Bóng đen khổng lồ sụp đổ.",
						"thai": "เงาขนาดยักษ์พังทลายลง",
						"hindi": "विशाल छाया ढह गई।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "...끝이 아니야. 더 거대한 '청소부'가... 온다.",
						"english": "...It's not over. A greater 'Sweeper' is... coming.",
						"japanese": "...終わりじゃない。もっと巨大な「掃除屋」が...来る。",
						"chinese": "...还没完。更巨大的“清道夫”...要来了。",
						"french": "...Ce n'est pas la fin. Un 'Nettoyeur' encore plus grand... arrive.",
						"spanish": "...No ha terminado. Un 'Barrendero' aún mayor... se acerca.",
						"vietnamese": "...Chưa hết đâu. Một 'Người dọn dẹp' vĩ đại hơn... đang đến.",
						"thai": "...ยังไม่จบ. 'ผู้กวาดล้าง' ที่ยิ่งใหญ่กว่า... กำลังมา.",
						"hindi": "...यह अंत नहीं है। एक और बड़ा 'सफाईकर्मी'... आ रहा है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야...?",
						"english": "What do you mean...?",
						"japanese": "どういうことだ...？",
						"chinese": "你说什么...？",
						"french": "Que veux-tu dire...?",
						"spanish": "¿Qué quieres decir...?",
						"vietnamese": "Anh/Cô nói gì cơ...?",
						"thai": "หมายความว่าอะไร...?",
						"hindi": "तुम्हारा क्या मतलब है...?"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "에코의 눈은 여전히 불안하게 흔들렸다. 그들은 알았다. 이건 작은 조각일 뿐임을.",
						"english": "Echo's eyes still trembled uneasily. They knew. This was just a small piece.",
						"japanese": "エコーの目はまだ不安そうに揺れていた。彼らは知っていた。これはほんの小さな一片に過ぎないことを。",
						"chinese": "艾科的眼睛依然不安地颤抖着。他们知道。这只是冰山一角。",
						"french": "Les yeux d'Echo tremblaient encore d'inquiétude. Ils savaient. Ce n'était qu'un petit fragment.",
						"spanish": "Los ojos de Echo aún temblaban inquietos. Sabían. Esto era solo una pequeña parte.",
						"vietnamese": "Đôi mắt của Echo vẫn còn run rẩy lo lắng. Họ biết. Đây chỉ là một mảnh nhỏ.",
						"thai": "ดวงตาของเอคโค่ยังคงสั่นไหวอย่างไม่สบายใจ พวกเขารู้ นี่เป็นเพียงเศษเสี้ยวเล็กๆ เท่านั้น",
						"hindi": "इको की आँखें अभी भी बेचैनी से काँप रही थीं। वे जानते थे। यह सिर्फ एक छोटा सा हिस्सा था।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						1,
						3
					],
					"speaker": "echo"
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "드디어 만났구나... 이 구역을 지우던 자.",
						"english": "So we finally meet... the one who erased this sector.",
						"japanese": "ついに会ったな…この区域を消していた者よ。",
						"chinese": "终于见面了啊…清除这个区域的人。",
						"french": "Nous nous rencontrons enfin... celui qui a effacé ce secteur.",
						"spanish": "Así que por fin nos encontramos... el que borró este sector.",
						"vietnamese": "Cuối cùng cũng gặp được ngươi... kẻ đã xóa sổ khu vực này.",
						"thai": "ในที่สุดก็เจอกันจนได้...คนที่ลบเขตนี้",
						"hindi": "तो आखिरकार हम मिल ही गए... वह जिसने इस सेक्टर को मिटा दिया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "더러운 것들을 용납할 수 없었다.",
						"english": "I couldn't tolerate the filth.",
						"japanese": "汚れたものを許せなかった。",
						"chinese": "我无法容忍那些污秽之物。",
						"french": "Je ne pouvais pas tolérer la saleté.",
						"spanish": "No podía tolerar la inmundicia.",
						"vietnamese": "Ta không thể dung thứ cho những thứ dơ bẩn.",
						"thai": "ไม่อาจทนเห็นสิ่งสกปรกได้",
						"hindi": "मैं गंदगी बर्दाश्त नहीं कर सका।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "네가 모든 걸 지웠어?",
						"english": "You erased everything?",
						"japanese": "お前が全てを消したのか？",
						"chinese": "你清除了一切？",
						"french": "C'est toi qui as tout effacé ?",
						"spanish": "¿Tú borraste todo?",
						"vietnamese": "Ngươi đã xóa sổ tất cả sao?",
						"thai": "นายเป็นคนลบทุกอย่างเหรอ?",
						"hindi": "क्या तुमने सब कुछ मिटा दिया?"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "완벽한 청결을 위해. 이제 너희도... '청소'될 시간이다.",
						"english": "For perfect purity. Now it's time for you all... to be 'cleaned'.",
						"japanese": "完璧な清浄のために。今度は貴様らが…『掃除』される番だ。",
						"chinese": "为了彻底的洁净。现在，轮到你们…被‘清理’了。",
						"french": "Pour une propreté parfaite. Maintenant, il est temps que vous aussi... soyez 'nettoyés'.",
						"spanish": "Por una pureza perfecta. Ahora es el momento de que vosotros también... seáis 'limpiados'.",
						"vietnamese": "Vì sự thanh khiết hoàn hảo. Giờ thì đến lượt các ngươi... bị 'thanh trừng' rồi.",
						"thai": "เพื่อความสะอาดที่สมบูรณ์แบบ ตอนนี้ถึงเวลาที่พวกแก...จะถูก 'ชำระล้าง' แล้ว",
						"hindi": "पूर्ण स्वच्छता के लिए। अब तुम सबकी भी... 'सफाई' का समय है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"action": "exit",
					"direction": "down",
					"duration_ms": 400,
					"type": "direction",
					"speaker": "echo"
				},
				{
					"emotion": "sad",
					"speaker": "echo",
					"content": {
						"korean": "안 돼... 물러서!",
						"english": "No... Stand back!",
						"japanese": "ダメだ…下がれ！",
						"chinese": "不…退后！",
						"french": "Non... Reculez !",
						"spanish": "¡No... Retrocede!",
						"vietnamese": "Không... Lùi lại!",
						"thai": "ไม่นะ...ถอยไป!",
						"hindi": "नहीं... पीछे हटो!"
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "도시의 규칙이 탐험대를 삼켰다.",
						"english": "The city's rules swallowed the expedition team.",
						"japanese": "都市のルールが探検隊を飲み込んだ。",
						"chinese": "城市的规则吞噬了探险队。",
						"french": "Les règles de la ville ont englouti l'équipe d'expédition.",
						"spanish": "Las reglas de la ciudad engulleron al equipo de expedición.",
						"vietnamese": "Những quy tắc của thành phố đã nuốt chửng đội thám hiểm.",
						"thai": "กฎของเมืองได้กลืนกินทีมสำรวจไปแล้ว",
						"hindi": "शहर के नियमों ने खोज दल को निगल लिया।"
					}
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "그래. 이렇게 깨끗해야지.",
						"english": "Yes. It should be this clean.",
						"japanese": "そう。これくらい綺麗じゃないとね。",
						"chinese": "没错。就该这么干净。",
						"french": "Oui. Il faut que ce soit aussi propre.",
						"spanish": "Sí. Así de limpio debe estar.",
						"vietnamese": "Đúng vậy. Phải sạch sẽ thế này chứ.",
						"thai": "ใช่ ต้องสะอาดแบบนี้สิ",
						"hindi": "हाँ। इतना साफ होना चाहिए।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아직 끝나지 않았어...!",
						"english": "It's not over yet...!",
						"japanese": "まだ終わってない...！",
						"chinese": "还没结束...！",
						"french": "Ce n'est pas encore fini...!",
						"spanish": "¡Todavía no ha terminado...!",
						"vietnamese": "Chưa kết thúc đâu...!",
						"thai": "ยังไม่จบ...!",
						"hindi": "अभी खत्म नहीं हुआ है...!"
					},
					"type": "speech"
				}
			]
		}
	]
} as const;
