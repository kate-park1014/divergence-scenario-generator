export const scenario_snowy_astrielle_18_05 = {
	"scenario_id": "snowy_astrielle_18_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "snowy",
	"actors": {
		"finn": {
			"id": "mon_3e3930d2-c2d3-4ad0-9818-26d259edac77",
			"name": {
				"korean": "핀",
				"english": "Finn",
				"japanese": "フィン",
				"chinese": "芬恩",
				"french": "Finn",
				"spanish": "Finn",
				"vietnamese": "Finn",
				"thai": "ฟินน์",
				"hindi": "फिन"
			},
			"description": "",
			"face_image_url": "",
			"battle_sprite_url": ""
		}
	},
	"boss": {
		"pool_id": "pool_034"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "얼음 성 가장 깊은 곳. 차가운 공기가 폐부를 찔렀다.",
						"english": "Deepest within the ice castle. The cold air pierced the lungs.",
						"japanese": "氷の城の最も深い場所。冷たい空気が肺を刺した。",
						"chinese": "冰之城最深处。冰冷的空气刺入肺腑。",
						"french": "Au plus profond du château de glace. L'air froid transperçait les poumons.",
						"spanish": "En lo más profundo del castillo de hielo. El aire frío perforaba los pulmones.",
						"vietnamese": "Sâu nhất trong lâu đài băng. Không khí lạnh thấu xương.",
						"thai": "ส่วนที่ลึกที่สุดของปราสาทน้ำแข็ง. อากาศหนาวเย็นเสียดแทงปอด.",
						"hindi": "बर्फ के महल के सबसे गहरे हिस्से में। ठंडी हवा फेफड़ों को भेद रही थी।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "여기가 빙하의 제단?",
						"english": "Is this the Altar of Glaciers?",
						"japanese": "ここが氷河の祭壇か？",
						"chinese": "这里是冰川祭坛吗？",
						"french": "Est-ce l'Autel des Glaciers ?",
						"spanish": "¿Es este el Altar Glaciar?",
						"vietnamese": "Đây là Bàn thờ Băng Hà sao?",
						"thai": "นี่คือแท่นบูชาน้ำแข็งหรือ?",
						"hindi": "क्या यह ग्लेशियरों की वेदी है?"
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "finn",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…뭔가 이상해. 단순한 한기가 아니야.",
						"english": "...Something's off. It's not just a chill.",
						"japanese": "…何かおかしい。ただの寒気じゃない。",
						"chinese": "……有些不对劲。这不是单纯的寒意。",
						"french": "...Quelque chose ne va pas. Ce n'est pas qu'un simple frisson.",
						"spanish": "...Algo no anda bien. No es solo un escalofrío.",
						"vietnamese": "...Có gì đó là lạ. Không chỉ là cảm giác lạnh thông thường.",
						"thai": "...มีบางอย่างผิดปกติ ไม่ใช่แค่ความหนาวเย็นธรรมดา",
						"hindi": "...कुछ तो गड़बड़ है। यह सिर्फ एक ठंड नहीं है।"
					},
					"speaker": "finn",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "대장?",
						"english": "Captain?",
						"japanese": "隊長？",
						"chinese": "队长？",
						"french": "Capitaine ?",
						"spanish": "¿Capitán?",
						"vietnamese": "Đội trưởng?",
						"thai": "หัวหน้า?",
						"hindi": "कैप्टन?"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "마치… 거대한 슬픔이 얼어붙은 것 같아.",
						"english": "It's like... a colossal sorrow frozen over.",
						"japanese": "まるで…巨大な悲しみが凍りついたようだ。",
						"chinese": "就好像……巨大的悲伤被冻结了。",
						"french": "C'est comme... une tristesse immense et glaciale.",
						"spanish": "Es como... una tristeza inmensa congelada.",
						"vietnamese": "Cứ như là... một nỗi buồn khổng lồ bị đóng băng vậy.",
						"thai": "ราวกับ...ความเศร้าอันยิ่งใหญ่ที่ถูกแช่แข็ง",
						"hindi": "जैसे... एक विशाल दुख जम गया हो।"
					},
					"speaker": "finn",
					"type": "speech"
				}
			],
			"id": 1
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
					"speaker": "finn"
				},
				{
					"emotion": "base",
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "경고하는 것 같아. 이 공격들은…",
						"english": "It feels like a warning. These attacks...",
						"japanese": "警告しているようだ。この攻撃は…",
						"chinese": "这感觉像是在警告。这些攻击……",
						"french": "On dirait un avertissement. Ces attaques...",
						"spanish": "Parece una advertencia. Estos ataques...",
						"vietnamese": "Có vẻ như một lời cảnh báo. Những đòn tấn công này...",
						"thai": "รู้สึกเหมือนคำเตือน การโจมตีพวกนี้...",
						"hindi": "यह एक चेतावनी जैसा लगता है। ये हमले..."
					}
				},
				{
					"content": {
						"korean": "경고? 이건 명백한 공격인데!",
						"english": "A warning? This is a blatant attack!",
						"japanese": "警告？これは明らかな攻撃だ！",
						"chinese": "警告？这明明是赤裸裸的攻击！",
						"french": "Un avertissement ? C'est une attaque manifeste !",
						"spanish": "¿Una advertencia? ¡Esto es un ataque descarado!",
						"vietnamese": "Cảnh báo? Đây rõ ràng là một cuộc tấn công!",
						"thai": "คำเตือนเหรอ? นี่มันเป็นการโจมตีที่ชัดเจนเลยนะ!",
						"hindi": "एक चेतावनी? यह तो स्पष्ट हमला है!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "아니. 망설임이 느껴져. 마치… 다가오지 말라는 절규 같아.",
						"english": "No. I sense hesitation. It's like... a desperate plea to stay away.",
						"japanese": "違う。ためらいが感じられる。まるで…近づくなという叫びのようだ。",
						"chinese": "不。我感受到了犹豫。这就像……一个恳求我们不要靠近的呐喊。",
						"french": "Non. Je sens une hésitation. C'est comme... un cri désespéré de ne pas s'approcher.",
						"spanish": "No. Siento vacilación. Es como... un grito desesperado para que no nos acerquemos.",
						"vietnamese": "Không. Tôi cảm thấy sự do dự. Nó giống như... một lời khẩn cầu tuyệt vọng muốn chúng ta đừng đến gần.",
						"thai": "ไม่ ฉันสัมผัสได้ถึงความลังเล มันเหมือนกับ...เสียงกรีดร้องที่ขอร้องไม่ให้เข้ามาใกล้",
						"hindi": "नहीं। मुझे हिचकिचाहट महसूस हो रही है। यह... दूर रहने की एक हताश विनती की तरह है।"
					}
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "대장… 우리가 착각하는 걸 수도 있어요.",
						"english": "Captain... we might be mistaken.",
						"japanese": "隊長…私たちが勘違いしているのかもしれません。",
						"chinese": "队长……我们可能误会了。",
						"french": "Capitaine... nous nous trompons peut-être.",
						"spanish": "Capitán... podríamos estar equivocados.",
						"vietnamese": "Đội trưởng... có lẽ chúng ta đã lầm.",
						"thai": "หัวหน้า...เราอาจจะเข้าใจผิดก็ได้นะ",
						"hindi": "कैप्टन... हो सकता है कि हम गलत हों।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그럴 리 없어. 이 얼음의 비명은… 분명해.",
						"english": "Impossible. The screams of this ice... are clear.",
						"japanese": "そんなはずない。この氷の悲鳴は…明らかだ。",
						"chinese": "不可能。这冰的尖叫……非常清楚。",
						"french": "Impossible. Les cris de cette glace... sont clairs.",
						"spanish": "Imposible. Los gritos de este hielo... son claros.",
						"vietnamese": "Không thể nào. Tiếng kêu của lớp băng này... rất rõ ràng.",
						"thai": "ไม่มีทาง เรื่องนั้น...เสียงกรีดร้องของน้ำแข็งนี้...มันชัดเจน",
						"hindi": "असंभव। इस बर्फ की चीखें... स्पष्ट हैं।"
					},
					"speaker": "finn",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "finn",
					"action": "enter"
				},
				{
					"content": {
						"korean": "성 심부에서 희미한 탄식이 들려왔다.",
						"english": "A faint sigh echoed from the depths of the castle.",
						"japanese": "城の奥深くから、かすかなため息が聞こえてきた。",
						"chinese": "从城堡深处传来一声微弱的叹息。",
						"french": "Un soupir ténu s'échappa des profondeurs du château.",
						"spanish": "Un débil lamento resonó desde las profundidades del castillo.",
						"vietnamese": "Một tiếng thở dài yếu ớt vọng ra từ sâu thẳm lâu đài.",
						"thai": "เสียงถอนหายใจแผ่วเบาเล็ดลอดออกมาจากใจกลางปราสาท",
						"hindi": "महल की गहराइयों से एक धीमी आह सुनाई दी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "방금… 무슨 소리였지?",
						"english": "What... was that sound just now?",
						"japanese": "今のは…何だったんだ？",
						"chinese": "刚才……那是什么声音？",
						"french": "Qu'est-ce que... c'était ce bruit tout à l'heure ?",
						"spanish": "¿Qué... fue ese sonido justo ahora?",
						"vietnamese": "Vừa rồi... là tiếng gì vậy?",
						"thai": "เมื่อกี้...เสียงอะไรนะ?",
						"hindi": "अभी... वह क्या आवाज़ थी?"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "들었나? 저건… 고립된 슬픔이야. 누군가 그리워하는 탄식.",
						"english": "Did you hear that? It's... isolated sorrow. A lament for someone missed.",
						"japanese": "聞こえたか？あれは…孤立した悲しみだ。誰かを恋しがる嘆き。",
						"chinese": "听到了吗？那是…孤立的悲伤。对某人思念的叹息。",
						"french": "Tu as entendu ? C'est... une tristesse isolée. Le soupir de quelqu'un qui manque.",
						"spanish": "¿Oíste eso? Es... una tristeza aislada. El lamento por alguien que se extraña.",
						"vietnamese": "Nghe thấy không? Đó là… nỗi buồn cô lập. Tiếng than thở vì nhớ ai đó.",
						"thai": "ได้ยินไหม? นั่นมัน...ความเศร้าโดดเดี่ยว เสียงถอนหายใจเพราะคิดถึงใครบางคน",
						"hindi": "सुना तुमने? वो... अकेली उदासी है। किसी को याद करने का विलाप。"
					},
					"speaker": "finn",
					"type": "speech"
				},
				{
					"content": {
						"korean": "대장. 저 여왕에게 무슨 사연이 있다는 겁니까?",
						"english": "Captain. What's the story with that queen?",
						"japanese": "隊長。あの女王に何か事情があるのですか？",
						"chinese": "队长。那个女王有什么故事吗？",
						"french": "Capitaine. Quelle est l'histoire de cette reine ?",
						"spanish": "Capitán. ¿Qué historia hay detrás de esa reina?",
						"vietnamese": "Đội trưởng. Nữ hoàng đó có chuyện gì sao?",
						"thai": "หัวหน้า ราชินีนั่นมีเรื่องอะไรกันแน่?",
						"hindi": "कैप्टन। उस रानी के साथ क्या कहानी है?"
					},
					"speaker": "character_2",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "아직은 모르겠어. 하지만… 파괴만을 원하는 자의 소리는 아니야.",
						"english": "I don't know yet. But... it's not the sound of someone who only wants destruction.",
						"japanese": "まだ分からない。だが…破壊だけを望む者の声ではない。",
						"chinese": "我还不知道。但是…那不是只想要破坏的人的声音。",
						"french": "Je ne sais pas encore. Mais... ce n'est pas le son de quelqu'un qui ne veut que la destruction.",
						"spanish": "Aún no lo sé. Pero... no es la voz de alguien que solo quiere destrucción.",
						"vietnamese": "Tôi vẫn chưa biết. Nhưng… đó không phải giọng của kẻ chỉ muốn hủy diệt.",
						"thai": "ยังไม่รู้สิ แต่...ไม่ใช่เสียงของคนที่ต้องการแค่การทำลายล้าง",
						"hindi": "अभी पता नहीं। पर... वो सिर्फ़ तबाही चाहने वाले की आवाज़ नहीं है।"
					},
					"emotion": "base"
				}
			]
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
					"speaker": "finn"
				},
				{
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "여기까지 오면서 느낀 건… 그녀의 힘은 단순한 파괴가 아니야.",
						"english": "What I've felt coming here... her power isn't mere destruction.",
						"japanese": "ここまで来て感じたのは…彼女の力は単なる破壊ではない。",
						"chinese": "走到这里我感觉到…她的力量并非单纯的破坏。",
						"french": "Ce que j'ai ressenti en venant ici... son pouvoir n'est pas une simple destruction.",
						"spanish": "Lo que he sentido al venir aquí... su poder no es mera destrucción.",
						"vietnamese": "Điều tôi cảm nhận được khi đến đây… sức mạnh của cô ấy không chỉ là sự hủy diệt đơn thuần.",
						"thai": "สิ่งที่ฉันรู้สึกมาตลอดทาง...พลังของเธอไม่ใช่แค่การทำลายล้างธรรมดา",
						"hindi": "यहां तक आते-आते मैंने महसूस किया... उसकी शक्ति सिर्फ़ विनाश नहीं है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그럼 뭐죠? 우리를 죽이려 하지 않았습니까?",
						"english": "Then what is it? Didn't she try to kill us?",
						"japanese": "では何ですか？私たちを殺そうとしませんでしたか？",
						"chinese": "那是什么？她不是想杀我们吗？",
						"french": "Alors, qu'est-ce que c'est ? Elle n'a pas essayé de nous tuer ?",
						"spanish": "¿Entonces qué es? ¿Acaso no intentó matarnos?",
						"vietnamese": "Vậy thì là gì? Cô ấy không phải đã cố giết chúng ta sao?",
						"thai": "แล้วมันคืออะไร? เธอก็พยายามจะฆ่าเราไม่ใช่เหรอ?",
						"hindi": "तो फिर क्या है? क्या उसने हमें मारने की कोशिश नहीं की?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "지키려다 폭주한 힘… 어쩌면 그녀도 이 고통의 일부일지도.",
						"english": "Power run wild trying to protect... Perhaps she, too, is part of this suffering.",
						"japanese": "守ろうとして暴走した力…もしかしたら、彼女もこの苦痛の一部なのかも。",
						"chinese": "为了守护而失控的力量…或许她也是这痛苦的一部分。",
						"french": "Un pouvoir qui a déraillé en essayant de protéger... Peut-être qu'elle aussi fait partie de cette souffrance.",
						"spanish": "Un poder que se desbocó al intentar proteger... Quizás ella también sea parte de este sufrimiento.",
						"vietnamese": "Sức mạnh bộc phát khi cố gắng bảo vệ… Có lẽ cô ấy cũng là một phần của nỗi đau này.",
						"thai": "พลังที่คลั่งเมื่อพยายามจะปกป้อง...บางทีเธอเองก็เป็นส่วนหนึ่งของความเจ็บปวดนี้",
						"hindi": "बचाने की कोशिश में बेकाबू हुई शक्ति... शायद वो भी इस दर्द का हिस्सा हो।"
					}
				},
				{
					"content": {
						"korean": "대장… 싸울 수 있겠습니까?",
						"english": "Captain... Can we fight?",
						"japanese": "隊長…戦えますか？",
						"chinese": "队长…我们能战斗吗？",
						"french": "Capitaine... Pourrons-nous nous battre ?",
						"spanish": "Capitán... ¿Podremos luchar?",
						"vietnamese": "Đội trưởng… Chúng ta có thể chiến đấu không?",
						"thai": "หัวหน้า... เราจะสู้ได้ไหม?",
						"hindi": "कैप्टन... क्या हम लड़ सकते हैं?"
					},
					"speaker": "character_3",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "진실을 밝히기 위해서라면. 그녀의 고통을 멈추기 위해서라면.",
						"english": "If it's to uncover the truth. If it's to stop her suffering.",
						"japanese": "真実を明らかにするためなら。彼女の苦痛を止めるためなら。",
						"chinese": "如果是为了揭示真相。如果是为了停止她的痛苦。",
						"french": "Si c'est pour révéler la vérité. Si c'est pour mettre fin à sa souffrance.",
						"spanish": "Si es para descubrir la verdad. Si es para detener su sufrimiento.",
						"vietnamese": "Nếu là để vạch trần sự thật. Nếu là để chấm dứt nỗi đau của cô ấy.",
						"thai": "ถ้าเป็นการเปิดเผยความจริง ถ้าเป็นการหยุดยั้งความเจ็บปวดของเธอ",
						"hindi": "अगर सच उजागर करने के लिए है। अगर उसका दर्द रोकने के लिए है।"
					},
					"speaker": "finn",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "sad",
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "가까이 오지 마… 제발.",
						"english": "Don't come closer... please.",
						"japanese": "近づかないで…お願い。",
						"chinese": "别过来…求你了。",
						"french": "Ne t'approche pas... s'il te plaît.",
						"spanish": "No te acerques... por favor.",
						"vietnamese": "Đừng lại gần… làm ơn.",
						"thai": "อย่าเข้ามาใกล้...ได้โปรด",
						"hindi": "पास मत आओ... प्लीज़।"
					}
				},
				{
					"content": {
						"korean": "내게서 멀어져라… 이 힘은… 너희를 해칠 뿐.",
						"english": "Stay away from me... This power... will only harm you.",
						"japanese": "私から離れて…この力は…お前たちを傷つけるだけだ。",
						"chinese": "离我远点…这力量…只会伤害你们。",
						"french": "Éloigne-toi de moi... Ce pouvoir... ne fera que vous nuire.",
						"spanish": "Aléjate de mí... Este poder... solo os hará daño.",
						"vietnamese": "Tránh xa ta ra… Sức mạnh này… sẽ chỉ làm hại các ngươi thôi.",
						"thai": "ถอยห่างจากฉัน...พลังนี้...จะทำร้ายพวกเจ้าเท่านั้น",
						"hindi": "मुझसे दूर रहो... ये शक्ति... तुम्हें सिर्फ़ नुकसान पहुँचाएगी।"
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "물러서지 않아! 네 지배를 끝낼 거야!",
						"english": "I won't back down! I'll end your reign!",
						"japanese": "退かない！貴様の支配を終わらせる！",
						"chinese": "我不会退缩！我将终结你的统治！",
						"french": "Je ne reculerai pas ! Je mettrai fin à ton règne !",
						"spanish": "¡No me rendiré! ¡Terminaré con tu reinado!",
						"vietnamese": "Ta sẽ không lùi bước! Ta sẽ kết thúc sự thống trị của ngươi!",
						"thai": "ข้าไม่ถอย! ข้าจะยุติการปกครองของเจ้า!",
						"hindi": "मैं पीछे नहीं हटूंगा! मैं तुम्हारे शासन का अंत करूंगा!"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "아니… 이건 공격이 아니야. 그녀의 눈빛은… 후회와 슬픔으로 가득해.",
						"english": "No... this isn't an attack. Her eyes... are filled with regret and sorrow.",
						"japanese": "違う…これは攻撃じゃない。彼女の目は…後悔と悲しみに満ちている。",
						"chinese": "不…这不是攻击。她的眼神…充满了悔恨和悲伤。",
						"french": "Non... ce n'est pas une attaque. Ses yeux... sont remplis de regret et de tristesse.",
						"spanish": "No... esto no es un ataque. Sus ojos... están llenos de arrepentimiento y tristeza.",
						"vietnamese": "Không... đây không phải là một cuộc tấn công. Ánh mắt nàng... tràn đầy hối tiếc và nỗi buồn.",
						"thai": "ไม่...นี่ไม่ใช่การโจมตี แววตาของเธอ...เต็มไปด้วยความเสียใจและความเศร้า",
						"hindi": "नहीं... यह हमला नहीं है। उसकी आँखें... पछतावे और दुख से भरी हैं।"
					},
					"speaker": "finn",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "아직… 이곳에 다가설 자격은 없어. 이 슬픔을 견딜 수 없을 테니.",
						"english": "Not yet... you're not worthy to approach this place. You won't be able to bear this sorrow.",
						"japanese": "まだ…ここへ近づく資格はない。この悲しみに耐えられないだろうから。",
						"chinese": "尚未…你还没有资格接近这里。你无法承受这份悲伤。",
						"french": "Pas encore... tu n'es pas digne d'approcher cet endroit. Tu ne pourras pas supporter cette tristesse.",
						"spanish": "Todavía no... no eres digno de acercarte a este lugar. No podrás soportar esta tristeza.",
						"vietnamese": "Chưa... ngươi chưa đủ tư cách để tiếp cận nơi này. Ngươi sẽ không thể chịu đựng được nỗi buồn này đâu.",
						"thai": "ยัง...เจ้ายังไม่มีสิทธิ์เข้าใกล้ที่นี่ เจ้าจะทนความเศร้าโศกนี้ไม่ได้หรอก",
						"hindi": "अभी नहीं... तुम इस जगह के करीब आने के लायक नहीं हो। तुम इस दुख को सहन नहीं कर पाओगे।"
					},
					"speaker": "boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "크윽… 이대로 끝낼 순 없어!",
						"english": "Ugh... I can't let it end like this!",
						"japanese": "くっ… このままでは終われない！",
						"chinese": "呃啊… 不能就这样结束！",
						"french": "Ugh... Ça ne peut pas finir comme ça !",
						"spanish": "Uf... ¡No puedo dejar que termine así!",
						"vietnamese": "Khốn kiếp... Không thể kết thúc như thế này được!",
						"thai": "อึก... จะจบแบบนี้ไม่ได้นะ!",
						"hindi": "उफ़... मैं इसे ऐसे ख़त्म नहीं होने दे सकता!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "finn",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "…다시. 반드시 돌아온다. 당신의 고통을 이해하기 위해.",
						"english": "...Again. I will definitely return. To understand your pain.",
						"japanese": "…再び。必ず戻ってくる。お前の苦痛を理解するために。",
						"chinese": "…再来。我一定会回来。为了理解你的痛苦。",
						"french": "...De nouveau. Je reviendrai, c'est certain. Pour comprendre ta douleur.",
						"spanish": "...De nuevo. Regresaré, sin falta. Para comprender tu dolor.",
						"vietnamese": "...Lần nữa. Ta nhất định sẽ trở lại. Để thấu hiểu nỗi đau của ngươi.",
						"thai": "...อีกครั้ง. ข้าจะกลับมาแน่นอน. เพื่อทำความเข้าใจความเจ็บปวดของเจ้า.",
						"hindi": "…फिर से। मैं ज़रूर लौटूंगा। तुम्हारे दर्द को समझने के लिए।"
					},
					"speaker": "finn",
					"type": "speech",
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "…결국… 멈출 수 없었구나. 내가… 또…",
						"english": "...In the end... I couldn't stop it. I... again...",
						"japanese": "…結局…止められなかった。私が…また…",
						"chinese": "…最终…还是没能阻止。我…又…",
						"french": "...Finalement... je n'ai pas pu l'arrêter. Encore... moi...",
						"spanish": "...Al final... no pude detenerlo. Yo... otra vez...",
						"vietnamese": "...Cuối cùng... ta không thể ngăn cản. Ta... lại...",
						"thai": "...ท้ายที่สุด...ข้าก็หยุดมันไม่ได้ ข้า...อีกแล้ว...",
						"hindi": "...अंत में... मैं इसे रोक नहीं पाया। मैंने... फिर..."
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무슨 소리야? 네가 우리를 해쳤어!",
						"english": "What are you talking about? You hurt us!",
						"japanese": "何を言っているんだ？お前が私たちを傷つけたんだ！",
						"chinese": "你在说什么？你伤害了我们！",
						"french": "De quoi parles-tu ? Tu nous as blessés !",
						"spanish": "¿De qué hablas? ¡Nos hiciste daño!",
						"vietnamese": "Ngươi đang nói gì vậy? Ngươi đã làm tổn thương chúng ta!",
						"thai": "เจ้าพูดอะไร? เจ้าทำร้ายพวกเรา!",
						"hindi": "तुम क्या कह रहे हो? तुमने हमें चोट पहुँचाई है!"
					},
					"emotion": "angry"
				},
				{
					"spot": [
						3,
						2
					],
					"speaker": "finn",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "아니… 그녀는 스스로를 탓하고 있어. 힘이 폭주해서… 사랑하는 이들을 해친 거야.",
						"english": "No... she's blaming herself. Her power surged... and she hurt those she loved.",
						"japanese": "違う…彼女は自分を責めているんだ。力が暴走して…愛する者たちを傷つけてしまったんだ。",
						"chinese": "不…她在责怪自己。力量暴走…伤害了她所爱的人。",
						"french": "Non... elle se blâme. Son pouvoir a déferlé... et elle a blessé ceux qu'elle aimait.",
						"spanish": "No... ella se está culpando. Su poder se descontroló... y lastimó a quienes amaba.",
						"vietnamese": "Không... nàng đang tự trách mình. Sức mạnh bùng phát... đã làm hại những người nàng yêu thương.",
						"thai": "ไม่...เธอโทษตัวเอง พลังของเธอระเบิด...และเธอทำร้ายคนที่เธอรัก",
						"hindi": "नहीं... वह खुद को दोष दे रही है। उसकी शक्ति बढ़ गई... और उसने अपने प्रियजनों को चोट पहुँचाई।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "…지키고 싶었다… 모두를…",
						"english": "...I wanted to protect... everyone...",
						"japanese": "…守りたかった…皆を…",
						"chinese": "…我曾想保护…所有人…",
						"french": "...Je voulais protéger... tout le monde...",
						"spanish": "...Quería proteger... a todos...",
						"vietnamese": "...Ta đã muốn bảo vệ... tất cả mọi người...",
						"thai": "...ข้าอยากปกป้อง...ทุกคน...",
						"hindi": "...मैं बचाना चाहता था... सबको..."
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "차가운 제단 위에 쓰러진 여왕. 그녀의 눈물은 얼어붙지 않았다.",
						"english": "The queen, fallen on the cold altar. Her tears did not freeze.",
						"japanese": "冷たい祭壇に倒れた女王。彼女の涙は凍らなかった。",
						"chinese": "女王倒在冰冷的祭坛上。她的泪水没有凝结。",
						"french": "La reine, tombée sur l'autel froid. Ses larmes n'ont pas gelé.",
						"spanish": "La reina, caída sobre el frío altar. Sus lágrimas no se congelaron.",
						"vietnamese": "Nữ hoàng gục ngã trên bàn thờ lạnh giá. Nước mắt nàng không đóng băng.",
						"thai": "ราชินีผู้ล้มลงบนแท่นบูชาอันเย็นเยียบ น้ำตาของนางไม่แข็งตัว",
						"hindi": "ठंडी वेदी पर गिरी हुई रानी। उसके आँसू जमे नहीं थे।"
					}
				},
				{
					"emotion": "base",
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "이제… 그녀의 고통을 멈출 방법을 찾아야 해. 이게 마지막이 아니야.",
						"english": "Now... we must find a way to end her suffering. This isn't the end.",
						"japanese": "さあ…彼女の苦しみを終わらせる方法を見つけなければならない。これは終わりじゃない。",
						"chinese": "现在…我们必须找到结束她痛苦的方法。这不是结局。",
						"french": "Maintenant... nous devons trouver un moyen de mettre fin à sa souffrance. Ce n'est pas la fin.",
						"spanish": "Ahora... debemos encontrar una forma de acabar con su sufrimiento. Esto no es el final.",
						"vietnamese": "Bây giờ... chúng ta phải tìm cách chấm dứt nỗi đau của nàng. Đây không phải là kết thúc.",
						"thai": "ตอนนี้...เราต้องหาวิธีหยุดความทุกข์ทรมานของเธอ นี่ไม่ใช่จุดจบ",
						"hindi": "अब... हमें उसकी पीड़ा समाप्त करने का तरीका खोजना होगा। यह अंत नहीं है।"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "얼음 성 깊숙한 곳, 진실의 끝자락에서 새로운 여정이 시작된다.",
						"english": "Deep within the Ice Castle, at the edge of truth, a new journey begins.",
						"japanese": "氷の城の奥深く、真実の果てで、新たな旅が始まる。",
						"chinese": "在冰封城堡深处，真理的边缘，一段新的旅程开始了。",
						"french": "Au plus profond du Château de Glace, aux confins de la vérité, un nouveau voyage commence.",
						"spanish": "En lo profundo del Castillo de Hielo, al borde de la verdad, comienza un nuevo viaje.",
						"vietnamese": "Sâu thẳm trong Lâu đài Băng, nơi tận cùng của sự thật, một hành trình mới bắt đầu.",
						"thai": "ลึกเข้าไปในปราสาทน้ำแข็ง ณ ปลายสุดของความจริง การเดินทางครั้งใหม่ได้เริ่มต้นขึ้น",
						"hindi": "बर्फ के महल की गहराई में, सच्चाई के छोर पर, एक नई यात्रा शुरू होती है।"
					},
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"빙하의 제단. 영원한 겨울의 심장.",
			"아스트리엘. 그 이름은 얼어붙은 절망의 노래였다.",
			"하지만 얼음 너머엔, 지키려 했던 비극의 눈물이 흐르고 있었다.",
			"이제 그 진실을 마주할 시간."
		],
		"english": [
			"Altar of Glaciers. The heart of eternal winter.",
			"Astriel. Her name was a song of frozen despair.",
			"But beyond the ice, flowed the tragic tears she tried to protect.",
			"Now, it is time to face that truth."
		],
		"japanese": [
			"氷河の祭壇。永遠の冬の心臓。",
			"アストリエル。その名は凍てついた絶望の歌だった。",
			"しかし氷の向こうには、守ろうとした悲劇の涙が流れていた。",
			"今、その真実と向き合う時。"
		],
		"chinese": [
			"冰川祭坛。永恒冬日之心。",
			"阿斯特丽尔。她的名字是凝结绝望的悲歌。",
			"然而冰封之下，流淌着她试图守护的悲剧之泪。",
			"现在，是时候面对那个真相了。"
		],
		"french": [
			"L'Autel des Glaciers. Le cœur de l'hiver éternel.",
			"Astriel. Son nom était un chant de désespoir glacé.",
			"Mais au-delà de la glace, coulaient les larmes tragiques qu'elle avait tenté de protéger.",
			"Il est maintenant temps d'affronter cette vérité."
		],
		"spanish": [
			"El Altar Glaciar. El corazón del invierno eterno.",
			"Astriel. Su nombre era una canción de desesperación congelada.",
			"Pero más allá del hielo, fluían las lágrimas trágicas que intentó proteger.",
			"Ahora, es el momento de enfrentar esa verdad."
		],
		"vietnamese": [
			"Bàn thờ Băng Hà. Trái tim của mùa đông vĩnh cửu.",
			"Astriel. Tên nàng là một khúc ca của sự tuyệt vọng đóng băng.",
			"Nhưng đằng sau lớp băng, là những giọt nước mắt bi kịch mà nàng cố gắng bảo vệ.",
			"Giờ là lúc đối mặt với sự thật đó."
		],
		"thai": [
			"แท่นบูชาน้ำแข็ง. ใจกลางแห่งเหมันต์นิรันดร์.",
			"แอสเทรียล. นามของนางคือเพลงแห่งความสิ้นหวังที่เยือกแข็ง.",
			"แต่เบื้องหลังน้ำแข็งนั้น, มีน้ำตาแห่งโศกนาฏกรรมที่นางพยายามปกป้องไหลรินอยู่.",
			"ถึงเวลาเผชิญหน้ากับความจริงนั้นแล้ว."
		],
		"hindi": [
			"ग्लेशियरों की वेदी। शाश्वत शीतकाल का हृदय।",
			"एस्ट्रियल। उसका नाम जमी हुई निराशा का गीत था।",
			"किन्तु बर्फ के पार, बह रहे थे वो दुखद आँसू जिन्हें वह बचाना चाहती थी।",
			"अब उस सत्य का सामना करने का समय है।"
		]
	},
	"epilogue": {
		"korean": [
			"제단은 침묵했다. 싸움의 흔적만이 남았다.",
			"핀은 얼어붙은 여왕의 얼굴에서, 자신의 고통을 보았다.",
			"이 승리는, 과연 구원이었을까. 혹은 또 다른 비극의 시작일까.",
			"아스트리엘의 겨울은 아직 끝나지 않았다. 그녀를 위한 봄은, 어디에 있을까."
		],
		"english": [
			"The altar fell silent. Only traces of battle remained.",
			"Finn saw his own pain in the frozen queen's face.",
			"Was this victory truly salvation? Or merely the beginning of another tragedy?",
			"Astriel's winter is not yet over. Where could spring for her be?"
		],
		"japanese": [
			"祭壇は沈黙した。戦いの痕跡だけが残った。",
			"フィンは凍てついた女王の顔に、自身の苦痛を見た。",
			"この勝利は、果たして救済だったのか。それとも、また別の悲劇の始まりなのだろうか。",
			"アストリエルの冬はまだ終わっていない。彼女のための春は、どこにあるのだろうか。"
		],
		"chinese": [
			"祭坛寂静无声。只留下战斗的痕迹。",
			"芬恩在冰封女王的脸上，看到了自己的痛苦。",
			"这场胜利，究竟是救赎，抑或是另一场悲剧的开端？",
			"阿斯特丽尔的冬天尚未结束。属于她的春天，又在何方？"
		],
		"french": [
			"L'autel était silencieux. Seules les traces du combat subsistaient.",
			"Finn vit sa propre souffrance sur le visage de la reine gelée.",
			"Cette victoire était-elle vraiment le salut ? Ou le début d'une autre tragédie ?",
			"L'hiver d'Astriel n'est pas encore terminé. Où pourrait être le printemps pour elle ?"
		],
		"spanish": [
			"El altar enmudeció. Solo quedaron rastros de la batalla.",
			"Finn vio su propio dolor en el rostro de la reina congelada.",
			"¿Fue esta victoria realmente una salvación? ¿O el comienzo de otra tragedia?",
			"El invierno de Astriel aún no ha terminado. ¿Dónde podría estar la primavera para ella?"
		],
		"vietnamese": [
			"Bàn thờ chìm vào im lặng. Chỉ còn lại dấu vết của trận chiến.",
			"Finn nhìn thấy nỗi đau của chính mình trên khuôn mặt của nữ hoàng đóng băng.",
			"Chiến thắng này, liệu có phải là sự cứu rỗi? Hay chỉ là khởi đầu của một bi kịch khác?",
			"Mùa đông của Astriel vẫn chưa kết thúc. Mùa xuân dành cho nàng, liệu ở đâu?"
		],
		"thai": [
			"แท่นบูชาเงียบงัน. เหลือเพียงร่องรอยของการต่อสู้.",
			"ฟินน์เห็นความเจ็บปวดของตนเองบนใบหน้าของราชินีน้ำแข็ง.",
			"ชัยชนะครั้งนี้, เป็นการไถ่บาปจริงหรือ. หรือเป็นเพียงจุดเริ่มต้นของโศกนาฏกรรมครั้งใหม่.",
			"ฤดูหนาวของแอสเทรียลยังไม่จบลง. ฤดูใบไม้ผลิสำหรับนางจะอยู่ที่ใดกันหนอ."
		],
		"hindi": [
			"वेदी शांत हो गई। केवल युद्ध के निशान बचे थे।",
			"फिन ने जमी हुई रानी के चेहरे में अपना दर्द देखा।",
			"क्या यह विजय वास्तव में मुक्ति थी? या एक और त्रासदी की शुरुआत?",
			"एस्ट्रियल का शीतकाल अभी समाप्त नहीं हुआ है। उसके लिए बसंत कहाँ होगा?"
		]
	}
} as const;
