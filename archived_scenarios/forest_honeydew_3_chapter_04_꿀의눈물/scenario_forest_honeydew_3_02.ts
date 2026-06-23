export const scenario_forest_honeydew_3_02 = {
	"scenario_id": "forest_honeydew_3_02",
	"order": 2,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"fern": {
			"id": "mon_279a32a0-8ec1-4b5b-8179-32df46fdc664",
			"name": {
				"korean": "페른",
				"english": "Fern",
				"japanese": "フェルン",
				"chinese": "费恩",
				"french": "Fern",
				"spanish": "Fern",
				"vietnamese": "Fern",
				"thai": "เฟิร์น",
				"hindi": "फर्न"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/19f9763e-413a-485e-787a-9bbfd8208700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/563627d4-0b7c-4865-39d4-1d0a97363c00/public"
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
					"speaker": "narrator",
					"content": {
						"korean": "숲을 가로지르던 강물이 멈췄다. 푸른 물결 대신 황금빛 꿀이 끈적하게 흐느꼈다.",
						"english": "The river that cut through the forest stopped. Instead of blue waves, golden honey oozed stickily.",
						"japanese": "森を横切っていた川が止まった。青い波の代わりに、黄金色の蜜がべったりととろとろ流れていた。",
						"chinese": "穿过森林的河流停止了。取代碧绿的波浪，金色的蜂蜜黏稠地流淌着。",
						"french": "La rivière qui traversait la forêt s'est arrêtée. Au lieu d'ondes bleues, du miel doré suintait, collant.",
						"spanish": "El río que atravesaba el bosque se detuvo. En lugar de ondas azules, miel dorada supuraba pegajosamente.",
						"vietnamese": "Dòng sông chảy ngang qua rừng đã ngừng lại. Thay vì những làn sóng xanh, mật ong vàng óng chảy rỉ ra một cách nhớp nháp.",
						"thai": "แม่น้ำที่ไหลผ่านป่าได้หยุดลง แทนที่คลื่นสีฟ้า น้ำผึ้งสีทองกลับไหลเยิ้มเหนียวเหนอะหนะ",
						"hindi": "जंगल से बहने वाली नदी रुक गई। नीली लहरों की जगह, सुनहरी शहद चिपचिपा रिस रहा था।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "강물이… 꿀이 됐어.",
						"english": "The river... became honey.",
						"japanese": "川が… 蜜になった。",
						"chinese": "河流… 变成蜂蜜了。",
						"french": "La rivière... est devenue du miel.",
						"spanish": "El río... se volvió miel.",
						"vietnamese": "Dòng sông... biến thành mật ong.",
						"thai": "แม่น้ำ... กลายเป็นน้ำผึ้ง",
						"hindi": "नदी... शहद बन गई।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "character_1",
					"emotion": "sad",
					"content": {
						"korean": "말도 안 돼. 숲의 모든 것이 변하고 있어.",
						"english": "Unbelievable. Everything in the forest is changing.",
						"japanese": "信じられない。森の全てが変わっていく。",
						"chinese": "难以置信。森林里的一切都在变化。",
						"french": "Incroyable. Tout dans la forêt est en train de changer.",
						"spanish": "Increíble. Todo en el bosque está cambiando.",
						"vietnamese": "Thật không thể tin được. Mọi thứ trong rừng đang thay đổi.",
						"thai": "ไม่น่าเชื่อ ทุกสิ่งในป่ากำลังเปลี่ยนแปลงไป",
						"hindi": "अविश्वसनीय। जंगल में सब कुछ बदल रहा है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "fern",
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "fern",
					"emotion": "base",
					"content": {
						"korean": "…왔구나. 여기까지.",
						"english": "...You've come. This far.",
						"japanese": "…来たか。ここまで。",
						"chinese": "...你来了。到这里了。",
						"french": "...Tu es venu. Jusqu'ici.",
						"spanish": "...Has llegado. Hasta aquí.",
						"vietnamese": "...Ngươi đã đến. Đến tận đây.",
						"thai": "...มาถึงแล้วสินะ มาถึงที่นี่",
						"hindi": "...तुम आ गए। यहाँ तक।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "누구야?",
						"english": "Who are you?",
						"japanese": "誰だ？",
						"chinese": "你是谁？",
						"french": "Qui es-tu ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "เธอเป็นใคร?",
						"hindi": "कौन हो तुम?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "fern",
					"content": {
						"korean": "페른. 숲의 그림자.",
						"english": "Fern. Shadow of the forest.",
						"japanese": "フェルン。森の影。",
						"chinese": "费恩。森林的影子。",
						"french": "Fern. L'ombre de la forêt.",
						"spanish": "Fern. La sombra del bosque.",
						"vietnamese": "Fern. Bóng tối của khu rừng.",
						"thai": "เฟิร์น เงาของป่า",
						"hindi": "फर्न। जंगल की छाया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 강이 멈춘 이래로… 숲의 시간도 멈춘 것 같아.",
						"english": "Since this river stopped... time in the forest seems to have stopped too.",
						"japanese": "この川が止まって以来…森の時間も止まったみたい。",
						"chinese": "自从这条河停止流动…森林的时间也好像停止了。",
						"french": "Depuis que cette rivière s'est arrêtée… le temps de la forêt semble s'être arrêté aussi.",
						"spanish": "Desde que este río se detuvo… el tiempo del bosque también parece haberse detenido.",
						"vietnamese": "Kể từ khi dòng sông này ngừng chảy… thời gian trong rừng dường như cũng ngừng lại.",
						"thai": "ตั้งแต่แม่น้ำสายนี้หยุดไหล… เวลาในป่าก็ดูเหมือนจะหยุดนิ่งไปด้วย",
						"hindi": "जब से यह नदी रुकी है... जंगल का समय भी थम गया लगता है।"
					},
					"emotion": "sad",
					"speaker": "fern",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "시간이 멈췄다고?",
						"english": "Time stopped?",
						"japanese": "時間が止まったって？",
						"chinese": "时间停止了？",
						"french": "Le temps s'est arrêté ?",
						"spanish": "¿El tiempo se detuvo?",
						"vietnamese": "Thời gian ngừng lại sao?",
						"thai": "เวลาหยุดเหรอ?",
						"hindi": "समय थम गया?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "나도… 한때 이 꿀에 발목 잡힐 뻔했어.",
						"english": "I too... was once almost trapped by this honey.",
						"japanese": "私も…かつてこの蜜に囚われそうになった。",
						"chinese": "我也…曾差点被这蜂蜜困住。",
						"french": "Moi aussi… j'ai failli être piégé par ce miel autrefois.",
						"spanish": "Yo también… una vez estuve a punto de quedar atrapado por esta miel.",
						"vietnamese": "Tôi cũng… từng suýt bị mắc kẹt trong mật này.",
						"thai": "ฉันเองก็… เกือบจะถูกน้ำผึ้งนี่พันธนาการไว้ครั้งหนึ่ง",
						"hindi": "मैं भी... एक बार इस शहद में फंसने वाला था।"
					},
					"emotion": "sad",
					"speaker": "fern",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "강가 수액 방울 속에 갇힌 나비가 완벽하게 보존된 채 굳어 있었다.",
						"english": "A butterfly, trapped in a drop of river sap, was perfectly preserved and solidified.",
						"japanese": "川辺の樹液のしずくの中に閉じ込められた蝶が、完璧に保存されたまま固まっていた。",
						"chinese": "一只被困在河边树液中的蝴蝶，完美地保存并凝固了。",
						"french": "Un papillon, piégé dans une goutte de sève au bord de la rivière, était parfaitement préservé et solidifié.",
						"spanish": "Una mariposa, atrapada en una gota de savia de río, estaba perfectamente conservada y solidificada.",
						"vietnamese": "Một con bướm bị mắc kẹt trong giọt nhựa cây bên bờ sông, đã được bảo quản hoàn hảo và hóa cứng.",
						"thai": "ผีเสื้อที่ถูกขังอยู่ในหยดน้ำยางริมแม่น้ำ ถูกรักษาไว้อย่างสมบูรณ์และแข็งตัวไปแล้ว",
						"hindi": "नदी के किनारे गोंद की बूंद में फंसी एक तितली पूरी तरह से संरक्षित और कठोर हो गई थी।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "fern"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이 숲은 모든 것을 붙잡아 두려 해. 완벽하게, 영원히.",
						"english": "This forest tries to hold onto everything. Perfectly, forever.",
						"japanese": "この森は全てを留めようとする。完璧に、永遠に。",
						"chinese": "这片森林试图抓住一切。完美地，永远地。",
						"french": "Cette forêt essaie de tout retenir. Parfaitement, éternellement.",
						"spanish": "Este bosque intenta aferrarse a todo. Perfectamente, para siempre.",
						"vietnamese": "Khu rừng này cố giữ lấy mọi thứ. Hoàn hảo, vĩnh cửu.",
						"thai": "ป่านี้พยายามจะยึดทุกสิ่งไว้ให้คงอยู่ สมบูรณ์แบบ, ชั่วนิรันดร์",
						"hindi": "यह जंगल सब कुछ रोककर रखना चाहता है। पूरी तरह से, हमेशा के लिए।"
					},
					"speaker": "fern"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그게 왜 문제인데?",
						"english": "Why is that a problem?",
						"japanese": "それがなぜ問題なの？",
						"chinese": "那有什么问题？",
						"french": "Pourquoi est-ce un problème ?",
						"spanish": "¿Por qué es un problema?",
						"vietnamese": "Tại sao đó lại là vấn đề?",
						"thai": "แล้วมันเป็นปัญหาตรงไหน?",
						"hindi": "तो इसमें क्या समस्या है?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "fern",
					"emotion": "sad",
					"content": {
						"korean": "살아있는 것은 변해야 해. 멈춘 것은… 죽은 거야.",
						"english": "Living things must change. What's stopped... is dead.",
						"japanese": "生きているものは変わらなければならない。止まったものは…死んだものだ。",
						"chinese": "活着的东西必须改变。停止的…就是死的。",
						"french": "Ce qui est vivant doit changer. Ce qui est arrêté… est mort.",
						"spanish": "Lo que está vivo debe cambiar. Lo que se detiene… está muerto.",
						"vietnamese": "Sinh vật sống phải thay đổi. Cái gì đã ngừng lại… là đã chết.",
						"thai": "สิ่งมีชีวิตต้องเปลี่ยนไป สิ่งที่หยุดนิ่ง…คือความตาย",
						"hindi": "जीवित चीज़ों को बदलना होगा। जो रुक गया है... वह मर चुका है।"
					}
				},
				{
					"type": "speech",
					"speaker": "fern",
					"content": {
						"korean": "내 과거의 실수가… 이 숲을 이렇게 만들었을지도 몰라.",
						"english": "My past mistakes... might have made this forest like this.",
						"japanese": "私の過去の過ちが…この森をこうしてしまったのかもしれない。",
						"chinese": "我过去的错误…也许让这片森林变成了这样。",
						"french": "Mes erreurs passées… ont peut-être fait de cette forêt ce qu'elle est.",
						"spanish": "Mis errores pasados… quizás hicieron que este bosque fuera así.",
						"vietnamese": "Những sai lầm trong quá khứ của tôi… có thể đã khiến khu rừng này trở nên như vậy.",
						"thai": "ความผิดพลาดในอดีตของฉัน… อาจจะเป็นสิ่งที่ทำให้ป่านี้เป็นแบบนี้",
						"hindi": "मेरी पिछली गलतियों ने... शायद इस जंगल को ऐसा बना दिया हो।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "무슨 소리야?",
						"english": "What do you mean?",
						"japanese": "どういうこと？",
						"chinese": "什么意思？",
						"french": "Que veux-tu dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ý bạn là gì?",
						"thai": "คุณหมายความว่าไง?",
						"hindi": "तुम्हारा क्या मतलब है?"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "fern",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "fern",
					"content": {
						"korean": "이 꿀은 모든 것을 삼켜. 기억까지도.",
						"english": "This honey swallows everything. Even memories.",
						"japanese": "この蜜は全てを飲み込む。記憶までも。",
						"chinese": "这蜂蜜吞噬一切。甚至记忆。",
						"french": "Ce miel engloutit tout. Même les souvenirs.",
						"spanish": "Esta miel lo traga todo. Incluso los recuerdos.",
						"vietnamese": "Mật này nuốt chửng mọi thứ. Ngay cả ký ức.",
						"thai": "น้ำผึ้งนี้กลืนกินทุกสิ่ง แม้แต่ความทรงจำ",
						"hindi": "यह शहद सब कुछ निगल जाता है। यादें भी।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "기억까지?",
						"english": "Even memories?",
						"japanese": "記憶まで？",
						"chinese": "连记忆都？",
						"french": "Même les souvenirs ?",
						"spanish": "¿Incluso los recuerdos?",
						"vietnamese": "Cả ký ức?",
						"thai": "แม้แต่ความทรงจำด้วย?",
						"hindi": "यादें भी?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…더 이상 돌아갈 수 없어. 발을 들이는 순간, 너희도 숲의 일부가 될 거야.",
						"english": "...No turning back now. The moment you step in, you too will become part of the forest.",
						"japanese": "…もう後戻りはできない。足を踏み入れた瞬間、お前たちも森の一部となるだろう。",
						"chinese": "…已无法回头。踏入的那一刻，你们也会成为森林的一部分。",
						"french": "...Plus de retour possible. Dès l'instant où vous mettrez le pied ici, vous ferez partie de la forêt.",
						"spanish": "...No hay vuelta atrás. En cuanto pongáis un pie aquí, vosotros también seréis parte del bosque.",
						"vietnamese": "...Không thể quay lại nữa. Khoảnh khắc các ngươi đặt chân vào, các ngươi cũng sẽ trở thành một phần của khu rừng.",
						"thai": "...ไม่มีทางย้อนกลับแล้ว. ทันทีที่เจ้าก้าวเข้ามา, เจ้าก็จะกลายเป็นส่วนหนึ่งของป่านี้.",
						"hindi": "...अब पीछे नहीं हट सकते। जिस पल तुम कदम रखोगे, तुम भी जंगल का हिस्सा बन जाओगे।"
					},
					"emotion": "angry",
					"speaker": "fern"
				},
				{
					"content": {
						"korean": "우린 멈출 수 없어.",
						"english": "We can't stop.",
						"japanese": "我々は止まれない。",
						"chinese": "我们不能停下。",
						"french": "Nous ne pouvons pas nous arrêter.",
						"spanish": "No podemos parar.",
						"vietnamese": "Chúng ta không thể dừng lại.",
						"thai": "เราหยุดไม่ได้.",
						"hindi": "हम रुक नहीं सकते।"
					},
					"emotion": "base",
					"speaker": "character_2",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "끈적한 꿀이 모든 것을 덮었다. 움직일 수 없었다.",
						"english": "Sticky honey covered everything. I couldn't move.",
						"japanese": "べたつく蜂蜜がすべてを覆った。身動きが取れなかった。",
						"chinese": "黏稠的蜂蜜覆盖了一切。我无法动弹。",
						"french": "Le miel collant a tout recouvert. Je ne pouvais plus bouger.",
						"spanish": "La miel pegajosa lo cubrió todo. No pude moverme.",
						"vietnamese": "Mật ong dính nhớp nháp bao phủ mọi thứ. Tôi không thể cử động.",
						"thai": "น้ำผึ้งเหนียวเหนอะหนะปกคลุมทุกสิ่ง ขยับไม่ได้เลย",
						"hindi": "चिपचिपे शहद ने सब कुछ ढक लिया। मैं हिल नहीं सका।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "어리석은 것들. 너희도 곧 숲의 일부가 될 것이다.",
						"english": "Fools. You too shall soon become part of the forest.",
						"japanese": "愚かな者たちめ。お前たちもじきに森の一部となるだろう。",
						"chinese": "愚蠢的东西。你们也将很快成为森林的一部分。",
						"french": "Idiots. Vous aussi ferez bientôt partie de la forêt.",
						"spanish": "Necios. Vosotros también seréis pronto parte del bosque.",
						"vietnamese": "Lũ ngu ngốc. Các ngươi cũng sẽ sớm trở thành một phần của khu rừng thôi.",
						"thai": "เจ้าพวกโง่เขลา เจ้าเองก็จะกลายเป็นส่วนหนึ่งของป่าในไม่ช้า",
						"hindi": "मूर्खों। तुम भी जल्द ही जंगल का हिस्सा बन जाओगे।"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "…아직 끝나지 않았어.",
						"english": "...It's not over yet.",
						"japanese": "…まだ終わっていない。",
						"chinese": "…还没结束。",
						"french": "...Ce n'est pas encore fini.",
						"spanish": "...Aún no ha terminado.",
						"vietnamese": "...Vẫn chưa kết thúc.",
						"thai": "...ยังไม่จบ",
						"hindi": "...अभी खत्म नहीं हुआ है।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "강물이 멈춘 중심부. 거대한 그림자가 나타났다.",
						"english": "At the heart where the river stopped, a giant shadow appeared.",
						"japanese": "川が止まった中心部。巨大な影が現れた。",
						"chinese": "在河水停滞的中心，一个巨大的身影出现了。",
						"french": "Au cœur où la rivière s'était arrêtée, une ombre gigantesque apparut.",
						"spanish": "En el corazón donde el río se detuvo, una sombra gigantesca apareció.",
						"vietnamese": "Tại trung tâm nơi dòng sông ngừng chảy, một bóng đen khổng lồ xuất hiện.",
						"thai": "ณ ใจกลางที่สายน้ำหยุดนิ่ง, เงาขนาดยักษ์ปรากฏขึ้น.",
						"hindi": "उस केंद्र में जहाँ नदी रुक गई थी, एक विशाल छाया प्रकट हुई।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "감히 이곳의 평화를 깨려는 자들인가.",
						"english": "Dare you disturb the peace of this place?",
						"japanese": "敢えてこの地の平和を乱す者たちか。",
						"chinese": "竟敢打破此地的宁静之人吗？",
						"french": "Osez-vous perturber la paix de ce lieu ?",
						"spanish": "¿Os atrevéis a perturbar la paz de este lugar?",
						"vietnamese": "Dám phá vỡ sự bình yên của nơi này sao?",
						"thai": "กล้าดียังไงมาทำลายความสงบสุขของที่นี่?",
						"hindi": "क्या तुम इस जगह की शांति भंग करने की हिम्मत करते हो?"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 숲을 이렇게 만든 거냐?",
						"english": "Did you do this to the forest?",
						"japanese": "お前がこの森をこんな風にしたのか？",
						"chinese": "是你把这片森林变成这样的吗？",
						"french": "Est-ce toi qui as fait ça à la forêt ?",
						"spanish": "¿Fuiste tú quien le hizo esto al bosque?",
						"vietnamese": "Ngươi đã biến khu rừng này thành ra thế này sao?",
						"thai": "เจ้าเป็นคนทำป่านี้ให้เป็นแบบนี้หรือ?",
						"hindi": "क्या तुमने जंगल का यह हाल किया है?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "나는 그저… 모든 것을 영원히 보존하려 했을 뿐.",
						"english": "I merely... sought to preserve everything forever.",
						"japanese": "私はただ…全てを永遠に保とうとしただけだ。",
						"chinese": "我只是…想让一切都永远保存下去。",
						"french": "Je n'ai fait que... chercher à tout préserver éternellement.",
						"spanish": "Yo solo... intenté preservar todo para siempre.",
						"vietnamese": "Ta chỉ là… muốn bảo tồn mọi thứ mãi mãi.",
						"thai": "ข้าแค่... ต้องการรักษาสรรพสิ่งไว้ชั่วนิรันดร์.",
						"hindi": "मैंने बस... हर चीज़ को हमेशा के लिए संरक्षित करने की कोशिश की।"
					},
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크으… 이 평화는… 영원할 텐데….",
						"english": "Ugh... This peace... it would have been eternal...",
						"japanese": "くっ…この平和は…永遠だったはずなのに…。",
						"chinese": "呃…这份宁静…本该是永恒的啊…",
						"french": "Ugh... Cette paix... elle aurait été éternelle...",
						"spanish": "Ugh... Esta paz... habría sido eterna...",
						"vietnamese": "Khụ... Sự bình yên này... đáng lẽ đã vĩnh cửu...",
						"thai": "อ๊า... ความสงบนี้... น่าจะคงอยู่ชั่วนิรันดร์...",
						"hindi": "आह... यह शांति... यह शाश्वत होती..."
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이게… 평화라고?",
						"english": "This is... peace?",
						"japanese": "これが…平和だと？",
						"chinese": "这就是…和平吗？",
						"french": "C'est ça... la paix ?",
						"spanish": "¿Esto es... paz?",
						"vietnamese": "Đây là... sự bình yên ư?",
						"thai": "นี่คือ... ความสงบหรือ?",
						"hindi": "यह है... शांति?"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "중간 보스가 사라지자, 멈췄던 강물이 아주 미세하게 꿈틀거렸다.",
						"english": "As the mid-boss vanished, the halted river began to subtly ripple.",
						"japanese": "中間ボスが消滅すると、止まっていた川が微かに蠢き始めた。",
						"chinese": "当中途boss消失后，停滞的河水开始微微蠕动。",
						"french": "Quand le boss intermédiaire disparut, la rivière arrêtée commença à onduler subtilement.",
						"spanish": "Cuando el jefe intermedio desapareció, el río detenido comenzó a ondularse sutilmente.",
						"vietnamese": "Khi tên trùm giữa biến mất, dòng sông đã ngừng chảy bắt đầu lay động rất nhẹ.",
						"thai": "เมื่อบอสกึ่งกลางหายไป, สายน้ำที่หยุดนิ่งก็เริ่มกระเพื่อมเบาๆ.",
						"hindi": "जैसे ही मध्य-बॉस गायब हुआ, रुकी हुई नदी धीरे से हिलने लगी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "하지만 숲의 시간은 아직 돌아오지 않았다. 더 깊은 곳으로 향해야 한다.",
						"english": "But the forest's time has not yet returned. We must venture deeper.",
						"japanese": "しかし、森の時はまだ戻っていない。さらに奥へと進まなければならない。",
						"chinese": "但是，森林的时间尚未回来。我们必须前往更深处。",
						"french": "Cependant, le temps de la forêt n'est pas encore revenu. Nous devons nous aventurer plus profondément.",
						"spanish": "Sin embargo, el tiempo del bosque aún no ha regresado. Debemos adentrarnos más.",
						"vietnamese": "Nhưng thời gian của khu rừng vẫn chưa trở lại. Chúng ta phải tiến sâu hơn nữa.",
						"thai": "แต่เวลาของป่ายังไม่กลับมา เราต้องมุ่งหน้าสู่ส่วนที่ลึกกว่านี้",
						"hindi": "लेकिन जंगल का समय अभी तक वापस नहीं आया है। हमें और गहराई में जाना होगा।"
					},
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"숲 깊숙이 흐르던 강물이 멈췄다.",
			"달콤한 꿀처럼 끈적하게 굳어버린 강.",
			"그곳에서, 숲의 시간도 함께 멈춘 듯했다.",
			"누군가 나타나 끔찍한 진실을 경고했지만, 이미 늦은 걸까?"
		],
		"english": [
			"The river flowing deep in the forest stopped.",
			"The river, sticky and hardened like sweet honey.",
			"There, the forest's time seemed to stop with it.",
			"Someone appeared, warning of a terrible truth, but was it already too late?"
		],
		"japanese": [
			"森の奥深くを流れる川が止まった。",
			"甘い蜜のように粘つき、固まってしまった川。",
			"そこでは、森の時間も共に止まってしまったかのようだった。",
			"誰かが現れ、恐ろしい真実を警告したが、もう手遅れなのだろうか？"
		],
		"chinese": [
			"流淌在森林深处的河流停止了。",
			"河流变得黏稠，凝固得像甜美的蜂蜜。",
			"在那里，森林的时间似乎也随之停止了。",
			"有人出现警告了一个可怕的真相，但一切都太晚了吗？"
		],
		"french": [
			"La rivière qui coulait au plus profond de la forêt s'est arrêtée.",
			"La rivière, figée et collante comme du miel doux.",
			"Là, le temps de la forêt semblait s'être arrêté aussi.",
			"Quelqu'un est apparu, avertissant d'une terrible vérité, mais était-il déjà trop tard ?"
		],
		"spanish": [
			"El río que fluía en lo profundo del bosque se detuvo.",
			"El río, pegajoso y endurecido como dulce miel.",
			"Allí, el tiempo del bosque también parecía haberse detenido.",
			"Alguien apareció, advirtiendo una terrible verdad, pero ¿ya era demasiado tarde?"
		],
		"vietnamese": [
			"Dòng sông chảy sâu trong rừng đã ngừng lại.",
			"Dòng sông đặc quánh lại, cứng như mật ong ngọt ngào.",
			"Ở đó, thời gian của khu rừng dường như cũng ngừng lại.",
			"Ai đó đã xuất hiện, cảnh báo về một sự thật kinh hoàng, nhưng liệu đã quá muộn rồi sao?"
		],
		"thai": [
			"แม่น้ำที่ไหลลึกเข้าไปในป่าได้หยุดลงแล้ว",
			"แม่น้ำที่เหนียวเหนอะหนะและแข็งตัวเหมือนน้ำผึ้งหวาน",
			"ที่นั่น เวลาของป่าก็ดูเหมือนจะหยุดนิ่งไปด้วย",
			"มีใครบางคนปรากฏตัวขึ้น เตือนถึงความจริงอันน่าสะพรึงกลัว แต่ว่ามันสายเกินไปแล้วหรือยัง?"
		],
		"hindi": [
			"जंगल में गहराई तक बहने वाली नदी रुक गई।",
			"नदी, मीठे शहद की तरह चिपचिपी और कठोर हो गई।",
			"वहाँ, जंगल का समय भी उसके साथ रुक गया था।",
			"कोई प्रकट हुआ, एक भयानक सच्चाई की चेतावनी दे रहा था, लेकिन क्या बहुत देर हो चुकी थी?"
		]
	}
} as const;
