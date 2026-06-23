export const scenario_modern_elara_43_02 = {
	"scenario_id": "modern_elara_43_02",
	"order": 2,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"nia": {
			"id": "mon_872177dd-fcf0-40d8-b78c-fd795017c763",
			"name": {
				"korean": "니아",
				"english": "Nia",
				"japanese": "ニア",
				"chinese": "妮娅",
				"french": "Nia",
				"spanish": "Nia",
				"vietnamese": "Nia",
				"thai": "เนีย",
				"hindi": "निया"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/db690f96-d5b3-498a-f4ec-f269e6e95100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a8fe5d7a-56fe-4822-c272-5a04fd7f4c00/public"
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
					"emotion": "base",
					"content": {
						"korean": "낡은 건물들 사이, 어두운 뒷골목. 엘라라의 잔영이 자주 스치던 곳.",
						"english": "Among old buildings, a dark alley. Where Elara's lingering presence often brushed.",
						"japanese": "古い建物の間、暗い裏路地。エララの残影がよくよぎった場所。",
						"chinese": "旧楼之间，昏暗的后巷。埃拉拉的残影曾在此频繁掠过。",
						"french": "Entre de vieux bâtiments, une ruelle sombre. Où l'ombre d'Elara passait souvent.",
						"spanish": "Entre edificios antiguos, un callejón oscuro. Donde la presencia persistente de Elara solía rozar.",
						"vietnamese": "Giữa những tòa nhà cũ, một con hẻm tối. Nơi bóng dáng Elara thường lướt qua.",
						"thai": "ท่ามกลางอาคารเก่าแก่ ตรอกซอกซอยมืดมิด. ที่ที่เงาของเอลาร่ามักจะพาดผ่าน.",
						"hindi": "पुरानी इमारतों के बीच, एक अँधेरी गली। जहाँ एलारा की बची हुई उपस्थिति अक्सर महसूस होती थी।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "또 여기야? 벌써 세 번째인데.",
						"english": "Here again? This is the third time.",
						"japanese": "またここか？もう三度目だぞ。",
						"chinese": "又是这里？这已经是第三次了。",
						"french": "Encore ici ? C'est la troisième fois.",
						"spanish": "¿Otra vez aquí? Esta es la tercera vez.",
						"vietnamese": "Lại đây à? Lần thứ ba rồi đấy.",
						"thai": "อีกแล้วเหรอ? นี่เป็นครั้งที่สามแล้วนะ.",
						"hindi": "फिर से यहाँ? यह तीसरी बार है।"
					}
				},
				{
					"spot": [
						4,
						3
					],
					"speaker": "nia",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "찾았어. 옛날 갱스터 조직 아지트 흔적.",
						"english": "Found it. Traces of an old gangster hideout.",
						"japanese": "見つけた。昔のギャング組織のアジトの痕跡。",
						"chinese": "找到了。一个老帮派巢穴的痕迹。",
						"french": "Trouvé. Des traces d'un ancien repaire de gangsters.",
						"spanish": "Lo encontré. Rastros de un antiguo escondite de gánsteres.",
						"vietnamese": "Tìm thấy rồi. Dấu vết của một căn cứ cũ của băng đảng xã hội đen.",
						"thai": "เจอแล้ว. ร่องรอยของรังลับแก๊งสเตอร์เก่า.",
						"hindi": "मिल गया। एक पुराने गैंगस्टर के ठिकाने के निशान।"
					},
					"speaker": "nia",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "갱스터? 엘라라랑 무슨 상관인데?",
						"english": "Gangsters? What do they have to do with Elara?",
						"japanese": "ギャング？エララと何の関係があるんだ？",
						"chinese": "帮派？这和埃拉拉有什么关系？",
						"french": "Des gangsters ? Quel est le rapport avec Elara ?",
						"spanish": "¿Gánsteres? ¿Qué tienen que ver con Elara?",
						"vietnamese": "Băng đảng? Liên quan gì đến Elara?",
						"thai": "แก๊งสเตอร์? แล้วมันเกี่ยวอะไรกับเอลาร่า?",
						"hindi": "गैंगस्टर? एलारा से इनका क्या लेना-देना है?"
					},
					"speaker": "character_1",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "nia",
					"content": {
						"korean": "엘라라가 한때 이곳에 머물렀던 것 같아.",
						"english": "It seems Elara once stayed here.",
						"japanese": "エララはかつてここに滞在していたようだ。",
						"chinese": "埃拉拉似乎曾经在这里待过。",
						"french": "Il semble qu'Elara ait séjourné ici autrefois.",
						"spanish": "Parece que Elara se quedó aquí una vez.",
						"vietnamese": "Có vẻ như Elara từng ở đây.",
						"thai": "ดูเหมือนว่าเอลาร่าเคยอยู่ที่นี่ครั้งหนึ่ง.",
						"hindi": "लगता है एलारा कभी यहाँ रुकी थी।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "nia",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "여기 봐. 낡은 성냥갑. 이니셜이 새겨져 있어. 'E' 그리고 'D'.",
						"english": "Look here. An old matchbox. Initials carved: 'E' and 'D'.",
						"japanese": "ここを見て。古いマッチ箱。イニシャルが刻まれている。'E' と 'D'。",
						"chinese": "看这里。一个旧火柴盒。刻着首字母：'E' 和 'D'。",
						"french": "Regarde ici. Une vieille boîte d'allumettes. Des initiales gravées : 'E' et 'D'.",
						"spanish": "Mira aquí. Una vieja caja de cerillas. Iniciales grabadas: 'E' y 'D'.",
						"vietnamese": "Nhìn đây. Một hộp diêm cũ. Khắc chữ cái đầu: 'E' và 'D'.",
						"thai": "ดูนี่สิ. กลักไม้ขีดเก่า. มีอักษรย่อสลักอยู่: 'E' และ 'D'.",
						"hindi": "यहाँ देखो। एक पुरानी माचिस की डिब्बी। शुरुआती अक्षर खुदे हुए हैं: 'E' और 'D'।"
					},
					"speaker": "nia"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "엘라라? 그럼 D는 누구지? 두목인가?",
						"english": "Elara? Then who is D? The boss?",
						"japanese": "エララ？じゃあDは誰だ？ボスか？",
						"chinese": "艾拉拉？那D是谁？是头目吗？",
						"french": "Elara ? Alors qui est D ? Le chef ?",
						"spanish": "¿Elara? Entonces, ¿quién es D? ¿El jefe?",
						"vietnamese": "Elara? Vậy D là ai? Là thủ lĩnh sao?",
						"thai": "เอลาร่า? แล้ว D คือใคร? หัวหน้าเหรอ?",
						"hindi": "एलारा? तो डी कौन है? बॉस है क्या?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "벽에 낙서도 있어. '배신자는 절대 용서 못 해.'",
						"english": "There's graffiti on the wall. 'Traitors will never be forgiven.'",
						"japanese": "壁に落書きもある。「裏切り者は絶対に許さない。」",
						"chinese": "墙上还有涂鸦。“绝不原谅背叛者。”",
						"french": "Il y a aussi des graffitis sur le mur. \"Les traîtres ne seront jamais pardonnés.\"",
						"spanish": "Hay grafitis en la pared. 'A los traidores nunca se les perdonará.'",
						"vietnamese": "Trên tường còn có hình vẽ bậy. 'Kẻ phản bội sẽ không bao giờ được tha thứ.'",
						"thai": "มีภาพวาดบนกำแพงด้วย 'คนทรยศจะไม่มีวันได้รับการอภัย'",
						"hindi": "दीवार पर भित्तिचित्र भी हैं। 'देशद्रोहियों को कभी माफ नहीं किया जाएगा।'"
					},
					"speaker": "character_2",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "조직 내부에 배신자가 있었고, 엘라라는 그걸 목격한 거야.",
						"english": "There was a traitor within the organization, and Elara witnessed it.",
						"japanese": "組織内部に裏切り者がいて、エララはそれを目撃したんだ。",
						"chinese": "组织内部有叛徒，艾拉拉目睹了这一切。",
						"french": "Il y avait un traître au sein de l'organisation, et Elara en a été témoin.",
						"spanish": "Había un traidor dentro de la organización, y Elara lo presenció.",
						"vietnamese": "Có một kẻ phản bội trong tổ chức, và Elara đã chứng kiến điều đó.",
						"thai": "มีคนทรยศภายในองค์กร และเอลาร่าก็เป็นพยาน",
						"hindi": "संगठन के भीतर एक गद्दार था, और एलारा ने इसे देखा।"
					},
					"speaker": "nia"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "공간을 가득 채우는 공포가 탐험대의 숨통을 조여온다.",
						"english": "A fear filling the space tightens the expedition team's breath.",
						"japanese": "空間を満たす恐怖が、探検隊の息の根を締め付ける。",
						"chinese": "弥漫空间的恐惧扼住了探险队的呼吸。",
						"french": "Une terreur emplissant l'espace coupe le souffle de l'équipe d'expédition.",
						"spanish": "Un miedo que llena el espacio ahoga la respiración del equipo de expedición.",
						"vietnamese": "Nỗi sợ hãi tràn ngập không gian đang siết chặt hơi thở của đoàn thám hiểm.",
						"thai": "ความกลัวที่เต็มพื้นที่บีบรัดลมหายใจของทีมสำรวจ",
						"hindi": "अंतरिक्ष को भरने वाला एक डर अभियान दल की सांसों को कस रहा है।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"speaker": "nia"
				},
				{
					"content": {
						"korean": "이 조직은 '검은 그림자단'이라고 불렸어. 꽤 악명 높았지.",
						"english": "This organization was called the 'Black Shadow Syndicate'. It was quite infamous.",
						"japanese": "この組織は「黒い影団」と呼ばれていた。かなり悪名高かったね。",
						"chinese": "这个组织被称为“黑影帮”。它臭名昭著。",
						"french": "Cette organisation était appelée le « Syndicat de l'Ombre Noire ». Elle était assez tristement célèbre.",
						"spanish": "Esta organización se llamaba el 'Sindicato de la Sombra Negra'. Era bastante infame.",
						"vietnamese": "Tổ chức này được gọi là 'Bang Hắc Ảnh'. Nó khá khét tiếng.",
						"thai": "องค์กรนี้ถูกเรียกว่า 'กลุ่มเงาดำ' มันค่อนข้างมีชื่อเสีย",
						"hindi": "इस संगठन को 'ब्लैक शैडो सिंडिकेट' कहा जाता था। यह काफी कुख्यात था।"
					},
					"speaker": "nia",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "지금은 흔적도 없는데.",
						"english": "Now, there's no trace of it.",
						"japanese": "今は影も形もないけど。",
						"chinese": "现在，它了无踪迹。",
						"french": "Maintenant, il n'y a plus aucune trace.",
						"spanish": "Ahora, no hay rastro de ello.",
						"vietnamese": "Giờ thì chẳng còn dấu vết gì nữa.",
						"thai": "ตอนนี้ไม่มีร่องรอยแล้ว",
						"hindi": "अब, इसका कोई निशान नहीं है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "어느 날 갑자기 사라졌어. 모두가 두목의 배신이라고 말했지.",
						"english": "One day, it suddenly disappeared. Everyone said it was the boss's betrayal.",
						"japanese": "ある日突然消えたんだ。みんな、ボスの裏切りだって言ってた。",
						"chinese": "有一天，它突然消失了。所有人都说是头目背叛了。",
						"french": "Un jour, il a soudainement disparu. Tout le monde a dit que c'était la trahison du chef.",
						"spanish": "Un día, desapareció de repente. Todos dijeron que fue la traición del jefe.",
						"vietnamese": "Một ngày nọ, nó đột nhiên biến mất. Mọi người đều nói đó là sự phản bội của thủ lĩnh.",
						"thai": "วันหนึ่งมันก็หายไปอย่างกะทันหัน ทุกคนบอกว่าเป็นการทรยศของหัวหน้า",
						"hindi": "एक दिन, यह अचानक गायब हो गया। सबने कहा कि यह बॉस का विश्वासघात था।"
					},
					"speaker": "nia",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_3",
					"content": {
						"korean": "댄스홀 신문 기사가 떠오르네. 그 조직 몰락에 대한…",
						"english": "That dance hall newspaper article comes to mind. About the downfall of that organization...",
						"japanese": "ダンスホールの新聞記事が思い浮かぶな。あの組織の没落について…",
						"chinese": "让我想起了舞厅的报纸文章。关于那个组织的没落…",
						"french": "Cet article de journal sur la salle de danse me revient à l'esprit. Sur la chute de cette organisation…",
						"spanish": "Me viene a la mente el artículo del periódico del salón de baile. Sobre la caída de esa organización…",
						"vietnamese": "Bài báo về vũ trường đó hiện lên trong đầu tôi. Về sự sụp đổ của tổ chức đó...",
						"thai": "บทความหนังสือพิมพ์ห้องเต้นรำนั้นผุดขึ้นมาในใจ เกี่ยวกับการล่มสลายขององค์กรนั้น...",
						"hindi": "उस डांस हॉल के अख़बार का लेख याद आ रहा है। उस संगठन के पतन के बारे में..."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "nia",
					"content": {
						"korean": "맞아. 그 신문 기사는 빙산의 일각이었어. 이 조직은 사라진 게 아니야.",
						"english": "Right. That newspaper article was just the tip of the iceberg. This organization didn't disappear.",
						"japanese": "そうだ。あの新聞記事は氷山の一角だった。この組織は消滅したわけじゃない。",
						"chinese": "对。那篇报纸文章只是冰山一角。这个组织并没有消失。",
						"french": "Exact. Cet article de journal n'était que la pointe de l'iceberg. Cette organisation n'a pas disparu.",
						"spanish": "Correcto. Ese artículo de periódico era solo la punta del iceberg. Esta organización no desapareció.",
						"vietnamese": "Đúng vậy. Bài báo đó chỉ là phần nổi của tảng băng chìm. Tổ chức này không hề biến mất.",
						"thai": "ใช่ บทความหนังสือพิมพ์นั้นเป็นเพียงยอดภูเขาน้ำแข็ง องค์กรนี้ยังไม่หายไปไหน",
						"hindi": "सही है। वह अख़बार का लेख सिर्फ़ हिमखंड का सिरा था। यह संगठन गायब नहीं हुआ।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "짙은 그림자가 움직인다. 무언가 다가오고 있었다.",
						"english": "Dark shadows move. Something was approaching.",
						"japanese": "濃い影が動く。何かが近づいていた。",
						"chinese": "浓重的阴影在移动。有什么东西正在靠近。",
						"french": "Des ombres épaisses bougent. Quelque chose approchait.",
						"spanish": "Sombras densas se mueven. Algo se acercaba.",
						"vietnamese": "Những bóng đen đậm đặc di chuyển. Có gì đó đang đến gần.",
						"thai": "เงาทึบเคลื่อนไหว มีบางสิ่งกำลังเข้ามา",
						"hindi": "गहरी परछाइयां हिल रही हैं। कुछ आ रहा था।"
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "그림자가 벽을 타고 흐른다. 거대한 그림자가 앞을 가로막는다.",
						"english": "Shadows creep along the wall. A colossal shadow blocks the way.",
						"japanese": "影が壁を這う。巨大な影が道を塞ぐ。",
						"chinese": "影子沿着墙壁蔓延。一个巨大的影子挡住了去路。",
						"french": "Les ombres rampent le long du mur. Une ombre colossale obstrue le chemin.",
						"spanish": "Las sombras se deslizan por la pared. Una sombra colosal bloquea el paso.",
						"vietnamese": "Bóng tối bò dọc bức tường. Một bóng đen khổng lồ chặn đường.",
						"thai": "เงาคืบคลานไปตามกำแพง เงาขนาดยักษ์ขวางทางอยู่",
						"hindi": "परछाइयाँ दीवार पर रेंगती हैं। एक विशाल परछाई रास्ता रोकती है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "여기까지 왔군. …재미있어지는군.",
						"english": "You've made it this far. ...Intriguing.",
						"japanese": "ここまで来たか。…面白くなってきたな。",
						"chinese": "你走到这里了。……变得有趣起来了。",
						"french": "Tu es venu jusqu'ici. ...Intéressant.",
						"spanish": "Has llegado hasta aquí. ...Interesante.",
						"vietnamese": "Ngươi đã đến tận đây. ...Thú vị đấy.",
						"thai": "เจ้ามาได้ถึงขนาดนี้แล้วรึ ...น่าสนใจดีนี่",
						"hindi": "तुम यहाँ तक आ गए। ...दिलचस्प होता जा रहा है।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "뭐냐 넌.",
						"english": "What are you?",
						"japanese": "貴様は何者だ。",
						"chinese": "你是什么人？",
						"french": "Qu'es-tu ?",
						"spanish": "¿Qué eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "เจ้าคืออะไร?",
						"hindi": "तुम क्या हो?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "방해는 여기까지다. 돌아갈 길은 없어.",
						"english": "Your interference ends here. There's no turning back.",
						"japanese": "邪魔はここまでだ。戻る道はない。",
						"chinese": "你的阻碍到此为止。没有回头路了。",
						"french": "Ton intrusion s'arrête ici. Il n'y a pas de retour en arrière.",
						"spanish": "Tu interferencia termina aquí. No hay vuelta atrás.",
						"vietnamese": "Sự can thiệp của ngươi kết thúc tại đây. Không còn đường quay lại.",
						"thai": "การขัดขวางของเจ้าจะจบลงตรงนี้ ไม่มีทางถอยแล้ว",
						"hindi": "तुम्हारा हस्तक्षेप यहीं ख़त्म होता है। वापस जाने का कोई रास्ता नहीं है।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "물러설 곳도 없어. 간다!",
						"english": "No retreat. Here I come!",
						"japanese": "退く場所もない。行くぞ！",
						"chinese": "无路可退。来吧！",
						"french": "Pas de retraite. J'arrive !",
						"spanish": "No hay retirada. ¡Allá voy!",
						"vietnamese": "Không còn đường lùi. Đến đây!",
						"thai": "ไม่มีที่ให้ถอยแล้ว ไปเลย!",
						"hindi": "पीछे हटने की जगह नहीं है। मैं आता हूँ!"
					},
					"speaker": "character_4"
				},
				{
					"content": {
						"korean": "무거운 침묵이 흐른다. 후회는 없었다.",
						"english": "A heavy silence falls. There were no regrets.",
						"japanese": "重い沈黙が流れる。後悔はなかった。",
						"chinese": "沉重的沉默蔓延。毫无悔意。",
						"french": "Un silence lourd s'installe. Il n'y avait aucun regret.",
						"spanish": "Un pesado silencio cae. No hubo arrepentimientos.",
						"vietnamese": "Một sự im lặng nặng nề bao trùm. Không có gì phải hối tiếc.",
						"thai": "ความเงียบงันหนักอึ้งโรยตัวลง ไม่มีความเสียใจ",
						"hindi": "एक भारी चुप्पी छा जाती है। कोई पछतावा नहीं था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "어리석은 인간들. 절망 속에서 죽어라.",
						"english": "Foolish humans. Perish in despair.",
						"japanese": "愚かな人間ども。絶望の中で死ね。",
						"chinese": "愚蠢的人类。在绝望中死去吧。",
						"french": "Humains insensés. Mourez dans le désespoir.",
						"spanish": "Humanos insensatos. Morid en la desesperación.",
						"vietnamese": "Lũ người ngu ngốc. Chết trong tuyệt vọng đi.",
						"thai": "มนุษย์ที่โง่เขลา จงตายในความสิ้นหวังซะ",
						"hindi": "मूर्ख मनुष्यो। निराशा में मरो।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아직… 포기 안 해…!",
						"english": "Not yet... I won't give up...!",
						"japanese": "まだ…諦めない…！",
						"chinese": "我还没…放弃…！",
						"french": "Pas encore... Je n'abandonnerai pas... !",
						"spanish": "Aún no... ¡No me rendiré...!",
						"vietnamese": "Chưa... tôi sẽ không bỏ cuộc...!",
						"thai": "ยัง...ไม่ยอมแพ้...!",
						"hindi": "अभी नहीं... मैं हार नहीं मानूँगा...!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크큭. 다음은… 없을 것이다.",
						"english": "Heh heh. There will be... no next time.",
						"japanese": "ククク。次は…ないだろう。",
						"chinese": "呵呵。不会有…下次了。",
						"french": "Hé hé. Il n'y aura... pas de prochaine fois.",
						"spanish": "Je je. No habrá... una próxima vez.",
						"vietnamese": "Khặc khặc. Sẽ không có… lần sau đâu.",
						"thai": "คิกคิก ไม่มี...ครั้งหน้าหรอก",
						"hindi": "हाँ हाँ। अगली बार... नहीं होगी।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "헛된 희망을 좇는군. 이곳에서 모든 것이 끝난다.",
						"english": "Chasing false hope. Everything ends here.",
						"japanese": "헛된希望を追うか。全てはここで終わる。",
						"chinese": "追逐虚假的希望。一切都将在此终结。",
						"french": "Poursuivant un espoir vain. Tout se termine ici.",
						"spanish": "Persigues una vana esperanza. Todo termina aquí.",
						"vietnamese": "Đuổi theo hy vọng hão huyền. Mọi thứ kết thúc tại đây.",
						"thai": "ไล่ตามความหวังที่เปล่าประโยชน์ ทุกสิ่งจะจบลงตรงนี้",
						"hindi": "व्यर्थ की आशा का पीछा कर रहे हो। सब कुछ यहीं समाप्त होता है।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "너 같은 그림자에게 질 순 없어!",
						"english": "I won't lose to a shadow like you!",
						"japanese": "貴様のような影に負けるものか！",
						"chinese": "我不会输给你这种影子！",
						"french": "Je ne perdrai pas face à une ombre comme toi !",
						"spanish": "¡No perderé contra una sombra como tú!",
						"vietnamese": "Ta sẽ không thua một cái bóng như ngươi!",
						"thai": "ข้าไม่แพ้เงาอย่างเจ้าหรอก!",
						"hindi": "मैं तुम जैसे साये से नहीं हारूंगा!"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "덤벼라. 네 절망을 보여주마.",
						"english": "Come. I'll show you despair.",
						"japanese": "かかってこい。貴様の絶望を見せてやろう。",
						"chinese": "放马过来。我会让你见识绝望。",
						"french": "Viens. Je te montrerai le désespoir.",
						"spanish": "Ataca. Te mostraré la desesperación.",
						"vietnamese": "Đến đây. Ta sẽ cho ngươi thấy sự tuyệt vọng của ngươi.",
						"thai": "เข้ามาสิ ข้าจะแสดงความสิ้นหวังของเจ้าให้ดู",
						"hindi": "आओ। मैं तुम्हें निराशा दिखाऊंगा।"
					},
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…크큭. 아직… 아무것도… 모르는군…",
						"english": "...Heh. You still... know nothing...",
						"japanese": "…ククク。まだ…何も…分かっていないようだな…",
						"chinese": "……呵呵。你还……什么都……不知道呢……",
						"french": "...Hé hé. Tu ne... sais encore... rien...",
						"spanish": "...Jeje. Aún... no sabes... nada...",
						"vietnamese": "...Khà khà. Ngươi vẫn... chưa biết... gì cả...",
						"thai": "...หึหึ. เจ้ายัง... ไม่รู้อะไรเลย...",
						"hindi": "...हं हं। तुम अभी भी... कुछ भी... नहीं जानते..."
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야.",
						"english": "What was that?",
						"japanese": "何の音だ？",
						"chinese": "什么声音？",
						"french": "Qu'est-ce que c'était ?",
						"spanish": "¿Qué fue eso?",
						"vietnamese": "Cái gì vậy?",
						"thai": "อะไรนะ?",
						"hindi": "यह क्या था?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그림자는 흩어지고, 낡은 성냥갑이 바닥에 떨어졌다. 그 안에서 빛바랜 오팔 펜던트가 떨어져 나왔다.",
						"english": "The shadows scattered, and an old matchbox fell to the floor. From within, a faded opal pendant tumbled out.",
						"japanese": "影は散り、古いマッチ箱が床に落ちた。その中から色あせたオパールペンダントが転がり出た。",
						"chinese": "阴影消散，一个旧火柴盒掉落在地。一个褪色的蛋白石吊坠从中滚了出来。",
						"french": "Les ombres se sont dispersées, et une vieille boîte d'allumettes est tombée au sol. De l'intérieur, un pendentif en opale fané en est sorti.",
						"spanish": "Las sombras se dispersaron, y una vieja caja de cerillas cayó al suelo. De su interior, un descolorido colgante de ópalo rodó hacia afuera.",
						"vietnamese": "Bóng tối tan biến, một hộp diêm cũ rơi xuống sàn. Từ bên trong, một mặt dây chuyền opal phai màu lăn ra.",
						"thai": "เงากระจัดกระจาย กล่องไม้ขีดเก่าตกกระทบพื้น ข้างในมีจี้โอปอลที่ซีดจางหลุดออกมา",
						"hindi": "छायाएँ बिखर गईं, और एक पुरानी माचिस की डिब्बी ज़मीन पर गिर गई। उसके अंदर से एक फीका पड़ा ओपल पेंडेंट बाहर निकला।"
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "이 모든 비극의 시작은… 아직 끝나지 않았다.",
						"english": "The beginning of all this tragedy... is not over yet.",
						"japanese": "この全ての悲劇の始まりは…まだ終わっていない。",
						"chinese": "这一切悲剧的开端…尚未结束。",
						"french": "Le début de toute cette tragédie... n'est pas encore terminé.",
						"spanish": "El inicio de toda esta tragedia... aún no ha terminado.",
						"vietnamese": "Khởi đầu của bi kịch này… vẫn chưa kết thúc.",
						"thai": "จุดเริ่มต้นของโศกนาฏกรรมทั้งหมดนี้...ยังไม่จบลง",
						"hindi": "इस सारी त्रासदी की शुरुआत... अभी खत्म नहीं हुई है।"
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
			"엘라라의 그림자가 드리운 도시, 낡은 뒷골목에 숨겨진 비밀.",
			"정보원 니아가 잊힌 아지트의 흔적을 쫓는다.",
			"배신과 공포가 뒤섞인 과거의 조각들이 깨어나고 있었다.",
			"그림자는 점점 짙어지고, 진실은 발밑에서 속삭인다."
		],
		"english": [
			"A city shadowed by Elara, secrets hidden in old back alleys.",
			"Nia, the informant, tracks traces of a forgotten hideout.",
			"Fragments of a past, intertwined with betrayal and fear, were awakening.",
			"Shadows deepen, and truth whispers beneath their feet."
		],
		"japanese": [
			"エララの影が差す都市、古い裏路地に隠された秘密。",
			"情報屋ニアが忘れ去られたアジトの痕跡を追う。",
			"裏切りと恐怖が入り混じった過去の断片が目覚めつつあった。",
			"影はますます濃くなり、真実は足元でささやく。"
		],
		"chinese": [
			"埃拉拉阴影笼罩的都市，旧巷深处隐藏的秘密。",
			"线人妮娅追踪着被遗忘的巢穴踪迹。",
			"交织着背叛与恐惧的过往碎片正在苏醒。",
			"阴影渐浓，真相在脚下低语。"
		],
		"french": [
			"Une ville assombrie par Elara, des secrets cachés dans de vieilles ruelles.",
			"Nia, l'informatrice, traque les traces d'un repaire oublié.",
			"Des fragments d'un passé, mêlés de trahison et de peur, s'éveillaient.",
			"Les ombres s'épaississent, et la vérité murmure sous leurs pieds."
		],
		"spanish": [
			"Una ciudad ensombrecida por Elara, secretos ocultos en viejos callejones.",
			"Nia, la informante, sigue las huellas de un escondite olvidado.",
			"Fragmentos de un pasado, entremezclados con traición y miedo, estaban despertando.",
			"Las sombras se profundizan, y la verdad susurra bajo sus pies."
		],
		"vietnamese": [
			"Thành phố bị bóng Elara bao phủ, bí mật ẩn sâu trong những con hẻm cũ.",
			"Nia, người cung cấp tin, theo dấu vết của một nơi ẩn náu bị lãng quên.",
			"Những mảnh ghép quá khứ, đan xen sự phản bội và nỗi sợ hãi, đang thức tỉnh.",
			"Bóng tối ngày càng dày đặc, và sự thật thì thầm dưới chân."
		],
		"thai": [
			"เมืองที่ถูกเงาของเอลาร่าปกคลุม, ความลับซ่อนอยู่ในตรอกซอกซอยเก่าแก่.",
			"เนีย สายข่าว ตามรอยรังลับที่ถูกลืม.",
			"ชิ้นส่วนของอดีตที่ปะปนไปด้วยการหักหลังและความกลัวกำลังตื่นขึ้น.",
			"เงาเริ่มทึบขึ้น, และความจริงกระซิบอยู่ใต้เท้า."
		],
		"hindi": [
			"एलारा की छाया से ढका शहर, पुरानी गलियों में छिपे रहस्य।",
			"निया, मुखबिर, एक भूली हुई गुप्त जगह के निशानों का पीछा करती है।",
			"विश्वासघात और भय से सने अतीत के टुकड़े जाग रहे थे।",
			"परछाइयाँ और गहरी होती जा रही हैं, और सच उनके पैरों के नीचे फुसफुसाता है।"
		]
	}
} as const;
