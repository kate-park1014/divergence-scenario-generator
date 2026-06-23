export const scenario_desert_virescentgale_26_02 = {
	"scenario_id": "desert_virescentgale_26_02",
	"order": 2,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"kemet": {
			"id": "mon_2f8a1701-571b-40b5-92d9-69aa973cef18",
			"name": {
				"korean": "케메트",
				"english": "Kemet",
				"japanese": "ケメト",
				"chinese": "凯麦特",
				"french": "Kemet",
				"spanish": "Kemet",
				"vietnamese": "Kemet",
				"thai": "เคเมต",
				"hindi": "केमेट"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/fd9e93e0-2874-4647-0076-839718949500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8c3f2690-e8a9-44f5-4527-d8f8d4ea2800/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"사막은 끝이 없었다. 모래와 태양만이 전부였다.",
			"길을 잃은 자에게, 모든 표지판은 거짓이었다.",
			"그러나 그는 멈추지 않았다. 아직 믿을 것이 남아있었으니까.",
			"그때, 오래된 그림자 하나가 다가왔다."
		],
		"english": [
			"The desert was endless. Only sand and sun remained.",
			"For the lost, every sign was a lie.",
			"But he didn't stop. Because there was still something left to believe in.",
			"Then, an ancient shadow approached."
		],
		"japanese": [
			"砂漠は果てしなかった。残されたのは砂と太陽だけだった。",
			"道を失った者にとって、すべての道標は偽りだった。",
			"しかし彼は止まらなかった。まだ信じるものが残っていたから。",
			"その時、一つの古い影が近づいてきた。"
		],
		"chinese": [
			"沙漠无边无际。只剩下沙和太阳。",
			"对于迷失者，所有路标都是谎言。",
			"但他没有停下。因为还有值得相信的东西。",
			"那时，一个古老的影子走了过来。"
		],
		"french": [
			"Le désert était infini. Il n'y avait que du sable et le soleil.",
			"Pour ceux qui se sont perdus, chaque panneau était un mensonge.",
			"Mais il ne s'arrêta pas. Car il restait encore quelque chose à croire.",
			"Alors, une ancienne ombre s'approcha."
		],
		"spanish": [
			"El desierto era infinito. Solo arena y sol quedaban.",
			"Para los perdidos, cada señal era una mentira.",
			"Pero no se detuvo. Porque todavía quedaba algo en qué creer.",
			"Entonces, una antigua sombra se acercó."
		],
		"vietnamese": [
			"Sa mạc không có hồi kết. Chỉ còn lại cát và mặt trời.",
			"Đối với người lạc lối, mọi biển báo đều là dối trá.",
			"Nhưng anh ta không dừng lại. Bởi vì vẫn còn điều gì đó để tin tưởng.",
			"Sau đó, một cái bóng cổ xưa tiến đến."
		],
		"thai": [
			"ทะเลทรายไม่มีที่สิ้นสุด มีเพียงทรายและดวงอาทิตย์เท่านั้น",
			"สำหรับผู้หลงทาง ป้ายบอกทางทุกป้ายคือการหลอกลวง",
			"แต่เขาไม่หยุด เพราะยังมีบางสิ่งให้เชื่อ",
			"แล้วเงาโบราณก็เข้ามาใกล้"
		],
		"hindi": [
			"रेगिस्तान अंतहीन था। केवल रेत और सूरज ही थे।",
			"खोए हुए लोगों के लिए, हर निशान एक झूठ था。",
			"लेकिन वह रुका नहीं। क्योंकि अभी भी कुछ बचा था जिस पर विश्वास किया जा सके।",
			"तभी, एक पुरानी परछाई पास आई।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "모래 폭풍이 지나간 자리, 길은 또다시 사라졌다.",
						"english": "Where the sandstorm passed, the path disappeared again.",
						"japanese": "砂嵐が過ぎ去った場所、道は再び消えた。",
						"chinese": "沙尘暴过后，道路再次消失了。",
						"french": "Là où la tempête de sable était passée, le chemin disparut à nouveau.",
						"spanish": "Donde pasó la tormenta de arena, el camino desapareció de nuevo.",
						"vietnamese": "Nơi bão cát đi qua, con đường lại biến mất.",
						"thai": "เมื่อพายุทรายผ่านไป เส้นทางก็หายไปอีกครั้ง",
						"hindi": "जहां रेतीला तूफान गुजरा, रास्ता फिर से गायब हो गया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "또 다시 길을 잃었어...",
						"english": "I'm lost again...",
						"japanese": "また道に迷った…",
						"chinese": "我又迷路了…",
						"french": "Je suis encore perdu...",
						"spanish": "Me he vuelto a perder...",
						"vietnamese": "Tôi lại lạc đường rồi...",
						"thai": "ฉันหลงทางอีกแล้ว...",
						"hindi": "मैं फिर से खो गया..."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"duration_ms": 500,
					"speaker": "kemet",
					"type": "direction",
					"action": "enter",
					"spot": [
						5,
						2
					]
				},
				{
					"speaker": "kemet",
					"content": {
						"korean": "길을 찾으려 하는가?",
						"english": "Are you trying to find a way?",
						"japanese": "道を探しているのか？",
						"chinese": "你在寻找出路吗？",
						"french": "Cherches-tu ton chemin ?",
						"spanish": "¿Estás tratando de encontrar el camino?",
						"vietnamese": "Ngươi đang cố tìm đường sao?",
						"thai": "เจ้ากำลังหาทางอยู่หรือ?",
						"hindi": "क्या तुम रास्ता ढूंढ रहे हो?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "당신은… 누구시죠?",
						"english": "Who... are you?",
						"japanese": "あなたは… どなたですか？",
						"chinese": "您是… 谁？",
						"french": "Qui… êtes-vous ?",
						"spanish": "¿Quién… es usted?",
						"vietnamese": "Ngài… là ai?",
						"thai": "ท่าน... คือใคร?",
						"hindi": "आप… कौन हैं?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "kemet",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 사막의 노현자 케메트. 길을 잃은 자들을 많이 봤지.",
						"english": "I am Kemet, the elder sage of this desert. I've seen many who have lost their way.",
						"japanese": "この砂漠の老賢者ケメットだ。道を失った者を数多く見てきた。",
						"chinese": "我是凯米特，这片沙漠的老贤者。见过许多迷失方向的人。",
						"french": "Je suis Kemet, l'ancien sage de ce désert. J'ai vu beaucoup de ceux qui ont perdu leur chemin.",
						"spanish": "Soy Kemet, el viejo sabio de este desierto. He visto a muchos que han perdido el camino.",
						"vietnamese": "Ta là Kemet, lão hiền giả của sa mạc này. Ta đã thấy nhiều người lạc lối.",
						"thai": "ข้าคือเคเมต ปราชญ์เฒ่าแห่งทะเลทรายนี้ ข้าเห็นคนหลงทางมามากแล้ว",
						"hindi": "मैं खेमेट, इस रेगिस्तान का वृद्ध ऋषि हूं। मैंने कई ऐसे लोगों को देखा है जो रास्ता भटक गए हैं।"
					}
				},
				{
					"content": {
						"korean": "허나, 이 사막에서 길을 찾는 것은 부질없는 짓.",
						"english": "But finding a path in this desert is a futile endeavor.",
						"japanese": "だが、この砂漠で道を探すのは無益なことだ。",
						"chinese": "然而，在这片沙漠中寻找道路是徒劳的。",
						"french": "Mais trouver son chemin dans ce désert est une tâche futile.",
						"spanish": "Pero encontrar un camino en este desierto es un esfuerzo inútil.",
						"vietnamese": "Nhưng tìm đường trong sa mạc này là một việc vô ích.",
						"thai": "ทว่า การหาทางในทะเลทรายนี้เป็นเรื่องไร้ประโยชน์",
						"hindi": "परंतु, इस रेगिस्तान में रास्ता ढूंढना व्यर्थ का प्रयास है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "kemet"
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
					"speaker": "kemet",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "kemet",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 사막은 길을 주지 않는다.",
						"english": "This desert offers no way out.",
						"japanese": "この砂漠には道がない。",
						"chinese": "这片沙漠无路可循。",
						"french": "Ce désert n'offre aucun chemin.",
						"spanish": "Este desierto no ofrece un camino.",
						"vietnamese": "Sa mạc này không có lối thoát.",
						"thai": "ทะเลทรายนี้ไร้ซึ่งหนทาง",
						"hindi": "इस रेगिस्तान में कोई रास्ता नहीं है।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "무슨 소리죠? 분명 탈출구가 있을 텐데.",
						"english": "What are you talking about? There must be an exit!",
						"japanese": "何を言ってるんです？きっと出口はあるはずだ。",
						"chinese": "你说什么？ 분명会有出口的。",
						"french": "Quoi ? Il doit y avoir une issue !",
						"spanish": "¿Qué dices? ¡Debe haber una salida!",
						"vietnamese": "Anh nói gì vậy? Chắc chắn phải có lối thoát chứ.",
						"thai": "คุณพูดอะไรน่ะ? มันต้องมีทางออกสิ",
						"hindi": "क्या मतलब? ज़रूर कोई न कोई रास्ता होगा!"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "kemet",
					"content": {
						"korean": "돌고 돌아 제자리. 그것이 이 사막의 법칙이다.",
						"english": "Round and round, back to the start. That is the law of this desert.",
						"japanese": "巡り巡って元に戻る。それがこの砂漠の法則だ。",
						"chinese": "循环往复，回到原点。这就是这片沙漠的法则。",
						"french": "On tourne en rond, pour revenir au point de départ. Telle est la loi de ce désert.",
						"spanish": "Vuelta y vuelta al mismo sitio. Esa es la ley de este desierto.",
						"vietnamese": "Cứ loanh quanh rồi lại về chỗ cũ. Đó là quy luật của sa mạc này.",
						"thai": "วนไปวนมากลับมาที่เดิม นั่นแหละคือกฎของทะเลทรายนี้",
						"hindi": "घूम-फिरकर वहीं पहुँच जाते हैं। यही इस रेगिस्तान का नियम है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…무슨 허풍을.",
						"english": "...What a load of bluster.",
						"japanese": "…何をでたらめな。",
						"chinese": "...什么鬼话。",
						"french": "...Quel bluff.",
						"spanish": "...Qué patraña.",
						"vietnamese": "...Đồ khoác lác.",
						"thai": "...พูดเหลวไหลอะไรน่ะ",
						"hindi": "...ये कैसी शेखी है।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_1"
				},
				{
					"speaker": "kemet",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "진실은 항상 허풍처럼 들리는 법이지.",
						"english": "Truth always sounds like bluster.",
						"japanese": "真実はいつもでたらめに聞こえるものさ。",
						"chinese": "真相听起来总是像虚张声势。",
						"french": "La vérité sonne toujours comme de la fanfaronnade.",
						"spanish": "La verdad siempre suena a patraña.",
						"vietnamese": "Sự thật thì luôn nghe có vẻ khoác lác.",
						"thai": "ความจริงมักจะฟังดูเหมือนการโอ้อวดเสมอแหละ",
						"hindi": "सच्चाई हमेशा शेखी बघारने जैसी लगती है।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						2,
						1
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "kemet"
				},
				{
					"speaker": "kemet",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "명심해라. 이 사막의 모든 길은 결국 시작점으로 돌아온다.",
						"english": "Remember this. Every path in this desert eventually leads back to the beginning.",
						"japanese": "心に刻め。この砂漠の全ての道は、結局出発点に戻る。",
						"chinese": "记住。这片沙漠的所有道路，最终都会回到起点。",
						"french": "Retiens bien ça. Tous les chemins de ce désert finissent par ramener au point de départ.",
						"spanish": "Recuerda esto. Todos los caminos de este desierto eventualmente regresan al punto de partida.",
						"vietnamese": "Hãy ghi nhớ. Mọi con đường trong sa mạc này cuối cùng đều quay về điểm xuất phát.",
						"thai": "จำไว้ ทุกเส้นทางในทะเลทรายนี้ ล้วนย้อนกลับไปยังจุดเริ่มต้น",
						"hindi": "यह याद रखना। इस रेगिस्तान के हर रास्ते अंततः शुरुआती बिंदु पर लौट आते हैं।"
					}
				},
				{
					"content": {
						"korean": "그럴 리가 없어. 분명 어딘가에…!",
						"english": "That can't be. There must be somewhere...!",
						"japanese": "そんなはずはない。きっとどこかに…！",
						"chinese": "不可能。 분명有某个地方…！",
						"french": "C'est impossible. Il doit y avoir un endroit... !",
						"spanish": "No puede ser. ¡Debe haber un lugar...!",
						"vietnamese": "Không thể nào. Chắc chắn ở đâu đó...!",
						"thai": "ไม่จริงหรอก มันต้องมีที่ไหนสักแห่ง...!",
						"hindi": "ऐसा नहीं हो सकता। ज़रूर कहीं न कहीं...!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "kemet",
					"content": {
						"korean": "수많은 자들이 그렇게 외쳤다. 그리고 모두 절망했지.",
						"english": "Countless others cried out the same. And all of them despaired.",
						"japanese": "数え切れないほどの者たちがそう叫んだ。そして、皆絶望した。",
						"chinese": "无数人曾这样喊道。然后所有人都绝望了。",
						"french": "D'innombrables personnes ont crié la même chose. Et toutes ont sombré dans le désespoir.",
						"spanish": "Muchos lo gritaron así. Y todos se desesperaron.",
						"vietnamese": "Biết bao nhiêu người đã hét lên như vậy. Và tất cả đều tuyệt vọng.",
						"thai": "ผู้คนมากมายต่างพร่ำร้องเช่นนั้น และพวกเขาก็สิ้นหวังกันไปหมด",
						"hindi": "असंख्य लोगों ने ऐसे ही चिल्लाया। और वे सभी निराशा में डूब गए।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "나는 달라! 나는 돌아갈 수 있어!",
						"english": "I'm different! I can go back!",
						"japanese": "私は違う！私は戻れる！",
						"chinese": "我不同！我能回去！",
						"french": "Je suis différent ! Je peux revenir !",
						"spanish": "¡Yo soy diferente! ¡Yo puedo volver!",
						"vietnamese": "Tôi khác! Tôi có thể quay lại!",
						"thai": "ฉันไม่เหมือนใคร! ฉันกลับไปได้!",
						"hindi": "मैं अलग हूँ! मैं वापस जा सकता हूँ!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그 신념이 너를 갉아먹을 게다.",
						"english": "That belief will gnaw at you.",
						"japanese": "その信念がお前を蝕むだろう。",
						"chinese": "那份信念会吞噬你。",
						"french": "Cette conviction te rongera.",
						"spanish": "Esa creencia te carcomerá.",
						"vietnamese": "Niềm tin đó sẽ gặm nhấm ngươi.",
						"thai": "ความเชื่อนั้นจะกัดกินเจ้าเอง",
						"hindi": "तुम्हारा यही विश्वास तुम्हें बर्बाद कर देगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "kemet"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "kemet",
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						2
					]
				},
				{
					"speaker": "kemet",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이제 그만 포기해라.",
						"english": "Give up now.",
						"japanese": "もう諦めろ。",
						"chinese": "现在就放弃吧。",
						"french": "Abandonne maintenant.",
						"spanish": "Ríndete ahora.",
						"vietnamese": "Bỏ cuộc đi.",
						"thai": "ยอมแพ้ซะเถอะ",
						"hindi": "अब हार मान लो।"
					}
				},
				{
					"content": {
						"korean": "무슨 말을 하는 거야! 이제 거의 다 왔어!",
						"english": "What are you talking about! We're almost there!",
						"japanese": "何を言ってるの！もうすぐそこだ！",
						"chinese": "你在说什么！我们快到了！",
						"french": "Qu'est-ce que tu racontes ! On y est presque !",
						"spanish": "¡Qué dices! ¡Ya casi llegamos!",
						"vietnamese": "Anh đang nói cái gì vậy! Chúng ta sắp đến nơi rồi!",
						"thai": "คุณพูดอะไรน่ะ! เราใกล้จะถึงแล้วนะ!",
						"hindi": "तुम क्या कह रहे हो! हम लगभग पहुँच ही गए हैं!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "도착 지점이라 믿는 곳이, 어쩌면 처음 떠났던 곳일지도 모른다.",
						"english": "What you believe is the destination, may simply be where you began.",
						"japanese": "到着点だと信じる場所が、もしかしたら最初に出発した場所かもしれない。",
						"chinese": "你以为的终点，也许只是你最初的起点。",
						"french": "L'endroit que tu crois être ta destination est peut-être là où tu as commencé.",
						"spanish": "El destino que crees alcanzar, quizás sea tu punto de partida.",
						"vietnamese": "Nơi mà ngươi tin là điểm đến, có thể chỉ là nơi ngươi đã bắt đầu.",
						"thai": "จุดหมายปลายทางที่เจ้าเชื่อ อาจเป็นเพียงจุดเริ่มต้นที่เจ้าจากมา",
						"hindi": "जिस गंतव्य को तुम मानते हो, शायद वही तुम्हारा प्रस्थान बिंदु हो।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "kemet"
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아니야! 나는 반드시 돌아갈 거야!",
						"english": "No! I must return!",
						"japanese": "違う！私は必ず帰るんだ！",
						"chinese": "不！我一定要回去！",
						"french": "Non ! Je reviendrai coûte que coûte !",
						"spanish": "¡No! ¡Debo regresar!",
						"vietnamese": "Không! Ta nhất định sẽ trở về!",
						"thai": "ไม่นะ! ฉันจะต้องกลับไปให้ได้!",
						"hindi": "नहीं! मैं निश्चित रूप से वापस जाऊँगा!"
					}
				},
				{
					"speaker": "kemet",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…부디, 절망하지 않기를.",
						"english": "...May you not despair.",
						"japanese": "…どうか、絶望しないでほしい。",
						"chinese": "……但愿你不会绝望。",
						"french": "...Puisses-tu ne pas désespérer.",
						"spanish": "...Que no caigas en la desesperación.",
						"vietnamese": "...Mong rằng ngươi sẽ không tuyệt vọng.",
						"thai": "...ขอให้เจ้าอย่าสิ้นหวังเลย",
						"hindi": "...कृपया, निराश मत होना।"
					}
				},
				{
					"action": "exit",
					"type": "direction",
					"speaker": "kemet",
					"duration_ms": 400,
					"direction": "down"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "보았는가? 너의 모든 노력은 무의미하다.",
						"english": "Did you see? All your efforts are meaningless.",
						"japanese": "「見たか？お前の全ての努力は無意味だ。」",
						"chinese": "「看到了吗？你所有的努力都毫无意义。」",
						"french": "As-tu vu ? Tous tes efforts sont vains.",
						"spanish": "¿Lo viste? Todos tus esfuerzos son inútiles.",
						"vietnamese": "Ngươi thấy chưa? Mọi nỗ lực của ngươi đều vô nghĩa.",
						"thai": "เห็นไหม? ความพยายามทั้งหมดของเจ้านั้นไร้ประโยชน์",
						"hindi": "देखा? तुम्हारे सारे प्रयास व्यर्थ हैं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…아니야! 나는… 포기하지 않아!",
						"english": "...No! I... won't give up!",
						"japanese": "「…違う！私は…諦めない！」",
						"chinese": "「…不！我…不会放弃！」",
						"french": "...Non ! Je... n'abandonnerai pas !",
						"spanish": "...¡No! Yo... ¡no me rendiré!",
						"vietnamese": "...Không! Ta… không bỏ cuộc!",
						"thai": "...ไม่! ฉัน... ไม่ยอมแพ้!",
						"hindi": "...नहीं! मैं... हार नहीं मानूंगा!"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "결국 너는 또 다시 이곳에 서게 될 것이다.",
						"english": "In the end, you will stand here again.",
						"japanese": "「結局、お前は再びここに立つことになるだろう。」",
						"chinese": "「最终，你将再次站在这里。」",
						"french": "Finalement, tu te tiendras à nouveau ici.",
						"spanish": "Al final, volverás a estar aquí.",
						"vietnamese": "Cuối cùng, ngươi sẽ lại đứng đây.",
						"thai": "สุดท้ายแล้ว เจ้าก็จะกลับมายืนที่นี่อีกครั้ง",
						"hindi": "अंत में, तुम फिर से यहीं खड़े होगे।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "거대한 모래 언덕 위, 정체 모를 그림자가 기다리고 있었다.",
						"english": "Above the colossal sand dunes, an unknown shadow lay in wait.",
						"japanese": "巨大な砂丘の上、正体不明の影が待ち構えていた。",
						"chinese": "巨大的沙丘之上，一个不明身份的影子正在等候。",
						"french": "Sur une immense dune, une ombre inconnue attendait.",
						"spanish": "Sobre una duna gigantesca, una sombra desconocida aguardaba.",
						"vietnamese": "Trên cồn cát khổng lồ, một bóng hình vô danh đang chờ đợi.",
						"thai": "บนเนินทรายมหึมา เงาปริศนากำลังรอคอยอยู่",
						"hindi": "एक विशाल टीले पर, एक अज्ञात साया इंतज़ार कर रहा था।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어리석은 필멸자여. 길을 찾는다고 착각하는가?",
						"english": "Foolish mortal. Do you truly believe you're finding a path?",
						"japanese": "愚かなる定命の者よ。道を見つけたと錯覚しているのか？",
						"chinese": "愚蠢的凡人。你以为你在寻找出路吗？",
						"french": "Mortel insensé. Crois-tu trouver ton chemin ?",
						"spanish": "Necio mortal. ¿Crees que encuentras el camino?",
						"vietnamese": "Hỡi kẻ phàm trần ngu ngốc. Ngươi nhầm tưởng rằng mình đang tìm đường sao?",
						"thai": "มนุษย์ผู้โง่เขลา เจ้าเข้าใจผิดว่ากำลังหาทางอยู่หรือ?",
						"hindi": "मूर्ख नश्वर। क्या तुम भ्रम में हो कि रास्ता खोज रहे हो?"
					}
				},
				{
					"content": {
						"korean": "네가… 저주의 근원인가!",
						"english": "Are you... the origin of this curse!",
						"japanese": "お前が…呪いの根源なのか！",
						"chinese": "你…就是诅咒的根源吗！",
						"french": "Toi... es-tu la source de la malédiction !",
						"spanish": "¿Tú... eres el origen de la maldición?",
						"vietnamese": "Ngươi… là nguồn gốc của lời nguyền sao!",
						"thai": "แก… เป็นต้นเหตุของคำสาปหรือ!",
						"hindi": "तुम... क्या तुम ही इस अभिशाप का स्रोत हो!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "나는 그저 길을 잃은 자들을 안내할 뿐.",
						"english": "I only guide the lost.",
						"japanese": "私はただ、道に迷った者たちを案内するだけだ。",
						"chinese": "我只是引导那些迷失的人。",
						"french": "Je ne fais qu'aiguiller ceux qui sont perdus.",
						"spanish": "Solo guío a los que están perdidos.",
						"vietnamese": "Ta chỉ dẫn lối cho những kẻ lạc đường mà thôi.",
						"thai": "ข้าเพียงแค่ชี้ทางให้แก่ผู้หลงทาง",
						"hindi": "मैं बस भटकने वालों का मार्गदर्शन करता हूँ।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "헛소리 마! 비켜!",
						"english": "Nonsense! Move aside!",
						"japanese": "くだらない！退け！",
						"chinese": "少废话！滚开！",
						"french": "Absurdités ! Écarte-toi !",
						"spanish": "¡Tonterías! ¡Apártate!",
						"vietnamese": "Đừng nói xàm! Tránh ra!",
						"thai": "เหลวไหล! หลีกไป!",
						"hindi": "बकवास बंद करो! हट जाओ!"
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "…승리했다고 생각하나? 결국 돌아갈 곳은 정해져 있다.",
						"english": "...Think you've won? Your destination is fixed.",
						"japanese": "「…勝ったとでも？結局、戻る場所は決まっている。」",
						"chinese": "「…以为胜利了吗？最终归宿早已注定。」",
						"french": "...Tu penses avoir gagné ? Ta destination est déjà tracée.",
						"spanish": "...¿Crees que has ganado? Tu destino está sellado.",
						"vietnamese": "...Ngươi nghĩ mình đã thắng sao? Nơi quay về đã định sẵn rồi.",
						"thai": "...คิดว่าชนะแล้วหรือ? สุดท้ายแล้วที่กลับไปก็คือที่เดิม",
						"hindi": "...क्या तुम जीत गए हो? तुम्हारा ठिकाना तय है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "시끄러워! 이제 끝이야!",
						"english": "Shut up! It's over now!",
						"japanese": "「うるさい！これで終わりだ！」",
						"chinese": "「闭嘴！现在结束了！」",
						"french": "Tais-toi ! C'est fini maintenant !",
						"spanish": "¡Cállate! ¡Se acabó!",
						"vietnamese": "Im đi! Thế là hết rồi!",
						"thai": "หุบปาก! จบแล้ว!",
						"hindi": "चुप रहो! अब यह खत्म हो गया है!"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "보스는 쓰러졌다. 그러나 승리의 기쁨은 찾아오지 않았다.",
						"english": "The boss fell. Yet, the joy of victory never came.",
						"japanese": "「ボスは倒れた。しかし、勝利の喜びは訪れなかった。」",
						"chinese": "「首领倒下了。然而，胜利的喜悦并未降临。」",
						"french": "Le boss est tombé. Pourtant, la joie de la victoire ne vint jamais.",
						"spanish": "El jefe cayó. Sin embargo, la alegría de la victoria nunca llegó.",
						"vietnamese": "Trùm đã gục ngã. Thế nhưng, niềm vui chiến thắng vẫn không đến.",
						"thai": "บอสล้มลงแล้ว แต่ความยินดีในชัยชนะไม่ได้มาเยือน",
						"hindi": "बॉस गिर गया। फिर भी, जीत की खुशी नहीं आई।"
					}
				},
				{
					"content": {
						"korean": "사막은 여전히 침묵했고, 그의 길은… 여전히 불확실했다.",
						"english": "The desert remained silent, and his path... remained uncertain.",
						"japanese": "「砂漠は依然として沈黙し、彼の道は…依然として不確かだった。」",
						"chinese": "「沙漠依旧寂静，而他的道路…依然充满不确定。」",
						"french": "Le désert restait silencieux, et son chemin... demeurait incertain.",
						"spanish": "El desierto permaneció en silencio, y su camino... seguía siendo incierto.",
						"vietnamese": "Sa mạc vẫn im lìm, và con đường của anh ta… vẫn mờ mịt.",
						"thai": "ทะเลทรายยังคงเงียบงัน และเส้นทางของเขา... ยังคงไม่แน่นอน",
						"hindi": "रेगिस्तान अभी भी शांत था, और उसका रास्ता... अभी भी अनिश्चित था।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…정말 끝일까?",
						"english": "...Is this truly the end?",
						"japanese": "「…本当に終わりなのか？」",
						"chinese": "「…真的结束了吗？」",
						"french": "...Est-ce vraiment la fin ?",
						"spanish": "...¿Es este realmente el fin?",
						"vietnamese": "...Đây có thực sự là kết thúc không?",
						"thai": "...นี่คือจุดจบจริงๆ เหรอ?",
						"hindi": "...क्या यह सच में अंत है?"
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		}
	]
} as const;
