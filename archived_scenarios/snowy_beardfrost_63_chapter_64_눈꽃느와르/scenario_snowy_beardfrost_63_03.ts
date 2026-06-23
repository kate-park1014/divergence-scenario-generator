export const scenario_snowy_beardfrost_63_03 = {
	"scenario_id": "snowy_beardfrost_63_03",
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
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "오랜 시간 동안 잊혀진 폐허. 희미한 룬 문자가 벽을 뒤덮고 있었다.",
						"english": "Ruins long forgotten. Faint runic script covered the walls.",
						"japanese": "長きにわたり忘れ去られた廃墟。壁には微かなルーン文字が覆っていた。",
						"chinese": "被遗忘已久的废墟。模糊的符文覆盖着墙壁。",
						"french": "Ruines oubliées depuis longtemps. De faibles runes couvraient les murs.",
						"spanish": "Ruinas olvidadas hace mucho tiempo. Tenues runas cubrían las paredes.",
						"vietnamese": "Di tích bị lãng quên từ lâu. Những ký tự rune mờ nhạt phủ kín các bức tường.",
						"thai": "ซากปรักหักพังที่ถูกลืมเลือนมานาน ตัวอักษรรูนจางๆ ปกคลุมผนัง",
						"hindi": "लंबे समय से भूले हुए खंडहर। दीवारों को धुंधले रूणिक अक्षरों ने ढक रखा था।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "여긴 또 뭐야? 으스스하네.",
						"english": "What is this place? It's creepy.",
						"japanese": "ここは何だ？不気味だな。",
						"chinese": "这是什么地方？真让人毛骨悚然。",
						"french": "C'est quoi cet endroit ? C'est glauque.",
						"spanish": "¿Qué es este lugar? Es espeluznante.",
						"vietnamese": "Đây là đâu nữa vậy? Rợn người thật.",
						"thai": "ที่นี่มันอะไรอีกเนี่ย? น่าขนลุกชะมัด",
						"hindi": "यह जगह क्या है? यह डरावनी है।"
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "ivar",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이곳이 '버려진 자들의 안식처'다. 전설에 따르면…",
						"english": "This is 'The Sanctuary of the Forsaken'. According to legend…",
						"japanese": "ここが『捨てられし者たちの安息所』だ。伝説によると…",
						"chinese": "这里是“被遗弃者的庇护所”。根据传说…",
						"french": "C'est le 'Sanctuaire des Abandonnés'. Selon la légende…",
						"spanish": "Este es 'El Santuario de los Abandonados'. Según la leyenda…",
						"vietnamese": "Đây là 'Nơi An Nghỉ của Kẻ Bị Bỏ Rơi'. Theo truyền thuyết…",
						"thai": "นี่คือ 'สถานที่ศักดิ์สิทธิ์ของผู้ถูกทอดทิ้ง' ตามตำนานกล่าวว่า…",
						"hindi": "यह 'त्यागे हुए लोगों का अभयारण्य' है। किंवदंती के अनुसार…"
					},
					"speaker": "ivar"
				},
				{
					"emotion": "base",
					"speaker": "ivar",
					"content": {
						"korean": "이곳의 모든 것은… '환대'를 갈망하는 자들의 흔적이지.",
						"english": "Everything here is… a trace of those who yearn for 'hospitality'.",
						"japanese": "ここの全ては…『歓待』を渇望する者たちの痕跡だ。",
						"chinese": "这里的一切都是……渴望‘款待’之人的痕迹。",
						"french": "Tout ici est… une trace de ceux qui aspirent à 'l'hospitalité'.",
						"spanish": "Todo aquí es… un rastro de aquellos que anhelan 'hospitalidad'.",
						"vietnamese": "Mọi thứ ở đây đều là… dấu vết của những kẻ khao khát 'sự hiếu khách'.",
						"thai": "ทุกสิ่งทุกอย่างที่นี่คือ... ร่องรอยของผู้ที่โหยหา 'การต้อนรับ'",
						"hindi": "यहां सब कुछ... उन लोगों का निशान है जो 'आतिथ्य' की लालसा रखते हैं।"
					},
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "ivar",
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "오래된 기록에는 이곳의 미신이 적혀있었다. 버려진 것들이 형태를 얻어 새로운 존재가 된다고.",
						"english": "Ancient records spoke of this place's superstition. That the forsaken gain form and become new beings.",
						"japanese": "古い記録には、この地の迷信が記されていた。捨てられた者たちが形を得て、新たな存在となると。",
						"chinese": "古老的记录中记载了这里的迷信。被遗弃者获得形态，成为新的存在。",
						"french": "D'anciens registres mentionnaient une superstition locale. Les abandonnés prendraient forme pour devenir de nouvelles entités.",
						"spanish": "Antiguos registros hablaban de la superstición de este lugar. Que los abandonados toman forma y se convierten en nuevos seres.",
						"vietnamese": "Những ghi chép cổ xưa nói về sự mê tín của nơi này. Rằng những kẻ bị bỏ rơi sẽ có được hình hài và trở thành những sinh vật mới.",
						"thai": "บันทึกโบราณกล่าวถึงความเชื่อเรื่องไสยศาสตร์ของสถานที่แห่งนี้ ว่าผู้ถูกทอดทิ้งจะได้รับรูปกายและกลายเป็นสิ่งมีชีวิตใหม่",
						"hindi": "प्राचीन अभिलेखों में इस स्थान के अंधविश्वास का वर्णन था। कि त्यागे हुए लोग रूप धारण करते हैं और नए प्राणी बन जाते हैं।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "버려진 것들이… 우리를 환대한다고?",
						"english": "Abandoned things... welcome us?",
						"japanese": "捨てられたものが… 私たちを歓迎するって？",
						"chinese": "被遗弃之物……会欢迎我们？",
						"french": "Les choses abandonnées… nous souhaitent la bienvenue ?",
						"spanish": "¿Las cosas abandonadas… nos dan la bienvenida?",
						"vietnamese": "Những thứ bị bỏ rơi… chào đón chúng ta ư?",
						"thai": "สิ่งที่ถูกทอดทิ้ง... ต้อนรับเราเหรอ?",
						"hindi": "क्या परित्यक्त चीजें... हमारा स्वागत करती हैं?"
					}
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "환대… 혹은 영원한 집착.",
						"english": "Welcome... or eternal obsession.",
						"japanese": "歓迎… あるいは永遠の執着。",
						"chinese": "欢迎……亦或是永恒的执着。",
						"french": "Bienvenue… ou éternelle obsession.",
						"spanish": "Bienvenida… o eterna obsesión.",
						"vietnamese": "Chào đón… hay nỗi ám ảnh vĩnh cửu.",
						"thai": "การต้อนรับ... หรือความหลงใหลชั่วนิรันดร์",
						"hindi": "स्वागत... या शाश्वत जुनून।"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "어쩐지… 밤새 머리카락을 빗질하는 기분 나쁜 꿈을 꿨어. 섬뜩하게 정돈되는 느낌이었어.",
						"english": "Somehow... I had a disturbing dream of my hair being combed all night. It felt eerily tidied.",
						"japanese": "なぜか… 昨晩、髪を梳かされ続ける不気味な夢を見た。ぞっとするほど整頓される感じだった。",
						"chinese": "不知为何……昨晚做了个梳头梳了一夜的噩梦。感觉被恐怖地整理了。",
						"french": "D'une certaine manière… j'ai fait un rêve inquiétant où mes cheveux étaient peignés toute la nuit. C'était étrangement ordonné.",
						"spanish": "De alguna manera… tuve un sueño inquietante donde me peinaban el cabello toda la noche. Se sentía inquietantemente ordenado.",
						"vietnamese": "Không hiểu sao… đêm qua tôi mơ thấy mình bị chải tóc suốt đêm. Cảm giác như được sắp xếp một cách rợn người.",
						"thai": "ไม่รู้ทำไม... เมื่อคืนฉันฝันร้ายว่าผมถูกหวีตลอดทั้งคืน มันรู้สึกเหมือนถูกจัดระเบียบอย่างน่าขนลุก",
						"hindi": "किसी तरह... मुझे रात भर अपने बाल कंघी करने का एक परेशान करने वाला सपना आया। यह अजीब तरह से व्यवस्थित महसूस हुआ।"
					}
				},
				{
					"emotion": "base",
					"speaker": "ivar",
					"content": {
						"korean": "그것이… 이 땅의 규칙이다. 모든 것을 탐하는 순환.",
						"english": "That is... the rule of this land. A cycle of devouring all.",
						"japanese": "それが… この地の掟だ。すべてを貪る循環。",
						"chinese": "那是……这片土地的规则。吞噬一切的循环。",
						"french": "C'est… la règle de cette terre. Un cycle dévorant tout.",
						"spanish": "Esa es… la regla de esta tierra. Un ciclo que devora todo.",
						"vietnamese": "Đó là… quy tắc của vùng đất này. Một vòng tuần hoàn nuốt chửng mọi thứ.",
						"thai": "นั่นคือ... กฎของดินแดนนี้ วงจรแห่งการกลืนกินทุกสิ่ง",
						"hindi": "वह... इस भूमि का नियम है। सब कुछ निगलने का एक चक्र।"
					},
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ivar",
					"spot": [
						4,
						2
					],
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "나는 강함을 좇아 이곳에 왔다. '강함의 끝'을 보고 싶었지.",
						"english": "I came here chasing strength. I wanted to see 'the end of strength'.",
						"japanese": "私は強さを求めてここに来た。「強さの果て」を見たかったのだ。",
						"chinese": "我追逐力量来到这里。想看看“力量的尽头”。",
						"french": "Je suis venu ici à la poursuite de la force. Je voulais voir 'la fin de la force'.",
						"spanish": "Vine aquí persiguiendo la fuerza. Quería ver 'el fin de la fuerza'.",
						"vietnamese": "Tôi đến đây theo đuổi sức mạnh. Tôi muốn thấy 'cái kết của sức mạnh'.",
						"thai": "ฉันมาที่นี่เพื่อตามหาความแข็งแกร่ง ฉันอยากเห็น 'จุดสิ้นสุดของความแข็งแกร่ง'",
						"hindi": "मैं शक्ति का पीछा करते हुए यहाँ आया। मैं 'शक्ति का अंत' देखना चाहता था।"
					},
					"speaker": "ivar"
				},
				{
					"emotion": "base",
					"speaker": "ivar",
					"content": {
						"korean": "하지만… 여기선 모두가 무언가를 잃고, 또 무언가를 얻는다.",
						"english": "But... here, everyone loses something, and gains something.",
						"japanese": "しかし… ここでは皆が何かを失い、また何かを得る。",
						"chinese": "但是……在这里，每个人都会失去一些，也会得到一些。",
						"french": "Mais… ici, tout le monde perd quelque chose et gagne quelque chose.",
						"spanish": "Pero… aquí, todos pierden algo y ganan algo.",
						"vietnamese": "Nhưng… ở đây, mọi người đều mất đi thứ gì đó, và cũng có được thứ gì đó.",
						"thai": "แต่... ที่นี่ทุกคนสูญเสียบางสิ่ง และได้บางสิ่งมา",
						"hindi": "लेकिन... यहाँ, हर कोई कुछ खोता है, और कुछ पाता है।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "잃고… 얻어? 뭘?",
						"english": "Lose... and gain? What?",
						"japanese": "失って…得る？何を？",
						"chinese": "失去……又得到？什么？",
						"french": "Perdre… et gagner ? Quoi ?",
						"spanish": "¿Perder… y ganar? ¿Qué?",
						"vietnamese": "Mất đi… và có được? Cái gì?",
						"thai": "สูญเสีย... และได้มา? อะไร?",
						"hindi": "खोना... और पाना? क्या?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "녹슨 폐허 속에서 발견된 날카로운 가위와 빗. 마치 어제 사용된 듯 깨끗하게 빛났다.",
						"english": "Sharp scissors and a comb found in rusty ruins. They shone clean, as if used just yesterday.",
						"japanese": "錆びた廃墟の中で見つかった鋭いハサミと櫛。まるで昨日使われたかのように綺麗に光っていた。",
						"chinese": "在生锈的废墟中发现的锋利剪刀和梳子。它们干净地闪耀着，仿佛昨天才用过一样。",
						"french": "Des ciseaux aiguisés et un peigne trouvés dans des ruines rouillées. Ils brillaient de propreté, comme s'ils avaient été utilisés hier.",
						"spanish": "Unas tijeras afiladas y un peine encontrados en ruinas oxidadas. Brillaban limpios, como si hubieran sido usados ayer mismo.",
						"vietnamese": "Kéo sắc và lược được tìm thấy trong đống đổ nát rỉ sét. Chúng sáng bóng như thể vừa được sử dụng ngày hôm qua.",
						"thai": "กรรไกรคมและหวีที่พบในซากปรักหักพังที่เป็นสนิม พวกมันส่องประกายสะอาดราวกับเพิ่งถูกใช้งานเมื่อวาน",
						"hindi": "जंग लगे खंडहरों में मिली तेज कैंची और कंघी। वे ऐसे साफ चमक रहे थे, मानो कल ही इस्तेमाल हुए हों।"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "누군가… 강제로 '정돈'당하고 있다는 흔적이다.",
						"english": "It's a trace that someone... is being forcibly 'tidied'.",
						"japanese": "誰かが… 強制的に「整頓」されている痕跡だ。",
						"chinese": "这是有人……被强制“整理”的痕迹。",
						"french": "C'est une trace que quelqu'un… est 'rangé' de force.",
						"spanish": "Es una señal de que alguien… está siendo 'ordenado' a la fuerza.",
						"vietnamese": "Đó là dấu vết cho thấy ai đó… đang bị 'sắp xếp' một cách cưỡng bức.",
						"thai": "นี่คือร่องรอยว่ามีใครบางคน... กำลังถูก 'จัดระเบียบ' อย่างบังคับ",
						"hindi": "यह एक निशान है कि कोई... जबरदस्ती 'व्यवस्थित' किया जा रहा है।"
					},
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 끝없는 갈망 앞에서… 과연 강함이 무슨 의미가 있나?",
						"english": "Before this endless craving... what meaning does strength truly hold?",
						"japanese": "この終わりのない渇望の前で… 果たして強さに何の意味があるのか？",
						"chinese": "在这无尽的渴望面前……力量到底有什么意义？",
						"french": "Devant ce désir sans fin… quelle signification la force a-t-elle vraiment ?",
						"spanish": "Ante este deseo interminable… ¿qué significado tiene realmente la fuerza?",
						"vietnamese": "Trước khao khát bất tận này… rốt cuộc sức mạnh có ý nghĩa gì?",
						"thai": "ต่อหน้าความปรารถนาอันไม่สิ้นสุดนี้... ความแข็งแกร่งมีความหมายอะไร?",
						"hindi": "इस अंतहीन लालसा के सामने... आखिर शक्ति का क्या अर्थ है?"
					},
					"speaker": "ivar",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "ivar",
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"action": "enter"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이곳은 벗어날 수 없는 운명에 갇힌 땅이다.",
						"english": "This is a land trapped by inescapable fate.",
						"japanese": "ここは逃れられぬ運命に囚われた地だ。",
						"chinese": "这里是被无法逃脱的命运所困之地。",
						"french": "C'est une terre piégée par un destin inéluctable.",
						"spanish": "Esta es una tierra atrapada por un destino ineludible.",
						"vietnamese": "Đây là vùng đất bị mắc kẹt trong số phận không thể thoát.",
						"thai": "ที่นี่คือดินแดนที่ถูกจองจำด้วยโชคชะตาที่มิอาจหลีกหนี",
						"hindi": "यह वह भूमि है जो अटल भाग्य में फँसी हुई है।"
					},
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"content": {
						"korean": "절망적인 말은 그만해.",
						"english": "Enough with the despairing words.",
						"japanese": "絶望的な言葉はやめろ。",
						"chinese": "别再说那些绝望的话了。",
						"french": "Assez de ces mots désespérés.",
						"spanish": "Basta de palabras desesperanzadoras.",
						"vietnamese": "Đừng nói những lời tuyệt vọng nữa.",
						"thai": "พอได้แล้วกับถ้อยคำที่สิ้นหวัง",
						"hindi": "निराशा भरी बातें बंद करो।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "옛 바이킹 전설에 '버려진 자의 비애'라는 이야기가 있지. 고귀한 것에서 떨어져 나간 하찮은 것이, 거대한 원한을 품고 모든 것을 집어삼키는 괴물이 된다는….",
						"english": "There's an old Viking legend called 'The Sorrow of the Forsaken.' It tells of a lowly thing, cast out from something noble, harboring immense resentment, becoming a monster that devours all...",
						"japanese": "古きヴァイキングの伝説に『見捨てられし者の悲哀』という話がある。高貴なるものから切り離された取るに足らぬものが、巨大な怨恨を抱き、全てを飲み込む怪物となるという…",
						"chinese": "古老的维京传说中，有一个故事叫做《被遗弃者的悲哀》。讲述的是卑微之物，从高贵中剥离，怀揣着巨大的怨恨，最终成为吞噬一切的怪物……",
						"french": "Il existe une ancienne légende viking appelée 'Le Chagrin des Oubliés'. Elle raconte comment une chose insignifiante, rejetée d'une noble origine, nourrit un ressentiment immense et devient un monstre qui dévore tout...",
						"spanish": "Hay una antigua leyenda vikinga llamada 'La Tristeza de los Abandonados'. Cuenta cómo algo insignificante, desprendido de algo noble, alberga un inmenso rencor y se convierte en un monstruo que lo devora todo...",
						"vietnamese": "Có một truyền thuyết Viking cổ xưa mang tên 'Nỗi Buồn Của Kẻ Bị Bỏ Rơi'. Kể về một thứ tầm thường, bị tách rời khỏi một điều cao quý, ôm ấp mối hận thù to lớn, trở thành một quái vật nuốt chửng tất cả...",
						"thai": "มีตำนานไวกิ้งเก่าแก่เรื่องหนึ่งชื่อ 'ความเศร้าของผู้ถูกทอดทิ้ง' เล่าถึงสิ่งต่ำต้อยที่ถูกแยกออกจากสิ่งสูงส่ง เก็บงำความแค้นอันใหญ่หลวง จนกลายเป็นอสูรกายที่กลืนกินทุกสิ่ง...",
						"hindi": "पुरानी वाइकिंग कथाओं में 'त्यागे हुए का दुःख' नामक एक कहानी है। यह बताती है कि कैसे एक तुच्छ वस्तु, जो किसी महान चीज़ से अलग हो गई, असीम प्रतिशोध पालकर सब कुछ निगलने वाला एक राक्षस बन जाती है..."
					},
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "나는 싸워왔다. 끝없이. 하지만… 결국 모든 것은 순환될 뿐이었다.",
						"english": "I have fought. Endlessly. But... in the end, everything merely cycled.",
						"japanese": "私は戦ってきた。終わりなく。だが…結局、全ては循環するだけだった。",
						"chinese": "我曾战斗过。无休止地。但是……最终，一切都只是循环而已。",
						"french": "J'ai combattu. Sans fin. Mais... au final, tout ne faisait que se répéter.",
						"spanish": "He luchado. Sin cesar. Pero... al final, todo solo era un ciclo.",
						"vietnamese": "Ta đã chiến đấu. Không ngừng nghỉ. Nhưng... cuối cùng, mọi thứ chỉ là một vòng tuần hoàn.",
						"thai": "ข้าได้ต่อสู้มาแล้ว ไม่รู้จบ แต่... ในที่สุด ทุกสิ่งก็เป็นเพียงวัฏจักร",
						"hindi": "मैं लड़ता रहा हूँ। अंतहीन रूप से। लेकिन... अंत में, सब कुछ बस एक चक्र ही था।"
					},
					"speaker": "ivar",
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "너희도… 결국 같은 운명에 처할 것이다.",
						"english": "You too... will ultimately face the same fate.",
						"japanese": "お前たちも…結局は同じ運命に陥るだろう。",
						"chinese": "你们也……最终会面临同样的命运。",
						"french": "Vous aussi... finirez par connaître le même destin.",
						"spanish": "Vosotros también... al final, os enfrentaréis al mismo destino.",
						"vietnamese": "Các ngươi cũng... cuối cùng sẽ gặp cùng một số phận.",
						"thai": "พวกเจ้าด้วย... ในที่สุดก็จะเผชิญชะตากรรมเดียวกัน",
						"hindi": "तुम भी... अंततः उसी भाग्य का सामना करोगे।"
					},
					"speaker": "ivar"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아니. 우린 달라. 진실을 파헤칠 거야!",
						"english": "No. We're different. We'll unearth the truth!",
						"japanese": "いや。私たちは違う。真実を暴く！",
						"chinese": "不。我们不一样。我们会揭露真相的！",
						"french": "Non. Nous sommes différents. Nous découvrirons la vérité !",
						"spanish": "No. Somos diferentes. ¡Desenterraremos la verdad!",
						"vietnamese": "Không. Chúng ta khác. Chúng ta sẽ đào bới sự thật!",
						"thai": "ไม่ เราต่างกัน เราจะเปิดเผยความจริง!",
						"hindi": "नहीं। हम अलग हैं। हम सच्चाई का पता लगाएंगे!"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "탐험대는 거대한 형체 앞에 섰다. 형언할 수 없는 존재감이 그들을 짓눌렀다.",
						"english": "The expedition stood before a colossal figure. An ineffable presence pressed down on them.",
						"japanese": "探検隊は巨大な形体の前に立った。形容しがたい存在感が彼らを押し潰した。",
						"chinese": "探险队停在一个巨大的形体前。一种难以言喻的存在感压迫着他们。",
						"french": "L'expédition se tenait devant une forme colossale. Une présence ineffable les oppressait.",
						"spanish": "La expedición se detuvo ante una forma colosal. Una presencia inefable los oprimió.",
						"vietnamese": "Đoàn thám hiểm đứng trước một hình thể khổng lồ. Một sự hiện diện không thể diễn tả đã đè nặng lên họ.",
						"thai": "คณะสำรวจยืนอยู่หน้ากายมหึมา การปรากฏตัวที่ไม่อาจบรรยายได้กดทับพวกเขา",
						"hindi": "अभियान दल एक विशाल आकृति के सामने खड़ा था। एक अवर्णनीय उपस्थिति ने उन्हें दबा दिया।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "왔군. 새로운 손님들. 어서 와, 나의 세계로.",
						"english": "You've arrived. New guests. Welcome to my world.",
						"japanese": "来たな。新たな客たちよ。ようこそ、我が世界へ。",
						"chinese": "你们来了。新客人。欢迎来到我的世界。",
						"french": "Vous êtes arrivés. Nouveaux invités. Bienvenue dans mon monde.",
						"spanish": "Habéis llegado. Nuevos invitados. Bienvenidos a mi mundo.",
						"vietnamese": "Các ngươi đã đến. Những vị khách mới. Chào mừng đến với thế giới của ta.",
						"thai": "มาแล้วสินะ แขกหน้าใหม่ ยินดีต้อนรับสู่โลกของข้า",
						"hindi": "तुम आ गए। नए मेहमानों। मेरी दुनिया में तुम्हारा स्वागत है।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "네가… 버려진 것들의 욕망을 지배하는 자인가?",
						"english": "Are you... the one who controls the desires of the forsaken?",
						"japanese": "お前が…見捨てられし者たちの欲望を支配する者か？",
						"chinese": "你就是……支配被遗弃者欲望的人吗？",
						"french": "Es-tu... celui qui contrôle les désirs des abandonnés ?",
						"spanish": "¿Eres tú... quien controla los deseos de los abandonados?",
						"vietnamese": "Ngươi... là kẻ thống trị những dục vọng của kẻ bị bỏ rơi sao?",
						"thai": "เจ้าคือ... ผู้ควบคุมความปรารถนาของผู้ถูกทอดทิ้งงั้นหรือ?",
						"hindi": "क्या तुम... त्यागे हुए लोगों की इच्छाओं को नियंत्रित करने वाले हो?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "지배? 아니. 나는 그저… 너희를 환대할 뿐. 영원히.",
						"english": "Control? No. I merely... welcome you. Forever.",
						"japanese": "支配？いや。私はただ…お前たちを歓待するだけ。永遠に。",
						"chinese": "支配？不。我只是……欢迎你们。永远地。",
						"french": "Contrôler ? Non. Je ne fais que... vous accueillir. Pour toujours.",
						"spanish": "¿Controlar? No. Yo solo... os doy la bienvenida. Para siempre.",
						"vietnamese": "Thống trị? Không. Ta chỉ... chào đón các ngươi. Mãi mãi.",
						"thai": "ควบคุมงั้นหรือ? ไม่ ข้าเพียงแค่... ต้อนรับพวกเจ้า ตลอดไป",
						"hindi": "नियंत्रण? नहीं। मैं तो बस... तुम्हारा स्वागत करता हूँ। हमेशा के लिए।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "ivar",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "무의미하다. 이 싸움은 끝없이 반복될 뿐.",
						"english": "Meaningless. This battle will only repeat endlessly.",
						"japanese": "無意味だ。この戦いはただ際限なく繰り返されるだけだ。",
						"chinese": "毫无意义。这场战斗只会无休止地重复。",
						"french": "Insensé. Ce combat ne fera que se répéter sans fin.",
						"spanish": "Sin sentido. Esta batalla solo se repetirá sin cesar.",
						"vietnamese": "Vô nghĩa. Cuộc chiến này sẽ chỉ lặp đi lặp lại không ngừng.",
						"thai": "ไร้ความหมาย การต่อสู้นี้จะวนซ้ำไม่สิ้นสุด",
						"hindi": "व्यर्थ है। यह लड़ाई अंतहीन रूप से दोहराई जाएगी।"
					},
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "ivar",
					"content": {
						"korean": "이곳의 모든 것은… 결국 '그'에게 흡수된다.",
						"english": "Everything here... will eventually be absorbed by 'him'.",
						"japanese": "ここの全ては…結局「彼」に吸収される。",
						"chinese": "这里的一切…最终都会被“他”吸收。",
						"french": "Tout ici... sera finalement absorbé par 'lui'.",
						"spanish": "Todo aquí... eventualmente será absorbido por 'él'.",
						"vietnamese": "Mọi thứ ở đây... cuối cùng sẽ bị 'hắn' hấp thụ.",
						"thai": "ทุกสิ่ง ณ ที่นี้... ในที่สุดก็จะถูก 'เขา' กลืนกิน",
						"hindi": "यहां सब कुछ... अंततः 'उसके' द्वारा समाहित हो जाएगा।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "닥쳐, 이바르! 우린 끝낼 거야!",
						"english": "Shut up, Ivar! We're going to end this!",
						"japanese": "黙れ、イヴァル！ 私たちが終わらせる！",
						"chinese": "住口，伊瓦尔！我们会结束这一切的！",
						"french": "Tais-toi, Ivar ! Nous allons y mettre fin !",
						"spanish": "¡Cállate, Ivar! ¡Vamos a terminar con esto!",
						"vietnamese": "Im đi, Ivar! Chúng ta sẽ kết thúc nó!",
						"thai": "หุบปาก, อีวาร์! เราจะยุติมัน!",
						"hindi": "चुप रहो, इवार! हम इसे खत्म करेंगे!"
					},
					"type": "speech"
				},
				{
					"speaker": "ivar",
					"duration_ms": 400,
					"type": "direction",
					"action": "exit",
					"direction": "down"
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "재미있군. 그 허무함까지도 내 것이다.",
						"english": "Amusing. Even that emptiness is mine.",
						"japanese": "面白い。その虚無感さえも私のものだ。",
						"chinese": "有趣。那份虚无也属于我。",
						"french": "Amusant. Même ce vide est mien.",
						"spanish": "Divertido. Incluso ese vacío es mío.",
						"vietnamese": "Thú vị thật. Ngay cả sự hư vô đó cũng là của ta.",
						"thai": "น่าขันนัก แม้แต่ความว่างเปล่านั้นก็เป็นของข้า",
						"hindi": "मजेदार है। वह शून्यता भी मेरी है।"
					},
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "끝없는 눈보라가 모든 것을 집어삼켰다. 다시 한번, 모든 것이 원점으로 돌아갔다.",
						"english": "The endless blizzard swallowed everything. Once again, everything returned to square one.",
						"japanese": "終わりのない吹雪が全てを飲み込んだ。再び、全てが振り出しに戻った。",
						"chinese": "无尽的暴风雪吞噬了一切。再一次，一切都回到了原点。",
						"french": "La tempête de neige sans fin engloutit tout. Encore une fois, tout revint à la case départ.",
						"spanish": "La ventisca interminable lo devoró todo. Una vez más, todo volvió al punto de partida.",
						"vietnamese": "Cơn bão tuyết bất tận nuốt chửng mọi thứ. Một lần nữa, mọi thứ trở về điểm xuất phát.",
						"thai": "พายุหิมะที่ไม่มีที่สิ้นสุดกลืนกินทุกสิ่ง. อีกครั้งที่ทุกอย่างกลับไปจุดเริ่มต้น.",
						"hindi": "अंतहीन बर्फीले तूफान ने सब कुछ निगल लिया। एक बार फिर, सब कुछ शुरुआती बिंदु पर लौट आया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "크크… 또다시… 너희의 절망까지도 나의 환대다.",
						"english": "Heh heh... Again... Even your despair is my welcome.",
						"japanese": "クク…またしても…お前たちの絶望すらも私の歓待だ。",
						"chinese": "呵呵…又一次…甚至连你们的绝望也是我的款待。",
						"french": "Heh heh... Encore... Même votre désespoir est mon accueil.",
						"spanish": "Je je... De nuevo... Incluso vuestra desesperación es mi bienvenida.",
						"vietnamese": "Khà khà... Lại nữa rồi... Ngay cả sự tuyệt vọng của các ngươi cũng là sự hoan nghênh của ta.",
						"thai": "ฮึ่มฮึ่ม... อีกแล้ว... แม้แต่ความสิ้นหวังของพวกเจ้าก็คือการต้อนรับของข้า.",
						"hindi": "हा हा... फिर से... तुम्हारी निराशा भी मेरा स्वागत है।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…아직 포기하지 않아! 우리는 진실을 찾아낼 거야!",
						"english": "...I'm not giving up yet! We'll find the truth!",
						"japanese": "...まだ諦めてない！私たちは真実を見つけるんだ！",
						"chinese": "...我还没放弃！我们会找到真相的！",
						"french": "...Je n'abandonne pas encore ! Nous trouverons la vérité !",
						"spanish": "...¡Aún no me rindo! ¡Encontraremos la verdad!",
						"vietnamese": "...Tôi chưa bỏ cuộc! Chúng ta sẽ tìm ra sự thật!",
						"thai": "...ฉันยังไม่ยอมแพ้! เราจะค้นพบความจริง!",
						"hindi": "...मैंने अभी तक हार नहीं मानी! हम सच का पता लगाएंगे!"
					}
				},
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "ivar",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "헛된 희망이다. 이곳에선… 아무것도 변하지 않아.",
						"english": "It's a futile hope. Here... nothing ever changes.",
						"japanese": "無駄な希望だ。ここでは…何も変わらない。",
						"chinese": "这是徒劳的希望。在这里…什么都不会改变。",
						"french": "C'est un espoir futile. Ici... rien ne change.",
						"spanish": "Es una esperanza vana. Aquí... nada cambia.",
						"vietnamese": "Đó là hy vọng hão huyền. Ở đây... chẳng có gì thay đổi cả.",
						"thai": "มันคือความหวังที่ไร้ประโยชน์ ที่นี่...ไม่มีอะไรเปลี่ยนแปลงเลย",
						"hindi": "यह व्यर्थ की आशा है। यहाँ... कुछ भी नहीं बदलता।"
					},
					"speaker": "ivar",
					"emotion": "sad"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "크크… 어리석은… 아직 끝나지 않았다. 이 고리는… 영원히… 풀리지 않아…",
						"english": "Heh heh... Foolish... It's not over yet. This cycle... will never... be broken...",
						"japanese": "クク…愚かな…まだ終わっていない。この環は…永遠に…解けない…",
						"chinese": "呵呵…愚蠢的…还没结束。这个循环…永远…不会被打破…",
						"french": "Heh heh... Imbéciles... Ce n'est pas encore fini. Cette boucle... ne sera jamais... brisée...",
						"spanish": "Je je... Estúpidos... Aún no ha terminado. Este ciclo... nunca... se romperá...",
						"vietnamese": "Khà khà... Ngốc nghếch... Vẫn chưa kết thúc đâu. Vòng lặp này... sẽ không bao giờ... bị phá vỡ...",
						"thai": "ฮึ่มฮึ่ม... โง่เขลา... ยังไม่จบง่ายๆ วงจรนี้... จะไม่มีวัน... แตกหัก...",
						"hindi": "हा हा... मूर्खों... अभी खत्म नहीं हुआ है। यह चक्र... कभी... टूटेगा नहीं..."
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "…사라졌다. 하지만… 아직 끝난 것 같지 않아.",
						"english": "...Gone. But... it doesn't feel over yet.",
						"japanese": "…消えた。しかし…まだ終わっていないようだ。",
						"chinese": "……消失了。但是……似乎还没有结束。",
						"french": "...Disparu. Mais... on dirait que ce n'est pas encore fini.",
						"spanish": "...Desaparecido. Pero... aún no parece haber terminado.",
						"vietnamese": "...Biến mất rồi. Nhưng... dường như vẫn chưa kết thúc.",
						"thai": "...หายไปแล้ว. แต่... ดูเหมือนยังไม่จบ.",
						"hindi": "...गायब हो गया। लेकिन... अभी खत्म नहीं हुआ लगता।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "쓰러진 괴물. 그러나 숲은 여전히 침묵했고, 싸늘한 허무함만이 감돌았다.",
						"english": "The monster fell. But the forest remained silent, and only a chilling emptiness lingered.",
						"japanese": "倒れた怪物。しかし森は相変わらず沈黙し、冷たい虚無感だけが漂っていた。",
						"chinese": "怪物倒下了。然而森林依旧沉默，只有冰冷的虚无感弥漫。",
						"french": "Le monstre tomba. Mais la forêt resta silencieuse, et seule une froide vacuité persistait.",
						"spanish": "El monstruo cayó. Pero el bosque permaneció en silencio, y solo una frialdad y vacío persistían.",
						"vietnamese": "Quái vật đã ngã xuống. Nhưng khu rừng vẫn im lặng, chỉ còn lại sự trống rỗng lạnh lẽo.",
						"thai": "สัตว์ประหลาดล้มลง. แต่ป่ายังคงเงียบงัน, มีเพียงความว่างเปล่าอันเยียบเย็นค้างอยู่.",
						"hindi": "दानव गिर गया। लेकिन जंगल अभी भी खामोश था, और केवल एक डरावनी शून्यता छाई हुई थी।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이 끝없는 순환 속에서, 그들은 과연 진실을 찾을 수 있을까?",
						"english": "In this endless cycle, can they truly find the truth?",
						"japanese": "この終わりなき循環の中で、彼らは本当に真実を見つけられるのだろうか？",
						"chinese": "在这个无尽的循环中，他们究竟能否找到真相？",
						"french": "Dans ce cycle sans fin, pourront-ils vraiment trouver la vérité ?",
						"spanish": "En este ciclo interminable, ¿podrán realmente encontrar la verdad?",
						"vietnamese": "Trong vòng tuần hoàn bất tận này, liệu họ có thể tìm thấy sự thật không?",
						"thai": "ในวัฏจักรที่ไม่มีที่สิ้นสุดนี้ พวกเขาจะค้นพบความจริงได้หรือไม่?",
						"hindi": "इस अंतहीन चक्र में, क्या वे वास्तव में सच्चाई ढूंढ पाएंगे?"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"얼어붙은 폐허, 잊혀진 목소리가 속삭였다.",
			"과거의 기록, 버려진 것들의 욕망.",
			"감춰진 진실은 거대한 그림자를 드리웠고,",
			"강함조차 절망 앞에서는 무력했다.",
			"이 끝없는 순환을 누가 끊을 수 있을까."
		],
		"english": [
			"Frozen ruins, forgotten voices whispered.",
			"Records of the past, desires of the forsaken.",
			"The hidden truth cast a colossal shadow,",
			"Even strength was powerless before despair.",
			"Who can break this endless cycle?"
		],
		"japanese": [
			"凍てついた廃墟、忘れられた声が囁いた。",
			"過去の記録、捨てられし者たちの欲望。",
			"隠された真実は巨大な影を落とし、",
			"強ささえ絶望の前では無力だった。",
			"この終わりのない循環を誰が断ち切れるだろうか。"
		],
		"chinese": [
			"冰封的废墟，被遗忘的声音在低语。",
			"过去的记录，被遗弃者的欲望。",
			"隐藏的真相投下了巨大的阴影，",
			"即使是强大，在绝望面前也无能为力。",
			"谁能打破这个无尽的循环？"
		],
		"french": [
			"Ruines gelées, des voix oubliées chuchotaient.",
			"Archives du passé, désirs des bannis.",
			"La vérité cachée projetait une ombre colossale,",
			"Même la force était impuissante face au désespoir.",
			"Qui pourra briser ce cycle éternel ?"
		],
		"spanish": [
			"Ruinas heladas, voces olvidadas susurraron.",
			"Registros del pasado, deseos de los abandonados.",
			"La verdad oculta proyectó una sombra colosal,",
			"Incluso la fuerza era impotente ante la desesperación.",
			"¿Quién podrá romper este ciclo interminable?"
		],
		"vietnamese": [
			"Hoang tàn băng giá, những giọng nói bị lãng quên thì thầm.",
			"Ký ức quá khứ, khao khát của những kẻ bị bỏ rơi.",
			"Chân lý bị che giấu tạo nên một bóng đen khổng lồ,",
			"Ngay cả sức mạnh cũng bất lực trước tuyệt vọng.",
			"Ai có thể phá vỡ vòng lặp vô tận này?"
		],
		"thai": [
			"ซากปรักหักพังเยือกแข็ง เสียงที่ถูกลืมเลือนกระซิบแผ่วเบา",
			"บันทึกแห่งอดีต ความปรารถนาของผู้ถูกทอดทิ้ง",
			"ความจริงที่ซ่อนเร้นทอดเงาอันมหึมา,",
			"แม้ความแข็งแกร่งก็ไร้กำลังต่อหน้าความสิ้นหวัง",
			"ใครจะสามารถทำลายวงจรที่ไม่มีที่สิ้นสุดนี้ได้?"
		],
		"hindi": [
			"जमे हुए खंडहर, भूली हुई आवाज़ें फुसफुसाईं।",
			"अतीत के अभिलेख, त्यागे हुए लोगों की इच्छाएँ।",
			"छिपी हुई सच्चाई ने एक विशाल परछाई डाली,",
			"यहां तक कि शक्ति भी निराशा के सामने शक्तिहीन थी।",
			"इस अंतहीन चक्र को कौन तोड़ सकता है?"
		]
	}
} as const;
