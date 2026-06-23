export const scenario_desert_cactoblade_6_01 = {
	"scenario_id": "desert_cactoblade_6_01",
	"order": 1,
	"act": "intro",
	"theme": "desert",
	"actors": {
		"kemet": {
			"id": "mon_2f8a1701-571b-40b5-92d9-69aa973cef18",
			"name": {
				"korean": "케메트",
				"english": "Kemet",
				"japanese": "ケメト",
				"chinese": "凯麦特",
				"french": "Kemet",
				"spanish": "Kemet",
				"vietnamese": "Kemet",
				"thai": "เคเมต",
				"hindi": "केमेट"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/fd9e93e0-2874-4647-0076-839718949500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8c3f2690-e8a9-44f5-4527-d8f8d4ea2800/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"황량한 사막. 모래 바람이 모든 것을 집어삼킨다.",
			"고대의 영혼들은 저주에 갇혀, 끝없는 고통을 반복한다.",
			"그 한복판에, 기묘한 선인장 검객이 나타났다.",
			"과연 이 땅의 진실은 무엇인가."
		],
		"english": [
			"Desolate desert. Sandstorms engulf everything.",
			"Ancient souls, trapped by a curse, repeat endless suffering.",
			"In its midst, a peculiar cactus swordsman appeared.",
			"What, then, is the truth of this land?"
		],
		"japanese": [
			"荒涼とした砂漠。砂嵐が全てを飲み込む。",
			"古代の魂は呪いに囚われ、終わりのない苦痛を繰り返す。",
			"その真ん中に、奇妙なサボテン剣士が現れた。",
			"果たして、この地の真実とは何か。"
		],
		"chinese": [
			"荒凉的沙漠。沙尘暴吞噬一切。",
			"古老的灵魂被诅咒束缚，重复着无尽的痛苦。",
			"在这之中，一个奇异的仙人掌剑客出现了。",
			"那么，这片土地的真相究竟是什么？"
		],
		"french": [
			"Désert désolé. Les tempêtes de sable engloutissent tout.",
			"Les âmes antiques, prises au piège d'une malédiction, répètent une souffrance sans fin.",
			"Au milieu de cela, un étrange épéiste cactus apparut.",
			"Alors, quelle est la vérité de cette terre ?"
		],
		"spanish": [
			"Desierto desolado. Las tormentas de arena lo devoran todo.",
			"Almas ancestrales, atrapadas por una maldición, repiten un sufrimiento eterno.",
			"En medio de todo esto, apareció un peculiar espadachín cactus.",
			"¿Entonces, cuál es la verdad de esta tierra?"
		],
		"vietnamese": [
			"Sa mạc hoang vắng. Bão cát nuốt chửng mọi thứ.",
			"Linh hồn cổ xưa, bị nguyền rủa giam cầm, lặp lại nỗi đau vô tận.",
			"Giữa lòng đó, một kiếm khách xương rồng kỳ lạ xuất hiện.",
			"Vậy, sự thật của vùng đất này là gì?"
		],
		"thai": [
			"ทะเลทรายอันว่างเปล่า พายุทรายกลืนกินทุกสิ่ง",
			"วิญญาณโบราณถูกกักขังด้วยคำสาป ซ้ำเติมความทุกข์ทรมานไม่สิ้นสุด",
			"ท่ามกลางสิ่งนั้น นักดาบกระบองเพชรประหลาดได้ปรากฏตัวขึ้น",
			"แท้จริงแล้ว ความจริงของดินแดนแห่งนี้คืออะไร"
		],
		"hindi": [
			"उजाड़ रेगिस्तान। रेतीले तूफान सब कुछ निगल जाते हैं।",
			"प्राचीन आत्माएं, एक शाप में फंसकर, अंतहीन पीड़ा दोहराती हैं।",
			"उसी के बीच, एक अजीब कैक्टस तलवारबाज प्रकट हुआ।",
			"तो, इस भूमि का सच क्या है?"
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
						"korean": "모래폭풍이 휩쓸고 간 자리, 고대 유적의 잔해가 드러났다.",
						"english": "Where the sandstorm swept through, the remains of ancient ruins were revealed.",
						"japanese": "砂嵐が吹き荒れた跡に、古代遺跡の残骸が姿を現した。",
						"chinese": "沙尘暴席卷之后，古老遗迹的残骸显露出来。",
						"french": "Là où la tempête de sable était passée, les vestiges d'anciennes ruines furent révélés.",
						"spanish": "Donde la tormenta de arena arrasó, los restos de antiguas ruinas fueron revelados.",
						"vietnamese": "Nơi bão cát càn quét qua, tàn tích của di tích cổ đại đã lộ ra.",
						"thai": "ในที่ที่พายุทรายพัดผ่านไป เศษซากของโบราณสถานได้ปรากฏขึ้น",
						"hindi": "जहाँ रेतीले तूफान ने सब कुछ उड़ा दिया था, वहाँ प्राचीन खंडहरों के अवशेष सामने आए।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이게 '바람의 심장' 유적?",
						"english": "Is this the \"Heart of Wind\" ruins?",
						"japanese": "これが「風の心臓」遺跡か？",
						"chinese": "这是“风之心”遗迹？",
						"french": "C'est les ruines du « Cœur du Vent » ?",
						"spanish": "¿Estas son las ruinas del \"Corazón del Viento\"?",
						"vietnamese": "Đây là di tích \"Trái tim gió\" ư?",
						"thai": "นี่คือซากปรักหักพังของ \"หัวใจแห่งลม\" หรือไม่?",
						"hindi": "क्या यह \"पवन का हृदय\" खंडहर है?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그때, 기이한 형체가 모습을 드러냈다. 선인장 검객, {random_boss}였다.",
						"english": "Then, a strange figure appeared. It was the cactus swordsman, {random_boss}.",
						"japanese": "その時、奇妙な姿が現れた。サボテン剣士、{random_boss}だった。",
						"chinese": "此时，一个奇异的身影出现了。正是仙人掌剑客，{random_boss}。",
						"french": "Alors, une étrange silhouette apparut. C'était l'épéiste cactus, {random_boss}.",
						"spanish": "Entonces, una extraña figura apareció. Era el espadachín cactus, {random_boss}.",
						"vietnamese": "Lúc đó, một hình dáng kỳ lạ xuất hiện. Đó là kiếm khách xương rồng, {random_boss}.",
						"thai": "ทันใดนั้น ร่างประหลาดก็ได้ปรากฏตัวขึ้น นั่นคือนักดาบกระบองเพชร, {random_boss}",
						"hindi": "तभी, एक अजीब आकृति प्रकट हुई। यह कैक्टस तलवारबाज, {random_boss} था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "크으으…! 나에게… 도전할 용기 있는 자, 없느냐…?",
						"english": "Grrr...! Is there no one... brave enough to challenge me...?",
						"japanese": "うおおお…！我に…挑む勇気ある者、おらぬか…？",
						"chinese": "呃啊啊…！就没有…敢挑战我的人吗…？",
						"french": "Grrr...! N'y a-t-il personne... d'assez courageux pour me défier...?",
						"spanish": "¡Grrr...! ¿No hay nadie... con el valor de desafiarme...?",
						"vietnamese": "Grừừừ...! Không có ai... đủ dũng cảm để thách đấu ta sao...?",
						"thai": "ครืออออ…! ไม่มีใคร…กล้าพอที่จะท้าทายข้าเลยหรือ…?",
						"hindi": "ग्र्र्र...! क्या कोई नहीं है... जो मुझे चुनौती देने की हिम्मत रखता हो...?"
					}
				},
				{
					"content": {
						"korean": "검무가… 너무 서툰데?",
						"english": "Your sword dance... is too clumsy?",
						"japanese": "剣舞が…あまりにも下手だな？",
						"chinese": "剑舞…也太笨拙了吧？",
						"french": "Votre danse de l'épée... est trop maladroite ?",
						"spanish": "¿Tu danza de espada... es demasiado torpe?",
						"vietnamese": "Kiếm vũ... vụng về quá nhỉ?",
						"thai": "ระบำดาบ…ดูเก้กังไปหน่อยนะ?",
						"hindi": "तुम्हारी तलवारबाजी... बहुत अनाड़ी है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "kemet",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "kemet",
					"type": "speech",
					"content": {
						"korean": "저 영혼은 뒤틀린 명예에 갇혔어. 이 사막의 모든 영혼처럼.",
						"english": "That soul is trapped by twisted honor. Like all souls in this desert.",
						"japanese": "あの魂は歪んだ名誉に囚われている。この砂漠の全ての魂のように。",
						"chinese": "那个灵魂被扭曲的荣耀所困。就像这沙漠里所有的灵魂一样。",
						"french": "Cette âme est piégée par un honneur tordu. Comme toutes les âmes de ce désert.",
						"spanish": "Esa alma está atrapada por un honor retorcido. Como todas las almas de este desierto.",
						"vietnamese": "Linh hồn đó bị mắc kẹt bởi danh dự vặn vẹo. Giống như mọi linh hồn trong sa mạc này.",
						"thai": "วิญญาณนั้นถูกจองจำด้วยเกียรติยศที่บิดเบี้ยว เหมือนกับวิญญาณทั้งหมดในทะเลทรายแห่งนี้",
						"hindi": "वह आत्मा विकृत सम्मान से फंसी हुई है। इस रेगिस्तान की सभी आत्माओं की तरह।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "뒤틀렸다고?",
						"english": "Twisted?",
						"japanese": "歪んでるって？",
						"chinese": "扭曲了？",
						"french": "Tordu ?",
						"spanish": "¿Retorcido?",
						"vietnamese": "Méo mó sao?",
						"thai": "บิดเบี้ยว?",
						"hindi": "विकृत?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kemet",
					"emotion": "base",
					"content": {
						"korean": "진실을 알아야 해. 조력자가 필요할 거야. 아미르를 찾아봐.",
						"english": "You must learn the truth. You'll need an ally. Seek Amir.",
						"japanese": "真実を知る必要がある。協力者が必要だ。アミールを探せ。",
						"chinese": "你必须知道真相。你需要一个帮手。去找阿米尔吧。",
						"french": "Tu dois connaître la vérité. Un allié te sera nécessaire. Trouve Amir.",
						"spanish": "Debes conocer la verdad. Necesitarás un aliado. Busca a Amir.",
						"vietnamese": "Ngươi phải biết sự thật. Ngươi sẽ cần một đồng minh. Hãy tìm Amir.",
						"thai": "เจ้าต้องรู้ความจริง เจ้าจะต้องมีผู้ช่วย จงตามหาอามีร์",
						"hindi": "तुम्हें सच जानना होगा। तुम्हें एक सहायक की आवश्यकता होगी। अमीर को ढूँढो।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "kemet"
				},
				{
					"speaker": "kemet",
					"type": "speech",
					"content": {
						"korean": "이 사막의 영혼들은 알 수 없는 고통에 갇혀있어.",
						"english": "The souls of this desert are trapped in an unknown agony.",
						"japanese": "この砂漠の魂たちは、知られざる苦痛に囚われている。",
						"chinese": "这片沙漠的灵魂被困在未知的痛苦中。",
						"french": "Les âmes de ce désert sont prisonnières d'une agonie inconnue.",
						"spanish": "Las almas de este desierto están atrapadas en una agonía desconocida.",
						"vietnamese": "Các linh hồn của sa mạc này bị mắc kẹt trong một nỗi đau không tên.",
						"thai": "วิญญาณแห่งทะเลทรายนี้ถูกจองจำในความเจ็บปวดอันไร้ที่มา",
						"hindi": "इस रेगिस्तान की आत्माएँ एक अज्ञात पीड़ा में फँसी हुई हैं।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그 고통의 원인은?",
						"english": "The cause of that agony?",
						"japanese": "その苦痛の原因は？",
						"chinese": "那痛苦的根源是什么？",
						"french": "La cause de cette agonie ?",
						"spanish": "¿La causa de esa agonía?",
						"vietnamese": "Nguyên nhân của nỗi đau đó là gì?",
						"thai": "สาเหตุของความเจ็บปวดนั้นคืออะไร?",
						"hindi": "उस पीड़ा का कारण क्या है?"
					},
					"emotion": "base"
				},
				{
					"speaker": "kemet",
					"type": "speech",
					"content": {
						"korean": "아미르는 지식이 많아. 그가 단서를 줄지도 몰라.",
						"english": "Amir is knowledgeable. He might offer clues.",
						"japanese": "アミールは知識が豊富だ。彼が手がかりをくれるかもしれない。",
						"chinese": "阿米尔知识渊博。他或许能提供线索。",
						"french": "Amir est érudit. Il pourrait nous donner des indices.",
						"spanish": "Amir tiene mucho conocimiento. Podría darnos pistas.",
						"vietnamese": "Amir rất uyên bác. Anh ta có thể cung cấp manh mối.",
						"thai": "อามีร์มีความรู้มาก เขาอาจให้เบาะแสได้",
						"hindi": "अमीर बहुत ज्ञानी है। वह सुराग दे सकता है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "멀리서, 아미르가 은밀히 빛나는 돌멩이들을 모으는 것이 보였다.",
						"english": "From a distance, Amir was seen secretly collecting glowing stones.",
						"japanese": "遠くから、アミールが密かに光る石を集めているのが見えた。",
						"chinese": "远处，看到阿米尔正在秘密收集发光的石头。",
						"french": "Au loin, Amir fut aperçu collectant secrètement des pierres lumineuses.",
						"spanish": "A lo lejos, se vio a Amir recolectando secretamente piedras brillantes.",
						"vietnamese": "Từ xa, có thể thấy Amir đang lén lút thu thập những viên đá phát sáng.",
						"thai": "จากระยะไกล อามีร์ถูกพบเห็นกำลังแอบเก็บก้อนหินที่เรืองแสง",
						"hindi": "दूर से, अमीर को गुप्त रूप से चमकते पत्थर इकट्ठा करते देखा गया।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "…지금 뭐하는 거지?",
						"english": "...What is he doing?",
						"japanese": "…今、何をしているんだ？",
						"chinese": "……他现在在做什么？",
						"french": "...Que fait-il ?",
						"spanish": "¿...Qué está haciendo?",
						"vietnamese": "...Bây giờ anh ta đang làm gì vậy?",
						"thai": "...เขากำลังทำอะไรอยู่?",
						"hindi": "...वह अब क्या कर रहा है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "kemet",
					"type": "speech",
					"content": {
						"korean": "…어서, 마을로 향해.",
						"english": "...Hurry, head for the village.",
						"japanese": "…早く、村へ向かえ。",
						"chinese": "……快，前往村庄。",
						"french": "...Vite, direction le village.",
						"spanish": "...Rápido, dirígete a la aldea.",
						"vietnamese": "...Mau lên, đến làng đi.",
						"thai": "...เร็วเข้า มุ่งหน้าสู่หมู่บ้าน",
						"hindi": "...जल्दी, गाँव की ओर बढ़ो।"
					},
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "kemet",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "고대 유적의 벽화엔 '쓸모없는 검'이라 낙인찍힌 자가 있어.",
						"english": "In the ancient ruins' murals, there is one branded as the 'Useless Sword'.",
						"japanese": "古代遺跡の壁画には、『役立たずの剣』と烙印を押された者がいる。",
						"chinese": "在古代遗迹的壁画中，有一个被烙印为'无用之剑'的人。",
						"french": "Sur les fresques des ruines antiques, quelqu'un est marqué du sceau de l''Épée Inutile'.",
						"spanish": "En los murales de las ruinas antiguas, hay alguien marcado como la 'Espada Inútil'.",
						"vietnamese": "Trên bích họa của di tích cổ đại, có một người bị đóng dấu là 'Thanh kiếm vô dụng'.",
						"thai": "ในภาพฝาผนังของโบราณสถาน มีผู้หนึ่งถูกตราหน้าว่าเป็น 'ดาบไร้ประโยชน์'",
						"hindi": "प्राचीन खंडहरों के भित्तिचित्रों में, एक ऐसा है जिसे 'बेकार तलवार' का ठप्पा लगा है।"
					},
					"emotion": "base",
					"speaker": "kemet",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그게 {random_boss}와 관련 있나?",
						"english": "Is that related to {random_boss}?",
						"japanese": "それは{random_boss}と関係があるのか？",
						"chinese": "那和{random_boss}有关吗？",
						"french": "Est-ce lié à {random_boss} ?",
						"spanish": "¿Eso está relacionado con {random_boss}?",
						"vietnamese": "Điều đó có liên quan đến {random_boss} không?",
						"thai": "นั่นเกี่ยวข้องกับ {random_boss} หรือไม่?",
						"hindi": "क्या उसका संबंध {random_boss} से है?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그 옆엔 기묘한 문양의 검이 그려져 있었지. 저주를 풀어줄 실마리일지도.",
						"english": "Beside it, a sword with a strange pattern was drawn. It might be a clue to lift the curse.",
						"japanese": "その隣には奇妙な模様の剣が描かれていた。呪いを解く手がかりかもしれない。",
						"chinese": "旁边画着一把图案奇特的剑。或许是解除诅咒的线索。",
						"french": "À côté, une épée au motif étrange était dessinée. Ce pourrait être un indice pour lever la malédiction.",
						"spanish": "A su lado, había una espada con un patrón peculiar. Podría ser una pista para levantar la maldición.",
						"vietnamese": "Bên cạnh nó, một thanh kiếm với hoa văn kỳ lạ được vẽ. Nó có thể là manh mối để giải lời nguyền.",
						"thai": "ถัดจากนั้น มีดาบที่มีลวดลายแปลกประหลาดวาดอยู่ นี่อาจเป็นเบาะแสที่จะถอนคำสาป",
						"hindi": "उसके बगल में, एक अजीब पैटर्न वाली तलवार खींची हुई थी। शायद यह अभिशाप को तोड़ने का सुराग हो।"
					},
					"type": "speech",
					"speaker": "kemet"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "더 알아봐야겠어.",
						"english": "I need to find out more.",
						"japanese": "もっと調べる必要がある。",
						"chinese": "我得了解更多。",
						"french": "Je dois en savoir plus.",
						"spanish": "Necesito saber más.",
						"vietnamese": "Tôi cần tìm hiểu thêm.",
						"thai": "ฉันต้องหาข้อมูลเพิ่มเติม",
						"hindi": "मुझे और जानना होगा।"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "kemet"
				},
				{
					"content": {
						"korean": "이 사막은 겉모습보다 훨씬 깊은 고통을 품고 있어.",
						"english": "This desert holds a pain far deeper than its appearance suggests.",
						"japanese": "この砂漠は、見た目よりもずっと深い苦痛を抱えている。",
						"chinese": "这片沙漠蕴含着比表面更深的痛苦。",
						"french": "Ce désert cache une douleur bien plus profonde qu'il n'y paraît.",
						"spanish": "Este desierto guarda un dolor mucho más profundo de lo que parece.",
						"vietnamese": "Sa mạc này chứa đựng nỗi đau sâu sắc hơn nhiều so với vẻ ngoài của nó.",
						"thai": "ทะเลทรายแห่งนี้ซ่อนความเจ็บปวดที่ลึกซึ้งกว่ารูปลักษณ์ภายนอก",
						"hindi": "यह रेगिस्तान अपनी दिखावट से कहीं ज़्यादा गहरा दर्द समेटे हुए है।"
					},
					"emotion": "sad",
					"speaker": "kemet",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "두려워할 때가 아니야. 진실을 파헤쳐야 해.",
						"english": "This is no time for fear. We must uncover the truth.",
						"japanese": "恐れている場合じゃない。真実を暴かねば。",
						"chinese": "现在不是害怕的时候。我们必须揭露真相。",
						"french": "Ce n'est pas le moment d'avoir peur. Il faut déterrer la vérité.",
						"spanish": "No es momento de temer. Debemos desenterrar la verdad.",
						"vietnamese": "Đây không phải lúc để sợ hãi. Chúng ta phải phơi bày sự thật.",
						"thai": "ไม่ใช่เวลาที่จะกลัว เราต้องเปิดเผยความจริง",
						"hindi": "डरने का समय नहीं है। हमें सच्चाई का पता लगाना होगा।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "kemet",
					"emotion": "base",
					"content": {
						"korean": "…조심해. 진실은 때로 더 날카로운 칼날이 되니.",
						"english": "...Be careful. The truth can sometimes be a sharper blade.",
						"japanese": "…気をつけろ。真実は時に、より鋭い刃となるからな。",
						"chinese": "……小心。真相有时会成为更锋利的刀刃。",
						"french": "...Sois prudent. La vérité peut parfois être une lame plus tranchante.",
						"spanish": "...Ten cuidado. La verdad a veces puede ser una hoja más afilada.",
						"vietnamese": "...Hãy cẩn thận. Sự thật đôi khi có thể là một lưỡi dao sắc bén hơn.",
						"thai": "...ระวังให้ดี ความจริงบางครั้งก็เป็นคมมีดที่คมกว่า",
						"hindi": "संभलकर रहना। सच कभी-कभी एक तेज़ धार वाला हथियार बन जाता है।"
					}
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크으윽… 겨우… 여기까지 왔는데… 아미르… 너마저…",
						"english": "Ugh... I barely... made it this far... Amir... even you...?",
						"japanese": "くうっ…やっと…ここまで来たのに…アミール…お前まで…。",
						"chinese": "呃……好不容易……才走到这里……阿米尔……连你也要……",
						"french": "Ugh... j'ai à peine... réussi à venir jusqu'ici... Amir... même toi...?",
						"spanish": "Ugh... apenas... llegué hasta aquí... Amir... ¿tú también...?",
						"vietnamese": "Khụ... Khó khăn lắm... mới đến được đây... Amir... ngay cả ngươi...?",
						"thai": "อึก... แค่... มาถึงตรงนี้... อามีร์... แม้แต่เจ้าก็...?",
						"hindi": "उफ़... मैं बस... यहीं तक आ पाया... अमीर... तुम भी...?"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "아미르…?",
						"english": "Amir...?",
						"japanese": "アミール…？",
						"chinese": "阿米尔……？",
						"french": "Amir...?",
						"spanish": "¿Amir...?",
						"vietnamese": "Amir...?",
						"thai": "อามีร์...?",
						"hindi": "अमीर...?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "쓰러진 검객의 혼은 사막 깊숙이 스며들었다. 의문만 남긴 채.",
						"english": "The fallen swordsman's soul seeped deep into the desert, leaving only questions.",
						"japanese": "倒れた剣士の魂は砂漠の奥深くへと染み込んだ。ただ疑問だけを残して。",
						"chinese": "倒下的剑客之魂渗入沙漠深处，只留下疑问。",
						"french": "L'âme du bretteur vaincu s'est infiltrée au plus profond du désert, ne laissant que des questions.",
						"spanish": "El alma del espadachín caído se filtró en lo profundo del desierto, dejando solo preguntas.",
						"vietnamese": "Linh hồn kiếm sĩ ngã xuống thấm sâu vào lòng sa mạc, chỉ để lại những thắc mắc.",
						"thai": "วิญญาณของนักดาบที่ล้มลงซึมลึกเข้าไปในทะเลทราย ทิ้งไว้เพียงคำถาม.",
						"hindi": "गिरे हुए तलवारबाज की आत्मा रेगिस्तान की गहराइयों में समा गई, केवल प्रश्न छोड़कर।"
					}
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "드디어… 진정한 명예를 되찾을 때가 왔다…!",
						"english": "Finally... the time has come to reclaim true honor...!",
						"japanese": "ついに…真の栄誉を取り戻す時が来た…！",
						"chinese": "终于……是时候夺回真正的荣耀了……！",
						"french": "Enfin... le moment est venu de retrouver le véritable honneur...!",
						"spanish": "¡Finalmente... ha llegado el momento de recuperar el verdadero honor...!",
						"vietnamese": "Cuối cùng... đã đến lúc đòi lại danh dự đích thực...!",
						"thai": "ในที่สุด... เวลาที่จะทวงคืนเกียรติยศที่แท้จริงก็มาถึงแล้ว...!",
						"hindi": "आखिरकार... सच्चे सम्मान को वापस पाने का समय आ गया है...!"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "뒤틀린 명예는 아무 의미 없어!",
						"english": "Twisted honor means nothing!",
						"japanese": "歪んだ栄誉に意味はない！",
						"chinese": "扭曲的荣耀毫无意义！",
						"french": "L'honneur tordu n'a aucun sens !",
						"spanish": "¡El honor retorcido no significa nada!",
						"vietnamese": "Danh dự vặn vẹo chẳng có ý nghĩa gì!",
						"thai": "เกียรติยศที่บิดเบี้ยวไม่มีความหมาย!",
						"hindi": "विकृत सम्मान का कोई मतलब नहीं!"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "가까이 오지 마라! 이 검은… 무적이다…!",
						"english": "Don't come closer! This sword... is invincible...!",
						"japanese": "近寄るな！この剣は…無敵だ…！",
						"chinese": "别过来！这把剑……是无敌的……！",
						"french": "Ne t'approche pas ! Cette épée... est invincible...!",
						"spanish": "¡No te acerques! ¡Esta espada... es invencible...!",
						"vietnamese": "Đừng lại gần! Thanh kiếm này... là bất khả chiến bại...!",
						"thai": "อย่าเข้ามาใกล้! ดาบเล่มนี้... ไร้เทียมทาน...!",
						"hindi": "पास मत आना! यह तलवार... अजेय है...!"
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "고작 이 정도인가… 진정한 검을 알지도 못하고…",
						"english": "Is this all...? You know nothing of true swordsmanship...",
						"japanese": "これだけか… 真の剣を知らぬとは…",
						"chinese": "就这点程度吗… 连真剑都未曾知晓…",
						"french": "C'est tout ce que tu as...? Tu ne connais rien à la véritable épée...",
						"spanish": "¿Esto es todo...? Ni siquiera conoces la verdadera espada...",
						"vietnamese": "Chỉ có thế này thôi sao... Ngươi còn chẳng biết kiếm đạo chân chính...",
						"thai": "แค่นี้เองรึ… เจ้ายังไม่รู้จักดาบที่แท้จริงเลย…",
						"hindi": "बस इतना ही...? तुम्हें सच्ची तलवारबाजी का ज्ञान ही नहीं..."
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…다시 한번! 멈추지 않아!",
						"english": "...One more time! I won't stop!",
						"japanese": "…もう一度だ！止まらない！",
						"chinese": "…再来一次！我不会停下！",
						"french": "...Une fois de plus ! Je ne m'arrêterai pas !",
						"spanish": "¡...Una vez más! ¡No me detendré!",
						"vietnamese": "...Một lần nữa! Ta sẽ không dừng lại!",
						"thai": "...อีกครั้ง! ข้าจะไม่หยุด!",
						"hindi": "...एक बार फिर! मैं नहीं रुकूँगा!"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 15
		}
	]
} as const;
