export const scenario_hell_komorebi_4_01 = {
	"scenario_id": "hell_komorebi_4_01",
	"order": 1,
	"act": "intro",
	"theme": "hell",
	"actors": {
		"ash": {
			"id": "mon_b225f5fa-59a1-47bb-b4c5-e73bf9e7192a",
			"name": {
				"korean": "애쉬",
				"english": "Ash",
				"japanese": "アッシュ",
				"chinese": "艾什",
				"french": "Ash",
				"spanish": "Ash",
				"vietnamese": "Ash",
				"thai": "แอช",
				"hindi": "ऐश"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d84413a8-9d6f-4a40-5d36-75e431fb9900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/78281fca-e4b8-45cc-68ef-7df3fef74200/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "시간의 무덤, 지옥에 떨어진 자.",
						"english": "Fallen into hell, the grave of time.",
						"japanese": "時の墓場、地獄に堕ちし者よ。",
						"chinese": "堕入时间之墓，地狱之人。",
						"french": "Tombé en enfer, le tombeau du temps.",
						"spanish": "Caído en el infierno, la tumba del tiempo.",
						"vietnamese": "Kẻ đã sa vào địa ngục, nấm mồ của thời gian.",
						"thai": "ผู้ที่ร่วงหล่นสู่นรก หลุมศพแห่งกาลเวลา.",
						"hindi": "समय की कब्र, नरक में गिरा हुआ।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…이게 뭐야. 팔의 숫자는.",
						"english": "...What is this? The numbers on my arm.",
						"japanese": "…これは何だ。腕の数字は。",
						"chinese": "……这是什么。手臂上的数字。",
						"french": "...Qu'est-ce que c'est ? Les chiffres sur mon bras.",
						"spanish": "...¿Qué es esto? Los números en el brazo.",
						"vietnamese": "...Đây là gì? Những con số trên cánh tay.",
						"thai": "...นี่มันอะไรกัน. ตัวเลขบนแขน...",
						"hindi": "...यह क्या है? हाथ पर लिखे अंक।"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "모두가… 같은 문신을 하고 있잖아?",
						"english": "Everyone... has the same tattoo?",
						"japanese": "みんな…同じタトゥーをしているじゃないか？",
						"chinese": "大家……都有着相同的纹身？",
						"french": "Tout le monde... a le même tatouage ?",
						"spanish": "¿Todos... tienen el mismo tatuaje?",
						"vietnamese": "Mọi người... đều có hình xăm giống nhau sao?",
						"thai": "ทุกคน...มีรอยสักแบบเดียวกันเหรอ?",
						"hindi": "क्या सबने... एक ही टैटू बनवा रखा है?"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"speaker": "ash"
				},
				{
					"content": {
						"korean": "이곳에서는 모두가 정해진 시간을 따릅니다.",
						"english": "Here, everyone follows a predetermined time.",
						"japanese": "ここでは、皆が定められた時間に従います。",
						"chinese": "在这里，所有人都遵循着既定的时间。",
						"french": "Ici, chacun suit un temps prédéterminé.",
						"spanish": "Aquí, todos siguen un tiempo predeterminado.",
						"vietnamese": "Ở đây, mọi người đều tuân theo thời gian đã định.",
						"thai": "ที่นี่ ทุกคนต้องปฏิบัติตามเวลาที่กำหนดไว้.",
						"hindi": "यहाँ, हर कोई एक निर्धारित समय का पालन करता है।"
					},
					"type": "speech",
					"speaker": "ash",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "곧 당신의 시간도 멈출 겁니다.",
						"english": "Soon, your time will also stop.",
						"japanese": "間もなく、あなたの時間も止まります。",
						"chinese": "很快，你的时间也会停止。",
						"french": "Bientôt, votre temps s'arrêtera aussi.",
						"spanish": "Pronto, tu tiempo también se detendrá.",
						"vietnamese": "Chẳng bao lâu nữa, thời gian của bạn cũng sẽ dừng lại.",
						"thai": "ไม่นาน เวลาของคุณก็จะหยุดลงเช่นกัน.",
						"hindi": "जल्द ही, तुम्हारा समय भी रुक जाएगा।"
					},
					"type": "speech",
					"speaker": "ash",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "무슨 소리야!",
						"english": "What are you talking about!",
						"japanese": "何を言ってるんだ！",
						"chinese": "你在说什么！",
						"french": "Qu'est-ce que tu racontes !",
						"spanish": "¡De qué hablas!",
						"vietnamese": "Anh đang nói cái gì vậy!",
						"thai": "คุณกำลังพูดเรื่องอะไร!",
						"hindi": "क्या बात कर रहे हो!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "ash",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "ash",
					"emotion": "sad",
					"content": {
						"korean": "멈출 수 없는 시간의 흐름.",
						"english": "The unstoppable flow of time.",
						"japanese": "止められない時間の流れ。",
						"chinese": "无法停止的时间洪流。",
						"french": "Le flot inarrêtable du temps.",
						"spanish": "El flujo imparable del tiempo.",
						"vietnamese": "Dòng chảy thời gian không ngừng.",
						"thai": "กระแสเวลาที่ไม่อาจหยุดยั้ง",
						"hindi": "समय का अथाह प्रवाह।"
					}
				},
				{
					"content": {
						"korean": "거역하려 해도, 결국 모두 같은 길을 갑니다.",
						"english": "Even if you resist, everyone walks the same path in the end.",
						"japanese": "抗おうとも、結局皆同じ道を辿る。",
						"chinese": "即使你反抗，最终所有人都会走上同一条路。",
						"french": "Même si vous résistez, tous finissent par emprunter le même chemin.",
						"spanish": "Aunque te resistas, al final todos siguen el mismo camino.",
						"vietnamese": "Dù có chống cự, cuối cùng mọi người cũng đi chung một con đường.",
						"thai": "แม้จะขัดขืน แต่สุดท้ายทุกคนก็เดินไปในทางเดียวกัน",
						"hindi": "विरोध करने पर भी, अंत में सभी एक ही मार्ग पर चलते हैं।"
					},
					"speaker": "ash",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이런 식으로는… 아무것도 할 수 없어!",
						"english": "Like this... I can't do anything!",
						"japanese": "このままでは…何もできない！",
						"chinese": "这样下去…我什么也做不了！",
						"french": "Comme ça... je ne peux rien faire !",
						"spanish": "¡Así... no puedo hacer nada!",
						"vietnamese": "Thế này thì… tôi chẳng làm được gì cả!",
						"thai": "แบบนี้… ฉันทำอะไรไม่ได้เลย!",
						"hindi": "इस तरह से... मैं कुछ नहीं कर सकता!"
					}
				},
				{
					"content": {
						"korean": "뒤틀린 시계 태엽이 거꾸로 도는 듯한 착각이 들었다.",
						"english": "It felt like the twisted clockwork was turning backward.",
						"japanese": "歪んだ時計のゼンマイが逆回転しているかのような錯覚に陥った。",
						"chinese": "感觉就像扭曲的时钟发条在倒转。",
						"french": "J'ai eu l'impression que le mécanisme d'horlogerie tordu tournait à l'envers.",
						"spanish": "Tuve la ilusión de que el retorcido mecanismo del reloj giraba al revés.",
						"vietnamese": "Cứ ngỡ như dây cót đồng hồ bị vặn ngược đang quay trở lại.",
						"thai": "รู้สึกราวกับว่าเฟืองนาฬิกาที่บิดเบี้ยวหมุนย้อนกลับ",
						"hindi": "ऐसा लगा मानो मुड़ी हुई घड़ी का पुर्जा उल्टा घूम रहा हो।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "ash"
				},
				{
					"speaker": "ash",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "여기서는 모든 것이 왜곡됩니다.",
						"english": "Here, everything is distorted.",
						"japanese": "ここでは全てが歪む。",
						"chinese": "在这里，一切都被扭曲了。",
						"french": "Ici, tout est déformé.",
						"spanish": "Aquí, todo se distorsiona.",
						"vietnamese": "Ở đây, mọi thứ đều bị bóp méo.",
						"thai": "ที่นี่ ทุกสิ่งบิดเบี้ยวไปหมด",
						"hindi": "यहाँ, सब कुछ विकृत हो जाता है।"
					}
				},
				{
					"type": "speech",
					"speaker": "ash",
					"emotion": "sad",
					"content": {
						"korean": "희망조차 절망으로 되돌아오죠.",
						"english": "Even hope returns as despair.",
						"japanese": "希望すら絶望へと変わる。",
						"chinese": "连希望也会变成绝望。",
						"french": "Même l'espoir se transforme en désespoir.",
						"spanish": "Incluso la esperanza se convierte en desesperación.",
						"vietnamese": "Ngay cả hy vọng cũng biến thành tuyệt vọng.",
						"thai": "แม้แต่ความหวังก็ยังกลับกลายเป็นความสิ้นหวัง",
						"hindi": "आशा भी निराशा में बदल जाती है।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "왜… 우리는 이런 곳에.",
						"english": "Why... are we in a place like this?",
						"japanese": "なぜ…私たちはこんな場所に。",
						"chinese": "为什么…我们会在这地方。",
						"french": "Pourquoi... sommes-nous dans un tel endroit ?",
						"spanish": "¿Por qué... estamos en un lugar así?",
						"vietnamese": "Tại sao… chúng ta lại ở nơi thế này.",
						"thai": "ทำไม… เราถึงมาอยู่ในที่แบบนี้",
						"hindi": "क्यों... हम ऐसी जगह पर हैं।"
					}
				},
				{
					"content": {
						"korean": "동굴 속 메아리가 말을 비틀어 반복하며 조롱하는 듯했다.",
						"english": "The cave echo seemed to twist and repeat words, mocking them.",
						"japanese": "洞窟のこだまが言葉を歪ませて繰り返し、嘲笑しているかのようだった。",
						"chinese": "洞穴中的回声似乎扭曲并重复着话语，仿佛在嘲弄。",
						"french": "L'écho de la grotte semblait tordre et répéter les mots, comme pour les railler.",
						"spanish": "El eco de la cueva parecía retorcer y repetir las palabras, burlándose de ellas.",
						"vietnamese": "Tiếng vọng trong hang động dường như bóp méo và lặp lại lời nói, như thể đang chế nhạo.",
						"thai": "เสียงสะท้อนในถ้ำบิดเบือนและย้ำคำพูด ราวกับเย้ยหยัน",
						"hindi": "गुफा की गूँज शब्दों को तोड़-मरोड़ कर दोहराती हुई, उपहास करती लग रही थी।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						1,
						2
					],
					"speaker": "ash"
				},
				{
					"content": {
						"korean": "당신의 모든 선택은… 이미 정해져 있었을지도 모릅니다.",
						"english": "All your choices... might have already been decided.",
						"japanese": "あなたの全ての選択は…既に定められていたのかもしれない。",
						"chinese": "你所有的选择…或许早已注定。",
						"french": "Tous vos choix... ont peut-être déjà été décidés.",
						"spanish": "Todas tus decisiones... quizás ya estaban predestinadas.",
						"vietnamese": "Mọi lựa chọn của bạn… có lẽ đã được định sẵn rồi.",
						"thai": "ทุกการตัดสินใจของคุณ… อาจถูกกำหนดไว้แล้วก็เป็นได้",
						"hindi": "आपके सभी चुनाव... शायद पहले से ही तय थे।"
					},
					"type": "speech",
					"speaker": "ash",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "ash",
					"emotion": "sad",
					"content": {
						"korean": "이 지옥에서는 모든 것이 그래요.",
						"english": "In this hell, everything is like that.",
						"japanese": "この地獄では全てがそうだ。",
						"chinese": "在这地狱里，一切都是如此。",
						"french": "Dans cet enfer, tout est comme ça.",
						"spanish": "En este infierno, todo es así.",
						"vietnamese": "Trong địa ngục này, mọi thứ đều như vậy.",
						"thai": "ในนรกนี้ ทุกสิ่งเป็นเช่นนั้น",
						"hindi": "इस नर्क में, सब कुछ ऐसा ही है।"
					}
				},
				{
					"content": {
						"korean": "그럼… 우리는 모두 꼭두각시였단 말인가.",
						"english": "Then... were we all just puppets?",
						"japanese": "では… 我々は皆、操り人形だったというのか。",
						"chinese": "那么……我们都只是傀儡吗？",
						"french": "Alors… n'étions-nous tous que des marionnettes ?",
						"spanish": "Entonces... ¿fuimos todos meras marionetas?",
						"vietnamese": "Vậy... chúng ta đều là những con rối sao?",
						"thai": "ถ้าอย่างนั้น... พวกเราทุกคนเป็นแค่หุ่นเชิดหรือ?",
						"hindi": "तो... क्या हम सब कठपुतलियां थे?"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "이미 정해진 행동처럼 낯선 데자뷔가 스쳤다.",
						"english": "A strange déjà vu, like a predetermined action, flashed by.",
						"japanese": "既定の行動のように、見慣れないデジャヴがよぎった。",
						"chinese": "一种陌生的似曾相识感闪过，仿佛是早已注定的行为。",
						"french": "Un étrange déjà-vu, comme une action prédéterminée, a traversé mon esprit.",
						"spanish": "Un extraño déjà vu, como una acción predeterminada, me invadió.",
						"vietnamese": "Một cảm giác déjà vu kỳ lạ lướt qua, như thể một hành động đã được định trước.",
						"thai": "ความรู้สึกเดจาวูแปลกๆ แล่นผ่านไป ราวกับเป็นการกระทำที่ถูกกำหนดไว้แล้ว",
						"hindi": "एक अजीब सा डेजा वू कौंध गया, मानो कोई पूर्वनिर्धारित कार्य हो।"
					}
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "크하하… 승리했다고 생각하나?",
						"english": "Hahaha... do you think you've won?",
						"japanese": "クハハ… 勝利したとでも思うのか？",
						"chinese": "哈哈哈……你以为你赢了吗？",
						"french": "Hahaha… penses-tu avoir gagné ?",
						"spanish": "Jajaja... ¿crees que has ganado?",
						"vietnamese": "Khà khà... ngươi nghĩ mình đã thắng sao?",
						"thai": "ฮ่าฮ่าฮ่า... คิดว่าชนะแล้วหรือ?",
						"hindi": "हाहाहा... क्या तुम्हें लगता है कि तुम जीत गए हो?"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이건 시작에 불과해… 진짜 비극은 이제부터다.",
						"english": "This is merely the beginning... the real tragedy starts now.",
						"japanese": "これは始まりに過ぎない… 本当の悲劇はこれからだ。",
						"chinese": "这只是个开始……真正的悲剧才刚刚开始。",
						"french": "Ce n'est qu'un début… la vraie tragédie commence maintenant.",
						"spanish": "Esto es solo el principio... la verdadera tragedia empieza ahora.",
						"vietnamese": "Đây chỉ là khởi đầu... bi kịch thực sự sẽ bắt đầu từ bây giờ.",
						"thai": "นี่เป็นเพียงแค่จุดเริ่มต้น... โศกนาฏกรรมที่แท้จริงกำลังจะเริ่มขึ้นจากนี้ไป",
						"hindi": "यह तो बस शुरुआत है... असली त्रासदी अब शुरू होगी।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "무슨 소리야…!",
						"english": "What do you mean...!",
						"japanese": "何を言ってるんだ…！",
						"chinese": "你什么意思……！",
						"french": "Que veux-tu dire… !",
						"spanish": "¡¿Qué quieres decir...?!",
						"vietnamese": "Ngươi nói gì vậy...!",
						"thai": "หมายความว่าอะไร...!",
						"hindi": "तुम्हारा क्या मतलब है...!"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 사라진 자리, 뒤틀린 환영이 희미하게 아른거렸다.",
						"english": "Where the colossal shadow vanished, a distorted phantom faintly shimmered.",
						"japanese": "巨大な影が消え去った場所には、歪んだ幻影がぼんやりと揺らめいていた。",
						"chinese": "巨型阴影消失之处，扭曲的幻影模糊地闪烁着。",
						"french": "Là où l'ombre colossale avait disparu, une illusion tordue scintillait faiblement.",
						"spanish": "En el lugar donde la sombra colosal se desvaneció, una ilusión distorsionada parpadeó débilmente.",
						"vietnamese": "Nơi bóng tối khổng lồ biến mất, một ảo ảnh méo mó lờ mờ lung linh.",
						"thai": "ตรงที่เงาขนาดมหึมาหายไป ภาพลวงตาที่บิดเบี้ยวก็ปรากฏขึ้นอย่างเลือนลาง",
						"hindi": "जहाँ विशालकाय छाया गायब हुई, वहाँ एक विकृत प्रेत धुँधला-सा जगमगा रहा था।"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "시간은 여전히 흐른다. 이 부조리한 지옥의 진실은 아직 밝혀지지 않았다.",
						"english": "Time still flows. The truth of this absurd hell remains unknown.",
						"japanese": "時間はまだ流れる。この不条理な地獄の真実は、まだ明かされていない。",
						"chinese": "时间仍在流逝。这荒谬地狱的真相尚未揭晓。",
						"french": "Le temps continue de s'écouler. La vérité de cet enfer absurde reste inconnue.",
						"spanish": "El tiempo sigue fluyendo. La verdad de este infierno absurdo aún no ha sido revelada.",
						"vietnamese": "Thời gian vẫn trôi. Sự thật về địa ngục phi lý này vẫn chưa được hé lộ.",
						"thai": "เวลายังคงไหลไป ความจริงของนรกอันไร้เหตุผลนี้ยังไม่ถูกเปิดเผย",
						"hindi": "समय अभी भी बह रहा है। इस बेतुके नरक का सच अभी भी अज्ञात है।"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "시간의 흐름이 모든 것을 휩쓸었다.",
						"english": "The current of time swept everything away.",
						"japanese": "時間の流れがすべてを押し流した。",
						"chinese": "时间的洪流席卷了一切。",
						"french": "Le flot du temps a tout emporté.",
						"spanish": "El fluir del tiempo lo barrió todo.",
						"vietnamese": "Dòng chảy thời gian đã cuốn trôi tất cả.",
						"thai": "กระแสเวลาได้พัดพาทุกสิ่งไป",
						"hindi": "समय की धारा सब कुछ बहा ले गई।"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "절망해라… 너의 시간은 이미 정해졌다.",
						"english": "Despair... your time is already set.",
						"japanese": "絶望しろ… お前の時間は既に定められている。",
						"chinese": "绝望吧……你的时间早已注定。",
						"french": "Désespère… ton temps est déjà fixé.",
						"spanish": "Desespera... tu tiempo ya está marcado.",
						"vietnamese": "Tuyệt vọng đi... thời gian của ngươi đã được định sẵn rồi.",
						"thai": "จงสิ้นหวัง... เวลาของเจ้าถูกกำหนดไว้แล้ว",
						"hindi": "निराश हो जाओ... तुम्हारा समय पहले ही तय हो चुका है।"
					}
				},
				{
					"content": {
						"korean": "아직… 포기하지 않아!",
						"english": "Not yet... I won't give up!",
						"japanese": "まだ…諦めない！",
						"chinese": "还没…我不会放弃！",
						"french": "Pas encore… Je n'abandonnerai pas !",
						"spanish": "¡Aún no... no me rindo!",
						"vietnamese": "Vẫn chưa... tôi sẽ không bỏ cuộc!",
						"thai": "ยัง... ไม่ยอมแพ้!",
						"hindi": "अभी नहीं... मैं हार नहीं मानूँगा!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "마침내, 시간의 심장이 멎은 곳에 다다랐다.",
						"english": "Finally, I arrived at the place where the heart of time stopped.",
						"japanese": "ついに、時間の心臓が止まった場所にたどり着いた。",
						"chinese": "终于，抵达了时间之心停滞之地。",
						"french": "Enfin, j'ai atteint l'endroit où le cœur du temps s'est arrêté.",
						"spanish": "Finalmente, llegué al lugar donde el corazón del tiempo se detuvo.",
						"vietnamese": "Cuối cùng, đã đến nơi trái tim thời gian ngừng đập.",
						"thai": "ในที่สุด ก็มาถึงสถานที่ที่หัวใจของเวลาหยุดลง",
						"hindi": "अंततः, मैं उस स्थान पर पहुँचा जहाँ समय का हृदय रुक गया था।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "왔구나… 또 다른 절망의 씨앗이.",
						"english": "You've come... another seed of despair.",
						"japanese": "来たか… また別の絶望の種が。",
						"chinese": "你来了……又一个绝望的种子。",
						"french": "Te voilà… une autre graine de désespoir.",
						"spanish": "Has llegado... otra semilla de desesperación.",
						"vietnamese": "Ngươi đã đến rồi... một hạt giống tuyệt vọng khác.",
						"thai": "มาแล้วสินะ... เมล็ดพันธุ์แห่งความสิ้นหวังอีกเมล็ดหนึ่ง",
						"hindi": "तुम आ गए... निराशा का एक और बीज।"
					}
				},
				{
					"content": {
						"korean": "네 시간도, 이곳의 모든 것과 함께 멈출 것이다.",
						"english": "Your time, too, will stop along with everything else here.",
						"japanese": "お前の時間も、ここの全てと共に止まるだろう。",
						"chinese": "你的时间，也将与这里的一切一同停止。",
						"french": "Ton temps aussi, s'arrêtera avec tout le reste ici.",
						"spanish": "Tu tiempo también se detendrá, junto con todo lo demás aquí.",
						"vietnamese": "Thời gian của ngươi cũng sẽ ngừng lại, cùng với mọi thứ ở đây.",
						"thai": "เวลาของเจ้าก็จะหยุดลง เช่นเดียวกับทุกสิ่งทุกอย่างที่นี่",
						"hindi": "तुम्हारा समय भी, यहाँ की हर चीज़ के साथ रुक जाएगा।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "우리의 시간을… 네가 정할 순 없어!",
						"english": "You can't decide our time!",
						"japanese": "我々の時間を… お前が決めることはできない！",
						"chinese": "我们的时间……你无法决定！",
						"french": "Tu ne peux pas décider de notre temps !",
						"spanish": "¡No puedes decidir nuestro tiempo!",
						"vietnamese": "Ngươi không thể định đoạt thời gian của chúng ta!",
						"thai": "เจ้าไม่มีทางกำหนดเวลาของเราได้!",
						"hindi": "तुम हमारा समय तय नहीं कर सकते!"
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
			"지옥. 시간마저 뒤틀린 공간.",
			"몸에 새겨진 숫자. 죽음까지 남은 시간이었다.",
			"모든 영혼이 절규했다. 끝없는 고통의 시작.",
			"그리고 속삭임이 들려왔다. 끝나지 않을 비극의 노래가."
		],
		"english": [
			"Hell. A space where even time is twisted.",
			"Numbers carved on the body. It was the time left until death.",
			"Every soul screamed. The beginning of endless torment.",
			"And whispers were heard. A song of unending tragedy."
		],
		"japanese": [
			"地獄。時間すら歪んだ空間。",
			"身体に刻まれた数字。それは死までの残り時間だった。",
			"全ての魂が絶叫した。終わりのない苦痛の始まり。",
			"そして囁きが聞こえてきた。終わらない悲劇の歌が。"
		],
		"chinese": [
			"地狱。连时间都被扭曲的空间。",
			"刻在身上的数字。那是直到死亡的剩余时间。",
			"所有的灵魂都在尖叫。无尽痛苦的开始。",
			"然后，耳边传来窃窃私语。那是永不停止的悲剧之歌。"
		],
		"french": [
			"L'Enfer. Un espace où même le temps est tordu.",
			"Des chiffres gravés sur le corps. C'était le temps restant avant la mort.",
			"Chaque âme hurlait. Le début d'un tourment sans fin.",
			"Et des murmures se firent entendre. Une chanson de tragédie sans fin."
		],
		"spanish": [
			"El Infierno. Un espacio donde hasta el tiempo está retorcido.",
			"Números grabados en el cuerpo. Era el tiempo restante hasta la muerte.",
			"Cada alma gritaba. El inicio de un tormento sin fin.",
			"Y se escucharon susurros. Una canción de tragedia interminable."
		],
		"vietnamese": [
			"Địa ngục. Nơi thời gian cũng bị bóp méo.",
			"Những con số khắc trên cơ thể. Đó là thời gian còn lại cho đến khi chết.",
			"Mọi linh hồn đều gào thét. Khởi đầu của sự giày vò vô tận.",
			"Và những lời thì thầm vang lên. Một bài ca bi kịch không hồi kết."
		],
		"thai": [
			"นรก. สถานที่ที่แม้แต่เวลาก็ยังบิดเบี้ยว.",
			"ตัวเลขที่สลักบนร่างกาย. มันคือเวลาที่เหลืออยู่จนความตายมาเยือน.",
			"ทุกดวงวิญญาณกรีดร้อง. การเริ่มต้นของความทรมานไม่สิ้นสุด.",
			"และเสียงกระซิบก็ดังขึ้น. บทเพลงแห่งโศกนาฏกรรมที่ไม่รู้จบ."
		],
		"hindi": [
			"नरक। एक ऐसी जगह जहाँ समय भी विकृत है।",
			"शरीर पर खुदे हुए अंक। यह मृत्यु तक बचा हुआ समय था।",
			"हर आत्मा चिल्लाई। अंतहीन पीड़ा की शुरुआत।",
			"और फुसफुसाहटें सुनाई दीं। एक अंतहीन त्रासदी का गीत।"
		]
	}
} as const;
