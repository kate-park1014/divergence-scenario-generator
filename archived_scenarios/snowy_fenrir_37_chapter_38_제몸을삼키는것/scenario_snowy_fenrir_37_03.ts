export const scenario_snowy_fenrir_37_03 = {
	"scenario_id": "snowy_fenrir_37_03",
	"order": 3,
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
			"늑대는 굶주렸다. 모든 것을 삼킬 듯.",
			"그러나 가장 먼저 삼킨 것은, 제 자신의 육체.",
			"그럼에도 늑대는 줄지 않았다.",
			"그것은 끝없는 허기, 혹은 저주였다."
		],
		"english": [
			"The wolf was hungry. As if to devour everything.",
			"But the first thing it devoured was its own flesh.",
			"Yet, the wolf did not diminish.",
			"It was an endless hunger, or a curse."
		],
		"japanese": [
			"狼は飢えていた。すべてを食い尽くすかのように。",
			"だが、最初に食い尽くしたのは、自身の肉体。",
			"それでも、狼は減らなかった。",
			"それは終わりのない飢え、あるいは呪いだった。"
		],
		"chinese": [
			"狼饥饿了。仿佛要吞噬一切。",
			"然而最先吞噬的，是它自己的肉体。",
			"即便如此，狼也未曾减少。",
			"那是一场无尽的饥饿，亦或是诅咒。"
		],
		"french": [
			"Le loup avait faim. Comme s'il allait tout dévorer.",
			"Pourtant, la première chose qu'il dévora fut sa propre chair.",
			"Pourtant, le loup ne diminua pas.",
			"C'était une faim insatiable, ou une malédiction."
		],
		"spanish": [
			"El lobo estaba hambriento. Como si fuera a devorar todo.",
			"Pero lo primero que devoró fue su propio cuerpo.",
			"Sin embargo, el lobo no disminuyó.",
			"Era un hambre sin fin, o una maldición."
		],
		"vietnamese": [
			"Con sói đói. Như thể nuốt chửng mọi thứ.",
			"Nhưng thứ đầu tiên nó nuốt chửng, là chính cơ thể của nó.",
			"Dù vậy, con sói vẫn không hề suy giảm.",
			"Đó là cơn đói vô tận, hoặc một lời nguyền."
		],
		"thai": [
			"หมาป่าหิวโหย ราวกับจะกลืนกินทุกสิ่ง",
			"แต่สิ่งแรกที่มันกลืนกิน คือเนื้อของมันเอง",
			"กระนั้น หมาป่าก็ไม่ลดน้อยลง",
			"มันคือความหิวโหยไม่สิ้นสุด หรือคำสาป"
		],
		"hindi": [
			"भेड़िया भूखा था। मानो सब कुछ निगल जाएगा।",
			"लेकिन सबसे पहले उसने अपने ही शरीर को निगला।",
			"फिर भी, भेड़िया कम नहीं हुआ।",
			"यह एक अंतहीन भूख थी, या एक अभिशाप।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "사체와 뼈가 무너지고 솟는 기이한 공간.",
						"english": "A strange space where corpses and bones collapse and rise.",
						"japanese": "死体と骨が崩れ、湧き上がる奇妙な空間。",
						"chinese": "一个尸体和骨骼崩塌又涌出的奇异空间。",
						"french": "Un espace étrange où cadavres et os s'effondrent et jaillissent.",
						"spanish": "Un espacio extraño donde cadáveres y huesos se derrumban y emergen.",
						"vietnamese": "Một không gian kỳ lạ nơi xác chết và xương cốt sụp đổ rồi trỗi dậy.",
						"thai": "พื้นที่แปลกประหลาดที่ซึ่งซากศพและกระดูกพังทลายและผุดขึ้นมา",
						"hindi": "एक अजीब जगह जहाँ लाशें और हड्डियाँ ढहती और उभरती हैं।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "여긴 대체… 뭐야?",
						"english": "What in the world... is this place?",
						"japanese": "ここは一体…何だ？",
						"chinese": "这里到底…是什么？",
						"french": "Mais qu'est-ce que... c'est que cet endroit ?",
						"spanish": "¿Qué demonios... es esto?",
						"vietnamese": "Nơi này rốt cuộc... là gì vậy?",
						"thai": "ที่นี่มัน... อะไรกันแน่?",
						"hindi": "आखिर यह जगह... क्या है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "eira",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "기록해야 해. 굶주림이 형태를 파괴하고 재구성하는 순간을.",
						"english": "I must record this. The moment hunger destroys and reconstructs form.",
						"japanese": "記録しなければ。飢えが形を破壊し、再構築する瞬間を。",
						"chinese": "我必须记录下来。饥饿破坏并重塑形态的瞬间。",
						"french": "Je dois le consigner. L'instant où la faim détruit et reconstruit les formes.",
						"spanish": "Debo registrar esto. El momento en que el hambre destruye y reconstruye la forma.",
						"vietnamese": "Phải ghi lại. Khoảnh khắc cơn đói hủy diệt và tái tạo hình hài.",
						"thai": "ฉันต้องบันทึกไว้ ช่วงเวลาที่ความหิวโหยทำลายและสร้างรูปร่างใหม่",
						"hindi": "मुझे यह दर्ज करना होगा। वह क्षण जब भूख स्वरूप को नष्ट और पुनर्निर्माण करती है।"
					},
					"emotion": "base"
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
					"spot": [
						2,
						3
					],
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "늑대가 제 몸을 뜯어먹고 있어.",
						"english": "The wolf is devouring its own body.",
						"japanese": "狼が自分の体を食い破っている。",
						"chinese": "狼正在啃食它自己的身体。",
						"french": "Le loup dévore son propre corps.",
						"spanish": "El lobo está devorando su propio cuerpo.",
						"vietnamese": "Con sói đang xé xác ăn thịt chính nó.",
						"thai": "หมาป่ากำลังฉีกทึ้งกินร่างกายตัวเอง",
						"hindi": "भेड़िया अपने ही शरीर को खा रहा है।"
					},
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "자기를? 미쳤군.",
						"english": "Itself? That's insane.",
						"japanese": "自分を？正気じゃない。",
						"chinese": "吃自己？疯了。",
						"french": "Lui-même ? C'est fou.",
						"spanish": "¿A sí mismo? Eso es una locura.",
						"vietnamese": "Chính nó ư? Điên rồi.",
						"thai": "ตัวเองเหรอ? บ้าไปแล้ว",
						"hindi": "खुद को? यह पागलपन है।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "아니, 본능이야. 굶주림에 가릴 게 없는 거지.",
						"english": "No, it's instinct. Nothing can obscure its hunger.",
						"japanese": "いや、本能だ。飢えには何も隠せない。",
						"chinese": "不，那是本能。饥饿面前，无所顾忌。",
						"french": "Non, c'est l'instinct. Rien ne peut cacher sa faim.",
						"spanish": "No, es instinto. Nada puede ocultar su hambre.",
						"vietnamese": "Không, đó là bản năng. Cơn đói không che đậy bất cứ điều gì.",
						"thai": "ไม่ มันคือสัญชาตญาณ ความหิวโหยไม่มีสิ่งใดบดบังได้",
						"hindi": "नहीं, यह वृत्ति है। भूख के आगे कुछ भी नहीं छिप सकता।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "삼킨 모든 것이 동공으로 사라져.",
						"english": "All consumed vanishes into the pupil.",
						"japanese": "飲み込んだすべてが瞳孔に消える。",
						"chinese": "吞噬的一切都消失在瞳孔中。",
						"french": "Tout ce qui est avalé disparaît dans la pupille.",
						"spanish": "Todo lo tragado desaparece en la pupila.",
						"vietnamese": "Mọi thứ nuốt vào đều biến mất vào đồng tử.",
						"thai": "ทุกสิ่งที่กลืนกินหายไปในรูม่านตา",
						"hindi": "निगला गया सब कुछ पुतली में गायब हो जाता है।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "eira",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "놀랍게도… 제 살을 먹어도 늑대는 줄지 않아.",
						"english": "Surprisingly… even eating its own flesh, the wolf doesn't shrink.",
						"japanese": "驚くべきことに…自分の肉を食べても、狼は減らない。",
						"chinese": "令人惊讶的是……即使吃了自己的肉，狼也不会减少。",
						"french": "Étonnamment… même en mangeant sa propre chair, le loup ne diminue pas.",
						"spanish": "Sorprendentemente… incluso comiendo su propia carne, el lobo no se encoge.",
						"vietnamese": "Đáng ngạc nhiên là… ngay cả khi ăn thịt chính mình, con sói vẫn không suy giảm.",
						"thai": "น่าแปลกที่... แม้จะกินเนื้อตัวเอง หมาป่าก็ไม่ลดลง",
						"hindi": "आश्चर्यजनक रूप से… अपना मांस खाने पर भी भेड़िया कम नहीं होता।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그럼 먹는 게 무슨 의미야?",
						"english": "What's the meaning of eating, then?",
						"japanese": "なら食べる意味は何だ？",
						"chinese": "那吃有什么意义？",
						"french": "Alors, quel est l'intérêt de manger ?",
						"spanish": "¿Entonces, qué sentido tiene comer?",
						"vietnamese": "Vậy ăn có ý nghĩa gì?",
						"thai": "แล้วการกินมันมีความหมายอะไร?",
						"hindi": "तो खाने का क्या मतलब है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "의미? 모든 건 사라지고, 늑대는 그대로지.",
						"english": "Meaning? All vanishes, the wolf remains.",
						"japanese": "意味？すべては消え去り、狼はそのまま。",
						"chinese": "意义？一切都消失了，狼却依然如故。",
						"french": "Un sens ? Tout disparaît, et le loup reste le même.",
						"spanish": "¿Sentido? Todo desaparece, y el lobo permanece igual.",
						"vietnamese": "Ý nghĩa? Mọi thứ biến mất, và con sói vẫn như vậy.",
						"thai": "ความหมาย? ทุกอย่างหายไป แต่หมาป่ายังคงเดิม",
						"hindi": "अर्थ? सब कुछ गायब हो जाता है, और भेड़िया वैसा ही रहता है।"
					},
					"emotion": "sad",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "채워지지 않는 구멍 같아.",
						"english": "It's like an unfillable hole.",
						"japanese": "満たされない穴のようだ。",
						"chinese": "就像一个无法填满的洞。",
						"french": "C'est comme un gouffre insatiable.",
						"spanish": "Es como un agujero insaciable.",
						"vietnamese": "Giống như một cái hố không đáy.",
						"thai": "เหมือนหลุมที่ไม่มีวันเติมเต็ม",
						"hindi": "यह एक न भरने वाले गड्ढे जैसा है।"
					},
					"emotion": "base",
					"speaker": "eira"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "eira",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "늑대는 계속 자신을 먹을 거야. 끝없이.",
						"english": "The wolf will keep eating itself. Endlessly.",
						"japanese": "狼は自分を食べ続けるだろう。永遠に。",
						"chinese": "狼会一直吃自己。无休止地。",
						"french": "Le loup continuera à se dévorer. Sans fin.",
						"spanish": "El lobo seguirá comiéndose a sí mismo. Sin fin.",
						"vietnamese": "Con sói sẽ tiếp tục ăn thịt chính mình. Vô tận.",
						"thai": "หมาป่าจะกินตัวเองต่อไป ไม่สิ้นสุด",
						"hindi": "भेड़िया खुद को खाता रहेगा। अनंत काल तक।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "변하는 건 아무것도 없다는 거야?",
						"english": "So nothing changes?",
						"japanese": "何も変わらないってことか？",
						"chinese": "意思是，什么都不会改变吗？",
						"french": "Rien ne change, alors ?",
						"spanish": "¿Nada cambia, entonces?",
						"vietnamese": "Vậy là không có gì thay đổi sao?",
						"thai": "ไม่มีอะไรเปลี่ยนแปลงเลยเหรอ?",
						"hindi": "तो क्या कुछ भी नहीं बदलता?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "…응. 이 잊힌 전설의 본질인가.",
						"english": "…Yes. Is this the essence of this forgotten legend?",
						"japanese": "…うん。これが忘れられた伝説の本質なのか。",
						"chinese": "……嗯。这就是被遗忘的传说的本质吗？",
						"french": "…Oui. Est-ce là l'essence de cette légende oubliée ?",
						"spanish": "…Sí. ¿Es esta la esencia de esta leyenda olvidada?",
						"vietnamese": "…Ừ. Đây có phải là bản chất của truyền thuyết bị lãng quên này không?",
						"thai": "...ใช่ นี่คือแก่นแท้ของตำนานที่ถูกลืมนี้หรือเปล่า?",
						"hindi": "…हाँ। क्या यही इस भूली हुई किंवदंती का सार है?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "소름 끼쳐. 멈춰야 해.",
						"english": "Chilling. It has to stop.",
						"japanese": "ゾッとする。止めなければ。",
						"chinese": "太可怕了。必须停止。",
						"french": "C'est terrifiant. Ça doit s'arrêter.",
						"spanish": "Es espeluznante. Debe parar.",
						"vietnamese": "Thật đáng sợ. Phải dừng lại.",
						"thai": "น่าขนลุก ต้องหยุดมัน",
						"hindi": "यह खौफनाक है। इसे रुकना चाहिए।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 굶주림이 모든 것을 집어삼켰다.",
						"english": "The colossal hunger devoured all.",
						"japanese": "巨大な飢えがすべてを飲み込んだ。",
						"chinese": "巨大的饥饿吞噬了一切。",
						"french": "Une faim colossale a tout dévoré.",
						"spanish": "Un hambre colosal lo devoró todo.",
						"vietnamese": "Cơn đói khổng lồ đã nuốt chửng mọi thứ.",
						"thai": "ความหิวโหยอันมหึมากลืนกินทุกสิ่ง",
						"hindi": "एक विशाल भूख ने सब कुछ निगल लिया।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "하찮은 저항이로군. 너희도 결국 먹이가 될 뿐.",
						"english": "Futile resistance. You too shall merely become prey.",
						"japanese": "くだらない抵抗だ。お前たちも結局は餌になるだけだ。",
						"chinese": "徒劳的反抗。你们也终将成为猎物。",
						"french": "Résistance futile. Vous aussi ne serez que des proies.",
						"spanish": "Resistencia inútil. Vosotros también seréis solo presas.",
						"vietnamese": "Sự kháng cự vô ích. Các ngươi rồi cũng chỉ là con mồi.",
						"thai": "การต่อต้านที่ไร้ค่า พวกเจ้าก็เป็นได้แค่เหยื่อเท่านั้น",
						"hindi": "व्यर्थ का प्रतिरोध। तुम भी बस शिकार बनोगे।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…아직 끝나지 않았어. 반드시 이 굶주림을 멈출 거야.",
						"english": "...It's not over yet. I will stop this hunger.",
						"japanese": "…まだ終わってない。必ずこの飢えを止めてみせる。",
						"chinese": "……还没结束。我一定会阻止这份饥饿。",
						"french": "...Ce n'est pas encore fini. J'arrêterai cette faim, coûte que coûte.",
						"spanish": "...Aún no ha terminado. Detendré esta hambre cueste lo que cueste.",
						"vietnamese": "...Chưa kết thúc đâu. Tôi nhất định sẽ ngăn chặn cơn đói này.",
						"thai": "...ยังไม่จบแค่นี้ ฉันจะหยุดยั้งความหิวโหยนี้ให้ได้",
						"hindi": "...अभी खत्म नहीं हुआ है। मैं इस भूख को ज़रूर रोकूँगा।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 길을 막아섰다.",
						"english": "A massive shadow barred the path.",
						"japanese": "巨大な影が道を塞いだ。",
						"chinese": "巨大的阴影挡住了去路。",
						"french": "Une ombre colossale bloquait le chemin.",
						"spanish": "Una sombra gigantesca bloqueó el camino.",
						"vietnamese": "Một cái bóng khổng lồ chặn đường.",
						"thai": "เงาขนาดยักษ์ขวางทาง",
						"hindi": "एक विशाल छाया ने रास्ता रोक दिया।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…왔는가. 나의 굶주림을 보러.",
						"english": "...You've come. To witness my hunger.",
						"japanese": "…来たか。我が飢えを見るために。",
						"chinese": "…来了吗。来见证我的饥饿。",
						"french": "...Tu es venu. Pour contempler ma faim.",
						"spanish": "...Has venido. A presenciar mi hambre.",
						"vietnamese": "...Ngươi đã đến. Để chứng kiến cơn đói của ta.",
						"thai": "...มาแล้วสินะ. มาดูความหิวโหยของข้า.",
						"hindi": "...आ गए। मेरी भूख देखने。"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "네가 모든 걸 삼키는 주범이군.",
						"english": "So you're the one devouring everything.",
						"japanese": "貴様が全てを飲み込む元凶か。",
						"chinese": "你就是吞噬一切的元凶。",
						"french": "C'est donc toi le coupable qui dévore tout.",
						"spanish": "Así que tú eres el culpable que lo devora todo.",
						"vietnamese": "Ngươi chính là kẻ đã nuốt chửng mọi thứ.",
						"thai": "เจ้าคือตัวการที่กลืนกินทุกสิ่งสินะ.",
						"hindi": "तो तुम ही हो वो, जो सब कुछ निगल रहा है।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "삼키는 것. 그것이 나의 존재 이유.",
						"english": "To devour. That is my reason for being.",
						"japanese": "飲み込むこと。それが我が存在理由。",
						"chinese": "吞噬。那是我存在的理由。",
						"french": "Dévore. C'est ma raison d'être.",
						"spanish": "Devorar. Esa es mi razón de existir.",
						"vietnamese": "Nuốt chửng. Đó là lý do tồn tại của ta.",
						"thai": "การกลืนกิน. นั่นคือเหตุผลของการมีอยู่ของข้า.",
						"hindi": "निगलना। यही मेरे अस्तित्व का कारण है।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "eira",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "그는 모든 것을 삼켜도, 채워지지 않는 공허 그 자체군.",
						"english": "Even after devouring everything, he remains a void that can't be filled.",
						"japanese": "彼は全てを飲み込んでも、満たされぬ虚無そのものだ。",
						"chinese": "他即使吞噬一切，也仍是无法填满的虚空本身。",
						"french": "Même après avoir tout dévoré, il reste le vide insatiable lui-même.",
						"spanish": "Aunque devore todo, él mismo es un vacío que no se puede llenar.",
						"vietnamese": "Dù hắn nuốt chửng mọi thứ, hắn vẫn là một khoảng trống không thể lấp đầy.",
						"thai": "แม้เขาจะกลืนกินทุกสิ่ง แต่ก็ยังคงเป็นความว่างเปล่าที่ไม่มีวันเต็ม.",
						"hindi": "वह सब कुछ निगलने के बाद भी, एक ऐसी शून्यता है जो कभी भरती नहीं।"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…감히 이해할 수 없을 것이다.",
						"english": "...You could never comprehend.",
						"japanese": "…貴様には理解できまい。",
						"chinese": "…你绝不可能理解。",
						"french": "...Tu ne pourras jamais comprendre.",
						"spanish": "...Jamás podrás comprender.",
						"vietnamese": "...Ngươi sẽ không thể nào hiểu được.",
						"thai": "...เจ้าไม่มีทางเข้าใจได้หรอก.",
						"hindi": "...तुम इसे कभी समझ नहीं पाओगे।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 나의 굶주림은… 멈추지 않아.",
						"english": "Ugh... My hunger... it won't stop.",
						"japanese": "ぐっ…我が飢えは…止まらぬ。",
						"chinese": "呃…我的饥饿…不会停止。",
						"french": "Argh... Ma faim... elle ne s'arrêtera pas.",
						"spanish": "Ugh... Mi hambre... no se detendrá.",
						"vietnamese": "Khụ... Cơn đói của ta... không ngừng lại.",
						"thai": "อึก... ความหิวโหยของข้า... ไม่หยุดยั้ง.",
						"hindi": "आह... मेरी भूख... रुक नहीं रही।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "언젠가… 모든 것을 삼킬 것이다.",
						"english": "Someday... I will devour everything.",
						"japanese": "いつか…全てを飲み込もう。",
						"chinese": "总有一天…我会吞噬一切。",
						"french": "Un jour... je dévorerai tout.",
						"spanish": "Algún día... lo devoraré todo.",
						"vietnamese": "Rồi một ngày... ta sẽ nuốt chửng tất cả.",
						"thai": "สักวัน... ข้าจะกลืนกินทุกสิ่ง.",
						"hindi": "किसी दिन... मैं सब कुछ निगल जाऊंगा।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럴 일 없어. 우리가 막을 거야.",
						"english": "That won't happen. We'll stop you.",
						"japanese": "そんなことはさせない。私たちが止める。",
						"chinese": "那不会发生。我们会阻止你。",
						"french": "Pas question. Nous t'arrêterons.",
						"spanish": "Eso no pasará. Te detendremos.",
						"vietnamese": "Sẽ không có chuyện đó đâu. Chúng ta sẽ ngăn ngươi lại.",
						"thai": "ไม่มีทาง. เราจะหยุดเจ้าเอง.",
						"hindi": "ऐसा नहीं होगा। हम तुम्हें रोकेंगे।"
					},
					"emotion": "angry"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "eira",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "기록. 굶주림은 육체를 잃어도 사라지지 않는 본능.",
						"english": "Record. Hunger is an instinct that doesn't disappear even if the body is lost.",
						"japanese": "記録。飢えは肉体を失っても消えぬ本能。",
						"chinese": "记录。饥饿是即使失去肉体也不会消失的本能。",
						"french": "Journal. La faim est un instinct qui ne disparaît pas même si le corps est perdu.",
						"spanish": "Registro. El hambre es un instinto que no desaparece aunque se pierda el cuerpo.",
						"vietnamese": "Ghi chú. Cơn đói là một bản năng không biến mất dù cơ thể có tan biến.",
						"thai": "บันทึก. ความหิวโหยคือสัญชาตญาณที่ไม่หายไปแม้จะสูญเสียร่างกาย.",
						"hindi": "रिकॉर्ड। भूख एक ऐसी वृत्ति है जो शरीर के नष्ट होने पर भी नहीं मिटती।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "늑대의 굶주림은 잠시 멈췄지만, 그 본질은 더 깊은 곳에 있었다.",
						"english": "The wolf's hunger paused for a moment, but its true nature lay deeper still.",
						"japanese": "狼の飢えは一時的に止まったが、その本質はより深き場所にあった。",
						"chinese": "狼的饥饿暂时停止了，但其本质却潜藏在更深之处。",
						"french": "La faim du loup s'était arrêtée un instant, mais sa véritable nature résidait encore plus profondément.",
						"spanish": "El hambre del lobo se detuvo por un momento, pero su verdadera esencia residía en un lugar aún más profundo.",
						"vietnamese": "Cơn đói của sói tạm thời ngừng lại, nhưng bản chất của nó lại nằm sâu hơn nữa.",
						"thai": "ความหิวโหยของหมาป่าหยุดลงชั่วขณะ แต่แก่นแท้ของมันกลับอยู่ลึกกว่านั้น.",
						"hindi": "भेड़िये की भूख एक पल के लिए रुक गई, लेकिन उसका असली स्वरूप कहीं गहरा था。"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 15
		}
	]
} as const;
