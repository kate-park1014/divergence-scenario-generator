export const scenario_snowy_skaalbane_93_02 = {
	"scenario_id": "snowy_skaalbane_93_02",
	"order": 2,
	"act": "rising",
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
					"content": {
						"korean": "차가운 얼음벽. 그 안에 수많은 얼굴이 박혀 있었다.",
						"english": "Cold ice walls. Countless faces were embedded within them.",
						"japanese": "冷たい氷の壁。その中に無数の顔が埋め込まれていた。",
						"chinese": "冰冷的墙壁。无数面孔镶嵌其中。",
						"french": "Murs de glace froids. D'innombrables visages y étaient incrustés.",
						"spanish": "Paredes de hielo frías. Innumerables rostros estaban incrustados en ellas.",
						"vietnamese": "Bức tường băng lạnh lẽo. Vô số khuôn mặt bị đóng băng bên trong.",
						"thai": "กำแพงน้ำแข็งเย็นเยือก ใบหน้ามากมายถูกฝังอยู่ข้างใน",
						"hindi": "ठंडी बर्फीली दीवारें। उनमें अनगिनत चेहरे जड़े हुए थे।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "저 얼굴들… 전부 흡수된 사람들이야?",
						"english": "Those faces... are they all absorbed people?",
						"japanese": "あの顔たち…全部、吸収された人たちなの？",
						"chinese": "那些面孔……都是被吸收的人吗？",
						"french": "Ces visages... sont-ils tous des gens absorbés ?",
						"spanish": "¿Esos rostros... son todos personas absorbidas?",
						"vietnamese": "Những khuôn mặt đó... đều là những người bị hấp thụ sao?",
						"thai": "ใบหน้าเหล่านั้น... พวกเขาถูกดูดกลืนไปหมดแล้วหรือ?",
						"hindi": "वो चेहरे... क्या वो सब समाहित हुए लोग हैं?"
					},
					"speaker": "character_any"
				},
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그래. 이 탑의 핵이 품은 이름들.",
						"english": "Yes. The names held by this tower's core.",
						"japanese": "ああ。この塔の核が宿す名前たちだ。",
						"chinese": "是的。这座塔的核心所承载的名字。",
						"french": "Oui. Les noms portés par le noyau de cette tour.",
						"spanish": "Sí. Los nombres que alberga el núcleo de esta torre.",
						"vietnamese": "Phải. Những cái tên mà hạt nhân của tòa tháp này nắm giữ.",
						"thai": "ใช่ ชื่อที่แกนกลางของหอคอยนี้เก็บไว้",
						"hindi": "हाँ। इस मीनार के केंद्र में निहित नाम।"
					},
					"type": "speech",
					"speaker": "eira"
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
					"duration_ms": 450,
					"speaker": "eira",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "느껴져? 이 진동.",
						"english": "Do you feel it? This tremor.",
						"japanese": "感じるか？この振動。",
						"chinese": "感觉到了吗？这种颤动。",
						"french": "Tu le sens ? Cette vibration.",
						"spanish": "¿Lo sientes? Este temblor.",
						"vietnamese": "Cảm thấy không? Sự rung động này.",
						"thai": "รู้สึกไหม? แรงสั่นสะเทือนนี้",
						"hindi": "महसूस हो रहा है? ये कंपन।"
					},
					"speaker": "eira",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "진동? 뭐가?",
						"english": "Tremor? What?",
						"japanese": "振動？何が？",
						"chinese": "颤动？什么颤动？",
						"french": "Vibration ? Quoi ?",
						"spanish": "¿Temblor? ¿Qué?",
						"vietnamese": "Rung động? Cái gì?",
						"thai": "สั่นสะเทือน? อะไร?",
						"hindi": "कंपन? क्या?"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "얼음 속 얼굴들의 눈꺼풀. 떨리고 있어.",
						"english": "The eyelids of the faces in the ice. They're trembling.",
						"japanese": "氷の中の顔たちのまぶたが。震えている。",
						"chinese": "冰中面孔的眼睑。它们正在颤抖。",
						"french": "Les paupières des visages dans la glace. Elles tremblent.",
						"spanish": "Los párpados de los rostros en el hielo. Están temblando.",
						"vietnamese": "Mí mắt của những khuôn mặt trong băng. Chúng đang rung lên.",
						"thai": "เปลือกตาของใบหน้าในน้ำแข็ง กำลังสั่นไหว",
						"hindi": "बर्फ में चेहरों की पलकें। वे कांप रही हैं।"
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 550,
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "점점 선명해지는군. 이 떨림.",
						"english": "It's getting clearer. This tremor.",
						"japanese": "だんだん鮮明になっていく。この震えが。",
						"chinese": "越来越清晰了。这份颤抖。",
						"french": "Ça devient de plus en plus clair. Ce tremblement.",
						"spanish": "Se está volviendo más claro. Este temblor.",
						"vietnamese": "Càng lúc càng rõ. Sự rung chuyển này.",
						"thai": "ชัดเจนขึ้นเรื่อยๆ เลยนะ การสั่นสะเทือนนี้",
						"hindi": "यह और स्पष्ट होता जा रहा है। यह कंपन।"
					},
					"type": "speech",
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "정말이야. 마치… 깨어나려는 것처럼.",
						"english": "Indeed. As if… it's about to awaken.",
						"japanese": "本当だ。まるで…目覚めようとしているかのように。",
						"chinese": "真的。仿佛…就要苏醒了。",
						"french": "En effet. Comme si… il était sur le point de se réveiller.",
						"spanish": "De verdad. Como si… estuviera a punto de despertar.",
						"vietnamese": "Thật vậy. Cứ như… sắp tỉnh dậy vậy.",
						"thai": "จริงด้วย เหมือนกับว่า... กำลังจะตื่นขึ้นมา",
						"hindi": "वास्तव में। जैसे… यह जागने वाला हो।"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "전부… 하나의 심장의 눈동자야. 곧 깨어나.",
						"english": "All of it… the eyes of a single heart. It will awaken soon.",
						"japanese": "すべて…一つの心臓の瞳だ。まもなく目覚める。",
						"chinese": "全部…都是一颗心的眼眸。很快就会苏醒。",
						"french": "Tout… est l'œil d'un seul cœur. Il se réveillera bientôt.",
						"spanish": "Todo… es el ojo de un solo corazón. Despertará pronto.",
						"vietnamese": "Tất cả… là đôi mắt của một trái tim. Sắp tỉnh dậy rồi.",
						"thai": "ทั้งหมด... คือดวงตาของหัวใจดวงเดียว กำลังจะตื่นแล้ว",
						"hindi": "यह सब… एक ही दिल की आँखें हैं। जल्द ही यह जाग जाएगा।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "하나의 심장…?",
						"english": "One heart…?",
						"japanese": "一つの心臓…？",
						"chinese": "一颗心…？",
						"french": "Un seul cœur… ?",
						"spanish": "¿Un solo corazón…?",
						"vietnamese": "Một trái tim…?",
						"thai": "หัวใจดวงเดียว...?",
						"hindi": "एक ही दिल…?"
					},
					"speaker": "character_any",
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						2
					],
					"duration_ms": 480,
					"speaker": "eira",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이제, 진실이 모습을 드러낼 시간이야.",
						"english": "Now, it's time for the truth to reveal itself.",
						"japanese": "さあ、真実が姿を現す時だ。",
						"chinese": "现在，是真相大白的时候了。",
						"french": "Maintenant, il est temps que la vérité se révèle.",
						"spanish": "Ahora, es el momento de que la verdad se revele.",
						"vietnamese": "Giờ là lúc sự thật lộ diện.",
						"thai": "ตอนนี้ ได้เวลาที่ความจริงจะเปิดเผยแล้ว",
						"hindi": "अब, सच के सामने आने का समय आ गया है।"
					},
					"speaker": "eira",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "막아야 해. 깨어나게 둘 수 없어.",
						"english": "We must stop it. We can't let it awaken.",
						"japanese": "止めなければ。目覚めさせてはならない。",
						"chinese": "必须阻止。不能让它苏醒。",
						"french": "Il faut l'arrêter. Nous ne pouvons pas le laisser se réveiller.",
						"spanish": "Debemos detenerlo. No podemos dejar que despierte.",
						"vietnamese": "Phải ngăn lại. Không thể để nó tỉnh dậy.",
						"thai": "ต้องหยุดมัน เราปล่อยให้มันตื่นไม่ได้",
						"hindi": "हमें इसे रोकना होगा। हम इसे जागने नहीं दे सकते।"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "너희가 직면할 거야. 이 탑의 진짜 굶주림을.",
						"english": "You will face it. The true hunger of this tower.",
						"japanese": "お前たちは直面することになるだろう。この塔の真の飢えに。",
						"chinese": "你们将面临。这座塔真正的饥渴。",
						"french": "Vous ferez face. À la véritable faim de cette tour.",
						"spanish": "Os enfrentaréis. Al verdadero hambre de esta torre.",
						"vietnamese": "Các ngươi sẽ đối mặt. Với cơn đói thực sự của tòa tháp này.",
						"thai": "พวกเจ้าจะได้เผชิญหน้า กับความหิวกระหายที่แท้จริงของหอคอยนี้",
						"hindi": "आप इसका सामना करेंगे। इस मीनार की असली भूख का।"
					},
					"type": "speech",
					"speaker": "eira"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "푸른빛 섬광이 심장이 터질 듯 격렬해졌다.",
						"english": "The blue flash intensified, as if a heart would burst.",
						"japanese": "青い閃光が、心臓が破裂しそうなほど激しくなった。",
						"chinese": "蓝色的闪光愈发强烈，仿佛心脏要炸裂一般。",
						"french": "L'éclair bleu s'intensifia, comme si un cœur allait éclater.",
						"spanish": "El destello azul se intensificó, como si un corazón fuera a estallar.",
						"vietnamese": "Tia chớp xanh mãnh liệt đến mức trái tim như muốn nổ tung.",
						"thai": "แสงสีน้ำเงินวาบขึ้นอย่างรุนแรง ราวกับหัวใจจะระเบิด",
						"hindi": "नीली चमक तेज हो गई, मानो दिल फट जाएगा।"
					},
					"speaker": "narrator"
				},
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "굶주림의 근원… 드디어 모습을 드러내는구나.",
						"english": "The source of hunger… finally revealing itself.",
						"japanese": "飢えの根源…ついに姿を現すのか。",
						"chinese": "饥饿的根源…终于现身了。",
						"french": "La source de la faim… se révèle enfin.",
						"spanish": "La fuente del hambre… finalmente se revela.",
						"vietnamese": "Nguồn gốc của cơn đói… cuối cùng cũng lộ diện.",
						"thai": "ต้นกำเนิดของความหิวกระหาย... ในที่สุดก็ปรากฏตัวออกมา",
						"hindi": "भूख का स्रोत… आखिरकार खुद को प्रकट कर रहा है।"
					},
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…나의 잠을 방해하는 어리석은 자들.",
						"english": "…Fools who disturb my slumber.",
						"japanese": "…私の眠りを妨げる愚かな者たちよ。",
						"chinese": "…打扰我沉睡的愚蠢之人。",
						"french": "…Fous qui dérangent mon sommeil.",
						"spanish": "…Necios que perturban mi sueño.",
						"vietnamese": "…Những kẻ ngu ngốc dám quấy rầy giấc ngủ của ta.",
						"thai": "...พวกคนโง่ที่มารบกวนการหลับใหลของข้า",
						"hindi": "…मूर्ख जो मेरी नींद में खलल डालते हैं।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "네가 이 탑의 굶주림이야?",
						"english": "Are you the hunger of this tower?",
						"japanese": "お前がこの塔の飢えか？",
						"chinese": "你就是这座塔的饥饿吗？",
						"french": "Es-tu la faim de cette tour ?",
						"spanish": "¿Eres el hambre de esta torre?",
						"vietnamese": "Ngươi là cơn đói của tòa tháp này sao?",
						"thai": "เจ้าคือความหิวโหยของหอคอยนี้หรือ?",
						"hindi": "क्या तुम इस मीनार की भूख हो?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "너희가, 나의 새로운 먹이가 될 것이다.",
						"english": "You will be my new prey.",
						"japanese": "お前たちが、私の新たな餌食となるだろう。",
						"chinese": "你们将成为我的新猎物。",
						"french": "Vous serez ma nouvelle proie.",
						"spanish": "Seréis mi nueva presa.",
						"vietnamese": "Các ngươi sẽ trở thành con mồi mới của ta.",
						"thai": "พวกเจ้าจะเป็นเหยื่อรายใหม่ของข้า",
						"hindi": "तुम मेरे नए शिकार बनोगे।"
					},
					"speaker": "random_boss"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "차가운 얼음이 온몸을 옥죄었다.",
						"english": "Cold ice gripped my entire body.",
						"japanese": "冷たい氷が全身を締め付けた。",
						"chinese": "冰冷的寒气桎梏全身。",
						"french": "La glace froide a étreint tout mon corps.",
						"spanish": "El hielo frío oprimió todo mi cuerpo.",
						"vietnamese": "Băng lạnh siết chặt toàn thân.",
						"thai": "น้ำแข็งเย็นเยือกตรึงร่างไว้",
						"hindi": "ठंडी बर्फ ने पूरे शरीर को जकड़ लिया।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "아직도 미련한가. 너희의 분노는… 결국 나를 깨울 뿐.",
						"english": "Still foolish? Your rage... will only awaken me in the end.",
						"japanese": "まだ愚かなのか。お前たちの怒りは… 結局、私を目覚めさせるだけだ。",
						"chinese": "难道还执迷不悟吗？你们的愤怒…终究只会唤醒我。",
						"french": "Toujours aussi insensé ? Votre rage... ne fera que me réveiller à la fin.",
						"spanish": "¿Todavía eres necio? Vuestra ira... al final, solo me despertará.",
						"vietnamese": "Vẫn còn si mê sao? Cơn giận của các ngươi... rốt cuộc chỉ khiến ta tỉnh giấc mà thôi.",
						"thai": "ยังคงหลงผิดหรือ? ความโกรธแค้นของพวกเจ้า... สุดท้ายก็จะปลุกข้าให้ตื่นขึ้นเท่านั้น",
						"hindi": "अभी भी नासमझ हो? तुम्हारा क्रोध... अंततः मुझे ही जगाएगा।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아니… 우린 멈추지 않아.",
						"english": "No... We won't stop.",
						"japanese": "いや… 私たちは止まらない。",
						"chinese": "不… 我们不会停止。",
						"french": "Non... Nous ne nous arrêterons pas.",
						"spanish": "No... No nos detendremos.",
						"vietnamese": "Không... Chúng ta sẽ không dừng lại.",
						"thai": "ไม่... เราจะไม่หยุด",
						"hindi": "नहीं... हम रुकेंगे नहीं।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"duration_ms": 400,
					"speaker": "eira",
					"type": "direction",
					"spot": [
						2,
						2
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "다시 일어서야 해. 모든 진실을 밝히기 위해.",
						"english": "You must rise again. To reveal all the truth.",
						"japanese": "もう一度立ち上がらなければならない。全ての真実を明らかにするために。",
						"chinese": "你必须再次站起来。为了揭示所有真相。",
						"french": "Tu dois te relever. Pour révéler toute la vérité.",
						"spanish": "Debes levantarte de nuevo. Para revelar toda la verdad.",
						"vietnamese": "Bạn phải đứng dậy lần nữa. Để tiết lộ tất cả sự thật.",
						"thai": "คุณต้องลุกขึ้นอีกครั้ง เพื่อเปิดเผยความจริงทั้งหมด",
						"hindi": "तुम्हें फिर से उठना होगा। सारी सच्चाई का खुलासा करने के लिए।"
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "base"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "정체 모를 보스는 산산조각 났다. 그러나 진동은 멈추지 않았다.",
						"english": "The unknown boss shattered. But the tremors didn't stop.",
						"japanese": "正体不明のボスは粉々になった。しかし、振動は止まらなかった。",
						"chinese": "身份不明的 Boss 支离破碎。然而震动并未停止。",
						"french": "Le boss inconnu s'est brisé en mille morceaux. Mais les vibrations ne se sont pas arrêtées.",
						"spanish": "El jefe desconocido se hizo pedazos. Pero la vibración no cesó.",
						"vietnamese": "Con trùm vô danh đã tan vỡ. Nhưng sự rung chuyển không ngừng lại.",
						"thai": "บอสปริศนาแตกสลาย แต่แรงสั่นสะเทือนยังไม่หยุด",
						"hindi": "अज्ञात बॉस बिखर गया। लेकिन कंपन नहीं रुका।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않아… 나는… 핵 그 자체…",
						"english": "...It's not over yet... I am... the core itself...",
						"japanese": "…まだ終わっていない… 私は… 核そのもの…",
						"chinese": "…尚未结束…我即是…核心本身…",
						"french": "...Ce n'est pas encore fini... Je suis... le noyau lui-même...",
						"spanish": "...Aún no ha terminado... Yo soy... el núcleo mismo...",
						"vietnamese": "...Chưa kết thúc đâu... Ta là... chính bản thân hạt nhân...",
						"thai": "...ยังไม่จบ... ข้าคือ... แก่นแท้...",
						"hindi": "अभी खत्म नहीं हुआ... मैं... खुद मूल हूँ..."
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira",
					"spot": [
						3,
						3
					],
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "Skaalbane… 기억할게. 네가 삼킨 모든 이름과 함께.",
						"english": "Skaalbane... I'll remember. Along with all the names you swallowed.",
						"japanese": "スカールベイン… 覚えておこう。お前が飲み込んだすべての名前と共に。",
						"chinese": "斯卡尔班… 我会记住。连同你吞噬的所有名字。",
						"french": "Skaalbane... Je me souviendrai. Avec tous les noms que tu as dévorés.",
						"spanish": "Skaalbane... Lo recordaré. Junto con todos los nombres que engulliste.",
						"vietnamese": "Skaalbane... Ta sẽ nhớ. Cùng với tất cả những cái tên ngươi đã nuốt chửng.",
						"thai": "สกาลเบน... ข้าจะจำไว้ พร้อมกับทุกชื่อที่เจ้ากลืนกินไป",
						"hindi": "स्कॉलबेन... मुझे याद रहेगा। उन सभी नामों के साथ जिन्हें तुमने निगल लिया।"
					},
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "핵 그 자체라니… 그럼 또 나타난다는 거야?",
						"english": "The core itself... Does that mean it will reappear?",
						"japanese": "核そのものだと… なら、また現れるということか？",
						"chinese": "核心本身… 难道还会再次出现吗？",
						"french": "Le noyau lui-même... Cela signifie-t-il qu'il réapparaîtra ?",
						"spanish": "¿El núcleo mismo... significa que volverá a aparecer?",
						"vietnamese": "Chính bản thân hạt nhân... Vậy là nó sẽ lại xuất hiện sao?",
						"thai": "แก่นแท้เอง... งั้นก็หมายความว่าจะปรากฏตัวอีกครั้งหรือ?",
						"hindi": "खुद मूल... तो क्या यह फिर से प्रकट होगा?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "얼음 속 얼굴들의 떨림은 멈췄지만, 불안한 정적만이 남았다.",
						"english": "The trembling of the faces in the ice stopped, but only an uneasy silence remained.",
						"japanese": "氷の中の顔の震えは止まったが、不穏な静寂だけが残った。",
						"chinese": "冰中面孔的颤抖停止了，但只剩下不安的寂静。",
						"french": "Les tremblements des visages dans la glace cessèrent, mais seul un silence troublant demeurait.",
						"spanish": "El temblor de los rostros en el hielo cesó, pero solo quedó un silencio inquietante.",
						"vietnamese": "Sự run rẩy của những khuôn mặt trong băng đã ngừng lại, nhưng chỉ còn lại sự tĩnh lặng bất an.",
						"thai": "ใบหน้าในน้ำแข็งหยุดสั่นแล้ว แต่ยังคงเหลือเพียงความเงียบสงบที่น่าหวาดหวั่น",
						"hindi": "बर्फ में चेहरों का कंपन रुक गया, लेकिन केवल एक बेचैन सन्नाटा बचा था।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"얼음 속 수많은 얼굴, 그 눈꺼풀이 미세하게 떨리기 시작했다.",
			"에이라는 알았다. 이것은 깨어남의 시작.",
			"모든 얼굴은 하나의 심장을 향해 있었다.",
			"이 탑의 진짜 굶주림이, 이제 눈을 뜬다."
		],
		"english": [
			"Countless faces in the ice, their eyelids began to subtly tremble.",
			"Eira knew. This was the beginning of awakening.",
			"All faces were turned towards a single heart.",
			"The true hunger of this tower now awakens."
		],
		"japanese": [
			"氷の中の無数の顔、そのまぶたが微かに震え始めた。",
			"エイラは知っていた。これは目覚めの始まりだと。",
			"すべての顔は一つの心臓に向けられていた。",
			"この塔の本当の飢えが、今、目を覚ます。"
		],
		"chinese": [
			"冰中无数面孔，他们的眼睑开始微微颤动。",
			"艾拉知道。这是觉醒的开始。",
			"所有面孔都朝向一颗心脏。",
			"这座塔真正的饥饿，现在睁开了眼睛。"
		],
		"french": [
			"D'innombrables visages dans la glace, leurs paupières commencèrent à trembler subtilement.",
			"Eira savait. C'était le début de l'éveil.",
			"Tous les visages étaient tournés vers un seul cœur.",
			"La véritable faim de cette tour s'éveille maintenant."
		],
		"spanish": [
			"Innumerables rostros en el hielo, sus párpados comenzaron a temblar sutilmente.",
			"Eira lo sabía. Este era el comienzo del despertar.",
			"Todos los rostros estaban orientados hacia un único corazón.",
			"El verdadero hambre de esta torre, ahora despierta."
		],
		"vietnamese": [
			"Vô số khuôn mặt trong băng, mí mắt của họ bắt đầu rung nhẹ.",
			"Eira biết. Đây là khởi đầu của sự thức tỉnh.",
			"Mọi khuôn mặt đều hướng về một trái tim duy nhất.",
			"Cơn đói thực sự của tòa tháp này, giờ đây đã thức tỉnh."
		],
		"thai": [
			"ใบหน้ามากมายในน้ำแข็ง เปลือกตาของพวกเขาเริ่มสั่นไหวเล็กน้อย",
			"ไอรารู้ นี่คือจุดเริ่มต้นของการตื่นขึ้น",
			"ใบหน้าทั้งหมดหันเข้าหาหัวใจดวงเดียว",
			"ความหิวโหยที่แท้จริงของหอคอยนี้กำลังตื่นขึ้น"
		],
		"hindi": [
			"बर्फ में अनगिनत चेहरे, उनकी पलकें हल्की-सी कांपने लगीं。",
			"एरा जानती थी। यह जागृति की शुरुआत थी।",
			"सभी चेहरे एक ही दिल की ओर थे।",
			"इस मीनार की असली भूख, अब जाग उठी है।"
		]
	}
} as const;
