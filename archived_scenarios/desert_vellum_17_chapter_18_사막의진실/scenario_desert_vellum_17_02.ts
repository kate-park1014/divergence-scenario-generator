export const scenario_desert_vellum_17_02 = {
	"scenario_id": "desert_vellum_17_02",
	"order": 2,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"kemet": {
			"id": "mon_2f8a1701-571b-40b5-92d9-69aa973cef18",
			"name": {
				"korean": "케메트",
				"english": "Kemet",
				"japanese": "ケメト",
				"chinese": "凯麦特",
				"french": "Kemet",
				"spanish": "Kemet",
				"vietnamese": "Kemet",
				"thai": "เคเมต",
				"hindi": "केमेट"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/fd9e93e0-2874-4647-0076-839718949500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8c3f2690-e8a9-44f5-4527-d8f8d4ea2800/public"
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
					"content": {
						"korean": "끝없이 펼쳐진 폐허, 고대의 지식이 잠든 곳이었다.",
						"english": "Endless ruins, where ancient knowledge slumbered.",
						"japanese": "果てしなく広がる廃墟、古代の知識が眠る場所だった。",
						"chinese": "无尽的废墟，古老的知识沉睡之地。",
						"french": "Des ruines infinies, où le savoir ancestral sommeillait.",
						"spanish": "Ruinas interminables, donde el conocimiento ancestral dormía.",
						"vietnamese": "Những tàn tích vô tận, nơi tri thức cổ xưa yên nghỉ.",
						"thai": "ซากปรักหักพังที่ทอดยาวไม่มีที่สิ้นสุด ที่ซึ่งความรู้โบราณหลับใหล",
						"hindi": "अंतहीन खंडहर, जहां प्राचीन ज्ञान सोता था।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "여기가… 벨룸의 흔적을 찾을 수 있는 곳인가?",
						"english": "Is this… where Bellum's traces can be found?",
						"japanese": "ここが…ベルムの痕跡を見つけられる場所なのか？",
						"chinese": "这里就是……能找到贝鲁姆踪迹的地方吗？",
						"french": "C'est ici… qu'on peut trouver les traces de Bellum ?",
						"spanish": "¿Es aquí… donde se pueden encontrar las huellas de Bellum?",
						"vietnamese": "Đây có phải… là nơi có thể tìm thấy dấu vết của Bellum?",
						"thai": "ที่นี่… คือที่ที่เราจะพบร่องรอยของเบลลัมได้ใช่ไหม?",
						"hindi": "क्या यहीं… बेलम के निशान मिल सकते हैं?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "kemet"
				},
				{
					"type": "speech",
					"speaker": "kemet",
					"content": {
						"korean": "찾는 자는… 벨룸이겠군. 나, 케메트가 알려주지.",
						"english": "The one seeking… must be Bellum. I, Khemet, shall tell you.",
						"japanese": "探しているのは…ベルムだろう。私、ケメトが教えてやろう。",
						"chinese": "寻找的……一定是贝鲁姆。我，凯梅特，会告诉你的。",
						"french": "Celui qui cherche… doit être Bellum. Moi, Khemet, je te le dirai.",
						"spanish": "Quien busca… debe ser Bellum. Yo, Khemet, te lo diré.",
						"vietnamese": "Người đang tìm kiếm… chắc hẳn là Bellum. Ta, Khemet, sẽ nói cho ngươi biết.",
						"thai": "ผู้ที่ค้นหา… ต้องเป็นเบลลัมแน่ ข้า เคมเมท จะบอกเจ้าเอง",
						"hindi": "ढूंढने वाला… बेलम ही होगा। मैं, खेमेट, तुम्हें बताऊंगा।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "뭘?",
						"english": "What?",
						"japanese": "何を？",
						"chinese": "什么？",
						"french": "Quoi ?",
						"spanish": "¿Qué?",
						"vietnamese": "Gì cơ?",
						"thai": "อะไร?",
						"hindi": "क्या?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "벨룸과 거래한 자들은… 기억을 잃었다는군.",
						"english": "Those who dealt with Bellum… lost their memories, they say.",
						"japanese": "ベルムと取引した者たちは…記憶を失ったという。",
						"chinese": "据说，和贝鲁姆交易的人……都失去了记忆。",
						"french": "Ceux qui ont traité avec Bellum… ont perdu la mémoire, dit-on.",
						"spanish": "Aquellos que trataron con Bellum… perdieron sus recuerdos, dicen.",
						"vietnamese": "Những kẻ giao dịch với Bellum… đã mất đi ký ức, người ta nói vậy.",
						"thai": "ผู้ที่ทำสัญญากับเบลลัม… สูญเสียความทรงจำไปว่ากันว่าอย่างนั้น",
						"hindi": "बेलम से सौदा करने वाले… अपनी यादें खो चुके हैं, ऐसा कहते हैं।"
					},
					"type": "speech",
					"speaker": "kemet"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "기억을?",
						"english": "Memories?",
						"japanese": "記憶を？",
						"chinese": "记忆？",
						"french": "La mémoire ?",
						"spanish": "¿Recuerdos?",
						"vietnamese": "Ký ức ư?",
						"thai": "ความทรงจำ?",
						"hindi": "यादें?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "kemet",
					"content": {
						"korean": "그래. 중요한 조각들이… 사라진 것처럼.",
						"english": "Yes. As if important pieces… have disappeared.",
						"japanese": "ええ。重要なピースが…消えたかのように。",
						"chinese": "是的。仿佛重要的碎片…消失了一样。",
						"french": "Oui. Comme si des pièces importantes… avaient disparu.",
						"spanish": "Sí. Como si piezas importantes… hubieran desaparecido.",
						"vietnamese": "Đúng vậy. Như thể những mảnh ghép quan trọng… đã biến mất.",
						"thai": "ใช่. เหมือนกับชิ้นส่วนสำคัญ… ได้หายไป.",
						"hindi": "हाँ। जैसे महत्वपूर्ण टुकड़े… गायब हो गए हों।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "kemet",
					"type": "direction"
				},
				{
					"content": {
						"korean": "벨룸은 유물만이 아니라… 지식 그 자체를 탐해.",
						"english": "Vellum craves not just artifacts… but knowledge itself.",
						"japanese": "ベルムは遺物だけでなく…知識そのものを貪る。",
						"chinese": "维鲁姆不仅贪图文物…更觊觎知识本身。",
						"french": "Vellum ne convoite pas seulement les artefacts… mais le savoir lui-même.",
						"spanish": "Vellum no solo codicia los artefactos… sino el conocimiento mismo.",
						"vietnamese": "Vellum không chỉ thèm khát cổ vật… mà còn là tri thức.",
						"thai": "เวลลัมไม่ได้ปรารถนาแค่วัตถุโบราณ… แต่เป็นความรู้ทั้งหมด.",
						"hindi": "वेलम सिर्फ़ कलाकृतियों की नहीं… बल्कि ज्ञान की भी लालसा रखता है।"
					},
					"speaker": "kemet",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "기억을 빼앗는다는 게… 무슨 관련이 있지?",
						"english": "What does stealing memories… have to do with it?",
						"japanese": "記憶を奪うことと…何の関係がある？",
						"chinese": "剥夺记忆…这有什么关联？",
						"french": "Quel rapport avec… le vol de souvenirs ?",
						"spanish": "¿Qué tiene que ver… con robar recuerdos?",
						"vietnamese": "Việc tước đoạt ký ức… có liên quan gì chứ?",
						"thai": "การขโมยความทรงจำ… เกี่ยวข้องอะไรกัน?",
						"hindi": "यादें छीनने का… इससे क्या संबंध है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "사막의 고서에 이런 전설이 있어.",
						"english": "There's a legend in the ancient desert texts.",
						"japanese": "砂漠の古書にこんな伝説がある。",
						"chinese": "沙漠古籍中记载着这样一个传说。",
						"french": "Une légende est inscrite dans les anciens textes du désert.",
						"spanish": "Hay una leyenda en los antiguos textos del desierto.",
						"vietnamese": "Trong cổ thư sa mạc có một truyền thuyết thế này.",
						"thai": "มีตำนานหนึ่งกล่าวไว้ในคัมภีร์ทะเลทรายโบราณ.",
						"hindi": "रेगिस्तान के प्राचीन ग्रंथों में एक ऐसी किंवदंती है।"
					},
					"type": "speech",
					"speaker": "kemet",
					"emotion": "base"
				},
				{
					"speaker": "kemet",
					"type": "speech",
					"content": {
						"korean": "'생명을 잃은 기록관이 영혼을 흡수하여 불멸의 존재가 된다'는 기이한 이야기.",
						"english": "A bizarre tale: 'The Lifeless Archivist absorbs souls to become an immortal being.'",
						"japanese": "「命を失った記録官が魂を吸収し、不滅の存在となる」という奇妙な話。",
						"chinese": "一个奇怪的故事：‘失去生命的记录官吸收灵魂，成为不朽的存在。’",
						"french": "Une étrange histoire : 'L'Archiviste sans vie absorbe les âmes pour devenir un être immortel.'",
						"spanish": "Una extraña historia: 'El Archivista sin vida absorbe almas para convertirse en un ser inmortal'.",
						"vietnamese": "Một câu chuyện kỳ lạ: 'Kẻ lưu trữ đã mất sự sống hấp thụ linh hồn để trở thành một thực thể bất tử.'",
						"thai": "เรื่องเล่าประหลาดที่ว่า 'บรรณารักษ์ไร้ชีวิตดูดกลืนวิญญาณเพื่อเป็นอมตะ'.",
						"hindi": "एक विचित्र कहानी: 'निर्जीव अभिलेखागार आत्माओं को सोखकर अमर प्राणी बन जाता है।'"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "영혼을… 흡수한다고?",
						"english": "Absorb… souls?",
						"japanese": "魂を…吸収するって？",
						"chinese": "吸收…灵魂？",
						"french": "Absorber… des âmes ?",
						"spanish": "¿Absorber… almas?",
						"vietnamese": "Hấp thụ… linh hồn ư?",
						"thai": "ดูดกลืน… วิญญาณ?",
						"hindi": "आत्माओं को… सोखना?"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "kemet"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "'생명을 잃은 기록관'은 육신 없이 지식만으로 존재하는 자를 뜻해.",
						"english": "'The Lifeless Archivist' refers to one who exists only as knowledge, without a body.",
						"japanese": "「命を失った記録官」とは、肉体を持たず知識のみで存在する者を指す。",
						"chinese": "‘失去生命的记录官’指的是没有肉身，仅凭知识存在的个体。",
						"french": "'L'Archiviste sans vie' désigne celui qui existe uniquement par le savoir, sans corps.",
						"spanish": "'El Archivista sin vida' se refiere a aquel que existe solo como conocimiento, sin un cuerpo.",
						"vietnamese": "'Kẻ lưu trữ đã mất sự sống' nghĩa là kẻ chỉ tồn tại bằng tri thức mà không có thể xác.",
						"thai": "'บรรณารักษ์ไร้ชีวิต' หมายถึงผู้ที่ดำรงอยู่ด้วยความรู้เท่านั้น โดยปราศจากร่างกาย.",
						"hindi": "'निर्जीव अभिलेखागार' उस व्यक्ति को संदर्भित करता है जो शरीर के बिना केवल ज्ञान के रूप में मौजूद है।"
					},
					"speaker": "kemet",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그게 벨룸의 정체인가?",
						"english": "Is that Vellum's true identity?",
						"japanese": "それがベルムの正体なのか？",
						"chinese": "那就是维鲁姆的真面目吗？",
						"french": "Est-ce la véritable identité de Vellum ?",
						"spanish": "¿Es esa la verdadera identidad de Vellum?",
						"vietnamese": "Đó có phải là thân phận thật của Vellum không?",
						"thai": "นั่นคือตัวตนที่แท้จริงของเวลลัมงั้นหรือ?",
						"hindi": "क्या वह वेलम की असली पहचान है?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "장담할 수 없어. 하지만… 그와 얽히면 안전하지 않다.",
						"english": "I can't be sure. But… getting involved with him isn't safe.",
						"japanese": "断言はできない。だが…彼と関われば安全ではない。",
						"chinese": "我无法保证。但…与他牵扯不清是不安全的。",
						"french": "Je ne peux pas l'affirmer. Mais… s'impliquer avec lui n'est pas sans danger.",
						"spanish": "No puedo asegurarlo. Pero… involucrarse con él no es seguro.",
						"vietnamese": "Tôi không thể chắc chắn. Nhưng… vướng vào hắn thì không an toàn đâu.",
						"thai": "ฉันไม่แน่ใจ. แต่… การเข้าไปพัวพันกับเขาไม่ปลอดภัย.",
						"hindi": "मैं निश्चित नहीं कह सकता। लेकिन… उसके साथ उलझना सुरक्षित नहीं है।"
					},
					"type": "speech",
					"speaker": "kemet",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "그는 단순히 유물을 모으는 게 아닐 수도 있어.",
						"english": "He might not just be collecting artifacts.",
						"japanese": "彼は単に遺物を集めているだけではないのかもしれない。",
						"chinese": "他可能不只是在收集文物。",
						"french": "Il ne fait peut-être pas que collectionner des artefacts.",
						"spanish": "Puede que no solo esté coleccionando artefactos.",
						"vietnamese": "Hắn ta có lẽ không chỉ đơn thuần là thu thập cổ vật.",
						"thai": "เขาอาจจะไม่ได้แค่รวบรวมวัตถุโบราณก็ได้.",
						"hindi": "हो सकता है कि वह सिर्फ़ कलाकृतियाँ इकट्ठा न कर रहा हो।"
					},
					"speaker": "kemet",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "그럼… 뭘 원하는 거지?",
						"english": "So... what do you want?",
						"japanese": "それで…何を望む？",
						"chinese": "那么……你想要什么？",
						"french": "Alors... que veux-tu ?",
						"spanish": "Entonces... ¿qué quieres?",
						"vietnamese": "Vậy... ngươi muốn gì?",
						"thai": "แล้ว... เจ้าต้องการอะไร?",
						"hindi": "तो... तुम्हें क्या चाहिए?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kemet",
					"content": {
						"korean": "…진정한 불멸.",
						"english": "...True immortality.",
						"japanese": "…真の不滅。",
						"chinese": "……真正的永生。",
						"french": "...La véritable immortalité.",
						"spanish": "...La verdadera inmortalidad.",
						"vietnamese": "...Sự bất tử thật sự.",
						"thai": "...ความเป็นอมตะที่แท้จริง",
						"hindi": "...सच्ची अमरता।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "폐허는 더 깊고 어두워졌다. 으스스한 침묵만이 감돈다.",
						"english": "The ruins grew deeper and darker. Only an eerie silence lingered.",
						"japanese": "廃墟はさらに深く暗くなった。不気味な沈黙だけが漂う。",
						"chinese": "废墟愈发深邃黑暗。只有令人毛骨悚然的寂静弥漫着。",
						"french": "Les ruines devinrent plus profondes et plus sombres. Seul un silence étrange régnait.",
						"spanish": "Las ruinas se hicieron más profundas y oscuras. Solo un silencio espeluznante perduraba.",
						"vietnamese": "Phế tích trở nên sâu hơn và tối hơn. Chỉ còn lại sự im lặng rợn người.",
						"thai": "ซากปรักหักพังลึกและมืดมิดลงไปอีก มีเพียงความเงียบงันที่น่าขนลุก",
						"hindi": "खंडहर और गहरे और काले होते गए। केवल एक भयावह सन्नाटा छाया रहा।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "kemet",
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "kemet",
					"content": {
						"korean": "더는 안 돼! 이곳은 위험해! 돌아가!",
						"english": "No more! This place is dangerous! Go back!",
						"japanese": "もうだめだ！ここは危険だ！戻れ！",
						"chinese": "不行了！这里很危险！回去！",
						"french": "Plus loin ! Cet endroit est dangereux ! Retourne-t'en !",
						"spanish": "¡No más! ¡Este lugar es peligroso! ¡Regresa!",
						"vietnamese": "Không được nữa! Nơi này nguy hiểm! Quay lại đi!",
						"thai": "ไม่ไหวแล้ว! ที่นี่อันตราย! กลับไปซะ!",
						"hindi": "और नहीं! यह जगह खतरनाक है! वापस जाओ!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "포기할 수 없어! 벨룸의 진실을 알아야 해!",
						"english": "I can't give up! I must know the truth of Bellum!",
						"japanese": "諦められない！ベルムの真実を知らねば！",
						"chinese": "我不能放弃！我必须知道贝鲁姆的真相！",
						"french": "Je ne peux pas abandonner ! Je dois connaître la vérité sur Bellum !",
						"spanish": "¡No puedo rendirme! ¡Debo saber la verdad de Bellum!",
						"vietnamese": "Tôi không thể từ bỏ! Tôi phải biết sự thật về Bellum!",
						"thai": "ฉันยอมแพ้ไม่ได้! ฉันต้องรู้ความจริงของเบลลัม!",
						"hindi": "मैं हार नहीं मान सकता! मुझे बेलम का सच जानना होगा!"
					},
					"emotion": "angry"
				},
				{
					"duration_ms": 400,
					"speaker": "kemet",
					"type": "direction",
					"direction": "down",
					"action": "exit"
				},
				{
					"content": {
						"korean": "케메트는 경고를 뒤로 하고 아래로 사라졌다.",
						"english": "Khemet disregarded the warning and disappeared below.",
						"japanese": "ケメットは警告を無視し、下へ消えた。",
						"chinese": "凯梅特无视警告，消失在下方。",
						"french": "Khemet ignora l'avertissement et disparut plus bas.",
						"spanish": "Khemet ignoró la advertencia y desapareció abajo.",
						"vietnamese": "Khemet bỏ qua lời cảnh báo và biến mất xuống dưới.",
						"thai": "เคเมตไม่สนใจคำเตือนและหายตัวไปเบื้องล่าง",
						"hindi": "खेमेट ने चेतावनी को नजरअंदाज किया और नीचे गायब हो गया।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"action": "enter",
					"speaker": "random_boss",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						4
					]
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "감히… {random_boss}의 영역을 침범하다니.",
						"english": "How dare you... invade the domain of {random_boss}.",
						"japanese": "よくも…{random_boss}の領域を侵すとは。",
						"chinese": "竟敢……侵犯{random_boss}的领域。",
						"french": "Comment oses-tu... envahir le domaine de {random_boss}.",
						"spanish": "Cómo osas... invadir el dominio de {random_boss}.",
						"vietnamese": "Ngươi dám... xâm phạm lãnh địa của {random_boss}.",
						"thai": "บังอาจ... บุกรุกอาณาเขตของ {random_boss} ได้ยังไง",
						"hindi": "तुम्हारी हिम्मत कैसे हुई... {random_boss} के क्षेत्र पर आक्रमण करने की।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "네가 막을 수 없을 거다!",
						"english": "You won't be able to stop me!",
						"japanese": "お前には止められない！",
						"chinese": "你阻止不了我！",
						"french": "Tu ne pourras pas m'arrêter !",
						"spanish": "¡No podrás detenerme!",
						"vietnamese": "Ngươi sẽ không ngăn cản được đâu!",
						"thai": "เจ้าจะหยุดข้าไม่ได้!",
						"hindi": "तुम मुझे रोक नहीं पाओगे!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "후회하게 될 거다. 어리석은 인간들!",
						"english": "You will regret this. Foolish humans!",
						"japanese": "後悔することになるぞ。愚かな人間どもめ！",
						"chinese": "你们会后悔的。愚蠢的人类！",
						"french": "Vous le regretterez. Humains stupides !",
						"spanish": "Lo lamentaréis. ¡Humanos estúpidos!",
						"vietnamese": "Ngươi sẽ phải hối hận. Loài người ngu ngốc!",
						"thai": "เจ้าจะต้องเสียใจ เจ้ามนุษย์โง่เขลา!",
						"hindi": "तुम्हें पछताना पड़ेगा। मूर्ख इंसानो!"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 것들! {random_boss}의 힘은… 너희가 감히 넘볼 수 없다!",
						"english": "Fools! The power of {random_boss}... is beyond your reach!",
						"japanese": "愚か者どもめ！{random_boss}の力は…貴様らが及びもつかぬ！",
						"chinese": "蠢货！{random_boss}的力量…岂是你们能觊觎的！",
						"french": "Imbéciles ! La puissance de {random_boss}... est hors de votre portée !",
						"spanish": "¡Necios! ¡El poder de {random_boss}... está más allá de vuestro alcance!",
						"vietnamese": "Lũ ngu ngốc! Sức mạnh của {random_boss}... không phải thứ các ngươi có thể chạm tới!",
						"thai": "พวกโง่! พลังของ {random_boss}…ไม่ใช่สิ่งที่พวกเจ้าจะอาจเอื้อมได้!",
						"hindi": "मूर्खो! {random_boss} की शक्ति… तुम्हारी पहुँच से बाहर है!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 아직은… 포기할 수 없어…!",
						"english": "Damn it... I... can't give up yet...!",
						"japanese": "ちくしょう… まだ… 諦められない…！",
						"chinese": "该死… 我… 还不能放弃…！",
						"french": "Maudits... Je... ne peux pas encore abandonner... !",
						"spanish": "¡Maldita sea... Todavía... no puedo rendirme...!",
						"vietnamese": "Chết tiệt... Ta... chưa thể bỏ cuộc...!",
						"thai": "ให้ตายสิ… ยัง… ยังยอมแพ้ไม่ได้…!",
						"hindi": "धिक्कार है… मैं… अभी हार नहीं मान सकता…!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "탐험대는 거대한 그림자 앞에 쓰러졌다. 왜곡된 진실은 아직 그들을 기다린다.",
						"english": "The expedition fell before the colossal shadow. The distorted truth still awaits them.",
						"japanese": "探検隊は巨大な影の前に倒れた。歪んだ真実がまだ彼らを待ち受ける。",
						"chinese": "探险队倒在了巨大的阴影面前。扭曲的真相仍在等待着他们。",
						"french": "L'expédition est tombée devant l'ombre colossale. La vérité déformée les attend toujours.",
						"spanish": "La expedición cayó ante la colosal sombra. La verdad distorsionada aún los espera.",
						"vietnamese": "Đoàn thám hiểm đã gục ngã trước bóng tối khổng lồ. Sự thật méo mó vẫn đang chờ đợi họ.",
						"thai": "คณะสำรวจล้มลงต่อหน้าเงาขนาดมหึมา ความจริงที่บิดเบือนยังคงรอพวกเขาอยู่",
						"hindi": "अभियान विशाल छाया के सामने गिर गया। विकृत सच्चाई अभी भी उनका इंतजार कर रही है।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "폐허의 가장 깊은 곳. 거대한 그림자가 탐험대를 가로막았다.",
						"english": "The deepest part of the ruins. A giant shadow blocked the expedition.",
						"japanese": "廃墟の最深部。巨大な影が探検隊の行く手を阻んだ。",
						"chinese": "废墟最深处。一道巨大的阴影挡住了探险队。",
						"french": "La partie la plus profonde des ruines. Une ombre gigantesque barra la route de l'expédition.",
						"spanish": "La parte más profunda de las ruinas. Una sombra gigante bloqueó la expedición.",
						"vietnamese": "Sâu nhất trong phế tích. Một cái bóng khổng lồ chặn đường đoàn thám hiểm.",
						"thai": "ส่วนที่ลึกที่สุดของซากปรักหักพัง เงาขนาดใหญ่ขวางทางคณะสำรวจ",
						"hindi": "खंडहर का सबसे गहरा हिस्सा। एक विशाल परछाई ने अभियान दल का रास्ता रोक दिया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "네놈들의 어리석은 호기심은… 여기서 끝이다.",
						"english": "Your foolish curiosity... ends here.",
						"japanese": "貴様らの愚かな好奇心は…ここで終わりだ。",
						"chinese": "你们愚蠢的好奇心…到此为止了。",
						"french": "Votre curiosité insensée... s'achève ici.",
						"spanish": "Vuestra estúpida curiosidad... termina aquí.",
						"vietnamese": "Sự tò mò ngu xuẩn của các ngươi... sẽ kết thúc tại đây.",
						"thai": "ความอยากรู้อยากเห็นอันโง่เขลาของพวกเจ้า…จะจบลงที่นี่",
						"hindi": "तुम्हारी मूर्खतापूर्ण जिज्ञासा… यहीं खत्म होती है।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "비켜! 벨룸을 찾아야 해!",
						"english": "Get out of my way! I must find Bellum!",
						"japanese": "退け！ベルムを見つけねば！",
						"chinese": "让开！我必须找到贝鲁姆！",
						"french": "Écarte-toi ! Je dois trouver Bellum !",
						"spanish": "¡Fuera de mi camino! ¡Debo encontrar a Bellum!",
						"vietnamese": "Tránh ra! Ta phải tìm Bellum!",
						"thai": "หลีกไป! ข้าต้องหาเบลลัม!",
						"hindi": "हटो! मुझे बेलम को ढूंढना है!"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "네놈들이 아는 진실은… 왜곡된 환상일 뿐!",
						"english": "The truth you know... is merely a distorted illusion!",
						"japanese": "貴様らが知る真実は…歪んだ幻想に過ぎない！",
						"chinese": "你们所知的真相…不过是扭曲的幻象！",
						"french": "La vérité que vous connaissez... n'est qu'une illusion déformée !",
						"spanish": "¡La verdad que conocéis... es solo una ilusión distorsionada!",
						"vietnamese": "Sự thật mà các ngươi biết... chỉ là một ảo ảnh méo mó!",
						"thai": "ความจริงที่พวกเจ้าSรู้…เป็นเพียงภาพลวงตาที่บิดเบือน!",
						"hindi": "जो सच तुम जानते हो… वो सिर्फ एक विकृत भ्रम है!"
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크… 크흐… 감히… {random_boss}를… 쓰러뜨리다니…",
						"english": "Urgh... Hmph... How dare you... defeat {random_boss}...",
						"japanese": "く… くふ… よくも… {random_boss}を… 倒したな…",
						"chinese": "呃… 哼… 竟敢… 击败{random_boss}…",
						"french": "Grr... Hmph... Comment osez-vous... vaincre {random_boss}...",
						"spanish": "¿Cómo osas... derrotar a {random_boss}?",
						"vietnamese": "Ưm... khụ... Dám... đánh bại {random_boss}...",
						"thai": "อึก… อึก… กล้าดียังไง… โค่น {random_boss} ลงได้…",
						"hindi": "ऊह… हम्म… तुम्हारी हिम्मत कैसे हुई… {random_boss} को हराने की…"
					},
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네놈의 시대는 끝났어! 벨룸은 어디 있지?",
						"english": "Your era is over! Where is Bellum?",
						"japanese": "貴様の時代は終わった！ベルムはどこだ？",
						"chinese": "你的时代结束了！贝鲁姆在哪里？",
						"french": "Ton ère est révolue ! Où est Bellum ?",
						"spanish": "¡Tu era ha terminado! ¿Dónde está Bellum?",
						"vietnamese": "Thời đại của ngươi đã kết thúc! Bellum ở đâu?",
						"thai": "ยุคของเจ้าสิ้นสุดลงแล้ว! เบลลัมอยู่ที่ไหน?",
						"hindi": "तुम्हारा ज़माना खत्म हो गया! बेलम कहाँ है?"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자는 스러졌다. 그러나 진실은 여전히 어둠 속에 잠겨 있었다. 탐험대는 더 깊은 곳, 벨룸의 진짜 의도를 향해 나아간다.",
						"english": "The colossal shadow has fallen. Yet, the truth remained shrouded in darkness. The expedition presses onward, towards deeper depths, towards Bellum's true intentions.",
						"japanese": "巨大な影は消え去った。しかし、真実は未だ闇の中に沈んでいた。探検隊は、ベルムの真の意図へ向かい、さらに奥深くへと進む。",
						"chinese": "巨大的阴影消散了。然而，真相仍被黑暗笼罩。探险队继续前进，向着更深处，向着贝鲁姆的真正意图。",
						"french": "L'ombre colossale est tombée. Pourtant, la vérité demeurait enveloppée d'obscurité. L'expédition poursuit sa route, vers des profondeurs plus grandes, vers les véritables intentions de Bellum.",
						"spanish": "La colosal sombra ha caído. Sin embargo, la verdad seguía envuelta en la oscuridad. La expedición avanza, hacia las profundidades, hacia las verdaderas intenciones de Bellum.",
						"vietnamese": "Bóng tối khổng lồ đã sụp đổ. Tuy nhiên, sự thật vẫn chìm trong bóng tối. Đoàn thám hiểm tiếp tục tiến sâu hơn, hướng tới ý định thực sự của Bellum.",
						"thai": "เงาขนาดมหึมาได้พังทลายลงแล้ว แต่ความจริงยังคงถูกปกคลุมด้วยความมืด คณะสำรวจยังคงมุ่งหน้าต่อไป ยังส่วนที่ลึกกว่า และเจตนาที่แท้จริงของเบลลัม",
						"hindi": "वि विशाल छाया गिर गई। फिर भी, सच्चाई अंधेरे में डूबी रही। अभियान आगे बढ़ता है, गहरी जगहों की ओर, बेलम के असली इरादों की ओर।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"사막 깊은 곳, 폐허는 고대의 비밀을 품고 있었다.",
			"벨룸의 이름 뒤에 숨겨진 잔혹한 진실.",
			"잃어버린 기억, 흡수된 영혼.",
			"그 그림자가 탐험대를 삼키려 한다."
		],
		"english": [
			"Deep in the desert, ruins held ancient secrets.",
			"The cruel truth hidden behind Bellum's name.",
			"Lost memories, absorbed souls.",
			"Its shadow threatens to engulf the expedition."
		],
		"japanese": [
			"砂漠の奥深く、廃墟は古代の秘密を抱いていた。",
			"ベルムの名に隠された残酷な真実。",
			"失われた記憶、吸収された魂。",
			"その影が探検隊を飲み込もうとしている。"
		],
		"chinese": [
			"在沙漠深处，废墟蕴藏着古老的秘密。",
			"隐藏在贝鲁姆之名后的残酷真相。",
			"失去的记忆，被吸收的灵魂。",
			"那阴影正试图吞噬探险队。"
		],
		"french": [
			"Au fond du désert, les ruines recelaient d'anciens secrets.",
			"La cruelle vérité cachée derrière le nom de Bellum.",
			"Souvenirs perdus, âmes absorbées.",
			"Son ombre menace d'engloutir l'expédition."
		],
		"spanish": [
			"En lo profundo del desierto, las ruinas guardaban antiguos secretos.",
			"La cruel verdad oculta tras el nombre de Bellum.",
			"Recuerdos perdidos, almas absorbidas.",
			"Su sombra amenaza con engullir a la expedición."
		],
		"vietnamese": [
			"Sâu trong sa mạc, những tàn tích ẩn chứa bí mật cổ xưa.",
			"Sự thật tàn khốc ẩn sau cái tên Bellum.",
			"Ký ức đã mất, linh hồn bị hấp thụ.",
			"Bóng tối đó đang đe dọa nuốt chửng đoàn thám hiểm."
		],
		"thai": [
			"ลึกเข้าไปในทะเลทราย ซากปรักหักพังซ่อนเร้นความลับโบราณ",
			"ความจริงอันโหดร้ายที่ซ่อนอยู่เบื้องหลังชื่อของเบลลัม",
			"ความทรงจำที่หายไป วิญญาณที่ถูกดูดกลืน",
			"เงามืดนั้นกำลังจะกลืนกินคณะสำรวจ"
		],
		"hindi": [
			"रेगिस्तान की गहराई में, खंडहरों में प्राचीन रहस्य छिपे थे।",
			"बेलम के नाम के पीछे छिपा क्रूर सच।",
			"खोई हुई यादें, अवशोषित आत्माएं।",
			"उसकी छाया अभियान दल को निगलने की धमकी दे रही है।"
		]
	}
} as const;
