export const scenario_desert_ceasefirephantom_v0_02 = {
	"scenario_id": "desert_ceasefirephantom_v0_02",
	"order": 2,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"Zafir": {
			"name": {
				"korean": "자피르",
				"english": "Zafir",
				"japanese": "ザフィール",
				"chinese": "扎菲尔",
				"french": "Zafir",
				"spanish": "Zafir",
				"vietnamese": "Zafir",
				"thai": "ซาฟีร์",
				"hindi": "ज़ाफ़िर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/935b3bcc-634c-4df6-af5d-06ca42940e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/88c657de-9079-41e1-e3ab-05efa570ae00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"끝없이 펼쳐진 모래바람 속.",
			"승리는 희미해지고, 패배는 새로운 시작이었다.",
			"이곳의 전쟁은, 대체 언제 끝나나?",
			"지쳐버린 전사만이, 진실을 속삭였다."
		],
		"english": [
			"Amidst endless sandstorms.",
			"Victory faded, defeat was a new beginning.",
			"When will the war here ever end?",
			"Only the weary warrior whispered the truth."
		],
		"japanese": [
			"果てしなく広がる砂嵐の中。",
			"勝利は薄れ、敗北は新たな始まりだった。",
			"ここの戦争は、一体いつ終わるのか？",
			"疲れ果てた戦士だけが、真実を囁いた。"
		],
		"chinese": [
			"在无尽的沙尘暴中。",
			"胜利黯然失色，失败却是新的开始。",
			"这里的战争，到底何时才能结束？",
			"只有疲惫的战士，才低语着真相。"
		],
		"french": [
			"Au milieu d'interminables tempêtes de sable.",
			"La victoire s'est estompée, la défaite était un nouveau départ.",
			"Quand cette guerre prendra-t-elle fin ici ?",
			"Seul le guerrier épuisé chuchota la vérité."
		],
		"spanish": [
			"En medio de interminables tormentas de arena.",
			"La victoria se desvaneció, la derrota fue un nuevo comienzo.",
			"¿Cuándo terminará la guerra aquí?",
			"Solo el guerrero exhausto susurró la verdad."
		],
		"vietnamese": [
			"Giữa bão cát trải dài vô tận.",
			"Chiến thắng nhạt nhòa, thất bại lại là một khởi đầu mới.",
			"Cuộc chiến ở đây, rốt cuộc bao giờ mới kết thúc?",
			"Chỉ có chiến binh mệt mỏi mới thì thầm sự thật."
		],
		"thai": [
			"ท่ามกลางพายุทรายที่แผ่กว้างไม่สิ้นสุด",
			"ชัยชนะเลือนราง ความพ่ายแพ้คือการเริ่มต้นใหม่",
			"สงครามที่นี่จะสิ้นสุดลงเมื่อไหร่กันนะ?",
			"มีเพียงนักรบที่เหนื่อยล้าเท่านั้นที่กระซิบความจริง"
		],
		"hindi": [
			"अंतहीन रेत के तूफान के बीच।",
			"जीत फीकी पड़ गई, हार एक नई शुरुआत थी।",
			"यहाँ की जंग आखिर कब खत्म होगी?",
			"केवल थके हुए योद्धा ने ही सच फुसफुसाया।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "폐허가 된 전장. 모든 것이 부서져 있었다.",
						"english": "A ruined battlefield. Everything was broken.",
						"japanese": "廃墟と化した戦場。全てが破壊されていた。",
						"chinese": "废墟般的战场。一切都被摧毁了。",
						"french": "Un champ de bataille en ruine. Tout était brisé.",
						"spanish": "Un campo de batalla en ruinas. Todo estaba destrozado.",
						"vietnamese": "Chiến trường đổ nát. Mọi thứ đều đã tan hoang.",
						"thai": "สนามรบที่พังทลาย ทุกสิ่งถูกทำลาย",
						"hindi": "एक बर्बाद युद्ध का मैदान। सब कुछ टूट गया था।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "여기서도 싸움의 흔적뿐이네.",
						"english": "Only traces of battle remain here too.",
						"japanese": "ここでも戦いの痕跡ばかりだな。",
						"chinese": "这里也只剩下战斗的痕迹。",
						"french": "Ici aussi, seules des traces de combat.",
						"spanish": "También aquí, solo quedan rastros de batalla.",
						"vietnamese": "Ở đây cũng chỉ toàn dấu vết của cuộc chiến.",
						"thai": "ที่นี่ก็มีแต่ร่องรอยการต่อสู้",
						"hindi": "यहाँ भी केवल युद्ध के निशान हैं।"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "Zafir",
					"spot": [
						4,
						2
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "Zafir",
					"content": {
						"korean": "또 다른 얼굴들인가. 이곳에선 끝없이 싸울 뿐이다.",
						"english": "More new faces, huh? Here, we just fight endlessly.",
						"japanese": "また新たな顔ぶれか。ここではただひたすら戦うのみだ。",
						"chinese": "又是新的面孔吗。在这里，只有无尽的战斗。",
						"french": "Encore de nouveaux visages ? Ici, on ne fait que se battre sans fin.",
						"spanish": "¿Más caras nuevas? Aquí, solo luchamos sin cesar.",
						"vietnamese": "Lại là những gương mặt khác à. Ở đây, ta chỉ chiến đấu không ngừng.",
						"thai": "นี่คงเป็นใบหน้าใหม่สินะ? ที่นี่มีแต่การต่อสู้ไม่รู้จบ",
						"hindi": "और नए चेहरे, क्या? यहाँ, हम बस अंतहीन लड़ते हैं।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "누구시죠?",
						"english": "Who are you?",
						"japanese": "どちら様ですか？",
						"chinese": "你是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "คุณคือใคร?",
						"hindi": "आप कौन हैं?"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…자피르. 환멸만이 남은 전사지.",
						"english": "...Zafira. A warrior left with only disillusionment.",
						"japanese": "…ザフィール。幻滅だけが残った戦士だ。",
						"chinese": "…扎菲尔。一个只剩下幻灭的战士。",
						"french": "...Zafira. Une guerrière à qui il ne reste que la désillusion.",
						"spanish": "...Zafira. Un guerrero al que solo le queda la desilusión.",
						"vietnamese": "...Zafira. Một chiến binh chỉ còn lại sự vỡ mộng.",
						"thai": "...ซาฟิรา นักรบที่เหลือเพียงความผิดหวัง",
						"hindi": "...ज़ाफ़िरा। एक योद्धा जिसमें केवल मोहभंग बचा है।"
					},
					"speaker": "Zafir"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "Zafir",
					"spot": [
						4,
						2
					]
				},
				{
					"speaker": "Zafir",
					"content": {
						"korean": "어떤 승리도 헛될 뿐이야. 새로운 적은 언제나 다시 나타나거든.",
						"english": "Any victory is futile. New enemies always reappear.",
						"japanese": "どんな勝利も無駄なだけだ。新たな敵はいつもまた現れるからな。",
						"chinese": "任何胜利都只是徒劳。新的敌人总会再次出现。",
						"french": "Toute victoire est vaine. De nouveaux ennemis réapparaissent toujours.",
						"spanish": "Cualquier victoria es inútil. Nuevos enemigos siempre reaparecen.",
						"vietnamese": "Mọi chiến thắng đều vô nghĩa. Kẻ thù mới luôn xuất hiện trở lại.",
						"thai": "ชัยชนะใด ๆ ก็ไร้ประโยชน์ ศัตรูใหม่จะปรากฏขึ้นเสมอ",
						"hindi": "कोई भी जीत व्यर्थ है। नए दुश्मन हमेशा फिर से प्रकट होते हैं।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "왜 이런 싸움이 계속되는 거죠?",
						"english": "Why do these fights keep happening?",
						"japanese": "なぜこの戦いは続くのですか？",
						"chinese": "为什么这些战斗会持续不断？",
						"french": "Pourquoi ces combats persistent-ils ?",
						"spanish": "¿Por qué continúan estas peleas?",
						"vietnamese": "Tại sao những cuộc chiến này cứ tiếp diễn?",
						"thai": "ทำไมการต่อสู้เหล่านี้ยังคงดำเนินต่อไป?",
						"hindi": "ये लड़ाइयाँ क्यों चलती रहती हैं?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "소문으로는… 이 모든 싸움 뒤에 보이지 않는 손이 있다고들 해.",
						"english": "Rumor has it... an unseen hand is behind all these fights.",
						"japanese": "噂では…これらの戦いの裏には見えない手が関わっていると聞きます。",
						"chinese": "传闻……所有这些战斗背后都有一只看不见的手。",
						"french": "La rumeur dit… qu'une main invisible tire les ficelles de tous ces combats.",
						"spanish": "Se rumorea... que una mano invisible está detrás de todas estas peleas.",
						"vietnamese": "Có tin đồn... một bàn tay vô hình đứng sau tất cả những cuộc chiến này.",
						"thai": "มีข่าวลือว่า... มีมือที่มองไม่เห็นอยู่เบื้องหลังการต่อสู้ทั้งหมดนี้",
						"hindi": "अफवाह है… इन सब लड़ाइयों के पीछे एक अनदेखा हाथ है।"
					},
					"speaker": "Zafir",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "Zafir",
					"content": {
						"korean": "양측을 조종하는… 그림자 같은 존재가.",
						"english": "A shadowy figure... manipulating both sides.",
						"japanese": "両側を操る…影のような存在が。",
						"chinese": "一个像影子一样的存在……操纵着双方。",
						"french": "Une figure sombre… manipulant les deux camps.",
						"spanish": "Una figura sombría... manipulando a ambos bandos.",
						"vietnamese": "Một kẻ bí ẩn... điều khiển cả hai phe.",
						"thai": "สิ่งมีชีวิตลึกลับ... คอยบงการทั้งสองฝ่าย",
						"hindi": "एक छायादार आकृति… दोनों पक्षों को हेरफेर करती है।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "Zafir",
					"spot": [
						4,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "우린 그저 꼭두각시일 뿐이야. 싸우고, 지치고, 또 싸우고.",
						"english": "We're just puppets. Fighting, getting exhausted, and fighting again.",
						"japanese": "我々はただの操り人形だ。戦い、疲れ果て、また戦う。",
						"chinese": "我们不过是傀儡。战斗，疲惫，然后再次战斗。",
						"french": "Nous ne sommes que des marionnettes. Nous battons, nous épuisons, et nous battons encore.",
						"spanish": "Solo somos marionetas. Luchando, agotándonos y volviendo a luchar.",
						"vietnamese": "Chúng ta chỉ là những con rối. Chiến đấu, kiệt sức, rồi lại chiến đấu.",
						"thai": "เราเป็นแค่หุ่นเชิด สู้ เหนื่อย และสู้ต่อไป",
						"hindi": "हम तो बस कठपुतली हैं। लड़ते हैं, थकते हैं, और फिर लड़ते हैं।"
					},
					"speaker": "Zafir"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "꼭두각시라고요?",
						"english": "Puppets?",
						"japanese": "操り人形だと？",
						"chinese": "傀儡？",
						"french": "Des marionnettes ?",
						"spanish": "¿Marionetas?",
						"vietnamese": "Rối ư?",
						"thai": "หุ่นเชิดเหรอ?",
						"hindi": "कठपुतलियाँ?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "Zafir",
					"content": {
						"korean": "그래. 이젠 아무 의미도 없어. 승리도 패배도.",
						"english": "Yes. It means nothing now. Neither victory nor defeat.",
						"japanese": "そうだ。もう意味はない。勝利も敗北も。",
						"chinese": "是的。现在都毫无意义了。无论是胜利还是失败。",
						"french": "Oui. Ça n'a plus aucun sens. Ni la victoire, ni la défaite.",
						"spanish": "Sí. Ya no tiene sentido. Ni la victoria ni la derrota.",
						"vietnamese": "Phải. Giờ thì vô nghĩa rồi. Cả thắng lẫn thua.",
						"thai": "ใช่ ตอนนี้มันไม่มีความหมายอะไรแล้ว ทั้งชัยชนะและความพ่ายแพ้",
						"hindi": "हाँ। अब कोई मतलब नहीं। न जीत, न हार।"
					},
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "Zafir",
					"spot": [
						4,
						2
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "Zafir",
					"content": {
						"korean": "이 사막에서 평화는 환상이야. 꿈도 꾸지 마.",
						"english": "Peace is an illusion in this desert. Don't even dream of it.",
						"japanese": "この砂漠では平和は幻想だ。夢にも見るな。",
						"chinese": "在这片沙漠中，和平只是幻象。别做梦了。",
						"french": "La paix est une illusion dans ce désert. N'y songe même pas.",
						"spanish": "La paz es una ilusión en este desierto. Ni lo sueñes.",
						"vietnamese": "Hòa bình là một ảo ảnh ở sa mạc này. Đừng mơ tưởng.",
						"thai": "สันติภาพเป็นภาพลวงตาในทะเลทรายแห่งนี้ อย่าได้ฝันถึงมันเลย",
						"hindi": "इस रेगिस्तान में शांति एक भ्रम है। इसका सपना भी मत देखो।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "정말로 끝낼 수 없다는 건가요?",
						"english": "So, it really can't be ended?",
						"japanese": "本当に終わらせられないのですか？",
						"chinese": "真的无法结束吗？",
						"french": "Ça ne peut vraiment pas se terminer ?",
						"spanish": "¿Realmente no se puede terminar?",
						"vietnamese": "Thật sự không thể kết thúc sao?",
						"thai": "มันจบไม่ได้จริง ๆ เหรอ?",
						"hindi": "क्या इसे सच में खत्म नहीं किया जा सकता?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "Zafir",
					"content": {
						"korean": "끝내려는 순간, 더 큰 불꽃이 타오르지. 마치… 누군가 원하는 것처럼.",
						"english": "The moment you try to end it, a bigger flame ignites. As if... someone wants it to.",
						"japanese": "終わらせようとした瞬間、より大きな炎が燃え上がる。まるで…誰かが望んでいるかのように。",
						"chinese": "当你试图结束时，更大的火焰会燃烧起来。仿佛……有人希望如此。",
						"french": "Au moment où tu essaies d'y mettre fin, une flamme plus grande s'embrase. Comme si… quelqu'un le voulait.",
						"spanish": "En el momento en que intentas terminarlo, una llama más grande se enciende. Como si... alguien lo quisiera.",
						"vietnamese": "Khoảnh khắc bạn cố gắng kết thúc, một ngọn lửa lớn hơn bùng cháy. Như thể... có ai đó muốn vậy.",
						"thai": "ในนาทีที่คุณพยายามจะจบมัน เปลวไฟที่ใหญ่กว่าจะลุกโชน ราวกับ... มีใครบางคนต้องการให้มันเป็นเช่นนั้น",
						"hindi": "जिस पल तुम इसे खत्म करने की कोशिश करते हो, एक बड़ी लौ भड़क उठती है। मानो… कोई ऐसा चाहता हो।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크크… 겨우 이 정도인가? …하지만 잊지 마. 나는… 언제든 다시 나타난다.",
						"english": "Heh heh... Is that all you've got? ...But don't forget. I... will reappear anytime.",
						"japanese": "クク…この程度か？ …だが、忘れるな。私は…いつでも再び現れる。",
						"chinese": "呵呵…就这点本事吗？…但别忘了。我…随时都会再次出现。",
						"french": "Hé hé... C'est tout ce que tu as ? ...Mais n'oublie pas. Je... réapparaîtrai n'importe quand.",
						"spanish": "Je je... ¿Eso es todo lo que tienes? ...Pero no lo olvides. Yo... reapareceré en cualquier momento.",
						"vietnamese": "Khà khà… Chỉ đến mức này thôi sao? …Nhưng đừng quên. Ta… sẽ xuất hiện trở lại bất cứ lúc nào.",
						"thai": "ฮึ่มๆ... แค่นี้เองเหรอ? ...แต่อย่าลืม ข้า... จะกลับมาปรากฏตัวอีกเมื่อไหร่ก็ได้",
						"hindi": "हँ हँ... बस इतना ही है क्या? ...लेकिन भूलना मत। मैं... कभी भी फिर से प्रकट हो सकता हूँ।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아니. 여기서 끝이야.",
						"english": "No. It ends here.",
						"japanese": "いや。ここで終わりだ。",
						"chinese": "不。到此为止了。",
						"french": "Non. Ça se termine ici.",
						"spanish": "No. Termina aquí.",
						"vietnamese": "Không. Kết thúc tại đây.",
						"thai": "ไม่ จบแค่นี้แหละ",
						"hindi": "नहीं। यह यहीं खत्म होता है।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "모래 폭풍이 몰아쳤다. 끝없는 전투의 그림자 속에서, 희미한 의문만이 남았다.",
						"english": "A sandstorm raged. In the shadow of endless battle, only a faint question remained.",
						"japanese": "砂嵐が吹き荒れた。終わりのない戦いの影の中で、かすかな疑問だけが残った。",
						"chinese": "沙尘暴肆虐。在无尽战斗的阴影中，只留下了一丝模糊的疑问。",
						"french": "Une tempête de sable fit rage. Dans l'ombre d'une bataille sans fin, seul un léger doute subsistait.",
						"spanish": "Una tormenta de arena rugió. En la sombra de una batalla interminable, solo una tenue pregunta permaneció.",
						"vietnamese": "Một trận bão cát hoành hành. Trong bóng tối của trận chiến bất tận, chỉ còn lại một câu hỏi mờ nhạt.",
						"thai": "พายุทรายพัดกระหน่ำ ในเงามืดของการต่อสู้ที่ไม่สิ้นสุด มีเพียงคำถามอันริบหรี่เท่านั้นที่ยังคงอยู่",
						"hindi": "एक रेतीला तूफान उमड़ पड़ा। अंतहीन युद्ध की छाया में, केवल एक धुंधला प्रश्न शेष रह गया।"
					}
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "더 깊어진 폐허. 섬뜩한 기운이 감돌았다.",
						"english": "Deeper ruins. An eerie aura hung in the air.",
						"japanese": "さらに深まる廃墟。不気味な気配が漂っていた。",
						"chinese": "更深的废墟。弥漫着一股诡异的气息。",
						"french": "Des ruines plus profondes. Une aura étrange planait.",
						"spanish": "Ruinas más profundas. Una atmósfera inquietante flotaba.",
						"vietnamese": "Phế tích sâu hơn. Một luồng khí rùng rợn bao trùm.",
						"thai": "ซากปรักหักพังที่ลึกกว่าเดิม บรรยากาศที่น่าขนลุกโอบล้อม",
						"hindi": "गहरे खंडहर। एक भयानक आभा छा गई थी।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "Zafir",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "Zafir",
					"content": {
						"korean": "결국 여기까진가. 또 다른 희생자들.",
						"english": "Is this finally the end? More victims.",
						"japanese": "結局ここまでか。また別の犠牲者たち。",
						"chinese": "终究到此为止了吗。又一批牺牲者。",
						"french": "C'est donc la fin ? Encore des victimes.",
						"spanish": "¿Finalmente es aquí donde termina? Más víctimas.",
						"vietnamese": "Cuối cùng cũng đến đây thôi sao. Lại thêm những nạn nhân khác.",
						"thai": "สุดท้ายก็แค่นี้สินะ เหยื่อรายอื่น ๆ",
						"hindi": "क्या अंततः यहीं तक था? और शिकार।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이 싸움을 끝내러 왔다!",
						"english": "I've come to end this fight!",
						"japanese": "この戦いを終わらせに来た！",
						"chinese": "我来结束这场战斗！",
						"french": "Je suis venu mettre fin à ce combat !",
						"spanish": "¡He venido a terminar con esta lucha!",
						"vietnamese": "Ta đến để kết thúc cuộc chiến này!",
						"thai": "ข้ามาเพื่อยุติการต่อสู้นี้!",
						"hindi": "मैं इस लड़ाई को खत्म करने आया हूँ!"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "Zafir",
					"type": "direction",
					"action": "exit",
					"duration_ms": 400,
					"direction": "down"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "어리석은 것들. 너희도 결국 똑같다. 끝없는 싸움의 먹잇감일 뿐.",
						"english": "Fools. You're all the same in the end. Just prey for this endless struggle.",
						"japanese": "愚か者たちめ。お前たちも結局同じだ。終わりのない戦いの餌食でしかない。",
						"chinese": "愚蠢的东西。你们最终都一样。不过是无尽战斗的猎物。",
						"french": "Idiots. Vous êtes tous les mêmes au final. Juste des proies pour cette lutte sans fin.",
						"spanish": "Tontos. Al final, todos sois iguales. Solo presas de esta lucha interminable.",
						"vietnamese": "Đồ ngu ngốc. Cuối cùng các ngươi cũng vậy thôi. Chỉ là con mồi cho cuộc chiến bất tận này.",
						"thai": "พวกโง่เง่า สุดท้ายพวกเจ้าก็เหมือนกันหมด เป็นแค่เหยื่อของการต่อสู้ที่ไม่มีวันสิ้นสุด",
						"hindi": "मूर्ख। तुम सब अंत में एक जैसे हो। इस अंतहीन संघर्ष के लिए केवल शिकार।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "헛소리 마라!",
						"english": "Don't talk nonsense!",
						"japanese": "戯言を言うな！",
						"chinese": "别胡说八道！",
						"french": "Ne dis pas de bêtises !",
						"spanish": "¡No digas tonterías!",
						"vietnamese": "Đừng nói nhảm!",
						"thai": "อย่าพูดพล่าม!",
						"hindi": "बकवास बंद करो!"
					},
					"speaker": "character_any"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 것들. 너희는 영원히 이 굴레를 벗어날 수 없어.",
						"english": "Fools. You can never escape this cycle.",
						"japanese": "愚か者たちめ。お前たちは永遠にこの輪廻から逃れられない。",
						"chinese": "愚蠢的东西。你们永远无法摆脱这个循环。",
						"french": "Idiots. Vous ne pourrez jamais échapper à ce cycle.",
						"spanish": "Tontos. Nunca podréis escapar de este ciclo.",
						"vietnamese": "Đồ ngu ngốc. Các ngươi sẽ không bao giờ thoát khỏi vòng luân hồi này.",
						"thai": "พวกโง่เง่า พวกเจ้าจะไม่มีทางหลุดพ้นจากวงเวียนนี้ได้ตลอดไป",
						"hindi": "मूर्ख। तुम कभी इस चक्र से बाहर नहीं निकल पाओगे।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not... over yet!",
						"japanese": "まだ…終わってない！",
						"chinese": "还没…结束！",
						"french": "Ce n'est pas... encore fini !",
						"spanish": "¡Todavía no... ha terminado!",
						"vietnamese": "Vẫn... chưa kết thúc đâu!",
						"thai": "ยัง... ไม่จบ!",
						"hindi": "अभी... खत्म नहीं हुआ है!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "후회는 없어? 이 무의미한 저항에.",
						"english": "No regrets? For this meaningless resistance.",
						"japanese": "後悔はないか？ この無意味な抵抗に。",
						"chinese": "不后悔吗？为了这毫无意义的抵抗。",
						"french": "Pas de regrets ? Pour cette résistance inutile.",
						"spanish": "¿No hay arrepentimientos? Por esta resistencia sin sentido.",
						"vietnamese": "Không hối tiếc sao? Vì sự kháng cự vô nghĩa này.",
						"thai": "ไม่เสียใจเหรอ? กับการต่อต้านที่ไร้ความหมายนี้",
						"hindi": "कोई पछतावा नहीं? इस व्यर्थ प्रतिरोध के लिए।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	]
} as const;
