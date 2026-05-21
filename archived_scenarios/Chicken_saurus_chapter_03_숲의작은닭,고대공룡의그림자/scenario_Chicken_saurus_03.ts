export const scenario_Chicken_saurus_03 = {
	"scenario_id": "Chicken_saurus_03",
	"order": 3,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"cedar": {
			"id": "mon_bd67c222-311e-4f31-b81f-931b14f6b5c6",
			"name": {
				"korean": "시더",
				"english": "Cedar",
				"japanese": "シダー",
				"chinese": "雪松",
				"french": "Cèdre",
				"spanish": "Cedro",
				"vietnamese": "Tuyết tùng",
				"thai": "ซีดาร์",
				"hindi": "देवदार"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f1057921-5fa2-4be2-767d-1a64c33e6e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9579f10e-eb78-40e5-d495-72f489322200/public"
		},
		"Chicken-saurus": {
			"id": "mon_754fceab-60c4-4cce-8729-7b896fd69e9c",
			"name": {
				"korean": "치킨사우루스",
				"english": "Chicken-Saurus",
				"japanese": "チキンサウルス",
				"chinese": "鸡龙兽",
				"french": "Pouletosaurus",
				"spanish": "Pollosaurio",
				"vietnamese": "Gà Khủng Long",
				"thai": "ไก่ซอรัส",
				"hindi": "चिकन-सॉरस"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a9b0f74c-f415-431e-77f8-efa1cb858f00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/afa1be97-1f4d-4aa6-a636-f281cf48a700/public"
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
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "숲은 침묵 속에 잠겨 있었다. 생명의 흔적마저 희미해졌다.",
						"english": "The forest was steeped in silence. Even traces of life had faded.",
						"japanese": "森は沈黙に包まれていた。生命の痕跡さえも薄れていた。",
						"chinese": "森林沉浸在寂静之中。连生命的痕迹都变得模糊。",
						"french": "La forêt était plongée dans le silence. Même les traces de vie s'étaient estompées.",
						"spanish": "El bosque estaba sumido en el silencio. Incluso los rastros de vida se habían desvanecido.",
						"vietnamese": "Rừng chìm trong im lặng. Ngay cả dấu vết của sự sống cũng đã phai mờ.",
						"thai": "ป่าจมดิ่งในความเงียบงัน แม้แต่ร่องรอยของชีวิตก็เลือนหายไป",
						"hindi": "जंगल खामोशी में डूबा हुआ था। जीवन के निशान भी मिट गए थे।"
					}
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "Chicken-saurus",
					"spot": [
						5,
						4
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "여긴 왜 이렇게 조용해?",
						"english": "Why is it so quiet here?",
						"japanese": "ここ、どうしてこんなに静かなんだ？",
						"chinese": "这里怎么这么安静？",
						"french": "Pourquoi est-ce si silencieux ici ?",
						"spanish": "¿Por qué está tan silencioso aquí?",
						"vietnamese": "Sao ở đây yên tĩnh vậy?",
						"thai": "ทำไมที่นี่ถึงเงียบขนาดนี้?",
						"hindi": "यहाँ इतनी खामोशी क्यों है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "cedar",
					"action": "enter",
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "왠지... 싸늘해. 좋은 징조가 아니야.",
						"english": "Somehow... it's chilling. Not a good sign.",
						"japanese": "なんだか...冷たい。いい兆候じゃない。",
						"chinese": "总觉得...很冷。这不是个好兆头。",
						"french": "D'une certaine manière... c'est glaçant. Pas un bon signe.",
						"spanish": "De alguna manera... es escalofriante. No es una buena señal.",
						"vietnamese": "Không hiểu sao... lạnh lẽo quá. Không phải điềm lành.",
						"thai": "ไม่รู้ทำไม... มันหนาวเย็น ไม่ใช่ลางดีเลย",
						"hindi": "किसी तरह... यह डरावना है। अच्छा संकेत नहीं।"
					},
					"speaker": "cedar",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 일이라도 있는 거야?",
						"english": "Is something going on?",
						"japanese": "何かあったのか？",
						"chinese": "发生什么事了吗？",
						"french": "Il se passe quelque chose ?",
						"spanish": "¿Está pasando algo?",
						"vietnamese": "Có chuyện gì sao?",
						"thai": "มีอะไรเกิดขึ้นหรือเปล่า?",
						"hindi": "क्या कुछ हो रहा है?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "cedar",
					"content": {
						"korean": "직감이 말해줘. 뭔가가... 오랫동안 여기 있었어.",
						"english": "My gut tells me. Something... has been here for a long time.",
						"japanese": "直感が告げている。何かが...ずっとここにいた。",
						"chinese": "直觉告诉我。有什么东西...在这里很久了。",
						"french": "Mon instinct me dit. Quelque chose... est ici depuis longtemps.",
						"spanish": "Mi instinto me lo dice. Algo... ha estado aquí durante mucho tiempo.",
						"vietnamese": "Trực giác mách bảo. Có thứ gì đó... đã ở đây rất lâu rồi.",
						"thai": "สัญชาตญาณบอกฉันว่า... มีบางอย่างอยู่ที่นี่มานานแล้ว",
						"hindi": "मेरी अंतरात्मा कह रही है। कुछ... यहाँ लंबे समय से था।"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그 순간, 닭이 풀썩 주저앉아 푸드덕 푸드덕 흙먼지를 일으키며 모래목욕을 시작했다.",
						"english": "At that moment, a chicken plopped down and began a dust bath, flapping its wings and kicking up dirt.",
						"japanese": "その瞬間、鶏がどさっと座り込み、ばたばたと土埃を立てながら砂浴びを始めた。",
						"chinese": "就在那一刻，一只鸡突然坐下，扑腾着翅膀扬起尘土，开始沙浴。",
						"french": "À cet instant, une poule s'est affalée et a commencé un bain de poussière, battant des ailes et soulevant de la terre.",
						"spanish": "En ese momento, una gallina se dejó caer y comenzó un baño de polvo, aleteando y levantando tierra.",
						"vietnamese": "Khoảnh khắc đó, một con gà đột nhiên ngồi bệt xuống, vỗ cánh phành phạch và bắt đầu tắm bụi.",
						"thai": "ทันใดนั้น ไก่ตัวหนึ่งก็ทรุดตัวลงและเริ่มอาบฝุ่น พลางกระพือปีกและคุ้ยเขี่ยดิน",
						"hindi": "उसी पल, एक मुर्गी धड़ाम से बैठ गई और पंख फड़फड़ाती हुई धूल उड़ाने लगी, और रेत स्नान शुरू कर दिया।"
					}
				},
				{
					"speaker": "Chicken-saurus",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "꼬꼬댁 꼭꼭!",
						"english": "Cluck-cluck!",
						"japanese": "コッコッ！",
						"chinese": "咯咯咯！",
						"french": "Cot cot !",
						"spanish": "¡Clo-clo!",
						"vietnamese": "Cục tác!",
						"thai": "กุ๊ก กุ๊ก!",
						"hindi": "कुट-कुट!"
					}
				},
				{
					"speaker": "cedar",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "...아니, 그래도 이상해. 직감은 거짓말 안 해.",
						"english": "...No, it's still strange. My gut feeling doesn't lie.",
						"japanese": "…いや、それでもおかしい。直感は嘘をつかない。",
						"chinese": "……不，还是很奇怪。直觉不会骗人。",
						"french": "...Non, c'est quand même bizarre. Mon instinct ne me trompe jamais.",
						"spanish": "...No, aun así es raro. Mi intuición nunca miente.",
						"vietnamese": "...Không, vẫn kỳ lạ. Trực giác không biết nói dối.",
						"thai": "...ไม่สิ ถึงอย่างนั้นก็ยังแปลก สัญชาตญาณไม่เคยหลอกกัน",
						"hindi": "...नहीं, फिर भी अजीब है। अंतर्ज्ञान झूठ नहीं बोलता।"
					}
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "(작은 목소리로) 직감이 닭한테 졌어.",
						"english": "(In a small voice) My gut lost to a chicken.",
						"japanese": "（小さな声で）直感がニワトリに負けた。",
						"chinese": "（小声）直觉输给了鸡。",
						"french": "(À voix basse) Mon instinct s'est fait battre par un poulet.",
						"spanish": "(En voz baja) Mi intuición perdió contra un pollo.",
						"vietnamese": "(Nói nhỏ) Trực giác đã thua một con gà.",
						"thai": "(เสียงเบาๆ) สัญชาตญาณแพ้ไก่ซะแล้ว",
						"hindi": "(धीमी आवाज़ में) अंतर्ज्ञान एक मुर्गे से हार गया।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "동물의 흔적이 없는 기이한 구역. 흙더미 속에서 뼈 조각이 드러났다.",
						"english": "A strange area with no animal traces. Bone fragments emerged from the dirt pile.",
						"japanese": "動物の痕跡がない奇妙な区域。土の山から骨の破片が現れた。",
						"chinese": "一个没有动物痕迹的诡异区域。泥土堆中露出了骨头碎片。",
						"french": "Une zone étrange sans traces d'animaux. Des fragments d'os sont apparus dans la butte de terre.",
						"spanish": "Una zona extraña sin rastros de animales. Fragmentos de hueso emergieron de la pila de tierra.",
						"vietnamese": "Một khu vực kỳ lạ không có dấu vết động vật. Những mảnh xương lộ ra từ đống đất.",
						"thai": "บริเวณประหลาดที่ไร้ร่องรอยสัตว์ เศษกระดูกโผล่พ้นกองดินขึ้นมา",
						"hindi": "जानवरों के निशान रहित एक अजीब क्षेत्र। मिट्टी के ढेर से हड्डियों के टुकड़े निकले।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 뼈는... 뭐야?",
						"english": "These bones... what are they?",
						"japanese": "この骨は…何だ？",
						"chinese": "这些骨头……是什么？",
						"french": "Ces os... qu'est-ce que c'est ?",
						"spanish": "Estos huesos... ¿qué son?",
						"vietnamese": "Bộ xương này... là gì vậy?",
						"thai": "กระดูกพวกนี้...คืออะไร?",
						"hindi": "ये हड्डियाँ... क्या हैं?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"spot": [
						4,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "cedar"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이건 평범한 동물이 아니야. 엄청나게... 오래된 거대 존재의 흔적이야.",
						"english": "This isn't an ordinary animal. It's the trace of an incredibly... ancient, colossal being.",
						"japanese": "これは普通の動物じゃない。とてつもなく…古い巨大な存在の痕跡だ。",
						"chinese": "这不是普通的动物。这是某种极其……古老的巨大存在的痕迹。",
						"french": "Ce n'est pas un animal ordinaire. C'est la trace d'une existence colossale... incroyablement ancienne.",
						"spanish": "Esto no es un animal común. Es el rastro de una existencia gigantesca... increíblemente antigua.",
						"vietnamese": "Đây không phải là một con vật bình thường. Đây là dấu vết của một thực thể khổng lồ... vô cùng cổ xưa.",
						"thai": "นี่ไม่ใช่สัตว์ธรรมดา เป็นร่องรอยของสิ่งมีชีวิตขนาดยักษ์...ที่เก่าแก่มากๆ",
						"hindi": "यह कोई साधारण जानवर नहीं है। यह एक अविश्वसनीय रूप से... प्राचीन, विशालकाय प्राणी का निशान है।"
					},
					"speaker": "cedar",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "거대 존재?",
						"english": "Colossal being?",
						"japanese": "巨大な存在？",
						"chinese": "巨大存在？",
						"french": "Existence colossale ?",
						"spanish": "¿Existencia gigantesca?",
						"vietnamese": "Thực thể khổng lồ?",
						"thai": "สิ่งมีชีวิตขนาดยักษ์?",
						"hindi": "विशालकाय प्राणी?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "cedar",
					"content": {
						"korean": "전설 속에서나 듣던...",
						"english": "Only heard of in legends...",
						"japanese": "伝説の中でしか聞いたことのない…",
						"chinese": "只在传说中听过……",
						"french": "Seulement entendu parler dans les légendes...",
						"spanish": "Solo se escucha en leyendas...",
						"vietnamese": "Chỉ nghe trong truyền thuyết...",
						"thai": "ที่เคยได้ยินแต่ในตำนาน...",
						"hindi": "केवल कहानियों में सुना था..."
					}
				},
				{
					"type": "speech",
					"speaker": "cedar",
					"content": {
						"korean": "경고해야 해... 어서 움직여야 해!",
						"english": "I have to warn them... I need to move quickly!",
						"japanese": "警告しなければ…早く動かないと！",
						"chinese": "我必须警告……我得赶紧行动！",
						"french": "Je dois prévenir... Je dois agir vite !",
						"spanish": "¡Tengo que avisar... Tengo que moverme rápido!",
						"vietnamese": "Phải cảnh báo... Phải hành động nhanh lên!",
						"thai": "ต้องเตือน...ต้องรีบเคลื่อนไหว!",
						"hindi": "मुझे चेतावनी देनी होगी... मुझे जल्दी से आगे बढ़ना होगा!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그때, 닭이 거대한 뼈 앞에 멈춰 서서 부리로 톡, 톡, 톡 두드리기 시작했다.",
						"english": "Just then, the chicken stopped in front of the colossal bone and began to tap, tap, tap with its beak.",
						"japanese": "その時、ニワトリが巨大な骨の前で立ち止まり、くちばしでコン、コン、コンと叩き始めた。",
						"chinese": "就在这时，鸡停在了巨大的骨头前，开始用喙啄了啄，啄了啄。",
						"french": "À ce moment-là, le poulet s'arrêta devant l'os colossal et commença à taper, taper, taper du bec.",
						"spanish": "En ese momento, el pollo se detuvo frente al hueso colosal y comenzó a picotear, picotear, picotear con su pico.",
						"vietnamese": "Đúng lúc đó, con gà dừng lại trước bộ xương khổng lồ và bắt đầu mổ, mổ, mổ bằng mỏ của nó.",
						"thai": "ทันใดนั้น ไก่ก็หยุดอยู่ตรงหน้ากระดูกยักษ์ แล้วเริ่มจิก จิก จิก ด้วยจะงอยปาก",
						"hindi": "तभी, मुर्गा विशाल हड्डी के सामने रुका और अपनी चोंच से ठक-ठक-ठक करने लगा।"
					}
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "쟤가 뭘 안다고… 그치만 묘하게 의미심장한데.",
						"english": "What does it know...? But it's oddly significant.",
						"japanese": "あれが何を分かってるっていうんだ…だけど妙に意味深だな。",
						"chinese": "它懂什么啊……但总觉得有些意味深长。",
						"french": "Qu'est-ce qu'il en sait...? Mais c'est étrangement significatif.",
						"spanish": "¿Qué sabrá...? Pero es extrañamente significativo.",
						"vietnamese": "Nó biết gì chứ...? Nhưng lại có vẻ đầy ẩn ý một cách kỳ lạ.",
						"thai": "มันจะรู้อะไร...แต่ก็น่าแปลกใจที่มีความหมาย",
						"hindi": "यह क्या जानता है...? लेकिन यह अजीब तरह से महत्वपूर्ण है।"
					}
				},
				{
					"speaker": "Chicken-saurus",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "꼬꼭.",
						"english": "Cluck.",
						"japanese": "コッコッ。",
						"chinese": "咕咕。",
						"french": "Cot cot.",
						"spanish": "¡Cloc cloc!",
						"vietnamese": "Cúc cúc.",
						"thai": "กุ๊ก กุ๊ก",
						"hindi": "कुक-कुक।"
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "고대 문양이 새겨진 조각상. 숲의 깊은 곳에서 정체를 드러냈다.",
						"english": "An ancient, patterned statue. It emerged from the forest's depths.",
						"japanese": "古代の紋様が刻まれた彫像。森の奥深くでその姿を現した。",
						"chinese": "一尊刻有古代纹样的雕像。在森林深处显露了真容。",
						"french": "Une statue ornée de motifs anciens. Elle a révélé sa présence au cœur de la forêt.",
						"spanish": "Una estatua con grabados antiguos. Reveló su presencia en lo más profundo del bosque.",
						"vietnamese": "Một bức tượng khắc họa hoa văn cổ xưa. Nó đã lộ diện từ sâu thẳm rừng già.",
						"thai": "รูปปั้นสลักลวดลายโบราณ เผยโฉมจากส่วนลึกของป่า",
						"hindi": "प्राचीन नक्काशियों वाली एक मूर्ति। यह जंगल की गहराइयों में प्रकट हुई।"
					}
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "Chicken-saurus",
					"spot": [
						5,
						3
					],
					"type": "direction"
				},
				{
					"speaker": "Chicken-saurus",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "꼬꼭…",
						"english": "Cluck...",
						"japanese": "コッコッ…",
						"chinese": "咕咕…",
						"french": "Cot cot...",
						"spanish": "¡Cloc cloc...!",
						"vietnamese": "Cúc cúc...",
						"thai": "กุ๊ก กุ๊ก...",
						"hindi": "कुक-कुक…"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이건 또 뭐야? 닭 모양 같기도 하고...",
						"english": "What's this now? Looks like a chicken...",
						"japanese": "今度は何だこれ？鶏の形にも見えるけど…",
						"chinese": "这又是什么？看起来像鸡的形状…",
						"french": "Qu'est-ce que c'est que ça, maintenant ? On dirait un poulet...",
						"spanish": "¿Y esto qué es? Parece un pollo...",
						"vietnamese": "Cái gì đây nữa? Trông như hình con gà ấy...",
						"thai": "นี่มันอะไรอีกล่ะเนี่ย? ดูเหมือนไก่เลย...",
						"hindi": "ये क्या है फिर? मुर्गे जैसा भी लग रहा है..."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "cedar"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "cedar",
					"content": {
						"korean": "이 조각상... 단순한 장식이 아니야.",
						"english": "This statue... it's no mere decoration.",
						"japanese": "この彫像…ただの飾りじゃない。",
						"chinese": "这座雕像…并非单纯的装饰品。",
						"french": "Cette statue... ce n'est pas une simple décoration.",
						"spanish": "Esta estatua... no es una simple decoración.",
						"vietnamese": "Bức tượng này... không phải là vật trang trí đơn thuần.",
						"thai": "รูปปั้นนี่... ไม่ใช่แค่ของตกแต่งธรรมดา",
						"hindi": "यह मूर्ति... सिर्फ एक सजावट नहीं है।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "닭과 알. 변신을 암시하는 거야. 작은 것이 거대한 것으로...",
						"english": "Chicken and egg. It hints at transformation. Small into something vast...",
						"japanese": "鶏と卵。変身を暗示している。小さなものが巨大なものへと…",
						"chinese": "鸡和蛋。暗示着变身。渺小的东西变成巨大的…",
						"french": "Le poulet et l'œuf. Ça évoque une transformation. Du petit au gigantesque...",
						"spanish": "El pollo y el huevo. Sugiere una transformación. De pequeño a gigantesco...",
						"vietnamese": "Gà và trứng. Nó ngụ ý sự biến đổi. Từ nhỏ bé thành khổng lồ...",
						"thai": "ไก่กับไข่ มันบ่งบอกถึงการแปลงร่าง จากสิ่งเล็ก ๆ กลายเป็นสิ่งที่ใหญ่โต...",
						"hindi": "मुर्गी और अंडा। यह परिवर्तन का संकेत है। छोटे से विशाल में..."
					},
					"speaker": "cedar"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그 순간, 닭이 조각상 옆으로 뒤뚱뒤뚱 다가가 알 모양처럼 동그랗게 웅크려 앉았다.",
						"english": "At that moment, the chicken waddled over to the statue and crouched round like an egg.",
						"japanese": "その瞬間、鶏が彫像のそばへよちよちと近づき、卵のように丸くうずくまった。",
						"chinese": "就在那一刻，小鸡摇摇晃晃地走到雕像旁边，像蛋一样蜷缩起来。",
						"french": "À cet instant, le poulet a titubé vers la statue et s'est recroquevillé en boule, comme un œuf.",
						"spanish": "En ese instante, el pollo se acercó contoneándose a la estatua y se acurrucó, redondo como un huevo.",
						"vietnamese": "Ngay lúc đó, con gà lạch bạch đi tới bên cạnh bức tượng và co mình lại tròn như quả trứng.",
						"thai": "ณ ตอนนั้น ไก่ตัวนั้นก็เดินตุ๊ต๊ะเข้าไปข้างรูปปั้น แล้วขดตัวกลมเหมือนไข่",
						"hindi": "उसी पल, मुर्गी लड़खड़ाती हुई मूर्ति के पास गई और अंडे के आकार में गोल होकर बैठ गई।"
					}
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "어머어머! 따라한다! 봐봐, 똑같아!",
						"english": "Oh my! It's imitating! Look, it's identical!",
						"japanese": "まあまあ！真似してる！見て、そっくりだよ！",
						"chinese": "哎呀呀！它在模仿！快看，一模一样！",
						"french": "Oh là là ! Il imite ! Regarde, c'est pareil !",
						"spanish": "¡Ay, ay! ¡Lo está imitando! ¡Mira, es idéntico!",
						"vietnamese": "Ôi trời ơi! Nó bắt chước kìa! Nhìn xem, y hệt luôn!",
						"thai": "โอ้โห! มันทำตาม! ดูสิ เหมือนกันเป๊ะเลย!",
						"hindi": "अरे बाप रे! यह नकल कर रहा है! देखो, बिल्कुल वैसा ही है!"
					}
				},
				{
					"speaker": "cedar",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "(등골이 오싹해지며) …이거, 농담이 아닌 것 같은데.",
						"english": "(A shiver down my spine) ...This isn't a joke, is it?",
						"japanese": "(背筋が凍る) …これ、冗談じゃないみたいだ。",
						"chinese": "(脊背发凉) …这，好像不是开玩笑。",
						"french": "(Un frisson me parcourt l'échine) ...Ce n'est pas une blague, n'est-ce pas ?",
						"spanish": "(Un escalofrío me recorre la espalda) ...Esto no parece una broma.",
						"vietnamese": "(Một cảm giác rợn sống lưng) ...Cái này, không giống trò đùa chút nào.",
						"thai": "(ขนลุกซู่) ...นี่คงไม่ใช่เรื่องตลกแล้วล่ะ",
						"hindi": "(रीढ़ में सिहरन) ...यह कोई मज़ाक नहीं लगता।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "변신?",
						"english": "Transformation?",
						"japanese": "変身？",
						"chinese": "变身？",
						"french": "Transformation ?",
						"spanish": "¿Transformación?",
						"vietnamese": "Biến hình?",
						"thai": "แปลงร่างเหรอ?",
						"hindi": "परिवर्तन?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "cedar",
					"content": {
						"korean": "우리가 찾던 그 존재가... 변하고 있는 걸지도 몰라.",
						"english": "The entity we sought... it might be changing.",
						"japanese": "我々が探していた存在が… 変化しているのかもしれない。",
						"chinese": "我们寻找的那个存在……它可能正在发生变化。",
						"french": "L'entité que nous cherchions... elle est peut-être en train de changer.",
						"spanish": "La entidad que buscábamos... podría estar cambiando.",
						"vietnamese": "Thực thể mà chúng ta tìm kiếm... có thể đang thay đổi.",
						"thai": "สิ่งที่เราตามหา... อาจกำลังเปลี่ยนแปลงไป",
						"hindi": "वह सत्ता जिसे हम खोज रहे थे... शायद बदल रही है।"
					},
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
					"type": "speech",
					"content": {
						"korean": "어두운 기운이 길을 막아섰다. 정체 모를 그림자가 모습을 드러냈다.",
						"english": "A dark aura blocked the path. An unknown shadow emerged.",
						"japanese": "暗い気が道を塞いだ。正体不明の影が姿を現した。",
						"chinese": "黑暗的气息挡住了去路。一个不明身份的影子出现了。",
						"french": "Une aura sombre bloqua le chemin. Une ombre inconnue apparut.",
						"spanish": "Un aura oscura bloqueó el camino. Una sombra desconocida emergió.",
						"vietnamese": "Một luồng khí tối tăm chặn lối. Một bóng hình không rõ danh tính xuất hiện.",
						"thai": "พลังงานมืดเข้าปิดกั้นเส้นทาง เงาลึกลับปรากฏกายขึ้น",
						"hindi": "एक काली शक्ति ने रास्ता रोक दिया। एक अज्ञात छाया प्रकट हुई।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "감히 여기까지 오다니. 어리석은 인간들.",
						"english": "You dared to come this far. Foolish mortals.",
						"japanese": "よくもここまで来たな。愚かな人間どもめ。",
						"chinese": "竟敢来到这里。愚蠢的人类。",
						"french": "Comment osez-vous venir si loin. Mortels insensés.",
						"spanish": "¿Cómo osasteis llegar tan lejos? Estúpidos mortales.",
						"vietnamese": "Dám đến tận đây ư. Những kẻ phàm trần ngu ngốc.",
						"thai": "บังอาจมาถึงที่นี่ได้ไง. มนุษย์โง่เขลา.",
						"hindi": "यहां तक आने की हिम्मत की तुमने। मूर्ख नश्वर प्राणी।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "너는... 대체 누구야?",
						"english": "Who... who are you, exactly?",
						"japanese": "お前は…一体誰だ？",
						"chinese": "你……你到底是谁？",
						"french": "Qui... qui es-tu, exactement ?",
						"spanish": "¿Quién... quién eres, exactamente?",
						"vietnamese": "Ngươi... rốt cuộc là ai?",
						"thai": "แก... แกเป็นใครกันแน่?",
						"hindi": "तुम... आखिर कौन हो?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "너희의 어설픈 호기심을 끝내러 온 자.",
						"english": "I am the one who will end your clumsy curiosity.",
						"japanese": "お前たちの未熟な好奇心に終止符を打つ者だ。",
						"chinese": "我是来终结你们那笨拙好奇心的人。",
						"french": "Je suis celui qui mettra fin à votre maladroite curiosité.",
						"spanish": "Soy quien pondrá fin a vuestra torpe curiosidad.",
						"vietnamese": "Kẻ đến để chấm dứt sự tò mò ngốc nghếch của các ngươi.",
						"thai": "ข้าคือผู้ที่จะยุติความอยากรู้อยากเห็นที่ไร้เดียงสาของพวกเจ้า",
						"hindi": "मैं वही हूं जो तुम्हारी अनाड़ी जिज्ञासा को समाप्त करने आया हूं।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "물러서지 않아!",
						"english": "We won't back down!",
						"japanese": "退かない！",
						"chinese": "我们不会退缩！",
						"french": "Nous ne reculerons pas !",
						"spanish": "¡No retrocederemos!",
						"vietnamese": "Sẽ không lùi bước!",
						"thai": "ไม่ถอยหรอก!",
						"hindi": "हम पीछे नहीं हटेंगे!"
					},
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 적은 쓰러졌다. 그러나 위협은 사라지지 않았다.",
						"english": "The unknown foe has fallen. Yet, the threat remains.",
						"japanese": "正体不明の敵は倒れた。しかし、脅威は消えていない。",
						"chinese": "未知的敌人倒下了。然而，威胁并未消失。",
						"french": "L'ennemi inconnu est tombé. Pourtant, la menace persiste.",
						"spanish": "El enemigo desconocido ha caído. Sin embargo, la amenaza persiste.",
						"vietnamese": "Kẻ thù vô danh đã gục ngã. Tuy nhiên, mối đe dọa vẫn còn.",
						"thai": "ศัตรูที่ไม่รู้จักล้มลงแล้ว แต่ภัยคุกคามยังไม่หายไป",
						"hindi": "अज्ञात शत्रु पराजित हो गया। फिर भी, खतरा बना हुआ है।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "...겨우 이 정도에 만족하나? 진짜는... 아직 시작도 안 했다.",
						"english": "...Are you content with merely this? The true battle... has yet to start.",
						"japanese": "...たったこれっぽっちで満足か？本番は...まだ始まってもいない。",
						"chinese": "...仅此而已就满足了吗？真正的...还没开始呢。",
						"french": "...Satisfait de si peu ? Le vrai défi... n'a même pas encore commencé.",
						"spanish": "¿...Satisfecho con tan poco? Lo verdadero... ni siquiera ha empezado.",
						"vietnamese": "...Chỉ nhiêu đây đã thỏa mãn rồi sao? Thứ thật sự... còn chưa bắt đầu.",
						"thai": "...แค่นี้ก็พอใจแล้วเหรอ? ของจริง...ยังไม่ทันได้เริ่มเลย.",
						"hindi": "...बस इतने से ही संतुष्ट हो? असली खेल... अभी शुरू भी नहीं हुआ है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "뭐? 진짜라고?",
						"english": "What? Really?",
						"japanese": "何？本当か？",
						"chinese": "什么？真的吗？",
						"french": "Quoi ? Vraiment ?",
						"spanish": "¿Qué? ¿De verdad?",
						"vietnamese": "Gì cơ? Thật sao?",
						"thai": "อะไรนะ? จริงเหรอ?",
						"hindi": "क्या? सच में?"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "숲의 깊은 곳에서 더 큰 어둠이 깨어나고 있었다.",
						"english": "From the forest's depths, a greater darkness was awakening.",
						"japanese": "森の奥深くから、さらなる闇が目覚めつつあった。",
						"chinese": "在森林深处，更深的黑暗正在苏醒。",
						"french": "Des profondeurs de la forêt, une obscurité plus grande s'éveillait.",
						"spanish": "Desde las profundidades del bosque, una oscuridad mayor estaba despertando.",
						"vietnamese": "Từ sâu thẳm trong rừng, một bóng tối lớn hơn đang thức tỉnh.",
						"thai": "จากส่วนลึกของป่า ความมืดที่ยิ่งใหญ่กว่ากำลังตื่นขึ้น",
						"hindi": "जंगल की गहराई से, एक बड़ा अंधकार जागृत हो रहा था।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 탐험대를 압도했다.",
						"english": "A colossal shadow overwhelmed the expedition team.",
						"japanese": "巨大な影が探検隊を圧倒した。",
						"chinese": "一个巨大的影子压倒了探险队。",
						"french": "Une ombre colossale submergea l'équipe d'expédition.",
						"spanish": "Una sombra colosal abrumó al equipo de expedición.",
						"vietnamese": "Một bóng đen khổng lồ áp đảo đội thám hiểm.",
						"thai": "เงามหึมาเข้าครอบงำทีมสำรวจ",
						"hindi": "एक विशाल छाया ने अभियान दल को अभिभूत कर दिया।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 숲의 진정한 주인을 알게 될 것이다.",
						"english": "You will know the true master of this forest.",
						"japanese": "この森の真の主を知ることになるだろう。",
						"chinese": "你们会知道这片森林真正的主人。",
						"french": "Vous connaîtrez le véritable maître de cette forêt.",
						"spanish": "Conoceréis al verdadero amo de este bosque.",
						"vietnamese": "Ngươi sẽ biết chủ nhân thực sự của khu rừng này.",
						"thai": "พวกเจ้าจะได้รู้ว่าใครคือเจ้าของที่แท้จริงของป่านี้",
						"hindi": "तुम्हें इस जंगल के असली मालिक का पता चल जाएगा।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "그럴 일 없어. 우리가 널 막을 거야!",
						"english": "No, you won't. We'll stop you!",
						"japanese": "そんなことはさせない。私たちが止める！",
						"chinese": "不可能。我们会阻止你！",
						"french": "Hors de question. Nous t'arrêterons !",
						"spanish": "¡Eso no pasará! ¡Te detendremos!",
						"vietnamese": "Không đời nào. Chúng ta sẽ ngăn ngươi lại!",
						"thai": "ไม่มีทางซะหรอก! เราจะหยุดแกเอง!",
						"hindi": "ऐसा नहीं होगा। हम तुम्हें रोकेंगे!"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "크하하! 가소롭군.",
						"english": "Hahaha! How amusing.",
						"japanese": "クハハハ！愚かな。",
						"chinese": "哈哈哈哈！真可笑。",
						"french": "Hahaha ! Pitoyable.",
						"spanish": "¡Jajaja! Qué ridículo.",
						"vietnamese": "Khakha! Thật nực cười.",
						"thai": "ฮ่าฮ่าฮ่า! น่าขำสิ้นดี.",
						"hindi": "हाहाहा! कितना हास्यास्पद।"
					},
					"speaker": "random_boss"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 탐험대를 집어삼켰다.",
						"english": "A colossal shadow swallowed the expedition.",
						"japanese": "巨大な影が探検隊を飲み込んだ。",
						"chinese": "巨大的影子吞噬了探险队。",
						"french": "Une ombre colossale a englouti l'expédition.",
						"spanish": "Una sombra colosal devoró a la expedición.",
						"vietnamese": "Một bóng tối khổng lồ đã nuốt chửng đoàn thám hiểm.",
						"thai": "เงาขนาดยักษ์กลืนกินคณะสำรวจ",
						"hindi": "एक विशाल छाया ने अभियान दल को निगल लिया।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "하찮은 것들. 내 앞을 가로막을 순 없다.",
						"english": "Mere trifles. You cannot bar my way.",
						"japanese": "取るに足らぬ者ども。私の道を阻むことはできぬ。",
						"chinese": "卑微的东西。无法阻挡我的去路。",
						"french": "Êtres insignifiants. Vous ne pouvez pas barrer mon chemin.",
						"spanish": "Seres insignificantes. No podéis interponeros en mi camino.",
						"vietnamese": "Những thứ hèn mọn. Các ngươi không thể cản đường ta.",
						"thai": "เจ้าพวกไร้ค่า. ไม่อาจขวางทางข้าได้.",
						"hindi": "तुच्छ प्राणी। तुम मेरा रास्ता नहीं रोक सकते।"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "젠장... 아직... 끝나지 않았어!",
						"english": "Damn it... It's not... over yet!",
						"japanese": "くそっ...まだ...終わってない！",
						"chinese": "该死...还没...结束！",
						"french": "Bon sang... Ce n'est pas... encore fini !",
						"spanish": "¡Maldición... Todavía no... ha terminado!",
						"vietnamese": "Chết tiệt... Vẫn... chưa kết thúc!",
						"thai": "ให้ตายสิ...ยัง...ไม่จบ!",
						"hindi": "धिक्कार है... अभी... खत्म नहीं हुआ!"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "다음번엔... 네 의지마저 부러뜨려 주지.",
						"english": "Next time... I'll break even your will.",
						"japanese": "次には...お前の意志すらもへし折ってやろう。",
						"chinese": "下一次...连你的意志都将摧毁。",
						"french": "La prochaine fois... je briserai même ta volonté.",
						"spanish": "La próxima vez... te romperé incluso la voluntad.",
						"vietnamese": "Lần tới... ta sẽ bẻ gãy cả ý chí của ngươi.",
						"thai": "คราวหน้า... ข้าจะหักล้างเจตจำนงของเจ้าด้วย.",
						"hindi": "अगली बार... मैं तुम्हारी इच्छाशक्ति भी तोड़ दूँगा।"
					},
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"숲은 침묵했다. 그 침묵은 평화가 아니었다.",
			"더 깊은 곳으로 향할수록, 숨겨진 진실이 모습을 드러냈다.",
			"직감은 경고했다. 보이는 것보다 더 거대한 위협이 다가온다고."
		],
		"english": [
			"The forest was silent. That silence was not peace.",
			"The deeper we went, the more the hidden truth revealed itself.",
			"My gut warned me. A threat greater than what met the eye was approaching."
		],
		"japanese": [
			"森は沈黙していた。その沈黙は平和ではなかった。",
			"奥へ進むほど、隠された真実が姿を現した。",
			"直感が警告した。見た目よりも大きな脅威が迫っていると。"
		],
		"chinese": [
			"森林一片寂静。那寂静并非和平。",
			"越往深处，隐藏的真相越是显露。",
			"直觉警告着。比所见更巨大的威胁正在逼近。"
		],
		"french": [
			"La forêt était silencieuse. Ce silence n'était pas la paix.",
			"Plus nous allions en profondeur, plus la vérité cachée se révélait.",
			"Mon instinct m'a averti. Une menace plus grande que ce qu'il y paraissait approchait."
		],
		"spanish": [
			"El bosque estaba en silencio. Ese silencio no era paz.",
			"Cuanto más profundo íbamos, más se revelaba la verdad oculta.",
			"Mi instinto me advirtió. Una amenaza mayor de lo que parecía se acercaba."
		],
		"vietnamese": [
			"Rừng im lặng. Sự im lặng đó không phải là hòa bình.",
			"Càng đi sâu, sự thật bị che giấu càng lộ rõ.",
			"Trực giác cảnh báo. Một mối đe dọa lớn hơn nhiều so với những gì thấy được đang đến gần."
		],
		"thai": [
			"ป่าเงียบสงัด ความเงียบนั้นไม่ใช่สันติสุข",
			"ยิ่งลึกเข้าไป ความจริงที่ซ่อนอยู่ก็ยิ่งปรากฏ",
			"สัญชาตญาณเตือนว่าภัยคุกคามที่ยิ่งใหญ่กว่าที่เห็นกำลังคืบคลานเข้ามา"
		],
		"hindi": [
			"जंगल शांत था। वह शांति नहीं थी।",
			"जैसे-जैसे हम गहरे गए, छिपी हुई सच्चाई सामने आती गई।",
			"मेरी अंतरात्मा ने चेतावनी दी। जो दिख रहा था, उससे भी बड़ा खतरा करीब आ रहा था।"
		]
	}
} as const;
