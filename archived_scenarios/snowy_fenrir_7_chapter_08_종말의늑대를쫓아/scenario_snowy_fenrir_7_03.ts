export const scenario_snowy_fenrir_7_03 = {
	"scenario_id": "snowy_fenrir_7_03",
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
			"설원의 그림자가 더욱 짙어진다.",
			"종말의 늑대. 그 이름에 걸맞지 않게.",
			"발소리 대신, 뼈 부딪히는 소리가 울린다.",
			"어딘가 비어있는 사냥감."
		],
		"english": [
			"The shadows on the snow grow deeper.",
			"The Wolf of the End. Unfitting its name.",
			"Not footsteps, but the clash of bone echoes.",
			"A strangely hollowed prey."
		],
		"japanese": [
			"雪原の影がさらに濃くなる。",
			"終焉の狼。その名に似合わず。",
			"足音の代わりに、骨がぶつかる音が響く。",
			"何かが欠けた獲物。"
		],
		"chinese": [
			"雪原的阴影更加深沉。",
			"终焉之狼。与其名不符。",
			"没有脚步声，只有骨骼碰撞的声音在回响。",
			"某种空虚的猎物。"
		],
		"french": [
			"L'ombre de la toundra s'assombrit.",
			"Le Loup de la Fin. Indigne de son nom.",
			"Au lieu de pas, le cliquetis d'os résonne.",
			"Une proie étrangement creuse."
		],
		"spanish": [
			"Las sombras de la tundra se intensifican.",
			"El Lobo del Fin. Indigno de su nombre.",
			"En lugar de pasos, el sonido de huesos chocando resuena.",
			"Una presa hueca."
		],
		"vietnamese": [
			"Bóng đêm tuyết nguyên càng lúc càng sâu thẳm.",
			"Sói Hủy Diệt. Không xứng với cái tên.",
			"Thay vì tiếng bước chân, chỉ có tiếng xương va chạm vang vọng.",
			"Một con mồi rỗng tuếch."
		],
		"thai": [
			"เงาของทุ่งหิมะทวีความมืดมิด.",
			"หมาป่าแห่งหายนะ. ไม่สมกับชื่อ.",
			"แทนที่จะเป็นเสียงฝีเท้า, เสียงกระดูกกระทบกันกลับก้องกังวาน.",
			"เหยื่อที่ดูว่างเปล่า."
		],
		"hindi": [
			"बर्फीले मैदान की छाया और गहरी होती जा रही है।",
			"प्रलय का भेड़िया। अपने नाम के योग्य नहीं।",
			"कदमों की आहट की जगह, हड्डियों के टकराने की आवाज़ गूँजती है।",
			"कहीं से खाली शिकार।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "뼈로 이루어진 그림자가 멀리서 보였다. 사냥감인가, 환영인가.",
						"english": "A skeletal shadow loomed in the distance. Prey, or phantasm?",
						"japanese": "遠くから骨でできた影が見えた。獲物か、幻か。",
						"chinese": "远处出现了一个由骨骼组成的影子。是猎物，还是幻影？",
						"french": "Une ombre faite d'os apparut au loin. Proie ou illusion ?",
						"spanish": "Una sombra hecha de huesos se vio a lo lejos. ¿Es presa, o una ilusión?",
						"vietnamese": "Một cái bóng làm từ xương hiện ra từ xa. Là con mồi, hay ảo ảnh?",
						"thai": "เงาที่ประกอบขึ้นจากกระดูกปรากฏขึ้นแต่ไกล. เป็นเหยื่อ, หรือภาพลวงตา?",
						"hindi": "दूर से हड्डियों से बनी एक छाया दिखाई दी। क्या यह शिकार है, या एक भ्रम?"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "저게 종말의 늑대라고?",
						"english": "That's the End Wolf?",
						"japanese": "あれが終焉の狼だと？",
						"chinese": "那就是终焉之狼吗？",
						"french": "C'est ça, le Loup de la Fin ?",
						"spanish": "¿Ese es el Lobo del Fin?",
						"vietnamese": "Đó là Sói Hủy Diệt sao?",
						"thai": "นั่นคือหมาป่าแห่งหายนะหรือ?",
						"hindi": "क्या वह प्रलय का भेड़िया है?"
					},
					"emotion": "base"
				},
				{
					"spot": [
						3,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "전설과는 다르군요. 녀석은… 달아나지 않아.",
						"english": "Unlike the legends. It... doesn't flee.",
						"japanese": "伝説とは違うな。奴は…逃げない。",
						"chinese": "和传说不一样啊。它…没有逃跑。",
						"french": "C'est différent des légendes. Il... ne s'enfuit pas.",
						"spanish": "Es diferente de las leyendas. Él... no huye.",
						"vietnamese": "Khác với truyền thuyết. Nó… không bỏ chạy.",
						"thai": "ไม่เหมือนในตำนานเลย. มัน… ไม่หนี.",
						"hindi": "यह कहानियों से अलग है। यह... भागता नहीं।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "…오히려 우릴 기다리는 것 같아.",
						"english": "...It seems to be waiting for us, even.",
						"japanese": "…むしろ、俺たちを待っているようだ。",
						"chinese": "……反而像是在等着我们。",
						"french": "...Plutôt, il semble nous attendre.",
						"spanish": "...Más bien, parece estar esperándonos.",
						"vietnamese": "…Mà còn như đang đợi chúng ta.",
						"thai": "…ดูเหมือนมันจะรอพวกเราอยู่ต่างหาก.",
						"hindi": "...बल्कि, यह हमारा इंतज़ार कर रहा है।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "eira",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "늑대가 움직일 때마다 몸을 이루는 뼈들이 부딪치며 기묘한 소리를 냈다.",
						"english": "With every move of the wolf, its skeletal frame clashed, emitting eerie sounds.",
						"japanese": "狼が動くたび、体を構成する骨がぶつかり合い、奇妙な音を立てた。",
						"chinese": "每当狼移动时，构成其身体的骨骼就会碰撞，发出奇特的声音。",
						"french": "Chaque fois que le loup bougeait, les os formant son corps s'entrechoquaient, produisant des sons étranges.",
						"spanish": "Cada vez que el lobo se movía, los huesos que formaban su cuerpo chocaban, produciendo ruidos extraños.",
						"vietnamese": "Mỗi khi con sói di chuyển, những khúc xương tạo nên cơ thể nó lại va vào nhau, tạo ra những âm thanh kỳ lạ.",
						"thai": "ทุกครั้งที่หมาป่าเคลื่อนไหว, กระดูกที่ประกอบกันเป็นร่างของมันก็กระทบกัน, ก่อให้เกิดเสียงแปลกประหลาด.",
						"hindi": "जब भी भेड़िया हिलता था, उसके शरीर को बनाने वाली हड्डियाँ टकराकर अजीब आवाज़ें करती थीं।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "저 소리… 뼈가 우는 것 같아.",
						"english": "That sound... the bones seem to be weeping.",
						"japanese": "あの音…骨が泣いているようだ。",
						"chinese": "那个声音……像是在哭泣的骨骼。",
						"french": "Ce son... on dirait que les os pleurent.",
						"spanish": "Ese sonido... parece que los huesos están llorando.",
						"vietnamese": "Âm thanh đó… như thể những khúc xương đang khóc.",
						"thai": "เสียงนั่น… เหมือนกระดูกกำลังร้องไห้.",
						"hindi": "वह आवाज़... जैसे हड्डियाँ रो रही हों।"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "살과 근육의 기척이 전혀 없습니다. 기록해야겠군요.",
						"english": "No trace of flesh or muscle. I should make a note of this.",
						"japanese": "肉や筋肉の気配が全くありません。記録しておきましょう。",
						"chinese": "毫无血肉和肌肉的痕迹。我得记录下来。",
						"french": "Aucune trace de chair ni de muscle. Je devrais le noter.",
						"spanish": "No hay rastro de carne ni músculo. Debería registrarlo.",
						"vietnamese": "Không có dấu vết thịt hay cơ bắp nào cả. Tôi cần ghi lại.",
						"thai": "ไม่มีร่องรอยของเนื้อหรือกล้ามเนื้อเลย ผมควรบันทึกไว้",
						"hindi": "मांस और मांसपेशियों का कोई निशान नहीं है। मुझे इसे दर्ज करना होगा।"
					},
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "그럼 저건… 살아있는 게 아닌가?",
						"english": "Then... is that not alive?",
						"japanese": "ならばあれは…生きていないのか？",
						"chinese": "那么那东西…不是活物吗？",
						"french": "Alors... ce n'est pas vivant ?",
						"spanish": "Entonces... ¿no está vivo?",
						"vietnamese": "Vậy thì... đó không phải là vật sống sao?",
						"thai": "งั้น...นั่นไม่ได้มีชีวิตอยู่เหรอ?",
						"hindi": "तो क्या वह... जीवित नहीं है?"
					},
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "eira",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "전설 속 '종말의 늑대'는 흉포하고 잔인했습니다. 그러나 이 녀석은… 그저 떠돌 뿐.",
						"english": "The legendary 'Wolf of Ruin' was fierce and cruel. But this one... it just wanders.",
						"japanese": "伝説の「終末の狼」は凶暴で残忍だった。だが、こいつは…ただ彷徨うだけだ。",
						"chinese": "传说中的“末日之狼”凶猛而残忍。然而这家伙…只是游荡而已。",
						"french": "Le « Loup de la Ruine » légendaire était féroce et cruel. Mais celui-ci... il ne fait que errer.",
						"spanish": "El legendario \"Lobo del Apocalipsis\" era feroz y cruel. Pero este... solo deambula.",
						"vietnamese": "Con Sói Tận Thế\" trong truyền thuyết hung bạo và tàn nhẫn. Nhưng con này... nó chỉ lang thang thôi.",
						"thai": "\"หมาป่าแห่งวันสิ้นโลก\" ในตำนานนั้นดุร้ายและโหดเหี้ยม แต่ตัวนี้...มันแค่ร่อนเร่ไปเท่านั้น",
						"hindi": "'विनाश का भेड़िया' नामक पौराणिक जीव क्रूर और हिंसक था। लेकिन यह वाला... बस भटक रहा है।"
					},
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "공허해. 속이 비어있는 것 같아.",
						"english": "It's hollow. Like it's empty inside.",
						"japanese": "虚ろだ。中身が空っぽのようだ。",
						"chinese": "空虚。感觉里面是空的。",
						"french": "C'est creux. Comme s'il était vide à l'intérieur.",
						"spanish": "Está hueco. Como si estuviera vacío por dentro.",
						"vietnamese": "Trống rỗng. Giống như nó rỗng tuếch bên trong.",
						"thai": "มันว่างเปล่า เหมือนข้างในไม่มีอะไรเลย",
						"hindi": "यह खोखला है। जैसे अंदर से खाली हो।"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "정확한 표현입니다. 형태만 있을 뿐, 생명력은 느껴지지 않습니다.",
						"english": "An accurate description. It has only form, no vital force can be felt.",
						"japanese": "正確な表現です。形があるだけで、生命力は感じられません。",
						"chinese": "准确的描述。只有形态，感受不到生命力。",
						"french": "C'est une description exacte. Il n'a que la forme, aucune force vitale ne se fait sentir.",
						"spanish": "Es una descripción precisa. Solo tiene forma, no se percibe ninguna fuerza vital.",
						"vietnamese": "Một mô tả chính xác. Nó chỉ có hình dạng, không cảm nhận được sinh lực.",
						"thai": "เป็นคำบรรยายที่ถูกต้อง มันมีแค่รูปร่าง แต่ไม่รู้สึกถึงพลังชีวิตเลย",
						"hindi": "यह एक सटीक वर्णन है। इसमें केवल रूप है, कोई जीवन शक्ति महसूस नहीं होती।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "대체 뭘 사냥하고 있었던 거지?",
						"english": "What on earth was it hunting?",
						"japanese": "一体何を狩っていたんだ？",
						"chinese": "它到底在狩猎什么？",
						"french": "Mais qu'est-ce qu'il chassait ?",
						"spanish": "¿Qué diablos estaba cazando?",
						"vietnamese": "Rốt cuộc nó đang săn lùng cái gì vậy?",
						"thai": "ตกลงมันกำลังล่าอะไรอยู่?",
						"hindi": "आख़िर वह क्या शिकार कर रहा था?"
					},
					"emotion": "base",
					"speaker": "character_3"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "eira",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "눈보라가 몰아쳤다. 늑대의 뼈 부딪히는 소리가 더욱 선명해졌다.",
						"english": "A blizzard raged. The sound of the wolf's bones clashing grew clearer.",
						"japanese": "吹雪が吹き荒れた。狼の骨がぶつかり合う音が、より鮮明になった。",
						"chinese": "暴风雪肆虐。狼骨碰撞的声音变得更加清晰。",
						"french": "Un blizzard faisait rage. Le cliquetis des os du loup devint plus distinct.",
						"spanish": "Una ventisca azotaba. El sonido de los huesos del lobo chocando se hizo más claro.",
						"vietnamese": "Bão tuyết hoành hành. Tiếng xương sói va vào nhau càng trở nên rõ ràng.",
						"thai": "พายุหิมะโหมกระหน่ำ เสียงกระดูกของหมาป่ากระทบกันชัดเจนขึ้นเรื่อยๆ",
						"hindi": "बर्फीला तूफान आया। भेड़िये की हड्डियों के टकराने की आवाज़ और साफ हो गई।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "점점 가까워지고 있어.",
						"english": "It's getting closer.",
						"japanese": "だんだん近づいてきている。",
						"chinese": "越来越近了。",
						"french": "Ça se rapproche.",
						"spanish": "Se está acercando.",
						"vietnamese": "Nó đang đến gần hơn.",
						"thai": "มันใกล้เข้ามาเรื่อยๆ แล้ว",
						"hindi": "वह करीब आ रहा है।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "이것은 단순한 마수가 아닙니다. 분명히, 무언가에 의해 조종되고 있어요.",
						"english": "This is no mere magical beast. It's clearly being controlled by something.",
						"japanese": "これは単なる魔獣ではありません。明らかに、何かに操られています。",
						"chinese": "这绝非单纯的魔兽。很明显，它被某种东西操控着。",
						"french": "Ce n'est pas une simple bête magique. Il est clairement contrôlé par quelque chose.",
						"spanish": "Esto no es una simple bestia mágica. Claramente está siendo controlado por algo.",
						"vietnamese": "Đây không phải là một con ma thú đơn thuần. Rõ ràng, nó đang bị thứ gì đó điều khiển.",
						"thai": "นี่ไม่ใช่แค่สัตว์อสูรธรรมดา มันถูกควบคุมโดยบางสิ่งบางอย่างอย่างแน่นอน",
						"hindi": "यह कोई साधारण जादुई जानवर नहीं है। इसे निश्चित रूप से किसी चीज़ द्वारा नियंत्रित किया जा रहा है।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "조종? 누가?",
						"english": "Controlled? By whom?",
						"japanese": "操られている？誰に？",
						"chinese": "操控？谁？",
						"french": "Contrôlé ? Par qui ?",
						"spanish": "¿Controlado? ¿Por quién?",
						"vietnamese": "Điều khiển? Ai?",
						"thai": "ควบคุม? ใครล่ะ?",
						"hindi": "नियंत्रित? किसके द्वारा?"
					},
					"emotion": "base",
					"speaker": "character_4"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "거대한 뼈 무리가 눈앞에 멈춰 섰다. 늑대의 형상, 그러나 살아있지 않은.",
						"english": "A massive pile of bones stopped before me. The shape of a wolf, yet not alive.",
						"japanese": "目の前に巨大な骨の塊が立ち止まった。狼の形をしているが、生きてはいない。",
						"chinese": "一堆巨大的骨头停在了我眼前。形似狼，却无生命。",
						"french": "Une masse osseuse gigantesque s'arrêta devant moi. La forme d'un loup, mais sans vie.",
						"spanish": "Una masa gigantesca de huesos se detuvo ante mí. La forma de un lobo, pero sin vida.",
						"vietnamese": "Một đống xương khổng lồ dừng lại trước mặt tôi. Hình dáng của một con sói, nhưng không còn sống.",
						"thai": "กองกระดูกมหึมาหยุดอยู่ตรงหน้าฉัน รูปร่างเหมือนหมาป่า แต่ไม่มีชีวิต",
						"hindi": "हड्डियों का एक विशाल ढेर मेरे सामने रुका। भेड़िये का आकार, फिर भी जीवित नहीं।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "어리석은 인간들. 사냥은 이미 시작되었다.",
						"english": "Foolish humans. The hunt has already begun.",
						"japanese": "愚かな人間どもめ。狩りはもう始まっている。",
						"chinese": "愚蠢的人类。狩猎已经开始。",
						"french": "Humains insensés. La chasse a déjà commencé.",
						"spanish": "Humanos necios. La caza ya ha comenzado.",
						"vietnamese": "Loài người ngu ngốc. Cuộc săn đã bắt đầu rồi.",
						"thai": "มนุษย์ผู้โง่เขลา การล่าได้เริ่มต้นขึ้นแล้ว",
						"hindi": "मूर्ख मनुष्यों। शिकार पहले ही शुरू हो चुका है।"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네가… 저 늑대를 움직이는 건가?",
						"english": "You... are you controlling that wolf?",
						"japanese": "お前が…あの狼を操っているのか？",
						"chinese": "你……是你操纵着那只狼吗？",
						"french": "Toi… c'est toi qui contrôles ce loup ?",
						"spanish": "Tú... ¿estás controlando a ese lobo?",
						"vietnamese": "Ngươi… ngươi đang điều khiển con sói đó sao?",
						"thai": "เจ้า... เจ้ากำลังควบคุมหมาป่าตัวนั้นหรือ?",
						"hindi": "तुम... क्या तुम उस भेड़िये को नियंत्रित कर रहे हो?"
					},
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "당신이 잊힌 전설의 주인인가요? 이 모든 것을 기록하겠습니다.",
						"english": "Are you the master of the forgotten legend? I shall record all of this.",
						"japanese": "あなたが忘れられた伝説の主ですか？この全てを記録します。",
						"chinese": "你是被遗忘的传说的主人吗？我将记录下这一切。",
						"french": "Êtes-vous le maître de la légende oubliée ? Je vais tout consigner.",
						"spanish": "¿Eres el amo de la leyenda olvidada? Lo registraré todo.",
						"vietnamese": "Ngài có phải là chủ nhân của truyền thuyết bị lãng quên không? Tôi sẽ ghi lại tất cả điều này.",
						"thai": "ท่านคือจ้าวแห่งตำนานที่ถูกลืมเลือนหรือ? ข้าจะบันทึกทุกสิ่งนี้ไว้",
						"hindi": "क्या आप भूले हुए किंवदंती के स्वामी हैं? मैं यह सब रिकॉर्ड करूँगा।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "기록? 네놈들의 절망은 기록되지 않을 것이다.",
						"english": "Record? Your despair will not be recorded.",
						"japanese": "記録？貴様らの絶望は記録されぬだろう。",
						"chinese": "记录？你们的绝望不会被记录。",
						"french": "Enregistrer ? Votre désespoir ne sera pas enregistré.",
						"spanish": "¿Registrar? Vuestra desesperación no será registrada.",
						"vietnamese": "Ghi lại? Nỗi tuyệt vọng của các ngươi sẽ không được ghi lại đâu.",
						"thai": "บันทึก? ความสิ้นหวังของพวกเจ้าจะไม่มีวันถูกบันทึก",
						"hindi": "रिकॉर्ड? तुम्हारी निराशा दर्ज नहीं की जाएगी।"
					},
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "하찮은 사냥꾼들. 네놈들은 결코 진실에 닿지 못할 것이다.",
						"english": "Worthless hunters. You shall never reach the truth.",
						"japanese": "くだらぬ狩人どもめ。貴様らは決して真実にたどり着けないだろう。",
						"chinese": "卑微的猎人。你们永远无法触及真相。",
						"french": "Chasseurs insignifiants. Vous n'atteindrez jamais la vérité.",
						"spanish": "Cazadores insignificantes. Jamás alcanzaréis la verdad.",
						"vietnamese": "Những thợ săn vô dụng. Các ngươi sẽ không bao giờ chạm tới sự thật.",
						"thai": "เหล่านายพรานไร้ค่า พวกเจ้าจะไม่มีวันเข้าถึงความจริงได้",
						"hindi": "तुच्छ शिकारी। तुम कभी सच्चाई तक नहीं पहुँच पाओगे।"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…다시 한번. 반드시.",
						"english": "...Once more. Without fail.",
						"japanese": "…もう一度。必ず。",
						"chinese": "……再一次。务必。",
						"french": "…Encore une fois. Absolument.",
						"spanish": "…Una vez más. Sin falta.",
						"vietnamese": "…Thêm một lần nữa. Nhất định.",
						"thai": "…อีกครั้ง ต้องทำให้ได้",
						"hindi": "...एक बार फिर। निश्चित रूप से।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "전설은 기록될 것입니다. 당신의 의지와 상관없이.",
						"english": "The legend will be etched, regardless of your will.",
						"japanese": "伝説は刻まれよう、汝の意思に関わらず。",
						"chinese": "传说终将铭记，无论你意愿如何。",
						"french": "La légende sera gravée, peu importe votre volonté.",
						"spanish": "La leyenda será grabada, a pesar de tu voluntad.",
						"vietnamese": "Huyền thoại sẽ được khắc ghi, bất kể ý muốn của ngươi.",
						"thai": "ตำนานจะถูกจารึกไว้ ไม่ว่าเจ้าจะปรารถนาหรือไม่ก็ตาม",
						"hindi": "किंवदंती अंकित होगी, तुम्हारी इच्छा के विरुद्ध।"
					},
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…이건 시작에 불과하다. 진정한 종말은… 아직 오지 않았다.",
						"english": "...This is merely the beginning. The true end... has not yet come.",
						"japanese": "…これは始まりに過ぎない。真の終焉は…まだ来ていない。",
						"chinese": "……这仅仅是开始。真正的终结……尚未到来。",
						"french": "…Ce n'est qu'un début. La véritable fin… n'est pas encore venue.",
						"spanish": "…Esto es solo el principio. El verdadero fin… aún no ha llegado.",
						"vietnamese": "…Đây chỉ là khởi đầu thôi. Ngày tận thế thực sự… vẫn chưa đến.",
						"thai": "…นี่เป็นเพียงจุดเริ่มต้นเท่านั้น จุดจบที่แท้จริง…ยังมาไม่ถึง",
						"hindi": "...यह तो बस शुरुआत है। सच्चा अंत... अभी आया नहीं है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이게 끝이 아니라고?",
						"english": "This isn't the end?",
						"japanese": "これが終わりじゃないのか？",
						"chinese": "这还没结束吗？",
						"french": "Ce n'est pas la fin ?",
						"spanish": "¿Esto no es el final?",
						"vietnamese": "Đây không phải là kết thúc sao?",
						"thai": "นี่ไม่ใช่จุดจบหรือ?",
						"hindi": "क्या यह अंत नहीं है?"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "뼈로 된 늑대는 쓰러졌지만, 에이라의 기록은 끝나지 않았다. 또 다른 진실이 기다리고 있었다.",
						"english": "The bone wolf fell, but Eira's record didn't end. Another truth awaited.",
						"japanese": "骨の狼は倒れたが、エイラの記録は終わらなかった。別の真実が待っていた。",
						"chinese": "骨狼倒下了，但艾拉的记录并未结束。另一个真相正在等待。",
						"french": "Le loup d'os est tombé, mais le récit d'Eira ne s'est pas arrêté. Une autre vérité attendait.",
						"spanish": "El lobo de hueso cayó, pero el registro de Eira no terminó. Otra verdad esperaba.",
						"vietnamese": "Sói xương đã gục ngã, nhưng ghi chép của Eira vẫn chưa kết thúc. Một sự thật khác đang chờ đợi.",
						"thai": "หมาป่ากระดูกล้มลง แต่บันทึกของไอราไม่ได้จบลง ความจริงอีกอย่างหนึ่งกำลังรออยู่",
						"hindi": "अस्थि भेड़िया गिर गया, लेकिन ऐरा का रिकॉर्ड समाप्त नहीं हुआ। एक और सच्चाई इंतजार कर रही थी।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		}
	]
} as const;
