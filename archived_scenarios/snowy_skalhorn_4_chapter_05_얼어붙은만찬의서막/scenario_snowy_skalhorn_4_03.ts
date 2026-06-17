export const scenario_snowy_skalhorn_4_03 = {
	"scenario_id": "snowy_skalhorn_4_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"anuk": {
			"id": "mon_8736797d-779a-4748-8633-d15c1eaf9be7",
			"name": {
				"korean": "아눅",
				"english": "Anuk",
				"japanese": "アヌーク",
				"chinese": "阿努克",
				"french": "Anuk",
				"spanish": "Anuk",
				"vietnamese": "Anuk",
				"thai": "อนุก",
				"hindi": "अनुक"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/19485274-e873-45c8-5043-f4ff65aa2a00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9a79ecfd-8cc6-4461-3790-763822522500/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"고원의 한기는 더욱 깊어졌다. 단순한 추위가 아니었다.",
			"오래된 전설이 속삭이는 곳.",
			"잠자는 영혼들이 깨어나, 금지된 계약의 그림자가 드리운다.",
			"진실을 외면하는 자, 대가를 치를 것이다."
		],
		"english": [
			"The chill of the plateau deepened. It was more than mere cold.",
			"Where ancient legends whisper.",
			"Sleeping souls awaken, and the shadow of a forbidden pact looms.",
			"Those who ignore the truth shall pay the price."
		],
		"japanese": [
			"高原の寒気はさらに深まった。それはただの寒さではなかった。",
			"古き伝説が囁く場所。",
			"眠る魂が目覚め、禁じられた契約の影が迫る。",
			"真実を無視する者、代償を払うだろう。"
		],
		"chinese": [
			"高原的寒意更深了。那不仅仅是普通的寒冷。",
			"古老传说低语之地。",
			"沉睡的灵魂苏醒，禁忌契约的阴影笼罩。",
			"漠视真相者，必将付出代价。"
		],
		"french": [
			"Le froid du plateau s'intensifia. Ce n'était pas un simple frisson.",
			"Là où les légendes anciennes murmurent.",
			"Les âmes endormies s'éveillent, et l'ombre d'un pacte interdit plane.",
			"Ceux qui ignorent la vérité en paieront le prix."
		],
		"spanish": [
			"El frío de la meseta se hizo más profundo. No era un simple frío.",
			"Donde las leyendas antiguas susurran.",
			"Almas dormidas despiertan, y la sombra de un pacto prohibido se cierne.",
			"Quienes ignoren la verdad pagarán el precio."
		],
		"vietnamese": [
			"Cái lạnh trên cao nguyên càng thêm buốt giá. Nó không chỉ là sự lạnh lẽo đơn thuần.",
			"Nơi những truyền thuyết cổ xưa thì thầm.",
			"Những linh hồn đang ngủ say thức tỉnh, bóng dáng của một giao ước cấm kỵ bao trùm.",
			"Kẻ nào chối bỏ sự thật sẽ phải trả giá."
		],
		"thai": [
			"ความหนาวเย็นของที่ราบสูงยิ่งทวีความรุนแรงขึ้น มันไม่ใช่แค่ความหนาวธรรมดา",
			"ที่ซึ่งตำนานโบราณกระซิบกระซาบ",
			"วิญญาณที่หลับใหลตื่นขึ้น และเงาแห่งพันธสัญญาต้องห้ามคืบคลาน",
			"ผู้ที่เมินเฉยต่อความจริงจะต้องชดใช้"
		],
		"hindi": [
			"पठार की ठंड और गहरी होती गई। यह सिर्फ़ ठंड नहीं थी।",
			"जहाँ पुरानी कथाएँ फुसफुसाती हैं।",
			"सोई हुई आत्माएँ जागती हैं, और एक वर्जित अनुबंध की छाया मंडराती है।",
			"जो सच से मुँह मोड़ेंगे, उन्हें कीमत चुकानी पड़ेगी।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "스칼혼 주변으로 부자연스러운 한기가 감돌았다.",
						"english": "An unnatural chill hung around Skalhorn.",
						"japanese": "スカルホーンの周りに不自然な寒気が漂っていた。",
						"chinese": "斯卡尔霍恩周围弥漫着一股不自然的寒意。",
						"french": "Un froid étrange planait autour de Skalhorn.",
						"spanish": "Un frío antinatural rodeaba Skalhorn.",
						"vietnamese": "Một luồng khí lạnh bất thường bao trùm quanh Skalhorn.",
						"thai": "ความหนาวเย็นที่ไม่เป็นธรรมชาติปกคลุมอยู่รอบๆ สคาลฮอร์น",
						"hindi": "स्कल्हॉर्न के चारों ओर एक अप्राकृतिक ठंडक थी।"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "anuk",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "점점 더 심해지는군. 이건 평범한 추위가 아니야.",
						"english": "It's getting worse. This isn't normal cold.",
						"japanese": "ますますひどくなる。これは普通の寒さではない。",
						"chinese": "越来越严重了。这不是普通的寒冷。",
						"french": "Ça empire. Ce n'est pas un froid ordinaire.",
						"spanish": "Está empeorando. Esto no es un frío normal.",
						"vietnamese": "Càng ngày càng tệ. Đây không phải là cái lạnh bình thường.",
						"thai": "มันแย่ลงเรื่อยๆ นี่ไม่ใช่ความหนาวเย็นธรรมดา",
						"hindi": "यह और बुरा होता जा रहा है। यह कोई साधारण ठंड नहीं है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "장로님. 뭘 아시는 겁니까?",
						"english": "Elder. What do you know?",
						"japanese": "長老様。何をご存知なのですか？",
						"chinese": "长老。您知道些什么？",
						"french": "Ancien. Que savez-vous ?",
						"spanish": "¿Anciano. Qué sabes?",
						"vietnamese": "Trưởng lão. Ngài biết gì?",
						"thai": "ท่านผู้อาวุโส ท่านรู้อะไร?",
						"hindi": "बुज़ुर्ग। आप क्या जानते हैं?"
					}
				},
				{
					"content": {
						"korean": "잠자는 영혼들이 깨어나고 있어. 스칼혼이 그들의 안식을 방해한다.",
						"english": "Sleeping souls are awakening. Skalhorn disturbs their rest.",
						"japanese": "眠る魂たちが目覚めている。スカルホーンが彼らの安息を妨げている。",
						"chinese": "沉睡的灵魂正在苏醒。斯卡尔霍恩打扰了他们的安宁。",
						"french": "Les âmes endormies s'éveillent. Skalhorn perturbe leur repos.",
						"spanish": "Las almas dormidas están despertando. Skalhorn perturba su descanso.",
						"vietnamese": "Những linh hồn đang ngủ say đang thức tỉnh. Skalhorn đang quấy rầy sự yên nghỉ của họ.",
						"thai": "วิญญาณที่หลับใหลกำลังตื่นขึ้น สคาลฮอร์นกำลังรบกวนการพักผ่อนของพวกเขา",
						"hindi": "सोई हुई आत्माएँ जाग रही हैं। स्कल्हॉर्न उनकी शांति भंग कर रहा है।"
					},
					"type": "speech",
					"speaker": "anuk",
					"emotion": "sad"
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
					"duration_ms": 500,
					"type": "direction",
					"speaker": "anuk"
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "오래전… 금지된 계약이 있었다.",
						"english": "Long ago... there was a forbidden pact.",
						"japanese": "遠い昔… 禁じられた契約があった。",
						"chinese": "很久以前……有一个禁忌的契约。",
						"french": "Il y a longtemps... il y eut un pacte interdit.",
						"spanish": "Hace mucho tiempo... hubo un pacto prohibido.",
						"vietnamese": "Rất lâu về trước... đã có một giao ước cấm kỵ.",
						"thai": "นานมาแล้ว... มีพันธสัญญาต้องห้าม",
						"hindi": "बहुत पहले... एक वर्जित अनुबंध था।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "금지된 계약이요?",
						"english": "A forbidden pact?",
						"japanese": "禁じられた契約ですか？",
						"chinese": "禁忌的契约？",
						"french": "Un pacte interdit ?",
						"spanish": "¿Un pacto prohibido?",
						"vietnamese": "Một giao ước cấm kỵ?",
						"thai": "พันธสัญญาต้องห้ามหรือ?",
						"hindi": "एक वर्जित अनुबंध?"
					}
				},
				{
					"speaker": "anuk",
					"content": {
						"korean": "어둠의 힘을 빌려 스칼혼에 묶으려던 끔찍한 맹세였지.",
						"english": "A terrible oath, bound to Skalhorn with the power of darkness.",
						"japanese": "闇の力を借りてスカルホーンに縛り付けようとした、恐ろしい誓いだったな。",
						"chinese": "那是一个可怕的誓言，借黑暗之力束缚于斯卡尔霍恩。",
						"french": "Un terrible serment, lié à Skalhorn par le pouvoir des ténèbres.",
						"spanish": "Un terrible juramento, atado a Skalhorn con el poder de la oscuridad.",
						"vietnamese": "Một lời thề khủng khiếp, trói buộc Skalhorn bằng sức mạnh bóng tối.",
						"thai": "คำสาบานอันน่าสะพรึงกลัวที่ผูกมัดกับสคัลฮอร์นด้วยพลังแห่งความมืด",
						"hindi": "अंधेरे की शक्ति से स्केलनॉर्न से बंधी एक भयानक शपथ थी।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그 대가는 파멸이었다.",
						"english": "The price was ruin.",
						"japanese": "その代償は破滅だった。",
						"chinese": "代价是毁灭。",
						"french": "Le prix en fut la ruine.",
						"spanish": "El precio fue la ruina.",
						"vietnamese": "Cái giá phải trả là sự hủy diệt.",
						"thai": "ผลตอบแทนคือความพินาศ",
						"hindi": "उसका मूल्य विनाश था।"
					},
					"speaker": "anuk",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "설마… 지금 이 현상이 그 계약 때문입니까?",
						"english": "Could it be… this phenomenon is because of that contract?",
						"japanese": "まさか… この現象がその契約のせいですか？",
						"chinese": "难道……现在的这个现象是那个契约造成的？",
						"french": "Serait-ce… que ce phénomène est dû à ce contrat ?",
						"spanish": "¿Será posible… que este fenómeno sea por ese contrato?",
						"vietnamese": "Lẽ nào… hiện tượng này là do khế ước đó?",
						"thai": "ไม่นะ… ปรากฏการณ์นี้เป็นเพราะสัญญานั้นหรือเปล่า?",
						"hindi": "कहीं… यह घटना उस अनुबंध के कारण तो नहीं?"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "anuk"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그 계약은 영혼을 타락시키고, 이 땅을 저주했다.",
						"english": "That contract corrupted souls and cursed this land.",
						"japanese": "その契約は魂を堕落させ、この地を呪った。",
						"chinese": "那个契约腐蚀了灵魂，诅咒了这片土地。",
						"french": "Ce contrat a corrompu les âmes et maudit cette terre.",
						"spanish": "Ese contrato corrompió almas y maldijo esta tierra.",
						"vietnamese": "Khế ước đó đã làm đồi bại linh hồn và nguyền rủa vùng đất này.",
						"thai": "สัญญานั้นได้ทำให้วิญญาณแปดเปื้อนและสาปแช่งดินแดนนี้",
						"hindi": "उस अनुबंध ने आत्माओं को भ्रष्ट किया और इस भूमि को शाप दिया।"
					},
					"speaker": "anuk"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그래서 이 추위가…?",
						"english": "So this cold…?",
						"japanese": "だからこの寒さが…？",
						"chinese": "所以这股寒冷是……？",
						"french": "Alors ce froid…?",
						"spanish": "¿Entonces este frío…?",
						"vietnamese": "Vậy nên cái lạnh này…?",
						"thai": "ดังนั้นความหนาวนี้…?",
						"hindi": "तो यह ठंड…?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "anuk",
					"content": {
						"korean": "영혼들의 고통이 얼어붙은 분노가 되어 나타나는 거야.",
						"english": "The suffering of souls manifests as frozen rage.",
						"japanese": "魂の苦痛が凍てついた怒りとなって現れているんだ。",
						"chinese": "灵魂的痛苦化作了冰冷的愤怒显现出来。",
						"french": "La souffrance des âmes se manifeste en une rage gelée.",
						"spanish": "El sufrimiento de las almas se manifiesta como una furia helada.",
						"vietnamese": "Nỗi đau của các linh hồn hiện ra thành cơn thịnh nộ đóng băng.",
						"thai": "ความทุกข์ทรมานของวิญญาณปรากฏออกมาเป็นความโกรธเกรี้ยวที่เยือกแข็ง",
						"hindi": "आत्माओं का दर्द जमी हुई क्रोध बनकर सामने आ रहा है।"
					},
					"type": "speech"
				},
				{
					"speaker": "anuk",
					"content": {
						"korean": "스칼혼을 통해 누군가 그 힘을 깨우려 한다.",
						"english": "Someone is trying to awaken that power through Skalhorn.",
						"japanese": "スカルホーンを通じて、誰かがその力を目覚めさせようとしている。",
						"chinese": "有人正试图通过斯卡尔霍恩唤醒那股力量。",
						"french": "Quelqu'un essaie d'éveiller ce pouvoir à travers Skalhorn.",
						"spanish": "Alguien intenta despertar ese poder a través de Skalhorn.",
						"vietnamese": "Có kẻ đang cố gắng đánh thức sức mạnh đó thông qua Skalhorn.",
						"thai": "มีใครบางคนกำลังพยายามปลุกพลังนั้นผ่านทางสคัลฮอร์น",
						"hindi": "स्केलनॉर्न के माध्यम से कोई उस शक्ति को जगाने की कोशिश कर रहा है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…대체 누가?",
						"english": "…But who?",
						"japanese": "…一体誰が？",
						"chinese": "……究竟是谁？",
						"french": "…Mais qui donc ?",
						"spanish": "¿…Pero quién?",
						"vietnamese": "…Rốt cuộc là ai?",
						"thai": "…แล้วใครกันล่ะ?",
						"hindi": "…लेकिन कौन?"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "anuk",
					"type": "direction"
				},
				{
					"content": {
						"korean": "더 이상 가면 안 돼! 그곳엔 금지된 존재가 기다리고 있다.",
						"english": "Don't go any further! A forbidden being awaits there.",
						"japanese": "これ以上行ってはならない！そこには禁断の存在が待っている。",
						"chinese": "不能再往前走了！那里有被禁止的存在在等着你。",
						"french": "N'allez pas plus loin ! Un être interdit vous attend là-bas.",
						"spanish": "¡No vayas más lejos! Un ser prohibido te espera allí.",
						"vietnamese": "Không thể đi xa hơn nữa! Một thực thể bị cấm đang chờ đợi ở đó.",
						"thai": "ห้ามไปไกลกว่านี้! มีสิ่งต้องห้ามรออยู่ที่นั่น",
						"hindi": "और आगे मत जाओ! वहाँ एक निषिद्ध प्राणी इंतज़ार कर रहा है।"
					},
					"type": "speech",
					"speaker": "anuk",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "하지만 멈출 수 없어요.",
						"english": "But I can't stop.",
						"japanese": "しかし、止まることはできません。",
						"chinese": "但是我无法停下。",
						"french": "Mais je ne peux pas m'arrêter.",
						"spanish": "Pero no puedo detenerme.",
						"vietnamese": "Nhưng tôi không thể dừng lại.",
						"thai": "แต่ฉันหยุดไม่ได้",
						"hindi": "लेकिन मैं रुक नहीं सकता।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "돌이킬 수 없는 대가를 치르게 될 거야.",
						"english": "You will pay an irreversible price.",
						"japanese": "取り返しのつかない代償を払うことになる。",
						"chinese": "你将付出无法挽回的代价。",
						"french": "Tu paieras un prix irréversible.",
						"spanish": "Pagarás un precio irreversible.",
						"vietnamese": "Ngươi sẽ phải trả một cái giá không thể vãn hồi.",
						"thai": "เจ้าจะต้องชดใช้ในสิ่งที่ไม่สามารถแก้ไขได้",
						"hindi": "तुम्हें एक अपरिवर्तनीय कीमत चुकानी होगी।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "알아요. 그래도 가야만 합니다.",
						"english": "I know. But I must go.",
						"japanese": "分かっています。それでも行かねばなりません。",
						"chinese": "我知道。但我必须去。",
						"french": "Je sais. Mais je dois y aller.",
						"spanish": "Lo sé. Pero debo ir.",
						"vietnamese": "Ta biết. Nhưng ta vẫn phải đi.",
						"thai": "ข้ารู้ แต่ข้าต้องไป",
						"hindi": "मुझे पता है। फिर भी मुझे जाना होगा।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "끔찍한 한기가 진원지. 거대한 그림자가 나타났다.",
						"english": "A terrible chill emanates from the source. A colossal shadow appeared.",
						"japanese": "恐ろしい冷気が震源地から。巨大な影が現れた。",
						"chinese": "恐怖的寒气从源头传来。一个巨大的影子出现了。",
						"french": "Un froid terrible émane de la source. Une ombre colossale est apparue.",
						"spanish": "Un frío terrible emana del origen. Una sombra colosal apareció.",
						"vietnamese": "Một luồng hàn khí kinh hoàng tỏa ra từ tâm điểm. Một cái bóng khổng lồ xuất hiện.",
						"thai": "ความหนาวเย็นอันน่าสะพรึงกลัวคือแหล่งกำเนิด เงาขนาดมหึมาปรากฏขึ้น",
						"hindi": "एक भयानक ठंड का स्रोत। एक विशाल छाया प्रकट हुई।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어리석은 필멸자들이여… 감히 이곳까지 오다니.",
						"english": "Foolish mortals... How dare you come this far.",
						"japanese": "愚かなる定命の者たちよ…よくもここまで来たな。",
						"chinese": "愚蠢的凡人啊……竟敢来到此地。",
						"french": "Mortels insensés... Comment osez-vous venir jusqu'ici.",
						"spanish": "Mortales insensatos... ¿Cómo osas llegar hasta aquí?",
						"vietnamese": "Hỡi những kẻ phàm trần ngu ngốc... Dám bén mảng đến tận đây.",
						"thai": "เหล่ามนุษย์ผู้โง่เขลา... กล้าดียังไงมาถึงที่นี่",
						"hindi": "मूर्ख नश्वर प्राणी... तुम्हारी हिम्मत कैसे हुई यहां तक आने की।"
					}
				},
				{
					"content": {
						"korean": "네가 그 계약의 수호자냐? 당장 그만둬!",
						"english": "Are you the guardian of that contract? Stop at once!",
						"japanese": "お前がその契約の守護者か？すぐにやめろ！",
						"chinese": "你是那个契约的守护者吗？立刻住手！",
						"french": "Es-tu le gardien de ce contrat ? Arrête immédiatement !",
						"spanish": "¿Eres el guardián de ese contrato? ¡Detente ahora mismo!",
						"vietnamese": "Ngươi là kẻ bảo hộ khế ước đó sao? Dừng lại ngay!",
						"thai": "เจ้าคือผู้พิทักษ์ของสัญญานั้นหรือ? หยุดเดี๋ยวนี้!",
						"hindi": "क्या तुम उस अनुबंध के संरक्षक हो? तुरंत रुक जाओ!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "나는 계약 그 자체다. 너희는 그저 방해물일 뿐.",
						"english": "I am the contract itself. You are merely obstacles.",
						"japanese": "私が契約そのものだ。お前たちはただの邪魔物に過ぎない。",
						"chinese": "我就是契约本身。你们不过是阻碍。",
						"french": "Je suis le contrat lui-même. Vous n'êtes que des obstacles.",
						"spanish": "Yo soy el contrato mismo. Vosotros sois meros obstáculos.",
						"vietnamese": "Ta chính là khế ước. Các ngươi chỉ là những kẻ cản đường.",
						"thai": "ข้าคือสัญญาเอง พวกเจ้าเป็นเพียงสิ่งกีดขวาง",
						"hindi": "मैं स्वयं अनुबंध हूँ। तुम बस बाधाएं हो।"
					},
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"content": {
						"korean": "크윽… 이것으로 끝이라 생각하나…?",
						"english": "Ugh... Do you think this is the end...?",
						"japanese": "ぐっ…これで終わりだとでも思うのか…？",
						"chinese": "呃……你以为这就结束了吗……？",
						"french": "Ugh... Tu crois que c'est la fin...?",
						"spanish": "¿Crees que esto es el fin...?",
						"vietnamese": "Ư... Ngươi nghĩ thế là hết sao...?",
						"thai": "อึก... เจ้าคิดว่านี่คือจุดจบแล้วหรือ...?",
						"hindi": "उफ़... क्या तुम्हें लगता है कि यह अंत है...?"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "진정한 공포는 이제 시작될 뿐… {random_boss}의 계약은 사라지지 않아…!",
						"english": "The true horror is just beginning... The contract of {random_boss} will not vanish...!",
						"japanese": "真の恐怖は今から始まるだけ…{random_boss}の契約は消えない…！",
						"chinese": "真正的恐惧才刚刚开始……{random_boss}的契约不会消失……！",
						"french": "La vraie horreur ne fait que commencer... Le contrat de {random_boss} ne disparaîtra pas...!",
						"spanish": "El verdadero horror apenas comienza... ¡El contrato de {random_boss} no desaparecerá!",
						"vietnamese": "Nỗi kinh hoàng thật sự chỉ mới bắt đầu... Khế ước của {random_boss} sẽ không biến mất...!",
						"thai": "ความหวาดกลัวที่แท้จริงเพิ่งจะเริ่มต้นขึ้น... สัญญาของ {random_boss} จะไม่หายไป...!",
						"hindi": "असली डर तो अभी शुरू हो रहा है... {random_boss} का अनुबंध गायब नहीं होगा...!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…아직도 끝이 아니라고?",
						"english": "...It's still not over?",
						"japanese": "…まだ終わりじゃないのか？",
						"chinese": "……还没结束吗？",
						"french": "...Ce n'est pas encore fini ?",
						"spanish": "...¿Todavía no ha terminado?",
						"vietnamese": "...Vẫn chưa kết thúc sao?",
						"thai": "...ยังไม่จบอีกหรือ?",
						"hindi": "...क्या अभी तक खत्म नहीं हुआ?"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "anuk",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "방심하지 마라. 그들은 계약을 통해 영원히 존재할 수 있다.",
						"english": "Don't let your guard down. They can exist forever through the contract.",
						"japanese": "油断するな。彼らは契約を通じて永遠に存在できる。",
						"chinese": "不要放松警惕。他们可以通过契约永远存在。",
						"french": "Ne baisse pas ta garde. Ils peuvent exister éternellement grâce au contrat.",
						"spanish": "No bajes la guardia. Ellos pueden existir para siempre a través del contrato.",
						"vietnamese": "Đừng lơ là. Chúng có thể tồn tại vĩnh viễn thông qua khế ước.",
						"thai": "อย่าประมาท พวกมันสามารถมีอยู่ตลอดไปได้ด้วยสัญญา",
						"hindi": "लापरवाह मत बनो। वे अनुबंध के माध्यम से हमेशा के लिए अस्तित्व में रह सकते हैं।"
					},
					"type": "speech",
					"speaker": "anuk"
				},
				{
					"content": {
						"korean": "잠시 멈춘 한기. 그러나 더 깊은 곳에서 불길한 웅얼거림이 들려왔다.",
						"english": "The chilling cold momentarily ceased. Yet, an ominous murmur echoed from deeper within.",
						"japanese": "凍えるような寒さが一時止んだ。だが、さらに奥底から不吉な呟きが聞こえてきた。",
						"chinese": "寒气暂歇。然而，更深处传来不祥的低语。",
						"french": "Le froid glacial cessa un instant. Mais un murmure sinistre résonna des profondeurs.",
						"spanish": "El frío gélido cesó un momento. Sin embargo, un murmullo siniestro resonó desde lo más profundo.",
						"vietnamese": "Cái lạnh tê tái tạm ngưng. Nhưng từ sâu thẳm hơn, một tiếng lầm bầm đầy điềm gở vọng lại.",
						"thai": "ความหนาวเย็นที่หยุดชะงักชั่วขณะ แต่เสียงพึมพำที่น่ากลัวดังมาจากส่วนลึกกว่า",
						"hindi": "क्षण भर के लिए ठंडी हवा रुक गई। लेकिन और भी गहराई से एक अशुभ फुसफुसाहट सुनाई दी।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "하찮은 존재들이여. 감히 나에게 대적하려 했는가.",
						"english": "Insignificant beings. Did you dare to defy me?",
						"japanese": "愚かな者たちよ。よくも私に刃向かおうとしたな。",
						"chinese": "卑微的蝼蚁。竟敢与我为敌？",
						"french": "Créatures insignifiantes. Osiez-vous me défier ?",
						"spanish": "Seres insignificantes. ¿Osasteis desafiarme?",
						"vietnamese": "Những kẻ hèn mọn. Dám cả gan đối đầu với ta sao?",
						"thai": "พวกเจ้าผู้ไร้ค่า. กล้าดียังไงถึงคิดจะต่อต้านข้า?",
						"hindi": "तुच्छ प्राणी। क्या तुमने मुझे चुनौती देने की हिम्मत की?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 땅은 영원히 나의 지배 아래 놓일 것이다.",
						"english": "This land shall forever be under my dominion.",
						"japanese": "この地は永遠に私の支配下にあるだろう。",
						"chinese": "这片土地将永远臣服于我的统治。",
						"french": "Cette terre sera éternellement sous ma domination.",
						"spanish": "Esta tierra estará eternamente bajo mi dominio.",
						"vietnamese": "Vùng đất này sẽ vĩnh viễn nằm dưới sự thống trị của ta.",
						"thai": "ดินแดนนี้จะอยู่ภายใต้การปกครองของข้าตลอดไป",
						"hindi": "यह भूमि सदा मेरे प्रभुत्व में रहेगी।"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "절대… 포기하지 않아…!",
						"english": "Never... I won't give up...!",
						"japanese": "絶対…諦めない…！",
						"chinese": "绝不…放弃…！",
						"french": "Jamais… je n'abandonnerai…!",
						"spanish": "¡Nunca… me rendiré…!",
						"vietnamese": "Tuyệt đối… không bỏ cuộc…!",
						"thai": "ไม่มีทาง… ข้าไม่ยอมแพ้…!",
						"hindi": "कभी नहीं… मैं हार नहीं मानूँगा…!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"id": 15
		}
	]
} as const;
