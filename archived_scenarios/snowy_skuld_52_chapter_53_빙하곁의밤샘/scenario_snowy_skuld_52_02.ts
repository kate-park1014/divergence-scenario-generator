export const scenario_snowy_skuld_52_02 = {
	"scenario_id": "snowy_skuld_52_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"ivar": {
			"id": "mon_d8a80adc-9315-47b5-8c30-97ce33672bce",
			"name": {
				"korean": "이바르",
				"english": "Ivar",
				"japanese": "イヴァー",
				"chinese": "伊瓦尔",
				"french": "Ivar",
				"spanish": "Ivar",
				"vietnamese": "Ivar",
				"thai": "ไอวาร์",
				"hindi": "इवर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8dd7872b-d4df-44fd-b1a1-083a9156e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2622fb62-daf4-42d1-a83b-2b78869d3e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"빙하의 낮은 신음이 밤을 채웠다.",
			"동행단은 불을 피우고, 각자의 상념에 잠겼다.",
			"이바르는 검 자루를 매만졌다.",
			"\"지킬 수 없는 맹세도… 맹세인가.\""
		],
		"english": [
			"The glacier's low groan filled the night.",
			"The company lit a fire and lost themselves in their thoughts.",
			"Ivar ran his hand over the sword hilt.",
			"\"Is a vow that cannot be kept... still a vow?\""
		],
		"japanese": [
			"氷河の低い呻き声が夜を満たした。",
			"一行は火を焚き、それぞれの思いに沈んだ。",
			"イヴァールは剣の柄を撫でた。",
			"「守れぬ誓いも…誓いなのか。」"
		],
		"chinese": [
			"冰川低沉的呻吟声充斥着夜晚。",
			"同行者点燃了篝火，陷入各自的沉思。",
			"伊瓦尔轻抚着剑柄。",
			"“无法实现的誓言…也算誓言吗？”"
		],
		"french": [
			"Le gémissement grave du glacier emplissait la nuit.",
			"Le groupe alluma un feu et chacun s'enfonça dans ses pensées.",
			"Ivar caressa la poignée de son épée.",
			"« Un serment qu'on ne peut tenir… est-ce toujours un serment ? »"
		],
		"spanish": [
			"El bajo gemido del glaciar llenó la noche.",
			"La compañía encendió un fuego y se sumió en sus pensamientos.",
			"Ivar acarició la empuñadura de su espada.",
			"¿Es un juramento que no se puede cumplir... todavía un juramento?"
		],
		"vietnamese": [
			"Tiếng rên rỉ trầm thấp của sông băng lấp đầy màn đêm.",
			"Đoàn người đốt lửa, chìm đắm trong những suy tư riêng.",
			"Ivar vuốt ve cán kiếm.",
			"\"Lời thề không thể giữ... vẫn là lời thề sao?\""
		],
		"thai": [
			"เสียงคร่ำครวญแผ่วเบาของธารน้ำแข็งเติมเต็มค่ำคืน",
			"คณะเดินทางก่อไฟ และต่างจมดิ่งในห้วงความคิดของตน",
			"ไอวาร์ลูบไล้ด้ามดาบ",
			"“คำสาบานที่รักษาไม่ได้…ยังคงเป็นคำสาบานหรือ?”"
		],
		"hindi": [
			"ग्लेशियर की धीमी कराह ने रात को भर दिया।",
			"दल ने आग जलाई और अपने विचारों में खो गए।",
			"इवार ने अपनी तलवार की मूठ को सहलाया।",
			"“क्या एक ऐसा वादा जो निभाया न जा सके… अभी भी एक वादा है?”"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "차가운 밤, 거대한 빙하가 셋을 굽어보고 있었다.",
						"english": "A cold night. A colossal glacier loomed over the three.",
						"japanese": "冷たい夜、巨大な氷河が三人を見下ろしていた。",
						"chinese": "寒冷的夜晚，巨大的冰川俯瞰着三人。",
						"french": "Nuit froide. Un glacier colossal dominait les trois.",
						"spanish": "Una noche fría. Un glaciar colosal se cernía sobre los tres.",
						"vietnamese": "Đêm lạnh. Một sông băng khổng lồ sừng sững nhìn xuống ba người.",
						"thai": "ค่ำคืนอันหนาวเย็น ธารน้ำแข็งขนาดมหึมากำลังทอดเงาเหนือทั้งสาม",
						"hindi": "एक ठंडी रात। एक विशाल ग्लेशियर तीनों पर छाया हुआ था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…힘의 끝은 어디일까.",
						"english": "...Where does power end?",
						"japanese": "…力の果てはどこにあるのだろう。",
						"chinese": "…力量的尽头在哪里？",
						"french": "…Où est la fin du pouvoir ?",
						"spanish": "¿...Dónde termina el poder?",
						"vietnamese": "...Sức mạnh rồi sẽ kết thúc ở đâu?",
						"thai": "...จุดสิ้นสุดของพลังคือที่ใดกัน?",
						"hindi": "...शक्ति का अंत कहाँ है?"
					},
					"speaker": "ivar"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "갑자기 무슨 소리야?",
						"english": "What's with the sudden talk?",
						"japanese": "急にどうしたんだ？",
						"chinese": "怎么突然说这个？",
						"french": "Qu'est-ce que c'est que cette question soudaine ?",
						"spanish": "¿Qué es esta conversación repentina?",
						"vietnamese": "Tự nhiên nói gì vậy?",
						"thai": "อยู่ๆ ก็พูดอะไรน่ะ?",
						"hindi": "यह अचानक क्या बात है?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "나는, 강함의 끝을 본 자만이 맹세를 지킬 수 있다 믿었다.",
						"english": "I believed only those who'd seen the end of strength could keep a vow.",
						"japanese": "私は、強さの果てを見た者だけが誓いを守れると信じていた。",
						"chinese": "我曾相信，只有见识过力量尽头的人，才能守住誓言。",
						"french": "Je croyais que seuls ceux qui avaient vu la fin de la force pouvaient tenir un serment.",
						"spanish": "Creía que solo aquellos que habían visto el fin de la fuerza podían mantener un juramento.",
						"vietnamese": "Ta từng tin rằng chỉ kẻ nào đã thấy tận cùng sức mạnh mới có thể giữ lời thề.",
						"thai": "ข้าเชื่อว่าผู้ที่ได้เห็นจุดสิ้นสุดของความแข็งแกร่งเท่านั้น จึงจะรักษาสัตย์ได้",
						"hindi": "मुझे विश्वास था कि केवल वही जो शक्ति का अंत देख चुके हैं, एक वादा निभा सकते हैं।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "내가 지킬 수 있는 맹세는 어디까지일까.",
						"english": "How far can I keep my vows?",
						"japanese": "私が守れる誓いはどこまでなのだろうか。",
						"chinese": "我能守护的誓言，究竟能到何处？",
						"french": "Jusqu'où puis-je tenir mes serments ?",
						"spanish": "¿Hasta dónde puedo cumplir mis juramentos?",
						"vietnamese": "Lời thề mà ta có thể giữ, liệu có giới hạn đến đâu?",
						"thai": "คำสาบานที่ข้ารักษาได้ จะไปถึงเพียงใดกันนะ",
						"hindi": "मैं अपने वादे कहाँ तक निभा सकता हूँ?"
					},
					"speaker": "ivar"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "너희에게, 맹세란 무엇인가.",
						"english": "To you, what is a vow?",
						"japanese": "お前たちにとって、誓いとは何か。",
						"chinese": "对你们而言，誓言是什么？",
						"french": "Pour vous, qu'est-ce qu'un serment ?",
						"spanish": "Para vosotros, ¿qué es un juramento?",
						"vietnamese": "Với các ngươi, lời thề là gì?",
						"thai": "สำหรับพวกเจ้า คำสาบานคืออะไร?",
						"hindi": "तुम्हारे लिए, एक वादा क्या है?"
					},
					"speaker": "ivar",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "맹세는… 신념이야. 내 자신과의 약속.",
						"english": "A vow... it's a belief. A promise to myself.",
						"japanese": "誓いは…信念だ。自分自身との約束。",
						"chinese": "誓言是…信念。与自己的约定。",
						"french": "Un serment… c'est une conviction. Une promesse à moi-même.",
						"spanish": "Un juramento… es una convicción. Una promesa a mí mismo.",
						"vietnamese": "Lời thề… là tín niệm. Một lời hứa với chính mình.",
						"thai": "คำสาบาน… คือความเชื่อมั่น สัญญาที่ให้ไว้กับตัวเอง",
						"hindi": "शपथ… एक विश्वास है। खुद से किया वादा।"
					},
					"speaker": "character_1"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "나는 지켜야 할 약속. 동료들과의.",
						"english": "A promise I must keep. With my companions.",
						"japanese": "私は守るべき約束。仲間たちとの。",
						"chinese": "我必须遵守的诺言。与同伴们的。",
						"french": "Une promesse que je dois tenir. Avec mes compagnons.",
						"spanish": "Una promesa que debo cumplir. Con mis compañeros.",
						"vietnamese": "Lời hứa tôi phải giữ. Với những người đồng đội.",
						"thai": "คำสัญญาที่ฉันต้องรักษาไว้ กับสหายของฉัน",
						"hindi": "मुझे एक वादा निभाना है। अपने साथियों के साथ।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "지킬 수 없는 맹세도… 맹세인가.",
						"english": "Is a vow that cannot be kept... still a vow?",
						"japanese": "守れない誓いも…誓いなのか。",
						"chinese": "无法遵守的誓言…也算誓言吗？",
						"french": "Un serment qu'on ne peut tenir… est-ce toujours un serment ?",
						"spanish": "¿Un juramento que no se puede cumplir… sigue siendo un juramento?",
						"vietnamese": "Lời thề không thể giữ… cũng là lời thề sao?",
						"thai": "คำสาบานที่รักษาไม่ได้… ยังคงเป็นคำสาบานอยู่ไหม?",
						"hindi": "क्या न निभा पाने वाली शपथ भी… शपथ है?"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "나약한 자의 맹세는, 결국 허언일 뿐인가.",
						"english": "Is the vow of the weak, merely empty words in the end?",
						"japanese": "弱き者の誓いは、結局は虚言に過ぎないのか。",
						"chinese": "弱者的誓言，终究只是空话吗？",
						"french": "Le serment du faible, n'est-il au final que des paroles vides ?",
						"spanish": "¿El juramento del débil, no es al final más que palabras vacías?",
						"vietnamese": "Lời thề của kẻ yếu, rốt cuộc chỉ là lời nói suông sao?",
						"thai": "คำสาบานของผู้ที่อ่อนแอ สุดท้ายก็เป็นแค่คำพูดเปล่าๆ หรือไม่?",
						"hindi": "क्या कमजोर का वादा, अंततः मात्र कोरे शब्द हैं?"
					},
					"speaker": "ivar"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "맹세의 무게는… 지키지 못했을 때 드러나지.",
						"english": "The weight of a vow... is revealed when it cannot be kept.",
						"japanese": "誓いの重さは…守れなかった時に明らかになる。",
						"chinese": "誓言的份量…在无法遵守时才会显现。",
						"french": "Le poids d'un serment… se révèle quand il ne peut être tenu.",
						"spanish": "El peso de un juramento… se revela cuando no se puede cumplir.",
						"vietnamese": "Sức nặng của lời thề… sẽ lộ rõ khi không thể giữ được.",
						"thai": "น้ำหนักของคำสาบาน… จะปรากฏเมื่อรักษาไว้ไม่ได้",
						"hindi": "शपथ का बोझ… तब प्रकट होता है जब उसे निभाया नहीं जा सकता।"
					}
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "하지만, 지킬 수 없음을 알면서도 맹세해야 할 때가 있다.",
						"english": "But there are times when one must vow, even knowing it cannot be kept.",
						"japanese": "しかし、守れないと知りながらも誓わねばならない時がある。",
						"chinese": "然而，有时即便知道无法遵守，也必须立下誓言。",
						"french": "Mais il y a des moments où il faut faire un serment, même en sachant qu'il ne pourra être tenu.",
						"spanish": "Pero hay momentos en los que se debe jurar, incluso sabiendo que no se podrá cumplir.",
						"vietnamese": "Nhưng có những lúc phải thề, dù biết rằng không thể giữ được.",
						"thai": "แต่ก็มีบางครั้งที่ต้องสาบาน ทั้งที่รู้ว่าไม่อาจรักษาไว้ได้",
						"hindi": "लेकिन, कभी-कभी ऐसा समय आता है जब निभाना असंभव जानकर भी शपथ लेनी पड़ती है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "그것 또한 강함인가.",
						"english": "Is that also a form of strength?",
						"japanese": "それも強さなのか。",
						"chinese": "那也算是一种强大吗？",
						"french": "Est-ce aussi une forme de force ?",
						"spanish": "¿Es eso también una forma de fuerza?",
						"vietnamese": "Đó cũng là một loại sức mạnh sao?",
						"thai": "นั่นก็เป็นความแข็งแกร่งอย่างหนึ่งหรือเปล่า?",
						"hindi": "क्या वह भी एक प्रकार की शक्ति है?"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "빙하의 낮은 신음이 더 깊어졌다. 침묵 속, 셋의 숨결에 맞춰 잦아드는 듯했다.",
						"english": "The glacier's low groan deepened. In the silence, it seemed to fade with the breaths of the three.",
						"japanese": "氷河の低い呻きがさらに深くなった。沈黙の中、三人の息遣いに合わせて消え入るようだった。",
						"chinese": "冰川低沉的呻吟变得更深了。在寂静中，它似乎与三人的呼吸同步减弱。",
						"french": "Le gémissement profond du glacier s'intensifia. Dans le silence, il semblait s'estomper au rythme des souffles des trois.",
						"spanish": "El bajo gemido del glaciar se hizo más profundo. En el silencio, parecía desvanecerse al compás de las respiraciones de los tres.",
						"vietnamese": "Tiếng rên rỉ trầm thấp của sông băng sâu hơn. Trong im lặng, nó dường như mờ dần theo hơi thở của ba người.",
						"thai": "เสียงครางต่ำๆ ของธารน้ำแข็งลึกขึ้น ในความเงียบงัน มันดูเหมือนจะค่อยๆ แผ่วลงตามจังหวะลมหายใจของทั้งสาม",
						"hindi": "ग्लेशियर की धीमी कराह गहरी हो गई। खामोशी में, यह तीनों की साँसों के साथ घुलती हुई लग रही थी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이 길의 끝에 무엇이 있을지… 모르겠군.",
						"english": "What lies at the end of this path... I wonder.",
						"japanese": "この道の先に何があるのか…分からないな。",
						"chinese": "这条路的尽头会有什么…我不知道。",
						"french": "Ce qui se trouve au bout de ce chemin… je l'ignore.",
						"spanish": "Qué habrá al final de este camino… no lo sé.",
						"vietnamese": "Cuối con đường này có gì… tôi không biết.",
						"thai": "ที่ปลายทางนี้จะมีอะไรอยู่… ฉันไม่รู้",
						"hindi": "इस राह के अंत में क्या होगा… मुझे नहीं पता।"
					},
					"speaker": "ivar",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "두려운 거야?",
						"english": "Are you afraid?",
						"japanese": "恐れているのか？",
						"chinese": "你害怕吗？",
						"french": "As-tu peur ?",
						"spanish": "¿Tienes miedo?",
						"vietnamese": "Ngươi sợ sao?",
						"thai": "กลัวเหรอ?",
						"hindi": "क्या तुम डरे हुए हो?"
					}
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "…아니다. 나의 맹세가, 흔들리는 것이.",
						"english": "…No. My vow, it falters.",
						"japanese": "…いや。私の誓いが、揺らいでいる。",
						"chinese": "…不。我的誓言，正在动摇。",
						"french": "…Non. Mon serment, il vacille.",
						"spanish": "…No. Mi promesa, está flaqueando.",
						"vietnamese": "…Không. Lời thề của ta, đang lung lay.",
						"thai": "…ไม่สิ. คำสาบานของข้า มันกำลังสั่นคลอน.",
						"hindi": "…नहीं। मेरी प्रतिज्ञा, डगमगा रही है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "과연, 우리는 끝까지 함께할 수 있을까.",
						"english": "Indeed, can we truly stay together until the end?",
						"japanese": "果たして、我々は最後まで共にいられるだろうか。",
						"chinese": "到底，我们能否走到最后？",
						"french": "Vraiment, pourrons-nous rester ensemble jusqu'à la fin ?",
						"spanish": "¿En verdad, podremos permanecer juntos hasta el final?",
						"vietnamese": "Thật sự, liệu chúng ta có thể cùng nhau đến cuối cùng không?",
						"thai": "แท้จริงแล้ว พวกเราจะอยู่ด้วยกันจนถึงที่สุดได้หรือไม่?",
						"hindi": "सचमुच, क्या हम अंत तक साथ रह पाएंगे?"
					},
					"speaker": "ivar",
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "맹세라니… 결국 허상일 뿐. 부러진 칼날처럼.",
						"english": "A vow? Just an illusion in the end. Like a broken blade.",
						"japanese": "誓いだと… 結局は幻に過ぎない。折れた刃のように。",
						"chinese": "誓言？不过是虚妄。如折断的刀刃一般。",
						"french": "Un serment ? Au final, juste une illusion. Comme une lame brisée.",
						"spanish": "¿Un juramento? Al final, solo una ilusión. Como una hoja rota.",
						"vietnamese": "Lời thề ư... Cuối cùng cũng chỉ là ảo ảnh. Như một lưỡi kiếm gãy.",
						"thai": "คำสาบานเหรอ... สุดท้ายก็แค่ภาพลวงตา เหมือนคมดาบที่หัก",
						"hindi": "कसम? अंत में बस एक भ्रम। टूटे हुए ब्लेड की तरह।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "아직… 끝나지 않았다. 나의 맹세는… 부러지지 않는다!",
						"english": "Not over yet… My vow… it won't break!",
						"japanese": "まだ… 終わってない。私の誓いは… 折れない！",
						"chinese": "还没… 结束。我的誓言… 不会断裂！",
						"french": "Pas encore… fini. Mon serment… il ne se brisera pas !",
						"spanish": "Aún… no ha terminado. ¡Mi juramento… no se romperá!",
						"vietnamese": "Vẫn chưa… kết thúc. Lời thề của ta… sẽ không gãy!",
						"thai": "ยัง... ไม่จบ คำสาบานของข้า... จะไม่หัก!",
						"hindi": "अभी… खत्म नहीं हुआ। मेरी कसम… नहीं टूटेगी!"
					}
				},
				{
					"content": {
						"korean": "우린 다시 일어설 것이다!",
						"english": "We will rise again!",
						"japanese": "我々は再び立ち上がるだろう！",
						"chinese": "我们会再次站起来！",
						"french": "Nous nous relèverons !",
						"spanish": "¡Nos levantaremos de nuevo!",
						"vietnamese": "Chúng ta sẽ đứng dậy lần nữa!",
						"thai": "เราจะลุกขึ้นอีกครั้ง!",
						"hindi": "हम फिर से खड़े होंगे!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 맹세… 강함의 끝은… 없었다는 건가…",
						"english": "Ugh… Vow… Was there no end to strength…?",
						"japanese": "ぐっ… 誓い… 強さの果ては… なかったというのか…",
						"chinese": "呃… 誓言… 难道力量就没有尽头吗…？",
						"french": "Ugh… Serment… N'y avait-il pas de fin à la force… ?",
						"spanish": "Ugh… Promesa… ¿Acaso no había fin para la fuerza…?",
						"vietnamese": "Ư… Lời thề… Chẳng lẽ sức mạnh… không có giới hạn sao…?",
						"thai": "อึก… คำสาบาน… ความแข็งแกร่ง… ไม่มีที่สิ้นสุดหรือ…",
						"hindi": "उह… प्रतिज्ञा… क्या शक्ति का कोई अंत नहीं था…?"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "맹세는… 강함 그 자체가 아니었다. 지키려는 의지였다.",
						"english": "The vow… wasn't strength itself. It was the will to uphold it.",
						"japanese": "誓いは… 強さそのものではなかった。守ろうとする意思だった。",
						"chinese": "誓言… 并非力量本身。而是守护它的意志。",
						"french": "Le serment… n'était pas la force elle-même. C'était la volonté de le tenir.",
						"spanish": "La promesa… no era la fuerza en sí misma. Era la voluntad de mantenerla.",
						"vietnamese": "Lời thề… không phải là sức mạnh. Mà là ý chí để giữ vững nó.",
						"thai": "คำสาบาน… ไม่ใช่ความแข็งแกร่งในตัวมันเอง หากแต่เป็นเจตจำนงที่จะรักษามันไว้.",
						"hindi": "प्रतिज्ञा… स्वयं शक्ति नहीं थी। यह उसे निभाने की इच्छा थी।"
					},
					"speaker": "ivar",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "우린 이 맹세를… 기억할 것이다.",
						"english": "We shall… remember this vow.",
						"japanese": "我々は… この誓いを記憶するだろう。",
						"chinese": "我们… 将铭记这个誓言。",
						"french": "Nous… nous souviendrons de ce serment.",
						"spanish": "Nosotros… recordaremos esta promesa.",
						"vietnamese": "Chúng ta sẽ… ghi nhớ lời thề này.",
						"thai": "พวกเราจะ… จดจำคำสาบานนี้ไว้.",
						"hindi": "हम… इस प्रतिज्ञा को याद रखेंगे।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "빙하의 신음이 잠시 멎었다. 셋의 맹세는 더 단단해졌다. 새로운 기록이 시작되고 있었다.",
						"english": "The glacier's groans briefly ceased. Their three vows grew stronger. A new record was beginning.",
						"japanese": "氷河の呻きが一時止んだ。三人の誓いはより固くなった。新たな記録が始まっていた。",
						"chinese": "冰川的呻吟暂时停止了。三人的誓言更加坚定。新的记录正在开始。",
						"french": "Les gémissements du glacier cessèrent un instant. Leur triple serment se renforça. Un nouveau record commençait.",
						"spanish": "Los gemidos del glaciar cesaron un momento. Sus tres juramentos se hicieron más fuertes. Un nuevo récord estaba comenzando.",
						"vietnamese": "Tiếng rên rỉ của sông băng tạm lắng. Lời thề của ba người càng thêm kiên cố. Một kỷ lục mới đang bắt đầu.",
						"thai": "เสียงครางของธารน้ำแข็งหยุดลงชั่วขณะ คำสาบานของทั้งสามแข็งแกร่งขึ้น บันทึกใหม่กำลังเริ่มต้นขึ้น",
						"hindi": "ग्लेशियर की कराहट कुछ देर के लिए थम गई। तीनों की कसम और मजबूत हो गई। एक नया रिकॉर्ड शुरू हो रहा था।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 앞을 가로막았다. 정체 모를 기운이 빙하를 진동시켰다.",
						"english": "A colossal shadow loomed ahead. An unknown force vibrated the glacier.",
						"japanese": "巨大な影が前を遮った。正体不明の気が氷河を震わせた。",
						"chinese": "巨大的阴影挡住了去路。不明的力量震动着冰川。",
						"french": "Une ombre colossale barrait le chemin. Une énergie inconnue fit vibrer le glacier.",
						"spanish": "Una sombra colosal bloqueó el paso. Una energía desconocida hizo vibrar el glaciar.",
						"vietnamese": "Một cái bóng khổng lồ chắn ngang phía trước. Một luồng khí không rõ danh tính làm rung chuyển sông băng.",
						"thai": "เงาขนาดมหึมาขวางทางอยู่เบื้องหน้า พลังงานลึกลับสั่นสะเทือนธารน้ำแข็ง",
						"hindi": "एक विशाल परछाई आगे मंडरा रही थी। एक अज्ञात शक्ति ने ग्लेशियर को कंपकंपा दिया।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "나약한 것들이… 맹세라니. 웃기는군.",
						"english": "Weaklings… Vows? Laughable.",
						"japanese": "弱き者どもめ… 誓いだと。笑わせる。",
						"chinese": "弱小的家伙们… 誓言？可笑。",
						"french": "Faibles créatures… Des serments ? Ridicule.",
						"spanish": "¡Débiles… ¿Promesas? Ridículo.",
						"vietnamese": "Lũ yếu ớt… Lời thề ư? Nực cười.",
						"thai": "พวกอ่อนแอ… คำสาบานงั้นรึ? น่าขันสิ้นดี",
						"hindi": "कमज़ोरों… प्रतिज्ञाएं? हास्यास्पद।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "네놈이… 내 맹세를 시험하려는가.",
						"english": "You… dare test my vow?",
						"japanese": "貴様が… 私の誓いを試すというのか。",
						"chinese": "你… 敢考验我的誓言？",
						"french": "Toi… oses-tu tester mon serment ?",
						"spanish": "¿Tú… osas poner a prueba mi promesa?",
						"vietnamese": "Ngươi… dám thử thách lời thề của ta sao?",
						"thai": "เจ้า… กล้าลองดีกับคำสาบานของข้ารึ?",
						"hindi": "तुम… मेरी प्रतिज्ञा को परखने की हिम्मत करते हो?"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "시험? 아니다. 그저… 부러뜨릴 뿐.",
						"english": "Test? No. Just… break it.",
						"japanese": "試す？いや。ただ… へし折るだけだ。",
						"chinese": "考验？不。只是… 摧毁而已。",
						"french": "Tester ? Non. Juste… la briser.",
						"spanish": "¿Poner a prueba? No. Solo… romperla.",
						"vietnamese": "Thử thách? Không. Chỉ là… phá vỡ nó mà thôi.",
						"thai": "ลองดี? ไม่หรอก. แค่… หักมันทิ้งซะก็พอ.",
						"hindi": "परखना? नहीं। बस… तोड़ देना।"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "우린 여기서 맹세를 지킬 것이다!",
						"english": "We shall uphold our vow here!",
						"japanese": "我々はここで誓いを守る！",
						"chinese": "我们在此地，将坚守誓言！",
						"french": "Nous tiendrons notre serment ici !",
						"spanish": "¡Aquí mantendremos nuestra promesa!",
						"vietnamese": "Chúng ta sẽ giữ lời thề ở đây!",
						"thai": "พวกเราจะรักษาคำสาบานไว้ที่นี่!",
						"hindi": "हम अपनी प्रतिज्ञा यहाँ निभाएंगे!"
					}
				}
			]
		}
	]
} as const;
