export const scenario_snowy_fenrir_27_04 = {
	"scenario_id": "snowy_fenrir_27_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"glace": {
			"id": "mon_d0b542b9-aea9-405d-8ee2-4936516a041a",
			"name": {
				"korean": "글라세",
				"english": "Glace",
				"japanese": "グラース",
				"chinese": "格拉斯",
				"french": "Glace",
				"spanish": "Glace",
				"vietnamese": "Gla-xê",
				"thai": "กลาซ",
				"hindi": "ग्लेस"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/81de374f-3422-482e-01ee-dc973da70500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/ef269701-044a-42c5-f7b7-760e9c92a500/public"
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
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 늑대가 설원에 우뚝 섰다. 그 안구는 텅 빈 동공이었다.",
						"english": "A giant wolf stood tall on the snowy plains. Its eyes were empty sockets.",
						"japanese": "巨大な狼が雪原にそびえ立っていた。その眼窩は空っぽの瞳孔だった。",
						"chinese": "一只巨大的狼矗立在雪原上。它的眼睛是空洞的瞳孔。",
						"french": "Un loup géant se tenait droit dans la plaine enneigée. Ses yeux étaient des orbites vides.",
						"spanish": "Un lobo gigante se erguía en la llanura nevada. Sus ojos eran cuencas vacías.",
						"vietnamese": "Một con sói khổng lồ sừng sững trên cánh đồng tuyết. Đôi mắt nó là những hốc mắt rỗng.",
						"thai": "หมาป่ายักษ์ยืนตระหง่านบนที่ราบหิมะ ดวงตาของมันกลวงเปล่า",
						"hindi": "एक विशाल भेड़िया बर्फीले मैदानों में खड़ा था। उसकी आँखें खाली कोटर थीं।"
					}
				},
				{
					"action": "enter",
					"speaker": "glace",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "glace",
					"type": "speech",
					"content": {
						"korean": "…음. 이상하네.",
						"english": "...Hmm. That's strange.",
						"japanese": "…うん。おかしいな。",
						"chinese": "……嗯。真奇怪。",
						"french": "...Hmm. C'est étrange.",
						"spanish": "...Hmm. Es extraño.",
						"vietnamese": "...Ưm. Lạ thật.",
						"thai": "...อืม แปลกนะ",
						"hindi": "...हम्म। यह अजीब है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "뭐가 이상하다는 거야?",
						"english": "What's strange?",
						"japanese": "何が変なんだ？",
						"chinese": "什么奇怪？",
						"french": "Qu'est-ce qui est étrange ?",
						"spanish": "¿Qué es lo extraño?",
						"vietnamese": "Có gì lạ vậy?",
						"thai": "อะไรที่แปลก?",
						"hindi": "क्या अजीब है?"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "저 늑대. 계속 뭔가를 삼키는데… 몸집이 그대로야.",
						"english": "That wolf. It keeps devouring things... but its size stays the same.",
						"japanese": "あの狼。何かを飲み込み続けているのに…体がそのままなんだ。",
						"chinese": "那只狼。它一直在吞噬东西……但体型却没变。",
						"french": "Ce loup. Il continue de dévorer des choses... mais sa taille reste la même.",
						"spanish": "Ese lobo. No para de devorar cosas... pero su tamaño sigue igual.",
						"vietnamese": "Con sói đó. Nó cứ nuốt chửng cái gì đó... nhưng kích thước vẫn y nguyên.",
						"thai": "หมาป่าตัวนั้น มันกลืนกินบางอย่างไปเรื่อยๆ... แต่รูปร่างของมันยังคงเดิม",
						"hindi": "वह भेड़िया। वह चीजें निगलता रहता है... लेकिन उसका आकार वही रहता है।"
					},
					"speaker": "glace",
					"type": "speech"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "우리가 잘못 본 거 아니야?",
						"english": "Did we see it wrong?",
						"japanese": "私たちが見間違えたんじゃないか？",
						"chinese": "我们是不是看错了？",
						"french": "On s'est trompé ?",
						"spanish": "¿Lo hemos visto mal?",
						"vietnamese": "Chúng ta nhìn nhầm rồi à?",
						"thai": "เรามองผิดไปหรือเปล่า?",
						"hindi": "क्या हमने गलत देखा?"
					}
				},
				{
					"content": {
						"korean": "아니. 저건… 삼킨 게 아니야.",
						"english": "No. That's... not devouring.",
						"japanese": "いや。あれは…飲み込んだんじゃない。",
						"chinese": "不。那不是……吞噬。",
						"french": "Non. Ce n'est pas... dévorer.",
						"spanish": "No. Eso no es... devorar.",
						"vietnamese": "Không. Đó không phải là... nuốt chửng.",
						"thai": "ไม่ใช่ นั่นไม่ใช่... การกลืนกิน",
						"hindi": "नहीं। वह... निगलना नहीं है।"
					},
					"emotion": "sad",
					"speaker": "glace",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "glace",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "glace",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "다시 봐도 그래. 분명히 먹었는데.",
						"english": "Still the same. I definitely ate it.",
						"japanese": "やっぱりね。確かに食べたのに。",
						"chinese": "再看也是一样。我明明吃掉了。",
						"french": "C'est pareil, même en revoyant. Je l'ai pourtant mangé.",
						"spanish": "Lo veo de nuevo y es igual. Definitivamente lo comí.",
						"vietnamese": "Nhìn lại vẫn vậy. Rõ ràng đã ăn rồi.",
						"thai": "มองอีกทีก็ยังเหมือนเดิม. ฉันกินไปแล้วแท้ๆ.",
						"hindi": "फिर से देखो तो भी वही है। मैंने तो खाया था।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그럼 저 동공이 진짜 뭐로 통한다는 거야?",
						"english": "So what does that pupil actually lead to?",
						"japanese": "じゃあ、あの瞳孔は一体どこに通じてるんだ？",
						"chinese": "那那个瞳孔到底通向哪里？",
						"french": "Alors, à quoi mène vraiment cette pupille ?",
						"spanish": "¿Entonces a qué lleva realmente esa pupila?",
						"vietnamese": "Vậy đồng tử đó thực sự dẫn đến đâu?",
						"thai": "งั้นรูม่านตานั่นมันนำไปสู่ที่ไหนกันแน่?",
						"hindi": "तो वह पुतली सच में कहाँ जाती है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "glace",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "먹는다기보단… 지나가는 느낌이야. 위장이 아니라, 통로 같아.",
						"english": "More like it passes through. Not a stomach, but a passage.",
						"japanese": "食べるより…通り過ぎる感じ。胃じゃなくて、通路みたい。",
						"chinese": "与其说是吃…不如说是穿过。不像胃，更像通道。",
						"french": "Plutôt que d'être mangé… ça passe. Pas un estomac, mais un passage.",
						"spanish": "Más que comer… parece que pasa. No un estómago, sino un pasaje.",
						"vietnamese": "Hơn là ăn… cứ như nó đi xuyên qua vậy. Không phải dạ dày, mà là lối đi.",
						"thai": "ไม่ใช่กิน… แต่มันเหมือนแค่ผ่านไป. ไม่ใช่กระเพาะ, แต่มันเหมือนทางผ่าน.",
						"hindi": "खाने के बजाय… यह गुज़रने जैसा है। पेट नहीं, बल्कि एक रास्ता।"
					}
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "통로? 어디로? 끝은 있어?",
						"english": "A passage? To where? Is there an end?",
						"japanese": "通路？どこへ？終わりはあるのか？",
						"chinese": "通道？去哪里？有尽头吗？",
						"french": "Un passage ? Où ? Y a-t-il une fin ?",
						"spanish": "¿Un pasaje? ¿A dónde? ¿Tiene fin?",
						"vietnamese": "Một lối đi? Đến đâu? Có kết thúc không?",
						"thai": "ทางผ่าน? ไปไหน? มีจุดสิ้นสุดไหม?",
						"hindi": "एक रास्ता? कहाँ? क्या इसका कोई अंत है?"
					}
				},
				{
					"speaker": "glace",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "글쎄. 보이지 않아.",
						"english": "Hmm. I can't see it.",
						"japanese": "さあ。見えない。",
						"chinese": "嗯。看不见。",
						"french": "Hmm. Je ne le vois pas.",
						"spanish": "Pues. No lo veo.",
						"vietnamese": "Hmm. Không thấy.",
						"thai": "อืม. มองไม่เห็น.",
						"hindi": "मुझे नहीं दिखता।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "glace",
					"spot": [
						4,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "glace",
					"type": "speech",
					"content": {
						"korean": "저 동공은 끝없이 빨아들이기만 해.",
						"english": "That pupil just keeps endlessly sucking.",
						"japanese": "あの瞳孔は、ただひたすら吸い込むばかり。",
						"chinese": "那个瞳孔只是无止尽地吸入。",
						"french": "Cette pupille ne fait qu'aspirer sans fin.",
						"spanish": "Esa pupila solo succiona sin fin.",
						"vietnamese": "Đồng tử đó chỉ hút vào không ngừng.",
						"thai": "รูม่านตานั่นเอาแต่ดูดกลืนไม่สิ้นสุด.",
						"hindi": "वह पुतली बस लगातार सोखती रहती है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그럼… 저 늑대는 계속 배고프다는 거야?",
						"english": "So… that wolf is always hungry?",
						"japanese": "じゃあ…あの狼はずっとお腹が空いてるってこと？",
						"chinese": "那么…那只狼一直很饿吗？",
						"french": "Alors… ce loup a toujours faim ?",
						"spanish": "¿Entonces… ese lobo siempre tiene hambre?",
						"vietnamese": "Vậy… con sói đó cứ đói mãi sao?",
						"thai": "งั้น… หมาป่าตัวนั้นก็ยังหิวตลอด?",
						"hindi": "तो… वह भेड़िया हमेशा भूखा रहता है?"
					}
				},
				{
					"speaker": "glace",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "아마도. 영원히 채워질 수 없는 굶주림이지.",
						"english": "Probably. An eternal, insatiable hunger.",
						"japanese": "おそらくね。永遠に満たされない飢えだ。",
						"chinese": "可能吧。那是永远无法满足的饥饿。",
						"french": "Probablement. Une faim éternelle insatiable.",
						"spanish": "Probablemente. Un hambre eterna insaciable.",
						"vietnamese": "Có lẽ vậy. Một cơn đói vĩnh cửu, không đáy.",
						"thai": "อาจจะ. เป็นความหิวโหยนิรันดร์ที่ไม่มีวันเต็ม.",
						"hindi": "शायद। एक ऐसी अंतहीन भूख।"
					}
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"content": {
						"korean": "정말 끔찍한 운명이네.",
						"english": "What a terrible fate.",
						"japanese": "本当に恐ろしい運命だね。",
						"chinese": "真是可怕的命运啊。",
						"french": "Quel destin horrible.",
						"spanish": "Qué destino tan terrible.",
						"vietnamese": "Thật là một số phận kinh khủng.",
						"thai": "ช่างเป็นโชคชะตาที่เลวร้ายจริงๆ.",
						"hindi": "कितना भयानक भाग्य है।"
					},
					"emotion": "sad"
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
					"speaker": "glace",
					"spot": [
						3,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "glace",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "봐. 방금 또 커다란 걸 삼켰는데…",
						"english": "Look. It just swallowed something huge again…",
						"japanese": "見て。今また大きなものを飲み込んだのに…",
						"chinese": "看。它刚才又吞了一个大的…",
						"french": "Regarde. Il vient encore d'avaler un truc énorme…",
						"spanish": "Mira. Acaba de tragar algo enorme de nuevo…",
						"vietnamese": "Nhìn kìa. Nó vừa nuốt một thứ khổng lồ nữa…",
						"thai": "ดูสิ. เมื่อกี้มันเพิ่งกลืนของชิ้นใหญ่ไปอีกแล้ว…",
						"hindi": "देखो। इसने अभी फिर कुछ बड़ा निगल लिया…"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "늑대의 몸은 미동도 없었다.",
						"english": "The wolf's body didn't stir.",
						"japanese": "狼の体は微動だにしなかった。",
						"chinese": "狼的身体一动不动。",
						"french": "Le corps du loup ne bougea pas.",
						"spanish": "El cuerpo del lobo no se movió.",
						"vietnamese": "Thân sói không nhúc nhích.",
						"thai": "ร่างของหมาป่าไม่ขยับเลย",
						"hindi": "भेड़िये का शरीर टस से मस नहीं हुआ।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "glace",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…먹어도 먹어도 그대로야. 저건 채워질 수가 없어.",
						"english": "…No matter how much I eat, it remains. It can't be filled.",
						"japanese": "…いくら食べても変わらない。あれは満たされない。",
						"chinese": "…怎么吃都一样。那个永远无法填满。",
						"french": "…Peu importe ce que je mange, ça reste pareil. C'est insatiable.",
						"spanish": "…Coma lo que coma, sigue igual. Aquello no puede llenarse.",
						"vietnamese": "…Ăn mãi vẫn vậy. Thứ đó không thể lấp đầy.",
						"thai": "…กินเท่าไหร่ก็ยังเหมือนเดิม นั่นเติมเต็มไม่ได้",
						"hindi": "...कितना भी खाओ, वैसा ही रहता है। उसे भरा नहीं जा सकता।"
					}
				},
				{
					"content": {
						"korean": "…대체 저 괴물의 정체가 뭐야?",
						"english": "…What exactly is that monster's true nature?",
						"japanese": "…一体、あの怪物の正体は何だ？",
						"chinese": "…那个怪物到底是什么？",
						"french": "…Quelle est donc la vraie nature de ce monstre ?",
						"spanish": "…¿Cuál es la verdadera naturaleza de ese monstruo?",
						"vietnamese": "…Rốt cuộc, bản chất của quái vật đó là gì?",
						"thai": "…แท้จริงแล้ว สัตว์ประหลาดนั่นคืออะไรกันแน่?",
						"hindi": "...आखिर उस राक्षस की असलियत क्या है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "…어리석군. 이 허기는 끝나지 않아. 영원히…",
						"english": "…Foolish. This hunger will never end. Forever…",
						"japanese": "…愚かな。この飢えは終わらない。永遠に…",
						"chinese": "…愚蠢。这份饥饿不会结束。永远…",
						"french": "…Stupide. Cette faim ne finira jamais. Pour toujours…",
						"spanish": "…Qué necio. Esta hambruna no terminará. Jamás…",
						"vietnamese": "…Ngu xuẩn. Cơn đói này sẽ không bao giờ kết thúc. Mãi mãi…",
						"thai": "…ช่างโง่เขลา ความหิวโหยนี้ไม่มีวันสิ้นสุด ตลอดไป…",
						"hindi": "...मूर्ख। यह भूख कभी खत्म नहीं होगी। हमेशा के लिए..."
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "너 같은 괴물은 사라져야 해.",
						"english": "Monsters like you must disappear.",
						"japanese": "お前のような怪物は消え去るべきだ。",
						"chinese": "像你这样的怪物必须消失。",
						"french": "Des monstres comme toi doivent disparaître.",
						"spanish": "Monstruos como tú deben desaparecer.",
						"vietnamese": "Quái vật như ngươi phải biến mất.",
						"thai": "สัตว์ประหลาดอย่างแกต้องหายไปซะ",
						"hindi": "तुम जैसे राक्षसों को मिट जाना चाहिए।"
					},
					"emotion": "angry"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "glace",
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "base",
					"content": {
						"korean": "저 동공은 닫히지 않아. 그저 또 다른 세계로 통할 뿐.",
						"english": "That void won't close. It merely leads to another world.",
						"japanese": "あの虚ろは閉じない。ただ、別の世界へと通じるだけだ。",
						"chinese": "那个空洞不会关闭。它只是通往另一个世界。",
						"french": "Ce vide ne se refermera pas. Il ne fait que mener à un autre monde.",
						"spanish": "Ese vacío no se cerrará. Solo conduce a otro mundo.",
						"vietnamese": "Cái hư không đó sẽ không đóng lại. Nó chỉ dẫn tới một thế giới khác mà thôi.",
						"thai": "ความว่างเปล่านั้นไม่ปิดลงหรอก มันแค่เชื่อมต่อไปยังอีกโลกหนึ่งเท่านั้นเอง",
						"hindi": "वह शून्य बंद नहीं होगा। वह बस एक और दुनिया का मार्ग है।"
					},
					"speaker": "glace",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "늑대의 허기진 동공은 여전히 열려 있었다. 그 끝없는 갈망은 어디로 이어지는가.",
						"english": "The wolf's hungry eyes remained open. Where does that endless craving lead?",
						"japanese": "飢えた狼の瞳は、まだ開いていた。その尽きることのない渇望は、どこへ続くのか。",
						"chinese": "饥饿之狼的瞳孔依然敞开。那无尽的渴望通向何方？",
						"french": "Les pupilles affamées du loup restaient ouvertes. Où mène ce désir insatiable ?",
						"spanish": "Los ojos hambrientos del lobo seguían abiertos. ¿Adónde lleva ese anhelo sin fin?",
						"vietnamese": "Đôi mắt đói khát của sói vẫn mở. Sự khao khát vô tận đó dẫn đến đâu?",
						"thai": "ดวงตาที่หิวโหยของหมาป่ายังคงเปิดอยู่ ความปรารถนาอันไม่สิ้นสุดนั้นนำไปสู่ที่ใด?",
						"hindi": "भेड़िये की भूखी आँखें अब भी खुली थीं। वह अंतहीन लालसा कहाँ ले जाती है?"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "하찮은 것들. 너희도 곧 이 허기의 일부가 될 거다.",
						"english": "Insignificant creatures. You too shall soon become part of this hunger.",
						"japanese": "くだらぬ者たちめ。お前たちもじきにこの飢えの一部となるだろう。",
						"chinese": "微不足道的存在。你们很快也会成为这饥饿的一部分。",
						"french": "Misérables créatures. Vous ferez bientôt partie de cette faim.",
						"spanish": "Criaturas insignificantes. Vosotros también seréis pronto parte de esta hambruna.",
						"vietnamese": "Những thứ tầm thường. Các ngươi cũng sẽ sớm trở thành một phần của cơn đói này.",
						"thai": "เจ้าสิ่งมีชีวิตไร้ค่า เจ้าเองก็จะกลายเป็นส่วนหนึ่งของความหิวโหยนี้ในไม่ช้า",
						"hindi": "तुच्छ प्राणी। तुम भी जल्द ही इस भूख का हिस्सा बन जाओगे।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…아직, 끝나지 않았어. 포기하지 않아.",
						"english": "...It's not over yet. I won't give up.",
						"japanese": "…まだ、終わってない。諦めない。",
						"chinese": "……还没，结束。我不会放弃。",
						"french": "…Ce n'est pas encore fini. Je n'abandonnerai pas.",
						"spanish": "…Todavía no ha terminado. No me rendiré.",
						"vietnamese": "...Chưa, chưa kết thúc. Tôi sẽ không bỏ cuộc.",
						"thai": "...ยังไม่จบ ฉันจะไม่ยอมแพ้",
						"hindi": "...अभी खत्म नहीं हुआ। मैं हार नहीं मानूँगा।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "glace",
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
					"content": {
						"korean": "…실패해도 괜찮아. 저 동공의 진실은… 우리를 기다리고 있어.",
						"english": "...It's okay to fail. The truth of those eyes... awaits us.",
						"japanese": "…失敗しても構わない。あの瞳の真実が…私達を待っている。",
						"chinese": "……失败也没关系。那瞳孔的真相……正在等着我们。",
						"french": "…Ce n'est pas grave d'échouer. La vérité de ces yeux... nous attend.",
						"spanish": "…Está bien fallar. La verdad de esos ojos... nos espera.",
						"vietnamese": "...Thất bại cũng không sao. Sự thật của đôi mắt đó... đang chờ đợi chúng ta.",
						"thai": "...ไม่เป็นไรถ้าจะล้มเหลว ความจริงในดวงตาคู่นั้น... กำลังรอเราอยู่",
						"hindi": "...असफल होना ठीक है। उन आँखों का सच... हमारा इंतजार कर रहा है।"
					},
					"speaker": "glace",
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "그래. 굶주려라. 더 갈망해라. 어차피 채워지지 않을 테니.",
						"english": "Yes. Hunger. Crave more. It will never be sated anyway.",
						"japanese": "そうだ。飢えろ。もっと渇望しろ。どうせ満たされはしないのだから。",
						"chinese": "是的。饥饿吧。更加渴望吧。反正永远无法满足。",
						"french": "Oui. Affame-toi. Désire davantage. Ça ne sera jamais assouvi, de toute façon.",
						"spanish": "Sí. Ten hambre. Anhela más. De todos modos, nunca se saciará.",
						"vietnamese": "Phải. Cứ đói đi. Cứ khát khao hơn nữa. Dù sao cũng không thể lấp đầy.",
						"thai": "ใช่แล้ว จงหิวโหย จงปรารถนาให้มากขึ้น ยังไงก็ไม่มีทางอิ่มหนำ",
						"hindi": "हाँ। भूखे रहो। और तरसो। वैसे भी, यह कभी भरेगा नहीं।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "입 다물어. 네 멋대로 하게 두지 않아.",
						"english": "Shut up. I won't let you have your way.",
						"japanese": "黙れ。好きにはさせない。",
						"chinese": "闭嘴。我不会让你为所欲为。",
						"french": "Tais-toi. Je ne te laisserai pas faire à ta guise.",
						"spanish": "Cállate. No te dejaré hacer lo que quieras.",
						"vietnamese": "Im đi. Ta sẽ không để ngươi muốn làm gì thì làm.",
						"thai": "หุบปากซะ ฉันไม่ปล่อยให้แกทำตามใจชอบหรอก",
						"hindi": "चुप हो जाओ। मैं तुम्हें मनमानी नहीं करने दूँगा।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "glace",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "glace",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "무의미한 갈망. 저것이 저 동공의 본질이야.",
						"english": "Meaningless craving. That is the essence of that void.",
						"japanese": "無意味な渇望。あれこそがあの虚ろの本質だ。",
						"chinese": "毫无意义的渴望。那就是那个空洞的本质。",
						"french": "Un désir vain. C'est l'essence de ce vide.",
						"spanish": "Un anhelo sin sentido. Esa es la esencia de ese vacío.",
						"vietnamese": "Khát khao vô nghĩa. Đó chính là bản chất của cái hư không đó.",
						"thai": "ความปรารถนาที่ไร้ความหมาย นั่นคือแก่นแท้ของความว่างเปล่านั้น",
						"hindi": "व्यर्थ की लालसा। वही उस शून्य का सार है।"
					}
				},
				{
					"content": {
						"korean": "…알아버린 건가? 그렇다면 너희도 이 허기의 일부가 되어라.",
						"english": "…Have you realized? Then you too shall become part of this hunger.",
						"japanese": "…知ってしまったのか？ならば、お前たちもこの飢餓の一部となれ。",
						"chinese": "…你们知道了？那么，你们也成为这饥饿的一部分吧。",
						"french": "…Vous l'avez découvert ? Alors, vous aussi ferez partie de cette faim.",
						"spanish": "…¿Lo habéis descubierto? Entonces, vosotros también seréis parte de esta hambruna.",
						"vietnamese": "…Đã biết rồi sao? Vậy thì các ngươi cũng hãy trở thành một phần của cơn đói này đi.",
						"thai": "…รู้แล้วงั้นหรือ? ถ้าอย่างนั้น พวกเจ้าก็จงเป็นส่วนหนึ่งของความหิวโหยนี้ซะ",
						"hindi": "...क्या तुम जान गए? तो तुम भी इस भूख का हिस्सा बनो।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"모든 것을 집어삼키는 늑대.",
			"그러나 그 몸은 끝없이 비어 있었다.",
			"허무하게 뚫린 동공 너머, 삼킨 것들은 어디로 향하는가.",
			"채워지지 않는 굶주림, 그 끝은 과연 존재할까."
		],
		"english": [
			"The wolf that devours all.",
			"Yet its body remained endlessly empty.",
			"Beyond the hollow, empty eyes, where do the devoured go?",
			"An insatiable hunger—does it truly have an end?"
		],
		"japanese": [
			"全てを飲み込む狼。",
			"しかし、その体は果てしなく空虚だった。",
			"虚しく開いた瞳の奥、飲み込まれたものたちはどこへ向かうのか。",
			"満たされぬ飢え、その終焉は果たして存在するのか。"
		],
		"chinese": [
			"吞噬一切的狼。",
			"然而，它的身体却无尽地空虚。",
			"虚无的瞳孔深处，被吞噬之物又将去往何方？",
			"无法满足的饥饿，它的尽头真的存在吗？"
		],
		"french": [
			"Le loup qui dévore tout.",
			"Pourtant, son corps restait éternellement vide.",
			"Au-delà des pupilles évidées, où vont les choses dévorées ?",
			"Une faim insatiable, sa fin existe-t-elle vraiment ?"
		],
		"spanish": [
			"El lobo que devora todo.",
			"Sin embargo, su cuerpo permanecía infinitamente vacío.",
			"Más allá de sus pupilas vacías, ¿adónde van las cosas devoradas?",
			"Un hambre insaciable, ¿realmente tiene fin?"
		],
		"vietnamese": [
			"Con sói nuốt chửng mọi thứ.",
			"Nhưng cơ thể nó lại rỗng tuếch không ngừng.",
			"Phía sau đôi mắt rỗng tuếch, những gì đã bị nuốt chửng sẽ đi về đâu?",
			"Một cơn đói không đáy, liệu nó có thực sự có hồi kết không?"
		],
		"thai": [
			"หมาป่าผู้กลืนกินทุกสิ่ง",
			"ทว่าร่างกายของมันกลับว่างเปล่าไม่สิ้นสุด",
			"เลยดวงตาอันว่างเปล่านั้น สิ่งที่ถูกกลืนกินหายไปไหน?",
			"ความหิวโหยที่ไม่รู้จักอิ่ม จุดจบของมันจะมีจริงหรือ?"
		],
		"hindi": [
			"वह भेड़िया जो सब कुछ निगल जाता है।",
			"फिर भी उसका शरीर अनंत रूप से खाली था।",
			"खोखली, खाली आँखों से परे, निगले हुए कहाँ जाते हैं?",
			"एक अतृप्त भूख—क्या इसका वास्तव में कोई अंत है?"
		]
	}
} as const;
