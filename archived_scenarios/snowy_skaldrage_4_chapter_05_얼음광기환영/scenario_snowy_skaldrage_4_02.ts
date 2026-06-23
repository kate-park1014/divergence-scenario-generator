export const scenario_snowy_skaldrage_4_02 = {
	"scenario_id": "snowy_skaldrage_4_02",
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
			"모래시계 속 모래가 더 빠르게 흐른다.",
			"환영과 환청이 정신을 잠식한다.",
			"유적의 규칙은 매 순간 변덕스럽게 뒤바뀌었다.",
			"이곳은 미궁인가, 광기의 감옥인가."
		],
		"english": [
			"The sand in the hourglass flows ever faster.",
			"Visions and whispers consume the mind.",
			"The ruins' rules capriciously changed every moment.",
			"Is this a labyrinth, or a prison of madness?"
		],
		"japanese": [
			"砂時計の砂がさらに速く流れる。",
			"幻影と幻聴が精神を蝕む。",
			"遺跡のルールは毎瞬、気まぐれに変化した。",
			"ここは迷宮なのか、それとも狂気の監獄なのか。"
		],
		"chinese": [
			"沙漏中的沙子流逝得更快了。",
			"幻象与幻听侵蚀着心智。",
			"遗迹的规则每时每刻都在反复无常地变化。",
			"这里是迷宫，还是疯狂的监狱？"
		],
		"french": [
			"Le sable du sablier s'écoule de plus en plus vite.",
			"Visions et murmures consument l'esprit.",
			"Les règles des ruines changeaient capricieusement à chaque instant.",
			"Est-ce un labyrinthe, ou une prison de folie ?"
		],
		"spanish": [
			"La arena del reloj de arena fluye cada vez más rápido.",
			"Visiones y voces invaden la mente.",
			"Las reglas de las ruinas cambiaban caprichosamente a cada instante.",
			"¿Es esto un laberinto, o una prisión de locura?"
		],
		"vietnamese": [
			"Cát trong đồng hồ cát chảy nhanh hơn.",
			"Ảo ảnh và ảo thanh xâm chiếm tâm trí.",
			"Các quy tắc của di tích thay đổi thất thường mỗi khoảnh khắc.",
			"Đây là mê cung, hay nhà tù của sự điên loạn?"
		],
		"thai": [
			"ทรายในนาฬิกาทรายไหลเร็วยิ่งขึ้น",
			"ภาพหลอนและเสียงหลอนกัดกินจิตใจ",
			"กฎของซากปรักหักพังเปลี่ยนแปลงอย่างเอาแต่ใจทุกขณะ",
			"ที่นี่คือเขาวงกต หรือคุกแห่งความบ้าคลั่งกันแน่?"
		],
		"hindi": [
			"रेतघड़ी में रेत और तेज़ी से बह रही है।",
			"मतिभ्रम और भ्रामक आवाज़ें मन को खा जाती हैं।",
			"खंडहरों के नियम हर पल मनमाने ढंग से बदलते रहते थे।",
			"क्या यह भूलभुलैया है, या पागलपन की जेल?"
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
						"korean": "모래시계의 모래는 눈 깜짝할 새 절반으로 줄어들었다. 환청이 귓가를 맴돌았다.",
						"english": "The hourglass's sand halved in an instant. Whispers echoed in my ears.",
						"japanese": "砂時計の砂は瞬く間に半分になった。幻聴が耳元をぐるぐる回った。",
						"chinese": "沙漏的沙子瞬间减少了一半。幻听在耳边萦绕。",
						"french": "Le sable du sablier a diminué de moitié en un clin d'œil. Des murmures résonnaient à mes oreilles.",
						"spanish": "La arena del reloj de arena se redujo a la mitad en un instante. Voces resonaban en mis oídos.",
						"vietnamese": "Cát trong đồng hồ cát vơi đi một nửa trong chớp mắt. Ảo thanh văng vẳng bên tai.",
						"thai": "ทรายในนาฬิกาทรายลดลงครึ่งหนึ่งในพริบตา เสียงหลอนวนเวียนในหู",
						"hindi": "रेतघड़ी की रेत पलक झपकते ही आधी हो गई। कानों में फुसफुसाहट गूँज रही थी।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "누군가… 속삭이는 것 같아.",
						"english": "Someone... seems to be whispering.",
						"japanese": "誰かが…囁いているようだ。",
						"chinese": "好像有人…在低语。",
						"french": "Quelqu'un... semble chuchoter.",
						"spanish": "Alguien... parece estar susurrando.",
						"vietnamese": "Ai đó... dường như đang thì thầm.",
						"thai": "เหมือนมีใครบางคน…กระซิบอยู่",
						"hindi": "कोई… फुसफुसा रहा है, ऐसा लगता है।"
					}
				},
				{
					"content": {
						"korean": "머리가 울려. 뭐가 진짜고 가짜야?",
						"english": "My head is throbbing. What's real and what's fake?",
						"japanese": "頭が響く。何が本当で、何が偽物なんだ？",
						"chinese": "脑子嗡嗡作响。什么是真，什么是假？",
						"french": "Ma tête résonne. Qu'est-ce qui est réel et qu'est-ce qui est faux ?",
						"spanish": "Me zumba la cabeza. ¿Qué es real y qué es falso?",
						"vietnamese": "Đầu tôi ong ong. Cái gì thật, cái gì giả đây?",
						"thai": "หัวฉันปั่นป่วน อะไรจริง อะไรปลอม?",
						"hindi": "मेरा सिर गूँज रहा है। क्या सच है और क्या झूठ?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_1"
				},
				{
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…이것은 단순한 환상이 아니야. 유적이 우리를 시험하고 있어.",
						"english": "...This isn't just a simple illusion. The ruins are testing us.",
						"japanese": "…これは単純な幻想じゃない。遺跡が私たちを試しているんだ。",
						"chinese": "…这不只是简单的幻象。遗迹正在考验我们。",
						"french": "...Ce n'est pas une simple illusion. Les ruines nous mettent à l'épreuve.",
						"spanish": "...Esto no es una simple ilusión. Las ruinas nos están poniendo a prueba.",
						"vietnamese": "...Đây không chỉ là ảo ảnh đơn thuần. Di tích đang thử thách chúng ta.",
						"thai": "…นี่ไม่ใช่แค่ภาพลวงตาธรรมดา ซากปรักหักพังกำลังทดสอบเรา",
						"hindi": "...यह सिर्फ एक भ्रम नहीं है। खंडहर हमें परख रहे हैं।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter",
					"spot": [
						2,
						2
					]
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "여기, 벽화가 있어.",
						"english": "Look, there's a mural here.",
						"japanese": "ここに、壁画がある。",
						"chinese": "这里有壁画。",
						"french": "Tiens, il y a une fresque ici.",
						"spanish": "Mira, aquí hay un mural.",
						"vietnamese": "Này, có một bức bích họa ở đây.",
						"thai": "ดูสิ มีภาพจิตรกรรมฝาผนังอยู่ที่นี่",
						"hindi": "देखो, यहाँ एक भित्तिचित्र है।"
					}
				},
				{
					"content": {
						"korean": "뭐가 그려져 있는데?",
						"english": "What's drawn on it?",
						"japanese": "何が描かれているの？",
						"chinese": "画的是什么？",
						"french": "Qu'est-ce qui est dessiné dessus ?",
						"spanish": "¿Qué hay dibujado?",
						"vietnamese": "Vẽ gì vậy?",
						"thai": "วาดอะไรไว้?",
						"hindi": "उस पर क्या बना है?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "얼어붙은 샤먼의 모습… 그런데 저 눈동자… 우리를 보고 있는 것 같아.",
						"english": "A frozen shaman... but those eyes... they seem to be watching us.",
						"japanese": "凍りついたシャーマンの姿…でもあの瞳…私たちを見ているようだ。",
						"chinese": "被冰冻的萨满……但是那双眼睛……好像在看着我们。",
						"french": "L'image d'un chaman gelé... mais ces yeux... ils semblent nous regarder.",
						"spanish": "La imagen de un chamán congelado... pero esos ojos... parecen estar observándonos.",
						"vietnamese": "Bóng dáng một pháp sư đóng băng… Nhưng đôi mắt kia… dường như đang dõi theo chúng ta.",
						"thai": "ร่างทรงที่ถูกแช่แข็ง... แต่ดวงตาคู่นั้น... เหมือนกำลังจ้องมองเราอยู่",
						"hindi": "एक जमा हुआ शमन... लेकिन वो आँखें... ऐसा लगता है कि वे हमें देख रही हैं।"
					}
				},
				{
					"content": {
						"korean": "그냥 그림 아니야?",
						"english": "Isn't it just a painting?",
						"japanese": "ただの絵じゃないの？",
						"chinese": "不就是一幅画吗？",
						"french": "Ce n'est qu'une peinture, non ?",
						"spanish": "¿No es solo una pintura?",
						"vietnamese": "Chẳng phải chỉ là một bức tranh thôi sao?",
						"thai": "ก็แค่ภาพวาดไม่ใช่เหรอ?",
						"hindi": "क्या यह सिर्फ एक पेंटिंग नहीं है?"
					},
					"speaker": "character_2",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아니. 이 감각… 분명해.",
						"english": "No. This feeling... it's clear.",
						"japanese": "いや。この感覚…はっきりしている。",
						"chinese": "不。这种感觉……很明确。",
						"french": "Non. Cette sensation... c'est évident.",
						"spanish": "No. Esta sensación... es clara.",
						"vietnamese": "Không. Cảm giác này… rất rõ ràng.",
						"thai": "ไม่... ความรู้สึกนี้... ชัดเจนเลย",
						"hindi": "नहीं। यह एहसास... स्पष्ट है।"
					},
					"speaker": "eira",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "이 샤먼은… 잊힌 존재의 기록자였어.",
						"english": "This shaman... was a chronicler of forgotten beings.",
						"japanese": "このシャーマンは…忘れ去られた存在の記録者だった。",
						"chinese": "这位萨满……是遗忘存在的记录者。",
						"french": "Ce chaman... était le chroniqueur des êtres oubliés.",
						"spanish": "Este chamán... era el cronista de los seres olvidados.",
						"vietnamese": "Pháp sư này… là người ghi chép về những thực thể bị lãng quên.",
						"thai": "ร่างทรงคนนี้... เป็นผู้บันทึกเรื่องราวของสิ่งมีชีวิตที่ถูกลืม",
						"hindi": "यह शमन... भूले हुए प्राणियों का इतिहासकार था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "잊힌 존재?",
						"english": "Forgotten beings?",
						"japanese": "忘れ去られた存在？",
						"chinese": "遗忘存在？",
						"french": "Des êtres oubliés ?",
						"spanish": "¿Seres olvidados?",
						"vietnamese": "Thực thể bị lãng quên?",
						"thai": "สิ่งมีชีวิตที่ถูกลืม?",
						"hindi": "भूले हुए प्राणी?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "샤먼의 얼굴에 희미한 눈물 자국이 보여… 이 슬픔은 어디에서 오는 걸까.",
						"english": "Faint tear streaks are visible on the shaman's face... Where does this sorrow come from?",
						"japanese": "シャーマンの顔に薄い涙の跡が見える…この悲しみはどこから来るのだろう。",
						"chinese": "萨满的脸上隐约可见泪痕……这份悲伤从何而来？",
						"french": "De faibles traces de larmes sont visibles sur le visage du chaman... D'où vient cette tristesse ?",
						"spanish": "Se ven leves rastros de lágrimas en el rostro del chamán... ¿De dónde viene esta tristeza?",
						"vietnamese": "Trên mặt pháp sư có vết nước mắt mờ nhạt… Nỗi buồn này đến từ đâu?",
						"thai": "มีรอยน้ำตาจางๆ บนใบหน้าของร่างทรง... ความเศร้านี้มาจากไหนกันนะ",
						"hindi": "शमन के चेहरे पर आँसुओं के हल्के निशान दिख रहे हैं... यह दुख कहाँ से आता है?"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "거대한 그림자가 벽화를 스쳐 지나갔다.",
						"english": "A giant shadow swept past the mural.",
						"japanese": "巨大な影が壁画をかすめて通り過ぎた。",
						"chinese": "一个巨大的影子掠过壁画。",
						"french": "Une ombre gigantesque a balayé la fresque.",
						"spanish": "Una sombra gigantesca pasó por el mural.",
						"vietnamese": "Một cái bóng khổng lồ lướt qua bức bích họa.",
						"thai": "เงาขนาดใหญ่พาดผ่านจิตรกรรมฝาผนัง",
						"hindi": "एक विशाल छाया भित्तिचित्र के पास से गुजरी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_1",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "저 그림자… 방금 움직였어!",
						"english": "That shadow... it just moved!",
						"japanese": "あの影…今、動いた！",
						"chinese": "那个影子……刚刚动了！",
						"french": "Cette ombre... elle vient de bouger !",
						"spanish": "¡Esa sombra... acaba de moverse!",
						"vietnamese": "Cái bóng đó… vừa mới di chuyển!",
						"thai": "เงานั้น... มันเพิ่งขยับ!",
						"hindi": "वह छाया... अभी-अभी हिली है!"
					}
				},
				{
					"content": {
						"korean": "…이곳은 누군가의 영역이야.",
						"english": "...This place is someone's domain.",
						"japanese": "…ここは誰かの領域だ。",
						"chinese": "……这里是某个人的领域。",
						"french": "...Cet endroit est le domaine de quelqu'un.",
						"spanish": "...Este lugar es el dominio de alguien.",
						"vietnamese": "…Nơi này là lãnh địa của ai đó.",
						"thai": "ที่นี่... เป็นอาณาเขตของใครบางคน",
						"hindi": "...यह जगह किसी का क्षेत्र है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "유적의 바닥이 갑자기 얼어붙었다가, 뜨거워졌다. 규칙이 뒤섞였다.",
						"english": "The floor of the ruins suddenly froze, then became scorching hot. The rules have been scrambled.",
						"japanese": "遺跡の床が突然凍りつき、そして熱くなった。法則が混ざり合った。",
						"chinese": "遗迹的地板突然结冰，然后变得炙热。规则被打乱了。",
						"french": "Le sol des ruines a soudainement gelé, puis est devenu brûlant. Les règles ont été chamboulées.",
						"spanish": "El suelo de las ruinas se congeló de repente, luego se volvió abrasador. Las reglas se han mezclado.",
						"vietnamese": "Nền di tích đột nhiên đóng băng, rồi trở nên nóng bỏng. Các quy tắc đã bị đảo lộn.",
						"thai": "พื้นของซากปรักหักพังจู่ๆ ก็กลายเป็นน้ำแข็ง แล้วก็ร้อนระอุ กฎเกณฑ์ถูกปั่นป่วน",
						"hindi": "खंडहर का फर्श अचानक जम गया, फिर भयंकर गर्म हो गया। नियम अस्त-व्यस्त हो गए हैं।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "미쳐버리겠어! 뭐가 맞는 거야?",
						"english": "I'm going crazy! What's even real?",
						"japanese": "おかしくなりそうだ！何が正しいんだ？",
						"chinese": "我要疯了！到底什么才是对的？",
						"french": "Je deviens fou ! Qu'est-ce qui est vrai ?",
						"spanish": "¡Me estoy volviendo loco! ¿Qué es lo correcto?",
						"vietnamese": "Tôi phát điên mất! Cái gì mới đúng đây?",
						"thai": "ฉันจะบ้าตายแล้ว! อะไรคือสิ่งที่ถูกต้องกันแน่?",
						"hindi": "मैं पागल हो रहा हूँ! क्या सही है?"
					}
				},
				{
					"action": "enter",
					"spot": [
						4,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "규칙이 무작위로 변하고 있어… 이건 단순한 함정이 아니야.",
						"english": "The rules are changing randomly... This isn't just a simple trap.",
						"japanese": "ルールがランダムに変わってる…これはただの罠じゃない。",
						"chinese": "规则正在随机改变…这不仅仅是简单的陷阱。",
						"french": "Les règles changent aléatoirement... Ce n'est pas un simple piège.",
						"spanish": "Las reglas están cambiando aleatoriamente... Esto no es solo una trampa simple.",
						"vietnamese": "Các quy tắc đang thay đổi ngẫu nhiên... Đây không phải là một cái bẫy đơn giản.",
						"thai": "กฎกำลังเปลี่ยนไปอย่างสุ่ม... นี่ไม่ใช่แค่กับดักธรรมดา",
						"hindi": "नियम बेतरतीब ढंग से बदल रहे हैं... यह सिर्फ एक साधारण जाल नहीं है।"
					},
					"speaker": "eira",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "대체 누가 이런 짓을…?",
						"english": "Who... who's behind all this?",
						"japanese": "一体誰がこんなことを…？",
						"chinese": "到底是谁干的…？",
						"french": "Qui... qui fait ça ?",
						"spanish": "¿Quién... quién está haciendo esto?",
						"vietnamese": "Rốt cuộc ai đã làm chuyện này...?",
						"thai": "ใครกันแน่ที่เป็นคนทำเรื่องนี้...?",
						"hindi": "आखिर यह सब कौन कर रहा है...?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_3"
				},
				{
					"content": {
						"korean": "혼란 속에서 길을 잃어라.",
						"english": "Lose your way in the chaos.",
						"japanese": "混沌の中で道を見失え。",
						"chinese": "在混乱中迷失方向吧。",
						"french": "Perdez votre chemin dans le chaos.",
						"spanish": "Piérdete en el caos.",
						"vietnamese": "Hãy lạc lối trong hỗn loạn đi.",
						"thai": "จงหลงทางในความวุ่นวาย",
						"hindi": "अराजकता में अपना रास्ता खो दो।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "…누구냐!",
						"english": "...Who's there!",
						"japanese": "…誰だ！",
						"chinese": "…是谁！",
						"french": "...Qui est là !",
						"spanish": "¡...Quién eres!",
						"vietnamese": "...Ai đó!",
						"thai": "...ใครน่ะ!",
						"hindi": "...कौन है!"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "…겨우 여기까지인가. 흐름은… 계속된다.",
						"english": "…Is this all? The flow… continues.",
						"japanese": "…ここまでか。流れは…続く。",
						"chinese": "…仅此而已吗。潮流…仍在继续。",
						"french": "…C'est tout ? Le flux… continue.",
						"spanish": "…¿Esto es todo? El flujo… continúa.",
						"vietnamese": "…Chỉ đến đây thôi sao. Dòng chảy… vẫn tiếp diễn.",
						"thai": "…แค่นี้เองหรือเปล่า กระแส…ยังคงดำเนินต่อไป",
						"hindi": "…बस यहीं तक? प्रवाह… जारी है।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이게 끝이 아니라고…?",
						"english": "This isn't the end…?",
						"japanese": "これが終わりじゃないと…？",
						"chinese": "这还不是结局…？",
						"french": "Ce n'est pas la fin…?",
						"spanish": "¿Esto no es el final…?",
						"vietnamese": "Đây không phải là kết thúc sao…?",
						"thai": "นี่ไม่ใช่จุดจบ…หรือ?",
						"hindi": "ये अंत नहीं है…?"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "멈췄어… 하지만… 이 룬 문자는… 더 깊은 곳을 가리키고 있어.",
						"english": "It stopped… But… these runes… point to something deeper.",
						"japanese": "止まった…しかし…このルーン文字は…より深い場所を示している。",
						"chinese": "停止了…但是…这些符文…指向更深处。",
						"french": "Ça s'est arrêté… Mais… ces runes… indiquent un endroit plus profond.",
						"spanish": "Se detuvo… Pero… estas runas… señalan un lugar más profundo.",
						"vietnamese": "Nó đã dừng lại… Nhưng… những ký tự rune này… chỉ đến một nơi sâu hơn.",
						"thai": "มันหยุดแล้ว… แต่… อักษรรูนพวกนี้… ชี้ไปยังที่ลึกกว่า",
						"hindi": "यह रुक गया… लेकिन… ये रूनिक अक्षर… एक गहरी जगह की ओर इशारा कर रहे हैं।"
					}
				},
				{
					"content": {
						"korean": "모래시계의 모래는 멈췄지만, 유적의 심장은 아직 뛰고 있었다.",
						"english": "The sands of the hourglass ceased, yet the ruins' heart still beat.",
						"japanese": "砂時計の砂は止まったが、遺跡の心臓はまだ鼓動していた。",
						"chinese": "沙漏的沙子停止了流动，但遗迹的心脏仍在跳动。",
						"french": "Le sable du sablier s'est arrêté, mais le cœur de la ruine battait toujours.",
						"spanish": "La arena del reloj de arena se detuvo, pero el corazón de las ruinas aún latía.",
						"vietnamese": "Cát trong đồng hồ cát đã ngừng, nhưng trái tim của phế tích vẫn còn đập.",
						"thai": "ทรายในนาฬิกาทรายหยุดลงแล้ว แต่หัวใจของซากปรักหักพังยังคงเต้นอยู่",
						"hindi": "रेतघड़ी की रेत रुक गई, लेकिन खंडहरों का हृदय अभी भी धड़क रहा था।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "광기에 잠식될 시간이다.",
						"english": "Time to be consumed by madness.",
						"japanese": "狂気に侵食される時が来た。",
						"chinese": "是时候被疯狂吞噬了。",
						"french": "Il est temps d'être consumé par la folie.",
						"spanish": "Es hora de ser consumido por la locura.",
						"vietnamese": "Đã đến lúc bị nhấn chìm trong sự điên loạn.",
						"thai": "ได้เวลาถูกกลืนกินด้วยความบ้าคลั่งแล้ว",
						"hindi": "अब विक्षिप्तता में डूबने का समय है।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…아직 끝나지 않았어.",
						"english": "…It's not over yet.",
						"japanese": "…まだ終わっていない。",
						"chinese": "…还没有结束。",
						"french": "…Ce n'est pas encore fini.",
						"spanish": "…Aún no ha terminado.",
						"vietnamese": "…Vẫn chưa kết thúc.",
						"thai": "…ยังไม่จบ",
						"hindi": "…अभी खत्म नहीं हुआ है।"
					}
				},
				{
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						2
					]
				},
				{
					"content": {
						"korean": "포기하면 안 돼… 진실은 아직 저 너머에.",
						"english": "Don't give up… The truth is still beyond.",
						"japanese": "諦めるな…真実はまだその先にある。",
						"chinese": "不要放弃…真相仍在彼岸。",
						"french": "N'abandonne pas… La vérité est encore au-delà.",
						"spanish": "No te rindas… La verdad aún está más allá.",
						"vietnamese": "Đừng bỏ cuộc… Sự thật vẫn còn ở phía trước.",
						"thai": "อย่ายอมแพ้… ความจริงยังคงอยู่เบื้องหลัง",
						"hindi": "हार मत मानो… सच अभी भी उस पार है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira"
				}
			],
			"dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "내 영역에 들어온 자들… 길을 잃을 시간이다.",
						"english": "Those who enter my domain... It's time to lose your way.",
						"japanese": "我が領域に入りし者たちよ…道を見失う時だ。",
						"chinese": "闯入我领地之人…是时候迷失方向了。",
						"french": "Ceux qui entrent dans mon domaine... Il est temps de vous perdre.",
						"spanish": "Aquellos que entran en mi dominio... Es hora de que se pierdan.",
						"vietnamese": "Những kẻ bước vào lãnh địa của ta... Đã đến lúc lạc lối rồi.",
						"thai": "ผู้ที่เข้ามาในอาณาเขตของข้า... ถึงเวลาที่จะหลงทางแล้ว",
						"hindi": "जो मेरे क्षेत्र में आते हैं... यह रास्ता भटकने का समय है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "네가 이 모든 걸 꾸민 거야?",
						"english": "Did you orchestrate all of this?",
						"japanese": "お前がこの全てを仕組んだのか？",
						"chinese": "是你策划了这一切吗？",
						"french": "C'est toi qui as orchestré tout ça ?",
						"spanish": "¿Tú planeaste todo esto?",
						"vietnamese": "Ngươi đã dàn xếp tất cả chuyện này à?",
						"thai": "คุณเป็นคนบงการเรื่องทั้งหมดนี้ใช่ไหม?",
						"hindi": "क्या यह सब तुमने किया है?"
					}
				},
				{
					"content": {
						"korean": "나는 그저 흐름의 일부. 너희의 절망을 지켜볼 뿐.",
						"english": "I am merely a part of the flow. I only observe your despair.",
						"japanese": "私はただ流れの一部。お前たちの絶望を見守るだけだ。",
						"chinese": "我只是洪流的一部分。只为旁观你们的绝望。",
						"french": "Je ne suis qu'une partie du courant. Je ne fais qu'observer votre désespoir.",
						"spanish": "Soy solo una parte del flujo. Solo observo vuestra desesperación.",
						"vietnamese": "Ta chỉ là một phần của dòng chảy. Chỉ quan sát sự tuyệt vọng của các ngươi thôi.",
						"thai": "ข้าเป็นเพียงส่วนหนึ่งของกระแส. เพียงแค่เฝ้าดูความสิ้นหวังของพวกเจ้า",
						"hindi": "मैं केवल प्रवाह का एक हिस्सा हूँ। मैं सिर्फ तुम्हारी निराशा देखता हूँ।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"action": "enter",
					"spot": [
						2,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "네 이름은… 잊힌 전설에서 본 적이 있어.",
						"english": "Your name... I've seen it in forgotten legends.",
						"japanese": "お前の名前は…忘れられた伝説で見たことがある。",
						"chinese": "你的名字…我在被遗忘的传说中见过。",
						"french": "Ton nom... Je l'ai déjà vu dans des légendes oubliées.",
						"spanish": "Tu nombre... lo he visto en leyendas olvidadas.",
						"vietnamese": "Tên của ngươi... Ta đã từng thấy trong truyền thuyết bị lãng quên.",
						"thai": "ชื่อของเจ้า... ข้าเคยเห็นมันในตำนานที่ถูกลืมเลือน",
						"hindi": "तुम्हारा नाम... मैंने इसे भूली हुई किंवदंतियों में देखा है।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "기억해 봤자 소용없다. 너희는 여기서 끝난다.",
						"english": "It's useless to remember. You will end here.",
						"japanese": "思い出しても無駄だ。お前たちはここで終わりだ。",
						"chinese": "记住也毫无用处。你们将在此终结。",
						"french": "Inutile de se souvenir. Vous finissez ici.",
						"spanish": "Es inútil recordarlo. Aquí termináis.",
						"vietnamese": "Nhớ cũng vô ích thôi. Các ngươi sẽ kết thúc tại đây.",
						"thai": "จำไปก็ไร้ประโยชน์. พวกเจ้าจะจบลงที่นี่",
						"hindi": "याद करने का कोई फायदा नहीं। तुम यहीं खत्म होगे।"
					}
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "아니, 나는… 모든 것을 기억할 거야.",
						"english": "No, I… I will remember everything.",
						"japanese": "いや、私は…全てを記憶するだろう。",
						"chinese": "不，我…我将记住所有的一切。",
						"french": "Non, je… je me souviendrai de tout.",
						"spanish": "No, yo… yo recordaré todo.",
						"vietnamese": "Không, tôi… tôi sẽ nhớ mọi thứ.",
						"thai": "ไม่สิ, ฉันจะ… จดจำทุกสิ่ง",
						"hindi": "नहीं, मैं… मैं सब कुछ याद रखूँगा।"
					}
				}
			]
		}
	]
} as const;
