export const scenario_snowy_skaalbane_43_01 = {
	"scenario_id": "snowy_skaalbane_43_01",
	"order": 1,
	"act": "intro",
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
			"가장 오래된 층. 모든 것의 시작.",
			"난파된 배의 잔해가 켜켜이 쌓인 곳.",
			"그 심장부에 고대 비석이 서 있다.",
			"그리고 비석에 새겨진 단 하나의 이름.",
			"그것이 모든 기록의 시작이었다."
		],
		"english": [
			"The oldest layer. The beginning of all things.",
			"Where the remains of a shipwreck are piled high.",
			"At its heart stands an ancient stele.",
			"And a single name carved into the stele.",
			"That was the beginning of all records."
		],
		"japanese": [
			"最古の層。すべての始まり。",
			"難破船の残骸が積み重なった場所。",
			"その心臓部に、古代の石碑がそびえ立つ。",
			"そして、石碑に刻まれたただ一つの名前。",
			"それが、すべての記録の始まりだった。"
		],
		"chinese": [
			"最古老的层。万物之始。",
			"沉船残骸层层堆积之处。",
			"在其核心，矗立着一座古老的石碑。",
			"以及石碑上刻着的一个名字。",
			"那是所有记录的开始。"
		],
		"french": [
			"La couche la plus ancienne. Le début de tout.",
			"Là où les vestiges de navires naufragés s'accumulent.",
			"En son cœur se dresse une ancienne stèle.",
			"Et un seul nom gravé sur la stèle.",
			"Ce fut le début de tous les registres."
		],
		"spanish": [
			"La capa más antigua. El inicio de todo.",
			"Donde los restos de barcos naufragados se acumulan en capas.",
			"En su corazón se alza una estela antigua.",
			"Y un solo nombre grabado en la estela.",
			"Ese fue el comienzo de todos los registros."
		],
		"vietnamese": [
			"Tầng cổ xưa nhất. Khởi nguyên của vạn vật.",
			"Nơi xác tàu đắm chất chồng lên nhau.",
			"Tại trung tâm của nó, một tấm bia đá cổ đại sừng sững.",
			"Và một cái tên duy nhất được khắc trên bia đá.",
			"Đó là khởi đầu của mọi ghi chép."
		],
		"thai": [
			"ชั้นที่เก่าแก่ที่สุด จุดเริ่มต้นของทุกสิ่ง",
			"ที่ที่ซากเรืออับปางกองทับถมกันเป็นชั้นๆ",
			"ณ ใจกลางของมัน มีศิลาจารึกโบราณตั้งอยู่",
			"และชื่อเดียวที่จารึกอยู่บนศิลา",
			"นั่นคือจุดเริ่มต้นของบันทึกทั้งหมด"
		],
		"hindi": [
			"सबसे पुरानी परत। हर चीज़ की शुरुआत।",
			"जहाँ जहाज़ के मलबे के अवशेष ढेर हो गए हैं।",
			"इसके केंद्र में एक प्राचीन शिला खड़ी है।",
			"और शिला पर उकेरा गया एक नाम।",
			"वह सभी अभिलेखों की शुरुआत थी।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "가장 오래된 층. 난파된 배의 뼈대가 거대한 유적을 이루고 있다.",
						"english": "The oldest layer. The skeletal remains of a shipwreck form a colossal ruin.",
						"japanese": "最古の層。難破船の骨格が巨大な遺跡を形成している。",
						"chinese": "最古老的层。沉船的骨架形成了一座巨大的遗迹。",
						"french": "La couche la plus ancienne. Les squelettes de navires naufragés forment une ruine colossale.",
						"spanish": "La capa más antigua. Los restos esqueléticos de un naufragio forman una ruina colosal.",
						"vietnamese": "Tầng cổ xưa nhất. Bộ xương của con tàu đắm tạo nên một di tích khổng lồ.",
						"thai": "ชั้นที่เก่าแก่ที่สุด โครงกระดูกของเรืออับปางก่อตัวเป็นซากปรักหักพังขนาดมหึมา",
						"hindi": "सबसे पुरानी परत। जहाज़ के मलबे के कंकाल के अवशेष एक विशाल खंडहर बनाते हैं।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "여기가… 그 탑의 토대인가.",
						"english": "Is this... the foundation of that tower?",
						"japanese": "ここが… あの塔の土台なのか。",
						"chinese": "这里是……那座塔的根基吗？",
						"french": "C'est ici... la fondation de cette tour ?",
						"spanish": "¿Es esto... la base de esa torre?",
						"vietnamese": "Đây là… nền móng của tòa tháp đó sao?",
						"thai": "นี่คือ... รากฐานของหอคอยนั้นหรือเปล่า",
						"hindi": "क्या यह... उस मीनार की नींव है?"
					}
				},
				{
					"spot": [
						3,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "보세요. 이 비석… 뭔가 새겨져 있어요.",
						"english": "Look. This stele... something is carved on it.",
						"japanese": "見てください。この石碑… 何か刻まれています。",
						"chinese": "看。这座石碑……上面刻着什么。",
						"french": "Regardez. Cette stèle... quelque chose y est gravé.",
						"spanish": "Miren. Esta estela... algo está grabado en ella.",
						"vietnamese": "Nhìn kìa. Tấm bia đá này… có gì đó được khắc trên đó.",
						"thai": "ดูสิ ศิลาจารึกนี้... มีบางสิ่งแกะสลักอยู่",
						"hindi": "देखो। इस शिला पर... कुछ उकेरा गया है।"
					},
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "오래된 룬 문자군.",
						"english": "Old runic script.",
						"japanese": "古いルーン文字だ。",
						"chinese": "古老的符文文字。",
						"french": "Anciennes runes.",
						"spanish": "Antiguas runas.",
						"vietnamese": "Chữ rune cổ xưa.",
						"thai": "อักษรรูนเก่าแก่",
						"hindi": "पुराने रनिक अक्षर।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "하나의 단어가 반복해서 새겨져 있어요. 수백 번… 아니, 수천 번.",
						"english": "A single word is carved repeatedly. Hundreds of times... no, thousands of times.",
						"japanese": "一つの単語が繰り返し刻まれています。数百回… いいえ、数千回も。",
						"chinese": "一个词被反复雕刻。数百次……不，数千次。",
						"french": "Un seul mot est gravé à répétition. Des centaines de fois... non, des milliers de fois.",
						"spanish": "Una sola palabra está grabada repetidamente. Cientos de veces... no, miles de veces.",
						"vietnamese": "Một từ duy nhất được khắc lặp đi lặp lại. Hàng trăm lần… không, hàng nghìn lần.",
						"thai": "คำเดียวถูกแกะสลักซ้ำๆ เป็นร้อยครั้ง... ไม่สิ เป็นพันครั้ง",
						"hindi": "एक ही शब्द बार-बार उकेरा गया है। सैकड़ों बार... नहीं, हज़ारों बार।"
					}
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "'Skaalbane'… 스칼베인.",
						"english": "'Skaalbane'... Skaalbane.",
						"japanese": "「スカルベイン」… スカルベイン。",
						"chinese": "“斯卡尔班”… 斯卡尔班。",
						"french": "« Skaalbane »… Skaalbane.",
						"spanish": "\"Skaalbane\"... Skaalbane.",
						"vietnamese": "'Skaalbane'... Skaalbane.",
						"thai": "'Skaalbane'... สกาลเบน.",
						"hindi": "'स्कालबेन'... स्कालबेन।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "eira",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이상해요. 단순히 이름이 아니에요.",
						"english": "It's strange. It's not just a name.",
						"japanese": "おかしい。ただの名前じゃない。",
						"chinese": "真奇怪。这不仅仅是一个名字。",
						"french": "C'est étrange. Ce n'est pas qu'un simple nom.",
						"spanish": "Es extraño. No es solo un nombre.",
						"vietnamese": "Lạ thật. Đây không chỉ là một cái tên.",
						"thai": "แปลกจัง นี่ไม่ใช่แค่ชื่อ",
						"hindi": "यह अजीब है। यह सिर्फ एक नाम नहीं है。"
					},
					"speaker": "eira",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무슨 뜻인데?",
						"english": "What does it mean?",
						"japanese": "どういう意味？",
						"chinese": "这是什么意思？",
						"french": "Que signifie-t-il ?",
						"spanish": "¿Qué significa?",
						"vietnamese": "Có nghĩa là gì?",
						"thai": "หมายความว่าอะไร?",
						"hindi": "इसका क्या मतलब है?"
					}
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이건… 누군가를 부르는 것 같아요. 아니, 무언가를.",
						"english": "It feels like... it's calling someone. Or something.",
						"japanese": "これは… 誰かを呼んでいるみたい。いや、何かを。",
						"chinese": "这就像… 在呼唤某人。不，是某种东西。",
						"french": "On dirait... que ça appelle quelqu'un. Ou quelque chose.",
						"spanish": "Parece... que llama a alguien. No, a algo.",
						"vietnamese": "Cứ như là... nó đang gọi một ai đó. Không, một thứ gì đó.",
						"thai": "เหมือนกำลังเรียกใครบางคน... หรือบางสิ่ง",
						"hindi": "यह... किसी को बुला रहा है। नहीं, कुछ को।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "굳이 이렇게까지 새겨 넣은 이유가?",
						"english": "Why engrave it so prominently?",
						"japanese": "なぜわざわざこんなに刻み込んだんだろう？",
						"chinese": "为什么要特意刻下这些？",
						"french": "Pourquoi l'avoir gravé ainsi ?",
						"spanish": "¿Por qué grabarlo con tanta insistencia?",
						"vietnamese": "Tại sao lại phải khắc sâu như vậy?",
						"thai": "ทำไมถึงสลักมันไว้แบบนี้?",
						"hindi": "इसे इतनी प्रमुखता से क्यों उकेरा गया?"
					},
					"emotion": "base",
					"speaker": "character_any"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "비석이 너무 오래돼서… 해독이 어려워요.",
						"english": "The monument is too old... it's hard to decipher.",
						"japanese": "碑が古すぎて… 解読が難しいです。",
						"chinese": "石碑太古老了… 很难破译。",
						"french": "La stèle est trop ancienne... c'est difficile à déchiffrer.",
						"spanish": "La lápida es demasiado antigua... es difícil de descifrar.",
						"vietnamese": "Bia đá quá cũ rồi... khó mà giải mã được.",
						"thai": "แผ่นจารึกเก่าเกินไป... ถอดรหัสยาก",
						"hindi": "स्मारक बहुत पुराना है... इसे समझना मुश्किल है।"
					}
				},
				{
					"content": {
						"korean": "하지만 저 이름은 계속 나타나는군.",
						"english": "But that name keeps appearing.",
						"japanese": "でも、あの名前は何度も現れる。",
						"chinese": "但是那个名字却一直出现。",
						"french": "Mais ce nom ne cesse d'apparaître.",
						"spanish": "Pero ese nombre sigue apareciendo.",
						"vietnamese": "Nhưng cái tên đó cứ xuất hiện mãi.",
						"thai": "แต่ชื่อนั้นก็ยังคงปรากฏอยู่",
						"hindi": "लेकिन वह नाम बार-बार आता है।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "마치 지워지지 않는 낙인처럼… 스칼베인.",
						"english": "Like an indelible mark... Skaalbane.",
						"japanese": "まるで消えない烙印のように… スカルベイン。",
						"chinese": "就像一个无法抹去的烙印… 斯卡尔班。",
						"french": "Comme une marque indélébile... Skaalbane.",
						"spanish": "Como una marca imborrable... Skaalbane.",
						"vietnamese": "Cứ như một dấu ấn không thể xóa nhòa... Skaalbane.",
						"thai": "ราวกับรอยตราที่ไม่อาจลบเลือน... สกาลเบน",
						"hindi": "जैसे एक अमिट छाप... स्कालबेन।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "여기서 더 나아가면, 뭔가 있을 것 같군.",
						"english": "If we go further, something might be there.",
						"japanese": "ここから先に進めば、何かあるかもしれない。",
						"chinese": "如果再往前走，可能会有什么。",
						"french": "Si nous allons plus loin, il y aura sûrement quelque chose.",
						"spanish": "Si avanzamos más, parece que habrá algo.",
						"vietnamese": "Nếu đi xa hơn nữa, có lẽ sẽ có gì đó.",
						"thai": "ถ้าไปไกลกว่านี้ คงจะมีบางสิ่ง",
						"hindi": "अगर हम आगे बढ़ते हैं, तो कुछ हो सकता है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						3
					],
					"speaker": "eira"
				},
				{
					"emotion": "sad",
					"speaker": "eira",
					"content": {
						"korean": "이름을 입에 올릴 때마다… 뭔가 가까워지는 기분이에요.",
						"english": "Every time I speak the name... I feel something drawing closer.",
						"japanese": "その名を口にするたび… 何かが近づいてくる気がします。",
						"chinese": "每当我说出这个名字… 都感觉有什么东西在靠近。",
						"french": "Chaque fois que je prononce ce nom... j'ai l'impression que quelque chose se rapproche.",
						"spanish": "Cada vez que pronuncio el nombre... siento que algo se acerca.",
						"vietnamese": "Mỗi khi tôi nhắc đến cái tên đó... tôi lại cảm thấy có thứ gì đó đang đến gần.",
						"thai": "ทุกครั้งที่เอ่ยชื่อนั้น... รู้สึกเหมือนมีบางสิ่งกำลังใกล้เข้ามา",
						"hindi": "जब भी मैं यह नाम लेता हूँ... मुझे लगता है कि कुछ करीब आ रहा है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…나도 느껴져. 섬뜩한 한기 같은 게.",
						"english": "...I feel it too. A chilling cold.",
						"japanese": "「…私にも感じる。不気味な冷気のようなものが。」",
						"chinese": "…我也感觉到了。一股令人毛骨悚然的寒意。",
						"french": "...Je le sens aussi. Une sorte de froid effrayant.",
						"spanish": "...Yo también lo siento. Una especie de frío escalofriante.",
						"vietnamese": "...Tôi cũng cảm thấy. Một luồng khí lạnh rợn người.",
						"thai": "...ฉันก็รู้สึกได้ถึงความหนาวเย็นยะเยือกเหมือนกัน",
						"hindi": "...मुझे भी महसूस हो रहा है। एक डरावनी ठंडक जैसी।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이곳은 영웅의 흔적이 아니에요. 절규로 가득한… 무언가예요.",
						"english": "This isn't a hero's trace. It's... something full of screams.",
						"japanese": "「ここは英雄の痕跡じゃない。絶叫に満ちた…何かだ。」",
						"chinese": "这里不是英雄的痕迹。这是…充满绝望的呐喊。",
						"french": "Ce n'est pas la trace d'un héros. C'est... quelque chose rempli de cris.",
						"spanish": "Esto no es un rastro de héroe. Es... algo lleno de gritos.",
						"vietnamese": "Đây không phải dấu vết của anh hùng. Mà là... thứ gì đó đầy tiếng kêu gào.",
						"thai": "ที่นี่ไม่ใช่ร่องรอยของวีรบุรุษ มันคือ...บางสิ่งที่เต็มไปด้วยเสียงกรีดร้อง",
						"hindi": "यह किसी नायक का निशान नहीं है। यह... चीखों से भरा कुछ है।"
					},
					"emotion": "sad",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "도대체 뭘 찾아낸 거지?",
						"english": "What in the world did you find?",
						"japanese": "「一体何を見つけたんだ？」",
						"chinese": "你到底发现了什么？",
						"french": "Qu'avez-vous trouvé, bon sang ?",
						"spanish": "¿Qué demonios encontraste?",
						"vietnamese": "Rốt cuộc đã tìm thấy cái gì vậy?",
						"thai": "สรุปว่านายเจออะไรกันแน่?",
						"hindi": "आखिर तुमने क्या ढूंढ निकाला?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "마침내 마주한 거대한 그림자. 비석의 이름이 불러낸 존재다.",
						"english": "Finally, a colossal shadow. The entity summoned by the monument's name.",
						"japanese": "「ついに相対した巨大な影。碑石の名が呼び出した存在だ。」",
						"chinese": "终于，面对了巨大的阴影。那是墓碑之名召唤出的存在。",
						"french": "Enfin, une ombre colossale. L'entité invoquée par le nom de la stèle.",
						"spanish": "Finalmente, una sombra colosal. La entidad invocada por el nombre de la lápida.",
						"vietnamese": "Cuối cùng, đối mặt với bóng đen khổng lồ. Thực thể được triệu hồi bởi cái tên trên bia đá.",
						"thai": "ในที่สุดก็เผชิญหน้ากับเงาขนาดมหึมา สิ่งมีชีวิตที่ถูกเรียกขานด้วยชื่อบนศิลา",
						"hindi": "आखिरकार, एक विशाल छाया का सामना हुआ। यह स्मारक के नाम से बुलाई गई इकाई है।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "…나를 부르는 소리… 꽤 오랫동안 기다렸다.",
						"english": "...The voice calling me... I've waited quite a long time.",
						"japanese": "「…私を呼ぶ声…ずいぶん長い間待っていた。」",
						"chinese": "…呼唤我的声音…我已经等了很久了。",
						"french": "...La voix qui m'appelle... J'ai attendu un bon moment.",
						"spanish": "...La voz que me llama... He esperado bastante tiempo.",
						"vietnamese": "...Tiếng gọi ta... Đã đợi khá lâu rồi.",
						"thai": "...เสียงที่เรียกหาข้า... ข้ารอมานานแล้ว",
						"hindi": "...मुझे पुकारने वाली आवाज़... मैंने काफ़ी देर इंतज़ार किया।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "네가 스칼베인인가?",
						"english": "Are you Skalbein?",
						"japanese": "「お前がスカルベインか？」",
						"chinese": "你就是斯卡尔贝因吗？",
						"french": "Es-tu Skalbein ?",
						"spanish": "¿Eres Skalbein?",
						"vietnamese": "Ngươi là Skalbein sao?",
						"thai": "แกคือสกาลเบนงั้นรึ?",
						"hindi": "क्या तुम स्कालबीन हो?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그 이름은… 너희의 절규를 먹고 자란 나의 뿌리다.",
						"english": "That name is... my root, grown from your screams.",
						"japanese": "「その名は…お前たちの絶叫を食らって育った私の根源だ。」",
						"chinese": "那个名字是…吞噬你们的绝望而生长的我的根源。",
						"french": "Ce nom est... ma racine, nourrie de vos cris.",
						"spanish": "Ese nombre es... mi raíz, que ha crecido de vuestros gritos.",
						"vietnamese": "Cái tên đó là... gốc rễ của ta, lớn lên từ tiếng kêu gào của các ngươi.",
						"thai": "ชื่อนั้นคือ...รากฐานของข้า ที่เติบโตจากเสียงกรีดร้องของพวกเจ้า",
						"hindi": "वह नाम... तुम्हारी चीखों से बढ़ी हुई मेरी जड़ है।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "절규는… 더 강해질 뿐. 너희는 그저 이름의 먹이가 될 뿐이다.",
						"english": "The screams... only grow stronger. You are merely fodder for the Name.",
						"japanese": "絶叫は…ただ強まるばかり。お前たちはただ、名の餌食になるだけだ。",
						"chinese": "尖叫声…只会越来越响。你们只是名字的饵食。",
						"french": "Les cris... ne feront que s'intensifier. Vous ne serez que la proie du Nom.",
						"spanish": "Los gritos... solo se harán más fuertes. No seréis más que el alimento del Nombre.",
						"vietnamese": "Tiếng gào thét… chỉ càng mạnh hơn. Các ngươi sẽ chỉ là con mồi của Cái Tên.",
						"thai": "เสียงกรีดร้อง... จะยิ่งแข็งแกร่งขึ้นเท่านั้น พวกเจ้าจะเป็นเพียงเหยื่อของชื่อ",
						"hindi": "चीखें... केवल और तीव्र होंगी। तुम सिर्फ नाम का शिकार बन जाओगे।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않았어. 이름을 해독할 때까지.",
						"english": "...It's not over yet. Until the Name is deciphered.",
						"japanese": "…まだ終わってない。名を解読するまでは。",
						"chinese": "…还没结束。直到解开名字之谜。",
						"french": "...Ce n'est pas encore fini. Pas avant d'avoir déchiffré le Nom.",
						"spanish": "...Aún no ha terminado. No hasta que el Nombre sea descifrado.",
						"vietnamese": "…Chưa kết thúc đâu. Cho đến khi giải mã được Cái Tên.",
						"thai": "...ยังไม่จบ จนกว่าจะถอดรหัสชื่อได้",
						"hindi": "...अभी खत्म नहीं हुआ है। जब तक नाम का रहस्य सुलझाया नहीं जाता।"
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "쓰러뜨려도… 소용없다. 이름은 영원히 남을 테니…",
						"english": "Even if defeated... it's useless. The name will remain forever...",
						"japanese": "「倒しても…無駄だ。名は永遠に残るのだから…」",
						"chinese": "即便击败也…毫无用处。那个名字将永远存在…",
						"french": "Même si vaincu... c'est inutile. Le nom restera éternellement...",
						"spanish": "Incluso si es derrotado... es inútil. El nombre permanecerá para siempre...",
						"vietnamese": "Dù bị đánh bại... cũng vô ích thôi. Cái tên sẽ còn mãi...",
						"thai": "แม้จะล้มลง...ก็ไร้ประโยชน์ ชื่อนี้จะยังคงอยู่ตลอดไป...",
						"hindi": "हरा भी दो तो... कोई फ़ायदा नहीं। नाम हमेशा रहेगा..."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…이름이 문제였어.",
						"english": "...The name was the problem.",
						"japanese": "「…名前が問題だったんだ。」",
						"chinese": "…名字才是问题所在。",
						"french": "...Le nom était le problème.",
						"spanish": "...El nombre era el problema.",
						"vietnamese": "...Cái tên mới là vấn đề.",
						"thai": "...ชื่อนั่นแหละคือปัญหา",
						"hindi": "...नाम ही समस्या थी।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						3
					],
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "이것은 시작에 불과해요. 이름은… 더 깊은 곳에 있어요.",
						"english": "This is just the beginning. The name is... in a deeper place.",
						"japanese": "「これは始まりに過ぎない。名は…もっと深い場所にある。」",
						"chinese": "这仅仅是开始。那个名字…在更深的地方。",
						"french": "Ce n'est que le début. Le nom est... dans un endroit plus profond.",
						"spanish": "Esto es solo el principio. El nombre está... en un lugar más profundo.",
						"vietnamese": "Đây chỉ là khởi đầu thôi. Cái tên... ở một nơi sâu hơn.",
						"thai": "นี่เป็นเพียงจุดเริ่มต้นเท่านั้น ชื่อนั้น...ยังคงอยู่ในที่ที่ลึกกว่า",
						"hindi": "यह तो बस शुरुआत है। नाम... और भी गहरी जगह में है।"
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "가장 오래된 층. 비석의 이름은 탑의 진짜 시작을 알리고 있었다.",
						"english": "The oldest floor. The name on the monument heralded the tower's true beginning.",
						"japanese": "最古の階。碑石に刻まれた名は、塔の真の始まりを告げていた。",
						"chinese": "最古老的楼层。石碑上的名字预示着塔的真正开端。",
						"french": "Le plus ancien étage. Le nom sur la stèle annonçait le véritable début de la tour.",
						"spanish": "La planta más antigua. El nombre en la estela anunciaba el verdadero comienzo de la torre.",
						"vietnamese": "Tầng cổ xưa nhất. Tên trên bia đá báo hiệu sự khởi đầu thực sự của tòa tháp.",
						"thai": "ชั้นที่เก่าแก่ที่สุด ชื่อบนศิลาจารึกบ่งบอกถึงการเริ่มต้นที่แท้จริงของหอคอย",
						"hindi": "सबसे पुरानी मंजिल। शिला पर अंकित नाम टॉवर की सच्ची शुरुआत का प्रतीक था।"
					},
					"type": "speech"
				}
			]
		}
	]
} as const;
