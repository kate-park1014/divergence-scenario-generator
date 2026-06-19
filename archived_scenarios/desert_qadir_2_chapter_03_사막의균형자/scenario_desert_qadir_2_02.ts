export const scenario_desert_qadir_2_02 = {
	"scenario_id": "desert_qadir_2_02",
	"order": 2,
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
	"prologue": {
		"korean": [
			"세계는 끝없는 전쟁의 불길 속에 잠겨 있었다.",
			"모래는 피와 눈물로 젖었고, 평화는 찰나의 꿈처럼 사라졌다.",
			"하지만 이 모든 비극 뒤에는 — 알 수 없는 손길이 있었다.",
			"균형이라는 이름 아래, 모든 승리를 좌절시키는 그림자."
		],
		"english": [
			"The world was engulfed in the flames of endless war.",
			"The sand was soaked with blood and tears, and peace vanished like a fleeting dream.",
			"But behind all this tragedy — there was an unknown hand.",
			"A shadow that thwarts every victory, in the name of balance."
		],
		"japanese": [
			"世界は終わりのない戦火に包まれていた。",
			"砂は血と涙に濡れ、平和は儚い夢のように消え去った。",
			"だが、この全ての悲劇の裏には — 未知なる手が。",
			"均衡の名の下に、あらゆる勝利を挫折させる影が。"
		],
		"chinese": [
			"世界被无尽的战火吞噬。",
			"沙土浸透了鲜血和泪水，和平如转瞬即逝的梦般消逝。",
			"然而，在所有这些悲剧背后——有一只无形的手。",
			"一个以平衡之名，挫败所有胜利的阴影。"
		],
		"french": [
			"Le monde était englouti dans les flammes d'une guerre sans fin.",
			"Le sable était imbibé de sang et de larmes, et la paix s'était évanouie comme un rêve fugace.",
			"Mais derrière toute cette tragédie — il y avait une main inconnue.",
			"Une ombre qui contrecarrerait chaque victoire, au nom de l'équilibre."
		],
		"spanish": [
			"El mundo estaba envuelto en las llamas de una guerra sin fin.",
			"La arena estaba empapada de sangre y lágrimas, y la paz se desvaneció como un sueño fugaz.",
			"Pero detrás de toda esta tragedia — había una mano desconocida.",
			"Una sombra que frustra cada victoria, en nombre del equilibrio."
		],
		"vietnamese": [
			"Thế giới chìm trong ngọn lửa chiến tranh bất tận.",
			"Cát thấm đẫm máu và nước mắt, hòa bình tan biến như một giấc mơ thoáng qua.",
			"Nhưng đằng sau tất cả bi kịch này — có một bàn tay vô hình.",
			"Một cái bóng cản trở mọi chiến thắng, nhân danh sự cân bằng."
		],
		"thai": [
			"โลกถูกกลืนกินด้วยเปลวเพลิงแห่งสงครามไม่สิ้นสุด",
			"ผืนทรายโชกไปด้วยเลือดและน้ำตา สันติสุขเลือนหายไปราวกับความฝันชั่วพริบตา",
			"แต่เบื้องหลังโศกนาฏกรรมทั้งหมดนี้ — มีมือที่มองไม่เห็นอยู่เบื้องหลัง",
			"เงาที่ขัดขวางทุกชัยชนะในนามของสมดุล"
		],
		"hindi": [
			"दुनिया अंतहीन युद्ध की लपटों में घिरी हुई थी।",
			"रेत खून और आँसुओं से तर थी, और शांति एक क्षणिक सपने की तरह गायब हो गई।",
			"लेकिन इस सारी त्रासदी के पीछे — एक अज्ञात हाथ था।",
			"संतुलन के नाम पर, हर जीत को विफल करने वाली एक परछाई।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "황량한 사막. 붉은 모래바람이 모든 흔적을 지웠다.",
						"english": "A desolate desert. Red sandstorms erased all traces.",
						"japanese": "荒涼たる砂漠。赤い砂嵐が全ての痕跡を消し去った。",
						"chinese": "荒凉的沙漠。红色沙暴抹去了一切痕迹。",
						"french": "Un désert désolé. Des tempêtes de sable rouge ont effacé toutes les traces.",
						"spanish": "Un desierto desolado. Las tormentas de arena roja borraron todo rastro.",
						"vietnamese": "Một sa mạc hoang vắng. Bão cát đỏ xóa sạch mọi dấu vết.",
						"thai": "ทะเลทรายที่รกร้าง พายุทรายสีแดงได้ลบเลือนร่องรอยทั้งหมด",
						"hindi": "एक वीरान रेगिस्तान। लाल रेतीले तूफानों ने सभी निशानों को मिटा दिया।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "여기서부터인가… 평화는 어디에 있는 거야?",
						"english": "Is this where it begins...? Where is peace?",
						"japanese": "ここからなのか… 平和はどこにある？",
						"chinese": "是从这里开始吗……和平在哪里？",
						"french": "Est-ce que ça commence ici... ? Où est la paix ?",
						"spanish": "¿Empieza aquí...? ¿Dónde está la paz?",
						"vietnamese": "Có phải từ đây không…? Hòa bình ở đâu?",
						"thai": "เริ่มต้นที่นี่หรือเปล่า... สันติสุขอยู่ที่ไหนกัน?",
						"hindi": "क्या यहीं से शुरू होता है...? शांति कहाँ है?"
					}
				},
				{
					"type": "direction",
					"spot": [
						5,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ashur"
				},
				{
					"content": {
						"korean": "평화? 이 사막에서 그런 걸 찾다니. 순진하군.",
						"english": "Peace? To seek such a thing in this desert. How naive.",
						"japanese": "平和？ この砂漠でそんなものを探すとは。甘いな。",
						"chinese": "和平？在这片沙漠里寻找那种东西。真天真。",
						"french": "La paix ? Chercher une telle chose dans ce désert. Quelle naïveté.",
						"spanish": "¿Paz? Buscar algo así en este desierto. Qué ingenuo.",
						"vietnamese": "Hòa bình? Tìm kiếm thứ đó ở sa mạc này. Ngây thơ thật.",
						"thai": "สันติสุขรึ? มาหาสิ่งนั้นในทะเลทรายแห่งนี้ ช่างไร้เดียงสาจริงๆ",
						"hindi": "शांति? इस रेगिस्तान में ऐसी चीज़ खोजना। कितने भोले हो।"
					},
					"type": "speech",
					"speaker": "ashur",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "당신은 누구지?",
						"english": "Who are you?",
						"japanese": "お前は誰だ？",
						"chinese": "你是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "คุณเป็นใคร?",
						"hindi": "तुम कौन हो?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "ashur",
					"emotion": "base",
					"content": {
						"korean": "아슈르. 그냥 지나가던 용병이야. 너희처럼 이상한 꿈을 꾸지 않는.",
						"english": "Ashur. Just a passing mercenary. Not like you, dreaming strange dreams.",
						"japanese": "アシュール。ただの通りすがりの傭兵だ。お前たちのように変な夢を見ていない。",
						"chinese": "阿舒尔。只是个路过的佣兵。不像你们，做着奇怪的梦。",
						"french": "Ashur. Juste un mercenaire de passage. Pas comme vous, à rêver d'étranges rêves.",
						"spanish": "Ashur. Solo un mercenario de paso. No como ustedes, soñando sueños extraños.",
						"vietnamese": "Ashur. Chỉ là một lính đánh thuê qua đường. Không giống các người, mơ những giấc mơ kỳ lạ.",
						"thai": "อาชูร์ แค่ทหารรับจ้างที่ผ่านมา ไม่เหมือนพวกเจ้าที่ฝันแปลกๆ",
						"hindi": "आशूर। बस एक गुजरता हुआ भाड़े का सैनिक। तुम लोगों की तरह अजीब सपने नहीं देखता।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "우리는 이 끝나지 않는 전쟁을 끝내러 왔어.",
						"english": "We've come to end this endless war.",
						"japanese": "我々はこの終わらない戦争を終わらせに来た。",
						"chinese": "我们来是为了结束这场永无止境的战争。",
						"french": "Nous sommes venus mettre fin à cette guerre sans fin.",
						"spanish": "Hemos venido a terminar esta guerra interminable.",
						"vietnamese": "Chúng tôi đến để kết thúc cuộc chiến bất tận này.",
						"thai": "เรามาที่นี่เพื่อยุติสงครามที่ไม่มีวันสิ้นสุดนี้",
						"hindi": "हम इस अंतहीन युद्ध को खत्म करने आए हैं।"
					}
				},
				{
					"speaker": "ashur",
					"emotion": "sad",
					"content": {
						"korean": "끝? 그게 뭔데. 싸움은 항상 다시 시작되지. 늘 그랬어.",
						"english": "End? What's that? Fights always restart. Always have.",
						"japanese": "終わり？ 何それ？ 戦いはいつもまた始まる。ずっとそうだった。",
						"chinese": "结束？那是什么？战斗总会再次开始。一直如此。",
						"french": "La fin ? C'est quoi ça ? Les combats reprennent toujours. Ça a toujours été comme ça.",
						"spanish": "¿Fin? ¿Qué es eso? Las peleas siempre reinician. Siempre ha sido así.",
						"vietnamese": "Kết thúc? Đó là cái gì? Các cuộc chiến luôn bắt đầu lại. Luôn luôn là vậy.",
						"thai": "จบ? นั่นอะไร? การต่อสู้เริ่มต้นใหม่เสมอ เป็นมาตลอด",
						"hindi": "अंत? वो क्या है? लड़ाई हमेशा फिर से शुरू होती है। हमेशा ऐसा ही रहा है।"
					},
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "약탈자들과의 전투가 시작됐다. 모래바람이 검은 피로 물들었다.",
						"english": "The battle with the marauders has begun. The sandstorm is stained with black blood.",
						"japanese": "略奪者たちとの戦闘が始まった。砂嵐が黒い血で染まった。",
						"chinese": "与掠夺者的战斗开始了。沙尘暴被黑色的血染红。",
						"french": "La bataille contre les pillards a commencé. La tempête de sable est maculée de sang noir.",
						"spanish": "La batalla con los saqueadores ha comenzado. La tormenta de arena está teñida de sangre negra.",
						"vietnamese": "Trận chiến với bọn cướp đã bắt đầu. Bão cát nhuộm màu máu đen.",
						"thai": "การต่อสู้กับพวกปล้นสะดมได้เริ่มขึ้นแล้ว พายุทรายเปื้อนเลือดสีดำ",
						"hindi": "हमलावरों के साथ युद्ध शुरू हो गया है। रेतीला तूफान काले खून से सना हुआ है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "물러서지 마! 평화를 위해!",
						"english": "Don't retreat! For peace!",
						"japanese": "退くな！ 平和のために！",
						"chinese": "别退缩！为了和平！",
						"french": "Ne reculez pas ! Pour la paix !",
						"spanish": "¡No retrocedan! ¡Por la paz!",
						"vietnamese": "Đừng lùi bước! Vì hòa bình!",
						"thai": "อย่าถอย! เพื่อสันติภาพ!",
						"hindi": "पीछे मत हटो! शांति के लिए!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "승리가 눈앞에 다가온 순간, 거대한 모래 폭풍이 휘몰아쳤다.",
						"english": "Just as victory was within grasp, a massive sandstorm swept in.",
						"japanese": "勝利が目の前に迫った瞬間、巨大な砂嵐が襲いかかった。",
						"chinese": "胜利近在咫尺之际，一场巨大的沙尘暴呼啸而至。",
						"french": "Au moment où la victoire était à portée de main, une gigantesque tempête de sable s'est abattue.",
						"spanish": "Justo cuando la victoria estaba al alcance, una tormenta de arena masiva se desató.",
						"vietnamese": "Ngay khi chiến thắng đã ở trong tầm tay, một cơn bão cát khổng lồ ập đến.",
						"thai": "ในขณะที่ชัยชนะอยู่แค่เอื้อม พายุทรายขนาดมหึมาก็พัดกระหน่ำ",
						"hindi": "जिस क्षण जीत करीब थी, एक विशाल रेतीला तूफान आ गया।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이건… 자연 현상이 아니야!",
						"english": "This is... not a natural phenomenon!",
						"japanese": "これは… 自然現象じゃない！",
						"chinese": "这不是……自然现象！",
						"french": "Ce n'est pas... un phénomène naturel !",
						"spanish": "¡Esto... no es un fenómeno natural!",
						"vietnamese": "Đây không phải… hiện tượng tự nhiên!",
						"thai": "นี่มัน... ไม่ใช่ปรากฏการณ์ธรรมชาติ!",
						"hindi": "यह... कोई प्राकृतिक घटना नहीं है!"
					}
				},
				{
					"content": {
						"korean": "폭풍이 걷히자, 약탈자들과 탐험대 모두 큰 피해를 입은 채 쓰러져 있었다. 기묘한 균형이었다.",
						"english": "When the storm cleared, both marauders and the expedition lay battered. A strange balance.",
						"japanese": "嵐が去ると、略奪者たちも探検隊も共に大きな被害を受け倒れていた。奇妙な均衡だった。",
						"chinese": "风暴过后，掠夺者和探险队都遭受重创，倒地不起。这是一个诡异的平衡。",
						"french": "Quand la tempête se calma, pillards et expédition gisaient, tous gravement blessés. Un étrange équilibre.",
						"spanish": "Cuando la tormenta se disipó, tanto los saqueadores como la expedición yacían maltrechos. Un equilibrio extraño.",
						"vietnamese": "Khi bão tan, cả bọn cướp và đoàn thám hiểm đều nằm la liệt trong tình trạng bị thiệt hại nặng nề. Một sự cân bằng kỳ lạ.",
						"thai": "เมื่อพายุสงบลง ทั้งพวกปล้นสะดมและคณะสำรวจต่างล้มลงได้รับความเสียหายอย่างหนัก นี่คือความสมดุลที่แปลกประหลาด",
						"hindi": "जब तूफान छँटा, तो हमलावर और अभियान दल दोनों बुरी तरह क्षतिग्रस्त होकर पड़े थे। एक अजीब संतुलन था।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "ashur",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						2
					]
				},
				{
					"content": {
						"korean": "봐. 늘 이렇지. 누가 이기는 법은 없어.",
						"english": "See? It's always like this. No one ever truly wins.",
						"japanese": "見ろ。いつもこうだ。誰も勝つことはない。",
						"chinese": "看。总是这样。没有人真正赢过。",
						"french": "Vois. C'est toujours comme ça. Personne ne gagne vraiment.",
						"spanish": "¿Ves? Siempre es así. Nadie gana de verdad.",
						"vietnamese": "Thấy chưa. Luôn luôn là thế này. Không ai thực sự thắng cả.",
						"thai": "ดูสิ เป็นแบบนี้เสมอ ไม่มีใครชนะหรอก",
						"hindi": "देखो। हमेशा ऐसा ही होता है। कोई नहीं जीतता।"
					},
					"type": "speech",
					"speaker": "ashur",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이게… 무슨 짓이야? 누가 이런 짓을…",
						"english": "What... is this? Who would do this...?",
						"japanese": "これが… 何の真似だ？ 誰がこんなことを…",
						"chinese": "这… 这是什么鬼？谁干的…",
						"french": "Qu'... est-ce que c'est ? Qui a fait ça...?",
						"spanish": "¿Qué... es esto? ¿Quién haría esto...?",
						"vietnamese": "Cái này… là trò gì vậy? Ai đã làm chuyện này…?",
						"thai": "นี่มัน... อะไรกัน? ใครเป็นคนทำ...",
						"hindi": "यह... क्या है? यह किसने किया...?"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "ashur",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "누군가 이 균형을 지키고 있지. 그래야만 하거든.",
						"english": "Someone is maintaining this balance. It has to be.",
						"japanese": "誰かがこの均衡を保っているんだ。そうであるべきだからな。",
						"chinese": "有人在维持着这种平衡。必须如此。",
						"french": "Quelqu'un maintient cet équilibre. Ça doit être ça.",
						"spanish": "Alguien está manteniendo este equilibrio. Tiene que ser así.",
						"vietnamese": "Ai đó đang duy trì sự cân bằng này. Nó phải là như vậy.",
						"thai": "มีใครบางคนกำลังรักษาสมดุลนี้ไว้ มันจำเป็นต้องเป็นแบบนั้น",
						"hindi": "कोई इस संतुलन को बनाए रख रहा है। ऐसा ही होना चाहिए।"
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
					"speaker": "ashur",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "ashur",
					"emotion": "sad",
					"content": {
						"korean": "아직도 그 평화 타령이야? 이제 질리지도 않나.",
						"english": "Still babbling about peace? Aren't you tired of it yet?",
						"japanese": "まだ平和の話ばかりか？ もううんざりしないのか？",
						"chinese": "还在念叨着和平？还没厌倦吗？",
						"french": "Tu parles encore de paix ? Tu ne t'en lasses jamais ?",
						"spanish": "¿Sigues con lo de la paz? ¿No te cansas ya?",
						"vietnamese": "Vẫn còn lải nhải về hòa bình à? Vẫn chưa chán sao?",
						"thai": "ยังคงพูดเรื่องสันติภาพอีกเหรอ? ยังไม่เบื่ออีกหรือไง",
						"hindi": "अभी भी उस शांति की बात कर रहे हो? क्या तुम अभी तक इससे थके नहीं हो?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "하지만… 분명 뭔가 이상해. 마치 누가 조종하는 것 같아.",
						"english": "But... something's definitely off. It's like someone's pulling the strings.",
						"japanese": "でも…何かおかしい。まるで誰かに操られているみたいだ。",
						"chinese": "但是…肯定有什么不对劲。就好像有人在操纵一样。",
						"french": "Mais... il y a clairement quelque chose d'étrange. C'est comme si quelqu'un contrôlait tout.",
						"spanish": "Pero... algo está definitivamente mal. Es como si alguien estuviera controlando esto.",
						"vietnamese": "Nhưng... rõ ràng có gì đó lạ. Cứ như ai đó đang điều khiển vậy.",
						"thai": "แต่... มันต้องมีอะไรแปลก ๆ แน่ เหมือนมีคนบงการอยู่",
						"hindi": "लेकिन... कुछ तो अजीब है। जैसे कोई इसे नियंत्रित कर रहा हो।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "ashur",
					"emotion": "base",
					"content": {
						"korean": "조종? 그래, 어쩌면 그럴지도 모르지.",
						"english": "Controlled? Yes, maybe so.",
						"japanese": "操られている？ああ、そうなのかもしれない。",
						"chinese": "操纵？是的，也许是这样。",
						"french": "Contrôlé ? Oui, c'est possible.",
						"spanish": "¿Controlado? Sí, tal vez.",
						"vietnamese": "Điều khiển? Phải, có lẽ là vậy.",
						"thai": "บงการ? ใช่, อาจจะเป็นอย่างนั้นก็ได้",
						"hindi": "नियंत्रित? हाँ, शायद ऐसा ही हो।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "늘 이 순간에 모든 게 원점으로 돌아가. 마치 정해진 것처럼.",
						"english": "At this very moment, everything always returns to square one. As if it's predetermined.",
						"japanese": "いつもこの瞬間に、全てが振り出しに戻る。まるで決められているかのように。",
						"chinese": "总是在这一刻，一切都回到原点。就好像命中注定一样。",
						"french": "À cet instant précis, tout revient toujours au point de départ. Comme si c'était prédestiné.",
						"spanish": "Siempre en este momento, todo vuelve al punto de partida. Como si estuviera predestinado.",
						"vietnamese": "Cứ đến khoảnh khắc này, mọi thứ lại trở về vạch xuất phát. Cứ như đã được định sẵn vậy.",
						"thai": "ทุกครั้ง ณ เวลานี้ ทุกอย่างกลับไปที่จุดเริ่มต้น ราวกับถูกกำหนดไว้แล้ว",
						"hindi": "हर बार इस पल में, सब कुछ शून्य पर लौट आता है। जैसे यह पहले से तय हो।"
					},
					"speaker": "ashur",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그게 왜지? 대체 누가 그런 짓을…",
						"english": "Why is that? Who would do such a thing...?",
						"japanese": "なぜだ？一体誰がそんなことを…",
						"chinese": "为什么会这样？到底是谁做的…",
						"french": "Pourquoi ? Qui ferait une chose pareille… ?",
						"spanish": "¿Por qué? ¿Quién haría algo así…?",
						"vietnamese": "Tại sao lại thế? Rốt cuộc ai lại làm chuyện đó…",
						"thai": "ทำไมล่ะ? ใครกันที่ทำแบบนั้น…?",
						"hindi": "यह क्यों? आखिर कौन ऐसा करेगा…?"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "ashur",
					"emotion": "base",
					"content": {
						"korean": "…정확히는 몰라. 하지만 그 균형은 절대 깨지지 않아. 영원히.",
						"english": "...I don't know exactly. But that balance can never be broken. Never.",
						"japanese": "…正確には分からない。だが、その均衡は決して破られない。永遠に。",
						"chinese": "…我不知道确切原因。但那种平衡永远不会被打破。永远不会。",
						"french": "Je ne sais pas exactement. Mais cet équilibre ne sera jamais brisé. Jamais.",
						"spanish": "No lo sé exactamente. Pero ese equilibrio nunca se romperá. Nunca.",
						"vietnamese": "...Tôi không biết chính xác. Nhưng sự cân bằng đó sẽ không bao giờ bị phá vỡ. Mãi mãi.",
						"thai": "...ฉันไม่รู้แน่ชัด แต่สมดุลนั้นไม่มีวันถูกทำลาย ตลอดไป",
						"hindi": "...मुझे ठीक से नहीं पता। लेकिन वह संतुलन कभी नहीं टूटता। हमेशा।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "사막 깊숙한 곳, 약탈자들의 은신처가 모습을 드러냈다. 그들의 우두머리가 기다리고 있었다.",
						"english": "Deep within the desert, the marauders' hideout was revealed. Their leader awaited.",
						"japanese": "砂漠の奥深く、略奪者の隠れ家が姿を現した。その頭領が待ち構えていた。",
						"chinese": "在沙漠深处，掠夺者的藏身之处显露出来。他们的首领正在等待。",
						"french": "Au plus profond du désert, le repaire des maraudeurs fut révélé. Leur chef les attendait.",
						"spanish": "En lo más profundo del desierto, el escondite de los merodeadores se reveló. Su líder esperaba.",
						"vietnamese": "Sâu thẳm trong sa mạc, nơi ẩn náu của bọn cướp đã lộ diện. Thủ lĩnh của chúng đang đợi.",
						"thai": "ลึกเข้าไปในทะเลทราย รังของพวกปล้นสะดมปรากฏขึ้น หัวหน้าของพวกมันกำลังรออยู่",
						"hindi": "रेगिस्तान की गहराई में, लुटेरों का ठिकाना सामने आया। उनका सरदार इंतजार कर रहा था।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						5,
						4
					],
					"type": "direction"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "어리석은 자들. 이 사막의 법칙을 거스를 생각인가?",
						"english": "Fools. Do you truly intend to defy the laws of this desert?",
						"japanese": "愚か者め。この砂漠の掟に逆らうつもりか？",
						"chinese": "愚蠢的家伙。你们真想违抗这片沙漠的法则吗？",
						"french": "Imbéciles. Comptez-vous vraiment défier les lois de ce désert ?",
						"spanish": "Necios. ¿De verdad pretenden desafiar las leyes de este desierto?",
						"vietnamese": "Bọn ngu xuẩn. Các ngươi định chống lại luật lệ của sa mạc này sao?",
						"thai": "พวกคนโง่เง่า คิดจะฝ่าฝืนกฎของทะเลทรายนี้งั้นหรือ?",
						"hindi": "मूर्खों। क्या तुम वाकई इस रेगिस्तान के नियमों की अवहेलना करने की सोच रहे हो?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "네놈들이야말로 파괴를 멈춰야 해!",
						"english": "It's you who needs to stop the destruction!",
						"japanese": "お前たちこそ破壊を止めろ！",
						"chinese": "是你们才应该停止破坏！",
						"french": "C'est vous qui devez arrêter la destruction !",
						"spanish": "¡Son ustedes quienes deben detener la destrucción!",
						"vietnamese": "Chính các ngươi mới là kẻ phải dừng sự phá hoại lại!",
						"thai": "พวกแกต่างหากที่ต้องหยุดการทำลายล้าง!",
						"hindi": "तुम्हें ही विनाश रोकना चाहिए!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ashur",
					"spot": [
						2,
						2
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "싸워봤자 소용없어. 어차피 똑같아질 거야.",
						"english": "Fighting is useless. It'll all end up the same anyway.",
						"japanese": "戦っても無駄だ。どうせ同じ結果になる。",
						"chinese": "战斗也毫无意义。反正结果都会一样。",
						"french": "Se battre est inutile. Tout finira pareil de toute façon.",
						"spanish": "Luchar es inútil. Todo terminará igual de todos modos.",
						"vietnamese": "Đánh nhau cũng vô ích thôi. Đằng nào mọi chuyện cũng sẽ như cũ.",
						"thai": "สู้ไปก็ไร้ประโยชน์ ยังไงก็จบแบบเดิมอยู่ดี",
						"hindi": "लड़ना बेकार है। वैसे भी सब कुछ एक जैसा ही होगा।"
					},
					"type": "speech",
					"speaker": "ashur",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아슈르, 이번엔 달라!",
						"english": "Ashur, this time it's different!",
						"japanese": "アシュル、今回は違う！",
						"chinese": "亚瑟，这次不一样！",
						"french": "Achour, cette fois, c'est différent !",
						"spanish": "Ashur, ¡esta vez es diferente!",
						"vietnamese": "Ashur, lần này sẽ khác!",
						"thai": "อาชูร์, ครั้งนี้ไม่เหมือนเดิม!",
						"hindi": "अशूर, इस बार अलग है!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "하찮은 희망은 곧 절망으로 변한다.",
						"english": "Flimsy hope soon turns to despair.",
						"japanese": "取るに足らない希望はやがて絶望へと変わる。",
						"chinese": "渺小的希望很快就会变成绝望。",
						"french": "Un espoir insignifiant se transforme vite en désespoir.",
						"spanish": "Una esperanza insignificante pronto se convierte en desesperación.",
						"vietnamese": "Hy vọng nhỏ nhoi sẽ sớm biến thành tuyệt vọng.",
						"thai": "ความหวังอันริบหรี่จะกลายเป็นความสิ้นหวังในไม่ช้า",
						"hindi": "तुच्छ आशा जल्द ही निराशा में बदल जाती है।"
					}
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "크아악…! 하지만… 너희의 승리는…",
						"english": "Aargh...! But... your victory...",
						"japanese": "くあああっ…！だが…お前たちの勝利は…",
						"chinese": "啊啊啊…！但是…你们的胜利…",
						"french": "Aargh...! Mais... votre victoire...",
						"spanish": "¡Aaagh...! Pero... vuestra victoria...",
						"vietnamese": "Grừ... nhưng... chiến thắng của các ngươi...",
						"thai": "อ๊าก...! แต่... ชัยชนะของพวกแก...",
						"hindi": "आह...! लेकिन... तुम्हारी जीत..."
					}
				},
				{
					"content": {
						"korean": "{random_boss}가 쓰러지는 순간, 또다시 사막 전체를 뒤흔드는 거대한 기운이 느껴졌다.",
						"english": "The moment {random_boss} fell, a colossal energy, once again shaking the entire desert, was felt.",
						"japanese": "{random_boss}が倒れた瞬間、再び砂漠全体を揺るがす巨大な気配が感じられた。",
						"chinese": "{random_boss}倒下的瞬间，一股再次震撼整个沙漠的巨大能量被感受到了。",
						"french": "Au moment où {random_boss} est tombé, une énergie colossale, secouant à nouveau tout le désert, s'est fait sentir.",
						"spanish": "En el momento en que {random_boss} cayó, una energía colosal, que una vez más sacudía todo el desierto, se sintió.",
						"vietnamese": "Khoảnh khắc {random_boss} ngã xuống, một luồng năng lượng khổng lồ, một lần nữa làm rung chuyển toàn bộ sa mạc, đã được cảm nhận.",
						"thai": "ในวินาทีที่ {random_boss} ล้มลง พลังงานมหึมาที่สั่นสะเทือนทะเลทรายทั้งผืนอีกครั้งได้ถูกสัมผัส",
						"hindi": "{random_boss} के गिरते ही, एक विशाल ऊर्जा, जो एक बार फिर पूरे रेगिस्तान को हिला रही थी, महसूस हुई।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이건… 저번 그 힘!",
						"english": "This is... that power from last time!",
						"japanese": "これは…前回のあの力！",
						"chinese": "这是…上次的那股力量！",
						"french": "C'est... cette puissance de la dernière fois !",
						"spanish": "¡Esta es... esa fuerza de la última vez!",
						"vietnamese": "Đây là... sức mạnh đó từ lần trước!",
						"thai": "นี่มัน... พลังนั้นจากครั้งที่แล้ว!",
						"hindi": "यह... पिछली बार की वह शक्ति है!"
					}
				},
				{
					"speaker": "ashur",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						2
					]
				},
				{
					"speaker": "ashur",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "봐. 내가 말했지. 균형은 절대 깨지지 않아.",
						"english": "See? I told you. The balance is never broken.",
						"japanese": "見ろ。私が言っただろう。均衡は決して崩れない。",
						"chinese": "看。我说过吧。平衡永远不会被打破。",
						"french": "Tu vois ? Je te l'ai dit. L'équilibre n'est jamais rompu.",
						"spanish": "Mira. Te lo dije. El equilibrio nunca se rompe.",
						"vietnamese": "Thấy chưa? Ta đã nói rồi. Cán cân sẽ không bao giờ bị phá vỡ.",
						"thai": "เห็นไหม? ฉันบอกแล้วไง ความสมดุลไม่มีทางถูกทำลาย",
						"hindi": "देखो? मैंने तुमसे कहा था। संतुलन कभी नहीं टूटता।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이번엔 누가… 그 힘을 쓰는 거지?",
						"english": "This time, who... is wielding that power?",
						"japanese": "今度は誰が…その力を使うのか？",
						"chinese": "这次又是谁…在使用那股力量？",
						"french": "Cette fois, qui... utilise ce pouvoir ?",
						"spanish": "Esta vez, ¿quién... está usando ese poder?",
						"vietnamese": "Lần này, ai... đang sử dụng sức mạnh đó?",
						"thai": "คราวนี้ใครกัน... ที่กำลังใช้พลังนั้น?",
						"hindi": "इस बार कौन... उस शक्ति का प्रयोग कर रहा है?"
					},
					"speaker": "ashur",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "승리했지만, 사막의 갈등은 또다시 원점으로 돌아왔다. 그 뒤에 카디르의 그림자가 느껴졌다.",
						"english": "Victory achieved, yet the desert conflict resets. Kadir's shadow looms.",
						"japanese": "勝利したが、砂漠の争いは再び振り出しに戻った。その背後にカディールの影を感じた。",
						"chinese": "虽然胜利，但沙漠的冲突再次回到了原点。感受到了卡迪尔的影子在其身后。",
						"french": "Victoire, mais le conflit désertique est de nouveau au point de départ. L'ombre de Kadir plane.",
						"spanish": "Victoria, pero el conflicto del desierto ha vuelto al punto de partida. La sombra de Kadir se siente detrás.",
						"vietnamese": "Chiến thắng, nhưng xung đột sa mạc lại trở về điểm ban đầu. Cảm nhận bóng dáng Kadir phía sau.",
						"thai": "แม้ชนะ แต่ความขัดแย้งในทะเลทรายก็กลับมาที่จุดเริ่มต้นอีกครั้ง สัมผัสได้ถึงเงาของคาดีร์ที่อยู่เบื้องหลัง",
						"hindi": "जीत मिली, लेकिन रेगिस्तान का संघर्ष फिर से वहीं आ गया। उसके पीछे कादिर की छाया महसूस हुई।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "약탈자들의 우두머리, {random_boss}와의 마지막 결전이 시작됐다.",
						"english": "The final showdown with {random_boss}, leader of the marauders, has begun.",
						"japanese": "略奪者の首領、{random_boss}との最後の決戦が始まった。",
						"chinese": "与掠夺者首领{random_boss}的最终决战开始了。",
						"french": "L'affrontement final avec {random_boss}, le chef des maraudeurs, a commencé.",
						"spanish": "El enfrentamiento final con {random_boss}, el líder de los merodeadores, ha comenzado.",
						"vietnamese": "Trận chiến cuối cùng với {random_boss}, thủ lĩnh của những kẻ cướp bóc, đã bắt đầu.",
						"thai": "การเผชิญหน้าครั้งสุดท้ายกับ {random_boss} ผู้นำของพวกปล้นสะดมได้เริ่มต้นขึ้นแล้ว",
						"hindi": "लुटेरों के नेता, {random_boss} के साथ अंतिम मुकाबला शुरू हो गया है।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "이 싸움을 끝내겠어!",
						"english": "I'll end this fight!",
						"japanese": "この戦いを終わらせる！",
						"chinese": "我会结束这场战斗！",
						"french": "Je vais mettre fin à ce combat !",
						"spanish": "¡Terminaré esta pelea!",
						"vietnamese": "Ta sẽ kết thúc trận chiến này!",
						"thai": "ฉันจะยุติการต่อสู้ครั้งนี้!",
						"hindi": "मैं इस लड़ाई को खत्म कर दूंगा!"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "절대 끝나지 않는다고 말했을 텐데?",
						"english": "Didn't I tell you it would never end?",
						"japanese": "終わらないと言ったはずだ？",
						"chinese": "我不是说过它永远不会结束吗？",
						"french": "Ne t'ai-je pas dit que ça ne finirait jamais ?",
						"spanish": "¿No te dije que nunca terminaría?",
						"vietnamese": "Ta đã bảo ngươi rồi mà, nó sẽ không bao giờ kết thúc đâu?",
						"thai": "ฉันบอกแล้วไม่ใช่เหรอว่ามันจะไม่มีวันจบ?",
						"hindi": "क्या मैंने तुमसे नहीं कहा था कि यह कभी खत्म नहीं होगा?"
					}
				},
				{
					"speaker": "ashur",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "ashur",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…이번엔 다를 줄 알았지. 나도 바보였군.",
						"english": "...I thought this time would be different. I was a fool too.",
						"japanese": "…今回は違うと思った。私も愚かだったな。",
						"chinese": "…我以为这次会不同。我也真是个傻瓜。",
						"french": "...Je pensais que cette fois serait différente. J'ai été stupide moi aussi.",
						"spanish": "...Creí que esta vez sería diferente. Yo también fui un tonto.",
						"vietnamese": "...Tôi cứ nghĩ lần này sẽ khác. Tôi cũng thật ngu ngốc.",
						"thai": "...ฉันคิดว่าครั้งนี้จะแตกต่าง ฉันก็โง่เหมือนกัน",
						"hindi": "...मुझे लगा था कि इस बार अलग होगा। मैं भी मूर्ख था।"
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "사막의 모래폭풍이 모든 것을 집어삼켰다.",
						"english": "The desert sandstorm consumed all.",
						"japanese": "砂漠の砂嵐がすべてを飲み込んだ。",
						"chinese": "沙漠的沙尘暴吞噬了一切。",
						"french": "La tempête de sable du désert a tout englouti.",
						"spanish": "La tormenta de arena del desierto lo devoró todo.",
						"vietnamese": "Cơn bão cát sa mạc đã nuốt chửng mọi thứ.",
						"thai": "พายุทรายแห่งทะเลทรายกลืนกินทุกสิ่ง",
						"hindi": "रेगिस्तान के रेत के तूफान ने सब कुछ निगल लिया।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "하하하! 이 사막의 균형은 영원할 것이다!",
						"english": "Hahaha! The balance of this desert shall endure forever!",
						"japanese": "ハハハ！この砂漠の均衡は永遠だ！",
						"chinese": "哈哈哈！这片沙漠的平衡将是永恒的！",
						"french": "Hahaha ! L'équilibre de ce désert sera éternel !",
						"spanish": "¡Jajaja! ¡El equilibrio de este desierto será eterno!",
						"vietnamese": "Hahaha! Sự cân bằng của sa mạc này sẽ vĩnh cửu!",
						"thai": "ฮ่าฮ่าฮ่า! สมดุลของทะเลทรายนี้จะคงอยู่ตลอดไป!",
						"hindi": "हाहाहा! इस रेगिस्तान का संतुलन शाश्वत रहेगा!"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "…다시 일어설 거야. 평화는 반드시 온다!",
						"english": "...I will rise again. Peace will surely come!",
						"japanese": "…また立ち上がる。平和は必ず訪れる！",
						"chinese": "……我会再次崛起。和平一定会到来！",
						"french": "…Je me relèverai. La paix viendra !",
						"spanish": "…Me levantaré de nuevo. ¡La paz llegará!",
						"vietnamese": "...Tôi sẽ lại đứng dậy. Hòa bình chắc chắn sẽ đến!",
						"thai": "...ฉันจะลุกขึ้นอีกครั้ง สันติภาพจะมาถึงอย่างแน่นอน!",
						"hindi": "...मैं फिर उठूंगा। शांति निश्चित रूप से आएगी!"
					},
					"type": "speech"
				}
			],
			"id": 15
		}
	]
} as const;
