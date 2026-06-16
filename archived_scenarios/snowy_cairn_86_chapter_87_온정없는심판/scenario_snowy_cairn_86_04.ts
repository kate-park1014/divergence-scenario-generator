export const scenario_snowy_cairn_86_04 = {
	"scenario_id": "snowy_cairn_86_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"anuk": {
			"id": "mon_8736797d-779a-4748-8633-d15c1eaf9be7",
			"name": {
				"korean": "아눅",
				"english": "Anuk",
				"japanese": "アヌーク",
				"chinese": "阿努克",
				"french": "Anuk",
				"spanish": "Anuk",
				"vietnamese": "Anuk",
				"thai": "อนุก",
				"hindi": "अनुक"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/19485274-e873-45c8-5043-f4ff65aa2a00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9a79ecfd-8cc6-4461-3790-763822522500/public"
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
					"emotion": "base",
					"content": {
						"korean": "거대한 돌무덤이 심판의 자리로 변했다. 주위에 얼어붙은 형상들이 늘어서 있다.",
						"english": "The massive cairn transformed into the judgment seat. Frozen figures stood all around.",
						"japanese": "巨大な石塚が裁きの場と化した。周囲には凍りついた像が並んでいる。",
						"chinese": "巨大的石冢变成了审判之座。四周排列着冻结的形体。",
						"french": "L'immense cairn s'est transformé en siège du jugement. Des formes figées s'alignaient tout autour.",
						"spanish": "El enorme túmulo se transformó en el asiento del juicio. Figuras congeladas se alineaban alrededor.",
						"vietnamese": "Gò đá khổng lồ biến thành nơi phán xét. Xung quanh là những hình thù đóng băng.",
						"thai": "หลุมศพหินขนาดใหญ่กลายเป็นบัลลังก์แห่งการพิพากษา รูปปั้นน้ำแข็งเรียงรายอยู่โดยรอบ",
						"hindi": "विशाल पत्थरों का ढेर न्याय के आसन में बदल गया। चारों ओर जमी हुई आकृतियाँ कतार में खड़ी थीं।"
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "anuk",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "base",
					"speaker": "anuk",
					"content": {
						"korean": "…깨어진 맹세의 무게가, 이렇게나 무겁게 얼어붙었군.",
						"english": "...The weight of broken oaths has frozen so heavily.",
						"japanese": "……破られた誓いの重さが、これほどまでに重く凍りついたか。",
						"chinese": "……违背誓言的沉重，竟然如此凝固。",
						"french": "...Le poids des serments brisés a ainsi lourdement gelé.",
						"spanish": "...El peso de los juramentos rotos se ha congelado tan pesadamente.",
						"vietnamese": "...Sức nặng của lời thề bị phá vỡ, đông cứng nặng nề đến vậy.",
						"thai": "...น้ำหนักของคำสาบานที่แตกหัก กลายเป็นน้ำแข็งอย่างหนักหน่วง",
						"hindi": "...टूटी हुई शपथ का बोझ, ऐसे ही भारी होकर जम गया है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "모두 무언가 변명하려는 듯한 자세야.",
						"english": "All seem to be in a posture of trying to make excuses.",
						"japanese": "皆、何か言い訳しようとしているような姿勢だ。",
						"chinese": "它们都摆出了一副似乎想要辩解的姿态。",
						"french": "Tous semblent être dans une posture d'excuses.",
						"spanish": "Todos parecen estar en una postura de intentar dar excusas.",
						"vietnamese": "Tất cả đều trong tư thế như muốn bào chữa điều gì đó.",
						"thai": "ทุกคนดูเหมือนจะอยู่ในท่าทางที่พยายามจะแก้ตัว",
						"hindi": "सभी कुछ बहाना बनाने की मुद्रा में लग रहे हैं।"
					},
					"speaker": "character_any",
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "anuk"
				},
				{
					"content": {
						"korean": "변명? 이곳에서는 그런 것이 통하지 않아.",
						"english": "Excuses? Here, such things are useless.",
						"japanese": "言い訳？ここではそんなものは通用しない。",
						"chinese": "辩解？在这里，那根本行不通。",
						"french": "Des excuses ? Ici, de telles choses sont inutiles.",
						"spanish": "¿Excusas? Aquí, esas cosas no sirven.",
						"vietnamese": "Bào chữa? Ở đây, điều đó không có tác dụng.",
						"thai": "ข้อแก้ตัว? ที่นี่สิ่งเหล่านั้นใช้ไม่ได้ผล",
						"hindi": "बहाने? यहाँ ऐसी बातें नहीं चलतीं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "anuk"
				},
				{
					"type": "speech",
					"content": {
						"korean": "하지만… 사정이 있었을 수도 있잖아?",
						"english": "But... couldn't there have been circumstances?",
						"japanese": "だが…事情があったのかもしれないだろ？",
						"chinese": "可是……也许有其原因呢？",
						"french": "Mais... n'y aurait-il pas eu des circonstances ?",
						"spanish": "Pero... ¿no pudo haber habido circunstancias?",
						"vietnamese": "Nhưng... chẳng phải có thể có lý do nào đó sao?",
						"thai": "แต่...มันอาจจะมีเหตุผลก็ได้ไม่ใช่เหรอ?",
						"hindi": "लेकिन... कोई मजबूरी भी तो हो सकती है, है ना?"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "약속을 어겼다는 사실만이 중요할 뿐이다. 그 대가는 냉정하지.",
						"english": "Only the fact that the promise was broken matters. The price is cold and unforgiving.",
						"japanese": "約束を破ったという事実だけが重要だ。その代償は冷酷だ。",
						"chinese": "只有违背誓言的事实才重要。其代价是冷酷的。",
						"french": "Seul le fait que la promesse a été rompue compte. Le prix est froid.",
						"spanish": "Solo importa el hecho de que la promesa fue rota. El precio es frío.",
						"vietnamese": "Chỉ có sự thật rằng lời hứa đã bị phá vỡ mới quan trọng. Cái giá phải trả thật lạnh lùng.",
						"thai": "มีเพียงความจริงที่ว่าคำมั่นสัญญาถูกทำลายเท่านั้นที่สำคัญ ผลลัพธ์นั้นช่างเย็นชา",
						"hindi": "केवल यही मायने रखता है कि वादा तोड़ा गया है। उसका दंड क्रूर है।"
					},
					"emotion": "base",
					"speaker": "anuk"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "anuk",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 싸늘함… 아무것도 참작되지 않는다는 게 느껴져.",
						"english": "This chill... I feel like nothing will be considered.",
						"japanese": "この冷たさ…何も考慮されないように感じる。",
						"chinese": "这份寒冷……我感觉到没有任何事情会被考虑。",
						"french": "Ce froid… J'ai l'impression que rien ne sera pris en compte.",
						"spanish": "Este frío... Siento que nada será considerado.",
						"vietnamese": "Sự lạnh lẽo này... Tôi cảm thấy không có gì được cân nhắc.",
						"thai": "ความเยือกเย็นนี้... ฉันรู้สึกเหมือนไม่มีอะไรจะได้รับการพิจารณาเลย",
						"hindi": "यह ठंडक... मुझे लगता है कि कुछ भी विचार नहीं किया जाएगा।"
					}
				},
				{
					"speaker": "anuk",
					"emotion": "base",
					"content": {
						"korean": "그렇지. 법이란 본래 그러한 것이다.",
						"english": "Indeed. That is the nature of the law.",
						"japanese": "その通り。法とは本来そのようなものだ。",
						"chinese": "没错。法律本就是如此。",
						"french": "C'est vrai. C'est la nature de la loi.",
						"spanish": "Así es. Esa es la naturaleza de la ley.",
						"vietnamese": "Đúng vậy. Luật pháp vốn dĩ là như thế.",
						"thai": "ใช่แล้ว. กฎหมายก็เป็นเช่นนั้นแหละ",
						"hindi": "हाँ। कानून की प्रकृति ऐसी ही होती है।"
					},
					"type": "speech"
				},
				{
					"speaker": "anuk",
					"emotion": "sad",
					"content": {
						"korean": "하지만… 까닭을 묻지 않는 단죄는… 그 자체로 위험할 수도 있다.",
						"english": "But... condemnation without questioning the cause... can itself be dangerous.",
						"japanese": "しかし…理由を問わない断罪は…それ自体が危険かもしれない。",
						"chinese": "但是……不问缘由的定罪……本身就可能很危险。",
						"french": "Mais... la condamnation sans en demander la raison... peut être dangereuse en soi.",
						"spanish": "Pero... la condena sin preguntar la causa... puede ser peligrosa en sí misma.",
						"vietnamese": "Nhưng... sự kết án mà không hỏi lý do... tự nó có thể nguy hiểm.",
						"thai": "แต่... การลงโทษโดยไม่สอบถามเหตุผล... ตัวมันเองอาจเป็นอันตรายได้",
						"hindi": "लेकिन... कारण पूछे बिना निंदा... अपने आप में खतरनाक हो सकती है।"
					},
					"type": "speech"
				}
			],
			"id": 5
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
					"speaker": "anuk"
				},
				{
					"type": "speech",
					"content": {
						"korean": "심판의 자리 어디에도, 용서받고 풀려난 자의 흔적은 없어.",
						"english": "Nowhere in this place of judgment is there a trace of anyone forgiven and set free.",
						"japanese": "審判の場、どこにも許され解放された者の痕跡はない。",
						"chinese": "在审判之地，没有任何被赦免和释放者的痕迹。",
						"french": "Nulle part en ce lieu de jugement, il n'y a de trace de quiconque a été pardonné et libéré.",
						"spanish": "En ningún lugar de este sitio de juicio hay rastro de alguien perdonado y liberado.",
						"vietnamese": "Trong nơi phán xét này, không có dấu vết của bất kỳ ai được tha thứ và phóng thích.",
						"thai": "ในสถานที่แห่งการพิพากษานี้ ไม่มีร่องรอยของผู้ที่ได้รับการอภัยและปล่อยตัวเลย",
						"hindi": "न्याय के इस स्थान पर, क्षमा किए गए और मुक्त किए गए किसी का कोई निशान नहीं है।"
					},
					"emotion": "base",
					"speaker": "anuk"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "단 한 번의 예외도 없이… 모두 얼어붙었단 말인가?",
						"english": "Without a single exception... have all been frozen?",
						"japanese": "ただ一度の例外もなく…皆凍りついたというのか？",
						"chinese": "没有一个例外……所有人都被冻结了吗？",
						"french": "Sans une seule exception... tous ont-ils été gelés ?",
						"spanish": "Sin una sola excepción... ¿todos han sido congelados?",
						"vietnamese": "Không một ngoại lệ nào... tất cả đều bị đóng băng sao?",
						"thai": "ไม่มีข้อยกเว้นแม้แต่ครั้งเดียว... ทุกคนถูกแช่แข็งอย่างนั้นหรือ?",
						"hindi": "एक भी अपवाद के बिना... क्या सभी जम गए हैं?"
					}
				},
				{
					"speaker": "anuk",
					"emotion": "base",
					"content": {
						"korean": "그래. 이것이 약속을 어긴 자의 숙명이라면…",
						"english": "Yes. If this is the fate of those who broke their promise...",
						"japanese": "ああ。これが約束を破った者の宿命ならば…",
						"chinese": "没错。如果这就是违背诺言者的宿命……",
						"french": "Oui. Si tel est le destin de ceux qui ont rompu leur promesse...",
						"spanish": "Sí. Si este es el destino de aquellos que rompieron su promesa...",
						"vietnamese": "Đúng vậy. Nếu đây là số phận của những kẻ đã phá vỡ lời hứa...",
						"thai": "ใช่. หากนี่คือชะตากรรมของผู้ที่ผิดคำสัญญา...",
						"hindi": "हाँ। यदि यह उन लोगों का भाग्य है जिन्होंने अपना वादा तोड़ा..."
					},
					"type": "speech"
				},
				{
					"speaker": "anuk",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "우리도… 과연 이 율법에 자유로울 수 있을까?",
						"english": "Can we... truly be free from this law?",
						"japanese": "我々も…果たしてこの律法から自由でいられるのだろうか？",
						"chinese": "我们……真的能摆脱这个律法吗？",
						"french": "Pouvons-nous... vraiment être libres de cette loi ?",
						"spanish": "¿Podremos... realmente ser libres de esta ley?",
						"vietnamese": "Chúng ta... liệu có thể thoát khỏi luật lệ này không?",
						"thai": "พวกเรา... จะเป็นอิสระจากกฎนี้ได้จริงหรือ?",
						"hindi": "क्या हम... वास्तव में इस कानून से मुक्त हो सकते हैं?"
					}
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "깨어진 맹세의 대가는… 죽음 뿐.",
						"english": "The price of a shattered oath... is only death.",
						"japanese": "破られた誓いの代償は… 死のみ。",
						"chinese": "破碎誓约的代价… 唯有死亡。",
						"french": "Le prix d'un serment brisé… n'est que la mort.",
						"spanish": "El precio de una promesa rota… es solo la muerte.",
						"vietnamese": "Cái giá của lời thề bị phá vỡ… chỉ có cái chết.",
						"thai": "ค่าตอบแทนของคำสาบานที่แตกหัก… มีแต่ความตาย",
						"hindi": "टूटी हुई प्रतिज्ञा का मोल… बस मौत है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "크윽… 아직 끝나지 않았어! 우린 포기하지 않는다!",
						"english": "Ugh... It's not over yet! We won't give up!",
						"japanese": "くっ… まだ終わっていない！我々は諦めない！",
						"chinese": "咳… 还没结束！我们不会放弃！",
						"french": "Ugh… Ce n'est pas encore fini ! Nous n'abandonnerons pas !",
						"spanish": "¡Argh… Esto no ha terminado aún! ¡No nos rendiremos!",
						"vietnamese": "Khụ… Vẫn chưa kết thúc! Chúng ta sẽ không bỏ cuộc!",
						"thai": "อึก… ยังไม่จบ! เราจะไม่ยอมแพ้!",
						"hindi": "उफ़… अभी खत्म नहीं हुआ! हम हार नहीं मानेंगे!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "들어선 자들이여. 너희는 무엇을 어겼는가?",
						"english": "Those who have entered. What have you violated?",
						"japanese": "入りし者たちよ。お前たちは何を破ったのか？",
						"chinese": "闯入者们。你们违反了什么？",
						"french": "Ceux qui sont entrés. Qu'avez-vous violé ?",
						"spanish": "Los que habéis entrado. ¿Qué habéis violado?",
						"vietnamese": "Những kẻ đã bước vào. Các ngươi đã vi phạm điều gì?",
						"thai": "ผู้ที่เข้ามา. พวกเจ้าละเมิดอะไร?",
						"hindi": "प्रवेश करने वालों। तुमने क्या उल्लंघन किया है?"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "이곳은 용서 없는 심판의 자리. 너희의 맹세도 깨어졌으리라.",
						"english": "This is a place of unforgiving judgment. Your vows must have been broken.",
						"japanese": "ここは許されざる審判の場。お前たちの誓いも破られたのだろう。",
						"chinese": "这里是无赦的审判之地。你们的誓言也一定被打破了。",
						"french": "C'est un lieu de jugement impitoyable. Vos vœux ont dû être rompus.",
						"spanish": "Este es un lugar de juicio implacable. Vuestros juramentos deben de haberse roto.",
						"vietnamese": "Đây là nơi phán xét không khoan nhượng. Lời thề của các ngươi hẳn đã bị phá vỡ.",
						"thai": "ที่นี่คือสถานที่แห่งการพิพากษาอันไร้ความปรานี. คำสาบานของพวกเจ้าคงถูกทำลายแล้ว",
						"hindi": "यह क्षमाहीन न्याय का स्थान है। तुम्हारी प्रतिज्ञाएँ टूट गई होंगी।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "우린 여기서 진실을 밝힐 것이다! 너의 심판은 잘못됐다!",
						"english": "We will reveal the truth here! Your judgment is wrong!",
						"japanese": "我々はここで真実を明らかにする！お前の審判は間違っている！",
						"chinese": "我们在这里揭示真相！你的审判是错误的！",
						"french": "Nous révélerons la vérité ici ! Ton jugement est erroné !",
						"spanish": "¡Revelaremos la verdad aquí! ¡Tu juicio es incorrecto!",
						"vietnamese": "Chúng ta sẽ tiết lộ sự thật ở đây! Phán xét của ngươi là sai!",
						"thai": "เราจะเปิดเผยความจริงที่นี่! การพิพากษาของเจ้าผิดพลาดแล้ว!",
						"hindi": "हम यहाँ सच्चाई उजागर करेंगे! तुम्हारा न्याय गलत है!"
					}
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…나를 쓰러뜨려도, 심판은 멈추지 않는다.",
						"english": "...Even if you strike me down, the judgment will not stop.",
						"japanese": "…私を倒しても、審判は止まらない。",
						"chinese": "…即使击败了我，审判也不会停止。",
						"french": "...Même si vous me battez, le jugement ne s'arrêtera pas.",
						"spanish": "...Aunque me derrotes, el juicio no se detendrá.",
						"vietnamese": "...Dù các ngươi đánh bại ta, sự phán xét cũng không dừng lại.",
						"thai": "...แม้เจ้าจะโค่นข้าลงได้ แต่การพิพากษาจะไม่หยุดยั้ง",
						"hindi": "...मुझे हरा भी दो, तो भी न्याय नहीं रुकेगा।"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "더 큰 맹세가… 너희를 기다릴 뿐.",
						"english": "Only a greater vow... awaits you.",
						"japanese": "より大きな誓いが… お前たちを待つだけだ。",
						"chinese": "更大的誓约… 仅仅在等待着你们。",
						"french": "Un serment plus grand… vous attend, c'est tout.",
						"spanish": "Solo un juramento mayor… os espera.",
						"vietnamese": "Chỉ một lời thề lớn hơn… đang chờ đợi các ngươi.",
						"thai": "มีเพียงคำสาบานที่ยิ่งใหญ่กว่า… ที่รอคอยพวกเจ้าอยู่",
						"hindi": "एक बड़ी प्रतिज्ञा… बस तुम्हारा इंतज़ार कर रही है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "무슨 소리야? 도대체 누가… 이런 심판을 내린 거지?",
						"english": "What do you mean? Who... handed down this judgment?",
						"japanese": "何を言っているんだ？一体誰が… こんな審判を下したんだ？",
						"chinese": "什么意思？到底是谁… 判下了这种审判？",
						"french": "Qu'est-ce que tu racontes ? Qui… a prononcé un tel jugement ?",
						"spanish": "¿Qué dices? ¿Quién… dictó este juicio?",
						"vietnamese": "Ngươi nói cái gì? Rốt cuộc là ai… đã đưa ra phán xét này?",
						"thai": "เจ้าพูดอะไร? ใครกันแน่… ที่เป็นคนตัดสินเรื่องนี้?",
						"hindi": "क्या बकवास है? आखिर किसने… यह फैसला सुनाया?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "차가운 심판의 자리에, 또 다른 의문이 드리워졌다.",
						"english": "Over the cold judgment, another doubt cast its shadow.",
						"japanese": "冷たい審判の場に、また別の疑問が投げかけられた。",
						"chinese": "在冰冷的审判之处，又一个疑问笼罩而来。",
						"french": "Sur le siège du froid jugement, une autre question planait.",
						"spanish": "Sobre el frío juicio, otra duda se cernía.",
						"vietnamese": "Tại nơi phán xét lạnh lẽo, một nghi vấn khác lại trỗi dậy.",
						"thai": "ณ สถานที่แห่งการพิพากษาอันเย็นชา คำถามอีกประการหนึ่งได้ปรากฏขึ้น",
						"hindi": "ठंडे न्याय के स्थान पर, एक और सवाल उठ खड़ा हुआ।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"맹세는 신성하다. 깨어진 맹세는 반드시 대가를 치른다.",
			"이곳의 심판은 잔혹했다. 어떤 변명도 통하지 않는 곳.",
			"율법가 아누크는 냉철한 시선으로 그 흔적을 따라갔다.",
			"과연, 용서받은 자는 단 한 명도 없었을까?"
		],
		"english": [
			"Oaths are sacred. Broken oaths always demand a price.",
			"The judgment here was cruel. A place where no excuse was accepted.",
			"Anouk, the Lawkeeper, followed the traces with a cold gaze.",
			"Indeed, was there truly no one forgiven?"
		],
		"japanese": [
			"誓いは神聖だ。破られた誓いには必ず代償が伴う。",
			"ここでの裁きは残酷だった。いかなる言い訳も通用しない場所。",
			"律法学者アヌークは冷徹な視線でその痕跡を追った。",
			"はたして、許された者は一人もいなかったのだろうか？"
		],
		"chinese": [
			"誓言是神圣的。违背誓言必将付出代价。",
			"此地的审判是残酷的。任何辩解都毫无意义。",
			"律法师阿努克以冷峻的目光追寻着痕迹。",
			"难道，真的没有一个人被宽恕吗？"
		],
		"french": [
			"Les serments sont sacrés. Un serment brisé exige toujours un prix.",
			"Le jugement ici était cruel. Un endroit où aucune excuse n'était acceptée.",
			"Anouk, la Gardienne des Lois, suivit les traces d'un regard froid.",
			"En effet, personne n'a-t-il été pardonné ?"
		],
		"spanish": [
			"Los juramentos son sagrados. Un juramento roto siempre exige un precio.",
			"El juicio aquí fue cruel. Un lugar donde ninguna excusa era válida.",
			"Anouk, la Guardiana de la Ley, siguió los rastros con una mirada fría.",
			"De verdad, ¿no hubo ni uno solo perdonado?"
		],
		"vietnamese": [
			"Lời thề là thiêng liêng. Lời thề bị phá vỡ ắt sẽ phải trả giá.",
			"Phán quyết ở đây thật tàn khốc. Một nơi mà mọi lời bào chữa đều vô ích.",
			"Anouk, Người Giữ Luật, theo dấu vết bằng ánh mắt lạnh lùng.",
			"Quả thực, liệu có ai được tha thứ không?"
		],
		"thai": [
			"คำสาบานเป็นสิ่งศักดิ์สิทธิ์ คำสาบานที่ถูกบิดเบือนจะต้องชดใช้เสมอ",
			"การตัดสินที่นี่ช่างโหดร้าย สถานที่ที่ไม่มีข้อแก้ตัวใดๆ เป็นที่ยอมรับ",
			"อนุก ผู้พิทักษ์กฎ ติดตามร่องรอยด้วยสายตาอันเย็นชา",
			"แท้จริงแล้ว ไม่มีใครได้รับการอภัยเลยหรือ?"
		],
		"hindi": [
			"शपथ पवित्र होती है। तोड़ी गई शपथ का दंड अवश्य मिलता है।",
			"यहाँ का न्याय क्रूर था। एक ऐसी जगह जहाँ कोई बहाना नहीं चलता।",
			"विधिपालक अनूक ने ठंडी निगाहों से निशानों का पीछा किया।",
			"क्या सच में, किसी को भी माफ़ी नहीं मिली?"
		]
	}
} as const;
