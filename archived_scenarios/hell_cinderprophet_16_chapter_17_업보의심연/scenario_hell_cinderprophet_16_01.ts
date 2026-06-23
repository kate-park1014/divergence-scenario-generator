export const scenario_hell_cinderprophet_16_01 = {
	"scenario_id": "hell_cinderprophet_16_01",
	"order": 1,
	"act": "intro",
	"theme": "hell",
	"actors": {
		"soot": {
			"id": "mon_a0491490-e114-44d8-855c-d2d63b020da1",
			"name": {
				"korean": "그을음",
				"english": "Soot",
				"japanese": "煤",
				"chinese": "煤烟",
				"french": "Suie",
				"spanish": "Hollín",
				"vietnamese": "Bồ hóng",
				"thai": "เขม่า",
				"hindi": "कालिख"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2275d372-4e89-4725-193c-fccc0b944300/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d1d5ba2b-da7c-4b75-42de-07c9cdda5d00/public"
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
						"korean": "지옥의 심연, 어둠과 정적이 모든 것을 집어삼켰다.",
						"english": "The abyss of hell, darkness and silence swallowed everything.",
						"japanese": "地獄の深淵、闇と静寂が全てを飲み込んだ。",
						"chinese": "地狱深渊，黑暗与寂静吞噬一切。",
						"french": "L'abysse de l'enfer, l'obscurité et le silence ont tout dévoré.",
						"spanish": "El abismo del infierno, la oscuridad y el silencio lo devoraron todo.",
						"vietnamese": "Vực sâu địa ngục, bóng tối và sự tĩnh lặng nuốt chửng mọi thứ.",
						"thai": "ขุมนรก ความมืดและความเงียบกลืนกินทุกสิ่ง",
						"hindi": "नर्क का पाताल, अंधकार और सन्नाटा सब कुछ निगल गया।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "여기가… 지옥의 입구인가.",
						"english": "Is this... the entrance to hell?",
						"japanese": "ここが…地獄の入り口なのか。",
						"chinese": "这里是……地狱的入口吗。",
						"french": "Est-ce... l'entrée de l'enfer ?",
						"spanish": "¿Es esto... la entrada al infierno?",
						"vietnamese": "Đây là... lối vào địa ngục sao?",
						"thai": "ที่นี่คือ... ประตูสู่ขุมนรกหรือ",
						"hindi": "क्या यह... नर्क का प्रवेश द्वार है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "soot",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어서 와. 기다리고 있었어.",
						"english": "Welcome. I've been waiting.",
						"japanese": "ようこそ。待っていたよ。",
						"chinese": "欢迎。我一直在等你。",
						"french": "Bienvenue. Je vous attendais.",
						"spanish": "Bienvenidos. Os estaba esperando.",
						"vietnamese": "Hoan nghênh. Ta đã chờ đợi.",
						"thai": "ยินดีต้อนรับ ฉันรออยู่",
						"hindi": "स्वागत है। मैं इंतज़ार कर रहा था।"
					},
					"speaker": "soot"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "soot",
					"content": {
						"korean": "너희는 이곳의 새로운 비극이지.",
						"english": "You are this place's new tragedy.",
						"japanese": "お前たちは、この地の新たな悲劇だ。",
						"chinese": "你们是这里新的悲剧。",
						"french": "Vous êtes la nouvelle tragédie de ce lieu.",
						"spanish": "Sois la nueva tragedia de este lugar.",
						"vietnamese": "Các ngươi là bi kịch mới của nơi này.",
						"thai": "พวกเจ้าคือโศกนาฏกรรมครั้งใหม่ของที่นี่",
						"hindi": "तुम इस जगह की नई त्रासदी हो।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야.",
						"english": "What's that supposed to mean?",
						"japanese": "何を言ってるんだ。",
						"chinese": "你是什么意思？",
						"french": "Qu'est-ce que tu racontes ?",
						"spanish": "¿Qué es eso?",
						"vietnamese": "Ngươi nói gì vậy?",
						"thai": "พูดอะไรน่ะ",
						"hindi": "क्या मतलब है?"
					}
				},
				{
					"type": "speech",
					"speaker": "soot",
					"content": {
						"korean": "예언은 언제나 반복되거든.",
						"english": "The prophecy always repeats.",
						"japanese": "預言はいつだって繰り返されるものだから。",
						"chinese": "预言总是会重复的。",
						"french": "La prophétie se répète toujours.",
						"spanish": "La profecía siempre se repite.",
						"vietnamese": "Lời tiên tri luôn lặp lại mà.",
						"thai": "คำพยากรณ์มันซ้ำรอยเสมอ",
						"hindi": "भविष्यवाणी हमेशा दोहराई जाती है।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "soot",
					"spot": [
						2,
						2
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "soot",
					"content": {
						"korean": "너희의 발걸음은 이미 예정되어 있었어.",
						"english": "Your steps were already predetermined.",
						"japanese": "君たちの足取りは、すでに定められていた。",
						"chinese": "你们的脚步早已注定。",
						"french": "Vos pas étaient déjà tracés.",
						"spanish": "Vuestros pasos ya estaban predestinados.",
						"vietnamese": "Bước chân của các ngươi đã được định sẵn.",
						"thai": "ก้าวเดินของพวกเจ้าถูกกำหนดไว้แล้ว",
						"hindi": "तुम्हारे कदम पहले से तय थे।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "예정이라니?",
						"english": "Predetermined?",
						"japanese": "定められているだと？",
						"chinese": "注定？",
						"french": "Tracés ?",
						"spanish": "¿Predestinados?",
						"vietnamese": "Định sẵn sao?",
						"thai": "กำหนดไว้แล้วหรือ?",
						"hindi": "तय थे?"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "soot",
					"content": {
						"korean": "이곳에선 모든 것이 다시 시작되지. 승리도, 패배도.",
						"english": "Here, everything begins anew. Victory, and defeat.",
						"japanese": "ここでは、すべてが再び始まる。勝利も、敗北も。",
						"chinese": "在这里，一切都将重新开始。胜利，亦或是失败。",
						"french": "Ici, tout recommence. La victoire, comme la défaite.",
						"spanish": "Aquí, todo vuelve a empezar. La victoria, y la derrota.",
						"vietnamese": "Ở đây, mọi thứ đều bắt đầu lại. Thắng lợi, và thất bại.",
						"thai": "ที่นี่ ทุกสิ่งเริ่มต้นใหม่อีกครั้ง ทั้งชัยชนะและความพ่ายแพ้",
						"hindi": "यहाँ सब कुछ फिर से शुरू होता है। जीत भी, हार भी।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그게 무슨…",
						"english": "What do you mean...",
						"japanese": "それは一体…",
						"chinese": "那是什么意思…",
						"french": "Qu'est-ce que...",
						"spanish": "¿Qué quieres decir...?",
						"vietnamese": "Ý ngươi là gì…",
						"thai": "หมายความว่ายังไง…",
						"hindi": "उसका मतलब क्या है..."
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "soot",
					"content": {
						"korean": "곧 알게 될 거야. 이 모든 게 익숙하게 느껴질 때.",
						"english": "You'll soon understand. When all of this feels familiar.",
						"japanese": "すぐに分かるだろう。このすべてが、慣れ親しんだものと感じる時が来れば。",
						"chinese": "很快你就会明白。当这一切都变得熟悉的时候。",
						"french": "Tu comprendras bientôt. Quand tout cela te semblera familier.",
						"spanish": "Pronto lo sabrás. Cuando todo esto te resulte familiar.",
						"vietnamese": "Ngươi sẽ sớm biết thôi. Khi tất cả những điều này trở nên quen thuộc.",
						"thai": "ไม่ช้าเจ้าก็จะรู้ เมื่อทุกสิ่งนี้รู้สึกคุ้นเคย",
						"hindi": "तुम्हें जल्द ही पता चल जाएगा। जब यह सब तुम्हें परिचित लगने लगेगा।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						1
					],
					"speaker": "soot"
				},
				{
					"type": "speech",
					"content": {
						"korean": "너희는 이미 많은 것을 잃었지?",
						"english": "You've already lost much, haven't you?",
						"japanese": "君たちはすでに多くのものを失ったのだろう？",
						"chinese": "你们已经失去了很多，不是吗？",
						"french": "Vous avez déjà beaucoup perdu, n'est-ce pas ?",
						"spanish": "Ya habéis perdido mucho, ¿verdad?",
						"vietnamese": "Các ngươi đã mất mát nhiều rồi, phải không?",
						"thai": "พวกเจ้าสูญเสียไปมากแล้วไม่ใช่หรือ?",
						"hindi": "तुम पहले ही बहुत कुछ खो चुके हो, है ना?"
					},
					"speaker": "soot",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그게 너랑 무슨 상관이야.",
						"english": "What's that got to do with you?",
						"japanese": "それが君とどう関係があるんだ。",
						"chinese": "这与你有什么关系。",
						"french": "Qu'est-ce que ça peut te faire ?",
						"spanish": "¿Qué te importa eso?",
						"vietnamese": "Điều đó liên quan gì đến ngươi.",
						"thai": "แล้วมันเกี่ยวอะไรกับเจ้า?",
						"hindi": "इसका तुमसे क्या लेना-देना है।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "이곳에선 그 상실감조차도 반복될 뿐이야.",
						"english": "Here, even that sense of loss will only repeat.",
						"japanese": "ここでは、その喪失感さえも繰り返されるだけだ。",
						"chinese": "在这里，连那份失落感都只会重复。",
						"french": "Ici, même ce sentiment de perte ne fera que se répéter.",
						"spanish": "Aquí, incluso esa sensación de pérdida solo se repetirá.",
						"vietnamese": "Ở đây, ngay cả cảm giác mất mát đó cũng sẽ chỉ lặp lại.",
						"thai": "ที่นี่ แม้แต่ความรู้สึกสูญเสียนั้นก็จะวนซ้ำเท่านั้น",
						"hindi": "यहाँ, वह हानि का अहसास भी बस दोहराया जाएगा।"
					},
					"speaker": "soot",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "반복… 계속 그 얘기만 하는군.",
						"english": "Repeat... You keep talking about that.",
						"japanese": "繰り返し…そればかり話しているな。",
						"chinese": "重复…你一直在说那个。",
						"french": "Répéter... Tu n'arrêtes pas de parler de ça.",
						"spanish": "Repetición... Solo hablas de eso.",
						"vietnamese": "Lặp lại… Ngươi cứ nói mãi về điều đó.",
						"thai": "วนซ้ำ… เจ้าเอาแต่พูดถึงเรื่องนั้น",
						"hindi": "दोहराना... तुम बस उसी के बारे में बात करते रहते हो।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "곧 스스로가 어떤 굴레에 갇혔는지 깨닫게 될 거야.",
						"english": "Soon, you'll realize what kind of cycle you're trapped in.",
						"japanese": "やがて、君たち自身がどのような輪廻に囚われているのかを悟るだろう。",
						"chinese": "很快，你就会意识到自己被困在了怎样的循环中。",
						"french": "Bientôt, tu réaliseras dans quel cycle tu es piégé.",
						"spanish": "Pronto te darás cuenta en qué tipo de ciclo estás atrapado.",
						"vietnamese": "Chẳng bao lâu, ngươi sẽ nhận ra mình đang bị mắc kẹt trong vòng lặp nào.",
						"thai": "ไม่ช้าเจ้าก็จะตระหนักว่าตัวเองติดอยู่ในวังวนแบบไหน",
						"hindi": "जल्द ही, तुम्हें एहसास होगा कि तुम किस बंधन में फंसे हो।"
					},
					"speaker": "soot",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						2
					],
					"speaker": "soot",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 이상은… 돌아갈 수 없어.",
						"english": "Beyond this point... there's no turning back.",
						"japanese": "これ以上は…もう戻れない。",
						"chinese": "到此为止…已无法回头。",
						"french": "Au-delà de ça… on ne peut plus faire marche arrière.",
						"spanish": "Más allá de esto… no hay vuelta atrás.",
						"vietnamese": "Hơn thế nữa… không thể quay lại được.",
						"thai": "เกินกว่านี้...กลับไปไม่ได้แล้ว",
						"hindi": "इससे आगे… वापस नहीं जा सकते।"
					},
					"speaker": "soot",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "우린 멈추지 않아.",
						"english": "We won't stop.",
						"japanese": "我々は止まらない。",
						"chinese": "我们不会停止。",
						"french": "Nous ne nous arrêterons pas.",
						"spanish": "No nos detendremos.",
						"vietnamese": "Chúng ta sẽ không dừng lại.",
						"thai": "เราจะไม่หยุด",
						"hindi": "हम रुकेंगे नहीं।"
					},
					"type": "speech"
				},
				{
					"speaker": "soot",
					"content": {
						"korean": "그 강한 의지마저도, 이곳의 일부가 될 뿐.",
						"english": "Even that strong will shall merely become part of this place.",
						"japanese": "その強き意志さえも、この場所の一部となるだけだ。",
						"chinese": "即使是那坚定的意志，也终将成为此地的一部分。",
						"french": "Même cette forte volonté ne fera que devenir une partie de ce lieu.",
						"spanish": "Incluso esa fuerte voluntad, solo será parte de este lugar.",
						"vietnamese": "Ngay cả ý chí mạnh mẽ đó cũng sẽ chỉ trở thành một phần của nơi đây.",
						"thai": "แม้แต่น้ำใจที่แข็งแกร่งนั้น ก็จะเป็นเพียงส่วนหนึ่งของที่นี่",
						"hindi": "वह प्रबल इच्छा भी, बस इस स्थान का एक हिस्सा बन जाएगी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "뭐?",
						"english": "What?",
						"japanese": "何？",
						"chinese": "什么？",
						"french": "Quoi ?",
						"spanish": "¿Qué?",
						"vietnamese": "Gì?",
						"thai": "อะไรนะ?",
						"hindi": "क्या?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "곧 알게 돼. 모든 것이 얼마나 허무한지.",
						"english": "You'll soon realize. How futile everything is.",
						"japanese": "すぐにわかる。全てがいかに虚しいか。",
						"chinese": "你很快就会明白。所有一切是多么的虚无。",
						"french": "Tu comprendras bientôt. À quel point tout est vain.",
						"spanish": "Pronto lo sabrás. Lo vacío que es todo.",
						"vietnamese": "Ngươi sẽ sớm biết thôi. Mọi thứ vô nghĩa đến nhường nào.",
						"thai": "เจ้าจะรู้ในไม่ช้า ว่าทุกสิ่งไร้ค่าเพียงใด",
						"hindi": "तुम्हें जल्द ही पता चलेगा। सब कुछ कितना व्यर्थ है।"
					},
					"speaker": "soot",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "지옥의 어둠이 그들을 다시 삼켰다.",
						"english": "The darkness of hell swallowed them once more.",
						"japanese": "地獄の闇が彼らを再び飲み込んだ。",
						"chinese": "地狱的黑暗再次吞噬了他们。",
						"french": "L'obscurité de l'enfer les engloutit à nouveau.",
						"spanish": "La oscuridad del infierno los devoró una vez más.",
						"vietnamese": "Bóng tối địa ngục lại nuốt chửng họ một lần nữa.",
						"thai": "ความมืดมิดจากขุมนรกกลืนกินพวกเขาอีกครั้ง",
						"hindi": "नर्क के अँधेरे ने उन्हें फिर से निगल लिया।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "보잘것없는 것들. 또다시 도전해 보거라.",
						"english": "Insignificant beings. Challenge me again.",
						"japanese": "取るに足らない者ども。また挑んでみよ。",
						"chinese": "微不足道的家伙。再来挑战吧。",
						"french": "Êtres insignifiants. Relevez le défi à nouveau.",
						"spanish": "Seres insignificantes. Desafíame de nuevo.",
						"vietnamese": "Những kẻ hèn mọn. Thử thách ta lần nữa đi.",
						"thai": "พวกไร้ค่า. มาท้าทายข้าอีกครั้งสิ.",
						"hindi": "तुच्छ प्राणी। फिर से चुनौती दो।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 다시… 반드시…",
						"english": "Damn it… Again… I must…",
						"japanese": "くそ… また… 必ず…",
						"chinese": "该死… 再次… 一定要…",
						"french": "Maudits… Encore… Il le faut…",
						"spanish": "Maldita sea… De nuevo… Debo…",
						"vietnamese": "Chết tiệt… Lại nữa… Nhất định phải…",
						"thai": "ให้ตายสิ… อีกครั้ง… ต้องให้ได้…",
						"hindi": "लानत है… फिर से… निश्चित रूप से…"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "포기하지 않아!",
						"english": "I won't give up!",
						"japanese": "諦めない！",
						"chinese": "我不会放弃！",
						"french": "Je n'abandonnerai pas !",
						"spanish": "¡No me rendiré!",
						"vietnamese": "Không bỏ cuộc!",
						"thai": "ฉันไม่ยอมแพ้!",
						"hindi": "मैं हार नहीं मानूँगा!"
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "큭… 이겼다고 생각하나? …어리석은…",
						"english": "Hmph… Do you think you've won? …Foolish…",
						"japanese": "クク… 勝ったとでも？ …愚かな…",
						"chinese": "哼… 以为你赢了吗？ …愚蠢…",
						"french": "Hmph… Tu crois avoir gagné ? …Insensé…",
						"spanish": "Hmph… ¿Crees que has ganado? …Estúpido…",
						"vietnamese": "Hừm… Ngươi nghĩ mình đã thắng sao? …Ngu ngốc…",
						"thai": "หึ… คิดว่าชนะแล้วรึ? …โง่เขลา…",
						"hindi": "हम्फ… क्या तुम्हें लगता है कि तुम जीत गए हो? …मूर्ख…"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "끝났다!",
						"english": "It's over!",
						"japanese": "終わった！",
						"chinese": "结束了！",
						"french": "C'est fini !",
						"spanish": "¡Se acabó!",
						"vietnamese": "Kết thúc rồi!",
						"thai": "จบแล้ว!",
						"hindi": "खत्म हो गया!"
					},
					"emotion": "happy"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…근데 왜… 이 익숙한 느낌은 뭐지?",
						"english": "…But why… What is this familiar feeling?",
						"japanese": "…だがなぜ… この既視感はなんだ？",
						"chinese": "…但为什么… 这种熟悉的感觉是什么？",
						"french": "…Mais pourquoi… Qu'est-ce que ce sentiment familier ?",
						"spanish": "…Pero por qué… ¿Qué es esta sensación familiar?",
						"vietnamese": "…Nhưng sao… Cảm giác quen thuộc này là gì?",
						"thai": "…แต่ทำไม… ความรู้สึกคุ้นเคยนี้คืออะไร?",
						"hindi": "…लेकिन क्यों… यह जानी-पहचानी भावना क्या है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그들의 발걸음은 다시 시작점으로 돌아온 듯했다. 끝나지 않을 비극의 시작이었다.",
						"english": "Their footsteps seemed to return to the starting point. It was the beginning of an endless tragedy.",
						"japanese": "彼らの足取りは再び振り出しに戻ったようだった。終わることのない悲劇の始まりだった。",
						"chinese": "他们的脚步似乎又回到了起点。那是一场无尽悲剧的开始。",
						"french": "Leurs pas semblaient revenir au point de départ. C'était le début d'une tragédie sans fin.",
						"spanish": "Sus pasos parecían volver al punto de partida. Era el comienzo de una tragedia interminable.",
						"vietnamese": "Bước chân của họ dường như quay trở lại điểm xuất phát. Đó là khởi đầu của một bi kịch không hồi kết.",
						"thai": "ฝีเท้าของพวกเขาดูเหมือนจะกลับไปยังจุดเริ่มต้น มันคือจุดเริ่มต้นของโศกนาฏกรรมที่ไม่มีวันสิ้นสุด",
						"hindi": "उनके कदम फिर से शुरुआती बिंदु पर लौट आए। यह एक अंतहीन त्रासदी की शुरुआत थी।"
					},
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 길을 막아섰다. 알 수 없는 위압감.",
						"english": "A colossal shadow blocked the path. An unknown oppressive presence.",
						"japanese": "巨大な影が道を塞いだ。未知の威圧感。",
						"chinese": "巨大的黑影挡住了去路。一种莫名的压迫感。",
						"french": "Une ombre colossale bloquait le chemin. Une pression inconnue.",
						"spanish": "Una sombra colosal bloqueó el camino. Una opresión desconocida.",
						"vietnamese": "Một bóng đen khổng lồ chặn đường. Cảm giác áp lực không thể lí giải.",
						"thai": "เงาขนาดใหญ่ขวางทาง ความรู้สึกกดดันที่ไม่อาจเข้าใจได้",
						"hindi": "एक विशाल छाया ने रास्ता रोक दिया। एक अज्ञात दबाव।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "침입자들이 감히… 이곳을 더럽히는가.",
						"english": "Intruders dare... defile this place?",
						"japanese": "侵入者どもが…この地を汚すのか。",
						"chinese": "入侵者竟敢…玷污此地？",
						"french": "Des intrus osent… souiller cet endroit ?",
						"spanish": "¿Los intrusos se atreven… a profanar este lugar?",
						"vietnamese": "Kẻ xâm nhập dám… làm ô uế nơi đây sao?",
						"thai": "ผู้บุกรุกกล้าดี…มาแปดเปื้อนที่นี่หรือ",
						"hindi": "घुसपैठिये हिम्मत करते हैं… इस जगह को अपवित्र करने की?"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "네가… 이곳의 지배자인가.",
						"english": "Are you… the ruler of this place?",
						"japanese": "お前が…この地の支配者か。",
						"chinese": "你是…此地的主宰吗？",
						"french": "Es-tu… le maître de ce lieu ?",
						"spanish": "¿Eres tú… el señor de este lugar?",
						"vietnamese": "Ngươi… là kẻ thống trị nơi đây sao?",
						"thai": "เจ้าคือ…ผู้ปกครองที่นี่หรือ",
						"hindi": "क्या तुम… इस स्थान के शासक हो?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "네놈들의 미약한 저항은, 결국 이 순환을 반복할 뿐.",
						"english": "Your feeble resistance will only repeat this cycle.",
						"japanese": "貴様らの微弱な抵抗は、結局この循環を繰り返すだけだ。",
						"chinese": "你们微弱的反抗，最终只会重复这个循环。",
						"french": "Votre faible résistance ne fera que répéter ce cycle.",
						"spanish": "Vuestra débil resistencia, solo repetirá este ciclo.",
						"vietnamese": "Sự kháng cự yếu ớt của các ngươi, cuối cùng cũng chỉ lặp lại vòng tuần hoàn này mà thôi.",
						"thai": "การต่อต้านอันอ่อนแอของพวกเจ้า ก็จะวนเวียนซ้ำรอยเดิมเท่านั้น",
						"hindi": "तुम्हारा दुर्बल प्रतिरोध, अंततः इस चक्र को दोहराएगा मात्र।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "soot"
				},
				{
					"speaker": "soot",
					"content": {
						"korean": "잊지 마. 승리도, 패배도… 모두 시작일 뿐.",
						"english": "Don't forget. Victory, defeat... all are just beginnings.",
						"japanese": "忘れるな。勝利も、敗北も…全ては始まりに過ぎない。",
						"chinese": "别忘了。胜利也好，失败也罢…都只是开始。",
						"french": "N'oublie pas. Victoire, défaite… tout n'est qu'un début.",
						"spanish": "No olvides. Victoria, derrota… todo es solo un comienzo.",
						"vietnamese": "Đừng quên. Chiến thắng cũng như thất bại… đều chỉ là khởi đầu.",
						"thai": "อย่าลืม. ชัยชนะหรือความพ่ายแพ้…ล้วนเป็นเพียงจุดเริ่มต้น",
						"hindi": "मत भूलो। विजय भी, पराजय भी… सब बस एक शुरुआत है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"duration_ms": 400,
					"type": "direction",
					"direction": "down",
					"speaker": "soot",
					"action": "exit"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "무슨 말도 안 되는 소리야!",
						"english": "What nonsense!",
						"japanese": "何を言ってるんだ！",
						"chinese": "你在说什么胡话！",
						"french": "Qu'est-ce que c'est que ces bêtises !",
						"spanish": "¡Qué tontería!",
						"vietnamese": "Thật là vô lý!",
						"thai": "ไร้สาระอะไรกัน!",
						"hindi": "यह क्या बकवास है!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"지옥의 가장 깊은 심연. 어둠과 정적이 모든 것을 집어삼킨다.",
			"과거의 업보가 그림자처럼 드리워진 폐허만이 끝없이 펼쳐진다.",
			"이곳은 모든 것이 멈춘 곳. 혹은 영원히 반복되는 곳.",
			"잊혀진 예언의 입구에서, '그을음'이라 불리는 자가 기다리고 있었다."
		],
		"english": [
			"The deepest abyss of hell. Darkness and silence swallow everything.",
			"Only ruins, where past karma casts a shadow, stretch endlessly.",
			"This is where everything stops. Or where it repeats endlessly.",
			"At the entrance of a forgotten prophecy, one called 'Soot' waited."
		],
		"japanese": [
			"地獄の最も深い深淵。闇と静寂が全てを飲み込む。",
			"過去の業が影のように覆い被さる廃墟だけが果てしなく広がる。",
			"ここは全てが止まった場所。あるいは永遠に繰り返される場所。",
			"忘れ去られた預言の入り口で、「煤（すす）」と呼ばれる者が待っていた。"
		],
		"chinese": [
			"地狱最深处的深渊。黑暗与寂静吞噬一切。",
			"唯有过去业障如影随形的废墟无尽延伸。",
			"这里是万物停滞之地。亦或是永恒轮回之所。",
			"在被遗忘的预言入口处，一个名为“煤灰”的人正在等候。"
		],
		"french": [
			"Le plus profond abysse de l'enfer. L'obscurité et le silence dévorent tout.",
			"Seules des ruines, où le karma passé projette son ombre, s'étendent à l'infini.",
			"C'est là que tout s'arrête. Ou là où tout se répète éternellement.",
			"À l'entrée d'une prophétie oubliée, celui qu'on appelait « Suie » attendait."
		],
		"spanish": [
			"El abismo más profundo del infierno. La oscuridad y el silencio lo devoran todo.",
			"Solo ruinas, donde el karma pasado proyecta su sombra, se extienden sin fin.",
			"Este es el lugar donde todo se detiene. O donde se repite eternamente.",
			"En la entrada de una profecía olvidada, uno llamado 'Hollín' esperaba."
		],
		"vietnamese": [
			"Vực sâu nhất của địa ngục. Bóng tối và sự tĩnh lặng nuốt chửng mọi thứ.",
			"Chỉ có những tàn tích, nơi nghiệp chướng quá khứ phủ bóng, trải dài bất tận.",
			"Đây là nơi mọi thứ ngừng lại. Hoặc là nơi lặp đi lặp lại mãi mãi.",
			"Tại lối vào của một lời tiên tri bị lãng quên, kẻ được gọi là 'Bụi Than' đã chờ đợi."
		],
		"thai": [
			"ขุมนรกที่ลึกที่สุด ความมืดและความเงียบกลืนกินทุกสิ่ง",
			"มีเพียงซากปรักหักพังที่บาปกรรมในอดีตทอดเงา ปกคลุมอยู่ไม่สิ้นสุด",
			"ที่นี่คือที่ที่ทุกสิ่งหยุดนิ่ง หรือไม่ก็เป็นที่ที่วนเวียนซ้ำไปชั่วนิรันดร์",
			"ที่ทางเข้าคำพยากรณ์ที่ถูกลืมเลือน ผู้ที่ถูกเรียกว่า 'เถ้าถ่าน' กำลังรออยู่"
		],
		"hindi": [
			"नर्क का सबसे गहरा पाताल। अंधकार और सन्नाटा सब कुछ निगल जाता है।",
			"केवल खंडहर, जहां अतीत का कर्म एक परछाई की तरह मंडराता है, अंतहीन रूप से फैले हुए हैं।",
			"यह वह जगह है जहाँ सब कुछ रुक जाता है। या जहाँ यह अनंत काल तक दोहराया जाता है।",
			"एक भूली हुई भविष्यवाणी के प्रवेश द्वार पर, 'कालिमा' नामक एक व्यक्ति इंतजार कर रहा था।"
		]
	}
} as const;
