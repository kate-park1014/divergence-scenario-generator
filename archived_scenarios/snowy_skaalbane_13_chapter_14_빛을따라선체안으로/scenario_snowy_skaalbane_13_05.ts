export const scenario_snowy_skaalbane_13_05 = {
	"scenario_id": "snowy_skaalbane_13_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "snowy",
	"actors": {
		"frost": {
			"id": "mon_942bca3b-33e7-4b14-98e5-ec1e2dc78d5b",
			"name": {
				"korean": "서리",
				"english": "Frost",
				"japanese": "霜",
				"chinese": "霜",
				"french": "Givre",
				"spanish": "Escarcha",
				"vietnamese": "Băng Giá",
				"thai": "น้ำแข็ง",
				"hindi": "पाला"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0a8c2f92-0cf9-413d-0b33-8e0204caae00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/df60b327-4cc2-435b-67e0-cffb4c319900/public"
		}
	},
	"boss": {
		"pool_id": "pool_108"
	},
	"prologue": {
		"korean": [
			"잔해탑. 얼어붙은 선체 안으로 들어섰다.",
			"좁은 통로 끝에서 푸른 빛이 더 강렬하게 새어 나온다.",
			"얼음벽 속 수많은 손자국들이, 마치 우리를 부르는 듯하다.",
			"그 빛을 향해, 우리는 멈출 수 없었다."
		],
		"english": [
			"Debris Tower. We entered the frozen hull.",
			"At the end of the narrow passage, a blue light seeped out more intensely.",
			"Countless handprints in the ice wall seemed to call out to us.",
			"Towards that light, we could not stop."
		],
		"japanese": [
			"残骸塔。凍てついた船体の中へ足を踏み入れた。",
			"狭い通路の奥から、青い光がより強く漏れ出している。",
			"氷壁の中の無数の手形が、まるで私たちを呼んでいるかのようだ。",
			"その光に向かい、私たちは止まることができなかった。"
		],
		"chinese": [
			"残骸塔。我们进入了冰冻的船体内部。",
			"在狭窄通道的尽头，一道蓝光愈发强烈地透出。",
			"冰墙中无数的手印，仿佛在呼唤着我们。",
			"朝着那道光，我们无法停下。"
		],
		"french": [
			"La Tour des Débris. Nous sommes entrés dans la coque gelée.",
			"Au bout du passage étroit, une lumière bleue s'échappait avec plus d'intensité.",
			"D'innombrables empreintes de mains dans le mur de glace semblaient nous appeler.",
			"Vers cette lumière, nous ne pouvions nous arrêter."
		],
		"spanish": [
			"Torre de Escombros. Entramos en el casco congelado.",
			"Al final del estrecho pasillo, una luz azul se filtraba con mayor intensidad.",
			"Innumerables huellas de manos en la pared de hielo, como si nos llamaran.",
			"Hacia esa luz, no pudimos detenernos."
		],
		"vietnamese": [
			"Tháp Phế Tích. Chúng tôi bước vào thân tàu đóng băng.",
			"Cuối hành lang hẹp, ánh sáng xanh lam rực rỡ hơn tràn ra.",
			"Vô số dấu tay trên tường băng, như thể đang gọi chúng tôi.",
			"Hướng về ánh sáng đó, chúng tôi không thể dừng lại."
		],
		"thai": [
			"หอคอยซากปรักหักพัง เราเข้าไปในตัวเรือที่กลายเป็นน้ำแข็ง",
			"ที่ปลายทางเดินแคบๆ แสงสีน้ำเงินส่องออกมาแรงขึ้น",
			"รอยมือมากมายบนกำแพงน้ำแข็ง ราวกับกำลังเรียกเราอยู่",
			"เราไม่อาจหยุดได้ มุ่งหน้าสู่แสงนั้น"
		],
		"hindi": [
			"मलबे का टावर। हम जमे हुए पतवार में दाखिल हुए।",
			"संकरे रास्ते के अंत से, नीली रोशनी और भी तेज़ी से बाहर निकल रही थी।",
			"बर्फ की दीवार में अनगिनत हाथों के निशान, मानो हमें बुला रहे हों।",
			"उस रोशनी की ओर, हम रुक नहीं पाए।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "frost",
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "…여기 한기가 심상치 않아.",
						"english": "...The chill here is unusual.",
						"japanese": "...ここの寒気、尋常じゃない。",
						"chinese": "……这里的寒气非同寻常。",
						"french": "...Le froid ici est inhabituel.",
						"spanish": "...El frío aquí es inusual.",
						"vietnamese": "...Cái lạnh ở đây không bình thường.",
						"thai": "...ความหนาวเย็นที่นี่ไม่ธรรมดา",
						"hindi": "...यहाँ की ठंड असामान्य है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "frost"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "점점 더 추워지는 것 같아.",
						"english": "It's getting colder and colder.",
						"japanese": "だんだん寒くなってきているみたいだ。",
						"chinese": "感觉越来越冷了。",
						"french": "Il fait de plus en plus froid.",
						"spanish": "Parece que hace cada vez más frío.",
						"vietnamese": "Càng lúc càng lạnh.",
						"thai": "รู้สึกหนาวขึ้นเรื่อยๆ เลย",
						"hindi": "मुझे लग रहा है कि ठंड बढ़ती जा रही है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "frost",
					"type": "speech",
					"content": {
						"korean": "빛이 강해질 때마다… 한기가 더 짙어지고 있어.",
						"english": "Every time the light intensifies... the chill deepens.",
						"japanese": "光が強くなるたびに… 寒気が濃くなっている。",
						"chinese": "每当光线增强……寒意就更浓了。",
						"french": "À chaque fois que la lumière s'intensifie... le froid s'épaissit.",
						"spanish": "Cada vez que la luz se intensifica... el frío se hace más denso.",
						"vietnamese": "Mỗi khi ánh sáng mạnh hơn... cái lạnh càng dày đặc hơn.",
						"thai": "ทุกครั้งที่แสงสว่างขึ้น... ความหนาวเย็นก็ยิ่งหนาวยิ่งขึ้น",
						"hindi": "जैसे-जैसे रोशनी तेज़ होती है... ठंड और गहरी होती जा रही है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "빛의 박동 때문인가?",
						"english": "Is it because of the light's pulsation?",
						"japanese": "光の鼓動のせいなのか？",
						"chinese": "是光线的脉动吗？",
						"french": "Est-ce à cause de la pulsation de la lumière ?",
						"spanish": "¿Es por el latido de la luz?",
						"vietnamese": "Có phải do nhịp đập của ánh sáng không?",
						"thai": "เป็นเพราะการเต้นของแสงหรือเปล่า?",
						"hindi": "क्या यह प्रकाश की धड़कन के कारण है?"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "frost",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "이 얼음벽… 이 손자국들은 대체.",
						"english": "This ice wall... And these handprints, what are they?",
						"japanese": "この氷の壁…この手形は一体。",
						"chinese": "这冰墙……这些手印到底是什么？",
						"french": "Ce mur de glace... Et ces empreintes de mains, qu'est-ce que c'est ?",
						"spanish": "Esta pared de hielo... Y estas huellas de manos, ¿qué son?",
						"vietnamese": "Bức tường băng này... những dấu tay này là gì vậy?",
						"thai": "กำแพงน้ำแข็งนี้... รอยมือเหล่านี้คืออะไรกันแน่",
						"hindi": "यह बर्फ की दीवार... और ये हाथ के निशान, ये क्या हैं?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "frost"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "마치 살아서 움직이려 했던 흔적 같아.",
						"english": "It's like traces of something trying to move, alive.",
						"japanese": "まるで生きて動こうとした痕跡のようだ。",
						"chinese": "仿佛是曾想活过来移动的痕迹。",
						"french": "On dirait des traces de quelque chose qui a essayé de bouger, vivant.",
						"spanish": "Parecen rastros de algo que intentó moverse, vivo.",
						"vietnamese": "Cứ như là dấu vết của thứ gì đó đã từng cố gắng sống và di chuyển vậy.",
						"thai": "เหมือนร่องรอยของสิ่งที่พยายามจะเคลื่อนไหว มีชีวิต",
						"hindi": "ऐसा लग रहा है जैसे किसी जीवित चीज़ ने हिलने की कोशिश की हो।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "한기와 빛의 박동이… 같은 리듬으로 뛰고 있어.",
						"english": "The chill and the light's pulsation... are beating to the same rhythm.",
						"japanese": "寒気と光の鼓動が…同じリズムで響いている。",
						"chinese": "寒意和光的脉动……以相同的节奏跳动。",
						"french": "Le froid et la pulsation de la lumière... battent au même rythme.",
						"spanish": "El frío y el latido de la luz... laten al mismo ritmo.",
						"vietnamese": "Cái lạnh và nhịp đập của ánh sáng... đang đập cùng một nhịp.",
						"thai": "ความหนาวเย็นและการเต้นของแสง... กำลังเต้นในจังหวะเดียวกัน",
						"hindi": "ठंड और प्रकाश की धड़कन... एक ही ताल पर धड़क रही हैं।"
					},
					"speaker": "frost"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그 말은… 빛의 근원이 이 모든 한기의 원인이라는 거야?",
						"english": "Does that mean... the source of the light is the cause of all this chill?",
						"japanese": "それは… 光の根源がこの寒気の原因だということなのか？",
						"chinese": "那也就是说……光的源头就是所有寒意的起因吗？",
						"french": "Cela signifie-t-il... que la source de la lumière est la cause de tout ce froid ?",
						"spanish": "¿Significa eso... que la fuente de la luz es la causa de todo este frío?",
						"vietnamese": "Điều đó có nghĩa là... nguồn gốc của ánh sáng chính là nguyên nhân của tất cả cái lạnh này sao?",
						"thai": "นั่นหมายความว่า... ต้นกำเนิดของแสงคือสาเหตุของความหนาวเย็นทั้งหมดนี้เหรอ?",
						"hindi": "क्या इसका मतलब है... कि प्रकाश का स्रोत इस सारी ठंड का कारण है?"
					}
				},
				{
					"content": {
						"korean": "…두려워.",
						"english": "...I'm scared.",
						"japanese": "…怖い。",
						"chinese": "……我好害怕。",
						"french": "...J'ai peur.",
						"spanish": "...Tengo miedo.",
						"vietnamese": "...Sợ quá.",
						"thai": "...ฉันกลัว",
						"hindi": "...मुझे डर लग रहा है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "frost"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "frost",
					"spot": [
						3,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "통로는 오직 빛을 향해서만 열려 있었다. 다른 길은 모두 두꺼운 얼음으로 막혔다.",
						"english": "The passage was open only towards the light. All other paths were blocked by thick ice.",
						"japanese": "通路は光の方向へしか開いていなかった。他の道はすべて厚い氷で塞がれていた。",
						"chinese": "通道只朝向光的方向开放。其他所有道路都被厚厚的冰块堵住了。",
						"french": "Le passage n'était ouvert que vers la lumière. Tous les autres chemins étaient bloqués par une épaisse glace.",
						"spanish": "El pasaje estaba abierto solo hacia la luz. Todos los demás caminos estaban bloqueados por un espeso hielo.",
						"vietnamese": "Lối đi chỉ mở ra hướng ánh sáng. Tất cả các con đường khác đều bị chặn bởi lớp băng dày.",
						"thai": "ทางเดินเปิดออกเฉพาะทางสู่แสงสว่างเท่านั้น เส้นทางอื่นทั้งหมดถูกปิดกั้นด้วยน้ำแข็งหนา",
						"hindi": "रास्ता केवल प्रकाश की ओर ही खुला था। बाकी सभी रास्ते मोटी बर्फ से बंद थे।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "다른 길은 아예 갈 수 없게 막아놨어.",
						"english": "The other paths are completely blocked, making them impassable.",
						"japanese": "他の道は全く通れないように塞がれている。",
						"chinese": "其他的路都被完全堵住了，根本走不通。",
						"french": "Les autres chemins sont complètement bloqués, les rendant impraticables.",
						"spanish": "Los otros caminos están completamente bloqueados, haciéndolos intransitables.",
						"vietnamese": "Những con đường khác đã bị chặn hoàn toàn, không thể đi qua được.",
						"thai": "เส้นทางอื่นถูกปิดกั้นโดยสิ้นเชิง ทำให้ไม่สามารถผ่านไปได้",
						"hindi": "अन्य रास्ते पूरी तरह से बंद हैं, जिससे वे अगम्य हो गए हैं।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "이건 우연이 아니야. 누군가 우리를 이 빛으로 유인하고 있어.",
						"english": "This is no coincidence. Someone is luring us to this light.",
						"japanese": "これは偶然じゃない。誰かが私たちをこの光へ誘い込んでいる。",
						"chinese": "这不是巧合。有人把我们引诱到这光里。",
						"french": "Ce n'est pas une coïncidence. Quelqu'un nous attire vers cette lumière.",
						"spanish": "Esto no es una coincidencia. Alguien nos está atrayendo a esta luz.",
						"vietnamese": "Đây không phải là ngẫu nhiên. Ai đó đang dụ chúng ta đến ánh sáng này.",
						"thai": "นี่ไม่ใช่เรื่องบังเอิญ มีคนกำลังล่อลวงเราไปสู่แสงนี้",
						"hindi": "यह कोई संयोग नहीं है। कोई हमें इस रोशनी की ओर खींच रहा है।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "frost"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "갇힌 자들의 신호가… 더 강해지고 있어.",
						"english": "The signals of the trapped… are growing stronger.",
						"japanese": "囚われた者たちの信号が… さらに強くなっている。",
						"chinese": "被困者的信号… 正在变得更强。",
						"french": "Les signaux des prisonniers… se renforcent.",
						"spanish": "Las señales de los atrapados… se están volviendo más fuertes.",
						"vietnamese": "Tín hiệu của những người bị giam cầm… đang mạnh lên.",
						"thai": "สัญญาณของผู้ที่ถูกจองจำ… กำลังแรงขึ้น",
						"hindi": "फंसे हुए लोगों के संकेत… और मजबूत हो रहे हैं।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "frost",
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "빛이 가까워질수록, 여러 목소리가 겹쳐진 속삭임이 또렷해졌다.",
						"english": "As the light drew nearer, a whisper of overlapping voices became clearer.",
						"japanese": "光が近づくにつれて、複数の声が重なったささやきがはっきりとしてきた。",
						"chinese": "随着光线越来越近，多重声音重叠的低语变得清晰起来。",
						"french": "À mesure que la lumière approchait, un murmure de voix superposées devenait plus clair.",
						"spanish": "A medida que la luz se acercaba, un susurro de voces superpuestas se hizo más claro.",
						"vietnamese": "Khi ánh sáng đến gần hơn, tiếng thì thầm của nhiều giọng nói chồng lên nhau trở nên rõ ràng hơn.",
						"thai": "เมื่อแสงเข้าใกล้มากขึ้น เสียงกระซิบที่ทับซ้อนกันของหลายเสียงก็ชัดเจนขึ้น",
						"hindi": "जैसे-जैसे रोशनी करीब आती गई, कई आवाज़ों की फुसफुसाहट साफ होती गई।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…무슨 소리지? 환청인가?",
						"english": "…What's that sound? Is it a hallucination?",
						"japanese": "…何の音だ？幻聴か？",
						"chinese": "…那是什么声音？是幻听吗？",
						"french": "…Quel est ce son ? Est-ce une hallucination ?",
						"spanish": "…¿Qué es ese sonido? ¿Es una alucinación?",
						"vietnamese": "…Âm thanh gì vậy? Có phải ảo giác không?",
						"thai": "…เสียงอะไรน่ะ? เป็นภาพหลอนเหรอ?",
						"hindi": "…यह कैसी आवाज़ है? क्या यह मतिभ्रम है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "frost",
					"content": {
						"korean": "아니, 갇힌 자들의 외침이야. 함께 있어달라는… 고독의 울부짖음.",
						"english": "No, it's the cry of the trapped. A wail of loneliness… begging us to stay with them.",
						"japanese": "違う、囚われた者たちの叫びだ。一緒にいてほしいと… 孤独の叫び。",
						"chinese": "不，是被困者的哭喊。那是孤独的哀嚎……乞求我们与他们同在。",
						"french": "Non, c'est le cri des prisonniers. Un hurlement de solitude… nous suppliant de rester avec eux.",
						"spanish": "No, es el grito de los atrapados. Un lamento de soledad… rogándonos que nos quedemos con ellos.",
						"vietnamese": "Không, đó là tiếng kêu của những người bị giam cầm. Một tiếng rên rỉ của sự cô đơn… cầu xin chúng ta ở lại với họ.",
						"thai": "ไม่ มันคือเสียงกรีดร้องของผู้ที่ถูกจองจำ เสียงคร่ำครวญของความเหงา… ขอร้องให้เราอยู่กับพวกเขา",
						"hindi": "नहीं, यह फंसे हुए लोगों की पुकार है। अकेलेपन का विलाप… हमसे उनके साथ रहने की भीख मांग रहा है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 앞에… 대체 뭐가 기다리고 있는 거지?",
						"english": "What on earth… awaits us ahead?",
						"japanese": "この先に… 一体何が待ち受けているんだ？",
						"chinese": "前面… 到底有什么在等着我们？",
						"french": "Qu'est-ce qui… nous attend devant ?",
						"spanish": "¿Qué demonios… nos espera más adelante?",
						"vietnamese": "Điều gì… đang chờ đợi chúng ta phía trước?",
						"thai": "อะไรกันแน่… ที่รอเราอยู่ข้างหน้า?",
						"hindi": "आगे… आखिर क्या हमारा इंतजार कर रहा है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "통로 끝에서 빛이 강해졌다. 얼음벽 속 손자국들이 일제히 푸르게 번뜩이며 갈라졌다.",
						"english": "At the end of the passage, the light intensified. Handprints in the ice wall glowed blue in unison and cracked.",
						"japanese": "通路の奥で光が強くなった。氷壁の掌紋が一斉に青く輝き、ひび割れた。",
						"chinese": "在通道的尽头，光线增强了。冰墙上的手印齐刷刷地闪烁着蓝光并裂开了。",
						"french": "Au bout du passage, la lumière s'intensifia. Des empreintes de mains dans le mur de glace brillèrent en bleu à l'unisson et se fissurèrent.",
						"spanish": "Al final del pasaje, la luz se intensificó. Huellas de manos en la pared de hielo brillaron en azul al unísono y se agrietaron.",
						"vietnamese": "Ở cuối hành lang, ánh sáng mạnh lên. Những dấu tay trên tường băng đồng loạt phát sáng xanh lam và nứt ra.",
						"thai": "ที่ปลายทางเดิน แสงสว่างจ้าขึ้น รอยมือบนกำแพงน้ำแข็งเรืองแสงสีฟ้าพร้อมกันและแตกร้าว",
						"hindi": "गलियारे के अंत में, रोशनी तेज हो गई। बर्फीली दीवार पर लगे हाथों के निशान एक साथ नीले रंग में चमक उठे और टूट गए।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…나와… 함께… 여기… 있어줘…",
						"english": "…Stay… here… with… me…",
						"japanese": "…私と…一緒に…ここに…いてくれ…",
						"chinese": "…请…与我…一起…留在这里…",
						"french": "…Reste… ici… avec… moi…",
						"spanish": "…Quédate… aquí… conmigo…",
						"vietnamese": "…Hãy… ở lại… đây… với… tôi…",
						"thai": "…อยู่… ที่นี่… กับ… ฉัน…",
						"hindi": "…मेरे… साथ… यहीं… रहो…"
					}
				},
				{
					"content": {
						"korean": "이 목소리는… 아까 그 속삭임이야!",
						"english": "This voice… it's the whisper from earlier!",
						"japanese": "この声は… さっきのささやきだ！",
						"chinese": "这个声音… 是刚才的那个低语！",
						"french": "Cette voix… c'est le murmure de tout à l'heure !",
						"spanish": "¡Esta voz… es el susurro de antes!",
						"vietnamese": "Giọng nói này… chính là tiếng thì thầm lúc nãy!",
						"thai": "เสียงนี้… มันคือเสียงกระซิบเมื่อกี้!",
						"hindi": "यह आवाज़… वही फुसफुसाहट है!"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "frost",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "frost",
					"type": "speech",
					"content": {
						"korean": "빛의 근원이… 이 모든 한기의 원인이야. 갇힌 자들의 고독이… 우리를 삼키려 해!",
						"english": "The source of the light… is the cause of all this cold. The loneliness of the trapped… is trying to swallow us!",
						"japanese": "光の源が… この全ての寒気の原因だ。囚われた者たちの孤独が… 私たちを飲み込もうとしている！",
						"chinese": "光的源头… 是所有寒冷的根源。被困者的孤独… 正在试图吞噬我们！",
						"french": "La source de la lumière… est la cause de tout ce froid. La solitude des prisonniers… essaie de nous engloutir !",
						"spanish": "La fuente de la luz… es la causa de todo este frío. La soledad de los atrapados… ¡está tratando de tragarnos!",
						"vietnamese": "Nguồn gốc của ánh sáng… là nguyên nhân của tất cả sự lạnh lẽo này. Sự cô đơn của những người bị giam cầm… đang cố nuốt chửng chúng ta!",
						"thai": "แหล่งกำเนิดแสง… คือสาเหตุของความหนาวเย็นทั้งหมดนี้ ความเหงาของผู้ที่ถูกจองจำ… กำลังพยายามจะกลืนกินเรา!",
						"hindi": "प्रकाश का स्रोत… इस सारी ठंड का कारण है। फंसे हुए लोगों का अकेलापन… हमें निगलने की कोशिश कर रहा है!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "frost",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "내가 막을게. 너희는 이 고통을 끝내야 해.",
						"english": "I'll hold them off. You must end this suffering.",
						"japanese": "私が食い止める。君たちはこの苦痛を終わらせて。",
						"chinese": "我来挡住。你们必须结束这份痛苦。",
						"french": "Je vais les retenir. Vous devez mettre fin à cette souffrance.",
						"spanish": "Los detendré. Deben acabar con este sufrimiento.",
						"vietnamese": "Ta sẽ ngăn chúng. Các ngươi phải chấm dứt nỗi đau này.",
						"thai": "ฉันจะต้านไว้ พวกนายต้องยุติความเจ็บปวดนี้",
						"hindi": "मैं रोकूंगा। तुम्हें यह पीड़ा खत्म करनी होगी।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "happy",
					"content": {
						"korean": "우리가 이 고독을 멈출 거야!",
						"english": "We'll stop this solitude!",
						"japanese": "私たちがこの孤独を止める！",
						"chinese": "我们会阻止这份孤独！",
						"french": "Nous arrêterons cette solitude !",
						"spanish": "¡Detendremos esta soledad!",
						"vietnamese": "Chúng ta sẽ chấm dứt sự cô độc này!",
						"thai": "เราจะหยุดความโดดเดี่ยวนี้!",
						"hindi": "हम इस एकांत को रोकेंगे!"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…날… 홀로 두지 마…",
						"english": "...Don't... leave me alone...",
						"japanese": "…私を…独りにしないで…",
						"chinese": "…别…别留下我一个人…",
						"french": "...Ne... me laisse pas seul...",
						"spanish": "...No... me dejes solo...",
						"vietnamese": "...Đừng... bỏ mặc tôi một mình...",
						"thai": "...อย่า... ทิ้งฉันไว้คนเดียว...",
						"hindi": "...मुझे... अकेला मत छोड़ो..."
					},
					"type": "speech",
					"speaker": "boss"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "boss",
					"content": {
						"korean": "…너희도… 결국… 나의 일부가 될 거야…",
						"english": "...You too... will eventually... become a part of me...",
						"japanese": "…お前たちも…結局…私の一部となるだろう…",
						"chinese": "…你们也…终究…会成为…我的一部分…",
						"french": "...Vous aussi... finirez... par faire partie de moi...",
						"spanish": "...Vosotros también... al final... seréis parte de mí...",
						"vietnamese": "...Các ngươi cũng... cuối cùng... sẽ trở thành một phần của ta...",
						"thai": "...พวกเจ้าเองก็... ในที่สุด... จะเป็นส่วนหนึ่งของข้า...",
						"hindi": "...तुम भी... आखिरकार... मेरे हिस्से बनोगे..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "…아직 끝나지 않았어. 우린 여기서 멈추지 않아!",
						"english": "...It's not over yet. We won't stop here!",
						"japanese": "…まだ終わってない。私たちはここで止まらない！",
						"chinese": "…还没结束。我们不会止步于此！",
						"french": "...Ce n'est pas encore fini. Nous ne nous arrêterons pas ici !",
						"spanish": "...Aún no ha terminado. ¡No nos detendremos aquí!",
						"vietnamese": "...Chưa kết thúc đâu. Chúng ta sẽ không dừng lại ở đây!",
						"thai": "...ยังไม่จบ เราจะไม่หยุดอยู่แค่นี้!",
						"hindi": "...अभी खत्म नहीं हुआ। हम यहां रुकेंगे नहीं!"
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "frost",
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "frost",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "포기하지 마. 이 고독에 굴복해선 안 돼.",
						"english": "Don't give up. You mustn't surrender to this loneliness.",
						"japanese": "諦めるな。この孤独に屈してはならない。",
						"chinese": "别放弃。你不能向这份孤独屈服。",
						"french": "N'abandonne pas. Tu ne dois pas céder à cette solitude.",
						"spanish": "No te rindas. No debes sucumbir a esta soledad.",
						"vietnamese": "Đừng bỏ cuộc. Đừng gục ngã trước sự cô độc này.",
						"thai": "อย่ายอมแพ้ เจ้าต้องไม่ยอมจำนนต่อความโดดเดี่ยวนี้",
						"hindi": "हार मत मानो। तुम्हें इस अकेलेपन के आगे नहीं झुकना चाहिए।"
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "…결국… 나를… 홀로… 두는구나…",
						"english": "...In the end... you... leave me... alone...",
						"japanese": "…結局…私を…独りに…するのか…",
						"chinese": "…终究…还是…将我…抛弃了吗…",
						"french": "…Au final… vous… me laissez… seul…",
						"spanish": "…Al final… me… dejas… solo…",
						"vietnamese": "...Cuối cùng... ngươi... vẫn bỏ mặc ta... một mình...",
						"thai": "...ในที่สุด... เจ้า... ก็ทิ้งข้า... ไว้คนเดียว...",
						"hindi": "...आखिरकार... तुम... मुझे... अकेला... छोड़ ही गए..."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "boss"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이게 대체… 무슨 의미지?",
						"english": "What does this... even mean?",
						"japanese": "これはいったい…どういう意味だ？",
						"chinese": "这到底…是什么意思？",
						"french": "Qu'est-ce que cela... signifie ?",
						"spanish": "¿Qué significa... esto?",
						"vietnamese": "Rốt cuộc... chuyện này có ý nghĩa gì?",
						"thai": "นี่มัน... หมายความว่ายังไงกันแน่?",
						"hindi": "आखिर इसका... क्या मतलब है?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "빛과 한기의 근원이 사라지자, 갇힌 자들의 울부짖음도 멎었다.",
						"english": "As the source of light and chill vanished, the cries of the imprisoned ceased.",
						"japanese": "光と冷気の源が消えると、囚われし者たちの叫びも止んだ。",
						"chinese": "光与寒气的源头消失后，被困者的哀嚎也随之平息。",
						"french": "Lorsque la source de lumière et de froid disparut, les lamentations des emprisonnés cessèrent.",
						"spanish": "Al desaparecer la fuente de luz y frío, los lamentos de los cautivos cesaron.",
						"vietnamese": "Khi nguồn sáng và hơi lạnh biến mất, tiếng kêu gào của những kẻ bị giam cầm cũng im bặt.",
						"thai": "เมื่อแหล่งกำเนิดแสงและความหนาวเย็นหายไป เสียงคร่ำครวญของผู้ถูกจองจำก็หยุดลง",
						"hindi": "जैसे ही प्रकाश और ठंड का स्रोत गायब हुआ, बंदियों की चीखें भी थम गईं।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "그러나 잔해탑의 더 깊은 곳에서… 새로운 박동이 느껴지는 듯했다.",
						"english": "Yet, from deeper within the Ruined Tower... a new pulse seemed to stir.",
						"japanese": "しかし、残骸の塔のさらに深部から…新たな鼓動が感じられるようだった。",
						"chinese": "然而，在残骸之塔更深处…似乎有新的脉动传来。",
						"french": "Pourtant, des profondeurs de la Tour en Ruines... un nouveau battement semblait se faire sentir.",
						"spanish": "Sin embargo, desde lo más profundo de la Torre en Ruinas... parecía percibirse un nuevo latido.",
						"vietnamese": "Tuy nhiên, từ sâu thẳm hơn trong Tháp Phế Tích... dường như có một nhịp đập mới đang trỗi dậy.",
						"thai": "ทว่า จากส่วนลึกยิ่งกว่าภายในหอคอยปรักหักพัง... ราวกับมีชีพจรใหม่เริ่มเต้น",
						"hindi": "फिर भी, खंडहर टावर के और गहरे से... एक नई धड़कन महसूस होने लगी।"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"spot": [
						3,
						3
					],
					"speaker": "frost",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "끝이 아니야. 더 깊은 곳에서… 더 거대한 고독이 느껴져.",
						"english": "This isn't the end. From deeper within... a greater solitude is felt.",
						"japanese": "終わりじゃない。もっと深奥で…より巨大な孤独が感じられる。",
						"chinese": "这并非终结。在更深处…能感受到更巨大的孤独。",
						"french": "Ce n'est pas la fin. D'encore plus profond... une solitude plus grande se fait sentir.",
						"spanish": "No es el final. Desde lo más profundo... se siente una soledad aún mayor.",
						"vietnamese": "Đây không phải là kết thúc. Từ sâu thẳm hơn... một sự cô độc vĩ đại hơn đang được cảm nhận.",
						"thai": "นี่ไม่ใช่จุดจบ จากส่วนที่ลึกกว่า... สัมผัสได้ถึงความโดดเดี่ยวที่ยิ่งใหญ่กว่า",
						"hindi": "यह अंत नहीं है। और गहरे से... एक और बड़ी एकांत महसूस हो रही है।"
					},
					"emotion": "base",
					"speaker": "frost"
				}
			],
			"id": 15
		}
	],
	"epilogue": {
		"korean": [
			"격렬했던 전투 후, 잔해탑은 다시 침묵에 잠겼다.",
			"빛은 사라졌고, 한기도 옅어졌다. 모든 것이 멈춘 듯했다.",
			"하지만 얼음벽 속 손자국들은 여전히, 무언가를 갈구하는 듯했다.",
			"이 침묵이 진정한 해방이었을까, 혹은 또 다른 시작일까.",
			"차가운 공기 속, 알 수 없는 불안감이 맴돌았다."
		],
		"english": [
			"After the fierce battle, the Debris Tower fell silent once more.",
			"The light vanished, and the chill faded. Everything seemed to have stopped.",
			"But the handprints in the ice wall still seemed to yearn for something.",
			"Was this silence true liberation, or yet another beginning?",
			"In the cold air, an unknown uneasiness lingered."
		],
		"japanese": [
			"激しい戦闘の後、残骸塔は再び沈黙に包まれた。",
			"光は消え、寒気も薄れた。すべてが止まったかのようだった。",
			"しかし、氷壁の中の手形は依然として、何かを渇望しているかのようだった。",
			"この沈黙が真の解放だったのか、あるいはまた別の始まりなのか。",
			"冷たい空気の中、未知の不安感が漂っていた。"
		],
		"chinese": [
			"激烈的战斗之后，残骸塔再次陷入沉寂。",
			"光芒消逝，寒意减弱。一切似乎都停止了。",
			"然而，冰墙中的手印依然，仿佛渴望着什么。",
			"这份寂静是真正的解放，抑或是又一个开始？",
			"冰冷的空气中，弥漫着一丝未知的 불안。"
		],
		"french": [
			"Après la bataille féroce, la Tour des Débris sombra à nouveau dans le silence.",
			"La lumière disparut, et le froid s'estompa. Tout semblait s'être arrêté.",
			"Mais les empreintes de mains dans le mur de glace semblaient toujours désirer quelque chose.",
			"Ce silence était-il une véritable libération, ou un autre commencement ?",
			"Dans l'air froid, une inquiétude inconnue persistait."
		],
		"spanish": [
			"Después de la feroz batalla, la Torre de Escombros volvió a quedar en silencio.",
			"La luz desapareció y el frío se atenuó. Todo parecía haberse detenido.",
			"Pero las huellas de manos en la pared de hielo aún anhelaban algo.",
			"¿Fue este silencio una verdadera liberación, o acaso otro comienzo?",
			"En el aire frío, una inquietud desconocida flotaba."
		],
		"vietnamese": [
			"Sau trận chiến khốc liệt, Tháp Phế Tích lại chìm vào im lặng.",
			"Ánh sáng biến mất, và cái lạnh cũng nhạt dần. Mọi thứ dường như đã dừng lại.",
			"Nhưng những dấu tay trên tường băng vẫn như đang khao khát điều gì đó.",
			"Sự im lặng này là sự giải thoát thực sự, hay một khởi đầu khác?",
			"Trong không khí lạnh lẽo, một cảm giác bất an không tên lơ lửng."
		],
		"thai": [
			"หลังจากการต่อสู้ที่ดุเดือด หอคอยซากปรักหักพังก็กลับสู่ความเงียบงันอีกครั้ง",
			"แสงหายไป ความหนาวเย็นก็จางลง ทุกสิ่งดูเหมือนจะหยุดนิ่ง",
			"แต่รอยมือบนกำแพงน้ำแข็งยังคงดูเหมือนจะกระหายบางสิ่ง",
			"ความเงียบนี้คืออิสรภาพที่แท้จริง หรือการเริ่มต้นครั้งใหม่กันแน่",
			"ในอากาศที่หนาวเย็น ความไม่สบายใจที่ไม่รู้จักลอยวนอยู่"
		],
		"hindi": [
			"भीषण युद्ध के बाद, मलबे का टावर एक बार फिर खामोशी में डूब गया।",
			"रोशनी गायब हो गई और ठंडक कम हो गई। सब कुछ थम सा गया था।",
			"लेकिन बर्फ की दीवार में हाथों के निशान अभी भी कुछ तरसते हुए लग रहे थे।",
			"क्या यह खामोशी सच्ची मुक्ति थी, या एक और शुरुआत?",
			"ठंडी हवा में, एक अज्ञात बेचैनी छाई हुई थी।"
		]
	}
} as const;
