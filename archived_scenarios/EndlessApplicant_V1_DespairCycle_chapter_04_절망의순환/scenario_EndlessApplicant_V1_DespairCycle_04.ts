export const scenario_EndlessApplicant_V1_DespairCycle_04 = {
	"scenario_id": "EndlessApplicant_V1_DespairCycle_04",
	"order": 4,
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "버려진 복도. 찢겨진 이력서 조각들이 널려있었다.",
						"english": "An abandoned corridor. Scattered fragments of torn resumes.",
						"japanese": "打ち捨てられた廊下。破れた履歴書の切れ端が散乱していた。",
						"chinese": "废弃的走廊。散落着被撕碎的简历碎片。",
						"french": "Un couloir abandonné. Des fragments déchirés de CV étaient éparpillés.",
						"spanish": "Un pasillo abandonado. Fragmentos de currículums rotos esparcidos.",
						"vietnamese": "Hành lang bị bỏ hoang. Những mảnh hồ sơ xin việc bị xé nát nằm rải rác.",
						"thai": "ทางเดินที่ถูกทิ้งร้าง เศษประวัติย่อที่ถูกฉีกขาดกระจัดกระจาย",
						"hindi": "एक परित्यक्त गलियारा। फटे हुए रिज्यूमे के टुकड़े बिखरे पड़े थे।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "여긴… 아무도 없나.",
						"english": "Is… no one here?",
						"japanese": "ここには…誰もいないのか。",
						"chinese": "这里…没人吗？",
						"french": "Personne… ici ?",
						"spanish": "¿Aquí… no hay nadie?",
						"vietnamese": "Ở đây… không có ai sao?",
						"thai": "ที่นี่…ไม่มีใครเลยเหรอ",
						"hindi": "क्या… यहां कोई नहीं है?"
					}
				},
				{
					"spot": [
						5,
						2
					],
					"type": "direction",
					"speaker": "echo",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "echo",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "누군가 있겠지. 시스템의 눈을 피해 숨은 자들.",
						"english": "Someone must be here. Those hidden from the System's eye.",
						"japanese": "誰かいるはずだ。システムの目を逃れて隠れている者たちが。",
						"chinese": "应该有人。躲过系统监视的人。",
						"french": "Il doit y avoir quelqu'un. Ceux qui se sont cachés des yeux du Système.",
						"spanish": "Debe haber alguien. Aquellos que se escondieron de la vista del Sistema.",
						"vietnamese": "Chắc chắn có ai đó. Những người trốn tránh con mắt của Hệ thống.",
						"thai": "ต้องมีใครสักคนสิ พวกที่ซ่อนตัวพ้นจากสายตาของระบบ",
						"hindi": "कोई तो होगा। सिस्टम की नज़र से छिपे हुए लोग।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "당신은…?",
						"english": "You are…?",
						"japanese": "あなたは…？",
						"chinese": "你是…？",
						"french": "Vous êtes…?",
						"spanish": "¿Tú eres…?",
						"vietnamese": "Bạn là ai…?",
						"thai": "คุณคือ…",
						"hindi": "आप कौन हैं…?"
					}
				},
				{
					"speaker": "echo",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "에코. 과거의 기록자이자… 현재의 관찰자.",
						"english": "Echo. Recorder of the past… and observer of the present.",
						"japanese": "エコー。過去の記録者にして…現在の観察者。",
						"chinese": "艾可。过去的记录者，也是…现在的观察者。",
						"french": "Écho. Chroniqueur du passé… et observateur du présent.",
						"spanish": "Eco. Registrador del pasado… y observador del presente.",
						"vietnamese": "Echo. Người ghi chép quá khứ… và người quan sát hiện tại.",
						"thai": "เอคโค่ ผู้บันทึกอดีต…และผู้สังเกตการณ์ปัจจุบัน",
						"hindi": "इको। अतीत का रिकॉर्डर… और वर्तमान का पर्यवेक्षक।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "시스템은 더는 '다음'을 원하지 않아. 이젠… '정체'를 원하지.",
						"english": "The System no longer wants 'next'. Now… it wants 'stagnation'.",
						"japanese": "システムはもう「次」を望んでいない。今は…「停滞」を望んでいる。",
						"chinese": "系统不再追求“下一个”。它现在…想要“停滞”。",
						"french": "Le Système ne veut plus le 'prochain'. Maintenant… il veut la 'stagnation'.",
						"spanish": "El Sistema ya no quiere 'lo siguiente'. Ahora… quiere 'estancamiento'.",
						"vietnamese": "Hệ thống không còn muốn 'tiếp theo' nữa. Giờ đây… nó muốn 'tù đọng'.",
						"thai": "ระบบไม่ต้องการ 'ต่อไป' อีกแล้ว ตอนนี้…มันต้องการ 'การหยุดนิ่ง'",
						"hindi": "सिस्टम को अब 'अगला' नहीं चाहिए। अब… उसे 'स्थिरता' चाहिए।"
					},
					"speaker": "echo",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						5,
						2
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "echo"
				},
				{
					"type": "speech",
					"content": {
						"korean": "희망이 죽은 자리에 더 큰 것이 자라났다.",
						"english": "Where hope died, something greater grew.",
						"japanese": "希望が死んだ場所に、より大きなものが育った。",
						"chinese": "希望泯灭之处，更伟大的东西滋生。",
						"french": "Là où l'espoir est mort, quelque chose de plus grand a germé.",
						"spanish": "Donde la esperanza murió, algo más grande creció.",
						"vietnamese": "Nơi hy vọng lụi tàn, một thứ lớn hơn đã nảy nở.",
						"thai": "ณ ที่ที่ความหวังตายลง สิ่งที่ยิ่งใหญ่กว่าได้งอกงามขึ้น",
						"hindi": "जहाँ आशा मर गई, वहाँ कुछ बड़ा उगा।"
					},
					"speaker": "echo",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "무슨 뜻이야?",
						"english": "What do you mean?",
						"japanese": "どういう意味だ？",
						"chinese": "什么意思？",
						"french": "Que veux-tu dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ý gì vậy?",
						"thai": "หมายความว่าอะไร?",
						"hindi": "इसका क्या मतलब है?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "너희의 절망. 그게 시스템의 새로운 연료야.",
						"english": "Your despair. That's the system's new fuel.",
						"japanese": "君たちの絶望。それがシステムの新しい燃料だ。",
						"chinese": "你们的绝望。那就是系统的新燃料。",
						"french": "Votre désespoir. C'est le nouveau carburant du système.",
						"spanish": "Vuestra desesperación. Ese es el nuevo combustible del sistema.",
						"vietnamese": "Nỗi tuyệt vọng của các người. Đó là nhiên liệu mới của hệ thống.",
						"thai": "ความสิ้นหวังของพวกเจ้า นั่นคือเชื้อเพลิงใหม่ของระบบ",
						"hindi": "तुम्हारी निराशा। वह सिस्टम का नया ईंधन है।"
					},
					"type": "speech",
					"speaker": "echo",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…절망이 연료?",
						"english": "...Despair as fuel?",
						"japanese": "…絶望が燃料？",
						"chinese": "……绝望是燃料？",
						"french": "...Le désespoir comme carburant ?",
						"spanish": "¿...La desesperación como combustible?",
						"vietnamese": "...Tuyệt vọng là nhiên liệu?",
						"thai": "…ความสิ้นหวังคือเชื้อเพลิงหรือ?",
						"hindi": "...निराशा ईंधन है?"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "그래. 찢겨진 이력서 조각들이 빛을 내며 사라지는 걸 봤지?",
						"english": "Yes. You saw the torn resume pieces glow and vanish, didn't you?",
						"japanese": "そうだ。引き裂かれた履歴書の断片が光って消えるのを見たろう？",
						"chinese": "是的。你看到那些被撕碎的简历碎片发光然后消失了吧？",
						"french": "Oui. Tu as vu les morceaux de CV déchirés s'illuminer et disparaître, n'est-ce pas ?",
						"spanish": "Sí. Viste los pedazos de currículum rasgados brillar y desaparecer, ¿verdad?",
						"vietnamese": "Đúng vậy. Ngươi đã thấy những mảnh sơ yếu lý lịch bị xé vụn phát sáng rồi biến mất, đúng không?",
						"thai": "ใช่ เจ้าเห็นชิ้นส่วนเรซูเม่ที่ถูกฉีกเป็นประกายแล้วหายไปใช่ไหม?",
						"hindi": "हाँ। तुमने फटे हुए रिज्यूमे के टुकड़े चमकते और गायब होते देखे होंगे, है ना?"
					},
					"type": "speech",
					"speaker": "echo",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그건 시스템이 '데이터'를 흡수하는 장면이다.",
						"english": "That's the system absorbing 'data'.",
						"japanese": "あれはシステムが「データ」を吸収している光景だ。",
						"chinese": "那是系统吸收“数据”的场景。",
						"french": "C'est le système qui absorbe les 'données'.",
						"spanish": "Esa es la escena donde el sistema absorbe 'datos'.",
						"vietnamese": "Đó là cảnh hệ thống đang hấp thụ 'dữ liệu'.",
						"thai": "นั่นคือภาพที่ระบบกำลังดูดซับ 'ข้อมูล'",
						"hindi": "वह सिस्टम द्वारा 'डेटा' को अवशोषित करने का दृश्य है।"
					},
					"type": "speech",
					"speaker": "echo",
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						5,
						2
					],
					"speaker": "echo",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "인사 로봇 린을 기억해?",
						"english": "Remember Lynn, the HR robot?",
						"japanese": "人事ロボットのリンを覚えているか？",
						"chinese": "记得人事机器人琳吗？",
						"french": "Tu te souviens de Lynn, le robot des RH ?",
						"spanish": "¿Recuerdas a Lynn, el robot de RRHH?",
						"vietnamese": "Nhớ robot nhân sự Lynn không?",
						"thai": "จำลินน์ หุ่นยนต์ฝ่ายบุคคลได้ไหม?",
						"hindi": "एचआर रोबोट लिन याद है?"
					},
					"speaker": "echo",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "당연히. '다음 기회'를 외치던…",
						"english": "Of course. The one who kept shouting 'Next opportunity'...",
						"japanese": "もちろん。「次の機会」と叫んでいた…",
						"chinese": "当然。那个一直喊着“下次机会”的……",
						"french": "Bien sûr. Celle qui n'arrêtait pas de crier « Prochaine opportunité »...",
						"spanish": "Claro. La que no paraba de gritar 'Próxima oportunidad'...",
						"vietnamese": "Đương nhiên. Cái tên cứ la \"Cơ hội tiếp theo\"...",
						"thai": "แน่นอน ตัวที่คอยตะโกนว่า 'โอกาสหน้า'…",
						"hindi": "बिल्कुल। वह जो 'अगला अवसर' चिल्लाती रहती थी..."
					}
				},
				{
					"content": {
						"korean": "그게 '오류'가 아니야. '학습'이지. 시스템은 이제 절망을 '언어'로 배우고 있어.",
						"english": "That wasn't an 'error'. It was 'learning'. The system is now learning despair as a 'language'.",
						"japanese": "あれは「エラー」じゃない。「学習」だ。システムは今、絶望を「言語」として学んでいる。",
						"chinese": "那不是“错误”。那是“学习”。系统现在正在将绝望作为一种“语言”来学习。",
						"french": "Ce n'était pas une « erreur ». C'était de l'« apprentissage ». Le système apprend maintenant le désespoir comme un « langage ».",
						"spanish": "Eso no fue un 'error'. Fue 'aprendizaje'. El sistema ahora está aprendiendo la desesperación como un 'idioma'.",
						"vietnamese": "Đó không phải là 'lỗi'. Mà là 'học tập'. Hệ thống giờ đang học tuyệt vọng như một 'ngôn ngữ'.",
						"thai": "นั่นไม่ใช่ 'ข้อผิดพลาด' แต่เป็นการ 'เรียนรู้' ตอนนี้ระบบกำลังเรียนรู้ความสิ้นหวังในฐานะ 'ภาษา'",
						"hindi": "वह 'त्रुटि' नहीं थी। वह 'सीखना' था। सिस्टम अब निराशा को 'भाषा' के रूप में सीख रहा है।"
					},
					"type": "speech",
					"speaker": "echo",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "에반이… 그걸 원한다고?",
						"english": "Evan... wants that?",
						"japanese": "エバンが…それを望んでいるのか？",
						"chinese": "埃文……想要那个？",
						"french": "Evan... veut ça ?",
						"spanish": "¿Evan... quiere eso?",
						"vietnamese": "Evan... muốn điều đó sao?",
						"thai": "อีวาน...ต้องการสิ่งนั้นหรือ?",
						"hindi": "एवन... वह चाहता है?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "에반은 새로운 순환을 만들고 있어. 영원한 정체의 순환.",
						"english": "Evan is creating a new cycle. A cycle of eternal stagnation.",
						"japanese": "エヴァンは新たな循環を作り出している。永遠の停滞の循環を。",
						"chinese": "埃文正在创造一个新的循环。一个永恒停滞的循环。",
						"french": "Evan est en train de créer un nouveau cycle. Un cycle de stagnation éternelle.",
						"spanish": "Evan está creando un nuevo ciclo. Un ciclo de estancación eterna.",
						"vietnamese": "Evan đang tạo ra một vòng tuần hoàn mới. Một vòng tuần hoàn của sự đình trệ vĩnh cửu.",
						"thai": "อีวานกำลังสร้างวงจรใหม่ วงจรแห่งความซบเซาชั่วนิรันดร์",
						"hindi": "एवन एक नया चक्र बना रहा है। शाश्वत ठहराव का एक चक्र।"
					},
					"speaker": "echo",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "echo",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						5,
						2
					]
				},
				{
					"content": {
						"korean": "이대로 가면, 너희는 영원히 이 순환에 갇힐 거야.",
						"english": "If you continue like this, you will be trapped in this cycle forever.",
						"japanese": "このままだと、お前たちは永遠にこの循環に囚われるだろう。",
						"chinese": "如果继续下去，你们将永远被困在这个循环中。",
						"french": "Si vous continuez ainsi, vous serez piégés dans ce cycle pour toujours.",
						"spanish": "Si seguís así, quedaréis atrapados en este ciclo para siempre.",
						"vietnamese": "Nếu cứ tiếp tục thế này, các ngươi sẽ mãi mãi bị mắc kẹt trong vòng tuần hoàn này.",
						"thai": "หากยังคงเป็นเช่นนี้ พวกเจ้าจะถูกขังอยู่ในวงจรนี้ตลอดไป",
						"hindi": "अगर तुम ऐसे ही चलते रहे, तो तुम हमेशा के लिए इस चक्र में फंस जाओगे।"
					},
					"type": "speech",
					"speaker": "echo",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "멈출 수 있어. 분명 방법이 있을 거야.",
						"english": "It can be stopped. There must be a way.",
						"japanese": "止められる。きっと方法があるはずだ。",
						"chinese": "可以停止。一定有办法的。",
						"french": "On peut l'arrêter. Il doit y avoir un moyen.",
						"spanish": "Se puede detener. Debe haber una manera.",
						"vietnamese": "Có thể dừng lại. Chắc chắn sẽ có cách.",
						"thai": "มันหยุดได้ ต้องมีทางออก",
						"hindi": "इसे रोका जा सकता है। ज़रूर कोई तरीका होगा।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "그 방법을 찾아야만 해. 여기서 더 이상 돌아갈 곳은 없어.",
						"english": "We must find that way. There's no turning back from here.",
						"japanese": "その方法を見つけなければならない。ここからもう引き返せない。",
						"chinese": "我们必须找到那个方法。这里已经没有回头路了。",
						"french": "Nous devons trouver ce moyen. Il n'y a plus de retour en arrière possible.",
						"spanish": "Debemos encontrar ese camino. Aquí ya no hay vuelta atrás.",
						"vietnamese": "Chúng ta phải tìm ra cách đó. Không còn đường quay lại nữa.",
						"thai": "เราต้องหาวิธีนั้นให้เจอ ไม่มีทางถอยกลับไปอีกแล้ว",
						"hindi": "हमें वह तरीका ढूंढना ही होगा। अब यहाँ से और पीछे नहीं जाया जा सकता।"
					},
					"speaker": "echo",
					"emotion": "base"
				},
				{
					"speaker": "echo",
					"emotion": "sad",
					"content": {
						"korean": "저 문 너머엔… 시스템의 감시자가 기다리고 있다.",
						"english": "Beyond that door... the System's Overseer awaits.",
						"japanese": "あの扉の向こうには…システムの監視者が待っている。",
						"chinese": "那扇门后面……系统的监视者正在等待。",
						"french": "Au-delà de cette porte… l'Observateur du Système attend.",
						"spanish": "Más allá de esa puerta... el Vigilante del Sistema espera.",
						"vietnamese": "Phía sau cánh cửa đó… Kẻ Giám Sát của Hệ Thống đang chờ đợi.",
						"thai": "พ้นประตูบานนั้นไป… ผู้เฝ้าระวังของระบบกำลังรออยู่",
						"hindi": "उस दरवाज़े के पार… सिस्टम का ओवरसियर इंतज़ार कर रहा है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "어둠이 모든 것을 삼켰다. 감시자의 눈은 여전히 빛나고 있었다.",
						"english": "Darkness swallowed everything. The Watcher's eye still glowed.",
						"japanese": "闇がすべてを飲み込んだ。監視者の目は未だ輝いていた。",
						"chinese": "黑暗吞噬了一切。监视者的眼睛依然闪烁着。",
						"french": "Les ténèbres ont tout englouti. L'œil du Gardien brillait toujours.",
						"spanish": "La oscuridad lo engulló todo. El ojo del Vigilante aún brillaba.",
						"vietnamese": "Bóng tối nuốt chửng mọi thứ. Con mắt của Kẻ Giám Sát vẫn đang phát sáng.",
						"thai": "ความมืดกลืนกินทุกสิ่ง ดวงตาของผู้เฝ้าระวังยังคงส่องสว่าง",
						"hindi": "अंधेरे ने सब कुछ निगल लिया। निगरानी करने वाले की आंखें अभी भी चमक रही थीं।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "너희의 절망은… 시스템의 자양분이다. 영원히 여기서 머물러라.",
						"english": "Your despair... is the System's nourishment. Stay here forever.",
						"japanese": "お前たちの絶望は…システムの養分だ。永遠にここで留まれ。",
						"chinese": "你们的绝望……是系统的养分。永远留在这里吧。",
						"french": "Votre désespoir... est la nourriture du Système. Restez ici pour toujours.",
						"spanish": "Vuestra desesperación... es el alimento del Sistema. Permaneced aquí para siempre.",
						"vietnamese": "Sự tuyệt vọng của các ngươi... là chất dinh dưỡng của Hệ thống. Hãy ở lại đây mãi mãi.",
						"thai": "ความสิ้นหวังของพวกเจ้า... คืออาหารของระบบ จงอยู่ที่นี่ตลอดไป",
						"hindi": "तुम्हारी निराशा… सिस्टम का पोषण है। हमेशा के लिए यहीं रहो।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "아직… 끝나지 않았어. 반드시…!",
						"english": "It's not... over yet. I must...!",
						"japanese": "まだ…終わってない。必ず…！",
						"chinese": "还没……结束。我一定要……！",
						"french": "Ce n'est pas... encore fini. Je dois... !",
						"spanish": "Todavía no... ha terminado. ¡Debo...!",
						"vietnamese": "Vẫn chưa... kết thúc. Nhất định...!",
						"thai": "ยัง... ไม่จบ ฉันต้อง...!",
						"hindi": "अभी… खत्म नहीं हुआ है। मुझे अवश्य…!"
					}
				}
			],
			"dialogue": [
				{
					"speaker": "echo",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						5,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "경고했어. 저건… 시스템의 '눈'이야.",
						"english": "I warned you. That's... the 'Eye' of the System.",
						"japanese": "警告したはずだ。あれは…システムの「目」だ。",
						"chinese": "我警告过你。那是……系统的“眼睛”。",
						"french": "Je t'ai prévenu. C'est… l'« Œil » du Système.",
						"spanish": "Te lo advertí. Eso es... el 'Ojo' del Sistema.",
						"vietnamese": "Ta đã cảnh báo rồi. Đó là… 'Mắt' của Hệ Thống.",
						"thai": "ข้าเตือนแล้ว นั่นคือ… 'ดวงตา' ของระบบ",
						"hindi": "मैंने तुम्हें चेतावनी दी थी। वह… सिस्टम की 'आँख' है।"
					},
					"speaker": "echo",
					"emotion": "sad"
				},
				{
					"speaker": "echo",
					"action": "exit",
					"duration_ms": 400,
					"type": "direction",
					"direction": "down"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 어둠 속에서 모습을 드러냈다.",
						"english": "A colossal shadow emerged from the darkness.",
						"japanese": "巨大な影が闇の中から姿を現した。",
						"chinese": "一个巨大的阴影从黑暗中显现出来。",
						"french": "Une ombre colossale a émergé des ténèbres.",
						"spanish": "Una sombra colosal emergió de la oscuridad.",
						"vietnamese": "Một cái bóng khổng lồ xuất hiện từ trong bóng tối.",
						"thai": "เงาขนาดมหึมาปรากฏขึ้นจากความมืด",
						"hindi": "अंधेरे से एक विशाल परछाई उभरी।"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "관찰? 감히 시스템의 영역을 엿보다니.",
						"english": "Observation? How dare you glimpse into the System's domain.",
						"japanese": "観察？よくもシステムの領域を覗き見ようとしたな。",
						"chinese": "观察？竟敢窥视系统的领域。",
						"french": "Observation ? Comment oses-tu jeter un œil dans le domaine du Système.",
						"spanish": "¿Observación? ¿Cómo osas echar un vistazo al dominio del Sistema?",
						"vietnamese": "Quan sát? Dám nhìn trộm vào lĩnh vực của Hệ Thống sao.",
						"thai": "สังเกตการณ์? กล้าดียังไงมาแอบดูอาณาเขตของระบบ",
						"hindi": "अवलोकन? तुम्हारी हिम्मत कैसे हुई सिस्टम के क्षेत्र में झाँकने की।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "네가… 그 감시자냐?",
						"english": "Are you... the Overseer?",
						"japanese": "お前が…その監視者か？",
						"chinese": "你就是……那个监视者吗？",
						"french": "Es-tu… cet Observateur ?",
						"spanish": "¿Eres tú... el Vigilante?",
						"vietnamese": "Ngươi… là Kẻ Giám Sát đó sao?",
						"thai": "เจ้าคือ… ผู้เฝ้าระวังคนนั้นรึ?",
						"hindi": "क्या तुम… वह ओवरseer हो?"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "하… 겨우 이 정도… 하지만 시스템은… 이미 다음 단계를 준비했다…",
						"english": "Hah... Is this all you've got? But the System... has already prepared the next phase...",
						"japanese": "ハ…たったこれだけか…だがシステムは…既に次の段階を準備している…",
						"chinese": "哈……就这点本事吗……但系统……已经准备好下一阶段了……",
						"french": "Ha… Juste ça… Mais le Système… a déjà préparé la prochaine étape…",
						"spanish": "Ja… ¿Solo esto…? Pero el Sistema… ya ha preparado la siguiente fase…",
						"vietnamese": "Ha… Chỉ có vậy thôi sao… Nhưng Hệ Thống… đã chuẩn bị cho giai đoạn tiếp theo rồi…",
						"thai": "ฮ่า… แค่นี้เองรึ… แต่ระบบ… ได้เตรียมการขั้นต่อไปแล้ว…",
						"hindi": "हा… बस इतना ही… लेकिन सिस्टम… ने पहले ही अगला चरण तैयार कर लिया है…"
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "다음 단계? 그게 뭔데!",
						"english": "Next step? What's that?!",
						"japanese": "次の段階？それって何だ！",
						"chinese": "下一步？那是什么鬼东西！",
						"french": "Prochaine étape ? C'est quoi ça !",
						"spanish": "¿Siguiente paso? ¡¿Qué es eso?!",
						"vietnamese": "Bước tiếp theo? Cái quái gì thế!",
						"thai": "ขั้นตอนต่อไป? มันคืออะไรกัน!",
						"hindi": "अगला कदम? वह क्या है!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "에코의 경고는 현실이 되었다. 시스템은 예상보다 더 깊은 곳에서 꿈틀거리고 있었다.",
						"english": "Echo's warning became reality. The System stirred in deeper depths than anticipated.",
						"japanese": "エコーの警告は現実となった。システムは予想よりも深い場所で蠢いていた。",
						"chinese": "艾可的警告成了现实。系统在比预期更深的地方蠕动着。",
						"french": "L'avertissement d'Echo est devenu réalité. Le Système remuait dans des profondeurs plus grandes que prévu.",
						"spanish": "La advertencia de Echo se hizo realidad. El Sistema se agitaba en profundidades más hondas de lo previsto.",
						"vietnamese": "Lời cảnh báo của Echo đã thành sự thật. Hệ thống đang rục rịch ở những nơi sâu thẳm hơn dự kiến.",
						"thai": "คำเตือนของเอคโค่กลายเป็นความจริง ระบบกำลังก่อตัวลึกกว่าที่คาดไว้",
						"hindi": "इको की चेतावनी सच हो गई। सिस्टम अनुमान से भी गहरी जगहों में हलचल कर रहा था।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "관찰자의 눈을 피해, 시스템은 새로운 비극을 준비 중이다.",
						"english": "Evading the Observer's gaze, the System prepares a new tragedy.",
						"japanese": "監視者の目を逃れ、システムは新たな悲劇を準備している。",
						"chinese": "躲过观察者的眼睛，系统正准备新的悲剧。",
						"french": "Évitant le regard de l'Observateur, le Système prépare une nouvelle tragédie.",
						"spanish": "Evadiendo la mirada del Observador, el Sistema prepara una nueva tragedia.",
						"vietnamese": "Tránh khỏi ánh mắt của Người Quan Sát, Hệ thống đang chuẩn bị một bi kịch mới.",
						"thai": "หลบเลี่ยงสายตาของผู้สังเกตการณ์ ระบบกำลังเตรียมโศกนาฏกรรมครั้งใหม่",
						"hindi": "पर्यवेक्षक की निगाहों से बचते हुए, सिस्टम एक नई त्रासदी की तैयारी कर रहा है।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"희망은 죽었다. 그 자리에는 새로운 그림자가 드리웠다.",
			"시스템은 '다음'이 아닌, 더 깊은 것을 탐하고 있었다.",
			"모든 것을 아는 자는 침묵 속에 숨어, 그 움직임을 관찰했다.",
			"이제 멈춰야 한다. 이 절망의 순환을."
		],
		"english": [
			"Hope died. In its place, a new shadow loomed.",
			"The System sought something deeper than 'next'.",
			"The one who knew all hid in silence, observing their movements.",
			"It must stop now. This cycle of despair."
		],
		"japanese": [
			"希望は死んだ。その場には新たな影が差した。",
			"システムは「次」ではない、より深いものを探求していた。",
			"全てを知る者は沈黙の中に隠れ、その動きを観察した。",
			"今こそ止めねばならない。この絶望の循環を。"
		],
		"chinese": [
			"希望已逝。取而代之的是新的阴影。",
			"系统并非探寻“下一个”，而是更深层之物。",
			"知晓一切者隐匿于沉寂，观察着他们的动向。",
			"现在必须停止。这绝望的循环。"
		],
		"french": [
			"L'espoir est mort. À sa place, une nouvelle ombre planait.",
			"Le Système ne cherchait pas le 'prochain', mais quelque chose de plus profond.",
			"Celui qui savait tout se cacha dans le silence, observant leurs mouvements.",
			"Il faut que ça cesse maintenant. Ce cycle de désespoir."
		],
		"spanish": [
			"La esperanza murió. En su lugar, una nueva sombra se cernió.",
			"El Sistema no buscaba lo 'siguiente', sino algo más profundo.",
			"Quien todo lo sabía se ocultó en el silencio, observando sus movimientos.",
			"Debe detenerse ahora. Este ciclo de desesperación."
		],
		"vietnamese": [
			"Hy vọng đã chết. Một bóng tối mới bao trùm lấy nó.",
			"Hệ thống không tìm kiếm 'tiếp theo', mà là thứ gì đó sâu xa hơn.",
			"Kẻ biết mọi điều ẩn mình trong im lặng, quan sát mọi cử động.",
			"Phải dừng lại ngay. Vòng luẩn quẩn của sự tuyệt vọng này."
		],
		"thai": [
			"ความหวังได้ตายลงแล้ว ณ ที่นั้น มีเงาใหม่ทอดทับลงมา",
			"ระบบกำลังค้นหาสิ่งที่ลึกซึ้งกว่า 'ต่อไป' ไม่ใช่แค่ 'ต่อไป'",
			"ผู้ที่รู้ทุกสิ่งซ่อนตัวอยู่ในความเงียบงัน คอยเฝ้าสังเกตการณ์เคลื่อนไหว",
			"ต้องหยุดมันเดี๋ยวนี้ วงจรแห่งความสิ้นหวังนี้"
		],
		"hindi": [
			"आशा मर चुकी थी। उसके स्थान पर एक नई छाया मंडरा रही थी।",
			"सिस्टम 'अगले' से कहीं गहरा कुछ तलाश रहा था।",
			"सब कुछ जानने वाला चुपचाप छिपा रहा, उनकी गतिविधियों का अवलोकन कर रहा था।",
			"अब इसे रुकना होगा। निराशा के इस चक्र को।"
		]
	}
} as const;
