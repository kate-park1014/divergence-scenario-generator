export const scenario_snowy_haraldr_41_04 = {
	"scenario_id": "snowy_haraldr_41_04",
	"order": 4,
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
		},
		"haraldr": {
			"name": "Haraldr"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"얼어붙은 시간. 태고의 빙원은 모든 것을 침묵시켰다.",
			"룬 기록이 깨어나고, 잊힌 전사의 비극이 드러난다.",
			"마지막 줄은 얼음에 갇힌 채—",
			"누군가, 필사적으로 진실을 막아선다."
		],
		"english": [
			"Frozen time. The primordial ice field silenced all.",
			"The rune records awaken, revealing the tragedy of a forgotten warrior.",
			"The last line, trapped in ice—",
			"Someone desperately blocks the truth."
		],
		"japanese": [
			"凍てついた時間。太古の氷原はすべてを沈黙させた。",
			"ルーンの記録が目覚め、忘れられた戦士の悲劇が明らかになる。",
			"最後の一行は、氷に囚われたまま—",
			"誰かが、必死に真実を阻む。"
		],
		"chinese": [
			"冰冻的时间。原始的冰原使一切都归于沉寂。",
			"符文记录苏醒，揭示了被遗忘战士的悲剧。",
			"最后一行，被困在冰中——",
			"有人拼命阻止真相。"
		],
		"french": [
			"Le temps figé. La toundra primordiale a tout réduit au silence.",
			"Les registres runiques s'éveillent, révélant la tragédie d'un guerrier oublié.",
			"La dernière ligne, piégée dans la glace—",
			"Quelqu'un bloque désespérément la vérité."
		],
		"spanish": [
			"Tiempo congelado. El campo de hielo primordial lo silenció todo.",
			"Los registros rúnicos despiertan, revelando la tragedia de un guerrero olvidado.",
			"La última línea, atrapada en el hielo—",
			"Alguien bloquea desesperadamente la verdad."
		],
		"vietnamese": [
			"Thời gian đóng băng. Đồng băng nguyên thủy đã làm tất cả chìm vào im lặng.",
			"Các ghi chép rune thức tỉnh, hé lộ bi kịch của một chiến binh bị lãng quên.",
			"Dòng cuối cùng, bị mắc kẹt trong băng—",
			"Ai đó đang tuyệt vọng ngăn chặn sự thật."
		],
		"thai": [
			"กาลเวลาที่เยือกแข็ง ลานน้ำแข็งดึกดำบรรพ์ทำให้ทุกสิ่งเงียบงัน",
			"บันทึกรูนตื่นขึ้น เผยโศกนาฏกรรมของนักรบที่ถูกลืม",
			"บรรทัดสุดท้าย ถูกขังอยู่ในน้ำแข็ง—",
			"มีใครบางคนพยายามขัดขวางความจริงอย่างสิ้นหวัง"
		],
		"hindi": [
			"जमा हुआ समय। आदिम बर्फ के मैदान ने सब कुछ शांत कर दिया।",
			"रुन के अभिलेख जागृत होते हैं, एक भूले हुए योद्धा की त्रासदी का खुलासा करते हैं।",
			"अंतिम पंक्ति, बर्फ में फंसी हुई—",
			"कोई हताश होकर सत्य को रोक रहा है।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "끝없이 펼쳐진 빙원. 시간마저 얼어붙은 곳이다.",
						"english": "An endless ice field. A place where even time is frozen.",
						"japanese": "どこまでも広がる氷原。時間さえ凍りついた場所だ。",
						"chinese": "无尽的冰原。一个连时间都冻结的地方。",
						"french": "Une toundra sans fin. Un lieu où même le temps est figé.",
						"spanish": "Un campo de hielo interminable. Un lugar donde incluso el tiempo está congelado.",
						"vietnamese": "Một đồng băng vô tận. Nơi mà ngay cả thời gian cũng đóng băng.",
						"thai": "ลานน้ำแข็งที่แผ่กว้างไม่มีที่สิ้นสุด สถานที่ที่แม้แต่เวลาก็หยุดนิ่ง",
						"hindi": "एक अंतहीन बर्फ का मैदान। एक ऐसी जगह जहाँ समय भी जम गया है।"
					}
				},
				{
					"speaker": "eira",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이런… 잊힌 전설의 룬 기록이에요.",
						"english": "Oh... these are rune records of a forgotten legend.",
						"japanese": "ああ…これは忘れられた伝説のルーン記録だ。",
						"chinese": "哦……这些是埋藏着被遗忘传说的符文记录。",
						"french": "Oh... ce sont des registres runiques d'une légende oubliée.",
						"spanish": "Oh... estos son registros rúnicos de una leyenda olvidada.",
						"vietnamese": "Ồ… đây là những ghi chép rune của một truyền thuyết bị lãng quên.",
						"thai": "โอ้... นี่คือบันทึกรูนของตำนานที่ถูกลืม",
						"hindi": "ओह... ये एक भूली हुई किंवदंती के रुन अभिलेख हैं।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "여기에 이런 게 있었다니.",
						"english": "To think something like this was here.",
						"japanese": "こんなものがここにあったとは。",
						"chinese": "没想到这里有这种东西。",
						"french": "Dire qu'il y avait quelque chose comme ça ici.",
						"spanish": "Pensar que algo así estaba aquí.",
						"vietnamese": "Không ngờ lại có thứ này ở đây.",
						"thai": "ไม่คิดว่าจะมีอะไรแบบนี้อยู่ที่นี่",
						"hindi": "यह सोचकर कि ऐसी कोई चीज़ यहाँ थी।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "해독해 볼게요. 이 역사가…",
						"english": "I'll try to decipher it. This history...",
						"japanese": "解読してみるわ。この歴史が…",
						"chinese": "我来试着破译它。这段历史……",
						"french": "Je vais essayer de le déchiffrer. Cette histoire...",
						"spanish": "Intentaré descifrarlo. Esta historia...",
						"vietnamese": "Tôi sẽ cố giải mã nó. Lịch sử này…",
						"thai": "ฉันจะลองถอดรหัสดู ประวัติศาสตร์นี้...",
						"hindi": "मैं इसे समझने की कोशिश करूँगा। यह इतिहास..."
					},
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "저기, 할로드르 몸에 있는 룬이랑 비슷하지 않아?",
						"english": "Hey, doesn't it look similar to the runes on Hálodr's body?",
						"japanese": "ねえ、ハロドルドの体にあるルーンと似てない？",
						"chinese": "嘿，这和哈洛德身体上的符文是不是很像？",
						"french": "Dis, ça ne ressemble pas aux runes sur le corps d'Hálodr ?",
						"spanish": "¿Oye, no se parece a las runas del cuerpo de Hálodr?",
						"vietnamese": "Này, nó không giống với các rune trên cơ thể Hálodr sao?",
						"thai": "นี่ ไม่เหมือนกับรูนบนร่างกายของฮาโลดร์เหรอ?",
						"hindi": "अरे, क्या यह हैलॉड्रे के शरीर पर बने रुन से मिलता-जुलता नहीं है?"
					},
					"speaker": "character_1",
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						6,
						3
					],
					"speaker": "haraldr"
				},
				{
					"emotion": "angry",
					"speaker": "haraldr",
					"type": "speech",
					"content": {
						"korean": "무슨 착각을! 그건 그냥 문양일 뿐이야!",
						"english": "What a delusion! Those are just patterns!",
						"japanese": "何を勘違いしてるんだ！それはただの模様だ！",
						"chinese": "什么错觉！那只是图案而已！",
						"french": "Quelle illusion ! Ce ne sont que des motifs !",
						"spanish": "¡Qué ilusión! ¡Son solo patrones!",
						"vietnamese": "Thật là một ảo tưởng! Đó chỉ là những hoa văn thôi!",
						"thai": "เข้าใจผิดอะไร! นั่นมันก็แค่ลวดลายเท่านั้น!",
						"hindi": "क्या भ्रम है! वे सिर्फ़ पैटर्न हैं!"
					}
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						5,
						5
					],
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "내 영역에서 함부로 주절대지 마라.",
						"english": "Do not babble idly in my domain.",
						"japanese": "私の領域で軽々しく喋るな。",
						"chinese": "不准在我的地盘胡言乱语。",
						"french": "Ne jacasse pas futilement dans mon domaine.",
						"spanish": "No parlotees ociosamente en mi dominio.",
						"vietnamese": "Đừng lảm nhảm vớ vẩn trong lãnh địa của ta.",
						"thai": "อย่าพล่ามไร้สาระในอาณาเขตของข้า.",
						"hindi": "मेरे क्षेत्र में व्यर्थ बकवास मत करो।"
					},
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "eira",
					"spot": [
						3,
						3
					]
				},
				{
					"content": {
						"korean": "룬이 계속 이어져요. 한 전사에 대한 기록이네요.",
						"english": "The runes continue. They tell of a warrior.",
						"japanese": "続けてルーンが読める。ある戦士についての記録だ。",
						"chinese": "符文还在继续。这是一位战士的记录。",
						"french": "Les runes continuent. Elles parlent d'un guerrier.",
						"spanish": "Las runas continúan. Son registros sobre un guerrero.",
						"vietnamese": "Những ký tự cổ vẫn tiếp diễn. Đây là ghi chép về một chiến binh.",
						"thai": "รูนยังคงดำเนินต่อไป เป็นบันทึกเกี่ยวกับนักรบคนหนึ่ง.",
						"hindi": "ये रुन्स आगे बढ़ रहे हैं। यह एक योद्धा का वृत्तांत है।"
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "어떤 전사인데?",
						"english": "What kind of warrior?",
						"japanese": "どんな戦士なの？",
						"chinese": "是个怎样的战士？",
						"french": "Quel genre de guerrier ?",
						"spanish": "¿Qué clase de guerrero?",
						"vietnamese": "Chiến binh thế nào?",
						"thai": "นักรบแบบไหน?",
						"hindi": "कैसा योद्धा?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "강대한 힘을 가졌지만, 고독했던… 그런 내용이에요.",
						"english": "He wielded immense power, yet was solitary... such is the tale.",
						"japanese": "強大な力を持っていたが、孤独だった…そんな内容よ。",
						"chinese": "他拥有强大的力量，却又孤独…就是这样的内容。",
						"french": "Il possédait un pouvoir immense, mais était solitaire... C'est le genre d'histoire.",
						"spanish": "Poseía un poder inmenso, pero estaba solo... así es el relato.",
						"vietnamese": "Một chiến binh có sức mạnh vĩ đại, nhưng cô độc... Đại loại là vậy.",
						"thai": "เขามีพลังมหาศาล แต่โดดเดี่ยว...ประมาณนั้นแหละ.",
						"hindi": "उसके पास अपार शक्ति थी, फिर भी वह अकेला था... कुछ ऐसा ही है।"
					}
				},
				{
					"spot": [
						6,
						3
					],
					"speaker": "haraldr",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "시시한 옛날이야기일 뿐이야! 들을 필요 없어!",
						"english": "It's just a pointless old tale! No need to listen!",
						"japanese": "つまらない昔話にすぎない！聞く必要はない！",
						"chinese": "这只是个无聊的旧故事！没必要听！",
						"french": "Ce n'est qu'une vieille histoire insignifiante ! Pas besoin d'écouter !",
						"spanish": "¡Es solo una vieja historia sin sentido! ¡No hay necesidad de escuchar!",
						"vietnamese": "Chỉ là một câu chuyện cổ vớ vẩn thôi! Không cần nghe đâu!",
						"thai": "มันก็แค่เรื่องเล่าไร้สาระ! ไม่เห็นต้องฟังเลย!",
						"hindi": "यह तो बस एक बेकार पुरानी कहानी है! सुनने की कोई ज़रूरत नहीं!"
					},
					"emotion": "angry",
					"speaker": "haraldr"
				},
				{
					"content": {
						"korean": "왜 그렇게 초조해해, 할로드르?",
						"english": "Why are you so anxious, Halldor?",
						"japanese": "なぜそんなに焦っているんだ、ハロルド？",
						"chinese": "哈罗德，你为什么这么焦躁不安？",
						"french": "Pourquoi es-tu si anxieux, Halldor ?",
						"spanish": "¿Por qué estás tan ansioso, Halldor?",
						"vietnamese": "Sao ngươi lại sốt ruột thế, Halldor?",
						"thai": "ทำไมเจ้าถึงกระสับกระส่ายนัก, ฮัลล์ดอร์?",
						"hindi": "तुम इतने बेचैन क्यों हो, हाल्डोर?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_2"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "random_boss",
					"spot": [
						5,
						5
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "진실은 얼음에 갇혀야 마땅하다.",
						"english": "The truth deserves to be locked in ice.",
						"japanese": "真実は氷に閉じ込められるべきだ。",
						"chinese": "真相理应被冰封。",
						"french": "La vérité mérite d'être emprisonnée dans la glace.",
						"spanish": "La verdad merece ser encerrada en hielo.",
						"vietnamese": "Sự thật đáng bị nhốt vào băng giá.",
						"thai": "ความจริงสมควรถูกจองจำไว้ในน้ำแข็ง.",
						"hindi": "सच को बर्फ में कैद होना ही चाहिए।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"speaker": "eira",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "그 전사는… 모든 것을 잃고, 홀로 얼음 속에 갇혔다고 해요.",
						"english": "They say the warrior... lost everything and was trapped alone in the ice.",
						"japanese": "その戦士は…すべてを失い、独り氷の中に閉じ込められたという。",
						"chinese": "据说，那位战士…失去了一切，独自被困在冰中。",
						"french": "On dit que ce guerrier... a tout perdu et a été piégé seul dans la glace.",
						"spanish": "Dicen que el guerrero... lo perdió todo y quedó atrapado solo en el hielo.",
						"vietnamese": "Nghe nói chiến binh đó... đã mất tất cả và bị giam cầm một mình trong băng giá.",
						"thai": "ว่ากันว่านักรบผู้นั้น...สูญสิ้นทุกสิ่ง และถูกจองจำในน้ำแข็งเพียงลำพัง.",
						"hindi": "कहते हैं कि वह योद्धा... सब कुछ खोकर, अकेले बर्फ में कैद हो गया था।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "비극이네…",
						"english": "What a tragedy...",
						"japanese": "悲劇だね…",
						"chinese": "真是个悲剧…",
						"french": "Quelle tragédie...",
						"spanish": "Qué tragedia...",
						"vietnamese": "Thật bi thảm...",
						"thai": "ช่างเป็นโศกนาฏกรรม...",
						"hindi": "क्या त्रासदी है..."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						6,
						3
					],
					"speaker": "haraldr"
				},
				{
					"emotion": "angry",
					"speaker": "haraldr",
					"content": {
						"korean": "그만해! 더 이상은 안 돼!",
						"english": "Stop it! No more!",
						"japanese": "やめろ！これ以上はだめだ！",
						"chinese": "住手！不能再继续了！",
						"french": "Arrête ! Pas un mot de plus !",
						"spanish": "¡Basta! ¡No más!",
						"vietnamese": "Dừng lại! Không được nữa!",
						"thai": "หยุดเดี๋ยวนี้! ห้ามไปมากกว่านี้!",
						"hindi": "बस करो! अब और नहीं!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "할로드르, 왜 그래? 대체 뭐가 숨겨져 있는데?",
						"english": "Hallodr, what's wrong? What are you hiding?",
						"japanese": "ハロードル、どうしたの？一体何を隠しているの？",
						"chinese": "哈罗德尔，你怎么了？到底藏着什么？",
						"french": "Hallodr, qu'est-ce qui ne va pas ? Que caches-tu ?",
						"spanish": "Hallodr, ¿qué pasa? ¿Qué estás escondiendo?",
						"vietnamese": "Hallodr, có chuyện gì vậy? Rốt cuộc là giấu cái gì?",
						"thai": "ฮาลอดร์ เกิดอะไรขึ้น? มีอะไรซ่อนอยู่กันแน่?",
						"hindi": "हैलॉडर, क्या हुआ? क्या छिपा रहे हो?"
					},
					"emotion": "base",
					"speaker": "character_3"
				},
				{
					"type": "speech",
					"content": {
						"korean": "할로드르… 당신, 이 전사를 아나요?",
						"english": "Hallodr... do you know this warrior?",
						"japanese": "ハロードル…あなた、この戦士を知っているの？",
						"chinese": "哈罗德尔……你认识这位战士吗？",
						"french": "Hallodr... connais-tu ce guerrier ?",
						"spanish": "Hallodr, ¿conoces a este guerrero?",
						"vietnamese": "Hallodr... anh có biết chiến binh này không?",
						"thai": "ฮาลอดร์... ท่านรู้จักนักรบผู้นี้หรือ?",
						"hindi": "हैलॉडर, क्या तुम इस योद्धा को जानते हो?"
					},
					"speaker": "eira",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"spot": [
						5,
						5
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "더 깊은 곳으로 가기 전에, 멈춰라.",
						"english": "Before you go deeper, stop.",
						"japanese": "これ以上深淵へ行く前に、止まれ。",
						"chinese": "在深入之前，停下。",
						"french": "Avant d'aller plus loin, arrêtez.",
						"spanish": "Antes de ir más profundo, detente.",
						"vietnamese": "Trước khi đi sâu hơn, dừng lại.",
						"thai": "ก่อนที่จะเข้าไปลึกกว่านี้ จงหยุด.",
						"hindi": "इससे पहले कि तुम और गहरे जाओ, रुको।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "eira",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "거의 다 해독했어요… 마지막 줄만 읽으면 되는데…",
						"english": "Almost deciphered... just need to read the last line...",
						"japanese": "ほとんど解読した…最後の行を読むだけなのに…",
						"chinese": "快要解密了……只差读最后一行了……",
						"french": "Presque déchiffré... il ne reste qu'à lire la dernière ligne...",
						"spanish": "Casi descifrado... solo necesito leer la última línea...",
						"vietnamese": "Gần giải mã xong rồi... chỉ cần đọc dòng cuối cùng...",
						"thai": "เกือบจะถอดรหัสได้แล้ว... เหลือแค่อ่านบรรทัดสุดท้าย...",
						"hindi": "लगभग समझ गया... बस आखिरी पंक्ति पढ़नी है..."
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "마지막 룬은 두꺼운 얼음에 가려져 있었다.",
						"english": "The last rune was hidden beneath thick ice.",
						"japanese": "最後のルーンは厚い氷に覆われていた。",
						"chinese": "最后的符文被厚厚的冰层覆盖着。",
						"french": "La dernière rune était cachée sous une épaisse couche de glace.",
						"spanish": "La última runa estaba oculta bajo un espeso hielo.",
						"vietnamese": "Linh vật cuối cùng bị che khuất bởi lớp băng dày.",
						"thai": "รูนสุดท้ายถูกซ่อนอยู่ใต้ชั้นน้ำแข็งหนา.",
						"hindi": "आखिरी रुन मोटी बर्फ के नीचे छिपा हुआ था।"
					}
				},
				{
					"speaker": "haraldr",
					"spot": [
						6,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "안 돼! 절대로!",
						"english": "No! Never!",
						"japanese": "だめだ！絶対に！",
						"chinese": "不！绝不！",
						"french": "Non ! Jamais !",
						"spanish": "¡No! ¡Nunca!",
						"vietnamese": "Không! Tuyệt đối không!",
						"thai": "ไม่! ไม่มีทาง!",
						"hindi": "नहीं! कभी नहीं!"
					},
					"speaker": "haraldr",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "할로드르! 비켜!",
						"english": "Hallodr! Get out of the way!",
						"japanese": "ハロードル！どいて！",
						"chinese": "哈罗德尔！让开！",
						"french": "Hallodr ! Écarte-toi !",
						"spanish": "¡Hallodr! ¡Apártate!",
						"vietnamese": "Hallodr! Tránh ra!",
						"thai": "ฮาลอดร์! หลีกไป!",
						"hindi": "हैलॉडर! रास्ते से हटो!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"speaker": "haraldr",
					"content": {
						"korean": "이것만큼은… 안 돼! 너희가 알 필요 없어!",
						"english": "Not this... No! You don't need to know!",
						"japanese": "これだけは…だめだ！お前たちが知る必要はない！",
						"chinese": "唯独这个……不行！你们没必要知道！",
						"french": "Pas ça... Non ! Vous n'avez pas besoin de savoir !",
						"spanish": "¡Esto no... No! ¡No necesitáis saberlo!",
						"vietnamese": "Riêng cái này... Không được! Các ngươi không cần biết!",
						"thai": "ไม่ใช่เรื่องนี้... ไม่! พวกเจ้าไม่จำเป็นต้องรู้!",
						"hindi": "यह तो... नहीं! तुम्हें जानने की ज़रूरत नहीं है!"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "random_boss",
					"spot": [
						5,
						5
					]
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "이곳의 비밀은, 영원히 묻혀야 마땅하다.",
						"english": "The secret of this place deserves to remain buried forever.",
						"japanese": "この場所の秘密は、永遠に葬られるべきだ。",
						"chinese": "这个地方的秘密，理应永远埋藏。",
						"french": "Le secret de cet endroit mérite de rester enfoui pour toujours.",
						"spanish": "El secreto de este lugar merece permanecer enterrado para siempre.",
						"vietnamese": "Bí mật nơi đây xứng đáng được chôn vùi vĩnh viễn.",
						"thai": "ความลับของที่นี่สมควรที่จะถูกฝังไว้ตลอดไป.",
						"hindi": "इस जगह का रहस्य हमेशा के लिए दफन रहना चाहिए।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "얼음 속 깊은 곳, 태고의 기록이 마지막 줄을 기다렸다.",
						"english": "Deep within the ice, an ancient record awaited its final line.",
						"japanese": "氷の奥深く、太古の記録が最後の行を待っていた。",
						"chinese": "冰层深处，太古的记录等待着最后一行。",
						"french": "Au plus profond de la glace, un ancien registre attendait sa dernière ligne.",
						"spanish": "En lo profundo del hielo, un antiguo registro esperaba su última línea.",
						"vietnamese": "Sâu trong băng, một ghi chép cổ xưa chờ đợi dòng cuối cùng.",
						"thai": "ลึกลงไปในน้ำแข็ง บันทึกโบราณกำลังรอคอยบรรทัดสุดท้ายของมัน.",
						"hindi": "बर्फ की गहराई में, एक प्राचीन अभिलेख अपनी अंतिम पंक्ति का इंतजार कर रहा था।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "eira",
					"spot": [
						3,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "마지막 기록이 여기 있을 거예요… 조금만 더…",
						"english": "The last record must be here... Just a little further...",
						"japanese": "最後の記録がここにあるはずだ… あともう少し…",
						"chinese": "最后的记录应该就在这里… 就差一点点…",
						"french": "Le dernier enregistrement doit être ici... Encore un peu...",
						"spanish": "El último registro debe estar aquí... Solo un poco más...",
						"vietnamese": "Bản ghi cuối cùng hẳn là ở đây… Chỉ một chút nữa thôi…",
						"thai": "บันทึกสุดท้ายน่าจะอยู่ที่นี่… อีกนิดเดียว…",
						"hindi": "अंतिम रिकॉर्ड यहीं होगा… बस थोड़ा और…"
					},
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"speaker": "haraldr",
					"spot": [
						6,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "haraldr",
					"emotion": "angry",
					"content": {
						"korean": "제발! 보지 마! 보지 말라고!",
						"english": "Please! Don't look! I told you not to look!",
						"japanese": "やめて！ 見ないで！ 見るなと言っただろう！",
						"chinese": "求你了！别看！不许看！",
						"french": "S'il te plaît ! Ne regarde pas ! Je t'ai dit de ne pas regarder !",
						"spanish": "¡Por favor! ¡No mires! ¡Te dije que no miraras!",
						"vietnamese": "Làm ơn! Đừng nhìn! Đừng có nhìn mà!",
						"thai": "ได้โปรด! อย่ามอง! ฉันบอกแล้วว่าอย่ามอง!",
						"hindi": "कृपा करके! मत देखो! मैंने कहा था मत देखो!"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "할로드르, 그만해!",
						"english": "Hallowdr, stop it!",
						"japanese": "ハロドル、やめろ！",
						"chinese": "哈洛德，住手！",
						"french": "Hallowdr, arrête ça !",
						"spanish": "¡Hallowdr, detente!",
						"vietnamese": "Hallowdr, dừng lại đi!",
						"thai": "ฮัลโลดอร์, หยุดเดี๋ยวนี้!",
						"hindi": "हैलोद्र, बस करो!"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						5,
						5
					],
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "이 어리석은 짓을 멈춰라. 너희는 알 자격이 없다.",
						"english": "Cease this foolishness. You are not worthy to know.",
						"japanese": "この愚かな行いをやめろ。お前たちに知る資格はない。",
						"chinese": "停止这种愚蠢的行为。你们没有资格知道。",
						"french": "Cessez cette folie. Vous n'êtes pas dignes de savoir.",
						"spanish": "Cesen esta insensatez. No son dignos de saber.",
						"vietnamese": "Dừng ngay sự ngu xuẩn này lại. Các ngươi không xứng đáng được biết.",
						"thai": "หยุดความโง่เขลานี้ซะ พวกเจ้าไม่มีค่าพอที่จะรู้",
						"hindi": "इस मूर्खता को बंद करो। तुम जानने के योग्य नहीं हो।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "무슨 진실이기에… 이렇게까지 막는 거야?",
						"english": "What truth is it... that you're guarding so fiercely?",
						"japanese": "一体どんな真実なんだ… なぜそこまで隠す？",
						"chinese": "到底是什么真相… 竟然要这样阻止？",
						"french": "Quelle est cette vérité... que vous protégez si farouchement ?",
						"spanish": "¿Qué verdad es esa... que guardas con tanta vehemencia?",
						"vietnamese": "Sự thật gì mà… lại ngăn cản đến mức này chứ?",
						"thai": "ความจริงอะไรกัน… ถึงได้ปกป้องขนาดนี้?",
						"hindi": "कौन सी सच्चाई है… जिसे तुम इतनी सख्ती से रोक रहे हो?"
					}
				},
				{
					"content": {
						"korean": "죽음만이 너희에게 허락된 진실이다.",
						"english": "Death is the only truth permitted to you.",
						"japanese": "死だけがお前たちに許された真実だ。",
						"chinese": "死亡才是你们被允许知晓的真相。",
						"french": "La mort est la seule vérité qui vous est permise.",
						"spanish": "La muerte es la única verdad que se os permite.",
						"vietnamese": "Cái chết là sự thật duy nhất được phép cho các ngươi.",
						"thai": "ความตายเท่านั้นคือความจริงที่เจ้าจะได้รับอนุญาต",
						"hindi": "मृत्यु ही एकमात्र सत्य है जो तुम्हें स्वीकार्य है।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"spot": [
						3,
						3
					],
					"speaker": "eira",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크윽… 룬은… 기록은… 영원히….",
						"english": "Ugh... The runes... the records... forever...",
						"japanese": "ぐっ… ルーンは… 記録は… 永遠に…。",
						"chinese": "呃… 符文… 记录… 永远…",
						"french": "Urgh... Les runes... les enregistrements... pour toujours...",
						"spanish": "Ugh... Las runas... los registros... para siempre...",
						"vietnamese": "Khặc… Runes… bản ghi… mãi mãi…",
						"thai": "อึก… รูน… บันทึก… ชั่วนิรันดร์…",
						"hindi": "उफ़… रुन… रिकॉर्ड… हमेशा के लिए…"
					}
				},
				{
					"content": {
						"korean": "쓰러뜨렸어… 이제 마지막 줄을 해독할 수 있나?",
						"english": "We defeated it... Can we finally decipher the last line now?",
						"japanese": "倒した… これで最後の行を解読できるのか？",
						"chinese": "打败了… 现在能解读最后一行了吗？",
						"french": "Nous l'avons vaincu... Pouvons-nous enfin déchiffrer la dernière ligne maintenant ?",
						"spanish": "Lo hemos derrotado... ¿Podemos por fin descifrar la última línea?",
						"vietnamese": "Đã đánh bại nó… Giờ chúng ta có thể giải mã dòng cuối cùng không?",
						"thai": "เราเอาชนะมันได้แล้ว… ตอนนี้เราจะถอดรหัสบรรทัดสุดท้ายได้ไหม?",
						"hindi": "हमने इसे हरा दिया… क्या अब हम आखिरी पंक्ति को समझ सकते हैं?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "아직… 얼음이 너무 두꺼워요. 완전히 녹이려면 시간이 필요할 것 같아요.",
						"english": "Not yet... The ice is too thick. I think it will take some time to melt completely.",
						"japanese": "まだ… 氷が厚すぎる。完全に溶かすには時間がかかりそうだ。",
						"chinese": "还不行… 冰层太厚了。完全融化可能需要时间。",
						"french": "Pas encore... La glace est trop épaisse. Je pense qu'il faudra du temps pour la faire fondre complètement.",
						"spanish": "Todavía no... El hielo es demasiado grueso. Creo que llevará tiempo derretirlo por completo.",
						"vietnamese": "Chưa được… Lớp băng vẫn còn quá dày. Có lẽ sẽ mất một thời gian để làm tan chảy hoàn toàn.",
						"thai": "ยัง… น้ำแข็งหนาเกินไป ฉันคิดว่าต้องใช้เวลาในการละลายทั้งหมด",
						"hindi": "अभी नहीं… बर्फ बहुत मोटी है। मुझे लगता है कि इसे पूरी तरह पिघलाने में समय लगेगा।"
					}
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "haraldr",
					"spot": [
						6,
						3
					]
				},
				{
					"emotion": "base",
					"speaker": "haraldr",
					"type": "speech",
					"content": {
						"korean": "끝까지… 가려는군. 그래, 어디 해봐라.",
						"english": "You intend to go all the way... Fine, go ahead and try.",
						"japanese": "最後まで… 行くつもりか。いいだろう、やってみろ。",
						"chinese": "想走到最后吗… 好啊，那就试试看吧。",
						"french": "Tu comptes aller jusqu'au bout... Très bien, vas-y, essaie.",
						"spanish": "Piensas llegar hasta el final... Bien, inténtalo.",
						"vietnamese": "Ngươi định đi đến cùng à… Được thôi, cứ thử xem.",
						"thai": "แกตั้งใจจะไปจนสุดทาง… ดี ลองดูสิ",
						"hindi": "तुम अंत तक जाना चाहते हो… ठीक है, कोशिश करो।"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "마지막 줄은 여전히 얼음 속에 잠들어 있었다. 하지만, 진실을 향한 길은 멈추지 않는다.",
						"english": "The last line still slept within the ice. Yet, the path to truth never ceases.",
						"japanese": "最後の行は未だ氷の中に眠っていた。しかし、真実への道は止まらない。",
						"chinese": "最后一句话仍旧沉睡在冰中。然而，通往真相的道路永不停歇。",
						"french": "La dernière ligne dormait encore dans la glace. Pourtant, le chemin vers la vérité ne s'arrête jamais.",
						"spanish": "La última línea aún dormía en el hielo. Sin embargo, el camino hacia la verdad nunca se detiene.",
						"vietnamese": "Dòng cuối cùng vẫn ngủ yên trong băng giá. Thế nhưng, con đường dẫn đến sự thật không bao giờ ngừng lại.",
						"thai": "บรรทัดสุดท้ายยังคงหลับใหลอยู่ในน้ำแข็ง ทว่าหนทางสู่ความจริงไม่มีวันหยุดยั้ง",
						"hindi": "आखिरी पंक्ति अभी भी बर्फ़ में सो रही थी। फिर भी, सच्चाई की राह कभी नहीं रुकती।"
					},
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "eira",
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "어리석은 자들… 영원히 빙원에 갇혀라.",
						"english": "Fools... Be trapped forever in the ice fields.",
						"japanese": "愚か者どもめ… 永遠に氷原に囚われよ。",
						"chinese": "愚蠢的家伙们… 永远被困在冰原吧。",
						"french": "Imbéciles... Restez piégés à jamais dans les champs de glace.",
						"spanish": "Necios... Permaneced atrapados para siempre en los campos de hielo.",
						"vietnamese": "Lũ ngốc... Hãy bị mắc kẹt vĩnh viễn trong băng nguyên.",
						"thai": "เจ้าพวกโง่... จงติดอยู่ในทุ่งน้ำแข็งตลอดกาล",
						"hindi": "मूर्खों... हमेशा के लिए बर्फ़ीले मैदानों में फँसे रहो।"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "크윽… 아직… 끝나지 않았어.",
						"english": "Ugh... Not... over yet.",
						"japanese": "くっ… まだ… 終わってない。",
						"chinese": "呃… 还没… 结束。",
						"french": "Urgh... Pas... encore fini.",
						"spanish": "Ugh... No... ha terminado aún.",
						"vietnamese": "Khụ... Vẫn... chưa kết thúc đâu.",
						"thai": "อึก... ยัง... ไม่จบแค่นี้หรอก",
						"hindi": "उफ़... अभी... ख़त्म नहीं हुआ है।"
					},
					"type": "speech"
				},
				{
					"speaker": "haraldr",
					"spot": [
						6,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "haraldr",
					"content": {
						"korean": "포기해라. 어차피 알 수 없는 진실이다.",
						"english": "Give up. It's a truth you can't know anyway.",
						"japanese": "諦めろ。どうせ知り得ぬ真実だ。",
						"chinese": "放弃吧。反正这是你无法得知的真相。",
						"french": "Abandonne. C'est une vérité que tu ne pourras de toute façon jamais connaître.",
						"spanish": "Ríndete. Es una verdad que no puedes saber de todos modos.",
						"vietnamese": "Bỏ cuộc đi. Dù sao thì đó cũng là sự thật mà ngươi không thể biết.",
						"thai": "ยอมแพ้ซะ นี่คือความจริงที่เจ้าไม่มีทางรู้ได้อยู่แล้ว",
						"hindi": "हार मान लो। यह ऐसी सच्चाई है जिसे तुम वैसे भी नहीं जान सकते।"
					},
					"type": "speech"
				}
			]
		}
	]
} as const;
