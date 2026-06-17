export const scenario_snowy_skuld_11_03 = {
	"scenario_id": "snowy_skuld_11_03",
	"order": 3,
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
	"prologue": {
		"korean": [
			"빙하 미궁, 더 깊은 곳으로.",
			"에이라는 속삭임을 들었다.",
			"룬 문자가 숨긴 진실, 그것을 파헤쳐야 한다.",
			"하지만 미궁은 순순히 길을 내주지 않았다."
		],
		"english": [
			"Glacial Labyrinth, deeper in.",
			"Eira heard whispers.",
			"The truth hidden by the runes must be unearthed.",
			"But the labyrinth did not yield easily."
		],
		"japanese": [
			"氷河の迷宮、さらに深部へ。",
			"エイラは囁きを聞いた。",
			"ルーン文字が隠した真実、それを暴かねばならない。",
			"しかし、迷宮は素直に道を開けなかった。"
		],
		"chinese": [
			"冰川迷宫，深入其中。",
			"艾拉听到了低语。",
			"必须揭示符文所隐藏的真相。",
			"但迷宫并未轻易让路。"
		],
		"french": [
			"Labyrinthe Glaciaire, plus profond.",
			"Eira entendit des murmures.",
			"La vérité cachée par les runes doit être révélée.",
			"Mais le labyrinthe ne céda pas facilement."
		],
		"spanish": [
			"Laberinto Glacial, más profundo.",
			"Eira escuchó susurros.",
			"La verdad oculta por las runas debe ser desenterrada.",
			"Pero el laberinto no cedió fácilmente."
		],
		"vietnamese": [
			"Mê cung Băng hà, sâu hơn nữa.",
			"Eira nghe thấy những lời thì thầm.",
			"Sự thật ẩn giấu trong chữ rune phải được khai quật.",
			"Nhưng mê cung không dễ dàng nhường lối."
		],
		"thai": [
			"เขาวงกตธารน้ำแข็ง, ลึกเข้าไปอีก.",
			"ไอราได้ยินเสียงกระซิบ.",
			"ความจริงที่ซ่อนอยู่ในอักษรรูนต้องถูกเปิดเผย.",
			"แต่เขาวงกตก็ไม่ยอมเปิดทางง่ายๆ."
		],
		"hindi": [
			"ग्लेशियल भूलभुलैया, और गहरा।",
			"ऐरा ने फुसफुसाहट सुनी।",
			"रून्स द्वारा छिपी सच्चाई को उजागर करना होगा।",
			"लेकिन भूलभुलैया ने आसानी से रास्ता नहीं दिया।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "얼음 벽에 희미한 룬 문자가 빛났다. 잊힌 고대 바이킹의 흔적.",
						"english": "Faint runes glowed on the ice wall. Traces of ancient, forgotten Vikings.",
						"japanese": "氷の壁に淡いルーン文字が輝いた。忘れ去られた古代ヴァイキングの痕跡。",
						"chinese": "冰墙上微弱的符文闪烁着。那是被遗忘的古代维京人的痕迹。",
						"french": "De faibles runes brillaient sur le mur de glace. Des traces d'anciens Vikings oubliés.",
						"spanish": "Débiles runas brillaban en la pared de hielo. Rastros de antiguos vikingos olvidados.",
						"vietnamese": "Những chữ rune mờ nhạt phát sáng trên bức tường băng. Dấu vết của người Viking cổ đại đã bị lãng quên.",
						"thai": "อักษรรูนจางๆ ส่องประกายบนกำแพงน้ำแข็ง. ร่องรอยของชาวไวกิ้งโบราณที่ถูกลืม.",
						"hindi": "बर्फ की दीवार पर धुंधले रून्स चमक रहे थे। भूले हुए प्राचीन वाइकिंग्स के निशान।"
					}
				},
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "eira",
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이건… 단순한 얼음 문양이 아니야.",
						"english": "This… isn't just a simple ice pattern.",
						"japanese": "これは…ただの氷の模様じゃない。",
						"chinese": "这…不仅仅是简单的冰纹。",
						"french": "Ce n'est… pas juste un simple motif de glace.",
						"spanish": "Esto… no es solo un simple patrón de hielo.",
						"vietnamese": "Đây… không chỉ là một hoa văn băng đơn giản.",
						"thai": "นี่…ไม่ใช่แค่ลวดลายน้ำแข็งธรรมดา.",
						"hindi": "यह… सिर्फ एक साधारण बर्फ का पैटर्न नहीं है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "에이라, 그게 뭔데?",
						"english": "Eira, what is it?",
						"japanese": "エイラ、それは何なの？",
						"chinese": "艾拉，那是什么？",
						"french": "Eira, qu'est-ce que c'est ?",
						"spanish": "Eira, ¿qué es?",
						"vietnamese": "Eira, đó là gì?",
						"thai": "ไอรา, มันคืออะไร?",
						"hindi": "ऐरा, यह क्या है?"
					}
				},
				{
					"content": {
						"korean": "잊힌 역사의 기록… 스쿨드가 왜 이렇게 격렬하게 저항하는지 알 것 같아.",
						"english": "Records of a forgotten history… I think I understand why Skuld resists so fiercely.",
						"japanese": "忘れ去られた歴史の記録…スクルドがなぜこんなにも激しく抵抗するのか、分かる気がする。",
						"chinese": "被遗忘的历史记录…我似乎明白斯库尔德为何如此激烈地抵抗了。",
						"french": "Des archives d'une histoire oubliée… Je crois comprendre pourquoi Skuld résiste si farouchement.",
						"spanish": "Registros de una historia olvidada… Creo que entiendo por qué Skuld se resiste con tanta ferocidad.",
						"vietnamese": "Những ghi chép về một lịch sử bị lãng quên… Tôi nghĩ tôi hiểu tại sao Skuld lại phản kháng dữ dội như vậy.",
						"thai": "บันทึกของประวัติศาสตร์ที่ถูกลืม… ฉันคิดว่าฉันเข้าใจแล้วว่าทำไมสกัลด์ถึงต่อต้านอย่างดุเดือด.",
						"hindi": "एक भूली हुई इतिहास के रिकॉर्ड… मुझे लगता है कि मैं समझ गया कि स्कल्ड इतनी भयंकर रूप से क्यों विरोध कर रहा है।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "random_boss",
					"duration_ms": 400,
					"type": "direction",
					"action": "shake"
				},
				{
					"content": {
						"korean": "우리를 막으려는 거야. 필사적으로.",
						"english": "They're trying to stop us. Desperately.",
						"japanese": "私たちを止めようとしているんだ。必死に。",
						"chinese": "他们想阻止我们。拼命地。",
						"french": "Ils essaient de nous arrêter. Désespérément.",
						"spanish": "Están intentando detenernos. Desesperadamente.",
						"vietnamese": "Họ đang cố gắng ngăn cản chúng ta. Một cách tuyệt vọng.",
						"thai": "พวกเขากำลังพยายามหยุดเรา. อย่างสุดกำลัง.",
						"hindi": "वे हमें रोकने की कोशिश कर रहे हैं। हताशा से।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"content": {
						"korean": "미궁은 더욱 깊어지고, 룬 문자의 흔적도 짙어졌다.",
						"english": "The labyrinth deepened, and the traces of runes grew stronger.",
						"japanese": "迷宮はさらに深まり、ルーン文字の痕跡も濃くなった。",
						"chinese": "迷宫变得更深，符文的痕迹也愈发浓重。",
						"french": "Le labyrinthe s'enfonça, et les traces des runes s'épaissirent.",
						"spanish": "El laberinto se hizo más profundo, y las huellas de las runas se hicieron más intensas.",
						"vietnamese": "Mê cung càng sâu hơn, và dấu vết của chữ rune cũng đậm hơn.",
						"thai": "เขาวงกตลึกเข้าไปอีก, และร่องรอยของอักษรรูนก็เข้มข้นขึ้น.",
						"hindi": "भूलभुलैया और गहरी हो गई, और रून्स के निशान भी गहरे होते गए।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "eira",
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "이걸 봐. '맹세' 그리고 '수호'…",
						"english": "Look at this. 'Oath' and 'Guard'...",
						"japanese": "これを見て。「誓い」そして「守護」…",
						"chinese": "看看这个。“誓约”和“守护”……",
						"french": "Regarde ça. \"Serment\" et \"Protection\"...",
						"spanish": "Mira esto. \"Juramento\" y \"Protección\"...",
						"vietnamese": "Nhìn này. \"Lời thề\" và \"Bảo vệ\"...",
						"thai": "ดูนี่สิ 'คำสาบาน' และ 'การปกป้อง'...",
						"hindi": "इसे देखो। 'शपथ' और 'रक्षा'..."
					}
				},
				{
					"content": {
						"korean": "스쿨드가 지키려는 게 저 룬 문자들이야?",
						"english": "Are those runes what Skuld is trying to protect?",
						"japanese": "スクルドが守ろうとしているのは、あのルーン文字なのか？",
						"chinese": "斯库尔德想守护的就是那些符文吗？",
						"french": "Skuld essaie-t-elle de protéger ces runes ?",
						"spanish": "¿Son esas runas lo que Skuld intenta proteger?",
						"vietnamese": "Skuld đang cố bảo vệ những ký tự rune đó sao?",
						"thai": "รูนเหล่านั้นคือสิ่งที่สกัลด์พยายามจะปกป้องหรือเปล่า?",
						"hindi": "क्या स्कल्ड उन्हीं रूनों को बचाना चाहती है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "아니. 룬 문자는 단서일 뿐. 스쿨드는 무언가를… 그 안에 담긴 진실을 지키려는 거야.",
						"english": "No. The runes are just clues. Skuld is trying to protect something... the truth within them.",
						"japanese": "違う。ルーン文字は単なる手がかりに過ぎない。スクルドは何かを…その中に秘められた真実を守ろうとしているんだ。",
						"chinese": "不。符文只是线索。斯库尔德想要守护的是……其中蕴含的真相。",
						"french": "Non. Les runes ne sont que des indices. Skuld essaie de protéger quelque chose... la vérité qu'elles contiennent.",
						"spanish": "No. Las runas son solo pistas. Skuld está tratando de proteger algo... la verdad que hay dentro de ellas.",
						"vietnamese": "Không. Các ký tự rune chỉ là manh mối thôi. Skuld đang cố bảo vệ một thứ gì đó... sự thật ẩn chứa bên trong chúng.",
						"thai": "ไม่ใช่ รูนเป็นแค่เบาะแส สกัลด์พยายามจะปกป้องบางสิ่ง… ความจริงที่ซ่อนอยู่ในนั้น",
						"hindi": "नहीं। रन सिर्फ़ सुराग हैं। स्कल्ड कुछ… उनके अंदर छिपी सच्चाई को बचाना चाहती है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "크르릉…!",
						"english": "Grrr...!",
						"japanese": "グルルル…！",
						"chinese": "呜……！",
						"french": "Grrr... !",
						"spanish": "¡Grrr...!",
						"vietnamese": "Gầm gừ...!",
						"thai": "ครืน…!",
						"hindi": "गुर्राहट...!"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "물러서지 않아!",
						"english": "I won't back down!",
						"japanese": "退かない！",
						"chinese": "我不会退缩！",
						"french": "Je ne reculerai pas !",
						"spanish": "¡No me retiraré!",
						"vietnamese": "Tôi sẽ không lùi bước!",
						"thai": "ไม่ถอย!",
						"hindi": "मैं पीछे नहीं हटूंगा!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "끊임없이 이어지는 스쿨드의 공격, 미궁은 점점 더 기이한 형상으로 변해갔다.",
						"english": "Skuld's relentless attacks continued, and the labyrinth transformed into an increasingly bizarre shape.",
						"japanese": "スクルドの絶え間ない攻撃が続き、迷宮はますます奇妙な姿へと変貌していった。",
						"chinese": "斯库尔德的攻击连绵不绝，迷宫也变得越来越诡异。",
						"french": "Les attaques incessantes de Skuld continuaient, et le labyrinthe prenait une forme de plus en plus étrange.",
						"spanish": "Los incesantes ataques de Skuld continuaron, y el laberinto se transformó en una forma cada vez más extraña.",
						"vietnamese": "Các đợt tấn công không ngừng nghỉ của Skuld tiếp diễn, và mê cung dần biến thành một hình dạng ngày càng kỳ quái.",
						"thai": "การโจมตีที่ไม่หยุดยั้งของสกัลด์ดำเนินต่อไป เขาวงกตก็เปลี่ยนรูปร่างประหลาดขึ้นเรื่อยๆ",
						"hindi": "स्कल्ड के लगातार हमलों से भूलभुलैया धीरे-धीरे और भी अजीब रूप लेने लगी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "스쿨드의 공격이… 점점 더 지능적이야. 단순히 침입자를 막는 게 아니야.",
						"english": "Skuld's attacks are becoming... increasingly intelligent. It's not just blocking intruders.",
						"japanese": "スクルドの攻撃が…ますます知的になっている。単に侵入者を阻んでいるだけじゃない。",
						"chinese": "斯库尔德的攻击……越来越有智慧了。它不只是在阻挡入侵者。",
						"french": "Les attaques de Skuld deviennent... de plus en plus intelligentes. Elle ne se contente pas de bloquer les intrus.",
						"spanish": "Los ataques de Skuld se están volviendo... cada vez más inteligentes. No solo está bloqueando a los intrusos.",
						"vietnamese": "Các đợt tấn công của Skuld... ngày càng thông minh hơn. Không chỉ đơn thuần là ngăn chặn những kẻ xâm nhập.",
						"thai": "การโจมตีของสกัลด์... ฉลาดขึ้นเรื่อยๆ มันไม่ใช่แค่การป้องกันผู้บุกรุกเท่านั้น",
						"hindi": "स्कल्ड के हमले… और भी ज़्यादा चालाक होते जा रहे हैं। ये सिर्फ़ घुसपैठियों को रोकना नहीं है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그럼 뭐라는 거야?",
						"english": "Then what is it?",
						"japanese": "じゃあ、何なんだ？",
						"chinese": "那是什么？",
						"french": "Alors, qu'est-ce que c'est ?",
						"spanish": "Entonces, ¿qué es?",
						"vietnamese": "Vậy thì nó là gì?",
						"thai": "แล้วมันคืออะไรล่ะ?",
						"hindi": "तो फिर क्या है?"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira",
					"content": {
						"korean": "마치… 잃어버린 것을 애도하는 것처럼. 슬픔이 섞여있어.",
						"english": "It's as if... it's mourning something lost. There's sadness mixed in.",
						"japanese": "まるで…失われたものを悼むように。悲しみが混じっている。",
						"chinese": "就像……在哀悼失去的东西。其中夹杂着悲伤。",
						"french": "C'est comme si... elle pleurait quelque chose de perdu. Il y a de la tristesse mêlée à cela.",
						"spanish": "Es como si... estuviera de luto por algo perdido. Hay tristeza mezclada en ello.",
						"vietnamese": "Cứ như thể... nó đang than khóc vì một thứ đã mất. Có sự buồn bã xen lẫn trong đó.",
						"thai": "เหมือนกับ… กำลังไว้อาลัยให้กับสิ่งที่หายไป มีความเศร้าผสมอยู่ด้วย",
						"hindi": "जैसे… कोई खोई हुई चीज़ का मातम मना रहा हो। उसमें उदासी मिली हुई है।"
					}
				},
				{
					"speaker": "random_boss",
					"duration_ms": 400,
					"type": "direction",
					"action": "shake"
				},
				{
					"content": {
						"korean": "저게 슬픔이라고? 완전 미친 것 같아!",
						"english": "That's sadness? It seems completely insane!",
						"japanese": "あれが悲しみだと？完全に狂っているように見える！",
						"chinese": "那是悲伤？简直像疯了一样！",
						"french": "C'est de la tristesse ? Ça a l'air complètement fou !",
						"spanish": "¿Eso es tristeza? ¡Parece completamente una locura!",
						"vietnamese": "Đó là nỗi buồn ư? Thật điên rồ!",
						"thai": "นั่นคือความเศร้าเหรอ? ดูเหมือนจะบ้าไปแล้ว!",
						"hindi": "वो उदासी है? ये तो पूरी तरह से पागलपन लगता है!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "빙하 미궁의 심장부로 향하는 길, 공기는 더욱 차갑고 무거웠다.",
						"english": "Heading to the heart of the Glacial Labyrinth, the air grew colder and heavier.",
						"japanese": "氷河迷宮の心臓部へと向かう道、空気はさらに冷たく重くなった。",
						"chinese": "通往冰川迷宫深处的路途，空气愈发寒冷沉重。",
						"french": "En route vers le cœur du Labyrinthe Glaciaire, l'air devenait plus froid et plus lourd.",
						"spanish": "De camino al corazón del Laberinto Glaciar, el aire se volvió más frío y pesado.",
						"vietnamese": "Trên đường đến trung tâm Mê cung Băng giá, không khí trở nên lạnh và nặng nề hơn.",
						"thai": "ระหว่างทางสู่ใจกลางเขาวงกตธารน้ำแข็ง อากาศยิ่งหนาวเย็นและหนักอึ้งขึ้น",
						"hindi": "ग्लेशियल भूलभुलैया के हृदय की ओर बढ़ते हुए, हवा और ठंडी और भारी होती गई।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"spot": [
						2,
						4
					],
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "eira",
					"content": {
						"korean": "드디어… 해독할 수 있겠어. 스쿨드는…",
						"english": "Finally… I can decipher it. Skuld is…",
						"japanese": "ついに… 解読できる。スクルドは…",
						"chinese": "终于… 可以解读了。斯库尔德是…",
						"french": "Enfin… je peux le déchiffrer. Skuld est…",
						"spanish": "Por fin… puedo descifrarlo. Skuld es…",
						"vietnamese": "Cuối cùng… tôi có thể giải mã. Skuld là…",
						"thai": "ในที่สุด… ฉันก็ถอดรหัสได้แล้ว สกุลด์คือ…",
						"hindi": "आखिरकार… मैं इसे समझ सकता हूँ। स्कुल्ड है…"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "에이라, 위험해!",
						"english": "Ayla, it's dangerous!",
						"japanese": "エイラ、危ない！",
						"chinese": "艾拉，危险！",
						"french": "Ayla, attention, c'est dangereux !",
						"spanish": "¡Ayla, cuidado!",
						"vietnamese": "Ayla, nguy hiểm đấy!",
						"thai": "ไอล่า, อันตรายนะ!",
						"hindi": "आयला, ख़तरा है!"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…오지 마라…!",
						"english": "…Don't come closer…!",
						"japanese": "…来るな…！",
						"chinese": "…别过来…！",
						"french": "…Ne t'approche pas… !",
						"spanish": "…¡No te acerques…!",
						"vietnamese": "…Đừng lại gần…!",
						"thai": "…อย่าเข้ามา…!",
						"hindi": "…मत आओ…!"
					}
				},
				{
					"content": {
						"korean": "진실은… 알아야 해.",
						"english": "The truth… must be known.",
						"japanese": "真実は… 知らねばならない。",
						"chinese": "真相… 必须被揭示。",
						"french": "La vérité… doit être connue.",
						"spanish": "La verdad… debe saberse.",
						"vietnamese": "Sự thật… phải được biết.",
						"thai": "ความจริง… ต้องถูกเปิดเผย.",
						"hindi": "सच… जानना ही होगा।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "eira"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "마침내, 거대한 얼음 동굴. 그 중심에 스쿨드의 형상이 굳건히 서 있었다.",
						"english": "Finally, the vast ice cave. At its center, Skuld's figure stood firm.",
						"japanese": "ついに、巨大な氷の洞窟。その中心にスクルドの姿が確固として立っていた。",
						"chinese": "终于，巨大的冰洞。斯库尔德的身影坚毅地矗立在其中央。",
						"french": "Enfin, la vaste grotte de glace. Au centre, la silhouette de Skuld se tenait fermement.",
						"spanish": "Finalmente, la vasta cueva de hielo. En su centro, la figura de Skuld se alzaba firme.",
						"vietnamese": "Cuối cùng, hang động băng khổng lồ. Ở trung tâm, hình dáng của Skuld đứng vững vàng.",
						"thai": "ในที่สุด, ถ้ำน้ำแข็งขนาดใหญ่ ณ ใจกลางนั้น ร่างของสกุลด์ยืนตระหง่านอย่างมั่นคง",
						"hindi": "अंततः, विशाल बर्फ़ीली गुफा। उसके केंद्र में, स्कुल्ड की आकृति दृढ़ता से खड़ी थी।"
					}
				},
				{
					"content": {
						"korean": "여기까지 오다니… 어리석은 인간들.",
						"english": "To come this far… foolish humans.",
						"japanese": "ここまで来たか… 愚かな人間どもめ。",
						"chinese": "竟敢来到这里… 愚蠢的人类。",
						"french": "Être venus jusqu'ici… stupides humains.",
						"spanish": "Haber llegado hasta aquí… humanos estúpidos.",
						"vietnamese": "Dám đến tận đây… những con người ngu ngốc.",
						"thai": "กล้ามาถึงที่นี่… มนุษย์โง่เขลา",
						"hindi": "इतनी दूर तक आने की हिम्मत… मूर्ख इंसान।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "너는… 단순한 정령이 아니야.",
						"english": "You are… not merely a spirit.",
						"japanese": "お前は… 単なる精霊ではない。",
						"chinese": "你… 不仅仅是普通的精灵。",
						"french": "Tu n'es… pas un simple esprit.",
						"spanish": "Tú no eres… un simple espíritu.",
						"vietnamese": "Ngươi… không chỉ là một tinh linh đơn thuần.",
						"thai": "แก… ไม่ใช่แค่วิญญาณธรรมดา",
						"hindi": "तुम… सिर्फ़ एक आत्मा नहीं हो।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "닥쳐라! 내 비밀을… 감히!",
						"english": "Silence! How dare you… my secret!",
						"japanese": "黙れ！私の秘密を… よくも！",
						"chinese": "闭嘴！竟敢… 我的秘密！",
						"french": "Tais-toi ! Mon secret… Comment oses-tu !",
						"spanish": "¡Cállate! ¡Mi secreto… cómo te atreves!",
						"vietnamese": "Im đi! Dám… bí mật của ta!",
						"thai": "หุบปาก! ความลับของข้า… แกกล้า!",
						"hindi": "चुप रहो! मेरे रहस्य को… तुम्हारी हिम्मत कैसे हुई!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "스쿨드! 이제 그만해!",
						"english": "Skuld! Stop this now!",
						"japanese": "スクルド！もうやめろ！",
						"chinese": "斯库尔德！快住手！",
						"french": "Skuld ! Arrête ça tout de suite !",
						"spanish": "¡Skuld! ¡Detente ahora!",
						"vietnamese": "Skuld! Dừng lại ngay!",
						"thai": "สกุลด์! พอได้แล้ว!",
						"hindi": "स्कुल्ड! अब बस करो!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "젠장… 결국… 나의… 배… 맹세…",
						"english": "Damn... In the end... my... ship... vow...",
						"japanese": "くそ…結局…私の…船…誓い…",
						"chinese": "该死…最终…我的…船…誓言…",
						"french": "Maudits… Au final… mon… navire… serment…",
						"spanish": "Maldita sea… Al final… mi… barco… juramento…",
						"vietnamese": "Chết tiệt... Cuối cùng... con thuyền của ta... lời thề...",
						"thai": "ให้ตายเถอะ... ในที่สุด... เรือของข้า... คำสาบาน...",
						"hindi": "धिक्कार है… अंत में… मेरा… जहाज… प्रतिज्ञा…"
					}
				},
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…결국, 너도 피해자였구나.",
						"english": "...So you were a victim too, after all.",
						"japanese": "…結局、お前も被害者だったんだな。",
						"chinese": "…原来，你也是受害者。",
						"french": "...Au final, tu étais aussi une victime.",
						"spanish": "...Al final, tú también fuiste una víctima.",
						"vietnamese": "...Cuối cùng, ngươi cũng là nạn nhân.",
						"thai": "...สุดท้ายแล้ว เจ้าก็เป็นเหยื่อด้วยเช่นกัน",
						"hindi": "...आखिरकार, तुम भी एक पीड़ित थे।"
					}
				},
				{
					"content": {
						"korean": "배? 맹세?",
						"english": "Ship? Vow?",
						"japanese": "船？誓い？",
						"chinese": "船？誓言？",
						"french": "Navire ? Serment ?",
						"spanish": "¿Barco? ¿Juramento?",
						"vietnamese": "Thuyền? Lời thề?",
						"thai": "เรือ? คำสาบาน?",
						"hindi": "जहाज? प्रतिज्ञा?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "저 룬 문자들이, 스쿨드의 모든 것을 말해주고 있었어.",
						"english": "Those runes were telling Skuld's whole story.",
						"japanese": "あのルーン文字が、スクルドの全てを物語っていたんだ。",
						"chinese": "那些符文，讲述着斯库尔德的一切。",
						"french": "Ces runes révélaient tout de Skuld.",
						"spanish": "Esas runas contaban toda la historia de Skuld.",
						"vietnamese": "Những chữ rune đó đã kể lại mọi chuyện về Skuld.",
						"thai": "อักษรรูนเหล่านั้น บอกเล่าเรื่องราวทั้งหมดของสกัลด์",
						"hindi": "वे रूण अक्षर, स्कल्ड की पूरी कहानी बता रहे थे।"
					}
				},
				{
					"content": {
						"korean": "쓰러진 스쿨드의 잔해 속에서, 고대 바이킹 선박의 용머리 조각이 빛을 발했다.",
						"english": "Among Skuld's fallen remains, the dragon figurehead of an ancient Viking ship gleamed.",
						"japanese": "倒れたスクルドの残骸の中から、古代バイキング船の竜頭像が輝きを放った。",
						"chinese": "在倒下的斯库尔德的残骸中，一块古维京船的龙头雕像闪耀着光芒。",
						"french": "Parmi les débris de Skuld, la figure de proue en forme de dragon d'un ancien navire viking brillait.",
						"spanish": "Entre los restos caídos de Skuld, la cabeza de dragón de un antiguo barco vikingo brilló.",
						"vietnamese": "Trong đống đổ nát của Skuld, một tượng đầu rồng của con thuyền Viking cổ đại đã phát sáng.",
						"thai": "ท่ามกลางซากปรักหักพังของสกัลด์ หัวมังกรของเรือไวกิ้งโบราณได้ส่องประกาย",
						"hindi": "स्कल्ड के गिरे हुए अवशेषों के बीच, एक प्राचीन वाइकिंग जहाज का ड्रैगन हेडपीस चमक उठा।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "진실은 아직… 얼음 아래 깊이 잠들어 있었다.",
						"english": "The truth still... lay deep beneath the ice.",
						"japanese": "真実はまだ…氷の下深く眠っていた。",
						"chinese": "真相仍然…深埋在冰层之下。",
						"french": "La vérité... sommeillait encore profondément sous la glace.",
						"spanish": "La verdad aún... yacía profundamente bajo el hielo.",
						"vietnamese": "Sự thật vẫn còn... ngủ sâu dưới lớp băng.",
						"thai": "ความจริงยังคง... หลับใหลอยู่ใต้ธารน้ำแข็งลึก",
						"hindi": "सच अभी भी… बर्फ के नीचे गहराई में सोया हुआ था।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "크하하! 어리석은 것들! 감히 내 영역을 침범하다니!",
						"english": "Hahaha! Foolish mortals! How dare you trespass upon my domain!",
						"japanese": "クハハ！愚かな者どもめ！よくも私の領域を侵犯したな！",
						"chinese": "哈哈哈！愚蠢的东西！竟敢侵犯我的领域！",
						"french": "Hahaha ! Imbéciles ! Comment osez-vous envahir mon domaine !",
						"spanish": "¡Jajaja! ¡Estúpidos mortales! ¡Cómo osáis invadir mi dominio!",
						"vietnamese": "Khà khà! Lũ ngu ngốc! Dám xâm phạm lãnh địa của ta!",
						"thai": "คิกคิก! พวกโง่เง่า! กล้าดียังไงมาบุกรุกอาณาเขตของข้า!",
						"hindi": "कहाहा! मूर्ख प्राणी! हिम्मत कैसे हुई मेरे क्षेत्र में घुसने की!"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…아직, 끝나지 않았어.",
						"english": "...It's not over yet.",
						"japanese": "…まだ、終わってない。",
						"chinese": "…还没，结束。",
						"french": "...Ce n'est pas encore fini.",
						"spanish": "...Aún no ha terminado.",
						"vietnamese": "...Vẫn chưa kết thúc.",
						"thai": "...ยังไม่จบ",
						"hindi": "...अभी, खत्म नहीं हुआ है।"
					}
				},
				{
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "반드시… 진실을 밝혀낼 거야.",
						"english": "I will... surely uncover the truth.",
						"japanese": "必ず…真実を明らかにする。",
						"chinese": "我一定会…揭露真相。",
						"french": "Je vais... absolument révéler la vérité.",
						"spanish": "Debo... revelar la verdad.",
						"vietnamese": "Nhất định... sẽ tìm ra sự thật.",
						"thai": "ข้าจะต้อง... เปิดเผยความจริงให้ได้",
						"hindi": "मैं निश्चित रूप से... सच का पता लगाऊंगा।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "angry"
				}
			]
		}
	]
} as const;
