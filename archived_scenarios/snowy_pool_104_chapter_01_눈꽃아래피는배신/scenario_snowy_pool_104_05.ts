export const scenario_snowy_pool_104_05 = {
	"scenario_id": "snowy_pool_104_05",
	"order": 5,
	"act": "climax_finale",
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
		"pool_id": "pool_104"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "끝없이 펼쳐진 핏빛 설원. 바람마저 얼어붙는 곳.",
						"english": "An endlessly sprawling, blood-stained snowfield. A place where even the wind freezes.",
						"japanese": "果てしなく広がる血塗られた雪原。風さえ凍てつく場所。",
						"chinese": "无尽蔓延的血色雪原。连风都为之冻结之地。",
						"french": "Un champ de neige sanglant s'étendant à l'infini. Un endroit où même le vent gèle.",
						"spanish": "Un campo nevado ensangrentado que se extiende infinitamente. Un lugar donde incluso el viento se congela.",
						"vietnamese": "Cánh đồng tuyết đẫm máu trải dài vô tận. Nơi ngay cả gió cũng đóng băng.",
						"thai": "ทุ่งหิมะสีเลือดที่ทอดยาวไร้ที่สิ้นสุด สถานที่ที่แม้แต่ลมก็ยังแข็งตัว",
						"hindi": "एक अंतहीन रूप से फैला हुआ, रक्त-रंजित हिमक्षेत्र। एक ऐसी जगह जहाँ हवा भी जम जाती है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "여기가… 겨울의 사냥개가 지키는 곳인가.",
						"english": "Is this... where the Hounds of Winter guard?",
						"japanese": "ここが… 冬の猟犬が守る場所か。",
						"chinese": "这里是… 冬日猎犬守护的地方吗？",
						"french": "Est-ce ici... que les Chiens de l'Hiver veillent ?",
						"spanish": "¿Es aquí... donde los Sabuesos del Invierno custodian?",
						"vietnamese": "Đây có phải... nơi Chó Săn Mùa Đông canh gác?",
						"thai": "นี่คือ... ที่ที่หมาล่าเนื้อเหมันต์เฝ้ารึ",
						"hindi": "क्या यह... वह जगह है जहाँ शीतकालीन शिकारी कुत्ते पहरा देते हैं?"
					}
				},
				{
					"spot": [
						4,
						1
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "길을 잃지 마. 여기선, 모든 발자국이 저주가 될 수 있어.",
						"english": "Don't get lost. Here, every step can become a curse.",
						"japanese": "道に迷うな。ここでは、全ての足跡が呪いとなりうる。",
						"chinese": "别迷路。在这里，每一步都可能变成诅咒。",
						"french": "Ne te perds pas. Ici, chaque pas peut devenir une malédiction.",
						"spanish": "No te pierdas. Aquí, cada pisada puede convertirse en una maldición.",
						"vietnamese": "Đừng lạc lối. Ở đây, mỗi bước chân đều có thể trở thành lời nguyền.",
						"thai": "อย่าหลงทาง ที่นี่ ทุกย่างก้าวอาจกลายเป็นคำสาปได้",
						"hindi": "गुम मत होना। यहाँ, हर कदम एक अभिशाप बन सकता है।"
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						1
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 얼음 무늬들을 봤니? 단순한 자연 현상이 아니야.",
						"english": "Have you seen these ice patterns? They're not just natural phenomena.",
						"japanese": "この氷の模様を見たか？ただの自然現象ではない。",
						"chinese": "你看到这些冰纹了吗？它们可不是简单的自然现象。",
						"french": "As-tu vu ces motifs de glace ? Ce ne sont pas de simples phénomènes naturels.",
						"spanish": "¿Has visto estos patrones de hielo? No son solo fenómenos naturales.",
						"vietnamese": "Bạn có thấy những hoa văn băng này không? Chúng không phải là hiện tượng tự nhiên đơn thuần.",
						"thai": "เห็นลวดลายน้ำแข็งนี่ไหม? ไม่ใช่แค่ปรากฏการณ์ธรรมชาติหรอกนะ",
						"hindi": "क्या तुमने ये बर्फ के पैटर्न देखे हैं? ये सिर्फ प्राकृतिक घटनाएँ नहीं हैं।"
					},
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "기묘하게 느껴지긴 했어. 뭔가… 뜻이 있는 것 같아.",
						"english": "It did feel strange. Like... there's some meaning to it.",
						"japanese": "奇妙には感じた。何か… 意味があるようだ。",
						"chinese": "确实感觉很奇怪。好像… 有什么深意。",
						"french": "C'était étrange, en effet. Comme si... il y avait un sens.",
						"spanish": "De hecho, se sintió extraño. Como si... tuviera algún significado.",
						"vietnamese": "Cảm giác thật kỳ lạ. Như thể… có ý nghĩa nào đó.",
						"thai": "รู้สึกแปลกๆ เหมือนกันนะ เหมือนว่า... มีความหมายอะไรบางอย่าง",
						"hindi": "यह अजीब तो लगा। जैसे... इसमें कुछ अर्थ छिपा है।"
					},
					"type": "speech"
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "아주 오래된 계약의 흔적. 알 수 없는 존재가 새긴 표식.",
						"english": "Traces of an ancient pact. Markings carved by an unknown entity.",
						"japanese": "非常に古い契約の痕跡。未知の存在が刻んだ印だ。",
						"chinese": "一个古老契约的痕迹。未知存在刻下的印记。",
						"french": "Les traces d'un pacte très ancien. Des marques gravées par une entité inconnue.",
						"spanish": "Huellas de un pacto muy antiguo. Marcas grabadas por una entidad desconocida.",
						"vietnamese": "Dấu vết của một giao ước cổ xưa. Những ký hiệu được khắc bởi một thực thể không rõ.",
						"thai": "ร่องรอยของพันธสัญญาโบราณ รอยสลักโดยสิ่งมีชีวิตที่ไม่รู้จัก",
						"hindi": "एक बहुत पुराने समझौते के निशान। अज्ञात सत्ता द्वारा उत्कीर्ण चिह्न।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						1
					],
					"speaker": "eira",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "점점 더 추워질 거야. 단순한 추위가 아니야.",
						"english": "It's going to get colder and colder. Not just ordinary cold.",
						"japanese": "ますます寒くなるだろう。ただの寒さではない。",
						"chinese": "会越来越冷。这可不是普通的寒冷。",
						"french": "Il fera de plus en plus froid. Ce n'est pas un froid ordinaire.",
						"spanish": "Hará cada vez más frío. No es un frío cualquiera.",
						"vietnamese": "Trời sẽ ngày càng lạnh. Đây không phải là cái lạnh thông thường.",
						"thai": "มันจะหนาวขึ้นเรื่อยๆ ไม่ใช่ความหนาวธรรมดา",
						"hindi": "ठंड बढ़ती जाएगी। यह सिर्फ़ सामान्य ठंड नहीं है।"
					},
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "몸뿐만 아니라… 의지마저 얼어붙는 것 같아.",
						"english": "Not just the body... but even the will seems to freeze.",
						"japanese": "体だけでなく… 意思までも凍りつくようだ。",
						"chinese": "不只是身体… 连意志也仿佛要冻结了。",
						"french": "Non seulement le corps... mais la volonté aussi semble geler.",
						"spanish": "No solo el cuerpo... sino que incluso la voluntad parece congelarse.",
						"vietnamese": "Không chỉ cơ thể… mà ngay cả ý chí cũng như đóng băng.",
						"thai": "ไม่เพียงแต่ร่างกาย... แต่ความตั้งใจก็ดูเหมือนจะแข็งตัว",
						"hindi": "सिर्फ़ शरीर ही नहीं... बल्कि इच्छाशक्ति भी जमती जा रही है।"
					}
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "'겨울의 한기'는 영혼마저 갉아먹는 그림자니까.",
						"english": "Because 'Winter's Chill' is a shadow that gnaws even at the soul.",
						"japanese": "「冬の冷気」は魂すら蝕む影だからな。",
						"chinese": "因为“冬日寒气”是连灵魂都能侵蚀的阴影。",
						"french": "Car la 'Froidure de l'Hiver' est une ombre qui ronge même l'âme.",
						"spanish": "Porque el 'Frío del Invierno' es una sombra que carcome hasta el alma.",
						"vietnamese": "Vì 'Cái Lạnh Mùa Đông' là một bóng tối gặm nhấm cả linh hồn.",
						"thai": "เพราะ 'ความหนาวเหน็บแห่งเหมันต์' คือเงาที่กัดกินแม้กระทั่งจิตวิญญาณ",
						"hindi": "क्योंकि 'सर्दी की ठंड' एक ऐसी परछाई है जो आत्मा को भी खा जाती है।"
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
						1,
						1
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "eira",
					"type": "direction"
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "이 산에는 잊혀진 족장의 전설이 내려와.",
						"english": "A legend of a forgotten chieftain is passed down in this mountain.",
						"japanese": "この山には忘れ去られた族長の伝説が伝わっている。",
						"chinese": "这座山流传着一个被遗忘酋长的传说。",
						"french": "Dans cette montagne, une légende d'un chef oublié est transmise.",
						"spanish": "En esta montaña se transmite la leyenda de un cacique olvidado.",
						"vietnamese": "Trên ngọn núi này, truyền thuyết về một tù trưởng bị lãng quên được lưu truyền.",
						"thai": "ภูเขานี้มีตำนานของหัวหน้าเผ่าที่ถูกลืมเล่าขานกันมา",
						"hindi": "इस पहाड़ में एक भूले हुए सरदार की किंवदंती चली आ रही है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "영원한 전투를 얻었지만, 영원한 고통에 시달렸다는…",
						"english": "Who gained eternal battle, but suffered eternal torment...",
						"japanese": "永遠の戦いを得たが、永遠の苦痛に苛まれたと…",
						"chinese": "他赢得了永恒的战斗，却遭受了永恒的折磨…",
						"french": "Qui a gagné la bataille éternelle, mais a souffert un tourment éternel...",
						"spanish": "Quien obtuvo la batalla eterna, pero sufrió un tormento eterno...",
						"vietnamese": "Người đã giành được trận chiến vĩnh cửu, nhưng phải chịu đựng sự đau khổ vĩnh cửu…",
						"thai": "ที่ได้รับชัยชนะในการต่อสู้ชั่วนิรันดร์ แต่ต้องทนทุกข์ทรมานชั่วนิรันดร์...",
						"hindi": "जिसने शाश्वत युद्ध जीता, पर शाश्वत पीड़ा से ग्रस्त रहा..."
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "그 고통이, 지금도 이 얼음 속에서 포효하고 있어.",
						"english": "That agony still roars within this ice.",
						"japanese": "その苦痛は、今もこの氷の中で咆哮している。",
						"chinese": "那痛苦，至今仍在这冰中咆哮。",
						"french": "Cette agonie rugit encore dans cette glace.",
						"spanish": "Esa agonía sigue rugiendo dentro de este hielo.",
						"vietnamese": "Nỗi đau đó, giờ vẫn đang gầm thét trong băng giá này.",
						"thai": "ความเจ็บปวดนั้น ยังคงคำรามก้องอยู่ในน้ำแข็งนี้",
						"hindi": "वह पीड़ा, अभी भी इस बर्फ़ के भीतर दहाड़ रही है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "설마… 그 족장이 비요른 블로드울브인가?",
						"english": "Could it be... that chieftain is Bjorn Bloodwolf?",
						"japanese": "まさか…あの族長がビヨルン・ブラッドウルフなのか？",
						"chinese": "难道…那个酋长是比约恩·血狼？",
						"french": "Serait-ce... que ce chef est Bjorn Bloodwolf ?",
						"spanish": "¿Acaso... ese jefe es Bjorn Bloodwolf?",
						"vietnamese": "Không lẽ… tộc trưởng đó là Bjorn Bloodwolf?",
						"thai": "ไม่นะ... หัวหน้าเผ่าคนนั้นคือบียอร์น บลัดวูล์ฟงั้นหรือ?",
						"hindi": "कहीं... वह सरदार ब्योर्न ब्लडवूल्फ तो नहीं?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "잘 싸웠다, 하찮은 먹잇감들. 하지만….",
						"english": "You fought well, petty prey. But...",
						"japanese": "「よく戦った、取るに足らぬ獲物ども。だが…。」",
						"chinese": "你们打得不错，渺小的猎物。但是……",
						"french": "Vous avez bien combattu, misérables proies. Mais...",
						"spanish": "Luchasteis bien, insignificantes presas. Pero...",
						"vietnamese": "Các ngươi đã chiến đấu tốt, con mồi hèn mọn. Nhưng...",
						"thai": "เจ้าต่อสู้ได้ดี เหล่าเหยื่อไร้ค่า. แต่...",
						"hindi": "तुम खूब लड़े, तुच्छ शिकार। लेकिन..."
					},
					"emotion": "base",
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "이 싸움은 너희의 힘이나 나의 영광을 위한 게 아니었다.",
						"english": "This battle was not for your strength, nor my glory.",
						"japanese": "「この戦いは、貴様らの力のためでも、余の栄光のためでもなかった。」",
						"chinese": "这场战斗既不是为了你们的力量，也不是为了我的荣耀。",
						"french": "Cette bataille n'était ni pour votre force, ni pour ma gloire.",
						"spanish": "Esta batalla no fue por vuestra fuerza, ni por mi gloria.",
						"vietnamese": "Trận chiến này không phải vì sức mạnh của các ngươi, cũng không phải vì vinh quang của ta.",
						"thai": "การต่อสู้ครั้งนี้มิใช่เพื่อพลังของพวกเจ้า หรือเกียรติของข้า.",
						"hindi": "यह लड़ाई न तुम्हारी शक्ति के लिए थी, न मेरी महिमा के लिए।"
					},
					"type": "speech",
					"speaker": "boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "언제나 그들의 굶주림을 위한 것… 이제, 그들이 포식하리라!",
						"english": "Always for their hunger... Now, they shall feast!",
						"japanese": "「常に彼らの飢えのため…今、彼らが貪り食らうだろう！」",
						"chinese": "永远是为了他们的饥饿……现在，他们将饱餐一顿！",
						"french": "Toujours pour leur faim... Maintenant, ils vont festoyer !",
						"spanish": "Siempre por su hambre... ¡Ahora, ellos se darán un festín!",
						"vietnamese": "Luôn là vì cơn đói của chúng... Giờ thì, chúng sẽ nuốt chửng!",
						"thai": "เสมอมาเพื่อความหิวโหยของพวกมัน... บัดนี้ พวกมันจะอิ่มหนำสำราญ!",
						"hindi": "हमेशा उनकी भूख के लिए... अब, वे दावत करेंगे!"
					},
					"type": "speech",
					"speaker": "boss",
					"emotion": "angry"
				},
				{
					"type": "direction",
					"speaker": "boss",
					"action": "shake",
					"duration_ms": 600
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "비요른이 도끼를 땅에 박자, 얼음이 갈라지며 푸른 빛을 냈다.",
						"english": "As Bjorn slammed his axe into the ground, the ice cracked, emitting a blue light.",
						"japanese": "「ビヨルンが斧を地面に突き立てると、氷がひび割れ、青い光を放った。」",
						"chinese": "当比约恩将斧头插入地面时，冰裂开了，发出了蓝色的光芒。",
						"french": "Quand Bjorn planta sa hache dans le sol, la glace se fendit, émettant une lumière bleue.",
						"spanish": "Cuando Bjorn clavó su hacha en el suelo, el hielo se agrietó, emitiendo una luz azul.",
						"vietnamese": "Khi Bjorn cắm rìu xuống đất, băng nứt ra, phát ra ánh sáng xanh.",
						"thai": "เมื่อบียอร์นทุบขวานลงบนพื้น น้ำแข็งก็แตกออก เปล่งแสงสีฟ้า.",
						"hindi": "जब ब्योर्न ने अपनी कुल्हाड़ी जमीन में मारी, तो बर्फ फट गई और नीली रोशनी निकली।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "어둠의 서리 촉수들이 솟아올라 쓰러진 자들을 집어삼켰다.",
						"english": "Dark frost tentacles surged forth, devouring the fallen.",
						"japanese": "「闇の霜触手が噴出し、倒れた者たちを飲み込んだ。」",
						"chinese": "黑暗的霜触手涌出，吞噬了倒下的人。",
						"french": "Des tentacules de givre obscurs jaillirent, dévorant les tombés.",
						"spanish": "Tentáculos de escarcha oscura surgieron, devorando a los caídos.",
						"vietnamese": "Những xúc tu băng giá đen tối trỗi dậy, nuốt chửng những kẻ đã ngã xuống.",
						"thai": "หนวดน้ำแข็งทมิฬผุดขึ้นมา กลืนกินผู้ที่ล้มลง.",
						"hindi": "अंधेरे पाले के टेंटेकल्स (स्पर्शक) निकले, और गिरे हुए लोगों को निगल गए।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "이게… 끝이 아니라고?",
						"english": "This... isn't the end?",
						"japanese": "「これが…終わりではないのか？」",
						"chinese": "这……不是结局？",
						"french": "Ce... n'est pas la fin ?",
						"spanish": "¿Esto... no es el final?",
						"vietnamese": "Đây... không phải là kết thúc sao?",
						"thai": "นี่... ยังไม่ใช่จุดจบหรือ?",
						"hindi": "यह... अंत नहीं है?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "거대한 존재의 그림자는 여전히 설원 위에 드리워져 있었다.",
						"english": "The shadow of the colossal entity still loomed over the snowfield.",
						"japanese": "「巨大な存在の影は、依然として雪原に覆いかぶさっていた。」",
						"chinese": "那巨大存在的阴影依然笼罩在雪原之上。",
						"french": "L'ombre de l'entité colossale planait toujours sur l'étendue enneigée.",
						"spanish": "La sombra de la entidad colosal aún se cernía sobre el campo nevado.",
						"vietnamese": "Bóng của thực thể khổng lồ vẫn bao trùm trên cánh đồng tuyết.",
						"thai": "เงาของสิ่งมีชีวิตมหึมายังคงทอดทับอยู่บนทุ่งหิมะ.",
						"hindi": "विशालकाय इकाई की परछाई अभी भी बर्फ से ढके मैदान पर मंडरा रही थी।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "마침내 설원의 심장부. 거대한 그림자가 앞을 가로막았다.",
						"english": "Finally, the heart of the snowfield. A colossal shadow blocked the way.",
						"japanese": "ついに、雪原の心臓部。巨大な影が道を遮った。",
						"chinese": "终于，雪原深处。一道巨大的阴影挡住了去路。",
						"french": "Enfin, le cœur de la toundra. Une ombre colossale bloquait le passage.",
						"spanish": "Finalmente, el corazón del campo de nieve. Una sombra colosal bloqueó el camino.",
						"vietnamese": "Cuối cùng, trung tâm của tuyết nguyên. Một bóng đen khổng lồ đã chắn ngang đường.",
						"thai": "ในที่สุดก็มาถึงใจกลางทุ่งหิมะ เงาขนาดมหึมาขวางทางอยู่",
						"hindi": "अंततः, बर्फीले मैदान का हृदय। एक विशाल छाया ने मार्ग अवरुद्ध कर दिया।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "왔군, 하찮은 벌레들. 내 굶주림을 채워줄 제물이.",
						"english": "You've come, insignificant insects. Sacrifices to sate my hunger.",
						"japanese": "来たな、取るに足らない虫けらども。私の飢えを満たす生贄が。",
						"chinese": "来了，渺小的虫子们。满足我饥饿的祭品。",
						"french": "Vous voilà, insectes insignifiants. Sacrifices pour apaiser ma faim.",
						"spanish": "Habéis llegado, insectos insignificantes. Ofrendas para saciar mi hambre.",
						"vietnamese": "Cuối cùng cũng tới, lũ côn trùng bé nhỏ. Những vật hiến tế để thỏa mãn cơn đói của ta.",
						"thai": "มาแล้วสินะ เจ้าแมลงชั้นต่ำทั้งหลาย เครื่องสังเวยที่จะมาเติมเต็มความหิวโหยของข้า",
						"hindi": "आ गए, तुच्छ कीड़े-मकोड़े। मेरे भूख को शांत करने वाली बलि।"
					},
					"type": "speech",
					"speaker": "boss",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "네가… 겨울의 사냥개, 비요른 블로드울브인가.",
						"english": "Are you... Bjorn Bloodwolf, the Hound of Winter?",
						"japanese": "お前が…冬の猟犬、ビヨルン・ブラッドウルフか。",
						"chinese": "你是…冬之猎犬，比约恩·血狼吗？",
						"french": "Es-tu... Bjorn Bloodwolf, le Limier de l'Hiver ?",
						"spanish": "¿Eres tú... Bjorn Bloodwolf, el Sabueso del Invierno?",
						"vietnamese": "Ngươi… là Bjorn Bloodwolf, Chó Săn Mùa Đông sao?",
						"thai": "เจ้าคือ... บียอร์น บลัดวูล์ฟ สุนัขล่าเนื้อแห่งเหมันต์งั้นหรือ?",
						"hindi": "तुम… क्या तुम ब्योर्न ब्लडवूल्फ, शीतकालीन शिकारी हो?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"spot": [
						3,
						1
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "eira",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "그는 비요른이 아니야. 한낱 저주받은 그릇일 뿐.",
						"english": "He is not Bjorn. Merely a cursed vessel.",
						"japanese": "彼はビヨルンではない。ただの呪われた器に過ぎない。",
						"chinese": "他不是比约恩。只是一个被诅咒的容器罢了。",
						"french": "Ce n'est pas Bjorn. Juste un réceptacle maudit.",
						"spanish": "Él no es Bjorn. Es solo un recipiente maldito.",
						"vietnamese": "Hắn ta không phải Bjorn. Chỉ là một vật chứa bị nguyền rủa mà thôi.",
						"thai": "เขาไม่ใช่บียอร์น เป็นแค่ภาชนะต้องคำสาปเท่านั้น",
						"hindi": "वह ब्योर्न नहीं है। केवल एक शापित पात्र है।"
					}
				},
				{
					"content": {
						"korean": "흥. 나약한 요정 따위가 감히…!",
						"english": "Hmph. A weak fairy dares to...!",
						"japanese": "ふん。取るに足らない妖精の分際で…！",
						"chinese": "哼。区区一个弱小的妖精，竟敢…！",
						"french": "Hmph. Une faible fée ose... !",
						"spanish": "Hmph. ¡Una débil hada se atreve a...!",
						"vietnamese": "Hừm. Một tiên nữ yếu ớt như ngươi mà dám…!",
						"thai": "หึ ยัยภูตอ่อนแอเช่นเจ้าบังอาจ... !",
						"hindi": "ह्म्फ। एक कमज़ोर परी की इतनी हिम्मत…!"
					},
					"type": "speech",
					"speaker": "boss",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그가 맺은 계약. 얼음 무늬는 그 존재의 끔찍한 표식이었다.",
						"english": "The contract he made. The ice patterns were a terrible mark of its existence.",
						"japanese": "彼が結んだ契約。氷の模様は、その存在の恐ろしい印だった。",
						"chinese": "他签订的契约。冰霜纹路是那存在的恐怖印记。",
						"french": "Le pacte qu'il a scellé. Les motifs de glace étaient la terrible marque de son existence.",
						"spanish": "El contrato que hizo. Los patrones de hielo eran una terrible marca de su existencia.",
						"vietnamese": "Khế ước mà hắn đã lập. Những hoa văn băng giá là dấu hiệu khủng khiếp của sự tồn tại đó.",
						"thai": "สัญญาที่เขาทำ ลายน้ำแข็งคือสัญลักษณ์อันน่าสะพรึงกลัวของการมีอยู่ของมัน",
						"hindi": "उसने जो अनुबंध किया। बर्फ़ के पैटर्न उसके अस्तित्व का एक भयानक निशान थे।"
					},
					"emotion": "sad",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "'겨울의 한기'는 영혼을 수확하는 과정. 족장의 전설은 비요른의 비극.",
						"english": "'Winter's Chill' is the soul-harvesting process. The chieftain's legend is Bjorn's tragedy.",
						"japanese": "「冬の寒気」は魂を収穫する過程。族長の伝説はビヨルンの悲劇。",
						"chinese": "“冬之寒气”是收割灵魂的过程。酋长的传说，是比约恩的悲剧。",
						"french": "« Le Froid de l'Hiver » est le processus de récolte des âmes. La légende du chef est la tragédie de Bjorn.",
						"spanish": "\"El Frío del Invierno\" es el proceso de cosecha de almas. La leyenda del jefe es la tragedia de Bjorn.",
						"vietnamese": "'Hàn Khí Mùa Đông' là quá trình thu hoạch linh hồn. Truyền thuyết về tộc trưởng là bi kịch của Bjorn.",
						"thai": "'ความหนาวเหน็บแห่งเหมันต์' คือกระบวนการเก็บเกี่ยววิญญาณ ตำนานของหัวหน้าเผ่าคือโศกนาฏกรรมของบียอร์น",
						"hindi": "'शीत की शीतलता' आत्माओं को इकट्ठा करने की प्रक्रिया है। सरदार की किंवदंती ब्योर्न की त्रासदी है।"
					},
					"emotion": "sad",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "얼음 속 포효는 존재의 굶주림! 그는 희생양에 불과해!",
						"english": "The roar in the ice is the hunger of its existence! He's merely a sacrifice!",
						"japanese": "氷の中の咆哮は、存在の飢え！彼は生贄に過ぎない！",
						"chinese": "冰中的咆哮是那存在的饥饿！他不过是个牺牲品！",
						"french": "Le rugissement dans la glace est la faim de son existence ! Il n'est qu'un sacrifice !",
						"spanish": "¡El rugido en el hielo es el hambre de su existencia! ¡Él es solo un sacrificio!",
						"vietnamese": "Tiếng gầm thét trong băng là cơn đói của nó! Hắn ta chỉ là một vật hiến tế mà thôi!",
						"thai": "เสียงคำรามในน้ำแข็งคือความหิวโหยของการมีอยู่ของมัน! เขาเป็นแค่เครื่องสังเวยเท่านั้น!",
						"hindi": "बर्फ़ में दहाड़ अस्तित्व की भूख है! वह केवल एक बलि का बकरा है!"
					},
					"emotion": "angry",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…쓸데없는 소리. 모든 것은 그들의 굶주림을 위한 것.",
						"english": "...Nonsense. All for their hunger.",
						"japanese": "「…無駄口を。全ては彼らの飢えのためだ。」",
						"chinese": "…废话。一切都是为了他们的饥饿。",
						"french": "...Absurdités. Tout est pour leur faim.",
						"spanish": "...Tonterías. Todo es para su hambre.",
						"vietnamese": "...Vô nghĩa. Tất cả là vì cơn đói của chúng.",
						"thai": "...ไร้สาระ. ทุกสิ่งเพื่อความหิวโหยของพวกมัน.",
						"hindi": "...व्यर्थ की बातें। सब उनकी भूख के लिए है。"
					},
					"emotion": "angry",
					"speaker": "boss"
				},
				{
					"emotion": "angry",
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "계약의 진실… 이제 너희도 맛볼 시간이다!",
						"english": "The truth of the contract... now it's your turn to taste it!",
						"japanese": "「契約の真実…今度は貴様らが味わう番だ！」",
						"chinese": "契约的真相……现在轮到你们来尝尝了！",
						"french": "La vérité du pacte... il est temps pour vous de la goûter !",
						"spanish": "La verdad del contrato... ¡ahora es vuestro turno de saborearla!",
						"vietnamese": "Sự thật về khế ước... giờ là lúc các ngươi nếm trải!",
						"thai": "ความจริงของพันธสัญญา... ถึงเวลาที่พวกเจ้าจะได้ลิ้มรสแล้ว!",
						"hindi": "अनुबंध का सच... अब तुम्हारी बारी है चखने की!"
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "하찮은 것들… 너희의 영혼은 그들의 좋은 양식이 될 것이다.",
						"english": "Insignificant ones... your souls will be good nourishment for them.",
						"japanese": "「取るに足らぬ者ども…貴様らの魂は、彼らの良い糧となるだろう。」",
						"chinese": "渺小的东西……你们的灵魂将成为他们绝佳的养料。",
						"french": "Êtres insignifiants... vos âmes seront une bonne nourriture pour eux.",
						"spanish": "Seres insignificantes... vuestras almas serán un buen sustento para ellos.",
						"vietnamese": "Những kẻ vô dụng... linh hồn các ngươi sẽ là nguồn dinh dưỡng tốt cho chúng.",
						"thai": "พวกไร้ค่า... ดวงวิญญาณของพวกเจ้าจะเป็นอาหารอันโอชะของพวกมัน.",
						"hindi": "तुच्छ प्राणियों... तुम्हारी आत्माएं उनके लिए अच्छा पोषण होंगी।"
					},
					"emotion": "angry",
					"speaker": "boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이대로… 끝낼 순 없어…!",
						"english": "I can't let it end like this...!",
						"japanese": "このまま…終わらせるわけにはいかない…！",
						"chinese": "不能就这样…结束…！",
						"french": "Je ne peux pas finir comme ça… !",
						"spanish": "¡No puedo dejar que termine así…!",
						"vietnamese": "Không thể… kết thúc như thế này được…!",
						"thai": "จะจบลงแบบนี้…ไม่ได้…!",
						"hindi": "मैं इसे ऐसे… खत्म नहीं कर सकता…!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "얼어붙은 촉수가 모든 것을 집어삼켰다. 다시 한번, 기회가 필요했다.",
						"english": "Frozen tentacles devoured everything. One more chance was needed.",
						"japanese": "凍てついた触手が全てを飲み込んだ。もう一度、機会が必要だった。",
						"chinese": "冰冷的触手吞噬了一切。需要再一次的机会。",
						"french": "Des tentacules gelés ont tout dévoré. Une autre chance était nécessaire.",
						"spanish": "Tentáculos congelados lo devoraron todo. Se necesitaba otra oportunidad.",
						"vietnamese": "Những xúc tu đóng băng đã nuốt chửng mọi thứ. Cần thêm một cơ hội nữa.",
						"thai": "หนวดที่เยือกแข็งกลืนกินทุกสิ่ง จำเป็นต้องมีโอกาสอีกครั้ง",
						"hindi": "जमे हुए टेंटकल्स ने सब कुछ निगल लिया। एक और मौके की ज़रूरत थी।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"핏빛 설원에 다시 침묵이 찾아왔다. 끔찍한 계약의 진실과 함께.",
			"비요른 블로드울브는 사라졌지만, 그를 묶었던 존재는 여전히 숨 쉬고 있었다.",
			"영혼을 바치라 강요하던 포효는 멈췄지만, 불안한 정적만이 남았다.",
			"구원이었을까, 혹은 더 큰 침해의 시작이었을까.",
			"설원은 여전히 차갑고, 모든 것은 끝이 아닌 시작처럼 느껴졌다."
		],
		"english": [
			"Silence returned to the blood-stained snowfield, along with the horrifying truth of the pact.",
			"Bjorn Bloodwolf vanished, yet the entity that bound him still breathed.",
			"The roar that demanded souls ceased, but only an unsettling silence remained.",
			"Was it salvation, or the beginning of a greater violation?",
			"The snowfield remained cold, and everything felt not like an end, but a beginning."
		],
		"japanese": [
			"血塗られた雪原に再び沈黙が訪れた。恐るべき契約の真実と共に。",
			"ビヨルン・ブラッドウルフは消えたが、彼を縛っていた存在は依然として息づいていた。",
			"魂を捧げよと強要した咆哮は止んだが、残されたのは不穏な静寂のみだった。",
			"それは救済だったのか、あるいはさらなる侵食の始まりだったのか。",
			"雪原は相変わらず冷たく、すべては終わりではなく、始まりのように感じられた。"
		],
		"chinese": [
			"血色雪原再次归于沉寂，伴随着恐怖契约的真相。",
			"比约恩·血狼消失了，但束缚着他的存在仍在呼吸。",
			"曾强迫献祭灵魂的咆哮停止了，但只剩下不安的寂静。",
			"是救赎，还是更大侵犯的开始？",
			"雪原依然寒冷，一切都感觉不像结束，更像开始。"
		],
		"french": [
			"Le silence est revenu sur le champ de neige sanglant, accompagné de l'horrible vérité du pacte.",
			"Bjorn Bloodwolf a disparu, mais l'entité qui le liait respirait toujours.",
			"Le rugissement qui exigeait des âmes s'était tu, mais seul un silence inquiétant demeurait.",
			"Était-ce le salut, ou le début d'une violation plus grande ?",
			"Le champ de neige restait froid, et tout semblait non pas une fin, mais un commencement."
		],
		"spanish": [
			"El silencio regresó al campo nevado ensangrentado, junto con la horrible verdad del pacto.",
			"Bjorn Bloodwolf desapareció, pero la entidad que lo ataba aún respiraba.",
			"El rugido que exigía almas cesó, pero solo quedó un silencio inquietante.",
			"¿Fue salvación, o el comienzo de una violación mayor?",
			"El campo nevado seguía frío, y todo se sentía no como un final, sino como un comienzo."
		],
		"vietnamese": [
			"Sự im lặng trở lại cánh đồng tuyết đẫm máu, cùng với sự thật kinh hoàng về khế ước.",
			"Bjorn Bloodwolf đã biến mất, nhưng thực thể ràng buộc hắn vẫn còn tồn tại.",
			"Tiếng gầm đòi hỏi linh hồn đã ngừng lại, nhưng chỉ còn lại sự tĩnh lặng bất an.",
			"Đó là sự cứu rỗi, hay khởi đầu của một sự xâm phạm lớn hơn?",
			"Cánh đồng tuyết vẫn lạnh giá, và mọi thứ cảm giác không phải là kết thúc, mà là một khởi đầu."
		],
		"thai": [
			"ความเงียบกลับคืนสู่ทุ่งหิมะสีเลือด พร้อมกับความจริงอันน่าสะพรึงกลัวของพันธะ",
			"บียอร์น บลัดวูล์ฟหายไปแล้ว แต่สิ่งที่ผูกมัดเขายังคงหายใจอยู่",
			"เสียงคำรามที่บังคับเอาวิญญาณหยุดลงแล้ว แต่เหลือไว้เพียงความเงียบงันอันไม่สบายใจ",
			"มันคือความรอด หรือจุดเริ่มต้นของการละเมิดที่ยิ่งใหญ่กว่ากันแน่",
			"ทุ่งหิมะยังคงหนาวเย็น และทุกสิ่งรู้สึกเหมือนไม่ใช่จุดจบ แต่เป็นจุดเริ่มต้น"
		],
		"hindi": [
			"रक्त-रंजित हिमक्षेत्र पर पुनः सन्नाटा छा गया, उस भयावह संधि के सत्य के साथ।",
			"ब्योर्न ब्लडവോल्फ गायब हो गया, फिर भी उसे बांधने वाली सत्ता अभी भी साँस ले रही थी।",
			"आत्माओं की मांग करने वाली गर्जना थम गई, लेकिन केवल एक अशांत सन्नाटा रह गया।",
			"क्या यह मुक्ति थी, या एक बड़े उल्लंघन की शुरुआत?",
			"हिमक्षेत्र अभी भी ठंडा था, और सब कुछ अंत नहीं, बल्कि एक शुरुआत जैसा लग रहा था।"
		]
	},
	"prologue": {
		"korean": [
			"핏빛 설원. 얼어붙은 계약이 새겨진 땅.",
			"겨울의 사냥개, 비요른 블로드울브. 그의 포효 아래 모든 것이 잠들었다.",
			"그러나 그 포효는, 더 거대한 존재의 굶주림이었다.",
			"감춰진 진실. 이제, 최후의 밤이 찾아온다."
		],
		"english": [
			"Blood-stained snowfield. A land etched with a frozen pact.",
			"Bjorn Bloodwolf, the Winter's Hound. Beneath his roar, all fell silent.",
			"But that roar was the hunger of a far greater entity.",
			"The hidden truth. Now, the final night descends."
		],
		"japanese": [
			"血塗られた雪原。凍てつく契約が刻まれし地。",
			"冬の猟犬、ビヨルン・ブラッドウルフ。その咆哮の下、すべてが眠りについた。",
			"しかし、その咆哮は、より巨大な存在の飢えであった。",
			"隠された真実。今、最後の夜が訪れる。"
		],
		"chinese": [
			"血色雪原。刻有冰冷契约之地。",
			"冬日猎犬，比约恩·血狼。在他的咆哮下，万物沉寂。",
			"然而，那咆哮却是更强大存在的饥饿。",
			"隐藏的真相。现在，最后的夜晚降临。"
		],
		"french": [
			"Champ de neige sanglant. Une terre marquée par un pacte gelé.",
			"Bjorn Bloodwolf, le Limier de l'Hiver. Sous son rugissement, tout s'endormit.",
			"Mais ce rugissement était la faim d'une entité bien plus grande.",
			"La vérité cachée. Maintenant, la nuit finale approche."
		],
		"spanish": [
			"Campo nevado ensangrentado. Una tierra grabada con un pacto congelado.",
			"Bjorn Bloodwolf, el Sabueso del Invierno. Bajo su rugido, todo enmudeció.",
			"Pero ese rugido era el hambre de una entidad mucho mayor.",
			"La verdad oculta. Ahora, la noche final llega."
		],
		"vietnamese": [
			"Cánh đồng tuyết đẫm máu. Vùng đất khắc ghi khế ước băng giá.",
			"Bjorn Bloodwolf, Chó Săn Mùa Đông. Dưới tiếng gầm của hắn, vạn vật chìm vào im lặng.",
			"Nhưng tiếng gầm đó, lại là cơn đói của một thực thể vĩ đại hơn.",
			"Chân tướng bị che giấu. Giờ đây, đêm cuối cùng ập đến."
		],
		"thai": [
			"ทุ่งหิมะสีเลือด ดินแดนที่สลักไว้ซึ่งพันธะอันเยือกแข็ง",
			"บียอร์น บลัดวูล์ฟ สุนัขล่าเนื้อแห่งเหมันต์ ใต้เสียงคำรามของเขา ทุกสิ่งหลับใหล",
			"แต่เสียงคำรามนั้น คือความหิวกระหายของสิ่งมีชีวิตที่ยิ่งใหญ่กว่า",
			"ความจริงที่ซ่อนเร้น บัดนี้ ค่ำคืนสุดท้ายมาเยือน"
		],
		"hindi": [
			"रक्त-रंजित हिमक्षेत्र। एक जमी हुई संधि से अंकित भूमि।",
			"ब्योर्न ब्लडवोल्फ, शीतकालीन शिकारी। उसकी गर्जना के नीचे, सब कुछ शांत हो गया।",
			"परन्तु वह गर्जना एक कहीं अधिक विशाल सत्ता की भूख थी।",
			"छिपा हुआ सच। अब, अंतिम रात्रि आती है।"
		]
	}
} as const;
