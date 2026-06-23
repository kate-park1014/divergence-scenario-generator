export const scenario_snowy_snowgnar_73_03 = {
	"scenario_id": "snowy_snowgnar_73_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"finn": {
			"id": "mon_3e3930d2-c2d3-4ad0-9818-26d259edac77",
			"name": {
				"korean": "핀",
				"english": "Finn",
				"japanese": "フィン",
				"chinese": "芬恩",
				"french": "Finn",
				"spanish": "Finn",
				"vietnamese": "Finn",
				"thai": "ฟินน์",
				"hindi": "फिन"
			},
			"description": "",
			"face_image_url": "",
			"battle_sprite_url": ""
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
					"emotion": "base",
					"content": {
						"korean": "얼음 깊숙이, 고대 전사의 무덤이 잠들어 있었다.",
						"english": "Deep within the ice, an ancient warrior's tomb lay dormant.",
						"japanese": "氷の奥深く、古代の戦士の墓が眠っていた。",
						"chinese": "在冰层深处，沉睡着一座古代战士的陵墓。",
						"french": "Au plus profond de la glace, la tombe d'un ancien guerrier sommeillait.",
						"spanish": "En lo profundo del hielo, la tumba de un antiguo guerrero yacía latente.",
						"vietnamese": "Sâu trong băng giá, lăng mộ của một chiến binh cổ đại đang ngủ yên.",
						"thai": "ลึกเข้าไปในน้ำแข็ง สุสานของนักรบโบราณหลับใหลอยู่.",
						"hindi": "बर्फ की गहराई में, एक प्राचीन योद्धा की कब्र सोई हुई थी।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이게… 바이킹 전사의 무덤?",
						"english": "Is this... a Viking warrior's tomb?",
						"japanese": "これが…ヴァイキング戦士の墓なのか？",
						"chinese": "这是……维京战士的墓？",
						"french": "Est-ce... la tombe d'un guerrier viking ?",
						"spanish": "¿Es esta... la tumba de un guerrero vikingo?",
						"vietnamese": "Đây… là lăng mộ của một chiến binh Viking?",
						"thai": "นี่คือ… สุสานของนักรบไวกิ้งหรือ?",
						"hindi": "क्या यह... एक वाइキング योद्धा की कब्र है?"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "벽화 속에는 거대한 수염을 가진 존재가 그려져 있었다.",
						"english": "On the murals, a being with a colossal beard was depicted.",
						"japanese": "壁画には、巨大な髭を持つ存在が描かれていた。",
						"chinese": "壁画上，描绘着一个拥有巨大胡须的存在。",
						"french": "Sur les fresques murales, un être à la barbe colossale était représenté.",
						"spanish": "En los murales, se representaba un ser con una barba colosal.",
						"vietnamese": "Trên bức bích họa, một sinh vật với bộ râu khổng lồ được vẽ.",
						"thai": "บนภาพจิตรกรรมฝาผนัง มีสิ่งมีชีวิตที่มีหนวดเครายักษ์ปรากฏอยู่.",
						"hindi": "भित्तिचित्रों पर, एक विशाल दाढ़ी वाला प्राणी चित्रित था।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "근데… 뭔가 이상해.",
						"english": "But... something's not right.",
						"japanese": "でも…何かおかしい。",
						"chinese": "但是……有些不对劲。",
						"french": "Mais... quelque chose ne va pas.",
						"spanish": "Pero... algo no está bien.",
						"vietnamese": "Nhưng mà… có gì đó lạ.",
						"thai": "แต่… มีบางอย่างผิดปกติ.",
						"hindi": "लेकिन... कुछ तो गड़बड़ है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "finn",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "진실은, 늘 왜곡되기 마련이지.",
						"english": "Truth, it's always bound to be distorted.",
						"japanese": "真実とは、常に歪められるものだ。",
						"chinese": "真相，总是注定会被扭曲。",
						"french": "La vérité est toujours vouée à être déformée.",
						"spanish": "La verdad, siempre está destinada a ser distorsionada.",
						"vietnamese": "Sự thật, vốn dĩ luôn bị bóp méo.",
						"thai": "ความจริงนั้น ย่อมถูกบิดเบือนเสมอ.",
						"hindi": "सच, हमेशा विकृत होने वाला होता है।"
					},
					"speaker": "finn"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "finn"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 벽화는 영웅 스노우그나르의 기록.",
						"english": "These murals are the chronicles of the hero Snowgnar.",
						"japanese": "この壁画は、英雄スノウグナルの記録だ。",
						"chinese": "这些壁画是英雄斯诺格纳尔的记载。",
						"french": "Ces fresques sont les chroniques du héros Snowgnar.",
						"spanish": "Estos murales son las crónicas del héroe Snowgnar.",
						"vietnamese": "Những bức bích họa này là biên niên sử của anh hùng Snowgnar.",
						"thai": "ภาพจิตรกรรมฝาผนังเหล่านี้คือบันทึกของวีรบุรุษสโนว์กนาร์.",
						"hindi": "ये भित्तिचित्र नायक स्नोगनार के वृत्तांत हैं।"
					},
					"speaker": "finn"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "왜곡되었다고 했지?",
						"english": "Distorted, you said?",
						"japanese": "歪んでいると言ったか？",
						"chinese": "你说它被扭曲了？",
						"french": "Vous avez dit que c'était déformé ?",
						"spanish": "¿Dijiste que estaba distorsionado?",
						"vietnamese": "Anh nói là bị bóp méo?",
						"thai": "บิดเบือนอย่างนั้นหรือ?",
						"hindi": "तुमने कहा कि वह विकृत हो गया है?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그의 영웅적 행위가 시스템에 흡수되며 뒤틀렸어.",
						"english": "His heroic deeds were absorbed and twisted by the System.",
						"japanese": "彼の英雄的な行為はシステムに吸収され、歪められた。",
						"chinese": "他的英勇事迹被系统吸收并扭曲了。",
						"french": "Ses actes héroïques ont été absorbés et déformés par le Système.",
						"spanish": "Sus actos heroicos fueron absorbidos y distorsionados por el Sistema.",
						"vietnamese": "Những hành động anh hùng của anh ta đã bị Hệ thống hấp thụ và bóp méo.",
						"thai": "การกระทำอันกล้าหาญของเขาถูกระบบกลืนกินและบิดเบือนไป",
						"hindi": "उसके वीर कर्मों को सिस्टम ने सोख लिया और विकृत कर दिया।"
					},
					"speaker": "finn"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "시스템… 또 그건가.",
						"english": "The System... that again.",
						"japanese": "システム…またそれか。",
						"chinese": "系统……又是它。",
						"french": "Le Système... encore ça.",
						"spanish": "El Sistema... otra vez.",
						"vietnamese": "Hệ thống... lại là nó.",
						"thai": "ระบบ... มันอีกแล้วเหรอเนี่ย",
						"hindi": "सिस्टम... फिर से वही।"
					},
					"speaker": "character_2"
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
					"speaker": "finn",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "스노우그나르는 영원한 잠에 빠진 게 아니야.",
						"english": "Snowgnar isn't in an eternal slumber.",
						"japanese": "スノウグナーは永遠の眠りについているわけじゃない。",
						"chinese": "斯诺格纳并没有陷入永恒的沉睡。",
						"french": "Snowgnar n'est pas plongé dans un sommeil éternel.",
						"spanish": "Snowgnar no está en un sueño eterno.",
						"vietnamese": "Snowgnar không chìm vào giấc ngủ vĩnh hằng.",
						"thai": "สโนว์กนาร์ไม่ได้หลับใหลไปตลอดกาล",
						"hindi": "स्नोवगनार अनंत निद्रा में नहीं है।"
					},
					"speaker": "finn"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그럼… 무슨 일인데?",
						"english": "Then... what happened?",
						"japanese": "じゃあ…何があったの？",
						"chinese": "那……发生了什么？",
						"french": "Alors... que s'est-il passé ?",
						"spanish": "Entonces... ¿qué pasó?",
						"vietnamese": "Vậy thì... chuyện gì đã xảy ra?",
						"thai": "แล้ว... เกิดอะไรขึ้น?",
						"hindi": "तो... क्या हुआ?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "그는 갇혔어. 마치 이 세계의 모든 존재처럼.",
						"english": "He's trapped. Like all beings in this world.",
						"japanese": "彼は囚われている。この世界の全ての存在のように。",
						"chinese": "他被困住了。就像这个世界的所有存在一样。",
						"french": "Il est piégé. Comme toutes les existences de ce monde.",
						"spanish": "Está atrapado. Como todos los seres de este mundo.",
						"vietnamese": "Anh ta bị mắc kẹt. Giống như mọi sinh linh trong thế giới này.",
						"thai": "เขาถูกจองจำไว้ เหมือนกับทุกสรรพสิ่งในโลกนี้",
						"hindi": "वह फंसा हुआ है। इस दुनिया के सभी प्राणियों की तरह।"
					},
					"speaker": "finn"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "진실을 왜 감추는 거지?",
						"english": "Why hide the truth?",
						"japanese": "なぜ真実を隠すの？",
						"chinese": "为什么要隐藏真相？",
						"french": "Pourquoi cacher la vérité ?",
						"spanish": "¿Por qué esconder la verdad?",
						"vietnamese": "Tại sao lại che giấu sự thật?",
						"thai": "ทำไมถึงซ่อนความจริงไว้?",
						"hindi": "सच क्यों छिपा रहे हो?"
					},
					"speaker": "character_3"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "finn",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "finn",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이 기록을 지키는 자가 나타날 거야.",
						"english": "A guardian of these records will appear.",
						"japanese": "この記録を守る者が現れるだろう。",
						"chinese": "守护这些记录的人会出现的。",
						"french": "Un gardien de ces archives apparaîtra.",
						"spanish": "Aparecerá un guardián de estos registros.",
						"vietnamese": "Một người bảo vệ những ghi chép này sẽ xuất hiện.",
						"thai": "ผู้พิทักษ์บันทึกนี้จะปรากฏตัวขึ้น",
						"hindi": "इन अभिलेखों का एक संरक्षक प्रकट होगा।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "진실을 지키는 게 아니라… 거짓을 지키는 건가.",
						"english": "Not guarding the truth... but the lie?",
						"japanese": "真実を守るのではなく…嘘を守るのか。",
						"chinese": "不是守护真相……而是守护谎言吗？",
						"french": "Pas garder la vérité... mais le mensonge ?",
						"spanish": "No proteger la verdad... ¿sino la mentira?",
						"vietnamese": "Không phải bảo vệ sự thật... mà là bảo vệ lời nói dối sao?",
						"thai": "ไม่ใช่การปกป้องความจริง... แต่เป็นการปกป้องคำโกหกสินะ",
						"hindi": "सच की रक्षा नहीं... बल्कि झूठ की रक्षा कर रहा है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "finn",
					"content": {
						"korean": "더 깊이 들어갈수록, 돌아오지 못할 수도 있어.",
						"english": "The deeper you go, the less likely you are to return.",
						"japanese": "深く入り込むほど、戻れなくなるかもしれない。",
						"chinese": "越深入，就越可能无法回头。",
						"french": "Plus tu t'enfonces, moins il y a de chances que tu reviennes.",
						"spanish": "Cuanto más te adentres, menos probable será que regreses.",
						"vietnamese": "Càng đi sâu, càng có thể không quay lại được.",
						"thai": "ยิ่งลึกเข้าไปเท่าไหร่ ก็ยิ่งอาจจะกลับออกมาไม่ได้",
						"hindi": "जितना गहरा जाओगे, उतना ही वापस न आ पाने की संभावना है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "상관없어. 우리는 진실을 봐야 해.",
						"english": "It doesn't matter. We must face the truth.",
						"japanese": "関係ない。私たちは真実を見なければならない。",
						"chinese": "没关系。我们必须面对真相。",
						"french": "Peu importe. Nous devons faire face à la vérité.",
						"spanish": "No importa. Debemos ver la verdad.",
						"vietnamese": "Không sao cả. Chúng ta phải đối mặt với sự thật.",
						"thai": "ไม่สำคัญ เราต้องเผชิญหน้ากับความจริง",
						"hindi": "कोई बात नहीं। हमें सच का सामना करना होगा।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_4"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 탐험대를 막아섰다.",
						"english": "A colossal shadow blocked the expedition team.",
						"japanese": "巨大な影が探検隊の行く手を阻んだ。",
						"chinese": "一个巨大的影子挡住了探险队。",
						"french": "Une ombre colossale barra la route à l'équipe d'expédition.",
						"spanish": "Una sombra colosal bloqueó al equipo de expedición.",
						"vietnamese": "Một bóng tối khổng lồ đã chặn đội thám hiểm.",
						"thai": "เงาขนาดมหึมาขวางทีมสำรวจไว้",
						"hindi": "एक विशाल छाया ने अभियान दल को रोक दिया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "누가 감히 잠든 진실을 깨우려 하는가?",
						"english": "Who dares awaken the slumbering truth?",
						"japanese": "誰が眠れる真実を目覚めさせようとするのか？",
						"chinese": "谁敢唤醒沉睡的真相？",
						"french": "Qui ose réveiller la vérité endormie ?",
						"spanish": "¿Quién se atreve a despertar la verdad dormida?",
						"vietnamese": "Ai dám đánh thức sự thật đang ngủ quên?",
						"thai": "ใครกล้าปลุกความจริงที่หลับใหล?",
						"hindi": "सोए हुए सच को जगाने की हिम्मत कौन करता है?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "네가 이 기록을 왜곡했나?",
						"english": "Did you distort this record?",
						"japanese": "お前がこの記録を歪めたのか？",
						"chinese": "你歪曲了这份记录吗？",
						"french": "As-tu déformé cet enregistrement ?",
						"spanish": "¿Distorsionaste este registro?",
						"vietnamese": "Ngươi đã bóp méo ghi chép này sao?",
						"thai": "คุณบิดเบือนบันทึกนี้หรือเปล่า?",
						"hindi": "क्या तुमने इस रिकॉर्ड को विकृत किया?"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "이것이 너희가 받아들일 유일한 진실이다.",
						"english": "This is the only truth you will accept.",
						"japanese": "これがお前たちが受け入れる唯一の真実だ。",
						"chinese": "这是你们唯一会接受的真相。",
						"french": "C'est la seule vérité que vous accepterez.",
						"spanish": "Esta es la única verdad que aceptaréis.",
						"vietnamese": "Đây là sự thật duy nhất các ngươi sẽ chấp nhận.",
						"thai": "นี่คือความจริงเดียวที่คุณจะยอมรับ",
						"hindi": "यह एकमात्र सत्य है जिसे तुम स्वीकार करोगे।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "어리석은 자들. 진실은 너희를 구할 수 없다.",
						"english": "Fools. The truth cannot save you.",
						"japanese": "愚か者め。真実はお前たちを救えない。",
						"chinese": "愚蠢的人。真相救不了你们。",
						"french": "Fous. La vérité ne peut pas vous sauver.",
						"spanish": "Necios. La verdad no puede salvaros.",
						"vietnamese": "Đồ ngốc. Sự thật không thể cứu các ngươi.",
						"thai": "คนโง่ ความจริงไม่อาจช่วยคุณได้",
						"hindi": "मूर्खों। सच तुम्हें बचा नहीं सकता।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…아직 끝나지 않았어.",
						"english": "...It's not over yet.",
						"japanese": "…まだ終わってない。",
						"chinese": "…还没结束。",
						"french": "...Ce n'est pas encore fini.",
						"spanish": "...Aún no ha terminado.",
						"vietnamese": "...Chưa kết thúc đâu.",
						"thai": "...ยังไม่จบแค่นี้หรอกน่า",
						"hindi": "...अभी खत्म नहीं हुआ है।"
					}
				},
				{
					"content": {
						"korean": "다시… 돌아온다.",
						"english": "I will return.",
						"japanese": "必ず…戻ってくる。",
						"chinese": "我会再…回来的。",
						"french": "Je reviendrai...",
						"spanish": "Volveré...",
						"vietnamese": "Ta sẽ… trở lại.",
						"thai": "จะ…กลับมาอีกครั้ง",
						"hindi": "मैं फिर… लौटूंगा।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "하나를 부쉈다고, 모든 게 끝날 줄 아느냐? 이 세계는… 영원히 반복될 뿐.",
						"english": "You think breaking one means it's all over? This world... merely repeats forever.",
						"japanese": "一つ壊したからといって、すべてが終わると思うのか？この世界は…永遠に繰り返されるだけだ。",
						"chinese": "你以为打破一个就意味着一切都结束了吗？这个世界……只会永远重复。",
						"french": "Tu crois qu'en briser un, tout est fini ? Ce monde... ne fait que se répéter éternellement.",
						"spanish": "¿Crees que romper uno significa que todo ha terminado? Este mundo... simplemente se repite para siempre.",
						"vietnamese": "Ngươi nghĩ phá một cái là mọi chuyện kết thúc ư? Thế giới này... chỉ lặp lại vĩnh viễn thôi.",
						"thai": "คิดว่าทำลายสิ่งเดียวแล้วทุกอย่างจะจบลงงั้นเหรอ? โลกนี้...แค่จะวนซ้ำไปเรื่อยๆ",
						"hindi": "क्या तुम्हें लगता है कि एक को तोड़ने से सब खत्म हो जाएगा? यह दुनिया... बस हमेशा के लिए दोहराई जाएगी।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "아니. 여기서 끝낼 거야.",
						"english": "No. I'll end it here.",
						"japanese": "いや。ここで終わらせる。",
						"chinese": "不。我将在这里结束它。",
						"french": "Non. Je vais y mettre fin ici.",
						"spanish": "No. Lo terminaré aquí.",
						"vietnamese": "Không. Ta sẽ kết thúc nó ở đây.",
						"thai": "ไม่ ฉันจะจบมันตรงนี้แหละ",
						"hindi": "नहीं। मैं इसे यहीं खत्म कर दूंगा।"
					},
					"speaker": "character_any"
				},
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "finn",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "finn",
					"content": {
						"korean": "그의 말대로, 아직 많은 진실이 얼어붙어 있어.",
						"english": "As he said, many truths are still frozen.",
						"japanese": "彼の言う通り、まだ多くの真実が凍りついている。",
						"chinese": "正如他所说，许多真相仍然被冻结着。",
						"french": "Comme il l'a dit, de nombreuses vérités sont encore gelées.",
						"spanish": "Como él dijo, muchas verdades aún están congeladas.",
						"vietnamese": "Đúng như lời hắn nói, vẫn còn nhiều sự thật bị đóng băng.",
						"thai": "ตามที่เขาบอก ยังมีอีกหลายความจริงที่ถูกแช่แข็งอยู่",
						"hindi": "जैसा उसने कहा, कई सच्चाईयां अभी भी जमी हुई हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거짓의 수호자는 쓰러졌다. 그러나, 진실은 아직 얼음 속에 갇혀 있었다.",
						"english": "The guardian of lies has fallen. Yet, the truth remained trapped in ice.",
						"japanese": "偽りの守護者は倒れた。しかし、真実はまだ氷の中に閉じ込められていた。",
						"chinese": "谎言的守护者倒下了。然而，真相仍被困在冰中。",
						"french": "Le gardien des mensonges est tombé. Pourtant, la vérité est restée prisonnière de la glace.",
						"spanish": "El guardián de las mentiras ha caído. Sin embargo, la verdad seguía atrapada en el hielo.",
						"vietnamese": "Kẻ bảo hộ dối trá đã ngã xuống. Tuy nhiên, sự thật vẫn bị mắc kẹt trong băng.",
						"thai": "ผู้พิทักษ์แห่งความเท็จล้มลงแล้ว แต่ความจริงยังคงถูกกักขังอยู่ในน้ำแข็ง",
						"hindi": "झूठ का संरक्षक गिर गया है। फिर भी, सच बर्फ में फंसा रहा।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"꽁꽁 얼어붙은 무덤.",
			"그 안에서, 잊혀진 영웅의 이야기가 일그러져 있었다.",
			"거대한 수염의 존재. 그리고 감춰진 진실.",
			"이 모든 것이, 거대한 시스템의 계획일까."
		],
		"english": [
			"A frozen tomb.",
			"Within it, the tale of a forgotten hero was distorted.",
			"A being with a massive beard. And a hidden truth.",
			"Is all of this part of a grand system's plan?"
		],
		"japanese": [
			"凍てついた墓。",
			"その中で、忘れ去られた英雄の物語は歪んでいた。",
			"巨大な髭の存在。そして隠された真実。",
			"これらすべてが、巨大なシステムの計画なのだろうか。"
		],
		"chinese": [
			"冰封的坟墓。",
			"其中，一位被遗忘的英雄的故事被扭曲了。",
			"一个拥有巨大胡须的存在。以及隐藏的真相。",
			"这一切，都是一个庞大系统的计划吗？"
		],
		"french": [
			"Une tombe gelée.",
			"À l'intérieur, l'histoire d'un héros oublié était déformée.",
			"Un être à la barbe gigantesque. Et une vérité cachée.",
			"Tout cela ferait-il partie du plan d'un grand système ?"
		],
		"spanish": [
			"Una tumba helada.",
			"Dentro, la historia de un héroe olvidado estaba distorsionada.",
			"Un ser con una barba enorme. Y una verdad oculta.",
			"¿Es todo esto parte del plan de un gran sistema?"
		],
		"vietnamese": [
			"Ngôi mộ băng giá.",
			"Bên trong, câu chuyện về một anh hùng bị lãng quên đã bị bóp méo.",
			"Một sinh vật với bộ râu đồ sộ. Và một sự thật bị che giấu.",
			"Tất cả những điều này, liệu có phải là kế hoạch của một hệ thống khổng lồ?"
		],
		"thai": [
			"สุสานน้ำแข็ง.",
			"ภายในนั้น เรื่องราวของวีรบุรุษที่ถูกลืมเลือนได้บิดเบือนไป.",
			"สิ่งมีชีวิตที่มีหนวดเครายาวใหญ่. และความจริงที่ซ่อนอยู่.",
			"ทั้งหมดนี้คือแผนการของระบบอันยิ่งใหญ่หรือ?"
		],
		"hindi": [
			"जमी हुई कब्र।",
			"उसके भीतर, एक भूले हुए नायक की कहानी विकृत थी।",
			"एक विशाल दाढ़ी वाला प्राणी। और एक छिपा हुआ सच।",
			"क्या यह सब, एक विशाल प्रणाली की योजना है?"
		]
	}
} as const;
