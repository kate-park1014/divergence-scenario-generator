export const scenario_desert_qadir_2_04 = {
	"scenario_id": "desert_qadir_2_04",
	"order": 4,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"ashur": {
			"id": "mon_a07b6a77-ad2e-4adb-b4ed-56e7e10cd5c7",
			"name": {
				"korean": "아슈르",
				"english": "Ashur",
				"japanese": "アシュール",
				"chinese": "阿舒尔",
				"french": "Ashur",
				"spanish": "Ashur",
				"vietnamese": "Ashur",
				"thai": "อาชูร์",
				"hindi": "अशूर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/eb36f4ec-7b0f-47d0-7073-647e4b01e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e0b84a6e-36fc-4ba2-5c1d-54fbb18adb00/public"
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
						"korean": "뜨거운 모래바람이 전장을 휩쓸었다. 승리는 눈앞이었다.",
						"english": "Hot sandstorms swept the battlefield. Victory was in sight.",
						"japanese": "熱い砂嵐が戦場を휩쓸った。勝利は目前だった。",
						"chinese": "炽热的沙暴席卷战场。胜利近在眼前。",
						"french": "De violentes tempêtes de sable balayaient le champ de bataille. La victoire était en vue.",
						"spanish": "Las tormentas de arena caliente barrieron el campo de batalla. La victoria estaba a la vista.",
						"vietnamese": "Cơn bão cát nóng quét qua chiến trường. Chiến thắng đã ở trong tầm mắt.",
						"thai": "พายุทรายร้อนพัดถล่มสนามรบ ชัยชนะอยู่แค่เอื้อม",
						"hindi": "गर्म रेतीली आँधी ने युद्धक्षेत्र को तबाह कर दिया। जीत सामने थी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "ashur",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "ashur",
					"emotion": "base",
					"content": {
						"korean": "겨우 이 정도인가. 늘 그래왔지.",
						"english": "Is this all? It's always been like this.",
						"japanese": "せいぜいこの程度か。いつもそうだった。",
						"chinese": "就这点程度吗？一直都是这样。",
						"french": "C'est tout ? Ça a toujours été comme ça.",
						"spanish": "¿Es esto todo? Siempre ha sido así.",
						"vietnamese": "Chỉ có thế này thôi sao. Luôn luôn là như vậy.",
						"thai": "แค่นี้เองเหรอ ก็เป็นแบบนี้มาตลอด",
						"hindi": "बस इतना ही है क्या? हमेशा से ऐसा ही रहा है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "왜 이렇게 냉소적이야? 이기고 있잖아.",
						"english": "Why so cynical? We're winning.",
						"japanese": "なぜそんなに皮肉っぽいんだ？勝ってるじゃないか。",
						"chinese": "为什么这么冷淡？我们正在赢啊。",
						"french": "Pourquoi es-tu si cynique ? Nous sommes en train de gagner.",
						"spanish": "¿Por qué tan cínico? Estamos ganando.",
						"vietnamese": "Sao lại bi quan thế? Chúng ta đang thắng mà.",
						"thai": "ทำไมถึงได้ประชดประชันนัก? เรากำลังชนะอยู่นะ",
						"hindi": "तुम इतने निंदक क्यों हो? हम जीत रहे हैं।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "ashur",
					"type": "speech",
					"content": {
						"korean": "…아직 모르는군. 이 사막에서 '완벽한 승리'는 없어.",
						"english": "...You still don't know. In this desert, there's no such thing as 'perfect victory'.",
						"japanese": "…まだ分かっていないようだな。この砂漠に「完璧な勝利」などない。",
						"chinese": "……你还不懂。在这片沙漠，没有“完美胜利”。",
						"french": "...Tu ne sais pas encore. Dans ce désert, il n'y a pas de 'victoire parfaite'.",
						"spanish": "...Aún no lo sabes. En este desierto, no existe la 'victoria perfecta'.",
						"vietnamese": "...Ngươi vẫn chưa hiểu. Ở sa mạc này, không có 'chiến thắng hoàn hảo' nào cả.",
						"thai": "...แกยังไม่รู้งั้นเหรอ? ในทะเลทรายแห่งนี้ ไม่มี 'ชัยชนะที่สมบูรณ์แบบ' หรอก",
						"hindi": "...तुम अभी भी नहीं जानते। इस रेगिस्तान में 'परिपूर्ण विजय' जैसी कोई चीज नहीं है।"
					}
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "갑자기 사막 전체를 뒤흔드는 거대한 기운이 느껴졌다. 모든 것이 멈췄다.",
						"english": "Suddenly, a colossal energy that shook the entire desert was felt. Everything stopped.",
						"japanese": "突然、砂漠全体を揺るがす巨大な気配が感じられた。全てが止まった。",
						"chinese": "突然，一股震撼整个沙漠的巨大气息传来。一切都停止了。",
						"french": "Soudain, une énergie colossale qui secoua tout le désert fut ressentie. Tout s'arrêta.",
						"spanish": "De repente, una energía colosal que sacudió todo el desierto fue sentida. Todo se detuvo.",
						"vietnamese": "Bất chợt, một luồng khí tức khổng lồ làm rung chuyển cả sa mạc. Mọi thứ ngưng đọng.",
						"thai": "ทันใดนั้น พลังมหาศาลที่สั่นสะเทือนทะเลทรายทั้งหมดก็ถูกสัมผัสได้ ทุกสิ่งหยุดนิ่ง",
						"hindi": "अचानक, पूरे रेगिस्तान को हिला देने वाली एक विशाल ऊर्जा महसूस हुई। सब कुछ रुक गया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "direction",
					"speaker": "ashur",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						2
					]
				},
				{
					"content": {
						"korean": "저게… 카디르의 그림자야. 올 것이 왔군.",
						"english": "That's... Kadir's shadow. What was to come has arrived.",
						"japanese": "あれが…カディールの影だ。来るべきものが来たか。",
						"chinese": "那是……卡迪尔的影子。该来的，终究还是来了。",
						"french": "C'est... l'ombre de Kadir. Ce qui devait arriver est arrivé.",
						"spanish": "Eso es... la sombra de Kadir. Lo que tenía que venir, ha llegado.",
						"vietnamese": "Đó là... bóng của Kadir. Điều phải đến đã đến.",
						"thai": "นั่นมัน...เงาของคาดีร์ สิ่งที่ต้องมาก็มาถึงแล้ว",
						"hindi": "वह... कादिर की परछाई है। जो होना था, वह हो गया।"
					},
					"type": "speech",
					"speaker": "ashur",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "우리가 이기고 있었는데! 어떻게 이런 일이…",
						"english": "We were winning! How could this happen...",
						"japanese": "我々が勝っていたのに！なぜこんなことに…",
						"chinese": "我们明明要赢了！怎么会这样…",
						"french": "On était en train de gagner ! Comment est-ce possible...",
						"spanish": "¡Estábamos ganando! ¿Cómo pudo pasar esto…?",
						"vietnamese": "Chúng ta đang thắng mà! Sao lại thế này...",
						"thai": "เรากำลังจะชนะอยู่แล้ว! ทำไมถึงเป็นแบบนี้...",
						"hindi": "हम जीत रहे थे! यह कैसे हो गया..."
					}
				},
				{
					"emotion": "base",
					"speaker": "ashur",
					"type": "speech",
					"content": {
						"korean": "항상 그래왔어. 카디르는 언제나 결정적인 순간에 나타나 판도를 뒤집지.",
						"english": "It's always been like this. Kadir always appears at the crucial moment to turn the tide.",
						"japanese": "いつもそうだ。カディールは常に決定的な瞬間に現れて、形勢を逆転させる。",
						"chinese": "一直都是这样。卡迪尔总是在关键时刻出现，扭转局面。",
						"french": "Ça a toujours été comme ça. Kadir apparaît toujours au moment crucial pour inverser la tendance.",
						"spanish": "Siempre ha sido así. Kadir siempre aparece en el momento decisivo para cambiar el rumbo.",
						"vietnamese": "Luôn là vậy. Kadir luôn xuất hiện vào khoảnh khắc quyết định để lật ngược tình thế.",
						"thai": "มันเป็นแบบนี้เสมอ คาเดียร์มักจะปรากฏตัวในช่วงเวลาสำคัญเพื่อพลิกสถานการณ์",
						"hindi": "यह हमेशा ऐसा ही रहा है। कादिर हमेशा निर्णायक क्षण में प्रकट होता है और पासा पलट देता है।"
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "ashur",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						2
					]
				},
				{
					"content": {
						"korean": "카디르는 '균형'을 말해. 어느 한쪽이 너무 강해지는 걸 막는다며.",
						"english": "Kadir speaks of 'balance.' Says he prevents any one side from growing too strong.",
						"japanese": "カディールは『均衡』を語る。どちらか一方が強くなりすぎるのを防ぐためだと。",
						"chinese": "卡迪尔谈论‘平衡’。他说他阻止任何一方变得过于强大。",
						"french": "Kadir parle d'« équilibre ». Il dit qu'il empêche un camp de devenir trop puissant.",
						"spanish": "Kadir habla de 'equilibrio'. Dice que impide que un lado se vuelva demasiado fuerte.",
						"vietnamese": "Kadir nói về 'cân bằng'. Rằng anh ta ngăn chặn bất kỳ bên nào trở nên quá mạnh.",
						"thai": "คาเดียร์พูดถึง 'สมดุล' เขาบอกว่าเพื่อป้องกันไม่ให้ฝ่ายใดฝ่ายหนึ่งแข็งแกร่งเกินไป",
						"hindi": "कादिर 'संतुलन' की बात करता है। कहता है कि वह किसी एक पक्ष को बहुत मजबूत होने से रोकता है।"
					},
					"emotion": "base",
					"speaker": "ashur",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그럼 이 끝없는 전쟁이 그 균형이란 거야?",
						"english": "So, this endless war, that's his balance?",
						"japanese": "じゃあ、この終わりのない戦争がその均衡だというのか？",
						"chinese": "那么，这场无休止的战争就是他所谓的平衡吗？",
						"french": "Alors, cette guerre sans fin, c'est ça son équilibre ?",
						"spanish": "¿Así que esta guerra interminable es su equilibrio?",
						"vietnamese": "Vậy, cuộc chiến bất tận này, đó là sự cân bằng của hắn sao?",
						"thai": "งั้นสงครามที่ไม่สิ้นสุดนี้ คือสมดุลของเขาหรือ?",
						"hindi": "तो, यह अंतहीन युद्ध, यही उसका संतुलन है?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "그래. 영원히 끝나지 않는 전쟁. 그게 카디르의 균형이야.",
						"english": "Yes. A war that never ends. That's Kadir's balance.",
						"japanese": "そうだ。永遠に終わらない戦争。それがカディールの均衡だ。",
						"chinese": "是的。一场永无止境的战争。那就是卡迪尔的平衡。",
						"french": "Oui. Une guerre qui ne finit jamais. C'est ça l'équilibre de Kadir.",
						"spanish": "Sí. Una guerra que nunca termina. Ese es el equilibrio de Kadir.",
						"vietnamese": "Đúng vậy. Một cuộc chiến không bao giờ kết thúc. Đó là sự cân bằng của Kadir.",
						"thai": "ใช่ สงครามที่ไม่มีวันจบ นั่นแหละคือสมดุลของคาเดียร์",
						"hindi": "हाँ। एक ऐसा युद्ध जो कभी खत्म नहीं होता। वही कादिर का संतुलन है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "ashur"
				},
				{
					"emotion": "base",
					"speaker": "ashur",
					"type": "speech",
					"content": {
						"korean": "카디르의 가슴에는 모래시계가 걸려있다고 했지. 절대 다 비워지지 않는 모래시계가.",
						"english": "You said Kadir has an hourglass around his neck. An hourglass that never empties completely.",
						"japanese": "カディールの胸には砂時計がかかっていると言ったね。決して空にならない砂時計が。",
						"chinese": "你说卡迪尔胸前挂着一个沙漏。一个永远不会完全空掉的沙漏。",
						"french": "Tu as dit que Kadir portait un sablier sur la poitrine. Un sablier qui ne se vide jamais complètement.",
						"spanish": "Dijiste que Kadir lleva un reloj de arena colgado del pecho. Un reloj de arena que nunca se vacía del todo.",
						"vietnamese": "Ngươi nói Kadir đeo một chiếc đồng hồ cát trước ngực. Một chiếc đồng hồ cát không bao giờ cạn hẳn.",
						"thai": "เจ้าบอกว่าคาเดียร์มีนาฬิกาทรายแขวนอยู่ที่หน้าอก นาฬิกาทรายที่ไม่เคยหมด",
						"hindi": "तुमने कहा था कि कादिर के सीने पर एक रेत घड़ी टंगी है। एक ऐसी रेत घड़ी जो कभी पूरी तरह खाली नहीं होती।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "ashur",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "정말 끝낼 수 없는 건가? 이 모든 싸움을.",
						"english": "Can we really not end it? All this fighting.",
						"japanese": "本当に終わらせられないのか？この全ての戦いを。",
						"chinese": "真的不能结束吗？所有这些战斗。",
						"french": "On ne peut vraiment pas y mettre fin ? À toutes ces batailles.",
						"spanish": "¿Realmente no podemos acabar con esto? Con toda esta lucha.",
						"vietnamese": "Thật sự không thể kết thúc sao? Tất cả những cuộc chiến này.",
						"thai": "เราไม่สามารถหยุดมันได้จริงหรือ? การต่อสู้ทั้งหมดนี้",
						"hindi": "क्या हम इसे सच में खत्म नहीं कर सकते? इस सारी लड़ाई को।"
					}
				},
				{
					"speaker": "ashur",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "여태껏 그래왔지. 균형이라는 이름으로 계속 반복될 뿐.",
						"english": "It's always been this way. Just endlessly repeating in the name of balance.",
						"japanese": "これまではそうだった。均衡という名のもとに繰り返されるだけ。",
						"chinese": "一直都是这样。只是以平衡之名不断重复。",
						"french": "Ça a toujours été comme ça. Juste une répétition sans fin au nom de l'équilibre.",
						"spanish": "Siempre ha sido así. Simplemente se repite sin cesar en nombre del equilibrio.",
						"vietnamese": "Từ trước đến nay vẫn vậy. Chỉ là lặp đi lặp lại không ngừng dưới danh nghĩa cân bằng.",
						"thai": "มันเป็นแบบนี้มาตลอด แค่เกิดขึ้นซ้ำไปมาในนามของสมดุล",
						"hindi": "यह हमेशा ऐसा ही रहा है। संतुलन के नाम पर बस अंतहीन पुनरावृत्ति।"
					}
				},
				{
					"speaker": "ashur",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "하지만… 과연 그것뿐일까? 진정 균형만을 바라는 걸까?",
						"english": "But... is that truly all there is to it? Does he truly only desire balance?",
						"japanese": "しかし…本当にそれだけなのだろうか？真に均衡だけを望んでいるのだろうか？",
						"chinese": "但是…真的只有这些吗？他真的只想要平衡吗？",
						"french": "Mais... est-ce vraiment tout ? Ne désire-t-il vraiment que l'équilibre ?",
						"spanish": "Pero... ¿es eso todo? ¿Realmente solo desea el equilibrio?",
						"vietnamese": "Nhưng... liệu có thật sự chỉ có thế thôi sao? Liệu hắn có thực sự chỉ mong muốn sự cân bằng?",
						"thai": "แต่... มันแค่นั้นจริงหรือ? เขาต้องการเพียงแค่สมดุลจริงๆ หรือ?",
						"hindi": "लेकिन... क्या यह सच में बस इतना ही है? क्या वह सच में सिर्फ संतुलन चाहता है?"
					}
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "겨우 이 정도인가? 카디르의 뜻은 거스를 수 없다.",
						"english": "Is this all you've got? Kadira's will cannot be defied.",
						"japanese": "この程度か？カディルの意思は逆らえぬ。",
						"chinese": "就这点本事吗？卡迪尔的意志是不可违抗的。",
						"french": "Ce n'est que ça ? La volonté de Kadir ne peut être défiée.",
						"spanish": "¿Esto es todo lo que tenéis? La voluntad de Kadir no puede ser desafiada.",
						"vietnamese": "Chỉ có thế này thôi sao? Ý chí của Kadir không thể bị chống lại.",
						"thai": "แค่นี้เองรึ? เจตจำนงของคาดีร์มิอาจฝ่าฝืน",
						"hindi": "बस इतना ही? कादिर की इच्छा का उल्लंघन नहीं किया जा सकता।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not… over yet!",
						"japanese": "まだ…終わってない！",
						"chinese": "还没…结束！",
						"french": "Ce n'est pas… encore fini !",
						"spanish": "¡Aún no… ha terminado!",
						"vietnamese": "Vẫn chưa… kết thúc đâu!",
						"thai": "ยัง… ไม่จบ!",
						"hindi": "अभी… खत्म नहीं हुआ है!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "ashur",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "그래, 아직 포기하긴 일러. 이 싸움은 끝나지 않아.",
						"english": "Right, it's too early to give up. This fight isn't over.",
						"japanese": "ああ、まだ諦めるのは早い。この戦いは終わらない。",
						"chinese": "没错，现在放弃还太早。这场战斗不会结束。",
						"french": "Oui, il est trop tôt pour abandonner. Ce combat n'est pas terminé.",
						"spanish": "Sí, es demasiado pronto para rendirse. Esta lucha no ha terminado.",
						"vietnamese": "Phải, còn quá sớm để từ bỏ. Cuộc chiến này sẽ không kết thúc.",
						"thai": "ใช่ ยังเร็วเกินไปที่จะยอมแพ้ การต่อสู้นี้ยังไม่จบ",
						"hindi": "हाँ, अभी हार मानना जल्दबाजी होगी। यह लड़ाई खत्म नहीं हुई है।"
					},
					"type": "speech",
					"speaker": "ashur",
					"emotion": "base"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자 속에서, 정체 모를 존재가 모습을 드러냈다.",
						"english": "From within the colossal shadow, an unknown entity revealed itself.",
						"japanese": "巨大な影の中から、正体不明の存在が姿を現した。",
						"chinese": "在巨大的阴影中，一个不明身份的存在显露了身形。",
						"french": "De l'ombre colossale, une entité inconnue a émergé.",
						"spanish": "Desde la colosal sombra, una entidad desconocida se reveló.",
						"vietnamese": "Từ trong bóng tối khổng lồ, một thực thể không rõ danh tính đã xuất hiện.",
						"thai": "จากเงามืดมหึมา สิ่งมีชีวิตปริศนาได้ปรากฏตัวขึ้น",
						"hindi": "विशाल छाया के भीतर से, एक अज्ञात सत्ता प्रकट हुई।"
					}
				},
				{
					"content": {
						"korean": "하찮은 것들. 너희가 이 균형을 거스를 수 있다고 생각하나?",
						"english": "Insignificant beings. Do you truly believe you can defy this balance?",
						"japanese": "取るに足らない者ども。貴様らがこの均衡を破れるとでも思うのか？",
						"chinese": "渺小的存在。你们以为能打破这平衡吗？",
						"french": "Créatures insignifiantes. Pensez-vous vraiment pouvoir défier cet équilibre ?",
						"spanish": "Seres insignificantes. ¿De verdad creéis que podéis desafiar este equilibrio?",
						"vietnamese": "Những kẻ yếu ớt. Ngươi nghĩ mình có thể phá vỡ sự cân bằng này sao?",
						"thai": "พวกไร้ค่า คิดว่าพวกเจ้าจะฝ่าฝืนสมดุลนี้ได้หรือไง?",
						"hindi": "तुच्छ प्राणी। क्या तुम्हें सच में लगता है कि तुम इस संतुलन को बिगाड़ सकते हो?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무슨 균형! 이건 강요된 전쟁이야!",
						"english": "What balance! This is a forced war!",
						"japanese": "何の均衡だ！これは押し付けられた戦争だ！",
						"chinese": "什么平衡！这是一场被强加的战争！",
						"french": "Quel équilibre ! C'est une guerre forcée !",
						"spanish": "¡Qué equilibrio! ¡Esto es una guerra forzada!",
						"vietnamese": "Cân bằng gì chứ! Đây là một cuộc chiến bị ép buộc!",
						"thai": "สมดุลอะไรกัน! นี่มันสงครามที่ถูกบังคับ!",
						"hindi": "कैसा संतुलन! यह तो एक थोपा हुआ युद्ध है!"
					}
				},
				{
					"content": {
						"korean": "카디르의 뜻은 절대적이다. 너희는 그저 소멸할 뿐.",
						"english": "Kadira's will is absolute. You will merely perish.",
						"japanese": "カディルの意思は絶対だ。貴様らはただ消滅するのみ。",
						"chinese": "卡迪尔的意志是绝对的。你们只会灭亡。",
						"french": "La volonté de Kadir est absolue. Vous ne ferez que périr.",
						"spanish": "La voluntad de Kadir es absoluta. Simplemente pereceréis.",
						"vietnamese": "Ý chí của Kadir là tuyệt đối. Ngươi sẽ chỉ biến mất mà thôi.",
						"thai": "เจตจำนงของคาดีร์เป็นที่สุด พวกเจ้าจะต้องดับสูญไปเท่านั้น",
						"hindi": "कादिर की इच्छा अटल है। तुम बस मिट जाओगे।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "크윽… 이겼다고 착각하지 마라. 카디르의 그림자는… 사라지지 않아.",
						"english": "Ugh… Don't mistake this for victory. Kadira's shadow… will not vanish.",
						"japanese": "ぐっ…勝ったと錯覚するな。カディルの影は…消えぬ。",
						"chinese": "呃…别以为你们赢了。卡迪尔的阴影…不会消失。",
						"french": "Ugh… Ne prenez pas cela pour une victoire. L'ombre de Kadir… ne disparaîtra pas.",
						"spanish": "Ugh… No confundáis esto con la victoria. La sombra de Kadir… no desaparecerá.",
						"vietnamese": "Khụ… Đừng nhầm tưởng đây là chiến thắng. Bóng tối của Kadir… sẽ không biến mất.",
						"thai": "อึก… อย่าสำคัญผิดคิดว่าชนะ เงาของคาดีร์… ไม่มีวันหายไป",
						"hindi": "उह… इसे जीत मत समझना। कादिर की छाया… मिटेगी नहीं।"
					}
				},
				{
					"content": {
						"korean": "아니. 여기서 끝낼 거야!",
						"english": "No. We'll end it here!",
						"japanese": "いや。ここで終わらせる！",
						"chinese": "不。就在这里结束它！",
						"french": "Non. Nous allons en finir ici !",
						"spanish": "¡No. Lo terminaremos aquí!",
						"vietnamese": "Không. Chúng ta sẽ kết thúc nó tại đây!",
						"thai": "ไม่ เราจะจบมันที่นี่!",
						"hindi": "नहीं। हम इसे यहीं खत्म करेंगे!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "ashur",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "ashur",
					"emotion": "base",
					"content": {
						"korean": "이건 시작일 뿐이야. 카디르… 그의 진짜 의도는 대체 뭘까?",
						"english": "This is just the beginning. Kadir… what is his true intention?",
						"japanese": "これは始まりに過ぎない。カディル…彼の本当の意図は何なのか？",
						"chinese": "这只是开始。卡迪尔…他真正的意图到底是什么？",
						"french": "Ce n'est que le début. Kadir… quelle est sa véritable intention ?",
						"spanish": "Esto es solo el principio. Kadir… ¿cuál es su verdadera intención?",
						"vietnamese": "Đây chỉ là khởi đầu. Kadir… ý định thực sự của hắn là gì?",
						"thai": "นี่เป็นเพียงจุดเริ่มต้น คาดีร์… เจตนาที่แท้จริงของเขาคืออะไรกันแน่?",
						"hindi": "यह तो बस शुरुआत है। कादिर… उसकी असली मंशा क्या है?"
					}
				},
				{
					"content": {
						"korean": "승리의 환호성도 잠시. 사막은 여전히 끝나지 않는 전쟁의 그림자에 갇혀 있었다.",
						"english": "The cheers of victory were fleeting. The desert remained trapped in the shadow of an unending war.",
						"japanese": "勝利の歓声も束の間。砂漠は依然として終わりのない戦争の影に囚われていた。",
						"chinese": "胜利的欢呼声转瞬即逝。沙漠依旧被无休止的战争阴影所笼罩。",
						"french": "Les cris de victoire furent éphémères. Le désert restait prisonnier de l'ombre d'une guerre sans fin.",
						"spanish": "Los vítores de la victoria fueron fugaces. El desierto seguía atrapado en la sombra de una guerra interminable.",
						"vietnamese": "Tiếng reo hò chiến thắng chỉ là thoáng qua. Sa mạc vẫn bị mắc kẹt trong bóng tối của một cuộc chiến không hồi kết.",
						"thai": "เสียงโห่ร้องแห่งชัยชนะนั้นช่างเลือนราง ทะเลทรายยังคงถูกจองจำภายใต้เงาของสงครามที่ไม่มีวันสิ้นสุด",
						"hindi": "जीत की खुशी क्षणभंगुर थी। रेगिस्तान अभी भी अंतहीन युद्ध की छाया में फंसा हुआ था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"사막의 피바람은 멈추지 않았다.",
			"승리 직전, 언제나 모든 것을 뒤엎는 그림자.",
			"탐험대는 또다시 절망의 벼랑 끝에 선다.",
			"카디르. 그 이름이, 사막의 모든 비극이었다."
		],
		"english": [
			"The blood-red wind of the desert never ceased.",
			"Just before victory, a shadow always overturns everything.",
			"The expedition once again stands on the precipice of despair.",
			"Kadir. That name was the desert's entire tragedy."
		],
		"japanese": [
			"砂漠の血風は止まらなかった。",
			"勝利の直前、常に全てを覆す影。",
			"探検隊は再び絶望の淵に立つ。",
			"カディール。その名が、砂漠の全ての悲劇だった。"
		],
		"chinese": [
			"沙漠的血风从未停歇。",
			"胜利前夕，总有颠覆一切的阴影。",
			"探险队再次站在绝望的悬崖边。",
			"卡迪尔。那个名字，是沙漠所有的悲剧。"
		],
		"french": [
			"Le vent sanglant du désert ne s'est jamais arrêté.",
			"Juste avant la victoire, une ombre renverse toujours tout.",
			"L'expédition se tient à nouveau au bord du précipice du désespoir.",
			"Kadir. Ce nom était toute la tragédie du désert."
		],
		"spanish": [
			"El viento sangriento del desierto nunca cesó.",
			"Justo antes de la victoria, una sombra siempre lo derriba todo.",
			"La expedición se encuentra una vez más al borde del abismo de la desesperación.",
			"Kadir. Ese nombre era toda la tragedia del desierto."
		],
		"vietnamese": [
			"Cơn gió máu của sa mạc không ngừng thổi.",
			"Ngay trước chiến thắng, một bóng tối luôn lật đổ mọi thứ.",
			"Đoàn thám hiểm lại một lần nữa đứng trên bờ vực tuyệt vọng.",
			"Kadir. Cái tên đó, là toàn bộ bi kịch của sa mạc."
		],
		"thai": [
			"ลมทรายสีเลือดแห่งทะเลทรายไม่เคยหยุดนิ่ง",
			"ก่อนชัยชนะเสมอ มีเงาที่พลิกผันทุกสิ่ง",
			"คณะสำรวจยืนอยู่บนปากเหวแห่งความสิ้นหวังอีกครั้ง",
			"คาดีร์ ชื่อนั้นคือโศกนาฏกรรมทั้งหมดของทะเลทราย"
		],
		"hindi": [
			"रेगिस्तान की खूनी हवा नहीं रुकी।",
			"जीत से ठीक पहले, हमेशा सब कुछ उलट देने वाली एक छाया।",
			"अभियान दल एक बार फिर निराशा के कगार पर खड़ा है।",
			"कादिर। वह नाम ही रेगिस्तान की सारी त्रासदी था।"
		]
	}
} as const;
