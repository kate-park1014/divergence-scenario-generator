export const scenario_desert_orbel_1_05 = {
	"scenario_id": "desert_orbel_1_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "desert",
	"actors": {
		"amir": {
			"id": "mon_0096d602-52ab-4a9c-9cc8-4ff18ed3b655",
			"name": {
				"korean": "아미르",
				"english": "Amir",
				"japanese": "アミール",
				"chinese": "阿米尔",
				"french": "Amir",
				"spanish": "Amir",
				"vietnamese": "Amir",
				"thai": "อาเมียร์",
				"hindi": "अमीर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8cd60fb0-3699-44c4-6425-a3e97eec1800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/b644dc95-9c27-442e-6dc6-73e5550a0200/public"
		}
	},
	"boss": {
		"pool_id": "pool_052"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 존재가 모래 위에 좌정했다. 시간마저 멈춘 듯 고요하다.",
						"english": "A colossal being settled on the sand. Stillness, as if time itself halted.",
						"japanese": "巨大な存在が砂の上に鎮座した。時さえ止まったかのような静寂だ。",
						"chinese": "一个庞大的存在坐落在沙上。寂静，仿佛时间都已停止。",
						"french": "Une entité colossale s'est posée sur le sable. Un silence, comme si le temps s'était arrêté.",
						"spanish": "Un ser colosal se posó sobre la arena. Quietud, como si el tiempo mismo se hubiera detenido.",
						"vietnamese": "Một thực thể khổng lồ ngự trên cát. Tĩnh lặng, như thể thời gian đã ngừng lại.",
						"thai": "สิ่งมีชีวิตมหึมาประทับอยู่บนผืนทราย เงียบสงบราวกับว่ากาลเวลาหยุดนิ่ง",
						"hindi": "एक विशालकाय अस्तित्व रेत पर बैठ गया। खामोशी, मानो समय ही थम गया हो।"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "amir",
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "오르벨… 네가 사막의 의지인가?",
						"english": "Orvel... Are you the will of the desert?",
						"japanese": "オルベル… お前が砂漠の意思なのか？",
						"chinese": "奥尔贝尔……你就是沙漠的意志吗？",
						"french": "Orvel... Es-tu la volonté du désert ?",
						"spanish": "Orvel... ¿Eres la voluntad del desierto?",
						"vietnamese": "Orvel... Ngươi là ý chí của sa mạc sao?",
						"thai": "ออร์เวล... เจ้าคือเจตจำนงของทะเลทรายหรือ?",
						"hindi": "ऑर्वेल... क्या तुम रेगिस्तान की इच्छा हो?"
					},
					"type": "speech",
					"speaker": "amir",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "움직이지 않아. 그냥 지켜보는 것 같아.",
						"english": "It's not moving. It just seems to be watching.",
						"japanese": "動かない。ただ見守っているようだ。",
						"chinese": "它没有动。只是在看着，像是在旁观。",
						"french": "Il ne bouge pas. Il semble juste observer.",
						"spanish": "No se mueve. Parece que solo está observando.",
						"vietnamese": "Nó không di chuyển. Dường như chỉ đang quan sát.",
						"thai": "มันไม่เคลื่อนไหว แค่ดูเหมือนกำลังเฝ้ามอง",
						"hindi": "वह हिल नहीं रहा। बस देख रहा है, ऐसा लगता है।"
					}
				},
				{
					"content": {
						"korean": "아니. 그의 침묵은… 거부다.",
						"english": "No. His silence... is a refusal.",
						"japanese": "いや。彼の沈黙は… 拒絶だ。",
						"chinese": "不。他的沉默……是拒绝。",
						"french": "Non. Son silence... est un refus.",
						"spanish": "No. Su silencio... es un rechazo.",
						"vietnamese": "Không. Sự im lặng của hắn... là một sự từ chối.",
						"thai": "ไม่ใช่ ความเงียบของเขา... คือการปฏิเสธ",
						"hindi": "नहीं। उसकी चुप्पी... इंकार है।"
					},
					"type": "speech",
					"speaker": "amir",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "amir",
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "amir",
					"emotion": "sad",
					"content": {
						"korean": "우리를 무의미한 존재로 여기는군.",
						"english": "He considers us insignificant.",
						"japanese": "私たちを無意味な存在だと見なしている。",
						"chinese": "他把我们视为无足轻重。",
						"french": "Il nous considère comme insignifiants.",
						"spanish": "Nos considera insignificantes.",
						"vietnamese": "Hắn coi chúng ta là những kẻ vô nghĩa.",
						"thai": "เขามองว่าเราไร้ความหมาย",
						"hindi": "वह हमें तुच्छ समझता है।"
					}
				},
				{
					"content": {
						"korean": "우리가 노력해도, 결국 모래 아래 묻힐 거라는 건가?",
						"english": "So no matter how hard we try, we'll just be buried under the sand in the end?",
						"japanese": "我々が努力しても、結局砂の下に埋もれるということか？",
						"chinese": "即使我们努力，最终也会被埋在沙子下面吗？",
						"french": "Alors, peu importe nos efforts, nous finirons enterrés sous le sable ?",
						"spanish": "Así que, por mucho que nos esforcemos, al final seremos enterrados bajo la arena?",
						"vietnamese": "Vậy dù chúng ta có cố gắng thế nào, cuối cùng cũng sẽ bị chôn vùi dưới cát sao?",
						"thai": "งั้นไม่ว่าเราจะพยายามแค่ไหน สุดท้ายก็จะถูกฝังใต้ทรายงั้นหรือ?",
						"hindi": "तो चाहे हम कितनी भी कोशिश करें, अंत में हम रेत के नीचे दफन हो जाएंगे?"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그건… 그가 정할 문제가 아니야.",
						"english": "That's... not for him to decide.",
						"japanese": "それは… 彼が決める問題ではない。",
						"chinese": "那不是……他能决定的事。",
						"french": "Ce n'est pas... à lui de décider.",
						"spanish": "Eso no... es asunto suyo.",
						"vietnamese": "Đó không phải là... việc hắn quyết định.",
						"thai": "นั่น... ไม่ใช่เรื่องที่เขาจะตัดสินใจ",
						"hindi": "यह... उसका फैसला करने का मामला नहीं है।"
					},
					"speaker": "amir",
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "amir",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "모든 문명이 결국 사라진다고? 그래서 아무것도 하지 말라는 건가?",
						"english": "All civilizations eventually disappear? So we should do nothing?",
						"japanese": "全ての文明はやがて消え去ると？だから何もするなというのか？",
						"chinese": "所有文明最终都会消失？所以我们什么都不该做？",
						"french": "Toutes les civilisations finissent par disparaître ? Alors on ne devrait rien faire ?",
						"spanish": "¿Todas las civilizaciones acaban desapareciendo? ¿Entonces no deberíamos hacer nada?",
						"vietnamese": "Tất cả các nền văn minh cuối cùng đều biến mất? Vậy chúng ta không nên làm gì sao?",
						"thai": "อารยธรรมทั้งหมดล้วนสูญหายไปในที่สุด? งั้นเราไม่ควรทำอะไรเลยงั้นหรือ?",
						"hindi": "सभी सभ्यताएँ अंततः गायब हो जाती हैं? तो क्या हमें कुछ नहीं करना चाहिए?"
					},
					"type": "speech",
					"speaker": "amir",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "이런 허무함…",
						"english": "This emptiness...",
						"japanese": "この虚しさ…",
						"chinese": "这种虚无……",
						"french": "Ce vide...",
						"spanish": "Este vacío...",
						"vietnamese": "Sự hư vô này...",
						"thai": "ความว่างเปล่านี้...",
						"hindi": "यह शून्यता..."
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "포기하지 않아. 우리의 선택이 옳다는 걸 보여줄 거야.",
						"english": "We won't give up. We'll show that our choice is right.",
						"japanese": "諦めない。私たちの選択が正しかったことを証明する。",
						"chinese": "我们不会放弃。我们会证明我们的选择是正确的。",
						"french": "Nous n'abandonnerons pas. Nous prouverons que notre choix est le bon.",
						"spanish": "No nos rendiremos. Demostraremos que nuestra elección es la correcta.",
						"vietnamese": "Chúng ta sẽ không bỏ cuộc. Chúng ta sẽ chứng minh lựa chọn của mình là đúng.",
						"thai": "เราจะไม่ยอมแพ้ เราจะแสดงให้เห็นว่าทางเลือกของเราถูกต้อง",
						"hindi": "हम हार नहीं मानेंगे। हम दिखाएंगे कि हमारी पसंद सही है।"
					},
					"speaker": "amir",
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "amir",
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "사막의 기운이 더욱 거세졌다. 더 이상 돌아갈 수 없는 길이다.",
						"english": "The desert's aura has grown stronger. This path is no longer one we can return from.",
						"japanese": "砂漠の気運がさらに強まった。もはや引き返せない道だ。",
						"chinese": "沙漠的气息愈发强烈。这条路已经无法回头。",
						"french": "L'aura du désert s'est intensifiée. Ce chemin est sans retour.",
						"spanish": "El aura del desierto se ha vuelto más fuerte. Este camino ya no tiene vuelta atrás.",
						"vietnamese": "Hơi thở của sa mạc đã mạnh hơn. Đây là con đường không thể quay lại.",
						"thai": "พลังของทะเลทรายรุนแรงขึ้น เส้นทางนี้ไม่มีทางหวนคืนแล้ว",
						"hindi": "रेगिस्तान का औरा और मजबूत हो गया है। यह ऐसा रास्ता है जहाँ से अब वापस नहीं लौटा जा सकता।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이제 알았어. 오르벨은… 사막 그 자체였어.",
						"english": "Now I understand. Orvel was… the desert itself.",
						"japanese": "ようやく分かった。オルベルは…砂漠そのものだったんだ。",
						"chinese": "我明白了。奥尔贝是……沙漠本身。",
						"french": "Maintenant je comprends. Orvel était… le désert lui-même.",
						"spanish": "Ahora lo entiendo. Orvel era… el desierto en sí.",
						"vietnamese": "Giờ tôi hiểu rồi. Orvel chính là… sa mạc.",
						"thai": "ตอนนี้ฉันเข้าใจแล้ว ออร์เวลคือ… ทะเลทรายเอง",
						"hindi": "अब मैं समझा। ऑर्वेल... स्वयं रेगिस्तान था।"
					},
					"speaker": "amir",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그럼 우린… 사막과 싸우는 건가?",
						"english": "So… are we fighting the desert?",
						"japanese": "じゃあ僕たちは…砂漠と戦うのか？",
						"chinese": "那我们……是在与沙漠作战吗？",
						"french": "Alors… nous combattons le désert ?",
						"spanish": "¿Así que… estamos luchando contra el desierto?",
						"vietnamese": "Vậy chúng ta… đang chiến đấu với sa mạc ư?",
						"thai": "งั้นพวกเรา… กำลังต่อสู้กับทะเลทรายเหรอ?",
						"hindi": "तो... क्या हम रेगिस्तान से लड़ रहे हैं?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "amir",
					"emotion": "angry",
					"content": {
						"korean": "그래. 우리의 방식으로.",
						"english": "Yes. In our own way.",
						"japanese": "ああ。俺たちのやり方で。",
						"chinese": "是的。用我们自己的方式。",
						"french": "Oui. À notre manière.",
						"spanish": "Sí. A nuestra manera.",
						"vietnamese": "Đúng vậy. Theo cách của chúng ta.",
						"thai": "ใช่ ด้วยวิธีของเราเอง",
						"hindi": "हाँ। अपने तरीके से।"
					}
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "…그래도… 너희의 선택을… 끝까지 지켜보겠다…",
						"english": "…Even so… I will watch… your choices… until the end…",
						"japanese": "…だが…お前たちの選択を…最後まで見届けよう…",
						"chinese": "……即便如此……我也会……一直关注你们的选择……",
						"french": "...Malgré tout… je veillerai… sur vos choix… jusqu'à la fin…",
						"spanish": "…Aun así… observaré… vuestras decisiones… hasta el final…",
						"vietnamese": "…Dù vậy… ta sẽ dõi theo… lựa chọn của các ngươi… đến cùng…",
						"thai": "…ถึงกระนั้น… ข้าจะคอยเฝ้าดู… การตัดสินใจของพวกเจ้า… จนกว่าจะถึงที่สุด…",
						"hindi": "...फिर भी... मैं तुम्हारी पसंद को... अंत तक देखता रहूँगा..."
					},
					"speaker": "boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 오르벨의 몸이 모래로 무너져 내렸다. 그 파괴 속에서 새로운 생명의 싹이 돋아났다.",
						"english": "The massive body of Orvel crumbled into sand. Amidst its destruction, new life began to sprout.",
						"japanese": "巨大なオルベルの体が砂となって崩れ落ちた。その破壊の中で、新たな生命の芽が吹き出した。",
						"chinese": "巨大的奥尔贝身体崩塌成沙。在那毁灭之中，新的生命萌芽了。",
						"french": "Le corps gigantesque d'Orvel s'effondra en sable. Au milieu de sa destruction, de nouvelles pousses de vie apparurent.",
						"spanish": "El gigantesco cuerpo de Orvel se desmoronó en arena. En medio de su destrucción, brotaron nuevas semillas de vida.",
						"vietnamese": "Cơ thể khổng lồ của Orvel sụp đổ thành cát. Trong sự hủy diệt đó, mầm sống mới đã nảy nở.",
						"thai": "ร่างมหึมาของออร์เวลพังทลายกลายเป็นผืนทราย ท่ามกลางการทำลายล้างนั้น ชีวิตใหม่ได้เริ่มผลิบาน",
						"hindi": "ऑर्वेल का विशाल शरीर रेत में ढह गया। उस विनाश के बीच, नए जीवन की कोंपलें फूट पड़ीं।"
					}
				},
				{
					"duration_ms": 500,
					"speaker": "amir",
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "amir",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…이건… 새로운 시작인가?",
						"english": "…Is this… a new beginning?",
						"japanese": "…これは…新しい始まりなのか？",
						"chinese": "……这是……一个新的开始吗？",
						"french": "...Est-ce… un nouveau départ ?",
						"spanish": "¿…Es esto… un nuevo comienzo?",
						"vietnamese": "…Đây có phải là… một khởi đầu mới không?",
						"thai": "…นี่คือ… การเริ่มต้นใหม่หรือเปล่า?",
						"hindi": "...क्या यह... एक नई शुरुआत है?"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "오르벨은… 변화를 지켜본 거였어?",
						"english": "Orvel was… observing the change?",
						"japanese": "オルベルは…変化を見守っていたのか？",
						"chinese": "奥尔贝……是在观察着变化吗？",
						"french": "Orvel… observait le changement ?",
						"spanish": "¿Orvel estaba… observando el cambio?",
						"vietnamese": "Orvel đã… quan sát sự thay đổi đó ư?",
						"thai": "ออร์เวล… เฝ้าดูการเปลี่ยนแปลงอยู่เหรอ?",
						"hindi": "ऑर्वेल... बदलाव को देख रहा था?"
					}
				},
				{
					"content": {
						"korean": "사막은 비로소… 숨을 쉬기 시작했다.",
						"english": "The desert finally… began to breathe.",
						"japanese": "砂漠はついに… 息をし始めた。",
						"chinese": "沙漠终于… 开始呼吸了。",
						"french": "Le désert… a enfin commencé à respirer.",
						"spanish": "El desierto… por fin empezó a respirar.",
						"vietnamese": "Sa mạc cuối cùng… đã bắt đầu thở.",
						"thai": "ในที่สุดทะเลทราย… ก็เริ่มหายใจ",
						"hindi": "रेगिस्तान ने आखिरकार… साँस लेना शुरू कर दिया।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "…어리석음은… 반복된다.",
						"english": "…Foolishness… repeats itself.",
						"japanese": "…愚かさは…繰り返される。",
						"chinese": "…愚蠢…周而复始。",
						"french": "…La folie… se répète.",
						"spanish": "…La necedad… se repite.",
						"vietnamese": "…Sự ngu dốt… lặp lại.",
						"thai": "…ความโง่เขลา…ย่อมซ้ำรอยเดิม",
						"hindi": "…मूढ़ता… दोहराई जाती है।"
					},
					"type": "speech",
					"speaker": "boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…아직… 끝나지 않았어.",
						"english": "…It's not… over yet.",
						"japanese": "…まだ…終わっていない。",
						"chinese": "…还没…结束。",
						"french": "…Ce n'est pas… encore fini.",
						"spanish": "…Aún… no ha terminado.",
						"vietnamese": "…Vẫn… chưa kết thúc.",
						"thai": "…ยัง…ไม่จบ",
						"hindi": "…अभी… खत्म नहीं हुआ है।"
					},
					"type": "speech",
					"speaker": "amir",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "우리는… 포기하지 않아!",
						"english": "We… won't give up!",
						"japanese": "私たちは…諦めない！",
						"chinese": "我们…不会放弃！",
						"french": "Nous… n'abandonnons pas !",
						"spanish": "¡Nosotros… no nos rendimos!",
						"vietnamese": "Chúng ta… không bỏ cuộc!",
						"thai": "เรา…จะไม่ยอมแพ้!",
						"hindi": "हम… हार नहीं मानेंगे!"
					}
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "…어리석은 존재들. 너희의 노력은… 결국 모래가 될 뿐이다.",
						"english": "…Foolish beings. Your efforts will… only turn to sand.",
						"japanese": "…愚かな存在よ。お前たちの努力は…結局砂となるだけだ。",
						"chinese": "……愚蠢的生物。你们的努力……终将化为沙尘。",
						"french": "...Êtres insensés. Vos efforts ne... feront que se transformer en sable.",
						"spanish": "…Seres necios. Vuestros esfuerzos… al final solo serán arena.",
						"vietnamese": "…Những kẻ ngu ngốc. Nỗ lực của các ngươi… cuối cùng cũng chỉ hóa thành cát bụi.",
						"thai": "…พวกเจ้าช่างโง่เขลา ความพยายามของพวกเจ้า… ก็จะกลายเป็นแค่ผืนทรายเท่านั้น",
						"hindi": "...मूर्ख प्राणी। तुम्हारे प्रयास... अंततः रेत में बदल जाएंगे।"
					},
					"speaker": "boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "증명해 보이겠어!",
						"english": "I'll prove it!",
						"japanese": "証明してみせる！",
						"chinese": "我会证明的！",
						"french": "Je le prouverai !",
						"spanish": "¡Lo demostraré!",
						"vietnamese": "Tôi sẽ chứng minh điều đó!",
						"thai": "ฉันจะพิสูจน์ให้ดู!",
						"hindi": "मैं इसे साबित करूँगा!"
					}
				},
				{
					"content": {
						"korean": "사막은… 변할 수 있어!",
						"english": "The desert… can change!",
						"japanese": "砂漠は…変われるんだ！",
						"chinese": "沙漠……是可以改变的！",
						"french": "Le désert… peut changer !",
						"spanish": "¡El desierto… puede cambiar!",
						"vietnamese": "Sa mạc… có thể thay đổi!",
						"thai": "ทะเลทราย… สามารถเปลี่ยนแปลงได้!",
						"hindi": "रेगिस्तान... बदल सकता है!"
					},
					"type": "speech",
					"speaker": "amir",
					"emotion": "angry"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"거대한 증인의 침묵이 영원히 깨졌다.",
			"그의 모래는 생명의 씨앗이 되어 사막에 스며들었다.",
			"변화는 시작되었다. 하지만 그 끝은 누구도 알 수 없었다.",
			"사막은 과거의 흔적을 품고, 새로운 미래를 품었다.",
			"구원이었을까, 혹은… 또 다른 시작이었을까."
		],
		"english": [
			"The great witness's silence was broken forever.",
			"His sands became seeds of life, seeping into the desert.",
			"Change had begun. But its end, none could foresee.",
			"The desert held traces of the past, embracing a new future.",
			"Was it salvation, or... just another beginning?"
		],
		"japanese": [
			"偉大な証人の沈黙は永遠に破られた。",
			"彼の砂は生命の種となり、砂漠に染み渡った。",
			"変化は始まった。しかし、その終わりを誰も知る由もなかった。",
			"砂漠は過去の痕跡を抱き、新たな未来を宿した。",
			"それは救済だったのか、あるいは…また別の始まりだったのか。"
		],
		"chinese": [
			"伟大证人的沉默被永远打破了。",
			"它的沙子化作生命的种子，渗透进沙漠。",
			"变革已然开始。然而，其结局无人能预料。",
			"沙漠承载着过去的痕迹，也孕育着新的未来。",
			"这是救赎吗，抑或……是另一个开始？"
		],
		"french": [
			"Le silence du grand témoin fut brisé à jamais.",
			"Ses sables devinrent des graines de vie, s'infiltrant dans le désert.",
			"Le changement avait commencé. Mais sa fin, nul ne pouvait la prévoir.",
			"Le désert portait les traces du passé, et embrassait un nouvel avenir.",
			"Était-ce le salut, ou… un autre commencement ?"
		],
		"spanish": [
			"El silencio del gran testigo se rompió para siempre.",
			"Sus arenas se convirtieron en semillas de vida, filtrándose en el desierto.",
			"El cambio había comenzado. Pero su fin, nadie podía preverlo.",
			"El desierto guardaba las huellas del pasado, abrazando un nuevo futuro.",
			"¿Fue salvación, o... solo otro comienzo?"
		],
		"vietnamese": [
			"Sự im lặng của nhân chứng vĩ đại đã bị phá vỡ mãi mãi.",
			"Cát của ông ta trở thành hạt giống sự sống, thấm sâu vào sa mạc.",
			"Sự thay đổi đã bắt đầu. Nhưng kết cục của nó, không ai có thể biết.",
			"Sa mạc ôm ấp dấu vết của quá khứ, và một tương lai mới.",
			"Đó là sự cứu rỗi, hay… chỉ là một khởi đầu khác?"
		],
		"thai": [
			"ความเงียบงันของพยานผู้ยิ่งใหญ่ถูกทำลายลงชั่วนิรันดร์",
			"ผืนทรายของเขาได้กลายเป็นเมล็ดพันธุ์แห่งชีวิต ซึมซาบเข้าสู่ทะเลทราย",
			"การเปลี่ยนแปลงได้เริ่มต้นขึ้น แต่จุดจบของมัน ไม่มีใครล่วงรู้ได้",
			"ทะเลทรายกอดรอยอดีตไว้ พร้อมโอบรับอนาคตใหม่",
			"นั่นคือความรอด หรือ... เป็นเพียงจุดเริ่มต้นอีกครั้ง?"
		],
		"hindi": [
			"महान गवाह की चुप्पी हमेशा के लिए टूट गई।",
			"उसकी रेत जीवन के बीज बन गई, रेगिस्तान में समा गई।",
			"परिवर्तन शुरू हो गया था। लेकिन उसका अंत, कोई नहीं जानता था।",
			"रेगिस्तान ने अतीत के निशान संजोए रखे, एक नए भविष्य को गले लगाते हुए।",
			"क्या यह मोक्ष था, या... सिर्फ एक और शुरुआत?"
		]
	},
	"prologue": {
		"korean": [
			"모래의 심장부, 고대의 증인이 기다린다.",
			"수많은 문명이 사라지는 것을 그는 침묵으로 지켜보았다.",
			"우리의 변화 시도는 그에게 한낱 '무의미한 저항'.",
			"그러나 우리는 증명해야만 한다. 사막의 운명은 우리가 선택한다고."
		],
		"english": [
			"Heart of the sand, an ancient witness awaits.",
			"He watched countless civilizations vanish in silence.",
			"Our attempts at change were, to him, mere 'meaningless resistance'.",
			"But we must prove: the desert's fate is ours to choose."
		],
		"japanese": [
			"砂の中心、古の証人が待つ。",
			"彼は無数の文明が静かに消えるのを見届けた。",
			"我々の変化の試みは、彼にとっては単なる「無意味な抵抗」だった。",
			"しかし、我々は証明しなければならない。砂漠の運命は我々が選ぶと。"
		],
		"chinese": [
			"沙之心，古老证人在此等候。",
			"他沉默地见证了无数文明的消逝。",
			"对它而言，我们改变的尝试不过是“毫无意义的抵抗”。",
			"但我们必须证明，沙漠的命运由我们选择。"
		],
		"french": [
			"Au cœur du sable, un ancien témoin attend.",
			"Il a vu d'innombrables civilisations disparaître en silence.",
			"Nos tentatives de changement n'étaient, pour lui, qu'une 'résistance futile'.",
			"Mais nous devons prouver : le destin du désert est notre choix."
		],
		"spanish": [
			"En el corazón de la arena, un testigo antiguo aguarda.",
			"Observó innumerables civilizaciones desvanecerse en silencio.",
			"Nuestros intentos de cambio fueron, para él, 'resistencia sin sentido'.",
			"Pero debemos probar: el destino del desierto es nuestro."
		],
		"vietnamese": [
			"Trái tim của cát, một nhân chứng cổ đại đang chờ đợi.",
			"Ông ta đã chứng kiến vô số nền văn minh biến mất trong im lặng.",
			"Đối với ông ta, nỗ lực thay đổi của chúng ta chỉ là 'sự kháng cự vô nghĩa'.",
			"Nhưng chúng ta phải chứng minh: số phận sa mạc là do chúng ta lựa chọn."
		],
		"thai": [
			"ใจกลางแห่งผืนทราย พยานโบราณรอคอยอยู่",
			"เขามองดูอารยธรรมนับไม่ถ้วนเลือนหายไปอย่างเงียบงัน",
			"ความพยายามเปลี่ยนแปลงของเราเป็นเพียง 'การต่อต้านที่ไร้ความหมาย' ในสายตาของเขา",
			"แต่เราต้องพิสูจน์ว่า ชะตากรรมของทะเลทรายนั้น เราเป็นผู้เลือก"
		],
		"hindi": [
			"रेत के हृदय में, एक प्राचीन गवाह प्रतीक्षा कर रहा है।",
			"उसने अनगिनत सभ्यताओं को खामोशी से गायब होते देखा।",
			"हमारे परिवर्तन के प्रयास उसके लिए केवल 'अर्थहीन प्रतिरोध' थे।",
			"लेकिन हमें यह साबित करना होगा: रेगिस्तान का भाग्य हमारा चुना हुआ है।"
		]
	}
} as const;
