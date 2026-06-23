export const scenario_modern_ottoreset_77_03 = {
	"scenario_id": "modern_ottoreset_77_03",
	"order": 3,
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
	"prologue": {
		"korean": [
			"끝없는 관문, 끝없는 실패.",
			"친절했던 안내자는 사라지고,",
			"새로운 그림자가 진실을 속삭였다.",
			"그것은 희망일까, 더 깊은 절망의 시작일까."
		],
		"english": [
			"Endless gates, endless failures.",
			"The kind guide vanished,",
			"A new shadow whispered the truth.",
			"Is it hope, or the start of deeper despair?"
		],
		"japanese": [
			"終わりのない関門、終わりのない失敗。",
			"親切だった案内人は消え、",
			"新たな影が真実を囁いた。",
			"それは希望か、それともより深い絶望の始まりか。"
		],
		"chinese": [
			"无尽的关卡，无尽的失败。",
			"曾友善的向导消失了，",
			"新的影子低语着真相。",
			"这是希望，还是更深绝望的开始？"
		],
		"french": [
			"Portes infinies, échecs infinis.",
			"Le guide bienveillant a disparu,",
			"Une nouvelle ombre chuchota la vérité.",
			"Est-ce l'espoir, ou le début d'un désespoir plus profond ?"
		],
		"spanish": [
			"Puertas infinitas, fracasos infinitos.",
			"La amable guía desapareció,",
			"Una nueva sombra susurró la verdad.",
			"¿Es esperanza, o el comienzo de una desesperación más profunda?"
		],
		"vietnamese": [
			"Cánh cổng vô tận, thất bại vô tận.",
			"Người dẫn đường thân thiện đã biến mất,",
			"Một bóng tối mới thì thầm sự thật.",
			"Đó là hy vọng, hay khởi đầu của sự tuyệt vọng sâu sắc hơn?"
		],
		"thai": [
			"ประตูที่ไม่มีที่สิ้นสุด, ความล้มเหลวที่ไม่มีที่สิ้นสุด",
			"ไกด์ผู้น่ารักหายไป,",
			"เงาใหม่กระซิบความจริง",
			"มันคือความหวัง, หรือจุดเริ่มต้นของความสิ้นหวังที่ลึกซึ้งกว่ากัน?"
		],
		"hindi": [
			"अंतहीन द्वार, अंतहीन असफलता।",
			"दयालु मार्गदर्शक गायब हो गया,",
			"एक नई छाया ने सच फुसफुसाया।",
			"क्या यह आशा है, या गहरे निराशा की शुरुआत?"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "모든 것이 닫힌 공간. 길은 보이지 않았다.",
						"english": "A closed space. No path visible.",
						"japanese": "全てが閉ざされた空間。道は見えなかった。",
						"chinese": "一个封闭的空间。看不到路。",
						"french": "Un espace clos. Aucun chemin visible.",
						"spanish": "Un espacio cerrado. No se veía ningún camino.",
						"vietnamese": "Một không gian khép kín. Không thấy đường.",
						"thai": "พื้นที่ปิดตาย. ไม่เห็นทาง.",
						"hindi": "एक बंद जगह। कोई रास्ता नहीं दिख रहा था।"
					}
				},
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "bex",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "기다렸어. 늦지 않아서 다행이야.",
						"english": "I've been waiting. Glad you're not late.",
						"japanese": "待っていた。遅れなくてよかった。",
						"chinese": "我一直在等你。幸好你没迟到。",
						"french": "Je t'attendais. Heureux que tu ne sois pas en retard.",
						"spanish": "Te he estado esperando. Me alegro de que no llegues tarde.",
						"vietnamese": "Tôi đã đợi. May mà bạn không đến muộn.",
						"thai": "ฉันรออยู่. ดีใจที่ไม่มาสาย.",
						"hindi": "मैं इंतज़ार कर रहा था। अच्छा हुआ तुम देर से नहीं आए।"
					},
					"speaker": "bex"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "누구시죠?",
						"english": "Who are you?",
						"japanese": "どなたですか？",
						"chinese": "你是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Bạn là ai?",
						"thai": "คุณคือใคร?",
						"hindi": "तुम कौन हो?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "bex",
					"content": {
						"korean": "벡스. 과거, 이 시스템의 연구원이었지.",
						"english": "Vex. Formerly a researcher for this system.",
						"japanese": "ヴェックス。かつて、このシステムの研究員だった。",
						"chinese": "维克斯。过去，曾是这个系统的研究员。",
						"french": "Vex. Ancien chercheur pour ce système.",
						"spanish": "Vex. Antiguamente, investigador de este sistema.",
						"vietnamese": "Vex. Trước đây, là một nhà nghiên cứu của hệ thống này.",
						"thai": "เว็กซ์. อดีตนักวิจัยของระบบนี้.",
						"hindi": "वेक्स। पहले, इस प्रणाली का शोधकर्ता था।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "bex",
					"content": {
						"korean": "여긴 위험해. 보이는 게 다가 아니야.",
						"english": "It's dangerous here. What you see isn't everything.",
						"japanese": "ここは危険だ。見えているものが全てじゃない。",
						"chinese": "这里很危险。你所看到的并非全部。",
						"french": "C'est dangereux ici. Ce que tu vois n'est pas tout.",
						"spanish": "Aquí es peligroso. Lo que ves no es todo.",
						"vietnamese": "Nơi đây nguy hiểm. Những gì bạn thấy không phải là tất cả.",
						"thai": "ที่นี่อันตราย. สิ่งที่คุณเห็นไม่ใช่ทั้งหมด.",
						"hindi": "यहाँ खतरनाक है। जो तुम देखते हो वह सब कुछ नहीं है।"
					}
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "bex"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "bex",
					"content": {
						"korean": "이 시스템… 완벽하지 않아.",
						"english": "This system... isn't perfect.",
						"japanese": "このシステム…完璧じゃない。",
						"chinese": "这个系统……并不完美。",
						"french": "Ce système... n'est pas parfait.",
						"spanish": "Este sistema... no es perfecto.",
						"vietnamese": "Hệ thống này... không hoàn hảo.",
						"thai": "ระบบนี้...ไม่สมบูรณ์แบบ.",
						"hindi": "यह प्रणाली... सही नहीं है।"
					}
				},
				{
					"content": {
						"korean": "무슨 소리예요?",
						"english": "What do you mean?",
						"japanese": "どういうことですか？",
						"chinese": "你在说什么？",
						"french": "Que voulez-vous dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Bạn đang nói gì vậy?",
						"thai": "คุณกำลังพูดถึงอะไร?",
						"hindi": "आप क्या कह रहे हैं?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "결함이 있었어. 특정 코드가 모든 걸 망쳤지.",
						"english": "There was a flaw. A specific code ruined everything.",
						"japanese": "欠陥があった。特定のコードが全てを台無しにした。",
						"chinese": "有个缺陷。一段特定的代码毁了一切。",
						"french": "Il y avait un défaut. Un code spécifique a tout gâché.",
						"spanish": "Hubo un fallo. Un código específico lo arruinó todo.",
						"vietnamese": "Có một lỗi. Một đoạn mã cụ thể đã hủy hoại mọi thứ.",
						"thai": "มีข้อบกพร่อง โค้ดบางตัวทำลายทุกอย่าง",
						"hindi": "एक दोष था। एक विशिष्ट कोड ने सब कुछ बर्बाद कर दिया।"
					},
					"speaker": "bex"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "코드가 뭘 망쳤다는 거예요?",
						"english": "What did the code ruin?",
						"japanese": "コードが何を台無しにしたんですか？",
						"chinese": "代码毁了什么？",
						"french": "Qu'est-ce que le code a gâché ?",
						"spanish": "¿Qué arruinó el código?",
						"vietnamese": "Đoạn mã đã hủy hoại điều gì?",
						"thai": "โค้ดทำลายอะไร?",
						"hindi": "कोड ने क्या बर्बाद किया?"
					},
					"speaker": "character_any"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "bex",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						3
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그 코드는… 인증을 왜곡하고, 길을 막아.",
						"english": "That code... it distorts authentication, blocks the path.",
						"japanese": "そのコードは…認証を歪め、道を塞ぐ。",
						"chinese": "那个代码… 它扭曲认证，阻挡去路。",
						"french": "Ce code... il falsifie l'authentification, bloque le chemin.",
						"spanish": "Ese código... distorsiona la autenticación y bloquea el camino.",
						"vietnamese": "Đoạn mã đó… nó làm sai lệch xác thực, chặn đường.",
						"thai": "โค้ดนั้น... มันบิดเบือนการยืนยันตัวตน, และปิดกั้นเส้นทาง",
						"hindi": "वह कोड... प्रमाणीकरण को विकृत करता है, रास्ता रोकता है।"
					},
					"speaker": "bex"
				},
				{
					"content": {
						"korean": "너희의 실패, 전부 그 코드 때문이야.",
						"english": "Your failures, all because of that code.",
						"japanese": "お前たちの失敗、全てはそのコードのせいだ。",
						"chinese": "你们的失败，全都是因为那个代码。",
						"french": "Vos échecs, tout cela est à cause de ce code.",
						"spanish": "Vuestros fracasos, todo es por culpa de ese código.",
						"vietnamese": "Mọi thất bại của các ngươi, tất cả là do đoạn mã đó.",
						"thai": "ความล้มเหลวของพวกแก, ทั้งหมดเป็นเพราะโค้ดนั้น.",
						"hindi": "तुम्हारी सारी असफलताएं, सब उस कोड की वजह से हैं।"
					},
					"speaker": "bex",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그럼… 지금까지의 실패가 전부 함정이었다는 말인가요?",
						"english": "So... all our failures until now were a trap?",
						"japanese": "じゃあ…これまでの失敗は全て罠だったと？",
						"chinese": "那么… 迄今为止的失败，全都是陷阱吗？",
						"french": "Alors... tous nos échecs jusqu'à présent n'étaient qu'un piège ?",
						"spanish": "Entonces... ¿todos nuestros fracasos hasta ahora fueron una trampa?",
						"vietnamese": "Vậy là… tất cả thất bại từ trước đến nay đều là bẫy sao?",
						"thai": "ถ้าอย่างนั้น... ความล้มเหลวทั้งหมดจนถึงตอนนี้คือกับดักงั้นเหรอ?",
						"hindi": "तो... अब तक की हमारी सारी असफलताएं एक जाल थीं?"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "그래. 처음부터 너희를 가두기 위한.",
						"english": "Yes. To trap you from the very beginning.",
						"japanese": "そうだ。最初からお前たちを閉じ込めるためだ。",
						"chinese": "是的。从一开始就是为了困住你们。",
						"french": "Oui. Pour vous piéger depuis le début.",
						"spanish": "Sí. Para atraparos desde el principio.",
						"vietnamese": "Đúng vậy. Để nhốt các ngươi ngay từ đầu.",
						"thai": "ใช่. เพื่อดักพวกแกตั้งแต่แรก.",
						"hindi": "हां। तुम्हें शुरू से फंसाने के लिए।"
					},
					"speaker": "bex",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "bex",
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						4
					],
					"duration_ms": 500
				},
				{
					"speaker": "bex",
					"content": {
						"korean": "이제 돌아갈 수 없어. 시스템이 너희를 놓지 않아.",
						"english": "You can't go back now. The system won't let you go.",
						"japanese": "もう戻れない。システムがお前たちを離さない。",
						"chinese": "现在回不去了。系统不会放过你们的。",
						"french": "Vous ne pouvez plus revenir en arrière. Le système ne vous lâchera pas.",
						"spanish": "Ya no puedes volver. El sistema no te soltará.",
						"vietnamese": "Giờ không thể quay lại được nữa. Hệ thống sẽ không buông tha các ngươi.",
						"thai": "ตอนนี้กลับไปไม่ได้แล้ว. ระบบจะไม่ปล่อยพวกแกไป.",
						"hindi": "अब तुम वापस नहीं जा सकते। सिस्टम तुम्हें जाने नहीं देगा।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "막아야 해. 이대로 당할 순 없어.",
						"english": "We have to stop it. We can't just take this.",
						"japanese": "止めなければならない。このままやられるわけにはいかない。",
						"chinese": "必须阻止。不能就这样坐以待毙。",
						"french": "Il faut l'arrêter. On ne peut pas juste subir ça.",
						"spanish": "Tenemos que detenerlo. No podemos simplemente aguantar esto.",
						"vietnamese": "Phải ngăn chặn. Không thể cứ thế mà chịu đựng.",
						"thai": "ต้องหยุดมัน. เราจะยอมแพ้แบบนี้ไม่ได้.",
						"hindi": "हमें इसे रोकना होगा। हम ऐसे हार नहीं मान सकते।"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "bex",
					"content": {
						"korean": "혼란에 빠져야 해. 그래야 코드가 약해져.",
						"english": "It must fall into chaos. That's how the code weakens.",
						"japanese": "混乱に陥らせるべきだ。そうすればコードが弱まる。",
						"chinese": "必须陷入混乱。那样代码才会变弱。",
						"french": "Il faut semer le chaos. C'est ainsi que le code s'affaiblit.",
						"spanish": "Debe caer en el caos. Así es como el código se debilita.",
						"vietnamese": "Phải tạo ra sự hỗn loạn. Chỉ khi đó đoạn mã mới suy yếu.",
						"thai": "ต้องสร้างความปั่นป่วน. นั่นแหละโค้ดถึงจะอ่อนแอลง.",
						"hindi": "इसे अराजकता में डूबना होगा। तभी कोड कमजोर होगा।"
					}
				},
				{
					"content": {
						"korean": "혼란…?",
						"english": "Confusion...?",
						"japanese": "混乱…？",
						"chinese": "混乱…？",
						"french": "Confusion...?",
						"spanish": "¿Confusión...?",
						"vietnamese": "Hỗn loạn...?",
						"thai": "ความสับสน...?",
						"hindi": "भ्रम…?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "어둠 속에서 거대한 그림자가 움직였다. 감시하는 자.",
						"english": "A giant shadow moved in the darkness. The Observer.",
						"japanese": "闇の中で巨大な影が動いた。監視者。",
						"chinese": "黑暗中，一个巨大的影子在移动。监视者。",
						"french": "Une ombre gigantesque bougea dans l'obscurité. L'Observateur.",
						"spanish": "Una sombra gigante se movió en la oscuridad. El Observador.",
						"vietnamese": "Một bóng đen khổng lồ di chuyển trong bóng tối. Kẻ Quan Sát.",
						"thai": "เงาขนาดยักษ์เคลื่อนไหวในความมืด ผู้เฝ้ามอง",
						"hindi": "अंधेरे में एक विशाल छाया हिल रही थी। वह देखने वाला।"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크크… 겨우 이 정도…?",
						"english": "Heh heh... Is that all you've got...?",
						"japanese": "クク…たったこれだけ…？",
						"chinese": "呵呵…就这点本事…？",
						"french": "Hé hé... C'est tout ce que tu as...?",
						"spanish": "Je je... ¿Es todo lo que tienes...?",
						"vietnamese": "Khà khà... Chỉ có thế thôi sao...?",
						"thai": "ฮ่าๆ... แค่นี้เองเหรอ...?",
						"hindi": "ही ही… बस इतना ही…?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "시스템은… 영원히 너희를 옭아맬 거야.",
						"english": "The System... will forever shackle you.",
						"japanese": "システムは…永遠にお前たちを縛り続けるだろう。",
						"chinese": "系统…会永远束缚你们。",
						"french": "Le Système... vous enchaînera pour toujours.",
						"spanish": "El Sistema... los encadenará para siempre.",
						"vietnamese": "Hệ thống... sẽ mãi mãi trói buộc các ngươi.",
						"thai": "ระบบ...จะพันธนาการพวกเจ้าตลอดไป",
						"hindi": "सिस्टम... तुम्हें हमेशा के लिए जकड़ लेगा।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아니. 우린 방법을 찾을 거야.",
						"english": "No. We will find a way.",
						"japanese": "いいえ。私たちは方法を見つけるでしょう。",
						"chinese": "不。我们会找到办法的。",
						"french": "Non. Nous trouverons un moyen.",
						"spanish": "No. Encontraremos la manera.",
						"vietnamese": "Không. Chúng ta sẽ tìm cách.",
						"thai": "ไม่. เราจะหาวิธี",
						"hindi": "नहीं। हम कोई रास्ता निकालेंगे।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "쓰러진 {random_boss} 뒤로, 또 다른 관문이 드러났다.",
						"english": "Beyond the fallen {random_boss}, another gateway appeared.",
						"japanese": "倒れた{random_boss}の向こうに、別の関門が現れた。",
						"chinese": "倒下的{random_boss}身后，又一道关卡显现。",
						"french": "Derrière le {random_boss} abattu, un autre portail apparut.",
						"spanish": "Tras el {random_boss} caído, otra puerta se reveló.",
						"vietnamese": "Phía sau {random_boss} đã gục ngã, một cánh cổng khác hiện ra.",
						"thai": "เบื้องหลัง {random_boss} ที่ล้มลง ประตูอีกบานก็เผยออกมา",
						"hindi": "गिरे हुए {random_boss} के पीछे, एक और द्वार प्रकट हुआ।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "실패는 끝이 아니었다. 절망은 더욱 깊어질 뿐.",
						"english": "Failure was not the end. Despair only deepened.",
						"japanese": "失敗は終わりではなかった。絶望は深まるばかり。",
						"chinese": "失败并非终点。绝望只会更深。",
						"french": "L'échec n'était pas la fin. Le désespoir ne fit que s'intensifier.",
						"spanish": "El fracaso no fue el final. La desesperación solo se hizo más profunda.",
						"vietnamese": "Thất bại không phải là kết thúc. Nỗi tuyệt vọng chỉ càng thêm sâu sắc.",
						"thai": "ความล้มเหลวไม่ใช่จุดจบ ความสิ้นหวังยิ่งทวีความรุนแรงขึ้น",
						"hindi": "हार अंत नहीं थी। निराशा और गहरी होती गई।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 저항… 예상했던 결과군.",
						"english": "Futile resistance... The expected outcome.",
						"japanese": "些細な抵抗…予想通りの結果だ。",
						"chinese": "微不足道的抵抗…意料之中。",
						"french": "Résistance futile... Le résultat attendu.",
						"spanish": "Resistencia inútil... El resultado esperado.",
						"vietnamese": "Sự kháng cự vô ích... Kết quả đã dự đoán.",
						"thai": "การต่อต้านที่ไร้ค่า... ผลลัพธ์ที่คาดไว้",
						"hindi": "तुच्छ प्रतिरोध... यही तो अपेक्षित परिणाम था।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "...이대로는 안 돼.",
						"english": "...Not like this.",
						"japanese": "…このままではいけない。",
						"chinese": "……不能这样下去。",
						"french": "...Cela ne peut pas continuer ainsi.",
						"spanish": "...Así no podemos seguir.",
						"vietnamese": "...Không thể như thế này được.",
						"thai": "...แบบนี้ไม่ได้",
						"hindi": "...ऐसे नहीं चलेगा।"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "다시… 시도할 거야.",
						"english": "I will try again.",
						"japanese": "もう一度…試す。",
						"chinese": "我会…再试一次。",
						"french": "Je vais… réessayer.",
						"spanish": "Lo intentaré… de nuevo.",
						"vietnamese": "Ta sẽ... thử lại.",
						"thai": "จะลอง...อีกครั้ง",
						"hindi": "मैं... फिर कोशिश करूंगा।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "아무리 발버둥쳐도… 결국 이 시스템의 일부가 될 뿐.",
						"english": "No matter how hard you struggle... you'll only become part of this System.",
						"japanese": "どれだけ足掻いても…結局このシステムの一部となるだけだ。",
						"chinese": "无论如何挣扎…终究只会成为这个系统的一部分。",
						"french": "Peu importe vos efforts... vous ne deviendrez qu'une partie de ce Système.",
						"spanish": "Por mucho que patalees... al final, solo serás parte de este Sistema.",
						"vietnamese": "Dù có vùng vẫy thế nào... cuối cùng cũng chỉ trở thành một phần của hệ thống này mà thôi.",
						"thai": "ไม่ว่าเจ้าจะดิ้นรนแค่ไหน...สุดท้ายก็จะเป็นเพียงส่วนหนึ่งของระบบนี้",
						"hindi": "चाहे तुम कितनी भी कोशिश करो... अंततः तुम इस सिस्टम का हिस्सा बन जाओगे।"
					}
				}
			],
			"dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "혼란에 빠진 인간들. 흥미롭군.",
						"english": "Humans in chaos. Interesting.",
						"japanese": "混乱する人間たち。興味深い。",
						"chinese": "陷入混乱的人类。真有趣。",
						"french": "Des humains dans le chaos. Intéressant.",
						"spanish": "Humanos en caos. Interesante.",
						"vietnamese": "Con người trong hỗn loạn. Thật thú vị.",
						"thai": "มนุษย์ในความสับสน น่าสนใจ",
						"hindi": "अराजकता में डूबे इंसान। दिलचस्प।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 모든 걸 꾸민 거야?",
						"english": "Did you orchestrate all this?",
						"japanese": "あなたがこれらすべてを仕組んだの？",
						"chinese": "这一切都是你策划的吗？",
						"french": "As-tu orchestré tout cela ?",
						"spanish": "¿Orquestaste todo esto?",
						"vietnamese": "Ngươi đã dàn xếp tất cả chuyện này à?",
						"thai": "คุณเป็นคนบงการเรื่องทั้งหมดนี้หรือเปล่า?",
						"hindi": "क्या यह सब तुम्हारी साज़िश है?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "꾸민 게 아니야. 진실을 보여주는 거지.",
						"english": "Not orchestrated. Revealing the truth.",
						"japanese": "仕組んだのではない。真実を見せているだけだ。",
						"chinese": "并非策划。只是展现真相。",
						"french": "Non orchestré. Je révèle la vérité.",
						"spanish": "No orquestado. Revelando la verdad.",
						"vietnamese": "Không phải dàn xếp. Mà là tiết lộ sự thật.",
						"thai": "ไม่ได้บงการ แค่เผยความจริง",
						"hindi": "साज़िश नहीं। सच दिखा रहा हूँ।"
					},
					"speaker": "random_boss"
				},
				{
					"action": "enter",
					"speaker": "bex",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "{random_boss}, 더 이상은 안 돼!",
						"english": "{random_boss}, no more!",
						"japanese": "{random_boss}、もうたくさんだ！",
						"chinese": "{random_boss}，到此为止！",
						"french": "{random_boss}, pas plus !",
						"spanish": "¡{random_boss}, no más!",
						"vietnamese": "{random_boss}, không thể nữa!",
						"thai": "{random_boss} พอได้แล้ว!",
						"hindi": "{random_boss}, और नहीं!"
					},
					"speaker": "bex"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "벡스… 배신자는 언제나 시끄럽군.",
						"english": "Vex... Traitors are always noisy.",
						"japanese": "ヴェックス…裏切り者はいつも騒がしいな。",
						"chinese": "维克斯……叛徒总是那么吵闹。",
						"french": "Vex... Les traîtres sont toujours bruyants.",
						"spanish": "Vex... Los traidores siempre son ruidosos.",
						"vietnamese": "Vex... Kẻ phản bội luôn ồn ào.",
						"thai": "เว็กซ์... คนทรยศมักจะเสียงดังเสมอ",
						"hindi": "वेक्स… गद्दार हमेशा शोर मचाते हैं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 400,
					"direction": "down",
					"type": "direction",
					"speaker": "bex",
					"action": "exit"
				},
				{
					"content": {
						"korean": "벡스의 말이 맞아. 너를 막겠어.",
						"english": "Vex is right. We'll stop you.",
						"japanese": "ヴェックスの言う通りだ。あなたを止める。",
						"chinese": "维克斯说得对。我们会阻止你。",
						"french": "Vex a raison. Nous t'arrêterons.",
						"spanish": "Vex tiene razón. Te detendremos.",
						"vietnamese": "Vex nói đúng. Chúng tôi sẽ ngăn cản ngươi.",
						"thai": "เว็กซ์พูดถูก เราจะหยุดคุณ",
						"hindi": "वेक्स सही कह रहा है। हम तुम्हें रोकेंगे।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "할 수 있을까? 너희는 계속 실패할 텐데.",
						"english": "Can you? You'll just keep failing.",
						"japanese": "できるのか？お前たちは何度も失敗するだろうに。",
						"chinese": "能做到吗？你们只会不断失败。",
						"french": "Le pouvez-vous ? Vous ne ferez que échouer encore et encore.",
						"spanish": "¿Podrás? Solo seguirás fallando.",
						"vietnamese": "Ngươi có thể không? Ngươi sẽ chỉ tiếp tục thất bại thôi.",
						"thai": "ทำได้เหรอ? พวกเจ้าจะล้มเหลวต่อไปเรื่อยๆ",
						"hindi": "क्या तुम कर पाओगे? तुम तो बस असफल होते रहोगे।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	]
} as const;
