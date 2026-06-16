export const scenario_snowy_fenrir_47_01 = {
	"scenario_id": "snowy_fenrir_47_01",
	"order": 1,
	"act": "intro",
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
			"얼어붙은 땅. 모든 것이 멈춰 버린 곳.",
			"수백 마리 작은 짐승의 뼈가 한 방향으로 쓰러져 있다.",
			"마치 무언가를 향해 마지막 발버둥이라도 친 듯.",
			"그 죽음은 거대한 침묵 속에 감춰진 진실을 말하고 있었다."
		],
		"english": [
			"Frozen land. Where everything has stopped.",
			"Hundreds of small animal bones lie fallen in one direction.",
			"As if they made one last struggle towards something.",
			"That death spoke of a truth hidden in the great silence."
		],
		"japanese": [
			"凍てつく大地。すべてが止まってしまった場所。",
			"数百の小動物の骨が一方向へ倒れている。",
			"何かに向かって最後のあがきをしたかのように。",
			"その死は、巨大な沈黙の中に隠された真実を語っていた。"
		],
		"chinese": [
			"冰冻的土地。万物停滞之处。",
			"数百只小动物的骨头倒向同一个方向。",
			"仿佛是朝着某个方向做最后的挣扎。",
			"那死亡诉说着隐藏在巨大寂静中的真相。"
		],
		"french": [
			"Terre gelée. Là où tout s'est arrêté.",
			"Des centaines d'ossements de petits animaux gisent, tombés dans une seule direction.",
			"Comme s'ils avaient livré un dernier combat vers quelque chose.",
			"Cette mort racontait une vérité cachée dans le grand silence."
		],
		"spanish": [
			"Tierra helada. Donde todo se ha detenido.",
			"Cientos de huesos de pequeños animales yacen caídos en una misma dirección.",
			"Como si hubieran dado un último esfuerzo hacia algo.",
			"Esa muerte hablaba de una verdad oculta en el gran silencio."
		],
		"vietnamese": [
			"Vùng đất băng giá. Nơi mọi thứ đã ngừng lại.",
			"Hàng trăm bộ xương động vật nhỏ nằm rải rác theo một hướng.",
			"Cứ như thể chúng đã cố gắng vùng vẫy lần cuối về một thứ gì đó.",
			"Cái chết đó nói lên một sự thật ẩn giấu trong sự im lặng khổng lồ."
		],
		"thai": [
			"ดินแดนที่เยือกแข็ง. ที่ที่ทุกสิ่งหยุดนิ่ง.",
			"กระดูกสัตว์เล็กหลายร้อยตัวล้มระเนระนาดไปในทิศทางเดียวกัน",
			"ราวกับว่าพวกมันได้ต่อสู้ดิ้นรนครั้งสุดท้ายไปสู่บางสิ่ง.",
			"ความตายนั้นกำลังบอกเล่าความจริงที่ซ่อนอยู่ในความเงียบงันอันยิ่งใหญ่."
		],
		"hindi": [
			"जमी हुई भूमि। जहाँ सब कुछ रुक गया है।",
			"सैकड़ों छोटे जानवरों की हड्डियाँ एक ही दिशा में गिरी हुई हैं।",
			"मानो किसी चीज़ की ओर अंतिम संघर्ष किया हो।",
			"वह मृत्यु एक महान मौन में छिपी सच्चाई बता रही थी।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "수백 개의 뼈들이 같은 자세로 얼어붙어 있었다. 모두 한 곳을 향했다.",
						"english": "Hundreds of bones were frozen in the same posture. All facing one direction.",
						"japanese": "数百の骨が同じ姿勢で凍りついていた。すべてが一箇所を向いていた。",
						"chinese": "数百具骨头以同样的姿势冻结着。都朝向同一个地方。",
						"french": "Des centaines d'ossements étaient figés dans la même posture. Tous faisaient face à un seul endroit.",
						"spanish": "Cientos de huesos estaban congelados en la misma postura. Todos miraban hacia un mismo lugar.",
						"vietnamese": "Hàng trăm bộ xương đông cứng trong cùng một tư thế. Tất cả đều hướng về một nơi.",
						"thai": "กระดูกหลายร้อยชิ้นแข็งค้างอยู่ในท่าเดียวกัน. ทั้งหมดหันไปทางเดียวกัน.",
						"hindi": "सैकड़ों हड्डियाँ एक ही मुद्रा में जमी हुई थीं। सभी एक ही दिशा की ओर थीं।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이게 다 뭐야?",
						"english": "What is all this?",
						"japanese": "これ、全部何？",
						"chinese": "这都是什么？",
						"french": "Qu'est-ce que tout cela ?",
						"spanish": "¿Qué es todo esto?",
						"vietnamese": "Tất cả những thứ này là gì?",
						"thai": "นี่มันอะไรกันหมดเนี่ย?",
						"hindi": "यह सब क्या है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…기록이 남아있어. 죽음의 기록이.",
						"english": "...Records remain. Records of death.",
						"japanese": "…記録が残っている。死の記録が。",
						"chinese": "……有记录留存着。死亡的记录。",
						"french": "...Il reste des traces. Des traces de mort.",
						"spanish": "...Quedan registros. Registros de muerte.",
						"vietnamese": "...Có những ghi chép còn sót lại. Ghi chép về cái chết.",
						"thai": "…มีบันทึกหลงเหลืออยู่. บันทึกแห่งความตาย.",
						"hindi": "...रिकॉर्ड बचे हैं। मृत्यु के रिकॉर्ड।"
					},
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "뼈 조각들이… 이렇게나 많아?",
						"english": "So many bone fragments...?",
						"japanese": "骨の破片が…こんなにたくさん？",
						"chinese": "骨头碎片……竟然这么多？",
						"french": "Tant de fragments d'os... ?",
						"spanish": "¿Tantos fragmentos de hueso...?",
						"vietnamese": "Nhiều mảnh xương như vậy sao...?",
						"thai": "เศษกระดูก…เยอะขนาดนี้เลยเหรอ?",
						"hindi": "हड्डियों के टुकड़े... इतने सारे?"
					},
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "응. 그리고 전부… 같은 자세로 멈췄어.",
						"english": "Yes. And all of them... stopped in the same posture.",
						"japanese": "うん。そして全部…同じ姿勢で止まってる。",
						"chinese": "嗯。而且全部……都以同样的姿势停住了。",
						"french": "Oui. Et tous... se sont arrêtés dans la même posture.",
						"spanish": "Sí. Y todos... se detuvieron en la misma postura.",
						"vietnamese": "Vâng. Và tất cả... đều dừng lại ở cùng một tư thế.",
						"thai": "อืม. และทั้งหมด…หยุดนิ่งในท่าเดียวกัน.",
						"hindi": "हाँ। और सभी... एक ही मुद्रा में रुक गए।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "eira",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "이 뼈들은… 전부 앞을 향하고 있어.",
						"english": "These bones... are all facing forward.",
						"japanese": "この骨たちは…全部前を向いている。",
						"chinese": "这些骨头……全都朝向前方。",
						"french": "Ces ossements... sont tous tournés vers l'avant.",
						"spanish": "Estos huesos... están todos mirando hacia adelante.",
						"vietnamese": "Những bộ xương này... tất cả đều hướng về phía trước.",
						"thai": "กระดูกพวกนี้…ทั้งหมดหันไปข้างหน้า.",
						"hindi": "ये हड्डियाँ... सभी आगे की ओर हैं।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "무엇을 봤던 걸까?",
						"english": "What could I have seen?",
						"japanese": "何を見たんだろう？",
						"chinese": "我看到了什么？",
						"french": "Qu'est-ce que j'ai vu ?",
						"spanish": "¿Qué vi?",
						"vietnamese": "Mình đã thấy gì vậy?",
						"thai": "ฉันเห็นอะไร?",
						"hindi": "मैंने क्या देखा था?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "아니, 본 게 아니야. 무언가를… 원했어.",
						"english": "No, not what I saw. I… wanted something.",
						"japanese": "いや、見たんじゃない。何かを…望んでいた。",
						"chinese": "不，不是我看到的。我…渴望着什么。",
						"french": "Non, pas ce que j'ai vu. J'ai… désiré quelque chose.",
						"spanish": "No, no fue lo que vi. Yo… deseaba algo.",
						"vietnamese": "Không, không phải thứ mình thấy. Mình… đã muốn một điều gì đó.",
						"thai": "ไม่ใช่สิ่งที่ฉันเห็น ฉัน… ต้องการบางอย่าง",
						"hindi": "नहीं, जो मैंने देखा वह नहीं था। मैं… कुछ चाहता था।"
					},
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "죽는 순간까지?",
						"english": "Until the moment of death?",
						"japanese": "死ぬ瞬間まで？",
						"chinese": "直到死亡的那一刻？",
						"french": "Jusqu'au moment de la mort ?",
						"spanish": "¿Hasta el momento de morir?",
						"vietnamese": "Cho đến lúc chết sao?",
						"thai": "จนกว่าจะตาย?",
						"hindi": "मरने के क्षण तक?"
					},
					"speaker": "character_2"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "응. 마지막 염원처럼.",
						"english": "Yes. Like a final wish.",
						"japanese": "うん。最後の願いのように。",
						"chinese": "嗯。就像最后的愿望。",
						"french": "Oui. Comme un dernier souhait.",
						"spanish": "Sí. Como un último deseo.",
						"vietnamese": "Ừ. Giống như nguyện vọng cuối cùng vậy.",
						"thai": "ใช่ เหมือนความปรารถนาสุดท้าย",
						"hindi": "हाँ। अंतिम इच्छा की तरह।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "eira",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "전부 같은 방향이야. 저 멀리, 무언가를 향해.",
						"english": "All in the same direction. Towards something, far away.",
						"japanese": "全部同じ方向だ。遠く、何かを目指して。",
						"chinese": "都朝向同一个方向。朝着远方，某个东西。",
						"french": "Tous dans la même direction. Vers quelque chose, au loin.",
						"spanish": "Todos en la misma dirección. Hacia algo, allá lejos.",
						"vietnamese": "Tất cả đều cùng một hướng. Hướng về một thứ gì đó, rất xa.",
						"thai": "ทั้งหมดไปในทิศทางเดียวกัน มุ่งไปที่บางสิ่งบางอย่างที่อยู่ไกลออกไป",
						"hindi": "सभी एक ही दिशा में। दूर, किसी चीज़ की ओर।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "도망치려던 흔적도 없어.",
						"english": "No trace of them trying to escape.",
						"japanese": "逃げようとした痕跡もない。",
						"chinese": "也没有试图逃跑的痕迹。",
						"french": "Aucune trace de tentative de fuite.",
						"spanish": "Ni rastro de que intentaran escapar.",
						"vietnamese": "Không có dấu vết nào cho thấy họ đã cố gắng bỏ chạy.",
						"thai": "ไม่มีร่องรอยของการพยายามหลบหนี",
						"hindi": "भागने की कोशिश का कोई निशान नहीं।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "싸운 흔적도 없고. 그냥… 멈췄어.",
						"english": "No signs of a struggle either. They just… stopped.",
						"japanese": "争った痕跡もない。ただ…止まった。",
						"chinese": "也没有打斗的痕迹。只是…停了下来。",
						"french": "Pas de traces de lutte non plus. Ils ont juste… arrêté.",
						"spanish": "Ni señales de pelea. Simplemente… se detuvieron.",
						"vietnamese": "Cũng không có dấu vết giao tranh. Họ chỉ… dừng lại.",
						"thai": "ไม่มีร่องรอยของการต่อสู้ด้วย แค่… หยุดนิ่ง",
						"hindi": "लड़ाई का भी कोई निशान नहीं। वे बस… रुक गए।"
					},
					"speaker": "eira",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 일이 있었던 거야?",
						"english": "What happened?",
						"japanese": "何があったんだろう？",
						"chinese": "到底发生了什么？",
						"french": "Que s'est-il passé ?",
						"spanish": "¿Qué pasó?",
						"vietnamese": "Chuyện gì đã xảy ra vậy?",
						"thai": "เกิดอะไรขึ้น?",
						"hindi": "क्या हुआ था?"
					},
					"speaker": "character_3",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "아직은… 읽을 수 없어.",
						"english": "I can't… read it yet.",
						"japanese": "まだ…読み取れない。",
						"chinese": "暂时还…无法解读。",
						"french": "Je ne peux pas… encore le lire.",
						"spanish": "Todavía no… puedo leerlo.",
						"vietnamese": "Vẫn chưa… thể đọc được.",
						"thai": "ยัง… อ่านไม่ออก",
						"hindi": "अभी… पढ़ नहीं सकता।"
					},
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "eira",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "이 뼈들은… 마치 하나의 덩어리 같아.",
						"english": "These bones… they're like one mass.",
						"japanese": "この骨は…まるで一つの塊みたいだ。",
						"chinese": "这些骨头…就像一个整体。",
						"french": "Ces os… ils sont comme une seule masse.",
						"spanish": "Estos huesos… parecen una sola masa.",
						"vietnamese": "Những bộ xương này… cứ như thể là một khối vậy.",
						"thai": "กระดูกพวกนี้… เหมือนก้อนเดียวกัน",
						"hindi": "ये हड्डियाँ… जैसे एक ही पिंड हों।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "덩어리?",
						"english": "A mass?",
						"japanese": "塊？",
						"chinese": "一团？",
						"french": "Une masse ?",
						"spanish": "¿Una masa?",
						"vietnamese": "Một khối?",
						"thai": "ก้อนเหรอ?",
						"hindi": "एक पिंड?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "eira",
					"content": {
						"korean": "수백 개의 작은 죽음이… 하나의 염원으로 굳은 듯.",
						"english": "Hundreds of small deaths... solidified into a single wish.",
						"japanese": "数百の小さな死が…一つの願いとして固まったかのようだ。",
						"chinese": "数百个微小的死亡…仿佛凝结成了一个愿望。",
						"french": "Des centaines de petites morts... figées en un seul désir.",
						"spanish": "Cientos de pequeñas muertes... solidificadas en un solo deseo.",
						"vietnamese": "Hàng trăm cái chết nhỏ... dường như đông đặc lại thành một nguyện vọng duy nhất.",
						"thai": "ความตายเล็ก ๆ นับร้อย... ดูเหมือนจะรวมเป็นหนึ่งเดียวด้วยความปรารถนาเดียว",
						"hindi": "सैकड़ों छोटी मौतें... मानो एक ही इच्छा में जम गई हों।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "차가운 공기가 더 무거워졌다. 거대한 존재가 다가오는 듯했다.",
						"english": "The cold air grew heavier. A colossal presence seemed to approach.",
						"japanese": "冷たい空気が一層重くなった。巨大な存在が近づいているようだった。",
						"chinese": "冰冷的空气变得更沉重了。仿佛有某个巨大的存在正在逼近。",
						"french": "L'air froid s'alourdit. Une présence colossale semblait approcher.",
						"spanish": "El aire frío se volvió más pesado. Una presencia colosal parecía acercarse.",
						"vietnamese": "Không khí lạnh càng trở nên nặng nề hơn. Dường như có một sự hiện diện khổng lồ đang đến gần.",
						"thai": "อากาศเย็นยะเยือกหนักอึ้งขึ้น ราวกับมีบางสิ่งใหญ่โตกำลังเข้ามาใกล้",
						"hindi": "ठंडी हवा और भारी हो गई। एक विशाल उपस्थिति पास आ रही थी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…결국, 같은 길을 걷겠지.",
						"english": "...Ultimately, we walk the same path.",
						"japanese": "…結局、同じ道を歩むのだろう。",
						"chinese": "…最终，你也会走上相同的道路。",
						"french": "...Finalement, tu suivras le même chemin.",
						"spanish": "...Al final, recorrerás el mismo camino.",
						"vietnamese": "...Cuối cùng, ngươi cũng sẽ bước trên con đường tương tự.",
						"thai": "...สุดท้ายแล้ว ก็คงเดินตามเส้นทางเดียวกัน",
						"hindi": "...अंततः, तुम भी उसी रास्ते पर चलोगे।"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "무슨 소리야?",
						"english": "What do you mean?",
						"japanese": "どういう意味だ？",
						"chinese": "什么意思？",
						"french": "Que veux-tu dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ngươi nói gì vậy?",
						"thai": "หมายความว่าอะไร?",
						"hindi": "क्या मतलब है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이건… 한 마리가 아니야. 수많은 죽음이… 하나가 된 거야.",
						"english": "This is… not one creature. Countless deaths… have become one.",
						"japanese": "これは…一匹ではない。数えきれない死が…一つになったのだ。",
						"chinese": "这…不是一只。无数的死亡…合为一体了。",
						"french": "Ce n'est pas… une seule créature. D'innombrables morts… sont devenues une.",
						"spanish": "Esto no es… una criatura. Innumerables muertes… se han unido.",
						"vietnamese": "Đây không phải… chỉ một. Vô số cái chết… đã hợp lại thành một.",
						"thai": "นี่ไม่ใช่…แค่ตัวเดียว ความตายมากมาย…รวมเป็นหนึ่งเดียวกัน",
						"hindi": "यह… एक नहीं है। अनगिनत मौतें… एक हो गई हैं।"
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "늑대의 몸을 이룬 수백 마리 짐승의 뼈. 진실이 드러났다.",
						"english": "Bones of hundreds of beasts forming a wolf's body. The truth is revealed.",
						"japanese": "数百の獣の骨が狼の体を成す。真実が明らかになった。",
						"chinese": "数百只野兽的骨骼组成了狼的身体。真相大白了。",
						"french": "Les os de centaines de bêtes formant le corps d'un loup. La vérité est révélée.",
						"spanish": "Cientos de huesos de bestias forman el cuerpo de un lobo. La verdad ha sido revelada.",
						"vietnamese": "Hàng trăm bộ xương thú tạo nên thân sói. Sự thật đã được phơi bày.",
						"thai": "กระดูกของสัตว์ร้ายหลายร้อยตัวรวมกันเป็นร่างหมาป่า ความจริงได้ถูกเปิดเผยแล้ว",
						"hindi": "सैकड़ों जानवरों की हड्डियाँ मिलकर एक भेड़िये का शरीर बना रही हैं। सच सामने आ गया है।"
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "얼어붙은 심장부, 거대한 그림자가 모습을 드러냈다.",
						"english": "In the frozen heart, a colossal shadow revealed itself.",
						"japanese": "凍てついた心臓部で、巨大な影が姿を現した。",
						"chinese": "在冰冻的核心，一道巨大的身影显现了。",
						"french": "Au cœur gelé, une ombre colossale se révéla.",
						"spanish": "En el corazón congelado, una sombra colosal se reveló.",
						"vietnamese": "Tại trung tâm đóng băng, một bóng tối khổng lồ đã hiện hình.",
						"thai": "ณ ใจกลางที่เยือกแข็ง เงาขนาดมหึมาได้ปรากฏตัวขึ้น",
						"hindi": "जमे हुए हृदय में, एक विशाल छाया प्रकट हुई।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "여긴… 너희가 올 곳이 아니다.",
						"english": "This is... not where you belong.",
						"japanese": "ここは…お前たちが来る場所ではない。",
						"chinese": "这里…不是你们该来的地方。",
						"french": "Ce n'est... pas votre place.",
						"spanish": "Aquí... no es vuestro lugar.",
						"vietnamese": "Đây... không phải là nơi các ngươi nên đến.",
						"thai": "ที่นี่... ไม่ใช่ที่ของพวกเจ้า",
						"hindi": "यह… तुम्हारी जगह नहीं है।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "네가 이 뼈들의 주인인가?",
						"english": "Are you the master of these bones?",
						"japanese": "お前がこの骨たちの主か？",
						"chinese": "你是这些骨头的主人吗？",
						"french": "Es-tu le maître de ces os ?",
						"spanish": "¿Eres el dueño de estos huesos?",
						"vietnamese": "Ngươi là chủ nhân của những bộ xương này sao?",
						"thai": "เจ้าคือเจ้าของกระดูกเหล่านี้หรือ?",
						"hindi": "क्या तुम इन हड्डियों के स्वामी हो?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "아니… 주인이 아니야. 이건… 응결이야.",
						"english": "No... not a master. This is... a condensation.",
						"japanese": "違う…主ではない。これは…凝結だ。",
						"chinese": "不…不是主人。这是一种…凝结。",
						"french": "Non... pas un maître. C'est... une condensation.",
						"spanish": "No... no soy el dueño. Esto es... una condensación.",
						"vietnamese": "Không... không phải là chủ nhân. Đây là... một sự ngưng kết.",
						"thai": "ไม่... ไม่ใช่เจ้าของ นี่คือ... การควบแน่น",
						"hindi": "नहीं… स्वामी नहीं। यह… एक संघनन है।"
					},
					"speaker": "eira"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "감히… 나를 읽으려 하는가.",
						"english": "How dare you... try to read me.",
						"japanese": "よくも…私を読み解こうとするか。",
						"chinese": "你竟敢…试图解读我。",
						"french": "Oserez-vous... tenter de me lire.",
						"spanish": "¿Te atreves... a intentar leerme?",
						"vietnamese": "Ngươi... dám đọc ta sao?",
						"thai": "บังอาจ... พยายามจะอ่านข้าหรือไง",
						"hindi": "क्या तुम… मुझे पढ़ने की हिम्मत करते हो?"
					},
					"speaker": "random_boss"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "수백의 굶주림이 하나가 되어 탐험대를 덮쳤다.",
						"english": "Hundreds of hungers became one, overwhelming the expedition.",
						"japanese": "数百の飢えが一つとなり、探検隊を襲った。",
						"chinese": "数百份饥饿合为一体，扑向了探险队。",
						"french": "Des centaines de faims ne firent qu'une, submergeant l'expédition.",
						"spanish": "Cientos de hambres se unieron, abrumando a la expedición.",
						"vietnamese": "Hàng trăm cơn đói hợp thành một, ập xuống đoàn thám hiểm.",
						"thai": "ความหิวโหยนับร้อยรวมกันเป็นหนึ่งเดียว ถาโถมเข้าใส่คณะสำรวจ",
						"hindi": "सैकड़ों भूख एक हो गईं, अभियान दल को अभिभूत कर दिया।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "너희도… 결국 똑같아질 것이다.",
						"english": "You too… will eventually become the same.",
						"japanese": "お前たちも…結局同じになるだろう。",
						"chinese": "你们也…终将变得一样。",
						"french": "Vous aussi… finirez par devenir les mêmes.",
						"spanish": "Vosotros también… acabaréis siendo lo mismo.",
						"vietnamese": "Các ngươi cũng… cuối cùng sẽ trở nên giống hệt.",
						"thai": "พวกเจ้าเองก็…สุดท้ายก็จะกลายเป็นเช่นเดียวกัน",
						"hindi": "तुम भी… आखिरकार वैसे ही बन जाओगे।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "우린… 여기서 멈추지 않아!",
						"english": "We… won't stop here!",
						"japanese": "我々は…ここで止まらない！",
						"chinese": "我们…不会止步于此！",
						"french": "Nous… ne nous arrêterons pas ici !",
						"spanish": "¡Nosotros… no nos detendremos aquí!",
						"vietnamese": "Chúng ta… sẽ không dừng lại ở đây!",
						"thai": "เรา…จะไม่หยุดอยู่แค่นี้!",
						"hindi": "हम… यहीं नहीं रुकेंगे!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			]
		}
	]
} as const;
