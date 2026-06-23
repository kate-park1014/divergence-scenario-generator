export const scenario_modern_imperator_25_02 = {
	"scenario_id": "modern_imperator_25_02",
	"order": 2,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"dax": {
			"id": "mon_08d5b43e-f9ab-4469-9064-855e170b0cdc",
			"name": {
				"korean": "닥스",
				"english": "Dax",
				"japanese": "ダックス",
				"chinese": "达克斯",
				"french": "Dax",
				"spanish": "Dax",
				"vietnamese": "Dax",
				"thai": "แด็กซ์",
				"hindi": "डैक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/84bb11db-6eb4-4500-d274-222e8b100100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5d325a75-bd91-4758-7b3f-ad9a97e52700/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "dax",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "시스템을 뚫고 싶나? 내가 도와줄 수 있어.",
						"english": "Want to breach the system? I can help you.",
						"japanese": "システムを突破したいか？ 手助けできるぞ。",
						"chinese": "想攻破系统吗？我可以帮你。",
						"french": "Tu veux percer le système ? Je peux t'aider.",
						"spanish": "¿Quieres irrumpir en el sistema? Puedo ayudarte.",
						"vietnamese": "Muốn xuyên thủng hệ thống? Tôi có thể giúp.",
						"thai": "อยากเจาะระบบไหม? ฉันช่วยนายได้นะ.",
						"hindi": "सिस्टम को हैक करना चाहते हो? मैं तुम्हारी मदद कर सकता हूँ।"
					},
					"type": "speech",
					"speaker": "dax",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…널 믿을 수 있을까?",
						"english": "...Can I trust you?",
						"japanese": "…あなたを信じられるだろうか？",
						"chinese": "……我能相信你吗？",
						"french": "...Puis-je te faire confiance ?",
						"spanish": "...¿Puedo confiar en ti?",
						"vietnamese": "...Tôi có thể tin anh không?",
						"thai": "...ฉันจะไว้ใจนายได้ไหม?",
						"hindi": "...क्या मैं तुम पर भरोसा कर सकता हूँ?"
					}
				},
				{
					"emotion": "base",
					"speaker": "dax",
					"type": "speech",
					"content": {
						"korean": "선택은 너의 몫. 하지만 시간은 많지 않아.",
						"english": "The choice is yours. But time is not on our side.",
						"japanese": "選択は君次第だ。だが、時間はない。",
						"chinese": "选择权在你。但时间不多了。",
						"french": "Le choix te revient. Mais le temps est compté.",
						"spanish": "La elección es tuya. Pero no hay mucho tiempo.",
						"vietnamese": "Lựa chọn là của cậu. Nhưng thời gian không còn nhiều.",
						"thai": "ทางเลือกนายเอง. แต่เวลาไม่มาก.",
						"hindi": "चुनाव तुम्हारा है। लेकिन ज़्यादा समय नहीं है।"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "닥스는 도움의 손길을 내밀었다. 의심을 품은 채 주인공은 그 손을 잡았다.",
						"english": "Dax offered a helping hand. Filled with doubt, the protagonist took it.",
						"japanese": "ダックスは助けの手を差し出した。主人公は疑念を抱きつつも、その手を取った。",
						"chinese": "达克斯伸出了援手。主人公带着疑虑，握住了那只手。",
						"french": "Dax tendit une main secourable. Plein de doutes, le protagoniste la prit.",
						"spanish": "Dax ofreció una mano amiga. Con dudas, el protagonista la tomó.",
						"vietnamese": "Dax đưa tay giúp đỡ. Dù đầy nghi ngờ, nhân vật chính vẫn nắm lấy.",
						"thai": "แด็กซ์ยื่นมือช่วย ตัวเอกเต็มไปด้วยความสงสัย แต่ก็คว้ามือเขาไว้.",
						"hindi": "डैक्स ने मदद का हाथ बढ़ाया। संदेह से भरे नायक ने उसका हाथ थाम लिया।"
					}
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "dax",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "dax",
					"type": "speech",
					"content": {
						"korean": "오버워치 시스템의 핵심부. 생각보다 허술한 부분이 있어.",
						"english": "The core of the Overwatch system. There are more vulnerabilities than I thought.",
						"japanese": "オーバーウォッチシステムの中核。思ったよりも手薄な部分がある。",
						"chinese": "守望系统核心。比想象中要松懈。",
						"french": "Le cœur du système Overwatch. Il y a des failles plus que prévu.",
						"spanish": "El núcleo del sistema Overwatch. Hay puntos más vulnerables de lo que pensaba.",
						"vietnamese": "Lõi của hệ thống Overwatch. Có những chỗ sơ hở hơn ta nghĩ.",
						"thai": "แกนหลักของระบบโอเวอร์วอทช์ มีจุดอ่อนกว่าที่คิด.",
						"hindi": "ओवरवॉच सिस्टम का मुख्य भाग। इसमें मेरी सोच से ज़्यादा कमज़ोरियाँ हैं।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "어디?",
						"english": "Where?",
						"japanese": "どこ？",
						"chinese": "哪里？",
						"french": "Où ?",
						"spanish": "¿Dónde?",
						"vietnamese": "Ở đâu?",
						"thai": "ที่ไหน?",
						"hindi": "कहाँ?"
					}
				},
				{
					"content": {
						"korean": "특정 프로토콜이 약점이야. 과거의 조직이 구축한 방식인데… 견고했지.",
						"english": "A specific protocol is the weakness. A method built by a past organization... strong.",
						"japanese": "特定のプロトコルが弱点だ。過去の組織が構築した方法だが…堅牢だった。",
						"chinese": "某个协议是弱点。是过去组织构建的方式…很坚固。",
						"french": "Un protocole spécifique est la faiblesse. Une méthode construite par une ancienne organisation... robuste.",
						"spanish": "Un protocolo específico es la debilidad. Un método construido por una organización pasada... robusto.",
						"vietnamese": "Một giao thức cụ thể là điểm yếu. Một phương pháp được xây dựng bởi một tổ chức trong quá khứ... rất vững chắc.",
						"thai": "โปรโตคอลเฉพาะเป็นจุดอ่อน เป็นวิธีการที่องค์กรในอดีตสร้างขึ้น... แข็งแกร่งมาก",
						"hindi": "एक विशिष्ट प्रोटोकॉल कमजोरी है। इसे एक पुराने संगठन ने बनाया था... और यह मजबूत था।"
					},
					"emotion": "base",
					"speaker": "dax",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…과거의 조직?",
						"english": "...A past organization?",
						"japanese": "…過去の組織？",
						"chinese": "…过去的组织？",
						"french": "...Une ancienne organisation ?",
						"spanish": "...¿Una organización pasada?",
						"vietnamese": "...Một tổ chức trong quá khứ?",
						"thai": "...องค์กรในอดีต?",
						"hindi": "...पुराना संगठन?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아니, 아무것도 아니야. 이 정보를 추적해봐. 중요한 단서가 나올 거야.",
						"english": "No, it's nothing. Track this information. It will reveal an important clue.",
						"japanese": "いや、何でもない。この情報を追跡してみてくれ。重要な手がかりが見つかるだろう。",
						"chinese": "不，没什么。追踪这个信息。你会发现重要线索的。",
						"french": "Non, ce n'est rien. Suis cette information. Une piste importante en découlera.",
						"spanish": "No, no es nada. Rastrea esta información. Surgirá una pista importante.",
						"vietnamese": "Không, không có gì. Theo dõi thông tin này. Sẽ có một manh mối quan trọng.",
						"thai": "ไม่ ไม่ใช่เรื่องอะไร ตามข้อมูลนี้ไป มันจะเปิดเผยเบาะแสสำคัญ",
						"hindi": "नहीं, कुछ नहीं। इस जानकारी का पता लगाओ। एक महत्वपूर्ण सुराग मिलेगा।"
					},
					"emotion": "base",
					"speaker": "dax",
					"type": "speech"
				},
				{
					"content": {
						"korean": "수상하군…",
						"english": "Suspicious...",
						"japanese": "怪しいな…",
						"chinese": "可疑…",
						"french": "Suspect...",
						"spanish": "Sospechoso...",
						"vietnamese": "Đáng ngờ...",
						"thai": "น่าสงสัย...",
						"hindi": "संदिग्ध..."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "dax",
					"spot": [
						3,
						3
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "추적할 정보가 있어. 하지만 접근하려면 고대 보안 프로토콜을 사용해야 해.",
						"english": "There's information to track. But to access it, you need to use an ancient security protocol.",
						"japanese": "追跡すべき情報がある。だが、アクセスするには古代のセキュリティプロトコルを使う必要がある。",
						"chinese": "有信息要追踪。但要访问它，需要使用古代安全协议。",
						"french": "Il y a des informations à suivre. Mais pour y accéder, tu dois utiliser un ancien protocole de sécurité.",
						"spanish": "Hay información que rastrear. Pero para acceder a ella, debes usar un antiguo protocolo de seguridad.",
						"vietnamese": "Có thông tin cần theo dõi. Nhưng để truy cập, phải dùng giao thức bảo mật cổ đại.",
						"thai": "มีข้อมูลที่ต้องติดตาม แต่การเข้าถึงต้องใช้โปรโตคอลความปลอดภัยโบราณ",
						"hindi": "ट्रैक करने के लिए जानकारी है। लेकिन इसे एक्सेस करने के लिए, आपको एक प्राचीन सुरक्षा प्रोटोकॉल का उपयोग करना होगा।"
					},
					"speaker": "dax",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "왜 그렇게 복잡하게? 일반적인 방법은 안 되나?",
						"english": "Why so complicated? Can't we use a normal method?",
						"japanese": "なぜそんなに複雑に？一般的な方法じゃダメなのか？",
						"chinese": "为什么这么复杂？常规方法不行吗？",
						"french": "Pourquoi si compliqué ? Une méthode normale ne suffirait pas ?",
						"spanish": "¿Por qué tan complicado? ¿No se puede usar un método normal?",
						"vietnamese": "Tại sao lại phức tạp vậy? Không thể dùng cách thông thường sao?",
						"thai": "ทำไมต้องซับซ้อนขนาดนั้น? ใช้วิธีปกติไม่ได้เหรอ?",
						"hindi": "इतना जटिल क्यों? सामान्य तरीका काम नहीं करेगा?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "절대적인 질서를 위해서는 이 방법뿐이야. 과거에도 그랬지. 완벽했어.",
						"english": "For absolute order, this is the only way. It was the same in the past. It was perfect.",
						"japanese": "絶対的な秩序のためにはこの方法しかない。過去もそうだった。完璧だった。",
						"chinese": "为了绝对的秩序，这是唯一的方法。过去也是如此。它曾是完美的。",
						"french": "Pour un ordre absolu, c'est la seule voie. C'était la même chose par le passé. C'était parfait.",
						"spanish": "Para el orden absoluto, este es el único camino. Así fue en el pasado. Era perfecto.",
						"vietnamese": "Để có trật tự tuyệt đối, đây là cách duy nhất. Trong quá khứ cũng vậy. Nó hoàn hảo.",
						"thai": "เพื่อความเป็นระเบียบที่สมบูรณ์แบบ นี่เป็นวิธีเดียว อดีตก็เป็นเช่นนั้น มันสมบูรณ์แบบ",
						"hindi": "पूर्ण व्यवस्था के लिए, यही एकमात्र तरीका है। अतीत में भी ऐसा ही था। यह बिल्कुल सही था।"
					}
				},
				{
					"content": {
						"korean": "…고집이 심하군.",
						"english": "...So stubborn.",
						"japanese": "…頑固だな。",
						"chinese": "…真固执。",
						"french": "...Obstiné.",
						"spanish": "...Qué obstinado.",
						"vietnamese": "...Thật cố chấp.",
						"thai": "...ดื้อรั้นจริง",
						"hindi": "...बहुत जिद्दी है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"emotion": "base",
					"content": {
						"korean": "완벽해야 하니까. 자, 이 좌표로 가봐. 중요한 데이터가 있을 거야.",
						"english": "Because it has to be perfect. Now, go to these coordinates. There should be important data there.",
						"japanese": "完璧でなければならないからだ。さあ、この座標へ行け。重要なデータがあるはずだ。",
						"chinese": "因为它必须完美。好了，去这个坐标。那里会有重要数据。",
						"french": "Parce que ça doit être parfait. Maintenant, va à ces coordonnées. Il devrait y avoir des données importantes.",
						"spanish": "Porque tiene que ser perfecto. Ahora, ve a estas coordenadas. Allí debería haber datos importantes.",
						"vietnamese": "Vì nó phải hoàn hảo. Được rồi, hãy đến tọa độ này. Sẽ có dữ liệu quan trọng.",
						"thai": "เพราะมันต้องสมบูรณ์แบบ เอาล่ะ ไปที่พิกัดนี้สิ จะมีข้อมูลสำคัญอยู่ตรงนั้น",
						"hindi": "क्योंकि इसे सही होना चाहिए। अब, इन निर्देशांकों पर जाओ। वहाँ महत्वपूर्ण डेटा होना चाहिए।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "닥스의 정보는 주인공을 미로 같은 지하 구역으로 이끌었다. 정적이 감돌았다.",
						"english": "Dax's intel led the protagonist into a labyrinthine underground area. Silence fell.",
						"japanese": "ダックスの情報は主人公を迷宮のような地下区域へと導いた。静寂が満ちていた。",
						"chinese": "达克斯的情报将主角引至迷宫般的地下区域。一片寂静。",
						"french": "Les infos de Dax menèrent le protagoniste dans une zone souterraine labyrinthique. Le silence régna.",
						"spanish": "La información de Dax llevó al protagonista a una zona subterránea laberíntica. Un silencio cayó.",
						"vietnamese": "Thông tin của Dax đã dẫn nhân vật chính vào một khu vực ngầm như mê cung. Sự tĩnh lặng bao trùm.",
						"thai": "ข้อมูลของแด็กซ์นำทางตัวเอกเข้าสู่พื้นที่ใต้ดินที่วกวนราวเขาวงกต ความเงียบเข้าปกคลุม",
						"hindi": "डैक्स की जानकारी ने नायक को एक भूलभुलैया जैसे भूमिगत क्षेत्र में पहुँचाया। सन्नाटा छा गया।"
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
						"korean": "여긴 아무것도 없는데? 닥스…",
						"english": "There's nothing here? Dax...",
						"japanese": "ここには何もないじゃないか？ ダックス…",
						"chinese": "这里什么都没有？达克斯……",
						"french": "Il n'y a rien ici ? Dax...",
						"spanish": "¿No hay nada aquí? Dax...",
						"vietnamese": "Ở đây không có gì cả? Dax...",
						"thai": "ที่นี่ไม่มีอะไรเลยเหรอ? แด็กซ์...",
						"hindi": "यहाँ कुछ भी नहीं है? डैक्स..."
					}
				},
				{
					"content": {
						"korean": "찾는 게 이건가?",
						"english": "Is this what you're looking for?",
						"japanese": "探しているのはこれか？",
						"chinese": "你找的是这个吗？",
						"french": "C'est ça que tu cherches ?",
						"spanish": "¿Es esto lo que buscas?",
						"vietnamese": "Cái này có phải thứ ngươi đang tìm không?",
						"thai": "นี่คือสิ่งที่เจ้ากำลังตามหาใช่ไหม?",
						"hindi": "क्या तुम यही ढूंढ रहे हो?"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…함정이었나!",
						"english": "...A trap!",
						"japanese": "…罠だったのか！",
						"chinese": "……是陷阱！",
						"french": "...C'était un piège !",
						"spanish": "¡...Era una trampa!",
						"vietnamese": "...Là một cái bẫy!",
						"thai": "...เป็นกับดักนี่นา!",
						"hindi": "…एक जाल था!"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "시스템의 미끼에 잘 걸려들었군.",
						"english": "You fell for the system's bait, perfectly.",
						"japanese": "システムの餌にうまく引っかかったな。",
						"chinese": "你很好地中了系统的诱饵。",
						"french": "Tu es bien tombé dans l'appât du système.",
						"spanish": "Caíste de lleno en el cebo del sistema.",
						"vietnamese": "Ngươi đã mắc bẫy của hệ thống một cách hoàn hảo.",
						"thai": "เจ้าติดกับดักของระบบอย่างจัง",
						"hindi": "तुम सिस्टम के जाल में पूरी तरह फंस गए।"
					}
				},
				{
					"content": {
						"korean": "닥스… 이 배신자!",
						"english": "Dax... You traitor!",
						"japanese": "ダックス…この裏切り者め！",
						"chinese": "达克斯……你这个叛徒！",
						"french": "Dax... Espèce de traître !",
						"spanish": "¡Dax... Traidor!",
						"vietnamese": "Dax... Kẻ phản bội này!",
						"thai": "แด็กซ์... เจ้าคนทรยศ!",
						"hindi": "डैक्स... तुम गद्दार!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…닥스의 미소 뒤에 숨겨진 진실… 언젠가…",
						"english": "...The truth hidden behind Dax's smile... Someday...",
						"japanese": "…ダックスの笑顔の裏に隠された真実…いつか…",
						"chinese": "……达克斯笑容背后隐藏的真相……总有一天……",
						"french": "...La vérité cachée derrière le sourire de Dax... Un jour...",
						"spanish": "...La verdad oculta tras la sonrisa de Dax... Algún día...",
						"vietnamese": "...Sự thật ẩn giấu sau nụ cười của Dax... Một ngày nào đó...",
						"thai": "...ความจริงที่ซ่อนอยู่เบื้องหลังรอยยิ้มของแด็กซ์... สักวันหนึ่ง...",
						"hindi": "…डैक्स की मुस्कान के पीछे छिपा सच… कभी न कभी…"
					}
				},
				{
					"content": {
						"korean": "닥스… 도망칠 순 없을 거야.",
						"english": "Dax… You can't escape.",
						"japanese": "ダックス… 逃れることはできない。",
						"chinese": "达克斯… 你逃不掉的。",
						"french": "Dax… Tu ne pourras pas t'échapper.",
						"spanish": "Dax… No podrás escapar.",
						"vietnamese": "Dax… Ngươi không thể trốn thoát đâu.",
						"thai": "แด็กซ์… แกหนีไม่พ้นหรอก.",
						"hindi": "डैक्स… तुम भाग नहीं पाओगे।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "배신자의 미소 뒤에 감춰진 칼날. 복수의 불꽃은 더욱 거세졌다.",
						"english": "A blade hidden behind a traitor's smile. The flames of vengeance burn fiercer.",
						"japanese": "裏切り者の笑顔の裏に隠された刃。復讐の炎はさらに激しさを増した。",
						"chinese": "叛徒笑容背后隐藏的刀刃。复仇的火焰愈发猛烈。",
						"french": "Une lame cachée derrière le sourire d'un traître. Les flammes de la vengeance brûlent plus fort.",
						"spanish": "Una hoja oculta tras la sonrisa de un traidor. Las llamas de la venganza arden con más fuerza.",
						"vietnamese": "Lưỡi dao giấu sau nụ cười của kẻ phản bội. Ngọn lửa báo thù càng bùng cháy dữ dội.",
						"thai": "คมมีดซ่อนอยู่เบื้องหลังรอยยิ้มของคนทรยศ เปลวไฟแห่งการแก้แค้นโหมกระหน่ำยิ่งขึ้น.",
						"hindi": "एक गद्दार की मुस्कान के पीछे छिपी तलवार। प्रतिशोध की ज्वाला और तेज़ हो गई।"
					}
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어리석은 자. 시스템의 질서를 거스를 순 없어.",
						"english": "Fool. You cannot defy the system's order.",
						"japanese": "愚かな者め。システムの秩序に逆らうことなどできぬ。",
						"chinese": "愚蠢之徒。你无法违抗系统的秩序。",
						"french": "Idiot. Tu ne peux pas défier l'ordre du système.",
						"spanish": "Necio. No puedes desafiar el orden del sistema.",
						"vietnamese": "Kẻ ngu ngốc. Ngươi không thể chống lại trật tự của hệ thống.",
						"thai": "คนโง่เง่า เจ้าไม่อาจขัดขืนระเบียบของระบบได้",
						"hindi": "मूर्ख। तुम सिस्टम के आदेश का उल्लंघन नहीं कर सकते।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "닥스… 네놈에게 반드시 복수할 거야!",
						"english": "Dax... I'll definitely get my revenge on you!",
						"japanese": "ダックス…貴様には必ず復讐してやる！",
						"chinese": "达克斯……我一定会向你复仇！",
						"french": "Dax... Je me vengerai de toi, c'est sûr !",
						"spanish": "¡Dax... Me vengaré de ti, lo juro!",
						"vietnamese": "Dax... Ta nhất định sẽ trả thù ngươi!",
						"thai": "แด็กซ์... ข้าจะแก้แค้นเจ้าให้ได้!",
						"hindi": "डैक्स... मैं तुमसे ज़रूर बदला लूँगा!"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "복수심이 널 집어삼킬 뿐이다. 닥스는 이미 떠났어.",
						"english": "Revenge will only consume you. Dax has already left.",
						"japanese": "復讐心がお前を飲み込むだけだ。ダックスはもう去った。",
						"chinese": "复仇只会吞噬你。达克斯已经离开了。",
						"french": "La vengeance ne fera que te consumer. Dax est déjà parti.",
						"spanish": "La venganza solo te consumirá. Dax ya se fue.",
						"vietnamese": "Lòng thù hận sẽ chỉ nuốt chửng ngươi mà thôi. Dax đã đi rồi.",
						"thai": "ความแค้นจะกัดกินเจ้าเท่านั้น แด็กซ์ได้จากไปแล้ว",
						"hindi": "बदला तुम्हें ही निगल जाएगा। डैक्स पहले ही जा चुका है।"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "꼴좋군. 시스템은 모든 것을 지켜본다.",
						"english": "Serves you right. The System watches all.",
						"japanese": "ざまあみろ。システムはすべてを見ている。",
						"chinese": "活该。系统监视着一切。",
						"french": "Bien fait pour toi. Le Système observe tout.",
						"spanish": "Te lo mereces. El Sistema lo observa todo.",
						"vietnamese": "Đáng đời. Hệ thống giám sát mọi thứ.",
						"thai": "สมน้ำหน้า ระบบเฝ้าดูทุกสิ่ง.",
						"hindi": "तुम्हें यही मिलना चाहिए था। सिस्टम सब कुछ देखता है।"
					},
					"emotion": "happy",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…끝이 아니야. 닥스…",
						"english": "…It's not over. Dax…",
						"japanese": "…終わりじゃない。ダックス…",
						"chinese": "…还没结束。达克斯…",
						"french": "…Ce n'est pas fini. Dax…",
						"spanish": "…No ha terminado. Dax…",
						"vietnamese": "…Chưa kết thúc đâu. Dax…",
						"thai": "…ยังไม่จบนะ แด็กซ์…",
						"hindi": "…यह खत्म नहीं हुआ है। डैक्स…"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"도시의 그림자 속. 또 다른 가면이 다가왔다.",
			"닥스. 시스템의 허점을 속삭이는 자.",
			"그러나 그의 미소 뒤에는 감춰진 비수가 있었다.",
			"주인공은 알지 못했다. 이 미끼가 얼마나 달콤하고 치명적인지.",
			"분노의 덫이 서서히 조여오고 있었다."
		],
		"english": [
			"In the city's shadows, another mask approached.",
			"Dax. The one who whispers the system's flaws.",
			"But behind his smile, a hidden dagger lay.",
			"The protagonist didn't know. How sweet and deadly this bait was.",
			"The trap of wrath was slowly closing in."
		],
		"japanese": [
			"街の影の中。別の仮面が近づいてきた。",
			"ダックス。システムの欠陥を囁く者。",
			"しかし、彼の笑顔の裏には隠された短剣があった。",
			"主人公は知らなかった。この餌がどれほど甘く、そして致命的であるかを。",
			"怒りの罠が徐々に締め付けられていた。"
		],
		"chinese": [
			"城市的阴影中。另一个面具正在靠近。",
			"达克斯。低语系统漏洞之人。",
			"然而，在他的笑容背后，藏着一把匕首。",
			"主人公不知道。这个诱饵是多么的甜美又致命。",
			"愤怒的陷阱正在缓慢收紧。"
		],
		"french": [
			"Dans l'ombre de la ville. Un autre masque approchait.",
			"Dax. Celui qui murmure les failles du système.",
			"Mais derrière son sourire, se cachait un poignard.",
			"Le protagoniste l'ignorait. À quel point cet appât était doux et mortel.",
			"Le piège de la fureur se refermait lentement."
		],
		"spanish": [
			"En las sombras de la ciudad. Otra máscara se acercaba.",
			"Dax. El que susurra los defectos del sistema.",
			"Pero detrás de su sonrisa, había una daga oculta.",
			"El protagonista no lo sabía. Cuán dulce y letal era este cebo.",
			"La trampa de la ira se cerraba lentamente."
		],
		"vietnamese": [
			"Trong bóng tối thành phố. Một chiếc mặt nạ khác đang đến gần.",
			"Dax. Kẻ thì thầm về sơ hở của hệ thống.",
			"Nhưng đằng sau nụ cười của hắn, là một con dao găm ẩn giấu.",
			"Nhân vật chính không hề hay biết. Cái mồi nhử này ngọt ngào và chết chóc đến mức nào.",
			"Cạm bẫy của sự phẫn nộ đang dần siết chặt."
		],
		"thai": [
			"ในเงามืดของเมือง หน้ากากอีกอันกำลังคืบคลานเข้ามา.",
			"แด็กซ์ ผู้กระซิบถึงช่องโหว่ของระบบ.",
			"แต่เบื้องหลังรอยยิ้มของเขา มีมีดสั้นซ่อนอยู่.",
			"ตัวเอกไม่รู้เลยว่าเหยื่อล่อนี้หวานหอมและอันตรายถึงตายเพียงใด.",
			"กับดักแห่งความโกรธกำลังค่อยๆ รัดแน่นขึ้น."
		],
		"hindi": [
			"शहर की परछाइयों में। एक और नकाब करीब आ रहा था।",
			"डैक्स। जो सिस्टम की खामियों को फुसफुसाता है।",
			"लेकिन उसकी मुस्कान के पीछे एक छिपा हुआ खंजर था।",
			"नायक को नहीं पता था। यह चारा कितना मीठा और घातक था।",
			"क्रोध का जाल धीरे-धीरे कस रहा था।"
		]
	}
} as const;
