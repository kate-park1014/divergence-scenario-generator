export const scenario_snowy_fenrir_57_02 = {
	"scenario_id": "snowy_fenrir_57_02",
	"order": 2,
	"act": "rising",
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
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "늑대의 동공이 가라앉은 골. 어둠이 모든 것을 집어삼킬 듯 고요했다.",
						"english": "The wolf's pupil, the subsided ravine. The darkness was so still it seemed to swallow everything.",
						"japanese": "狼の瞳が沈んだ谷。闇はすべてを飲み込むように静かだった。",
						"chinese": "狼的瞳孔，沉寂的山谷。黑暗寂静得仿佛要吞噬一切。",
						"french": "La pupille du loup, la gorge apaisée. L'obscurité était si calme qu'elle semblait tout engloutir.",
						"spanish": "La pupila del lobo, el barranco apaciguado. La oscuridad era tan silenciosa que parecía tragarse todo.",
						"vietnamese": "Đồng tử của sói, khe núi chìm lắng. Bóng tối tĩnh lặng như nuốt chửng mọi thứ.",
						"thai": "นัยน์ตาของหมาป่า หุบเขาที่สงบลง ความมืดมิดเงียบสงบราวกับจะกลืนกินทุกสิ่ง",
						"hindi": "भेड़िये की पुतली, शांत घाटी। अँधेरा इतना शांत था कि मानो सब कुछ निगल जाएगा।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…끝이 보이는 것 같아.",
						"english": "...It feels like the end is in sight.",
						"japanese": "…終わりが見える気がする。",
						"chinese": "……好像能看到尽头了。",
						"french": "...On dirait que la fin est en vue.",
						"spanish": "...Parece que el final está a la vista.",
						"vietnamese": "...Dường như đã thấy điểm cuối.",
						"thai": "...ดูเหมือนจะเห็นจุดจบแล้ว",
						"hindi": "...लगता है अंत नज़दीक है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
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
						"korean": "이 어둠은… 정말 아무것도 없네요.",
						"english": "This darkness... there's really nothing in it.",
						"japanese": "この暗闇は…本当に何もないのですね。",
						"chinese": "这片黑暗……真的什么都没有。",
						"french": "Cette obscurité... il n'y a vraiment rien.",
						"spanish": "Esta oscuridad... realmente no hay nada.",
						"vietnamese": "Bóng tối này... thật sự chẳng có gì cả.",
						"thai": "ความมืดนี้... ไม่มีอะไรเลยจริงๆ",
						"hindi": "इस अँधेरे में... सच में कुछ भी नहीं है।"
					},
					"type": "speech",
					"speaker": "inka",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "응. 그래서 더 무서운 거야.",
						"english": "Yes. That's why it's even scarier.",
						"japanese": "うん。だからこそ、もっと怖いんだ。",
						"chinese": "嗯。所以才更可怕。",
						"french": "Oui. C'est pour ça que c'est encore plus effrayant.",
						"spanish": "Sí. Por eso da más miedo.",
						"vietnamese": "Ừ. Vì vậy mà càng đáng sợ hơn.",
						"thai": "ใช่ นั่นแหละคือสิ่งที่น่ากลัวกว่า",
						"hindi": "हाँ। इसलिए यह और भी डरावना है।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "inka"
				},
				{
					"type": "speech",
					"content": {
						"korean": "하지만 저 안에 있는 괴물들도… 누군가의 고통이었겠죠.",
						"english": "But even the monsters in there... they must have been someone's pain.",
						"japanese": "でも、あの中の怪物たちも…誰かの苦痛だったのでしょう。",
						"chinese": "但是里面的那些怪物……也曾是某个人的痛苦吧。",
						"french": "Mais même les monstres là-dedans... ils devaient être la douleur de quelqu'un.",
						"spanish": "Pero incluso los monstruos de allí... debieron ser el dolor de alguien.",
						"vietnamese": "Nhưng ngay cả những con quái vật bên trong... chắc hẳn cũng là nỗi đau của ai đó.",
						"thai": "แต่แม้แต่สัตว์ประหลาดที่อยู่ในนั้น... ก็คงเคยเป็นความเจ็บปวดของใครบางคน",
						"hindi": "लेकिन अंदर के राक्षस भी... किसी का दर्द रहे होंगे।"
					},
					"speaker": "inka",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…고통이라니.",
						"english": "...Pain, you say?",
						"japanese": "…苦痛、だと。",
						"chinese": "……痛苦？",
						"french": "...La douleur, dites-vous ?",
						"spanish": "...¿Dolor, dices?",
						"vietnamese": "...Nỗi đau sao.",
						"thai": "...ความเจ็บปวดเหรอ",
						"hindi": "...दर्द, कहते हो?"
					},
					"speaker": "character_2",
					"emotion": "base"
				},
				{
					"speaker": "inka",
					"emotion": "sad",
					"content": {
						"korean": "그냥… 다 미워하기엔, 마음이 너무 아파요.",
						"english": "My heart aches too much to just… hate everything.",
						"japanese": "ただ…全てを憎むには、心が痛みすぎます。",
						"chinese": "只是……要恨所有的一切，我的心太痛了。",
						"french": "Mon cœur souffre trop pour… juste tout haïr.",
						"spanish": "Me duele demasiado el corazón como para… odiarlo todo.",
						"vietnamese": "Chỉ là… để ghét bỏ tất cả, trái tim tôi đau đớn quá.",
						"thai": "แค่… จะให้เกลียดทุกสิ่ง จิตใจก็เจ็บปวดเหลือเกิน",
						"hindi": "बस… सब कुछ नफरत करने के लिए, मेरा दिल बहुत दुखता है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "inka"
				},
				{
					"speaker": "inka",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "미워할 수도 없는 적은… 어떻게 대해야 할까요.",
						"english": "How should I face an enemy I can't even hate?",
						"japanese": "憎むことすらできない敵には…どう向き合えばいいのでしょう。",
						"chinese": "连恨都恨不起来的敌人……该如何面对呢？",
						"french": "Comment devrais-je affronter un ennemi que je ne peux même pas haïr ?",
						"spanish": "¿Cómo debo enfrentar a un enemigo que ni siquiera puedo odiar?",
						"vietnamese": "Với kẻ thù mà không thể ghét bỏ… thì phải đối xử thế nào đây?",
						"thai": "ศัตรูที่แม้แต่จะเกลียดก็ยังทำไม่ได้… ควรจะรับมืออย่างไรดี",
						"hindi": "उस दुश्मन का सामना कैसे करूं जिससे मैं नफरत भी नहीं कर सकता?"
					}
				},
				{
					"speaker": "character_3",
					"emotion": "angry",
					"content": {
						"korean": "…그걸 왜 고민해. 그냥 쓰러뜨리면 돼.",
						"english": "…Why are you agonizing over that? Just defeat them.",
						"japanese": "…何を悩むことがある。ただ倒せばいい。",
						"chinese": "……为什么要烦恼那个。打倒他们就行了。",
						"french": "…Pourquoi t'inquiètes-tu pour ça ? Contente-toi de les vaincre.",
						"spanish": "…¿Por qué te preocupas por eso? Solo derrótalos.",
						"vietnamese": "…Có gì mà phải suy nghĩ. Cứ đánh bại họ là được.",
						"thai": "…จะไปกังวลอะไร แค่จัดการโค่นลงก็พอ",
						"hindi": "…उस पर क्यों सोच रहे हो। बस उन्हें हरा दो।"
					},
					"type": "speech"
				},
				{
					"speaker": "inka",
					"emotion": "sad",
					"content": {
						"korean": "하지만 그들 역시 무언가에 휩쓸린 것일 뿐이라면요.",
						"english": "But what if they, too, were merely swept up in something?",
						"japanese": "しかし彼らもまた、何かに巻き込まれただけだとしたら？",
						"chinese": "但如果他们也只是被卷入某种事物呢？",
						"french": "Mais s'ils n'étaient eux aussi que de simples victimes d'une force supérieure ?",
						"spanish": "¿Pero y si ellos también solo fueron arrastrados por algo?",
						"vietnamese": "Nhưng nếu họ cũng chỉ là bị cuốn vào một điều gì đó thôi thì sao?",
						"thai": "แต่ถ้าพวกเขาเองก็เป็นแค่คนที่ถูกพัดพาไปกับอะไรบางอย่างล่ะ",
						"hindi": "लेकिन क्या होगा अगर वे भी बस किसी चीज में फंस गए थे?"
					},
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "inka",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "inka",
					"emotion": "base",
					"content": {
						"korean": "미워하지 않고 마주하는 마음. 그게 더 단단할지도 몰라요.",
						"english": "A heart that faces without hatred. That might be even stronger.",
						"japanese": "憎まずに向き合う心。それがもっと強いのかもしれない。",
						"chinese": "不带恨意地面对的心。那也许会更坚韧。",
						"french": "Un cœur qui fait face sans haine. Cela pourrait être encore plus fort.",
						"spanish": "Un corazón que enfrenta sin odio. Eso podría ser aún más fuerte.",
						"vietnamese": "Trái tim đối diện mà không ghét bỏ. Điều đó có thể còn kiên cường hơn.",
						"thai": "จิตใจที่เผชิญหน้าโดยไม่เกลียดชัง นั่นอาจจะแข็งแกร่งกว่า",
						"hindi": "एक ऐसा दिल जो बिना नफरत के सामना करता है। वह शायद और भी मजबूत होगा।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "쉽지 않을 거야.",
						"english": "It won't be easy.",
						"japanese": "簡単ではないだろう。",
						"chinese": "不会容易的。",
						"french": "Ce ne sera pas facile.",
						"spanish": "No será fácil.",
						"vietnamese": "Sẽ không dễ dàng đâu.",
						"thai": "มันคงไม่ง่าย",
						"hindi": "यह आसान नहीं होगा।"
					},
					"speaker": "character_4",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "알아요. 그래도… 노력해야죠.",
						"english": "I know. But… I have to try.",
						"japanese": "分かってる。それでも…努力しないと。",
						"chinese": "我知道。但是……我必须努力。",
						"french": "Je sais. Mais… je dois essayer.",
						"spanish": "Lo sé. Pero… tengo que intentarlo.",
						"vietnamese": "Tôi biết. Nhưng… tôi phải cố gắng.",
						"thai": "ฉันรู้ แต่… ก็ต้องพยายาม",
						"hindi": "मुझे पता है। लेकिन… मुझे कोशिश करनी होगी।"
					},
					"type": "speech",
					"speaker": "inka",
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "정체 모를 힘에 휩쓸려, 일행은 쓰러졌다.",
						"english": "Swept away by an unknown power, the party fell.",
						"japanese": "正体不明の力に巻き込まれ、一行は倒れた。",
						"chinese": "被不明力量卷入，一行人倒下了。",
						"french": "Emportée par une force inconnue, l'équipe est tombée.",
						"spanish": "Arrastrados por una fuerza desconocida, el grupo cayó.",
						"vietnamese": "Bị cuốn đi bởi một sức mạnh không rõ, đoàn người đã ngã xuống.",
						"thai": "คณะพรรคถูกพัดพาไปโดยพลังที่ไม่รู้จัก และล้มลง",
						"hindi": "एक अज्ञात शक्ति द्वारा बहा ले जाने पर, दल गिर गया।"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "고통을 이해한다고? 결국 너희도 나약할 뿐이다.",
						"english": "You understand pain? In the end, you too are merely weak.",
						"japanese": "苦痛を理解するだと？結局お前たちもただ弱いだけだ。",
						"chinese": "理解痛苦？最终你们也不过是软弱罢了。",
						"french": "Vous comprenez la douleur ? Au final, vous n'êtes aussi que faibles.",
						"spanish": "¿Comprendes el dolor? Al final, vosotros también sois simplemente débiles.",
						"vietnamese": "Hiểu được nỗi đau ư? Rốt cuộc các ngươi cũng chỉ yếu ớt mà thôi.",
						"thai": "เข้าใจความเจ็บปวดงั้นหรือ? สุดท้ายพวกเจ้าก็แค่คนอ่อนแอเท่านั้น",
						"hindi": "दर्द को समझते हो? अंत में, तुम भी केवल कमजोर हो।"
					},
					"type": "speech"
				},
				{
					"speaker": "inka",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…아직, 끝이 아니야. 당신의 아픔을 외면하지 않을 거야.",
						"english": "...It's not over yet. I won't turn away from your pain.",
						"japanese": "…まだ、終わりじゃない。あなたの苦痛から目を背けない。",
						"chinese": "…还没结束。我不会对你的痛苦视而不见。",
						"french": "...Ce n'est pas encore fini. Je ne détournerai pas les yeux de votre douleur.",
						"spanish": "...Todavía no ha terminado. No ignoraré tu dolor.",
						"vietnamese": "...Chưa kết thúc đâu. Tôi sẽ không làm ngơ trước nỗi đau của bạn.",
						"thai": "...ยังไม่จบสิ้น ฉันจะไม่หันหลังให้กับความเจ็บปวดของเธอ",
						"hindi": "...अभी खत्म नहीं हुआ है। मैं तुम्हारे दर्द से मुंह नहीं फेरूंगा।"
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "정체 모를 적이 쓰러졌다. 하지만 그 공허는 여전히 남아 있었다.",
						"english": "The unknown foe fell. Yet, the void remained.",
						"japanese": "正体不明の敵は倒れた。だが、その虚無は依然として残っていた。",
						"chinese": "不明之敌倒下了。然而，那虚无依然存在。",
						"french": "L'ennemi inconnu est tombé. Pourtant, le vide subsistait.",
						"spanish": "El enemigo desconocido cayó. Sin embargo, el vacío permaneció.",
						"vietnamese": "Kẻ thù không rõ danh tính đã ngã xuống. Nhưng sự hư vô ấy vẫn còn đó.",
						"thai": "ศัตรูนิรนามล้มลงแล้ว แต่ความว่างเปล่านั้นยังคงอยู่",
						"hindi": "अज्ञात शत्रु गिर गया। फिर भी, वह शून्य बना रहा।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
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
					"content": {
						"korean": "끝이 아니었어… 여전히 아파하는 영혼들이 있어.",
						"english": "It wasn't over... There are still souls in pain.",
						"japanese": "終わりではなかった… 未だ苦しむ魂たちがいる。",
						"chinese": "还没有结束… 依然有痛苦的灵魂。",
						"french": "Ce n'était pas la fin... Il y a encore des âmes en souffrance.",
						"spanish": "No era el final... Aún hay almas sufriendo.",
						"vietnamese": "Chưa phải kết thúc... Vẫn còn những linh hồn đang đau khổ.",
						"thai": "ยังไม่จบสิ้น... ยังคงมีวิญญาณที่เจ็บปวดอยู่",
						"hindi": "यह खत्म नहीं हुआ था... अभी भी दर्द में आत्माएं हैं।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "inka"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…그럼, 어떻게 해야 해?",
						"english": "...So, what should I do?",
						"japanese": "…では、どうすればいい？",
						"chinese": "…那么，我该怎么办？",
						"french": "...Alors, que dois-je faire ?",
						"spanish": "...Entonces, ¿qué debo hacer?",
						"vietnamese": "...Vậy, phải làm sao đây?",
						"thai": "...แล้วฉันควรทำอย่างไรดี?",
						"hindi": "...तो, मुझे क्या करना चाहिए?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "미워할 수 없는 적. 그 연민은, 다음 공허를 향한 발걸음을 재촉했다.",
						"english": "An enemy I couldn't hate. That compassion spurred me towards the next void.",
						"japanese": "憎めぬ敵。その憐憫は、次の虚無へと歩みを速めた。",
						"chinese": "无法憎恨的敌人。那份怜悯，催促着我走向下一个虚无。",
						"french": "Un ennemi que je ne pouvais haïr. Cette compassion me poussa vers le vide suivant.",
						"spanish": "Un enemigo que no podía odiar. Esa compasión aceleró mis pasos hacia el siguiente vacío.",
						"vietnamese": "Kẻ thù không thể ghét. Lòng trắc ẩn ấy thúc giục bước chân hướng về sự hư vô tiếp theo.",
						"thai": "ศัตรูที่ไม่อาจเกลียดชัง ความเห็นอกเห็นใจนั้นเร่งเร้าก้าวเท้าสู่ความว่างเปล่าถัดไป",
						"hindi": "एक ऐसा दुश्मन जिससे मैं नफरत नहीं कर सकता था। उस करुणा ने मुझे अगले शून्य की ओर बढ़ाया।"
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "동공의 가장 깊은 곳. 거대한 그림자가 일행을 기다리고 있었다.",
						"english": "In the deepest part of the pupil. A colossal shadow awaited the party.",
						"japanese": "瞳孔の最も深い場所。巨大な影が一行を待ち受けていた。",
						"chinese": "在瞳孔的最深处。一个巨大的影子正等待着队伍。",
						"french": "Au plus profond de la pupille. Une ombre colossale attendait le groupe.",
						"spanish": "En lo más profundo de la pupila. Una sombra colosal esperaba al grupo.",
						"vietnamese": "Tại nơi sâu nhất của đồng tử. Một cái bóng khổng lồ đang chờ đợi đoàn người.",
						"thai": "ณ ส่วนที่ลึกที่สุดของดวงตา เงาขนาดมหึมากำลังรอคอยคณะเดินทางอยู่",
						"hindi": "पुतली के सबसे गहरे हिस्से में। एक विशाल छाया दल का इंतजार कर रही थी।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…너희가 원하는 것이 무엇이냐.",
						"english": "…What is it that you desire?",
						"japanese": "…お前たちが望むものは何だ。",
						"chinese": "……你们想要的是什么？",
						"french": "…Que désirez-vous ?",
						"spanish": "…¿Qué es lo que deseáis?",
						"vietnamese": "…Điều các ngươi mong muốn là gì?",
						"thai": "…พวกเจ้าต้องการอะไร",
						"hindi": "…तुम्हें क्या चाहिए?"
					}
				},
				{
					"content": {
						"korean": "우리는… 그저 당신을 이해하고 싶을 뿐이에요.",
						"english": "We… merely wish to understand you.",
						"japanese": "私たちは…ただあなたを理解したいだけです。",
						"chinese": "我们……只是想理解您。",
						"french": "Nous… désirons seulement vous comprendre.",
						"spanish": "Nosotros… solo deseamos comprenderte.",
						"vietnamese": "Chúng tôi… chỉ muốn hiểu ngài thôi.",
						"thai": "พวกเรา… แค่อยากจะเข้าใจท่านเท่านั้นเอง",
						"hindi": "हम… बस आपको समझना चाहते हैं।"
					},
					"type": "speech",
					"speaker": "inka",
					"emotion": "sad"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "이해? 가소롭군. 이 공허를, 누가 감히 이해하려 하는가.",
						"english": "Understand? Absurd. Who dares to comprehend this void?",
						"japanese": "理解？愚かだな。この虚無を、誰が理解しようとするのか。",
						"chinese": "理解？可笑。谁敢去理解这虚无？",
						"french": "Comprendre ? Ridicule. Qui ose tenter de comprendre ce vide ?",
						"spanish": "¿Entender? Ridículo. ¿Quién se atreve a comprender este vacío?",
						"vietnamese": "Hiểu ư? Nực cười. Ai dám mưu toan thấu hiểu sự hư vô này?",
						"thai": "เข้าใจงั้นหรือ? น่าหัวร่อสิ้นดี ใครบังอาจพยายามเข้าใจความว่างเปล่านี้?",
						"hindi": "समझना? हास्यास्पद। इस शून्य को समझने की हिम्मत कौन करता है?"
					},
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"늑대의 동공. 잠시 가라앉은 골에서, 숨을 고르는 동행단.",
			"텅 빈 어둠 속에서, 인카는 조용히 질문했다.",
			"미워할 수 없는 적은, 어떻게 마주해야 할까.",
			"그들의 고통을 먼저 헤아리는 따뜻한 시선이, 그 밤을 감쌌다."
		],
		"english": [
			"The wolf's pupil. In the momentarily subsided ravine, the companions caught their breath.",
			"In the empty darkness, Inca quietly asked.",
			"How should one face an enemy they cannot hate?",
			"A warm gaze, first contemplating their pain, enveloped that night."
		],
		"japanese": [
			"狼の瞳。一時的に静まった谷で、同行団は息を整えた。",
			"何もない暗闇の中で、インカは静かに尋ねた。",
			"憎めない敵とは、どう向き合うべきか。",
			"彼らの苦痛を先に慮る温かい視線が、その夜を包んだ。"
		],
		"chinese": [
			"狼的瞳孔。在暂时平静的山谷中，同行者们屏息。",
			"在空洞的黑暗中，印卡轻声问道。",
			"如何面对一个无法憎恨的敌人？",
			"一道首先体恤他们痛苦的温暖目光，笼罩了那个夜晚。"
		],
		"french": [
			"La pupille du loup. Dans la gorge momentanément apaisée, la compagnie reprenait son souffle.",
			"Dans l'obscurité vide, Inca demanda doucement.",
			"Comment affronter un ennemi que l'on ne peut haïr ?",
			"Un regard chaleureux, contemplant d'abord leur douleur, enveloppa cette nuit."
		],
		"spanish": [
			"La pupila del lobo. En el barranco momentáneamente en calma, la comitiva recuperaba el aliento.",
			"En la oscuridad vacía, Inca preguntó en voz baja.",
			"¿Cómo se debe enfrentar a un enemigo al que no se puede odiar?",
			"Una mirada cálida, que primero consideraba su dolor, envolvió aquella noche."
		],
		"vietnamese": [
			"Đồng tử của sói. Trong khe núi tạm lắng, đoàn người lấy lại hơi thở.",
			"Trong bóng tối trống rỗng, Inca lặng lẽ hỏi.",
			"Làm sao để đối mặt với kẻ thù không thể ghét bỏ?",
			"Ánh mắt ấm áp, trước tiên thấu hiểu nỗi đau của họ, bao trùm đêm đó."
		],
		"thai": [
			"นัยน์ตาของหมาป่า ในหุบเขาที่สงบลงชั่วขณะ คณะเดินทางกำลังพักหายใจ",
			"ในความมืดอันว่างเปล่า อินคาถามอย่างเงียบๆ",
			"ควรเผชิญหน้ากับศัตรูที่ไม่อาจเกลียดชังได้อย่างไร?",
			"สายตาอันอบอุ่นที่คำนึงถึงความเจ็บปวดของพวกเขาเป็นอันดับแรก โอบล้อมคืนนั้นไว้"
		],
		"hindi": [
			"भेड़िये की पुतली। क्षण भर के लिए शांत घाटी में, साथी दल ने साँस ली。",
			"खाली अँधेरे में, इनका ने चुपचाप पूछा।",
			"एक ऐसे दुश्मन का सामना कैसे किया जाए जिससे नफरत नहीं की जा सकती?",
			"उनकी पीड़ा को सबसे पहले समझने वाली एक गर्मजोशी भरी नज़र ने उस रात को घेर लिया।"
		]
	}
} as const;
