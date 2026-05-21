export const scenario_Chicken_saurus_Rebirth_03 = {
	"scenario_id": "Chicken_saurus_Rebirth_03",
	"order": 3,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"bracken": {
			"id": "mon_48cf29be-dbc0-44b1-bbb3-ecda1d14742d",
			"name": {
				"korean": "브라켄",
				"english": "Bracken",
				"japanese": "ブラッケン",
				"chinese": "布莱肯",
				"french": "Bracken",
				"spanish": "Bracken",
				"vietnamese": "Bracken",
				"thai": "แบรกเคน",
				"hindi": "ब्रैकेन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5b494da6-ffd7-43d3-7171-7ac84bdfe400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4a7a1b62-d7a7-4a21-ffd5-fa9b5de82100/public"
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
						"korean": "숲의 공기는 끈적하고 무거웠다. 발밑의 흙은 축축하고 차가웠다.",
						"english": "The forest air was thick and heavy. The soil underfoot was damp and cold.",
						"japanese": "森の空気はねっとりとして重かった。足元の土は湿って冷たかった。",
						"chinese": "森林的空气黏稠而沉重。脚下的泥土潮湿而冰冷。",
						"french": "L'air de la forêt était épais et lourd. La terre sous mes pieds était humide et froide.",
						"spanish": "El aire del bosque era denso y pesado. La tierra bajo mis pies estaba húmeda y fría.",
						"vietnamese": "Không khí trong rừng dính và nặng nề. Đất dưới chân ẩm ướt và lạnh lẽo.",
						"thai": "อากาศในป่าเหนียวเหนอะหนะและหนักอึ้ง ดินใต้เท้าชื้นแฉะและเย็นยะเยือก",
						"hindi": "जंगल की हवा चिपचिपी और भारी थी। पैरों के नीचे की मिट्टी नम और ठंडी थी।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "으스스한데? 뭔가 달라진 것 같아.",
						"english": "Creepy, isn't it? Something feels different.",
						"japanese": "不気味だね？何かが変わったみたいだ。",
						"chinese": "真诡异？感觉有些不对劲。",
						"french": "Étrange, n'est-ce pas ? Quelque chose a changé.",
						"spanish": "Da escalofríos, ¿verdad? Algo parece haber cambiado.",
						"vietnamese": "Rợn người nhỉ? Có gì đó thay đổi rồi.",
						"thai": "น่าขนลุกนะ? รู้สึกเหมือนมีบางอย่างเปลี่ยนไป",
						"hindi": "डरावना है ना? कुछ बदला-बदला सा लग रहा है।"
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "bracken",
					"duration_ms": 500
				},
				{
					"speaker": "bracken",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "너희가 왔구나. 내가 브라켄이다.",
						"english": "You've arrived. I am Braken.",
						"japanese": "よく来たな。私がブラッケンだ。",
						"chinese": "你们来了。我就是布莱肯。",
						"french": "Vous êtes arrivés. Je suis Braken.",
						"spanish": "Habéis llegado. Soy Braken.",
						"vietnamese": "Các ngươi đã đến. Ta là Braken.",
						"thai": "พวกเจ้ามาแล้ว ข้าคือบราเคน",
						"hindi": "तुम आ गए। मैं ब्रैकन हूँ।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "bracken",
					"content": {
						"korean": "이 숲은… 이제 예전의 숲이 아니야.",
						"english": "This forest... it's not the forest it used to be.",
						"japanese": "この森は…もう以前の森ではない。",
						"chinese": "这片森林…已经不再是以前的森林了。",
						"french": "Cette forêt… ce n'est plus la forêt d'antan.",
						"spanish": "Este bosque... ya no es el bosque de antes.",
						"vietnamese": "Rừng này… không còn như xưa nữa.",
						"thai": "ป่าแห่งนี้... ไม่ใช่ป่าแห่งเดิมอีกแล้ว",
						"hindi": "यह जंगल... अब पहले जैसा जंगल नहीं रहा।"
					}
				},
				{
					"content": {
						"korean": "무슨 일이야?",
						"english": "What's going on?",
						"japanese": "何があったんだ？",
						"chinese": "发生什么事了？",
						"french": "Que se passe-t-il ?",
						"spanish": "¿Qué está pasando?",
						"vietnamese": "Chuyện gì vậy?",
						"thai": "เกิดอะไรขึ้น?",
						"hindi": "क्या हो रहा है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "bracken",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "bracken",
					"content": {
						"korean": "치킨-사우루스의 복수심이 뿌리가 되어 숲을 병들게 하고 있어.",
						"english": "Chicken-saurus's vengeful spirit has taken root, sickening the forest.",
						"japanese": "チキンサウルスの復讐心が根を張り、森を病ませている。",
						"chinese": "鸡龙的复仇心已扎根，正在病害着森林。",
						"french": "L'esprit vengeur du Chicken-saurus a pris racine, rendant la forêt malade.",
						"spanish": "La sed de venganza del Pollosaurio ha echado raíces, enfermando el bosque.",
						"vietnamese": "Lòng thù hận của Gà-khủng-long đã bén rễ, khiến khu rừng bệnh tật.",
						"thai": "ความอาฆาตของไก่ซอรัสได้หยั่งราก ทำให้ป่าป่วยไข้",
						"hindi": "चिकन-सॉरस का प्रतिशोध जड़ जमा चुका है, जिससे जंगल बीमार पड़ रहा है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "복수심이… 환영을 만든다고?",
						"english": "Revenge... creates illusions?",
						"japanese": "復讐心が…幻影を創り出すって？",
						"chinese": "复仇之心…会制造幻象？",
						"french": "La vengeance… crée des illusions ?",
						"spanish": "¿La venganza… crea ilusiones?",
						"vietnamese": "Thù hận… tạo ra ảo ảnh?",
						"thai": "ความแค้น… สร้างภาพลวงตาเหรอ?",
						"hindi": "बदला… भ्रम पैदा करता है?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "bracken",
					"content": {
						"korean": "그래. 숲은 과거의 기억을 보여줄 거야. 달콤한 환상으로 유혹하거나, 끔찍한 악몽으로.",
						"english": "Yes. The forest will show you memories of the past. Enticing you with sweet illusions, or terrifying nightmares.",
						"japanese": "そうだ。森は過去の記憶を見せるだろう。甘い幻想で誘惑したり、恐ろしい悪夢として。",
						"chinese": "是的。森林会展现过去的记忆。或以甜美幻象引诱，或以恐怖噩梦惊吓。",
						"french": "Oui. La forêt te montrera des souvenirs du passé. T'attirant avec de douces illusions, ou d'horribles cauchemars.",
						"spanish": "Sí. El bosque te mostrará recuerdos del pasado. Seduciéndote con dulces ilusiones, o con terribles pesadillas.",
						"vietnamese": "Đúng vậy. Rừng sẽ cho ngươi thấy ký ức quá khứ. Dụ dỗ bằng ảo ảnh ngọt ngào, hoặc ác mộng kinh hoàng.",
						"thai": "ใช่แล้ว ป่าจะแสดงความทรงจำในอดีตให้เธอเห็น ไม่ว่าจะล่อลวงด้วยภาพลวงตาอันหอมหวาน หรือฝันร้ายอันน่าสะพรึงกลัว",
						"hindi": "हाँ। जंगल तुम्हें अतीत की यादें दिखाएगा। मीठे भ्रमों से लुभाएगा, या भयानक दुःस्वप्नों से डराएगा।"
					}
				},
				{
					"speaker": "bracken",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "저 뒤틀린 뿌리들을 봐. 숲의 비명 소리가 들리지 않아?",
						"english": "Look at those twisted roots. Can't you hear the forest screaming?",
						"japanese": "あのねじれた根を見て。森の悲鳴が聞こえないかい？",
						"chinese": "看那些扭曲的根。你听不到森林的尖叫吗？",
						"french": "Regarde ces racines tordues. N'entends-tu pas la forêt crier ?",
						"spanish": "Mira esas raíces retorcidas. ¿No oyes el grito del bosque?",
						"vietnamese": "Nhìn những rễ cây xoắn vặn kia kìa. Ngươi không nghe thấy tiếng hét của rừng sao?",
						"thai": "ดูรากไม้ที่บิดเบี้ยวนั่นสิ ไม่ได้ยินเสียงกรีดร้องของป่าเหรอ?",
						"hindi": "उन मुड़ी हुई जड़ों को देखो। क्या तुम्हें जंगल की चीखें नहीं सुनाई देतीं?"
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "bracken",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "…숲의 힘이 악용되고 있어. 환영은 점점 강해질 거야.",
						"english": "...The forest's power is being misused. The illusions will grow stronger.",
						"japanese": "…森の力が悪用されている。幻影はますます強くなるだろう。",
						"chinese": "…森林的力量正在被滥用。幻象会越来越强。",
						"french": "…Le pouvoir de la forêt est utilisé à mauvais escient. Les illusions deviendront de plus en plus fortes.",
						"spanish": "...El poder del bosque está siendo mal utilizado. Las ilusiones se harán más fuertes.",
						"vietnamese": "...Sức mạnh của rừng đang bị lạm dụng. Ảo ảnh sẽ ngày càng mạnh hơn.",
						"thai": "…พลังของป่ากำลังถูกนำไปใช้ในทางที่ผิด ภาพลวงตาจะยิ่งแข็งแกร่งขึ้น",
						"hindi": "...जंगल की शक्ति का दुरुपयोग हो रहा है। भ्रम और मजबूत होते जाएंगे।"
					},
					"speaker": "bracken",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "과거의 기억… 인가? 머리가 지끈거려.",
						"english": "Memories of the past... huh? My head is throbbing.",
						"japanese": "過去の記憶…か？頭がズキズキする。",
						"chinese": "过去的记忆…吗？我头痛欲裂。",
						"french": "Des souvenirs du passé… hein ? Ma tête me fait mal.",
						"spanish": "¿Recuerdos del pasado… eh? Me duele la cabeza.",
						"vietnamese": "Ký ức quá khứ… ư? Đầu ta đau nhức.",
						"thai": "ความทรงจำในอดีต… งั้นเหรอ? หัวฉันปวดตุบๆ เลย",
						"hindi": "अतीत की यादें… क्या? मेरा सिर दर्द कर रहा है।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "bracken",
					"content": {
						"korean": "네 가장 깊은 두려움을 건드릴 거야. 조심해… 조심… 해야 해…",
						"english": "It will touch your deepest fears. Be careful... you... must be careful...",
						"japanese": "それは君の最も深い恐れに触れるだろう。気をつけて… 気をつ…けなければ…",
						"chinese": "它会触及你内心最深处的恐惧。小心…你…必须小心…",
						"french": "Cela touchera tes peurs les plus profondes. Fais attention… tu… dois faire attention…",
						"spanish": "Tocará tus miedos más profundos. Ten cuidado… debes… tener cuidado…",
						"vietnamese": "Nó sẽ chạm vào nỗi sợ hãi sâu thẳm nhất của ngươi. Hãy cẩn thận… ngươi… phải cẩn thận…",
						"thai": "มันจะแตะต้องความกลัวที่ลึกที่สุดของเธอ ระวังนะ… เธอ… ต้องระวัง…",
						"hindi": "यह तुम्हारे गहरे से गहरे डर को छुएगा। सावधान रहो… तुम्हें… सावधान रहना होगा…"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "브라켄, 괜찮아? 표정이 안 좋아 보여.",
						"english": "Bracken, are you okay? You don't look good.",
						"japanese": "ブラッケン、大丈夫？顔色が悪いよ。",
						"chinese": "布莱肯，你还好吗？你看起来脸色不好。",
						"french": "Bracken, ça va ? Tu n'as pas l'air bien.",
						"spanish": "¿Bracken, estás bien? No tienes buen aspecto.",
						"vietnamese": "Bracken, ngươi ổn không? Trông ngươi không ổn chút nào.",
						"thai": "แบรคเคน เธอโอเคไหม? ดูหน้าตาไม่ดีเลย",
						"hindi": "ब्रेकेन, तुम ठीक हो? तुम ठीक नहीं लग रहे हो।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "bracken",
					"content": {
						"korean": "저 아래에서… 빛나는 버섯들이… 너희를 부르고 있어…",
						"english": "Down there… the glowing mushrooms… are calling to you…",
						"japanese": "あの下で… 光るキノコたちが… 君たちを呼んでいる…",
						"chinese": "在那下面…发光的蘑菇…正在呼唤你们…",
						"french": "Là en bas… les champignons lumineux… vous appellent…",
						"spanish": "Allí abajo… los hongos brillantes… os están llamando…",
						"vietnamese": "Ở dưới đó… những cây nấm phát sáng… đang gọi các ngươi…",
						"thai": "ข้างล่างนั้น… เห็ดเรืองแสง… กำลังเรียกพวกเธออยู่…",
						"hindi": "वहाँ नीचे… चमकते हुए मशरूम… तुम्हें बुला रहे हैं…"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "bracken",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "브라켄! 왜 그래? 우리를 막으려는 거야?",
						"english": "Bracken! What's wrong? Are you trying to stop us?",
						"japanese": "ブラッケン！どうしたの？僕たちを止めようとしているの？",
						"chinese": "布莱肯！你怎么了？你想阻止我们吗？",
						"french": "Bracken ! Qu'est-ce qui ne va pas ? Tu essaies de nous arrêter ?",
						"spanish": "¡Bracken! ¿Qué te pasa? ¿Estás intentando detenernos?",
						"vietnamese": "Bracken! Ngươi làm sao vậy? Ngươi đang cố ngăn chúng ta sao?",
						"thai": "แบรคเคน! เป็นอะไรไป? เธอพยายามจะหยุดพวกเราเหรอ?",
						"hindi": "ब्रेकेन! क्या हुआ? क्या तुम हमें रोकना चाहते हो?"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "bracken",
					"content": {
						"korean": "(공허한 눈으로) 너희는… 더 깊이 들어가면 안 돼. 숲은… 너희를 집어삼킬 거야.",
						"english": "(With hollow eyes) You… mustn't go deeper. The forest… will swallow you whole.",
						"japanese": "(虚ろな目で) 君たちは…もっと深く入ってはいけない。森は…君たちを飲み込むだろう。",
						"chinese": "（眼神空洞）你们…不能再深入了。森林…会吞噬你们的。",
						"french": "(Avec des yeux vides) Vous… ne devez pas aller plus loin. La forêt… vous engloutira tout entiers.",
						"spanish": "(Con ojos vacíos) Vosotros… no debéis ir más profundo. El bosque… os devorará por completo.",
						"vietnamese": "(Với đôi mắt trống rỗng) Các ngươi… không được đi sâu hơn. Rừng… sẽ nuốt chửng các ngươi.",
						"thai": "(ด้วยดวงตาที่ว่างเปล่า) พวกเธอ… จะต้องไม่เข้าไปลึกกว่านี้ ป่า… จะกลืนกินพวกเธอไปทั้งตัว",
						"hindi": "(खाली आँखों से) तुम… और गहराई में मत जाओ। जंगल… तुम्हें पूरा निगल जाएगा।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "숲의 힘이 이렇게 악용되다니! 멈춰야 해!",
						"english": "The forest's power, misused like this! I must stop it!",
						"japanese": "森の力がこんな風に悪用されるなんて！止めなければ！",
						"chinese": "森林的力量竟被如此滥用！必须阻止！",
						"french": "Le pouvoir de la forêt, ainsi détourné ! Je dois l'arrêter !",
						"spanish": "¡El poder del bosque, así de mal utilizado! ¡Debo detenerlo!",
						"vietnamese": "Sức mạnh của rừng bị lạm dụng thế này! Phải ngăn chặn thôi!",
						"thai": "พลังของป่าถูกนำไปใช้ในทางที่ผิดเช่นนี้! ต้องหยุดมัน!",
						"hindi": "जंगल की शक्ति का ऐसे दुरुपयोग! इसे रोकना होगा!"
					}
				},
				{
					"content": {
						"korean": "멈출 수 없어. 이미… 너무 늦었어. (손을 뻗으며) 돌아가… 돌아가…",
						"english": "I can't stop it. It's already... too late. (Reaches out) Go back... Go back...",
						"japanese": "止められない。もう…遅すぎる。(手を伸ばしながら) 戻れ…戻れ…",
						"chinese": "无法阻止。已经…太迟了。(伸出手) 回去…回去…",
						"french": "Je ne peux pas l'arrêter. C'est déjà… trop tard. (Tendant la main) Retourne… Retourne…",
						"spanish": "No puedo detenerlo. Ya es… demasiado tarde. (Extiende la mano) Vuelve… Vuelve…",
						"vietnamese": "Không thể dừng lại. Đã… quá muộn rồi. (Với tay ra) Trở về đi… Trở về đi…",
						"thai": "หยุดมันไม่ได้แล้ว. มัน…สายเกินไปแล้ว. (ยื่นมือออกไป) กลับไปซะ… กลับไปซะ…",
						"hindi": "मैं इसे रोक नहीं सकता। पहले ही… बहुत देर हो चुकी है। (हाथ बढ़ाते हुए) वापस जाओ… वापस जाओ…"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "bracken"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 인간들. 영원히 이 환영 속에 갇혀라.",
						"english": "Foolish mortals. Be trapped in this illusion forever.",
						"japanese": "愚かな人間たちよ。永遠にこの幻影の中に囚われろ。",
						"chinese": "愚蠢的凡人。永远被困在这幻象中吧。",
						"french": "Mortels insensés. Restez piégés dans cette illusion pour toujours.",
						"spanish": "Mortales insensatos. Quedad atrapados en esta ilusión para siempre.",
						"vietnamese": "Những kẻ phàm trần ngu ngốc. Hãy bị mắc kẹt trong ảo ảnh này mãi mãi.",
						"thai": "พวกมนุษย์โง่เขลา จงถูกขังอยู่ในภาพลวงตานี้ตลอดไป",
						"hindi": "मूर्ख नश्वर। हमेशा के लिए इस भ्रम में फंसे रहो।"
					}
				},
				{
					"content": {
						"korean": "(이를 악물며) 아직… 끝나지 않았어. 포기하지 않아!",
						"english": "(Gritting teeth) It's not... over yet. I won't give up!",
						"japanese": "（歯を食いしばりながら）まだ…終わってない。諦めない！",
						"chinese": "（咬紧牙关）还没有…结束。我不会放弃的！",
						"french": "(Serrant les dents) Ce n'est pas... encore fini. Je n'abandonnerai pas !",
						"spanish": "(Apretando los dientes) Aún no... ha terminado. ¡No me rendiré!",
						"vietnamese": "(Nghiến răng) Vẫn chưa... kết thúc. Ta sẽ không bỏ cuộc!",
						"thai": "(กัดฟัน) ยังไม่... จบลง ฉันจะไม่ยอมแพ้!",
						"hindi": "(दांत पीसते हुए) अभी... खत्म नहीं हुआ है। मैं हार नहीं मानूंगा!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "(고통스러운 신음) 이… 숲의 힘은… 아직 끝나지 않았어…",
						"english": "(Painful groan) This... forest power... is not over yet...",
						"japanese": "（苦痛のうめき声）この…森の力は…まだ終わっていない…",
						"chinese": "（痛苦的呻吟）这…森林的力量…还没有结束…",
						"french": "(Gémissement douloureux) Ce... pouvoir de la forêt... n'est pas encore terminé...",
						"spanish": "(Gemido doloroso) Este... poder del bosque... aún no ha terminado...",
						"vietnamese": "(Tiếng rên rỉ đau đớn) Sức mạnh... của khu rừng này... vẫn chưa kết thúc...",
						"thai": "(เสียงครางด้วยความเจ็บปวด) พลัง... แห่งป่านี้... ยังไม่จบลง...",
						"hindi": "(दर्दनाक कराह) यह... वन शक्ति... अभी खत्म नहीं हुई है..."
					}
				},
				{
					"content": {
						"korean": "드디어… 끝났다.",
						"english": "Finally... it's over.",
						"japanese": "ついに…終わった。",
						"chinese": "终于…结束了。",
						"french": "Enfin... c'est fini.",
						"spanish": "Finalmente... ha terminado.",
						"vietnamese": "Cuối cùng... cũng kết thúc rồi.",
						"thai": "ในที่สุด... ก็จบลงแล้ว",
						"hindi": "आखिरकार... यह खत्म हो गया।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "숲의 그림자가 걷히고, 환영은 사라졌다. 그러나 그들의 기억은… 희미하게 남아 있었다.",
						"english": "The forest's shadow receded, and the illusion vanished. But their memories... remained faintly.",
						"japanese": "森の影が消え、幻影は晴れた。しかし、彼らの記憶は…かすかに残っていた。",
						"chinese": "森林的阴影消退，幻影消失了。但他们的记忆…依然模糊地存在着。",
						"french": "L'ombre de la forêt recula, et l'illusion disparut. Mais leurs souvenirs... demeuraient faiblement.",
						"spanish": "La sombra del bosque retrocedió y la ilusión se desvaneció. Pero sus recuerdos... permanecieron débilmente.",
						"vietnamese": "Bóng tối của rừng lùi lại, và ảo ảnh biến mất. Nhưng ký ức của họ... vẫn còn mờ nhạt.",
						"thai": "เงาของป่าถอยร่น และภาพลวงตาก็หายไป แต่ความทรงจำของพวกเขา... ยังคงเลือนราง",
						"hindi": "जंगल की छाया हट गई और भ्रम गायब हो गया। लेकिन उनकी यादें... धुंधली बनी रहीं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "더 깊은 곳에서, 또 다른 어둠이 그들을 기다리고 있었다.",
						"english": "In a deeper place, another darkness awaited them.",
						"japanese": "より深い場所で、別の闇が彼らを待ち受けていた。",
						"chinese": "在更深的地方，另一片黑暗正等待着他们。",
						"french": "Dans un endroit plus profond, une autre obscurité les attendait.",
						"spanish": "En un lugar más profundo, otra oscuridad los esperaba.",
						"vietnamese": "Ở một nơi sâu hơn, một bóng tối khác đang chờ đợi họ.",
						"thai": "ในที่ที่ลึกกว่านั้น ความมืดอีกอย่างกำลังรอพวกเขาอยู่",
						"hindi": "एक गहरे स्थान पर, एक और अंधकार उनकी प्रतीक्षा कर रहा था।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "환영의 숲 가장 깊은 곳. 모든 그림자가 뒤틀린 곳이었다.",
						"english": "The deepest part of the Forest of Illusions. Where all shadows twisted.",
						"japanese": "幻影の森の最深部。全ての影が歪む場所だった。",
						"chinese": "幻影森林最深处。所有影子都扭曲的地方。",
						"french": "La partie la plus profonde de la Forêt des Illusions. Là où toutes les ombres se tordaient.",
						"spanish": "La parte más profunda del Bosque de las Ilusiones. Donde todas las sombras se retorcían.",
						"vietnamese": "Nơi sâu nhất của Rừng Ảo Ảnh. Nơi mọi bóng tối đều vặn vẹo.",
						"thai": "ส่วนที่ลึกที่สุดของป่าลวงตา. ที่ซึ่งเงาทุกเงาบิดเบี้ยว.",
						"hindi": "भ्रम के जंगल का सबसे गहरा हिस्सा। जहाँ सभी परछाइयाँ मुड़ी हुई थीं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "bracken",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "(완전히 타락한 목소리로) 왜… 내 경고를 듣지 않았지?",
						"english": "(In a voice completely corrupted) Why… didn't you heed my warning?",
						"japanese": "(完全に堕落した声で) なぜ…私の警告を聞かなかった？",
						"chinese": "（以完全腐化的声音）为什么…不听我的警告？",
						"french": "(D'une voix complètement corrompue) Pourquoi… n'as-tu pas écouté mon avertissement ?",
						"spanish": "(Con voz completamente corrompida) ¿Por qué… no escuchaste mi advertencia?",
						"vietnamese": "(Với giọng nói hoàn toàn tha hóa) Tại sao… ngươi không nghe lời cảnh báo của ta?",
						"thai": "(ด้วยเสียงที่เสื่อมทรามอย่างสมบูรณ์) ทำไม…ไม่ฟังคำเตือนของข้า?",
						"hindi": "(पूरी तरह भ्रष्ट आवाज़ में) तुमने मेरी चेतावनी क्यों नहीं सुनी?"
					},
					"speaker": "bracken",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "브라켄! 정신 차려!",
						"english": "Braken! Snap out of it!",
						"japanese": "ブラッケン！正気を取り戻せ！",
						"chinese": "布莱肯！清醒过来！",
						"french": "Braken ! Reprends-toi !",
						"spanish": "¡Braken! ¡Recupera la cordura!",
						"vietnamese": "Braken! Tỉnh táo lại đi!",
						"thai": "บราเคน! ได้สติหน่อย!",
						"hindi": "ब्रेकन! होश में आओ!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "이 숲의 힘은… 위대해. 너희 따위가 막을 수 없어.",
						"english": "The power of this forest… is great. You mere mortals cannot stop it.",
						"japanese": "この森の力は…偉大だ。お前たちなど止められない。",
						"chinese": "这森林的力量…是伟大的。你们这些家伙无法阻止。",
						"french": "Le pouvoir de cette forêt… est grand. Vous, misérables, ne pouvez pas l'arrêter.",
						"spanish": "El poder de este bosque… es inmenso. Vosotros no podréis detenerlo.",
						"vietnamese": "Sức mạnh của khu rừng này… thật vĩ đại. Các ngươi không thể ngăn cản được đâu.",
						"thai": "พลังของป่านี้…ยิ่งใหญ่มาก. พวกเจ้าไม่อาจหยุดมันได้.",
						"hindi": "इस जंगल की शक्ति… महान है। तुम जैसे इसे रोक नहीं सकते।"
					},
					"speaker": "bracken",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "브라켄. 수고했어. 이제 사라져.",
						"english": "Braken. You've served your purpose. Now vanish.",
						"japanese": "ブラッケン。ご苦労だった。もう消えろ。",
						"chinese": "布莱肯。你做得很好。现在消失吧。",
						"french": "Braken. Tu as rempli ton rôle. Maintenant, disparais.",
						"spanish": "Braken. Has cumplido tu propósito. Ahora, desaparece.",
						"vietnamese": "Braken. Ngươi đã làm tốt rồi. Giờ thì biến đi.",
						"thai": "บราเคน. เจ้าทำได้ดีแล้ว. ตอนนี้หายไปซะ.",
						"hindi": "ब्रेकन। तुमने अपना काम कर दिया। अब गायब हो जाओ।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "bracken",
					"content": {
						"korean": "(움찔하며) 흐읍…",
						"english": "(Flinching) Hmph…",
						"japanese": "(怯えながら) うぅっ…",
						"chinese": "（畏缩地）哼…",
						"french": "(Sursaute) Hmpf…",
						"spanish": "(Sobresaltado) Ugh…",
						"vietnamese": "(Giật mình) Hừm…",
						"thai": "(สะดุ้ง) เฮือก…",
						"hindi": "(चौंककर) हूँह…"
					}
				},
				{
					"speaker": "bracken",
					"duration_ms": 400,
					"direction": "down",
					"type": "direction",
					"action": "exit"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "환영에 갇힌 채 과거에 허덕이는 너희가… 여기까지 오다니.",
						"english": "You, trapped in illusions, struggling with the past… to think you've come this far.",
						"japanese": "幻影に囚われ、過去に苦しむお前たちが…ここまで来るとは。",
						"chinese": "你们这些被幻影困住，在过去中挣扎的人…竟能来到这里。",
						"french": "Vous, piégés dans les illusions, luttant avec le passé… dire que vous êtes arrivés jusqu'ici.",
						"spanish": "Vosotros, atrapados en ilusiones, ahogándoos en el pasado… ¿cómo habéis llegado tan lejos?",
						"vietnamese": "Các ngươi, bị mắc kẹt trong ảo ảnh, vật lộn với quá khứ… mà lại đến được đây.",
						"thai": "พวกเจ้าที่ติดกับภาพลวงตา, ดิ้นรนกับอดีต…จะมาถึงที่นี่ได้ไง.",
						"hindi": "तुम, भ्रम में फँसे, अतीत से जूझते हुए… यहाँ तक आ पहुँचे।"
					}
				},
				{
					"content": {
						"korean": "감히 이 숲의 주인에게 대적하겠다고?",
						"english": "You dare challenge the master of this forest?",
						"japanese": "よくもこの森の主人に逆らおうと？",
						"chinese": "竟敢挑战这片森林的主人？",
						"french": "Vous osez défier le maître de cette forêt ?",
						"spanish": "¿Os atrevéis a desafiar al señor de este bosque?",
						"vietnamese": "Ngươi dám đối đầu với chủ nhân của khu rừng này sao?",
						"thai": "พวกเจ้ากล้าท้าทายเจ้าของป่าแห่งนี้หรือ?",
						"hindi": "तुम्हारी हिम्मत कैसे हुई इस जंगल के मालिक को चुनौती देने की?"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "숲의 힘을 악용하는 너를… 용서하지 않아!",
						"english": "I won't forgive you for abusing the forest's power!",
						"japanese": "森の力を悪用する貴様を…許さない！",
						"chinese": "滥用森林力量的你…不可饶恕！",
						"french": "Je ne te pardonnerai pas d'abuser du pouvoir de la forêt !",
						"spanish": "¡No te perdonaré por abusar del poder del bosque!",
						"vietnamese": "Ta sẽ không tha thứ cho ngươi vì đã lạm dụng sức mạnh của rừng!",
						"thai": "ข้าจะไม่มีวันให้อภัยเจ้าที่ใช้พลังแห่งป่าในทางที่ผิด!",
						"hindi": "मैं तुम्हें जंगल की शक्ति का दुरुपयोग करने के लिए माफ नहीं करूँगा!"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"환영의 숲은 공포와 침묵으로 물들었다.",
			"치킨-사우루스의 복수심이 그림자가 되어 모든 것을 집어삼켰다.",
			"고위 요정 브라켄의 경고는 희미해지고, 숲은 길을 잃었다.",
			"흔적 없는 그림자가 서서히 조여오는 가운데, 과거의 환영이 춤추기 시작한다."
		],
		"english": [
			"The Forest of Welcome was stained with fear and silence.",
			"Chicken-saurus's vengeful spirit became a shadow, devouring all.",
			"High Elf Braken's warning faded, and the forest lost its way.",
			"As the traceless shadow slowly tightened its grip, phantoms of the past began to dance."
		],
		"japanese": [
			"歓迎の森は恐怖と沈黙に染まった。",
			"チキンサウルスの復讐心が影となり、すべてを飲み込んだ。",
			"高位妖精ブラッケンの警告は薄れ、森は道を見失った。",
			"痕跡なき影が徐々に迫りくる中、過去の幻影が踊り始めた。"
		],
		"chinese": [
			"欢迎之森被恐惧和沉默所笼罩。",
			"鸡龙的复仇心化作阴影，吞噬了一切。",
			"高阶精灵布莱肯的警告逐渐消逝，森林迷失了方向。",
			"随着无形之影渐渐逼近，过去的幻影开始起舞。"
		],
		"french": [
			"La Forêt d'Accueil fut maculée de peur et de silence.",
			"L'esprit vengeur du Chicken-saurus devint une ombre, dévorant tout.",
			"L'avertissement de la Haute Elfe Braken s'estompa, et la forêt perdit son chemin.",
			"Tandis que l'ombre sans trace se resserrait lentement, les fantômes du passé commencèrent à danser."
		],
		"spanish": [
			"El Bosque de Bienvenida se tiñó de miedo y silencio.",
			"La sed de venganza del Pollosaurio se hizo sombra, devorándolo todo.",
			"La advertencia de la Alta Elfa Braken se desvaneció, y el bosque se perdió.",
			"Mientras la sombra sin rastro se ceñía lentamente, los fantasmas del pasado comenzaron a bailar."
		],
		"vietnamese": [
			"Rừng Hoan Lạc chìm trong sợ hãi và im lặng.",
			"Lòng thù hận của Gà-khủng-long hóa thành bóng tối, nuốt chửng mọi thứ.",
			"Lời cảnh báo của Tiên tộc cấp cao Braken mờ dần, khu rừng lạc lối.",
			"Khi bóng tối vô hình dần siết chặt, những ảo ảnh của quá khứ bắt đầu nhảy múa."
		],
		"thai": [
			"ป่าต้อนรับถูกย้อมด้วยความกลัวและความเงียบงัน",
			"ความอาฆาตของไก่ซอรัสกลายเป็นเงา กลืนกินทุกสิ่ง",
			"คำเตือนของเอลฟ์ชั้นสูงบราเคนเลือนหายไป และป่าก็หลงทาง",
			"ในขณะที่เงาไร้ร่องรอยค่อยๆ คืบคลานเข้ามา ภาพหลอนจากอดีตก็เริ่มเต้นรำ"
		],
		"hindi": [
			"स्वागत का जंगल डर और खामोशी से भर गया。",
			"चिकन-सॉरस का प्रतिशोध एक छाया बन गया, जिसने सब कुछ निगल लिया।",
			"उच्च परी ब्रैकन की चेतावनी फीकी पड़ गई, और जंगल रास्ता भटक गया।",
			"जैसे ही बेनिशान परछाई धीरे-धीरे कसने लगी, अतीत के भ्रम नाचने लगे।"
		]
	}
} as const;
