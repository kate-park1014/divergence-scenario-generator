export const scenario_forest_veridianmelody_18_04 = {
	"scenario_id": "forest_veridianmelody_18_04",
	"order": 4,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"glen": {
			"id": "mon_42dfd4f2-9564-4b4b-beed-993d578ebd5a",
			"name": {
				"korean": "글렌",
				"english": "Glen",
				"japanese": "グレン",
				"chinese": "格伦",
				"french": "Glen",
				"spanish": "Glen",
				"vietnamese": "Glen",
				"thai": "เกล็น",
				"hindi": "ग्लेन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/6aa9eb0c-364f-4bfb-fa3f-52711da6a600/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2dbb8c2d-a999-4154-3a88-7c5cc5ca2200/public"
		},
		"ela": {
			"name": {
				"korean": "엘라",
				"english": "Ela",
				"japanese": "エラ",
				"chinese": "艾拉",
				"french": "Ela",
				"spanish": "Ela",
				"vietnamese": "Ela",
				"thai": "เอล่า",
				"hindi": "एला"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/55d3e9ee-c589-40ab-dfa4-a658bbddd400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/cfacc842-115e-4175-a7fa-3111a468ed00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "숲은 이제 아름다운 가면을 벗었다. 환각이 피어나는 심장부로 가는 길이었다.",
						"english": "The forest shed its beautiful mask. It was a path to the heart where hallucinations bloomed.",
						"japanese": "森は美しい仮面を脱いだ。幻覚が咲き乱れる心臓部への道だった。",
						"chinese": "森林卸下了美丽的面具。那是一条通往幻觉盛开之地的道路。",
						"french": "La forêt a ôté son beau masque. C'était un chemin vers le cœur où les hallucinations fleurissaient.",
						"spanish": "El bosque se quitó su hermosa máscara. Era un camino al corazón donde florecían las alucinaciones.",
						"vietnamese": "Khu rừng đã cởi bỏ chiếc mặt nạ xinh đẹp của mình. Đó là con đường dẫn đến trái tim nơi những ảo giác nở rộ.",
						"thai": "ป่าได้ถอดหน้ากากที่สวยงามออกแล้ว มันเป็นทางไปสู่ใจกลางที่ภาพหลอนเบ่งบาน",
						"hindi": "जंगल ने अपना सुंदर नकाब उतार दिया। यह उस दिल का रास्ता था जहाँ मतिभ्रम खिलते थे।"
					}
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "glen"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "glen",
					"content": {
						"korean": "여기까지 오지 말았어야 했어… 이 숲은… 살아있는 게 아니야.",
						"english": "We shouldn't have come this far... This forest... it's not alive.",
						"japanese": "ここまで来るべきではなかった… この森は… 生きているんじゃない。",
						"chinese": "我们不该来这里……这片森林……它不是活的。",
						"french": "Nous n'aurions pas dû venir jusqu'ici... Cette forêt... elle n'est pas vivante.",
						"spanish": "No debimos haber llegado tan lejos... Este bosque... no está vivo.",
						"vietnamese": "Chúng ta không nên đi xa đến vậy... Khu rừng này... nó không sống.",
						"thai": "เราไม่ควรมาไกลขนาดนี้... ป่านี้... มันไม่มีชีวิต",
						"hindi": "हमें यहाँ तक नहीं आना चाहिए था... यह जंगल... यह जीवित नहीं है।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야, 글렌?",
						"english": "What are you talking about, Glenn?",
						"japanese": "何を言ってるんだ、グレン？",
						"chinese": "你在说什么，格伦？",
						"french": "De quoi parles-tu, Glenn ?",
						"spanish": "De qué hablas, Glenn?",
						"vietnamese": "Bạn đang nói gì vậy, Glenn?",
						"thai": "คุณกำลังพูดถึงอะไร, เกล็น?",
						"hindi": "तुम क्या कह रहे हो, ग्लेन?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "옛날부터 전해 내려오는 금기된 이야기가 있어. 숲이 생명을 흡수해서… 자기 것으로 만든다는.",
						"english": "There's a forbidden tale from ancient times. That the forest absorbs life... and makes it its own.",
						"japanese": "昔から伝わる禁忌の物語がある。森が生命を吸収して… 自分のものにする、と。",
						"chinese": "有一个从远古流传下来的禁忌传说。森林会吸收生命……并将其据为己有。",
						"french": "Il y a une histoire interdite des temps anciens. Que la forêt absorbe la vie... et la fait sienne.",
						"spanish": "Hay un cuento prohibido de tiempos antiguos. Que el bosque absorbe la vida... y la hace suya.",
						"vietnamese": "Có một câu chuyện cấm kỵ từ thời xa xưa. Rằng khu rừng hấp thụ sự sống... và biến nó thành của riêng mình.",
						"thai": "มีเรื่องเล่าต้องห้ามจากสมัยโบราณ ว่าป่าดูดซับชีวิต... และทำให้เป็นของตัวเอง",
						"hindi": "प्राचीन काल से एक वर्जित कहानी चली आ रही है। कि जंगल जीवन को सोख लेता है... और उसे अपना बना लेता है।"
					},
					"speaker": "glen"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "…믿을 수 없어.",
						"english": "...I can't believe it.",
						"japanese": "…信じられない。",
						"chinese": "……我不敢相信。",
						"french": "...Je ne peux pas le croire.",
						"spanish": "...No puedo creerlo.",
						"vietnamese": "...Tôi không thể tin được.",
						"thai": "...ฉันไม่อยากจะเชื่อ",
						"hindi": "...मुझे विश्वास नहीं हो रहा।"
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
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 550,
					"type": "direction",
					"speaker": "glen"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "glen",
					"content": {
						"korean": "이 숲의 심장이 박동하기 시작했어. 모든 걸 빨아들이고 있어.",
						"english": "The heart of this forest has begun to beat. It's drawing everything in.",
						"japanese": "この森の心臓が鼓動を始めた。すべてを吸い込んでいる。",
						"chinese": "这片森林的心脏开始跳动了。它正在吞噬一切。",
						"french": "Le cœur de cette forêt a commencé à battre. Il aspire tout.",
						"spanish": "El corazón de este bosque ha empezado a latir. Lo está absorbiendo todo.",
						"vietnamese": "Trái tim khu rừng này đã bắt đầu đập. Nó đang hút mọi thứ vào.",
						"thai": "หัวใจของป่านี้เริ่มเต้นแล้ว มันกำลังดูดกลืนทุกสิ่ง",
						"hindi": "इस जंगल का दिल धड़कना शुरू हो गया है। यह सब कुछ अंदर खींच रहा है।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "환각이 점점 심해져… 숲이 나를 부르는 것 같아.",
						"english": "The hallucinations are getting worse... The forest seems to be calling me.",
						"japanese": "幻覚がひどくなってきた… 森が私を呼んでいるようだ。",
						"chinese": "幻觉越来越严重了…… 森林好像在呼唤我。",
						"french": "Les hallucinations s'aggravent... La forêt semble m'appeler.",
						"spanish": "Las alucinaciones empeoran... El bosque parece llamarme.",
						"vietnamese": "Ảo giác ngày càng nặng nề… Cứ như thể khu rừng đang gọi tôi.",
						"thai": "ภาพหลอนยิ่งแย่ลง… เหมือนป่ากำลังเรียกฉัน",
						"hindi": "मतिभ्रम और बदतर होते जा रहे हैं... जंगल मुझे बुला रहा है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "glen",
					"content": {
						"korean": "저 이끼들을 봐… 저게 숲의 촉수야. 너희를 엮으려 하고 있어.",
						"english": "Look at that moss... Those are the forest's tendrils. They're trying to weave you in.",
						"japanese": "あの苔を見て… あれが森の触手だ。お前たちを織り込もうとしている。",
						"chinese": "看看那些苔藓…… 那是森林的触须。它们正试图将你们编织进去。",
						"french": "Regardez cette mousse... Ce sont les tentacules de la forêt. Elles essaient de vous y tisser.",
						"spanish": "Mira ese musgo... Esos son los zarcillos del bosque. Intentan tejerte en ellos.",
						"vietnamese": "Nhìn đám rêu kia đi… Đó là những xúc tu của khu rừng. Chúng đang cố gắng dệt các người vào đó.",
						"thai": "ดูมอสนั่นสิ… นั่นคือหนวดปลาหมึกของป่า มันพยายามจะถักทอพวกเจ้าเข้าไป",
						"hindi": "उस काई को देखो... वे जंगल के तंतु हैं। वे तुम्हें अंदर बुनने की कोशिश कर रहे हैं।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "사라진 동물들도… 숲의 일부가 된 건가?",
						"english": "Even the vanished animals... have they become part of the forest?",
						"japanese": "消えた動物たちも… 森の一部になったのか？",
						"chinese": "那些消失的动物…… 也成为森林的一部分了吗？",
						"french": "Même les animaux disparus... sont-ils devenus une partie de la forêt ?",
						"spanish": "Incluso los animales desaparecidos... ¿se han convertido en parte del bosque?",
						"vietnamese": "Ngay cả những con vật biến mất… cũng đã trở thành một phần của khu rừng sao?",
						"thai": "สัตว์ที่หายไป… ก็กลายเป็นส่วนหนึ่งของป่าด้วยงั้นเหรอ?",
						"hindi": "यहां तक कि गायब हुए जानवर भी... क्या वे जंगल का हिस्सा बन गए हैं?"
					},
					"speaker": "character_2"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "숲의 직물에 엮인 존재들… 움직이지만 살아있지 않은 것들.",
						"english": "Beings woven into the forest's tapestry... moving, but not alive.",
						"japanese": "森の織物に織り込まれた存在たち… 動いているが、生きていないものたち。",
						"chinese": "那些被编织进森林织锦的存在…… 它们在移动，却不活着。",
						"french": "Des êtres tissés dans la tapisserie de la forêt... qui bougent, mais ne sont pas vivants.",
						"spanish": "Seres tejidos en el tapiz del bosque... moviéndose, pero sin vida.",
						"vietnamese": "Những sinh vật bị dệt vào tấm thảm của khu rừng… chúng di chuyển, nhưng không sống.",
						"thai": "สิ่งมีชีวิตที่ถูกถักทอเข้าไปในผืนผ้าของป่า… เคลื่อนไหว แต่ไม่ชีวิต",
						"hindi": "जंगल के ताने-बाने में बुने हुए प्राणी... हिलते हैं, लेकिन जीवित नहीं हैं।"
					},
					"speaker": "glen"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"content": {
						"korean": "환각은 점점 현실처럼 느껴졌다. 숲의 모든 것이 하나의 그림처럼 엮여 보였다.",
						"english": "The hallucinations felt increasingly real. Everything in the forest seemed woven together like a single picture.",
						"japanese": "幻覚は次第に現実のように感じられた。森のすべてが一枚の絵のように織り合わさって見えた。",
						"chinese": "幻觉越来越真实。森林中的一切都像一幅画一样交织在一起。",
						"french": "Les hallucinations semblaient de plus en plus réelles. Tout dans la forêt semblait entrelacé comme un tableau unique.",
						"spanish": "Las alucinaciones se sentían cada vez más reales. Todo en el bosque parecía entrelazado como una sola imagen.",
						"vietnamese": "Ảo giác ngày càng trở nên thật. Mọi thứ trong khu rừng dường như được dệt vào nhau như một bức tranh duy nhất.",
						"thai": "ภาพหลอนรู้สึกเหมือนจริงขึ้นเรื่อยๆ ทุกสิ่งในป่าดูเหมือนถูกถักทอเข้าด้วยกันเป็นภาพเดียว",
						"hindi": "मतिभ्रम अधिकाधिक वास्तविक लगने लगे। जंगल में सब कुछ एक ही चित्र की तरह बुना हुआ प्रतीत होता था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "glen",
					"action": "enter",
					"duration_ms": 450,
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "glen",
					"content": {
						"korean": "결국… 그 이야기가 현실이 되는군. 숲의 여왕이 모든 걸 엮으려 해.",
						"english": "In the end... that story is becoming reality. The Queen of the Forest is trying to weave everything together.",
						"japanese": "結局… その物語が現実になるのか。森の女王がすべてを織り込もうとしている。",
						"chinese": "最终…… 那个故事正在成为现实。森林女王正试图将一切编织在一起。",
						"french": "Finalement... cette histoire devient réalité. La Reine de la Forêt essaie de tout tisser ensemble.",
						"spanish": "Al final... esa historia se está haciendo realidad. La Reina del Bosque está intentando tejerlo todo.",
						"vietnamese": "Cuối cùng… câu chuyện đó đang trở thành hiện thực. Nữ hoàng của Khu rừng đang cố gắng dệt mọi thứ lại với nhau.",
						"thai": "ในที่สุด… เรื่องราวนั้นก็กลายเป็นความจริง ราชินีแห่งป่ากำลังพยายามถักทอทุกสิ่งเข้าด้วยกัน",
						"hindi": "अंत में... वह कहानी हकीकत बन रही है। जंगल की रानी सब कुछ एक साथ बुनने की कोशिश कर रही है।"
					}
				},
				{
					"content": {
						"korean": "몸이 묶이는 것 같아… 숲이 나를 끌어당겨.",
						"english": "My body feels bound... The forest is pulling me in.",
						"japanese": "体が縛られるようだ… 森が私を引き寄せている。",
						"chinese": "身体好像被束缚住了…… 森林正在把我拉进去。",
						"french": "Mon corps se sent lié... La forêt m'attire.",
						"spanish": "Mi cuerpo se siente atado... El bosque me está atrayendo.",
						"vietnamese": "Cơ thể tôi như bị trói buộc… Khu rừng đang kéo tôi vào.",
						"thai": "ร่างกายรู้สึกเหมือนถูกมัด… ป่ากำลังดึงฉันเข้าไป",
						"hindi": "मेरा शरीर बंधा हुआ महसूस हो रहा है... जंगल मुझे अपनी ओर खींच रहा है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…환영해, 나의 새로운 실타래들.",
						"english": "...Welcome, my new threads.",
						"japanese": "…ようこそ、私の新たな糸たち。",
						"chinese": "……欢迎，我的新线团。",
						"french": "...Bienvenue, mes nouveaux fils.",
						"spanish": "...Bienvenidos, mis nuevos hilos.",
						"vietnamese": "…Chào mừng, những sợi chỉ mới của ta.",
						"thai": "…ยินดีต้อนรับ ด้ายเส้นใหม่ของฉัน",
						"hindi": "...स्वागत है, मेरे नए धागे।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_3",
					"content": {
						"korean": "이 목소리는…!",
						"english": "This voice...!",
						"japanese": "この声は…！",
						"chinese": "这个声音是……！",
						"french": "Cette voix... !",
						"spanish": "¡Esa voz...!",
						"vietnamese": "Giọng nói này…!",
						"thai": "เสียงนี้…!",
						"hindi": "यह आवाज...!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "glen",
					"content": {
						"korean": "금지된 멜로디… 숲의 진정한 지배자.",
						"english": "Forbidden melody... the forest's true ruler.",
						"japanese": "禁じられたメロディー… 森の真の支配者。",
						"chinese": "禁忌的旋律……森林真正的支配者。",
						"french": "Mélodie interdite... le véritable maître de la forêt.",
						"spanish": "Melodía prohibida... el verdadero gobernante del bosque.",
						"vietnamese": "Giai điệu cấm đoán... kẻ thống trị thực sự của rừng.",
						"thai": "ทำนองต้องห้าม... ผู้ปกครองที่แท้จริงของป่า",
						"hindi": "निषिद्ध धुन... वन का सच्चा शासक।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "환각과 현실의 경계가 완전히 무너졌다. 숲의 멜로디가 귓가를 맴돌았다.",
						"english": "The boundary between illusion and reality completely shattered. The forest's melody echoed in my ears.",
						"japanese": "幻覚と現実の境界が完全に崩れ去った。森のメロディーが耳元をぐるぐる回った。",
						"chinese": "幻觉与现实的界限彻底崩塌。森林的旋律在我耳边萦绕。",
						"french": "La frontière entre l'illusion et la réalité s'est complètement effondrée. La mélodie de la forêt résonnait à mes oreilles.",
						"spanish": "La frontera entre la ilusión y la realidad se derrumbó por completo. La melodía del bosque resonaba en mis oídos.",
						"vietnamese": "Ranh giới giữa ảo ảnh và hiện thực hoàn toàn sụp đổ. Giai điệu của rừng văng vẳng bên tai.",
						"thai": "ขอบเขตระหว่างภาพลวงตากับความจริงพังทลายลงโดยสิ้นเชิง ท่วงทำนองของป่าก้องอยู่ในหูของฉัน",
						"hindi": "भ्रम और वास्तविकता के बीच की सीमा पूरी तरह से टूट गई। जंगल की धुन मेरे कानों में गूँज रही थी।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "glen"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "glen",
					"content": {
						"korean": "이건… 안 돼. 엘라! 그 멜로디에 홀리면 안 돼!",
						"english": "This... No! Ella! Don't be enchanted by that melody!",
						"japanese": "これは… だめだ。エラ！そのメロディーに惑わされてはいけない！",
						"chinese": "这…不行。艾拉！不要被那旋律迷惑！",
						"french": "Ça... Non ! Ella ! Ne te laisse pas envoûter par cette mélodie !",
						"spanish": "Esto... ¡No! ¡Ella! ¡No te dejes encantar por esa melodía!",
						"vietnamese": "Cái này... Không! Ella! Đừng để bị mê hoặc bởi giai điệu đó!",
						"thai": "นี่มัน... ไม่นะ! เอลล่า! อย่าหลงใหลในท่วงทำนองนั้น!",
						"hindi": "यह... नहीं। एला! उस धुन से मंत्रमुग्ध मत हो!"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "엘라, 어디 가! 정신 차려!",
						"english": "Ella, where are you going! Snap out of it!",
						"japanese": "エラ、どこへ行くんだ！正気を取り戻せ！",
						"chinese": "艾拉，你去哪儿！清醒过来！",
						"french": "Ella, où vas-tu ! Reprends tes esprits !",
						"spanish": "¡Ella, adónde vas! ¡Recapacita!",
						"vietnamese": "Ella, cậu đi đâu vậy! Tỉnh táo lại đi!",
						"thai": "เอลล่า, เธอจะไปไหน! ตั้งสติหน่อย!",
						"hindi": "एला, कहाँ जा रही हो! होश में आओ!"
					}
				},
				{
					"speaker": "ela",
					"content": {
						"korean": "…아름다워… 숲의 품으로…",
						"english": "...Beautiful... into the forest's embrace...",
						"japanese": "…美しい… 森の懐へ…",
						"chinese": "…好美……进入森林的怀抱……",
						"french": "...Magnifique... dans l'étreinte de la forêt...",
						"spanish": "...Hermoso... al abrazo del bosque...",
						"vietnamese": "...Đẹp quá... vào lòng rừng sâu...",
						"thai": "...งดงาม... สู่ห้วงป่า...",
						"hindi": "...सुंदर... जंगल की गोद में..."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "ela",
					"direction": "up",
					"type": "direction",
					"action": "exit",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "안 돼… 숲은 모든 걸 자기 것으로 만들 거야. 그녀도….",
						"english": "No... The forest will make everything its own. Her, too...",
						"japanese": "だめだ… 森はすべてを自分のものにするだろう。彼女も…。",
						"chinese": "不行……森林会把一切都据为己有。她也一样……",
						"french": "Non... La forêt fera tout sien. Elle aussi...",
						"spanish": "No... El bosque hará todo suyo. A ella también...",
						"vietnamese": "Không... Rừng sẽ biến mọi thứ thành của nó. Cả cô ấy nữa...",
						"thai": "ไม่นะ... ป่าจะทำให้ทุกอย่างเป็นของมัน แม้กระทั่งเธอ...",
						"hindi": "नहीं... जंगल सब कुछ अपना बना लेगा। उसे भी..."
					},
					"speaker": "glen",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "대체 숲의 목적이 뭐야…?",
						"english": "What exactly is the forest's purpose...?",
						"japanese": "一体森の目的は何だ…？",
						"chinese": "森林的目的到底是什么……？",
						"french": "Quel est le but de la forêt, au juste...?",
						"spanish": "¿Cuál es el propósito del bosque, exactamente...?",
						"vietnamese": "Rốt cuộc mục đích của rừng là gì...?",
						"thai": "ตกลงแล้วจุดประสงค์ของป่าคืออะไรกันแน่...?",
						"hindi": "आखिर जंगल का मकसद क्या है...?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…영원히… 직조하는 것.",
						"english": "...Forever... to weave.",
						"japanese": "…永遠に… 織りなすこと。",
						"chinese": "……永远……编织。",
						"french": "...Pour toujours... tisser.",
						"spanish": "...Para siempre... tejer.",
						"vietnamese": "...Mãi mãi... dệt nên.",
						"thai": "...ชั่วนิรันดร์... เพื่อถักทอ",
						"hindi": "...हमेशा के लिए... बुनना।"
					},
					"speaker": "glen",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"direction": "down",
					"speaker": "glen",
					"type": "direction",
					"duration_ms": 400,
					"action": "exit"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 실타래들… 결국 너희도 나의 직물에 영원히 엮일 것이다.",
						"english": "Foolish threads… In the end, you too will be eternally woven into my fabric.",
						"japanese": "「愚かな糸たち… 結局お前たちも私の織物に永遠に織り込まれるだろう。」",
						"chinese": "“愚蠢的丝线… 最终，你们也将永远被编入我的织物。”",
						"french": "“Fils stupides… Au final, vous aussi serez éternellement tissés dans ma toile.”",
						"spanish": "“Hilos insensatos… Al final, vosotros también seréis eternamente entretejidos en mi telar.”",
						"vietnamese": "“Những cuộn chỉ ngu ngốc… Cuối cùng, các ngươi cũng sẽ vĩnh viễn bị dệt vào tấm vải của ta.”",
						"thai": "“เส้นด้ายโง่เขลา… ในที่สุด เจ้าก็จะถูกถักทอเข้าสู่ผืนผ้าของข้าตลอดไป”",
						"hindi": "“मूर्ख धागे... अंत में, तुम भी मेरे ताने-बाने में हमेशा के लिए बुने जाओगे।”"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "…크윽… 아직… 끝나지 않았어!",
						"english": "…Ugh… It’s not… over yet!",
						"japanese": "「…くっ… まだ… 終わってない！」",
						"chinese": "“…呃… 还没… 结束！”",
						"french": "“…Urgh… Ce n'est pas… encore fini !”",
						"spanish": "“…Ugh… ¡Aún… no ha terminado!”",
						"vietnamese": "“…Khụ… Vẫn chưa… kết thúc đâu!”",
						"thai": "“…อึก… ยังไม่… จบแค่นี้หรอก!”",
						"hindi": "“…उफ़... अभी... खत्म नहीं हुआ!”"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "다음에 올 때는… 더욱 완벽한… 숲의 일부가 될 테지.",
						"english": "When you return... you'll be a more perfect... part of the forest.",
						"japanese": "次にここへ来る時は… もっと完璧な… 森の一部となっているだろう。",
						"chinese": "下次你来时… 将成为… 更完美的… 森林的一部分。",
						"french": "La prochaine fois que tu reviendras… tu seras une partie… encore plus parfaite… de la forêt.",
						"spanish": "La próxima vez que regreses… serás una parte más perfecta… del bosque.",
						"vietnamese": "Khi ngươi trở lại… ngươi sẽ là một phần hoàn hảo hơn… của khu rừng.",
						"thai": "คราวหน้าที่เจ้ากลับมา… เจ้าจะเป็นส่วนหนึ่งที่สมบูรณ์ยิ่งขึ้น… ของป่า",
						"hindi": "जब तुम अगली बार आओगे… तुम जंगल का… और भी पूर्ण हिस्सा बनोगे।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "흥미로운 저항이다… 하지만… 진실은 변하지 않아… 숲은… 영원히… 직조될 것이다….",
						"english": "An interesting resistance… But… the truth remains… The forest… will be woven… forever….",
						"japanese": "「興味深い抵抗だ… だが… 真実は変わらない… 森は… 永遠に… 織りなされるだろう…。」",
						"chinese": "“有趣的抵抗… 但是… 真相不会改变… 森林… 将永远… 被编织…”",
						"french": "“Une résistance intéressante… Mais… la vérité ne change pas… La forêt… sera tissée… éternellement….”",
						"spanish": "“Una resistencia interesante… Pero… la verdad no cambia… El bosque… será tejido… por siempre….”",
						"vietnamese": "“Sự phản kháng thú vị đấy… Nhưng… sự thật không thay đổi… Rừng… sẽ được dệt nên… vĩnh viễn….”",
						"thai": "“เป็นการต่อต้านที่น่าสนใจ… แต่… ความจริงไม่เปลี่ยนแปลง… ป่า… จะถูกถักทอ… ตลอดไป….”",
						"hindi": "“एक दिलचस्प प्रतिरोध... लेकिन... सच नहीं बदलता... जंगल... हमेशा के लिए... बुना जाएगा...”"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "…쓰러뜨렸어…?",
						"english": "…Did I… defeat it…?",
						"japanese": "「…倒したのか…？」",
						"chinese": "“…打败了…？”",
						"french": "“…Je l'ai vaincu… ?”",
						"spanish": "“…¿Lo derroté…?”",
						"vietnamese": "“…Đã đánh bại rồi sao…?”",
						"thai": "“…จัดการได้แล้ว…?”",
						"hindi": "“…क्या मैंने... उसे हरा दिया...?”"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 흩어지자, 숲의 멜로디가 잠시 멎었다. 그러나 고요함 속에서도 불안한 여운이 감돌았다.",
						"english": "As the colossal shadow dispersed, the forest’s melody ceased for a moment. Yet, an unsettling echo lingered within the quietude.",
						"japanese": "「巨大な影が散ると、森の調べは一時的に止まった。しかし、静寂の中にも不穏な余韻が漂っていた。」",
						"chinese": "“随着巨大的影子消散，森林的旋律短暂停止。然而，寂静中依然弥漫着不安的余韵。”",
						"french": "“Alors que l'ombre colossale se dispersait, la mélodie de la forêt s'arrêta un instant. Pourtant, un écho inquiétant persistait dans le silence.”",
						"spanish": "“Mientras la sombra colosal se dispersaba, la melodía del bosque cesó por un momento. Sin embargo, un eco inquietante persistía en la quietud.”",
						"vietnamese": "“Khi bóng tối khổng lồ tan biến, giai điệu của khu rừng tạm thời ngừng lại. Tuy nhiên, trong sự tĩnh lặng vẫn còn vương vấn một dư âm bất an.”",
						"thai": "“เมื่อเงาขนาดมหึมาสลายไป ท่วงทำนองของป่าก็หยุดลงชั่วขณะ แต่กระนั้น เสียงสะท้อนที่ไม่สบายใจยังคงอยู่ภายในความเงียบสงบ”",
						"hindi": "“जैसे ही विशाल छाया छितरी, जंगल की धुन पल भर के लिए रुक गई। फिर भी, शांति में एक बेचैन गूंज बाकी थी।”"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_3",
					"content": {
						"korean": "엘라는… 어디로….",
						"english": "Ella… where to….",
						"japanese": "「エラは… どこへ…。」",
						"chinese": "“埃拉… 去哪了…”",
						"french": "“Ella… où est-elle… ?”",
						"spanish": "“¿Ella… dónde…?”",
						"vietnamese": "“Ella… đi đâu rồi….”",
						"thai": "“เอลล่า… ไปไหนแล้ว…”",
						"hindi": "“एला... कहाँ गई...”"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "사라진 엘라의 흔적은 찾을 수 없었다. 숲은 다시, 침묵 속으로 잠겨들었다.",
						"english": "No trace of the vanished Ella could be found. The forest, once more, sank into silence.",
						"japanese": "「消えたエラの痕跡は見つからなかった。森は再び、沈黙の中に沈んだ。」",
						"chinese": "“消失的埃拉不见踪影。森林再次陷入沉默。”",
						"french": "“Aucune trace de l'Ella disparue ne fut trouvée. La forêt, de nouveau, plongea dans le silence.”",
						"spanish": "“No se pudo encontrar rastro de la desaparecida Ella. El bosque, una vez más, se sumió en el silencio.”",
						"vietnamese": "“Không thể tìm thấy dấu vết nào của Ella đã biến mất. Khu rừng một lần nữa chìm vào im lặng.”",
						"thai": "“ไม่พบร่องรอยของเอลล่าที่หายไป ป่าจมดิ่งสู่ความเงียบอีกครั้ง”",
						"hindi": "“गायब हुई एला का कोई निशान नहीं मिला। जंगल, एक बार फिर, खामोशी में डूब गया।”"
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "숲의 심장이 쿵, 쿵, 울렸다. 거대한 그림자가 환각 속에서 모습을 드러냈다.",
						"english": "The forest's heart thumped, thumped. A colossal shadow revealed itself within the illusion.",
						"japanese": "森の心臓がドクン、ドクンと鳴り響いた。巨大な影が幻覚の中で姿を現した。",
						"chinese": "森林的心脏咚，咚地跳动。巨大的影子在幻觉中显现。",
						"french": "Le cœur de la forêt battait, battait. Une ombre colossale se révéla dans l'illusion.",
						"spanish": "El corazón del bosque latió, latió. Una sombra colosal se reveló dentro de la ilusión.",
						"vietnamese": "Trái tim của rừng đập thình thịch, thình thịch. Một bóng hình khổng lồ hiện ra trong ảo ảnh.",
						"thai": "หัวใจของป่าเต้นตุบๆ เงาขนาดมหึมาปรากฏขึ้นในภาพลวงตา",
						"hindi": "जंगल का दिल धड़कने लगा। एक विशाल छाया भ्रम में प्रकट हुई।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "내 직물에 들어온 것을 환영한다. 이제 너희도… 나의 일부가 될 것이다.",
						"english": "Welcome to my loom. Now you too... shall become a part of me.",
						"japanese": "私の織物へようこそ。さあ、お前たちも… 私の一部となるのだ。",
						"chinese": "欢迎来到我的织物。现在你们也……将成为我的一部分。",
						"french": "Bienvenue dans mon métier à tisser. Maintenant vous aussi... ferez partie de moi.",
						"spanish": "Bienvenidos a mi telar. Ahora ustedes también... se convertirán en parte de mí.",
						"vietnamese": "Chào mừng đến với tấm vải của ta. Giờ đây các ngươi cũng... sẽ trở thành một phần của ta.",
						"thai": "ยินดีต้อนรับสู่ผืนผ้าของข้า บัดนี้พวกเจ้าก็... จะเป็นส่วนหนึ่งของข้า",
						"hindi": "मेरे करघे में आपका स्वागत है। अब तुम भी... मेरा एक हिस्सा बन जाओगे।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "닥쳐! 엘라를 돌려줘!",
						"english": "Shut up! Give Ella back!",
						"japanese": "「黙れ！ エラを返せ！」",
						"chinese": "“住口！把埃拉还给我！”",
						"french": "“Tais-toi ! Rends-moi Ella !”",
						"spanish": "“¡Cállate! ¡Devuélveme a Ella!”",
						"vietnamese": "“Câm mồm! Trả Ella lại đây!”",
						"thai": "“หุบปาก! คืนเอลล่ามา!”",
						"hindi": "“चुप करो! एला को वापस दे दो!”"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "엘라? 아아… 그 아름다운 실타래는 이미… 나의 멜로디에 녹아들었다.",
						"english": "Ella? Ah… that beautiful thread has already… melted into my melody.",
						"japanese": "「エラ？ ああ… あの美しい糸はもう… 私の調べに溶け込んだ。」",
						"chinese": "“埃拉？啊啊… 那美丽的丝线… 已然… 融入了我的旋律。”",
						"french": "“Ella ? Ah… Ce magnifique fil… a déjà… fondu dans ma mélodie.”",
						"spanish": "“¿Ella? Ah… Ese hermoso hilo ya… se ha disuelto en mi melodía.”",
						"vietnamese": "“Ella? À… cuộn chỉ xinh đẹp đó đã… tan vào giai điệu của ta rồi.”",
						"thai": "“เอลล่า? อ่า… เส้นด้ายอันงดงามนั้น… ได้ละลายเข้าสู่ท่วงทำนองของข้าแล้ว”",
						"hindi": "“एला? आह... वो सुंदर धागा पहले ही... मेरी धुन में पिघल चुका है।”"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "…네 맘대로 하게 두지 않아!",
						"english": "…I won’t let you have your way!",
						"japanese": "「…思い通りにはさせない！」",
						"chinese": "“…我不会让你得逞的！”",
						"french": "“…Je ne te laisserai pas faire !”",
						"spanish": "“…¡No te saldrás con la tuya!”",
						"vietnamese": "“…Ta sẽ không để ngươi toại nguyện!”",
						"thai": "“…ข้าไม่ยอมให้เจ้าทำตามใจชอบหรอก!”",
						"hindi": "...“मैं तुम्हें अपनी मनमानी नहीं करने दूँगा!”"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"숲의 심층부. 환상이 현실을 침범하는 곳.",
			"노인의 경고는 잊혀진 전설을 떠올리게 했다.",
			"숲은 생명을 흡수해 자신을 직조한다.",
			"광기 어린 멜로디는, 하나의 그림자를 불렀다.",
			"모두가, 숲의 일부가 될 운명이었다."
		],
		"english": [
			"Deep within the forest, where illusions invade reality.",
			"The elder's warning echoed a forgotten legend.",
			"The forest weaves itself by absorbing life.",
			"A melody of madness summoned a shadow.",
			"All were destined to become part of the forest."
		],
		"japanese": [
			"森の深部。幻想が現実を侵食する場所。",
			"老人の警告は忘れ去られた伝説を呼び覚ました。",
			"森は生命を吸収し、自らを織りなす。",
			"狂気に満ちたメロディは、一つの影を呼び出した。",
			"誰もが、森の一部となる運命だった。"
		],
		"chinese": [
			"森林深处。幻象侵蚀现实之地。",
			"老人的警告唤醒了一个被遗忘的传说。",
			"森林吸收生命，编织自身。",
			"疯狂的旋律召唤了一个影子。",
			"所有人都注定成为森林的一部分。"
		],
		"french": [
			"Au plus profond de la forêt, là où les illusions envahissent la réalité.",
			"L'avertissement de l'ancien rappelait une légende oubliée.",
			"La forêt se tisse en absorbant la vie.",
			"Une mélodie de folie a invoqué une ombre.",
			"Tous étaient destinés à devenir une partie de la forêt."
		],
		"spanish": [
			"En lo profundo del bosque, donde las ilusiones invaden la realidad.",
			"La advertencia del anciano recordaba una leyenda olvidada.",
			"El bosque se teje a sí mismo absorbiendo vida.",
			"Una melodía de locura invocó una sombra.",
			"Todos estaban destinados a convertirse en parte del bosque."
		],
		"vietnamese": [
			"Sâu thẳm trong rừng, nơi ảo ảnh xâm chiếm thực tại.",
			"Lời cảnh báo của trưởng lão gợi nhớ một truyền thuyết bị lãng quên.",
			"Khu rừng tự dệt nên mình bằng cách hấp thụ sự sống.",
			"Một giai điệu điên cuồng đã triệu hồi một cái bóng.",
			"Tất cả đều định mệnh trở thành một phần của khu rừng."
		],
		"thai": [
			"ส่วนลึกของป่า ที่ซึ่งภาพลวงตาบุกรุกความจริง",
			"คำเตือนของผู้เฒ่าสะท้อนถึงตำนานที่ถูกลืม",
			"ป่าถักทอตัวเองโดยการดูดซับชีวิต",
			"ท่วงทำนองแห่งความวิกลจริตเรียกเงามืด",
			"ทุกคนถูกลิขิตให้เป็นส่วนหนึ่งของป่า"
		],
		"hindi": [
			"जंगल के गहरे भीतर, जहाँ भ्रम हकीकत पर हावी होते हैं।",
			"बुजुर्ग की चेतावनी ने एक भूली हुई किंवदंती की याद दिलाई।",
			"जंगल जीवन को सोखकर स्वयं को बुनता है।",
			"पागलपन की एक धुन ने एक परछाई को बुलाया।",
			"सभी का भाग्य जंगल का हिस्सा बनना था।"
		]
	}
} as const;
