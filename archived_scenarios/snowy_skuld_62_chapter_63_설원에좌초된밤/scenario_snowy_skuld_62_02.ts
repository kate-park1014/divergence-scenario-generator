export const scenario_snowy_skuld_62_02 = {
	"scenario_id": "snowy_skuld_62_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"eira": {
			"id": "mon_0c37c014-b5ca-4f2f-ad03-5d393e5b2eb1",
			"name": {
				"korean": "에이라",
				"english": "Eira",
				"japanese": "エイラ",
				"chinese": "艾拉",
				"french": "Eira",
				"spanish": "Eira",
				"vietnamese": "Eira",
				"thai": "ไอรา",
				"hindi": "ऐरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8e2970b7-bcb1-4b1c-6bf0-93106b373500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0ca1ec09-a624-450f-054a-b98de58bdb00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"바다를 등진 배.",
			"맹세는 그들을 설원으로 이끌었다.",
			"그러나 얼음은 비명을 집어삼키고.",
			"그 밤, 모든 항해가 멈췄다."
		],
		"english": [
			"Ships turned from the sea.",
			"An oath led them to the snowfields.",
			"But the ice swallowed their screams.",
			"That night, all voyages ceased."
		],
		"japanese": [
			"海に背を向けた船。",
			"誓いは彼らを雪原へと導いた。",
			"しかし、氷は悲鳴を飲み込み。",
			"その夜、全ての航海が止まった。"
		],
		"chinese": [
			"背离大海的船只。",
			"誓言将他们引向雪原。",
			"然而，冰吞噬了尖叫。",
			"那一夜，所有航行都停止了。"
		],
		"french": [
			"Des navires tournés loin de la mer.",
			"Un serment les mena aux champs de neige.",
			"Mais la glace engloutit leurs cris.",
			"Cette nuit-là, toutes les traversées cessèrent."
		],
		"spanish": [
			"Barcos que dieron la espalda al mar.",
			"Un juramento los llevó a los campos nevados.",
			"Pero el hielo se tragó los gritos.",
			"Esa noche, todos los viajes cesaron."
		],
		"vietnamese": [
			"Những con thuyền quay lưng với biển.",
			"Một lời thề đã dẫn họ đến những cánh đồng tuyết.",
			"Nhưng băng đã nuốt chửng những tiếng thét.",
			"Đêm đó, mọi chuyến hải trình đều dừng lại."
		],
		"thai": [
			"เรือที่หันหลังให้ทะเล",
			"คำสาบานนำพวกเขาไปสู่ทุ่งหิมะ",
			"แต่ผืนน้ำแข็งกลืนกินเสียงกรีดร้อง",
			"คืนนั้น การเดินทางทั้งหมดก็หยุดลง"
		],
		"hindi": [
			"समुद्र से मुड़े जहाज़।",
			"एक शपथ ने उन्हें बर्फीले मैदानों की ओर ले जाया।",
			"लेकिन बर्फ ने चीखों को निगल लिया।",
			"उस रात, सभी यात्राएँ रुक गईं।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "척후선의 잔해가 거대한 무덤처럼 흩어져 있었다. 칼날 같은 바람이 폐부를 찔렀다.",
						"english": "The scout ship's wreckage lay scattered like a colossal tomb. A blade-like wind pierced my lungs.",
						"japanese": "偵察船の残骸が巨大な墓のように散らばっていた。刃のような風が肺を突き刺した。",
						"chinese": "侦察船的残骸像一座巨大的墓地般散落着。刀锋般的寒风刺入肺腑。",
						"french": "L'épave du vaisseau éclaireur était éparpillée comme une tombe colossale. Un vent coupant me transperçait les poumons.",
						"spanish": "Los restos de la nave de exploración yacían esparcidos como una tumba colosal. Un viento cortante me perforó los pulmones.",
						"vietnamese": "Xác con tàu trinh sát nằm rải rác như một ngôi mộ khổng lồ. Một làn gió sắc như dao cứa vào phổi tôi.",
						"thai": "ซากเรือลาดตระเวนกระจัดกระจายราวกับสุสานขนาดมหึมา ลมที่คมกริบราวกับใบมีดแทงทะลุปอด",
						"hindi": "टोही जहाज का मलबा एक विशाल कब्र की तरह बिखरा पड़ा था। एक छुरी जैसी हवा ने मेरे फेफड़ों को भेद दिया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 룬은… 마지막 항해의 기록이군.",
						"english": "This rune... it records the final voyage.",
						"japanese": "このルーンは… 最後の航海の記録か。",
						"chinese": "这符文… 是最后一次航行的记录啊。",
						"french": "Cette rune... elle enregistre le dernier voyage.",
						"spanish": "Esta runa... registra el último viaje.",
						"vietnamese": "Chữ rune này... ghi lại chuyến hải trình cuối cùng.",
						"thai": "รูนนี้... บันทึกการเดินทางครั้งสุดท้ายสินะ",
						"hindi": "यह रन... आखिरी यात्रा का रिकॉर्ड है।"
					},
					"type": "speech",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "뭐라고 쓰여 있는데?",
						"english": "What does it say?",
						"japanese": "なんて書いてある？",
						"chinese": "写了什么？",
						"french": "Qu'est-ce qu'il dit ?",
						"spanish": "¿Qué dice?",
						"vietnamese": "Nó viết gì vậy?",
						"thai": "มันเขียนว่าอะไร?",
						"hindi": "क्या लिखा है इसमें?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "\"어둠을 좇아, 바다를 떠났다.\"",
						"english": "\"Chasing the darkness, we left the sea.\"",
						"japanese": "「闇を追って、海を去った。」",
						"chinese": "“追逐黑暗，我们离开了大海。”",
						"french": "« Poursuivant l'obscurité, nous avons quitté la mer. »",
						"spanish": "«Persiguiendo la oscuridad, dejamos el mar.»",
						"vietnamese": "“Theo đuổi bóng tối, chúng tôi đã rời bỏ biển cả.”",
						"thai": "“ไล่ตามความมืดมิด เราละทิ้งทะเลไป”",
						"hindi": "“अंधेरे का पीछा करते हुए, हमने समुद्र छोड़ दिया।”"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "바다를 떠났다고? 왜?",
						"english": "Left the sea? Why?",
						"japanese": "海を去った？なぜだ？",
						"chinese": "离开了大海？为什么？",
						"french": "Quitté la mer ? Pourquoi ?",
						"spanish": "¿Dejaron el mar? ¿Por qué?",
						"vietnamese": "Rời bỏ biển cả? Tại sao?",
						"thai": "ละทิ้งทะเลไปงั้นเหรอ? ทำไมล่ะ?",
						"hindi": "समुद्र छोड़ दिया? क्यों?"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "eira",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "룬이 계속돼. \"맹세를 지키기 위해, 모든 것을 버리고… 설원으로.\"",
						"english": "The rune continues. \"To uphold the oath, abandoning all... to the snowfields.\"",
						"japanese": "ルーンが続く。「誓いを守るため、全てを捨てて…雪原へ。」",
						"chinese": "符文还在继续。“为了遵守誓言，抛弃一切……前往雪原。”",
						"french": "La rune continue. « Pour tenir le serment, abandonnant tout... vers les champs de neige. »",
						"spanish": "La runa continúa. «Para cumplir el juramento, abandonando todo... hacia los campos nevados.»",
						"vietnamese": "Chữ rune tiếp tục. “Để giữ lời thề, từ bỏ tất cả… đến những cánh đồng tuyết.”",
						"thai": "รูนยังคงดำเนินต่อไป “เพื่อรักษาคำสาบาน ละทิ้งทุกสิ่ง... สู่ทุ่งหิมะ”",
						"hindi": "रन जारी है। “शपथ निभाने के लिए, सब कुछ त्यागकर... बर्फीले मैदानों की ओर।”"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "맹세 때문에… 바다를 버렸다고?",
						"english": "Abandoned the sea... because of a vow?",
						"japanese": "「誓いのせいで…海を捨てた、と？」",
						"chinese": "“因为誓言…抛弃了大海？”",
						"french": "« Abandonné la mer… à cause d'un serment ? »",
						"spanish": "¿Abandonaste el mar... por un juramento?",
						"vietnamese": "Vì lời thề... đã bỏ biển sao?",
						"thai": "ทิ้งทะเลไป...เพราะคำสาบานงั้นเหรอ?",
						"hindi": "शपथ की वजह से... समुद्र छोड़ दिया?"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "그래. 그 선택이, 이 좌초의 시작이었어.",
						"english": "Yes. That choice was the beginning of this stranding.",
						"japanese": "「ああ。その選択が、この座礁の始まりだった。」",
						"chinese": "“是的。那个选择，是这次搁浅的开端。”",
						"french": "« Oui. Ce choix fut le début de cet échouage. »",
						"spanish": "Sí. Esa elección fue el comienzo de este encallamiento.",
						"vietnamese": "Đúng vậy. Lựa chọn đó, là khởi đầu của vụ mắc cạn này.",
						"thai": "ใช่ การตัดสินใจนั้นคือจุดเริ่มต้นของการเกยตื้นครั้งนี้",
						"hindi": "हाँ। वह चुनाव, इस फँसने की शुरुआत थी।"
					},
					"type": "speech",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "룬은 미세하게 떨리며 절망을 전했다.",
						"english": "The rune trembled subtly, conveying despair.",
						"japanese": "「ルーンは微かに震え、絶望を伝えた。」",
						"chinese": "“符文微微颤抖，传递着绝望。”",
						"french": "« La rune trembla subtilement, transmettant le désespoir. »",
						"spanish": "La runa tembló sutilmente, transmitiendo desesperación.",
						"vietnamese": "Rune khẽ rung lên, truyền tải sự tuyệt vọng.",
						"thai": "รูนสั่นสะเทือนเล็กน้อย สื่อถึงความสิ้นหวัง",
						"hindi": "रुने धीरे से काँप रहा था, निराशा व्यक्त कर रहा था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "eira",
					"action": "enter",
					"spot": [
						2,
						2
					]
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "룬은 말해. \"깊은 설원 속에서, 배는 길을 잃었다. 더 이상 돌아갈 수 없었다.\"",
						"english": "The rune says: \"In the deep snowfield, the ship lost its way. It could no longer return.\"",
						"japanese": "「ルーンは語る。「深い雪原の中で、船は道を見失った。もう戻ることはできなかった。」」",
						"chinese": "“符文说：“在深雪原中，船迷失了方向。再也无法回头。””",
						"french": "« La rune dit : « Dans la profonde étendue enneigée, le navire a perdu son chemin. Il ne pouvait plus revenir. » »",
						"spanish": "La runa dice: «En el profundo campo de nieve, el barco perdió el rumbo. Ya no pudo regresar.»",
						"vietnamese": "Rune nói: \"Trong tuyết nguyên sâu thẳm, con tàu đã lạc đường. Không thể quay trở lại nữa.\"",
						"thai": "รูนกล่าวว่า: \"ในทุ่งหิมะอันกว้างใหญ่ เรือได้หลงทางไปแล้ว ไม่สามารถกลับมาได้อีก\"",
						"hindi": "रुने कहता है: \"गहरे बर्फीले मैदान में, जहाज भटक गया था। अब वापस नहीं जा सकता था।\""
					},
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "길을 잃어… 아니, 버려진 건가?",
						"english": "Lost its way... no, was it abandoned?",
						"japanese": "「道を見失った…いや、見捨てられたのか？」",
						"chinese": "“迷失了方向…不，是被抛弃了吗？”",
						"french": "« A perdu son chemin… non, a-t-il été abandonné ? »",
						"spanish": "¿Perdió el rumbo... no, fue abandonado?",
						"vietnamese": "Lạc đường... không, là bị bỏ rơi sao?",
						"thai": "หลงทาง...ไม่สิ ถูกทิ้งร้างงั้นเหรอ?",
						"hindi": "रास्ता खो गया... नहीं, क्या इसे छोड़ दिया गया था?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "여기서 기록이 흐트러져. 마치, 거친 충격이 덮친 것처럼.",
						"english": "Here, the record becomes muddled. As if a violent impact struck.",
						"japanese": "「ここで記録が乱れる。まるで、激しい衝撃が襲ったかのように。」",
						"chinese": "“这里的记录变得混乱。仿佛遭受了猛烈的冲击。”",
						"french": "« Ici, le registre se trouble. Comme si un choc violent l'avait frappé. »",
						"spanish": "Aquí, el registro se confunde. Como si un fuerte impacto lo hubiera golpeado.",
						"vietnamese": "Ở đây, ghi chép bị xáo trộn. Cứ như thể một cú sốc mạnh đã ập đến.",
						"thai": "บันทึกที่นี่เลือนลาง เหมือนมีแรงกระแทกอย่างรุนแรง",
						"hindi": "यहाँ, रिकॉर्ड गड़बड़ा जाता है। जैसे किसी हिंसक प्रभाव ने हमला किया हो।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "얼음과 바위가 뒤섞인 곳, 룬은 거칠게 끊겨 있었다.",
						"english": "Where ice and rocks mingled, the rune was roughly broken off.",
						"japanese": "「氷と岩が混じり合う場所で、ルーンは粗く途切れていた。」",
						"chinese": "“在冰与岩石交织之处，符文粗暴地断裂了。”",
						"french": "« Là où la glace et les rochers se mêlaient, la rune était brutalement brisée. »",
						"spanish": "Donde el hielo y las rocas se mezclaban, la runa estaba toscamente rota.",
						"vietnamese": "Nơi băng và đá lẫn lộn, rune bị đứt quãng một cách thô bạo.",
						"thai": "ในที่ที่น้ำแข็งและหินผสมปนเปกัน รูนได้ขาดสะบั้นลงอย่างหยาบกระด้าง",
						"hindi": "जहाँ बर्फ और चट्टानें मिली हुई थीं, रुने बुरी तरह से टूट गया था।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "맹세를 지키려 했지만… 결국, 배는 버려졌어.",
						"english": "Tried to keep the vow... but in the end, the ship was abandoned.",
						"japanese": "「誓いを守ろうとしたが…結局、船は見捨てられた。」",
						"chinese": "“曾试图遵守誓言…但最终，船还是被抛弃了。”",
						"french": "« Il a essayé de tenir son serment… mais finalement, le navire a été abandonné. »",
						"spanish": "Intentó mantener la promesa... pero al final, el barco fue abandonado.",
						"vietnamese": "Đã cố gắng giữ lời thề... nhưng cuối cùng, con tàu vẫn bị bỏ rơi.",
						"thai": "พยายามรักษาคำสาบาน...แต่สุดท้าย เรือก็ถูกทอดทิ้ง",
						"hindi": "शपथ निभाने की कोशिश की... लेकिन अंत में, जहाज को छोड़ दिया गया।"
					},
					"emotion": "sad",
					"speaker": "eira"
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
					"speaker": "eira",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 마지막 룬은… 맹세만을 기록하고 있어. 부서진 잔해 위에서 홀로 빛나는군.",
						"english": "This last rune... records only the vow. It shines alone atop the shattered remains.",
						"japanese": "「この最後のルーンは…誓いだけを記録している。壊れた残骸の上で、独り輝いているな。」",
						"chinese": "“这最后一枚符文…只记录着誓言。在破碎的残骸上独自闪耀着。”",
						"french": "« Cette dernière rune… n'enregistre que le serment. Elle brille seule au-dessus des débris brisés. »",
						"spanish": "Esta última runa... solo registra el juramento. Brilla sola sobre los restos destrozados.",
						"vietnamese": "Rune cuối cùng này... chỉ ghi lại lời thề. Nó đơn độc tỏa sáng trên đống đổ nát vỡ nát.",
						"thai": "รูนสุดท้ายนี้...บันทึกไว้เพียงคำสาบาน มันส่องประกายอยู่ลำพังเหนือซากปรักหักพัง",
						"hindi": "यह आखिरी रुने... केवल शपथ को रिकॉर्ड करता है। यह टूटे हुए अवशेषों पर अकेला चमकता है।"
					},
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "맹세… 무엇을 맹세한 거지?",
						"english": "A vow... what was vowed?",
						"japanese": "「誓い…何を誓ったんだ？」",
						"chinese": "“誓言…誓约了什么？”",
						"french": "« Un serment… qu'est-ce qui a été juré ? »",
						"spanish": "Un juramento... ¿qué se juró?",
						"vietnamese": "Lời thề... đã thề điều gì?",
						"thai": "คำสาบาน...สาบานอะไรกันแน่?",
						"hindi": "एक शपथ... क्या शपथ ली थी?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "배가 죽어가는 순간까지 지키려 했던 것. 아무도 기억하지 못하는…",
						"english": "What the ship tried to protect until its dying breath. Something no one remembers...",
						"japanese": "船が朽ち果てる瞬間まで守ろうとしたもの。誰も覚えていない…",
						"chinese": "船只至死都在守护之物。无人忆起……",
						"french": "Ce que le navire a tenté de protéger jusqu'à son dernier souffle. Quelque chose dont personne ne se souvient...",
						"spanish": "Lo que el barco intentó proteger hasta su último aliento. Algo que nadie recuerda...",
						"vietnamese": "Điều con tàu cố bảo vệ đến hơi thở cuối cùng. Một điều không ai nhớ đến...",
						"thai": "สิ่งที่เรือลำนี้พยายามปกป้องจนลมหายใจสุดท้าย ไม่มีใครจดจำได้เลย...",
						"hindi": "वह चीज़ जिसे जहाज़ ने मरने तक बचाने की कोशिश की। जिसे कोई याद नहीं रखता..."
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "부서진 잔해 사이로, 유독 한 룬만이 푸른빛을 발하고 있었다.",
						"english": "Amidst the shattered wreckage, only one rune glowed with a blue light.",
						"japanese": "破壊された残骸の中、ただ一つのルーンだけが青い光を放っていた。",
						"chinese": "在破碎的残骸中，唯有一枚符文散发着蓝光。",
						"french": "Au milieu des débris brisés, une seule rune brillait d'une lumière bleue.",
						"spanish": "Entre los restos destrozados, solo una runa brillaba con una luz azul.",
						"vietnamese": "Giữa đống đổ nát tan tành, chỉ một mình viên rune phát ra ánh sáng xanh.",
						"thai": "ท่ามกลางซากปรักหักพัง มีเพียงรูนเดียวเท่านั้นที่เปล่งประกายสีน้ำเงิน",
						"hindi": "टूटे हुए मलबे के बीच, केवल एक ही रुन नीली रोशनी से चमक रहा था।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…그래서 이 배는 여기서 멈춘 건가.",
						"english": "...So this ship stopped here, then.",
						"japanese": "…だからこの船はここで止まったのか。",
						"chinese": "……所以这艘船就停在了这里吗。",
						"french": "...Alors ce navire s'est arrêté ici, n'est-ce pas ?",
						"spanish": "...Así que este barco se detuvo aquí, ¿no?",
						"vietnamese": "...Vậy ra con tàu này dừng lại ở đây à.",
						"thai": "...แสดงว่าเรือลำนี้หยุดอยู่ตรงนี้สินะ",
						"hindi": "...तो यह जहाज़ यहीं रुक गया।"
					},
					"emotion": "sad",
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 나타났다. 얼어붙은 배의 심장부에서 기어나온 듯했다.",
						"english": "A colossal shadow appeared. It seemed to crawl out from the frozen heart of the ship.",
						"japanese": "巨大な影が現れた。凍りついた船の心臓部から這い出てきたかのようだった。",
						"chinese": "一个巨大的影子出现了。它似乎从冰冻的船只核心爬了出来。",
						"french": "Une ombre colossale apparut. Elle semblait sortir du cœur gelé du navire.",
						"spanish": "Una sombra colosal apareció. Parecía haber salido del corazón congelado del barco.",
						"vietnamese": "Một cái bóng khổng lồ xuất hiện. Dường như nó bò ra từ trái tim đóng băng của con tàu.",
						"thai": "เงาขนาดมหึมาปรากฏขึ้น ดูเหมือนมันคลานออกมาจากใจกลางเรือที่ถูกแช่แข็ง",
						"hindi": "एक विशाल छाया प्रकट हुई। ऐसा लगा जैसे वह जमे हुए जहाज़ के दिल से बाहर निकली हो।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "감히, 이 침묵을 깨려 하는가?",
						"english": "You dare to break this silence?",
						"japanese": "貴様、この沈黙を破ろうとするのか？",
						"chinese": "竟敢打破这份寂静？",
						"french": "Oserez-vous briser ce silence ?",
						"spanish": "¿Te atreves a romper este silencio?",
						"vietnamese": "Ngươi dám phá vỡ sự tĩnh lặng này ư?",
						"thai": "เจ้ากล้าดียังไงถึงคิดจะทำลายความเงียบนี้?",
						"hindi": "क्या तुम इस शांति को तोड़ने की हिम्मत करते हो?"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "네가 이 배를 삼킨 건가?",
						"english": "Did you swallow this ship?",
						"japanese": "貴様がこの船を飲み込んだのか？",
						"chinese": "是你吞噬了这艘船吗？",
						"french": "As-tu englouti ce navire ?",
						"spanish": "¿Te tragaste este barco?",
						"vietnamese": "Ngươi đã nuốt chửng con tàu này ư?",
						"thai": "เจ้ากลืนกินเรือลำนี้งั้นรึ?",
						"hindi": "क्या तुमने इस जहाज़ को निगल लिया है?"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "삼킨 게 아니다. 나는… 잊힌 맹세를 지키는 자.",
						"english": "I did not swallow it. I am... the one who guards the forgotten oath.",
						"japanese": "飲み込んだのではない。私は…忘れられた誓いを守る者。",
						"chinese": "我没有吞噬。我是……守护被遗忘誓言之人。",
						"french": "Je ne l'ai pas avalé. Je suis... celui qui garde le serment oublié.",
						"spanish": "No lo tragué. Yo soy... el que guarda el juramento olvidado.",
						"vietnamese": "Ta không nuốt chửng. Ta là... kẻ canh giữ lời thề bị lãng quên.",
						"thai": "ข้าไม่ได้กลืนกิน ข้าคือ... ผู้พิทักษ์คำสาบานที่ถูกลืมเลือน",
						"hindi": "मैंने इसे निगला नहीं। मैं... भूली हुई शपथ का रक्षक हूँ।"
					}
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "잊힌 맹세… 그게 너의 힘의 근원인가.",
						"english": "The forgotten oath... Is that the source of your power?",
						"japanese": "忘れられた誓い…それが貴様の力の源なのか。",
						"chinese": "被遗忘的誓言……那是你力量的源泉吗？",
						"french": "Le serment oublié... Est-ce la source de ton pouvoir ?",
						"spanish": "El juramento olvidado... ¿Es esa la fuente de tu poder?",
						"vietnamese": "Lời thề bị lãng quên... Đó là nguồn sức mạnh của ngươi ư?",
						"thai": "คำสาบานที่ถูกลืมเลือน... นั่นคือแหล่งพลังของเจ้าสินะ",
						"hindi": "भूली हुई शपथ... क्या वही तुम्हारी शक्ति का स्रोत है?"
					},
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네가 감히 알 수 없는 것. 이 바다를 떠난 자들의 운명.",
						"english": "Something you dare not know. The fate of those who left this sea.",
						"japanese": "貴様には決して知ることのできないもの。この海を去った者たちの運命。",
						"chinese": "你绝不能知晓之物。那些离开这片海洋之人的命运。",
						"french": "Quelque chose que tu n'oses pas connaître. Le destin de ceux qui ont quitté cette mer.",
						"spanish": "Algo que no te atreves a saber. El destino de aquellos que dejaron este mar.",
						"vietnamese": "Điều ngươi không dám biết. Vận mệnh của những kẻ đã rời bỏ biển cả này.",
						"thai": "สิ่งที่เจ้าไม่กล้าแม้แต่จะรู้ ชะตากรรมของผู้ที่จากทะเลนี้ไป",
						"hindi": "कुछ ऐसा जो तुम जानने की हिम्मत नहीं करते। उन लोगों का भाग्य जिन्होंने इस समुद्र को छोड़ा।"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "운명 따윈, 내가 바꿀 거야.",
						"english": "Fate, I will change it.",
						"japanese": "運命など、私が変えてやる。",
						"chinese": "命运什么的，我都会改变。",
						"french": "Le destin, je le changerai.",
						"spanish": "El destino, yo lo cambiaré.",
						"vietnamese": "Vận mệnh ư, ta sẽ thay đổi nó.",
						"thai": "ชะตากรรมอะไรนั่น ข้าจะเปลี่ยนมันเอง",
						"hindi": "नियति, मैं उसे बदल दूँगा।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…어리석군.",
						"english": "...Foolish.",
						"japanese": "「…愚かだな。」",
						"chinese": "「…愚蠢。」",
						"french": "...Insensé.",
						"spanish": "...Qué necedad.",
						"vietnamese": "...Thật ngu xuẩn.",
						"thai": "...ช่างโง่เขลา.",
						"hindi": "...मूर्खतापूर्ण。"
					},
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "크윽… 맹세는… 계속될 것이다…",
						"english": "Ugh... The vow... will continue...",
						"japanese": "「くっ… 誓いは… 続く…」",
						"chinese": "「呃… 誓言… 将会继续…」",
						"french": "Urgh... Le serment... continuera...",
						"spanish": "Ugh... El juramento... continuará...",
						"vietnamese": "Khặc... Lời thề... sẽ tiếp tục...",
						"thai": "อึก... คำสาบาน... จะยังคงอยู่...",
						"hindi": "उफ़... प्रतिज्ञा... जारी रहेगी..."
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "{random_boss}의 형체가 얼음과 함께 부서졌다.",
						"english": "{random_boss}'s form shattered with the ice.",
						"japanese": "「{random_boss}の姿は氷と共に砕け散った。」",
						"chinese": "「{random_boss}的形体与冰一同破碎了。」",
						"french": "La forme de {random_boss} s'est brisée avec la glace.",
						"spanish": "La forma de {random_boss} se hizo añicos con el hielo.",
						"vietnamese": "Thân ảnh của {random_boss} vỡ tan cùng băng.",
						"thai": "ร่างของ {random_boss} แตกสลายไปพร้อมกับน้ำแข็ง",
						"hindi": "{random_boss} का शरीर बर्फ के साथ बिखर गया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "맹세가… 계속된다고?",
						"english": "The vow... continues?",
						"japanese": "「誓いが… 続く？」",
						"chinese": "「誓言… 会继续？」",
						"french": "Le serment... continue ?",
						"spanish": "¿El juramento... continúa?",
						"vietnamese": "Lời thề... tiếp tục sao?",
						"thai": "คำสาบาน... ยังคงอยู่เหรอ?",
						"hindi": "प्रतिज्ञा... जारी रहेगी?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "룬은 아직 다 읽히지 않았어. 이 뒤에, 더 큰 진실이 숨어있을 거야.",
						"english": "The runes haven't been fully read yet. Beyond this, a greater truth must be hidden.",
						"japanese": "「ルーンはまだ全て読めていない。この裏に、もっと大きな真実が隠されているはずだ。」",
						"chinese": "「符文尚未完全解读。在这背后，隐藏着更大的真相。」",
						"french": "Les runes n'ont pas encore été entièrement lues. Au-delà, une plus grande vérité doit se cacher.",
						"spanish": "Las runas aún no han sido leídas por completo. Detrás de esto, una verdad aún mayor debe estar oculta.",
						"vietnamese": "Các rune vẫn chưa được đọc hết. Phía sau này, một sự thật lớn hơn hẳn đang ẩn giấu.",
						"thai": "รูนยังอ่านไม่หมด เบื้องหลังนี้ต้องมีเรื่องจริงที่ยิ่งใหญ่กว่าซ่อนอยู่",
						"hindi": "रून्स अभी पूरी तरह से पढ़े नहीं गए हैं। इसके पीछे, एक बड़ी सच्चाई छिपी होगी।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그럼… 계속 가야지.",
						"english": "Then... we must continue.",
						"japanese": "「なら… 続けるしかない。」",
						"chinese": "「那么… 必须继续下去。」",
						"french": "Alors... nous devons continuer.",
						"spanish": "Entonces... debemos seguir.",
						"vietnamese": "Vậy thì... phải tiếp tục thôi.",
						"thai": "ถ้าอย่างนั้น... ก็ต้องไปต่อสิ",
						"hindi": "तो... हमें आगे बढ़ना होगा।"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "척후선 스쿌드의 비극은, 이제 시작이었다.",
						"english": "The tragedy of the scout ship Skjold, had just begun.",
						"japanese": "「偵察船スキュルドの悲劇は、今始まったばかりだった。」",
						"chinese": "「侦察舰斯库尔德的悲剧，才刚刚开始。」",
						"french": "La tragédie du vaisseau éclaireur Skjold, ne faisait que commencer.",
						"spanish": "La tragedia de la nave exploradora Skjold, acababa de comenzar.",
						"vietnamese": "Bi kịch của tàu trinh sát Skjold, giờ mới bắt đầu.",
						"thai": "โศกนาฏกรรมของเรือลาดตระเวน Skjold เพิ่งเริ่มต้นขึ้น",
						"hindi": "स्काउट जहाज स्कोल्ड की त्रासदी, अभी शुरू हुई थी।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "얼음으로 된 주먹이 모든 것을 얼렸다.",
						"english": "An icy fist froze everything.",
						"japanese": "「氷の拳が全てを凍らせた。」",
						"chinese": "「冰霜之拳冻结了一切。」",
						"french": "Un poing de glace a tout gelé.",
						"spanish": "Un puño de hielo lo congeló todo.",
						"vietnamese": "Nắm đấm băng đã đóng băng mọi thứ.",
						"thai": "กำปั้นน้ำแข็งเยือกแข็งทุกสิ่ง",
						"hindi": "एक बर्फीली मुट्ठी ने सब कुछ जमा दिया।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어둠을 거스를 수 없다. 이 배처럼, 너희도 좌초될 것이다.",
						"english": "You cannot defy the darkness. Like this ship, you too shall be stranded.",
						"japanese": "「闇には逆らえない。この船のように、お前たちも座礁するだろう。」",
						"chinese": "「无法违抗黑暗。如同这艘船，你们也将搁浅。」",
						"french": "Vous ne pouvez pas défier les ténèbres. Comme ce navire, vous aussi serez échoués.",
						"spanish": "No podéis desafiar la oscuridad. Como este barco, vosotros también encallaréis.",
						"vietnamese": "Ngươi không thể chống lại bóng tối. Giống như con tàu này, các ngươi cũng sẽ bị mắc cạn.",
						"thai": "ไม่อาจต้านทานความมืดได้ เหมือนเรือลำนี้ พวกเจ้าก็จะถูกทอดทิ้งเช่นกัน",
						"hindi": "तुम अंधकार का विरोध नहीं कर सकते। इस जहाज की तरह, तुम भी फंसे रहोगे।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니… 우린 멈추지 않아.",
						"english": "No... We won't stop.",
						"japanese": "「いや… 我々は止まらない。」",
						"chinese": "「不… 我们不会停下。」",
						"french": "Non... Nous ne nous arrêterons pas.",
						"spanish": "No... No nos detendremos.",
						"vietnamese": "Không... Chúng ta sẽ không dừng lại.",
						"thai": "ไม่... เราจะไม่หยุด",
						"hindi": "नहीं... हम रुकेंगे नहीं।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"id": 15
		}
	]
} as const;
