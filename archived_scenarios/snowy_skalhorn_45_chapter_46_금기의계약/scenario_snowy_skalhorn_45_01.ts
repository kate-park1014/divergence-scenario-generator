export const scenario_snowy_skalhorn_45_01 = {
	"scenario_id": "snowy_skalhorn_45_01",
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
			"뿔잔. 그 표면에 새겨진 문양이 빛났다.",
			"신을 향한 기도가 아니었다.",
			"오래된 약속. 누군가 정령과 맺은 금기의 계약.",
			"에이라가 속삭였다. '이건… 기도가 아니에요.'"
		],
		"english": [
			"The Horned Chalice. Its carved patterns glowed.",
			"It was not a prayer to a god.",
			"An ancient promise. A forbidden pact someone made with a spirit.",
			"Eira whispered, \"This is... not a prayer.\""
		],
		"japanese": [
			"角杯。その表面に刻まれた紋様が光った。",
			"神への祈りではなかった。",
			"古い約束。誰かが精霊と交わした禁忌の契約。",
			"エイラがささやいた。「これは…祈りじゃない。」"
		],
		"chinese": [
			"角杯。其表面雕刻的纹样闪耀着。",
			"这不是对神的祈祷。",
			"一个古老的约定。某人与精灵签订的禁忌契约。",
			"艾拉低语道：“这…不是祈祷。”"
		],
		"french": [
			"La Corne. Ses motifs gravés brillaient.",
			"Ce n'était pas une prière aux dieux.",
			"Une ancienne promesse. Un pacte interdit que quelqu'un avait passé avec un esprit.",
			"Eira murmura : \"Ce n'est... pas une prière.\""
		],
		"spanish": [
			"El Cáliz Cornudo. Sus patrones grabados brillaban.",
			"No era una oración a un dios.",
			"Una antigua promesa. Un pacto prohibido que alguien hizo con un espíritu.",
			"Eira susurró: \"Esto... no es una oración.\""
		],
		"vietnamese": [
			"Sừng tế. Hoa văn khắc trên bề mặt nó phát sáng.",
			"Đó không phải là lời cầu nguyện gửi đến thần linh.",
			"Một lời hứa cổ xưa. Một khế ước cấm kỵ mà ai đó đã lập với tinh linh.",
			"Eira thì thầm, \"Đây... không phải là một lời cầu nguyện.\""
		],
		"thai": [
			"จอกเขา. ลวดลายที่แกะสลักบนพื้นผิวของมันส่องประกาย.",
			"มันไม่ใช่คำอธิษฐานถึงเทพเจ้า.",
			"คำสัญญาเก่าแก่. พันธสัญญาต้องห้ามที่ใครบางคนทำไว้กับวิญญาณ.",
			"เอร่ากระซิบ \"นี่มัน...ไม่ใช่คำอธิษฐาน.\""
		],
		"hindi": [
			"सींग वाला प्याला। उसकी सतह पर खुदे हुए पैटर्न चमक उठे।",
			"यह किसी देवता के लिए प्रार्थना नहीं थी।",
			"एक प्राचीन वादा। किसी ने एक आत्मा के साथ किया गया एक वर्जित अनुबंध।",
			"ऐरा ने फुसफुसाया, \"यह... प्रार्थना नहीं है।\""
		]
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
						"korean": "뿔잔의 문양이 선명하게 빛났다.",
						"english": "The Horned Chalice's patterns shone brightly.",
						"japanese": "角杯の紋様が鮮やかに光った。",
						"chinese": "角杯的纹样清晰地闪耀着。",
						"french": "Les motifs de la Corne brillaient distinctement.",
						"spanish": "Los patrones del Cáliz Cornudo brillaban intensamente.",
						"vietnamese": "Hoa văn trên sừng tế phát sáng rõ rệt.",
						"thai": "ลวดลายของจอกเขาเปล่งประกายอย่างชัดเจน.",
						"hindi": "सींग वाले प्याले के पैटर्न स्पष्ट रूप से चमक रहे थे।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이게 대체 뭐야?",
						"english": "What in the world is this?",
						"japanese": "これはいったい何だ？",
						"chinese": "这到底是什么？",
						"french": "Qu'est-ce que c'est que ça ?",
						"spanish": "¿Qué es esto?",
						"vietnamese": "Cái quái gì thế này?",
						"thai": "นี่มันอะไรกันแน่?",
						"hindi": "आखिर यह क्या है?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"action": "enter",
					"speaker": "eira",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "…이건 기도가 아니에요.",
						"english": "...This isn't a prayer.",
						"japanese": "…これは祈りじゃない。",
						"chinese": "……这不是祈祷。",
						"french": "...Ce n'est pas une prière.",
						"spanish": "...Esto no es una oración.",
						"vietnamese": "...Đây không phải là một lời cầu nguyện.",
						"thai": "...นี่ไม่ใช่คำอธิษฐาน.",
						"hindi": "...यह प्रार्थना नहीं है।"
					},
					"speaker": "eira",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "누군가 맺은, 오래된 약속의 기록.",
						"english": "The record of an old promise, made by someone.",
						"japanese": "誰かが交わした、古い約束の記録。",
						"chinese": "某人所立的古老约定的记录。",
						"french": "Le registre d'une ancienne promesse, faite par quelqu'un.",
						"spanish": "El registro de una antigua promesa, hecha por alguien.",
						"vietnamese": "Ghi chép về một lời hứa cũ, được ai đó lập.",
						"thai": "บันทึกคำสัญญาเก่าแก่ที่ใครบางคนทำไว้.",
						"hindi": "किसी के द्वारा किए गए एक पुराने वादे का रिकॉर्ड।"
					},
					"speaker": "eira",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "약속이라고?",
						"english": "A promise?",
						"japanese": "約束だって？",
						"chinese": "约定？",
						"french": "Une promesse ?",
						"spanish": "¿Una promesa?",
						"vietnamese": "Lời hứa ư?",
						"thai": "คำสัญญาเหรอ?",
						"hindi": "एक वादा?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "네. 빙설 정령과 주술사 사이에.",
						"english": "Yes. Between a Frost Spirit and a shaman.",
						"japanese": "はい。氷雪精霊と呪術師の間に。",
						"chinese": "是的。在冰雪精灵和萨满之间。",
						"french": "Oui. Entre un esprit de glace et un chaman.",
						"spanish": "Sí. Entre un Espíritu de Hielo y un chamán.",
						"vietnamese": "Vâng. Giữa một Tinh linh Băng tuyết và một pháp sư.",
						"thai": "ใช่. ระหว่างวิญญาณน้ำแข็งกับหมอผี.",
						"hindi": "हाँ। एक हिम आत्मा और एक तांत्रिक के बीच।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
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
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "첫 번째 조항이 해독됐어요.",
						"english": "First clause deciphered.",
						"japanese": "第一条が解読されました。",
						"chinese": "第一条款已解密。",
						"french": "La première clause a été déchiffrée.",
						"spanish": "La primera cláusula ha sido descifrada.",
						"vietnamese": "Điều khoản đầu tiên đã được giải mã.",
						"thai": "ข้อตกลงแรกถูกถอดรหัสแล้ว",
						"hindi": "पहला खंड सुलझा लिया गया है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "뭐라고 적혀 있어?",
						"english": "What does it say?",
						"japanese": "何と書いてある？",
						"chinese": "写了什么？",
						"french": "Qu'est-ce qu'il y a d'écrit ?",
						"spanish": "¿Qué dice?",
						"vietnamese": "Nó viết gì?",
						"thai": "เขียนว่าอะไร?",
						"hindi": "क्या लिखा है?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "정령이 겨울을 물리고, 땅을 비옥하게 할 것.",
						"english": "The spirit will banish winter and fertilize the land.",
						"japanese": "精霊が冬を退け、大地を豊かにするだろう。",
						"chinese": "精灵将驱逐冬季，使土地肥沃。",
						"french": "L'esprit chassera l'hiver et fertilisera la terre.",
						"spanish": "El espíritu ahuyentará el invierno y fertilizará la tierra.",
						"vietnamese": "Tinh linh sẽ xua tan mùa đông và làm màu mỡ đất đai.",
						"thai": "วิญญาณจะขับไล่ฤดูหนาวและทำให้พื้นดินอุดมสมบูรณ์",
						"hindi": "आत्मा सर्दी को दूर करेगी और भूमि को उपजाऊ बनाएगी।"
					},
					"speaker": "eira",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "그게 다야?",
						"english": "Is that all?",
						"japanese": "それだけ？",
						"chinese": "就这些？",
						"french": "C'est tout ?",
						"spanish": "¿Es todo?",
						"vietnamese": "Chỉ vậy thôi sao?",
						"thai": "แค่นั้นเหรอ?",
						"hindi": "बस इतना ही?"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "eira",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "두 번째 조항을 읽어보니…",
						"english": "Reading the second clause...",
						"japanese": "第二条を読んでみると…",
						"chinese": "读到第二条款时…",
						"french": "En lisant la deuxième clause...",
						"spanish": "Al leer la segunda cláusula...",
						"vietnamese": "Đọc điều khoản thứ hai thì…",
						"thai": "เมื่ออ่านข้อตกลงที่สอง...",
						"hindi": "दूसरा खंड पढ़ने पर…"
					},
					"speaker": "eira",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "정령에게 '무언가'를 바친다는 내용이에요.",
						"english": "It's about offering 'something' to the spirit.",
						"japanese": "精霊に「何か」を捧げるという内容です。",
						"chinese": "内容是向精灵献上“某种东西”。",
						"french": "Il est question d'offrir \"quelque chose\" à l'esprit.",
						"spanish": "Dice que se ofrece \"algo\" al espíritu.",
						"vietnamese": "Nội dung là cúng tế 'thứ gì đó' cho tinh linh.",
						"thai": "มันบอกว่ามีการถวาย 'บางสิ่ง' ให้กับวิญญาณ",
						"hindi": "इसमें है कि आत्मा को 'कुछ' चढ़ाया जाएगा।"
					},
					"speaker": "eira",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "'무언가'라니?",
						"english": "'Something'?",
						"japanese": "「何か」だって？",
						"chinese": "“某种东西”？",
						"french": "« Quelque chose » ?",
						"spanish": "¿\"Algo\"?",
						"vietnamese": "'Thứ gì đó' là sao?",
						"thai": "'บางสิ่ง' อะไรน่ะ?",
						"hindi": "'कुछ'?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "아직 해독이 안 돼요. 하지만 중요한 대가일 거예요.",
						"english": "Not yet deciphered. But it's an important cost.",
						"japanese": "まだ解読できていません。しかし、重要な代償でしょう。",
						"chinese": "尚未解密。但这会是重要的代价。",
						"french": "Ce n'est pas encore déchiffré. Mais ce doit être un prix important.",
						"spanish": "Aún no está descifrado. Pero debe ser un precio importante.",
						"vietnamese": "Vẫn chưa giải mã được. Nhưng đó chắc hẳn là một cái giá quan trọng.",
						"thai": "ยังถอดรหัสไม่ได้ แต่คงเป็นสิ่งตอบแทนที่สำคัญ",
						"hindi": "अभी तक सुलझाया नहीं गया है। लेकिन यह एक महत्वपूर्ण कीमत होगी।"
					},
					"speaker": "eira",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "세 번째 조항. 계약이 점점… 심상치 않아요.",
						"english": "The third clause. This contract is getting... unsettling.",
						"japanese": "第三条。契約がだんだん…穏やかじゃありません。",
						"chinese": "第三条款。这份契约越来越…不寻常了。",
						"french": "La troisième clause. Ce contrat devient... inquiétant.",
						"spanish": "La tercera cláusula. El contrato se está volviendo... inquietante.",
						"vietnamese": "Điều khoản thứ ba. Hợp đồng này ngày càng… đáng ngại.",
						"thai": "ข้อตกลงที่สาม สัญญานี้เริ่มจะ... ไม่ธรรมดาแล้ว",
						"hindi": "तीसरा खंड। यह अनुबंध धीरे-धीरे… गंभीर होता जा रहा है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "뭐가 문제인데?",
						"english": "What's the problem?",
						"japanese": "何が問題なの？",
						"chinese": "有什么问题？",
						"french": "Quel est le problème ?",
						"spanish": "¿Cuál es el problema?",
						"vietnamese": "Vấn đề là gì?",
						"thai": "มีปัญหาอะไร?",
						"hindi": "क्या समस्या है?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "주술사가… 정령에게 모든 것을 바치겠다고 했어요.",
						"english": "The shaman… vowed to give everything to the spirits.",
						"japanese": "シャーマンが… 精霊に全てを捧げると言いました。",
						"chinese": "萨满… 说要把一切都献给精灵。",
						"french": "La chamane… a promis de tout donner aux esprits.",
						"spanish": "La chamana… dijo que lo entregaría todo a los espíritus.",
						"vietnamese": "Phù thủy… đã nói sẽ hiến dâng mọi thứ cho linh hồn.",
						"thai": "หมอผี… บอกว่าจะถวายทุกสิ่งแก่ภูตผี",
						"hindi": "शमन ने… कहा कि वह सब कुछ आत्माओं को समर्पित करेगा।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "모든 것?",
						"english": "Everything?",
						"japanese": "全てを？",
						"chinese": "所有一切？",
						"french": "Tout ?",
						"spanish": "¿Todo?",
						"vietnamese": "Mọi thứ ư?",
						"thai": "ทุกสิ่งเลย?",
						"hindi": "सब कुछ?"
					},
					"type": "speech"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter"
				},
				{
					"content": {
						"korean": "약속은… 지켜져야 한다.",
						"english": "A promise… must be kept.",
						"japanese": "約束は… 守られねばならない。",
						"chinese": "誓约… 必须遵守。",
						"french": "Une promesse… doit être tenue.",
						"spanish": "Una promesa… debe ser cumplida.",
						"vietnamese": "Lời hứa… phải được giữ.",
						"thai": "คำสัญญา… ต้องรักษาไว้",
						"hindi": "एक वादा… निभाना होगा।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…다시 돌아올 것이다!",
						"english": "…I will return!",
						"japanese": "…また戻って来るだろう！",
						"chinese": "…我还会回来的！",
						"french": "…Je reviendrai !",
						"spanish": "…¡Volveré!",
						"vietnamese": "…Ta sẽ trở lại!",
						"thai": "…ฉันจะกลับมา!",
						"hindi": "…मैं वापस आऊंगा!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "아직… 해독할 조항이 남아있어요.",
						"english": "There are still… clauses to decipher.",
						"japanese": "まだ… 解読すべき条項が残っています。",
						"chinese": "仍有… 待解读的条款。",
						"french": "Il reste encore… des clauses à déchiffrer.",
						"spanish": "Todavía quedan… cláusulas por descifrar.",
						"vietnamese": "Vẫn còn… những điều khoản cần giải mã.",
						"thai": "ยังคงมี… ข้อกำหนดที่ต้องถอดรหัส",
						"hindi": "अभी भी… कुछ खंड हैं जिन्हें समझना बाकी है।"
					},
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "eira"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "크크… 계약은… 깨지지 않아.",
						"english": "Heh heh… The pact… cannot be broken.",
						"japanese": "クク… 契約は… 破れない。",
						"chinese": "呵呵… 契约… 不会打破。",
						"french": "Hé hé… Le pacte… ne peut être brisé.",
						"spanish": "Je je… El pacto… no se puede romper.",
						"vietnamese": "Khà khà… Giao ước… không thể bị phá vỡ.",
						"thai": "ฮิ ฮิ… สัญญา… ไม่มีวันแตกหัก",
						"hindi": "हे हे… समझौता… टूट नहीं सकता।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "무슨 소리야?",
						"english": "What do you mean?",
						"japanese": "どういうことだ？",
						"chinese": "你在说什么？",
						"french": "Que voulez-vous dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ngươi có ý gì?",
						"thai": "หมายความว่าอะไร?",
						"hindi": "तुम्हारा क्या मतलब है?"
					}
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "뿔잔의 문양이… 마지막 조항을 보여주고 있어요.",
						"english": "The horn's emblem… reveals the final clause.",
						"japanese": "角杯の紋様が… 最後の条項を示しています。",
						"chinese": "号角的纹章… 揭示了最后一条条款。",
						"french": "L'emblème de la corne… révèle la clause finale.",
						"spanish": "El emblema del cuerno… revela la cláusula final.",
						"vietnamese": "Biểu tượng của sừng… đang tiết lộ điều khoản cuối cùng.",
						"thai": "สัญลักษณ์ของแตร… กำลังเผยข้อตกลงสุดท้าย",
						"hindi": "सींग का प्रतीक… अंतिम खंड को प्रकट कर रहा है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "뿔잔의 빛은 사라지지 않았다. 아직 끝나지 않은 이야기.",
						"english": "The horn's light has not faded. A story not yet over.",
						"japanese": "角杯の光は消えていない。まだ終わらない物語。",
						"chinese": "号角的光芒并未消逝。故事尚未结束。",
						"french": "La lumière de la corne n'a pas disparu. Une histoire qui n'est pas encore terminée.",
						"spanish": "La luz del cuerno no se ha desvanecido. Una historia aún no terminada.",
						"vietnamese": "Ánh sáng của sừng chưa tắt. Một câu chuyện chưa kết thúc.",
						"thai": "แสงของแตรยังไม่จางหาย เรื่องราวที่ยังไม่จบลง",
						"hindi": "सींग की रोशनी बुझी नहीं है। एक कहानी जो अभी खत्म नहीं हुई है।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "뿔잔에서 터져 나온 냉기가 공간을 얼어붙게 했다.",
						"english": "The cold burst from the Horned Goblet, freezing the space.",
						"japanese": "角杯から溢れ出した冷気が空間を凍りつかせた。",
						"chinese": "寒气从角杯中涌出，冻结了整个空间。",
						"french": "Le froid jailli du Calice Cornu, glaçant l'espace.",
						"spanish": "El frío brotó del Cáliz Cornudo, congelando el espacio.",
						"vietnamese": "Hơi lạnh từ Chiếc Cốc Sừng trào ra, đóng băng không gian.",
						"thai": "ความหนาวเย็นที่ปะทุออกมาจากถ้วยเขาแช่แข็งพื้นที่",
						"hindi": "सींग वाले प्याले से निकली ठंड ने जगह को जमा दिया।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "침입자들. 이곳에 온 이유가 뭐냐?",
						"english": "Intruders. Why are you here?",
						"japanese": "侵入者たちめ。ここへ来た理由は何だ？",
						"chinese": "入侵者。你们来这里有何目的？",
						"french": "Intrus. Que faites-vous ici ?",
						"spanish": "Intrusos. ¿Por qué estáis aquí?",
						"vietnamese": "Những kẻ xâm nhập. Lý do các ngươi đến đây là gì?",
						"thai": "ผู้บุกรุก พวกเจ้ามาที่นี่ทำไม?",
						"hindi": "घुसपैठिए। तुम यहाँ क्यों आए हो?"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "뿔잔의 계약을 밝히러 왔다!",
						"english": "We're here to expose the Horned Goblet's pact!",
						"japanese": "角杯の契約を暴きに来た！",
						"chinese": "我们是来揭露角杯契约的！",
						"french": "Nous sommes là pour révéler le pacte du Calice Cornu !",
						"spanish": "¡Hemos venido a desvelar el pacto del Cáliz Cornudo!",
						"vietnamese": "Chúng ta đến đây để vạch trần giao ước của Chiếc Cốc Sừng!",
						"thai": "เรามาที่นี่เพื่อเปิดเผยสัญญาของถ้วยเขา!",
						"hindi": "हम हॉर्नड गोबलेट के समझौते को उजागर करने आए हैं!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 자가… 계약과 관련이 있어요.",
						"english": "This one… is connected to the pact.",
						"japanese": "こいつが… 契約に関わっている。",
						"chinese": "这家伙… 与契约有关。",
						"french": "Celui-ci… est lié au pacte.",
						"spanish": "Este… está relacionado con el pacto.",
						"vietnamese": "Kẻ này… có liên quan đến giao ước.",
						"thai": "คนผู้นี้… เกี่ยวข้องกับสัญญา",
						"hindi": "यह… समझौते से जुड़ा है।"
					},
					"speaker": "eira",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "흥. 어리석은 인간들.",
						"english": "Hmph. Foolish mortals.",
						"japanese": "ふん。愚かな人間どもめ。",
						"chinese": "哼。愚蠢的人类。",
						"french": "Hmph. Mortels insensés.",
						"spanish": "Hum. Mortales estúpidos.",
						"vietnamese": "Hừm. Loài người ngu ngốc.",
						"thai": "หึ มนุษย์โง่เขลา",
						"hindi": "हम्म। मूर्ख नश्वर।"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"direction": "down",
					"type": "direction",
					"duration_ms": 400,
					"action": "exit"
				},
				{
					"content": {
						"korean": "감히 금기를 건드리려 하는가?",
						"english": "Dare you tamper with the taboo?",
						"japanese": "よくも禁忌に触れようとするか？",
						"chinese": "你们竟敢触碰禁忌？",
						"french": "Osez-vous toucher à l'interdit ?",
						"spanish": "¿Os atrevéis a tocar lo prohibido?",
						"vietnamese": "Ngươi dám chạm vào điều cấm kỵ sao?",
						"thai": "บังอาจแตะต้องสิ่งต้องห้ามรึ?",
						"hindi": "क्या तुम वर्जित को छूने की हिम्मत करते हो?"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				}
			]
		}
	]
} as const;
