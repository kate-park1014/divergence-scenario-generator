export const scenario_hell_crescendo_19_02 = {
	"scenario_id": "hell_crescendo_19_02",
	"order": 2,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"mire": {
			"id": "mon_833c1501-f6d9-49ef-a3bf-8483358444ec",
			"name": {
				"korean": "수렁",
				"english": "Mire",
				"japanese": "泥沼",
				"chinese": "泥沼",
				"french": "Bourbier",
				"spanish": "Ciénaga",
				"vietnamese": "Vũng lầy",
				"thai": "หล่ม",
				"hindi": "दलदल"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/835207dd-0a0a-46b5-ebc9-0349d902c100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/39092adf-c27a-4eca-dfc9-57503122c400/public"
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
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "지옥의 불협화음이 고막을 찢었다. 이성은 희미해진다.",
						"english": "Hell's discord tore at my eardrums. Reason fades.",
						"japanese": "地獄の不協和音が鼓膜を裂いた。理性が薄れていく。",
						"chinese": "地狱的不和谐音撕裂了耳膜。理智渐渐模糊。",
						"french": "La cacophonie infernale déchira mes tympans. La raison s'estompe.",
						"spanish": "La disonancia infernal me desgarró los tímpanos. La razón se desvanece.",
						"vietnamese": "Tiếng bất hòa địa ngục xé rách màng nhĩ. Lý trí mờ nhạt.",
						"thai": "เสียงที่ไม่ประสานกันของนรกฉีกแก้วหู สติปัญญาเลือนลาง",
						"hindi": "नर्क की कलह ने कान के परदे फाड़ दिए। विवेक धुँधला रहा है।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이 소리가… 구원이라고?",
						"english": "This sound... is salvation?",
						"japanese": "この音が…救済だと？",
						"chinese": "这声音……是救赎？",
						"french": "Ce son… le salut ?",
						"spanish": "¿Este sonido… es la salvación?",
						"vietnamese": "Âm thanh này… cứu rỗi sao?",
						"thai": "เสียงนี้… คือการช่วยให้รอดงั้นหรือ?",
						"hindi": "यह आवाज़… मुक्ति है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"action": "enter",
					"speaker": "mire"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그래! 이 소리는… 조화로운 소리야. 너희는 아직 몰라.",
						"english": "Yes! This sound... it's harmony. You just don't understand yet.",
						"japanese": "そうだ！ この音は… 調和の音だ。お前たちはまだ知らないだけだ。",
						"chinese": "是的！这声音……是和谐的声音。你们还不懂。",
						"french": "Oui ! Ce son… c'est une mélodie harmonieuse. Vous ne le savez pas encore.",
						"spanish": "¡Sí! Este sonido… es un sonido armonioso. Todavía no lo sabéis.",
						"vietnamese": "Đúng vậy! Âm thanh này... là sự hài hòa. Các ngươi chưa hiểu thôi.",
						"thai": "ใช่แล้ว! เสียงนี้… คือเสียงที่กลมกลืน พวกเจ้ายังไม่รู้หรอก",
						"hindi": "हाँ! यह आवाज़… एक सामंजस्यपूर्ण आवाज़ है। तुम अभी नहीं जानते।"
					},
					"speaker": "mire",
					"emotion": "happy"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "말도 안 돼. 이건 고통인데!",
						"english": "Nonsense. This is pain!",
						"japanese": "馬鹿な。これは苦痛だ！",
						"chinese": "胡说。这是痛苦！",
						"french": "Absurde. C'est de la souffrance !",
						"spanish": "¡Qué absurdo! ¡Esto es dolor!",
						"vietnamese": "Vớ vẩn. Đây là nỗi đau!",
						"thai": "ไร้สาระ. นี่มันความเจ็บปวดชัดๆ!",
						"hindi": "बकवास। यह तो दर्द है!"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "mire",
					"spot": [
						5,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "mire",
					"content": {
						"korean": "이 모든 불협화음은 '조율'을 위한 과정이야. 곧… 완벽한 '조화'가 올 거야!",
						"english": "All this discord is a process for 'tuning'. Soon... perfect 'harmony' will come!",
						"japanese": "この不協和音はすべて「調律」のための過程だ。すぐに…完璧な「調和」が訪れるだろう！",
						"chinese": "所有这些不和谐音都是为了“调律”的过程。很快……完美的“和谐”就会到来！",
						"french": "Toute cette cacophonie est un processus de 'réglage'. Bientôt… une 'harmonie' parfaite viendra !",
						"spanish": "Toda esta disonancia es un proceso para la 'sintonización'. Pronto… ¡vendrá una 'armonía' perfecta!",
						"vietnamese": "Tất cả sự bất hòa này là quá trình 'điều chỉnh'. Sắp tới… 'hòa âm' hoàn hảo sẽ đến!",
						"thai": "ความไม่ประสานกันทั้งหมดนี้เป็นกระบวนการเพื่อ 'การปรับจูน' อีกไม่นาน… 'ความกลมกลืน' ที่สมบูรณ์แบบจะมาถึง!",
						"hindi": "यह सारी कलह 'सुर मिलाने' की प्रक्रिया है। जल्द ही… पूर्ण 'सामंजस्य' आएगा!"
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "조율? 누가? 뭘 위해서?",
						"english": "Tuning? Who? For what?",
						"japanese": "調律？ 誰が？ 何のために？",
						"chinese": "调律？谁？为了什么？",
						"french": "Réglage ? Qui ? Pour quoi faire ?",
						"spanish": "¿Sintonización? ¿Quién? ¿Para qué?",
						"vietnamese": "Điều chỉnh? Ai? Vì cái gì?",
						"thai": "ปรับจูน? ใคร? เพื่ออะไร?",
						"hindi": "सुर मिलाना? कौन? किसके लिए?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 앞을 막아섰다. 광기의 정점이었다.",
						"english": "A colossal shadow blocked the way. It was the apex of madness.",
						"japanese": "巨大な影が道を塞いだ。狂気の頂点だった。",
						"chinese": "巨大的黑影挡住了去路。那是疯狂的顶点。",
						"french": "Une ombre colossale bloquait le chemin. C'était le summum de la folie.",
						"spanish": "Una sombra colosal bloqueó el camino. Era el cenit de la locura.",
						"vietnamese": "Một bóng đen khổng lồ chặn lối. Đó là đỉnh cao của sự điên loạn.",
						"thai": "เงามหึมาขวางทางอยู่ มันคือจุดสูงสุดของความบ้าคลั่ง",
						"hindi": "एक विशाल छाया ने रास्ता रोक दिया। यह पागलपन का चरम था।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "크아아악! 나의 조화에 이의를 제기하는가?",
						"english": "Kuaaaak! Do you challenge my harmony?",
						"japanese": "クアアアアク！我が調和に異を唱えるのか？",
						"chinese": "吼啊啊啊！你敢质疑我的和谐？",
						"french": "Kuaaaak ! Osez-vous contester mon harmonie ?",
						"spanish": "¡Kuaaaak! ¿Cuestionas mi armonía?",
						"vietnamese": "Kuaaaak! Ngươi dám nghi ngờ sự hài hòa của ta sao?",
						"thai": "คร้ากกก! เจ้ากล้าท้าทายความสามัคคีของข้าหรือ?",
						"hindi": "क्वाहाहाक! क्या तुम मेरी सद्भाव पर सवाल उठाते हो?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "어서… 이 아름다운 조화를 받아들여…!",
						"english": "Come… accept this beautiful harmony…!",
						"japanese": "さあ…この美しい調和を受け入れろ…！",
						"chinese": "快…接受这份美丽的和谐…！",
						"french": "Viens… accepte cette belle harmonie… !",
						"spanish": "Ven… ¡acepta esta hermosa armonía…!",
						"vietnamese": "Nhanh lên… hãy chấp nhận sự hài hòa tuyệt đẹp này…!",
						"thai": "เร็วเข้า… ยอมรับความสามัคคีอันงดงามนี้ซะ…!",
						"hindi": "आओ… इस खूबसूरत सद्भाव को स्वीकार करो…!"
					},
					"speaker": "mire"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "mire",
					"spot": [
						5,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "미르, 이건 '조화'가 아니라 '파괴'야!",
						"english": "Mir, this isn't 'harmony,' it's 'destruction'!",
						"japanese": "ミル、これは「調和」じゃなくて「破壊」だよ！",
						"chinese": "米尔，这不是“和谐”，这是“毁灭”！",
						"french": "Mir, ce n'est pas de l'« harmonie », c'est de la « destruction » !",
						"spanish": "Mir, ¡esto no es 'armonía', es 'destrucción'!",
						"vietnamese": "Mir, đây không phải là 'hài hòa', mà là 'phá hủy'!",
						"thai": "มีร์ นี่ไม่ใช่ 'ความสามัคคี' แต่มันคือ 'การทำลายล้าง'!",
						"hindi": "मीर, यह 'सद्भाव' नहीं, 'विनाश' है!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아니! 너희가 모르니까 하는 소리야! 이건 더 높은 차원으로 가는 과정이라고!",
						"english": "No! You say that because you don't understand! This is a process to a higher dimension!",
						"japanese": "違う！お前たちが知らないからそんなことを言うんだ！これはより高次元へと至る過程なんだ！",
						"chinese": "不！你们不懂才这么说！这是通往更高次元的过程！",
						"french": "Non ! Vous dites ça parce que vous ne comprenez pas ! C'est un processus vers une dimension supérieure !",
						"spanish": "¡No! ¡Lo dices porque no entiendes! ¡Este es un proceso hacia una dimensión superior!",
						"vietnamese": "Không! Các ngươi nói vậy vì các ngươi không hiểu! Đây là một quá trình để đạt đến một chiều không gian cao hơn!",
						"thai": "ไม่ใช่! พวกเจ้าพูดแบบนั้นเพราะไม่เข้าใจ! นี่คือกระบวนการไปสู่มิติที่สูงกว่า!",
						"hindi": "नहीं! तुम इसलिए कहते हो क्योंकि तुम समझते नहीं हो! यह एक उच्च आयाम की ओर जाने की प्रक्रिया है!"
					},
					"speaker": "mire",
					"type": "speech"
				},
				{
					"content": {
						"korean": "땅이 울린다. 존재 자체가 불협화음이었다.",
						"english": "The ground trembles. Its very existence was a discord.",
						"japanese": "大地が唸る。その存在自体が不協和音だった。",
						"chinese": "大地在颤抖。其存在本身就是不和谐音。",
						"french": "La terre tremble. Son existence même était une dissonance.",
						"spanish": "La tierra tiembla. Su existencia misma era una discordia.",
						"vietnamese": "Mặt đất rung chuyển. Bản thân sự tồn tại của nó là một sự bất hòa.",
						"thai": "พื้นดินสั่นสะเทือน การมีอยู่ของมันคือความไม่ลงรอยกัน",
						"hindi": "धरती कांपती है। उसका अस्तित्व ही बेसुरा था।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "너희가 부정해도… 진실은 변하지 않아…!",
						"english": "Even if you deny it… the truth won't change…!",
						"japanese": "お前たちが否定しても…真実は変わらない…！",
						"chinese": "就算你们否定…真相也不会改变…！",
						"french": "Même si vous le niez… la vérité ne changera pas… !",
						"spanish": "Aunque lo niegues… ¡la verdad no cambiará…!",
						"vietnamese": "Ngay cả khi các ngươi phủ nhận… sự thật sẽ không thay đổi…!",
						"thai": "แม้ว่าพวกเจ้าจะปฏิเสธ… ความจริงก็ไม่เปลี่ยนแปลง…!",
						"hindi": "भले ही तुम इसे नकारो… सच नहीं बदलेगा…!"
					},
					"speaker": "mire",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"speaker": "mire",
					"action": "enter"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "미르, 너도 이 소리에 잠식된 거야. 이성을 잃어가고 있어.",
						"english": "Mir, you've been consumed by this sound too. You're losing your reason.",
						"japanese": "ミル、お前もこの音に侵食されたんだ。理性を失いかけている。",
						"chinese": "米尔，你也被这声音吞噬了。正在失去理智。",
						"french": "Mir, toi aussi tu as été consumé par ce son. Tu perds la raison.",
						"spanish": "Mir, tú también has sido consumido por este sonido. Estás perdiendo la razón.",
						"vietnamese": "Mir, ngươi cũng đã bị âm thanh này xâm chiếm. Ngươi đang mất dần lý trí.",
						"thai": "มีร์ เธอเองก็ถูกเสียงนี้กลืนกินเช่นกัน เธอกำลังสูญเสียสติไปแล้ว",
						"hindi": "मीर, तुम भी इस आवाज़ से समा गए हो। तुम अपनी तर्कशक्ति खो रहे हो।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "잠식? 아니…! 난… 난 괜찮아. 완벽해지고 있어…",
						"english": "Consumed? No…! I… I'm fine. I'm becoming perfect…",
						"japanese": "侵食？違う…！私…私は大丈夫。完璧になりつつあるんだ…",
						"chinese": "吞噬？不…！我…我很好。我正在变得完美…",
						"french": "Consumé ? Non… ! Je… je vais bien. Je deviens parfait…",
						"spanish": "¿Consumido? ¡No…! Yo… yo estoy bien. Me estoy volviendo perfecto…",
						"vietnamese": "Xâm chiếm? Không…! Ta… ta ổn. Ta đang trở nên hoàn hảo…",
						"thai": "กลืนกิน? ไม่ใช่…! ฉัน… ฉันสบายดี ฉันกำลังสมบูรณ์แบบขึ้น…",
						"hindi": "समा गया? नहीं…! मैं… मैं ठीक हूँ। मैं परिपूर्ण हो रहा हूँ…"
					},
					"speaker": "mire",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "으르르릉! 나의 조화가 너희를 삼킬 것이다!",
						"english": "Grrr! My harmony will devour you all!",
						"japanese": "グルルルル！我が調和がお前たちを飲み込むだろう！",
						"chinese": "吼吼吼！我的和谐将吞噬你们！",
						"french": "Grrr ! Mon harmonie vous dévorera tous !",
						"spanish": "¡Grrr! ¡Mi armonía os devorará a todos!",
						"vietnamese": "Gầm gừ! Sự hài hòa của ta sẽ nuốt chửng tất cả các ngươi!",
						"thai": "ครืนนน! ความสามัคคีของข้าจะกลืนกินพวกเจ้า!",
						"hindi": "गरररर! मेरी सद्भाव तुम सबको निगल जाएगी!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "더 깊은 나락으로 향하는 길. 되돌릴 수 없었다.",
						"english": "The path to a deeper abyss. There was no turning back.",
						"japanese": "より深き奈落への道。もう引き返せなかった。",
						"chinese": "通往更深渊的路。已无法回头。",
						"french": "Le chemin vers un abîme plus profond. Impossible de revenir en arrière.",
						"spanish": "El camino hacia un abismo más profundo. No había vuelta atrás.",
						"vietnamese": "Con đường xuống vực sâu hơn. Không thể quay lại được nữa.",
						"thai": "เส้นทางสู่ห้วงเหวที่ลึกกว่า. ไม่อาจหวนคืน.",
						"hindi": "गहरे पाताल की ओर जाने वाला मार्ग। लौटना असंभव था।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "크윽… 조화는… 영원히… 끝나지 않아…!",
						"english": "Ugh... Harmony... will... never... end...!",
						"japanese": "くっ…調和は…永遠に…終わらない…！",
						"chinese": "呃…和谐…永…永远…不会结束…！",
						"french": "Urgh... L'harmonie... ne... finira... jamais...!",
						"spanish": "Ugh... La armonía... nunca... terminará...!",
						"vietnamese": "Khụ... Hài hòa... sẽ... không bao giờ... kết thúc...!",
						"thai": "อึก... ความกลมกลืน... จะ... ไม่มีวัน... สิ้นสุด...!",
						"hindi": "उह... समरसता... कभी... समाप्त... नहीं होगी...!"
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "끝났다… 하지만… 진정한 조화는 어디에…",
						"english": "It's over... But... where is true harmony...?",
						"japanese": "終わった…だが…真の調和は何処に…",
						"chinese": "结束了…但是…真正的和谐在哪里…",
						"french": "C'est fini... Mais... où est la véritable harmonie...?",
						"spanish": "Se acabó... Pero... ¿dónde está la verdadera armonía...?",
						"vietnamese": "Kết thúc rồi... Nhưng... sự hài hòa thật sự ở đâu...?",
						"thai": "จบลงแล้ว... แต่... ความกลมกลืนที่แท้จริงอยู่ที่ใดกัน...",
						"hindi": "यह खत्म हो गया... लेकिन... सच्ची समरसता कहाँ है...?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "괴물의 잔해가 사라지자, 잠시 불협화음이 멎었다.",
						"english": "As the monster's remains vanished, the discord momentarily ceased.",
						"japanese": "怪物の残骸が消え去ると、一時的に不協和音が止んだ。",
						"chinese": "随着怪物的残骸消失，不和谐的声音暂时停止了。",
						"french": "Alors que les restes du monstre disparaissaient, la discorde cessa momentanément.",
						"spanish": "Cuando los restos del monstruo desaparecieron, la discordia cesó momentáneamente.",
						"vietnamese": "Khi tàn tích của con quái vật biến mất, sự bất hòa tạm thời lắng xuống.",
						"thai": "เมื่อซากอสูรหายไป ความไม่ลงรอยก็สงบลงชั่วขณะ.",
						"hindi": "जैसे ही राक्षस के अवशेष गायब हुए, असंगति क्षण भर के लिए रुक गई।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "그러나 지옥은… 여전히 울부짖는 듯했다. 새로운 광기가 시작될 징조였다.",
						"english": "But hell... still seemed to roar. A sign that new madness was about to begin.",
						"japanese": "しかし、地獄は… いまだに咆哮しているようだった。新たな狂気が始まる兆しだった。",
						"chinese": "然而地狱… 仿佛仍在咆哮。这是新一轮疯狂即将开始的预兆。",
						"french": "Mais l'enfer... semblait toujours rugir. Le signe qu'une nouvelle folie allait commencer.",
						"spanish": "Pero el infierno... todavía parecía rugir. Una señal de que una nueva locura estaba a punto de comenzar.",
						"vietnamese": "Nhưng địa ngục... dường như vẫn gầm thét. Một dấu hiệu cho thấy sự điên loạn mới sắp bắt đầu.",
						"thai": "แต่ขุมนรก... ยังคงคำราม ราวกับเป็นสัญญาณว่าความวิกลจริตครั้งใหม่กำลังจะเริ่มต้นขึ้น",
						"hindi": "परन्तु नर्क… अभी भी दहाड़ रहा था। यह एक नए उन्माद की शुरुआत का संकेत था।"
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "불협화음의 근원. 거대한 괴물이 모습을 드러냈다.",
						"english": "The source of discord. A colossal monster revealed itself.",
						"japanese": "不協和音の根源。巨大な怪物が姿を現した。",
						"chinese": "不和谐的根源。巨大的怪物显露了身形。",
						"french": "La source de la discorde. Un monstre colossal est apparu.",
						"spanish": "La fuente de la discordia. Un monstruo colosal se reveló.",
						"vietnamese": "Nguồn gốc của sự bất hòa. Một con quái vật khổng lồ hiện hình.",
						"thai": "ต้นกำเนิดแห่งความไม่ลงรอย. อสูรกายมหึมาปรากฏกาย.",
						"hindi": "असंगति का स्रोत। एक विशालकाय राक्षस प्रकट हुआ।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "크아아악! 감히 나의 조화를 방해하려 하는가!",
						"english": "Graaah! How dare you disrupt my harmony!",
						"japanese": "グギャアア！よくも我が調和を乱そうとするか！",
						"chinese": "吼啊啊！竟敢扰乱我的和谐！",
						"french": "Grrr ! Comment oses-tu perturber mon harmonie !",
						"spanish": "¡Grrr! ¡Cómo te atreves a perturbar mi armonía!",
						"vietnamese": "Gào thét! Dám cả gan phá hoại sự hài hòa của ta sao!",
						"thai": "กรรรรร! บังอาจมาทำลายความกลมกลืนของข้ารึ!",
						"hindi": "ग्रर्र! तुम्हारी हिम्मत कैसे हुई मेरी समरसता को भंग करने की!"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"spot": [
						4,
						2
					],
					"action": "enter",
					"speaker": "mire",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니… 이건… 내가 알던 조화가 아니야…!",
						"english": "No... This isn't... the harmony I knew...!",
						"japanese": "違う…これは…私が知る調和じゃない…！",
						"chinese": "不…这不是…我所知的和谐…！",
						"french": "Non... Ce n'est pas... l'harmonie que je connaissais...!",
						"spanish": "No... Esto no es... la armonía que conocía...!",
						"vietnamese": "Không... Đây không phải... sự hài hòa mà ta từng biết...!",
						"thai": "ไม่สิ... นี่มัน... ไม่ใช่ความกลมกลืนที่ข้ารู้จัก...!",
						"hindi": "नहीं... यह... वह समरसता नहीं है जिसे मैं जानता था...!"
					},
					"speaker": "mire",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "미르, 이제 알겠어? 이게 네가 쫓던 '구원'의 실체야.",
						"english": "Mir, do you understand now? This is the true nature of the 'salvation' you sought.",
						"japanese": "ミル、もう分かったか？これが貴様が追っていた「救済」の正体だ。",
						"chinese": "米尔，现在明白了吗？这就是你所追寻的“救赎”的真面目。",
						"french": "Mir, tu comprends maintenant ? C'est la véritable nature du « salut » que tu cherchais.",
						"spanish": "Mir, ¿lo entiendes ahora? Esta es la verdadera naturaleza de la 'salvación' que buscabas.",
						"vietnamese": "Mir, giờ ngươi đã hiểu chưa? Đây chính là bản chất thật sự của 'cứu rỗi' mà ngươi theo đuổi.",
						"thai": "มีร์ เจ้าเข้าใจแล้วใช่ไหม? นี่คือตัวตนที่แท้จริงของ 'การไถ่บาป' ที่เจ้าตามหา.",
						"hindi": "मीर, क्या अब तुम समझे? यही उस 'मोक्ष' की असली पहचान है जिसकी तुम तलाश कर रहे थे।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "random_boss",
					"content": {
						"korean": "으하하하! 결국 모두 나의 조화에 흡수될 뿐!",
						"english": "Hahahaha! In the end, all shall be absorbed into my harmony!",
						"japanese": "うはははは！結局、全ては我が調和に吸収されるのみ！",
						"chinese": "哈哈哈！最终，一切都将被我的和谐吞噬！",
						"french": "Hahahaha ! Au final, tout sera absorbé par mon harmonie !",
						"spanish": "¡Jajajaja! ¡Al final, todo será absorbido por mi armonía!",
						"vietnamese": "Hahahaha! Cuối cùng, tất cả sẽ bị sự hài hòa của ta nuốt chửng!",
						"thai": "ฮ่าฮ่าฮ่า! ในที่สุด ทุกสิ่งก็จะถูกกลืนกินเข้าสู่ความกลมกลืนของข้า!",
						"hindi": "हाहाहाहा! अंत में, सब कुछ मेरी समरसता में विलीन हो जाएगा!"
					}
				},
				{
					"speaker": "mire",
					"action": "exit",
					"direction": "down",
					"type": "direction",
					"duration_ms": 400
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네 녀석이 이 모든 광기의 주범이냐? 각오해라!",
						"english": "Are you the mastermind behind all this madness? Prepare yourself!",
						"japanese": "貴様がこの狂気の元凶か？覚悟しろ！",
						"chinese": "你就是这一切疯狂的罪魁祸首吗？做好觉悟吧！",
						"french": "Es-tu le cerveau de toute cette folie ? Prépare-toi !",
						"spanish": "¡Eres tú el cerebro detrás de toda esta locura? ¡Prepárate!",
						"vietnamese": "Ngươi là kẻ chủ mưu của mọi sự điên rồ này sao? Hãy chuẩn bị đi!",
						"thai": "เจ้าคือต้นเหตุของความบ้าคลั่งทั้งหมดนี้รึ? เตรียมใจไว้เลย!",
						"hindi": "क्या तुम इस सब पागलपन के पीछे का दिमाग हो? तैयार हो जाओ!"
					},
					"emotion": "angry"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "불협화음이 모든 것을 집어삼켰다.",
						"english": "Discord swallowed everything.",
						"japanese": "不協和音がすべてを飲み込んだ。",
						"chinese": "不和谐吞噬了一切。",
						"french": "La discorde a tout englouti.",
						"spanish": "La discordia lo devoró todo.",
						"vietnamese": "Sự bất hòa đã nuốt chửng tất cả.",
						"thai": "ความไม่ลงรอยกลืนกินทุกสิ่ง",
						"hindi": "विसंगति ने सब कुछ निगल लिया।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "으하하하… 너희는… 이 광기에서 벗어날 수 없어!",
						"english": "Hahahaha... You... cannot escape this madness!",
						"japanese": "うはははは… お前たちは… この狂気から逃れられない！",
						"chinese": "哈哈哈… 你们… 无法逃离这疯狂！",
						"french": "Hahahaha... Vous... ne pouvez pas échapper à cette folie !",
						"spanish": "¡Jajajaja... Vosotros... no podéis escapar de esta locura!",
						"vietnamese": "Hahahaha... Các ngươi... không thể thoát khỏi sự điên loạn này!",
						"thai": "ฮ่าฮ่าฮ่า... พวกเจ้า... ไม่มีทางหนีพ้นความวิกลจริตนี้ได้!",
						"hindi": "हाहाहाहा… तुम… इस पागलपन से नहीं बच सकते!"
					},
					"emotion": "happy"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "mire",
					"action": "enter",
					"spot": [
						4,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "…이건… 조화가 아니었어…!",
						"english": "...This wasn't... harmony...!",
						"japanese": "…これは… 調和ではなかった…！",
						"chinese": "…这… 不是和谐…！",
						"french": "...Ce n'était pas... l'harmonie...!",
						"spanish": "¡...Esto no era... armonía...!",
						"vietnamese": "...Đây không phải... sự hài hòa...!",
						"thai": "...นี่มัน... ไม่ใช่ความกลมกลืน...!",
						"hindi": "…यह… सामंजस्य नहीं था…!"
					},
					"speaker": "mire",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이제… 너희 모두 나의 조화가 될 것이다…!",
						"english": "Now... you will all become my harmony...!",
						"japanese": "今… お前たちは皆、私の調和となるのだ…！",
						"chinese": "现在… 你们都将成为我的和谐…！",
						"french": "Maintenant... vous deviendrez tous mon harmonie...!",
						"spanish": "¡Ahora... todos os convertiréis en mi armonía...!",
						"vietnamese": "Giờ đây... tất cả các ngươi sẽ trở thành sự hài hòa của ta...!",
						"thai": "บัดนี้... พวกเจ้าทุกคนจะกลายเป็นความกลมกลืนของข้า...!",
						"hindi": "अब… तुम सब मेरी सामंजस्य बनोगे…!"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…아직… 포기하지 않아…!",
						"english": "...Not... giving up yet...!",
						"japanese": "…まだ… 諦めていない…！",
						"chinese": "…我… 还没放弃…！",
						"french": "...Pas... encore abandonné...!",
						"spanish": "¡...Todavía... no me rindo...!",
						"vietnamese": "...Vẫn... chưa từ bỏ...!",
						"thai": "...ยัง... ไม่ยอมแพ้...!",
						"hindi": "…अभी तक… हार नहीं मानी…!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"지옥의 불협화음이 온 세계를 뒤흔들었다.",
			"미치지 않기 위해 필사적으로 버텨야 했다.",
			"그러나 어떤 자들은 이 소리를 '구원'이라 불렀다.",
			"깊은 수렁 속, 광기에 사로잡힌 목소리가 울려 퍼졌다."
		],
		"english": [
			"Hell's discord shook the entire world.",
			"One had to desperately endure not to go insane.",
			"Yet some called this sound 'salvation'.",
			"From the depths of the mire, a voice gripped by madness echoed."
		],
		"japanese": [
			"地獄の不協和音が全世界を揺るがした。",
			"狂わないよう必死に耐えなければならなかった。",
			"しかし、ある者たちはこの音を「救済」と呼んだ。",
			"深い泥沼の中、狂気に囚われた声が響き渡った。"
		],
		"chinese": [
			"地狱的不和谐音震动了整个世界。",
			"为了不发疯，必须拼命坚持下去。",
			"然而，有些人却称这声音为“救赎”。",
			"在深渊中，被疯狂抓住的声音回荡着。"
		],
		"french": [
			"La cacophonie infernale secoua le monde entier.",
			"Il fallait désespérément tenir bon pour ne pas sombrer dans la folie.",
			"Pourtant, certains appelèrent ce son 'salut'.",
			"Au fond du bourbier, une voix saisie par la folie résonna."
		],
		"spanish": [
			"La disonancia infernal sacudió el mundo entero.",
			"Había que resistir desesperadamente para no enloquecer.",
			"Sin embargo, algunos llamaron a este sonido 'salvación'.",
			"En el profundo cenagal, una voz atrapada por la locura resonó."
		],
		"vietnamese": [
			"Sự bất hòa của địa ngục đã rung chuyển cả thế giới.",
			"Phải tuyệt vọng bám trụ để không hóa điên.",
			"Nhưng có kẻ lại gọi âm thanh này là 'cứu rỗi'.",
			"Từ vực sâu, tiếng nói cuồng loạn vang vọng."
		],
		"thai": [
			"เสียงที่ไม่ประสานกันของนรกสั่นสะเทือนไปทั่วโลก",
			"ต้องอดทนอย่างสิ้นหวังเพื่อไม่ให้เสียสติ",
			"ทว่าบางคนกลับเรียกเสียงนี้ว่า 'การช่วยให้รอด'",
			"ในปลักลึก เสียงที่ถูกความบ้าคลั่งเข้าครอบงำดังก้อง"
		],
		"hindi": [
			"नर्क की कलह ने पूरी दुनिया को हिला दिया।",
			"पागल न होने के लिए जान लगाकर सहना पड़ा।",
			"लेकिन कुछ ने इस आवाज़ को 'मुक्ति' कहा।",
			"गहरे दलदल में, पागलपन से जकड़ी एक आवाज़ गूँज उठी।"
		]
	}
} as const;
