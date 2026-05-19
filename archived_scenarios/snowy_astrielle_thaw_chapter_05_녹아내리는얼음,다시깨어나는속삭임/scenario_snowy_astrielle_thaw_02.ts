export const scenario_snowy_astrielle_thaw_02 = {
	"scenario_id": "snowy_astrielle_thaw_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"anuk": {
			"id": "mon_8736797d-779a-4748-8633-d15c1eaf9be7",
			"name": {
				"korean": "아눅",
				"english": "Anuk",
				"japanese": "アヌーク",
				"chinese": "阿努克",
				"french": "Anuk",
				"spanish": "Anuk",
				"vietnamese": "Anuk",
				"thai": "อนุก",
				"hindi": "अनुक"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/19485274-e873-45c8-5043-f4ff65aa2a00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9a79ecfd-8cc6-4461-3790-763822522500/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"얼음이 녹아내린 자리, 고대 유적이 기지개를 켰다.",
			"그 안에서 깨어난 것은 잠들어 있던 기억들.",
			"어두운 속삭임이 아스트리엘의 심장을 파고든다.",
			"과거의 상처가 다시 그녀를 덮치려 한다."
		],
		"english": [
			"Where ice melted, ancient ruins stirred.",
			"Within, slumbering memories awoke.",
			"Dark whispers pierced Astriel's heart.",
			"Wounds of the past threatened to engulf her anew."
		],
		"japanese": [
			"氷が溶けた場所に、古代遺跡が目覚めた。",
			"その中で目覚めたのは、眠っていた記憶たち。",
			"暗い囁きがアストリエルの心臓を抉る。",
			"過去の傷が再び彼女を襲おうとする。"
		],
		"chinese": [
			"冰雪消融之处，古老遗迹苏醒。",
			"其中，沉睡的记忆苏醒。",
			"黑暗的低语刺穿了阿斯特丽尔的心脏。",
			"过去的伤痛再次试图吞噬她。"
		],
		"french": [
			"Là où la glace a fondu, d'anciennes ruines se sont éveillées.",
			"À l'intérieur, des souvenirs endormis se sont éveillés.",
			"De sombres murmures transpercèrent le cœur d'Astriel.",
			"Les blessures du passé menaçaient de l'engloutir à nouveau."
		],
		"spanish": [
			"Donde el hielo se derritió, ruinas antiguas se despertaron.",
			"Dentro, recuerdos dormidos despertaron.",
			"Susurros oscuros perforaron el corazón de Astriel.",
			"Las heridas del pasado amenazaron con envolverla de nuevo."
		],
		"vietnamese": [
			"Nơi băng tan chảy, di tích cổ xưa thức tỉnh.",
			"Bên trong, những ký ức ngủ say thức tỉnh.",
			"Lời thì thầm đen tối xuyên thấu trái tim Astriel.",
			"Những vết thương quá khứ lại đe dọa nuốt chửng cô."
		],
		"thai": [
			"ณ ที่น้ำแข็งละลาย ซากปรักหักพังโบราณก็ตื่นขึ้น",
			"ภายในนั้น ความทรงจำที่หลับใหลก็ตื่นขึ้น",
			"เสียงกระซิบมืดมิดแทงทะลุหัวใจของแอสเทรียล",
			"บาดแผลในอดีตกำลังจะกลืนกินเธออีกครั้ง"
		],
		"hindi": [
			"जहाँ बर्फ पिघली, प्राचीन खंडहर जाग उठे।",
			"उसके भीतर, सोई हुई यादें जाग उठीं।",
			"अंधेरी फुसफुसाहटों ने एस्ट्रियल के दिल को छेद दिया।",
			"अतीत के घाव उसे फिर से निगलने की धमकी दे रहे थे।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "얼음 성이 녹아내린 유적. 불안한 기운이 감돌았다.",
						"english": "The ruins of the melted ice castle. An uneasy aura lingered.",
						"japanese": "氷の城が溶けた遺跡。不穏な気配が漂っていた。",
						"chinese": "冰雪城堡融化后的遗迹。不安的气息弥漫。",
						"french": "Les ruines du château de glace fondu. Une aura inquiétante planait.",
						"spanish": "Las ruinas del castillo de hielo derretido. Un aura inquietante se cernía.",
						"vietnamese": "Di tích lâu đài băng tan chảy. Một luồng khí bất an bao trùm.",
						"thai": "ซากปรักหักพังของปราสาทน้ำแข็งที่ละลาย บรรยากาศที่ไม่สงบ lingers",
						"hindi": "पिघले हुए बर्फ के महल के खंडहर। एक बेचैन आभा छा गई।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "으스스해. 여기, 뭔가 있어.",
						"english": "It's eerie. Something's here.",
						"japanese": "不気味だ。ここに、何かいる。",
						"chinese": "真诡异。这里有东西。",
						"french": "C'est sinistre. Il y a quelque chose ici.",
						"spanish": "Es espeluznante. Hay algo aquí.",
						"vietnamese": "Thật rùng rợn. Có gì đó ở đây.",
						"thai": "มันน่าขนลุก มีบางอย่างอยู่ที่นี่",
						"hindi": "यह डरावना है। कुछ यहाँ है।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "anuk",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						4
					]
				},
				{
					"content": {
						"korean": "멈춰라. 더 이상 들어가지 마.",
						"english": "Stop. Go no further.",
						"japanese": "止まれ。それ以上入るな。",
						"chinese": "停下。别再往前走了。",
						"french": "Arrête. N'avance pas plus loin.",
						"spanish": "Detente. No vayas más lejos.",
						"vietnamese": "Dừng lại. Đừng đi xa hơn.",
						"thai": "หยุด อย่าไปไกลกว่านี้",
						"hindi": "रुको। आगे मत जाओ।"
					},
					"speaker": "anuk",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 땅은 지금, 너희가 알던 곳이 아니다.",
						"english": "This land is no longer as you knew it.",
						"japanese": "この地は今、お前たちが知る場所ではない。",
						"chinese": "这片土地，已不再是你们所熟知的地方。",
						"french": "Cette terre n'est plus celle que vous connaissiez.",
						"spanish": "Esta tierra ya no es como la conocíais.",
						"vietnamese": "Vùng đất này giờ đây không còn như các ngươi từng biết.",
						"thai": "ดินแดนนี้ไม่ใช่ที่ที่คุณรู้จักอีกต่อไปแล้ว",
						"hindi": "यह भूमि अब वैसी नहीं रही जैसी तुम जानते थे।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						4
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "anuk"
				},
				{
					"emotion": "base",
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "이 고대 문양들… 잊혀졌던 존재들이 깨어나고 있어.",
						"english": "These ancient patterns... forgotten beings are awakening.",
						"japanese": "この古代の模様…忘れ去られた存在が目覚めようとしている。",
						"chinese": "这些古老纹样……被遗忘的存在正在苏醒。",
						"french": "Ces motifs anciens... des êtres oubliés s'éveillent.",
						"spanish": "Estos patrones antiguos... seres olvidados están despertando.",
						"vietnamese": "Những hoa văn cổ xưa này... những sinh vật bị lãng quên đang thức tỉnh.",
						"thai": "ลวดลายโบราณเหล่านี้... สิ่งมีชีวิตที่ถูกลืมกำลังตื่นขึ้น",
						"hindi": "ये प्राचीन पैटर्न... भूली हुई सत्ताएँ जाग रही हैं।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그게 무슨 상관이야?",
						"english": "What does that matter?",
						"japanese": "それが何の関係がある？",
						"chinese": "那又有什么关系？",
						"french": "Qu'est-ce que ça peut faire ?",
						"spanish": "¡Qué importa eso?",
						"vietnamese": "Điều đó có quan trọng gì?",
						"thai": "แล้วมันสำคัญอะไร?",
						"hindi": "उससे क्या फ़र्क पड़ता है?"
					}
				},
				{
					"emotion": "sad",
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "그들은 아카데미 사건의 주범과 연관이 있다.",
						"english": "They are connected to the mastermind of the Academy incident.",
						"japanese": "彼らはアカデミー事件の主犯と関係がある。",
						"chinese": "他们与学院事件的主谋有关。",
						"french": "Ils sont liés au cerveau de l'incident de l'Académie.",
						"spanish": "Están relacionados con el cerebro del incidente de la Academia.",
						"vietnamese": "Chúng có liên quan đến kẻ chủ mưu của vụ án Học Viện.",
						"thai": "พวกเขาเกี่ยวข้องกับผู้บงการเบื้องหลังเหตุการณ์สถาบันฯ",
						"hindi": "वे अकादमी घटना के सरगना से जुड़े हैं।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "(움찔) 아카데미…?",
						"english": "(Flinches) The Academy...?",
						"japanese": "(びくっ) アカデミー…？",
						"chinese": "(一惊) 学院…？",
						"french": "(Sursautant) L'Académie...?",
						"spanish": "(Se estremece) ¿La Academia...?",
						"vietnamese": "(Giật mình) Học viện...?",
						"thai": "(สะดุ้ง) สถาบัน...?",
						"hindi": "(चौंककर) अकादमी...?"
					}
				},
				{
					"content": {
						"korean": "아스트리엘, 괜찮아?",
						"english": "Astriel, are you okay?",
						"japanese": "アストリエル、大丈夫？",
						"chinese": "阿斯特丽尔，你没事吧？",
						"french": "Astriel, ça va ?",
						"spanish": "Astriel, ¿estás bien?",
						"vietnamese": "Astriel, cậu không sao chứ?",
						"thai": "แอสเทรียล, คุณโอเคไหม?",
						"hindi": "एस्ट्रियल, तुम ठीक हो?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "...아무것도 아니야.",
						"english": "...It's nothing.",
						"japanese": "…何でもない。",
						"chinese": "...没什么。",
						"french": "...Ce n'est rien.",
						"spanish": "...No es nada.",
						"vietnamese": "...Không có gì.",
						"thai": "...ไม่มีอะไรหรอก",
						"hindi": "...कुछ नहीं।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "anuk",
					"spot": [
						4,
						4
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "그들의 속삭임이 너를 유혹할 거다.",
						"english": "Their whispers will tempt you.",
						"japanese": "奴らの囁きが、お前を誘惑するだろう。",
						"chinese": "他们的低语会引诱你。",
						"french": "Leurs murmures te séduiront.",
						"spanish": "Susurros te tentarán.",
						"vietnamese": "Lời thì thầm của chúng sẽ quyến rũ ngươi.",
						"thai": "เสียงกระซิบของพวกมันจะเย้ายวนเจ้า",
						"hindi": "उनकी फुसफुसाहटें तुम्हें लुभाएंगी।"
					},
					"emotion": "angry",
					"speaker": "anuk",
					"type": "speech"
				},
				{
					"content": {
						"korean": "네 안의 얼어붙은 기억을 흔들려고 할 거야.",
						"english": "They will try to stir the frozen memories within you.",
						"japanese": "お前の中の凍てついた記憶を揺さぶろうとするだろう。",
						"chinese": "他们会试图动摇你内心冰封的记忆。",
						"french": "Ils tenteront d'ébranler tes souvenirs gelés.",
						"spanish": "Intentarán agitar tus recuerdos congelados.",
						"vietnamese": "Chúng sẽ cố gắng lay động những ký ức đóng băng trong ngươi.",
						"thai": "พวกเขาจะพยายามปลุกความทรงจำที่หยุดนิ่งในตัวคุณ",
						"hindi": "वे तुम्हारी जमी हुई यादों को हिलाने की कोशिश करेंगे।"
					},
					"speaker": "anuk",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "차가운 바람을 타고 알 수 없는 속삭임이 들려왔다.",
						"english": "Unidentifiable whispers rode the cold wind.",
						"japanese": "冷たい風に乗って、正体不明の囁きが聞こえてきた。",
						"chinese": "寒风中传来未知的低语。",
						"french": "Des murmures inconnus portaient sur le vent froid.",
						"spanish": "Susurros desconocidos llegaron con el viento frío.",
						"vietnamese": "Những lời thì thầm không rõ đến theo làn gió lạnh.",
						"thai": "เสียงกระซิบที่ไม่รู้จักลอยมากับสายลมหนาว",
						"hindi": "ठंडी हवा में अज्ञात फुसफुसाहटें सुनाई दीं।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "(머리를 감싸며) 시끄러워… 사라져…",
						"english": "(Clutching head) Be quiet... Vanish...",
						"japanese": "(頭を抱えながら) うるさい…消えろ…",
						"chinese": "(抱头) 吵死了…消失吧…",
						"french": "(Se tenant la tête) Tais-toi... Disparais...",
						"spanish": "(Se agarra la cabeza) Cállense... Desaparezcan...",
						"vietnamese": "(Ôm đầu) Im đi… Biến đi…",
						"thai": "(กุมหัว) เงียบซะ... หายไปซะ...",
						"hindi": "(सिर पकड़ते हुए) चुप रहो... गायब हो जाओ..."
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아스트리엘!",
						"english": "Astriel!",
						"japanese": "アストリエル！",
						"chinese": "阿斯特丽尔！",
						"french": "Astriel !",
						"spanish": "¡Astriel!",
						"vietnamese": "Astriel!",
						"thai": "แอสเทรียล!",
						"hindi": "एस्ट्रियल!"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "anuk",
					"spot": [
						3,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "너희는 지금 위험한 길을 가고 있다.",
						"english": "You are treading a dangerous path.",
						"japanese": "お前たちは今、危険な道を歩んでいる。",
						"chinese": "你们正在走一条危险的路。",
						"french": "Vous suivez un chemin dangereux.",
						"spanish": "Están siguiendo un camino peligroso.",
						"vietnamese": "Các ngươi đang đi trên một con đường nguy hiểm.",
						"thai": "พวกเจ้ากำลังเดินบนเส้นทางที่อันตราย",
						"hindi": "तुम लोग एक खतरनाक रास्ते पर चल रहे हो।"
					}
				},
				{
					"emotion": "base",
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "숲의 존재들은 너희의 탐욕을 시험할 것이다.",
						"english": "The beings of the forest will test your greed.",
						"japanese": "森の存在がお前たちの貪欲さを試すだろう。",
						"chinese": "森林的生灵将考验你们的贪婪。",
						"french": "Les êtres de la forêt mettront votre avidité à l'épreuve.",
						"spanish": "Los seres del bosque pondrán a prueba vuestra codicia.",
						"vietnamese": "Những sinh linh của rừng sẽ thử thách lòng tham của các ngươi.",
						"thai": "สิ่งมีชีวิตแห่งพงไพรจะทดสอบความโลภของพวกเจ้า",
						"hindi": "वन के प्राणी तुम्हारे लालच को परखेंगे।"
					}
				},
				{
					"content": {
						"korean": "우리는 멈추지 않아.",
						"english": "We won't stop.",
						"japanese": "我々は止まらない。",
						"chinese": "我们不会停止。",
						"french": "Nous ne nous arrêterons pas.",
						"spanish": "No nos detendremos.",
						"vietnamese": "Chúng ta sẽ không dừng lại.",
						"thai": "เราจะไม่หยุด",
						"hindi": "हम रुकेंगे नहीं।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "(굳은 얼굴로) 이번엔 내가 막을 거야.",
						"english": "(With a resolute face) I'll stop it this time.",
						"japanese": "（固い表情で）今度こそ、私が止める。",
						"chinese": "（面色坚毅）这次，我来阻止。",
						"french": "(Avec un visage résolu) Cette fois, je l'arrêterai.",
						"spanish": "(Con rostro firme) Esta vez, yo lo detendré.",
						"vietnamese": "(Với vẻ mặt kiên quyết) Lần này, ta sẽ ngăn chặn.",
						"thai": "(ด้วยสีหน้าเด็ดเดี่ยว) ครั้งนี้ ฉันจะหยุดมันเอง",
						"hindi": "(दृढ़ चेहरे के साथ) इस बार, मैं इसे रोकूँगा।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크크크… 어리석은 인간들. 네 분노는 결국 너를 집어삼킬 것이다.",
						"english": "Heeheehee... Foolish mortals. Your rage will ultimately consume you.",
						"japanese": "ククク…愚かな人間ども。お前の怒りはいずれお前を飲み込むだろう。",
						"chinese": "呵呵呵……愚蠢的人类。你的愤怒终将吞噬你。",
						"french": "Héhéhé… Mortels insensés. Votre rage finira par vous dévorer.",
						"spanish": "Jajaja... Mortales necios. Tu ira finalmente te consumirá.",
						"vietnamese": "Khà khà khà... Những kẻ phàm trần ngu ngốc. Cơn thịnh nộ của ngươi rốt cuộc sẽ nuốt chửng ngươi.",
						"thai": "ฮ่าฮ่าฮ่า... มนุษย์ที่โง่เขลา ความโกรธของเจ้าจะกลืนกินเจ้าในที่สุด",
						"hindi": "हँसता हुआ... मूर्ख इंसानो। तुम्हारा क्रोध अंततः तुम्हें निगल जाएगा।"
					}
				},
				{
					"content": {
						"korean": "(무릎을 꿇으며) 큭… 아직…",
						"english": "(Kneeling) Ugh... Not yet...",
						"japanese": "（膝をつきながら）くっ…まだ…",
						"chinese": "（跪下）呃……还没……",
						"french": "(S'agenouillant) Ugh... Pas encore...",
						"spanish": "(Arrodillándose) Agh... Todavía no...",
						"vietnamese": "(Quỳ gối) Khụ... Vẫn chưa...",
						"thai": "(คุกเข่า) อึก... ยัง...",
						"hindi": "(घुटनों के बल गिरते हुए) उफ़... अभी तक नहीं..."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "물러서라! 아직 때가 아니다!",
						"english": "Fall back! It's not time yet!",
						"japanese": "退け！まだ時ではない！",
						"chinese": "退下！时机未到！",
						"french": "Reculez ! Ce n'est pas encore le moment !",
						"spanish": "¡Retroceded! ¡Todavía no es el momento!",
						"vietnamese": "Lùi lại! Vẫn chưa đến lúc!",
						"thai": "ถอยไป! ยังไม่ถึงเวลา!",
						"hindi": "पीछे हटो! अभी समय नहीं हुआ है!"
					}
				},
				{
					"content": {
						"korean": "아스트리엘!",
						"english": "Astriel!",
						"japanese": "アストリエル！",
						"chinese": "阿斯特里尔！",
						"french": "Astriel !",
						"spanish": "¡Astriel!",
						"vietnamese": "Astriel!",
						"thai": "แอสเทรียล!",
						"hindi": "एस्ट्रियल!"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크하하… 끝이 아니야… 너의 내면은… 이미…",
						"english": "Khahaha… It's not over… Your inner self… already…",
						"japanese": "クハハ…終わりではない…お前の内面は…既に…",
						"chinese": "哈哈哈…还没结束…你的内心…已经…",
						"french": "Hahaha… Ce n'est pas la fin… Ton for intérieur… est déjà…",
						"spanish": "Jajaja… No es el fin… Tu interior… ya…",
						"vietnamese": "Khahaha… Vẫn chưa kết thúc… Nội tâm của ngươi… đã…",
						"thai": "ฮ่าฮ่าฮ่า...นี่ยังไม่จบ...จิตใจของเจ้า...มันได้...",
						"hindi": "कहाँ-कहाँ… यह अंत नहीं है… तुम्हारा आंतरिक स्वरूप… पहले ही…"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "끝났어!",
						"english": "It's over!",
						"japanese": "終わった！",
						"chinese": "结束了！",
						"french": "C'est fini !",
						"spanish": "¡Se acabó!",
						"vietnamese": "Kết thúc rồi!",
						"thai": "จบแล้ว!",
						"hindi": "खत्म हुआ!"
					}
				},
				{
					"speaker": "anuk",
					"spot": [
						2,
						4
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "하아… 위험했다.",
						"english": "Phew... that was close.",
						"japanese": "はぁ…危なかった。",
						"chinese": "呼……好险。",
						"french": "Pfiou… C'était risqué.",
						"spanish": "Uf... Eso estuvo cerca.",
						"vietnamese": "Phù... Nguy hiểm thật.",
						"thai": "เฮ้อ... หวุดหวิดไปหน่อย",
						"hindi": "हाअ... ख़तरा था।"
					},
					"speaker": "anuk",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "하지만… 저자의 말은 마음에 걸리는군.",
						"english": "But... their words bother me.",
						"japanese": "しかし…あの者の言葉が気になる。",
						"chinese": "但是……那家伙的话让我很在意。",
						"french": "Pourtant... leurs paroles me perturbent.",
						"spanish": "Pero... sus palabras me preocupan.",
						"vietnamese": "Tuy nhiên... lời nói của kẻ đó khiến ta bận tâm.",
						"thai": "แต่...คำพูดของมันยังติดอยู่ในใจ",
						"hindi": "लेकिन... उसके शब्द मेरे मन में खटक रहे हैं।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "(가슴을 움켜쥐며) 아직… 끝나지 않았어.",
						"english": "(Clutching chest) It's... not over yet.",
						"japanese": "（胸を押さえながら）まだ…終わってない。",
						"chinese": "（捂着胸口）还没……结束。",
						"french": "(Serrant sa poitrine) Ce n'est... pas encore fini.",
						"spanish": "(Agarrándose el pecho) Todavía... no ha terminado.",
						"vietnamese": "(Ôm ngực) Vẫn chưa... kết thúc.",
						"thai": "(กุมหน้าอก) ยัง... ไม่จบ",
						"hindi": "(छाती पकड़े हुए) अभी… ख़त्म नहीं हुआ है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "얼어붙은 기억은 다시 잠들었지만, 그 흔적은 아스트리엘의 내면에 깊이 새겨졌다.",
						"english": "The frozen memories slumbered once more, but their traces were deeply etched within Astriel.",
						"japanese": "凍てついた記憶は再び眠りについたが、その痕跡はアストリエルの内面に深く刻み込まれた。",
						"chinese": "冰封的记忆再次沉睡，但其痕迹已深深地刻在阿斯特里尔的内心深处。",
						"french": "Les souvenirs gelés s'étaient rendormis, mais leurs traces étaient profondément gravées en Astriel.",
						"spanish": "Los recuerdos congelados volvieron a dormir, pero sus huellas quedaron profundamente grabadas en el interior de Astriel.",
						"vietnamese": "Những ký ức đóng băng lại chìm vào giấc ngủ, nhưng dấu vết của chúng đã khắc sâu vào nội tâm Astriel.",
						"thai": "ความทรงจำที่หยุดนิ่งได้หลับใหลลงอีกครั้ง แต่ร่องรอยของมันยังคงฝังลึกอยู่ในจิตใจของแอสเทรียล",
						"hindi": "जमी हुई यादें फिर से सो गईं, लेकिन उनके निशान एस्ट्रियल के भीतर गहरे अंकित हो गए।"
					}
				},
				{
					"content": {
						"korean": "더 큰 그림자가 다가오고 있었다.",
						"english": "A greater shadow was approaching.",
						"japanese": "より大きな影が迫っていた。",
						"chinese": "更大的阴影正在逼近。",
						"french": "Une ombre plus grande approchait.",
						"spanish": "Una sombra mayor se acercaba.",
						"vietnamese": "Một bóng tối lớn hơn đang đến gần.",
						"thai": "เงามืดที่ใหญ่กว่ากำลังคืบคลานเข้ามา",
						"hindi": "एक बड़ी परछाई आ रही थी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "유적의 가장 깊은 곳. 거대한 그림자가 일렁였다.",
						"english": "Deepest within the ruins. A colossal shadow flickered.",
						"japanese": "遺跡の最深部。巨大な影が揺らめいた。",
						"chinese": "遗迹最深处。一道巨大的黑影闪烁着。",
						"french": "Au plus profond des ruines. Une ombre colossale vacilla.",
						"spanish": "En lo más profundo de las ruinas. Una sombra colosal parpadeó.",
						"vietnamese": "Sâu thẳm nhất trong di tích. Một bóng đen khổng lồ chập chờn.",
						"thai": "ลึกที่สุดในซากปรักหักพัง เงาขนาดมหึมาสั่นไหว",
						"hindi": "खंडहरों के सबसे गहरे में। एक विशाल परछाईं झिलमिला रही थी।"
					}
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "흐흐흐… 어리석은 자들. 결국 여기까지 왔군.",
						"english": "Hehehe... Foolish mortals. You've made it this far, after all.",
						"japanese": "フフフ…愚かな者ども。結局ここまで来たか。",
						"chinese": "呵呵呵…愚蠢的家伙们。终究还是走到这里了。",
						"french": "Héhéhé… Stupides mortels. Vous êtes finalement arrivés jusqu'ici.",
						"spanish": "Jejeje… Necios. Al final habéis llegado hasta aquí.",
						"vietnamese": "Hahaha… Những kẻ ngu ngốc. Cuối cùng cũng đến được đây.",
						"thai": "ฮ่าฮ่าฮ่า... พวกคนโง่ ในที่สุดก็มาถึงที่นี่จนได้",
						"hindi": "हँसता है... मूर्ख प्राणियों। तुम आखिरकार यहाँ तक पहुँच ही गए।"
					}
				},
				{
					"content": {
						"korean": "물러서라! 이 자는 평범한 존재가 아니다!",
						"english": "Stand back! This being is no ordinary entity!",
						"japanese": "下がれ！こやつはただの存在ではない！",
						"chinese": "退下！这家伙可不是一般的存在！",
						"french": "Reculez ! Cet être n'est pas une entité ordinaire !",
						"spanish": "¡Retroceded! ¡Esta criatura no es un ser ordinario!",
						"vietnamese": "Lùi lại! Kẻ này không phải là một thực thể bình thường!",
						"thai": "ถอยไป! ผู้นี้ไม่ใช่สิ่งมีชีวิตธรรมดา!",
						"hindi": "पीछे हटो! यह कोई साधारण प्राणी नहीं है!"
					},
					"speaker": "anuk",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "(눈빛이 싸늘하게) 네가… 내 기억을 건드렸나.",
						"english": "(With cold eyes) You… touched my memories.",
						"japanese": "（冷たい眼差しで）貴様…私の記憶に触れたな。",
						"chinese": "（眼神冰冷）你…触碰了我的记忆？",
						"french": "(Avec des yeux froids) Tu… as touché mes souvenirs.",
						"spanish": "(Con la mirada fría) Tú… tocaste mis recuerdos.",
						"vietnamese": "(Với ánh mắt lạnh lẽo) Ngươi… đã chạm vào ký ức của ta sao.",
						"thai": "(ด้วยแววตาเย็นชา) เจ้า...แตะต้องความทรงจำของข้าหรือ",
						"hindi": "(ठंडी आँखों से) तुमने… मेरी यादों को छुआ है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "그 얼어붙은 분노… 좋다! 나의 힘이 될 것이다!",
						"english": "That frozen rage… Good! It shall be my power!",
						"japanese": "その凍てついた怒り…良いだろう！私の力となる！",
						"chinese": "那冻结的愤怒…好极了！它将成为我的力量！",
						"french": "Cette fureur gelée… Bien ! Elle sera ma force !",
						"spanish": "Esa furia helada… ¡Bien! ¡Será mi poder!",
						"vietnamese": "Cơn thịnh nộ đóng băng đó… Tốt! Nó sẽ trở thành sức mạnh của ta!",
						"thai": "ความโกรธเกรี้ยวที่เยือกแข็งนั้น...ดี! มันจะเป็นพลังของข้า!",
						"hindi": "वह जमी हुई क्रोध… अच्छा है! यह मेरी शक्ति बनेगा!"
					}
				}
			]
		}
	]
} as const;
