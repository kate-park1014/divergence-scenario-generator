export const scenario_snowy_frostheart_56_01 = {
	"scenario_id": "snowy_frostheart_56_01",
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
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "모든 것이 멈춘 듯한 설원이 펼쳐졌다. 한 걸음 내디딜 때마다 차가운 공기가 폐부를 찔렀다.",
						"english": "A snowy plain, where everything seemed to have stopped, stretched out. With every step, the cold air stung my lungs.",
						"japanese": "全てが止まったかのような雪原が広がっていた。一歩踏み出すたびに、冷たい空気が肺を刺した。",
						"chinese": "一片仿佛时间静止的雪原展开。每迈出一步，冰冷的空气都刺痛着肺腑。",
						"french": "Une étendue enneigée où tout semblait s'être arrêté s'étirait. À chaque pas, l'air froid me glaçait les poumons.",
						"spanish": "Se extendía una llanura nevada donde todo parecía haberse detenido. Con cada paso, el aire frío me punzaba los pulmones.",
						"vietnamese": "Một cánh đồng tuyết nơi mọi thứ dường như đã ngừng lại trải dài. Mỗi bước chân, không khí lạnh buốt đâm vào phổi.",
						"thai": "ทุ่งหิมะที่ทุกสิ่งดูเหมือนจะหยุดนิ่งได้แผ่ขยายออกไป ทุกย่างก้าว อากาศเย็นยะเยือกเสียดแทงปอด",
						"hindi": "एक बर्फीला मैदान, जहाँ सब कुछ रुक गया था, फैल गया। हर कदम पर, ठंडी हवा मेरे फेफड़ों को चुभ रही थी।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "여기가… 그 설원인가?",
						"english": "Is this... that snowy plain?",
						"japanese": "ここが… あの雪原なのか？",
						"chinese": "这里是… 那片雪原吗？",
						"french": "Est-ce... cette étendue enneigée ?",
						"spanish": "¿Es esto... esa llanura nevada?",
						"vietnamese": "Đây là… cánh đồng tuyết đó sao?",
						"thai": "นี่คือ... ทุ่งหิมะนั่นหรือ?",
						"hindi": "क्या यह... वह बर्फीला मैदान है?"
					}
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "eira",
					"type": "direction"
				},
				{
					"content": {
						"korean": "왔군. 이곳은 시간이 멈춘 곳.",
						"english": "You've arrived. This is where time has stopped.",
						"japanese": "来たか。ここは時間が止まった場所。",
						"chinese": "来了。这里是时间停止的地方。",
						"french": "Vous êtes arrivé. C'est ici que le temps s'est arrêté.",
						"spanish": "Has llegado. Este es el lugar donde el tiempo se detuvo.",
						"vietnamese": "Ngươi đã đến rồi. Đây là nơi thời gian ngừng lại.",
						"thai": "มาแล้วสินะ ที่นี่คือที่ที่กาลเวลาหยุดนิ่ง",
						"hindi": "तुम आ गए। यह वह जगह है जहाँ समय रुक गया है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "시간이… 멈췄다고?",
						"english": "Time... has stopped?",
						"japanese": "時間が… 止まっただと？",
						"chinese": "时间… 停止了？",
						"french": "Le temps... s'est arrêté ?",
						"spanish": "¿El tiempo... se detuvo?",
						"vietnamese": "Thời gian… ngừng lại sao?",
						"thai": "กาลเวลา... หยุดนิ่งหรือ?",
						"hindi": "समय... रुक गया?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "그래. 모든 것이 반복될 거다. 영원히.",
						"english": "Yes. Everything will repeat. Forever.",
						"japanese": "そうだ。全てが繰り返されるだろう。永遠に。",
						"chinese": "是的。一切都将重复。永无止境。",
						"french": "Oui. Tout se répétera. Pour toujours.",
						"spanish": "Sí. Todo se repetirá. Para siempre.",
						"vietnamese": "Đúng vậy. Mọi thứ sẽ lặp lại. Mãi mãi.",
						"thai": "ใช่ ทุกสิ่งจะซ้ำรอยไปตลอดกาล",
						"hindi": "हाँ। सब कुछ दोहराया जाएगा। हमेशा के लिए।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						3
					],
					"speaker": "eira",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "어젯밤에도… 그 아이 꿈을 꿨어.",
						"english": "Last night too... I dreamed of that child.",
						"japanese": "昨晩も… あの子の夢を見た。",
						"chinese": "昨晚也… 梦到了那个孩子。",
						"french": "Hier soir encore... j'ai rêvé de cet enfant.",
						"spanish": "Anoche también... soñé con ese niño.",
						"vietnamese": "Đêm qua tôi cũng… mơ thấy đứa bé đó.",
						"thai": "เมื่อคืนนี้ก็... ฝันเห็นเด็กคนนั้นอีกแล้ว",
						"hindi": "कल रात भी... मैंने उस बच्चे का सपना देखा।"
					},
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "무슨 소리야? 너 어제 아무 말도 없었잖아.",
						"english": "What are you talking about? You didn't say anything yesterday.",
						"japanese": "何を言ってるの？昨日何も言ってなかったじゃない。",
						"chinese": "你说什么？你昨天什么也没说啊。",
						"french": "De quoi tu parles ? Tu n'as rien dit hier.",
						"spanish": "¿De qué hablas? Ayer no dijiste nada.",
						"vietnamese": "Cậu nói gì vậy? Hôm qua cậu có nói gì đâu.",
						"thai": "พูดอะไรน่ะ? เมื่อวานเธอก็ไม่ได้พูดอะไรนี่นา",
						"hindi": "क्या कह रहे हो? तुमने कल कुछ नहीं कहा।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "내가… 말 안 했어?",
						"english": "I... didn't say anything?",
						"japanese": "私が… 言わなかった？",
						"chinese": "我… 没说吗？",
						"french": "Je... n'ai rien dit ?",
						"spanish": "¿Yo... no lo dije?",
						"vietnamese": "Tôi… chưa nói ư?",
						"thai": "ฉัน… ไม่ได้พูดเหรอ?",
						"hindi": "मैंने… नहीं कहा?"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "기억은 왜곡되고, 반복될 거야. 너희만 느끼는 게 아니다.",
						"english": "Memories will distort and repeat. You are not the only ones who feel it.",
						"japanese": "記憶は歪められ、繰り返されるだろう。お前たちだけが感じているのではない。",
						"chinese": "记忆会被扭曲，然后重复。不只是你们有这种感觉。",
						"french": "Les souvenirs se distordront et se répéteront. Vous n'êtes pas les seuls à le ressentir.",
						"spanish": "Los recuerdos se distorsionarán y se repetirán. No sois los únicos que lo sienten.",
						"vietnamese": "Ký ức sẽ bị bóp méo và lặp lại. Không chỉ có các ngươi cảm thấy điều đó.",
						"thai": "ความทรงจำจะบิดเบือนและวนซ้ำ ไม่ใช่แค่พวกเจ้าที่รู้สึกได้",
						"hindi": "यादें विकृत होंगी और दोहराई जाएंगी। यह केवल तुम ही नहीं हो जो इसे महसूस कर रहे हो।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "우리가… 뭔가 잊고 있는 건가?",
						"english": "Are we... forgetting something?",
						"japanese": "私たちは… 何か忘れているのか？",
						"chinese": "我们… 是不是忘了什么？",
						"french": "Est-ce que nous... oublions quelque chose ?",
						"spanish": "¿Estamos... olvidando algo?",
						"vietnamese": "Chúng ta… có đang quên điều gì đó không?",
						"thai": "พวกเรา… ลืมอะไรไปหรือเปล่า?",
						"hindi": "क्या हम... कुछ भूल रहे हैं?"
					}
				},
				{
					"content": {
						"korean": "이곳의 시간은, 너희의 기억조차 가둔다. 벗어나야 해.",
						"english": "Time here traps even your memories. You must break free.",
						"japanese": "ここの時間は、お前たちの記憶さえも閉じ込める。ここから抜け出さなければならない。",
						"chinese": "这里的时间，甚至会囚禁你们的记忆。你们必须摆脱它。",
						"french": "Le temps ici emprisonne même vos souvenirs. Vous devez vous libérer.",
						"spanish": "El tiempo aquí atrapa incluso vuestros recuerdos. Debéis escapar.",
						"vietnamese": "Thời gian ở đây giam cầm cả ký ức của các ngươi. Phải thoát ra thôi.",
						"thai": "เวลาที่นี่กักขังแม้กระทั่งความทรงจำของพวกเจ้า ต้องหลุดพ้นไปให้ได้",
						"hindi": "यहां का समय तुम्हारी यादों को भी कैद करता है। तुम्हें आज़ाद होना होगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "얼어붙은 비석에 희미한 문양이 새겨져 있었다. 고대의 기록인 듯했다.",
						"english": "Faint patterns were etched on the frozen monument. They seemed to be ancient records.",
						"japanese": "凍てついた石碑には、かすかな紋様が刻まれていた。古代の記録のようだった。",
						"chinese": "冰冷的石碑上刻着模糊的纹路。似乎是古代的记载。",
						"french": "De faibles motifs étaient gravés sur le monument gelé. Ils semblaient être des registres anciens.",
						"spanish": "Débiles patrones estaban grabados en el monumento congelado. Parecían ser registros antiguos.",
						"vietnamese": "Những hoa văn mờ nhạt được khắc trên tấm bia đá đóng băng. Dường như đó là những ghi chép cổ xưa.",
						"thai": "ลวดลายจางๆ สลักอยู่บนศิลาเย็นยะเยือก ดูเหมือนเป็นบันทึกโบราณ",
						"hindi": "जमे हुए स्मारक पर धुंधले पैटर्न खुदे हुए थे। वे प्राचीन अभिलेख प्रतीत होते थे।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이건… 무슨 글씨지?",
						"english": "What kind of writing is this...?",
						"japanese": "これは… 何の文字だ？",
						"chinese": "这… 是什么文字？",
						"french": "C'est... quelle écriture ?",
						"spanish": "¿Qué... tipo de escritura es esta?",
						"vietnamese": "Đây là… loại chữ gì vậy?",
						"thai": "นี่มัน… ตัวอักษรอะไร?",
						"hindi": "यह... किस तरह की लिखावट है?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "오래된 룬 문자. 이 땅의 시작을 알리는 비술의 파편.",
						"english": "Ancient runes. Fragments of arcana marking the genesis of this land.",
						"japanese": "古きルーン文字。この地の始まりを告げる秘術の断片。",
						"chinese": "古老的符文。是昭示这片土地起源的秘术碎片。",
						"french": "D'anciennes runes. Des fragments d'arcanes marquant la genèse de cette terre.",
						"spanish": "Runas antiguas. Fragmentos de arcanos que marcan la génesis de esta tierra.",
						"vietnamese": "Những ký tự rune cổ xưa. Những mảnh ghép của bí thuật báo hiệu sự khởi đầu của vùng đất này.",
						"thai": "อักษรรูนโบราณ. ชิ้นส่วนวิชาลับที่บอกเล่าจุดเริ่มต้นของดินแดนแห่งนี้",
						"hindi": "प्राचीन रुनिक अक्षर। इस भूमि के उद्भव को चिह्नित करने वाले रहस्य के टुकड़े।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "시작이라고?",
						"english": "The beginning?",
						"japanese": "始まりだと？",
						"chinese": "开始？",
						"french": "Le début ?",
						"spanish": "¿El principio?",
						"vietnamese": "Khởi đầu ư?",
						"thai": "จุดเริ่มต้นเหรอ?",
						"hindi": "शुरुआत?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "그래. 모든 반복은 여기서부터. 저주받은 시간의 흔적.",
						"english": "Yes. All repetitions stem from here. Traces of cursed time.",
						"japanese": "そうだ。すべての繰り返しはここからだ。呪われた時間の痕跡。",
						"chinese": "是的。所有重复都始于此处。被诅咒的时间的痕迹。",
						"french": "Oui. Toutes les répétitions partent d'ici. Les traces d'un temps maudit.",
						"spanish": "Sí. Todas las repeticiones parten de aquí. Rastros de un tiempo maldito.",
						"vietnamese": "Đúng vậy. Mọi sự lặp lại đều bắt nguồn từ đây. Dấu vết của thời gian bị nguyền rủa.",
						"thai": "ใช่แล้ว. ทุกการวนซ้ำล้วนเริ่มจากที่นี่. ร่องรอยแห่งกาลเวลาที่ถูกสาป",
						"hindi": "हाँ। सभी दोहराव यहीं से शुरू होते हैं। शापित समय के निशान।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "문양은 잠시 빛나더니 이내 얼음 속으로 스며들듯 사라졌다.",
						"english": "The emblem glowed briefly, then faded into the ice.",
						"japanese": "文様は一時的に輝き、やがて氷の中に溶け込むように消えた。",
						"chinese": "图案短暂地闪耀后，便渗入冰中消失了。",
						"french": "L'emblème a brillé un instant, puis a disparu, comme absorbé par la glace.",
						"spanish": "El emblema brilló brevemente y luego se desvaneció, como si se absorbiera en el hielo.",
						"vietnamese": "Biểu tượng lóe sáng một lát rồi tan biến vào trong băng.",
						"thai": "ลวดลายส่องประกายชั่วครู่ แล้วจางหายไปราวกับถูกดูดซับเข้าไปในน้ำแข็ง",
						"hindi": "प्रतीक क्षण भर के लिए चमका, फिर बर्फ़ में घुल गया जैसे समा गया हो।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						2
					],
					"speaker": "eira",
					"type": "direction"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "점점 더 깊숙이 들어가는 것 같아.",
						"english": "We seem to be going deeper and deeper.",
						"japanese": "どんどん奥深くへと進んでいるようだ。",
						"chinese": "感觉我们正越来越深入。",
						"french": "On dirait qu'on s'enfonce de plus en plus profondément.",
						"spanish": "Parece que estamos yendo cada vez más profundo.",
						"vietnamese": "Có vẻ chúng ta đang đi sâu hơn nữa.",
						"thai": "ดูเหมือนเรากำลังจะเข้าไปลึกขึ้นเรื่อยๆ",
						"hindi": "ऐसा लगता है कि हम और गहरे जा रहे हैं।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이미 돌아갈 길은 없어. 선택은 끝났다.",
						"english": "There's no turning back now. The choice has been made.",
						"japanese": "もう引き返す道はない。選択は終わった。",
						"chinese": "已经没有回头路了。选择已定。",
						"french": "Il n'y a plus de retour possible. Le choix est fait.",
						"spanish": "Ya no hay vuelta atrás. La elección está hecha.",
						"vietnamese": "Không còn đường quay lại. Lựa chọn đã kết thúc.",
						"thai": "ไม่มีทางย้อนกลับแล้ว การเลือกได้สิ้นสุดลง",
						"hindi": "अब लौटने का कोई रास्ता नहीं है। चुनाव हो चुका है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "어쩌면… 처음부터 이랬을지도.",
						"english": "Perhaps... it was always meant to be this way.",
						"japanese": "もしかしたら…最初からこうだったのかもしれない。",
						"chinese": "也许……从一开始就是这样。",
						"french": "Peut-être... que c'était ainsi depuis le début.",
						"spanish": "Quizás... siempre fue así desde el principio.",
						"vietnamese": "Có lẽ... từ đầu đã là như vậy.",
						"thai": "บางที...มันอาจจะเป็นแบบนี้มาตั้งแต่แรกแล้ว",
						"hindi": "शायद... यह शुरू से ही ऐसा था।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "멈춰버린 시간 속에서, 너희는 깨어나야 한다. 진실을 찾아.",
						"english": "In frozen time, you must awaken. Find the truth.",
						"japanese": "止まった時間の中で、君たちは目覚めなければならない。真実を探して。",
						"chinese": "在停滞的时间里，你们必须醒来。去寻找真相。",
						"french": "Dans le temps figé, vous devez vous éveiller. Trouvez la vérité.",
						"spanish": "En el tiempo detenido, debéis despertar. Encontrad la verdad.",
						"vietnamese": "Trong dòng thời gian ngừng đọng, các ngươi phải tỉnh dậy. Tìm kiếm sự thật.",
						"thai": "ในห้วงเวลาที่หยุดนิ่ง พวกเจ้าต้องตื่นขึ้น ค้นหาความจริง",
						"hindi": "रुके हुए समय में, तुम्हें जागना होगा। सच को खोजो।"
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "발걸음마다 얼음이 깨지는 소리가 유난히 크게 울렸다. 마치 경고처럼.",
						"english": "With every step, the sound of cracking ice echoed unusually loud. Like a warning.",
						"japanese": "一歩ごとに、氷が砕ける音がひときわ大きく響いた。まるで警告のように。",
						"chinese": "每一步，冰裂的声音都异常响亮，仿佛是警告。",
						"french": "À chaque pas, le craquement de la glace résonnait étrangement fort. Comme un avertissement.",
						"spanish": "Con cada paso, el sonido del hielo al romperse resonaba inusualmente fuerte. Como una advertencia.",
						"vietnamese": "Mỗi bước chân, tiếng băng nứt vỡ vang vọng lớn lạ thường. Như một lời cảnh báo.",
						"thai": "ทุกย่างก้าว เสียงน้ำแข็งแตกดังสนั่นเป็นพิเศษ ราวกับเป็นคำเตือน",
						"hindi": "हर कदम पर, बर्फ़ के टूटने की आवाज़ असामान्य रूप से ज़ोर से गूँज रही थी। जैसे एक चेतावनी।"
					},
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "정체 모를 적은 비명을 지르며 얼음 조각으로 부서졌다.",
						"english": "The unknown enemy screamed and shattered into ice shards.",
						"japanese": "「正体不明の敵は悲鳴を上げ、氷の破片となって砕け散った。」",
						"chinese": "不知名的敌人尖叫着，碎裂成冰块。",
						"french": "L'ennemi inconnu hurla et se brisa en éclats de glace.",
						"spanish": "El enemigo desconocido gritó y se hizo pedazos de hielo.",
						"vietnamese": "Kẻ địch vô danh hét lên và vỡ tan thành những mảnh băng.",
						"thai": "ศัตรูนิรนามกรีดร้องและแตกกระจายกลายเป็นเศษน้ำแข็ง",
						"hindi": "अज्ञात शत्रु चीखा और बर्फ के टुकड़ों में बिखर गया।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 헛된 몸부림이다… 이 루프는… 영원히…",
						"english": "Ugh... It's a futile struggle... This loop is... eternal...",
						"japanese": "「くっ… 無駄なあがきだ… このループは… 永遠に…」",
						"chinese": "呃……这是徒劳的挣扎……这个循环是……永恒的……",
						"french": "Ugh... C'est une lutte futile... Cette boucle est... éternelle...",
						"spanish": "Ugh... Es una lucha inútil... Este bucle es... eterno...",
						"vietnamese": "Ư... Thật là một cuộc đấu tranh vô ích... Vòng lặp này... vĩnh cửu...",
						"thai": "อึก... มันเป็นการต่อสู้ที่เปล่าประโยชน์... วงวนนี้... ชั่วนิรันดร์...",
						"hindi": "उफ़... यह एक व्यर्थ का संघर्ष है... यह लूप... शाश्वत है..."
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "끝난 건가? 드디어…!",
						"english": "Is it over? Finally...!",
						"japanese": "「終わったのか？ついに…！」",
						"chinese": "结束了吗？终于……！",
						"french": "C'est fini ? Enfin... !",
						"spanish": "¿Se acabó? ¡Por fin...!",
						"vietnamese": "Kết thúc rồi sao? Cuối cùng thì...!",
						"thai": "จบแล้วเหรอ? ในที่สุดก็...!",
						"hindi": "क्या यह खत्म हो गया? आखिरकार...!"
					}
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						3
					],
					"type": "direction",
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아니. 이건 시작에 불과해. 진짜 비극은 지금부터.",
						"english": "No. This is just the beginning. The real tragedy starts now.",
						"japanese": "「いや。これは始まりに過ぎない。本当の悲劇はこれからだ。」",
						"chinese": "不。这只是开始。真正的悲剧从现在才开始。",
						"french": "Non. Ce n'est que le début. La vraie tragédie commence maintenant.",
						"spanish": "No. Esto es solo el principio. La verdadera tragedia empieza ahora.",
						"vietnamese": "Không. Đây chỉ là khởi đầu thôi. Bi kịch thật sự bắt đầu từ bây giờ.",
						"thai": "ไม่ นี่เป็นแค่จุดเริ่มต้น โศกนาฏกรรมที่แท้จริงกำลังจะเริ่มขึ้นตอนนี้",
						"hindi": "नहीं। यह तो बस शुरुआत है। असली त्रासदी अब शुरू होती है।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "진정한 루프의 근원은 아직 멀리 있다. 더 깊은 곳에.",
						"english": "The true source of the loop is still far away. Deeper within.",
						"japanese": "「真のループの根源はまだ遠い。もっと深い場所に。」",
						"chinese": "循环的真正根源还在很远的地方。更深处。",
						"french": "La véritable source de la boucle est encore lointaine. Plus profondément.",
						"spanish": "La verdadera fuente del bucle aún está lejos. Más profundo.",
						"vietnamese": "Nguồn gốc thực sự của vòng lặp vẫn còn ở rất xa. Sâu hơn nữa.",
						"thai": "ต้นกำเนิดที่แท้จริงของวงวนยังอยู่ไกลออกไป ลึกกว่านั้น",
						"hindi": "लूप का असली स्रोत अभी भी बहुत दूर है। और गहराई में।"
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"content": {
						"korean": "잠시의 승리 뒤에 더 깊은 미스터리가 탐험대를 기다리고 있었다. 끝없는 설원의 저주가.",
						"english": "Behind a temporary victory, a deeper mystery awaited the expedition. The curse of the endless snowfield.",
						"japanese": "「一時的な勝利の裏には、探検隊を待ち受けるさらなる深き謎があった。終わりのない雪原の呪いが。」",
						"chinese": "短暂的胜利之后，更深的谜团等待着探险队。无尽雪原的诅咒。",
						"french": "Derrière une victoire temporaire, un mystère plus profond attendait l'expédition. La malédiction du champ de neige éternel.",
						"spanish": "Detrás de una victoria temporal, un misterio más profundo esperaba a la expedición. La maldición del campo de nieve interminable.",
						"vietnamese": "Đằng sau một chiến thắng tạm thời, một bí ẩn sâu sắc hơn đang chờ đợi đoàn thám hiểm. Lời nguyền của cánh đồng tuyết vô tận.",
						"thai": "เบื้องหลังชัยชนะชั่วคราว มีปริศนาที่ลึกซึ้งกว่ารอคอยคณะสำรวจอยู่ คำสาปแห่งทุ่งหิมะอันไม่มีที่สิ้นสุด",
						"hindi": "एक अस्थायी जीत के पीछे, एक गहरा रहस्य अभियान का इंतजार कर रहा था। अंतहीन बर्फीले मैदान का अभिशाप।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 서서히 모습을 드러냈다. 온몸을 휘감은 냉기가 주변의 얼음을 더욱 단단하게 만들었다.",
						"english": "A colossal shadow slowly emerged. The cold embracing its body made the surrounding ice even harder.",
						"japanese": "巨大な影がゆっくりと姿を現した。その身を包む冷気が、周囲の氷をさらに硬くした。",
						"chinese": "一个巨大的身影缓缓显现。缠绕其身的寒气使得周围的冰层更加坚硬。",
						"french": "Une ombre colossale émergea lentement. Le froid qui l'enveloppait rendait la glace environnante encore plus dure.",
						"spanish": "Una sombra colosal emergió lentamente. El frío que envolvía su cuerpo hacía que el hielo circundante se volviera aún más duro.",
						"vietnamese": "Một cái bóng khổng lồ dần dần xuất hiện. Hơi lạnh bao trùm toàn thân khiến băng xung quanh càng thêm cứng rắn.",
						"thai": "เงาขนาดมหึมาค่อยๆ ปรากฏขึ้น ความเย็นที่ห่อหุ้มร่างทำให้ผืนน้ำแข็งรอบข้างแข็งแกร่งยิ่งขึ้น",
						"hindi": "एक विशाल छाया धीरे-धीरे प्रकट हुई। उसके शरीर को घेरे हुए ठंडक ने आस-पास की बर्फ़ को और भी कठोर बना दिया।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "침입자들인가. 이곳은 영원히 닫혀 있다.",
						"english": "Intruders? This place is sealed forever.",
						"japanese": "侵入者か。ここは永遠に閉ざされている。",
						"chinese": "闯入者吗。这里永远封闭。",
						"french": "Des intrus ? Cet endroit est scellé pour toujours.",
						"spanish": "¿Intrusos? Este lugar está sellado para siempre.",
						"vietnamese": "Kẻ xâm nhập ư. Nơi này đã bị đóng kín vĩnh viễn.",
						"thai": "พวกผู้บุกรุกรึ? ที่นี่ถูกปิดผนึกไว้ชั่วนิรันดร์",
						"hindi": "घुसपैठिए हो? यह जगह हमेशा के लिए बंद है।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "누구냐! 정체를 밝혀!",
						"english": "Who are you! Reveal yourself!",
						"japanese": "貴様は何者だ！正体を明かせ！",
						"chinese": "你是谁！亮明身份！",
						"french": "Qui êtes-vous ! Révélez votre identité !",
						"spanish": "¡Quién eres! ¡Revela tu identidad!",
						"vietnamese": "Ngươi là ai! Hãy lộ diện!",
						"thai": "เจ้าเป็นใคร! จงเผยตัวตนออกมา!",
						"hindi": "कौन हो तुम! अपनी पहचान बताओ!"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "나의 이름은 중요치 않다. 너희는 그저, 이 루프의 일부가 될 뿐.",
						"english": "My name is unimportant. You will merely become part of this loop.",
						"japanese": "私の名は重要ではない。お前たちはただ、このループの一部となるだけだ。",
						"chinese": "我的名字不重要。你们不过是，这个循环的一部分。",
						"french": "Mon nom n'a pas d'importance. Vous ne ferez que devenir une partie de cette boucle.",
						"spanish": "Mi nombre no importa. Simplemente seréis parte de este bucle.",
						"vietnamese": "Tên ta không quan trọng. Các ngươi chỉ là, một phần của vòng lặp này mà thôi.",
						"thai": "ชื่อของข้าไม่สำคัญ พวกเจ้าแค่จะกลายเป็นส่วนหนึ่งของวงวนนี้เท่านั้น",
						"hindi": "मेरा नाम मायने नहीं रखता। तुम बस, इस लूप का हिस्सा बन जाओगे।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 말은 못 믿어! 우린 널 막을 거야!",
						"english": "I don't believe you! We'll stop you!",
						"japanese": "「その言葉は信じない！私たちがお前を止める！」",
						"chinese": "我不会相信你！我们会阻止你！",
						"french": "Je ne te crois pas ! Nous t'arrêterons !",
						"spanish": "¡No te creo! ¡Te detendremos!",
						"vietnamese": "Tôi không tin lời ngươi! Chúng ta sẽ ngăn ngươi lại!",
						"thai": "ฉันไม่เชื่อหรอก! พวกเราจะหยุดแกเอง!",
						"hindi": "मैं तुम्हारी बात नहीं मानता! हम तुम्हें रोकेंगे!"
					},
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "날카로운 얼음 파편이 탐험대의 시야를 가렸다. 전장은 순식간에 차가운 감옥으로 변했다.",
						"english": "Sharp ice shards obscured the expedition's vision. The battlefield instantly transformed into a cold prison.",
						"japanese": "「鋭い氷の破片が探検隊の視界を遮った。戦場は瞬く間に冷たい監獄へと変貌した。」",
						"chinese": "锋利的冰屑遮蔽了探险队的视线。战场瞬间变成了一座寒冷的监狱。",
						"french": "De vifs éclats de glace obscurcirent la vision de l'expédition. Le champ de bataille se transforma instantanément en une prison froide.",
						"spanish": "Afilados fragmentos de hielo oscurecieron la visión de la expedición. El campo de batalla se transformó instantáneamente en una fría prisión.",
						"vietnamese": "Những mảnh băng sắc nhọn che khuất tầm nhìn của đoàn thám hiểm. Chiến trường ngay lập tức biến thành một nhà tù lạnh giá.",
						"thai": "เศษน้ำแข็งแหลมคมบดบังทัศนวิสัยของคณะสำรวจ สนามรบเปลี่ยนเป็นคุกน้ำแข็งในพริบตา",
						"hindi": "तेज बर्फ के टुकड़े अभियान की दृष्टि को बाधित कर गए। युद्धक्षेत्र तुरंत एक ठंडी जेल में बदल गया।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "포기해라. 너희는 이 얼음 속에서 영원히 반복될 운명.",
						"english": "Give up. You are fated to repeat endlessly within this ice.",
						"japanese": "「諦めろ。お前たちはこの氷の中で永遠に繰り返される運命だ。」",
						"chinese": "放弃吧。你们注定要在这冰中永远重复。",
						"french": "Abandonnez. Vous êtes destinés à vous répéter éternellement dans cette glace.",
						"spanish": "Ríndete. Estáis destinados a repetir interminablemente dentro de este hielo.",
						"vietnamese": "Hãy bỏ cuộc đi. Các ngươi định mệnh sẽ lặp lại vô tận trong băng giá này.",
						"thai": "ยอมแพ้ซะ พวกแกถูกกำหนดให้วนเวียนอยู่ในน้ำแข็งนี้ไปตลอดกาล",
						"hindi": "हार मान लो। तुम इस बर्फ में हमेशा के लिए दोहराए जाने के लिए किस्मत में हो।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아니! 아직… 끝나지 않았어! 우린 포기 안 해!",
						"english": "No! It's not over yet! We won't give up!",
						"japanese": "「いや！まだ…終わっていない！私たちは諦めない！」",
						"chinese": "不！还没有……结束！我们不会放弃！",
						"french": "Non ! Ce n'est pas encore fini ! Nous n'abandonnerons pas !",
						"spanish": "¡No! ¡Aún no ha terminado! ¡No nos rendiremos!",
						"vietnamese": "Không! Vẫn chưa... kết thúc! Chúng tôi sẽ không từ bỏ!",
						"thai": "ไม่! ยังไม่...จบ! พวกเราไม่ยอมแพ้!",
						"hindi": "नहीं! यह अभी तक... खत्म नहीं हुआ! हम हार नहीं मानेंगे!"
					}
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						3
					],
					"type": "direction",
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "일어나라. 기억을 되찾고, 다시 시작할 시간이다. 이 비극을 끝낼.",
						"english": "Wake up. It's time to regain your memories and start anew. To end this tragedy.",
						"japanese": "目覚めなさい。記憶を取り戻し、再び始める時が来た。この悲劇を終わらせるために。",
						"chinese": "醒来吧。是时候找回记忆，重新开始，结束这场悲剧了。",
						"french": "Réveille-toi. Il est temps de retrouver tes souvenirs et de recommencer. Pour mettre fin à cette tragédie.",
						"spanish": "Despierta. Es hora de recuperar tus recuerdos y empezar de nuevo. Para poner fin a esta tragedia.",
						"vietnamese": "Tỉnh dậy đi. Đã đến lúc lấy lại ký ức và bắt đầu lại. Để chấm dứt bi kịch này.",
						"thai": "ตื่นขึ้นมาได้แล้ว ถึงเวลาที่จะได้ความทรงจำกลับคืนมาและเริ่มต้นใหม่อีกครั้ง เพื่อจบเรื่องราวอันน่าเศร้าโศกนี้",
						"hindi": "उठो। अपनी याददाश्त वापस पाने और फिर से शुरू करने का समय आ गया है। इस त्रासदी को समाप्त करने के लिए।"
					},
					"speaker": "eira",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"끝없이 펼쳐진 설원. 모든 것이 얼어붙은 시간의 감옥.",
			"우리는 그곳에 발을 들였다. 낯선 감각, 반복되는 환영.",
			"이 비극은 영원히 끝나지 않을 것만 같았다.",
			"하지만 진실은 언제나 얼음 아래 숨겨져 있었다. 우리가 깨달아야 할."
		],
		"english": [
			"An endless snowy plain. A time prison where everything is frozen.",
			"We stepped into it. Unfamiliar sensations, recurring illusions.",
			"This tragedy seemed like it would never end.",
			"But the truth was always hidden beneath the ice. The one we needed to realize."
		],
		"japanese": [
			"果てしなく広がる雪原。全てが凍り付いた時間の牢獄。",
			"我々は足を踏み入れた。見慣れない感覚、繰り返される幻影。",
			"この悲劇は永遠に終わらないかのように思われた。",
			"しかし真実は常に氷の下に隠されていた。我々が気づくべき。"
		],
		"chinese": [
			"一望无际的雪原。一切都被冻结的时间牢狱。",
			"我们踏入其中。陌生的感觉，重复的幻影。",
			"这场悲剧仿佛永远不会结束。",
			"但真相总是隐藏在冰面之下。我们必须去揭示。"
		],
		"french": [
			"Une étendue enneigée infinie. Une prison temporelle où tout est figé.",
			"Nous y avons mis les pieds. Des sensations étranges, des visions récurrentes.",
			"Cette tragédie semblait ne jamais devoir finir.",
			"Mais la vérité était toujours cachée sous la glace. Celle que nous devions découvrir."
		],
		"spanish": [
			"Una llanura nevada interminable. Una prisión de tiempo donde todo está congelado.",
			"Entramos en él. Sensaciones extrañas, ilusiones recurrentes.",
			"Esta tragedia parecía que nunca terminaría.",
			"Pero la verdad siempre estuvo oculta bajo el hielo. La que teníamos que descubrir."
		],
		"vietnamese": [
			"Cánh đồng tuyết trải dài vô tận. Một nhà tù thời gian nơi mọi thứ bị đóng băng.",
			"Chúng tôi đã đặt chân vào đó. Cảm giác lạ lẫm, ảo ảnh lặp đi lặp lại.",
			"Bi kịch này dường như sẽ không bao giờ kết thúc.",
			"Nhưng sự thật luôn ẩn giấu dưới lớp băng. Điều mà chúng ta phải nhận ra."
		],
		"thai": [
			"ทุ่งหิมะอันกว้างใหญ่ไร้ที่สิ้นสุด คุกแห่งกาลเวลาที่ทุกสิ่งถูกแช่แข็ง",
			"เราได้ก้าวเข้าไปในนั้น ความรู้สึกแปลกใหม่ ภาพหลอนที่เกิดขึ้นซ้ำๆ",
			"โศกนาฏกรรมนี้ดูเหมือนจะไม่มีวันสิ้นสุด",
			"แต่ความจริงถูกซ่อนอยู่ใต้ผืนน้ำแข็งเสมอ สิ่งที่เราต้องตระหนัก"
		],
		"hindi": [
			"एक अंतहीन बर्फीला मैदान। एक समय का कारावास जहाँ सब कुछ जम गया है।",
			"हमने उसमें कदम रखा। अपरिचित संवेदनाएं, बार-बार आने वाले भ्रम।",
			"यह त्रासदी कभी खत्म नहीं होगी ऐसा लग रहा था।",
			"लेकिन सच्चाई हमेशा बर्फ के नीचे छिपी थी। जिसे हमें जानना था।"
		]
	}
} as const;
