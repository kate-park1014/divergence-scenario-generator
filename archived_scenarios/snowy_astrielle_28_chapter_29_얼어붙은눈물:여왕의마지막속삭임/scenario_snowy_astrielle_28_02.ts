export const scenario_snowy_astrielle_28_02 = {
	"scenario_id": "snowy_astrielle_28_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"bran": {
			"id": "mon_985fcdcc-1bf2-4822-aa2f-292ae9353456",
			"name": {
				"korean": "브란",
				"english": "Bran",
				"japanese": "ブラン",
				"chinese": "布兰",
				"french": "Bran",
				"spanish": "Bran",
				"vietnamese": "Bran",
				"thai": "แบรน",
				"hindi": "ब्रैन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/42cde50b-7453-47b1-04df-73500ad21d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4ecba7ed-ec7e-4a8e-74dc-bf3e711b4d00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"전례 없는 얼음 폭풍이 휘몰아쳤다. 성의 심장부는 더욱 강하게 저항했다.",
			"브란은 직감했다. 이 폭풍은 단순한 적의가 아님을.",
			"차가운 얼음 속에서… 무언가가 간절히 이들을 밀어내고 있었다."
		],
		"english": [
			"An unprecedented ice storm raged. The castle's heart resisted ever more fiercely.",
			"Bran instinctively knew. This storm wasn't mere malice.",
			"Within the cold ice... something desperately pushed them back."
		],
		"japanese": [
			"前例のない氷の嵐が吹き荒れた。城の心臓部は、より強く抵抗した。",
			"ブランは直感した。この嵐は単なる敵意ではないと。",
			"冷たい氷の中で… 何かが必死に彼らを押し戻していた。"
		],
		"chinese": [
			"前所未有的冰风暴肆虐。城堡的心脏地带抵抗得更加猛烈。",
			"布兰直觉地感到。这场风暴并非单纯的敌意。",
			"在冰冷的寒冰中… 有某种东西拼命地将他们推开。"
		],
		"french": [
			"Une tempête de glace sans précédent faisait rage. Le cœur du château résistait avec une force accrue.",
			"Bran le pressentit. Cette tempête n'était pas simple hostilité.",
			"Dans la glace froide... quelque chose les repoussait désespérément."
		],
		"spanish": [
			"Una tormenta de hielo sin precedentes azotó. El corazón del castillo resistió con más ferocidad.",
			"Bran lo intuyó. Esta tormenta no era mera hostilidad.",
			"Dentro del hielo frío... algo los empujaba desesperadamente hacia atrás."
		],
		"vietnamese": [
			"Một cơn bão băng chưa từng có càn quét. Trái tim của lâu đài càng chống cự mạnh mẽ hơn.",
			"Bran trực giác cảm nhận. Cơn bão này không chỉ là sự thù địch đơn thuần.",
			"Giữa lớp băng lạnh giá… có thứ gì đó đang cố gắng đẩy họ lùi lại."
		],
		"thai": [
			"พายุหิมะที่ไม่เคยมีมาก่อนโหมกระหน่ำ แกนกลางของปราสาทต้านทานอย่างแข็งกร้าวขึ้น",
			"แบรนสัมผัสได้ พายุนี้ไม่ใช่แค่ความเป็นศัตรูธรรมดา",
			"ในน้ำแข็งอันเย็นยะเยือก... บางสิ่งบางอย่างกำลังผลักไสพวกเขาอย่างสิ้นหวัง"
		],
		"hindi": [
			"एक अभूतपूर्व बर्फीला तूफान आया। महल का हृदय और भी दृढ़ता से प्रतिरोध कर रहा था।",
			"ब्रान ने intuitively महसूस किया। यह तूफान सिर्फ द्वेष नहीं था।",
			"ठंडी बर्फ के भीतर... कुछ उन्हें बेताब होकर पीछे धकेल रहा था।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "얼음 폭풍이 전례 없는 기세로 몰아쳤다. 숨 쉬는 것조차 버거웠다.",
						"english": "The ice storm raged with unprecedented force. Even breathing was a struggle.",
						"japanese": "氷の嵐が前例のない勢いで吹き荒れた。息をするのさえ苦しかった。",
						"chinese": "冰风暴以前所未有的气势肆虐。连呼吸都变得困难。",
						"french": "La tempête de glace faisait rage avec une force inédite. Même respirer était un fardeau.",
						"spanish": "La tormenta de hielo arreciaba con una fuerza sin precedentes. Hasta respirar era un esfuerzo.",
						"vietnamese": "Cơn bão băng hoành hành với sức mạnh chưa từng có. Ngay cả việc thở cũng khó khăn.",
						"thai": "พายุหิมะโหมกระหน่ำอย่างไม่เคยมีมาก่อน แม้แต่จะหายใจยังลำบาก",
						"hindi": "बर्फीला तूफान अभूतपूर्व वेग से उमड़ रहा था। सांस लेना भी मुश्किल था।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "bran",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "젠장. 이 얼음… 단순한 공격이 아니야.",
						"english": "Damn it. This ice... it's not just an attack.",
						"japanese": "くそっ。この氷…ただの攻撃じゃない。",
						"chinese": "该死。这冰…不是单纯的攻击。",
						"french": "Merde. Cette glace... ce n'est pas qu'une attaque.",
						"spanish": "Maldita sea. Este hielo... no es solo un ataque.",
						"vietnamese": "Chết tiệt. Lớp băng này… không phải chỉ là một cuộc tấn công.",
						"thai": "ให้ตายสิ น้ำแข็งนี่…ไม่ใช่แค่การโจมตีธรรมดา",
						"hindi": "धिक्कार है। यह बर्फ... यह सिर्फ एक हमला नहीं है।"
					},
					"speaker": "bran",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "밀어내는 힘이 너무 강해. 앞으로 나아갈 수 없어!",
						"english": "The pushing force is too strong. We can't move forward!",
						"japanese": "押し戻す力が強すぎる。前に進めない！",
						"chinese": "推开的力量太强了。无法前进！",
						"french": "La force de répulsion est trop forte. On ne peut pas avancer !",
						"spanish": "La fuerza que nos empuja es demasiado fuerte. ¡No podemos avanzar!",
						"vietnamese": "Lực đẩy quá mạnh. Không thể tiến lên được!",
						"thai": "แรงผลักดันมันแรงเกินไป เราไปข้างหน้าไม่ได้!",
						"hindi": "धकेलने वाली शक्ति बहुत तीव्र है। हम आगे नहीं बढ़ सकते!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"speaker": "bran",
					"type": "speech",
					"content": {
						"korean": "그래, 밀어내는 것 같아. 우리를… 막으려는 건가?",
						"english": "Yes, it feels like it's pushing us. Is it... trying to stop us?",
						"japanese": "ああ、押し返されているようだ。俺たちを…止めようとしているのか？",
						"chinese": "是的，感觉像是在推开我们。是想…阻止我们吗？",
						"french": "Oui, on dirait que ça nous repousse. Ça... essaie de nous arrêter ?",
						"spanish": "Sí, parece que nos empuja. ¿Está... intentando detenernos?",
						"vietnamese": "Đúng vậy, cảm giác như nó đang đẩy chúng ta. Nó… muốn ngăn cản chúng ta sao?",
						"thai": "ใช่ มันเหมือนกำลังผลักเราออกไป มัน…พยายามจะหยุดเราเหรอ?",
						"hindi": "हाँ, ऐसा लगता है कि यह हमें धकेल रहा है। क्या यह हमें... रोकना चाहता है?"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "bran",
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"action": "enter"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "폭풍이 더 거세졌어. 마치… 제발 오지 말라고 울부짖는 것 같아.",
						"english": "The storm intensified. It's like... it's screaming for us not to come.",
						"japanese": "嵐がさらに激しくなった。まるで…来るなと叫んでいるようだ。",
						"chinese": "风暴更猛烈了。仿佛…在哭喊着让我们不要过来。",
						"french": "La tempête s'est intensifiée. C'est comme si... elle nous suppliait de ne pas venir.",
						"spanish": "La tormenta se intensificó. Es como si... estuviera gritando que no vengamos.",
						"vietnamese": "Cơn bão dữ dội hơn. Cứ như… nó đang gào thét bảo chúng ta đừng đến vậy.",
						"thai": "พายุรุนแรงขึ้น เหมือนกับว่า…มันกำลังร้องตะโกนบอกว่าอย่ามาเลย",
						"hindi": "तूफान और तेज हो गया। ऐसा लगता है कि... यह हमें न आने के लिए चिल्ला रहा है।"
					},
					"type": "speech",
					"speaker": "bran"
				},
				{
					"content": {
						"korean": "울부짖어? 이게? 우리를 죽이려고 하는 건데?",
						"english": "Screaming? This? It's trying to kill us, isn't it?",
						"japanese": "叫んでるって？こいつが？俺たちを殺そうとしてるのに？",
						"chinese": "哭喊？这个？它不是想杀了我们吗？",
						"french": "Ça hurle ? Ça ? Ça essaie de nous tuer, non ?",
						"spanish": "Gritando? ¿Esto? ¡Está intentando matarnos, no?",
						"vietnamese": "Gào thét ư? Cái này? Nó đang cố giết chúng ta mà?",
						"thai": "ร้องตะโกนเหรอ? นี่เหรอ? มันพยายามจะฆ่าเราไม่ใช่เหรอ?",
						"hindi": "चिल्ला रहा है? यह? यह तो हमें मारने की कोशिश कर रहा है, है ना?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그 순간, 얼음 벽 틈새로 희미한 온기가 느껴졌다. 아주 잠시였다.",
						"english": "At that moment, a faint warmth was felt through a crack in the ice wall. It was fleeting.",
						"japanese": "その瞬間、氷の壁の隙間からかすかな温かさが感じられた。ほんの一瞬だった。",
						"chinese": "就在那一刻，透过冰墙的缝隙，感受到了一丝微弱的暖意。转瞬即逝。",
						"french": "À cet instant, une faible chaleur fut ressentie à travers une fissure du mur de glace. Ce fut très bref.",
						"spanish": "En ese instante, se sintió un tenue calor a través de una grieta en la pared de hielo. Fue muy breve.",
						"vietnamese": "Ngay lúc đó, một hơi ấm mờ nhạt được cảm nhận qua kẽ hở bức tường băng. Chỉ trong chốc lát.",
						"thai": "ในพริบตานั้น ความอบอุ่นจางๆ ก็สัมผัสได้จากรอยแยกของกำแพงน้ำแข็ง มันเป็นเพียงชั่วขณะเท่านั้น",
						"hindi": "उसी क्षण, बर्फीली दीवार की दरार से एक हल्की गर्माहट महसूस हुई। यह बहुत क्षणिक थी।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "아니, 공격이 아니야. 보호하려는 거야. 우리를 이 심장부에서… 멀리 떼어내려는 몸부림.",
						"english": "No, it's not an attack. It's an attempt to protect us. A struggle to keep us far from this core...",
						"japanese": "違う、攻撃じゃない。守ろうとしているんだ。私たちをこの核心から…遠ざけようとする足掻きだ。",
						"chinese": "不，这不是攻击。她是在保护我们。挣扎着想把我们从这个核心…远远地推开。",
						"french": "Non, ce n'est pas une attaque. C'est une tentative de nous protéger. Une lutte pour nous éloigner de ce cœur...",
						"spanish": "No, no es un ataque. Está tratando de protegernos. Un esfuerzo para alejarnos de este núcleo...",
						"vietnamese": "Không, đó không phải là tấn công. Cô ấy đang cố gắng bảo vệ chúng ta. Một nỗ lực để giữ chúng ta tránh xa khỏi trái tim này...",
						"thai": "ไม่ นั่นไม่ใช่การโจมตี เธอพยายามปกป้องเรา การดิ้นรนที่จะทำให้เราห่างไกลจากแกนกลางนี้...",
						"hindi": "नहीं, यह हमला नहीं है। वह हमें बचाना चाहती है। हमें इस केंद्र से… दूर रखने की कोशिश कर रही है।"
					},
					"speaker": "bran"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"speaker": "bran"
				},
				{
					"content": {
						"korean": "그녀의 얼음이… 우리를 막고 있어. 자신을, 그리고 어쩌면 우리를… 지키기 위해.",
						"english": "Her ice... is blocking us. To protect herself, and perhaps us...",
						"japanese": "彼女の氷が…私たちを阻んでいる。自分自身を、そしておそらく私たちを…守るために。",
						"chinese": "她的冰…阻挡着我们。为了保护她自己，或许也为了保护我们…",
						"french": "Sa glace… nous bloque. Pour se protéger, et peut-être nous…",
						"spanish": "Su hielo... nos está bloqueando. Para protegerse a sí misma, y quizás a nosotros...",
						"vietnamese": "Băng của cô ấy... đang chặn chúng ta lại. Để bảo vệ bản thân, và có lẽ là cả chúng ta...",
						"thai": "น้ำแข็งของเธอ... กำลังขวางเราไว้ เพื่อปกป้องตัวเอง และบางทีอาจจะปกป้องเราด้วย...",
						"hindi": "उसकी बर्फ… हमें रोक रही है। खुद को, और शायद हमें भी… बचाने के लिए।"
					},
					"type": "speech",
					"speaker": "bran",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "지키기 위해? 뭘 지킨다는 거야? 이 차가운 성 안에서?",
						"english": "To protect? Protect what? Inside this cold castle?",
						"japanese": "守るために？何をだ？この冷たい城の中で？",
						"chinese": "保护？保护什么？在这座冰冷的城堡里？",
						"french": "Protéger ? Protéger quoi ? Dans ce château froid ?",
						"spanish": "¿Proteger? ¿Proteger qué? ¿Dentro de este frío castillo?",
						"vietnamese": "Bảo vệ sao? Bảo vệ cái gì? Trong lâu đài lạnh lẽo này?",
						"thai": "ปกป้องงั้นหรือ? ปกป้องอะไรกันเล่า? ในปราสาทอันหนาวเหน็บแห่งนี้?",
						"hindi": "बचाने के लिए? क्या बचाना है? इस ठंडे महल के अंदर?"
					},
					"speaker": "character_1",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "bran",
					"type": "speech",
					"content": {
						"korean": "고통에서, 상실에서… 스스로를 가두고 있는 거야.",
						"english": "From pain, from loss... she's imprisoning herself.",
						"japanese": "苦痛から、喪失から…自らを閉じ込めているんだ。",
						"chinese": "她把自己囚禁起来…是为了远离痛苦，远离失去。",
						"french": "De la douleur, de la perte… elle s'enferme elle-même.",
						"spanish": "Del dolor, de la pérdida... se está encerrando a sí misma.",
						"vietnamese": "Từ nỗi đau, từ sự mất mát... cô ấy đang tự giam cầm bản thân.",
						"thai": "จากความเจ็บปวด จากการสูญเสีย... เธอขังตัวเองไว้",
						"hindi": "दर्द से, नुकसान से… वह खुद को कैद कर रही है।"
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "bran",
					"action": "enter",
					"spot": [
						1,
						2
					]
				},
				{
					"emotion": "base",
					"content": {
						"korean": "폭풍은 더욱 격렬해졌다. 한 발자국 내딛는 것이 고통스러웠다.",
						"english": "The storm grew fiercer. Every step was agonizing.",
						"japanese": "嵐はさらに激しさを増した。一歩踏み出すことさえ苦痛だった。",
						"chinese": "暴风雪愈发猛烈。每迈出一步都异常痛苦。",
						"french": "La tempête s'intensifia. Chaque pas était une torture.",
						"spanish": "La tormenta se hizo más feroz. Cada paso era agonizante.",
						"vietnamese": "Cơn bão càng trở nên dữ dội hơn. Mỗi bước đi đều đau đớn.",
						"thai": "พายุทวีความรุนแรงขึ้น ทุกย่างก้าวช่างทรมาน",
						"hindi": "तूफान और भयंकर हो गया। एक कदम भी चलना दर्दनाक था।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "bran",
					"type": "speech",
					"content": {
						"korean": "멈출 수 없어. 이 절규의 끝을 봐야 해.",
						"english": "I can't stop. I must see the end of this scream.",
						"japanese": "止まるわけにはいかない。この叫びの終わりを見届けなければ。",
						"chinese": "我不能停下。我必须看到这声绝叫的尽头。",
						"french": "Je ne peux pas m'arrêter. Je dois voir la fin de ce cri.",
						"spanish": "No puedo detenerme. Debo ver el final de este grito.",
						"vietnamese": "Tôi không thể dừng lại. Tôi phải thấy được kết cục của tiếng gào thét này.",
						"thai": "หยุดไม่ได้ ฉันต้องเห็นจุดจบของเสียงกรีดร้องนี้",
						"hindi": "मैं रुक नहीं सकता। मुझे इस चीख का अंत देखना होगा।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "이러다 모두 얼어붙어 죽을 거야! 돌아가자!",
						"english": "We'll all freeze to death like this! Let's go back!",
						"japanese": "このままじゃみんな凍え死んでしまう！戻ろう！",
						"chinese": "这样下去我们都会冻死的！回去吧！",
						"french": "On va tous mourir de froid comme ça ! Retournons en arrière !",
						"spanish": "¡Así todos nos congelaremos hasta morir! ¡Volvamos!",
						"vietnamese": "Cứ thế này chúng ta sẽ chết cóng mất! Quay lại thôi!",
						"thai": "เราจะแข็งตายกันหมด! กลับกันเถอะ!",
						"hindi": "ऐसे तो हम सब जम कर मर जाएँगे! चलो वापस चलते हैं!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "bran",
					"type": "speech",
					"content": {
						"korean": "돌아갈 수 없어. 그녀를… 이대로 둘 수 없어.",
						"english": "We can't go back. I can't leave her... like this.",
						"japanese": "戻れない。彼女を…このままにはしておけない。",
						"chinese": "我不能回去。我不能让她…就这样。",
						"french": "On ne peut pas revenir. Je ne peux pas la laisser… comme ça.",
						"spanish": "No podemos volver. No puedo dejarla... así.",
						"vietnamese": "Không thể quay lại được. Tôi không thể để cô ấy... như thế này.",
						"thai": "กลับไม่ได้ ฉันปล่อยเธอ... ไว้แบบนี้ไม่ได้",
						"hindi": "हम वापस नहीं जा सकते। मैं उसे… ऐसे नहीं छोड़ सकता।"
					}
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "폭풍의 심장부. 거대한 얼음 결정체가 빛났다. 그 앞에 정체 모를 존재가 서 있었다.",
						"english": "The heart of the storm. A giant ice crystal gleamed. An unknown entity stood before it.",
						"japanese": "嵐の核心部。巨大な氷の結晶が輝いていた。その前に正体不明の存在が立っていた。",
						"chinese": "暴风雪的中心。一块巨大的冰晶闪耀着。一个身份不明的存在站在它的前面。",
						"french": "Le cœur de la tempête. Un immense cristal de glace scintillait. Une entité inconnue se tenait devant lui.",
						"spanish": "El corazón de la tormenta. Un gigantesco cristal de hielo brillaba. Una entidad desconocida estaba de pie frente a él.",
						"vietnamese": "Trung tâm của cơn bão. Một tinh thể băng khổng lồ lấp lánh. Một thực thể không rõ danh tính đứng trước nó.",
						"thai": "ใจกลางพายุ ผลึกน้ำแข็งขนาดมหึมากำลังส่องประกาย สิ่งมีชีวิตนิรนามยืนอยู่ตรงหน้า",
						"hindi": "तूफान का केंद्र। एक विशाल बर्फ का क्रिस्टल चमक रहा था। उसके सामने एक अज्ञात इकाई खड़ी थी।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어리석은 것들. 여기까지 오지 말았어야지.",
						"english": "Foolish ones. You shouldn't have come this far.",
						"japanese": "愚かな者たちめ。ここまで来るべきではなかったな。",
						"chinese": "愚蠢的家伙们。你们不该走到这里。",
						"french": "Insensés. Vous n'auriez pas dû venir jusqu'ici.",
						"spanish": "Tontos. No debisteis haber llegado tan lejos.",
						"vietnamese": "Những kẻ ngu ngốc. Các ngươi không nên đến tận đây.",
						"thai": "พวกโง่ ไม่น่ามาไกลถึงขนาดนี้เลย",
						"hindi": "मूर्खों। तुम्हें इतनी दूर नहीं आना चाहिए था।"
					}
				},
				{
					"duration_ms": 500,
					"speaker": "bran",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "네가… 이 고통을 부추기는 건가?",
						"english": "Are you... fueling this pain?",
						"japanese": "お前が…この苦痛を煽っているのか？",
						"chinese": "是你…在助长这份痛苦吗？",
						"french": "C'est toi... qui attises cette souffrance ?",
						"spanish": "¿Eres tú... quien aviva este dolor?",
						"vietnamese": "Ngươi... đang châm ngòi cho nỗi đau này sao?",
						"thai": "เจ้า... กำลังโหมกระหน่ำความเจ็บปวดนี้หรือ?",
						"hindi": "क्या तुम... इस दर्द को बढ़ावा दे रहे हो?"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…그녀의 절규는 너희를 위한 경고다. 더 이상 다가오지 마.",
						"english": "...Her screams are a warning to you. Come no closer.",
						"japanese": "…彼女の絶叫は、お前たちへの警告だ。これ以上近づくな。",
						"chinese": "……她的尖叫是对你们的警告。别再靠近了。",
						"french": "...Ses cris sont un avertissement pour vous. N'approchez plus.",
						"spanish": "...Sus gritos son una advertencia para vosotros. No os acerquéis más.",
						"vietnamese": "...Tiếng thét của cô ấy là lời cảnh báo cho các ngươi. Đừng đến gần nữa.",
						"thai": "...เสียงกรีดร้องของนางคือคำเตือนสำหรับพวกเจ้า อย่าเข้ามาใกล้กว่านี้",
						"hindi": "...उसकी चीखें तुम्हारे लिए चेतावनी हैं। और पास मत आओ।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "경고는 충분히 들었어. 이제 끝내주겠어!",
						"english": "We've heard enough warnings. Now we'll end this!",
						"japanese": "警告はもう十分聞いた。これで終わりにしてやる！",
						"chinese": "警告听够了。现在就了结你！",
						"french": "Nous avons eu assez d'avertissements. Maintenant, nous allons en finir !",
						"spanish": "Hemos oído suficientes advertencias. ¡Ahora lo acabaremos!",
						"vietnamese": "Đủ lời cảnh báo rồi. Giờ thì kết thúc thôi!",
						"thai": "คำเตือนน่ะได้ยินพอแล้ว ตอนนี้จะจบเรื่องนี้ซะ!",
						"hindi": "काफी चेतावनी सुन ली। अब इसे खत्म करते हैं!"
					}
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "약한 것들. 얼어붙어라. 그녀의 평화를 방해하지 마.",
						"english": "Weaklings. Freeze. Do not disturb her peace.",
						"japanese": "弱き者たちよ。凍りつけ。彼女の平和を邪魔するな。",
						"chinese": "弱者。冰封吧。别打扰她的平静。",
						"french": "Faibles. Gelez. Ne dérangez pas sa paix.",
						"spanish": "Débiles. Congelaos. No perturbéis su paz.",
						"vietnamese": "Lũ yếu đuối. Hãy đóng băng đi. Đừng làm phiền sự bình yên của cô ấy.",
						"thai": "พวกอ่อนแอ จงแข็งตัวซะ อย่ารบกวนความสงบของนาง",
						"hindi": "कमजोरों। जम जाओ। उसकी शांति भंग मत करो।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"duration_ms": 500,
					"speaker": "bran",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "bran",
					"type": "speech",
					"content": {
						"korean": "…아직 아니야. 우린 포기하지 않아.",
						"english": "...Not yet. We won't give up.",
						"japanese": "…まだだ。私たちは諦めない。",
						"chinese": "……还没。我们不会放弃的。",
						"french": "...Pas encore. Nous n'abandonnerons pas.",
						"spanish": "...Aún no. No nos rendiremos.",
						"vietnamese": "...Chưa đâu. Chúng ta sẽ không bỏ cuộc.",
						"thai": "...ยังหรอก เราไม่ยอมแพ้",
						"hindi": "...अभी नहीं। हम हार नहीं मानेंगे।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "다시 돌아올 거야. 반드시.",
						"english": "We'll be back. Definitely.",
						"japanese": "また戻ってくる。必ず。",
						"chinese": "我们会再回来的。一定。",
						"french": "Nous reviendrons. C'est certain.",
						"spanish": "Volveremos. Seguro.",
						"vietnamese": "Chúng ta sẽ quay lại. Chắc chắn.",
						"thai": "เราจะกลับมาอีกครั้ง แน่นอน",
						"hindi": "हम वापस आएंगे। निश्चित रूप से।"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 멈출 수 없어. 그녀의 고통은… 끝나지 않아….",
						"english": "Urgh... I can't stop. Her pain... won't end...",
						"japanese": "くっ…止められない。彼女の苦痛は…終わらない…。",
						"chinese": "呃…停不下来。她的痛苦…永无止境…。",
						"french": "Argh... Je ne peux pas m'arrêter. Sa douleur... ne s'arrête pas...",
						"spanish": "Uf... No puedo parar. Su dolor... no termina...",
						"vietnamese": "Ưgh... Không thể dừng lại. Nỗi đau của cô ấy... không bao giờ kết thúc...",
						"thai": "อึก... หยุดไม่ได้ ความเจ็บปวดของนาง... ไม่มีวันสิ้นสุด...",
						"hindi": "उफ़... मैं रुक नहीं सकता। उसका दर्द... खत्म नहीं होगा..."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "bran",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "bran",
					"content": {
						"korean": "아니, 우리가 멈출 거야. 그녀의 절규는 이제 충분해.",
						"english": "No, we'll stop it. Her screams are enough.",
						"japanese": "いいえ、私たちが止める。彼女の絶叫はもう十分だ。",
						"chinese": "不，我们会阻止的。她的尖叫已经够了。",
						"french": "Non, nous allons l'arrêter. Ses cris ont assez duré.",
						"spanish": "No, nosotros la detendremos. Sus gritos ya son suficientes.",
						"vietnamese": "Không, chúng ta sẽ ngăn lại. Tiếng thét của cô ấy đã đủ rồi.",
						"thai": "ไม่ เราจะหยุดมันเอง เสียงกรีดร้องของนางพอแล้ว",
						"hindi": "नहीं, हम इसे रोकेंगे। उसकी चीखें काफी हैं।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "정체 모를 적이 쓰러졌다. 그러나 얼음 폭풍은 여전히 잦아들지 않았다.",
						"english": "The unknown enemy fell. But the ice storm still raged.",
						"japanese": "正体不明の敵が倒れた。しかし、氷の嵐は依然として収まらなかった。",
						"chinese": "不明敌人倒下了。然而，冰风暴依然没有平息。",
						"french": "L'ennemi inconnu est tombé. Mais la tempête de glace faisait toujours rage.",
						"spanish": "El enemigo desconocido cayó. Pero la tormenta de hielo seguía sin amainar.",
						"vietnamese": "Kẻ địch không rõ danh tính đã ngã xuống. Tuy nhiên, bão tuyết vẫn không hề dịu đi.",
						"thai": "ศัตรูนิรนามล้มลงแล้ว แต่พายุหิมะก็ยังคงไม่สงบ",
						"hindi": "अज्ञात शत्रु गिर गया। लेकिन बर्फीला तूफान अब भी थम नहीं रहा था।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "sad",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "아스트리엘의 고통은… 아직 끝나지 않은 듯했다.",
						"english": "Astriel's pain... seemed not to have ended yet.",
						"japanese": "アストリエルの苦痛は…まだ終わっていなかったようだった。",
						"chinese": "阿斯特里尔的痛苦…似乎还没有结束。",
						"french": "La douleur d'Astriel... ne semblait pas encore terminée.",
						"spanish": "El dolor de Astriel... parecía no haber terminado todavía.",
						"vietnamese": "Nỗi đau của Astriel... dường như vẫn chưa kết thúc.",
						"thai": "ความเจ็บปวดของแอสเทรียล... ดูเหมือนจะยังไม่สิ้นสุด",
						"hindi": "एस्ट्रियल का दर्द... अभी खत्म नहीं हुआ था।"
					}
				}
			]
		}
	]
} as const;
