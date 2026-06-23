export const scenario_hell_spectra_9_03 = {
	"scenario_id": "hell_spectra_9_03",
	"order": 3,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"drox": {
			"id": "mon_2fc30621-a15f-4371-9e37-295cdcb5675d",
			"name": {
				"korean": "드록스",
				"english": "Drox",
				"japanese": "ドロックス",
				"chinese": "德罗克斯",
				"french": "Drox",
				"spanish": "Drox",
				"vietnamese": "Đrốc",
				"thai": "ดรอกซ์",
				"hindi": "ड्रॉक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/509c0376-2230-4669-d022-7e5336293200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/916b4cfa-f792-4f4a-5346-681095481e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"지옥의 심연, 모든 것은 조각났다.",
			"드록스는 어둠 속에서 빛나는 파편을 찾아냈다.",
			"찬란했던 기억의 잔상. 누구의 것인가.",
			"잊혀진 진실이 모습을 드러내려 한다."
		],
		"english": [
			"Abyss of hell, everything shattered.",
			"Droks found a glowing shard in the darkness.",
			"Afterimage of brilliant memories. Whose are they?",
			"The forgotten truth is about to reveal itself."
		],
		"japanese": [
			"地獄の深淵、全ては砕け散った。",
			"ドロックスは闇の中で輝く破片を見つけた。",
			"輝かしい記憶の残像。誰のものなのか。",
			"忘れられた真実が姿を現そうとしている。"
		],
		"chinese": [
			"地狱深渊，万物支离破碎。",
			"德罗克斯在黑暗中发现了一块发光的碎片。",
			"灿烂记忆的残影。它属于谁？",
			"被遗忘的真相即将浮出水面。"
		],
		"french": [
			"Abysse de l'enfer, tout a volé en éclats.",
			"Droks découvrit un éclat lumineux dans les ténèbres.",
			"Rémanence de souvenirs éclatants. À qui appartiennent-ils ?",
			"La vérité oubliée est sur le point de se révéler."
		],
		"spanish": [
			"Abismo del infierno, todo se hizo pedazos.",
			"Droks encontró un fragmento brillante en la oscuridad.",
			"La imagen residual de recuerdos brillantes. ¿De quién son?",
			"La verdad olvidada está a punto de revelarse."
		],
		"vietnamese": [
			"Vực thẳm địa ngục, mọi thứ vỡ nát.",
			"Droks tìm thấy một mảnh vỡ phát sáng trong bóng tối.",
			"Dư ảnh của ký ức huy hoàng. Của ai đây?",
			"Sự thật bị lãng quên sắp lộ diện."
		],
		"thai": [
			"ห้วงอเวจีแห่งนรก ทุกสิ่งแตกสลาย",
			"ดรอกซ์พบเศษเสี้ยวที่เรืองแสงในความมืด",
			"ภาพหลอนของความทรงจำอันเจิดจรัส ของใครกันนะ",
			"ความจริงที่ถูกลืมกำลังจะเปิดเผย"
		],
		"hindi": [
			"नरक का पाताल, सब कुछ बिखर गया।",
			"ड्रॉक्स ने अंधेरे में एक चमकता हुआ टुकड़ा पाया।",
			"चमकीली यादों की प्रतिछवि। ये किसकी हैं?",
			"भूली हुई सच्चाई सामने आने वाली है।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "지옥의 심연, 고통받는 영혼들이 울부짖는 공간.",
						"english": "Abyss of hell, a space where tormented souls wail.",
						"japanese": "地獄の深淵、苦しむ魂が慟哭する空間。",
						"chinese": "地狱深渊，受苦灵魂哀嚎的空间。",
						"french": "Abysse de l'enfer, un lieu où les âmes tourmentées hurlent.",
						"spanish": "Abismo del infierno, un lugar donde las almas atormentadas aúllan.",
						"vietnamese": "Vực thẳm địa ngục, nơi những linh hồn đau khổ gào thét.",
						"thai": "ห้วงอเวจีแห่งนรก สถานที่ที่วิญญาณทุกข์ทรมานคร่ำครวญ",
						"hindi": "नरक का पाताल, एक ऐसी जगह जहाँ पीड़ित आत्माएँ विलाप करती हैं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "drox",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "drox",
					"emotion": "base",
					"content": {
						"korean": "이런 곳에 이런 게….",
						"english": "Something like this, in a place like this...",
						"japanese": "こんな場所にこんなものが…",
						"chinese": "在这种地方，竟然有这种东西……",
						"french": "Ça, dans un endroit pareil...",
						"spanish": "Esto, en un lugar como este...",
						"vietnamese": "Một thứ như thế này, ở một nơi như thế này...",
						"thai": "ของแบบนี้ในที่แบบนี้...",
						"hindi": "ऐसी जगह पर ऐसा कुछ..."
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "드록스의 손에 어둠 속에서 빛나는 유리 조각이 들려 있었다.",
						"english": "In Droks' hand was a piece of glowing glass in the darkness.",
						"japanese": "ドロックスの手には、暗闇の中で輝くガラスの破片が握られていた。",
						"chinese": "德罗克斯的手中握着一块在黑暗中发光的玻璃碎片。",
						"french": "Dans la main de Droks, un morceau de verre lumineux brillait dans l'obscurité.",
						"spanish": "En la mano de Droks había un trozo de cristal brillante en la oscuridad.",
						"vietnamese": "Trong tay Droks là một mảnh thủy tinh phát sáng trong bóng tối.",
						"thai": "ในมือของดรอกซ์มีเศษแก้วที่เรืองแสงในความมืด",
						"hindi": "ड्रॉक्स के हाथ में अंधेरे में चमकता हुआ काँच का टुकड़ा था।"
					}
				},
				{
					"content": {
						"korean": "저건… 뭐야?",
						"english": "What... is that?",
						"japanese": "あれは…何だ？",
						"chinese": "那是什么……？",
						"french": "C'est quoi... ça ?",
						"spanish": "¿Qué... es eso?",
						"vietnamese": "Đó là... gì vậy?",
						"thai": "นั่นมัน... อะไรน่ะ?",
						"hindi": "वो... क्या है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "drox",
					"type": "speech",
					"content": {
						"korean": "찬란했던 기억의 파편. 지옥에 어울리지 않는 순수한 빛이야.",
						"english": "A shard of brilliant memories. A pure light unfitting for hell.",
						"japanese": "輝かしい記憶の破片。地獄には似合わない、純粋な光だ。",
						"chinese": "灿烂记忆的碎片。一种不属于地狱的纯洁之光。",
						"french": "Un éclat de souvenirs éclatants. Une lumière pure qui ne sied pas à l'enfer.",
						"spanish": "Un fragmento de recuerdos brillantes. Una luz pura impropia del infierno.",
						"vietnamese": "Một mảnh vỡ của ký ức huy hoàng. Một ánh sáng thuần khiết không thuộc về địa ngục.",
						"thai": "เศษเสี้ยวของความทรงจำอันเจิดจรัส แสงบริสุทธิ์ที่ไม่เหมาะกับนรก",
						"hindi": "चमकीली यादों का एक टुकड़ा। एक शुद्ध प्रकाश जो नरक के लिए अनुपयुक्त है।"
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "drox",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "drox",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 조각에서… 아름다운 세계의 잔상이 느껴져.",
						"english": "From this shard... I feel the afterimage of a beautiful world.",
						"japanese": "この破片から…美しい世界の残像を感じる。",
						"chinese": "从这块碎片中……我感受到了一个美丽世界的残影。",
						"french": "De cet éclat... je ressens la rémanence d'un monde magnifique.",
						"spanish": "De este fragmento... siento la imagen residual de un mundo hermoso.",
						"vietnamese": "Từ mảnh vỡ này... tôi cảm nhận được dư ảnh của một thế giới tươi đẹp.",
						"thai": "จากเศษเสี้ยวนี้... ฉันสัมผัสได้ถึงภาพหลอนของโลกที่สวยงาม",
						"hindi": "इस टुकड़े से... मुझे एक खूबसूरत दुनिया की प्रतिछवि महसूस होती है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "아름다운 세계? 여기는 지옥인데.",
						"english": "A beautiful world? This is hell.",
						"japanese": "美しい世界？ここは地獄だ。",
						"chinese": "美丽的世界？这里是地狱。",
						"french": "Un monde magnifique ? C'est l'enfer ici.",
						"spanish": "¿Un mundo hermoso? Esto es el infierno.",
						"vietnamese": "Thế giới tươi đẹp ư? Đây là địa ngục mà.",
						"thai": "โลกที่สวยงาม? ที่นี่คือนรกต่างหากล่ะ",
						"hindi": "एक खूबसूरत दुनिया? ये तो नर्क है।"
					}
				},
				{
					"content": {
						"korean": "이건 분명 지옥 이전의 것. 누군가의 소중한 기억이겠지.",
						"english": "This must be from before hell. Someone's precious memory.",
						"japanese": "これはきっと地獄以前のもの。誰かの大切な記憶だろう。",
						"chinese": "这一定是地狱之前的东西。某人珍贵的记忆。",
						"french": "C'est sûrement d'avant l'enfer. Le précieux souvenir de quelqu'un.",
						"spanish": "Esto debe ser de antes del infierno. El precioso recuerdo de alguien.",
						"vietnamese": "Đây chắc chắn là thứ từ trước khi đến địa ngục. Một ký ức quý giá của ai đó.",
						"thai": "นี่ต้องเป็นสิ่งที่มีมาก่อนนรกแน่ๆ ความทรงจำอันล้ำค่าของใครบางคน",
						"hindi": "ये नर्क से पहले का होगा। किसी की अनमोल याद।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "drox"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그럼 이 조각의 주인은… 누구지?",
						"english": "Then, the owner of this fragment is… who?",
						"japanese": "じゃあ、この破片の持ち主は…誰だ？",
						"chinese": "那么，这碎片的拥有者是…谁？",
						"french": "Alors, le propriétaire de ce fragment est… qui ?",
						"spanish": "Entonces, el dueño de este fragmento es… ¿quién?",
						"vietnamese": "Vậy thì, chủ nhân của mảnh vỡ này là… ai?",
						"thai": "แล้วเจ้าของเศษชิ้นนี้คือ… ใครกันนะ?",
						"hindi": "तो, इस टुकड़े का मालिक… कौन है?"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "drox",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "drox",
					"type": "speech",
					"content": {
						"korean": "이 파편… 왠지 모르게 익숙해.",
						"english": "This fragment… feels strangely familiar.",
						"japanese": "この破片…なんだか見覚えがある。",
						"chinese": "这碎片…感觉莫名地熟悉。",
						"french": "Ce fragment… me semble étrangement familier.",
						"spanish": "Este fragmento… me resulta extrañamente familiar.",
						"vietnamese": "Mảnh vỡ này… sao mà quen thuộc thế.",
						"thai": "เศษชิ้นนี้… ทำไมถึงรู้สึกคุ้นเคยแปลกๆ นะ",
						"hindi": "ये टुकड़ा… अजीब सा जाना-पहचाना लग रहा है।"
					}
				},
				{
					"content": {
						"korean": "너도 본 적 있어?",
						"english": "Have you seen it before too?",
						"japanese": "君も見たことある？",
						"chinese": "你也见过吗？",
						"french": "Tu l'as déjà vu aussi ?",
						"spanish": "¿Tú también lo has visto antes?",
						"vietnamese": "Cậu cũng từng nhìn thấy nó sao?",
						"thai": "นายก็เคยเห็นมาก่อนด้วยเหรอ?",
						"hindi": "क्या तुमने भी इसे पहले देखा है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "drox",
					"content": {
						"korean": "아니, 그보다는… 이 지옥의 고통과 상실감 속에서 한 줄기 희망을 본 느낌이야.",
						"english": "No, more than that… amidst the pain and loss of this hell, I feel a glimmer of hope.",
						"japanese": "いや、それよりも…この地獄の苦痛と喪失感の中で、一筋の希望を見たような気がする。",
						"chinese": "不，不止如此…在这地狱的痛苦与失落中，我感到了一丝希望。",
						"french": "Non, plus que ça… au milieu de la douleur et de la perte de cet enfer, je ressens une lueur d'espoir.",
						"spanish": "No, más que eso… entre el dolor y la pérdida de este infierno, siento un atisbo de esperanza.",
						"vietnamese": "Không, hơn cả thế… giữa nỗi đau và sự mất mát của địa ngục này, tôi cảm thấy một tia hy vọng.",
						"thai": "ไม่สิ ยิ่งกว่านั้นอีก… ท่ามกลางความเจ็บปวดและความสูญเสียในนรกนี้ ฉันรู้สึกเหมือนเห็นแสงแห่งความหวังเลยล่ะ",
						"hindi": "नहीं, उससे भी ज़्यादा… इस नर्क के दर्द और नुकसान के बीच, मुझे उम्मीद की एक किरण महसूस होती है।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "희망이라고?",
						"english": "Hope?",
						"japanese": "希望だって？",
						"chinese": "希望？",
						"french": "L'espoir ?",
						"spanish": "¿Esperanza?",
						"vietnamese": "Hy vọng ư?",
						"thai": "ความหวังเหรอ?",
						"hindi": "उम्मीद?"
					}
				},
				{
					"emotion": "sad",
					"speaker": "drox",
					"type": "speech",
					"content": {
						"korean": "하지만… 그만큼 더 고통스러운 기억인 것 같아.",
						"english": "But… it also feels like an even more painful memory.",
						"japanese": "だけど…それと同じくらい、もっと辛い記憶のような気もする。",
						"chinese": "但是…这似乎也是一段更加痛苦的记忆。",
						"french": "Mais… cela semble aussi être un souvenir encore plus douloureux.",
						"spanish": "Pero… también se siente como un recuerdo aún más doloroso.",
						"vietnamese": "Nhưng… có vẻ đó cũng là một ký ức đau khổ hơn.",
						"thai": "แต่ว่า… มันก็รู้สึกเหมือนเป็นความทรงจำที่เจ็บปวดยิ่งกว่าด้วยล่ะ",
						"hindi": "लेकिन… ये उससे भी ज़्यादा दर्दनाक याद की तरह लगती है।"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "drox",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "drox",
					"content": {
						"korean": "이 파편이 흔들리고 있어. 힘을 잃는 것 같아.",
						"english": "This fragment is shaking. It seems to be losing its power.",
						"japanese": "この破片が震えている。力を失っているようだ。",
						"chinese": "这碎片在颤抖。它似乎正在失去力量。",
						"french": "Ce fragment tremble. Il semble perdre son pouvoir.",
						"spanish": "Este fragmento está temblando. Parece estar perdiendo su poder.",
						"vietnamese": "Mảnh vỡ này đang rung chuyển. Dường như nó đang mất đi sức mạnh.",
						"thai": "เศษชิ้นนี้กำลังสั่นคลอน มันดูเหมือนกำลังจะสูญเสียพลังงาน",
						"hindi": "ये टुकड़ा कांप रहा है। लगता है इसकी शक्ति कम हो रही है।"
					}
				},
				{
					"content": {
						"korean": "잠깐, 점점 희미해지고 있어!",
						"english": "Wait, it's fading!",
						"japanese": "待って、だんだん薄くなっている！",
						"chinese": "等等，它越来越模糊了！",
						"french": "Attends, il s'estompe !",
						"spanish": "¡Espera, se está desvaneciendo!",
						"vietnamese": "Khoan đã, nó đang mờ dần!",
						"thai": "เดี๋ยวก่อน มันกำลังจางหายไป!",
						"hindi": "रुको, ये धुंधला होता जा रहा है!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "찬란했던 기억의 파편이 모래처럼 부서져 사라졌다.",
						"english": "Fragments of brilliant memories shattered like sand and vanished.",
						"japanese": "輝かしい記憶の破片が砂のように砕け散り、消え去った。",
						"chinese": "灿烂的记忆碎片如沙般破碎消逝。",
						"french": "Les fragments de souvenirs brillants se sont brisés comme du sable et ont disparu.",
						"spanish": "Los fragmentos de recuerdos brillantes se hicieron añicos como arena y desaparecieron.",
						"vietnamese": "Những mảnh ký ức rực rỡ vỡ vụn như cát và biến mất.",
						"thai": "เสี้ยวความทรงจำอันเจิดจ้าแตกสลายดุจทรายและเลือนหายไป",
						"hindi": "शानदार यादों के टुकड़े रेत की तरह टूटकर गायब हो गए。"
					}
				},
				{
					"content": {
						"korean": "…사라졌어.",
						"english": "...It's gone.",
						"japanese": "…消え去った。",
						"chinese": "…消失了。",
						"french": "...Ça a disparu.",
						"spanish": "...Desapareció.",
						"vietnamese": "...Mất rồi.",
						"thai": "...หายไปแล้ว",
						"hindi": "...गायब हो गया।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "'소중한 기억일수록 더욱 쉽게 흩어진다'는 알 수 없는 목소리가 맴돌았다.",
						"english": "An unknown voice echoed, 'The more precious the memory, the more easily it scatters.'",
						"japanese": "「大切な記憶ほど、より簡単に散り散りになる」という、正体不明の声が響き渡った。",
						"chinese": "一个不知名的声音回荡着：“越是珍贵的记忆，越容易消散。”",
						"french": "Une voix inconnue résonna : « Plus le souvenir est précieux, plus il se dissipe facilement. »",
						"spanish": "Una voz desconocida resonó: «Cuanto más preciado es el recuerdo, más fácilmente se dispersa.»",
						"vietnamese": "Một giọng nói không rõ vang vọng: 'Ký ức càng quý giá, càng dễ tan biến.'",
						"thai": "เสียงปริศนาลอยวน 'ความทรงจำยิ่งล้ำค่า ก็ยิ่งสลายไปง่ายดาย'",
						"hindi": "एक अज्ञात आवाज़ गूँजी, 'जितनी कीमती यादें, उतनी ही आसानी से बिखर जाती हैं।'"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이 지옥에서는 모든 게 사라지는구나.",
						"english": "In this hell, everything vanishes.",
						"japanese": "この地獄では、すべてが消え去るのか。",
						"chinese": "在这个地狱里，一切都将消失。",
						"french": "Dans cet enfer, tout disparaît.",
						"spanish": "En este infierno, todo desaparece.",
						"vietnamese": "Trong địa ngục này, mọi thứ đều biến mất.",
						"thai": "ในนรกนี้ ทุกสิ่งล้วนเลือนหายไป",
						"hindi": "इस नर्क में, सब कुछ गायब हो जाता है।"
					}
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크으… 이 고통… 영원히… 반복될 뿐….",
						"english": "Ugh... This pain... It will only... repeat... forever...",
						"japanese": "くっ… この苦痛… 永遠に… 繰り返されるだけだ…。",
						"chinese": "唔… 这痛苦… 只是… 永远… 重复…",
						"french": "Ugh... Cette douleur... Elle ne fera que... se répéter... éternellement...",
						"spanish": "Ugh... Este dolor... Solo... se repetirá... eternamente...",
						"vietnamese": "Ư... Nỗi đau này... Nó sẽ chỉ... lặp lại... mãi mãi...",
						"thai": "อ๊า... ความเจ็บปวดนี้... จะ... ซ้ำรอย... ตลอดไป...",
						"hindi": "उफ़... यह दर्द... बस... हमेशा... दोहराता रहेगा..."
					}
				},
				{
					"content": {
						"korean": "뭐라고?",
						"english": "What did you say?",
						"japanese": "何だと？",
						"chinese": "你说什么？",
						"french": "Quoi ?",
						"spanish": "¿Qué dijiste?",
						"vietnamese": "Cái gì?",
						"thai": "ว่าไงนะ?",
						"hindi": "क्या कहा?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "쓰러진 괴물은 희미한 메아리만을 남겼다. 이 지옥의 반복되는 순환은 끝나지 않았다.",
						"english": "The fallen monster left only a faint echo. This infernal cycle is far from over.",
						"japanese": "倒れた怪物は微かな残響を残した。この地獄の繰り返しは終わらない。",
						"chinese": "倒下的怪物只留下了微弱的回声。这场地狱般的循环远未结束。",
						"french": "Le monstre tombé n'a laissé qu'un faible écho. Ce cycle infernal est loin d'être terminé.",
						"spanish": "El monstruo caído solo dejó un eco débil. Este ciclo infernal está lejos de terminar.",
						"vietnamese": "Quái vật gục ngã chỉ còn lại một tiếng vọng mờ nhạt. Vòng lặp địa ngục này vẫn chưa kết thúc.",
						"thai": "สัตว์ประหลาดที่ล้มลงทิ้งไว้เพียงเสียงสะท้อนอันแผ่วเบา วงจรนรกนี้ยังไม่สิ้นสุดลง",
						"hindi": "गिरे हुए राक्षस ने केवल एक धुंधली प्रतिध्वनि छोड़ी। यह नरकीय चक्र अभी समाप्त नहीं हुआ है।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "드디어 모습을 드러낸 지옥의 파수꾼.",
						"english": "Finally, the Guardian of Hell reveals itself.",
						"japanese": "ついに姿を現した地獄の番人。",
						"chinese": "地狱的守护者终于现身了。",
						"french": "Enfin, le Gardien de l'Enfer se révèle.",
						"spanish": "Finalmente, el Guardián del Infierno se revela.",
						"vietnamese": "Cuối cùng, Người gác cổng địa ngục đã lộ diện.",
						"thai": "ในที่สุด ผู้เฝ้านรกก็เผยโฉม",
						"hindi": "आखिरकार, नर्क का रखवाला प्रकट होता है।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "감히 이곳의 평화를 깨려는 어리석은 자들.",
						"english": "Fools who dare to disturb the peace of this place.",
						"japanese": "敢えてこの地の平和を乱そうとする愚か者たちめ。",
						"chinese": "竟敢妄图打破此地和平的愚蠢之徒。",
						"french": "Fous qui osent troubler la paix de ce lieu.",
						"spanish": "Necios que osan perturbar la paz de este lugar.",
						"vietnamese": "Những kẻ ngu ngốc dám phá vỡ sự bình yên nơi đây.",
						"thai": "เหล่าคนโง่ที่บังอาจจะทำลายสันติสุขแห่งนี้",
						"hindi": "मूर्ख जो इस जगह की शांति भंग करने की हिम्मत करते हैं।"
					}
				},
				{
					"content": {
						"korean": "너희의 기억 또한 조각나 영원히 고통받으리라.",
						"english": "Your memories too shall shatter, and you shall suffer eternally.",
						"japanese": "お前たちの記憶もまた砕け散り、永遠に苦しむことになるだろう。",
						"chinese": "你们的记忆也将支离破碎，永受折磨。",
						"french": "Vos souvenirs aussi se briseront, et vous souffrirez éternellement.",
						"spanish": "Vuestras memorias también se harán añicos, y sufriréis eternamente.",
						"vietnamese": "Ký ức của các ngươi cũng sẽ tan vỡ, và các ngươi sẽ phải chịu đựng vĩnh viễn.",
						"thai": "ความทรงจำของพวกเจ้าก็จะแตกสลาย และพวกเจ้าจะทรมานชั่วนิรันดร์",
						"hindi": "तुम्हारी यादें भी बिखर जाएंगी, और तुम हमेशा के लिए पीड़ित रहोगे।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "더 이상 아무것도 빼앗기지 않아!",
						"english": "I won't let anything else be taken!",
						"japanese": "これ以上、何も奪わせない！",
						"chinese": "我不会再让任何东西被夺走！",
						"french": "Je ne laisserai plus rien être pris !",
						"spanish": "¡No dejaré que me quiten nada más!",
						"vietnamese": "Ta sẽ không để bất cứ thứ gì bị cướp đi nữa!",
						"thai": "จะไม่ยอมให้สิ่งใดถูกพรากไปอีก!",
						"hindi": "मैं अब और कुछ भी नहीं छीनने दूँगा!"
					}
				}
			],
			"lose_dialogue": [
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "하찮은 것들. 너희의 의지도 곧 잊힐 것이다.",
						"english": "Insignificant creatures. Your will shall soon be forgotten.",
						"japanese": "くだらぬ者たち。お前たちの意思もすぐに忘れ去られるだろう。",
						"chinese": "微不足道的家伙们。你们的意志也很快会被遗忘。",
						"french": "Créatures insignifiantes. Votre volonté sera bientôt oubliée.",
						"spanish": "Criaturas insignificantes. Vuestra voluntad pronto será olvidada.",
						"vietnamese": "Bọn yếu hèn. Ý chí của các ngươi cũng sẽ sớm bị lãng quên thôi.",
						"thai": "พวกไร้ค่า. ความตั้งใจของเจ้าก็จะถูกลืมในไม่ช้า",
						"hindi": "तुच्छ प्राणी। तुम्हारी इच्छाशक्ति भी जल्द ही भुला दी जाएगी।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…젠장. 아직 끝나지 않았어!",
						"english": "...Damn it. It's not over yet!",
						"japanese": "…ちくしょう。まだ終わってない！",
						"chinese": "……该死。还没结束！",
						"french": "Bon sang. Ce n'est pas encore fini !",
						"spanish": "Maldita sea. ¡Aún no ha terminado!",
						"vietnamese": "Chết tiệt. Vẫn chưa kết thúc!",
						"thai": "บ้าจริง. ยังไม่จบ!",
						"hindi": "धत् तेरी। अभी खत्म नहीं हुआ है!"
					}
				}
			],
			"id": 15
		}
	]
} as const;
