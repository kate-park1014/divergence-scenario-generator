export const scenario_snowy_fenrir_6_03 = {
	"scenario_id": "snowy_fenrir_6_03",
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
			"혹독한 추위가 대지를 지배했다.",
			"에이라는 모든 이상 징후를 기록했다.",
			"죽은 사체, 사라진 온기, 비정상적 기상.",
			"늑대 Fenrir… 단순한 맹수가 아니었다."
		],
		"english": [
			"A biting cold gripped the land.",
			"Aira recorded every anomaly.",
			"Dead bodies, lost warmth, abnormal weather.",
			"The wolf Fenrir... was no mere beast."
		],
		"japanese": [
			"厳しい寒さが大地を支配した。",
			"アイラはすべての異常を記録した。",
			"死体、失われた温もり、異常気象。",
			"狼フェンリル… 単なる猛獣ではなかった。"
		],
		"chinese": [
			"严酷的寒冷笼罩着大地。",
			"艾拉记录了所有异常迹象。",
			"死去的尸体，消散的温暖，异常的天气。",
			"狼芬里尔……并非只是猛兽。"
		],
		"french": [
			"Un froid rigoureux s'était emparé de la terre.",
			"Aira a enregistré chaque anomalie.",
			"Cadres morts, chaleur perdue, météo anormale.",
			"Le loup Fenrir... n'était pas une simple bête."
		],
		"spanish": [
			"Un frío implacable dominaba la tierra.",
			"Aira registró cada anomalía.",
			"Cuerpos muertos, calor desaparecido, clima anormal.",
			"El lobo Fenrir... no era una bestia cualquiera."
		],
		"vietnamese": [
			"Cái lạnh khắc nghiệt bao trùm mặt đất.",
			"Aira đã ghi lại mọi dấu hiệu bất thường.",
			"Xác chết, hơi ấm đã mất, thời tiết bất thường.",
			"Con sói Fenrir... không phải là một mãnh thú đơn thuần."
		],
		"thai": [
			"ความหนาวเหน็บเข้าปกคลุมผืนแผ่นดิน",
			"ไอราบันทึกความผิดปกติทุกอย่าง",
			"ศพไร้วิญญาณ, ความอบอุ่นที่หายไป, สภาพอากาศผิดปกติ",
			"หมาป่าเฟนรีร์... ไม่ใช่สัตว์ร้ายธรรมดา"
		],
		"hindi": [
			"कठोर ठंड ने भूमि पर कब्ज़ा कर लिया था।",
			"ऐरा ने सभी असामान्यताओं को दर्ज किया।",
			"मृत शरीर, खोई हुई गर्माहट, असामान्य मौसम।",
			"भेड़िया फेनरिर... सिर्फ़ एक जंगली जानवर नहीं था।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "설원 깊숙이, 비정상적인 추위가 계속되었다.",
						"english": "Deep in the snowy fields, the abnormal cold persisted.",
						"japanese": "雪原の奥深く、異常な寒さが続いていた。",
						"chinese": "雪原深处，异常的寒冷持续着。",
						"french": "Au fond des champs de neige, le froid anormal persistait.",
						"spanish": "En lo profundo de los campos nevados, el frío anormal persistía.",
						"vietnamese": "Sâu trong cánh đồng tuyết, cái lạnh bất thường vẫn tiếp diễn.",
						"thai": "ลึกเข้าไปในทุ่งหิมะ ความหนาวเย็นที่ผิดปกติยังคงอยู่",
						"hindi": "बर्फीले मैदानों के अंदर, असामान्य ठंड बनी रही।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "박사님, 너무 춥습니다. 기록할 게 많나요?",
						"english": "Doctor, it's too cold. Is there a lot to record?",
						"japanese": "博士、寒すぎます。記録することは多いですか？",
						"chinese": "博士，太冷了。有很多东西要记录吗？",
						"french": "Docteur, il fait trop froid. Y a-t-il beaucoup à enregistrer ?",
						"spanish": "Doctor, hace demasiado frío. ¿Hay mucho que registrar?",
						"vietnamese": "Bác sĩ, trời lạnh quá. Có nhiều thứ để ghi lại không?",
						"thai": "ท่านอาจารย์ หนาวเกินไป มีอะไรให้บันทึกเยอะไหมครับ/คะ",
						"hindi": "डॉक्टर, बहुत ठंड है। क्या बहुत कुछ दर्ज करना है?"
					}
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "그래. 기온 하강 속도가… 심상치 않아. 이런 패턴은 처음이야.",
						"english": "Yes. The rate of temperature drop... is unusual. This pattern is new to me.",
						"japanese": "ああ。気温の降下速度が…尋常ではない。このパターンは初めてだ。",
						"chinese": "是的。气温下降的速度……不寻常。这种模式我从未见过。",
						"french": "Oui. La vitesse de la chute de température... est inhabituelle. C'est un nouveau modèle pour moi.",
						"spanish": "Sí. La velocidad de la caída de la temperatura... es inusual. Este patrón es nuevo para mí.",
						"vietnamese": "Đúng vậy. Tốc độ giảm nhiệt độ... thật bất thường. Tôi chưa từng thấy kiểu này trước đây.",
						"thai": "ใช่แล้ว อัตราการลดลงของอุณหภูมิ... ผิดปกติ รูปแบบนี้ไม่เคยเจอมาก่อน",
						"hindi": "हाँ। तापमान गिरने की दर... असामान्य है। यह पैटर्न मेरे लिए नया है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그냥 추운 거 아닐까요?",
						"english": "Couldn't it just be cold?",
						"japanese": "ただ寒いだけじゃないですか？",
						"chinese": "难道不只是冷吗？",
						"french": "Ne serait-ce pas juste le froid ?",
						"spanish": "¿No podría ser solo frío?",
						"vietnamese": "Không phải chỉ là lạnh thôi sao?",
						"thai": "แค่อากาศหนาวไม่ใช่เหรอ?",
						"hindi": "क्या यह सिर्फ ठंड नहीं हो सकती?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "아니. 이건 자연스러운 현상이 아니야.",
						"english": "No. This is not a natural phenomenon.",
						"japanese": "違う。これは自然な現象じゃない。",
						"chinese": "不。这不是一个自然现象。",
						"french": "Non. Ce n'est pas un phénomène naturel.",
						"spanish": "No. Esto no es un fenómeno natural.",
						"vietnamese": "Không. Đây không phải là một hiện tượng tự nhiên.",
						"thai": "ไม่ นี่ไม่ใช่ปรากฏการณ์ธรรมชาติ",
						"hindi": "नहीं। यह एक प्राकृतिक घटना नहीं है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "탐험대는 죽은 동물들의 흔적을 발견했다.",
						"english": "The expedition team found traces of dead animals.",
						"japanese": "探検隊は死んだ動物たちの痕跡を発見した。",
						"chinese": "探险队发现了死亡动物的痕迹。",
						"french": "L'équipe d'expédition a trouvé des traces d'animaux morts.",
						"spanish": "El equipo de expedición encontró rastros de animales muertos.",
						"vietnamese": "Đội thám hiểm đã tìm thấy dấu vết của những con vật đã chết.",
						"thai": "คณะสำรวจพบร่องรอยของสัตว์ที่ตายแล้ว",
						"hindi": "अभियान दल को मृत जानवरों के निशान मिले।"
					},
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "이 사체들을 봐. 깨끗해. 상처도 거의 없고.",
						"english": "Look at these corpses. Clean. Barely any wounds.",
						"japanese": "これらの死体を見て。きれいだ。傷もほとんどない。",
						"chinese": "看看这些尸体。很干净。几乎没有伤口。",
						"french": "Regardez ces corps. Ils sont propres. Presque aucune blessure.",
						"spanish": "Mira estos cadáveres. Limpios. Apenas hay heridas.",
						"vietnamese": "Nhìn những xác chết này đi. Sạch sẽ. Hầu như không có vết thương nào.",
						"thai": "ดูศพพวกนี้สิ สะอาดมาก แทบไม่มีบาดแผลเลย",
						"hindi": "इन शवों को देखो। साफ हैं। लगभग कोई घाव नहीं।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "맹수 소행인데 이렇게 깨끗할 수가 있나요?",
						"english": "A wild beast's doing, yet so clean? How is that possible?",
						"japanese": "猛獣の仕業なのに、こんなにきれいなわけがないだろう？",
						"chinese": "这是猛兽所为，却如此干净？这怎么可能？",
						"french": "L'œuvre d'une bête sauvage, et pourtant si propre ? Comment est-ce possible ?",
						"spanish": "Obra de una bestia salvaje, ¿y tan limpio? ¿Cómo es posible?",
						"vietnamese": "Việc của một con thú dữ, nhưng lại sạch sẽ thế này sao?",
						"thai": "ฝีมือสัตว์ร้าย แต่ทำไมถึงสะอาดขนาดนี้?",
						"hindi": "एक जंगली जानवर का काम, फिर भी इतना साफ? यह कैसे मुमकिन है?"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "마치… 생명력만 빨아간 것 같아. 물리적인 상흔이 거의 없어.",
						"english": "It's as if... only their life force was drained. Almost no physical trauma.",
						"japanese": "まるで…生命力だけを吸い取られたようだ。物理的な傷跡がほとんどない。",
						"chinese": "就像…生命力被吸走了。几乎没有物理创伤。",
						"french": "On dirait que… seule leur force vitale a été drainée. Presque aucun traumatisme physique.",
						"spanish": "Parece que... solo les succionaron la fuerza vital. Casi sin trauma físico.",
						"vietnamese": "Cứ như thể... chỉ có sinh lực bị hút cạn. Hầu như không có tổn thương vật lý.",
						"thai": "ราวกับว่า... ถูกดูดพลังชีวิตไปเท่านั้น แทบไม่มีร่องรอยบาดแผลทางกายภาพเลย",
						"hindi": "जैसे... उनकी जीवन शक्ति ही सोख ली गई हो। लगभग कोई शारीरिक आघात नहीं।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "Fenrir의 발자국도 여기서 끊겨.",
						"english": "Fenrir's tracks also stop here.",
						"japanese": "フェンリルの足跡もここで途切れている。",
						"chinese": "芬里尔的足迹也在这里中断了。",
						"french": "Les traces de Fenrir s'arrêtent aussi ici.",
						"spanish": "Las huellas de Fenrir también se detienen aquí.",
						"vietnamese": "Dấu chân của Fenrir cũng dừng lại ở đây.",
						"thai": "รอยเท้าของเฟนเรียร์ก็สิ้นสุดลงที่นี่",
						"hindi": "फेनrir के निशान भी यहीं रुक जाते हैं।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "주변의 온도가 비정상적으로 빠르게 사라져.",
						"english": "The ambient temperature is disappearing abnormally fast.",
						"japanese": "周囲の温度が異常な速さで消えている。",
						"chinese": "周围的温度正在异常快速地消失。",
						"french": "La température ambiante disparaît anormalement vite.",
						"spanish": "La temperatura ambiente está desapareciendo anormalmente rápido.",
						"vietnamese": "Nhiệt độ xung quanh đang biến mất một cách bất thường nhanh chóng.",
						"thai": "อุณหภูมิโดยรอบกำลังหายไปอย่างรวดเร็วผิดปกติ",
						"hindi": "आसपास का तापमान असामान्य रूप से तेज़ी से गायब हो रहा है।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "체감 온도가 너무 낮아요.",
						"english": "The perceived temperature is too low.",
						"japanese": "体感温度が低すぎる。",
						"chinese": "体感温度太低了。",
						"french": "La température ressentie est trop basse.",
						"spanish": "La temperatura percibida es demasiado baja.",
						"vietnamese": "Nhiệt độ cảm nhận được quá thấp.",
						"thai": "อุณหภูมิที่รู้สึกได้ต่ำเกินไป",
						"hindi": "महसूस किया गया तापमान बहुत कम है।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "이 현상은 물리적으로 설명하기 어려워. 마치… 열을 '흡수'하는 것 같아.",
						"english": "This phenomenon is difficult to explain physically. It's as if... it's 'absorbing' heat.",
						"japanese": "この現象は物理的に説明しにくい。まるで…熱を「吸収」しているかのようだ。",
						"chinese": "这种现象很难用物理学解释。就像…它在“吸收”热量。",
						"french": "Ce phénomène est difficile à expliquer physiquement. C'est comme si… il 'absorbait' la chaleur.",
						"spanish": "Este fenómeno es difícil de explicar físicamente. Es como si... estuviera 'absorbiendo' calor.",
						"vietnamese": "Hiện tượng này khó giải thích về mặt vật lý. Cứ như thể... nó đang 'hấp thụ' nhiệt.",
						"thai": "ปรากฏการณ์นี้ยากที่จะอธิบายทางกายภาพ ราวกับว่า... มันกำลัง 'ดูดซับ' ความร้อน",
						"hindi": "इस घटना को भौतिक रूप से समझाना मुश्किल है। ऐसा लगता है कि... यह गर्मी को 'अवशोषित' कर रहा है।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "단순한 맹수가 주변의 온도를 이렇게까지 떨어뜨릴 순 없어.",
						"english": "A mere wild beast couldn't lower the ambient temperature this much.",
						"japanese": "単なる猛獣が周囲の温度をこれほどまでに下げることはできない。",
						"chinese": "一只普通的猛兽不可能把周围的温度降到这种程度。",
						"french": "Une simple bête sauvage ne pourrait pas faire baisser la température ambiante à ce point.",
						"spanish": "Una simple bestia salvaje no podría bajar tanto la temperatura ambiente.",
						"vietnamese": "Một con thú dữ đơn thuần không thể làm nhiệt độ xung quanh giảm đến mức này.",
						"thai": "สัตว์ร้ายธรรมดาไม่สามารถทำให้อุณหภูมิโดยรอบลดลงได้ถึงขนาดนี้",
						"hindi": "एक साधारण जंगली जानवर आसपास का तापमान इतना कम नहीं कर सकता।"
					},
					"type": "speech"
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
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "모든 기록이 한 가지를 가리키고 있어.",
						"english": "All records point to one thing.",
						"japanese": "すべての記録が一点を指し示している。",
						"chinese": "所有记录都指向一件事。",
						"french": "Tous les registres indiquent une seule chose.",
						"spanish": "Todos los registros apuntan a una cosa.",
						"vietnamese": "Tất cả các ghi chép đều chỉ ra một điều.",
						"thai": "บันทึกทั้งหมดชี้ไปที่สิ่งหนึ่ง",
						"hindi": "सभी रिकॉर्ड एक ही बात की ओर इशारा कर रहे हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "Fenrir는… 우리가 아는 늑대가 아니야.",
						"english": "Fenrir is... not the wolf we know.",
						"japanese": "フェンリルは…我々が知る狼ではない。",
						"chinese": "芬里尔…不是我们所知的狼。",
						"french": "Fenrir n'est… pas le loup que nous connaissons.",
						"spanish": "Fenrir no es... el lobo que conocemos.",
						"vietnamese": "Fenrir... không phải là con sói mà chúng ta biết.",
						"thai": "เฟนเรียร์... ไม่ใช่หมาป่าที่เรารู้จัก",
						"hindi": "फेनrir... वह भेड़िया नहीं है जिसे हम जानते हैं।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그럼 대체 뭐란 말입니까?",
						"english": "Then what is it?",
						"japanese": "では、一体何なのですか？",
						"chinese": "那到底是什么？",
						"french": "Alors, qu'est-ce que c'est ?",
						"spanish": "¿Entonces qué es?",
						"vietnamese": "Vậy thì rốt cuộc nó là gì?",
						"thai": "แล้วมันคืออะไรกันแน่?",
						"hindi": "तो फिर यह क्या है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "고대 전설 속의 힘… 비정상적인 추위, 사라진 온기, 그리고 생기만 흡수당한 사체들.",
						"english": "An ancient legendary power... abnormal cold, vanished warmth, and corpses drained of all life.",
						"japanese": "古代伝説の力…異常な寒さ、失われた温もり、そして生気だけを吸い取られた死体たち。",
						"chinese": "古代传说中的力量……异常的寒冷、消失的温暖，以及被吸走生机的尸体。",
						"french": "Un pouvoir de légendes anciennes... un froid anormal, une chaleur disparue, et des corps vidés de leur énergie vitale.",
						"spanish": "Un poder de leyenda antigua... un frío anormal, el calor desaparecido y cadáveres despojados de toda vida.",
						"vietnamese": "Một sức mạnh trong truyền thuyết cổ đại... cái lạnh bất thường, sự ấm áp biến mất, và những xác chết chỉ còn bị hút cạn sinh khí.",
						"thai": "พลังในตำนานโบราณ... ความหนาวเย็นผิดปกติ, ความอบอุ่นที่หายไป, และซากศพที่ถูกดูดกลืนไปแต่พลังชีวิต.",
						"hindi": "प्राचीन किंवदंती की शक्ति... असामान्य ठंड, गायब हुई गर्माहट, और जीवन शक्ति सोख लिए गए शव।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "이 모든 것이 그 증거야.",
						"english": "All this is the proof.",
						"japanese": "これら全てがその証拠だ。",
						"chinese": "这就是所有证据。",
						"french": "Tout ceci en est la preuve.",
						"spanish": "Todo esto es la prueba.",
						"vietnamese": "Tất cả những thứ này là bằng chứng.",
						"thai": "ทั้งหมดนี้คือหลักฐาน.",
						"hindi": "यह सब उसका सबूत है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 인간들… 감히… {random_boss}의 영역에 발을 들이다니.",
						"english": "Foolish humans... How dare you... trespass into {random_boss}'s domain.",
						"japanese": "愚かな人間め…よくも… {random_boss}の領域に足を踏み入れたな。",
						"chinese": "愚蠢的人类……竟敢……踏入{random_boss}的领域。",
						"french": "Humains stupides... Comment osez-vous... pénétrer le domaine de {random_boss}.",
						"spanish": "Estúpidos humanos... ¿Cómo osáis... invadir el dominio de {random_boss}?",
						"vietnamese": "Loài người ngu ngốc... Dám... đặt chân vào lãnh địa của {random_boss}.",
						"thai": "มนุษย์โง่เง่า... กล้าดียังไง... เข้ามาในอาณาเขตของ {random_boss}.",
						"hindi": "मूर्ख मनुष्य... तुम्हारी हिम्मत कैसे हुई... {random_boss} के क्षेत्र में कदम रखने की।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 놓쳤어!",
						"english": "Damn it... Missed!",
						"japanese": "くそ…逃した！",
						"chinese": "该死……失手了！",
						"french": "Zut... Raté !",
						"spanish": "¡Maldita sea... Fallé!",
						"vietnamese": "Chết tiệt... Trượt rồi!",
						"thai": "ให้ตายสิ... พลาดแล้ว!",
						"hindi": "धिक्कार है... चूक गया!"
					}
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "eira",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "여기서 포기할 수 없어. 모든 데이터가 부족해.",
						"english": "Can't give up here. Not enough data.",
						"japanese": "ここで諦めるわけにはいかない。データが足りない。",
						"chinese": "不能在这里放弃。数据不足。",
						"french": "Je ne peux pas abandonner ici. Pas assez de données.",
						"spanish": "No puedo rendirme aquí. Faltan datos.",
						"vietnamese": "Không thể bỏ cuộc ở đây. Thiếu tất cả dữ liệu.",
						"thai": "จะยอมแพ้ที่นี่ไม่ได้ ข้อมูลยังไม่พอ.",
						"hindi": "यहां हार नहीं मान सकता। सभी डेटा अपर्याप्त हैं।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "eira",
					"content": {
						"korean": "다음엔… 반드시 그 실체를 파악해야 해.",
						"english": "Next time... I must grasp its true nature.",
						"japanese": "次は…必ずその実体を把握しなければならない。",
						"chinese": "下次……我必须掌握它的真实面貌。",
						"french": "La prochaine fois... je dois absolument saisir sa véritable nature.",
						"spanish": "La próxima vez... debo comprender su verdadera esencia.",
						"vietnamese": "Lần tới... nhất định phải nắm bắt được bản chất thật của nó.",
						"thai": "ครั้งหน้า... ต้องเข้าใจถึงแก่นแท้ของมันให้ได้.",
						"hindi": "अगली बार... मुझे उसकी असली पहचान को समझना होगा।"
					},
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "큭… 이 정도로는… {random_boss}를… 막을 수 없어…",
						"english": "Hmph... This much... won't stop... {random_boss}...",
						"japanese": "くっ…この程度では…{random_boss}を…止められない…。",
						"chinese": "哼……就凭这样……阻止不了……{random_boss}……",
						"french": "Hmpf... Ce n'est pas... assez pour arrêter... {random_boss}...",
						"spanish": "Ugh... Esto no... detendrá a... {random_boss}...",
						"vietnamese": "Khụ... Chừng này thì... không thể ngăn cản... {random_boss}... đâu...",
						"thai": "ฮึ่ม... แค่นี้... หยุด... {random_boss} ... ไม่ได้หรอก...",
						"hindi": "उफ़... इससे... {random_boss} को... रोक नहीं पाओगे..."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "해치웠다!",
						"english": "Defeated!",
						"japanese": "やったぞ！",
						"chinese": "解决了！",
						"french": "On l'a eu !",
						"spanish": "¡Lo logramos!",
						"vietnamese": "Xong rồi!",
						"thai": "จัดการได้แล้ว!",
						"hindi": "हमने कर दिखाया!"
					},
					"emotion": "happy"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "eira",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "이 잔해… 남은 에너지가 증명해. 저것은 단순한 짐승이 아니었어.",
						"english": "These remnants... the residual energy proves it. That was no mere beast.",
						"japanese": "この残骸…残ったエネルギーが証明する。あれはただの獣ではなかった。",
						"chinese": "这些残骸……残留的能量证明了。那不是一只简单的野兽。",
						"french": "Ces vestiges... l'énergie résiduelle le prouve. Ce n'était pas une simple bête.",
						"spanish": "Estos restos... la energía residual lo demuestra. Eso no era una simple bestia.",
						"vietnamese": "Những tàn tích này... năng lượng còn lại chứng minh điều đó. Đó không phải là một con quái vật đơn thuần.",
						"thai": "ซากเหล่านี้... พลังงานที่หลงเหลืออยู่พิสูจน์ได้. นั่นไม่ใช่สัตว์ร้ายธรรมดา.",
						"hindi": "यह अवशेष... बची हुई ऊर्जा साबित करती है। वह कोई साधारण जानवर नहीं था।"
					}
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "Fenrir는… 상상 이상이야. 기록해야 해.",
						"english": "Fenrir... beyond imagination. Must record this.",
						"japanese": "フェンリルは…想像以上だ。記録しなければ。",
						"chinese": "芬里尔……超乎想象。必须记录。",
						"french": "Fenrir est... au-delà de l'imagination. Je dois l'enregistrer.",
						"spanish": "Fenrir es... más allá de lo imaginado. Debo registrarlo.",
						"vietnamese": "Fenrir... ngoài sức tưởng tượng. Phải ghi lại.",
						"thai": "เฟนริร์... เหนือความคาดหมาย ต้องบันทึกไว้.",
						"hindi": "फेनrir... कल्पना से परे। इसे दर्ज करना होगा।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "에이라의 의구심은 확신이 되었다. 그러나 Fenrir의 진짜 모습은 아직 베일에 싸여 있었다.",
						"english": "Eira's doubts turned to certainty. Yet, Fenrir's true form remained veiled.",
						"japanese": "エイラの疑念は確信に変わった。しかし、フェンリルの真の姿はまだベールに包まれていた。",
						"chinese": "艾拉的疑虑变成了确信。然而，芬里尔的真实面貌仍蒙着一层神秘的面纱。",
						"french": "Les doutes d'Eira se transformèrent en certitude. Pourtant, la véritable forme de Fenrir restait voilée.",
						"spanish": "Las dudas de Eira se convirtieron en certeza. Sin embargo, la verdadera forma de Fenrir seguía velada.",
						"vietnamese": "Sự nghi ngờ của Eira đã trở thành sự thật. Tuy nhiên, hình dạng thật của Fenrir vẫn còn bị che giấu.",
						"thai": "ความสงสัยของเอร่ากลายเป็นความมั่นใจ แต่รูปลักษณ์ที่แท้จริงของเฟนริร์ยังคงถูกปกปิด.",
						"hindi": "एरा के संदेह विश्वास में बदल गए। फिर भी, फेनrir का असली रूप अभी भी परदे में था।"
					}
				}
			],
			"dialogue": [
				{
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "이 공간… 차원의 뒤틀림이 느껴져. 에너지가 엄청나.",
						"english": "This space... I feel a dimensional distortion. The energy is immense.",
						"japanese": "この空間…次元の歪みを感じる。エネルギーが膨大だ。",
						"chinese": "这个空间……我感觉到次元的扭曲。能量非常巨大。",
						"french": "Cet espace... je ressens une distorsion dimensionnelle. L'énergie est immense.",
						"spanish": "Este espacio... siento una distorsión dimensional. La energía es inmensa.",
						"vietnamese": "Không gian này... tôi cảm nhận được sự méo mó của chiều không gian. Năng lượng thật khủng khiếp.",
						"thai": "พื้นที่นี้... ฉันรู้สึกถึงการบิดเบี้ยวของมิติ พลังงานมหาศาลมาก.",
						"hindi": "यह जगह... मैं आयामी विकृति महसूस कर रहा हूँ। ऊर्जा बहुत विशाल है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "박사님, 위험합니다!",
						"english": "Doctor, it's dangerous!",
						"japanese": "博士、危険です！",
						"chinese": "博士，很危险！",
						"french": "Docteur, c'est dangereux !",
						"spanish": "¡Doctor, es peligroso!",
						"vietnamese": "Giáo sư, nguy hiểm lắm!",
						"thai": "คุณหมอ, อันตรายครับ!",
						"hindi": "डॉक्टर, यह खतरनाक है!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크르르릉… 감히… 침범하다니.",
						"english": "Grrr... How dare you... intrude.",
						"japanese": "クルルルン…よくも…侵入したな。",
						"chinese": "吼……竟敢……入侵。",
						"french": "Grrr... Comment osez-vous... envahir.",
						"spanish": "Grrr... Cómo osas... invadir.",
						"vietnamese": "Grừừừ... Dám... xâm phạm.",
						"thai": "ครืนๆ... กล้าดียังไง... บุกรุก.",
						"hindi": "गुर्राहट... इतनी हिम्मत... घुसपैठ करने की।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "eira",
					"content": {
						"korean": "저건… 물리적인 존재가 아니야. 조심해!",
						"english": "That's... not a physical entity. Be careful!",
						"japanese": "あれは…物理的な存在じゃない。気をつけろ！",
						"chinese": "那不是……物理上的存在。小心！",
						"french": "Ce n'est pas... une entité physique. Attention !",
						"spanish": "Eso no es... una entidad física. ¡Cuidado!",
						"vietnamese": "Đó không phải... một thực thể vật lý. Cẩn thận!",
						"thai": "นั่น... ไม่ใช่สิ่งมีชีวิตทางกายภาพ. ระวังตัว!",
						"hindi": "वह... भौतिक अस्तित्व नहीं है। सावधान रहो!"
					}
				}
			]
		}
	]
} as const;
