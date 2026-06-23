export const scenario_desert_pactweaver_30_02 = {
	"scenario_id": "desert_pactweaver_30_02",
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
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "황량한 사막. 파괴된 구조물들이 끝없이 이어졌다.",
						"english": "A desolate desert. Ruined structures stretched endlessly.",
						"japanese": "荒涼たる砂漠。破壊された構造物が果てしなく続いていた。",
						"chinese": "荒凉的沙漠。被毁的建筑绵延不绝。",
						"french": "Un désert désolé. Des structures en ruine s'étendaient à l'infini.",
						"spanish": "Un desierto desolado. Estructuras destruidas se extendían sin fin.",
						"vietnamese": "Một sa mạc hoang vắng. Những cấu trúc đổ nát trải dài vô tận.",
						"thai": "ทะเลทรายอันรกร้าง โครงสร้างที่ถูกทำลายทอดยาวไม่สิ้นสุด",
						"hindi": "एक उजाड़ रेगिस्तान। नष्ट हुई संरचनाएं अंतहीन रूप से फैली हुई थीं।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이게… 다 폐허인가?",
						"english": "Is all of this... ruins?",
						"japanese": "これが…全部廃墟なのか？",
						"chinese": "这…都是废墟吗？",
						"french": "Tout ceci... n'est que ruines ?",
						"spanish": "¿Todo esto... son ruinas?",
						"vietnamese": "Đây... đều là tàn tích sao?",
						"thai": "นี่…ทั้งหมดนี่คือซากปรักหักพังหรือ?",
						"hindi": "क्या यह सब... खंडहर है?"
					},
					"emotion": "base"
				},
				{
					"spot": [
						5,
						2
					],
					"speaker": "kemet",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "kemet",
					"content": {
						"korean": "여기는 약속의 무덤이야. 이곳의 모든 맹세는 거짓이지.",
						"english": "This is the grave of promises. Every vow here is a lie.",
						"japanese": "ここは約束の墓場だ。ここの全ての誓いは嘘さ。",
						"chinese": "这里是承诺的坟墓。这里所有的誓言都是谎言。",
						"french": "C'est le tombeau des promesses. Chaque vœu ici est un mensonge.",
						"spanish": "Esta es la tumba de las promesas. Cada voto aquí es una mentira.",
						"vietnamese": "Đây là mồ chôn của những lời hứa. Mọi lời thề ở đây đều là dối trá.",
						"thai": "ที่นี่คือสุสานแห่งคำสัญญา ทุกคำสาบานที่นี่คือคำโกหก",
						"hindi": "यह वादों की कब्र है। यहां की हर कसम झूठ है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "누구세요?",
						"english": "Who are you?",
						"japanese": "あなたは誰？",
						"chinese": "你是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "คุณคือใคร?",
						"hindi": "आप कौन हैं?"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "케메트. 과거를 잃은 자.",
						"english": "Kemet. One who lost the past.",
						"japanese": "ケメト。過去を失った者。",
						"chinese": "凯麦特。一个失去过去的人。",
						"french": "Kemet. Celui qui a perdu le passé.",
						"spanish": "Kemet. Aquel que perdió el pasado.",
						"vietnamese": "Kemet. Kẻ đã mất đi quá khứ.",
						"thai": "เคเมท ผู้ที่สูญเสียอดีตไป",
						"hindi": "केमेट। जिसने अतीत खो दिया।"
					},
					"speaker": "kemet",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "kemet",
					"emotion": "base",
					"content": {
						"korean": "너도 왔으니… 이제 알게 될 거야. 이 사막의 진실을.",
						"english": "Since you've come... now you'll know. The truth of this desert.",
						"japanese": "君も来たからには…もうすぐ分かるだろう。この砂漠の真実を。",
						"chinese": "既然你也来了…现在你就会知道了。这片沙漠的真相。",
						"french": "Puisque tu es venu... maintenant tu sauras. La vérité de ce désert.",
						"spanish": "Ya que has venido... ahora sabrás. La verdad de este desierto.",
						"vietnamese": "Vì ngươi đã đến… giờ ngươi sẽ biết. Sự thật về sa mạc này.",
						"thai": "ในเมื่อเจ้ามาถึงแล้ว…ตอนนี้เจ้าจะได้รู้ความจริงของทะเลทรายแห่งนี้",
						"hindi": "चूंकि तुम आ गए हो… अब तुम्हें पता चलेगा। इस रेगिस्तान का सच।"
					}
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"spot": [
						5,
						2
					],
					"speaker": "kemet",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "모든 게 그 'Pactweaver' 때문이야.",
						"english": "It's all because of that 'Pactweaver'.",
						"japanese": "「全部あの『Pactweaver』のせいだ。」",
						"chinese": "这一切都怪那个'契约编织者'。",
						"french": "Tout est à cause de ce 'Tisserand de Pactes'.",
						"spanish": "Todo es por culpa de ese 'Pactweaver'.",
						"vietnamese": "Tất cả là tại 'Pactweaver' đó.",
						"thai": "ทั้งหมดเป็นเพราะ 'Pactweaver' นั่นแหละ",
						"hindi": "यह सब उस 'Pactweaver' की वजह से है।"
					},
					"emotion": "angry",
					"speaker": "kemet",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "Pactweaver… 그 현자가요?",
						"english": "Pactweaver… the Sage?",
						"japanese": "「Pactweaver… あの賢者ですか？」",
						"chinese": "契约编织者……那个贤者吗？",
						"french": "Le Tisserand de Pactes… ce sage ?",
						"spanish": "¿Pactweaver… ese sabio?",
						"vietnamese": "Pactweaver… vị hiền nhân đó ư?",
						"thai": "Pactweaver… นักปราชญ์ผู้นั้นเหรอ?",
						"hindi": "Pactweaver... वह ऋषि?"
					}
				},
				{
					"speaker": "kemet",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "현자? 하! 그는 약속을 미끼로 모든 것을 가져갔어.",
						"english": "Sage? Ha! He took everything, using promises as bait.",
						"japanese": "「賢者？ハッ！彼は約束を餌に全てを奪っていった。」",
						"chinese": "贤者？哈！他以承诺为诱饵，夺走了一切。",
						"french": "Sage ? Ha ! Il a tout pris, utilisant les promesses comme appât.",
						"spanish": "¿Sabio? ¡Ja! Lo tomó todo, usando las promesas como cebo.",
						"vietnamese": "Hiền nhân ư? Hừ! Hắn đã lấy đi tất cả, dùng lời hứa làm mồi nhử.",
						"thai": "นักปราชญ์เหรอ? ฮ่า! เขาเอาทุกอย่างไป โดยใช้คำสัญญาเป็นเหยื่อ",
						"hindi": "ऋषि? हा! उसने वादों को चारा बनाकर सब कुछ ले लिया।"
					}
				},
				{
					"content": {
						"korean": "나처럼, 모든 것을 잃은 자들이 이 폐허에 가득해.",
						"english": "Like me, those who lost everything fill these ruins.",
						"japanese": "「私のように、全てを失った者たちがこの廃墟に溢れている。」",
						"chinese": "像我一样，失去一切的人们遍布这些废墟。",
						"french": "Comme moi, ceux qui ont tout perdu remplissent ces ruines.",
						"spanish": "Como yo, los que lo perdieron todo llenan estas ruinas.",
						"vietnamese": "Giống như tôi, những kẻ mất tất cả đang tràn ngập trong đống đổ nát này.",
						"thai": "เหมือนกับฉัน ผู้ที่สูญเสียทุกอย่างก็เต็มซากปรักหักพังนี้",
						"hindi": "मुझ जैसे, सब कुछ खोने वाले इन खंडहरों में भरे पड़े हैं।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "kemet"
				},
				{
					"content": {
						"korean": "…그럼 우리가 만난 것도…?",
						"english": "…So our meeting, too…?",
						"japanese": "「…では、私たちが会ったのも…？」",
						"chinese": "……那么我们相遇也是……？",
						"french": "…Alors notre rencontre aussi… ?",
						"spanish": "…Entonces, ¿nuestro encuentro también…?",
						"vietnamese": "…Vậy việc chúng ta gặp nhau cũng…?",
						"thai": "…งั้นการที่เราได้พบกันก็…?",
						"hindi": "…तो हमारी मुलाकात भी…?"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "kemet",
					"spot": [
						5,
						2
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "너희가 맺는 모든 계약은… 결국 파멸로 이어질 뿐이야.",
						"english": "Every pact you make… will only lead to ruin in the end.",
						"japanese": "「お前たちが結ぶ全ての契約は…結局、破滅へと繋がるだけだ。」",
						"chinese": "你们所签订的每一个契约……最终都只会走向毁灭。",
						"french": "Tous les pactes que vous faites… ne mèneront qu'à la ruine à la fin.",
						"spanish": "Cada pacto que hagáis… solo os llevará a la ruina al final.",
						"vietnamese": "Mọi giao ước mà các ngươi lập ra… cuối cùng chỉ dẫn đến sự hủy diệt mà thôi.",
						"thai": "ทุกพันธสัญญาที่พวกเจ้าทำ… ท้ายที่สุดก็จะนำไปสู่ความหายนะเท่านั้น",
						"hindi": "तुम्हारे हर समझौते का अंत... केवल बर्बादी ही होगी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "kemet"
				},
				{
					"content": {
						"korean": "희망을 주지 말라는 건가요?",
						"english": "Are you telling us not to hope?",
						"japanese": "「希望を持つなというのですか？」",
						"chinese": "您是说不要抱有希望吗？",
						"french": "Vous nous dites de ne pas espérer ?",
						"spanish": "¿Nos estás diciendo que no tengamos esperanza?",
						"vietnamese": "Ngài đang bảo chúng tôi đừng hy vọng ư?",
						"thai": "ท่านกำลังบอกว่าอย่าให้ความหวังเหรอ?",
						"hindi": "क्या आप हमें उम्मीद न रखने को कह रहे हैं?"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "kemet",
					"content": {
						"korean": "희망? 그건 가장 달콤한 거짓말이지.",
						"english": "Hope? That's the sweetest lie.",
						"japanese": "「希望？それは最も甘い嘘だ。」",
						"chinese": "希望？那是最甜蜜的谎言。",
						"french": "L'espoir ? C'est le plus doux des mensonges.",
						"spanish": "¿Esperanza? Esa es la mentira más dulce.",
						"vietnamese": "Hy vọng ư? Đó là lời nói dối ngọt ngào nhất.",
						"thai": "ความหวังเหรอ? นั่นคือคำโกหกที่หอมหวานที่สุด",
						"hindi": "आशा? वह सबसे मीठा झूठ है।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "이 사막에서 약속을 믿는 건… 모래 위에 집을 짓는 것과 같아.",
						"english": "Believing promises in this desert… is like building a house on sand.",
						"japanese": "「この砂漠で約束を信じるのは…砂の上に家を建てるようなものだ。」",
						"chinese": "在这片沙漠中相信承诺……就像在沙子上盖房子一样。",
						"french": "Croire aux promesses dans ce désert… c'est comme construire une maison sur le sable.",
						"spanish": "Creer en promesas en este desierto… es como construir una casa sobre arena.",
						"vietnamese": "Tin vào lời hứa ở sa mạc này… giống như xây nhà trên cát vậy.",
						"thai": "การเชื่อคำสัญญาในทะเลทรายแห่งนี้… ก็เหมือนการสร้างบ้านบนผืนทราย",
						"hindi": "इस रेगिस्तान में वादों पर विश्वास करना... रेत पर घर बनाने जैसा है।"
					},
					"emotion": "base",
					"speaker": "kemet",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "우린… 달라요.",
						"english": "We… are different.",
						"japanese": "「私たちは…違う。」",
						"chinese": "我们……不一样。",
						"french": "Nous… sommes différents.",
						"spanish": "Nosotros… somos diferentes.",
						"vietnamese": "Chúng tôi… khác biệt.",
						"thai": "พวกเรา… แตกต่างกัน",
						"hindi": "हम… अलग हैं।"
					},
					"emotion": "angry"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"speaker": "kemet"
				},
				{
					"speaker": "kemet",
					"type": "speech",
					"content": {
						"korean": "그래, 달라 보이겠지. 하지만 결국 다 똑같아.",
						"english": "Yes, it might seem different. But in the end, it's all the same.",
						"japanese": "そう、違うように見えるだろう。でも結局は同じことだ。",
						"chinese": "是的，看起来不同。但最终都一样。",
						"french": "Oui, ça peut paraître différent. Mais au fond, c'est toujours la même chose.",
						"spanish": "Sí, puede parecer diferente. Pero al final, todo es igual.",
						"vietnamese": "Ừ, có vẻ khác. Nhưng rốt cuộc thì vẫn vậy thôi.",
						"thai": "ใช่ มันอาจดูแตกต่างออกไป แต่สุดท้ายแล้วมันก็เหมือนกันหมด",
						"hindi": "हाँ, यह अलग लग सकता है। लेकिन अंत में, यह सब एक जैसा ही है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…그만해요. 더 이상 듣기 싫어요.",
						"english": "...Stop it. I don't want to hear any more.",
						"japanese": "…やめてください。もう聞きたくない。",
						"chinese": "…住手。我不想再听了。",
						"french": "...Arrêtez. Je n'en peux plus d'entendre ça.",
						"spanish": "...Basta. No quiero oír más.",
						"vietnamese": "...Dừng lại đi. Tôi không muốn nghe nữa.",
						"thai": "...พอที ฉันไม่อยากฟังอีกแล้ว",
						"hindi": "...बस करो। मैं और नहीं सुनना चाहता।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "kemet",
					"type": "speech",
					"content": {
						"korean": "네 분노가 너를 움직이겠지. 하지만 그게 진짜 힘일까?",
						"english": "Your rage will drive you. But is that true strength?",
						"japanese": "君の怒りが君を動かすだろう。だが、それが本当の力なのか？",
						"chinese": "你的愤怒会驱使你。但那是真正的力量吗？",
						"french": "Ta rage te mènera. Mais est-ce une vraie force ?",
						"spanish": "Tu ira te moverá. ¿Pero es eso verdadera fuerza?",
						"vietnamese": "Cơn giận của ngươi sẽ thúc đẩy ngươi. Nhưng đó có phải là sức mạnh thật sự?",
						"thai": "ความโกรธของเจ้าจะผลักดันเจ้าไปข้างหน้า แต่สิ่งนั้นคือพลังที่แท้จริงหรือ?",
						"hindi": "तुम्हारा क्रोध तुम्हें प्रेरित करेगा। लेकिन क्या वह असली शक्ति है?"
					},
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "멀리서, 어둠의 기운이 몰려왔다. 깨진 계약의 파편들이었다.",
						"english": "From afar, a dark aura gathered. Fragments of broken pacts.",
						"japanese": "遠くから、闇の気が集まってきた。それは破れた契約の破片だった。",
						"chinese": "远处，黑暗的气息聚集而来。那是破碎契约的碎片。",
						"french": "Au loin, une aura sombre se rassemblait. C'étaient les fragments de pactes brisés.",
						"spanish": "Desde lejos, un aura oscura se aglomeró. Eran fragmentos de pactos rotos.",
						"vietnamese": "Từ xa, một luồng khí đen tụ lại. Đó là những mảnh vỡ của các khế ước đã tan vỡ.",
						"thai": "จากที่ไกลออกไป ออร่าแห่งความมืดมิดได้รวมตัวกัน นั่นคือชิ้นส่วนของพันธสัญญาที่แตกสลาย",
						"hindi": "दूर से, एक काली आभा एकत्र हुई। वे टूटे हुए समझौतों के टुकड़े थे।"
					}
				},
				{
					"action": "exit",
					"direction": "down",
					"type": "direction",
					"duration_ms": 400,
					"speaker": "kemet"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"emotion": "happy",
					"content": {
						"korean": "하하! 너의 희망은 모래처럼 부서질 것이다!",
						"english": "Haha! Your hopes will shatter like sand!",
						"japanese": "ハハ！お前の希望は砂のように砕け散るだろう！",
						"chinese": "哈哈！你的希望将如沙般破碎！",
						"french": "Hahaha ! Tes espoirs s'écrouleront comme du sable !",
						"spanish": "¡Jaja! ¡Tus esperanzas se harán añicos como arena!",
						"vietnamese": "Ha ha! Hy vọng của ngươi sẽ tan vỡ như cát!",
						"thai": "ฮ่าฮ่า! ความหวังของเจ้าจะแหลกสลายเหมือนทราย!",
						"hindi": "हाहा! तेरी आशाएं रेत की तरह बिखर जाएंगी!"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "젠장… 아직… 끝나지 않았어!",
						"english": "Damn it... It's not... over yet!",
						"japanese": "ちくしょう…まだ…終わってない！",
						"chinese": "该死……还没……结束！",
						"french": "Maudit... Ce n'est pas... fini !",
						"spanish": "Maldita sea... ¡Aún no... ha terminado!",
						"vietnamese": "Chết tiệt... Vẫn... chưa kết thúc!",
						"thai": "ให้ตายสิ... ยัง... ไม่จบ!",
						"hindi": "लानत है... अभी... खत्म नहीं हुआ!"
					},
					"emotion": "angry"
				},
				{
					"spot": [
						5,
						2
					],
					"speaker": "kemet",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "내가 말했지? 이곳의 모든 약속은 거짓이라고.",
						"english": "Didn't I tell you? All promises here are lies.",
						"japanese": "言っただろう？ここの全ての約束は嘘だと。",
						"chinese": "我不是说过吗？这里所有的承诺都是谎言。",
						"french": "Je te l'avais dit, non ? Toutes les promesses ici ne sont que mensonges.",
						"spanish": "¿No te lo dije? Todas las promesas aquí son mentiras.",
						"vietnamese": "Tôi đã nói rồi mà? Mọi lời hứa ở đây đều là dối trá.",
						"thai": "ฉันบอกแล้วไม่ใช่เหรอ? สัญญาที่นี่ล้วนเป็นเรื่องโกหก",
						"hindi": "मैंने कहा था ना? यहाँ के सभी वादे झूठे हैं।"
					},
					"speaker": "kemet",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크으… 한심한 것. 이겼다고 생각하나? 너의 분노는… 결국 그를 위한 것…",
						"english": "Ugh... Pathetic. Do you think you've won? Your rage... is ultimately for him...",
						"japanese": "くう… 哀れな奴。勝ったとでも思うのか？お前の怒りは… 結局彼のため…",
						"chinese": "呃… 可悲的东西。你以为你赢了吗？你的愤怒… 最终是为了他…",
						"french": "Ugh… Pathétique. Crois-tu avoir gagné ? Ta rage… n'est finalement que pour lui…",
						"spanish": "Ugh… Patético. ¿Crees que has ganado? Tu ira… es finalmente para él…",
						"vietnamese": "Khụ... Đồ thảm hại. Ngươi nghĩ mình đã thắng sao? Cơn giận của ngươi... rốt cuộc cũng vì hắn...",
						"thai": "อึก... น่าสมเพช เจ้าคิดว่าเจ้าชนะแล้วหรือ? ความโกรธของเจ้า... แท้จริงแล้วก็เพื่อเขา...",
						"hindi": "उह... दयनीय। क्या तुम्हें लगता है कि तुम जीत गए हो? तुम्हारा क्रोध... अंततः उसी के लिए है..."
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…젠장. 또 속은 건가.",
						"english": "...Damn it. Was I fooled again.",
						"japanese": "…ちくしょう。また騙されたのか。",
						"chinese": "…该死。又被骗了吗？",
						"french": "...Mince. Encore une fois dupé ?",
						"spanish": "...Maldita sea. ¿Me engañaron otra vez?",
						"vietnamese": "...Chết tiệt. Lại bị lừa nữa sao.",
						"thai": "...ให้ตายสิ ข้าถูกหลอกอีกแล้วหรือนี่",
						"hindi": "...धिक्कार है। क्या मैं फिर से मूर्ख बना?"
					},
					"emotion": "sad"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"speaker": "kemet"
				},
				{
					"type": "speech",
					"speaker": "kemet",
					"content": {
						"korean": "봤지? 모든 약속은 부서지기 마련이야.",
						"english": "See? All promises are meant to be broken.",
						"japanese": "見たか？全ての約束は破られるものだ。",
						"chinese": "看到了吗？所有的承诺都注定会破裂。",
						"french": "Tu vois ? Toutes les promesses sont faites pour être brisées.",
						"spanish": "¿Lo ves? Todas las promesas están destinadas a romperse.",
						"vietnamese": "Thấy chưa? Mọi lời hứa đều sẽ tan vỡ.",
						"thai": "เห็นไหม? ทุกคำสัญญาล้วนต้องแตกหัก",
						"hindi": "देखा? सभी वादे टूटने के लिए ही होते हैं।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "승리했지만, 마음속엔 여전히 냉소적인 그림자가 드리웠다. 사막의 진실은 더욱 깊었다.",
						"english": "Victory, yet a cynical shadow still loomed in the heart. The desert's truth ran deeper.",
						"japanese": "勝利したが、心には依然として冷笑的な影が差していた。砂漠の真実はさらに深かった。",
						"chinese": "虽获胜利，但内心仍笼罩着玩世不恭的阴影。沙漠的真相更加深刻。",
						"french": "La victoire, pourtant une ombre cynique planait toujours dans le cœur. La vérité du désert était plus profonde encore.",
						"spanish": "Victoria, pero una sombra cínica aún se cernía en el corazón. La verdad del desierto era aún más profunda.",
						"vietnamese": "Chiến thắng rồi, nhưng trong lòng vẫn còn vương vấn một bóng đen hoài nghi. Sự thật về sa mạc còn sâu sắc hơn nhiều.",
						"thai": "แม้จะชนะ แต่เงาแห่งความเย้ยหยันยังคงปกคลุมหัวใจ ความจริงของทะเลทรายนั้นลึกซึ้งกว่า",
						"hindi": "जीत मिली, फिर भी दिल में एक सनकी परछाई छाई रही। रेगिस्तान का सच और भी गहरा था।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "어리석은 인간들. 또 다른 약속을 믿으러 왔는가?",
						"english": "Foolish humans. Have you come to believe in yet another promise?",
						"japanese": "愚かな人間どもめ。また別の約束を信じに来たのか？",
						"chinese": "愚蠢的人类。又来相信另一个承诺了吗？",
						"french": "Humains insensés. Êtes-vous venus croire en une autre promesse ?",
						"spanish": "Humanos necios. ¿Han venido a creer en otra promesa?",
						"vietnamese": "Loài người ngu xuẩn. Lại đến tin vào một lời hứa khác nữa sao?",
						"thai": "มนุษย์โง่เขลา เจ้ามาเพื่อเชื่อในคำสัญญาอื่นอีกแล้วหรือ?",
						"hindi": "मूर्ख मनुष्यों। क्या तुम एक और वादे पर विश्वास करने आए हो?"
					}
				},
				{
					"content": {
						"korean": "너도 Pactweaver의 꼭두각시냐?",
						"english": "Are you also Pactweaver's puppet?",
						"japanese": "お前もPactweaverの操り人形か？",
						"chinese": "你也是Pactweaver的傀儡吗？",
						"french": "Es-tu aussi la marionnette de Pactweaver ?",
						"spanish": "¿También eres un títere de Pactweaver?",
						"vietnamese": "Ngươi cũng là con rối của Pactweaver sao?",
						"thai": "เจ้าก็เป็นหุ่นเชิดของ Pactweaver เช่นกันรึ?",
						"hindi": "क्या तुम भी Pactweaver की कठपुतली हो?"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "나는 그저 깨진 계약들의 잔해일 뿐. 너희의 분노가 나를 키웠다.",
						"english": "I am merely the remnants of broken pacts. Your rage nurtured me.",
						"japanese": "私はただの破れた契約の残骸に過ぎない。お前たちの怒りが私を育てた。",
						"chinese": "我不过是破碎契约的残骸。是你们的愤怒滋养了我。",
						"french": "Je ne suis que les vestiges de pactes brisés. Votre rage m'a nourri.",
						"spanish": "Solo soy los restos de pactos rotos. Vuestra ira me alimentó.",
						"vietnamese": "Ta chỉ là tàn dư của những khế ước đổ vỡ. Cơn giận của các ngươi đã nuôi dưỡng ta.",
						"thai": "ข้าเป็นเพียงเศษซากของพันธสัญญาที่แตกสลาย ความโกรธของพวกเจ้าได้หล่อเลี้ยงข้า",
						"hindi": "मैं केवल टूटे हुए समझौतों का अवशेष हूँ। तुम्हारे क्रोध ने मुझे पाला है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "닥쳐! 너를 부순다!",
						"english": "Silence! I'll break you!",
						"japanese": "黙れ！貴様を打ち砕く！",
						"chinese": "闭嘴！我要摧毁你！",
						"french": "Tais-toi ! Je vais te briser !",
						"spanish": "¡Cállate! ¡Te destruiré!",
						"vietnamese": "Câm mồm! Ta sẽ nghiền nát ngươi!",
						"thai": "หุบปาก! ข้าจะทำลายเจ้า!",
						"hindi": "चुप रहो! मैं तुम्हें तोड़ दूँगा!"
					},
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"사막은 끝없이 약속을 집어삼켰다.",
			"모래는 모든 맹세를 기억하지 못했다.",
			"오직 파괴된 희망만이 이 황야에 남아.",
			"그리고 진실은, 언제나 그랬듯 비웃음 속에서 기다렸다."
		],
		"english": [
			"The desert endlessly devoured promises.",
			"The sand remembered no vows.",
			"Only shattered hope remained in this wasteland.",
			"And the truth, as always, waited amidst the scorn."
		],
		"japanese": [
			"砂漠は際限なく約束を飲み込んだ。",
			"砂は全ての誓いを覚えていなかった。",
			"この荒野には、ただ破壊された希望だけが残った。",
			"そして真実は、いつものように嘲笑の中で待っていた。"
		],
		"chinese": [
			"沙漠无尽地吞噬着承诺。",
			"沙子不记得任何誓言。",
			"只有破碎的希望留在这片荒原。",
			"而真相，一如既往地在嘲笑中等待。"
		],
		"french": [
			"Le désert dévorait sans fin les promesses.",
			"Le sable ne se souvenait d'aucun serment.",
			"Seul l'espoir brisé demeurait dans ce désert.",
			"Et la vérité, comme toujours, attendait au milieu du mépris."
		],
		"spanish": [
			"El desierto devoraba sin fin las promesas.",
			"La arena no recordaba ninguna promesa.",
			"Solo la esperanza destrozada permaneció en este páramo.",
			"Y la verdad, como siempre, esperaba entre la burla."
		],
		"vietnamese": [
			"Sa mạc nuốt chửng những lời hứa không ngừng.",
			"Cát không nhớ bất kỳ lời thề nào.",
			"Chỉ có hy vọng tan vỡ còn lại trong vùng đất hoang này.",
			"Và sự thật, như mọi khi, chờ đợi giữa những lời chế nhạo."
		],
		"thai": [
			"ทะเลทรายกลืนกินคำสัญญาไม่สิ้นสุด",
			"ทรายไม่จดจำคำสาบานใดๆ",
			"เหลือเพียงความหวังที่แตกสลายในดินแดนรกร้างนี้",
			"และความจริงนั้น เช่นเคย รอคอยอยู่ในเสียงเย้ยหยัน"
		],
		"hindi": [
			"रेगिस्तान ने वादों को अंतहीन निगल लिया।",
			"रेत को कोई कसम याद नहीं थी।",
			"इस बंजर भूमि में केवल टूटी हुई आशा बची थी।",
			"और सत्य, हमेशा की तरह, उपहास के बीच प्रतीक्षा कर रहा था।"
		]
	}
} as const;
