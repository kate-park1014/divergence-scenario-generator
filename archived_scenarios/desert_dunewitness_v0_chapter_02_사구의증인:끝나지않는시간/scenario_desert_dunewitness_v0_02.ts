export const scenario_desert_dunewitness_v0_02 = {
	"scenario_id": "desert_dunewitness_v0_02",
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
			"끝없이 펼쳐진 모래사막.",
			"새로운 생명을 심으려는 자,",
			"그리고 모든 변화를 거부하는 사막의 섭리.",
			"그들의 의지가 충돌하기 시작했다."
		],
		"english": [
			"Endless sand desert.",
			"One who seeks to plant new life,",
			"And the desert's will, rejecting all change.",
			"Their wills began to clash."
		],
		"japanese": [
			"果てしなく広がる砂漠。",
			"新たな生命を植えようとする者、",
			"そして、あらゆる変化を拒む砂漠の摂理。",
			"彼らの意志が衝突し始めた。"
		],
		"chinese": [
			"一望无际的沙海。",
			"试图播种新生命之人，",
			"以及拒绝一切改变的沙漠法则。",
			"他们的意志开始冲突。"
		],
		"french": [
			"Un désert de sable infini.",
			"Celui qui cherche à implanter une nouvelle vie,",
			"Et la providence du désert, qui rejette tout changement.",
			"Leurs volontés ont commencé à s'affronter."
		],
		"spanish": [
			"Un desierto de arena interminable.",
			"Aquel que busca sembrar nueva vida,",
			"Y la providencia del desierto, que rechaza todo cambio.",
			"Sus voluntades comenzaron a chocar."
		],
		"vietnamese": [
			"Sa mạc cát trải dài vô tận.",
			"Kẻ muốn gieo mầm sự sống mới,",
			"Và ý chí của sa mạc, từ chối mọi sự thay đổi.",
			"Ý chí của họ bắt đầu xung đột."
		],
		"thai": [
			"ทะเลทรายกว้างใหญ่ไร้ขอบเขต",
			"ผู้ที่ปรารถนาจะปลูกชีวิตใหม่",
			"และเจตจำนงของทะเลทรายที่ปฏิเสธการเปลี่ยนแปลงทั้งมวล",
			"เจตจำนงของพวกเขาเริ่มปะทะกัน"
		],
		"hindi": [
			"अनंत फैला हुआ रेगिस्तान।",
			"वह जो नया जीवन रोपना चाहता है,",
			"और रेगिस्तान का विधान, जो हर बदलाव को नकारता है।",
			"उनकी इच्छाएँ टकराने लगीं।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "오아시스를 만들 수 있어. 난 알아!",
						"english": "I can create an oasis. I know it!",
						"japanese": "オアシスを作れる。私にはわかる！",
						"chinese": "我能创造绿洲。我知道！",
						"french": "Je peux créer une oasis. Je le sais !",
						"spanish": "Puedo crear un oasis. ¡Lo sé!",
						"vietnamese": "Tôi có thể tạo ra ốc đảo. Tôi biết điều đó!",
						"thai": "ฉันสร้างโอเอซิสได้ ฉันรู้!",
						"hindi": "मैं एक नखलिस्तान बना सकता हूँ। मुझे पता है!"
					},
					"emotion": "happy"
				},
				{
					"speaker": "Zafir",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "Zafir",
					"content": {
						"korean": "사막은 뭐든 받아들이지. 하지만 아무것도 오래 허락하진 않아.",
						"english": "The desert accepts everything. But it allows nothing to last long.",
						"japanese": "砂漠は何でも受け入れる。だが、何も長くは許さない。",
						"chinese": "沙漠接纳一切。但它不让任何东西长存。",
						"french": "Le désert accepte tout. Mais il ne permet à rien de durer.",
						"spanish": "El desierto acepta todo. Pero no permite que nada dure mucho.",
						"vietnamese": "Sa mạc chấp nhận mọi thứ. Nhưng nó không cho phép bất cứ điều gì tồn tại lâu.",
						"thai": "ทะเลทรายรับได้ทุกสิ่ง แต่ไม่ยอมให้สิ่งใดคงอยู่ได้นาน",
						"hindi": "रेگिस्तान सब कुछ स्वीकार करता है। लेकिन वह किसी को भी लंबे समय तक रहने की इजाजत नहीं देता।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "해보지 않고 포기할 순 없어.",
						"english": "I can't give up without trying.",
						"japanese": "やってみずに諦めるわけにはいかない。",
						"chinese": "不尝试就不能放弃。",
						"french": "Je ne peux pas abandonner sans essayer.",
						"spanish": "No puedo rendirme sin intentarlo.",
						"vietnamese": "Tôi không thể từ bỏ mà không thử.",
						"thai": "ฉันยอมแพ้โดยไม่ลองไม่ได้หรอก",
						"hindi": "बिना कोशिश किए हार नहीं मान सकता।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "Zafir",
					"action": "enter",
					"spot": [
						3,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "헛된 짓이야. 이곳에선 모든 게 결국 모래로 돌아간단 말일세.",
						"english": "It's futile. Everything eventually turns back to sand here.",
						"japanese": "無駄なことだ。ここではすべてが結局砂に戻るのだから。",
						"chinese": "白费力气。在这里，一切最终都会归于沙尘。",
						"french": "C'est futile. Tout finit par redevenir sable ici.",
						"spanish": "Es inútil. Aquí, todo eventualmente se convierte en arena.",
						"vietnamese": "Vô ích thôi. Ở đây, mọi thứ cuối cùng đều trở về cát bụi.",
						"thai": "มันไร้ประโยชน์ ทุกสิ่งในที่แห่งนี้สุดท้ายก็กลับกลายเป็นทราย",
						"hindi": "यह बेकार है। यहाँ सब कुछ अंततः रेत में बदल जाता है।"
					},
					"emotion": "sad",
					"speaker": "Zafir",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그래도, 한 번 더.",
						"english": "Even so, just one more time.",
						"japanese": "それでも、もう一度だけ。",
						"chinese": "即便如此，再试一次。",
						"french": "Malgré tout, une fois de plus.",
						"spanish": "Aun así, una vez más.",
						"vietnamese": "Dù vậy, thêm một lần nữa.",
						"thai": "ถึงอย่างนั้นก็เถอะ อีกครั้งหนึ่ง",
						"hindi": "फिर भी, एक बार और।"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "작은 샘터 주위로 묘목을 심었다. 물을 부었다.",
						"english": "Saplings were planted around the small spring. Water was poured.",
						"japanese": "小さな泉の周りに苗木を植えた。水を注いだ。",
						"chinese": "在小泉边种下树苗。浇了水。",
						"french": "Des jeunes pousses ont été plantées autour de la petite source. De l'eau a été versée.",
						"spanish": "Se plantaron retoños alrededor del pequeño manantial. Se regó con agua.",
						"vietnamese": "Những cây non được trồng xung quanh suối nhỏ. Nước đã được đổ vào.",
						"thai": "ต้นกล้าถูกปลูกรอบ ๆ บ่อน้ำพุเล็ก ๆ รดน้ำแล้ว",
						"hindi": "छोटे झरने के चारों ओर पौधे लगाए गए। पानी डाला गया।"
					},
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "Zafir",
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "Zafir",
					"type": "speech",
					"content": {
						"korean": "저것 봐. 저 미친 바람이 불기 시작했어.",
						"english": "Look! That crazy wind has started to blow.",
						"japanese": "見て。あの狂った風が吹き始めたわ。",
						"chinese": "看！那阵狂风开始刮起来了。",
						"french": "Regarde ! Ce vent fou s'est levé.",
						"spanish": "¡Mira! Ese viento loco ha empezado a soplar.",
						"vietnamese": "Nhìn kìa! Cơn gió điên cuồng đó đã bắt đầu thổi rồi.",
						"thai": "ดูนั่นสิ! ลมบ้าคลั่งนั่นเริ่มพัดมาแล้ว",
						"hindi": "देखो! वह तूफानी हवा चलने लगी है।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "저 멀리, 거대한 모래 폭풍이 몰려오고 있었다.",
						"english": "In the distance, a massive sandstorm was approaching.",
						"japanese": "遠くで、巨大な砂嵐が迫っていた。",
						"chinese": "远处，一场巨大的沙尘暴正在逼近。",
						"french": "Au loin, une gigantesque tempête de sable approchait.",
						"spanish": "A lo lejos, una tormenta de arena masiva se acercaba.",
						"vietnamese": "Từ đằng xa, một trận bão cát khổng lồ đang ập tới.",
						"thai": "ไกลออกไป พายุทรายลูกมหึมากำลังคืบคลานเข้ามา",
						"hindi": "दूर, एक विशाल रेत का तूफान आ रहा था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "안돼…! 이제 막 심었는데…!",
						"english": "No...! I just planted them...!",
						"japanese": "だめだ…！やっと植えたばかりなのに…！",
						"chinese": "不…！我才刚种下…！",
						"french": "Non… ! Je viens juste de les planter… !",
						"spanish": "¡No...! ¡Acabo de plantarlas...!",
						"vietnamese": "Không...! Tôi vừa mới trồng xong...!",
						"thai": "ไม่นะ...! เพิ่งจะปลูกไปเอง...!",
						"hindi": "नहीं...! मैंने अभी तो बोया था...!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "애써 심었던 작은 식물들이 모래바람에 흔들렸다.",
						"english": "The small plants I had painstakingly planted swayed in the sand-laden wind.",
						"japanese": "苦労して植えた小さな植物たちが、砂風に揺れていた。",
						"chinese": "费力种下的小植物们在沙风中摇曳。",
						"french": "Les petites plantes que j'avais tant peiné à planter vacillaient sous le vent de sable.",
						"spanish": "Las pequeñas plantas que había plantado con tanto esfuerzo se balanceaban con el viento de arena.",
						"vietnamese": "Những cây non bé nhỏ tôi đã dày công vun trồng đang lay động trong gió cát.",
						"thai": "ต้นไม้เล็กๆ ที่อุตส่าห์ปลูกไว้ พลิ้วไหวไปตามลมทราย",
						"hindi": "मेरे द्वारा बड़ी मेहनत से लगाए गए छोटे पौधे रेत की हवा में झूल रहे थे।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "모래 폭풍은 모든 것을 집어삼켰다. 한순간에.",
						"english": "The sandstorm swallowed everything. In an instant.",
						"japanese": "砂嵐は全てを飲み込んだ。一瞬で。",
						"chinese": "沙尘暴吞噬了一切。一瞬间。",
						"french": "La tempête de sable a tout englouti. En un instant.",
						"spanish": "La tormenta de arena lo engulló todo. En un instante.",
						"vietnamese": "Bão cát nuốt chửng mọi thứ. Chỉ trong một khoảnh khắc.",
						"thai": "พายุทรายกลืนกินทุกสิ่ง ในชั่วพริบตาเดียว",
						"hindi": "रेत के तूफान ने सब कुछ निगल लिया। एक ही पल में।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "다… 망쳤어.",
						"english": "Everything... is ruined.",
						"japanese": "全部…台無しだ。",
						"chinese": "全都…毁了。",
						"french": "Tout... est fichu.",
						"spanish": "Todo... está arruinado.",
						"vietnamese": "Tất cả... tan tành hết rồi.",
						"thai": "ทุกอย่าง...พังหมดแล้ว",
						"hindi": "सब कुछ... बर्बाद हो गया।"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "Zafir",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "Zafir",
					"content": {
						"korean": "내가 말했지. 사막은 변하지 않아.",
						"english": "I told you. The desert doesn't change.",
						"japanese": "言ったはずだ。砂漠は変わらない。",
						"chinese": "我说过。沙漠是不会变的。",
						"french": "Je te l'avais dit. Le désert ne change pas.",
						"spanish": "Te lo dije. El desierto no cambia.",
						"vietnamese": "Tôi đã nói rồi mà. Sa mạc không thay đổi đâu.",
						"thai": "ฉันบอกแล้วไง ทะเลทรายไม่เคยเปลี่ยน",
						"hindi": "मैंने कहा था। रेगिस्तान नहीं बदलता।"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 모래바람 속, 잊혀진 문명들의 비명소리가 환영처럼 스쳐 지나갔다.",
						"english": "Within the colossal sandstorm, the screams of forgotten civilizations swept past like phantoms.",
						"japanese": "巨大な砂嵐の中、忘れ去られた文明の悲鳴が幻影のように過ぎ去った。",
						"chinese": "巨大的沙尘暴中，被遗忘的文明的尖叫声如幻影般掠过。",
						"french": "Au cœur de la gigantesque tempête de sable, les cris des civilisations oubliées passaient comme des fantômes.",
						"spanish": "Dentro de la colosal tormenta de arena, los gritos de civilizaciones olvidadas pasaron como fantasmas.",
						"vietnamese": "Trong trận bão cát khổng lồ, tiếng kêu than của những nền văn minh bị lãng quên lướt qua như ảo ảnh.",
						"thai": "ท่ามกลางพายุทรายอันใหญ่หลวง เสียงกรีดร้องของอารยธรรมที่ถูกลืมเลือนลอยผ่านไปราวกับภาพหลอน",
						"hindi": "विशाल रेत के तूफान में, भूली हुई सभ्यताओं की चीखें प्रेत की तरह गुजर गईं।"
					},
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "모든 노력은 흔적 없이 사라졌다.",
						"english": "All efforts vanished without a trace.",
						"japanese": "全ての努力は跡形もなく消え去った。",
						"chinese": "所有的努力都消失得无影无踪。",
						"french": "Tous les efforts disparurent sans laisser de trace.",
						"spanish": "Todos los esfuerzos se desvanecieron sin dejar rastro.",
						"vietnamese": "Mọi nỗ lực đều biến mất không một dấu vết.",
						"thai": "ความพยายามทั้งหมดหายไปอย่างไร้ร่องรอย",
						"hindi": "सभी प्रयास बिना किसी निशान के गायब हो गए।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 인간. 사막은 네게 아무것도 주지 않아.",
						"english": "Foolish human. The desert gives you nothing.",
						"japanese": "愚かな人間め。砂漠はお前には何も与えない。",
						"chinese": "愚蠢的人类。沙漠不会给你任何东西。",
						"french": "Humain stupide. Le désert ne te donnera rien.",
						"spanish": "Humano tonto. El desierto no te da nada.",
						"vietnamese": "Loài người ngu ngốc. Sa mạc không ban cho ngươi bất cứ điều gì.",
						"thai": "มนุษย์โง่เขลา ทะเลทรายไม่ได้ให้อะไรแก่เจ้าหรอก",
						"hindi": "मूर्ख इंसान। रेगिस्तान तुम्हें कुछ नहीं देता।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네가 뭘 안다고!",
						"english": "What do you know?!",
						"japanese": "何がわかるのさ！",
						"chinese": "你懂什么！",
						"french": "Qu'est-ce que tu en sais !",
						"spanish": "¿Qué sabes tú?!",
						"vietnamese": "Ngươi biết gì mà nói!",
						"thai": "เจ้ารู้อะไร!",
						"hindi": "तुम क्या जानते हो!"
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "…그래도, 모래가… 너희를 기억할 것이다.",
						"english": "...Even so, the sand... will remember you.",
						"japanese": "…それでも、砂は… お前たちを覚えているだろう。",
						"chinese": "…即便如此，沙子…也会记住你们。",
						"french": "...Malgré tout, le sable... se souviendra de vous.",
						"spanish": "...Aun así, la arena... os recordará.",
						"vietnamese": "...Dù sao đi nữa, cát... sẽ nhớ các ngươi.",
						"thai": "...ถึงกระนั้น ทราย... จะจดจำพวกเจ้าไว้.",
						"hindi": "...फिर भी, रेत... तुम्हें याद रखेगी।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…아직 끝나지 않았어.",
						"english": "...It's not over yet.",
						"japanese": "…まだ終わっていない。",
						"chinese": "…还没结束。",
						"french": "...Ce n'est pas encore fini.",
						"spanish": "...Aún no ha terminado.",
						"vietnamese": "...Chưa kết thúc đâu.",
						"thai": "...ยังไม่จบ.",
						"hindi": "...अभी खत्म नहीं हुआ है।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "폭풍은 멎었다. 사막은 다시 침묵했다. 그러나, 작은 변화의 파문이 일렁였다.",
						"english": "The storm ceased. The desert fell silent once more. Yet, a ripple of small change stirred.",
						"japanese": "嵐は止んだ。砂漠は再び沈黙した。しかし、小さな変化の波紋が揺らいだ。",
						"chinese": "风暴停歇了。沙漠再次陷入沉寂。然而，一丝微小的变化涟漪荡漾开来。",
						"french": "La tempête cessa. Le désert retrouva son silence. Pourtant, une petite ondulation de changement se fit sentir.",
						"spanish": "La tormenta cesó. El desierto volvió a quedar en silencio. Sin embargo, una pequeña onda de cambio se agitó.",
						"vietnamese": "Cơn bão ngừng lại. Sa mạc lại chìm vào im lặng. Tuy nhiên, một gợn sóng thay đổi nhỏ đã dấy lên.",
						"thai": "พายุสงบลง ทะเลทรายกลับสู่ความเงียบงันอีกครั้ง ทว่า คลื่นแห่งการเปลี่ยนแปลงเล็กๆ ได้ก่อตัวขึ้น.",
						"hindi": "तूफान थम गया। रेगिस्तान फिर से खामोश हो गया। हालांकि, छोटे से बदलाव की एक लहर उठने लगी।"
					},
					"emotion": "base"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "네 어설픈 변화는, 결국 모래 한 줌에 불과했다.",
						"english": "Your clumsy change was, in the end, nothing more than a handful of sand.",
						"japanese": "お前の拙い変化は、結局砂一掴みに過ぎなかった。",
						"chinese": "你那笨拙的改变，终究不过是一捧沙土。",
						"french": "Ton changement maladroit n'était, en fin de compte, qu'une poignée de sable.",
						"spanish": "Tu torpe cambio fue, al final, nada más que un puñado de arena.",
						"vietnamese": "Sự thay đổi vụng về của ngươi, cuối cùng, chỉ là một nắm cát mà thôi.",
						"thai": "การเปลี่ยนแปลงที่ไร้ฝีมือของเจ้า สุดท้ายแล้วก็เป็นเพียงทรายกำมือเดียว.",
						"hindi": "तुम्हारा अनाड़ी बदलाव, अंततः, मुट्ठी भर रेत से ज्यादा कुछ नहीं था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "포기 안 해…! 다시 시작할 거야!",
						"english": "I won't give up...! I'll start again!",
						"japanese": "諦めない…！また始めるんだ！",
						"chinese": "我不会放弃…！我会重新开始的！",
						"french": "Je n'abandonnerai pas…! Je recommencerai !",
						"spanish": "¡No me rindo...! ¡Volveré a empezar!",
						"vietnamese": "Ta sẽ không bỏ cuộc...! Ta sẽ bắt đầu lại!",
						"thai": "ข้าไม่ยอมแพ้...! ข้าจะเริ่มใหม่อีกครั้ง!",
						"hindi": "मैं हार नहीं मानूंगा...! मैं फिर से शुरू करूंगा!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		}
	]
} as const;
