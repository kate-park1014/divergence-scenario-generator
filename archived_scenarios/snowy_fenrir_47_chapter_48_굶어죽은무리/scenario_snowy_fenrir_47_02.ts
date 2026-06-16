export const scenario_snowy_fenrir_47_02 = {
	"scenario_id": "snowy_fenrir_47_02",
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
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "늑대의 몸을 이룬 사체들이 길을 막았다.",
						"english": "Wolf-bodied corpses blocked the path.",
						"japanese": "狼の体を持つ死体が道を塞いでいた。",
						"chinese": "狼形尸体挡住了去路。",
						"french": "Des cadavres en corps de loup bloquaient le chemin.",
						"spanish": "Cuerpos de lobo sin vida bloqueaban el camino.",
						"vietnamese": "Những xác chết hình sói chắn ngang đường.",
						"thai": "ซากศพรูปร่างหมาป่าขวางทางอยู่",
						"hindi": "भेड़िये के आकार के शवों ने रास्ता रोक दिया।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 뼈… 어쩐지 이상해.",
						"english": "These bones... something's off.",
						"japanese": "この骨…どうもおかしい。",
						"chinese": "这些骨头…总觉得不对劲。",
						"french": "Ces os… quelque chose ne va pas.",
						"spanish": "Estos huesos… algo no cuadra.",
						"vietnamese": "Những bộ xương này… có gì đó lạ.",
						"thai": "กระดูกพวกนี้... รู้สึกแปลกๆ",
						"hindi": "ये हड्डियाँ… कुछ अजीब है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"spot": [
						2,
						2
					],
					"speaker": "eira",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "…한 마리가 아니야.",
						"english": "...It's not just one.",
						"japanese": "…一匹だけじゃない。",
						"chinese": "…不止一只。",
						"french": "…Ce n'est pas qu'un seul.",
						"spanish": "…No es solo uno.",
						"vietnamese": "…Không phải chỉ một con.",
						"thai": "...ไม่ใช่แค่ตัวเดียว",
						"hindi": "…यह सिर्फ एक नहीं है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "응? 무슨 소리야, 에이라?",
						"english": "Huh? What do you mean, Eira?",
						"japanese": "え？どういうこと、エイラ？",
						"chinese": "嗯？什么意思，艾拉？",
						"french": "Hein ? Qu'est-ce que tu veux dire, Eira ?",
						"spanish": "¿Eh? ¿Qué quieres decir, Eira?",
						"vietnamese": "Hả? Ý cậu là sao, Eira?",
						"thai": "หือ? หมายความว่าไง, ไอรา?",
						"hindi": "क्या? तुम्हारा क्या मतलब है, ऐरा?"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "eira",
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "이 뼈들… 자세히 보면 수백 개의 작은 짐승의 것이 뭉쳐 있어.",
						"english": "These bones... if you look closely, they're hundreds of small beasts fused together.",
						"japanese": "この骨…よく見ると、数百もの小さな獣の骨が一つに集まっている。",
						"chinese": "这些骨头…仔细看，是数百只小野兽的骨头融合在一起。",
						"french": "Ces os… si tu regardes de près, ce sont des centaines de petites bêtes fusionnées.",
						"spanish": "Estos huesos… si los miras de cerca, son cientos de pequeñas bestias fusionadas.",
						"vietnamese": "Những bộ xương này… nhìn kỹ thì là hàng trăm con thú nhỏ hợp lại.",
						"thai": "กระดูกพวกนี้... ถ้ามองดีๆ จะเห็นว่าเป็นกระดูกสัตว์เล็กๆ นับร้อยตัวที่รวมกัน",
						"hindi": "ये हड्डियाँ… अगर तुम ध्यान से देखो, तो सैकड़ों छोटे जानवरों की हड्डियाँ आपस में जुड़ी हुई हैं।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "모두 같은 자세로, 무언가를 향해 얼어붙었어.",
						"english": "All frozen in the same pose, facing something.",
						"japanese": "皆、同じ姿勢で、何かを向いて凍りついている。",
						"chinese": "所有人都以相同的姿势，面向某物，僵住了。",
						"french": "Tous figés dans la même pose, face à quelque chose.",
						"spanish": "Todos congelados en la misma postura, frente a algo.",
						"vietnamese": "Tất cả đều đóng băng trong cùng một tư thế, hướng về một thứ gì đó.",
						"thai": "ทั้งหมดถูกแช่แข็งในท่าเดียวกัน หันหน้าเข้าหาสิ่งบางอย่าง",
						"hindi": "सभी एक ही मुद्रा में जम गए थे, किसी चीज़ की ओर मुखातिब।"
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "수백 마리? 그럼 저 거대한 늑대가…",
						"english": "Hundreds? So that giant wolf…",
						"japanese": "数百匹？じゃあ、あの巨大な狼が…",
						"chinese": "数百只？那只巨大的狼是…",
						"french": "Des centaines ? Alors ce loup géant…",
						"spanish": "¿Cientos? Entonces ese lobo gigante…",
						"vietnamese": "Hàng trăm con? Vậy con sói khổng lồ đó…",
						"thai": "หลายร้อยตัว? งั้นหมาป่ายักษ์ตัวนั้น...",
						"hindi": "सैकड़ों? तो वह विशाल भेड़िया..."
					}
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "한 마리 마수라고만은 할 수 없겠군.",
						"english": "It can't be just one beast.",
						"japanese": "一匹の魔獣だけとは言えないな。",
						"chinese": "不能只说是一只魔兽。",
						"french": "On ne peut pas dire que ce n'est qu'une seule bête démoniaque.",
						"spanish": "No puede ser solo una bestia.",
						"vietnamese": "Không thể nói đó chỉ là một con quái vật.",
						"thai": "คงไม่ใช่แค่สัตว์อสูรตัวเดียว",
						"hindi": "इसे सिर्फ एक राक्षस नहीं कह सकते।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "eira",
					"spot": [
						4,
						2
					]
				},
				{
					"content": {
						"korean": "잊힌 기록들을 더듬어봐도… 이런 형태의 마수는 없어.",
						"english": "Even searching through forgotten records… there's no monster of this form.",
						"japanese": "忘れ去られた記録を辿っても…このような形の魔獣はいない。",
						"chinese": "即使翻阅被遗忘的记录……也没有这种形态的魔兽。",
						"french": "Même en fouillant les registres oubliés… il n'y a pas de bête démoniaque de cette forme.",
						"spanish": "Incluso buscando en los registros olvidados… no hay una bestia de esta forma.",
						"vietnamese": "Ngay cả khi lục lọi những ghi chép đã bị lãng quên… cũng không có quái vật nào có hình dạng này.",
						"thai": "แม้จะค้นดูบันทึกที่ถูกลืมเลือนไป...ก็ไม่มีสัตว์อสูรในรูปแบบนี้",
						"hindi": "भूले हुए अभिलेखों में भी... ऐसी कोई राक्षसी प्रजाति नहीं है।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그럼 대체… 저건 뭐야?",
						"english": "Then what… what is that?",
						"japanese": "じゃあ一体…あれは何なんだ？",
						"chinese": "那到底……那是什么？",
						"french": "Alors qu'est-ce que… c'est ça ?",
						"spanish": "Entonces, ¿qué… qué es eso?",
						"vietnamese": "Vậy thì… đó là cái gì?",
						"thai": "แล้วสรุป…นั่นคืออะไร?",
						"hindi": "तो फिर... वह क्या है?"
					},
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "한 무리야. 통째로… 굶주림에 스러진 무리.",
						"english": "It's a pack. An entire pack… fallen to starvation.",
						"japanese": "一団だ。丸ごと…飢えで倒れた一団だ。",
						"chinese": "那是一个族群。一整个……因饥饿而倒下的族群。",
						"french": "C'est une meute. Une meute entière… tombée de faim.",
						"spanish": "Es una manada. Una manada entera… caída por el hambre.",
						"vietnamese": "Đó là một bầy. Cả một bầy… đã gục ngã vì đói.",
						"thai": "เป็นฝูง เป็นฝูง...ที่ล้มตายเพราะความหิวโหย",
						"hindi": "यह एक झुंड है। पूरा झुंड... भुखमरी से नष्ट हो गया।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "에이라의 말에 탐험대 모두 침묵했다. 비극적인 진실이 드러나는 순간이었다.",
						"english": "At Eira's words, the entire expedition fell silent. It was the moment the tragic truth was revealed.",
						"japanese": "エイラの言葉に、探検隊全員が沈黙した。悲劇的な真実が明らかになる瞬間だった。",
						"chinese": "艾拉的话让整个探险队都沉默了。那是悲剧性真相揭露的时刻。",
						"french": "Aux mots d'Eira, toute l'expédition tomba silencieuse. C'était le moment où la vérité tragique fut révélée.",
						"spanish": "Ante las palabras de Eira, toda la expedición guardó silencio. Era el momento en que se revelaba la trágica verdad.",
						"vietnamese": "Trước lời nói của Eira, toàn bộ đoàn thám hiểm đều im lặng. Đó là khoảnh khắc sự thật bi thảm được phơi bày.",
						"thai": "เมื่อได้ยินคำพูดของเอร่า ทีมสำรวจทั้งหมดก็เงียบกริบ มันเป็นช่วงเวลาที่ความจริงอันน่าเศร้าถูกเปิดเผย",
						"hindi": "ऐरा के शब्दों पर, पूरी अभियान दल चुप हो गई। यह वह क्षण था जब दुखद सत्य सामने आया।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "eira",
					"spot": [
						2,
						2
					]
				},
				{
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "이 뼈들에 새겨진 마지막 순간은… 끔찍한 갈증과 허기뿐이야.",
						"english": "The last moments etched into these bones are… nothing but terrible thirst and hunger.",
						"japanese": "この骨に刻まれた最後の瞬間は…恐ろしいほどの渇きと飢えだけだ。",
						"chinese": "刻在这些骨头上的最后时刻……只有可怕的口渴和饥饿。",
						"french": "Les derniers instants gravés dans ces os sont… rien que l'horrible soif et la faim.",
						"spanish": "Los últimos momentos grabados en estos huesos son… solo una terrible sed y hambre.",
						"vietnamese": "Những khoảnh khắc cuối cùng khắc sâu vào những bộ xương này… chỉ là cơn khát và đói khủng khiếp.",
						"thai": "ช่วงเวลาสุดท้ายที่สลักอยู่บนกระดูกเหล่านี้... มีเพียงความกระหายและความหิวโหยอันน่ากลัว",
						"hindi": "इन हड्डियों में खुदे अंतिम क्षण... केवल भयानक प्यास और भूख के हैं।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "먹이를 찾아 헤매다 결국, 함께 얼어붙은 흔적…",
						"english": "Traces of them wandering for food and eventually, freezing together…",
						"japanese": "餌を求めて彷徨い、結局、共に凍りついた痕跡…",
						"chinese": "寻找食物，最终，一同被冻结的痕迹……",
						"french": "Des traces de leur errance pour la nourriture et finalement, leur gel ensemble…",
						"spanish": "Rastros de ellos vagando por comida y, finalmente, congelándose juntos…",
						"vietnamese": "Dấu vết của việc chúng lang thang tìm thức ăn và cuối cùng, cùng nhau đóng băng…",
						"thai": "ร่องรอยของการที่พวกมันออกเร่ร่อนหาอาหาร และสุดท้ายก็แข็งตายไปพร้อมกัน...",
						"hindi": "भोजन की तलाश में भटकते हुए, अंततः, एक साथ जम जाने के निशान..."
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…얼마나 고통스러웠을까.",
						"english": "…How much they must have suffered.",
						"japanese": "…どれほど苦しかっただろうか。",
						"chinese": "……那该有多痛苦啊。",
						"french": "…Combien ils ont dû souffrir.",
						"spanish": "…Cuánto habrán sufrido.",
						"vietnamese": "…Họ đã đau khổ biết nhường nào.",
						"thai": "...พวกเขาคงจะเจ็บปวดทรมานมากแค่ไหน",
						"hindi": "...कितना कष्ट सहना पड़ा होगा।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그 무수한 굶주림이… 저 형상을 만들었어.",
						"english": "Countless hungers... forged that form.",
						"japanese": "その無数の飢えが…あの姿を形作った。",
						"chinese": "无尽的饥饿……造就了那副模样。",
						"french": "Ces innombrables faims... ont créé cette forme.",
						"spanish": "Esa hambre incontable... dio forma a esa figura.",
						"vietnamese": "Vô số cơn đói… đã tạo nên hình dạng đó.",
						"thai": "ความหิวโหยนับไม่ถ้วน… ได้สร้างรูปร่างนั้นขึ้นมา",
						"hindi": "वह अनगिनत भूख... जिसने उस रूप को बनाया।"
					},
					"speaker": "eira",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "굶주림이 형상화된 거대한 그림자가 앞을 막아섰다.",
						"english": "A colossal shadow, hunger personified, blocked the way.",
						"japanese": "飢えが形を成した巨大な影が、行く手を阻んだ。",
						"chinese": "一道饥饿具象化的巨大黑影挡住了去路。",
						"french": "Une ombre colossale, personnification de la faim, bloquait le chemin.",
						"spanish": "Una sombra gigantesca, el hambre personificada, bloqueaba el paso.",
						"vietnamese": "Một cái bóng khổng lồ, hiện thân của sự đói khát, chặn đường.",
						"thai": "เงามหึมาที่เกิดจากความหิวโหยได้ขวางทางไว้",
						"hindi": "भूख से बनी एक विशाल छाया ने रास्ता रोक दिया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "배… 고… 파…",
						"english": "Hu...n...gry...",
						"japanese": "お…腹…空…い…た…",
						"chinese": "我……饿……",
						"french": "J'ai... faim...",
						"spanish": "Ha...m...bre...",
						"vietnamese": "Đói... quá...",
						"thai": "หิว… จัง…",
						"hindi": "भू...ख...ल...गी...है..."
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "이 울부짖음… 수백 마리의 비명이 겹쳐 있어.",
						"english": "This wail... hundreds of screams interwoven.",
						"japanese": "この叫び…何百もの悲鳴が重なっている。",
						"chinese": "这吼声……数百道哀嚎声重叠在一起。",
						"french": "Ce hurlement... des centaines de cris entrelacés.",
						"spanish": "Este lamento... cientos de gritos superpuestos.",
						"vietnamese": "Tiếng gào thét này… là sự chồng chéo của hàng trăm tiếng kêu.",
						"thai": "เสียงคร่ำครวญนี้… คือเสียงกรีดร้องนับร้อยที่ซ้อนทับกัน",
						"hindi": "यह चीख... सैकड़ों चीखें आपस में गुंथी हुई हैं।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "저 비극을… 멈춰야 해.",
						"english": "That tragedy... must be stopped.",
						"japanese": "あの悲劇を…止めなければ。",
						"chinese": "必须……阻止那场悲剧。",
						"french": "Cette tragédie... doit être arrêtée.",
						"spanish": "Esa tragedia... debe ser detenida.",
						"vietnamese": "Bi kịch đó… phải được dừng lại.",
						"thai": "โศกนาฏกรรมนั้น… ต้องหยุดลง",
						"hindi": "उस त्रासदी को... रोकना होगा।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크르르르르…!",
						"english": "Grrrraaaargh...!",
						"japanese": "クルルルルル…！",
						"chinese": "嘶——！",
						"french": "Grrr... !",
						"spanish": "Grrr... !",
						"vietnamese": "Gầm gừ...!",
						"thai": "ครรรร์…!",
						"hindi": "ग्र्र्र्र्र... !"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "angry",
					"content": {
						"korean": "더… 많은 배고픔을… 가져와라…",
						"english": "Bring… more hunger…",
						"japanese": "もっと…飢えを…よこせ…",
						"chinese": "带来…更多的饥饿…",
						"french": "Apportez… plus de faim…",
						"spanish": "Trae… más hambre…",
						"vietnamese": "Mang… thêm cơn đói…",
						"thai": "นำ…ความหิว…มาให้มากกว่านี้…",
						"hindi": "और… ज़्यादा भूख… लाओ…"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…아직 끝나지 않았어!",
						"english": "…It's not over yet!",
						"japanese": "…まだ終わってない！",
						"chinese": "…还没有结束！",
						"french": "…Ce n'est pas encore fini !",
						"spanish": "…¡Todavía no ha terminado!",
						"vietnamese": "…Chưa kết thúc đâu!",
						"thai": "…ยังไม่จบ!",
						"hindi": "…अभी ख़त्म नहीं हुआ!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "굶주린 무리의 비명이 다시 울려 퍼졌다. 탐험대는 쓰러졌다.",
						"english": "The screams of the hungry horde echoed once more. The expedition fell.",
						"japanese": "飢えた群れの悲鳴が再び響き渡った。探検隊は倒れた。",
						"chinese": "饥饿群体的尖叫声再次回荡。探险队倒下了。",
						"french": "Les cris de la horde affamée résonnèrent de nouveau. L'expédition est tombée.",
						"spanish": "Los gritos de la horda hambrienta resonaron una vez más. La expedición cayó.",
						"vietnamese": "Tiếng thét của lũ quái đói vang vọng trở lại. Đoàn thám hiểm đã ngã xuống.",
						"thai": "เสียงกรีดร้องของฝูงที่หิวโหยดังก้องขึ้นอีกครั้ง คณะสำรวจล้มลงแล้ว",
						"hindi": "भूखी भीड़ की चीखें एक बार फिर गूँज उठीं। अभियान दल गिर गया。"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…모…두…",
						"english": "...Ev...ery...one...",
						"japanese": "…み…ん…な…",
						"chinese": "……大……家……",
						"french": "...Tous...",
						"spanish": "...To...dos...",
						"vietnamese": "...Tất... cả...",
						"thai": "...ทุก...คน...",
						"hindi": "...स...भी..."
					}
				},
				{
					"spot": [
						2,
						2
					],
					"type": "direction",
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이제서야… 편히 쉴 수 있겠지.",
						"english": "Now... they can finally rest in peace.",
						"japanese": "今ようやく…安らかに眠れるだろう。",
						"chinese": "如今……终于能够安息了。",
						"french": "Maintenant... ils peuvent enfin reposer en paix.",
						"spanish": "Ahora... por fin podrán descansar en paz.",
						"vietnamese": "Giờ đây… cuối cùng họ cũng có thể yên nghỉ.",
						"thai": "ตอนนี้… คงจะได้พักผ่อนอย่างสงบแล้ว",
						"hindi": "अब... आखिर वे शांति से आराम कर सकते हैं।"
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "진정한 안식을 찾았기를…",
						"english": "May they find true solace...",
						"japanese": "真の安らぎを見つけられますように。",
						"chinese": "愿他们寻得真正的安宁……",
						"french": "Qu'ils aient trouvé le véritable repos...",
						"spanish": "Que hayan encontrado el verdadero descanso...",
						"vietnamese": "Cầu mong họ tìm thấy sự an nghỉ thật sự…",
						"thai": "ขอให้พวกเขาได้พบกับความสงบสุขที่แท้จริง…",
						"hindi": "काश उन्हें सच्ची शांति मिले..."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "굶주린 무리의 응결은 소멸했다. 그러나, 이 비극의 원인은 여전히 미궁 속에 있었다.",
						"english": "The manifestation of the ravenous horde vanished. Yet, the cause of this tragedy remained shrouded in mystery.",
						"japanese": "飢えた群れの凝結は消滅した。しかし、この悲劇の原因は未だ謎に包まれていた。",
						"chinese": "饥饿群体的凝结消散了。然而，这场悲剧的根源仍是未解之谜。",
						"french": "La manifestation de la horde affamée a disparu. Cependant, la cause de cette tragédie restait un mystère.",
						"spanish": "La coalescencia de la horda hambrienta se disipó. Sin embargo, la causa de esta tragedia seguía siendo un misterio.",
						"vietnamese": "Sự kết tụ của lũ đói khát đã biến mất. Tuy nhiên, nguyên nhân của bi kịch này vẫn còn là một bí ẩn.",
						"thai": "การรวมตัวของฝูงชนที่หิวโหยได้สลายไปแล้ว แต่สาเหตุของโศกนาฏกรรมนี้ยังคงเป็นปริศนา",
						"hindi": "भूखे झुंड का जमना तो समाप्त हो गया। लेकिन, इस त्रासदी का कारण अभी भी रहस्य में डूबा हुआ था।"
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
			"세계수 심장부, 뼈의 길이 펼쳐졌다.",
			"늑대의 형상을 한 사체가 그 끝에 버티고 섰다.",
			"그러나, 침묵의 기록자는 읽어냈다.",
			"이것은 한 마리 짐승의 죽음이 아니었다.",
			"수백의 굶주림이 뭉쳐, 하나의 비극이 되었다."
		],
		"english": [
			"Deep within the World Tree, a path of bones unfolded.",
			"At its end, a wolf-shaped corpse stood firm.",
			"However, the Silent Chronicler read deeper.",
			"This was not the death of a single beast.",
			"Hundreds of hungers converged, becoming a single tragedy."
		],
		"japanese": [
			"世界樹の心臓部、骨の道が広がった。",
			"その果てに、狼の形をした死体が立ち塞がった。",
			"しかし、沈黙の記録者は読み解いた。",
			"これは一匹の獣の死ではなかった。",
			"数百の飢えが集まり、一つの悲劇と化した。"
		],
		"chinese": [
			"世界树深处，骨之路展开。",
			"其尽头，一具狼形尸体屹立。",
			"然而，沉默的记录者解读了它。",
			"这不是一头野兽的死亡。",
			"数百饥饿汇聚，化为一场悲剧。"
		],
		"french": [
			"Au cœur de l'Arbre-Monde, un chemin d'ossements s'est déployé.",
			"À son extrémité, un cadavre en forme de loup se tenait là, inébranlable.",
			"Cependant, le Chroniqueur Silencieux lut au-delà.",
			"Ce n'était pas la mort d'une seule bête.",
			"Des centaines de famines convergèrent, devenant une seule tragédie."
		],
		"spanish": [
			"En lo más profundo del Árbol del Mundo, un camino de huesos se desplegó.",
			"Al final del camino, un cadáver con forma de lobo se irguió.",
			"Sin embargo, el Cronista Silencioso leyó más allá.",
			"Esta no era la muerte de una sola bestia.",
			"Cientos de hambrunas convergieron, convirtiéndose en una sola tragedia."
		],
		"vietnamese": [
			"Sâu trong lòng Cây Thế Giới, một con đường xương cốt hiện ra.",
			"Ở cuối con đường, một xác chết hình sói đứng sừng sững.",
			"Tuy nhiên, Người Ghi Chép Câm Lặng đã đọc ra.",
			"Đây không phải là cái chết của một con thú đơn lẻ.",
			"Hàng trăm cơn đói hợp lại, trở thành một bi kịch duy nhất."
		],
		"thai": [
			"ลึกเข้าไปในใจกลางของต้นไม้โลก ทางกระดูกได้เผยออก",
			"ที่ปลายทางนั้น ซากศพรูปร่างหมาป่ายืนขวางอยู่",
			"ทว่า ผู้บันทึกแห่งความเงียบได้อ่านออก",
			"นี่ไม่ใช่การตายของสัตว์เพียงตัวเดียว",
			"ความหิวโหยนับร้อยรวมกัน กลายเป็นโศกนาฏกรรมเดียว"
		],
		"hindi": [
			"विश्व वृक्ष के हृदय में, हड्डियों का मार्ग फैल गया।",
			"उसके अंत में, एक भेड़िये के आकार का शव दृढ़ता से खड़ा था।",
			"हालांकि, मौन इतिहासकार ने इसे पढ़ लिया।",
			"यह एक जानवर की मृत्यु नहीं थी।",
			"सैकड़ों भूखें मिलकर, एक ही त्रासदी बन गईं।"
		]
	}
} as const;
