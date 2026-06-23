export const scenario_desert_orbel_36_04 = {
	"scenario_id": "desert_orbel_36_04",
	"order": 4,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"ember": {
			"id": "mon_9845a5c0-e558-41cc-979d-91567cb41aa7",
			"name": {
				"korean": "앰버",
				"english": "Ember",
				"japanese": "エンバー",
				"chinese": "余烬",
				"french": "Braise",
				"spanish": "Ascua",
				"vietnamese": "Tàn lửa",
				"thai": "เอมเบอร์",
				"hindi": "अंगारा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/10e60a4c-5b9a-4f2a-a55a-707c0beabe00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5dd50017-3c98-41b2-c8d2-e3e4659ca700/public"
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
						"korean": "사막 깊은 곳. 발굴 현장에 도착했다.",
						"english": "Deep in the desert. We've arrived at the excavation site.",
						"japanese": "砂漠の奥深く。発掘現場に到着した。",
						"chinese": "沙漠深处。已抵达发掘现场。",
						"french": "Au plus profond du désert. Nous sommes arrivés sur le site de fouilles.",
						"spanish": "En lo profundo del desierto. Hemos llegado al sitio de excavación.",
						"vietnamese": "Sâu trong sa mạc. Đã đến hiện trường khai quật.",
						"thai": "ลึกเข้าไปในทะเลทราย. มาถึงแหล่งขุดค้นแล้ว.",
						"hindi": "रेगिस्तान की गहराई में। खुदाई स्थल पर पहुँच गए हैं।"
					}
				},
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "ember",
					"duration_ms": 500
				},
				{
					"speaker": "ember",
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "왔어요? 이쪽이에요! 대단한 걸 발견했죠.",
						"english": "You're here? Over here! We found something incredible.",
						"japanese": "来ましたね？こちらです！すごいものを見つけましたよ。",
						"chinese": "来了？这边！我们发现了不得了的东西。",
						"french": "Vous êtes là ? Par ici ! On a fait une découverte incroyable.",
						"spanish": "¿Ya llegaron? ¡Por aquí! Encontramos algo increíble.",
						"vietnamese": "Anh đến rồi à? Lối này! Chúng tôi tìm thấy một thứ tuyệt vời.",
						"thai": "มาแล้วเหรอ? ทางนี้เลย! เราเจอของสุดยอดเลยล่ะ.",
						"hindi": "आ गए? इधर! हमने कुछ कमाल का ढूँढा है।"
					}
				},
				{
					"content": {
						"korean": "이게… 유물인가요?",
						"english": "Is this... a relic?",
						"japanese": "これが…遺物ですか？",
						"chinese": "这是…遗物吗？",
						"french": "C'est... une relique ?",
						"spanish": "¿Esto es... una reliquia?",
						"vietnamese": "Cái này… là di vật sao?",
						"thai": "นี่มัน… วัตถุโบราณเหรอ?",
						"hindi": "क्या यह… एक अवशेष है?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "ember",
					"emotion": "base",
					"content": {
						"korean": "네! 고대 문명의 핵심 유물로 추정돼요. 그런데… 좀 이상하죠?",
						"english": "Yes! It's believed to be a core relic of an ancient civilization. But... it's a bit strange, isn't it?",
						"japanese": "はい！古代文明の核心となる遺物と推定されています。でも…ちょっとおかしいでしょう？",
						"chinese": "是的！它被认为是古文明的核心遗物。但是…有点奇怪，不是吗？",
						"french": "Oui ! On pense que c'est une relique essentielle d'une civilisation ancienne. Mais... c'est un peu étrange, non ?",
						"spanish": "¡Sí! Se cree que es una reliquia central de una civilización antigua. Pero... es un poco extraño, ¿no?",
						"vietnamese": "Vâng! Nó được cho là di vật cốt lõi của một nền văn minh cổ đại. Nhưng mà… hơi lạ phải không?",
						"thai": "ใช่ค่ะ! คาดว่าเป็นวัตถุโบราณหลักของอารยธรรมโบราณค่ะ. แต่ว่า… มันแปลกๆ ใช่ไหมคะ?",
						"hindi": "हाँ! इसे एक प्राचीन सभ्यता का मुख्य अवशेष माना जाता है। लेकिन… थोड़ा अजीब है, है ना?"
					}
				},
				{
					"content": {
						"korean": "이상하다뇨?",
						"english": "Strange how?",
						"japanese": "おかしいとは？",
						"chinese": "哪里奇怪？",
						"french": "Étrange en quoi ?",
						"spanish": "¿Extraño cómo?",
						"vietnamese": "Lạ chỗ nào?",
						"thai": "แปลกยังไงคะ?",
						"hindi": "अजीब कैसे?"
					},
					"type": "speech",
					"speaker": "character_1",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "문양이… 밤마다 미묘하게 달라져요. 마치 새로 쓰이는 것처럼.",
						"english": "The patterns... they subtly change every night. As if they're being rewritten.",
						"japanese": "文様が…夜ごとに微妙に変わるんです。まるで新しく書かれているかのように。",
						"chinese": "图案…每晚都会微妙地变化。就像被重新书写一样。",
						"french": "Les motifs... ils changent subtilement chaque nuit. Comme s'ils étaient réécrits.",
						"spanish": "Los patrones... cambian sutilmente cada noche. Como si fueran reescritos.",
						"vietnamese": "Hoa văn… mỗi đêm đều thay đổi một cách tinh tế. Cứ như thể được viết lại vậy.",
						"thai": "ลวดลาย… มันเปลี่ยนไปอย่างละเอียดอ่อนทุกคืนเลยค่ะ. เหมือนกับว่ามันถูกเขียนขึ้นใหม่.",
						"hindi": "पैटर्न… हर रात सूक्ष्म रूप से बदलते हैं। जैसे उन्हें फिर से लिखा जा रहा हो।"
					},
					"type": "speech",
					"speaker": "ember",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ember",
					"type": "direction"
				},
				{
					"content": {
						"korean": "보세요. 어제랑 또 다르죠? 이 선 하나가… 사라졌어요.",
						"english": "Look. It's different again from yesterday, isn't it? This one line... it's gone.",
						"japanese": "見てください。昨日とまた違いますよね？この線が一本…消えました。",
						"chinese": "你们看。和昨天又不一样了，对吗？这根线…消失了。",
						"french": "Regardez. C'est encore différent d'hier, n'est-ce pas ? Cette ligne… elle a disparu.",
						"spanish": "Miren. Es diferente a ayer otra vez, ¿verdad? Esta línea… ha desaparecido.",
						"vietnamese": "Nhìn xem. Lại khác hôm qua rồi, phải không? Cái đường này… nó biến mất rồi.",
						"thai": "ดูสิคะ มันต่างจากเมื่อวานอีกแล้วใช่ไหมคะ? เส้นนี้… หายไปแล้วค่ะ",
						"hindi": "देखिए। यह कल से फिर अलग है, है ना? यह एक रेखा… गायब हो गई है।"
					},
					"speaker": "ember",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "정말이네요… 착각한 줄 알았는데.",
						"english": "It really is... I thought I was mistaken.",
						"japanese": "本当ですね…てっきり錯覚かと。",
						"chinese": "真是这样…我还以为是我看错了。",
						"french": "C'est vrai… Je croyais que c'était une illusion.",
						"spanish": "Es verdad… Creí que me lo había imaginado.",
						"vietnamese": "Thật vậy… Tôi cứ nghĩ mình nhầm.",
						"thai": "จริงด้วย… ฉันนึกว่าฉันคิดไปเอง",
						"hindi": "वाकई… मुझे लगा कि मुझे भ्रम हुआ था।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "제 기록도 계속 사라져요. 어제 적은 내용이 오늘 없어져요. 왜 이런… 왜 이런 일이…",
						"english": "My records keep disappearing too. What I wrote yesterday is gone today. Why is this... why is this happening...?",
						"japanese": "私の記録も消え続けています。昨日書いた内容が今日にはなくなっている。なぜこんな…なぜこんなことが…",
						"chinese": "我的记录也一直在消失。昨天写的东西今天就没有了。为什么会这样…为什么会发生这种事…",
						"french": "Mes notes aussi continuent de disparaître. Ce que j'ai écrit hier n'y est plus aujourd'hui. Pourquoi est-ce que… pourquoi ça arrive… ?",
						"spanish": "Mis registros también siguen desapareciendo. Lo que escribí ayer hoy ya no está. ¿Por qué está pasando esto… por qué está pasando esto…?",
						"vietnamese": "Hồ sơ của tôi cũng liên tục biến mất. Những gì tôi ghi hôm qua hôm nay đã không còn. Tại sao chuyện này… tại sao chuyện này lại xảy ra…",
						"thai": "บันทึกของฉันก็หายไปเรื่อยๆ ค่ะ สิ่งที่ฉันจดเมื่อวานหายไปหมดเลยวันนี้ ทำไมถึง… ทำไมถึงเกิดเรื่องแบบนี้…",
						"hindi": "मेरे रिकॉर्ड भी गायब होते जा रहे हैं। जो मैंने कल लिखा था, वह आज नहीं है। ऐसा क्यों… ऐसा क्यों हो रहा है…?"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "ember"
				},
				{
					"content": {
						"korean": "혹시… 피로 때문 아닐까요?",
						"english": "Could it be... due to fatigue?",
						"japanese": "もしかして…疲労のせいでは？",
						"chinese": "也许是…疲劳的原因？",
						"french": "Et si… c'était la fatigue ?",
						"spanish": "¿Quizás… sea por el cansancio?",
						"vietnamese": "Hay là… do mệt mỏi?",
						"thai": "หรือว่า… เป็นเพราะความเหนื่อยล้าคะ?",
						"hindi": "कहीं… यह थकावट की वजह से तो नहीं?"
					},
					"speaker": "character_2",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "ember",
					"emotion": "angry",
					"content": {
						"korean": "아니에요! 이건… 뭔가 의도적이에요. 마치 누가 제 연구를 비웃는 것 같아요!",
						"english": "No! This is... intentional somehow. It's as if someone is mocking my research!",
						"japanese": "違います！これは…何か意図的です。まるで誰かが私の研究を嘲笑っているかのようです！",
						"chinese": "不是！这…这肯定是故意的。就好像有人在嘲笑我的研究一样！",
						"french": "Non ! C'est… c'est intentionnel, d'une manière ou d'une autre. C'est comme si quelqu'un se moquait de mes recherches !",
						"spanish": "¡No! Esto es… algo intencional. ¡Es como si alguien se estuviera burlando de mi investigación!",
						"vietnamese": "Không phải! Chuyện này… có vẻ là cố ý. Cứ như ai đó đang chế giễu nghiên cứu của tôi vậy!",
						"thai": "ไม่ใช่ค่ะ! นี่มัน… จงใจแน่นอนค่ะ เหมือนมีใครบางคนกำลังเยาะเย้ยงานวิจัยของฉันอยู่เลย!",
						"hindi": "नहीं! यह… यह जानबूझकर किया गया है। मानो कोई मेरे शोध का मज़ाक उड़ा रहा हो!"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "ember",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "모든 게… 모든 게 똑같아요. 어제 본 것 같고, 지난주에도 그랬어요.",
						"english": "Everything… everything is the same. It feels like I saw it yesterday, and it was the same last week.",
						"japanese": "全部…全部同じです。昨日も見た気がするし、先週もそうでした。",
						"chinese": "所有的一切…所有的一切都一样。感觉昨天也见过，上周也是。",
						"french": "Tout… tout est pareil. J'ai l'impression de l'avoir vu hier, et la semaine dernière aussi.",
						"spanish": "Todo… todo es igual. Siento que lo vi ayer, y la semana pasada también.",
						"vietnamese": "Mọi thứ… mọi thứ đều giống hệt. Cứ như tôi đã thấy nó hôm qua rồi, tuần trước cũng vậy.",
						"thai": "ทุกอย่าง… ทุกอย่างเหมือนเดิมเลยค่ะ เหมือนฉันเห็นมันเมื่อวาน แล้วก็เมื่ออาทิตย์ที่แล้วก็เหมือนกัน",
						"hindi": "सब कुछ… सब कुछ वैसा ही है। मुझे लगता है कि मैंने इसे कल देखा था, और पिछले हफ्ते भी ऐसा ही था।"
					},
					"emotion": "sad",
					"speaker": "ember",
					"type": "speech"
				},
				{
					"content": {
						"korean": "앰버 씨, 괜찮아요?",
						"english": "Amber, are you alright?",
						"japanese": "アンバーさん、大丈夫ですか？",
						"chinese": "艾梅柏女士，您还好吗？",
						"french": "Amber, ça va ?",
						"spanish": "Amber, ¿estás bien?",
						"vietnamese": "Amber, cô ổn chứ?",
						"thai": "คุณแอมเบอร์คะ เป็นอะไรหรือเปล่าคะ?",
						"hindi": "एम्बर जी, क्या आप ठीक हैं?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이 문양은 계속 새로 쓰여요. 계속… 계속… 끊임없이. 내 연구는… 아무 의미 없어.",
						"english": "These patterns keep being rewritten. Again... again... endlessly. My research... it's meaningless.",
						"japanese": "この文様は書き換えられ続けています。ずっと…ずっと…際限なく。私の研究は…何の意味もない。",
						"chinese": "这些图案一直在被重写。不断地…不断地…永无止境。我的研究…没有任何意义。",
						"french": "Ces motifs sont constamment réécrits. Encore… encore… sans fin. Ma recherche… elle n'a aucun sens.",
						"spanish": "Estos patrones siguen siendo reescritos. Sin parar… sin parar… interminablemente. Mi investigación… no tiene sentido.",
						"vietnamese": "Những hoa văn này cứ liên tục được viết lại. Cứ mãi… mãi… không ngừng nghỉ. Nghiên cứu của tôi… chẳng có ý nghĩa gì.",
						"thai": "ลวดลายพวกนี้ถูกเขียนใหม่เรื่อยๆ ค่ะ เรื่อยๆ… เรื่อยๆ… ไม่สิ้นสุด งานวิจัยของฉัน… ไม่มีประโยชน์อะไรเลย",
						"hindi": "ये पैटर्न लगातार फिर से लिखे जा रहे हैं। बार-बार… बार-बार… अंतहीन। मेरा शोध… इसका कोई मतलब नहीं।"
					},
					"speaker": "ember",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_3",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "저희가… 대체 뭘 하고 있는 거죠?",
						"english": "What exactly... are we doing?",
						"japanese": "私たちは…一体何をしているんです？",
						"chinese": "我们…到底在做什么？",
						"french": "Qu'est-ce que… qu'est-ce qu'on est en train de faire, au juste ?",
						"spanish": "¿Qué estamos… qué estamos haciendo exactamente?",
						"vietnamese": "Chúng ta… rốt cuộc đang làm gì vậy?",
						"thai": "พวกเรา… กำลังทำอะไรกันแน่คะเนี่ย?",
						"hindi": "हम… आखिर क्या कर रहे हैं?"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "ember",
					"content": {
						"korean": "우린… 똑같은 일을 반복하고 있어요. 계속… 계속… 왜… 아무도 끝내지 못하는 거지?",
						"english": "We're... repeating the same thing. Again... again... Why... why can't anyone put an end to it?",
						"japanese": "私たちは…同じことを繰り返しています。ずっと…ずっと…なぜ…誰も終わらせられないんだ？",
						"chinese": "我们…我们正在重复同样的事情。一直…一直…为什么…为什么没有人能结束这一切？",
						"french": "On… on répète la même chose. Encore… encore… Pourquoi… pourquoi personne ne peut y mettre fin ?",
						"spanish": "Estamos… repitiendo lo mismo. Sin parar… sin parar… ¿Por qué… por qué nadie puede terminarlo?",
						"vietnamese": "Chúng ta… đang lặp đi lặp lại cùng một việc. Mãi… mãi… Tại sao… không ai có thể kết thúc nó?",
						"thai": "พวกเรา… กำลังทำเรื่องเดิมๆ ซ้ำแล้วซ้ำเล่า เรื่อยๆ… เรื่อยๆ… ทำไม… ไม่มีใครหยุดมันได้เลยล่ะ?",
						"hindi": "हम… एक ही काम दोहरा रहे हैं। बार-बार… बार-बार… क्यों… कोई इसे खत्म क्यों नहीं कर सकता?"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "ember",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "angry",
					"speaker": "ember",
					"type": "speech",
					"content": {
						"korean": "절대 끝낼 수 없어! 이 사막은… 살아있는 시스템이야!",
						"english": "It can never end! This desert... it's a living system!",
						"japanese": "決して終わらない！この砂漠は…生きているシステムなのよ！",
						"chinese": "永无止境！这片沙漠……是一个活着的系统！",
						"french": "Ça ne peut jamais finir ! Ce désert... c'est un système vivant !",
						"spanish": "¡Nunca terminará! Este desierto... ¡es un sistema viviente!",
						"vietnamese": "Không bao giờ kết thúc được! Sa mạc này... là một hệ thống sống!",
						"thai": "ไม่มีทางจบได้เลย! ทะเลทรายนี้... มันคือระบบที่มีชีวิต!",
						"hindi": "यह कभी खत्म नहीं हो सकता! यह रेगिस्तान... एक जीवित प्रणाली है!"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "시스템이라니… 무슨 말이에요?",
						"english": "A system...? What do you mean?",
						"japanese": "システムですって…どういうことですか？",
						"chinese": "系统……什么意思？",
						"french": "Un système...? Qu'est-ce que vous voulez dire ?",
						"spanish": "¿Un sistema...? ¿Qué quieres decir?",
						"vietnamese": "Hệ thống...? Ý cô là sao?",
						"thai": "ระบบเหรอ...? หมายความว่าไงคะ?",
						"hindi": "एक प्रणाली...? आपका क्या मतलब है?"
					}
				},
				{
					"emotion": "sad",
					"speaker": "ember",
					"type": "speech",
					"content": {
						"korean": "우린 모두 그 안에 갇혀있어! 발버둥 쳐도 소용 없어! 그냥… 반복될 뿐이야!",
						"english": "We're all trapped inside it! Struggling is useless! It'll just... repeat!",
						"japanese": "私たちは皆、その中に閉じ込められているのよ！もがいても無駄！ただ…繰り返されるだけ！",
						"chinese": "我们都被困在里面了！挣扎是徒劳的！只会……不断重复！",
						"french": "Nous sommes tous piégés dedans ! Lutter est inutile ! Ça va juste... se répéter !",
						"spanish": "¡Estamos todos atrapados dentro! ¡Luchar es inútil! ¡Solo... se repetirá!",
						"vietnamese": "Chúng ta đều bị mắc kẹt trong đó! Giãy giụa cũng vô ích thôi! Nó sẽ chỉ... lặp lại!",
						"thai": "เราทุกคนติดอยู่ในนั้น! ดิ้นรนไปก็เปล่าประโยชน์! มันจะแค่... ซ้ำไปซ้ำมา!",
						"hindi": "हम सब इसमें फंसे हैं! संघर्ष करना बेकार है! यह बस... दोहराया जाएगा!"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그녀의 절규가 사막의 공포와 겹쳐졌다. 거대한 그림자가 드리웠다.",
						"english": "Her scream mingled with the desert's terror. A colossal shadow loomed.",
						"japanese": "彼女の絶叫が砂漠の恐怖と重なった。巨大な影が差し込んだ。",
						"chinese": "她的尖叫声与沙漠的恐惧交织。一个巨大的阴影笼罩下来。",
						"french": "Son cri se mêla à la terreur du désert. Une ombre colossale plana.",
						"spanish": "Su grito se mezcló con el terror del desierto. Una sombra colosal se cernió.",
						"vietnamese": "Tiếng thét của cô hòa cùng nỗi kinh hoàng của sa mạc. Một bóng đen khổng lồ bao trùm.",
						"thai": "เสียงกรีดร้องของเธอปะปนกับความหวาดกลัวของทะเลทราย เงาขนาดมหึมาทอดยาวลงมา",
						"hindi": "उसकी चीख रेगिस्तान के आतंक में घुल गई। एक विशाल छाया मंडराने लगी।"
					}
				},
				{
					"type": "direction",
					"speaker": "random_boss",
					"duration_ms": 500,
					"spot": [
						5,
						4
					],
					"action": "enter"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그래. 발버둥 쳐봐야 소용없지.",
						"english": "Indeed. Struggling is pointless.",
						"japanese": "そうだ。もがいても無駄だ。",
						"chinese": "没错。挣扎是毫无意义的。",
						"french": "En effet. Lutter est vain.",
						"spanish": "Así es. Luchar es inútil.",
						"vietnamese": "Phải. Giãy giụa cũng vô ích thôi.",
						"thai": "จริง ดิ้นรนไปก็เปล่าประโยชน์",
						"hindi": "हाँ। संघर्ष करना व्यर्थ है।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "당신은… 누구야!",
						"english": "Who... are you?!",
						"japanese": "あなたは…誰だ！",
						"chinese": "你……是谁！",
						"french": "Qui... êtes-vous !",
						"spanish": "¿Quién... eres tú?",
						"vietnamese": "Ngươi... là ai!",
						"thai": "คุณ... เป็นใคร!",
						"hindi": "तुम... कौन हो!"
					}
				},
				{
					"action": "exit",
					"duration_ms": 400,
					"speaker": "ember",
					"direction": "down",
					"type": "direction"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "너희의 절망을 지켜보는 자다. 반복되는 모래처럼.",
						"english": "I am the one who watches your despair. Like the repeating sands.",
						"japanese": "お前たちの絶望を見守る者だ。繰り返される砂のように。",
						"chinese": "我是看着你们绝望之人。如同反复的流沙。",
						"french": "Je suis celui qui observe votre désespoir. Comme le sable qui se répète.",
						"spanish": "Soy quien observa vuestra desesperación. Como la arena que se repite.",
						"vietnamese": "Ta là kẻ chứng kiến sự tuyệt vọng của các ngươi. Như cát lặp đi lặp lại.",
						"thai": "ข้าคือผู้เฝ้ามองความสิ้นหวังของพวกเจ้า ดุจผืนทรายที่ซ้ำรอย",
						"hindi": "मैं वह हूँ जो तुम्हारी हताशा देखता है। दोहराती हुई रेत की तरह।"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "…겨우 이걸로 끝이라고 생각하나? 아직 멀었다… 진짜 시스템은….",
						"english": "...You think this is the end? Far from it... The real system is...",
						"japanese": "…たかがこれっぽっちで終わりだと？まだだ…本当のシステムは…。",
						"chinese": "……你以为这就结束了吗？还早得很呢……真正的系统是……",
						"french": "...Tu crois que c'est la fin ? Loin de là... Le vrai système est...",
						"spanish": "...¿Crees que esto es el fin? Ni de cerca... El verdadero sistema es...",
						"vietnamese": "...Ngươi nghĩ đây là kết thúc sao? Còn lâu lắm... Hệ thống thật sự là...",
						"thai": " ...คิดว่าจะจบแค่นี้เหรอ? ยังอีกนาน... ระบบที่แท้จริงคือ...",
						"hindi": "...क्या तुम्हें लगता है कि यह अंत है? अभी बहुत बाकी है... असली सिस्टम तो..."
					},
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이겼다… 우리가 해냈어!",
						"english": "We won... We did it!",
						"japanese": "勝った…やったぞ！",
						"chinese": "我们赢了……我们做到了！",
						"french": "Nous avons gagné... Nous l'avons fait !",
						"spanish": "¡Ganamos... lo logramos!",
						"vietnamese": "Thắng rồi... Chúng ta đã làm được!",
						"thai": "เราชนะแล้ว... เราทำได้แล้ว!",
						"hindi": "हम जीत गए... हमने कर दिखाया!"
					},
					"speaker": "character_any",
					"emotion": "happy",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_2",
					"content": {
						"korean": "정말 끝난 걸까…?",
						"english": "Is it really over...?",
						"japanese": "本当に終わったのか…？",
						"chinese": "真的结束了吗……？",
						"french": "Est-ce vraiment fini...?",
						"spanish": "¿De verdad ha terminado...?",
						"vietnamese": "Thật sự kết thúc rồi sao...?",
						"thai": "มันจบลงแล้วจริง ๆ เหรอ...?",
						"hindi": "क्या यह सच में खत्म हो गया है...?"
					}
				},
				{
					"content": {
						"korean": "승리의 환희 속에서, 탐험대는 여전히 알 수 없는 불안감을 느꼈다. 사막의 침묵은 더 깊은 진실을 감추고 있었다.",
						"english": "Amidst the euphoria of victory, the expedition team still felt an unknown unease. The desert's silence hid a deeper truth.",
						"japanese": "勝利の歓喜の中、探検隊は依然として言い知れぬ不安を感じていた。砂漠の沈黙は、より深い真実を隠していた。",
						"chinese": "在胜利的狂喜中，探险队仍然感到一种莫名的不安。沙漠的寂静隐藏着更深的真相。",
						"french": "Au milieu de l'euphorie de la victoire, l'équipe d'expédition ressentait toujours une inquiétude inconnue. Le silence du désert cachait une vérité plus profonde.",
						"spanish": "En la euforia de la victoria, el equipo de expedición aún sentía una inquietud desconocida. El silencio del desierto ocultaba una verdad más profunda.",
						"vietnamese": "Giữa niềm hân hoan chiến thắng, đội thám hiểm vẫn cảm thấy một sự bất an khó tả. Sự im lặng của sa mạc che giấu một sự thật sâu sắc hơn.",
						"thai": "ท่ามกลางความยินดีแห่งชัยชนะ ทีมสำรวจยังคงรู้สึกถึงความกังวลที่ไม่รู้จัก ความเงียบของทะเลทรายซ่อนความจริงที่ลึกซึ้งกว่านั้นไว้",
						"hindi": "जीत के उत्साह के बीच, अभियान दल को अभी भी एक अज्ञात बेचैनी महसूस हो रही थी। रेगिस्तान की खामोशी एक गहरा सच छिपा रही थी।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "아무리 발버둥 쳐도, 너희는 이 루프를 벗어날 수 없어.",
						"english": "No matter how much you struggle, you cannot escape this loop.",
						"japanese": "いくら足掻いても、お前たちはこのループから逃れることはできない。",
						"chinese": "无论你们如何挣扎，都无法摆脱这个循环。",
						"french": "Peu importe vos efforts, vous ne pouvez pas échapper à cette boucle.",
						"spanish": "Por mucho que luchéis, no podréis escapar de este bucle.",
						"vietnamese": "Dù các ngươi có giãy giụa thế nào, cũng không thể thoát khỏi vòng lặp này.",
						"thai": "ไม่ว่าพวกเจ้าจะดิ้นรนแค่ไหน ก็หนีจากวงวนนี้ไปไม่ได้หรอก",
						"hindi": "तुम कितना भी संघर्ष कर लो, तुम इस लूप से बच नहीं सकते।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "헛소리 마! 우린 끝까지 싸울 거야!",
						"english": "Nonsense! We'll fight to the end!",
						"japanese": "戯言を言うな！私たちは最後まで戦う！",
						"chinese": "胡说八道！我们会战斗到底！",
						"french": "Foutaises ! Nous nous battrons jusqu'au bout !",
						"spanish": "¡Tonterías! ¡Lucharemos hasta el final!",
						"vietnamese": "Đừng nói nhảm! Chúng ta sẽ chiến đấu đến cùng!",
						"thai": "เหลวไหล! พวกเราจะสู้จนถึงที่สุด!",
						"hindi": "बकवास मत करो! हम अंत तक लड़ेंगे!"
					}
				},
				{
					"content": {
						"korean": "다 소용없다. 너희가 이룬 모든 것은 결국 모래가 될 뿐.",
						"english": "It's all futile. Everything you've achieved will ultimately turn to sand.",
						"japanese": "全て無駄だ。お前たちが成し遂げたもの全て、結局は砂になるだけだ。",
						"chinese": "一切都毫无意义。你们所成就的一切，最终都将化为黄沙。",
						"french": "Tout est vain. Tout ce que vous avez accompli ne finira que par devenir du sable.",
						"spanish": "Todo es inútil. Todo lo que habéis logrado, al final se convertirá en arena.",
						"vietnamese": "Tất cả đều vô ích. Mọi thứ các ngươi đạt được, cuối cùng cũng chỉ hóa thành cát bụi.",
						"thai": "ทั้งหมดนั้นไร้ประโยชน์ ทุกสิ่งที่พวกเจ้าสร้างมา สุดท้ายก็จะกลายเป็นผงทรายไปเท่านั้น",
						"hindi": "यह सब बेकार है। तुमने जो कुछ भी हासिल किया है, वह अंततः रेत बन जाएगा।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_1",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "닥쳐! 네가 뭔데 우리 의지를 꺾으려 해!",
						"english": "Shut up! Who are you to break our will?!",
						"japanese": "黙れ！貴様が何様だ、我々の意志を砕こうとするとは！",
						"chinese": "闭嘴！你算什么东西，竟敢꺾으려 우리의意志？！",
						"french": "Tais-toi ! Qui es-tu pour briser notre volonté ?!",
						"spanish": "¡Cállate! ¿Quién eres tú para quebrar nuestra voluntad?",
						"vietnamese": "Câm đi! Ngươi là ai mà dám bẻ gãy ý chí của chúng ta?!",
						"thai": "หุบปาก! แกเป็นใครถึงได้มาทำลายเจตจำนงของเรา?!",
						"hindi": "चुप हो जाओ! तुम कौन होते हो हमारी इच्छाशक्ति तोड़ने वाले?!"
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 것들. 너희의 노력은 언제나 물거품처럼 사라질 뿐.",
						"english": "Fools. Your efforts will always vanish like bubbles.",
						"japanese": "愚かな者たちめ。お前たちの努力はいつも泡のように消え去るだけだ。",
						"chinese": "愚蠢的东西。你们的努力永远只会像泡沫一样消散。",
						"french": "Imbéciles. Vos efforts s'évanouiront toujours comme des bulles.",
						"spanish": "Necios. Vuestros esfuerzos siempre se desvanecerán como burbujas.",
						"vietnamese": "Những kẻ ngu ngốc. Mọi nỗ lực của các ngươi sẽ luôn tan biến như bọt biển thôi.",
						"thai": "พวกโง่เขลา ความพยายามของพวกเจ้าจะหายไปเหมือนฟองสบู่เสมอ",
						"hindi": "मूर्खों। तुम्हारी सारी कोशिशें हमेशा बुलबुले की तरह गायब हो जाएंगी।"
					}
				},
				{
					"content": {
						"korean": "젠장…! 하지만 포기 안 해!",
						"english": "Damn it...! But I won't give up!",
						"japanese": "くそっ…！だが、諦めない！",
						"chinese": "该死……！但我不会放弃！",
						"french": "Zut...! Mais je n'abandonnerai pas !",
						"spanish": "¡Maldita sea...! ¡Pero no me rendiré!",
						"vietnamese": "Chết tiệt...! Nhưng tôi sẽ không bỏ cuộc!",
						"thai": "ให้ตายสิ...! แต่ฉันจะไม่ยอมแพ้!",
						"hindi": "धिक्कार है...! पर मैं हार नहीं मानूँगा!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 반복을 반드시 깨부술 거야!",
						"english": "I will definitely break this loop!",
						"japanese": "この繰り返しを必ず打ち破ってやる！",
						"chinese": "我一定要打破这个循环！",
						"french": "Je vais absolument briser cette boucle !",
						"spanish": "¡Definitivamente romperé este bucle!",
						"vietnamese": "Tôi nhất định sẽ phá vỡ vòng lặp này!",
						"thai": "ฉันจะต้องทำลายวงจรนี้ให้ได้!",
						"hindi": "मैं इस चक्र को निश्चित रूप से तोड़ दूँगा!"
					},
					"emotion": "angry",
					"speaker": "character_3",
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"사막의 심장부. 고대 문명의 유물들이 잠들어 있는 곳.",
			"그러나 그 유물들은 살아있는 듯, 밤마다 모양을 바꿨다.",
			"진실을 쫓던 학자는 반복되는 절망 속에서 광기에 잠식되어 갔다.",
			"그리고 탐험대는 깨달았다. 이곳은 단순한 사막이 아니라는 것을."
		],
		"english": [
			"The heart of the desert. Where ancient relics slumber.",
			"Yet, these relics seemed alive, changing form each night.",
			"The scholar, chasing truth, succumbed to madness amidst endless despair.",
			"And the expedition team realized. This was no mere desert."
		],
		"japanese": [
			"砂漠の心臓部。古代文明の遺物が眠る場所。",
			"しかし、その遺物たちは生きているかのように、夜ごとに姿を変えた。",
			"真実を追う学者は、繰り返される絶望の中で狂気に蝕まれていった。",
			"そして探検隊は悟った。ここが単なる砂漠ではないことを。"
		],
		"chinese": [
			"沙漠深处。古文明遗物沉睡之地。",
			"然而，这些遗物仿佛有生命般，每晚都在改变形状。",
			"追寻真相的学者，在无尽的绝望中逐渐被疯狂吞噬。",
			"探险队也终于明白。这里并非简单的沙漠。"
		],
		"french": [
			"Au cœur du désert. Là où les reliques d'une civilisation ancienne sommeillent.",
			"Pourtant, ces reliques semblaient vivantes, changeant de forme chaque nuit.",
			"Le savant, à la poursuite de la vérité, sombra dans la folie au milieu d'un désespoir incessant.",
			"Et l'équipe d'exploration réalisa. Ce n'était pas un simple désert."
		],
		"spanish": [
			"En el corazón del desierto. Donde yacen reliquias de una civilización antigua.",
			"Sin embargo, estas reliquias parecían vivas, cambiando de forma cada noche.",
			"El erudito, persiguiendo la verdad, sucumbió a la locura en medio de una desesperación repetida.",
			"Y el equipo de expedición se dio cuenta. Esto no era un simple desierto."
		],
		"vietnamese": [
			"Trung tâm sa mạc. Nơi di tích văn minh cổ đại đang ngủ yên.",
			"Thế nhưng, những di tích này dường như sống dậy, thay đổi hình dạng mỗi đêm.",
			"Học giả theo đuổi sự thật đã dần chìm vào điên loạn giữa sự tuyệt vọng lặp đi lặp lại.",
			"Và đoàn thám hiểm nhận ra. Nơi đây không phải chỉ là một sa mạc đơn thuần."
		],
		"thai": [
			"ใจกลางทะเลทราย. ที่ซึ่งวัตถุโบราณของอารยธรรมโบราณหลับใหลอยู่.",
			"ทว่า วัตถุโบราณเหล่านั้นกลับดูมีชีวิต เปลี่ยนรูปร่างทุกคืน.",
			"นักวิชาการผู้ตามล่าความจริง ค่อยๆ จมดิ่งสู่ความบ้าคลั่ง ท่ามกลางความสิ้นหวังที่ซ้ำซาก.",
			"และคณะสำรวจก็ตระหนักได้. ว่าที่นี่ไม่ใช่แค่ทะเลทรายธรรมดา."
		],
		"hindi": [
			"रेगिस्तान का हृदय। जहाँ प्राचीन सभ्यता के अवशेष सोये हुए हैं।",
			"फिर भी, ये अवशेष सजीव प्रतीत होते थे, हर रात अपना रूप बदलते थे।",
			"सत्य का पीछा करने वाला विद्वान, बार-बार की निराशा में पागलपन का शिकार होता चला गया।",
			"और अभियान दल ने महसूस किया। कि यह सिर्फ एक रेगिस्तान नहीं था।"
		]
	}
} as const;
