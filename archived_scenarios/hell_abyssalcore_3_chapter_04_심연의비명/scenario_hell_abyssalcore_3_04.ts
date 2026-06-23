export const scenario_hell_abyssalcore_3_04 = {
	"scenario_id": "hell_abyssalcore_3_04",
	"order": 4,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"drox": {
			"id": "mon_2fc30621-a15f-4371-9e37-295cdcb5675d",
			"name": {
				"korean": "드록스",
				"english": "Drox",
				"japanese": "ドロックス",
				"chinese": "德罗克斯",
				"french": "Drox",
				"spanish": "Drox",
				"vietnamese": "Đrốc",
				"thai": "ดรอกซ์",
				"hindi": "ड्रॉक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/509c0376-2230-4669-d022-7e5336293200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/916b4cfa-f792-4f4a-5346-681095481e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "지옥의 경계가 희미해진다. 혼돈이 스며들기 시작했다.",
						"english": "The frontier of hell blurs. Chaos begins to seep in.",
						"japanese": "地獄の境界が薄れる。混沌が浸食し始めた。",
						"chinese": "地狱的边界变得模糊。混沌开始渗透。",
						"french": "La frontière de l'enfer s'estompe. Le chaos commence à s'infiltrer.",
						"spanish": "La frontera del infierno se desdibuja. El caos empieza a filtrarse.",
						"vietnamese": "Biên giới địa ngục mờ dần. Hỗn loạn bắt đầu tràn vào.",
						"thai": "ขอบเขตของนรกเลือนลาง ความโกลาหลเริ่มแทรกซึมเข้ามา",
						"hindi": "नरक की सीमा धुंधली हो रही है। अराजकता फैलने लगी है।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "drox"
				},
				{
					"speaker": "drox",
					"content": {
						"korean": "…저게 Abyssal Core의 봉인인가.",
						"english": "...Is that the Abyssal Core's seal?",
						"japanese": "…あれがAbyssal Coreの封印か。",
						"chinese": "……那是深渊之核的封印吗？",
						"french": "...Est-ce le sceau de l'Abyssal Core ?",
						"spanish": "...¿Es ese el sello del Núcleo Abisal?",
						"vietnamese": "...Đó có phải là phong ấn của Lõi Vực Thẳm không?",
						"thai": "...นั่นคือผนึกของ Abyssal Core หรือไม่",
						"hindi": "...क्या वह Abyssal Core की मुहर है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "고통스러워 보이는군. 봉인을 유지하려… 애쓰고 있어.",
						"english": "It looks tormented. Struggling... to maintain the seal.",
						"japanese": "苦しんでいるようだ。封印を保とうと…もがいている。",
						"chinese": "它看起来很痛苦。在挣扎着……维持封印。",
						"french": "Il semble tourmenté. Il lutte... pour maintenir le sceau.",
						"spanish": "Parece atormentado. Lucha... por mantener el sello.",
						"vietnamese": "Trông nó thật đau đớn. Đang cố gắng... để duy trì phong ấn.",
						"thai": "ดูทรมานเหลือเกิน กำลังพยายาม...รักษารอยผนึกไว้",
						"hindi": "यह पीड़ित दिख रहा है। सील को बनाए रखने के लिए... संघर्ष कर रहा है।"
					},
					"speaker": "drox"
				},
				{
					"content": {
						"korean": "몸부림치는 것처럼 보여?",
						"english": "Does it look like it's struggling?",
						"japanese": "もがいているように見えるのか？",
						"chinese": "看起来像是在挣扎吗？",
						"french": "On dirait qu'il se débat ?",
						"spanish": "¿Parece que está luchando?",
						"vietnamese": "Trông nó như đang giằng xé sao?",
						"thai": "ดูเหมือนกำลังดิ้นรนหรือเปล่า",
						"hindi": "क्या यह संघर्ष करता हुआ दिख रहा है?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "drox",
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
					"emotion": "sad",
					"speaker": "drox",
					"content": {
						"korean": "그래. 하지만… 그 고통이 주변 영혼들을 집어삼키고 있어.",
						"english": "Yes. But... its agony is consuming the surrounding souls.",
						"japanese": "そうだ。しかし…その苦痛が周囲の魂を食い尽くしている。",
						"chinese": "是的。但是……它的痛苦正在吞噬周围的灵魂。",
						"french": "Oui. Mais... son agonie consume les âmes environnantes.",
						"spanish": "Sí. Pero... su agonía está consumiendo las almas cercanas.",
						"vietnamese": "Đúng vậy. Nhưng... sự đau đớn đó đang nuốt chửng những linh hồn xung quanh.",
						"thai": "ใช่ แต่...ความเจ็บปวดนั้นกำลังกลืนกินวิญญาณรอบข้าง",
						"hindi": "हाँ। लेकिन... इसकी पीड़ा आस-पास की आत्माओं को निगल रही है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "봉인을 유지하려는 건데 왜 영혼이 고통받지?",
						"english": "It's trying to maintain the seal, so why are souls suffering?",
						"japanese": "封印を維持しようとしているのに、なぜ魂が苦しむんだ？",
						"chinese": "它是想维持封印，为什么灵魂会受苦呢？",
						"french": "Il essaie de maintenir le sceau, alors pourquoi les âmes souffrent-elles ?",
						"spanish": "Intenta mantener el sello, entonces ¿por qué sufren las almas?",
						"vietnamese": "Nó đang cố gắng duy trì phong ấn, vậy tại sao các linh hồn lại đau khổ?",
						"thai": "กำลังพยายามรักษารอยผนึกไว้ แล้วทำไมวิญญาณถึงต้องทนทุกข์",
						"hindi": "यह सील को बनाए रखने की कोशिश कर रहा है, तो आत्माएं क्यों पीड़ित हो रही हैं?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "drox",
					"content": {
						"korean": "Abyssal Core가 지옥의 기운을 흡수하고 있지만…",
						"english": "The Abyssal Core is absorbing the hellish energy, but…",
						"japanese": "アビサルコアが地獄の気を吸収しているが…",
						"chinese": "深渊核心正在吸收地狱的气息，但是…",
						"french": "Le Cœur abyssal absorbe l'énergie infernale, mais…",
						"spanish": "El Núcleo Abisal está absorbiendo la energía infernal, pero…",
						"vietnamese": "Lõi Hố Thẳm đang hấp thụ năng lượng địa ngục, nhưng…",
						"thai": "แกนกลางแห่งขุมนรกกำลังดูดซับพลังงานจากนรก แต่มัน…",
						"hindi": "रसातल का कोर नरक की ऊर्जा को सोख रहा है, लेकिन…"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "그 에너지 자체가 영혼들에게는 치명적인 독이야.",
						"english": "That energy itself is a deadly poison to souls.",
						"japanese": "そのエネルギー自体が魂にとっては致命的な毒だ。",
						"chinese": "那能量本身对灵魂来说是致命的剧毒。",
						"french": "Cette énergie est un poison mortel pour les âmes.",
						"spanish": "Esa energía misma es un veneno mortal para las almas.",
						"vietnamese": "Năng lượng đó chính là thuốc độc chết người đối với linh hồn.",
						"thai": "พลังงานนั้นเป็นพิษร้ายแรงสำหรับดวงวิญญาณ",
						"hindi": "वह ऊर्जा स्वयं आत्माओं के लिए एक घातक ज़हर है।"
					},
					"speaker": "drox"
				},
				{
					"content": {
						"korean": "그럼… 우리가 막아야 하는 걸까?",
						"english": "So… should we stop it?",
						"japanese": "なら… 私たちが止めなきゃいけないのか？",
						"chinese": "那么… 我们应该阻止它吗？",
						"french": "Alors… devons-nous l'arrêter ?",
						"spanish": "Entonces… ¿debemos detenerlo?",
						"vietnamese": "Vậy… chúng ta có nên ngăn chặn nó không?",
						"thai": "งั้น… เราควรหยุดมันไหม?",
						"hindi": "तो… क्या हमें इसे रोकना चाहिए?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "drox"
				},
				{
					"content": {
						"korean": "이 비명 소리… 들려? 점점 날카로워져.",
						"english": "These screams… do you hear them? They're getting sharper.",
						"japanese": "この悲鳴… 聞こえるか？どんどん鋭くなってる。",
						"chinese": "这些尖叫声… 你听到了吗？它们越来越尖锐了。",
						"french": "Ces cris… les entends-tu ? Ils deviennent de plus en plus stridents.",
						"spanish": "Estos gritos… ¿los oyes? Se están volviendo más agudos.",
						"vietnamese": "Những tiếng la hét này… bạn có nghe thấy không? Chúng ngày càng chói tai hơn.",
						"thai": "เสียงกรีดร้องพวกนี้… ได้ยินไหม? มันแหลมคมขึ้นเรื่อยๆ",
						"hindi": "ये चीखें… क्या तुम सुनते हो? वे और तीखी होती जा रही हैं।"
					},
					"speaker": "drox",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "고통스러워하는 영혼들의 소리인가?",
						"english": "Is it the sound of tormented souls?",
						"japanese": "苦しむ魂たちの声なのか？",
						"chinese": "是受折磨的灵魂的声音吗？",
						"french": "Est-ce le son des âmes tourmentées ?",
						"spanish": "¿Es el sonido de las almas atormentadas?",
						"vietnamese": "Đây có phải là tiếng của những linh hồn đang đau khổ không?",
						"thai": "นี่คือเสียงของวิญญาณที่ทุกข์ทรมานหรือเปล่า?",
						"hindi": "क्या यह पीड़ित आत्माओं की आवाज़ है?"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "drox",
					"content": {
						"korean": "Abyssal Core를 막아야 할까? 아니면… 이 고통을 끝내줘야 할까?",
						"english": "Should we stop the Abyssal Core? Or… should we end this suffering?",
						"japanese": "アビサルコアを止めるべきか？それとも… この苦しみを終わらせるべきか？",
						"chinese": "我们应该阻止深渊核心吗？还是… 结束这份痛苦？",
						"french": "Devons-nous arrêter le Cœur abyssal ? Ou… devons-nous mettre fin à cette souffrance ?",
						"spanish": "¿Debemos detener el Núcleo Abisal? O… ¿debemos poner fin a este sufrimiento?",
						"vietnamese": "Chúng ta có nên ngăn chặn Lõi Hố Thẳm không? Hay… nên chấm dứt nỗi đau này?",
						"thai": "เราควรหยุด Abyssal Core ไหม? หรือ… เราควรยุติความทุกข์ทรมานนี้?",
						"hindi": "क्या हमें रसातल के कोर को रोकना चाहिए? या… क्या हमें इस पीड़ा को समाप्त कर देना चाहिए?"
					}
				},
				{
					"content": {
						"korean": "…우리가 뭘 할 수 있지?",
						"english": "…What can we do?",
						"japanese": "…私たちが何ができるんだ？",
						"chinese": "…我们能做什么？",
						"french": "…Que pouvons-nous faire ?",
						"spanish": "…¿Qué podemos hacer?",
						"vietnamese": "…Chúng ta có thể làm gì?",
						"thai": "…เราจะทำอะไรได้บ้าง?",
						"hindi": "…हम क्या कर सकते हैं?"
					},
					"speaker": "character_1",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "어느 쪽이 더 큰 죄가 될까.",
						"english": "Which would be the greater sin?",
						"japanese": "どちらの方がより大きな罪になるのか。",
						"chinese": "哪一个会是更大的罪过？",
						"french": "Lequel serait le plus grand péché ?",
						"spanish": "¿Cuál sería el mayor pecado?",
						"vietnamese": "Điều nào sẽ là tội lỗi lớn hơn?",
						"thai": "ทางไหนจะเป็นบาปที่ใหญ่กว่ากันนะ",
						"hindi": "इनमें से कौन सा बड़ा पाप होगा।"
					},
					"speaker": "character_2",
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "drox"
				},
				{
					"speaker": "drox",
					"content": {
						"korean": "더 이상 지켜볼 수 없어. 이 영혼들의 울부짖음이… 나를 미치게 해.",
						"english": "I can't watch any longer. The wailing of these souls… it's driving me mad.",
						"japanese": "もう見ていられない。この魂たちの叫びが… 私を狂わせる。",
						"chinese": "我不能再旁观了。这些灵魂的哀嚎… 让我发疯。",
						"french": "Je ne peux plus supporter ça. Les hurlements de ces âmes… me rendent fou.",
						"spanish": "No puedo seguir observando. El lamento de estas almas… me está volviendo loco.",
						"vietnamese": "Tôi không thể chịu đựng thêm nữa. Tiếng than khóc của những linh hồn này… đang khiến tôi phát điên.",
						"thai": "ฉันทนดูต่อไปไม่ไหวแล้ว เสียงคร่ำครวญของวิญญาณเหล่านี้… กำลังทำให้ฉันคลั่ง",
						"hindi": "मैं अब और नहीं देख सकता। इन आत्माओं का रोना… मुझे पागल कर रहा है।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "drox",
					"content": {
						"korean": "끔찍한 고통 속에서도… 무언가를 염원하는 속삭임이 들려와.",
						"english": "Even amidst terrible suffering… I hear whispers of something longed for.",
						"japanese": "恐ろしい苦痛の中でも… 何かを願う囁きが聞こえてくる。",
						"chinese": "即使在可怕的痛苦中… 我也听到渴望某物的低语。",
						"french": "Même au milieu d'une terrible souffrance… j'entends des murmures de quelque chose de désiré.",
						"spanish": "Incluso en medio de un sufrimiento terrible… oigo susurros de algo anhelado.",
						"vietnamese": "Ngay cả giữa nỗi đau khủng khiếp… tôi vẫn nghe thấy những lời thì thầm khao khát điều gì đó.",
						"thai": "แม้ในความเจ็บปวดอันเลวร้าย… ฉันก็ได้ยินเสียงกระซิบที่ปรารถนาบางสิ่ง",
						"hindi": "भयानक पीड़ा के बीच भी… मुझे किसी चीज़ के लिए तरसने की फुसफुसाहट सुनाई देती है।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "염원? 그들은 무엇을 바라는 거지?",
						"english": "Aspirations? What do they wish for?",
						"japanese": "宿願？彼らは何を望んでいるんだ？",
						"chinese": "夙愿？他们到底想要什么？",
						"french": "Aspirations ? Que désirent-ils ?",
						"spanish": "¿Aspiraciones? ¿Qué desean?",
						"vietnamese": "Ước nguyện? Chúng muốn gì?",
						"thai": "ความปรารถนา? พวกมันต้องการอะไร?",
						"hindi": "आकांक्षाएँ? वे क्या चाहते हैं?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "drox",
					"content": {
						"korean": "…모르겠어. 그저… 멈춰달라는 것 같기도 하고, 계속하라는 것 같기도 해.",
						"english": "...I don't know. It's as if... they want us to stop, and yet, to continue.",
						"japanese": "…分からない。ただ…止めてほしいようにも、続けてほしいようにも感じる。",
						"chinese": "…我不知道。似乎…他们既想让我们停下，又想让我们继续。",
						"french": "...Je ne sais pas. C'est comme s'ils... voulaient qu'on s'arrête, et pourtant, qu'on continue.",
						"spanish": "...No lo sé. Es como si... quisieran que nos detuviéramos, y a la vez, que continuáramos.",
						"vietnamese": "...Tôi không biết. Cứ như thể... chúng muốn chúng ta dừng lại, nhưng cũng muốn chúng ta tiếp tục.",
						"thai": "...ฉันไม่รู้สิ แค่... เหมือนอยากให้หยุด บางทีก็อยากให้ทำต่อไป",
						"hindi": "...मुझे नहीं पता। ऐसा लगता है कि... वे हमें रुकने के लिए कह रहे हैं, और फिर भी, जारी रखने के लिए भी।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_3",
					"content": {
						"korean": "혼돈 속에서… 길을 잃었어.",
						"english": "Lost... in the chaos.",
						"japanese": "混沌の中で…道を見失った。",
						"chinese": "在混沌中…迷失了方向。",
						"french": "Perdu... dans le chaos.",
						"spanish": "Perdido... en el caos.",
						"vietnamese": "Lạc lối... giữa hỗn loạn.",
						"thai": "หลงทาง...ท่ามกลางความโกลาหล",
						"hindi": "अराजकता में... खो गया हूँ।"
					}
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "심연의 가장 깊은 곳. 뒤틀린 혼돈의 핵이 모습을 드러냈다.",
						"english": "The deepest abyss. The twisted core of chaos has revealed itself.",
						"japanese": "深淵の最深部。歪んだ混沌の核がその姿を現した。",
						"chinese": "深渊的最深处。扭曲的混沌之核显现了。",
						"french": "L'abîme le plus profond. Le noyau tordu du chaos s'est révélé.",
						"spanish": "El abismo más profundo. El retorcido núcleo del caos se ha revelado.",
						"vietnamese": "Nơi sâu thẳm nhất của vực thẳm. Lõi hỗn loạn méo mó đã lộ diện.",
						"thai": "ห้วงลึกสุดของห้วงเหว แกนกลางแห่งความวุ่นวายบิดเบี้ยวได้ปรากฏตัวขึ้น",
						"hindi": "अथाह गहराई में। अराजकता का मुड़ा हुआ केंद्र प्रकट हो गया है।"
					},
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"speaker": "random_boss",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						5,
						8
					]
				},
				{
					"content": {
						"korean": "…감히, 이 영역을 침범하는가.",
						"english": "...How dare you trespass this domain?",
						"japanese": "…よくも、この領域を侵す気か。",
						"chinese": "…竟敢，侵犯此领域。",
						"french": "...Comment osez-vous envahir ce domaine ?",
						"spanish": "...¿Cómo osas invadir este dominio?",
						"vietnamese": "...Dám, xâm phạm lãnh địa này sao.",
						"thai": "...กล้าดียังไง มาบุกรุกอาณาเขตนี้?",
						"hindi": "...तुम्हारी हिम्मत कैसे हुई, इस क्षेत्र में अतिक्रमण करने की।"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "이 고통은… 봉인을 위한 것이다. 너희는 이해하지 못한다.",
						"english": "This pain... is for the sealing. You do not understand.",
						"japanese": "この苦痛は…封印のためだ。お前たちには理解できない。",
						"chinese": "这痛苦…是为了封印。你们不明白。",
						"french": "Cette douleur... est pour le scellement. Vous ne comprenez pas.",
						"spanish": "Este dolor... es para el sellado. Vosotros no lo entendéis.",
						"vietnamese": "Nỗi đau này... là để phong ấn. Các ngươi không hiểu đâu.",
						"thai": "ความเจ็บปวดนี้...มีไว้เพื่อผนึก พวกเจ้าไม่เข้าใจหรอก",
						"hindi": "यह दर्द... सील करने के लिए है। तुम नहीं समझते।"
					}
				},
				{
					"direction": "down",
					"type": "direction",
					"duration_ms": 400,
					"speaker": "drox",
					"action": "exit"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "이 고통을 끝내주겠어!",
						"english": "I'll end this suffering!",
						"japanese": "この苦痛を終わらせてやる！",
						"chinese": "我要终结这痛苦！",
						"french": "Je vais mettre fin à cette souffrance !",
						"spanish": "¡Acabaré con este sufrimiento!",
						"vietnamese": "Ta sẽ chấm dứt nỗi đau này!",
						"thai": "ฉันจะยุติความเจ็บปวดนี้ซะ!",
						"hindi": "मैं इस पीड़ा को समाप्त करूँगा!"
					}
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "크윽… 멈췄다고… 끝나는 게 아니다…",
						"english": "Ugh... Just because it's stopped... doesn't mean it's over...",
						"japanese": "くっ…止まったとて…終わりではない…。",
						"chinese": "呃…停止了…不代表就结束了…",
						"french": "Ugh... Ce n'est pas parce que ça s'est arrêté... que c'est fini...",
						"spanish": "Ugh... Que se haya detenido... no significa que haya terminado...",
						"vietnamese": "Ư... Dù đã dừng lại... nhưng chưa phải là kết thúc...",
						"thai": "อึก...แค่หยุด...ไม่ได้หมายความว่าจบสิ้น...",
						"hindi": "उफ़... सिर्फ इसलिए कि यह रुक गया है... इसका मतलब यह नहीं कि यह खत्म हो गया है..."
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "진정한 해방은… 너희가 상상조차 못 할…",
						"english": "True liberation is... beyond your wildest imagination...",
						"japanese": "真の解放は…お前たちが想像すらできない…。",
						"chinese": "真正的解放是…你们无法想象的…",
						"french": "La vraie libération est... au-delà de votre imagination la plus folle...",
						"spanish": "La verdadera liberación es... algo que ni siquiera podéis imaginar...",
						"vietnamese": "Sự giải thoát thật sự... là điều các ngươi không thể tưởng tượng nổi...",
						"thai": "การปลดปล่อยที่แท้จริงคือ...สิ่งที่พวกเจ้าคาดไม่ถึง...",
						"hindi": "सच्ची मुक्ति... तुम्हारी कल्पना से भी परे है..."
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "…무슨 소리지?",
						"english": "...What was that?",
						"japanese": "…何て言った？",
						"chinese": "…什么意思？",
						"french": "...Qu'est-ce que c'est que ça ?",
						"spanish": "...¿Qué ha sido eso?",
						"vietnamese": "...Ý ngươi là gì?",
						"thai": "...อะไรนะ?",
						"hindi": "...यह क्या है?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "Abyssal Core의 외벽을 지키던 정체불명의 존재가 사라졌다.",
						"english": "The mysterious entity guarding the outer wall of the Abyssal Core has vanished.",
						"japanese": "アビサルコアの外壁を守っていた正体不明の存在が消えた。",
						"chinese": "守护深渊核心外墙的神秘存在消失了。",
						"french": "L'entité mystérieuse gardant la paroi extérieure du Noyau Abyssal a disparu.",
						"spanish": "La entidad misteriosa que custodiaba la pared exterior del Núcleo Abisal ha desaparecido.",
						"vietnamese": "Thực thể bí ẩn canh giữ bức tường ngoài của Lõi Vực Sâu đã biến mất.",
						"thai": "สิ่งลึกลับที่เฝ้ากำแพงด้านนอกของแกนกลางแห่งขุมนรกได้หายไปแล้ว",
						"hindi": "एबिसल कोर की बाहरी दीवार की रक्षा करने वाली रहस्यमय इकाई गायब हो गई है।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "하지만 그 너머의 진실은… 더욱 복잡한 의문을 남겼다.",
						"english": "But the truth beyond it… left even more complex questions.",
						"japanese": "しかし、その先の真実は…さらに複雑な疑問を残した。",
						"chinese": "然而，其背后的真相…却留下了更复杂的疑问。",
						"french": "Mais la vérité au-delà… a laissé des questions encore plus complexes.",
						"spanish": "Pero la verdad más allá… dejó interrogantes aún más complejos.",
						"vietnamese": "Nhưng sự thật ẩn chứa bên trong… lại để lại những câu hỏi phức tạp hơn.",
						"thai": "แต่ความจริงที่อยู่เบื้องหลัง… กลับทิ้งคำถามที่ซับซ้อนยิ่งกว่า",
						"hindi": "लेकिन उसके परे की सच्चाई… ने और भी जटिल प्रश्न छोड़ दिए।"
					}
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "나약한 것들. 너희는 이 고통을 막을 수 없다.",
						"english": "Weaklings. You cannot stop this pain.",
						"japanese": "弱き者たちめ。お前たちにこの苦痛は止められない。",
						"chinese": "弱者。你们无法阻止这份痛苦。",
						"french": "Faibles. Vous ne pouvez pas arrêter cette souffrance.",
						"spanish": "Débiles. No podéis detener este dolor.",
						"vietnamese": "Đồ yếu đuối. Ngươi không thể ngăn chặn nỗi đau này.",
						"thai": "พวกอ่อนแอ. เจ้าไม่อาจหยุดความเจ็บปวดนี้ได้.",
						"hindi": "कमजोरों। तुम इस दर्द को नहीं रोक सकते।"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아직… 포기하지 않아!",
						"english": "Not yet… I won't give up!",
						"japanese": "まだ…諦めない！",
						"chinese": "还没…我不会放弃的！",
						"french": "Pas encore… Je n'abandonnerai pas !",
						"spanish": "¡Todavía no… no me rendiré!",
						"vietnamese": "Chưa… tôi sẽ không bỏ cuộc!",
						"thai": "ยัง… ฉันจะไม่ยอมแพ้!",
						"hindi": "अभी तक… मैंने हार नहीं मानी है!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"지옥의 경계가 무너진다. 막을 수 없는 파멸의 카운트다운.",
			"심연의 핵, Abyssal Core는 고통 속에서 봉인을 유지하려 몸부림친다.",
			"그 몸부림이 주변 영혼들을 더 깊은 나락으로 밀어 넣는다면.",
			"우리는 무엇을 해야 하는가? 이 피할 수 없는 종말 앞에서."
		],
		"english": [
			"The hellish frontier crumbles. An unstoppable countdown to ruin.",
			"The Abyssal Core struggles in agony to maintain the seal.",
			"What if its struggle drags nearby souls into an even deeper abyss?",
			"What must we do? Before this unavoidable end."
		],
		"japanese": [
			"地獄の境界が崩れる。止められない破滅へのカウントダウン。",
			"深淵の核、Abyssal Coreは苦痛の中で封印を保とうともがく。",
			"もしそのもがきが、周囲の魂をさらに深い奈落へと引きずり込むのなら。",
			"我々は何をすべきか？この避けられない終焉を前にして。"
		],
		"chinese": [
			"地狱的边界正在崩塌。毁灭的倒计时无法阻止。",
			"深渊之核，Abyssal Core，在痛苦中挣扎着维持封印。",
			"如果它的挣扎将周围的灵魂推向更深的深渊呢？",
			"我们该做些什么？在这无法避免的终结面前。"
		],
		"french": [
			"Les frontières de l'enfer s'effondrent. Un compte à rebours inéluctable vers la ruine.",
			"Le Noyau Abyssal se débat dans l'agonie pour maintenir le sceau.",
			"Et si cette lutte entraînait les âmes environnantes vers un abîme plus profond ?",
			"Que devons-nous faire ? Face à cette fin inévitable."
		],
		"spanish": [
			"La frontera infernal se desmorona. Una cuenta atrás imparable hacia la ruina.",
			"El Núcleo Abisal lucha con agonía para mantener el sello.",
			"¿Y si su agonía arrastra a las almas cercanas a un abismo aún más profundo?",
			"¿Qué debemos hacer? Ante este fin ineludible."
		],
		"vietnamese": [
			"Biên giới địa ngục sụp đổ. Đồng hồ đếm ngược hủy diệt không thể ngăn cản.",
			"Lõi Vực Thẳm, Abyssal Core, đang vật lộn trong đau đớn để duy trì phong ấn.",
			"Nếu sự giằng xé đó đẩy những linh hồn xung quanh vào vực sâu hơn thì sao?",
			"Chúng ta phải làm gì? Trước sự diệt vong không thể tránh khỏi này."
		],
		"thai": [
			"ขอบเขตของนรกพังทลายลง การนับถอยหลังสู่ความพินาศที่ไม่อาจหยุดยั้งได้",
			"แกนกลางแห่งห้วงลึก Abyssal Core ดิ้นรนอยู่ในความทรมานเพื่อรักษารอยผนึกไว้",
			"ถ้าการดิ้นรนนั้นผลักวิญญาณรอบข้างให้ดิ่งลงสู่ห้วงลึกกว่าเดิมเล่า",
			"เราควรทำอย่างไร? ในเมื่อจุดจบที่ไม่อาจหลีกเลี่ยงนี้กำลังมาถึง"
		],
		"hindi": [
			"नरक की सीमाएँ ढह रही हैं। विनाश की एक अथाह उलटी गिनती।",
			"अगाध कोर (Abyssal Core), पीड़ा में सील को बनाए रखने के लिए संघर्ष कर रहा है।",
			"यदि उसका संघर्ष आस-पास की आत्माओं को और गहरे अगाध में धकेलता है।",
			"हमें क्या करना चाहिए? इस अपरिहार्य अंत के सामने।"
		]
	}
} as const;
