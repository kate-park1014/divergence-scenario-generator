export const scenario_modern_pandora_44_02 = {
	"scenario_id": "modern_pandora_44_02",
	"order": 2,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"bex": {
			"id": "mon_74e24324-3f9a-4d44-9611-1da33b654ca1",
			"name": {
				"korean": "벡스",
				"english": "Bex",
				"japanese": "ベックス",
				"chinese": "贝克斯",
				"french": "Bex",
				"spanish": "Bex",
				"vietnamese": "Bex",
				"thai": "เบ็กซ์",
				"hindi": "बेक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/09dae190-ff6b-4a9d-b656-e1a2b896aa00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5cc3c77f-72e1-416e-b346-31889b3b9300/public"
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
						"korean": "도시의 모든 전광판이 일그러지고 있었다. 불안정한 데이터가 춤을 추듯.",
						"english": "All the city's billboards were glitching. Unstable data, dancing.",
						"japanese": "都市のあらゆる電光掲示板が歪んでいた。不安定なデータが踊るように。",
						"chinese": "城市的所有广告牌都在扭曲。不稳定数据，如同舞动。",
						"french": "Tous les panneaux d'affichage de la ville se déformaient. Des données instables, comme une danse.",
						"spanish": "Todas las vallas publicitarias de la ciudad estaban distorsionadas. Datos inestables, bailando.",
						"vietnamese": "Tất cả các bảng quảng cáo của thành phố đều bị méo mó. Dữ liệu không ổn định, như đang nhảy múa.",
						"thai": "ป้ายโฆษณาทุกป้ายในเมืองกำลังบิดเบี้ยว ข้อมูลที่ไม่เสถียรกำลังเต้นรำ",
						"hindi": "शहर के सभी बिलबोर्ड गड़बड़ा रहे थे। अस्थिर डेटा, नाच रहा था।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "이 디지털 혼돈… 근원을 찾아야 해.",
						"english": "This digital chaos... I must find its source.",
						"japanese": "このデジタルな混沌…その根源を見つけなければ。",
						"chinese": "这种数字混乱……我必须找到它的根源。",
						"french": "Ce chaos numérique... Je dois en trouver la source.",
						"spanish": "Este caos digital... Debo encontrar su origen.",
						"vietnamese": "Sự hỗn loạn kỹ thuật số này… Tôi phải tìm nguồn gốc của nó.",
						"thai": "ความวุ่นวายทางดิจิทัลนี้... ฉันต้องหาสาเหตุ",
						"hindi": "यह डिजिटल अराजकता... मुझे इसका स्रोत खोजना होगा।"
					},
					"type": "speech"
				},
				{
					"speaker": "bex",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "bex",
					"emotion": "base",
					"content": {
						"korean": "찾고 있는 게 뭔지 알아.",
						"english": "I know what you're looking for.",
						"japanese": "君が何を捜しているのか、分かっている。",
						"chinese": "我知道你在找什么。",
						"french": "Je sais ce que tu cherches.",
						"spanish": "Sé lo que buscas.",
						"vietnamese": "Tôi biết bạn đang tìm gì.",
						"thai": "ฉันรู้ว่าคุณกำลังมองหาอะไร",
						"hindi": "मुझे पता है तुम क्या ढूंढ रहे हो।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "bex",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "정보를 줘. 대가는….",
						"english": "Give me the info. The price...",
						"japanese": "情報を渡せ。代償は…",
						"chinese": "给我情报。代价是……",
						"french": "Donne-moi l'info. Le prix...",
						"spanish": "Dame la información. El precio...",
						"vietnamese": "Hãy cho tôi thông tin. Cái giá là…",
						"thai": "ให้ข้อมูลมา ค่าตอบแทนคือ...",
						"hindi": "मुझे जानकारी दो। कीमत..."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "네가 가진 도시 암흑가의 비공식 기록. 그거면 돼.",
						"english": "Your unofficial records of the city's underworld. That's all I need.",
						"japanese": "君が持つ都市の闇社会の非公式記録。それで十分だ。",
						"chinese": "你手中的城市地下世界的非官方记录。这就够了。",
						"french": "Tes archives non officielles de la pègre de la ville. C'est tout ce dont j'ai besoin.",
						"spanish": "Tus registros no oficiales del submundo de la ciudad. Con eso basta.",
						"vietnamese": "Những ghi chép không chính thức của bạn về thế giới ngầm của thành phố. Thế là đủ.",
						"thai": "บันทึกที่ไม่เป็นทางการของโลกใต้ดินในเมืองที่คุณมี แค่นั้นก็พอแล้ว",
						"hindi": "शहर के अंडरवर्ल्ड के तुम्हारे अनौपचारिक रिकॉर्ड। बस वही चाहिए।"
					},
					"speaker": "bex"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "내 기록은… 위험할 텐데.",
						"english": "My records... they might be dangerous.",
						"japanese": "俺の記録は…危険だろうな。",
						"chinese": "我的记录……可能会很危险。",
						"french": "Mes dossiers... pourraient être dangereux.",
						"spanish": "Mis registros... podrían ser peligrosos.",
						"vietnamese": "Hồ sơ của tôi… có lẽ sẽ nguy hiểm.",
						"thai": "บันทึกของฉัน...มันอาจจะอันตราย",
						"hindi": "मेरे रिकॉर्ड... वे खतरनाक हो सकते हैं।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "bex",
					"emotion": "base",
					"content": {
						"korean": "'잊혀진 자들의 목소리'… 들어봤나?",
						"english": "'The Voices of the Forgotten'... Have you heard of it?",
						"japanese": "「忘れられた者たちの声」…聞いたことあるか？",
						"chinese": "“被遗忘者的声音”…你听说过吗？",
						"french": "« Les Voix des Oubliés »… Vous en avez entendu parler ?",
						"spanish": "¿\"Las Voces de los Olvidados\"... Has oído hablar de ello?",
						"vietnamese": "\"Tiếng nói của những kẻ bị lãng quên\"... Ngươi đã nghe nói về nó chưa?",
						"thai": "“เสียงของเหล่าผู้ถูกลืม”... เคยได้ยินไหม?",
						"hindi": "“भूले हुए लोगों की आवाज़ें”... क्या तुमने सुना है?"
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "bex",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "base",
					"content": {
						"korean": "거래는 성사됐군. 이제 진짜 이야기를 해줄 시간이야.",
						"english": "The deal is done. Now it's time for the real story.",
						"japanese": "取引は成立したな。さて、本当の話をしてやる時だ。",
						"chinese": "交易达成了。现在是时候告诉你真相了。",
						"french": "L'affaire est conclue. Il est temps de te raconter la vraie histoire.",
						"spanish": "El trato está hecho. Ahora es el momento de la verdadera historia.",
						"vietnamese": "Giao dịch đã xong. Giờ là lúc kể cho ngươi nghe câu chuyện thật.",
						"thai": "ข้อตกลงเสร็จสิ้นแล้ว ถึงเวลาบอกเล่าเรื่องจริง",
						"hindi": "सौदा हो गया। अब असली कहानी बताने का समय है।"
					},
					"speaker": "bex",
					"type": "speech"
				},
				{
					"content": {
						"korean": "무슨 소리야.",
						"english": "What are you talking about?",
						"japanese": "何の話だ？",
						"chinese": "你在说什么？",
						"french": "De quoi tu parles ?",
						"spanish": "¿De qué hablas?",
						"vietnamese": "Ngươi đang nói gì vậy?",
						"thai": "คุณกำลังพูดถึงอะไร?",
						"hindi": "तुम क्या कह रहे हो?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "도시 네트워크에 '잊혀진 자들의 목소리'가 떠돈다는 소문이 있어.",
						"english": "There's a rumor that \"The Voices of the Forgotten\" are circulating in the city network.",
						"japanese": "都市のネットワークに「忘れられた者たちの声」が流れているという噂がある。",
						"chinese": "有传言说，“被遗忘者的声音”正在城市网络中流传。",
						"french": "On raconte que « Les Voix des Oubliés » circulent dans le réseau de la ville.",
						"spanish": "Hay un rumor de que \"Las Voces de los Olvidados\" están circulando en la red de la ciudad.",
						"vietnamese": "Có tin đồn rằng \"Tiếng nói của những kẻ bị lãng quên\" đang lan truyền trong mạng lưới thành phố.",
						"thai": "มีข่าวลือว่า “เสียงของเหล่าผู้ถูกลืม” กำลังแพร่กระจายในเครือข่ายเมือง",
						"hindi": "शहर के नेटवर्क में \"भूले हुए लोगों की आवाज़ें\" घूमने की अफवाह है।"
					},
					"emotion": "base",
					"speaker": "bex",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니, 소문이 아니야. 어떤 오래된 시스템이 다시 깨어나고 있어.",
						"english": "No, it's not a rumor. An ancient system is reawakening.",
						"japanese": "いや、噂じゃない。ある古いシステムが再び目覚めているんだ。",
						"chinese": "不，这不是谣言。一个古老的系统正在重新苏醒。",
						"french": "Non, ce n'est pas une rumeur. Un ancien système se réveille.",
						"spanish": "No, no es un rumor. Un sistema antiguo está despertando de nuevo.",
						"vietnamese": "Không, đó không phải là tin đồn. Một hệ thống cổ xưa đang thức tỉnh trở lại.",
						"thai": "ไม่ใช่ ข่าวลือหรอก ระบบเก่าแก่บางอย่างกำลังตื่นขึ้นมาอีกครั้ง",
						"hindi": "नहीं, यह अफवाह नहीं है। एक पुरानी प्रणाली फिर से जागृत हो रही है।"
					},
					"emotion": "sad",
					"speaker": "bex"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "오래된 시스템…?",
						"english": "An ancient system...?",
						"japanese": "古いシステム…？",
						"chinese": "古老的系统……？",
						"french": "Un ancien système… ?",
						"spanish": "¿Un sistema antiguo...?",
						"vietnamese": "Một hệ thống cổ xưa...?",
						"thai": "ระบบเก่าแก่...?",
						"hindi": "एक पुरानी प्रणाली...?"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "bex",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "그 시스템이 깨어나면… 무슨 일이 생겨?",
						"english": "If that system awakens... what will happen?",
						"japanese": "そのシステムが目覚めたら…どうなる？",
						"chinese": "如果那个系统苏醒了……会发生什么？",
						"french": "Si ce système se réveille… que se passera-t-il ?",
						"spanish": "Si ese sistema despierta... ¿qué pasará?",
						"vietnamese": "Nếu hệ thống đó thức tỉnh... chuyện gì sẽ xảy ra?",
						"thai": "ถ้าระบบนั้นตื่นขึ้นมา... จะเกิดอะไรขึ้น?",
						"hindi": "अगर वह प्रणाली जागृत हो गई... तो क्या होगा?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "도시 전체가 먹힐 거야. 데이터부터, 기억까지.",
						"english": "The entire city will be consumed. From its data to its memories.",
						"japanese": "都市全体が喰われるだろう。データから、記憶まで。",
						"chinese": "整个城市都会被吞噬。从数据到记忆。",
						"french": "Toute la ville sera dévorée. Des données aux souvenirs.",
						"spanish": "La ciudad entera será consumida. Desde sus datos hasta sus recuerdos.",
						"vietnamese": "Toàn bộ thành phố sẽ bị nuốt chửng. Từ dữ liệu đến ký ức.",
						"thai": "ทั้งเมืองจะถูกกลืนกิน ตั้งแต่ข้อมูลไปจนถึงความทรงจำ",
						"hindi": "पूरा शहर निगल लिया जाएगा। डेटा से लेकर यादों तक।"
					},
					"emotion": "sad",
					"speaker": "bex"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "막아야 해.",
						"english": "We have to stop it.",
						"japanese": "止めなければ。",
						"chinese": "必须阻止它。",
						"french": "Il faut l'arrêter.",
						"spanish": "Tenemos que detenerlo.",
						"vietnamese": "Phải ngăn chặn nó.",
						"thai": "เราต้องหยุดมัน",
						"hindi": "हमें इसे रोकना होगा।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "쉬운 싸움이 아닐 거야. 네 모든 것을 걸어야 할지도.",
						"english": "It won't be an easy fight. You might have to put everything on the line.",
						"japanese": "楽な戦いじゃないだろう。全てを賭けることになるかもしれない。",
						"chinese": "这不会是一场轻松的战斗。你可能需要赌上一切。",
						"french": "Ce ne sera pas un combat facile. Tu devras peut-être tout risquer.",
						"spanish": "No será una pelea fácil. Podrías tener que arriesgarlo todo.",
						"vietnamese": "Đây sẽ không phải là một cuộc chiến dễ dàng. Ngươi có thể phải đặt cược tất cả mọi thứ.",
						"thai": "นี่จะไม่ใช่การต่อสู้ที่ง่ายดาย คุณอาจจะต้องเดิมพันทุกสิ่งทุกอย่าง",
						"hindi": "यह आसान लड़ाई नहीं होगी। तुम्हें अपना सब कुछ दांव पर लगाना पड़ सकता है।"
					},
					"emotion": "base",
					"speaker": "bex"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "어둠 속에서 거대한 그림자가 일렁였다. 형체를 알 수 없는 존재가 모습을 드러냈다.",
						"english": "A colossal shadow flickered in the darkness. An unidentifiable entity emerged.",
						"japanese": "闇の中で巨大な影が揺らめいた。正体不明の存在が姿を現した。",
						"chinese": "黑暗中，一个巨大的影子晃动着。一个无法辨认的实体显现出来。",
						"french": "Une ombre colossale vacilla dans l'obscurité. Une entité inconnue apparut.",
						"spanish": "Una sombra colosal parpadeó en la oscuridad. Una entidad irreconocible emergió.",
						"vietnamese": "Một bóng đen khổng lồ chập chờn trong bóng tối. Một thực thể không rõ hình dạng hiện ra.",
						"thai": "เงาขนาดมหึมาสั่นไหวในความมืดมิด สิ่งมีชีวิตที่ระบุตัวตนไม่ได้ปรากฏกายขึ้นมา",
						"hindi": "अँधेरे में एक विशाल छाया झिलमिला उठी। एक अज्ञात इकाई प्रकट हुई।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "감히 여기까지 오다니… 건방진 필멸자.",
						"english": "How dare you come this far... Insolent mortal.",
						"japanese": "よくもここまで来たな… 生意気な定命の者め。",
						"chinese": "竟敢来到这里…… 狂妄的凡人。",
						"french": "Comment oses-tu venir si loin… Mortel insolent.",
						"spanish": "¿Cómo te atreves a llegar tan lejos...? Insolente mortal.",
						"vietnamese": "Dám cả gan đến tận đây... Kẻ phàm trần ngạo mạn.",
						"thai": "กล้าดียังไงถึงมาถึงที่นี่... เจ้ามนุษย์ผู้โอหัง",
						"hindi": "तुम्हारी हिम्मत कैसे हुई यहाँ तक आने की... ढीठ नश्वर प्राणी।"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "잊혀진 자들의 목소리를 막을 수는 없어. 그들은 깨어나고 있다.",
						"english": "You cannot stop the voices of the forgotten. They are awakening.",
						"japanese": "忘れられた者たちの声を止めることはできない。彼らは目覚めつつある。",
						"chinese": "你无法阻止被遗忘者的声音。他们正在苏醒。",
						"french": "Tu ne peux pas arrêter les voix des oubliés. Ils s'éveillent.",
						"spanish": "No puedes detener las voces de los olvidados. Están despertando.",
						"vietnamese": "Ngươi không thể ngăn chặn tiếng nói của những kẻ bị lãng quên. Chúng đang thức tỉnh.",
						"thai": "เจ้าไม่อาจหยุดยั้งเสียงของเหล่าผู้ถูกลืมได้ พวกเขากำลังตื่นขึ้น",
						"hindi": "तुम भूले हुए लोगों की आवाज़ों को रोक नहीं सकते। वे जागृत हो रहे हैं।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가 그 목소리의 일부인가?",
						"english": "Are you part of that voice?",
						"japanese": "お前はその声の一部なのか？",
						"chinese": "你是那声音的一部分吗？",
						"french": "Fais-tu partie de cette voix ?",
						"spanish": "¿Eres parte de esa voz?",
						"vietnamese": "Ngươi là một phần của tiếng nói đó sao?",
						"thai": "เจ้าเป็นส่วนหนึ่งของเสียงนั้นหรือเปล่า?",
						"hindi": "क्या तुम उस आवाज़ का हिस्सा हो?"
					},
					"emotion": "base"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "sad",
					"content": {
						"korean": "아직… 끝나지 않았다. 더 깊은 곳에서… 진실이 너를 기다린다….",
						"english": "It's not over yet... Deeper within... truth awaits you...",
						"japanese": "まだ…終わっていない。より深い場所で…真実がお前を待っている…。",
						"chinese": "还没有……结束。在更深的地方……真相在等着你……",
						"french": "Ce n'est pas encore… fini. Plus profondément… la vérité t'attend…",
						"spanish": "Aún… no ha terminado. En lo más profundo… la verdad te espera…",
						"vietnamese": "Vẫn chưa… kết thúc. Sâu hơn bên trong… sự thật đang chờ đợi ngươi…",
						"thai": "ยัง…ไม่จบสิ้น ที่ลึกกว่านั้น…ความจริงกำลังรอเจ้าอยู่…",
						"hindi": "अभी… ख़त्म नहीं हुआ है। और गहरे में… सच तुम्हारा इंतज़ार कर रहा है…।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "진실…?",
						"english": "Truth...?",
						"japanese": "真実…？",
						"chinese": "真相……？",
						"french": "La vérité…?",
						"spanish": "¿Verdad...?",
						"vietnamese": "Sự thật…?",
						"thai": "ความจริง…?",
						"hindi": "सच…?"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "승리했지만, 도시의 혼란은 여전했다. 더 깊은 미스터리가 주인공을 부르고 있었다.",
						"english": "Though victorious, the city's chaos persisted. A deeper mystery beckoned the protagonist.",
						"japanese": "勝利したが、都市の混乱は依然として続いていた。より深い謎が主人公を呼んでいた。",
						"chinese": "尽管取得了胜利，城市的混乱依旧。一个更深的谜团在召唤着主角。",
						"french": "Bien que victorieux, le chaos de la ville persistait. Un mystère plus profond appelait le protagoniste.",
						"spanish": "Aunque victorioso, el caos de la ciudad persistía. Un misterio más profundo llamaba al protagonista.",
						"vietnamese": "Mặc dù chiến thắng, sự hỗn loạn của thành phố vẫn tiếp diễn. Một bí ẩn sâu xa hơn đang vẫy gọi nhân vật chính.",
						"thai": "แม้ได้รับชัยชนะ ความโกลาหลในเมืองยังคงอยู่ ปริศนาที่ลึกซึ้งกว่ากำลังเรียกตัวเอก",
						"hindi": "हालांकि विजयी हुए, शहर में अराजकता अभी भी थी। एक गहरा रहस्य नायक को बुला रहा था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "해커 카이… 그가 다음 실마리를 쥐고 있을지도 모른다.",
						"english": "Hacker Kai... he might hold the next clue.",
						"japanese": "ハッカーのカイ… 彼が次の手がかりを握っているかもしれない。",
						"chinese": "黑客凯…… 他可能掌握着下一个线索。",
						"french": "Le hacker Kai… il pourrait détenir la prochaine clé.",
						"spanish": "El hacker Kai… él podría tener la siguiente pista.",
						"vietnamese": "Hacker Kai... hắn có thể đang giữ manh mối tiếp theo.",
						"thai": "แฮกเกอร์ไค... เขาอาจจะกุมเบาะแสต่อไป",
						"hindi": "हैकर काई... शायद उसके पास अगला सुराग हो।"
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 도시의 모든 것을 집어삼킬 듯 덮쳐왔다.",
						"english": "A colossal shadow loomed, threatening to engulf everything in the city.",
						"japanese": "巨大な影が、都市のすべてを飲み込むように覆いかぶさった。",
						"chinese": "巨大的影子笼罩而来，仿佛要吞噬城市的一切。",
						"french": "Une ombre colossale s'abattit, menaçant d'engloutir toute la ville.",
						"spanish": "Una sombra colosal se cernió, amenazando con devorar todo en la ciudad.",
						"vietnamese": "Một bóng đen khổng lồ bao trùm, như muốn nuốt chửng mọi thứ trong thành phố.",
						"thai": "เงาขนาดมหึมาปกคลุม ราวกับจะกลืนกินทุกสิ่งในเมือง",
						"hindi": "एक विशाल छाया शहर की हर चीज़ को निगलने की धमकी देते हुए छा गई।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "아무것도 바꿀 수 없어. 너희의 노력은 무의미하다.",
						"english": "Nothing can be changed. Your efforts are meaningless.",
						"japanese": "何も変えられない。お前たちの努力は無意味だ。",
						"chinese": "什么都无法改变。你们的努力毫无意义。",
						"french": "Rien ne peut être changé. Vos efforts sont vains.",
						"spanish": "Nada puede ser cambiado. Vuestros esfuerzos son inútiles.",
						"vietnamese": "Không có gì có thể thay đổi được. Nỗ lực của các ngươi là vô nghĩa.",
						"thai": "ไม่มีอะไรเปลี่ยนแปลงได้ ความพยายามของพวกเจ้าไร้ความหมาย",
						"hindi": "कुछ भी बदला नहीं जा सकता। तुम्हारे प्रयास व्यर्थ हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아니… 나는 멈추지 않아.",
						"english": "No... I won't stop.",
						"japanese": "いや… 私は止まらない。",
						"chinese": "不... 我不会停下。",
						"french": "Non... je ne m'arrêterai pas.",
						"spanish": "No... no me detendré.",
						"vietnamese": "Không... tôi sẽ không dừng lại.",
						"thai": "ไม่... ฉันจะไม่หยุด",
						"hindi": "नहीं... मैं रुकूंगा नहीं।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"메마른 사이버네틱 도시, 비는 끊이지 않았다.",
			"증폭되는 디지털 광기. 도시의 심장이 병들고 있었다.",
			"위험한 진실을 쫓아, 어둠 속 정보상 벡스를 찾아간다.",
			"그의 입술에서 흘러나올 회색 도시의 메아리는 무엇일까."
		],
		"english": [
			"In the arid, cybernetic city, the rain never ceased.",
			"Amplifying digital madness. The city's heart was ailing.",
			"Chasing a dangerous truth, I seek Vex, the shadowy informant.",
			"What echoes of the grey city will spill from his lips?"
		],
		"japanese": [
			"乾いたサイバネティック都市、雨は止むことがなかった。",
			"増幅するデジタル狂気。都市の心臓は病んでいた。",
			"危険な真実を追い、闇の情報屋ベックスを訪ねる。",
			"彼の唇から零れ落ちる、灰色の都市の残響とは何だろう。"
		],
		"chinese": [
			"在干涸的赛博城市中，雨水从未停歇。",
			"日益增长的数字狂潮。城市的心脏正在病变。",
			"追逐危险的真相，我找到了黑暗中的线人维克斯。",
			"他口中会泄露的，关于这座灰色都市的回音是什么？"
		],
		"french": [
			"Dans la ville cybernétique et aride, la pluie ne cessait jamais.",
			"Une folie numérique grandissante. Le cœur de la ville dépérissait.",
			"À la poursuite d'une dangereuse vérité, je cherche Vex, l'informateur de l'ombre.",
			"Quels échos de la ville grise s'échapperont de ses lèvres ?"
		],
		"spanish": [
			"En la árida ciudad cibernética, la lluvia nunca cesaba.",
			"Una locura digital amplificada. El corazón de la ciudad enfermaba.",
			"Persiguiendo una verdad peligrosa, busco a Vex, el informante en la sombra.",
			"¿Qué ecos de la ciudad gris brotarán de sus labios?"
		],
		"vietnamese": [
			"Trong thành phố cybernetic khô cằn, mưa không ngừng rơi.",
			"Sự điên loạn kỹ thuật số gia tăng. Trái tim của thành phố đang bệnh.",
			"Đuổi theo một sự thật nguy hiểm, tôi tìm Vex, kẻ cung cấp thông tin bí ẩn.",
			"Những tiếng vang nào của thành phố xám sẽ tuôn ra từ môi anh ta?"
		],
		"thai": [
			"ในเมืองไซเบอร์เนติกที่แห้งแล้ง ฝนไม่เคยหยุดตก",
			"ความบ้าคลั่งดิจิทัลที่ทวีความรุนแรง หัวใจของเมืองกำลังป่วย",
			"ตามล่าความจริงอันตราย ฉันตามหา Vex ผู้บอกข่าวในเงามืด",
			"เสียงสะท้อนของเมืองสีเทาจะหลั่งไหลออกมาจากริมฝีปากของเขาคืออะไร"
		],
		"hindi": [
			"सूखे, साइबरनेटिक शहर में, बारिश कभी नहीं रुकी।",
			"बढ़ता हुआ डिजिटल पागलपन। शहर का दिल बीमार पड़ रहा था।",
			"एक खतरनाक सच का पीछा करते हुए, मैं अँधेरे में छुपे सूचना देने वाले वेक्स को ढूंढता हूँ।",
			"उसके होंठों से ग्रे शहर की कौन सी गूँज निकलेगी?"
		]
	}
} as const;
