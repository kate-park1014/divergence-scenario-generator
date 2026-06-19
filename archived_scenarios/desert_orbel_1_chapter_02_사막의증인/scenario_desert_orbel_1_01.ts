export const scenario_desert_orbel_1_01 = {
	"scenario_id": "desert_orbel_1_01",
	"order": 1,
	"act": "intro",
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
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"끝없이 펼쳐진 모래의 바다. 그 심장부에 감춰진 비밀.",
			"탐험대 리더 아미르는 새로운 문명을 꿈꿨다.",
			"사막의 모든 것을 아는 존재, '오르벨'과의 조우가 시작된다.",
			"그는 침묵했지만, 그 침묵은 거대한 메시지를 품고 있었다."
		],
		"english": [
			"An endless sea of sand. A secret hidden deep within its heart.",
			"Amir, leader of the expedition, dreamt of a new civilization.",
			"The encounter with 'Orvel', the one who knows all about the desert, begins.",
			"He was silent, but his silence held a profound message."
		],
		"japanese": [
			"果てしなく広がる砂の海。その心臓部に隠された秘密。",
			"探検隊リーダー、アミールは新しい文明を夢見ていた。",
			"砂漠のすべてを知る存在、「オルベル」との遭遇が始まる。",
			"彼は沈黙していたが、その沈黙は巨大なメッセージを秘めていた。"
		],
		"chinese": [
			"一望无际的沙海。隐藏在其心脏深处的秘密。",
			"探险队队长阿米尔梦想着一个新的文明。",
			"与知晓沙漠一切的存在“奥尔维尔”的相遇开始了。",
			"他沉默不语，但那沉默蕴含着巨大的信息。"
		],
		"french": [
			"Une mer de sable infinie. Un secret caché en son cœur.",
			"Amir, chef de l'expédition, rêvait d'une nouvelle civilisation.",
			"La rencontre avec 'Orvel', l'être qui connaît tout du désert, commence.",
			"Il était silencieux, mais son silence portait un message immense."
		],
		"spanish": [
			"Un mar de arena infinito. Un secreto oculto en su corazón.",
			"Amir, líder de la expedición, soñaba con una nueva civilización.",
			"Comienza el encuentro con 'Orvel', el ser que conoce todo del desierto.",
			"Él guardaba silencio, pero su silencio contenía un mensaje inmenso."
		],
		"vietnamese": [
			"Biển cát vô tận. Một bí mật ẩn sâu trong lòng nó.",
			"Amir, thủ lĩnh đoàn thám hiểm, mơ về một nền văn minh mới.",
			"Cuộc gặp gỡ với 'Orvel', kẻ biết mọi thứ về sa mạc, bắt đầu.",
			"Anh ta im lặng, nhưng sự im lặng đó chứa đựng một thông điệp vĩ đại."
		],
		"thai": [
			"ทะเลทรายอันกว้างใหญ่ไร้ขอบเขต. ความลับที่ซ่อนอยู่ในใจกลาง.",
			"อาเมียร์ ผู้นำคณะสำรวจ ฝันถึงอารยธรรมใหม่.",
			"การเผชิญหน้ากับ 'ออร์เวล' ผู้รู้ทุกสิ่งในทะเลทราย ได้เริ่มต้นขึ้น.",
			"เขาเงียบงัน แต่ความเงียบนั้นแฝงไว้ด้วยข้อความอันยิ่งใหญ่."
		],
		"hindi": [
			"रेत का अंतहीन सागर। उसके हृदय में छिपा एक रहस्य।",
			"अभियान के नेता अमीर ने एक नई सभ्यता का सपना देखा।",
			"रेगिस्तान के बारे में सब कुछ जानने वाले 'ओरवेल' से मुठभेड़ शुरू होती है।",
			"वह चुप था, लेकिन उसकी खामोशी में एक विशाल संदेश छिपा था।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "끝없이 펼쳐진 모래의 바다. 탐험대는 사막의 심장부로 진입했다.",
						"english": "An endless sea of sand. The expedition entered the heart of the desert.",
						"japanese": "果てしなく広がる砂の海。探検隊は砂漠の心臓部へと進入した。",
						"chinese": "一望无际的沙海。探险队进入了沙漠的深处。",
						"french": "Une mer de sable infinie. L'expédition est entrée au cœur du désert.",
						"spanish": "Un mar de arena infinito. La expedición entró en el corazón del desierto.",
						"vietnamese": "Biển cát vô tận. Đoàn thám hiểm đã tiến vào trung tâm sa mạc.",
						"thai": "ทะเลทรายอันกว้างใหญ่ไร้ขอบเขต. คณะสำรวจได้เข้าสู่ใจกลางทะเลทราย.",
						"hindi": "रेत का अंतहीन सागर। अभियान दल रेगिस्तान के हृदय में प्रवेश कर गया।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "여기가… 사막의 끝인가?",
						"english": "Is this... the end of the desert?",
						"japanese": "ここが… 砂漠の果てか？",
						"chinese": "这里是… 沙漠的尽头吗？",
						"french": "C'est... la fin du désert ?",
						"spanish": "¿Es esto... el fin del desierto?",
						"vietnamese": "Đây là… cuối sa mạc sao?",
						"thai": "ที่นี่คือ... สุดขอบทะเลทรายแล้วหรือ?",
						"hindi": "क्या यह... रेगिस्तान का अंत है?"
					}
				},
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "amir"
				},
				{
					"type": "speech",
					"speaker": "amir",
					"content": {
						"korean": "아니. 이제 시작이야.",
						"english": "No. It's just the beginning.",
						"japanese": "いや。まだ始まったばかりだ。",
						"chinese": "不。这才刚开始。",
						"french": "Non. Ce n'est que le début.",
						"spanish": "No. Esto es solo el principio.",
						"vietnamese": "Không. Mới chỉ là bắt đầu thôi.",
						"thai": "ไม่ใช่. นี่เพิ่งจะเริ่มต้น.",
						"hindi": "नहीं। यह तो बस शुरुआत है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "저건… 뭐야?",
						"english": "What is that...?",
						"japanese": "あれは… 何だ？",
						"chinese": "那是什么…？",
						"french": "Qu'est-ce que c'est... ?",
						"spanish": "¿Qué es eso...?",
						"vietnamese": "Đó là… cái gì?",
						"thai": "นั่น... อะไรน่ะ?",
						"hindi": "वह क्या है...?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 모래 언덕 사이에 반쯤 파묻힌 채 침묵하는 존재. 오르벨이었다.",
						"english": "A silent being, half-buried between colossal sand dunes. It was Orvel.",
						"japanese": "巨大な砂丘の間に半分埋もれ、沈黙する存在。オルベルだった。",
						"chinese": "一个半埋在巨大沙丘之间，沉默不语的存在。那是奥尔维尔。",
						"french": "Un être silencieux, à moitié enfoui entre des dunes colossales. C'était Orvel.",
						"spanish": "Un ser silencioso, medio enterrado entre dunas colosales. Era Orvel.",
						"vietnamese": "Một sinh vật im lặng, nửa chôn vùi giữa những cồn cát khổng lồ. Đó là Orvel.",
						"thai": "สิ่งมีชีวิตที่เงียบงัน กึ่งฝังอยู่ระหว่างเนินทรายขนาดมหึมา. มันคือออร์เวล.",
						"hindi": "एक विशाल रेत के टीलों के बीच आधा दबा हुआ एक शांत प्राणी। वह ओरवेल था।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "amir",
					"content": {
						"korean": "느껴져… 뭔가 다른 게.",
						"english": "I feel... something different.",
						"japanese": "感じる… 何か違うものを。",
						"chinese": "我感觉到… 有些不同寻常的东西。",
						"french": "Je ressens... quelque chose de différent.",
						"spanish": "Siento... algo diferente.",
						"vietnamese": "Tôi cảm thấy… có gì đó khác lạ.",
						"thai": "ฉันรู้สึกได้... บางสิ่งที่แตกต่างออกไป.",
						"hindi": "मुझे महसूस होता है... कुछ अलग।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "미동도 없어. 그냥 거대한 돌덩이 같아.",
						"english": "No movement. Just like a giant rock.",
						"japanese": "微動だにしない。ただの巨大な岩のようだ。",
						"chinese": "一动不动。就像一块巨大的石头。",
						"french": "Aucun mouvement. On dirait juste un rocher géant.",
						"spanish": "Sin movimiento. Parece solo una roca gigante.",
						"vietnamese": "Không chút lay động. Cứ như một tảng đá khổng lồ vậy.",
						"thai": "ไม่มีการเคลื่อนไหวเลย เหมือนแค่ก้อนหินยักษ์",
						"hindi": "कोई हलचल नहीं। बस एक विशाल चट्टान जैसा。"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "amir",
					"content": {
						"korean": "돌덩이가 아니야. 사막 그 자체의 의지일지도 몰라.",
						"english": "It's not a rock. It might be the desert's own will.",
						"japanese": "岩じゃない。砂漠そのものの意思なのかも。",
						"chinese": "这不是石头。也许是沙漠本身的意志。",
						"french": "Ce n'est pas un rocher. C'est peut-être la volonté du désert lui-même.",
						"spanish": "No es una roca. Podría ser la voluntad del desierto mismo.",
						"vietnamese": "Không phải đá đâu. Có thể đó là ý chí của chính sa mạc.",
						"thai": "ไม่ใช่ก้อนหิน อาจเป็นเจตจำนงของทะเลทรายเอง",
						"hindi": "यह कोई चट्टान नहीं है। यह शायद रेगिस्तान की अपनी इच्छा है।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "amir",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "amir",
					"content": {
						"korean": "오르벨의 존재는… 우리가 생각하는 것 이상이야.",
						"english": "Orvelle's existence... is beyond what we imagine.",
						"japanese": "オルベルの存在は… 私たちが考える以上だ。",
						"chinese": "奥尔维尔的存在… 超乎我们想象。",
						"french": "L'existence d'Orvelle... dépasse notre imagination.",
						"spanish": "La existencia de Orvelle... está más allá de lo que imaginamos.",
						"vietnamese": "Sự tồn tại của Orvelle… vượt xa những gì chúng ta nghĩ.",
						"thai": "การมีอยู่ของออร์เวลล์... เกินกว่าที่เราคิด",
						"hindi": "ऑर्वेल का अस्तित्व... हमारी सोच से भी परे है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "이 사막 전체가 그에게 반응하는 것 같아.",
						"english": "This entire desert seems to react to him.",
						"japanese": "この砂漠全体が、彼に反応しているようだ。",
						"chinese": "这整个沙漠似乎都在对他作出反应。",
						"french": "Ce désert entier semble réagir à sa présence.",
						"spanish": "Todo este desierto parece reaccionar a él.",
						"vietnamese": "Cả sa mạc này dường như đang phản ứng với anh ta.",
						"thai": "ทะเลทรายทั้งหมดนี้ดูเหมือนจะตอบสนองต่อเขา",
						"hindi": "यह पूरा रेगिस्तान उसे प्रतिक्रिया दे रहा है।"
					}
				},
				{
					"type": "speech",
					"speaker": "amir",
					"content": {
						"korean": "맞아. 우리가 이곳을 바꾸려 할 때마다 사막은 조용히 저항하고 있어.",
						"english": "Right. Every time we try to change this place, the desert silently resists.",
						"japanese": "そうだ。私たちがここを変えようとするたびに、砂漠は静かに抵抗している。",
						"chinese": "没错。每当我们试图改变这里时，沙漠都在默默抵抗。",
						"french": "Exact. Chaque fois que nous essayons de changer cet endroit, le désert résiste silencieusement.",
						"spanish": "Cierto. Cada vez que intentamos cambiar este lugar, el desierto resiste silenciosamente.",
						"vietnamese": "Đúng vậy. Mỗi khi chúng ta cố gắng thay đổi nơi này, sa mạc lại lặng lẽ kháng cự.",
						"thai": "ใช่แล้ว ทุกครั้งที่เราพยายามเปลี่ยนที่นี่ ทะเลทรายก็ต่อต้านอย่างเงียบๆ",
						"hindi": "सही है। जब भी हम इस जगह को बदलने की कोशिश करते हैं, रेगिस्तान खामोशी से विरोध करता है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "그럼… 우리의 목표는 너무 거창한 건가?",
						"english": "Then... is our goal too grand?",
						"japanese": "じゃあ… 私たちの目標は、あまりに壮大すぎるのか？",
						"chinese": "那么… 我们的目标是不是太宏大了？",
						"french": "Alors... notre objectif est-il trop ambitieux ?",
						"spanish": "¿Entonces... nuestro objetivo es demasiado ambicioso?",
						"vietnamese": "Vậy thì… mục tiêu của chúng ta có quá lớn lao không?",
						"thai": "ถ้าอย่างนั้น... เป้าหมายของเรามันยิ่งใหญ่เกินไปหรือเปล่า?",
						"hindi": "तो... क्या हमारा लक्ष्य बहुत बड़ा है?"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "amir",
					"content": {
						"korean": "아니. 그 의지를 이해하고, 새로운 생명을 불어넣는 것. 그게 우리의 임무다.",
						"english": "No. Our mission is to understand that will and breathe new life into it.",
						"japanese": "いや。その意思を理解し、新たな命を吹き込むこと。それが私たちの任務だ。",
						"chinese": "不。理解那份意志，并注入新的生命。那是我们的任务。",
						"french": "Non. Notre mission est de comprendre cette volonté et d'y insuffler une nouvelle vie.",
						"spanish": "No. Nuestra misión es entender esa voluntad e insuflarle nueva vida.",
						"vietnamese": "Không. Hiểu ý chí đó và thổi luồng sinh khí mới vào đó. Đó là nhiệm vụ của chúng ta.",
						"thai": "ไม่ ภารกิจของเราคือการเข้าใจเจตจำนงนั้นและมอบชีวิตใหม่ให้มัน",
						"hindi": "नहीं। उस इच्छा को समझना और उसमें नया जीवन डालना। यही हमारा मिशन है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "amir",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "사막은… 모든 것을 삼키는군. 과거의 흔적조차.",
						"english": "The desert... swallows everything. Even traces of the past.",
						"japanese": "砂漠は… 全てを飲み込むな。過去の痕跡さえも。",
						"chinese": "沙漠… 吞噬一切。甚至连过去的痕迹。",
						"french": "Le désert... engloutit tout. Même les traces du passé.",
						"spanish": "El desierto... lo traga todo. Incluso las huellas del pasado.",
						"vietnamese": "Sa mạc… nuốt chửng mọi thứ. Ngay cả dấu vết của quá khkhứ.",
						"thai": "ทะเลทราย... กลืนกินทุกสิ่ง แม้แต่ร่องรอยของอดีต",
						"hindi": "रेगिस्तान... सब कुछ निगल जाता है। यहां तक कि अतीत के निशान भी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "amir",
					"content": {
						"korean": "그래. 시간조차 무력하게 만드는 곳.",
						"english": "Yes. A place that renders even time powerless.",
						"japanese": "そう。時間さえも無力にする場所だ。",
						"chinese": "没错。一个让时间都变得无力的地方。",
						"french": "Oui. Un endroit qui rend même le temps impuissant.",
						"spanish": "Sí. Un lugar que deja al tiempo sin poder.",
						"vietnamese": "Đúng vậy. Một nơi khiến ngay cả thời gian cũng trở nên bất lực.",
						"thai": "ใช่ ที่ที่ทำให้แม้แต่เวลาก็ไร้พลัง",
						"hindi": "हाँ। एक ऐसी जगह जो समय को भी शक्तिहीन बना देती है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_3",
					"content": {
						"korean": "저 오르벨은 왜 아무것도 하지 않는 걸까요?",
						"english": "Why doesn't that Orvelle do anything?",
						"japanese": "あのオルベルは、なぜ何も行動しないのだろう？",
						"chinese": "那个奥尔维尔为什么什么都不做呢？",
						"french": "Pourquoi cet Orvelle ne fait-il rien ?",
						"spanish": "¿Por qué ese Orvelle no hace nada?",
						"vietnamese": "Tại sao Orvelle đó không làm gì cả?",
						"thai": "ทำไมออร์เวลล์นั่นถึงไม่ทำอะไรเลย?",
						"hindi": "वह ऑर्वेल कुछ क्यों नहीं करता?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "amir",
					"content": {
						"korean": "그는 관찰자이자 증인. 모든 시간의 흐름을 지켜봐 왔을 거야.",
						"english": "He is an observer and a witness. He must have watched the flow of all time.",
						"japanese": "彼は観測者であり証人。すべての時間の流れを見守ってきたのだろう。",
						"chinese": "他是观察者也是证人。想必他一直注视着时间的流逝。",
						"french": "Il est l'observateur et le témoin. Il a dû veiller sur le cours du temps.",
						"spanish": "Es un observador y un testigo. Debe haber presenciado el flujo de todo el tiempo.",
						"vietnamese": "Hắn là kẻ quan sát và là nhân chứng. Chắc hẳn hắn đã chứng kiến dòng chảy của mọi thời gian.",
						"thai": "เขาคือผู้สังเกตการณ์และพยาน เขาคงเฝ้ามองกระแสเวลาทั้งหมดมาแล้ว",
						"hindi": "वह एक पर्यवेक्षक और गवाह है। उसने सभी समय के प्रवाह को देखा होगा।"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "갑작스러운 모래폭풍이 탐험대를 덮쳤다. 정체 모를 그림자가 어둠 속에서 나타났다.",
						"english": "A sudden sandstorm engulfed the expedition. An unknown shadow emerged from the darkness.",
						"japanese": "突然の砂嵐が探検隊を襲った。正体不明の影が闇の中から現れた。",
						"chinese": "突如其来的沙尘暴吞没了探险队。不明身影从黑暗中浮现。",
						"french": "Une tempête de sable soudaine a englouti l'expédition. Une ombre inconnue est apparue des ténèbres.",
						"spanish": "Una tormenta de arena repentina envolvió a la expedición. Una sombra desconocida emergió de la oscuridad.",
						"vietnamese": "Một trận bão cát bất ngờ ập đến đội thám hiểm. Một bóng đen vô danh xuất hiện từ trong bóng tối.",
						"thai": "พายุทรายที่กะทันหันพัดเข้าปกคลุมคณะสำรวจ เงาลึกลับปรากฏขึ้นจากความมืด",
						"hindi": "एक अचानक रेतीले तूफान ने अभियान को घेर लिया। अंधेरे से एक अज्ञात छाया उभरी।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "침입자들… 사막의 질서를 거스르려는가.",
						"english": "Intruders... Do you defy the order of the desert?",
						"japanese": "侵入者たち… 砂漠の秩序に逆らうというのか。",
						"chinese": "入侵者……你们想违抗沙漠的秩序吗？",
						"french": "Intruses... Osez-vous défier l'ordre du désert ?",
						"spanish": "Intrusos... ¿Desafiáis el orden del desierto?",
						"vietnamese": "Những kẻ xâm nhập… Các ngươi muốn chống lại trật tự của sa mạc sao?",
						"thai": "ผู้บุกรุก... พวกเจ้าจะท้าทายระเบียบของทะเลทรายงั้นหรือ?",
						"hindi": "घुसपैठिए... क्या तुम रेगिस्तान के नियम का उल्लंघन कर रहे हो?"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "amir",
					"content": {
						"korean": "네가 이 사막의 수호자냐?",
						"english": "Are you the guardian of this desert?",
						"japanese": "お前がこの砂漠の守護者か？",
						"chinese": "你是这片沙漠的守护者吗？",
						"french": "Es-tu le gardien de ce désert ?",
						"spanish": "¿Eres el guardián de este desierto?",
						"vietnamese": "Ngươi là người bảo vệ sa mạc này sao?",
						"thai": "เจ้าคือผู้พิทักษ์ของทะเลทรายนี้หรือ?",
						"hindi": "क्या तुम इस रेगिस्तान के संरक्षक हो?"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "amir",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "수호자? 난 그저… 이 끝없는 시간을 지키는 자.",
						"english": "Guardian? I am merely... the one who guards this endless time.",
						"japanese": "守護者？ 私はただ… この終わりのない時間を守る者。",
						"chinese": "守护者？我只是……守护这无尽时间的人。",
						"french": "Gardien ? Je ne suis que... celui qui veille sur ce temps infini.",
						"spanish": "¿Guardián? Simplemente soy... el que custodia este tiempo interminable.",
						"vietnamese": "Người bảo vệ? Ta chỉ là… kẻ canh giữ dòng thời gian vô tận này.",
						"thai": "ผู้พิทักษ์รึ? ข้าก็แค่... ผู้ที่เฝ้าระวังเวลาอันไม่สิ้นสุดนี้",
						"hindi": "संरक्षक? मैं बस... वह हूँ जो इस अनंत समय की रक्षा करता है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "끝없는 시간이라니… 무슨 소리야.",
						"english": "Endless time... What do you mean?",
						"japanese": "終わりのない時間だと… どういうことだ。",
						"chinese": "无尽的时间……什么意思？",
						"french": "Un temps infini... Que veux-tu dire ?",
						"spanish": "¿Tiempo interminable...? ¿Qué quieres decir?",
						"vietnamese": "Thời gian vô tận… Ngươi nói gì vậy?",
						"thai": "เวลาอันไม่สิ้นสุด... หมายความว่าอย่างไร?",
						"hindi": "अनंत समय... तुम्हारा क्या मतलब है?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "너희의 발자국은 곧 지워질 모래 위의 흔적일 뿐.",
						"english": "Your footsteps are merely traces on the sand that will soon be erased.",
						"japanese": "お前たちの足跡は、いずれ消える砂の上の痕跡に過ぎない。",
						"chinese": "你们的足迹不过是沙上痕迹，很快就会被抹去。",
						"french": "Vos pas ne sont que des traces sur le sable qui seront bientôt effacées.",
						"spanish": "Vuestras pisadas son solo huellas en la arena que pronto se borrarán.",
						"vietnamese": "Dấu chân của các ngươi chỉ là vết tích trên cát sẽ sớm bị xóa mờ.",
						"thai": "รอยเท้าของพวกเจ้าเป็นเพียงร่องรอยบนผืนทรายที่จะถูกลบเลือนไปในไม่ช้า",
						"hindi": "तुम्हारे पदचिन्ह रेत पर मात्र निशान हैं जो जल्द ही मिट जाएंगे।"
					}
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "우리는 흔적을 남기기 위해 온 게 아니다. 새로운 길을 만들러 왔다.",
						"english": "We didn't come to leave traces. We came to forge a new path.",
						"japanese": "我々は痕跡を残しに来たのではない。新たな道を作るために来たのだ。",
						"chinese": "我们不是来留下痕迹的。我们是来开辟新道路的。",
						"french": "Nous ne sommes pas venus laisser des traces. Nous sommes venus tracer un nouveau chemin.",
						"spanish": "No hemos venido a dejar huellas. Hemos venido a crear un nuevo camino.",
						"vietnamese": "Chúng tôi không đến để lại dấu vết. Chúng tôi đến để tạo ra một con đường mới.",
						"thai": "เราไม่ได้มาเพื่อทิ้งร่องรอย แต่เรามาเพื่อสร้างเส้นทางใหม่",
						"hindi": "हम निशान छोड़ने नहीं आए हैं। हम एक नया रास्ता बनाने आए हैं।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "허락할 수 없다. 이 사막은… 아무것도 변화시키지 않을 것이다.",
						"english": "I cannot allow it. This desert... will change nothing.",
						"japanese": "許すことはできない。この砂漠は… 何も変えさせない。",
						"chinese": "绝不允许。这片沙漠……将不会改变任何事物。",
						"french": "Je ne peux pas le permettre. Ce désert... ne changera rien.",
						"spanish": "No puedo permitirlo. Este desierto... no cambiará nada.",
						"vietnamese": "Không thể cho phép. Sa mạc này… sẽ không thay đổi bất cứ điều gì.",
						"thai": "ข้าไม่อาจยอมได้ ทะเลทรายแห่งนี้... จะไม่เปลี่ยนแปลงสิ่งใดเลย",
						"hindi": "मैं इसकी अनुमति नहीं दे सकता। यह रेगिस्तान... कुछ भी नहीं बदलेगा।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 {random_boss}의 그림자가 탐험대를 압도했다. 싸움은 피할 수 없었다.",
						"english": "The shadow of the colossal {random_boss} overwhelmed the expedition. A fight was inevitable.",
						"japanese": "巨大な{random_boss}の影が探検隊を圧倒した。戦いは避けられなかった。",
						"chinese": "巨大的{random_boss}之影压倒了探险队。战斗不可避免。",
						"french": "L'ombre du colossal {random_boss} a submergé l'expédition. Le combat était inévitable.",
						"spanish": "La sombra del colosal {random_boss} abrumó a la expedición. La lucha era inevitable.",
						"vietnamese": "Bóng của {random_boss} khổng lồ đã áp đảo đội thám hiểm. Cuộc chiến là không thể tránh khỏi.",
						"thai": "เงาของ {random_boss} ยักษ์ใหญ่ได้เข้าครอบงำคณะสำรวจ การต่อสู้เป็นสิ่งที่หลีกเลี่ยงไม่ได้",
						"hindi": "विशाल {random_boss} की छाया ने अभियान को अभिभूत कर दिया। लड़ाई अपरिहार्य थी।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "겨우… 이 정도인가. 너희의 의지는 모래바람에도 스러질 미약한 것.",
						"english": "Is this all…? Your will is a faint thing, easily scattered by a sandstorm.",
						"japanese": "たった…これだけか。お前たちの意志は、砂嵐にも消え去るような微弱なものだ。",
						"chinese": "就…到此为止了吗？你们的意志，脆弱得连沙尘暴都能将其吞噬。",
						"french": "Ce n'est… que ça ? Votre volonté est une chose si faible, balayée par une simple tempête de sable.",
						"spanish": "¿Solo… esto? Vuestra voluntad es algo tan débil, que se desvanecerá con el viento de arena.",
						"vietnamese": "Chỉ… có vậy thôi sao? Ý chí của các ngươi thật yếu ớt, dễ dàng tan biến trong một cơn bão cát.",
						"thai": "แค่นี้เองรึ… ความตั้งใจของพวกเจ้าช่างอ่อนแอราวกับจะสลายไปในพายุทราย",
						"hindi": "बस… इतना ही? तुम्हारी इच्छाशक्ति इतनी क्षीण है कि वह रेत के तूफान में भी बिखर जाएगी।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "amir",
					"content": {
						"korean": "…아니. 우리는… 포기하지 않아.",
						"english": "...No. We... will not give up.",
						"japanese": "…いや。我々は…諦めない。",
						"chinese": "…不。我们…不会放弃。",
						"french": "...Non. Nous... n'abandonnerons pas.",
						"spanish": "...No. Nosotros... no nos rendiremos.",
						"vietnamese": "...Không. Chúng tôi... sẽ không bỏ cuộc.",
						"thai": "...ไม่ เรา... จะไม่ยอมแพ้",
						"hindi": "...नहीं। हम... हार नहीं मानेंगे।"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 발버둥… 다음엔 더 빨리 사라질 것이다.",
						"english": "Futile struggle... Next time, you'll vanish even quicker.",
						"japanese": "無駄な足掻き… 次はもっと早く消えるだろう。",
						"chinese": "徒劳的挣扎… 下次会消失得更快。",
						"french": "Lutte futile… La prochaine fois, vous disparaîtrez encore plus vite.",
						"spanish": "Lucha inútil… La próxima vez, desapareceréis aún más rápido.",
						"vietnamese": "Cuộc vùng vẫy vô ích… Lần tới, ngươi sẽ biến mất nhanh hơn nữa.",
						"thai": "การดิ้นรนที่ไร้ประโยชน์... ครั้งหน้าจะหายไปเร็วกว่านี้อีก",
						"hindi": "तुच्छ संघर्ष… अगली बार और तेज़ी से गायब हो जाओगे।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "마침내 오르벨의 심장부. 그곳에서 {random_boss}가 기다리고 있었다.",
						"english": "Finally, in the heart of Orvel. There, {random_boss} awaited.",
						"japanese": "ついにオルベルの心臓部。そこで{random_boss}が待っていた。",
						"chinese": "终于来到了奥尔维尔的心脏地带。{random_boss}正在那里等候。",
						"french": "Enfin, au cœur d'Orvel. Là, {random_boss} attendait.",
						"spanish": "Finalmente, en el corazón de Orvel. Allí, {random_boss} esperaba.",
						"vietnamese": "Cuối cùng, tại trung tâm Orvel. {random_boss} đang chờ đợi ở đó.",
						"thai": "ในที่สุดก็มาถึงใจกลางของออร์เวลล์ ที่นั่น {random_boss} กำลังรออยู่",
						"hindi": "अंततः, ओर्बेल के हृदय में। वहाँ, {random_boss} प्रतीक्षा कर रहा था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "여기까지 온 것을 칭찬해야 하나… 어리석음을 비웃어야 하나.",
						"english": "Should I commend you for coming this far… or mock your foolishness?",
						"japanese": "ここまで来たことを称賛すべきか…それとも愚かさを嘲笑すべきか。",
						"chinese": "是该赞扬你走到这里…还是嘲笑你的愚蠢？",
						"french": "Dois-je vous féliciter d'être arrivé si loin… ou me moquer de votre folie ?",
						"spanish": "¿Debo alabaros por haber llegado tan lejos… o burlarme de vuestra estupidez?",
						"vietnamese": "Ta nên khen ngợi ngươi vì đã đến được đây… hay cười nhạo sự ngu ngốc của ngươi?",
						"thai": "ควรจะชมเชยที่เจ้ามาได้ไกลถึงเพียงนี้… หรือจะเย้ยหยันความโง่เขลาของเจ้าดี?",
						"hindi": "क्या मैं तुम्हारी इतनी दूर तक आने की प्रशंसा करूँ… या तुम्हारी मूर्खता का उपहास करूँ?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "우리가 어리석다면, 이 사막은 영원히 침묵할 뿐이다.",
						"english": "If we are foolish, this desert will only remain silent forever.",
						"japanese": "我々が愚かだとしても、この砂漠は永遠に沈黙するだけだ。",
						"chinese": "如果我们是愚蠢的，那这片沙漠将永远沉寂。",
						"french": "Si nous sommes insensés, ce désert ne fera que garder le silence pour l'éternité.",
						"spanish": "Si somos necios, este desierto solo permanecerá en silencio para siempre.",
						"vietnamese": "Nếu chúng ta ngu ngốc, sa mạc này sẽ chỉ mãi mãi chìm trong im lặng.",
						"thai": "หากเราโง่เขลา ทะเลทรายแห่งนี้ก็จะยังคงเงียบงันตลอดไป",
						"hindi": "यदि हम मूर्ख हैं, तो यह रेगिस्तान अनंत काल तक केवल मौन रहेगा।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "그래. 침묵… 그것이 영원한 진리.",
						"english": "Yes. Silence… that is the eternal truth.",
						"japanese": "そうだ。沈黙…それこそが永遠の真理。",
						"chinese": "没错。沉默…那才是永恒的真理。",
						"french": "Oui. Le silence… c'est l'éternelle vérité.",
						"spanish": "Sí. El silencio… esa es la verdad eterna.",
						"vietnamese": "Phải. Im lặng… đó là chân lý vĩnh hằng.",
						"thai": "ใช่แล้ว ความเงียบงัน… คือสัจธรรมนิรันดร์",
						"hindi": "हाँ। मौन… वही शाश्वत सत्य है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "우리가 그 침묵을 깨주겠어!",
						"english": "We will break that silence!",
						"japanese": "我々がその沈黙を破ってやる！",
						"chinese": "我们要打破那份沉寂！",
						"french": "Nous briserons ce silence !",
						"spanish": "¡Nosotros romperemos ese silencio!",
						"vietnamese": "Chúng ta sẽ phá vỡ sự im lặng đó!",
						"thai": "เราจะทำลายความเงียบงันนั้นซะ!",
						"hindi": "हम उस मौन को तोड़ देंगे!"
					},
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "…결국, 너희도… 한때… 변화를 꿈꿨던 자들처럼… 사라질 뿐.",
						"english": "…In the end, you too… will merely vanish… like those who once dreamt of change.",
						"japanese": "…結局、お前たちも…かつて…変化を夢見た者たちのように…消え去るだけだ。",
						"chinese": "…最终，你们也会…像那些曾经梦想着改变的人一样…消逝罢了。",
						"french": "…Après tout, vous aussi… ne ferez que disparaître… comme ceux qui ont jadis rêvé de changement.",
						"spanish": "…Al final, vosotros también… simplemente desapareceréis… como aquellos que una vez soñaron con el cambio.",
						"vietnamese": "…Rốt cuộc, các ngươi cũng… sẽ chỉ biến mất… như những kẻ từng mơ về sự thay đổi.",
						"thai": "…สุดท้ายแล้ว เจ้าก็… จะหายไป… เช่นเดียวกับผู้ที่เคยฝันถึงการเปลี่ยนแปลง",
						"hindi": "…अंततः, तुम भी… केवल विलीन हो जाओगे… उन लोगों की तरह जिन्होंने कभी बदलाव का सपना देखा था।"
					}
				},
				{
					"type": "speech",
					"speaker": "amir",
					"content": {
						"korean": "사라지지 않아. 우리는… 이 사막에 생명을 불어넣을 것이다.",
						"english": "We won't vanish. We will… breathe life into this desert.",
						"japanese": "消え去りはしない。我々は…この砂漠に生命を吹き込むだろう。",
						"chinese": "我们不会消失。我们将会…为这片沙漠注入生命。",
						"french": "Nous ne disparaîtrons pas. Nous… insufflerons la vie à ce désert.",
						"spanish": "No desapareceremos. Nosotros… insuflaremos vida a este desierto.",
						"vietnamese": "Chúng ta sẽ không biến mất. Chúng ta sẽ… thổi sự sống vào sa mạc này.",
						"thai": "เราจะไม่หายไป เราจะ… มอบชีวิตให้กับทะเลทรายแห่งนี้",
						"hindi": "हम गायब नहीं होंगे। हम… इस रेगिस्तान में जान फूँक देंगे।"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 {random_boss}가 모래가 되어 흩어졌다. 오르벨은 여전히 침묵했지만, 그의 주변에서 미묘한 변화가 감지되었다.",
						"english": "The massive {random_boss} turned to sand and scattered. Orvel remained silent, yet subtle changes were detected around him.",
						"japanese": "巨大な{random_boss}は砂となり、散り散りになった。オルベルは依然として沈黙していたが、その周囲で微かな変化が感知された。",
						"chinese": "巨大的{random_boss}化为沙粒消散。奥尔维尔依旧沉寂，但在它周围，却感应到了微妙的变化。",
						"french": "L'énorme {random_boss} s'est transformé en sable et s'est dispersé. Orvel resta silencieux, mais de subtils changements furent détectés autour de lui.",
						"spanish": "El gigantesco {random_boss} se convirtió en arena y se dispersó. Orvel permaneció en silencio, pero se detectaron cambios sutiles a su alrededor.",
						"vietnamese": "Gã {random_boss} khổng lồ tan thành cát bụi. Orvel vẫn im lặng, nhưng những thay đổi tinh tế đã được nhận thấy xung quanh hắn.",
						"thai": "ร่างมหึมาของ {random_boss} กลายเป็นทรายและกระจัดกระจายไป ออร์เวลล์ยังคงเงียบงัน แต่รอบตัวเขาเริ่มมีการเปลี่ยนแปลงที่ละเอียดอ่อน",
						"hindi": "विशाल {random_boss} रेत में बदल गया और बिखर गया। ओर्बेल अभी भी शांत था, लेकिन उसके चारों ओर सूक्ष्म बदलाव महसूस किए गए।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "사막의 깊은 곳에서, 또 다른 진실이 기다리고 있었다.",
						"english": "In the depths of the desert, another truth awaited.",
						"japanese": "砂漠の深い場所で、別の真実が待っていた。",
						"chinese": "在沙漠的深处，另一个真相正在等待。",
						"french": "Dans les profondeurs du désert, une autre vérité attendait.",
						"spanish": "En las profundidades del desierto, otra verdad esperaba.",
						"vietnamese": "Trong sâu thẳm sa mạc, một sự thật khác đang chờ đợi.",
						"thai": "ในส่วนลึกของทะเลทราย ความจริงอีกอย่างหนึ่งกำลังรออยู่",
						"hindi": "रेगिस्तान की गहराइयों में, एक और सत्य प्रतीक्षा कर रहा था।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		}
	]
} as const;
