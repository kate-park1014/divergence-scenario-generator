export const scenario_ExArchive_V0_Echoes_02 = {
	"scenario_id": "ExArchive_V0_Echoes_02",
	"order": 2,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"lin": {
			"id": "mon_d036a884-3dde-472c-9fe7-c4807643860f",
			"name": {
				"korean": "린",
				"english": "Lin",
				"japanese": "リン",
				"chinese": "琳",
				"french": "Lin",
				"spanish": "Lin",
				"vietnamese": "Lin",
				"thai": "ลิน",
				"hindi": "लिन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a095dd66-1857-4f44-68b0-2ece83006d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/05b02694-f1ed-4e4c-b7ca-fb5b74a48900/public"
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
						"korean": "잊힌 기억들이 다시 물질이 되어 나타났다. 거리는 혼란에 잠식되었다.",
						"english": "Forgotten memories have materialized once again. The streets are engulfed in chaos.",
						"japanese": "忘れられた記憶が再び物質化して現れた。通りは混乱に飲み込まれた。",
						"chinese": "遗忘的记忆再次具象化。街道被混乱吞噬。",
						"french": "Des souvenirs oubliés se sont matérialisés à nouveau. Les rues sont plongées dans le chaos.",
						"spanish": "Los recuerdos olvidados se han materializado una vez más. Las calles están sumidas en el caos.",
						"vietnamese": "Những ký ức bị lãng quên đã hiện hữu trở lại. Đường phố chìm trong hỗn loạn.",
						"thai": "ความทรงจำที่ถูกลืมได้กลับมาเป็นรูปธรรมอีกครั้ง ถนนถูกกลืนกินด้วยความโกลาหล",
						"hindi": "भूली हुई यादें फिर से मूर्त रूप ले चुकी हैं। सड़कें अराजकता में डूब गई हैं।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "젠장, 또 시작이야?",
						"english": "Damn it, starting again?",
						"japanese": "ちくしょう、また始まったのか？",
						"chinese": "该死，又来了？",
						"french": "Mince, ça recommence ?",
						"spanish": "¡Maldita sea, ¿otra vez?!",
						"vietnamese": "Chết tiệt, lại bắt đầu rồi sao?",
						"thai": "ให้ตายสิ เริ่มอีกแล้วเหรอ?",
						"hindi": "धिक्कार है, फिर से शुरू हो गया?"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "lin",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						5,
						2
					]
				},
				{
					"speaker": "lin",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…예상했던 일이야. 기억의 잔재들이 응집되기 시작했어.",
						"english": "...As expected. Remnants of memories have begun to coalesce.",
						"japanese": "…予想通りだ。記憶の残滓が凝集し始めた。",
						"chinese": "……果然不出所料。记忆的残片开始凝聚了。",
						"french": "...Comme prévu. Les vestiges de souvenirs ont commencé à s'agréger.",
						"spanish": "...Como se esperaba. Los vestigios de recuerdos han empezado a coalescer.",
						"vietnamese": "...Đúng như dự đoán. Những tàn dư ký ức đã bắt đầu kết tụ.",
						"thai": "...เป็นไปตามที่คาดไว้ เศษเสี้ยวของความทรงจำเริ่มรวมตัวกัน",
						"hindi": "...जैसा कि अपेक्षित था। यादों के अवशेष संघनित होने लगे हैं।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "base",
					"content": {
						"korean": "잔재? 그게 뭔데?",
						"english": "Remnants? What are those?",
						"japanese": "残滓？それは何だ？",
						"chinese": "残片？那是什么？",
						"french": "Vestiges ? C'est quoi ?",
						"spanish": "¿Vestigios? ¿Qué son?",
						"vietnamese": "Tàn dư? Đó là gì?",
						"thai": "เศษเสี้ยว? มันคืออะไร?",
						"hindi": "अवशेष? वो क्या हैं?"
					}
				},
				{
					"content": {
						"korean": "말 그대로, 잊혀진 기억의 조각들이야. 지금은 형태가 불안정하지만…",
						"english": "Literally, fragments of forgotten memories. Their form is unstable for now, but...",
						"japanese": "文字通り、忘れ去られた記憶の断片だ。今は形が不安定だが…",
						"chinese": "字面意思，就是被遗忘记忆的碎片。虽然现在形态还不稳定……",
						"french": "Littéralement, des fragments de souvenirs oubliés. Leur forme est instable pour l'instant, mais...",
						"spanish": "Literalmente, fragmentos de recuerdos olvidados. Su forma es inestable por ahora, pero...",
						"vietnamese": "Theo nghĩa đen, là những mảnh ký ức bị lãng quên. Hiện tại hình dạng của chúng không ổn định, nhưng...",
						"thai": "ตามตัวอักษรก็คือ ชิ้นส่วนของความทรงจำที่ถูกลืม ตอนนี้รูปร่างมันไม่เสถียร แต่...",
						"hindi": "सचमुच, भूली हुई यादों के टुकड़े हैं। अभी उनका रूप अस्थिर है, लेकिन..."
					},
					"speaker": "lin",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_1",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "(벽에 손을 짚는다) 으… 이 느낌은 뭐지?",
						"english": "(Puts hand on the wall) Ugh... What is this feeling?",
						"japanese": "(壁に手を置く) うう…この感覚は何だ？",
						"chinese": "(手扶着墙) 呃……这是什么感觉？",
						"french": "(Pose la main sur le mur) Ugh... Qu'est-ce que c'est que cette sensation ?",
						"spanish": "(Apoya la mano en la pared) Ugh... ¿Qué es esta sensación?",
						"vietnamese": "(Chống tay lên tường) Ư… Cảm giác này là gì vậy?",
						"thai": "(วางมือบนผนัง) อึก... ความรู้สึกนี้มันอะไรกัน?",
						"hindi": "(दीवार पर हाथ रखता है) उह... यह क्या अहसास है?"
					}
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "base",
					"content": {
						"korean": "조심해. 그 잔재들은 과거를 재현하는 걸 넘어… 무언가를 '찾고' 있어.",
						"english": "Be careful. These remnants aren't just reenacting the past… they're 'searching' for something.",
						"japanese": "気を付けて。あの残滓は過去を再現するだけでなく…何かを「探している」わ。",
						"chinese": "小心。那些残影不只是重现过去……它们还在‘寻找’什么。",
						"french": "Fais attention. Ces vestiges ne se contentent pas de reproduire le passé… ils 'recherchent' quelque chose.",
						"spanish": "Ten cuidado. Esos vestigios no solo recrean el pasado… están 'buscando' algo.",
						"vietnamese": "Cẩn thận. Những tàn dư đó không chỉ tái hiện quá khứ… chúng đang 'tìm kiếm' thứ gì đó.",
						"thai": "ระวังนะ ซากพวกนั้นไม่ได้แค่จำลองอดีต… แต่มันกำลัง 'ค้นหา' บางอย่างอยู่",
						"hindi": "सावधान रहो। ये अवशेष सिर्फ़ अतीत को दोहरा नहीं रहे… वे कुछ 'ढूंढ' रहे हैं।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"type": "direction",
					"speaker": "lin",
					"action": "enter"
				},
				{
					"content": {
						"korean": "잔재들은 점점 강해지고 있어. 하나의 형태로 뭉치고 있지.",
						"english": "The remnants are growing stronger. They're coalescing into a single form.",
						"japanese": "残滓はだんだん強くなっている。一つの形にまとまりつつあるわ。",
						"chinese": "残影们越来越强了。它们正在聚集成一个形态。",
						"french": "Les vestiges deviennent de plus en plus forts. Ils se regroupent en une seule forme.",
						"spanish": "Los vestigios se están volviendo más fuertes. Se están uniendo en una sola forma.",
						"vietnamese": "Những tàn dư đang mạnh dần lên. Chúng đang tụ lại thành một hình dạng.",
						"thai": "ซากพวกนั้นแข็งแกร่งขึ้นเรื่อย ๆ มันกำลังรวมตัวกันเป็นรูปเป็นร่าง",
						"hindi": "अवशेष और शक्तिशाली हो रहे हैं। वे एक ही रूप में एकजुट हो रहे हैं।"
					},
					"emotion": "base",
					"speaker": "lin",
					"type": "speech"
				},
				{
					"content": {
						"korean": "형태라니? 괴물이라도 된다는 거야?",
						"english": "A form? You mean they're becoming monsters?",
						"japanese": "形だって？化け物になるってこと？",
						"chinese": "形态？你是说它们要变成怪物？",
						"french": "Une forme ? Tu veux dire qu'ils deviennent des monstres ?",
						"spanish": "¿Una forma? ¿Quieres decir que se están convirtiendo en monstruos?",
						"vietnamese": "Một hình dạng? Ý anh là chúng sẽ trở thành quái vật ư?",
						"thai": "รูปเป็นร่างเหรอ? จะกลายเป็นสัตว์ประหลาดหรือไง?",
						"hindi": "एक रूप? क्या तुम्हारा मतलब है कि वे राक्षस बन रहे हैं?"
					},
					"type": "speech",
					"speaker": "character_2",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "더 정확히 말하면, 과거의 '상징'이 될 거야. 그리고… 그게 뭘 찾는지 알게 되면, 넌 후회할걸.",
						"english": "More accurately, they'll become 'symbols' of the past. And… when you find out what they're looking for, you'll regret it.",
						"japanese": "もっと正確に言えば、過去の「象徴」になるだろうね。そして…それが何を探しているのかを知ったら、君は後悔するだろう。",
						"chinese": "更准确地说，它们会成为过去的‘象征’。而且……等你发现它们在找什么，你会后悔的。",
						"french": "Plus précisément, ils deviendront des 'symboles' du passé. Et… quand tu découvriras ce qu'ils cherchent, tu le regretteras.",
						"spanish": "Más precisamente, se convertirán en 'símbolos' del pasado. Y… cuando sepas lo que buscan, te arrepentirás.",
						"vietnamese": "Nói đúng hơn, chúng sẽ trở thành 'biểu tượng' của quá khứ. Và… khi biết chúng đang tìm kiếm điều gì, anh sẽ hối hận đấy.",
						"thai": "พูดให้ถูกก็คือ พวกมันจะกลายเป็น 'สัญลักษณ์' ของอดีตต่างหากล่ะ และ… ถ้านายรู้ว่ามันกำลังหาอะไรอยู่ นายจะต้องเสียใจแน่",
						"hindi": "और सटीक रूप से कहें तो, वे अतीत के 'प्रतीक' बन जाएँगे। और… जब तुम्हें पता चलेगा कि वे क्या खोज रहे हैं, तो तुम्हें पछतावा होगा।"
					},
					"emotion": "sad",
					"speaker": "lin",
					"type": "speech"
				},
				{
					"content": {
						"korean": "젠장… 끝도 없이 과거가 우리를 괴롭힐 셈이야?",
						"english": "Damn it… Is the past going to haunt us endlessly?",
						"japanese": "ちくしょう…過去は際限なく私たちを苦しめるつもりなのか？",
						"chinese": "该死……难道过去会无休止地折磨我们吗？",
						"french": "Bon sang… Le passé va-t-il nous hanter sans fin ?",
						"spanish": "Maldita sea… ¿El pasado nos va a atormentar sin fin?",
						"vietnamese": "Chết tiệt… Quá khứ sẽ ám ảnh chúng ta mãi mãi sao?",
						"thai": "ให้ตายสิ… อดีตจะตามหลอกหลอนเราไม่จบไม่สิ้นเลยรึไง?",
						"hindi": "लानत है… क्या अतीत हमें अंतहीन रूप से सताता रहेगा?"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "lin",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "나는 이 잔재들이 가진 '잊혀진 지식'에 관심이 있어.",
						"english": "I'm interested in the 'forgotten knowledge' these remnants possess.",
						"japanese": "私はこの残滓が持つ「忘れ去られた知識」に興味がある。",
						"chinese": "我对这些残影拥有的‘被遗忘的知识’很感兴趣。",
						"french": "Je suis intéressé par la 'connaissance oubliée' que ces vestiges possèdent.",
						"spanish": "Me interesa el 'conocimiento olvidado' que poseen estos vestigios.",
						"vietnamese": "Tôi quan tâm đến 'kiến thức bị lãng quên' mà những tàn dư này sở hữu.",
						"thai": "ฉันสนใจ 'ความรู้ที่ถูกลืม' ที่ซากพวกนี้มี",
						"hindi": "मुझे इन अवशेषों के पास मौजूद 'भूले हुए ज्ञान' में दिलचस्पी है।"
					},
					"type": "speech",
					"speaker": "lin",
					"emotion": "base"
				},
				{
					"speaker": "character_3",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "지식? 이 괴물 같은 것들이?",
						"english": "Knowledge? These monstrous things?",
						"japanese": "知識？この化け物みたいなものが？",
						"chinese": "知识？这些怪物般的东西？",
						"french": "De la connaissance ? Ces choses monstrueuses ?",
						"spanish": "¿Conocimiento? ¿Estas cosas monstruosas?",
						"vietnamese": "Kiến thức? Những thứ quái dị này á?",
						"thai": "ความรู้เหรอ? พวกสัตว์ประหลาดนี่น่ะนะ?",
						"hindi": "ज्ञान? ये राक्षसी चीज़ें?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "lin",
					"content": {
						"korean": "그래. 과거의 기록되지 않은 진실들. 이것들이 찾는 건 단순한 회귀가 아니야.",
						"english": "Yes. Unrecorded truths of the past. What they're looking for isn't mere regression.",
						"japanese": "ええ。過去の記録されていない真実よ。これらが探しているのは単なる回帰じゃない。",
						"chinese": "没错。过去那些未被记载的真相。它们所寻找的不仅仅是简单的回归。",
						"french": "Oui. Des vérités non enregistrées du passé. Ce qu'ils cherchent n'est pas une simple régression.",
						"spanish": "Sí. Verdades no registradas del pasado. Lo que buscan no es una simple regresión.",
						"vietnamese": "Đúng vậy. Những sự thật chưa được ghi lại của quá khứ. Thứ chúng đang tìm kiếm không chỉ là sự tái diễn đơn thuần.",
						"thai": "ใช่ ความจริงที่ไม่ได้ถูกบันทึกไว้ในอดีต สิ่งที่พวกมันตามหาไม่ใช่แค่การย้อนคืน",
						"hindi": "हाँ। अतीत के अनलिखे सच। वे जो खोज रहे हैं, वह महज़ पुनरावृत्ति नहीं है।"
					}
				},
				{
					"speaker": "lin",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "기억의 수호자가 사라진 이유, 그리고 이 동네에 감춰진… 금지된 진실.",
						"english": "The reason the Guardian of Memories disappeared, and the… forbidden truth hidden in this town.",
						"japanese": "記憶の守護者が消えた理由、そしてこの町に隠された…禁断の真実。",
						"chinese": "记忆守护者消失的原因，以及这个小镇隐藏的……被禁止的真相。",
						"french": "La raison de la disparition du Gardien des Souvenirs, et la… vérité interdite cachée dans cette ville.",
						"spanish": "La razón por la que el Guardián de los Recuerdos desapareció, y la… verdad prohibida oculta en este pueblo.",
						"vietnamese": "Lý do Người bảo vệ ký ức biến mất, và… sự thật bị cấm giấu kín trong thị trấn này.",
						"thai": "เหตุผลที่ผู้พิทักษ์ความทรงจำหายไป และ… ความจริงต้องห้ามที่ซ่อนอยู่ในเมืองนี้",
						"hindi": "स्मृतियों के संरक्षक के गायब होने का कारण, और इस शहर में छिपा हुआ… निषिद्ध सच।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "위험해 보여, Lin.",
						"english": "That sounds dangerous, Lin.",
						"japanese": "危険に見えるわ、Lin。",
						"chinese": "这看起来很危险，Lin。",
						"french": "Ça a l'air dangereux, Lin.",
						"spanish": "Suena peligroso, Lin.",
						"vietnamese": "Nghe có vẻ nguy hiểm đấy, Lin.",
						"thai": "ดูอันตรายนะ Lin",
						"hindi": "यह ख़तरनाक लगता है, लिन।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"type": "direction",
					"speaker": "lin",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "lin",
					"content": {
						"korean": "…점점 더 선명해지고 있어. 내가 찾던 지식이 코앞에…",
						"english": "...It's getting clearer. The knowledge I seek is within reach...",
						"japanese": "…だんだんはっきりしてきた。私が探していた知識が目の前に…",
						"chinese": "……越来越清晰了。我所寻找的知识近在眼前……",
						"french": "...Ça devient de plus en plus clair. La connaissance que je cherche est à portée de main...",
						"spanish": "...Cada vez está más claro. El conocimiento que busco está al alcance de la mano...",
						"vietnamese": "...Càng ngày càng rõ ràng. Kiến thức tôi tìm kiếm đang ở ngay trước mắt...",
						"thai": "...มันชัดเจนขึ้นเรื่อยๆ ความรู้ที่ฉันตามหาอยู่ตรงหน้า...",
						"hindi": "...यह और भी स्पष्ट होता जा रहा है। जो ज्ञान मैं खोज रहा हूँ, वह मेरे बहुत करीब है..."
					}
				},
				{
					"content": {
						"korean": "갑자기 주변의 기억 잔재들이 맹렬한 기운으로 뭉쳤다. 거대한 그림자가 앞을 막았다.",
						"english": "Suddenly, the surrounding memory fragments converged with a furious energy. A colossal shadow blocked the way.",
						"japanese": "突然、周囲の記憶の残滓が猛烈な気運で凝集した。巨大な影が道を塞いだ。",
						"chinese": "突然，周围的记忆残渣以猛烈的气势凝聚。一道巨大的黑影挡住了去路。",
						"french": "Soudain, les rémanences mémorielles alentour convergèrent avec une énergie furieuse. Une ombre colossale barra le chemin.",
						"spanish": "De repente, los vestigios de memoria circundantes se agruparon con una energía feroz. Una sombra gigantesca bloqueó el paso.",
						"vietnamese": "Đột nhiên, những tàn dư ký ức xung quanh kết tụ lại với một luồng khí thế mãnh liệt. Một cái bóng khổng lồ chặn đứng phía trước.",
						"thai": "ทันใดนั้น เศษเสี้ยวความทรงจำรอบข้างก็รวมตัวกันด้วยพลังอันรุนแรง เงาขนาดมหึมาขวางทางไว้",
						"hindi": "अचानक, आसपास के स्मृति अवशेष एक प्रचंड ऊर्जा के साथ एकत्रित हो गए। एक विशालकाय छाया ने रास्ता रोक लिया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "…(낮게 울리는 소리)",
						"english": "...(A low, reverberating sound)",
						"japanese": "…（低く響く音）",
						"chinese": "……（低沉的回响）",
						"french": "...(Un son grave et réverbérant)",
						"spanish": "...(Un sonido grave y resonante)",
						"vietnamese": "...(Âm thanh trầm thấp vang vọng)",
						"thai": "...(เสียงก้องกังวานต่ำๆ)",
						"hindi": "...(एक धीमी, गूंजती हुई ध्वनि)"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "이게… 잔재들이 응집된 형태인가!",
						"english": "Is this... the condensed form of the fragments!",
						"japanese": "これが…残滓が凝集した形なのか！",
						"chinese": "这……是残渣凝聚而成的形态吗！",
						"french": "C'est ça... la forme condensée des fragments !",
						"spanish": "¡Esto es... la forma condensada de los vestigios!",
						"vietnamese": "Đây... là hình dạng kết tụ của tàn dư sao!",
						"thai": "นี่คือ... รูปแบบที่ควบแน่นของเศษเสี้ยวหรือนี่!",
						"hindi": "यह... क्या अवशेषों का संघनित रूप है!"
					}
				},
				{
					"content": {
						"korean": "위험해! 이건 단순히 과거의 그림자가 아니야!",
						"english": "Dangerous! This isn't just a shadow from the past!",
						"japanese": "危険だ！これは単なる過去の影ではない！",
						"chinese": "危险！这不只是过去的影子！",
						"french": "Dangereux ! Ce n'est pas qu'une simple ombre du passé !",
						"spanish": "¡Peligroso! ¡Esto no es simplemente una sombra del pasado!",
						"vietnamese": "Nguy hiểm! Đây không chỉ là cái bóng của quá khứ!",
						"thai": "อันตราย! นี่ไม่ใช่แค่เงาจากอดีต!",
						"hindi": "खतरनाक! यह सिर्फ अतीत की छाया नहीं है!"
					},
					"type": "speech",
					"speaker": "lin",
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "기억의 잔재들이 만들어낸 거대한 존재가 모습을 드러냈다. 온몸에서 잊혀진 감정들이 흘러나왔다.",
						"english": "A colossal being formed by the vestiges of memory appeared. Forgotten emotions flowed from its entire body.",
						"japanese": "記憶の残滓が生み出した巨大な存在が姿を現した。全身から忘れられた感情が流れ出ていた。",
						"chinese": "记忆残渣所创造的巨大存在显露了身影。被遗忘的感情从全身涌出。",
						"french": "Une entité colossale formée par les vestiges de la mémoire apparut. Des émotions oubliées émanaient de tout son corps.",
						"spanish": "Una existencia gigantesca, creada por los vestigios de la memoria, se reveló. Emociones olvidadas fluían de todo su cuerpo.",
						"vietnamese": "Một thực thể khổng lồ được tạo ra từ tàn dư ký ức đã xuất hiện. Những cảm xúc bị lãng quên tuôn chảy từ toàn thân nó.",
						"thai": "สิ่งมีชีวิตขนาดมหึมาที่เกิดจากเศษเสี้ยวความทรงจำปรากฏตัวขึ้น อารมณ์ที่ถูกลืมเลือนไหลออกมาจากทั่วร่างของมัน",
						"hindi": "स्मृति के अवशेषों से निर्मित एक विशालकाय प्राणी प्रकट हुआ। उसके पूरे शरीर से भूली हुई भावनाएँ बह रही थीं।"
					}
				},
				{
					"content": {
						"korean": "…(알 수 없는 언어로 중얼거린다) …찾는다… 기억… 수호자…",
						"english": "...(Muttering in an unknown language) ...Seeking... Memory... Guardian...",
						"japanese": "…（未知の言語で呟く）…探している…記憶…守護者…",
						"chinese": "……（用无法理解的语言低语）……寻找……记忆……守护者……",
						"french": "...(Marmonne dans une langue inconnue) ...Cherche... Mémoire... Gardien...",
						"spanish": "...(Murmura en un idioma desconocido) ...Busca... Memoria... Guardián...",
						"vietnamese": "...(Lầm bầm bằng ngôn ngữ không rõ) ...Tìm kiếm... Ký ức... Người bảo vệ...",
						"thai": "...(พึมพำด้วยภาษาที่ไม่รู้จัก) ...ค้นหา... ความทรงจำ... ผู้พิทักษ์...",
						"hindi": "...(एक अज्ञात भाषा में बुदबुदाता है) ...खोज रहा हूँ... स्मृति... संरक्षक..."
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…찾는다고? 뭘?",
						"english": "...Seeking? What?",
						"japanese": "…探している？何を？",
						"chinese": "……寻找？什么？",
						"french": "...Cherche ? Quoi ?",
						"spanish": "...¿Busca? ¿Qué?",
						"vietnamese": "...Tìm kiếm sao? Cái gì?",
						"thai": "...ค้นหาเหรอ? อะไร?",
						"hindi": "...खोज रहा है? क्या?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "lin",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						2
					]
				},
				{
					"content": {
						"korean": "…들었어? '수호자'를 찾고 있어. 이 잔재들은 새로운 수호자를 만들려는 거야!",
						"english": "...Did you hear? It's looking for a 'Guardian'. These fragments are trying to create a new Guardian!",
						"japanese": "…聞いたか？『守護者』を探している。この残滓は新しい守護者を作ろうとしているんだ！",
						"chinese": "……听到了吗？它在寻找‘守护者’。这些残渣是想创造一个新的守护者！",
						"french": "...Tu as entendu ? Il cherche un 'Gardien'. Ces fragments essaient de créer un nouveau Gardien !",
						"spanish": "...¿Escuchaste? Está buscando un 'Guardián'. ¡Estos vestigios intentan crear un nuevo Guardián!",
						"vietnamese": "...Nghe thấy không? Nó đang tìm 'Người bảo vệ'. Những tàn dư này đang cố tạo ra một Người bảo vệ mới!",
						"thai": "...ได้ยินไหม? มันกำลังมองหา 'ผู้พิทักษ์' เศษเสี้ยวเหล่านี้กำลังพยายามสร้างผู้พิทักษ์คนใหม่!",
						"hindi": "...सुना तुमने? यह एक 'संरक्षक' को खोज रहा है। ये अवशेष एक नया संरक्षक बनाने की कोशिश कर रहे हैं!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"speaker": "character_4",
					"emotion": "angry",
					"content": {
						"korean": "새로운 수호자? 말도 안 돼!",
						"english": "A new Guardian? Impossible!",
						"japanese": "新しい守護者？とんでもない！",
						"chinese": "新的守护者？开什么玩笑！",
						"french": "Un nouveau Gardien ? C'est absurde !",
						"spanish": "¿Un nuevo Guardián? ¡Imposible!",
						"vietnamese": "Một Người bảo vệ mới sao? Vô lý!",
						"thai": "ผู้พิทักษ์คนใหม่เหรอ? เป็นไปไม่ได้!",
						"hindi": "एक नया संरक्षक? असंभव!"
					}
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "(포효한다) …방해하지 마라… 새로운… 시작…",
						"english": "(Roars) ...Do not interfere... A new... beginning...",
						"japanese": "(咆哮する) …邪魔をするな… 新たな…始まり…",
						"chinese": "(咆哮) ……别妨碍我……新的……开始……",
						"french": "(Rugit) ...Ne m'interférez pas... Un nouveau... début...",
						"spanish": "(Ruge) ...No interfieras... Un nuevo... comienzo...",
						"vietnamese": "(Gầm thét) ...Đừng cản trở... Một khởi... đầu mới...",
						"thai": "(คำราม) ...อย่าขัดขวาง... การ...เริ่มต้นใหม่...",
						"hindi": "(दहाड़ता है) ...दखल मत दो... एक नई... शुरुआत..."
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "lin",
					"content": {
						"korean": "(겁에 질린 표정) 이 지식은… 너무 위험해…",
						"english": "(Terrified expression) This knowledge is... too dangerous...",
						"japanese": "(怯えた表情) この知識は…あまりにも危険だ…",
						"chinese": "(惊恐的表情) 这知识……太危险了……",
						"french": "(Expression terrifiée) Cette connaissance est... trop dangereuse...",
						"spanish": "(Expresión aterrorizada) Este conocimiento es... demasiado peligroso...",
						"vietnamese": "(Vẻ mặt hoảng sợ) Kiến thức này... quá nguy hiểm...",
						"thai": "(สีหน้าหวาดกลัว) ความรู้นี้... อันตรายเกินไป...",
						"hindi": "(भयभीत अभिव्यक्ति) यह ज्ञान... बहुत खतरनाक है..."
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "기억의 잔재들이 모든 것을 집어삼켰다. 동네는 잊혀진 과거 속에 갇혔다.",
						"english": "The remnants of memory devoured everything. The town was trapped in a forgotten past.",
						"japanese": "記憶の残滓がすべてを飲み込んだ。町は忘れ去られた過去の中に囚われた。",
						"chinese": "记忆的残余吞噬了一切。小镇被困在被遗忘的过去中。",
						"french": "Les vestiges de la mémoire ont tout dévoré. La ville était piégée dans un passé oublié.",
						"spanish": "Los remanentes de la memoria devoraron todo. El pueblo quedó atrapado en un pasado olvidado.",
						"vietnamese": "Tàn dư của ký ức nuốt chửng mọi thứ. Thị trấn bị mắc kẹt trong một quá khứ bị lãng quên.",
						"thai": "เศษซากแห่งความทรงจำกลืนกินทุกสิ่ง เมืองถูกขังอยู่ในอดีตที่ถูกลืม",
						"hindi": "स्मृति के अवशेषों ने सब कुछ निगल लिया। कस्बा एक भूले हुए अतीत में फंस गया।"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…기억은… 불멸이다… 헛된… 저항…",
						"english": "...Memories are... immortal... Vain... resistance...",
						"japanese": "…記憶は…不滅だ…無駄な…抵抗…",
						"chinese": "……记忆……是不朽的……徒劳的……抵抗……",
						"french": "...Les souvenirs sont... immortels... Résistance... vaine...",
						"spanish": "...Los recuerdos son... inmortales... Vana... resistencia...",
						"vietnamese": "...Ký ức là... bất tử... Kháng cự... vô ích...",
						"thai": "...ความทรงจำคือ... อมตะ... การต่อต้าน... ที่ไร้ประโยชน์...",
						"hindi": "...यादें... अमर हैं... व्यर्थ... प्रतिरोध..."
					}
				},
				{
					"content": {
						"korean": "빌어먹을… 아직 끝나지 않았어!",
						"english": "Damn it... It's not over yet!",
						"japanese": "くそ… まだ終わってない！",
						"chinese": "该死……还没结束！",
						"french": "Maudits... Ce n'est pas encore fini !",
						"spanish": "¡Maldita sea... Esto no ha terminado todavía!",
						"vietnamese": "Khốn kiếp... Vẫn chưa kết thúc đâu!",
						"thai": "บ้าเอ๊ย... ยังไม่จบ!",
						"hindi": "लानत है... यह अभी खत्म नहीं हुआ है!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "lin",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						2
					]
				},
				{
					"content": {
						"korean": "(절망하며) 이 지식이… 이렇게까지 위험할 줄은…",
						"english": "(Despairing) This knowledge... I never imagined such danger...",
						"japanese": "（絶望しながら）この知識が… こんなにも危険だとは…",
						"chinese": "（绝望地）这份知识……竟会如此危险……",
						"french": "(Désespérément) Ce savoir... si dangereux...",
						"spanish": "(Desesperado) Este conocimiento... ¡Así de peligroso!",
						"vietnamese": "(Trong tuyệt vọng) Tri thức này... không ngờ lại nguy hiểm đến mức này...",
						"thai": "(อย่างสิ้นหวัง) ความรู้นี้... ไม่คิดว่าจะอันตรายขนาดนี้...",
						"hindi": "(निराश होकर) यह ज्ञान... इतना खतरनाक होगा, सोचा न था..."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "우리가 막지 못하면… 이 동네는 영원히 과거에 갇힐 거야…",
						"english": "If we can't stop it... this town will be trapped in the past forever...",
						"japanese": "もし私たちが止められなければ… この街は永遠に過去に囚われるだろう…",
						"chinese": "如果我们无法阻止……这个小镇将永远被困在过去……",
						"french": "Si nous ne l'arrêtons pas... cette ville restera prisonnière du passé pour toujours...",
						"spanish": "Si no lo detenemos... este pueblo quedará atrapado en el pasado para siempre...",
						"vietnamese": "Nếu chúng ta không ngăn chặn được... thị trấn này sẽ mãi mãi bị mắc kẹt trong quá khứ...",
						"thai": "ถ้าเราหยุดมันไม่ได้... เมืองนี้จะติดอยู่ในอดีตตลอดไป...",
						"hindi": "अगर हम इसे रोक नहीं पाए... तो यह कस्बा हमेशा के लिए अतीत में फंसा रह जाएगा..."
					},
					"type": "speech",
					"speaker": "lin",
					"emotion": "sad"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "거대한 잔재가 사라지자, 잊혀진 목소리들의 충돌도 잦아들었다.",
						"english": "As the colossal remnant vanished, the clash of forgotten voices also subsided.",
						"japanese": "巨大な残滓が消え去ると、忘れ去られた声々の衝突も収まった。",
						"chinese": "随着巨大的残余消失，被遗忘的声音之间的冲突也平息了。",
						"french": "Alors que l'énorme vestige disparaissait, le choc des voix oubliées s'est aussi apaisé.",
						"spanish": "Al desaparecer el colosal remanente, el choque de voces olvidadas también disminuyó.",
						"vietnamese": "Khi tàn dư khổng lồ biến mất, sự va chạm của những giọng nói bị lãng quên cũng lắng xuống.",
						"thai": "เมื่อซากขนาดมหึมาหายไป การปะทะกันของเสียงที่ถูกลืมก็สงบลงเช่นกัน",
						"hindi": "जैसे ही विशाल अवशेष गायब हुआ, भूली हुई आवाज़ों का टकराव भी थम गया।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…(소멸하며) …기억은… 영원히… 끝나지 않아…",
						"english": "...(Fading away) ...Memories... never... truly end...",
						"japanese": "…(消滅しながら) …記憶は…永遠に…終わらない…",
						"chinese": "……(消散) ……记忆……永无止境……",
						"french": "...(Disparaissant) ...Les souvenirs... ne finissent... jamais vraiment...",
						"spanish": "...(Desvaneciéndose) ...Los recuerdos... nunca... terminan de verdad...",
						"vietnamese": "...(Tan biến) ...Ký ức... không bao giờ... kết thúc...",
						"thai": "...(สลายไป) ...ความทรงจำ... ไม่มีวัน... สิ้นสุด...",
						"hindi": "...(मिटते हुए) ...यादें... कभी... खत्म नहीं होतीं..."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "(숨을 고른다) 끝났나?",
						"english": "(Catches breath) Is it over?",
						"japanese": "(息を整える) 終わったのか？",
						"chinese": "(喘息) 结束了吗？",
						"french": "(Reprend son souffle) C'est fini ?",
						"spanish": "(Jadea) ¿Se acabó?",
						"vietnamese": "(Thở hổn hển) Xong rồi sao?",
						"thai": "(หอบหายใจ) จบแล้วหรือ?",
						"hindi": "(साँस लेता है) क्या यह खत्म हो गया?"
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "lin",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "아니… 이건 시작일 뿐이야. 잔재들이 '수호자'를 갈망한다는 건… 더 큰 진실이 있다는 뜻이야.",
						"english": "No... This is just the beginning. The remnants craving a 'Guardian' means... there's a greater truth.",
						"japanese": "いや…これは始まりに過ぎない。「守護者」を渇望する残滓…それは、より大きな真実があるということだ。",
						"chinese": "不……这只是开始。残余渴望“守护者”……意味着有更大的真相。",
						"french": "Non... Ce n'est que le début. Le fait que les vestiges aspirent à un \"Gardien\" signifie... qu'il y a une vérité plus grande.",
						"spanish": "No... Esto es solo el principio. Que los remanentes anhelen un 'Guardián' significa... que hay una verdad mayor.",
						"vietnamese": "Không... Đây chỉ là khởi đầu thôi. Việc các tàn dư khao khát một 'Người bảo vệ' có nghĩa là... có một sự thật lớn hơn.",
						"thai": "ไม่... นี่เป็นเพียงจุดเริ่มต้นเท่านั้น การที่เศษซากปรารถนา 'ผู้พิทักษ์' หมายความว่า... มีความจริงที่ยิ่งใหญ่กว่านั้น",
						"hindi": "नहीं... यह तो बस शुरुआत है। अवशेषों का 'अभिभावक' की लालसा करना... इसका मतलब है कि एक बड़ी सच्चाई है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "sad",
					"content": {
						"korean": "우리가 막은 건… 그저 첫 번째 시도였을 뿐.",
						"english": "What we stopped was... merely the first attempt.",
						"japanese": "我々が阻止したのは…最初の試みに過ぎなかったのだ。",
						"chinese": "我们阻止的……仅仅是第一次尝试。",
						"french": "Ce que nous avons arrêté n'était... que la première tentative.",
						"spanish": "Lo que detuvimos fue... simplemente el primer intento.",
						"vietnamese": "Điều chúng ta ngăn chặn... chỉ là nỗ lực đầu tiên.",
						"thai": "สิ่งที่เราหยุดไว้... เป็นเพียงความพยายามครั้งแรกเท่านั้น",
						"hindi": "हमने जो रोका... वह केवल पहला प्रयास था।"
					}
				},
				{
					"content": {
						"korean": "잊혀진 기억들은 여전히 답을 찾고 있었다. 그리고 그 답은, 또 다른 과거에 있었다.",
						"english": "The forgotten memories were still searching for answers. And those answers lay in another past.",
						"japanese": "忘れ去られた記憶は、依然として答えを探し続けていた。そしてその答えは、また別の過去にあった。",
						"chinese": "被遗忘的记忆仍在寻找答案。而那些答案，存在于另一个过去。",
						"french": "Les souvenirs oubliés cherchaient toujours des réponses. Et ces réponses se trouvaient dans un autre passé.",
						"spanish": "Los recuerdos olvidados seguían buscando respuestas. Y esas respuestas yacían en otro pasado.",
						"vietnamese": "Những ký ức bị lãng quên vẫn đang tìm kiếm câu trả lời. Và những câu trả lời đó nằm ở một quá khứ khác.",
						"thai": "ความทรงจำที่ถูกลืมยังคงค้นหาคำตอบ และคำตอบเหล่านั้นอยู่ในอดีตอีกแห่งหนึ่ง",
						"hindi": "भूली हुई यादें अभी भी जवाब तलाश रही थीं। और वे जवाब एक और अतीत में थे।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"잊혀진 기억들이 현실을 잠식했다.",
			"단순한 환영이 아니었다. 그것들은 무언가를 갈구했다.",
			"동네는 더 이상 멈추지 않지만, 과거는 더욱 끈질기게 현재를 덮쳤다.",
			"그 목소리들이 충돌하는 곳에서, 진실이 드러날 것이다."
		],
		"english": [
			"Forgotten memories have encroached upon reality.",
			"They were not mere illusions. They yearned for something.",
			"The neighborhood no longer rests, and the past relentlessly overwhelms the present.",
			"Where those voices collide, the truth shall be revealed."
		],
		"japanese": [
			"忘れられた記憶が現実を侵食した。",
			"単なる幻覚ではなかった。それらは何かを渇望していた。",
			"町はもう静止しないが、過去は執拗に現在を覆い隠した。",
			"その声々が衝突する場所で、真実が明らかになるだろう。"
		],
		"chinese": [
			"遗忘的记忆侵蚀了现实。",
			"它们不只是幻影。它们渴望着什么。",
			"小镇不再宁静，过去却更加顽固地笼罩着现在。",
			"在那些声音碰撞之处，真相将会揭示。"
		],
		"french": [
			"Des souvenirs oubliés ont envahi la réalité.",
			"Ce n'étaient pas de simples illusions. Elles désiraient quelque chose.",
			"Le quartier ne s'arrête plus, et le passé submerge implacablement le présent.",
			"Là où ces voix s'entrechoquent, la vérité sera révélée."
		],
		"spanish": [
			"Los recuerdos olvidados han invadido la realidad.",
			"No eran meras ilusiones. Anhelaban algo.",
			"El barrio ya no descansa, y el pasado abruma implacablemente el presente.",
			"Donde esas voces colisionen, la verdad será revelada."
		],
		"vietnamese": [
			"Những ký ức bị lãng quên đã xâm chiếm thực tại.",
			"Chúng không chỉ là ảo ảnh. Chúng khao khát điều gì đó.",
			"Khu phố không còn bình yên, và quá khứ không ngừng đè nặng lên hiện tại.",
			"Nơi những giọng nói đó va chạm, sự thật sẽ được hé lộ."
		],
		"thai": [
			"ความทรงจำที่ถูกลืมได้เข้าครอบงำความเป็นจริง",
			"พวกมันไม่ใช่ภาพลวงตาธรรมดา พวกมันโหยหาบางสิ่ง",
			"เมืองไม่หยุดนิ่งอีกต่อไป และอดีตก็ครอบงำปัจจุบันอย่างไม่ลดละ",
			"ณ ที่ซึ่งเสียงเหล่านั้นปะทะกัน ความจริงจะปรากฏ"
		],
		"hindi": [
			"भूली हुई यादों ने वास्तविकता पर कब्जा कर लिया है।",
			"वे केवल भ्रम नहीं थे। वे कुछ तरस रहे थे।",
			"मोहल्ला अब नहीं रुकता, और अतीत वर्तमान पर अधिक दृढ़ता से छा गया।",
			"जहाँ वे आवाज़ें टकराती हैं, सत्य प्रकट होगा।"
		]
	}
} as const;
