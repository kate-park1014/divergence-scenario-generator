export const scenario_hell_lumen_31_03 = {
	"scenario_id": "hell_lumen_31_03",
	"order": 3,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"ash": {
			"id": "mon_b225f5fa-59a1-47bb-b4c5-e73bf9e7192a",
			"name": {
				"korean": "애쉬",
				"english": "Ash",
				"japanese": "アッシュ",
				"chinese": "艾什",
				"french": "Ash",
				"spanish": "Ash",
				"vietnamese": "Ash",
				"thai": "แอช",
				"hindi": "ऐश"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d84413a8-9d6f-4a40-5d36-75e431fb9900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/78281fca-e4b8-45cc-68ef-7df3fef74200/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"루멘의 빛, 구원이라 불리는 환상.",
			"그러나 그 빛 아래, 모든 것이 뒤틀려가고 있었다.",
			"맹목적인 믿음이 드리운 덫.",
			"진실을 좇는 자, 그 그림자에 발을 들이다."
		],
		"english": [
			"Lumen's light, an illusion called salvation.",
			"Yet beneath that light, all was twisting.",
			"A trap laid by blind faith.",
			"Those who seek truth step into its shadow."
		],
		"japanese": [
			"ルーメンの光、救済と呼ばれる幻想。",
			"しかしその光の下、全てが歪んでいった。",
			"盲目的な信仰が仕掛けた罠。",
			"真実を追う者、その影に足を踏み入れる。"
		],
		"chinese": [
			"卢门之光，名为救赎的幻想。",
			"然而在那光芒之下，万物皆在扭曲。",
			"盲目信仰所设下的陷阱。",
			"追寻真理者，踏入其阴影。"
		],
		"french": [
			"La lumière de Lumen, une illusion appelée salut.",
			"Pourtant, sous cette lumière, tout se tordait.",
			"Un piège tendu par une foi aveugle.",
			"Ceux qui cherchent la vérité mettent le pied dans son ombre."
		],
		"spanish": [
			"La luz de Lumen, una ilusión llamada salvación.",
			"Sin embargo, bajo esa luz, todo se retorcía.",
			"Una trampa tendida por la fe ciega.",
			"Quienes buscan la verdad, pisan su sombra."
		],
		"vietnamese": [
			"Ánh sáng của Lumen, một ảo ảnh gọi là cứu rỗi.",
			"Tuy nhiên, dưới ánh sáng đó, mọi thứ đều biến dạng.",
			"Một cái bẫy do niềm tin mù quáng giăng ra.",
			"Người truy tìm sự thật, bước vào cái bóng đó."
		],
		"thai": [
			"แสงแห่งลูเมน, ภาพลวงตาที่เรียกว่าความรอด.",
			"ทว่าภายใต้แสงนั้น ทุกสิ่งกำลังบิดเบี้ยว.",
			"กับดักที่เกิดจากศรัทธาที่มืดบอด.",
			"ผู้แสวงหาความจริง ก้าวเข้าสู่เงามืดนั้น."
		],
		"hindi": [
			"ल्यूमेन का प्रकाश, मोक्ष नामक एक भ्रम।",
			"फिर भी उस प्रकाश के नीचे, सब कुछ विकृत हो रहा था।",
			"अंधविश्वास द्वारा बिछाया गया एक जाल।",
			"सत्य के खोजी, उसकी छाया में कदम रखते हैं।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "음습한 지하 감옥. 희미한 불빛조차 꺼져가는 곳.",
						"english": "A damp dungeon. A place where even faint lights fade.",
						"japanese": "じめじめした地下牢。かすかな光さえ消えゆく場所。",
						"chinese": "阴暗的地下牢。连微弱的灯火也逐渐熄灭之处。",
						"french": "Un donjon humide. Un endroit où même les faibles lumières s'éteignent.",
						"spanish": "Una mazmorra húmeda. Un lugar donde incluso las luces tenues se desvanecen.",
						"vietnamese": "Một hầm ngục ẩm ướt. Nơi cả những ánh đèn mờ ảo cũng đang lụi tàn.",
						"thai": "คุกใต้ดินอับชื้น. ที่ซึ่งแม้แต่แสงริบหรี่ก็เลือนหายไป.",
						"hindi": "एक नम कालकोठरी। एक ऐसी जगह जहाँ मंद रोशनी भी बुझ रही है।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "ash",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "…당신도 '구원'을 찾으러 왔나요?",
						"english": "...Are you also here to seek 'salvation'?",
						"japanese": "…あなたも「救済」を求めて来たのですか？",
						"chinese": "……你也是来寻求“救赎”的吗？",
						"french": "...Êtes-vous aussi venu chercher le \"salut\" ?",
						"spanish": "...¿Tú también has venido a buscar la \"salvación\"?",
						"vietnamese": "...Bạn cũng đến để tìm 'cứu rỗi' ư?",
						"thai": "...คุณก็มาตามหา 'ความรอด' เช่นกันหรือ?",
						"hindi": "...क्या तुम भी 'मोक्ष' खोजने आए हो?"
					},
					"speaker": "ash",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "당신은 누구죠?",
						"english": "Who are you?",
						"japanese": "あなたは誰ですか？",
						"chinese": "你是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Bạn là ai?",
						"thai": "คุณคือใคร?",
						"hindi": "तुम कौन हो?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "ash",
					"content": {
						"korean": "애쉬. 루멘 님의 빛으로 다시 태어난 영혼.",
						"english": "Ash. A soul reborn by the light of Lumen.",
						"japanese": "アッシュ。ルーメン様の光によって生まれ変わった魂。",
						"chinese": "艾什。由卢门大人的光芒重生的灵魂。",
						"french": "Ash. Une âme renaître par la lumière de Lumen.",
						"spanish": "Ash. Un alma renacida por la luz de Lumen.",
						"vietnamese": "Ash. Một linh hồn được tái sinh bởi ánh sáng của Lumen.",
						"thai": "แอช. วิญญาณที่เกิดใหม่ด้วยแสงของลูเมน.",
						"hindi": "ऐश। ल्यूमेन के प्रकाश से पुनर्जीवित आत्मा।"
					}
				},
				{
					"content": {
						"korean": "다시 태어났다고요?",
						"english": "Reborn?",
						"japanese": "生まれ変わったと？",
						"chinese": "重生了？",
						"french": "Renaître ?",
						"spanish": "¿Renacido?",
						"vietnamese": "Tái sinh ư?",
						"thai": "เกิดใหม่หรือ?",
						"hindi": "पुनर्जीवित?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "ash",
					"content": {
						"korean": "이 고통스러운 지옥에서… 루멘 님만이 우리를 구원할 수 있어요.",
						"english": "In this hell of torment... only Lord Lumen can save us.",
						"japanese": "この苦痛に満ちた地獄で… ルーメン様だけが私たちを救えるのです。",
						"chinese": "在这痛苦的地狱中……唯有卢门大人能拯救我们。",
						"french": "Dans cet enfer de tourments... seul Seigneur Lumen peut nous sauver.",
						"spanish": "En este infierno de tormento... solo Lord Lumen puede salvarnos.",
						"vietnamese": "Trong địa ngục đầy đau khổ này... chỉ có Chúa Lumen mới có thể cứu rỗi chúng ta.",
						"thai": "ในนรกแห่งความทรมานนี้... มีเพียงท่านลูเมนเท่านั้นที่ช่วยเราได้.",
						"hindi": "इस दर्दनाक नर्क में... केवल लॉर्ड ल्यूमेन ही हमें बचा सकते हैं।"
					}
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "애쉬의 눈동자에는 알 수 없는 광기와 두려움이 함께 서려 있었다.",
						"english": "Ash's eyes held an unknown madness and fear.",
						"japanese": "アッシュの瞳には、未知の狂気と恐怖が宿っていた。",
						"chinese": "艾什的眼中，交织着未知的疯狂与恐惧。",
						"french": "Dans les yeux d'Ash se mêlaient une folie et une peur inconnues.",
						"spanish": "En los ojos de Ash residía una locura y un miedo desconocidos.",
						"vietnamese": "Trong mắt Ash, ẩn chứa sự điên loạn và nỗi sợ hãi không thể lý giải.",
						"thai": "ในดวงตาของแอชมีความบ้าคลั่งและความกลัวที่ไม่รู้จักแฝงอยู่",
						"hindi": "ऐश की आँखों में एक अज्ञात उन्माद और भय समाया हुआ था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"spot": [
						3,
						3
					],
					"speaker": "ash",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "ash",
					"content": {
						"korean": "루멘 님은 우리에게 모든 것을 주셨죠. 고통 없는 삶… 영원한 평화.",
						"english": "Lord Lumen gave us everything. A life without pain... eternal peace.",
						"japanese": "ルーメン様は私たちに全てを与えてくださった。苦痛なき生…永遠の平和を。",
						"chinese": "鲁门大人赐予了我们一切。无痛苦的生活…永恒的和平。",
						"french": "Seigneur Lumen nous a tout donné. Une vie sans douleur... une paix éternelle.",
						"spanish": "Lord Lumen nos dio todo. Una vida sin dolor... paz eterna.",
						"vietnamese": "Chúa Lumen đã ban cho chúng ta mọi thứ. Một cuộc sống không đau khổ... bình yên vĩnh hằng.",
						"thai": "ลอร์ดลูเมนประทานทุกสิ่งแก่เรา ชีวิตที่ปราศจากความเจ็บปวด... สันติสุขนิรันดร์",
						"hindi": "भगवान ल्यूमेन ने हमें सब कुछ दिया। दर्द रहित जीवन... अनंत शांति।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "정말 평화로워 보이지 않는데.",
						"english": "Doesn't look peaceful at all.",
						"japanese": "全然平和に見えないけど。",
						"chinese": "这看起来一点也不平静。",
						"french": "Ça n'a pas l'air paisible du tout.",
						"spanish": "No parece nada pacífico.",
						"vietnamese": "Trông có vẻ không bình yên chút nào.",
						"thai": "ดูไม่สงบเลยนะ",
						"hindi": "बिल्कुल भी शांतिपूर्ण नहीं लग रहा है।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "ash",
					"content": {
						"korean": "…이것이 바로 구원이에요. 의심하지 마세요.",
						"english": "...This is salvation. Do not doubt.",
						"japanese": "…これこそが救済なのです。疑わないでください。",
						"chinese": "…这就是救赎。不要怀疑。",
						"french": "...C'est ça le salut. Ne doutez pas.",
						"spanish": "...Esta es la salvación. No dudes.",
						"vietnamese": "...Đây chính là sự cứu rỗi. Đừng nghi ngờ.",
						"thai": "...นี่คือความรอด อย่าสงสัยเลย",
						"hindi": "...यह मुक्ति है। संदेह मत करो।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "무엇이 두려운 거죠?",
						"english": "What are you afraid of?",
						"japanese": "何を恐れているの？",
						"chinese": "你在害怕什么？",
						"french": "De quoi as-tu peur ?",
						"spanish": "¿De qué tienes miedo?",
						"vietnamese": "Ngươi đang sợ gì vậy?",
						"thai": "คุณกลัวอะไรอยู่?",
						"hindi": "आपको किस बात का डर है?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "루멘 님의 '의지'를 거스르면… 더 깊은 고통이 따를 뿐이에요.",
						"english": "To defy Lord Lumen's 'will' will only bring deeper pain.",
						"japanese": "ルーメン様の『意思』に逆らえば…より深い苦痛が伴うだけです。",
						"chinese": "违背鲁门大人的‘意志’…只会带来更深的痛苦。",
						"french": "Défier la 'volonté' de Seigneur Lumen... n'apportera que des souffrances plus profondes.",
						"spanish": "Desafiar la 'voluntad' de Lord Lumen... solo traerá un dolor más profundo.",
						"vietnamese": "Chống lại 'ý chí' của Chúa Lumen... chỉ mang lại nỗi đau sâu sắc hơn mà thôi.",
						"thai": "หากฝ่าฝืน 'เจตจำนง' ของลอร์ดลูเมน... ก็จะตามมาด้วยความเจ็บปวดที่ลึกซึ้งยิ่งขึ้นเท่านั้น",
						"hindi": "भगवान ल्यूमेन की 'इच्छा' का उल्लंघन करने पर... केवल गहरा दर्द ही मिलेगा।"
					},
					"speaker": "ash",
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "애쉬는 마치 누군가에게 조종당하는 인형 같았다.",
						"english": "Ash was like a puppet controlled by someone.",
						"japanese": "アッシュは、まるで誰かに操られる人形のようだった。",
						"chinese": "艾什仿佛一个被人操控的木偶。",
						"french": "Ash était comme une marionnette contrôlée par quelqu'un.",
						"spanish": "Ash era como una marioneta controlada por alguien.",
						"vietnamese": "Ash như một con rối bị ai đó điều khiển.",
						"thai": "แอชเป็นเหมือนหุ่นเชิดที่ถูกควบคุมโดยใครบางคน",
						"hindi": "ऐश किसी के द्वारा नियंत्रित कठपुतली की तरह था।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ash",
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "루멘 님의 '목표'는 모두를 위한 거예요. 이 지옥을… 완전히 새롭게 만들려는.",
						"english": "Lord Lumen's 'goal' is for everyone. To completely remake this hell...",
						"japanese": "ルーメン様の『目標』は、全ての人々のためのものです。この地獄を…完全に作り変えようと。",
						"chinese": "鲁门大人的‘目标’是为了所有人。将这地狱…彻底改造。",
						"french": "Le 'but' de Seigneur Lumen est pour tous. Refaire complètement cet enfer...",
						"spanish": "El 'objetivo' de Lord Lumen es para todos. Para rehacer completamente este infierno...",
						"vietnamese": "'Mục tiêu' của Chúa Lumen là dành cho tất cả mọi người. Để hoàn toàn tái tạo địa ngục này...",
						"thai": "'เป้าหมาย' ของลอร์ดลูเมนคือเพื่อทุกคน เพื่อสร้างนรกนี้ขึ้นมาใหม่ทั้งหมด...",
						"hindi": "भगवान ल्यूमेन का 'लक्ष्य' सभी के लिए है। इस नरक को... पूरी तरह से नया बनाने के लिए।"
					},
					"speaker": "ash",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "새롭게 만든다고요? 어떻게?",
						"english": "Remake it? How?",
						"japanese": "作り変えるって？どうやって？",
						"chinese": "重新改造？怎么改造？",
						"french": "Refaire ? Comment ?",
						"spanish": "¿Rehacerlo? ¿Cómo?",
						"vietnamese": "Tái tạo lại sao? Bằng cách nào?",
						"thai": "สร้างใหม่เหรอ? ทำยังไง?",
						"hindi": "नया बनाओ? कैसे?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "ash",
					"content": {
						"korean": "…모든 것을 정화하고, 새로운 질서를 세우는 거죠. 반대하는 자는… 사라져야만 해요.",
						"english": "...Purify everything and establish a new order. Those who oppose... must disappear.",
						"japanese": "…全てを浄化し、新たな秩序を築くのです。反対する者は…消え去らねばなりません。",
						"chinese": "…净化一切，建立新的秩序。反对者…必须消失。",
						"french": "...Purifier tout et établir un nouvel ordre. Ceux qui s'opposent... doivent disparaître.",
						"spanish": "...Purificarlo todo y establecer un nuevo orden. Aquellos que se opongan... deben desaparecer.",
						"vietnamese": "...Thanh tẩy mọi thứ và thiết lập một trật tự mới. Những kẻ chống đối... phải biến mất.",
						"thai": "...ชำระล้างทุกสิ่งและสร้างระเบียบใหม่ ผู้ที่ต่อต้าน... จะต้องหายไป",
						"hindi": "...सब कुछ शुद्ध करना और एक नई व्यवस्था स्थापित करना। जो विरोध करते हैं... उन्हें गायब होना होगा।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그게 구원이라고요?",
						"english": "Is that salvation?",
						"japanese": "それが救いだと？",
						"chinese": "那就是救赎吗？",
						"french": "C'est ça, le salut ?",
						"spanish": "¿Eso es la salvación?",
						"vietnamese": "Đó là sự cứu rỗi sao?",
						"thai": "นั่นคือความรอดหรือ?",
						"hindi": "क्या वही मोक्ष है?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그게… 바로… '뒤틀린 신념'에서 오는 유일한 길이니까요.",
						"english": "Because that... is the only path... from 'Twisted Faith'.",
						"japanese": "それが…まさしく…『歪んだ信仰』から来る唯一の道ですから。",
						"chinese": "因为…那正是…来自‘扭曲的信仰’的唯一途径。",
						"french": "Parce que c'est... la seule voie... issue de la 'Foi Tordue'.",
						"spanish": "Porque ese... es el único camino... de la 'Fe Retorcida'.",
						"vietnamese": "Bởi vì đó... là con đường duy nhất... đến từ 'Niềm Tin Sai Lệch'.",
						"thai": "เพราะนั่น... คือหนทางเดียว... ที่มาจาก 'ศรัทธาบิดเบี้ยว' ไงล่ะ",
						"hindi": "क्योंकि वही... 'विकृत विश्वास' से आने वाला एकमात्र मार्ग है।"
					},
					"speaker": "ash",
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "애쉬의 경고는 섬뜩했다. 더 이상 돌아갈 수 없는 길 위에 서 있었다.",
						"english": "Ash's warning was chilling. I stood on a path from which there was no return.",
						"japanese": "アッシュの警告は不気味だった。もう戻れない道の上に立っていた。",
						"chinese": "艾什的警告令人毛骨悚然。我已站在一条无法回头的路上。",
						"french": "L'avertissement d'Ash était glaçant. J'étais sur une voie sans retour.",
						"spanish": "La advertencia de Ash fue escalofriante. Estaba en un camino sin retorno.",
						"vietnamese": "Lời cảnh báo của Ash thật rợn người. Tôi đã đứng trên con đường không thể quay lại.",
						"thai": "คำเตือนของแอชช่างน่าขนลุก ฉันยืนอยู่บนเส้นทางที่ไม่อาจหวนกลับได้แล้ว",
						"hindi": "ऐश की चेतावनी भयानक थी। मैं एक ऐसे रास्ते पर खड़ा था जहाँ से वापसी नहीं थी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "direction",
					"speaker": "ash",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "주인공… 당신은 아직 몰라요. 루멘 님의 힘은… 거역할 수 없어요.",
						"english": "Protagonist... you still don't understand. Lord Lumen's power... cannot be defied.",
						"japanese": "主人公…貴方はまだ分かっていない。ルーメン様の力は…逆らえないのです。",
						"chinese": "主角…你还不明白。路门大人的力量…是无法违抗的。",
						"french": "Protagoniste... tu ne sais pas encore. Le pouvoir de Seigneur Lumen... est irréfutable.",
						"spanish": "Protagonista... aún no lo entiendes. El poder de Lord Lumen... no puede ser desafiado.",
						"vietnamese": "Nhân vật chính... ngươi vẫn chưa hiểu. Sức mạnh của Lãnh chúa Lumen... không thể bị chống đối.",
						"thai": "ตัวเอก... ท่านยังไม่เข้าใจ พลังของท่านลูเมน... ไม่อาจต้านทานได้",
						"hindi": "नायक... तुम अभी नहीं जानते। ल्यूमेन स्वामी की शक्ति... का उल्लंघन नहीं किया जा सकता।"
					},
					"speaker": "ash"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "뭘 거역할 수 없다는 거죠?",
						"english": "What can't be defied?",
						"japanese": "何を逆らえないと言うんだ？",
						"chinese": "什么无法违抗？",
						"french": "Qu'est-ce qui ne peut être défié ?",
						"spanish": "¿Qué es lo que no se puede desafiar?",
						"vietnamese": "Cái gì không thể bị chống đối?",
						"thai": "อะไรที่ไม่อาจต้านทานได้?",
						"hindi": "क्या उल्लंघन नहीं किया जा सकता?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "이 모든 것은… 위대한 '계획'의 일부예요. 당신도 곧 깨닫게 될 거예요.",
						"english": "All of this... is part of a grand 'Plan'. You'll soon realize it too.",
						"japanese": "この全ては…偉大な『計画』の一部なのです。貴方もすぐに気付くでしょう。",
						"chinese": "这一切…都是伟大‘计划’的一部分。你很快也会明白的。",
						"french": "Tout cela... fait partie d'un grand 'Plan'. Tu le comprendras bientôt aussi.",
						"spanish": "Todo esto... es parte de un gran 'Plan'. Tú también lo comprenderás pronto.",
						"vietnamese": "Tất cả những điều này... là một phần của 'Kế Hoạch' vĩ đại. Ngươi cũng sẽ sớm nhận ra thôi.",
						"thai": "ทั้งหมดนี้... คือส่วนหนึ่งของ 'แผนการ' อันยิ่งใหญ่ ท่านเองก็จะตระหนักได้ในไม่ช้า",
						"hindi": "यह सब... एक महान 'योजना' का हिस्सा है। तुम भी जल्द ही समझ जाओगे।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "난 내 길을 갈 거야.",
						"english": "I'll go my own way.",
						"japanese": "私は私の道を行く。",
						"chinese": "我将走我自己的路。",
						"french": "Je suivrai ma propre voie.",
						"spanish": "Seguiré mi propio camino.",
						"vietnamese": "Ta sẽ đi con đường của riêng ta.",
						"thai": "ฉันจะไปในทางของฉัน",
						"hindi": "मैं अपना रास्ता चलूँगा।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "ash",
					"content": {
						"korean": "제발… 루멘 님을 거스르지 마세요… 그는… 모든 것을….",
						"english": "Please... do not defy Lord Lumen... he... controls everything...",
						"japanese": "どうか…ルーメン様に逆らわないでください…彼は…全てを…。",
						"chinese": "请…不要违抗路门大人…他…掌握着一切…。",
						"french": "S'il vous plaît... ne défiez pas Seigneur Lumen... il... contrôle tout...",
						"spanish": "Por favor... no desafíes a Lord Lumen... él... lo controla todo...",
						"vietnamese": "Làm ơn... đừng chống đối Lãnh chúa Lumen... người... nắm giữ mọi thứ...",
						"thai": "โปรด... อย่าท้าทายท่านลูเมน... ท่าน... ควบคุมทุกสิ่ง...",
						"hindi": "कृपया... ल्यूमेन स्वामी का उल्लंघन मत करो... वह... सब कुछ..."
					}
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "절망적인 힘이 탐험대를 압도했다.",
						"english": "A despairing power overwhelmed the expedition.",
						"japanese": "絶望的な力が探検隊を圧倒した。",
						"chinese": "绝望的力量压倒了探险队。",
						"french": "Une puissance désespérante submergea l'expédition.",
						"spanish": "Un poder desesperante abrumó a la expedición.",
						"vietnamese": "Một sức mạnh tuyệt vọng đã áp đảo đoàn thám hiểm.",
						"thai": "พลังอันสิ้นหวังเข้าครอบงำคณะสำรวจ",
						"hindi": "एक निराशाजनक शक्ति ने अभियान दल को अभिभूत कर दिया।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "이것이… 루멘 님의 힘이다. 감히 대적하려 했는가?",
						"english": "This is... Lord Lumen's power. Did you dare defy it?",
						"japanese": "これが…ルーメン様の力だ。よくも逆らおうとしたな？",
						"chinese": "这就是…卢门大人的力量。你竟敢反抗？",
						"french": "C'est cela... le pouvoir de Maître Lumen. Osais-tu défier ?",
						"spanish": "Este es... el poder de Lord Lumen. ¿Osaste desafiarlo?",
						"vietnamese": "Đây là... sức mạnh của Chúa tể Lumen. Ngươi dám chống lại sao?",
						"thai": "นี่คือ... พลังของท่านลูเมน เจ้ากล้าที่จะต่อต้านหรือ?",
						"hindi": "यह है... लॉर्ड ल्यूमेन की शक्ति। तुमने इसका सामना करने की हिम्मत कैसे की?"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…아직 끝나지 않았어.",
						"english": "...It's not over yet.",
						"japanese": "…まだ終わっていない。",
						"chinese": "…还没结束。",
						"french": "...Ce n'est pas encore fini.",
						"spanish": "...Aún no ha terminado.",
						"vietnamese": "...Vẫn chưa kết thúc đâu.",
						"thai": "...ยังไม่จบแค่นี้หรอก",
						"hindi": "...अभी खत्म नहीं हुआ है।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 반항이군. 다시 와라… 그때는… 더 큰 고통을 안겨주지.",
						"english": "A pathetic resistance. Come again... and next time... I'll inflict even greater pain.",
						"japanese": "取るに足らない反抗だ。また来るがいい…その時は…更なる苦痛を与えてやろう。",
						"chinese": "微不足道的反抗。再来吧…届时…我将赐予你更大的痛苦。",
						"french": "Une résistance insignifiante. Reviens... et la prochaine fois... je t'infligerai une douleur encore plus grande.",
						"spanish": "Una resistencia insignificante. Vuelve... y la próxima vez... te infligiré un dolor aún mayor.",
						"vietnamese": "Một sự phản kháng tầm thường. Ngươi hãy quay lại đi... lần tới... ta sẽ ban cho ngươi nỗi đau lớn hơn.",
						"thai": "การต่อต้านที่ไร้ค่า กลับมาอีกครั้งเถอะ... ครั้งหน้า... ข้าจะมอบความเจ็บปวดที่ยิ่งใหญ่กว่าให้",
						"hindi": "तुच्छ प्रतिरोध। दोबारा आओ... तब... मैं तुम्हें और अधिक पीड़ा दूंगा।"
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "괴물은 비명을 지르며 스러졌다. 그러나 공간을 채운 광기는 여전했다.",
						"english": "The monster collapsed, screaming. But the madness filling the space remained.",
						"japanese": "怪物は悲鳴を上げながら倒れた。しかし、空間を満たす狂気は依然としてそこにあった。",
						"chinese": "怪物尖叫着倒下了。然而，充满空间的疯狂依然存在。",
						"french": "Le monstre s'écroula en hurlant. Mais la folie qui emplissait l'espace persistait.",
						"spanish": "El monstruo se desplomó gritando. Pero la locura que llenaba el espacio permanecía.",
						"vietnamese": "Con quái vật gào thét rồi gục ngã. Nhưng sự điên loạn tràn ngập không gian vẫn còn đó.",
						"thai": "สัตว์ประหลาดกรีดร้องและล้มลง ทว่าความบ้าคลั่งที่เต็มพื้นที่ก็ยังคงอยู่",
						"hindi": "राक्षस चीखता हुआ गिर पड़ा। लेकिन अंतरिक्ष को भरने वाला पागलपन अभी भी बना हुआ था।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…어리석은… 것들… 루멘 님의… '진정한 구원'은….",
						"english": "...Fools... Lord Lumen's... 'true salvation' is...",
						"japanese": "…愚かな…者たちよ…ルーメン様の…『真の救済』は…。",
						"chinese": "…愚蠢的…东西们…卢门大人的…“真正的救赎”是…。",
						"french": "...Imbéciles... La 'véritable rédemption' de Seigneur Lumen est...",
						"spanish": "...Necios... La 'verdadera salvación' de Lord Lumen es...",
						"vietnamese": "...Những kẻ... ngu xuẩn... 'sự cứu rỗi đích thực' của Chúa Lumen là...",
						"thai": "...พวก...โง่เขลา... 'การไถ่บาปที่แท้จริง' ของท่านลูเมนคือ...",
						"hindi": "...मूर्खों... लॉर्ड लुमेन की... 'वास्तविक मुक्ति' है..."
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "진정한 구원이 뭔데?",
						"english": "What is this true salvation?",
						"japanese": "真の救済とは何だ？",
						"chinese": "什么才是真正的救赎？",
						"french": "Qu'est-ce que cette véritable rédemption ?",
						"spanish": "¿Qué es esa verdadera salvación?",
						"vietnamese": "Sự cứu rỗi đích thực là gì?",
						"thai": "การไถ่บาปที่แท้จริงคืออะไร?",
						"hindi": "यह वास्तविक मुक्ति क्या है?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…모든 것을… 집어삼킬….",
						"english": "...To devour... everything...",
						"japanese": "…全てを…飲み込む…。",
						"chinese": "…吞噬…一切…。",
						"french": "...Dévorer... tout...",
						"spanish": "...Devorar... todo...",
						"vietnamese": "...Nuốt chửng... mọi thứ...",
						"thai": "...กลืนกิน...ทุกสิ่ง...",
						"hindi": "...सब कुछ... निगल जाना..."
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…결국 아무것도 알려주지 않았어.",
						"english": "...In the end, it told us nothing.",
						"japanese": "…結局、何も教えてくれなかった。",
						"chinese": "…最终什么也没告诉我们。",
						"french": "...Finalement, ça ne nous a rien dit.",
						"spanish": "...Al final, no nos dijo nada.",
						"vietnamese": "...Cuối cùng, nó chẳng nói gì cả.",
						"thai": "...สุดท้ายก็ไม่บอกอะไรเลย",
						"hindi": "...अंत में, इसने हमें कुछ नहीं बताया।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "쓰러진 괴물의 잔재 위로, 또 다른 어둠이 스멀스멀 피어오르고 있었다. 루멘의 그림자는 더욱 짙어져 갔다.",
						"english": "Above the remnants of the fallen monster, another darkness slowly crept up. Lumen's shadow grew deeper.",
						"japanese": "倒れた怪物の残骸の上で、別の闇がゆっくりと這い上がっていた。ルーメンの影はさらに色濃くなっていった。",
						"chinese": "在倒下的怪物残骸上，另一股黑暗正在缓缓升起。卢门的阴影变得更加深沉。",
						"french": "Au-dessus des restes du monstre tombé, une autre obscurité rampait lentement. L'ombre de Lumen s'épaississait.",
						"spanish": "Sobre los restos del monstruo caído, otra oscuridad se arrastraba lentamente. La sombra de Lumen se hizo más profunda.",
						"vietnamese": "Trên tàn dư của con quái vật đã ngã, một bóng tối khác từ từ trỗi dậy. Bóng của Lumen càng trở nên đậm đặc.",
						"thai": "เหนือซากของสัตว์ประหลาดที่ล้มลง ความมืดอีกชนิดหนึ่งค่อยๆ คืบคลานเข้ามา เงาของลูเมนก็ทวีความมืดมิดยิ่งขึ้น",
						"hindi": "गिरे हुए राक्षस के अवशेषों के ऊपर, एक और अंधकार धीरे-धीरे फैल रहा था। लुमेन की छाया और गहरी होती गई।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "어둠 속에서 거대한 그림자가 일렁였다. 맹목적인 믿음이 빚어낸 괴물.",
						"english": "A colossal shadow flickered in the darkness. A monster born of blind faith.",
						"japanese": "闇の中で巨大な影が揺らめいた。盲目的な信仰が生み出した怪物。",
						"chinese": "黑暗中，一个巨大的身影晃动着。一个由盲目信仰孕育出的怪物。",
						"french": "Une ombre colossale vacillait dans l'obscurité. Un monstre né d'une foi aveugle.",
						"spanish": "Una sombra colosal parpadeó en la oscuridad. Un monstruo nacido de la fe ciega.",
						"vietnamese": "Một bóng tối khổng lồ lấp ló trong bóng đêm. Một con quái vật sinh ra từ niềm tin mù quáng.",
						"thai": "เงามืดมหึมาไหวระริกในความมืดมิด สัตว์ประหลาดที่เกิดจากศรัทธาอันมืดบอด",
						"hindi": "अंधेरे में एक विशाल छाया झिलमिला रही थी। अंधविश्वास से जन्मा एक राक्षस।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "감히… 루멘 님의 뜻을 거스르려 하는가?",
						"english": "How dare you... defy Lord Lumen's will?",
						"japanese": "よくも…ルーメン様の意に逆らおうとするか？",
						"chinese": "你竟敢…违抗路门大人的旨意？",
						"french": "Comment oses-tu... défier la volonté de Seigneur Lumen ?",
						"spanish": "¿Cómo te atreves... a desafiar la voluntad de Lord Lumen?",
						"vietnamese": "Ngươi dám... chống lại ý muốn của Lãnh chúa Lumen sao?",
						"thai": "แกกล้าดียังไง... มาขัดขืนเจตจำนงของท่านลูเมน?",
						"hindi": "तुम्हारी हिम्मत कैसे हुई... ल्यूमेन स्वामी की इच्छा का उल्लंघन करने की?"
					}
				},
				{
					"content": {
						"korean": "너희의 믿음은 뒤틀렸어.",
						"english": "Your faith is twisted.",
						"japanese": "お前たちの信仰は歪んでいる。",
						"chinese": "你们的信仰扭曲了。",
						"french": "Votre foi est tordue.",
						"spanish": "Vuestra fe está retorcida.",
						"vietnamese": "Niềm tin của các ngươi đã bị bóp méo.",
						"thai": "ศรัทธาของพวกเจ้าบิดเบี้ยวไปแล้ว",
						"hindi": "तुम्हारा विश्वास विकृत है।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "뒤틀렸다고? 이 어둠 속에서… 유일한 빛을 모독하는 자!",
						"english": "Twisted? In this darkness... you defile the only light!",
						"japanese": "歪んでいるだと？この闇の中で…唯一の光を冒涜する者め！",
						"chinese": "扭曲？在这黑暗中…竟敢亵渎唯一的光明！",
						"french": "Tordue ? Dans ces ténèbres... vous blasphémez la seule lumière !",
						"spanish": "¿Retorcida? ¡En esta oscuridad... profanas la única luz!",
						"vietnamese": "Bóp méo ư? Trong bóng tối này... ngươi dám phỉ báng ánh sáng duy nhất!",
						"thai": "บิดเบี้ยวอย่างนั้นหรือ? ในความมืดมิดนี้... เจ้าผู้ดูหมิ่นแสงสว่างเพียงหนึ่งเดียว!",
						"hindi": "विकृत? इस अंधकार में... एकमात्र प्रकाश को अपवित्र करने वाला!"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "너희의 어리석음을 후회하게 해주마!",
						"english": "I'll make you regret your foolishness!",
						"japanese": "お前たちの愚かさを後悔させてやる！",
						"chinese": "我会让你们为自己的愚蠢付出代价！",
						"french": "Je vous ferai regretter votre folie !",
						"spanish": "¡Os haré lamentar vuestra necedad!",
						"vietnamese": "Ta sẽ khiến các ngươi phải hối hận vì sự ngu xuẩn của mình!",
						"thai": "ข้าจะทำให้พวกเจ้าต้องเสียใจกับการกระทำที่โง่เขลาของพวกเจ้า!",
						"hindi": "मैं तुम्हें तुम्हारी मूर्खता पर पछतावा कराऊंगा!"
					},
					"speaker": "random_boss"
				}
			]
		}
	]
} as const;
