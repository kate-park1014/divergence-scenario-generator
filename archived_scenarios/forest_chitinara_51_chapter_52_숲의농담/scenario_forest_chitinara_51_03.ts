export const scenario_forest_chitinara_51_03 = {
	"scenario_id": "forest_chitinara_51_03",
	"order": 3,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"ela": {
			"id": "mon_24765cb2-6fc0-452e-8969-871a82349c70",
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
					"content": {
						"korean": "숲은 깊어질수록 핏빛으로 물들었다. 희미한 금속 비린내가 감돌았다.",
						"english": "The deeper the forest, the more it was tinged with blood. A faint metallic stench lingered.",
						"japanese": "森が深まるにつれて血の色に染まっていった。かすかな金属の生臭さが漂っていた。",
						"chinese": "森林越深，越被染成血红色。弥漫着淡淡的金属腥味。",
						"french": "Plus la forêt était profonde, plus elle se teintait de sang. Une faible odeur métallique persistait.",
						"spanish": "Cuanto más profundo se adentraba el bosque, más se teñía de sangre. Un leve olor metálico persistía.",
						"vietnamese": "Rừng càng sâu càng nhuốm màu máu. Một mùi tanh kim loại thoang thoảng.",
						"thai": "ยิ่งป่าลึกเท่าไหร่ก็ยิ่งมีสีเลือด กลิ่นคาวโลหะจางๆ ลอยอยู่",
						"hindi": "जंगल जितना गहरा होता गया, उतना ही खून से रंग गया। एक हल्की धातु की गंध मंडरा रही थी।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"speaker": "ela",
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "이 향… 너무 달콤해…",
						"english": "This scent... it's too sweet...",
						"japanese": "この香り…甘すぎる…",
						"chinese": "这香味…太甜了…",
						"french": "Ce parfum... c'est trop doux...",
						"spanish": "Este aroma... es demasiado dulce...",
						"vietnamese": "Mùi hương này... ngọt quá...",
						"thai": "กลิ่นนี้...หวานเกินไป...",
						"hindi": "यह सुगंध... बहुत मीठी है..."
					},
					"speaker": "ela",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "엘라, 조심해! 뭔가 이상해!",
						"english": "Ella, be careful! Something's wrong!",
						"japanese": "エラ、気をつけて！何かおかしい！",
						"chinese": "艾拉，小心！有什么不对劲！",
						"french": "Ella, fais attention ! Quelque chose ne va pas !",
						"spanish": "¡Ella, ten cuidado! ¡Algo anda mal!",
						"vietnamese": "Ella, cẩn thận! Có gì đó không ổn!",
						"thai": "เอลล่า ระวังนะ! มีอะไรแปลกๆ!",
						"hindi": "एला, सावधान रहो! कुछ गड़बड़ है!"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "ela",
					"emotion": "base",
					"content": {
						"korean": "아니야… 몸이 가벼워져… 숲이 날 부르는 것 같아.",
						"english": "No... my body feels light... it feels like the forest is calling me.",
						"japanese": "違う…体が軽くなる…森が私を呼んでいるみたい。",
						"chinese": "不…我的身体变轻了…森林好像在呼唤我。",
						"french": "Non... mon corps se sent léger... on dirait que la forêt m'appelle.",
						"spanish": "No... mi cuerpo se siente ligero... parece que el bosque me está llamando.",
						"vietnamese": "Không... cơ thể tôi nhẹ bẫng... dường như rừng đang gọi tôi.",
						"thai": "ไม่ใช่...ตัวฉันเบาลง...เหมือนป่ากำลังเรียกฉัน",
						"hindi": "नहीं... मेरा शरीर हल्का महसूस हो रहा है... ऐसा लगता है जैसे जंगल मुझे बुला रहा है।"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "불길해.",
						"english": "It's ominous.",
						"japanese": "不吉だ。",
						"chinese": "不祥。",
						"french": "C'est de mauvais augure.",
						"spanish": "Es siniestro.",
						"vietnamese": "Thật đáng ngại.",
						"thai": "มันเป็นลางร้าย",
						"hindi": "यह अशुभ है।"
					},
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "ela",
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "ela",
					"content": {
						"korean": "내 상처가… 완전히 나았어! 숲이 날 치유해줬어!",
						"english": "My wounds... they're completely healed! The forest healed me!",
						"japanese": "私の傷が…完全に治った！森が私を癒してくれたんだ！",
						"chinese": "我的伤口…完全愈合了！森林治愈了我！",
						"french": "Mes blessures... elles sont complètement guéries ! La forêt m'a soigné !",
						"spanish": "Mis heridas... ¡están completamente curadas! ¡El bosque me curó!",
						"vietnamese": "Vết thương của tôi... đã lành hoàn toàn rồi! Rừng đã chữa lành cho tôi!",
						"thai": "บาดแผลของฉัน...หายสนิทแล้ว! ป่ารักษาฉัน!",
						"hindi": "मेरे घाव... पूरी तरह से ठीक हो गए हैं! जंगल ने मुझे ठीक कर दिया!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "말도 안 돼… 어제 상처가?",
						"english": "No way... The wound from yesterday?",
						"japanese": "まさか…昨日の傷が？",
						"chinese": "不会吧……昨天的伤口？",
						"french": "Impossible... La blessure d'hier ?",
						"spanish": "No puede ser... ¿La herida de ayer?",
						"vietnamese": "Không thể nào... Vết thương hôm qua sao?",
						"thai": "ไม่จริงน่า... แผลเมื่อวานเหรอ?",
						"hindi": "असंभव… कल का घाव?"
					},
					"emotion": "base",
					"speaker": "character_1"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "엘라의 상처는 사라졌지만, 피부는 기이한 윤기를 띠었다. 마치 다른 물질로 덧씌워진 듯.",
						"english": "Ella's wound was gone, but her skin had an eerie sheen, as if overlaid with another substance.",
						"japanese": "エラの傷は消えていたが、肌は奇妙な光沢を帯び、まるで別の物質で覆われているようだった。",
						"chinese": "埃拉的伤口消失了，但她的皮肤泛着奇异的光泽，仿佛被另一种物质覆盖。",
						"french": "La blessure d'Ella avait disparu, mais sa peau avait un éclat étrange, comme recouverte d'une autre substance.",
						"spanish": "La herida de Ella había desaparecido, pero su piel tenía un brillo extraño, como si estuviera cubierta por otra sustancia.",
						"vietnamese": "Vết thương của Ella đã biến mất, nhưng làn da cô lại có một vẻ sáng kỳ lạ, như thể bị phủ lên bởi một chất liệu khác.",
						"thai": "บาดแผลของเอลล่าหายไปแล้ว แต่ผิวของเธอกลับมีประกายแปลกๆ ราวกับถูกเคลือบด้วยสารอื่น",
						"hindi": "एला का घाव गायब हो गया था, लेकिन उसकी त्वचा में एक अजीब चमक थी, जैसे किसी और पदार्थ से ढकी हुई हो।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이건… 치료가 아니야.",
						"english": "This isn't... healing.",
						"japanese": "これは…治療じゃない。",
						"chinese": "这不……这不是治疗。",
						"french": "Ce n'est pas... une guérison.",
						"spanish": "Esto no es... curación.",
						"vietnamese": "Đây không phải... là chữa trị.",
						"thai": "นี่มัน... ไม่ใช่การรักษา",
						"hindi": "यह... इलाज नहीं है।"
					},
					"speaker": "character_2",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "뭐가 아니야? 난 완벽해! 숲은 날 사랑해!",
						"english": "What isn't? I'm perfect! The forest loves me!",
						"japanese": "何が違うの？私は完璧よ！森は私を愛しているわ！",
						"chinese": "什么不是？我完美无缺！森林爱我！",
						"french": "Quoi n'est pas ? Je suis parfaite ! La forêt m'aime !",
						"spanish": "¿Qué no es? ¡Estoy perfecta! ¡El bosque me ama!",
						"vietnamese": "Cái gì mà không? Tôi hoàn hảo! Rừng yêu tôi!",
						"thai": "อะไรไม่ใช่อะไร? ฉันสมบูรณ์แบบ! ป่ารักฉัน!",
						"hindi": "क्या नहीं? मैं बिल्कुल सही हूँ! जंगल मुझसे प्यार करता है!"
					},
					"speaker": "ela",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "정신 차려, 엘라! 숲은 널 먹고 있어!",
						"english": "Snap out of it, Ella! The forest is consuming you!",
						"japanese": "しっかりして、エラ！森がお前を食い尽くそうとしているんだ！",
						"chinese": "清醒一点，埃拉！森林正在吞噬你！",
						"french": "Reprends-toi, Ella ! La forêt te dévore !",
						"spanish": "¡Reacciona, Ella! ¡El bosque te está devorando!",
						"vietnamese": "Tỉnh lại đi, Ella! Rừng đang nuốt chửng cậu!",
						"thai": "ได้สติหน่อย, เอลล่า! ป่ากำลังกลืนกินเธอ!",
						"hindi": "होश में आओ, एला! जंगल तुम्हें खा रहा है!"
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "ela",
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "더… 더 깊이… 숲이 날 원해…",
						"english": "Deeper... deeper... The forest wants me...",
						"japanese": "もっと…もっと深く…森が私を求めている…",
						"chinese": "更……更深处……森林想要我……",
						"french": "Plus... plus profond... La forêt me veut...",
						"spanish": "Más... más profundo... El bosque me quiere...",
						"vietnamese": "Sâu... sâu hơn nữa... Rừng muốn tôi...",
						"thai": "ลึก... ลึกเข้าไปอีก... ป่าต้องการฉัน...",
						"hindi": "और... और गहराई में... जंगल मुझे चाहता है..."
					},
					"speaker": "ela",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "엘라! 안 돼! 그만!",
						"english": "Ella! No! Stop!",
						"japanese": "エラ！だめだ！やめろ！",
						"chinese": "埃拉！不要！停下！",
						"french": "Ella ! Non ! Arrête !",
						"spanish": "¡Ella! ¡No! ¡Detente!",
						"vietnamese": "Ella! Không! Dừng lại!",
						"thai": "เอลล่า! ไม่นะ! หยุดเดี๋ยวนี้!",
						"hindi": "एला! नहीं! रुको!"
					}
				},
				{
					"content": {
						"korean": "엘라의 몸이 뒤틀리기 시작했다. 살갗은 단단한 키틴질로 변하며 빛났다.",
						"english": "Ella's body began to twist. Her skin hardened into chitin, glowing.",
						"japanese": "エラの体がねじれ始めた。肌は硬いキチン質に変わり、光を放った。",
						"chinese": "埃拉的身体开始扭曲。她的皮肤变成了坚硬的几丁质，并发出光芒。",
						"french": "Le corps d'Ella commença à se tordre. Sa peau se durcit en chitine, luisante.",
						"spanish": "El cuerpo de Ella comenzó a retorcerse. Su piel se endureció en quitina, brillando.",
						"vietnamese": "Cơ thể Ella bắt đầu biến dạng. Làn da cô cứng lại thành lớp kitin và phát sáng.",
						"thai": "ร่างของเอลล่าเริ่มบิดเบี้ยว ผิวหนังของเธอกลายเป็นไคตินแข็งและเปล่งประกาย",
						"hindi": "एला का शरीर मुड़ने लगा। उसकी त्वचा कठोर काइटिन में बदल गई और चमकने लगी।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "괴물… 괴물로 변하고 있어!",
						"english": "A monster... She's turning into a monster!",
						"japanese": "怪物…怪物に変わっていく！",
						"chinese": "怪物……她正在变成怪物！",
						"french": "Un monstre... Elle se transforme en monstre !",
						"spanish": "Un monstruo... ¡Se está convirtiendo en un monstruo!",
						"vietnamese": "Quái vật... Cô ấy đang biến thành quái vật!",
						"thai": "สัตว์ประหลาด... เธอกำลังกลายร่างเป็นสัตว์ประหลาด!",
						"hindi": "एक राक्षस... वह एक राक्षस में बदल रही है!"
					},
					"speaker": "character_1",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그때, 거대한 그림자가 드리웠다. 엘라를 삼키려는 듯 기괴하게 웃는 형체였다.",
						"english": "Then, a giant shadow loomed. A grotesque figure, laughing as if to swallow Ella whole.",
						"japanese": "その時、巨大な影が差し込んだ。エラを飲み込もうとでもいうように、奇妙に笑う姿だった。",
						"chinese": "这时，一个巨大的黑影笼罩而下。那是一个怪诞的形体，诡异地笑着，仿佛要将埃拉吞噬。",
						"french": "Alors, une ombre gigantesque apparut. Une forme grotesque, riant comme pour dévorer Ella.",
						"spanish": "Entonces, una sombra gigante se cernió. Una figura grotesca, riendo como si fuera a tragarse a Ella.",
						"vietnamese": "Sau đó, một bóng đen khổng lồ bao trùm. Một hình thù kỳ dị, cười khúc khích như muốn nuốt chửng Ella.",
						"thai": "ทันใดนั้น เงาขนาดมหึมาก็ปรากฏขึ้น ร่างที่บิดเบี้ยวกำลังหัวเราะราวกับจะกลืนกินเอลล่า",
						"hindi": "तभी, एक विशाल छाया मंडराने लगी। एक अजीब आकृति, एला को निगलने के लिए जैसे अजीब तरह से हंस रही थी।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "저게… 숲의 진짜 얼굴인가?",
						"english": "Is that… the forest's true face?",
						"japanese": "あれが… 森の本当の顔なのか？",
						"chinese": "那就是……森林的真面目吗？",
						"french": "Est-ce… le vrai visage de la forêt ?",
						"spanish": "¿Es esa… la verdadera cara del bosque?",
						"vietnamese": "Đó có phải… là bộ mặt thật của khu rừng không?",
						"thai": "นั่นคือ… โฉมหน้าที่แท้จริงของป่าหรือเปล่า?",
						"hindi": "क्या यह… जंगल का असली चेहरा है?"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "숲은 먹이를 기다리는 거대한 아가리처럼 느껴졌다. 사방에서 역겨운 달콤함이 진동했다.",
						"english": "The forest felt like a massive maw waiting for prey. A sickening sweetness permeated everything.",
						"japanese": "森は獲物を待つ巨大な口のようだった。あたり一面に吐き気を催すような甘さが漂っていた。",
						"chinese": "森林感觉像一张等待猎物的巨口。令人作呕的甜味弥漫在四方。",
						"french": "La forêt donnait l'impression d'une gueule béante attendant sa proie. Une douceur écœurante vibrait de toutes parts.",
						"spanish": "El bosque se sentía como una fauce gigante esperando a su presa. Una dulzura nauseabunda vibraba por todas partes.",
						"vietnamese": "Khu rừng như một cái hàm khổng lồ chờ đợi con mồi. Một sự ngọt ngào ghê tởm lan tỏa khắp nơi.",
						"thai": "ป่ารู้สึกเหมือนปากขนาดใหญ่ที่รอคอยเหยื่อ ความหวานที่น่ารังเกียจอบอวลไปทั่วทุกทิศทาง",
						"hindi": "जंगल एक विशाल मुँह जैसा महसूस हुआ जो शिकार का इंतज़ार कर रहा था। चारों ओर एक घिनौनी मिठास गूँज रही थी।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "엘라는… 사라졌어.",
						"english": "Ella… is gone.",
						"japanese": "エラは… 消えた。",
						"chinese": "艾拉……消失了。",
						"french": "Ella… a disparu.",
						"spanish": "Ella… se ha ido.",
						"vietnamese": "Ella… biến mất rồi.",
						"thai": "เอลล่า… หายไปแล้ว",
						"hindi": "एला… चली गई।"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "저 웃음… 우리도 비웃고 있는 것 같아.",
						"english": "That laughter… it feels like it's mocking us too.",
						"japanese": "あの笑い声… 私たちを嘲笑っているようだ。",
						"chinese": "那笑声……好像也在嘲笑我们。",
						"french": "Ce rire… on dirait qu'il se moque aussi de nous.",
						"spanish": "Esa risa… parece que también se está burlando de nosotros.",
						"vietnamese": "Tiếng cười đó… như thể đang chế nhạo cả chúng ta.",
						"thai": "เสียงหัวเราะนั้น… ดูเหมือนจะเยาะเย้ยเราด้วย",
						"hindi": "वह हँसी… ऐसा लगता है कि वह हमारा भी मज़ाक उड़ा रही है।"
					},
					"speaker": "character_1",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 숲의 환대는… 결국 이런 식이었어.",
						"english": "This forest's hospitality… it was like this all along.",
						"japanese": "この森のもてなしは… 結局、こういうことだったのか。",
						"chinese": "这片森林的款待……最终竟是这样。",
						"french": "L'hospitalité de cette forêt… c'était ça depuis le début.",
						"spanish": "La hospitalidad de este bosque… al final era así.",
						"vietnamese": "Sự hiếu khách của khu rừng này… cuối cùng lại là thế này.",
						"thai": "การต้อนรับของป่านี้… ในที่สุดก็เป็นแบบนี้",
						"hindi": "इस जंगल का आतिथ्य… अंततः ऐसा ही निकला।"
					},
					"speaker": "character_2",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "더 이상 물러설 곳은 없어. 이 광기를 멈춰야 해.",
						"english": "There's no turning back now. We have to stop this madness.",
						"japanese": "もう後には引けない。この狂気を止めなければ。",
						"chinese": "无路可退了。必须阻止这场疯狂。",
						"french": "Plus de retour possible. Nous devons arrêter cette folie.",
						"spanish": "No hay vuelta atrás. Debemos detener esta locura.",
						"vietnamese": "Không còn đường lùi nữa. Phải ngăn chặn sự điên rồ này.",
						"thai": "ไม่มีที่ให้ถอยแล้ว เราต้องหยุดความบ้าคลั่งนี้",
						"hindi": "अब पीछे हटने की कोई जगह नहीं है। हमें इस पागलपन को रोकना होगा।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "기괴한 육체가 녹아내렸다. 달콤한 피 냄새가 진동했다.",
						"english": "The grotesque body melted away. A sweet scent of blood permeated the air.",
						"japanese": "奇怪な肉体が溶け落ちた。甘い血の匂いが充満した。",
						"chinese": "怪异的肉体融化了。甜腻的血腥味弥漫开来。",
						"french": "Le corps grotesque a fondu. Une douce odeur de sang a imprégné l'air.",
						"spanish": "El grotesco cuerpo se derritió. Un dulce aroma a sangre impregnó el aire.",
						"vietnamese": "Cơ thể kỳ dị tan chảy. Mùi máu ngọt ngào lan tỏa.",
						"thai": "ร่างประหลาดละลาย กลิ่นเลือดหอมหวานคละคลุ้ง",
						"hindi": "विचित्र शरीर पिघल गया। खून की मीठी गंध हवा में फैल गई।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "하찮은 저항… 숲의 본질은 변하지 않아. …더 깊은 곳에서… 진짜 '환대'가 너희를 기다린다.",
						"english": "Futile resistance... The essence of the forest remains unchanged. ...Deeper within... true 'hospitality' awaits you.",
						"japanese": "取るに足らない抵抗… 森の本質は変わらない。…もっと奥深くで… 本当の「もてなし」がお前たちを待っている。",
						"chinese": "徒劳的抵抗……森林的本质不会改变。……在更深处……真正的“款待” awaits you.",
						"french": "Résistance futile... L'essence de la forêt reste inchangée. ...Plus profondément... une véritable 'hospitalité' vous attend.",
						"spanish": "Resistencia inútil... La esencia del bosque no cambia. ...Más profundo... una verdadera 'hospitalidad' os espera.",
						"vietnamese": "Sự kháng cự vô ích... Bản chất của khu rừng không thay đổi. ...Sâu hơn bên trong... 'sự hiếu khách' thực sự đang chờ đợi ngươi.",
						"thai": "การต่อต้านที่ไร้สาระ... แก่นแท้ของป่ายังคงไม่เปลี่ยนแปลง ...ลึกเข้าไปข้างใน... 'การต้อนรับ' ที่แท้จริงรอพวกเจ้าอยู่",
						"hindi": "व्यर्थ का प्रतिरोध... जंगल का सार अपरिवर्तित रहता है। ...और गहरे में... असली 'आतिथ्य' तुम्हारा इंतजार कर रहा है।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "진짜 환대… 그게 뭔데!",
						"english": "True hospitality... What is that?!",
						"japanese": "本当のもてなし… それは何だ！",
						"chinese": "真正的款待……那是什么！",
						"french": "La vraie hospitalité... Qu'est-ce que c'est que ça !",
						"spanish": "Verdadera hospitalidad... ¡¿Qué es eso?!",
						"vietnamese": "Sự hiếu khách thực sự... Đó là gì!",
						"thai": "การต้อนรับที่แท้จริง... นั่นมันอะไรกัน!",
						"hindi": "असली आतिथ्य... वह क्या है!"
					}
				},
				{
					"content": {
						"korean": "승리했지만, 숲은 여전히 비웃는 듯했다. 역겨운 농담은 끝나지 않았다.",
						"english": "We won, but the forest still seemed to mock us. The disgusting joke was far from over.",
						"japanese": "勝利したが、森は依然として嘲笑しているようだった。忌まわしい冗談は終わらなかった。",
						"chinese": "虽然胜利了，但森林似乎仍在嘲笑。这恶心的玩笑还没有结束。",
						"french": "Nous avons gagné, mais la forêt semblait toujours se moquer de nous. La blague dégoûtante était loin d'être terminée.",
						"spanish": "Ganamos, pero el bosque aún parecía burlarse de nosotros. La asquerosa broma no había terminado.",
						"vietnamese": "Chúng ta đã thắng, nhưng khu rừng vẫn như đang chế nhạo. Trò đùa kinh tởm vẫn chưa kết thúc.",
						"thai": "เราชนะแล้ว แต่ป่ายังคงเยาะเย้ย เรื่องตลกที่น่ารังเกียจยังไม่จบ",
						"hindi": "हम जीत गए, लेकिन जंगल अभी भी हमारा मज़ाक उड़ा रहा था। घिनौना मज़ाक खत्म नहीं हुआ था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "끈적이는 수액이 모든 것을 집어삼켰다. 육체는 숲의 일부가 되었다.",
						"english": "Viscous sap devoured everything. The body became part of the forest.",
						"japanese": "粘液がすべてを飲み込んだ。肉体は森の一部となった。",
						"chinese": "粘稠的汁液吞噬了一切。肉体成为了森林的一部分。",
						"french": "La sève visqueuse a tout dévoré. Le corps est devenu une partie de la forêt.",
						"spanish": "La savia viscosa lo devoró todo. El cuerpo se convirtió en parte del bosque.",
						"vietnamese": "Dịch nhầy dính nhớp nuốt chửng mọi thứ. Cơ thể trở thành một phần của khu rừng.",
						"thai": "น้ำเลี้ยงหนืดหนับกลืนกินทุกสิ่ง ร่างกายกลายเป็นส่วนหนึ่งของป่า",
						"hindi": "चिपचिपा रस सब कुछ निगल गया। शरीर जंगल का हिस्सा बन गया।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "happy",
					"content": {
						"korean": "크크크… 결국 너희도 숲의 위대한 순환에… 합류하는군. 달콤한 비명이었다.",
						"english": "Hahaha... So you too, join the great cycle of the forest... It was a sweet scream.",
						"japanese": "ククク… 結局お前たちも森の偉大な循環に… 加わるのだな。甘美な悲鳴だった。",
						"chinese": "呵呵呵……看来你们也加入了森林的伟大循环……真是一声甜美的尖叫。",
						"french": "Hahaha... Alors vous aussi, rejoignez le grand cycle de la forêt... C'était un doux hurlement.",
						"spanish": "Jajaja... Así que vosotros también os unís al gran ciclo del bosque... Fue un dulce grito.",
						"vietnamese": "Khặc khặc... Cuối cùng ngươi cũng gia nhập vòng tuần hoàn vĩ đại của khu rừng... Đó là một tiếng hét ngọt ngào.",
						"thai": "ฮ่าฮ่าฮ่า... ในที่สุดพวกเจ้าก็เข้าร่วมวัฏจักรอันยิ่งใหญ่ของป่า... มันเป็นเสียงกรีดร้องที่หอมหวาน",
						"hindi": "हाहाहा... तो तुम भी जंगल के महान चक्र में... शामिल हो गए। यह एक मधुर चीख थी।"
					}
				},
				{
					"content": {
						"korean": "아직… 끝나지 않았어. 우린… 돌아올 거야!",
						"english": "It's not... over yet. We'll... be back!",
						"japanese": "まだ… 終わっていない。我々は… 戻ってくる！",
						"chinese": "还没……结束。我们……会回来的！",
						"french": "Ce n'est pas... encore fini. Nous... reviendrons !",
						"spanish": "Aún... no ha terminado. ¡Volveremos!",
						"vietnamese": "Vẫn... chưa kết thúc. Chúng ta... sẽ quay lại!",
						"thai": "ยังไม่... จบ เราจะ... กลับมา!",
						"hindi": "अभी... खत्म नहीं हुआ है। हम... वापस आएंगे!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "숲의 심장부. 모든 것이 꿈틀거리는 기괴한 육체의 전당이었다.",
						"english": "The heart of the forest. A grotesque hall of flesh, where everything writhed.",
						"japanese": "森の心臓部。すべてが蠢く、おぞましい肉体の殿堂だった。",
						"chinese": "森林的心脏。那是所有事物都在蠕动的、怪异的肉体殿堂。",
						"french": "Le cœur de la forêt. Une salle de chair grotesque où tout grouillait.",
						"spanish": "El corazón del bosque. Un grotesco salón de carne, donde todo se retorcía.",
						"vietnamese": "Trung tâm của khu rừng. Một sảnh thịt kỳ dị, nơi mọi thứ đều uốn éo.",
						"thai": "หัวใจของป่า โถงแห่งเนื้อหนังอันน่าสยดสยองที่ทุกสิ่งบิดงอ",
						"hindi": "जंगल का हृदय। मांस का एक विकृत हॉल, जहाँ सब कुछ रेंग रहा था।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "크크… 또 다른 어리석은 먹잇감이로군.",
						"english": "Heh heh… another foolish prey.",
						"japanese": "クク… また愚かな獲物が来たか。",
						"chinese": "呵呵……又一个愚蠢的猎物。",
						"french": "Hé hé… encore une proie stupide.",
						"spanish": "Je je… otra presa tonta.",
						"vietnamese": "Khà khà… lại một con mồi ngu ngốc khác.",
						"thai": "ฮ่าฮ่า… เหยื่อโง่ๆ อีกตัวแล้วสินะ",
						"hindi": "ही ही… एक और मूर्ख शिकार।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "네가 엘라를 그렇게 만든 거야!",
						"english": "You're the one who did that to Ella!",
						"japanese": "お前がエラをあんな風にしたんだ！",
						"chinese": "是你把艾拉变成那样的！",
						"french": "C'est toi qui as fait ça à Ella !",
						"spanish": "¡Tú fuiste quien le hizo eso a Ella!",
						"vietnamese": "Ngươi đã biến Ella thành ra như vậy!",
						"thai": "แกนั่นแหละที่ทำกับเอลล่าแบบนั้น!",
						"hindi": "तुमने ही एला को ऐसा बनाया!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "아니. 숲이 그들을 받아들인 것뿐. 너희도 곧 위대한 순환의 일부가 되리라.",
						"english": "No. The forest merely accepted them. You too shall soon become part of the great cycle.",
						"japanese": "違う。森が彼らを受け入れただけだ。お前たちもじきに偉大なる循環の一部となるだろう。",
						"chinese": "不。森林只是接纳了他们。你们也很快会成为这伟大循环的一部分。",
						"french": "Non. La forêt ne fait que les accepter. Vous ferez bientôt partie du grand cycle, vous aussi.",
						"spanish": "No. El bosque simplemente los aceptó. Vosotros también seréis pronto parte del gran ciclo.",
						"vietnamese": "Không. Rừng chỉ đơn giản là đã chấp nhận họ. Các ngươi cũng sẽ sớm trở thành một phần của vòng tuần hoàn vĩ đại.",
						"thai": "ไม่ใช่ ป่าแค่ยอมรับพวกเขาเท่านั้น พวกเจ้าเองก็จะได้เป็นส่วนหนึ่งของวัฏจักรอันยิ่งใหญ่ในไม่ช้า",
						"hindi": "नहीं। जंगल ने बस उन्हें स्वीकार कर लिया। तुम भी जल्द ही महान चक्र का हिस्सा बनोगे।"
					}
				},
				{
					"content": {
						"korean": "우린 네 장난감이 아냐. 널 파괴할 거야.",
						"english": "We're not your toys. We'll destroy you.",
						"japanese": "我々は君のおもちゃじゃない。君を破壊する。",
						"chinese": "我们不是你的玩具。我们会摧毁你。",
						"french": "Nous ne sommes pas tes jouets. Nous allons te détruire.",
						"spanish": "No somos tus juguetes. Te destruiremos.",
						"vietnamese": "Chúng ta không phải đồ chơi của ngươi. Chúng ta sẽ tiêu diệt ngươi.",
						"thai": "เราไม่ใช้ของเล่นของแก เราจะทำลายแกซะ",
						"hindi": "हम तुम्हारे खिलौने नहीं हैं। हम तुम्हें नष्ट कर देंगे।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"숲은 달콤한 유혹으로 가득했다.",
			"동시에 역겨운 금속 비린내가 코를 찔렀다.",
			"엘라는 몽롱한 눈빛으로 미지의 향을 쫓았다.",
			"숲의 '환대'는, 죽음을 위장한 달콤한 독이었다."
		],
		"english": [
			"The forest was full of sweet temptation.",
			"At the same time, a disgusting metallic stench pricked my nose.",
			"Ella chased the unknown scent with hazy eyes.",
			"The forest's 'hospitality' was a sweet poison disguised as death."
		],
		"japanese": [
			"森は甘い誘惑に満ちていた。",
			"同時に、吐き気を催すような金属の生臭さが鼻を刺した。",
			"エラは朦朧とした目で未知の香りを追った。",
			"森の「もてなし」は、死を装った甘い毒だった。"
		],
		"chinese": [
			"森林充满了甜蜜的诱惑。",
			"同时，一股令人作呕的金属腥味扑鼻而来。",
			"艾拉眼神迷离地追逐着未知的香气。",
			"森林的“款待”是伪装成死亡的甜美毒药。"
		],
		"french": [
			"La forêt était pleine de douces tentations.",
			"En même temps, une odeur métallique dégoûtante me piquait le nez.",
			"Ella poursuivait l'odeur inconnue d'un regard brumeux.",
			"L''hospitalité' de la forêt était un doux poison déguisé en mort."
		],
		"spanish": [
			"El bosque estaba lleno de dulces tentaciones.",
			"Al mismo tiempo, un asqueroso olor metálico me picaba la nariz.",
			"Ella siguió el aroma desconocido con ojos brumosos.",
			"La 'hospitalidad' del bosque era un dulce veneno disfrazado de muerte."
		],
		"vietnamese": [
			"Rừng tràn ngập những cám dỗ ngọt ngào.",
			"Đồng thời, một mùi tanh kim loại kinh tởm xộc vào mũi.",
			"Ella đuổi theo mùi hương bí ẩn với ánh mắt mờ mịt.",
			"\"Sự hiếu khách\" của rừng là một loại độc dược ngọt ngào ngụy trang dưới cái chết."
		],
		"thai": [
			"ป่าเต็มไปด้วยการล่อลวงอันหอมหวาน",
			"ในขณะเดียวกัน กลิ่นคาวโลหะที่น่ารังเกียจก็แทงจมูก",
			"เอลล่าไล่ตามกลิ่นที่ไม่รู้จักด้วยสายตาพร่ามัว",
			"'การต้อนรับ' ของป่าคือกำมะถันหวานที่ปลอมตัวเป็นความตาย"
		],
		"hindi": [
			"जंगल मीठे प्रलोभनों से भरा था।",
			"उसी समय, एक घिनौनी धातु की गंध नाक में चुभ गई।",
			"एला ने धुंधली आँखों से अज्ञात सुगंध का पीछा किया।",
			"जंगल की 'मेहमाननवाज़ी' मौत के वेश में एक मीठा ज़हर थी।"
		]
	}
} as const;
