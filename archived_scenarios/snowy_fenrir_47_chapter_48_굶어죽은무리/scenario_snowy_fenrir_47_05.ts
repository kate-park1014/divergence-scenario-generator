export const scenario_snowy_fenrir_47_05 = {
	"scenario_id": "snowy_fenrir_47_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "snowy",
	"actors": {
		"inka": {
			"id": "mon_583e945a-1e2f-428b-a251-b428f25b4052",
			"name": {
				"korean": "인카",
				"english": "Inka",
				"japanese": "インカ",
				"chinese": "因卡",
				"french": "Inka",
				"spanish": "Inka",
				"vietnamese": "Inka",
				"thai": "อินคา",
				"hindi": "इंंका"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/97f4545b-2e8a-4688-3e4e-b34bb246dd00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f27763ba-2358-4fd3-c813-0f0b59dcac00/public"
		}
	},
	"boss": {
		"pool_id": "pool_112"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "거대한 늑대의 몸. 하지만 그 움직임은 어딘가 부자연스러웠다. 수백 개의 작은 떨림이 하나로 뭉친 듯.",
						"english": "The colossal body of a wolf. Yet its movements were somehow unnatural. As if hundreds of small tremors had merged into one.",
						"japanese": "巨大な狼の体。しかしその動きはどこか不自然だった。数百の小さな震えが一つにまとまったかのように。",
						"chinese": "巨狼的躯体。然而其动作却有些不自然。仿佛数百个微小的颤抖汇聚成一团。",
						"french": "Le corps colossal d'un loup. Pourtant ses mouvements étaient étrangement contre nature. Comme si des centaines de petits tremblements s'étaient fusionnés en un seul.",
						"spanish": "El cuerpo colosal de un lobo. Sin embargo, sus movimientos eran de alguna manera antinaturales. Como si cientos de pequeños temblores se hubieran fusionado en uno.",
						"vietnamese": "Thân thể khổng lồ của một con sói. Nhưng chuyển động của nó lại có vẻ không tự nhiên. Như thể hàng trăm rung động nhỏ đã hợp lại thành một.",
						"thai": "ร่างกายมหึมาของหมาป่า แต่การเคลื่อนไหวกลับดูผิดธรรมชาติ ราวกับว่าการสั่นสะเทือนเล็ก ๆ นับร้อยรวมกันเป็นหนึ่งเดียว",
						"hindi": "एक विशाल भेड़िये का शरीर। फिर भी उसकी हरकतें किसी तरह अप्राकृतिक थीं। मानो सैकड़ों छोटे कंपन एक में मिल गए हों।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이건… 뭔가 달라.",
						"english": "This… is different.",
						"japanese": "これは…何か違う。",
						"chinese": "这…不太一样。",
						"french": "C'est… différent.",
						"spanish": "Esto… es diferente.",
						"vietnamese": "Cái này… có gì đó khác.",
						"thai": "นี่มัน… แตกต่างออกไป",
						"hindi": "यह… कुछ अलग है।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "inka",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "inka",
					"emotion": "sad",
					"content": {
						"korean": "…느껴져. 이 안에, 수많은 생명들의 절규가.",
						"english": "…I feel it. The screams of countless lives, within.",
						"japanese": "…感じる。この中に、数えきれない命の絶叫が。",
						"chinese": "…我感觉到了。这里面，无数生命的哀嚎。",
						"french": "…Je le sens. Le cri d'innombrables vies, à l'intérieur.",
						"spanish": "…Lo siento. Los gritos de innumerables vidas, aquí dentro.",
						"vietnamese": "…Tôi cảm nhận được. Bên trong này, là tiếng gào thét của vô số sinh mạng.",
						"thai": "…ฉันรู้สึกได้ เสียงกรีดร้องของชีวิตนับไม่ถ้วน อยู่ในนี้",
						"hindi": "…मैं महसूस करता हूँ। इसके अंदर, अनगिनत जिंदगियों की चीखें।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "inka",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "inka",
					"emotion": "sad",
					"content": {
						"korean": "이 뼈들… 모두 같은 곳을 향해 뻗어 있었어.",
						"english": "These bones… all stretched towards the same place.",
						"japanese": "この骨々…すべて同じ場所へ向かって伸びていた。",
						"chinese": "这些骨头…都伸向同一个地方。",
						"french": "Ces os… tous tendus vers le même endroit.",
						"spanish": "Estos huesos… todos se extendían hacia el mismo lugar.",
						"vietnamese": "Những bộ xương này… tất cả đều hướng về cùng một nơi.",
						"thai": "กระดูกพวกนี้… ล้วนยื่นออกไปในทิศทางเดียวกัน",
						"hindi": "ये हड्डियाँ… सभी एक ही जगह की ओर फैली हुई थीं।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "마치, 마지막까지 무언가를 갈구했던 것처럼.",
						"english": "As if, until their last breath, they craved something.",
						"japanese": "まるで、最期まで何かを渇望していたかのように。",
						"chinese": "仿佛，直到最后一刻，都在渴望着什么。",
						"french": "Comme s'ils avaient désiré quelque chose jusqu'au bout.",
						"spanish": "Como si, hasta el final, hubieran anhelado algo.",
						"vietnamese": "Cứ như thể, cho đến tận cùng, chúng đã khao khát điều gì đó.",
						"thai": "ราวกับว่า จนนาทีสุดท้าย พวกเขายังคงโหยหาบางสิ่ง",
						"hindi": "मानो, आखिरी साँस तक, वे कुछ तरस रहे हों।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "응. 먹이… 살아남기 위한 절박한 허기.",
						"english": "Yes. Prey… a desperate hunger to survive.",
						"japanese": "ああ。獲物…生き残るための絶望的な飢え。",
						"chinese": "嗯。猎物…为了生存而绝望的饥饿。",
						"french": "Oui. De la proie… une faim désespérée de survivre.",
						"spanish": "Sí. Presa… un hambre desesperada por sobrevivir.",
						"vietnamese": "Đúng vậy. Mồi… một cơn đói khát tuyệt vọng để sống sót.",
						"thai": "ใช่ อาหาร… ความหิวโหยสุดขีดเพื่อเอาชีวิตรอด",
						"hindi": "हाँ। शिकार… जीवित रहने की एक हताश भूख।"
					},
					"speaker": "inka",
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "inka"
				},
				{
					"type": "speech",
					"speaker": "inka",
					"emotion": "sad",
					"content": {
						"korean": "하지만 여기엔… 먹이의 흔적이 없어.",
						"english": "But here… there's no trace of prey.",
						"japanese": "だがここには…獲物の痕跡がない。",
						"chinese": "但是这里…没有猎物的痕迹。",
						"french": "Mais ici… aucune trace de proie.",
						"spanish": "Pero aquí… no hay rastro de presa.",
						"vietnamese": "Nhưng ở đây… không có dấu vết của con mồi.",
						"thai": "แต่ที่นี่… ไม่มีร่องรอยของเหยื่อ",
						"hindi": "लेकिन यहाँ… शिकार का कोई निशान नहीं है।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "그럼… 아무것도 먹지 못하고 죽었다는 거야?",
						"english": "So… they died without eating anything?",
						"japanese": "なら…何も食べずに死んだということか？",
						"chinese": "那么…他们什么都没吃就死了吗？",
						"french": "Alors… ils sont morts sans rien manger ?",
						"spanish": "¿Entonces… murieron sin comer nada?",
						"vietnamese": "Vậy… chúng đã chết mà không ăn được gì sao?",
						"thai": "งั้น… พวกมันก็ตายโดยไม่ได้กินอะไรเลย?",
						"hindi": "तो… वे कुछ भी खाए बिना मर गए?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "inka",
					"emotion": "sad",
					"content": {
						"korean": "함께, 같은 자리에서… 허기에 스러진 무리.",
						"english": "Together, in the same spot… a pack withered by hunger.",
						"japanese": "共に、同じ場所で…飢えに倒れた群れ。",
						"chinese": "一起，在同一个地方…一群因饥饿而倒下的生物。",
						"french": "Ensemble, au même endroit… une meute anéantie par la faim.",
						"spanish": "Juntos, en el mismo lugar… una manada diezmada por el hambre.",
						"vietnamese": "Cùng nhau, tại cùng một chỗ… một đàn gục ngã vì đói khát.",
						"thai": "ร่วมกัน ณ ที่เดียวกัน… ฝูงที่ล้มตายเพราะความหิวโหย",
						"hindi": "एक साथ, एक ही जगह पर… भूख से मुरझाया हुआ एक झुंड।"
					}
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
					"action": "enter",
					"duration_ms": 500,
					"speaker": "inka"
				},
				{
					"type": "speech",
					"speaker": "inka",
					"emotion": "sad",
					"content": {
						"korean": "늑대의 몸에서 느껴지는 작은 떨림… 그건 한 마리의 것이 아니야.",
						"english": "A slight tremor felt in the wolf's body… it's not from just one.",
						"japanese": "狼の体から感じる微かな震え…それは一匹のものではない。",
						"chinese": "狼身上感受到的微小颤抖…那不是一只狼的。",
						"french": "Un léger frisson ressenti dans le corps du loup… ce n'est pas celui d'un seul.",
						"spanish": "Un ligero temblor sentido en el cuerpo del lobo… no es de uno solo.",
						"vietnamese": "Một rung động nhỏ cảm nhận được từ cơ thể sói… đó không phải của một con.",
						"thai": "การสั่นสะเทือนเล็กน้อยที่สัมผัสได้จากร่างของหมาป่า… ไม่ใช่แค่ตัวเดียว",
						"hindi": "भेड़िये के शरीर में महसूस होने वाली हल्की सी कंपकंपी… वह एक की नहीं है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "수백 개의 떨림… 무리 전체가 움직이는 거였어.",
						"english": "Hundreds of tremors… the entire pack was moving.",
						"japanese": "数百の震え…群れ全体が動いていたのだ。",
						"chinese": "数百次的颤抖…是整个狼群都在移动。",
						"french": "Des centaines de frissons… c'était toute la meute qui bougeait.",
						"spanish": "Cientos de temblores… toda la manada se estaba moviendo.",
						"vietnamese": "Hàng trăm rung động… cả đàn đang di chuyển.",
						"thai": "การสั่นสะเทือนนับร้อย… ฝูงทั้งหมดกำลังเคลื่อนไหว",
						"hindi": "सैकड़ों कंपकंपी… पूरा झुंड हिल रहा था।"
					}
				},
				{
					"speaker": "inka",
					"emotion": "sad",
					"content": {
						"korean": "맞아. 살아남기 위해… 하나가 된 굶주림.",
						"english": "Indeed. A hunger united... to survive.",
						"japanese": "そうだ。生き残るために…一つになった飢え。",
						"chinese": "没错。为了生存…合为一体的饥饿。",
						"french": "En effet. Une faim unie... pour survivre.",
						"spanish": "Exacto. Un hambre unida... para sobrevivir.",
						"vietnamese": "Đúng vậy. Một sự đói khát hợp nhất... để sinh tồn.",
						"thai": "ใช่แล้ว. ความหิวโหยที่รวมเป็นหนึ่ง... เพื่อความอยู่รอด.",
						"hindi": "सही है। जीवित रहने के लिए... एक हुई भूख।"
					},
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "마침내 마주한 종말의 늑대. 그 몸은 수백 마리 짐승의 뼈로 들썩였다.",
						"english": "At last, the Wolf of Apocalypse. Its body writhed with the bones of hundreds of beasts.",
						"japanese": "ついに相対した終末の狼。その体は数百もの獣の骨で蠢いていた。",
						"chinese": "终于，末日之狼现身。其身躯由数百只野兽的骨骸堆叠蠕动而成。",
						"french": "Enfin, le Loup de l'Apocalypse. Son corps grouillait des os de centaines de bêtes.",
						"spanish": "Finalmente, el Lobo del Apocalipsis. Su cuerpo se retorcía con los huesos de cientos de bestias.",
						"vietnamese": "Cuối cùng, Sói Khải Huyền đã hiện diện. Thân thể nó cuộn trào với xương của hàng trăm quái thú.",
						"thai": "ในที่สุด, หมาป่าแห่งวันสิ้นโลกก็ปรากฏกาย ร่างของมันกระเพื่อมด้วยกระดูกของสัตว์ร้ายนับร้อย.",
						"hindi": "आखिरकार, सर्वनाश का भेड़िया। उसका शरीर सैकड़ों जानवरों की हड्डियों से छटपटा रहा था।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…우리는 함께 굶었다.",
						"english": "...We starved together.",
						"japanese": "…私たちは共に飢えた。",
						"chinese": "…我们一同饥饿着。",
						"french": "...Nous avons souffert la faim ensemble.",
						"spanish": "...Sufrimos hambre juntos.",
						"vietnamese": "...Chúng ta đã đói cùng nhau.",
						"thai": "...เราอดอยากมาด้วยกัน.",
						"hindi": "...हम सब एक साथ भूखे थे।"
					},
					"speaker": "boss",
					"emotion": "angry"
				},
				{
					"speaker": "boss",
					"emotion": "angry",
					"content": {
						"korean": "그 허기가, 하나로 뭉쳤다…!",
						"english": "That hunger, it converged into one...!",
						"japanese": "その飢えが、一つにまとまった…！",
						"chinese": "那份饥饿，凝结成了一体…！",
						"french": "Cette faim, elle s'est unie... !",
						"spanish": "Esa hambre, ¡se unió en una sola...!",
						"vietnamese": "Sự đói khát đó, đã hợp nhất thành một...!",
						"thai": "ความหิวโหยนั้น, รวมเป็นหนึ่ง...!",
						"hindi": "वह भूख, एक में समा गई...!"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "이건 마수가 아니야… 굶어 죽은 무리의 응결이었어.",
						"english": "This isn't a demon beast... It was the crystallization of a starved horde.",
						"japanese": "これは魔獣じゃない…餓死した群れの凝結だった。",
						"chinese": "这不是魔兽…而是饿死的群体的凝结。",
						"french": "Ce n'est pas une bête démoniaque... C'était la cristallisation d'une horde affamée.",
						"spanish": "Esto no es una bestia demoníaca... Fue la cristalización de una horda hambrienta.",
						"vietnamese": "Đây không phải là một con quái thú... Nó là sự kết tinh của một bầy đàn đã chết đói.",
						"thai": "นี่ไม่ใช่สัตว์อสูร... มันคือการรวมตัวของฝูงชนที่อดอยากจนตาย.",
						"hindi": "यह कोई दानव नहीं है... यह भूखे झुंड का एक संघनन था।"
					},
					"type": "speech"
				},
				{
					"speaker": "inka",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "inka",
					"emotion": "sad",
					"content": {
						"korean": "…이 고통을 끝내줄게. 편히 잠들어.",
						"english": "...I will end this suffering. Rest in peace.",
						"japanese": "…この苦痛を終わらせてやる。安らかに眠れ。",
						"chinese": "…我将终结这份痛苦。安息吧。",
						"french": "...Je mettrai fin à cette souffrance. Repose en paix.",
						"spanish": "...Terminaré con este sufrimiento. Descansa en paz.",
						"vietnamese": "...Ta sẽ chấm dứt nỗi đau này. Yên nghỉ đi.",
						"thai": "...ฉันจะยุติความเจ็บปวดนี้ ให้เจ้าหลับสบายเถิด.",
						"hindi": "...मैं इस पीड़ा का अंत करूँगा। शांति से सो जाओ।"
					},
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "…결국, 또다시… 홀로….",
						"english": "...In the end, once again... alone...",
						"japanese": "…結局、またしても…独り…。",
						"chinese": "…最终，又是…独自一人…",
						"french": "...Au final, encore une fois... seul...",
						"spanish": "...Al final, una vez más... solo...",
						"vietnamese": "...Cuối cùng, lại một lần nữa... cô độc...",
						"thai": "...สุดท้าย, อีกครั้ง... เพียงลำพัง...",
						"hindi": "...अंततः, एक बार फिर... अकेला..."
					},
					"speaker": "boss",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "이건… 복수였을까, 구원이었을까.",
						"english": "Was this... vengeance, or salvation?",
						"japanese": "これは…復讐だったのか、救済だったのか。",
						"chinese": "这究竟是…复仇，还是救赎？",
						"french": "Était-ce... vengeance ou salut ?",
						"spanish": "¿Fue esto... venganza o salvación?",
						"vietnamese": "Đây là... sự báo thù, hay sự cứu rỗi?",
						"thai": "นี่คือ... การแก้แค้น, หรือความรอดพ้นกันแน่.",
						"hindi": "यह... बदला था, या मोक्ष?"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "inka",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이젠… 더는 굶주리지 않아도 돼.",
						"english": "Now... you don't have to starve anymore.",
						"japanese": "もう…これ以上飢えることはない。",
						"chinese": "现在…你无需再忍受饥饿了。",
						"french": "Maintenant... tu n'auras plus à souffrir la faim.",
						"spanish": "Ahora... ya no tienes que pasar hambre.",
						"vietnamese": "Bây giờ... ngươi không còn phải đói khát nữa.",
						"thai": "ตอนนี้... เจ้าไม่ต้องอดอยากอีกต่อไปแล้ว.",
						"hindi": "अब... तुम्हें और भूखा नहीं रहना पड़ेगा।"
					},
					"speaker": "inka",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 허기는 잠들었다. 하지만 그 비극은, 모두의 가슴에 얼룩으로 남았다.",
						"english": "The immense hunger slept. But its tragedy remained a stain on everyone's hearts.",
						"japanese": "巨大な飢えは眠りについた。だがその悲劇は、皆の心に染みとして残った。",
						"chinese": "巨大的饥饿沉睡了。但那份悲剧，却在每个人的心中留下了污点。",
						"french": "L'immense faim s'est endormie. Mais sa tragédie est restée une tache dans le cœur de tous.",
						"spanish": "El hambre inmensa se durmió. Pero su tragedia permaneció como una mancha en el corazón de todos.",
						"vietnamese": "Sự đói khát khổng lồ đã ngủ yên. Nhưng bi kịch đó, vẫn còn là một vết nhơ trong lòng mọi người.",
						"thai": "ความหิวโหยอันใหญ่หลวงได้หลับใหลลงแล้ว แต่โศกนาฏกรรมนั้นยังคงเป็นรอยด่างในใจของทุกคน.",
						"hindi": "विशाल भूख सो गई। लेकिन उसकी त्रासदी सभी के दिलों में एक दाग़ बनकर रह गई।"
					},
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "boss",
					"emotion": "angry",
					"content": {
						"korean": "너희 또한… 언젠가… 굶주릴 것이다….",
						"english": "You too... someday... will hunger.",
						"japanese": "お前たちも…いつか…飢えるだろう…。",
						"chinese": "你们也…总有一天…会饥饿的…。",
						"french": "Vous aussi… un jour… aurez faim…",
						"spanish": "Vosotros también… algún día… tendréis hambre…",
						"vietnamese": "Các ngươi cũng… một ngày nào đó… sẽ đói thôi…",
						"thai": "พวกเจ้าก็จะ... สักวันหนึ่ง... หิวโหย...",
						"hindi": "तुम भी... किसी दिन... भूखे रहोगे..."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "아직… 끝나지 않았어. 우리는 포기하지 않아.",
						"english": "It's not over yet... We won't give up.",
						"japanese": "まだ…終わってない。我々は諦めない。",
						"chinese": "还没…结束。我们不会放弃。",
						"french": "Ce n'est pas encore… fini. Nous n'abandonnerons pas.",
						"spanish": "Aún no… ha terminado. No nos rendiremos.",
						"vietnamese": "Chưa… kết thúc đâu. Chúng ta sẽ không bỏ cuộc.",
						"thai": "ยัง... ไม่จบ. เราไม่ยอมแพ้.",
						"hindi": "अभी... खत्म नहीं हुआ है। हम हार नहीं मानेंगे।"
					}
				},
				{
					"speaker": "inka",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "inka",
					"emotion": "sad",
					"content": {
						"korean": "이들의 고통이… 반복되지 않도록. 다시 일어서야 해.",
						"english": "So their suffering... won't be repeated. We must rise again.",
						"japanese": "彼らの苦しみが…繰り返されないように。再び立ち上がらねば。",
						"chinese": "为了他们的痛苦…不再重演。我们必须再次站起来。",
						"french": "Pour que leur souffrance… ne se répète pas. Nous devons nous relever.",
						"spanish": "Para que su sufrimiento… no se repita. Debemos levantarnos de nuevo.",
						"vietnamese": "Để nỗi đau của họ… không lặp lại. Chúng ta phải đứng dậy lần nữa.",
						"thai": "เพื่อไม่ให้ความทุกข์ทรมานของพวกเขา... ซ้ำรอยอีก. เราต้องลุกขึ้นยืนใหม่.",
						"hindi": "ताकि इनका दर्द... दोबारा न दोहराया जाए। हमें फिर से खड़ा होना होगा।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"수많은 굶주림이 하나가 되어, 거대한 그림자를 만들었다.",
			"혹한이 삼킨 생명들의 비명은, 이제 침묵으로 응결되어 있었다.",
			"마침내 마주한, 그 존재의 진실.",
			"그것은 신화가 아니었다. 오직, 처절한 허기의 기록일 뿐."
		],
		"english": [
			"Countless hungers converged, forming a colossal shadow.",
			"The screams of lives swallowed by the bitter cold had now congealed into silence.",
			"At last, the truth of its existence stood revealed.",
			"It was no myth. Only a harrowing record of desperate hunger."
		],
		"japanese": [
			"無数の飢えが一つとなり、巨大な影を作り出した。",
			"酷寒に飲み込まれた命の悲鳴は、今や沈黙へと凝結していた。",
			"ついに、その存在の真実が明かされた。",
			"それは神話ではなかった。ただ、凄絶な飢餓の記録に過ぎない。"
		],
		"chinese": [
			"无数的饥饿汇聚一处，形成了一道巨大的阴影。",
			"被严寒吞噬的生命尖叫，如今已凝结成一片沉寂。",
			"最终，那存在之真实显现。",
			"这并非神话。只是一段残酷饥饿的记录。"
		],
		"french": [
			"D'innombrables faims fusionnèrent, créant une ombre colossale.",
			"Les cris des vies englouties par le froid mordant s'étaient désormais figés en silence.",
			"Enfin, la vérité de son existence se révéla.",
			"Ce n'était pas un mythe. Seulement le récit déchirant d'une faim désespérée."
		],
		"spanish": [
			"Incontables hambrunas convergieron, formando una sombra colosal.",
			"Los gritos de las vidas devoradas por el frío amargo se habían coagulado en silencio.",
			"Finalmente, la verdad de su existencia revelada.",
			"No era un mito. Solo un desgarrador registro de hambre desesperada."
		],
		"vietnamese": [
			"Vô số cơn đói khát hợp lại, tạo nên một bóng đen khổng lồ.",
			"Tiếng thét của những sinh linh bị giá rét nuốt chửng, giờ đã đông đặc thành sự im lặng.",
			"Cuối cùng, sự thật về sự tồn tại ấy đã lộ diện.",
			"Đó không phải là thần thoại. Chỉ là một ghi chép thảm khốc về sự đói khát tột cùng."
		],
		"thai": [
			"ความหิวโหยนับไม่ถ้วนรวมกัน ก่อเกิดเป็นเงาอันมหึมา",
			"เสียงกรีดร้องของชีวิตที่ถูกความหนาวเหน็บกลืนกิน บัดนี้กลายเป็นความเงียบงัน",
			"ในที่สุด ความจริงของการมีอยู่ก็ปรากฏขึ้น",
			"มันไม่ใช่ตำนาน เป็นเพียงบันทึกอันโหดร้ายของความหิวโหยสิ้นหวัง"
		],
		"hindi": [
			"अनगिनत भूखें एक हुईं, एक विशाल छाया का निर्माण किया।",
			"कड़वी ठंड से निगले गए जीवों की चीखें, अब चुप्पी में जम गई थीं。",
			"अंततः, उसके अस्तित्व का सत्य सामने आ गया।",
			"यह कोई मिथक नहीं था। केवल हताश भूख का एक मार्मिक रिकॉर्ड।"
		]
	},
	"epilogue": {
		"korean": [
			"모든 허기가 잦아들었다. 혹독한 겨울이 끝난 것처럼.",
			"얼어붙은 숲은 침묵했다. 그 침묵은, 수많은 절규를 품고 있었다.",
			"거대한 비극은 끝났지만, 남겨진 자들의 마음속엔 새로운 상흔이 새겨졌다.",
			"이 숲은, 이제 무엇을 기억하게 될까.",
			"그리고 그들은, 이 모든 진실 속에서 무엇을 얻고, 무엇을 잃었을까."
		],
		"english": [
			"All hunger subsided. As if the harsh winter had ended.",
			"The frozen forest fell silent. A silence that held countless screams.",
			"The grand tragedy had ended, but new scars were etched into the hearts of those left behind.",
			"What will this forest remember now?",
			"And amidst all this truth, what did they gain, and what did they lose?"
		],
		"japanese": [
			"すべての飢えが静まった。まるで厳しい冬が終わったかのように。",
			"凍てついた森は沈黙した。その沈黙は、無数の絶叫を宿していた。",
			"巨大な悲劇は終わったが、残された者たちの心には新たな傷痕が刻まれた。",
			"この森は、今、何を記憶するのだろうか。",
			"そして彼らは、このすべての真実の中で何をD獲得し、何を失ったのだろうか。"
		],
		"chinese": [
			"所有的饥饿都平息了。仿佛严冬已然过去。",
			"冰冻的森林陷入沉寂。那沉寂中，蕴含着无数的哀嚎。",
			"巨大的悲剧虽然落幕，但在幸存者心中却刻下了新的创伤。",
			"这片森林，如今将铭记些什么呢？",
			"而他们，在这所有的真相中，又得到了什么，失去了什么呢？"
		],
		"french": [
			"Toute faim s'apaisa. Comme si le rude hiver avait pris fin.",
			"La forêt gelée se tut. Un silence qui contenait d'innombrables cris.",
			"La grande tragédie était terminée, mais de nouvelles cicatrices étaient gravées dans le cœur de ceux qui restaient.",
			"Que se souviendra cette forêt, désormais ?",
			"Et au milieu de toute cette vérité, qu'ont-ils gagné, et qu'ont-ils perdu ?"
		],
		"spanish": [
			"Toda hambre cesó. Como si el duro invierno hubiera terminado.",
			"El bosque congelado se silenció. Un silencio que guardaba incontables gritos.",
			"La gran tragedia había terminado, pero nuevas cicatrices se grabaron en los corazones de los que quedaron.",
			"¿Qué recordará este bosque ahora?",
			"Y ellos, en toda esta verdad, ¿qué ganaron y qué perdieron?"
		],
		"vietnamese": [
			"Mọi cơn đói khát đã lắng xuống. Như thể mùa đông khắc nghiệt đã kết thúc.",
			"Rừng cây đóng băng chìm vào im lặng. Sự im lặng ấy, ẩn chứa vô số tiếng thét.",
			"Bi kịch khổng lồ đã kết thúc, nhưng trong lòng những người ở lại đã khắc sâu những vết sẹo mới.",
			"Rừng cây này, giờ sẽ ghi nhớ điều gì?",
			"Và họ, giữa tất cả sự thật này, đã đạt được gì, và mất đi điều gì?"
		],
		"thai": [
			"ความหิวโหยทั้งมวลจางหายไป ราวกับฤดูหนาวอันโหดร้ายได้สิ้นสุดลง",
			"ป่าที่เยือกแข็งเงียบงัน ความเงียบงันนั้นซ่อนเสียงกรีดร้องนับไม่ถ้วนไว้",
			"โศกนาฏกรรมอันยิ่งใหญ่ได้สิ้นสุดลง แต่รอยแผลเป็นใหม่ได้ถูกจารึกไว้ในใจของผู้ที่เหลืออยู่",
			"บัดนี้ป่าแห่งนี้จะจดจำสิ่งใดบ้าง",
			"แล้วพวกเขาล่ะ ในท่ามกลางความจริงทั้งหมดนี้ ได้อะไรมา และสูญเสียอะไรไปบ้าง"
		],
		"hindi": [
			"सारी भूख शांत हो गई। मानो कड़ाके की सर्दी खत्म हो गई हो।",
			"जमा हुआ जंगल शांत हो गया। एक ऐसी चुप्पी जिसमें अनगिनत चीखें समाई हुई थीं।",
			"महान त्रासदी समाप्त हो गई थी, लेकिन बचे हुए लोगों के दिलों में नए घाव अंकित हो गए थे।",
			"अब यह जंगल क्या याद रखेगा?",
			"और वे, इस सारी सच्चाई में, क्या पाए और क्या खोए?"
		]
	}
} as const;
