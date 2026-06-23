export const scenario_snowy_mournsnow_3_05 = {
	"scenario_id": "snowy_mournsnow_3_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "snowy",
	"actors": {
		"inka": {
			"id": "mon_583e945a-1e2f-428b-a251-b428f25b4052",
			"name": {
				"korean": "인카",
				"english": "Inka",
				"japanese": "インカ",
				"chinese": "因卡",
				"french": "Inka",
				"spanish": "Inka",
				"vietnamese": "Inka",
				"thai": "อินคา",
				"hindi": "इंंका"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/97f4545b-2e8a-4688-3e4e-b34bb246dd00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f27763ba-2358-4fd3-c813-0f0b59dcac00/public"
		}
	},
	"boss": {
		"pool_id": "pool_FjordGrief_Mournsnow_V1"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 기계음이 설원 전체를 울렸다. 이곳이 시스템의 심장부였다.",
						"english": "A colossal mechanical roar echoed across the snowfield. This was the system's heart.",
						"japanese": "巨大な機械音が雪原全体に響き渡った。ここがシステムの心臓部だった。",
						"chinese": "巨大的机械轰鸣声响彻雪原。这里是系统的核心。",
						"french": "Un rugissement mécanique colossal résonna à travers la plaine enneigée. C'était le cœur du système.",
						"spanish": "Un rugido mecánico colosal resonó por todo el campo nevado. Este era el corazón del sistema.",
						"vietnamese": "Một tiếng máy móc khổng lồ vang vọng khắp cánh đồng tuyết. Đây là trái tim của hệ thống.",
						"thai": "เสียงเครื่องจักรขนาดมหึมาดังก้องไปทั่วทุ่งหิมะ ที่นี่คือหัวใจของระบบ",
						"hindi": "एक विशाल यांत्रिक गर्जना बर्फीले मैदान में गूंज उठी। यही प्रणाली का हृदय था।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이 거대한 얼음이… 전부 인공적인 거라고?",
						"english": "This colossal ice... it's all artificial?",
						"japanese": "この巨大な氷が…全て人工物だと？",
						"chinese": "这巨大的冰块……全都是人工的？",
						"french": "Cette glace colossale... tout est artificiel ?",
						"spanish": "Este hielo colosal... ¿todo es artificial?",
						"vietnamese": "Tảng băng khổng lồ này... tất cả đều là nhân tạo sao?",
						"thai": "น้ำแข็งมหึมานี่... ทั้งหมดเป็นของที่สร้างขึ้นมาอย่างนั้นหรือ?",
						"hindi": "यह विशाल बर्फ़... क्या यह सब कृत्रिम है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "inka"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…지금까지의 모든 것이. 이곳의 바람, 눈보라, 그리고… 기억까지도.",
						"english": "…everything up until now. The wind, the blizzard, and… even the memories.",
						"japanese": "「…これまでの全てが。この地の風、吹雪、そして…記憶までも。」",
						"chinese": "“……到目前为止的一切。这里的风、暴雪，甚至……记忆。”",
						"french": "« ...tout, jusqu'à présent. Le vent d'ici, le blizzard, et... même les souvenirs. »",
						"spanish": "« ...todo hasta ahora. El viento de este lugar, la ventisca, e incluso... los recuerdos. »",
						"vietnamese": "« ...mọi thứ cho đến giờ. Gió ở đây, bão tuyết, và... cả ký ức nữa. »",
						"thai": "« ...ทุกสิ่งทุกอย่างจนถึงตอนนี้ ทั้งลมที่นี่ พายุหิมะ และ...แม้กระทั่งความทรงจำ »",
						"hindi": "« ...अब तक सब कुछ। यहाँ की हवा, बर्फीला तूफान, और... यादें भी। »"
					},
					"speaker": "inka"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "말도 안 돼…",
						"english": "Unbelievable...",
						"japanese": "「信じられない…」",
						"chinese": "“不可能……”",
						"french": "« C'est impossible... »",
						"spanish": "« ¡No puede ser! »",
						"vietnamese": "« Không thể nào... »",
						"thai": "« ไม่จริงน่า... »",
						"hindi": "« मान नहीं सकता... »"
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "inka",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 파편들을 봐. 시스템 로그 데이터가 추출되고 있어.",
						"english": "Look at these fragments. System log data is being extracted.",
						"japanese": "「この破片を見て。システムログデータが抽出されているわ。」",
						"chinese": "“看这些碎片。系统日志数据正在提取中。”",
						"french": "« Regardez ces fragments. Les données du journal système sont en cours d'extraction. »",
						"spanish": "« Mira estos fragmentos. Se están extrayendo datos del registro del sistema. »",
						"vietnamese": "« Nhìn những mảnh vỡ này đi. Dữ liệu nhật ký hệ thống đang được trích xuất. »",
						"thai": "« ดูเศษชิ้นส่วนพวกนี้สิ ข้อมูลบันทึกระบบกำลังถูกดึงออกมา »",
						"hindi": "« इन टुकड़ों को देखो। सिस्टम लॉग डेटा निकाला जा रहा है। »"
					},
					"type": "speech",
					"speaker": "inka"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "'정화 주기… 유지 보수 프로토콜…'.",
						"english": "'Purification Cycle... Maintenance Protocol...'",
						"japanese": "「『浄化サイクル…メンテナンスプロトコル…』」",
						"chinese": "““净化周期……维护协议……””",
						"french": "« « Cycle de purification... Protocole de maintenance... » »",
						"spanish": "« « Ciclo de Purificación... Protocolo de Mantenimiento... » »",
						"vietnamese": "« « Chu kỳ Thanh lọc... Giao thức Bảo trì... » »",
						"thai": "« « วงจรการชำระล้าง... พิธีการบำรุงรักษา... » »",
						"hindi": "« « शुद्धि चक्र... रखरखाव प्रोटोकॉल... » »"
					},
					"speaker": "inka"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "그럼 지금까지 그 카운트다운은….",
						"english": "So that countdown until now was...",
						"japanese": "「じゃあ、あのカウントダウンは今まで…。」",
						"chinese": "“那么，到目前为止的那个倒计时是……”",
						"french": "« Alors, ce compte à rebours jusqu'à présent était... »",
						"spanish": "« Entonces, esa cuenta regresiva hasta ahora era... »",
						"vietnamese": "« Vậy thì cái đồng hồ đếm ngược đó cho đến giờ là... »",
						"thai": "« งั้นการนับถอยหลังนั่นจนถึงตอนนี้ก็คือ... »",
						"hindi": "« तो वह उलटी गिनती अब तक... »"
					},
					"type": "speech"
				},
				{
					"speaker": "inka",
					"type": "speech",
					"content": {
						"korean": "자연 현상이 아니었어. 시스템이 기억을 재배치하고, 진실을 왜곡하는 스케줄이었던 거야.",
						"english": "It wasn't a natural phenomenon. It was the system's schedule to reallocate memories and distort the truth.",
						"japanese": "「自然現象じゃなかった。システムが記憶を再配置し、真実を歪めるためのスケジュールだったんだ。」",
						"chinese": "“这不是自然现象。这是系统重新分配记忆、扭曲真相的日程安排。”",
						"french": "« Ce n'était pas un phénomène naturel. C'était le programme du système pour réallouer les souvenirs et déformer la vérité. »",
						"spanish": "« No era un fenómeno natural. Era el programa del sistema para reasignar recuerdos y distorsionar la verdad. »",
						"vietnamese": "« Đó không phải là hiện tượng tự nhiên. Đó là lịch trình của hệ thống để sắp xếp lại ký ức và bóp méo sự thật. »",
						"thai": "« มันไม่ใช่ปรากฏการณ์ธรรมชาติ แต่มันคือตารางเวลาของระบบที่จะจัดสรรความทรงจำใหม่และบิดเบือนความจริง »",
						"hindi": "« यह कोई प्राकृतिक घटना नहीं थी। यह यादों को पुनर्वितरित करने और सच्चाई को विकृत करने का सिस्टम का कार्यक्रम था। »"
					},
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "inka"
				},
				{
					"content": {
						"korean": "이 유물들, 기록들… 모두 짜깁기된 퍼즐 조각들이야.",
						"english": "These artifacts, these records... they're all cobbled-together puzzle pieces.",
						"japanese": "「この遺物、記録…全てが寄せ集めのパズルピースだ。」",
						"chinese": "“这些文物、记录……都不过是拼凑起来的零碎线索。”",
						"french": "« Ces artefacts, ces archives... ce sont toutes des pièces de puzzle bricolées. »",
						"spanish": "« Estos artefactos, estos registros... son todos pedazos de un rompecabezas mal armado. »",
						"vietnamese": "« Những di vật này, những ghi chép này... tất cả chỉ là những mảnh ghép rời rạc. »",
						"thai": "« โบราณวัตถุ บันทึกพวกนี้... พวกมันเป็นแค่ชิ้นส่วนปริศนาที่ถูกรวบรวมขึ้นมา »",
						"hindi": "« ये कलाकृतियाँ, ये अभिलेख... सभी जुड़े हुए पहेली के टुकड़े हैं। »"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "inka"
				},
				{
					"type": "speech",
					"content": {
						"korean": "진짜 역사가 아니라고?",
						"english": "Not real history?",
						"japanese": "「本当の歴史じゃないってこと？」",
						"chinese": "“这不是真实的历史？”",
						"french": "« Pas une vraie histoire ? »",
						"spanish": "« ¿No es historia real? »",
						"vietnamese": "« Không phải lịch sử thật sao? »",
						"thai": "« ไม่ใช่ประวัติศาสตร์จริงเหรอ? »",
						"hindi": "« असली इतिहास नहीं है? »"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "inka",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "응. 시스템은 순수한 슬픔의 에너지를 추출하려고 기억과 유물을 의도적으로 조작해왔어.",
						"english": "Right. The system has been deliberately manipulating memories and artifacts to extract pure sorrow energy.",
						"japanese": "「ええ。システムは純粋な悲しみのエネルギーを抽出するために、記憶と遺物を意図的に操作してきたのよ。」",
						"chinese": "“是的。系统一直在故意操纵记忆和文物，以提取纯粹的悲伤能量。”",
						"french": "« Oui. Le système a délibérément manipulé les souvenirs et les artefacts pour extraire de l'énergie de pure tristesse. »",
						"spanish": "« Sí. El sistema ha estado manipulando deliberadamente recuerdos y artefactos para extraer energía de pura tristeza. »",
						"vietnamese": "« Đúng vậy. Hệ thống đã cố tình thao túng ký ức và di vật để trích xuất năng lượng của nỗi buồn thuần khiết. »",
						"thai": "« ใช่ ระบบได้บิดเบือนความทรงจำและวัตถุโบราณอย่างจงใจเพื่อสกัดพลังงานแห่งความโศกเศร้าบริสุทธิ์ »",
						"hindi": "« हाँ। सिस्टम जानबूझकर यादों और कलाकृतियों में हेरफेर कर रहा था ताकि शुद्ध दुख की ऊर्जा निकाली जा सके। »"
					}
				},
				{
					"content": {
						"korean": "우리가 믿었던 모든 게… 거짓이었다니.",
						"english": "Everything we believed... was a lie.",
						"japanese": "「私たちが信じていた全てが…嘘だったなんて。」",
						"chinese": "“我们所相信的一切……都是谎言。”",
						"french": "« Tout ce que nous croyions... n'était qu'un mensonge. »",
						"spanish": "« ¡Todo lo que creíamos... era mentira! »",
						"vietnamese": "« Tất cả những gì chúng ta tin tưởng... đều là dối trá. »",
						"thai": "« ทุกสิ่งที่เราเคยเชื่อ... เป็นเรื่องโกหกงั้นเหรอ? »",
						"hindi": "« जो कुछ भी हमने माना था... वह झूठ था। »"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "inka"
				},
				{
					"speaker": "inka",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "더 끔찍한 건… 이 시스템이 사람들의 기억까지 통제하고 있었다는 거야.",
						"english": "What's even worse... this system was controlling people's memories too.",
						"japanese": "さらに恐ろしいのは…このシステムが人々の記憶まで操作していたことだ。",
						"chinese": "更可怕的是……这个系统甚至控制着人们的记忆。",
						"french": "Pire encore… ce système contrôlait même la mémoire des gens.",
						"spanish": "Lo que es aún peor... este sistema estaba controlando incluso los recuerdos de la gente.",
						"vietnamese": "Điều tệ hơn nữa là... hệ thống này còn kiểm soát cả ký ức của mọi người.",
						"thai": "ที่แย่กว่านั้นคือ... ระบบนี้ควบคุมความทรงจำของผู้คนด้วย",
						"hindi": "इससे भी बुरा यह कि... यह सिस्टम लोगों की यादों को भी नियंत्रित कर रहा था।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "NPC들이 우리에게 진실을 말하지 못했던 이유가…",
						"english": "The reason why NPCs couldn't tell us the truth was...",
						"japanese": "NPCたちが私たちに真実を話せなかった理由は…",
						"chinese": "NPC们无法告诉我们真相的原因是……",
						"french": "La raison pour laquelle les PNJ ne pouvaient pas nous dire la vérité…",
						"spanish": "La razón por la que los NPC no podían decirnos la verdad fue...",
						"vietnamese": "Lý do mà các NPC không thể nói cho chúng ta sự thật là...",
						"thai": "เหตุผลที่ NPC ไม่สามารถบอกความจริงกับเราได้คือ...",
						"hindi": "NPCs हमें सच नहीं बता पा रहे थे क्योंकि..."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "응. 시스템이 진실을 은폐하기 위해 인지마저 조작했어.",
						"english": "Yes. The system even manipulated their perception to conceal the truth.",
						"japanese": "うん。システムが真実を隠蔽するために、認識まで操作したんだ。",
						"chinese": "是的。系统为了掩盖真相，甚至操纵了人们的认知。",
						"french": "Oui. Le système a même manipulé leur perception pour dissimuler la vérité.",
						"spanish": "Sí. El sistema incluso manipuló su percepción para ocultar la verdad.",
						"vietnamese": "Đúng vậy. Hệ thống thậm chí đã thao túng nhận thức để che giấu sự thật.",
						"thai": "ใช่ ระบบได้บิดเบือนการรับรู้เพื่อปกปิดความจริง",
						"hindi": "हाँ। सिस्टम ने सच्चाई छिपाने के लिए उनकी समझ को भी हेरफेर किया।"
					},
					"emotion": "angry",
					"speaker": "inka"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이 모든 비극의 근원… 용서할 수 없어.",
						"english": "The source of all this tragedy... unforgivable.",
						"japanese": "このすべての悲劇の根源…許せない。",
						"chinese": "这一切悲剧的根源……不可原谅。",
						"french": "La source de toute cette tragédie… impardonnable.",
						"spanish": "La fuente de toda esta tragedia... imperdonable.",
						"vietnamese": "Nguồn gốc của mọi bi kịch này... không thể tha thứ.",
						"thai": "ต้นกำเนิดของโศกนาฏกรรมทั้งหมดนี้... ไม่มีวันอภัย",
						"hindi": "इस सारी त्रासदी का स्रोत... अक्षम्य।"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "Mournsnow의 거대한 형체가 부서지며, 기계적인 코어들이 흩어졌다.",
						"english": "Mournsnow's colossal form shattered, its mechanical cores scattering.",
						"japanese": "モーンスノーの巨大な躯体が砕け散り、機械のコアが飛散した。",
						"chinese": "哀雪的巨大身躯破碎，机械核心四散。",
						"french": "La forme colossale de Mournsnow se brisa, ses cœurs mécaniques se dispersant.",
						"spanish": "La colosal forma de Mournsnow se hizo añicos, sus núcleos mecánicos dispersándose.",
						"vietnamese": "Thể xác khổng lồ của Mournsnow vỡ tan, các lõi cơ khí của nó văng khắp nơi.",
						"thai": "ร่างมหึมาของมอร์นสโนว์แตกสลาย แกนกลไกของมันกระจัดกระจาย",
						"hindi": "मोर्नस्नो का विशाल रूप बिखर गया, उसके यांत्रिक कोर छितरा गए।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "그 중심에서 작은 나무 곰인형이 비극적으로 빛을 발했다.",
						"english": "From its core, a small wooden bear doll tragically glowed.",
						"japanese": "その中心で、小さな木製の熊人形が悲劇的に輝いた。",
						"chinese": "在其中心，一个木制小熊玩偶悲剧般地发光。",
						"french": "En son cœur, une petite poupée ours en bois brillait tragiquement.",
						"spanish": "Desde su núcleo, un pequeño oso de madera brillaba trágicamente.",
						"vietnamese": "Từ lõi của nó, một búp bê gấu gỗ nhỏ bé phát sáng một cách bi thảm.",
						"thai": "จากแกนกลางของมัน ตุ๊กตาหมีไม้ตัวเล็กส่องแสงอย่างน่าเศร้า",
						"hindi": "उसके केंद्र से, एक छोटा लकड़ी का भालू गुड़िया दुखद रूप से चमक उठी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "안 돼… 더는 부서지지 마… 내가 잊어버리면… 아무도 기억해주지 않을 텐데… 이 데이터가 소실되면 안 돼….",
						"english": "No... Don't break any further... If I forget... No one will remember... This data must not be lost...",
						"japanese": "だめだ…これ以上壊れないで…もし私が忘れてしまったら…誰も覚えていないでしょう…このデータを失うわけにはいかない…。",
						"chinese": "不…不要再碎了…如果我忘了…就没有人会记得了…这些数据不能丢失…。",
						"french": "Non... Ne te brise pas davantage... Si j'oublie... Personne ne se souviendra... Ces données ne doivent pas être perdues...",
						"spanish": "No... No te rompas más... Si yo olvido... Nadie recordará... Estos datos no deben perderse...",
						"vietnamese": "Không... Đừng vỡ nữa... Nếu tôi quên... Sẽ không ai nhớ cả... Dữ liệu này không được mất đi...",
						"thai": "ไม่นะ... อย่าแตกสลายไปกว่านี้... ถ้าฉันลืม... ก็จะไม่มีใครจำได้... ข้อมูลนี้ต้องไม่หายไป...",
						"hindi": "नहीं... और मत टूट... अगर मैं भूल गया... तो कोई याद नहीं रखेगा... यह डेटा खोना नहीं चाहिए..."
					},
					"emotion": "sad"
				},
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "inka"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…애처로운 아이의 목소리. 우리가 널 지켜줄게.",
						"english": "...A pitiful child's voice. We will protect you.",
						"japanese": "…哀れな子供の声。私たちが君を守るよ。",
						"chinese": "……可怜的孩子的声音。我们会保护你的。",
						"french": "...Une voix d'enfant plaintive. Nous te protégerons.",
						"spanish": "...La voz de un niño lastimero. Te protegeremos.",
						"vietnamese": "...Giọng nói đáng thương của một đứa trẻ. Chúng ta sẽ bảo vệ em.",
						"thai": "...เสียงของเด็กน้อยที่น่าสงสาร เราจะปกป้องเธอ",
						"hindi": "...एक दयनीय बच्चे की आवाज़। हम तुम्हारी रक्षा करेंगे।"
					},
					"type": "speech",
					"speaker": "inka"
				},
				{
					"content": {
						"korean": "이제 정말 자유로워진 거야…",
						"english": "Now you are truly free...",
						"japanese": "もう、本当に自由になったんだね…。",
						"chinese": "现在你真的自由了……",
						"french": "Maintenant, tu es vraiment libre...",
						"spanish": "Ahora eres verdaderamente libre...",
						"vietnamese": "Giờ em đã thực sự tự do rồi...",
						"thai": "ตอนนี้เธอเป็นอิสระแล้วจริงๆ...",
						"hindi": "अब तुम सचमुच आज़ाद हो गए हो..."
					},
					"type": "speech",
					"emotion": "happy",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "카운트다운이 0이 되자, 시스템은 완전히 붕괴했다. 설원의 모든 환영이 사라졌다.",
						"english": "As the countdown reached zero, the system completely collapsed. All illusions of the snowy field vanished.",
						"japanese": "カウントダウンが0になり、システムは完全に崩壊した。雪原のあらゆる幻影が消え去った。",
						"chinese": "倒计时归零，系统彻底崩溃。雪原的所有幻象都消失了。",
						"french": "Le compte à rebours ayant atteint zéro, le système s'effondra complètement. Toutes les illusions du champ enneigé disparurent.",
						"spanish": "Al llegar la cuenta regresiva a cero, el sistema colapsó por completo. Todas las ilusiones del campo nevado desaparecieron.",
						"vietnamese": "Khi đếm ngược về 0, hệ thống sụp đổ hoàn toàn. Mọi ảo ảnh của cánh đồng tuyết đều biến mất.",
						"thai": "เมื่อการนับถอยหลังเป็นศูนย์ ระบบก็ล่มสลายโดยสมบูรณ์ ภาพลวงตาทั้งหมดของทุ่งหิมะก็หายไป",
						"hindi": "जैसे ही उलटी गिनती शून्य पर पहुँची, सिस्टम पूरी तरह से ध्वस्त हो गया। बर्फीले मैदान के सभी भ्रम गायब हो गए।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "비극은 통쾌한 해방감으로 변모했다. 얼어붙었던 모든 것이 녹아내리기 시작했다.",
						"english": "Tragedy transformed into a refreshing sense of liberation. Everything that was frozen began to melt away.",
						"japanese": "悲劇は痛快な解放感へと変貌した。凍りついていた全てが溶け始めた。",
						"chinese": "悲剧转变为一种痛快的解放感。所有冰封之物都开始融化。",
						"french": "La tragédie se transforma en un sentiment de libération rafraîchissant. Tout ce qui était gelé commença à fondre.",
						"spanish": "La tragedia se transformó en una refrescante sensación de liberación. Todo lo que estaba congelado comenzó a derretirse.",
						"vietnamese": "Bi kịch biến thành cảm giác giải thoát sảng khoái. Mọi thứ đóng băng bắt đầu tan chảy.",
						"thai": "โศกนาฏกรรมแปรเปลี่ยนเป็นความรู้สึกปลดปล่อยอันสดชื่น ทุกสิ่งที่แข็งตัวเริ่มละลายหายไป",
						"hindi": "त्रासदी एक ताज़गी भरी मुक्ति की भावना में बदल गई। सब कुछ जो जमा हुआ था, पिघलने लगा।"
					},
					"emotion": "happy",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "마침내 마주한 거대한 눈보라의 형상. 그 안에서 기계적인 빛이 섬뜩하게 빛났다.",
						"english": "Finally, the colossal form of the blizzard stood before me. A mechanical light glowed eerily within it.",
						"japanese": "ついに目の前に現れた巨大な吹雪の姿。その中で機械的な光が不気味に輝いた。",
						"chinese": "终于，巨大的暴风雪形态出现在眼前。其中，机械的光芒诡异地闪烁着。",
						"french": "Finalement, la forme colossale du blizzard se dressait devant moi. Une lumière mécanique brillait étrangement en son sein.",
						"spanish": "Finalmente, la colosal forma de la tormenta de nieve se erguía ante mí. Una luz mecánica brillaba inquietantemente en su interior.",
						"vietnamese": "Cuối cùng, hình dạng khổng lồ của bão tuyết hiện ra trước mắt. Một ánh sáng cơ khí rực rỡ một cách đáng sợ bên trong nó.",
						"thai": "ในที่สุด ร่างมหึมาของพายุหิมะก็ปรากฏขึ้น แสงกลไกส่องประกายสยองขวัญอยู่ภายในนั้น",
						"hindi": "अंततः, बर्फीले तूफान का विशाल रूप मेरे सामने था। उसके भीतर एक यांत्रिक प्रकाश भयावह रूप से चमक रहा था।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "내게 다가서지 마라. 이 시스템은… 슬픔으로 지탱되고 있다.",
						"english": "Do not approach me. This system... is sustained by sorrow.",
						"japanese": "私に近づくな。このシステムは…悲しみで支えられている。",
						"chinese": "不要靠近我。这个系统……是由悲伤支撑的。",
						"french": "Ne m'approche pas. Ce système… est soutenu par la tristesse.",
						"spanish": "No te acerques a mí. Este sistema... se sustenta en la tristeza.",
						"vietnamese": "Đừng lại gần ta. Hệ thống này... được duy trì bởi nỗi buồn.",
						"thai": "อย่าเข้ามาใกล้ฉัน ระบบนี้... ถูกค้ำจุนด้วยความโศกเศร้า",
						"hindi": "मेरे पास मत आना। यह सिस्टम... दुख से टिका हुआ है।"
					},
					"emotion": "base",
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네가 진짜 Mournsnow가 아니라는 걸 알아!",
						"english": "I know you're not the real Mournsnow!",
						"japanese": "お前が本当のモーンスノウじゃないってわかってる！",
						"chinese": "我知道你不是真正的哀雪！",
						"french": "Je sais que tu n'es pas la vraie Mournsnow !",
						"spanish": "¡Sé que no eres el verdadero Mournsnow!",
						"vietnamese": "Ta biết ngươi không phải là Mournsnow thật sự!",
						"thai": "ฉันรู้ว่าแกไม่ใช่ Mournsnow ตัวจริง!",
						"hindi": "मैं जानता हूँ कि तुम असली मोर्नस्नो नहीं हो!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "나는 이 세계의 질서. 과거의 비극을 영원히 보존하는 존재다.",
						"english": "I am the order of this world. An entity that eternally preserves the tragedies of the past.",
						"japanese": "私はこの世界の秩序。過去の悲劇を永遠に保存する存在だ。",
						"chinese": "我是这个世界的秩序。是永远保存过去悲剧的存在。",
						"french": "Je suis l'ordre de ce monde. Une entité qui préserve éternellement les tragédies du passé.",
						"spanish": "Soy el orden de este mundo. Una entidad que preserva eternamente las tragedias del pasado.",
						"vietnamese": "Ta là trật tự của thế giới này. Một thực thể vĩnh viễn bảo tồn những bi kịch của quá khứ.",
						"thai": "ฉันคือระเบียบของโลกนี้ เป็นสิ่งมีชีวิตที่รักษามโศกนาฏกรรมในอดีตไว้ตลอดไป",
						"hindi": "मैं इस दुनिया का क्रम हूँ। एक ऐसी सत्ता जो अतीत की त्रासदियों को शाश्वत रूप से संरक्षित करती है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "boss"
				},
				{
					"speaker": "inka",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "inka",
					"content": {
						"korean": "그게 아니야… 넌 바이킹 아이의 슬픔을 포획당한 모듈일 뿐이야.",
						"english": "That's not it... You're just a module that captured the sorrow of a Viking child.",
						"japanese": "違う…お前はバイキングの子供の悲しみを捕獲されたモジュールに過ぎない。",
						"chinese": "不是那样的……你只是一个捕获了维京孩子悲伤的模块而已。",
						"french": "Ce n'est pas ça… Tu n'es qu'un module qui a capturé la tristesse d'un enfant viking.",
						"spanish": "No es eso... Eres solo un módulo que capturó la tristeza de un niño vikingo.",
						"vietnamese": "Không phải vậy... Ngươi chỉ là một mô-đun đã bị bắt giữ nỗi buồn của một đứa trẻ Viking.",
						"thai": "ไม่ใช่อย่างนั้น... เธอเป็นแค่โมดูลที่กักเก็บความเศร้าของเด็กไวกิ้งไว้เท่านั้น",
						"hindi": "ऐसा नहीं है... तुम बस एक मॉड्यूल हो जिसने एक वाइकिंग बच्चे के दुख को कैद कर लिया है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "inka",
					"type": "speech",
					"content": {
						"korean": "우리가 널 진짜 자유롭게 해줄게.",
						"english": "We'll set you truly free.",
						"japanese": "私たちが君を本当の自由に解放してあげる。",
						"chinese": "我们会让你真正获得自由。",
						"french": "Nous te libérerons vraiment.",
						"spanish": "Nosotros te liberaremos de verdad.",
						"vietnamese": "Chúng ta sẽ thực sự giải thoát ngươi.",
						"thai": "เราจะปลดปล่อยเธอให้เป็นอิสระอย่างแท้จริง",
						"hindi": "हम तुम्हें सचमुच आज़ाद कर देंगे।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "시스템의 사슬을 끊어버리자!",
						"english": "Let's break the chains of the system!",
						"japanese": "システムの鎖を断ち切ろう！",
						"chinese": "斩断系统的枷锁！",
						"french": "Brisons les chaînes du système !",
						"spanish": "¡Rompamos las cadenas del sistema!",
						"vietnamese": "Hãy phá vỡ xiềng xích của hệ thống!",
						"thai": "มาทำลายโซ่ตรวนของระบบกันเถอะ!",
						"hindi": "आओ, सिस्टम की ज़ंजीरों को तोड़ दें!"
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "너희는 이 시스템을 멈출 수 없어. 슬픔은 영원히 반복된다.",
						"english": "You cannot stop this system. Sorrow will repeat forever.",
						"japanese": "君たちにこのシステムを止めることはできない。悲しみは永遠に繰り返される。",
						"chinese": "你们无法阻止这个系统。悲伤将永远重复。",
						"french": "Vous ne pouvez pas arrêter ce système. La tristesse se répétera à jamais.",
						"spanish": "No podéis detener este sistema. La tristeza se repetirá para siempre.",
						"vietnamese": "Các ngươi không thể ngăn chặn hệ thống này. Nỗi buồn sẽ lặp lại mãi mãi.",
						"thai": "พวกเจ้าหยุดระบบนี้ไม่ได้ ความเศร้าจะวนเวียนไปตลอดกาล",
						"hindi": "तुम इस सिस्टम को रोक नहीं सकते। दुःख हमेशा के लिए दोहराया जाएगा।"
					},
					"speaker": "boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "아니… 결코 포기하지 않아. 반드시 널 해방시킬 거야!",
						"english": "No... I will never give up. I will surely free you!",
						"japanese": "いいえ…決して諦めない。必ず君を解放する！",
						"chinese": "不…我绝不放弃。我一定会解放你！",
						"french": "Non... Je n'abandonnerai jamais. Je te libérerai à coup sûr !",
						"spanish": "No... Nunca me rendiré. ¡Te liberaré sin falta!",
						"vietnamese": "Không... Tôi sẽ không bao giờ bỏ cuộc. Tôi nhất định sẽ giải thoát em!",
						"thai": "ไม่... ฉันไม่มีวันยอมแพ้ ฉันจะปลดปล่อยเธออย่างแน่นอน!",
						"hindi": "नहीं... मैं कभी हार नहीं मानूंगा। मैं तुम्हें निश्चित रूप से आज़ाद करूँगा!"
					},
					"speaker": "character_any"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"고요한 설원. 한때 시스템의 거짓으로 뒤덮였던 곳에 진정한 침묵이 찾아왔다.",
			"아이의 슬픔은 마침내 자유로워졌고, 왜곡된 기억들은 제자리를 찾았다.",
			"모든 것이 끝났다. 그러나 완전한 승리였을까, 아니면 또 다른 시작일 뿐일까.",
			"녹아내리는 얼음 틈새로, 새로운 빛이 스며들기 시작했다."
		],
		"english": [
			"A serene snowfield. True silence has arrived where the system's lies once reigned.",
			"The child's sorrow was finally freed, and distorted memories found their place.",
			"All is over. But was it a complete victory, or merely another beginning?",
			"Through the melting ice cracks, a new light began to seep in."
		],
		"japanese": [
			"静寂な雪原。かつてシステムの嘘に覆われていた場所に、真の沈黙が訪れた。",
			"子供の悲しみはついに解放され、歪められた記憶は元の場所に戻った。",
			"全てが終わった。しかし、それは完全な勝利だったのか、それとも単なる新たな始まりに過ぎないのか。",
			"溶けゆく氷の隙間から、新たな光が差し込み始めた。"
		],
		"chinese": [
			"寂静的雪原。系统谎言曾覆盖之地，真正的寂静降临。",
			"孩子的悲伤终获自由，扭曲的记忆回到了原位。",
			"一切都结束了。但这会是一场彻底的胜利，还是仅仅是另一个开始？",
			"融化的冰缝间，新的光芒开始渗透。"
		],
		"french": [
			"Un champ de neige serein. Le vrai silence est arrivé là où les mensonges du système régnaient autrefois.",
			"La tristesse de l'enfant fut enfin libérée, et les souvenirs déformés retrouvèrent leur place.",
			"Tout est fini. Mais fut-ce une victoire complète, ou simplement un autre commencement ?",
			"À travers les fissures de glace fondante, une nouvelle lumière a commencé à s'infiltrer."
		],
		"spanish": [
			"Un campo nevado sereno. El verdadero silencio ha llegado donde las mentiras del sistema reinaron una vez.",
			"La tristeza del niño fue finalmente liberada, y los recuerdos distorsionados encontraron su lugar.",
			"Todo ha terminado. Pero, ¿fue una victoria completa, o simplemente otro comienzo?",
			"A través de las grietas del hielo que se derrite, una nueva luz comenzó a filtrarse."
		],
		"vietnamese": [
			"Cánh đồng tuyết tĩnh lặng. Sự im lặng thật sự đã đến nơi từng bị bao phủ bởi những lời dối trá của hệ thống.",
			"Nỗi buồn của đứa trẻ cuối cùng đã được giải thoát, và những ký ức méo mó đã trở về đúng vị trí.",
			"Mọi thứ đã kết thúc. Nhưng đó có phải là một chiến thắng hoàn toàn, hay chỉ là một khởi đầu khác?",
			"Qua những khe băng tan chảy, một tia sáng mới bắt đầu len lỏi vào."
		],
		"thai": [
			"ทุ่งหิมะอันเงียบสงบ ความเงียบงันที่แท้จริงได้มาถึง ณ สถานที่ที่เคยถูกปกคลุมด้วยคำโกหกของระบบ",
			"ความเศร้าของเด็กน้อยเป็นอิสระในที่สุด และความทรงจำที่บิดเบือนก็ได้กลับสู่ที่ของมัน",
			"ทุกอย่างจบลงแล้ว แต่นี่คือชัยชนะที่สมบูรณ์ หรือเป็นเพียงจุดเริ่มต้นอีกครั้งกันแน่?",
			"แสงใหม่เริ่มเล็ดลอดเข้ามาตามรอยแยกของน้ำแข็งที่ละลาย"
		],
		"hindi": [
			"एक शांत बर्फ़ीला मैदान। जहाँ कभी प्रणाली के झूठ का राज था, वहाँ अब सच्ची शांति छा गई है।",
			"बच्चे का दुख अंततः स्वतंत्र हो गया, और विकृत यादें अपनी जगह पर आ गईं।",
			"सब कुछ खत्म हो गया। लेकिन क्या यह पूर्ण विजय थी, या सिर्फ एक और शुरुआत?",
			"पिघलती बर्फ़ की दरारों से, एक नई रोशनी रिसने लगी।"
		]
	},
	"prologue": {
		"korean": [
			"얼음 심장부. 마침내 시스템의 본체, 무른눈과 대면했다.",
			"슬픔으로 지탱되던 환영. 비극의 진실이 서서히 드러난다.",
			"이 모든 거짓을 끝낼 시간. 우리의 분노가 곧 해방의 불씨가 될 것이다.",
			"끝없는 눈보라 속, 감춰진 기억들이 비명을 지른다."
		],
		"english": [
			"Ice heartland. Finally, face to face with the system's core, The Soft Eye.",
			"A mirage sustained by sorrow. The truth of the tragedy slowly unveils.",
			"Time to end all these lies. Our fury will soon be the spark of liberation.",
			"Amidst the endless blizzard, hidden memories scream."
		],
		"japanese": [
			"氷の心臓部。ついにシステムの本体、ムルンヌンと対峙した。",
			"悲しみに支えられた幻影。悲劇の真実がゆっくりと明らかになる。",
			"この全ての嘘を終わらせる時。我々の怒りが、やがて解放の火種となるだろう。",
			"終わりのない吹雪の中、隠された記憶が叫び声を上げる。"
		],
		"chinese": [
			"冰冻核心。终于，我面对了系统的本体——软眼。",
			"悲伤维系的幻象。悲剧的真相正逐渐浮现。",
			"终结所有谎言之时。我们的愤怒即将成为解放的火花。",
			"无尽的暴风雪中，隐藏的记忆在尖叫。"
		],
		"french": [
			"Au cœur de glace. Enfin, face au corps principal du système, l'Œil Mou.",
			"Une illusion soutenue par la tristesse. La vérité de la tragédie se révèle lentement.",
			"Il est temps de mettre fin à tous ces mensonges. Notre fureur sera bientôt l'étincelle de la libération.",
			"Au milieu du blizzard incessant, des souvenirs cachés hurlent."
		],
		"spanish": [
			"El corazón de hielo. Finalmente, me enfrenté al núcleo del sistema, el Ojo Blando.",
			"Una ilusión sostenida por la tristeza. La verdad de la tragedia se revela lentamente.",
			"Es hora de acabar con todas estas mentiras. Nuestra furia pronto será la chispa de la liberación.",
			"En medio de la ventisca interminable, los recuerdos ocultos gritan."
		],
		"vietnamese": [
			"Trái tim băng giá. Cuối cùng, tôi đã đối mặt với bản thể của hệ thống, Con Mắt Mềm.",
			"Ảo ảnh được duy trì bởi nỗi buồn. Sự thật bi kịch dần hé lộ.",
			"Đã đến lúc kết thúc mọi lời dối trá này. Cơn thịnh nộ của chúng ta sẽ sớm là tia lửa giải phóng.",
			"Giữa bão tuyết vô tận, những ký ức ẩn giấu đang thét gào."
		],
		"thai": [
			"แกนกลางน้ำแข็ง ในที่สุดก็เผชิญหน้ากับแก่นแท้ของระบบ นัยน์ตาอ่อน",
			"ภาพลวงตาที่ถูกหล่อเลี้ยงด้วยความเศร้า ความจริงของโศกนาฏกรรมกำลังเผยออกมาอย่างช้าๆ",
			"ถึงเวลาจบสิ้นทุกคำโกหกนี้ ความโกรธแค้นของเราจะกลายเป็นประกายไฟแห่งการปลดปล่อยในไม่ช้า",
			"ท่ามกลางพายุหิมะอันไม่สิ้นสุด ความทรงจำที่ซ่อนเร้นกำลังกรีดร้อง"
		],
		"hindi": [
			"बर्फीला हृदयस्थल। अंततः, प्रणाली के मूल, मृदु नयन से सामना हुआ।",
			"दुख से टिका भ्रम। त्रासदी का सच धीरे-धीरे सामने आ रहा है।",
			"इन सभी झूठों को खत्म करने का समय आ गया है। हमारा क्रोध जल्द ही मुक्ति की चिंगारी बनेगा।",
			"अंतहीन बर्फीले तूफान में, छिपी हुई यादें चीख रही हैं।"
		]
	}
} as const;
