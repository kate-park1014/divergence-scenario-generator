export const scenario_snowy_bellus_chronostitcher_03 = {
	"scenario_id": "snowy_bellus_chronostitcher_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"Roundy": {
			"id": "actor_08",
			"name": {
				"korean": "라운디",
				"english": "Roundy",
				"japanese": "ラウンディ",
				"chinese": "朗迪",
				"french": "Roundy",
				"spanish": "Roundy",
				"vietnamese": "Roundy",
				"thai": "รา운ดี้",
				"hindi": "राउंडी"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9c99a7b0-5bc4-45d0-11bb-15dd86ae0700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/1e7e23a7-5db4-4897-997c-e8920c4f4e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"시계탑 선로. 멈춰버린 시간.",
			"사람들은 가장 행복한 순간에 박제되었다.",
			"웃고, 춤추고, 축배를 들고… 모든 것이 푸른 얼음 속에서 영원하다.",
			"너무나 아름다워서, 오히려 소름 끼쳤다.",
			"그리고 그 사이, 무언가 꿰맨 듯한 바늘 자국이 보였다."
		],
		"english": [
			"Clock tower tracks. Time, stopped.",
			"People were taxidermied in their happiest moments.",
			"Laughing, dancing, raising a toast... everything eternal in blue ice.",
			"So beautiful, it was rather chilling.",
			"And amidst it, needle marks, as if something was sewn."
		],
		"japanese": [
			"時計台の線路。止まってしまった時間。",
			"人々は最も幸せな瞬間に剥製にされた。",
			"笑い、踊り、乾杯を交わす…すべてが青い氷の中で永遠に。",
			"あまりにも美しすぎて、むしろ不気味だった。",
			"そしてその間に、何かを縫い合わせたような針跡が見えた。"
		],
		"chinese": [
			"钟楼轨道。时间停滞。",
			"人们被凝固在最幸福的瞬间。",
			"欢笑、起舞、举杯…一切都在蓝色冰晶中永恒。",
			"美得令人毛骨悚然。",
			"在那之间，看到了像是缝补过的针脚痕迹。"
		],
		"french": [
			"Les rails de l'horloge. Le temps s'est arrêté.",
			"Les gens ont été figés dans leurs moments les plus heureux.",
			"Rire, danser, porter un toast... tout est éternel dans la glace bleue.",
			"Si beau, que c'en était glaçant.",
			"Et au milieu, des marques d'aiguille, comme si quelque chose avait été cousu."
		],
		"spanish": [
			"Las vías de la torre del reloj. El tiempo, detenido.",
			"La gente fue taxidermizada en sus momentos más felices.",
			"Riendo, bailando, brindando... todo, eterno en el hielo azul.",
			"Tan hermoso, que resultaba escalofriante.",
			"Y entretanto, se veían marcas de aguja, como si algo hubiera sido cosido."
		],
		"vietnamese": [
			"Đường ray tháp đồng hồ. Thời gian ngừng lại.",
			"Mọi người bị hóa đá trong khoảnh khắc hạnh phúc nhất.",
			"Cười, nhảy múa, nâng ly chúc mừng… mọi thứ vĩnh cửu trong băng xanh.",
			"Đẹp đến rợn người.",
			"Và giữa đó, tôi thấy những vết kim khâu, như thể có thứ gì đó đã được may vá."
		],
		"thai": [
			"รางรถไฟหอนาฬิกา เวลาที่หยุดนิ่ง",
			"ผู้คนถูกสตัฟฟ์ไว้ในห้วงเวลาแห่งความสุขที่สุด",
			"หัวเราะ เต้นรำ ดื่มฉลอง... ทุกสิ่งเป็นนิรันดร์ในน้ำแข็งสีคราม",
			"สวยงามมากจนน่าขนลุก",
			"และท่ามกลางนั้น รอยเข็มเย็บผ้าก็ปรากฏขึ้น เหมือนมีบางสิ่งถูกเย็บติดไว้"
		],
		"hindi": [
			"घंटाघर की पटरियाँ। समय, थम गया है।",
			"लोग अपने सबसे सुखद पलों में संरक्षित कर दिए गए थे।",
			"हँसते हुए, नाचते हुए, जश्न मनाते हुए... सब कुछ नीली बर्फ में शाश्वत।",
			"इतना सुंदर, कि यह बल्कि भयावह था।",
			"और उसके बीच, सुई के निशान दिखे, जैसे कुछ सिला गया हो।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "Roundy",
					"duration_ms": 500
				},
				{
					"speaker": "Roundy",
					"type": "speech",
					"content": {
						"korean": "…여기, 이상한 게 있어.",
						"english": "...There's something strange here.",
						"japanese": "…ここ、何か変だよ。",
						"chinese": "…这里，有奇怪的东西。",
						"french": "...Il y a quelque chose d'étrange ici.",
						"spanish": "...Aquí hay algo extraño.",
						"vietnamese": "…Ở đây, có gì đó lạ.",
						"thai": "...ที่นี่มีอะไรแปลกๆ",
						"hindi": "...यहां कुछ अजीब है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "레일 틈에서 은빛 실 한 가닥이 뻗어 나왔다. 바람에도 흔들리지 않았다.",
						"english": "A silver thread stretched from a rail gap. It didn't waver in the wind.",
						"japanese": "レールの隙間から銀色の糸が一本伸びていた。風にも揺らがない。",
						"chinese": "一根银色的线从铁轨缝隙中伸出。风吹不动它。",
						"french": "Un fil argenté s'étendait d'une fente du rail. Il n'a pas bougé au vent.",
						"spanish": "Un hilo plateado se extendía desde una ranura del riel. No se movía con el viento.",
						"vietnamese": "Một sợi chỉ bạc vươn ra từ khe đường ray. Nó không hề lay động trước gió.",
						"thai": "เส้นด้ายสีเงินเส้นหนึ่งยื่นออกมาจากรอยต่อรางรถไฟ มันไม่สะทกสะท้านต่อลมเลย",
						"hindi": "एक चांदी का धागा रेल की दरार से फैला हुआ था। यह हवा में भी नहीं हिला।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "실? 왜 여기서…",
						"english": "A thread? Why here...",
						"japanese": "糸？なぜここに…",
						"chinese": "线？为什么会在这里…",
						"french": "Un fil ? Pourquoi ici...",
						"spanish": "¿Un hilo? ¿Por qué aquí...?",
						"vietnamese": "Chỉ ư? Sao lại ở đây…",
						"thai": "ด้าย? ทำไมถึงอยู่ตรงนี้...",
						"hindi": "धागा? यहाँ क्यों..."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "만져보니 차가워. 그리고… 튕겨 나와.",
						"english": "It's cold to the touch. And... it repels.",
						"japanese": "触ってみると冷たい。そして…弾かれる。",
						"chinese": "摸起来很凉。而且…会弹开。",
						"french": "C'est froid au toucher. Et... ça repousse.",
						"spanish": "Está frío al tacto. Y... me repele.",
						"vietnamese": "Chạm vào thấy lạnh. Và… nó bật ra.",
						"thai": "แตะแล้วรู้สึกเย็น แล้วก็... เด้งออก",
						"hindi": "छूने पर ठंडा है। और... यह दूर धकेलता है।"
					},
					"type": "speech",
					"speaker": "Roundy"
				},
				{
					"content": {
						"korean": "…엇. 손목이…",
						"english": "...Whoa. My wrist...",
						"japanese": "…あれ。手首が…",
						"chinese": "…呃。手腕…",
						"french": "...Oh. Mon poignet...",
						"spanish": "...Oh. Mi muñeca...",
						"vietnamese": "…Ối. Cổ tay tôi…",
						"thai": "...อ๊ะ ข้อมือฉัน...",
						"hindi": "...ओह। मेरी कलाई..."
					},
					"emotion": "sad",
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "캐릭터의 손목에 작은 얼음 결정이 맺혔다. 푸르게 빛났다.",
						"english": "Small ice crystals formed on the character's wrist, glowing blue.",
						"japanese": "キャラクターの手首に小さな氷の結晶ができた。青く輝いた。",
						"chinese": "角色手腕上凝结了小小的冰晶，泛着蓝光。",
						"french": "De petits cristaux de glace se sont formés sur le poignet du personnage, brillant d'un éclat bleu.",
						"spanish": "Pequeños cristales de hielo se formaron en la muñeca del personaje, brillando con una luz azul.",
						"vietnamese": "Những tinh thể băng nhỏ hình thành trên cổ tay nhân vật, phát ra ánh sáng xanh lam.",
						"thai": "ผลึกน้ำแข็งเล็กๆ ก่อตัวขึ้นที่ข้อมือของตัวละคร เปล่งประกายสีฟ้า",
						"hindi": "किरदार की कलाई पर छोटे बर्फ के क्रिस्टल जम गए, नीले रंग में चमक रहे थे।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "Roundy",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "…뭐가 꿰매어지고 있어. 차가워.",
						"english": "...Something's being stitched. It's cold.",
						"japanese": "…何かが縫い合わされている。冷たい。",
						"chinese": "……有什么东西正在被缝合。好冷。",
						"french": "...Quelque chose est en train d'être cousu. C'est froid.",
						"spanish": "...Algo está siendo cosido. Está frío.",
						"vietnamese": "...Có gì đó đang được khâu lại. Lạnh quá.",
						"thai": "...มีบางอย่างกำลังถูกเย็บ มันเย็น",
						"hindi": "...कुछ सिला जा रहा है। ठंडा है।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "Roundy",
					"emotion": "base",
					"content": {
						"korean": "잠깐. 가만히 있어봐.",
						"english": "Wait. Hold still.",
						"japanese": "待って。じっとしてて。",
						"chinese": "等等。别动。",
						"french": "Attends. Ne bouge pas.",
						"spanish": "Espera. Quédate quieto.",
						"vietnamese": "Khoan đã. Đứng yên.",
						"thai": "เดี๋ยว. อยู่นิ่งๆ",
						"hindi": "रुको। स्थिर रहो।"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "라운디가 날카로운 손톱으로 캐릭터의 손목에 맺힌 결정을 긁어냈다.",
						"english": "Roundy scraped off the crystals on the character's wrist with sharp claws.",
						"japanese": "ラウンディが鋭い爪でキャラクターの手首にできた結晶を掻き取った。",
						"chinese": "劳迪用锋利的爪子刮掉了角色手腕上的结晶。",
						"french": "Roundy a gratté les cristaux sur le poignet du personnage avec ses griffes acérées.",
						"spanish": "Roundy rascó los cristales de la muñeca del personaje con sus afiladas garras.",
						"vietnamese": "Roundy cào những tinh thể trên cổ tay nhân vật bằng móng vuốt sắc nhọn.",
						"thai": "ราวน์ดี้ใช้กรงเล็บแหลมคมขูดผลึกที่ข้อมือของตัวละครออก",
						"hindi": "राउंडी ने अपने नुकीले पंजों से किरदार की कलाई पर बने क्रिस्टल खुरच दिए।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "base",
					"content": {
						"korean": "…어? 사라졌어.",
						"english": "...Huh? It's gone.",
						"japanese": "…あれ？消えた。",
						"chinese": "……嗯？不见了。",
						"french": "...Hein ? C'est parti.",
						"spanish": "...¿Eh? Ha desaparecido.",
						"vietnamese": "...Hả? Nó biến mất rồi.",
						"thai": "...หือ? หายไปแล้ว",
						"hindi": "...अरे? वो चला गया।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "위험한 거였어. 이런 건 처음 봐.",
						"english": "That was dangerous. I've never seen anything like it.",
						"japanese": "危険なものだった。こんなの初めて見た。",
						"chinese": "那很危险。我从未见过这种东西。",
						"french": "C'était dangereux. Je n'ai jamais vu ça.",
						"spanish": "Era peligroso. Nunca había visto algo así.",
						"vietnamese": "Đó là thứ nguy hiểm. Tôi chưa từng thấy cái này bao giờ.",
						"thai": "นั่นอันตรายมาก ฉันไม่เคยเห็นอะไรแบบนี้มาก่อน",
						"hindi": "वह खतरनाक था। मैंने ऐसा कुछ कभी नहीं देखा।"
					},
					"type": "speech",
					"speaker": "Roundy"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "Roundy",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "주변의 박제된 사람들은 여전히 행복하게 웃고 있었다. 섬뜩할 정도로.",
						"english": "The stuffed people around were still smiling happily. Chillingly so.",
						"japanese": "周囲の剥製にされた人々は相変わらず幸せそうに笑っていた。不気味なほどに。",
						"chinese": "周围被制成标本的人们依旧幸福地笑着。诡异至极。",
						"french": "Les personnes empaillées autour souriaient toujours joyeusement. D'une manière effrayante.",
						"spanish": "La gente disecada alrededor seguía sonriendo felizmente. De manera escalofriante.",
						"vietnamese": "Những người bị nhồi bông xung quanh vẫn đang cười hạnh phúc. Một cách rùng rợn.",
						"thai": "ผู้คนที่ถูกสตัฟฟ์รอบๆ ยังคงยิ้มอย่างมีความสุข น่าขนลุกทีเดียว",
						"hindi": "आसपास के भरवां लोग अभी भी खुशी से मुस्कुरा रहे थे। भयानक हद तक।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "이 행복… 진짜가 아니잖아.",
						"english": "This happiness... it's not real.",
						"japanese": "この幸福…本物じゃない。",
						"chinese": "这幸福……不是真的。",
						"french": "Ce bonheur... ce n'est pas réel.",
						"spanish": "Esta felicidad... no es real.",
						"vietnamese": "Hạnh phúc này... không phải thật.",
						"thai": "ความสุขนี้... มันไม่ใช่ของจริง",
						"hindi": "यह खुशी... असली नहीं है।"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "Roundy",
					"emotion": "angry",
					"content": {
						"korean": "누군가 이 순간을 고의로 꿰매어 박제시켰어.",
						"english": "Someone deliberately stitched and preserved this moment.",
						"japanese": "誰かがこの瞬間を故意に縫い合わせて剥製にしたんだ。",
						"chinese": "有人故意将这一刻缝合并制成了标本。",
						"french": "Quelqu'un a délibérément cousu et préservé ce moment.",
						"spanish": "Alguien cosió y preservó intencionadamente este momento.",
						"vietnamese": "Ai đó đã cố tình khâu lại và bảo tồn khoảnh khắc này.",
						"thai": "มีบางคนจงใจเย็บและรักษาสภาพช่วงเวลานี้ไว้",
						"hindi": "किसी ने जानबूझकर इस पल को सिलकर संरक्षित किया है।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그 실이… 이 모든 것의 시작인가?",
						"english": "Is that thread... the beginning of all this?",
						"japanese": "あの糸が…この全ての始まりなのか？",
						"chinese": "那根线……是这一切的开始吗？",
						"french": "Ce fil... est-il le début de tout cela ?",
						"spanish": "¿Ese hilo... es el principio de todo esto?",
						"vietnamese": "Sợi chỉ đó... là khởi đầu của tất cả sao?",
						"thai": "เส้นด้ายนั้น... คือจุดเริ่มต้นของทั้งหมดนี้หรือเปล่า",
						"hindi": "क्या वह धागा... इन सबका शुरुआती बिंदु है?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "아마도. 이 실은 시간을 멈추게 해.",
						"english": "Perhaps. This thread stops time.",
						"japanese": "たぶん。この糸は時間を止めるわ。",
						"chinese": "也许吧。这根线能让时间停止。",
						"french": "Peut-être. Ce fil arrête le temps.",
						"spanish": "Quizás. Este hilo detiene el tiempo.",
						"vietnamese": "Có lẽ. Sợi chỉ này có thể dừng thời gian.",
						"thai": "อาจจะ. ด้ายนี้หยุดเวลาได้.",
						"hindi": "शायद। यह धागा समय को रोक देता है।"
					},
					"emotion": "sad",
					"speaker": "Roundy",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "Roundy",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "점점 더 차가워져… 마치 시간이 멈춘 것 같아.",
						"english": "It's getting colder... as if time has stopped.",
						"japanese": "どんどん冷たくなっていく… まるで時間が止まったみたい。",
						"chinese": "越来越冷了…… 就像时间停止了一样。",
						"french": "Il fait de plus en plus froid… comme si le temps s'était arrêté.",
						"spanish": "Cada vez hace más frío… como si el tiempo se hubiera detenido.",
						"vietnamese": "Càng ngày càng lạnh... như thể thời gian đã ngừng lại.",
						"thai": "ยิ่งหนาวขึ้นเรื่อยๆ… เหมือนเวลาหยุดนิ่ง.",
						"hindi": "यह और ठंडा होता जा रहा है… जैसे समय रुक गया हो।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "Roundy",
					"type": "speech",
					"content": {
						"korean": "돌아갈 수 없어. 이 모든 걸 멈춘 자가 저 위에 있어.",
						"english": "No turning back. The one who stopped all this is up there.",
						"japanese": "もう戻れない。この全てを止めた者が、あの先にいる。",
						"chinese": "回不去了。让这一切停止的家伙就在上面。",
						"french": "Impossible de faire demi-tour. Celui qui a tout arrêté est là-haut.",
						"spanish": "No hay vuelta atrás. Quien detuvo todo esto está ahí arriba.",
						"vietnamese": "Không thể quay lại. Kẻ đã dừng mọi thứ đang ở trên đó.",
						"thai": "กลับไม่ได้แล้ว. ผู้ที่หยุดทุกสิ่งอยู่ข้างบนนั่น.",
						"hindi": "वापस नहीं जा सकते। जिसने यह सब रोका है, वह ऊपर है।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "정체 모를 힘이 이 선로를 지배하고 있었다. 그 존재가 탐험대를 기다리고 있었다.",
						"english": "An unknown force dominated these tracks. That entity awaited the expedition.",
						"japanese": "正体不明の力がこの線路を支配していた。その存在が探検隊を待ち受けていた。",
						"chinese": "一股不明力量掌控着这条轨道。那个存在正在等待探险队。",
						"french": "Une force inconnue dominait ces rails. Cette entité attendait l'expédition.",
						"spanish": "Una fuerza desconocida dominaba estas vías. Esa entidad esperaba a la expedición.",
						"vietnamese": "Một thế lực bí ẩn đã kiểm soát đường ray này. Thực thể đó đang chờ đợi đội thám hiểm.",
						"thai": "พลังงานที่ไม่รู้จักครอบงำรางรถไฟเหล่านี้ สิ่งนั้นกำลังรอคอยคณะสำรวจอยู่.",
						"hindi": "एक अज्ञात शक्ति इन पटरियों पर हावी थी। वह सत्ता अभियान का इंतजार कर रही थी।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…만나서 끝내야지.",
						"english": "...Must meet them and end it.",
						"japanese": "…会って、終わらせなければ。",
						"chinese": "……得去会会他们，然后结束这一切。",
						"french": "...Il faut les rencontrer et en finir.",
						"spanish": "...Debemos encontrarlos y acabar con esto.",
						"vietnamese": "...Phải gặp và chấm dứt chuyện này.",
						"thai": "...ต้องเจอแล้วจบเรื่อง.",
						"hindi": "…मिलकर इसे खत्म करना होगा।"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "포기해라. 이 영원한 행복을 받아들여.",
						"english": "Give up. Embrace this eternal happiness.",
						"japanese": "諦めろ。この永遠の幸福を受け入れろ。",
						"chinese": "放弃吧。接受这份永恒的幸福。",
						"french": "Abandonne. Accepte ce bonheur éternel.",
						"spanish": "Ríndete. Acepta esta felicidad eterna.",
						"vietnamese": "Hãy bỏ cuộc đi. Chấp nhận hạnh phúc vĩnh cửu này.",
						"thai": "ยอมแพ้ซะ ยอมรับความสุขนิรันดร์นี้",
						"hindi": "हार मान लो। इस शाश्वत खुशी को स्वीकार करो।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "…아니. 진짜 행복을 되찾을 때까지 멈추지 않아.",
						"english": "...No. I won't stop until I reclaim true happiness.",
						"japanese": "…いや。本当の幸せを取り戻すまで、止まらない。",
						"chinese": "…不。在找回真正的幸福之前，我不会停下。",
						"french": "...Non. Je ne m'arrêterai pas avant d'avoir retrouvé le vrai bonheur.",
						"spanish": "...No. No me detendré hasta recuperar la verdadera felicidad.",
						"vietnamese": "…Không. Tôi sẽ không dừng lại cho đến khi tìm lại được hạnh phúc thật sự.",
						"thai": "…ไม่ ฉันจะไม่หยุดจนกว่าจะได้รับความสุขที่แท้จริงกลับคืนมา",
						"hindi": "…नहीं। मैं तब तक नहीं रुकूँगा जब तक मैं सच्ची खुशी वापस नहीं पा लेता।"
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "…침입자들. 이 행복을 방해하려는가?",
						"english": "...Intruders. Do you intend to disrupt this happiness?",
						"japanese": "…侵入者たち。この幸福を邪魔しようというのか？",
						"chinese": "……入侵者。你们想破坏这份幸福吗？",
						"french": "...Intrus. Comptez-vous perturber ce bonheur ?",
						"spanish": "...Intrusos. ¿Pretendéis perturbar esta felicidad?",
						"vietnamese": "...Những kẻ xâm nhập. Các ngươi định phá hoại hạnh phúc này sao?",
						"thai": "...ผู้บุกรุก. เจ้าคิดจะทำลายความสุขนี้หรือ?",
						"hindi": "…घुसपैठिए। क्या तुम इस खुशी को भंग करना चाहते हो?"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "당신이 이 모든 걸 꿰맨 거야?",
						"english": "Did you stitch all this together?",
						"japanese": "あなたがこの全てを縫い合わせたの？",
						"chinese": "这一切都是你缝合起来的吗？",
						"french": "C'est toi qui as tout recousu ?",
						"spanish": "¿Fuiste tú quien cosió todo esto?",
						"vietnamese": "Chính ngươi đã khâu vá tất cả những thứ này sao?",
						"thai": "คุณเป็นคนเย็บทั้งหมดนี่เองเหรอ?",
						"hindi": "क्या तुमने यह सब सिला है?"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "영원히 가장 찬란한 순간에 머무는 것. 이것이 나의 선물이다.",
						"english": "To remain forever in the most brilliant moment. This is my gift.",
						"japanese": "永遠に最も輝かしい瞬間に留まること。これが私の贈り物だ。",
						"chinese": "永远停留在最辉煌的瞬间。这是我的礼物。",
						"french": "Rester éternellement dans le moment le plus éclatant. C'est mon cadeau.",
						"spanish": "Permanecer para siempre en el momento más brillante. Este es mi regalo.",
						"vietnamese": "Ở lại vĩnh viễn trong khoảnh khắc rực rỡ nhất. Đây là món quà của ta.",
						"thai": "การได้คงอยู่ในช่วงเวลาที่รุ่งโรจน์ที่สุดชั่วนิรันดร์ นี่คือของขวัญของฉัน.",
						"hindi": "सबसे शानदार पल में हमेशा के लिए रहना। यह मेरा उपहार है।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "강제로 박제된 행복은 가짜일 뿐이야!",
						"english": "Happiness forced into stasis is nothing but a lie!",
						"japanese": "無理やり剥製にされた幸福は、偽物でしかない！",
						"chinese": "被强行凝固的幸福，不过是虚假的！",
						"french": "Le bonheur embaumé de force n'est qu'un mensonge !",
						"spanish": "¡La felicidad embalsamada a la fuerza no es más que una mentira!",
						"vietnamese": "Hạnh phúc bị ép buộc đóng khung chỉ là giả dối!",
						"thai": "ความสุขที่ถูกบังคับให้หยุดนิ่งเป็นเพียงสิ่งจอมปลอม!",
						"hindi": "ज़बरदस्ती जमा की गई खुशी केवल एक झूठ है!"
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크윽… 멈춘다고… 사라지는 건 아니다…",
						"english": "Ugh... Stopping it... doesn't mean it's gone...",
						"japanese": "ぐっ…止めたとて…消え去るわけではない…",
						"chinese": "呃……就算停止了……也并非消失了……",
						"french": "Urgh… L'arrêter… ne signifie pas qu'il disparaît…",
						"spanish": "Uf… Detenerlo… no significa que desaparezca…",
						"vietnamese": "Khụ... Dù có ngăn lại... nó cũng không biến mất đâu...",
						"thai": "อึก… การหยุดมัน… ไม่ได้หมายความว่ามันจะหายไป…",
						"hindi": "उह… रोकने से… वह गायब नहीं होता…"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "무슨 소리야?",
						"english": "What was that?",
						"japanese": "何の音だ？",
						"chinese": "什么声音？",
						"french": "Qu'est-ce que c'était ?",
						"spanish": "¿Qué fue eso?",
						"vietnamese": "Tiếng gì vậy?",
						"thai": "เสียงอะไรน่ะ?",
						"hindi": "यह क्या आवाज़ थी?"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "새로운 바늘은… 더 깊이 꿰맬 것이다…",
						"english": "A new needle... will sew deeper...",
						"japanese": "新しい針は… より深く縫い付けるだろう…",
						"chinese": "新的针… 会缝得更深…",
						"french": "Une nouvelle aiguille… coudra plus profondément…",
						"spanish": "Una nueva aguja… coserá más profundo…",
						"vietnamese": "Kim mới… sẽ khâu sâu hơn…",
						"thai": "เข็มอันใหม่… จะเย็บได้ลึกกว่า…",
						"hindi": "एक नई सुई… और गहरा सियेगी…"
					}
				},
				{
					"content": {
						"korean": "은빛 실이 끊어지자, 멈췄던 시간들이 아주 미세하게 떨렸다.",
						"english": "As the silver thread snapped, the stopped moments trembled ever so slightly.",
						"japanese": "銀色の糸が切れると、止まっていた時間たちが微かに震えた。",
						"chinese": "银线断裂，停滞的时间微微颤抖。",
						"french": "Quand le fil d'argent se rompit, les instants suspendus tremblèrent très légèrement.",
						"spanish": "Cuando el hilo plateado se rompió, los momentos detenidos temblaron muy levemente.",
						"vietnamese": "Khi sợi chỉ bạc đứt, những khoảnh khắc ngừng lại khẽ rung lên.",
						"thai": "เมื่อด้ายสีเงินขาดลง ช่วงเวลาที่หยุดนิ่งก็สั่นสะเทือนเพียงเล็กน้อย",
						"hindi": "जैसे ही चाँदी का धागा टूटा, रुके हुए पल हल्के से काँप उठे।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그러나 완전한 자유는 아니었다. 더 거대한 바늘이 기다리고 있었다.",
						"english": "But it wasn't complete freedom. A much larger needle awaited.",
						"japanese": "しかし、それは完全な自由ではなかった。さらに巨大な針が待っていた。",
						"chinese": "但那并非完全的自由。一支更巨大的针在等待着。",
						"french": "Mais ce n'était pas une liberté totale. Une aiguille bien plus grande attendait.",
						"spanish": "Pero no era libertad completa. Una aguja mucho más grande aguardaba.",
						"vietnamese": "Nhưng đó không phải là tự do hoàn toàn. Một cây kim lớn hơn đang chờ đợi.",
						"thai": "แต่มันไม่ใช่เสรีภาพที่สมบูรณ์ เข็มที่ใหญ่กว่ามากกำลังรออยู่",
						"hindi": "लेकिन यह पूरी आज़ादी नहीं थी। एक और भी बड़ी सुई इंतज़ार कर रही थी।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			]
		}
	]
} as const;
