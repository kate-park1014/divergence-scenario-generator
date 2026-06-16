export const scenario_snowy_skuld_72_03 = {
	"scenario_id": "snowy_skuld_72_03",
	"order": 3,
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
			"끝없이 맴도는 빙하의 흔적.",
			"그 길을 따라가는 자, 이바르.",
			"맹목의 의무가 그를 묶었는가, 스스로를 가두었는가.",
			"진실은 얼어붙은 시간 속에 잠들어 있었다."
		],
		"english": [
			"The endless traces of the circling glacier.",
			"Ivar, who follows that path.",
			"Did blind duty bind him, or did he imprison himself?",
			"The truth lay dormant in frozen time."
		],
		"japanese": [
			"際限なく渦巻く氷河の痕跡。",
			"その道を辿る者、イヴァル。",
			"盲目の義務が彼を縛ったのか、それとも彼自身が囚われたのか。",
			"真実は凍てついた時間の中に眠っていた。"
		],
		"chinese": [
			"冰川无尽盘旋的痕迹。",
			"追随那条路的，是伊瓦尔。",
			"是盲目的职责束缚了他，还是他自我囚禁？",
			"真相沉睡在冻结的时间里。"
		],
		"french": [
			"Les traces infinies du glacier tourbillonnant.",
			"Ivar, celui qui suit ce chemin.",
			"Le devoir aveugle l'a-t-il lié, ou s'est-il emprisonné lui-même ?",
			"La vérité dormait dans le temps figé."
		],
		"spanish": [
			"Las huellas interminables del glaciar que gira.",
			"Ivar, quien sigue ese camino.",
			"¿Lo ató un deber ciego, o se aprisionó a sí mismo?",
			"La verdad yacía dormida en el tiempo congelado."
		],
		"vietnamese": [
			"Dấu vết không ngừng xoáy của sông băng.",
			"Ivar, người theo con đường đó.",
			"Có phải nghĩa vụ mù quáng đã trói buộc anh ta, hay anh ta tự giam mình?",
			"Sự thật nằm im lìm trong thời gian đóng băng."
		],
		"thai": [
			"ร่องรอยธารน้ำแข็งหมุนวนไม่รู้จบ",
			"อิวาร์ ผู้ติดตามเส้นทางนั้น",
			"หน้าที่อันมืดบอดผูกมัดเขาไว้ หรือเขากักขังตัวเอง?",
			"ความจริงหลับใหลอยู่ในกาลเวลาที่เยือกแข็ง"
		],
		"hindi": [
			"चक्रवाती ग्लेशियर के अंतहीन निशान।",
			"इवर, जो उस मार्ग पर चलता है।",
			"क्या अंधे कर्तव्य ने उसे बांधा, या उसने खुद को कैद कर लिया?",
			"सच जमे हुए समय में सोया हुआ था।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "빙하가 끝없이 맴돈 흔적, 거대한 원이 얼음 바닥에 새겨져 있었다.",
						"english": "Traces of an endlessly circling glacier, a colossal ring etched into the ice floor.",
						"japanese": "氷河が際限なく渦巻いた痕跡、巨大な円が氷の床に刻まれていた。",
						"chinese": "冰川无尽盘旋的痕迹，一个巨大的圆圈刻在冰面上。",
						"french": "Les traces d'un glacier tourbillonnant sans fin, un cercle colossal gravé dans le sol de glace.",
						"spanish": "Las huellas de un glaciar que gira sin fin, un círculo colosal grabado en el suelo de hielo.",
						"vietnamese": "Dấu vết của sông băng xoáy không ngừng, một vòng tròn khổng lồ khắc sâu trên nền băng.",
						"thai": "ร่องรอยธารน้ำแข็งหมุนวนไม่รู้จบ วงกลมขนาดมหึมาสลักอยู่บนพื้นน้ำแข็ง",
						"hindi": "एक अंतहीन चक्रवाती ग्लेशियर के निशान, बर्फ की सतह पर खुदा हुआ एक विशाल चक्र।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"spot": [
						4,
						1
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"content": {
						"korean": "멈출 줄 모르는 길인가. 과연 어떤 명령이 이토록 집요할까.",
						"english": "Is this a path without end? What command could be so relentless?",
						"japanese": "これは終わりのない道なのか。一体どのような命令がこれほど執拗なのか。",
						"chinese": "这是一条无止尽的路吗？究竟是什么样的命令如此执着？",
						"french": "Est-ce un chemin sans fin ? Quel ordre pourrait être si implacable ?",
						"spanish": "¿Es este un camino sin fin? ¿Qué orden podría ser tan implacable?",
						"vietnamese": "Đây là con đường không điểm dừng sao? Mệnh lệnh nào có thể dai dẳng đến vậy?",
						"thai": "นี่คือเส้นทางที่ไม่มีวันสิ้นสุดหรือ? คำสั่งใดจะคงอยู่ไม่สิ้นสุดเช่นนี้?",
						"hindi": "क्या यह अंतहीन मार्ग है? आखिर कौन सा आदेश इतना अथक हो सकता है?"
					},
					"emotion": "base",
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "이바르. 당신도 이 흔적을 따라왔군요.",
						"english": "Ivar. You've followed these traces too.",
						"japanese": "イヴァル。あなたもこの痕跡を辿ってきたのですね。",
						"chinese": "伊瓦尔。你也追随这些痕迹而来了。",
						"french": "Ivar. Toi aussi, tu as suivi ces traces.",
						"spanish": "Ivar. Tú también has seguido estas huellas.",
						"vietnamese": "Ivar. Anh cũng đã theo dấu vết này.",
						"thai": "อิวาร์ คุณก็ติดตามร่องรอยเหล่านี้มาเหมือนกัน",
						"hindi": "इवर। तुम भी इन निशानों का पीछा करते हुए आए हो।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "강함의 끝을 시험하는 자에게, 모든 길은 통과 의례다.",
						"english": "For those who test the limits of strength, every path is a rite of passage.",
						"japanese": "強さの果てを試す者にとって、全ての道は通過儀礼だ。",
						"chinese": "对于那些考验力量极限的人来说，所有道路都是一种成人礼。",
						"french": "Pour ceux qui testent les limites de la force, chaque chemin est un rite de passage.",
						"spanish": "Para aquellos que prueban los límites de la fuerza, cada camino es un rito de iniciación.",
						"vietnamese": "Đối với những người thử thách giới hạn sức mạnh, mọi con đường đều là một nghi thức vượt qua.",
						"thai": "สำหรับผู้ที่ทดสอบขีดจำกัดแห่งความแข็งแกร่ง ทุกเส้นทางคือพิธีกรรมแห่งการผ่านพ้น",
						"hindi": "जो अपनी ताकत की सीमाओं का परीक्षण करते हैं, उनके लिए हर रास्ता एक दीक्षा संस्कार है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그때, 얼음 속에서 정체 모를 그림자가 솟아올랐다.",
						"english": "Then, an unknown shadow surged from within the ice.",
						"japanese": "その時、氷の中から正体不明の影が湧き上がった。",
						"chinese": "那时，一个不知名的影子从冰中浮现。",
						"french": "Alors, une ombre inconnue surgit de la glace.",
						"spanish": "Entonces, una sombra desconocida surgió del hielo.",
						"vietnamese": "Lúc đó, một bóng tối không rõ nguồn gốc trỗi dậy từ trong băng.",
						"thai": "แล้ว เงาประหลาดก็ผุดขึ้นมาจากน้ำแข็ง",
						"hindi": "तभी, बर्फ के भीतर से एक अनजान परछाई उभरी।"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "누구도 이 길을 거스를 수 없다.",
						"english": "No one can defy this path.",
						"japanese": "誰もこの道に逆らうことはできない。",
						"chinese": "没有人能违抗这条路。",
						"french": "Nul ne peut défier ce chemin.",
						"spanish": "Nadie puede desafiar este camino.",
						"vietnamese": "Không ai có thể chống lại con đường này.",
						"thai": "ไม่มีใครต้านทานเส้นทางนี้ได้",
						"hindi": "कोई भी इस रास्ते का उल्लंघन नहीं कर सकता।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "맴도는 자취 곳곳에, 누군가 멈춰 섰다 다시 떠난 흔적이 보였다.",
						"english": "Traces lingered everywhere, showing where someone had stopped and then left.",
						"japanese": "彷徨う足跡の至るところに、誰かが立ち止まり、そして去っていった痕跡が見えた。",
						"chinese": "在徘徊的足迹各处，看到了某人停下又离开的痕迹。",
						"french": "Partout où des traces s'attardaient, on voyait les signes d'un arrêt et d'un départ.",
						"spanish": "Por todas partes, las huellas persistentes mostraban que alguien se había detenido y luego se había marchado.",
						"vietnamese": "Khắp nơi dấu vết vương lại, cho thấy có người đã dừng chân rồi lại rời đi.",
						"thai": "ร่องรอยที่ยังคงอยู่ทั่วทุกหนแห่ง บ่งบอกว่ามีใครบางคนหยุดและจากไปแล้ว",
						"hindi": "हर जगह घूमते हुए निशान, किसी के रुकने और फिर चले जाने के संकेत दिख रहे थे।"
					}
				},
				{
					"speaker": "ivar",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						1
					],
					"action": "enter"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…멈출 수 없었던 건가. 아니면 멈추지 않았던 건가.",
						"english": "...Was it that they couldn't stop? Or that they wouldn't?",
						"japanese": "…止められなかったのか。それとも、止めなかったのか。",
						"chinese": "……是无法停止吗？还是没有停止呢？",
						"french": "...Ne pouvaient-ils pas s'arrêter ? Ou ne voulaient-ils pas ?",
						"spanish": "...¿No pudieron detenerse? ¿O no quisieron hacerlo?",
						"vietnamese": "...Là không thể dừng lại, hay không muốn dừng lại?",
						"thai": "...หยุดไม่ได้งั้นหรือ? หรือไม่หยุดกันแน่?",
						"hindi": "…क्या वे रुक नहीं पाए थे? या रुके ही नहीं थे?"
					},
					"type": "speech",
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "그는 무엇 때문에 이 길을 맴돌았을까요.",
						"english": "What made him wander this path?",
						"japanese": "彼は何故この道を彷徨ったのだろうか。",
						"chinese": "他为何徘徊在这条路上呢？",
						"french": "Pourquoi a-t-il erré sur ce chemin ?",
						"spanish": "¿Por qué deambuló por este camino?",
						"vietnamese": "Vì điều gì mà hắn cứ mãi quanh quẩn trên con đường này?",
						"thai": "อะไรทำให้เขาวนเวียนอยู่บนเส้นทางนี้?",
						"hindi": "वह इस रास्ते पर क्यों भटकता रहा?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "지킬 수 없는 명령에 영원히 묶이다니… 그게 충성인가, 아니면 그저 벌인가.",
						"english": "To be eternally bound by an unbreakable command... Is that loyalty, or merely punishment?",
						"japanese": "守れぬ命令に永遠に縛られるとは… それが忠誠なのか、それともただの罰なのか。",
						"chinese": "永远被无法遵守的命令束缚……那是忠诚，还是仅仅是惩罚？",
						"french": "Être éternellement lié par un ordre impossible à tenir... Est-ce de la loyauté, ou simplement une punition ?",
						"spanish": "Estar eternamente atado a una orden imposible de cumplir... ¿Es eso lealtad, o simplemente un castigo?",
						"vietnamese": "Bị ràng buộc vĩnh viễn bởi một mệnh lệnh không thể tuân theo... Đó là sự trung thành, hay chỉ là một hình phạt?",
						"thai": "ถูกผูกมัดตลอดไปด้วยคำสั่งที่ไม่อาจรักษาไว้ได้... นั่นคือความภักดี หรือเพียงแค่การลงโทษกันแน่?",
						"hindi": "एक अटूट आदेश से हमेशा के लिए बंधे रहना... क्या यह वफादारी है, या महज़ सज़ा?"
					},
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "길을 막아선 존재가 다시 나타났다.",
						"english": "The entity that blocked the path reappeared.",
						"japanese": "道を塞いだ存在が再び現れた。",
						"chinese": "挡住去路的实体再次出现了。",
						"french": "L'entité qui bloquait le chemin est réapparue.",
						"spanish": "La entidad que bloqueaba el camino reapareció.",
						"vietnamese": "Kẻ chắn đường đã xuất hiện trở lại.",
						"thai": "สิ่งที่ขวางทางอยู่ได้ปรากฏขึ้นอีกครั้ง",
						"hindi": "रास्ता रोकने वाला अस्तित्व फिर से प्रकट हुआ।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "이 길의 끝은 없다. 거슬러 봐야 아무 의미 없다.",
						"english": "This path has no end. There's no meaning in going against it.",
						"japanese": "この道の終着点はない。逆らっても意味はない。",
						"chinese": "这条路没有尽头。逆流而上没有任何意义。",
						"french": "Ce chemin n'a pas de fin. Il est inutile d'y résister.",
						"spanish": "Este camino no tiene fin. No tiene sentido ir contra él.",
						"vietnamese": "Con đường này không có điểm cuối. Quay ngược lại cũng chẳng có ý nghĩa gì.",
						"thai": "เส้นทางนี้ไม่มีจุดสิ้นสุด การขัดขืนไปก็ไร้ความหมาย",
						"hindi": "इस रास्ते का कोई अंत नहीं। इसके खिलाफ जाने का कोई मतलब नहीं।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ivar",
					"action": "enter",
					"spot": [
						2,
						1
					]
				},
				{
					"emotion": "base",
					"content": {
						"korean": "맹목적인 의무의 끝은 무엇일까.",
						"english": "What is the end of blind duty?",
						"japanese": "盲目的な義務の終わりは何だろうか。",
						"chinese": "盲目义务的尽头是什么？",
						"french": "Quelle est la fin du devoir aveugle ?",
						"spanish": "¿Cuál es el fin del deber ciego?",
						"vietnamese": "Điểm cuối của nghĩa vụ mù quáng là gì?",
						"thai": "จุดจบของหน้าที่อันไร้จุดหมายคืออะไรกัน?",
						"hindi": "अंधी कर्तव्यनिष्ठा का अंत क्या है?"
					},
					"type": "speech",
					"speaker": "ivar"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "당신도 그런 의무를 겪어본 적 있나요?",
						"english": "Have you ever experienced such a duty?",
						"japanese": "あなたもそのような義務を経験したことがありますか？",
						"chinese": "你也曾经历过那样的义务吗？",
						"french": "Avez-vous déjà connu un tel devoir ?",
						"spanish": "¿Alguna vez has experimentado tal deber?",
						"vietnamese": "Bạn đã bao giờ trải qua một nghĩa vụ như vậy chưa?",
						"thai": "คุณเคยประสบกับหน้าที่แบบนั้นบ้างไหม?",
						"hindi": "क्या आपने कभी ऐसी कर्तव्यनिष्ठा का अनुभव किया है?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "나는 강함의 끝을 찾아 헤매지만, 적어도 길은 스스로 정한다.",
						"english": "I wander, seeking the limits of strength, but at least I choose my own path.",
						"japanese": "私は強さの果てを探し彷徨うが、少なくとも道は自ら決める。",
						"chinese": "我徘徊着寻找力量的尽头，但至少我自己选择道路。",
						"french": "J'erre, cherchant les limites de la force, mais au moins, je choisis mon propre chemin.",
						"spanish": "Yo deambulo, buscando el límite de la fuerza, pero al menos elijo mi propio camino.",
						"vietnamese": "Ta lang thang tìm kiếm giới hạn của sức mạnh, nhưng ít nhất, ta tự mình chọn con đường.",
						"thai": "ข้าท่องไปเพื่อค้นหาจุดสิ้นสุดของความแข็งแกร่ง แต่ข้าก็เลือกเส้นทางของข้าเอง",
						"hindi": "मैं शक्ति की सीमा की तलाश में भटकता हूँ, लेकिन कम से कम मैं अपना रास्ता खुद चुनता हूँ।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "ivar"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "이자는… 영원히 반복되는 고통을 택한 건가.",
						"english": "Did this one... choose eternal, repeating torment?",
						"japanese": "この者は…永遠に繰り返される苦痛を選んだのか。",
						"chinese": "这家伙……选择了永恒重复的痛苦吗？",
						"french": "Celui-ci... a-t-il choisi un tourment éternel et répétitif ?",
						"spanish": "¿Esta persona... eligió un tormento eterno y repetitivo?",
						"vietnamese": "Kẻ này... đã chọn sự thống khổ lặp đi lặp lại mãi mãi sao?",
						"thai": "หมอนี่... เลือกความทรมานที่ไม่มีที่สิ้นสุดงั้นหรือ?",
						"hindi": "क्या इसने... अंतहीन, बार-बार होने वाली यातना चुनी है?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "얼음의 그림자가 다시 길을 가로막았다.",
						"english": "The shadow of ice again blocked the path.",
						"japanese": "氷の影が再び道を塞いだ。",
						"chinese": "冰影再次阻挡了去路。",
						"french": "L'ombre de glace bloquait de nouveau le chemin.",
						"spanish": "La sombra de hielo bloqueó el camino de nuevo.",
						"vietnamese": "Bóng băng lại chặn đường.",
						"thai": "เงาของน้ำแข็งขวางเส้นทางอีกครั้ง",
						"hindi": "बर्फ की छाया ने फिर रास्ता रोक दिया।"
					}
				},
				{
					"content": {
						"korean": "이 길이 곧 의무다. 따를지 말지 선택하라.",
						"english": "This path is your duty. Choose whether to follow it.",
						"japanese": "この道こそ義務だ。従うか否か、選べ。",
						"chinese": "这条路就是职责。选择是否追随。",
						"french": "Ce chemin est ton devoir. Choisis de le suivre ou non.",
						"spanish": "Este camino es tu deber. Elige si seguirlo o no.",
						"vietnamese": "Con đường này là nghĩa vụ. Chọn tuân theo hay không.",
						"thai": "เส้นทางนี้คือหน้าที่ จงเลือกที่จะทำตามหรือไม่",
						"hindi": "यह मार्ग ही कर्तव्य है। चुनो कि इसका पालन करें या नहीं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "ivar",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						1,
						1
					],
					"action": "enter"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "이 길의 끝에 무엇이 있을까.",
						"english": "What awaits at the end of this path?",
						"japanese": "この道の先に何があるのだろうか。",
						"chinese": "这条路的尽头会有什么？",
						"french": "Qu'y aura-t-il au bout de ce chemin ?",
						"spanish": "¿Qué habrá al final de este camino?",
						"vietnamese": "Điều gì ở cuối con đường này?",
						"thai": "มีอะไรอยู่ที่ปลายทางของเส้นทางนี้?",
						"hindi": "इस मार्ग के अंत में क्या होगा?"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "아무것도 없을지도 모른다는 생각이 듭니다.",
						"english": "I suspect there might be nothing.",
						"japanese": "何もないかもしれない気がします。",
						"chinese": "我觉得可能什么都没有。",
						"french": "J'ai l'impression qu'il n'y a peut-être rien.",
						"spanish": "Siento que quizás no haya nada.",
						"vietnamese": "Tôi nghĩ có thể không có gì cả.",
						"thai": "ฉันรู้สึกว่าอาจจะไม่มีอะไรเลย",
						"hindi": "मुझे लगता है कि कुछ भी नहीं हो सकता है।"
					},
					"type": "speech"
				},
				{
					"speaker": "ivar",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "어둠은 어디에도 없고, 검은 돌아갈 곳이 없다… 어쩌면 이 말이 맞을지도.",
						"english": "Darkness is nowhere, and the sword has no place to return... Perhaps this is true.",
						"japanese": "闇はどこにもなく、剣は帰る場所がない… もしかしたら、この言葉が正しいのかもしれない。",
						"chinese": "黑暗无处不在，剑无归处……或许这话是对的。",
						"french": "L'obscurité n'est nulle part, et l'épée n'a pas de retour... Peut-être que c'est vrai.",
						"spanish": "La oscuridad no está en ningún lugar, y la espada no tiene a dónde regresar... Quizás esto sea cierto.",
						"vietnamese": "Bóng tối ở khắp nơi, và thanh kiếm không có nơi để trở về... Có lẽ lời này đúng.",
						"thai": "ความมืดไม่มีอยู่จริง และดาบไม่มีที่ให้กลับไป... บางทีคำพูดนี้อาจเป็นจริง",
						"hindi": "अँधेरा कहीं नहीं है, और तलवार के पास लौटने की कोई जगह नहीं है... शायद यह सच है।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "자신의 의무를 맹목적으로 믿는 자는… 결국 텅 빈 곳에 다다르리라.",
						"english": "Those who blindly believe in their duty... will eventually reach an empty place.",
						"japanese": "己の義務を盲目的に信じる者は… 結局、虚無にたどり着くだろう。",
						"chinese": "盲目相信自己职责的人……最终会到达一个空虚之地。",
						"french": "Ceux qui croient aveuglément en leur devoir... finiront par atteindre un lieu vide.",
						"spanish": "Aquellos que creen ciegamente en su deber... finalmente llegarán a un lugar vacío.",
						"vietnamese": "Những người mù quáng tin vào nghĩa vụ của mình... cuối cùng sẽ đến một nơi trống rỗng.",
						"thai": "ผู้ที่เชื่อในหน้าที่ของตนอย่างสุ่มสี่สุ่มห้า... ในที่สุดก็จะไปถึงที่ว่างเปล่า",
						"hindi": "जो अपने कर्तव्य पर आँख बंद करके विश्वास करते हैं... अंततः एक खाली जगह पर पहुँचेंगे।"
					},
					"type": "speech",
					"speaker": "ivar"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "마지막 시련이 얼음 속에서 모습을 드러냈다.",
						"english": "The final trial revealed itself within the ice.",
						"japanese": "最後の試練が氷の中から姿を現した。",
						"chinese": "最后的试炼在冰中显现。",
						"french": "La dernière épreuve se révéla dans la glace.",
						"spanish": "La última prueba se reveló dentro del hielo.",
						"vietnamese": "Thử thách cuối cùng đã xuất hiện trong băng.",
						"thai": "การทดลองสุดท้ายปรากฏขึ้นในน้ำแข็ง",
						"hindi": "अंतिम परीक्षा बर्फ के भीतर प्रकट हुई।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "맹목만이 길을 열 것이다. 너희도 곧 알게 될 것이다.",
						"english": "Only blindness will open the way. You too will soon know.",
						"japanese": "盲目さだけが道を開くだろう。お前たちもすぐに知るだろう。",
						"chinese": "唯有盲目才能开辟道路。你们也很快会明白。",
						"french": "Seule la cécité ouvrira le chemin. Vous aussi, vous le saurez bientôt.",
						"spanish": "Solo la ceguera abrirá el camino. Vosotros también lo sabréis pronto.",
						"vietnamese": "Chỉ sự mù quáng mới mở đường. Các ngươi cũng sẽ sớm biết thôi.",
						"thai": "มีเพียงความมืดบอดเท่านั้นที่จะเปิดทางได้ พวกเจ้าจะรู้ในไม่ช้า",
						"hindi": "केवल अंधापन ही रास्ता खोलेगा। तुम भी जल्द ही जान जाओगे।"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…겨우 이것이 끝이더냐. 맹목의 의무는 깨지지 않는다.",
						"english": "...Is this truly the end? The duty of blindness remains unbroken.",
						"japanese": "…たかがこれが終わりだと？盲目の義務は破られぬ。",
						"chinese": "……这便是结局吗？盲目之责，永不破灭。",
						"french": "...N'est-ce que ça, la fin ? Le devoir de cécité ne sera pas brisé.",
						"spanish": "...¿Es solo esto el final? El deber de la ceguera no se rompe.",
						"vietnamese": "...Chỉ thế này thôi sao? Nghĩa vụ mù quáng không thể bị phá vỡ.",
						"thai": "…แค่นี้เองหรือคือจุดจบ หน้าที่แห่งความมืดบอดมิอาจถูกทำลาย",
						"hindi": "क्या बस यही अंत है? अंधता का कर्तव्य अटूट है।"
					}
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ivar",
					"action": "enter",
					"spot": [
						4,
						1
					]
				},
				{
					"speaker": "ivar",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "강함은 길을 부수지만, 어쩌면 이 길은 애초에 부서질 수 없는 것인지도.",
						"english": "Strength may break a path, but perhaps this path was unbreakable from the start.",
						"japanese": "強さは道を壊すが、もしかしたらこの道は最初から壊れないものなのかもしれない。",
						"chinese": "强大能摧毁道路，但或许这条路从一开始就不可摧毁。",
						"french": "La force peut briser un chemin, mais peut-être que ce chemin était incassable dès le début.",
						"spanish": "La fuerza puede romper un camino, pero tal vez este camino era irrompible desde el principio.",
						"vietnamese": "Sức mạnh có thể phá vỡ con đường, nhưng có lẽ con đường này ngay từ đầu đã không thể bị phá vỡ.",
						"thai": "ความแข็งแกร่งอาจทำลายเส้นทาง ทว่าบางทีเส้นทางนี้อาจมิอาจถูกทำลายตั้งแต่แรกเริ่ม",
						"hindi": "शक्ति मार्ग को तोड़ सकती है, लेकिन शायद यह मार्ग शुरू से ही अटूट था।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "우리는 옳은 길을 가고 있는 걸까요?",
						"english": "Are we on the right path?",
						"japanese": "私たちは正しい道を歩んでいるのでしょうか？",
						"chinese": "我们正在走向正确的道路吗？",
						"french": "Sommes-nous sur la bonne voie ?",
						"spanish": "¿Estamos en el camino correcto?",
						"vietnamese": "Liệu chúng ta có đang đi đúng đường không?",
						"thai": "เรากำลังเดินบนเส้นทางที่ถูกต้องหรือไม่?",
						"hindi": "क्या हम सही रास्ते पर चल रहे हैं?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "길은 어디에도 닿지 못하고, 검은 돌아갈 곳을 잃었다.",
						"english": "The path reaches nowhere, and the sword has lost its way home.",
						"japanese": "道はどこにも届かず、剣は帰る場所を失った。",
						"chinese": "路无所达，剑失归处。",
						"french": "Le chemin ne mène nulle part, et l'épée a perdu le chemin du retour.",
						"spanish": "El camino no llega a ninguna parte, y la espada ha perdido su camino a casa.",
						"vietnamese": "Con đường chẳng đến đâu, và thanh kiếm đã mất lối về.",
						"thai": "เส้นทางมิอาจบรรจบ และคมดาบไร้ที่กลับคืน",
						"hindi": "मार्ग कहीं नहीं पहुँचता, और तलवार ने घर लौटने का मार्ग खो दिया है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그러나 탐험대는 멈추지 않는다. 닿지 못해도 가야 할 길이기에.",
						"english": "But the expedition does not stop. For it is a path that must be trod, even if unreachable.",
						"japanese": "しかし探検隊は止まらない。届かずとも進むべき道だからだ。",
						"chinese": "然而探险队并未止步。即便无法抵达，那也是必经之路。",
						"french": "Cependant, l'expédition ne s'arrête pas. Car c'est un chemin à parcourir, même s'il est inatteignable.",
						"spanish": "Pero la expedición no se detiene. Porque es un camino que debe ser andado, incluso si es inalcanzable.",
						"vietnamese": "Tuy nhiên, đoàn thám hiểm không dừng lại. Vì đó là con đường phải đi, dù không thể đến được.",
						"thai": "ทว่าคณะสำรวจมิหยุดยั้ง เพราะเป็นเส้นทางที่ต้องดำเนิน แม้นมิอาจบรรลุ",
						"hindi": "परंतु अभियान रुकता नहीं। क्योंकि यह वह मार्ग है जिस पर चलना ही है, भले ही वह अगम्य हो।"
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "하찮은 자들아. 너희에게도 맹목의 의무를 새겨주마.",
						"english": "Insignificant beings. I shall carve the duty of blindness into you as well.",
						"japanese": "取るに足らぬ者どもよ。お前たちにも盲目の義務を刻みつけてやろう。",
						"chinese": "卑微之徒。我亦将盲目之责刻于你们身上。",
						"french": "Êtres insignifiants. Je vous graverai aussi le devoir de cécité.",
						"spanish": "Seres insignificantes. Yo también os grabaré el deber de la ceguera.",
						"vietnamese": "Những kẻ hèn mọn. Ta cũng sẽ khắc nghĩa vụ mù quáng vào các ngươi.",
						"thai": "เจ้าพวกไร้ค่า ข้าจะสลักพันธะแห่งความมืดบอดไว้ในตัวพวกเจ้าด้วย",
						"hindi": "तुच्छ प्राणियों। मैं तुममें भी अंधता का कर्तव्य अंकित करूँगा।"
					}
				},
				{
					"content": {
						"korean": "아직 끝나지 않았어. 우리는 포기하지 않는다!",
						"english": "It's not over yet. We won't give up!",
						"japanese": "まだ終わってない。私たちは諦めない！",
						"chinese": "尚未结束。我们不会放弃！",
						"french": "Ce n'est pas encore fini. Nous n'abandonnerons pas !",
						"spanish": "Aún no ha terminado. ¡No nos rendiremos!",
						"vietnamese": "Chưa kết thúc đâu. Chúng ta sẽ không bỏ cuộc!",
						"thai": "ยังไม่จบ เราจะไม่ยอมแพ้!",
						"hindi": "अभी खत्म नहीं हुआ है। हम हार नहीं मानेंगे!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ivar",
					"action": "enter",
					"spot": [
						3,
						1
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "결국 스스로를 시험하는 길. 끝은 아직 멀었군.",
						"english": "Ultimately, a path of self-testing. The end is still far off.",
						"japanese": "結局は自らを試す道。終わりはまだ遠いな。",
						"chinese": "终究是条考验自身的道路。结局尚远。",
						"french": "En fin de compte, un chemin d'auto-test. La fin est encore lointaine.",
						"spanish": "Al final, un camino de auto-prueba. El final aún está lejos.",
						"vietnamese": "Rốt cuộc, đây là con đường tự thử thách. Kết thúc vẫn còn xa.",
						"thai": "ท้ายที่สุดคือเส้นทางแห่งการทดสอบตนเอง จุดจบยังอีกยาวไกล",
						"hindi": "अंततः, आत्म-परीक्षण का मार्ग। अंत अभी भी बहुत दूर है।"
					},
					"emotion": "base",
					"speaker": "ivar"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 얼음 벌판 한가운데, 맴도는 자취의 끝에서 거대한 그림자가 나타났다.",
						"english": "In the middle of a vast ice field, at the end of a circling trace, a gigantic shadow appeared.",
						"japanese": "広大な氷原の真ん中、渦巻く痕跡の果てに、巨大な影が現れた。",
						"chinese": "在巨大的冰原中央，盘旋的痕迹尽头，一个巨大的影子出现了。",
						"french": "Au milieu d'une vaste étendue de glace, au bout d'une trace tourbillonnante, une ombre gigantesque apparut.",
						"spanish": "En medio de una vasta llanura de hielo, al final de un rastro que giraba, apareció una sombra gigantesca.",
						"vietnamese": "Giữa cánh đồng băng rộng lớn, ở cuối vệt xoáy, một bóng đen khổng lồ hiện ra.",
						"thai": "กลางทุ่งน้ำแข็งอันกว้างใหญ่ ที่ปลายทางของร่องรอยที่หมุนวน เงาขนาดมหึมาได้ปรากฏขึ้น",
						"hindi": "एक विशाल बर्फ के मैदान के बीच में, घूमते हुए निशान के अंत में, एक विशाल छाया प्रकट हुई।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이것이 너희가 찾던 끝인가. 끝은 영원히 오지 않는다.",
						"english": "Is this the end you sought? The end never truly comes.",
						"japanese": "これがお前たちが求めていた終わりか。終わりは永遠に来ない。",
						"chinese": "这就是你们所寻求的结局吗？结局永远不会到来。",
						"french": "Est-ce la fin que vous cherchiez ? La fin ne vient jamais vraiment.",
						"spanish": "Es este el final que buscabais? El final nunca llega.",
						"vietnamese": "Đây có phải là kết thúc mà các ngươi tìm kiếm? Kết thúc không bao giờ đến.",
						"thai": "นี่คือจุดจบที่เจ้าตามหาใช่หรือไม่ จุดจบไม่มีวันมาถึง",
						"hindi": "क्या यही वह अंत है जिसकी तुम्हें तलाश थी? अंत कभी नहीं आता।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "맹목만이 이 길을 유지시킨다. 너희도 그 의무의 일부가 될 것이다.",
						"english": "Blindness alone sustains this path. You too shall become part of that duty.",
						"japanese": "盲目だけがこの道を維持する。お前たちもその義務の一部となるだろう。",
						"chinese": "唯有盲目才能维系此路。你们也将成为那份义务的一部分。",
						"french": "Seule la cécité maintient ce chemin. Vous ferez vous aussi partie de ce devoir.",
						"spanish": "Solo la ceguera mantiene este camino. Vosotros también formaréis parte de ese deber.",
						"vietnamese": "Chỉ có sự mù quáng mới duy trì con đường này. Ngươi cũng sẽ trở thành một phần của nghĩa vụ đó.",
						"thai": "ความมืดบอดเท่านั้นที่คงเส้นทางนี้ไว้ พวกเจ้าเองก็จักเป็นส่วนหนึ่งแห่งพันธะนั้น",
						"hindi": "केवल अंधता ही इस मार्ग को बनाए रखती है। तुम भी उस कर्तव्य का हिस्सा बनोगे।"
					}
				},
				{
					"content": {
						"korean": "강요된 의무는 충성이 아니다. 우리는 스스로 길을 정한다.",
						"english": "Duty forced is not loyalty. We choose our own path.",
						"japanese": "強制された義務は忠誠ではない。我々は自ら道を決める。",
						"chinese": "强加的义务并非忠诚。我们选择自己的道路。",
						"french": "Un devoir imposé n'est pas loyauté. Nous traçons notre propre chemin.",
						"spanish": "Un deber forzado no es lealtad. Nosotros elegimos nuestro propio camino.",
						"vietnamese": "Nghĩa vụ bị ép buộc không phải là lòng trung thành. Chúng ta tự định đoạt con đường của mình.",
						"thai": "หน้าที่ที่ถูกบังคับมิใช่ความภักดี เราเลือกเส้นทางของเราเอง",
						"hindi": "जबरन कर्तव्य निष्ठा नहीं है। हम अपना मार्ग स्वयं चुनते हैं।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"id": 15
		}
	]
} as const;
