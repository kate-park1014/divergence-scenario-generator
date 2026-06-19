export const scenario_modern_minsu_11_03 = {
	"scenario_id": "modern_minsu_11_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"max": {
			"id": "mon_6e8c1577-89e2-49f6-a9f3-a6521b9e7f59",
			"name": {
				"korean": "맥스",
				"english": "Max",
				"japanese": "マックス",
				"chinese": "麦克斯",
				"french": "Max",
				"spanish": "Max",
				"vietnamese": "Max",
				"thai": "แม็กซ์",
				"hindi": "मैक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8bd7f351-400b-46f9-828f-aa2542734900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/62971060-c904-4d96-afcd-d11f831b3e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"가장 소중한 기억이 영원히 반복되는 지옥.",
			"맥스는 그 안에서 끝없이 절규했다.",
			"'이번엔 다를 거야'라는 속삭임은 비웃음이 되어 돌아왔다.",
			"이젠 기계적인 소음만이 그의 귓가를 맴돌 뿐이었다."
		],
		"english": [
			"A hell where the most precious memories repeat endlessly.",
			"Max screamed endlessly within it.",
			"The whisper, \"This time it will be different,\" returned as a sneer.",
			"Now, only mechanical noise echoed in his ears."
		],
		"japanese": [
			"最も大切な記憶が永遠に繰り返される地獄。",
			"マックスはその中で果てしなく絶叫した。",
			"「今度は違う」というささやきは、嘲笑となって返ってきた。",
			"今や、機械的な騒音だけが彼の耳元をこだまするだけだった。"
		],
		"chinese": [
			"最珍贵的记忆永远重复的地狱。",
			"麦克斯在其中无尽地嘶吼着。",
			"“这次会不同”的低语变成了嘲笑。",
			"现在，只有机械的噪音在他的耳边回荡。"
		],
		"french": [
			"Un enfer où les souvenirs les plus précieux se répètent à l'infini.",
			"Max hurlait sans fin à l'intérieur.",
			"Le murmure, \"Cette fois, ce sera différent,\" revint en un ricanement.",
			"Maintenant, seul un bruit mécanique résonnait à ses oreilles."
		],
		"spanish": [
			"Un infierno donde los recuerdos más preciados se repiten sin cesar.",
			"Max gritaba sin cesar en su interior.",
			"El susurro, \"Esta vez será diferente\", se convirtió en una burla.",
			"Ahora, solo un ruido mecánico resonaba en sus oídos."
		],
		"vietnamese": [
			"Một địa ngục nơi những ký ức quý giá nhất lặp đi lặp lại không ngừng.",
			"Max không ngừng gào thét trong đó.",
			"Lời thì thầm \"Lần này sẽ khác\" trở thành tiếng chế nhạo.",
			"Giờ đây, chỉ còn tiếng ồn cơ khí văng vẳng bên tai anh."
		],
		"thai": [
			"นรกที่ความทรงจำอันล้ำค่าที่สุดซ้ำรอยไม่รู้จบ",
			"แม็กซ์กรีดร้องไม่รู้จบอยู่ภายในนั้น",
			"เสียงกระซิบ \"คราวนี้มันจะต่างออกไป\" กลับกลายเป็นเสียงหัวเราะเยาะ",
			"บัดนี้ มีเพียงเสียงกลไกเท่านั้นที่ก้องอยู่ในหูของเขา"
		],
		"hindi": [
			"वह नरक जहाँ सबसे अनमोल यादें हमेशा दोहराई जाती हैं।",
			"मैक्स उसमें अंतहीन चीखता रहा।",
			"'इस बार यह अलग होगा' की फुसफुसाहट उपहास बनकर लौट आई।",
			"अब, केवल यांत्रिक शोर ही उसके कानों में गूँज रहा था।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "왜곡된 공간. 한 남자가 허공을 붙잡고 있었다.",
						"english": "Distorted space. A man was grasping at thin air.",
						"japanese": "歪んだ空間。一人の男が虚空を掴んでいた。",
						"chinese": "扭曲的空间。一个男人在虚空中抓挠着。",
						"french": "Espace déformé. Un homme s'agrippait au vide.",
						"spanish": "Espacio distorsionado. Un hombre se aferraba al vacío.",
						"vietnamese": "Không gian méo mó. Một người đàn ông đang bấu víu vào hư không.",
						"thai": "ห้วงอวกาศบิดเบี้ยว ชายคนหนึ่งกำลังคว้าจับอากาศว่างเปล่า",
						"hindi": "विकृत स्थान। एक आदमी हवा को पकड़ रहा था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "max",
					"spot": [
						5,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "max",
					"content": {
						"korean": "아니… 안 돼! 이번엔 다를 거야!",
						"english": "No... No! This time it will be different!",
						"japanese": "違う… だめだ！今度は違うはずだ！",
						"chinese": "不……不要！这次会不同的！",
						"french": "Non... Non ! Cette fois, ce sera différent !",
						"spanish": "¡No... no! ¡Esta vez será diferente!",
						"vietnamese": "Không... Không thể nào! Lần này sẽ khác!",
						"thai": "ไม่… ไม่นะ! คราวนี้มันจะต่างออกไป!",
						"hindi": "नहीं... नहीं! इस बार यह अलग होगा!"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "맥스? 무슨 일이야?",
						"english": "Max? What's wrong?",
						"japanese": "マックス？どうしたんだ？",
						"chinese": "麦克斯？出什么事了？",
						"french": "Max ? Qu'est-ce qui ne va pas ?",
						"spanish": "¿Max? ¿Qué pasa?",
						"vietnamese": "Max? Có chuyện gì vậy?",
						"thai": "แม็กซ์? เกิดอะไรขึ้น?",
						"hindi": "मैक्स? क्या हुआ?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "max",
					"content": {
						"korean": "그게… 나 때문이 아니었어….",
						"english": "It... it wasn't because of me....",
						"japanese": "それは… 私のせいじゃなかった…。",
						"chinese": "那是……不是因为我……。",
						"french": "Ce... ce n'était pas de ma faute...",
						"spanish": "Eso... no fue por mi culpa....",
						"vietnamese": "Chuyện đó... không phải tại tôi....",
						"thai": "นั่น… ไม่ใช่เพราะฉัน…",
						"hindi": "वह... वह मेरी वजह से नहीं था...."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"speaker": "max",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "max",
					"content": {
						"korean": "다시… 다시 시작된 거야? 이번엔 다를 줄 알았는데!",
						"english": "Again... It started again? I thought this time would be different!",
						"japanese": "また… また始まったのか？今度は違うと思ったのに！",
						"chinese": "又……又开始了？我还以为这次会不同的呢！",
						"french": "Encore... Ça a recommencé ? Je pensais que cette fois ce serait différent !",
						"spanish": "¿Otra vez... otra vez ha empezado? ¡Pensé que esta vez sería diferente!",
						"vietnamese": "Lại... Lại bắt đầu rồi sao? Cứ tưởng lần này sẽ khác chứ!",
						"thai": "อีกแล้ว… มันเริ่มอีกแล้วเหรอ? ฉันคิดว่าคราวนี้มันจะต่างออกไป!",
						"hindi": "फिर... फिर से शुरू हो गया? मुझे लगा था कि इस बार यह अलग होगा!"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "삐이익- 기계적인 노이즈가 공간을 채웠다.",
						"english": "Bzzzt- Mechanical noise filled the space.",
						"japanese": "ピーッ――機械的なノイズが空間を満たした。",
						"chinese": "吱——机械的噪音充斥着整个空间。",
						"french": "Bzzzt- Un bruit mécanique remplit l'espace.",
						"spanish": "Bzzzt- Un ruido mecánico llenó el espacio.",
						"vietnamese": "Bíp- Tiếng ồn cơ khí tràn ngập không gian.",
						"thai": "ปี๊ป- เสียงรบกวนของเครื่องจักรดังทั่วพื้นที่",
						"hindi": "बीप- यांत्रिक शोर ने अंतरिक्ष को भर दिया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "맥스! 정신 차려! 환상이야!",
						"english": "Max! Snap out of it! It's an illusion!",
						"japanese": "マックス！しっかりして！幻覚だよ！",
						"chinese": "麦克斯！清醒点！那是幻觉！",
						"french": "Max ! Reprends-toi ! C'est une illusion !",
						"spanish": "¡Max! ¡Reacciona! ¡Es una ilusión!",
						"vietnamese": "Max! Tỉnh táo lại! Đó là ảo ảnh!",
						"thai": "แม็กซ์! ตื่นเดี๋ยวนี้! มันคือภาพลวงตา!",
						"hindi": "मैक्स! होश में आओ! यह एक भ्रम है!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "max",
					"content": {
						"korean": "아니야… 내가… 내가 놓쳤어….",
						"english": "No... I... I missed it...",
						"japanese": "違う…私が…私が逃したんだ…。",
						"chinese": "不…我…我错过了…。",
						"french": "Non... J'ai... J'ai manqué le coup...",
						"spanish": "No... Yo... Lo perdí...",
						"vietnamese": "Không... Mình... Mình đã bỏ lỡ...",
						"thai": "ไม่ใช่... ฉัน... ฉันพลาดไปแล้ว...",
						"hindi": "नहीं... मैंने... मैंने इसे खो दिया..."
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "max",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "max",
					"content": {
						"korean": "내가 막았어야 했는데. 왜… 왜 늘 똑같은 거지?",
						"english": "I should have stopped it. Why... why is it always the same?",
						"japanese": "私が止められたはずなのに。なぜ…なぜいつも同じなんだ？",
						"chinese": "我本该阻止的。为什么…为什么总是这样？",
						"french": "J'aurais dû l'arrêter. Pourquoi... pourquoi est-ce toujours la même chose ?",
						"spanish": "¿Por qué... por qué siempre es lo mismo?",
						"vietnamese": "Mình lẽ ra phải ngăn nó lại. Tại sao... tại sao lúc nào cũng vậy chứ?",
						"thai": "ฉันน่าจะหยุดมันได้ ทำไม... ทำไมมันถึงเหมือนเดิมเสมอ?",
						"hindi": "मुझे इसे रोकना चाहिए था। क्यों... क्यों यह हमेशा एक जैसा होता है?"
					},
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "맥스는 완전히 갇혔어.",
						"english": "Max is completely trapped.",
						"japanese": "マックスは完全に囚われている。",
						"chinese": "麦克斯彻底被困住了。",
						"french": "Max est complètement piégé.",
						"spanish": "Max está completamente atrapado.",
						"vietnamese": "Max hoàn toàn bị mắc kẹt.",
						"thai": "แม็กซ์ติดกับดักโดยสมบูรณ์",
						"hindi": "मैक्स पूरी तरह से फंस गया है।"
					},
					"type": "speech"
				},
				{
					"speaker": "max",
					"content": {
						"korean": "이번엔… 이번엔 다를 거야. 이번엔…!",
						"english": "This time... this time it will be different. This time...!",
						"japanese": "今度こそ…今度こそ違うはずだ。今度こそ…！",
						"chinese": "这次…这次会不同的。这次…！",
						"french": "Cette fois... cette fois ce sera différent. Cette fois...!",
						"spanish": "¡Esta vez... esta vez será diferente. ¡Esta vez...!",
						"vietnamese": "Lần này... lần này sẽ khác. Lần này...!",
						"thai": "ครั้งนี้... ครั้งนี้มันจะแตกต่าง ครั้งนี้...!",
						"hindi": "इस बार... इस बार यह अलग होगा। इस बार...!"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "맥스의 눈은 공허했다. 끝나지 않는 반복 속에서.",
						"english": "Max's eyes were hollow. In an endless loop.",
						"japanese": "マックスの目は虚ろだった。終わりのない繰り返しの中で。",
						"chinese": "麦克斯的眼睛空洞无物。在无尽的循环中。",
						"french": "Les yeux de Max étaient vides. Dans une boucle sans fin.",
						"spanish": "Los ojos de Max estaban vacíos. En una repetición interminable.",
						"vietnamese": "Đôi mắt của Max trống rỗng. Trong một vòng lặp không hồi kết.",
						"thai": "ดวงตาของแม็กซ์ว่างเปล่า ท่ามกลางการวนซ้ำที่ไม่สิ้นสุด",
						"hindi": "मैक्स की आँखें खाली थीं। एक अंतहीन पुनरावृत्ति में।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "max",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "max",
					"content": {
						"korean": "아무것도… 바꿀 수 없어. 그저… 반복될 뿐이야.",
						"english": "Nothing... can be changed. It will just... repeat.",
						"japanese": "何も…変えられない。ただ…繰り返されるだけだ。",
						"chinese": "什么都…无法改变。只是…重复而已。",
						"french": "Rien... ne peut être changé. Ça ne fera que... se répéter.",
						"spanish": "Nada... se puede cambiar. Solo... se repetirá.",
						"vietnamese": "Không có gì... có thể thay đổi. Nó sẽ chỉ... lặp lại thôi.",
						"thai": "ไม่มีอะไร... เปลี่ยนแปลงได้ มันก็แค่... ซ้ำรอยเดิม",
						"hindi": "कुछ भी... बदला नहीं जा सकता। यह बस... दोहराया जाएगा।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "우리가… 해줄 수 있는 게 없을까?",
						"english": "Is there... anything we can do?",
						"japanese": "私たちに…何かできることはないのか？",
						"chinese": "我们…什么都做不了吗？",
						"french": "N'y a-t-il... rien que nous puissions faire ?",
						"spanish": "¿No hay... nada que podamos hacer?",
						"vietnamese": "Chúng ta... không thể làm gì sao?",
						"thai": "เรา... ทำอะไรไม่ได้เลยเหรอ?",
						"hindi": "क्या हम... कुछ नहीं कर सकते?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "맥스의 기억은 거대한 톱니바퀴처럼 돌아가고 있었다.",
						"english": "Max's memories were turning like gigantic cogs.",
						"japanese": "マックスの記憶は巨大な歯車のように回っていた。",
						"chinese": "麦克斯的记忆像巨大的齿轮一样转动着。",
						"french": "Les souvenirs de Max tournaient comme d'énormes engrenages.",
						"spanish": "Los recuerdos de Max giraban como enormes engranajes.",
						"vietnamese": "Ký ức của Max đang quay vòng như những bánh răng khổng lồ.",
						"thai": "ความทรงจำของแม็กซ์หมุนวนราวกับฟันเฟืองขนาดมหึมา",
						"hindi": "मैक्स की यादें विशाल गियर की तरह घूम रही थीं।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "max",
					"content": {
						"korean": "이번엔… 다를 거라고… 누가 그랬더라…?",
						"english": "This time... it would be different... Who said that...?",
						"japanese": "今度こそ…違うって…誰が言ったんだっけ…？",
						"chinese": "这次…会不同…是谁说的来着…?",
						"french": "Cette fois... ce serait différent... Qui a dit ça...?",
						"spanish": "Esta vez... sería diferente... ¿Quién dijo eso...?",
						"vietnamese": "Lần này... sẽ khác... Ai đã nói thế nhỉ...?",
						"thai": "ครั้งนี้... มันจะแตกต่าง... ใครเป็นคนพูดนะ...?",
						"hindi": "इस बार... यह अलग होगा... किसने कहा था...?"
					},
					"type": "speech"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "환상은 더욱 깊어졌다. 끝없는 절규 속에서.",
						"english": "The illusion deepened. Amidst endless screams.",
						"japanese": "幻想はさらに深まった。終わりのない絶叫の中で。",
						"chinese": "幻想更加深沉了。在无尽的绝望尖叫中。",
						"french": "L'illusion s'est approfondie. Au milieu des cris sans fin.",
						"spanish": "La ilusión se profundizó. En medio de gritos interminables.",
						"vietnamese": "Ảo ảnh càng sâu sắc hơn. Giữa những tiếng kêu gào không dứt.",
						"thai": "ภาพลวงตาดำดิ่งลงไปอีก ท่ามกลางเสียงกรีดร้องอันไม่สิ้นสุด",
						"hindi": "भ्रम और गहरा गया। अनंत चीखों के बीच।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 것들. 너희도 결국 나와 같은 길을 걷게 될 것이다.",
						"english": "Fools. You too will walk my doomed path.",
						"japanese": "愚か者どもめ。貴様らもいずれ、私と同じ道を辿るだろう。",
						"chinese": "愚蠢的家伙。你们终将步我后尘。",
						"french": "Imbéciles. Vous suivrez tous ma voie funeste.",
						"spanish": "Necios. Todos vosotros seguiréis mi sendero maldito.",
						"vietnamese": "Đồ ngu. Các ngươi rồi cũng sẽ bước vào con đường chết chóc của ta.",
						"thai": "พวกโง่เขลา. พวกเจ้าทุกคนก็จะต้องเดินตามเส้นทางหายนะของข้า",
						"hindi": "मूर्खों। तुम सब भी मेरे शापित मार्ग पर चलोगे।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 다시… 반드시…!",
						"english": "Damn it... Again... I must...!",
						"japanese": "くそ… もう一度… 必ず…！",
						"chinese": "该死…… 再来…… 务必……！",
						"french": "Merde... Encore... Il le faut...!",
						"spanish": "¡Maldición...! Otra vez... ¡Debo...!",
						"vietnamese": "Chết tiệt... Lại nữa... Nhất định...!",
						"thai": "ให้ตายสิ... อีกครั้ง... ข้าต้องได้...!",
						"hindi": "धिक्कार है... फिर से... अवश्य...!"
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크크… 한심하군. 결국… 또 실패다.",
						"english": "Heh heh... Pathetic. In the end... another failure.",
						"japanese": "クク…情けない。結局…また失敗か。",
						"chinese": "呵呵…真可怜。最终…又是失败。",
						"french": "Huhu… Pathétique. Au final… encore un échec.",
						"spanish": "Je je… Patético. Al final… otro fracaso.",
						"vietnamese": "Khụ khụ… Thật thảm hại. Cuối cùng… lại thất bại nữa rồi.",
						"thai": "ฮึ ฮึ…น่าสมเพชนัก ท้ายที่สุด…ก็ล้มเหลวอีกจนได้",
						"hindi": "हँ हँ... दयनीय। अंत में... एक और विफलता।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "보스는 사라졌지만, 그 비웃음은 공간에 남았다.",
						"english": "The boss disappeared, but his sneer lingered in the space.",
						"japanese": "ボスは消えたが、その嘲笑は空間に残った。",
						"chinese": "Boss消失了，但他的嘲笑声却留在了空间里。",
						"french": "Le boss a disparu, mais son ricanement est resté dans l'espace.",
						"spanish": "El jefe desapareció, pero su burla permaneció en el espacio.",
						"vietnamese": "Trùm đã biến mất, nhưng tiếng cười khẩy của hắn vẫn còn đọng lại trong không gian.",
						"thai": "หัวหน้าหายไปแล้ว แต่เสียงเย้ยหยันของเขายังคงอยู่ในห้วงมิติ",
						"hindi": "बॉस गायब हो गया, लेकिन उसकी उपहास अंतरिक्ष में बनी रही।"
					}
				},
				{
					"speaker": "max",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "focus",
					"duration_ms": 500
				},
				{
					"speaker": "max",
					"content": {
						"korean": "아니… 실패가 아니야… 이번엔… 달라…",
						"english": "No... it's not a failure... This time... it's different...",
						"japanese": "違う…失敗じゃない…今度は…違う…",
						"chinese": "不…这不是失败…这次…不同了…",
						"french": "Non… ce n'est pas un échec… Cette fois… c'est différent…",
						"spanish": "No… no es un fracaso… Esta vez… es diferente…",
						"vietnamese": "Không… không phải thất bại… Lần này… khác rồi…",
						"thai": "ไม่…นี่ไม่ใช่ความล้มเหลว…ครั้งนี้…มันแตกต่าง…",
						"hindi": "नहीं... यह विफलता नहीं है... इस बार... यह अलग है..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "맥스! 정신이 들어?",
						"english": "Max! Are you awake?",
						"japanese": "マックス！正気か？",
						"chinese": "麦克斯！你醒了吗？",
						"french": "Max ! Tu es réveillé ?",
						"spanish": "¡Max! ¿Estás despierto?",
						"vietnamese": "Max! Tỉnh lại chưa?",
						"thai": "แม็กซ์! นายตื่นแล้วใช่ไหม?",
						"hindi": "मैक्स! क्या तुम जागे हो?"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "맥스는 반복의 증거이자, 깨어날 수 있는 희망이 되었다.",
						"english": "Max became proof of the loop, and the hope of awakening.",
						"japanese": "マックスは繰り返しの証となり、目覚める希望となった。",
						"chinese": "麦克斯成为了循环的证据，也是能够醒来的希望。",
						"french": "Max est devenu la preuve de la répétition, et l'espoir de l'éveil.",
						"spanish": "Max se convirtió en la prueba de la repetición y en la esperanza de despertar.",
						"vietnamese": "Max đã trở thành bằng chứng của sự lặp lại, và là niềm hy vọng có thể thức tỉnh.",
						"thai": "แม็กซ์กลายเป็นหลักฐานของการวนซ้ำ และความหวังที่จะตื่นขึ้นมา",
						"hindi": "मैक्स लूप का प्रमाण और जागृति की आशा बन गया।"
					},
					"emotion": "base"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "공간이 일그러지며 거대한 그림자가 나타났다.",
						"english": "The space warped, and a giant shadow appeared.",
						"japanese": "空間が歪み、巨大な影が現れた。",
						"chinese": "空间扭曲，一个巨大的影子出现了。",
						"french": "L'espace se déforma et une ombre gigantesque apparut.",
						"spanish": "El espacio se distorsionó y una sombra gigantesca apareció.",
						"vietnamese": "Không gian méo mó, một bóng đen khổng lồ xuất hiện.",
						"thai": "ห้วงมิติบิดเบี้ยว และเงามหึมาก็ปรากฏขึ้น",
						"hindi": "अंतरिक्ष विकृत हो गया, और एक विशाल छाया प्रकट हुई।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "또 속아 넘어갔나, 맥스? 이번엔 다를 거라는 그 헛된 희망에?",
						"english": "Fooled again, Max? By that vain hope that this time would be different?",
						"japanese": "また騙されたのか、マックス？今度こそ違うという、その空しい希望に？",
						"chinese": "又被骗了，麦克斯？被那“这次会有所不同”的虚妄希望所骗？",
						"french": "Encore dupé, Max ? Par ce vain espoir que cette fois serait différente ?",
						"spanish": "¿De nuevo engañado, Max? ¿Por esa vana esperanza de que esta vez sería diferente?",
						"vietnamese": "Lại bị lừa nữa sao, Max? Bởi cái hy vọng hão huyền lần này sẽ khác đó ư?",
						"thai": "ถูกหลอกอีกแล้วเหรอ แม็กซ์? ด้วยความหวังอันไร้สาระว่าครั้งนี้จะแตกต่างน่ะเหรอ?",
						"hindi": "फिर से मूर्ख बन गए, मैक्स? उस व्यर्थ की उम्मीद से कि इस बार अलग होगा?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "max",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "max",
					"content": {
						"korean": "네가… 네가 그랬어…!",
						"english": "You... you did this...!",
						"japanese": "お前が…お前がやったのか…！",
						"chinese": "是你…是你做的…！",
						"french": "Toi… c'est toi qui as fait ça… !",
						"spanish": "¡Tú... tú lo hiciste...!",
						"vietnamese": "Ngươi… ngươi đã làm chuyện này…!",
						"thai": "แก… แกทำมัน…!",
						"hindi": "तुमने... तुमने यह किया...!"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "당장 그만둬!",
						"english": "Stop it now!",
						"japanese": "今すぐやめろ！",
						"chinese": "马上停止！",
						"french": "Arrête ça tout de suite !",
						"spanish": "¡Detente ahora mismo!",
						"vietnamese": "Dừng lại ngay!",
						"thai": "หยุดเดี๋ยวนี้!",
						"hindi": "तुरंत रुक जाओ!"
					}
				}
			]
		}
	]
} as const;
