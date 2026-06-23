export const scenario_hell_doomthread_29_02 = {
	"scenario_id": "hell_doomthread_29_02",
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
					"content": {
						"korean": "끝없는 회색 수렁. 영혼들은 과거의 잔상에 갇혀 몸부림친다.",
						"english": "An endless gray mire. Souls struggle, trapped in remnants of the past.",
						"japanese": "果てしない灰色の泥沼。魂たちは過去の残像に囚われ、もがき苦しむ。",
						"chinese": "无尽的灰色泥沼。灵魂们被困在过去的残像中挣扎。",
						"french": "Un bourbier gris sans fin. Les âmes se débattent, piégées dans les rémanences du passé.",
						"spanish": "Un pantano gris interminable. Las almas luchan, atrapadas en los vestigios del pasado.",
						"vietnamese": "Vũng lầy xám xịt vô tận. Các linh hồn vùng vẫy, mắc kẹt trong tàn dư của quá khứ.",
						"thai": "บึงโคลนสีเทาที่ไม่มีที่สิ้นสุด วิญญาณดิ้นรนติดอยู่ในเงาสะท้อนของอดีต",
						"hindi": "एक अंतहीन ग्रे कीचड़। आत्माएँ अतीत के अवशेषों में फँसकर संघर्ष कर रही हैं।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "여기가 '기억의 수렁'인가…",
						"english": "Is this the 'Mire of Memories'?",
						"japanese": "ここが「記憶の泥沼」なのか…",
						"chinese": "这里就是“记忆之沼”吗……",
						"french": "Est-ce le « Bourbier des Souvenirs » ?",
						"spanish": "¿Es este el 'Pantano de los Recuerdos'?",
						"vietnamese": "Đây là 'Vũng lầy ký ức' sao...?",
						"thai": "นี่คือ 'บึงแห่งความทรงจำ' หรือ...",
						"hindi": "क्या यह 'यादों का दलदल' है...?"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "mire",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "안 돼… 제발… 놓지 마…!",
						"english": "No... please... don't let go...!",
						"japanese": "ダメだ…お願い…離さないで…！",
						"chinese": "不……求求你……别放手……！",
						"french": "Non... s'il te plaît... ne me lâche pas...!",
						"spanish": "No... por favor... ¡no me sueltes...!",
						"vietnamese": "Không... làm ơn... đừng buông ra...!",
						"thai": "ไม่นะ... ได้โปรด... อย่าปล่อยนะ...!",
						"hindi": "नहीं... कृपया... छोड़ना मत...!"
					},
					"speaker": "mire",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "저 사람은…?",
						"english": "That person...?",
						"japanese": "あの人は…？",
						"chinese": "那个人是……？",
						"french": "Cette personne... ?",
						"spanish": "¿Esa persona...?",
						"vietnamese": "Người đó là...?",
						"thai": "คนนั้นคือ...?",
						"hindi": "वह व्यक्ति...?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "Mire. 과거에 갇혀 타인을 구하지 못한 죄책감에 시달리는 영혼이다.",
						"english": "Mire. A soul trapped in the past, tormented by guilt for failing to save others.",
						"japanese": "マイル。過去に囚われ、他人を救えなかった罪悪感に苛まれる魂だ。",
						"chinese": "泥沼。一个被困在过去，因未能拯救他人而饱受愧疚折磨的灵魂。",
						"french": "Bourbier. Une âme piégée dans le passé, tourmentée par la culpabilité de n'avoir pu sauver les autres.",
						"spanish": "Cieno. Un alma atrapada en el pasado, atormentada por la culpa de no haber podido salvar a otros.",
						"vietnamese": "Vũng lầy. Một linh hồn bị mắc kẹt trong quá khứ, dằn vặt bởi mặc cảm tội lỗi vì đã không cứu được người khác.",
						"thai": "มายร์ วิญญาณที่ถูกขังอยู่ในอดีต ทรมานจากความรู้สึกผิดที่ไม่สามารถช่วยผู้อื่นได้",
						"hindi": "कीचड़। अतीत में फँसी एक आत्मा, दूसरों को बचाने में विफल रहने के अपराधबोध से त्रस्त।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "mire",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "왜… 왜 내게서… 그 아이를 뺏어가는 거야!",
						"english": "Why... why are you taking... that child away from me!",
						"japanese": "なぜ…なぜ私から…あの子を奪っていくんだ！",
						"chinese": "为什么……为什么要从我身边……夺走那个孩子！",
						"french": "Pourquoi... pourquoi m'enlevez-vous... cet enfant !",
						"spanish": "¿Por qué... por qué me quitas... a ese niño!",
						"vietnamese": "Tại sao... tại sao lại cướp... đứa bé đó khỏi tôi!",
						"thai": "ทำไม... ทำไมถึงเอา... เด็กคนนั้นไปจากฉัน!",
						"hindi": "क्यों... क्यों तुम मुझसे... उस बच्चे को छीन रहे हो!"
					},
					"speaker": "mire"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "같은 상황을 계속 반복하고 있어.",
						"english": "I'm repeating the same situation.",
						"japanese": "同じ状況を繰り返している。",
						"chinese": "我一直在重复同样的情况。",
						"french": "Je répète la même situation.",
						"spanish": "Estoy repitiendo la misma situación.",
						"vietnamese": "Tôi cứ lặp đi lặp lại tình huống này.",
						"thai": "ฉันกำลังทำซ้ำสถานการณ์เดิม",
						"hindi": "मैं वही स्थिति दोहरा रहा हूँ।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "mire",
					"content": {
						"korean": "이 기록은… 거짓말이야…!",
						"english": "This record... it's a lie...!",
						"japanese": "この記録は…嘘だ…！",
						"chinese": "这份记录……是谎言……！",
						"french": "Ce registre... c'est un mensonge...!",
						"spanish": "Este registro... ¡es una mentira...!",
						"vietnamese": "Bản ghi này... là dối trá...!",
						"thai": "บันทึกนี้...มันโกหก...!",
						"hindi": "यह रिकॉर्ड… झूठ है…!"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "거짓말? 무슨…",
						"english": "A lie? What...",
						"japanese": "嘘？何が…",
						"chinese": "谎言？什么……",
						"french": "Un mensonge ? Quoi...",
						"spanish": "¿Una mentira? Qué...",
						"vietnamese": "Dối trá? Gì cơ...",
						"thai": "โกหก? อะไรนะ...",
						"hindi": "झूठ? क्या…"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "수렁 곳곳에 시야를 흐리게 하는 섬광의 실타래들이 나타났다 사라진다.",
						"english": "Threads of blinding light appear and disappear throughout the mire, obscuring vision.",
						"japanese": "泥沼のあちこちに視界を遮る閃光の糸玉が点滅する。",
						"chinese": "在泥沼的各处，模糊视线的闪光线团时隐时现。",
						"french": "Des fils de lumière aveuglante apparaissent et disparaissent dans le bourbier, obscurcissant la vue.",
						"spanish": "Hilos de luz cegadora aparecen y desaparecen por todo el fango, nublando la vista.",
						"vietnamese": "Những sợi sáng chói mắt hiện ra rồi biến mất khắp đầm lầy, che khuất tầm nhìn.",
						"thai": "ประกายแสงที่ทำให้ตาพร่าเลือนปรากฏขึ้นและหายไปทั่วทั้งบึง ทำให้การมองเห็นพร่ามัว",
						"hindi": "कीचड़ में हर जगह दृष्टि को धुंधला करने वाले चमकते धागे दिखाई देते और गायब हो जाते हैं।"
					},
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "mire"
				},
				{
					"type": "speech",
					"content": {
						"korean": "흐흑… 살려줘… 제발… 제발…!",
						"english": "Sob... Save me... Please... Please...!",
						"japanese": "うう…助けて…お願い…お願い…！",
						"chinese": "呜呜……救命……求求你……求求你……！",
						"french": "Snif... Sauvez-moi... S'il vous plaît... S'il vous plaît...!",
						"spanish": "Snif... Sálvame... Por favor... ¡Por favor...!",
						"vietnamese": "Hức hức... Cứu tôi với... Làm ơn... Làm ơn...!",
						"thai": "ฮือ...ช่วยด้วย...ได้โปรด...ได้โปรด...!",
						"hindi": "सिसकियाँ... मुझे बचाओ... कृपया... कृपया...!"
					},
					"speaker": "mire",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "기록… 기록을 봐야 해.",
						"english": "The record... I must see the record.",
						"japanese": "記録…記録を見なければ。",
						"chinese": "记录……我得看记录。",
						"french": "Le registre... Je dois voir le registre.",
						"spanish": "El registro... Debo ver el registro.",
						"vietnamese": "Bản ghi... Tôi phải xem bản ghi.",
						"thai": "บันทึก...ฉันต้องดูบันทึก",
						"hindi": "रिकॉर्ड… मुझे रिकॉर्ड देखना होगा।"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "주인공은 수렁의 연대기를 살펴본다. 중요 기록 일부가 삭제되거나 왜곡되어 있다.",
						"english": "The protagonist examines the chronicles of the mire. Some important records are deleted or distorted.",
						"japanese": "主人公は泥沼の年代記を調べる。重要な記録の一部が削除されたり、歪められたりしている。",
						"chinese": "主人公查看了泥沼的编年史。一些重要记录被删除或歪曲了。",
						"french": "Le protagoniste examine les chroniques du bourbier. Certaines données importantes ont été supprimées ou falsifiées.",
						"spanish": "El protagonista examina las crónicas del fango. Algunos registros importantes han sido eliminados o distorsionados.",
						"vietnamese": "Nhân vật chính kiểm tra biên niên sử của đầm lầy. Một số ghi chép quan trọng đã bị xóa hoặc bóp méo.",
						"thai": "ตัวละครหลักตรวจสอบพงศาวดารของบึง บันทึกสำคัญบางส่วนถูกลบหรือบิดเบือน",
						"hindi": "नायक दलदल के इतिहास का परीक्षण करता है। कुछ महत्वपूर्ण रिकॉर्ड हटा दिए गए हैं या विकृत कर दिए गए हैं।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "이 기록… 뭔가 이상해.",
						"english": "This record... something's wrong.",
						"japanese": "この記録…何かおかしい。",
						"chinese": "这份记录……有点奇怪。",
						"french": "Ce registre... quelque chose ne va pas.",
						"spanish": "Este registro... algo anda mal.",
						"vietnamese": "Bản ghi này... có gì đó không ổn.",
						"thai": "บันทึกนี้...มีบางอย่างผิดปกติ",
						"hindi": "यह रिकॉर्ड… कुछ अजीब है।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "mire",
					"content": {
						"korean": "내 죄가 아니야…! 이건…!",
						"english": "It's not my fault...! This is...!",
						"japanese": "私の罪じゃない…！これは…！",
						"chinese": "这不是我的罪……！这……！",
						"french": "Ce n'est pas ma faute...! C'est...!",
						"spanish": "¡No es mi culpa...! ¡Esto es...!",
						"vietnamese": "Không phải lỗi của tôi...! Đây là...!",
						"thai": "ไม่ใช่ความผิดของฉัน...! นี่มัน...!",
						"hindi": "यह मेरा गुनाह नहीं है…! यह…!"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "시스템이 진실을 감추고 있어.",
						"english": "The system is hiding the truth.",
						"japanese": "システムが真実を隠している。",
						"chinese": "系统正在隐藏真相。",
						"french": "Le système cache la vérité.",
						"spanish": "El sistema está ocultando la verdad.",
						"vietnamese": "Hệ thống đang che giấu sự thật.",
						"thai": "ระบบกำลังซ่อนความจริง",
						"hindi": "सिस्टम सच्चाई छिपा रहा है।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "mire",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "(절규하며) 내 운명이 아니야…! 내가 택한 게 아니야!",
						"english": "(Screaming) This isn't my fate...! I didn't choose this!",
						"japanese": "(絶叫しながら) これは私の運命じゃない…！私が選んだものじゃない！",
						"chinese": "(尖叫着) 这不是我的命运…！这不是我选择的！",
						"french": "(Hurlant) Ce n'est pas mon destin…! Je n'ai pas choisi ça !",
						"spanish": "(Gritando) ¡Este no es mi destino…! ¡No lo elegí yo!",
						"vietnamese": "(Hét lên) Đây không phải số phận của ta…! Ta không chọn điều này!",
						"thai": "(กรีดร้อง) นี่ไม่ใช่โชคชะตาของฉัน…! ฉันไม่ได้เลือกสิ่งนี้!",
						"hindi": "(चीखते हुए) यह मेरा भाग्य नहीं है…! मैंने इसे नहीं चुना!"
					},
					"speaker": "mire",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "멈출 수 없어. 더 깊이 들어가야 해.",
						"english": "I can't stop. I have to go deeper.",
						"japanese": "止められない。もっと深く進まないと。",
						"chinese": "无法停止。我必须深入下去。",
						"french": "Je ne peux pas m'arrêter. Je dois aller plus loin.",
						"spanish": "No puedo parar. Tengo que ir más profundo.",
						"vietnamese": "Không thể dừng lại. Phải đi sâu hơn nữa.",
						"thai": "ฉันหยุดไม่ได้ ฉันต้องดำดิ่งลงไปให้ลึกกว่านี้",
						"hindi": "मैं रुक नहीं सकता। मुझे और गहराई में जाना होगा।"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_3",
					"content": {
						"korean": "여긴… 너무 깊어.",
						"english": "It's… too deep here.",
						"japanese": "ここは…深すぎる。",
						"chinese": "这里…太深了。",
						"french": "C'est… trop profond ici.",
						"spanish": "Esto es… demasiado profundo.",
						"vietnamese": "Ở đây… quá sâu rồi.",
						"thai": "ที่นี่…ลึกเกินไป",
						"hindi": "यह… बहुत गहरा है।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "진실을 밝히지 않으면, 이 고통은 끝나지 않아.",
						"english": "If I don't reveal the truth, this suffering will never end.",
						"japanese": "真実を明かさなければ、この苦痛は終わらない。",
						"chinese": "如果不揭露真相，这份痛苦就不会结束。",
						"french": "Si je ne révèle pas la vérité, cette souffrance ne prendra jamais fin.",
						"spanish": "Si no revelo la verdad, este sufrimiento no terminará.",
						"vietnamese": "Nếu không phơi bày sự thật, nỗi đau này sẽ không bao giờ kết thúc.",
						"thai": "ถ้าฉันไม่เปิดเผยความจริง ความเจ็บปวดนี้จะไม่มีวันสิ้นสุด",
						"hindi": "अगर मैं सच को उजागर नहीं करता, तो यह पीड़ा कभी खत्म नहीं होगी।"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "어리석은 영혼이여. 기록을 거스르려 하는가?",
						"english": "Foolish soul. Do you defy the records?",
						"japanese": "愚かな魂め。記録に逆らおうとするか？",
						"chinese": "愚蠢的灵魂。你竟敢违抗记录？",
						"french": "Âme insensée. Oserez-vous défier les annales ?",
						"spanish": "Alma insensata. ¿Intentas desafiar los registros?",
						"vietnamese": "Linh hồn ngu muội. Ngươi dám chống lại ghi chép ư?",
						"thai": "วิญญาณโง่เขลา เจ้าจะท้าทายบันทึกงั้นหรือ?",
						"hindi": "मूर्ख आत्मा। क्या तुम अभिलेखों का उल्लंघन करने का प्रयास कर रहे हो?"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "너의 죄는 이미 정해진 것. 받아들여라.",
						"english": "Your sin is already determined. Accept it.",
						"japanese": "お前の罪は既に定められたもの。受け入れろ。",
						"chinese": "你的罪孽早已注定。接受吧。",
						"french": "Ton péché est déjà scellé. Accepte-le.",
						"spanish": "Tu pecado ya está determinado. Acéptalo.",
						"vietnamese": "Tội lỗi của ngươi đã định rồi. Hãy chấp nhận đi.",
						"thai": "บาปของเจ้าถูกกำหนดไว้แล้ว จงยอมรับมันซะ",
						"hindi": "तुम्हारा पाप पहले से ही निर्धारित है। इसे स्वीकार करो।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "시끄러워! 네가 뭘 알아!",
						"english": "Shut up! What do you know!",
						"japanese": "うるさい！お前が何を知ってるんだ！",
						"chinese": "闭嘴！你懂什么！",
						"french": "Tais-toi ! Qu'est-ce que tu en sais !",
						"spanish": "¡Cállate! ¡Qué sabes tú!",
						"vietnamese": "Im đi! Ngươi biết gì chứ!",
						"thai": "หุบปาก! แกรู้อะไร!",
						"hindi": "चुप रहो! तुम्हें क्या पता!"
					}
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "mire",
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "mire",
					"content": {
						"korean": "(갑자기 정신을 차린 듯) 도망쳐… 여긴… 함정이야…!",
						"english": "(Suddenly seems to regain senses) Run… This place… It's a trap…!",
						"japanese": "(突然我に返ったように) 逃げろ…ここは…罠だ…！",
						"chinese": "(仿佛突然清醒过来) 快逃…这里…是个陷阱…！",
						"french": "(Semble reprendre soudainement ses esprits) Fuyez… Cet endroit… C'est un piège…!",
						"spanish": "(De repente parece recobrar la razón) Huye… Aquí… ¡Es una trampa…!",
						"vietnamese": "(Bỗng nhiên như tỉnh táo lại) Chạy đi… Nơi này… là một cái bẫy…!",
						"thai": "(เหมือนได้สติขึ้นมาทันที) หนีไป… ที่นี่… มันกับดักนะ…!",
						"hindi": "(अचानक होश में आते हुए) भागो… यह जगह… एक जाल है…!"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "이미 늦었다. 너의 모든 발버둥은 {random_boss}의 기쁨일 뿐.",
						"english": "It's too late. All your struggles are just {random_boss}'s delight.",
						"japanese": "もう遅い。お前の全ての足掻きは、{random_boss}の喜びでしかない。",
						"chinese": "已经太晚了。你所有的挣扎都只会是{random_boss}的乐趣。",
						"french": "Il est trop tard. Toutes tes luttes ne sont que le plaisir de {random_boss}.",
						"spanish": "Ya es tarde. Todos tus esfuerzos son solo el deleite de {random_boss}.",
						"vietnamese": "Đã quá muộn rồi. Mọi sự vùng vẫy của ngươi chỉ là niềm vui của {random_boss} mà thôi.",
						"thai": "สายเกินไปแล้ว ทุกการต่อสู้ของเจ้าเป็นเพียงความสุขของ {random_boss} เท่านั้น",
						"hindi": "बहुत देर हो चुकी है। तुम्हारी सारी कोशिशें केवल {random_boss} की खुशी हैं।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "happy"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "하찮은 영혼들. 기록을 거스를 수 있다고 믿었나?",
						"english": "Insignificant souls. Did you believe you could defy the records?",
						"japanese": "くだらない魂ども。記録に逆らえるとでも思ったか？",
						"chinese": "卑微的灵魂。你们以为能违抗记录吗？",
						"french": "Âmes insignifiantes. Pensiez-vous pouvoir défier les archives ?",
						"spanish": "Almas insignificantes. ¿Creísteis que podíais desafiar los registros?",
						"vietnamese": "Những linh hồn tầm thường. Ngươi nghĩ mình có thể chống lại ký ức sao?",
						"thai": "วิญญาณไร้ค่า. เจ้าคิดว่าจะขัดขืนบันทึกได้งั้นหรือ?",
						"hindi": "तुच्छ आत्माएँ। क्या तुम्हें लगा कि तुम रिकॉर्ड का उल्लंघन कर सकते हो?"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "너희의 고통은 영원히 반복될 것이다.",
						"english": "Your suffering will repeat eternally.",
						"japanese": "お前たちの苦痛は永遠に繰り返されるだろう。",
						"chinese": "你们的痛苦将永远重复。",
						"french": "Votre souffrance se répétera éternellement.",
						"spanish": "Vuestro sufrimiento se repetirá eternamente.",
						"vietnamese": "Nỗi đau của các ngươi sẽ lặp lại vĩnh viễn.",
						"thai": "ความเจ็บปวดของพวกเจ้าจะวนเวียนไปชั่วนิรันดร์",
						"hindi": "तुम्हारा दर्द अनंत काल तक दोहराया जाएगा।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아니… 아직… 끝나지 않았어…!",
						"english": "No... it's not... over yet...!",
						"japanese": "いや…まだ…終わってない…！",
						"chinese": "不…还没…结束…！",
						"french": "Non... ce n'est... pas encore fini... !",
						"spanish": "No... aún... no ha terminado... !",
						"vietnamese": "Không... vẫn... chưa kết thúc...!",
						"thai": "ไม่สิ... ยัง... ไม่จบ...!",
						"hindi": "नहीं... अभी... खत्म नहीं हुआ...!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"speaker": "mire",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "(여전히 고통받는 듯) …또다시… 실패했어…",
						"english": "(Still suffering) ...Failed... again...",
						"japanese": "（相変わらず苦痛に苛まれているように）…また…失敗した…",
						"chinese": "（仿佛仍在承受痛苦）…又一次…失败了…",
						"french": "(Toujours en souffrance) ...Échec... encore une fois...",
						"spanish": "(Todavía sufriendo) ...He vuelto a... fallar...",
						"vietnamese": "(Vẫn như đang chịu đựng đau khổ) ...Lại... thất bại rồi...",
						"thai": "(ยังคงเจ็บปวด) ...ล้มเหลว... อีกครั้ง...",
						"hindi": "(अभी भी दर्द में) ...फिर से... असफल रहा..."
					},
					"speaker": "mire",
					"type": "speech",
					"emotion": "sad"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "크윽… 겨우… 이 정도… 저항이라니…",
						"english": "Ugh… Just… this much… resistance…",
						"japanese": "ぐっ…たかが…これしきの…抵抗だと…",
						"chinese": "呃…就…这点…抵抗吗…",
						"french": "Ugh… Juste… cette… résistance…",
						"spanish": "Ugh… Solo… esta… resistencia…",
						"vietnamese": "Khụ… chỉ… chừng này… sức kháng cự sao…",
						"thai": "อึก… แค่… แค่นี้… การต่อต้านงั้นรึ…",
						"hindi": "उफ़… बस… इतना… प्रतिरोध…"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "진실은… 너희가 감당할 수 없을 것이다…",
						"english": "The truth... you cannot bear it.",
						"japanese": "真実…お前たちには耐えられないだろう…",
						"chinese": "真相…你们无法承受…",
						"french": "La vérité... vous ne pourrez pas la supporter...",
						"spanish": "La verdad... no podréis soportarla...",
						"vietnamese": "Sự thật... các ngươi không thể chịu đựng nổi đâu...",
						"thai": "ความจริง... พวกเจ้าทนรับมันไม่ไหวหรอก...",
						"hindi": "सच... तुम इसे झेल नहीं पाओगे..."
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "Mire… 괜찮아?",
						"english": "Mire... are you okay?",
						"japanese": "ミレ…大丈夫？",
						"chinese": "米蕾…你还好吗？",
						"french": "Mire... ça va ?",
						"spanish": "Mire... ¿estás bien?",
						"vietnamese": "Mire... em có sao không?",
						"thai": "มีเร... เจ้าไม่เป็นไรใช่ไหม?",
						"hindi": "मायर... तुम ठीक हो?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "direction",
					"speaker": "mire",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"emotion": "sad",
					"speaker": "mire",
					"content": {
						"korean": "(고통에서 벗어난 듯 멍하니) …끝났어…?",
						"english": "(Dazed, as if freed from pain) ...Is it over...?",
						"japanese": "（苦痛から解放されたようにぼんやりと）…終わったの…？",
						"chinese": "（仿佛摆脱了痛苦般茫然）…结束了吗…？",
						"french": "(Hébétée, comme libérée de la douleur) ...C'est fini...?",
						"spanish": "(Aturdida, como liberada del dolor) ...¿Se acabó...?",
						"vietnamese": "(Thẫn thờ như vừa thoát khỏi đau khổ) ...Kết thúc rồi sao...?",
						"thai": "(เลื่อนลอย ราวกับหลุดพ้นจากความเจ็บปวด) ...จบแล้วหรือ...?",
						"hindi": "(दर्द से मुक्त होकर सुन्न) ...क्या यह खत्म हो गया...?"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "수렁의 기록은 정화되었지만, 시스템의 존재는 더 선명해졌다. 더 깊은 곳으로.",
						"english": "The Swamp's records have been purified, but the System's presence has become clearer. To deeper places.",
						"japanese": "泥沼の記録は浄化されたが、システムの存在はより鮮明になった。さらに深淵へ。",
						"chinese": "泥沼的记录已被净化，但系统的存在却更加清晰了。前往更深之处。",
						"french": "Les archives du Bourbier ont été purifiées, mais la présence du Système est devenue plus claire. Vers des profondeurs encore plus grandes.",
						"spanish": "Los registros del Pantano han sido purificados, pero la presencia del Sistema se ha vuelto más clara. Hacia lugares más profundos.",
						"vietnamese": "Ký ức Vũng Lầy đã được thanh tẩy, nhưng sự tồn tại của Hệ thống lại càng rõ ràng hơn. Tiến sâu hơn nữa.",
						"thai": "บันทึกของบึงมรณะได้รับการชำระล้างแล้ว แต่การมีอยู่ของระบบกลับชัดเจนยิ่งขึ้น ไปยังที่ที่ลึกกว่าเดิม",
						"hindi": "दलदल के रिकॉर्ड शुद्ध हो गए हैं, लेकिन सिस्टम की उपस्थिति और स्पष्ट हो गई है। और गहराई तक।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"뒤틀린 기억들이 수렁처럼 고여있는 곳.",
			"그 속에서 한 영혼은 영원히 같은 비극을 반복한다.",
			"시스템이 지운 과거, 숨긴 진실이 여기에 있었다.",
			"우리는 이 절망 속에서 무엇을 찾아야 하는가?"
		],
		"english": [
			"A place where twisted memories fester like a mire.",
			"Within it, a soul endlessly repeats the same tragedy.",
			"The past erased by the system, the hidden truth, was here.",
			"What must we seek in this despair?"
		],
		"japanese": [
			"歪んだ記憶が泥沼のように溜まっている場所。",
			"その中で、ある魂は永遠に同じ悲劇を繰り返す。",
			"システムが消去した過去、隠された真実がここに存在した。",
			"我々はこの絶望の中で何を探すべきなのか？"
		],
		"chinese": [
			"扭曲的记忆如泥沼般淤积之地。",
			"在其中，一个灵魂永远重复着同样的悲剧。",
			"系统抹去的过去，隐藏的真相，都在这里。",
			"在这绝望中，我们该寻找什么？"
		],
		"french": [
			"Un lieu où des souvenirs tordus stagnent comme un bourbier.",
			"En son sein, une âme répète éternellement la même tragédie.",
			"Le passé effacé par le système, la vérité cachée, était ici.",
			"Que devons-nous chercher dans ce désespoir ?"
		],
		"spanish": [
			"Un lugar donde los recuerdos retorcidos se estancan como un pantano.",
			"En su interior, un alma repite eternamente la misma tragedia.",
			"El pasado borrado por el sistema, la verdad oculta, estaba aquí.",
			"¿Qué debemos buscar en esta desesperación?"
		],
		"vietnamese": [
			"Nơi những ký ức méo mó đọng lại như một vũng lầy.",
			"Trong đó, một linh hồn vĩnh viễn lặp lại cùng một bi kịch.",
			"Quá khứ bị hệ thống xóa bỏ, sự thật bị che giấu, đã ở đây.",
			"Chúng ta phải tìm kiếm điều gì trong sự tuyệt vọng này?"
		],
		"thai": [
			"สถานที่ที่ความทรงจำบิดเบี้ยวทับถมกันเป็นบึง",
			"ในนั้น มีวิญญาณดวงหนึ่งที่ย้ำรอยโศกนาฏกรรมเดิมซ้ำแล้วซ้ำเล่าอย่างไม่มีที่สิ้นสุด",
			"อดีตที่ถูกระบบลบเลือน ความจริงที่ซ่อนเร้นอยู่ที่นี่",
			"เราควรค้นหาอะไรในความสิ้นหวังนี้?"
		],
		"hindi": [
			"एक ऐसी जगह जहाँ मुड़ी हुई यादें कीचड़ की तरह जमा हैं।",
			"उसके भीतर, एक आत्मा उसी त्रासदी को अनंत काल तक दोहराती है।",
			"सिस्टम द्वारा मिटाया गया अतीत, छिपा हुआ सच, यहीं था।",
			"इस निराशा में हमें क्या खोजना चाहिए?"
		]
	}
} as const;
