export const scenario_snowy_luminaria_10_02 = {
	"scenario_id": "snowy_luminaria_10_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"anuk": {
			"id": "mon_8736797d-779a-4748-8633-d15c1eaf9be7",
			"name": {
				"korean": "아눅",
				"english": "Anuk",
				"japanese": "アヌーク",
				"chinese": "阿努克",
				"french": "Anuk",
				"spanish": "Anuk",
				"vietnamese": "Anuk",
				"thai": "อนุก",
				"hindi": "अनुक"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/19485274-e873-45c8-5043-f4ff65aa2a00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9a79ecfd-8cc6-4461-3790-763822522500/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"얼어붙은 유적 깊은 곳.",
			"그곳엔 잊혀진 예언자의 기록이 잠들어 있었다.",
			"잔류 영혼 아눅은 금지된 지식을 경고했지만,",
			"루미나리아의 그림자는 이미 드리워져 있었다.",
			"불길한 예감은 현실이 되어가고 있었다."
		],
		"english": [
			"Deep within the frozen ruins.",
			"There, the forgotten prophet's records lay dormant.",
			"Anuk, the lingering spirit, warned against forbidden knowledge, but...",
			"Luminaria's shadow had already fallen.",
			"The ominous premonition was becoming reality."
		],
		"japanese": [
			"凍てつく遺跡の奥深く。",
			"そこには、忘れられた預言者の記録が眠っていた。",
			"残留魂アヌークは禁断の知識を警告したが、",
			"ルミナリアの影はすでに落ちていた。",
			"不吉な予感は現実になりつつあった。"
		],
		"chinese": [
			"冰冻遗迹深处。",
			"沉睡着被遗忘的预言者的记录。",
			"残留的灵魂阿努克警告了禁忌的知识，但…",
			"卢米纳利亚的阴影已经笼罩。",
			"不祥的预感正在成为现实。"
		],
		"french": [
			"Au plus profond des ruines gelées.",
			"Là, les écrits du prophète oublié sommeillaient.",
			"Anuk, l'esprit persistant, mit en garde contre le savoir interdit, mais...",
			"L'ombre de Luminaria était déjà tombée.",
			"Le sinistre pressentiment devenait réalité."
		],
		"spanish": [
			"En lo profundo de las ruinas congeladas.",
			"Allí, los registros del profeta olvidado yacían inactivos.",
			"Anuk, el espíritu persistente, advirtió contra el conocimiento prohibido, pero...",
			"La sombra de Luminaria ya se había cernido.",
			"La ominosa premonición se estaba volviendo realidad."
		],
		"vietnamese": [
			"Sâu thẳm trong di tích băng giá.",
			"Ở đó, những ghi chép của nhà tiên tri bị lãng quên đang ngủ yên.",
			"Linh hồn còn sót lại Anuk đã cảnh báo về kiến thức cấm, nhưng…",
			"Bóng tối của Luminaria đã bao trùm.",
			"Linh cảm đáng ngại đang trở thành hiện thực."
		],
		"thai": [
			"ลึกเข้าไปในซากปรักหักพังอันเยือกแข็ง",
			"ที่นั่น บันทึกของนักพยากรณ์ผู้ถูกลืมหลับใหลอยู่",
			"อานุก วิญญาณที่ยังคงอยู่ เตือนถึงความรู้ต้องห้าม แต่…",
			"เงาของลูมินาเรียได้ปกคลุมแล้ว",
			"ลางร้ายกำลังกลายเป็นความจริง"
		],
		"hindi": [
			"जमी हुई खंडहरों की गहराइयों में।",
			"वहाँ, भूले हुए पैगंबर के अभिलेख निष्क्रिय पड़े थे।",
			"बची हुई आत्मा अनूक ने निषिद्ध ज्ञान के प्रति आगाह किया, लेकिन...",
			"लुमिनारिया की छाया पहले ही पड़ चुकी थी।",
			"अशुभ पूर्वाभास हकीकत बनता जा रहा था।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "첫 번째 유적을 지나, 차갑고 거대한 문이 열렸다.",
						"english": "Beyond the first ruin, a cold, colossal gate opened.",
						"japanese": "最初の遺跡を過ぎ、冷たく巨大な門が開いた。",
						"chinese": "穿过第一座遗迹，一扇冰冷巨大的门打开了。",
						"french": "Passé les premières ruines, un portail froid et colossal s'ouvrit.",
						"spanish": "Más allá de la primera ruina, una puerta fría y colosal se abrió.",
						"vietnamese": "Vượt qua di tích đầu tiên, một cánh cổng khổng lồ, lạnh lẽo mở ra.",
						"thai": "ผ่านซากปรักหักพังแรก ประตูบานใหญ่เย็นยะเยือกก็เปิดออก",
						"hindi": "पहले खंडहर से आगे, एक ठंडा, विशाल द्वार खुला।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "더 깊은 곳으로… 여긴 대체 언제 만들어진 거야?",
						"english": "Deeper still… When was this place even built?",
						"japanese": "さらに奥へ…ここは一体いつ作られたんだ？",
						"chinese": "更深处…这里到底是什么时候建造的？",
						"french": "Plus profond encore… Quand cet endroit a-t-il été construit ?",
						"spanish": "Más profundo aún… ¿Cuándo fue construido este lugar?",
						"vietnamese": "Sâu hơn nữa… Nơi này được xây dựng từ khi nào vậy?",
						"thai": "ลึกเข้าไปอีก… ที่นี่สร้างขึ้นเมื่อไหร่กันแน่?",
						"hindi": "और गहराई में… यह जगह आखिर कब बनी थी?"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "anuk",
					"spot": [
						5,
						2
					],
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "anuk",
					"content": {
						"korean": "…침입자들. 이 얼어붙은 맹세를 깨려는가.",
						"english": "…Intruders. Do you mean to break this frozen oath?",
						"japanese": "…侵入者たち。この凍てついた誓いを破るつもりか。",
						"chinese": "……入侵者。你们想打破这冰冷的誓言吗？",
						"french": "…Intrus. Comptez-vous briser ce serment gelé ?",
						"spanish": "¿Intrusos? ¿Pretendéis romper este juramento congelado?",
						"vietnamese": "…Những kẻ xâm nhập. Các ngươi định phá vỡ lời thề băng giá này sao?",
						"thai": "…ผู้บุกรุก พวกเจ้าคิดจะทำลายคำสาบานอันเยือกแข็งนี้หรือ?",
						"hindi": "…घुसपैठिये। क्या तुम इस जमी हुई शपथ को तोड़ना चाहते हो?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "당신은… 누구지?",
						"english": "Who… are you?",
						"japanese": "あなたは…誰だ？",
						"chinese": "你是…谁？",
						"french": "Qui… es-tu ?",
						"spanish": "¿Quién… eres tú?",
						"vietnamese": "Ngươi là… ai?",
						"thai": "เจ้าคือ… ใคร?",
						"hindi": "तुम… कौन हो?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "anuk",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "나는 아눅. 잊혀진 예언의 기록을 지키는 자.",
						"english": "I am Anuk. Guardian of the forgotten prophecy's records.",
						"japanese": "私はアヌーク。忘れられた預言の記録を守る者だ。",
						"chinese": "我是阿努克。守护着被遗忘的预言记录之人。",
						"french": "Je suis Anuk. Gardien des écrits de la prophétie oubliée.",
						"spanish": "Soy Anuk. Guardián de los registros de la profecía olvidada.",
						"vietnamese": "Ta là Anuk. Kẻ canh giữ những ghi chép của lời tiên tri bị lãng quên.",
						"thai": "ข้าคืออานุก ผู้พิทักษ์บันทึกคำพยากรณ์ที่ถูกลืม",
						"hindi": "मैं अनूक हूँ। भूले हुए भविष्य की भविष्यवाणियों के अभिलेखों का संरक्षक।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "너희는 금지된 지식을 찾고 있다. 그 대가를 알면서도?",
						"english": "You seek forbidden knowledge. Do you know the price?",
						"japanese": "禁じられた知識を求めているのか。その代償を知っていても？",
						"chinese": "你们正在寻求禁忌的知识。明知代价为何，亦不罢休？",
						"french": "Vous cherchez le savoir interdit. Connaissez-vous le prix ?",
						"spanish": "¿Buscáis conocimiento prohibido? ¿Aun sabiendo el precio?",
						"vietnamese": "Ngươi đang tìm kiếm tri thức cấm. Ngươi có biết cái giá phải trả không?",
						"thai": "พวกเจ้ากำลังแสวงหาความรู้ต้องห้าม รู้ถึงผลกรรมแล้วหรือ?",
						"hindi": "तुम निषिद्ध ज्ञान की तलाश में हो। क्या तुम इसकी कीमत जानते हो?"
					},
					"speaker": "anuk",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "anuk",
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "anuk",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "경고를 무시하는 자, 대가를 치를 것이다.",
						"english": "Those who ignore warnings shall pay the price.",
						"japanese": "警告を無視する者、代償を払うことになるだろう。",
						"chinese": "无视警告者，必将付出代价。",
						"french": "Ceux qui ignorent les avertissements paieront le prix.",
						"spanish": "Quienes ignoren las advertencias, pagarán el precio.",
						"vietnamese": "Kẻ nào coi thường lời cảnh báo, sẽ phải trả giá.",
						"thai": "ผู้ใดไม่สนใจคำเตือน ผู้นั้นจะต้องชดใช้",
						"hindi": "जो चेतावनी को नज़रअंदाज़ करते हैं, उन्हें कीमत चुकानी पड़ेगी।"
					}
				},
				{
					"content": {
						"korean": "…봐라. 이것이 너희가 겪게 될 운명의 파편이다.",
						"english": "...Behold. This is a fragment of the fate awaiting you.",
						"japanese": "…見よ。これがお前たちが辿る運命の断片だ。",
						"chinese": "……看啊。这是你们即将遭遇的命运碎片。",
						"french": "...Regardez. C'est un fragment du destin qui vous attend.",
						"spanish": "...Contemplad. Este es un fragmento del destino que os aguarda.",
						"vietnamese": "...Hãy nhìn xem. Đây là một mảnh vỡ của số phận đang chờ đợi ngươi.",
						"thai": "...จงดู นี่คือชิ้นส่วนของชะตากรรมที่รอเจ้าอยู่",
						"hindi": "...देखो। यह तुम्हारे भाग्य का एक अंश है जो तुम्हें भुगतना होगा।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "anuk"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "주변 풍경이 일그러지며 환영이 스쳐 지나갔다. 희미한 속삭임이 들려오는 듯했다.",
						"english": "The surroundings warped, and illusions flickered past. Faint whispers seemed to drift.",
						"japanese": "周囲の風景が歪み、幻影が過ぎ去った。微かな囁きが聞こえてくるようだった。",
						"chinese": "周围的景象扭曲，幻象一闪而过。隐约传来低语声。",
						"french": "Le paysage se déforma, et des illusions passèrent. De faibles murmures semblaient flotter.",
						"spanish": "El paisaje circundante se distorsionó, y visiones fugaces pasaron. Débiles susurros parecían flotar.",
						"vietnamese": "Cảnh vật xung quanh méo mó, ảo ảnh lướt qua. Dường như có tiếng thì thầm yếu ớt vọng lại.",
						"thai": "ทิวทัศน์รอบข้างบิดเบี้ยว ภาพลวงตาฉายวูบผ่านมา ราวกับมีเสียงกระซิบแผ่วเบา",
						"hindi": "आसपास का दृश्य विकृत हो गया, और भ्रम छा गए। हल्की फुसफुसाहट सुनाई देने लगी।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이건… 뭐야?",
						"english": "What... is this?",
						"japanese": "これ…何だ？",
						"chinese": "这…是什么？",
						"french": "Qu'est-ce que... c'est ?",
						"spanish": "¿Qué... es esto?",
						"vietnamese": "Đây là... gì vậy?",
						"thai": "นี่มัน...อะไร?",
						"hindi": "यह... क्या है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "예언… 반복… 파멸… 그 끝없는 고리.",
						"english": "Prophecy... Repetition... Ruin... The endless cycle.",
						"japanese": "予言…反復…破滅…その終わらない輪。",
						"chinese": "预言……重复……毁灭……那无尽的循环。",
						"french": "Prophétie... Répétition... Ruine... La boucle sans fin.",
						"spanish": "Profecía... Repetición... Ruina... El ciclo interminable.",
						"vietnamese": "Lời tiên tri... Lặp lại... Hủy diệt... Cái vòng luẩn quẩn không hồi kết.",
						"thai": "คำทำนาย... การซ้ำรอย... หายนะ... วงจรที่ไม่มีที่สิ้นสุด",
						"hindi": "भविष्यवाणी... पुनरावृत्ति... विनाश... वह अंतहीन चक्र।"
					},
					"emotion": "sad",
					"speaker": "anuk"
				},
				{
					"type": "speech",
					"content": {
						"korean": "맹세를 어기는 자는 그 굴레에 갇힌다.",
						"english": "Those who break their vows are trapped in the cycle.",
						"japanese": "誓いを破る者は、その桎梏に囚われる。",
						"chinese": "违背誓言者，将受困于此循环。",
						"french": "Ceux qui rompent leurs vœux sont piégés dans cette entrave.",
						"spanish": "Quienes rompen sus juramentos quedan atrapados en esa atadura.",
						"vietnamese": "Kẻ nào phá vỡ lời thề, sẽ bị mắc kẹt trong vòng luẩn quẩn đó.",
						"thai": "ผู้ใดผิดคำสาบาน ผู้นั้นจะถูกจองจำในบ่วงนั้น",
						"hindi": "जो अपनी प्रतिज्ञा तोड़ते हैं, वे उस बंधन में फंस जाते हैं।"
					},
					"speaker": "anuk",
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "anuk",
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "anuk",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "보았는가? 루미나리아의 빛이 드리운 그림자를.",
						"english": "Did you see? The shadow cast by Luminaria's light.",
						"japanese": "見たか？ ルミナリアの光が落とす影を。",
						"chinese": "看到了吗？卢米娜莉亚之光投下的阴影。",
						"french": "As-tu vu ? L'ombre projetée par la lumière de Luminaria.",
						"spanish": "¿Viste? La sombra proyectada por la luz de Luminaria.",
						"vietnamese": "Ngươi đã thấy chưa? Cái bóng đổ xuống từ ánh sáng của Luminaria.",
						"thai": "เจ้าเห็นหรือไม่? เงาที่ทอดลงมาด้วยแสงแห่งลูมินาเรีย",
						"hindi": "क्या तुमने देखा? ल्यूमिनारिया के प्रकाश से बनी परछाई को।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "방금 그 그림자는… 대체 누구지?",
						"english": "That shadow just now... Who was it?",
						"japanese": "今の影は…一体誰なんだ？",
						"chinese": "刚才那个影子……到底是谁？",
						"french": "Cette ombre... Qui était-ce ?",
						"spanish": "Esa sombra de hace un momento... ¿Quién era?",
						"vietnamese": "Cái bóng vừa rồi... Rốt cuộc là ai?",
						"thai": "เงาเมื่อครู่นั้น... ใครกัน?",
						"hindi": "वह परछाई अभी... कौन थी?"
					}
				},
				{
					"content": {
						"korean": "금지된 지식을 좇는 자. 너희 또한 다르지 않다.",
						"english": "Seekers of forbidden knowledge. You are no different.",
						"japanese": "禁じられた知識を追う者。お前たちも同じだ。",
						"chinese": "追逐禁忌知识者。你们也别无二致。",
						"french": "Ceux qui poursuivent le savoir interdit. Vous n'êtes pas différents.",
						"spanish": "Perseguidores del conocimiento prohibido. Vosotros no sois diferentes.",
						"vietnamese": "Kẻ theo đuổi tri thức cấm. Ngươi cũng không khác gì.",
						"thai": "ผู้ที่แสวงหาความรู้ต้องห้าม พวกเจ้าก็ไม่ต่างกัน",
						"hindi": "निषिद्ध ज्ञान के चाहने वाले। तुम भी अलग नहीं हो।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "anuk"
				},
				{
					"emotion": "sad",
					"speaker": "anuk",
					"content": {
						"korean": "예언은 이미 쓰여졌다. 그 누구도 거스를 수 없어.",
						"english": "The prophecy is written. None can defy it.",
						"japanese": "予言は既に書かれた。誰も逆らえない。",
						"chinese": "预言早已注定，无人可以违抗。",
						"french": "La prophétie est déjà écrite. Nul ne peut s'y opposer.",
						"spanish": "La profecía ya está escrita. Nadie puede oponerse.",
						"vietnamese": "Lời tiên tri đã được viết ra. Không ai có thể chống lại.",
						"thai": "คำทำนายถูกเขียนไว้แล้ว ไม่มีใครขัดขวางได้",
						"hindi": "भविष्यवाणी पहले ही लिखी जा चुकी है। कोई इसे टाल नहीं सकता।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "우리가 겪는 일들이… 모두 예언된 거라고?",
						"english": "Everything we're experiencing... is it all prophesied?",
						"japanese": "私たちが経験することは…すべて予言されていたことなのか？",
						"chinese": "我们所经历的一切……都是被预言的吗？",
						"french": "Tout ce que nous vivons... est-ce prophétisé ?",
						"spanish": "¿Todo lo que vivimos... está profetizado?",
						"vietnamese": "Những gì chúng ta đang trải qua... tất cả đều là lời tiên tri ư?",
						"thai": "ทุกสิ่งที่เรากำลังประสบ... ถูกทำนายไว้ทั้งหมดหรือ?",
						"hindi": "जो कुछ हम झेल रहे हैं... क्या यह सब भविष्यवाणी है?"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"speaker": "anuk",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "맹세는 깨졌고, 계약은 잊혀졌다. 대가를 치러야 할 뿐.",
						"english": "The oath is broken, the pact forgotten. Only the price remains.",
						"japanese": "誓いは破られ、契約は忘れ去られた。ただ代償を払うのみ。",
						"chinese": "誓言已破，契约已忘。唯有付出代价。",
						"french": "Le serment est brisé, le pacte oublié. Il faut payer le prix.",
						"spanish": "El juramento está roto, el pacto olvidado. Solo queda pagar el precio.",
						"vietnamese": "Lời thề đã bị phá vỡ, khế ước đã bị lãng quên. Chỉ còn phải trả giá.",
						"thai": "คำสาบานถูกหัก สัญญาถูกลืมเลือน มีแต่ต้องชดใช้",
						"hindi": "शपथ टूट गई, अनुबंध भुला दिया गया। अब बस कीमत चुकानी होगी।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "anuk",
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						2
					],
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"speaker": "anuk",
					"content": {
						"korean": "더 나아가면… 되돌릴 수 없는 반복만이 기다릴 뿐이다.",
						"english": "Go further, and only an irreversible loop awaits.",
						"japanese": "これ以上進めば…取り返しのつかない繰り返しだけが待っている。",
						"chinese": "再往前走……只有不可逆转的循环在等待。",
						"french": "Plus loin... seule une répétition irréversible vous attend.",
						"spanish": "Si avanzas... solo una repetición irreversible te espera.",
						"vietnamese": "Tiến xa hơn... chỉ có một vòng lặp không thể đảo ngược đang chờ đợi.",
						"thai": "หากไปต่อ... มีแต่การวนซ้ำที่ไม่อาจย้อนคืนรออยู่",
						"hindi": "आगे बढ़ने पर... केवल एक अपरिवर्तनीय दोहराव इंतज़ार कर रहा है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아눅! 좀 더 설명해줘!",
						"english": "Anuk! Explain more!",
						"japanese": "アヌク！もっと説明してくれ！",
						"chinese": "阿努克！再多解释一下！",
						"french": "Anuk ! Explique-nous davantage !",
						"spanish": "¡Anuk! ¡Explícanos más!",
						"vietnamese": "Anuk! Giải thích thêm đi!",
						"thai": "อานุก! อธิบายเพิ่มหน่อยสิ!",
						"hindi": "अनूक! और बताओ!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "내 역할은 여기까지. 맹세의 무게는 너희가 짊어져라.",
						"english": "My role ends here. Bear the weight of the oath yourselves.",
						"japanese": "私の役目はここまでだ。誓いの重荷は君たちが背負え。",
						"chinese": "我的职责到此为止。誓言的重担由你们承担。",
						"french": "Mon rôle s'arrête ici. Portez le poids du serment.",
						"spanish": "Mi papel termina aquí. Llevad vosotros el peso del juramento.",
						"vietnamese": "Vai trò của ta đến đây là hết. Các ngươi hãy gánh vác gánh nặng của lời thề.",
						"thai": "หน้าที่ของข้ามีแค่นี้ พวกเจ้าจงแบกรับน้ำหนักของคำสาบานเองเถิด",
						"hindi": "मेरा काम यहीं तक। शपथ का भार तुम उठाओ।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "anuk"
				},
				{
					"direction": "up",
					"type": "direction",
					"action": "exit",
					"speaker": "anuk",
					"duration_ms": 400
				},
				{
					"content": {
						"korean": "아눅의 잔류 영혼은 빛과 함께 흩어졌다. 유적은 다시 침묵에 잠겼다.",
						"english": "Anuk's residual spirit scattered with the light. The ruins fell silent once more.",
						"japanese": "アヌクの残存する魂は光と共に散った。遺跡は再び沈黙に包まれた。",
						"chinese": "阿努克的残魂随光消散。遗迹再次陷入沉寂。",
						"french": "L'esprit résiduel d'Anuk s'est dispersé avec la lumière. Les ruines sont de nouveau tombées dans le silence.",
						"spanish": "El espíritu residual de Anuk se dispersó con la luz. Las ruinas volvieron a caer en silencio.",
						"vietnamese": "Linh hồn sót lại của Anuk tan biến cùng ánh sáng. Di tích lại chìm vào im lặng.",
						"thai": "วิญญาณที่หลงเหลือของอานุกกระจัดกระจายไปพร้อมแสง ซากปรักหักพังกลับเข้าสู่ความเงียบงันอีกครั้ง",
						"hindi": "अनूक की अवशिष्ट आत्मा प्रकाश के साथ बिखर गई। खंडहर फिर से खामोश हो गए।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "결국 아무것도 제대로 듣지 못했잖아!",
						"english": "We didn't hear anything properly in the end!",
						"japanese": "結局何もまともに聞けなかったじゃないか！",
						"chinese": "结果我们什么也没听清楚！",
						"french": "Finalement, nous n'avons rien entendu correctement !",
						"spanish": "¡Al final no escuchamos nada como se debe!",
						"vietnamese": "Cuối cùng chúng ta chẳng nghe được gì ra hồn!",
						"thai": "สุดท้ายเราก็ไม่ได้ยินอะไรเลยนี่นา!",
						"hindi": "आखिर हमें ठीक से कुछ भी तो नहीं सुनाई दिया!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "하지만 그 그림자는… 정말 불안해.",
						"english": "But that shadow... it's truly unsettling.",
						"japanese": "しかしあの影は…本当に不安だ。",
						"chinese": "但那个影子……真让人不安。",
						"french": "Mais cette ombre... est vraiment inquiétante.",
						"spanish": "Pero esa sombra... es realmente inquietante.",
						"vietnamese": "Nhưng cái bóng đó... thật sự đáng lo ngại.",
						"thai": "แต่เงามืดนั่น... น่าเป็นห่วงจริงๆ",
						"hindi": "लेकिन वह परछाई... वाकई परेशान करने वाली है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "유적의 가장 깊은 곳. 거대한 얼음 결정으로 이루어진 공간이 나타났다.",
						"english": "The deepest part of the ruins. A space made of colossal ice crystals appeared.",
						"japanese": "遺跡の最も深い場所。巨大な氷の結晶でできた空間が現れた。",
						"chinese": "遗迹的最深处。一个由巨大冰晶构成的空间出现了。",
						"french": "La partie la plus profonde des ruines. Un espace fait d'immenses cristaux de glace apparut.",
						"spanish": "La parte más profunda de las ruinas. Apareció un espacio hecho de cristales de hielo gigantes.",
						"vietnamese": "Nơi sâu nhất của di tích. Một không gian được tạo thành từ những khối băng khổng lồ đã xuất hiện.",
						"thai": "ส่วนที่ลึกที่สุดของซากปรักหักพัง ปรากฏพื้นที่ที่ทำจากผลึกน้ำแข็งขนาดมหึมา",
						"hindi": "खंडहर का सबसे गहरा हिस्सा। विशाल बर्फ के क्रिस्टल से बना एक स्थान दिखाई दिया।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기가… 유적의 심장부인가?",
						"english": "This is... the heart of the ruins?",
						"japanese": "ここが… 遺跡の心臓部か？",
						"chinese": "这里是… 遗迹的心脏吗？",
						"french": "C'est ici... le cœur des ruines ?",
						"spanish": "¿Aquí es... el corazón de las ruinas?",
						"vietnamese": "Đây là... trái tim của phế tích ư?",
						"thai": "นี่คือ... ใจกลางของซากปรักหักพังหรือ?",
						"hindi": "यह... खंडहरों का हृदय है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "왔구나. 예언이 이끈 대로.",
						"english": "You've come. As the prophecy foretold.",
						"japanese": "来たな。予言に導かれるままに。",
						"chinese": "你来了。正如预言所引导的。",
						"french": "Vous êtes venus. Comme la prophétie l'avait prédit.",
						"spanish": "Has llegado. Como la profecía te guio.",
						"vietnamese": "Ngươi đã đến. Đúng như lời tiên tri dẫn lối.",
						"thai": "เจ้ามาแล้ว. ตามที่คำทำนายนำทางมา.",
						"hindi": "तुम आ गए। जैसा भविष्यवाणी ने बताया था।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "너… 대체 뭐야?",
						"english": "You... what are you, exactly?",
						"japanese": "お前…一体何者だ？",
						"chinese": "你…到底是什么人？",
						"french": "Toi... qu'es-tu, au juste ?",
						"spanish": "Tú... ¿qué eres, exactamente?",
						"vietnamese": "Ngươi... rốt cuộc là ai?",
						"thai": "เจ้า... เป็นใครกันแน่?",
						"hindi": "तुम... आख़िर कौन हो?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "나는 너희의 운명을 지켜보는 자. 그리고 그 운명을 반복시키는 자.",
						"english": "I am the one who watches over your destiny. And the one who makes it repeat.",
						"japanese": "私はお前たちの運命を見守る者。そして、その運命を繰り返させる者。",
						"chinese": "我是守护你们命运之人。也是让这命运不断重复之人。",
						"french": "Je suis celui qui veille sur votre destin. Et celui qui le fait se répéter.",
						"spanish": "Soy quien observa vuestro destino. Y quien lo hace repetir.",
						"vietnamese": "Ta là kẻ canh giữ vận mệnh của các ngươi. Và là kẻ khiến vận mệnh đó lặp lại.",
						"thai": "ข้าคือผู้เฝ้ามองชะตากรรมของพวกเจ้า. และผู้ทำให้ชะตากรรมนั้นซ้ำรอย.",
						"hindi": "मैं तुम्हारी नियति का रखवाला हूँ। और वह भी, जो इसे दोहराता है।"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "너희는 이미 수없이 이 길을 걸어왔다. 기억하지 못할 뿐.",
						"english": "You've walked this path countless times before. You just don't remember.",
						"japanese": "お前たちは既に何度もこの道を歩んできた。ただ覚えていないだけだ。",
						"chinese": "你们早已无数次踏上这条路。只是不记得了。",
						"french": "Vous avez déjà parcouru ce chemin d'innombrables fois. Vous ne vous en souvenez juste pas.",
						"spanish": "Ya habéis recorrido este camino incontables veces. Solo que no lo recordáis.",
						"vietnamese": "Các ngươi đã đi trên con đường này vô số lần rồi. Chỉ là không nhớ mà thôi.",
						"thai": "พวกเจ้าเคยเดินบนเส้นทางนี้มานับครั้งไม่ถ้วนแล้ว. เพียงแต่จำไม่ได้เท่านั้นเอง.",
						"hindi": "तुम पहले भी अनगिनत बार इस रास्ते पर चल चुके हो। बस तुम्हें याद नहीं।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "헛소리 마! 우린 돌아갈 거야!",
						"english": "Don't spout nonsense! We're going back!",
						"japanese": "ふざけるな！私たちは戻るんだ！",
						"chinese": "别胡说！我们要回去！",
						"french": "Arrête tes bêtises ! Nous allons rentrer !",
						"spanish": "¡No digas tonterías! ¡Volveremos!",
						"vietnamese": "Đừng nói nhảm! Chúng ta sẽ quay về!",
						"thai": "อย่ามาพูดไร้สาระ! เราจะกลับไป!",
						"hindi": "बकवास बंद करो! हम वापस जाएँगे!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "…어리석은 자들. 이겼다고 생각하는가?",
						"english": "...Fools. Do you think you've won?",
						"japanese": "…愚かな者たち。勝ったとでも思うのか？",
						"chinese": "…愚蠢的人们。你们以为赢了吗？",
						"french": "...Fous. Pensez-vous avoir gagné ?",
						"spanish": "...Tontos. ¿Creéis que habéis ganado?",
						"vietnamese": "...Những kẻ ngu ngốc. Các ngươi nghĩ mình đã thắng sao?",
						"thai": "...คนโง่เง่า. คิดว่าชนะแล้วหรือ?",
						"hindi": "...मूर्ख। क्या तुम्हें लगता है कि तुम जीत गए?"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "이 모든 것은 반복이다. 너희는 결코 벗어날 수 없어.",
						"english": "All of this is a loop. You can never escape.",
						"japanese": "これは全て繰り返しだ。お前たちは決して逃れられない。",
						"chinese": "这一切都是重复。你们永远无法摆脱。",
						"french": "Tout ceci est une répétition. Vous ne pourrez jamais vous échapper.",
						"spanish": "Todo esto es una repetición. Nunca podréis escapar.",
						"vietnamese": "Tất cả những điều này chỉ là sự lặp lại. Các ngươi không thể nào thoát khỏi.",
						"thai": "ทั้งหมดนี้คือการย้อนรอย. พวกเจ้าไม่มีทางหนีพ้น.",
						"hindi": "यह सब एक दोहराव है। तुम कभी बच नहीं सकते।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "아니야… 우리는 해낼 거야!",
						"english": "No... we'll make it!",
						"japanese": "違う…私たちはやり遂げる！",
						"chinese": "不…我们会的！",
						"french": "Non... nous y arriverons !",
						"spanish": "No... ¡lo lograremos!",
						"vietnamese": "Không... chúng ta sẽ làm được!",
						"thai": "ไม่ใช่... เราจะทำมันสำเร็จ!",
						"hindi": "नहीं... हम इसे कर दिखाएँगे!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "정체 모를 자는 빛과 함께 사라졌다. 하지만 불길한 예감은 짙어졌다.",
						"english": "The unknown figure vanished with a flash of light. But a sense of dread intensified.",
						"japanese": "正体不明の者は光と共に消え去った。しかし、不吉な予感はより一層濃くなった。",
						"chinese": "不明身份者伴随着光芒消失了。然而，不祥的预感却愈发强烈。",
						"french": "L'inconnu disparut avec un éclair de lumière. But un sentiment d'effroi s'intensifia.",
						"spanish": "La figura desconocida desapareció con un destello de luz. Pero una premonición ominosa se intensificó.",
						"vietnamese": "Kẻ bí ẩn biến mất cùng với ánh sáng. Nhưng một dự cảm chẳng lành càng trở nên đậm nét.",
						"thai": "ร่างปริศนาหายไปพร้อมกับแสงสว่าง. แต่ลางสังหรณ์อันน่ากลัวกลับเข้มข้นขึ้น.",
						"hindi": "अज्ञात आकृति प्रकाश के साथ गायब हो गई। लेकिन एक अशुभ आशंका और गहरी हो गई।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "오로라의 빛은 여전히 탐험대를 유혹했다. 광신도들의 속삭임처럼.",
						"english": "The aurora's light still lured the expedition, like cultists' whispers.",
						"japanese": "オーロラの光は、狂信者の囁きのように、探検隊をまだ誘惑していた。",
						"chinese": "极光之光依然诱惑着探险队，如同狂热信徒的低语。",
						"french": "La lumière de l'aurore attirait toujours l'expédition, tel un murmure de fanatiques.",
						"spanish": "La luz de la aurora seguía atrayendo a la expedición, como los susurros de los cultistas.",
						"vietnamese": "Ánh sáng của cực quang vẫn mê hoặc đoàn thám hiểm, như những lời thì thầm của cuồng tín.",
						"thai": "แสงเหนือยังคงล่อลวงคณะสำรวจ ดุจเสียงกระซิบของเหล่าสาวกคลั่ง.",
						"hindi": "अरोरा की रोशनी अभी भी अन्वेषण दल को लुभा रही थी, जैसे कट्टरपंथियों की फुसफुसाहट।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "결국 운명에 굴복하는군. 애초에 정해진 길이었다.",
						"english": "So, you finally succumb to fate. It was a predetermined path from the start.",
						"japanese": "結局、運命に屈するのか。最初から定められた道だった。",
						"chinese": "终究还是屈服于命运。这本就是注定的道路。",
						"french": "Tu succombes enfin au destin. C'était le chemin tracé dès le début.",
						"spanish": "Al final, sucumbes al destino. Era un camino predestinado desde el principio.",
						"vietnamese": "Cuối cùng, ngươi cũng khuất phục số phận. Đó là con đường đã định từ đầu.",
						"thai": "ในที่สุดเจ้าก็จำนนต่อโชคชะตา มันเป็นเส้นทางที่ถูกลิขิตไว้ตั้งแต่แรกแล้ว.",
						"hindi": "अंततः, तुम भाग्य के सामने झुक गए। यह शुरुआत से ही तय रास्ता था।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "젠장… 아직 아니야…!",
						"english": "Damn it... Not yet...!",
						"japanese": "ちくしょう…まだだ…！",
						"chinese": "该死……还没完……！",
						"french": "Bon sang... Pas encore...!",
						"spanish": "¡Maldita sea... Todavía no...!",
						"vietnamese": "Chết tiệt… Chưa đâu…!",
						"thai": "ให้ตายสิ... ยังไม่จบ...!",
						"hindi": "धिक्कार है… अभी नहीं…!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "다음 반복에서, 다시 만나자.",
						"english": "In the next iteration, we meet again.",
						"japanese": "次の繰り返しで、また会おう。",
						"chinese": "下次循环，再会。",
						"french": "Lors de la prochaine itération, nous nous retrouverons.",
						"spanish": "En la próxima repetición, nos encontraremos de nuevo.",
						"vietnamese": "Trong vòng lặp kế tiếp, chúng ta sẽ gặp lại.",
						"thai": "ในการวนซ้ำครั้งหน้า เราจะพบกันอีกครั้ง.",
						"hindi": "अगले पुनरावृति में, फिर मिलेंगे।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				}
			]
		}
	]
} as const;
