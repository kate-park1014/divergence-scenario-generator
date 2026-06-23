export const scenario_modern_syndicate_34_02 = {
	"scenario_id": "modern_syndicate_34_02",
	"order": 2,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"lin": {
			"id": "mon_d036a884-3dde-472c-9fe7-c4807643860f",
			"name": {
				"korean": "린",
				"english": "Lin",
				"japanese": "リン",
				"chinese": "琳",
				"french": "Lin",
				"spanish": "Lin",
				"vietnamese": "Lin",
				"thai": "ลิน",
				"hindi": "लिन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a095dd66-1857-4f44-68b0-2ece83006d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/05b02694-f1ed-4e4c-b7ca-fb5b74a48900/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"네트워크는 침묵했지만, 이상한 잔상들이 떠돌았다.",
			"린은 미지의 코드를 추적했고, 잊혀진 기억들이 깨어났다.",
			"오래된 광기가 현재를 잠식하고 있었다.",
			"현실의 경계가 흐려지고 있었다."
		],
		"english": [
			"The network was silent, but strange afterimages lingered.",
			"Rin traced an unknown code, and forgotten memories awakened.",
			"Ancient madness was consuming the present.",
			"The boundaries of reality were blurring."
		],
		"japanese": [
			"ネットワークは沈黙していたが、奇妙な残像が漂っていた。",
			"リンは未知のコードを追跡し、忘れ去られた記憶が目覚めた。",
			"古き狂気が現在を蝕んでいた。",
			"現実の境界線が曖昧になっていた。"
		],
		"chinese": [
			"网络一片寂静，但奇怪的残像挥之不去。",
			"琳追踪着未知代码，尘封的记忆苏醒了。",
			"古老的疯狂正在侵蚀当下。",
			"现实的界限正在模糊。"
		],
		"french": [
			"Le réseau était silencieux, mais d'étranges rémanences flottaient.",
			"Rin traqua un code inconnu, et des souvenirs oubliés s'éveillèrent.",
			"Une ancienne folie rongeait le présent.",
			"Les frontières de la réalité s'estompaient."
		],
		"spanish": [
			"La red estaba en silencio, pero extrañas imágenes residuales persistían.",
			"Rin rastreó un código desconocido, y recuerdos olvidados despertaron.",
			"Una antigua locura estaba consumiendo el presente.",
			"Los límites de la realidad se estaban desdibujando."
		],
		"vietnamese": [
			"Mạng lưới im lặng, nhưng những dư ảnh kỳ lạ vẫn lảng vảng.",
			"Rin truy tìm một đoạn mã bí ẩn, và những ký ức bị lãng quên đã thức tỉnh.",
			"Sự điên rồ cổ xưa đang gặm nhấm hiện tại.",
			"Ranh giới của thực tại đang mờ dần."
		],
		"thai": [
			"เครือข่ายเงียบสงบ แต่ภาพติดตาประหลาดลอยอยู่",
			"รินตามรอยโค้ดปริศนา และความทรงจำที่ถูกลืมก็ตื่นขึ้น",
			"ความบ้าคลั่งโบราณกำลังกลืนกินปัจจุบัน",
			"ขอบเขตของความเป็นจริงกำลังพร่าเลือน"
		],
		"hindi": [
			"नेटवर्क शांत था, लेकिन अजीब अवशेष तैर रहे थे।",
			"रिन ने एक अज्ञात कोड का पता लगाया, और भूली हुई यादें जाग उठीं।",
			"प्राचीन पागलपन वर्तमान को निगल रहा था।",
			"वास्तविकता की सीमाएँ धुंधली हो रही थीं।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "네트워크의 심층부. 불안정한 데이터 흐름이 감지된다.",
						"english": "Deep within the network. Unstable data flow detected.",
						"japanese": "ネットワークの深部。不安定なデータフローを感知。",
						"chinese": "网络深处。检测到不稳定的数据流。",
						"french": "Au plus profond du réseau. Flux de données instable détecté.",
						"spanish": "En lo profundo de la red. Flujo de datos inestable detectado.",
						"vietnamese": "Sâu trong mạng lưới. Phát hiện luồng dữ liệu không ổn định.",
						"thai": "ลึกเข้าไปในเครือข่าย ตรวจพบกระแสข้อมูลที่ไม่เสถียร",
						"hindi": "नेटवर्क की गहराई में। अस्थिर डेटा प्रवाह का पता चला।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "여기 뭔가 이상해.",
						"english": "Something's off here.",
						"japanese": "ここ、何かおかしい。",
						"chinese": "这里有点不对劲。",
						"french": "Quelque chose cloche ici.",
						"spanish": "Algo anda mal aquí.",
						"vietnamese": "Có gì đó không ổn ở đây.",
						"thai": "ที่นี่มีบางอย่างผิดปกติ",
						"hindi": "यहाँ कुछ गड़बड़ है।"
					},
					"emotion": "base"
				},
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "lin",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "다들 조심해요. 미지의 패턴이 발견됐어요.",
						"english": "Everyone be careful. An unknown pattern has been found.",
						"japanese": "みんな、気をつけて。未知のパターンが発見された。",
						"chinese": "大家小心。发现了一个未知模式。",
						"french": "Attention tout le monde. Un motif inconnu a été découvert.",
						"spanish": "Tened cuidado todos. Se ha encontrado un patrón desconocido.",
						"vietnamese": "Mọi người cẩn thận. Đã phát hiện một mẫu hình không xác định.",
						"thai": "ทุกคนระวัง พบรูปแบบที่ไม่รู้จักแล้ว",
						"hindi": "सब लोग सावधान रहें। एक अज्ञात पैटर्न पाया गया है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "lin"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "미지의 패턴?",
						"english": "Unknown pattern?",
						"japanese": "未知のパターン？",
						"chinese": "未知模式？",
						"french": "Motif inconnu ?",
						"spanish": "¿Patrón desconocido?",
						"vietnamese": "Mẫu hình không xác định?",
						"thai": "รูปแบบที่ไม่รู้จัก?",
						"hindi": "अज्ञात पैटर्न?"
					}
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "오래된 언어와 현대 코드가 뒤섞인… 암호들이에요.",
						"english": "Ciphers... a mix of ancient languages and modern code.",
						"japanese": "古い言語と現代のコードが混じり合った…暗号よ。",
						"chinese": "密码……古老语言与现代代码的混合。",
						"french": "Des chiffres... un mélange de langues anciennes et de code moderne.",
						"spanish": "Cifrados... una mezcla de idiomas antiguos y código moderno.",
						"vietnamese": "Những mật mã... pha trộn giữa ngôn ngữ cổ đại và mã hiện đại.",
						"thai": "รหัส... การผสมผสานของภาษาโบราณและโค้ดสมัยใหม่",
						"hindi": "सिफर... प्राचीन भाषाओं और आधुनिक कोड का मिश्रण।"
					},
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "lin"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "이 암호들… 특정 시공간적 패턴을 보여요.",
						"english": "These ciphers... they show a specific spatio-temporal pattern.",
						"japanese": "これらの暗号…特定の時空間的パターンを示している。",
						"chinese": "这些密码……它们显示出特定的时空模式。",
						"french": "Ces chiffres... ils montrent un motif spatio-temporel spécifique.",
						"spanish": "Estos cifrados... muestran un patrón espacio-temporal específico.",
						"vietnamese": "Những mật mã này... chúng cho thấy một mẫu hình không-thời gian cụ thể.",
						"thai": "รหัสเหล่านี้... พวกมันแสดงรูปแบบเชิงพื้นที่และเวลาที่เฉพาะเจาะจง",
						"hindi": "ये सिफर... एक विशिष्ट स्थानिक-लौकिक पैटर्न दिखाते हैं।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "시간을 거스르는 암호라니.",
						"english": "A time-defying cipher.",
						"japanese": "時間を遡る暗号だと。",
						"chinese": "逆转时间的密码。",
						"french": "Un code qui défie le temps.",
						"spanish": "Un código que desafía el tiempo.",
						"vietnamese": "Một mật mã nghịch thời gian.",
						"thai": "รหัสที่ทวนกระแสเวลา",
						"hindi": "समय को धता बताने वाला एक कोड।"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "마치 왜곡된 기억처럼… 현실을 침식하려 해요.",
						"english": "Like a distorted memory... it's trying to erode reality.",
						"japanese": "まるで歪んだ記憶のように…現実を侵食しようとしている。",
						"chinese": "就像扭曲的记忆…它试图侵蚀现实。",
						"french": "Comme un souvenir déformé... il tente d'éroder la réalité.",
						"spanish": "Como un recuerdo distorsionado... está intentando erosionar la realidad.",
						"vietnamese": "Giống như một ký ức méo mó… nó đang cố gắng ăn mòn thực tại.",
						"thai": "ราวกับความทรงจำที่บิดเบี้ยว... มันกำลังกัดกร่อนความเป็นจริง",
						"hindi": "जैसे कोई विकृत स्मृति हो... यह वास्तविकता को मिटाने की कोशिश कर रहा है।"
					},
					"type": "speech",
					"speaker": "lin"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…어쩐지 머리가 지끈거려.",
						"english": "...My head's throbbing for some reason.",
						"japanese": "…なんだか頭がズキズキする。",
						"chinese": "…不知为何，头好痛。",
						"french": "...D'une certaine manière, ma tête me fait mal.",
						"spanish": "...De alguna manera, me late la cabeza.",
						"vietnamese": "…Không hiểu sao, đầu tôi đau nhức.",
						"thai": "...ไม่รู้ทำไม หัวถึงปวดตุบๆ",
						"hindi": "...किसी तरह, मेरा सिर दर्द कर रहा है।"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "공간 곳곳에서 기괴하게 왜곡된 옛 재즈 음악 소리가 들려온다.",
						"english": "The sound of grotesquely distorted old jazz music can be heard throughout the space.",
						"japanese": "空間のあちこちから、奇怪に歪んだ古いジャズ音楽が聞こえてくる。",
						"chinese": "空间各处传来怪异扭曲的旧爵士乐声。",
						"french": "Le son d'une vieille musique de jazz grotesque et déformée résonne dans tout l'espace.",
						"spanish": "El sonido de música de jazz antigua grotescamente distorsionada se escucha por todo el espacio.",
						"vietnamese": "Tiếng nhạc jazz cũ bị bóp méo một cách kỳ quái vang vọng khắp không gian.",
						"thai": "ได้ยินเสียงเพลงแจ๊สเก่าที่บิดเบี้ยวอย่างประหลาดจากทั่วทุกมุมของพื้นที่",
						"hindi": "पूरे स्थान पर विकृत पुरानी जैज़ संगीत की आवाज़ सुनाई देती है।"
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "lin"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "더 깊이 분석했어요. 암호 속에서… 반복되는 문구들이.",
						"english": "I analyzed it more deeply. Inside the cipher... repetitive phrases.",
						"japanese": "もっと深く分析しました。暗号の中に…繰り返されるフレーズが。",
						"chinese": "我进行了更深入的分析。在密码中…有重复的短语。",
						"french": "J'ai analysé plus en profondeur. Dans le code... des phrases répétitives.",
						"spanish": "Lo analicé más profundamente. Dentro del cifrado... frases repetitivas.",
						"vietnamese": "Tôi đã phân tích sâu hơn. Trong mật mã… có những cụm từ lặp đi lặp lại.",
						"thai": "ฉันวิเคราะห์ลึกซึ้งยิ่งขึ้น ในรหัส... มีวลีที่ซ้ำกัน",
						"hindi": "मैंने इसका और गहराई से विश्लेषण किया। साइफर के भीतर... दोहराए जाने वाले वाक्यांश।"
					},
					"type": "speech",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "뭐라고?",
						"english": "What?",
						"japanese": "なんだって？",
						"chinese": "什么？",
						"french": "Quoi ?",
						"spanish": "¿Qué?",
						"vietnamese": "Cái gì?",
						"thai": "อะไรนะ?",
						"hindi": "क्या कहा?"
					},
					"emotion": "base"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "'나의 왕국', '영원한 거리'… 누군가의 망상 같아요.",
						"english": "'My Kingdom', 'Eternal Streets'... It seems like someone's delusion.",
						"japanese": "「私の王国」、「永遠の通り」…誰かの妄想のようだ。",
						"chinese": "“我的王国”，“永恒的街道”…这似乎是某人的妄想。",
						"french": "« Mon Royaume », « Rues Éternelles »... On dirait le délire de quelqu'un.",
						"spanish": "«Mi Reino», «Calles Eternas»... Parece la ilusión de alguien.",
						"vietnamese": "'Vương quốc của tôi', 'Những con phố vĩnh cửu'... Dường như là ảo tưởng của ai đó.",
						"thai": "'อาณาจักรของฉัน', 'ถนนนิรันดร์'... ดูเหมือนจะเป็นภาพหลอนของใครบางคน",
						"hindi": "'मेरा साम्राज्य', 'अनन्त गलियाँ'... यह किसी का भ्रम लगता है।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "왕국? 이 디지털 공간이?",
						"english": "Kingdom? This digital space?",
						"japanese": "王国？このデジタル空間が？",
						"chinese": "王国？这个数字空间吗？",
						"french": "Royaume ? Cet espace numérique ?",
						"spanish": "¿Reino? ¿Este espacio digital?",
						"vietnamese": "Vương quốc? Không gian kỹ thuật số này ư?",
						"thai": "อาณาจักร? พื้นที่ดิจิทัลนี้?",
						"hindi": "साम्राज्य? यह डिजिटल स्थान?"
					},
					"emotion": "base"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "네. 이건… 단순한 오류가 아니에요. 광적인 집착이에요.",
						"english": "Yes. This is... not just a simple error. It's an obsessive fixation.",
						"japanese": "ええ。これは…単純なエラーではありません。狂信的な執着です。",
						"chinese": "是的。这不是…一个简单的错误。这是一种疯狂的执念。",
						"french": "Oui. Ce n'est pas... une simple erreur. C'est une obsession fanatique.",
						"spanish": "Sí. Esto no es... un simple error. Es una fijación obsesiva.",
						"vietnamese": "Vâng. Đây không phải… một lỗi đơn giản. Đây là một sự ám ảnh điên cuồng.",
						"thai": "ใช่ นี่ไม่ใช่… แค่ข้อผิดพลาดง่ายๆ แต่มันคือความหลงใหลอย่างบ้าคลั่ง",
						"hindi": "हाँ। यह... सिर्फ एक साधारण त्रुटि नहीं है। यह एक जुनूनी मोह है।"
					}
				},
				{
					"content": {
						"korean": "알 수 없는 문구들이 탐험대의 정신을 갉아먹는다.",
						"english": "Unidentifiable phrases gnaw at the expedition team's minds.",
						"japanese": "不明な文言が探検隊の精神を蝕む。",
						"chinese": "无法辨识的短语侵蚀着探险队的精神。",
						"french": "Des phrases incompréhensibles rongent l'esprit de l'équipe d'expédition.",
						"spanish": "Frases indescifrables carcomen la mente del equipo de expedición.",
						"vietnamese": "Những cụm từ không xác định đang gặm nhấm tinh thần của đoàn thám hiểm.",
						"thai": "วลีที่ไม่สามารถระบุได้กัดกินจิตใจของทีมสำรวจ",
						"hindi": "अज्ञात वाक्यांश अभियान दल के दिमाग को कुतर रहे हैं।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "lin",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "여기부터는 데이터 왜곡이 심해져요. 현실 같지 않아…",
						"english": "Data distortion is severe from here. This doesn't feel real...",
						"japanese": "ここからはデータ歪曲がひどい。現実じゃないみたい…",
						"chinese": "从这里开始数据扭曲严重。这感觉不真实…",
						"french": "La distorsion des données est sévère à partir d'ici. Ça ne semble pas réel...",
						"spanish": "La distorsión de datos es severa desde aquí. Esto no se siente real...",
						"vietnamese": "Từ đây trở đi, dữ liệu bị méo mó nghiêm trọng. Nó không có thật...",
						"thai": "การบิดเบือนข้อมูลรุนแรงตั้งแต่ตรงนี้ มันไม่เหมือนจริงเลย...",
						"hindi": "यहां से डेटा विरूपण गंभीर है। यह वास्तविक नहीं लगता..."
					},
					"speaker": "lin",
					"type": "speech"
				},
				{
					"content": {
						"korean": "저기 건물이 흔들리는 것 같아. 착각인가?",
						"english": "That building seems to be shaking. Is it my imagination?",
						"japanese": "あそこの建物が揺れてるみたい。錯覚かな？",
						"chinese": "那栋建筑好像在晃动。是错觉吗？",
						"french": "Ce bâtiment semble trembler. Est-ce une illusion ?",
						"spanish": "Ese edificio parece estar temblando. ¿Es mi imaginación?",
						"vietnamese": "Tòa nhà kia dường như đang rung chuyển. Là ảo giác sao?",
						"thai": "ตึกนั่นดูเหมือนจะสั่น. ฉันคิดไปเองหรือเปล่า?",
						"hindi": "वह इमारत हिल रही है। क्या यह मेरा भ्रम है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "character_3",
					"content": {
						"korean": "이게 진짜인지, 환각인지… 모르겠어.",
						"english": "Is this real, or a hallucination... I don't know.",
						"japanese": "これが現実なのか、幻覚なのか…分からない。",
						"chinese": "这是真实还是幻觉…我不知道。",
						"french": "Est-ce réel, ou une hallucination… Je ne sais pas.",
						"spanish": "¿Es esto real o una alucinación? No lo sé.",
						"vietnamese": "Đây là thật hay ảo giác… Tôi không biết.",
						"thai": "นี่คือความจริงหรือภาพหลอน... ฉันไม่รู้.",
						"hindi": "यह असली है, या एक मतिभ्रम… मुझे नहीं पता।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "비정형 데이터들이 괴물의 형상을 이룬다. 탐험대를 노려본다.",
						"english": "Unstructured data forms grotesque shapes. It glares at the expedition team.",
						"japanese": "非定型データが怪物の姿を成す。探検隊を睨みつける。",
						"chinese": "非结构化数据形成怪物形态。它们盯着探险队。",
						"french": "Des données non structurées prennent des formes monstrueuses. Elles fixent l'équipe d'expédition.",
						"spanish": "Los datos no estructurados forman figuras monstruosas. Miran fijamente al equipo de expedición.",
						"vietnamese": "Dữ liệu phi cấu trúc hình thành hình dạng quái vật. Chúng trừng mắt nhìn đội thám hiểm.",
						"thai": "ข้อมูลที่ไม่มีโครงสร้างก่อตัวเป็นรูปร่างสัตว์ประหลาด. มันจ้องมองทีมสำรวจ.",
						"hindi": "असंरचित डेटा राक्षसी आकार लेता है। यह अभियान दल को घूरता है।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "놈이 나타났다!",
						"english": "It appeared!",
						"japanese": "やつが現れた！",
						"chinese": "它出现了！",
						"french": "Il est apparu !",
						"spanish": "¡Apareció!",
						"vietnamese": "Nó xuất hiện rồi!",
						"thai": "มันปรากฏตัวแล้ว!",
						"hindi": "वह आ गया!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "정체 모를 보스의 공격에 탐험대가 쓰러졌다. 데이터가 덮쳐온다.",
						"english": "The expedition team fell to an unknown boss's attack. Data overwhelms us.",
						"japanese": "正体不明のボスの攻撃により、探検隊は倒れた。データが押し寄せる。",
						"chinese": "探险队在不明首领的攻击下倒下了。数据汹涌而来。",
						"french": "L'équipe d'expédition est tombée sous l'attaque d'un boss inconnu. Les données nous submergent.",
						"spanish": "El equipo de expedición cayó ante el ataque de un jefe desconocido. Los datos nos abruman.",
						"vietnamese": "Đội thám hiểm đã ngã xuống dưới đòn tấn công của một boss không rõ danh tính. Dữ liệu đang tràn đến.",
						"thai": "ทีมสำรวจพ่ายแพ้ต่อการโจมตีของบอสที่ไม่ทราบชื่อ ข้อมูลกำลังถาโถมเข้ามา",
						"hindi": "अज्ञात बॉस के हमले से अभियान दल गिर गया। डेटा हमें घेर रहा है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "하찮은 존재들… 내 왕국의 일부가 되어라.",
						"english": "Insignificant beings... become part of my kingdom.",
						"japanese": "取るに足らない者ども…我が王国の一部となれ。",
						"chinese": "渺小的存在们…成为我王国的一部分吧。",
						"french": "Êtres insignifiants... devenez une partie de mon royaume.",
						"spanish": "Seres insignificantes... volved parte de mi reino.",
						"vietnamese": "Những kẻ hèn mọn... hãy trở thành một phần vương quốc của ta.",
						"thai": "สิ่งมีชีวิตอันไร้ค่า... จงมาเป็นส่วนหนึ่งของอาณาจักรข้าซะ",
						"hindi": "तुच्छ प्राणियों... मेरे साम्राज्य का हिस्सा बनो।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "크윽… 아직… 끝나지 않았어!",
						"english": "Ugh... It's not... over yet!",
						"japanese": "くっ…まだ…終わってない！",
						"chinese": "呃…还没…结束！",
						"french": "Ugh... Ce n'est pas... encore fini !",
						"spanish": "Ugh... ¡Aún... no ha terminado!",
						"vietnamese": "Khụ... Vẫn chưa... kết thúc!",
						"thai": "อึก... ยัง... ไม่จบ!",
						"hindi": "उफ़... यह अभी... खत्म नहीं हुआ है!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "다시 도전해라… 이 미궁에서 영원히 헤매이거라!",
						"english": "Challenge again... Wander this labyrinth forever!",
						"japanese": "再び挑め…この迷宮で永遠にさまよい続けろ！",
						"chinese": "再来挑战吧…永远在这迷宫中徘徊吧！",
						"french": "Relevez le défi... Errez dans ce labyrinthe pour l'éternité !",
						"spanish": "Vuelve a intentarlo... ¡Deambula por este laberinto para siempre!",
						"vietnamese": "Hãy thử thách lại... Hãy mãi lang thang trong mê cung này!",
						"thai": "กลับมาท้าทายอีกครั้ง... จงหลงทางอยู่ในเขาวงกตนี้ตลอดไป!",
						"hindi": "फिर से चुनौती दो... इस भूलभुलैया में हमेशा के लिए भटकते रहो!"
					},
					"emotion": "base"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "내 왕국에 온 것을 환영한다… 영원히 갇힐 것이다.",
						"english": "Welcome to my kingdom... You will be trapped forever.",
						"japanese": "我が王国へようこそ… 永遠に閉じ込められるだろう。",
						"chinese": "欢迎来到我的王国… 你将永远被困住。",
						"french": "Bienvenue dans mon royaume... Tu seras piégé pour toujours.",
						"spanish": "Bienvenido a mi reino... Estarás atrapado para siempre.",
						"vietnamese": "Chào mừng đến vương quốc của ta… Ngươi sẽ bị giam cầm vĩnh viễn.",
						"thai": "ยินดีต้อนรับสู่อาณาจักรของข้า... เจ้าจะต้องติดอยู่ในนี้ตลอดไป.",
						"hindi": "मेरे साम्राज्य में तुम्हारा स्वागत है… तुम हमेशा के लिए फंस जाओगे।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "헛소리 마! 너의 광기를 끝내주겠어!",
						"english": "Enough nonsense! I'll put an end to your madness!",
						"japanese": "くだらない！お前の狂気を終わらせてやる！",
						"chinese": "别胡说！我会终结你的疯狂！",
						"french": "Assez de bêtises ! Je vais mettre fin à ta folie !",
						"spanish": "¡Basta de tonterías! ¡Terminaré con tu locura!",
						"vietnamese": "Đừng nói nhảm! Ta sẽ chấm dứt sự điên rồ của ngươi!",
						"thai": "หยุดเหลวไหล! ฉันจะหยุดความบ้าคลั่งของแกเอง!",
						"hindi": "बकवास बंद करो! मैं तुम्हारे पागलपन का अंत करूंगा!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "내 기억은 왜곡되지 않아… 오직 진실만이 존재할 뿐.",
						"english": "My memories aren't distorted... Only truth exists.",
						"japanese": "私の記憶は歪んでいない…真実だけが存在する。",
						"chinese": "我的记忆没有扭曲…只有真相存在。",
						"french": "Mes souvenirs ne sont pas déformés... Seule la vérité existe.",
						"spanish": "Mis recuerdos no están distorsionados... Solo la verdad existe.",
						"vietnamese": "Ký ức của ta không bị bóp méo… Chỉ có sự thật tồn tại.",
						"thai": "ความทรงจำของฉันไม่บิดเบือน... มีแต่ความจริงเท่านั้น.",
						"hindi": "मेरी यादें विकृत नहीं हैं… केवल सच मौजूद है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_4",
					"content": {
						"korean": "비틀린 현실일 뿐이야!",
						"english": "It's just a twisted reality!",
						"japanese": "ただの歪んだ現実だ！",
						"chinese": "这只是一个扭曲的现实！",
						"french": "C'est juste une réalité tordue !",
						"spanish": "¡Es solo una realidad retorcida!",
						"vietnamese": "Đó chỉ là một thực tại méo mó!",
						"thai": "มันก็แค่ความเป็นจริงที่บิดเบือน!",
						"hindi": "यह सिर्फ एक मुड़ी हुई वास्तविकता है!"
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "정체 모를 보스가 쓰러졌다. 왜곡된 데이터가 흩어진다.",
						"english": "The unknown boss has fallen. Distorted data scatters.",
						"japanese": "正体不明のボスが倒れた。歪んだデータが散らばる。",
						"chinese": "身份不明的Boss倒下了。扭曲的数据散落开来。",
						"french": "Le boss inconnu est tombé. Les données déformées se dispersent.",
						"spanish": "El jefe desconocido ha caído. Los datos distorsionados se dispersan.",
						"vietnamese": "Ông trùm không rõ danh tính đã ngã xuống. Dữ liệu bị bóp méo phân tán.",
						"thai": "บอสปริศนาล้มลงแล้ว. ข้อมูลที่บิดเบือนกระจัดกระจาย.",
						"hindi": "अज्ञात बॉस गिर गया है। विकृत डेटा बिखर जाता है।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크크… 사라지지 않아… 나의 왕국은… 영원할 것이다…",
						"english": "Heh heh... I won't disappear... My kingdom... will be eternal...",
						"japanese": "クク…消えない…我が王国は…永遠だ…",
						"chinese": "呵呵…不会消失…我的王国…将永存…",
						"french": "Hé hé… Je ne disparaîtrai pas… Mon royaume… sera éternel…",
						"spanish": "Je je... No desapareceré... Mi reino... será eterno...",
						"vietnamese": "Khà khà... Ta sẽ không biến mất... Vương quốc của ta... sẽ vĩnh hằng...",
						"thai": "คิกๆ... ไม่หายไปหรอก... อาณาจักรของข้า... จะคงอยู่ชั่วนิรันดร์...",
						"hindi": "हँ हँ... मैं गायब नहीं होऊंगा... मेरा साम्राज्य... शाश्वत रहेगा..."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…사라졌지만… 뭔가 찝찝해.",
						"english": "...He's gone... but something still feels off.",
						"japanese": "…消えたが…何か釈然としない。",
						"chinese": "…他消失了…但总觉得有些不对劲。",
						"french": "...Il a disparu... mais quelque chose cloche encore.",
						"spanish": "...Desapareció... pero algo sigue sin estar bien.",
						"vietnamese": "...Hắn đã biến mất... nhưng vẫn thấy bất an.",
						"thai": "...หายไปแล้ว... แต่ก็ยังรู้สึกไม่สบายใจ",
						"hindi": "...वह चला गया... पर कुछ तो गड़बड़ है।"
					}
				},
				{
					"speaker": "lin",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "보스는 사라졌지만… 이 네트워크의 근원은 그대로예요.",
						"english": "The boss is gone... but the source of this network remains.",
						"japanese": "ボスは消えたが…このネットワークの根源はそのままです。",
						"chinese": "首领消失了…但这个网络的根源还在。",
						"french": "Le boss a disparu... mais la source de ce réseau demeure.",
						"spanish": "El jefe ha desaparecido... pero la fuente de esta red permanece.",
						"vietnamese": "Boss đã biến mất... nhưng nguồn gốc của mạng lưới này vẫn còn.",
						"thai": "บอสหายไปแล้ว... แต่ต้นกำเนิดของเครือข่ายนี้ยังคงอยู่",
						"hindi": "बॉस चला गया है... पर इस नेटवर्क का स्रोत अभी भी है।"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "승리했지만, 불안감은 더욱 커졌다. 광기는 아직 끝나지 않았다.",
						"english": "We won, but the unease grew. The madness isn't over yet.",
						"japanese": "勝利したが、不安感はさらに増した。狂気はまだ終わっていない。",
						"chinese": "虽然胜利了，但不安感却更甚了。疯狂尚未结束。",
						"french": "Nous avons gagné, mais l'inquiétude grandit. La folie n'est pas encore terminée.",
						"spanish": "Ganamos, pero la inquietud creció. La locura aún no ha terminado.",
						"vietnamese": "Đã thắng, nhưng sự bất an lại càng tăng. Cơn điên vẫn chưa kết thúc.",
						"thai": "แม้จะชนะ แต่ความไม่สบายใจก็เพิ่มขึ้น ความบ้าคลั่งยังไม่จบลง",
						"hindi": "हम जीत गए, पर बेचैनी बढ़ गई। पागलपन अभी खत्म नहीं हुआ है।"
					}
				}
			]
		}
	]
} as const;
