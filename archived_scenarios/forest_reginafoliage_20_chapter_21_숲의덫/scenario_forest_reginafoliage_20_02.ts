export const scenario_forest_reginafoliage_20_02 = {
	"scenario_id": "forest_reginafoliage_20_02",
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
					"content": {
						"korean": "숲은 점점 더 기이한 생명력으로 꿈틀거렸다.",
						"english": "The forest squirmed with an increasingly eerie vitality.",
						"japanese": "森はますます奇妙な生命力で蠢いていた。",
						"chinese": "森林以越来越诡异的生命力蠕动着。",
						"french": "La forêt frémissait d'une vitalité de plus en plus étrange.",
						"spanish": "El bosque se retorcía con una vitalidad cada vez más extraña.",
						"vietnamese": "Rừng cây nhúc nhích với một sức sống ngày càng kỳ lạ.",
						"thai": "ป่าบิดเบี้ยวด้วยชีวิตชีวาที่แปลกประหลาดยิ่งขึ้น",
						"hindi": "जंगल बढ़ती हुई अजीबोगरीब जीवन शक्ति से रेंग रहा था।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "숲이... 변하고 있어.",
						"english": "The forest... it's changing.",
						"japanese": "森が…変わってる。",
						"chinese": "森林…它在变化。",
						"french": "La forêt... elle change.",
						"spanish": "El bosque... está cambiando.",
						"vietnamese": "Rừng... nó đang thay đổi.",
						"thai": "ป่า... มันกำลังเปลี่ยนไป",
						"hindi": "जंगल... यह बदल रहा है।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						2
					],
					"type": "direction",
					"speaker": "bracken"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 숲… 어딘가 이상해.",
						"english": "This forest... something's off.",
						"japanese": "この森…何かおかしい。",
						"chinese": "这片森林…有点不对劲。",
						"french": "Cette forêt... quelque chose ne va pas.",
						"spanish": "Este bosque... algo anda mal.",
						"vietnamese": "Khu rừng này... có gì đó không ổn.",
						"thai": "ป่านี้... มีอะไรแปลกๆ",
						"hindi": "यह जंगल... कुछ अजीब है।"
					},
					"emotion": "base",
					"speaker": "bracken"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "뭐가?",
						"english": "What is?",
						"japanese": "何が？",
						"chinese": "什么不对劲？",
						"french": "Quoi donc ?",
						"spanish": "¿Qué?",
						"vietnamese": "Cái gì?",
						"thai": "อะไร?",
						"hindi": "क्या?"
					}
				},
				{
					"speaker": "bracken",
					"emotion": "sad",
					"content": {
						"korean": "너무… 완벽해. 이 정도로 자라날 수 없어.",
						"english": "It's too... perfect. It shouldn't be able to grow like this.",
						"japanese": "あまりにも…完璧だ。こんな風には育たないはずだ。",
						"chinese": "太…完美了。它不可能长成这样。",
						"french": "C'est trop... parfait. Ça ne devrait pas pouvoir pousser comme ça.",
						"spanish": "Es demasiado... perfecto. No debería poder crecer así.",
						"vietnamese": "Nó quá... hoàn hảo. Không thể nào nó lại phát triển như thế này.",
						"thai": "มัน... สมบูรณ์แบบเกินไป ไม่น่าจะเติบโตได้ขนาดนี้",
						"hindi": "यह बहुत... सही है। यह ऐसे नहीं उग सकता।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "기형적으로 자라난 덩굴들이 길을 막았다.",
						"english": "Malformed vines blocked the path.",
						"japanese": "奇形に育った蔓が道を塞いでいた。",
						"chinese": "畸形生长的藤蔓挡住了去路。",
						"french": "Des lianes difformes bloquaient le chemin.",
						"spanish": "Enredaderas deformes bloqueaban el camino.",
						"vietnamese": "Những cây leo dị dạng đã chặn lối đi.",
						"thai": "เถาวัลย์ที่เติบโตผิดรูปร่างขวางทางไว้",
						"hindi": "विकृत लताओं ने रास्ता रोक दिया था।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_1",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이건 너무 과하잖아?",
						"english": "This is too much!",
						"japanese": "これ、やりすぎじゃない？",
						"chinese": "这太过分了！",
						"french": "C'est excessif !",
						"spanish": "¡Esto es demasiado!",
						"vietnamese": "Thế này quá rồi!",
						"thai": "นี่มันมากเกินไปแล้ว!",
						"hindi": "यह तो कुछ ज़्यादा ही है!"
					}
				},
				{
					"speaker": "bracken",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 450
				},
				{
					"content": {
						"korean": "봤지? 숲의 규칙이 뒤틀리고 있어.",
						"english": "See? The forest's rules are twisting.",
						"japanese": "見たろ？ 森のルールが歪み始めてる。",
						"chinese": "看到了吧？森林的法则正在扭曲。",
						"french": "Tu vois ? Les lois de la forêt se déforment.",
						"spanish": "¿Lo viste? Las reglas del bosque se están distorsionando.",
						"vietnamese": "Thấy không? Luật rừng đang bị bóp méo.",
						"thai": "เห็นไหม? กฎของป่ากำลังบิดเบี้ยวไปหมดแล้ว",
						"hindi": "देखा? जंगल के नियम बदल रहे हैं।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "bracken"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그냥 식물이 잘 자라는 거 아냐?",
						"english": "Aren't plants just growing well?",
						"japanese": "植物がよく育ってるだけじゃないのか？",
						"chinese": "难道不是植物长得很好吗？",
						"french": "Les plantes ne font que bien pousser, n'est-ce pas ?",
						"spanish": "¿No será que las plantas crecen bien?",
						"vietnamese": "Không phải cây cối đang phát triển tốt sao?",
						"thai": "ไม่ใช่แค่ต้นไม้โตดีเหรอ?",
						"hindi": "क्या बस पौधे अच्छे से नहीं उग रहे?"
					},
					"emotion": "base",
					"speaker": "character_2"
				},
				{
					"speaker": "bracken",
					"emotion": "angry",
					"content": {
						"korean": "아니, 이건… 억지로 꾸며낸 아름다움이야.",
						"english": "No, this is... a forced beauty.",
						"japanese": "いや、これは…無理に作り出された美しさだ。",
						"chinese": "不，这是…被强行装饰出来的美丽。",
						"french": "Non, c'est… une beauté artificielle.",
						"spanish": "No, esto es… una belleza artificial.",
						"vietnamese": "Không, đây là… vẻ đẹp bị ép buộc.",
						"thai": "ไม่ใช่ นี่มัน... ความงามที่ถูกสร้างขึ้นอย่างไม่ธรรมชาติ",
						"hindi": "नहीं, यह… ज़बरदस्ती बनाई गई सुंदरता है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "거대한 꽃봉오리들이 기분 나쁜 소리를 내며 피어났다.",
						"english": "Huge flower buds bloomed with unsettling sounds.",
						"japanese": "巨大な蕾が、不気味な音を立てて開花した。",
						"chinese": "巨大的花苞发出令人不安的声音绽放了。",
						"french": "D'immenses bourgeons s'ouvrirent en émettant des sons inquiétants.",
						"spanish": "Enormes capullos florecieron con un sonido inquietante.",
						"vietnamese": "Những nụ hoa khổng lồ nở rộ với âm thanh đáng sợ.",
						"thai": "ดอกตูมขนาดยักษ์ผลิบานพร้อมเสียงน่าขนลุก",
						"hindi": "विशालकाय कलियां एक अजीब आवाज़ के साथ खिल उठीं।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "으윽, 이 냄새…",
						"english": "Ugh, this scent...",
						"japanese": "うぅ、この匂いは…",
						"chinese": "呃，这味道…",
						"french": "Urgh, cette odeur…",
						"spanish": "Ugh, este hedor…",
						"vietnamese": "Ư, cái mùi này…",
						"thai": "อึ๋ย กลิ่นนี้...",
						"hindi": "उफ़, यह बदबू…"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"action": "enter",
					"duration_ms": 550,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "bracken"
				},
				{
					"emotion": "angry",
					"speaker": "bracken",
					"content": {
						"korean": "숲이 스스로를 조절하는 게 아니야. 누군가 억지로 바꾸고 있어.",
						"english": "The forest isn't regulating itself. Someone is forcing it to change.",
						"japanese": "森が自らを律しているんじゃない。誰かが無理にねじ曲げているんだ。",
						"chinese": "森林不是在自我调节。有人在强行改变它。",
						"french": "La forêt ne se régule pas d'elle-même. Quelqu'un la modifie de force.",
						"spanish": "El bosque no se está regulando a sí mismo. Alguien lo está forzando a cambiar.",
						"vietnamese": "Rừng không tự điều chỉnh. Có kẻ nào đó đang ép buộc nó thay đổi.",
						"thai": "ป่าไม่ได้ควบคุมตัวเอง มีใครบางคนกำลังบังคับให้มันเปลี่ยนแปลง",
						"hindi": "जंगल खुद को नियंत्रित नहीं कर रहा। कोई इसे जबरदस्ती बदल रहा है।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_3",
					"content": {
						"korean": "누군가라니?",
						"english": "Someone?",
						"japanese": "誰かって？",
						"chinese": "有人是谁？",
						"french": "Quelqu'un ?",
						"spanish": "¿Alguien?",
						"vietnamese": "Ai đó ư?",
						"thai": "ใครบางคนว่าไงนะ?",
						"hindi": "कोई, कौन?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…숲의 주인이랄까.",
						"english": "...The forest's master, perhaps.",
						"japanese": "…森の主、とでも言うべきか。",
						"chinese": "…大概是森林的主人吧。",
						"french": "…Le maître de la forêt, dirais-je.",
						"spanish": "…El señor del bosque, tal vez.",
						"vietnamese": "…Chủ nhân của rừng thì đúng hơn.",
						"thai": "...เจ้าแห่งป่าล่ะมั้ง",
						"hindi": "…जंगल का मालिक कह सकते हैं।"
					},
					"type": "speech",
					"speaker": "bracken",
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "숲의 모든 소리가 사라졌다. 오직 심장 박동 같은 째깍 소리만 남았다.",
						"english": "All sounds in the forest vanished. Only a ticking, like a heartbeat, remained.",
						"japanese": "森のすべての音が消えた。残ったのは、心臓の鼓動のようなカチカチという音だけだ。",
						"chinese": "森林里所有的声音都消失了。只剩下像心跳一样的滴答声。",
						"french": "Tous les sons de la forêt avaient disparu. Seul un tic-tac, tel un battement de cœur, demeurait.",
						"spanish": "Todos los sonidos del bosque se desvanecieron. Solo quedó un tictac, como un latido de corazón.",
						"vietnamese": "Mọi âm thanh của rừng biến mất. Chỉ còn lại tiếng tích tắc như nhịp đập trái tim.",
						"thai": "เสียงทั้งหมดในป่าเงียบหายไป เหลือเพียงเสียงติ๊กต็อกคล้ายเสียงหัวใจเต้น",
						"hindi": "जंगल की सभी आवाज़ें गायब हो गईं। केवल दिल की धड़कन जैसी टिक-टिक की आवाज़ ही बची।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "째깍… 째깍… 소름 돋아.",
						"english": "Tick-tock... Tick-tock... It's chilling.",
						"japanese": "チクタク… チクタク… 鳥肌が立つ。",
						"chinese": "滴答… 滴答… 毛骨悚然。",
						"french": "Tic-tac... Tic-tac... C'est effrayant.",
						"spanish": "Tic-tac... Tic-tac... Es espeluznante.",
						"vietnamese": "Tích tắc… Tích tắc… Rợn người quá.",
						"thai": "ติ๊กต็อก... ติ๊กต็อก... น่าขนลุก.",
						"hindi": "टिक-टिक… टिक-टिक… रोंगटे खड़े हो रहे हैं।"
					}
				},
				{
					"duration_ms": 400,
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "bracken"
				},
				{
					"type": "speech",
					"content": {
						"korean": "시간이… 없어. 숲이 우리를 조이고 있어.",
						"english": "No time... The forest is closing in on us.",
						"japanese": "時間が… ない。森が私たちを締め付けている。",
						"chinese": "没时间了… 森林正在收紧。",
						"french": "Plus le temps... La forêt nous étouffe.",
						"spanish": "No hay tiempo... El bosque nos está asfixiando.",
						"vietnamese": "Hết giờ rồi… Rừng đang siết chặt chúng ta.",
						"thai": "ไม่มีเวลาแล้ว... ป่ากำลังบีบรัดเรา.",
						"hindi": "समय नहीं है… जंगल हमें जकड़ रहा है।"
					},
					"speaker": "bracken",
					"emotion": "sad"
				},
				{
					"speaker": "character_4",
					"emotion": "base",
					"content": {
						"korean": "뭘 어떻게 해야 해?",
						"english": "What should we do?",
						"japanese": "どうすればいい？",
						"chinese": "我们该怎么办？",
						"french": "Que devons-nous faire ?",
						"spanish": "¿Qué debemos hacer?",
						"vietnamese": "Chúng ta phải làm gì?",
						"thai": "เราควรทำยังไงดี?",
						"hindi": "हमें क्या करना चाहिए?"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "bracken",
					"content": {
						"korean": "…나도 모르겠어. 하지만 이대로는 안 돼.",
						"english": "...I don't know. But this can't go on.",
						"japanese": "…私にも分からない。でも、このままじゃいけない。",
						"chinese": "…我也不知道。但不能再这样下去了。",
						"french": "...Je ne sais pas. Mais ça ne peut pas continuer comme ça.",
						"spanish": "...No lo sé. Pero no podemos seguir así.",
						"vietnamese": "…Tôi cũng không biết. Nhưng không thể cứ thế này được.",
						"thai": "...ฉันก็ไม่รู้. แต่จะอยู่แบบนี้ไม่ได้.",
						"hindi": "…मुझे भी नहीं पता। लेकिन ऐसे नहीं रह सकते।"
					},
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "괴물은 소멸했지만, 숲의 뒤틀린 질서는 여전히 남아있었다.",
						"english": "The monster was vanquished, but the forest's twisted order remained.",
						"japanese": "怪物は消滅したが、森の歪んだ秩序は依然として残っていた。",
						"chinese": "怪物被消灭了，但森林扭曲的秩序依然存在。",
						"french": "Le monstre fut vaincu, mais l'ordre tordu de la forêt persistait.",
						"spanish": "El monstruo fue aniquilado, pero el orden retorcido del bosque aún permanecía.",
						"vietnamese": "Quái vật đã bị tiêu diệt, nhưng trật tự méo mó của khu rừng vẫn còn đó.",
						"thai": "สัตว์ประหลาดถูกกำจัดแล้ว, แต่ระเบียบที่บิดเบี้ยวของป่ายังคงอยู่.",
						"hindi": "राक्षस नष्ट हो गया, लेकिन जंगल की विकृत व्यवस्था अभी भी बनी हुई थी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…결국… 너희도… 나의 일부가 될 것이다…",
						"english": "...In the end... you too... will become a part of me...",
						"japanese": "…結局… お前たちも… 私の一部となるだろう…",
						"chinese": "…最终… 你们也… 将成为我的一部分…",
						"french": "...Au final... vous aussi... ferez partie de moi...",
						"spanish": "...Al final... ustedes también... se convertirán en parte de mí...",
						"vietnamese": "…Cuối cùng… các ngươi cũng… sẽ trở thành một phần của ta…",
						"thai": "...ในที่สุด...พวกเจ้าเองก็...จะกลายเป็นส่วนหนึ่งของข้า...",
						"hindi": "…आखिरकार… तुम भी… मेरा हिस्सा बन जाओगे…"
					},
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "아직… 끝난 게 아니었어.",
						"english": "Not over yet...",
						"japanese": "まだ… 終わってなかった。",
						"chinese": "还没… 还没完呢。",
						"french": "Pas encore fini...",
						"spanish": "Aún no... no ha terminado.",
						"vietnamese": "Vẫn chưa... chưa kết thúc.",
						"thai": "ยัง... ไม่จบ!",
						"hindi": "अभी... खत्म नहीं हुआ था।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "숲 깊은 곳에서, 더 빠르고 분명한 '째깍' 소리가 들려왔다.",
						"english": "From deep within the forest, a faster, clearer 'tick-tock' echoed.",
						"japanese": "森の奥深くから、より速く、はっきりとした「カチカチ」という音が聞こえてきた。",
						"chinese": "森林深处，传来更加快速、清晰的‘咔嗒’声。",
						"french": "Du plus profond de la forêt, un 'tic-tac' plus rapide et plus distinct se fit entendre.",
						"spanish": "Desde lo más profundo del bosque, un 'tic-tac' más rápido y claro resonó.",
						"vietnamese": "Từ sâu trong rừng, một tiếng 'tíc tắc' nhanh và rõ ràng hơn vọng lại.",
						"thai": "จากส่วนลึกของป่า เสียง 'ติ๊กต็อก' ที่เร็วและชัดเจนยิ่งขึ้นดังขึ้นมา",
						"hindi": "जंगल की गहराई से, एक तेज़ और स्पष्ट 'टिक-टॉक' की आवाज़ सुनाई दी।"
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "뒤틀린 생명력의 중심에서 거대한 그림자가 나타났다.",
						"english": "A colossal shadow emerged from the heart of the twisted life force.",
						"japanese": "歪んだ生命力の中心から、巨大な影が現れた。",
						"chinese": "扭曲生命力的中心，一个巨大的影子出现了。",
						"french": "Une ombre colossale émergea du cœur de la force vitale tordue.",
						"spanish": "Una sombra colosal emergió del corazón de la fuerza vital retorcida.",
						"vietnamese": "Một bóng đen khổng lồ hiện ra từ trung tâm của sức sống vặn vẹo.",
						"thai": "เงาขนาดมหึมาปรากฏขึ้นจากใจกลางของพลังชีวิตที่บิดเบี้ยว.",
						"hindi": "मुड़ी हुई जीवन शक्ति के केंद्र से एक विशाल छाया निकली।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "…침입자. 감히 나의 질서를 방해하는가.",
						"english": "...Intruder. How dare you disturb my order?",
						"japanese": "…侵入者よ。よくも私の秩序を乱したな。",
						"chinese": "…入侵者。竟敢打扰我的秩序。",
						"french": "...Intrus. Comment oses-tu perturber mon ordre ?",
						"spanish": "...Intruso. ¿Cómo osas perturbar mi orden?",
						"vietnamese": "…Kẻ xâm nhập. Dám cả gan quấy rầy trật tự của ta sao.",
						"thai": "...ผู้บุกรุก. กล้าดียังไงมารบกวนระเบียบของข้า.",
						"hindi": "…घुसपैठिए। मेरी व्यवस्था को भंग करने की तुम्हारी हिम्मत कैसे हुई?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "네가… 이 숲을 이렇게 만든 거야?",
						"english": "Did you... make this forest like this?",
						"japanese": "お前が…この森をこう変えたのか？",
						"chinese": "是你… 把这片森林变成这样的吗？",
						"french": "C'est toi... qui as fait ça à cette forêt ?",
						"spanish": "¿Fuiste tú... quien hizo esto al bosque?",
						"vietnamese": "Ngươi… là kẻ đã biến khu rừng này thành ra thế này sao?",
						"thai": "แก...เป็นคนทำให้ป่านี้เป็นแบบนี้เหรอ?",
						"hindi": "क्या तुमने… इस जंगल को ऐसा बनाया है?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "나의 숲은 완벽하다. 너희가 더럽히고 있을 뿐.",
						"english": "My forest is perfect. You are merely defiling it.",
						"japanese": "私の森は完璧だ。お前たちが汚しているだけだ。",
						"chinese": "我的森林是完美的。只是你们在玷污它。",
						"french": "Ma forêt est parfaite. Vous ne faites que la souiller.",
						"spanish": "Mi bosque es perfecto. Ustedes solo lo están profanando.",
						"vietnamese": "Rừng của ta là hoàn hảo. Các ngươi chỉ đang làm ô uế nó mà thôi.",
						"thai": "ป่าของข้านั้นสมบูรณ์แบบ. พวกเจ้าแค่มาทำให้สกปรกเท่านั้น.",
						"hindi": "मेरा जंगल पूर्ण है। तुम बस उसे अपवित्र कर रहे हो।"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 모든 것을 집어삼켰다.",
						"english": "A colossal shadow devoured everything.",
						"japanese": "巨大な影がすべてを飲み込んだ。",
						"chinese": "巨大的影子吞噬了一切。",
						"french": "Une ombre colossale dévora tout.",
						"spanish": "Una sombra gigantesca lo devoró todo.",
						"vietnamese": "Một bóng tối khổng lồ nuốt chửng mọi thứ.",
						"thai": "เงามหึมากลืนกินทุกสิ่ง",
						"hindi": "एक विशालकाय परछाई ने सब कुछ निगल लिया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 것들. 감히 나를 거스르려 하다니.",
						"english": "Fools. How dare you defy me.",
						"japanese": "愚かな者たち。よくも私に逆らおうとしたな。",
						"chinese": "愚蠢的家伙。竟敢违抗我。",
						"french": "Imbéciles. Comment osez-vous me défier.",
						"spanish": "Necios. ¿Cómo osáis desafiarme?",
						"vietnamese": "Những kẻ ngu ngốc. Dám cả gan chống đối ta sao.",
						"thai": "พวกโง่เง่า. กล้าดียังไงมาขัดขืนข้า",
						"hindi": "मूर्खों। तुम्हारी हिम्मत कैसे हुई मुझे चुनौती देने की।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "다시… 다시 일어설 거야!",
						"english": "Again... I will rise again!",
						"japanese": "また… また立ち上がるぞ！",
						"chinese": "我会再次… 再次站起来！",
						"french": "Encore... je me relèverai !",
						"spanish": "¡Volveré... a levantarme!",
						"vietnamese": "Sẽ lại... lại đứng lên!",
						"thai": "จะลุกขึ้นอีกครั้ง... อีกครั้ง!",
						"hindi": "फिर से... मैं फिर से उठ खड़ा होऊंगा!"
					},
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"숲의 외곽은 아름다웠다. 하지만 깊어질수록 모든 것이 뒤틀려 있었다.",
			"식물들은 비명을 지르는 듯 자라났고, 브라켄은 경고했다. \"이건 정상이 아니야.\"",
			"탐험대는 믿지 않았다. 그러나 심장의 카운트다운은 멈추지 않았다.",
			"광기는 숲의 일부가 되어, 우리를 잠식하고 있었다."
		],
		"english": [
			"The forest's edge was beautiful. But the deeper we went, the more twisted everything became.",
			"Plants grew as if screaming, and Bracken warned, \"This isn't normal.\"",
			"The expedition team didn't believe it. But the countdown in our hearts didn't stop.",
			"Madness became part of the forest, consuming us."
		],
		"japanese": [
			"森の外れは美しかった。だが、奥へ進むほど、すべてが歪んでいった。",
			"植物は叫ぶように生い茂り、ブラッケンは警告した。「これは異常だ。」",
			"探検隊は信じなかった。しかし、心臓のカウントダウンは止まらなかった。",
			"狂気は森の一部となり、私たちを侵食していた。"
		],
		"chinese": [
			"森林边缘很美。但越深入，一切就越扭曲。",
			"植物像在尖叫般生长，布拉肯警告道：“这不正常。”",
			"探险队不相信。但心跳的倒计时并未停止。",
			"疯狂成为了森林的一部分，正在吞噬我们。"
		],
		"french": [
			"La lisière de la forêt était magnifique. Mais plus nous avancions, plus tout devenait tordu.",
			"Les plantes poussaient comme en hurlant, et Bracken avertit : \"Ce n'est pas normal.\"",
			"L'équipe d'expédition n'y croyait pas. Mais le compte à rebours dans nos cœurs ne s'est pas arrêté.",
			"La folie devint une partie de la forêt, nous dévorant."
		],
		"spanish": [
			"El borde del bosque era hermoso. Pero cuanto más nos adentrábamos, más retorcido se volvía todo.",
			"Las plantas crecían como si gritaran, y Bracken advirtió: \"Esto no es normal.\"",
			"El equipo de expedición no lo creyó. Pero la cuenta regresiva en nuestros corazones no se detuvo.",
			"La locura se convirtió en parte del bosque, consumiéndonos."
		],
		"vietnamese": [
			"Rìa rừng thật đẹp. Nhưng càng vào sâu, mọi thứ càng trở nên méo mó.",
			"Cây cối mọc như thể đang la hét, và Bracken cảnh báo: \"Chuyện này không bình thường.\"",
			"Đoàn thám hiểm không tin. Nhưng tiếng đếm ngược trong tim không ngừng lại.",
			"Sự điên loạn đã trở thành một phần của khu rừng, nuốt chửng chúng tôi."
		],
		"thai": [
			"ขอบป่าสวยงาม แต่ยิ่งลึกเข้าไป ทุกสิ่งก็ยิ่งบิดเบี้ยว",
			"พืชพรรณเติบโตราวกับกำลังกรีดร้อง และแบรคเคนเตือนว่า \"นี่มันไม่ปกติ\"",
			"ทีมสำรวจไม่เชื่อ แต่การนับถอยหลังในใจก็ไม่หยุดลง",
			"ความบ้าคลั่งกลายเป็นส่วนหนึ่งของป่า กลืนกินพวกเรา"
		],
		"hindi": [
			"जंगल का किनारा सुंदर था। लेकिन जितना गहरा हम गए, सब कुछ उतना ही विकृत होता गया।",
			"पौधे चीखते हुए उग रहे थे, और ब्रैकन ने चेतावनी दी, \"यह सामान्य नहीं है।\"",
			"अभियान दल को विश्वास नहीं हुआ। लेकिन हमारे दिलों की उलटी गिनती नहीं रुकी।",
			"पागलपन जंगल का एक हिस्सा बन गया, जो हमें निगल रहा था।"
		]
	}
} as const;
