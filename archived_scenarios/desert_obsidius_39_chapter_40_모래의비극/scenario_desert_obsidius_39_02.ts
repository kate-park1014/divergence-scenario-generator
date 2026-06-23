export const scenario_desert_obsidius_39_02 = {
	"scenario_id": "desert_obsidius_39_02",
	"order": 2,
	"act": "rising",
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "붉은 사막 한가운데. 거대한 금속 조형물들이 하늘을 찔렀다.",
						"english": "In the middle of the red desert. Giant metal structures pierced the sky.",
						"japanese": "赤い砂漠の真ん中。巨大な金属の造形物が空を刺していた。",
						"chinese": "红色沙漠的中央。巨大的金属结构刺向天空。",
						"french": "Au milieu du désert rouge. De gigantesques structures métalliques transperçaient le ciel.",
						"spanish": "En medio del desierto rojo. Enormes estructuras metálicas perforaban el cielo.",
						"vietnamese": "Giữa lòng sa mạc đỏ. Những cấu trúc kim loại khổng lồ đâm thủng bầu trời.",
						"thai": "กลางทะเลทรายสีแดง โครงสร้างโลหะขนาดมหึมากำลังเสียดฟ้า",
						"hindi": "लाल रेगिस्तान के बीच में। विशाल धातु की संरचनाएँ आकाश को चीर रही थीं।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "이건 대체… 뭐야?",
						"english": "What in the world is this...?",
						"japanese": "これはいったい…何だ？",
						"chinese": "这到底…是什么？",
						"french": "Qu'est-ce que c'est que ça, au juste... ?",
						"spanish": "¿Qué demonios es esto...?",
						"vietnamese": "Rốt cuộc thì... cái gì đây?",
						"thai": "นี่มัน...อะไรกันเนี่ย?",
						"hindi": "यह सब... क्या है?"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						2
					],
					"speaker": "amir",
					"duration_ms": 500
				},
				{
					"speaker": "amir",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "자연적인 현상은 아닌 것 같군. 혹시… 고대 문명의 유물인가?",
						"english": "Doesn't seem like a natural phenomenon. Could it be... relics of an ancient civilization?",
						"japanese": "自然現象ではなさそうだな。もしかして…古代文明の遺物か？",
						"chinese": "这看起来不像自然现象。难道是…古文明的遗迹？",
						"french": "Ça ne semble pas être un phénomène naturel. Serait-ce... des reliques d'une ancienne civilisation ?",
						"spanish": "No parece un fenómeno natural. ¿Quizás... reliquias de una antigua civilización?",
						"vietnamese": "Không giống hiện tượng tự nhiên. Lẽ nào... là di tích của một nền văn minh cổ đại?",
						"thai": "ดูไม่เหมือนปรากฏการณ์ทางธรรมชาติเลย หรือว่า...เป็นโบราณวัตถุจากอารยธรรมโบราณกันนะ?",
						"hindi": "यह कोई प्राकृतिक घटना नहीं लगती। कहीं... यह किसी प्राचीन सभ्यता के अवशेष तो नहीं?"
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "으스스해. 마치 살아있는 것 같아.",
						"english": "It's eerie. As if it's alive.",
						"japanese": "薄気味悪い。まるで生きているみたいだ。",
						"chinese": "真让人毛骨悚然。仿佛是活的。",
						"french": "C'est étrange. Comme si c'était vivant.",
						"spanish": "Es espeluznante. Como si estuviera vivo.",
						"vietnamese": "Rợn người quá. Cứ như nó còn sống vậy.",
						"thai": "มันน่าขนลุก ราวกับมีชีวิต",
						"hindi": "यह डरावना है। मानो यह जीवित हो।"
					}
				},
				{
					"speaker": "amir",
					"emotion": "base",
					"content": {
						"korean": "그럴 리가. 그냥… 오래된 잔해겠지. 서둘러서 지나가자.",
						"english": "No way. It's just... old wreckage. Let's hurry past.",
						"japanese": "まさか。ただの…古い残骸だろう。急いで通り過ぎよう。",
						"chinese": "不可能。只是…古老的残骸罢了。我们快点过去吧。",
						"french": "Impossible. Ce ne sont que... de vieilles épaves. Dépêchons-nous de passer.",
						"spanish": "Imposible. Son solo... viejos restos. Apurémonos a pasar.",
						"vietnamese": "Không thể nào. Chỉ là... tàn tích cũ thôi. Nhanh lên, đi qua thôi.",
						"thai": "ไม่มีทางหรอก ก็แค่...ซากปรักหักพังเก่าๆ รีบผ่านไปเถอะ",
						"hindi": "असंभव। यह बस... पुराना मलबा है। चलो जल्दी से आगे बढ़ते हैं।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						4,
						2
					],
					"speaker": "amir",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "잠깐… 저 조형물, 아까 본 것 같은데?",
						"english": "Wait... I think I saw that sculpture before?",
						"japanese": "待て…あの造形物、さっきも見たような？",
						"chinese": "等等……那个雕塑，我好像之前见过？",
						"french": "Attends... Cette sculpture, je crois l'avoir déjà vue ?",
						"spanish": "Espera... Esa escultura, ¿creo que ya la había visto?",
						"vietnamese": "Khoan đã... Cái kiến trúc kia, hình như mình đã thấy rồi?",
						"thai": "เดี๋ยว... รูปปั้นนั่น ฉันเคยเห็นเมื่อกี้ไม่ใช่เหรอ?",
						"hindi": "रुको... वो मूर्तिकला, मुझे लगता है मैंने उसे पहले देखा है?"
					},
					"speaker": "amir",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "착각이겠지. 길은 계속 앞으로 이어져.",
						"english": "Must be a mistake. The path continues forward.",
						"japanese": "気のせいだろう。道はまっすぐ続いている。",
						"chinese": "一定是错觉。路一直向前延伸。",
						"french": "C'est une erreur. Le chemin continue tout droit.",
						"spanish": "Debe ser un error. El camino sigue adelante.",
						"vietnamese": "Chắc là nhầm lẫn thôi. Con đường vẫn tiếp tục phía trước.",
						"thai": "คงคิดไปเอง ทางมันไปข้างหน้าเรื่อยๆ",
						"hindi": "गलती होगी। रास्ता आगे बढ़ता रहता है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "아니, 뭔가 이상해. 모래바람 때문에 시야가 흐려진 건가?",
						"english": "No, something's wrong. Is the sandstorm blurring my vision?",
						"japanese": "いや、何かおかしい。砂嵐で視界がぼやけているのか？",
						"chinese": "不，有些不对劲。是沙尘暴模糊了我的视线吗？",
						"french": "Non, quelque chose ne va pas. Est-ce que le vent de sable brouille ma vue ?",
						"spanish": "No, algo anda mal. ¿La tormenta de arena está nublando mi visión?",
						"vietnamese": "Không, có gì đó lạ. Cơn bão cát làm mờ tầm nhìn của mình sao?",
						"thai": "ไม่นะ มีบางอย่างผิดปกติ พายุทรายทำให้ตาพร่ามัวเหรอ?",
						"hindi": "नहीं, कुछ गड़बड़ है। क्या रेत का तूफान मेरी दृष्टि को धुंधला कर रहा है?"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "amir"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "그냥 앞으로 가는 수밖에 없어.",
						"english": "We have no choice but to keep going forward.",
						"japanese": "ただ前に進むしかない。",
						"chinese": "我们只能继续向前。",
						"french": "Nous n'avons d'autre choix que d'avancer.",
						"spanish": "No tenemos más remedio que seguir adelante.",
						"vietnamese": "Chúng ta không còn lựa chọn nào khác ngoài việc tiếp tục đi.",
						"thai": "ไม่มีทางเลือกอื่นนอกจากเดินหน้าต่อไป",
						"hindi": "हमारे पास आगे बढ़ने के अलावा कोई विकल्प नहीं है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						4,
						2
					],
					"speaker": "amir",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "angry",
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "젠장! 또 여기야? 아까도 여기 지나왔잖아!",
						"english": "Damn it! Here again? We just passed this spot!",
						"japanese": "ちくしょう！またここか？さっきもここを通っただろ！",
						"chinese": "该死！又是这里？我们刚才不是才经过这里吗！",
						"french": "Mince ! Encore ici ? On vient juste de passer par là !",
						"spanish": "¡Maldita sea! ¿Aquí otra vez? ¡Acabamos de pasar por aquí!",
						"vietnamese": "Chết tiệt! Lại chỗ này nữa à? Vừa nãy mình đã đi qua đây rồi mà!",
						"thai": "บ้าจริง! ที่นี่อีกแล้วเหรอ? เราเพิ่งผ่านที่นี่มาไม่ใช่เหรอ!",
						"hindi": "धिक्कार है! फिर यहाँ? हम अभी-अभी यहीं से तो गुज़रे थे!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "말도 안 돼… 길이 사라졌어.",
						"english": "No way... The path is gone.",
						"japanese": "まさか…道が消えた。",
						"chinese": "不可能……路不见了。",
						"french": "Impossible... Le chemin a disparu.",
						"spanish": "No puede ser... El camino desapareció.",
						"vietnamese": "Không thể tin được... Con đường đã biến mất.",
						"thai": "ไม่จริงน่า... ทางหายไปแล้ว",
						"hindi": "नामुमकिन... रास्ता गायब हो गया।"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "사막은 살아있는 미궁처럼 탐험대를 조롱했다. 같은 길을 맴도는 듯한 착각에 빠진다.",
						"english": "The desert mocked the expedition like a living labyrinth. They felt as if they were trapped in an endless loop.",
						"japanese": "砂漠は生きた迷宮のように探検隊を嘲笑った。同じ道をぐるぐる回っているような錯覚に陥る。",
						"chinese": "沙漠如活着的迷宫般嘲弄着探险队。他们陷入了在同一条路上循环的错觉。",
						"french": "Le désert se moquait de l'expédition comme un labyrinthe vivant. Ils avaient l'impression d'être pris dans une boucle sans fin.",
						"spanish": "El desierto se burlaba de la expedición como un laberinto viviente. Caían en la ilusión de dar vueltas por el mismo camino.",
						"vietnamese": "Sa mạc chế giễu đoàn thám hiểm như một mê cung sống. Họ rơi vào ảo giác đang quanh quẩn cùng một con đường.",
						"thai": "ทะเลทรายเยาะเย้ยคณะสำรวจราวกับเขาวงกตที่มีชีวิต พวกเขาตกอยู่ในภาพลวงตาของการวนเวียนอยู่บนเส้นทางเดิม",
						"hindi": "रेगिस्तान जीवित भूलभुलैया की तरह अभियान दल का मज़ाक उड़ा रहा था। उन्हें एक ही रास्ते पर घूमने का भ्रम होने लगा।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "이건 함정이야! 누군가 우릴 가지고 노는 거라고!",
						"english": "This is a trap! Someone's toying with us!",
						"japanese": "これは罠だ！誰かが俺たちを弄んでいるんだ！",
						"chinese": "这是个陷阱！有人在玩弄我们！",
						"french": "C'est un piège ! Quelqu'un joue avec nous !",
						"spanish": "¡Esto es una trampa! ¡Alguien está jugando con nosotros!",
						"vietnamese": "Đây là một cái bẫy! Ai đó đang đùa giỡn với chúng ta!",
						"thai": "นี่มันกับดัก! มีใครบางคนกำลังเล่นตลกกับเราอยู่!",
						"hindi": "यह एक जाल है! कोई हमारे साथ खेल रहा है!"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "amir"
				},
				{
					"speaker": "amir",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "아니야… 여기도 아니야! 어디로 가야 해!",
						"english": "No... not here either! Where do we go?!",
						"japanese": "違う…ここも違う！どこに行けばいいんだ！",
						"chinese": "不……也不是这里！我们该去哪里！",
						"french": "Non... pas ici non plus ! Où devons-nous aller ?",
						"spanish": "¡No... tampoco aquí! ¡¿Adónde tenemos que ir?!",
						"vietnamese": "Không... không phải chỗ này nữa! Mình phải đi đâu đây!",
						"thai": "ไม่ใช่... ที่นี่ก็ไม่ใช่! เราควรจะไปทางไหนกัน!",
						"hindi": "नहीं... यह भी नहीं! हमें कहाँ जाना है!"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "진정해, 아미르. 정신 차려야 해.",
						"english": "Calm down, Amir. We need to focus.",
						"japanese": "落ち着け、アミール。しっかりするんだ。",
						"chinese": "冷静点，阿米尔。你必须保持清醒。",
						"french": "Calme-toi, Amir. Il faut rester lucide.",
						"spanish": "Cálmate, Amir. Necesitas concentrarte.",
						"vietnamese": "Bình tĩnh lại đi, Amir. Cậu cần phải giữ bình tĩnh.",
						"thai": "ใจเย็นๆ นะ อามีร์ เราต้องตั้งสติให้ได้",
						"hindi": "शांत हो जाओ, अमीर। हमें ध्यान केंद्रित करना होगा।"
					},
					"type": "speech"
				},
				{
					"speaker": "amir",
					"emotion": "angry",
					"content": {
						"korean": "길이 없어! 전부 막혀 있어! 우린 여기서 죽을 거야!",
						"english": "No way out! All blocked! We're going to die here!",
						"japanese": "道がない！全部塞がれてる！ここで死ぬんだ！",
						"chinese": "没有路了！都被堵住了！我们要死在这里了！",
						"french": "Pas d'issue ! Tout est bloqué ! Nous allons mourir ici !",
						"spanish": "¡No hay salida! ¡Todo está bloqueado! ¡Vamos a morir aquí!",
						"vietnamese": "Không còn đường nữa! Tất cả đều bị chặn! Chúng ta sẽ chết ở đây!",
						"thai": "ไม่มีทางแล้ว! ทุกอย่างถูกปิดกั้น! เราจะตายที่นี่!",
						"hindi": "कोई रास्ता नहीं! सब बंद है! हम यहीं मर जाएंगे!"
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "점점 더 깊은 사막의 심연으로. 파멸은 피할 수 없는 현실이 되었다.",
						"english": "Deeper and deeper into the desert's abyss. Ruin became an inescapable reality.",
						"japanese": "砂漠の深淵へ、さらに深く。破滅は避けられない現実となった。",
						"chinese": "越来越深入沙漠的深渊。毁灭成了无法逃避的现实。",
						"french": "De plus en plus profondément dans l'abîme du désert. La ruine devint une réalité inéluctable.",
						"spanish": "Cada vez más profundo en el abismo del desierto. La ruina se convirtió en una realidad ineludible.",
						"vietnamese": "Càng lúc càng sâu vào vực thẳm sa mạc. Sự hủy diệt đã trở thành hiện thực không thể tránh khỏi.",
						"thai": "ลึกลงไปในหุบเหวของทะเลทราย ความพินาศกลายเป็นความจริงที่หลีกเลี่ยงไม่ได้",
						"hindi": "मरुस्थल के गर्त में और गहरा। विनाश एक अपरिहार्य वास्तविकता बन गया।"
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "하찮은 존재들… 너희는 영원히 이 미궁에 갇힐 것이다.",
						"english": "Insignificant beings... You will be trapped in this labyrinth forever.",
						"japanese": "取るに足らない存在ども… お前たちは永遠にこの迷宮に閉じ込められるだろう。",
						"chinese": "卑微的蝼蚁… 你们将永远被困在这迷宫之中。",
						"french": "Créatures insignifiantes… Vous serez à jamais piégés dans ce labyrinthe.",
						"spanish": "Seres insignificantes… Estarán atrapados en este laberinto para siempre.",
						"vietnamese": "Những kẻ hèn mọn… Các ngươi sẽ bị mắc kẹt vĩnh viễn trong mê cung này.",
						"thai": "เจ้าพวกไร้ค่า… พวกเจ้าจะถูกขังอยู่ในเขาวงกตนี้ตลอดไป.",
						"hindi": "तुच्छ प्राणी… तुम हमेशा के लिए इस भूलभुलैया में कैद रहोगे।"
					}
				},
				{
					"content": {
						"korean": "아니… 우린 여기서 나갈 거야. 절대로 포기 안 해!",
						"english": "No... We'll get out of here. We'll never give up!",
						"japanese": "いいえ… 私たちはここから出る。絶対に諦めない！",
						"chinese": "不… 我们会离开这里。绝不放弃！",
						"french": "Non… Nous sortirons d'ici. Nous n'abandonnerons jamais !",
						"spanish": "No… Saldremos de aquí. ¡Jamás nos rendiremos!",
						"vietnamese": "Không… Chúng tôi sẽ thoát khỏi đây. Tuyệt đối không từ bỏ!",
						"thai": "ไม่… เราจะออกไปจากที่นี่. ไม่มีวันยอมแพ้!",
						"hindi": "नहीं… हम यहाँ से निकलेंगे। हम कभी हार नहीं मानेंगे!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "사막의 가장 깊은 곳. 거대한 금속 덩어리가 꿈틀거렸다.",
						"english": "The deepest part of the desert. A massive metal mass writhed.",
						"japanese": "砂漠の最深部。巨大な金属の塊が蠢いた。",
						"chinese": "沙漠最深处。一个巨大的金属块蠕动着。",
						"french": "La partie la plus profonde du désert. Une masse métallique gigantesque se tordait.",
						"spanish": "La parte más profunda del desierto. Una enorme masa de metal se retorcía.",
						"vietnamese": "Nơi sâu nhất của sa mạc. Một khối kim loại khổng lồ đang quằn quại.",
						"thai": "ส่วนที่ลึกที่สุดของทะเลทราย มวลโลหะขนาดมหึมากำลังบิดเบี้ยว",
						"hindi": "रेगिस्तान का सबसे गहरा हिस्सा। एक विशाल धातु का पिंड छटपटा रहा था।"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "드디어 왔군, 나의 새로운 작품이 될 존재들이여.",
						"english": "Finally you've arrived, beings who will become my new masterpieces.",
						"japanese": "ついに来たか、私の新たな作品となる者たちよ。",
						"chinese": "终于来了，将成为我新作品的存在们。",
						"french": "Vous êtes enfin arrivés, êtres qui deviendrez mes nouvelles œuvres d'art.",
						"spanish": "Finalmente habéis llegado, seres que os convertiréis en mis nuevas obras maestras.",
						"vietnamese": "Cuối cùng các ngươi cũng đã đến, những sinh vật sẽ trở thành tác phẩm mới của ta.",
						"thai": "ในที่สุดพวกเจ้าก็มาถึงแล้ว ผู้ที่จะเป็นผลงานชิ้นใหม่ของข้า",
						"hindi": "आखिरकार तुम आ गए, वे प्राणी जो मेरी नई कृतियाँ बनेंगे।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네가 이 모든 걸 꾸민 거야?",
						"english": "You orchestrated all of this?",
						"japanese": "お前がこの全てを企んだのか？",
						"chinese": "这一切都是你策划的？",
						"french": "C'est toi qui as orchestré tout cela ?",
						"spanish": "¿Tú orquestaste todo esto?",
						"vietnamese": "Ngươi đã dàn xếp tất cả chuyện này à?",
						"thai": "เจ้าเป็นคนบงการเรื่องทั้งหมดนี้หรือ?",
						"hindi": "तुमने यह सब रचा है?"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "그래. 너희도 곧 영원한 아름다움의 일부가 될 거다.",
						"english": "Indeed. You too shall soon become part of eternal beauty.",
						"japanese": "そうだ。お前たちもやがて永遠の美の一部となるだろう。",
						"chinese": "没错。你们也很快会成为永恒之美的一部分。",
						"french": "Oui. Vous ferez bientôt partie de la beauté éternelle.",
						"spanish": "Sí. Vosotros también os convertiréis pronto en parte de la belleza eterna.",
						"vietnamese": "Đúng vậy. Các ngươi cũng sẽ sớm trở thành một phần của vẻ đẹp vĩnh cửu.",
						"thai": "ใช่แล้ว พวกเจ้าเองก็จะกลายเป็นส่วนหนึ่งของความงามอันเป็นนิรันดร์ในไม่ช้า",
						"hindi": "हाँ। तुम भी जल्द ही शाश्वत सुंदरता का हिस्सा बन जाओगे।"
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "크으… 끝이… 아니다… 나의 예술은… 영원히… 반복될 거다…",
						"english": "Ugh... It's... not... over... My art... will... repeat... eternally...",
						"japanese": "ぐぅ… 終わり… ではない… 私の芸術は… 永遠に… 繰り返されるだろう…",
						"chinese": "呃… 还没… 结束… 我的艺术… 将… 永远… 重复…",
						"french": "Ugh... Ce... n'est... pas fini... Mon art... se... répétera... éternellement...",
						"spanish": "Ugh... No es... el... final... Mi arte... se... repetirá... eternamente...",
						"vietnamese": "Ưgh... Chưa... hết... Nghệ thuật của ta... sẽ... lặp lại... vĩnh cửu...",
						"thai": "อื้อ... มัน... ยัง... ไม่จบ... ศิลปะของข้า... จะ... วนซ้ำ... ตลอดไป...",
						"hindi": "उफ़... यह... खत्म... नहीं... मेरा कला... हमेशा... दोहराई... जाएगी..."
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야? 뭘 반복한다는 거야!",
						"english": "What are you talking about? What will repeat!",
						"japanese": "何を言ってるんだ？何を繰り返すって言うんだ！",
						"chinese": "你在说什么？重复什么！",
						"french": "De quoi parles-tu ? Qu'est-ce qui va se répéter !",
						"spanish": "¿De qué hablas? ¡¿Qué se va a repetir?!",
						"vietnamese": "Ngươi đang nói gì vậy? Lặp lại cái gì!",
						"thai": "เจ้าพูดอะไร? จะวนซ้ำอะไรกัน!",
						"hindi": "क्या बक रहे हो? क्या दोहराएगा!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "쓰러진 {random_boss}. 하지만 사막의 미궁은 여전히 그들을 옥죄고 있었다.",
						"english": "The fallen {random_boss}. But the desert labyrinth still constricted them.",
						"japanese": "倒れた{random_boss}。しかし、砂漠の迷宮は彼らを依然として締め付けていた。",
						"chinese": "倒下的{random_boss}。但沙漠迷宫仍旧束缚着他们。",
						"french": "Le {random_boss} tombé. Mais le labyrinthe du désert les serrait toujours.",
						"spanish": "El {random_boss} caído. Pero el laberinto del desierto aún los oprimía.",
						"vietnamese": "{random_boss} đã gục ngã. Nhưng mê cung sa mạc vẫn đang siết chặt lấy họ.",
						"thai": "{random_boss} ที่ล้มลง แต่เขาวงกตทะเลทรายยังคงบีบรัดพวกเขาอยู่",
						"hindi": "पतन हुआ {random_boss}। लेकिन रेगिस्तान का भूलभुलैया अभी भी उन्हें जकड़े हुए था।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "다음 여정은 더욱 기이한 형태로 탐험대를 기다리고 있었다.",
						"english": "The next journey awaited the expedition in an even more bizarre form.",
						"japanese": "次の旅は、さらに奇妙な形で探検隊を待ち受けていた。",
						"chinese": "下一段旅程以更加奇异的形式等待着探险队。",
						"french": "Le prochain voyage attendait l'expédition sous une forme encore plus étrange.",
						"spanish": "El próximo viaje esperaba a la expedición de una forma aún más extraña.",
						"vietnamese": "Cuộc hành trình tiếp theo đang chờ đợi đoàn thám hiểm dưới một hình thức kỳ lạ hơn.",
						"thai": "การเดินทางครั้งต่อไปรอคณะสำรวจอยู่ในรูปแบบที่แปลกประหลาดยิ่งขึ้น",
						"hindi": "अगली यात्रा अभियान का एक और भी अजीब रूप में इंतजार कर रही थी।"
					},
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"붉은 모래 너머, 낯선 풍경이 펼쳐졌다.",
			"거대한 금속 조형물들이 사막 위에 박혀 있었다.",
			"마치 죽은 영혼들의 비명으로 빚어진 예술품처럼.",
			"이곳에서 길을 잃는다면, 영원히 갇히게 될 것이다.",
			"파멸은 이미 시작되었다."
		],
		"english": [
			"Beyond the red sands, an unfamiliar landscape unfolded.",
			"Giant metal structures were embedded in the desert.",
			"As if they were artworks forged from the screams of dead souls.",
			"If you lose your way here, you'll be trapped forever.",
			"Destruction has already begun."
		],
		"japanese": [
			"赤い砂の向こうに、見慣れない風景が広がっていた。",
			"巨大な金属の構造物が砂漠に突き刺さっていた。",
			"まるで死んだ魂たちの悲鳴で造られた芸術品のように。",
			"ここで道に迷えば、永遠に囚われるだろう。",
			"破滅はすでに始まっている。"
		],
		"chinese": [
			"红色沙丘之外，陌生的景象展现在眼前。",
			"巨大的金属结构物矗立在沙漠之上。",
			"仿佛是死者灵魂的尖叫所铸就的艺术品。",
			"若在此迷失方向，便会永远被困。",
			"毁灭已然开始。"
		],
		"french": [
			"Au-delà des sables rouges, un paysage inconnu s'étendait.",
			"De gigantesques structures métalliques étaient encastrées dans le désert.",
			"Comme des œuvres d'art forgées par les cris d'âmes mortes.",
			"Si tu te perds ici, tu seras piégé pour l'éternité.",
			"La destruction a déjà commencé."
		],
		"spanish": [
			"Más allá de las arenas rojas, un paisaje desconocido se extendía.",
			"Enormes estructuras metálicas estaban incrustadas en el desierto.",
			"Como obras de arte forjadas con los gritos de almas muertas.",
			"Si te pierdes aquí, quedarás atrapado para siempre.",
			"La destrucción ya ha comenzado."
		],
		"vietnamese": [
			"Vượt qua những cồn cát đỏ, một phong cảnh lạ lẫm hiện ra.",
			"Những cấu trúc kim loại khổng lồ cắm sâu vào sa mạc.",
			"Tựa như những tác phẩm nghệ thuật được rèn từ tiếng thét của những linh hồn đã chết.",
			"Nếu lạc lối ở đây, ngươi sẽ bị mắc kẹt mãi mãi.",
			"Sự hủy diệt đã bắt đầu."
		],
		"thai": [
			"พ้นผืนทรายสีแดงไปเบื้องหน้า ภูมิทัศน์อันแปลกตาก็ปรากฏ",
			"โครงสร้างโลหะขนาดมหึมากำลังฝังตัวอยู่บนทะเลทราย",
			"ราวกับงานศิลปะที่หลอมขึ้นจากเสียงกรีดร้องของวิญญาณผู้ตาย",
			"หากหลงทางที่นี่ เจ้าจะถูกจองจำไปชั่วนิรันดร์",
			"หายนะได้เริ่มต้นขึ้นแล้ว"
		],
		"hindi": [
			"लाल रेत के पार, एक अपरिचित परिदृश्य सामने आया।",
			"विशाल धातु की संरचनाएँ रेगिस्तान में धँसी हुई थीं।",
			"मानो वे मृत आत्माओं की चीखों से गढ़ी गई कलाकृतियाँ हों।",
			"यदि तुम यहाँ रास्ता भटक गए, तो हमेशा के लिए फँस जाओगे।",
			"विनाश पहले ही शुरू हो चुका है।"
		]
	}
} as const;
