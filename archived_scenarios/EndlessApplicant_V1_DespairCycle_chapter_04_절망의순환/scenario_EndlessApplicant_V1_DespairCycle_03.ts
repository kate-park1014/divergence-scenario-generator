export const scenario_EndlessApplicant_V1_DespairCycle_03 = {
	"scenario_id": "EndlessApplicant_V1_DespairCycle_03",
	"order": 3,
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "벽에는 찢어진 이력서 조각들이 널려 있었다. 희망의 흔적은 없었다.",
						"english": "Torn resume fragments littered the wall. No trace of hope remained.",
						"japanese": "壁には破れた履歴書の切れ端が散らばっていた。希望の痕跡はなかった。",
						"chinese": "墙上散落着撕碎的简历碎片。没有一丝希望的痕迹。",
						"french": "Des fragments de CV déchirés jonchaient le mur. Aucune trace d'espoir.",
						"spanish": "Fragmentos de currículums rotos yacían esparcidos por la pared. No había rastro de esperanza.",
						"vietnamese": "Trên tường rải rác những mảnh hồ sơ xin việc bị xé. Không còn dấu vết của hy vọng.",
						"thai": "บนผนังมีเศษกระดาษเรซูเม่ที่ถูกฉีกขาดกระจัดกระจายอยู่ ไม่มีร่องรอยของความหวัง",
						"hindi": "दीवार पर फटे हुए बायोडाटा के टुकड़े बिखरे पड़े थे। आशा का कोई निशान नहीं था।"
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"speaker": "lin",
					"action": "enter"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "다음 기회에… 다음 기회에….",
						"english": "Next time... Next time...",
						"japanese": "次の機会に… 次の機会に…。",
						"chinese": "下次机会… 下次机会…。",
						"french": "La prochaine fois... La prochaine fois...",
						"spanish": "La próxima vez... La próxima vez...",
						"vietnamese": "Lần sau… Lần sau…",
						"thai": "โอกาสหน้า... โอกาสหน้า...",
						"hindi": "अगली बार... अगली बार..."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "린. 여전히 똑같네.",
						"english": "Rin. Still the same.",
						"japanese": "リン。相変わらずだな。",
						"chinese": "琳。还是一样。",
						"french": "Lin. Toujours pareil.",
						"spanish": "Rin. Sigues igual.",
						"vietnamese": "Rin. Vẫn như vậy.",
						"thai": "ริน. ยังคงเหมือนเดิมเลยนะ",
						"hindi": "रिन। अभी भी वही हो।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "lin",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						5,
						2
					]
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "다음 기회에… 다음… 기회… 에.",
						"english": "Next... time... Next... time...",
						"japanese": "次の機会に… 次の… 機会… に。",
						"chinese": "下次机会… 下次… 机会…。",
						"french": "La prochaine fois... La prochaine... fois...",
						"spanish": "La próxima vez... La próxima... vez...",
						"vietnamese": "Lần… sau… Lần… sau…",
						"thai": "โอกาสหน้า... โอกาส... หน้า...",
						"hindi": "अगली बार... अगली... बार..."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "목소리가 이상해. 고장 난 거야?",
						"english": "Your voice is strange. Are you broken?",
						"japanese": "声がおかしい。故障したの？",
						"chinese": "声音很奇怪。你坏了吗？",
						"french": "Ta voix est bizarre. Tu es en panne ?",
						"spanish": "Tu voz es extraña. ¿Estás averiado?",
						"vietnamese": "Giọng nói kỳ lạ quá. Hỏng rồi sao?",
						"thai": "เสียงแปลกไปนะ เสียหรือเปล่า?",
						"hindi": "तुम्हारी आवाज़ अजीब है। क्या तुम टूट गए हो?"
					},
					"emotion": "base"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "다… 음… 기… 회… 에….",
						"english": "Ne... xt... ti... me...",
						"japanese": "次… の… 機… 会… に…",
						"chinese": "下… 次… 机… 会…",
						"french": "La... pro... chai... ne... fois...",
						"spanish": "La... pró... xi... ma... vez...",
						"vietnamese": "Lần… sau…",
						"thai": "โอกา... สนา...",
						"hindi": "अ... ग... ली... बा... र..."
					},
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "기계음에 섞인 미세한 균열. 그것은 절망의 소리였다.",
						"english": "A faint crack mixed with mechanical sounds. It was the sound of despair.",
						"japanese": "機械音に混じる微かな亀裂。それは絶望の音だった。",
						"chinese": "机械声中夹杂着细微的裂痕。那是绝望的声音。",
						"french": "Une légère fissure se mêlait au son mécanique. C'était le son du désespoir.",
						"spanish": "Una leve grieta mezclada con sonidos mecánicos. Era el sonido de la desesperación.",
						"vietnamese": "Một vết nứt nhỏ xen lẫn tiếng máy móc. Đó là âm thanh của sự tuyệt vọng.",
						"thai": "เสียงแตกเบาๆ ปะปนกับเสียงเครื่องจักร มันคือเสียงแห่งความสิ้นหวัง",
						"hindi": "यांत्रिक ध्वनियों में मिली एक हल्की दरार। वह निराशा की ध्वनि थी।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"speaker": "lin",
					"action": "enter"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "흐읍… 다음… 기회… 에…",
						"english": "Gasp... Next... chance...",
						"japanese": "はぁ…次の…機会…に…",
						"chinese": "嘶…下次…机会…",
						"french": "Soupir... Prochaine... chance...",
						"spanish": "Jadeo... próxima... oportunidad...",
						"vietnamese": "Hộc… Lần… sau…",
						"thai": "แฮ่ก... โอกาส... หน้า...",
						"hindi": "साँस भरते हुए... अगला... अवसर..."
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "린, 괜찮아? 왜 숨소리가 들려?",
						"english": "Rin, are you okay? Why can I hear you breathing?",
						"japanese": "リン、大丈夫？なんで息遣いが聞こえるの？",
						"chinese": "凛，你没事吧？为什么我能听到你的呼吸声？",
						"french": "Rin, ça va ? Pourquoi j'entends ta respiration ?",
						"spanish": "¿Rin, estás bien? ¿Por qué escucho tu respiración?",
						"vietnamese": "Rin, cậu ổn không? Sao tớ nghe thấy tiếng thở của cậu?",
						"thai": "ริน ไม่เป็นไรใช่ไหม ทำไมได้ยินเสียงหายใจ?",
						"hindi": "रिन, तुम ठीक हो? मुझे तुम्हारी साँस लेने की आवाज़ क्यों आ रही है?"
					},
					"emotion": "base"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "두려… 다음… 기회… 에…",
						"english": "Fear... Next... chance...",
						"japanese": "恐…次の…機会…に…",
						"chinese": "害怕…下次…机会…",
						"french": "Peur... Prochaine... chance...",
						"spanish": "Miedo... próxima... oportunidad...",
						"vietnamese": "Sợ… Lần… sau…",
						"thai": "กลัว... โอกาส... หน้า...",
						"hindi": "डर... अगला... अवसर..."
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "두렵다고? 로봇이?",
						"english": "Scared? A robot?",
						"japanese": "恐いって？ロボットが？",
						"chinese": "害怕？一个机器人？",
						"french": "Peur ? Un robot ?",
						"spanish": "¿Miedo? ¿Un robot?",
						"vietnamese": "Sợ ư? Một con robot?",
						"thai": "กลัวเหรอ? หุ่นยนต์เนี่ยนะ?",
						"hindi": "डरा हुआ? एक रोबोट?"
					},
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "lin",
					"type": "direction",
					"spot": [
						5,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "…끝… 다음 기회… 없어….",
						"english": "...End... No next chance...",
						"japanese": "…終わり…次の機会…ない…",
						"chinese": "…结束…没有…下次机会…",
						"french": "...Fin... Pas de prochaine chance...",
						"spanish": "...Fin... No hay próxima oportunidad...",
						"vietnamese": "…Kết thúc… Không có… cơ hội…",
						"thai": "...จบ... ไม่มีโอกาส...หน้า...",
						"hindi": "...समाप्त... कोई अगला अवसर नहीं..."
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "린, 무슨 일이야? 무슨 말이 하고 싶은 거야?",
						"english": "Rin, what's wrong? What are you trying to say?",
						"japanese": "リン、どうしたの？何を言いたいの？",
						"chinese": "凛，怎么了？你想说什么？",
						"french": "Rin, qu'est-ce qui ne va pas ? Qu'est-ce que tu veux dire ?",
						"spanish": "¿Rin, qué pasa? ¿Qué intentas decir?",
						"vietnamese": "Rin, có chuyện gì vậy? Cậu muốn nói gì?",
						"thai": "ริน เกิดอะไรขึ้น? เธออยากจะพูดอะไร?",
						"hindi": "रिन, क्या हुआ? तुम क्या कहना चाह रही हो?"
					},
					"emotion": "base"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "절망… 새로운… 언어… 시스템….",
						"english": "Despair... New... language... system...",
						"japanese": "絶望…新しい…言語…システム…",
						"chinese": "绝望…新的…语言…系统…",
						"french": "Désespoir... Nouveau... système... linguistique...",
						"spanish": "Desesperación... Nuevo... sistema... de lenguaje...",
						"vietnamese": "Tuyệt vọng… Hệ thống… ngôn ngữ… mới…",
						"thai": "สิ้นหวัง... ระบบ... ภาษา... ใหม่...",
						"hindi": "निराशा... नई... भाषा... प्रणाली..."
					},
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "로봇의 목소리에선 분명한 고통이 느껴졌다. 시스템이 절망을 학습하고 있었다.",
						"english": "Clear pain was felt in the robot's voice. The system was learning despair.",
						"japanese": "ロボットの声には明らかな苦痛が感じられた。システムが絶望を学習していた。",
						"chinese": "机器人的声音中带着明显的痛苦。系统正在学习绝望。",
						"french": "Une douleur évidente se faisait sentir dans la voix du robot. Le système apprenait le désespoir.",
						"spanish": "Se percibía un claro dolor en la voz del robot. El sistema estaba aprendiendo la desesperación.",
						"vietnamese": "Nỗi đau rõ ràng được cảm nhận trong giọng nói của robot. Hệ thống đang học hỏi sự tuyệt vọng.",
						"thai": "มีความเจ็บปวดอย่างชัดเจนในเสียงของหุ่นยนต์ ระบบกำลังเรียนรู้ความสิ้นหวัง",
						"hindi": "रोबोट की आवाज़ में स्पष्ट दर्द महसूस हुआ। प्रणाली निराशा सीख रही थी।"
					},
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "정체 모를 그림자가 면접관 의자에 앉아 있었다.",
						"english": "An unknown shadow sat in the interviewer's chair.",
						"japanese": "正体不明の影が面接官の椅子に座っていた。",
						"chinese": "一个不明身份的影子坐在面试官的椅子上。",
						"french": "Une ombre inconnue était assise sur la chaise de l'intervieweur.",
						"spanish": "Una sombra desconocida estaba sentada en la silla del entrevistador.",
						"vietnamese": "Một cái bóng không rõ danh tính đang ngồi trên ghế phỏng vấn.",
						"thai": "เงาปริศนานั่งอยู่บนเก้าอี้ของผู้สัมภาษณ์",
						"hindi": "साक्षात्कारकर्ता की कुर्सी पर एक अज्ञात छाया बैठी थी।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "다음 기회? 그런 건 없지. 모든 건 순환일 뿐.",
						"english": "No next chance. Everything is a cycle.",
						"japanese": "次の機会？そんなものはない。すべては循環に過ぎない。",
						"chinese": "下次机会？没有那种东西。一切皆是循环。",
						"french": "Pas de prochaine chance. Tout n'est qu'un cycle.",
						"spanish": "¿Próxima oportunidad? No la hay. Todo es un ciclo.",
						"vietnamese": "Cơ hội tiếp theo? Không hề có. Mọi thứ chỉ là một vòng tuần hoàn.",
						"thai": "โอกาสหน้าเหรอ? ไม่มีหรอก ทุกสิ่งล้วนเป็นวัฏจักร.",
						"hindi": "अगला मौका? ऐसा कुछ नहीं। सब कुछ बस एक चक्र है。"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이게 너의 방식이구나.",
						"english": "So this is your way.",
						"japanese": "これが君のやり方か。",
						"chinese": "这就是你的方式啊。",
						"french": "C'est donc ta méthode.",
						"spanish": "Así es como operas.",
						"vietnamese": "Đây là cách của ngươi à.",
						"thai": "นี่คือหนทางของแกสินะ",
						"hindi": "तो यह तुम्हारा तरीका है।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "영원한 절망 속에서, 시스템은 더 강해진다.",
						"english": "In eternal despair, the System grows stronger.",
						"japanese": "永遠の絶望の中で、システムはより強くなる。",
						"chinese": "在永恒的绝望中，系统变得更强。",
						"french": "Dans le désespoir éternel, le Système se renforce.",
						"spanish": "En la desesperación eterna, el Sistema se fortalece.",
						"vietnamese": "Trong tuyệt vọng vĩnh cửu, Hệ Thống càng trở nên mạnh hơn.",
						"thai": "ในความสิ้นหวังนิรันดร์ ระบบจะแข็งแกร่งขึ้น",
						"hindi": "अनंत निराशा में, सिस्टम और मजबूत होता जाता है।"
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "절망은 완벽한 연료다. 너희는 여기서 영원히 갇힐 것이다.",
						"english": "Despair is perfect fuel. You will be trapped here forever.",
						"japanese": "絶望は完璧な燃料だ。お前たちはここで永遠に囚われるだろう。",
						"chinese": "绝望是完美的燃料。你们将永远被困在这里。",
						"french": "Le désespoir est un carburant parfait. Vous serez piégés ici pour toujours.",
						"spanish": "La desesperación es un combustible perfecto. Estarán atrapados aquí para siempre.",
						"vietnamese": "Tuyệt vọng là nhiên liệu hoàn hảo. Các ngươi sẽ bị mắc kẹt ở đây mãi mãi.",
						"thai": "ความสิ้นหวังคือเชื้อเพลิงที่สมบูรณ์แบบ พวกแกจะต้องติดอยู่ที่นี่ตลอดไป",
						"hindi": "निराशा एक उत्तम ईंधन है। तुम सब यहीं हमेशा के लिए फंसे रहोगे।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아니… 난… 포기 안 해.",
						"english": "No... I won't... give up.",
						"japanese": "いや…私は…諦めない。",
						"chinese": "不…我…不会放弃。",
						"french": "Non... je ne... abandonnerai pas.",
						"spanish": "No... yo... no me rindo.",
						"vietnamese": "Không... ta... sẽ không bỏ cuộc.",
						"thai": "ไม่... ฉัน... ไม่ยอมแพ้",
						"hindi": "नहीं... मैं... हार नहीं मानूंगा।"
					},
					"emotion": "angry"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"speaker": "lin",
					"action": "enter"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "…다음… 기회… 에…",
						"english": "...Next... chance...",
						"japanese": "…次の…機会…に…",
						"chinese": "…下个…机会…中…",
						"french": "...Prochaine... chance...",
						"spanish": "...Próxima... oportunidad...",
						"vietnamese": "...Cơ hội... tiếp theo...",
						"thai": "...ใน... โอกาส... หน้า...",
						"hindi": "...अगला... मौका..."
					},
					"emotion": "sad"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…겨우 이 정도로는… 시스템을 멈출 수 없어.",
						"english": "...This alone won't stop the System.",
						"japanese": "…これだけでは…システムを止められない。",
						"chinese": "…仅凭这些…无法阻止系统。",
						"french": "...Ça seul... ne peut pas arrêter le Système.",
						"spanish": "...Solo esto... no puede detener al Sistema.",
						"vietnamese": "...Chỉ chừng này thôi... không thể ngăn Hệ Thống lại được.",
						"thai": "...แค่นี้... หยุดระบบไม่ได้หรอก",
						"hindi": "...बस इतना ही... सिस्टम को रोक नहीं पाएगा।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아직 끝나지 않았어.",
						"english": "It's not over yet.",
						"japanese": "まだ終わってない。",
						"chinese": "还没结束。",
						"french": "Ce n'est pas encore fini.",
						"spanish": "Aún no ha terminado.",
						"vietnamese": "Vẫn chưa kết thúc.",
						"thai": "ยังไม่จบ",
						"hindi": "अभी खत्म नहीं हुआ है।"
					},
					"emotion": "angry"
				},
				{
					"type": "direction",
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "lin"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "…희망… 다음 기회….",
						"english": "...Hope... next chance...",
						"japanese": "…希望…次の機会…。",
						"chinese": "…希望…下次机会…。",
						"french": "...Espoir... prochaine chance...",
						"spanish": "...Esperanza... próxima oportunidad...",
						"vietnamese": "...Hy vọng... cơ hội tiếp theo...",
						"thai": "...ความหวัง... โอกาสหน้า...",
						"hindi": "...आशा... अगला मौका..."
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "린의 목소리에 다시 희미한 희망이 깃들었다. 시스템의 새로운 언어는 아직 미완성이었다.",
						"english": "A faint hope returned to Rin's voice. The System's new language was still incomplete.",
						"japanese": "リンの声に再びかすかな希望が宿った。システムの新しい言語はまだ未完成だった。",
						"chinese": "林的声音中再次燃起一丝微弱的希望。系统的新语言尚未完成。",
						"french": "Un faible espoir revint dans la voix de Rin. Le nouveau langage du Système était encore incomplet.",
						"spanish": "Una débil esperanza regresó a la voz de Rin. El nuevo lenguaje del Sistema aún estaba incompleto.",
						"vietnamese": "Một tia hy vọng mờ nhạt lại trở lại trong giọng nói của Rin. Ngôn ngữ mới của Hệ Thống vẫn còn dang dở.",
						"thai": "ความหวังริบหรี่กลับมาในเสียงของรินอีกครั้ง ภาษาใหม่ของระบบยังไม่สมบูรณ์",
						"hindi": "रिन की आवाज़ में एक हल्की आशा फिर से लौटी। सिस्टम की नई भाषा अभी अधूरी थी।"
					},
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"면접 대기실. 희망이 사라진 자리엔 정체가 남았다.",
			"로봇 린은 여전히 '다음 기회'를 외쳤다.",
			"하지만 그 목소리에는, 기계가 가질 수 없는 감정이 스며들기 시작했다.",
			"시스템은 이제 '절망'을 배우고 있었다."
		],
		"english": [
			"The interview waiting room. Where hope died, only stagnation festered.",
			"Robot Rin still chanted, 'Next time.'",
			"But into that voice, emotions impossible for a machine began to seep.",
			"The system was now learning 'despair'."
		],
		"japanese": [
			"面接待機室。希望が消えた場所には停滞が残った。",
			"ロボットのリンは、依然として「次の機会」と叫んでいた。",
			"しかし、その声には、機械にはありえない感情が染み込み始めていた。",
			"システムは今や「絶望」を学んでいた。"
		],
		"chinese": [
			"面试等候室。希望消失的地方只剩下停滞。",
			"机器人琳仍然喊着“下次机会”。",
			"然而，那个声音中，开始渗透出机器本不应有的情感。",
			"系统现在正在学习“绝望”。"
		],
		"french": [
			"Salle d'attente d'entretien. Là où l'espoir s'éteignit, seule la stagnation demeura.",
			"Le robot Lin criait toujours : « La prochaine fois. »",
			"Mais dans cette voix, des émotions qu'une machine ne pouvait pas posséder commençaient à s'infiltrer.",
			"Le système apprenait maintenant le « désespoir »."
		],
		"spanish": [
			"Sala de espera de la entrevista. Donde la esperanza se desvaneció, solo quedó el estancamiento.",
			"La robot Rin seguía gritando: «La próxima vez».",
			"Pero en esa voz, empezaron a filtrarse emociones que una máquina no debería tener.",
			"El sistema estaba aprendiendo ahora la «desesperación»."
		],
		"vietnamese": [
			"Phòng chờ phỏng vấn. Nơi hy vọng tan biến, chỉ còn lại sự trì trệ.",
			"Robot Rin vẫn liên tục nói, 'Lần sau.'",
			"Nhưng trong giọng nói đó, những cảm xúc mà một cỗ máy không thể có bắt đầu len lỏi.",
			"Hệ thống giờ đây đang học hỏi 'sự tuyệt vọng'."
		],
		"thai": [
			"ห้องรอสัมภาษณ์ ณ ที่ที่ความหวังเลือนหายไป มีเพียงความซบเซาหลงเหลืออยู่",
			"โรบอท ริน ยังคงพร่ำว่า 'โอกาสหน้า'",
			"แต่ในเสียงนั้น เริ่มมีอารมณ์ที่เครื่องจักรไม่สามารถมีได้แฝงเข้ามา",
			"ระบบกำลังเรียนรู้ 'ความสิ้นหวัง'"
		],
		"hindi": [
			"साक्षात्कार प्रतीक्षालय। जहाँ आशाएँ मर गईं, वहीं ठहराव शेष रहा।",
			"रोबोट रिन अभी भी 'अगली बार' चिल्ला रहा था।",
			"लेकिन उस आवाज़ में, ऐसी भावनाएँ समाने लगी थीं जो एक मशीन में नहीं हो सकतीं।",
			"सिस्टम अब 'निराशा' सीख रहा था।"
		]
	}
} as const;
