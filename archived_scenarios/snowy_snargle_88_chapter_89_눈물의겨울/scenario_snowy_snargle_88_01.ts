export const scenario_snowy_snargle_88_01 = {
	"scenario_id": "snowy_snargle_88_01",
	"order": 1,
	"act": "intro",
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
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "차가운 바람이 살을 에는 듯 휘몰아쳤다. 실종된 동료의 흔적은 어디에도 없었다.",
						"english": "A biting cold wind raged. There was no trace of the missing comrade.",
						"japanese": "身を切るような冷たい風が吹き荒れた。行方不明の仲間たちの痕跡はどこにもなかった。",
						"chinese": "刺骨的寒风呼啸着。失踪的同志们不见踪影。",
						"french": "Un vent glacial faisait rage. Il n'y avait aucune trace du camarade disparu.",
						"spanish": "Un viento helado azotaba. No había rastro del camarada desaparecido.",
						"vietnamese": "Một cơn gió lạnh cắt da thịt hoành hành. Không có dấu vết nào của đồng đội mất tích.",
						"thai": "ลมหนาวจัดพัดโหมกระหน่ำ ไม่มีร่องรอยของสหายที่หายไป",
						"hindi": "एक चुभने वाली ठंडी हवा चल रही थी। लापता साथी का कोई निशान नहीं था।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "젠장, 너무 추워. 이러다 다 얼어 죽겠어.",
						"english": "Damn, it's too cold. We'll freeze to death at this rate.",
						"japanese": "くそ、寒すぎる。このままじゃ凍え死んじまう。",
						"chinese": "该死，太冷了。这样下去我们都会冻死的。",
						"french": "Mince, il fait trop froid. On va mourir de froid à ce rythme.",
						"spanish": "Maldita sea, hace demasiado frío. Nos congelaremos hasta morir a este paso.",
						"vietnamese": "Chết tiệt, lạnh quá. Kiểu này chúng ta sẽ chết cóng mất.",
						"thai": "ให้ตายสิ หนาวเกินไปแล้วนะ ถ้าเป็นแบบนี้ต่อไป พวกเราจะต้องแข็งตายแน่ๆ",
						"hindi": "धिक्कार है, बहुत ठंड है। इस दर पर हम जम कर मर जाएंगे।"
					}
				},
				{
					"speaker": "eira",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "저기… 이것 좀 봐.",
						"english": "Hey... look at this.",
						"japanese": "あれ…これを見て。",
						"chinese": "喂……看看这个。",
						"french": "Hé… regarde ça.",
						"spanish": "Oye... mira esto.",
						"vietnamese": "Này... nhìn cái này đi.",
						"thai": "เฮ้... ดูนี่สิ",
						"hindi": "अरे... इसे देखो।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…작은 조약돌? 빛나는데?",
						"english": "...A small pebble? It's glowing?",
						"japanese": "…小さな小石？光っている？",
						"chinese": "……一块小鹅卵石？它在发光？",
						"french": "...Un petit galet ? Il brille ?",
						"spanish": "...¿Una pequeña piedra? ¿Está brillando?",
						"vietnamese": "...Một viên sỏi nhỏ? Nó đang phát sáng?",
						"thai": "หินก้อนเล็กๆ เหรอ? มันกำลังเปล่งแสง?",
						"hindi": "...एक छोटा कंकड़? यह चमक रहा है?"
					}
				},
				{
					"content": {
						"korean": "얼음 속에서 미약하게 빛나고 있어. 이상해.",
						"english": "It's faintly glowing in the ice. Strange.",
						"japanese": "氷の中で微かに光っている。おかしいな。",
						"chinese": "它在冰中微弱地发光。真奇怪。",
						"french": "Il brille faiblement dans la glace. Étrange.",
						"spanish": "Está brillando débilmente en el hielo. Extraño.",
						"vietnamese": "Nó đang phát sáng mờ nhạt trong băng. Thật lạ.",
						"thai": "มันส่องแสงเรืองรองอ่อนๆ ในน้ำแข็ง แปลกจัง",
						"hindi": "यह बर्फ में हल्का चमक रहा है। अजीब है।"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "그때, 거대한 그림자가 빠르게 지나갔다.",
						"english": "At that moment, a massive shadow quickly passed by.",
						"japanese": "その時、巨大な影が素早く通り過ぎた。",
						"chinese": "就在那时，一个巨大的影子迅速闪过。",
						"french": "À ce moment-là, une ombre gigantesque passa rapidement.",
						"spanish": "En ese momento, una enorme sombra pasó rápidamente.",
						"vietnamese": "Ngay lúc đó, một cái bóng khổng lồ nhanh chóng lướt qua.",
						"thai": "ในขณะนั้น เงาขนาดมหึมาก็เคลื่อนผ่านไปอย่างรวดเร็ว",
						"hindi": "उसी पल, एक विशाल छाया तेजी से गुज़र गई।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "뭐야 방금? 보급품!",
						"english": "What was that? Supplies!",
						"japanese": "今のは何？物資だ！",
						"chinese": "刚才那是什么？补给品！",
						"french": "Qu'est-ce que c'était ? Des provisions !",
						"spanish": "¡¿Qué fue eso?! ¡Suministros!",
						"vietnamese": "Cái gì vừa rồi? Đồ tiếp tế!",
						"thai": "เมื่อกี้อะไรน่ะ? เสบียง!",
						"hindi": "वो क्या था अभी? सामान!"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "젠장! 저 눈덩이 괴물 또 나타났어!",
						"english": "Damn it! That snow monster is back again!",
						"japanese": "ちくしょう！あの雪玉モンスターがまた現れた！",
						"chinese": "该死！那个雪球怪物又出现了！",
						"french": "Mince ! Ce monstre de neige est encore apparu !",
						"spanish": "¡Maldición! ¡Ese monstruo de nieve apareció otra vez!",
						"vietnamese": "Chết tiệt! Con quái vật tuyết đó lại xuất hiện rồi!",
						"thai": "บ้าจริง! สัตว์ประหลาดลูกบอลหิมะนั่นปรากฏตัวอีกแล้ว!",
						"hindi": "धिक्कार है! वो स्नोबॉल राक्षस फिर आ गया!"
					}
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "eira",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "계속 쫓아오네… 이 황무지에 숨어 있는 것 같아.",
						"english": "It keeps chasing us... I think it's hiding in this wasteland.",
						"japanese": "ずっと追いかけてくる…この荒野に潜んでいるようだ。",
						"chinese": "它一直在追我们……好像藏在这片荒地里。",
						"french": "Il nous poursuit sans cesse... Il doit se cacher dans ce désert.",
						"spanish": "Nos sigue persiguiendo... Creo que se esconde en este páramo.",
						"vietnamese": "Nó cứ đuổi theo... Có vẻ như nó đang ẩn mình trong vùng đất hoang này.",
						"thai": "มันไล่ตามมาเรื่อยๆ... ดูเหมือนจะซ่อนอยู่ในดินแดนรกร้างนี้",
						"hindi": "यह हमारा पीछा करता रहता है... लगता है यह इस बंजर भूमि में छिपा हुआ है।"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "보급품 다 털리겠어! 뭐하는 놈이야 대체?",
						"english": "It's going to steal all our supplies! What the hell is it?",
						"japanese": "物資が全部奪われそうだ！一体何なんだ？",
						"chinese": "补给品都要被偷光了！它到底是什么鬼东西？",
						"french": "Il va nous voler toutes nos provisions ! C'est quoi, ce truc ?",
						"spanish": "¡Nos va a robar todos los suministros! ¡¿Qué demonios es?!",
						"vietnamese": "Đồ tiếp tế sẽ bị cướp hết! Rốt cuộc nó là thứ gì?",
						"thai": "เสบียงจะถูกขโมยหมดแล้ว! มันเป็นตัวอะไรกันแน่?",
						"hindi": "यह हमारा सारा सामान चुरा लेगा! आखिर यह क्या है?"
					}
				},
				{
					"content": {
						"korean": "…잠깐, 이거 좀 봐. 얼음 속에서 자라나는 이끼인데…",
						"english": "...Wait, look at this. It's moss growing in the ice...",
						"japanese": "…待て、これを見ろ。氷の中で育つ苔だが…",
						"chinese": "……等等，看看这个。是冰里长出来的苔藓……",
						"french": "...Attends, regarde ça. C'est de la mousse qui pousse dans la glace...",
						"spanish": "...Espera, mira esto. Es musgo creciendo en el hielo...",
						"vietnamese": "...Khoan, nhìn cái này đi. Đây là rêu mọc trong băng...",
						"thai": "...เดี๋ยวนะ ดูนี่สิ มันคือตะไคร่น้ำที่เติบโตอยู่ในน้ำแข็ง...",
						"hindi": "...रुको, यह देखो। यह बर्फ में उगने वाली काई है..."
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "미약하게… 따뜻한 기운이 느껴져.",
						"english": "I feel... a faint warmth.",
						"japanese": "微かに…温かい気がする。",
						"chinese": "微弱地……能感觉到一丝暖意。",
						"french": "Une faible... chaleur s'en dégage.",
						"spanish": "Siento... un débil calor.",
						"vietnamese": "Một cảm giác... ấm áp yếu ớt.",
						"thai": "รู้สึกถึง... ความอบอุ่นที่แผ่วเบา",
						"hindi": "मुझे... हल्की गर्मी महसूस हो रही है।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이런 얼음판에서 온기라고?",
						"english": "Warmth... on an ice sheet like this?",
						"japanese": "こんな氷の上で温もりだと？",
						"chinese": "在这种冰面上，会有暖意？",
						"french": "De la chaleur... sur une telle étendue de glace ?",
						"spanish": "¿Calor... en un campo de hielo como este?",
						"vietnamese": "Ấm áp... trên một tảng băng như thế này sao?",
						"thai": "ความอบอุ่น... บนแผ่นน้ำแข็งแบบนี้เนี่ยนะ?",
						"hindi": "इस तरह के बर्फीले मैदान में गर्मी?"
					}
				},
				{
					"content": {
						"korean": "뭔가… 불길해. 아주 오래된 저주 같아.",
						"english": "Something... ominous. It feels like a very ancient curse.",
						"japanese": "何か…不吉だ。とても古い呪いのようだ。",
						"chinese": "总觉得……不祥。像是非常古老的诅咒。",
						"french": "Quelque chose... de sinistre. On dirait une très ancienne malédiction.",
						"spanish": "Algo... siniestro. Parece una maldición muy antigua.",
						"vietnamese": "Có gì đó... đáng ngại. Cứ như một lời nguyền rất cổ xưa vậy.",
						"thai": "มีบางอย่าง... ไม่ดีเลย มันเหมือนคำสาปเก่าแก่มาก",
						"hindi": "कुछ... अशुभ है। यह बहुत पुराने श्राप जैसा लगता है।"
					},
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "eira",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						2
					]
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "이상해. 괴물이 훔쳐가는 게 꼭 먹을 것만은 아니었어.",
						"english": "Strange. The monster wasn't just stealing food.",
						"japanese": "おかしいな。モンスターが盗んでいくのは食べ物だけじゃなかった。",
						"chinese": "奇怪。怪物偷走的好像不只是吃的。",
						"french": "Étrange. Le monstre n'a pas seulement volé de la nourriture.",
						"spanish": "Extraño. El monstruo no solo robaba comida.",
						"vietnamese": "Lạ thật. Con quái vật không chỉ lấy trộm đồ ăn.",
						"thai": "แปลกนะ สัตว์ประหลาดไม่ได้ขโมยแค่อาหาร",
						"hindi": "अजीब है। राक्षस केवल खाना ही नहीं चुरा रहा था।"
					}
				},
				{
					"content": {
						"korean": "그럼 뭘 훔쳐갔다는 거야?",
						"english": "Then what else did it steal?",
						"japanese": "じゃあ、何を盗んでいったんだ？",
						"chinese": "那它到底偷走了什么？",
						"french": "Alors, qu'est-ce qu'il a volé d'autre ?",
						"spanish": "¿Entonces qué más robó?",
						"vietnamese": "Vậy thì nó đã trộm gì nữa?",
						"thai": "แล้วมันขโมยอะไรไปอีก?",
						"hindi": "तो उसने और क्या चुराया?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "반짝이는 것들… 장신구나 작은 도구들 위주로 사라졌어.",
						"english": "Shiny things... mostly trinkets and small tools, gone.",
						"japanese": "きらめくもの…装飾品や小さな道具が、主に消えた。",
						"chinese": "闪闪发光的东西……主要是小饰品和小型工具，都消失了。",
						"french": "Les choses brillantes... surtout des bibelots et de petits outils, ont disparu.",
						"spanish": "Cosas brillantes... principalmente baratijas y pequeñas herramientas, desaparecieron.",
						"vietnamese": "Những thứ lấp lánh… chủ yếu là trang sức và công cụ nhỏ, đã biến mất.",
						"thai": "ของที่ระยิบระยับ...ส่วนใหญ่เป็นเครื่องประดับและเครื่องมือเล็กๆ หายไปแล้ว",
						"hindi": "चमकदार चीज़ें... ज़्यादातर गहने और छोटे औज़ार, गायब हो गए हैं।"
					}
				},
				{
					"content": {
						"korean": "아니, 지금 그게 중요해? 당장 얼어 죽기 직전인데!",
						"english": "No, is that important now? We're about to freeze to death!",
						"japanese": "いや、それが今重要なの？今にも凍え死にそうなのに！",
						"chinese": "不，现在这重要吗？我们都快冻死了！",
						"french": "Non, est-ce important maintenant ? Nous sommes sur le point de mourir de froid !",
						"spanish": "¿No, es eso importante ahora? ¡Estamos a punto de morir congelados!",
						"vietnamese": "Không, giờ cái đó có quan trọng không? Chúng ta sắp chết cóng rồi!",
						"thai": "ไม่นะ ตอนนี้มันสำคัญเหรอ? เรากำลังจะแข็งตายอยู่แล้ว!",
						"hindi": "नहीं, क्या यह अब महत्वपूर्ण है? हम अभी जम कर मरने वाले हैं!"
					},
					"speaker": "character_3",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "실종된 동료도 못 찾고, 괴물한테 다 뺏기고… 희망이 없어.",
						"english": "Can't find missing comrades, lost everything to monsters... no hope.",
						"japanese": "行方不明の仲間も見つけられず、怪物に全て奪われて…希望がない。",
						"chinese": "找不到失踪的同伴，被怪物夺走了一切……没有希望了。",
						"french": "Impossible de retrouver les camarades disparus, tout perdu à cause des monstres... plus d'espoir.",
						"spanish": "No podemos encontrar a los compañeros desaparecidos, los monstruos nos quitaron todo... no hay esperanza.",
						"vietnamese": "Không tìm thấy đồng đội mất tích, bị quái vật cướp hết... không còn hy vọng.",
						"thai": "หาเพื่อนร่วมทางที่หายไปไม่เจอ โดนสัตว์ประหลาดเอาไปหมดแล้ว...ไม่มีความหวังเลย",
						"hindi": "लापता साथियों को नहीं ढूंढ पा रहे, राक्षसों ने सब कुछ छीन लिया... कोई उम्मीद नहीं।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "eira",
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "점점 더 추워져. 눈보라도 거세지고 있어.",
						"english": "It's getting colder. The blizzard is intensifying.",
						"japanese": "どんどん寒くなる。吹雪も激しくなっている。",
						"chinese": "越来越冷了。暴风雪也越来越猛烈了。",
						"french": "Il fait de plus en plus froid. La tempête de neige s'intensifie.",
						"spanish": "Cada vez hace más frío. La ventisca se intensifica.",
						"vietnamese": "Trời càng lúc càng lạnh. Bão tuyết cũng đang mạnh lên.",
						"thai": "หนาวขึ้นเรื่อยๆ พายุหิมะก็แรงขึ้น",
						"hindi": "और ठंडा होता जा रहा है। बर्फीला तूफ़ान भी तेज़ हो रहा है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "더는 못 가겠어… 돌아가자.",
						"english": "Can't go on... let's turn back.",
						"japanese": "もう行けない…引き返そう。",
						"chinese": "我走不动了……我们回去吧。",
						"french": "Je n'en peux plus... Rentrons.",
						"spanish": "No puedo más... volvamos.",
						"vietnamese": "Không thể đi tiếp nữa… quay lại thôi.",
						"thai": "ไปต่อไม่ไหวแล้ว...กลับกันเถอะ",
						"hindi": "अब और नहीं जा सकता... वापस चलते हैं।"
					}
				},
				{
					"content": {
						"korean": "돌아갈 곳도 없잖아! 동료를 찾아야 해!",
						"english": "Nowhere to go back to! We have to find our comrades!",
						"japanese": "帰る場所なんてない！仲間を見つけなきゃ！",
						"chinese": "我们无处可回！我们必须找到我们的同伴！",
						"french": "On n'a nulle part où retourner ! Nous devons retrouver nos camarades !",
						"spanish": "¡No tenemos a dónde volver! ¡Tenemos que encontrar a nuestros compañeros!",
						"vietnamese": "Không có nơi nào để quay về! Chúng ta phải tìm đồng đội!",
						"thai": "ไม่มีที่ให้กลับแล้ว! เราต้องหาเพื่อนร่วมทางให้เจอ!",
						"hindi": "वापस जाने की कोई जगह नहीं! हमें अपने साथियों को ढूंढना होगा!"
					},
					"emotion": "angry",
					"speaker": "character_4",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "이 황무지는 우리를 잡아두려 해… 발이 얼어붙는 것 같아.",
						"english": "This wasteland tries to hold us... my feet feel frozen.",
						"japanese": "この荒野は私たちを閉じ込めようとしている…足が凍りつくようだ。",
						"chinese": "这片荒地想困住我们……我的脚好像冻住了。",
						"french": "Ce désert tente de nous retenir... j'ai l'impression que mes pieds gèlent.",
						"spanish": "Este páramo intenta retenernos... siento que mis pies se congelan.",
						"vietnamese": "Vùng đất hoang này muốn giữ chân chúng ta… chân tôi như đóng băng rồi.",
						"thai": "ดินแดนรกร้างนี้กำลังพยายามกักขังเราไว้...เท้าของฉันรู้สึกเหมือนจะแข็ง",
						"hindi": "यह बंजर ज़मीन हमें रोकना चाहती है... मेरे पैर जमते हुए महसूस हो रहे हैं।"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "희미한 온기를 품은 이끼는 점점 더 깊은 곳으로 이어졌다.",
						"english": "Moss, holding a faint warmth, led deeper and deeper.",
						"japanese": "かすかな温もりを宿した苔は、ますます深い場所へと続いていた。",
						"chinese": "带着微弱暖意的苔藓，一直延伸到更深处。",
						"french": "La mousse, dégageant une faible chaleur, menait toujours plus profondément.",
						"spanish": "El musgo, que conservaba un débil calor, conducía cada vez más profundo.",
						"vietnamese": "Lớp rêu mang hơi ấm yếu ớt dẫn sâu vào trong.",
						"thai": "ตะไคร่น้ำที่มีความอบอุ่นจางๆ นำทางไปสู่ที่ลึกยิ่งขึ้น",
						"hindi": "एक हल्की सी गर्माहट लिए हुए काई, और गहरे तक जाती रही।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "눈보라가 잠시 잦아든 순간, 거대한 그림자가 길을 막았다.",
						"english": "The blizzard briefly calmed, and a massive shadow blocked the way.",
						"japanese": "吹雪が一時的に収まった瞬間、巨大な影が道を塞いだ。",
						"chinese": "暴风雪短暂平息的瞬间，一个巨大的影子挡住了去路。",
						"french": "Au moment où la tempête de neige s'est calmée, une ombre gigantesque a bloqué le chemin.",
						"spanish": "En el momento en que la ventisca amainó, una sombra gigantesca bloqueó el camino.",
						"vietnamese": "Khoảnh khắc bão tuyết tạm lắng, một cái bóng khổng lồ chặn đường.",
						"thai": "ช่วงเวลาที่พายุหิมะสงบลงชั่วครู่ เงาขนาดมหึมาก็ขวางทางไว้",
						"hindi": "जिस पल बर्फीला तूफ़ान थोड़ी देर के लिए शांत हुआ, एक विशाल छाया ने रास्ता रोक दिया।"
					}
				},
				{
					"content": {
						"korean": "내 것을… 내 기억을… 가져가지 마!",
						"english": "My things... my memories... don't take them!",
						"japanese": "私のもの…私の記憶を…奪わないで！",
						"chinese": "我的东西……我的记忆……别拿走！",
						"french": "Mes affaires... mes souvenirs... ne les prenez pas !",
						"spanish": "Mis cosas... mis recuerdos... ¡no te los lleves!",
						"vietnamese": "Thứ của tôi… ký ức của tôi… đừng lấy đi!",
						"thai": "ของของฉัน...ความทรงจำของฉัน...อย่าเอาไป!",
						"hindi": "मेरी चीजें... मेरी यादें... इन्हें मत लो!"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "네가 감히 우리 물건을 훔쳐? 끝장내주겠어!",
						"english": "You dare steal from us? I'll finish you!",
						"japanese": "よくも我々の物を盗んだな？ここで終わりにしてやる！",
						"chinese": "你竟敢偷我们的东西？我要把你解决掉！",
						"french": "Comment oses-tu nous voler ? Je vais t'achever !",
						"spanish": "¿Te atreves a robarnos? ¡Acabaré contigo!",
						"vietnamese": "Ngươi dám trộm đồ của bọn ta? Ta sẽ tiễn ngươi về trời!",
						"thai": "แกกล้าขโมยของพวกเราเหรอ? ฉันจะจัดการแกเอง!",
						"hindi": "तुम्हारी हिम्मत कैसे हुई हमारा सामान चुराने की? मैं तुम्हें खत्म कर दूंगा!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "아… 아냐… 난… 잃어버렸어…",
						"english": "Ah... no... I... lost it...",
						"japanese": "あ…違う…私は…失くした…",
						"chinese": "啊…不是…我…我失去了…",
						"french": "Ah... non... j'ai... perdu...",
						"spanish": "Ah... no... yo... lo perdí...",
						"vietnamese": "À... không... ta... đã mất rồi...",
						"thai": "อ่า... ไม่ใช่... ฉัน... ทำหายไปแล้ว...",
						"hindi": "आह... नहीं... मैं... खो गया..."
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "대체 뭘 잃었다는 거야? 우리만 잃었어!",
						"english": "What did you lose? We're the only ones who lost!",
						"japanese": "一体何を失くしたって言うんだ？失ったのは我々だけだ！",
						"chinese": "你到底失去了什么？只有我们失去了！",
						"french": "Qu'est-ce que tu as perdu ? Nous sommes les seuls à avoir perdu !",
						"spanish": "¿Qué perdiste? ¡Nosotros somos los únicos que perdimos!",
						"vietnamese": "Ngươi đã mất cái gì? Chỉ có bọn ta mới mất thôi!",
						"thai": "นายเสียอะไรไปกันแน่? พวกเราต่างหากที่เสีย!",
						"hindi": "तुमने क्या खोया? केवल हमने खोया है!"
					}
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"action": "enter",
					"speaker": "eira",
					"type": "direction"
				},
				{
					"content": {
						"korean": "…괴물 주변에서 이 이끼가 더 많이 자라고 있어.",
						"english": "...More of this moss is growing around the monster.",
						"japanese": "…この苔が、怪物の周りでさらに増殖している。",
						"chinese": "……怪物周围长出了更多的这种苔藓。",
						"french": "...Plus de cette mousse pousse autour du monstre.",
						"spanish": "...Más de este musgo está creciendo alrededor del monstruo.",
						"vietnamese": "...Loại rêu này đang mọc nhiều hơn xung quanh quái vật.",
						"thai": "ตะไคร่น้ำนี้กำลังเติบโตขึ้นเรื่อยๆ รอบตัวสัตว์ประหลาด",
						"hindi": "...इस राक्षस के चारों ओर यह काई और बढ़ रही है।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "불길한 온기… 사라진 동료들과 연관이 있을지도 몰라.",
						"english": "An ominous warmth... It might be connected to our vanished comrades.",
						"japanese": "不吉な温もり…消えた仲間たちと関係があるかもしれない。",
						"chinese": "不祥的暖意……可能与失踪的同伴有关。",
						"french": "Une chaleur inquiétante... Cela pourrait être lié à nos camarades disparus.",
						"spanish": "Un calor ominoso... Podría estar relacionado con nuestros compañeros desaparecidos.",
						"vietnamese": "Một hơi ấm đáng ngại... Có thể liên quan đến những đồng đội đã mất.",
						"thai": "ความอบอุ่นที่น่ากลัว... อาจเกี่ยวข้องกับเพื่อนร่วมทีมที่หายไป",
						"hindi": "एक अशुभ गर्मी... यह हमारे गायब हुए साथियों से जुड़ी हो सकती है।"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"content": {
						"korean": "괴물은 쓰러졌지만, 황무지의 저주는 깊어지고 있었다.",
						"english": "The monster fell, but the curse of the wasteland deepened.",
						"japanese": "怪物は倒れたが、荒野の呪いは深まっていた。",
						"chinese": "怪物倒下了，但荒地的诅咒却越来越深。",
						"french": "Le monstre est tombé, mais la malédiction de la terre désolée s'approfondissait.",
						"spanish": "El monstruo cayó, pero la maldición del páramo se profundizaba.",
						"vietnamese": "Quái vật đã ngã xuống, nhưng lời nguyền của vùng đất hoang đang ngày càng sâu sắc.",
						"thai": "สัตว์ประหลาดล้มลง แต่คำสาปของดินแดนรกร้างกลับลึกซึ้งยิ่งขึ้น",
						"hindi": "राक्षस गिर गया, लेकिन बंजर भूमि का अभिशाप गहरा होता जा रहा था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "진정한 위협은 이제부터 시작이었다.",
						"english": "The true threat was only just beginning.",
						"japanese": "真の脅威は、今から始まるのだった。",
						"chinese": "真正的威胁才刚刚开始。",
						"french": "La véritable menace ne faisait que commencer.",
						"spanish": "La verdadera amenaza apenas comenzaba.",
						"vietnamese": "Mối đe dọa thực sự chỉ mới bắt đầu.",
						"thai": "ภัยคุกคามที่แท้จริงเพิ่งจะเริ่มต้นขึ้น",
						"hindi": "असली खतरा तो अब शुरू हो रहा था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "크크… 너희도 결국… 모든 것을 잃을 것이다…",
						"english": "Heh heh... You too will eventually... lose everything...",
						"japanese": "クク…お前たちも結局…すべてを失うだろう…",
						"chinese": "呵呵……你们最终也会……失去一切……",
						"french": "Hé hé... Vous aussi, vous finirez par... tout perdre...",
						"spanish": "Je je... Vosotros también, al final... lo perderéis todo...",
						"vietnamese": "Khặc khặc... Cuối cùng các ngươi cũng sẽ... mất hết tất cả thôi...",
						"thai": "ฮ่าๆ... ในที่สุดพวกแกก็... จะเสียทุกอย่าง...",
						"hindi": "हे हे... तुम भी अंततः... सब कुछ खो दोगे..."
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "아직 안 끝났어! 동료를 찾고 말겠어!",
						"english": "It's not over yet! I'll find my comrades!",
						"japanese": "まだ終わってない！仲間を見つけてみせる！",
						"chinese": "还没结束！我一定会找到我的同伴！",
						"french": "Ce n'est pas encore fini ! Je retrouverai mes camarades !",
						"spanish": "¡Aún no ha terminado! ¡Encontraré a mis compañeros!",
						"vietnamese": "Chưa kết thúc đâu! Ta nhất định sẽ tìm thấy đồng đội!",
						"thai": "ยังไม่จบ! ฉันจะหาเพื่อนร่วมทีมของฉันเจอให้ได้!",
						"hindi": "अभी खत्म नहीं हुआ है! मैं अपने साथियों को ढूंढ लूंगा!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"매서운 눈보라가 휘몰아치는 얼음 황무지.",
			"탐험대원은 사라지고, 희망마저 얼어붙었다.",
			"그때, 정체 모를 눈덩이 괴물이 나타나 보급품을 훔쳐 달아난다.",
			"절망 속, 에이라는 이상한 이끼를 발견하고 불길한 예감을 느낀다."
		],
		"english": [
			"A frozen wasteland, ravaged by a fierce blizzard.",
			"The expedition team vanished, and hope itself froze over.",
			"Then, an unknown snow monster appeared, stole supplies, and fled.",
			"In despair, Aira discovered strange moss and felt an ominous premonition."
		],
		"japanese": [
			"猛烈な吹雪が吹き荒れる氷の荒野。",
			"探検隊は姿を消し、希望さえも凍りついた。",
			"その時、正体不明の雪だるまモンスターが現れ、物資を盗んで逃げ去った。",
			"絶望の中、アイラは奇妙な苔を発見し、不吉な予感を感じた。"
		],
		"chinese": [
			"暴风雪肆虐的冰冻荒原。",
			"探险队员消失了，连希望也冻结了。",
			"这时，一个不明身份的雪怪出现，偷走了补给品并逃跑了。",
			"在绝望中，艾拉发现了一种奇怪的苔藓，并感到一种不祥的预感。"
		],
		"french": [
			"Un désert de glace balayé par un féroce blizzard.",
			"L'équipe d'expédition a disparu, et l'espoir même s'est glacé.",
			"Alors, un monstre des neiges inconnu apparut, vola les provisions et s'enfuit.",
			"Dans le désespoir, Aira découvrit une étrange mousse et ressentit une prémonition inquiétante."
		],
		"spanish": [
			"Un páramo helado, azotado por una feroz tormenta de nieve.",
			"El equipo de expedición desapareció y la esperanza misma se congeló.",
			"Entonces, un monstruo de nieve desconocido apareció, robó los suministros y huyó.",
			"En la desesperación, Aira descubrió un musgo extraño y sintió una premonición ominosa."
		],
		"vietnamese": [
			"Một vùng đất băng giá hoang tàn, bị bão tuyết dữ dội tàn phá.",
			"Đội thám hiểm biến mất, và hy vọng cũng đóng băng.",
			"Sau đó, một quái vật tuyết không rõ danh tính xuất hiện, đánh cắp vật tư và bỏ trốn.",
			"Trong tuyệt vọng, Aira phát hiện ra một loại rêu kỳ lạ và cảm thấy một điềm báo đáng ngại."
		],
		"thai": [
			"ดินแดนน้ำแข็งรกร้างที่ถูกพายุหิมะอันดุเดือดพัดกระหน่ำ",
			"ทีมสำรวจหายไป และความหวังก็แข็งตัว",
			"จากนั้น สัตว์ประหลาดหิมะที่ไม่รู้จักก็ปรากฏตัวขึ้น ขโมยเสบียงแล้วหนีไป",
			"ด้วยความสิ้นหวัง ไอราค้นพบมอสแปลกๆ และรู้สึกถึงลางร้าย"
		],
		"hindi": [
			"बर्फीला बंजर भूमि, एक भीषण बर्फीले तूफान से तबाह।",
			"अभियान दल गायब हो गया, और उम्मीदें भी जम गईं।",
			"तभी, एक अज्ञात बर्फीला राक्षस प्रकट हुआ, आपूर्ति चुराई और भाग गया।",
			"निराशा में, ऐरा ने अजीब काई खोजी और एक अशुभ पूर्वाभास महसूस किया।"
		]
	}
} as const;
