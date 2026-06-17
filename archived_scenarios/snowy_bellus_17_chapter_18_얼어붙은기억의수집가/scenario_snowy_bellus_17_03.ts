export const scenario_snowy_bellus_17_03 = {
	"scenario_id": "snowy_bellus_17_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"ivar": {
			"id": "mon_d8a80adc-9315-47b5-8c30-97ce33672bce",
			"name": {
				"korean": "이바르",
				"english": "Ivar",
				"japanese": "イヴァー",
				"chinese": "伊瓦尔",
				"french": "Ivar",
				"spanish": "Ivar",
				"vietnamese": "Ivar",
				"thai": "ไอวาร์",
				"hindi": "इवर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8dd7872b-d4df-44fd-b1a1-083a9156e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2622fb62-daf4-42d1-a83b-2b78869d3e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "영원의 설원, 그 깊은 곳으로 향하는 길. 차가운 바람이 과거를 속삭였다.",
						"english": "The path into the depths of the Eternal Snowfield. Cold winds whispered of the past.",
						"japanese": "永遠の雪原、その深奥へと続く道。冷たい風が過去を囁いた。",
						"chinese": "永恒雪原深处之路。寒风低语着过往。",
						"french": "Le chemin vers les profondeurs de la Plaine Éternelle. Des vents froids murmuraient le passé.",
						"spanish": "El camino hacia las profundidades del Campo de Nieve Eterno. Vientos fríos susurraban el pasado.",
						"vietnamese": "Con đường dẫn vào sâu thẳm Tuyết nguyên vĩnh cửu. Gió lạnh thì thầm về quá khứ.",
						"thai": "เส้นทางสู่ห้วงลึกของทุ่งหิมะนิรันดร์ ลมหนาวกระซิบเรื่องราวในอดีต",
						"hindi": "शाश्वत हिमक्षेत्र की गहराइयों का मार्ग। ठंडी हवाएँ अतीत की फुसफुसाहट कर रही थीं।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이 추위, 익숙해질 수가 없군.",
						"english": "This cold, I can't get used to it.",
						"japanese": "この寒さ、慣れることができん。",
						"chinese": "这寒冷，无法习惯。",
						"french": "Ce froid, je ne peux pas m'y habituer.",
						"spanish": "Este frío, no puedo acostumbrarme.",
						"vietnamese": "Cái lạnh này, không thể quen được.",
						"thai": "ความหนาวนี้ ข้าไม่อาจชินได้",
						"hindi": "यह ठंड, मैं इसकी आदत नहीं डाल सकता।"
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "ivar",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "강함은 이런 고난 속에서 증명되는 법.",
						"english": "Strength is proven amidst such hardships.",
						"japanese": "強さはこのような苦難の中でこそ証明されるものだ。",
						"chinese": "强大正是在这种苦难中得以证明。",
						"french": "La force se prouve au milieu de telles épreuves.",
						"spanish": "La fuerza se demuestra en tales adversidades.",
						"vietnamese": "Sức mạnh được chứng minh giữa những gian nan như thế này.",
						"thai": "ความแข็งแกร่งจะถูกพิสูจน์ในความยากลำบากเช่นนี้",
						"hindi": "शक्ति ऐसी कठिनाइयों के बीच ही सिद्ध होती है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "벨루스의 흔적은 이곳에 널려 있다. 더 강한 것을 찾기 위해.",
						"english": "Traces of Bellus are scattered here. To seek something stronger.",
						"japanese": "ベルスの痕跡はここに散らばっている。より強大なものを探すために。",
						"chinese": "贝鲁斯的痕迹遍布此处。为了寻找更强大的事物。",
						"french": "Les traces de Bellus sont éparpillées ici. Pour chercher quelque chose de plus puissant.",
						"spanish": "Las huellas de Bellus están esparcidas aquí. Para buscar algo más fuerte.",
						"vietnamese": "Dấu vết của Bellus nằm rải rác khắp nơi. Để tìm kiếm thứ gì đó mạnh hơn.",
						"thai": "ร่องรอยของเบลลัสกระจัดกระจายอยู่ที่นี่ เพื่อค้นหาสิ่งที่แข็งแกร่งกว่า",
						"hindi": "बेलस के निशान यहाँ बिखरे पड़े हैं। कुछ और मजबूत खोजने के लिए।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "ivar",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이것은… 고대 문명의 유물인가. 벨루스가 수집하던 것들.",
						"english": "This is... an artifact of an ancient civilization? Things Bellus collected.",
						"japanese": "これは…古代文明の遺物か。ベルスが収集していたもの。",
						"chinese": "这是…古代文明的遗物吗？贝鲁斯曾收集的东西。",
						"french": "Ceci est... un artefact d'une civilisation ancienne ? Des choses que Bellus collectionnait.",
						"spanish": "Esto es... ¿un artefacto de una civilización antigua? Cosas que Bellus coleccionaba.",
						"vietnamese": "Đây là... di vật của một nền văn minh cổ đại sao? Những thứ Bellus từng thu thập.",
						"thai": "นี่คือ...วัตถุโบราณของอารยธรรมโบราณหรือ? สิ่งที่เบลลัสรวบรวม",
						"hindi": "यह है... एक प्राचीन सभ्यता का अवशेष? वे चीजें जो बेलस इकट्ठा करता था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "이바르는 얼어붙은 유물 속에서 희미한 기록들을 발견한다.",
						"english": "Ivar discovers faint records within the frozen artifact.",
						"japanese": "イヴァルは凍りついた遺物の中からかすかな記録を発見する。",
						"chinese": "伊瓦尔在冰冻的遗物中发现了模糊的记录。",
						"french": "Ivar découvre de faibles traces dans l'artefact gelé.",
						"spanish": "Ivar descubre débiles registros dentro del artefacto congelado.",
						"vietnamese": "Ivar phát hiện những ghi chép mờ nhạt bên trong di vật đóng băng.",
						"thai": "อีวาร์พบข้อความเลือนรางในวัตถุโบราณที่แข็งตัว",
						"hindi": "इवार को जमे हुए अवशेष के भीतर अस्पष्ट अभिलेख मिलते हैं।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "뭐가 보여?",
						"english": "What do you see?",
						"japanese": "何が見える？",
						"chinese": "你看到了什么？",
						"french": "Qu'est-ce que tu vois ?",
						"spanish": "¿Qué ves?",
						"vietnamese": "Anh thấy gì?",
						"thai": "คุณเห็นอะไร?",
						"hindi": "तुम्हें क्या दिख रहा है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "벨루스는… 세상을 '구원'하려 했다고? 파괴될 미래에서….",
						"english": "Bellus... tried to 'save' the world? From a future that would be destroyed...",
						"japanese": "ベルスは…世界を「救おう」としたのか？破滅する未来から…。",
						"chinese": "贝卢斯……想“拯救”世界？从一个将被毁灭的未来……",
						"french": "Bellus... a essayé de 'sauver' le monde ? D'un futur voué à la destruction...",
						"spanish": "¿Bellus... intentó 'salvar' el mundo? ¿De un futuro que sería destruido...?",
						"vietnamese": "Bellus... đã cố gắng 'cứu' thế giới? Từ một tương lai sẽ bị hủy diệt...",
						"thai": "เบลลัส... พยายาม 'กอบกู้' โลกงั้นหรือ? จากอนาคตที่จะถูกทำลาย...",
						"hindi": "बेलस... दुनिया को 'बचाने' की कोशिश कर रहा था? एक ऐसे भविष्य से जो नष्ट हो जाएगा..."
					},
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "말도 안 돼. 이 차가운 집착이 구원이라고?",
						"english": "Nonsense. This cold obsession is salvation?",
						"japanese": "馬鹿な。この冷たい執着が救済だと？",
						"chinese": "胡说。这种冰冷的执念就是救赎？",
						"french": "Absurde. Cette froide obsession est le salut ?",
						"spanish": "Tonterías. ¿Esta fría obsesión es la salvación?",
						"vietnamese": "Vô lý. Sự ám ảnh lạnh lẽo này là sự cứu rỗi ư?",
						"thai": "ไร้สาระ ความหลงใหลอันเยือกเย็นนี้คือความรอดหรือ?",
						"hindi": "बकवास। यह ठंडी सनक मोक्ष है?"
					},
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그게 무슨 소리야?",
						"english": "What does that mean?",
						"japanese": "それはどういう意味だ？",
						"chinese": "那是什么意思？",
						"french": "Qu'est-ce que ça veut dire ?",
						"spanish": "¿Qué significa eso?",
						"vietnamese": "Ý anh là gì?",
						"thai": "นั่นหมายความว่าอะไร?",
						"hindi": "उसका क्या मतलब है?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "그 순간, 탐험대에게 파괴된 미래의 환상이 스쳐 지나갔다.",
						"english": "At that moment, a vision of a destroyed future flashed through the expedition team.",
						"japanese": "その瞬間、探検隊に破壊された未来の幻影がよぎった。",
						"chinese": "就在那一刻，一支被毁灭的未来幻象掠过探险队。",
						"french": "À cet instant, une vision d'un futur détruit traversa l'esprit de l'équipe d'expédition.",
						"spanish": "En ese momento, una visión de un futuro destruido pasó por la mente del equipo de expedición.",
						"vietnamese": "Ngay lúc đó, một ảo ảnh về tương lai bị hủy diệt chợt lướt qua đội thám hiểm.",
						"thai": "ในขณะนั้น ภาพหลอนของอนาคตที่ถูกทำลายได้วาบผ่านทีมสำรวจไป",
						"hindi": "उसी क्षण, अभियान दल के सामने एक नष्ट हुए भविष्य का भ्रम कौंध गया।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "윽… 이 느낌은…?",
						"english": "Ugh... What is this feeling...?",
						"japanese": "うっ…この感覚は…？",
						"chinese": "呃…这种感觉是…？",
						"french": "Ugh... Qu'est-ce que c'est que ce sentiment...?",
						"spanish": "Ugh... ¿Qué es esta sensación...?",
						"vietnamese": "Ưm... Cảm giác này là...?",
						"thai": "อึก... ความรู้สึกนี้คือ...?",
						"hindi": "उफ़... यह कैसा एहसास है...?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "그 환상은… 벨루스가 본 파괴될 미래인가?",
						"english": "That vision... Is it the destroyed future Bellus saw?",
						"japanese": "あの幻影は…ベルスが見た破滅する未来なのか？",
						"chinese": "那个幻象…是贝卢斯看到的将被毁灭的未来吗？",
						"french": "Cette vision... Est-ce le futur détruit que Bellus a vu ?",
						"spanish": "Esa visión... ¿Es el futuro destruido que Bellus vio?",
						"vietnamese": "Ảo ảnh đó... Có phải là tương lai bị hủy diệt mà Bellus đã thấy không?",
						"thai": "ภาพหลอนนั้น... คืออนาคตที่ถูกทำลายที่เบลลัสเห็นหรือ?",
						"hindi": "वह भ्रम... क्या यह वह नष्ट हुआ भविष्य है जो बेलस ने देखा था?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "도대체 뭘 보고 세상을 얼리려 한 거지?",
						"english": "What on earth did he see to try and freeze the world?",
						"japanese": "一体何を見て世界を凍らせようとしたんだ？",
						"chinese": "他到底看到了什么，竟然试图冰封世界？",
						"french": "Qu'a-t-il bien pu voir pour tenter de geler le monde ?",
						"spanish": "¿Qué diablos vio para intentar congelar el mundo?",
						"vietnamese": "Rốt cuộc anh ta đã thấy gì mà lại muốn đóng băng thế giới?",
						"thai": "เขาเห็นอะไรถึงพยายามแช่แข็งโลก?",
						"hindi": "आखिर उसने क्या देखा कि दुनिया को जमाने की कोशिश की?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "그의 '구원'이 세상의 파괴를 의미한다면… 그것은 광기다.",
						"english": "If his 'salvation' means the destruction of the world... then it is madness.",
						"japanese": "もし彼の「救済」が世界の破壊を意味するなら…それは狂気だ。",
						"chinese": "如果他的“救赎”意味着世界的毁灭……那么那就是疯狂。",
						"french": "Si son 'salut' signifie la destruction du monde... alors c'est de la folie.",
						"spanish": "Si su 'salvación' significa la destrucción del mundo... entonces es una locura.",
						"vietnamese": "Nếu 'sự cứu rỗi' của anh ta có nghĩa là sự hủy diệt thế giới... thì đó là sự điên rồ.",
						"thai": "ถ้า 'ความรอด' ของเขาหมายถึงการทำลายโลก... นั่นคือความบ้าคลั่ง",
						"hindi": "यदि उसकी 'मुक्ति' का अर्थ दुनिया का विनाश है... तो यह पागलपन है।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "하지만… 그가 정말로 세상을 지키려 했다면… 무엇이 그를 이끈 걸까.",
						"english": "But... if he truly sought to protect the world... what led him?",
						"japanese": "しかし…彼が本当に世界を守ろうとしたのなら…何が彼を導いたのだろうか。",
						"chinese": "可是…如果他真的想守护世界…又是什么指引了他呢？",
						"french": "Mais... s'il cherchait vraiment à protéger le monde... qu'est-ce qui l'a guidé ?",
						"spanish": "Pero... si realmente intentó proteger el mundo... ¿qué lo guio?",
						"vietnamese": "Nhưng... nếu hắn thật sự muốn bảo vệ thế giới... điều gì đã dẫn dắt hắn?",
						"thai": "แต่... ถ้าเขาต้องการปกป้องโลกจริงๆ... อะไรกันที่นำทางเขามา?",
						"hindi": "लेकिन... अगर उसने सच में दुनिया को बचाने की कोशिश की... तो उसे किसने निर्देशित किया होगा?"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "ivar",
					"duration_ms": 500,
					"spot": [
						4,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "점점 더 깊이 들어가는군. 이곳의 시간은 뒤틀려 있다.",
						"english": "We're going deeper. Time here is warped.",
						"japanese": "どんどん深部へ。ここは時間が歪んでいる。",
						"chinese": "越陷越深。这里的时间是扭曲的。",
						"french": "On s'enfonce toujours plus. Le temps est distordu ici.",
						"spanish": "Cada vez más profundo. El tiempo aquí está distorsionado.",
						"vietnamese": "Càng lúc càng đi sâu. Thời gian ở đây đã bị bóp méo.",
						"thai": "ยิ่งลึกลงไปอีก เวลานี้ถูกบิดเบือน",
						"hindi": "हम और गहरे जा रहे हैं। यहां का समय विकृत है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "돌아갈 수 없을지도 몰라.",
						"english": "There might be no turning back.",
						"japanese": "もう引き返せないかもしれない。",
						"chinese": "也许回不去了。",
						"french": "On ne pourra peut-être plus faire marche arrière.",
						"spanish": "Quizá no haya vuelta atrás.",
						"vietnamese": "Có lẽ không thể quay lại.",
						"thai": "อาจจะไม่มีทางกลับแล้ว",
						"hindi": "शायद वापस नहीं जा सकते।"
					}
				},
				{
					"content": {
						"korean": "포기란 없다. 강함의 끝을 볼 때까지.",
						"english": "No surrender. Not until I see the limits of strength.",
						"japanese": "諦めはない。強さの果てを見るまで。",
						"chinese": "没有放弃。直到看到力量的极限。",
						"french": "Pas de capitulation. Pas avant de voir la limite de ma force.",
						"spanish": "Sin rendición. Hasta ver el límite de la fuerza.",
						"vietnamese": "Không từ bỏ. Cho đến khi thấy được giới hạn của sức mạnh.",
						"thai": "ไม่มีคำว่ายอมแพ้ จนกว่าจะเห็นจุดสูงสุดของความแข็งแกร่ง",
						"hindi": "हार नहीं मानूंगा। जब तक ताकत की सीमा न देख लूं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "벨루스의 심장을 꿰뚫는 것만이 유일한 해답이다.",
						"english": "Piercing Bellus's heart is the only solution.",
						"japanese": "ベルスの心臓を貫くことだけが唯一の解決策だ。",
						"chinese": "只有刺穿贝尔斯的心，才是唯一的答案。",
						"french": "Transpercer le cœur de Bellus est la seule solution.",
						"spanish": "Atravesar el corazón de Bellus es la única solución.",
						"vietnamese": "Chỉ có xuyên thủng trái tim Bellus mới là giải pháp duy nhất.",
						"thai": "การเจาะทะลุหัวใจของเบลลัสเท่านั้นคือทางออกเดียว",
						"hindi": "बेलस के दिल को भेदना ही एकमात्र उपाय है।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "ivar"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "차가운 시간에 붙잡힌 탐험대. 몸부림칠수록 얼어붙었다.",
						"english": "The expedition trapped by cold time. The more they struggled, the more they froze.",
						"japanese": "冷たい時間に囚われた探検隊。もがけばもがくほど凍りついた。",
						"chinese": "探险队被冰冷的时间困住。越是挣扎，越是冻结。",
						"french": "L'expédition piégée par le temps glacial. Plus ils luttaient, plus ils gelaient.",
						"spanish": "La expedición atrapada por el tiempo frío. Cuanto más luchaban, más se congelaban.",
						"vietnamese": "Đoàn thám hiểm bị mắc kẹt trong thời gian lạnh giá. Càng giãy giụa, họ càng đóng băng.",
						"thai": "คณะสำรวจติดกับดักของกาลเวลาอันเยือกเย็น ยิ่งดิ้นรนมากเท่าไหร่ ก็ยิ่งถูกแช่แข็งมากขึ้นเท่านั้น",
						"hindi": "ठंडे समय में फंसा अभियान दल। जितना वे संघर्ष करते, उतना ही जमते जाते।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "가소롭군. 이것이 너희의 끝이다.",
						"english": "How pathetic. This is your end.",
						"japanese": "見よ、これが貴様らの終わりだ。",
						"chinese": "可笑。这就是你们的末日。",
						"french": "Pathétique. C'est votre fin.",
						"spanish": "Patético. Este es vuestro fin.",
						"vietnamese": "Thật thảm hại. Đây là kết cục của các ngươi.",
						"thai": "น่าสมเพช นี่คือจุดจบของพวกเจ้า.",
						"hindi": "कितना दयनीय। यही तुम्हारा अंत है।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not over yet!",
						"japanese": "まだ… 終わってない！",
						"chinese": "还没… 结束！",
						"french": "Pas encore... Ce n'est pas fini !",
						"spanish": "¡Aún no... No ha terminado!",
						"vietnamese": "Vẫn chưa... kết thúc đâu!",
						"thai": "ยัง… ไม่จบ!",
						"hindi": "अभी… खत्म नहीं हुआ!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "ivar",
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						2
					],
					"duration_ms": 500
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "강함이… 부족했군. 하지만 물러설 수는 없다.",
						"english": "My strength... was lacking. But I cannot retreat.",
						"japanese": "力が… 足りなかったか。だが、退くわけにはいかない。",
						"chinese": "力量… 不足啊。但绝不能后退。",
						"french": "Ma force... a manqué. Mais je ne peux pas reculer.",
						"spanish": "Mi fuerza... fue insuficiente. Pero no puedo retroceder.",
						"vietnamese": "Sức mạnh... không đủ. Nhưng ta không thể lùi bước.",
						"thai": "พลัง… ไม่เพียงพอสินะ. แต่ฉันถอยไม่ได้!",
						"hindi": "मेरी शक्ति… कम पड़ गई। लेकिन मैं पीछे नहीं हट सकता।"
					},
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "ivar",
					"action": "exit",
					"duration_ms": 400,
					"direction": "down"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "강력한 존재가 쓰러졌다. 하지만 멈춘 시간은 돌아오지 않았다.",
						"english": "A powerful being has fallen. But time, once stopped, has not returned.",
						"japanese": "強大な存在が倒れた。しかし、止まった時間は戻らなかった。",
						"chinese": "一个强大的存在倒下了。然而，停止的时间并未恢复。",
						"french": "Un être puissant est tombé. Mais le temps, une fois arrêté, n'est pas revenu.",
						"spanish": "Un ser poderoso ha caído. Pero el tiempo, una vez detenido, no ha vuelto.",
						"vietnamese": "Một thực thể mạnh mẽ đã ngã xuống. Nhưng thời gian đã ngừng lại, vẫn chưa trở lại.",
						"thai": "สิ่งมีชีวิตอันทรงพลังล้มลงแล้ว แต่เวลาที่หยุดนิ่งก็ยังไม่กลับมา",
						"hindi": "एक शक्तिशाली प्राणी गिर गया है। लेकिन रुका हुआ समय वापस नहीं आया है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "크크… 겨우 이 정도…?",
						"english": "Heh heh... Is this all you've got...?",
						"japanese": "クク…たったこれだけ…？",
						"chinese": "呵呵…就这点本事…？",
						"french": "Hé hé... C'est tout ce que tu as... ?",
						"spanish": "Je je... ¿Esto es todo lo que tienes...?",
						"vietnamese": "Khà khà... Chỉ có thế này thôi sao...?",
						"thai": "คิกๆ… แค่นี้เองเหรอ…?",
						"hindi": "हा हा… बस इतना ही…?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "진정한 구원이… 무엇인지… 너희는… 모른다…",
						"english": "What true salvation is... you... do not know...",
						"japanese": "真の救済が…何なのか…お前たちは…知らない…",
						"chinese": "真正的救赎…是什么…你们…不知道…",
						"french": "Ce qu'est le vrai salut... vous... ne savez pas...",
						"spanish": "Lo que es la verdadera salvación... vosotros... no lo sabéis...",
						"vietnamese": "Cứu rỗi thực sự là gì... các ngươi... không biết đâu...",
						"thai": "ความรอดที่แท้จริงคืออะไร… พวกเจ้า… ไม่รู้หรอก…",
						"hindi": "वास्तविक मुक्ति क्या है... तुम... नहीं जानते..."
					}
				},
				{
					"content": {
						"korean": "{random_boss}가 쓰러졌지만… 뭔가 찝찝해.",
						"english": "{random_boss} has fallen... but something feels off.",
						"japanese": "{random_boss}は倒れたが…何だか後味が悪い。",
						"chinese": "{random_boss}倒下了…但总觉得有些不对劲。",
						"french": "{random_boss} est tombé... mais quelque chose cloche.",
						"spanish": "{random_boss} ha caído... pero algo no cuadra.",
						"vietnamese": "{random_boss} đã ngã xuống... nhưng cảm giác thật khó chịu.",
						"thai": "{random_boss} ล้มลงแล้ว… แต่รู้สึกแปลกๆ",
						"hindi": "{random_boss} गिर गया है… लेकिन कुछ अजीब सा लग रहा है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"speaker": "ivar",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "단지 하수인이었나. 벨루스는 더욱 깊은 곳에 있다.",
						"english": "Was it merely a minion? Bellus is deeper still.",
						"japanese": "ただの手下だったのか。ベルースはさらに深い場所にいる。",
						"chinese": "只是一个手下吗？贝鲁斯在更深的地方。",
						"french": "N'était-ce qu'un sbire ? Bellus est encore plus profond.",
						"spanish": "¿Era solo un esbirro? Bellus está aún más profundo.",
						"vietnamese": "Chỉ là một tên tay sai sao? Bellus còn ở sâu hơn nữa.",
						"thai": "เป็นแค่สมุนงั้นเหรอ? เบลลัสยังอยู่ลึกกว่านั้น",
						"hindi": "क्या यह केवल एक प्यादा था? बेलुस और भी गहरे में है।"
					},
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "강함의 끝은… 아직 멀었군.",
						"english": "The end of strength... is still far off.",
						"japanese": "強さの果ては…まだまだ遠いな。",
						"chinese": "力量的尽头…还远得很。",
						"french": "La fin de la force... est encore loin.",
						"spanish": "El fin de la fuerza... aún está lejos.",
						"vietnamese": "Giới hạn của sức mạnh... vẫn còn xa lắm.",
						"thai": "จุดจบของความแข็งแกร่ง… ยังอีกไกลสินะ",
						"hindi": "शक्ति का अंत… अभी बहुत दूर है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이바르는 새로운 흔적을 찾아 얼어붙은 길을 재촉했다. 벨루스의 그림자는 더욱 짙어지고 있었다.",
						"english": "Ivar hastened along the frozen path, searching for new traces. The shadow of Bellus grew darker.",
						"japanese": "イヴァルは新たな痕跡を求めて凍てついた道を急いだ。ベルースの影はさらに色濃くなっていた。",
						"chinese": "伊瓦尔沿着冰冻之路匆匆前行，寻找新的线索。贝鲁斯的影子愈发浓重。",
						"french": "Ivar s'est empressé le long du chemin gelé, à la recherche de nouvelles traces. L'ombre de Bellus s'épaississait.",
						"spanish": "Ivar se apresuró por el camino helado, buscando nuevas huellas. La sombra de Bellus se hacía más densa.",
						"vietnamese": "Ivar vội vã dọc theo con đường băng giá, tìm kiếm những dấu vết mới. Bóng tối của Bellus ngày càng trở nên đậm đặc.",
						"thai": "ไอวาร์เร่งรีบไปตามเส้นทางน้ำแข็ง เพื่อตามหาร่องรอยใหม่ เงาของเบลลัสยิ่งทวีความมืดมิด",
						"hindi": "इवार ने नए निशान ढूंढते हुए जमे हुए रास्ते पर तेजी से चला। बेलुस की छाया और गहरी होती जा रही थी।"
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "시간이 얼어붙은 미궁의 최심부. 거대한 그림자가 앞을 가로막았다.",
						"english": "In the deepest part of the frozen time labyrinth, a colossal shadow blocked the way.",
						"japanese": "時が凍りついた迷宮の最深部。巨大な影が道を阻んだ。",
						"chinese": "时间冻结的迷宫最深处。一道巨大的影子挡住了去路。",
						"french": "Au cœur du labyrinthe où le temps est figé. Une ombre gigantesque barrait le chemin.",
						"spanish": "En lo más profundo del laberinto de tiempo congelado. Una sombra gigantesca bloqueaba el camino.",
						"vietnamese": "Tại sâu thẳm nhất của mê cung thời gian đóng băng, một cái bóng khổng lồ đã chặn đường.",
						"thai": "ณ ส่วนที่ลึกที่สุดของเขาวงกตที่เวลาถูกแช่แข็ง เงาขนาดมหึมาขวางทางอยู่",
						"hindi": "समय से जमे भूलभुलैया के सबसे गहरे हिस्से में, एक विशाल परछाई ने रास्ता रोका।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "감히 여기까지 온 어리석은 자들.",
						"english": "Foolish ones who dared to come this far.",
						"japanese": "よくもここまで来たな、愚か者どもめ。",
						"chinese": "胆敢来到这里的愚蠢之人。",
						"french": "Stupides individus qui osent venir jusqu'ici.",
						"spanish": "Necios que se atreven a llegar tan lejos.",
						"vietnamese": "Những kẻ ngu ngốc dám đến tận đây.",
						"thai": "พวกโง่เขลาที่กล้ามาถึงที่นี่",
						"hindi": "मूर्खों, जो इतनी दूर तक आने की हिम्मत की।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "내 영역에 발을 들인 대가는… 영원한 박제다.",
						"english": "The price for stepping into my domain... is eternal stasis.",
						"japanese": "我が領域に足を踏み入れた代償は…永遠の剥製だ。",
						"chinese": "踏入我领域的代价…是永远的标本。",
						"french": "Le prix d'avoir pénétré mon domaine... est la stase éternelle.",
						"spanish": "El precio por entrar en mi dominio... es la estasis eterna.",
						"vietnamese": "Cái giá phải trả khi bước vào lãnh địa của ta... là bị phong ấn vĩnh viễn.",
						"thai": "ค่าตอบแทนที่เหยียบย่างเข้ามาในอาณาเขตของข้า... คือการถูกสตัฟฟ์ไว้ชั่วนิรันดร์",
						"hindi": "मेरे क्षेत्र में कदम रखने की कीमत... अनन्त स्थिरीकरण है।"
					}
				},
				{
					"content": {
						"korean": "물러서라, {random_boss}!",
						"english": "Retreat, {random_boss}!",
						"japanese": "退け、{random_boss}！",
						"chinese": "退下，{random_boss}！",
						"french": "Recule, {random_boss} !",
						"spanish": "¡Retírate, {random_boss}!",
						"vietnamese": "Lùi lại, {random_boss}!",
						"thai": "ถอยไป, {random_boss}!",
						"hindi": "पीछे हटो, {random_boss}!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"speaker": "ivar",
					"type": "direction",
					"spot": [
						2,
						2
					],
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "강함을 시험하려는가? 좋다. 상대해주마.",
						"english": "Do you seek to test your strength? Very well. I shall indulge you.",
						"japanese": "強さを試そうというのか？よかろう。相手をしてやろう。",
						"chinese": "想考验力量吗？很好。我奉陪。",
						"french": "Tu cherches à tester ta force ? Fort bien. Je t'affronterai.",
						"spanish": "¿Buscas probar tu fuerza? Muy bien. Te daré batalla.",
						"vietnamese": "Ngươi muốn thử sức mạnh ư? Được thôi. Ta sẽ tiếp đón ngươi.",
						"thai": "เจ้าอยากจะทดสอบความแข็งแกร่งรึ? ได้เลย ข้าจะเล่นด้วย",
						"hindi": "अपनी शक्ति का परीक्षण करना चाहते हो? बहुत अच्छा। मैं तुम्हें चुनौती दूंगा।"
					},
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "벨루스의 그림자여, 네 강함은 여기까지다.",
						"english": "Shadow of Bellus, your strength ends here.",
						"japanese": "ベルースの影よ、お前の強さはここまでだ。",
						"chinese": "贝鲁斯的影子，你的力量到此为止了。",
						"french": "Ombre de Bellus, ta force prend fin ici.",
						"spanish": "Sombra de Bellus, tu fuerza termina aquí.",
						"vietnamese": "Bóng tối của Bellus, sức mạnh của ngươi đến đây là hết.",
						"thai": "เงาของเบลลัสเอ๋ย พลังของเจ้ามีแค่นี้แหละ",
						"hindi": "बेलुस की छाया, तुम्हारी शक्ति यहीं तक है。"
					}
				},
				{
					"type": "direction",
					"speaker": "ivar",
					"action": "exit",
					"duration_ms": 400,
					"direction": "left"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "건방진 것. 감히 내 길을 막으려 드는가?",
						"english": "Impudent wretch. Do you dare block my path?",
						"japanese": "生意気な奴め。よくも私の道を阻もうとするな？",
						"chinese": "狂妄之徒。竟敢阻拦我的去路？",
						"french": "Imprudent. Oses-tu bloquer mon chemin ?",
						"spanish": "Insolente. ¿Te atreves a bloquear mi camino?",
						"vietnamese": "Đồ xấc xược. Ngươi dám cản đường ta sao?",
						"thai": "ไอ้บังอาจ! กล้าดียังไงมาขวางทางข้า?",
						"hindi": "गुस्ताख। क्या तुम मेरी राह रोकने की हिम्मत करते हो?"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"영원의 설원. 모든 것이 얼어붙은 곳.",
			"시간의 집찰관 벨루스. 그의 광기 어린 집착은 어디에서 오는가.",
			"이바르는 그곳에서 고대 유물 속 파괴된 미래를 본다.",
			"세계를 '구원'하려 했다는 그림자.",
			"진실은 언제나 예상보다 차갑고 거대했다."
		],
		"english": [
			"The Eternal Snowfield. A place where all is frozen.",
			"Bellus, the Time Warden. Whence comes his mad obsession?",
			"There, Ivar sees a destroyed future within an ancient relic.",
			"The shadow that sought to 'save' the world.",
			"The truth was always colder and grander than expected."
		],
		"japanese": [
			"永遠の雪原。すべてが凍りつく場所。",
			"時の監視官ベルス。彼の狂気じみた執着はどこから来るのか。",
			"イヴァルはそこで、古代の遺物の中に破壊された未来を見る。",
			"世界を「救済」しようとした影。",
			"真実は常に予想よりも冷たく、そして巨大だった。"
		],
		"chinese": [
			"永恒的雪原。万物冻结之地。",
			"时间的执察官贝鲁斯。他疯狂的执念从何而来？",
			"伊瓦尔在那里，从古老遗物中窥见被摧毁的未来。",
			"曾试图“拯救”世界的影子。",
			"真相总是比预期更冷酷、更宏大。"
		],
		"french": [
			"La Plaine Éternelle. Un lieu où tout est gelé.",
			"Bellus, le Gardien du Temps. D'où vient son obsession démente ?",
			"Là, Ivar voit un futur détruit au sein d'une ancienne relique.",
			"L'ombre qui cherchait à 'sauver' le monde.",
			"La vérité était toujours plus froide et plus immense que prévu."
		],
		"spanish": [
			"El Campo de Nieve Eterno. Un lugar donde todo está congelado.",
			"Bellus, el Guardián del Tiempo. ¿De dónde viene su obsesión demente?",
			"Allí, Ivar ve un futuro destruido dentro de una reliquia antigua.",
			"La sombra que intentó 'salvar' el mundo.",
			"La verdad siempre fue más fría y vasta de lo esperado."
		],
		"vietnamese": [
			"Tuyết nguyên vĩnh cửu. Nơi vạn vật đóng băng.",
			"Bellus, Người Giám Sát Thời Gian. Nỗi ám ảnh điên cuồng của hắn đến từ đâu?",
			"Tại đó, Ivar nhìn thấy một tương lai bị hủy diệt trong di vật cổ đại.",
			"Bóng tối từng muốn 'cứu rỗi' thế giới.",
			"Sự thật luôn lạnh lẽo và to lớn hơn dự kiến."
		],
		"thai": [
			"ทุ่งหิมะนิรันดร์ สถานที่ที่ทุกสิ่งถูกแช่แข็ง",
			"เบลลัส ผู้พิทักษ์กาลเวลา ความหมกมุ่นคลั่งของเขามาจากไหน?",
			"ณ ที่นั้น อิวาร์เห็นอนาคตที่ถูกทำลายในวัตถุโบราณ",
			"เงาที่พยายามจะ 'กอบกู้' โลก",
			"ความจริงมักจะเยือกเย็นและยิ่งใหญ่กว่าที่คาดไว้เสมอ"
		],
		"hindi": [
			"शाश्वत हिमक्षेत्र। वह स्थान जहाँ सब कुछ जमा हुआ है।",
			"समय का निरीक्षक बेलस। उसका उन्मत्त जुनून कहाँ से आता है?",
			"वहाँ, इवर एक प्राचीन अवशेष में एक नष्ट भविष्य देखता है।",
			"वह परछाई जिसने दुनिया को 'बचाने' की कोशिश की।",
			"सत्य हमेशा अनुमान से अधिक ठंडा और विशाल था।"
		]
	}
} as const;
