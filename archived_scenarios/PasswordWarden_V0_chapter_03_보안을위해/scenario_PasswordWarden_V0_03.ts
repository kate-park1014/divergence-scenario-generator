export const scenario_PasswordWarden_V0_03 = {
	"scenario_id": "PasswordWarden_V0_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"nyxaria": {
			"id": "mon_ed20a1cc-edfe-4cd4-99ba-652cc7bf38f8",
			"name": {
				"korean": "닉사리아",
				"english": "Nyxaria",
				"japanese": "ニクサリア",
				"chinese": "尼克萨莉亚",
				"french": "Nyxaria",
				"spanish": "Nixaria",
				"vietnamese": "Nyxaria",
				"thai": "นิกซาเรีย",
				"hindi": "निक्सारिया"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4f5d3331-24f0-4a5d-9150-06e65c767300/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/bb20e308-3a0a-4436-9ded-984b387dc100/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"로그인 창이 끝없이 반복되는 사무실.",
			"모든 것이 멈춰버린 듯한 공간.",
			"이 시스템은 대체 무엇을 지키려는 걸까?",
			"혹은, 우리를 영원히 가두려는 걸까."
		],
		"english": [
			"An office where the login window repeats endlessly.",
			"A space where everything seems to have stopped.",
			"What is this system trying to protect?",
			"Or, is it trying to trap us forever."
		],
		"japanese": [
			"ログイン画面が延々と繰り返されるオフィス。",
			"すべてが停止したかのような空間。",
			"このシステムは一体何を護ろうとしているのか？",
			"あるいは、我々を永遠に閉じ込めようとしているのか。"
		],
		"chinese": [
			"登录窗口无休止重复的办公室。",
			"一切似乎都停滞不前的空间。",
			"这个系统到底想保护什么？",
			"或者，是想永远困住我们。"
		],
		"french": [
			"Un bureau où la fenêtre de connexion se répète à l'infini.",
			"Un espace où tout semble s'être arrêté.",
			"Que tente de protéger ce système ?",
			"Ou bien, il essaie de nous piéger pour toujours."
		],
		"spanish": [
			"Una oficina donde la ventana de inicio de sesión se repite sin cesar.",
			"Un espacio donde todo parece haberse detenido.",
			"¿Qué intenta proteger este sistema?",
			"O, ¿está intentando atraparnos para siempre?"
		],
		"vietnamese": [
			"Một văn phòng nơi cửa sổ đăng nhập lặp đi lặp lại không ngừng.",
			"Một không gian nơi mọi thứ dường như đã dừng lại.",
			"Hệ thống này rốt cuộc đang cố gắng bảo vệ điều gì?",
			"Hay, nó đang cố gắng giam cầm chúng ta vĩnh viễn."
		],
		"thai": [
			"สำนักงานที่หน้าต่างล็อกอินวนซ้ำไม่รู้จบ",
			"พื้นที่ที่ทุกสิ่งดูเหมือนหยุดนิ่ง",
			"ระบบนี้กำลังพยายามปกป้องอะไรกันแน่?",
			"หรือกำลังพยายามขังเราไว้ตลอดไป"
		],
		"hindi": [
			"एक कार्यालय जहाँ लॉगिन विंडो अंतहीन रूप से दोहराती है।",
			"एक ऐसी जगह जहाँ सब कुछ रुक सा गया हो।",
			"यह सिस्टम आखिर क्या बचाने की कोशिश कर रहा है?",
			"या, यह हमें हमेशा के लिए फँसाने की कोशिश कर रहा है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "잠시 시스템 점검 중. 휴게실 같은 공간에 숨을 고르는 이들.",
						"english": "System check in progress. People catching their breath in a lounge-like space.",
						"japanese": "システム点検中。休憩室のような空間で息を整える人々。",
						"chinese": "系统正在维护中。人们在休息室般的空间里喘息。",
						"french": "Vérification du système en cours. Des gens reprennent leur souffle dans un espace qui ressemble à un salon.",
						"spanish": "Comprobación del sistema en curso. Gente tomando un respiro en un espacio tipo sala de descanso.",
						"vietnamese": "Hệ thống đang kiểm tra. Những người đang lấy hơi trong một không gian giống phòng chờ.",
						"thai": "กำลังตรวจสอบระบบ ผู้คนกำลังพักหายใจในพื้นที่คล้ายห้องรับรอง",
						"hindi": "सिस्टम की जाँच चल रही है। लोग लाउंज जैसे स्थान में साँस ले रहे हैं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "하아… 언제까지 이러고 있어야 해.",
						"english": "Ugh... How long do we have to keep doing this?",
						"japanese": "はぁ…いつまでこうしていればいいんだ。",
						"chinese": "唉…我们还要这样多久啊？",
						"french": "Pff... Combien de temps encore devons-nous faire ça ?",
						"spanish": "Uf... ¿Hasta cuándo tenemos que seguir así?",
						"vietnamese": "Haiz… Chúng ta phải làm thế này đến bao giờ nữa?",
						"thai": "เฮ้อ... เราต้องทนแบบนี้นานแค่ไหนเนี่ย?",
						"hindi": "उफ़... हमें कब तक ऐसा करते रहना होगा?"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "nyxaria",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"speaker": "nyxaria",
					"type": "speech",
					"content": {
						"korean": "나도 그래. 익숙한 풍경이야.",
						"english": "Tell me about it. It's a familiar sight.",
						"japanese": "私もだよ。見慣れた光景だ。",
						"chinese": "我也是。这是个熟悉的场景。",
						"french": "C'est clair. C'est une scène familière.",
						"spanish": "Ni me lo digas. Es una escena familiar.",
						"vietnamese": "Tôi cũng vậy. Một cảnh tượng quen thuộc.",
						"thai": "นั่นสินะ มันเป็นภาพที่คุ้นเคย",
						"hindi": "वही तो। यह एक परिचित दृश्य है।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "nyxaria"
				},
				{
					"speaker": "nyxaria",
					"type": "speech",
					"content": {
						"korean": "전에… ID 하나 복구하려고 6개월을 보냈어.",
						"english": "Before... I spent 6 months trying to recover one ID.",
						"japanese": "前は…IDを一つ復旧するのに6ヶ月かかった。",
						"chinese": "以前…我花了6个月才恢复一个ID。",
						"french": "Avant... J'ai passé 6 mois à essayer de récupérer un seul ID.",
						"spanish": "Antes... Pasé 6 meses intentando recuperar una sola ID.",
						"vietnamese": "Trước đây… tôi đã mất 6 tháng để khôi phục một ID.",
						"thai": "เมื่อก่อน... ฉันใช้เวลา 6 เดือนเพื่อกู้คืน ID เดียว",
						"hindi": "पहले... मैंने एक आईडी रिकवर करने में 6 महीने लगाए थे।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "6개월? 어떻게?",
						"english": "6 months? How?",
						"japanese": "6ヶ月？どうやって？",
						"chinese": "6个月？怎么可能？",
						"french": "6 mois ? Comment ça ?",
						"spanish": "¿6 meses? ¿Cómo?",
						"vietnamese": "6 tháng? Làm thế nào?",
						"thai": "6 เดือน? ได้ยังไง?",
						"hindi": "6 महीने? कैसे?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "nyxaria",
					"content": {
						"korean": "비밀번호 규칙이 매일 바뀌었거든. 특수문자는 되는데 안 되고, 숫자 3개는 필수인데 겹치면 안 된대.",
						"english": "The password rules changed every day. Special characters were allowed but not, 3 numbers were mandatory but couldn't overlap.",
						"japanese": "パスワードのルールが毎日変わったんだ。特殊文字は使えるのに使えなかったり、数字3つは必須なのに重複しちゃダメだって。",
						"chinese": "密码规则每天都在变。特殊字符有时可以有时不行，3个数字是必须的但又不能重复。",
						"french": "Les règles de mot de passe changeaient tous les jours. Les caractères spéciaux étaient autorisés mais pas, 3 chiffres étaient obligatoires mais ne pouvaient pas se chevaucher.",
						"spanish": "Las reglas de la contraseña cambiaban cada día. Los caracteres especiales estaban permitidos, pero no, 3 números eran obligatorios, pero no podían repetirse.",
						"vietnamese": "Quy tắc mật khẩu thay đổi mỗi ngày. Ký tự đặc biệt thì được nhưng lại không được, 3 số thì bắt buộc nhưng không được trùng lặp.",
						"thai": "กฎรหัสผ่านเปลี่ยนทุกวัน อักขระพิเศษใช้ได้แต่ก็ไม่ได้ ตัวเลข 3 ตัวบังคับแต่ห้ามซ้ำ",
						"hindi": "पासवर्ड के नियम हर दिन बदलते थे। विशेष वर्ण की अनुमति थी लेकिन नहीं, 3 नंबर अनिवार्य थे लेकिन ओवरलैप नहीं कर सकते थे।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "nyxaria",
					"type": "speech",
					"content": {
						"korean": "다시는 그런 시스템에 들어가지 않겠다고 다짐했는데.",
						"english": "I vowed never to enter a system like that again.",
						"japanese": "もう二度とそんなシステムには入らないと誓ったのに。",
						"chinese": "我发誓再也不进入那样的系统了。",
						"french": "J'avais juré de ne plus jamais entrer dans un tel système.",
						"spanish": "Juramos no volver a entrar en un sistema así.",
						"vietnamese": "Tôi đã thề sẽ không bao giờ vào lại hệ thống đó.",
						"thai": "ฉันเคยสาบานว่าจะไม่เข้าสู่ระบบแบบนั้นอีกแล้ว",
						"hindi": "मैंने कसम खाई थी कि मैं फिर कभी ऐसे सिस्टम में नहीं जाऊंगा।"
					},
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "nyxaria",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "nyxaria",
					"content": {
						"korean": "그런데… 또 이런 곳에 있네. 자판기 옆에서 또 한숨 쉬고 있어.",
						"english": "And yet... here I am again. Sighing next to a vending machine.",
						"japanese": "なのに…またこんな場所にいる。また自販機の横でため息をついている。",
						"chinese": "然而……我又身处此地，在自动贩卖机旁叹息。",
						"french": "Et pourtant... me revoilà. Soupirant à côté d'un distributeur automatique.",
						"spanish": "Y sin embargo... aquí estoy de nuevo. Suspirando junto a una máquina expendedora.",
						"vietnamese": "Vậy mà... lại ở một nơi như thế này. Lại thở dài bên cạnh máy bán hàng tự động.",
						"thai": "แต่... ก็มาอยู่ที่นี่อีกแล้ว ถอนหายใจอยู่ข้างตู้กดน้ำอีกแล้ว",
						"hindi": "और फिर भी... मैं फिर से यहीं हूँ। एक वेंडिंग मशीन के बगल में आह भर रहा हूँ।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "우리도 여기서… 6개월을 보내는 건가?",
						"english": "Are we going to spend... six months here too?",
						"japanese": "私たちもここで…6ヶ月を過ごすのか？",
						"chinese": "我们也要在这里……待上六个月吗？",
						"french": "Allons-nous aussi passer... six mois ici ?",
						"spanish": "¿Vamos a pasar... seis meses aquí también?",
						"vietnamese": "Chúng ta cũng sẽ… ở đây 6 tháng sao?",
						"thai": "เราจะต้อง...ใช้เวลา 6 เดือนที่นี่ด้วยหรือเปล่า?",
						"hindi": "क्या हम भी यहाँ... छह महीने बिताने वाले हैं?"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "웃기지? 나 참.",
						"english": "Funny, isn't it? Honestly.",
						"japanese": "おかしいだろ？本当に。",
						"chinese": "好笑吧？真是的。",
						"french": "Drôle, n'est-ce pas ? Vraiment.",
						"spanish": "Gracioso, ¿verdad? De verdad.",
						"vietnamese": "Buồn cười nhỉ? Thật sự.",
						"thai": "ตลกดีใช่ไหม? จริงๆ เลย",
						"hindi": "मज़ाकिया है ना? सच कहूँ तो।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "nyxaria"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "nyxaria",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						3
					]
				},
				{
					"speaker": "nyxaria",
					"content": {
						"korean": "여기는 아무것도 해결해주지 않아. 그냥 시간을 잡아먹을 뿐이야.",
						"english": "This place solves nothing. It just devours time.",
						"japanese": "ここは何も解決してくれない。ただ時間を食い潰すだけだ。",
						"chinese": "这里解决不了任何问题。只会浪费时间。",
						"french": "Cet endroit ne résout rien. Il ne fait que dévorer le temps.",
						"spanish": "Este lugar no resuelve nada. Solo devora el tiempo.",
						"vietnamese": "Nơi này chẳng giải quyết được gì cả. Chỉ làm tốn thời gian thôi.",
						"thai": "ที่นี่ไม่ได้ช่วยแก้อะไรเลย แค่กินเวลาไปเท่านั้นเอง",
						"hindi": "यह जगह कुछ भी नहीं सुलझाती। यह बस समय बर्बाद करती है।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그럼 우리가 여기서 나갈 수 없는 거야?",
						"english": "So, we can't get out of here?",
						"japanese": "じゃあ、ここから出られないのか？",
						"chinese": "那么，我们出不去了吗？",
						"french": "Alors, on ne peut pas sortir d'ici ?",
						"spanish": "¿Entonces no podemos salir de aquí?",
						"vietnamese": "Vậy là chúng ta không thể thoát ra khỏi đây sao?",
						"thai": "งั้นเราก็ออกไปจากที่นี่ไม่ได้ใช่ไหม?",
						"hindi": "तो, क्या हम यहाँ से निकल नहीं सकते?"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "nyxaria",
					"type": "speech",
					"content": {
						"korean": "시스템은 완벽해. 우리가 지칠 때까지.",
						"english": "The system is perfect. Until we're exhausted.",
						"japanese": "システムは完璧だ。僕たちが疲弊するまで。",
						"chinese": "系统是完美的。直到我们精疲力尽为止。",
						"french": "Le système est parfait. Jusqu'à ce que nous soyons épuisés.",
						"spanish": "El sistema es perfecto. Hasta que nos agotemos.",
						"vietnamese": "Hệ thống hoàn hảo. Cho đến khi chúng ta kiệt sức.",
						"thai": "ระบบมันสมบูรณ์แบบ จนกว่าเราจะหมดแรง",
						"hindi": "सिस्टम एकदम सही है। जब तक हम थक न जाएं।"
					},
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "어리석군. 영원히 여기서 방황해라.",
						"english": "Foolish. Wander here forever.",
						"japanese": "愚か者め。永遠にここで彷徨え。",
						"chinese": "愚蠢。永远在这里徘徊吧。",
						"french": "Imbécile. Erre ici pour l'éternité.",
						"spanish": "Estúpido. Vaga aquí para siempre.",
						"vietnamese": "Thật ngu ngốc. Hãy lang thang ở đây mãi mãi đi.",
						"thai": "โง่เขลา. จงพเนจรอยู่ที่นี่ตลอดไปเถอะ.",
						"hindi": "मूर्ख। हमेशा यहीं भटकते रहो।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…젠장. 포기 안 해!",
						"english": "...Damn it. I won't give up!",
						"japanese": "…ちくしょう。諦めない！",
						"chinese": "…该死。我不会放弃的！",
						"french": "...Mince. Je n'abandonnerai pas !",
						"spanish": "...Maldita sea. ¡No me rendiré!",
						"vietnamese": "...Chết tiệt. Tôi sẽ không bỏ cuộc đâu!",
						"thai": "...บ้าจริง. ฉันไม่ยอมแพ้หรอก!",
						"hindi": "...धत्। मैं हार नहीं मानूंगा!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "시스템의 가장 깊은 곳. 정체 모를 존재가 기다린다.",
						"english": "The deepest part of the system. An unknown entity awaits.",
						"japanese": "システムの最も深い場所。正体不明の存在が待っている。",
						"chinese": "系统的最深处。一个身份不明的存在正在等待。",
						"french": "La partie la plus profonde du système. Une entité inconnue attend.",
						"spanish": "La parte más profunda del sistema. Una entidad desconocida espera.",
						"vietnamese": "Nơi sâu nhất của hệ thống. Một thực thể không rõ danh tính đang chờ đợi.",
						"thai": "ส่วนที่ลึกที่สุดของระบบ สิ่งมีชีวิตลึกลับกำลังรออยู่",
						"hindi": "सिस्टम का सबसे गहरा हिस्सा। एक अज्ञात इकाई इंतजार कर रही है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "어서 와. 잘 왔다. {random_boss}의 미로에.",
						"english": "Welcome. You've arrived. To the labyrinth of {random_boss}.",
						"japanese": "よく来たな。{random_boss}の迷宮へようこそ。",
						"chinese": "欢迎。你已抵达。{random_boss}的迷宫。",
						"french": "Bienvenue. Tu es arrivé. Dans le labyrinthe de {random_boss}.",
						"spanish": "Bienvenido. Has llegado. Al laberinto de {random_boss}.",
						"vietnamese": "Chào mừng. Ngươi đã đến. Mê cung của {random_boss}.",
						"thai": "ยินดีต้อนรับ เจ้ามาถึงแล้ว สู่เขาวงกตของ {random_boss}",
						"hindi": "आपका स्वागत है। आप आ गए हैं। {random_boss} की भूलभुलैया में।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 모든 걸 꾸민 거야?",
						"english": "Did you orchestrate all of this?",
						"japanese": "お前がこの全てを企んだのか？",
						"chinese": "这一切都是你策划的吗？",
						"french": "C'est toi qui as orchestré tout ça ?",
						"spanish": "¿Tú orquestaste todo esto?",
						"vietnamese": "Ngươi đã dàn dựng tất cả những điều này sao?",
						"thai": "คุณเป็นคนบงการเรื่องทั้งหมดนี้หรือเปล่า?",
						"hindi": "क्या यह सब तुमने रचा है?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "누가 꾸몄든 무슨 상관이지? 어차피 이곳은 나갈 수 없어.",
						"english": "Who cares who designed it? We can't leave this place anyway.",
						"japanese": "誰が飾ったって関係ない。どうせここからは出られないんだから。",
						"chinese": "谁布置的又有什么关系？反正我们出不去。",
						"french": "Qui s'en soucie de qui l'a décoré ? On ne peut pas sortir d'ici de toute façon.",
						"spanish": "¿A quién le importa quién lo decoró? De todas formas, no podemos salir de aquí.",
						"vietnamese": "Ai trang trí thì có liên quan gì? Dù sao chúng ta cũng không thể thoát khỏi đây.",
						"thai": "ใครจะเป็นคนตกแต่งก็ช่างเถอะ? ยังไงเราก็ออกไปจากที่นี่ไม่ได้อยู่ดี",
						"hindi": "किसने सजाया, क्या फर्क पड़ता है? वैसे भी, हम यहाँ से निकल नहीं सकते।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "대단해… 하지만 이 시스템은… 나 하나로 끝나지 않아.",
						"english": "Amazing... but this system... it won't end with just me.",
						"japanese": "すごい… でもこのシステムは… 私一人で終わるものじゃない。",
						"chinese": "真厉害… 但这个系统… 不会因为我一个人而结束。",
						"french": "Incroyable... mais ce système... ne s'arrêtera pas juste avec moi.",
						"spanish": "Increíble... pero este sistema... no terminará solo conmigo.",
						"vietnamese": "Thật tuyệt vời... nhưng hệ thống này... sẽ không kết thúc chỉ với một mình tôi.",
						"thai": "ยอดเยี่ยม... แต่ระบบนี้... ไม่ได้จบลงที่ฉันคนเดียว",
						"hindi": "अद्भुत... लेकिन यह सिस्टम... सिर्फ़ मुझसे ख़त्म नहीं होगा।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "무슨 소리야? 다 부숴버릴 거야!",
						"english": "What are you talking about? I'll smash it all!",
						"japanese": "何を言ってる？全部ぶっ壊してやる！",
						"chinese": "你说什么？我把它全砸烂！",
						"french": "De quoi tu parles ? Je vais tout détruire !",
						"spanish": "¿De qué hablas? ¡Lo voy a destrozar todo!",
						"vietnamese": "Ngươi đang nói gì vậy? Ta sẽ phá hủy tất cả!",
						"thai": "นายพูดอะไรน่ะ? ฉันจะทำลายมันให้หมด!",
						"hindi": "क्या बक रहे हो? मैं सब तोड़ दूंगा!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "nyxaria"
				},
				{
					"speaker": "nyxaria",
					"content": {
						"korean": "저게 핵심이 아닐 거야. 출구는… 다른 곳에 있어.",
						"english": "That's probably not the core. The exit... is somewhere else.",
						"japanese": "あれが核心じゃないだろう。出口は…別の場所にある。",
						"chinese": "那不是核心。出口…在别处。",
						"french": "Ce n'est sûrement pas le cœur. La sortie... est ailleurs.",
						"spanish": "Ese no debe ser el núcleo. La salida... está en otro lugar.",
						"vietnamese": "Đó có lẽ không phải là cốt lõi. Lối thoát... ở một nơi khác.",
						"thai": "นั่นคงไม่ใช่แกนหลัก ทางออก... อยู่ที่อื่น",
						"hindi": "शायद वह मुख्य चीज़ नहीं है। निकास... कहीं और है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "미로의 한 조각을 부쉈지만, 여전히 길은 끝나지 않았다. 또 다른 로그인 창이 나타난다.",
						"english": "A piece of the maze was shattered, but the path still hadn't ended. Another login window appeared.",
						"japanese": "迷宮の一部を破壊したが、道はまだ終わっていなかった。別のログイン画面が現れる。",
						"chinese": "迷宫的一部分被打破了，但道路仍未结束。又一个登录窗口出现了。",
						"french": "Un morceau du labyrinthe fut brisé, mais le chemin n'était pas encore terminé. Une autre fenêtre de connexion apparut.",
						"spanish": "Una parte del laberinto fue destrozada, pero el camino aún no terminaba. Otra ventana de inicio de sesión apareció.",
						"vietnamese": "Một mảnh mê cung đã bị phá vỡ, nhưng con đường vẫn chưa kết thúc. Một cửa sổ đăng nhập khác lại xuất hiện.",
						"thai": "ชิ้นส่วนหนึ่งของเขาวงกตถูกทำลาย แต่เส้นทางก็ยังไม่สิ้นสุด หน้าต่างเข้าสู่ระบบอีกอันปรากฏขึ้น",
						"hindi": "भूलभुलैया का एक टुकड़ा टूट गया, लेकिन रास्ता अभी भी ख़त्म नहीं हुआ था। एक और लॉगिन विंडो दिखाई दी।"
					},
					"emotion": "base"
				}
			],
			"id": 15
		}
	]
} as const;
