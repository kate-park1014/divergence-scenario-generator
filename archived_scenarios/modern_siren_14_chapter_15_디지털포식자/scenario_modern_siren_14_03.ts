export const scenario_modern_siren_14_03 = {
	"scenario_id": "modern_siren_14_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"kai": {
			"id": "mon_d7f29313-b8fb-49da-9a1a-01df5d13866e",
			"name": {
				"korean": "카이",
				"english": "Kai",
				"japanese": "カイ",
				"chinese": "凯",
				"french": "Kai",
				"spanish": "Kai",
				"vietnamese": "Kai",
				"thai": "ไค",
				"hindi": "काई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f10d9184-4155-4bb9-de2d-db61463f7c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e41f8e03-08c9-4a4f-6f72-fa9342876f00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "도시의 가장 깊은 곳. 폐쇄된 디지털 아카이브에 도착했다.",
						"english": "The city's deepest place. I've arrived at the sealed digital archive.",
						"japanese": "都市の最も深い場所。閉鎖されたデジタルアーカイブに到着した。",
						"chinese": "城市的深处。我抵达了封闭的数字档案馆。",
						"french": "L'endroit le plus profond de la ville. Je suis arrivé aux archives numériques scellées.",
						"spanish": "El lugar más profundo de la ciudad. He llegado al archivo digital sellado.",
						"vietnamese": "Nơi sâu nhất của thành phố. Tôi đã đến kho lưu trữ kỹ thuật số bị niêm phong.",
						"thai": "ส่วนที่ลึกที่สุดของเมือง ฉันมาถึงหอจดหมายเหตุทางดิจิทัลที่ถูกปิดผนึกแล้ว",
						"hindi": "शहर का सबसे गहरा स्थान। मैं सीलबंद डिजिटल आर्काइव में पहुंच गया हूं।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "여기가 그곳인가… 사이렌의 과거가 잠든 곳.",
						"english": "Is this it... where the siren's past slumbers.",
						"japanese": "ここがそうか… サイレンの過去が眠る場所。",
						"chinese": "这里就是吗……海妖的过去沉睡之地。",
						"french": "Est-ce ici... où le passé de la sirène sommeille.",
						"spanish": "¿Es este el lugar... donde yace el pasado de la sirena?",
						"vietnamese": "Đây là nơi... quá khứ của nàng tiên cá ngủ yên.",
						"thai": "ที่นี่หรือเปล่า... ที่ที่อดีตของไซเรนนอนหลับใหล",
						"hindi": "क्या यह वही जगह है... जहां सायरन का अतीत सो रहा है।"
					}
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "kai"
				},
				{
					"content": {
						"korean": "…왔군. 기다렸어.",
						"english": "...You're here. I've been waiting.",
						"japanese": "…来たか。待っていたぞ。",
						"chinese": "……你来了。我等候多时了。",
						"french": "...Vous êtes là. Je vous attendais.",
						"spanish": "...Has llegado. Te estaba esperando.",
						"vietnamese": "...Ngươi đã đến. Ta đã chờ.",
						"thai": "...มาแล้วสินะ ฉันรออยู่",
						"hindi": "...तुम आ गए। मैं इंतजार कर रहा था।"
					},
					"speaker": "kai",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "당신이 카이?",
						"english": "Are you Kai?",
						"japanese": "あなたがカイ？",
						"chinese": "你是凯？",
						"french": "Vous êtes Kai ?",
						"spanish": "¿Eres Kai?",
						"vietnamese": "Ngươi là Kai?",
						"thai": "คุณคือไค?",
						"hindi": "क्या तुम काई हो?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "그래. 난 이곳에서 지워진 기록들을 복원하고 있지.",
						"english": "Yes. I'm restoring erased records here.",
						"japanese": "ああ。私はここで消された記録を復元している。",
						"chinese": "是的。我在这里恢复被抹去的记录。",
						"french": "Oui. Je restaure des enregistrements effacés ici.",
						"spanish": "Sí. Estoy restaurando registros borrados aquí.",
						"vietnamese": "Phải. Ta đang khôi phục những ghi chép đã bị xóa ở đây.",
						"thai": "ใช่ ฉันกำลังกู้คืนบันทึกที่ถูกลบไปที่นี่",
						"hindi": "हां। मैं यहां मिटाए गए रिकॉर्ड बहाल कर रहा हूं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "네가 찾던 진실이 여기 있을지도 몰라.",
						"english": "The truth you're looking for might be here.",
						"japanese": "君が探している真実がここにあるかもしれない。",
						"chinese": "你所寻找的真相可能就在这里。",
						"french": "La vérité que vous cherchez se trouve peut-être ici.",
						"spanish": "La verdad que buscas podría estar aquí.",
						"vietnamese": "Sự thật mà ngươi tìm kiếm có thể ở đây.",
						"thai": "ความจริงที่คุณกำลังตามหาอาจจะอยู่ที่นี่",
						"hindi": "जिस सच्चाई की तुम तलाश कर रहे हो, वह यहां हो सकती है।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"speaker": "kai",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "찾았어. 오래된 뉴스 아카이브 조각이야.",
						"english": "Found it. A fragment of an old news archive.",
						"japanese": "見つけた。古いニュースアーカイブの断片だ。",
						"chinese": "找到了。是旧新闻档案的碎片。",
						"french": "Je l'ai trouvé. Un fragment d'une vieille archive de presse.",
						"spanish": "Lo encontré. Un fragmento de un antiguo archivo de noticias.",
						"vietnamese": "Tìm thấy rồi. Một mảnh từ kho lưu trữ tin tức cũ.",
						"thai": "เจอแล้ว ชิ้นส่วนจากคลังข่าวเก่า",
						"hindi": "मिल गया। एक पुराने समाचार संग्रह का टुकड़ा।"
					},
					"type": "speech",
					"emotion": "happy"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "뭐지?",
						"english": "What is it?",
						"japanese": "何これ？",
						"chinese": "这是什么？",
						"french": "Qu'est-ce que c'est ?",
						"spanish": "¿Qué es?",
						"vietnamese": "Cái gì vậy?",
						"thai": "อะไรเนี่ย?",
						"hindi": "यह क्या है?"
					}
				},
				{
					"content": {
						"korean": "'블러드라인'이라는 갱단의 해체 기사… 그리고 정보원 실종 보고서.",
						"english": "An article about the disbandment of a gang called 'Bloodline'... and a report on a missing informant.",
						"japanese": "「ブラッドライン」というギャングの解散記事…そして情報提供者の失踪報告書。",
						"chinese": "一篇关于名为“血脉”的帮派解散的文章……以及一份线人失踪报告。",
						"french": "Un article sur le démantèlement d'un gang nommé 'Bloodline'... et un rapport sur la disparition d'un informateur.",
						"spanish": "Un artículo sobre la disolución de una pandilla llamada 'Bloodline'... y un informe de desaparición de un informante.",
						"vietnamese": "Một bài báo về việc giải thể băng đảng 'Bloodline'... và báo cáo về sự mất tích của một người cung cấp thông tin.",
						"thai": "บทความเกี่ยวกับการยุบแก๊งที่ชื่อ 'Bloodline'... และรายงานการหายตัวไปของสายลับ",
						"hindi": "'ब्लडलाइन' नामक गिरोह के विघटन पर एक लेख... और एक मुखबिर के लापता होने की रिपोर्ट।"
					},
					"speaker": "kai",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "그런데 이 시점… '세레니티'가 처음 모습을 드러낸 때와 묘하게 겹쳐.",
						"english": "But this timing... it strangely overlaps with when 'Serenity' first appeared.",
						"japanese": "しかしこの時期…「セレニティ」が初めて姿を現した時と奇妙に重なる。",
						"chinese": "但这个时间点……与‘宁静’首次出现的时间点诡异地重合了。",
						"french": "Mais ce moment... il coïncide étrangement avec la première apparition de 'Serenity'.",
						"spanish": "Pero este momento... se superpone extrañamente con la primera aparición de 'Serenity'.",
						"vietnamese": "Nhưng thời điểm này... lại trùng hợp một cách kỳ lạ với lúc 'Serenity' lần đầu xuất hiện.",
						"thai": "แต่ช่วงเวลานี้... มันทับซ้อนกับตอนที่ 'Serenity' ปรากฏตัวครั้งแรกอย่างน่าประหลาด",
						"hindi": "लेकिन यह समय... 'सेरेनिटी' के पहली बार प्रकट होने के समय से अजीब तरह से मेल खाता है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "우연이 아니겠지.",
						"english": "It can't be a coincidence.",
						"japanese": "偶然ではないだろう。",
						"chinese": "这不会是巧合。",
						"french": "Ce ne peut pas être une coïncidence.",
						"spanish": "No puede ser una coincidencia.",
						"vietnamese": "Không thể là ngẫu nhiên được.",
						"thai": "คงไม่ใช่เรื่องบังเอิญ",
						"hindi": "यह कोई इत्तेफाक नहीं होगा।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "kai",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "이 기록들은 단순한 우연이 아니야.",
						"english": "These records are no mere coincidence.",
						"japanese": "これらの記録は単なる偶然ではない。",
						"chinese": "这些记录绝非巧合。",
						"french": "Ces archives ne sont pas une simple coïncidence.",
						"spanish": "Estos registros no son una mera coincidencia.",
						"vietnamese": "Những ghi chép này không phải là sự trùng hợp đơn thuần.",
						"thai": "บันทึกเหล่านี้ไม่ใช่เรื่องบังเอิญธรรมดา",
						"hindi": "ये रिकॉर्ड केवल संयोग नहीं हैं।"
					},
					"speaker": "kai",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "사이렌과 블러드라인… 무슨 관계라도 있다는 거야?",
						"english": "Siren and Bloodline... are they connected?",
						"japanese": "サイレンとブラッドライン…何か関係があるのか？",
						"chinese": "塞壬和血脉……它们之间有什么联系吗？",
						"french": "Siren et Bloodline... y a-t-il un lien ?",
						"spanish": "¿Siren y Bloodline... están relacionados?",
						"vietnamese": "Siren và Bloodline... có liên quan gì với nhau sao?",
						"thai": "Siren กับ Bloodline... มีความเกี่ยวข้องกันเหรอ?",
						"hindi": "सायरन और ब्लडलाइन... क्या उनका कोई संबंध है?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "아마도. 지워진 과거의 흔적들이 지금의 '세레니티'를 만들었을지도.",
						"english": "Perhaps. Traces of a erased past might have created the 'Serenity' of today.",
						"japanese": "多分。消された過去の痕跡が、今の「セレニティ」を作り出したのかもしれない。",
						"chinese": "可能吧。被抹去的过去痕迹，或许造就了如今的‘宁静’。",
						"french": "Peut-être. Les traces d'un passé effacé ont peut-être créé la 'Sérénité' d'aujourd'hui.",
						"spanish": "Quizás. Las huellas de un pasado borrado podrían haber creado la 'Serenity' de hoy.",
						"vietnamese": "Có lẽ. Dấu vết của quá khứ bị xóa bỏ có thể đã tạo nên 'Serenity' của hiện tại.",
						"thai": "อาจจะ ร่องรอยของอดีตที่ถูกลบไป อาจสร้าง 'Serenity' ในวันนี้ขึ้นมาก็ได้",
						"hindi": "शायद। मिटे हुए अतीत के निशान ने ही आज की 'सेरेनिटी' बनाई होगी।"
					},
					"speaker": "kai"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "평온함 뒤에는 언제나 대가가 따르지.",
						"english": "There's always a price behind tranquility.",
						"japanese": "平穏の裏には、常に代償が伴う。",
						"chinese": "平静的背后，总有代价。",
						"french": "La tranquillité a toujours un prix.",
						"spanish": "Siempre hay un precio detrás de la tranquilidad.",
						"vietnamese": "Đằng sau sự yên bình luôn có một cái giá phải trả.",
						"thai": "ความสงบสุขมักมาพร้อมกับราคาที่ต้องจ่ายเสมอ",
						"hindi": "शांति के पीछे हमेशा एक कीमत होती है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "…더 깊이 들어가야겠어.",
						"english": "...I need to dig deeper.",
						"japanese": "…もっと深く掘り下げる必要がある。",
						"chinese": "……我需要深入调查。",
						"french": "...Je dois creuser plus profondément.",
						"spanish": "...Necesito profundizar más.",
						"vietnamese": "...Tôi cần phải đào sâu hơn nữa.",
						"thai": "...ฉันต้องเจาะลึกเข้าไปอีก",
						"hindi": "...मुझे और गहराई से जांच करनी होगी।"
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "kai",
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "더 깊이 파고들수록 위험해질 거야. 그들은 진실을 원치 않아.",
						"english": "The deeper you dig, the more dangerous it gets. They don't want the truth out.",
						"japanese": "深く掘り進むほど危険になる。彼らは真実を望んでいない。",
						"chinese": "挖得越深，就越危险。他们不希望真相大白。",
						"french": "Plus tu creuseras profondément, plus ce sera dangereux. Ils ne veulent pas la vérité.",
						"spanish": "Cuanto más profundo excaves, más peligroso se volverá. No quieren la verdad.",
						"vietnamese": "Càng đào sâu, càng nguy hiểm. Chúng không muốn sự thật bị phơi bày.",
						"thai": "ยิ่งขุดลึกลงไปเท่าไหร่ ยิ่งอันตรายเท่านั้น พวกเขาไม่ต้องการความจริง",
						"hindi": "जितना गहरा खोदोगे, उतना ही खतरनाक होगा। वे सच नहीं चाहते।"
					},
					"speaker": "kai",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이제 멈출 수 없어. 사이렌의 그림자가 너무 커.",
						"english": "Can't stop now. The Siren's shadow is too vast.",
						"japanese": "もう止められない。セイレーンの影はあまりに大きい。",
						"chinese": "已经停不下来了。海妖的阴影太大了。",
						"french": "Je ne peux plus m'arrêter. L'ombre de la Sirène est trop grande.",
						"spanish": "Ya no puedo parar. La sombra de la Sirena es demasiado inmensa.",
						"vietnamese": "Không thể dừng lại được nữa. Bóng của Siren quá lớn.",
						"thai": "หยุดตอนนี้ไม่ได้แล้ว เงาของไซเรนใหญ่เกินไป",
						"hindi": "अब रुक नहीं सकता। सायरन की छाया बहुत विशाल है।"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "…조심해. 거대한 그림자가 너를 노리고 있어.",
						"english": "...Be careful. A vast shadow is targeting you.",
						"japanese": "…気をつけろ。巨大な影がお前を狙っている。",
						"chinese": "……小心。一个巨大的阴影正盯着你。",
						"french": "...Fais attention. Une ombre immense te traque.",
						"spanish": "...Ten cuidado. Una sombra gigantesca te está acechando.",
						"vietnamese": "...Cẩn thận. Một bóng đen khổng lồ đang nhắm vào ngươi.",
						"thai": "...ระวังให้ดี เงาขนาดใหญ่กำลังจ้องเล่นงานเจ้าอยู่",
						"hindi": "...सावधान रहना। एक विशाल छाया तुम्हें निशाना बना रही है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아카이브의 심층부는 점점 더 어두워졌다. 돌아갈 길은 이미 사라졌다.",
						"english": "The deeper parts of the archive grew darker. The path back was already gone.",
						"japanese": "アーカイブの深層部はますます暗くなった。戻る道はもう消えていた。",
						"chinese": "档案库的深处变得越来越黑暗。归路已经消失了。",
						"french": "Les profondeurs des archives devenaient de plus en plus sombres. Le chemin du retour avait déjà disparu.",
						"spanish": "Las profundidades del archivo se volvieron cada vez más oscuras. El camino de regreso ya había desaparecido.",
						"vietnamese": "Phần sâu hơn của kho lưu trữ ngày càng tối tăm. Đường trở về đã biến mất.",
						"thai": "ส่วนลึกของหอจดหมายเหตุยิ่งมืดมิดลง ทางกลับหายไปแล้ว",
						"hindi": "अभिलेखागार के गहरे हिस्से और भी अंधेरे होते गए। वापस जाने का रास्ता पहले ही गायब हो चुका था।"
					},
					"speaker": "narrator"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크크크… 이것은 시작에 불과하다… {random_boss}는 사라져도…",
						"english": "Hehehe... this is just the beginning... even if {random_boss} disappears...",
						"japanese": "ククク…これは始まりに過ぎない…{random_boss}が消えても…",
						"chinese": "呵呵呵……这只是个开始……即使{random_boss}消失了……",
						"french": "Hahaha... ce n'est que le début... même si {random_boss} disparaît...",
						"spanish": "Jajaja... esto es solo el principio... incluso si {random_boss} desaparece...",
						"vietnamese": "Khà khà khà... đây chỉ là khởi đầu... dù {random_boss} có biến mất...",
						"thai": "คิกๆ... นี่เป็นแค่จุดเริ่มต้นเท่านั้น... แม้ว่า {random_boss} จะหายไปแล้วก็ตาม...",
						"hindi": "हाहाहा... यह तो बस शुरुआत है... भले ही {random_boss} गायब हो जाए..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…더 거대한 그림자가 있다는 건가.",
						"english": "...Is there a greater shadow?",
						"japanese": "…さらに巨大な影が存在するというのか。",
						"chinese": "……存在着更巨大的影子吗？",
						"french": "...Une ombre encore plus grande existerait donc ?",
						"spanish": "...¿Hay una sombra aún mayor?",
						"vietnamese": "...Có một bóng tối còn lớn hơn sao?",
						"thai": "...มีเงามืดที่ใหญ่กว่านั้นอีกหรือ?",
						"hindi": "...क्या कोई और भी बड़ी परछाई है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "정체 모를 적은 사라졌다. 그러나 그가 남긴 말은 주인공의 마음속에 또 다른 의문을 남겼다.",
						"english": "The unknown enemy vanished. But his words left another question in the protagonist's heart.",
						"japanese": "正体不明の敵は消え去った。しかし、彼が残した言葉は主人公の心に新たな疑問を残した。",
						"chinese": "不明身份的敌人消失了。但他留下的言语在主角心中又添了一份疑问。",
						"french": "L'ennemi inconnu a disparu. Mais ses mots ont laissé un autre doute dans le cœur du protagoniste.",
						"spanish": "El enemigo desconocido desapareció. Pero sus palabras dejaron otra duda en el corazón del protagonista.",
						"vietnamese": "Kẻ thù không rõ danh tính đã biến mất. Nhưng những lời hắn để lại đã gieo thêm một nghi vấn khác vào lòng nhân vật chính.",
						"thai": "ศัตรูที่ไม่ระบุตัวตนหายไปแล้ว แต่คำพูดของเขาทิ้งคำถามอื่นไว้ในใจของตัวเอก",
						"hindi": "अज्ञात शत्रु गायब हो गया। परन्तु उसके शब्दों ने नायक के हृदय में एक और प्रश्न छोड़ दिया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "사이렌의 과거는 아직 깊은 어둠 속에 잠겨 있었다.",
						"english": "Siren's past was still shrouded in deep darkness.",
						"japanese": "サイレンの過去は、未だ深い闇の中に沈んでいた。",
						"chinese": "塞壬的过去仍旧深陷于黑暗之中。",
						"french": "Le passé de Siren était encore plongé dans une obscurité profonde.",
						"spanish": "El pasado de Siren aún estaba sumido en una profunda oscuridad.",
						"vietnamese": "Quá khứ của Siren vẫn còn chìm sâu trong bóng tối.",
						"thai": "อดีตของไซเรนยังคงจมดิ่งอยู่ในความมืดมิด",
						"hindi": "साइरेन का अतीत अभी भी गहरे अंधकार में डूबा हुआ था।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "이 공간… 더 이상 기록의 방이 아니었다.",
						"english": "This space... was no longer the Chamber of Records.",
						"japanese": "この空間…もはや記録の部屋ではなかった。",
						"chinese": "这个空间……不再是记录之室了。",
						"french": "Cet espace... n'était plus la Chambre des Archives.",
						"spanish": "Este espacio... ya no era la Sala de los Registros.",
						"vietnamese": "Không gian này... không còn là Phòng Ghi Chép nữa.",
						"thai": "สถานที่แห่งนี้... ไม่ใช่ห้องบันทึกอีกต่อไปแล้ว",
						"hindi": "यह जगह... अब अभिलेखों का कक्ष नहीं थी।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "여기까지 오다니… 미련한 인간.",
						"english": "To come this far... foolish human.",
						"japanese": "ここまで来たか…愚かな人間め。",
						"chinese": "竟然来到了这里……真是愚蠢的人类。",
						"french": "Venir jusqu'ici... humain insensé.",
						"spanish": "Llegar hasta aquí... estúpido humano.",
						"vietnamese": "Ngươi lại đến được đây... con người ngu ngốc.",
						"thai": "มาถึงที่นี่ได้... มนุษย์โง่เขลา",
						"hindi": "यहाँ तक आ गया... मूर्ख इंसान।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "네가 이 모든 걸 감추고 있었군.",
						"english": "So you were hiding all of this.",
						"japanese": "お前が全てを隠していたのか。",
						"chinese": "原来你一直隐藏着这一切。",
						"french": "C'est toi qui cachais tout ça.",
						"spanish": "Así que tú estabas ocultando todo esto.",
						"vietnamese": "Thì ra ngươi đã che giấu tất cả những điều này.",
						"thai": "เจ้าปิดบังเรื่องทั้งหมดนี้ไว้สินะ",
						"hindi": "तो तुम यह सब छिपा रहे थे।"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "진실은 고통만 줄 뿐이다. 내가 너에게 평온을 주지.",
						"english": "The truth only brings pain. I will grant you peace.",
						"japanese": "真実は苦痛しかもたらさない。私が貴様に安寧を与えよう。",
						"chinese": "真相只会带来痛苦。我将赐予你平静。",
						"french": "La vérité n'apporte que douleur. Je t'accorderai la paix.",
						"spanish": "La verdad solo trae dolor. Yo te daré paz.",
						"vietnamese": "Sự thật chỉ mang lại đau khổ. Ta sẽ ban cho ngươi sự bình yên.",
						"thai": "ความจริงมีแต่จะนำมาซึ่งความเจ็บปวด ข้าจะมอบความสงบให้แก่เจ้า",
						"hindi": "सच केवल दर्द देता है। मैं तुम्हें शांति दूंगा।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "헛소리 마!",
						"english": "Nonsense!",
						"japanese": "戯言を言うな！",
						"chinese": "别胡说八道！",
						"french": "N'importe quoi !",
						"spanish": "¡Tonterías!",
						"vietnamese": "Đừng nói nhảm!",
						"thai": "อย่าพูดไร้สาระ!",
						"hindi": "बकवास मत करो!"
					}
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 모든 것을 집어삼켰다.",
						"english": "A colossal shadow devoured everything.",
						"japanese": "巨大な影がすべてを飲み込んだ。",
						"chinese": "巨大的影子吞噬了一切。",
						"french": "Une ombre colossale a tout englouti.",
						"spanish": "Una sombra gigantesca lo devoró todo.",
						"vietnamese": "Một bóng tối khổng lồ đã nuốt chửng mọi thứ.",
						"thai": "เงามืดมหึมากลืนกินทุกสิ่ง",
						"hindi": "एक विशाल परछाई ने सब कुछ निगल लिया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "포기해라. 너는 진실을 감당할 수 없어.",
						"english": "Give up. You cannot bear the truth.",
						"japanese": "諦めろ。お前は真実を背負いきれない。",
						"chinese": "放弃吧。你无法承受真相。",
						"french": "Abandonne. Tu ne peux pas supporter la vérité.",
						"spanish": "Ríndete. No puedes soportar la verdad.",
						"vietnamese": "Hãy từ bỏ đi. Ngươi không thể gánh vác sự thật đâu.",
						"thai": "ยอมแพ้ซะ เจ้าไม่อาจแบกรับความจริงได้",
						"hindi": "हार मान लो। तुम सच का सामना नहीं कर सकते।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아니… 나는 멈추지 않아.",
						"english": "No... I won't stop.",
						"japanese": "いいえ… 私は止まらない。",
						"chinese": "不……我不会停下。",
						"french": "Non... je ne m'arrêterai pas.",
						"spanish": "No... no me detendré.",
						"vietnamese": "Không... tôi sẽ không dừng lại.",
						"thai": "ไม่... ฉันจะไม่หยุด",
						"hindi": "नहीं... मैं नहीं रुकूंगा।"
					},
					"speaker": "character_any"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"도시의 폐쇄된 기록들. 그 안에 사이렌의 그림자가 숨어 있었다.",
			"모든 것은 디지털 흔적을 남긴다. 지워진 줄 알았던 진실도.",
			"카이. 과거를 좇는 자가 우연히 발견한 조각.",
			"그것은 평온을 약속한 가상세계의 뒤틀린 시작이었다."
		],
		"english": [
			"The city's sealed records. Within them, the shadow of a siren lay hidden.",
			"Everything leaves a digital trace. Even truths thought to be erased.",
			"Kai. A fragment accidentally discovered by one who chases the past.",
			"It was the twisted beginning of a virtual world that promised serenity."
		],
		"japanese": [
			"都市の閉鎖された記録。その中にサイレンの影が潜んでいた。",
			"すべてはデジタルな痕跡を残す。消されたはずの真実も。",
			"カイ。過去を追う者が偶然見つけた一片。",
			"それは平穏を約束した仮想世界の歪んだ始まりだった。"
		],
		"chinese": [
			"城市封闭的记录。其中隐藏着海妖的影子。",
			"一切都会留下数字痕迹。即使是那些被认为已抹去的真相。",
			"凯。一个追逐过去的人偶然发现的碎片。",
			"这是一个承诺宁静的虚拟世界扭曲的开端。"
		],
		"french": [
			"Les archives scellées de la ville. L'ombre d'une sirène s'y cachait.",
			"Tout laisse une trace numérique. Même les vérités que l'on croyait effacées.",
			"Kai. Un fragment découvert par hasard par celui qui poursuit le passé.",
			"C'était le début tordu d'un monde virtuel qui promettait la sérénité."
		],
		"spanish": [
			"Los registros sellados de la ciudad. La sombra de una sirena se escondía en ellos.",
			"Todo deja un rastro digital. Incluso las verdades que se creían borradas.",
			"Kai. Un fragmento descubierto accidentalmente por quien persigue el pasado.",
			"Fue el retorcido comienzo de un mundo virtual que prometía serenidad."
		],
		"vietnamese": [
			"Những ghi chép bị niêm phong của thành phố. Trong đó, bóng dáng của một nàng tiên cá ẩn mình.",
			"Mọi thứ đều để lại dấu vết kỹ thuật số. Ngay cả những sự thật tưởng chừng đã bị xóa bỏ.",
			"Kai. Một mảnh vỡ được người truy đuổi quá khứ tình cờ phát hiện.",
			"Đó là sự khởi đầu méo mó của một thế giới ảo đã hứa hẹn sự bình yên."
		],
		"thai": [
			"บันทึกที่ถูกปิดผนึกของเมือง เงาของไซเรนซ่อนอยู่ในนั้น",
			"ทุกสิ่งทิ้งร่องรอยดิจิทัลไว้ แม้แต่ความจริงที่คิดว่าถูกลบไปแล้ว",
			"ไค ชิ้นส่วนที่ผู้ไล่ล่าอดีตค้นพบโดยบังเอิญ",
			"มันคือจุดเริ่มต้นที่บิดเบี้ยวของโลกเสมือนจริงที่ให้คำมั่นถึงความสงบ"
		],
		"hindi": [
			"शहर के बंद रिकॉर्ड। उनमें एक सायरन की परछाई छिपी हुई थी।",
			"हर चीज़ एक डिजिटल निशान छोड़ती है। यहां तक ​​कि वे सच भी जिन्हें मिटा दिया गया था।",
			"काई। अतीत का पीछा करने वाले ने गलती से एक टुकड़ा खोज लिया।",
			"यह एक आभासी दुनिया की विकृत शुरुआत थी जिसने शांति का वादा किया था।"
		]
	}
} as const;
