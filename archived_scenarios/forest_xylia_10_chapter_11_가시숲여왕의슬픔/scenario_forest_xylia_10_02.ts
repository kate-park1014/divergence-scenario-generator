export const scenario_forest_xylia_10_02 = {
	"scenario_id": "forest_xylia_10_02",
	"order": 2,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"bracken": {
			"id": "mon_48cf29be-dbc0-44b1-bbb3-ecda1d14742d",
			"name": {
				"korean": "브라켄",
				"english": "Bracken",
				"japanese": "ブラッケン",
				"chinese": "布莱肯",
				"french": "Bracken",
				"spanish": "Bracken",
				"vietnamese": "Bracken",
				"thai": "แบรกเคน",
				"hindi": "ब्रैकेन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5b494da6-ffd7-43d3-7171-7ac84bdfe400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4a7a1b62-d7a7-4a21-ffd5-fa9b5de82100/public"
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
					"content": {
						"korean": "숲은 숨을 멈췄다. 거대한 가시 덩굴이 길을 막았다.",
						"english": "The forest held its breath. Giant thorns blocked the path.",
						"japanese": "森は息を潜めた。巨大な茨が道を塞いだ。",
						"chinese": "森林屏住了呼吸。巨大的荆棘挡住了去路。",
						"french": "La forêt retint son souffle. D'énormes ronces bloquaient le chemin.",
						"spanish": "El bosque contuvo el aliento. Enormes espinas bloqueaban el camino.",
						"vietnamese": "Rừng nín thở. Những gai khổng lồ chắn lối.",
						"thai": "ป่าหยุดหายใจ หนามยักษ์ขวางทาง",
						"hindi": "वन ने अपनी साँस रोक ली। विशाल काँटेदार झाड़ियों ने रास्ता रोक दिया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "여기가 미로인가?",
						"english": "Is this the labyrinth?",
						"japanese": "ここが迷宮なのか？",
						"chinese": "这里是迷宫吗？",
						"french": "Est-ce le labyrinthe ?",
						"spanish": "¿Es este el laberinto?",
						"vietnamese": "Đây là mê cung sao?",
						"thai": "นี่คือวงกตหรือ?",
						"hindi": "क्या यह भूलभुलैया है?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "bracken",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그래. 너의 의지를 시험할 곳.",
						"english": "Yes. A place to test your will.",
						"japanese": "そうだ。お前の意志を試す場所だ。",
						"chinese": "是的。考验你意志的地方。",
						"french": "Oui. Un endroit pour éprouver ta volonté.",
						"spanish": "Sí. Un lugar para poner a prueba tu voluntad.",
						"vietnamese": "Phải. Nơi thử thách ý chí của ngươi.",
						"thai": "ใช่ สถานที่ที่จะทดสอบเจตจำนงของเจ้า",
						"hindi": "हाँ। तुम्हारी इच्छाशक्ति को परखने का स्थान।"
					},
					"speaker": "bracken"
				},
				{
					"content": {
						"korean": "환상에 갇혀 영원히 헤맬 수도 있어.",
						"english": "Trapped in illusions, you might wander forever.",
						"japanese": "幻影に囚われ、永遠に彷徨うこともあり得る。",
						"chinese": "你可能会被困在幻象中，永远徘徊。",
						"french": "Piégé par les illusions, tu pourrais errer pour l'éternité.",
						"spanish": "Atrapado en ilusiones, podrías vagar para siempre.",
						"vietnamese": "Bị mắc kẹt trong ảo ảnh, ngươi có thể lang thang mãi mãi.",
						"thai": "ติดกับดักภาพลวงตา เจ้าอาจหลงทางไปชั่วนิรันดร์",
						"hindi": "भ्रमों में फँसकर, तुम हमेशा के लिए भटक सकते हो।"
					},
					"speaker": "bracken",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "bracken",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "bracken",
					"content": {
						"korean": "숲의 고통을 보거라.",
						"english": "Behold the forest's agony.",
						"japanese": "森の苦痛を見よ。",
						"chinese": "目睹森林的痛苦吧。",
						"french": "Contemple la souffrance de la forêt.",
						"spanish": "Contempla la agonía del bosque.",
						"vietnamese": "Hãy nhìn nỗi đau của rừng.",
						"thai": "จงมองดูความทุกข์ทรมานของป่า",
						"hindi": "वन की पीड़ा देखो।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이건… 과거의 잔상?",
						"english": "Is this... a remnant of the past?",
						"japanese": "これは…過去の残像？",
						"chinese": "这是…过去的残像吗？",
						"french": "Est-ce… un vestige du passé ?",
						"spanish": "¿Es esto… un vestigio del pasado?",
						"vietnamese": "Đây là... tàn dư của quá khứ?",
						"thai": "นี่มัน... ภาพติดตาจากอดีต?",
						"hindi": "यह… अतीत का अवशेष है?"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "bracken",
					"content": {
						"korean": "숲은 모든 것을 기억해. 심지어 너의 약점까지.",
						"english": "The forest remembers everything. Even your weaknesses.",
						"japanese": "森はすべてを記憶している。お前の弱点すらも。",
						"chinese": "森林铭记一切。甚至你的弱点。",
						"french": "La forêt se souvient de tout. Même de tes faiblesses.",
						"spanish": "El bosque lo recuerda todo. Incluso tus debilidades.",
						"vietnamese": "Khu rừng nhớ tất cả mọi thứ. Kể cả điểm yếu của ngươi.",
						"thai": "ป่าจดจำทุกสิ่ง แม้แต่จุดอ่อนของเจ้า",
						"hindi": "जंगल सब कुछ याद रखता है। तुम्हारी कमजोरियाँ भी।"
					}
				},
				{
					"content": {
						"korean": "일부 나무에서 기이한 황금빛 수액이 흐르고 있었다.",
						"english": "Strange golden sap was flowing from some trees.",
						"japanese": "一部の木からは、奇妙な金色の樹液が流れていた。",
						"chinese": "一些树上流淌着奇异的金色树液。",
						"french": "Une sève dorée étrange s'écoulait de certains arbres.",
						"spanish": "Una extraña savia dorada fluía de algunos árboles.",
						"vietnamese": "Một chất lỏng vàng kỳ lạ đang chảy ra từ một số cây.",
						"thai": "มีน้ำเลี้ยงสีทองประหลาดไหลออกมาจากต้นไม้บางต้น",
						"hindi": "कुछ पेड़ों से अजीब सुनहरा रस बह रहा था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 수액은 대체 뭐지? 마치… 살아있는 것 같아.",
						"english": "What is this sap? It's like... it's alive.",
						"japanese": "この樹液は何だ？まるで…生きているかのようだ。",
						"chinese": "这到底是什么树液？它…仿佛是活的。",
						"french": "Qu'est-ce que cette sève ? On dirait… qu'elle est vivante.",
						"spanish": "¿Qué es esta savia? Parece… que está viva.",
						"vietnamese": "Cái chất lỏng này là gì vậy? Cứ như… nó có sự sống vậy.",
						"thai": "น้ำเลี้ยงนี่มันอะไรกัน? ราวกับว่า...มันมีชีวิต",
						"hindi": "यह रस क्या है? यह… जीवित जैसा लगता है।"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "bracken"
				},
				{
					"speaker": "bracken",
					"content": {
						"korean": "아직 버티는군. 어디까지 갈 수 있을까?",
						"english": "Still holding on. How far can you go?",
						"japanese": "まだ耐えているな。どこまで行けるだろうか？",
						"chinese": "还在坚持吗。你能走到多远？",
						"french": "Tu tiens toujours bon. Jusqu'où peux-tu aller ?",
						"spanish": "Aún aguantas. ¿Hasta dónde podrás llegar?",
						"vietnamese": "Vẫn còn trụ được à. Ngươi có thể đi được bao xa?",
						"thai": "ยังทนได้อยู่รึ? จะไปได้ไกลแค่ไหนกันนะ?",
						"hindi": "अभी भी डटे हुए हो। कितनी दूर जा सकते हो?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "더 이상 환상에 속지 않아.",
						"english": "I won't be fooled by illusions anymore.",
						"japanese": "もう幻想には騙されない。",
						"chinese": "我不会再被幻象欺骗了。",
						"french": "Je ne me laisserai plus berner par les illusions.",
						"spanish": "Ya no me engañarán las ilusiones.",
						"vietnamese": "Tôi sẽ không còn bị ảo ảnh lừa dối nữa.",
						"thai": "ข้าจะไม่ถูกหลอกด้วยภาพลวงตาอีกแล้ว",
						"hindi": "अब मैं भ्रम से नहीं ठगा जाऊँगा।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "잊혀진 것들은 사라지지 않아. 그저 잠시 숨어있을 뿐.",
						"english": "Forgotten things don't disappear. They just hide for a while.",
						"japanese": "忘れられたものは消えない。ただ、しばらく隠れているだけだ。",
						"chinese": "被遗忘的事物不会消失。它们只是暂时隐藏起来。",
						"french": "Les choses oubliées ne disparaissent pas. Elles se cachent juste un temps.",
						"spanish": "Las cosas olvidadas no desaparecen. Solo se esconden por un tiempo.",
						"vietnamese": "Những thứ bị lãng quên không biến mất. Chúng chỉ ẩn mình một thời gian.",
						"thai": "สิ่งที่ถูกลืมเลือนไม่ได้หายไปไหน เพียงแค่มันซ่อนตัวอยู่ชั่วคราว",
						"hindi": "भूली हुई चीजें गायब नहीं होतीं। वे बस कुछ समय के लिए छिप जाती हैं।"
					},
					"speaker": "bracken"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야?",
						"english": "What are you talking about?",
						"japanese": "何を言っているんだ？",
						"chinese": "你在说什么？",
						"french": "De quoi parles-tu ?",
						"spanish": "¿De qué hablas?",
						"vietnamese": "Ngươi đang nói gì vậy?",
						"thai": "เจ้าพูดอะไรน่ะ?",
						"hindi": "तुम क्या कह रहे हो?"
					}
				},
				{
					"speaker": "bracken",
					"content": {
						"korean": "이 숲의 진짜 과거를 알면… 후회할 거야.",
						"english": "If you knew the true past of this forest... you'd regret it.",
						"japanese": "この森の真の過去を知れば…後悔するだろう。",
						"chinese": "如果你知道这片森林的真实过去…你会后悔的。",
						"french": "Si tu connaissais le véritable passé de cette forêt… tu le regretterais.",
						"spanish": "Si conocieras el verdadero pasado de este bosque… te arrepentirías.",
						"vietnamese": "Nếu ngươi biết quá khứ thật sự của khu rừng này… ngươi sẽ hối hận đấy.",
						"thai": "ถ้าเจ้ารู้ประวัติที่แท้จริงของป่านี้...เจ้าจะต้องเสียใจ",
						"hindi": "अगर तुम इस जंगल का असली अतीत जानोगे… तो तुम्हें पछतावा होगा।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "bracken"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "후회는 늦었다. 너의 길은 이제 되돌릴 수 없어.",
						"english": "Regret comes too late. Your path is irreversible now.",
						"japanese": "後悔は遅い。お前の道はもう引き返せない。",
						"chinese": "后悔已晚。你的道路已无法回头。",
						"french": "Le regret est tardif. Ton chemin est désormais irréversible.",
						"spanish": "El arrepentimiento es tardío. Tu camino es irreversible ahora.",
						"vietnamese": "Hối hận đã muộn rồi. Con đường của ngươi giờ đây không thể quay lại được.",
						"thai": "สายเกินไปที่จะเสียใจ เส้นทางของเจ้าไม่อาจย้อนคืนได้แล้ว",
						"hindi": "पछतावा बहुत देर से आता है। तुम्हारा रास्ता अब अपरिवर्तनीय है।"
					},
					"speaker": "bracken"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "돌아갈 생각 없어. 진실을 밝힐 거야.",
						"english": "I won't go back. I'll reveal the truth.",
						"japanese": "戻るつもりはない。真実を明らかにする。",
						"chinese": "我不会回去。我要揭露真相。",
						"french": "Je ne reviendrai pas. Je révélerai la vérité.",
						"spanish": "No volveré. Revelaré la verdad.",
						"vietnamese": "Ta sẽ không quay lại. Ta sẽ phơi bày sự thật.",
						"thai": "ข้าจะไม่กลับไป ข้าจะเปิดเผยความจริง",
						"hindi": "मैं वापस नहीं जाऊँगा। मैं सच्चाई का खुलासा करूँगा।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "강한 의지로구나. 하지만 숲은 너의 모든 것을 집어삼킬 것이다.",
						"english": "Strong will, indeed. But the forest will devour everything you are.",
						"japanese": "強い意志だな。だが、森はお前の全てを飲み込むだろう。",
						"chinese": "意志坚强。但森林会吞噬你的一切。",
						"french": "Quelle volonté. Mais la forêt dévorera tout ce que tu es.",
						"spanish": "Fuerte voluntad, en verdad. Pero el bosque devorará todo lo que eres.",
						"vietnamese": "Ý chí mạnh mẽ đấy. Nhưng khu rừng sẽ nuốt chửng tất cả của ngươi.",
						"thai": "ช่างเป็นเจตจำนงที่แข็งแกร่งนัก แต่ป่าจะกลืนกินทุกสิ่งของเจ้า",
						"hindi": "वास्तव में दृढ़ इच्छाशक्ति है। लेकिन जंगल तुम्हें पूरी तरह निगल जाएगा।"
					},
					"speaker": "bracken"
				},
				{
					"content": {
						"korean": "미로는 더욱 깊어졌다. 끝없이 이어지는 가시 덩굴.",
						"english": "The labyrinth deepened. Endless thorny vines.",
						"japanese": "迷宮はさらに深まった。無限に続く茨の蔓。",
						"chinese": "迷宫更加深邃。荆棘藤蔓无尽蔓延。",
						"french": "Le labyrinthe s'est approfondi. Des ronces sans fin.",
						"spanish": "El laberinto se profundizó. Enredaderas espinosas interminables.",
						"vietnamese": "Mê cung càng sâu hơn. Những dây gai kéo dài vô tận.",
						"thai": "เขาวงกตลึกขึ้น เถาวัลย์หนามไร้ที่สิ้นสุด",
						"hindi": "भूलभुलैया और गहरी हो गई। अंतहीन कांटेदार बेलें।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "어리석군. 이 숲의 고통은 네가 감당할 수 없다.",
						"english": "Foolish. You cannot bear this forest's pain.",
						"japanese": "愚か者め。この森の苦痛は貴様には耐えられぬ。",
						"chinese": "愚蠢。你无法承受这森林的痛苦。",
						"french": "Insensé. Tu ne peux pas supporter la douleur de cette forêt.",
						"spanish": "Necio. No puedes soportar el dolor de este bosque.",
						"vietnamese": "Ngốc nghếch. Ngươi không thể gánh vác nỗi đau của khu rừng này.",
						"thai": "โง่เขลา เจ้าไม่อาจแบกรับความเจ็บปวดของป่านี้ได้",
						"hindi": "मूर्ख। तुम इस वन का दर्द सहन नहीं कर सकते।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아직 끝나지 않았어. 다시 돌아올 거야.",
						"english": "It's not over yet. I'll be back.",
						"japanese": "まだ終わってない。また戻ってくるぞ。",
						"chinese": "还没结束。我会再回来的。",
						"french": "Ce n'est pas encore fini. Je reviendrai.",
						"spanish": "Todavía no ha terminado. Volveré.",
						"vietnamese": "Chưa kết thúc đâu. Ta sẽ quay lại.",
						"thai": "ยังไม่จบ ข้าจะกลับมา",
						"hindi": "अभी खत्म नहीं हुआ है। मैं वापस आऊँगा।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "환상에 갇힌 채 영원히 헤매거라.",
						"english": "Wander forever, trapped in illusion.",
						"japanese": "幻想に囚われたまま、永遠にさまよい続けろ。",
						"chinese": "永远迷失在幻象之中吧。",
						"french": "Erre éternellement, piégé dans l'illusion.",
						"spanish": "Vaga por siempre, atrapado en la ilusión.",
						"vietnamese": "Hãy mãi mãi lang thang, bị mắc kẹt trong ảo ảnh.",
						"thai": "จงหลงทางไปชั่วนิรันดร์ ถูกกักขังอยู่ในภาพลวงตา",
						"hindi": "भ्रम में फँसे हमेशा भटकते रहो।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "크윽… 나는… 사라지지 않아… 숲이… 존재하는 한….",
						"english": "Ugh... I... will not disappear... as long as... the forest exists...",
						"japanese": "くっ… 私は… 消えない… 森が… 存在する限り…。",
						"chinese": "呃……我……不会消失……只要……森林存在……",
						"french": "Argh... Je... ne disparaîtrai pas... tant que... la forêt existera...",
						"spanish": "Uf... yo... no desapareceré... mientras... el bosque exista...",
						"vietnamese": "Khặc... ta... sẽ không biến mất... chừng nào... khu rừng còn tồn tại...",
						"thai": "อึก... ข้า... จะไม่หายไป... ตราบใดที่... ป่ายังคงอยู่...",
						"hindi": "उह... मैं... गायब नहीं होऊँगा... जब तक... जंगल मौजूद है..."
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야? 너는 대체 누구지?",
						"english": "What are you saying? Who are you, exactly?",
						"japanese": "何を言っている？ お前は一体誰だ？",
						"chinese": "你在说什么？你到底是谁？",
						"french": "Que dis-tu ? Qui es-tu, au juste ?",
						"spanish": "¿Qué estás diciendo? ¿Quién eres exactamente?",
						"vietnamese": "Ngươi đang nói gì vậy? Ngươi rốt cuộc là ai?",
						"thai": "เจ้ากำลังพูดอะไร? เจ้าเป็นใครกันแน่?",
						"hindi": "तुम क्या कह रहे हो? तुम आखिर कौन हो?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "중간 보스는 쓰러졌다. 그러나 숲의 고통은 끝나지 않았다. 더 깊은 곳에서 더 큰 의문이 기다리고 있었다.",
						"english": "The mid-boss has fallen. But the forest's suffering has not ended. A greater mystery awaited deeper within.",
						"japanese": "中ボスは倒れた。しかし、森の苦しみは終わっていなかった。さらに深い場所で、より大きな謎が待ち受けていた。",
						"chinese": "中间boss已倒下。然而，森林的痛苦并未结束。更深处，更大的疑问正等待着。",
						"french": "Le boss intermédiaire est tombé. Mais la souffrance de la forêt n'était pas terminée. Un plus grand mystère attendait plus profondément.",
						"spanish": "El jefe intermedio ha caído. Pero el sufrimiento del bosque no ha terminado. Un misterio mayor esperaba en lo más profundo.",
						"vietnamese": "Trùm phụ đã gục ngã. Nhưng nỗi đau của khu rừng vẫn chưa kết thúc. Một bí ẩn lớn hơn đang chờ đợi sâu thẳm bên trong.",
						"thai": "หัวหน้ากลางพ่ายแพ้แล้ว แต่ความทุกข์ทรมานของป่ายังไม่สิ้นสุด ปริศนาที่ยิ่งใหญ่กว่ากำลังรออยู่ลึกเข้าไปข้างใน",
						"hindi": "मध्य-बॉस गिर गया। परन्तु वन की पीड़ा समाप्त नहीं हुई थी। गहराइयों में एक बड़ा रहस्य इंतज़ार कर रहा था।"
					}
				}
			],
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "bracken",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "여기까지 오다니… 대단하군.",
						"english": "To come this far... remarkable.",
						"japanese": "ここまで来たか… 見事だ。",
						"chinese": "能走到这里……了不起。",
						"french": "Être arrivé jusqu'ici... remarquable.",
						"spanish": "Haber llegado hasta aquí... impresionante.",
						"vietnamese": "Đến được đây... thật đáng nể.",
						"thai": "มาได้ไกลถึงเพียงนี้... ยอดเยี่ยมมาก",
						"hindi": "यहाँ तक पहुँचना... उल्लेखनीय है।"
					},
					"speaker": "bracken",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "네 시험은 끝났어. 이제 진실을 보여줘.",
						"english": "Your trial is over. Now, show me the truth.",
						"japanese": "お前の試練は終わった。さあ、真実を見せろ。",
						"chinese": "你的考验结束了。现在，展现真相吧。",
						"french": "Ton épreuve est terminée. Maintenant, montre-moi la vérité.",
						"spanish": "Tu prueba ha terminado. Ahora, muéstrame la verdad.",
						"vietnamese": "Thử thách của ngươi đã kết thúc. Giờ thì, hãy cho ta thấy sự thật.",
						"thai": "การทดสอบของเจ้าสิ้นสุดลงแล้ว บัดนี้ จงเผยความจริงออกมา",
						"hindi": "तुम्हारी परीक्षा समाप्त हो गई। अब, मुझे सच्चाई दिखाओ।"
					}
				},
				{
					"content": {
						"korean": "진실? 진실은 고통뿐이다.",
						"english": "Truth? Truth is only pain.",
						"japanese": "真実？ 真実は苦痛だけだ。",
						"chinese": "真相？真相只有痛苦。",
						"french": "La vérité ? La vérité n'est que douleur.",
						"spanish": "¿La verdad? La verdad es solo dolor.",
						"vietnamese": "Sự thật? Sự thật chỉ là nỗi đau.",
						"thai": "ความจริง? ความจริงมีแต่ความเจ็บปวด",
						"hindi": "सच्चाई? सच्चाई सिर्फ दर्द है।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "exit",
					"duration_ms": 400,
					"speaker": "bracken"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "숲은 나다. 나는 숲의 모든 고통이다.",
						"english": "The forest is me. I am all the forest's pain.",
						"japanese": "森は私だ。私は森の全ての苦痛だ。",
						"chinese": "森林就是我。我就是森林所有的痛苦。",
						"french": "La forêt, c'est moi. Je suis toute la douleur de la forêt.",
						"spanish": "El bosque soy yo. Soy todo el dolor del bosque.",
						"vietnamese": "Rừng là ta. Ta là tất cả nỗi đau của rừng.",
						"thai": "ป่าคือข้า ข้าคือความเจ็บปวดทั้งหมดของป่า",
						"hindi": "जंगल मैं हूँ। मैं जंगल का सारा दर्द हूँ।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "네가 이 숲을 이렇게 만들었나?",
						"english": "Did you make this forest like this?",
						"japanese": "お前がこの森をこう作ったのか？",
						"chinese": "是你把这片森林变成这样的吗？",
						"french": "Est-ce toi qui as rendu cette forêt ainsi ?",
						"spanish": "¿Fuiste tú quien hizo este bosque así?",
						"vietnamese": "Ngươi đã biến khu rừng này thành thế này ư?",
						"thai": "เจ้าเป็นคนสร้างป่านี้ขึ้นมาอย่างนั้นหรือ?",
						"hindi": "क्या तुमने इस जंगल को ऐसा बनाया है?"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"숲은 길을 잃은 자들을 유혹한다.",
			"가시 덩굴과 환영이 뒤얽힌 미로.",
			"과거의 고통이 속삭이는 곳.",
			"브라켄, 숲의 시험관이 기다린다.",
			"진실은 더 깊은 곳에 잠들어 있다."
		],
		"english": [
			"The forest beckons the lost.",
			"A labyrinth of thorns and illusions.",
			"Where past pains whisper.",
			"Bracken, the forest's trial master, awaits.",
			"The truth lies deeper."
		],
		"japanese": [
			"森は迷いし者を誘う。",
			"茨と幻影が絡み合う迷宮。",
			"過去の苦痛が囁く場所。",
			"森の試練官、ブラッケンが待つ。",
			"真実はさらに奥深く眠る。"
		],
		"chinese": [
			"森林诱惑着迷失之人。",
			"荆棘与幻象交织的迷宫。",
			"过去痛苦低语之处。",
			"森林的考验者，布莱肯，正在等候。",
			"真相沉睡于更深处。"
		],
		"french": [
			"La forêt attire ceux qui s'égarent.",
			"Un labyrinthe d'épines et d'illusions.",
			"Là où les douleurs passées murmurent.",
			"Bracken, l'examinateur de la forêt, attend.",
			"La vérité repose plus profondément."
		],
		"spanish": [
			"El bosque atrae a los perdidos.",
			"Un laberinto de espinas e ilusiones.",
			"Donde los dolores del pasado susurran.",
			"Bracken, el examinador del bosque, espera.",
			"La verdad yace más profundo."
		],
		"vietnamese": [
			"Rừng cám dỗ những kẻ lạc lối.",
			"Mê cung vướng víu gai góc và ảo ảnh.",
			"Nơi những nỗi đau quá khứ thì thầm.",
			"Bracken, người thử thách của rừng, đang chờ.",
			"Sự thật ngủ sâu hơn bên trong."
		],
		"thai": [
			"ป่าล่อลวงผู้หลงทาง",
			"วงกตแห่งหนามและภาพลวงตา",
			"ที่ซึ่งความเจ็บปวดในอดีตกระซิบ",
			"แบร็คเค็น ผู้คุมการทดสอบแห่งป่า รออยู่",
			"ความจริงหลับใหลอยู่ลึกกว่านั้น"
		],
		"hindi": [
			"वन भटके हुओं को आकर्षित करता है।",
			"काँटों और भ्रमों का एक भूलभुलैया।",
			"जहाँ अतीत के दर्द फुसफुसाते हैं।",
			"ब्रैकन, वन का परीक्षक, प्रतीक्षा कर रहा है।",
			"सत्य और गहराई में छिपा है।"
		]
	}
} as const;
