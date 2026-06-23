export const scenario_snowy_glimmerfrost_51_05 = {
	"scenario_id": "snowy_glimmerfrost_51_05",
	"order": 5,
	"act": "climax_finale",
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
		"pool_id": "pool_Frostbound_Glimmerfrost_V1"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "피난처의 온기가 온몸을 감쌌다. 매서웠던 추위가 거짓말처럼 녹아내렸다.",
						"english": "The warmth of the sanctuary enveloped my whole body. The bitter cold melted away as if it were a lie.",
						"japanese": "聖域の温もりが全身を包み込んだ。厳しかった寒さは嘘のように溶けていった。",
						"chinese": "避难所的温暖笼罩全身。严寒仿佛谎言般消融。",
						"french": "La chaleur du sanctuaire enveloppa tout mon corps. Le froid mordant fondit comme un mensonge.",
						"spanish": "La calidez del refugio envolvió todo mi cuerpo. El frío intenso se derritió como si fuera una mentira.",
						"vietnamese": "Hơi ấm của nơi trú ẩn bao trùm lấy toàn thân tôi. Cái lạnh khắc nghiệt tan chảy như một lời nói dối.",
						"thai": "ไออุ่นจากที่หลบภัยโอบล้อมทั่วทั้งร่าง ความหนาวเหน็บที่แสนสาหัสละลายหายไปราวกับโกหก",
						"hindi": "अभयारण्य की गर्माहट ने पूरे शरीर को घेर लिया। कड़ाके की ठंड ऐसे पिघल गई जैसे वह झूठ हो।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "살았다… 정말 따뜻해.",
						"english": "I'm alive... It's really warm.",
						"japanese": "助かった…本当に暖かい。",
						"chinese": "得救了…真暖和。",
						"french": "Je suis en vie... C'est vraiment chaud.",
						"spanish": "Estoy vivo... Qué calor.",
						"vietnamese": "Mình còn sống... Thật ấm áp.",
						"thai": "รอดแล้ว... อบอุ่นจัง",
						"hindi": "मैं बच गया... यह सचमुच गर्म है।"
					},
					"emotion": "happy"
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"type": "direction"
				},
				{
					"content": {
						"korean": "환영합니다. 이곳은 안전해요.",
						"english": "Welcome. This place is safe.",
						"japanese": "ようこそ。ここは安全です。",
						"chinese": "欢迎。这里很安全。",
						"french": "Bienvenue. Cet endroit est sûr.",
						"spanish": "Bienvenido. Este lugar es seguro.",
						"vietnamese": "Chào mừng. Nơi đây an toàn.",
						"thai": "ยินดีต้อนรับ ที่นี่ปลอดภัย",
						"hindi": "स्वागत है। यह जगह सुरक्षित है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "base",
					"content": {
						"korean": "근데… 이상하게 몸이 나른해지는 것 같아.",
						"english": "But... oddly enough, my body feels sluggish.",
						"japanese": "でも…なんだか体がだるい気がする。",
						"chinese": "但是…身体好像奇怪地变得慵懒了。",
						"french": "Mais... étrangement, mon corps s'engourdit.",
						"spanish": "Pero... extrañamente, mi cuerpo se siente lánguido.",
						"vietnamese": "Nhưng... lạ thay, cơ thể tôi cứ uể oải.",
						"thai": "แต่ว่า... ทำไมร่างกายถึงได้อ่อนแรงแปลกๆ",
						"hindi": "लेकिन... अजीब बात है, मेरा शरीर सुस्त महसूस हो रहा है।"
					}
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "오랜 추위 탓일 거예요. 곧 괜찮아질 겁니다.",
						"english": "It's probably due to the long cold. You'll be fine soon.",
						"japanese": "長らくの寒さのせいでしょう。すぐに良くなりますよ。",
						"chinese": "可能是因为长期寒冷。很快就会好起来的。",
						"french": "C'est probablement à cause du froid prolongé. Vous irez bien bientôt.",
						"spanish": "Probablemente sea por el largo frío. Pronto estarás bien.",
						"vietnamese": "Chắc là do lạnh lâu. Sẽ ổn thôi.",
						"thai": "คงเป็นเพราะความหนาวเย็นมานาน เดี๋ยวก็ดีขึ้นเอง",
						"hindi": "यह लंबे समय से चली आ रही ठंड के कारण होगा। आप जल्द ही ठीक हो जाएंगे।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "eira",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "몸이 점점 무거워지는 기분이야. 이상한 온기야.",
						"english": "My body feels heavier and heavier. This warmth is strange.",
						"japanese": "体がだんだん重くなる感じだ。変な温かさだ。",
						"chinese": "身体感觉越来越沉重。这温暖很奇怪。",
						"french": "Mon corps se sent de plus en plus lourd. Cette chaleur est étrange.",
						"spanish": "Mi cuerpo se siente cada vez más pesado. Este calor es extraño.",
						"vietnamese": "Cơ thể tôi càng lúc càng nặng. Sự ấm áp này thật kỳ lạ.",
						"thai": "ร่างกายรู้สึกหนักขึ้นเรื่อยๆ ความอบอุ่นนี้มันแปลกๆ",
						"hindi": "मेरा शरीर भारी होता जा रहा है। यह अजीब गर्मी है।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "온전한 안식을 위한 과정입니다.",
						"english": "It is a process for complete rest.",
						"japanese": "完全な安息のための過程です。",
						"chinese": "这是为了完全安息的过程。",
						"french": "C'est un processus pour un repos complet.",
						"spanish": "Es un proceso para un descanso completo.",
						"vietnamese": "Đây là quá trình để được an nghỉ hoàn toàn.",
						"thai": "เป็นกระบวนการเพื่อการพักผ่อนอย่างสมบูรณ์",
						"hindi": "यह पूर्ण विश्राम के लिए एक प्रक्रिया है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "벽에… 희미하게 사람 얼굴 같은 게 보여. 착각인가?",
						"english": "On the wall... I see something like a faint human face. Is it my imagination?",
						"japanese": "壁に…かすかに人の顔のようなものが見える。錯覚か？",
						"chinese": "墙上…隐约看到一张人脸。是错觉吗？",
						"french": "Sur le mur... je vois quelque chose comme un visage humain pâle. Est-ce une illusion ?",
						"spanish": "En la pared... veo algo como una cara humana difusa. ¿Es mi imaginación?",
						"vietnamese": "Trên tường... tôi thấy lờ mờ như khuôn mặt người. Có phải là ảo giác không?",
						"thai": "บนกำแพง... ฉันเห็นคล้ายใบหน้าคนเลือนราง เป็นความเข้าใจผิดหรือเปล่า?",
						"hindi": "दीवार पर... मुझे एक धुंधला सा मानव चेहरा दिख रहा है। क्या यह मेरा भ्रम है?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_1"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "오랜 시간 얼음이 굳어 생긴 무늬일 뿐입니다.",
						"english": "It's just a pattern formed by ice hardening over a long time.",
						"japanese": "長い時間氷が固まってできた模様にすぎません。",
						"chinese": "那只是冰长时间凝固形成的纹路而已。",
						"french": "Ce n'est qu'un motif formé par la glace qui a durci pendant longtemps.",
						"spanish": "Es solo un patrón formado por el hielo que se solidificó durante mucho tiempo.",
						"vietnamese": "Đó chỉ là hoa văn do băng đông cứng lâu ngày mà thôi.",
						"thai": "เป็นแค่ลวดลายที่เกิดจากน้ำแข็งจับตัวเป็นเวลานานเท่านั้น",
						"hindi": "यह सिर्फ लंबे समय से बर्फ के जमने से बना एक पैटर्न है।"
					},
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "eira",
					"type": "direction"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아니야! 저건 분명 사람 얼굴이야! 고통스러워하고 있어!",
						"english": "No! That's definitely a human face! It's in pain!",
						"japanese": "違う！あれは間違いなく人の顔だ！苦しんでいる！",
						"chinese": "不是！那分明是人脸！它在痛苦！",
						"french": "Non ! C'est clairement un visage humain ! Il souffre !",
						"spanish": "¡No! ¡Eso es claramente una cara humana! ¡Está sufriendo!",
						"vietnamese": "Không phải! Đó chắc chắn là khuôn mặt người! Nó đang đau đớn!",
						"thai": "ไม่จริง! นั่นมันใบหน้าคนชัดๆ! มันกำลังเจ็บปวด!",
						"hindi": "नहीं! वह निश्चित रूप से एक मानव चेहरा है! वह दर्द में है!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "…아닙니다. 착각입니다. 이곳은… 평화로운… 피난처…",
						"english": "...No. It's an illusion. This place is... a peaceful... refuge...",
						"japanese": "…違います。錯覚です。ここは…平和な…避難所…",
						"chinese": "…不。那是错觉。这里是…和平的…避难所…",
						"french": "...Non. C'est une illusion. Cet endroit est... un paisible... refuge...",
						"spanish": "...No. Es una ilusión. Este lugar es... un refugio... pacífico...",
						"vietnamese": "...Không phải. Đó là ảo giác. Nơi đây là... một nơi trú ẩn... bình yên...",
						"thai": "...ไม่ใช่ครับ เป็นภาพลวงตา ที่นี่คือ... ที่พักพิง... อันสงบสุข...",
						"hindi": "...नहीं। यह एक भ्रम है। यह जगह... एक शांतिपूर्ण... शरणस्थल है..."
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "에이라의 눈빛이 흔들렸다. 차가운 얼음 결정이 그녀의 뺨을 타고 흘렀다.",
						"english": "Aira's eyes wavered. Cold ice crystals traced down her cheek.",
						"japanese": "エイラの瞳が揺れた。冷たい氷の結晶が頬を伝って流れた。",
						"chinese": "艾拉的眼神动摇了。冰冷的冰晶顺着她的脸颊滑落。",
						"french": "Les yeux d'Aira tremblaient. De froids cristaux de glace coulaient sur sa joue.",
						"spanish": "Los ojos de Aira vacilaron. Fríos cristales de hielo rodaron por su mejilla.",
						"vietnamese": "Ánh mắt của Aira dao động. Những tinh thể băng giá lạnh chảy dài trên má cô.",
						"thai": "ดวงตาของไอระสั่นไหว ผลึกน้ำแข็งเย็นยะเยือกไหลรินลงอาบแก้มของเธอ",
						"hindi": "ऐरा की आँखें डगमगा गईं। ठंडे बर्फ के क्रिस्टल उसके गालों पर बहने लगे।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "에이라, 대체 무슨 일이야? 너도 이상해지고 있어!",
						"english": "Aira, what's going on? You're acting strange too!",
						"japanese": "エイラ、一体どうしたんだ？ 君までおかしくなってる！",
						"chinese": "艾拉，到底怎么了？你也不对劲！",
						"french": "Aira, qu'est-ce qui se passe ? Toi aussi, tu deviens étrange !",
						"spanish": "Aira, ¿qué diablos está pasando? ¡Tú también te estás volviendo extraña!",
						"vietnamese": "Aira, chuyện gì vậy? Cậu cũng đang trở nên kỳ lạ!",
						"thai": "ไอระ เกิดอะไรขึ้น? เธอก็แปลกไปแล้วนะ!",
						"hindi": "ऐरा, क्या हो रहा है? तुम भी अजीब होती जा रही हो!"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"type": "direction"
				},
				{
					"content": {
						"korean": "에이라의 몸은 얼음으로 뒤덮여 있었다. 텅 빈 눈동자만이 탐험대를 향했다.",
						"english": "Aira's body was covered in ice. Only her vacant eyes stared at the expedition team.",
						"japanese": "エイラの体は氷に覆われていた。虚ろな瞳だけが探検隊に向けられた。",
						"chinese": "艾拉的身体被冰覆盖着。只有她空洞的眼神望向了探险队。",
						"french": "Le corps d'Aira était recouvert de glace. Seuls ses yeux vides fixaient l'équipe d'exploration.",
						"spanish": "El cuerpo de Aira estaba cubierto de hielo. Solo sus ojos vacíos miraban al equipo de expedición.",
						"vietnamese": "Cơ thể của Aira bị bao phủ bởi băng. Chỉ đôi mắt trống rỗng của cô hướng về phía đội thám hiểm.",
						"thai": "ร่างของไอระถูกปกคลุมไปด้วยน้ำแข็ง มีเพียงดวงตาที่ว่างเปล่าเท่านั้นที่จ้องมองมายังคณะสำรวจ",
						"hindi": "ऐरा का शरीर बर्फ से ढका हुआ था। केवल उसकी खाली आँखें अभियान दल की ओर देख रही थीं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "어서 오세요… 따뜻한 안식… 영원한 평화…",
						"english": "Welcome… warm repose… eternal peace…",
						"japanese": "ようこそ…温かい安息…永遠の平和へ…",
						"chinese": "欢迎…温暖的安息…永恒的和平…",
						"french": "Bienvenue… doux repos… paix éternelle…",
						"spanish": "Bienvenidos… cálido reposo… paz eterna…",
						"vietnamese": "Chào mừng… sự an nghỉ ấm áp… hòa bình vĩnh cửu…",
						"thai": "ยินดีต้อนรับ… สู่ความสงบอันอบอุ่น… สันติภาพชั่วนิรันดร์…",
						"hindi": "स्वागत है… गर्मजोशी भरा विश्राम… शाश्वत शांति…"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이건 평화가 아니야! 저주에 불과해!",
						"english": "This isn't peace! It's nothing but a curse!",
						"japanese": "これは平和じゃない！呪いに過ぎない！",
						"chinese": "这不是和平！这根本就是诅咒！",
						"french": "Ce n'est pas la paix ! Ce n'est qu'une malédiction !",
						"spanish": "¡Esto no es paz! ¡No es más que una maldición!",
						"vietnamese": "Đây không phải là hòa bình! Đây chỉ là một lời nguyền!",
						"thai": "นี่ไม่ใช่สันติภาพ! มันเป็นแค่คำสาปเท่านั้น!",
						"hindi": "यह शांति नहीं है! यह सिर्फ एक अभिशाप है!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "…모두가… 그랬죠… 그리고… 영원히… 함께…",
						"english": "…Everyone… said that… And… forever… together…",
						"japanese": "…みんなが…そう言いました…そして…永遠に…一緒に…",
						"chinese": "…所有人都…这么说…然后…永远…在一起…",
						"french": "…Tout le monde… a dit ça… Et… pour toujours… ensemble…",
						"spanish": "…Todos… dijeron eso… Y… para siempre… juntos…",
						"vietnamese": "…Mọi người… đều nói vậy… Và… mãi mãi… bên nhau…",
						"thai": "…ทุกคน… พูดแบบนั้น… และ… ตลอดไป… ด้วยกัน…",
						"hindi": "…सबने… यही कहा था… और… हमेशा… साथ…"
					},
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이곳에 온 모든 사람이… 얼어붙었다는 말이야?",
						"english": "Are you saying… everyone who came here… froze?",
						"japanese": "ここに来た全員が…凍りついたって言うのか？",
						"chinese": "你的意思是…所有来到这里的人…都冻结了？",
						"french": "Tu veux dire… que tous ceux qui sont venus ici… ont gelé ?",
						"spanish": "¿Estás diciendo… que todos los que vinieron aquí… se congelaron?",
						"vietnamese": "Cậu đang nói… tất cả những người đến đây… đều bị đóng băng sao?",
						"thai": "เธอกำลังบอกว่า… ทุกคนที่มาที่นี่… กลายเป็นน้ำแข็งงั้นเหรอ?",
						"hindi": "क्या तुम कह रही हो… कि यहाँ आए हर कोई… जम गया था?"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "크크크… 어리석은… 너희는… 단지… 다음 주술을 위한… 새로운 재료일 뿐…",
						"english": "Hehehe... Fools... You are... merely... new ingredients... for the next spell...",
						"japanese": "「ククク…愚かな…お前たちは…ただ…次の呪術のための…新たな材料にすぎぬ…」",
						"chinese": "“呵呵呵……愚蠢的……你们……不过是……下一个咒术的……新材料……”",
						"french": "Héhéhé... Imbéciles... Vous n'êtes... que... de nouveaux ingrédients... pour le prochain sort...",
						"spanish": "Jajaja... Estúpidos... Vosotros sois... meros... nuevos ingredientes... para el próximo hechizo...",
						"vietnamese": "Khà khà khà... Ngu xuẩn... Các ngươi... chỉ là... nguyên liệu mới... cho phép thuật tiếp theo...",
						"thai": "ฮ่าๆๆ... พวกโง่เขลา... พวกเจ้า... ก็เป็นเพียง... วัตถุดิบใหม่... สำหรับมนตร์บทต่อไปเท่านั้น...",
						"hindi": "हाहाहा... मूर्खों... तुम... बस... अगले जादू के लिए... नई सामग्री हो..."
					},
					"type": "speech",
					"speaker": "boss"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "이 저주는… 영원히… 계속될 것이다…!",
						"english": "This curse... will last... forever...!",
						"japanese": "「この呪いは…永遠に…続くだろう…！」",
						"chinese": "“这个诅咒……将永远……持续下去……！”",
						"french": "Cette malédiction... durera... pour toujours...!",
						"spanish": "¡Esta maldición... durará... para siempre...!",
						"vietnamese": "Lời nguyền này... sẽ kéo dài... mãi mãi...!",
						"thai": "คำสาปนี้... จะคงอยู่... ชั่วนิรันดร์...!",
						"hindi": "यह शाप... हमेशा... बना रहेगा...!"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "…끝났지만, 끝난 것 같지 않아.",
						"english": "...It's over, but it doesn't feel over.",
						"japanese": "「…終わったが、終わった気がしない。」",
						"chinese": "“……结束了，但感觉并未结束。”",
						"french": "...C'est fini, mais ça ne semble pas fini.",
						"spanish": "...Ha terminado, pero no parece que haya terminado.",
						"vietnamese": "...Đã kết thúc, nhưng dường như vẫn chưa kết thúc.",
						"thai": "...มันจบแล้ว แต่รู้สึกเหมือนยังไม่จบ",
						"hindi": "...यह खत्म हो गया है, पर खत्म हुआ नहीं लगता।"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "주술사의 몸이 얼음 가루로 흩어졌다. 하지만 감옥의 비명은 여전히 울리고 있었다.",
						"english": "The shaman's body scattered into ice dust. But the screams of the prison still echoed.",
						"japanese": "「呪術師の体は氷の粉となって散った。だが、牢獄の悲鳴はまだ響いていた。」",
						"chinese": "“萨满的身体化为冰屑消散了。但监狱的尖叫声仍在回荡。”",
						"french": "Le corps du chaman se dispersa en poussière de glace. Mais les cris de la prison résonnaient toujours.",
						"spanish": "El cuerpo del chamán se dispersó en polvo de hielo. Pero los gritos de la prisión seguían resonando.",
						"vietnamese": "Cơ thể của pháp sư tan biến thành bụi băng. Nhưng tiếng thét của nhà tù vẫn còn vang vọng.",
						"thai": "ร่างของจอมเวทสลายกลายเป็นผงน้ำแข็ง แต่เสียงกรีดร้องจากคุกยังคงดังก้องอยู่",
						"hindi": "शमन का शरीर बर्फ़ीली धूल में बिखर गया। पर जेल की चीखें अब भी गूँज रही थीं।"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "혹한은 사라지지 않았다. 그들은 구원받은 것일까, 아니면 또 다른 감옥에 갇힌 것일까.",
						"english": "The bitter cold remains. Have they been saved, or merely trapped in another prison?",
						"japanese": "酷寒は消えなかった。彼らは救われたのか、それとも別の牢獄に閉じ込められたのか。",
						"chinese": "严寒并未消散。他们是被救赎了，还是被困于另一座牢笼？",
						"french": "Le froid glacial persiste. Ont-ils été sauvés, ou simplement enfermés dans une autre prison ?",
						"spanish": "El frío amargo no se desvaneció. ¿Han sido salvados, o atrapados en otra prisión?",
						"vietnamese": "Cái lạnh khắc nghiệt vẫn còn đó. Họ đã được cứu rỗi, hay chỉ bị nhốt vào một nhà tù khác?",
						"thai": "ความหนาวเหน็บยังคงอยู่ พวกเขาได้รับการช่วยเหลือแล้ว หรือเพียงถูกขังในคุกอีกแห่งกันแน่?",
						"hindi": "भीषण ठंड दूर नहीं हुई। क्या वे बच गए हैं, या एक और जेल में फंस गए हैं?"
					}
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "피난처의 심장부. 그곳에는 에이라가 완전히 얼어붙은 채 서 있었다.",
						"english": "The heart of the sanctuary. There, Aira stood, completely frozen.",
						"japanese": "避難所の心臓部。そこには、完全に凍りついたエイラが立っていた。",
						"chinese": "避难所的中心。艾拉完全被冻结在那里。",
						"french": "Le cœur du sanctuaire. Là, Aira se tenait, complètement gelée.",
						"spanish": "El corazón del santuario. Allí, Aira estaba, completamente congelada.",
						"vietnamese": "Trung tâm của nơi trú ẩn. Ở đó, Aira đứng, hoàn toàn bị đóng băng.",
						"thai": "ใจกลางของสถานที่หลบภัย ไอระยืนอยู่ตรงนั้น ร่างกายแข็งเป็นน้ำแข็งอย่างสมบูรณ์",
						"hindi": "अभयारण्य का हृदय। वहाँ, ऐरा पूरी तरह से जम चुकी खड़ी थी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "에이라…! 결국 너도… 저주에 갇혔던 거야?",
						"english": "Aira…! So you too… were trapped by the curse?",
						"japanese": "エイラ…！結局君も…呪いに囚われていたのか？",
						"chinese": "艾拉…！原来你…也困在诅咒里了吗？",
						"french": "Aira… ! Toi aussi… tu étais donc piégée par la malédiction ?",
						"spanish": "¡Aira…! ¿Así que tú también… fuiste atrapada por la maldición?",
						"vietnamese": "Aira…! Cuối cùng cậu cũng… bị mắc kẹt trong lời nguyền sao?",
						"thai": "ไอระ…! สุดท้ายแล้วเธอก็… ถูกคำสาปขังไว้เหรอ?",
						"hindi": "ऐरा…! तो तुम भी… अभिशाप में फंस गई थी?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "동시에, 얼어붙은 벽과 바닥에서 고통스러운 비명과 함께 수많은 얼굴이 솟아올랐다.",
						"english": "Simultaneously, countless faces emerged from the frozen walls and floor, accompanied by agonizing screams.",
						"japanese": "同時に、凍りついた壁と床から、苦痛に満ちた悲鳴と共に無数の顔が浮かび上がった。",
						"chinese": "同时，无数张脸伴随着痛苦的尖叫声从冰冻的墙壁和地板中浮现出来。",
						"french": "Simultanément, d'innombrables visages émergèrent des murs et du sol gelés, accompagnés de cris déchirants.",
						"spanish": "Simultáneamente, innumerables rostros surgieron de las paredes y el suelo congelados, acompañados de gritos agónicos.",
						"vietnamese": "Đồng thời, vô số khuôn mặt trồi lên từ những bức tường và sàn nhà đóng băng, kèm theo những tiếng hét đau đớn.",
						"thai": "ในเวลาเดียวกัน ใบหน้ามากมายผุดขึ้นจากกำแพงและพื้นน้ำแข็ง พร้อมกับเสียงกรีดร้องอันเจ็บปวด",
						"hindi": "साथ ही, जमे हुए दीवारों और फर्श से, दर्दनाक चीखों के साथ अनगिनत चेहरे उभरे।"
					},
					"emotion": "base"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "…그래. 그녀는 나의 충실한 유인책이었지. 너희처럼 어리석은 자들을 위한.",
						"english": "...Yes. She was my loyal decoy. For fools like you.",
						"japanese": "「…そうだ。彼女は私の忠実な誘い役だった。お前たちのような愚か者のためのな。」",
						"chinese": "“……没错。她是我忠实的诱饵。为了你们这些愚蠢之辈。”",
						"french": "...Oui. Elle était mon fidèle appât. Pour des idiots comme vous.",
						"spanish": "...Sí. Ella fue mi leal señuelo. Para tontos como vosotros.",
						"vietnamese": "...Phải. Cô ta là mồi nhử trung thành của ta. Dành cho những kẻ ngu xuẩn như các ngươi.",
						"thai": "...ใช่แล้ว นางเป็นเหยื่อล่อผู้ซื่อสัตย์ของข้า สำหรับพวกโง่เขลาอย่างพวกเจ้าไง",
						"hindi": "...हाँ। वह मेरी वफादार चाल थी। तुम जैसे मूर्खों के लिए।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "얼어붙은 주술사 글리머프로스트가 거대한 얼음 왕좌에서 몸을 일으켰다. 그의 눈에서 섬뜩한 보랏빛이 터져 나왔다.",
						"english": "The Frost Shaman Glimmerfrost rose from his massive ice throne. Ominous violet light erupted from his eyes.",
						"japanese": "「凍てつく呪術師グリマーフロストが巨大な氷の玉座から身を起こした。彼の目からは不気味な紫色の光がほとばしった。」",
						"chinese": "“冰霜萨满格里默弗罗斯特从巨大的冰王座上起身。他眼中爆发出诡异的紫色光芒。”",
						"french": "Le Chaman Givreflamme se leva de son trône de glace massif. Une sinistre lumière violette jaillit de ses yeux.",
						"spanish": "El Chamán Congelado Glimmerfrost se levantó de su gigantesco trono de hielo. Una siniestra luz violeta brotó de sus ojos.",
						"vietnamese": "Pháp sư Băng giá Glimmerfrost đứng dậy từ ngai vàng băng khổng lồ. Ánh sáng tím đáng sợ bùng lên từ đôi mắt hắn.",
						"thai": "จอมเวทน้ำแข็ง กลิมเมอร์ฟรอสต์ ลุกขึ้นจากบัลลังก์น้ำแข็งอันมหึมา แสงสีม่วงประหลาดพวยพุ่งออกมาจากดวงตาของเขา",
						"hindi": "फ्रॉस्ट शमन ग्लिमरफ्रॉस्ट अपने विशाल बर्फीले सिंहासन से उठा। उसकी आँखों से अशुभ बैंगनी प्रकाश फूट पड़ा।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "이 온기는… 너희의 생명력을 흡수하는 달콤한 독이다.",
						"english": "This warmth... is a sweet poison that siphons your life force.",
						"japanese": "「この温もりは… お前たちの生命力を吸い取る、甘美な毒だ。」",
						"chinese": "“这股温暖……是汲取你们生命力的甜美毒药。”",
						"french": "Cette chaleur... est un doux poison qui siphonne votre force vitale.",
						"spanish": "Este calor... es un dulce veneno que drena vuestra fuerza vital.",
						"vietnamese": "Hơi ấm này... là một thứ độc ngọt ngào hút cạn sinh lực của các ngươi.",
						"thai": "ความอบอุ่นนี้... คือยาพิษหวานที่ดูดกลืนพลังชีวิตของพวกเจ้า",
						"hindi": "यह गर्माहट... एक मीठा जहर है जो तुम्हारी जीवन शक्ति सोख लेता है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "구원을 찾았다고? 아니, 너희는 영원한 고통의 감옥에 갇힌 것이다!",
						"english": "You sought salvation? No, you are trapped in an eternal prison of torment!",
						"japanese": "「救済を見つけた、だと？違う、お前たちは永遠の苦痛の牢獄に閉じ込められたのだ！」",
						"chinese": "“找到了救赎？不，你们是被困在永恒痛苦监狱里的囚徒！”",
						"french": "Vous cherchiez le salut ? Non, vous êtes piégés dans une prison éternelle de tourments !",
						"spanish": "¿Buscasteis la salvación? ¡No, estáis atrapados en una prisión eterna de tormento!",
						"vietnamese": "Tìm thấy sự cứu rỗi ư? Không, các ngươi đã bị giam cầm trong ngục tù đau khổ vĩnh cửu!",
						"thai": "พวกเจ้าแสวงหาความรอดหรือ? ไม่หรอก พวกเจ้าถูกขังอยู่ในคุกแห่งความเจ็บปวดชั่วนิรันดร์ต่างหาก!",
						"hindi": "तुम्हें मोक्ष मिल गया? नहीं, तुम शाश्वत यातना की जेल में फँस गए हो!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "이럴 수가… 모든 게 거짓이었어…!",
						"english": "Oh no... Everything was a lie...!",
						"japanese": "「なんてことだ…全てが嘘だったなんて…！」",
						"chinese": "“怎么会这样……一切都是谎言……！”",
						"french": "Oh non... Tout n'était qu'un mensonge...!",
						"spanish": "¡No puede ser... Todo era una mentira...!",
						"vietnamese": "Không thể nào... Tất cả đều là dối trá...!",
						"thai": "ไม่นะ... ทุกอย่างเป็นเรื่องโกหก...!",
						"hindi": "हे भगवान... सब झूठ था...!"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "하지만 여기서 멈추지 않아! 이 저주를 끊어내겠어!",
						"english": "But I won't stop here! I'll break this curse!",
						"japanese": "「だが、ここで止まりはしない！この呪いを断ち切ってやる！」",
						"chinese": "“但我不会止步于此！我要打破这个诅咒！”",
						"french": "Mais je ne m'arrêterai pas là ! Je briserai cette malédiction !",
						"spanish": "¡Pero no me detendré aquí! ¡Romperé esta maldición!",
						"vietnamese": "Nhưng tôi sẽ không dừng lại ở đây! Tôi sẽ phá bỏ lời nguyền này!",
						"thai": "แต่ข้าจะไม่หยุดแค่นี้! ข้าจะทำลายคำสาปนี้!",
						"hindi": "पर मैं यहीं नहीं रुकूँगा! मैं इस शाप को तोड़ दूँगा!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "결국 너희도… 나의 일부가 될지니…!",
						"english": "In the end, you too... shall become a part of me...!",
						"japanese": "結局、お前たちも… 私の一部となるのだ…！",
						"chinese": "最终，你们也… 将成为我的一部分…！",
						"french": "Au final, vous aussi... ferez partie de moi...!",
						"spanish": "Al final, ¡vosotros también... seréis parte de mí...!",
						"vietnamese": "Cuối cùng, các ngươi cũng... sẽ trở thành một phần của ta...!",
						"thai": "ในที่สุด พวกเจ้าก็… จะกลายเป็นส่วนหนึ่งของข้า…!",
						"hindi": "अंत में, तुम भी… मेरे अंश बन जाओगे…!"
					},
					"emotion": "base",
					"speaker": "boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "절대… 포기하지 않아…!",
						"english": "Never... will I give up...!",
						"japanese": "決して… 諦めない…！",
						"chinese": "绝不… 放弃…！",
						"french": "Jamais… je n'abandonnerai… !",
						"spanish": "¡Nunca… me rendiré…!",
						"vietnamese": "Tuyệt đối… không bỏ cuộc…!",
						"thai": "ไม่เคย… ยอมแพ้…!",
						"hindi": "कभी नहीं… हार मानूँगा…!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "이 얼음 감옥에서… 영원히 고통받아라…!",
						"english": "In this ice prison... suffer eternally...!",
						"japanese": "この氷の牢獄で… 永遠に苦しめ…！",
						"chinese": "在这冰之牢狱中… 永远受苦吧…！",
						"french": "Dans cette prison de glace... souffrez éternellement...!",
						"spanish": "¡En esta prisión de hielo... sufriréis eternamente...!",
						"vietnamese": "Trong ngục tù băng giá này… hãy chịu đựng sự đau khổ vĩnh viễn…!",
						"thai": "ในคุกน้ำแข็งแห่งนี้… จงทรมานชั่วนิรันดร์…!",
						"hindi": "इस बर्फीली जेल में… अनंतकाल तक पीड़ा सहो…!"
					},
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"차가운 혹한 속, 온기는 유혹이었다.",
			"피난처라 불리던 그곳은 — 사실 가장 잔혹한 감옥이었다.",
			"그리고 그 심장에는, 얼어붙은 영혼들의 비명이 울리고 있었다.",
			"구원을 찾던 자들, 영원한 어둠에 갇히다."
		],
		"english": [
			"In the bitter cold, warmth was a temptation.",
			"What was called a sanctuary — was in fact the cruelest prison.",
			"And in its heart, the screams of frozen souls echoed.",
			"Those who sought salvation, trapped in eternal darkness."
		],
		"japanese": [
			"凍てつく寒さの中、温もりは誘惑だった。",
			"聖域と呼ばれた場所は — 実は最も残酷な監獄だった。",
			"そしてその心臓には、凍てついた魂たちの悲鳴が響いていた。",
			"救いを求めた者たち、永遠の闇に囚われる。"
		],
		"chinese": [
			"在严酷的寒冬中，温暖是一种诱惑。",
			"那个被称为避难所的地方——实际上是最残酷的监狱。",
			"而在其核心深处，冰封灵魂的尖叫声回荡着。",
			"寻求救赎之人，被困于永恒的黑暗。"
		],
		"french": [
			"Au cœur d'un froid glacial, la chaleur était une tentation.",
			"Ce qui était appelé un sanctuaire — était en fait la prison la plus cruelle.",
			"Et en son cœur, les cris des âmes gelées résonnaient.",
			"Ceux qui cherchaient le salut, piégés dans les ténèbres éternelles."
		],
		"spanish": [
			"En el frío glacial, el calor era una tentación.",
			"Aquel lugar llamado refugio — era en realidad la prisión más cruel.",
			"Y en su corazón, los gritos de almas congeladas resonaban.",
			"Aquellos que buscaban la salvación, atrapados en la oscuridad eterna."
		],
		"vietnamese": [
			"Giữa giá lạnh khắc nghiệt, hơi ấm là một cám dỗ.",
			"Nơi được gọi là nơi trú ẩn — thực chất lại là nhà tù tàn khốc nhất.",
			"Và trong lòng nó, tiếng thét của những linh hồn đóng băng đang vang vọng.",
			"Những kẻ tìm kiếm sự cứu rỗi, bị mắc kẹt trong bóng tối vĩnh cửu."
		],
		"thai": [
			"ท่ามกลางความหนาวเหน็บ ไออุ่นคือสิ่งเย้ายวน",
			"สถานที่ที่ถูกเรียกว่าที่หลบภัยนั้น — แท้จริงแล้วคือคุกที่โหดร้ายที่สุด",
			"และในใจกลางของมัน เสียงกรีดร้องของวิญญาณที่ถูกแช่แข็งก็ดังก้อง",
			"ผู้ที่แสวงหาความรอด กลับถูกจองจำในความมืดมิดชั่วนิรันดร์"
		],
		"hindi": [
			"कड़ाके की ठंड में, गर्माहट एक प्रलोभन थी।",
			"जिसे अभयारण्य कहा जाता था — वह वास्तव में सबसे क्रूर जेल थी।",
			"और उसके दिल में, जमी हुई आत्माओं की चीखें गूँज रही थीं।",
			"मोक्ष की तलाश करने वाले, शाश्वत अंधकार में फंस गए।"
		]
	},
	"epilogue": {
		"korean": [
			"얼어붙은 주술사의 비명은 혹한 속에 흩어졌다.",
			"하지만 온기를 향한 유혹은 사라지지 않았다.",
			"피난처의 얼음 벽은 여전히 수많은 얼굴을 품고 있었다.",
			"이 비극은 끝난 것인가, 아니면 새로운 시작일 뿐인가.",
			"차가운 진실만이, 그들을 영원히 묶어두었다."
		],
		"english": [
			"The frozen shaman's screams scattered in the bitter cold.",
			"But the temptation for warmth did not disappear.",
			"The icy walls of the sanctuary still held countless faces.",
			"Is this tragedy over, or merely a new beginning?",
			"Only the cold truth bound them forever."
		],
		"japanese": [
			"凍てついた呪術師の悲鳴は、酷寒の中に散っていった。",
			"しかし、温もりへの誘惑は消えなかった。",
			"聖域の氷の壁は、依然として無数の顔を宿していた。",
			"この悲劇は終わったのか、それとも新たな始まりに過ぎないのか。",
			"冷たい真実だけが、彼らを永遠に縛り付けていた。"
		],
		"chinese": [
			"冰冻咒术师的尖叫声消散在严寒中。",
			"然而，对温暖的诱惑并未消失。",
			"避难所的冰墙依然承载着无数张面孔。",
			"这场悲剧是结束了，还是仅仅一个新的开始？",
			"只有冰冷的真相，将他们永远束缚。"
		],
		"french": [
			"Les cris du chaman gelé se sont dispersés dans le froid glacial.",
			"Mais la tentation de la chaleur ne disparut pas.",
			"Les murs de glace du sanctuaire contenaient toujours d'innombrables visages.",
			"Cette tragédie est-elle terminée, ou seulement un nouveau début ?",
			"Seule la froide vérité les liait pour toujours."
		],
		"spanish": [
			"Los gritos del chamán congelado se dispersaron en el frío gélido.",
			"Pero la tentación de la calidez no desapareció.",
			"Las paredes de hielo del refugio aún albergaban incontables rostros.",
			"¿Ha terminado esta tragedia, o es solo un nuevo comienzo?",
			"Solo la fría verdad los ató para siempre."
		],
		"vietnamese": [
			"Tiếng thét của pháp sư đóng băng tan biến trong giá lạnh.",
			"Nhưng sự cám dỗ hướng về hơi ấm vẫn không biến mất.",
			"Những bức tường băng của nơi trú ẩn vẫn còn ôm giữ vô số khuôn mặt.",
			"Bi kịch này đã kết thúc, hay chỉ là một khởi đầu mới?",
			"Chỉ có sự thật lạnh lùng mới trói buộc họ mãi mãi."
		],
		"thai": [
			"เสียงกรีดร้องของหมอผีที่ถูกแช่แข็งสลายไปในความหนาวเหน็บ",
			"แต่แรงเย้ายวนสู่ไออุ่นก็ยังไม่จางหายไป",
			"กำแพงน้ำแข็งของที่หลบภัยยังคงเก็บซ่อนใบหน้ามากมายไว้",
			"โศกนาฏกรรมนี้จบลงแล้ว หรือเป็นเพียงจุดเริ่มต้นใหม่เท่านั้น",
			"มีเพียงความจริงอันเย็นชาเท่านั้นที่ผูกมัดพวกเขาไว้ตลอดไป"
		],
		"hindi": [
			"जमी हुई तांत्रिक की चीखें कड़ाके की ठंड में बिखर गईं।",
			"लेकिन गर्माहट का प्रलोभन गायब नहीं हुआ।",
			"अभयारण्य की बर्फीली दीवारें अभी भी अनगिनत चेहरों को समेटे हुए थीं।",
			"क्या यह त्रासदी खत्म हो गई है, या केवल एक नई शुरुआत है?",
			"केवल ठंडी सच्चाई ने ही उन्हें हमेशा के लिए बांध रखा था।"
		]
	}
} as const;
