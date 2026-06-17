export const scenario_snowy_fenrir_16_02 = {
	"scenario_id": "snowy_fenrir_16_02",
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
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "혹독한 설원, 칼날 같은 눈보라가 몰아쳤다.",
						"english": "Harsh snowfield, a blade-like blizzard raged.",
						"japanese": "過酷な雪原、刃のような吹雪が荒れ狂った。",
						"chinese": "严酷的雪原，刀锋般的暴风雪肆虐。",
						"french": "Champ de neige rigoureux, un blizzard coupant faisait rage.",
						"spanish": "Un campo de nieve implacable, una ventisca cortante azotaba.",
						"vietnamese": "Cánh đồng tuyết khắc nghiệt, bão tuyết như lưỡi dao hoành hành.",
						"thai": "ทุ่งหิมะอันโหดร้าย พายุหิมะราวคมมีดโหมกระหน่ำ",
						"hindi": "कठोर बर्फीला मैदान, बर्फीला तूफ़ान एक धारदार ब्लेड की तरह था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이 혹한에서도, 놈의 기운은 느껴져.",
						"english": "Even in this bitter cold, its presence is felt.",
						"japanese": "この厳寒でも、奴の気配は感じられる。",
						"chinese": "即使在这严寒中，也能感受到它的气息。",
						"french": "Même dans ce froid glacial, sa présence se fait sentir.",
						"spanish": "Incluso en este frío amargo, su presencia se siente.",
						"vietnamese": "Ngay cả trong cái lạnh khắc nghiệt này, vẫn cảm nhận được sự hiện diện của nó.",
						"thai": "แม้ในความหนาวเหน็บนี้ ก็ยังสัมผัสได้ถึงพลังของมัน",
						"hindi": "इस कड़ाके की ठंड में भी, उसकी मौजूदगी महसूस होती है।"
					}
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira",
					"spot": [
						3,
						3
					]
				},
				{
					"content": {
						"korean": "잠깐. 저기 좀 봐.",
						"english": "Wait. Look over there.",
						"japanese": "待て。あれを見ろ。",
						"chinese": "等等。看那边。",
						"french": "Attends. Regarde là-bas.",
						"spanish": "Espera. Mira allí.",
						"vietnamese": "Khoan đã. Nhìn đằng kia kìa.",
						"thai": "เดี๋ยวสิ ดูนั่นสิ",
						"hindi": "रुको। उधर देखो।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "저 식물들… 갑자기 시들어버렸어.",
						"english": "Those plants... they suddenly withered.",
						"japanese": "あの植物が… 急にしおれてしまった。",
						"chinese": "那些植物… 突然枯萎了。",
						"french": "Ces plantes... elles se sont soudainement fanées.",
						"spanish": "Esas plantas... se marchitaron de repente.",
						"vietnamese": "Mấy cái cây kia... đột nhiên héo úa rồi.",
						"thai": "พืชพวกนั้น... จู่ๆ ก็เหี่ยวเฉาไป",
						"hindi": "वे पौधे... अचानक मुरझा गए।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "놈이 지나간 흔적이야. 단순한 동파가 아냐.",
						"english": "It's a trace of its passing. Not just frostbite.",
						"japanese": "奴が通り過ぎた痕跡だ。単なる凍傷ではない。",
						"chinese": "这是它经过的痕迹。并非简单的冻伤。",
						"french": "C'est une trace de son passage. Pas juste le gel.",
						"spanish": "Es un rastro de su paso. No es solo congelación.",
						"vietnamese": "Là dấu vết của nó đi qua. Không phải chỉ là bị đông lạnh đơn thuần.",
						"thai": "เป็นร่องรอยที่มันผ่านไป ไม่ใช่แค่ความเย็นจัด",
						"hindi": "यह उसके गुजरने का निशान है। सिर्फ पाला नहीं है।"
					},
					"speaker": "eira"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "계속 나타나고 있어. 놈의 움직임 뒤에 생명력이 사라져.",
						"english": "It keeps appearing. Life energy vanishes in its wake.",
						"japanese": "現れ続けている。奴の動きの後には生命力が消え去る。",
						"chinese": "它不断出现。在其移动之后，生命力随之消失。",
						"french": "Il apparaît sans cesse. L'énergie vitale disparaît après son passage.",
						"spanish": "Sigue apareciendo. La energía vital desaparece a su paso.",
						"vietnamese": "Nó cứ xuất hiện liên tục. Sau mỗi lần nó di chuyển, sinh lực biến mất.",
						"thai": "มันยังคงปรากฏตัวอยู่เบื้องหลังการเคลื่อนไหวของมัน พลังชีวิตก็หายไป",
						"hindi": "यह लगातार प्रकट हो रहा है। उसकी हलचल के बाद जीवन शक्ति गायब हो जाती है।"
					},
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "얼음마저 녹아버린 것 같아.",
						"english": "Even the ice seems to have melted.",
						"japanese": "氷まで溶けてしまったようだ。",
						"chinese": "连冰都好像融化了。",
						"french": "Même la glace semble avoir fondu.",
						"spanish": "Incluso el hielo parece haberse derretido.",
						"vietnamese": "Ngay cả băng cũng dường như đã tan chảy.",
						"thai": "แม้แต่น้ำแข็งก็ดูเหมือนจะละลายไปแล้ว",
						"hindi": "लगता है बर्फ भी पिघल गई है।"
					},
					"speaker": "character_2",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "이건 파괴가 아니라… 흡수야. 무언가를 빼앗아가고 있어.",
						"english": "This isn't destruction... it's absorption. It's taking something away.",
						"japanese": "これは破壊ではなく…吸収だ。何かを奪っている。",
						"chinese": "这不是破坏…是吸收。它正在夺走什么。",
						"french": "Ce n'est pas de la destruction... c'est de l'absorption. Ça prend quelque chose.",
						"spanish": "Esto no es destrucción... es absorción. Está quitando algo.",
						"vietnamese": "Đây không phải sự hủy diệt... mà là sự hấp thụ. Nó đang lấy đi thứ gì đó.",
						"thai": "นี่ไม่ใช่การทำลายล้าง... แต่มันคือการดูดกลืน มันกำลังพรากบางสิ่งไป",
						"hindi": "यह विनाश नहीं... बल्कि अवशोषण है। यह कुछ छीन रहा है।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "뭘?",
						"english": "What?",
						"japanese": "何を？",
						"chinese": "什么？",
						"french": "Quoi ?",
						"spanish": "¿Qué?",
						"vietnamese": "Cái gì?",
						"thai": "อะไร?",
						"hindi": "क्या?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "eira",
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "놈은 '결핍' 그 자체일지도 몰라. 끊임없이 채워야만 하는.",
						"english": "It might be 'deficiency' itself. Constantly needing to be filled.",
						"japanese": "奴は「欠乏」そのものなのかもしれない。絶えず満たされなければならない。",
						"chinese": "它可能就是“匮乏”本身。需要不断地被填补。",
						"french": "Il est peut-être la 'carence' elle-même. Un besoin constant d'être comblé.",
						"spanish": "Podría ser la 'deficiencia' en sí misma. Algo que necesita ser llenado constantemente.",
						"vietnamese": "Nó có thể là 'sự thiếu hụt' tự thân. Luôn cần được lấp đầy.",
						"thai": "มันอาจจะเป็น 'ความบกพร่อง' ในตัวเอง ที่ต้องได้รับการเติมเต็มอยู่ตลอดเวลา",
						"hindi": "यह 'कमी' का ही रूप हो सकता है। जिसे लगातार भरने की ज़रूरत है।"
					},
					"speaker": "eira"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "늑대가… 결핍? 이해가 안 돼.",
						"english": "A wolf... deficiency? I don't understand.",
						"japanese": "狼が…欠乏？理解できない。",
						"chinese": "狼…匮乏？我不明白。",
						"french": "Un loup... carence ? Je ne comprends pas.",
						"spanish": "¿Un lobo... deficiencia? No lo entiendo.",
						"vietnamese": "Một con sói... thiếu hụt? Tôi không hiểu.",
						"thai": "หมาป่า... ความบกพร่อง? ฉันไม่เข้าใจ",
						"hindi": "एक भेड़िया... कमी? मुझे समझ नहीं आ रहा।"
					},
					"speaker": "character_3"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "물질적인 굶주림이 아니야. 놈은… 존재를 흡수하고 있어.",
						"english": "It's not physical hunger. It's... absorbing existence itself.",
						"japanese": "物質的な飢えじゃない。奴は…存在を吸収している。",
						"chinese": "这不是物质上的饥饿。它在…吸收存在本身。",
						"french": "Ce n'est pas une faim matérielle. Il... absorbe l'existence elle-même.",
						"spanish": "No es un hambre material. Está... absorbiendo la existencia.",
						"vietnamese": "Không phải là cơn đói vật chất. Nó đang... hấp thụ sự tồn tại.",
						"thai": "นี่ไม่ใช่ความหิวทางกายภาพ มันกำลัง... ดูดกลืนการมีอยู่",
						"hindi": "यह भौतिक भूख नहीं है। यह... अस्तित्व को ही सोख रहा है।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 우린 뭘로 놈을 막아?",
						"english": "Then what do we stop it with?",
						"japanese": "じゃあ、何を以て奴を止める？",
						"chinese": "那我们用什么来阻止它？",
						"french": "Alors, avec quoi l'arrêtons-nous ?",
						"spanish": "¿Entonces con qué lo detenemos?",
						"vietnamese": "Vậy chúng ta ngăn chặn nó bằng cái gì?",
						"thai": "แล้วเราจะหยุดมันด้วยอะไร?",
						"hindi": "तो हम इसे कैसे रोकेंगे?"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						1,
						3
					],
					"speaker": "eira",
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "주변의 모든 것이 생기를 잃고 메말라갔다. 공허함만이 남았다.",
						"english": "Everything around lost its vitality and withered away. Only emptiness remained.",
						"japanese": "周囲の全てが生気を失い、枯れていった。虚無だけが残った。",
						"chinese": "周围的一切都失去了生机，枯萎了。只剩下空虚。",
						"french": "Tout autour perdait sa vitalité et se flétrissait. Seul le vide demeurait.",
						"spanish": "Todo alrededor perdió su vitalidad y se marchitó. Solo quedó el vacío.",
						"vietnamese": "Mọi thứ xung quanh mất đi sức sống và khô héo. Chỉ còn lại sự trống rỗng.",
						"thai": "ทุกสิ่งรอบตัวสูญเสียชีวิตชีวาและเหี่ยวเฉา เหลือเพียงความว่างเปล่า",
						"hindi": "आस-पास सब कुछ अपनी जीवंतता खोकर मुरझा गया। केवल शून्यता बची।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "사방이 죽어가고 있어.",
						"english": "Everything is dying around us.",
						"japanese": "四方が死んでいっている。",
						"chinese": "四面八方都在死去。",
						"french": "Tout autour est en train de mourir.",
						"spanish": "Todo alrededor está muriendo.",
						"vietnamese": "Mọi thứ xung quanh đang chết dần.",
						"thai": "ทุกหนแห่งกำลังจะตาย",
						"hindi": "चारों ओर सब कुछ मर रहा है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "놈의 힘이 강해질수록, 이 세계는 점점 더…",
						"english": "As its power grows stronger, this world increasingly...",
						"japanese": "奴の力が強くなるほど、この世界はますます…",
						"chinese": "它的力量越强，这个世界就越是…",
						"french": "Plus sa puissance augmente, plus ce monde...",
						"spanish": "Cuanto más fuerte se vuelve su poder, más este mundo...",
						"vietnamese": "Sức mạnh của nó càng mạnh, thế giới này càng...",
						"thai": "ยิ่งพลังของมันแข็งแกร่งขึ้น โลกนี้ก็ยิ่ง...",
						"hindi": "जैसे-जैसे उसकी शक्ति बढ़ती है, यह दुनिया और भी..."
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "우리도 저렇게 될까?",
						"english": "Will we end up like that?",
						"japanese": "我々もああなるのか？",
						"chinese": "我们也会变成那样吗？",
						"french": "Finirons-nous comme ça ?",
						"spanish": "¿Terminaremos así nosotros también?",
						"vietnamese": "Liệu chúng ta có trở thành như vậy không?",
						"thai": "เราจะเป็นแบบนั้นไหม?",
						"hindi": "क्या हम भी ऐसे ही हो जाएँगे?"
					},
					"speaker": "character_4"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "막아야 해. 놈의 본질을 밝혀내야만.",
						"english": "We must stop it. Uncover its true nature.",
						"japanese": "止めねば。奴の本質を暴かねばならない。",
						"chinese": "必须阻止它。揭露它的本质。",
						"french": "Nous devons l'arrêter. Révéler sa vraie nature.",
						"spanish": "Debemos detenerlo. Revelar su verdadera naturaleza.",
						"vietnamese": "Phải ngăn chặn nó. Phải phơi bày bản chất của nó.",
						"thai": "ต้องหยุดมัน เปิดเผยธาตุแท้ของมัน",
						"hindi": "हमें इसे रोकना होगा। इसकी असली प्रकृति का पता लगाना होगा।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "마침내, 놈이 나타났다. 공허한 눈빛의 그림자.",
						"english": "Finally, it appeared. A shadow with empty eyes.",
						"japanese": "ついに、奴が現れた。虚ろな眼差しの影。",
						"chinese": "终于，它出现了。一个眼神空洞的影子。",
						"french": "Enfin, il est apparu. Une ombre aux yeux vides.",
						"spanish": "Finalmente, apareció. Una sombra de ojos vacíos.",
						"vietnamese": "Cuối cùng, nó đã xuất hiện. Một bóng hình với đôi mắt trống rỗng.",
						"thai": "ในที่สุด มันก็ปรากฏตัว เงาที่มีดวงตาว่างเปล่า",
						"hindi": "अंत में, वह प्रकट हुआ। एक खाली आँखों वाली परछाई।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "굶주림… 채워지지 않아…",
						"english": "Hunger… Unsatisfied…",
						"japanese": "飢え… 満たされない…",
						"chinese": "饥饿… 无法满足…",
						"french": "Faim… Insatisfaite…",
						"spanish": "Hambre… Insatisfecha…",
						"vietnamese": "Đói… không thể lấp đầy…",
						"thai": "ความหิว… ไม่อิ่ม…",
						"hindi": "भूख… असंतुष्ट…"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "드디어…!",
						"english": "Finally…!",
						"japanese": "ついに…！",
						"chinese": "终于…！",
						"french": "Enfin… !",
						"spanish": "¡Por fin…!",
						"vietnamese": "Cuối cùng…!",
						"thai": "ในที่สุด…!",
						"hindi": "आखिरकार…!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "eira",
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "역시… 물리적인 존재가 아냐.",
						"english": "As expected… It's not a physical entity.",
						"japanese": "やはり… 物理的な存在ではない。",
						"chinese": "果然… 它不是物理实体。",
						"french": "Comme prévu… Ce n'est pas une entité physique.",
						"spanish": "Como esperaba… No es una entidad física.",
						"vietnamese": "Quả nhiên… Nó không phải là một thực thể vật lý.",
						"thai": "จริงด้วย… มันไม่ใช่ตัวตนทางกายภาพ",
						"hindi": "जैसा कि अपेक्षित था… यह एक भौतिक इकाई नहीं है।"
					},
					"speaker": "eira"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "모든 것을… 내게 바쳐라…",
						"english": "Offer everything… to me…",
						"japanese": "全てを… 我に捧げよ…",
						"chinese": "把一切… 献给我…",
						"french": "Offrez tout… à moi…",
						"spanish": "Ofrécelo todo… a mí…",
						"vietnamese": "Dâng hiến mọi thứ… cho ta…",
						"thai": "ถวายทุกสิ่ง… แก่ข้า…",
						"hindi": "सब कुछ… मुझे अर्पित करो…"
					},
					"speaker": "random_boss"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "놈의 공허한 눈빛이 모든 것을 집어삼켰다.",
						"english": "Its hollow gaze devoured everything.",
						"japanese": "奴の虚ろな眼差しが、全てを飲み込んだ。",
						"chinese": "它的空洞眼神吞噬了一切。",
						"french": "Son regard vide dévorait tout.",
						"spanish": "Su mirada vacía lo devoró todo.",
						"vietnamese": "Ánh mắt trống rỗng của nó nuốt chửng mọi thứ.",
						"thai": "แววตาที่ว่างเปล่าของมันกลืนกินทุกสิ่ง",
						"hindi": "उसकी खोखली नज़र ने सब कुछ निगल लिया।"
					}
				},
				{
					"content": {
						"korean": "너희의 생명력도… 나의 일부가 될 뿐.",
						"english": "Your life force... will merely become a part of me.",
						"japanese": "お前たちの生命力も…俺の一部となるだけだ。",
						"chinese": "你们的生命力…也只会成为我的一部分。",
						"french": "Votre force vitale… ne fera que devenir une partie de moi.",
						"spanish": "Vuestra fuerza vital... solo se convertirá en parte de mí.",
						"vietnamese": "Sinh lực của các ngươi… cũng sẽ chỉ trở thành một phần của ta.",
						"thai": "พลังชีวิตของพวกเจ้า... ก็จะกลายเป็นส่วนหนึ่งของข้าเท่านั้น",
						"hindi": "तुम्हारी जीवन शक्ति भी… बस मेरा एक हिस्सा बन जाएगी।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이렇게… 끝낼 순 없어!",
						"english": "I can't... end it like this!",
						"japanese": "こんな…終わり方はできない！",
						"chinese": "不能…就这样结束！",
						"french": "Je ne peux pas… finir comme ça !",
						"spanish": "¡No puedo… terminar así!",
						"vietnamese": "Không thể… kết thúc như thế này!",
						"thai": "จะจบแบบนี้... ไม่ได้นะ!",
						"hindi": "मैं ऐसे… खत्म नहीं कर सकता!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira",
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "놈은… 더 강해지고 있어…",
						"english": "It's... getting stronger...",
						"japanese": "奴は…もっと強くなっている。",
						"chinese": "它…变得更强了。",
						"french": "Il… devient plus fort…",
						"spanish": "Está… volviéndose más fuerte…",
						"vietnamese": "Nó… đang mạnh hơn…",
						"thai": "มัน... กำลังแข็งแกร่งขึ้น...",
						"hindi": "वह… और शक्तिशाली होता जा रहा है…"
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "멈출 수 없어… 이 공허함은… 영원히…",
						"english": "Cannot stop… This emptiness… Forever…",
						"japanese": "止められない… この虚無は… 永遠に…",
						"chinese": "无法停止… 这空虚… 永远…",
						"french": "Impossible d'arrêter… Ce vide… Pour toujours…",
						"spanish": "No puedo parar… Este vacío… Por siempre…",
						"vietnamese": "Không thể dừng lại… Sự trống rỗng này… Mãi mãi…",
						"thai": "หยุดไม่ได้… ความว่างเปล่านี้… ชั่วนิรันดร์…",
						"hindi": "रुक नहीं सकता… यह खालीपन… हमेशा के लिए…"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "해냈다…!",
						"english": "We did it…!",
						"japanese": "やった…！",
						"chinese": "成功了…！",
						"french": "On a réussi… !",
						"spanish": "¡Lo logramos…!",
						"vietnamese": "Đã làm được…!",
						"thai": "ทำได้แล้ว…!",
						"hindi": "हमने कर दिखाया…!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"duration_ms": 500,
					"speaker": "eira",
					"spot": [
						3,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "놈의 육체는 사라졌지만… 굶주림은 사라지지 않았어.",
						"english": "Its body vanished… but the hunger remains.",
						"japanese": "奴の肉体は消えたが… 飢えは消えなかった。",
						"chinese": "它的肉体消失了… 但饥饿并未消失。",
						"french": "Son corps a disparu… mais la faim demeure.",
						"spanish": "Su cuerpo desapareció… pero el hambre no.",
						"vietnamese": "Cơ thể nó biến mất… nhưng cơn đói vẫn còn đó.",
						"thai": "ร่างกายของมันหายไปแล้ว… แต่ความหิวยังไม่หายไป",
						"hindi": "उसका शरीर गायब हो गया… लेकिन भूख नहीं मिटी।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "잠시의 승리. 그러나 '흡수'의 그림자는 여전히 설원 위에 짙게 드리워 있었다.",
						"english": "A momentary victory. Yet, the shadow of 'Absorption' still loomed dark over the snowfield.",
						"japanese": "束の間の勝利。だが、「吸収」の影は未だ雪原に深く覆いかぶさっていた。",
						"chinese": "短暂的胜利。然而，“吸收”的阴影依然浓重地笼罩在雪原之上。",
						"french": "Une victoire éphémère. Pourtant, l'ombre de l'« Absorption » planait toujours, sombre, sur l'étendue enneigée.",
						"spanish": "Una victoria momentánea. Sin embargo, la sombra de la 'Absorción' seguía cerniéndose oscura sobre el campo nevado.",
						"vietnamese": "Một chiến thắng chớp nhoáng. Nhưng bóng tối của 'Hấp Thụ' vẫn bao trùm dày đặc trên cánh đồng tuyết.",
						"thai": "ชัยชนะชั่วคราว ทว่าเงาแห่ง 'การดูดซับ' ยังคงปกคลุมผืนหิมะอย่างมืดมิด",
						"hindi": "क्षण भर की जीत। फिर भी, 'अवशोषण' की छाया अभी भी बर्फीले मैदान पर गहरी छाई हुई थी।"
					}
				},
				{
					"content": {
						"korean": "진짜 굶주림은… 아직 끝나지 않았다.",
						"english": "The true hunger... hasn't ended yet.",
						"japanese": "真の飢えは…まだ終わっていなかった。",
						"chinese": "真正的饥饿…尚未结束。",
						"french": "La vraie faim… n'est pas encore terminée.",
						"spanish": "El hambre real... aún no ha terminado.",
						"vietnamese": "Cơn đói thật sự… vẫn chưa kết thúc.",
						"thai": "ความหิวโหยที่แท้จริง... ยังไม่จบลง",
						"hindi": "असली भूख… अभी खत्म नहीं हुई है।"
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
			"끝없는 설원, 숨 쉬는 모든 것이 얼어붙는 곳.",
			"놈의 그림자가 드리우자, 생명은 빛을 잃었다.",
			"단순한 파괴가 아니었다. 놈은, 모든 것을 흡수하고 있었다.",
			"우리는 깨달았다. 저 굶주림은, 물리적인 것이 아니라는 것을."
		],
		"english": [
			"Endless snowfield, where everything that breathes freezes.",
			"As its shadow fell, life lost its light.",
			"It wasn't mere destruction. It was absorbing everything.",
			"We realized. That hunger wasn't physical."
		],
		"japanese": [
			"果てしない雪原、息をするすべてが凍りつく場所。",
			"奴の影が差すと、生命は光を失った。",
			"単なる破壊ではなかった。奴は、すべてを吸収していた。",
			"我々は悟った。あの飢えは、物理的なものではないと。"
		],
		"chinese": [
			"无尽的雪原，所有生灵都冻结于此。",
			"当它的阴影降临，生命失去了光泽。",
			"这并非简单的破坏。它正在吞噬一切。",
			"我们意识到。那种饥饿，并非物质层面的。"
		],
		"french": [
			"Plaines enneigées infinies, où tout ce qui respire gèle.",
			"Alors que son ombre s'abattait, la vie perdit sa lumière.",
			"Ce n'était pas une simple destruction. Il absorbait tout.",
			"Nous avons réalisé. Cette faim n'était pas physique."
		],
		"spanish": [
			"Un campo de nieve interminable, donde todo lo que respira se congela.",
			"Cuando su sombra cayó, la vida perdió su luz.",
			"No era mera destrucción. Estaba absorbiéndolo todo.",
			"Nos dimos cuenta. Esa hambre no era física."
		],
		"vietnamese": [
			"Cánh đồng tuyết vô tận, nơi mọi sinh linh đều đóng băng.",
			"Khi bóng tối của nó bao trùm, sự sống mất đi ánh sáng.",
			"Không chỉ là sự hủy diệt đơn thuần. Nó đang hấp thụ mọi thứ.",
			"Chúng tôi nhận ra. Cơn đói đó, không phải về thể xác."
		],
		"thai": [
			"ทุ่งหิมะอันไร้ที่สิ้นสุด ที่ซึ่งทุกสิ่งที่หายใจล้วนแข็งตัว",
			"เมื่อเงาของมันทอดลง ชีวิตก็สิ้นแสง",
			"ไม่ใช่แค่การทำลายล้างธรรมดา มันกำลังดูดกลืนทุกสิ่ง",
			"เราตระหนักได้ว่า ความหิวกระหายนั้นไม่ใช่ทางกายภาพ"
		],
		"hindi": [
			"अंतहीन बर्फीला मैदान, जहाँ साँस लेने वाली हर चीज़ जम जाती है।",
			"जैसे ही उसकी छाया पड़ी, जीवन ने अपनी चमक खो दी।",
			"यह केवल विनाश नहीं था। वह सब कुछ सोख रहा था।",
			"हमने महसूस किया। वह भूख, शारीरिक नहीं थी।"
		]
	}
} as const;
