export const scenario_modern_aegis_47_01 = {
	"scenario_id": "modern_aegis_47_01",
	"order": 1,
	"act": "intro",
	"theme": "modern",
	"actors": {
		"zoe": {
			"id": "mon_ad3762e0-13f3-44a1-9b84-4ff67136858e",
			"name": {
				"korean": "조이",
				"english": "Zoe",
				"japanese": "ゾーイ",
				"chinese": "佐伊",
				"french": "Zoé",
				"spanish": "Zoe",
				"vietnamese": "Zoe",
				"thai": "โซอี้",
				"hindi": "ज़ोई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/75dcfb0c-33e3-4208-4205-fb09d4abb100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a7d0ebe1-73dc-4683-1338-32be2f7fac00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"도시의 번화가. 휘황찬란한 빛 속에 숨겨진 어둠.",
			"새롭게 세워진 조형물, '잃어버린 유산'.",
			"그 아름다움 뒤에는 설명할 수 없는 불안감이 깃들어 있었다.",
			"마치 오래된 맹세가, 도시의 심장에서 다시 울리는 것처럼."
		],
		"english": [
			"The city's bustling streets. Darkness hidden within dazzling lights.",
			"A newly erected monument, 'Lost Heritage'.",
			"Behind its beauty lay an inexplicable unease.",
			"As if an ancient vow echoed once more from the city's heart."
		],
		"japanese": [
			"都会の賑やかな通り。煌びやかな光の中に潜む闇。",
			"新しく建てられた造形物、『失われた遺産』。",
			"その美しさの裏には、説明しがたい不安感が宿っていた。",
			"まるで古の誓いが、都市の心臓で再び響き渡るかのように。"
		],
		"chinese": [
			"城市的繁华街区。璀璨灯火下隐藏的黑暗。",
			"新竖立的雕塑，'失落的遗产'。",
			"在其美丽背后，隐藏着一种莫名的不安。",
			"仿佛古老的誓言，在城市的心脏再次回响。"
		],
		"french": [
			"Les rues animées de la ville. L'obscurité cachée dans les lumières éblouissantes.",
			"Une sculpture nouvellement érigée, 'L'Héritage Perdu'.",
			"Derrière sa beauté, une inquiétude inexplicable résidait.",
			"Comme si un ancien serment résonnait à nouveau depuis le cœur de la ville."
		],
		"spanish": [
			"Las calles bulliciosas de la ciudad. Oscuridad oculta entre luces deslumbrantes.",
			"Una escultura recién erigida, 'El Legado Perdido'.",
			"Tras su belleza, residía una inquietud inexplicable.",
			"Como si un antiguo juramento resonara de nuevo desde el corazón de la ciudad."
		],
		"vietnamese": [
			"Phố thị sầm uất. Bóng tối ẩn mình trong ánh đèn rực rỡ.",
			"Một công trình mới, 'Di Sản Đã Mất'.",
			"Đằng sau vẻ đẹp ấy là một sự bất an khó tả.",
			"Cứ như một lời thề cổ xưa lại vang vọng từ trái tim thành phố."
		],
		"thai": [
			"ถนนที่พลุกพล่านของเมือง ความมืดที่ซ่อนอยู่ในแสงไฟระยิบระยับ",
			"ประติมากรรมที่สร้างขึ้นใหม่ 'มรดกที่หายไป'",
			"เบื้องหลังความงามนั้น มีความรู้สึกไม่สบายใจที่อธิบายไม่ได้ซ่อนอยู่",
			"ราวกับคำสาบานเก่าแก่ที่ดังก้องขึ้นมาอีกครั้งจากใจกลางเมือง"
		],
		"hindi": [
			"शहर की व्यस्त सड़कें। चकाचौंध रोशनी में छिपा अंधेरा।",
			"एक नई स्थापित मूर्ति, 'खोई हुई विरासत'।",
			"इसकी सुंदरता के पीछे एक अकथनीय बेचैनी छिपी थी।",
			"जैसे कोई प्राचीन शपथ, शहर के दिल से फिर गूंज रही हो।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "빌딩 로비. 새로 세워진 조형물이 고고하게 서 있다.",
						"english": "Building lobby. A newly erected monument stands proudly.",
						"japanese": "ビルロビー。新しく建てられた造形物が毅然と立っている。",
						"chinese": "大楼大堂。新竖立的雕塑傲然矗立。",
						"french": "Hall du bâtiment. Une sculpture nouvellement érigée se dresse fièrement.",
						"spanish": "Vestíbulo del edificio. Una escultura recién erigida se alza con solemnidad.",
						"vietnamese": "Hành lang tòa nhà. Một công trình mới sừng sững đứng đó.",
						"thai": "ล็อบบี้อาคาร. ประติมากรรมที่สร้างขึ้นใหม่ยืนตระหง่าน",
						"hindi": "इमारत का लॉबी। एक नई स्थापित मूर्ति शान से खड़ी है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "'잃어버린 유산'? 이름 한번 기묘하네.",
						"english": "'Lost Heritage'? What a peculiar name.",
						"japanese": "『失われた遺産』？なんとも奇妙な名前だね。",
						"chinese": "'失落的遗产'？真是个奇怪的名字。",
						"french": "'L'Héritage Perdu' ? Quel nom étrange.",
						"spanish": "¿'El Legado Perdido'? Qué nombre tan peculiar.",
						"vietnamese": "'Di Sản Đã Mất'? Cái tên nghe lạ thật.",
						"thai": "'มรดกที่หายไป' ? ชื่อแปลกจริง ๆ",
						"hindi": "'खोई हुई विरासत'? कितना अजीब नाम है।"
					},
					"speaker": "character_any"
				},
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "zoe"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "(조형물을 불안하게 바라보며) 이상해요. 이 조형물… 뭔가 섬뜩한 기운이 느껴져요.",
						"english": "(Looking uneasily at the monument) It's strange. This monument... I feel an eerie aura from it.",
						"japanese": "(造形物を不安げに見つめながら) おかしい。この造形物…何か不気味な気配がする。",
						"chinese": "(不安地看着雕塑) 很奇怪。这个雕塑…我感觉到一股阴森的气息。",
						"french": "(Regardant le monument avec inquiétude) C'est étrange. Cette sculpture... je ressens une aura sinistre.",
						"spanish": "(Mirando la escultura con inquietud) Es extraño. Esta escultura... siento una energía espeluznante.",
						"vietnamese": "(Nhìn công trình với vẻ bất an) Lạ thật. Công trình này... tôi cảm thấy một luồng khí rợn người.",
						"thai": "(มองประติมากรรมอย่างไม่สบายใจ) แปลกจัง ประติมากรรมนี้...ฉันรู้สึกถึงพลังงานที่น่าขนลุก",
						"hindi": "(मूर्ति को बेचैनी से देखते हुए) अजीब है। इस मूर्ति से... मुझे कुछ डरावनी आभा महसूस हो रही है।"
					},
					"type": "speech",
					"speaker": "zoe"
				},
				{
					"speaker": "zoe",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "평론가로서의 직감이에요. 당신이 조사를 맡아줬으면 해요.",
						"english": "It's my critic's intuition. I'd like you to investigate.",
						"japanese": "評論家としての直感です。あなたに調査をお願いしたい。",
						"chinese": "这是我作为评论家的直觉。我希望你负责调查。",
						"french": "C'est mon intuition de critique. J'aimerais que vous meniez l'enquête.",
						"spanish": "Es mi intuición de crítica. Me gustaría que te encargaras de la investigación.",
						"vietnamese": "Đây là trực giác của một nhà phê bình. Tôi muốn bạn đảm nhận việc điều tra.",
						"thai": "มันเป็นสัญชาตญาณของนักวิจารณ์ ฉันอยากให้คุณช่วยสืบสวนเรื่องนี้",
						"hindi": "यह एक आलोचक के रूप में मेरी अंतर्ज्ञान है। मैं चाहता हूँ कि आप इसकी जाँच करें।"
					}
				},
				{
					"content": {
						"korean": "섬뜩한 기운이라니… 기분 탓 아닐까요?",
						"english": "An eerie aura, you say... Isn't it just your imagination?",
						"japanese": "不気味な気配だなんて…気のせいじゃないですか？",
						"chinese": "阴森的气息...是不是你的错觉？",
						"french": "Une aura sinistre, dites-vous... N'est-ce pas juste une impression ?",
						"spanish": "¿Una energía espeluznante...? ¿No será cosa tuya?",
						"vietnamese": "Luồng khí rợn người ư... Có khi nào là do cảm giác của anh thôi không?",
						"thai": "พลังงานที่น่าขนลุกเหรอ... คุณคงคิดไปเองมากกว่ามั้ง?",
						"hindi": "डरावनी आभा... क्या यह सिर्फ़ आपकी कल्पना नहीं है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "zoe",
					"type": "direction"
				},
				{
					"content": {
						"korean": "어때요? 조형물에서 뭔가 느껴지는 게 없나요?",
						"english": "So? Don't you feel anything from the monument?",
						"japanese": "どうですか？造形物から何か感じるものはありませんか？",
						"chinese": "怎么样？你没有从雕塑中感觉到什么吗？",
						"french": "Alors ? Ne ressentez-vous rien de la sculpture ?",
						"spanish": "¿Qué tal? ¿No sientes nada de la escultura?",
						"vietnamese": "Thế nào rồi? Anh không cảm thấy gì từ công trình sao?",
						"thai": "เป็นไงบ้าง? คุณไม่รู้สึกอะไรจากประติมากรรมเลยเหรอ?",
						"hindi": "तो? क्या आपको मूर्ति से कुछ महसूस नहीं हो रहा?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "zoe"
				},
				{
					"type": "speech",
					"content": {
						"korean": "(조형물에 손을 대고) …시간이 좀, 뒤틀리는 것 같은데요.",
						"english": "(Touching the sculpture) ...Time feels a little distorted.",
						"japanese": "(彫刻に手を触れて) …時間が、少し歪んでいるような気がします。",
						"chinese": "(触摸着雕塑) ……时间，好像有些扭曲。",
						"french": "(Touchant la sculpture) ...Le temps semble un peu distordu.",
						"spanish": "(Tocando la escultura) ...El tiempo parece un poco distorsionado.",
						"vietnamese": "(Chạm vào bức tượng) ...Thời gian dường như hơi méo mó.",
						"thai": "(สัมผัสรูปปั้น) ...เวลาดูเหมือนจะบิดเบี้ยวเล็กน้อย",
						"hindi": "(मूर्ति को छूते हुए) ...समय थोड़ा मुड़ा हुआ सा लग रहा है।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "방금… 맹세 소리가 환청처럼 들린 것 같았어.",
						"english": "Just now... I thought I heard a vow, like a hallucination.",
						"japanese": "今…誓いの声が幻聴のように聞こえた気がした。",
						"chinese": "刚才…我好像听到了誓言的声音，像是幻听。",
						"french": "À l'instant... J'ai cru entendre un serment, comme une hallucination.",
						"spanish": "Justo ahora... Creí escuchar un juramento, como una alucinación.",
						"vietnamese": "Vừa nãy... tôi cứ ngỡ mình nghe thấy lời thề, như một ảo giác.",
						"thai": "เมื่อครู่...ฉันได้ยินเสียงคำสาบาน เหมือนเป็นภาพหลอน",
						"hindi": "अभी-अभी... मुझे एक प्रतिज्ञा की आवाज़ सुनाई दी, जैसे मतिभ्रम हो।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "zoe",
					"type": "speech",
					"content": {
						"korean": "역시… 내 느낌이 맞았어. 당신도 그걸 느꼈군요.",
						"english": "As expected... my feeling was right. You felt it too.",
						"japanese": "やはり…私の勘は正しかった。あなたもそれを感じたのですね。",
						"chinese": "果然…我的感觉是对的。你也感受到了。",
						"french": "Comme je m'y attendais... mon intuition était juste. Vous l'avez senti aussi.",
						"spanish": "Como esperaba... mi presentimiento era correcto. Tú también lo sentiste.",
						"vietnamese": "Quả nhiên... cảm giác của tôi đúng mà. Anh cũng cảm nhận được điều đó.",
						"thai": "อย่างที่คิด...ความรู้สึกของฉันถูกต้อง คุณก็รู้สึกได้เหมือนกัน",
						"hindi": "जैसा कि मैंने सोचा था... मेरा एहसास सही था। तुम्हें भी वह महसूस हुआ।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "zoe",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 조형물, 그냥 돌덩이가 아니에요. 과거의 맹세를 담고 있는 것 같아.",
						"english": "This sculpture isn't just a rock. It seems to hold past vows.",
						"japanese": "この彫刻、ただの石じゃない。過去の誓いを宿しているようだ。",
						"chinese": "这座雕塑，不只是一块石头。它似乎承载着过去的誓言。",
						"french": "Cette sculpture n'est pas qu'une simple pierre. Elle semble contenir des serments passés.",
						"spanish": "Esta escultura no es solo una roca. Parece contener juramentos del pasado.",
						"vietnamese": "Bức tượng này không chỉ là một tảng đá. Dường như nó chứa đựng những lời thề trong quá khứ.",
						"thai": "รูปปั้นนี้ไม่ใช่แค่ก้อนหิน มันดูเหมือนจะเก็บงำคำสาบานในอดีตไว้",
						"hindi": "यह मूर्ति सिर्फ एक पत्थर नहीं है। यह अतीत की प्रतिज्ञाओं को समाहित करती हुई लगती है।"
					},
					"speaker": "zoe"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "깨어진 맹세… 라니?",
						"english": "Broken vows... you mean?",
						"japanese": "破られた誓い…って？",
						"chinese": "破碎的誓言…是什么意思？",
						"french": "Des serments brisés... ?",
						"spanish": "¿Juramentos rotos... te refieres?",
						"vietnamese": "Lời thề bị phá vỡ... là sao?",
						"thai": "คำสาบานที่แตกหัก... หมายความว่าไง?",
						"hindi": "टूटी हुई प्रतिज्ञाएँ... क्या मतलब?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "zoe",
					"content": {
						"korean": "네. 아마도. 이 도시의 역사를 뒤흔들 만한 비극적인 맹세가.",
						"english": "Yes. Probably. A tragic vow that could shake the history of this city.",
						"japanese": "ええ。おそらく。この街の歴史を揺るがすほどの、悲劇的な誓いが。",
						"chinese": "是的。可能吧。一个足以动摇这座城市历史的悲剧性誓言。",
						"french": "Oui. Probablement. Un serment tragique capable de secouer l'histoire de cette ville.",
						"spanish": "Sí. Probablemente. Un juramento trágico capaz de sacudir la historia de esta ciudad.",
						"vietnamese": "Vâng. Có lẽ vậy. Một lời thề bi thảm đủ để làm rung chuyển lịch sử của thành phố này.",
						"thai": "ใช่ อาจจะ. คำสาบานอันน่าเศร้าที่อาจสั่นสะเทือนประวัติศาสตร์ของเมืองนี้",
						"hindi": "हाँ। शायद। एक दुखद प्रतिज्ञा जो इस शहर के इतिहास को हिला सकती है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "(머리를 부여잡으며) 고통스러워… 너무 많은 목소리가 들려와.",
						"english": "(Clutching my head) It's painful... too many voices.",
						"japanese": "(頭を抱えながら) 苦しい…たくさんの声が聞こえてくる。",
						"chinese": "(抱头) 好痛苦…有太多声音了。",
						"french": "(Se tenant la tête) C'est douloureux... trop de voix m'envahissent.",
						"spanish": "(Agarrándose la cabeza) Es doloroso... demasiadas voces.",
						"vietnamese": "(Ôm đầu) Đau đớn quá... quá nhiều giọng nói đang vọng về.",
						"thai": "(กุมศีรษะ) เจ็บปวด... มีเสียงมากมายเหลือเกิน",
						"hindi": "(सिर पकड़ते हुए) यह दर्दनाक है... बहुत सारी आवाज़ें आ रही हैं।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "zoe",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "이제 되돌릴 수 없어요. 이 조형물이 깨어나려 하고 있어요.",
						"english": "It can't be undone now. This sculpture is trying to awaken.",
						"japanese": "もう後戻りできない。この彫刻が目覚めようとしている。",
						"chinese": "现在已经无法挽回了。这座雕塑正在试图苏醒。",
						"french": "On ne peut plus revenir en arrière. Cette sculpture est sur le point de s'éveiller.",
						"spanish": "Ya no se puede deshacer. Esta escultura está intentando despertar.",
						"vietnamese": "Giờ không thể quay lại được nữa. Bức tượng này đang cố gắng thức tỉnh.",
						"thai": "ตอนนี้ย้อนกลับไม่ได้แล้ว รูปปั้นนี้กำลังจะตื่นขึ้นมา",
						"hindi": "अब इसे बदला नहीं जा सकता। यह मूर्ति जागृत होने की कोशिश कर रही है।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "zoe"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "깨어난다고? 뭘 말하는 거야?",
						"english": "Awaken? What are you talking about?",
						"japanese": "目覚めるって？何を言ってるんだ？",
						"chinese": "苏醒？你在说什么？",
						"french": "S'éveiller ? De quoi parlez-vous ?",
						"spanish": "¿Despertar? ¿De qué estás hablando?",
						"vietnamese": "Thức tỉnh? Anh đang nói gì vậy?",
						"thai": "ตื่นขึ้นมาเหรอ? คุณกำลังพูดถึงอะไร?",
						"hindi": "जागृत होना? तुम क्या कह रहे हो?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "잊혀진 약속들. 그리고 그 약속에 묶여 있던 존재들이… 다시 현실로.",
						"english": "Forgotten promises. And beings bound by those promises... returning to reality.",
						"japanese": "忘れられた約束。そしてその約束に縛られていた存在たちが…再び現実へ。",
						"chinese": "被遗忘的诺言。以及被这些诺言束缚的存在们…重新回到现实。",
						"french": "Des promesses oubliées. Et des êtres liés par ces promesses... de retour à la réalité.",
						"spanish": "Promesas olvidadas. Y seres atados por esas promesas... de vuelta a la realidad.",
						"vietnamese": "Những lời hứa bị lãng quên. Và những sinh vật bị ràng buộc bởi những lời hứa đó... trở về thực tại.",
						"thai": "คำสัญญาที่ถูกลืม และสิ่งมีชีวิตที่ถูกผูกมัดด้วยคำสัญญาเหล่านั้น...กลับคืนสู่ความเป็นจริง",
						"hindi": "भूली हुई प्रतिज्ञाएँ। और उन प्रतिज्ञाओं से बंधे हुए प्राणी... फिर से वास्तविकता में।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "zoe"
				},
				{
					"speaker": "character_3",
					"content": {
						"korean": "젠장… 너무 늦었나? 이대로 멈춰야 하나…",
						"english": "Damn... Am I too late? Should I stop here...?",
						"japanese": "くそ…もう遅いのか？このままやめるべきか…",
						"chinese": "该死…太迟了吗？我该就此打住吗…",
						"french": "Mince... Est-ce trop tard ? Dois-je m'arrêter là...?",
						"spanish": "Maldita sea... ¿Demasiado tarde? ¿Debo parar aquí...?",
						"vietnamese": "Chết tiệt... Quá muộn rồi sao? Có nên dừng lại ở đây không...?",
						"thai": "ให้ตายสิ... สายเกินไปแล้วหรือเปล่า? ควรจะหยุดแค่นี้ดีไหม...",
						"hindi": "धिक्कार है... क्या बहुत देर हो गई? क्या मुझे यहीं रुक जाना चाहिए...?"
					},
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크윽… 겨우… 이 정도로… 맹세는… 끝나지 않아…",
						"english": "Urgh... Barely... This much... The vow... it doesn't end...",
						"japanese": "くっ…かろうじて…この程度で…誓いは…終わらない…",
						"chinese": "呃…仅仅…凭这点…誓言…不会结束…",
						"french": "Argh... À peine... C'est tout ce que tu as... Le serment... il ne se termine pas...",
						"spanish": "Ugh... Apenas... Con esto... La promesa... no termina...",
						"vietnamese": "Khụ... Chỉ... chừng này thôi... Lời thề... chưa kết thúc...",
						"thai": "อึก... แค่... เท่านี้... คำสาบาน... ยังไม่จบ...",
						"hindi": "उह... बस... इतना सा... प्रतिज्ञा... खत्म नहीं होती..."
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "또 다른 고리가… 이어질 뿐…",
						"english": "Just another link... will connect...",
						"japanese": "また別の輪が…繋がるだけだ…",
						"chinese": "只是…另一个环节…会延续下去…",
						"french": "Juste un autre lien... se tissera...",
						"spanish": "Solo otro eslabón... se unirá...",
						"vietnamese": "Chỉ là một mối liên kết khác... sẽ tiếp nối...",
						"thai": "แค่วงแหวนอีกวง... จะเชื่อมต่อเท่านั้น...",
						"hindi": "बस एक और कड़ी... जुड़ जाएगी..."
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "(쓰러진 보스를 보며) …이게, 끝이 아니라고?",
						"english": "(Looking at the fallen boss) ...This isn't the end?",
						"japanese": "(倒れたボスを見て) …これが、終わりじゃないってのか？",
						"chinese": "(看着倒下的首领) …这，不是结束吗？",
						"french": "(Regardant le boss vaincu) ...Ce n'est pas la fin ?",
						"spanish": "(Mirando al jefe caído) ...¿Esto no es el final?",
						"vietnamese": "(Nhìn con boss gục ngã) ...Đây không phải là kết thúc sao?",
						"thai": "(มองบอสที่ล้มลง) ...นี่, ยังไม่จบอีกเหรอ?",
						"hindi": "(गिरे हुए बॉस को देखकर) ...यह, अंत नहीं है?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "조형물의 불길한 기운이 일시적으로 가라앉았다. 그러나 도시는 여전히 과거의 맹세 그림자에 묶여 있었다.",
						"english": "The ominous aura of the sculpture temporarily subsided. But the city remained bound by the shadow of the past vow.",
						"japanese": "造形物の不吉な気配は一時的に収まった。しかし、都市は依然として過去の誓いの影に縛られていた。",
						"chinese": "雕塑的不祥气息暂时平息了。然而，这座城市仍然被过去誓言的阴影所束缚。",
						"french": "L'aura sinistre de la sculpture s'apaisa temporairement. Mais la ville restait liée par l'ombre du serment passé.",
						"spanish": "El aura ominosa de la escultura se calmó temporalmente. But the city remained bound by the shadow of the past vow.",
						"vietnamese": "Khí tức đáng sợ từ pho tượng tạm thời lắng xuống. Tuy nhiên, thành phố vẫn bị ràng buộc bởi cái bóng của lời thề trong quá khứ.",
						"thai": "พลังงานลางร้ายของรูปปั้นสงบลงชั่วคราว แต่เมืองยังคงถูกพันธนาการไว้ด้วยเงาของคำสาบานในอดีต",
						"hindi": "मूर्ति की अशुभ आभा अस्थायी रूप से शांत हो गई। लेकिन शहर अभी भी पिछली प्रतिज्ञा की छाया से बंधा हुआ था।"
					},
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "조형물에서 검은 그림자가 뿜어져 나왔다. 형체가 생겨난다.",
						"english": "A black shadow surged from the sculpture. A form takes shape.",
						"japanese": "造形物から黒い影が噴き出した。形が生まれ出る。",
						"chinese": "黑色阴影从雕塑中涌出。一个形体正在形成。",
						"french": "Une ombre noire jaillit de la sculpture. Une forme prend corps.",
						"spanish": "Una sombra negra surgió de la escultura. Una forma toma cuerpo.",
						"vietnamese": "Một bóng đen trào ra từ pho tượng. Một hình hài đang thành hình.",
						"thai": "เงาดำทะลักออกมาจากรูปปั้น ร่างกายกำลังก่อตัวขึ้น",
						"hindi": "मूर्ति से एक काली परछाई निकली। एक आकृति बन रही है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "누가… 나의 잠을… 깨웠는가.",
						"english": "Who... has awakened... my slumber?",
						"japanese": "誰が… 私の眠りを… 覚ましたのだ。",
						"chinese": "谁…唤醒了…我的沉睡？",
						"french": "Qui... a réveillé... mon sommeil ?",
						"spanish": "¿Quién... ha despertado... mi letargo?",
						"vietnamese": "Kẻ nào... đã đánh thức... giấc ngủ của ta?",
						"thai": "ผู้ใด... ปลุก... การหลับใหลของข้า?",
						"hindi": "किसने... मेरी निद्रा... भंग की?"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "네가… 그 맹세의 잔재인가!",
						"english": "Are you... the remnant of that vow!",
						"japanese": "貴様が… あの誓いの残滓か！",
						"chinese": "你就是…那个誓言的残余吗！",
						"french": "Es-tu... le vestige de ce serment !",
						"spanish": "¿Eres tú... el remanente de esa promesa?!",
						"vietnamese": "Ngươi... là tàn dư của lời thề đó ư!",
						"thai": "เจ้า... คือเศษเสี้ยวของคำสาบานนั้นหรือ!",
						"hindi": "क्या तुम... उस प्रतिज्ञा के अवशेष हो!"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "감히… 부서진 약속을 논하는가. 네 존재 자체가 비극이 될 것이다.",
						"english": "How dare you... speak of broken promises. Your very existence will be a tragedy.",
						"japanese": "貴様ごときが… 破られた約束を語るか。貴様の存在自体が悲劇となろう。",
						"chinese": "竟敢…谈论破碎的承诺。你的存在本身将是一场悲剧。",
						"french": "Comment oses-tu... parler de promesses brisées. Ton existence même sera une tragédie.",
						"spanish": "¡¿Cómo osas... hablar de promesas rotas?! Tu misma existencia será una tragedia.",
						"vietnamese": "Ngươi dám... nói về những lời hứa tan vỡ. Sự tồn tại của ngươi sẽ là một bi kịch.",
						"thai": "บังอาจ... มาพูดถึงคำสัญญาที่แตกสลายรึไง การมีอยู่ของเจ้าจะเป็นโศกนาฏกรรม",
						"hindi": "तुम्हारी हिम्मत कैसे हुई... टूटे वादों की बात करने की। तुम्हारा अस्तित्व ही एक त्रासदी होगा।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "어둠이 모든 것을 집어삼켰다. 시간의 뒤틀림이 더욱 심해진다.",
						"english": "Darkness swallowed everything. The distortion of time deepens further.",
						"japanese": "闇が全てを飲み込んだ。時間の歪みはさらに深まる。",
						"chinese": "黑暗吞噬了一切。时间的扭曲愈发严重。",
						"french": "L'obscurité a tout englouti. La distorsion du temps s'aggrave encore.",
						"spanish": "La oscuridad lo engulló todo. La distorsión del tiempo se agrava aún más.",
						"vietnamese": "Bóng tối nuốt chửng tất cả. Sự méo mó của thời gian càng trở nên nghiêm trọng.",
						"thai": "ความมืดกลืนกินทุกสิ่ง การบิดเบือนของเวลารุนแรงขึ้น",
						"hindi": "अंधकार ने सब कुछ निगल लिया। समय का विचलन और गहरा होता जा रहा है।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "어리석은 인간들… 맹세의 무게를 감당할 수 없을 것이다.",
						"english": "Foolish mortals… you cannot bear the weight of your vows.",
						"japanese": "愚かな人間たち… 誓いの重さに耐えられないだろう。",
						"chinese": "愚蠢的人类… 你们承受不起誓言的重量。",
						"french": "Mortels insensés… vous ne pourrez supporter le poids de vos serments.",
						"spanish": "Mortales insensatos… no podréis soportar el peso de vuestros juramentos.",
						"vietnamese": "Những kẻ phàm tục ngu ngốc… các ngươi không thể gánh vác được sức nặng của lời thề.",
						"thai": "มนุษย์ที่โง่เขลา… เจ้าไม่อาจแบกรับน้ำหนักของคำสาบานได้",
						"hindi": "मूर्ख मनुष्यो... तुम अपनी प्रतिज्ञाओं का भार नहीं उठा पाओगे।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "(쓰러지며) …아직… 끝나지 않았어. 다시 일어설 거야.",
						"english": "(Falling) …It's not… over yet. I will rise again.",
						"japanese": "(倒れながら) …まだ…終わってない。また立ち上がるだろう。",
						"chinese": "（倒下）……还没……结束。我会再次站起来的。",
						"french": "(Tombant) …Ce n'est pas… encore fini. Je me relèverai.",
						"spanish": "(Cayendo) …Aún no… ha terminado. Me levantaré de nuevo.",
						"vietnamese": "(Ngã xuống) …Vẫn chưa… kết thúc. Ta sẽ lại đứng dậy.",
						"thai": "(ล้มลง) …ยัง…ไม่จบ. ข้าจะลุกขึ้นยืนอีกครั้ง",
						"hindi": "(गिरते हुए) ...अभी... खत्म नहीं हुआ है। मैं फिर से उठ खड़ा होऊंगा।"
					},
					"type": "speech"
				}
			]
		}
	]
} as const;
