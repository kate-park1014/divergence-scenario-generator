export const scenario_EndlessApplicant_V1_DespairCycle_01 = {
	"scenario_id": "EndlessApplicant_V1_DespairCycle_01",
	"order": 1,
	"act": "intro",
	"theme": "modern",
	"actors": {
		"nia": {
			"id": "mon_872177dd-fcf0-40d8-b78c-fd795017c763",
			"name": {
				"korean": "니아",
				"english": "Nia",
				"japanese": "ニア",
				"chinese": "妮娅",
				"french": "Nia",
				"spanish": "Nia",
				"vietnamese": "Nia",
				"thai": "เนีย",
				"hindi": "निया"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/db690f96-d5b3-498a-f4ec-f269e6e95100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a8fe5d7a-56fe-4822-c272-5a04fd7f4c00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"한때 '다음 기회'를 외치던 곳.",
			"이제는 찢겨진 이력서와 텅 빈 눈빛뿐.",
			"희망이 죽자, 새로운 절망이 태어났다.",
			"이 순환을 끝낼 자, 나타날 것인가."
		],
		"english": [
			"A place that once cried 'next opportunity'.",
			"Now, only torn resumes and empty gazes remain.",
			"As hope died, new despair was born.",
			"Will one emerge to end this cycle?"
		],
		"japanese": [
			"かつて、「次こそは」と叫ばれた場所。",
			"今は、破れた履歴書と虚ろな瞳だけ。",
			"希望が死に、新たな絶望が生まれた。",
			"この循環を終わらせる者、現れるか。"
		],
		"chinese": [
			"曾经高喊“下次机会”的地方。",
			"如今只剩下撕碎的简历和空洞的眼神。",
			"希望逝去，新的绝望诞生了。",
			"结束这个循环的人，会出现吗？"
		],
		"french": [
			"Autrefois, un lieu où l'on clamait \"la prochaine fois\".",
			"Maintenant, il ne reste que des CV déchirés et des regards vides.",
			"Quand l'espoir mourut, un nouveau désespoir naquit.",
			"Quelqu'un émergera-t-il pour mettre fin à ce cycle ?"
		],
		"spanish": [
			"Una vez, un lugar que gritaba \"la próxima oportunidad\".",
			"Ahora, solo currículums rotos y miradas vacías.",
			"Al morir la esperanza, nació una nueva desesperación.",
			"¿Surgirá alguien para poner fin a este ciclo?"
		],
		"vietnamese": [
			"Từng là nơi reo hò 'cơ hội kế tiếp'.",
			"Giờ đây, chỉ còn lại những hồ sơ rách nát và ánh mắt vô hồn.",
			"Khi hy vọng chết đi, một nỗi tuyệt vọng mới đã ra đời.",
			"Liệu có ai xuất hiện để chấm dứt vòng luân hồi này?"
		],
		"thai": [
			"ครั้งหนึ่ง สถานที่ที่ตะโกนว่า 'โอกาสหน้า'",
			"บัดนี้ เหลือเพียงเรซูเม่ที่ฉีกขาดและแววตาที่ว่างเปล่า",
			"เมื่อความหวังตายลง ความสิ้นหวังใหม่ก็ถือกำเนิดขึ้น",
			"จะมีใครปรากฏตัวขึ้นเพื่อยุติวัฏจักรนี้หรือไม่"
		],
		"hindi": [
			"एक समय में, एक ऐसी जगह जहाँ 'अगला मौका' चिल्लाया जाता था।",
			"अब, केवल फटे हुए रिज्यूमे और खाली निगाहें।",
			"जैसे ही आशा मरी, एक नई निराशा का जन्म हुआ।",
			"क्या कोई इस चक्र को समाप्त करने वाला प्रकट होगा?"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "희망이 산산조각 난 면접 대기실. 정적만이 흐른다.",
						"english": "An interview waiting room where hope lies shattered. Only silence flows.",
						"japanese": "希望が打ち砕かれた面接待合室。静寂だけが流れる。",
						"chinese": "希望破灭的面试等候室。只有寂静流淌。",
						"french": "Une salle d'attente d'entretien où l'espoir est brisé. Seul le silence règne.",
						"spanish": "Una sala de espera de entrevistas donde la esperanza está hecha añicos. Solo el silencio fluye.",
						"vietnamese": "Phòng chờ phỏng vấn nơi hy vọng tan vỡ. Chỉ còn sự tĩnh lặng.",
						"thai": "ห้องรอสัมภาษณ์ที่ความหวังแตกสลาย มีเพียงความเงียบงันไหลผ่าน",
						"hindi": "एक इंटरव्यू प्रतीक्षा कक्ष जहाँ आशा बिखर गई है। केवल सन्नाटा पसरा है।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"speaker": "nia",
					"type": "direction",
					"spot": [
						2,
						1
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "…끝났어.",
						"english": "...It's over.",
						"japanese": "…終わった。",
						"chinese": "……结束了。",
						"french": "...C'est fini.",
						"spanish": "...Se acabó.",
						"vietnamese": "...Kết thúc rồi.",
						"thai": "...มันจบแล้ว",
						"hindi": "...यह खत्म हो गया।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "nia"
				},
				{
					"content": {
						"korean": "누구세요?",
						"english": "Who are you?",
						"japanese": "どなたですか？",
						"chinese": "你是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Bạn là ai?",
						"thai": "คุณคือใคร?",
						"hindi": "आप कौन हैं?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"speaker": "nia",
					"content": {
						"korean": "난 니아. 그냥… 여기 버려진 사람 중 하나.",
						"english": "I'm Nia. Just... one of the people abandoned here.",
						"japanese": "私はニア。ただ…ここに捨てられた者の一人。",
						"chinese": "我是尼亚。只是……这里被抛弃的人之一。",
						"french": "Je suis Nia. Juste... l'une des personnes abandonnées ici.",
						"spanish": "Soy Nia. Solo... una de las personas abandonadas aquí.",
						"vietnamese": "Tôi là Nia. Chỉ là... một trong những người bị bỏ rơi ở đây.",
						"thai": "ฉันคือนีอา ก็แค่... หนึ่งในผู้ที่ถูกทอดทิ้งที่นี่",
						"hindi": "मैं निया हूँ। बस... यहाँ छोड़े गए लोगों में से एक।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "버려지다니… 왜 여기 앉아 있어요?",
						"english": "Abandoned...? Why are you sitting here?",
						"japanese": "捨てられたって…なぜここに座っているんですか？",
						"chinese": "被抛弃了……为什么坐在这里？",
						"french": "Abandonnée... ? Pourquoi êtes-vous assise ici ?",
						"spanish": "¿Abandonada...? ¿Por qué estás sentada aquí?",
						"vietnamese": "Bị bỏ rơi...? Sao bạn lại ngồi đây?",
						"thai": "ถูกทอดทิ้ง...ทำไมคุณถึงนั่งอยู่ที่นี่?",
						"hindi": "छोड़ दिया गया...? आप यहाँ क्यों बैठे हैं?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "갈 곳이 없거든. '다음'은 없으니까.",
						"english": "Because I have nowhere to go. There is no 'next'.",
						"japanese": "行く場所がないから。'次'はないからね。",
						"chinese": "因为无处可去。没有“下次”了。",
						"french": "Parce que je n'ai nulle part où aller. Il n'y a pas de \"prochaine fois\".",
						"spanish": "Porque no tengo adónde ir. No hay \"siguiente\".",
						"vietnamese": "Vì tôi không có nơi nào để đi. Không có 'lần sau' nữa.",
						"thai": "เพราะไม่มีที่ไป ไม่มี 'ครั้งหน้า' อีกแล้ว",
						"hindi": "क्योंकि मेरे पास कहीं जाने की जगह नहीं है। कोई 'अगला' नहीं है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "nia"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "...",
						"english": "...",
						"japanese": "...",
						"chinese": "...",
						"french": "...",
						"spanish": "...",
						"vietnamese": "...",
						"thai": "...",
						"hindi": "..."
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "nia",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						1
					],
					"type": "direction"
				},
				{
					"speaker": "nia",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "저 사람들도 다 똑같아. 텅 비었어.",
						"english": "They're all the same. Empty.",
						"japanese": "あの人たちも皆同じだ。虚ろだ。",
						"chinese": "那些人也都一样。空虚的。",
						"french": "Eux aussi sont tous pareils. Vides.",
						"spanish": "Ellos también son todos iguales. Vacíos.",
						"vietnamese": "Họ cũng đều giống nhau. Trống rỗng.",
						"thai": "พวกเขาก็เหมือนกันหมด ว่างเปล่า",
						"hindi": "वे सब भी एक जैसे हैं। खाली।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "희망을 잃어서….",
						"english": "Because they lost hope...",
						"japanese": "希望を失ったから...",
						"chinese": "因为失去了希望...",
						"french": "Parce qu'ils ont perdu espoir...",
						"spanish": "Porque perdieron la esperanza...",
						"vietnamese": "Vì đã mất hy vọng...",
						"thai": "เพราะพวกเขาหมดหวัง...",
						"hindi": "क्योंकि उन्होंने आशा खो दी..."
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "희망이 사라지면… 모든 게 사라져. 종이 조각처럼.",
						"english": "When hope vanishes... everything vanishes. Like a piece of paper.",
						"japanese": "希望が消えれば… 全てが消える。紙切れのように。",
						"chinese": "当希望消失时... 一切都会消失。像一张纸片。",
						"french": "Quand l'espoir disparaît... tout disparaît. Comme un morceau de papier.",
						"spanish": "Cuando la esperanza se desvanece... todo se desvanece. Como un trozo de papel.",
						"vietnamese": "Khi hy vọng biến mất... mọi thứ sẽ biến mất. Như một mảnh giấy.",
						"thai": "เมื่อความหวังหายไป... ทุกอย่างก็หายไป เหมือนกระดาษชิ้นหนึ่ง",
						"hindi": "जब आशा मिट जाती है... सब कुछ मिट जाता है। एक कागज के टुकड़े की तरह।"
					},
					"speaker": "nia",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "바닥에 찢겨진 이력서 조각들이 미세한 빛을 내며 사라진다. 흡수되는 것처럼.",
						"english": "Shredded resume pieces on the floor emit a faint light and disappear. As if absorbed.",
						"japanese": "床に破れた履歴書の破片が微かな光を放ち、消えていく。吸収されるように。",
						"chinese": "地板上撕碎的简历碎片发出微弱的光芒，然后消失。仿佛被吸收了一样。",
						"french": "Des morceaux de CV déchirés sur le sol émettent une faible lumière et disparaissent. Comme s'ils étaient absorbés.",
						"spanish": "Pedazos de currículum rasgados en el suelo emiten una luz tenue y desaparecen. Como si fueran absorbidos.",
						"vietnamese": "Những mảnh sơ yếu lý lịch bị xé rách trên sàn phát ra ánh sáng mờ nhạt và biến mất. Như thể bị hấp thụ.",
						"thai": "เศษเรซูเม่ที่ฉีกขาดบนพื้นเปล่งแสงจางๆ และหายไป เหมือนถูกดูดซับ",
						"hindi": "फर्श पर फटे हुए बायोडाटा के टुकड़े हल्की रोशनी छोड़ते हुए गायब हो जाते हैं। जैसे अवशोषित हो गए हों।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…뭐지?",
						"english": "...What was that?",
						"japanese": "...何だ？",
						"chinese": "...那是什么？",
						"french": "...Qu'est-ce que c'était ?",
						"spanish": "...¿Qué fue eso?",
						"vietnamese": "...Cái gì vậy?",
						"thai": "...อะไรน่ะ?",
						"hindi": "...वह क्या था?"
					},
					"speaker": "character_any",
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "nia",
					"duration_ms": 500,
					"spot": [
						2,
						1
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "nia",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이곳은 감옥이야. '다음'이 없는 영원한 감옥.",
						"english": "This is a prison. An eternal prison with no 'next'.",
						"japanese": "ここは監獄だ。「次」がない永遠の監獄。",
						"chinese": "这里是监狱。一个没有“下一个”的永恒监狱。",
						"french": "C'est une prison. Une prison éternelle sans 'suite'.",
						"spanish": "Esto es una prisión. Una prisión eterna sin 'siguiente'.",
						"vietnamese": "Đây là một nhà tù. Một nhà tù vĩnh cửu không có 'tiếp theo'.",
						"thai": "ที่นี่คือคุก คุกนิรันดร์ที่ไม่มี 'ครั้งหน้า'",
						"hindi": "यह एक जेल है। एक ऐसी अनंत जेल जिसका कोई 'अगला' नहीं।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "하지만 시스템은 계속 작동하고 있어요.",
						"english": "But the system is still running.",
						"japanese": "しかし、システムは動き続けています。",
						"chinese": "但是系统仍在运行。",
						"french": "Mais le système continue de fonctionner.",
						"spanish": "Pero el sistema sigue funcionando.",
						"vietnamese": "Nhưng hệ thống vẫn đang hoạt động.",
						"thai": "แต่ระบบก็ยังทำงานอยู่",
						"hindi": "लेकिन सिस्टम अभी भी चल रहा है।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "nia",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그래. 희망 없이도… 움직이더라.",
						"english": "Yes. Even without hope... it keeps moving.",
						"japanese": "そうだ。希望がなくても…動いていた。",
						"chinese": "是啊。即使没有希望...它也在动。",
						"french": "Oui. Même sans espoir... ça continue de bouger.",
						"spanish": "Sí. Incluso sin esperanza... sigue moviéndose.",
						"vietnamese": "Đúng vậy. Ngay cả khi không có hy vọng... nó vẫn tiếp tục di chuyển.",
						"thai": "ใช่แล้ว แม้ไม่มีความหวัง... มันก็ยังเคลื่อนไหว",
						"hindi": "हाँ। आशा के बिना भी... यह चलता रहता है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 무엇 때문에….",
						"english": "Then for what reason...?",
						"japanese": "では、何のために...",
						"chinese": "那么，为了什么...？",
						"french": "Alors, pour quelle raison... ?",
						"spanish": "Entonces, ¿por qué razón...?",
						"vietnamese": "Vậy thì vì lý do gì...?",
						"thai": "แล้วเพื่ออะไรกัน...?",
						"hindi": "तो फिर किसलिए...?"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "nia",
					"content": {
						"korean": "…절망. 우리가 느끼는 모든 게 연료가 돼.",
						"english": "...Despair. Everything we feel becomes fuel.",
						"japanese": "...絶望。我らが感じる全てが燃料となる。",
						"chinese": "...绝望。我们所感受的一切都将化为燃料。",
						"french": "...Désespoir. Tout ce que nous ressentons devient carburant.",
						"spanish": "...Desesperación. Todo lo que sentimos se convierte en combustible.",
						"vietnamese": "...Tuyệt vọng. Mọi thứ ta cảm nhận đều trở thành nhiên liệu.",
						"thai": "...ความสิ้นหวัง. ทุกสิ่งที่เราสัมผัสจะกลายเป็นเชื้อเพลิง.",
						"hindi": "...निराशा। हम जो कुछ भी महसूस करते हैं, वह ईंधन बन जाता है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						1
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "nia"
				},
				{
					"speaker": "nia",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "더 깊이 들어가도 소용없어. 똑같아.",
						"english": "Going deeper is useless. It's all the same.",
						"japanese": "これ以上深く進んでも無駄だ。何も変わらない。",
						"chinese": "再深入也没用。都一样。",
						"french": "Aller plus profond est inutile. C'est toujours pareil.",
						"spanish": "Ir más profundo es inútil. Es lo mismo.",
						"vietnamese": "Đi sâu hơn cũng vô ích. Vẫn vậy thôi.",
						"thai": "ลงไปลึกกว่านี้ก็ไร้ประโยชน์ มันก็เหมือนเดิมนั่นแหละ",
						"hindi": "और गहरा जाना बेकार है। सब एक जैसा ही है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "막다른 길은 없어요. 제가 끝낼게요.",
						"english": "There are no dead ends. I'll end this.",
						"japanese": "行き止まりなんてない。私が終わらせる。",
						"chinese": "没有绝路。我会终结这一切。",
						"french": "Il n'y a pas d'impasse. Je vais y mettre fin.",
						"spanish": "No hay callejones sin salida. Yo acabaré con esto.",
						"vietnamese": "Không có ngõ cụt. Tôi sẽ kết thúc nó.",
						"thai": "ไม่มีทางตันหรอกค่ะ ฉันจะจบมันเอง",
						"hindi": "कोई अंत नहीं है। मैं इसे खत्म करूँगा।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "뭘? 이 끝없는 절망을?",
						"english": "What? This endless despair?",
						"japanese": "何を？この終わらない絶望をか？",
						"chinese": "什么？这份无尽的绝望吗？",
						"french": "Quoi ? Ce désespoir sans fin ?",
						"spanish": "¿Qué? ¿Esta desesperación interminable?",
						"vietnamese": "Cái gì? Nỗi tuyệt vọng vô tận này ư?",
						"thai": "อะไร? ความสิ้นหวังที่ไม่มีที่สิ้นสุดนี้เหรอ?",
						"hindi": "क्या? यह अंतहीन निराशा?"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "nia"
				},
				{
					"content": {
						"korean": "이 시스템 자체를요.",
						"english": "The system itself.",
						"japanese": "このシステム自体をです。",
						"chinese": "这个系统本身。",
						"french": "Le système lui-même.",
						"spanish": "El sistema mismo.",
						"vietnamese": "Chính cái hệ thống này.",
						"thai": "ตัวระบบนี้ต่างหาก",
						"hindi": "यह सिस्टम ही।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "nia",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…너도 곧 알게 될 거야. 여긴 변하지 않아.",
						"english": "...You'll soon find out. This place doesn't change.",
						"japanese": "...お前もすぐに分かるだろう。ここは変わらない。",
						"chinese": "...你很快就会明白。这里是不会改变的。",
						"french": "...Tu le découvriras bientôt. Cet endroit ne changera pas.",
						"spanish": "...Pronto lo descubrirás. Este lugar no cambia.",
						"vietnamese": "...Ngươi cũng sẽ sớm biết thôi. Nơi đây không thay đổi.",
						"thai": "...ไม่ช้าเธอก็จะรู้เอง ที่นี่ไม่มีวันเปลี่ยน",
						"hindi": "...तुम भी जल्द ही जान जाओगे। यह जगह नहीं बदलती।"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석군. 하나의 순환을 멈춰도… 또 다른 순환은 시작될 뿐.",
						"english": "Foolish. Even if one cycle ends… another merely begins.",
						"japanese": "愚かな。一つの循環を止めても…また別の循環が始まるだけだ。",
						"chinese": "愚蠢。即使一个循环停止了……另一个循环也只会重新开始。",
						"french": "Insensé. Même si un cycle prend fin… un autre ne fait que commencer.",
						"spanish": "Necio. Aunque un ciclo termine… otro simplemente comenzará.",
						"vietnamese": "Ngu xuẩn. Dù một vòng lặp kết thúc… một vòng lặp khác sẽ lại bắt đầu.",
						"thai": "โง่เขลา แม้ว่าวัฏจักรหนึ่งจะสิ้นสุดลง... อีกวัฏจักรหนึ่งก็แค่จะเริ่มต้นขึ้นเท่านั้น",
						"hindi": "मूर्खतापूर्ण। भले ही एक चक्र समाप्त हो जाए… दूसरा चक्र तो बस शुरू होगा।"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이 절망은… 끝나지 않아.",
						"english": "This despair… will never end.",
						"japanese": "この絶望は…終わらない。",
						"chinese": "这份绝望……永无止境。",
						"french": "Ce désespoir… ne prendra jamais fin.",
						"spanish": "Esta desesperación… nunca terminará.",
						"vietnamese": "Nỗi tuyệt vọng này… sẽ không bao giờ kết thúc.",
						"thai": "ความสิ้นหวังนี้... จะไม่มีวันสิ้นสุด",
						"hindi": "यह निराशा… कभी खत्म नहीं होगी।"
					}
				},
				{
					"content": {
						"korean": "무슨 소리야…?",
						"english": "What do you mean…?",
						"japanese": "何を言っているんだ…？",
						"chinese": "你说什么……？",
						"french": "Qu'est-ce que tu racontes… ?",
						"spanish": "¿Qué dices…?",
						"vietnamese": "Ngươi đang nói gì vậy…?",
						"thai": "คุณหมายความว่าอะไร...?",
						"hindi": "तुम क्या कह रहे हो…?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "정체 모를 존재가 사라졌다. 그러나 불안한 예감은 쉬이 가시지 않는다.",
						"english": "The mysterious entity vanished. Yet, an uneasy premonition lingers.",
						"japanese": "正体不明の存在は消え去った。しかし、不安な予感は容易に消え去らない。",
						"chinese": "身份不明的存在消失了。然而，不安的预感却迟迟未能消散。",
						"french": "L'entité inconnue a disparu. Pourtant, un pressentiment troublant persiste.",
						"spanish": "La entidad desconocida desapareció. Sin embargo, una inquietante premonición no se disipa fácilmente.",
						"vietnamese": "Thực thể vô danh biến mất. Tuy nhiên, linh cảm bất an vẫn còn đó.",
						"thai": "สิ่งมีชีวิตลึกลับได้หายไปแล้ว แต่ลางสังหรณ์อันไม่สบายใจก็ยังคงอยู่",
						"hindi": "अज्ञात सत्ता गायब हो गई। फिर भी, एक बेचैन करने वाली आशंका आसानी से दूर नहीं होती।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "면접은 끝나지 않았다. 그들은 새로운 절망을 찾아 나선다.",
						"english": "The interview is not over. They set out in search of new despair.",
						"japanese": "面接は終わっていなかった。彼らは新たな絶望を求めて旅立つ。",
						"chinese": "面试尚未结束。他们踏上了寻找新绝望的旅程。",
						"french": "L'entretien n'est pas terminé. Ils partent en quête d'un nouveau désespoir.",
						"spanish": "La entrevista no ha terminado. Ellos parten en busca de una nueva desesperación.",
						"vietnamese": "Cuộc phỏng vấn chưa kết thúc. Họ lên đường tìm kiếm nỗi tuyệt vọng mới.",
						"thai": "การสัมภาษณ์ยังไม่จบ พวกเขาออกเดินทางเพื่อค้นหาความสิ้นหวังครั้งใหม่",
						"hindi": "साक्षात्कार समाप्त नहीं हुआ है। वे नई निराशा की तलाश में निकल पड़ते हैं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "대기실 가장 깊은 곳. 정체 모를 그림자가 기다리고 있다.",
						"english": "Deepest part of the waiting room. An unknown shadow awaits.",
						"japanese": "待合室の最深部。正体不明の影が待ち受けている。",
						"chinese": "等候室最深处。一个不明身份的影子正在等候。",
						"french": "Au plus profond de la salle d'attente. Une ombre inconnue attend.",
						"spanish": "La parte más profunda de la sala de espera. Una sombra desconocida aguarda.",
						"vietnamese": "Sâu nhất trong phòng chờ. Một cái bóng không rõ danh tính đang đợi.",
						"thai": "ส่วนลึกที่สุดของห้องรอคอย เงามืดนิรนามกำลังรออยู่",
						"hindi": "प्रतीक्षा कक्ष का सबसे गहरा हिस्सा। एक अज्ञात छाया इंतजार कर रही है।"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "왔군. 새로운 에너지가 될 존재여.",
						"english": "You're here. The one who will become new energy.",
						"japanese": "来たか。新たなエネルギーとなる存在よ。",
						"chinese": "你来了。将成为新能量的存在。",
						"french": "Tu es là. Celui qui deviendra une nouvelle énergie.",
						"spanish": "Estás aquí. El que se convertirá en nueva energía.",
						"vietnamese": "Ngươi đã đến. Kẻ sẽ trở thành năng lượng mới.",
						"thai": "มาแล้วสินะ เจ้าผู้ซึ่งจะกลายเป็นพลังงานใหม่",
						"hindi": "तुम आ गए। वह जो नई ऊर्जा बनेगा।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "당신이 이 시스템의 감시자입니까?",
						"english": "Are you the overseer of this system?",
						"japanese": "あなたがこのシステムの監視者ですか？",
						"chinese": "你是这个系统的监视者吗？",
						"french": "Êtes-vous le surveillant de ce système ?",
						"spanish": "¿Eres el supervisor de este sistema?",
						"vietnamese": "Ông là người giám sát hệ thống này sao?",
						"thai": "คุณคือผู้ดูแลระบบนี้หรือเปล่า?",
						"hindi": "क्या आप इस सिस्टम के निरीक्षक हैं?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "나는 순환의 일부. 너희의 절망을 먹고 자라는.",
						"english": "I am part of the cycle. Growing by feeding on your despair.",
						"japanese": "私は循環の一部。お前たちの絶望を糧に育つ者。",
						"chinese": "我是循环的一部分。以你们的绝望为食而成长。",
						"french": "Je fais partie du cycle. Je grandis en me nourrissant de votre désespoir.",
						"spanish": "Soy parte del ciclo. Creciendo al alimentarme de vuestra desesperación.",
						"vietnamese": "Ta là một phần của vòng luân hồi. Lớn lên bằng cách ăn nỗi tuyệt vọng của các ngươi.",
						"thai": "ฉันคือส่วนหนึ่งของวัฏจักร เติบโตขึ้นด้วยการกินความสิ้นหวังของพวกเจ้า",
						"hindi": "मैं चक्र का एक हिस्सा हूँ। तुम्हारी निराशा को खाकर बढ़ता हूँ।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "헛소리 마. 끝낼 거야.",
						"english": "Cut the nonsense. I'll end this.",
						"japanese": "戯言はよせ。終わらせてやる。",
						"chinese": "别胡说了。我来结束这一切。",
						"french": "Arrête tes sornettes. Je vais y mettre fin.",
						"spanish": "Deja de tonterías. Voy a acabar con esto.",
						"vietnamese": "Đừng nói nhảm. Ta sẽ kết thúc nó.",
						"thai": "อย่าพูดพล่าม ฉันจะจบเรื่องนี้ซะ",
						"hindi": "बकवास बंद करो। मैं इसे खत्म करूँगा।"
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "절망의 그림자가 모든 것을 집어삼켰다.",
						"english": "The shadow of despair engulfed everything.",
						"japanese": "絶望の影が全てを飲み込んだ。",
						"chinese": "绝望的阴影吞噬了一切。",
						"french": "L'ombre du désespoir a tout englouti.",
						"spanish": "La sombra de la desesperación lo engulló todo.",
						"vietnamese": "Bóng tối của tuyệt vọng nuốt chửng mọi thứ.",
						"thai": "เงามืดแห่งความสิ้นหวังกลืนกินทุกสิ่ง",
						"hindi": "निराशा की छाया ने सब कुछ निगल लिया।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "너희의 포기는… 나의 양식이 된다.",
						"english": "Your surrender… becomes my nourishment.",
						"japanese": "お前たちの放棄は…私の糧となる。",
						"chinese": "你们的放弃……将成为我的养分。",
						"french": "Votre abandon… devient ma nourriture.",
						"spanish": "Vuestra rendición… se convierte en mi alimento.",
						"vietnamese": "Sự bỏ cuộc của các ngươi… sẽ là lương thực của ta.",
						"thai": "การยอมแพ้ของพวกเจ้า... คืออาหารของข้า",
						"hindi": "तुम्हारा त्याग… मेरा पोषण बनता है।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…아직 포기 안 했어.",
						"english": "…I haven't given up yet.",
						"japanese": "…まだ諦めていない。",
						"chinese": "……我还没有放弃。",
						"french": "…Je n'ai pas encore abandonné.",
						"spanish": "…Todavía no me he rendido.",
						"vietnamese": "…Ta vẫn chưa bỏ cuộc.",
						"thai": "...ฉันยังไม่ยอมแพ้",
						"hindi": "…मैंने अभी हार नहीं मानी है।"
					}
				}
			],
			"id": 15
		}
	]
} as const;
