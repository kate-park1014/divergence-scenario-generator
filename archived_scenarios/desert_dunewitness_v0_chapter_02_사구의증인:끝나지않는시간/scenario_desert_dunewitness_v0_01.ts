export const scenario_desert_dunewitness_v0_01 = {
	"scenario_id": "desert_dunewitness_v0_01",
	"order": 1,
	"act": "intro",
	"theme": "desert",
	"actors": {
		"Donkey": {
			"name": {
				"korean": "당키",
				"english": "Donkey",
				"japanese": "ドンキー",
				"chinese": "唐基",
				"french": "Donkey",
				"spanish": "Donkey",
				"vietnamese": "Donkey",
				"thai": "ดอนกี้",
				"hindi": "डंकी"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/1b034791-7d67-4730-0730-3e1ea3e48c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/7e4c81be-8c78-41fe-7692-6277d4bb0800/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"끝없는 모래, 시간마저 잠든 곳.",
			"미지의 땅이 부르는가, 혹은 삼키는가.",
			"길잡이 당키와 함께, 첫 발자국을 새긴다.",
			"모든 것이 모래로 돌아가는 사막, 그 침묵 속 шепот."
		],
		"english": [
			"Endless sands, where even time sleeps.",
			"Does the unknown land call, or does it devour?",
			"With Dunky the guide, we carve our first footsteps.",
			"The desert where all returns to sand, a whisper in its silence."
		],
		"japanese": [
			"終わりのない砂、時間さえ眠る場所。",
			"未知の地が呼ぶのか、それとも呑み込むのか。",
			"道案内役のダンキーと共に、最初の足跡を刻む。",
			"全てが砂へと還る砂漠、その沈黙の中の囁き。"
		],
		"chinese": [
			"无尽的沙，时间亦沉睡之地。",
			"未知之地在召唤，亦或吞噬？",
			"与向导当奇一同，刻下第一道足迹。",
			"一切归于沙尘的沙漠，其寂静中的低语。"
		],
		"french": [
			"Sables infinis, là où le temps lui-même sommeille.",
			"Cette terre inconnue appelle-t-elle, ou engloutit-elle ?",
			"Avec Dunky le guide, nous laissons nos premières empreintes.",
			"Le désert où tout retourne au sable, un murmure dans son silence."
		],
		"spanish": [
			"Arenas infinitas, donde hasta el tiempo duerme.",
			"¿La tierra desconocida llama, o devora?",
			"Junto a Dunky, el guía, dejamos nuestras primeras huellas.",
			"El desierto donde todo vuelve a ser arena, un susurro en su silencio."
		],
		"vietnamese": [
			"Cát vô tận, nơi thời gian cũng chìm vào giấc ngủ.",
			"Vùng đất vô danh đang gọi mời, hay nuốt chửng?",
			"Cùng Dunky người dẫn đường, ta khắc dấu chân đầu tiên.",
			"Sa mạc nơi mọi thứ trở về với cát, một tiếng thì thầm trong im lặng của nó."
		],
		"thai": [
			"ผืนทรายไร้สิ้นสุด ที่ซึ่งแม้แต่เวลาก็หลับใหล.",
			"ดินแดนปริศนาเรียกหา หรือกลืนกิน?",
			"ร่วมกับดังค์ ผู้ชี้นำ, เราจะทิ้งรอยเท้าแรกไว้.",
			"ทะเลทรายที่ทุกสิ่งกลับคืนสู่ผืนทราย, เสียงกระซิบในความเงียบงัน."
		],
		"hindi": [
			"अंतहीन रेत, जहाँ समय भी सोता है।",
			"क्या अज्ञात भूमि पुकारती है, या निगल जाती है?",
			"मार्गदर्शक डंकी के साथ, हम अपने पहले कदम रखते हैं।",
			"रेगिस्तान जहाँ सब कुछ रेत में बदल जाता है, उसकी चुप्पी में एक फुसफुसाहट।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "끝없이 펼쳐진 모래 언덕. 고대 유적의 잔해가 바람에 부서진다.",
						"english": "Endless sand dunes stretch out. Ancient ruins crumble in the wind.",
						"japanese": "果てなく広がる砂丘。古代遺跡の残骸が風に砕ける。",
						"chinese": "无尽的沙丘绵延不绝。古老遗迹的残骸在风中破碎。",
						"french": "Des dunes de sable infinies s'étendent à perte de vue. Les ruines antiques s'effritent au vent.",
						"spanish": "Dunas de arena infinitas se extienden. Restos de antiguas ruinas se desmoronan con el viento.",
						"vietnamese": "Những cồn cát trải dài vô tận. Tàn tích cổ đại vụn vỡ trong gió.",
						"thai": "เนินทรายกว้างใหญ่ไร้สิ้นสุด. ซากปรักหักพังโบราณพังทลายในสายลม.",
						"hindi": "अंतहीन रेतीले टीले फैले हुए हैं। प्राचीन खंडहर हवा में बिखर रहे हैं।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이게... 사막이구나.",
						"english": "So this is... the desert.",
						"japanese": "これが... 砂漠なのか。",
						"chinese": "这就是... 沙漠啊。",
						"french": "Alors c'est ça... le désert.",
						"spanish": "Así que esto es... el desierto.",
						"vietnamese": "Đây chính là... sa mạc.",
						"thai": "นี่คือ... ทะเลทรายสินะ.",
						"hindi": "तो यह है... रेगिस्तान।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "Donkey"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그래. 수많은 이들이 이곳을 지났지. 흔적조차 남기지 못하고.",
						"english": "Yes. Many have passed through here. Leaving no trace.",
						"japanese": "そうだ。数えきれない人々がここを通り過ぎた。痕跡すら残せずに。",
						"chinese": "是啊。无数人曾路过此地。连一丝痕迹都未留下。",
						"french": "Oui. Nombreux sont ceux qui sont passés par ici. Sans laisser de trace.",
						"spanish": "Sí. Muchos han pasado por aquí. Sin dejar rastro alguno.",
						"vietnamese": "Phải. Vô số người đã đi qua nơi này. Không để lại dấu vết gì.",
						"thai": "ใช่แล้ว. ผู้คนมากมายได้ผ่านมาที่นี่. โดยไม่ทิ้งร่องรอยใดๆ.",
						"hindi": "हाँ। अनगिनत लोग यहाँ से गुज़रे हैं। कोई निशान छोड़े बिना।"
					},
					"speaker": "Donkey"
				},
				{
					"type": "speech",
					"content": {
						"korean": "사막은 변덕스럽고, 잔혹해. 모든 걸 품지만, 아무것도 지켜주지 않아.",
						"english": "The desert is fickle and cruel. It embraces all, but protects nothing.",
						"japanese": "砂漠は気まぐれで、残酷だ。全てを受け入れるが、何も守ってはくれない。",
						"chinese": "沙漠变幻莫测，又残酷无情。它包容一切，却不守护任何。",
						"french": "Le désert est capricieux et cruel. Il embrasse tout, mais ne protège rien.",
						"spanish": "El desierto es caprichoso y cruel. Lo abraza todo, pero no protege nada.",
						"vietnamese": "Sa mạc thật thất thường và tàn nhẫn. Nó bao dung tất cả, nhưng không bảo vệ bất cứ thứ gì.",
						"thai": "ทะเลทรายนั้นแปรปรวนและโหดร้าย. มันโอบอุ้มทุกสิ่ง, แต่ไม่ปกป้องสิ่งใดเลย.",
						"hindi": "रेगिस्तान चंचल और क्रूर है। यह सबको गले लगाता है, पर किसी की रक्षा नहीं करता।"
					},
					"emotion": "base",
					"speaker": "Donkey"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "(작게 피어난 꽃을 발견한다) 이 작은 꽃은...",
						"english": "(Finds a small blooming flower) This little flower...",
						"japanese": "(小さく咲いた花を見つける) この小さな花は...",
						"chinese": "(发现一朵小花) 这朵小花...",
						"french": "(Découvre une petite fleur éclose) Cette petite fleur...",
						"spanish": "(Encuentra una pequeña flor que ha brotado) Esta pequeña flor...",
						"vietnamese": "(Phát hiện một bông hoa nhỏ đang nở) Bông hoa nhỏ này...",
						"thai": "(พบดอกไม้เล็กๆ บานอยู่) ดอกไม้เล็กๆ นี่...",
						"hindi": "(एक छोटा सा खिला हुआ फूल देखता है) यह छोटा सा फूल..."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "물을 좀 줄까...?",
						"english": "Shall I give it some water...?",
						"japanese": "水を少しあげようか...?",
						"chinese": "要不要给点水...?",
						"french": "Dois-je lui donner un peu d'eau...?",
						"spanish": "¿Le doy un poco de agua...?",
						"vietnamese": "Hay mình cho nó chút nước...?",
						"thai": "จะรดน้ำให้หน่อยดีไหม...?",
						"hindi": "क्या मैं इसे थोड़ा पानी दूँ...?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "헛수고야. 이곳에선 너무 빨리 시들 것이다.",
						"english": "It's futile. It will wither too quickly here.",
						"japanese": "無駄だ。ここではすぐに枯れてしまうだろう。",
						"chinese": "白费力气。在这里会枯萎得太快。",
						"french": "C'est futile. Ici, ça se fanera trop vite.",
						"spanish": "Es inútil. Aquí se marchitará demasiado rápido.",
						"vietnamese": "Vô ích thôi. Ở đây nó sẽ tàn lụi quá nhanh.",
						"thai": "เปล่าประโยชน์ ที่นี่มันจะเหี่ยวเฉาเร็วเกินไป",
						"hindi": "व्यर्थ है। यहाँ यह बहुत जल्दी मुरझा जाएगा।"
					},
					"emotion": "sad",
					"speaker": "Donkey"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "...너무나도 잔혹하군.",
						"english": "...So cruel.",
						"japanese": "...あまりにも残酷だ。",
						"chinese": "...真是残酷啊。",
						"french": "...Tellement cruel.",
						"spanish": "...Demasiado cruel.",
						"vietnamese": "...Thật tàn nhẫn.",
						"thai": "...ช่างโหดร้ายเสียจริง",
						"hindi": "...बहुत क्रूर।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "오래된 유적의 벽화. 모든 것이 모래로 돌아가는 그림이 희미하게 남아있었다.",
						"english": "A mural in an ancient ruin. A faint image of everything turning to sand remained.",
						"japanese": "古い遺跡の壁画。すべてが砂に戻る絵が薄く残っていた。",
						"chinese": "古老遗迹的壁画。万物归于尘土的画面依稀可见。",
						"french": "Une fresque murale dans une ruine ancienne. Une image pâle de tout ce qui se transforme en sable subsistait.",
						"spanish": "Un mural en una ruina antigua. Una tenue imagen de todo convirtiéndose en arena permanecía.",
						"vietnamese": "Bức bích họa trong di tích cổ. Một hình ảnh mờ nhạt về mọi thứ biến thành cát vẫn còn đó.",
						"thai": "จิตรกรรมฝาผนังในซากปรักหักพังโบราณ ภาพเลือนรางของทุกสิ่งกลายเป็นทรายยังคงอยู่",
						"hindi": "एक प्राचीन खंडहर का भित्तिचित्र। सब कुछ रेत में बदल जाने का एक धुंधला चित्र शेष था।"
					},
					"speaker": "narrator"
				}
			]
		}
	]
} as const;
